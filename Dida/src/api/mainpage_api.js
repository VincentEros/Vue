
function getuser() {
    // debugger;
    return fetch(
        `/api/v1/apitool/getuser`,
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




function putUrl(callback_url) {
    var params = new FormData();
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


function sendcode(phone) {
    var params = new FormData();
    params.append("phone", phone);
    // debugger;
    return fetch(
        `/api/v1/apitool/sendcode`,
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

function authphone(authCode, phone) {
    var params = new FormData();
    params.append("authCode", authCode);
    params.append("phone", phone);
    // debugger;
    return fetch(
        `/api/v1/apitool/authphone`,
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
    putUrl,
    sendcode,
    authphone,



};