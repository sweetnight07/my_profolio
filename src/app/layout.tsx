// Import the Background component
import Background from "./components/background/background";
import ResponsiveAppBar from './components/nav_bar';
import Page from "./page";


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <Background />
          <ResponsiveAppBar />
          <main style={{ position: 'relative', zIndex: 1 }}>
          {children}</main>
        </body>
      </html>
    );
  }
