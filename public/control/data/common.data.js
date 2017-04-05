/**
 * Created by Administrator on 2017/4/2 0002.
 */
define(['jquery'],function ($) {
    /**
     *  封装ajax请求
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

    /**
     *  查询所有的一级目录
     * @param data
     * @param callback
     */
    function queryDirectory(data,callback) {
        request('queryDirectory',data,function (result) {
            callback(result);
        });
    }

    /**
     * 分页查询图标
     * @param data
     * @param callback
     */
    function queryIcons(data,callback) {
        request('queryIcons',data,function (result) {
            callback(result);
        });
    }
    return {
        request : request,
        queryDirectory:queryDirectory,
        queryIcons:queryIcons
    }
});