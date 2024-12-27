import { RouterModule, Routes } from '@angular/router';
import { SessaoTodosArtigosComponent } from './components/sessao-todos-artigos/sessao-todos-artigos.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ArtigoComponent } from './components/artigo/artigo.component';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'artigos', component: SessaoTodosArtigosComponent },
  { path: 'artigos/:id', component: ArtigoComponent },
];

@NgModule({ imports: [RouterModule.forRoot(routes), HttpClientModule], exports: [RouterModule] })
export class AppRoutingModule { }
