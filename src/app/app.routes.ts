import { SessaoPrincipalComponent } from './components/sessao-principal/sessao-principal.component';
import { RouterModule, Routes } from '@angular/router';
import { SessaoTodosArtigosComponent } from './components/sessao-todos-artigos/sessao-todos-artigos.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'artigos', component: SessaoTodosArtigosComponent },
];

// @NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
// export class AppRoutingModule { }
