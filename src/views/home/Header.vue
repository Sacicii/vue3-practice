<template>
  <div class="top-menu-wrapper">
    <div class="logo">
      <span @click="jumpToHome">Sacicii's Blog</span>
    </div>
    <div class="el-menu-wrapper">
      <el-menu
        default-active="2-1"
        class="el-menu"
        mode="horizontal"
        background-color="transparent"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
        :router="true"
        :ellipsis="false"
      >
        <el-sub-menu index="2">
          <template #title>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bulb"></use>
            </svg>
            <span>分类</span>
          </template>
          <el-menu-item index="1">学习笔记</el-menu-item>
          <el-menu-item index="2-2">个人项目</el-menu-item>
          <el-menu-item index="2-3">技术杂烩</el-menu-item>
          <el-menu-item index="2-4">心情随笔</el-menu-item >
        </el-sub-menu>
        <el-menu-item index="/about">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shejiaotubiao-02"></use>
          </svg>
          <span>动态</span>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 搜索 -->
    <div :class="{'search': true, 'input-focus': isActive}">
      <el-input
        v-model="searchValue"
        placeholder="i wanna search..."
        @focus="isActive = true"  
        @blur="isActive = false" 
      >
        <template #suffix>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-search1"></use>
          </svg>
        </template>
      </el-input>
    </div>
    <!-- 设置 -->
    <div class="setting">
      <el-icon>
        <Setting />
      </el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {ref} from 'vue'
  import {useRouter} from 'vue-router'

  const router = useRouter()

  const jumpToHome = () => {
    router.push({ path: '/'})
  }

  let searchValue = ref('')

  let isActive = ref(false)



</script>

<style lang="less" scoped>
@menu-active: #ff7675;

.top-menu-wrapper{
  display: flex;
  justify-content: space-around;
  font-size: .14rem;
  user-select: none;
  height: .58rem;
  width: 100%;
  background: rgba(100,100,100,.5);
  // z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  .logo{
    width: 20%;
    height: .58rem;
    font-size: .2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
      background-image: linear-gradient(#2980B9, #6DD5FA, #FFFFFF);
      -webkit-background-clip: text;
      color: transparent;
      font-size: .2rem;
      font-weight: bold;
      font-style: italic;
      animation: shake .5s ease-in-out 1.7;
      &:hover{
        animation: shake .5s ease-in-out infinite;
      }
    }
  }
  .el-menu-wrapper{
    width: 50%
  }
  // search
  .search{
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    .el-input{
      width: 60%;
      transition: .8s;
      /deep/.el-input__inner {
      // 设置光标颜色
      caret-color: #11be59;
      }
    }
  }
  // search框聚焦
  .input-focus{
    .el-input{
      width: 90% ;
      transition: .8s;
    }
  }
  .setting{
    width: 10%;
    height: .58rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .el-icon{
    font-size: 27px;
      &:hover{
        height: 58px;
        animation: icon-spin 2s linear infinite;
      }
    }
  }
  .el-menu-item, .el-sub-menu{
    span{
      padding-left: .1rem;
    }
  }
}

// logo文本抖动动画
@keyframes shake {
  0%, 100% {
    text-shadow: -1.5px -1.5px 0 #0ff, 1.5px 1.5px 0 #f00;
  }
  25% {
    text-shadow: 1.5px 1.5px 0 #0ff, -1.5px -1.5px 0 #f00;
  }
  50% {
    text-shadow: 1.5px -1.5px 0 #0ff, 1.5px -1.5px 0 #f00;
  }
  75% {
    text-shadow: -1.5px 1.5px 0 #0ff, -1.5px 1.5px 0 #f00;
  }
}

// icon旋转动画
@keyframes icon-spin {
  0% {
    transform: scale(1.5) rotate(0deg);
  }
  50% {
    transform: scale(1.5) rotate(180deg);
  }
  100% {
    transform: scale(1.5) rotate(360deg);
  }
}

// menu背景透明
/deep/.el-menu .el-menu-item:hover{
  outline: 0 !important;
  color: @menu-active !important;
  background: transparent;
}
/deep/.el-menu .el-menu-item.is-active {
  color: @menu-active !important;
  background: transparent;
}
.el-submenu /deep/.el-submenu__title:hover {
  color: @menu-active !important;
  background: transparent;
}

.el-menu--horizontal{
  border: none;
  background: transparent;
}
.flex-grow {
  flex-grow: 1;
}
.el-icon{
  // color: red;
  font-size: 27px;
  &:hover{
    height: 58px;
    animation: icon-spin 2s linear infinite;
  }
}
</style>>
