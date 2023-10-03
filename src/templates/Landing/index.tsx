import { QueryCourseBySlug } from 'graphql/generated/QueryCourseBySlug'
import * as S from './styles'
import * as Home from '../Home/styles'
import { Container } from 'components/Container'
import Image from 'next/image'
import Link from 'next/link'
import theme from 'styles/theme'
import { generateGradients } from 'utils/generateGradients'
import { WorkspacePremium } from '@styled-icons/material-outlined'
import { ReactSVG } from 'react-svg'
import { Color } from '@styled-icons/boxicons-regular'
import ReactPlayer from 'react-player'
import { Grid } from 'components/Grid'

export interface LandingTemplateProps {
  banner: {
    url: string
  }
  heading: string
  description: string
  course: QueryCourseBySlug
  color: string
  learnItems: {
    icon: {
      url: string
    }
    title: string
    description: string
  }[]
  forYou: {
    description: string
    highlight: string
    icon: {
      url: string
    }
  }[]
}

const Landing = ({
  banner,
  heading,
  description,
  course,
  color,
  learnItems,
  forYou
}: LandingTemplateProps) => {
  const [gradient1, gradient2] = generateGradients(color)

  return (
    <S.LandingContainer>
      <S.Header>
        <S.ContainerBeetwen>
          <Image
            src="/img/logo-start-white-01.png"
            width="145px"
            height="35px"
            objectFit="contain"
          ></Image>
          <S.Gap gap="56px">
            <Link href="#">
              <S.HeaderLink>A START</S.HeaderLink>
            </Link>
            <Link href="#">
              <S.HeaderLink>Curso de Excel</S.HeaderLink>
            </Link>
          </S.Gap>
          <S.ServiceButton>Falar com atendente</S.ServiceButton>
        </S.ContainerBeetwen>
      </S.Header>
      <Container>
        <S.Banner>
          <S.Hidden>
            <Image src={banner.url} layout="fill" objectFit="cover" />
            <S.CourseDescription>
              <S.Gap dir="column" gap="40px" alignItems="start">
                <S.Gap gap="24px" dir="column" alignItems="start">
                  <S.Text fontSize="40px" fontWeight="600" color="#282e41">
                    {heading}
                  </S.Text>
                  <S.Text fontWeight="500" fontSize="16px" color="#282e41">
                    {description}
                  </S.Text>
                </S.Gap>
                <S.WatchNow color={gradient1}>Assistir agora</S.WatchNow>
              </S.Gap>
            </S.CourseDescription>
          </S.Hidden>
          <S.TrapezoidButtonBorder>
            <S.TrapezoidButton color={color}>
              <span className="button-text">Curso Online</span>
            </S.TrapezoidButton>
          </S.TrapezoidButtonBorder>
        </S.Banner>
      </Container>
      <S.Benefits>
        <Home.FWrapper>
          <Home.FContent>
            <Home.FIcon>
              <ReactSVG
                src="/img/medal.svg"
                width="116px"
                height="116px"
                style={{ color }}
              />
            </Home.FIcon>
            <Home.FTitle>
              Capacitação Profissional que cabe no seu bolso.
            </Home.FTitle>
            <Home.FDescription>
              Contamos com um time de Professores que trazem conhecimento
              prático vivencial do mercado de trabalho para sala de aula.
            </Home.FDescription>
          </Home.FContent>
          <Home.FContent>
            <Home.FIcon>
              <ReactSVG
                src="/img/computer.svg"
                width="116px"
                height="116px"
                style={{ color }}
              />
            </Home.FIcon>
            <Home.FTitle>
              Você vai aprender com profissionais do mercado.
            </Home.FTitle>
            <Home.FDescription>
              Educação de qualidade a um preço que você pode pagar, fique ligado
              na nossa plataforma e obtenha descontos e benefícios.
            </Home.FDescription>
          </Home.FContent>
          <Home.FContent>
            <Home.FIcon>
              <ReactSVG
                src="/img/notebook.svg"
                width="116px"
                height="116px"
                style={{ color }}
              />
            </Home.FIcon>
            <Home.FTitle>
              Material complementar, consultivo e continuado.
            </Home.FTitle>
            <Home.FDescription>
              Nosso material didático permite que você continue estudando e
              adquirindo conhecimento mesmo após o seu término do curso.
            </Home.FDescription>
          </Home.FContent>
        </Home.FWrapper>
      </S.Benefits>
      <S.ForYou>
        <Container>
          <S.VideoContainer>
            <iframe
              src="https://player.vimeo.com/video/841243728"
              width="100%"
            />
          </S.VideoContainer>
          <S.ForYouContent>
            <S.Text fontSize="40px">
              Esse curso <strong>é para você!</strong>
            </S.Text>
            <S.ForYouList>
              {forYou.map((fy, i) => (
                <S.ForYouCard key={i} color={color}>
                  <Image src={fy.icon.url} width="60px" height="60px"></Image>
                  <S.Text fontSize="24px">{fy.description}</S.Text>
                </S.ForYouCard>
              ))}
            </S.ForYouList>
          </S.ForYouContent>
        </Container>
      </S.ForYou>
      <S.LearningContainer>
        <Container>
          <S.Text
            color="rgba(40, 46, 65, 1)"
            fontSize="40px"
            fontWeight="500"
            align="center"
            style={{ marginTop: '14rem' }}
          >
            O que <strong>você aprenderá</strong>
          </S.Text>
          <Grid>
            {learnItems?.map((item, index) => (
              <S.LearningCard key={index}>
                <S.Gap
                  dir="column"
                  alignItems="start"
                  style={{ justifyContent: 'space-between' }}
                >
                  {item.icon.url && (
                    <Image src={item.icon.url} width="60px" height="60px" />
                  )}
                  <S.Gap gap="0.5rem" dir="column" alignItems="start">
                    <S.Text
                      fontSize="30px"
                      fontWeight="600"
                      color="rgba(40, 46, 65, 1)"
                    >
                      {item.title}
                    </S.Text>
                    <S.Text color="rgba(40, 46, 65, 1)">
                      {item.description}
                    </S.Text>
                  </S.Gap>
                </S.Gap>
              </S.LearningCard>
            ))}
          </Grid>
        </Container>
      </S.LearningContainer>
    </S.LandingContainer>
  )
}

export default Landing
