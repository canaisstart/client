import * as S from './styles'
import React, { useState, useEffect } from 'react'

interface IModalProps {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

const Modal = ({ children, isOpen, onClose }: IModalProps) => {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  if (isBrowser) {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  return (
    <>
      {isOpen && (
        <S.ModalContainer onClick={onClose}>
          <S.StopPropagation onClick={(e) => e.stopPropagation()}>
            {children}
          </S.StopPropagation>
        </S.ModalContainer>
      )}
    </>
  )
}

export default Modal
