<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'App',
        components: {
        },
        mounted(){
        }
    }
</script>

<style>
    body{
        background-color: #f5f7f9 !important;
        font-family: 微软雅黑;
    }
    .ivu-menu-darkblue.ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown{
        background: #495060;
    }
    .page-title{
        border-bottom: 1px solid rgb(238, 238, 238);
        margin-bottom: 20px;
    }
    .page-title div h1{
        color: #697882;font-size: 22px;
    }
    .page-title div h1 small{
        color: #9eacb4;font-size: 13px;
    }
    .page-title div a{
        color: #acbac6;font-size: 26px;float:right;padding: 13px 0px;
    }
    .page-title div a i{
        font-weight:600
    }
    .ivu-table .table-row-height td {
        height: 35px;
    }

    .ivu-table .table-row-bgcolor td {
        background-color: #fbfcfd;
    }

    .ivu-table .table-row-no-bgcolor td {
        background-color: #fff;
    }
    th.ivu-table-column-right{
        text-align:left!important;
    }
</style>
