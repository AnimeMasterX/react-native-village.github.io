---
id: javascript05
title: Ошибки
sidebar_label: Ошибки
---

Hello world!
Learn Java Script
Open your console
And enter your script

Hello world!
Learn Java Script
Open your console
And enter your script

Существует несколько распространённых
Видов Ошибок в коде
Наша задача не дать допустить их
Вам в вашей работе

Синтаксическая ошибка
В нашем деле далеко не беда
Проще говоря, то, что вы написали
Неправильно для Java Script языка

Допускать ошибки в коде - это порядок
Расскажем вам всё по порядку
Следующий вид - Reference Error
Давайте проверим эту неполадку

Возникает при обращении
К несуществующей переменной
Читайте как это предотвратить
И вас ждут перемены

Hello world!
Learn Java Script
Open your console
And enter your script

Hello world!
Learn Java Script
Open your console
And enter your script

## Самые частые ошибки

Надеюсь вы уже успели встретить свои первые ошибки в процессе написания кода. Почему надеюсь? Потому что ошибки - это наши учителя, которые показывают нам, что мы делаем неправильно в своем коде и компьютер, точнее интерпретатор кода, нас попросту не может понять. Ошибки при написании кода случаются практически каждый день. Штука в том, чтобы уметь прочесть сообщение об ошибке, которое выдаст вам машина, чтобы оперативно найти и исправить недочёт в написанном коде. Чем больше вы изучаете JavaScript, тем больше начинаете ценить сообщения об ошибках - зачастую они очень верно показывают, где же вы допустили промах.

Три самых популярных типа ошибок:

## SyntaxError

`Syntax Error` - нарушение правил языка. Например введите в ​​​​​девать плюс точка с запятой `9 + ;`:

```jsx live
function learnJavaScript() {
  var error = 9

  return <h2>{error}</h2>
}
```

Ответ: `SyntaxError: Unexpected token ;`
Подобный ответ консоли выглядит просто дико, а? Ненайденная синтаксическая ошибка? Неожиданный токен?! Штаа?!
Так, ладно... Теперь давайте внимательно вчитаемся. Uncaught SyntaxError — ненайденная синтаксическая ошибка, означает всего лишь, что в синтаксисе вашего предложения содержится ошибка. Другими словами, то, что вы написали, не является правильным с точки зрения языка JavaScript. Интерпретатор, да интерпретатор, ведь он ведь интерпретирует предложения, написанные на языке JavaScript, не может прочесть ваше предложение и не знает, что с ним нужно делать. Unexpected token ; означает, что интерпретатор прочёл что-то, чего прочесть вовсе не ожидал: в нашем случае — точку с запятой `;`.

Еще раз ошибемся!
Введем в консоле пять плюс три и скобка в конце `5+3)`.

```jsx live
function learnJavaScript() {
  var error = 5

  return <h2>{error}</h2>
}
```

У вас есть закрывающая скобка «)», но нет скобки открывающей! А ведь скобки всегда ходят парами — не может быть, чтобы была закрывающая, но не нашлось открывающей скобки, и наоборот.

## ReferenceError

`ReferenceError` - неправильное имя! Объект ReferenceError представляет ошибку, возникающую при обращении к несуществующей переменной. Например введите пять плюс переменая `5 + переменая`:

```jsx live
function learnJavaScript() {
  var error = 5

  return <h2>{error}</h2>
}
```

Теперь перед нами не синтаксическая ошибка (SyntaxError), а ошибка обращения (ReferenceError). Быть может, вы уже заметили, в чём здесь дело? Давайте внимательно прочтём сообщение об ошибке (ведь для этого, в конце концов, оно и выдаётся!). Там сказано: переменная is not defined — переменная не задана, вот в этом-то и кроется наша проблема! Сперва мы должны объявить переменную каким-нибудь, скажем, таким образом:

```jsx live
function learnJavaScript() {
  var переменая = 5
  var error = 5 + переменая

  return <h2>{error}</h2>
}
```

<!-- ## TypeError

Объект TypeError представляет ошибку, возникающую, когда значение имеет не ожидаемый тип. Мы применяем метод `toUpperCase`, с которым подробно познакомимся позже, к типу undefined, а это не допустимо так как этот метод преобразует строку в верхний регистр.

```jsx live
function learnJavaScript() {
  var foo = undefined
  foo.toUpperCase()

  return <h2>{foo}</h2>
}
``` -->

## Вопросы:

Для того чтобы понять, на сколько вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме.

![Sumerian school](/img/app.png)

## Ссылки:

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures)
2. [Код для подростков: прекрасное руководство по программированию для начинающих, том 1: Javascript - Jeremy Moritz ](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/types)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖</a></td>
  </tr>
</table>

[![Become a Patron!](/img/logo/patreon.png)](https://www.patreon.com/bePatron?u=31769291)
