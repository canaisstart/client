import Image from 'next/image'
import * as S from './style'

type Item = {
  label: string
  src: string
}

interface IRenderProps {
  items: Item[]
}

const Render = ({ items }: IRenderProps) => {
  return (
    <S.RenderContainer>
      {items?.map((item, index) => (
        <S.Item key={index}>
          <Image
            src={item.src}
            alt={item.label}
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </S.Item>
      ))}
    </S.RenderContainer>
  )
}

export default Render
