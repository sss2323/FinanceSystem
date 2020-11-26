// 系统公告 添加或者编辑公告
<template>
  <div>
    <Card style="height: 1300px">
      <p v-if="type==='add'" slot="title">
        公告添加
      </p>
      <p v-else slot="title">
        公告编辑
      </p>
      <Form :label-width="200">
        <FormItem label="层级:">
          <RadioGroup v-if="type==='add'" v-model="addlevel">
            <Radio v-for="item in levelList" :key="item.value" :label="item.label" size="large" class="mr-4"></Radio>
          </RadioGroup>
          <RadioGroup v-else v-model="editlevel">
            <Radio v-for="item in levelList" :key="item.value" :label="item.label" size="large" class="mr-4"></Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="标题:">
          <Input style="width: 45%" />
        </FormItem>
        <FormItem label="内容:" style="height: 450px">
          <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption"></quill-editor>
        </FormItem>
        <FormItem label="提示:">
          字数不能低于2个，最多不能超过5000个
        </FormItem>
        <FormItem label="公告类别:">
          <Select v-model="modelCategory" style="width:200px">
            <Option v-for="item in categoryList" :value="item.value" :key="item.value">
              {{item.label}}
            </Option>
          </Select>
        </FormItem>
        <FormItem label="类型:">
          <RadioGroup v-model="modelType">
            <Radio v-for="item in typeList" :key="item.value" :label="item.label" size="large" class="mr-4"></Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="是否即时提醒否:">
          <i-switch v-model="switch1" @on-change="change" />
        </FormItem>
        <FormItem label="选择皮肤:">
          <Select v-model="modelCompany" style="width:200px">
            <Option v-for="item in companyList" :value="item.value" :key="item.value">
              {{item.label}}
            </Option>
          </Select>
        </FormItem>
        <FormItem label="是否显示发布时间提醒否:">
          <i-switch v-model="switch2" @on-change="change" />
        </FormItem>
        <FormItem label="显示排序:">
          <Input class="input" />
        </FormItem>
        <FormItem label="开始时间:">
          <Input class="input" />
        </FormItem>
        <FormItem label="结束时间:">
          <Input class="input" />
        </FormItem>
        <FormItem>
          <Button type="success" size="large" @click="type==='add' ? addNotice() : editNotice()" class="mr-5">
            保存
          </Button>
          <Button type="error" size="large" @click="toPage('/notice-management')">
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
      type: '',
      switch1: false,
      switch2: false,
      addlevel: '',
      editlevel: '访客',
      modelCategory: '',
      modelType: '',
      modelCompany: '',
      content: '',
      levelList: [
        {
          value: 'all',
          label: '全部',
        },
        {
          value: 'visitor',
          label: '访客',
        },
        {
          value: 'undefined',
          label: '未分层',
        },
        {
          value: 'level1',
          label: '一级',
        },
        {
          value: 'level2',
          label: '二级',
        },
        {
          value: 'level3',
          label: '三级',
        },
        {
          value: 'general',
          label: '一般',
        },
        {
          value: 'medium',
          label: '中级',
        },
        {
          value: 'advanced',
          label: '高级',
        },
        {
          value: 'silver',
          label: '白银',
        },
        {
          value: 'gold',
          label: '黄金',
        },
      ],
      categoryList: [
        {
          value: 'operation',
          label: '运营通知',
        },
        {
          value: 'finance',
          label: '财务通知',
        },
        {
          value: 'activity',
          label: '活动通知',
        },
        {
          value: 'system',
          label: '系统通知',
        },
        {
          value: 'others',
          label: '其他通知',
        },
      ],
      typeList: [
        {
          value: 'marquee',
          label: '跑马灯',
        },
        {
          value: 'popup',
          label: '弹窗',
        },
        {
          value: 'marqandpop',
          label: '跑马灯和弹窗',
        },
        {
          value: 'withdraw',
          label: '下架',
        },
        {
          value: 'tips',
          label: '即时提示',
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
          label: '豪庄',
        },
        {
          value: 'x077',
          label: '南山娱乐',
        },
      ],
      editorOption: {
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
  methods: {
    change(status) {
      this.$Message.info('提醒开关' + status);
    },
    addNotice() {
      console.log('添加通知');
    },
    editNotice() {
      console.log('编辑通知');
    },
    toPage(path, query) {
      this.$router.push({
        path: path,
        query: { type: query },
      });
    },
  },
  created() {
    this.type = this.$route.query.type;
    console.log(this.$route.query.type);
  },
};
</script>
<style lang="scss" scoped>
  ul li{
    list-style-type:none;
  }

  .quill-editor,
  .quill-code {
    width: 50%;
    height:400px;
    float: left;
  }
  .input{
    width: 200px;
  }
</style>
