(self.webpackChunk=self.webpackChunk||[]).push([[800],{5603:(a,o,t)=>{var s=t(4408);s.__esModule&&(s=s.default),typeof s=="string"&&(s=[[a.id,s,""]]),s.locals&&(a.exports=s.locals);var n=t(5346).Z,d=n("6f58e723",s,!0,{sourceMap:!1})},4800:(a,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>x});var s=t(3648),n=t(7495);const d={class:"flex d-flex justify-content-between"},i=(0,s.Uk)("task:"),u={class:"text-primary"};function v(e,l,r,m,O,b){return(0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("div",null,[i,(0,s._)("div",u,(0,n.zw)(e.task.value.task),1)]),(0,s._)("div",{class:"text-danger pointer",onClick:l[0]||(l[0]=(...y)=>e.busak&&e.busak(...y))},(0,n.zw)(e.res.msg),1)])}var p=t(8015),_=t(9669),f=t.n(_);const c=(0,s.aZ)({props:{task:{type:Object,default:()=>{}}},emits:["deleted"],setup(e,{emit:l}){const r=(0,p.qj)({msg:"delete"});return{busak:()=>{r.msg="deleting",f().delete(`https://ikamai-sandbox.firebaseio.com/sandbox/tasks/today/${e.task.key}.json`).then(()=>{l("deleted",e.task.key),r.msg="delete"})},res:r}}});var g=t(5603),k=t(3744);const x=(0,k.Z)(c,[["render",v]])},4408:(a,o,t)=>{var s=t(8081),n=t(3645),d=n(s);d.push([a.id,".pointer{cursor:pointer}",""]),a.exports=d}}]);
