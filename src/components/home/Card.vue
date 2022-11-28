<template>
  <div class="title">
    <slot>
      <span>火爆推荐</span>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang="less" scoped>
.title{
  font-size: 0.6857rem;
  margin-bottom: 0.5714rem;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before {
    width: 0.2857rem;
    height: 0.2857rem;
    background-color: black;
    border-radius: 50%;
    content:'  ';
    // position: absolute;
    display: block;
    margin-right: 0.1429rem;
  }
  &::after {
    width: 0.2857rem;
    height: 0.2857rem;
    background-color: black;
    border-radius: 50%;
    content:' ';
    margin-left: 0.1429rem;
    display: block;
  }
}
</style>
