import { TerapeutaEspecialistaComponent } from './../terapeuta-especialista/terapeuta-especialista.component';
import { Component } from '@angular/core';
import { SessaoPrincipalComponent } from '../sessao-principal/sessao-principal.component';
import { SessaoServicosComponent } from '../sessao-servicos/sessao-servicos.component';
import { SessaoCuriosidadesComponent } from '../sessao-curiosidades/sessao-curiosidades.component';
import { SessaoApoioEmocionalComponent } from '../sessao-apoio-emocional/sessao-apoio-emocional.component';
import { SessaoHorarioFuncionamentoComponent } from '../sessao-horario-funcionamento/sessao-horario-funcionamento.component';
import { SessaoSobreComponent } from '../sessao-sobre/sessao-sobre.component';
import { SessaoSobreLgComponent } from '../sessao-sobre-lg/sessao-sobre-lg.component';
import { SessaoArtigosUltimasPostagensComponent } from '../sessao-artigos-ultimas-postagens/sessao-artigos-ultimas-postagens.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SessaoPrincipalComponent, TerapeutaEspecialistaComponent, SessaoServicosComponent, SessaoCuriosidadesComponent, SessaoApoioEmocionalComponent, SessaoHorarioFuncionamentoComponent, SessaoSobreComponent, SessaoSobreLgComponent, SessaoArtigosUltimasPostagensComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
