<template>
  <h1>這是後台 商品</h1>
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
    function checkLogin (params) {
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
      // console.log(token);
      axios.defaults.headers.common.Authorization = token
      checkLogin()
    })
    return { url, checkLogin }
  }
})
</script>
