import { Container } from 'components/Container'
import * as S from './style'
import Heading from 'components/Heading'
import FeedbackCard from 'components/FeedbackCard'
import { feedbacks } from './mocks'
import Slider from 'components/Slider'
import { settings } from './sliderConfig'

const FeedbackList = () => {
  return (
    <S.FeedbackListContainer>
      <Container>
        <S.FlexGap>
          <S.FeedbackHeading>
            <Heading>Feedback</Heading>
            <p>O sucesso dos clientes com a Escola Start</p>
          </S.FeedbackHeading>
          <S.Relative>
            <Slider settings={settings}>
              {feedbacks.map((feedback, index) => (
                <FeedbackCard key={index} {...feedback} />
              ))}
            </Slider>
            <S.Gradient />
          </S.Relative>
        </S.FlexGap>
      </Container>
    </S.FeedbackListContainer>
  )
}

export default FeedbackList
