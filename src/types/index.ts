export type Blog = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  published: boolean
  publishedAt: string | null
  createdAt: string
  updatedAt: string
}

export type Testimonial = {
  id: string
  name: string
  message: string
  rating: number
  status: 'PENDING' | 'APPROVED' | 'REJECTED'
  createdAt: string
}

export type Career = {
  id: string
  title: string
  description: string
  requirements: string
  applyEmail: string
  isActive: boolean
  createdAt: string
}

export type ContactSubmission = {
  id: string
  name: string
  phone: string
  email: string
  service: string
  message: string
  createdAt: string
}

// Leaner public-facing types (what APIs return to frontend)
export type PublicBlog = Pick<Blog, 'id' | 'title' | 'slug' | 'excerpt' | 'coverImage' | 'publishedAt'>
export type PublicTestimonial = Pick<Testimonial, 'id' | 'name' | 'message' | 'rating' | 'createdAt'>
export type PublicCareer = Pick<Career, 'id' | 'title' | 'description' | 'requirements' | 'applyEmail'>