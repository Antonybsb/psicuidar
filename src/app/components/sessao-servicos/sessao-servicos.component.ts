import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Servico {
  imagem: string,
  titulo: string,
  descricao: string
}

@Component({
  selector: 'app-sessao-servicos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sessao-servicos.component.html',
  styleUrl: './sessao-servicos.component.css'
})
export class SessaoServicosComponent {

  servicos: Servico[] = [
    {
      imagem: 'assets/svg/icon-service-2.svg.svg',
      titulo: 'Psicoterapia de casais e famílias',
      descricao: 'Ambiente seguro para casais e famílias melhorarem a comunicação e resolverem conflitos, fortalecendo seus laços e construindo relacionamentos mais saudáveis.'
    },
    {
      imagem: 'assets/svg/icon-service-2.svg.svg',
      titulo: 'Psicolologia familiar sistêmica',
      descricao: 'A psicologia familiar sistêmica analisa as dinâmicas familiares e como os comportamentos afetam o bem-estar dos membros. O foco é promover a comunicação e resolver conflitos para fortalecer os laços familiares.'
    },
    {
      imagem: 'assets/svg/icon-service-2.svg.svg',
      titulo: 'Emergência Psicológica',
      descricao: 'A emergência psicológica envolve intervenções imediatas em crises, como desastres e traumas, oferecendo suporte emocional para ajudar as pessoas a lidarem com estresse e ansiedade, promovendo a recuperação.'
    },
    {
      imagem: 'assets/svg/icon-service-2.svg.svg',
      titulo: 'Psicologia do Trânsito',
      descricao: 'A psicologia do trânsito estuda comportamentos de motoristas e pedestres, visando a segurança viária. O trabalho inclui prevenção de acidentes e campanhas educativas para um trânsito mais seguro.'
    },
    {
      imagem: 'assets/svg/icon-service-2.svg.svg',
      titulo: 'Transtornos Alimentares',
      descricao: 'Transtornos alimentares afetam a relação com a comida e a imagem corporal. A psicologia é essencial no tratamento, abordando questões emocionais e promovendo a recuperação e a saúde mental.'
    },
    {
      imagem: 'assets/svg/icon-service-2.svg.svg',
      titulo: 'Obesidade e Cirurgia Bariátrica',
      descricao: 'A obesidade pode ser tratada com cirurgia bariátrica em casos severos. A psicologia ajuda os pacientes a entenderem suas motivações e a lidarem com mudanças de estilo de vida, mantendo a saúde mental após a cirurgia.'
    },
    {
      imagem: 'assets/svg/icon-cta.svg.svg',
      titulo: 'Pronto para começar sua jornada de evolução?',
      descricao: 'Sua vida emocional merece cuidado e o momento de agir é agora, pois crises e lesões emocionais nem sempre avisam quando vão chegar. De repente, aquele desafio que parecia administrável torna-se um fardo pesado demais para carregar sozinho. É nesses momentos que o apoio especializado faz toda a diferença. Na minha prática de psicologia de emergência, ofereço intervenções rápidas e eficazes para situações de estresse intenso, traumas ou mudanças inesperadas. Meu objetivo é guiá-lo na compreensão das suas emoções, no desenvolvimento de estratégias que realmente funcionam e no fortalecimento da sua resiliência para que você volte a se sentir no controle da sua vida. Você não precisa enfrentar tudo isso sozinho.Transformar sua vida emocional começa com um único passo: decidir que você merece atenção, cuidado e uma nova perspectiva.Vamos juntos reescrever essa história? Seu momento de mudança pode começar hoje.'
    }
  ]

}
