import Image from 'next/image'

interface IStarsFeedback {
  number: 1 | 2 | 3 | 4 | 5
}

const StarsFeedback = ({ number }: IStarsFeedback) => {
  const filledStar = '/img/star-filled.svg'
  const emptyStar = '/img/star-empty.svg'

  const renderStars = () => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      const starSrc = i <= number ? filledStar : emptyStar
      stars.push(
        <Image key={i} src={starSrc} alt={`Star ${i}`} width={16} height={16} />
      )
    }
    return stars
  }

  return <div>{renderStars()}</div>
}

export default StarsFeedback
