import { StateSchema } from 'app/providers/StorePropvider'
import { getUIByPath, uiActions } from 'features/UI'
import { classNames } from 'helpers/classNames/classNames'
import { FC, MutableRefObject, ReactNode, UIEvent, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle'
import cls from './Page.module.scss'

interface Page {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page: FC<Page> = ({ className, children, onScrollEnd }) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const scrollPosition = useSelector((state: StateSchema) => getUIByPath(state, pathname))

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  })

  useEffect(() => {
    // бага. Если в зависимость поставить scrollPosition то при каждом изменении
    // будет скачек
    // wrapperRef.current.scrollTop = scrollPosition
  }, [])

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    console.log('scroll')
    dispatch(
      uiActions.setScrollPosition({
        path: pathname,
        position: e.currentTarget.scrollTop,
      })
    )
  }, 1000)
  return (
    <div ref={wrapperRef} className={classNames(cls.Page, {}, [className])} onScroll={onScroll}>
      {children}
      {onScrollEnd && <div className={cls.trigger} ref={triggerRef} />}
    </div>
  )
}
