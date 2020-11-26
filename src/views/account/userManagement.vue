<template>
  <div>
    <Layout>
      <Content>
        <Card>
          <p slot="title">
            用户管理
          </p>
          <div class="mt-2">
            <Row type="flex" justify="space-between">
              <i-Col>
                <Button style="float:left;margin: 11px 68px 0 0;" type="warning" @click="paramAddFn">
                  新增用户
                </Button>
                <Modal v-model="paramAdd" class-name="vertical-center-modal" width="653px">
                  <p slot="header">
                    {{headerText}}
                  </p>
                  <Form :label-width="80" ref="formInline" :model="formInline" :rules="ruleInline">
                    <FormItem label="id" prop="id" style="display:none;">
                      <Input class="input" v-model="formInline.id" />
                    </FormItem>
                    <FormItem label="姓名" prop="name">
                      <Input class="input" v-model="formInline.name" />
                    </FormItem>
                    <FormItem label="注册时间" prop="registerTime">
                      <Input class="input" v-model="formInline.registerTime" disabled />
                    </FormItem>
                    <FormItem label="手机号" prop="phone">
                      <Input class="input" v-model="formInline.phone" />
                    </FormItem>
                    <FormItem label="QQ" prop="qq">
                      <Input class="input" v-model="formInline.qq" />
                    </FormItem>
                    <FormItem label="邮箱" prop="email">
                      <Input class="input" v-model="formInline.email" />
                    </FormItem>
                    <FormItem label="级别" prop="level">
                      <Input class="input" v-model="formInline.level" />
                    </FormItem>
                    <FormItem label="备注" prop="remark">
                      <Input class="input" v-model="formInline.remark" />
                    </FormItem>
                    <FormItem label="人民币" style="float:left;width: 115px;">
                      <i-switch v-model="formInline.switchRmb" size="large">
                        <span slot="open">On</span>
                        <span slot="close">Off</span>
                      </i-switch>
                    </FormItem>
                    <FormItem label="美元" style="float:left;width: 115px;">
                      <i-switch v-model="formInline.switchMy" size="large">
                        <span slot="open">On</span>
                        <span slot="close">Off</span>
                      </i-switch>
                    </FormItem>
                    <FormItem label="港币" style="float:left;width: 115px;">
                      <i-switch v-model="formInline.switchGb" size="large">
                        <span slot="open">On</span>
                        <span slot="close">Off</span>
                      </i-switch>
                    </FormItem>
                    <FormItem label="台币" style="float:left;width: 115px;">
                      <i-switch v-model="formInline.switchTb" size="large">
                        <span slot="open">On</span>
                        <span slot="close">Off</span>
                      </i-switch>
                    </FormItem>
                    <FormItem label="澳门" style="float:left;width: 115px;">
                      <i-switch v-model="formInline.switchAm" size="large">
                        <span slot="open">On</span>
                        <span slot="close">Off</span>
                      </i-switch>
                    </FormItem>
                    <FormItem label="新币" style="float:left;width: 115px;">
                      <i-switch v-model="formInline.switchXb" size="large">
                        <span slot="open">On</span>
                        <span slot="close">Off</span>
                      </i-switch>
                    </FormItem>
                    <FormItem label="澳元" style="float:left;width: 115px;">
                      <i-switch v-model="formInline.switchAy" size="large">
                        <span slot="open">On</span>
                        <span slot="close">Off</span>
                      </i-switch>
                    </FormItem>
                    <FormItem label="日元" style="float:left;width: 115px;">
                      <i-switch v-model="formInline.switchRy" size="large">
                        <span slot="open">On</span>
                        <span slot="close">Off</span>
                      </i-switch>
                    </FormItem>
                    <FormItem label="披索" style="float:left;width:136px;">
                      <i-switch v-model="formInline.switchPs" size="large">
                        <span slot="open">On</span>
                        <span slot="close">Off</span>
                      </i-switch>
                    </FormItem>
                    <FormItem class="text-error" style="margin-top: 136px;">
                      <p>注：后台中已添加的用户才能在交易账单中新增成功</p>
                      <!-- <p>注：状态：默认启用，禁用前台不显示</p>
                      <p>注：排序：数字越大</p> -->
                    </FormItem>
                  </Form>
                  <div slot="footer">
                    <Button type="success" size="large" @click="handleSubmit('formInline')">
                      确定
                    </Button>
                    <Button type="error" size="large" @click="paramAdd=false">
                      取消
                    </Button>
                  </div>
                </Modal>
              </i-Col>
            </Row>
          </div>
          <span class="user-time">
            <label>日期 :</label>
            <!-- <DatePicker type="daterange" v-model="selectTime" @on-change="handleChange" split-panels placeholder="请选择时间段" style="width: 200px"></DatePicker> -->
            <DatePicker type="daterange" format="yyyy-MM-dd" split-panels v-model.trim="selectTime" @on-change="userDataList(selectTime=$event)" placeholder="请选择日期" style="width: 200px"></DatePicker>
          </span>
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
console.log(date.getDate());// 今天
console.log(date.year + '-' + date.month + '-' + (date.date - 1).toString());// 昨天
console.log(date.weekday);// 本周
console.log(date.month);// 本月
console.log(parseInt(date.month) === 1 ? '12' : (date.month - 1).toString());// 上月
export default {
        data () {
            return {
              paramAdd: false,
              headerText: '新增用户',
              userData: { },
              selectTime: '',
              today: date.getDate(),
              yesterday: date.getTimeFn(1),
              week: date.weekday,
              previousWeek: date.getTimeFn(7),
              month: date.month,
              previousMonth: date.previousMonth,
              searchText: '',
              formInline: {
                    id: '',
                    name: '',
                    registerTime: '',
                    phone: '',
                    qq: '',
                    email: '',
                    level: '',
                    remark: '',
                    switchRmb: '',
                },
                ruleInline: {
                    name: [
                        { required: true, message: '请输入姓名.', trigger: 'blur' },
                    ],
                    phone: [
                        { required: true, message: '请输入手机号码.', trigger: 'blur' },
                        { type: 'string', min: 11, message: '手机号码不能小于11位.', trigger: 'blur' },
                    ],
                },
                columns8: [
                    {
                        'title': '姓名',
                        'key': 'name',
                        'fixed': 'left',
                        'width': 100,
                    },
                    {
                        'title': '序号',
                        'key': 'show',
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
                        'title': '人民币',
                        'key': 'weak',
                        'width': 150,
                        'sortable': true,
                    },
                    {
                        'title': '美元',
                        'key': 'signin',
                        'width': 150,
                        'sortable': true,
                    },
                    {
                        'title': '港币',
                        'key': 'click',
                        'width': 150,
                        'sortable': true,
                    },
                    {
                        'title': '台币',
                        'key': 'active',
                        'width': 150,
                        'sortable': true,
                    },
                    {
                        'title': '新币',
                        'key': 'day7',
                        'width': 150,
                        'sortable': true,
                    },
                    {
                        'title': '澳元',
                        'key': 'day30',
                        'width': 150,
                        'sortable': true,
                    },
                    {
                        'title': '日元',
                        'key': 'tomorrow',
                        'width': 150,
                        'sortable': true,
                    },
                    {
                        'title': '披索',
                        'key': 'day',
                        'width': 150,
                        'sortable': true,
                    },
                    {
                        'title': '注册日期',
                        'key': 'week',
                        'width': 150,
                        'sortable': true,
                    },
                    {
                        'title': '手机号',
                        'key': 'month',
                        'width': 150,
                        'sortable': true,
                    },
                    {
                        'title': 'QQ',
                        'key': 'month',
                        'width': 150,
                        'sortable': true,
                    },
                    {
                        'title': '邮箱',
                        'key': 'month',
                        'width': 150,
                        'sortable': true,
                    },
                    {
                        'title': '级别',
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
                        'title': '操作',
                        // 'key': 'month',
                        slot: 'operation',
                        'width': 130,
                        fixed: 'right',
                        'sortable': true,
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
                    {
                        'name': 'Name2',
                        'fav': 0,
                        'show': 4720,
                        'weak': 4086,
                        'signin': 3792,
                        'click': 8690,
                        'active': 8470,
                        'day7': 8172,
                        'day30': 5197,
                        'tomorrow': 1684,
                        'day': 2593,
                        'week': 2507,
                        'month': 1537,
                    },
                    {
                        'name': 'Name3',
                        'fav': 0,
                        'show': 7181,
                        'weak': 8007,
                        'signin': 8477,
                        'click': 1879,
                        'active': 16,
                        'day7': 2249,
                        'day30': 3450,
                        'tomorrow': 377,
                        'day': 1561,
                        'week': 3219,
                        'month': 1588,
                    },
                    {
                        'name': 'Name4',
                        'fav': 0,
                        'show': 9911,
                        'weak': 8976,
                        'signin': 8807,
                        'click': 8050,
                        'active': 7668,
                        'day7': 1547,
                        'day30': 2357,
                        'tomorrow': 7278,
                        'day': 5309,
                        'week': 1655,
                        'month': 9043,
                    },
                    {
                        'name': 'Name5',
                        'fav': 0,
                        'show': 934,
                        'weak': 1394,
                        'signin': 6463,
                        'click': 5278,
                        'active': 9256,
                        'day7': 209,
                        'day30': 3563,
                        'tomorrow': 8285,
                        'day': 1230,
                        'week': 4840,
                        'month': 9908,
                    },
                    {
                        'name': 'Name6',
                        'fav': 0,
                        'show': 6856,
                        'weak': 1608,
                        'signin': 457,
                        'click': 4949,
                        'active': 2909,
                        'day7': 4525,
                        'day30': 6171,
                        'tomorrow': 1920,
                        'day': 1966,
                        'week': 904,
                        'month': 6851,
                    },
                    {
                        'name': 'Name7',
                        'fav': 0,
                        'show': 5107,
                        'weak': 6407,
                        'signin': 4166,
                        'click': 7970,
                        'active': 1002,
                        'day7': 8701,
                        'day30': 9040,
                        'tomorrow': 7632,
                        'day': 4061,
                        'week': 4359,
                        'month': 3676,
                    },
                    {
                        'name': 'Name8',
                        'fav': 0,
                        'show': 862,
                        'weak': 6520,
                        'signin': 6696,
                        'click': 3209,
                        'active': 6801,
                        'day7': 6364,
                        'day30': 6850,
                        'tomorrow': 9408,
                        'day': 2481,
                        'week': 1479,
                        'month': 2346,
                    },
                    {
                        'name': 'Name9',
                        'fav': 0,
                        'show': 567,
                        'weak': 5859,
                        'signin': 128,
                        'click': 6593,
                        'active': 1971,
                        'day7': 7596,
                        'day30': 3546,
                        'tomorrow': 6641,
                        'day': 1611,
                        'week': 5534,
                        'month': 3190,
                    },
                    {
                        'name': 'Name10',
                        'fav': 0,
                        'show': 3651,
                        'weak': 1819,
                        'signin': 4595,
                        'click': 7499,
                        'active': 7405,
                        'day7': 8710,
                        'day30': 5518,
                        'tomorrow': 428,
                        'day': 9768,
                        'week': 2864,
                        'month': 5811,
                    },
                ],
            };
        },
        methods: {
          paramAddFn() {
            this.paramAdd = true;
            this.headerText = '新增用户';
            const _this = this.formInline;
            _this.id = '';
            _this.name = '';
            _this.registerTime = '';
            _this.phone = '';
            _this.qq = '';
            _this.email = '';
            _this.level = '';
            _this.remark = '';
          },
          show (index) {
                this.$Modal.info({
                    title: '用户详情查看',
                    content: `姓名：${this.data7[index].name}<br>
                    注册时间：${this.data7[index].fav}<br>
                    手机号：${this.data7[index].show}<br>
                    QQ：${this.data7[index].show}<br>
                    邮箱：${this.data7[index].show}<br>
                    级别:${this.data7[index].show}<br>
                    备注:${this.data7[index].show}`,
                });
            },
            remove (index) {
              const id = this.data7[index].show;
              console.log(id);
              this.data7.splice(index, 1);
            },
            edit (index) {
                this.headerText = '编辑用户';
                this.paramAdd = true;
                const _this = this.formInline;
                const data = this.data7[index];
                _this.id = data.show;
                _this.name = data.name;
                _this.registerTime = data.fav;
                _this.phone = data.show;
                _this.qq = data.name;
                _this.email = data.name;
                _this.level = data.name;
                _this.remark = data.name;
               _this.switchRmb = data.switchRmb === 1;
                  console.log(_this.switchRmb);
            },
            handleSubmit(name) {
              /* 新增、编辑-提交 */
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                        this.paramAdd = false;
                        const _this = this.formInline;
                        // this.userData = {
                        //       id: _this.id,
                        //       userName: _this.name,
                        //       userRegisterTime: _this.registerTime,
                        //       userPhone: _this.phone,
                        //       userQq: _this.qq,
                        //       userEmail: _this.email,
                        //       userLevel: _this.level,
                        //       userRemark: _this.remark,
                        //  };
                        console.log(
                          {
                              id: _this.id,
                              userName: _this.name,
                              userRegisterTime: _this.registerTime,
                              userPhone: _this.phone,
                              userQq: _this.qq,
                              userEmail: _this.email,
                              userLevel: _this.level,
                              userRemark: _this.remark,
                              switchRmb: _this.switchRmb === true ? 1 : 0,
                         });
                         if (!_this.id) {
                           console.log('新增');
                         } else {
                           console.log('修改');
                         }
                    } else {
                        this.$Message.error('Fail!');
                    }
                });
            },
             exportData (type) {
                if (type === 1) {
                    this.$refs.table.exportCsv({
                        filename: '用户数据',
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
