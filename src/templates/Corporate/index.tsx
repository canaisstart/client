import Image from 'next/image'
import * as S from './styles'
import { Container } from 'components/Container'
import { MenuLink } from 'components/Menu/styles'
import FormBusiness from 'components/FormBusiness'
import Heading from 'components/Heading'
import Render from 'components/Render'
import { cred, company } from './mocks'
import FeedbackList from 'components/FeedbackList'
import FooterCorporate from 'components/FooterCorporate'

const ForBusiness = () => {
  return (
    <main>
      <Container>
        <S.Wrapper>
          <Image
            src="/img/start-corporate.png"
            width={130}
            height={45}
            alt="Logo START"
          />
          <MenuLink href="/">START Plus</MenuLink>
        </S.Wrapper>
      </Container>
      <FormBusiness />
      <Container>
        <S.RefsWrapper>
          <S.LeftSection>
            <Heading size="medium">
              Grandes empresas brasileiras encontraram na Escola Start o caminho
              para o <em className="colored">aprimoramento profissional.</em>
            </Heading>
            <Render items={company} />
          </S.LeftSection>
          <S.RightSection>
            <S.Accreditations>
              <Heading size="medium">Credenciamentos:</Heading>
              <Render items={cred} />
            </S.Accreditations>
          </S.RightSection>
        </S.RefsWrapper>
      </Container>
      <FeedbackList />
      <FooterCorporate />
    </main>
  )
}

export default ForBusiness
