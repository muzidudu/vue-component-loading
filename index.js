var Vue = require('vue');

Vue.component('vue-loading', {
    template: `
        <div class="js-toast-container" id="page-loader" v-if="isShow">
            <div class="com-toast">
                <div class="com-toast-text">
                    <span class="com-toast-icon com-icon" com-mode="toast-loading"></span> {{ toastText }}
                </div>
            </div>
        </div>
    `,

    props: {
        isShow: Boolean,
        toastText: String
    },

    data: function () {
        var toastText = '加载中';
        var isShow = false;

        return {
            isShow: this.isShow || isShow,
            toastText: this.toastText || toastText
        };
    },

    methods: {
        show: function() {
            this.isShow = true;
        },

        hide: function() {
            this.isShow = false;
        },

        toggle: function() {
            this.isShow = !this.isShow;
        }
    },

    events: {
        'vue-loading-show': function() {
            this.show();
        },

        'vue-loading-hide': function() {
            this.hide();
        },

        'vue-loading-toggle': function() {
            this.toggle();
        }
    }
});