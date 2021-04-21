import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { TasksComponent } from '../tasks/tasks.component';
import { TaskoneComponent } from '../taskone/taskone.component';
import { TasktwoComponent } from '../tasktwo/tasktwo.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'tasks', component: TasksComponent,
    children: [
      { path: 'task-one', component: TaskoneComponent },
      { path: 'task-two', component: TasktwoComponent }
    ], },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
