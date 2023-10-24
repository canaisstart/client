import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import Link from 'next/link'

import * as S from './styles'

export type FormProfileProps = {
  username?: string
  email?: string
}

const FormProfile = ({ email, username }: FormProfileProps) => (
  <>
    <Heading lineBottom color="black" size="small">
      Minha conta
    </Heading>

    <S.Form>
      <TextField
        name="username"
        placeholder="Nome"
        label="Nome"
        initialValue={username}
      />

      <TextField
        name="email"
        type="email"
        placeholder="E-mail"
        initialValue={email}
        label="E-mail"
        disabled
      />

      <TextField
        name="email"
        type="email"
        placeholder="12345678909"
        initialValue={''}
        label="CPF"
        disabled
      />

      <TextField
        name="email"
        type="email"
        placeholder="21940028922"
        initialValue={''}
        label="Número de celular"
        disabled
      />

      <S.ButtonContainer>
        <Link href={`/forgot-password?email=${email}`} passHref>
          <Button minimal size="medium" as="a">
            Resetar senha
          </Button>
        </Link>
        <Button size="medium">Salvar</Button>
      </S.ButtonContainer>
    </S.Form>
  </>
)

export default FormProfile
