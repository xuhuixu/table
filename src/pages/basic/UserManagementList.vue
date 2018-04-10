<template>
  <div class="container-fluid">
    <div class="row page-title">
      <div class="col-xs-11">
        <h1>用户管理
          <small>User Management</small>
        </h1>
      </div>
      <div class="col-xs-1">
        <a title="添加">
          <Icon type="plus-round"></Icon>
        </a>
      </div>
    </div>
    <form class="form-inline">
      <div class="form-group">
        <label>用户名：</label>
        <input type="text" class="form-control" placeholder="用户名">
      </div>
      <div class="form-group">
        <label>用户姓名：</label>
        <input type="text" class="form-control" placeholder="用户姓名">
      </div>
      <button type="button" class="btn btn-default">查询</button>
    </form>
    <br/>
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
        geturl: this.urlConfig + "",
        tableList: [],
        all: 1, //总页数
        cur: 1, //当前页码
        columns: [
            {
                title: '用户名',
                key: 'UserId',
            },{
                title: '用户姓名',
                key: 'Name',
            },{
                title: '角色',
                key: 'RoleNames',
            },{
                title:'所属单位',
                key:'HosipitalName',
            },{
                title:'所在城市',
                key:'CityName',
            },{
                title:'联系电话',
                key:"Tel"
            },{
                title:"创建日期",
                key:'CreatedDate',
                align: 'right',
                render:(h,params)=>{
                    var a = params;
                    return h('span',params.row.CreatedDate?moment(params.row.CreatedDate).format("YYYY-MM-DD"):'');
                }
            },{
                title:"状态",
                key:'State',
                render:(h,params)=>{
                    return h('span', (params.row.State==true)?'启用':((params.row.State==false)?'禁用':'') );
                }
            },{
                title: '操作',
                key: 'action',
                width: 150,
                align: 'center',
                render: (h, params) => {
                    var a;
                    if(( this.UserType == '0'&& this.UserId != params.row.Id) || (this.UserType=='1'&& params.row.UserType == 3)||(this.UserType=='2'&& params.row.UserType == 3)){
                        a = h('a', {
                            props: {
                                type: 'error',
                                size: 'small'
                            },
                            style: {
                                'float':'left', 'width':'50%', 'text-align':'center'
                            },
                            class:{'font-red-haze':true},
                            on: {
                                click: () => {
                                    this.del(params.row.Id)
                                }
                            }
                        }, [h('i',{
                            class:{'fa fa-trash fa-lg':true},
                            style:{'font-size':'1.167em'}
                        })] );
                    }
                    return h('div', [
                        h('a', {
                            props: {
                                type: 'primary',
                                size: 'small'
                            },
                            style: {
                                'float':'left', 'width':'50%', 'text-align':'center'
                            },
                            class:{'font-yellow-haze':true},
                            on: {
                                click: () => {
                                    this.edit(params.row.Id)
                                }
                            },
                            attrs: {
                                'data-toggle':"modal", 
                                'data-target':"#myModal"
                            }
                        },[h('i',{
                            class:{'fa fa-edit fa-lg':true},
                            style:{'font-size':'1.167em'}
                        })] ),
                        a
                    ]);
                }
            }
        ],
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
      edit:function(id){

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
    }
  }
</script>

<style scoped>

</style>
