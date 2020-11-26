<style scoped>
.layout {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.ivu-dropdown-item{
  height: 50px;
  line-height: 39px;
  cursor: pointer;
}
</style>
<template>
  <div class="layout">
    <Layout style="height:100vh">
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <div class="text-center">
          <img src="../assets/logo.png" height="40" />
        </div>
        <v-sider-menu :is-collapsed="isCollapsed" />
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar px-3">
          <Row type="flex" justify="space-between" class="code-row-bg">
            <i-col span="2">
              <Icon @click.native="collapsedSider" :class="rotateIcon" type="md-menu" size="24" />
            </i-col>
            <i-col span="8"></i-col>
            <i-col span="2" class="text-right">
              <Dropdown>
                <span style="color: red;font-weight: bold;margin:0 10px">{{userName}}</span>
                <Avatar icon="ios-person" size="large" />
                <Icon type="md-arrow-dropdown" size="24" />
                <DropdownMenu slot="list">
                  <!-- <DropdownItem class="flex-middle">
                    <Icon class="normal" type="md-home" size="16" />
                    <span>首页</span>
                  </DropdownItem> -->
                  <DropdownItem class="flex-middle">
                    <Icon type="ios-ionitron-outline" size="16" />
                    <span @click="instance('userInfo')">个人资料</span>
                  </DropdownItem>
                  <DropdownItem class="flex-middle">
                    <Icon type="md-lock" size="16" />
                    <span @click="ModalEditPassword = true">修改密码</span>
                  </DropdownItem>
                  <DropdownItem class="flex-middle">
                    <Icon type="md-power" size="16" />
                    <span @click="instance('exit')">安全退出</span>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </i-col>
          </Row>
          <Modal title="修改密码" v-model="ModalEditPassword" class-name="vertical-center-modal" width="350">
            <Form :label-width="80" ref="formInline" :model="formInline" :rules="ruleInline">
              <FormItem label="原始密码:" prop="originalPw">
                <Input class="input" v-model="formInline.originalPw" type="password" />
              </FormItem>
              <FormItem label="新密码:" prop="newPassword">
                <Input class="input" v-model="formInline.newPassword" type="password" />
              </FormItem>
              <FormItem label="确认密码:" prop="confirmPw">
                <Input class="input" v-model="formInline.confirmPw" type="password" />
              </FormItem>
              <!-- 新密码  ：<Input v-model="formInline.newPassword" type="password" placeholder="请输入新密码..." style="width: 200px;margin: 32px 11px;" /><br> -->
              <!-- 确认密码：<Input v-model="formInline.confirmPw" type="password" placeholder="请输入确认密码..." style="width: 200px" /> -->
            </Form>
            <div slot="footer">
              <Button type="error" size="large" @click="ModalEditPassword = false">
                取消
              </Button>
              <Button type="success" size="large" @click="passwordSubmit('formInline')">
                确定
              </Button>
            </div>
          </Modal>
        </Header>
        <Content class="m-3" :style="{background: '#fff', minHeight: '260px'}">
          <!-- <Tabs type="card" closable>
            <TabPane label="标签一" v-if="tab0">
              标签一的内容
            </TabPane>
            <TabPane label="标签二" v-if="tab1">
              标签二的内容
            </TabPane>
            <TabPane label="标签三" v-if="tab2">
              标签三的内容
            </TabPane>
          </Tabs> -->
          <router-view />
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import vSiderMenu from '../components/SiderMenu.vue';
export default {
  components: { vSiderMenu },
  data() {
    return {
      userInfoModal: false,
      isCollapsed: false,
      tab0: true,
      tab1: true,
      tab2: true,
      ModalEditPassword: false,
      userName: sessionStorage.getItem('user').substring(13, 17),
      departmentName: '',
      job: '',
      lastLoginTime: '',
      lastLoginIP: '',
      formInline: {
        originalPw: '',
        newPassword: '',
        confirmPw: '',
      },
      ruleInline: {
                    originalPw: [
                        { required: true, message: '请输入原始密码.', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码不能小于6位.', trigger: 'blur' },

                    ],
                    newPassword: [
                        { required: true, message: '请输入新密码.', trigger: 'blur' },
                        { type: 'string', min: 6, message: '新密码不能小于6位.', trigger: 'blur' },
                    ],
                     confirmPw: [
                        { required: true, message: '请输入确认密码.', trigger: 'blur' },
                    ],
                },
    };
  },
  computed: {
    rotateIcon() {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : '',
      ];
    },
    menuitemClasses() {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : '',
      ];
    },
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
    handleTabRemove (name) {
      this['tab' + name] = false;
    },
    instance (type) {
                const title = '账户资料';
                const content = ' <br><p>用户名：<span style="color: red;font-weight: bold;">' + this.userName + '</span></p><br>' +
                                '<p>部门所属：<span style="color: red;font-weight: bold;">' + this.departmentName + '</span></p> <br>' +
                                '<p>职位：<span style="color: red;font-weight: bold;">' + this.job + '</span></p> <br>' +
                                '<p>最后登录时间：<span style="color: red;font-weight: bold;">' + this.lastLoginTime + '</span></p> <br>' +
                                '<p>最后登录IP：<span style="color: red;font-weight: bold;">' + this.lastLoginIP + '</span> </p><br>';
                const titleExit = '提示';
                const contentExit = '您确定要退出吗？';
                switch (type) {
                    case 'userInfo':
                        this.$Modal.info({
                            title: title,
                            content: content,
                        });
                        break;
                        case 'exit':
                        this.$Modal.confirm({
                            title: titleExit,
                            content: contentExit,
                             onOk: () => {
                        this.$Message.info('Clicked ok');
                        this.$router.push({ path: '/login' });
                        this.sessionStorage.set('');
                    },
                        });
                        break;
                }
            },
             passwordSubmit(name) {
                this.$refs[name].validate((valid) => {
                  let _this = this;
                    if (valid) {
                        if (_this.formInline.originalPw === _this.formInline.newPassword) {
                        this.$Message.error('新密码不能和旧密码一致!');
                        _this.formInline.newPassword = '';
                        _this.formInline.confirmPw = '';
                        return;
                        if (_this.formInline.newPassword !== _this.formInline.confirmPw) {
                        this.$Message.error('两次密码输入不致!');
                        _this.formInline.newPassword = '';
                        _this.formInline.confirmPw = '';
                        }
                        } else {
                            this.$Message.success('Success!');
                            this.ModalEditPassword = false;
                        }
                } else {
                        this.$Message.error('Fail!');
                    }
                });
              //  console.log(this.formInline.originalPw);
              // console.log(this.formInline.newPassword);
              // console.log(this.formInline.confirmPw);
    },
  },
};
</script>
