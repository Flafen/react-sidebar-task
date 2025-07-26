# Frontend HTML Test Sidebar

## Описание

Этот проект — современный sidebar-компонент, сверстанный по макету (см. папку assets) с поддержкой светлой и тёмной темы, анимацией и адаптивностью.

## Технологии

- **React 18** — основной фреймворк
- **Vite** — сборщик и dev-сервер
- **styled-components** — CSS-in-JS для стилизации компонентов
- **SCSS** — глобальные переменные и базовые стили
- **framer-motion** — анимации (открытие/закрытие sidebar, плавные переходы)
- **FontAwesome** — иконки
- **classnames** — удобная работа с классами

## Запуск

1. Установите зависимости:
   ```bash
   npm install
   ```
2. Запустите проект:
   ```bash
   npm run dev
   ```
3. Откройте [http://localhost:5173](http://localhost:5173)

## Структура

- `src/components/Sidebar/` — все компоненты и стили sidebar
- `src/assets/` — изображения и иконки
- `src/index.scss` — глобальные переменные и базовые стили

## Темы

- Переключение темы реализовано через класс `dark-theme` на html
- Цвета вынесены в CSS-переменные

## Автор

- Владислав Насулин

# Тестовое задание

Установка зависимостей `npm install`

Запуск проекта `npm run dev`

[Анимированная версия](src/assets/design.mp4)

[Оригинал](https://dribbble.com/shots/18111119-Collapsing-Sidebar-Navigation-Light-and-Dark-mode)
