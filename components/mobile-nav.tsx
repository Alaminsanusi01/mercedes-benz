"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "#" },
  { name: "Vehicles", href: "#vehicles" },
  { name: "Gallery", href: "#gallery" },
  { name: "Design", href: "#design" },
  { name: "Innovation", href: "#innovation" },
  { name: "Services", href: "#services" },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  // Close menu when clicking outside
  useEffect(() => {
    if (!isOpen) return

    // Prevent scrolling when menu is open
    document.body.style.overflow = "hidden"

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }

    document.addEventListener("keydown", handleEscape)

    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen])

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center p-2 rounded-md text-white"
        aria-label="Toggle menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col"
          style={{ backgroundColor: isDark ? "rgba(17, 24, 39, 0.95)" : "rgba(0, 0, 0, 0.95)" }}
        >
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <Image
                src="/mercedes-logo.png"
                alt="Mercedes-Benz Logo"
                width={32}
                height={32}
                priority
                className="invert"
              />
              <span className="font-bold text-white">Mercedes-Benz</span>
            </Link>
            <button onClick={closeMenu} className="p-2 rounded-md text-white" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-auto py-8 px-6">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block text-xl font-medium text-white hover:text-primary transition-colors"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-4">
              <Button className="w-full bg-primary hover:bg-primary/90" size="lg" onClick={closeMenu}>
                Book a Test Drive
              </Button>
              <Button
                variant="outline"
                className="w-full border-white/30 text-white hover:bg-white/10"
                size="lg"
                onClick={closeMenu}
              >
                Find a Dealer
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
