import ModuleCard from 'components/ModuleCard'
import * as S from './styles'
import LessonCard from 'components/LessonCard'
import { modules } from './mocks'
import { useState } from 'react'

const ModuleList = () => {
  const [openedIndex, setOpenedIndex] = useState<null | number>(null)

  const handleItemClick = (index: number) => {
    if (openedIndex === index) {
      setOpenedIndex(Infinity)
    } else {
      setOpenedIndex(index)
    }
  }

  return (
    <S.ModuleListContainer onClick={(e) => e.stopPropagation()}>
      <S.Heading>
        <h3>Informática</h3>
        <p>HTML</p>
      </S.Heading>
      <ul>
        {modules?.map((module, index) => (
          <ModuleCard
            name={module.name}
            key={index}
            className={index === openedIndex ? 'open' : ''}
            onClick={() => handleItemClick(index)}
          >
            {module.lessons?.map((lesson, index) => (
              <LessonCard {...lesson} key={index} />
            ))}
          </ModuleCard>
        ))}
      </ul>
    </S.ModuleListContainer>
  )
}

export default ModuleList
