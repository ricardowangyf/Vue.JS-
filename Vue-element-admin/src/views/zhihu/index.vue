<template>
  <div>
    <el-main>
      <div class="container_box">
        <el-card class="header">
          <el-form
            ref="tableData"
            :model="searchForm"
            label-width="90px"
            resetFields
          >
            <el-row>
              <el-col :span="6">
                <el-form-item label="合同名称">
                  <el-input
                    v-model.trim="searchForm.targetCompanyName"
                    placeholder="请输入合同名称"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label-width="20px">
                  <el-button
                    type="primary"
                    v-model="input"
                    size="small"
                    icon="el-icon-search"
                    @click="getList()"
                    >查询</el-button
                  >
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-card>
      </div>
    </el-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchForm: {},
      tableData: {},
      input:{},
    };
  },
  //计算属性
  computed: {},
  mounted() {
    // this.getLabelList();
    // this.getList();
  },
  methods:{
     handleReset() {
      this.searchForm = {};
      this.getList();
    },
  }
};
</script>

<style>
</style>