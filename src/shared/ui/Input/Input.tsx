import { classNames, Mods } from 'helpers/classNames/classNames'
import React, { FC, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'
import cls from './Input.module.scss'

// Omit позволяет забрать из типа все пропсы, но исключить те которые вызывают у нас конфликты
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>

interface Input extends HTMLInputProps {
  className?: string
  value?: string | number
  onChange?: (value: string) => void
  placeholder?: string
  autoFocus?: boolean
  readonly?: boolean
}

export const Input: FC<Input> = memo((props: Input) => {
  const { className, value, type, placeholder, onChange, autoFocus, readOnly, ...otherProps } =
    props

  const mods: Mods = {
    [cls.readonly]: readOnly,
  }

  const [isFocused, setIsFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)
  const ref = useRef<HTMLInputElement>(null)
  const isaretVisible = isFocused && !readOnly

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
      {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          className={classNames(cls.input, mods, [])}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onBlur={onBlure}
          onFocus={onFocus}
          onSelect={onSelect}
          readOnly={readOnly}
          {...otherProps}
        />
        {isaretVisible && <span className={cls.caret} style={{ left: `${caretPosition * 9}px` }} />}
      </div>
    </div>
  )
})
