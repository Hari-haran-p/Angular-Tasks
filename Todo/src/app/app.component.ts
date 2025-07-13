import { Component } from '@angular/core';
import { UsersComponent } from './components/users/users.component';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { DUMMY_USERS } from './components/users/users';
import { Users } from './components/users/users.modal';
import { Tasks } from './components/tasks/tasks.modal';
import { dummyTasks } from './components/tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [UsersComponent, HeaderComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users : Users[] = DUMMY_USERS;
  tasks : Tasks[] = dummyTasks;
  selectedUserId !: string;

  get getTasks(){
    return this.tasks.filter((task) => this.selectedUserId === task.userId)
  }

  get getName(){
    const user = this.users.find((user) => user.id === this.selectedUserId);
    return user?.name;
  }

  handleSelectedUser(id : string){    
    this.selectedUserId = id;
  }

  handleNewTask(task : Tasks){
    task.userId = this.selectedUserId;
    task.id = new Date().getTime().toString();
    this.tasks.push(task);
  }

  handleCompleted(id : string){
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }
}
