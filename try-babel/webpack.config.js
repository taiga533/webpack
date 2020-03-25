const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: // introductionと同じ設定を書く,
    entry: {
        // introductionと同じ設定を書く
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                ["@babel/preset-env", {
                                useBuiltIns: "usage",
                                corejs: 3,
                                targets: {
                                    browsers: [
                                    "last 1 Chrome version",
                                    "last 1 Firefox version",
                                    "last 1 Edge version",
                                    "ie 11",
                                    "last 1 ChromeAndroid version",
                                    "last 2 iOS versions",
                                    "last 2 Safari versions",
                                ]
                                },
                            }]
                            ]
                        }
                    }
                ]
            }
        ]
    },
}