import { FC } from 'react'
import { Flex, FlexProps } from '../Flex/Flex'

type HStackProps = Omit<FlexProps, 'direction'>

export const VStack: FC<HStackProps> = (props) => {
  const { align = 'start' } = props
  return <Flex {...props} direction="column" align={align} />
}
