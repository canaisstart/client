import React, { useState, useEffect } from 'react'
import * as S from './style'
import Image from 'next/image'
import ReactConfetti from 'react-confetti'

const Release = () => {
  const [show, setShow] = useState(true)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const body = document.querySelector('body')

    if (body && window) {
      body.style.overflowY = 'hidden'
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)

      return () => {
        body.style.overflowY = 'auto'
      }
    }
  }, [])

  if (!show) return null

  return (
    <S.ReleaseContainer>
      <S.VideoContainer>
        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
          <iframe
            src={`https://player.vimeo.com/video/871939557?autoplay=1&loop=1&autopause=0`}
            frameBorder="0"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
            title="Video"
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </S.VideoContainer>
      <S.Content>
        <div>
          <Image
            src="/img/logo-start-white-02.png"
            width="201"
            height="83"
          ></Image>
        </div>
        <S.Gap>
          <S.Heading>
            <strong>EDUCAÇÃO</strong> AO ALCANCE DE TODOS
          </S.Heading>
          <S.Text>
            <strong>Você determina sua maneira de estudar</strong>, a START se
            adapta as suas necessidades com formatos que atendem a realidade do
            aluno através dos nossos cursos
          </S.Text>
        </S.Gap>
        <button onClick={() => setShow(false)}>Acesse a plataforma</button>
      </S.Content>
      <ReactConfetti width={width} height={height} gravity={0.08} />
    </S.ReleaseContainer>
  )
}

export default Release
