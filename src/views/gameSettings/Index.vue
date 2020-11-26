<template>
  <div>
    <Layout>
      <Content>
        <div class="mt-2">
          <Row type="flex" justify="space-between">
            <i-Col>
              <Button type="warning" @click="sort">
                **排序
              </Button>
              <Modal v-model="sortGame">
                <p slot="header">
                  **排序
                </p>
                <p style="color: #ed4014">
                  温馨提示：排序权重序号越大，显示越靠前
                </p>
                <Table border ref="table" :columns="columns2" :data="sortData">
                  <template slot-scope="{index }" slot="FSort">
                    <Input style="width: 60%" v-model="sortData[index].FSort" />
                  </template>
                </Table>
                <div slot="footer">
                  <Button type="success" size="large" :loading="modal_loading" @click="updateGameSort">
                    保存
                  </Button>
                  <Button type="error" size="large" @click="cancel">
                    取消
                  </Button>
                </div>
              </Modal>
            </i-Col>
            <i-Col>
              <Select v-model="model1" class="selectWidth" @on-change="onChange">
                <Option v-for="item in statusList" :value="item.value" :key="item.value">
                  {{item.label}}
                </Option>
              </Select>
            </i-Col>
          </Row>
        </div>
        <!-- 表格处理 通过插槽处理状态icon和操作按钮 -->
        <Table border :columns="columns1" :data="tableData" class="dataTable mt-3">
          <template slot-scope="{ row }" slot="FStatus">
            <span v-if="row.FStatus === 1">
              <Icon type="md-checkmark-circle" size="24" color="#19be6b" />
              <strong class="iconNormal">正常</strong>
            </span>
            <span v-else>
              <Icon type="md-close-circle" size="24" color="#ed4014" />
              <strong class="iconClose">关闭</strong>
            </span>
          </template>
          <template slot-scope="{ row, index }" slot="action">
            <span v-if="row.FStatus === 1">
              <Button type="success" class="mr-5" @click="updateGameStatus(index)">禁用</Button>
            </span>
            <span v-else>
              <Button type="error" class="mr-5" @click="updateGameStatus(index)">启用</Button>
            </span>
            <Button type="warning" @click="enterRoom(index)">
              房间管理
            </Button>
          </template>
        </Table>
      </Content>
    </Layout>
  </div>
</template>
<script>
import RequestGame from '../../services/api/gameSetting';
// import RequestPublic from '../../services/api/public';

export default {
  data() {
    return {
      sortGame: false,
      modal_loading: false,
      tableData: [],
      getData: [],
      sortData: [],
      model1: '-1',
      loading: false,
      columns1: [
        {
          title: '**ID',
          key: 'FGameId',
          align: 'center',
        },
        {
          title: '**名称',
          key: 'FGameName',
          align: 'center',
        },
        {
          title: '前台显示排序',
          key: 'FSort',
          width: 200,
          align: 'center',
        },
        {
          title: '状态',
          slot: 'FStatus',
          width: 400,
          align: 'center',
        },
        {
          title: '操作',
          slot: 'action',
          fixed: 'right',
          width: 600,
          align: 'center',
        },
      ],
      columns2: [
        {
          title: '**ID',
          key: 'FGameId',
          align: 'center',
        },
        {
          title: '**名称',
          key: 'FGameName',
          align: 'center',
        },
        {
          title: '排序序号',
          slot: 'FSort',
          align: 'center',
        },
      ],
      statusList: [
        {
          value: '-1',
          label: '全部',
        },
        {
          value: '1',
          label: '正常',
        },
        {
          value: '0',
          label: '关闭',
        },
      ],
    };
  },
  methods: {
    sort() {
      this.sortData = JSON.parse(JSON.stringify(this.getData));
      this.sortGame = true;
    },
    // 获取****列表
    getGameList() {
      let that = this;
      RequestGame.GetChessGameList({ homeView: 'haocai' }).then(res => {
        if (res.Status) {
          that.getData = res.Data;
          for (let key in that.getData) {
            that.tableData[key] = that.getData[key];
          }
          that.tableData.sort((b, a) => a.FSort - b.FSort);
          that.$Message.success(res.Info);
        } else {
          that.$Message.error(res.Info);
        }
      });
    },
    // 更新**排序
    updateGameSort() {
      let that = this;
      RequestGame.UpdateChessGameSort(that.sortData).then(res => {
        if (res.Code === 1) {
          that.sortGame = false;
          for (let key in that.getData) {
            that.tableData[key] = that.sortData[key];
          }
          that.tableData.sort((b, a) => a.FSort - b.FSort);
          that.getData = that.tableData;
          that.$Message.success(res.Info);
        } else {
          that.sortGame = false;
          that.$Message.error(res.Info);
        }
      });
    },
    // 更新**状态
    updateGameStatus(index) {
      let that = this;
      const params = {
        FHomeView: that.tableData[index].FHomeView,
        FGameId: that.tableData[index].FGameId,
        FStatus: that.tableData[index].FStatus === 1 ? 0 : 1,
      };
      RequestGame.UpdateChessGameStatus(params).then(res => {
        if (res.Code === 1) {
          let status = that.tableData[index].FStatus;
          that.tableData[index].FStatus = status === 1 ? 0 : 1; // 状态取反
          that.getData = that.tableData;
          that.$Message.success(res.Info);
        } else {
          that.$Message.error(res.Info);
        }
      });
    },
    // 进入房间管理
    enterRoom(index) {
      this.$router.push({ path: '/room-settings', query: { gameid: this.getData[index].FGameId, homeview: this.getData[index].FHomeView } });
    },
    save() {
      this.getGameSort();
    },
    cancel() {
      this.sortGame = false;
    },
    onChange(val) {
      let status = val - 0;
      this.tableData = this.getData.filter(item => {
        if (status !== -1) {
          return item.FStatus === status;
        } else {
          return item.FStatus > status;
        }
      }
      );
    },
  },
  created() {
    this.getGameList();
  },
};
</script>
<style scoped>
.selectWidth {
  width: 150px;
}
.iconNormal {
  margin-left: 5px;
  color: #19be6b;
}
.iconClose {
  margin-left: 5px;
  color: #ed4014;
}
.dataTable {
  margin: '10px 0 0 0';
}
</style>
