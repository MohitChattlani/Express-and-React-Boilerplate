var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: {
        app: './public/app/App.js'
    },
    output:{
        filename: 'public/build/bundle.js',
        sourceMapFilename: 'public/build/bundle.map'
    },
    watch:true,
    devtool: '#source-map',
    module: {
       loaders: [
           {
               test: /\.jsx?$/,
               exclude: /(node_modules|bower_components)/,
               loader: 'babel-loader',
               query:{
                   presets: ['react','es2015']
               }
           }
       ]
    }
}﻿
