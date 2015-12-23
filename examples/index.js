var Vue = require('vue');
var VueLoading = require('../index.js');

var demo = new Vue({
    el: '#bodyCont',

    props: {
        isLoadingShow: Boolean
    },

    data: {
        showLoading: function() {
            this.isLoadingShow = true;
        },

        hideLoading: function() {
            this.isLoadingShow = false;
        }
    }
});