import * as S from './styles'

interface IPartinersListProps {
  children: React.ReactNode
  title: React.ReactNode
}

const PartinersList = ({ children, title }: IPartinersListProps) => {
  return (
    <S.Partner>
      <S.Title>{title}</S.Title>
      <S.Content>{children}</S.Content>
    </S.Partner>
  )
}

export default PartinersList
