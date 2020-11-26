<template>
  <div>
    <Layout>
      <Content>
        <Card>
          <p slot="title">
            交易账单录入
          </p>
          <Row>
            <Col span="12">
            <div class="rmb"
                 title="人民币"
                 width="700"
                 class-name="RMB"
                 draggable
            >
              <div class="rmbModal">
                人民币
              </div>
              <Input search enter-button="搜索" v-model="searchText" @on-search="userDataList(searchText)" style="width:150px;float:left;top:0px;" placeholder="请输入姓名" />
              <span style="margin:0 10px 0 25px">
                <label for="">汇率:</label>
                <InputNumber v-model="exchangeRate" :min="1" :step="1.2"></InputNumber>
              </span>
              <span style="margin:0 10px 0 25px">
                <label for="">金额:</label>
                <InputNumber v-model="amount"></InputNumber>
              </span>
              <span style="margin:0 10px 0 25px">
                <label for="">币种:</label>
                <Select v-model="currency" style="width:100px">
                  <Option v-for="item in currencyList" :value="item.value" :key="item.value">{{item.label}}</Option>
                </Select>
              </span>
              <span style="margin:0 10px 0 25px">
                <label for="">状态:</label>
                <Select v-model="statusValue" style="width:100px">
                  <Option v-for="item in statusList" :value="item.value" :key="item.value">{{item.label}}</Option>
                </Select>
              </span>
              <span style="margin:0 10px 0 25px">
                <label for="">账变类型:</label>
                <Select v-model="typeValue" style="width:100px">
                  <Option v-for="item in typeList" :value="item.value" :key="item.value">{{item.label}}</Option>
                </Select>
              </span>
              <Icon type="md-cog" size="25" style="margin: 0 20px;cursor: pointer;" />
              <Button style="margin: 11px 68px 12px 0;" type="warning">
                新增账户
              </Button>
              <Table border :columns="columns" :data="data">
                <template slot-scope="{ row }" slot="name">
                  <strong>{{row.name}}</strong>
                </template>
                <template slot-scope="{ row, index }" slot="action">
                  <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">
                    View
                  </Button>
                  <Button type="error" size="small" @click="remove(index)">
                    Delete
                  </Button>
                </template>
              </Table>
            </div>
            </Col>
            <Col span="12">
            <div class="my"
                 title=""
                 width="700"
                 class-name="RMB"
                 draggable
            >
              <div class="myModal">
                美元
              </div>
              <Input search enter-button="搜索" v-model="searchText" @on-search="userDataList(searchText)" style="width:150px;float:left;top:0px;" placeholder="请输入姓名" />
              <span style="margin:0 10px 0 25px">
                <label for="">汇率:</label>
                <InputNumber v-model="exchangeRate" :min="1" :step="1.2"></InputNumber>
              </span>
              <span style="margin:0 10px 0 25px">
                <label for="">金额:</label>
                <InputNumber v-model="amount"></InputNumber>
              </span>
              <span style="margin:0 10px 0 25px">
                <label for="">币种:</label>
                <Select v-model="currency" style="width:100px">
                  <Option v-for="item in currencyList" :value="item.value" :key="item.value">{{item.label}}</Option>
                </Select>
              </span>
              <span style="margin:0 10px 0 25px">
                <label for="">状态:</label>
                <Select v-model="statusValue" style="width:100px">
                  <Option v-for="item in statusList" :value="item.value" :key="item.value">{{item.label}}</Option>
                </Select>
              </span>
              <span style="margin:0 10px 0 25px">
                <label for="">账变类型:</label>
                <Select v-model="typeValue" style="width:100px">
                  <Option v-for="item in typeList" :value="item.value" :key="item.value">{{item.label}}</Option>
                </Select>
              </span>
              <Icon type="md-cog" size="25" style="margin: 0 20px;cursor: pointer;" />
              <Button style="margin: 11px 68px 12px 0;" type="warning">
                新增账户
              </Button>
              <Table border :columns="columns" :data="data">
                <template slot-scope="{ row }" slot="name">
                  <strong>{{row.name}}</strong>
                </template>
                <template slot-scope="{ row, index }" slot="action">
                  <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">
                    View
                  </Button>
                  <Button type="error" size="small" @click="remove(index)">
                    Delete
                  </Button>
                </template>
              </Table>
            </div>
            </Col>
          </Row>
          <Row>
            <Col span="12">
            <!-- 港币 -->
            <div class="gb"
                 title="港币"
            >
              <div class="gbModal">
                港币
              </div>
              <Input search enter-button="搜索" v-model="searchText" @on-search="userDataList(searchText)" style="width:150px;float:left;top:0px;" placeholder="请输入姓名" />
              <span style="margin:0 10px 0 25px">
                <label for="">汇率:</label>
                <InputNumber v-model="exchangeRate" :min="1" :step="1.2"></InputNumber>
              </span>
              <span style="margin:0 10px 0 25px">
                <label for="">金额:</label>
                <InputNumber v-model="amount"></InputNumber>
              </span>
              <span style="margin:0 10px 0 25px">
                <label for="">币种:</label>
                <Select v-model="currency" style="width:100px">
                  <Option v-for="item in currencyList" :value="item.value" :key="item.value">{{item.label}}</Option>
                </Select>
              </span>
              <span style="margin:0 10px 0 25px">
                <label for="">状态:</label>
                <Select v-model="statusValue" style="width:100px">
                  <Option v-for="item in statusList" :value="item.value" :key="item.value">{{item.label}}</Option>
                </Select>
              </span>
              <span style="margin:0 10px 0 25px">
                <label for="">账变类型:</label>
                <Select v-model="typeValue" style="width:100px">
                  <Option v-for="item in typeList" :value="item.value" :key="item.value">{{item.label}}</Option>
                </Select>
              </span>
              <Icon type="md-cog" size="25" style="margin: 0 20px;cursor: pointer;" />
              <Button style="margin: 11px 68px 12px 0;" type="warning">
                新增账户
              </Button>
              <Table border :columns="columns" :data="data">
                <template slot-scope="{ row }" slot="name">
                  <strong>{{row.name}}</strong>
                </template>
                <template slot-scope="{ row, index }" slot="action">
                  <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">
                    View
                  </Button>
                  <Button type="error" size="small" @click="remove(index)">
                    Delete
                  </Button>
                </template>
              </Table>
            </div>
            </Col>
            <!-- 澳门 -->
            <Col span="12">
            <div class="am">
              <div class="amModal">
                澳门
              </div>
              <Input search enter-button="搜索" v-model="searchText" @on-search="userDataList(searchText)" style="width:150px;float:left;top:0px;" placeholder="请输入姓名" />
              <span style="margin:0 10px 0 25px">
                <label for="">汇率:</label>
                <InputNumber v-model="exchangeRate" :min="1" :step="1.2"></InputNumber>
              </span>
              <span style="margin:0 10px 0 25px">
                <label for="">金额:</label>
                <InputNumber v-model="amount"></InputNumber>
              </span>
              <span style="margin:0 10px 0 25px">
                <label for="">币种:</label>
                <Select v-model="currency" style="width:100px">
                  <Option v-for="item in currencyList" :value="item.value" :key="item.value">{{item.label}}</Option>
                </Select>
              </span>
              <span style="margin:0 10px 0 25px">
                <label for="">状态:</label>
                <Select v-model="statusValue" style="width:100px">
                  <Option v-for="item in statusList" :value="item.value" :key="item.value">{{item.label}}</Option>
                </Select>
              </span>
              <span style="margin:0 10px 0 25px">
                <label for="">账变类型:</label>
                <Select v-model="typeValue" style="width:100px">
                  <Option v-for="item in typeList" :value="item.value" :key="item.value">{{item.label}}</Option>
                </Select>
              </span>
              <Icon type="md-cog" size="25" style="margin: 0 20px;cursor: pointer;" />
              <Button style="margin: 11px 68px 12px 0;" type="warning">
                新增账户
              </Button>
              <Table border :columns="columns" :data="data">
                <template slot-scope="{ row }" slot="name">
                  <strong>{{row.name}}</strong>
                </template>
                <template slot-scope="{ row, index }" slot="action">
                  <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">
                    View
                  </Button>
                  <Button type="error" size="small" @click="remove(index)">
                    Delete
                  </Button>
                </template>
              </Table>
            </div>
            </Col>
          </Row>
          <Table :columns="columns1" :data="data1">
            <template slot-scope="{ row }" slot="FStatus">
              <div v-html="row.dollar"></div>
              <div v-html="row.slotsale"></div>
            </template>
          </Table>
        </Card>
      </Content>
    </Layout>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                modalRmb: true,
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
                    columns: [
                    {
                        title: '序号',
                        slot: 'name',
                    },
                    {
                        title: '姓名',
                        key: 'age',
                    },
                    {
                        title: '金额',
                        key: 'address',
                    },
                    {
                        title: '币种',
                        key: 'address',
                    },
                    {
                        title: '操作时间',
                        key: 'address',
                    },
                    {
                        title: '备注',
                        key: 'address',
                    },
                    {
                        title: '差异',
                        key: 'address',
                    },
                    {
                        title: 'Action',
                        slot: 'action',
                        width: 150,
                        align: 'center',
                    },
                ],
                data: [
                    {
                        name: 'Brown',
                        age: 18,
                        address: 'fdsgs',
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'fsgfdsf',
                    },
                    {
                        name: 'Black',
                        age: 30,
                        address: 'Lake Park',
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Lake Park',
                    },
                ],
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
        methods: {
        show (index) {
            this.$Modal.info({
                title: 'User Info',
                content: `Name：${this.data[index].name}<br>Age：${this.data[index].age}<br>Address：${this.data[index].address}`,
            });
           },
          remove (index) {
              this.data.splice(index, 1);
          },
       },
    };
</script>
<style>
.rmb,.my,.am,.gb{
  border: #eee solid 5px;
}
.rmbModal,.myModal,.gbModal,.amModal{
    background: #0099ff;
    color: #ffff;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin:  0 0 20px 0;
}
.myModal{
  background: #00ccff !important;
}
.amModal{
  background: #0066ff !important;
}
.gbModal{
  background: #0000ff !important;
}
</style>
