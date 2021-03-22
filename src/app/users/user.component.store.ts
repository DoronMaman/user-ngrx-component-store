import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { User } from './user';

export interface UsersState {
  users: User[];
  show:boolean
}

@Injectable()
export class UsersStore extends ComponentStore<UsersState> {
  constructor() {
    super({users: [],
      show:false
    });
  }

  readonly addUser = this.updater((state, user: Omit<User, 'id'>) => ({
    users: [...state.users, {
      id: Math.max(...state.users.map(u => u.id), 0) + 1,
      ...user
    }],
    show:false
  }));

  readonly deleteUser = this.updater((state, id: number) => ({
    users: state.users.filter(user => user.id !== id),
    show:false
  }));

  readonly ChangeEditUser = this.updater((state, showEdit: boolean) => ({
    users: [...state.users],
    show:showEdit
  }));

  readonly users$: Observable<User[]> = this.select(state => state.users);
  readonly show$: Observable<boolean> = this.select(state => state.show);


 
}
