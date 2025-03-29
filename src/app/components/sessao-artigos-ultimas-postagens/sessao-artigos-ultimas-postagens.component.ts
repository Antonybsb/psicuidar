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
  selector: 'app-sessao-artigos-ultimas-postagens',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sessao-artigos-ultimas-postagens.component.html',
  styleUrl: './sessao-artigos-ultimas-postagens.component.css'
})
export class SessaoArtigosUltimasPostagensComponent {

  artigosUltimosPosts: Artigos[] = [
    {
      id: 1,
      imgArtigo: 'assets/images/artigos/bible-6948549_1280.jpg',
      tituloArtigo: 'Saúde emocional do Líder Cristão: Ser um líder cristão é uma missão que carrega um peso único.',
      descricaoArtigo: 'Ser um líder cristão é uma missão que carrega um peso único. Pastores, presbíteros, missionários e outros líderes eclesiásticos são frequentemente vistos como pilares de força, guias espirituais e exemplos de resiliência. No entanto, por trás do púlpito ou da liderança comunitária, muitos enfrentam uma batalha silenciosa contra o adoecimento emocional e mental.',
      dataPostagem: new Date()
    },
    {
      id: 2,
      imgArtigo: 'assets/images/artigos/man-5154900_1280.jpg',
      tituloArtigo: 'A Arte de Dialogar: Como a Comunicação Pode Transformar Relações Familiares',
      descricaoArtigo: 'Este artigo pode abordar como a comunicação clara, empática e aberta é essencial para prevenir e resolver conflitos familiares. Inclui dicas práticas, como evitar julgamentos, validar emoções e criar um ambiente seguro para conversas difíceis.',
      dataPostagem: new Date()
    },
    {
      id: 3,
      imgArtigo: 'assets/images/artigos/pills-3114364_1280.jpg',
      tituloArtigo: 'Transtornos Alimentares',
      descricaoArtigo: 'Compreendendo os Transtornos Alimentares: Diferenças entre Anorexia, Bulimia e Transtorno de Compulsão Alimentar',
      dataPostagem: new Date()
    },
    // {
    //   id: 4,
    //   imgArtigo: 'assets/images/artigos/belly-2354_1280.jpg',
    //   tituloArtigo: 'Cirurgia Bariátrica e Saúde Mental: Antes, Durante e Depois',
    //   descricaoArtigo: 'A cirurgia bariátrica é uma das intervenções mais eficazes para tratar a obesidade severa e suas comorbidades, como diabetes tipo 2, hipertensão e doenças cardiovasculares.',
    //   dataPostagem: new Date()
    // },
  ]

  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return `Publicado em ${date.toLocaleDateString('pt-BR', options)}`
  }
}
