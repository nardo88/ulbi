import { FC, Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'

interface LoginModal {
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: FC<LoginModal> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  )
}
