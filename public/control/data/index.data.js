define(["../data/common.data", "jquery"], function(common, $) {
    /**
	 *
     * @param data
     * @param callback
     */
	function getDemo(data,callback) {
		common.request('getDemo',data,function (result) {
			callback(result);
        });
    }
	return {
        getDemo : getDemo
	}
});