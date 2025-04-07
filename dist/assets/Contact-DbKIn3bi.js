var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,t=(a,l,n)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[l]=n,o=(e,a,l)=>new Promise(((n,r)=>{var s=e=>{try{o(l.next(e))}catch(a){r(a)}},t=e=>{try{o(l.throw(e))}catch(a){r(a)}},o=e=>e.done?n(e.value):Promise.resolve(e.value).then(s,t);o((l=l.apply(e,a)).next())}));import{$ as i,a0 as c,a1 as d,P as p,M as u,Q as m,R as g,a2 as f,a3 as v,a4 as h,a5 as y,a6 as w,a7 as _}from"./element-plus-BiqSIgiW.js";import{k as b,r as x,M as O,w as j,o as k,l as q,E as V,z as M,u as P,q as A,a4 as S,D as C,B as I,af as z,m as E}from"./vendor-4N59dSfJ.js";import{_ as U}from"./index-ebB9pZkO.js";import"./three-BlQwpYZB.js";const D={class:"contact"},F={class:"card-content"},J={class:"info-item"},N={class:"info-item"},R={class:"info-item"},T={class:"info-content"},B={class:"qr-codes"},Y={class:"qr-code"},$={class:"image-placeholder"},K={class:"image-error"},Q={class:"qr-code"},W={class:"image-placeholder"},G={class:"image-error"},H={class:"card-content"},L={key:0,class:"map-loading"},X={key:1,class:"map-error"},Z=U(b({__name:"Contact",setup(e){const b=x(),U=x(!1),Z=z(),ee=O({name:"",phone:"",email:"",company:"",message:""}),ae=O({name:[{required:!0,message:"请输入姓名",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}],phone:[{required:!0,message:"请输入联系电话",trigger:"blur"},{pattern:/^(\+86)?1[3-9]\d{9}$/,message:"请输入正确的手机号码",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:"blur"}],company:[{required:!0,message:"请输入公司名称",trigger:"blur"},{min:2,max:50,message:"长度在 2 到 50 个字符",trigger:"blur"}],message:[{required:!0,message:"请输入留言内容",trigger:"blur"},{min:10,max:500,message:"长度在 10 到 500 个字符",trigger:"blur"}]}),le=x(null),ne=x(!0),re=x(!1),se=()=>o(this,null,(function*(){try{ne.value=!0,re.value=!1,yield new Promise(((e,a)=>{if(window.AMap)return void e(window.AMap);const l=document.createElement("script");l.src="https://webapi.amap.com/maps?v=2.0&key=YOUR_AMAP_KEY&callback=initAMap",l.async=!0,l.onerror=a,window.initAMap=()=>{e(window.AMap)},document.head.appendChild(l)}));const e=new window.AMap.Map(le.value,{zoom:15,center:[121.2517,31.3839]}),a=new window.AMap.Marker({position:[121.2517,31.3839],title:"上海博实化工有限公司"});e.add(a);const l=new window.AMap.InfoWindow({content:'\n        <div style="padding: 10px;">\n          <h4 style="margin: 0 0 5px;">上海博实化工有限公司</h4>\n          <p style="margin: 0;">上海市嘉定区金园一路766号</p>\n        </div>\n      ',offset:new window.AMap.Pixel(0,-30)});a.on("click",(()=>{l.open(e,a.getPosition())})),l.open(e,a.getPosition()),ne.value=!1}catch(e){re.value=!0,ne.value=!1}})),te=(e,a)=>{let l=null;return function(...n){l&&clearTimeout(l),l=setTimeout((()=>{e.apply(this,n)}),a)}},oe=te((()=>o(this,null,(function*(){b.value&&(yield b.value.validate((e=>o(this,null,(function*(){if(e){U.value=!0;try{const e={name:ee.name.replace(/[<>]/g,""),phone:ee.phone.replace(/[<>]/g,""),email:ee.email.replace(/[<>]/g,""),company:ee.company.replace(/[<>]/g,""),message:ee.message.replace(/[<>]/g,"")};yield new Promise((e=>setTimeout(e,1e3)));const c=JSON.parse(localStorage.getItem("contactForms")||"[]");c.push((o=((e,a)=>{for(var l in a||(a={}))r.call(a,l)&&t(e,l,a[l]);if(n)for(var l of n(a))s.call(a,l)&&t(e,l,a[l]);return e})({},e),i={timestamp:(new Date).toISOString()},a(o,l(i)))),localStorage.setItem("contactForms",JSON.stringify(c)),_.success("留言提交成功！我们会尽快与您联系。"),ue(),Z.push("/")}catch(c){_.error("提交失败，请稍后重试")}finally{U.value=!1}}var o,i})))))}))),500),ie=te((()=>{(ee.name||ee.phone||ee.email||ee.company||ee.message)&&localStorage.setItem("contactFormDraft",JSON.stringify(ee))}),1e3);j(ee,(()=>{ie()}),{deep:!0});const ce=x({wechat:!1,whatsapp:!1,wang:!1,lin:!1}),de=e=>{ce.value[e]=!0},pe=e=>{ce.value[e]=!1};k((()=>{(()=>{const e=localStorage.getItem("contactFormDraft");e&&Object.assign(ee,JSON.parse(e))})(),se(),["/wechat-qr.png","/whatsapp-qr.png"].forEach((e=>{(new Image).src=e}))}));const ue=()=>{b.value&&b.value.resetFields()};return(e,a)=>{const l=S("el-icon"),n=S("el-image");return E(),q("div",D,[V(P(i),{class:"page-header"},{default:M((()=>[V(P(c),{span:24},{default:M((()=>a[9]||(a[9]=[A("h1",null,"联系我们",-1),A("p",null,"期待与您的合作",-1)]))),_:1})])),_:1}),V(P(i),{gutter:20},{default:M((()=>[V(P(c),{xs:24,sm:24,md:12},{default:M((()=>[V(P(d),{class:"contact-info"},{header:M((()=>a[10]||(a[10]=[A("div",{class:"card-header"},[A("span",null,"联系方式")],-1)]))),default:M((()=>[A("div",F,[A("div",J,[V(l,null,{default:M((()=>[V(P(p))])),_:1}),a[11]||(a[11]=A("div",{class:"info-content"},[A("h3",null,"公司地址"),A("p",null,"上海市嘉定区金园一路766号")],-1))]),A("div",N,[V(l,null,{default:M((()=>[V(P(u))])),_:1}),a[12]||(a[12]=A("div",{class:"info-content"},[A("h3",null,"联系电话"),A("p",null,"王经理：13817275635"),A("p",null,"林经理：18221868553")],-1))]),A("div",R,[V(l,null,{default:M((()=>[V(P(m))])),_:1}),A("div",T,[a[21]||(a[21]=A("h3",null,"在线咨询",-1)),A("div",B,[A("div",Y,[V(n,{src:"/images/wang-manager-qr.jpg.png","preview-src-list":["/images/wang-manager-qr.jpg.png"],fit:"cover",loading:"lazy",alt:"王经理微信二维码",onError:a[1]||(a[1]=e=>de("wang"))},{placeholder:M((()=>[A("div",$,[V(l,null,{default:M((()=>[V(P(g))])),_:1}),a[13]||(a[13]=A("p",null,"加载中...",-1))])])),error:M((()=>[A("div",K,[V(l,null,{default:M((()=>[V(P(g))])),_:1}),a[15]||(a[15]=A("p",null,"二维码加载失败",-1)),V(P(f),{type:"primary",size:"small",onClick:a[0]||(a[0]=e=>pe("wang"))},{default:M((()=>a[14]||(a[14]=[C(" 重试 ")]))),_:1})])])),_:1}),a[16]||(a[16]=A("p",null,"王经理微信",-1))]),A("div",Q,[V(n,{src:"/images/lin-manager-qr.jpg.png","preview-src-list":["/images/lin-manager-qr.jpg.png"],fit:"cover",loading:"lazy",alt:"林经理微信二维码",onError:a[3]||(a[3]=e=>de("lin"))},{placeholder:M((()=>[A("div",W,[V(l,null,{default:M((()=>[V(P(g))])),_:1}),a[17]||(a[17]=A("p",null,"加载中...",-1))])])),error:M((()=>[A("div",G,[V(l,null,{default:M((()=>[V(P(g))])),_:1}),a[19]||(a[19]=A("p",null,"二维码加载失败",-1)),V(P(f),{type:"primary",size:"small",onClick:a[2]||(a[2]=e=>pe("lin"))},{default:M((()=>a[18]||(a[18]=[C(" 重试 ")]))),_:1})])])),_:1}),a[20]||(a[20]=A("p",null,"林经理微信",-1))])])])])])])),_:1})])),_:1}),V(P(c),{xs:24,sm:24,md:12},{default:M((()=>[V(P(d),{class:"contact-form"},{header:M((()=>a[22]||(a[22]=[A("div",{class:"card-header"},[A("span",null,"在线留言")],-1)]))),default:M((()=>[A("div",H,[V(P(v),{ref_key:"formRef",ref:b,model:ee,rules:ae,"label-width":"100px"},{default:M((()=>[V(P(h),{label:"姓名",prop:"name"},{default:M((()=>[V(P(y),{modelValue:ee.name,"onUpdate:modelValue":a[4]||(a[4]=e=>ee.name=e),placeholder:"请输入您的姓名"},null,8,["modelValue"])])),_:1}),V(P(h),{label:"电话",prop:"phone"},{default:M((()=>[V(P(y),{modelValue:ee.phone,"onUpdate:modelValue":a[5]||(a[5]=e=>ee.phone=e),placeholder:"请输入您的联系电话"},null,8,["modelValue"])])),_:1}),V(P(h),{label:"邮箱",prop:"email"},{default:M((()=>[V(P(y),{modelValue:ee.email,"onUpdate:modelValue":a[6]||(a[6]=e=>ee.email=e),placeholder:"请输入您的邮箱"},null,8,["modelValue"])])),_:1}),V(P(h),{label:"公司",prop:"company"},{default:M((()=>[V(P(y),{modelValue:ee.company,"onUpdate:modelValue":a[7]||(a[7]=e=>ee.company=e),placeholder:"请输入您的公司名称"},null,8,["modelValue"])])),_:1}),V(P(h),{label:"留言内容",prop:"message"},{default:M((()=>[V(P(y),{modelValue:ee.message,"onUpdate:modelValue":a[8]||(a[8]=e=>ee.message=e),type:"textarea",rows:4,placeholder:"请输入您的留言内容"},null,8,["modelValue"])])),_:1}),V(P(h),null,{default:M((()=>[V(P(f),{type:"primary",onClick:P(oe),loading:U.value},{default:M((()=>a[23]||(a[23]=[C("提交留言")]))),_:1},8,["onClick","loading"]),V(P(f),{onClick:ue,disabled:U.value},{default:M((()=>a[24]||(a[24]=[C("重置")]))),_:1},8,["disabled"])])),_:1})])),_:1},8,["model","rules"])])])),_:1})])),_:1})])),_:1}),V(P(i),{class:"map-section"},{default:M((()=>[V(P(c),{span:24},{default:M((()=>[V(P(d),null,{header:M((()=>a[25]||(a[25]=[A("div",{class:"card-header"},[A("span",null,"公司位置")],-1)]))),default:M((()=>[A("div",{class:"map-container",ref_key:"mapContainer",ref:le},[ne.value?(E(),q("div",L,[V(l,{class:"loading"},{default:M((()=>a[26]||(a[26]=[A("svg",{class:"circular",viewBox:"25 25 50 50"},[A("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none"})],-1)]))),_:1}),a[27]||(a[27]=A("p",null,"地图加载中...",-1))])):I("",!0),re.value?(E(),q("div",X,[V(l,null,{default:M((()=>[V(P(w))])),_:1}),a[29]||(a[29]=A("p",null,"地图加载失败",-1)),V(P(f),{type:"primary",size:"small",onClick:se},{default:M((()=>a[28]||(a[28]=[C("重试")]))),_:1})])):I("",!0)],512)])),_:1})])),_:1})])),_:1})])}}}),[["__scopeId","data-v-52c3c0f8"]]);export{Z as default};
//# sourceMappingURL=Contact-DbKIn3bi.js.map
