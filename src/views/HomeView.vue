<template>
    <el-container>
      <el-aside>
        <el-menu text-color="#888">
          <el-menu-item index="1">
            步伐生成
          </el-menu-item>
          <el-menu-item index="2">
            未定义1
          </el-menu-item>
          <el-menu-item index="3">
            未定义2
          </el-menu-item>
          <el-menu-item index="4">
            未定义3
          </el-menu-item>
          <el-menu-item index="5">
            未定义4
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <RandomNotes/>
      </el-main>
    </el-container>
</template>

<script setup>
import RandomNotes from '../components/spectrum/RandomNotes.vue'
</script>

<style>
.el-aside {
  height: 100vh;
  border-right: 2px solid #eee;
}
</style>
