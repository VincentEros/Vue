function login ({ ENTERPRISE_USER_ID, USER_PASSWORD } = {}) {
  let params = new FormData()
  params.append('ENTERPRISE_USER_ID', ENTERPRISE_USER_ID)
  params.append('USER_PASSWORD', USER_PASSWORD)

  // debugger;
  return fetch(
    `/api/v1/apitool/login`,
    {
      method: 'POST',
      credentials: 'include',
      body: params
    }).then(res => {
    try {
      return res.json()
    } catch (e) {
      return Promise.reject({
        code: 500,
        message: '服务器错误'
      })
    }
  })
}

function logout () {
  return fetch(
    `/api/v1/apitool/logout`,
    {
      method: 'POST',
      credentials: 'include'
    }).then(res => {
    try {
      return res.json()
    } catch (e) {
      return Promise.reject({code: 500, message: '服务器错误'})
    }
  })
}

module.exports = {
  login,
  logout

}
