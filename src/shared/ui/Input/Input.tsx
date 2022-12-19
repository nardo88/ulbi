import { classNames } from 'helpers/classNames/classNames'
import React, {
  FC,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react'
import cls from './Input.module.scss'

// Omit позволяет забрать из типа все пропсы, но исключить те которые вызывают у нас конфликты
type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>

interface Input extends HTMLInputProps {
  className?: string
  value?: string
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string) => void
  placeholder?: string
  autoFocus?: boolean
}

export const Input: FC<Input> = memo((props: Input) => {
  const {
    className,
    value,
    type,
    placeholder,
    onChange,
    autoFocus,
    ...otherProps
  } = props

  const [isFocused, setIsFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)
  const ref = useRef<HTMLInputElement>(null)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
    setCaretPosition(e.target.value.length)
  }

  const onBlure = () => {
    setIsFocused(false)
  }
  const onFocus = () => {
    setIsFocused(true)
  }

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0)
  }

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true)
      ref.current?.focus()
    }
  }, [autoFocus])

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>{`${placeholder}>`}</div>
      )}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          className={cls.input}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onBlur={onBlure}
          onFocus={onFocus}
          onSelect={onSelect}
          {...otherProps}
        />
        {isFocused && (
          <span
            className={cls.caret}
            style={{ left: `${caretPosition * 9}px` }}
          />
        )}
      </div>
    </div>
  )
})
