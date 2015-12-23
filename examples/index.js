var Vue = require('vue');
var VueLoading = require('../index.js');

var demo = new Vue({
    el: '#bodyCont',

    props: {
        isLoadingShow: Boolean,
        loadingSkin: String
    },

    data: {
        showLoading: function(skin) {
            this.isLoadingShow = true;

            if(skin) {
                this.loadingSkin = skin;
            }
        },

        hideLoading: function() {
            this.isLoadingShow = false;
        }
    }
});