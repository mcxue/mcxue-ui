import Mock, { Random } from 'mockjs';

interface UserInfo {
  id: string;
  name: string;
  gender: number; // 0-女性，1-男性
  age: number;
  married: boolean;
  phone: string;
  email: string;
  address: string;
  avatar: string;
}

const phonePrefix = ['132', '135', '189', '133', '189'];


const mockUserInfoList: UserInfo[] = [];
for (let i = 0; i < 30; i++) {
  const index = Math.floor(Math.random() * phonePrefix.length);
  const name = Random.cname();
  mockUserInfoList.push({
    id: Random.id(),
    name,
    gender: Random.natural(0, 1),
    age: Random.natural(15, 56),
    married: Random.boolean(),
    phone: phonePrefix[index] + Mock.mock(/\d{8}/),
    email: Random.email('qq.com'),
    address: `${Random.province()}-${Random.city()}-${Random.county()}`,
    avatar: Random.image('50x10', '#02adea', name),
  });
}

export {
  mockUserInfoList,
};

export type {
  UserInfo,
};
