<template>
  <div>
    <div>新增账号</div>
    <Form :model="params" :label-width="120" class="pr-5">
      <FormItem label="所属公司：">
        <Select v-model="params.select">
          <Option v-for="item in accountStatusList" :value="item.value" :key="item.value">
            {{item.label}}
          </Option>
        </Select>
      </FormItem>
      <FormItem label="登录账号：">
        <Row type="flex" justify="start">
          <i-Col class="mr-3">
            <Input v-model="params.accountName" placeholder="请输入"></Input>
          </i-Col>
          <i-Col>
            <Button type="primary" class="mr-4">
              检查账号
            </Button>
          </i-Col>
        </Row>
      </FormItem>
      <FormItem label="用户昵称：">
        <Input v-model="params.nickName" placeholder="请输入"></Input>
      </FormItem>
      <FormItem label="登录密码：">
        <Input v-model="params.password" placeholder="请输入"></Input>
      </FormItem>
      <FormItem label="用户状态：">
        <RadioGroup v-model="params.status">
          <Radio :label="item.value" v-for="item in accountStatusList" :key="item.value">
            {{item.label}}
          </Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="占成：">
        <Input v-model="params.fproportion" placeholder="请输入"></Input>
      </FormItem>
      <FormItem label="备注：">
        <Input v-model="params.accountRemark" type="textarea" :autosize="{minRows: 4,maxRows: 6}" placeholder="请输入"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" class="mr-4">
          注册
        </Button>
        <Button>
          返回
        </Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
// import RequestGame from '../../services/api/gameSetting';
export default {
  data() {
    return {
      params: {
        accountName: '',
        nickName: '',
        homeView: '',
        password: '',
        status: 1,
        fproportion: '',
        accountRemark: '',
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
