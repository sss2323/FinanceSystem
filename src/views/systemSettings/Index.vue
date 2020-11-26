<template>
  <div>
    <Card>
      <p slot="title">
        参数设置
      </p>
      <Table class="mt-2" border :columns="columns" :data="data">
        <template slot-scope="{row}" slot="FValue">
          <div v-if="row.FName === 'IPBlacklist'">
            <Input class="input" />
          </div>
          <div v-else>
            <CheckboxGroup v-model="checkAllGroup">
              <Checkbox label="仅限中国大陆访问" class="mr-5"></Checkbox>
              <Checkbox label="仅限中国之外访问"></Checkbox>
            </CheckboxGroup>
          </div>
        </template>
      </Table>
    </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkAllGroup: [],
      columns: [
        {
          title: '系统名称',
          key: 'FName',
          align: 'center',
        },
        {
          title: '参数属性',
          key: 'FAttribute',
          align: 'center',
        },
        {
          title: '参数值',
          slot: 'FValue',
          align: 'center',
        },
        {
          title: '参数描述',
          key: 'FDescription',
          align: 'left',
        },
      ],
      data: [
        {
          FName: 'IPBlacklist',
          FAttribute: 'IP黑名单',
          FDescription: 'IP黑名单,被限制IP将无法访问本站。多IP之间“|”隔开',
        },
        {
          FName: 'IPAreaVisitLimit',
          FAttribute: '前台IP地区访问限制',
          FDescription: '针对后台IP地区访问限制,不勾选默认全部都可以访问,勾选后,只有勾选区域能访问',
        },
      ],

    };
  },

};
</script>
