import React, { ErrorInfo, ReactNode, Suspense } from 'react'
import { withTranslation } from 'react-i18next'
import { ErrorPage } from 'widgets/ErrorPage'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo)
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      return (
        <Suspense fallback="">
          <ErrorPage />
        </Suspense>
      )
    }

    return children
  }
}

// так как в функциональных компонентах мы исполльзовали хук useTranslation, то в классовых комопнентах так сделать не получится. Тут мы будем использовать хок withTranslation
// export default withTranslation()(ErrorBoundary)
export default ErrorBoundary
