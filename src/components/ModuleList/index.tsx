import * as S from './styles'

interface IModuleList {
  category: string | null
  name: string
  children: React.ReactNode
}

const ModuleList = ({ name, category, children }: IModuleList) => {
  return (
    <S.ModuleListContainer onClick={(e) => e.stopPropagation()}>
      <S.Heading>
        {category && <h3>{category}</h3>}
        <p>{name || 'Carregando'}</p>
      </S.Heading>
      <ul>{children}</ul>
    </S.ModuleListContainer>
  )
}

export default ModuleList
