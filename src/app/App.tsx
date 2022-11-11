import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'helpers/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'
import { AppRouter } from './providers/router'

function App() {
  const { theme } = useTheme()
  return (
    <div className={classNames('main', {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
