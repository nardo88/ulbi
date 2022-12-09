module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    // indent - количество пробелов - 2
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    indent: [2, 2],
    // указывает в каких файлах разрешен JSX (с какими расширениями)
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    // отключаем проветку на использование абсолютных путей
    'import/no-unresolved': 'off',
    // отключаем предпочтение дефолтного экспорта
    'import/prefer-default-export': 'off',
    // отмечать warning не использованные переменные
    'no-unused-vars': 'warn',
    // не допустимы console.log()
    'no-console': 'warn',
    // отключаем проверку на указание дефолтного значениея у необязательного пропса
    'react/require-default-props': 'off',
    // отключаем обязательный импорт React
    'react/react-in-jsx-scope': 'off',
    // warning - при использовании spread для пропсов
    'react/jsx-props-no-spreading': 'off',
    // разрешаем стрелочные функции для компонентов
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    // отключаем указание расширений в импортах, так как у нас настроен Webpack
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'operator-linebreak': 'off',
    // точка с запятой
    semi: ['error', 'never'],
    // одинарные кавычки в импортах и строках
    quotes: ['error', 'single'],
    // двойные кавычки в атрибутах в JSX
    'jsx-quotes': ['error', 'prefer-double'],
    // предпочтение const
    'prefer-const': 'error',
    // запятые в объектах. Последний ключ с запятой
    'comma-dangle': ['off'],
    'arrow-body-style': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'no-redeclare': 'off',
    'max-len': 'off',
    'linebreak-style': 'off',
    'prefer-arrow-callback': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    'object-curly-newline': 'off',
    'no-param-reassign': 'off',
  },
  globals: {
    __IS_DEV__: true,
  },
}
