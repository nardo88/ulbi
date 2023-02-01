import { FC, memo, useCallback } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import { Listbox } from 'shared/ui/ListBox/ListBox'
import { useTranslation } from 'react-i18next'
import { Currency } from '../../model/types/currency'

interface CurrencySelect {
  className?: string
  readonly?: boolean
  value?: Currency
  onChange?: (value: Currency) => void
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
]

export const CurrencySelect: FC<CurrencySelect> = memo(
  ({ className, value, onChange, readonly }) => {
    const { t } = useTranslation()

    const onChangeHandler = useCallback(
      (val: string) => {
        onChange?.(val as Currency)
      },
      [onChange]
    )

    return (
      <Listbox
        items={options}
        defaultValue={t('Укажите валюту')}
        value={value}
        readonly={readonly}
        label={t('Укажите валюту')}
        onChange={onChangeHandler}
        className={classNames('', {}, [className])}
      />
    )
  }
)
