import { FC, memo, useCallback } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import { Select } from 'shared/ui/Select/Select'
import { useTranslation } from 'react-i18next'
import { Country } from '../model/types/country'

interface CountrySelect {
  className?: string
  readonly?: boolean
  value?: Country
  onChange?: (value: Country) => void
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Armenia, content: Country.Armenia },
]

export const CountrySelect: FC<CountrySelect> = memo(({ className, value, onChange, readonly }) => {
  const { t } = useTranslation()

  const onChangeHandler = useCallback(
    (val: string) => {
      onChange?.(val as Country)
    },
    [onChange]
  )
  return (
    <Select
      value={value}
      readonly={readonly}
      label={t('Укажите страну')}
      options={options}
      onChange={onChangeHandler}
      className={classNames('', {}, [className])}
    />
  )
})
