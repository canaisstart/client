import Image from 'next/image'
import Link from 'next/link'
import * as S from './styles'
import { Play } from '@styled-icons/remix-fill'

interface IPlayCourseProps {
  img: string
  concluited: number
  redirectUrl: string
  title: string
}

const PlayCourse = ({
  img,
  concluited,
  redirectUrl,
  title
}: IPlayCourseProps) => (
  <Link href={redirectUrl} passHref>
    <a target="_blank" rel="noopener noreferrer">
      <S.PCContainer>
        <Image src={img} layout="fill" objectFit="cover" />
        <S.Content>
          <S.Head>
            <S.Title>{title}</S.Title>
          </S.Head>
          <Play size="64px" color="#d9d9d9" />
        </S.Content>
        <S.ProgressContainer>
          <p>{concluited}% Concluído</p>
          <S.ProgressBar concluited={concluited} />
        </S.ProgressContainer>
      </S.PCContainer>
    </a>
  </Link>
)

export default PlayCourse
