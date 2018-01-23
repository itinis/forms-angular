import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodoListService } from './todo-list.service';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ItemComponent } from './item/item.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { environment } from '../environments/environment';
import { TodoComponent } from './todo/todo.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';


const appRoutes: Routes = [
  { path: 'Input', component:InputComponent  },
  { path: 'Item', component: ItemComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ItemComponent,
    TodoComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule ,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
