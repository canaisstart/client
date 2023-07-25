import * as S from './styles'
import { useState } from 'react'

export interface ILessonCard {
  name: string
  duration: string
  isFinished: boolean
}

const LessonCard = ({ name, duration, isFinished }: ILessonCard) => {
  const [selected, setSelected] = useState(isFinished)

  const onSelect = () => {
    setSelected(!selected)

    //Make your api request here
  }

  const onChangeVideo = () => {
    //Make your script to change the lesson video here
  }

  return (
    <S.Flex onClick={() => onChangeVideo}>
      <h3>{name}</h3>
      <S.RowGap>
        <p>{duration}</p>
        <S.InputRadio isSelected={selected} onClick={() => onSelect()} />
      </S.RowGap>
    </S.Flex>
  )
}

export default LessonCard
