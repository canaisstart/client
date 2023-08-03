import * as S from './styles'

export interface ILessonCard {
  name: string
  duration: string
  isFinished: boolean
  onClick: () => void
  onCompleted: (isSelected: boolean) => void
  current: boolean
}

const LessonCard = ({
  name,
  duration,
  isFinished,
  onClick,
  onCompleted,
  current
}: ILessonCard) => {
  return (
    <S.Flex onClick={onClick} current={current}>
      <h3>{name}</h3>
      <S.RowGap>
        <p>{duration}</p>
        <S.InputRadio
          isSelected={isFinished}
          onClick={() => {
            onCompleted(!isFinished)
          }}
        />
      </S.RowGap>
    </S.Flex>
  )
}

export default LessonCard
