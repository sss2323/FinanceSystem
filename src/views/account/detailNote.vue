<template>
  <div>
    <Layout>
      <Content>
        <Card>
          <p slot="title">
            交易明细报表
          </p>
          <span class="user-time">
            <label>日期 :</label>
            <!-- <DatePicker type="daterange" v-model="selectTime" @on-change="handleChange" split-panels placeholder="请选择时间段" style="width: 200px"></DatePicker> -->
            <DatePicker type="datetimerange" v-model="selectTime" format="yyyy-MM-dd" @on-ok="userDataList(selectTime)" placeholder="请选择时间段" style="width: 200px"></DatePicker>
          </span>
          <span style="margin:0 0 0 20px">
            <label for="">汇率:</label>
            <InputNumber v-model="exchangeRate" :min="1" :step="1.2"></InputNumber>
          </span>
          <span style="margin:0 0 0 20px">
            <label for="">金额:</label>
            <InputNumber v-model="amount"></InputNumber>
          </span>
          <span style="margin:0 0 0 20px">
            <label for="">币种:</label>
            <Select v-model="currency" style="width:100px">
              <Option v-for="item in currencyList" :value="item.value" :key="item.value">{{item.label}}</Option>
            </Select>
          </span>
          <!-- <span style="margin:0 0 0 20px">
            <label for="">货币:</label>
            <Input v-model="currency" style="width:100px" />
          </span> -->
          <span style="margin:0 0 0 20px">
            <label for="">状态:</label>
            <Select v-model="statusValue" style="width:100px">
              <Option v-for="item in statusList" :value="item.value" :key="item.value">{{item.label}}</Option>
            </Select>
          </span>
          <span style="margin:0 0 0 20px">
            <label for="">账变类型:</label>
            <Select v-model="typeValue" style="width:100px">
              <Option v-for="item in typeList" :value="item.value" :key="item.value">{{item.label}}</Option>
            </Select>
          </span><br>
          <Input search enter-button="搜索" v-model="searchText" @on-search="userDataList(searchText)" style="width:auto;float:right;top:10px;" placeholder="请输入姓名" />
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
          <Table :columns="columns8" :data="data7" size="small" ref="table">
            <!-- <template slot-scope="{ row }" slot="name"><strong> {{row.name}}  </strong>
            </template> -->
            <!-- <Table border :columns='columns' :data='data' class='dataTable mt-3'> -->
            <!-- <template slot-scope='{ row }' slot='FStatus'>
              <span v-if='row.FStatus === 1'>
                <Icon type='md-checkmark-circle' size='24' class='text-success' />
                <strong class='iconNormal'>已启用</strong>
              </span>
              <span v-else>
                <Icon type='md-close-circle' size='24' class='text-error' />
                <strong class='iconClose'>已关闭</strong>
              </span>
            </template> -->
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
              selectTime: '',
              today: date.getDate(),
              yesterday: date.getTimeFn(1),
              week: date.weekday,
              previousWeek: date.getTimeFn(7),
              month: date.month,
              previousMonth: date.previousMonth,
              searchText: '',
              exchangeRate: 0,
              amount: 0,
              currency: 0,
              typeValue: 0,
              statusValue: 0,
              currencyList: [
                    {
                        value: 0,
                        label: '全部',
                    },
                    {
                        value: 1,
                        label: '人民币',
                    },
                    {
                        value: 2,
                        label: '美元',
                    },
                    {
                        value: 3,
                        label: '港币',
                    },
                     {
                        value: 4,
                        label: '澳门',
                    },
                     {
                        value: 5,
                        label: '台币',
                    },
                    ],
                 statusList: [
                    {
                        value: 0,
                        label: '未完成',
                    },
                    {
                        value: 1,
                        label: '完成',
                    },
                    {
                        value: 2,
                        label: '取消',
                    },
                    ],
                  typeList: [
                    {
                        value: 0,
                        label: '出',
                    },
                    {
                        value: 1,
                        label: '买入',
                    },
                    {
                        value: 2,
                        label: '客户出',
                    },
                      {
                        value: 3,
                        label: '客户买入',
                    },
                    ],
              columns8: [
                    {
                        'title': '序号',
                        'key': 'show',
                        'fixed': 'left',
                        'width': 100,
                    },
                    {
                        'title': '姓名',
                        'key': 'name',
                        'width': 150,
                        'sortable': true,
                        filters: [
                            {
                                label: 'Greater than 4000',
                                value: 1,
                            },
                            {
                                label: 'Less than 4000',
                                value: 2,
                            },
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.show > 4000;
                            } else if (value === 2) {
                                return row.show < 4000;
                            }
                        },
                    },
                    {
                        'title': '汇率',
                        'key': 'weak',
                        'width': 150,
                        'sortable': true,
                    },
                    {
                        'title': '金额',
                        'key': 'signin',
                        'width': 150,
                        'sortable': true,
                    },
                    {
                        'title': '币种',
                        'key': 'click',
                        'width': 150,
                        'sortable': true,
                    },
                    {
                        'title': '最终金额',
                        'key': 'active',
                        'width': 150,
                        'sortable': true,
                        'color': '#fff',
                    },
                    {
                        'title': '未交易金额',
                        'key': 'day7',
                        'width': 150,
                        'sortable': true,
                    },
                    {
                        'title': '货币',
                        'key': 'day30',
                        'width': 150,
                        'sortable': true,
                    },
                    {
                        'title': '币种',
                        'key': 'tomorrow',
                        'width': 150,
                        'sortable': true,
                    },
                    {
                        'title': '结算汇率',
                        'key': 'day',
                        'width': 150,
                        'sortable': true,
                    },
                    {
                        'title': '结算币种',
                        'key': 'week',
                        'width': 150,
                        'sortable': true,
                    },
                    {
                        'title': '结算货币',
                        'key': 'month',
                        'width': 150,
                        'sortable': true,
                    },
                    {
                        'title': '状态',
                        'key': 'month',
                        'width': 150,
                        'sortable': true,
                    },
                    {
                        'title': '账变类型',
                        'key': 'month',
                        'width': 150,
                        'sortable': true,
                    },
                    {
                        'title': '银行卡卡号',
                        'key': 'month',
                        'width': 150,
                        'sortable': true,
                    },
                       {
                        'title': '所属银行',
                        'key': 'month',
                        'width': 150,
                        'sortable': true,
                    },
                    {
                        'title': '操作时间',
                        'key': 'month',
                        'width': 150,
                        'sortable': true,
                    },
                    {
                        'title': '操作人',
                        'key': 'month',
                        'width': 150,
                        'sortable': true,
                    },
                      {
                        'title': '备注',
                        'key': 'month',
                        'width': 150,
                        'sortable': true,
                    },
                      {
                        'title': '差异',
                        'key': 'month',
                        'width': 100,
                        'sortable': true,
                         fixed: 'right',
                    },
                ],
                data7: [
                    {
                        'name': 'Name1',
                        'fav': 0,
                        'show': 7302,
                        'weak': 5627,
                        'signin': 1563,
                        'click': 4254,
                        'active': 1438,
                        'day7': 274,
                        'day30': 285,
                        'tomorrow': 1727,
                        'day': 558,
                        'week': 4440,
                        'month': 5610,
                        'switchRmb': 1,
                    },
                ],
            };
        },
        methods: {
             exportData (type) {
                if (type === 1) {
                    this.$refs.table.exportCsv({
                        filename: '交易明细报表',
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
.ivu-table-header tr th:nth-child(6){
    color: red;
}
</style>
