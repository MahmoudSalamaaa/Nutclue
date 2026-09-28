import "./globals.css";import "./arabic-font.css";import {Providers} from "./providers";export const metadata={title:"NutClue — Food. Body. Context.",description:"Clear nutrition education, family-friendly guides and simple health journaling."};export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Providers>{children}</Providers></body></html>}

