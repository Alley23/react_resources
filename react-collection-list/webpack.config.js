const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const Uglify = require('uglifyjs-webpack-plugin');

var env = process.env.NODE_ENV;

var config = {
    devtool: 'eval-source-map',
    entry: {
        entry: './src/index.js'
    },
    output: {
        //path.resolve(__dirname,'dist')就是获取了项目的绝对路径
        path: path.resolve(__dirname, 'dist'),
        //输出的文件名称
        filename: 'bundle.js'
    },
    module: {
      rules:[
        {
            test: /(\.jsx|\.js)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
            }
        },
        {
            test: /\.less$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "less-loader"
            }]
        },
        {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // 将 JS 字符串生成为 style 节点
            }, {
                loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
            }, {
                loader: "sass-loader" // 将 Sass 编译成 CSS
            }]
        },
        {
            test:/\.(png|jpg|gif)/ ,
            use:[{
                loader:'url-loader',
                options:{
                    limit: 500000   //是把小于500000B的文件打成Base64的格式，写入JS。
                }
            }]
        }
      ]  
    },
    plugins:[
        new HtmlPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        //设置基本目录结构
        contentBase: path.resolve(__dirname, 'src'),
        //服务器的IP地址，可以使用IP也可以使用localhost
        host: 'localhost',
        //服务端压缩是否开启
        compress: true,
        //配置服务端口号
        port: 8888
    },
};

if(env === 'production'){
    config.plugins = [
        new HtmlPlugin({
            minify: {
                //是对html文件进行压缩，removeAttrubuteQuotes是却掉属性的双引号。
                removeAttributeQuotes: true
            },
            hash: true,  //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template: './src/index.html'  //是要打包的html模版路径和文件名称。
        }),
        new Uglify(),
        new webpack.BannerPlugin('kai-Li测试！！'),
    ]
}

module.exports = config