import * as S from './style'
import { useState, useEffect } from 'react'
import Image from 'next/image'

type ProgressCircle = {
  percent: number
  course: string
}

const ProgressCircle = ({ percent, course }: ProgressCircle) => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const circumference = 2 * Math.PI * 54
    const progressOffset = ((100 - percent) / 100) * circumference
    setOffset(progressOffset)
  }, [percent])

  const simplyfyString = (texto: string, maxCaracteres: number) => {
    if (texto.length <= maxCaracteres) {
      return texto
    } else {
      const limiteAbreviacao = maxCaracteres - 3
      return texto.substring(0, limiteAbreviacao) + '...'
    }
  }

  return (
    <S.Container>
      <S.Loader>
        <S.ProgressRing viewBox="0 0 120 120">
          <S.Track cx="60" cy="60" r="54" />
          <S.Circle
            cx="60"
            cy="60"
            r="54"
            style={{
              strokeDasharray: `${2 * Math.PI * 54}`,
              strokeDashoffset: `${offset}`
            }}
          />
        </S.ProgressRing>
        <S.Icon>
          <Image src="/img/progressIcon.svg" width="48" height="48" />
        </S.Icon>
      </S.Loader>
      <S.Content>
        <h2>Seu Progresso</h2>
        <div>
          <p>{percent}%</p>
          <span>
            {simplyfyString(course, 40)} <strong>&gt;</strong>
          </span>
        </div>
      </S.Content>
    </S.Container>
  )
}

export default ProgressCircle
