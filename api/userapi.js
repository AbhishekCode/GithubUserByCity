export const getUserByLocationApi = location => {
  return fetch(`https://api.github.com/search/users?q=location:${location}`);
};
