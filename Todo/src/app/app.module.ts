import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { UsersComponent } from "./components/users/users.component";
import { BrowserModule } from "@angular/platform-browser";
import { TaskComponent } from "./components/tasks/task/task.component";
import { AddTaskComponent } from "./components/add-task/add-task.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations : [AppComponent, HeaderComponent, UsersComponent, TasksComponent, AddTaskComponent],
    bootstrap : [AppComponent],
    imports : [BrowserModule, FormsModule]
})

export class AppModule {}