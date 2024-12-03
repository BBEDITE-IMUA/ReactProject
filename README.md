# Проект на React

Этот проект создан с использованием React, Redux и CSS с [Consta](https://consta.design/) для стилизации. Ниже вы найдете информацию о структуре проекта, инструкциях по настройке и рабочем процессе разработки.

---

## 🛠 Особенности
- **React**: пользовательский интерфейс на основе компонентов.
- **Redux**: Управление состоянием.
- **Consta**: стиль пользовательского интерфейса в современном стиле.
- **Модули CSS**: ограниченные и поддерживаемые стили CSS.

---

## 🚀 Начало работы

### Предварительные условия
Убедитесь, что у вас установлено следующее:
- Node.js
- менеджер пакетов npm

### Установка

1. Клонируйте репозиторий:
   ```
   git clone https://github.com/BBEDITE-IMUA/ReactProject.git
   ```
2. Установите зависимости:
    ```
    npm install
    ```
3. Запустите сервер разработки:
    ```
    npm start
    ```
5. Откройте приложение в браузере по адресу:
    ```
    http://localhost:3000
    ```
## 📂 Структура проекта
    ```
    Src/
      Components/
        App/
          App.jsx
          Store.js
        Card/
          Card.jsx
        Footer/
          Footer.css
          Footer.jsx
        Header/
          Header.css
          Header.jsx
      Index/
        Index.js
        Palette.jsx
        Previews.jsx
        UseInitial.js
      Layouts/
        DefaultLayout/
          DefaultLayout.jsx
      Pages/
        LoginPage/
          LoginPage.css
          LoginPage.jsx
        MainPage/
          MainPage.css
          MainPage.jsx
          NewsSlice.js
        ProfilePage/
          ProfilePage.css
          ProfilePage.jsx
          ProfileSlice.js
        ServiceDetailsPage/
          ServiceDetailsPage.css
          ServiceDetailsPage.jsx
        ServicePage/
          ServicePage.css
          ServicePage.jsx
          ServicesSlice.js
      Index.js
      ReportWebVitals.js
      SetupTests.js
      Style.css
      ```
## ✏️ Рекомендации по фиксации
### Следуйте этим соглашениям об именах коммитов, чтобы поддерживать чистоту истории:

1. feat: Добавление нового функционала или возможностей.
```
git commit -m "add: user authentication module"
```
2. fix: Исправление ошибок или проблем.
```
git commit -m "fix: resolve login page crash"
```
3. docs: Обновление документации.
```
git commit -m "docs: improve README installation instructions"
```
4. chore: Обновления конфигурации или сборки.
```
git commit -m "chore: update webpack config"
```
5. test: Изменения в тестах.
```
git commit -m "test: add tests for ProfilePage"
```
