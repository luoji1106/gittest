<template>
  <div id="TabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style>
  #TabBar {
    display: flex;
    background-color: #f6f6f6;
    box-shadow: 0 -1px 1px rgba(111,111,111,.2);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
