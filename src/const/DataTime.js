class DateTime {
    // 构造方法
    constructor() {
      // 列举Week

      this.weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

      // 获取当前时间

      this.Date = new Date();

      // 获取当前年

      this.year = this.Date.getFullYear();

      // 获取当前月

      this.month = this.Date.getMonth() + 1;

      // 获取当前日

      this.date = this.Date.getDate();

      // 获取当前星期几

      this.day = this.Date.getDay();

      // 获取小时

      this.hour = this.Date.getHours();

      // 获取分钟

      this.minute = this.Date.getMinutes();

      // 获取秒

      this.second = this.Date.getSeconds();

      // 上个月
      this.previousMonth = parseInt(this.month) === 1 ? '12' : (this.month - 1).toString();

      // 自动补零

      this.month = (this.month < 10) ? '0' + this.month : this.month = this.month;

      this.date = (this.date < 10) ? '0' + this.date : this.date = this.date;

      this.minute = (this.minute < 10) ? '0' + this.minute : this.minute = this.minute;

      this.second = (this.second < 10) ? '0' + this.second : this.second = this.second;
     };

     /**

     * 获取当前日期

     * @returns {string}

    */

     getDate() {
      return this.year + '-' + this.month + '-' + this.date + ' ' + ' ';
     };

     /**

     * 获取当前时间

     * @returns {string}

    */

     getTime() {
      return this.hour + ':' + this.minute + ':' + this.second;
     };

     /**

     * 获取当前星期几

     * @returns {string}

    */
     getWeek() {
      return this.weekday[this.day];
     };

            /* -------------------如果是上周就传7，昨天就传1，明天就传-1，下周就传-7，依次类推，when是代表的天数。-----------------------  */
      getTimeFn(when) {
        let timeNow = new Date();
        let timeNeed = new Date(timeNow - when * 24 * 3600 * 1000);
        Date.prototype.changeTimeFormat = function () {
            return this.getFullYear() + '年' + (this.getMonth() + 1) + '月' + this.getDate() + '日 ' + this.getHours() + '点' + this.getMinutes() + '分' + this.getSeconds() + '秒';
        };
        return timeNeed = timeNeed.changeTimeFormat();
        }
    }
    export { DateTime };
