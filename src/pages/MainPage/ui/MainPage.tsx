import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Listbox } from 'shared/ui/ListBox/ListBox'
import { HStack } from 'shared/ui/Stack'
import { Page } from 'widgets/Page/Page'

const MainPage = () => {
  const { t } = useTranslation('main')

  return (
    <Page>
      <p>{t('Главная страница')}</p>
      <div>12</div>
      <HStack>
        <Listbox
          defaultValue="Выберите значение"
          onChange={(value: string) => {}}
          value={undefined}
          items={[
            { value: '11', content: '11' },
            { value: '12', content: '12' },
            { value: '13', content: '13', disabled: true },
            { value: '14', content: '14' },
          ]}
        />
      </HStack>
    </Page>
  )
}

export default MainPage
