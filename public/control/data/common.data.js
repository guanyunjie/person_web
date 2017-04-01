/**
 * Created by Administrator on 2017/4/2 0002.
 */
define(['jquery'],function ($) {
    /**
     *
     * @param service
     * @param data
     * @param callback
     */
    function request(service,data,callback) {
        var bean = {
            service : service,
            data : data
        };
        $.ajax({
            contentType	: "application/json",
            type: "post",
            url: '/web/query',
            data: JSON.stringify(bean),
            dataType: "json",
            success: function (data) {
                callback(data);
            }
        });
    }

    return {
        request : request
    }
});