import { User } from './models/User';
import { UserEdit } from './views/UserEdit';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'Juan Carlos', age: 33 });
const root = document.getElementById('root');

if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
  console.log(userEdit);
} else {
  throw new Error('root element not found.');
}
