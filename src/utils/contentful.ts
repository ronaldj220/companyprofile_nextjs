import { createClient } from "contentful";

export const createContentClient = () => {
  return createClient({
    space: "rm6rjl1sx0uk",
    accessToken: "ZDyT5ffbp5g_eMp0rB17LiBtf5xjV0445NLfxeiKFVE",
  });
};

const client = createContentClient();

export const getEntriesByType = async (type: any) => {
  const res = await client.getEntries({
    content_type: type,
  });

  return res.items;
};

export const getblogPost = async () => {
  const result = await getEntriesByType("blogPost");
  const blogPost = result.map((blog) => blog.fields);
  return blogPost;
};
