var Vue = require('vue');

Vue.component('vue-loading', {
    template: `
        <div class="js-toast-container" id="page-loader">
            <div class="com-toast">
                <div class="com-toast-text">
                    <span class="com-toast-icon com-icon" com-mode="toast-loading"></span> 加载中
                </div>
            </div>
        </div>
    `,
    props: {
        data: Array,
        columns: Array,
        filterKey: String
    },
    data: function () {
        var sortOrders = {};

        return {
            sortKey: '',
            sortOrders: sortOrders
        };
    },
    methods: {
        sortBy: function (key) {
            this.sortKey = key;
            this.sortOrders[key] = this.sortOrders[key] * -1;
        }
    }
});