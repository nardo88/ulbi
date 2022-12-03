import { classNames } from 'helpers/classNames/classNames'
import { FC } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'
import cls from './LoginModal.module.scss'

interface LoginModal {
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: FC<LoginModal> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy>
      <LoginForm />
    </Modal>
  )
}
