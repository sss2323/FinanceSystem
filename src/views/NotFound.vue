<template>
  <div class="d-flex flex-middle flex-center" style="height:100vh;">
    <Alert type="warning" show-icon style="width:40%">
      <h1>404</h1>
      <template slot="desc">
        <span class="mr-1">您所访问的页面不存在！</span>
        <i-button type="default" size="small" replace @click="to">
          返回上一页
        </i-button>
      </template>
    </Alert>
  </div>
</template>

<script>
export default {
  methods: {
    to() {
      this.$router.replace(this.$route.params.url);
    },
  },
};
</script>
