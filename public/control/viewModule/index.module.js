/**
 * Created by Guanyunjie on 2017/4/2 0002.
 */
define(["avalon", "jquery", "../data/index.data"], function(avalon, $, $data) {
	avalon.ready(function () {
		var vm_index = avalon.define({
			$id : "main",
			test1 : "aaaa",
			query : function () {
				$data.getDemo({id:'111'},function (result) {
					console.log(result);
                });
            }
		});

		avalon.scan($("#main")[0]);
    });



	return {

	}
});