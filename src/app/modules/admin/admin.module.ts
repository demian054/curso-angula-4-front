//modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { adminRoutingModule } from './admin-routing.module';

//componentes
import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    adminRoutingModule
  ],
  declarations: [
    MainComponent,
    AddComponent,
    ListComponent,
    EditComponent
  ],
  exports: [
    MainComponent,
    AddComponent,
    ListComponent,
    EditComponent
  ],
  providers: [

  ]
})
export class AdminModule { }
