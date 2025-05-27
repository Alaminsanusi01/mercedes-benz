"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "/gallery/mercedes-1.jpg",
    alt: "Mercedes-Benz S-Class Sedan",
    title: "S-Class Sedan",
    description: "The pinnacle of luxury and innovation",
  },
  {
    src: "/gallery/mercedes-2.jpg",
    alt: "Mercedes-Benz E-Class Coupe",
    title: "E-Class Coupe",
    description: "Elegant sportiness with cutting-edge technology",
  },
  {
    src: "/gallery/mercedes-3.jpg",
    alt: "Mercedes-Benz GLE SUV",
    title: "GLE SUV",
    description: "Versatility meets sophistication",
  },
  {
    src: "/gallery/mercedes-4.jpg",
    alt: "Mercedes-Benz AMG GT",
    title: "AMG GT",
    description: "Performance redefined",
  },
  {
    src: "/gallery/mercedes-5.jpg",
    alt: "Mercedes-Benz EQS Electric Sedan",
    title: "EQS Electric",
    description: "The future of sustainable luxury",
  },
  {
    src: "/gallery/mercedes-6.jpg",
    alt: "Mercedes-Benz C-Class Sedan",
    title: "C-Class Sedan",
    description: "Compact luxury with premium features",
  },
  {
    src: "/02.jpeg",
    alt: "Mercedes-Benz G-Class SUV",
    title: "G-Class SUV",
    description: "Iconic design with unmatched capability",
  },
  {
    src: "/gallery/mercedes-8.jpg",
    alt: "Mercedes-Benz SL Roadster",
    title: "SL Roadster",
    description: "Open-top driving at its finest",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState("all")

  const handlePrev = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
  }

  const handleNext = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
  }

  const filteredImages =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.title.toLowerCase().includes(filter.toLowerCase()))

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"></h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl">
            Discover the full range of Mercedes-Benz vehicles, each a masterpiece of engineering and design
          </p>
        </div>

        <div className="flex justify-center mb-8 flex-wrap gap-2">
          <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")} className="mb-2">
            All Models
          </Button>
          <Button
            variant={filter === "sedan" ? "default" : "outline"}
            onClick={() => setFilter("sedan")}
            className="mb-2"
          >
            Sedans
          </Button>
          <Button variant={filter === "suv" ? "default" : "outline"} onClick={() => setFilter("suv")} className="mb-2">
            SUVs
          </Button>
          <Button
            variant={filter === "coupe" ? "default" : "outline"}
            onClick={() => setFilter("coupe")}
            className="mb-2"
          >
            Coupes
          </Button>
          <Button
            variant={filter === "electric" ? "default" : "outline"}
            onClick={() => setFilter("electric")}
            className="mb-2"
          >
            Electric
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-background shadow-md transition-all hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-[3/2] overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">{image.title}</h3>
                <p className="text-sm text-muted-foreground">{image.description}</p>
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                <span className="text-white font-medium">View Details</span>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-5xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white p-2 z-10"
                aria-label="Close gallery"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="relative aspect-[16/9] bg-black/20">
                <Image
                  src={galleryImages[selectedImage].src || "/placeholder.svg"}
                  alt={galleryImages[selectedImage].alt}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="bg-background p-4 mt-2 rounded-md">
                <h3 className="text-xl font-bold">{galleryImages[selectedImage].title}</h3>
                <p className="text-muted-foreground">{galleryImages[selectedImage].description}</p>
              </div>

              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
