import Logo from 'components/Logo'
import * as S from './styles'
import { Container } from 'components/Container'
import { MenuLink } from 'components/Menu/styles'
import Render from 'components/Render'
import { cred, company } from './mocks'
import FeedbackList from 'components/FeedbackList'
import FooterCorporate from 'components/FooterCorporate'
import Image from 'next/image'
import Partiners from 'components/PartinersList'
import LogoAbsolute from 'components/LogoAbsolute'
import Slider from 'components/Slider'
import { settings } from './sliderConfig'
import Carousel from 'components/Carousel'

const Corporate = () => {
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <S.Main id="top">
      <S.HeaderCorporate>
        <Container>
          <S.Wrapper>
            <span>
              <Logo
                src="/img/start-corporate.png"
                onClick={() => scrollToElement('top')}
              />
              <S.FlexGap>
                <MenuLink href="/">Home</MenuLink>
                <MenuLink href="/about-us">Quem somos</MenuLink>
              </S.FlexGap>
            </span>
            <S.Button onClick={() => scrollToElement('formBusiness')}>
              Vem pra START
            </S.Button>
          </S.Wrapper>
        </Container>
      </S.HeaderCorporate>
      <S.View>
        <S.LandingImage>
          <Image
            src="/img/people.png"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
          <S.BackgroundGradient />
        </S.LandingImage>
        <S.Flex>
          <Container>
            <S.Heading css={{ maxWidth: '832px' }}>
              Invista no desenvolvimento da sua equipe e impulsione o{' '}
              <strong>sucesso da sua empresa.</strong>
            </S.Heading>
            <p>
              Nossos cursos especializados são projetados para aprimorar as
              habilidades e conhecimentos dos seus colaboradores, capacitando-os
              a enfrentar os desafios do mercado atual.
            </p>
            <S.Button
              onClick={() => scrollToElement('formBusiness')}
              css={{ marginTop: '20px', padding: '12px 32px' }}
            >
              Quero saber mais
            </S.Button>
          </Container>
        </S.Flex>
        <LogoAbsolute posX="70%" posY="40%" rotate="260" />
      </S.View>
      <S.View>
        <S.ViewContainer gap={6.75}>
          <S.Heading
            css={{
              fontWeight: 400,
              textAlign: 'center'
            }}
          >
            Grandes empresas brasileiras encontraram na Escola Start o caminho
            para o <strong>aprimoramento profissional.</strong>
          </S.Heading>
          <S.PartinersContainer>
            <Partiners title={'Nossos principais clientes e parceiros'}>
              <Render items={company} />
            </Partiners>
          </S.PartinersContainer>
        </S.ViewContainer>
      </S.View>
      <S.View>
        <S.Accreditations>
          <Container css={{ position: 'relative' }}>
            <h3>Credenciamentos</h3>
            <S.Relative>
              <Carousel
                items={cred.map((cred, index) => (
                  <Image
                    key={index}
                    src={cred.src}
                    width={82}
                    height={82}
                    objectFit="contain"
                    objectPosition="center"
                  />
                ))}
              />
            </S.Relative>
          </Container>
        </S.Accreditations>
        <FeedbackList />
        <LogoAbsolute posX="-25%" posY="-25%" rotate="0" />
      </S.View>
      <FooterCorporate />
      <LogoAbsolute posX="66%" posY="78%" rotate="258" css={{ zIndex: 0 }} />
    </S.Main>
  )
}

export default Corporate
