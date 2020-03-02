const config = {
    db: {
        username:   (process.env.DB_USERNAME as string),
        password:   (process.env.DB_PASSWORD as string),
        address:    (process.env.DB_ADDRESS as string),
        port:       (process.env.DB_PORT as string)
    }
}

export default config;