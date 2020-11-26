<template>
  <div>
    <Row class="text-center mb-3" type="flex" justify="center" align="middle">
      <i-Col span="6">
        系统名称
      </i-Col>
      <i-Col span="6">
        参数属性
      </i-Col>
      <i-Col span="6">
        参数值
      </i-Col>
      <i-Col span="6">
        参数描述
      </i-Col>
    </Row>
    <Row class="text-center mb-3" type="flex" justify="center" align="middle">
      <i-Col span="6">
        BankDepositTime
      </i-Col>
      <i-Col span="6">
        新绑银行卡提款时间设置（小时
      </i-Col>
      <i-Col span="6">
        <Input v-model="params.proportion" placeholder="请输入"></Input>
      </i-Col>
      <i-Col span="6">
        新绑银行卡提款时间设置，针对新开用户（小时）
      </i-Col>
    </Row>
    <Row class="text-center mb-3" type="flex" justify="center" align="middle">
      <i-Col span="6">
        BankCardsMax
      </i-Col>
      <i-Col span="6">
        用户银行卡数量设定
      </i-Col>
      <i-Col span="6">
        <Input v-model="params.proportion" placeholder="请输入"></Input>
      </i-Col>
      <i-Col span="6">
        设定用户绑定银行卡的数量
      </i-Col>
    </Row>
    <Row class="text-center mb-5" type="flex" justify="center" align="middle">
      <i-Col span="6">
        AddBankSetting
      </i-Col>
      <i-Col span="6">
        前台新增银行卡是否需要开户地址
      </i-Col>
      <i-Col span="6">
        <i-Switch size="large">
          <span slot="open">需要</span>
          <span slot="close">不要</span>
        </i-Switch>
      </i-Col>
      <i-Col span="6">
        前台新增银行卡是否需要开户地址，如省份，城市，支行
      </i-Col>
    </Row>
    <Row class="text-center" type="flex" justify="center">
      <i-Col>
        <Button type="primary" class="mr-4">
          保存
        </Button>
      </i-Col>
    </Row>
  </div>
</template>
<script>
// import RequestGame from '../../services/api/gameSetting';
export default {
  data() {
    return {
      params: {
        fid: '',
        fcompanyId: '',
        accountName: '',
        nickName: '',
        homeView: '',
        password: '',
        status: 1,
        fproportion: '',
        accountRemark: '',
        registerIP: '',
        registerDate: '',
        lastLogonDate: '',
        lastLogonIP: '',
      },
      buttonSize: 'small',
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
    };
  },
  methods: {
    getGameList() {
      // RequestGame.GetChessGameList({ HomeView: 'haocai' }).then(res => {
      //   console.log(res);
      // });
    },
  },
  created() {
    this.getGameList();
  },
};
</script>
