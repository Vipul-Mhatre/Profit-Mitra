import './globals.css';
import Sidebar from './components/Sidebar';

export const metadata = {
  title: 'Personalized Investment Dashboard',
  description: 'A personalized financial dashboard powered by AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <div className="flex-1 p-8 bg-gray-100">
          {children}
        </div>
      </body>
    </html>
  );
}