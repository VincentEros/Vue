function setpassword({password, newpass} = {}) {
    var params = new FormData();
    params.append("password", password);
    params.append("newpass", newpass);

    return fetch(
        `/api/v1/apitool/setpassword`,
        {
            method: "POST",
            credentials: 'include',
            body: params,
        }).then(res => {
        try {
            return res.json()
        } catch (e) {
            return Promise.reject({
                code: 500,
                message: "服务器错误"
            });
        }
    })
}

module.exports = {
    setpassword,

};