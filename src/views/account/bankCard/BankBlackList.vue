<template>
  <div>
    <Layout>
      <Content>
        <div class="mt-2">
          <Row type="flex" justify="start" align="middle">
            <i-Col>
              <label>卡号：</label>
            </i-Col>
            <i-Col class="mr-2">
              <Input v-model="params.searchValue" placeholder="请输入卡号" clearable style="width: 140px" />
            </i-Col>
            <i-Col>
              <label>用户名</label>
            </i-Col>
            <i-Col class="mr-2">
              <Input v-model="params.searchValue" placeholder="请输入用户名" clearable style="width: 140px" />
            </i-Col>
            <i-Col class="mr-2">
              <label>日期范围：</label>
              <DatePicker type="datetimerange" format="yyyy-MM-dd" placeholder="请选择时间" style="width: 200px"></DatePicker>
            </i-Col>
            <i-Col>
              <Button type="success" class="mr-2">
                查询
              </Button>
              <Button type="warning" class="mr-2">
                新增
              </Button>
              <Button type="error" class="mr-2">
                导入
              </Button>
            </i-Col>
          </Row>
          </Row>
        </div>
        <!-- 表格处理 通过插槽处理状态icon和操作按钮 -->
        <Table class="mt-2" border :columns="columns" :data="data">
          <template slot="btnCon">
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
          title: '序号',
          key: 'FCompanyID',
          align: 'center',
        },
        {
          title: '账户',
          key: 'FParentAccount',
          align: 'center',
        },
        {
          title: '卡号',
          key: 'FBalance',
          align: 'center',
        },
        {
          title: '添加时间',
          key: 'FProportion',
          align: 'center',
        },
        {
          title: '操作人',
          key: 'FRegisterDate',
          align: 'center',
        },
        {
          title: '操作时间',
          key: 'FRegisterIP',
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
