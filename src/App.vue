<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>
<script lang="ts" setup>
//elementPlus 中文包
import zhCn from "element-plus/lib/locale/lang/zh-cn";
const locale = zhCn;
</script>
<style scoped>
@import url("@/comm/css/public.css");
</style>
