const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database:{
        connection: process.env.connection || 'mongodb://admin:nofood123456@ds245762.mlab.com:45762/nofood'
    },
    Security:{
        secretKey: 'd41d8cd98f00b204e9800998ecf8427e|733f463f2caee158e4d56a07364d527f'
    }
}

module.exports = variables;