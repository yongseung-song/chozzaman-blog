import * as contentful from "contentful"

type BlogPostSkeleton = {
  contentTypeId: "blogPost"
  fields: {
    postTitle: contentful.EntryFieldTypes.Text
    postContent: contentful.EntryFieldTypes.RichText
    postTags: contentful.EntryFieldTypes.Array<contentful.EntryFieldTypes.Symbol>
    postCreationDate: contentful.EntryFieldTypes.Date
  }
}

export interface Post {
  metadata: {
    tags: string[]
  }
  sys: {
    space: {
      sys: {
        type: string
        linkType: string
        id: string
      }
    }
    id: string
    type: string
    createdAt: string
    updatedAt: string
    environment: {
      sys: {
        id: string
        type: string
        linkType: string
      }
    }
    revision: 1
    contentType: {
      sys: {
        type: string
        linkType: string
        id: string
      }
    }
    locale: string
  }
  fields: BlogPostSkeleton["fields"]
}
