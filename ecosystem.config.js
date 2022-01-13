module.exports = {
    apps: [
      {
        name: 'Wrzuc5app',
        exec_mode: 'cluster',
        instances: 'max',
        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'start'
      }
    ]
  }
  