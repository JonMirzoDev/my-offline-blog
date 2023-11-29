import { NextPage } from 'next'
import Link from 'next/link'

type Post = {
  $id: string
  $collection: string
  $createdAt: string
  $updatedAt: string
  author: string | null
  content: string
  date: string
  imageURL: string | null
  tags: string[]
  title: string
}

type HomeProps = {
  posts: Post[]
  error?: string
}

async function fetchPosts() {
  const res = await fetch('http://localhost:3000/api/posts')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Home: NextPage<HomeProps> = async () => {
  const posts = await fetchPosts()
  console.log('posts: ', posts)

  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {posts?.map((post: Post) => (
          <li key={post.$id}>
            <Link href={`/posts/${post.$id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
