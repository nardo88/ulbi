import { ChangeEvent, FC, memo, useMemo } from 'react'
import { classNames, Mods } from 'helpers/classNames/classNames'
import cls from './Select.module.scss'

export interface SelectOption {
  value: string
  content: string
}

interface Select {
  className?: string
  label?: string
  readonly?: boolean
  options: SelectOption[]
  value?: string
  onChange?: (value: string) => void
}

export const Select: FC<Select> = memo(
  ({ className, label, options, value, onChange, readonly }) => {
    const mods: Mods = {}

    const optionList = useMemo(() => {
      return options.map((option: SelectOption) => (
        <option key={option.value} className={cls.option} value={option.value}>
          {option.content}
        </option>
      ))
    }, [options])

    const onChangeHendler = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value)
    }

    return (
      <div className={classNames(cls.Wrapper, mods, [className])}>
        {label && <span className={cls.label}>{`${label} >`}</span>}
        <select disabled={readonly} className={cls.select} value={value} onChange={onChangeHendler}>
          {optionList}
        </select>
      </div>
    )
  }
)
