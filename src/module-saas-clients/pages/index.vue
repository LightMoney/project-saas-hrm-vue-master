<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card shadow="never">
        <!--        element ui 模型
        data 是数据模型
        -->
        <el-table :data="dataList" border style="width: 100%">
          <el-table-column type="index" label="序号" width="50">
          </el-table-column>
          <el-table-column prop="name" label="企业名称" width="200">
          </el-table-column>
          <el-table-column prop="version" label="版本号" width="200">
          </el-table-column>
          <el-table-column prop="companyPhone" label="联系电话" width="200">
          </el-table-column>
          <el-table-column prop="expirationDate" label="截止时间" width="200">
          </el-table-column>
          <el-table-column prop="companyAddress" label="地址" width="300">
          </el-table-column>
          <el-table-column prop="state" label="状态" width="120">
            <!--            scope属性传递行的数据-->
            <template slot-scope="scope">
<!--              开关属性
 active-value    激活的值
 inactive-value    未激活的值
 disabled  禁用
-->
              <el-switch
                v-model="scope.row.state"
                active-value="1"
                inactive-value="0"
                disabled
                active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
<!--              效果等同 a标签
to=路径
：to  路径   参数
-->
              <router-link :to="{path:'/saas-clients/details', query:{id:scope.row.id}}" >查看</router-link>
<!--              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
<!--              <el-button type="text" size="small">编辑</el-button>-->
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<script>
  // 引入api配置
  import {list} from '@/api/base/saasClient'

  export default {
    name: 'saas-clients-table-index',
    data() {
      return {
        dataList: []
      }
    },
    methods: {
      // 调用api构造请求
      getList() {
        list().then(result => {
          this.dataList = result.data.data
          // console.log(result.data)
        })
      }
    },
    // 创建完毕状态
    created() {

      this.getList()
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
