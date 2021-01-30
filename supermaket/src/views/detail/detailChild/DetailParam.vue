<template>
  <div class="param-info">
    <div class="rule">
      <div v-for="(item, index) in paramInfo.tables" :key="index">
        <span v-for="(text, index) in item" :key="index">{{text}}</span>
      </div>
    </div>
    <div class="info">
      <div v-for="(item, index) in paramInfo.set" :key="index">
        <span>{{item.key}}</span>
        <span>{{item.value}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      paramInfo: {
        type: Object,
        default() {
          return {};
        }
      }
    }
  }
</script>

<style scoped>
  .param-info {
    padding: 20px 10px;
  }

  .rule {
    box-shadow: 0px 3px rgba(111,111,111,.2);
    margin-bottom: 3px;
  }
  .rule>div{
    line-height: 40px;
    display: flex;
    border-bottom: 1px rgba(111,111,111,.2) solid;
  }
  .rule>div span:nth-child(1) {
    flex: 1.5;
  }
  .rule>div span {
    flex: 1;
  }

  .info {
    box-shadow: 0px 3px rgba(111,111,111,.2);
    margin-bottom: 3px;
  }
  .info>div {
    height: 40px;
    border-bottom: 1px rgba(111,111,111,.2) solid;
    display: flex;
    align-items: center;
  }
  .info>div span:nth-child(1) {
    flex: 1;
  }
  .info>div span:nth-child(2) {
    flex: 2;
    color: var(--color-high-text);
    font-size: 14px;
  }
</style>