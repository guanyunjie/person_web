/**
 * Created by Guanyunjie on 2017/4/2 0002.
 */
require.config({
	baseUrl : '',
	paths: { 
		jquery : "../lib/jquery-1.11.1.min",
		avalon : "../lib/avalon.min",
        boot : "../style/js/bootstrap.min",
		text : "../lib/text",
	},
	shim: {
		boot : {deps:['jquery']}
	}
});
require.config({
    paths:{
        modal_add:"../template/modal_add.html"
    },
});
//	调用module.js
require(['../control/viewModule/index.module','../control/init/common.init'], function(model,com) {});
/**
 *
 */
function requirefn() {}
requirefn.prototype = {
    /**
	 * 通用
     * @param event
     */
}
var $page = new requirefn();