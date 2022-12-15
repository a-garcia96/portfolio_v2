const contenful = require("contentful");

const useContentful = () => {
  const client = contenful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  const getEntryById = async (entryId) => {
    const entries = await client.getEntries({content_type: entryId})

    return entries
  };

  return [getEntryById];
};

export { useContentful };
