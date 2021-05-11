<template>
  <!--   visible.sync表示是否显示  false不显示 -->
  <el-dialog title="编辑部门" :visible.sync="dialogFormVisible">
    <!--      model  数据模型-->
    <el-form :model="deptOne" label-width="120px">
      <el-form-item label="部门名称">
        <el-input v-model="deptOne.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="部门编码">
        <el-input v-model="deptOne.code" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="部门负责人">
        <el-input v-model="deptOne.manager" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="部门介绍">
        <el-input v-model="deptOne.introduce" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="saveDept()">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import {list, addOrUpdate, deptDel, deptDetail} from '@/api/base/dept'
    export default {
      data() {
        return {
          parentId: '',
          dialogFormVisible: false,
          deptOne: {}
        }
      },
      methods: {
        // 添加子部门
        handlAdd(id) {
          this.parentId = id
          this.dialogFormVisible = true
        },
        saveDept() {
          this.deptOne.parentId = this.parentId
          this.deptOne.companyId = '1' // 暂时写死
          addOrUpdate(this.deptOne).then(result => {
            this.$message({
              message: result.data.message,
              type: result.data.success ? 'success' : 'error'
            })
            if (result.data.success) {
              location.reload()
            }
          })
        }
      }
    }
</script>

<style scoped>

</style>
