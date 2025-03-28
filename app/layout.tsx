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
       <footer className='bg-blue-500 text-white p-10 flex justify-center'>
        <p>Hecho con amor &#x1F498; por @carlosfrontend</p>
        
       </footer>
      </body>
    </html>
  );
}
