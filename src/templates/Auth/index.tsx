import Link from 'next/link'
import Image from 'next/image'

import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const currentYear = new Date().getFullYear()

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <Image
        src="/img/auth1-bg.png"
        alt="START Auth Page"
        layout="fill"
        objectFit="cover"
      />
      <S.BannerContent>
        <Link href="/" passHref>
          <Logo id="banner" />
        </Link>
        <div>
          <Heading size="huge">Os melhores cursos num só lugar</Heading>
          <S.Subtitle>
            <strong>Escola START Plus</strong> é a melhor plataforma de cursos
            de formação profissional.
          </S.Subtitle>
        </div>

        <S.Footer>
          Escola START {currentYear} © Todos os Direitos Reservados.
        </S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <S.Logo>
          <Link href="/">
            <a>
              <Image
                src="/img/logo-start-dark-02.png"
                width={130}
                height={50}
              />
            </a>
          </Link>
        </S.Logo>

        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth
