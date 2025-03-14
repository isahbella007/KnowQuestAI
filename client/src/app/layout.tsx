"use client"
import { defaultSettings } from "@/config"
import MotionLazyContainer from "./components/MotionLazyContainers"
// import ProgressBar from "./components/ProgressBar"
import { AuthProvider } from "./context/AccountContext"
import { SettingsProvider } from "./context/SettingsContext"
import GlobalGuard from "./guards/GlobalGuard"
import { store } from "./redux/store"
import ThemeProvider from "./theme"
import { Provider as ReduxProvider } from 'react-redux';
import './global.css'
import { Poppins, Montserrat } from 'next/font/google';
import GoogleAnalytics from "./components/GoogleAnalytics"

// Load fonts
const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// export const metadata = {
//   title: 'My App Name',
//   description: 'My App Description',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.className} ${montserrat.className}`}>
      <body>
      <GoogleAnalytics/>
        <AuthProvider>
          <ReduxProvider store={store}>
              <SettingsProvider defaultSettings={defaultSettings}>
                  <MotionLazyContainer>
                      <ThemeProvider>
                          <GlobalGuard>
                              {/* <ProgressBar /> */}
                            
                              {children}
                          </GlobalGuard>
                      </ThemeProvider>
                  </MotionLazyContainer>
              </SettingsProvider>
          </ReduxProvider>
        </AuthProvider>
      
      </body>
    </html>
  )
}
