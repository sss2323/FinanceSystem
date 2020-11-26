<template>
  <div>
    <Layout>
      <Content>
        <div class="mt-2">
          <Row type="flex" justify="space-between">
            <i-Col>
              <!-- <Button type="warning">
                房间排序
              </Button> -->
            </i-Col>
            <i-Col>
              <Select v-model="model1" class="selectWidth mr-5" @on-change="onChange">
                <Option v-for="item in statusList" :value="item.value" :key="item.value">
                  {{item.label}}
                </Option>
              </Select>
              <Button type="info" @click="goBack" class="mr-2">
                返回
              </Button>
            </i-Col>
          </Row>
        </div>
        <!-- 表格处理 通过插槽处理状态icon和操作按钮 -->
        <Table border :columns="columns" :data="tableData" class="dataTable mt-3">
          <template slot-scope="{ row }" slot="FRoomStatus">
            <span v-if="row.FRoomStatus === 1">
              <Icon type="md-checkmark-circle" size="24" color="#19be6b" />
              <strong class="iconNormal">正常</strong>
            </span>
            <span v-else>
              <Icon type="md-close-circle" size="24" color="#ed4014" />
              <strong class="iconClose">关闭</strong>
            </span>
          </template>
          <template slot-scope="{ row, index }" slot="action">
            <span v-if="row.FRoomStatus === 1">
              <Button type="success" class="mr-5" @click="updateRoomStatus(index)">禁用</Button>
            </span>
            <span v-else>
              <Button type="error" class="mr-5" @click="updateRoomStatus(index)">启用</Button>
            </span>
            <Button type="warning" class="mr-5" @click="edit(row, index, 'Carry')">
              携带金额配置
            </Button>
            <Button type="info" class="mr-5" @click="edit(row, index, 'Ante')">
              底注金额配置
            </Button>
            <Button type="success" class="mr-5" @click="edit(row, index, 'Kick')">
              提出下限配置
            </Button>
          </template>
        </Table>
        <Modal v-model="paramEdit">
          <p slot="header">
            参数修改
          </p>
          <Form :label-width="200">
            <div v-if="btnPick==='Carry'">
              <FormItem label="房间最小携带金额:">
                <Input class="input" v-model="paramData.FMinCarry" />
              </FormItem>
              <FormItem label="房间最大携带金额:">
                <Input class="input" v-model="paramData.FMaxCarry" />
              </FormItem>
            </div>
            <div v-else-if="btnPick==='Ante'">
              <FormItem label="底注:">
                <Input class="input" v-model="paramData.FAnte" />
              </FormItem>
              <p class="text-error" align="center">
                温馨提示: 底注金额为该房间最小的下注金额。
              </p>
            </div>
            <div v-else>
              <FormItem label="踢出金额:">
                <Input class="input" v-model="paramData.FKickAmount" />
              </FormItem>
              <p class="text-error" align="center">
                温馨提示: 牌局结束后玩家当前携带金额小于该值将被踢出房间。
              </p>
            </div>
          </Form>
          <div slot="footer">
            <Button type="success" size="large" @click="updateChessRoomConfig">
              保存
            </Button>
            <Button type="error" size="large" @click="cancel">
              取消
            </Button>
          </div>
        </Modal>
      </Content>
    </Layout>
  </div>
</template>
<script>
import RequestGame from '../../services/api/gameSetting';
export default {
  data() {
    return {
      model1: '-1',
      getData: [],
      btnPick: '',
      tableData: [],
      paramData: {},
      paramEdit: false,
      changeIndex: -1,
      columns: [
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
          title: '房间ID',
          key: 'FRoomId',
          align: 'center',
        },
        {
          title: '房间名称',
          key: 'FRoomName',
          align: 'center',
        },
        {
          title: '房间状态',
          slot: 'FRoomStatus',
          align: 'center',
        },
        {
          title: '房间携带金额',
          key: 'FCarryAmount',
          align: 'center',
        },
        {
          title: '底注',
          key: 'FAnte',
          align: 'center',
        },
        {
          title: '踢出金额',
          key: 'FKickAmount',
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
      columns1: [
        {
          title: '房间最小携带金额',
          slot: 'FMinCarry',
          align: 'center',
        },
        {
          title: '房间最大携带金额',
          slot: 'FMaxCarry',
          align: 'center',
        },
        {
          title: '底注',
          slot: 'FAnte',
          align: 'center',
        },
        {
          title: '踢出金额',
          slot: 'FKickAmount',
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
    edit(item, index, btn) {
      this.paramData = JSON.parse(JSON.stringify(item));
      this.changeIndex = index;
      this.btnPick = btn;
      this.paramEdit = true;
    },
    getRoomList() { // 获取房间列表
      let that = this;
      const GameId = that.$route.query.gameid;
      const HomeView = that.$route.query.homeview;
      RequestGame.GetChessGameRoomList({ HomeView, GameId }).then(res => {
        if (res.Status) {
          that.getData = res.Data;
          for (let key in that.getData) {
            that.tableData[key] = that.getData[key];
            that.tableData[key].FCarryAmount = that.getData[key].FMinCarry + ' - ' + that.getData[key].FMaxCarry;
          }
          that.tableData.sort((a, b) => a.FGameId - b.FGameId);
          that.$Message.success(res.Info);
        } else {
          that.$Message.error(res.Info);
        }
      });
    },
    // 更新房间状态
    updateRoomStatus(index) {
      let that = this;
      const params = {
        FHomeView: that.tableData[index].FHomeView,
        FGameId: that.tableData[index].FGameId,
        FRoomId: that.tableData[index].FRoomId,
        FRoomStatus: that.tableData[index].FRoomStatus === 1 ? 0 : 1,
      };
      RequestGame.UpdateChessRoomStatus(params).then(res => {
        if (res.Code === 1) {
          let status = that.tableData[index].FRoomStatus;
          that.tableData[index].FRoomStatus = status === 1 ? 0 : 1; // 房间状态取反
          that.getData = that.tableData;
          that.$Message.success(res.Info);
        } else {
          that.$Message.error(res.Info);
        }
      });
    },
    // 更新**房间(场)基础参数
    updateChessRoomConfig(index) {
      let that = this;
      const params = {
        FHomeView: that.$route.query.homeview,
        FGameId: that.$route.query.gameid,
        FRoomId: that.paramData.FRoomId,
        FMinCarry: that.paramData.FMinCarry,
        FMaxCarry: that.paramData.FMaxCarry,
        FAnte: that.paramData.FAnte,
        FKickAmount: that.paramData.FKickAmount,
      };
      RequestGame.UpdateChessRoomConfig(params).then(res => {
        if (res.Code === 1) {
          that.paramEdit = false;
          for (let key in that.paramData) {
            that.tableData[that.changeIndex][key] = that.paramData[key];
          }
          that.tableData[that.changeIndex].FCarryAmount = that.paramData.FMinCarry + ' - ' + that.paramData.FMaxCarry;
          that.getData = that.tableData;
          that.$Message.success(res.Info);
        } else {
          that.paramEdit = false;
          that.$Message.error(res.Info);
        }
      });
    },
    goBack() {
      this.$router.back();
    },
    cancel() {
      this.paramEdit = false;
    },
    onChange(val) {
      let status = val - 0;
      this.tableData = this.getData.filter(item => {
        if (status !== -1) {
          return item.FRoomStatus === status;
        } else {
          return item.FRoomStatus > status;
        }
      }
      );
    },
  },
  created() {
    this.getRoomList();
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
.paramsInput {
  width: 150px;
}
.input {
  width: 30%;
}
.pname {
  text-align: center;
}
</style>
