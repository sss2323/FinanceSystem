<template>
  <Tabs type="card" value="name1">
    <TabPane label="推广管理" name="name1">
      <popularize-list></popularize-list>
    </TabPane>
    <TabPane label="推广注册参数设定" name="name2">
      <popularize-setting></popularize-setting>
    </TabPane>
    <TabPane label="微信推广列表" name="name3">
      <we-chat-list></we-chat-list>
    </TabPane>
  </Tabs>
</template>
<script>
import PopularizeList from './PopularizeList.vue';
import PopularizeSetting from './PopularizeSetting.vue';
import WeChatList from './WeChatList.vue';
export default {
  components: { PopularizeList, PopularizeSetting, WeChatList },
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
