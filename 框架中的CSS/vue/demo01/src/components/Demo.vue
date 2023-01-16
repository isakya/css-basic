<template>
  <!-- vue隔离样式方案：1、模块； 2、属性 -->

  <!-- @1 -->
  <!-- <div :class="$style.demo">Hello, I'm {{ name }}</div> -->

  <!-- @2 -->
  <div class="demo">Hello, I'm {{ name }}</div>
</template>

<script>
export default {
  name: 'Demo',
  data() {
    return {
      name: 'demo'
    }
  }
}
</script>
<!-- 模块 -->
<!-- @1 -->
<!-- <style module> -->

<!-- 属性 -->
<!-- @1 -->

<style scoped>
.demo {
  color: red;
}
</style>
