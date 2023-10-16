import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import { useSession } from 'next-auth/client'
import { useEffect, useState } from 'react'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  const [session, loading] = useSession()
  const [onTop, setOnTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY

      setOnTop(scrollTop == 0 ? true : false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <S.Wrapper>
      <S.HeaderContainer onTop={onTop}>
        <Container>
          <Menu username={session?.user?.name} loading={loading} />
        </Container>
      </S.HeaderContainer>

      <S.Content>{children}</S.Content>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}

export default Base
