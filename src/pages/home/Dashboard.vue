<template>
  <div class="container-fluid">
    <div class="row page-title">
      <div class="col-xs-11">
        <h1>示例
          <small>demon</small>
        </h1>
      </div>
    </div>
    <Row style="background:#eee;padding:20px">
        <i-col span="11">
            <Card :bordered="false">
                <p slot="title">Borderless card</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
            </Card>
        </i-col>
        <i-col span="11" offset="2">
            <Card shadow>
                <p slot="title">Use a card with a shadow effect</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
            </Card>
        </i-col>
    </Row>
    <br/>
    <Row :gutter="16">
        <i-col span="8">
            <Alert show-icon closable>
                An info prompt
                <template slot="desc">
                    Content of prompt. Content of prompt. Content of prompt. Content of prompt.
                </template>
            </Alert>
        </i-col>
        <i-col span="8" >
            <Alert type="success" show-icon closable>
                A success prompt
                <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
            </Alert>
        </i-col>
        <i-col span="8">
            <Alert type="warning" show-icon closable>
                 A warning prompt
                <template slot="desc">
                    Content of prompt. Content of prompt. Content of prompt.
                </template>
            </Alert>
        </i-col>
    </Row>
    <Row :gutter="16">
        <i-col span="12" v-for="index in 2" :key="index">
            <Collapse v-model="value1" accordion>
                <Panel name="1">
                    史蒂夫·乔布斯
                    <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
                </Panel>
                <Panel name="2">
                    斯蒂夫·盖瑞·沃兹尼亚克
                    <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                </Panel>
                <Panel name="3">
                    乔纳森·伊夫
                    <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
                </Panel>
            </Collapse>
        </i-col>
    </Row>
    <br/>
    <Table :columns="columns7" :data="tableList" border height="500"></Table>
    <br/>

    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" :style="{width:'50%'}">
        <FormItem label="姓名" prop="name">
            <Input v-model="formValidate.name" placeholder="填写姓名"/>
        </FormItem>
        <FormItem label="邮箱" prop="mail">
            <Input v-model="formValidate.mail" placeholder="填写邮箱"/>
        </FormItem>
        <FormItem label="城市" prop="city">
            <Select v-model="formValidate.city" placeholder="选择城市">
                <Option value="beijing">北京</Option>
                <Option value="shanghai">上海</Option>
                <Option value="shenzhen">南京</Option>
            </Select>
        </FormItem>
        <FormItem label="日期">
            <Row>
                <i-Col span="11">
                    <FormItem prop="date">
                        <DatePicker type="date" placeholder="选择日期" v-model="formValidate.date"></DatePicker>
                    </FormItem>
                </i-Col>
                <i-Col span="2" style="text-align: center">-</i-Col>
                <i-Col span="11">
                    <FormItem prop="time">
                        <TimePicker type="time" placeholder="选择时间" v-model="formValidate.time"></TimePicker>
                    </FormItem>
                </i-Col>
            </Row>
        </FormItem>
        <FormItem label="性别" prop="gender">
            <RadioGroup v-model="formValidate.gender">
                <Radio label="male">男</Radio>
                <Radio label="female">女</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="兴趣" prop="interest">
            <CheckboxGroup v-model="formValidate.interest">
                <Checkbox label="吃"></Checkbox>
                <Checkbox label="睡"></Checkbox>
                <Checkbox label="跑步"></Checkbox>
                <Checkbox label="看电影"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem label="自我简介" prop="desc">
            <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="自我介绍..."/>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
    <br/>
    <Row :gutter="16">
        <i-col span="5">
            <Cascader :data="data" v-model="value2"></Cascader>
        </i-col>
        <i-col span="8">
            <Tree :data="data5" :render="renderContent"></Tree>
        </i-col>
    </Row>
    <br/>
    <Row>
        
    </Row>
    
  </div>
</template>

<script>
    export default {
        data:function(){
             return {
                value1:'1',
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
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '姓名不能为空', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: '邮箱不能为空', trigger: 'blur' },
                        { type: 'email', message: '邮箱格式出错', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: '请选择城市', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: '至少选择一个兴趣', trigger: 'change' },
                        { type: 'array', max: 2, message: '最好选择两个兴趣', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'string', message: '请选择时间', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写个人简介', trigger: 'blur' },
                        { type: 'string', min: 20, message: '个人简介不能少于20个字', trigger: 'blur' }
                    ]
                },
                value2: ['jiangsu', 'suzhou', 'zhuozhengyuan'],
                data: [{
                        value: 'beijing',
                        label: '北京',
                        children: [
                            {
                                value: 'gugong',
                                label: '故宫'
                            },
                            {
                                value: 'tiantan',
                                label: '天坛'
                            },
                            {
                                value: 'wangfujing',
                                label: '王府井'
                            }
                        ]
                    }, {
                        value: 'jiangsu',
                        label: '江苏',
                        children: [
                            {
                                value: 'nanjing',
                                label: '南京',
                                children: [
                                    {
                                        value: 'fuzimiao',
                                        label: '夫子庙',
                                    }
                                ]
                            },
                            {
                                value: 'suzhou',
                                label: '苏州',
                                children: [
                                    {
                                        value: 'zhuozhengyuan',
                                        label: '拙政园',
                                    },
                                    {
                                        value: 'shizilin',
                                        label: '狮子林',
                                    }
                                ]
                            }
                        ],
                    }
                ],
                data5: [
                    {
                        title: 'parent 1',
                        expand: true,
                        render: (h, { root, node, data }) => {
                            return h('span', {
                                style: {
                                    display: 'inline-block',
                                    width: '100%'
                                }
                            }, [
                                h('span', [
                                    h('Icon', {
                                        props: {
                                            type: 'ios-folder-outline'
                                        },
                                        style: {
                                            marginRight: '8px'
                                        }
                                    }),
                                    h('span', data.title)
                                ]),
                                h('span', {
                                    style: {
                                        display: 'inline-block',
                                        float: 'right',
                                        marginRight: '32px'
                                    }
                                }, [
                                    h('Button', {
                                        props: Object.assign({}, this.buttonProps, {
                                            icon: 'ios-plus-empty',
                                            type: 'primary'
                                        }),
                                        style: {
                                            width: '52px'
                                        },
                                        on: {
                                            click: () => { this.append(data) }
                                        }
                                    })
                                ])
                            ]);
                        },
                        children: [
                            {
                                title: 'child 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        expand: true
                                    },
                                    {
                                        title: 'leaf 1-1-2',
                                        expand: true
                                    }
                                ]
                            },
                            {
                                title: 'child 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        expand: true
                                    },
                                    {
                                        title: 'leaf 1-2-1',
                                        expand: true
                                    }
                                ]
                            }
                        ]
                    }
                ],
                buttonProps: {
                    type: 'ghost',
                    size: 'small',
                }
             }
        },
        mounted(){
            this.getTableList();
            fetch('./static/test.json')
            .then(function(response) {
                return response.json()
            }).then(function(json) {
                console.log('parsed json', json)
            }).catch(function(ex) {
                console.log('parsing failed', ex)
            })
        },
        methods: {
            renderContent (h, { root, node, data }) {
                return h('span', {
                    style: {
                        display: 'inline-block',
                        width: '100%'
                    }
                }, [
                    h('span', [
                        h('Icon', {
                            props: {
                                type: 'ios-paper-outline'
                            },
                            style: {
                                marginRight: '8px'
                            }
                        }),
                        h('span', data.title)
                    ]),
                    h('span', {
                        style: {
                            display: 'inline-block',
                            float: 'right',
                            marginRight: '32px'
                        }
                    }, [
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'ios-plus-empty'
                            }),
                            style: {
                                marginRight: '8px'
                            },
                            on: {
                                click: () => { this.append(data) }
                            }
                        }),
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'ios-minus-empty'
                            }),
                            on: {
                                click: () => { this.remove(root, node, data) }
                            }
                        })
                    ])
                ]);
            },
            append (data) {
                const children = data.children || [];
                children.push({
                    title: 'appended node',
                    expand: true
                });
                this.$set(data, 'children', children);
            },
            remove (root, node, data) {
                const parentKey = root.find(el => el === node).parent;
                const parent = root.find(el => el.nodeKey === parentKey).node;
                const index = parent.children.indexOf(data);
                parent.children.splice(index, 1);
            },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
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
            edit:function(id){

            }
        }
    }
</script>
