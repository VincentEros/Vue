function getclient() {
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

function listclient() {
    // debugger;
    return fetch(
        `/api/v1/apitool/listclient`,
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

function generate_account(client_id) {
    var params = new FormData();
    params.append("appId", client_id);
    // debugger;
    return fetch(
        `/api/v1/apitool/generateAccount?url_suffix=/paymenttools/openaccount/enterprise/vip`,
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
    getclient,
    generate_account,
    listclient,


};