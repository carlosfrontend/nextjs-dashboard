import { inter } from './ui/fonts';
import './ui/global.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
       {children}
       <footer className='flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52'>
        <p>Hecho con amor &#x1F498; por @carlosfrontend</p>
        
       </footer>
      </body>
    </html>
  );
}
