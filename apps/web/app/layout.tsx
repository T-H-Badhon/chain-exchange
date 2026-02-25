import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chain Exchange',
  description: 'Decentralized exchange platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
