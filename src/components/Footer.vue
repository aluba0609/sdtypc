<template>
  <div id="footer" class="container-fluid">
    <div class="logo">
      <img src="@/assets/img/logo.jpg" alt="logo图" />
    </div>
    <p class="address_tel_fax">
      <p>地址：{{ address }}</p>
    </p>
    <p class="email_wx">
      <p>邮箱：{{ email }}</p>
    </p>
    <p class="copy">Copyright &copy; 2023 - Now {{ company }}</p>
  </div>
</template>

<script setup name="Footer">
const address = import.meta.env.VITE_APP_ADDRESS
const email = import.meta.env.VITE_APP_EMAIL
const company = import.meta.env.VITE_APP_COMPANYNAME
const blog = import.meta.env.VITE_APP_BLOG
</script>

<style scoped>
#footer {
  width: 100%;
  height: 100%;
  color: #fff;
  background: #474747;
  overflow: hidden;
  text-align: center;
}

.logo img {
  width: 90px;
  height: 70px;
  margin: 20px auto;
}

.address_tel_fax {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}

.email_wx {
  color: #d3d3d3;
  font-size: 14px;
}

.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}

</style>

