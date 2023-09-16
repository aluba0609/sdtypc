<template>
  <div >
    <div class="banner"></div>
    <div>
      <div class="container-fuild ContactUs-container">
        <div style="padding: 50px;">
          <a-row>
            <a-col :span="10">
              <div style="padding-right: 40px;">
                <a-form
                  :model="formState"
                  name="basic"
                  :label-col="{ span: 12 }"
                  :wrapper-col="{ span: 12 }"
                  autocomplete="off"
                  @finish="onFinish"
                  @finishFailed="onFinishFailed"
                >
                  <a-form-item
                    label="姓名"
                    name="username"
                    :rules="[{ required: false, message: '请输入名字!' }]"
                  >
                    <a-input v-model:value="formState.username" />
                  </a-form-item>

                  <a-form-item
                    label="邮箱"
                    name="email"
                    :rules="[{ required: false, message: '请输入邮箱' }]"
                  >
                    <a-input v-model:value="formState.email" />
                  </a-form-item>
                  <a-form-item
                    label="请输入电话"
                    name="phone"
                    :rules="[{ required: false, message: '请输入电话' }]"
                  >
                    <a-input v-model:value="formState.phone" />
                  </a-form-item>
                  <a-form-item
                    label="请输入内容"
                    name="content"
                    :rules="[{ required: false, message: '请输入内容' }]"
                  >
                    <a-input v-model:value="formState.content" />
                  </a-form-item>

                  <a-form-item :wrapper-col="{ offset: 12, span: 12 }">
                    <a-button type="primary" html-type="submit">提交</a-button>
                  </a-form-item>
                </a-form>
              </div>

            </a-col>
            <a-col :span="14">
              <div style="height: 400px;">
                <BMap enableScrollWheelZoom :ak="'jcI3Q88g6V99OPBjLryoOqPTtsRdedHA'">
                  <BInfoWindow
                    v-model="mapShow" 
                    enableMaximize 
                    :position="{ lng:117.303836 , lat: 36.740292  }" 
                    :title="'山东鹏诚智能科技有限公司'"
                    :width="300"
                    :height="80"
                    :enableCloseOnClick="false"
                    :mapZoom="50"
                  >
                  <span style="font-weight: bold;">
                    地址：中国山东省济南市历城区春晖路688号工业北路与春晖路交叉口向东约300米路北东临博科创新中心
                  </span>
                  </BInfoWindow>
                </BMap>
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script name="ContactUs">
import { onMounted, reactive,defineComponent,ref } from 'vue'
import {BMap ,BInfoWindow } from 'vue3-baidu-map-gl'
export default defineComponent({
  components: {
    BMap,
    BInfoWindow
  },
  setup() {
    const formState = reactive({
      username:undefined,
      email:undefined,
      phone:undefined,
      content:undefined,
    })
    const onFinish = () => {

    }
    const onFinishFailed = () => {

    }
    const mapShow = ref(true)
    onMounted(() => {

    })
    return {
      onFinish,
      onFinishFailed,
      mapShow,
      formState,
    }
  },
})
</script>

<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url('../assets/img/banner_1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
  text-align: center;
}
:deep(.baidu-map-container){
  height: 100% !important;
}
:deep(.BMap_bubble_title){
  font-weight:bold;
}
</style>

