module.exports ={
    presets:[
        '@babel/preset-env',
        '@babel/preset-typescript',
       [ '@babel/preset-react',{
           runtime: 'automatic' //para não precisar importar o react
       }]
    ]
}