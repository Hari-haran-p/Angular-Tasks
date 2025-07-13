import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Users } from './users.modal';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  @Input({required:true}) user !: Users;
  @Output() select = new EventEmitter();

  handleUserClick(){
    this.select.emit(this.user.id);
  }
  
}
