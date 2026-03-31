import "./globals.css";

export const metadata = {
  title: "Алла Таскаева — Стиль Таскаевой",
  description:
    "Российский художник-прикладник, мастер художественного переплета и авторской вышивки."
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
