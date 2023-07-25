import { NextSeo } from 'next-seo'

import Base from 'templates/Base'

import CourseInfo, { CourseInfoProps } from 'components/CourseInfo'
import CourseDetails, { CourseDetailsProps } from 'components/CourseDetails'
import TextContent from 'components/TextContent'
import Showcase from 'components/Showcase'
import { Divider } from 'components/Divider'
import { CourseCardProps } from 'components/CourseCard'

import * as S from './styles'
import Image from 'next/image'

export type CourseTemplateProps = {
  slug?: string
  cover: string
  courseInfo: CourseInfoProps
  description: string
  details: CourseDetailsProps
  recommendedTitle: string
  recommendedCourses: CourseCardProps[]
}

const Course = ({
  slug,
  cover,
  courseInfo,
  description,
  details,
  recommendedTitle,
  recommendedCourses
}: CourseTemplateProps) => (
  <Base>
    <NextSeo
      title={`${courseInfo.title} - Escola START Plus`}
      description={courseInfo.description}
      canonical={`https://www.portalescolastart.com/courses/${slug}`}
      openGraph={{
        url: `https://www.portalescolastart.com/courses/${slug}`,
        title: `${courseInfo.title} - Escola START`,
        description: courseInfo.description,
        images: [
          {
            url: cover,
            alt: `${courseInfo.title}`
          }
        ]
      }}
    />
    <S.Cover>
      <Image src={cover} alt={courseInfo.title} layout="fill" />
    </S.Cover>
    <S.Main>
      <S.SectionGameInfo>
        <CourseInfo {...courseInfo} />
      </S.SectionGameInfo>

      <S.SectionGameDetails>
        <CourseDetails {...details} />
      </S.SectionGameDetails>

      <S.SectionDescription>
        {/* <TextContent title="Descrição" content={description} /> */}
        <TextContent content={description} />
        <Divider />
      </S.SectionDescription>

      <Showcase title={recommendedTitle} courses={recommendedCourses} />
    </S.Main>
  </Base>
)

export default Course
