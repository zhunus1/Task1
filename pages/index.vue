<template>
  <div class="container">
    <div class="TOP">
      TOP
    </div>
    <div class="Center">
      CENTER
    </div>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style lang='scss' scoped>
.container {
  min-height: 225vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
