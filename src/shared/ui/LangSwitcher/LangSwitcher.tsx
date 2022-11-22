import { classNames } from 'helpers/classNames/classNames'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonSize, ButtonTheme } from '../Button/Button'

interface LangSwitcher {
  className?: string
  short?: boolean
}

export const LangSwitcher: FC<LangSwitcher> = ({ className, short }) => {
  const { t, i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
      className={classNames('', {}, [className])}
      size={ButtonSize.M}
    >
      {t(short ? 'Короткий язык' : 'Язык')}
    </Button>
  )
}
