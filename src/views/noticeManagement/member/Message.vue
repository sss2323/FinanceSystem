// 会员消息 用户消息-用户优惠通知-用户存取款消息
<template>
  <div>
    <Layout>
      <Content>
        <div>
          <div class="mt-2">
            <Row v-if="tabPick===0" type="flex" justify="start" align="middle">
              <i-Col>
                <label>发件人:</label>
              </i-Col>
              <i-Col class="ml-1 mr-2" span="2">
                <Input style="width: 150px" />
              </i-Col>
              <i-Col>
                <Button type="success" class="ml-2 mr-2">
                  查询
                </Button>
                <Button type="success" class="mr-2" @click="toPage('/member-notice/publish')">
                  发布消息
                </Button>
              </i-Col>
              <i-Col>
                <Button type="warning">
                  清空当前消息
                </Button>
              </i-Col>
            </Row>
            <Row v-else type="flex" justify="start" align="middle">
              <i-Col>
                <Button type="warning">
                  清空当前消息
                </Button>
              </i-Col>
            </Row>
          </div>
        </div>
        <Table v-if="tabPick===0" class="mt-2" border :columns="columns1" :data="data">
          <template slot-scope="{ index }" slot="Action">
            <Button type="error" class="mr-1" @click="remove(index)">
              删除
            </Button>
          </template>
        </Table>
        <Table v-else class="mt-2" border :columns="columns2" :data="tabPick === 1 ? data1 : data2">
          <template slot-scope="{ index }" slot="Action">
            <Button type="error" class="mr-1" @click="remove(index)">
              删除
            </Button>
          </template>
        </Table>
      </Content>
    </Layout>
  </div>
</template>
<script>
export default {
  props: {
    tabPick: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      columns1: [
        {
          title: '序号',
          key: 'FId',
          align: 'center',
        },
        {
          title: '标题',
          key: 'FTitle',
          align: 'center',
        },
        {
          title: '内容',
          key: 'FContent',
          align: 'center',
        },
        {
          title: '发件人',
          key: 'FSender',
          align: 'center',
        },
        {
          title: '收件人',
          key: 'FReceiver',
          align: 'center',
        },
        {
          title: '发送日期',
          key: 'FSendDate',
          align: 'center',
        },
        {
          title: '操作',
          slot: 'Action',
          align: 'center',
        },
      ],
      columns2: [
        {
          title: '序号',
          key: 'FId',
          align: 'center',
        },
        {
          title: '标题',
          key: 'FTitle',
          align: 'center',
        },
        {
          title: '内容',
          key: 'FContent',
          align: 'center',
        },
        {
          title: '收件人',
          key: 'FReceiver',
          align: 'center',
        },
        {
          title: '发送日期',
          key: 'FSendDate',
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
          FId: 1,
          FTitle: '测试',
          FContent: '测试用户消息',
          FSender: 'even',
          FReceiver: 'Jim',
          FSendDate: '2019-03-21 20:41:45',
        },
        {
          FId: 12,
          FTitle: '测试',
          FContent: '测试用户消息2',
          FSender: 'even2',
          FReceiver: 'Jim2',
          FSendDate: '2019-03-21 20:45:45',
        },
      ],
      data1: [
        {
          FId: 1,
          FTitle: '测试',
          FContent: '测试用户优惠通知',
          FSender: 'even',
          FReceiver: 'Jim',
          FSendDate: '2019-03-21 20:41:45',
        },
        {
          FId: 12,
          FTitle: '测试',
          FContent: '测试用户优惠通知2',
          FSender: 'even2',
          FReceiver: 'Jim2',
          FSendDate: '2019-03-21 20:45:45',
        },
      ],
      data2: [
        {
          FId: 1,
          FTitle: '测试',
          FContent: '测试用户存取消息',
          FSender: 'even',
          FReceiver: 'Jim',
          FSendDate: '2019-03-21 20:41:45',
        },
        {
          FId: 12,
          FTitle: '测试',
          FContent: '测试用户存取消息2',
          FSender: 'even2',
          FReceiver: 'Jim2',
          FSendDate: '2019-03-21 20:45:45',
        },
      ],
    };
  },
  methods: {
    toPage(path) {
      this.$router.push({
        path: path,
      });
    },
    remove(ind) {
      if (this.tabPick === 0) {
        this.data.splice(ind, 1);
      } else if (this.tabPick === 1) {
        this.data1.splice(ind, 1);
      } else {
        this.data2.splice(ind, 1);
      }
    },
  },
};
</script>
