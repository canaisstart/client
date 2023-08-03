import { useEffect } from 'react'
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
    <S.FormContainer id="formBusiness">
      <form role="main" id="formulario-b2b-plataforma-db436fbce23d9e0225f9" />
    </S.FormContainer>
  )
}

export default FormBusiness
