import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Chozzaman's blog",
  description: 'Hi! Thank you for visiting my blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
