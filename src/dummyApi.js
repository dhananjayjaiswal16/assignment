const randomString = () => {
  const randomData = Math.random().toString(36).substr(2);
  return randomData;
}
export const getAccessToken = (user) => {
  return new Promise((resolve, reject) => {
    const token = randomString() + randomString();
    resolve(token)
  })
}

export const verifyAccessToken = (token) => {
  return new Promise((resolve, reject) => {
    const num = Math.random();
    if (num >= 0.5) {
      resolve(true)
    } else {
      reject(false)
    }
  })
}