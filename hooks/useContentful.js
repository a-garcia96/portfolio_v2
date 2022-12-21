const contenful = require("contentful");

const useContentful = () => {
  const client = contenful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  })

  const getEntryByContentType = async (entryId = 'post') => {
    const entries = await client.getEntries({content_type: 'post' , order: "-sys.createdAt"}).then(response => response)

    return entries.items.map((item) => {
      return {
        profilePhoto: item.fields.profilePhoto.fields.file.url,
        title: item.fields.title,
        author: item.fields.author.fields.displayName,
        slug: item.fields.slug,
        postDate: item.fields.postDate,
        postContent: item.fields.postContent.content[0].content[0].value
      }
    })
  }

  const getPostBySlug = async (slug) => {
    const post = await client.getEntries({
      content_type: "post",
      'fields.slug[match]': slug
    })

    return post.items.map((item) => {
      return {
        profilePhoto: item.fields.profilePhoto.fields.file.url,
        title: item.fields.title,
        author: item.fields.author.fields.displayName,
        slug: item.fields.slug,
        postDate: item.fields.postDate,
        postContent: item.fields.postContent.content[0].content[0].value
      }
    })
  }


  return [getEntryByContentType, getPostBySlug];
};

export { useContentful };
