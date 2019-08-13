window.__require=function t(e,o,c){function i(s,r){if(!o[s]){if(!e[s]){var a=s.split("/");if(a=a[a.length-1],!e[a]){var h="function"==typeof __require&&__require;if(!r&&h)return h(a,!0);if(n)return n(a,!0);throw new Error("Cannot find module '"+s+"'")}}var u=o[s]={exports:{}};e[s][0].call(u.exports,function(t){return i(e[s][1][t]||t)},u,u.exports,t,e,o,c)}return o[s].exports}for(var n="function"==typeof __require&&__require,s=0;s<c.length;s++)i(c[s]);return i}({CameraSpin:[function(t,e,o){"use strict";cc._RF.push(e,"9c96ed3nqhBD6cq86tc+aqd","CameraSpin"),Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,n=c.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.target=null,e.camera=null,e.xSpeed=5,e.ySpeed=5,e.yMinLimit=-90,e.yMaxLimit=90,e.leftMax=-365,e.rightMax=365,e.minDistance=1,e.maxDistance=100,e.G_fZoomSpeed=-16,e.x=0,e.y=0,e.z=0,e.distance=5,e.rotation=new cc.Quat,e.position=cc.Vec3.ZERO,e.curTouchCount=0,e.curTouchEvent=null,e}return __extends(e,t),Object.defineProperty(e.prototype,"cameraNode",{get:function(){return null==this._cameraNode&&(this._cameraNode=this.camera.node),this._cameraNode},enumerable:!0,configurable:!0}),e.prototype.start=function(){this.distance=this.target.position.sub(this.cameraNode.position).mag(),console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! distance:"+this.distance),this.node.on(cc.Node.EventType.MOUSE_DOWN,this.onMouseDown,this),this.node.on(cc.Node.EventType.MOUSE_UP,this.onMouseUp,this),this.node.on(cc.Node.EventType.MOUSE_WHEEL,this.onMouseWheel,this),this.node.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this),this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this)},e.prototype.onDestroy=function(){this.node.off(cc.Node.EventType.MOUSE_DOWN,this.onMouseDown,this),this.node.off(cc.Node.EventType.MOUSE_UP,this.onMouseUp,this),this.node.off(cc.Node.EventType.MOUSE_WHEEL,this.onMouseWheel,this),this.node.off(cc.Node.EventType.TOUCH_START,this.onTouchStart,this),this.node.off(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this)},e.prototype.onTouchStart=function(t){var e=t.getTouches();this.curTouchEvent=t,1==e.length?(console.log("onTouchStart 1"),this.curTouchCount=1):2==e.length&&(console.log("onTouchStart 2"),this.curTouchCount=2)},e.prototype.onTouchMove=function(t){1==this.curTouchCount?this.onTouchToMove(t):this.curTouchCount},e.prototype.onTouchTwo=function(t){var e=t.getTouches();if(console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!TOUCH_START"+e.length+"  event.getType():"+t.getType()),2==e.length){var o=e[0].getLocation().sub(e[0].getPreviousLocation()).mag(),c=(e[1].getLocation().sub(e[1].getPreviousLocation()).mag()+o)/100;this.processToFarAndNear(c)}},e.prototype.processToFarAndNear=function(t){var e=cc.Vec3.ZERO,o=cc.Vec3.ZERO;this.cameraNode.getPosition(e),this.target.getPosition(o);var c=e.add(e.sub(o).normalize().mul(t*this.G_fZoomSpeed*.5));this.cameraNode.setPosition(c);var i=o.sub(o.sub(e).normalize().mul(this.minDistance)),n=o.sub(o.sub(e).normalize().mul(this.maxDistance)),s=i.x<n.x?cc.misc.clampf(c.x,i.x,n.x):cc.misc.clampf(c.x,n.x,i.x),r=i.y<n.y?cc.misc.clampf(c.y,i.y,n.y):cc.misc.clampf(c.y,n.y,i.y),a=i.z<n.z?cc.misc.clampf(c.z,i.z,n.z):cc.misc.clampf(c.z,n.z,i.z);this.cameraNode.setPosition(new cc.Vec3(s,r,a)),this.isTiaoJie=!0},e.prototype.onTouchToMove=function(t){var e=t.getPreviousLocation(),o=t.getLocation().sub(e);this.y>90&&this.y<270||this.y<-90&&this.y>-270?this.x=this.x+o.x*this.xSpeed*.13:this.x=this.x-o.x*this.xSpeed*.13,this.y=this.y-o.y*this.ySpeed*-.13,this.y>180&&(this.y-=360),this.x=this.ClampAngle(this.x,this.leftMax,this.rightMax),this.y=this.ClampAngle(this.y,this.yMinLimit,this.yMaxLimit),this.distance=cc.misc.clampf(this.distance,this.minDistance,this.maxDistance),this.rotation=this.rotation.fromEuler(new cc.Vec3(this.y,this.x,this.z));var c=new cc.Vec3(0,0,this.distance);this.position=this.QuatMulVec(this.rotation,c).add(new cc.Vec3(this.target.x,this.target.y,this.target.z)),this.cameraNode.setPosition(this.position);var i=cc.Vec3.ZERO;this.rotation.toEuler(i),this.cameraNode.eulerAngles=i},e.prototype.QuatMulVec=function(t,e){var o=2*t.x,c=2*t.y,i=2*t.z,n=t.x*o,s=t.y*c,r=t.z*i,a=t.x*c,h=t.x*i,u=t.y*i,p=t.w*o,d=t.w*c,l=t.w*i,y=cc.Vec3.ONE;return y.x=(1-(s+r))*e.x+(a-l)*e.y+(h+d)*e.z,y.y=(a+l)*e.x+(1-(n+r))*e.y+(u-p)*e.z,y.z=(h-d)*e.x+(u+p)*e.y+(1-(n+s))*e.z,y},e.prototype.ClampAngle=function(t,e,o){return t<-360&&(t+=360),t>360&&(t-=360),cc.misc.clampf(t,e,o)},e.prototype.onMouseWheel=function(t){if(cc.sys.platform==cc.sys.WIN32){var e=t.getScrollY();this.processToFarAndNear(e)}},e.prototype.onMouseDown=function(t){var e=t.getButton();if(e===cc.Event.EventMouse.BUTTON_LEFT){var o=t.getLocation();this.node.convertToNodeSpace(o);console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! \u9f20\u6807\u5de6\u952e\u6309\u4e0b:")}else e===cc.Event.EventMouse.BUTTON_MIDDLE||cc.Event.EventMouse.BUTTON_RIGHT},e.prototype.onMouseUp=function(t){var e=t.getButton();if(e===cc.Event.EventMouse.BUTTON_LEFT){var o=t.getLocation();this.node.convertToNodeSpace(o)}else e===cc.Event.EventMouse.BUTTON_MIDDLE||cc.Event.EventMouse.BUTTON_RIGHT},__decorate([n(cc.Node)],e.prototype,"target",void 0),__decorate([n(cc.Camera)],e.prototype,"camera",void 0),__decorate([n],e.prototype,"xSpeed",void 0),__decorate([n],e.prototype,"ySpeed",void 0),__decorate([n],e.prototype,"yMinLimit",void 0),__decorate([n],e.prototype,"yMaxLimit",void 0),__decorate([n],e.prototype,"minDistance",void 0),__decorate([n],e.prototype,"maxDistance",void 0),__decorate([n],e.prototype,"G_fZoomSpeed",void 0),e=__decorate([i],e)}(cc.Component);o.default=s,cc._RF.pop()},{}],NewScript:[function(t,e,o){"use strict";cc._RF.push(e,"548e6tYCwNA65CgWicKT7Hj","NewScript"),Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,n=c.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e}return __extends(e,t),e.prototype.start=function(){},__decorate([n(cc.Label)],e.prototype,"label",void 0),__decorate([n],e.prototype,"text",void 0),e=__decorate([i],e)}(cc.Component);o.default=s,cc._RF.pop()},{}]},{},["CameraSpin","NewScript"]);