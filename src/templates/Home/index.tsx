import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import Button from 'components/Button'
import { Container } from 'components/Container'
import { CourseCardProps } from 'components/CourseCard'
import Feature from 'components/Feature'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import {
  ArrowRightAlt,
  BusinessCenter,
  Group,
  Groups2,
  MenuBook,
  QueryStats,
  School,
  WorkspacePremium
} from '@styled-icons/material-outlined'
import Image from 'next/image'
import Link from 'next/link'
import Base from '../Base'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  popularCourses: CourseCardProps[]
  freeCourses: CourseCardProps[]
}

const Home = ({ banners, freeCourses }: HomeTemplateProps) => (
  <Base>
    <S.Cover>
      <Image src="/img/bg-2.png" alt="home" layout="fill" />
    </S.Cover>

    <S.Landing>
      <Container>
        <S.LandingText>
          <Heading size="huge">EDUCAÇÃO AO ALCANCE DE TODOS</Heading>
          <p>
            Nossa missão é tornar a educação acessível a cada indivíduo,
            independentemente de sua localização, idade ou recursos. Queremos
            que todos tenham a oportunidade de aprender, crescer e alcançar seus
            objetivos pessoais e profissionais.
          </p>
          <span>
            <Link href="/courses" passHref>
              <Button size="large" color="secondary" icon={<ArrowRightAlt />}>
                Ver cursos
              </Button>
            </Link>
          </span>
        </S.LandingText>
      </Container>
    </S.Landing>

    <S.SectionBeneficies>
      <S.BTitle>
        As vantagens de estudar na <strong>Escola START</strong>
      </S.BTitle>
      <S.BDescription>
        Você determina sua maneira de estudar. A START se adapta as suas
        necessidades com formatos que atendem a realidade do aluno através dos
        nossos cursos.
      </S.BDescription>

      <S.FWrapper>
        <Feature icon={<WorkspacePremium />} title="Capacitação Profissional que cabe no seu bolso." description="Contamos com um time de Professores que trazem conhecimento prático
            vivencial do mercado de trabalho para sala de aula." />

        <Feature icon={<School />} title="Você vai aprender com profissionais do mercado." description="Educação de qualidade a um preço que você pode pagar. Fique ligado
            na nossa plataforma e obtenha descontos e benefícios." />

        <Feature icon={<MenuBook />} title="Material complementar, consultivo e continuado." description="Nosso material didático permite que você continue estudando e
            adquirindo conhecimento mesmo após o seu término do curso." />
      </S.FWrapper>
    </S.SectionBeneficies>

    <S.SectionClients>
      <S.CTitle>
        A <strong>Escola START</strong> também leva capacitação profissional
        para os alunos através das <strong>maiores empresas do país</strong>.
      </S.CTitle>
      <S.CSubtitle>Nossos principais clientes e parceiros</S.CSubtitle>
      <S.CImages>
        <S.CImagesCard>
          <Image src="/clients/atacfire.png" width={180} height={50} alt="" />
        </S.CImagesCard>
        <S.CImagesCard>
          <Image src="/clients/abrasel.png" width={120} height={60} alt="" />
        </S.CImagesCard>
        <S.CImagesCard>
          <Image src="/clients/sebrae.png" width={100} height={60} alt="" />
        </S.CImagesCard>
        <S.CImagesCard>
          <Image src="/clients/novotec.png" width={120} height={50} alt="" />
        </S.CImagesCard>
        <S.CImagesCard>
          <Image src="/clients/gov_federal.png" width={140} height={60} alt="" />
        </S.CImagesCard>
        <S.CImagesCard>
          <Image src="/clients/rio_prefeitura.png" width={90} height={50} alt="" />
        </S.CImagesCard>
        <S.CImagesCard>
          <Image src="/clients/sindrio.png" width={230} height={50} alt="" />
        </S.CImagesCard>
        <S.CImagesCard>
          <Image src="/clients/min_defesa.png" width={80} height={95} alt="" />
        </S.CImagesCard>
        <S.CImagesCard>
          <Image src="/clients/fieb.png" width={150} height={59} alt="" />
        </S.CImagesCard>
        <S.CImagesCard>
          <Image src="/clients/sesc.png" width={100} height={40} alt="" />
        </S.CImagesCard>
        <S.CImagesCard>
          <Image src="/clients/scgas.png" width={170} height={45} alt="" />
        </S.CImagesCard>
        <S.CImagesCard>
          <Image src="/clients/gov_sp.png" width={160} height={85} alt="" />
        </S.CImagesCard>
      </S.CImages>
    </S.SectionClients>

    <Container>
      <S.SectionBanner>
        <S.PopularCourseTitle>
          <Heading lineLeft lineColor="secondary">
            Cursos Populares
          </Heading>
        </S.PopularCourseTitle>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNumbers>
      <S.BTitle>
        Números de realizações da <strong>Escola START</strong>
      </S.BTitle>
      <S.BSubTitle>e Nossos credenciamentos</S.BSubTitle>

      <S.NWrapper>
        <S.NContent>
          <S.NBox>
            <S.NSingleBox>
              <S.NIcon>
                <Group />
              </S.NIcon>
              <S.BTitle>
                <b>+22.000</b>
              </S.BTitle>
              <S.BSubTitle>alunos</S.BSubTitle>
            </S.NSingleBox>
            <S.NSingleBox>
              <S.NIcon>
                <BusinessCenter />
              </S.NIcon>
              <S.BTitle>
                <b>+6.000</b>
              </S.BTitle>
              <S.BSubTitle>inseridos no mercado de trabalho</S.BSubTitle>
            </S.NSingleBox>
          </S.NBox>

          <S.NBox>
            <S.NSingleBox>
              <S.NIcon>
                <QueryStats />
              </S.NIcon>
              <S.BTitle>
                <b>77</b>
              </S.BTitle>
              <S.BSubTitle>Nota de Pesquisa e Satisfação</S.BSubTitle>
            </S.NSingleBox>
            <S.NSingleBox>
              <S.NIcon>
                <Groups2 />
              </S.NIcon>
              <S.BTitle>
                <b>+300</b>
              </S.BTitle>
              <S.BSubTitle>colaboradores</S.BSubTitle>
            </S.NSingleBox>
          </S.NBox>
        </S.NContent>

        <S.NContent>
          <S.CredBox>
            {[
              '/cred/crea.png',
              '/cred/crp.png',
              '/cred/cra.png',
              '/cred/abed.png',
              '/cred/ipma.png',
              '/cred/crn.png'
            ].map((cred) => (
              <S.CredSingleBox key={cred}>
                <Image src={cred} objectFit="contain" width={170} height={140} alt="" />
              </S.CredSingleBox>
            ))}
          </S.CredBox>
        </S.NContent>
      </S.NWrapper>
    </S.SectionNumbers>

    <Showcase title="Cursos Gratuitos" courses={freeCourses} />
  </Base>
)

export default Home
