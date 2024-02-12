import { User } from './models/User';

const juliMacera = new User({ name: 'Julián', age: 28 });

console.log(juliMacera.get('name'));
console.log(juliMacera.get('age'));

juliMacera.set({ age: 29 });

console.log(juliMacera.get('age'));
