<template>
  <h1>這是後台</h1>
  <nav>
        <RouterLink to="/admin">後台首頁</RouterLink> |
        <RouterLink to="/admin/order">訂單</RouterLink> |
        <RouterLink to="/admin/cart">購物車</RouterLink> |
        <RouterLink to="/admin/product">商品</RouterLink> |
        <RouterLink to="/">返回前台</RouterLink>
    </nav>
    <RouterView></RouterView>
</template>

<script>
import axios from 'axios'
import { useRouter } from 'vue-router'

import { ref, onMounted, defineComponent } from 'vue'
export default defineComponent({
  setup () {
    const { VITE_URL } = import.meta.env
    const router = useRouter()

    const url = ref(VITE_URL)
    function checkLogin (params) { // 驗證可以寫這邊，子路由都可以被驗證
      axios
        .post(`${url.value}/api/user/check`)
        // 成功的結果
        .then((res) => {
          console.log(res)
          // getProduct();
        })
        // 失敗結果
        .catch((error) => {
          console.dir(error) // 用dir可以展開資訊
          alert('未登入')
          router.push('/login')
        })
    }
    onMounted(() => {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      axios.defaults.headers.common.Authorization = token
      checkLogin()
    })
    return { url, checkLogin }
  }
})
</script>

<style scoped>
</style>
