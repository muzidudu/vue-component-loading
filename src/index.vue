<style lang="css">
    .js-toast-container {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1000;
        background: rgba(0, 0, 0, .3);
        -webkit-animation: fadein 0.7s ease alternate;
        -moz-animation: fadein 0.7s ease alternate;
        animation: fadein 0.7s ease alternate;
    }

    .com-toast {
        position: fixed;
        z-index: 100;
        top: 45%;
        width: 100%;
        text-align: center;
        font-size: 0.32rem;
        font-family: sans-serif;
    }

    .com-toast .com-toast-text {
        display: inline-block;
        margin: -24px auto auto;
        padding: 0.25rem 0.48rem;
        min-width: 50px;
        -webkit-background-clip: padding-box;
        color: #fff;
        background-color: rgba(0,0,0,.8);
        border-radius: 5px;
    }

    .com-toast .com-toast-text .iconfont {
        font-size: 16px;
    }

    .com-toast .com-toast-icon.com-icon {
        display: block;
        margin: 0.05rem auto 0.23rem;
    }

    .com-toast .com-toast-icon.com-icon.com-simple-toast {
        display: none;
    }

    .com-icon[com-mode*=toast-] {
        display: inline-block;
        height: 0.7rem;
        width: 0.7rem;
    }

    .com-icon[com-mode*=toast-]:before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAABGCAYAAAC5bsoXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NkZDNUJFRkZBQzExMUUzQUUyOTlBRkYzOTk3QTIxOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NkZDNUJGMEZBQzExMUUzQUUyOTlBRkYzOTk3QTIxOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk2RkM1QkVERkFDMTExRTNBRTI5OUFGRjM5OTdBMjE5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk2RkM1QkVFRkFDMTExRTNBRTI5OUFGRjM5OTdBMjE5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+n09dKgAAEEdJREFUeNrsXQmQ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) no-repeat;
        -webkit-background-size: 2.1rem auto;
    }

    .com-icon[com-mode~=toast-success]:before {
        background-position: 0 0;
    }

    .com-icon[com-mode~=toast-error]:before,.com-icon[com-mode~=toast-fail]:before {
        background-position: -0.7rem 0;
    }

    .com-icon[com-mode~=toast-loading] {
        -webkit-animation: rotate linear 2.6s infinite;
        animation: rotate linear 2.6s infinite;
    }

    .com-icon[com-mode~=toast-loading]:before {
        background-position: -1.43rem 0;
    }

    @-webkit-keyframes rotate {
        0% {
            -webkit-transform: rotate(0);
            transform: rotate(0);
        }

        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    .com-toast-mask {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 998;
    }

    @-webkit-keyframes fadein {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @-moz-keyframes fadein {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes fadein {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @-webkit-keyframes meituan-loading-anim {
        0% {
            background-position: 0;
        }
        100% {
            background-position: -5.04rem;
        }
    }

    @-moz-keyframes meituan-loading-anim {
        0% {
            background-position: 0;
        }
        100% {
            background-position: -5.04rem;
        }
    }

    @keyframes meituan-loading-anim {
        0% {
            background-position: 0;
        }
        100% {
            background-position: -5.04rem;
        }
    }

    .meituan-loading {
        display: block;
        width: 1.2rem;
        height: 1.7rem;
        margin: 0 auto;
        background-image: url("data:image/png;base64,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");
        background-repeat: no-repeat;
        background-size: cover;
        -webkit-background-size: cover;
        -webkit-animation-name: 'meituan-loading-anim';
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-timing-function: steps(4);
        -webkit-animation-duration: 280ms;
        -moz-animation-name: 'meituan-loading-anim';
        -moz-animation-iteration-count: infinite;
        -moz-animation-timing-function: steps(4);
        -moz-animation-duration: 280ms;
        animation-name: 'meituan-loading-anim';
        animation-iteration-count: infinite;
        animation-timing-function: steps(4);
        animation-duration: 280ms;
    }
</style>

<template>
    <div class="js-toast-container" id="page-loader" v-if="isShow">
        <div class="com-toast">
            <div class="meituan-loading" v-if="skin === 'meituan'"></div>
            <div class="com-toast-text" v-else>
                <span class="com-toast-icon com-icon" com-mode="toast-loading"></span> {{ toastText }}
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        props: {
            isShow: {
                type: Boolean,
                default: false
            },
            toastText: {
                type: String,
                default: '加载中'
            },
            skin: String
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
    };
</script>
