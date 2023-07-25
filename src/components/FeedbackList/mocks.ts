type User = {
  name: string
  avatar: string
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
      name: 'Fundação João Goulart',
      avatar: '/clients/rio_prefeitura.png'
    },
    stars: 3,
    course: 'Designer',
    message:
      'dd an excerpt from your personal biography, or simply let the world know who you are and what you have to offer. Connect with your site visitor’s on a personal level and make sure that your site.'
  }
]
