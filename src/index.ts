import { User } from './models/User';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'Juan Carlos', age: 33 });

const userFormm = new UserForm(document.getElementById('root')!, user);

userFormm.render();
