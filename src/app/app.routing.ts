import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// COmponentes
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeeperComponent } from './components/keeper/keeper.component';

const appRoutes: Routes = [
  //{path: '', component: TiendaComponent},
  {path: '', redirectTo: 'tienda', pathMatch: 'full'},
  {path: 'tienda', component: TiendaComponent},
  {path: 'home', component: HomeComponent},
  {path: 'animals', component: AnimalsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'keepers', component: KeeperComponent},
  {path: '**', redirectTo: 'tienda', pathMatch: 'full'}
];

export const appRoutingProviders: any[] = [];
export const routing:  ModuleWithProviders = RouterModule.forRoot(appRoutes);
