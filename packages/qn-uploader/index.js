const qiniu = require("qiniu");
const path = require("path");
const fs = require("fs");

module.exports = exports = class QnUploader {
  constructor(options) {
    const { ak, sk, bucket, prefix = "", zone, delBeforeUpload } = Object.assign(
      {
        zone: qiniu.zone.Zone_z2,
        delBeforeUpload: false,
      },
      options
    );
    this.ak = ak;
    this.sk = sk;
    this.bucket = bucket;
    this.zone = zone;
    this.prefix = prefix;
    this.delBeforeUpload = delBeforeUpload;
  }
  get mac() {
    const { ak, sk } = this;
    return new qiniu.auth.digest.Mac(ak, sk);
  }
  get token() {
    const { bucket: scope, mac } = this;
    const putPolicy = new qiniu.rs.PutPolicy({ scope });
    return putPolicy.uploadToken(mac);
  }
  get config() {
    const config = new qiniu.conf.Config();
    // 华南地区
    config.zone = this.zone;
    return config;
  }
  get bucketManager() {
    const { mac, config } = this;
    return new qiniu.rs.BucketManager(mac, config);
  }

  get formUploader() {
    return new qiniu.form_up.FormUploader(this.config);
  }

  async uploadDir(dir) {
    if (this.delBeforeUpload) {
      try {
        await this.cleanBucket();
      } catch (error) {
        console.error(error);
      }
    }
    fs.readdir(dir, "utf8", (err, files) => {
      console.log("file", files);

      if (err) throw err;
      files.forEach((file) =>
        this.uploadOne({
          filename: file,
          content: path.join(dir, file),
          type: "file",
        })
      );
    });
  }
  async cleanBucket() {
    const list = await this.listBucket();
    return this.deleteAll(list);
  }
  uploadOne({ filename, content, type = "bytes" }) {
    return new Promise((resolve, reject) => {
      const { formUploader, token, prefix } = this;
      const putExtra = new qiniu.form_up.PutExtra();
      let method;
      switch (type) {
        case "file":
          method = "putFile";
          break;
        case "bytes":
        default:
          method = "put";
          break;
      }
      const fullname = path.join(prefix, filename);
      formUploader[method](token, fullname, content, putExtra, (err, body, info) => {
        if (err) {
          reject(err);
          // throw err;
        }
        if (info.statusCode == 200) {
          const { key: filename } = body;
          console.log(`文件\t${filename}\t上传成功`);
          resolve();
        } else {
          console.log(info.statusCode);
          console.log(body);
          reject(info);
        }
      });
    });
  }

  listBucket() {
    const { prefix, bucket, bucketManager } = this;
    const options = {
      limit: 1000,
      prefix,
    };
    return new Promise((resolve, reject) => {
      bucketManager.listPrefix(bucket, options, (err, body, info) => {
        if (err) {
          reject(err);
        }
        if (info.statusCode == 200) {
          //如果这个marker不为空，那么还有未列举完毕的文件列表，下次调用listPrefix的时候，
          //指定options里面的marker为这个值
          const { marker, commonPrefixes, items } = body;
          console.log(marker);
          console.log(commonPrefixes);
          resolve(items.map(({ key }) => key));
          // items.forEach(item => {
          //   console.log(item.key)
          // console.log(item.putTime);
          // console.log(item.hash);
          // console.log(item.fsize);
          // console.log(item.mimeType);
          // console.log(item.endUser);
          // console.log(item.type);
          // })
        } else {
          console.log(info.statusCode);
          console.log(body);
          reject(new Error(body.error));
        }
      });
    });
  }
  deleteAll(files = []) {
    const { bucketManager, bucket } = this;
    const deleteOperations = files.map((file) => qiniu.rs.deleteOp(bucket, file));
    return new Promise((resolve, reject) => {
      bucketManager.batch(deleteOperations, (err, body, info) => {
        if (err) {
          console.log(err);
          reject(err);
          //throw err;
        } else {
          // 200 is success, 298 is part success
          if (parseInt(info.statusCode / 100) == 2) {
            body.forEach((item) => {
              if (item.code == 200) {
                console.log(item.code + "\tsuccess");
              } else {
                console.log(item.code + "\t" + item.data.error);
              }
            });
            reject(`${bucket} 未能全部删除`);
          } else {
            console.log(info.deleteusCode);
            console.log(body);
            resolve(`${bucket} 内容删除成功`);
          }
        }
      });
    });
  }
};

module.exports.a = 1;
