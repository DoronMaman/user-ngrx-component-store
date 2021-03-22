import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { UsersStore } from '../user.component.store';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
@Input() userInput:User={
  id:0,
  fullName:''
};


submitted = false;

  constructor(private usersStore:UsersStore) { }

  ngOnInit(): void {
  }

  onSubmit() { this.submitted = true; 
    this.usersStore.ChangeEditUser(false);
    console.log("user Input",this.userInput);

  }


}
