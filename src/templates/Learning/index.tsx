import { useState } from 'react'
import { PlayCircle } from '@styled-icons/material-outlined'
import Heading from 'components/Heading'
import { StickyNote } from 'components/StickyNote'
import * as S from './styles'
import { CourseInfoProps } from 'components/CourseInfo'
import { CourseDetailsProps } from 'components/CourseDetails'
import { NextSeo } from 'next-seo'

type Video = {
  url: string
}

type Content = {
  name: string
  description: string
  video: Video[]
  file: string
}

export type CurriculumBoxV = {
  module: string
  content: Content[]
}

export type CourseTemplatePropsVideo = {
  slug?: string
  courseInfo: CourseInfoProps
  description: string
  details: CourseDetailsProps
  videoDetails: CurriculumBoxV[]
}

const Learning = ({
  slug,
  courseInfo,
  videoDetails
}: CourseTemplatePropsVideo) => {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0].content[0])

  const handleSelectVideo = (video: Content) => {
    setSelectedVideo(video)
  }

  return (
    <S.Wrapper>
      <NextSeo
        title={`${courseInfo.title} - Escola START Plus`}
        description={courseInfo.description}
        canonical={`https://www.portalescolastart.com/courses/${slug}`}
        openGraph={{
          url: `https://www.portalescolastart.com/courses/${slug}`,
          title: `${courseInfo.title} - Escola START`,
          description: courseInfo.description
        }}
      />
      <StickyNote>Seu progresso</StickyNote>

      <S.BannerBlock>
        <S.BannerContent>
          {videoDetails.map((videoDetails, index) => {
            const { module, content } = videoDetails

            return (
              <S.CurriculumBox key={index}>
                <S.Module>{module}</S.Module>
                {content?.map((infoVideo, index) => {
                  return (
                    <S.Lesson
                      key={index}
                      onClick={() => handleSelectVideo(infoVideo)}
                    >
                      {infoVideo.name}
                      <S.VideoLenght>
                        05 min
                        <a href="#">
                          <PlayCircle width={30} />
                        </a>
                      </S.VideoLenght>
                    </S.Lesson>
                  )
                })}
              </S.CurriculumBox>
            )
          })}
        </S.BannerContent>
      </S.BannerBlock>

      <S.Content>
        <S.ContentWrapper>
          <S.Title>{courseInfo.title}</S.Title>
          <S.VideoContent>
            <S.VideoBox>
              <video
                key={selectedVideo?.video[0].url}
                width="100%"
                height="100%"
                controls
              >
                <source
                  src={`http://localhost:1337${selectedVideo?.video[0].url}`}
                  type="video/mp4"
                />
              </video>
            </S.VideoBox>
          </S.VideoContent>

          <Heading color="black" lineBottom size="medium">
            {selectedVideo.name}
          </Heading>
          <p>{selectedVideo.description}</p>
        </S.ContentWrapper>
      </S.Content>
    </S.Wrapper>
  )
}

export default Learning
