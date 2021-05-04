import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { TasksComponent } from '../tasks/tasks.component';
import { TaskoneComponent } from '../taskone/taskone.component';
import { TasktwoComponent } from '../tasktwo/tasktwo.component';
import {AuthGuard} from '../guards/auth.guard';
import {UnauthguardGuard} from '../guards/unauthguard.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [UnauthguardGuard], },
  { path: 'tasks',
    canActivate: [AuthGuard],
    component: TasksComponent,
    children: [
      { path: 'task-one', component: TaskoneComponent, canActivate: [AuthGuard], },
      { path: 'task-two', component: TasktwoComponent, canActivate: [AuthGuard], }
    ], },
  { path: '**', redirectTo: '', canActivate: [UnauthguardGuard], },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
