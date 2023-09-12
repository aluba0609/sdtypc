<template>
  <div id="indexPage">
    <!-- 轮播图 -->
    <a-carousel arrows>
      <template #prevArrow>
        <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
          <left-circle-outlined />
        </div>
      </template>
      <template #nextArrow>
        <div class="custom-slick-arrow" style="right: 10px">
          <right-circle-outlined />
        </div>
      </template>
      <div v-for="(item,index) in swiperList" :key="index" style="width: 100%;height: 100%;">
        <img :src="item.img" style="width: 100%;height: 100%;" />
      </div>
    </a-carousel>
  </div>
</template>

<script name="indexPage">
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import { onMounted, defineComponent } from 'vue'
import banner1 from '@/assets/img/companyBg.png'
import banner2 from '@/assets/img/water.jpg'
export default defineComponent({
  components: {
    LeftCircleOutlined,
    RightCircleOutlined,
  },
  setup() {
    const swiperList = [
      {
        img: banner1,
        title: '',
        content: ''
      },
      {
        img: banner2,
        title: '',
        content: ''
      },
    ]
    onMounted(() => {

    })
    return {
      swiperList,
    }
  }
});
</script>
<style scoped>
#indexPage {
  width: 100%;
  height: calc(100% - 70px);
}

.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: calc(100vh - 70px);
  line-height: 100%;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide div) {
  width: 100%;
  height: 100%;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
  z-index: 1;
}

.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}

.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}</style>

