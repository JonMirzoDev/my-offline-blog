type BlogPostProps = {
  title: string
  content: string
  date: Date | string
  author?: string
  tags?: string[]
  imageURL: string
}

class BlogPost {
  title: string
  content: string
  date: Date
  author: string
  tags: string[]
  imageURL: string

  constructor({
    title,
    content,
    date,
    author = '',
    tags = [],
    imageURL = ''
  }: BlogPostProps) {
    this.title = title
    this.content = content
    this.date = new Date(date)
    this.author = author
    this.tags = tags
    this.imageURL = imageURL
  }
}

export default BlogPost
