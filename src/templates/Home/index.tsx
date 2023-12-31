import Base from 'templates/Base'
import { BannerProps } from 'components/Banner'
import { CourseCardProps } from 'components/CourseCard'
import { HighlightProps } from 'components/Highlight'
import { Container } from 'components/Container'
import BannerSlider from 'components/BannerSlider'
import Showcase from 'components/Showcase'
import Image from 'next/image'

import * as S from './styles'
import {
  BusinessCenter,
  Group,
  Groups2,
  MenuBook,
  QueryStats,
  School,
  WorkspacePremium
} from '@styled-icons/material-outlined'

export type HomeTemplateProps = {
  banners: BannerProps[]
  mostPopularCoursesTitle: string
  mostPopularHighlight: HighlightProps
  mostPopularCourses: CourseCardProps[]
  freeCoursesTitle: string
  freeCourses: CourseCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  mostPopularCoursesTitle,
  mostPopularHighlight,
  mostPopularCourses,
  freeCoursesTitle,
  freeCourses
}: HomeTemplateProps) => (
  <Base>
    <S.Cover>
      <Image src="/img/bg01.png" alt="Home background" layout="fill" />
    </S.Cover>

    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionBeneficts>
      <S.SubTitle>Educação ao alcance de todos</S.SubTitle>
      <S.Title>
        As vantagens de estudar na <strong>Escola START</strong>
      </S.Title>
      <S.Description>
        Você determina sua maneira de estudar. A START se adapta as suas
        necessidades com formatos que atendem a realidade do aluno através dos
        nossos cursos
      </S.Description>

      <S.FWrapper>
        <S.FContent>
          <S.FIcon>
            <WorkspacePremium />
          </S.FIcon>
          <S.FTitle>
            Educação básica e capacitação profissional de qualidade
          </S.FTitle>
          <S.FDescription>
            Desenvolvimento educacional para alunos de instituições públicas do
            Brasil. Contamos com um time de Professores que trazem conhecimento
            prático vivencial para sala de aula.
          </S.FDescription>
        </S.FContent>

        <S.FContent>
          <S.FIcon>
            <School />
          </S.FIcon>
          <S.FTitle>Você vai aprender com profissionais do mercado.</S.FTitle>
          <S.FDescription>
            Educação de qualidade a um preço que você pode pagar. Fique ligado
            na nossa plataforma e obtenha descontos e benefícios.
          </S.FDescription>
        </S.FContent>

        <S.FContent>
          <S.FIcon>
            <MenuBook />
          </S.FIcon>
          <S.FTitle>Material complementar, consultivo e continuado.</S.FTitle>
          <S.FDescription>
            Nosso material didático permite que você continue estudando e
            adquirindo conhecimento mesmo após o seu término do curso.
          </S.FDescription>
        </S.FContent>
      </S.FWrapper>
    </S.SectionBeneficts>
    <S.SectionClients>
      <S.CTitle>
        A <strong>Escola START</strong> também leva capacitação profissional
        para os alunos através das <strong>maiores empresas do país</strong>
      </S.CTitle>
      <S.CSubtitle>Nosso principais clientes e parceiros:</S.CSubtitle>
      <S.CImages>
        <S.CImagesCard>
          <Image src="/clients/atacfire.png" width={180} height={50} />
        </S.CImagesCard>
        <S.CImagesCard>
          <Image src="/clients/abrasel.png" width={120} height={60} />
        </S.CImagesCard>
        <S.CImagesCard>
          <Image src="/clients/sebrae.png" width={100} height={60} />
        </S.CImagesCard>
        <S.CImagesCard>
          <Image src="/clients/novotec.png" width={120} height={50} />
        </S.CImagesCard>
        <S.CImagesCard>
          <Image src="/clients/gov_federal.png" width={140} height={60} />
        </S.CImagesCard>
        <S.CImagesCard>
          <Image src="/clients/rio_prefeitura.png" width={90} height={50} />
        </S.CImagesCard>
        <S.CImagesCard>
          <Image src="/clients/sindrio.png" width={230} height={50} />
        </S.CImagesCard>
        <S.CImagesCard>
          <Image src="/clients/min_defesa.png" width={80} height={95} />
        </S.CImagesCard>
        <S.CImagesCard>
          <Image src="/clients/fieb.png" width={150} height={59} />
        </S.CImagesCard>
        <S.CImagesCard>
          <Image src="/clients/sesc.png" width={100} height={40} />
        </S.CImagesCard>
        <S.CImagesCard>
          <Image src="/clients/scgas.png" width={170} height={45} />
        </S.CImagesCard>
        <S.CImagesCard>
          <Image src="/clients/gov_sp.png" width={160} height={85} />
        </S.CImagesCard>
      </S.CImages>
    </S.SectionClients>

    <Showcase
      title={mostPopularCoursesTitle}
      highlight={mostPopularHighlight}
      courses={mostPopularCourses}
    />

    <S.SectionNumbers>
      <S.SubTitle>Nossos credenciamentos</S.SubTitle>
      <S.Title>
        Números de realizações da <strong>Escola START</strong>
      </S.Title>

      <S.NWrapper>
        <S.NContent>
          <S.NBox>
            <S.NSingleBox>
              <S.NIcon>
                <Group />
              </S.NIcon>
              <S.Title>
                <b>+20.000</b>
              </S.Title>
              <S.SubTitle>
                alunos {'(Educação básica e profissionalizante)'}
              </S.SubTitle>
            </S.NSingleBox>
            <S.NSingleBox>
              <S.NIcon>
                <BusinessCenter />
              </S.NIcon>
              <S.Title>
                <b>+5.000</b>
              </S.Title>
              <S.SubTitle>inseridos no mercado de trabalho</S.SubTitle>
            </S.NSingleBox>
          </S.NBox>

          <S.NBox>
            <S.NSingleBox>
              <S.NIcon>
                <QueryStats />
              </S.NIcon>
              <S.Title>
                <b>77</b>
              </S.Title>
              <S.SubTitle>nps</S.SubTitle>
            </S.NSingleBox>
            <S.NSingleBox>
              <S.NIcon>
                <Groups2 />
              </S.NIcon>
              <S.Title>
                <b>+300</b>
              </S.Title>
              <S.SubTitle>back-offices e colaboradores</S.SubTitle>
            </S.NSingleBox>
          </S.NBox>
        </S.NContent>

        <S.NContent>
          <S.CredBox>
            <S.CredSingleBox>
              <Image src="/cred/crea.png" width={140} height={80} />
            </S.CredSingleBox>

            <S.CredSingleBox>
              <Image src="/cred/crp.png" width={160} height={50} />
            </S.CredSingleBox>

            <S.CredSingleBox>
              <Image src="/cred/cra.png" width={170} height={40} />
            </S.CredSingleBox>
          </S.CredBox>

          <S.CredBox>
            <S.CredSingleBox>
              <Image src="/cred/crc.png" width={120} height={100} />
            </S.CredSingleBox>

            <S.CredSingleBox>
              <Image src="/cred/abed.png" width={130} height={60} />
            </S.CredSingleBox>
          </S.CredBox>
        </S.NContent>
      </S.NWrapper>
    </S.SectionNumbers>

    <Showcase title={freeCoursesTitle} courses={freeCourses} />
  </Base>
)

export default Home
