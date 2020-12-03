import L from '../../common/logger';

let id = 0;
interface User {
  id: number;
  name: string;
  pass: string;
}

const users: User[] = [
  { id: id++, name: 'Pete', pass:'sekret' },
  { id: id++, name: 'Jane', pass: '5555'  }
];

export class UserService {
  all(): Promise<User[]> {
    L.info(users, 'fetch all users');
    return Promise.resolve(users);
  }

  byId(id: number): Promise<User> {
    L.info(`fetch user with id ${id}`);
    return this.all().then((r) => r[id]);
  }

  create(name: string,pass: string): Promise<User> {
    L.info(`create example with name ${name}`);
    const user: User = {
      id: id++,
      name,
      pass,
    };
    users.push(user);
    return Promise.resolve(user);
  }
}

export default new UserService();
