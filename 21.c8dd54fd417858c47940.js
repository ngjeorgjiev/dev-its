(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{KUiO:function(t,n,e){"use strict";e.r(n),e.d(n,"PurchaseCreditsModule",function(){return m});var o=e("QPBi"),a=e("PCNd"),i=e("tyNb"),c=e("fXoL"),s=e("ofXK"),r=e("Iych"),l=e("JmOq");function g(t,n){if(1&t){const t=c.Ob();c.Kb(0,"app-divider"),c.Nb(1,"div",3),c.Ub("click",function(){return c.cc(t),c.Wb().goBack()}),c.Kb(2,"img",4),c.Mb(),c.Nb(3,"div",5),c.jc(4),c.Xb(5,"transloco"),c.Kb(6,"img",6),c.Mb()}2&t&&(c.zb(4),c.lc(" ",c.Yb(5,1,"poweredBy")," "))}function b(t,n){1&t&&(c.Nb(0,"div",7),c.Nb(1,"span",8),c.jc(2),c.Xb(3,"transloco"),c.Mb(),c.Nb(4,"span",9),c.jc(5),c.Xb(6,"transloco"),c.Mb(),c.Kb(7,"img",10),c.Kb(8,"img",11),c.Kb(9,"img",12),c.Mb()),2&t&&(c.zb(2),c.lc(" ",c.Yb(3,2,"required"),""),c.zb(3),c.lc("X ",c.Yb(6,4,"credits"),""))}function p(t,n){if(1&t){const t=c.Ob();c.Nb(0,"div",13),c.Ub("click",function(){return c.cc(t),c.Wb().cash()}),c.Nb(1,"span",14),c.jc(2),c.Xb(3,"transloco"),c.Mb(),c.Kb(4,"img",15),c.Nb(5,"div",16),c.Kb(6,"img",17),c.Kb(7,"img",18),c.Mb(),c.Nb(8,"div",19),c.Kb(9,"img",17),c.Kb(10,"img",18),c.Mb(),c.Mb(),c.Nb(11,"div",20),c.Ub("click",function(){return c.cc(t),c.Wb().card()}),c.Nb(12,"span",14),c.jc(13),c.Xb(14,"transloco"),c.Mb(),c.Kb(15,"img",15),c.Nb(16,"div",21),c.Kb(17,"img",22),c.Kb(18,"img",23),c.Mb(),c.Mb(),c.Nb(19,"div",24),c.Nb(20,"span"),c.jc(21,"SAR "),c.Nb(22,"strong"),c.jc(23,"10.00"),c.Mb(),c.Mb(),c.Mb()}2&t&&(c.zb(2),c.lc(" ",c.Yb(3,2,"cash"),""),c.zb(11),c.lc(" ",c.Yb(14,4,"cash"),""))}const d=[{path:"",component:(()=>{class t{constructor(t,n){this.router=t,this.location=n}goBack(){this.location.back()}cash(){this.router.navigateByUrl("/checkout/cash")}card(){this.router.navigateByUrl("/checkout/card")}}return t.\u0275fac=function(n){return new(n||t)(c.Jb(i.b),c.Jb(s.f))},t.\u0275cmp=c.Db({type:t,selectors:[["ng-component"]],decls:7,vars:0,consts:[["static",""],["left",""],["right",""],[1,"back-button-container",3,"click"],["src","assets/svg/back-button-bg.svg","alt","image"],[1,"footer-logo-container"],["src","assets/svg/footer-logo.svg","alt","image"],[1,"row","position-relative"],[1,"rotate-50-y","rotating-header","position-absolute"],[1,"rotate-50-y","rotating-credits","position-absolute"],["src","assets/svg/nfc-rotating-image-empty.svg","alt","image",1,"rotate-50-y","m-auto","scalable-image"],["src","assets/svg/nfc-medal-empty.svg","alt","image",1,"rotate-50-y","m-auto","rotating-medal","scalable-image","position-absolute"],["src","assets/svg/nfc-star-icon.svg","alt","image",1,"m-auto","rotating-star","scalable-image","position-absolute"],["id","cash",1,"link","position-relative",3,"click"],[1,"card-text-content"],["src","assets/svg/card-background.svg","alt","image",1,"pt-3","scalable-image"],[1,"rotating-cash"],["src","assets/svg/cash-background-phone.svg","alt","image",1,"position-absolute","cash-background"],["src","assets/svg/cash-rotating-circle-v2.svg","alt","image",1,"position-absolute","cash-rotating-circle"],[1,"rotating-cash-copy"],["id","card",1,"link","position-relative",3,"click"],[1,"rotating-card"],["src","assets/svg/card-base-icon.svg","alt","image",1,"position-absolute","card-base"],["src","assets/svg/card-phone-icon.svg","alt","image",1,"position-absolute","card-phone"],[1,"side-content","pr-2"]],template:function(t,n){1&t&&(c.Nb(0,"app-layout-divider"),c.hc(1,g,7,3,"ng-template",null,0,c.ic),c.hc(3,b,10,6,"ng-template",null,1,c.ic),c.hc(5,p,24,6,"ng-template",null,2,c.ic),c.Mb())},directives:[r.a,l.a],pipes:[o.f],styles:[".link[_ngcontent-%COMP%]{height:30%;z-index:5;overflow:hidden}.side-content[_ngcontent-%COMP%]{position:absolute;font-size:30px;font-family:Montserrat;right:37%;padding-top:20px}.rotate-50-y[_ngcontent-%COMP%]{animation:rotate-50-y 3s linear infinite;animation-direction:alternate;z-index:10}.card-text-content[_ngcontent-%COMP%]{left:9%}.rotating-medal[_ngcontent-%COMP%]{top:87px;left:177px}.rotating-star[_ngcontent-%COMP%]{top:180px;left:281px;animation:rotate-360 6s linear infinite;z-index:10}.rotating-credits[_ngcontent-%COMP%]{top:78%;left:40%;z-index:20;font-size:30px}.rotating-header[_ngcontent-%COMP%]{font-size:22px;top:4%;left:42%;z-index:20;color:#0ed8d8}.back-button-container[_ngcontent-%COMP%]{cursor:pointer;position:absolute;top:0;left:0;z-index:20}.footer-logo-container[_ngcontent-%COMP%]{position:absolute;bottom:5%;left:7%}.card-text-content[_ngcontent-%COMP%]{position:absolute;font-size:30px;font-family:Montserrat;top:43%;left:26%}.cash-background[_ngcontent-%COMP%]{top:30px;left:50px;height:100%;z-index:6}.cash-rotating-circle[_ngcontent-%COMP%]{top:63px;height:50%;left:60px;z-index:6;animation:spin 4s linear infinite}.rotating-cash-copy[_ngcontent-%COMP%]   .cash-background[_ngcontent-%COMP%]{transform:rotate(-20deg);left:30px;top:35px;z-index:5}.rotating-cash-copy[_ngcontent-%COMP%]   .cash-rotating-circle[_ngcontent-%COMP%]{left:37px;top:61px;z-index:5}@keyframes rotate-50-y{0%{transform:rotateY(0)}to{transform:rotateY(50deg)}}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes animate-backwards{0%{left:-45px}50%{left:-55px}to{left:-45px}}@keyframes animate-forward{0%{left:90px}50%{left:100px}to{left:90px}}@keyframes animate-up{0%{top:20px}50%{top:-10px}to{top:20px}}.card-base[_ngcontent-%COMP%]{top:134px;z-index:6;left:16px}.card-phone[_ngcontent-%COMP%]{top:0;left:-23px;animation:animate-up 5s linear infinite}@keyframes rotate-360{0%{transform:rotate(0deg) rotateY(0)}50%{transform:rotate(1turn) rotateY(50deg)}to{transform:rotate(0) rotateY(0)}}@media only screen and (max-width:1200px){.scalable-image[_ngcontent-%COMP%]{width:100%}}"]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(n){return new(n||t)},imports:[[i.c.forChild(d)],i.c]}),t})(),m=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(n){return new(n||t)},providers:[{provide:o.c,useValue:"purchase-credits"}],imports:[[a.a,f,o.e]]}),t})()}}]);