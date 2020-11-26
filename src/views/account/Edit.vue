<template>
  <div>
    <div>新增账号</div>
    <Form :model="params" :label-width="120" class="pr-5">
      <FormItem label="所属公司：">
        <span>{{params.homeView}}</span>
      </FormItem>
      <FormItem label="登录账号：">
        <span>{{params.accountName}}</span>
      </FormItem>
      <FormItem label="用户昵称：">
        <Input v-model="params.nickName" placeholder="请输入"></Input>
      </FormItem>
      <FormItem label="占成：">
        <Input v-model="params.proportion" placeholder="请输入"></Input>
      </FormItem>
      <FormItem label="用户状态：">
        <RadioGroup v-model="params.status">
          <Radio :label="item.value" v-for="item in accountStatusList" :key="item.value">
            {{item.label}}
          </Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="注册时间：">
        <span>{{params.registerDate}}</span>
      </FormItem>
      <FormItem label="注册IP：">
        <span>{{params.registerIP}}</span>
      </FormItem>
      <FormItem label="最后登陆时间：">
        <span>{{params.lastLogonDate}}</span>
      </FormItem>
      <FormItem label="最后登陆IP：">
        <span>{{params.lastLogonIP}}</span>
      </FormItem>
      <FormItem label="备注：">
        <Input v-model="params.accountRemark" type="textarea" :autosize="{minRows: 4,maxRows: 6}" placeholder="请输入"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" class="mr-4">
          保存
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
