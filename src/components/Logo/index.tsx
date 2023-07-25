import Image from 'next/image'
import * as S from './styles'

export type LogoProps = {
  color?: 'white' | 'black'
  size?: 'normal' | 'large'
  hideOnMobile?: boolean
  id?: string
  src?: string
}

const Logo = ({
  // id = 'logo',
  // color = 'white',
  // size = 'normal',
  hideOnMobile = false,
  src
}: LogoProps) => (
  <S.Wrapper hideOnMobile={hideOnMobile}>
    <Image
      src={src ? src : '/img/logo-start-white-02.png'}
      width={130}
      height={50}
      alt="Logo START"
    />
  </S.Wrapper>
)

export default Logo
