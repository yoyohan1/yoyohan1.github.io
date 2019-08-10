var __reflect=this&&this.__reflect||function(e,t,n){e.__class__=t,n?n.push(t):n=[t],e.__types__=e.__types__?n.concat(e.__types__):n},__extends=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);n.prototype=t.prototype,e.prototype=new n},__awaiter=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(r,o){function s(e){try{l(i.next(e))}catch(t){o(t)}}function a(e){try{l(i["throw"](e))}catch(t){o(t)}}function l(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(s,a)}l((i=i.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function n(e){return function(t){return i([e,t])}}function i(n){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,o&&(s=o[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(o,n[1])).done)return s;switch(o=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return l.label++,{value:n[1],done:!1};case 5:l.label++,o=n[1],n=[0];continue;case 7:n=l.ops.pop(),l.trys.pop();continue;default:if(s=l.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){l=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){l.label=n[1];break}if(6===n[0]&&l.label<s[1]){l.label=s[1],s=n;break}if(s&&l.label<s[2]){l.label=s[2],l.ops.push(n);break}s[2]&&l.ops.pop(),l.trys.pop();continue}n=t.call(e,l)}catch(i){n=[6,i],o=0}finally{r=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var r,o,s,a,l={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,n){function i(i){t.call(n,i,e)}if(RES.hasRes(e)){var r=RES.getRes(e);r?i(r):RES.getResAsync(e,i,this)}else RES.getResByUrl(e,i,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var BottleType;!function(e){e[e.None=0]="None",e[e.Bottle1=1]="Bottle1",e[e.Bottle2=2]="Bottle2",e[e.Bottle3=3]="Bottle3",e[e.Bottle4=4]="Bottle4",e[e.Bottle5=5]="Bottle5",e[e.Bottle6=6]="Bottle6"}(BottleType||(BottleType={}));var Bottle=function(e){function t(t){var n=e.call(this)||this;return n.mBottleType=t,n}return __extends(t,e),Object.defineProperty(t.prototype,"mBottleType",{get:function(){return this._mBottleType},set:function(e){this._mBottleType=e;var t="bottle"+e+"_png";this.source=RES.getRes(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isSelected",{get:function(){return this._isSelected},set:function(e){this._isSelected=e,e?this.alpha=.5:this.alpha=1},enumerable:!0,configurable:!0}),t}(eui.Image);__reflect(Bottle.prototype,"Bottle");var Game=function(e){function t(){var t=e.call(this)||this;t.lastTime=-1,t.timer=1,t.loopCount=0,t.skinName="resource/skins/GameSkin.exml",t.pickedBottle=new Bottle(1),t.addChild(t.pickedBottle),t.pickedBottle.visible=!1,t.pickedBottle.anchorOffsetX=12.5,t.pickedBottle.anchorOffsetY=45,t.pickedBottle.scaleX=t.pickedBottle.scaleY=2,t.addEventListener(egret.TouchEvent.TOUCH_BEGIN,t.onTouchBegin,t),t.addEventListener(egret.TouchEvent.TOUCH_MOVE,t.onTouchMove,t),t.addEventListener(egret.TouchEvent.TOUCH_END,t.onTouchEnd,t),t.btn_replay.addEventListener(egret.TouchEvent.TOUCH_TAP,t.onReplayBtnClick,t),t.btn_mainMenu.addEventListener(egret.TouchEvent.TOUCH_TAP,t.onMainMenuBtnClick,t),egret.startTick(t.update,t);for(var n=egret.Tween.get(t.lb_hint),i=0,r=0;8>r;r++)n.to({alpha:i},500),i=r%2==0?0:1;return t}return __extends(t,e),t.getInstance=function(){return null==t._instance&&(t._instance=new t),t._instance},Object.defineProperty(t.prototype,"score",{get:function(){return this._score},set:function(e){this._score=e,this.lb_score.text=this.lb_score_over.text=e+""},enumerable:!0,configurable:!0}),t.prototype.tweenOver1=function(){null!=this.tweener1&&this.tweener1.pause(),this.loopCount>6&&(egret.Tween.removeTweens(this.lb_hint),this.lb_hint.visible=!1),this.loopCount++,this.tweener2.play()},t.prototype.tweenOver2=function(){null!=this.tweener2&&this.tweener2.pause(),this.tweener1.play()},t.prototype.update=function(e){-1==this.lastTime&&(this.lastTime=e);var t=(e-this.lastTime)/1e3;if(this.lastTime=e,1!=this.panel_over.visible){if(this.timer+=t,this.timer>=2){var n=this.gp_conveyer.addChild(new Bottle(Math.floor(6*Math.random()+1)));n.x=Math.random()*this.gp_conveyer.width,this.timer=0}for(var i=this.gp_conveyer.numChildren-1;i>=0;i--){var r=this.gp_conveyer.getChildAt(i);if(r.y+=100*t,r.y>this.gp_conveyer.height){this.gp_conveyer.removeChild(r),this.gameOver();break}}return!1}},t.prototype.onTouchBegin=function(e){for(var t=new egret.Point(e.stageX-this.gp_conveyer.x,e.stageY-this.gp_conveyer.y),n=this.gp_conveyer.numChildren-1;n>=0;n--){var i=this.gp_conveyer.getChildAt(n),r=new egret.Rectangle(i.x,i.y,i.width,i.height);r.containsPoint(t)&&(i.isSelected=!0,this.selectedBottle=i,this.pickedBottle.mBottleType=i.mBottleType,this.pickedBottle.visible=!0,this.pickedBottle.x=e.stageX,this.pickedBottle.y=e.stageY)}},t.prototype.onTouchMove=function(e){null!=this.selectedBottle&&1!=this.panel_over.visible&&(this.pickedBottle.x=e.stageX,this.pickedBottle.y=e.stageY)},t.prototype.onTouchEnd=function(e){if(1!=this.panel_over.visible&&null!=this.selectedBottle){this.selectedBottle.isSelected=!1,this.pickedBottle.visible=!1;for(var t=new egret.Point(e.stageX-this.gp_pack.x,e.stageY-this.gp_pack.y),n=0;n<this.gp_pack.numChildren;n++){var i=this.gp_pack.getChildAt(n);if(1!=i.isPacking){var r=new egret.Rectangle(i.x,i.y,i.width,i.height);if(r.containsPoint(t)){i.Pos==this.pickedBottle.mBottleType?(1==i.addBottle(this.pickedBottle)&&(this.score+=5),this.gp_conveyer.removeChild(this.selectedBottle),this.score+=1):this.gameOver();break}}}this.selectedBottle=null}},t.prototype.onReplayBtnClick=function(){this.lastTime=-1,this.score=0,this.panel_over.visible=!1,this.pickedBottle.visible=!1,this.gp_conveyer.removeChildren();for(var e=0;e<this.gp_pack.numChildren;e++){var t=this.gp_pack.getChildAt(e);t.cleanBottle()}for(var n=0;n<this.gp_pack.numChildren;n++){var i=this.gp_pack.getChildAt(n);i.anchorOffsetY=-800,egret.Tween.get(i).wait(200*n).to({anchorOffsetY:0},500)}},t.prototype.onMainMenuBtnClick=function(){this.parent.addChild(Start.getInstance()),this.parent.removeChild(this)},t.prototype.gameOver=function(){this.panel_over.visible=!0;for(var e=0;e<this.panel_over.numChildren;e++){var t=this.panel_over.getChildAt(e);t.alpha=0,egret.Tween.get(t).wait(200*e).to({alpha:1},500)}},t._instance=null,t}(eui.Component);__reflect(Game.prototype,"Game");var LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="游戏资源加载中..."+e+"/"+t},t}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadResource()];case 1:return t.sent(),this.createGameScene(),[4,platform.login()];case 2:return t.sent(),[4,platform.getUserInfo()];case 3:return e=t.sent(),console.log(e),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),e=new LoadingUI,this.stage.addChild(e),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,this.loadTheme()];case 2:return n.sent(),[4,RES.loadGroup("preload",0,e)];case 3:return n.sent(),this.stage.removeChild(e),[3,5];case 4:return t=n.sent(),console.error(t),[3,5];case 5:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,n){var i=new eui.Theme("resource/default.thm.json",e.stage);i.addEventListener(eui.UIEvent.COMPLETE,function(){t()},e)})},t.prototype.createGameScene=function(){this.addChild(Start.getInstance())},t}(eui.UILayer);__reflect(Main.prototype,"Main");var Package1=function(e){function t(){var t=e.call(this)||this;return t.isPacking=!1,t._sum=0,t}return __extends(t,e),Object.defineProperty(t.prototype,"Pos",{get:function(){return this._Pos},set:function(e){this._Pos=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"sum",{get:function(){return this._sum},set:function(e){this._sum=e;var t="bottle"+this._Pos+"_"+e+"_png";this.img_body.source=RES.getRes(t)},enumerable:!0,configurable:!0}),t.prototype.addBottle=function(e){return this.sum+=1,this.sum>=6?(this.sum=0,this.playFullAnim(),!0):!1},t.prototype.cleanBottle=function(){this.sum=0},t.prototype.playFullAnim=function(){var e=this;this.isPacking=!0;for(var t=egret.Tween.get(this.img_body),n=7;24>n;n++){var i="bottle"+this._Pos+"_"+n+"_png";t.set({source:RES.getRes(i)}).wait(100)}t.call(function(){e.sum=0,e.isPacking=!1},this)},t}(eui.Component);__reflect(Package1.prototype,"Package1");var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var Start=function(e){function t(){var t=e.call(this)||this;return t.skinName="resource/skins/StartSkin.exml",t.btn_play.addEventListener(egret.TouchEvent.TOUCH_TAP,t.onPlayBtnClick,t),t}return __extends(t,e),t.getInstance=function(){return null==t._instance&&(t._instance=new t),t._instance},t.prototype.onPlayBtnClick=function(){Game.getInstance().onReplayBtnClick(),this.parent.addChild(Game.getInstance()),this.parent.removeChild(this)},t._instance=null,t}(eui.Component);__reflect(Start.prototype,"Start");var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,n,i){function r(e){t.call(i,e)}function o(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),n.call(i))}var s=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){t.call(i,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(e,n){window.JSONParseClass.setData(e),egret.callLater(function(){t.call(i,generateEUI2)},s)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(e.indexOf(".exml")>-1){var a=e.split("/");a.pop();var l=a.join("/")+"_EUI.json";generateJSON.paths[e]?egret.callLater(function(){t.call(i,generateJSON.paths[e])},this):RES.getResByUrl(l,function(n){window.JSONParseClass.setData(n),egret.callLater(function(){t.call(i,generateJSON.paths[e])},s)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){t.call(i,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),RES.getResByUrl(e,r,this,RES.ResourceItem.TYPE_TEXT)},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);