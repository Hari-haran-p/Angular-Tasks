import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Tasks } from '../tasks/tasks.modal';

@Component({
  selector: 'app-add-task',
  standalone: false,
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})

export class AddTaskComponent {
  @Output() close = new EventEmitter();
  @Output() newTask = new EventEmitter<Tasks>();

  task: Tasks = {
    title: '',
    summary: '',
    dueDate: ''
  };
  
  handleSubmit(){
    this.onClose();
    this.newTask.emit(this.task);
  }

  onClose(){
    this.close.emit();
  }
}
