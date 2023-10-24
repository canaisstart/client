import Link from 'next/link'

import Heading from 'components/Heading'
import * as S from './styles'
import Image from 'next/image'
import {
  FacebookCircle,
  Instagram,
  LinkedinBox,
  Youtube
} from '@styled-icons/remix-fill'
import { links } from 'configs'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Wrapper>
    <Image
      src="/img/logo-start-dark-02.png"
      width={130}
      height={50}
      alt="Logo START"
    />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contate-nos
        </Heading>
        <p>
          Rua Sacadura Cabral, 379
          <p>Rio de Janeiro CEP 23455-000</p>
        </p>
        <p>(21) 99566-8151</p>

        <a href="mailto:atendimento@canaisstart.com.br">
          atendimento@canaisstart.com.br
        </a>
        <ul>
          <li>
            <a
              href={links.instagram}
              target="_blank"
              rel="noopenner, noreferrer"
            >
              <Instagram size={24} />
            </a>
          </li>
          <li>
            <a
              href={links.facebook}
              target="_blank"
              rel="noopenner, noreferrer"
            >
              <FacebookCircle size={24} />
            </a>
          </li>
          <li>
            <a href={links.youtube} target="_blank" rel="noopenner, noreferrer">
              <Youtube size={24} />
            </a>
          </li>
          <li>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopenner, noreferrer"
            >
              <LinkedinBox size={24} />
            </a>
          </li>
        </ul>
      </S.Column>

      <S.Column aria-labelledby="social-media">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Institucional
        </Heading>

        <nav id="institutional">
          <Link href="/about-us">Sobre Nós</Link>
          <Link href="/">Nosso Time</Link>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="resources">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Acesse
        </Heading>

        <nav id="resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/courses">
            <a>Cursos</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-label="contact">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Informações
        </Heading>

        <Link href="/faq">
          <a>Dúvidas Frequentes</a>
        </Link>
        <Link href="/policies">
          <a>Políticas de Privacidade</a>
        </Link>
        <Link href="/terms">
          <a>Termos de Uso</a>
        </Link>
      </S.Column>
    </S.Content>

    <S.Copyright>
      Escola START {currentYear} © Todos os Direitos Reservados.
    </S.Copyright>
  </S.Wrapper>
)

export default Footer
