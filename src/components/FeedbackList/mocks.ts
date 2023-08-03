type User = {
  name: string
  avatar: string | null
}

interface IFeedback {
  user: User
  stars: 1 | 2 | 3 | 4 | 5
  course: string
  message: string
}

export const feedbacks: IFeedback[] = [
  {
    user: {
      name: 'A',
      avatar: '/clients/rio_prefeitura.png'
    },
    stars: 1,
    course: 'Designer',
    message:
      'dd an excerpt from your personal biography, or simply let the world know who you are and what you have to offer. Connect with your site visitor’s on a personal level and make sure that your site.'
  },
  {
    user: {
      name: 'Valéria Paulo - Programa Rio Liderança Feminina',
      avatar: null
    },
    course: 'Programa Rio Liderança Feminina - FGJ',
    message:
      'Me ajudou a traçar caminhos e atitudes que irão me ajudar no auto desenvolvimento.',
    stars: 5
  },
  {
    user: {
      name: 'Vania Cristina',
      avatar: null
    },
    course: 'Programa Rio Liderança Feminina - FGJ',
    stars: 5,
    message:
      'Foi excelente, consegui analisar com clareza como elaborar orçamentos e gerenciar  dívidas e formas de investimentos seguro. Parabéns pela iniciativa.'
  },
  {
    user: {
      name: 'George de Souza - Fundação João Goulart',
      avatar: null
    },
    course: 'Inovação na Gestão Pública',
    stars: 5,
    message:
      'A palestra foi bastante enriquecedora, trouxe boas reflexões e exemplos práticos que podem contribuir para nossos trabalhos na gestão pública.'
  },
  {
    user: {
      name: 'Elizabeth Souza - Fundação João Goulart',
      avatar: null
    },
    course: 'Design Thinking',
    message:
      'Excelente oportunidade pra propiciar um olhar compartilhado sobre os problemas enfrentados por usuários em comum e estabelecer sugestões inovadoras.',
    stars: 5
  }
]
