<template>
  <div>
    <el-row style="height: 60px">
      <div class="myinfo">
        <div class="myinfo_title">今天(2 / 3)</div>
      </div>
    </el-row>

    <el-row style="height: 390px">
      <el-table
        @cell-click="setUserInfo"
        height="390px"
        stripe
        style="width: 100%"
        :show-header="false"
        :data="tableData"
      >
        <el-table-column label="日期">
          <template #default="scope">
            <div class="userlist">
              <el-avatar :src="scope.row.img"></el-avatar>
              <span>{{ scope.row.name }}</span>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
export default defineComponent({
  name: "myMain",
  setup(props, { emit }) {
    const keyword = ref("");

    const setUserInfo = (row: any) => {
      emit("setUserInfo", row);
    };
    const tableData = [
      {
        name: "张三",
        img: "https://www.bing.com/th?id=OIP.fH6zOFYYapEMC8fDgBNnkQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      },
      {
        name: "张三",
        img: "https://www.bing.com/th?id=OIP.fH6zOFYYapEMC8fDgBNnkQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      },
      {
        name: "张三",
        img: "https://www.bing.com/th?id=OIP.fH6zOFYYapEMC8fDgBNnkQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      },
    ];

    return { keyword, setUserInfo, tableData };
  },
});
</script>
<style scoped>
.myinfo {
  text-align: center;
  line-height: 40px;
  vertical-align: middle;
  margin-top: 10px;
  margin-left: 10px;
  width: 100%;
}
.myinfo_title {
  width: 100%;
  margin: auto;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
}

.userlist {
  vertical-align: middle;
  cursor: pointer;
}
.userlist span {
  vertical-align: middle;
  margin-left: 10px;
}
</style>
