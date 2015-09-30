var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map', //devtool: 'eval' for maximum build performance
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './public/js/index.jsx'
    ],
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/js/'
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEBUG__: JSON.stringify(true)
        }),
        //Ignore test files
        //new webpack.IgnorePlugin(/-test(\.jsx?|)$/, /app$/),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        root: path.resolve(__dirname, 'public/js'),
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot-loader', 'babel-loader?stage=0&optional[]=runtime'],
            include: path.resolve(__dirname, 'public/js')
        }]
    }
};