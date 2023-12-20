<template>
  <el-form :model="news" label-width="120px">
    <el-form-item label="标题">
      <el-input v-model="news.title"/>
    </el-form-item>
    <el-form-item label="类型">
      <el-select v-model="news.type" placeholder="类型">
        <el-option label="军事" value="军事"/>
        <el-option label="娱乐" value="娱乐"/>
        <el-option label="财经" value="财经"/>
      </el-select>
    </el-form-item>
    <el-form-item label="内容">
      <el-input v-model="news.desc" type="textarea"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onAddNews">创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import {ref, reactive} from 'vue'

const news = ref({
      title: "",
      type: "",
      desc: ","
    }
)

const onAddNews=()=>{

}
</script>