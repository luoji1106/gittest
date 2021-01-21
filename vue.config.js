module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'assets': resolve('@/assets'),
      'components': resolve('@/components'),
      'views': resolve('@/views'),
      'network': resolve('@/network'),
      'common': resolve('@/common')
    }
  },
}