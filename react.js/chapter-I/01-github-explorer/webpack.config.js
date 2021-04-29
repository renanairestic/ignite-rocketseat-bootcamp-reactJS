const path = require ('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE.ENV !== 'production'
module.exports ={
    mode: isDevelopment ? 'development': 'production', //acelera render do webpack
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname,'src', 'index.tsx'), //compatibilidade formatos de diretório windows e linux
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    },
    resolve:{
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    //deveServer: funcionalidade para recarregar automaticamente sem precisar ininiciar o webpack
    devServer: {
        contentBase:path.resolve(__dirname, 'public'),
        hot: true,
    },
    plugins:[
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlwebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean),
    module: {
        rules:[
            {
                test: /\.(j|t)sx$/,
                exclude: /node_modules/,
                use: {
                        loader: 'babel-loader',
                        options: {
                            plugins:[
                                isDevelopment && require.resolve('react-refresh/babel')
                            ].filter(Boolean)
                        }
                    }, // integração entre o babel e webpack
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ],
    }

};