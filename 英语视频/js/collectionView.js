/**
 * Created by yishan on 17/3/7.
 */
function collectionView() {
    "use strict";
    this.init();
}
collectionView.prototype = {
    init: function () {

    },
    create: function (data) {
        var template = '<div class="media">' +
            '<div class="media-top">' +
            '<a href="#">' +
            '<img class="media-object" v-bind:src="" alt="...">' +
            '</a>' +
            '</div>' +
            '<div class="media-body">' +
            '<h4 class="media-heading">Media heading</h4>' +
            '描述' +
            '</div>' +
            '</div>';
        return template;
    }
}