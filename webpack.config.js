// entry point -> output

// console.log(__dirname);

const path = require('path');

// propertis are in webpack.js.org, in documentation
module.exports = {
    // entry: './src/app.js',
    // entry: './src/playground/redux-101.js',
    entry: './src/playground/destructuring.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};

// loader