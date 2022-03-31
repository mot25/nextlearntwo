import { NextApiRequest, NextApiResponse } from "next";

export default async function getPostWithId(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("req", req.query.id);
  const posts = await fetch(
    `http://localhost:4200/posts/${req.query.id}`
  ).then(res => res.json());
  res.json(posts);
}
