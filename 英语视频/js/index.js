/**
 * Created by yishan on 17/3/7.
 */


//conllectionView组件
Vue.component('collect',
    {
        template: '<div class="media col-xs-6 col-md-3 "> ' +
        '<div class="media-top">' +
        ' <a > ' +
        ' <div class="media-object collect-item clearfix" v-bind:data-id=cover  v-on:click="getIndex"></div>' +
        ' </a> ' +
        '</div> ' +
        '<div class="media-body">' +
        ' <span class="media-heading" v-bind:data-con=cover></span> ' +
        '</div>' +
        ' </div>',
        props: ['cover'],
        methods:{
            getIndex: function (e) {
                var ele = $(e.target);
                //1.获取当前标签的id
                var typeId = ele.data('id')
                //2.索引id
                var index = ele.attr('index');
                //3.获取视频地址
                app.collectionData[typeId].videoInfoList[index]

            }
        }
    }
),
    Vue.component('videoList',{
        template:'',
    })
/**
 * 全局vue
 * @type {Vue}
 */
var app = new Vue({
    el: '#app',
    data: {
        //轮播图
        slideImg: ['http://english.6ag.cn/uploads/video-info/f5135950a08d7a8bf1309194c28c5e39.jpg',
            'http://english.6ag.cn/uploads/video-info/feef4bc8174da15db4207262d38f980f.jpg',
            'http://english.6ag.cn/uploads/video-info/7e6792475241be93c33070a96cfd059a.jpg',
            'http://english.6ag.cn/uploads/video-info/b3f78038c10877d73e4a5809d0331b65.jpg'],

        collectionData: infoData,//所有视频分类
        videoDta:yinbiao,//视频列表
    },
    methods:{
        test: function () {
            alert(123);
        }
    }
    
});




lunbo();//轮播器图片设置
collection();//视频区内容填充

/**
 * 轮播图图片
 */
function lunbo() {

    var items = $('.item');
    var len = items.length;
    for (var i = 0; i < len; i++) {
        var item = $(items[i]);
        var img = app.slideImg[i]
        item.css('backgroundImage', 'url(' + img + ')');
        //隐藏img
    }
};



function collection () {
    "use strict";
    //1.取得图片div组
    var yinbiaoItem = $('div[data-id="0"]');
    var danciItem = $('div[data-id="1"]');
    var yufaItem = $('div[data-id="2"]');
    var kouyuItem = $('div[data-id="3"]');

    //2.内容组
    var yinbiaoCon = $('span[data-con="0"]');
    var danciCon = $('span[data-con="1"]');
    var yufaCon = $('span[data-con="2"]');
    var kouyuCon = $('span[data-con="3"]');
    //3.数据分组
    var data = app.collectionData;

    //音标
    creat(yinbiaoItem,yinbiaoCon,data,0);
    //单词
    creat(danciItem,danciCon,data,1);
    //语法
    creat(yufaItem,yufaCon,data,2);
    //口语
    creat(kouyuItem,kouyuCon,data,3);

    //绑定点击事件


}

//音标
function creat(items,cons,data,num){
    for (var i = 0; i < items.length; i++) {
        var item = $(items[i]);
        var cont = $(cons[i]);
        var img ;
        var id =item.data('id');

        if (id==num){
            img  = data[id].videoInfoList[i].cover;
            item.css('backgroundImage', 'url(' + img + ')');
            cont.text(data[id].videoInfoList[i].title);
            //给每个元素标记一个index
            item.attr('index',i);
        }
    }
}

//监听屏幕大小变化

