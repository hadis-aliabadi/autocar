export const getAllPosts = async () => {
  const _res = await fetch(`${BASE_URL}/api/posts`);
  const posts = await _res.json();
  return posts;
};
