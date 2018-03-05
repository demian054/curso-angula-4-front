import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// MOdulos

import { EmailModule } from './modules/email/email.module';
import { AdminModule } from './admin/admin.module';

// COmponentes
import { AppComponent } from './app.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeeperComponent } from './components/keeper/keeper.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component';

//plugins
import { EditorModule } from '@tinymce/tinymce-angular';

// services
import { UserService } from './services/user.service';
import { UploadService } from './services/upload.service';
import { AnimalService } from './services/animal.service';


@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    HomeComponent,
    AnimalsComponent,
    ContactComponent,
    KeeperComponent,
    RegisterComponent,
    LoginComponent,
    UserEditComponent,
    AnimalDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    EditorModule,
    EmailModule,
    AdminModule,
    BrowserAnimationsModule
  ],
  providers: [
    appRoutingProviders,
    UserService,
    UploadService,
    AnimalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
