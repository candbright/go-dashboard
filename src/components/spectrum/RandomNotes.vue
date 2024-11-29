<template>
  <div class="container">
    <el-row :gutter="20" style="max-width: 512px">
      <el-col :span="8"><el-input-number v-model="num" :min="1" :max="500"></el-input-number></el-col>
      <el-col :span="8"><el-select class="select" v-model="mode" placeholder="请选择生成模式">
        <el-option
          v-for="item in modeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select></el-col>
      <el-col :span="8"><el-button type="primary" @click="generateRandom">随机生成</el-button></el-col>
    </el-row>
    <div class="l-t-arrow"></div>
    <div class="container-note" v-if="notes.length !== 0">
      <div class="container-note-row" v-for="(note, index) in notes" :key="index">
        <el-image class="note" :src="bottom_left_note" v-if="note === 3"></el-image>
        <div class="note-blank" v-else></div>
        <el-image class="note" :src="top_left_note" v-if="note === 0"></el-image>
        <div class="note-blank" v-else></div>
        <el-image class="note" :src="mid_note" v-if="note === 2"></el-image>
        <div class="note-blank" v-else></div>
        <el-image class="note" :src="top_right_note" v-if="note === 1"></el-image>
        <div class="note-blank" v-else></div>
        <el-image class="note" :src="bottom_right_note" v-if="note === 4"></el-image>
        <div class="note-blank" v-else></div>
      </div>
    </div>
  </div>
</template>

<script>
import { random } from '@/api/spectrum/spectrum.js'
import top_left_note from '@/assets/notes/top_left_note.png'
import top_right_note from '@/assets/notes/top_right_note.png'
import mid_note from '@/assets/notes/mid_note.png'
import bottom_left_note from '@/assets/notes/bottom_left_note.png'
import bottom_right_note from '@/assets/notes/bottom_right_note.png'

export default {
  name: 'ServerInfo',
  data() {
    return {
      num: 1,
      mode: 0,
      modeOptions: [
        {
          value: 0,
          label: '抖动'
        },
        {
          value: 1,
          label: '跑步'
        }
      ],
      notes: [],
      top_left_note,
      top_right_note,
      mid_note,
      bottom_left_note,
      bottom_right_note
    }
  },
  methods: {
    generateRandom() {
      random({
        num: this.num,
        mode: this.mode
      }).then(res => {
        this.notes = res.data
      }).catch(err => {
        this.$message.error('请求失败: ' + err)
      })
    },
    generateKey(res) {
      return res
    }
  }
}
</script>

<style scoped>
.container-note {
  margin: 10px;
}

.container-note-row {
  margin-left: 5px;
  margin-top: 20px;
}

.note {
  width: 25px;
  height: 25px;
  display: inline-block;
  margin-left: 10px;
  border: 1px solid gray;
}

.note-blank {
  width: 25px;
  height: 25px;
  display: inline-block;
  margin-left: 10px;
  border: 1px solid gray;
}

.select {
  width: 100px;
}


</style>
