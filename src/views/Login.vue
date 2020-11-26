<template>
  <div style="height:100vh;" class="d-flex flex-middle">
    <Card :padding="0" style="width:600px;height:470px;margin:-20px auto 0;">
      <row>
        <i-col span="12">
          <img src="../assets/images/login_bg.jpg" width="100%" style="display:block">
        </i-col>
        <i-col span="12" class="d-flex flex-middle flex-center" style="height:470px;">
          <Form ref="form" :model="form" :rules="ruleInline" @submit.native.prevent="handleSubmit">
            <h3 class="text-center py-2">
              登录
            </h3>
            <FormItem prop="user">
              <i-Input type="text" v-model="form.user" placeholder="用户名">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
              </i-Input>
            </FormItem>
            <FormItem prop="password">
              <i-Input type="password" v-model="form.password" placeholder="密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </i-Input>
            </FormItem>
            <FormItem class="text-center">
              <Button type="primary" :disabled="isSubmitting" html-type="submit">
                {{isSubmitting?'正在登陆中...': '登录'}}
              </Button>
            </FormItem>
          </Form>
        </i-col>
      </row>
    </Card>
  </div>
</template>

<script>
import md5 from 'blueimp-md5';
import Login from '../services/api/login.js';
export default {
  data() {
    return {
      isSubmitting: false,
      form: {
        user: '',
        password: '',
      },
      ruleInline: {
        user: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度不能少于6位', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    handleSubmit() {
      if (this.isSubmitting) return;
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.isSubmitting = true;
          const { user, password } = this.form;
          Login.post({ UserName: user, Password: md5(md5(password)), ValidateCode: '' }).then(res => {
            if (res.Status) {
              this.$utils.session.set('user', {
                account: user,
              });
              this.$router.replace('/');
            } else {
              this.$Message.error(res.Info);
            }
          }).finally(() => this.isSubmitting = false);
        }
      });
    },
  },
};
</script>
