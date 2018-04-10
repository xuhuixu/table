<template>
  <div class="layout">
    <Layout>
        <top></top>
        <Header class="layout-top">
            <navbar></navbar>
        </Header>
        <Content class="layout-Content">
            <!--内容-->
            <router-view></router-view>
        </Content>
        <Footer class="layout-footer">
            2016 © 苏州华墨信息科技有限公司&nbsp;&nbsp;
            <a href="http://www.huamotec.com/" title="China’s Leading Kidney Diseases Information Solutions Provider" target="_blank">中国领先的肾脏病解决方案提供商</a>
        </Footer>
    </Layout>
  </div>
</template>

<script>
    import top from './top';
    import navbar from './navbar';
    export default {
        name: 'TemplateHome',
        components: {
            top,
            navbar
        },
        mounted(){
            
        }
    }
</script>

<style>
    .layout{
        background: #f5f7f9;
        overflow: hidden;
    }
    .layout-top{
        z-index: 1;
        position: fixed;
        left:0px;
        right:0px;
        top: 75px;
    }
    .layout-Content{
        z-index: 0;
        height: auto;
        min-height: 324px;
        margin: 159px 50px 99px; 
        /* 69px */
        overflow-y: hidden;
        overflow-x: hidden;
        background: white;
    }
    .layout-footer{
        position: fixed;
        left:0px;
        right:0px;
        bottom: 0px;
        background: #495060;
        color: #a2abb7;
    }
    .layout-footer a{
       color: #e6e6e6; 
    }
</style>
