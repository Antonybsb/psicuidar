import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Artigos {
  id: number;
  imgArtigo: string;
  tituloArtigo: string;
  descricaoArtigo: string;
  dataPostagem: string;
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
      tituloArtigo: 'A Arte de Dialogar: Como a Comunicação Pode Transformar Relações Familiares',
      descricaoArtigo: 'Este artigo pode abordar como a comunicação clara, empática e aberta é essencial para prevenir e resolver conflitos familiares. Inclui dicas práticas, como evitar julgamentos, validar emoções e criar um ambiente seguro para conversas difíceis.',
      dataPostagem: '28 de Dezembro de 2024'
    },
    {
      id: 2,
      imgArtigo: 'assets/images/artigos/pills-3114364_1280.jpg',
      tituloArtigo: 'Trastornos Alimentares',
      descricaoArtigo: 'Compreendendo os Transtornos Alimentares: Diferenças entre Anorexia, Bulimia e Transtorno de Compulsão Alimentar',
      dataPostagem: '28 de Dezembro de 2024'
    },
    {
      id: 3,
      imgArtigo: 'assets/images/artigos/belly-2354_1280.jpg',
      tituloArtigo: 'Cirurgia Bariátrica e Saúde Mental: Antes, Durante e Depois',
      descricaoArtigo: 'A cirurgia bariátrica é uma das intervenções mais eficazes para tratar a obesidade severa e suas comorbidades, como diabetes tipo 2, hipertensão e doenças cardiovasculares. No entanto, seus impactos vão além do corpo, envolvendo transformações psicológicas significativas que precisam ser compreendidas e manejadas adequadamente. A saúde mental desempenha um papel essencial em todas as etapas do processo – desde a preparação pré-operatória até o acompanhamento pós-cirúrgico.',
      dataPostagem: '28 de Dezembro de 2024'
    },
    {
      id: 4,
      imgArtigo: 'assets/images/artigos/adult-1869397_1280.jpg',
      tituloArtigo: 'Medo de Dirigir (Amaxofobia)',
      descricaoArtigo: 'A Psicologia do Trânsito desempenha um papel fundamental na promoção da segurança e do bem-estar dos motoristas. Além de tratar questões como amaxofobia, ela também aborda comportamentos agressivos, distrações ao volante e outros fatores que impactam o trânsito.',
      dataPostagem: '28 de Dezembro de 2024'
    },
  ]

  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return `Publicado em ${date.toLocaleDateString('pt-BR', options)}`
  }

}
