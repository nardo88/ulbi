import { classNames } from 'helpers/classNames/classNames'
import { Loader } from 'shared/ui/Loader/Loader'
import cls from './PageLoader.module.scss'

export const PageLoader = () => {
  return (
    <div className={classNames(cls.pageLoader, {}, [])}>
      <Loader />
    </div>
  )
}
