import { classNames } from 'helpers/classNames/classNames'
import './Loader.scss'

export const Loader = () => {
  return (
    <div className={classNames('lds-ellipsis', {}, [])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}
