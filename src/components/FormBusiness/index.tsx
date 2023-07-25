import { useEffect } from 'react'
import Image from 'next/image'
import Heading from 'components/Heading'
import * as S from './styles'
declare global {
  interface Window {
    RDStationForms: any
  }
}

export const FormBusiness = () => {
  useEffect(() => {
    const script = document.createElement('script')

    script.src =
      'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js'
    script.onload = () => {
      new window.RDStationForms(
        'formulario-b2b-plataforma-db436fbce23d9e0225f9',
        'null'
      ).createForm()
    }

    document.body.appendChild(script)
  }, [])

  return (
    <S.FormImageWrapper>
      <S.ImageContainer>
        <Image src="/img/people.png" layout="fill" objectFit="cover" />
        <S.ImageDescription>
          <Heading size="medium">
            Invista no desenvolvimento da sua equipe e impulsione o sucesso da
            sua empresa.
          </Heading>
          <span>
            Nossos cursos especializados são projetados para aprimorar as
            habilidades e conhecimentos dos seus colaboradores, capacitando-os a
            enfrentar os desafios do mercado atual.
          </span>
        </S.ImageDescription>
      </S.ImageContainer>
      <S.FormContainer id="formBusiness">
        <form role="main" id="formulario-b2b-plataforma-db436fbce23d9e0225f9" />
      </S.FormContainer>
    </S.FormImageWrapper>
  )
}

export default FormBusiness
