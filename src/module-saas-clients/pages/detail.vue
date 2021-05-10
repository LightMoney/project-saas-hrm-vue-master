<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card shadow="never">
        <el-tabs v-model="activeName">
          <el-tab-pane label="公司详情" name="first">
            <!--
            form表单   model是双向绑定的数据
            -->
            <el-form ref="form" :model="formData" label-width="80px">
              <el-form-item label="企业名称">
                <el-input v-model="formData.name" style="width: 250px" disabled></el-input>
              </el-form-item>
              <el-form-item label="公司地址">
                <el-input v-model="formData.companyAddress" style="width: 250px" disabled></el-input>
              </el-form-item>
              <el-form-item label="公司电话">
                <el-input v-model="formData.companyPhone" style="width: 250px" disabled></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">审核</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="账户信息" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="交易记录" name="third">角色管理</el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>
  // 引入api配置
  import {sassDetail} from '@/api/base/saasClient'

  export default {
    name: 'saas-clients-table-detail',
    data() {
      return {
        activeName: 'first',
        formData: {}
      }
    },
    methods: {
      getDetail(id) {
        sassDetail({id: id}).then(result => {
          this.formData = result.data.data
          console.log(id)
          console.log(result.data.data)
        })
      }
    },
    // 创建完毕状态
    created() {
      var id = this.$route.query.id
      this.getDetail(id)
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .alert {
    margin: 10px 0px 0px 0px;
  }

  .pagination {
    margin-top: 10px;
    text-align: right;
  }
</style>
