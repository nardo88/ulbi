import { Menu } from '@headlessui/react'
import { classNames } from 'helpers/classNames/classNames'
import { Fragment, ReactNode } from 'react'
import { DropdownDirection } from 'shared/types/ui'
import { AppLink } from '../AppLink/AppLink'
import cls from './Dropdown.module.scss'

interface DropdownItem {
  disabled?: boolean
  content: ReactNode
  onClick?: () => void
  href?: string
}

interface DropdownProps {
  className?: string
  items: DropdownItem[]
  trigger: ReactNode
  direction?: DropdownDirection
}

const mapDirrectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
  'top left': cls.optionsTopLeft,
  'top right': cls.optionsTopRight,
}

export function Dropdown(props: DropdownProps) {
  const { className, items, trigger, direction = 'bottom right' } = props
  const menuClasses = [mapDirrectionClass[direction]]
  return (
    <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
      <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item, i) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              disabled={item.disabled}
              type="button"
              onClick={item.onClick}
              className={classNames(cls.item, { [cls.active]: active }, [])}
            >
              {item.content}
            </button>
          )

          if (item.href) {
            return (
              <Menu.Item
                key={i}
                as={AppLink}
                to={item.href}
                disabled={item.disabled}
              >
                {content}
              </Menu.Item>
            )
          }
          return (
            <Menu.Item key={i} as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}
