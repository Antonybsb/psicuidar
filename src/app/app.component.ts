import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { Tooltip, initTWE } from 'tw-elements';
import { SessaoPrincipalComponent } from './components/sessao-principal/sessao-principal.component';
import { TerapeutaEspecialistaComponent } from "./components/terapeuta-especialista/terapeuta-especialista.component";
import { SessaoServicosComponent } from "./components/sessao-servicos/sessao-servicos.component";
import { SessaoCuriosidadesComponent } from "./components/sessao-curiosidades/sessao-curiosidades.component";
import { SessaoApoioEmocionalComponent } from "./components/sessao-apoio-emocional/sessao-apoio-emocional.component";
import { SessaoHorarioFuncionamentoComponent } from "./components/sessao-horario-funcionamento/sessao-horario-funcionamento.component";
import { SessaoSobreComponent } from "./components/sessao-sobre/sessao-sobre.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SessaoSobreLgComponent } from "./components/sessao-sobre-lg/sessao-sobre-lg.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SessaoPrincipalComponent, TerapeutaEspecialistaComponent, TerapeutaEspecialistaComponent, SessaoServicosComponent, SessaoCuriosidadesComponent, SessaoApoioEmocionalComponent, SessaoHorarioFuncionamentoComponent, SessaoSobreComponent, FooterComponent, SessaoSobreLgComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'psicuidar';
  ngOnInit() {
    initTWE({ Tooltip });
  }
}
