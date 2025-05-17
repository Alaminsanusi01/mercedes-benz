import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mercedes-Benz | Experience Luxury in Motion",
  description:
    "Discover the latest Mercedes-Benz luxury vehicles, innovations, and offers. Experience the pinnacle of automotive engineering and design.",
  keywords:
    "Mercedes-Benz, luxury cars, automotive, German engineering, S-Class, E-Class, C-Class, SUV, electric vehicles, AMG",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mercedes-benz.com",
    title: "Mercedes-Benz | Experience Luxury in Motion",
    description:
      "Discover the latest Mercedes-Benz luxury vehicles, innovations, and offers. Experience the pinnacle of automotive engineering and design.",
    siteName: "Mercedes-Benz",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mercedes-Benz Luxury Vehicles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mercedes-Benz | Experience Luxury in Motion",
    description:
      "Discover the latest Mercedes-Benz luxury vehicles, innovations, and offers. Experience the pinnacle of automotive engineering and design.",
    images: ["/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://mercedes-benz.com" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mercedes-Benz",
              url: "https://mercedes-benz.com",
              logo: "https://mercedes-benz.com/mercedes-logo.png",
              sameAs: [
                "https://www.facebook.com/MercedesBenz",
                "https://www.instagram.com/mercedesbenz",
                "https://twitter.com/MercedesBenz",
                "https://www.youtube.com/user/MercedesBenzTV",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
