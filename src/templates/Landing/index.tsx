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
import { Grid } from 'components/Grid'
import { FormEvent, useState } from 'react'
import { RDStation, defaultValuesRDStation } from 'utils/RDStation/api'

export interface LandingTemplateProps {
  banner: {
    url: string
  }
  heading: string
  promotional_price: number
  price: number
  description: string
  course: {
    name: string
    demo: string
  }
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
  installment: {
    max_installment: number
    installment_price: number
    fees: boolean
  }
}

const Landing = ({
  banner,
  heading,
  description,
  course,
  color,
  learnItems,
  forYou,
  installment,
  promotional_price,
  price
}: LandingTemplateProps) => {
  const [gradient1, gradient2] = generateGradients(color)
  const [values, setValues] = useState({
    name: '',
    personal_phone: '',
    email: ''
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await RDStation.post('/deals', {
      ...defaultValuesRDStation,
      contacts: {
        emails: [{ email: values.email }],
        phones: [
          {
            phone: values.personal_phone,
            type: 'cellphone'
          }
        ]
      },
      deal_products: [
        {
          amount: 1,
          name: course.name,
          price: promotional_price || price
        }
      ]
    })
  }

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
              <S.HeaderLink>Curso de {course.name}</S.HeaderLink>
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
            <Home.FTitle>Material Didático de Qualidade</Home.FTitle>
            <Home.FDescription>
              Nosso material didático proporciona a você um aprendizado
              contínuo, elaborado por profissionais conceituados. A START conta
              com conteúdos exclusivos e frequentemente atualizados. Aqui você
              tem suporte às mais recentes novidades da plataforma.
            </Home.FDescription>
          </Home.FContent>
        </Home.FWrapper>
      </S.Benefits>
      <S.ForYou>
        <Container>
          <S.VideoContainer>
            <iframe
              src={`https://player.vimeo.com/video/${course.demo}`}
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
                  justify="center"
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
      <S.DetailsContainer color={color}>
        <Container>
          <S.Group>
            <S.LeftSection>
              <S.Gap dir="column" alignItems="start" gap="5rem">
                <S.Text fontSize="50px">
                  Seu <strong>investimento</strong>
                </S.Text>
                <S.Gap dir="column" alignItems="start" gap="0">
                  {installment.max_installment && (
                    <S.Text fontSize="24px">
                      {installment.max_installment}x de
                    </S.Text>
                  )}
                  {installment.installment_price && (
                    <S.Text fontSize="60px" fontWeight="600" height="60px">
                      R$
                      {String(installment.installment_price.toFixed(2)).replace(
                        '.',
                        ','
                      )}
                    </S.Text>
                  )}
                  {installment.fees && (
                    <S.Text fontSize="24px">sem juros do cartão</S.Text>
                  )}
                </S.Gap>
                <S.Gap justify="space-between" width="100%">
                  {promotional_price && (
                    <div>
                      <S.Text fontSize="24px">
                        Valor total <strong>com desconto</strong>
                      </S.Text>
                      <S.Text fontSize="40px" fontWeight="600">
                        R$
                        {String(promotional_price.toFixed(2)).replace('.', ',')}
                      </S.Text>
                    </div>
                  )}
                  {price && (
                    <div>
                      <S.Text fontSize="24px">
                        Valor <strong>sem desconto</strong>
                      </S.Text>
                      <S.Text fontSize="40px" fontWeight="600">
                        R$
                        {String(price.toFixed(2)).replace('.', ',')}
                      </S.Text>
                    </div>
                  )}
                </S.Gap>
              </S.Gap>
            </S.LeftSection>
            <S.RightSection>
              <S.Form onSubmit={(e) => handleSubmit(e)}>
                <S.Gap dir="column" alignItems="start" gap="48px">
                  <S.Text color="rgba(40, 46, 65, 1)" fontSize="32px">
                    Faça sua inscrição para o{' '}
                    <strong>curso de {course.name}</strong>
                  </S.Text>
                  <S.Gap
                    dir="column"
                    gap="24px"
                    alignItems="start"
                    width="100%"
                  >
                    <S.InputContainer>
                      <label htmlFor="name">Nome</label>
                      <S.Input
                        name="name"
                        id="name"
                        placeholder="Digite seu nome completo"
                        onChange={(e) =>
                          setValues((o) => ({ ...o, name: e.target.value }))
                        }
                      />
                    </S.InputContainer>
                    <S.InputContainer>
                      <label htmlFor="personal_phone">Telefone</label>
                      <S.Input
                        name="personal_phone"
                        id="personal_phone"
                        placeholder="(21) 99999-9999"
                        onChange={(e) =>
                          setValues((o) => ({
                            ...o,
                            personal_phone: e.target.value
                          }))
                        }
                      />
                    </S.InputContainer>
                    <S.InputContainer>
                      <label htmlFor="email">Email</label>
                      <S.Input
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Digite seu melhor email aqui"
                        onChange={(e) =>
                          setValues((o) => ({ ...o, email: e.target.value }))
                        }
                      />
                    </S.InputContainer>
                  </S.Gap>
                  <S.WatchNow
                    color={gradient1}
                    style={{ width: '100%', height: '72px' }}
                    type="submit"
                  >
                    Começar agora
                  </S.WatchNow>
                </S.Gap>
              </S.Form>
            </S.RightSection>
          </S.Group>
        </Container>
      </S.DetailsContainer>
    </S.LandingContainer>
  )
}

export default Landing
