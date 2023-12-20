
<template>
  <el-table :data="store.newsList" style="width: 100%">
    <el-table-column fixed prop="title" label="标题" />
    <el-table-column prop="type" label="分类" />
    <el-table-column prop="desc" label="内容" />
    <el-table-column>
      <template #default="scope">
        <el-button link type="primary" size="small" @click="handleClick(scope.row)">删除</el-button>
        <el-button link type="primary" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script  setup>
const store=()=>{
  const newsList = ref([]);
}

const handleClick = (row) => {
}

</script>
