module.exports={ //Invalid options in vue.config.js: "baseUrl" is not allowed
//在vue-cli.3.3版本后 baseUrl被废除了，因此这边要写成 publicPath
/**
 * publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/'
 */
    publicPath:'/', //根路径
    // outputDir:'dist' //build输出路径，不指定默认dist目录
}