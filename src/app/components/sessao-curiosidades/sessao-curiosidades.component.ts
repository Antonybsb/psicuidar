import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Curiosidade {
  imagem: string,
  titulo: string,
  descricao: string
}

@Component({
  selector: 'app-sessao-curiosidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sessao-curiosidades.component.html',
  styleUrl: './sessao-curiosidades.component.css'
})
export class SessaoCuriosidadesComponent {

  curiosidadesIntercaladas: Curiosidade[] = []

  constructor() {
    this.intercalaCuriosidades()
  }

  curiosidadesLeft: Curiosidade[] = [
    {
      imagem: 'assets/svg/undraw_approve_jz6b.svg',
      titulo: 'Desenvolvimento Humano',
      descricao: 'Estuda o crescimento e as mudanças ao longo da vida, incluindo aspectos físicos, cognitivos, sociais e emocionais desde a infância até a velhice.'
    },
    {
      imagem: 'assets/svg/undraw_approve_jz6b.svg',
      titulo: 'Saúde Mental',
      descricao: 'Foca em transtornos mentais, como depressão, ansiedade, bipolaridade e esquizofrenia, bem como suas causas, diagnósticos e tratamentos.'
    },
    {
      imagem: 'assets/svg/undraw_approve_jz6b.svg',
      titulo: 'Psicologia Cognitiva',
      descricao: 'Investiga processos mentais como percepção, memória, aprendizado, resolução de problemas e tomada de decisão.'
    }
  ]

  curiosidadesRight: Curiosidade[] = [
    {
      imagem: 'assets/svg/undraw_approve_jz6b.svg',
      titulo: 'Psicologia Social',
      descricao: 'Estuda como o comportamento, pensamentos e sentimentos das pessoas são influenciados pelos outros.'
    },
    {
      imagem: 'assets/svg/undraw_approve_jz6b.svg',
      titulo: 'Psicologia da Personalidade',
      descricao: 'Explora padrões únicos de pensamentos, sentimentos e comportamentos que definem cada pessoa.'
    },
    {
      imagem: 'assets/svg/undraw_approve_jz6b.svg',
      titulo: 'Neuropsicologia',
      descricao: 'Examina a relação entre o cérebro e o comportamento, focando em como lesões ou doenças cerebrais que afetam a cognição e o comportamento.'
    }
  ]

  intercalaCuriosidades() {
    const maxLength = Math.max(this.curiosidadesLeft.length, this.curiosidadesRight.length);
    for (let i = 0; i < maxLength; i++) {
      if (i < this.curiosidadesLeft.length) {
        this.curiosidadesIntercaladas.push(this.curiosidadesLeft[i]);
      }
      if (i < this.curiosidadesRight.length) {
        this.curiosidadesIntercaladas.push(this.curiosidadesRight[i])
      }
    }
  }

}




