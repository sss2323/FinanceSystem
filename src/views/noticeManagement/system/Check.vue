// 系统公告 查看公告
<template>
  <div>
    <Card>
      <p slot="title">
        公告查看
      </p>
      <Form :label-width="200">
        <FormItem label="标题:">
        </FormItem>
        <FormItem label="公告内容:">
        </FormItem>
        <FormItem label="类型:">
        </FormItem>
        <FormItem label="发布时间:">
        </FormItem>
        <FormItem label="结束时间:">
        </FormItem>
        <FormItem align="center">
          <Button type="info" size="large" @click="$router.back()" class="mr-5">
            返回
          </Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkData: [],
    };
  },
};
</script>
