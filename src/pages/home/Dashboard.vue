<template>
  <div class="container-fluid">
    <div class="row page-title">
      <div class="col-xs-11">
        <h1>示例
          <small>demon</small>
        </h1>
      </div>
    </div>
    <Table :columns="columns7" :data="tableList" border height="500"></Table>
    <br/>
    <br/>
    <br/>
    <br/>
    <Table :columns="columns8" :data="tableList" border height="500"></Table>
  </div>
</template>

<script>
    export default {
        data:function(){
             return {
                tableList:[],
                columns7:[
                    {
                        title: '年龄',
                        key: 'age',
                        align:'center',
                        width: 200,
                        sortable: true,
                        filters: [
                            {
                                label: '大于等于 25岁',
                                value: 1
                            },
                            {
                                label: '小于 25岁',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.age >= 25;
                            } else if (value === 2) {
                                return row.age < 25;
                            }
                        }
                    },
                    {
                        title:'姓名',
                        key:'name',
                        align:'center',
                        width:200,
                        filters: [
                            {
                                label: '陈明',
                                value: 1
                            },
                            {
                                label: '王诺',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.name == '陈明';
                            } else if (value === 2) {
                                return row.name == '王诺';
                            }
                        }
                    },{
                        title:'性别',
                        key:'sex',
                        align:'center',
                        width: 200
                    },
                    {
                        title:'自我评价',
                        key:'evaluation',
                        align:'center',
                        width:200
                    },{
                        title:'婚姻情况',
                        key:'situation',
                        align:'center',
                        width:200
                    },{
                        title:'学位',
                        key:'degree',
                        align:'center',
                        width:200
                    },
                    {
                        title:'其他',
                        align:'center',
                        children:[
                            {
                                title:'住址',
                                key:'address',
                                align:'center',
                                width: 200
                            },{
                                title:'职业',
                                key: 'job',
                                align:'center',
                                width:200
                            },{
                                title:'兴趣',
                                key:'interest',
                                align:'center',
                                width: 200
                            }
                        ]
                    },{
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        fixed: 'right',
                        render: (h, params) => {
                            return h('div', [
                                h('a', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        'float':'left', 'width':'100%', 'text-align':'center'
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
                                })] )
                            ]);
                        }
                    }
                ],
                columns8:[
                    {
                        title:'姓名',
                        key:'name',
                        align:'center',
                        width:200,
                    },{
                        title: '年龄',
                        key: 'age',
                        align:'center',
                        width: 200,
                        sortable: true,
                        filters: [
                            {
                                label: '大于等于 25岁',
                                value: 1
                            },
                            {
                                label: '小于 25岁',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.age >= 25;
                            } else if (value === 2) {
                                return row.age < 25;
                            }
                        }
                    },{
                        title:'性别',
                        key:'sex',
                        align:'center',
                        width: 200
                    },
                    {
                        title:'自我评价',
                        key:'evaluation',
                        align:'center',
                        width:200
                    },{
                        title:'婚姻情况',
                        key:'situation',
                        align:'center',
                        width:200
                    },{
                        title:'学位',
                        key:'degree',
                        align:'center',
                        width:200
                    },
                    {
                        title:'其他',
                        align:'center',
                        children:[
                            {
                                title:'住址',
                                key:'address',
                                align:'center',
                                width: 200
                            },{
                                title:'职业',
                                key: 'job',
                                align:'center',
                                width:200
                            },{
                                title:'兴趣',
                                key:'interest',
                                align:'center',
                                width: 200
                            }
                        ]
                    },{
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        fixed: 'right',
                        render: (h, params) => {
                            return h('div', [
                                h('a', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        'float':'left', 'width':'100%', 'text-align':'center'
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
                                })] )
                            ]);
                        }
                    }
                ],
             }
        },
        mounted(){
            this.getTableList();
        },
        methods: {
            getTableList:function(){
                const data = [];
                for (let i = 0; i < 20; i++) {
                    data.push({
                        key: i,
                        name: '陈明',
                        sex:'男',
                        age: i + 21,
                        address:'北京',
                        job:'医生',
                        interest:'油画',
                        evaluation:'踏实能干,有丰富的工作经验。',
                        situation:'已婚',
                        degree:'本科',
                    });
                }
                this.tableList = data;
            },
        }
    }
</script>
