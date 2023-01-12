import { MutableRefObject, useEffect } from 'react'

export interface UseInfiniteScrollOption {
  // callback который будет вызван по тригеру
  callback?: () => void
  // обычный реактовский реф который будет тригерить событие (при появлении)
  triggerRef: MutableRefObject<HTMLElement>
  // wrapper внутри которого будет скролл
  wrapperRef: MutableRefObject<HTMLElement>
}

export const useInfiniteScroll = ({
  wrapperRef,
  callback,
  triggerRef,
}: UseInfiniteScrollOption) => {
  useEffect(() => {
    let observer: IntersectionObserver | null = null
    const wrapperElement = wrapperRef.current
    const triggerElement = triggerRef.current
    if (callback) {
      const options = {
        // root - элемент который скролим
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0,
      }
      // создаем подписку. Первый аргумент callback (функция будет выполнена тогда когда на экране появится элемент за которым мы следим). Этот callback принимает в свою очередь массив. Первый элемент массива - это entries - массив элементов за которыми мы наблюдаем. Так как мы будем наблюдать всего за одним элементом, мы можем с помощью диструктуризации вытащить его
      observer = new IntersectionObserver(([entrie]) => {
        if (entrie.isIntersecting) {
          // выполняем callback только когда элемент появился
          callback()
        }
      }, options)

      // у самого observer необходимо вызвать метод observe и передать ему ссылку на элемент, на появление которого мы подписываемся
      observer.observe(triggerElement)
    }
    // при демонтировании компонента отключаем подписку
    return () => {
      if (observer && triggerElement) {
        // eslint-disable-next-line
        observer.unobserve(triggerElement)
      }
    }
  }, [wrapperRef, triggerRef, callback])
}
