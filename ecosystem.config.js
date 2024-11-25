module.exports = {
    apps: [
      {
        name: 'cosette-server',
        script: './dist/main.js',
        instances: 2, // 负载均衡实例数
        autorestart: true, // 自动重启
        watch: false, // 监听文件变化
        max_memory_restart: '1G', // 内存超过1G时重启
        env: {
          NODE_ENV: 'production'
        }
      }
    ]
  };