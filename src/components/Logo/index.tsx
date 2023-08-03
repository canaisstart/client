import Image from 'next/image'
import * as S from './styles'

export type LogoProps = {
  color?: 'white' | 'black'
  size?: 'normal' | 'large'
  hideOnMobile?: boolean
  id?: string
  src?: string
  width?: number
  height?: number
  onClick?: () => void
}

const Logo = ({
  // id = 'logo',
  // color = 'white',
  // size = 'normal',
  hideOnMobile = false,
  src,
  width,
  height,
  onClick
}: LogoProps) => (
  <S.Wrapper hideOnMobile={hideOnMobile} onClick={onClick}>
    <Image
      src={src ? src : '/img/logo-start-white-02.png'}
      width={width ? width : 130}
      height={height ? height : 50}
      alt="Logo START"
    />
  </S.Wrapper>
)

export default Logo
