import { Container } from 'components/Container'
import * as S from './style'
import Heading from 'components/Heading'
import FeedbackCard from 'components/FeedbackCard'
import { feedbacks } from './mocks'
import Slider from 'components/Slider'
import { settings } from './sliderConfig'
import Button from 'components/Button'

const FeedbackList = () => {
  function scrollToElement(elementId: string) {
    const element = document.getElementById(elementId)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <S.FeedbackListContainer>
      <Container>
        <S.FlexGap>
          <S.FeedbackHeading>
            <Heading>Feedback positivo:</Heading>
            <p>O sucesso dos clientes com a Escola Start</p>
          </S.FeedbackHeading>
          <Slider settings={settings}>
            <FeedbackCard {...feedbacks[0]} />
            <FeedbackCard {...feedbacks[0]} />
            <FeedbackCard {...feedbacks[0]} />
            <FeedbackCard {...feedbacks[0]} />
          </Slider>
          <Button
            onClick={() => scrollToElement('formBusiness')}
            size="large"
            css={{
              width: '100%',
              maxWidth: '320px',
              background: '#01003B',
              alignSelf: 'center',
              ':hover': {
                background: '#34365F'
              }
            }}
          >
            Quero Reeceber Informações
          </Button>
        </S.FlexGap>
      </Container>
    </S.FeedbackListContainer>
  )
}

export default FeedbackList
