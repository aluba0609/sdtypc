<template>
  <div>
    <div class="banner"></div>
    <div>
      <div class="introduction-container">
        <a-row>
          <a-col :span="12">
            <div>
              <img class="img-responsive center-block" src="@/assets/img/about_img.png" />
            </div>
          </a-col>
          <a-col :span="12">
            <div>
              <h1>山东鹏诚智能科技有限公司</h1>
              <p class="text-justify">
                山东鹏诚智能科技有限公司座落于济南市历城区，注册资金2000万元。
              </p>
              <p class="text-justify">
                是一家集研发、生产、销售和服务为一体的科技型企业。
              </p>
              <p class="text-justify">
                公司致力于超声波水表、超声波热表以及远传设备的研发和销售。
              </p>
              <!-- <p class="text-justify">
                我们的客户包括集团上市公司, 酒店, IT科技, 教育, 服装, 贸易, 外贸,
                时尚, 生物, 工业, 制造等众多行业, 并树立了良好的口碑,
                积累了丰富的经验和成功案例. 我们提供权威专业的互联网品牌策划,
                并实施高标准的设计方案, 创造真正意义上的品牌网站,
                为互联网品牌在互动行销领域创造最大价值而不懈努力!
              </p> -->
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script setup name="introduction">
import { onMounted } from 'vue'
onMounted(() => {

})
</script>

<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url('../assets/img/companyBg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
  text-align: center;
}

.introduction-container {
  padding: 100px 0;
  color: #808080;
  transition: all ease 0.5s;
}

.text-justify {
  font-size: 14px;
  line-height: 2.5rem;
}
</style>

