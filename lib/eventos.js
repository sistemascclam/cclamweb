import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const eventosDirectory = join(process.cwd(), 'content/_eventos')

export function getEventoSlugs() {
  return fs.readdirSync(eventosDirectory)
}

export function getEventoBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(eventosDirectory, `${realSlug}.md`)
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

export function getAllEventos(fields = []) {
  const slugs = getEventoSlugs()
  const eventos = slugs
    .map((slug) => getEventoBySlug(slug, fields))
    // sort eventos by date in descending order
    .sort((evento1, evento2) => (evento1.date > evento2.date ? -1 : 1))
  return eventos
}
