import Realm from 'realm';

// Định nghĩa schema cho thông tin tài khoản
const UserSchema = {
  name: 'User',
  properties: {
    email: 'string',
    password: 'string',
  },
};

// Tạo cơ sở dữ liệu Realm với schema đã định nghĩa
const realm = new Realm({ schema: [UserSchema] });

export default realm;