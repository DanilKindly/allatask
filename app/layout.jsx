import "./globals.css";

export const metadata = {
  title: "Блокноты в стиле Таскаевой",
  description:
    "Архивная страница о художественном переплете и авторской вышивке Аллы Таскаевой."
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
