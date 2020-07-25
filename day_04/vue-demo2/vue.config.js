module.exports={ //Invalid options in vue.config.js: "baseUrl" is not allowed
//在vue-cli.3.3版本后 baseUrl被废除了，因此这边要写成 publicPath
/**
 * publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/'
 */
    publicPath:'/', //根路径
    // outputDir:'dist' //build输出路径，不指定默认dist目录
    lintOnSave:true,//是否开启eslint保存检测
    devServer:{
        open:true, //允许自动打开浏览器
        host:'localhost', //默认主机localhost
        port:8080, //端口号，默认8080
        https:true, //是否开启https，默认是http
        proxy:{ //跨域配置

        }
    }
}