import Logo from 'components/Logo'
import * as S from './style'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import { Email } from '@styled-icons/material-outlined'
import { FacebookCircle } from '@styled-icons/remix-fill'
import { Instagram } from '@styled-icons/fa-brands'
import Link from 'next/link'

const FooterCorporate = () => {
  return (
    <S.FooterContainer>
      <S.FooterHead>
        <Logo src="/img/start-corporate.png" />
      </S.FooterHead>
      <S.FooterBody>
        <S.LeftSection>
          <Heading size="small">Sobre</Heading>
          <span>
            É uma escola de capacitação profissional, mas muito ALÉM disso, É
            uma FÁBRICA DE EDUCAÇÃO. Com 8 anos de história, nossa missão é
            auxiliar estudantes e trabalhadores à aprimorar suas habilidades,
            (softs e hards skills).
          </span>
        </S.LeftSection>
        <S.Divider />
        <S.RightSection>
          <S.FooterForm>
            <Heading size="small">
              Cadastre-se e receba novidades e ofertas especiais
            </Heading>
            <S.FooterInput>
              <TextField placeholder="e-mail" icon={<Email />} />
              <button type="submit">Inscreva-se</button>
            </S.FooterInput>
          </S.FooterForm>
        </S.RightSection>
      </S.FooterBody>
      <S.Copyright>
        <span>Copyright © Escola START | Todos os direitos reservados</span>
        <span>
          Siga as nossas redes sociais:
          <S.Anchors>
            <Link href="https://www.instagram.com/_escolastart/" passHref>
              <a target="_blank">
                <Instagram />
              </a>
            </Link>
            <Link href="https://www.facebook.com/canaisstart" passHref={true}>
              <a target="_blank">
                <FacebookCircle />
              </a>
            </Link>
          </S.Anchors>
        </span>
      </S.Copyright>
    </S.FooterContainer>
  )
}

export default FooterCorporate
