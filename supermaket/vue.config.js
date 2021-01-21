// module.exports = {
//   configureWebpack: {
//     resolve: {
//       extensions: ['.js', '.vue', '.json'],
//       alias: {
//         'assets': 'src/assets',
//         'components': 'src/components',
//         'views': 'src/views',
//         'network': 'src/network',
//         'common': 'src/common'
//       }
//     },
//   }
// }
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('assets',resolve('src/assets'))
      .set('components',resolve('src/components'))
      .set('views',resolve('src/views'))
      .set('network',resolve('src/network'))
      .set('common',resolve('src/common'))
  }
};