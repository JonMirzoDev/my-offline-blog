import { NextApiRequest, NextApiResponse } from 'next'
import { databases } from '@/app/appwrite'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'DELETE') {
    const { id } = req.query as { id: string }

    try {
      const result = await databases.deleteDocument(
        'blogs-id-29',
        'blog-posts-29',
        id
      )
      res.status(200).json(result)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Failed to delete document' })
    }
  } else {
    res.status(405).end() // Method Not Allowed
  }
}
