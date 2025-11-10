<script setup lang="ts">

import DirCompo from '@/components/DirCompo.vue'
import MidFour from '@/components/MidFour.vue'
import BigText from '@/components/BigText.vue'
import Promo from '@/components/iconCompo/Promo.vue'
import ItaText from '@/components/ItaText.vue'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import { getImg } from '@/utils/getImg.ts'
const formLoading = ref(false)
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Please input your name', trigger: 'blur' },
  ],
  email: [
    { required: true, message: 'Please input your email', trigger: 'blur' },
    // 验证邮箱正则
     {
       trigger: 'blur',
       validator: (rule: any, value: any, callback: any) => {
         console.log(value)
         // 邮箱正则
         const re = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
         console.log(re.test(value))
         return re.test(value);
       },
       // 邮箱不合法 英文
       message: 'Please input a valid email',
     }
  ],
})

const ruleForm = reactive<RuleForm>({
  name: '',
  email: '',
  message: '',
})

const onSubmitForm = async () => {
  try {
    formLoading.value = true
    await (fetch('https://formspree.io/f/xjkjbzqn', {
      method: 'POST',
      body: JSON.stringify(ruleForm)
    })).text()
  } catch (e) {
    ElMessage.success('The form was submitted successfully!')
  } finally {
    formLoading.value = false
    ruleFormRef.value.resetFields()
  }

};

const onSubmit = (formEl: any) => {
  if (!formEl) return
  formEl.validate((valid: any) => {
    if (valid) {
      onSubmitForm()
    } else {
      return false;
    }
  });
};

</script>

<template>
  <div class="arc_concat">
    <dir-compo
      style="--hover-color: #fff; --gang-color: rgb(138, 138, 138)"
      assetsPath="concat"
      fileName="route.png"
    ></dir-compo>

    <div class="form_body wow fadeInDown">
      <big-text
        class="main_tit"
        text="Contact"
      >
      </big-text>
      <big-text
        class="sub_tit"
        text="I'd love to hear from you! Drop me a message and  I'll get back to you as soon as I can."
      ></big-text>

      <div class="form_wrap">
        <el-form
          v-loading="formLoading"
          element-loading-background="rgb(255, 255, 255)"
          action="https://formspree.io/f/xjkjbzqn"
          method="POST"
          ref="ruleFormRef"
          style="max-width: 600px"
          :model="ruleForm"
          :rules="rules"
          label-position="top"
          label-width="auto"
        >
          <el-form-item label="Name" prop="name">
            <el-input placeholder="Your name" v-model="ruleForm.name" />
          </el-form-item>

          <el-form-item label="Email" prop="email">
            <el-input placeholder="Your email" v-model="ruleForm.email" />
          </el-form-item>

          <el-form-item label="Message" prop="message">
            <el-input type="textarea"
                      placeholder="Tell me about your project or inquiry..."
                      :rows="5"
                      resize="none"
                      v-model="ruleForm.message"
            />
          </el-form-item>

          <el-form-item>
            <el-button @click="onSubmit(ruleFormRef)">
              <Promo />
              <span>Send Message</span>
            </el-button>
          </el-form-item>
        </el-form>
      </div>

      <big-text
        class="sub_tit botm_txt"
        :text="'Or connect with me'.toUpperCase()"
      ></big-text>

      <div class="btn_group">
        <a href="https://www.linkedin.com/in/chenxuan-meng/" target="_blank">
          <div class="btn">
            <img
              style="width: 16px; height: 16px"
              :src="getImg('concat', 'linkein.png')"  alt="">
            <span>LinkedIn</span>
          </div>
        </a>

        <a href="https://www.instagram.com/chenxuan_meng/" target="_blank">
          <div class="btn">
            <img :src="getImg('concat', 'instagram.png')" alt="">
            <span>Instagram</span>
          </div>
        </a>
      </div>

      <ita-text
        class="ita_container"
        text="Based in Toronto, Ontario • Available for collaboration"
      />
    </div>

  </div>
  <mid-four class="wow fadeInDown"></mid-four>
</template>

<style  lang="scss">
@mixin flexStyle($align:'center', $justContent:'space-around') {
  display: flex;
  align-items: $align;
  justify-content: $justContent;
}
.arc_concat {
  padding: 101px 156px 10px 156px;

  .form_body {
    margin: 37px auto 13px;
    padding-bottom: 63px;
    width: 900px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.03);
  }

  .main_tit {
    font-weight: 500;
    font-size: 48px;
    line-height: 72px;
    letter-spacing: -0.6px;
    height: 72px;
    width: 100%;
    margin-top: 62px;
    justify-content: center;
  }

  .sub_tit {
    color: rgba(176, 176, 176, 1);
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: -0.3px;
    height: 52px;
    width: 459px;
    margin: 17px auto auto;
    text-align: center;
  }

  .botm_txt {
    height: unset;
    color: rgba(128, 128, 128, 1);
    font-weight: 400;
    font-size: 13px;
    letter-spacing: 0.6px;
    justify-content: center;
    width: 100%;
    margin-top: 45px;
    margin-bottom: 35px;
    &:before {
      margin-right: 20px;
    }
    &:after {
      margin-left: 20px;
    }
    &:before, &:after {
      content: '';
      width: 155.8px;
      height: 1px;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(0, 0, 0, 0) 100%);
    }
  }

  .form_wrap {
    width: 508px;
    margin: 0 auto;

    .el-form-item {
      margin-bottom: 25px;
    }

    .el-form-item--label-top .el-form-item__label {
      margin-bottom: 10px;
    }

    .el-form-item__label {
      color: rgb(224, 224, 224) !important;
      font-family: inter-normal;
      font-size: 14px;
      letter-spacing: 0.1px;

      &:before {
        display: none;
      }
    }
    .el-input__wrapper, .el-textarea{
      padding: unset;
      background-color: unset !important;
      border: unset;
      box-shadow: unset !important;
    }
    .el-input, .el-textarea {
      border: unset !important;
    }
    input, textarea {
      color: rgba(112, 112, 112, 1);
      font-size: 14px;
      text-indent: 20px;
      height: 54px;
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-sizing: border-box;
      //background-color: rgba(255, 255, 255, 0.05);
    }

    .el-textarea__inner {
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-sizing: border-box;
    }

    textarea {
      height: 100%;
      text-indent: unset;
      padding: 16px 20px !important;
    }
    .el-textarea__inner {
      background-color: unset !important;
    }
    .el-textarea__inner {
      box-shadow: unset;
    }

    .el-button {
      width: 100%;
      height: 56px;
      font-weight: 500;
      font-size: 14px;
      color: rgba(26, 26, 26, 1);
      --el-button-hover-bg-color: rgba(255, 255, 255, 0.9);
      --el-button-active-border-color: unset;

      svg {
        margin-right: 16px;
      }
    }

  }

  .btn_group {

    width: 320px;
    margin: 0 auto;
    margin-top: 34px;
    @include flexStyle(center, space-around);
    .btn {
      @include flexStyle(center, center);
      width: 143.4px;
      height: 54px;
      border-radius: 14px;
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-sizing: border-box;
      background: rgba(255, 255, 255, 0.05);
      color: rgba(255, 255, 255, 1);
      font-weight: 400;
      font-size: 15px;
      img {
        display: block;
        width: 24px;
        height: 24px;
        margin-right: 14px;
      }
    }
  }

  .ita_container {
    width: 508px;
    margin: 40px auto 0;
    height: unset;
    padding-top: 31px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-weight: 400;
    font-size: 13px;
    line-height: 19.5px;
    letter-spacing: -0.1px;
    justify-content: center;
    color: rgb(128, 128, 128);
  }
}
</style>
