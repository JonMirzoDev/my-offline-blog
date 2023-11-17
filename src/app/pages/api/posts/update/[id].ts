import { NextApiRequest, NextApiResponse } from 'next'
import { databases } from '@/app/appwrite'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'PUT') {
    const { id } = req.query as { id: string }

    try {
      if (!id) {
        throw new Error('No ID provided')
      }

      const data = req.body
      const result = await databases.updateDocument(
        'blogs-id-29',
        'blog-posts-29',
        id,
        data
      )
      res.status(200).json(result)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Failed to update document' })
    }
  } else {
    res.status(405).end() // Method Not Allowed
  }
}
