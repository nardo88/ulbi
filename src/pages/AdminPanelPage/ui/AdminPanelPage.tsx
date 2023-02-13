import React from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page/Page'

const AdminPanelPage = () => {
  const { t } = useTranslation('about')
  return <Page>{t('Панель администратора')}</Page>
}

export default AdminPanelPage
