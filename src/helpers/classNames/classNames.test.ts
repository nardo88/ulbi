import { classNames } from './classNames'

// describe - объединяет тесты
describe('classNames', () => {
  // first_Name - имя теста
  test('first_Name', () => {
    // expect - принимает то что тестируем, например вызов функции
    expect(classNames('someClass'))
      // toBe - это ожидаемый результат
      .toBe('someClass')
  })
})
