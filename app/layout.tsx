import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ΔRH6Ng1 — системная стратегия на фьючерсах природного газа",
  description:
    "ΔRH6Ng1 — системная спекулятивная стратегия на фьючерсах природного газа. Статистика, вероятностные модели, дисциплина риска.",
};

export const viewport: Viewport = {
  themeColor: "#06080b",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className="font-sans">{children}</body>
    </html>
  );
}
