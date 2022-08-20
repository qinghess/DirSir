// index.js
import duanData from '../../utils/an';

Page({
  data: {
    duanData,


    pingData: [{
      "time": "3599000",
    }],
  },
  onLoad() {
   

    this.setData({
      listData: this.data.pingData
    })
    this.setCountDown();
  },
 


   // 倒计时
   setCountDown: function () {
    let time = 1000;
  let { listData } = this.data;
    let list = listData.map((v, i) => {
      if (v.time <= 0) {
        v.time = 0;
      }
      let formatTime = this.getFormat(v.time);
      v.time -= time;
      v.countDown = `${formatTime.mm}:${formatTime.ss}`;
      return v;
    })
    this.setData({
      listData: list
    });
    setTimeout(this.setCountDown, time);
  },

   // 格式化时间
  getFormat: function (msec) {
    let ss = parseInt(msec / 1000);
    let mm = 0;
    if (ss > 60) {
      mm = parseInt(ss / 60);
      ss = parseInt(ss % 60);
      if (mm > 60) {
        mm = parseInt(mm % 60);
      }
    }
    ss = ss > 9 ? ss : `0${ss}`;
    mm = mm > 9 ? mm : `0${mm}`;
    return {
      ss,
      mm,
    };
  }
})
