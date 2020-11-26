<template>
  <div>
    <Layout>
      <Content>
        <Card>
          <p slot="title">
            后台IP白名单
          </p>
          <div class="mt-2">
            <Row type="flex" justify="space-between">
              <i-Col>
                <Button type="success" @click="paramAdd=true" class="mr-4">
                  +添加IP
                </Button>
                <Modal v-model="paramAdd" class-name="vertical-center-modal">
                  <p slot="header">
                    添加IP
                  </p>
                  <Form :label-width="80">
                    <FormItem label="IP地址">
                      <!-- <Input class="input" v-model="paramData.FMinCarry" /> -->
                      <Input class="input" />
                    </FormItem>
                    <FormItem label="描述">
                      <!-- <Input class="input" v-model="paramData.FMaxCarry" /> -->
                      <Input class="input" type="textarea" :rows="8" />
                    </FormItem>
                  </Form>
                  <div slot="footer">
                    <Button type="success" size="large">
                      保存
                    </Button>
                    <Button type="error" size="large">
                      取消
                    </Button>
                  </div>
                </Modal>
                <Button type="error">
                  -批量删除
                </Button>
              </i-Col>
            </Row>
          </div>
          <!-- 表格处理 通过插槽处理状态icon和操作按钮 -->
          <Table border :columns="columns" :data="data" class="dataTable mt-3">
            <template slot="action">
              <Button type="success" ghost>
                编辑
              </Button>
              <Button type="error" ghost>
                删除
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
          type: 'selection',
          width: 60,
          align: 'center',
        },
        {
          title: 'IP地址',
          key: 'FIPAddress',
          align: 'center',
        },
        {
          title: '描述',
          key: 'FDescription',
          align: 'center',
        },
        {
          title: '创建人',
          key: 'FCreator',
          align: 'center',
        },
        {
          title: '创建时间',
          key: 'FCreateTime',
          align: 'center',
        },
        {
          title: '最后修改人',
          key: 'FFinalEditor',
          align: 'center',
        },
        {
          title: '最后修改时间',
          key: 'FEditTime',
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
};
</script>
