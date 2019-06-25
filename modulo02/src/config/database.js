module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true, // include createdAt, updatedAt
    underscored: true,
    underscoredAll: true, // padrao under_scored
  },
};
