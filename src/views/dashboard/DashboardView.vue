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
export default {
}
</script>

<style scoped>
</style>
