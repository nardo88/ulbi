import { classNames } from 'helpers/classNames/classNames'
import { FC, useCallback } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import CopyIcon from 'shared/assets/icons/copy.svg'
import cls from './Code.module.scss'

interface Code {
  className?: string
  text: string
}

export const Code: FC<Code> = ({ className, text }) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])
  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  )
}
