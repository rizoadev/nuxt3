(self.webpackChunk=self.webpackChunk||[]).push([[671,341,800],{4155:(a,n,t)=>{var s=t(6654);s.__esModule&&(s=s.default),typeof s=="string"&&(s=[[a.id,s,""]]),s.locals&&(a.exports=s.locals);var e=t(5346).Z,d=e("1bb197dc",s,!0,{sourceMap:!1})},5603:(a,n,t)=>{var s=t(4408);s.__esModule&&(s=s.default),typeof s=="string"&&(s=[[a.id,s,""]]),s.locals&&(a.exports=s.locals);var e=t(5346).Z,d=e("6f58e723",s,!0,{sourceMap:!1})},2341:(a,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>c});var s=t(3648),e=t(1406);const d={class:"flex"},f={class:"card"},m={class:"card-body"},_=(0,s._)("label",{class:"form-label",for:"a1"},"Add Task",-1),y={class:"my-2",style:{position:"relative"}},x={key:0,class:"spinx"},g=[(0,s._)("div",{class:"spinner-border spinner-border-sm text-primary",role:"status"},[(0,s._)("span",{class:"visually-hidden"},"Loading... loading...")],-1)];function T(u,i,v,b,D,R){return(0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("div",f,[(0,s._)("div",m,[(0,s._)("form",{action:"#",onSubmit:i[2]||(i[2]=(0,e.iM)((...h)=>u.onSubmit&&u.onSubmit(...h),["prevent"]))},[_,(0,s._)("div",y,[(0,s.wy)((0,s._)("input",{class:"form-control",id:"a1",type:"text","onUpdate:modelValue":i[0]||(i[0]=h=>u.res.value=h),placeholder:"new task",onKeyup:i[1]||(i[1]=(0,e.D2)((...h)=>u.res.Add&&u.res.Add(...h),["enter"]))},null,544),[[e.nr,u.res.value]]),u.res.loading?((0,s.wg)(),(0,s.iD)("div",x,g)):(0,s.kq)("",!0)])],32)])])])}var A=t(8015),O=t(9669),S=t.n(O);const r=(0,s.aZ)({emits:["added"],setup(u,{emit:i}){const v=(0,A.qj)({loading:!1,value:"",Add:async()=>{v.loading=!0;const{data:b}=await S().post("https://ikamai-sandbox.firebaseio.com/sandbox/tasks/today.json",{task:v.value});b&&(v.value="",v.loading=!1,i("added"))}});return{res:v}}});var l=t(4155),o=t(3744);const c=(0,o.Z)(r,[["render",T]])},4800:(a,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>S});var s=t(3648),e=t(7495);const d={class:"flex d-flex justify-content-between"},f=(0,s.Uk)("task:"),m={class:"text-primary"};function _(r,l,o,p,c,u){return(0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("div",null,[f,(0,s._)("div",m,(0,e.zw)(r.task.value.task),1)]),(0,s._)("div",{class:"text-danger pointer",onClick:l[0]||(l[0]=(...i)=>r.busak&&r.busak(...i))},(0,e.zw)(r.res.msg),1)])}var y=t(8015),x=t(9669),k=t.n(x);const g=(0,s.aZ)({props:{task:{type:Object,default:()=>{}}},emits:["deleted"],setup(r,{emit:l}){const o=(0,y.qj)({msg:"delete"});return{busak:()=>{o.msg="deleting",k().delete(`https://ikamai-sandbox.firebaseio.com/sandbox/tasks/today/${r.task.key}.json`).then(()=>{l("deleted",r.task.key),o.msg="delete"})},res:o}}});var T=t(5603),A=t(3744);const S=(0,A.Z)(g,[["render",_]])},3671:(a,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>r});var s=t(2341),e=t(4800),d=t(3648);const f={class:"flex"},m={class:"flex my-1"},_={class:"card"},y={class:"card-body"};function x(l,o,p,c,u,i){const v=s.default,b=e.default;return(0,d.wg)(),(0,d.iD)("div",f,[(0,d._)("div",m,[(0,d.Wm)(v,{onAdded:c.res.Added},null,8,["onAdded"])]),((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(c.res.datas,D=>((0,d.wg)(),(0,d.iD)("div",{class:"flex my-1",key:D},[(0,d._)("div",_,[(0,d._)("div",y,[(0,d.Wm)(b,{task:D,onDeleted:o[0]||(o[0]=R=>c.res.deleted(R))},null,8,["task"])])])]))),128))])}var k=t(8015),g=t(9669),T=t.n(g);const A={setup(){const l=(0,k.qj)({datas:[],Loads:async()=>{const{data:o}=await T().get("https://ikamai-sandbox.firebaseio.com/sandbox/tasks/today.json");o&&(l.datas=Object.keys(o).map(p=>({key:p,value:o[p]})).reverse())},Added:()=>{l.Loads()},deleted:o=>{l.Loads()}});return(0,d.bv)(()=>{l.Loads()}),{res:l}}};var O=t(3744);const r=(0,O.Z)(A,[["render",x]])},6654:(a,n,t)=>{var s=t(8081),e=t(3645),d=e(s);d.push([a.id,".spinx{position:absolute;right:calc(.375em + .1875rem);top:7px;z-index:4}",""]),a.exports=d},4408:(a,n,t)=>{var s=t(8081),e=t(3645),d=e(s);d.push([a.id,".pointer{cursor:pointer}",""]),a.exports=d}}]);
