//modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { adminRoutingModule } from './admin-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

//componentes
import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';

//services
import { UserService } from '../services/user.service';
import { AnimalService } from '../services/animal.service';
import { AdminGuard } from '../services/admin.guard';

//pipes
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    adminRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    MainComponent,
    AddComponent,
    ListComponent,
    EditComponent,
    SearchPipe
  ],
  exports: [
    MainComponent,
    AddComponent,
    ListComponent,
    EditComponent
  ],
  providers: [
    UserService,
    AdminGuard
  ]
})
export class AdminModule { }
