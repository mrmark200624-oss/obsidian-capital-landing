# Obsidian Capital — Landing

Одностраничный лендинг закрытого инвестиционного клуба / приватного DeFi-фонда.
**Next.js 14 (App Router) + Tailwind CSS.** Люксовый минимализм: чёрный/тёмно-серый,
приглушённое золото, serif-заголовки (Cormorant Garamond), медленные анимации.

## Секции

- **Hero** — сдержанный слоган, CTA "Request access"
- **Philosophy** — 4 принципа фонда строками с hairline-разделителями
- **Stats** — строгие числа: AUM, партнёры, IRR, годы
- **Partners** — команда с ч/б портретами-заглушками (inline SVG)
- **Quote** — цитата на весь экран
- **Footer** — минимум ссылок + дисклеймер

Все данные — заглушки в [`data/content.ts`](data/content.ts).

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000 (или следующий свободный порт)
```

## Сборка и деплой на Vercel

```bash
npm run build
```

Пуш в GitHub → импорт на [vercel.com](https://vercel.com) → Deploy (Next.js
определяется автоматически). Либо `vercel --prod` через CLI.
Переменные окружения не требуются.

## Стек

- Next.js 14, React 18, TypeScript, Tailwind CSS 3.4
- Шрифты — next/font (Cormorant Garamond + Inter)
- Анимации — IntersectionObserver + CSS, без внешних библиотек
