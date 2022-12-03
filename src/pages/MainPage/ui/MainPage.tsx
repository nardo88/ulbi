import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'

const MainPage = () => {
  const { t } = useTranslation('main')
  const [value, setValue] = useState('')

  const onChangeHandler = (val: string) => {
    setValue(val)
  }
  return (
    <div>
      <p>{t('Главная страница')}</p>
      <Input
        onChange={onChangeHandler}
        value={value}
        placeholder="Введите имя"
      />
    </div>
  )
}

export default MainPage
