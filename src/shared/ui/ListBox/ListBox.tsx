import { FC, ReactNode } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import { classNames } from 'helpers/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { DropdownDirection } from 'shared/types/ui'
import cls from './ListBox.module.scss'
import { HStack } from '../Stack'

export interface ListboxItem {
  value: string
  content: ReactNode
  disabled?: boolean
}

interface ListboxProps {
  items?: ListboxItem[]
  className?: string
  value?: string
  defaultValue?: string
  label?: string
  readonly?: boolean
  onChange: (value: string) => void
  direction?: DropdownDirection
}

const mapDirrectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
  'top left': cls.optionsTopLeft,
  'top right': cls.optionsTopRight,
}

export const Listbox: FC<ListboxProps> = (props) => {
  const {
    className,
    direction = 'bottom left',
    items,
    value,
    defaultValue,
    onChange,
    readonly = false,
    label,
  } = props

  const optionClasses = [mapDirrectionClass[direction]]

  return (
    <HStack gap="4">
      {label && <span>{`${label} >`}</span>}

      <HListBox
        as={'div'}
        disabled={readonly}
        className={classNames(cls.ListBox, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button as="div" className={cls.trigger}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListBox.Button>
        <HListBox.Options
          className={classNames(cls.options, {}, optionClasses)}
        >
          {items?.map((item) => (
            <HListBox.Option
              as="ul"
              key={item.value}
              value={item.value}
              disabled={item?.disabled}
              className={classNames(cls.option, {}, [])}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(
                    cls.item,
                    { [cls.active]: active, [cls.disabled]: item.disabled },
                    []
                  )}
                >
                  {selected && '!!!'}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  )
}
