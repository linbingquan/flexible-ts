"use strict";
/**
 * 屏幕适配
 *
 * @author 林炳权
 * @version 1.0.0
 *
 * @class flexible
 */
var flexible = /** @class */ (function () {
    /**
     * Creates an instance of flexible.
     * @param {number} [baseFontSize=100] 100 为了方便计算, 把屏幕平均分成 100 份
     * @param {number} [baseWidth=1080] 移动端设计稿宽 如果你的设计稿宽为 1080px 设置为 1080
     * @memberof flexible
     */
    function flexible(baseFontSize, baseWidth) {
        var _this = this;
        if (baseFontSize === void 0) { baseFontSize = 100; }
        if (baseWidth === void 0) { baseWidth = 1080; }
        this.resize = function () {
            var clientWidth = document.documentElement.clientWidth || window.innerWidth;
            var rem = _this.baseFontSize;
            if (clientWidth != _this.baseWidth) {
                rem = Math.floor((clientWidth / _this.baseWidth) * _this.baseFontSize);
            }
            var htmlDom = document.querySelector("html");
            htmlDom.style.fontSize = rem + "px";
        };
        this.baseFontSize = baseFontSize;
        this.baseWidth = baseWidth;
    }
    flexible.prototype.init = function () {
        var resizeEvt = "orientationchange" in window ? "orientationchange" : "resize";
        window.addEventListener(resizeEvt, this.resize);
        this.resize();
    };
    return flexible;
}());
