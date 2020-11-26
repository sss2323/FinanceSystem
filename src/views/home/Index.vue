<style lang="scss">
.index-title{
  margin:10px 10px;
}
.time-button Button{
  margin:10px;
  }
  .index-countdata{
      color:#fff;
      .num{
        text-align:center;margin:11% 22px 0;float:right
      }
  }
.index-table{
 margin:25px 10px;
  .table-data span:nth-child(1){
   border-right:2px solid #f0f0f0;
   height: 15px;
   display: inline-block;
  }
}
.hello{
    width: 85%;
    height: 480px;
    position: absolute;
}
#chart1 {
  float: left;
  }
  #chart2 {
  float: right;
  }
  .chart-title{
    margin: 33px 222px;
    position: absolute;
    background: #00aaff;
    color: #fff;
    height: 28px;
    line-height: 28px;
    width: 244px;
    border-radius: 5px;
    text-align: center;
  }
    .chart-title2{
    top: 33px;
    right: 176px;
    background: #3b48f5;
    color: #fff;
    height: 28px;
    line-height: 28px;
    width: 244px;
    border-radius: 5px;
    text-align: center;
    position: absolute;
  }
</style>

<template>
  <div>
    <layout>
      <Content>
        <div class="index-title">
          <div>
            <h4>系统首页</h4>
          </div>
          <div>
            <span>
              <label>日期:</label>
              <DatePicker type="daterange" format="yyyy-MM-dd" split-panels v-model.trim="selectTime" @on-change="userDataList(selectTime=$event)" placeholder="请选择日期" style="width: 200px"></DatePicker>
            </span>
            <span class="time-button">
              <Button type="success" @click="userDataList(today)">今日</Button>
              <Button type="success" @click="userDataList(yesterday)">昨日</Button>
              <Button type="success" @click="userDataList(week)">本周</Button>
              <Button type="success" @click="userDataList(previousWeek)">上周</Button>
              <Button type="success" @click="userDataList(month)">本月</Button>
              <Button type="success" @click="userDataList(previousMonth)">上月</Button>
            </span>
            <!-- <Input search enter-button="搜索" style="width:auto;float:right;top:10px;" placeholder="请输入关键字" /> -->
          </div>
        </div>
      </Content>
      <div class="index-countdata">
        <Row type="flex" justify="space-around" align="middle" class="code-row-bg">
          <Col span="4" style="height:115px;border-radius: 8px;background: linear-gradient(180deg,#009e70,#00beb0);">
          <div class="num">
            <h2>{{addUser}}</h2><h2>新增客户</h2>
          </div>
          </Col>
          <Col span="4" style="height:115px;border-radius: 8px;background: linear-gradient(180deg,#ff9d00,#ffbd00);">
          <div class="num">
            <h2>{{todayTransactionCount}}</h2><h2>当日交易人数</h2>
          </div>
          </Col>
          <Col span="4" style="height:115px;border-radius: 8px;background: linear-gradient(180deg,#00c8ff,#00a7ff);">
          <div class="num">
            <h2>{{todayBuyMoney}}</h2><h2>当日买入金额</h2>
          </div>
          </Col>
          <Col span="4" style="height:115px;border-radius: 8px;background: linear-gradient(180deg,#ff3708,#ff5749);">
          <div class="num">
            <h2>{{todayOutMoney}}</h2><h2>当日出金额</h2>
          </div></Col>
          <Col span="4" style="height:115px;border-radius: 8px;background: linear-gradient(180deg,#006a00,#008a00);">
          <div class="num">
            <h2>{{todayBalance}}</h2><h2>当日差额</h2>
          </div></Col>
        </Row>
      </div>
      <div class="index-table">
        <Table :columns="columns1" :data="data1">
          <template slot-scope="{ row }" slot="FStatus">
            <div v-html="row.dollar"></div>
            <div v-html="row.slotsale"></div>
          </template>
        </Table>
        <div>
          <div class="hello">
            <h4 class="chart-title">
              交易人数图表（图表数据当日统计有延时）
            </h4>
            <div id="chart1" style="width: 600px;height:480px;margin: 0 44px;"></div>
          </div>
          <div class="hello">
            <h4 class="chart-title2">
              交易量图片（图表数据当日统计有延时）
            </h4>
            <div id="chart2" style="width: 600px;height:480px;"></div>
          </div>
        </div>
      </div>
    </layout>
  </div>
</template>
<script>
import { DateTime } from '@/const/DataTime.js';
let date = new DateTime();
export default {
  data() {
    return {
      selectTime: '',
      today: date.getDate(),
      yesterday: date.getTimeFn(1),
      week: date.weekday,
      previousWeek: date.getTimeFn(7),
      month: date.month,
      previousMonth: date.previousMonth,
      addUser: 0,
      todayTransactionCount: 0,
      todayBuyMoney: 0,
      todayOutMoney: 0,
      todayBalance: 0,
      columns1: [
        {
          title: '',
          key: 'id',
        },
        {
          title: '人民币',
          key: 'rmb',
          slot: 'FStatus',
        },
        {
          title: '美元',
          key: 'dollar',
          slot: 'FStatus',
        },
        {
          title: '港元',
          key: 'hkd',
          slot: 'FStatus',
        },
        {
          title: '澳元',
          key: 'AusDollar',
          slot: 'FStatus',
        },
        {
          title: '台币',
          key: 'twd',
          slot: 'FStatus',
        },
      ],
      data1: [
        {
          id: '',
          rmb: 18,
          dollar: '卖出：-<span>New York No &nbsp;&nbsp;&nbsp;&nbsp;</span> ',
          slotsale: '买入：<span>New York No </span> ',
          hkd: '2016-10-03',
          AusDollar: '8888869',
          twd: '2239968',
        },
        {
          id: '总合计',
          rmb: 18,
          dollar: '差额：849616578',
          hkd: '2016-10-03',
          AusDollar: '8888869',
          twd: '2239968',
        },
      ],
    };
  },
  mounted() {
    this.$chart.line1('chart1');
    this.$chart.line1('chart2');
  },
  methods: {
    userDataList(parameter) {
      let data = { timeValue: parameter,
      // searchText: this.searchText,
      };
      console.log(data);
    },
  },
};
</script>
