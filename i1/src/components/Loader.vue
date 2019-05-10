<template>
  <div class="loader-wrapper">
    <img src="@/assets/loading.gif" alt="Loading" />
  </div>
</template>

<script>
export default {
  name: 'Loader',
}
</script>

<style lang="scss" scoped>
.loader-wrapper {
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
}
</style>
