import * as S from './styles'

export type FeatureProps = {
  title: string
  icon?: JSX.Element
  description: string
}
const Feature = ({ title, icon, description }: FeatureProps) => (
  <S.Wrapper>
    <S.Icon>{icon}</S.Icon>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Feature
