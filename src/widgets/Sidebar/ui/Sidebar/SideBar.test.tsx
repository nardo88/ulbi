import { render, screen } from '@testing-library/react'
import { I18nextProvider, withTranslation } from 'react-i18next'
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar'
import i18n from 'shared/config/i18n/i18nForTest'
import { componentRender } from 'shared/lib/test/componentRender/componentRender'

describe('Sidebar', () => {
  test('render_button', () => {
    const SideBarWithTranslation = withTranslation()(Sidebar)
    render(
      <I18nextProvider i18n={i18n}>
        <SideBarWithTranslation />
      </I18nextProvider>
    )
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
})
