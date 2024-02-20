import { User } from './models/User';

const user = new User({ name: 'Mario', age: 34 });

user.fetch();

setTimeout(() => {
  console.log(user);
}, 4000);

// user.set({ name: 'Juliano', age: 24 });
user.save();
