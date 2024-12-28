import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Artigos {
  id: number;
  imgArtigo: string;
  tituloArtigo: string;
  descricaoArtigo: string;
  dataPostagem: Date;
}

@Component({
  selector: 'app-sessao-todos-artigos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sessao-todos-artigos.component.html',
  styleUrl: './sessao-todos-artigos.component.css'
})
export class SessaoTodosArtigosComponent {

  artigosUltimosPosts: Artigos[] = [
    {
      id: 1,
      imgArtigo: 'assets/images/artigos/man-5154900_1280.jpg',
      tituloArtigo: 'A Arte de Dialogar: Como a Comunicação Pode Transformar Relações Familiares 2',
      descricaoArtigo: 'Este artigo pode abordar como a comunicação clara, empática e aberta é essencial para prevenir e resolver conflitos familiares. Inclui dicas práticas, como evitar julgamentos, validar emoções e criar um ambiente seguro para conversas difíceis.',
      dataPostagem: new Date()
    },
    {
      id: 2,
      imgArtigo: 'assets/images/artigos/pills-3114364_1280.jpg',
      tituloArtigo: 'Trastornos Alimentares',
      descricaoArtigo: 'Compreendendo os Transtornos Alimentares: Diferenças entre Anorexia, Bulimia e Transtorno de Compulsão Alimentar',
      dataPostagem: new Date()
    },
    {
      id: 3,
      imgArtigo: 'assets/images/artigos/family-6886803_1280.jpg',
      tituloArtigo: 'Conflitos de Geração: Como Construir Pontes Entre Pais e Filhos',
      descricaoArtigo: 'Um mergulho no choque de valores e perspectivas entre gerações, discutindo como a empatia e o respeito mútuo podem minimizar essas tensões.',
      dataPostagem: new Date()
    },
    {
      id: 4,
      imgArtigo: 'assets/images/artigos/money-2724241_1280.jpg',
      tituloArtigo: 'Finanças em Família: Como Evitar que o Dinheiro Seja Fonte de Conflitos',
      descricaoArtigo: 'Dinheiro é uma das principais causas de brigas familiares. Este artigo poderia discutir como o planejamento financeiro, a transparência e o diálogo sobre dinheiro ajudam a evitar tensões.',
      dataPostagem: new Date()
    },
    {
      id: 5,
      imgArtigo: 'assets/images/artigos/irmaos.jpg',
      tituloArtigo: 'Como Lidar com Conflitos Entre Irmãos e Promover Relações Saudáveis',
      descricaoArtigo: 'Uma análise das causas de brigas entre irmãos (ciúmes, competição por atenção, diferenças de personalidade) e estratégias para construir um relacionamento mais harmonioso entre eles.',
      dataPostagem: new Date()
    },
    {
      id: 6,
      imgArtigo: 'assets/images/artigos/happiness-4279432_1280.jpg',
      tituloArtigo: 'A Importância do Perdão nas Relações Familiares',
      descricaoArtigo: 'Este artigo pode explorar como o perdão funciona como uma ferramenta poderosa para superar mágoas e reconstruir laços familiares, destacando passos práticos para cultivá-lo.',
      dataPostagem: new Date()
    },
  ]

  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return `Publicado em ${date.toLocaleDateString('pt-BR', options)}`
  }

}
