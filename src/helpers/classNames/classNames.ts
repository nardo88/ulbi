/**
 *
 * @param cls  - класс по умолчанию
 * @param mods - объект в котором ключ это название класса а значение это boolean по которому мы определяем надо ли этот класс добавлять
 * @param aditional - массив дополнительных классов
 */

type Mods = Record<string, boolean | string>;
// Record - это специальный typescript тип который обозначает что у нас может быть объект с неограниченым количеством ключей, где (как в нашем примере) ключ будет строкой, а значение либо boolean, либо строкой

export function classNames(
  cls: string,
  mods: Mods = {},
  aditional: string[] = [],
): string {
  return [
    cls,
    ...aditional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_key, value]) => !!value)
      .map(([key, _value]) => key),
  ].join(' ')
}
