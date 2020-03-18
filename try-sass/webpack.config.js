const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: // try-dev-serverと同じ設定を書く
    entry: // try-dev-serverと同じ設定を書く
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    plugins: //try-dev-serverと同じ設定を書く
}