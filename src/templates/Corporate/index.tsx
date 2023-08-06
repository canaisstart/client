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
                <MenuLink href="/corporate#about-us">Sobre Nós</MenuLink>
                <MenuLink href="/">START Plus</MenuLink>
              </S.FlexGap>
            </span>
            <S.MenuLinkBtn onClick={() => scrollToElement('formBusiness')}>
              Vem para a START
            </S.MenuLinkBtn>
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
        <Container>
          <S.LandingText>
            <div>
              <S.Heading css={{ maxWidth: '70%' }}>
                Invista no desenvolvimento da sua equipe e impulsione o{' '}
                <strong>sucesso da sua empresa.</strong>
              </S.Heading>
              <p>
                Nossos cursos especializados são projetados para aprimorar as
                habilidades e conhecimentos dos seus colaboradores,
                capacitando-os a enfrentar os desafios do mercado atual.
              </p>
              <button onClick={() => scrollToElement('formBusiness')}>
                Quero saber mais
              </button>
            </div>
          </S.LandingText>
        </Container>
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
              <Slider settings={settings}>
                {cred.map((cred) => (
                  <S.SliderImage key={cred.label}>
                    <Image
                      src={cred.src}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </S.SliderImage>
                ))}
              </Slider>
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
