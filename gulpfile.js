var gulp = require('gulp');
var webpack = require('webpack');
var gutil = require('gulp-util');
var path = require('path');

gulp.task('watch-js', function() {
    var WebpackDevServer = require('webpack-dev-server');
    var config = require('./webpack.config.dev.js');
    var compiler = webpack(config);

    new WebpackDevServer(compiler, {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: config.output.publicPath,
        hot: true,
        historyApiFallback: true
    }).listen(3000, "localhost", function (err) {
            if (err) throw new gutil.PluginError("webpack-dev-server", err);
            gutil.log("[webpack-dev-server]", "http://localhost:3000/webpack-dev-server/index.html");
    })
});