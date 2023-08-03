import Logo from 'components/Logo'
import * as S from './style'
import Heading from 'components/Heading'
import { FacebookSquare, InstagramSquare } from '@styled-icons/fa-brands'
import Link from 'next/link'
import FormBusiness from 'components/FormBusiness'
import { Container } from 'components/Container'
import LogoAbsolute from 'components/LogoAbsolute'

const FooterCorporate = () => {
  return (
    <S.FooterContainer>
      <Container css={{ position: 'relative' }}>
        <S.FooterHead>
          <Logo src="/img/start-corporate.png" />
        </S.FooterHead>
        <S.FooterBody>
          <S.LeftSection>
            <Heading size="medium">Sobre</Heading>
            <p>
              É uma escola de capacitação profissional, mas muito ALÉM disso, É
              uma <strong>FÁBRICA DE EDUCAÇÃO.</strong>
            </p>
            <p>
              Com <strong>8 anos de história</strong>, nossa missão é auxiliar
              estudantes e trabalhadores à aprimorar suas habilidades, (softs e
              hards skills).
            </p>
            <br></br>
            <span>
              Siga as nossas redes sociais:
              <S.Anchors>
                <Link href="https://www.instagram.com/_escolastart/" passHref>
                  <a target="_blank">
                    <InstagramSquare />
                  </a>
                </Link>
                <Link
                  href="https://www.facebook.com/canaisstart"
                  passHref={true}
                >
                  <a target="_blank">
                    <FacebookSquare />
                  </a>
                </Link>
              </S.Anchors>
            </span>
          </S.LeftSection>
          <S.RightSection>
            <FormBusiness />
          </S.RightSection>
        </S.FooterBody>
        <S.Copyright>
          <span>Copyright © Escola START. Todos os Direitos Reservados</span>
        </S.Copyright>
      </Container>
    </S.FooterContainer>
  )
}

export default FooterCorporate
