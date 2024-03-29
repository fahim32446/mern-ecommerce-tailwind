import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ReduxProvider from '@/redux/ReduxProvider';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'Az Store - Your Ultimate Destination for Everyday Essentials and Unbeatable Deals',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ReduxProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='light'
            enableSystem
            disableTransitionOnChange
            themes={['light', 'dark', 'orange']}
          >
            <Toaster richColors closeButton />
            <Navbar />
            {children}
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
