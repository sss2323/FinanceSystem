<template>
  <div>
    <Layout>
      <Content>
        <div class="mt-2">
          <Button type="success" class="mr-2" @click="toPage('/account-management/add')">
            新增用户
          </Button>
        </div>
        <div class="mt-2">
          <Row type="flex" justify="start" align="middle">
            <i-Col class="text-align mr-1">
              <label>公司</label>
            </i-Col>
            <i-Col class="mr-2">
              <Select v-model="params.fhomeview">
                <Option v-for="item in accountStatusList" :value="item.value" :key="item.value">
                  {{item.label}}
                </Option>
              </Select>
            </i-Col>
            <i-Col>
              <label>状态</label>
            </i-Col>
            <i-Col class="mr-2">
              <Select v-model="params.fhomeview">
                <Option v-for="item in accountStatusList" :value="item.value" :key="item.value">
                  {{item.label}}
                </Option>
              </Select>
            </i-Col>
            <i-Col>
              <label>账号</label>
            </i-Col>
            <i-Col>
              <Select v-model="params.fhomeview">
                <Option v-for="item in accountStatusList" :value="item.value" :key="item.value">
                  {{item.label}}
                </Option>
              </Select>
            </i-Col>
            <i-Col class="mr-2">
              <Input v-model="params.searchValue" placeholder="请输入账户" clearable style="width: 140px" />
            </i-Col>
            <i-Col>
              <label>余额</label>
            </i-Col>
            <i-Col>
              <Select v-model="params.hasBalance">
                <Option v-for="item in accountStatusList" :value="item.value" :key="item.value">
                  {{item.label}}
                </Option>
              </Select>
            </i-Col>
            <i-Col class="mr-2">
              <Input v-model="params.searchValue" placeholder="请输入余额" clearable style="width: 140px" />
            </i-Col>
            <i-Col class="mr-2">
              <label>未登录天数</label>
              <Input v-model="params.startDay" placeholder="起始值" clearable style="width: 60px" /> -
              <Input v-model="params.endDay" placeholder="结束值" clearable style="width: 60px" />
            </i-Col>
            <i-Col class="mr-2">
              <label>注册时间</label>
              <DatePicker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="请选择时间" style="width: 260px"></DatePicker>
            </i-Col>
            <i-Col>
              <label>按</label>
            </i-Col>
            <i-Col>
              <Select v-model="params.sortField">
                <Option v-for="item in accountStatusList" :value="item.value" :key="item.value">
                  {{item.label}}
                </Option>
              </Select>
            </i-Col>
            <i-Col>
              <label>排序方式</label>
            </i-Col>
            <i-Col class="mr-2">
              <Select v-model="params.order">
                <Option v-for="item in accountStatusList" :value="item.value" :key="item.value">
                  {{item.label}}
                </Option>
              </Select>
            </i-Col>
            <i-Col>
              <Button type="success" class="mr-2">
                查询
              </Button>
              <Button type="warning" class="mr-2">
                刷新
              </Button>
              <Button type="error" class="mr-2">
                导出报表
              </Button>
            </i-Col>
          </Row>       
        </div>
        <!-- 表格处理 通过插槽处理状态icon和操作按钮 -->
        <Table class="mt-2" border :columns="columns" :data="data">
          <template slot-scope="{row}" slot="account">
            <a>{{row.FAccount}}</a>
          </template>
          <template slot-scope="{row}" slot="onlineStatus">
            <span>{{statusName[row.onlineStatus]}}</span>
          </template>
          <template slot-scope="{row}" slot="changeStatus">
            <Select v-model="row.onlineStatus">
              <Option v-for="item in accountStatusList" :value="item.value" :key="item.value">
                {{item.label}}
              </Option>
            </Select>
          </template>
          <template slot="btnCon">
            <Button :size="buttonSize" type="success" class="mr-1" @click="toPage('/account-management/edit')" ghost>
              修改
            </Button>
            <Button :size="buttonSize" type="warning" class="mr-1" ghost>
              **记录
            </Button>
            <Button :size="buttonSize" type="error" class="mr-1" @click="toPage('/account-management/synopsis')" ghost>
              盈亏概况
            </Button>
          </template>
        </Table>
        <Footer>
          <Page :total="100" show-elevator show-total :page-size="5" />
        </Footer>
      </Content>
    </Layout>
  </div>
</template>
<script>
// import RequestGame from '../../services/api/gameSetting';
export default {
  data() {
    return {
      params: {
        aid: '',
        page: 1,
        rows: 50,
        accountName: '',
        start: '',
        end: '',
        hasBalance: '',
        startDay: '',
        endDay: '',
        searchType: '',
        searchValue: '',
        sortField: '',
        order: '',
        status: '',
        fhomeview: '',
      },
      buttonSize: 'small',
      columns: [
        {
          title: '状态',
          slot: 'onlineStatus',
          align: 'center',
          width: '60px',
        },
        {
          title: '所属公司',
          key: 'FCompanyID',
          align: 'center',
        },
        {
          title: '上级帐号',
          key: 'FParentAccount',
          align: 'center',
        },
        {
          title: '登录帐号',
          slot: 'account',
          align: 'center',
        },
        {
          title: '昵称',
          key: 'FNickname',
          align: 'center',
        },
        {
          title: '余额',
          key: 'FBalance',
          align: 'center',
        },
        {
          title: '占成',
          key: 'FProportion',
          align: 'center',
          width: '80px',
        },
        {
          title: '注册时间',
          key: 'FRegisterDate',
          align: 'center',
        },
        {
          title: '注册IP',
          key: 'FRegisterIP',
          align: 'center',
        },
        {
          title: '最后登录时间',
          key: '',
          align: 'center',
        },
        {
          title: '最后登录IP',
          key: 'FLastLogonIP',
          align: 'center',
        },
        {
          title: '未登录天数',
          key: 'UnLoginDays',
          align: 'center',
          width: '100px',
        },
        {
          title: '下级人数',
          key: 'FSubCount',
          align: 'center',
          width: '100px',
        },
        {
          title: '帐号状态',
          slot: 'changeStatus',
          align: 'center',
        },
        {
          title: '操作',
          slot: 'btnCon',
          align: 'center',
          width: '220px',
        },
      ],
      accountStatusList: [
        {
          value: 1,
          label: '启用',
        },
        {
          value: 0,
          label: '停用',
        },
        {
          value: 2,
          label: '暂停',
        },
      ],
      statusName: ['停用', '启用', '暂停'],
      data: [
        {
          FID: 100,
          FAccount: '登录账户',
          FNickname: '昵称',
          FRegisterIP: '127.0.0.1',
          FRegisterDate: '2019-2-25',
          FLastLogonIP: '192.168.265.3',
          FStatus: 0,
          FCompanyID: 56,
          FBalance: 1685.36,
          FSubCount: 8,
          FParentAccount: 'cain',
          FHomeView: '豪彩',
          UnLoginDays: 63,
          onlineStatus: 0,
          FProportion: 30,
        },
        {
          FID: 100,
          FAccount: '登录账户',
          FNickname: '昵称',
          FRegisterIP: '127.0.0.1',
          FRegisterDate: '2019-2-25',
          FLastLogonIP: '192.168.265.3',
          FStatus: 0,
          FCompanyID: 56,
          FBalance: 1685.36,
          FSubCount: 8,
          FParentAccount: 'cain',
          FHomeView: '豪彩',
          UnLoginDays: 63,
          onlineStatus: 0,
          FProportion: 30,
        },
        {
          FID: 100,
          FAccount: '登录账户',
          FNickname: '昵称',
          FRegisterIP: '127.0.0.1',
          FRegisterDate: '2019-2-25',
          FLastLogonIP: '192.168.265.3',
          FStatus: 0,
          FCompanyID: 56,
          FBalance: 1685.36,
          FSubCount: 8,
          FParentAccount: 'cain',
          FHomeView: '豪彩',
          UnLoginDays: 63,
          onlineStatus: 0,
          FProportion: 30,
        },
        {
          FID: 100,
          FAccount: '登录账户',
          FNickname: '昵称',
          FRegisterIP: '127.0.0.1',
          FRegisterDate: '2019-2-25',
          FLastLogonIP: '192.168.265.3',
          FStatus: 0,
          FCompanyID: 56,
          FBalance: 1685.36,
          FSubCount: 8,
          FParentAccount: 'cain',
          FHomeView: '豪彩',
          UnLoginDays: 63,
          onlineStatus: 0,
          FProportion: 30,
        },
      ],
    };
  },
  methods: {
    getGameList() {
      // RequestGame.GetChessGameList({ HomeView: 'haocai' }).then(res => {
      //   console.log(res);
      // });
    },
    toPage(path) {
      this.$router.push({
        path: path,
      });
    },
  },
  created() {
    this.getGameList();
  },
};
</script>
