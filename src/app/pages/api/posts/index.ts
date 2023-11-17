import { databases } from '@/app/appwrite'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const result = await databases.listDocuments(
        'blogs-id-29',
        'blog-posts-29'
      )
      res.status(200).json(result.documents)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Failed to fetch documents' })
    }
  } else {
    res.status(405).end() // Method Not Allowed
  }
}
