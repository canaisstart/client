import { useEffect, useState } from 'react'
import * as S from './styles'
import { NextSeo } from 'next-seo'
import ModuleList from 'components/ModuleList'
import ModuleCard from 'components/ModuleCard'
import LessonCard from 'components/LessonCard'
import Base from 'templates/Base'
import ProgressCircle from 'components/ProgressCircle'
import Modal from 'components/Modal'
import { SkipNext } from '@styled-icons/boxicons-regular'
import { ArrowDropDown } from '@styled-icons/material-outlined'
import { Download } from '@styled-icons/remix-fill'
import Image from 'next/image'
import ReactPlayer from 'react-player'
import { useMutation } from '@apollo/client'
import { useSession } from 'next-auth/client'
import { fetcher } from 'utils/stripe/methods'
import axios from 'axios'

// import {
//   CREATE_USERS_LESSON,
//   DELETE_USERS_LESSON
// } from 'graphql/mutations/lessons'

interface ILesson {
  id: number
  name: string
  videoUrl: string
  completed: boolean
  description: string
  fileUrl?: string
  module: Omit<IModule, 'lessons'>
  classtime: string
}

export interface IModule {
  id: string
  name: string
  lessons: ILesson[]
}

interface ICourseInfo {
  id: number
  name: string
  category: string | null
  description: string
  modules: IModule[]
}

export type CourseTemplatePropsVideo = {
  slug: string
  courseInfo: ICourseInfo
  userId: string
}

const Learning = ({ courseInfo, slug, userId }: CourseTemplatePropsVideo) => {
  const [modules, setModules] = useState<IModule[]>([...courseInfo.modules])
  const [viewPort, setViewPort] = useState(0)
  const [session] = useSession()
  const [selectedLesson, setSelectedLesson] = useState<ILesson | undefined>(
    modules
      .flatMap((module) => module.lessons)
      .find((lesson) => lesson.completed == false) ||
      modules.flatMap((module) => module.lessons).pop()
  )
  const [openedIndex, setOpenedIndex] = useState(
    modules.findIndex(
      (elem) => elem.lessons[0].id == selectedLesson?.id || Infinity
    )
  )
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const completedTasks = courseInfo.modules.reduce(
    (acc, cur) =>
      acc +
      cur.lessons.reduce((acc, cur) => (cur.completed ? 1 + acc : acc), 0),
    0
  )

  const handleConcluited = async (
    status: boolean,
    id: number,
    userId: string
  ) => {
    setModules((oldModules) =>
      oldModules.map((module) => {
        module.lessons.map((lesson) => {
          if (lesson.id == id) {
            const api = axios.create({
              baseURL: `${process.env.NEXT_PUBLIC_API_URL}`
            })
            api.defaults.headers.common[
              'Authorization'
            ] = `Bearer ${session?.jwt}`
            lesson.completed = status
            api[status ? 'post' : 'delete'](
              `/progression/${courseInfo.id}/${module.id}/${lesson.id}`
            )
          }
          return lesson
        })
        return module
      })
    )
  }

  const changeVideo = () => {
    if (selectedLesson) {
      const lessons = courseInfo.modules.flatMap((module) => module.lessons)
      const curIndex = lessons.findIndex(
        (elem) =>
          elem.id == selectedLesson.id && elem.module == selectedLesson?.module
      )

      const before = lessons[curIndex - 1]
      const next = lessons[curIndex + 1]

      return {
        before,
        next
      }
    }
  }

  const porcentage =
    (completedTasks /
      courseInfo.modules.reduce((acc, cur) => acc + cur.lessons.length, 0)) *
    100

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setViewPort(window.innerWidth)
    }

    const handleResize = () => {
      setViewPort(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleItemClick = (index: number) => {
    if (openedIndex === index) {
      setOpenedIndex(Infinity)
    } else {
      setOpenedIndex(index)
    }
  }

  return (
    <Base>
      <S.Head>
        <S.Title onClick={() => viewPort < 768 && setModalIsOpen(true)}>
          {viewPort > 768
            ? 'Seu aprendizado'
            : selectedLesson?.module.name || 'Selecione uma Aula'}
          <ArrowDropDown size={32} />
        </S.Title>
        <ProgressCircle
          course={courseInfo.name}
          percent={Number(porcentage.toFixed())}
        />
      </S.Head>
      <S.Wrapper>
        <NextSeo
          title={`${courseInfo.name} - Escola START Plus`}
          description={courseInfo.description}
          canonical={`https://escolastart.plus/courses/${slug}`}
          openGraph={{
            url: `https://escolastart.plus/courses/${slug}`,
            title: `${courseInfo.name} - Escola START`,
            description: courseInfo.description
          }}
        />
        <S.LeftBar>
          <ModuleList name={courseInfo.name} category={courseInfo.category}>
            {modules?.map((module, index) => {
              return (
                <ModuleCard
                  name={module.name}
                  key={index}
                  className={index === openedIndex ? 'open' : ''}
                  onClick={() => handleItemClick(index)}
                >
                  {module.lessons?.map((lesson) => (
                    <LessonCard
                      name={lesson.name}
                      duration={lesson.classtime}
                      isFinished={lesson.completed}
                      key={lesson.id}
                      current={lesson.id == selectedLesson?.id}
                      onClick={() => {
                        setSelectedLesson(lesson)
                        setModalIsOpen(false)
                      }}
                      onCompleted={(status) =>
                        handleConcluited(status, lesson.id, userId)
                      }
                    />
                  ))}
                </ModuleCard>
              )
            })}
          </ModuleList>
        </S.LeftBar>
        <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
          <ModuleList name={courseInfo.name} category={courseInfo.category}>
            {modules?.map((module, index) => {
              return (
                <ModuleCard
                  name={module.name}
                  key={index}
                  className={index === openedIndex ? 'open' : ''}
                  onClick={() => handleItemClick(index)}
                >
                  {module.lessons?.map((lesson) => (
                    <LessonCard
                      name={lesson.name}
                      duration={lesson.classtime}
                      isFinished={lesson.completed}
                      key={lesson.id}
                      current={lesson.id == selectedLesson?.id}
                      onClick={() => {
                        setSelectedLesson(lesson)
                        setModalIsOpen(false)
                      }}
                      onCompleted={(status) =>
                        handleConcluited(status, lesson.id, userId)
                      }
                    />
                  ))}
                </ModuleCard>
              )
            })}
          </ModuleList>
        </Modal>
        <S.Content>
          <S.ContentWrapper>
            {selectedLesson?.videoUrl && (
              <S.VideoBox>
                <ReactPlayer
                  width="100%"
                  css={{ height: 'calc((100% / 16) * 9)' }}
                  url={selectedLesson?.videoUrl}
                  controls
                  playIcon={<button>Play</button>}
                  onProgress={(e) =>
                    e.played > 0.8 &&
                    handleConcluited(true, selectedLesson?.id, userId)
                  }
                />
              </S.VideoBox>
            )}
            <S.Controls>
              <S.ControlsText>
                <S.ControlsIcon
                  className={
                    changeVideo()?.before == undefined ? 'disable' : ''
                  }
                  onClick={() =>
                    changeVideo()?.before &&
                    setSelectedLesson(changeVideo()?.before)
                  }
                >
                  <SkipNext size={32} css={{ transform: 'rotate(180deg)' }} />
                </S.ControlsIcon>
                <p>Anterior</p>
              </S.ControlsText>
              <S.ControlsText>
                <S.ControlsIcon
                  className={
                    selectedLesson && changeVideo()?.next == undefined
                      ? 'disable'
                      : ''
                  }
                  onClick={() => {
                    changeVideo()?.next &&
                      selectedLesson &&
                      handleConcluited(true, selectedLesson?.id, userId)
                    changeVideo()?.next &&
                      setSelectedLesson(changeVideo()?.next)
                  }}
                >
                  <SkipNext size={32} />
                </S.ControlsIcon>
                <p>Próximo</p>
              </S.ControlsText>
            </S.Controls>
          </S.ContentWrapper>
          <S.CourseHeading>
            <p>
              <strong>{selectedLesson?.module.name} - </strong>
              {selectedLesson?.name}
            </p>
            {selectedLesson?.fileUrl && (
              <S.DownloadMaterial
                href={selectedLesson?.fileUrl}
                download={`${selectedLesson.module.name}-${selectedLesson.name}`}
                target="_blank"
              >
                <Image
                  src="/img/openFolder.svg"
                  width={16}
                  height={16}
                  layout="fixed"
                />
                <p>Material</p>
                <Download width={16} />
              </S.DownloadMaterial>
            )}
          </S.CourseHeading>
          {selectedLesson?.description && (
            <S.Description
              dangerouslySetInnerHTML={{
                __html: selectedLesson?.description ?? ''
              }}
            />
          )}
        </S.Content>
      </S.Wrapper>
    </Base>
  )
}

export default Learning
