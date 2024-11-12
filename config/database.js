module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: env("DATABASE_URL"),
    ssl: env.bool("DATABASE_SSL", false),
  },
  debug: false,
});
