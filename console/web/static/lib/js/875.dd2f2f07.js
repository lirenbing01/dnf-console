"use strict";(self["webpackChunkvue3_template"]=self["webpackChunkvue3_template"]||[]).push([[875],{5875:function(e,a,l){l.r(a),l.d(a,{default:function(){return N}});var t=l(3396),s=l(4870);const d=e=>((0,t.dD)("data-v-2eaea25e"),e=e(),(0,t.Cn)(),e),r={class:"dash-header"},n=d((()=>(0,t._)("span",{class:"fs-14"},"活跃用户",-1))),o=d((()=>(0,t._)("p",null,[(0,t._)("span",null,"6,300")],-1))),p={class:"right-icon"},c=d((()=>(0,t._)("span",{class:"fs-14"},"活跃角色",-1))),i=d((()=>(0,t._)("p",null,[(0,t._)("span",null,"16,300")],-1))),u={class:"right-icon"},m=d((()=>(0,t._)("span",{class:"fs-14"},"充值D币",-1))),_=d((()=>(0,t._)("p",null,[(0,t._)("span",null,"9,900")],-1))),w={class:"right-icon"},h=d((()=>(0,t._)("span",{class:"fs-14"},"充值D点",-1))),v=d((()=>(0,t._)("p",null,[(0,t._)("span",null,"26,300")],-1))),b={class:"right-icon"};function W(e,a){const l=(0,t.up)("svg-icon"),s=(0,t.up)("el-card"),d=(0,t.up)("el-col"),W=(0,t.up)("el-row");return(0,t.wg)(),(0,t.iD)("div",r,[(0,t.Wm)(W,{gutter:20},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{span:6},{default:(0,t.w5)((()=>[(0,t.Wm)(s,{class:"box-card",shadow:"hover"},{default:(0,t.w5)((()=>[(0,t._)("div",null,[n,o,(0,t._)("div",p,[(0,t.Wm)(l,{"icon-class":"person"})])])])),_:1})])),_:1}),(0,t.Wm)(d,{span:6},{default:(0,t.w5)((()=>[(0,t.Wm)(s,{class:"box-card",shadow:"hover"},{default:(0,t.w5)((()=>[(0,t._)("div",null,[c,i,(0,t._)("div",u,[(0,t.Wm)(l,{"icon-class":"nested"})])])])),_:1})])),_:1}),(0,t.Wm)(d,{span:6},{default:(0,t.w5)((()=>[(0,t.Wm)(s,{class:"box-card",shadow:"hover"},{default:(0,t.w5)((()=>[(0,t._)("div",null,[m,_,(0,t._)("div",w,[(0,t.Wm)(l,{"icon-class":"dollar","class-name":"rela"})])])])),_:1})])),_:1}),(0,t.Wm)(d,{span:6},{default:(0,t.w5)((()=>[(0,t.Wm)(s,{class:"box-card",shadow:"hover"},{default:(0,t.w5)((()=>[(0,t._)("div",null,[h,v,(0,t._)("div",b,[(0,t.Wm)(l,{"icon-class":"yen","class-name":"rela"})])])])),_:1})])),_:1})])),_:1})])}var f=l(89);const y={},g=(0,f.Z)(y,[["render",W],["__scopeId","data-v-2eaea25e"]]);var x=g,D=l(7139),z=(l(7658),l(6206)),k=(0,t.aZ)({__name:"BarChart",props:{width:{type:String,default:"100%"},height:{type:String,default:"285px"}},setup(e){const a=(0,s.iH)(null),{setOptions:l,echarts:d}=(0,z.l)(a),r=()=>{let e=[];for(let a=1;a<=12;a++)e.push(`${a}月`);return e};return(0,t.bv)((()=>{l({tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},grid:{left:60,right:60,bottom:50},xAxis:{type:"category",boundaryGap:!1,data:r()},yAxis:{type:"value"},color:["#1890FF","#36CBCB"],series:[{name:"D币",type:"line",smooth:!0,symbol:"none",data:[5,20,36,10,10,20,100,80,100,0,0,100],areaStyle:{}},{name:"D点",type:"line",symbol:"none",smooth:!0,data:[22,10,26,70,10,30,80,10,20,100,100,0],areaStyle:{}}]})})),(l,s)=>((0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("div",{ref_key:"chartRef",ref:a,style:(0,D.j5)({height:e.height,width:e.width})},null,4)]))}});const C=k;var S=C;const Z=e=>((0,t.dD)("data-v-242c64c1"),e=e(),(0,t.Cn)(),e),U={class:"dash-body"},T={class:"card-header"},B=Z((()=>(0,t._)("span",{style:{position:"relative",left:"10px"}},"趋势",-1))),I={class:"card-header"},A=Z((()=>(0,t._)("span",{style:{position:"relative",left:"10px"}},"充值 Top5",-1))),F={class:"dash-table"},V={class:"card-header"},H=Z((()=>(0,t._)("span",{style:{position:"relative",left:"10px"}},"在线Top5",-1))),j={class:"dash-table"};var G=(0,t.aZ)({__name:"DashBody",setup(e){const a=[{name:"TomAdmin",percent:80,number:"12,000"},{name:"Test",percent:70,number:"9,999"},{name:"Tom",percent:60,number:"6,000"},{name:"admin",percent:50,number:"3,000"},{name:"admin123",percent:10,number:"1,000"}];return(e,l)=>{const d=(0,t.up)("svg-icon"),r=(0,t.up)("el-card"),n=(0,t.up)("el-col"),o=(0,t.up)("el-table-column"),p=(0,t.up)("el-button"),c=(0,t.up)("el-progress"),i=(0,t.up)("el-table"),u=(0,t.up)("el-row");return(0,t.wg)(),(0,t.iD)("div",U,[(0,t.Wm)(u,{gutter:20},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{span:12},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{class:"box-card",shadow:"hover"},{header:(0,t.w5)((()=>[(0,t._)("div",T,[(0,t.Wm)(d,{"icon-class":"pulse"}),B])])),default:(0,t.w5)((()=>[(0,t._)("div",null,[(0,t.Wm)((0,s.SU)(S))])])),_:1})])),_:1}),(0,t.Wm)(n,{span:6},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{class:"box-card",shadow:"hover"},{header:(0,t.w5)((()=>[(0,t._)("div",I,[(0,t.Wm)(d,{"icon-class":"list"}),A])])),default:(0,t.w5)((()=>[(0,t._)("div",F,[(0,t.Wm)(i,{data:a,style:{width:"100%"},"show-header":!1,"max-height":"245px"},{default:(0,t.w5)((()=>[(0,t.Wm)(o,{prop:"name",label:"名称",width:"130"}),(0,t.Wm)(o,{prop:"number",label:"金额"},{default:(0,t.w5)((e=>[(0,t.Wm)(c,{percentage:e.row.percent},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{text:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,D.zw)(e.row.number),1)])),_:2},1024)])),_:2},1032,["percentage"])])),_:1})])),_:1})])])),_:1})])),_:1}),(0,t.Wm)(n,{span:6},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{class:"box-card",shadow:"hover"},{header:(0,t.w5)((()=>[(0,t._)("div",V,[(0,t.Wm)(d,{"icon-class":"timer"}),H])])),default:(0,t.w5)((()=>[(0,t._)("div",j,[(0,t.Wm)(i,{data:a,style:{width:"100%"},"show-header":!1,"max-height":"245px"},{default:(0,t.w5)((()=>[(0,t.Wm)(o,{prop:"name",label:"名称",width:"130"}),(0,t.Wm)(o,{prop:"number",label:"金额"},{default:(0,t.w5)((e=>[(0,t.Wm)(c,{percentage:e.row.percent},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{text:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,D.zw)(e.row.number),1)])),_:2},1024)])),_:2},1032,["percentage"])])),_:1})])),_:1})])])),_:1})])),_:1})])),_:1})])}}});const O=(0,f.Z)(G,[["__scopeId","data-v-242c64c1"]]);var P=O;const R={class:"dash-foot"};var $=(0,t.aZ)({__name:"DashFoot",setup(e){const a=(0,s.iH)("first"),l=[{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-08",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-06",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-07",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333}];return(e,s)=>{const d=(0,t.up)("el-table-column"),r=(0,t.up)("el-table"),n=(0,t.up)("el-tab-pane"),o=(0,t.up)("el-tabs"),p=(0,t.up)("el-card"),c=(0,t.up)("el-col"),i=(0,t.up)("el-row");return(0,t.wg)(),(0,t.iD)("div",R,[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,{span:24},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{class:"box-card",shadow:"hover"},{default:(0,t.w5)((()=>[(0,t._)("div",null,[(0,t.Wm)(o,{modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=e=>a.value=e),type:"card"},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{label:"用户管理",name:"first"},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{data:l,border:""},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{prop:"date",label:"日期"}),(0,t.Wm)(d,{label:"配送信息"},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{prop:"name",label:"姓名"}),(0,t.Wm)(d,{label:"地址"},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{prop:"province",label:"省份"}),(0,t.Wm)(d,{prop:"city",label:"市区"}),(0,t.Wm)(d,{prop:"address",label:"地址"}),(0,t.Wm)(d,{prop:"zip",label:"邮编"})])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(n,{label:"配置管理",name:"second"},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{data:l,border:""},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{prop:"date",label:"日期"}),(0,t.Wm)(d,{label:"配送信息"},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{prop:"name",label:"姓名"}),(0,t.Wm)(d,{label:"地址"},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{prop:"province",label:"省份"}),(0,t.Wm)(d,{prop:"city",label:"市区"}),(0,t.Wm)(d,{prop:"address",label:"地址"}),(0,t.Wm)(d,{prop:"zip",label:"邮编"})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])])),_:1})])),_:1})])),_:1})])}}});const q=(0,f.Z)($,[["__scopeId","data-v-0ecc4b97"]]);var E=q;const J={class:"dashboard-container"},K={class:"dash-panel"};var L=(0,t.aZ)({__name:"index",setup(e){return(e,a)=>((0,t.wg)(),(0,t.iD)("div",J,[(0,t._)("div",K,[(0,t.Wm)((0,s.SU)(x)),(0,t.Wm)((0,s.SU)(P)),(0,t.Wm)((0,s.SU)(E))])]))}});const M=(0,f.Z)(L,[["__scopeId","data-v-379039c0"]]);var N=M}}]);