module.exports = {
  apps: [
    {
      name: "server:prd",
      script: "yarn server:start",
      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
      },
    },
    {
      name: "fe:prd",
      script: "yarn fe:start",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "production",
      },
    },
  ],

  deploy: {
    production: {
      key: "~/.ssh/tencent_cloud",
      port: "12345",
      user: "root",
      host: "chosan.cn",
      ref: "origin/master",
      ssh_options: "StrictHostKeyChecking=no",
      repo: "git@github.com:Cinux-Chosan/my-blog.git",
      path: "/var/www/my-blog",
      // nuxt 服务端构建占用内存过大导致服务器内存不足会 kill 掉进程，因此采取本地构建的方法
      "post-deploy": `echo ${"-".repeat(20)} post-deploy begin ${"-".repeat(20)}\
        && yarn \
        \`# 构建前端代码\` \
        \`#&& yarn fe:build\` \
        \`#&& echo 前端构建完成\` \
        \`# 构建后端代码\` \
        && yarn server:build \
        && pm2 restart ecosystem.config.js \
        && echo 服务启动成功! \
        && git commit -am dep \
        && echo ${"-".repeat(20)} post-deploy end ${"-".repeat(20)}\
        `,
    },
  },
};
