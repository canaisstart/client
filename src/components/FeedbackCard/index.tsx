import StarsFeedback from 'components/StarsFeedback'
import * as S from './style'
import Image from 'next/image'

interface IUser {
  name: string
  avatar: string | null
}

interface IFeedbackCard {
  user: IUser
  stars: 1 | 2 | 3 | 4 | 5
  message: string
  course: string
}

const FeedbackCard = ({ user, stars, message, course }: IFeedbackCard) => {
  return (
    <S.CardContainer>
      <S.CardHead>
        <S.Avatar>
          {user.avatar ? (
            <Image
              src={user.avatar}
              alt="Avatar"
              layout="fill"
              objectFit="contain"
            />
          ) : (
            user.name[0]
          )}
        </S.Avatar>
        <S.InfoWrapper>
          <p>{user.name}</p>
          <span>{course}</span>
          <StarsFeedback number={stars} />
        </S.InfoWrapper>
      </S.CardHead>
      <S.CardBody>
        <p>{message}</p>
      </S.CardBody>
    </S.CardContainer>
  )
}

export default FeedbackCard
