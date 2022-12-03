import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import { Portal } from 'shared/ui/Portal/Portal'
import cls from './Modal.module.scss'

interface Modal {
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const ANIMATION_DELAY = 300

export const Modal: FC<Modal> = ({ children, onClose, isOpen, lazy }) => {
  const [isClosing, setIsClosing] = useState(false)
  // состояние которое определяет надо ли монтировать модальное окно
  const [isMounted, setIsMounted] = useState(false)
  const timeRef = useRef<ReturnType<typeof setTimeout>>()

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  }

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timeRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler()
      }
    },
    [closeHandler]
  )

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      clearTimeout(timeRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  if (lazy && !isMounted) {
    return null
  }
  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
