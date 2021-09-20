import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const pronunciamientosDirectory = join(process.cwd(), 'content/_pronunciamientos')

export function getPronunciamientoSlugs() {
  return fs.readdirSync(pronunciamientosDirectory)
}

export function getPronunciamientoBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(pronunciamientosDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPronunciamientos(fields = []) {
  const slugs = getPronunciamientoSlugs()
  const pronunciamientos = slugs
    .map((slug) => getPronunciamientoBySlug(slug, fields))
    // sort pronunciamientos by date in descending order
    .sort((pronunciamiento1, pronunciamiento2) => (pronunciamiento1.date > pronunciamiento2.date ? -1 : 1))
  return pronunciamientos
}
