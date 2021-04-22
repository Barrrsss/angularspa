import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskoneComponent } from './taskone/taskone.component';
import { TasktwoComponent } from './tasktwo/tasktwo.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ItemComponent } from './item/item.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TasksComponent,
    TaskoneComponent,
    TasktwoComponent,
    ItemComponent,

  ],
    imports: [
        BrowserModule,
      HttpClientModule,
        NgCircleProgressModule.forRoot({
            radius: 100,
            outerStrokeWidth: 16,
            innerStrokeWidth: 8,
            outerStrokeColor: '#78C000',
            innerStrokeColor: '#C7E596',
            animationDuration: 300,
            title: '',
            subtitle: '',
            space: -6,
            showBackground: true,
            backgroundStroke: '',
            backgroundPadding: -3,
            backgroundStrokeWidth: 5,
            showUnits: false
        }),
        RouterModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
