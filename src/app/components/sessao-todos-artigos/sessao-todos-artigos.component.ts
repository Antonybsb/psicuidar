import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Artigos {
  imgArtigo: string;
  tituloArtigo: string;
  descricaoArtigo: string;
  dataPostagem: Date;
}

@Component({
  selector: 'app-sessao-todos-artigos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sessao-todos-artigos.component.html',
  styleUrl: './sessao-todos-artigos.component.css'
})
export class SessaoTodosArtigosComponent {

  artigosUltimosPosts: Artigos[] = [
    {
      imgArtigo: 'assets/images/artigos/man-5154900_1280.jpg',
      tituloArtigo: 'A Arte de Dialogar: Como a Comunicação Pode Transformar Relações Familiares',
      descricaoArtigo: 'Este artigo pode abordar como a comunicação clara, empática e aberta é essencial para prevenir e resolver conflitos familiares. Inclui dicas práticas, como evitar julgamentos, validar emoções e criar um ambiente seguro para conversas difíceis.',
      dataPostagem: new Date()
    },
    {
      imgArtigo: 'assets/images/artigos/indian-1283789_1280.jpg',
      tituloArtigo: 'Impactos dos Conflitos Familiares na Saúde Mental das Crianças e Adolescentes',
      descricaoArtigo: 'Explorar como os desentendimentos dentro de casa afetam o desenvolvimento emocional e psicológico dos mais jovens, com sugestões de como proteger e fortalecer a saúde mental deles.',
      dataPostagem: new Date()
    },
    {
      imgArtigo: 'assets/images/artigos/family-6886803_1280.jpg',
      tituloArtigo: 'Conflitos de Geração: Como Construir Pontes Entre Pais e Filhos',
      descricaoArtigo: 'Um mergulho no choque de valores e perspectivas entre gerações, discutindo como a empatia e o respeito mútuo podem minimizar essas tensões.',
      dataPostagem: new Date()
    },
  ]

  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return `Publicado em ${date.toLocaleDateString('pt-BR', options)}`
  }

}
