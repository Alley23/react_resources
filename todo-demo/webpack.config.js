const path = require('path');
const webpack = require("webpack");


module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/src/main.js",//唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        publicPath: "/dev/",
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "es2015", "react"
                        ],
                        plugins: [['import', { libraryName: 'antd', style: true }]],
                    }
                },
                exclude: /(node_modules|bower_components)/
            },
            // {
            //     test: /\.css$/,
            //     use: [
            //         {
            //             loader: "style-loader"
            //         }, {
            //             loader: "css-loader",
            //             options: {
            //                 modules: true
            //             }
            //         }
            //     ]
            // },
            // {
            //     test: /\.less$/,
            //     use: [{
            //         loader: "style-loader" // creates style nodes from JS strings 
            //     }, {
            //             loader: "css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]" // translates CSS into CommonJS 
            //     }, {
            //         loader: "less-loader" // compiles Less to CSS 
            //     }]
            // },
            //解决antd和cssmodule冲突问题
            {
                test: /(\.scss|\.css|\.less)$/,
                exclude: /node_modules|material-design-lite\.scss/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 2,
                            localIdentName: '[local]_[hash:base64:8]',
                            minimize: process.env.NODE_ENV === 'production'
                        }
                    },
                    'less-loader'
                ]
            },
            {
                test: /(\.scss|\.css|\.less)$/,
                include: /node_modules|material-design-lite\.scss/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            minimize: process.env.NODE_ENV === 'production'
                        }
                    },
                    'less-loader'
                ]
            },
        ]
    }
}