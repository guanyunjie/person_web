/**
 * Created by Guanyunjie on 2017/4/2 0002.
 */
define(['avalon','jquery','text!header','text!footer','text!navLeft','../data/common.data'],function (avalon,$,header,footer,nav,$data) {
    avalon.ready(function () {
        var vm_header = avalon.define({
            $id : 'header',
            directory:[]
        });
        /**
         * 定义组件
         */
        avalon.component('ms-header',{
            template:header,
            defaults:{

            }
        });
        avalon.component('ms-nav',{
            template:nav,
            defaults:{
                on:'nav_on',
                edit_on:"edit_on",
                delete_on:'delete_on',
                onInit:function(){
                    $data.queryDirectory({},function (result) {
                        console.log(result);
                        vm_header.directory = result.result;
                    });
                },
                check : function (e,index) {
                    var $childs = $(".all-nav").children();
                    if($childs.eq(index).hasClass('nav_on')){
                        $childs.eq(index).removeClass('nav_on');
                        $("#nav-son").hide();
                    }
                    else{
                        $childs.removeClass('nav_on');
                        $childs.eq(index).addClass('nav_on');
                        $("#nav-son").show();
                    }
                },
                choose:function () {
                    $("#nav-son").hide();
                    $(".all-nav").children().removeClass('nav_on');
                },
                add:function (e) {
                    $("#modal_add").modal('show');
                }
            }
        });
        avalon.scan($("#header")[0]);

        var vm_footer = avalon.define({
            $id : 'footer'
        });
        avalon.component('ms-footer',{
            template:footer,
            defaults:{
                testArr : [{name:'aaa',age:18},{name:'aaa',age:18},{name:'aaa',age:18},{name:'aaa',age:18},{name:'aaa',age:18}],
                testClick : "1524",
                click:function () {
                    this.testClick = Math.random();
                }
            }
        });
        avalon.scan($("#footer")[0]);
    });


    /**
     *
     * @returns {string}
     */
    function uuid(){
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
        s[8] = s[13] = s[18] = s[23] = "-";

        var uuid = s.join("");
        return uuid.replace(/-/g,'');
    }
    function getCurrentTime() {
        Date.prototype.Format = function (fmt) {
            var o = {
                "y+": this.getFullYear(),   // 年
                "M+": this.getMonth() + 1, //月份
                "d+": this.getDate(), //日
                "h+": this.getHours(), //小时
                "m+": this.getMinutes(), //分
                "s+": this.getSeconds(), //秒
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度
                "S": this.getMilliseconds() //毫秒
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        }
        return new Date().Format("yyyy-MM-dd hh:mm:ss");
    }

    return {
        getCurrentTime:getCurrentTime,
        uuid:uuid
    }
});