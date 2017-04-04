/**
 * Created by Guanyunjie on 2017/4/2 0002.
 */
define(["avalon", "jquery","boot","../data/index.data","./common.module","text!modal_add"], function(avalon, $,boot, $data,$com,modal_add) {
	avalon.ready(function () {
		var vm_index = avalon.define({
			$id : "main",
			test1 : "aaaa",
			query : function () {
				$data.getDemo({id:'111'},function (result) {
					console.log(result);
                });
            },
            pop : function () {
                $("#modal_add").modal('show');
            }
		});



		avalon.scan($("#main")[0]);

		var vm_modal = avalon.define({
			$id : 'modal'
		});
        avalon.component('ms-modal-add',{
            template:modal_add,
            defaults:{
				submit:function () {
					var name = $("#modal_input_name").val().trim();
					var icon = $("#modal_input_icon").val().trim();
					if(!name || !icon){



						return;
					}
					var data = {
						id:$com.uuid(),
						name:name,
						icon:icon,
						createtime:$com.getCurrentTime()
					}
                    $("#modal_add").modal('hide');
					$data.insertDirectory(data,function (result) {
						console.log(result);
						if(result.status == "success"){

						}
                    });
                }
            }
        });

		avalon.scan($("#modal")[0]);

    });
	return {

	}
});