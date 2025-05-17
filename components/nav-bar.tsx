"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  
  // Set dark mode as default when component mounts
  useEffect(() => {
    setTheme("dark")
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? `${isDark ? "bg-gray-900/95" : "bg-background/95"} backdrop-blur-md py-2 shadow-md`
          : "bg-black/40 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
           
            <span className="font-extrabold hidden sm:inline-block text-white text-lg">Mercedes-Benz</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="#vehicles" className="text-base font-medium transition-colors hover:text-primary text-white">
              Vehicles
            </Link>
            <Link href="#gallery" className="text-base font-medium transition-colors hover:text-primary text-white">
              Gallery
            </Link>
            <Link href="#design" className="text-base font-medium transition-colors hover:text-primary text-white">
              Design
            </Link>
            <Link href="#innovation" className="text-base font-medium transition-colors hover:text-primary text-white">
              Innovation
            </Link>
            <Link href="#services" className="text-base font-medium transition-colors hover:text-primary text-white">
              Services
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="hidden md:flex gap-4">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 text-base">
              Find a Dealer
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white text-base">Book a Test Drive</Button>
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}