<template>
  <div>
    <Layout>
      <Content>
        <Card>
          <p slot="title">
            银行管理
          </p>
          <div class="mt-2">
            <Row type="flex" justify="space-between">
              <i-Col>
                <Button type="warning" @click="paramAdd=true">
                  新增
                </Button>
                <Modal v-model="paramAdd" class-name="vertical-center-modal">
                  <p slot="header">
                    添加角色
                  </p>
                  <Form :label-width="80">
                    <FormItem label="银行名称">
                      <Input class="input" />
                    </FormItem>
                    <FormItem label="银行简称">
                      <Input class="input" />
                    </FormItem>
                    <FormItem label="银行网址">
                      <Input class="input" />
                    </FormItem>
                    <FormItem label="状态">
                      <Input class="input" />
                    </FormItem>
                    <FormItem label="银行排序">
                      <Input class="input" />
                    </FormItem>
                    <FormItem class="text-error">
                      <p>注：银行名称添加成功后不能编辑</p>
                      <p>注：状态：默认启用，禁用前台不显示</p>
                      <p>注：排序：数字越大</p>
                    </FormItem>
                  </Form>
                  <div slot="footer">
                    <Button type="success" size="large">
                      确定
                    </Button>
                    <Button type="error" size="large">
                      取消
                    </Button>
                  </div>
                </Modal>
              </i-Col>
            </Row>
          </div>
          <!-- 表格处理 通过插槽处理状态icon和操作按钮 -->
          <Table border :columns="columns" :data="data" class="dataTable mt-3">
            <template slot-scope="{ row }" slot="FStatus">
              <span v-if="row.FStatus === 1">
                <Icon type="md-checkmark-circle" size="24" class="text-success" />
                <strong class="iconNormal">已启用</strong>
              </span>
              <span v-else>
                <Icon type="md-close-circle" size="24" class="text-error" />
                <strong class="iconClose">已关闭</strong>
              </span>
            </template>
            <template slot="action">
              <Button type="success" ghost>
                编辑
              </Button>
            </template>
          </Table>
        </Card>
      </Content>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      paramAdd: false,
      columns: [
        {
          title: '序号',
          key: 'FOrderNo',
          width: 60,
          align: 'center',
        },
        {
          title: '银行名称',
          key: 'FBankName',
          align: 'center',
        },
        {
          title: '银行简称',
          key: 'FBankAbbr',
          align: 'center',
        },
        {
          title: '网址',
          key: 'FWebsite',
          width: 600,
          align: 'center',
        },
        {
          title: '状态',
          slot: 'FStatus',
          align: 'center',
        },
        {
          title: '银行排序',
          key: 'FBankOrder',
          align: 'center',
        },
        {
          title: '操作',
          slot: 'action',
          fixed: 'right',
          align: 'center',
        },
      ],
      data: [],
    };
  },
  methods: {

  },
  created() {
  },
};
</script>
<style scoped>
.input {
  width: 300px;
}
</style>
