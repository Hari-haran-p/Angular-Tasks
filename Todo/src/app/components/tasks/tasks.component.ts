import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tasks } from './tasks.modal';
import { TaskComponent } from './task/task.component';
import { Users } from '../users/users.modal';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent,AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) tasks !: Tasks[];
  @Input({required:true}) name !: string;
  @Input({required:true}) userId !: string;
  @Output() complete = new EventEmitter<string>();
  @Output() newAddedTask = new EventEmitter<Tasks>();

  taskModal : boolean = false;

  handleNewTask(task : Tasks){
    this.newAddedTask.emit(task)
  }

  onOpen(){
    this.taskModal = true;
  }

  onClose(){
    this.taskModal = false;
  }

  handleCompleted(taskId : string){
    this.complete.emit(taskId)
  }

}
