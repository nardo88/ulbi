import { FC, ReactNode, useState } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import { classNames } from 'helpers/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import cls from './ListBox.module.scss'

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
  onChange: (value: string) => void
}

export const Listbox: FC<ListboxProps> = (props) => {
  const { className, items, value, defaultValue, onChange } = props
  const [selectedPerson, setSelectedPerson] = useState()
  return (
    <HListBox
      as={'div'}
      className={classNames(cls.ListBox, {}, [className])}
      value={value}
      onChange={onChange}
    >
      <HListBox.Button className={cls.trigger}>
        <Button>{value ?? defaultValue}</Button>
      </HListBox.Button>
      <HListBox.Options className={cls.options}>
        {items?.map((item) => (
          <HListBox.Option
            key={item.value}
            value={item.value}
            disabled={item?.disabled}
            className={cls.option}
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
  )
}
