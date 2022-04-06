import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('node_test', 'node', 'node', {
  host: '172.27.0.2',
  dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});
