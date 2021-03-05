<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="stylus">
html,body {
    width: 100%!important;
    height: 100%!important;
    margin: 0!important;
    padding: 0!important;
}
.el-input__inner:focus{
    border:1px solid #7DBFBB!important;
}
.el-textarea__inner:focus {
    border-color: #7DBFBB!important;
}

#app
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    width: 100%!important;
    height: 100%!important;
</style>
