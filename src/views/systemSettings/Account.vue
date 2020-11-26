<template>
  <div>
    <Layout>
      <Content>
        <Card>
          <p slot="title">
            后台账户管理
          </p>
          <div class="mt-2">
            <Row type="flex" justify="space-between">
              <i-Col>
                <Button type="success" class="mr-2" @click="paramAdd=true">
                  +添加
                </Button>
                <Button type="error" class="mr-2">
                  -批量删除
                </Button>
                <Modal v-model="paramAdd" class-name="vertical-center-modal">
                  <p slot="header">
                    添加账户
                  </p>
                  <Form :label-width="80">
                    <FormItem label="账号">
                      <!-- <Input class="input" v-model="paramData.FMinCarry" /> -->
                      <Input class="input" />
                    </FormItem>
                    <FormItem label="昵称">
                      <!-- <Input class="input" v-model="paramData.FMaxCarry" /> -->
                      <Input class="input" />
                    </FormItem>
                    <FormItem label="密码">
                      <!-- <Input class="input" v-model="paramData.FAnte" /> -->
                      <Input class="input" />
                    </FormItem>
                    <FormItem label="状态">
                      <RadioGroup v-model="status2">
                        <Radio v-for="item in statusList2" :key="item.value" :label="item.label" size="large" class="mr-4"></Radio>
                      </RadioGroup>
                    </FormItem>
                    <FormItem label="权限">
                      <Select v-model="authModel" style="width: 300px">
                        <Option v-for="item in authList" :value="item.value" :key="item.value">
                          {{item.label}}
                        </Option>
                      </Select>
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
            </Row>
          </div>
          <Table class="mt-2" border :columns="columns" :data="data">
            <template slot="FAccStatus">
              <Select v-model="status">
                <Option v-for="item in statusList" :value="item.value" :key="item.value">
                  {{item.label}}
                </Option>
              </Select>
            </template>
            <template slot-scope="{ index }" slot="Action">
              <Button type="success" class="mr-3" @click="paramEdit=true">
                编辑
              </Button>
              <Button type="error" @click="remove(index)">
                删除
              </Button>
              <Modal v-model="paramEdit" class-name="vertical-center-modal">
                <p slot="header">
                  添加账户
                </p>
                <Form :label-width="80">
                  <FormItem label="账号">
                    <!-- <Input class="input" v-model="paramData.FMinCarry" /> -->
                    <Input class="input" />
                  </FormItem>
                  <FormItem label="昵称">
                    <!-- <Input class="input" v-model="paramData.FMaxCarry" /> -->
                    <Input class="input" />
                  </FormItem>
                  <FormItem label="密码">
                    <!-- <Input class="input" v-model="paramData.FAnte" /> -->
                    <Input class="input" />
                  </FormItem>
                  <FormItem label="状态">
                    <RadioGroup v-model="status2">
                      <Radio v-for="item in statusList2" :key="item.value" :label="item.label" size="large" class="mr-4"></Radio>
                    </RadioGroup>
                  </FormItem>
                  <FormItem label="权限">
                    <Select v-model="authModel" style="width: 300px">
                      <Option v-for="item in authList" :value="item.value" :key="item.value">
                        {{item.label}}
                      </Option>
                    </Select>
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
            </template>
          </Table>
        </Card>
      </Content>
      <Footer>
        <Page :total="100" show-elevator show-total :page-size="5" />
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
      status2: '启用',
      authModel: 'choose',
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center',
        },
        {
          title: '账号',
          key: 'FAccount',
          width: 80,
          align: 'center',
        },
        {
          title: '昵称',
          key: 'FNickName',
          width: 80,
          align: 'center',
        },
        {
          title: '角色权限',
          key: 'FAuthority',
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
          title: 'Google验证码',
          key: 'FVerifiedCode',
          align: 'center',
        },
        {
          title: '账号状态',
          slot: 'FAccStatus',
          align: 'center',
        },
        {
          title: '最后登录时间',
          key: 'FLastLoginTime',
          align: 'center',
        },
        {
          title: '最后登录IP',
          key: 'FLastLoginIP',
          align: 'center',
        },
        {
          title: '操作',
          slot: 'Action',
          width: 300,
          align: 'center',
        },
      ],
      statusList: [
        {
          value: 'start',
          label: '启用',
        },
        {
          value: 'stop',
          label: '停用',
        },
        {
          value: 'pause',
          label: '暂停',
        },
      ],
      statusList2: [
        {
          value: 'start',
          label: '启用',
        },
        {
          value: 'stop',
          label: '停用',
        },
      ],
      authList: [
        {
          value: 'choose',
          label: '请选择角色权限...',
        },
        {
          value: 'staff',
          label: '风控员工',
        },
        {
          value: 'manager',
          label: '运营主管',
        },
        {
          value: 'others',
          label: '...根据角色权限管理设置联动显示',
        },
      ],
      data: [
        {
          FAccount: 'cesi123',
          FNickName: ' 子账号',
          FAuthority: '风控员工',
          FCreator: 'hctest',
          FCreateTime: '2019-03-04 16:24:43',
          FVerifiedCode: '已绑定',
          FLastLoginTime: '2018-11-09 14:09:28',
          FLastLoginIP: '45.251.110.30',
        },
      ],
    };
  },
  methods: {
  },

};
</script>
<style scoped>
.input {
  width: 300px;
}
</style>
