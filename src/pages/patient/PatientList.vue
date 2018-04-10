<template>
  <div class="container-fluid">
    <div class="row page-title">
      <div class="col-xs-11">
        <h1>患者管理
          <small>Hospital</small>
        </h1>
      </div>
      <div class="col-xs-1">
        <a title="添加">
          <Icon type="plus-round"></Icon>
        </a>
      </div>
    </div>
    <Form :model="formItem" :label-width="80" inline>
        <FormItem label="状态：">
            <Select v-model="formItem.select" style="width:200px">
                <Option value="5">在透</Option>
                <Option value="0">退出</Option>
                <Option value="1">肾移植</Option>
                <Option value="2">转出</Option>
                <Option value="3">死亡</Option>
                <Option value="4">转入</Option>
            </Select>
        </FormItem>
        <FormItem label="姓名：">
            <Input v-model="formItem.input" placeholder="填写姓名" style="width:200px"/>
        </FormItem>
        <FormItem label="姓名简拼：">
            <Input v-model="formItem.input" placeholder="姓名简拼" style="width:200px"/>
        </FormItem>
        <FormItem label="民族：">
            <Select v-model="formItem.select" style="width:200px">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </FormItem>
        <FormItem label="证件号：">
            <Input v-model="formItem.input" placeholder="证件号" style="width:200px"/>
        </FormItem>
        <FormItem label="所属医院：">
          <AutoComplete
          v-model="value1"
          :data="data1"
          @on-search="handleSearch"
          placeholder="请选择"
          style="width:200px"></AutoComplete>
        </FormItem>
        <FormItem>
            <Button type="ghost">查询</Button>
        </FormItem>
    </Form>
    <Table border :row-class-name="rowClassName" :disabled-hover="true" :columns="columns" :data="tableList"></Table>
    <div style="margin: 10px 0 10px 10px;overflow: hidden">
        <div style="float: right;">
            <Page :total="all" :current="cur" :page-size="10" :page-size-opts=[10] @on-change="get" size="small" show-total show-sizer show-elevator></Page>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data:function(){
      return{
        UserType:'3',
        geturl: this.urlConfig + "",
        tableList: [{Id:'1',Name:'lisa',Gender:'2',State:'1'}],
        all: 1, //总页数
        cur: 1, //当前页码
        columns: [
            {
                title: '姓名',
                key: 'Name',
            },{
                title: '性别',
                key: 'Gender',
                width:80,
                render:(h,params)=>{
                    var a = params.row;
                    return h('span',a.Gender=='1'?'男':(a.Gender=='2'?'女':''));
                }
            },{
                title: '出生日期',
                key: 'Birthdate',
                align: 'right',
                width:150,
                render:(h,params)=>{
                    return h('span',params.row.Birthdate?moment(params.row.Birthdate).format("YYYY-MM-DD"):'');
                }
            },{
                title:'年龄',
                key:'Age',
                width:80,
                align: 'right',
            },{
                title:'民族',
                key:'Nation',
            },{
                title:'住院号',
                key:"Ad",
                align: 'right',
            },{
                title:'所属单位',
                key:"HosipitalName",
            },{
                title:'证件类型',
                key:"Idtype",
                render:(h,params)=>{
                    var a = params.row;
                    return h('span',(a.Idtype)?['身份证','护照','港澳台居民身份证','旅行证据','其他'][Number(a.Idtype)]:'');
                }
            },{
                title:'证件号码',
                key:"Idnumber",
                align: 'right',
            },{
                title: '操作',
                key: 'action',
                width: 150,
                align: 'center',
                render: (h, params) => {
                    var a = '-';
                    if(this.UserType=='3'){
                        a = [
                            h('a', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px',
                                    color: '#c5bf66'
                                },
                                class:{
                                    'font-yellow-haze':true,
                                },
                                on: {
                                    click: () => {
                                        this.location(params.row.Id,params.row.State)
                                    }
                                }
                            },[h('i',{
                                class:{'glyphicon glyphicon-edit':true},
                                style:{'font-size':'1.167em'}
                            })] ),
                        ];
                    }
                    return h('div', a );
                }
            }
        ],
        formItem: {
            input: '',
            select: '',
        },
        value1: '',
        data1: []
      }
    },
    mounted:function(){
      this.get(1);
    },
    methods:{
      rowClassName(row, index) {
          if (index % 2 == 0) {
              return 'table-row-height'
          } else {
              return 'table-row-height table-row-bgcolor';
          }
      },
      get: function(pageIndex) {
          
      },
      location:function(id,State){
        this.$router.push({ path: '/pdis/basicInformation/PatientInformation'})
      },
      del: function(id) {
          this.$Modal.confirm({
              title: '',
              width:260,
              content: '<span style="font-size:16px">确定删除么？</span>',
              onOk: () => {
                  
              },
              onCancel: () => {
              }
          });   
      },
      handleSearch:function(value){
        this.data1 = !value ? [] : [
            value,
            value + value,
            value + value + value
        ];
      }
    }
  }
</script>

<style scoped>

</style>
