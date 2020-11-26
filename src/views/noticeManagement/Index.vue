// 公告管理 系统公告
<template>
  <div>
    <Layout>
      <Content>
        <div class="mt-2">
          <Row type="flex" justify="start" align="middle">
            <i-Col>
              <label>公告类别:</label>
            </i-Col>
            <i-Col class="ml-1 mr-2" span="3">
              <Select v-model="modelCategory" style="width:200px">
                <Option v-for="item in categoryList" :value="item.value" :key="item.value">
                  {{item.label}}
                </Option>
              </Select>
            </i-Col>
            <i-Col>
              <label>公告类型:</label>
            </i-Col>
            <i-Col class="ml-1 mr-2" span="3">
              <Select v-model="modelType" style="width:200px">
                <Option v-for="item in typeList" :value="item.value" :key="item.value">
                  {{item.label}}
                </Option>
              </Select>
            </i-Col>
            <i-Col>
              <label>公告标题:</label>
            </i-Col>
            <i-Col class="ml-1 mr-2" span="3">
              <Input style="width: 200px" />
            </i-Col>
            <i-Col>
              <label>选择公司:</label>
            </i-Col>
            <i-Col class="ml-1 mr-2" span="3">
              <Select v-model="modelCompany" style="width:200px">
                <Option v-for="item in companyList" :value="item.value" :key="item.value">
                  {{item.label}}
                </Option>
              </Select>
            </i-Col>
            <i-Col class="ml-4">
              <Button type="success" class="mr-2">
                查询
              </Button>
              <Button type="success" class="mr-2" @click="toPage('/notice-management/handle','add')">
                添加
              </Button>
              <Button type="warning" class="mr-2">
                批量删除
              </Button>
            </i-Col>
          </Row>
        </div>
        <!-- 表格处理 通过插槽处理状态icon和操作按钮 -->
        <Table class="mt-2" border :columns="columns" :data="data">
          <template slot-scope="{ row, index }" slot="Action">
            <div v-if="row.FType === '系统公告'">
              <Button type="success" class="mr-1" @click="toPage('/notice-management/check')">
                查看
              </Button>
            </div>
            <div v-else>
              <Button type="warning" class="mr-1" @click="toPage('/notice-management/handle','edit')">
                编辑
              </Button>
              <Button type="error" class="mr-1" @click="remove(index)">
                删除
              </Button>
            </div>
          </template>
        </Table>
        <Footer>
          <Page :total="100" show-elevator show-total :page-size="5" />
        </Footer>
      </Content>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modelCategory: 'all',
      modelType: 'all',
      modelCompany: 'all',
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center',
        },
        {
          title: 'ID',
          key: 'FId',
          width: 60,
          align: 'center',
        },
        {
          title: '公告标题',
          key: 'FTitle',
          align: 'center',
        },
        {
          title: '公告内容',
          key: 'FContent',
          width: 400,
          align: 'center',
        },
        {
          title: '公告类别',
          key: 'FClass',
          align: 'center',
        },
        {
          title: '公告类型',
          key: 'FType',
          width: 90,
          align: 'center',
        },
        {
          title: '编辑者',
          key: 'FEditor',
          width: 80,
          align: 'center',
        },
        {
          title: '编辑时间',
          key: 'FEditTime',
          align: 'center',
        },
        {
          title: '开始日期',
          key: 'FStartDate',
          align: 'center',
        },
        {
          title: '结束日期',
          key: 'FEndDate',
          align: 'center',
        },
        {
          title: '操作',
          slot: 'Action',
          align: 'center',
        },
      ],
      data: [
        {
          FId: 302,
          FTitle: '跑马灯',
          FContent: '跑马灯',
          FClass: '系统通知',
          FType: '系统公告',
          FEditor: '系统',
          FEditTime: '2019-02-22 19:35:13',
          FStartDate: '2019-02-22',
          FEndDate: '2019-02-23',
        },
        {
          FId: 301,
          FTitle: '弹窗公告',
          FContent: '弹窗公告',
          FClass: '系统通知',
          FType: '系统公告',
          FEditor: '系统',
          FEditTime: '2019-02-22 19:40:13',
          FStartDate: '2019-02-22',
          FEndDate: '2019-02-24',
        },
        {
          FId: 300,
          FTitle: '下架',
          FContent: '下架',
          FClass: '系统通知',
          FType: '其他公告',
          FEditor: '系统',
          FEditTime: '2019-02-21 19:35:13',
          FStartDate: '2019-02-21',
          FEndDate: '2019-02-22',
        },
      ],
      categoryList: [
        {
          value: 'all',
          label: '全部',
        },
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
          value: 'all',
          label: '全部',
        },
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
          value: 'all',
          label: '全部(默认)',
        },
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
    };
  },
  methods: {
    toPage(path, query) {
      this.$router.push({
        path: path,
        query: { type: query },
      });
    },
    remove(ind) {
      console.log(ind);
      this.data.splice(ind, 1);
    },
  },
};
</script>
