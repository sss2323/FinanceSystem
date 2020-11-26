<template>
  <div>
    <Layout>
      <Content>
        <Card>
          <p slot="title">
            管理员列表
          </p>
          <div class="mt-2">
            <Row type="flex" justify="start" align="middle">
              <i-Col>
                <Button type="success" class="mr-2" @click="paramAdd=true">
                  添加管理员
                </Button>
                <Modal v-model="paramAdd" class-name="vertical-center-modal">
                  <p slot="header">
                    添加管理员
                  </p>
                  <Form :label-width="80">
                    <FormItem label="角色名称">
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
              </i-Col>
              <span class="user-time">
                <label>日期 :</label>
                <DatePicker type="datetimerange" format="yyyy-MM-dd" placeholder="请选择时间段" style="width: 200px"></DatePicker>
              </span>
              <i-Col class="ml-4 mr-1">
                <label>用户名:</label>
              </i-Col>
              <i-Col class="ml-1 mr-4" span="2">
                <Input style="width: 150px" />
              </i-Col>
              <i-Col>
                <Button type="success" class="mr-2">
                  查询
                </Button>
              </i-Col>
            </Row>
          </div>
          <Table class="mt-2" border :columns="columns" :data="data">
            <template slot="Action">
              <Button type="success" class="mr-3" @click="paramEdit=true">
                编辑
              </Button>
              <Modal v-model="paramEdit" class-name="vertical-center-modal">
                <p slot="header">
                  修改
                </p>
                <Form :label-width="80">
                  <FormItem label="名称">
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
              <Button type="error" class="mr-3">
                删除
              </Button>
            </template>
          </Table>
        </Card>
      </Content>
      <Footer>
        <Page :total="11" show-elevator show-total :page-size="5" />
      </Footer>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      paramAdd: false,
      paramEdit: false,
      status: 'start',
      columns: [
        {
          title: '序号',
          key: 'FName',
          align: 'center',
          width: 100,
        },
         {
          title: '用户名',
          key: 'FName',
          align: 'center',
        },
         {
          title: '注册时间',
          key: 'FName',
          align: 'center',
        },
         {
          title: '部门',
          key: 'FName',
          align: 'center',
        },
         {
          title: '职位',
          key: 'FName',
          align: 'center',
        },
         {
          title: '状态',
          key: 'FName',
          align: 'center',
        },
        {
          title: '备注',
          key: 'FRemarks',
          align: 'center',
        },
         {
          title: '操作时间',
          key: 'FName',
          align: 'center',
        },
         {
          title: '操作人',
          key: 'FName',
          align: 'center',
        },
        {
          title: '操作',
          slot: 'Action',
          align: 'center',
          width: 200,
        },
      ],
      data: [
        {
          FName: 'admin',
          FRemarks: '产品测试',
        },
        {
          FName: '运营',
          FRemarks: '...',
        },
      ],
    };
  },
  methods: {
    remove() {

    },
  },

};
</script>
<style scoped>
.input {
  width: 300px;
}
</style>
