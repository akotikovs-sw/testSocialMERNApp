import { Sequelize, DataTypes, STRING } from 'sequelize';

const sequelize = new Sequelize('mydb', 'mysql', '1234', {
  host: '<ip address fro mysql docker container>',
  dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

const PostMessage = sequelize.define('PostMessage', {
  title: {
    type: DataTypes.STRING
  },
  message: {
    type: DataTypes.STRING
  },
  creator: {
    type: DataTypes.STRING
  },
  tags: {
    type: DataTypes.STRING
  },
  likeCount: {
    type: DataTypes.TINYINT,
    defaultValue: 0
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: new Date()
  }
});

await PostMessage.sync();

export default PostMessage;