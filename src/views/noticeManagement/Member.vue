// 公告管理 会员消息
<template>
  <Tabs type="card">
    <TabPane v-for="(tab, index) in tabs" :key="index" :label="tab.label">
      <member-message :tab-pick="index"></member-message>
    </TabPane>
  </Tabs>
</template>
<script>
import MemberMessage from './member/Message';
export default {
  components: { MemberMessage },
  data() {
    return {
      tabs: [
        { label: '用户消息' },
        { label: '用户优惠通知' },
        { label: '用户存取款消息' },
      ],
    };
  },

};
</script>
