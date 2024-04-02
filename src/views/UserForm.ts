import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.update-name': this.onUpdateNameClick,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onUpdateNameClick = (): void => {
    const input = this.parent.querySelector('input');

    if (input) {
      const name = input.value;

      this.model.set({ name });
    }
  };

  template(): string {
    return `
     <div>
        <h1>User Form </h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>Age: ${this.model.get('age')}</div>
        <input/><button class='update-name'>Update Name</button>
        <button class='set-age'>Set Random Age</button>
     </div>
    `;
  }
}
