export function put_driver_ride({user_cid, taxi_ride_id, status, lon, lat} = {}) {
    var params = new FormData();
    params.append("user_cid", user_cid);
    params.append("taxi_ride_id", taxi_ride_id);
    params.append("status", status);

    // debugger;
    return fetch(
        `/api/v1/apitool/proxyAuth?url=http://url_suffix=/taxiride/driver/ride/${taxi_ride_id}&user_cid=${user_cid}&lon=${lon}&lat=${lat}`,
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
