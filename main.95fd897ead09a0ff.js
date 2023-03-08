"use strict";(self.webpackChunkmc_status=self.webpackChunkmc_status||[]).push([["main"],{670:(m,S,o)=>{var u=o(6370),h=o(1481),T=o(8746),i=o(433),l=o(6895),b=o(5963);var f=o(4859),c=o(3546),s=o(8182),d=o(9549),g=o(4144),v=o(3162),x=o(3683),t=o(1571);let y=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,f.ot,c.QW,s.Is,g.c,d.lN,v.Cv,x.g0,f.ot,c.QW,s.Is,g.c,d.lN,v.Cv,x.g0]}),e})();var C=o(385);let U=(()=>{class e{constructor(a){this.http=a}check(a){return this.http.get(`https://api.mcsrvstat.us/2/${a}`)}}return e.\u0275fac=function(a){return new(a||e)(t.LFG(u.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function I(e,n){1&e&&(t.TgZ(0,"h2",13),t._uU(1,"Overview"),t.qZA(),t.TgZ(2,"mat-dialog-content")(3,"p"),t._uU(4," Shows the status of a minecraft server. "),t._UZ(5,"br"),t._uU(6," For demonstration I use as default my own minecraft server. "),t.qZA(),t.TgZ(7,"p"),t._uU(8," The data is loaded by "),t.TgZ(9,"a",14),t._uU(10,"https://api.mcsrvstat.us/"),t.qZA(),t._uU(11,". "),t.qZA()(),t.TgZ(12,"mat-dialog-actions",15)(13,"button",16),t._uU(14,"Close"),t.qZA()())}function N(e,n){if(1&e&&t._UZ(0,"div",19),2&e){const a=t.oxw(2);t.Udp("background-image",a.headerImage())}}function Y(e,n){if(1&e&&(t._uU(0),t.ALo(1,"date")),2&e){const a=t.oxw(4);t.hij("at ",t.xi3(1,1,1e3*a.mcStatus.debug.cachetime,"yyyy/MM/dd HH:mm:ss"),"")}}function P(e,n){1&e&&t.YNc(0,Y,2,4,"ng-template")}function M(e,n){if(1&e&&(t.TgZ(0,"div")(1,"p"),t._uU(2," Data will be refreshed every 5 seconds. "),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.TgZ(5,"strong"),t._uU(6),t.qZA(),t.YNc(7,P,1,0,null,18),t.qZA(),t.TgZ(8,"p"),t._uU(9),t.qZA(),t.TgZ(10,"p"),t._uU(11),t._UZ(12,"br"),t._uU(13),t.qZA()()),2&e){const a=t.oxw(2);t.xp6(4),t.hij(" Status: ",a.mcStatus.ip," is "),t.xp6(2),t.Oqu(a.mcStatus.online?"online":"offline"),t.xp6(1),t.Q6J("ngIf",a.mcStatus.debug.cachetime>0),t.xp6(2),t.hij(" Description: ",a.mcStatus.motd.raw[0]," "),t.xp6(2),t.hij(" Version: ",a.mcStatus.version," "),t.xp6(2),t.AsE(" Players: ",a.mcStatus.players.online,"/",a.mcStatus.players.max," ")}}function k(e,n){if(1&e&&(t.TgZ(0,"p"),t._uU(1),t._UZ(2,"mat-progress-bar",20),t.qZA()),2&e){const a=t.oxw(2);t.xp6(1),t.AsE(" Checking Server: ",a.form.value.serverIp,":",a.form.value.serverPort," ")}}function J(e,n){if(1&e&&(t.TgZ(0,"mat-card",4)(1,"mat-card-content"),t.YNc(2,N,1,2,"div",17),t.YNc(3,M,14,7,"div",18),t.YNc(4,k,3,2,"p",18),t.qZA()()),2&e){const a=t.oxw();t.xp6(2),t.Q6J("ngIf",a.mcStatus),t.xp6(1),t.Q6J("ngIf",a.mcStatus),t.xp6(1),t.Q6J("ngIf",!a.mcStatus)}}(0,h.Cg)((()=>{class e{constructor(a,r,Z,_,A,w){this.dialog=a,this.titleService=r,this.overlayContainer=Z,this.formBuilder=_,this.domSanitizer=A,this.checkService=w,this.appRunning=!1,this.reloadTimer=(0,b.H)(0,5e3),this.class="indigo-pink-theme",this.appname="Minecraft server status",this.titleService.setTitle(this.appname),this.overlayContainer.getContainerElement().classList.add("indigo-pink-theme")}ngOnInit(){this.form=this.formBuilder.group({serverIp:["85.214.57.99"],serverPort:["25565"]})}openDialog(a){this.dialog.open(a,{maxWidth:"800px"})}onSubmit(){this.appRunning=!0,this.reloadSubscription&&(this.reloadSubscription.unsubscribe(),this.mcStatus=null),this.reloadSubscription=this.reloadTimer.subscribe(()=>this.check(this.form.value.serverIp+":"+this.form.value.serverPort))}check(a){this.checkService.check(a).subscribe(r=>this.mcStatus=r)}headerImage(){return this.mcStatus?this.domSanitizer.bypassSecurityTrustStyle(`url('${this.mcStatus.icon}')`):""}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(s.uw),t.Y36(h.Dx),t.Y36(C.Xj),t.Y36(i.qu),t.Y36(h.H7),t.Y36(U))},e.\u0275cmp=t.Xpm({type:e,selectors:[["mcs-root"]],hostVars:2,hostBindings:function(a,r){2&a&&t.Tol(r.class)},standalone:!0,features:[t.jDz],decls:26,vars:3,consts:[[1,"mat-app-background"],["color","primary",1,"mat-elevation-z4","justify-between"],["mat-button","",3,"click"],["dialog",""],[1,"w-7/12","mx-auto"],["novalidate","",3,"formGroup","ngSubmit"],[1,"flex","gap-5"],[1,"flex-1"],["type","text","matInput","","formControlName","serverIp"],["type","text","matInput","","formControlName","serverPort"],[1,"flex"],["mat-raised-button","","color","primary",1,"flex-1"],["class","w-7/12 mx-auto",4,"ngIf"],["mat-dialog-title",""],["href","https://api.mcsrvstat.us/","target","_blank"],["align","end"],["mat-button","","mat-dialog-close","","cdkFocusInitial",""],["style","width: 64px; height: 64px;",3,"background-image",4,"ngIf"],[4,"ngIf"],[2,"width","64px","height","64px"],["color","primary","mode","indeterminate","value","50"]],template:function(a,r){if(1&a){const Z=t.EpF();t.TgZ(0,"div",0)(1,"mat-toolbar",1),t._uU(2),t.TgZ(3,"button",2),t.NdJ("click",function(){t.CHM(Z);const A=t.MAs(6);return t.KtG(r.openDialog(A))}),t._uU(4,"APP INFO"),t.qZA()(),t.YNc(5,I,15,0,"ng-template",null,3,t.W1O),t.TgZ(7,"mat-card",4)(8,"mat-card-header")(9,"mat-card-title"),t._uU(10,"Options and run"),t.qZA()(),t.TgZ(11,"mat-card-content")(12,"form",5),t.NdJ("ngSubmit",function(){return r.onSubmit()}),t.TgZ(13,"div",6)(14,"mat-form-field",7)(15,"mat-label"),t._uU(16,"Server IP"),t.qZA(),t._UZ(17,"input",8),t.qZA(),t.TgZ(18,"mat-form-field",7)(19,"mat-label"),t._uU(20,"Server Port"),t.qZA(),t._UZ(21,"input",9),t.qZA()(),t.TgZ(22,"div",10)(23,"button",11),t._uU(24,"RUN/UPDATE"),t.qZA()()()()(),t.YNc(25,J,5,3,"mat-card",12),t.qZA()}2&a&&(t.xp6(2),t.hij(" ",r.appname," "),t.xp6(10),t.Q6J("formGroup",r.form),t.xp6(13),t.Q6J("ngIf",r.appRunning))},dependencies:[l.ez,l.O5,l.uU,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,y,f.lW,c.a8,c.dn,c.dk,c.n5,s.ZT,s.uh,s.xY,s.H8,g.Nt,d.KE,d.hX,v.pW,x.Ye],styles:["body[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;margin:0;overflow-y:scroll}mat-card[_ngcontent-%COMP%], mat-progress-bar[_ngcontent-%COMP%]{margin-top:20px}"]}),e})(),{providers:[(0,T.iQ)(),(0,u.h_)()]}).catch(e=>console.error(e))}},m=>{m.O(0,["vendor"],()=>m(m.s=670)),m.O()}]);