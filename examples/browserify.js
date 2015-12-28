var Vue = require('vue');
var VueLoading = require('../src/index.vue');

var demo = new Vue({
    el: '#bodyCont',

    components: {
        'vue-loading': VueLoading
    },

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
