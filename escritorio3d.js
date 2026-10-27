var uh=0,wl=1,dh=2;var zi=1,fh=2,ws=3,Cn=0,Xe=1,ln=2,Zn=0,ai=1,ki=2,Rl=3,Cl=4,ph=5;var Vi=100,mh=101,gh=102,_h=103,xh=104,vh=200,yh=201,Mh=202,Sh=203,Pl=204,Il=205,bh=206,Eh=207,Th=208,Ah=209,wh=210,Rh=211,Ch=212,Ph=213,Ih=214,ha=0,ua=1,da=2,ms=3,fa=4,pa=5,ma=6,ga=7,Ga=0,Lh=1,Fh=2,Pn=0,Ll=1,Fl=2,Dl=3,vr=4,Nl=5,Ul=6,Bl=7;var Ol=300,Ei=301,Hi=302,Wa=303,Xa=304,yr=306,gs=1e3,kn=1001,_a=1002,Ve=1003,Dh=1004;var Mr=1005;var He=1006,qa=1007;var Ti=1008;var cn=1009,zl=1010,kl=1011,Rs=1012,Ya=1013,In=1014,yn=1015,Ln=1016,Za=1017,Ja=1018,Cs=1020,Vl=35902,Hl=35899,Gl=1021,Wl=1022,Mn=1023,Vn=1026,Ai=1027,$a=1028,Ka=1029,wi=1030,ja=1031;var Qa=1033,Sr=33776,br=33777,Er=33778,Tr=33779,to=35840,eo=35841,no=35842,io=35843,so=36196,ro=37492,ao=37496,oo=37488,lo=37489,Ar=37490,co=37491,ho=37808,uo=37809,fo=37810,po=37811,mo=37812,go=37813,_o=37814,xo=37815,vo=37816,yo=37817,Mo=37818,So=37819,bo=37820,Eo=37821,To=36492,Ao=36494,wo=36495,Ro=36283,Co=36284,wr=36285,Po=36286;var Zs=2300,xa=2301,la=2302,xl=2303,vl=2400,yl=2401,Ml=2402;var Nh=3200;var Rr=0,Uh=1,oi="",$e="srgb",Js="srgb-linear",$s="linear",le="srgb";var ca=7680;var Bh=519,Oh=512,zh=513,kh=514,Io=515,Vh=516,Hh=517,Lo=518,Gh=519,Xl=35044;var ql="300 es",Rn=2e3,_s=2001;function Gu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Wu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wh(){let i=Ks("canvas");return i.style.display="block",i}var zc={},xs=null;function js(...i){let t="THREE."+i.shift();xs?xs("log",t,...i):console.log(t,...i)}function Xh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ut(...i){i=Xh(i);let t="THREE."+i.shift();if(xs)xs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Bt(...i){i=Xh(i);let t="THREE."+i.shift();if(xs)xs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Fi(...i){let t=i.join(" ");t in zc||(zc[t]=!0,Ut(...i))}function qh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Yh={[ha]:ua,[da]:ma,[fa]:ga,[ms]:pa,[ua]:ha,[ma]:da,[ga]:fa,[pa]:ms},Hn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Zo=Math.PI/180,Qs=180/Math.PI;function _i(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function Qt(i,t,e){return Math.max(t,Math.min(e,i))}function Xu(i,t){return(i%t+t)%t}function Jo(i,t,e){return(1-e)*i+e*t}function zn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function de(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Kl=class Kl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Kl.prototype.isVector2=!0;var Rt=Kl,Gn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let h=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3],c=r[a+0],d=r[a+1],m=r[a+2],v=r[a+3];if(f!==v||h!==c||l!==d||u!==m){let _=h*c+l*d+u*m+f*v;_<0&&(c=-c,d=-d,m=-m,v=-v,_=-_);let p=1-o;if(_<.9995){let M=Math.acos(_),C=Math.sin(M);p=Math.sin(p*M)/C,o=Math.sin(o*M)/C,h=h*p+c*o,l=l*p+d*o,u=u*p+m*o,f=f*p+v*o}else{h=h*p+c*o,l=l*p+d*o,u=u*p+m*o,f=f*p+v*o;let M=1/Math.sqrt(h*h+l*l+u*u+f*f);h*=M,l*=M,u*=M,f*=M}}t[e]=h,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],h=n[s+1],l=n[s+2],u=n[s+3],f=r[a],c=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+u*f+h*d-l*c,t[e+1]=h*m+u*c+l*f-o*d,t[e+2]=l*m+u*d+o*c-h*f,t[e+3]=u*m-o*f-h*c-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,h=Math.sin,l=o(n/2),u=o(s/2),f=o(r/2),c=h(n/2),d=h(s/2),m=h(r/2);switch(a){case"XYZ":this._x=c*u*f+l*d*m,this._y=l*d*f-c*u*m,this._z=l*u*m+c*d*f,this._w=l*u*f-c*d*m;break;case"YXZ":this._x=c*u*f+l*d*m,this._y=l*d*f-c*u*m,this._z=l*u*m-c*d*f,this._w=l*u*f+c*d*m;break;case"ZXY":this._x=c*u*f-l*d*m,this._y=l*d*f+c*u*m,this._z=l*u*m+c*d*f,this._w=l*u*f-c*d*m;break;case"ZYX":this._x=c*u*f-l*d*m,this._y=l*d*f+c*u*m,this._z=l*u*m-c*d*f,this._w=l*u*f+c*d*m;break;case"YZX":this._x=c*u*f+l*d*m,this._y=l*d*f+c*u*m,this._z=l*u*m-c*d*f,this._w=l*u*f-c*d*m;break;case"XZY":this._x=c*u*f-l*d*m,this._y=l*d*f-c*u*m,this._z=l*u*m+c*d*f,this._w=l*u*f+c*d*m;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],h=e[9],l=e[2],u=e[6],f=e[10],c=n+o+f;if(c>0){let d=.5/Math.sqrt(c+1);this._w=.25/d,this._x=(u-h)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(u-h)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(h+u)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(h+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,h=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*h,this._y=s*u+a*h+r*o-n*l,this._z=r*u+a*l+n*h-s*o,this._w=a*u-n*o-s*h-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let h=1-e;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);h=Math.sin(h*l)/u,e=Math.sin(e*l)/u,this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+a*e,this._onChangeCallback()}else this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},jl=class jl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,h=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+h*l+a*f-o*u,this.y=n+h*u+o*l-r*f,this.z=s+h*f+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,h=e.z;return this.x=s*h-r*o,this.y=r*a-n*h,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $o.copy(this).projectOnVector(t),this.sub($o)}reflect(t){return this.sub($o.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jl.prototype.isVector3=!0;var U=jl,$o=new U,kc=new Gn,Ql=class Ql{constructor(t,e,n,s,r,a,o,h,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,h,l)}set(t,e,n,s,r,a,o,h,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=h,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],h=n[6],l=n[1],u=n[4],f=n[7],c=n[2],d=n[5],m=n[8],v=s[0],_=s[3],p=s[6],M=s[1],C=s[4],y=s[7],A=s[2],E=s[5],I=s[8];return r[0]=a*v+o*M+h*A,r[3]=a*_+o*C+h*E,r[6]=a*p+o*y+h*I,r[1]=l*v+u*M+f*A,r[4]=l*_+u*C+f*E,r[7]=l*p+u*y+f*I,r[2]=c*v+d*M+m*A,r[5]=c*_+d*C+m*E,r[8]=c*p+d*y+m*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*h+s*r*l-s*a*h}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],l=t[7],u=t[8],f=u*a-o*l,c=o*h-u*r,d=l*r-a*h,m=e*f+n*c+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return t[0]=f*v,t[1]=(s*l-u*n)*v,t[2]=(o*n-s*a)*v,t[3]=c*v,t[4]=(u*e-s*h)*v,t[5]=(s*r-o*e)*v,t[6]=d*v,t[7]=(n*h-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let h=Math.cos(r),l=Math.sin(r);return this.set(n*h,n*l,-n*(h*a+l*o)+a+t,-s*l,s*h,-s*(-l*a+h*o)+o+e,0,0,1),this}scale(t,e){return Fi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ko.makeScale(t,e)),this}rotate(t){return Fi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ko.makeRotation(-t)),this}translate(t,e){return Fi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ko.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ql.prototype.isMatrix3=!0;var Vt=Ql,Ko=new Vt,Vc=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hc=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qu(){let i={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===le&&(s.r=ri(s.r),s.g=ri(s.g),s.b=ri(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===le&&(s.r=ps(s.r),s.g=ps(s.g),s.b=ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?$s:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Js]:{primaries:t,whitePoint:n,transfer:$s,toXYZ:Vc,fromXYZ:Hc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:n,transfer:le,toXYZ:Vc,fromXYZ:Hc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),i}var ee=qu();function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var $i,va=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{$i===void 0&&($i=Ks("canvas")),$i.width=t.width,$i.height=t.height;let s=$i.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=$i}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ks("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ri(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ri(e[n]/255)*255):e[n]=ri(e[n]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Yu=0,vs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=_i(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(jo(s[a].image)):r.push(jo(s[a]))}else r=jo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function jo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?va.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}var Zu=0,Qo=new U,nn=class i extends Hn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=kn,s=kn,r=He,a=Ti,o=Mn,h=cn,l=i.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=_i(),this.name="",this.source=new vs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=h,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qo).x}get height(){return this.source.getSize(Qo).y}get depth(){return this.source.getSize(Qo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ol)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gs:t.x=t.x-Math.floor(t.x);break;case kn:t.x=t.x<0?0:1;break;case _a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gs:t.y=t.y-Math.floor(t.y);break;case kn:t.y=t.y<0?0:1;break;case _a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Ol;nn.DEFAULT_ANISOTROPY=1;var tc=class tc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,h=t.elements,l=h[0],u=h[4],f=h[8],c=h[1],d=h[5],m=h[9],v=h[2],_=h[6],p=h[10];if(Math.abs(u-c)<.01&&Math.abs(f-v)<.01&&Math.abs(m-_)<.01){if(Math.abs(u+c)<.1&&Math.abs(f+v)<.1&&Math.abs(m+_)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(l+1)/2,y=(d+1)/2,A=(p+1)/2,E=(u+c)/4,I=(f+v)/4,x=(m+_)/4;return C>y&&C>A?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=E/n,r=I/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=x/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=I/r,s=x/r),this.set(n,s,r,e),this}let M=Math.sqrt((_-m)*(_-m)+(f-v)*(f-v)+(c-u)*(c-u));return Math.abs(M)<.001&&(M=1),this.x=(_-m)/M,this.y=(f-v)/M,this.z=(c-u)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};tc.prototype.isVector4=!0;var be=tc,ya=class extends Hn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new nn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:He,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new vs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends ya{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},tr=class extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ma=class extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ha=class Ha{constructor(t,e,n,s,r,a,o,h,l,u,f,c,d,m,v,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,h,l,u,f,c,d,m,v,_)}set(t,e,n,s,r,a,o,h,l,u,f,c,d,m,v,_){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=h,p[2]=l,p[6]=u,p[10]=f,p[14]=c,p[3]=d,p[7]=m,p[11]=v,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ha().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ki.setFromMatrixColumn(t,0).length(),r=1/Ki.setFromMatrixColumn(t,1).length(),a=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),h=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let c=a*u,d=a*f,m=o*u,v=o*f;e[0]=h*u,e[4]=-h*f,e[8]=l,e[1]=d+m*l,e[5]=c-v*l,e[9]=-o*h,e[2]=v-c*l,e[6]=m+d*l,e[10]=a*h}else if(t.order==="YXZ"){let c=h*u,d=h*f,m=l*u,v=l*f;e[0]=c+v*o,e[4]=m*o-d,e[8]=a*l,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-m,e[6]=v+c*o,e[10]=a*h}else if(t.order==="ZXY"){let c=h*u,d=h*f,m=l*u,v=l*f;e[0]=c-v*o,e[4]=-a*f,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*u,e[9]=v-c*o,e[2]=-a*l,e[6]=o,e[10]=a*h}else if(t.order==="ZYX"){let c=a*u,d=a*f,m=o*u,v=o*f;e[0]=h*u,e[4]=m*l-d,e[8]=c*l+v,e[1]=h*f,e[5]=v*l+c,e[9]=d*l-m,e[2]=-l,e[6]=o*h,e[10]=a*h}else if(t.order==="YZX"){let c=a*h,d=a*l,m=o*h,v=o*l;e[0]=h*u,e[4]=v-c*f,e[8]=m*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=d*f+m,e[10]=c-v*f}else if(t.order==="XZY"){let c=a*h,d=a*l,m=o*h,v=o*l;e[0]=h*u,e[4]=-f,e[8]=l*u,e[1]=c*f+v,e[5]=a*u,e[9]=d*f-m,e[2]=m*f-d,e[6]=o*u,e[10]=v*f+c}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ju,t,$u)}lookAt(t,e,n){let s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),di.crossVectors(n,hn),di.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),di.crossVectors(n,hn)),di.normalize(),zr.crossVectors(hn,di),s[0]=di.x,s[4]=zr.x,s[8]=hn.x,s[1]=di.y,s[5]=zr.y,s[9]=hn.y,s[2]=di.z,s[6]=zr.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],h=n[8],l=n[12],u=n[1],f=n[5],c=n[9],d=n[13],m=n[2],v=n[6],_=n[10],p=n[14],M=n[3],C=n[7],y=n[11],A=n[15],E=s[0],I=s[4],x=s[8],w=s[12],T=s[1],R=s[5],P=s[9],F=s[13],L=s[2],D=s[6],q=s[10],X=s[14],tt=s[3],Z=s[7],K=s[11],et=s[15];return r[0]=a*E+o*T+h*L+l*tt,r[4]=a*I+o*R+h*D+l*Z,r[8]=a*x+o*P+h*q+l*K,r[12]=a*w+o*F+h*X+l*et,r[1]=u*E+f*T+c*L+d*tt,r[5]=u*I+f*R+c*D+d*Z,r[9]=u*x+f*P+c*q+d*K,r[13]=u*w+f*F+c*X+d*et,r[2]=m*E+v*T+_*L+p*tt,r[6]=m*I+v*R+_*D+p*Z,r[10]=m*x+v*P+_*q+p*K,r[14]=m*w+v*F+_*X+p*et,r[3]=M*E+C*T+y*L+A*tt,r[7]=M*I+C*R+y*D+A*Z,r[11]=M*x+C*P+y*q+A*K,r[15]=M*w+C*F+y*X+A*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],h=t[9],l=t[13],u=t[2],f=t[6],c=t[10],d=t[14],m=t[3],v=t[7],_=t[11],p=t[15],M=h*d-l*c,C=o*d-l*f,y=o*c-h*f,A=a*d-l*u,E=a*c-h*u,I=a*f-o*u;return e*(v*M-_*C+p*y)-n*(m*M-_*A+p*E)+s*(m*C-v*A+p*I)-r*(m*y-v*E+_*I)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],h=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-n*(r*u-o*h)+s*(r*l-a*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],l=t[7],u=t[8],f=t[9],c=t[10],d=t[11],m=t[12],v=t[13],_=t[14],p=t[15],M=e*o-n*a,C=e*h-s*a,y=e*l-r*a,A=n*h-s*o,E=n*l-r*o,I=s*l-r*h,x=u*v-f*m,w=u*_-c*m,T=u*p-d*m,R=f*_-c*v,P=f*p-d*v,F=c*p-d*_,L=M*F-C*P+y*R+A*T-E*w+I*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/L;return t[0]=(o*F-h*P+l*R)*D,t[1]=(s*P-n*F-r*R)*D,t[2]=(v*I-_*E+p*A)*D,t[3]=(c*E-f*I-d*A)*D,t[4]=(h*T-a*F-l*w)*D,t[5]=(e*F-s*T+r*w)*D,t[6]=(_*y-m*I-p*C)*D,t[7]=(u*I-c*y+d*C)*D,t[8]=(a*P-o*T+l*x)*D,t[9]=(n*T-e*P-r*x)*D,t[10]=(m*E-v*y+p*M)*D,t[11]=(f*y-u*E-d*M)*D,t[12]=(o*w-a*R-h*x)*D,t[13]=(e*R-n*w+s*x)*D,t[14]=(v*C-m*A-_*M)*D,t[15]=(u*A-f*C+c*M)*D,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,h=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*h,l*h+s*o,0,l*o+s*h,u*o+n,u*h-s*a,0,l*h-s*o,u*h+s*a,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,h=e._w,l=r+r,u=a+a,f=o+o,c=r*l,d=r*u,m=r*f,v=a*u,_=a*f,p=o*f,M=h*l,C=h*u,y=h*f,A=n.x,E=n.y,I=n.z;return s[0]=(1-(v+p))*A,s[1]=(d+y)*A,s[2]=(m-C)*A,s[3]=0,s[4]=(d-y)*E,s[5]=(1-(c+p))*E,s[6]=(_+M)*E,s[7]=0,s[8]=(m+C)*I,s[9]=(_-M)*I,s[10]=(1-(c+v))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ki.set(s[0],s[1],s[2]).length(),o=Ki.set(s[4],s[5],s[6]).length(),h=Ki.set(s[8],s[9],s[10]).length();r<0&&(a=-a),En.copy(this);let l=1/a,u=1/o,f=1/h;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=f,En.elements[9]*=f,En.elements[10]*=f,e.setFromRotationMatrix(En),n.x=a,n.y=o,n.z=h,this}makePerspective(t,e,n,s,r,a,o=Rn,h=!1){let l=this.elements,u=2*r/(e-t),f=2*r/(n-s),c=(e+t)/(e-t),d=(n+s)/(n-s),m,v;if(h)m=r/(a-r),v=a*r/(a-r);else if(o===Rn)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===_s)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Rn,h=!1){let l=this.elements,u=2/(e-t),f=2/(n-s),c=-(e+t)/(e-t),d=-(n+s)/(n-s),m,v;if(h)m=1/(a-r),v=a/(a-r);else if(o===Rn)m=-2/(a-r),v=-(a+r)/(a-r);else if(o===_s)m=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=c,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ha.prototype.isMatrix4=!0;var fe=Ha,Ki=new U,En=new fe,Ju=new U(0,0,0),$u=new U(1,1,1),di=new U,zr=new U,hn=new U,Gc=new fe,Wc=new Gn,Wn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],h=s[1],l=s[5],u=s[9],f=s[2],c=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(c,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(c,d),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wc.setFromEuler(this),this.setFromQuaternion(Wc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wn.DEFAULT_ORDER="XYZ";var er=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ku=0,Xc=new U,ji=new Gn,Qn=new fe,kr=new U,zs=new U,ju=new U,Qu=new Gn,qc=new U(1,0,0),Yc=new U(0,1,0),Zc=new U(0,0,1),Jc={type:"added"},td={type:"removed"},Qi={type:"childadded",child:null},tl={type:"childremoved",child:null},Te=class i extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new Wn,n=new Gn,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new Vt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(qc,t)}rotateY(t){return this.rotateOnAxis(Yc,t)}rotateZ(t){return this.rotateOnAxis(Zc,t)}translateOnAxis(t,e){return Xc.copy(t).applyQuaternion(this.quaternion),this.position.add(Xc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qc,t)}translateY(t){return this.translateOnAxis(Yc,t)}translateZ(t){return this.translateOnAxis(Zc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?kr.copy(t):kr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(zs,kr,this.up):Qn.lookAt(kr,zs,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(Qn),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Bt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jc),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(td),tl.child=t,this.dispatchEvent(tl),tl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jc),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,t,ju),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,Qu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let h=o.shapes;if(Array.isArray(h))for(let l=0,u=h.length;l<u;l++){let f=h[l];r(t.shapes,f)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let h=0,l=this.material.length;h<l;h++)o.push(r(t.materials,this.material[h]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let h=this.animations[o];s.animations.push(r(t.animations,h))}}if(e){let o=a(t.geometries),h=a(t.materials),l=a(t.textures),u=a(t.images),f=a(t.shapes),c=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),h.length>0&&(n.materials=h),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),c.length>0&&(n.skeletons=c),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let h=[];for(let l in o){let u=o[l];delete u.metadata,h.push(u)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Te.DEFAULT_UP=new U(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nt=class extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}},ed={type:"move"},ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,h=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let v of t.hand.values()){let _=e.getJointPose(v,n),p=this._getHandJoint(l,v);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],c=u.position.distanceTo(f.position),d=.02,m=.005;l.inputState.pinching&&c>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&c<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ed)))}return o!==null&&(o.visible=s!==null),h!==null&&(h.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Nt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function el(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=Xu(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=el(a,r,t+1/3),this.g=el(a,r,t),this.b=el(a,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){let n=Zh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ri(t.r),this.g=ri(t.g),this.b=ri(t.b),this}copyLinearToSRGB(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return ee.workingToColorSpace(Je.copy(this),t),Math.round(Qt(Je.r*255,0,255))*65536+Math.round(Qt(Je.g*255,0,255))*256+Math.round(Qt(Je.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Je.copy(this),e);let n=Je.r,s=Je.g,r=Je.b,a=Math.max(n,s,r),o=Math.min(n,s,r),h,l,u=(o+a)/2;if(o===a)h=0,l=0;else{let f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:h=(s-r)/f+(s<r?6:0);break;case s:h=(r-n)/f+2;break;case r:h=(n-s)/f+4;break}h/=6}return t.h=h,t.s=l,t.l=u,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=$e){ee.workingToColorSpace(Je.copy(this),t);let e=Je.r,n=Je.g,s=Je.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(Vr);let n=Jo(fi.h,Vr.h,e),s=Jo(fi.s,Vr.s,e),r=Jo(fi.l,Vr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Je=new Gt;Gt.NAMES=Zh;var Di=class extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Tn=new U,ti=new U,nl=new U,ei=new U,ts=new U,es=new U,$c=new U,il=new U,sl=new U,rl=new U,al=new be,ol=new be,ll=new be,si=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Tn.subVectors(t,e),s.cross(Tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Tn.subVectors(s,e),ti.subVectors(n,e),nl.subVectors(t,e);let a=Tn.dot(Tn),o=Tn.dot(ti),h=Tn.dot(nl),l=ti.dot(ti),u=ti.dot(nl),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let c=1/f,d=(l*h-o*u)*c,m=(a*u-o*h)*c;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(t,e,n,s,r,a,o,h){return this.getBarycoord(t,e,n,s,ei)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,ei.x),h.addScaledVector(a,ei.y),h.addScaledVector(o,ei.z),h)}static getInterpolatedAttribute(t,e,n,s,r,a){return al.setScalar(0),ol.setScalar(0),ll.setScalar(0),al.fromBufferAttribute(t,e),ol.fromBufferAttribute(t,n),ll.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(al,r.x),a.addScaledVector(ol,r.y),a.addScaledVector(ll,r.z),a}static isFrontFacing(t,e,n,s){return Tn.subVectors(n,e),ti.subVectors(t,e),Tn.cross(ti).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Tn.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ts.subVectors(s,n),es.subVectors(r,n),il.subVectors(t,n);let h=ts.dot(il),l=es.dot(il);if(h<=0&&l<=0)return e.copy(n);sl.subVectors(t,s);let u=ts.dot(sl),f=es.dot(sl);if(u>=0&&f<=u)return e.copy(s);let c=h*f-u*l;if(c<=0&&h>=0&&u<=0)return a=h/(h-u),e.copy(n).addScaledVector(ts,a);rl.subVectors(t,r);let d=ts.dot(rl),m=es.dot(rl);if(m>=0&&d<=m)return e.copy(r);let v=d*l-h*m;if(v<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(es,o);let _=u*m-d*f;if(_<=0&&f-u>=0&&d-m>=0)return $c.subVectors(r,s),o=(f-u)/(f-u+(d-m)),e.copy(s).addScaledVector($c,o);let p=1/(_+v+c);return a=v*p,o=c*p,e.copy(n).addScaledVector(ts,a).addScaledVector(es,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hr.copy(n.boundingBox)),Hr.applyMatrix4(t.matrixWorld),this.union(Hr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),Gr.subVectors(this.max,ks),ns.subVectors(t.a,ks),is.subVectors(t.b,ks),ss.subVectors(t.c,ks),pi.subVectors(is,ns),mi.subVectors(ss,is),Ci.subVectors(ns,ss);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Ci.z,Ci.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Ci.z,0,-Ci.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Ci.y,Ci.x,0];return!cl(e,ns,is,ss,Gr)||(e=[1,0,0,0,1,0,0,0,1],!cl(e,ns,is,ss,Gr))?!1:(Wr.crossVectors(pi,mi),e=[Wr.x,Wr.y,Wr.z],cl(e,ns,is,ss,Gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ni=[new U,new U,new U,new U,new U,new U,new U,new U],An=new U,Hr=new Xn,ns=new U,is=new U,ss=new U,pi=new U,mi=new U,Ci=new U,ks=new U,Gr=new U,Wr=new U,Pi=new U;function cl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Pi.fromArray(i,r);let o=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),h=t.dot(Pi),l=e.dot(Pi),u=n.dot(Pi);if(Math.max(-Math.max(h,l,u),Math.min(h,l,u))>o)return!1}return!0}var Ie=new U,Xr=new Rt,nd=0,an=class extends Hn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xl,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xr.fromBufferAttribute(this,e),Xr.applyMatrix3(t),this.setXY(e,Xr.x,Xr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var nr=class extends an{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ir=class extends an{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ne=class extends an{constructor(t,e,n){super(new Float32Array(t),e,n)}},id=new Xn,Vs=new U,hl=new U,xi=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):id.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vs.subVectors(t,this.center);let e=Vs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vs.copy(t.center).add(hl)),this.expandByPoint(Vs.copy(t.center).sub(hl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},sd=0,vn=new fe,ul=new Te,rs=new U,un=new Xn,Hs=new Xn,ke=new U,Le=class i extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gu(t)?ir:nr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return ul.lookAt(t),ul.updateMatrix(),this.applyMatrix4(ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ne(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(ke.addVectors(un.min,Hs.min),un.expandByPoint(ke),ke.addVectors(un.max,Hs.max),un.expandByPoint(ke)):(un.expandByPoint(Hs.min),un.expandByPoint(Hs.max))}un.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],h=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)ke.fromBufferAttribute(o,l),h&&(rs.fromBufferAttribute(t,l),ke.add(rs)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new an(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],h=[];for(let x=0;x<n.count;x++)o[x]=new U,h[x]=new U;let l=new U,u=new U,f=new U,c=new Rt,d=new Rt,m=new Rt,v=new U,_=new U;function p(x,w,T){l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,w),f.fromBufferAttribute(n,T),c.fromBufferAttribute(r,x),d.fromBufferAttribute(r,w),m.fromBufferAttribute(r,T),u.sub(l),f.sub(l),d.sub(c),m.sub(c);let R=1/(d.x*m.y-m.x*d.y);isFinite(R)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(R),_.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(R),o[x].add(v),o[w].add(v),o[T].add(v),h[x].add(_),h[w].add(_),h[T].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let x=0,w=M.length;x<w;++x){let T=M[x],R=T.start,P=T.count;for(let F=R,L=R+P;F<L;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let C=new U,y=new U,A=new U,E=new U;function I(x){A.fromBufferAttribute(s,x),E.copy(A);let w=o[x];C.copy(w),C.sub(A.multiplyScalar(A.dot(w))).normalize(),y.crossVectors(E,w);let R=y.dot(h[x])<0?-1:1;a.setXYZW(x,C.x,C.y,C.z,R)}for(let x=0,w=M.length;x<w;++x){let T=M[x],R=T.start,P=T.count;for(let F=R,L=R+P;F<L;F+=3)I(t.getX(F+0)),I(t.getX(F+1)),I(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let c=0,d=n.count;c<d;c++)n.setXYZ(c,0,0,0);let s=new U,r=new U,a=new U,o=new U,h=new U,l=new U,u=new U,f=new U;if(t)for(let c=0,d=t.count;c<d;c+=3){let m=t.getX(c+0),v=t.getX(c+1),_=t.getX(c+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,_),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,m),h.fromBufferAttribute(n,v),l.fromBufferAttribute(n,_),o.add(u),h.add(u),l.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,h.x,h.y,h.z),n.setXYZ(_,l.x,l.y,l.z)}else for(let c=0,d=e.count;c<d;c+=3)s.fromBufferAttribute(e,c+0),r.fromBufferAttribute(e,c+1),a.fromBufferAttribute(e,c+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(c+0,u.x,u.y,u.z),n.setXYZ(c+1,u.x,u.y,u.z),n.setXYZ(c+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(o,h){let l=o.array,u=o.itemSize,f=o.normalized,c=new l.constructor(h.length*u),d=0,m=0;for(let v=0,_=h.length;v<_;v++){o.isInterleavedBufferAttribute?d=h[v]*o.data.stride+o.offset:d=h[v]*u;for(let p=0;p<u;p++)c[m++]=l[d++]}return new an(c,u,f)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let h=s[o],l=t(h,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let h=[],l=r[o];for(let u=0,f=l.length;u<f;u++){let c=l[u],d=t(c,n);h.push(d)}e.morphAttributes[o]=h}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,h=a.length;o<h;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let h in n){let l=n[h];t.data.attributes[h]=l.toJSON(t.data)}let s={},r=!1;for(let h in this.morphAttributes){let l=this.morphAttributes[h],u=[];for(let f=0,c=l.length;f<c;f++){let d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(s[h]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],f=r[l];for(let c=0,d=f.length;c<d;c++)u.push(f[c].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,u=a.length;l<u;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Xl,this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},en=new U,sr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=zn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=zn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=zn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=zn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){js("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new an(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){js("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},dl=new U,rd=new U,ad=new Vt,wn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=dl.subVectors(n,e).cross(rd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(dl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ad.getNormalMatrix(t),s=this.coplanarPoint(dl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},od=0,qn=class extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=ai,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pl,this.blendDst=Il,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ca,this.stencilZFail=ca,this.stencilZPass=ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let h=r[o];delete h.metadata,a.push(h)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new wn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Rt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Rt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},vi=class extends qn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},as,Gs=new U,os=new U,ls=new U,cs=new Rt,Ws=new Rt,Jh=new fe,qr=new U,Xs=new U,Yr=new U,Kc=new Rt,fl=new Rt,jc=new Rt,Ni=class extends Te{constructor(t=new vi){if(super(),this.isSprite=!0,this.type="Sprite",as===void 0){as=new Le;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Sa(e,5);as.setIndex([0,1,2,0,2,3]),as.setAttribute("position",new sr(n,3,0,!1)),as.setAttribute("uv",new sr(n,2,3,!1))}this.geometry=as,this.material=t,this.center=new Rt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Bt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),os.setFromMatrixScale(this.matrixWorld),Jh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&os.multiplyScalar(-ls.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Zr(qr.set(-.5,-.5,0),ls,a,os,s,r),Zr(Xs.set(.5,-.5,0),ls,a,os,s,r),Zr(Yr.set(.5,.5,0),ls,a,os,s,r),Kc.set(0,0),fl.set(1,0),jc.set(1,1);let o=t.ray.intersectTriangle(qr,Xs,Yr,!1,Gs);if(o===null&&(Zr(Xs.set(-.5,.5,0),ls,a,os,s,r),fl.set(0,1),o=t.ray.intersectTriangle(qr,Yr,Xs,!1,Gs),o===null))return;let h=t.ray.origin.distanceTo(Gs);h<t.near||h>t.far||e.push({distance:h,point:Gs.clone(),uv:si.getInterpolation(Gs,qr,Xs,Yr,Kc,fl,jc,new Rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Zr(i,t,e,n,s,r){cs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ws.x=r*cs.x-s*cs.y,Ws.y=s*cs.x+r*cs.y):Ws.copy(cs),i.copy(t),i.x+=Ws.x,i.y+=Ws.y,i.applyMatrix4(Jh)}var ii=new U,pl=new U,Jr=new U,$r=new U,ba=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){pl.copy(t).add(e).multiplyScalar(.5),Jr.copy(e).sub(t).normalize(),$r.copy(this.origin).sub(pl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Jr),o=$r.dot(this.direction),h=-$r.dot(Jr),l=$r.lengthSq(),u=Math.abs(1-a*a),f,c,d,m;if(u>0)if(f=a*h-o,c=a*o-h,m=r*u,f>=0)if(c>=-m)if(c<=m){let v=1/u;f*=v,c*=v,d=f*(f+a*c+2*o)+c*(a*f+c+2*h)+l}else c=r,f=Math.max(0,-(a*c+o)),d=-f*f+c*(c+2*h)+l;else c=-r,f=Math.max(0,-(a*c+o)),d=-f*f+c*(c+2*h)+l;else c<=-m?(f=Math.max(0,-(-a*r+o)),c=f>0?-r:Math.min(Math.max(-r,-h),r),d=-f*f+c*(c+2*h)+l):c<=m?(f=0,c=Math.min(Math.max(-r,-h),r),d=c*(c+2*h)+l):(f=Math.max(0,-(a*r+o)),c=f>0?r:Math.min(Math.max(-r,-h),r),d=-f*f+c*(c+2*h)+l);else c=a>0?-r:r,f=Math.max(0,-(a*c+o)),d=-f*f+c*(c+2*h)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(pl).addScaledVector(Jr,c),d}intersectSphere(t,e){if(t.radius<0)return null;ii.subVectors(t.center,this.origin);let n=ii.dot(this.direction),s=ii.dot(ii)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,h=n+a;return h<0?null:o<0?this.at(h,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,h,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,c=this.origin;return l>=0?(n=(t.min.x-c.x)*l,s=(t.max.x-c.x)*l):(n=(t.max.x-c.x)*l,s=(t.min.x-c.x)*l),u>=0?(r=(t.min.y-c.y)*u,a=(t.max.y-c.y)*u):(r=(t.max.y-c.y)*u,a=(t.min.y-c.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-c.z)*f,h=(t.max.z-c.z)*f):(o=(t.max.z-c.z)*f,h=(t.min.z-c.z)*f),n>h||o>s)||((o>n||n!==n)&&(n=o),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,h=o.x,l=o.y,u=o.z,f=t.x-a.x,c=t.y-a.y,d=t.z-a.z,m=e.x-a.x,v=e.y-a.y,_=e.z-a.z,p=n.x-a.x,M=n.y-a.y,C=n.z-a.z,y=Math.abs(h),A=Math.abs(l),E=Math.abs(u),I,x,w,T,R,P,F,L,D,q,X,tt;if(y>=A&&y>=E?(w=h,P=f,D=m,tt=p,h>=0?(I=l,x=u,T=c,R=d,F=v,L=_,q=M,X=C):(I=u,x=l,T=d,R=c,F=_,L=v,q=C,X=M)):A>=E?(w=l,P=c,D=v,tt=M,l>=0?(I=u,x=h,T=d,R=f,F=_,L=m,q=C,X=p):(I=h,x=u,T=f,R=d,F=m,L=_,q=p,X=C)):(w=u,P=d,D=_,tt=C,u>=0?(I=h,x=l,T=f,R=c,F=m,L=v,q=p,X=M):(I=l,x=h,T=c,R=f,F=v,L=m,q=M,X=p)),w===0)return null;let Z=I/w,K=x/w,et=1/w,bt=T-Z*P,yt=R-K*P,Kt=F-Z*D,zt=L-K*D,Ot=q-Z*tt,V=X-K*tt,H=Ot*zt-V*Kt,lt=bt*V-yt*Ot,Lt=Kt*yt-zt*bt;if(s){if(H<0||lt<0||Lt<0)return null}else if((H<0||lt<0||Lt<0)&&(H>0||lt>0||Lt>0))return null;let ot=H+lt+Lt;if(ot===0)return null;let kt=et*(H*P+lt*D+Lt*tt);return(ot>0?kt<0:kt>0)?null:this.at(kt/ot,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ge=class extends qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Qc=new fe,Ii=new ba,Kr=new xi,th=new U,jr=new U,Qr=new U,ta=new U,ml=new U,ea=new U,eh=new U,na=new U,pe=class extends Te{constructor(t=new Le,e=new Ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ea.set(0,0,0);for(let h=0,l=r.length;h<l;h++){let u=o[h],f=r[h];u!==0&&(ml.fromBufferAttribute(f,t),a?ea.addScaledVector(ml,u):ea.addScaledVector(ml.sub(e),u))}e.add(ea)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(r),Ii.copy(t.ray).recast(t.near),!(Kr.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Kr,th)===null||Ii.origin.distanceToSquared(th)>(t.far-t.near)**2))&&(Qc.copy(r).invert(),Ii.copy(t.ray).applyMatrix4(Qc),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,h=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,c=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=c.length;m<v;m++){let _=c[m],p=a[_.materialIndex],M=Math.max(_.start,d.start),C=Math.min(o.count,Math.min(_.start+_.count,d.start+d.count));for(let y=M,A=C;y<A;y+=3){let E=o.getX(y),I=o.getX(y+1),x=o.getX(y+2);s=ia(this,p,t,n,l,u,f,E,I,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let _=m,p=v;_<p;_+=3){let M=o.getX(_),C=o.getX(_+1),y=o.getX(_+2);s=ia(this,a,t,n,l,u,f,M,C,y),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(a))for(let m=0,v=c.length;m<v;m++){let _=c[m],p=a[_.materialIndex],M=Math.max(_.start,d.start),C=Math.min(h.count,Math.min(_.start+_.count,d.start+d.count));for(let y=M,A=C;y<A;y+=3){let E=y,I=y+1,x=y+2;s=ia(this,p,t,n,l,u,f,E,I,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),v=Math.min(h.count,d.start+d.count);for(let _=m,p=v;_<p;_+=3){let M=_,C=_+1,y=_+2;s=ia(this,a,t,n,l,u,f,M,C,y),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}};function ld(i,t,e,n,s,r,a,o){let h;if(t.side===Xe?h=n.intersectTriangle(a,r,s,!0,o):h=n.intersectTriangle(s,r,a,t.side===Cn,o),h===null)return null;na.copy(o),na.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(na);return l<e.near||l>e.far?null:{distance:l,point:na.clone(),object:i}}function ia(i,t,e,n,s,r,a,o,h,l){i.getVertexPosition(o,jr),i.getVertexPosition(h,Qr),i.getVertexPosition(l,ta);let u=ld(i,t,e,n,jr,Qr,ta,eh);if(u){let f=new U;si.getBarycoord(eh,jr,Qr,ta,f),s&&(u.uv=si.getInterpolatedAttribute(s,o,h,l,f,new Rt)),r&&(u.uv1=si.getInterpolatedAttribute(r,o,h,l,f,new Rt)),a&&(u.normal=si.getInterpolatedAttribute(a,o,h,l,f,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let c={a:o,b:h,c:l,normal:new U,materialIndex:0};si.getNormal(jr,Qr,ta,c.normal),u.face=c,u.barycoord=f}return u}var rr=class extends nn{constructor(t=null,e=1,n=1,s,r,a,o,h,l=Ve,u=Ve,f,c){super(null,a,o,h,l,u,s,r,f,c),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ar=class extends an{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},hs=new fe,nh=new fe,sa=[],ih=new Xn,cd=new fe,qs=new pe,Ys=new xi,Ui=class extends pe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ar(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,cd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),ih.copy(t.boundingBox).applyMatrix4(hs),this.boundingBox.union(ih)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),Ys.copy(t.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(Ys)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(n),t.ray.intersectsSphere(Ys)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hs),nh.multiplyMatrices(n,hs),qs.matrixWorld=nh,qs.raycast(t,sa);for(let a=0,o=sa.length;a<o;a++){let h=sa[a];h.instanceId=r,h.object=this,e.push(h)}sa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ar(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new rr(new Float32Array(s*this.count),s,this.count,$a,yn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,h=s*t;return r[h]=o,r.set(n,h+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Li=new xi,hd=new Rt(.5,.5),ra=new U,Ms=class{constructor(t=new wn,e=new wn,n=new wn,s=new wn,r=new wn,a=new wn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],h=r[2],l=r[3],u=r[4],f=r[5],c=r[6],d=r[7],m=r[8],v=r[9],_=r[10],p=r[11],M=r[12],C=r[13],y=r[14],A=r[15];if(s[0].setComponents(l-a,d-u,p-m,A-M).normalize(),s[1].setComponents(l+a,d+u,p+m,A+M).normalize(),s[2].setComponents(l+o,d+f,p+v,A+C).normalize(),s[3].setComponents(l-o,d-f,p-v,A-C).normalize(),n)s[4].setComponents(h,c,_,y).normalize(),s[5].setComponents(l-h,d-c,p-_,A-y).normalize();else if(s[4].setComponents(l-h,d-c,p-_,A-y).normalize(),e===Rn)s[5].setComponents(l+h,d+c,p+_,A+y).normalize();else if(e===_s)s[5].setComponents(h,c,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){Li.center.set(0,0,0);let e=hd.distanceTo(t.center);return Li.radius=.7071067811865476+e,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ra.x=s.normal.x>0?t.max.x:t.min.x,ra.y=s.normal.y>0?t.max.y:t.min.y,ra.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ra)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var or=class extends nn{constructor(t=[],e=Ei,n,s,r,a,o,h,l,u){super(t,e,n,s,r,a,o,h,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},lr=class extends nn{constructor(t,e,n,s,r,a,o,h,l){super(t,e,n,s,r,a,o,h,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var yi=class extends nn{constructor(t,e,n=In,s,r,a,o=Ve,h=Ve,l,u=Vn,f=1){if(u!==Vn&&u!==Ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let c={width:t,height:e,depth:f};super(c,s,r,a,o,h,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ea=class extends yi{constructor(t,e=In,n=Ei,s,r,a=Ve,o=Ve,h,l=Vn){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,h,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},cr=class extends nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},dn=class i extends Le{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let h=[],l=[],u=[],f=[],c=0,d=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(u,3)),this.setAttribute("uv",new ne(f,2));function m(v,_,p,M,C,y,A,E,I,x,w){let T=y/I,R=A/x,P=y/2,F=A/2,L=E/2,D=I+1,q=x+1,X=0,tt=0,Z=new U;for(let K=0;K<q;K++){let et=K*R-F;for(let bt=0;bt<D;bt++){let yt=bt*T-P;Z[v]=yt*M,Z[_]=et*C,Z[p]=L,l.push(Z.x,Z.y,Z.z),Z[v]=0,Z[_]=0,Z[p]=E>0?1:-1,u.push(Z.x,Z.y,Z.z),f.push(bt/I),f.push(1-K/x),X+=1}}for(let K=0;K<x;K++)for(let et=0;et<I;et++){let bt=c+et+D*K,yt=c+et+D*(K+1),Kt=c+(et+1)+D*(K+1),zt=c+(et+1)+D*K;h.push(bt,yt,zt),h.push(yt,Kt,zt),tt+=6}o.addGroup(d,tt,w),d+=tt,c+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},hr=class i extends Le{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],h=[],l=[],u=e/2,f=Math.PI/2*t,c=e,d=2*f+c,m=n*2+r,v=s+1,_=new U,p=new U;for(let M=0;M<=m;M++){let C=0,y=0,A=0,E=0;if(M<=n){let w=M/n,T=w*Math.PI/2;y=-u-t*Math.cos(T),A=t*Math.sin(T),E=-t*Math.cos(T),C=w*f}else if(M<=n+r){let w=(M-n)/r;y=-u+w*e,A=t,E=0,C=f+w*c}else{let w=(M-n-r)/n,T=w*Math.PI/2;y=u+t*Math.sin(T),A=t*Math.cos(T),E=t*Math.sin(T),C=f+c+w*f}let I=Math.max(0,Math.min(1,C/d)),x=0;M===0?x=.5/s:M===m&&(x=-.5/s);for(let w=0;w<=s;w++){let T=w/s,R=T*Math.PI*2,P=Math.sin(R),F=Math.cos(R);p.x=-A*F,p.y=y,p.z=A*P,o.push(p.x,p.y,p.z),_.set(-A*F,E,A*P),_.normalize(),h.push(_.x,_.y,_.z),l.push(T+x,I)}if(M>0){let w=(M-1)*v;for(let T=0;T<s;T++){let R=w+T,P=w+T+1,F=M*v+T,L=M*v+T+1;a.push(R,P,F),a.push(P,L,F)}}}this.setIndex(a),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ur=class i extends Le{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],h=[],l=new U,u=new Rt;a.push(0,0,0),o.push(0,0,1),h.push(.5,.5);for(let f=0,c=3;f<=e;f++,c+=3){let d=n+f/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[c]/t+1)/2,u.y=(a[c+1]/t+1)/2,h.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(o,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ss=class i extends Le{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:h};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],c=[],d=[],m=0,v=[],_=n/2,p=0;M(),a===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(u),this.setAttribute("position",new ne(f,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(d,2));function M(){let y=new U,A=new U,E=0,I=(e-t)/n;for(let x=0;x<=r;x++){let w=[],T=x/r,R=T*(e-t)+t;for(let P=0;P<=s;P++){let F=P/s,L=F*h+o,D=Math.sin(L),q=Math.cos(L);A.x=R*D,A.y=-T*n+_,A.z=R*q,f.push(A.x,A.y,A.z),y.set(D,I,q).normalize(),c.push(y.x,y.y,y.z),d.push(F,1-T),w.push(m++)}v.push(w)}for(let x=0;x<s;x++)for(let w=0;w<r;w++){let T=v[w][x],R=v[w+1][x],P=v[w+1][x+1],F=v[w][x+1];(t>0||w!==0)&&(u.push(T,R,F),E+=3),(e>0||w!==r-1)&&(u.push(R,P,F),E+=3)}l.addGroup(p,E,0),p+=E}function C(y){let A=m,E=new Rt,I=new U,x=0,w=y===!0?t:e,T=y===!0?1:-1;for(let P=1;P<=s;P++)f.push(0,_*T,0),c.push(0,T,0),d.push(.5,.5),m++;let R=m;for(let P=0;P<=s;P++){let L=P/s*h+o,D=Math.cos(L),q=Math.sin(L);I.x=w*q,I.y=_*T,I.z=w*D,f.push(I.x,I.y,I.z),c.push(0,T,0),E.x=D*.5+.5,E.y=q*.5*T+.5,d.push(E.x,E.y),m++}for(let P=0;P<s;P++){let F=A+P,L=R+P;y===!0?u.push(L,L+1,F):u.push(L+1,L,F),x+=3}l.addGroup(p,x,y===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Bi=class i extends Ss{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ta=class i extends Le{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let C=new U,y=new U,A=new U;for(let E=0;E<e.length;E+=3)d(e[E+0],C),d(e[E+1],y),d(e[E+2],A),h(C,y,A,M)}function h(M,C,y,A){let E=A+1,I=[];for(let x=0;x<=E;x++){I[x]=[];let w=M.clone().lerp(y,x/E),T=C.clone().lerp(y,x/E),R=E-x;for(let P=0;P<=R;P++)P===0&&x===E?I[x][P]=w:I[x][P]=w.clone().lerp(T,P/R)}for(let x=0;x<E;x++)for(let w=0;w<2*(E-x)-1;w++){let T=Math.floor(w/2);w%2===0?(c(I[x][T+1]),c(I[x+1][T]),c(I[x][T])):(c(I[x][T+1]),c(I[x+1][T+1]),c(I[x+1][T]))}}function l(M){let C=new U;for(let y=0;y<r.length;y+=3)C.x=r[y+0],C.y=r[y+1],C.z=r[y+2],C.normalize().multiplyScalar(M),r[y+0]=C.x,r[y+1]=C.y,r[y+2]=C.z}function u(){let M=new U;for(let C=0;C<r.length;C+=3){M.x=r[C+0],M.y=r[C+1],M.z=r[C+2];let y=_(M)/2/Math.PI+.5,A=p(M)/Math.PI+.5;a.push(y,1-A)}m(),f()}function f(){for(let M=0;M<a.length;M+=6){let C=a[M+0],y=a[M+2],A=a[M+4],E=Math.max(C,y,A),I=Math.min(C,y,A);E>.9&&I<.1&&(C<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),A<.2&&(a[M+4]+=1))}}function c(M){r.push(M.x,M.y,M.z)}function d(M,C){let y=M*3;C.x=t[y+0],C.y=t[y+1],C.z=t[y+2]}function m(){let M=new U,C=new U,y=new U,A=new U,E=new Rt,I=new Rt,x=new Rt;for(let w=0,T=0;w<r.length;w+=9,T+=6){M.set(r[w+0],r[w+1],r[w+2]),C.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),E.set(a[T+0],a[T+1]),I.set(a[T+2],a[T+3]),x.set(a[T+4],a[T+5]),A.copy(M).add(C).add(y).divideScalar(3);let R=_(A);v(E,T+0,M,R),v(I,T+2,C,R),v(x,T+4,y,R)}}function v(M,C,y,A){A<0&&M.x===1&&(a[C]=M.x-1),y.x===0&&y.z===0&&(a[C]=A/2/Math.PI+.5)}function _(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Aa=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ut("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,h=r-1,l;for(;o<=h;)if(s=Math.floor(o+(h-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)h=s-1;else{h=s;break}if(s=h,n[s]===a)return s/(r-1);let u=n[s],c=n[s+1]-u,d=(a-u)/c;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),h=e||(a.isVector2?new Rt:new U);return h.copy(o).sub(a).normalize(),h}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,s=[],r=[],a=[],o=new U,h=new fe;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new U)}r[0]=new U,a[0]=new U;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),c=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),c<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Qt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(h.makeRotationAxis(o,m))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Qt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(h.makeRotationAxis(s[m],d*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function sh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,h=i*o;return(2*e-2*n+r+a)*h+(-3*e+3*n-2*r-a)*o+r*i+e}var dr=class extends Aa{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Rt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,h=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(sh(o,h.x,l.x,u.x,f.x),sh(o,h.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Rt().fromArray(s))}return this}};var fr=class i extends Ta{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},bs=class i extends Le{constructor(t=[new Rt(0,-.5),new Rt(.5,0),new Rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Qt(s,0,Math.PI*2);let r=[],a=[],o=[],h=[],l=[],u=1/e,f=new U,c=new Rt,d=new U,m=new U,v=new U,_=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:_=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-_,d.z=p*0,v.copy(d),d.normalize(),h.push(d.x,d.y,d.z);break;case t.length-1:h.push(v.x,v.y,v.z);break;default:_=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-_,d.z=p*0,m.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),h.push(d.x,d.y,d.z),v.copy(m)}for(let M=0;M<=e;M++){let C=n+M*u*s,y=Math.sin(C),A=Math.cos(C);for(let E=0;E<=t.length-1;E++){f.x=t[E].x*y,f.y=t[E].y,f.z=t[E].x*A,a.push(f.x,f.y,f.z),c.x=M/e,c.y=E/(t.length-1),o.push(c.x,c.y);let I=h[3*E+0]*y,x=h[3*E+1],w=h[3*E+0]*A;l.push(I,x,w)}}for(let M=0;M<e;M++)for(let C=0;C<t.length-1;C++){let y=C+M*t.length,A=y,E=y+t.length,I=y+t.length+1,x=y+1;r.push(A,E,x),r.push(I,x,E)}this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("uv",new ne(o,2)),this.setAttribute("normal",new ne(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var We=class i extends Le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),h=Math.floor(s),l=o+1,u=h+1,f=t/o,c=e/h,d=[],m=[],v=[],_=[];for(let p=0;p<u;p++){let M=p*c-a;for(let C=0;C<l;C++){let y=C*f-r;m.push(y,-M,0),v.push(0,0,1),_.push(C/o),_.push(1-p/h)}}for(let p=0;p<h;p++)for(let M=0;M<o;M++){let C=M+l*p,y=M+l*(p+1),A=M+1+l*(p+1),E=M+1+l*p;d.push(C,y,E),d.push(y,A,E)}this.setIndex(d),this.setAttribute("position",new ne(m,3)),this.setAttribute("normal",new ne(v,3)),this.setAttribute("uv",new ne(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var sn=class i extends Le{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let h=Math.min(a+o,Math.PI),l=0,u=[],f=new U,c=new U,d=[],m=[],v=[],_=[];for(let p=0;p<=n;p++){let M=[],C=p/n,y=a+C*o,A=t*Math.cos(y),E=Math.sqrt(t*t-A*A),I=0;p===0&&a===0?I=.5/e:p===n&&h===Math.PI&&(I=-.5/e);for(let x=0;x<=e;x++){let w=x/e,T=s+w*r;f.x=-E*Math.cos(T),f.y=A,f.z=E*Math.sin(T),m.push(f.x,f.y,f.z),c.copy(f).normalize(),v.push(c.x,c.y,c.z),_.push(w+I,1-C),M.push(l++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let C=u[p][M+1],y=u[p][M],A=u[p+1][M],E=u[p+1][M+1];(p!==0||a>0)&&d.push(C,y,E),(p!==n-1||h<Math.PI)&&d.push(y,A,E)}this.setIndex(d),this.setAttribute("position",new ne(m,3)),this.setAttribute("normal",new ne(v,3)),this.setAttribute("uv",new ne(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var fn=class i extends Le{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let h=[],l=[],u=[],f=[],c=new U,d=new U,m=new U;for(let v=0;v<=n;v++){let _=a+v/n*o;for(let p=0;p<=s;p++){let M=p/s*r;d.x=(t+e*Math.cos(_))*Math.cos(M),d.y=(t+e*Math.cos(_))*Math.sin(M),d.z=e*Math.sin(_),l.push(d.x,d.y,d.z),c.x=t*Math.cos(M),c.y=t*Math.sin(M),m.subVectors(d,c).normalize(),u.push(m.x,m.y,m.z),f.push(p/s),f.push(v/n)}}for(let v=1;v<=n;v++)for(let _=1;_<=s;_++){let p=(s+1)*v+_-1,M=(s+1)*(v-1)+_-1,C=(s+1)*(v-1)+_,y=(s+1)*v+_;h.push(p,M,y),h.push(M,C,y)}this.setIndex(h),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(u,3)),this.setAttribute("uv",new ne(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Gi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(rh(s))s.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(rh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ke(i){let t={};for(let e=0;e<i.length;e++){let n=Gi(i[e]);for(let s in n)t[s]=n[s]}return t}function rh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ud(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Yl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var $h={clone:Gi,merge:Ke},dd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dd,this.fragmentShader=fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gi(t.uniforms),this.uniformsGroups=ud(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Gt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Rt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new be().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Vt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new fe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},wa=class extends pn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ne=class extends qn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rr,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var pr=class extends qn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rr,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Ga,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ra=class extends qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ca=class extends qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function us(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function gl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Mi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Pa=class extends Mi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vl,endingEnd:vl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],h=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case yl:r=t,o=2*e-n;break;case Ml:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(h===void 0)switch(this.getSettings_().endingEnd){case yl:a=t,h=2*n-e;break;case Ml:a=1,h=n+s[1]-s[0];break;default:a=t-1,h=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(h-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=t*o,l=h-o,u=this._offsetPrev,f=this._offsetNext,c=this._weightPrev,d=this._weightNext,m=(n-e)/(s-e),v=m*m,_=v*m,p=-c*_+2*c*v-c*m,M=(1+c)*_+(-1.5-2*c)*v+(-.5+c)*m+1,C=(-1-d)*_+(1.5+d)*v+.5*m,y=d*_-d*v;for(let A=0;A!==o;++A)r[A]=p*a[u+A]+M*a[l+A]+C*a[h+A]+y*a[f+A];return r}},Ia=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=t*o,l=h-o,u=(n-e)/(s-e),f=1-u;for(let c=0;c!==o;++c)r[c]=a[l+c]*f+a[h+c]*u;return r}},La=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Fa=class extends Mi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=t*o,l=h-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let m=(n-e)/(s-e),v=1-m;for(let _=0;_!==o;++_)r[_]=a[l+_]*v+a[h+_]*m;return r}let c=o*2,d=t-1;for(let m=0;m!==o;++m){let v=a[l+m],_=a[h+m],p=d*c+m*2,M=f[p],C=f[p+1],y=t*c+m*2,A=u[y],E=u[y+1],I=md(n,e,M,A,s);r[m]=Kh(I,v,C,E,_)}return r}};function Kh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function pd(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function md(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Kh(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let h=pd(r,t,e,n,s);if(Math.abs(h)<1e-10)break;r=Math.max(0,Math.min(1,r-o/h))}return r}var mn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=us(e,this.TimeBufferType),this.values=us(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:us(t.times,Array),values:us(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),gl(t.settings)&&(n.settings={inTangents:us(t.settings.inTangents,Array),outTangents:us(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new La(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ia(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Pa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Fa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Zs:e=this.InterpolantFactoryMethodDiscrete;break;case xa:e=this.InterpolantFactoryMethodLinear;break;case la:e=this.InterpolantFactoryMethodSmooth;break;case xl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ut("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zs;case this.InterpolantFactoryMethodLinear:return xa;case this.InterpolantFactoryMethodSmooth:return la;case this.InterpolantFactoryMethodBezier:return xl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;gl(this.settings)&&(ah(this.settings.inTangents,t),ah(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Bt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Bt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let h=n[o];if(typeof h=="number"&&isNaN(h)){Bt("KeyframeTrack: Time is not a valid number.",this,o,h),t=!1;break}if(a!==null&&a>h){Bt("KeyframeTrack: Out of order keys.",this,o,h,a),t=!1;break}a=h}if(s!==void 0&&Wu(s))for(let o=0,h=s.length;o!==h;++o){let l=s[o];if(isNaN(l)){Bt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===la,r=t.length-1,a=1;for(let o=1;o<r;++o){let h=!1,l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(s)h=!0;else{let f=o*n,c=f-n,d=f+n;for(let m=0;m!==n;++m){let v=e[f+m];if(v!==e[c+m]||v!==e[d+m]){h=!0;break}}}if(h){if(o!==a){t[a]=t[o];let f=o*n,c=a*n;for(let d=0;d!==n;++d)e[c+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,h=a*n,l=0;l!==n;++l)e[h+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,gl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ah(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}mn.prototype.ValueTypeName="";mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=xa;var Si=class extends mn{constructor(t,e,n){super(t,e,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=Zs;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var Da=class extends mn{constructor(t,e,n,s){super(t,e,n,s)}};Da.prototype.ValueTypeName="color";var Na=class extends mn{constructor(t,e,n,s){super(t,e,n,s)}};Na.prototype.ValueTypeName="number";var Ua=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=(n-e)/(s-e),l=t*o;for(let u=l+o;l!==u;l+=4)Gn.slerpFlat(r,0,a,l-o,a,l,h);return r}},mr=class extends mn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ua(this.times,this.values,this.getValueSize(),t)}};mr.prototype.ValueTypeName="quaternion";mr.prototype.InterpolantFactoryMethodSmooth=void 0;var bi=class extends mn{constructor(t,e,n){super(t,e,n)}};bi.prototype.ValueTypeName="string";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=Zs;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends mn{constructor(t,e,n,s){super(t,e,n,s)}};Ba.prototype.ValueTypeName="vector";var Oa=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,h,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),h?h(u):u},this.setURLModifier=function(u){return h=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,c=l.length;f<c;f+=2){let d=l[f],m=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},jh=new Oa,za=class{constructor(t){this.manager=t!==void 0?t:jh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};za.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oi=class extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},gr=class extends Oi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},_l=new fe,oh=new U,lh=new U,Es=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ms,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;oh.setFromMatrixPosition(t.matrixWorld),e.position.copy(oh),lh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){_l.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(_l,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,h=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===_s||t.reversedDepth?e.set(.5*a,0,0,.5*a+h,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+h,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(_l)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},aa=new U,oa=new Gn,On=new U,_r=class extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(aa,oa,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,On.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(aa,oa,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gi=new U,ch=new Rt,hh=new Rt,De=class extends _r{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,ch,hh),e.subVectors(hh,ch)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let h=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/h,e-=a.offsetY*n/l,s*=a.width/h,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Sl=class extends Es{constructor(){super(new De(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Qs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},xr=class extends Oi{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Sl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},bl=class extends Es{constructor(){super(new De(90,1,.5,500)),this.isPointLightShadow=!0}},Yn=class extends Oi{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new bl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ts=class extends _r{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,h=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,h=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},El=class extends Es{constructor(){super(new Ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},As=class extends Oi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new El}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ds=-90,fs=1,ka=class extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new De(ds,fs,t,e);s.layers=this.layers,this.add(s);let r=new De(ds,fs,t,e);r.layers=this.layers,this.add(r);let a=new De(ds,fs,t,e);a.layers=this.layers,this.add(a);let o=new De(ds,fs,t,e);o.layers=this.layers,this.add(o);let h=new De(ds,fs,t,e);h.layers=this.layers,this.add(h);let l=new De(ds,fs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,h]=e;for(let l of e)this.remove(l);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===_s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,h,l,u]=this.children,f=t.getRenderTarget(),c=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(n,4,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,c,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Va=class extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Zl="\\[\\]\\.:\\/",gd=new RegExp("["+Zl+"]","g"),Jl="[^"+Zl+"]",_d="[^"+Zl.replace("\\.","")+"]",xd=/((?:WC+[\/:])*)/.source.replace("WC",Jl),vd=/(WCOD+)?/.source.replace("WCOD",_d),yd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jl),Md=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jl),Sd=new RegExp("^"+xd+vd+yd+Md+"$"),bd=["material","materials","bones","map"],Tl=class{constructor(t,e,n){let s=n||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(gd,"")}static parseTrackName(t){let e=Sd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);bd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let h=n(o.children);if(h)return h}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ut("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Bt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(h=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=Tl;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Cg=new Float32Array(1);var ec=class ec{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};ec.prototype.isMatrix2=!0;var Al=ec;function $l(i,t,e,n){let s=Ed(n);switch(e){case Gl:return i*t;case $a:return i*t/s.components*s.byteLength;case Ka:return i*t/s.components*s.byteLength;case wi:return i*t*2/s.components*s.byteLength;case ja:return i*t*2/s.components*s.byteLength;case Wl:return i*t*3/s.components*s.byteLength;case Mn:return i*t*4/s.components*s.byteLength;case Qa:return i*t*4/s.components*s.byteLength;case Sr:case br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Er:case Tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case eo:case io:return Math.max(i,16)*Math.max(t,8)/4;case to:case no:return Math.max(i,8)*Math.max(t,8)/2;case so:case ro:case oo:case lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ao:case Ar:case co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case fo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case po:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case mo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case go:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case _o:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case xo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case vo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case yo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case So:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case bo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Eo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case To:case Ao:case wo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ro:case Co:return Math.ceil(i/4)*Math.ceil(t/4)*8;case wr:case Po:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ed(i){switch(i){case cn:case zl:return{byteLength:1,components:1};case Rs:case kl:case Ln:return{byteLength:2,components:1};case Za:case Ja:return{byteLength:2,components:4};case In:case Ya:case yn:return{byteLength:4,components:1};case Vl:case Hl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function yu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ad(i){let t=new WeakMap;function e(o,h){let l=o.array,u=o.usage,f=l.byteLength,c=i.createBuffer();i.bindBuffer(h,c),i.bufferData(h,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:c,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,h,l){let u=h.array,f=h.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,u);else{f.sort((d,m)=>d.start-m.start);let c=0;for(let d=1;d<f.length;d++){let m=f[c],v=f[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++c,f[c]=v)}f.length=c+1;for(let d=0,m=f.length;d<m;d++){let v=f[d];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let h=t.get(o);h&&(i.deleteBuffer(h.buffer),t.delete(o))}function a(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,h));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,h),l.version=o.version}}return{get:s,remove:r,update:a}}var wd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Id=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ld=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ud=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Od=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Yd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$d=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ef=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sf="gl_FragColor = linearToOutputTexel( gl_FragColor );",rf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,af=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,of=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,df=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ff=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_f=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,yf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Mf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ef=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Af=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,If=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Df=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Of=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$f=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Kf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,np=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ip=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,op=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_p=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ip=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Np=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Up=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Yp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$p=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,i0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:wd,alphahash_pars_fragment:Rd,alphamap_fragment:Cd,alphamap_pars_fragment:Pd,alphatest_fragment:Id,alphatest_pars_fragment:Ld,aomap_fragment:Fd,aomap_pars_fragment:Dd,batching_pars_vertex:Nd,batching_vertex:Ud,begin_vertex:Bd,beginnormal_vertex:Od,bsdfs:zd,iridescence_fragment:kd,bumpmap_pars_fragment:Vd,clipping_planes_fragment:Hd,clipping_planes_pars_fragment:Gd,clipping_planes_pars_vertex:Wd,clipping_planes_vertex:Xd,color_fragment:qd,color_pars_fragment:Yd,color_pars_vertex:Zd,color_vertex:Jd,common:$d,cube_uv_reflection_fragment:Kd,defaultnormal_vertex:jd,displacementmap_pars_vertex:Qd,displacementmap_vertex:tf,emissivemap_fragment:ef,emissivemap_pars_fragment:nf,colorspace_fragment:sf,colorspace_pars_fragment:rf,envmap_fragment:af,envmap_common_pars_fragment:of,envmap_pars_fragment:lf,envmap_pars_vertex:cf,envmap_physical_pars_fragment:yf,envmap_vertex:hf,fog_vertex:uf,fog_pars_vertex:df,fog_fragment:ff,fog_pars_fragment:pf,gradientmap_pars_fragment:mf,lightmap_pars_fragment:gf,lights_lambert_fragment:_f,lights_lambert_pars_fragment:xf,lights_pars_begin:vf,lights_toon_fragment:Mf,lights_toon_pars_fragment:Sf,lights_phong_fragment:bf,lights_phong_pars_fragment:Ef,lights_physical_fragment:Tf,lights_physical_pars_fragment:Af,lights_fragment_begin:wf,lights_fragment_maps:Rf,lights_fragment_end:Cf,lightprobes_pars_fragment:Pf,logdepthbuf_fragment:If,logdepthbuf_pars_fragment:Lf,logdepthbuf_pars_vertex:Ff,logdepthbuf_vertex:Df,map_fragment:Nf,map_pars_fragment:Uf,map_particle_fragment:Bf,map_particle_pars_fragment:Of,metalnessmap_fragment:zf,metalnessmap_pars_fragment:kf,morphinstance_vertex:Vf,morphcolor_vertex:Hf,morphnormal_vertex:Gf,morphtarget_pars_vertex:Wf,morphtarget_vertex:Xf,normal_fragment_begin:qf,normal_fragment_maps:Yf,normal_pars_fragment:Zf,normal_pars_vertex:Jf,normal_vertex:$f,normalmap_pars_fragment:Kf,clearcoat_normal_fragment_begin:jf,clearcoat_normal_fragment_maps:Qf,clearcoat_pars_fragment:tp,iridescence_pars_fragment:ep,opaque_fragment:np,packing:ip,premultiplied_alpha_fragment:sp,project_vertex:rp,dithering_fragment:ap,dithering_pars_fragment:op,roughnessmap_fragment:lp,roughnessmap_pars_fragment:cp,shadowmap_pars_fragment:hp,shadowmap_pars_vertex:up,shadowmap_vertex:dp,shadowmask_pars_fragment:fp,skinbase_vertex:pp,skinning_pars_vertex:mp,skinning_vertex:gp,skinnormal_vertex:_p,specularmap_fragment:xp,specularmap_pars_fragment:vp,tonemapping_fragment:yp,tonemapping_pars_fragment:Mp,transmission_fragment:Sp,transmission_pars_fragment:bp,uv_pars_fragment:Ep,uv_pars_vertex:Tp,uv_vertex:Ap,worldpos_vertex:wp,background_vert:Rp,background_frag:Cp,backgroundCube_vert:Pp,backgroundCube_frag:Ip,cube_vert:Lp,cube_frag:Fp,depth_vert:Dp,depth_frag:Np,distance_vert:Up,distance_frag:Bp,equirect_vert:Op,equirect_frag:zp,linedashed_vert:kp,linedashed_frag:Vp,meshbasic_vert:Hp,meshbasic_frag:Gp,meshlambert_vert:Wp,meshlambert_frag:Xp,meshmatcap_vert:qp,meshmatcap_frag:Yp,meshnormal_vert:Zp,meshnormal_frag:Jp,meshphong_vert:$p,meshphong_frag:Kp,meshphysical_vert:jp,meshphysical_frag:Qp,meshtoon_vert:t0,meshtoon_frag:e0,points_vert:n0,points_frag:i0,shadow_vert:s0,shadow_frag:r0,sprite_vert:a0,sprite_frag:o0},mt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},$n={basic:{uniforms:Ke([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Ke([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Ke([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Ke([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Ke([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Ke([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Ke([mt.points,mt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Ke([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Ke([mt.common,mt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Ke([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Ke([mt.sprite,mt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:Ke([mt.common,mt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:Ke([mt.lights,mt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};$n.physical={uniforms:Ke([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var Fo={r:0,b:0,g:0},l0=new fe,Mu=new Vt;Mu.set(-1,0,0,0,1,0,0,0,1);function c0(i,t,e,n,s,r){let a=new Gt(0),o=s===!0?0:1,h,l,u=null,f=0,c=null;function d(M){let C=M.isScene===!0?M.background:null;if(C&&C.isTexture){let y=M.backgroundBlurriness>0;C=t.get(C,y)}return C}function m(M){let C=!1,y=d(M);y===null?_(a,o):y&&y.isColor&&(_(y,1),C=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,C){let y=d(C);y&&(y.isCubeTexture||y.mapping===yr)?(l===void 0&&(l=new pe(new dn(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:Gi($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,E,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(l0.makeRotationFromEuler(C.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Mu),l.material.toneMapped=ee.getTransfer(y.colorSpace)!==le,(u!==y||f!==y.version||c!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,c=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new pe(new We(2,2),new pn({name:"BackgroundMaterial",uniforms:Gi($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=ee.getTransfer(y.colorSpace)!==le,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||c!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,c=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null))}function _(M,C){M.getRGB(Fo,Yl(i)),e.buffers.color.setClear(Fo.r,Fo.g,Fo.b,C,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,C=1){a.set(M),o=C,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,_(a,o)},render:m,addToRenderList:v,dispose:p}}function h0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=c(null),r=s,a=!1;function o(R,P,F,L,D){let q=!1,X=f(R,L,F,P);r!==X&&(r=X,l(r.object)),q=d(R,L,F,D),q&&m(R,L,F,D),D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(R,P,F,L),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function h(){return i.createVertexArray()}function l(R){return i.bindVertexArray(R)}function u(R){return i.deleteVertexArray(R)}function f(R,P,F,L){let D=L.wireframe===!0,q=n[P.id];q===void 0&&(q={},n[P.id]=q);let X=R.isInstancedMesh===!0?R.id:0,tt=q[X];tt===void 0&&(tt={},q[X]=tt);let Z=tt[F.id];Z===void 0&&(Z={},tt[F.id]=Z);let K=Z[D];return K===void 0&&(K=c(h()),Z[D]=K),K}function c(R){let P=[],F=[],L=[];for(let D=0;D<e;D++)P[D]=0,F[D]=0,L[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:L,object:R,attributes:{},index:null}}function d(R,P,F,L){let D=r.attributes,q=P.attributes,X=0,tt=F.getAttributes();for(let Z in tt)if(tt[Z].location>=0){let et=D[Z],bt=q[Z];if(bt===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(bt=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(bt=R.instanceColor)),et===void 0||et.attribute!==bt||bt&&et.data!==bt.data)return!0;X++}return r.attributesNum!==X||r.index!==L}function m(R,P,F,L){let D={},q=P.attributes,X=0,tt=F.getAttributes();for(let Z in tt)if(tt[Z].location>=0){let et=q[Z];et===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(et=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(et=R.instanceColor));let bt={};bt.attribute=et,et&&et.data&&(bt.data=et.data),D[Z]=bt,X++}r.attributes=D,r.attributesNum=X,r.index=L}function v(){let R=r.newAttributes;for(let P=0,F=R.length;P<F;P++)R[P]=0}function _(R){p(R,0)}function p(R,P){let F=r.newAttributes,L=r.enabledAttributes,D=r.attributeDivisors;F[R]=1,L[R]===0&&(i.enableVertexAttribArray(R),L[R]=1),D[R]!==P&&(i.vertexAttribDivisor(R,P),D[R]=P)}function M(){let R=r.newAttributes,P=r.enabledAttributes;for(let F=0,L=P.length;F<L;F++)P[F]!==R[F]&&(i.disableVertexAttribArray(F),P[F]=0)}function C(R,P,F,L,D,q,X){X===!0?i.vertexAttribIPointer(R,P,F,D,q):i.vertexAttribPointer(R,P,F,L,D,q)}function y(R,P,F,L){v();let D=L.attributes,q=F.getAttributes(),X=P.defaultAttributeValues;for(let tt in q){let Z=q[tt];if(Z.location>=0){let K=D[tt];if(K===void 0&&(tt==="instanceMatrix"&&R.instanceMatrix&&(K=R.instanceMatrix),tt==="instanceColor"&&R.instanceColor&&(K=R.instanceColor)),K!==void 0){let et=K.normalized,bt=K.itemSize,yt=t.get(K);if(yt===void 0)continue;let Kt=yt.buffer,zt=yt.type,Ot=yt.bytesPerElement,V=zt===i.INT||zt===i.UNSIGNED_INT||K.gpuType===Ya;if(K.isInterleavedBufferAttribute){let H=K.data,lt=H.stride,Lt=K.offset;if(H.isInstancedInterleavedBuffer){for(let ot=0;ot<Z.locationSize;ot++)p(Z.location+ot,H.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ot=0;ot<Z.locationSize;ot++)_(Z.location+ot);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let ot=0;ot<Z.locationSize;ot++)C(Z.location+ot,bt/Z.locationSize,zt,et,lt*Ot,(Lt+bt/Z.locationSize*ot)*Ot,V)}else{if(K.isInstancedBufferAttribute){for(let H=0;H<Z.locationSize;H++)p(Z.location+H,K.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let H=0;H<Z.locationSize;H++)_(Z.location+H);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let H=0;H<Z.locationSize;H++)C(Z.location+H,bt/Z.locationSize,zt,et,bt*Ot,bt/Z.locationSize*H*Ot,V)}}else if(X!==void 0){let et=X[tt];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(Z.location,et);break;case 3:i.vertexAttrib3fv(Z.location,et);break;case 4:i.vertexAttrib4fv(Z.location,et);break;default:i.vertexAttrib1fv(Z.location,et)}}}}M()}function A(){w();for(let R in n){let P=n[R];for(let F in P){let L=P[F];for(let D in L){let q=L[D];for(let X in q)u(q[X].object),delete q[X];delete L[D]}}delete n[R]}}function E(R){if(n[R.id]===void 0)return;let P=n[R.id];for(let F in P){let L=P[F];for(let D in L){let q=L[D];for(let X in q)u(q[X].object),delete q[X];delete L[D]}}delete n[R.id]}function I(R){for(let P in n){let F=n[P];for(let L in F){let D=F[L];if(D[R.id]===void 0)continue;let q=D[R.id];for(let X in q)u(q[X].object),delete q[X];delete D[R.id]}}}function x(R){for(let P in n){let F=n[P],L=R.isInstancedMesh===!0?R.id:0,D=F[L];if(D!==void 0){for(let q in D){let X=D[q];for(let tt in X)u(X[tt].object),delete X[tt];delete D[q]}delete F[L],Object.keys(F).length===0&&delete n[P]}}}function w(){T(),a=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:_,disableUnusedAttributes:M}}function u0(i,t,e){let n;function s(h){n=h}function r(h,l){i.drawArrays(n,h,l),e.update(l,n,1)}function a(h,l,u){u!==0&&(i.drawArraysInstanced(n,h,l,u),e.update(l,n,u))}function o(h,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,l,0,u);let c=0;for(let d=0;d<u;d++)c+=l[d];e.update(c,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function d0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==Mn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let x=I===Ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==cn&&I!==yn&&!x&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function h(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=h(l);u!==l&&(Ut("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=e.logarithmicDepthBuffer===!0,c=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&c===!1&&Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:c,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:M,maxVaryings:C,maxFragmentUniforms:y,maxSamples:A,samples:E}}function f0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new wn,o=new Vt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(f,c){let d=f.length!==0||c||n!==0||s;return s=c,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,c){e=u(f,c,0)},this.setState=function(f,c,d){let m=f.clippingPlanes,v=f.clipIntersection,_=f.clipShadows,p=i.get(f);if(!s||m===null||m.length===0||r&&!_)r?u(null):l();else{let M=r?0:n,C=M*4,y=p.clippingState||null;h.value=y,y=u(m,c,C,d);for(let A=0;A!==C;++A)y[A]=e[A];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,c,d,m){let v=f!==null?f.length:0,_=null;if(v!==0){if(_=h.value,m!==!0||_===null){let p=d+v*4,M=c.matrixWorldInverse;o.getNormalMatrix(M),(_===null||_.length<p)&&(_=new Float32Array(p));for(let C=0,y=d;C!==v;++C,y+=4)a.copy(f[C]).applyMatrix4(M,o),a.normal.toArray(_,y),_[y+3]=a.constant}h.value=_,h.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,_}}var Is=4,p0=6,m0=20,g0=256,Cr=new Ts,Qh=new Gt,nc=null,ic=0,sc=0,rc=!1,_0=new U,Wi=new U,Fs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=_0}=r;nc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,s,h,o),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(nc,ic,sc),this._renderer.xr.enabled=rc,t.scissorTest=!1,Ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ei||t.mapping===Hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:He,minFilter:He,generateMipmaps:!1,type:Ln,format:Mn,colorSpace:Js,depthBuffer:!1},s=tu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=x0(r)),this._blurMaterial=y0(r,t,e),this._ggxMaterial=v0(r,t,e)}return s}_compileMaterial(t){let e=new pe(new Le,t);this._renderer.compile(e,Cr)}_sceneToCubeUV(t,e,n,s,r){let h=new De(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,c=f.autoClear,d=f.toneMapping;f.getClearColor(Qh),f.toneMapping=Pn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pe(new dn,new Ge({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,_=v.material,p=!1,M=t.background;M?M.isColor&&(_.color.copy(M),t.background=null,p=!0):(_.color.copy(Qh),p=!0);for(let C=0;C<6;C++){let y=C%3;y===0?(h.up.set(0,l[C],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+u[C],r.y,r.z)):y===1?(h.up.set(0,0,l[C]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+u[C],r.z)):(h.up.set(0,l[C],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+u[C]));let A=this._cubeSize;Ps(s,y*A,C>2?A:0,A,A),f.setRenderTarget(s),p&&f.render(v,h),f.render(t,h)}f.toneMapping=d,f.autoClear=c,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ei||t.mapping===Hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let h=this._cubeSize;Ps(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(a,Cr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let h=a.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),c=l*1.25,d=f*c,{_lodMax:m}=this,v=this._sizeLods[n],_=3*v*(n>m-Is?n-m+Is:0),p=4*(this._cubeSize-v);h.envMap.value=t.texture,h.roughness.value=d,h.mipInt.value=m-e,Ps(r,_,p,3*v,2*v),s.setRenderTarget(r),s.render(o,Cr),h.envMap.value=r.texture,h.roughness.value=0,h.mipInt.value=m-n,Ps(t,_,p,3*v,2*v),s.setRenderTarget(t),s.render(o,Cr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,h=this._lodMeshes[s];h.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-Is?s-this._lodMax+Is:0),c=4*(this._cubeSize-u);Ps(e,f,c,3*u,2*u),a.setRenderTarget(e),a.render(h,Cr)}};function x0(i){let t=[],e=[],n=i,s=i-Is+1+p0;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),h=-o,l=1+o,u=[h,h,l,h,l,l,h,h,l,l,h,l],f=6,c=6,d=3,m=new Float32Array(d*c*f),v=new Float32Array(d*c*f);for(let p=0;p<f;p++){let M=p%3*2/3-1,C=p>2?0:-1,y=[M,C,0,M+2/3,C,0,M+2/3,C+1,0,M,C,0,M+2/3,C+1,0,M,C+1,0];m.set(y,d*c*p);for(let A=0;A<c;A++){let E=u[A*2]*2-1,I=u[A*2+1]*2-1;p===0?Wi.set(1,I,E):p===1?Wi.set(-E,1,-I):p===2?Wi.set(-E,I,1):p===3?Wi.set(-1,I,-E):p===4?Wi.set(-E,-1,I):Wi.set(E,I,-1),Wi.toArray(v,(p*c+A)*d)}}let _=new Le;_.setAttribute("position",new an(m,d)),_.setAttribute("outputDirection",new an(v,d)),e.push(new pe(_,null)),n>Is&&n--}return{lodMeshes:e,sizeLods:t}}function tu(i,t,e){let n=new on(i,t,e);return n.texture.mapping=yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function v0(i,t,e){return new pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:g0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function y0(i,t,e){return new pn({name:"SphericalGaussianBlur",defines:{SAMPLES:m0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Bo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function eu(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function nu(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Bo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var No=class extends on{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new or(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new dn(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:Zn});r.uniforms.tEquirect.value=e;let a=new pe(s,r),o=e.minFilter;return e.minFilter===Ti&&(e.minFilter=He),new ka(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function M0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(c,d=!1){return c==null?null:d?a(c):r(c)}function r(c){if(c&&c.isTexture){let d=c.mapping;if(d===Wa||d===Xa)if(t.has(c)){let m=t.get(c).texture;return o(m,c.mapping)}else{let m=c.image;if(m&&m.height>0){let v=new No(m.height);return v.fromEquirectangularTexture(i,c),t.set(c,v),c.addEventListener("dispose",l),o(v.texture,c.mapping)}else return null}}return c}function a(c){if(c&&c.isTexture){let d=c.mapping,m=d===Wa||d===Xa,v=d===Ei||d===Hi;if(m||v){let _=e.get(c),p=_!==void 0?_.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==p)return n===null&&(n=new Fs(i)),_=m?n.fromEquirectangular(c,_):n.fromCubemap(c,_),_.texture.pmremVersion=c.pmremVersion,e.set(c,_),_.texture;if(_!==void 0)return _.texture;{let M=c.image;return m&&M&&M.height>0||v&&M&&h(M)?(n===null&&(n=new Fs(i)),_=m?n.fromEquirectangular(c):n.fromCubemap(c),_.texture.pmremVersion=c.pmremVersion,e.set(c,_),c.addEventListener("dispose",u),_.texture):null}}}return c}function o(c,d){return d===Wa?c.mapping=Ei:d===Xa&&(c.mapping=Hi),c}function h(c){let d=0,m=6;for(let v=0;v<m;v++)c[v]!==void 0&&d++;return d===m}function l(c){let d=c.target;d.removeEventListener("dispose",l);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(c){let d=c.target;d.removeEventListener("dispose",u);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function S0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Fi("WebGLRenderer: "+n+" extension not supported."),s}}}function b0(i,t,e,n){let s={},r=new WeakMap;function a(f){let c=f.target;c.index!==null&&t.remove(c.index);for(let m in c.attributes)t.remove(c.attributes[m]);c.removeEventListener("dispose",a),delete s[c.id];let d=r.get(c);d&&(t.remove(d),r.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,e.memory.geometries--}function o(f,c){return s[c.id]===!0||(c.addEventListener("dispose",a),s[c.id]=!0,e.memory.geometries++),c}function h(f){let c=f.attributes;for(let d in c)t.update(c[d],i.ARRAY_BUFFER)}function l(f){let c=[],d=f.index,m=f.attributes.position,v=0;if(m===void 0)return;if(d!==null){let M=d.array;v=d.version;for(let C=0,y=M.length;C<y;C+=3){let A=M[C+0],E=M[C+1],I=M[C+2];c.push(A,E,E,I,I,A)}}else{let M=m.array;v=m.version;for(let C=0,y=M.length/3-1;C<y;C+=3){let A=C+0,E=C+1,I=C+2;c.push(A,E,E,I,I,A)}}let _=new(m.count>=65535?ir:nr)(c,1);_.version=v;let p=r.get(f);p&&t.remove(p),r.set(f,_)}function u(f){let c=r.get(f);if(c){let d=f.index;d!==null&&c.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:h,getWireframeAttribute:u}}function E0(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function h(f,c){i.drawElements(n,c,r,f*a),e.update(c,n,1)}function l(f,c,d){d!==0&&(i.drawElementsInstanced(n,c,r,f*a,d),e.update(c,n,d))}function u(f,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,r,f,0,d);let v=0;for(let _=0;_<d;_++)v+=c[_];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=h,this.renderInstances=l,this.renderMultiDraw=u}function T0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function A0(i,t,e){let n=new WeakMap,s=new be;function r(a,o,h){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,c=n.get(o);if(c===void 0||c.count!==f){let w=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",w)};c!==void 0&&c.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],C=0;d===!0&&(C=1),m===!0&&(C=2),v===!0&&(C=3);let y=o.attributes.position.count*C,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*A*4*f),I=new tr(E,y,A,f);I.type=yn,I.needsUpdate=!0;let x=C*4;for(let T=0;T<f;T++){let R=_[T],P=p[T],F=M[T],L=y*A*4*T;for(let D=0;D<R.count;D++){let q=D*x;d===!0&&(s.fromBufferAttribute(R,D),E[L+q+0]=s.x,E[L+q+1]=s.y,E[L+q+2]=s.z,E[L+q+3]=0),m===!0&&(s.fromBufferAttribute(P,D),E[L+q+4]=s.x,E[L+q+5]=s.y,E[L+q+6]=s.z,E[L+q+7]=0),v===!0&&(s.fromBufferAttribute(F,D),E[L+q+8]=s.x,E[L+q+9]=s.y,E[L+q+10]=s.z,E[L+q+11]=F.itemSize===4?s.w:1)}}c={count:f,texture:I,size:new Rt(y,A)},n.set(o,c),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];let m=o.morphTargetsRelative?1:1-d;h.getUniforms().setValue(i,"morphTargetBaseInfluence",m),h.getUniforms().setValue(i,"morphTargetInfluences",l)}h.getUniforms().setValue(i,"morphTargetsTexture",c.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",c.size)}return{update:r}}function w0(i,t,e,n,s){let r=new WeakMap;function a(l){let u=s.render.frame,f=l.geometry,c=t.get(l,f);if(r.get(c)!==u&&(t.update(c),r.set(c,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",h)===!1&&l.addEventListener("dispose",h),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return c}function o(){r=new WeakMap}function h(l){let u=l.target;u.removeEventListener("dispose",h),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var R0={[Ll]:"LINEAR_TONE_MAPPING",[Fl]:"REINHARD_TONE_MAPPING",[Dl]:"CINEON_TONE_MAPPING",[vr]:"ACES_FILMIC_TONE_MAPPING",[Ul]:"AGX_TONE_MAPPING",[Bl]:"NEUTRAL_TONE_MAPPING",[Nl]:"CUSTOM_TONE_MAPPING"};function C0(i,t,e,n,s,r){let a=new on(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,h=null,l=new Le;l.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ne([0,2,0,0,2,0],2));let u=new wa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new pe(l,u),c=new Ts(-1,1,1,-1,0,1),d=null,m=null,v=!1,_,p=null,M=[],C=!1;this.setSize=function(y,A){a.setSize(y,A),o!==null&&o.setSize(y,A),h!==null&&h.setSize(y,A);for(let E=0;E<M.length;E++){let I=M[E];I.setSize&&I.setSize(y,A)}},this.setEffects=function(y){M=y,C=M.length>0&&M[0].isRenderPass===!0;let A=a.width,E=a.height;M.length>0&&o===null&&(o=new on(A,E,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),h=new on(A,E,{type:Ln,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<M.length;I++){let x=M[I];x.setSize&&x.setSize(A,E)}},this.begin=function(y,A){if(v||y.toneMapping===Pn&&M.length===0)return!1;if(p=A,A!==null){let E=A.width,I=A.height;(a.width!==E||a.height!==I)&&this.setSize(E,I)}return C===!1&&y.setRenderTarget(a),_=y.toneMapping,y.toneMapping=Pn,!0},this.hasRenderPass=function(){return C},this.end=function(y,A){y.toneMapping=_,v=!0;let E=a,I=o;for(let x=0;x<M.length;x++){let w=M[x];w.enabled!==!1&&(w.render(y,I,E,A),w.needsSwap!==!1&&(E=I,I=I===o?h:o))}if(d!==y.outputColorSpace||m!==y.toneMapping){d=y.outputColorSpace,m=y.toneMapping,u.defines={},ee.getTransfer(d)===le&&(u.defines.SRGB_TRANSFER="");let x=R0[m];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(p),y.render(f,c),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),h!==null&&h.dispose(),l.dispose(),u.dispose()}}var Su=new nn,lc=new yi(1,1),bu=new tr,Eu=new Ma,Tu=new or,iu=[],su=[],ru=new Float32Array(16),au=new Float32Array(9),ou=new Float32Array(4);function Ds(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=iu[s];if(r===void 0&&(r=new Float32Array(s),iu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Oo(i,t){let e=su[t];e===void 0&&(e=new Int32Array(t),su[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function P0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function I0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function L0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function F0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function D0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Ue(e,n))return;ou.set(n),i.uniformMatrix2fv(this.addr,!1,ou),Be(e,n)}}function N0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Ue(e,n))return;au.set(n),i.uniformMatrix3fv(this.addr,!1,au),Be(e,n)}}function U0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Ue(e,n))return;ru.set(n),i.uniformMatrix4fv(this.addr,!1,ru),Be(e,n)}}function B0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function O0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function k0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function V0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function H0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function G0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function W0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function X0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lc.compareFunction=e.isReversedDepthBuffer()?Lo:Io,r=lc):r=Su,e.setTexture2D(t||r,s)}function q0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Eu,s)}function Y0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Tu,s)}function Z0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||bu,s)}function J0(i){switch(i){case 5126:return P0;case 35664:return I0;case 35665:return L0;case 35666:return F0;case 35674:return D0;case 35675:return N0;case 35676:return U0;case 5124:case 35670:return B0;case 35667:case 35671:return O0;case 35668:case 35672:return z0;case 35669:case 35673:return k0;case 5125:return V0;case 36294:return H0;case 36295:return G0;case 36296:return W0;case 35678:case 36198:case 36298:case 36306:case 35682:return X0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return Z0}}function $0(i,t){i.uniform1fv(this.addr,t)}function K0(i,t){let e=Ds(t,this.size,2);i.uniform2fv(this.addr,e)}function j0(i,t){let e=Ds(t,this.size,3);i.uniform3fv(this.addr,e)}function Q0(i,t){let e=Ds(t,this.size,4);i.uniform4fv(this.addr,e)}function tm(i,t){let e=Ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function em(i,t){let e=Ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function nm(i,t){let e=Ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function im(i,t){i.uniform1iv(this.addr,t)}function sm(i,t){i.uniform2iv(this.addr,t)}function rm(i,t){i.uniform3iv(this.addr,t)}function am(i,t){i.uniform4iv(this.addr,t)}function om(i,t){i.uniform1uiv(this.addr,t)}function lm(i,t){i.uniform2uiv(this.addr,t)}function cm(i,t){i.uniform3uiv(this.addr,t)}function hm(i,t){i.uniform4uiv(this.addr,t)}function um(i,t,e){let n=this.cache,s=t.length,r=Oo(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=lc:a=Su;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function dm(i,t,e){let n=this.cache,s=t.length,r=Oo(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Eu,r[a])}function fm(i,t,e){let n=this.cache,s=t.length,r=Oo(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Tu,r[a])}function pm(i,t,e){let n=this.cache,s=t.length,r=Oo(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||bu,r[a])}function mm(i){switch(i){case 5126:return $0;case 35664:return K0;case 35665:return j0;case 35666:return Q0;case 35674:return tm;case 35675:return em;case 35676:return nm;case 5124:case 35670:return im;case 35667:case 35671:return sm;case 35668:case 35672:return rm;case 35669:case 35673:return am;case 5125:return om;case 36294:return lm;case 36295:return cm;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return um;case 35679:case 36299:case 36307:return dm;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return pm}}var cc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=J0(e.type)}},hc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mm(e.type)}},uc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ac=/(\w+)(\])?(\[|\.)?/g;function lu(i,t){i.seq.push(t),i.map[t.id]=t}function gm(i,t,e){let n=i.name,s=n.length;for(ac.lastIndex=0;;){let r=ac.exec(n),a=ac.lastIndex,o=r[1],h=r[2]==="]",l=r[3];if(h&&(o=o|0),l===void 0||l==="["&&a+2===s){lu(e,l===void 0?new cc(o,i,t):new hc(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new uc(o),lu(e,f)),e=f}}}var Ls=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),h=t.getUniformLocation(e,o.name);gm(o,h,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],h=n[o.id];h.needsUpdate!==!1&&o.setValue(t,h.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function cu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var _m=37297,xm=0;function vm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var hu=new Vt;function ym(i){ee._getMatrix(hu,ee.workingColorSpace,i);let t=`mat3( ${hu.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case $s:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function uu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+vm(i.getShaderSource(t),o)}else return r}function Mm(i,t){let e=ym(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Sm={[Ll]:"Linear",[Fl]:"Reinhard",[Dl]:"Cineon",[vr]:"ACESFilmic",[Ul]:"AgX",[Bl]:"Neutral",[Nl]:"Custom"};function bm(i,t){let e=Sm[t];return e===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Do=new U;function Em(){ee.getLuminanceCoefficients(Do);let i=Do.x.toFixed(4),t=Do.y.toFixed(4),e=Do.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function Am(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ir(i){return i!==""}function du(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function dc(i){return i.replace(Rm,Pm)}var Cm=new Map;function Pm(i,t){let e=Zt[t];if(e===void 0){let n=Cm.get(t);if(n!==void 0)e=Zt[n],Ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return dc(e)}var Im=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pu(i){return i.replace(Im,Lm)}function Lm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Fm={[zi]:"SHADOWMAP_TYPE_PCF",[ws]:"SHADOWMAP_TYPE_VSM"};function Dm(i){return Fm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Nm={[Ei]:"ENVMAP_TYPE_CUBE",[Hi]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE_UV"};function Um(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Nm[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Bm={[Hi]:"ENVMAP_MODE_REFRACTION"};function Om(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Bm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var zm={[Ga]:"ENVMAP_BLENDING_MULTIPLY",[Lh]:"ENVMAP_BLENDING_MIX",[Fh]:"ENVMAP_BLENDING_ADD"};function km(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":zm[i.combine]||"ENVMAP_BLENDING_NONE"}function Vm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Hm(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,h=Dm(e),l=Um(e),u=Om(e),f=km(e),c=Vm(e),d=Tm(e),m=Am(r),v=s.createProgram(),_,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ir).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ir).join(`
`),p.length>0&&(p+=`
`)):(_=[mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),p=[mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Pn?bm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Mm("linearToOutputTexel",e.outputColorSpace),Em(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ir).join(`
`)),a=dc(a),a=du(a,e),a=fu(a,e),o=dc(o),o=du(o,e),o=fu(o,e),a=pu(a),o=pu(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let C=M+_+a,y=M+p+o,A=cu(s,s.VERTEX_SHADER,C),E=cu(s,s.FRAGMENT_SHADER,y);s.attachShader(v,A),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function I(R){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(v)||"",F=s.getShaderInfoLog(A)||"",L=s.getShaderInfoLog(E)||"",D=P.trim(),q=F.trim(),X=L.trim(),tt=!0,Z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,A,E);else{let K=uu(s,A,"vertex"),et=uu(s,E,"fragment");Bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+K+`
`+et)}else D!==""?Ut("WebGLProgram: Program Info Log:",D):(q===""||X==="")&&(Z=!1);Z&&(R.diagnostics={runnable:tt,programLog:D,vertexShader:{log:q,prefix:_},fragmentShader:{log:X,prefix:p}})}s.deleteShader(A),s.deleteShader(E),x=new Ls(s,v),w=wm(s,v)}let x;this.getUniforms=function(){return x===void 0&&I(this),x};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(v,_m)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=E,this}var Gm=0,fc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new pc(t),e.set(t,n)),n}},pc=class{constructor(t){this.id=Gm++,this.code=t,this.usedTimes=0}};function Wm(i){return i===wi||i===Ar||i===wr}function Xm(i,t,e,n,s,r){let a=new er,o=new fc,h=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer,c=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return h.add(x),x===0?"uv":`uv${x}`}function v(x,w,T,R,P,F){let L=R.fog,D=P.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,tt=t.get(x.envMap||q,X),Z=tt&&tt.mapping===yr?tt.image.height:null,K=d[x.type];x.precision!==null&&(c=n.getMaxPrecision(x.precision),c!==x.precision&&Ut("WebGLProgram.getParameters:",x.precision,"not supported, using",c,"instead."));let et=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,bt=et!==void 0?et.length:0,yt=0;D.morphAttributes.position!==void 0&&(yt=1),D.morphAttributes.normal!==void 0&&(yt=2),D.morphAttributes.color!==void 0&&(yt=3);let Kt,zt,Ot,V;if(K){let ve=$n[K];Kt=ve.vertexShader,zt=ve.fragmentShader}else{Kt=x.vertexShader,zt=x.fragmentShader;let ve=o.getVertexShaderStage(x),ae=o.getFragmentShaderStage(x);o.update(x,ve,ae),Ot=ve.id,V=ae.id}let H=i.getRenderTarget(),lt=i.state.buffers.depth.getReversed(),Lt=P.isInstancedMesh===!0,ot=P.isBatchedMesh===!0,kt=!!x.map,Ee=!!x.matcap,$t=!!tt,Ht=!!x.aoMap,re=!!x.lightMap,jt=!!x.bumpMap&&x.wireframe===!1,me=!!x.normalMap,ce=!!x.displacementMap,we=!!x.emissiveMap,ge=!!x.metalnessMap,he=!!x.roughnessMap,O=x.anisotropy>0,ze=x.clearcoat>0,Y=x.dispersion>0,S=x.retroreflectivity>0,g=x.iridescence>0,N=x.sheen>0,k=x.transmission>0,j=O&&!!x.anisotropyMap,at=ze&&!!x.clearcoatMap,ct=ze&&!!x.clearcoatNormalMap,Q=ze&&!!x.clearcoatRoughnessMap,it=g&&!!x.iridescenceMap,ht=g&&!!x.iridescenceThicknessMap,Pt=N&&!!x.sheenColorMap,pt=N&&!!x.sheenRoughnessMap,ut=!!x.specularMap,It=!!x.specularColorMap,Dt=!!x.specularIntensityMap,Xt=k&&!!x.transmissionMap,z=k&&!!x.thicknessMap,dt=!!x.gradientMap,nt=!!x.alphaMap,ft=x.alphaTest>0,vt=!!x.alphaHash,st=!!x.extensions,Ft=Pn;x.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Ft=i.toneMapping);let At={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:Kt,fragmentShader:zt,defines:x.defines,customVertexShaderID:Ot,customFragmentShaderID:V,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:c,batching:ot,batchingColor:ot&&P._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&P.instanceColor!==null,instancingMorph:Lt&&P.morphTexture!==null,outputColorSpace:H===null?i.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:kt,matcap:Ee,envMap:$t,envMapMode:$t&&tt.mapping,envMapCubeUVHeight:Z,aoMap:Ht,lightMap:re,bumpMap:jt,normalMap:me,displacementMap:ce,emissiveMap:we,normalMapObjectSpace:me&&x.normalMapType===Uh,normalMapTangentSpace:me&&x.normalMapType===Rr,packedNormalMap:me&&x.normalMapType===Rr&&Wm(x.normalMap.format),metalnessMap:ge,roughnessMap:he,anisotropy:O,anisotropyMap:j,clearcoat:ze,clearcoatMap:at,clearcoatNormalMap:ct,clearcoatRoughnessMap:Q,dispersion:Y,retroreflection:S,iridescence:g,iridescenceMap:it,iridescenceThicknessMap:ht,sheen:N,sheenColorMap:Pt,sheenRoughnessMap:pt,specularMap:ut,specularColorMap:It,specularIntensityMap:Dt,transmission:k,transmissionMap:Xt,thicknessMap:z,gradientMap:dt,opaque:x.transparent===!1&&x.blending===ai&&x.alphaToCoverage===!1,alphaMap:nt,alphaTest:ft,alphaHash:vt,combine:x.combine,mapUv:kt&&m(x.map.channel),aoMapUv:Ht&&m(x.aoMap.channel),lightMapUv:re&&m(x.lightMap.channel),bumpMapUv:jt&&m(x.bumpMap.channel),normalMapUv:me&&m(x.normalMap.channel),displacementMapUv:ce&&m(x.displacementMap.channel),emissiveMapUv:we&&m(x.emissiveMap.channel),metalnessMapUv:ge&&m(x.metalnessMap.channel),roughnessMapUv:he&&m(x.roughnessMap.channel),anisotropyMapUv:j&&m(x.anisotropyMap.channel),clearcoatMapUv:at&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ct&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:pt&&m(x.sheenRoughnessMap.channel),specularMapUv:ut&&m(x.specularMap.channel),specularColorMapUv:It&&m(x.specularColorMap.channel),specularIntensityMapUv:Dt&&m(x.specularIntensityMap.channel),transmissionMapUv:Xt&&m(x.transmissionMap.channel),thicknessMapUv:z&&m(x.thicknessMap.channel),alphaMapUv:nt&&m(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(me||O),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!D.attributes.uv&&(kt||nt),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&me===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:lt,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:yt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ft,decodeVideoTexture:kt&&x.map.isVideoTexture===!0&&ee.getTransfer(x.map.colorSpace)===le,decodeVideoTextureEmissive:we&&x.emissiveMap.isVideoTexture===!0&&ee.getTransfer(x.emissiveMap.colorSpace)===le,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ln,flipSided:x.side===Xe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:st&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&x.extensions.multiDraw===!0||ot)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return At.vertexUv1s=h.has(1),At.vertexUv2s=h.has(2),At.vertexUv3s=h.has(3),h.clear(),At}function _(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let T in x.defines)w.push(T),w.push(x.defines[T]);return x.isRawShaderMaterial===!1&&(p(w,x),M(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function M(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function C(x){let w=d[x.type],T;if(w){let R=$n[w];T=$h.clone(R.uniforms)}else T=x.uniforms;return T}function y(x,w){let T=u.get(w);return T!==void 0?++T.usedTimes:(T=new Hm(i,w,x,s),l.push(T),u.set(w,T)),T}function A(x){if(--x.usedTimes===0){let w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function I(){o.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:C,acquireProgram:y,releaseProgram:A,releaseShaderCache:E,programs:l,dispose:I}}function qm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,h){i.get(a)[o]=h}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ym(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function gu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _u(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(c){let d=0;return c.isInstancedMesh&&(d+=2),c.isSkinnedMesh&&(d+=1),d}function o(c,d,m,v,_,p){let M=i[t];return M===void 0?(M={id:c.id,object:c,geometry:d,material:m,materialVariant:a(c),groupOrder:v,renderOrder:c.renderOrder,z:_,group:p},i[t]=M):(M.id=c.id,M.object=c,M.geometry=d,M.material=m,M.materialVariant=a(c),M.groupOrder=v,M.renderOrder=c.renderOrder,M.z=_,M.group=p),t++,M}function h(c,d,m,v,_,p,M){M.reversedDepth===!0&&(_=-_);let C=o(c,d,m,v,_,p);m.transmission>0?n.push(C):m.transparent===!0?s.push(C):e.push(C)}function l(c,d,m,v,_,p){let M=o(c,d,m,v,_,p);m.transmission>0?n.unshift(M):m.transparent===!0?s.unshift(M):e.unshift(M)}function u(c,d){e.length>1&&e.sort(c||Ym),n.length>1&&n.sort(d||gu),s.length>1&&s.sort(d||gu)}function f(){for(let c=t,d=i.length;c<d;c++){let m=i[c];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:h,unshift:l,finish:f,sort:u}}function Zm(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new _u,i.set(n,[a])):s>=r.length?(a=new _u,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Jm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new Gt};break;case"SpotLight":e={position:new U,direction:new U,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function $m(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Km=0;function jm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Qm(i){let t=new Jm,e=$m(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let s=new U,r=new fe,a=new fe;function o(l){let u=0,f=0,c=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,m=0,v=0,_=0,p=0,M=0,C=0,y=0,A=0,E=0,I=0,x=0,w=0,T=0;l.sort(jm);for(let P=0,F=l.length;P<F;P++){let L=l[P],D=L.color,q=L.intensity,X=L.distance,tt=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===wi?tt=L.shadow.map.texture:tt=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=D.r*q,f+=D.g*q,c+=D.b*q;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(L.sh.coefficients[Z],q);T++}else if(L.isSunLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let K=L.shadow,et=e.get(L);et.shadowIntensity=K.intensity,et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[m]=et,n.sunShadowMap[m]=tt;let bt=K.getViewportCount();for(let yt=0;yt<bt;yt++)n.sunShadowMatrix[v+yt]=K.getMatrix(yt),n.sunShadowCascade[v+yt]=K._cascadeData[yt];v+=bt,m++}n.sun[d]=Z,d++}else if(L.isDirectionalLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let K=L.shadow,et=e.get(L);et.shadowIntensity=K.intensity,et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize=K.mapSize,n.directionalShadow[_]=et,n.directionalShadowMap[_]=tt,n.directionalShadowMatrix[_]=L.shadow.matrix,A++}n.directional[_]=Z,_++}else if(L.isSpotLight){let Z=t.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(D).multiplyScalar(q),Z.distance=X,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,n.spot[M]=Z;let K=L.shadow;if(L.map&&(n.spotLightMap[x]=L.map,x++,K.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[M]=K.matrix,L.castShadow){let et=e.get(L);et.shadowIntensity=K.intensity,et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize=K.mapSize,n.spotShadow[M]=et,n.spotShadowMap[M]=tt,I++}M++}else if(L.isRectAreaLight){let Z=t.get(L);Z.color.copy(D).multiplyScalar(q),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),n.rectArea[C]=Z,C++}else if(L.isPointLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){let K=L.shadow,et=e.get(L);et.shadowIntensity=K.intensity,et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize=K.mapSize,et.shadowCameraNear=K.camera.near,et.shadowCameraFar=K.camera.far,n.pointShadow[p]=et,n.pointShadowMap[p]=tt,n.pointShadowMatrix[p]=L.shadow.matrix,E++}n.point[p]=Z,p++}else if(L.isHemisphereLight){let Z=t.get(L);Z.skyColor.copy(L.color).multiplyScalar(q),Z.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[y]=Z,y++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=c;let R=n.hash;(R.sunLength!==d||R.directionalLength!==_||R.pointLength!==p||R.spotLength!==M||R.rectAreaLength!==C||R.hemiLength!==y||R.numSunShadows!==m||R.numDirectionalShadows!==A||R.numPointShadows!==E||R.numSpotShadows!==I||R.numSpotMaps!==x||R.numLightProbes!==T)&&(n.sun.length=d,n.directional.length=_,n.spot.length=M,n.rectArea.length=C,n.point.length=p,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=I,n.spotShadowMap.length=I,n.spotLightMatrix.length=I+x-w,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,R.sunLength=d,R.directionalLength=_,R.pointLength=p,R.spotLength=M,R.rectAreaLength=C,R.hemiLength=y,R.numSunShadows=m,R.numDirectionalShadows=A,R.numPointShadows=E,R.numSpotShadows=I,R.numSpotMaps=x,R.numLightProbes=T,n.version=Km++)}function h(l,u){let f=0,c=0,d=0,m=0,v=0,_=0,p=u.matrixWorldInverse;for(let M=0,C=l.length;M<C;M++){let y=l[M];if(y.isSunLight){let A=n.sun[f];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),f++}else if(y.isDirectionalLight){let A=n.directional[c];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),c++}else if(y.isSpotLight){let A=n.spot[m];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),m++}else if(y.isRectAreaLight){let A=n.rectArea[v];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let A=n.point[d];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){let A=n.hemi[_];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),_++}}}return{setup:o,setupView:h,state:n}}function xu(i){let t=new Qm(i),e=[],n=[],s=[];function r(c){f.camera=c,e.length=0,n.length=0,s.length=0}function a(c){e.push(c)}function o(c){n.push(c)}function h(c){s.push(c)}function l(){t.setup(e)}function u(c){t.setupView(e,c)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:h}}function tg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new xu(i),t.set(s,[o])):r>=a.length?(o=new xu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ng=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ig=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],sg=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],vu=new fe,Pr=new U,oc=new U;function rg(i,t,e){let n=new Ms,s=new Rt,r=new Rt,a=new be,o=new Ra,h=new Ca,l={},u=e.maxTextureSize,f={[Cn]:Xe,[Xe]:Cn,[ln]:ln},c=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:eg,fragmentShader:ng}),d=c.clone();d.defines.HORIZONTAL_PASS=1;let m=new Le;m.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new pe(m,c),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zi;let p=this.type;this.render=function(E,I,x){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||E.length===0)return;this.type===fh&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zi);let w=i.getRenderTarget(),T=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Zn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let F=p!==this.type;F&&I.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(D=>D.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,D=E.length;L<D;L++){let q=E[L],X=q.shadow;if(X===void 0){Ut("WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let tt=X.getFrameExtents();s.multiply(tt),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/tt.x),s.x=r.x*tt.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/tt.y),s.y=r.y*tt.y,X.mapSize.y=r.y));let Z=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Z,X.map===null||F===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===ws){if(q.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new on(s.x,s.y,{format:wi,type:Ln,minFilter:He,magFilter:He,generateMipmaps:!1}),X.map.texture.name=q.name+".shadowMap",X.map.depthTexture=new yi(s.x,s.y,yn),X.map.depthTexture.name=q.name+".shadowMapDepth",X.map.depthTexture.format=Vn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ve,X.map.depthTexture.magFilter=Ve}else q.isPointLight?(X.map=new No(s.x),X.map.depthTexture=new Ea(s.x,In)):(X.map=new on(s.x,s.y),X.map.depthTexture=new yi(s.x,s.y,In)),X.map.depthTexture.name=q.name+".shadowMap",X.map.depthTexture.format=Vn,this.type===zi?(X.map.depthTexture.compareFunction=Z?Lo:Io,X.map.depthTexture.minFilter=He,X.map.depthTexture.magFilter=He):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ve,X.map.depthTexture.magFilter=Ve);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let K=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();q.isPointLight!==!0&&X.updateMatrices(q,x);for(let et=0;et<K;et++){let bt=X.getCamera(et);if(q.isPointLight){let yt=X.camera,Kt=X.matrix,zt=q.distance||yt.far;zt!==yt.far&&(yt.far=zt,yt.updateProjectionMatrix()),Pr.setFromMatrixPosition(q.matrixWorld),yt.position.copy(Pr),oc.copy(yt.position),oc.add(ig[et]),yt.up.copy(sg[et]),yt.lookAt(oc),yt.updateMatrixWorld(),Kt.makeTranslation(-Pr.x,-Pr.y,-Pr.z),vu.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),X._frustum.setFromProjectionMatrix(vu,yt.coordinateSystem,yt.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,et),i.clear();else{et===0&&(i.setRenderTarget(X.map),i.clear());let yt=X.getViewport(et);a.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),P.viewport(a)}n=X.getFrustum(et),y(I,x,bt,q,this.type)}X.isPointLightShadow!==!0&&this.type===ws&&M(X,x),X.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(w,T,R)};function M(E,I){let x=t.update(v);c.defines.VSM_SAMPLES!==E.blurSamples&&(c.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,c.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new on(s.x,s.y,{format:wi,type:Ln}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),c.uniforms.shadow_pass.value=E.map.depthTexture,c.uniforms.resolution.value.set(E.map.width,E.map.height),c.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(I,null,x,c,v,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(I,null,x,d,v,null)}function C(E,I,x,w){let T=null,R=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)T=R;else if(T=x.isPointLight===!0?h:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let P=T.uuid,F=I.uuid,L=l[P];L===void 0&&(L={},l[P]=L);let D=L[F];D===void 0&&(D=T.clone(),L[F]=D,I.addEventListener("dispose",A)),T=D}if(T.visible=I.visible,T.wireframe=I.wireframe,w===ws?T.side=I.shadowSide!==null?I.shadowSide:I.side:T.side=I.shadowSide!==null?I.shadowSide:f[I.side],T.alphaMap=I.alphaMap,T.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,T.map=I.map,T.clipShadows=I.clipShadows,T.clippingPlanes=I.clippingPlanes,T.clipIntersection=I.clipIntersection,T.displacementMap=I.displacementMap,T.displacementScale=I.displacementScale,T.displacementBias=I.displacementBias,T.wireframeLinewidth=I.wireframeLinewidth,T.linewidth=I.linewidth,x.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let P=i.properties.get(T);P.light=x}return T}function y(E,I,x,w,T){if(E.visible===!1)return;if(E.layers.test(I.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===ws)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let F=t.update(E),L=E.material;if(Array.isArray(L)){let D=F.groups;for(let q=0,X=D.length;q<X;q++){let tt=D[q],Z=L[tt.materialIndex];if(Z&&Z.visible){let K=C(E,Z,w,T);E.onBeforeShadow(i,E,I,x,F,K,tt),i.renderBufferDirect(x,null,F,K,E,tt),E.onAfterShadow(i,E,I,x,F,K,tt)}}}else if(L.visible){let D=C(E,L,w,T);E.onBeforeShadow(i,E,I,x,F,D,null),i.renderBufferDirect(x,null,F,D,E,null),E.onAfterShadow(i,E,I,x,F,D,null)}}let P=E.children;for(let F=0,L=P.length;F<L;F++)y(P[F],I,x,w,T)}function A(E){E.target.removeEventListener("dispose",A);for(let x in l){let w=l[x],T=E.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}function ag(i,t){function e(){let z=!1,dt=new be,nt=null,ft=new be(0,0,0,0);return{setMask:function(vt){nt!==vt&&!z&&(i.colorMask(vt,vt,vt,vt),nt=vt)},setLocked:function(vt){z=vt},setClear:function(vt,st,Ft,At,ve){ve===!0&&(vt*=At,st*=At,Ft*=At),dt.set(vt,st,Ft,At),ft.equals(dt)===!1&&(i.clearColor(vt,st,Ft,At),ft.copy(dt))},reset:function(){z=!1,nt=null,ft.set(-1,0,0,0)}}}function n(){let z=!1,dt=!1,nt=null,ft=null,vt=null;return{setReversed:function(st){if(dt!==st){let Ft=t.get("EXT_clip_control");st?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),dt=st;let At=vt;vt=null,this.setClear(At)}},getReversed:function(){return dt},setTest:function(st){st?H(i.DEPTH_TEST):lt(i.DEPTH_TEST)},setMask:function(st){nt!==st&&!z&&(i.depthMask(st),nt=st)},setFunc:function(st){if(dt&&(st=Yh[st]),ft!==st){switch(st){case ha:i.depthFunc(i.NEVER);break;case ua:i.depthFunc(i.ALWAYS);break;case da:i.depthFunc(i.LESS);break;case ms:i.depthFunc(i.LEQUAL);break;case fa:i.depthFunc(i.EQUAL);break;case pa:i.depthFunc(i.GEQUAL);break;case ma:i.depthFunc(i.GREATER);break;case ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=st}},setLocked:function(st){z=st},setClear:function(st){vt!==st&&(vt=st,dt&&(st=1-st),i.clearDepth(st))},reset:function(){z=!1,nt=null,ft=null,vt=null,dt=!1}}}function s(){let z=!1,dt=null,nt=null,ft=null,vt=null,st=null,Ft=null,At=null,ve=null;return{setTest:function(ae){z||(ae?H(i.STENCIL_TEST):lt(i.STENCIL_TEST))},setMask:function(ae){dt!==ae&&!z&&(i.stencilMask(ae),dt=ae)},setFunc:function(ae,bn,Un){(nt!==ae||ft!==bn||vt!==Un)&&(i.stencilFunc(ae,bn,Un),nt=ae,ft=bn,vt=Un)},setOp:function(ae,bn,Un){(st!==ae||Ft!==bn||At!==Un)&&(i.stencilOp(ae,bn,Un),st=ae,Ft=bn,At=Un)},setLocked:function(ae){z=ae},setClear:function(ae){ve!==ae&&(i.clearStencil(ae),ve=ae)},reset:function(){z=!1,dt=null,nt=null,ft=null,vt=null,st=null,Ft=null,At=null,ve=null}}}let r=new e,a=new n,o=new s,h=new WeakMap,l=new WeakMap,u={},f={},c={},d=new WeakMap,m=[],v=null,_=!1,p=null,M=null,C=null,y=null,A=null,E=null,I=null,x=new Gt(0,0,0),w=0,T=!1,R=null,P=null,F=null,L=null,D=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,tt=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),X=tt>=1):Z.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),X=tt>=2);let K=null,et={},bt=i.getParameter(i.SCISSOR_BOX),yt=i.getParameter(i.VIEWPORT),Kt=new be().fromArray(bt),zt=new be().fromArray(yt);function Ot(z,dt,nt,ft){let vt=new Uint8Array(4),st=i.createTexture();i.bindTexture(z,st),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<nt;Ft++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(dt+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return st}let V={};V[i.TEXTURE_2D]=Ot(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=Ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=Ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=Ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),H(i.DEPTH_TEST),a.setFunc(ms),jt(!1),me(wl),H(i.CULL_FACE),Ht(Zn);function H(z){u[z]!==!0&&(i.enable(z),u[z]=!0)}function lt(z){u[z]!==!1&&(i.disable(z),u[z]=!1)}function Lt(z,dt){return c[z]!==dt?(i.bindFramebuffer(z,dt),c[z]=dt,z===i.DRAW_FRAMEBUFFER&&(c[i.FRAMEBUFFER]=dt),z===i.FRAMEBUFFER&&(c[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function ot(z,dt){let nt=m,ft=!1;if(z){nt=d.get(dt),nt===void 0&&(nt=[],d.set(dt,nt));let vt=z.textures;if(nt.length!==vt.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let st=0,Ft=vt.length;st<Ft;st++)nt[st]=i.COLOR_ATTACHMENT0+st;nt.length=vt.length,ft=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,ft=!0);ft&&i.drawBuffers(nt)}function kt(z){return v!==z?(i.useProgram(z),v=z,!0):!1}let Ee={[Vi]:i.FUNC_ADD,[mh]:i.FUNC_SUBTRACT,[gh]:i.FUNC_REVERSE_SUBTRACT};Ee[_h]=i.MIN,Ee[xh]=i.MAX;let $t={[vh]:i.ZERO,[yh]:i.ONE,[Mh]:i.SRC_COLOR,[Pl]:i.SRC_ALPHA,[wh]:i.SRC_ALPHA_SATURATE,[Th]:i.DST_COLOR,[bh]:i.DST_ALPHA,[Sh]:i.ONE_MINUS_SRC_COLOR,[Il]:i.ONE_MINUS_SRC_ALPHA,[Ah]:i.ONE_MINUS_DST_COLOR,[Eh]:i.ONE_MINUS_DST_ALPHA,[Rh]:i.CONSTANT_COLOR,[Ch]:i.ONE_MINUS_CONSTANT_COLOR,[Ph]:i.CONSTANT_ALPHA,[Ih]:i.ONE_MINUS_CONSTANT_ALPHA};function Ht(z,dt,nt,ft,vt,st,Ft,At,ve,ae){if(z===Zn){_===!0&&(lt(i.BLEND),_=!1);return}if(_===!1&&(H(i.BLEND),_=!0),z!==ph){if(z!==p||ae!==T){if((M!==Vi||A!==Vi)&&(i.blendEquation(i.FUNC_ADD),M=Vi,A=Vi),ae)switch(z){case ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ki:i.blendFunc(i.ONE,i.ONE);break;case Rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Bt("WebGLState: Invalid blending: ",z);break}else switch(z){case ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Rl:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cl:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",z);break}C=null,y=null,E=null,I=null,x.set(0,0,0),w=0,p=z,T=ae}return}vt=vt||dt,st=st||nt,Ft=Ft||ft,(dt!==M||vt!==A)&&(i.blendEquationSeparate(Ee[dt],Ee[vt]),M=dt,A=vt),(nt!==C||ft!==y||st!==E||Ft!==I)&&(i.blendFuncSeparate($t[nt],$t[ft],$t[st],$t[Ft]),C=nt,y=ft,E=st,I=Ft),(At.equals(x)===!1||ve!==w)&&(i.blendColor(At.r,At.g,At.b,ve),x.copy(At),w=ve),p=z,T=!1}function re(z,dt){z.side===ln?lt(i.CULL_FACE):H(i.CULL_FACE);let nt=z.side===Xe;dt&&(nt=!nt),jt(nt),z.blending===ai&&z.transparent===!1?Ht(Zn):Ht(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let ft=z.stencilWrite;o.setTest(ft),ft&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),we(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?H(i.SAMPLE_ALPHA_TO_COVERAGE):lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function jt(z){R!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),R=z)}function me(z){z!==uh?(H(i.CULL_FACE),z!==P&&(z===wl?i.cullFace(i.BACK):z===dh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):lt(i.CULL_FACE),P=z}function ce(z){z!==F&&(X&&i.lineWidth(z),F=z)}function we(z,dt,nt){z?(H(i.POLYGON_OFFSET_FILL),(L!==dt||D!==nt)&&(L=dt,D=nt,a.getReversed()&&(dt=-dt),i.polygonOffset(dt,nt))):lt(i.POLYGON_OFFSET_FILL)}function ge(z){z?H(i.SCISSOR_TEST):lt(i.SCISSOR_TEST)}function he(z){z===void 0&&(z=i.TEXTURE0+q-1),K!==z&&(i.activeTexture(z),K=z)}function O(z,dt,nt){nt===void 0&&(K===null?nt=i.TEXTURE0+q-1:nt=K);let ft=et[nt];ft===void 0&&(ft={type:void 0,texture:void 0},et[nt]=ft),(ft.type!==z||ft.texture!==dt)&&(K!==nt&&(i.activeTexture(nt),K=nt),i.bindTexture(z,dt||V[z]),ft.type=z,ft.texture=dt)}function ze(){let z=et[K];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Y(){try{i.compressedTexImage2D(...arguments)}catch(z){Bt("WebGLState:",z)}}function S(){try{i.compressedTexImage3D(...arguments)}catch(z){Bt("WebGLState:",z)}}function g(){try{i.texSubImage2D(...arguments)}catch(z){Bt("WebGLState:",z)}}function N(){try{i.texSubImage3D(...arguments)}catch(z){Bt("WebGLState:",z)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(z){Bt("WebGLState:",z)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(z){Bt("WebGLState:",z)}}function at(){try{i.texStorage2D(...arguments)}catch(z){Bt("WebGLState:",z)}}function ct(){try{i.texStorage3D(...arguments)}catch(z){Bt("WebGLState:",z)}}function Q(){try{i.texImage2D(...arguments)}catch(z){Bt("WebGLState:",z)}}function it(){try{i.texImage3D(...arguments)}catch(z){Bt("WebGLState:",z)}}function ht(z){return f[z]!==void 0?f[z]:i.getParameter(z)}function Pt(z,dt){f[z]!==dt&&(i.pixelStorei(z,dt),f[z]=dt)}function pt(z){Kt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Kt.copy(z))}function ut(z){zt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),zt.copy(z))}function It(z,dt){let nt=l.get(dt);nt===void 0&&(nt=new WeakMap,l.set(dt,nt));let ft=nt.get(z);ft===void 0&&(ft=i.getUniformBlockIndex(dt,z.name),nt.set(z,ft))}function Dt(z,dt){let ft=l.get(dt).get(z);h.get(dt)!==ft&&(i.uniformBlockBinding(dt,ft,z.__bindingPointIndex),h.set(dt,ft))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},K=null,et={},c={},d=new WeakMap,m=[],v=null,_=!1,p=null,M=null,C=null,y=null,A=null,E=null,I=null,x=new Gt(0,0,0),w=0,T=!1,R=null,P=null,F=null,L=null,D=null,Kt.set(0,0,i.canvas.width,i.canvas.height),zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:H,disable:lt,bindFramebuffer:Lt,drawBuffers:ot,useProgram:kt,setBlending:Ht,setMaterial:re,setFlipSided:jt,setCullFace:me,setLineWidth:ce,setPolygonOffset:we,setScissorTest:ge,activeTexture:he,bindTexture:O,unbindTexture:ze,compressedTexImage2D:Y,compressedTexImage3D:S,texImage2D:Q,texImage3D:it,pixelStorei:Pt,getParameter:ht,updateUBOMapping:It,uniformBlockBinding:Dt,texStorage2D:at,texStorage3D:ct,texSubImage2D:g,texSubImage3D:N,compressedTexSubImage2D:k,compressedTexSubImage3D:j,scissor:pt,viewport:ut,reset:Xt}}function og(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Rt,u=new WeakMap,f=new Set,c,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(S,g){return m?new OffscreenCanvas(S,g):Ks("canvas")}function _(S,g,N){let k=1,j=Y(S);if((j.width>N||j.height>N)&&(k=N/Math.max(j.width,j.height)),k<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let at=Math.floor(k*j.width),ct=Math.floor(k*j.height);c===void 0&&(c=v(at,ct));let Q=g?v(at,ct):c;return Q.width=at,Q.height=ct,Q.getContext("2d").drawImage(S,0,0,at,ct),Ut("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+at+"x"+ct+")."),Q}else return"data"in S&&Ut("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),S;return S}function p(S){return S.generateMipmaps}function M(S){i.generateMipmap(S)}function C(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(S,g,N,k,j,at=!1){if(S!==null){if(i[S]!==void 0)return i[S];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ct;k&&(ct=t.get("EXT_texture_norm16"),ct||Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=g;if(g===i.RED&&(N===i.FLOAT&&(Q=i.R32F),N===i.HALF_FLOAT&&(Q=i.R16F),N===i.UNSIGNED_BYTE&&(Q=i.R8),N===i.UNSIGNED_SHORT&&ct&&(Q=ct.R16_EXT),N===i.SHORT&&ct&&(Q=ct.R16_SNORM_EXT)),g===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(Q=i.R8UI),N===i.UNSIGNED_SHORT&&(Q=i.R16UI),N===i.UNSIGNED_INT&&(Q=i.R32UI),N===i.BYTE&&(Q=i.R8I),N===i.SHORT&&(Q=i.R16I),N===i.INT&&(Q=i.R32I)),g===i.RG&&(N===i.FLOAT&&(Q=i.RG32F),N===i.HALF_FLOAT&&(Q=i.RG16F),N===i.UNSIGNED_BYTE&&(Q=i.RG8),N===i.UNSIGNED_SHORT&&ct&&(Q=ct.RG16_EXT),N===i.SHORT&&ct&&(Q=ct.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(Q=i.RG8UI),N===i.UNSIGNED_SHORT&&(Q=i.RG16UI),N===i.UNSIGNED_INT&&(Q=i.RG32UI),N===i.BYTE&&(Q=i.RG8I),N===i.SHORT&&(Q=i.RG16I),N===i.INT&&(Q=i.RG32I)),g===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),N===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),N===i.UNSIGNED_INT&&(Q=i.RGB32UI),N===i.BYTE&&(Q=i.RGB8I),N===i.SHORT&&(Q=i.RGB16I),N===i.INT&&(Q=i.RGB32I)),g===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),N===i.UNSIGNED_INT&&(Q=i.RGBA32UI),N===i.BYTE&&(Q=i.RGBA8I),N===i.SHORT&&(Q=i.RGBA16I),N===i.INT&&(Q=i.RGBA32I)),g===i.RGB&&(N===i.UNSIGNED_SHORT&&ct&&(Q=ct.RGB16_EXT),N===i.SHORT&&ct&&(Q=ct.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),g===i.RGBA){let it=at?$s:ee.getTransfer(j);N===i.FLOAT&&(Q=i.RGBA32F),N===i.HALF_FLOAT&&(Q=i.RGBA16F),N===i.UNSIGNED_BYTE&&(Q=it===le?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&ct&&(Q=ct.RGBA16_EXT),N===i.SHORT&&ct&&(Q=ct.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function A(S,g){let N;return S?g===null||g===In||g===Cs?N=i.DEPTH24_STENCIL8:g===yn?N=i.DEPTH32F_STENCIL8:g===Rs&&(N=i.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===In||g===Cs?N=i.DEPTH_COMPONENT24:g===yn?N=i.DEPTH_COMPONENT32F:g===Rs&&(N=i.DEPTH_COMPONENT16),N}function E(S,g){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==Ve&&S.minFilter!==He?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function I(S){let g=S.target;g.removeEventListener("dispose",I),w(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function x(S){let g=S.target;g.removeEventListener("dispose",x),R(g)}function w(S){let g=n.get(S);if(g.__webglInit===void 0)return;let N=S.source,k=d.get(N);if(k){let j=k[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&T(S),Object.keys(k).length===0&&d.delete(N)}n.remove(S)}function T(S){let g=n.get(S);i.deleteTexture(g.__webglTexture);let N=S.source,k=d.get(N);delete k[g.__cacheKey],a.memory.textures--}function R(S){let g=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let j=0;j<g.__webglFramebuffer[k].length;j++)i.deleteFramebuffer(g.__webglFramebuffer[k][j]);else i.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)i.deleteFramebuffer(g.__webglFramebuffer[k]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let N=S.textures;for(let k=0,j=N.length;k<j;k++){let at=n.get(N[k]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),a.memory.textures--),n.remove(N[k])}n.remove(S)}let P=0;function F(){P=0}function L(){return P}function D(S){P=S}function q(){let S=P;return S>=s.maxTextures&&Ut("WebGLTextures: Trying to use "+(S+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,S}function X(S){let g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function tt(S,g){let N=n.get(S);if(S.isVideoTexture&&O(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&N.__version!==S.version){let k=S.image;if(k===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{lt(N,S,g);return}}else S.isExternalTexture&&(N.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+g)}function Z(S,g){let N=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){lt(N,S,g);return}else S.isExternalTexture&&(N.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+g)}function K(S,g){let N=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){lt(N,S,g);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+g)}function et(S,g){let N=n.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&N.__version!==S.version){Lt(N,S,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+g)}let bt={[gs]:i.REPEAT,[kn]:i.CLAMP_TO_EDGE,[_a]:i.MIRRORED_REPEAT},yt={[Ve]:i.NEAREST,[Dh]:i.NEAREST_MIPMAP_NEAREST,[Mr]:i.NEAREST_MIPMAP_LINEAR,[He]:i.LINEAR,[qa]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},Kt={[Oh]:i.NEVER,[Gh]:i.ALWAYS,[zh]:i.LESS,[Io]:i.LEQUAL,[kh]:i.EQUAL,[Lo]:i.GEQUAL,[Vh]:i.GREATER,[Hh]:i.NOTEQUAL};function zt(S,g){if(g.type===yn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===He||g.magFilter===qa||g.magFilter===Mr||g.magFilter===Ti||g.minFilter===He||g.minFilter===qa||g.minFilter===Mr||g.minFilter===Ti)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,bt[g.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,bt[g.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,bt[g.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,yt[g.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,yt[g.minFilter]),g.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,Kt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ve||g.minFilter!==Mr&&g.minFilter!==Ti||g.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(S,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ot(S,g){let N=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",I));let k=g.source,j=d.get(k);j===void 0&&(j={},d.set(k,j));let at=X(g);if(at!==S.__cacheKey){j[at]===void 0&&(j[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),j[at].usedTimes++;let ct=j[S.__cacheKey];ct!==void 0&&(j[S.__cacheKey].usedTimes--,ct.usedTimes===0&&T(g)),S.__cacheKey=at,S.__webglTexture=j[at].texture}return N}function V(S,g,N){return Math.floor(Math.floor(S/N)/g)}function H(S,g,N,k){let at=S.updateRanges;if(at.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,N,k,g.data);else{at.sort((Pt,pt)=>Pt.start-pt.start);let ct=0;for(let Pt=1;Pt<at.length;Pt++){let pt=at[ct],ut=at[Pt],It=pt.start+pt.count,Dt=V(ut.start,g.width,4),Xt=V(pt.start,g.width,4);ut.start<=It+1&&Dt===Xt&&V(ut.start+ut.count-1,g.width,4)===Dt?pt.count=Math.max(pt.count,ut.start+ut.count-pt.start):(++ct,at[ct]=ut)}at.length=ct+1;let Q=e.getParameter(i.UNPACK_ROW_LENGTH),it=e.getParameter(i.UNPACK_SKIP_PIXELS),ht=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Pt=0,pt=at.length;Pt<pt;Pt++){let ut=at[Pt],It=Math.floor(ut.start/4),Dt=Math.ceil(ut.count/4),Xt=It%g.width,z=Math.floor(It/g.width),dt=Dt,nt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Xt),e.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,Xt,z,dt,nt,N,k,g.data)}S.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Q),e.pixelStorei(i.UNPACK_SKIP_PIXELS,it),e.pixelStorei(i.UNPACK_SKIP_ROWS,ht)}}function lt(S,g,N){let k=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=i.TEXTURE_3D);let j=Ot(S,g),at=g.source;e.bindTexture(k,S.__webglTexture,i.TEXTURE0+N);let ct=n.get(at);if(at.version!==ct.__version||j===!0){if(e.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let nt=ee.getPrimaries(ee.workingColorSpace),ft=g.colorSpace===oi?null:ee.getPrimaries(g.colorSpace),vt=g.colorSpace===oi||nt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let it=_(g.image,!1,s.maxTextureSize);it=ze(g,it);let ht=r.convert(g.format,g.colorSpace),Pt=r.convert(g.type),pt=y(g.internalFormat,ht,Pt,g.normalized,g.colorSpace,g.isVideoTexture);zt(k,g);let ut,It=g.mipmaps,Dt=g.isVideoTexture!==!0,Xt=ct.__version===void 0||j===!0,z=at.dataReady,dt=E(g,it);if(g.isDepthTexture)pt=A(g.format===Ai,g.type),Xt&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,pt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,pt,it.width,it.height,0,ht,Pt,null));else if(g.isDataTexture)if(It.length>0){Dt&&Xt&&e.texStorage2D(i.TEXTURE_2D,dt,pt,It[0].width,It[0].height);for(let nt=0,ft=It.length;nt<ft;nt++)ut=It[nt],Dt?z&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,ut.width,ut.height,ht,Pt,ut.data):e.texImage2D(i.TEXTURE_2D,nt,pt,ut.width,ut.height,0,ht,Pt,ut.data);g.generateMipmaps=!1}else Dt?(Xt&&e.texStorage2D(i.TEXTURE_2D,dt,pt,it.width,it.height),z&&H(g,it,ht,Pt)):e.texImage2D(i.TEXTURE_2D,0,pt,it.width,it.height,0,ht,Pt,it.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Dt&&Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,pt,It[0].width,It[0].height,it.depth);for(let nt=0,ft=It.length;nt<ft;nt++)if(ut=It[nt],g.format!==Mn)if(ht!==null)if(Dt){if(z)if(g.layerUpdates.size>0){let vt=$l(ut.width,ut.height,g.format,g.type);for(let st of g.layerUpdates){let Ft=ut.data.subarray(st*vt/ut.data.BYTES_PER_ELEMENT,(st+1)*vt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,st,ut.width,ut.height,1,ht,Ft)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,ut.width,ut.height,it.depth,ht,ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,pt,ut.width,ut.height,it.depth,0,ut.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,ut.width,ut.height,it.depth,ht,Pt,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,pt,ut.width,ut.height,it.depth,0,ht,Pt,ut.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Dt&&Xt&&e.texStorage2D(i.TEXTURE_2D,dt,pt,It[0].width,It[0].height);for(let nt=0,ft=It.length;nt<ft;nt++)ut=It[nt],g.format!==Mn?ht!==null?Dt?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,ut.width,ut.height,ht,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,pt,ut.width,ut.height,0,ut.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?z&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,ut.width,ut.height,ht,Pt,ut.data):e.texImage2D(i.TEXTURE_2D,nt,pt,ut.width,ut.height,0,ht,Pt,ut.data)}else if(g.isDataArrayTexture)if(Dt){if(Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,pt,it.width,it.height,it.depth),z)if(g.layerUpdates.size>0){let nt=$l(it.width,it.height,g.format,g.type);for(let ft of g.layerUpdates){let vt=it.data.subarray(ft*nt/it.data.BYTES_PER_ELEMENT,(ft+1)*nt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ft,it.width,it.height,1,ht,Pt,vt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ht,Pt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,pt,it.width,it.height,it.depth,0,ht,Pt,it.data);else if(g.isData3DTexture)Dt?(Xt&&e.texStorage3D(i.TEXTURE_3D,dt,pt,it.width,it.height,it.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ht,Pt,it.data)):e.texImage3D(i.TEXTURE_3D,0,pt,it.width,it.height,it.depth,0,ht,Pt,it.data);else if(g.isFramebufferTexture){if(Xt)if(Dt)e.texStorage2D(i.TEXTURE_2D,dt,pt,it.width,it.height);else{let nt=it.width,ft=it.height;for(let vt=0;vt<dt;vt++)e.texImage2D(i.TEXTURE_2D,vt,pt,nt,ft,0,ht,Pt,null),nt>>=1,ft>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let nt=i.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),it.parentNode!==nt){nt.appendChild(it),f.add(g),nt.onpaint=ft=>{let vt=ft.changedElements;for(let st of f)vt.includes(st.image)&&(st.needsUpdate=!0)},nt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,it);else{let vt=i.RGBA,st=i.RGBA,Ft=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,vt,st,Ft,it)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(It.length>0){if(Dt&&Xt){let nt=Y(It[0]);e.texStorage2D(i.TEXTURE_2D,dt,pt,nt.width,nt.height)}for(let nt=0,ft=It.length;nt<ft;nt++)ut=It[nt],Dt?z&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,ht,Pt,ut):e.texImage2D(i.TEXTURE_2D,nt,pt,ht,Pt,ut);g.generateMipmaps=!1}else if(Dt){if(Xt){let nt=Y(it);e.texStorage2D(i.TEXTURE_2D,dt,pt,nt.width,nt.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,Pt,it)}else e.texImage2D(i.TEXTURE_2D,0,pt,ht,Pt,it);p(g)&&M(k),ct.__version=at.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function Lt(S,g,N){if(g.image.length!==6)return;let k=Ot(S,g),j=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+N);let at=n.get(j);if(j.version!==at.__version||k===!0){e.activeTexture(i.TEXTURE0+N);let ct=ee.getPrimaries(ee.workingColorSpace),Q=g.colorSpace===oi?null:ee.getPrimaries(g.colorSpace),it=g.colorSpace===oi||ct===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let ht=g.isCompressedTexture||g.image[0].isCompressedTexture,Pt=g.image[0]&&g.image[0].isDataTexture,pt=[];for(let st=0;st<6;st++)!ht&&!Pt?pt[st]=_(g.image[st],!0,s.maxCubemapSize):pt[st]=Pt?g.image[st].image:g.image[st],pt[st]=ze(g,pt[st]);let ut=pt[0],It=r.convert(g.format,g.colorSpace),Dt=r.convert(g.type),Xt=y(g.internalFormat,It,Dt,g.normalized,g.colorSpace),z=g.isVideoTexture!==!0,dt=at.__version===void 0||k===!0,nt=j.dataReady,ft=E(g,ut);zt(i.TEXTURE_CUBE_MAP,g);let vt;if(ht){z&&dt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Xt,ut.width,ut.height);for(let st=0;st<6;st++){vt=pt[st].mipmaps;for(let Ft=0;Ft<vt.length;Ft++){let At=vt[Ft];g.format!==Mn?It!==null?z?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,0,0,At.width,At.height,It,At.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,Xt,At.width,At.height,0,At.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,0,0,At.width,At.height,It,Dt,At.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,Xt,At.width,At.height,0,It,Dt,At.data)}}}else{if(vt=g.mipmaps,z&&dt){vt.length>0&&ft++;let st=Y(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Xt,st.width,st.height)}for(let st=0;st<6;st++)if(Pt){z?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,pt[st].width,pt[st].height,It,Dt,pt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Xt,pt[st].width,pt[st].height,0,It,Dt,pt[st].data);for(let Ft=0;Ft<vt.length;Ft++){let ve=vt[Ft].image[st].image;z?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,0,0,ve.width,ve.height,It,Dt,ve.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,Xt,ve.width,ve.height,0,It,Dt,ve.data)}}else{z?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,It,Dt,pt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Xt,It,Dt,pt[st]);for(let Ft=0;Ft<vt.length;Ft++){let At=vt[Ft];z?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,0,0,It,Dt,At.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,Xt,It,Dt,At.image[st])}}}p(g)&&M(i.TEXTURE_CUBE_MAP),at.__version=j.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function ot(S,g,N,k,j,at){let ct=r.convert(N.format,N.colorSpace),Q=r.convert(N.type),it=y(N.internalFormat,ct,Q,N.normalized,N.colorSpace),ht=n.get(g),Pt=n.get(N);if(Pt.__renderTarget=g,!ht.__hasExternalTextures){let pt=Math.max(1,g.width>>at),ut=Math.max(1,g.height>>at);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,at,it,pt,ut,g.depth,0,ct,Q,null):e.texImage2D(j,at,it,pt,ut,0,ct,Q,null)}e.bindFramebuffer(i.FRAMEBUFFER,S),he(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,j,Pt.__webglTexture,0,ge(g)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,j,Pt.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(S,g,N){if(i.bindRenderbuffer(i.RENDERBUFFER,S),g.depthBuffer){let k=g.depthTexture,j=k&&k.isDepthTexture?k.type:null,at=A(g.stencilBuffer,j),ct=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;he(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge(g),at,g.width,g.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge(g),at,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,at,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,S)}else{let k=g.textures;for(let j=0;j<k.length;j++){let at=k[j],ct=r.convert(at.format,at.colorSpace),Q=r.convert(at.type),it=y(at.internalFormat,ct,Q,at.normalized,at.colorSpace);he(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge(g),it,g.width,g.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge(g),it,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,it,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(S,g,N){let k=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(g.depthTexture);if(j.__renderTarget=g,(!j.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),k){if(j.__webglInit===void 0&&(j.__webglInit=!0,g.depthTexture.addEventListener("dispose",I)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),zt(i.TEXTURE_CUBE_MAP,g.depthTexture);let ht=r.convert(g.depthTexture.format),Pt=r.convert(g.depthTexture.type),pt;g.depthTexture.format===Vn?pt=i.DEPTH_COMPONENT24:g.depthTexture.format===Ai&&(pt=i.DEPTH24_STENCIL8);for(let ut=0;ut<6;ut++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,pt,g.width,g.height,0,ht,Pt,null)}}else tt(g.depthTexture,0);let at=j.__webglTexture,ct=ge(g),Q=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,it=g.depthTexture.format===Ai?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Vn)he(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,Q,at,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,it,Q,at,0);else if(g.depthTexture.format===Ai)he(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,Q,at,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,it,Q,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $t(S){let g=n.get(S),N=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){let k=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),k){let j=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",j)};k.addEventListener("dispose",j),g.__depthDisposeCallback=j}g.__boundDepthTexture=k}if(S.depthTexture&&!g.__autoAllocateDepthBuffer)if(N)for(let k=0;k<6;k++)Ee(g.__webglFramebuffer[k],S,k);else{let k=S.texture.mipmaps;k&&k.length>0?Ee(g.__webglFramebuffer[0],S,0):Ee(g.__webglFramebuffer,S,0)}else if(N){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=i.createRenderbuffer(),kt(g.__webglDepthbuffer[k],S,!1);else{let j=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=g.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,at)}}else{let k=S.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),kt(g.__webglDepthbuffer,S,!1);else{let j=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,at)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(S,g,N){let k=n.get(S);g!==void 0&&ot(k.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&$t(S)}function re(S){let g=S.texture,N=n.get(S),k=n.get(g);S.addEventListener("dispose",x);let j=S.textures,at=S.isWebGLCubeRenderTarget===!0,ct=j.length>1;if(ct||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=g.version,a.memory.textures++),at){N.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[Q]=[];for(let it=0;it<g.mipmaps.length;it++)N.__webglFramebuffer[Q][it]=i.createFramebuffer()}else N.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let Q=0;Q<g.mipmaps.length;Q++)N.__webglFramebuffer[Q]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(ct)for(let Q=0,it=j.length;Q<it;Q++){let ht=n.get(j[Q]);ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture(),a.memory.textures++)}if(S.samples>0&&he(S)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Q=0;Q<j.length;Q++){let it=j[Q];N.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[Q]);let ht=r.convert(it.format,it.colorSpace),Pt=r.convert(it.type),pt=y(it.internalFormat,ht,Pt,it.normalized,it.colorSpace,S.isXRRenderTarget===!0),ut=ge(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,pt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,N.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),kt(N.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),zt(i.TEXTURE_CUBE_MAP,g);for(let Q=0;Q<6;Q++)if(g.mipmaps&&g.mipmaps.length>0)for(let it=0;it<g.mipmaps.length;it++)ot(N.__webglFramebuffer[Q][it],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,it);else ot(N.__webglFramebuffer[Q],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);p(g)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let Q=0,it=j.length;Q<it;Q++){let ht=j[Q],Pt=n.get(ht),pt=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(pt=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,Pt.__webglTexture),zt(pt,ht),ot(N.__webglFramebuffer,S,ht,i.COLOR_ATTACHMENT0+Q,pt,0),p(ht)&&M(pt)}e.unbindTexture()}else{let Q=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(Q=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,k.__webglTexture),zt(Q,g),g.mipmaps&&g.mipmaps.length>0)for(let it=0;it<g.mipmaps.length;it++)ot(N.__webglFramebuffer[it],S,g,i.COLOR_ATTACHMENT0,Q,it);else ot(N.__webglFramebuffer,S,g,i.COLOR_ATTACHMENT0,Q,0);p(g)&&M(Q),e.unbindTexture()}S.depthBuffer&&$t(S)}function jt(S){let g=S.textures;for(let N=0,k=g.length;N<k;N++){let j=g[N];if(p(j)){let at=C(S),ct=n.get(j).__webglTexture;e.bindTexture(at,ct),M(at),e.unbindTexture()}}}let me=[],ce=[];function we(S){if(S.samples>0){if(he(S)===!1){let g=S.textures,N=S.width,k=S.height,j=i.COLOR_BUFFER_BIT,at=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=n.get(S),Q=g.length>1;if(Q)for(let ht=0;ht<g.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);let it=S.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let ht=0;ht<g.length;ht++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ct.__webglColorRenderbuffer[ht]);let Pt=n.get(g[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pt,0)}i.blitFramebuffer(0,0,N,k,0,0,N,k,j,i.NEAREST),h===!0&&(me.length=0,ce.length=0,me.push(i.COLOR_ATTACHMENT0+ht),S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&(me.push(at),ce.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let ht=0;ht<g.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,ct.__webglColorRenderbuffer[ht]);let Pt=n.get(g[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,Pt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&h){let g=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ge(S){return Math.min(s.maxSamples,S.samples)}function he(S){let g=n.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function O(S){let g=a.render.frame;u.get(S)!==g&&(u.set(S,g),S.update())}function ze(S,g){let N=S.colorSpace,k=S.format,j=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||N!==Js&&N!==oi&&(ee.getTransfer(N)===le?(k!==Mn||j!==cn)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",N)),g}function Y(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=F,this.getTextureUnits=L,this.setTextureUnits=D,this.setTexture2D=tt,this.setTexture2DArray=Z,this.setTexture3D=K,this.setTextureCube=et,this.rebindTextures=Ht,this.setupRenderTarget=re,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function lg(i,t){function e(n,s=oi){let r,a=ee.getTransfer(s);if(n===cn)return i.UNSIGNED_BYTE;if(n===Za)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ja)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===zl)return i.BYTE;if(n===kl)return i.SHORT;if(n===Rs)return i.UNSIGNED_SHORT;if(n===Ya)return i.INT;if(n===In)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===Ln)return i.HALF_FLOAT;if(n===Gl)return i.ALPHA;if(n===Wl)return i.RGB;if(n===Mn)return i.RGBA;if(n===Vn)return i.DEPTH_COMPONENT;if(n===Ai)return i.DEPTH_STENCIL;if(n===$a)return i.RED;if(n===Ka)return i.RED_INTEGER;if(n===wi)return i.RG;if(n===ja)return i.RG_INTEGER;if(n===Qa)return i.RGBA_INTEGER;if(n===Sr||n===br||n===Er||n===Tr)if(a===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===to||n===eo||n===no||n===io)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===to)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===eo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===no)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===so||n===ro||n===ao||n===oo||n===lo||n===Ar||n===co)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===so||n===ro)return a===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ao)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===oo)return r.COMPRESSED_R11_EAC;if(n===lo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ar)return r.COMPRESSED_RG11_EAC;if(n===co)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===xo||n===vo||n===yo||n===Mo||n===So||n===bo||n===Eo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ho)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===po)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===go)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_o)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===So)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Eo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===To||n===Ao||n===wo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===To)return a===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ao)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ro||n===Co||n===wr||n===Po)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ro)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Co)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Po)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var cg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,mc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new cr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new pn({vertexShader:cg,fragmentShader:hg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pe(new We(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gc=class extends Hn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",h=1,l=null,u=null,f=null,c=null,d=null,m=null,v=typeof XRWebGLBinding<"u",_=new mc,p={},M=e.getContextAttributes(),C=null,y=null,A=[],E=[],I=new Rt,x=null,w=null,T=new De;T.viewport=new be;let R=new De;R.viewport=new be;let P=[T,R],F=new Va,L=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let H=A[V];return H===void 0&&(H=new ys,A[V]=H),H.getTargetRaySpace()},this.getControllerGrip=function(V){let H=A[V];return H===void 0&&(H=new ys,A[V]=H),H.getGripSpace()},this.getHand=function(V){let H=A[V];return H===void 0&&(H=new ys,A[V]=H),H.getHandSpace()};function q(V){let H=E.indexOf(V.inputSource);if(H===-1)return;let lt=A[H];lt!==void 0&&(lt.update(V.inputSource,V.frame,l||a),lt.dispatchEvent({type:V.type,data:V.inputSource}))}function X(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",tt);for(let V=0;V<A.length;V++){let H=E[V];H!==null&&(E[V]=null,A[V].disconnect(H))}L=null,D=null,_.reset();for(let V in p)delete p[V];if(t.setRenderTarget(C),d=null,c=null,f=null,s=null,y=null,Ot.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(I.width,I.height,!1),w!==null){let V=w.camera;V.fov=w.fov,V.zoom=w.zoom,V.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return c!==null?c:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",X),s.addEventListener("inputsourceschange",tt),M.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(I),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,Lt=null,ot=null;M.depth&&(ot=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=M.stencil?Ai:Vn,Lt=M.stencil?Cs:In);let kt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};f=this.getBinding(),c=f.createProjectionLayer(kt),s.updateRenderState({layers:[c]}),t.setPixelRatio(1),t.setSize(c.textureWidth,c.textureHeight,!1),y=new on(c.textureWidth,c.textureHeight,{format:Mn,type:cn,depthTexture:new yi(c.textureWidth,c.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1,storeMultisampledDepthBuffer:c.ignoreDepthValues===!1,storeMultisampledStencilBuffer:c.ignoreDepthValues===!1})}else{let lt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new on(d.framebufferWidth,d.framebufferHeight,{format:Mn,type:cn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(h),l=null,a=await s.requestReferenceSpace(o),Ot.setContext(s),Ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function tt(V){for(let H=0;H<V.removed.length;H++){let lt=V.removed[H],Lt=E.indexOf(lt);Lt>=0&&(E[Lt]=null,A[Lt].disconnect(lt))}for(let H=0;H<V.added.length;H++){let lt=V.added[H],Lt=E.indexOf(lt);if(Lt===-1){for(let kt=0;kt<A.length;kt++)if(kt>=E.length){E.push(lt),Lt=kt;break}else if(E[kt]===null){E[kt]=lt,Lt=kt;break}if(Lt===-1)break}let ot=A[Lt];ot&&ot.connect(lt)}}let Z=new U,K=new U;function et(V,H,lt){Z.setFromMatrixPosition(H.matrixWorld),K.setFromMatrixPosition(lt.matrixWorld);let Lt=Z.distanceTo(K),ot=H.projectionMatrix.elements,kt=lt.projectionMatrix.elements,Ee=ot[14]/(ot[10]-1),$t=ot[14]/(ot[10]+1),Ht=(ot[9]+1)/ot[5],re=(ot[9]-1)/ot[5],jt=(ot[8]-1)/ot[0],me=(kt[8]+1)/kt[0],ce=Ee*jt,we=Ee*me,ge=Lt/(-jt+me),he=ge*-jt;if(H.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(he),V.translateZ(ge),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),ot[10]===-1)V.projectionMatrix.copy(H.projectionMatrix),V.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{let O=Ee+ge,ze=$t+ge,Y=ce-he,S=we+(Lt-he),g=Ht*$t/ze*O,N=re*$t/ze*O;V.projectionMatrix.makePerspective(Y,S,g,N,O,ze),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function bt(V,H){H===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(H.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let H=V.near,lt=V.far;_.texture!==null&&(_.depthNear>0&&(H=_.depthNear),_.depthFar>0&&(lt=_.depthFar)),F.near=R.near=T.near=H,F.far=R.far=T.far=lt,(L!==F.near||D!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),L=F.near,D=F.far),F.layers.mask=V.layers.mask|6,T.layers.mask=F.layers.mask&-5,R.layers.mask=F.layers.mask&-3;let Lt=V.parent,ot=F.cameras;bt(F,Lt);for(let kt=0;kt<ot.length;kt++)bt(ot[kt],Lt);ot.length===2?et(F,T,R):F.projectionMatrix.copy(T.projectionMatrix),w===null&&V.isPerspectiveCamera&&(w={camera:V,fov:V.fov,zoom:V.zoom}),yt(V,F,Lt)};function yt(V,H,lt){lt===null?V.matrix.copy(H.matrixWorld):(V.matrix.copy(lt.matrixWorld),V.matrix.invert(),V.matrix.multiply(H.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(H.projectionMatrix),V.projectionMatrixInverse.copy(H.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Qs*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(c===null&&d===null))return h},this.setFoveation=function(V){h=V,c!==null&&(c.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(F)},this.getCameraTexture=function(V){return p[V]};let Kt=null;function zt(V,H){if(u=H.getViewerPose(l||a),m=H,u!==null){let lt=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Lt=!1;lt.length!==F.cameras.length&&(F.cameras.length=0,Lt=!0);for(let $t=0;$t<lt.length;$t++){let Ht=lt[$t],re=null;if(d!==null)re=d.getViewport(Ht);else{let me=f.getViewSubImage(c,Ht);re=me.viewport,$t===0&&(t.setRenderTargetTextures(y,me.colorTexture,me.depthStencilTexture),t.setRenderTarget(y))}let jt=P[$t];jt===void 0&&(jt=new De,jt.layers.enable($t),jt.viewport=new be,P[$t]=jt),jt.matrix.fromArray(Ht.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Ht.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(re.x,re.y,re.width,re.height),$t===0&&(F.matrix.copy(jt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Lt===!0&&F.cameras.push(jt)}let ot=s.enabledFeatures;if(ot&&ot.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let $t=f.getDepthInformation(lt[0]);$t&&$t.isValid&&$t.texture&&_.init($t,s.renderState)}if(ot&&ot.includes("camera-access")&&v){t.state.unbindTexture(),f=n.getBinding();for(let $t=0;$t<lt.length;$t++){let Ht=lt[$t].camera;if(Ht){let re=p[Ht];re||(re=new cr,p[Ht]=re);let jt=f.getCameraImage(Ht);re.sourceTexture=jt}}}}for(let lt=0;lt<A.length;lt++){let Lt=E[lt],ot=A[lt];Lt!==null&&ot!==void 0&&ot.update(Lt,H,l||a)}Kt&&Kt(V,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),m=null}let Ot=new yu;Ot.setAnimationLoop(zt),this.setAnimationLoop=function(V){Kt=V},this.dispose=function(){}}},ug=new fe,Au=new Vt;Au.set(-1,0,0,0,1,0,0,0,1);function dg(i,t){function e(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,Yl(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function s(_,p,M,C,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(_,p):p.isMeshLambertMaterial?(r(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(_,p),f(_,p)):p.isMeshPhongMaterial?(r(_,p),u(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(_,p),c(_,p),p.isMeshPhysicalMaterial&&d(_,p,y)):p.isMeshMatcapMaterial?(r(_,p),m(_,p)):p.isMeshDepthMaterial?r(_,p):p.isMeshDistanceMaterial?(r(_,p),v(_,p)):p.isMeshNormalMaterial?r(_,p):p.isLineBasicMaterial?(a(_,p),p.isLineDashedMaterial&&o(_,p)):p.isPointsMaterial?h(_,p,M,C):p.isSpriteMaterial?l(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,e(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===Xe&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,e(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===Xe&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,e(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,e(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);let M=t.get(p),C=M.envMap,y=M.envMapRotation;C&&(_.envMap.value=C,_.envMapRotation.value.setFromMatrix4(ug.makeRotationFromEuler(y)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Au),_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,_.aoMapTransform))}function a(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform))}function o(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function h(_,p,M,C){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*M,_.scale.value=C*.5,p.map&&(_.map.value=p.map,e(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function l(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function f(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function c(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function d(_,p,M){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xe&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.retroreflectivity>0&&(_.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=M.texture,_.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,p){p.matcap&&(_.matcap.value=p.matcap)}function v(_,p){let M=t.get(p).light;_.referencePosition.value.setFromMatrixPosition(M.matrixWorld),_.nearDistance.value=M.shadow.camera.near,_.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(y,A){let E=A.program;n.uniformBlockBinding(y,E)}function l(y,A){let E=s[y.id];E===void 0&&(_(y),E=u(y),s[y.id]=E,y.addEventListener("dispose",M));let I=A.program;n.updateUBOMapping(y,I);let x=t.render.frame;r[y.id]!==x&&(c(y),r[y.id]=x)}function u(y){let A=f();y.__bindingPointIndex=A;let E=i.createBuffer(),I=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,I,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,E),E}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(y){let A=s[y.id],E=y.uniforms,I=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let x=0,w=E.length;x<w;x++){let T=E[x];if(Array.isArray(T))for(let R=0,P=T.length;R<P;R++)d(T[R],x,R,I);else d(T,x,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,A,E,I){if(v(y,A,E,I)===!0){let x=y.__offset,w=y.value;if(Array.isArray(w)){let T=0;for(let R=0;R<w.length;R++){let P=w[R],F=p(P);m(P,y.__data,T),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(T+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function m(y,A,E){typeof y=="number"||typeof y=="boolean"?A[0]=y:y.isMatrix3?(A[0]=y.elements[0],A[1]=y.elements[1],A[2]=y.elements[2],A[3]=0,A[4]=y.elements[3],A[5]=y.elements[4],A[6]=y.elements[5],A[7]=0,A[8]=y.elements[6],A[9]=y.elements[7],A[10]=y.elements[8],A[11]=0):ArrayBuffer.isView(y)?A.set(new y.constructor(y.buffer,y.byteOffset,A.length)):y.toArray(A,E)}function v(y,A,E,I){let x=y.value,w=A+"_"+E;if(I[w]===void 0)return typeof x=="number"||typeof x=="boolean"?I[w]=x:ArrayBuffer.isView(x)?I[w]=x.slice():I[w]=x.clone(),!0;{let T=I[w];if(typeof x=="number"||typeof x=="boolean"){if(T!==x)return I[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(T.equals(x)===!1)return T.copy(x),!0}}return!1}function _(y){let A=y.uniforms,E=0,I=16;for(let w=0,T=A.length;w<T;w++){let R=Array.isArray(A[w])?A[w]:[A[w]];for(let P=0,F=R.length;P<F;P++){let L=R[P],D=Array.isArray(L.value)?L.value:[L.value];for(let q=0,X=D.length;q<X;q++){let tt=D[q],Z=p(tt),K=E%I,et=K%Z.boundary,bt=K+et;E+=et,bt!==0&&I-bt<Z.storage&&(E+=I-bt),L.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=E,E+=Z.storage}}}let x=E%I;return x>0&&(E+=I-x),y.__size=E,y.__cache={},this}function p(y){let A={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(A.boundary=4,A.storage=4):y.isVector2?(A.boundary=8,A.storage=8):y.isVector3||y.isColor?(A.boundary=16,A.storage=12):y.isVector4?(A.boundary=16,A.storage=16):y.isMatrix3?(A.boundary=48,A.storage=48):y.isMatrix4?(A.boundary=64,A.storage=64):y.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(A.boundary=16,A.storage=y.byteLength):Ut("WebGLRenderer: Unsupported uniform value type.",y),A}function M(y){let A=y.target;A.removeEventListener("dispose",M);let E=a.indexOf(A.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function C(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:h,update:l,dispose:C}}var pg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Jn=null;function mg(){return Jn===null&&(Jn=new rr(pg,16,16,wi,Ln),Jn.name="DFG_LUT",Jn.minFilter=He,Jn.magFilter=He,Jn.wrapS=kn,Jn.wrapT=kn,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}var Uo=class{constructor(t={}){let{canvas:e=Wh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:c=!1,outputBufferType:d=cn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let v=d,_=new Set([Qa,ja,Ka]),p=new Set([cn,In,Rs,Cs,Za,Ja]),M=new Uint32Array(4),C=new Int32Array(4),y=new U,A=null,E=null,I=[],x=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,R=!1,P=null,F=null,L=null,D=null;this._outputColorSpace=$e;let q=0,X=0,tt=null,Z=-1,K=null,et=new be,bt=new be,yt=null,Kt=new Gt(0),zt=0,Ot=e.width,V=e.height,H=1,lt=null,Lt=null,ot=new be(0,0,Ot,V),kt=new be(0,0,Ot,V),Ee=!1,$t=new Ms,Ht=!1,re=!1,jt=new fe,me=new U,ce=new be,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ge=!1;function he(){return tt===null?H:1}let O=n;function ze(b,B){return e.getContext(b,B)}let Y,S,g,N,k,j,at,ct,Q,it,ht,Pt,pt,ut,It,Dt,Xt,z,dt,nt,ft,vt,st;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",bn,!1),O===null){let B="webgl2";if(O=ze(B,b),O===null)throw ze(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ft()}catch(b){throw e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",bn,!1),Bt("WebGLRenderer: "+b.message),b}function Ft(){Y=new S0(O),Y.init(),ft=new lg(O,Y),S=new d0(O,Y,t,ft),g=new ag(O,Y),S.reversedDepthBuffer&&c&&g.buffers.depth.setReversed(!0),F=O.createFramebuffer(),L=O.createFramebuffer(),D=O.createFramebuffer(),N=new T0(O),k=new qm,j=new og(O,Y,g,k,S,ft,N),at=new M0(T),ct=new Ad(O),vt=new h0(O,ct),Q=new b0(O,ct,N,vt),it=new w0(O,Q,ct,vt,N),z=new A0(O,S,j),It=new f0(k),ht=new Xm(T,at,Y,S,vt,It),Pt=new dg(T,k),pt=new Zm,ut=new tg(Y),Xt=new c0(T,at,g,it,m,h),Dt=new rg(T,it,S),st=new fg(O,N,S,g),dt=new u0(O,Y,N),nt=new E0(O,Y,N),N.programs=ht.programs,T.capabilities=S,T.extensions=Y,T.properties=k,T.renderLists=pt,T.shadowMap=Dt,T.state=g,T.info=N}v!==cn&&(w=new C0(v,e.width,e.height,o,s,r));let At=new gc(T,O);this.xr=At,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=Y.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Y.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(Ot,V,!1))},this.getSize=function(b){return b.set(Ot,V)},this.setSize=function(b,B,J=!0){if(At.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}Ot=b,V=B,e.width=Math.floor(b*H),e.height=Math.floor(B*H),J===!0&&(e.style.width=b+"px",e.style.height=B+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(Ot*H,V*H).floor()},this.setDrawingBufferSize=function(b,B,J){Ot=b,V=B,H=J,e.width=Math.floor(b*J),e.height=Math.floor(B*J),this.setViewport(0,0,b,B)},this.setEffects=function(b){if(v===cn){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let B=0;B<b.length;B++)if(b[B].isOutputPass===!0){Ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(et)},this.getViewport=function(b){return b.copy(ot)},this.setViewport=function(b,B,J,G){b.isVector4?ot.set(b.x,b.y,b.z,b.w):ot.set(b,B,J,G),g.viewport(et.copy(ot).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(kt)},this.setScissor=function(b,B,J,G){b.isVector4?kt.set(b.x,b.y,b.z,b.w):kt.set(b,B,J,G),g.scissor(bt.copy(kt).multiplyScalar(H).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(b){g.setScissorTest(Ee=b)},this.setOpaqueSort=function(b){lt=b},this.setTransparentSort=function(b){Lt=b},this.getClearColor=function(b){return b.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor(...arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,J=!0){let G=0;if(b){let W=!1;if(tt!==null){let _t=tt.texture.format;W=_.has(_t)}if(W){let _t=tt.texture.type,St=p.has(_t),gt=Xt.getClearColor(),Et=Xt.getClearAlpha(),wt=gt.r,Yt=gt.g,te=gt.b;St?(M[0]=wt,M[1]=Yt,M[2]=te,M[3]=Et,O.clearBufferuiv(O.COLOR,0,M)):(C[0]=wt,C[1]=Yt,C[2]=te,C[3]=Et,O.clearBufferiv(O.COLOR,0,C))}else G|=O.COLOR_BUFFER_BIT}B&&(G|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),P=b},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",bn,!1),Xt.dispose(),pt.dispose(),ut.dispose(),k.dispose(),at.dispose(),it.dispose(),vt.dispose(),st.dispose(),ht.dispose(),At.dispose(),At.removeEventListener("sessionstart",Pc),At.removeEventListener("sessionend",Ic),Ri.stop()};function ve(b){b.preventDefault(),js("WebGLRenderer: Context Lost."),R=!0}function ae(){js("WebGLRenderer: Context Restored."),R=!1;let b=N.autoReset,B=Dt.enabled,J=Dt.autoUpdate,G=Dt.needsUpdate,W=Dt.type;Ft(),N.autoReset=b,Dt.enabled=B,Dt.autoUpdate=J,Dt.needsUpdate=G,Dt.type=W}function bn(b){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Un(b){let B=b.target;B.removeEventListener("dispose",Un),Uu(B)}function Uu(b){Bu(b),k.remove(b)}function Bu(b){let B=k.get(b).programs;B!==void 0&&(B.forEach(function(J){ht.releaseProgram(J)}),b.isShaderMaterial&&ht.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,J,G,W,_t){B===null&&(B=we);let St=W.isMesh&&W.matrixWorld.determinantAffine()<0,gt=ku(b,B,J,G,W);g.setMaterial(G,St);let Et=J.index,wt=1;if(G.wireframe===!0){if(Et=Q.getWireframeAttribute(J),Et===void 0)return;wt=2}let Yt=J.drawRange,te=J.attributes.position,Tt=Yt.start*wt,oe=(Yt.start+Yt.count)*wt;_t!==null&&(Tt=Math.max(Tt,_t.start*wt),oe=Math.min(oe,(_t.start+_t.count)*wt)),Et!==null?(Tt=Math.max(Tt,0),oe=Math.min(oe,Et.count)):te!=null&&(Tt=Math.max(Tt,0),oe=Math.min(oe,te.count));let Pe=oe-Tt;if(Pe<0||Pe===1/0)return;vt.setup(W,G,gt,J,Et);let Me,_e=dt;if(Et!==null&&(Me=ct.get(Et),_e=nt,_e.setIndex(Me)),W.isMesh)G.wireframe===!0?(g.setLineWidth(G.wireframeLinewidth*he()),_e.setMode(O.LINES)):_e.setMode(O.TRIANGLES);else if(W.isLine){let Ye=G.linewidth;Ye===void 0&&(Ye=1),g.setLineWidth(Ye*he()),W.isLineSegments?_e.setMode(O.LINES):W.isLineLoop?_e.setMode(O.LINE_LOOP):_e.setMode(O.LINE_STRIP)}else W.isPoints?_e.setMode(O.POINTS):W.isSprite&&_e.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(Y.get("WEBGL_multi_draw"))_e.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Ye=W._multiDrawStarts,Mt=W._multiDrawCounts,tn=W._multiDrawCount,ie=Et?ct.get(Et).bytesPerElement:1,xn=k.get(G).currentProgram.getUniforms();for(let Bn=0;Bn<tn;Bn++)xn.setValue(O,"_gl_DrawID",Bn),_e.render(Ye[Bn]/ie,Mt[Bn])}else if(W.isInstancedMesh)_e.renderInstances(Tt,Pe,W.count);else if(J.isInstancedBufferGeometry){let Ye=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Mt=Math.min(J.instanceCount,Ye);_e.renderInstances(Tt,Pe,Mt)}else _e.render(Tt,Pe)};function Cc(b,B,J,G){P!==null&&b.isNodeMaterial&&P.setObject(G,b),Ht===!0&&It.setState(b,J,!1),b.transparent===!0&&b.side===ln&&b.forceSinglePass===!1?(b.side=Xe,b.needsUpdate=!0,Or(b,B,G),b.side=Cn,b.needsUpdate=!0,Or(b,B,G),b.side=ln):Or(b,B,G)}this.compile=function(b,B,J=null){J===null&&(J=b),P!==null&&P.renderStart(b,B,J),E=ut.get(J),E.init(B),x.push(E),J.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),b!==J&&b.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),E.setupLights(),P!==null&&P.updateLights(E.state.lightsArray),re=this.localClippingEnabled,Ht=It.init(this.clippingPlanes,re),Ht===!0&&It.setGlobalState(this.clippingPlanes,B),P!==null&&Dt.render(E.state.shadowsArray,J,B);let G=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let _t=W.material;if(_t)if(Array.isArray(_t))for(let St=0;St<_t.length;St++){let gt=_t[St];Cc(gt,J,B,W),G.add(gt)}else Cc(_t,J,B,W),G.add(_t)}),E=x.pop(),P!==null&&P.renderEnd(),G},this.compileAsync=function(b,B,J=null){let G=this.compile(b,B,J);return new Promise(W=>{function _t(){if(G.forEach(function(St){let Et=k.get(St).currentProgram;(Et===void 0||Et.isReady())&&G.delete(St)}),G.size===0){W(b);return}setTimeout(_t,10)}Y.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let qo=null;function Ou(b){qo&&qo(b)}function Pc(){Ri.stop()}function Ic(){Ri.start()}let Ri=new yu;Ri.setAnimationLoop(Ou),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(b){qo=b,At.setAnimationLoop(b),b===null?Ri.stop():Ri.start()},At.addEventListener("sessionstart",Pc),At.addEventListener("sessionend",Ic),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;P!==null&&P.renderStart(b,B);let J=At.enabled===!0&&At.isPresenting===!0,G=w!==null&&(tt===null||J)&&w.begin(T,tt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(B),B=At.getCamera()),b.isScene===!0&&b.onBeforeRender(T,b,B,tt),E=ut.get(b,x.length),E.init(B),E.state.textureUnits=j.getTextureUnits(),x.push(E),jt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$t.setFromProjectionMatrix(jt,Rn,B.reversedDepth),re=this.localClippingEnabled,Ht=It.init(this.clippingPlanes,re),A=pt.get(b,I.length),A.init(),I.push(A),At.enabled===!0&&At.isPresenting===!0){let St=T.xr.getDepthSensingMesh();St!==null&&Yo(St,B,-1/0,T.sortObjects)}Yo(b,B,0,T.sortObjects),A.finish(),P!==null&&P.updateLights(E.state.lightsArray),T.sortObjects===!0&&A.sort(lt,Lt),ge=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,ge&&Xt.addToRenderList(A,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ht===!0&&It.beginShadows();let W=E.state.shadowsArray;if(Dt.render(W,b,B),Ht===!0&&It.endShadows(),(G&&w.hasRenderPass())===!1){let St=A.opaque,gt=A.transmissive;if(E.setupLights(),B.isArrayCamera){let Et=B.cameras;if(gt.length>0)for(let wt=0,Yt=Et.length;wt<Yt;wt++){let te=Et[wt];Fc(St,gt,b,te)}ge&&Xt.render(b);for(let wt=0,Yt=Et.length;wt<Yt;wt++){let te=Et[wt];Lc(A,b,te,te.viewport)}}else gt.length>0&&Fc(St,gt,b,B),ge&&Xt.render(b),Lc(A,b,B)}tt!==null&&X===0&&(j.updateMultisampleRenderTarget(tt),j.updateRenderTargetMipmap(tt)),G&&w.end(T),b.isScene===!0&&b.onAfterRender(T,b,B),vt.resetDefaultState(),Z=-1,K=null,x.pop(),x.length>0?(E=x[x.length-1],j.setTextureUnits(E.state.textureUnits),Ht===!0&&It.setGlobalState(T.clippingPlanes,E.state.camera)):E=null,I.pop(),I.length>0?A=I[I.length-1]:A=null,P!==null&&P.renderEnd()};function Yo(b,B,J,G){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)J=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLightProbeGrid)E.pushLightProbeGrid(b);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum($t)){G&&ce.setFromMatrixPosition(b.matrixWorld).applyMatrix4(jt);let St=it.update(b),gt=b.material;gt.visible&&A.push(b,St,gt,J,ce.z,null,B)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum($t))){let St=it.update(b),gt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ce.copy(b.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),ce.copy(St.boundingSphere.center)),ce.applyMatrix4(b.matrixWorld).applyMatrix4(jt)),Array.isArray(gt)){let Et=St.groups;for(let wt=0,Yt=Et.length;wt<Yt;wt++){let te=Et[wt],Tt=gt[te.materialIndex];Tt&&Tt.visible&&A.push(b,St,Tt,J,ce.z,te,B)}}else gt.visible&&A.push(b,St,gt,J,ce.z,null,B)}}let _t=b.children;for(let St=0,gt=_t.length;St<gt;St++)Yo(_t[St],B,J,G)}function Lc(b,B,J,G){let{opaque:W,transmissive:_t,transparent:St}=b;E.setupLightsView(J),Ht===!0&&It.setGlobalState(T.clippingPlanes,J),G&&g.viewport(et.copy(G)),W.length>0&&Br(W,B,J),_t.length>0&&Br(_t,B,J),St.length>0&&Br(St,B,J),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Fc(b,B,J,G){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){let Tt=Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new on(1,1,{generateMipmaps:!0,type:Tt?Ln:cn,minFilter:Ti,samples:Math.max(4,S.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}let _t=E.state.transmissionRenderTarget[G.id],St=G.viewport||et;_t.setSize(St.z*T.transmissionResolutionScale,St.w*T.transmissionResolutionScale);let gt=T.getRenderTarget(),Et=T.getActiveCubeFace(),wt=T.getActiveMipmapLevel();T.setRenderTarget(_t),T.getClearColor(Kt),zt=T.getClearAlpha(),zt<1&&T.setClearColor(16777215,.5),T.clear(),ge&&Xt.render(J);let Yt=T.toneMapping;T.toneMapping=Pn;let te=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),Ht===!0&&It.setGlobalState(T.clippingPlanes,G),Br(b,J,G),j.updateMultisampleRenderTarget(_t),j.updateRenderTargetMipmap(_t),Y.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let oe=0,Pe=B.length;oe<Pe;oe++){let Me=B[oe],{object:_e,geometry:Ye,material:Mt,group:tn}=Me;if(Mt.side===ln&&_e.layers.test(G.layers)){let ie=Mt.side;Mt.side=Xe,Mt.needsUpdate=!0,Dc(_e,J,G,Ye,Mt,tn),Mt.side=ie,Mt.needsUpdate=!0,Tt=!0}}Tt===!0&&(j.updateMultisampleRenderTarget(_t),j.updateRenderTargetMipmap(_t))}T.setRenderTarget(gt,Et,wt),T.setClearColor(Kt,zt),te!==void 0&&(G.viewport=te),T.toneMapping=Yt}function Br(b,B,J){let G=B.isScene===!0?B.overrideMaterial:null;for(let W=0,_t=b.length;W<_t;W++){let St=b[W],{object:gt,geometry:Et,group:wt}=St,Yt=St.material;Yt.allowOverride===!0&&G!==null&&(Yt=G),gt.layers.test(J.layers)&&Dc(gt,B,J,Et,Yt,wt)}}function Dc(b,B,J,G,W,_t){P!==null&&W.isNodeMaterial&&P.setObject(b,W),b.onBeforeRender(T,B,J,G,W,_t),b.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(T,B,J,G,b,_t),W.transparent===!0&&W.side===ln&&W.forceSinglePass===!1?(W.side=Xe,W.needsUpdate=!0,T.renderBufferDirect(J,B,G,W,b,_t),W.side=Cn,W.needsUpdate=!0,T.renderBufferDirect(J,B,G,W,b,_t),W.side=ln):T.renderBufferDirect(J,B,G,W,b,_t),b.onAfterRender(T,B,J,G,W,_t)}function Or(b,B,J){B.isScene!==!0&&(B=we);let G=k.get(b),W=E.state.lights,_t=E.state.shadowsArray,St=W.state.version,gt=ht.getParameters(b,W.state,_t,B,J,E.state.lightProbeGridArray),Et=ht.getProgramCacheKey(gt),wt=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?B.environment:null,G.fog=B.fog;let Yt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=at.get(b.envMap||G.environment,Yt),G.envMapRotation=G.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,wt===void 0&&(b.addEventListener("dispose",Un),wt=new Map,G.programs=wt);let te=wt.get(Et);if(te!==void 0){if(G.currentProgram===te&&G.lightsStateVersion===St)return Uc(b,gt),te}else gt.uniforms=ht.getUniforms(b),P!==null&&b.isNodeMaterial&&P.build(b,J,gt),b.onBeforeCompile(gt,T),te=ht.acquireProgram(gt,Et),wt.set(Et,te),G.uniforms=gt.uniforms;let Tt=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Tt.clippingPlanes=It.uniform),Uc(b,gt),G.needsLights=Hu(b),G.lightsStateVersion=St,G.needsLights&&(Tt.ambientLightColor.value=W.state.ambient,Tt.lightProbe.value=W.state.probe,Tt.sunLights.value=W.state.sun,Tt.sunLightShadows.value=W.state.sunShadow,Tt.directionalLights.value=W.state.directional,Tt.directionalLightShadows.value=W.state.directionalShadow,Tt.spotLights.value=W.state.spot,Tt.spotLightShadows.value=W.state.spotShadow,Tt.rectAreaLights.value=W.state.rectArea,Tt.ltc_1.value=W.state.rectAreaLTC1,Tt.ltc_2.value=W.state.rectAreaLTC2,Tt.pointLights.value=W.state.point,Tt.pointLightShadows.value=W.state.pointShadow,Tt.hemisphereLights.value=W.state.hemi,Tt.sunShadowMatrix.value=W.state.sunShadowMatrix,Tt.sunShadowCascade.value=W.state.sunShadowCascade,Tt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Tt.spotLightMatrix.value=W.state.spotLightMatrix,Tt.spotLightMap.value=W.state.spotLightMap,Tt.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=E.state.lightProbeGridArray.length>0,G.currentProgram=te,G.uniformsList=null,te}function Nc(b){if(b.uniformsList===null){let B=b.currentProgram.getUniforms();b.uniformsList=Ls.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function Uc(b,B){let J=k.get(b);J.outputColorSpace=B.outputColorSpace,J.batching=B.batching,J.batchingColor=B.batchingColor,J.instancing=B.instancing,J.instancingColor=B.instancingColor,J.instancingMorph=B.instancingMorph,J.skinning=B.skinning,J.morphTargets=B.morphTargets,J.morphNormals=B.morphNormals,J.morphColors=B.morphColors,J.morphTargetsCount=B.morphTargetsCount,J.numClippingPlanes=B.numClippingPlanes,J.numIntersection=B.numClipIntersection,J.vertexAlphas=B.vertexAlphas,J.vertexTangents=B.vertexTangents,J.toneMapping=B.toneMapping}function zu(b,B){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(B.matrixWorld);for(let J=0,G=b.length;J<G;J++){let W=b[J];if(W.texture!==null&&W.boundingBox.containsPoint(y))return W}return null}function ku(b,B,J,G,W){B.isScene!==!0&&(B=we),j.resetTextureUnits();let _t=B.fog,St=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?B.environment:null,gt=tt===null?T.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ee.workingColorSpace,Et=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,wt=at.get(G.envMap||St,Et),Yt=G.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,te=!!J.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Tt=!!J.morphAttributes.position,oe=!!J.morphAttributes.normal,Pe=!!J.morphAttributes.color,Me=Pn;G.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Me=T.toneMapping);let _e=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ye=_e!==void 0?_e.length:0,Mt=k.get(G),tn=E.state.lights;if(Ht===!0&&(re===!0||b!==K)){let ye=b===K&&G.id===Z;It.setState(G,b,ye)}let ie=!1;G.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==tn.state.version||Mt.outputColorSpace!==gt||W.isBatchedMesh&&Mt.batching===!1||!W.isBatchedMesh&&Mt.batching===!0||W.isBatchedMesh&&Mt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Mt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Mt.instancing===!1||!W.isInstancedMesh&&Mt.instancing===!0||W.isSkinnedMesh&&Mt.skinning===!1||!W.isSkinnedMesh&&Mt.skinning===!0||W.isInstancedMesh&&Mt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Mt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Mt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Mt.instancingMorph===!1&&W.morphTexture!==null||Mt.envMap!==wt||G.fog===!0&&Mt.fog!==_t||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==It.numPlanes||Mt.numIntersection!==It.numIntersection)||Mt.vertexAlphas!==Yt||Mt.vertexTangents!==te||Mt.morphTargets!==Tt||Mt.morphNormals!==oe||Mt.morphColors!==Pe||Mt.toneMapping!==Me||Mt.morphTargetsCount!==Ye||!!Mt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ie=!0):(ie=!0,Mt.__version=G.version);let xn=Mt.currentProgram;ie===!0&&(xn=Or(G,B,W),P&&G.isNodeMaterial&&P.onUpdateProgram(G,xn,Mt));let Bn=!1,ci=!1,Zi=!1,ue=xn.getUniforms(),Re=Mt.uniforms;if(g.useProgram(xn.program)&&(Bn=!0,ci=!0,Zi=!0),G.id!==Z&&(Z=G.id,ci=!0),Mt.needsLights){let ye=zu(E.state.lightProbeGridArray,W);Mt.lightProbeGrid!==ye&&(Mt.lightProbeGrid=ye,ci=!0)}if(Bn||K!==b){g.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ue.setValue(O,"projectionMatrix",b.projectionMatrix),ue.setValue(O,"viewMatrix",b.matrixWorldInverse);let ui=ue.map.cameraPosition;ui!==void 0&&ui.setValue(O,me.setFromMatrixPosition(b.matrixWorld)),S.logarithmicDepthBuffer&&ue.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ue.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),K!==b&&(K=b,ci=!0,Zi=!0)}if(Mt.needsLights&&(tn.state.sunShadowMap.length>0&&ue.setValue(O,"sunShadowMap",tn.state.sunShadowMap,j),tn.state.directionalShadowMap.length>0&&ue.setValue(O,"directionalShadowMap",tn.state.directionalShadowMap,j),tn.state.spotShadowMap.length>0&&ue.setValue(O,"spotShadowMap",tn.state.spotShadowMap,j),tn.state.pointShadowMap.length>0&&ue.setValue(O,"pointShadowMap",tn.state.pointShadowMap,j)),W.isSkinnedMesh){ue.setOptional(O,W,"bindMatrix"),ue.setOptional(O,W,"bindMatrixInverse");let ye=W.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),ue.setValue(O,"boneTexture",ye.boneTexture,j))}W.isBatchedMesh&&(ue.setOptional(O,W,"batchingTexture"),ue.setValue(O,"batchingTexture",W._matricesTexture,j),ue.setOptional(O,W,"batchingIdTexture"),ue.setValue(O,"batchingIdTexture",W._indirectTexture,j),ue.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&ue.setValue(O,"batchingColorTexture",W._colorsTexture,j));let hi=J.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&z.update(W,J,xn),(ci||Mt.receiveShadow!==W.receiveShadow)&&(Mt.receiveShadow=W.receiveShadow,ue.setValue(O,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&B.environment!==null&&(Re.envMapIntensity.value=B.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=mg()),ci){if(ue.setValue(O,"toneMappingExposure",T.toneMappingExposure),Mt.needsLights&&Vu(Re,Zi),_t&&G.fog===!0&&Pt.refreshFogUniforms(Re,_t),Pt.refreshMaterialUniforms(Re,G,H,V,E.state.transmissionRenderTarget[b.id]),Mt.needsLights&&Mt.lightProbeGrid){let ye=Mt.lightProbeGrid;Re.probesSH.value=ye.texture,Re.probesMin.value.copy(ye.boundingBox.min),Re.probesMax.value.copy(ye.boundingBox.max),Re.probesResolution.value.copy(ye.resolution)}Ls.upload(O,Nc(Mt),Re,j)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ls.upload(O,Nc(Mt),Re,j),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ue.setValue(O,"center",W.center),ue.setValue(O,"modelViewMatrix",W.modelViewMatrix),ue.setValue(O,"normalMatrix",W.normalMatrix),ue.setValue(O,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let ye=G.uniformsGroups;for(let ui=0,Ji=ye.length;ui<Ji;ui++){let Oc=ye[ui];st.update(Oc,xn),st.bind(Oc,xn)}}return xn}function Vu(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.sunLights.needsUpdate=B,b.sunLightShadows.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function Hu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(b,B,J){let G=k.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),k.get(b.texture).__webglTexture=B,k.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:J,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){let J=k.get(b);J.__webglFramebuffer=B,J.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,J=0){tt=b,q=B,X=J;let G=null,W=!1,_t=!1;if(b){let gt=k.get(b);if(gt.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(O.FRAMEBUFFER,gt.__webglFramebuffer),et.copy(b.viewport),bt.copy(b.scissor),yt=b.scissorTest,g.viewport(et),g.scissor(bt),g.setScissorTest(yt),Z=-1;return}else if(gt.__webglFramebuffer===void 0)j.setupRenderTarget(b);else if(gt.__hasExternalTextures)j.rebindTextures(b,k.get(b.texture).__webglTexture,k.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Yt=b.depthTexture;if(gt.__boundDepthTexture!==Yt){if(Yt!==null&&k.has(Yt)&&(b.width!==Yt.image.width||b.height!==Yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(b)}}let Et=b.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(_t=!0);let wt=k.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(wt[B])?G=wt[B][J]:G=wt[B],W=!0):b.samples>0&&j.useMultisampledRTT(b)===!1?G=k.get(b).__webglMultisampledFramebuffer:Array.isArray(wt)?G=wt[J]:G=wt,et.copy(b.viewport),bt.copy(b.scissor),yt=b.scissorTest}else et.copy(ot).multiplyScalar(H).floor(),bt.copy(kt).multiplyScalar(H).floor(),yt=Ee;if(J!==0&&(G=F),g.bindFramebuffer(O.FRAMEBUFFER,G)&&g.drawBuffers(b,G),g.viewport(et),g.scissor(bt),g.setScissorTest(yt),W){let gt=k.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,gt.__webglTexture,J)}else if(_t){let gt=B;for(let Et=0;Et<b.textures.length;Et++){let wt=k.get(b.textures[Et]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Et,wt.__webglTexture,J,gt)}}else if(b!==null&&J!==0){let gt=k.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,gt.__webglTexture,J)}Z=-1};function Bc(b){let B=k.get(b);return(B.__readFormat!==b.format||B.__readType!==b.type)&&(B.__readFormat=b.format,B.__readType=b.type,B.__formatReadable=S.textureFormatReadable(b.format),B.__typeReadable=S.textureTypeReadable(b.type)),B}this.readRenderTargetPixels=function(b,B,J,G,W,_t,St,gt=0){if(!(b&&b.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=k.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et){g.bindFramebuffer(O.FRAMEBUFFER,Et);try{let wt=b.textures[gt],Yt=wt.format,te=wt.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+gt);let Tt=Bc(wt);if(Tt.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-G&&J>=0&&J<=b.height-W&&O.readPixels(B,J,G,W,ft.convert(Yt),ft.convert(te),_t)}finally{let wt=tt!==null?k.get(tt).__webglFramebuffer:null;g.bindFramebuffer(O.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(b,B,J,G,W,_t,St,gt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=k.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et)if(B>=0&&B<=b.width-G&&J>=0&&J<=b.height-W){g.bindFramebuffer(O.FRAMEBUFFER,Et);let wt=b.textures[gt],Yt=wt.format,te=wt.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+gt);let Tt=Bc(wt);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let oe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,oe),O.bufferData(O.PIXEL_PACK_BUFFER,_t.byteLength,O.STREAM_READ),O.readPixels(B,J,G,W,ft.convert(Yt),ft.convert(te),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Pe=tt!==null?k.get(tt).__webglFramebuffer:null;g.bindFramebuffer(O.FRAMEBUFFER,Pe);let Me=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await qh(O,Me,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,oe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,_t),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(oe),O.deleteSync(Me),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,J=0){let G=Math.pow(2,-J),W=Math.floor(b.image.width*G),_t=Math.floor(b.image.height*G),St=B!==null?B.x:0,gt=B!==null?B.y:0;j.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,St,gt,W,_t),g.unbindTexture()},this.copyTextureToTexture=function(b,B,J=null,G=null,W=0,_t=0){let St,gt,Et,wt,Yt,te,Tt,oe,Pe,Me=b.isCompressedTexture?b.mipmaps[_t]:b.image;if(J!==null)St=J.max.x-J.min.x,gt=J.max.y-J.min.y,Et=J.isBox3?J.max.z-J.min.z:1,wt=J.min.x,Yt=J.min.y,te=J.isBox3?J.min.z:0;else{let Re=Math.pow(2,-W);St=Math.floor(Me.width*Re),gt=Math.floor(Me.height*Re),b.isDataArrayTexture?Et=Me.depth:b.isData3DTexture?Et=Math.floor(Me.depth*Re):Et=1,wt=0,Yt=0,te=0}G!==null?(Tt=G.x,oe=G.y,Pe=G.z):(Tt=0,oe=0,Pe=0);let _e=ft.convert(B.format),Ye=ft.convert(B.type),Mt;B.isData3DTexture?(j.setTexture3D(B,0),Mt=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(j.setTexture2DArray(B,0),Mt=O.TEXTURE_2D_ARRAY):(j.setTexture2D(B,0),Mt=O.TEXTURE_2D),g.activeTexture(O.TEXTURE0),g.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),g.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),g.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);let tn=g.getParameter(O.UNPACK_ROW_LENGTH),ie=g.getParameter(O.UNPACK_IMAGE_HEIGHT),xn=g.getParameter(O.UNPACK_SKIP_PIXELS),Bn=g.getParameter(O.UNPACK_SKIP_ROWS),ci=g.getParameter(O.UNPACK_SKIP_IMAGES);g.pixelStorei(O.UNPACK_ROW_LENGTH,Me.width),g.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Me.height),g.pixelStorei(O.UNPACK_SKIP_PIXELS,wt),g.pixelStorei(O.UNPACK_SKIP_ROWS,Yt),g.pixelStorei(O.UNPACK_SKIP_IMAGES,te);let Zi=b.isDataArrayTexture||b.isData3DTexture,ue=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){let Re=k.get(b),hi=k.get(B),ye=k.get(Re.__renderTarget),ui=k.get(hi.__renderTarget);g.bindFramebuffer(O.READ_FRAMEBUFFER,ye.__webglFramebuffer),g.bindFramebuffer(O.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let Ji=0;Ji<Et;Ji++)Zi&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,k.get(b).__webglTexture,W,te+Ji),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,k.get(B).__webglTexture,_t,Pe+Ji)),O.blitFramebuffer(wt,Yt,St,gt,Tt,oe,St,gt,O.DEPTH_BUFFER_BIT,O.NEAREST);g.bindFramebuffer(O.READ_FRAMEBUFFER,null),g.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||k.has(b)){let Re=k.get(b),hi=k.get(B);g.bindFramebuffer(O.READ_FRAMEBUFFER,L),g.bindFramebuffer(O.DRAW_FRAMEBUFFER,D);for(let ye=0;ye<Et;ye++)Zi?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.__webglTexture,W,te+ye):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Re.__webglTexture,W),ue?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,hi.__webglTexture,_t,Pe+ye):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,hi.__webglTexture,_t),W!==0?O.blitFramebuffer(wt,Yt,St,gt,Tt,oe,St,gt,O.COLOR_BUFFER_BIT,O.NEAREST):ue?O.copyTexSubImage3D(Mt,_t,Tt,oe,Pe+ye,wt,Yt,St,gt):O.copyTexSubImage2D(Mt,_t,Tt,oe,wt,Yt,St,gt);g.bindFramebuffer(O.READ_FRAMEBUFFER,null),g.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ue?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(Mt,_t,Tt,oe,Pe,St,gt,Et,_e,Ye,Me.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(Mt,_t,Tt,oe,Pe,St,gt,Et,_e,Me.data):O.texSubImage3D(Mt,_t,Tt,oe,Pe,St,gt,Et,_e,Ye,Me):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,_t,Tt,oe,St,gt,_e,Ye,Me.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,_t,Tt,oe,Me.width,Me.height,_e,Me.data):O.texSubImage2D(O.TEXTURE_2D,_t,Tt,oe,St,gt,_e,Ye,Me);g.pixelStorei(O.UNPACK_ROW_LENGTH,tn),g.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ie),g.pixelStorei(O.UNPACK_SKIP_PIXELS,xn),g.pixelStorei(O.UNPACK_SKIP_ROWS,Bn),g.pixelStorei(O.UNPACK_SKIP_IMAGES,ci),_t===0&&B.generateMipmaps&&O.generateMipmap(Mt),g.unbindTexture()},this.initRenderTarget=function(b){k.get(b).__webglFramebuffer===void 0&&j.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?j.setTextureCube(b,0):b.isData3DTexture?j.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?j.setTexture2DArray(b,0):j.setTexture2D(b,0),g.unbindTexture()},this.resetState=function(){q=0,X=0,tt=null,g.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};var Lr=new U;function Sn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),h=Math.PI/4;Lr.copy(t),Lr[n]=0,Lr.normalize();let l=.5*a/(a+o),u=1-Lr.angleTo(i)/h;return Math.sign(Lr[e])===1?u*l:o/(a+o)+l+l*(1-u)}var Xi=class i extends dn{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let h=new U,l=new U,u=new U(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,c=this.attributes.normal.array,d=this.attributes.uv.array,m=f.length/6,v=new U,_=.5/a;for(let p=0,M=0;p<f.length;p+=3,M+=2)switch(h.fromArray(f,p),l.copy(h),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),f[p+0]=u.x*Math.sign(h.x)+l.x*r,f[p+1]=u.y*Math.sign(h.y)+l.y*r,f[p+2]=u.z*Math.sign(h.z)+l.z*r,c[p+0]=l.x,c[p+1]=l.y,c[p+2]=l.z,Math.floor(p/m)){case 0:v.set(1,0,0),d[M+0]=Sn(v,l,"z","y",r,n),d[M+1]=1-Sn(v,l,"y","z",r,e);break;case 1:v.set(-1,0,0),d[M+0]=1-Sn(v,l,"z","y",r,n),d[M+1]=1-Sn(v,l,"y","z",r,e);break;case 2:v.set(0,1,0),d[M+0]=1-Sn(v,l,"x","z",r,t),d[M+1]=Sn(v,l,"z","x",r,n);break;case 3:v.set(0,-1,0),d[M+0]=1-Sn(v,l,"x","z",r,t),d[M+1]=1-Sn(v,l,"z","x",r,n);break;case 4:v.set(0,0,1),d[M+0]=1-Sn(v,l,"x","y",r,t),d[M+1]=1-Sn(v,l,"y","x",r,e);break;case 5:v.set(0,0,-1),d[M+0]=Sn(v,l,"x","y",r,t),d[M+1]=1-Sn(v,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var zo=class extends Di{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new dn;t.deleteAttribute("uv");let e=new Ne({side:Xe}),n=new Ne,s=new Yn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new pe(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Ui(t,n,6),o=new Te;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let h=new pe(t,Ns(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);let l=new pe(t,Ns(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new pe(t,Ns(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let f=new pe(t,Ns(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let c=new pe(t,Ns(20));c.position.set(3.235,11.486,-12.541),c.scale.set(2.5,2,.1),this.add(c);let d=new pe(t,Ns(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ns(i){return new pr({color:0,emissive:16777215,emissiveIntensity:i})}var xt=Math.PI,Wt=xt*2,je=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Ct=(i,t,e)=>i+(t-i)*e,jn=i=>(i=je(i),i*i*(3-2*i)),Xo=i=>(i=je(i),i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2),Bs=i=>1-Math.pow(1-je(i),3),Qe=(i,t,e)=>je((i-t)/(e-t)),Ae=(i,t,e,n=.35)=>jn((i-t)/n)*jn((e-i)/n),Wo=(i,t,e)=>{let n=((t-i+xt)%Wt+Wt)%Wt-xt;return i+n*e},Ac=(i,t)=>Math.atan2(t[0]-i[0],t[1]-i[1]),Ce=(i,t,e)=>new U(i,t,e),gn=9,_n=7.5,Oe=3,rn=.18,_c=new Map;function $(i,t={}){let e=i+JSON.stringify(t);if(_c.has(e))return _c.get(e);let n=new Ne({color:i,roughness:t.r??.75,metalness:t.m??0,emissive:t.e||"#000000",emissiveIntensity:t.ei??1,transparent:!!t.op,opacity:t.op??1,flatShading:!!t.flat,side:t.ds?ln:Cn});return _c.set(e,n),n}var _g=(i,t={})=>new Ge({color:i,toneMapped:!1,transparent:!!t.op||!!t.map,opacity:t.op??1,map:t.map||null,blending:t.add?ki:ai,depthWrite:!t.add,side:t.ds?ln:Cn});function Dn(i,t=!0,e=!0){return i.traverse(n=>{n.isMesh&&(n.castShadow=t,n.receiveShadow=e)}),i}function qt(i,t,e,n=0,s=0,r=0,a={}){let o=new pe(i,t);return o.position.set(n,s,r),a.rx&&(o.rotation.x=a.rx),a.ry&&(o.rotation.y=a.ry),a.rz&&(o.rotation.z=a.rz),a.s&&o.scale.set(...Array.isArray(a.s)?a.s:[a.s,a.s,a.s]),o.castShadow=a.cast!==!1,o.receiveShadow=a.recv!==!1,e&&e.add(o),o}function rt(i,t,e,n,s=.015,r={}){let a=n[0]-e[0],o=n[1]-e[1],h=n[2]-e[2],l=Math.min(s,a/2-.001,o/2-.001,h/2-.001),u=l>.002?new Xi(a,o,h,3,l):new dn(a,o,h);return qt(u,t,i,(e[0]+n[0])/2,(e[1]+n[1])/2,(e[2]+n[2])/2,r)}var Jt=(i,t,e,n,s,r,a,o,h={})=>qt(new Ss(e,n,s,h.seg||24),t,i,r,a,o,h),se=(i,t,e,n,s,r,a={})=>qt(new sn(e,a.seg||24,a.seg2||16),t,i,n,s,r,a),Nn=(i,t,e,n,s,r,a,o={})=>qt(new hr(e,n,6,16),t,i,s,r,a,o);function qe(i,t){let e=document.createElement("canvas");e.width=i,e.height=t;let n=e.getContext("2d"),s=new lr(e);return s.colorSpace=$e,s.anisotropy=4,{c:e,g:n,t:s,w:i,h:t}}function qi(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function Us(i,t=1,e=.6){let n=qe(128,128),s=n.g.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.35,"rgba(255,255,255,.35)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.g.fillStyle=s,n.g.fillRect(0,0,128,128);let r=new Ni(new vi({map:n.t,color:i,blending:ki,depthWrite:!1,transparent:!0,opacity:e,toneMapped:!1}));return r.scale.setScalar(t),r}var xg={triste:{hemi:.55,key:.85,keyCor:"#AFC0E6",amb:"#7F8FB3",lamp:!1,pend:!1,raio:.1,tv:"#EF4444",mon:"#EF4444",exp:.9},preocupado:{hemi:.75,key:1.35,keyCor:"#FFE3C7",amb:"#B9A58F",lamp:!0,pend:!1,raio:.16,tv:"#EF4444",mon:"#F97316",exp:.97},tranquilo:{hemi:.85,key:1.7,keyCor:"#FFF4E3",amb:"#C8C6E8",lamp:!0,pend:!1,raio:.28,tv:"#818CF8",mon:"#60A5FA",exp:1},feliz:{hemi:.95,key:2.1,keyCor:"#FFF1D6",amb:"#E8DCC0",lamp:!0,pend:!0,raio:.4,tv:"#22C55E",mon:"#22C55E",exp:1.04},euforico:{hemi:.8,key:1.6,keyCor:"#FFE0F2",amb:"#E9C9E6",lamp:!0,pend:!0,raio:.36,tv:"#FACC15",mon:"#FACC15",exp:1.05}},wu="#F2C3A0",vg="#3B261B",yg="#2F3B52",Mg="#1B2230",Yi={alt:.89,dy:0,hz:0,lean:0,side:0,twist:0,nod:0,turn:0,roll:0,aL:[0,.12,.2],aR:[0,.12,.2],lL:[0,0],lR:[0,0],olhar:[0,0],boch:0,abre:.6,lagrima:0,nuvem:0,balao:0,yawAdd:0,olhos:"A",boca:"leve",sob:"",item:"",balaoT:""},Sg=["alt","dy","hz","lean","side","twist","nod","turn","roll","boch","abre","lagrima","nuvem","balao","yawAdd"],Du=["aL","aR","lL","lR","olhar"],bg=["olhos","boca","sob","item","balaoT","bolas","solta"],ko=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)},bc=class{constructor(t,e){let n=this.camisa=new Ne({color:t||"#2457F5",roughness:.82}),s=this.gola=new Ne({color:t||"#2457F5",roughness:.78});this.setCor(t);let r=$(wu,{r:.5,e:"#4A1D0C",ei:.2}),a=$("#E3A682",{r:.58,e:"#4A1D0C",ei:.16}),o=$(yg,{r:.88}),h=$(Mg,{r:.42}),l=$("#F4F6F8",{r:.55}),u=$("#F8FAFC",{r:.9}),f=$("#2A1D16",{r:.45}),c=$("#D9B44A",{r:.28,m:.7}),d=this.root=new Nt,m=this.hips=new Nt;d.add(m),qt(new sn(.175,28,18),o,m,0,.02,0,{s:[1.06,.62,.86]}),Jt(m,f,.165,.165,.032,0,.068,0,{s:[1.08,1,.8],seg:32}),rt(m,c,[-.02,.05,.128],[.02,.086,.14],.008);let v=this.spine=new Nt;v.position.y=.04,m.add(v);let _=new dr([[0,-.02],[.14,0],[.153,.1],[.172,.2],[.196,.3],[.207,.39],[.196,.46],[.148,.515],[.082,.552],[0,.565]].map(D=>new Rt(D[0],D[1]))).getPoints(48);this.torso=qt(new bs(_,40),n,v,0,0,0,{s:[1.13,1,.8]});let p=new dn(.1,.012,.085);for(let D of[-1,1])qt(p,s,v,D*.052,.528,.098,{rx:.6,rz:-D*.55});qt(new fn(.083,.02,10,28),s,v,0,.545,-.005,{rx:xt/2,s:[1,.95,1]});for(let D of[.485,.435])se(v,$("#E8EDF5",{r:.4}),.0095,0,D,.1665,{seg:10,seg2:8});this.emoji=qe(128,128);let M=qt(new We(.15,.15),new Ge({map:this.emoji.t,transparent:!0,alphaTest:.1}),v,0,.29,.1635,{cast:!1});this.emojiPlano=M,this.setEmoji(e);let C=this.neck=new Nt;C.position.y=.53,v.add(C),Jt(C,r,.052,.062,.12,0,.03,0,{seg:20});let y=this.head=new Nt;y.position.y=.045,y.scale.setScalar(.88),C.add(y);let A=.2,E=.24;se(y,r,E,0,A,0,{seg:48,seg2:32});for(let D of[-1,1])se(y,r,.05,D*(E-.002),A-.012,-.012,{s:[.55,1.05,.85],seg:16,seg2:12}),se(y,a,.028,D*(E+.012),A-.014,-.006,{s:[.3,.8,.5],seg:12,seg2:10});se(y,r,.011,0,A+.006,E-.001,{s:[.9,1.6,.8],seg:10,seg2:8}),se(y,r,.019,0,A-.02,E+.006,{s:[1.05,.8,1],seg:16,seg2:12});let I=$(vg,{r:.62}),x=$("#4B3326",{r:.58});this.cabelo=new Nt,y.add(this.cabelo),qt(new sn(E+.018,40,22,0,Wt,0,1.3),I,this.cabelo,0,A,0,{rx:-.3}),qt(new sn(E+.007,36,20,xt*1.1,xt*.8,.2,2.15),I,this.cabelo,0,A,0);for(let D of[-1,1])Nn(this.cabelo,I,.015,.05,D*.226,A+.045,.07,{rz:D*.1});this.fio=new Nt,this.fio.position.set(0,A+.2,.1),y.add(this.fio),qt(new sn(.09,20,12),I,this.fio,.05,0,.045,{s:[1.55,.62,1.15],rz:-.18}),qt(new sn(.08,20,12),x,this.fio,-.045,-.005,.03,{s:[1.35,.55,1],rz:.15}),qt(new sn(.065,16,10),I,this.fio,.12,-.025,-.01,{s:[1.3,.5,1],rz:-.5}),this.rosto=qe(512,384),this.rosto.g.scale(2,2);let w=new sn(E+.003,40,24,xt/2-.9,1.8,.85,1.3),T=new Ne({map:this.rosto.t,transparent:!0,alphaTest:.06,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-2});qt(w,T,y,0,A,0,{cast:!1}),this.rostoKey="",this.dedos={L:[],R:[]};let R=(D,q)=>{let X=new Nt;X.position.set(.228*D,.45,0),v.add(X),se(X,n,.072,0,0,0,{seg:24,seg2:18}),Jt(X,n,.069,.064,.205,0,-.1,0,{seg:24}),qt(new fn(.065,.011,8,24),n,X,0,-.203,0,{rx:xt/2}),Jt(X,r,.058,.052,.1,0,-.248,0,{seg:20});let tt=new Nt;tt.position.y=-.29,X.add(tt),se(tt,r,.053,0,0,0,{seg:18,seg2:12}),Jt(tt,r,.052,.04,.255,0,-.135,0,{seg:20});let Z=new Nt;Z.position.y=-.27,tt.add(Z),se(Z,r,.04,0,-.005,0,{s:[.7,.7,1.1],seg:14,seg2:10}),rt(Z,r,[-.0165,-.092,-.039],[.0165,-.01,.039],.013);let K=this.dedos[q];[[-.028,.032],[-.0095,.038],[.0095,.036],[.028,.029]].forEach(([yt,Kt])=>{let zt=new Nt;zt.position.set(0,-.09,yt),Z.add(zt),Nn(zt,r,.0108,Kt,0,-Kt/2-.004,0,{seg:8});let Ot=new Nt;Ot.position.y=-Kt-.006,zt.add(Ot),Nn(Ot,r,.0098,Kt*.8,0,-Kt*.4-.002,0),K.push({p1:zt,p2:Ot})});let et=new Nt;et.position.set(-D*.014,-.03,.04),et.rotation.set(.35,0,D*.5),Z.add(et),Nn(et,r,.0125,.032,0,-.022,0);let bt=new Nt;return bt.position.y=-.047,et.add(bt),Nn(bt,r,.0112,.026,0,-.016,0),K.push({p1:et,p2:bt,polegar:!0}),{sh:X,el:tt,hand:Z}};this.L=R(-1,"L"),this.R=R(1,"R"),this.cL=this.cR=.28;let P=D=>{let q=new Nt;q.position.set(.1*D,-.01,0),m.add(q),Jt(q,o,.096,.077,.42,0,-.21,0,{seg:24});let X=new Nt;X.position.y=-.42,q.add(X),se(X,o,.078,0,0,.004,{seg:18,seg2:12}),Jt(X,o,.076,.06,.38,0,-.19,0,{seg:24}),qt(new fn(.062,.012,8,20),o,X,0,-.372,0,{rx:xt/2});let tt=new Nt;return tt.position.y=-.4,X.add(tt),Jt(tt,u,.046,.05,.05,0,0,0,{seg:16}),rt(tt,h,[-.056,-.054,-.07],[.056,.02,.1],.034),se(tt,h,.058,0,-.026,.1,{s:[1,.72,1.15],seg:18,seg2:12}),rt(tt,l,[-.057,-.078,-.072],[.057,-.05,.158],.014),rt(tt,$("#E9EDF2",{r:.7}),[-.026,.012,-.012],[.026,.026,.07],.006,{rx:-.25}),{hp:q,kn:X,ft:tt}};this.PL=P(-1),this.PR=P(1),Dn(d,!0,!1);let F=qe(64,64),L=F.g.createRadialGradient(32,32,0,32,32,32);L.addColorStop(0,"rgba(0,0,0,.45)"),L.addColorStop(1,"rgba(0,0,0,0)"),F.g.fillStyle=L,F.g.fillRect(0,0,64,64),this.blob=new pe(new We(.8,.8),new Ge({map:F.t,transparent:!0,depthWrite:!1})),this.blob.rotation.x=-xt/2,this.blob.position.y=.004,this.mL=new U,this.mR=new U,this.gp=new U(0,-.05,0),this.fioA=0,this.fioV=0,this.pDy=0,this.pNod=0,this.pT=null}setCor(t){let e=t||"#2457F5";this.camisa.color.set(e),this.gola&&this.gola.color.set(e).lerp(new Gt("#FFFFFF"),.16)}setEmoji(t){let{g:e,t:n}=this.emoji;e.clearRect(0,0,128,128),t&&(e.font="96px system-ui, 'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(t,64,70)),this.emojiPlano.visible=!!t,n.needsUpdate=!0}aplicar(t,e=0,n=0){let s=Math.sin(e*1.75),r=Math.sin(e*1.75-.7),a=Math.sin(e*.43)*.6+Math.sin(e*.97+1.3)*.4,o=1-je(Math.abs(t.dy)*4+Math.abs(t.hz)*4,0,.6);this.hips.position.set(.004*a*o,t.alt+t.dy+.0025*s,t.hz),this.spine.rotation.set(t.lean+.012*r,t.twist+.02*a*o,t.side+.008*a*o),this.torso.scale.set(1.13*(1+.011*s),1+.008*s,.8*(1+.02*s));let h=Math.sin(e*.52+.6)*.03+Math.sin(e*1.31)*.012;this.neck.rotation.set(t.nod*.35,t.turn*.4+h*.4,t.roll*.4),this.head.rotation.set(t.nod*.65+.008*s,t.turn*.6+h*.6,t.roll*.6+.01*a*o);let l=t.item||"",u=.012*s;this.L.sh.position.y=.45+u,this.R.sh.position.y=.45+u,this.L.sh.rotation.set(-t.aL[0],0,-t.aL[1]),this.L.el.rotation.x=-t.aL[2],this.R.sh.rotation.set(-t.aR[0],0,t.aR[1]),this.R.el.rotation.x=-t.aR[2],this.PL.hp.rotation.x=-t.lL[0],this.PL.kn.rotation.x=t.lL[1],this.PL.ft.rotation.x=t.lL[0]-t.lL[1],this.PR.hp.rotation.x=-t.lR[0],this.PR.kn.rotation.x=t.lR[1],this.PR.ft.rotation.x=t.lR[0]-t.lR[1],this.L.hand.rotation.set(l==="tacoShot"?.22:l==="controle"?-.08:0,0,l==="tacoV"?.1:l==="tacoShot"?-.2:l==="controle"?.12:0),this.R.hand.rotation.set(l==="xicara"?.18:l==="tacoShot"?-.22:l==="nota"?-.12:0,l==="xicara"?-.12:0,l==="controle"?-.12:l==="tacoShot"?.18:l==="nota"?-.1:0);let f=l==="controle"||l==="tacoShot"||l==="tacoV",c=l==="controle"||l==="tacoShot"||l==="xicara"||l==="nota",d=f?.95:t.aL[0]>2.2?.1:.3+.05*Math.sin(e*.8),m=c?.95:t.aR[0]>2.2?.1:.3+.05*Math.sin(e*.8+1),v=n>0?Math.min(1,n*12):1;this.cL+=(d-this.cL)*v,this.cR+=(m-this.cR)*v;for(let[_,p,M]of[[-1,this.dedos.L,this.cL],[1,this.dedos.R,this.cR]])p.forEach((C,y)=>{if(C.polegar){C.p1.rotation.z=_*.5-_*M*.35,C.p2.rotation.z=-_*M*.6;return}let A=1+(y-1.5)*.06;C.p1.rotation.z=-_*M*1.05*A,C.p2.rotation.z=-_*M*1.25*A});if(n>0&&this.pT!==null){let _=Math.min(n,.05),p=-(t.dy-this.pDy)/_*5-(t.nod-this.pNod)/_*.5;this.fioV+=(p-90*this.fioA-9*this.fioV)*_,this.fioA=je(this.fioA+this.fioV*_,-.4,.4)}this.pDy=t.dy,this.pNod=t.nod,this.pT=e,this.fio.rotation.x=this.fioA+.02*s,this.fio.rotation.z=.02*a,this.root.updateMatrixWorld(!0),this.L.hand.localToWorld(this.mL.copy(this.gp)),this.R.hand.localToWorld(this.mR.copy(this.gp))}desenharRosto(t,e){let n=t.olhos,s=0;if(n==="A"){let P=Math.floor(e/3.4),F=e-P*3.4-(.3+ko(P)*2.3),L=ko(P+9.3)>.82,D=0;F>=0&&F<.17?D=Math.sin(F/.17*xt):L&&F>=.27&&F<.44&&(D=Math.sin((F-.27)/.17*xt)),s=Math.round(D*4)/4,(t.sob==="triste"||t.boca==="triste")&&(s=Math.max(s,.2))}let r=Math.floor(e/.85),a=(ko(r)-.5)*.7,o=(ko(r+3.7)-.5)*.4,h=t.lagrima>.05?Math.floor(e*.6%1*24):-1,l=t.olhar[0]*5+a,u=t.olhar[1]*4+o,f=[n,t.boca,t.sob,Math.round(t.boch*10),Math.round(t.abre*8),Math.round(l*4),Math.round(u*4),h,s].join("|");if(f===this.rostoKey)return;this.rostoKey=f;let{g:c,t:d}=this.rosto;c.clearRect(0,0,256,192);let m=128,v=86,_=44,p="#3B2416";if(c.lineCap="round",c.lineJoin="round",t.boch>.03)for(let P of[-1,1]){let F=c.createRadialGradient(m+P*66,121,1,m+P*66,121,25);F.addColorStop(0,`rgba(240,105,105,${.5*t.boch})`),F.addColorStop(1,"rgba(240,105,105,0)"),c.fillStyle=F,c.beginPath(),c.ellipse(m+P*66,121,25,14,0,0,Wt),c.fill()}let M=t.sob==="triste"||!t.sob&&t.boca==="triste",C=t.sob==="tenso",y=t.boca==="aberta"||t.boca==="o"?5*je(t.abre,0,1):0,A=t.boca==="sorriso"||n==="F"?3:0,E=M?36:C?54:44,I=M?54:C?42:40;for(let P of[-1,1]){let F=m+P*19,L=m+P*66,D=E-y-A*.3,q=I-y-A,X=Math.min(D,q)-4.5+(C?3:0);c.fillStyle="#34211A",c.beginPath(),c.moveTo(F,D+4.2),c.quadraticCurveTo((F+L)/2,X-.5,L,q+.5),c.quadraticCurveTo((F+L)/2,X+5.2,F,D+4.2+3.2),c.closePath(),c.fill()}for(let P of[-1,1]){let F=m+P*_;if(n==="A"){c.save(),c.beginPath(),c.ellipse(F,v,17.5,20.5,0,0,Wt),c.clip();let L=c.createLinearGradient(0,v-20.5,0,v+20.5);L.addColorStop(0,"#E9E1DA"),L.addColorStop(.3,"#FFFFFF"),L.addColorStop(1,"#F3EEE8"),c.fillStyle=L,c.fillRect(F-19,v-22,38,44);let D=F+l,q=v+1+u,X=c.createRadialGradient(D,q,1,D,q,13);X.addColorStop(0,"#6B4023"),X.addColorStop(.7,"#4C2C18"),X.addColorStop(1,"#2A170C"),c.fillStyle=X,c.beginPath(),c.arc(D,q,13,0,Wt),c.fill(),c.fillStyle="#0E0705",c.beginPath(),c.arc(D,q,6.4,0,Wt),c.fill(),c.fillStyle="rgba(255,255,255,.96)",c.beginPath(),c.arc(D-4.4,q-5.2,4.2,0,Wt),c.fill(),c.fillStyle="rgba(255,255,255,.7)",c.beginPath(),c.arc(D+4.6,q+4.6,1.9,0,Wt),c.fill(),s>0&&(c.fillStyle=wu,c.fillRect(F-19,v-23,38,4+s*43));let tt=c.createLinearGradient(0,v-20.5,0,v-9);tt.addColorStop(0,"rgba(60,30,20,.35)"),tt.addColorStop(1,"rgba(60,30,20,0)"),c.fillStyle=tt,c.fillRect(F-19,v-22,38,13),c.restore();let Z=v-20.5+s*20.5;c.strokeStyle=p,c.lineWidth=3.6,c.beginPath(),c.ellipse(F,v+s*10,17.5,20.5-s*10,0,xt*1.06,xt*1.94),c.stroke(),c.lineWidth=2.6,c.beginPath(),c.moveTo(F+P*15,Z+9-s*3),c.lineTo(F+P*22.5,Z+3-s*2),c.stroke(),c.strokeStyle="rgba(150,80,55,.28)",c.lineWidth=1.8,c.beginPath(),c.ellipse(F,v+1,17.5,21,0,xt*.12,xt*.88),c.stroke()}else if(n==="F")c.fillStyle="rgba(200,110,80,.22)",c.beginPath(),c.ellipse(F,v+17,15,4.5,0,0,Wt),c.fill(),c.strokeStyle=p,c.lineWidth=7,c.beginPath(),c.arc(F,v+9,15.5,xt*1.1,xt*1.9),c.stroke(),c.lineWidth=3,c.beginPath(),c.moveTo(F+P*14.5,v-3),c.lineTo(F+P*19.5,v-8),c.stroke();else{c.strokeStyle=p,c.lineWidth=5.8,c.beginPath(),c.moveTo(F-15,v+1),c.quadraticCurveTo(F,v+9,F+15,v+1),c.stroke(),c.lineWidth=2.6;for(let L of[-.9,-.2,.55]){let D=F+L*12*P;c.beginPath(),c.moveTo(D,v+6.5-Math.abs(L)*3),c.lineTo(D+P*1.5,v+11.5-Math.abs(L)*3),c.stroke()}}}let x=143,w="#B2534A",T="#6A1F24",R=P=>{c.save(),P(),c.clip(),c.fillStyle="#FBF7F2",c.fillRect(m-40,x-20,80,24),c.fillStyle="#D9585E",c.beginPath(),c.ellipse(m,x+24,14,9,0,0,Wt),c.fill(),c.restore()};switch(c.strokeStyle=w,c.lineWidth=4.6,t.boca){case"sorriso":{let P=()=>{c.beginPath(),c.moveTo(m-31,x-9),c.quadraticCurveTo(m,x+1,m+31,x-9),c.quadraticCurveTo(m+26,x+28,m,x+29),c.quadraticCurveTo(m-26,x+28,m-31,x-9),c.closePath()};P(),c.fillStyle=T,c.fill(),R(P),P(),c.stroke(),c.strokeStyle="rgba(160,80,60,.4)",c.lineWidth=2.2;for(let F of[-1,1])c.beginPath(),c.arc(m+F*37,x-4,5,F<0?-1.2:xt-.5,F<0?.6:xt+1.3),c.stroke();break}case"leve":c.beginPath(),c.moveTo(m-21,x-3),c.quadraticCurveTo(m,x+10,m+21,x-3),c.stroke(),c.fillStyle="rgba(190,90,80,.5)",c.beginPath(),c.ellipse(m,x+8.5,9,2.6,0,0,Wt),c.fill();break;case"reta":c.lineWidth=5,c.beginPath(),c.moveTo(m-16,x+4),c.lineTo(m+16,x+4),c.stroke();break;case"triste":c.beginPath(),c.moveTo(m-21,x+13),c.quadraticCurveTo(m,x-3,m+21,x+13),c.stroke(),c.fillStyle="rgba(190,90,80,.45)",c.beginPath(),c.ellipse(m,x+14,8,3.2,0,0,Wt),c.fill();break;case"foco":c.lineWidth=4.4,c.beginPath(),c.moveTo(m-17,x+4),c.quadraticCurveTo(m-8,x-3,m,x+4),c.quadraticCurveTo(m+8,x+11,m+17,x+4),c.stroke();break;case"o":{let P=6+8*t.abre;c.fillStyle=T,c.beginPath(),c.ellipse(m,x+7,9.5,P,0,0,Wt),c.fill(),c.lineWidth=4,c.strokeStyle=w,c.stroke(),c.fillStyle="#D9585E",c.beginPath(),c.ellipse(m,x+7+P*.5,5,P*.35,0,0,Wt),c.fill();break}default:{let P=10+34*t.abre,F=()=>{c.beginPath(),c.moveTo(m-29,x-7),c.quadraticCurveTo(m,x-4,m+29,x-7),c.quadraticCurveTo(m+22,x-6+P*1.55,m,x-6+P*1.55),c.quadraticCurveTo(m-22,x-6+P*1.55,m-29,x-7),c.closePath()};F(),c.fillStyle=T,c.fill(),c.save(),F(),c.clip(),c.fillStyle="#FBF7F2",c.fillRect(m-34,x-12,68,11+P*.1),c.fillStyle="#D9585E",c.beginPath(),c.ellipse(m,x-5+P*1.2,14,Math.max(3,P*.34),0,0,Wt),c.fill(),c.restore(),F(),c.lineWidth=4.2,c.strokeStyle=w,c.stroke()}}if(h>=0){let P=h/24;c.fillStyle=`rgba(96,165,250,${1-P})`;let F=m-_-8,L=v+20+P*70;c.beginPath(),c.moveTo(F,L-10),c.quadraticCurveTo(F+9,L+4,F,L+6),c.quadraticCurveTo(F-9,L+4,F,L-10),c.fill()}d.needsUpdate=!0}},wc=i=>{let t={...Yi,...i};for(let e of Du)t[e]=(i[e]||Yi[e]).slice();return t};function Fe(i,t={}){let e=wc(t),n=Math.sin(i*1.8);return e.lean+=.012*n,t.aL||(e.aL=[.03*n,.12,.2]),t.aR||(e.aR=[.03*n,.12,.2]),t.lL||(e.lL=[.02,.04]),t.lR||(e.lR=[.02,.04]),e}var Ru=[1.25,1.4];function Fn(i,t,e={}){let n=wc({alt:t,lL:Ru,lR:Ru,...e});return n.lean+=.01*Math.sin(i*1.8),n}function Eg(i,t,e){let n=t==="corre",s=t==="triste",r=n?1.3:s?.72:.95,a=n?.62:s?.3:.44,o=i/r*Wt,h=Math.sin(o),l=Math.cos(o),u=n?1.25:.75,f=wc({lL:[a*h,.12+u*Math.max(0,l)],lR:[-a*h,.12+u*Math.max(0,-l)],aL:[-a*.85*h,.12,(n?1.3:.3)+.15*Math.max(0,-h)],aR:[a*.85*h,.12,(n?1.3:.3)+.15*Math.max(0,h)],lean:n?.22:s?.16:.05,twist:.1*h,nod:s?.45:0,boca:s?"triste":n?"aberta":"leve"});return f.alt=.07+.82*Math.cos(a*Math.abs(h))+(n?.05*Math.abs(l):0),f}function Rc(i,t,e){if(e>=1)return t;if(e<=0)return i;let n={...t};for(let s of Sg)n[s]=Ct(i[s]??Yi[s],t[s]??Yi[s],e);for(let s of Du)n[s]=(i[s]||Yi[s]).map((r,a)=>Ct(r,(t[s]||Yi[s])[a],e));if(e<.5)for(let s of bg)n[s]=i[s];return n}var Cu=[3.2,3,xt],xc=[3.2,2.3,xt],Nr=[6.8,1.36,xt],Fr=[6.8,1.95,xt],Ur=[.92,3.2,xt/4],vc=[1.36,3.64,xt/4],Pu=[.62,1.85,-xt/2],Vo=[.98,4.9,-xt/2],Dr=[5.78,4.98],Iu=[8.55,3.62],Os=[...Iu,Ac(Iu,Dr)+.06],Lu=[7.45,1.95],Ho=[...Lu,Ac(Lu,[6.8,.3])],Go=[3.4,5.25,xt/4],li=(i,t,e={})=>({tipo:"andar",vel:i,via:t,...e}),xe=(i,t,e={})=>({tipo:"acao",dur:i,pose:t,...e}),yc=(i,t)=>(e,n,s)=>{let r=jn(e),a=Rc(i(s),t(s),r);return a.lean+=.35*Math.sin(xt*e),a},Mc=(i,t)=>(e,n,s)=>{let r=1-jn(e),a=Rc(i(s),t(s),r);return a.lean+=.4*Math.sin(xt*e),a},Kn=4.05;function Nu(i,t){let e=jn(Qe(i,0,1))*(1-jn(Qe(i,5,5.6))),n=0;i>1.1&&i<3.5?n=.5-.5*Math.cos((i-1.1)*Wt*.75):i>=3.5&&i<3.85?n=jn(Qe(i,3.5,3.85)):i>=3.85&&i<Kn?n=1-Xo(Qe(i,3.85,Kn)):n=0;let s=Fe(t,{lean:.9*e,hz:-.12*e,nod:-.55*e,alt:.89-.1*e,aL:[Ct(0,1.35,e),Ct(.12,-.12,e),Ct(.2,.15,e)],aR:[Ct(0,.1+.55*(1-n),e),Ct(.12,.05,e),Ct(.2,1.45+.75*n,e)],lL:[.32*e,.18*e],lR:[-.12*e,.06*e],olhar:[0,-1.2*e],boca:"foco",item:e>.3?"tacoShot":"tacoV"});return s.bolas=i<Kn?"ini":"jogo",s}function Sc(i,t){let e=Fe(t,{olhos:"F",boca:"aberta",boch:.8});if(e.abre=.6+.4*Math.abs(Math.sin(t*6)),i<.3){let n=Xo(Qe(i,0,.3));e.alt=.89-.12*n,e.lL=[.5*n,1*n],e.lR=[.5*n,1*n],e.aL=[.3*n,.4,.6],e.aR=[.3*n,.4,.6]}else if(i<.85){let n=Qe(i,.3,.85);e.dy=.55*4*n*(1-n);let s=Bs(Qe(i,.3,.45));e.aL=[Ct(.3,2.9,s),.45,.2],e.aR=[Ct(.3,2.9,s),.45,.2],e.lL=[.35*Math.sin(xt*n),.8*Math.sin(xt*n)],e.lR=[.35*Math.sin(xt*n),.8*Math.sin(xt*n)]}else if(i<1.05){let n=Math.sin(xt*Qe(i,.85,1.05));e.alt=.89-.1*n,e.lL=[.4*n,.8*n],e.lR=[.4*n,.8*n],e.aL=[2.9,.45,.2],e.aR=[2.9,.45,.2]}else{let n=(i-1.05)/.62,s=Math.floor(n)%2?1:-1,r=n%1,a=Math.sin(xt*r);if(e.dy=.08*a,e.side=s*.16*a,e.twist=s*.25*a,e.turn=-s*.3*a,e.roll=s*.15*a,e.aL=s>0?[2.8,.5,.3]:[1.2,-.1,1.6],e.aR=s>0?[1.2,-.1,1.6]:[2.8,.5,.3],e.lL=[s<0?.5*a:0,s<0?.9*a:.1],e.lR=[s>0?.5*a:0,s>0?.9*a:.1],i<1.3){let o=jn(Qe(i,1.05,1.3));e.aL=e.aL.map((h,l)=>Ct([2.9,.45,.2][l],h,o)),e.aR=e.aR.map((h,l)=>Ct([2.9,.45,.2][l],h,o))}}return e}var Tg={tranquilo:{inicio:Cu,padrao:{boca:"leve",boch:.15},passos:[xe(16,(i,t,e)=>{let n=Math.sin(t*.9)*.08+Math.sin(t*2.3)*.03,s=Ae(t,6.2,7.5)+Ae(t,12.6,13.6),r=o=>Math.max(0,Math.sin(e*10+o))*.12,a=[.85,-.22,1.25];return Fn(e,.62,{lean:-.1+n*.3-.08*s,side:n,nod:.15-.25*s,turn:n*.6,aL:[Ct(a[0]+r(0),2.7,s),Ct(a[1],.5,s),Ct(a[2],.4,s)],aR:[Ct(a[0]+r(2),2.7,s),Ct(a[1],.5,s),Ct(a[2],.4,s)],item:"controle",boca:s>.4?"aberta":"foco",olhos:s>.5?"F":"A",boch:.15+.5*s,dy:.04*s*Math.abs(Math.sin(t*9))})},{tv:"jogo"}),xe(1.2,Mc(i=>Fe(i),i=>Fn(i,.62,{lean:-.1})),{ate:xc}),xe(3,(i,t,e)=>{let n=Ae(t,.1,2.8,.6);return Fe(e,{aL:[2.95*n,.25,.3],aR:[2.95*n,.25,.3],lean:-.12*n,side:Math.sin(t*2.2)*.12*n,nod:-.2*n,olhos:n>.5?"Z":"A",boca:n>.5?"o":"leve",dy:.03*n})}),li(1.15,[[1.65,2.3],[1.65,4.25],[Vo[0],Vo[1]]]),xe(5,(i,t,e)=>{let n=Ae(t,.3,4.6,.5),s=Math.sin(t*3)*.1*Qe(t,1,3);return Fe(e,{aL:[1*n,-.1,1*n],aR:[(1.05+s)*n,-.12,.9*n],lean:.08*n,nod:.25*n,olhar:[0,1]})}),xe(4.6,(i,t,e)=>{let n=Ae(t,.8,2,.35)+Ae(t,2.9,3.9,.35);return Fe(e,{aR:[.6+.7*n,-.25,1.75+.35*n],nod:-.3*n,olhos:n>.5?"Z":"A",boca:n>.5?"reta":"sorriso",boch:.35,item:"xicara"})},{ate:[Vo[0],Vo[1],xt/3]}),li(1.1,[[1.65,4.25],[1.65,2.3],[xc[0],xc[1]]],{item:"xicara"}),xe(1.2,yc(i=>Fe(i,{aR:[.6,-.25,1.75]}),i=>Fn(i,.62,{lean:-.1,aR:[.6,-.25,1.75]})),{ate:Cu,item:"xicara"}),xe(2.2,(i,t,e)=>{let n=Ae(t,.1,2.1,.5);return Fn(e,.62,{lean:-.1+.35*n,aR:[Ct(.6,.95,n),-.2,Ct(1.75,.9,n)],aL:[.4*n,0,.8*n],item:t<1.1?"xicara":"controle"})})]},feliz:{inicio:Os,padrao:{boca:"sorriso",boch:.35},passos:[xe(3.2,(i,t,e)=>{let n=Math.sin(t*9)*.12*Ae(t,.4,2.8);return Fe(e,{aL:[.75,.05,1.05],aR:[1.95+n,-.45,1.05],nod:-.3,olhar:[0,-1.5],item:"tacoV",boca:"leve"})},{bolas:"ini"}),xe(5.6,(i,t,e)=>Nu(t,e)),xe(3,(i,t,e)=>{let n=Math.abs(Math.sin(t*xt/.42))*Ae(t,.2,2.8,.3),s=Ae(t,0,2.9,.35);return Fe(e,{aL:[.55,.05,1.2],aR:[Ct(0,2.5+.35*n,s),.25,Ct(.2,.9-.5*n,s)],dy:.03*n,lean:-.06*s,nod:-.15*s,olhos:s>.5?"F":"A",boca:s>.3?"aberta":"sorriso",boch:.7,item:"tacoV",bolas:"fim"})}),li(1.25,[[8.65,2.55],[Ho[0],Ho[1]]],{item:"tacoV",bolas:"fim"}),xe(4.6,(i,t,e)=>{let n=Ae(t,1.4,3.6,.4),s=Math.sin(t*6)*.1*Ae(t,.3,1.3);return Fe(e,{aL:[.55,.05,1.2],aR:[Ct(0,1.3,n),-.15,Ct(.2,1.7,n)],lean:.1,nod:.05+s,item:"tacoV",bolas:"fim",boca:n>.5?"aberta":"sorriso",olhos:n>.5?"F":"A"})}),li(1.25,[[8.65,2.55],[Os[0],Os[1]]],{item:"tacoV",bolas:"fim"}),xe(.9,(i,t,e)=>Fe(e,{aL:[.55,.05,1.2],item:"tacoV",bolas:i<.6?"fim":"ini"}))]},euforico:{inicio:Go,padrao:{olhos:"F",boch:.8},passos:[xe(3.6,(i,t,e)=>Sc(t,e)),xe(3.4,(i,t,e)=>Sc(t,e)),xe(2.2,(i,t,e)=>{let n=Xo(i),s=Fe(e,{aL:[1.5,1.2,.2],aR:[1.5,1.2,.2],boca:"aberta",olhos:"F",boch:.8});return s.yawAdd=n*Wt,s.dy=.12*Math.sin(xt*i),s}),xe(4.4,(i,t,e)=>{let n=t%1.1/1.1,s=n<.55?Xo(n/.55):1-Bs((n-.55)/.45),r=Fe(e,{aL:[.5,.2,1.3],aR:[Ct(.3,2.8,s),.15,Ct(1.4,.2,s)],lean:-.08*s,nod:-.15*s,dy:.05*s,item:n<.5?"nota":"",boca:"aberta",olhos:"F",boch:.8});return r.solta=n>.5&&n<.6?Math.floor(t/1.1)+1:0,r}),li(2.3,[[5.3,3.35],[Ho[0],Ho[1]]],{estilo:"corre"}),xe(3.4,(i,t,e)=>{let n=t%.85/.85,s=Math.sin(xt*n);return Fe(e,{dy:.35*s,aL:[2.9,.4,.2],aR:[2.9,.4,.2],lL:[.3*s,.7*s],lR:[.3*s,.7*s],boca:"aberta",olhos:"F"})}),li(2.3,[[5.3,3.35],[Go[0],Go[1]]],{estilo:"corre"}),xe(5,(i,t,e)=>Sc(1.05+t%2.48,e),{ate:Go})]},preocupado:{inicio:Nr,padrao:{sob:"tenso",boca:"foco"},passos:[xe(9,(i,t,e)=>{let n=Math.max(0,Math.sin(e*14))*.12,s=Math.max(0,Math.sin(e*14+2.2))*.12,r=Ae(t,3,5.6,.6),a=Ae(t,6.6,7.9,.3);return Fn(e,.6,{lean:.14+.2*r,nod:.1+.08*Math.sin(t*1.7)-.1*r,hz:.03,aL:[.5+n,-.12,1.07],aR:a>.05?[Ct(.5,2.3,a),Ct(-.12,.6,a),Ct(1.07,2.4+.15*Math.sin(e*16),a)]:[.5+s,-.12,1.07],olhar:[.3*Math.sin(t*2),-.5]})},{mon:"foco"}),xe(3.6,(i,t,e)=>{let n=Ae(t,0,3.6,.45),s=Math.sin(e*9)*.12*n;return Fn(e,.6,{lean:.14-.25*n,nod:-.1*n,turn:s,aL:[Ct(.5,2.5,n),Ct(-.12,.7,n),Ct(1.07,2.3,n)],aR:[Ct(.5,2.5,n),Ct(-.12,.7,n),Ct(1.07,2.3,n)],balao:Ae(t,.3,3.4,.3),balaoT:"\u{1F630}",boca:"o",abre:.4})}),xe(1.2,Mc(i=>Fe(i),i=>Fn(i,.6,{lean:.1})),{ate:Fr}),li(.85,[[5.5,2.35],[7.9,2.45],[Fr[0],Fr[1]]],{pensativo:!0}),xe(3.4,(i,t,e)=>{let n=Ae(t,.1,3.3,.4),s=Math.sin(xt*Qe(t,.8,2.2));return Fe(e,{aR:[Ct(0,1.3,n),-.25,Ct(.2,2.2,n)],alt:.89-.02*s,nod:.25*n,lean:.06*s,olhos:s>.6?"Z":"A",boca:"triste",sob:"triste",balao:Ae(t,.6,3),balaoT:"\u{1F4C9}"})},{ate:[Fr[0],Fr[1],xt*.3]}),xe(1.2,yc(i=>Fe(i),i=>Fn(i,.6,{lean:.14})),{ate:Nr})]},triste:{inicio:Ur,padrao:{sob:"triste",boca:"triste",nuvem:1,lagrima:1},passos:[xe(11.5,(i,t,e)=>{let n=Ae(t,.2,4.6,.6),s=Math.sin(xt*Qe(t,5.2,6.8)),r=Ae(t,7.2,11.2,.6);return Fn(e,.55,{lean:.32+.25*n-.12*r+.04*s,nod:.35+.25*n-.3*r,turn:-.5*r,aL:[Ct(.45,1.55,n),Ct(.05,-.32,n),Ct(.5,2.45,n)],aR:[Ct(.45,1.55,n),Ct(.05,-.32,n),Ct(.5,2.45,n)],olhos:n>.5?"Z":"A",olhar:r>.3?[-1.4,-.6]:[0,1.2],dy:-.01*s})}),xe(1.6,Mc(i=>Fe(i,{lean:.12,nod:.3}),i=>Fn(i,.55,{lean:.32,nod:.35,aL:[.45,.05,.5],aR:[.45,.05,.5]})),{ate:vc}),li(.62,[[1.68,3.15],[1.5,2.35],[Pu[0],Pu[1]]],{estilo:"triste"}),xe(9.5,(i,t,e)=>{let n=Ae(t,.8,7.8,.6),s=Math.sin(xt*Qe(t,3.6,5.2)),r=Ae(t,5.6,7.4,.5);return Fe(e,{aL:[Ct(0,1.75,n),-.1*n,Ct(.2,.55,n)],alt:.89-.02*s,lean:.06+.1*r,nod:.1+.3*r-.1*n,side:-.05*r,olhar:[0,-.5]})}),li(.62,[[1.5,2.35],[1.68,3.15],[vc[0],vc[1]]],{estilo:"triste"}),xe(1.6,yc(i=>Fe(i,{lean:.12,nod:.3}),i=>Fn(i,.55,{lean:.32,nod:.35,aL:[.45,.05,.5],aR:[.45,.05,.5]})),{ate:Ur})]}};function Ag(i){let t=i.inicio.slice(),e=0,n=[];for(let s of i.passos){let r=t.slice();if(s.tipo==="andar"){let a=[r,...s.via],o=0,h=[];for(let f=1;f<a.length;f++){let c=Math.hypot(a[f][0]-a[f-1][0],a[f][1]-a[f-1][1]);c>1e-6&&h.push({a:a[f-1],b:a[f],d0:o,L:c,yaw:Ac(a[f-1],a[f])}),o+=c}let l=o/s.vel,u=a[a.length-1];n.push({...s,t0:e,dur:l,segs:h,dist:o,de:r}),t=[u[0],u[1],h[h.length-1].yaw],e+=l}else{let a=s.ate||t;n.push({...s,t0:e,de:r,ate:a}),t=a.slice(),e+=s.dur}}return{passos:n,total:e,padrao:i.padrao||{}}}function Fu(i,t,e,n){let s,r;if(i.tipo==="andar"){let o=je(t/i.dur)*i.dist,h=i.segs.length-1;for(let m=0;m<i.segs.length;m++)if(o<=i.segs[m].d0+i.segs[m].L){h=m;break}let l=i.segs[h],u=je((o-l.d0)/l.L),f=l.yaw,c=i.segs[h+1],d=i.segs[h-1];c&&l.L*(1-u)<.35&&(f=Wo(l.yaw,c.yaw,.5*(1-l.L*(1-u)/.35))),d&&l.L*u<.35&&(f=Wo(d.yaw,l.yaw,.5+.5*(l.L*u/.35))),r=[Ct(l.a[0],l.b[0],u),Ct(l.a[1],l.b[1],u),f],s=Eg(o,i.estilo,e),i.pensativo&&(s.aR=[1.25,-.25,2.25],s.aL=[.6,-.35,1.5],s.nod+=.18,s.boca="foco",s.sob="tenso"),i.item==="xicara"&&(s.aR=[.6,-.25,1.75]),i.item==="tacoV"&&(s.aL=[.55,.05,1.2]),s.item=i.item||"",i.bolas&&(s.bolas=i.bolas)}else{let o=je(t/i.dur),h=jn(o);r=i.de===i.ate?i.de:[Ct(i.de[0],i.ate[0],h),Ct(i.de[1],i.ate[1],h),Wo(i.de[2],i.ate[2],h)],s=i.pose(o,t,e),i.item&&!s.item&&(s.item=i.item),i.bolas&&!s.bolas&&(s.bolas=i.bolas)}let a=n.padrao;for(let o in a)(!(o in s)||s[o]===Yi[o])&&(s[o]=a[o]);return{pose:s,pos:r,s:i}}function wg(i,t){let e=(t%i.total+i.total)%i.total,n=i.passos.findIndex(h=>e<h.t0+h.dur);n<0&&(n=i.passos.length-1);let s=i.passos[n],r=e-s.t0,a=Fu(s,r,t,i),o=.45;if(r<o){let h=i.passos[(n-1+i.passos.length)%i.passos.length],l=Fu(h,h.dur-.001,t,i),u=jn(r/o);a.pose=Rc(l.pose,a.pose,u),a.pos=[Ct(l.pos[0],a.pos[0],u),Ct(l.pos[1],a.pos[1],u),Wo(l.pos[2],a.pos[2],u)]}return a.tt=e,a}var Rg=Object.fromEntries(Object.entries(Tg).map(([i,t])=>[i,Ag(t)])),Ec=class{constructor(){let t=$("#C08552",{r:.9}),e=$("#8B5A35",{r:.9}),n=$("#2B1B14",{r:.4}),s=this.g=new Nt;this.corpo=new Nt,s.add(this.corpo),Nn(this.corpo,t,.12,.26,0,0,0,{rx:xt/2}),this.cab=new Nt,this.cab.position.set(0,.12,.2),this.corpo.add(this.cab),se(this.cab,t,.115,0,.04,0),se(this.cab,$("#D9A577"),.06,0,0,.1,{s:[1,.8,1.2]}),se(this.cab,n,.025,0,.02,.17),se(this.cab,n,.016,-.045,.08,.1),se(this.cab,n,.016,.045,.08,.1),this.lingua=se(this.cab,$("#F87171"),.025,0,-.04,.13,{s:[1,.5,1.4]});for(let r of[-1,1])qt(new sn(.055,12,10),e,this.cab,r*.1,.07,-.01,{s:[.45,1.2,.9],rz:r*.4});this.patas=[];for(let[r,a]of[[-.07,.15],[.07,.15],[-.07,-.15],[.07,-.15]]){let o=new Nt;o.position.set(r,-.04,a),this.corpo.add(o),Nn(o,t,.04,.12,0,-.1,0),this.patas.push(o)}this.rabo=new Nt,this.rabo.position.set(0,.06,-.2),this.corpo.add(this.rabo),Nn(this.rabo,t,.025,.14,0,.08,-.02,{rx:-.6}),Dn(s,!0,!1),this.zzz=new Nt,s.add(this.zzz);for(let r=0;r<2;r++){let a=qe(64,64);a.g.font="bold 52px system-ui",a.g.fillStyle="#6366F1",a.g.textAlign="center",a.g.fillText("z",32,48);let o=new Ni(new vi({map:a.t,transparent:!0,depthWrite:!1}));o.scale.setScalar(.16-r*.04),this.zzz.add(o)}}quadro(t,e){let n=this.corpo;this.zzz.visible=t==="dorme";let s=Math.sin(e*(t==="dorme"?2:14))*(t==="dorme"?.2:.7);if(this.rabo.rotation.set(0,s,0),this.lingua.visible=t!=="dorme",t==="dorme")n.position.set(0,.1+.008*Math.sin(e*2),0),n.rotation.set(0,0,.12),this.patas.forEach((r,a)=>r.rotation.set(a<2?-1.35:1.35,0,0)),this.cab.rotation.set(.5,.25,0),this.cab.position.set(0,.04,.22),this.zzz.children.forEach((r,a)=>{let o=(e*.45+a*.5)%1;r.position.set(.12+o*.1,.32+o*.35,.2),r.material.opacity=1-o});else if(t==="senta")n.position.set(0,.2,0),n.rotation.set(-.55,0,0),this.patas.forEach((r,a)=>r.rotation.set(a<2?.55:-.9,0,0)),this.cab.position.set(0,.12,.2),this.cab.rotation.set(.45+.08*Math.sin(e*1.3),.3*Math.sin(e*.7),.15*Math.sin(e*1.1));else{let r=Math.abs(Math.sin(e*5.2));n.position.set(0,.2+.22*r,0),n.rotation.set(-.25*r,0,0),this.patas.forEach((a,o)=>a.rotation.set((o<2?-.6:.6)*r,0,0)),this.cab.position.set(0,.12,.2),this.cab.rotation.set(-.15,0,0)}}};function ty(i,t){return new Tc(i,t)}var Tc=class{constructor(t,e){this.el=t,this.d={};let n=this.renderer=new Uo({antialias:!0,alpha:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.outputColorSpace=$e,n.toneMapping=vr,n.toneMappingExposure=1,n.shadowMap.enabled=!0,n.shadowMap.type=zi,n.domElement.className="of-canvas",n.domElement.setAttribute("role","img"),t.appendChild(n.domElement);let s=this.scene=new Di,r=new Fs(n);s.environment=r.fromScene(new zo,.04).texture,s.environmentIntensity=.32,this.cam=new De(30,1,.1,80),this.alvo=Ce(4.4,.95,3.55),this.az=xt/4,this.el_=.5,this.zoom=1,this.camModo="sala",this.camAtual=null,this.tAnt=performance.now(),this.t0=performance.now(),this.notas=[],this.hist=[],this.feed=[],this.flash={},this.construir(),this.boneco=new bc(e.cor,e.emoji),s.add(this.boneco.root),s.add(this.boneco.blob),this.cao=new Ec,s.add(this.cao.g),this.calibrarTacada(),this.ligarControles(),this.ro=new ResizeObserver(()=>this.redimensionar()),this.ro.observe(t),this.redimensionar(),this.atualizar(e),this.reduz=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,this.laco=this.laco.bind(this),this.raf=requestAnimationFrame(this.laco)}construir(){let t=this.scene;this.hemi=new gr("#E3EBFF","#B08A64",.9),t.add(this.hemi);let e=this.key=new As("#FFF4E3",1.8);e.position.set(11,12,11),e.target.position.set(4,0,3.5),t.add(e,e.target),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.bias=-4e-4,e.shadow.normalBias=.025,e.shadow.radius=4,Object.assign(e.shadow.camera,{left:-7.5,right:7.5,top:7,bottom:-7,near:2,far:40}),this.fill=new As("#CFE0FF",.35),this.fill.position.set(-4,6,8),t.add(this.fill);let n=qe(1024,1024);this.desenharPiso(n),n.t.wrapS=n.t.wrapT=gs,n.t.repeat.set(gn/4.5,_n/4.5);let s=qt(new We(gn,_n),new Ne({map:n.t,roughness:.55,metalness:0}),t,gn/2,0,_n/2,{rx:-xt/2,cast:!1});rt(t,$("#8A5A34",{r:.8}),[-rn,-.22,-rn],[gn+.05,-.001,_n+.05],.02,{cast:!1}),rt(t,$("#E6E3DD",{r:.9}),[-rn-.06,-.3,-rn-.06],[gn+.11,-.2,_n+.11],.04,{cast:!1});let r=$("#EEF1F6",{r:.95}),a=$("#E5E9F1",{r:.95}),o=$("#C9D1DD",{r:.9});rt(t,r,[-rn,0,-rn],[gn,Oe,0],.005);let h=.95,l=2.65,u=.92,f=2.38;rt(t,a,[-rn,0,0],[0,Oe,h],.005),rt(t,a,[-rn,0,l],[0,Oe,_n],.005),rt(t,a,[-rn,0,h],[0,u,l],.005),rt(t,a,[-rn,f,h],[0,Oe,l],.005),rt(t,o,[-rn-.005,Oe,-rn-.005],[gn+.005,Oe+.03,.005],.01),rt(t,o,[-rn-.005,Oe,0],[.005,Oe+.03,_n+.005],.01),rt(t,o,[gn-.001,0,-rn],[gn+.004,Oe+.03,0],.001),rt(t,o,[-rn,0,_n-.001],[0,Oe+.03,_n+.004],.001);let c=$("#FFFFFF",{r:.6});rt(t,c,[0,0,0],[gn,.1,.02],.005),rt(t,c,[0,0,0],[.02,.1,_n],.005),this.ceu=qe(256,256),qt(new We(l-h,f-u),new Ge({map:this.ceu.t,toneMapped:!1}),t,-.1,(u+f)/2,(h+l)/2,{ry:xt/2,cast:!1,recv:!1}),qt(new We(l-h,f-u),new Ne({color:"#DDF1FF",transparent:!0,opacity:.12,roughness:.05,metalness:.3}),t,-.03,(u+f)/2,(h+l)/2,{ry:xt/2,cast:!1,recv:!1});let d=$("#FFFFFF",{r:.4});rt(t,d,[-.06,u-.02,h-.06],[.04,f+.04,h],.01),rt(t,d,[-.06,u-.02,l],[.04,f+.04,l+.06],.01),rt(t,d,[-.06,f,h],[.04,f+.06,l],.01),rt(t,d,[-.06,(u+f)/2-.025,h],[0,(u+f)/2+.025,l],.01),rt(t,d,[-.06,u,(h+l)/2-.025],[0,f,(h+l)/2+.025],.01),rt(t,$("#F1F5F9",{r:.5}),[-.06,u-.06,h-.12],[.16,u,l+.12],.015);let m=$("#C7D2FE",{r:1});for(let[Y,S]of[[h-.42,h-.06],[l+.06,l+.42]])for(let g=0;g<4;g++)Nn(t,m,.05,2.45,.08,1.38,Y+.05+g*(S-Y-.1)/3,{});Jt(t,$("#94A3B8",{m:.6,r:.3}),.015,.015,l-h+1,.08,f+.25,(h+l)/2,{rx:xt/2});let v=qe(64,64),_=v.g.createLinearGradient(0,0,64,0);_.addColorStop(0,"rgba(255,255,255,.9)"),_.addColorStop(1,"rgba(255,255,255,0)"),v.g.fillStyle=_,v.g.fillRect(0,0,64,64);let p=new Le;p.setAttribute("position",new ne([.02,.005,h+.1,.02,.005,l-.1,3,.005,l+1.5,3,.005,h+1.3],3)),p.setAttribute("uv",new ne([0,0,0,1,1,1,1,0],2)),p.setIndex([0,1,2,0,2,3]),this.feixe=new pe(p,new Ge({map:v.t,color:"#FFE7A3",transparent:!0,opacity:.3,blending:ki,depthWrite:!1,toneMapped:!1})),t.add(this.feixe);let M=qe(512,512);this.desenharTapete(M),qt(new Xi(3.3,.016,5,2,.007),new Ne({map:M.t,roughness:1}),t,3.35,.009,3.85,{cast:!1});let C=$("#9A6B43",{r:.7}),y=$("#7A5233",{r:.8});rt(t,y,[1.6,0,0],[4.8,Oe,.025],.002,{cast:!1});for(let Y=1.62;Y<4.78;Y+=.1)rt(t,C,[Y,.1,.02],[Y+.06,Oe-.02,.05],.008,{cast:!1});let A=$("#3F3A36",{r:.6}),E=$("#B07A4C",{r:.6});rt(t,A,[1.95,.12,.05],[4.45,.52,.48],.02),rt(t,E,[1.97,.18,.47],[3.18,.48,.49],.01),rt(t,E,[3.22,.18,.47],[4.43,.48,.49],.01);for(let Y of[2.05,4.35])for(let S of[.12,.42])Jt(t,$("#111827"),.015,.015,.12,Y,.06,S);rt(t,$("#F8FAFC",{r:.3}),[2.3,.52,.18],[2.62,.58,.4],.02),rt(t,$("#111827",{r:.4}),[3.85,.52,.2],[3.98,.86,.33],.02),rt(t,$("#111827",{r:.4}),[2.95,.52,.2],[3.08,.86,.33],.02),rt(t,$("#0B0F19",{r:.25,m:.4}),[2.25,1,.06],[4.15,2.06,.12],.02),this.tv=qe(512,288),qt(new We(1.84,1),new Ge({map:this.tv.t,toneMapped:!1}),t,3.2,1.53,.123,{cast:!1,recv:!1}),this.tvLuz=new Yn("#818CF8",1.4,4.5,1.6),this.tvLuz.position.set(3.2,1.5,.9),t.add(this.tvLuz);let I=$("#C89A6B",{r:.55});rt(t,I,[2.62,.36,1.45],[3.8,.42,2],.03),rt(t,$("#E7D6C3"),[2.7,.08,1.52],[3.72,.11,1.93],.01);for(let Y of[2.68,3.74])for(let S of[1.5,1.95])Jt(t,$("#3F3A36"),.02,.02,.36,Y,.18,S);rt(t,$("#F43F5E"),[2.8,.42,1.6],[3.1,.44,1.82],.005,{ry:.2}),rt(t,$("#38BDF8"),[2.84,.44,1.62],[3.1,.455,1.8],.005,{ry:-.1}),this.ctrlMesa=this.fazerControle(),this.ctrlMesa.position.set(3.45,.44,1.72),this.ctrlMesa.rotation.y=.4,t.add(this.ctrlMesa);let x=$("#0F766E",{r:.95}),w=$("#14857B",{r:.95}),T=$("#2BB3A3",{r:1});rt(t,x,[2,.08,2.6],[4.4,.42,3.5],.06),rt(t,x,[2,.08,3.22],[4.4,.98,3.52],.08),rt(t,w,[1.96,.08,2.58],[2.2,.66,3.52],.07),rt(t,w,[4.2,.08,2.58],[4.44,.66,3.52],.07),rt(t,T,[2.22,.4,2.62],[3.19,.54,3.24],.06),rt(t,T,[3.21,.4,2.62],[4.18,.54,3.24],.06),rt(t,T,[2.24,.5,3],[3.18,.92,3.24],.07,{rx:-.12}),rt(t,T,[3.22,.5,3],[4.16,.92,3.24],.07,{rx:-.12}),rt(t,$("#FCD34D",{r:1}),[2.28,.5,2.95],[2.62,.82,3.1],.06,{rz:.15,rx:-.2});for(let Y of[2.06,4.34])for(let S of[2.66,3.44])Jt(t,$("#3F3A36"),.025,.02,.08,Y,.04,S);let R=new Nt;R.position.set(Ur[0],0,Ur[1]),R.rotation.y=Ur[2],t.add(R);let P=$("#B45309",{r:.95}),F=$("#D97706",{r:.95});rt(R,P,[-.42,.1,-.36],[.42,.4,.4],.06),rt(R,P,[-.42,.1,-.44],[.42,1.05,-.2],.08,{rx:.1}),rt(R,F,[-.5,.1,-.4],[-.32,.62,.4],.07),rt(R,F,[.32,.1,-.4],[.5,.62,.4],.07),rt(R,$("#F59E0B",{r:1}),[-.32,.38,-.25],[.32,.5,.38],.05);for(let Y of[-.44,.44])for(let S of[-.36,.36])Jt(R,$("#3F3A36"),.025,.018,.1,Y,.05,S);let L=new Nt;L.position.set(.32,0,4),t.add(L),Jt(L,$("#1F2937",{m:.6,r:.4}),.14,.16,.03,0,.015,0),Jt(L,$("#1F2937",{m:.6,r:.4}),.012,.012,1.5,0,.77,0),this.cupula=Jt(L,$("#FEF3C7",{r:.8,e:"#FFD58A",ei:0}),.12,.2,.26,0,1.6,0,{seg:28}),this.lampLuz=new Yn("#FFC978",0,4.2,1.8),this.lampLuz.position.set(.35,1.5,4),t.add(this.lampLuz),this.lampHalo=Us("#FFD58A",1.1,0),this.lampHalo.position.set(.34,1.58,4),t.add(this.lampHalo);let D=$("#F8FAFC",{r:.5});rt(t,D,[.02,0,4.35],[.58,.88,5.45],.02),rt(t,$("#334155",{r:.35}),[0,.88,4.32],[.62,.92,5.48],.01),rt(t,$("#E2E8F0"),[.57,.1,4.4],[.585,.82,4.88],.004),rt(t,$("#E2E8F0"),[.57,.1,4.92],[.585,.82,5.4],.004);let q=new Nt;q.position.set(.24,.92,4.9),t.add(q),rt(q,$("#111827",{r:.3,m:.3}),[-.14,0,-.14],[.14,.38,.14],.03),rt(q,$("#D1D5DB",{r:.25,m:.8}),[-.04,.24,-.13],[.2,.34,.13],.02),Jt(q,$("#FFFFFF",{r:.3}),.035,.03,.08,.14,.04,0),this.vapor=[];for(let Y=0;Y<4;Y++){let S=Us("#FFFFFF",.1,0);S.material.blending=ai,S.position.set(.38,1,4.9),t.add(S),this.vapor.push(S)}for(let Y=0;Y<3;Y++)Jt(t,$(["#F43F5E","#FACC15","#38BDF8"][Y]),.035,.03,.08,.38,.96,5.2+Y*.09);let X=qe(256,192);this.desenharQuadro(X),rt(t,$("#1F2937",{r:.4}),[0,1.45,4.45],[.04,2.25,5.4],.01),qt(new We(.87,.72),new Ne({map:X.t,roughness:.6}),t,.045,1.85,4.925,{ry:xt/2,cast:!1});let tt=$("#9C6B45",{r:.5}),Z=$("#1F2937",{r:.4,m:.6});rt(t,tt,[5.75,.72,.02],[7.85,.77,.82],.02);for(let Y of[5.82,7.78])rt(t,Z,[Y-.03,0,.08],[Y+.03,.72,.14],.01),rt(t,Z,[Y-.03,0,.7],[Y+.03,.72,.76],.01),rt(t,Z,[Y-.03,.02,.08],[Y+.03,.06,.76],.01);rt(t,$("#F1F5F9",{r:.5}),[7.25,.18,.06],[7.7,.7,.62],.02),rt(t,$("#CBD5E1"),[7.27,.42,.62],[7.68,.44,.63],.003),rt(t,$("#111827",{r:.5}),[6.15,.775,.5],[6.25,.79,.62],.004),rt(t,$("#1E293B",{r:.9}),[6,.77,.42],[7.55,.775,.78],.004),rt(t,$("#E5E7EB",{r:.4}),[6.42,.775,.55],[7.08,.8,.7],.01),this.teclas=rt(t,$("#94A3B8",{r:.5,e:"#60A5FA",ei:.25}),[6.44,.8,.565],[7.06,.805,.69],.003),this.mouse=qt(new sn(.04,16,10),$("#E5E7EB",{r:.3}),t,7.28,.79,.62,{s:[.8,.4,1.2]}),Jt(t,Z,.11,.12,.012,6.8,.776,.22),rt(t,Z,[6.775,.77,.16],[6.825,1,.2],.01),rt(t,$("#0B0F19",{r:.25,m:.4}),[6.19,.86,.17],[7.41,1.42,.22],.02),this.mon=qe(1024,448),this.monMesh=qt(new We(1.18,.516),new Ge({map:this.mon.t,toneMapped:!1}),t,6.8,1.14,.222,{cast:!1,recv:!1}),this.monLuz=new Yn("#60A5FA",1.1,2.6,1.8),this.monLuz.position.set(6.8,1.15,.75),t.add(this.monLuz),this.monHalo=Us("#60A5FA",1.6,.18),this.monHalo.position.set(6.8,1.14,.12),t.add(this.monHalo),Jt(t,$("#F8FAFC",{r:.3}),.04,.035,.1,5.98,.82,.55),qt(new fn(.025,.008,8,14),$("#F8FAFC"),t,6.03,.83,.55,{ry:0}),this.planta(5.95,.77,.2,.45);let K=this.cadeira=new Nt;K.position.set(Nr[0],0,Nr[1]+.02),K.rotation.y=Nr[2],t.add(K);let et=$("#1F2937",{r:.7}),bt=$("#2457F5",{r:.7});this.cadAcento=bt;for(let Y=0;Y<5;Y++){let S=Y*Wt/5;rt(K,Z,[-.02,.05,0],[.02,.08,.3],.01,{ry:S}).position.set(Math.sin(S)*.15,.065,Math.cos(S)*.15),se(K,$("#111827"),.03,Math.sin(S)*.29,.03,Math.cos(S)*.29)}Jt(K,Z,.025,.03,.4,0,.27,0),rt(K,et,[-.26,.44,-.27],[.26,.53,.25],.05),rt(K,bt,[-.17,.53,-.2],[.17,.535,.2],.005);let yt=new Nt;yt.position.set(0,.5,-.27),yt.rotation.x=-.12,K.add(yt),rt(yt,et,[-.25,.05,-.08],[.25,.85,0],.06),rt(yt,bt,[-.12,.12,0],[.12,.72,.006],.004),rt(yt,et,[-.15,.8,-.07],[.15,.98,0],.05);for(let Y of[-1,1])rt(K,Z,[Y*.27-.015,.5,-.1],[Y*.27+.015,.68,-.06],.005),rt(K,et,[Y*.27-.04,.68,-.2],[Y*.27+.04,.71,.12],.015);rt(t,$("#7A5233",{r:.6}),[5.9,1.86,0],[7.7,1.9,.28],.01);let Kt=5.98;["#EF4444","#2457F5","#F59E0B","#10B981","#8B5CF6","#0EA5E9","#F43F5E"].forEach((Y,S)=>{let g=.05+S%3*.015,N=.2+S%2*.05;rt(t,$(Y,{r:.7}),[Kt,1.9,.04],[Kt+g,1.9+N,.24],.006,{rz:S===6?-.25:0}),Kt+=g+.008}),this.planta(7.5,1.9,.12,.3);let Ot=new Nt;Ot.position.set(5.25,2.35,.03),t.add(Ot),Jt(Ot,$("#1F2937",{r:.4}),.27,.27,.05,0,0,0,{rx:xt/2,seg:40}),Jt(Ot,$("#FFFFFF",{r:.5}),.24,.24,.052,0,0,.002,{rx:xt/2,seg:40});for(let Y=0;Y<12;Y++){let S=Y*Wt/12;rt(Ot,$("#1F2937"),[-.006,-.025,0],[.006,.025,.01],.002).position.set(Math.sin(S)*.2,Math.cos(S)*.2,.03),Ot.children[Ot.children.length-1].rotation.z=-S}let V=(Y,S,g,N)=>{let k=new Nt;return k.position.z=N,Ot.add(k),rt(k,$(g),[-S/2,-.02,0],[S/2,Y,.006],.002),k};this.pH=V(.12,.018,"#1F2937",.03),this.pM=V(.18,.012,"#1F2937",.037),this.pS=V(.2,.005,"#EF4444",.044),se(Ot,$("#EF4444"),.014,0,0,.05);let H=this.sinuca={x0:5.7,x1:8.1,z0:3.75,z1:5.05,y:.8},lt=$("#5B3A1E",{r:.5}),Lt=$("#15803D",{r:.95});rt(t,lt,[H.x0+.15,.12,H.z0+.15],[H.x1-.15,.72,H.z1-.15],.04);for(let Y of[H.x0+.2,H.x1-.2])for(let S of[H.z0+.2,H.z1-.2])rt(t,lt,[Y-.07,0,S-.07],[Y+.07,.3,S+.07],.03);rt(t,Lt,[H.x0+.08,.7,H.z0+.08],[H.x1-.08,.78,H.z1-.08],.01);let ot=$("#7C4A21",{r:.45});rt(t,ot,[H.x0,.68,H.z0],[H.x1,.84,H.z0+.1],.025),rt(t,ot,[H.x0,.68,H.z1-.1],[H.x1,.84,H.z1],.025),rt(t,ot,[H.x0,.68,H.z0],[H.x0+.1,.84,H.z1],.025),rt(t,ot,[H.x1-.1,.68,H.z0],[H.x1,.84,H.z1],.025);let kt=$("#0B0B0B",{r:.9});for(let[Y,S]of[[H.x0+.11,H.z0+.11],[H.x1-.11,H.z0+.11],[H.x0+.11,H.z1-.11],[H.x1-.11,H.z1-.11],[(H.x0+H.x1)/2,H.z0+.09],[(H.x0+H.x1)/2,H.z1-.09]])Jt(t,kt,.055,.055,.012,Y,.785,S,{cast:!1});let Ee=Y=>se(t,$(Y,{r:.15}),.03,0,0,0,{seg:20,seg2:14});[["#DC2626",6.25,3.98],["#1D4ED8",7.85,4.78],["#111827",6.95,3.95],["#7C3AED",6.05,4.15]].forEach(([Y,S,g])=>Ee(Y).position.set(S,.81,g)),this.bB=Ee("#F8FAFC"),this.bA=Ee("#FACC15"),this.pendLuz=new Yn("#FFE3A8",0,3.2,1.6),this.pendLuz.position.set(6.9,1.95,4.4),t.add(this.pendLuz),this.planta(.45,0,.45,1.25),this.plantaFrente=this.planta(8.5,0,6.95,1.05);let $t=this.dec={},Ht=Y=>{let S=new Nt;return S.visible=!1,t.add(S),$t[Y]=S,S};{let Y=Ht("fliperama"),S=$("#7C3AED",{r:.5});rt(Y,S,[8.18,0,.15],[8.86,1.8,.8],.03),rt(Y,$("#1F2937"),[8.2,.95,.72],[8.84,1.05,1],.02,{rx:.15}),this.arcade=qe(128,128),qt(new We(.56,.46),new Ge({map:this.arcade.t,toneMapped:!1}),Y,8.52,1.3,.805,{rx:-.12,cast:!1}),rt(Y,$("#F472B6",{e:"#F472B6",ei:.9}),[8.2,1.66,.6],[8.84,1.78,.81],.02),se(Y,$("#EF4444",{r:.3}),.025,8.4,1.07,.88),se(Y,$("#FACC15",{r:.3}),.02,8.6,1.07,.9),se(Y,$("#22C55E",{r:.3}),.02,8.68,1.07,.88),Dn(Y)}{let Y=Ht("cofre"),S=$("#D4A017",{r:.25,m:.9});rt(Y,S,[8.22,0,1.3],[8.86,.72,1.96],.04),Jt(Y,$("#713F12",{m:.6,r:.4}),.1,.1,.03,8.54,.4,1.97,{rx:xt/2}),rt(Y,$("#713F12",{m:.6}),[8.535,.32,1.98],[8.545,.48,1.99],.002);for(let g=0;g<5;g++)Jt(Y,$("#FACC15",{r:.3,m:.85}),.06,.06,.02,8.05+g%2*.04,.01+g*.021,2.25,{});for(let g=0;g<3;g++)Jt(Y,$("#FACC15",{r:.3,m:.85}),.06,.06,.02,7.92,.01+g*.021,2.12,{});Dn(Y)}{let Y=Ht("aquario");rt(Y,$("#5B3A1E",{r:.6}),[.04,0,6.35],[.66,.74,7.32],.02),qt(new Xi(.58,.5,.92,2,.01),new Ne({color:"#7DD3FC",transparent:!0,opacity:.32,roughness:.05,metalness:.1,depthWrite:!1}),Y,.35,1,6.835,{cast:!1}),rt(Y,$("#E7D7B8"),[.08,.74,6.4],[.62,.79,7.28],.01),rt(Y,$("#1F2937"),[.05,1.24,6.38],[.65,1.28,7.3],.01),this.peixes=[],["#F97316","#FACC15","#38BDF8","#F43F5E"].forEach((S,g)=>{let N=new Nt;se(N,$(S,{r:.4}),.035,0,0,0,{s:[.6,.8,1.4],seg:12}),qt(new Bi(.03,.05,8),$(S),N,0,0,-.06,{rx:-xt/2}),Y.add(N),this.peixes.push(N)});for(let S=0;S<5;S++){let g=qt(new Bi(.03,.18+S*.03,6),$("#16A34A",{r:.8}),Y,.2+S%3*.12,.85,6.5+S*.17);g.userData.alga=S}this.bolhas=[];for(let S=0;S<6;S++){let g=se(Y,$("#FFFFFF",{op:.6,r:.1}),.008,.45,.8,7.1,{seg:8,seg2:6,cast:!1});this.bolhas.push(g)}this.aqLuz=Us("#38BDF8",1,.25),this.aqLuz.position.set(.35,1,6.85),Y.add(this.aqLuz)}{let Y=Ht("touro"),S=$("#E3B341",{r:.18,m:1});rt(Y,$("#E5E7EB",{r:.5}),[8.15,0,6.6],[8.85,.55,7.3],.03);let g=new Nt;g.position.set(8.5,.55,6.95),g.rotation.y=-xt*.6,Y.add(g),Nn(g,S,.13,.28,0,.3,0,{rx:xt/2}),se(g,S,.12,0,.33,-.1);let N=new Nt;N.position.set(0,.36,.27),N.rotation.x=.5,g.add(N),se(N,S,.09,0,0,0,{s:[1,.9,1.2]});for(let k of[-1,1])qt(new fn(.07,.015,8,16,xt*.7),S,N,k*.07,.07,0,{rz:k>0?-.2:xt+.2});for(let[k,j]of[[-.08,.15],[.08,.15],[-.08,-.15],[.08,-.15]])Nn(g,S,.035,.12,k,.12,j);qt(new fn(.08,.012,6,12,xt),S,g,0,.32,-.24,{ry:xt/2}),Dn(Y)}{let Y=Ht("globo");Jt(Y,$("#94A3B8"),.004,.004,.3,3.2,Oe-.15,2),this.globo=qt(new fr(.2,2),new Ne({color:"#E2E8F0",metalness:1,roughness:.12,flatShading:!0}),Y,3.2,Oe-.48,2),this.spots=["#F43F5E","#22D3EE","#FACC15","#A855F7"].map(S=>{let g=new xr(S,0,8,.35,.6,1.2);return g.position.set(3.2,Oe-.48,2),Y.add(g,g.target),g})}{let Y=Ht("porquinho"),S=$("#F9A8D4",{r:.5}),g=new Nt;g.position.set(7.6,.77,.35),g.rotation.y=-.6,Y.add(g),this.porco=g,se(g,S,.09,0,.09,0,{s:[.9,.85,1.15]}),Jt(g,$("#F472B6"),.035,.035,.04,0,.08,.11,{rx:xt/2});for(let N of[-1,1])qt(new Bi(.025,.05,8),S,g,N*.045,.17,.05,{}),se(g,$("#111827"),.008,N*.035,.12,.085);for(let[N,k]of[[-.04,.05],[.04,.05],[-.04,-.05],[.04,-.05]])Jt(g,S,.02,.02,.05,N,.02,k);rt(g,$("#9D174D"),[-.025,.165,-.03],[.025,.172,.03],.002),Dn(Y)}{let Y=Ht("neon"),S=qe(256,256);S.g.font="900 210px system-ui, sans-serif",S.g.textAlign="center",S.g.textBaseline="middle",S.g.shadowColor="#FB923C",S.g.shadowBlur=24,S.g.fillStyle="#FDBA74",S.g.fillText("\u20BF",128,138),this.neonM=new Ge({map:S.t,transparent:!0,toneMapped:!1,depthWrite:!1}),qt(new We(.6,.6),this.neonM,Y,.03,2.2,6.6,{ry:xt/2,cast:!1}),this.neonHalo=Us("#FB923C",1.1,.35),this.neonHalo.position.set(.15,2.2,6.6),Y.add(this.neonHalo)}{let Y=Ht("arcoiris");this.arcoM=[],["#F43F5E","#F59E0B","#22C55E","#3B82F6"].forEach((g,N)=>{let k=new Ge({color:g,toneMapped:!1});this.arcoM.push(k),qt(new fn(.42-N*.07,.014,8,48,xt),k,Y,3.2,2.28,.07,{cast:!1})});let S=Us("#FDE68A",1.4,.25);S.position.set(3.2,2.45,.15),Y.add(S)}{let Y=Ht("dardos"),S=qe(128,128);[["#111827",62],["#F43F5E",50],["#FEF3C7",34],["#F43F5E",16]].forEach(([g,N])=>{S.g.fillStyle=g,S.g.beginPath(),S.g.arc(64,64,N,0,Wt),S.g.fill()}),qt(new ur(.22,32),new Ne({map:S.t,roughness:.8}),Y,.012,1.75,5.95,{ry:xt/2,cast:!1});for(let[g,N]of[[1.77,5.93],[1.7,6]])Jt(Y,$("#1D4ED8"),.006,.006,.14,.08,g,N,{rz:xt/2+.2})}{let Y=Ht("trofeu"),S=$("#E3B341",{r:.2,m:1}),g=[[0,0],[.05,0],[.05,.02],[.015,.03],[.015,.08],[.06,.11],[.07,.18],[0,.18]].map(([N,k])=>new Rt(N,k));qt(new bs(g,24),S,Y,7.15,1.9,.14);for(let N of[-1,1])qt(new fn(.03,.007,6,12),S,Y,7.15+N*.07,2.04,.14,{});Dn(Y)}this.dec.cachorro={set visible(Y){this._v=Y},get visible(){return this._v},_v:!1};let re=260,jt=new We(.05,.03);this.confete=new Ui(jt,new Ge({side:ln,toneMapped:!1}),re);let me=["#F43F5E","#F59E0B","#22C55E","#3B82F6","#A855F7","#FACC15","#FFFFFF"].map(Y=>new Gt(Y));this.confData=Array.from({length:re},(Y,S)=>({x:Math.random()*gn,z:Math.random()*_n,y0:Math.random()*Oe,v:.4+Math.random()*.5,r:Math.random()*Wt,rv:(Math.random()-.5)*8,sw:Math.random()*Wt}));for(let Y=0;Y<re;Y++)this.confete.setColorAt(Y,me[Y%me.length]);this.confete.visible=!1,this.confete.frustumCulled=!1,t.add(this.confete),this.notaGeo=new Xi(.16,.004,.08,1,.001);let ce=qe(128,64);ce.g.fillStyle="#86EFAC",ce.g.fillRect(0,0,128,64),ce.g.strokeStyle="#15803D",ce.g.lineWidth=5,ce.g.strokeRect(4,4,120,56),ce.g.fillStyle="#15803D",ce.g.font="bold 34px system-ui",ce.g.textAlign="center",ce.g.fillText("R$",64,44),this.notaMat=new Ne({map:ce.t,roughness:.8}),this.itens={},this.itens.controle=this.fazerControle(),t.add(this.itens.controle);let we=new Nt;Jt(we,$("#FFFFFF",{r:.3}),.042,.036,.1,0,0,0),Jt(we,$("#6B3E1F",{r:.2}),.038,.038,.004,0,.046,0),qt(new fn(.028,.008,8,14),$("#FFFFFF"),we,.045,0,0,{}),Dn(we,!0,!1),this.itens.xicara=we,t.add(we);let ge=new pe(this.notaGeo,this.notaMat);ge.castShadow=!0,this.itens.nota=ge,t.add(ge);let he=new Nt;Jt(he,$("#B7793A",{r:.4}),.011,.02,1.45,0,.725,0),Jt(he,$("#1F2937",{r:.4}),.0205,.021,.35,0,.175,0),Jt(he,$("#E8F1FF"),.011,.011,.02,0,1.455,0),Jt(he,$("#3B82F6"),.0112,.0112,.008,0,1.468,0),Dn(he,!0,!1),this.itens.taco=he,t.add(he);let O=this.nuvem=new Nt,ze=$("#94A3B8",{r:1});[[0,0,0,.16],[-.14,-.03,0,.12],[.15,-.02,.02,.13],[.05,.08,0,.12],[-.06,.02,.08,.1]].forEach(([Y,S,g,N])=>se(O,ze,N,Y,S,g,{cast:!1})),this.gotas=[];for(let Y=0;Y<8;Y++){let S=Jt(O,_g("#60A5FA",{op:.85}),.006,.006,.07,-.15+Y*.043,-.15,(Y%3-1)*.05,{cast:!1});this.gotas.push(S)}O.visible=!1,t.add(O),this.balao=qe(128,128),this.balaoT="",this.balaoS=new Ni(new vi({map:this.balao.t,transparent:!0,depthWrite:!1})),this.balaoS.visible=!1,t.add(this.balaoS)}fazerControle(){let t=new Nt;rt(t,$("#1F2937",{r:.35}),[-.08,-.015,-.035],[.08,.015,.035],.015);for(let e of[-1,1])se(t,$("#1F2937",{r:.35}),.035,e*.07,-.005,-.015,{s:[1,.7,1.3]});return se(t,$("#60A5FA",{e:"#60A5FA",ei:.6}),.009,-.04,.016,0),se(t,$("#F87171",{e:"#F87171",ei:.6}),.009,.04,.016,0),Dn(t,!0,!1)}planta(t,e,n,s){let r=new Nt;r.position.set(t,e,n),this.scene.add(r);let a=s*.18;Jt(r,$("#E7E5E4",{r:.6}),a,a*.8,s*.32,0,s*.16,0),Jt(r,$("#57534E",{r:1}),a*.95,a*.95,.01,0,s*.32,0);let o=new Nt;o.position.y=s*.32,r.add(o);let h=[$("#16A34A",{r:.7,ds:!0}),$("#22C55E",{r:.7,ds:!0}),$("#15803D",{r:.7,ds:!0})],l=9;for(let u=0;u<l;u++){let f=u*Wt/l+u%2*.3,c=.35+u%3*.2,d=s*(.5+u%4*.1),m=new Nt;m.rotation.set(0,f,0),o.add(m);let v=new Nt;v.rotation.x=c,m.add(v),qt(new sn(d*.5,10,8),h[u%3],v,0,d*.5,0,{s:[.32,1,.1]})}return Dn(r),(this.plantas||(this.plantas=[])).push(o),r}calibrarTacada(){let t=this.boneco,e=Os[2];t.root.position.set(Os[0],0,Os[1]),t.root.rotation.y=e,t.aplicar(Nu(Kn,0));let n=this.dirTaco(t.mR,t.mL),s=t.mR.clone().addScaledVector(n,1.45-.25),r=this.sinuca,a=[je(s.x+n.x*.04,r.x0+.2,r.x1-.2),je(s.z+n.z*.04,r.z0+.2,r.z1-.2)],o=[Dr[0]-a[0],Dr[1]-a[1]],h=Math.hypot(...o),l=[o[0]/h,o[1]/h],u=[a[0]+l[0]*Math.min(.55,h*.4),a[1]+l[1]*Math.min(.55,h*.4)];this.bolas={R:a,Y:u,C:[u[0]-l[0]*.06,u[1]-l[1]*.06],u:l,fimB:[u[0]-l[0]*.06+l[0]*.12-l[1]*.1,u[1]-l[1]*.06+l[1]*.12+l[0]*.1]}}dirTaco(t,e){let n=new U().subVectors(e,t);return n.lengthSq()<1e-6&&n.set(0,0,1),n.normalize()}desenharPiso({g:t}){t.fillStyle="#C8915B",t.fillRect(0,0,1024,1024);let e=["#C8915B","#BF8752","#D29C66","#C38C56","#B88050","#CD9760"],n=7,s=()=>(n=n*16807%2147483647,n/2147483647),r=1024/8;for(let a=0;a<8;a++){let o=-s()*400;for(;o<1024;){let h=260+s()*300;t.fillStyle=e[Math.floor(s()*e.length)],t.fillRect(o,a*r,h,r),t.strokeStyle="rgba(90,50,20,.10)",t.lineWidth=1.2;for(let l=0;l<7;l++){let u=a*r+8+s()*(r-16);t.beginPath(),t.moveTo(o,u),t.bezierCurveTo(o+h*.3,u+(s()-.5)*8,o+h*.6,u+(s()-.5)*8,o+h,u+(s()-.5)*4),t.stroke()}t.fillStyle="rgba(70,35,10,.45)",t.fillRect(o,a*r,2,r),o+=h}t.fillStyle="rgba(70,35,10,.5)",t.fillRect(0,a*r,1024,2.5)}}desenharTapete({g:t}){t.fillStyle="#C7D2FE",t.fillRect(0,0,512,512),t.strokeStyle="#A5B4FC",t.lineWidth=10,qi(t,22,22,468,468,24),t.stroke(),t.setLineDash([16,12]),t.lineWidth=4,t.strokeStyle="#818CF8",qi(t,44,44,424,424,18),t.stroke(),t.setLineDash([]);for(let e=0;e<2600;e++)t.fillStyle=`rgba(99,102,241,${Math.random()*.06})`,t.fillRect(Math.random()*512,Math.random()*512,2,2)}desenharQuadro({g:t}){let e=t.createLinearGradient(0,0,0,192);e.addColorStop(0,"#1E3A8A"),e.addColorStop(1,"#0F172A"),t.fillStyle=e,t.fillRect(0,0,256,192),t.strokeStyle="#22C55E",t.lineWidth=6,t.lineJoin="round",t.beginPath(),[[20,150],[60,130],[95,140],[130,95],[165,105],[200,60],[236,40]].forEach(([n,s],r)=>r?t.lineTo(n,s):t.moveTo(n,s)),t.stroke(),t.fillStyle="#FACC15",t.beginPath(),t.arc(236,40,8,0,Wt),t.fill(),t.fillStyle="rgba(255,255,255,.85)",t.font="bold 20px system-ui",t.fillText("LONGO PRAZO",20,34)}desenharCeu(t){let{g:e,t:n}=this.ceu,s=this.h,r=this.noite,a=s==="triste"||s==="preocupado",o=r?a?"#1E293B":"#0B1026":s==="triste"?"#64748B":s==="preocupado"?"#7C93B5":"#4FA3FF",h=r?a?"#334155":"#312E81":s==="triste"?"#94A3B8":s==="preocupado"?"#B6C4D8":"#BFE3FF",l=e.createLinearGradient(0,0,0,256);if(l.addColorStop(0,o),l.addColorStop(1,h),e.fillStyle=l,e.fillRect(0,0,256,256),r&&!a){for(let d=0;d<40;d++){let m=.5+.5*Math.sin(t*2+d*7);e.fillStyle=`rgba(255,255,255,${.3+.6*m})`,e.fillRect(d*97%256,d*53%150,2,2)}e.fillStyle="#FEF3C7",e.beginPath(),e.arc(190,52,20,0,Wt),e.fill(),e.fillStyle=o,e.beginPath(),e.arc(200,46,18,0,Wt),e.fill()}else if(!a){e.save(),e.translate(195,60),e.rotate(t*.2),e.fillStyle="#FDE047";for(let d=0;d<10;d++)e.rotate(Wt/10),e.fillRect(-2,26,4,12);e.restore(),e.fillStyle="#FDE047",e.beginPath(),e.arc(195,60,22,0,Wt),e.fill()}let u=(d,m,v,_)=>{e.fillStyle=_,e.beginPath(),e.ellipse(d,m,34*v,14*v,0,0,Wt),e.ellipse(d+18*v,m-10*v,22*v,16*v,0,0,Wt),e.ellipse(d-16*v,m-6*v,18*v,13*v,0,0,Wt),e.fill()},f=a?r?"#475569":"#CBD5E1":r?"rgba(148,163,184,.35)":"#FFFFFF";if(u(t*8%360-50,70,1,f),u((t*5+180)%360-50,110,.75,f),a&&u((t*6+90)%360-50,40,1.2,f),[[0,150,40],[36,120,30],[62,165,44],[100,105,34],[130,140,40],[166,90,30],[192,150,36],[224,125,40]].forEach(([d,m,v],_)=>{e.fillStyle=r?"#111827":a?"#475569":"#64748B",e.fillRect(d,m,v,256-m);for(let p=m+8;p<240;p+=14)for(let M=d+5;M<d+v-6;M+=10){let C=r?(M*7+p*13+_)%5<2:!1;e.fillStyle=C?"#FDE68A":r?"#1F2937":"rgba(255,255,255,.28)",e.fillRect(M,p,5,7)}}),e.fillStyle=r?"#0F172A":a?"#3F5F4F":"#4ADE80",e.fillRect(0,238,256,18),a){e.strokeStyle="rgba(224,242,254,.75)",e.lineWidth=2;for(let d=0;d<36;d++){let m=(d*37+t*40)%280-12,v=(d*71+t*420)%280-20;e.beginPath(),e.moveTo(m,v),e.lineTo(m-6,v+16),e.stroke()}}n.needsUpdate=!0}desenharTV(t,e){let{g:n,t:s}=this.tv,r=512,a=288;if(e==="jogo"){let o=n.createLinearGradient(0,0,0,a);o.addColorStop(0,"#1E1B4B"),o.addColorStop(1,"#4338CA"),n.fillStyle=o,n.fillRect(0,0,r,a);for(let d=0;d<30;d++)n.fillStyle="rgba(255,255,255,.7)",n.fillRect((d*83-t*10)%r+(d*83-t*10<0?r:0),d*37%160,2,2);let h=t*120%64;n.fillStyle="#16A34A",n.fillRect(0,232,r,56),n.fillStyle="#22C55E";for(let d=-h;d<r;d+=64)n.fillRect(d,232,32,8);let l=[[200,170],[380,140],[560,180]];n.fillStyle="#A16207",l.forEach(([d,m])=>{let v=((d-t*120)%600+600)%600-80;n.fillRect(v,m,80,14),n.fillStyle="#FACC15",n.beginPath(),n.arc(v+40,m-20+Math.sin(t*6)*3,8,0,Wt),n.fill(),n.fillStyle="#A16207"});let f=196-Math.abs(Math.sin(t*3.2))*70;n.fillStyle="#EF4444",n.fillRect(110,f,26,36),n.fillStyle="#1D4ED8",n.fillRect(110,f+22,26,14),n.fillStyle="#F1C19A",n.fillRect(114,f-14,18,16);let c=((420-t*160)%560+560)%560-40;n.fillStyle="#7C2D12",n.beginPath(),n.ellipse(c,220,18,12,0,xt,0),n.fill(),n.fillRect(c-18,220,36,12),n.fillStyle="#FFF",n.font="bold 20px monospace",n.fillText("MOEDAS \xD7 "+String(Math.floor(t*2)%1e3).padStart(3,"0"),16,30),n.fillText("1-1",450,30)}else{let o=this.h==="feliz"||this.h==="euforico",h=o?"#22C55E":"#EF4444";n.fillStyle="#0B1220",n.fillRect(0,0,r,a),n.strokeStyle="rgba(148,163,184,.15)",n.lineWidth=1;for(let m=60;m<230;m+=34)n.beginPath(),n.moveTo(0,m),n.lineTo(r,m),n.stroke();let l=t*.25%1.4,u=46;n.strokeStyle=h,n.lineWidth=4,n.lineJoin="round",n.beginPath();for(let m=0;m<=Math.min(u,Math.floor(u*l));m++){let v=20+m*(r-40)/u,p=(o?200-m*2.6:90+m*2.6)+Math.sin(m*1.7)*10+Math.sin(m*.6)*12;m?n.lineTo(v,p):n.moveTo(v,p)}n.stroke(),n.fillStyle="#DC2626",n.fillRect(0,0,150,40),n.fillStyle="#FFF",n.font="bold 22px system-ui",n.fillText("RADAR NEWS",12,28),Math.floor(t*1.5)%2&&(n.fillStyle="#FFF",n.beginPath(),n.arc(170,20,6,0,Wt),n.fill()),n.font="bold 14px system-ui",n.fillText("AO VIVO",182,25);let f={feliz:"CARTEIRA NO VERDE",euforico:"DIA HIST\xD3RICO NA CARTEIRA!",preocupado:"MERCADO NO VERMELHO",triste:"QUEDA FORTE HOJE"}[this.h]||"MERCADO HOJE";n.fillStyle="rgba(15,23,42,.92)",n.fillRect(0,224,r,30),n.fillStyle=h,n.fillRect(0,224,8,30),n.fillStyle="#FFF",n.font="bold 18px system-ui",n.fillText(f+(this.pctTxt?"  "+this.pctTxt:""),18,245),n.fillStyle="#1E293B",n.fillRect(0,254,r,34),n.font="bold 16px monospace";let c=this.fita(),d=-(t*60%Math.max(1,c.w));for(n.save(),n.beginPath(),n.rect(0,254,r,34),n.clip();d<r;){for(let m of c.itens)n.fillStyle="#CBD5E1",n.fillText(m.t,d,277),d+=n.measureText(m.t).width+8,n.fillStyle=m.v>=0?"#4ADE80":"#F87171",n.fillText(m.s,d,277),d+=n.measureText(m.s).width+26;if(!c.itens.length)break}n.restore()}s.needsUpdate=!0}fita(){let t=(this.d.ativos||[]).filter(n=>n.vd!=null),e=t.length?t.map(n=>({t:n.t,v:n.vd,s:(n.vd>=0?"\u25B2":"\u25BC")+Math.abs(n.vd).toFixed(2).replace(".",",")+"%"})):[{t:"IBOV",v:0,s:"\u2014"}];return{itens:e,w:e.length*160}}desenharArcade(t){let{g:e,t:n}=this.arcade;e.fillStyle="#0B0B1A",e.fillRect(0,0,128,128);for(let s=0;s<5;s++){let r=(s*30+t*40)%140-10;e.fillStyle=["#F43F5E","#22C55E","#FACC15","#38BDF8","#A855F7"][s],e.fillRect(r,20+s*14,10,8)}e.fillStyle="#22C55E",e.fillRect(56+Math.sin(t*3)*30,108,16,8),Math.floor(t*4)%2&&(e.fillStyle="#FFF",e.fillRect(64+Math.sin(t*3)*30,90-t*120%80,2,8)),e.fillStyle="#FDE047",e.font="bold 12px monospace",e.fillText("HI "+String(Math.floor(t*37)%99999).padStart(5,"0"),8,12),n.needsUpdate=!0}desenharMonitor(t){let{g:e,t:n}=this.mon,s=1024,r=448,a=this.d,o=this.h,h={triste:"#EF4444",preocupado:"#F97316",tranquilo:"#60A5FA",feliz:"#22C55E",euforico:"#FACC15"}[o],l=e.createLinearGradient(0,0,0,r);l.addColorStop(0,"#0B1220"),l.addColorStop(1,"#111A2E"),e.fillStyle=l,e.fillRect(0,0,s,r),e.fillStyle="#0F172A",e.fillRect(0,0,s,40),e.fillStyle=h,e.beginPath(),e.arc(22,20,7,0,Wt),e.fill(),e.fillStyle="#E2E8F0",e.font="bold 18px system-ui",e.fillText("RADAR DA CARTEIRA",38,27);let f=new Date().toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit",second:"2-digit"});e.font="bold 18px monospace",e.textAlign="right",e.fillText(f,s-16,27),a.fechado?(e.fillStyle="#64748B",e.font="bold 13px system-ui",e.fillText("BOLSA FECHADA",s-120,26)):a.sim&&(e.fillStyle="#F59E0B",e.font="bold 13px system-ui",e.fillText("SIMULA\xC7\xC3O",s-120,26)),e.textAlign="left",this.secao&&(e.fillStyle="#94A3B8",e.font="15px system-ui",e.fillText("\u{1F4CD} "+this.secao,260,26));let c=16,d=54;e.fillStyle="rgba(30,41,59,.65)",qi(e,c,d,330,340,14),e.fill(),e.fillStyle="#94A3B8",e.font="bold 14px system-ui",e.fillText("SEU DIA",c+16,d+28);let m=a.pct,v=m==null||!isFinite(m)?"\u2014":(m>0?"+":"")+m.toFixed(2).replace(".",",")+"%";e.fillStyle=m>0?"#4ADE80":m<0?"#F87171":"#E2E8F0",e.font="bold 64px system-ui",e.fillText(v,c+14,d+98),e.fillStyle="#CBD5E1",e.font="16px system-ui",e.fillText(this.titulo||"",c+16,d+126);let _=c+16,p=d+150,M=298,C=160;e.strokeStyle="rgba(148,163,184,.15)",e.lineWidth=1;for(let V=0;V<=4;V++)e.beginPath(),e.moveTo(_,p+V*C/4),e.lineTo(_+M,p+V*C/4),e.stroke();let y=this.hist.length?this.hist:[{v:m||0}],A=y.map(V=>V.v).concat([0]),E=Math.min(...A),I=Math.max(...A);if(I-E<.4){let V=(I+E)/2;E=V-.2,I=V+.2}let x=V=>p+C-(V-E)/(I-E)*C;e.setLineDash([4,4]),e.strokeStyle="rgba(148,163,184,.4)",e.beginPath(),e.moveTo(_,x(0)),e.lineTo(_+M,x(0)),e.stroke(),e.setLineDash([]);let w=y.length,T=y.map((V,H)=>[_+(w===1?M:H/(w-1)*M),x(V.v)]);w===1&&T.unshift([_,T[0][1]]);let R=(m||0)>=0?"#22C55E":"#EF4444",P=e.createLinearGradient(0,p,0,p+C);P.addColorStop(0,R+"55"),P.addColorStop(1,R+"00"),e.beginPath(),T.forEach(([V,H],lt)=>lt?e.lineTo(V,H):e.moveTo(V,H)),e.lineTo(T[T.length-1][0],p+C),e.lineTo(T[0][0],p+C),e.closePath(),e.fillStyle=P,e.fill(),e.strokeStyle=R,e.lineWidth=3,e.lineJoin="round",e.beginPath(),T.forEach(([V,H],lt)=>lt?e.lineTo(V,H):e.moveTo(V,H)),e.stroke();let F=T[T.length-1],L=t*1.5%1;e.fillStyle=R,e.beginPath(),e.arc(F[0],F[1],5,0,Wt),e.fill(),e.strokeStyle=R,e.globalAlpha=1-L,e.lineWidth=2,e.beginPath(),e.arc(F[0],F[1],5+L*14,0,Wt),e.stroke(),e.globalAlpha=1;let D=362,q=54,X=330;e.fillStyle="rgba(30,41,59,.65)",qi(e,D,q,X,340,14),e.fill(),e.fillStyle="#94A3B8",e.font="bold 14px system-ui",e.fillText("SEUS ATIVOS \xB7 AO VIVO",D+16,q+28);let tt=(a.ativos||[]).slice(0,8);tt.length||(e.fillStyle="#64748B",e.font="16px system-ui",e.fillText("Adicione ativos para",D+16,q+80),e.fillText("acompanhar aqui.",D+16,q+102));let Z=performance.now();tt.forEach((V,H)=>{let lt=q+48+H*36,Lt=this.flash[V.t];if(Lt&&Z-Lt.t<2500){let kt=1-(Z-Lt.t)/2500;e.fillStyle=(Lt.up?"rgba(34,197,94,":"rgba(239,68,68,")+(.35*kt).toFixed(3)+")",qi(e,D+8,lt,X-16,32,8),e.fill()}e.fillStyle="#E2E8F0",e.font="bold 17px monospace",e.fillText(V.t,D+16,lt+22),e.fillStyle="#94A3B8",e.font="15px monospace",e.textAlign="right",V.preco!=null&&e.fillText((V.moeda==="USD"?"US$ ":"R$ ")+V.preco.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),D+214,lt+22);let ot=V.vd;e.fillStyle=ot==null?"#64748B":ot>=0?"#4ADE80":"#F87171",e.font="bold 16px monospace",e.fillText(ot==null?"\u2014":(ot>=0?"\u25B2 ":"\u25BC ")+Math.abs(ot).toFixed(2).replace(".",",")+"%",D+X-16,lt+22),e.textAlign="left"});let K=708,et=54,bt=300;e.fillStyle="rgba(30,41,59,.65)",qi(e,K,et,bt,340,14),e.fill(),e.fillStyle="#94A3B8",e.font="bold 14px system-ui",e.fillText("O QUE VOC\xCA EST\xC1 FAZENDO",K+16,et+28);let yt=this.feed.slice(-8);yt.forEach((V,H)=>{let lt=et+58+H*34,Lt=H===yt.length-1,ot=Z-V.ms,kt=V.txt;Lt&&ot<700&&(kt=kt.slice(0,Math.max(1,Math.floor(kt.length*ot/700)))),e.fillStyle="#64748B",e.font="13px monospace",e.fillText(V.hora,K+16,lt),e.fillStyle=Lt?h:"#CBD5E1",e.font=(Lt?"bold ":"")+"15px system-ui",e.fillText("\u203A "+kt+(Lt&&Math.floor(t*2.5)%2?" \u258D":""),K+66,lt)}),yt.length||(e.fillStyle="#64748B",e.font="15px system-ui",e.fillText("\u203A aguardando voc\xEA\u2026"+(Math.floor(t*2)%2?" \u258D":""),K+16,et+60)),e.fillStyle="#020617",e.fillRect(0,408,s,40),e.font="bold 17px monospace";let Kt=this.fita(),zt=-(t*70%4e3);e.save(),e.beginPath(),e.rect(0,408,s,40),e.clip();let Ot=0;for(;zt<s&&Ot++<60;)for(let V of Kt.itens)e.fillStyle="#CBD5E1",e.fillText(V.t,zt,434),zt+=e.measureText(V.t).width+8,e.fillStyle=V.v>=0?"#4ADE80":"#F87171",e.fillText(V.s,zt,434),zt+=e.measureText(V.s).width+30;e.restore(),n.needsUpdate=!0}atualizar(t){let e=this.d;this.d=t;let n=t.humor||"tranquilo";this.boneco&&(this.boneco.setCor(t.cor),t.emoji!==e.emoji&&this.boneco.setEmoji(t.emoji)),this.cadAcento&&this.cadAcento.color.set(t.cor||"#2457F5"),this.titulo=t.titulo,this.pctTxt=t.pct==null||!isFinite(t.pct)?"":(t.pct>0?"+":"")+t.pct.toFixed(2).replace(".",",")+"%";let s=Object.fromEntries((e.ativos||[]).map(a=>[a.t,a]));for(let a of t.ativos||[]){let o=s[a.t];o&&o.preco!=null&&a.preco!=null&&Math.abs(o.preco-a.preco)>1e-9&&(this.flash[a.t]={t:performance.now(),up:a.preco>o.preco})}if(e.ativos&&JSON.stringify((e.ativos||[]).map(a=>[a.t,a.preco]))!==JSON.stringify((t.ativos||[]).map(a=>[a.t,a.preco]))&&this.log("cota\xE7\xF5es atualizadas"),!t.sim&&t.pct!=null&&isFinite(t.pct)){let a=this.hist[this.hist.length-1];(!a||Math.abs(a.v-t.pct)>1e-6)&&(this.hist.push({v:t.pct,t:Date.now()}),this.hist.length>60&&this.hist.shift())}n!==this.h&&(this.h&&this.log(t.sim?"simulando: "+(t.titulo||n).toLowerCase():"humor: "+(t.titulo||n).toLowerCase()),this.h=n,this.tH=performance.now(),this.aplicarHumor());let r=t.tem||{};for(let a in this.dec)this.dec[a].visible=!!r[a];this.plantaFrente&&(this.plantaFrente.visible=!r.touro),this.renderer.domElement.setAttribute("aria-label","Escrit\xF3rio 3D: "+(t.titulo||"")),this.sujo=!0}log(t){let e=new Date().toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}),n=this.feed[this.feed.length-1];n&&n.txt===t&&performance.now()-n.ms<1500||(this.feed.push({txt:t.length>26?t.slice(0,25)+"\u2026":t,hora:e,ms:performance.now()}),this.feed.length>30&&this.feed.shift(),this.ultimaAcao=performance.now(),this.sujo=!0)}aplicarHumor(){let t=xg[this.h];this.cfg=t,this.rt=Rg[this.h],this.confete.visible=this.h==="euforico";for(let e of this.notas)this.scene.remove(e.m);this.notas=[],this.aplicarLuz()}aplicarLuz(){let t=this.cfg,e=this.noite;this.hemi.intensity=t.hemi*(e?.55:1),this.hemi.color.set(e?"#A9B8E8":"#E3EBFF"),this.key.intensity=t.key*(e?.35:1),this.key.color.set(e?"#9DB0FF":t.keyCor),this.fill.intensity=e?.25:.35;let n=t.lamp||e;this.lampLuz.intensity=n?2.6:0,this.lampHalo.material.opacity=n?.55:0,this.cupula.material.emissiveIntensity=n?1.1:0;let s=t.pend||e;this.pendLuz.intensity=s?2.4:0,this.tvLuz.color.set(t.tv),this.monLuz.color.set(t.mon),this.monHalo.material.color.set(t.mon),this.feixe.material.opacity=e?.06:t.raio,this.feixe.material.color.set(e?"#A5B4FC":"#FFE7A3"),this.renderer.toneMappingExposure=t.exp*(e?.86:1),this.scene.environmentIntensity=e?.14:.32;for(let r of this.spots||[])r.intensity=this.h==="euforico"?9:0}ligarControles(){let t=this.renderer.domElement,e=null;t.style.touchAction="pan-y",t.addEventListener("pointerdown",s=>{e={x:s.clientX,y:s.clientY,az:this.az,el:this.el_,id:s.pointerId,moveu:!1}}),window.addEventListener("pointermove",s=>{if(!e||s.pointerId!==e.id)return;let r=s.clientX-e.x,a=s.clientY-e.y;if(!e.moveu&&Math.hypot(r,a)>6){e.moveu=!0;try{t.setPointerCapture(s.pointerId)}catch{}this.camModo!=="sala"&&this.setCam("sala",!0)}e.moveu&&(this.az=je(e.az-r*.006,.12,xt/2-.12),s.pointerType!=="touch"&&(this.el_=je(e.el+a*.004,.22,1)),this.sujo=!0)});let n=()=>{e&&e.moveu&&this.log("girou a c\xE2mera"),e=null};window.addEventListener("pointerup",n),window.addEventListener("pointercancel",n),t.addEventListener("dblclick",()=>{this.az=xt/4,this.el_=.5,this.setCam("sala")})}setCam(t,e){this.camModo=t,this.sujo=!0,e||this.log({sala:"vis\xE3o da sala",tela:"zoom no computador",seguir:"seguindo o boneco"}[t]||t)}redimensionar(){let t=this.el.clientWidth||600,e=Math.round(je(t<640?t*.82:t*.6,300,660));this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height=e+"px",this.cam.aspect=t/e,this.cam.updateProjectionMatrix(),this.sujo=!0}alvoCamera(t){let e=this.cam.aspect;if(this.camModo==="tela")return e<1?{pos:Ce(7.12,1.2,1.1),alvo:Ce(6.8,1.13,.22),fov:70}:{pos:Ce(7.2,1.24,1.2),alvo:Ce(6.87,1.12,.22),fov:50};if(this.camModo==="seguir"){let u=this.boneco.root.position,f=this.az+.1*Math.sin(t*.2),c=.42,d=e<1?4.6:3.9;return{pos:Ce(u.x+Math.sin(f)*Math.cos(c)*d,.95+Math.sin(c)*d,u.z+Math.cos(f)*Math.cos(c)*d),alvo:Ce(u.x,.95,u.z),fov:38}}let n=30,s=this.reduz?0:Math.sin(t*.15)*.025,r=[this.az.toFixed(3),this.el_.toFixed(3),e.toFixed(3)].join();r!==this.fitKey&&(this.fitKey=r,this.fit=this.enquadrar(this.az,this.el_,n,e));let{dist:a,alvo:o}=this.fit,h=Math.cos(this.el_),l=this.az+s;return{pos:Ce(o.x+Math.sin(l)*h*a,o.y+Math.sin(this.el_)*a,o.z+Math.cos(l)*h*a),alvo:o.clone(),fov:n}}enquadrar(t,e,n,s){let r=new De(n,s,.1,100),a=Math.cos(e),o=Ce(Math.sin(t)*a,Math.sin(e),Math.cos(t)*a),h=[];for(let d of[-.25,gn+.1])for(let m of[-.3,Oe+.05])for(let v of[-.25,_n+.1])h.push(Ce(d,m,v));let l=Ce(gn/2,.9,_n/2),u=18,f=s<1?.98:.95,c=s<1?.92:.93;for(let d=0;d<4;d++){let m=4,v=60;for(let w=0;w<22;w++){let T=(m+v)/2;r.position.copy(l).addScaledVector(o,T),r.lookAt(l),r.updateMatrixWorld(),r.updateProjectionMatrix();let R=!0;for(let P of h){let F=P.clone().project(r);if(Math.abs(F.x)>f||Math.abs(F.y)>c){R=!1;break}}R?v=T:m=T}u=v,r.position.copy(l).addScaledVector(o,u),r.lookAt(l),r.updateMatrixWorld();let _=9,p=-9,M=9,C=-9;for(let w of h){let T=w.clone().project(r);_=Math.min(_,T.x),p=Math.max(p,T.x),M=Math.min(M,T.y),C=Math.max(C,T.y)}let y=(_+p)/2,A=(M+C)/2,E=Math.tan(n*xt/360)*u,I=new U,x=new U;r.matrixWorld.extractBasis(I,x,new U),l.addScaledVector(I,y*E*s).addScaledVector(x,A*E)}return{dist:u,alvo:l}}laco(t){if(this.raf=0,!this.el.isConnected){this.destruir();return}if(document.hidden||this.el.closest(".of-pausa"))this.tAnt=performance.now();else{let n=performance.now(),s=Math.min(.05,(n-this.tAnt)/1e3);this.tAnt=n;let r=this.reduz?2:(performance.now()-this.t0)/1e3;(!this.reduz||this.sujo)&&this.quadro(r,s),this.sujo=!1}this.raf=requestAnimationFrame(this.laco)}quadro(t,e){let n=new Date().getHours(),s=window.__ofNoite!=null?!!window.__ofNoite:n<6||n>=19;s!==this.noite&&(this.noite=s,this.aplicarLuz());let r=window.__ofT!=null?window.__ofT:this.reduz?2:(performance.now()-this.tH)/1e3,a=this.boneco,o=wg(this.rt,r),h=o.pose;a.root.position.set(o.pos[0],0,o.pos[1]),a.root.rotation.y=o.pos[2]+(h.yawAdd||0),a.aplicar(h,t,e),a.desenharRosto(h,t),a.blob.position.set(o.pos[0],.004,o.pos[1]),a.blob.material.opacity=je(1-(h.dy||0)*2,.3,1);let l=this.itens,u=a.root.quaternion;l.controle.visible=h.item==="controle",this.ctrlMesa.visible=!l.controle.visible,l.controle.visible&&(l.controle.position.copy(a.mL).add(a.mR).multiplyScalar(.5).add(Ce(0,.01,0)),l.controle.quaternion.copy(u),l.controle.rotateX(-.5)),l.xicara.visible=h.item==="xicara",l.xicara.visible&&(a.R.hand.updateMatrixWorld(),l.xicara.position.copy(a.mR).add(Ce(Math.sin(o.pos[2])*.05,.06,Math.cos(o.pos[2])*.05)),l.xicara.quaternion.copy(u)),l.nota.visible=h.item==="nota",l.nota.visible&&(l.nota.position.copy(a.mR).add(Ce(0,.05,0)),l.nota.quaternion.copy(u),l.nota.rotateX(1.2));let f=l.taco;if(f.visible=h.item==="tacoV"||h.item==="tacoShot",h.item==="tacoV"){let T=Ce(Math.sin(o.pos[2])*.12,1,Math.cos(o.pos[2])*.12).normalize(),R=a.mL.clone().addScaledVector(T,-Math.max(.05,a.mL.y-.02)/T.y);f.position.copy(R),f.quaternion.setFromUnitVectors(Ce(0,1,0),T)}else if(h.item==="tacoShot"){let T=this.dirTaco(a.mR,a.mL);f.position.copy(a.mR).addScaledVector(T,-.25),f.quaternion.setFromUnitVectors(Ce(0,1,0),T)}let c=this.bolas,d=this.sinuca,m=.81,v=this.h==="feliz"?h.bolas||"fim":"ini";if(v==="ini")this.bB.position.set(c.R[0],m,c.R[1]),this.bA.position.set(c.Y[0],m,c.Y[1]),this.bA.visible=!0,this.bA.scale.setScalar(1);else if(v==="jogo"){let T=o.s&&o.s.tipo==="acao"?o.tt-o.s.t0:9,R=Qe(T,Kn,Kn+.28),P=Qe(T,Kn+.28,Kn+.95),F=Qe(T,Kn+.95,Kn+1.1),L=P>0?[Ct(c.C[0],c.fimB[0],Bs(P)),Ct(c.C[1],c.fimB[1],Bs(P))]:[Ct(c.R[0],c.C[0],R),Ct(c.R[1],c.C[1],R)];this.bB.position.set(L[0],m,L[1]);let D=[Ct(c.Y[0],Dr[0],Bs(P)),Ct(c.Y[1],Dr[1],Bs(P))];this.bA.position.set(D[0],m-.06*F,D[1]),this.bA.scale.setScalar(1-.6*F),this.bA.visible=F<1,this.bA.rotation.x+=e*20*(P>0&&P<1?1:0)}else this.bB.position.set(c.fimB[0],m,c.fimB[1]),this.bA.visible=!1;let _=Ce();if(a.head.getWorldPosition(_),this.nuvem.visible=h.nuvem>.5,this.nuvem.visible&&(this.nuvem.position.set(_.x,_.y+.7+Math.sin(t*1.6)*.03,_.z),this.gotas.forEach((T,R)=>{let P=(t*1.8+R*.37)%1;T.position.y=-.12-P*.4,T.material.opacity=.9*(1-P)})),this.balaoS.visible=h.balao>.05,this.balaoS.visible){if(h.balaoT!==this.balaoT){this.balaoT=h.balaoT;let{g:T,t:R}=this.balao;T.clearRect(0,0,128,128),T.fillStyle="#FFF",T.strokeStyle="#CBD5E1",T.lineWidth=3,qi(T,8,8,112,86,22),T.fill(),T.stroke(),T.beginPath(),T.moveTo(40,92),T.lineTo(34,120),T.lineTo(62,93),T.fill(),T.font="56px system-ui, 'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji'",T.textAlign="center",T.textBaseline="middle",T.fillText(h.balaoT,64,54),R.needsUpdate=!0}this.balaoS.position.set(_.x+.25,_.y+.55,_.z),this.balaoS.scale.setScalar(.42*h.balao),this.balaoS.material.opacity=h.balao}if(h.solta&&h.solta!==this.ultSolta){this.ultSolta=h.solta;for(let T=0;T<4;T++){let R=new pe(this.notaGeo,this.notaMat);R.castShadow=!0,R.position.copy(a.mR),this.scene.add(R);let P=Ce(Math.sin(o.pos[2]),0,Math.cos(o.pos[2]));this.notas.push({m:R,v:Ce(P.x*.6+(Math.random()-.5)*1.2,2.2+Math.random()*1.2,P.z*.6+(Math.random()-.5)*1.2),rv:Ce(Math.random()*6,Math.random()*6,Math.random()*6),vida:0})}}h.solta||(this.ultSolta=0);for(let T=this.notas.length-1;T>=0;T--){let R=this.notas[T];R.vida+=e,R.m.position.y>.01?(R.v.y-=4.5*e,R.v.multiplyScalar(.985),R.m.position.addScaledVector(R.v,e),R.m.rotation.x+=R.rv.x*e,R.m.rotation.y+=R.rv.y*e,R.m.rotation.z+=R.rv.z*e,R.v.y<-.6&&(R.v.y=-.6+Math.sin(R.vida*9)*.25)):(R.m.position.y=.006,R.m.rotation.set(0,R.m.rotation.y,0)),R.vida>6&&(this.scene.remove(R.m),this.notas.splice(T,1))}let p=this.dec.cachorro.visible;if(this.cao.g.visible=p,p){let T={triste:[1.75,3.95,.8,"dorme"],preocupado:[7.55,2.2,-2.2,"senta"],tranquilo:[2.2,2.25,1.9,"dorme"],feliz:[7.6,5.75,-2.4,"senta"],euforico:[4.35,5.7,-.9,"pula"]}[this.h];this.cao.g.position.set(T[0],0,T[1]),this.cao.g.rotation.y=T[2],this.cao.quadro(T[3],t)}let M=new Date,C=M.getSeconds()+M.getMilliseconds()/1e3,y=M.getMinutes()+C/60,A=M.getHours()%12+y/60;this.pS.rotation.z=-C/60*Wt,this.pM.rotation.z=-y/60*Wt,this.pH.rotation.z=-A/12*Wt,(this.plantas||[]).forEach((T,R)=>{T.rotation.z=Math.sin(t*.8+R)*.03,T.rotation.x=Math.sin(t*.6+R*2)*.02}),this.vapor.forEach((T,R)=>{let P=(t*.35+R/4)%1;T.position.set(.38+Math.sin(t*2+R)*.02,1+P*.4,4.9),T.material.opacity=.35*Math.sin(xt*P),T.scale.setScalar(.06+P*.12)});let E=this.h==="preocupado"&&o.s&&o.s.mon==="foco";if(this.teclas.material.emissiveIntensity=E?.4+.3*Math.abs(Math.sin(t*14)):.25,this.monLuz.intensity=1+.25*Math.sin(t*2.2)+(performance.now()-(this.ultimaAcao||0)<900?.8:0),this.dec.aquario.visible&&(this.peixes.forEach((T,R)=>{let P=t*(.5+R*.12)+R*1.7;T.position.set(.35+Math.sin(P*1.3)*.15,.95+R*.06+Math.sin(P*2)*.03,6.83+Math.cos(P)*.32),T.rotation.y=Math.atan2(-Math.sin(P)*.32,Math.cos(P*1.3)*.2)+xt}),this.bolhas.forEach((T,R)=>{let P=(t*.4+R/6)%1;T.position.set(.45+Math.sin(t*3+R)*.02,.8+P*.42,7.1-R*.02)})),this.dec.globo.visible&&(this.globo.rotation.y=t*.8,this.spots.forEach((T,R)=>{let P=t*.9+R*Wt/4;T.target.position.set(3.4+Math.cos(P)*2.2,0,5+Math.sin(P)*1.8)})),this.dec.neon.visible){let T=Math.sin(t*7)>.97||Math.sin(t*23)>.995;this.neonM.opacity=T?.35:1,this.neonHalo.material.opacity=T?.1:.35}if(this.dec.porquinho.visible&&(this.porco.position.y=.77+Math.abs(Math.sin(t*1.6))*.015),this.confete.visible){let T=this.dummy||(this.dummy=new Te);this.confData.forEach((R,P)=>{let F=Oe-(t*R.v+R.y0)%(Oe+.3);T.position.set(R.x+Math.sin(t*1.5+R.sw)*.2,F,R.z+Math.cos(t*1.2+R.sw)*.15),T.rotation.set(t*R.rv+R.r,t*R.rv*.7,R.r),T.updateMatrix(),this.confete.setMatrixAt(P,T.matrix)}),this.confete.instanceMatrix.needsUpdate=!0}let I=this.camModo==="tela";(this.reduz||t-(this.tMon||-9)>(I?1/30:1/10)||this.sujo)&&(this.tMon=t,this.desenharMonitor(t)),(this.reduz||t-(this.tTv||-9)>1/20)&&(this.tTv=t,this.desenharTV(t,this.h==="tranquilo"?"jogo":"news"),this.desenharCeu(t),this.dec.fliperama.visible&&this.desenharArcade(t));let x=this.alvoCamera(t);(!this.camAtual||this.reduz)&&(this.camAtual={pos:x.pos.clone(),alvo:x.alvo.clone(),fov:x.fov});let w=window.__ofT!=null?1:1-Math.exp(-e*4);this.camAtual.pos.lerp(x.pos,w),this.camAtual.alvo.lerp(x.alvo,w),this.camAtual.fov=Ct(this.camAtual.fov,x.fov,w),this.cam.position.copy(this.camAtual.pos),this.cam.lookAt(this.camAtual.alvo),Math.abs(this.cam.fov-this.camAtual.fov)>.01&&(this.cam.fov=this.camAtual.fov,this.cam.updateProjectionMatrix()),this.renderer.render(this.scene,this.cam)}destruir(){cancelAnimationFrame(this.raf),this.ro&&this.ro.disconnect(),this.renderer.dispose()}};export{ty as criar};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
