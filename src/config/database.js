module.exports = {
  development: {
    dialect: 'mariadb',
    username: 'chord',
    password: 'chord',
    database: 'chord',
    host: 'localhost',
    define: {
      timestamps: true,
    }, 
  },
  production: {
    dialect: 'mariadb',
    username: 'chord',
    password: process.env.MARIADB_PASSWORD,
    database: 'chord',
    host: 'calisto_mariadb',
    define: {
      timestamps: true,
    }, 
  }
}