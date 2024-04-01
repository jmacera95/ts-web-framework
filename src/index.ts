import { User } from './models/User';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'Juan Carlos', age: 33 });
const root = document.getElementById('root');

if (root) {
  const userFormm = new UserForm(root, user);

  userFormm.render();
} else {
  throw new Error('root element not found.');
}
