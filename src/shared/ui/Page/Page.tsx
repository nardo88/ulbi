import { classNames } from 'helpers/classNames/classNames'
import { FC, MutableRefObject, ReactNode, useRef } from 'react'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import cls from './Page.module.scss'

interface Page {
  className?: string
  children: ReactNode
}

export const Page: FC<Page> = ({ className, children }) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: () => {
      console.log('callback')
    },
  })
  return (
    <div ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
      {children}
      <div ref={triggerRef} />
    </div>
  )
}
