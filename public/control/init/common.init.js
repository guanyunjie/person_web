/**
 * Created by Administrator on 2017/4/2 0002.
 */
require.config({
    paths: {
        header : '../template/header.html',
        footer : '../template/footer.html'
    }
});
//	调用module.js
require(['../control/viewModule/common.module'], function(model) {});