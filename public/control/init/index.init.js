/**
 * Created by Guanyunjie on 2017/4/2 0002.
 */
require.config({
	baseUrl : '',
	paths: { 
		jquery : "../lib/jquery-1.11.1.min",
		avalon : "../lib/avalon.min",
		text : "../lib/text",
		boot : "../bootstrap.min"
	}, 
	shim: { 
		jquery: { exports: "jquery" }, 
		avalon: { exports: "avalon" }
	}
});
//	调用module.js
require(['../control/viewModule/index.module','../control/init/common.init'], function(model,com) {});