import { Component } from '@angular/core';
import { User } from '../user';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  userList: User[] = [];
  formUser = new FormGroup({
    id: new FormControl<number>(1),
    username: new FormControl<string>(''),
    email: new FormControl<string>(''),
    password: new FormControl<string>(''),
    role: new FormControl<string>(''),
  });
  constructor(private userService: UserService) {
    this.userList = this.userService.getUserAll();
  }
  IsAdd: number = 0;
  IsUpdate: number = 0;
  Add(){
    this.userService.AddUser(this.formUser)
  }
  Update(){
    this.userService.UpdateUser

  }
  Edit( index : number){
    this.formUser.setValue(this.userService.EditUser(index));
  }
  Delete (index:number){
    if (confirm('Bạn chắc chắn muốn xóa')) {
      this.userService.DeleteUser(index);
    }
  }
}
