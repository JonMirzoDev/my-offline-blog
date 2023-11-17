import { ID, databases } from '@/app/appwrite'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const data = req.body
      const result = await databases.createDocument(
        'blogs-id-29',
        'blog-posts-29',
        ID.unique(),
        data,
        ['*']
      )

      res.status(200).json(result)
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message })
      } else {
        res.status(500).json({ error: 'An unknown error occurred' })
      }
    }
  } else {
    res.status(405).end() // Method Not Allowed
  }
}
