/**
 * 屏幕适配
 * 
 * @author 林炳权
 * @version 1.0.0
 *
 * @class flexible
 */
class flexible {
  private baseFontSize: number;
  private baseWidth: number;
  /**
   * Creates an instance of flexible.
   * @param {number} [baseFontSize=100] 100 为了方便计算, 把屏幕平均分成 100 份
   * @param {number} [baseWidth=1080] 移动端设计稿宽 如果你的设计稿宽为 1080px 设置为 1080
   * @memberof flexible
   */
  constructor(baseFontSize: number = 100, baseWidth: number = 1080) {
    this.baseFontSize = baseFontSize;
    this.baseWidth = baseWidth;
  }

  resize = () => {
    const clientWidth =
      document.documentElement.clientWidth || window.innerWidth;
    var rem = this.baseFontSize;
    if (clientWidth != this.baseWidth) {
      rem = Math.floor((clientWidth / this.baseWidth) * this.baseFontSize);
    }
    const htmlDom = document.querySelector("html") as HTMLHtmlElement;
    htmlDom.style.fontSize = rem + "px";
  }

  init() {
    var resizeEvt =
      "orientationchange" in window ? "orientationchange" : "resize";
    window.addEventListener(resizeEvt, this.resize);
    this.resize();
  }
}
