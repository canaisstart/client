import * as S from './styles'
import React from 'react'

interface IModalProps {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

const Modal = ({ children, isOpen, onClose }: IModalProps) => {
  return (
    <>
      {isOpen && (
        <S.ModalContainer onClick={() => onClose()}>
          <S.StopPropagation onClick={(e) => e.stopPropagation()}>
            {children}
          </S.StopPropagation>
        </S.ModalContainer>
      )}
    </>
  )
}

export default Modal
