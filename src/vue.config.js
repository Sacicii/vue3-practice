module.exports = {
  configureWebpack: {
      resolve: {
          alias: {
              // '@': 'src' 内部已经配置了这个
              'assets': '@/assets',
              'components': '@/components',
              'network': '@/network',
              'views': '@/views',
          }
      }
  }
}
