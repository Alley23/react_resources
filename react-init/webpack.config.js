const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const Uglify = require('uglifyjs-webpack-plugin');


module.exports = {
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
            test: /\.js$/,
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
                loader: "less-loader", 
                options: {
                    strictMath: true,
                    noIeCompat: true
                }
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
    devServer: {
        //设置基本目录结构
        contentBase: path.resolve(__dirname, 'dist'),
        //服务器的IP地址，可以使用IP也可以使用localhost
        host: 'localhost',
        //服务端压缩是否开启
        compress: true,
        //配置服务端口号
        port: 8888
    },
    plugins: [
        new HtmlPlugin({
            minify: {
                //是对html文件进行压缩，removeAttrubuteQuotes是却掉属性的双引号。
                removeAttributeQuotes: true
            },
            hash: true,  //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template: './src/index.html'  //是要打包的html模版路径和文件名称。
        }),
        new Uglify(),
        new webpack.BannerPlugin('kai-Li测试！！')
    ]
    
};