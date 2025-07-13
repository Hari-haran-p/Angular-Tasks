import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tasks } from '../tasks.modal';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task !: Tasks;
  @Output() completed = new EventEmitter<string>();

  handleComplete(){
    this.completed.emit(this.task.id)
  }
}
