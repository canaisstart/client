import Base from 'templates/Base'
import { Container } from 'components/Container'
import * as S from './styles'
import Heading from 'components/Heading'
import Link from 'next/link'
import {
  InstagramSquare,
  FacebookSquare,
  YoutubeSquare
} from '@styled-icons/fa-brands'
import Image from 'next/image'
import { links } from 'configs'

const AboutUs = () => (
  <Base>
    <S.Cover>
      <Image src="/img/aboutus.jpg" alt="about-us" layout="fill" />
    </S.Cover>

    <S.Landing>
      <Container>
        <S.LandingText>
          <Heading size="huge">EDUCAÇÃO AO ALCANCE DE TODOS</Heading>
        </S.LandingText>
      </Container>
    </S.Landing>
    <S.Content>
      <Heading size="medium">Quem Somos</Heading>
      <p>
        A <strong>START Plus</strong> é uma escola de capacitação profissional,
        mas muito além disso, somos uma <strong>FÁBRICA DE EDUCAÇÃO</strong>.
      </p>
      <p>
        Com 8 anos de história, nossa missão é auxiliar estudantes e
        trabalhadores à aprimorar suas habilidades, (softs e hards skills),
        ampliar suas possibilidades e mudar as suas vidas para melhor, logo,
        fomentar a economia local. Aqui, cada aluno é um indivíduo único com um
        potencial incrível, e nós nos dedicamos a ajudar cada um a descobrir,
        alimentar e realizar esse potencial.{' '}
      </p>
      <p>
        <strong>Nosso objetivo é transformar vidas e mudar histórias</strong>{' '}
        através da educação.
      </p>
      <S.SocialMedia>
        <Link passHref href={links.instagram}>
          <a target="_blank">
            <InstagramSquare />
          </a>
        </Link>
        <Link passHref href={links.facebook}>
          <a target="_blank">
            <FacebookSquare />
          </a>
        </Link>
        <Link passHref href={links.youtube}>
          <a target="_blank">
            <YoutubeSquare />
          </a>
        </Link>
      </S.SocialMedia>
    </S.Content>
  </Base>
)

export default AboutUs
