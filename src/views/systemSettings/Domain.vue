<template>
  <div>
    <Layout>
      <Content>
        <Card>
          <p slot="title">
            域名设置
          </p>
          <div class="mt-2">
            <Row type="flex" justify="start" align="middle">
              <i-Col class="text-align mr-1">
                <label>站点类型:</label>
              </i-Col>
              <i-Col class="mr-5" span="3">
                <Select v-model="webType">
                  <Option v-for="item in webTypeList" :value="item.value" :key="item.value">
                    {{item.label}}
                  </Option>
                </Select>
              </i-Col>
              <i-Col class="text-align mr-1">
                <label>选择公司:</label>
              </i-Col>
              <i-Col class="mr-5" span="3">
                <Select v-model="modelCompany">
                  <Option v-for="item in companyList" :value="item.value" :key="item.value">
                    {{item.label}}
                  </Option>
                </Select>
              </i-Col>
              <i-Col class="text-align mr-1">
                <label>域名:</label>
              </i-Col>
              <i-Col class="mr-2" span="4">
                <Input class="input" />
              </i-Col>
              <i-Col>
                <Button type="success" class="mr-2">
                  查询
                </Button>
              </i-Col>
            </Row>
          </div>
          <Table class="mt-2" border :columns="columns" :data="data">
            <template slot="FDomainName">
              <CheckboxGroup v-model="checkAllGroup">
                <Checkbox label="登录域名" class="mr-5"></Checkbox>
                <Checkbox label="推广域名"></Checkbox>
              </CheckboxGroup>
            </template>
          </Table>
          <br>
          <Page :total="100" show-elevator show-total :page-size="5" />
          <Row>
            <i-Col span="6" offset="12">
              <Button type="success" class="btn save">
                保存
              </Button>
            </i-Col>
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
      webType: 'all',
      modelCompany: 'all',
      checkAllGroup: [],
      columns: [
        {
          title: '域名',
          key: 'FDomain',
          align: 'center',
        },
        {
          title: '站点类型',
          key: 'FWebType',
          align: 'center',
        },
        {
          title: '公司名称',
          key: 'FCompanyName',
          align: 'center',
        },
        {
          title: '域名类型',
          slot: 'FDomainName',
          align: 'center',
        },
      ],
      data: [
        {
          FDomain: 'http://gsnsweb.add177.com/',
          FWebType: 'PC前台站点',
          FCompanyName: '南山娱乐x077',
        },
      ],
      webTypeList: [
        {
          value: 'all',
          label: '全部',
        },
        {
          value: 'pc',
          label: 'PC前台站点',
        },
        {
          value: 'mobile',
          label: '手机前台站点',
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
          label: '南山娱乐x007',
        },
      ],
    };
  },
};
</script>
