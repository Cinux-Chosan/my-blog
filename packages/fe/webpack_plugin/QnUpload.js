const qiniu = require('qiniu')

module.exports = class QnUploader {
  constructor(options) {
    const { ak, sk, scope } = options
    const mac = (this.mac = new qiniu.auth.digest.Mac(ak, sk))
    const putPolicy = (this.putPolicy = new qiniu.rs.PutPolicy({ scope }))
    const config = (this.config = new qiniu.conf.Config())
    // 华南地区
    config.zone = qiniu.zone.Zone_z2
    this.uploadToken = putPolicy.uploadToken(mac)
  }
  apply(compiler) {
    if ('production' !== process.env.NODE_ENV) return
    const { config, uploadToken } = this
    compiler.hooks.emit.tap('qiniuUploader', compilation => {
      const assets = compilation.getAssets()
      for (const key in assets) {
        if (assets.hasOwnProperty(key)) {
          const asset = assets[key]
          const formUploader = new qiniu.form_up.FormUploader(config)
          const putExtra = new qiniu.form_up.PutExtra()
          formUploader.put(
            uploadToken,
            asset.name,
            asset.source.source(),
            putExtra,
            function(respErr, respBody, respInfo) {
              if (respErr) {
                throw respErr
              }
              if (respInfo.statusCode == 200) {
                console.log(typeof respBody)
              } else {
                console.log(respInfo.statusCode)
                console.log(respBody)
              }
            }
          )
        }
      }
    })
  }
}
