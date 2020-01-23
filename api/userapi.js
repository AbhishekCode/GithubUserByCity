export const getUserByLocationApi = location => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.github.com/search/users?q=location:${location}`).then(
      response => resolve(response)
    ).catch(err=>reject(reject))
  })
};


export const simpleApiRequest = (apiUrl) => {
  return new Promise((resolve, reject) => {
    fetch(apiUrl).then(
      response => resolve(response)
    ).catch(err=>reject(reject))
  })
};

