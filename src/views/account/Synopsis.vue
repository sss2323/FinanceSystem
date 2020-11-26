<template>
  <div class="p-5">
    <div class="mb-5">
      用户hc001盈亏情况
    </div>
    <Row class="pb-4">
      <i-Col span="6">
        <span>当日有效投注：{{params.accountName}}元</span>
      </i-Col>
      <i-Col span="6">
        <span>当日输赢：{{params.accountName}}元</span>
      </i-Col>
    </Row>
    <Row class="pb-4">
      <i-Col span="6">
        <span>本周有效投注：{{params.accountName}}元</span>
      </i-Col>
      <i-Col span="6">
        <span>本周输赢：{{params.accountName}}元</span>
      </i-Col>
    </Row>
    <Row class="pb-4">
      <i-Col span="6">
        <span>当月有效投注：{{params.accountName}}元</span>
      </i-Col>
      <i-Col span="6">
        <span>当月输赢：{{params.accountName}}元</span>
      </i-Col>
    </Row>
    <Row class="pb-5">
      <i-Col span="6">
        <span>历史有效投注：{{params.accountName}}元</span>
      </i-Col>
      <i-Col span="6">
        <span>历史总输赢：{{params.accountName}}元</span>
      </i-Col>
    </Row>
    <Row class="pb-3">
      <Button type="primary">
        返回
      </Button>
    </Row>
  </div>
</template>
<script>
// import RequestGame from '../../services/api/gameSetting';
export default {
  data() {
    return {
      params: {
        accountName: 136523.36,
      },
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
