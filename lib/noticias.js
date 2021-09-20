import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const noticiasDirectory = join(process.cwd(), 'content/_noticias')

export function getNewSlugs() {
  return fs.readdirSync(noticiasDirectory)
}

export function getNewBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(noticiasDirectory, `${realSlug}.md`)
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

export function getAllNews(fields = []) {
  const slugs = getNewSlugs()
  const news = slugs
    .map((slug) => getNewBySlug(slug, fields))
    // sort news by date in descending order
    .sort((new1, new2) => (new1.date > new2.date ? -1 : 1))
  return news
}
