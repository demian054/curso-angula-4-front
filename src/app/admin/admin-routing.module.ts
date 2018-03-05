import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// COmponentes
//import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

//servicios
import { AdminGuard } from '../services/admin.guard';


const adminRoutes: Routes = [
  {
    path: 'admin-panel',
    component: MainComponent,
    canActivate: [AdminGuard],
    children: [
      {path: '', redirectTo: 'listado', pathMatch: 'full'},
      {path: 'listado', component: ListComponent},
      {path: 'crear', component: AddComponent},
      {path: 'editar/:id', component: EditComponent}
    ]
  },
  /*{path: '', component: TiendaComponent},
  {path: '', redirectTo: 'tienda', pathMatch: 'full'},
  {path: 'tienda', component: TiendaComponent},
  {path: 'home', component: HomeComponent},
  {path: 'animals', component: AnimalsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'keepers', component: KeeperComponent},
  {path: '**', redirectTo: 'tienda', pathMatch: 'full'}*/
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class adminRoutingModule {}
