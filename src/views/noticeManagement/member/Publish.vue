// 会员消息 发布消息
<template>
  <div>
    <Card>
      <p slot="title">
        发布消息
      </p>
      <Form :label-width="200">
        <FormItem label="体系选择:">
          <Select v-model="member" style="width:200px">
            <Option v-for="item in memberList" :value="item.value" :key="item.value">
              {{item.label}}
            </Option>
          </Select>
        </FormItem>
        <FormItem label="标题:">
          <Input class="input" />
        </FormItem>
        <FormItem label="选择皮肤:">
          <Select v-model="company" style="width:200px">
            <Option v-for="item in companyList" :value="item.value" :key="item.value">
              {{item.label}}
            </Option>
          </Select>
        </FormItem>
        <FormItem label="内容:">
          <quill-editor class="bubble" v-model="content" ref="myQuillEditor" :options="editorOption"></quill-editor>
        </FormItem>
        <FormItem label="提示:">
          字数不能低于2个，最多不能超过5000个
        </FormItem>
        <FormItem label="是否即时提示:">
          <i-switch v-model="switch1" @on-change="change" />
        </FormItem>
        <FormItem>
          <Button type="info" size="large" class="mr-5">
            保存
          </Button>
          <Button type="info" size="large" class="mr-5">
            重置
          </Button>
          <Button type="info" size="large" @click="$router.back()" class="mr-5">
            取消
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
      member: 'all',
      company: '',
      switch1: false,
      memberList: [
        {
          value: 'all',
          label: '全部会员',
        },
        {
          value: 'class',
          label: '层级会员',
        },
        {
          value: 'account',
          label: '会员账号',
        },
        {
          value: 'subagent',
          label: '直属代理',
        },
      ],
      companyList: [
        {
          value: 'haocai',
          label: '豪彩',
        },
        {
          value: 'tty',
          label: '天天赢',
        },
        {
          value: 'jincai',
          label: '金彩',
        },
        {
          value: 'hz001',
          label: '豪庄hz001',
        },
        {
          value: 'x077',
          label: '南山娱乐x077',
        },
      ],
      editorOption: {
        theme: 'bubble',
        placeholder: '',
        modules: {
          toolbar: [
            ['bold', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'align': [] }],
            ['link', 'clean'],
          ],
          history: {
            delay: 1000,
            maxStack: 50,
            userOnly: true,
          },
        },
      },
    };
  },
};
</script>
<style lang="scss" scoped>
  .input{
    width: 200px;
  }
  .quill-editor,
  .quill-code {
    height: 20rem;
    width: 50%;
  }
  .quill-editor {
    border: 1px solid #ccc;
  }
</style>
