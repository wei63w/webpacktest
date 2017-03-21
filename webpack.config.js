var webpack = require("webpack");
module.exports = {
    entry: ["./entry.js"],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
        		{test: /\.css$/,loader: "style-loader!css-loader"},
        		{ test: /\.(png|jpg)$/, loader: "url-loader?limit=9192&name=[path][name].[ext]" } //?能转成base64?能压缩图片?
        ]
    },
    plugins: [//插入bundle头部注释
	  new webpack.BannerPlugin('---author:wyc----hehe')
	], 
}