/**
 * Created by Guanyunjie on 2017/4/2 0002.
 */
define(['avalon','jquery','text!header','text!footer'],function (avalon,$,header,footer) {
    var vm_header = avalon.define({
        $id : 'header',
        test1 : "aaaa"
    });
    /**
     * 定义组件
     */
    avalon.component('ms-header',{
        template:header,
        defaults:{
            testArr : [{name:'aaa',age:18},{name:'aaa',age:18},{name:'aaa',age:18},{name:'aaa',age:18},{name:'aaa',age:18}]
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