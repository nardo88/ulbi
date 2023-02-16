import App from 'app/App'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import 'app/styles/index.scss'

import 'shared/config/i18n/i18n'
import { StoreProvider } from 'app/providers/StorePropvider'

const container = document.getElementById('root')

if (!container) {
  throw new Error('Контейнер root не найден в приложении')
}
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
)
