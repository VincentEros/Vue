function putUrl({client_id, client_secret, callback_url} = {}) {
    var params = new FormData();
    params.append("client_id", client_id);
    params.append("client_secret", client_secret);
    params.append("callback_url", callback_url);
    // debugger;
    return fetch(
        `/api/v1/apitool/putUrl`,
        {
            method: "PUT",
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

function testUrl1(inputurl) {
    var params = new FormData();
    params.append("order_id", "test");
    params.append("status", "5");
    return fetch(
        `/api/v1/apitool/testUrl?url=${inputurl}/notify/status_sync`,
        /*`/api/v1/apitool/testUrl?url=${inputurl}`,*/
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

function testUrl2(inputurl) {
    var params = new FormData();
    params.append("order_id", "test");
    params.append("price", "50");
    params.append("tipping", "10");
    params.append("extraFee", "10");
    return fetch(
        `/api/v1/apitool/testUrl?url=${inputurl}/notify/pay`,
        /*`/api/v1/apitool/testUrl?url=${inputurl}`,*/
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

function testUrl3(inputurl) {
    var params = new FormData();
    params.append("order_id", "test");
    params.append("refund_money", "10");
    return fetch(
        `/api/v1/apitool/testUrl?url=${inputurl}/notify/refund`,
        /*`/api/v1/apitool/testUrl?url=${inputurl}`,*/
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

    putUrl,
    testUrl1,
    testUrl2,
    testUrl3,

};