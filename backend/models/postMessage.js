import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/db.js';

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