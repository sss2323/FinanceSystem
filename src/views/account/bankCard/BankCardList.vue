<template>
  <div>
    <Layout>
      <Content>
        <div class="mt-2">
          <Row type="flex" justify="start" align="middle">
            <i-Col class="text-align mr-1">
              <label>刷新</label>
            </i-Col>
            <i-Col class="mr-2">
              <Select v-model="params.fhomeview">
                <Option v-for="item in accountStatusList" :value="item.value" :key="item.value">
                  {{item.label}}
                </Option>
              </Select>
            </i-Col>
            <i-Col>
              <label>状态：</label>
            </i-Col>
            <i-Col class="mr-2">
              <CheckboxGroup>
                <Checkbox label="待审核"></Checkbox>
                <Checkbox label="启用"></Checkbox>
                <Checkbox label="删除"></Checkbox>
              </CheckboxGroup>
            </i-Col>
            <i-Col>
              <label>账号</label>
            </i-Col>
            <i-Col class="mr-2">
              <Input v-model="params.searchValue" placeholder="请输入账户" clearable style="width: 140px" />
            </i-Col>
            <i-Col>
              <label>卡号</label>
            </i-Col>
            <i-Col class="mr-2">
              <Input v-model="params.searchValue" placeholder="请输入卡号" clearable style="width: 140px" />
            </i-Col>
            <i-Col>
              <label>持卡人</label>
            </i-Col>
            <i-Col class="mr-2">
              <Input v-model="params.searchValue" placeholder="请输入持卡人" clearable style="width: 140px" />
            </i-Col>
            <i-Col>
              <Button type="success" class="mr-2">
                查询
              </Button>
              <Button type="error" class="mr-2">
                导出
              </Button>
            </i-Col>
          </Row>
          </Row>
        </div>
        <!-- 表格处理 通过插槽处理状态icon和操作按钮 -->
        <Table class="mt-2" border :columns="columns" :data="data">
          <template slot="btnCon">
            <Button :size="buttonSize" type="success" class="mr-1" ghost>
              通过
            </Button>
            <Button :size="buttonSize" type="error" class="mr-1" ghost>
              删除
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
          title: 'ID',
          key: 'FCompanyID',
          align: 'center',
        },
        {
          title: '帐号',
          key: 'FParentAccount',
          align: 'center',
        },
        {
          title: '银行',
          key: 'FNickname',
          align: 'center',
        },
        {
          title: '卡号',
          key: 'FBalance',
          align: 'center',
        },
        {
          title: '持卡人',
          key: 'FProportion',
          align: 'center',
          width: '80px',
        },
        {
          title: '省份',
          key: 'FRegisterDate',
          align: 'center',
        },
        {
          title: '城市',
          key: 'FRegisterIP',
          align: 'center',
        },
        {
          title: '支行',
          key: '',
          align: 'center',
        },
        {
          title: '备注',
          key: 'FLastLogonIP',
          align: 'center',
        },
        {
          title: '添加时间',
          key: 'UnLoginDays',
          align: 'center',
          width: '100px',
        },
        {
          title: '更新时间',
          key: 'FSubCount',
          align: 'center',
          width: '100px',
        },
        {
          title: '更新人',
          key: 'FSubCount',
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
