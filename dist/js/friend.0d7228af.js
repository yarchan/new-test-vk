"use strict";(self["webpackChunknew_test_vk"]=self["webpackChunknew_test_vk"]||[]).push([[399],{67:function(e,t,s){s.r(t),s.d(t,{default:function(){return y}});var n=s(252),i=s(577);const l={class:"d-flex"},r={class:""},o=(0,n._)("h3",null,"Общий друзья",-1),c={class:"get-friends-items"},a={class:"d-flex justify-content-center align-items-center"},d=["src"],f={class:"mb-0 me-2"},_={class:"mb-0"},u={class:""},m=(0,n._)("h3",null,"Записи на стене",-1),g={class:"get-friends-items"};function h(e,t,s,h,p,w){return(0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("div",r,[o,(0,n._)("ul",c,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(h.common_friends,((e,t)=>((0,n.wg)(),(0,n.iD)("li",{class:"get-friends-link",key:t},[(0,n._)("div",a,[(0,n._)("img",{class:"get-friends-link-img",src:e.photo_50,alt:""},null,8,d),(0,n._)("p",f,(0,i.zw)(e.first_name),1),(0,n._)("p",_,(0,i.zw)(e.last_name),1)])])))),128))])]),(0,n._)("div",u,[m,(0,n._)("ul",g,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(h.posts,((e,t)=>((0,n.wg)(),(0,n.iD)("li",{class:"get-friends-link",key:t},(0,i.zw)(e.text),1)))),128))])])])}var p=s(231),w=s(262),b={setup(){return{all_friend:p.yw,selected_friend:p.iI,selected_friend_common:p.N7,common_friends:(0,w.iH)([]),v:"5.154",posts:(0,w.iH)([])}},mounted(){this.getCommonFriends(),this.getPosts()},methods:{getCommonFriends(){this.all_friend.forEach((e=>{this.selected_friend_common.includes(e.id)&&this.common_friends.push(e)}))},async getPosts(){self=this,await VK.Api.call("wall.get",{owner_id:this.selected_friend,filter:"owner",v:this.v},(function(e){e.response&&(self.posts=e.response.items)}))}}},v=s(744);const k=(0,v.Z)(b,[["render",h]]);var y=k},742:function(e,t,s){s.r(t),s.d(t,{default:function(){return F}});var n=s(252),i=s(963),l=s(577);const r={class:""},o={class:"get-friends"},c={class:"mb-4"},a={class:"mb-4"},d={class:"mb-4"},f={key:0,class:"get-friends-items"},_={class:"d-flex justify-content-center align-items-center"},u=["src"],m={class:"mb-0 me-2"},g={class:"mb-0"},h={class:"d-flex justify-content-center align-items-center"},p=["onClick"],w=["onClick"];function b(e,t,s,b,v,k){return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("div",o,[(0,n._)("div",c,[(0,n._)("button",{onClick:t[0]||(t[0]=(...e)=>k.getFriend&&k.getFriend(...e)),class:"btn btn-primary"},"Загрузите список друзей")]),(0,n._)("div",a,[(0,n._)("button",{onClick:t[1]||(t[1]=(...e)=>k.buildNewListFriends&&k.buildNewListFriends(...e)),class:"btn btn-primary"},"Построить")]),(0,n._)("div",d,[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>b.select_friends=e),onInput:t[3]||(t[3]=(...e)=>k.newFriends&&k.newFriends(...e)),class:"form-control",placeholder:"Начните вводить текст для поиска друга, которого хотите добавить",type:"text",name:"",id:""},null,544),[[i.nr,b.select_friends]])]),0!=b.all_friend.length?((0,n.wg)(),(0,n.iD)("ul",f,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(b.all_friend,((e,t)=>((0,n.wg)(),(0,n.iD)("li",{class:"get-friends-link",key:t},[(0,n._)("div",_,[(0,n._)("img",{class:"get-friends-link-img",src:e.photo_50,alt:""},null,8,u),(0,n._)("p",m,(0,l.zw)(e.first_name),1),(0,n._)("p",g,(0,l.zw)(e.last_name),1)]),(0,n._)("div",h,[(0,n._)("button",{onClick:t=>e.isAdd=!0,class:"btn btn1"},"Добавить",8,p),e.isAdd?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:t=>e.isAdd=!1,class:"btn btn2"},"Удалить",8,w)):(0,n.kq)("",!0)])])))),128))])):(0,n.kq)("",!0)])])}var v=s(262),k=s(231),y={setup(){return{AppID:"51773846",v:"5.154",friends:(0,v.iH)([]),select_friends:(0,v.iH)(""),list_friend:k.N8,all_friend:k.yw,get_friend:(0,v.iH)(!0)}},methods:{buildNewListFriends(){this.list_friend.splice(0,this.list_friend.length),this.all_friend.filter((e=>!0===e.isAdd?this.list_friend.push(e):"")),this.$router.push("/list")},newFriends(){const e=this.select_friends.toLowerCase();this.all_friend=this.all_friend.filter((t=>{const s=t.first_name.toLowerCase(),n=t.last_name.toLowerCase();return t?s.startsWith(e)||n.startsWith(e):""}))},async getFriend(){self=this,await VK.Api.call("friends.get",{fields:"photo_50,bdate,sex",v:this.v},(function(e){e.response&&(self.all_friend=e.response.items)}))}}},D=s(744);const C=(0,D.Z)(y,[["render",b]]);var F=C},89:function(e,t,s){s.r(t),s.d(t,{default:function(){return v}});var n=s(252),i=s(577);const l={class:"d-flex justify-content-center align-items-center"},r={class:"get-friends-items"},o=["onClick"],c={class:"d-flex justify-content-center align-items-center"},a=["src"],d={class:"mb-0 me-2"},f={class:"mb-0 me-2"},_={class:"mb-0 me-2"},u={class:"mb-0"};function m(e,t,s,m,g,h){return(0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("button",{onClick:t[0]||(t[0]=e=>this.$router.push("/")),class:"btn-list btn btn-primary"},"Назад"),(0,n._)("ul",r,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(m.list_friend,((e,t)=>((0,n.wg)(),(0,n.iD)("li",{onClick:t=>h.openFriendInfo(e.id,e.common_friends),class:"get-friends-link",key:t,style:(0,i.j5)(`background-color: rgba(18, 0, 255,${e.percent_common_friends});`)},[(0,n._)("div",c,[(0,n._)("img",{class:"get-friends-link-img",src:e.photo_50,alt:""},null,8,a),(0,n._)("p",d,(0,i.zw)(e.first_name),1),(0,n._)("p",f,(0,i.zw)(e.last_name),1),(0,n._)("p",_,(0,i.zw)(e.age),1),(0,n._)("p",u,(0,i.zw)(1===e.sex?"Женский пол":"Мужской пол"),1)])],12,o)))),128))])])}var g=s(231),h=s(262),p={setup(){return{AppID:"51773846",v:"5.154",list_friend:g.N8,selected_friend:g.iI,selected_friend_common:g.N7,mutual_friends:(0,h.iH)([]),style:(0,h.iH)(0)}},mounted(){this.getGeneralFriend()},methods:{getAge(){this.list_friend.forEach((e=>{let t=e.bdate.split("."),s=new Date(t[2],t[1]-1,t[0]),n=new Date,i=n.getFullYear()-s.getFullYear();(n.getMonth()<s.getMonth()||n.getMonth()===s.getMonth()&&n.getDate()<s.getDate())&&i--,e.age="0","1"===i.toString().slice(-1)?e.age=`${i} год`:i.toString().slice(-1)>="2"&&i.toString().slice(-1)<="4"?e.age=`${i} года`:i.toString().slice(-1)>="5"&&(e.age=`${i} лет`)}))},async getGeneralFriend(){self=this;let e="";this.list_friend.forEach((t=>{0===e.length?e+=t.id:e+=","+t.id})),VK.Api.call("friends.getMutual",{target_uids:e,v:this.v},(function(e){e.response?(self.mutual_friends=e.response,self.calcColorAndSort(e.response)):console.log(e)}))},async calcColorAndSort(e){let t=0;e.filter((e=>{t<e.common_count&&(t=e.common_count)})),await this.list_friend.forEach(((e,s)=>{e.common_friends=this.mutual_friends[s].common_friends,e.percent_common_friends=(this.mutual_friends[s].common_count/t).toFixed(1)})),this.list_friend.sort(((e,t)=>e.first_name<t.first_name?-1:e.first_name>t.first_name?1:e.last_name<t.last_name?-1:e.last_name>t.last_name?1:0))},openFriendInfo(e,t){this.selected_friend=e,this.selected_friend_common=t,this.$router.push("/friend-info")}}},w=s(744);const b=(0,w.Z)(p,[["render",m]]);var v=b},231:function(e,t,s){s.d(t,{N7:function(){return o},N8:function(){return i},iI:function(){return r},yw:function(){return l}});var n=s(262);const i=(0,n.iH)([]),l=(0,n.iH)([]),r=(0,n.iH)(),o=(0,n.iH)([])}}]);
//# sourceMappingURL=friend.0d7228af.js.map