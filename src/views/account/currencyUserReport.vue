<template>
  <div>
    <Layout>
      <Content>
        <Card>
          <p slot="title">
            货币账户报表
          </p>
          <span class="user-time">
            <label>日期 :</label>
            <DatePicker type="datetimerange" format="yyyy-MM-dd" placeholder="请选择时间段" style="width: 200px"></DatePicker>
          </span>
          <Input search enter-button="搜索" v-model="searchText" @on-search="userDataList(searchText)" style="width:auto;float:right;top:10px;" placeholder="请输入账卡号..." />
          <span class="time-button">
            <Button type="success" @click="userDataList(today)">今日</Button>
            <Button type="success" @click="userDataList(yesterday)">昨日</Button>
            <Button type="success" @click="userDataList(week)">本周</Button>
            <Button type="success" @click="userDataList(previousWeek)">上周</Button>
            <Button type="success" @click="userDataList(month)">本月</Button>
            <Button type="success" @click="userDataList(previousMonth)">上月</Button>
          </span>
          <Button type="primary" size="large" @click="exportData(1)">
            <Icon type="ios-download-outline"></Icon> 导出数据
          </Button>
          <!-- 表格处理 通过插槽处理状态icon和操作按钮 -->
          <Table border :columns="columns8" :data="data7" size="small" ref="table">
            <template slot-scope="{row,index}" slot="operation">
              <Button type="primary" size="small" @click="show(index)">
                查看
              </Button>
              <Button type="primary" size="small" style="margin-left:10px" @click="edit(index)">
                编辑
              </Button>
              <!-- <Button type="error" size="small" @click="remove(index)" style="margin:0 0 0 5px">
                删除
              </Button> -->
            </template>
          </Table>
        </Card>
      </Content>
    </Layout>
  </div>
</template>
<script>
import { DateTime } from '@/const/DataTime.js';
let date = new DateTime();
export default {
        data () {
            return {
              today: date.getDate(),
              yesterday: date.getTimeFn(1),
              week: date.weekday,
              previousWeek: date.getTimeFn(7),
              month: date.month,
              previousMonth: date.previousMonth,
              searchText: '',
                columns8: [
                    {
                        'title': '序号',
                        'key': 'show',
                    },
                    {
                        'title': '人民币',
                        'key': 'weak',
                    },
                    {
                        'title': '出',
                        'key': 'month',
                    },
                    {
                        'title': '买入',
                        'key': 'month',
                    },
                    {
                        'title': '差额',
                        'key': 'month',
                    },
                ],
                data7: [
                    {
                        'name': 'Name1',
                        'fav': 0,
                        'show': 7302,
                        'month': 564,
                    },
                    {
                        'name': 'Name2',
                        'fav': 0,
                        'show': 4720,
                        'month': 564,
                    },
              ],
            };
        },
        methods: {
             exportData (type) {
                if (type === 1) {
                    this.$refs.table.exportCsv({
                        filename: '货币账户报表',
                    });
                }
             },
             userDataList(parameter) {
               let data = {
                 timeValue: parameter,
                 searchText: this.searchText,
                };
               console.log(data);
             },
              handleChange(daterange) {
                let startTime = daterange[0];
                let endTime = daterange[1];
                let timeDatas = ({ startTime: startTime, endTime: endTime });
                this.selectTime = [timeDatas];
                this.userDataList(this.selectTime);
              },
       },
};
</script>
<style scoped>
.input {
  width: 300px;
}
.ivu-row-flex {
    display: block;
    }
</style>
