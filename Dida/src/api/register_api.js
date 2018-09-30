

export function getclient() {
    // debugger;
    return fetch(
        `/api/v1/apitool/search`,
        {
            method: "GET",
            credentials: 'include',
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