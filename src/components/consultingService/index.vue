<template>
  <div
    class="container"
    :style="{ position: 'fixed', bottom: y + 'px', right: x + 'px ' }"
    @click="
      () => {
        dialogVisible = true;
      }
    "
  >
    <div class="photoFrame" :style="{ width: width + 'px' }">
      <img :src="imgFun(imguer)" />
      <p>{{ title }}</p>
    </div>
  </div>
  <el-dialog
    v-model="dialogVisible"
    width="60%"
    :before-close="handleClose"
    :show-close="false"
    class="eldialog"
  >
    <el-container>
      <el-aside width="350px">
        <my-aside />
      </el-aside>
      <el-container>
        <el-header>
          <span>{{ headertitle }}</span>
        </el-header>
        <el-main>
          <my-main :msgList="mglist" />
        </el-main>
        <el-footer>
          <my-footer />
        </el-footer>
      </el-container>
    </el-container>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import myMain from "./myMain.vue";
import myFooter from "./myFooter.vue";
import myAside from "./myAside.vue";
export default defineComponent({
  props: {
    img: {
      type: String,
      default: () => "./static/callme.png",
    },
    y: {
      type: Number,
      default: () => 100,
    },
    x: {
      type: Number,
      default: () => 100,
    },
    title: {
      type: String,
      default: () => "联系我",
    },
    headertitle: {
      type: String,
      default: () => "siyuanshu",
    },
    width: {
      type: Number,
      default: () => 70,
    },
    mglist: {
      type: Array,
      default: () => [],
    },
  },
  name: "ConsultingService",
  components: { myMain, myFooter, myAside },
  setup(props, { emit }) {
    console.log(props);
    let imguer = ref(props.img);
    function imgFun(val) {
      return new URL(`../../${val}`, import.meta.url).href;
    }
    const dialogVisible = ref(false);
    const handleClose = (done) => {
      dialogVisible.value = false;
      done();
    };
    watch(
      () => props.img,
      (val) => {
        console.log(val);
        imguer.value = val;
      }
    );
    return {
      imguer,
      imgFun,
      dialogVisible,
      handleClose,
    };
  },
});
</script>

<style scoped>
.photoFrame {
  border-radius: 50%;
}
img {
  display: block;
  width: 100%;
  height: 100%;
}
p {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  white-space: nowrap;
  transform: translate(-50%, 50%);
  color: rgb(255, 255, 255);
  background-color: rgb(33, 94, 226);
  border-radius: 10px;
  line-height: 20px;
  font-size: 20px;
  padding: 3px;
}
.choosed {
  border: solid 2px red;
}
.login {
  width: 50%;
  margin-left: 25%;
  border: solid 1px rgb(228, 231, 237);
  padding: 30px;
}
.login .avatar {
  margin-top: 20px;
}
.login .avatar .el-avatar {
  cursor: pointer;
  margin-left: 5px;
}
.common {
  /* padding: 100px; */
  margin-top: 100px;
  /* width: 800px; */ /* 800 是我为了演示3个用户同时在线，建议设为100%，项目的宽度直接受这个影响*/
  width: 100%;
  height: 200px;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: 500px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  height: 280px;
}
body > .el-container {
  margin-bottom: 40px;
}
</style>
