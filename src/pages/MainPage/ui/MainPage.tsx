import React from 'react'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t } = useTranslation('main')

  return (
    <div>
      <p>{t('Главная страница')}</p>
    </div>
  )
}

export default MainPage
