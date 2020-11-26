<template>
  <Tabs type="card" value="name1">
    <TabPane label="用户银行卡管理" name="name1">
      <bank-card-list></bank-card-list>
    </TabPane>
    <TabPane label="银行卡参数设定" name="name2">
      <bank-setting></bank-setting>
    </TabPane>
    <TabPane label="银行卡黑名单" name="name3">
      <bank-black-list></bank-black-list>
    </TabPane>
  </Tabs>
</template>
<script>
import BankCardList from './BankCardList.vue';
import BankBlackList from './BankBlackList.vue';
import BankSetting from './BankSetting.vue';
export default {
  components: { BankCardList, BankBlackList, BankSetting },
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
