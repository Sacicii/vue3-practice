<template>
  <div class="top-menu-wrapper">
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
      <el-menu-item index="/">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-home"></use>
        </svg>
        <span>首页</span>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bulb"></use>
          </svg>
          <span>分类</span>
        </template>
        <el-menu-item index="/setting">学习笔记</el-menu-item>
        <el-menu-item index="2-2">个人项目</el-menu-item>
        <el-menu-item index="2-3">技术杂烩</el-menu-item>
        <el-menu-item index="2-4">心情随笔</el-menu-item >
      </el-sub-menu>
      <el-menu-item index="4">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shejiaotubiao-02"></use>
        </svg>
        <span>动态</span>
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="5" class="setting">
        <el-icon>
          <Setting />
        </el-icon>
      </el-menu-item>
    </el-menu>
  </div>

</template>

<script>

</script>

<style lang="less" scoped>
@menu-active: #ff7675;

.top-menu-wrapper{
  user-select: none;
  .el-menu-item, .el-sub-menu{
    span{
      padding-left: .1rem;
    }
  }
}
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
.setting{
  height: 58px;
}
.el-icon{
  // color: red;
  font-size: 27px;
  &:hover{
    height: 58px;
    animation: icon-spin 2s linear infinite;
  }
}
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
</style>>
