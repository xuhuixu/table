<template>
    <Menu class="ivu-menu-darkblue" mode="horizontal" theme="dark" active-name="1">
        <Menu-item v-if="$route.path.indexOf('pdis')>=0" name="0">
            <router-link :to="{path:'/Patient/PatientList'}" tag="div" class="ivu-menu-submenu-title" style="width:100%;">
                <i class="ivu-icon ivu-icon-ios-undo-outline"></i>
            </router-link>
        </Menu-item>
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
        <div class="patient-info" v-if="$route.path.indexOf('pdis')>=0">
            <span>康姆莉&nbsp;&nbsp;女&nbsp;&nbsp;28岁</span><br>新疆医科大学第一附属医院
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
        "Name":"患者管理",
        "Url":"/Patient",
        "Permissions":[
            {
                "Permissions":[],
                "ImgCss":"",
                "Name":"快速添加",
                "Url":"/Patient/UserManagementQuickAddForm"
            },{
                "Permissions":[],
                "ImgCss":"",
                "Name":"患者管理",
                "Url":"/Patient/PatientList"
            }
        ],
    },{
        "ImgCss":"ivu-icon ivu-icon-clipboard",
        "Name":"透析中西管理",
        "Url":"/DialysisChineseWesternManagement",
        "Permissions":[{
                        "Permissions":[],
                        "ImgCss":"",
                        "Name":"医院信息管理",
                        "Url":"/DialysisChineseWesternManagement/HospitalList"
                    },{
                        "Permissions":[],
                        "ImgCss":"",
                        "Name":"医护技人员登记",
                        "Url":"/DialysisChineseWesternManagement/MedicalTechniciansRegistrationList"
                    },{
                        "Permissions":[],
                        "ImgCss":"",
                        "Name":"透析中心设备登记",
                        "Url":"/DialysisChineseWesternManagement/DialysisRegistrationList"
                    },{
                        "Permissions":[],
                        "ImgCss":"",
                        "Name":"水质质控检测",
                        "Url":"/DialysisChineseWesternManagement/DialysisWaterQualityControlTestList"
                    },
                    {
                        "Permissions":[],
                        "ImgCss":"",
                        "Name":"透析器登记",
                        "Url":"/DialysisChineseWesternManagement/DialyzerRegistrationList"
                    },{
                        "Permissions":[],
                        "ImgCss":"",
                        "Name":"床位登记",
                        "Url":"/DialysisChineseWesternManagement/BedsRegistrationList"
                    },{
                        "Permissions":[],
                        "ImgCss":"",
                        "Name":"透析用水及透析液管理",
                        "Url":"/DialysisChineseWesternManagement/DialysisWaterAndDialysateRegistrationList"
                    },{
                        "Permissions":[],
                        "ImgCss":"",
                        "Name":"用电总量登记",
                        "Url":"/DialysisChineseWesternManagement/TotalElectricityConsumptionRegistrationList"
                    },{
                        "Permissions":[],
                        "ImgCss":"",
                        "Name":"用水总量登记",
                        "Url":"/DialysisChineseWesternManagement/TotalWaterConsumptionRegistrationList"
                    }],
    },{
        "ImgCss":"ivu-icon ivu-icon-stats-bars",
        "Name":"统计报表",
        "Url":"/Statistics/realTime",
        "Permissions":[
            {
                "ImgCss":"",
                "Name":"质控指标达标率",
                "Url":"/Statistics/realTime/QualityControlIndexIndex",
                "Permissions":[],
            },{
                "ImgCss":"",
                "Name":"传染学指标检验率",
                "Url":"/Statistics/realTime/ContagionsTestRate",
                "Permissions":[],
            },{
                "ImgCss":"",
                "Name":"贫血指标统计",
                "Url":"/Statistics/realTime/AnemiaIndexStatistics",
                "Permissions":[],
            },{
                "ImgCss":"",
                "Name":"质控过程指标完成情况",
                "Url":"/Statistics/realTime/QualityControlProcessIndicatorsCompletion",
                "Permissions":[],
            },
            {
                "ImgCss":"",
                "Name":"不同年龄患者原发病构成",
                "Url":"/Statistics/realTime/DifferentAgesPatientSoriginalPathogenesis",
                "Permissions":[],
            },{
                "ImgCss":"",
                "Name":"骨矿物质代谢异常控制统计",
                "Url":"/Statistics/realTime/BoneMineralMetabolismAbnormalControlStatistics",
                "Permissions":[],
            },
            {
                "ImgCss":"",
                "Name":"患者透析龄统计",
                "Url":"/Statistics/realTime/PatientDialysisAgeStatistics",
                "Permissions":[],
            },{
                "ImgCss":"",
                "Name":"患者死亡原因统计",
                "Url":"/Statistics/realTime/DeathCauseStatistics",
                "Permissions":[],
            },{
                "ImgCss":"",
                "Name":"患者透析情况季度统计",
                "Url":"/Statistics/realTime/PatientsDialysisQuarterlyStatistics",
                "Permissions":[],
            },{
                "ImgCss":"",
                "Name":"患者透析情况年度统计",
                "Url":"/Statistics/realTime/PatientsDialysisAnnualStatistics",
                "Permissions":[],
            },{
                "ImgCss":"",
                "Name":"感染比率统计",
                "Url":"/Statistics/realTime/InfectionRateStatistics",
                "Permissions":[],
            },{
                "ImgCss":"",
                "Name":"患者乙（丙）肝转阳统计",
                "Url":"/Statistics/realTime/PatientLiverDiseaseTurnsYangStatistics",
                "Permissions":[],
            },]
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
var pidsBarData=[
    {
        'ImgCss':'fa fa-hospital-o',
        'Name':'基础信息',
        'Url':'/pdis/basicInformation/PatientInformation',
        'Permissions':[
            {
                'ImgCss':'',
                'Name':'基本信息',
                'Url':'/pdis/basicInformation/PatientInformation',
                'Permissions':[] 
            },{
                'ImgCss':'',
                'Name':'既往病史',
                'Url':'/pdis/basicInformation/PMHForm',
                'Permissions':[]
            },{
                'ImgCss':'',
                'Name':'体格检查',
                'Url':'/pdis/basicInformation/PhysicalExaminationList',
                'Permissions':[]
            },{
                'ImgCss':'',
                'Name':'生命体征',
                'Url':'/pdis/basicInformation/VitalSignsList',
                'Permissions':[]
            }
        ]
    },{
        'ImgCss':'fa fa-user-md',
        'Name':'诊断信息',
        'Url':'/pdis/diagnosticMessage/ComplicationList',
        'Permissions':[
            {
                'ImgCss':'',
                'Name':'临床诊断',
                'Url':'/pdis/diagnosticMessage/ClinicalDiagnosisForm',
                'Permissions':[]
            },{
                'ImgCss':'',
                'Name':'原发病诊断',
                'Url':'/pdis/diagnosticMessage/ProtopathyDiagList',
                'Permissions':[]
            },{
                'ImgCss':'',
                'Name':'病理诊断',
                'Url':'/pdis/diagnosticMessage/PathologicalDiagnosisForm',
                'Permissions':[]
            },{
                'ImgCss':'',
                'Name':'并发症诊断',
                'Url':'/pdis/diagnosticMessage/ComplicationList',
                'Permissions':[]
            },{
                'ImgCss':'',
                'Name':'传染病诊断',
                'Url':'/pdis/diagnosticMessage/LemologicalDiagnoticsList',
                'Permissions':[]
            },{
                'ImgCss':'',
                'Name':'肿瘤诊断',
                'Url':'/pdis/diagnosticMessage/TumorDiagnosisList',
                'Permissions':[]
            },{
                'ImgCss':'',
                'Name':'过敏诊断',
                'Url':'/pdis/diagnosticMessage/AnaphylodiagnosisList',
                'Permissions':[]
            }
        ]
    },{
        'ImgCss':'fa fa-retweet',
        'Name':'腹透信息',
        'Url':'/pdis/peritonealDialysis/VascularAccessList',
        'Permissions':[
            {
                'ImgCss':'',
                'Name':'腹透通路',
                'Url':'/pdis/peritonealDialysis/VascularAccessList',
                'Permissions':[]
            },{
                'ImgCss':'',
                'Name':'透析处方',
                'Url':'/pdis/peritonealDialysis/DialysisPrescriptionList',
                'Permissions':[]
            },{
                'ImgCss':'',
                'Name':'透析充分性',
                'Url':'/pdis/peritonealDialysis/DialysisAdequacyList',
                'Permissions':[]
            },{
                'ImgCss':'',
                'Name':'合用其它透析模式',
                'Url':'/pdis/peritonealDialysis/JoinDialysisModeList',
                'Permissions':[]
            },{
                'ImgCss':'',
                'Name':'净超滤量',
                'Url':'/pdis/peritonealDialysis/NetUFList',
                'Permissions':[]
            },{
                'ImgCss':'',
                'Name':'腹膜透析过程记录',
                'Url':'/pdis/peritonealDialysis/DialysisProcessRecordsList',
                'Permissions':[]
            },{
                'ImgCss':'',
                'Name':'腹膜平衡试验',
                'Url':'/pdis/peritonealDialysis/BalanceTestList',
                'Permissions':[]
            },{
                'ImgCss':'',
                'Name':'腹透相关感染',
                'Url':'/pdis/peritonealDialysis/PDRelatedInfectionList',
                'Permissions':[]
            },{
                'ImgCss':'',
                'Name':'腹膜非感染并发症',
                'Url':'/pdis/peritonealDialysis/PDNoInfectionComplicationsList',
                'Permissions':[]
            },{
                'ImgCss':'',
                'Name':'更换短管记录',
                'Url':'/pdis/peritonealDialysis/ReplaceTheShortTubeList',
                'Permissions':[]
            },{
                'ImgCss':'',
                'Name':'转归情况',
                'Url':'/pdis/peritonealDialysis/LapseToList',
                'Permissions':[]
            }
        ]
    },{
        'ImgCss':'fa fa-heartbeat',
        'Name':'治疗信息',
        'Url':'/pdis/treatmentInformation/ErythropoietinList',
        'Permissions':[
            {
                'ImgCss':'',
                'Name':'促红素',
                'Url':'/pdis/treatmentInformation/ErythropoietinList',
                'Permissions':[]
            },{
                'ImgCss':'',
                'Name':'铁剂',
                'Url':'/pdis/treatmentInformation/IronList',
                'Permissions':[]
            },{
                'ImgCss':'',
                'Name':'抗高血压药',
                'Url':'/pdis/treatmentInformation/AntihypertensiveList',
                'Permissions':[]
            },{
                'ImgCss':'',
                'Name':'活性维生素D',
                'Url':'/pdis/treatmentInformation/AlphaD3List',
                'Permissions':[]
            },{
                'ImgCss':'',
                'Name':'钙剂',
                'Url':'/pdis/treatmentInformation/CalciumRecordList',
                'Permissions':[]
            },{
                'ImgCss':'',
                'Name':'降磷药物',
                'Url':'/pdis/treatmentInformation/DropPhosphorusDrugList',
                'Permissions':[]
            },{
                'ImgCss':'',
                'Name':'其它药物治疗',
                'Url':'/pdis/treatmentInformation/OtherDrugRecordList',
                'Permissions':[]
            }
        ]
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
        this.fetchData();
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData:function(curVal,oldVal){
            if( this.$route.path.indexOf('pdis')>=0 ){
                this.routers = pidsBarData;
            }else{
                this.routers = barData;
            }
        },
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

