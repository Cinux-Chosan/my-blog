const path = require("path");
exports = module.exports = {
  server: {
    port: 3001,
    prefix: "/api",
    url: "http://localhost",
    uploadDir: path.join(__dirname, "../../")
  },
  fe: {
    publicPathPrefix: "post-dist",
    publicPathUrl: "https://static.blog.dist.chosan.cn"
  },
  qnConfig: {
    bucket: "blog-dist-chosan-cn"
  }
};
