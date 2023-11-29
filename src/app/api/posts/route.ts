import { databases } from '@/app/appwrite'

export async function GET() {
  const result = await databases.listDocuments('blogs-id-29', 'blog-posts-29')
  const data = result.documents
  return Response.json({ data })
}
