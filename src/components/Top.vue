<template>
    <div class="layout-title">
        <span class="bold" style="font-size: 24px;width: 450px; letter-spacing: 1px;color: #5C9BD1!important;">华墨标准版透析质控平台 1.0 </span>
        <div class="layout-title-operation">
            <Dropdown trigger="click">
                <span>
                    <Badge count="3">
                        <Icon type="ios-bell-outline"></Icon>
                    </Badge>
                </span>
                <DropdownMenu slot="list" class="menu-card">
                    <div class="menu-card-title">
                        您有2条待查看通知<a>查看全部</a>
                    </div>
                    <div class="menu-card-body">
                        <div v-for="index in 3" :key="index"> 通知 <small class="badge">1个月前</small></div>
                    </div>
                </DropdownMenu>
            </Dropdown>
            <Dropdown trigger="click" placement="bottom-end">
                <span>
                    <Badge count="3">
                        <Icon type="android-drafts"></Icon>
                    </Badge>
                </span>
                <DropdownMenu slot="list" class="menu-card">
                    <div class="menu-card-title">
                        您有2条待处理消息<a>查看全部</a>
                    </div>
                    <div class="menu-card-body">
                        <div v-for="index in 3" :key="index"> 消息 <small class="badge">1个月前</small></div>
                    </div>
                </DropdownMenu>
            </Dropdown>
            <Dropdown trigger="click" placement="bottom-end">
                <span style="font-size:16px">
                    管理员
                    <Icon type="arrow-down-b"></Icon>
                </span>
                <DropdownMenu slot="list" style="width:110px;">
                    <DropdownItem><Icon type="ios-locked-outline" style="width: 15px;"></Icon>锁定账户</DropdownItem>
                    <DropdownItem><Icon type="key" style="width: 15px;"></Icon>注销账户</DropdownItem>
                    <DropdownItem><Icon type="wrench" style="width: 15px;"></Icon>修改密码</DropdownItem>
                    <DropdownItem divided><Icon type="android-time" style="width: 15px;"></Icon>登录记录</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    </div>
</template>
<script>
export default {
  name: 'top'
}
</script>

<style scoped>
    .layout-title{
        padding: 20px 50px 0;
        font-size: 20px;
        background: white;
        height: 75px;
        position: fixed;
        z-index: 2;
        top: 0px;
        right: 0px;
        left: 0px;
    }
    .layout-title-operation{
        float: right;
    }
    .layout-title-operation>div.ivu-dropdown{
        margin-left:25px;
    }
    .menu-card{
        width:250px;
        font-size:13px;
        color:#495060;
        letter-spacing:1px;
    }
    .menu-card .menu-card-title{
        font-weight: 600;
        border-bottom:1.5px solid #ddd;
        padding:8px 9px;
    }
    .menu-card .menu-card-title a{
        float: right;
    }
    .menu-card-body div:hover{
        background-color: rgb(245, 247, 249);
    }
    .menu-card-body div{
        width: 100%;
        padding: 9px 9px;
        border-bottom: 1px solid #ddd;
    }
    .menu-card-body div small{
        float: right;
    }
</style>

