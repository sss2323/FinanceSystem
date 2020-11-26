<template>
  <div>
    <Layout>
      <Content>
        <Card>
          <p slot="title">
            系统设置
          </p>
          <Row>
            <Col span="18" push="4">
            <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;margin-top: 8px;">
              <Checkbox
                :indeterminate="indeterminate"
                :value="checkAll"
                @click.prevent.native="handleCheckAll('checkAllGroup')"
              >
                全选
              </Checkbox>
            </div>
            <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange('checkAllGroup')">
              <Checkbox label="人民币"></Checkbox>
              <Checkbox label="美元"></Checkbox>
              <Checkbox label="港币"></Checkbox>
              <Checkbox label="澳门"></Checkbox>
              <Checkbox label="台币"></Checkbox>
              <Checkbox label="新币"></Checkbox>
              <Checkbox label="澳元"></Checkbox>
              <Checkbox label="日元"></Checkbox>
              <Checkbox label="比索"></Checkbox>
            </CheckboxGroup>
            <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;margin-top: 13px;">
              <Checkbox
                :indeterminate="indeterminate2"
                :value="checkAll2"
                @click.prevent.native="handleCheckAll('checkAllGroup2')"
              >
                全选
              </Checkbox>
            </div>
            <CheckboxGroup v-model="checkAllGroup2" @on-change="checkAllGroupChange('checkAllGroup2')">
              <Checkbox label="人民币"></Checkbox>
              <Checkbox label="美元"></Checkbox>
              <Checkbox label="港币"></Checkbox>
              <Checkbox label="澳门"></Checkbox>
              <Checkbox label="台币"></Checkbox>
              <Checkbox label="新币"></Checkbox>
              <Checkbox label="澳元"></Checkbox>
              <Checkbox label="日元"></Checkbox>
              <Checkbox label="比索"></Checkbox>
            </CheckboxGroup>
            <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;margin-top: 13px;">
              <Checkbox
                :indeterminate="indeterminate3"
                :value="checkAll3"
                @click.prevent.native="handleCheckAll('checkAllGroup3')"
              >
                全选
              </Checkbox>
            </div>
            <CheckboxGroup v-model="checkAllGroup3" @on-change="checkAllGroupChange('checkAllGroup3')">
              <Checkbox label="人民币"></Checkbox>
              <Checkbox label="美元"></Checkbox>
              <Checkbox label="港币"></Checkbox>
              <Checkbox label="澳门"></Checkbox>
              <Checkbox label="台币"></Checkbox>
              <Checkbox label="新币"></Checkbox>
              <Checkbox label="澳元"></Checkbox>
              <Checkbox label="日元"></Checkbox>
              <Checkbox label="比索"></Checkbox>
            </CheckboxGroup>
            <div>
              <Switch size="large">
                <span slot="open">开启</span>
                <span slot="close">关闭</span>
              </Switch>
            </div>
            </Col>
            <Col span="6" pull="18">
            <div>
              <div class="centerTitle">
                交易账单窗口
              </div>
              <div class="centerTitle">
                系统货币选项
              </div>
              <div class="centerTitle">
                外币账户选项
              </div>
              <div class="centerTitle">
                双账号审核
              </div>
            </div>
            </Col>
          </Row>
        </Card>
      </Content>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
       value2: 1,
       indeterminate: true,
       indeterminate2: true,
       indeterminate3: true,
        checkAll: false,
        checkAll2: false,
        checkAll3: false,
        checkAllGroup: ['人民币', '美元'],
        checkAllGroup2: ['人民币', '美元'],
        checkAllGroup3: ['人民币', '美元'],

    };
  },
  methods: {
    handleCheckAll (data) {
      const checkData = ['人民币', '美元', '港币', '澳门', '台币', '新币', '澳元', '日元', '比索'];
      switch (data) {
        case 'checkAllGroup':
        if (this.indeterminate) {
                  this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;

                if (this.checkAll) {
                    this.checkAllGroup = checkData;
                } else {
                    this.checkAllGroup = [];
                }
                break;
        case 'checkAllGroup2':
          if (this.indeterminate2) {
                  this.checkAll2 = false;
                } else {
                    this.checkAll2 = !this.checkAll2;
                }
                this.indeterminate2 = false;

                if (this.checkAll2) {
                    this.checkAllGroup2 = checkData;
                } else {
                    this.checkAllGroup2 = [];
                }
                break;
         case 'checkAllGroup3':
          if (this.indeterminate3) {
                  this.checkAll3 = false;
                } else {
                    this.checkAll3 = !this.checkAll3;
                }
                this.indeterminate3 = false;

                if (this.checkAll3) {
                    this.checkAllGroup3 = checkData;
                } else {
                    this.checkAllGroup3 = [];
                }
                break;
      }
       },
            checkAllGroupChange (data) {
              switch (data) {
                case 'checkAllGroup':
                if (data.length === 3) {
                    this.indeterminate = false;
                    this.checkAll = true;
                } else if (data.length > 0) {
                    this.indeterminate = true;
                    this.checkAll = false;
                } else {
                    this.indeterminate = false;
                    this.checkAll = false;
                }
                break;
                case 'checkAllGroup2':
                if (data.length === 3) {
                    this.indeterminate2 = false;
                    this.checkAll2 = true;
                } else if (data.length > 0) {
                    this.indeterminate2 = true;
                    this.checkAll2 = false;
                } else {
                    this.indeterminate2 = false;
                    this.checkAll2 = false;
                }
                break;
                case 'checkAllGroup3':
                if (data.length === 3) {
                    this.indeterminate3 = false;
                    this.checkAll3 = true;
                } else if (data.length > 0) {
                    this.indeterminate3 = true;
                    this.checkAll3 = false;
                } else {
                    this.indeterminate3 = false;
                    this.checkAll3 = false;
                }
              }
            },
  },

};
</script>
<style scoped>
.centerTitle{
     margin: 15px 0px 30px 0px;
    background: #eee;
    height: 40px;
    line-height: 40px;
    width: 154px;
    padding: 0 0 0 35px;
}
</style>
