

 function gettoken({client_id, client_secret} = {}) {
    var params = new FormData();
    params.append("client_id", client_id);
    params.append("client_secret", client_secret);

    // debugger;
    return fetch(
        `/api/v1/apitool/auth?grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
        {
            method: "GET",
            credentials: 'include',
            //data: params,
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

function bidride({focus_ride_id, phone} = {}) {
    var params = new FormData();
    params.append("focus_ride_id", focus_ride_id);
    params.append("phone", phone);

    // debugger;
    return fetch(
        `/api/v1/apitool/proxyAuth?url_suffix=/taxiride/driver/ride/`,
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

 function update({taxi_ride_id, phone, status} = {}) {
     var params = new FormData();
     params.append("taxi_ride_id", taxi_ride_id);
     params.append("phone", phone);
     params.append("status", status);

     // debugger;
     return fetch(
         `/api/v1/apitool/proxyAuth?url_suffix=/taxiride/driver/ride/${taxi_ride_id}`,
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


 function cancleride({taxi_ride_id, phone} = {}) {
     var params = new FormData();
     params.append("taxi_ride_id", taxi_ride_id);
     params.append("phone", phone);

     // debugger;
     return fetch(
         `/api/v1/apitool/proxyAuth?url_suffix=/taxiride/base/ride/${taxi_ride_id}`,
         {
             method: "DELETE",
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

 function getPhone() {

     // debugger;
     return fetch(
         `/api/v1/apitool/getPhone`,
         {
             method: "POST",
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

 function setpos({longitude, latitude} = {}) {
     var params = new FormData();
     params.append("longitude", longitude);
     params.append("latitude", latitude);
     // debugger;
     return fetch(
         `/api/v1/apitool/setpos`,
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

 function getpos() {

     // debugger;
     return fetch(
         `/api/v1/apitool/getpos`,
         {
             method: "POST",
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

 function initpay({taxi_ride_id, phone, price, tolls_fee, extra_fee} = {}) {
     var params = new FormData();
     params.append("taxi_ride_id", taxi_ride_id);
     params.append("phone", phone);
     params.append("price", price);
     params.append("tolls_fee", tolls_fee);
     params.append("extra_fee", extra_fee);

     // debugger;
     return fetch(
         `/api/v1/apitool/initpay?url_suffix=/taxi/driver/pay/init`,
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
     gettoken,
     bidride,
     update,
     cancleride,
     getPhone,
     setpos,
     getpos,
     initpay,

 };