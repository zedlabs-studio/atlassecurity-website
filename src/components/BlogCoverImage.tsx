'use client'

import Image from 'next/image'

export default function BlogCoverImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority
      sizes="(max-width: 1024px) 100vw, 1200px"
      className="object-cover opacity-70"
    />
  )
}