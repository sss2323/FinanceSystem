<template>
  <div>
    <Layout>
      <Content>
        <Card>
          <p slot="title">
            部门和权限设置
          </p>
          <div class="mt-2">
            <Row type="flex" justify="start" align="middle">
              <i-Col>
                <Button type="success" class="mr-2" @click="paramAdd=true">
                  添加部门
                </Button>
                <Button type="success" class="mr-2" @click="paramJob=true">
                  添加职位
                </Button>
                <span class="user-time">
                  <label>日期 :</label>
                  <DatePicker type="daterange" format="yyyy-MM-dd" split-panels v-model="selectTime" @on-change="userDataList(selectTime=$event,searchName)" placeholder="请选择日期" style="width: 200px"></DatePicker>
                </span>
                <Modal v-model="paramAdd" class-name="vertical-center-modal">
                  <p slot="header">
                    添加部门
                  </p>
                  <Form :label-width="80" ref="formInline" :model="formInline" :rules="ruleInline">
                    <FormItem label="部门名称" prop="departmentName">
                      <!-- <Input class="input" v-model="paramData.FMinCarry" /> -->
                      <Input class="input" v-model="formInline.departmentName " />
                    </FormItem>
                  </Form>
                  <div slot="footer">
                    <Button type="success" size="large" @click="handleSubmit('formInline')">
                      保存
                    </Button>
                    <Button type="error" size="large" @click="paramAdd=false">
                      取消
                    </Button>
                  </div>
                </Modal>
                <Modal v-model="paramJob" class-name="vertical-center-modal">
                  <p slot="header">
                    添加职位
                  </p>
                  <Form :label-width="80" ref="formInline2" :model="formInline2" :rules="ruleInline2">
                    <span style="margin:0 0 0 20px">
                      <label for="">选择部门:</label>
                      <Select v-model="formInline2.selectDepartmentValue" style="width:300px;margin:0 0 0 8px">
                        <Option v-for="item in departmentList" :value="item.value" :key="item.value">{{item.label}}</Option>
                      </Select><br><br><br>
                    </span>
                    <FormItem label="职位名称" prop="jobName">
                      <!-- <Input class="input" v-model="paramData.FMinCarry" /> -->
                      <Input class="input" v-model="formInline2.jobName" />
                    </FormItem>
                  </Form>
                  <div slot="footer">
                    <Button type="success" size="large" @click="handleSubmit('formInline2')">
                      保存
                    </Button>
                    <Button type="error" size="large" @click="paramJob=false">
                      取消
                    </Button>
                  </div>
                </Modal>
              </i-Col>
              <i-Col class="ml-4 mr-1">
                <label>用户名:</label>
              </i-Col>
              <i-Col class="ml-1 mr-4" span="2">
                <Input style="width: 150px" v-model="searchName" />
              </i-Col>
              <i-Col>
                <Button type="success" class="mr-2 search" @click="userDataList(selectTime,searchName)">
                  查询
                </Button>
              </i-Col>
            </Row>
          </div>

          <Row style="margin:20px 0">
            <Col span="17" push="6" offset="1">
            <div style=" position: absolute; margin: 10px 0 0 -449px;">
              <div class="centerTitle">
                交易账单录入
              </div>
              <div class="centerTitle">
                交易账单审核
              </div>
              <div class="centerTitle">
                交易账单明细
              </div>
              <div class="centerTitle">
                交易流水报表
              </div>
              <div class="centerTitle">
                银行卡流水报表
              </div>
              <div class="centerTitle">
                用户管理
              </div>
              <div class="centerTitle">
                管理员列表
              </div>
              <div class="centerTitle">
                部门和权限设置
              </div>
            </div>
            <!-- 交易账单录入 -->
            <div style="padding-bottom:6px;margin-bottom:6px;">
              <Checkbox
                :indeterminate="indeterminate"
                :value="checkAll"
                @click.prevent.native="handleCheckAll('checkAllGroup')"
              >
                全选
              </Checkbox>
            </div>
            <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange('checkAllGroup')">
              <Checkbox label="查看"></Checkbox>
              <Checkbox label="新增账户"></Checkbox>
              <Checkbox label="设定"></Checkbox>
              <Checkbox label="修改"></Checkbox>
              <Checkbox label="取消"></Checkbox>
              <Checkbox label="添加"></Checkbox>
            </CheckboxGroup>
            <!-- 交易账单审核 -->
            <div style="border-top: 1px solid #e9e9e9; margin: 10px 10px 0 0;padding: 10px 0 10px;">
              <Checkbox
                :indeterminate="indeterminate2"
                :value="checkAll2"
                @click.prevent.native="handleCheckAll('checkAllGroup2')"
              >
                全选
              </Checkbox>
            </div>
            <CheckboxGroup v-model="checkAllGroup2" @on-change="checkAllGroupChange('checkAllGroup2')">
              <Checkbox label="查看"></Checkbox>
              <Checkbox label="搜索"></Checkbox>
              <Checkbox label="修改"></Checkbox>
              <Checkbox label="取消"></Checkbox>
              <Checkbox label="删除"></Checkbox>
            </CheckboxGroup>
            <div style="border-top: 1px solid #e9e9e9; margin: 10px 10px 0 0;padding: 10px 0 10px;">
              <Checkbox
                :indeterminate="indeterminate3"
                :value="checkAll3"
                @click.prevent.native="handleCheckAll('checkAllGroup3')"
              >
                全选
              </Checkbox>
            </div>
            <!-- 交易账单明细 -->
            <CheckboxGroup v-model="checkAllGroup3" @on-change="checkAllGroupChange('checkAllGroup3')">
              <Checkbox label="查看"></Checkbox>
              <Checkbox label="日期"></Checkbox>
              <Checkbox label="姓名"></Checkbox>
              <Checkbox label="汇率"></Checkbox>
              <Checkbox label="金额"></Checkbox>
              <Checkbox label="币种"></Checkbox>
              <Checkbox label="货币"></Checkbox>
              <Checkbox label="币种"></Checkbox>
              <Checkbox label="状态"></Checkbox>
              <Checkbox label="账变类型"></Checkbox>
              <Checkbox label="下载"></Checkbox>
              <Checkbox label="搜索"></Checkbox>
              <Checkbox label="设定"></Checkbox>
              <Checkbox label="报表查看"></Checkbox>
              <Checkbox label="报表取消"></Checkbox>
              <Checkbox label="报表删除"></Checkbox>
            </CheckboxGroup>
            <!--交易流水报表  -->
            <div style="border-top: 1px solid #e9e9e9; margin: 10px 10px 0 0;padding: 10px 0 10px;">
              <Checkbox
                :indeterminate="indeterminate4"
                :value="checkAll4"
                @click.prevent.native="handleCheckAll('checkAllGroup4')"
              >
                全选
              </Checkbox>
            </div>
            <CheckboxGroup v-model="checkAllGroup4" @on-change="checkAllGroupChange('checkAllGroup4')">
              <Checkbox label="查看"></Checkbox>
              <Checkbox label="日期"></Checkbox>
              <Checkbox label="姓名"></Checkbox>
              <Checkbox label="今日"></Checkbox>
              <Checkbox label="昨日"></Checkbox>
              <Checkbox label="本周"></Checkbox>
              <Checkbox label="上周"></Checkbox>
              <Checkbox label="本月"></Checkbox>
              <Checkbox label="上月"></Checkbox>
              <Checkbox label="下载"></Checkbox>
              <Checkbox label="搜索"></Checkbox>
            </CheckboxGroup>
            <!-- 银行卡流水报表 -->
            <div style="border-top: 1px solid #e9e9e9; margin: 10px 10px 0 0;padding: 10px 0 10px;">
              <Checkbox
                :indeterminate="indeterminate5"
                :value="checkAll5"
                @click.prevent.native="handleCheckAll('checkAllGroup5')"
              >
                全选
              </Checkbox>
            </div>
            <CheckboxGroup v-model="checkAllGroup5" @on-change="checkAllGroupChange('checkAllGroup5')">
              <Checkbox label="查看"></Checkbox>
              <Checkbox label="日期"></Checkbox>
              <Checkbox label="卡号"></Checkbox>
              <Checkbox label="今日"></Checkbox>
              <Checkbox label="昨日"></Checkbox>
              <Checkbox label="本周"></Checkbox>
              <Checkbox label="上周"></Checkbox>
              <Checkbox label="本月"></Checkbox>
              <Checkbox label="上月"></Checkbox>
              <Checkbox label="下载"></Checkbox>
              <Checkbox label="搜索"></Checkbox>
            </CheckboxGroup>
            <!--用户管理  -->
            <div style="border-top: 1px solid #e9e9e9; margin: 10px 10px 0 0;padding: 10px 0 10px;">
              <Checkbox
                :indeterminate="indeterminate6"
                :value="checkAll6"
                @click.prevent.native="handleCheckAll('checkAllGroup6')"
              >
                全选
              </Checkbox>
            </div>
            <CheckboxGroup v-model="checkAllGroup6" @on-change="checkAllGroupChange('checkAllGroup6')">
              <Checkbox label="查看"></Checkbox>
              <Checkbox label="日期"></Checkbox>
              <Checkbox label="姓名"></Checkbox>
              <Checkbox label="级别"></Checkbox>
              <Checkbox label="今日"></Checkbox>
              <Checkbox label="昨日"></Checkbox>
              <Checkbox label="本周"></Checkbox>
              <Checkbox label="上周"></Checkbox>
              <Checkbox label="本月"></Checkbox>
              <Checkbox label="上月"></Checkbox>
              <Checkbox label="下载"></Checkbox>
              <Checkbox label="搜索"></Checkbox>
              <Checkbox label="报表查看"></Checkbox>
              <Checkbox label="报表修改"></Checkbox>
              <Checkbox label="报表取消"></Checkbox>
              <Checkbox label="报表删除"></Checkbox>
            </CheckboxGroup>
            <!--  管理员列表-->
            <div style="border-top: 1px solid #e9e9e9; margin: 10px 10px 0 0;padding: 10px 0 10px;">
              <Checkbox
                :indeterminate="indeterminate7"
                :value="checkAll7"
                @click.prevent.native="handleCheckAll('checkAllGroup7')"
              >
                全选
              </Checkbox>
            </div>
            <CheckboxGroup v-model="checkAllGroup7" @on-change="checkAllGroupChange('checkAllGroup7')">
              <Checkbox label="查看"></Checkbox>
              <Checkbox label="日期"></Checkbox>
              <Checkbox label="用户名"></Checkbox>
              <Checkbox label="搜索"></Checkbox>
              <Checkbox label="添加用户名"></Checkbox>
              <Checkbox label="报表修改"></Checkbox>
              <Checkbox label="报表取消"></Checkbox>
              <Checkbox label="报表删除"></Checkbox>
            </CheckboxGroup>
            <!-- 部门和权限设置 -->
            <div style="border-top: 1px solid #e9e9e9; margin: 10px 10px 0 0;padding: 10px 0 10px;">
              <Checkbox
                :indeterminate="indeterminate8"
                :value="checkAll8"
                @click.prevent.native="handleCheckAll('checkAllGroup8')"
              >
                全选
              </Checkbox>
            </div>
            <CheckboxGroup v-model="checkAllGroup8" @on-change="checkAllGroupChange('checkAllGroup8')">
              <Checkbox label="查看"></Checkbox>
              <Checkbox label="日期"></Checkbox>
              <Checkbox label="用户名"></Checkbox>
              <Checkbox label="搜索"></Checkbox>
              <Checkbox label="添加部门"></Checkbox>
              <Checkbox label="添加职位"></Checkbox>
              <Checkbox label="报表修改"></Checkbox>
              <Checkbox label="报表取消"></Checkbox>
              <Checkbox label="报表删除"></Checkbox>
            </CheckboxGroup>

            </Col>
            <Col span="6" pull="18">
            <Col span="10">
            <Collapse v-model="value2" accordion>
              <Panel name="1">
                超级管理员
                <a slot="content" class="menuLeft" @click="departmentAuth(1)">
                  <p>admin</p>
                </a>
                <a slot="content" class="menuLeft">
                  CEO
                </a>
              </Panel>
              <Panel name="2">
                运营
                <p slot="content">
                  经理
                </p>
              </Panel>
              <Panel name="3">
                财务
                <p slot="content">
                  经理
                </p>
              </Panel>
            </Collapse>
            </Col>
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
      paramAdd: false,
      paramJob: false,
      selectTime: '',
      searchName: '',
      formInline: {
              departmentName: '',
      },
       ruleInline: {
                    departmentName: [
                        { required: true, message: '请输入部门名称.', trigger: 'blur' },
                    ],
                },
      formInline2: {
              jobName: '',
              selectDepartmentValue: 0,

      },
       ruleInline2: {
                     jobName: [
                        { required: true, message: '请输入职位名称.', trigger: 'blur' },
                    ],
                },
      departmentName: '',
      status: 'start',
      value2: '1',
      indeterminate: true,
      indeterminate1: true,
      indeterminate2: true,
      indeterminate3: true,
      indeterminate4: true,
      indeterminate5: true,
      indeterminate6: true,
      indeterminate7: true,
      indeterminate8: true,
      checkAll: false,
      checkAll2: false,
      checkAll3: false,
      checkAll4: false,
      checkAll5: false,
      checkAll6: false,
      checkAll7: false,
      checkAll8: false,
      checkAllGroup: ['查看', '新增账户'],
      checkAllGroup2: ['查看'],
      checkAllGroup3: ['查看'],
      checkAllGroup4: ['查看'],
      checkAllGroup5: ['查看'],
      checkAllGroup6: ['查看'],
      checkAllGroup7: ['查看'],
      checkAllGroup8: ['查看'],
      data: {},
      departmentList: [
                    {
                        value: 0,
                        label: '出',
                    },
                    {
                        value: 1,
                        label: '买入',
                    },
                    {
                        value: 2,
                        label: '客户出',
                    },
                      {
                        value: 3,
                        label: '客户买入',
                    },
                    ],
    };
  },
  methods: {
    remove() {

    },
     handleCheckAll (data) {
       switch (data) {
         case 'checkAllGroup':
            if (this.indeterminate) {
                this.checkAll = false;
            } else {
                this.checkAll = !this.checkAll;
            }
            this.indeterminate = false;
            if (this.checkAll) {
                this.checkAllGroup = ['查看', '新增账户', '设定', '修改', '取消', '添加'];
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
                this.checkAllGroup2 = ['查看', '搜索', '修改', '取消', '删除'];
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
                this.checkAllGroup3 = ['查看', '日期', '姓名', '汇率', '金额', '币种', '货币', '状态', '账变类型', '下载', '搜索', '设定', '报表查看', '报表取消', '报表删除'];
            } else {
                this.checkAllGroup3 = [];
            }
            break;
             case 'checkAllGroup4':
            if (this.indeterminate4) {
                this.checkAll4 = false;
            } else {
                this.checkAll4 = !this.checkAll4;
            }
            this.indeterminate4 = false;
            if (this.checkAll4) {
                this.checkAllGroup4 = ['查看', '日期', '姓名', '今日', '昨日', '本周', '上周', '本月', '上月', '下载', '搜索'];
            } else {
                this.checkAllGroup4 = [];
            }
            break;
             case 'checkAllGroup5':
            if (this.indeterminate5) {
                this.checkAll5 = false;
            } else {
                this.checkAll5 = !this.checkAll5;
            }
            this.indeterminate5 = false;
            if (this.checkAll5) {
                this.checkAllGroup5 = ['查看', '日期', '卡号', '今日', '昨日', '本周', '上周', '本月', '上月', '下载', '搜索'];
            } else {
                this.checkAllGroup5 = [];
            }
            break;
             case 'checkAllGroup6':
            if (this.indeterminate6) {
                this.checkAll6 = false;
            } else {
                this.checkAll6 = !this.checkAll6;
            }
            this.indeterminate6 = false;
            if (this.checkAll6) {
                this.checkAllGroup6 = ['查看', '姓名', '级别', '日期', '卡号', '今日', '昨日', '本周', '上周', '本月', '上月', '下载', '搜索', '报表查看', '报表修改', '报表取消', '报表删除'];
            } else {
                this.checkAllGroup6 = [];
            }
            break;
             case 'checkAllGroup7':
            if (this.indeterminate7) {
                this.checkAll7 = false;
            } else {
                this.checkAll7 = !this.checkAll7;
            }
            this.indeterminate7 = false;
            if (this.checkAll7) {
                this.checkAllGroup7 = ['查看', '日期', '用户名', '搜索', '添加用户名', '报表修改', '报表取消', '报表删除'];
            } else {
                this.checkAllGroup7 = [];
            }
            break;
            case 'checkAllGroup8':
            if (this.indeterminate8) {
                this.checkAll8 = false;
            } else {
                this.checkAll8 = !this.checkAll8;
            }
            this.indeterminate8 = false;
            if (this.checkAll8) {
                this.checkAllGroup8 = ['查看', '日期', '用户名', '搜索', '添加部门', '添加职位', '报表修改', '报表取消', '报表删除'];
            } else {
                this.checkAllGroup8 = [];
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
                break;
                case 'checkAllGroup4':
              if (data.length === 3) {
                    this.indeterminate4 = false;
                    this.checkAll4 = true;
                } else if (data.length > 0) {
                    this.indeterminate4 = true;
                    this.checkAll4 = false;
                } else {
                    this.indeterminate4 = false;
                    this.checkAll4 = false;
                }
                break;
                case 'checkAllGroup5':
              if (data.length === 3) {
                    this.indeterminate5 = false;
                    this.checkAll5 = true;
                } else if (data.length > 0) {
                    this.indeterminate5 = true;
                    this.checkAll5 = false;
                } else {
                    this.indeterminate5 = false;
                    this.checkAll5 = false;
                }
                break;
                case 'checkAllGroup6':
              if (data.length === 3) {
                    this.indeterminate6 = false;
                    this.checkAll6 = true;
                } else if (data.length > 0) {
                    this.indeterminate6 = true;
                    this.checkAll6 = false;
                } else {
                    this.indeterminate6 = false;
                    this.checkAll6 = false;
                }
                break;
                case 'checkAllGroup7':
              if (data.length === 3) {
                    this.indeterminate7 = false;
                    this.checkAll7 = true;
                } else if (data.length > 0) {
                    this.indeterminate7 = true;
                    this.checkAll7 = false;
                } else {
                    this.indeterminate7 = false;
                    this.checkAll7 = false;
                }
                break;
                case 'checkAllGroup8':
              if (data.length === 3) {
                    this.indeterminate8 = false;
                    this.checkAll8 = true;
                } else if (data.length > 0) {
                    this.indeterminate8 = true;
                    this.checkAll8 = false;
                } else {
                    this.indeterminate8 = false;
                    this.checkAll8 = false;
                }
                break;
          }
     },
      handleSubmit(name) {
              /* 添加部门-添加职位- */
                this.$refs[name].validate((valid) => {
                    if (valid) {
                      const _this = this.formInline;
                      if (name === 'formInline') {
                        this.paramAdd = false;
                         this.data = {
                              departmentName: _this.departmentName,
                         };
                      console.log('添加部门');
                      } else {
                         this.paramJob = false;
                         this.data = {
                              jobName: this.formInline2.jobName,
                              selectDepartmentValue: this.formInline2.selectDepartmentValue,
                         };
                          console.log('添加职位');
                      }
                          console.log(JSON.stringify(this.data));
                         this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                });
            },
    userDataList(time, name) {
               let data = {
                 timeValue: time,
                 searchName: name,
                };
               console.log(JSON.stringify(data));
             },
             departmentAuth(index) {
             this.checkAllGroup = ['修改', '取消', '添加'];
             },

  },

};
</script>
<style scoped>
.input {
  width: 300px;
}
.search{
  margin:0 -92px;
}
.centerTitle{
     margin: 15px 0px 30px 258px;
    background: #eee;
    height: 40px;
    line-height: 40px;
    width: 154px;
    padding: 0 0 0 35px;
}
.menuLeft{
  display: block;
    border-bottom: 1px solid;
    padding: 1px 35%;
}
</style>
