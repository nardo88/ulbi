import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

describe('Button', () => {
  // first_Name - имя теста
  test('render_button', () => {
    // render - с помощью этого метода можно отрендерить один компонент и протестировать только его одного
    render(<Button>Test</Button>)
    // screen - это что-то вроде отрисованный снимрок страницы. Метод getByText будет получать текст с этого скрина.
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  test('first_Name', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Test</Button>)
    expect(screen.getByText('Test')).toHaveClass('clear')
    screen.debug()
  })
})
