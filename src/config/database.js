module.exports = {
  dialect: "mysql",
  host: "localhost",
  username: "local",
  password: "local",
  database: "sqlnode",
  port: 3306,
  define: {
    timestamps: true,
    underscored: true,
  },
};

// Create db: npx sequelize db:create
