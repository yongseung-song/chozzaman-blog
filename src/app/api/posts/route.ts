import { createClient } from "contentful"
import { NextApiRequest, NextApiResponse } from "next"

const client = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY!,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
})

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await client.getEntries()
    return Response.json(response.items)
  } catch (error) {
    console.error("fuck you")
  }
}
