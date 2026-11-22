import './globals.css';

export const metadata = {
  title: 'PuzzlePaws Tower | Dog Treat Puzzle Shop',
  description: 'Interactive dog treat puzzle toys. Teal, orange, yellow.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
