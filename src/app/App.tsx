import { classNames } from 'helpers/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from 'entities/User/model/slice/userSlice'
import { getUserInited } from 'entities/User'
import { AppRouter } from './providers/router'

function App() {
  const dispatch = useDispatch()
  const inited = useSelector(getUserInited)
  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])
  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />

        <div className="content-page">
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  )
}

export default App
