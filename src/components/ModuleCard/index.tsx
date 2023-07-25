import Heading from 'components/Heading'
import * as S from './styles'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

export interface IModuleCard {
  name: string
  children?: React.ReactNode[] | React.ReactNode
  className: string
  onClick: () => void
}

const ModuleCard: React.FC<IModuleCard> = ({
  name,
  children,
  className,
  onClick
}) => {
  const [maxHeightContainer, setMaxHeightContainer] = useState(0)

  const cardRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const updateHeight = () => {
      if (cardRef.current) {
        const cardsQtd = cardRef.current.children.length
        const cardHeight = cardRef.current.children[0]?.scrollHeight

        setMaxHeightContainer(cardsQtd * cardHeight + cardsQtd * 2 + 8)
      }
    }

    setTimeout(updateHeight, 100)
  }, [children])

  return (
    <S.Container maxHeight={maxHeightContainer}>
      <S.Flex onClick={onClick}>
        <Heading size="small">{name}</Heading>
        <Image
          src="/img/arrowDropDown.svg"
          width={16}
          height={16}
          css={{
            cursor: 'pointer',
            rotate: className === 'open' ? '90deg' : '0deg'
          }}
        />
      </S.Flex>
      <S.List ref={cardRef} className={className}>
        {children}
      </S.List>
    </S.Container>
  )
}

export default ModuleCard
