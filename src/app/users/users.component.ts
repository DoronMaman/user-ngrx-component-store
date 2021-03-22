import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { UsersStore } from './user.component.store';
import { User } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersStore],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  
  users$=this.usersStore.users$;
  showEdit=this.usersStore.show$;
  @ViewChild('inputSelect')
  inputSelect!: ElementRef;
  private count:number=0
  public editShow:boolean=false;
  public userInput:User={
    id:0,
    fullName:''
  }

  constructor(private readonly usersStore:UsersStore) { }

  ngOnInit(): void {
  
    this.usersStore.setState({users: [],show:false});

    this.users$.subscribe(res=>console.log(res))
  }

  addUser(): void {

    this.count++;
    const user={
      id:this.count,
      fullName:this.inputSelect.nativeElement.value
    };
    const newUser: Omit<User, 'id'> = user;
    this.usersStore.addUser(newUser);
    this.inputSelect.nativeElement.value='';
  }

  deleteUser(id: number): void {
    this.usersStore.deleteUser(id);
  }

  editUser(user:User): void{
    this.usersStore.ChangeEditUser(true);
    this.editShow=true;
    this.userInput=user;

  }



}
