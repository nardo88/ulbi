import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'helpers/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, useState } from 'react'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button } from 'shared/ui/Button/Button'
import { AppRouter } from './providers/router'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <Button onClick={() => setIsOpen(!isOpen)}>toogle</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores aut
          nulla, quaerat architecto nobis quasi dolorem. Magni mollitia nulla
          sunt repellendus molestias facilis porro pariatur. Deleniti deserunt
          vero sunt in corrupti rerum amet accusantium sapiente voluptatibus,
          impedit ex ad quos, distinctio itaque id nobis eius aperiam assumenda
          alias repellendus vel.
        </Modal>

        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
