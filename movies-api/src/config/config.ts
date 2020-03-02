const config = {
    db: {
        connection: {
            username:   (process.env.DB_USERNAME as string),
            password:   (process.env.DB_PASSWORD as string),
            address:    (process.env.DB_ADDRESS as string),
            port:       (process.env.DB_PORT as string)
        },
        name: (process.env.DB_NAME as string)
    }
}

export default config;