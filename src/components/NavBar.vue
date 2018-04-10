<template>
    <Menu class="ivu-menu-darkblue" mode="horizontal" theme="dark" active-name="1">
        <div v-for="(item,index) in routers" :key="item.Name">
            <Menu-item :name="indexs(index)" v-if="item.Permissions.length<=0">
                <router-link :to="{path:item.Url}" tag="div" class="ivu-menu-submenu-title" style="width:100%;">
                    <i :class="item.ImgCss"></i>{{item.Name}}
                </router-link>
            </Menu-item>
            <Submenu :name="indexs(index)" v-if="item.Permissions.length>0">
                <template slot="title">
                    <i :class="item.ImgCss"></i>
                    {{item.Name}}
                </template>
                <Menu-item :name="indexChilds(index,indexChild)" v-for="(child,indexChild) in item.Permissions" :key="child.Name"> 
                    <router-link :to="{path:child.Url}" tag="div" style="width:100%;">{{child.Name}}</router-link>
                </Menu-item>
            </Submenu>
        </div>
    </Menu>
</template>
<script>
var barData = [
    {
        "ImgCss":"ivu-icon ivu-icon-home",
        "Name":"首页",
        "Url":"/Dashboard",
        "Permissions":[],
    },{
        "ImgCss":"ivu-icon ivu-icon-person-stalker",
        "Name":"XX管理",
        "Url":"/Patient",
        "Permissions":[
            {
                "Permissions":[],
                "ImgCss":"",
                "Name":"快速添加",
                "Url":"/Patient/UserManagementQuickAddForm"
            }
        ],
    },{
        "ImgCss":"glyphicon glyphicon-calendar",
        "Name":"年度统计",
        "Url":"/Statistics/annual",
        "Permissions":[{
                "ImgCss":"",
                "Name":"年度统计",
                "Url":"/Statistics/annual/AnnualStatistics",
                "Permissions":[],
            }]
    },{
        "ImgCss":"ivu-icon ivu-icon-android-settings",
        "Name":"系统管理",
        "Url":"/SystemManagement",
        "Permissions":[{
                "ImgCss":"",
                "Name":"用户管理",
                "Url":"/SystemManagement/UserManagementList",
                "Permissions":[],
            },{
                "ImgCss":"",
                "Name":"角色管理",
                "Url":"/SystemManagement/RoleManagementList",
                "Permissions":[],
            },{
                "ImgCss":"",
                "Name":"权限管理",
                "Url":"/SystemManagement/PrivilegeManagementList",
                "Permissions":[],
            },{
                "ImgCss":"",
                "Name":"消息管理",
                "Url":"/SystemManagement/MessageManagementList",
                "Permissions":[],
            },{
                "ImgCss":"",
                "Name":"通知管理",
                "Url":"/SystemManagement/NotificationManagementList",
                "Permissions":[],
            },{
                "ImgCss":"",
                "Name":"操作痕迹",
                "Url":"/SystemManagement/OperatingTracesList",
                "Permissions":[],
            },{
                "ImgCss":"",
                "Name":"数据字典",
                "Url":"/SystemManagement/BasicDataList",
                "Permissions":[],
            },{
                "ImgCss":"",
                "Name":"参数设置",
                "Url":"/SystemManagement/ParameterConfigurationList",
                "Permissions":[],
            }]
    }
];
export default {
    name:'navbar',
    data(){
        return{
            routers:barData
        }
    },
    mounted(){
    },
    methods: {
        indexs: function(index) {
            return index+1;
        },
        indexChilds: function(index,indexChild) {
            return (index+1)+'-'+(indexChild+1);
        },
    }
}
</script>

<style scoped>
    
    .ivu-menu-darkblue.ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item{
        color: #c9cbd0;
    }
    .ivu-menu-darkblue.ivu-menu-horizontal .ivu-menu-item:hover,.ivu-menu-darkblue.ivu-menu-horizontal .ivu-menu-submenu-title:hover {
        color: #fff !important;
        background: #4e5966!important;
    }
    .ivu-menu-darkblue.ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item-selected,.ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item-selected:hover {
        color: #fff;
        background: #4e5966;
    }
    .ivu-menu-darkblue.ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item-selected.ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item-focus {
        background: #4e5966;
    }
    .patient-info{
        position: relative; 
        float: right; 
        padding-top: 8px; 
        line-height: 18px; 
        color: aliceblue;
    }
    .patient-info span{
        letter-spacing: 1px;
    }
</style>

