import * as S from './styles'
import Image from 'next/image'

export interface LogoAbsoluteProps {
  posX: string
  posY: string
  rotate: string
}

const LogoAbsolute = (props: LogoAbsoluteProps) => {
  return (
    <S.LogoContainer {...props}>
      <Image src="/img/logo-white.svg" layout="fill" objectFit="contain" />
    </S.LogoContainer>
  )
}

export default LogoAbsolute
