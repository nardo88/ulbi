import { classNames } from 'helpers/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User/model/slice/userSlice'
import { AppRouter } from './providers/router'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])
  return (
    <div className={classNames('app', {}, [])}>
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
