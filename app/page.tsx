import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { NavBar } from "@/components/nav-bar"
import { Button } from "@/components/ui/button"
import { GallerySection } from "@/components/gallery-section"

export const metadata: Metadata = {
  title: "Mercedes-Benz | Experience Luxury in Motion",
  description:
    "Discover the latest Mercedes-Benz luxury vehicles, innovations, and offers. Experience the pinnacle of automotive engineering and design.",
  keywords:
    "Mercedes-Benz, luxury cars, automotive, German engineering, S-Class, E-Class, C-Class, SUV, electric vehicles",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-1">
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="hero.png"
              alt="Mercedes-Benz Luxury Vehicle"
              width={1920}
              height={1080}
              priority
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="container relative z-10 pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="space-y-2">
                  <h4 className="text-primary text-lg font-medium tracking-widest uppercase">The Star Is Reborn</h4>
                  <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                    The New <br />
                    S-Class
                  </h1>
                </div>
                <p className="text-lg md:text-xl text-white/80 max-w-md">
                  Experience the pinnacle of automotive luxury. Crafted with precision, designed for those who lead.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                    Discover More
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    Book a Test Drive
                  </Button>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-end">
                <div className="relative">
                  <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-primary/20 backdrop-blur-sm"></div>
                  <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm"></div>
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Performance</h3>
                        <p className="text-white/70 text-sm">Unmatched power</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white/70 text-sm">0-100 km/h</span>
                        <span className="text-white font-medium">4.9s</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/70 text-sm">Top Speed</span>
                        <span className="text-white font-medium">250 km/h</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/70 text-sm">Power</span>
                        <span className="text-white font-medium">429 hp</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
            </div>
          </div>
        </section>

        <section id="vehicles" className="py-20 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Luxury Meets Performance</h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-3xl">
                Discover our range of vehicles that combine elegant design with cutting-edge technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-lg transition-all hover:shadow-xl bg-background">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src="sedan2.png"
                    alt="Mercedes-Benz Sedan"
                    width={600}
                    height={400}
                    priority
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Sedans</h3>
                  <p className="text-muted-foreground mb-4">Elegance in motion with unparalleled comfort and style.</p>
                  <Link href="#" className="flex items-center text-sm font-medium text-primary">
                    Explore Models <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg transition-all hover:shadow-xl bg-background">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src="hero1.png"
                    alt="Mercedes-Benz SUV"
                    width={600}
                    height={400}
                    priority
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">SUVs</h3>
                  <p className="text-muted-foreground mb-4">Versatility without compromise for every adventure.</p>
                  <Link href="#" className="flex items-center text-sm font-medium text-primary">
                    Explore Models <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg transition-all hover:shadow-xl bg-background">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src="electric2.png"
                    alt="Mercedes-Benz Electric Vehicle"
                    width={600}
                    height={400}
                    priority
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Electric</h3>
                  <p className="text-muted-foreground mb-4">The future of luxury with sustainable innovation.</p>
                  <Link href="#" className="flex items-center text-sm font-medium text-primary">
                    Explore Models <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <GallerySection />

     <section id="design" className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Designed for Excellence</h2>
                <p className="text-lg text-muted-foreground">
                  Every Mercedes-Benz vehicle is crafted with meticulous attention to detail, combining timeless
                  elegance with mod        ern innovation. Our design philosophy embraces both aesthetic beauty and functional
                  excellence.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Aerodynamic Excellence</h3>
                      <p className="text-muted-foreground">Optimized for both efficiency and stability</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Premium Materials</h3>
                      <p className="text-muted-foreground">Handcrafted interiors with the finest materials</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Sensual Purity</h3>
                      <p className="text-muted-foreground">Clean lines and perfect proportions</p>
                    </div>
                  </li>
                </ul>
                <Button variant="outline">Learn More About Design</Button>
              </div>
              <div className="relative">
                <Image
                  src="01.JPEG"
                  alt="Mercedes-Benz Luxury Interior"
                  width={800}
                  height={600}
                  priority
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-lg shadow-lg max-w-xs">
                  <p className="text-sm font-medium">
                    "The interior of a Mercedes-Benz is where technology meets artistry, creating an environment of
                    unparalleled luxury."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">— Gorden Wagener, Chief Design Officer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="innovation" className="py-20 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pioneering Innovation</h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-3xl">
                Leading the way in automotive technology and safety systems
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg p-8 shadow-sm transition-all hover:shadow-lg">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Advanced Safety</h3>
                <p className="text-muted-foreground">
                  Cutting-edge safety systems that predict and prevent accidents before they happen, protecting you and
                  your passengers.
                </p>
              </div>

              <div className="bg-background rounded-lg p-8 shadow-sm transition-all hover:shadow-lg">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Connected Driving</h3>
                <p className="text-muted-foreground">
                  Seamlessly integrate your digital life with your vehicle through our advanced MBUX system and
                  smartphone connectivity.
                </p>
              </div>

              <div className="bg-background rounded-lg p-8 shadow-sm transition-all hover:shadow-lg">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Electric Intelligence</h3>
                <p className="text-muted-foreground">
                  Our EQ models combine sustainable mobility with the luxury and performance you expect from
                  Mercedes-Benz.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Image
                  src="logo1.jpg"
                  alt="Mercedes-Benz Service Center"
                  width={800}
                  height={600}
                  priority
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Exceptional Service</h2>
                <p className="text-lg text-muted-foreground">
                  Our commitment to excellence extends beyond our vehicles. Experience premium service tailored to your
                  needs, ensuring your Mercedes-Benz performs at its best throughout its lifetime.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Maintenance Services</h3>
                    <p className="text-sm text-muted-foreground">Factory-trained technicians using genuine parts</p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Mercedes me connect</h3>
                    <p className="text-sm text-muted-foreground">Digital access to your vehicle's needs</p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Extended Warranty</h3>
                    <p className="text-sm text-muted-foreground">Additional protection for your investment</p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">24/7 Roadside Assistance</h3>
                    <p className="text-sm text-muted-foreground">Help whenever and wherever you need it</p>
                  </div>
                </div>
                <Button>Schedule Service</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Experience Mercedes-Benz
                </h2>
                <p className="text-xl opacity-90">
                  Book a test drive today and discover the perfect blend of luxury, performance, and innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="secondary">
                    Book a Test Drive
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Find a Dealer
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="inter2.jpg"
                  alt="Mercedes-Benz Showroom"
                  width={800}
                  height={500}
                  priority
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/50">
        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2 lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-4">
               
                <span className="font-bold">Mercedes-Benz</span>
              </Link>
              <p className="text-sm text-muted-foreground mb-4">
                The best or nothing. Experience luxury in motion with Mercedes-Benz.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-4">Vehicles</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Sedans
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    SUVs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Coupes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Convertibles
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Electric
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    AMG
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Financing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Leasing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Service & Parts
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Warranty
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Fleet Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">About</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Innovation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Investor Relations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Find a Dealer
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Roadside Assistance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Recall Information
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Owner Manuals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Developed by Alamin sanusi. 
            </p>
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
                Terms of Use
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
                Cookie Settings
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
                Accessibility
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
                Legal Notice
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
