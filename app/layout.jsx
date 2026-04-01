import "./globals.css";

export const metadata = {
  title: "Alla Taskaeva — Authorial Textile Bookbinding",
  description:
    "Biographical archive page about Alla Taskaeva, Russian master of authorial textile bookbinding and embroidery."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
