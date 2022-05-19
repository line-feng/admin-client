<template>
  <div class="loginBox">
    <div class="login">
      <div class="flexCenter title">LOGIN</div>
      <el-form
        ref="formRef"
        :rules="rules"
        :model="formRule"
        class="demo-dynamic"
      >
        <el-form-item prop="username" label="名称:">
          <el-input v-model="formRule.username" />
        </el-form-item>
        <el-form-item prop="password" label="密码:">
          <el-input v-model="formRule.password" />
        </el-form-item>
      </el-form>
      <div class="flexCenter">
        <el-button @click="submitForm(formRef)" type="primary">登 陆</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { fromNorm, loginNorm } from "./dao/userLoginDao";
import type { FormInstance, FormRules } from "element-plus";
import util from "@/plugins/vueClass";

//实例化工具类
const tool = new util();

//获取form组件实例
const formRef = ref<FormInstance>();
//表单校检
const rules: FormRules = {
  username: [{ required: true, message: "用户名称不能为空", trigger: "blur" }],
  password: [{ required: true, message: "用户密码不能为空", trigger: "blur" }],
};

//表单规则
let formRule = reactive<fromNorm>({
  username: null,
  password: null,
});

//提交表单
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      let sendData: loginNorm = {
        username: formRule.username,
        password: formRule.password,
      };
      tool
        .$ajax({
          url: "login",
          method: "GET",
          data: sendData,
        })
        .then((res) => {
          tool.proxy?.$router.push({
            path: "/home",
          });
        });
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
</script>

<style lang="scss" scoped>
.loginBox {
  height: 100vh;
  // background: linear-gradient(#141e30, #243b55);
}

.login {
  border: 1px solid;
  width: 300px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
}
.title {
  font-size: 30px;
  font-family: "仿宋";
  font-weight: bold;
  margin-bottom: 20px;
}
//  background-color: #03e9f4;
// box-shadow: 0 0 5px #03/e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
// 0 0 100px #03e9f4;
</style>
