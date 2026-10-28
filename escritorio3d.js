var pf=0,dh=1,mf=2;var Ji=1,gf=2,dr=3,Kn=0,cn=1,En=2,Je=0,Ai=1,$i=2,ph=3,mh=4,ol=5;var On=100,xf=101,_f=102,vf=103,yf=104,gs=200,Mf=201,Sf=202,bf=203,gh=204,xh=205,mo=206,Ef=207,go=208,Tf=209,wf=210,Af=211,Rf=212,Cf=213,Pf=214,wa=0,Aa=1,Ra=2,Zs=3,Ca=4,Pa=5,Ia=6,La=7,al=0,If=1,Lf=2,Qn=0,xo=1,_o=2,vo=3,ji=4,yo=5,Mo=6,So=7,Kc="attached",Ff="detached",_h=300,Ki=301,xs=302,ll=303,cl=304,bo=306,bn=1e3,ri=1001,Fa=1002,qe=1003,Df=1004;var Eo=1005;var ln=1006,hl=1007;var Qi=1008;var pn=1009,vh=1010,yh=1011,pr=1012,ul=1013,ti=1014,Pn=1015,on=1016,fl=1017,dl=1018,ts=1020,Mh=35902,Sh=35899,bh=1021,Eh=1022,yn=1023,ai=1026,pi=1027,pl=1028,ml=1029,es=1030,gl=1031;var xl=1033,To=33776,wo=33777,Ao=33778,Ro=33779,_l=35840,vl=35841,yl=35842,Ml=35843,Sl=36196,bl=37492,El=37496,Tl=37488,wl=37489,Co=37490,Al=37491,Rl=37808,Cl=37809,Pl=37810,Il=37811,Ll=37812,Fl=37813,Dl=37814,Nl=37815,Ul=37816,Bl=37817,Ol=37818,zl=37819,kl=37820,Hl=37821,Gl=36492,Vl=36494,Wl=36495,Xl=36283,ql=36284,Po=36285,Yl=36286;var Or=2300,Da=2301,Ea=2302,Qc=2303,th=2400,eh=2401,nh=2402;var Nf=3200;var mr=0,Uf=1,Ri="",an="srgb",zr="srgb-linear",kr="linear",be="srgb";var Ta=7680;var Bf=519,Of=512,zf=513,kf=514,Zl=515,Hf=516,Gf=517,Jl=518,Vf=519,Th=35044;var wh="300 es",Jn=2e3,Js=2001;function e0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function n0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Hr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Wf(){let s=Hr("canvas");return s.style.display="block",s}var Cu={},$s=null;function Gr(...s){let t="THREE."+s.shift();$s?$s("log",t,...s):console.log(t,...s)}function Xf(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ie(...s){s=Xf(s);let t="THREE."+s.shift();if($s)$s("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function oe(...s){s=Xf(s);let t="THREE."+s.shift();if($s)$s("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function cs(...s){let t=s.join(" ");t in Cu||(Cu[t]=!0,ie(...s))}function qf(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Yf={[wa]:Aa,[Ra]:Ia,[Ca]:La,[Zs]:Pa,[Aa]:wa,[Ia]:Ra,[La]:Ca,[Pa]:Zs},li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var bc=Math.PI/180,Vr=180/Math.PI;function oi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[s&255]+un[s>>8&255]+un[s>>16&255]+un[s>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function _e(s,t,e){return Math.max(t,Math.min(e,s))}function i0(s,t){return(s%t+t)%t}function Ec(s,t,e){return(1-e)*s+e*t}function si(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Pe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Lh=class Lh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Lh.prototype.isVector2=!0;var _t=Lh,Ne=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=r[o+0],d=r[o+1],m=r[o+2],_=r[o+3];if(f!==_||l!==u||c!==d||h!==m){let g=l*u+c*d+h*m+f*_;g<0&&(u=-u,d=-d,m=-m,_=-_,g=-g);let p=1-a;if(g<.9995){let y=Math.acos(g),T=Math.sin(y);p=Math.sin(p*y)/T,a=Math.sin(a*y)/T,l=l*p+u*a,c=c*p+d*a,h=h*p+m*a,f=f*p+_*a}else{l=l*p+u*a,c=c*p+d*a,h=h*p+m*a,f=f*p+_*a;let y=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=y,c*=y,h*=y,f*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[o],u=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+h*f+l*d-c*u,t[e+1]=l*m+h*u+c*f-a*d,t[e+2]=c*m+h*d+a*u-l*f,t[e+3]=h*m-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(r/2),u=l(n/2),d=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Fh=class Fh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=i+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Tc.copy(this).projectOnVector(t),this.sub(Tc)}reflect(t){return this.sub(Tc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fh.prototype.isVector3=!0;var U=Fh,Tc=new U,Pu=new Ne,Dh=class Dh{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],_=i[0],g=i[3],p=i[6],y=i[1],T=i[4],v=i[7],b=i[2],S=i[5],C=i[8];return r[0]=o*_+a*y+l*b,r[3]=o*g+a*T+l*S,r[6]=o*p+a*v+l*C,r[1]=c*_+h*y+f*b,r[4]=c*g+h*T+f*S,r[7]=c*p+h*v+f*C,r[2]=u*_+d*y+m*b,r[5]=u*g+d*T+m*S,r[8]=u*p+d*v+m*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,m=e*f+n*u+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=f*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wc.makeScale(t,e)),this}rotate(t){return cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wc.makeRotation(-t)),this}translate(t,e){return cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Dh.prototype.isMatrix3=!0;var pe=Dh,wc=new pe,Iu=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lu=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function s0(){let s={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===be&&(i.r=bi(i.r),i.g=bi(i.g),i.b=bi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===be&&(i.r=Ys(i.r),i.g=Ys(i.g),i.b=Ys(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ri?kr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[zr]:{primaries:t,whitePoint:n,transfer:kr,toXYZ:Iu,fromXYZ:Lu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:t,whitePoint:n,transfer:be,toXYZ:Iu,fromXYZ:Lu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),s}var ve=s0();function bi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ys(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Cs,Na=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Cs===void 0&&(Cs=Hr("canvas")),Cs.width=t.width,Cs.height=t.height;let i=Cs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Cs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Hr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bi(e[n]/255)*255):e[n]=bi(e[n]);return{data:e,width:t.width,height:t.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},r0=0,js=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=oi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ac(i[o].image)):r.push(Ac(i[o]))}else r=Ac(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ac(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Na.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}var o0=0,Rc=new U,_n=class s extends li{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=ri,i=ri,r=ln,o=Qi,a=yn,l=pn,c=s.DEFAULT_ANISOTROPY,h=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=oi(),this.name="",this.source=new js(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Rc).x}get height(){return this.source.getSize(Rc).y}get depth(){return this.source.getSize(Rc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ie(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){ie(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_h)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bn:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case Fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bn:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case Fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=_h;_n.DEFAULT_ANISOTROPY=1;var Nh=class Nh{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,v=(d+1)/2,b=(p+1)/2,S=(h+u)/4,C=(f+_)/4,x=(m+g)/4;return T>v&&T>b?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=S/n,r=C/n):v>b?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=S/i,r=x/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=C/r,i=x/r),this.set(n,i,r,e),this}let y=Math.sqrt((g-m)*(g-m)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(f-_)/y,this.z=(u-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this.w=_e(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this.w=_e(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nh.prototype.isVector4=!0;var we=Nh,Ua=class extends li{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new _n(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new js(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ye=class extends Ua{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Wr=class extends _n{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ba=class extends _n{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var rl=class rl{constructor(t,e,n,i,r,o,a,l,c,h,f,u,d,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,f,u,d,m,_,g)}set(t,e,n,i,r,o,a,l,c,h,f,u,d,m,_,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Ps.setFromMatrixColumn(t,0).length(),r=1/Ps.setFromMatrixColumn(t,1).length(),o=1/Ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=o*h,d=o*f,m=a*h,_=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+m*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,m=c*h,_=c*f;e[0]=u+_*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,m=c*h,_=c*f;e[0]=u-_*a,e[4]=-o*f,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,d=o*f,m=a*h,_=a*f;e[0]=l*h,e[4]=m*c-d,e[8]=u*c+_,e[1]=l*f,e[5]=_*c+u,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,d=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-u*f,e[8]=m*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+m,e[10]=u-_*f}else if(t.order==="XZY"){let u=o*l,d=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+_,e[5]=o*h,e[9]=d*f-m,e[2]=m*f-d,e[6]=a*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(a0,t,l0)}lookAt(t,e,n){let i=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Ui.crossVectors(n,Tn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Ui.crossVectors(n,Tn)),Ui.normalize(),Ko.crossVectors(Tn,Ui),i[0]=Ui.x,i[4]=Ko.x,i[8]=Tn.x,i[1]=Ui.y,i[5]=Ko.y,i[9]=Tn.y,i[2]=Ui.z,i[6]=Ko.z,i[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],y=n[3],T=n[7],v=n[11],b=n[15],S=i[0],C=i[4],x=i[8],E=i[12],A=i[1],I=i[5],F=i[9],O=i[13],D=i[2],k=i[6],W=i[10],Y=i[14],ot=i[3],Z=i[7],rt=i[11],j=i[15];return r[0]=o*S+a*A+l*D+c*ot,r[4]=o*C+a*I+l*k+c*Z,r[8]=o*x+a*F+l*W+c*rt,r[12]=o*E+a*O+l*Y+c*j,r[1]=h*S+f*A+u*D+d*ot,r[5]=h*C+f*I+u*k+d*Z,r[9]=h*x+f*F+u*W+d*rt,r[13]=h*E+f*O+u*Y+d*j,r[2]=m*S+_*A+g*D+p*ot,r[6]=m*C+_*I+g*k+p*Z,r[10]=m*x+_*F+g*W+p*rt,r[14]=m*E+_*O+g*Y+p*j,r[3]=y*S+T*A+v*D+b*ot,r[7]=y*C+T*I+v*k+b*Z,r[11]=y*x+T*F+v*W+b*rt,r[15]=y*E+T*O+v*Y+b*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],m=t[3],_=t[7],g=t[11],p=t[15],y=l*d-c*u,T=a*d-c*f,v=a*u-l*f,b=o*d-c*h,S=o*u-l*h,C=o*f-a*h;return e*(_*y-g*T+p*v)-n*(m*y-g*b+p*S)+i*(m*T-_*b+p*C)-r*(m*v-_*S+g*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],m=t[12],_=t[13],g=t[14],p=t[15],y=e*a-n*o,T=e*l-i*o,v=e*c-r*o,b=n*l-i*a,S=n*c-r*a,C=i*c-r*l,x=h*_-f*m,E=h*g-u*m,A=h*p-d*m,I=f*g-u*_,F=f*p-d*_,O=u*p-d*g,D=y*O-T*F+v*I+b*A-S*E+C*x;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/D;return t[0]=(a*O-l*F+c*I)*k,t[1]=(i*F-n*O-r*I)*k,t[2]=(_*C-g*S+p*b)*k,t[3]=(u*S-f*C-d*b)*k,t[4]=(l*A-o*O-c*E)*k,t[5]=(e*O-i*A+r*E)*k,t[6]=(g*v-m*C-p*T)*k,t[7]=(h*C-u*v+d*T)*k,t[8]=(o*F-a*A+c*x)*k,t[9]=(n*A-e*F-r*x)*k,t[10]=(m*S-_*v+p*y)*k,t[11]=(f*v-h*S-d*y)*k,t[12]=(a*E-o*I-l*x)*k,t[13]=(e*I-n*E+i*x)*k,t[14]=(_*T-m*b-g*y)*k,t[15]=(h*b-f*T+u*y)*k,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,m=r*f,_=o*h,g=o*f,p=a*f,y=l*c,T=l*h,v=l*f,b=n.x,S=n.y,C=n.z;return i[0]=(1-(_+p))*b,i[1]=(d+v)*b,i[2]=(m-T)*b,i[3]=0,i[4]=(d-v)*S,i[5]=(1-(u+p))*S,i[6]=(g+y)*S,i[7]=0,i[8]=(m+T)*C,i[9]=(g-y)*C,i[10]=(1-(u+_))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Ps.set(i[0],i[1],i[2]).length(),a=Ps.set(i[4],i[5],i[6]).length(),l=Ps.set(i[8],i[9],i[10]).length();r<0&&(o=-o),qn.copy(this);let c=1/o,h=1/a,f=1/l;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=f,qn.elements[9]*=f,qn.elements[10]*=f,e.setFromRotationMatrix(qn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Jn,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===Jn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Js)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Jn,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-i),u=-(e+t)/(e-t),d=-(n+i)/(n-i),m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===Jn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===Js)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};rl.prototype.isMatrix4=!0;var ae=rl,Ps=new U,qn=new ae,a0=new U(0,0,0),l0=new U(1,1,1),Ui=new U,Ko=new U,Tn=new U,Fu=new ae,Du=new Ne,sn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Du.setFromEuler(this),this.setFromQuaternion(Du,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var Ks=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},c0=0,Nu=new U,Is=new Ne,xi=new ae,Qo=new U,Tr=new U,h0=new U,u0=new Ne,Uu=new U(1,0,0),Bu=new U(0,1,0),Ou=new U(0,0,1),zu={type:"added"},f0={type:"removed"},Ls={type:"childadded",child:null},Cc={type:"childremoved",child:null},Ie=class s extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new U,e=new sn,n=new Ne,i=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ae},normalMatrix:{value:new pe}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.multiply(Is),this}rotateOnWorldAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.premultiply(Is),this}rotateX(t){return this.rotateOnAxis(Uu,t)}rotateY(t){return this.rotateOnAxis(Bu,t)}rotateZ(t){return this.rotateOnAxis(Ou,t)}translateOnAxis(t,e){return Nu.copy(t).applyQuaternion(this.quaternion),this.position.add(Nu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uu,t)}translateY(t){return this.translateOnAxis(Bu,t)}translateZ(t){return this.translateOnAxis(Ou,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qo.copy(t):Qo.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Tr,Qo,this.up):xi.lookAt(Qo,Tr,this.up),this.quaternion.setFromRotationMatrix(xi),i&&(xi.extractRotation(i.matrixWorld),Is.setFromRotationMatrix(xi),this.quaternion.premultiply(Is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(oe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zu),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null):oe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(f0),Cc.child=t,this.dispatchEvent(Cc),Cc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zu),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,t,h0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,u0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ie.DEFAULT_UP=new U(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var St=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},d0={type:"move"},Qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(d0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new St;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},ta={h:0,s:0,l:0};function Pc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=an){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ve.workingColorSpace){if(t=i0(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Pc(o,r,t+1/3),this.g=Pc(o,r,t),this.b=Pc(o,r,t-1/3)}return ve.colorSpaceToWorking(this,i),this}setStyle(t,e=an){function n(r){r!==void 0&&parseFloat(r)<1&&ie("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ie("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=an){let n=Zf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=Ys(t.r),this.g=Ys(t.g),this.b=Ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=an){return ve.workingToColorSpace(fn.copy(this),t),Math.round(_e(fn.r*255,0,255))*65536+Math.round(_e(fn.g*255,0,255))*256+Math.round(_e(fn.b*255,0,255))}getHexString(t=an){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.workingToColorSpace(fn.copy(this),e);let n=fn.r,i=fn.g,r=fn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ve.workingColorSpace){return ve.workingToColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=an){ve.workingToColorSpace(fn.copy(this),t);let e=fn.r,n=fn.g,i=fn.b;return t!==an?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(ta);let n=Ec(Bi.h,ta.h,e),i=Ec(Bi.s,ta.s,e),r=Ec(Bi.l,ta.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new jt;jt.NAMES=Zf;var Hi=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Yn=new U,_i=new U,Ic=new U,vi=new U,Fs=new U,Ds=new U,ku=new U,Lc=new U,Fc=new U,Dc=new U,Nc=new we,Uc=new we,Bc=new we,Si=class s{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Yn.subVectors(t,e),i.cross(Yn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Yn.subVectors(i,e),_i.subVectors(n,e),Ic.subVectors(t,e);let o=Yn.dot(Yn),a=Yn.dot(_i),l=Yn.dot(Ic),c=_i.dot(_i),h=_i.dot(Ic),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Nc.setScalar(0),Uc.setScalar(0),Bc.setScalar(0),Nc.fromBufferAttribute(t,e),Uc.fromBufferAttribute(t,n),Bc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Nc,r.x),o.addScaledVector(Uc,r.y),o.addScaledVector(Bc,r.z),o}static isFrontFacing(t,e,n,i){return Yn.subVectors(n,e),_i.subVectors(t,e),Yn.cross(_i).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Yn.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Fs.subVectors(i,n),Ds.subVectors(r,n),Lc.subVectors(t,n);let l=Fs.dot(Lc),c=Ds.dot(Lc);if(l<=0&&c<=0)return e.copy(n);Fc.subVectors(t,i);let h=Fs.dot(Fc),f=Ds.dot(Fc);if(h>=0&&f<=h)return e.copy(i);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Fs,o);Dc.subVectors(t,r);let d=Fs.dot(Dc),m=Ds.dot(Dc);if(m>=0&&d<=m)return e.copy(r);let _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Ds,a);let g=h*m-d*f;if(g<=0&&f-h>=0&&d-m>=0)return ku.subVectors(r,i),a=(f-h)/(f-h+(d-m)),e.copy(i).addScaledVector(ku,a);let p=1/(g+_+u);return o=_*p,a=u*p,e.copy(n).addScaledVector(Fs,o).addScaledVector(Ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$n=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Zn):Zn.fromBufferAttribute(r,o),Zn.applyMatrix4(t.matrixWorld),this.expandByPoint(Zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ea.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ea.copy(n.boundingBox)),ea.applyMatrix4(t.matrixWorld),this.union(ea)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zn),Zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wr),na.subVectors(this.max,wr),Ns.subVectors(t.a,wr),Us.subVectors(t.b,wr),Bs.subVectors(t.c,wr),Oi.subVectors(Us,Ns),zi.subVectors(Bs,Us),ss.subVectors(Ns,Bs);let e=[0,-Oi.z,Oi.y,0,-zi.z,zi.y,0,-ss.z,ss.y,Oi.z,0,-Oi.x,zi.z,0,-zi.x,ss.z,0,-ss.x,-Oi.y,Oi.x,0,-zi.y,zi.x,0,-ss.y,ss.x,0];return!Oc(e,Ns,Us,Bs,na)||(e=[1,0,0,0,1,0,0,0,1],!Oc(e,Ns,Us,Bs,na))?!1:(ia.crossVectors(Oi,zi),e=[ia.x,ia.y,ia.z],Oc(e,Ns,Us,Bs,na))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},yi=[new U,new U,new U,new U,new U,new U,new U,new U],Zn=new U,ea=new $n,Ns=new U,Us=new U,Bs=new U,Oi=new U,zi=new U,ss=new U,wr=new U,na=new U,ia=new U,rs=new U;function Oc(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){rs.fromArray(s,r);let a=i.x*Math.abs(rs.x)+i.y*Math.abs(rs.y)+i.z*Math.abs(rs.z),l=t.dot(rs),c=e.dot(rs),h=n.dot(rs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var je=new U,sa=new _t,p0=0,dn=class extends li{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:p0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Th,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sa.fromBufferAttribute(this,e),sa.applyMatrix3(t),this.setXY(e,sa.x,sa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=si(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=si(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=si(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var hs=class extends dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Xr=class extends dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var le=class extends dn{constructor(t,e,n){super(new Float32Array(t),e,n)}},m0=new $n,Ar=new U,zc=new U,ci=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):m0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ar.subVectors(t,this.center);let e=Ar.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ar,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ar.copy(t.center).add(zc)),this.expandByPoint(Ar.copy(t.center).sub(zc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},g0=0,Un=new ae,kc=new Ie,Os=new U,wn=new $n,Rr=new $n,nn=new U,Ae=class s extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(e0(t)?Xr:hs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new pe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Un.makeRotationFromQuaternion(t),this.applyMatrix4(Un),this}rotateX(t){return Un.makeRotationX(t),this.applyMatrix4(Un),this}rotateY(t){return Un.makeRotationY(t),this.applyMatrix4(Un),this}rotateZ(t){return Un.makeRotationZ(t),this.applyMatrix4(Un),this}translate(t,e,n){return Un.makeTranslation(t,e,n),this.applyMatrix4(Un),this}scale(t,e,n){return Un.makeScale(t,e,n),this.applyMatrix4(Un),this}lookAt(t){return kc.lookAt(t),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new le(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Rr.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(wn.min,Rr.min),wn.expandByPoint(nn),nn.addVectors(wn.max,Rr.max),wn.expandByPoint(nn)):(wn.expandByPoint(Rr.min),wn.expandByPoint(Rr.max))}wn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)nn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(nn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)nn.fromBufferAttribute(a,c),l&&(Os.fromBufferAttribute(t,c),nn.add(Os)),i=Math.max(i,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new dn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new U,l[x]=new U;let c=new U,h=new U,f=new U,u=new _t,d=new _t,m=new _t,_=new U,g=new U;function p(x,E,A){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,A),u.fromBufferAttribute(r,x),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),h.sub(c),f.sub(c),d.sub(u),m.sub(u);let I=1/(d.x*m.y-m.x*d.y);isFinite(I)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(I),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(I),a[x].add(_),a[E].add(_),a[A].add(_),l[x].add(g),l[E].add(g),l[A].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let x=0,E=y.length;x<E;++x){let A=y[x],I=A.start,F=A.count;for(let O=I,D=I+F;O<D;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let T=new U,v=new U,b=new U,S=new U;function C(x){b.fromBufferAttribute(i,x),S.copy(b);let E=a[x];T.copy(E),T.sub(b.multiplyScalar(b.dot(E))).normalize(),v.crossVectors(S,E);let I=v.dot(l[x])<0?-1:1;o.setXYZW(x,T.x,T.y,T.z,I)}for(let x=0,E=y.length;x<E;++x){let A=y[x],I=A.start,F=A.count;for(let O=I,D=I+F;O<D;O+=3)C(t.getX(O+0)),C(t.getX(O+1)),C(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,f=new U;if(t)for(let u=0,d=t.count;u<d;u+=3){let m=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)nn.fromBufferAttribute(t,e),nn.normalize(),t.setXYZ(e,nn.x,nn.y,nn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)u[m++]=c[d++]}return new dn(u,h,f)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},qr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Th,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},xn=new U,tr=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix4(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyNormalMatrix(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.transformDirection(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=si(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=si(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=si(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=si(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array),r=Pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Gr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new dn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Gr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Hc=new U,x0=new U,_0=new pe,An=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Hc.subVectors(n,e).cross(x0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Hc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||_0.getNormalMatrix(t),i=this.coplanarPoint(Hc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},v0=0,Bn=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=Ai,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=xh,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ta,this.stencilZFail=Ta,this.stencilZPass=Ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ie(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){ie(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new An().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new _t().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _t().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ei=class extends Bn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},zs,Cr=new U,ks=new U,Hs=new U,Gs=new _t,Pr=new _t,Jf=new ae,ra=new U,Ir=new U,oa=new U,Hu=new _t,Gc=new _t,Gu=new _t,Gi=class extends Ie{constructor(t=new Ei){if(super(),this.isSprite=!0,this.type="Sprite",zs===void 0){zs=new Ae;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new qr(e,5);zs.setIndex([0,1,2,0,2,3]),zs.setAttribute("position",new tr(n,3,0,!1)),zs.setAttribute("uv",new tr(n,2,3,!1))}this.geometry=zs,this.material=t,this.center=new _t(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&oe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ks.setFromMatrixScale(this.matrixWorld),Jf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Hs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ks.multiplyScalar(-Hs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;aa(ra.set(-.5,-.5,0),Hs,o,ks,i,r),aa(Ir.set(.5,-.5,0),Hs,o,ks,i,r),aa(oa.set(.5,.5,0),Hs,o,ks,i,r),Hu.set(0,0),Gc.set(1,0),Gu.set(1,1);let a=t.ray.intersectTriangle(ra,Ir,oa,!1,Cr);if(a===null&&(aa(Ir.set(-.5,.5,0),Hs,o,ks,i,r),Gc.set(0,1),a=t.ray.intersectTriangle(ra,oa,Ir,!1,Cr),a===null))return;let l=t.ray.origin.distanceTo(Cr);l<t.near||l>t.far||e.push({distance:l,point:Cr.clone(),uv:Si.getInterpolation(Cr,ra,Ir,oa,Hu,Gc,Gu,new _t),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function aa(s,t,e,n,i,r){Gs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Pr.x=r*Gs.x-i*Gs.y,Pr.y=i*Gs.x+r*Gs.y):Pr.copy(Gs),s.copy(t),s.x+=Pr.x,s.y+=Pr.y,s.applyMatrix4(Jf)}var Mi=new U,Vc=new U,la=new U,ca=new U,er=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mi.copy(this.origin).addScaledVector(this.direction,e),Mi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Vc.copy(t).add(e).multiplyScalar(.5),la.copy(e).sub(t).normalize(),ca.copy(this.origin).sub(Vc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(la),a=ca.dot(this.direction),l=-ca.dot(la),c=ca.lengthSq(),h=Math.abs(1-o*o),f,u,d,m;if(h>0)if(f=o*l-a,u=o*a-l,m=r*h,f>=0)if(u>=-m)if(u<=m){let _=1/h;f*=_,u*=_,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Vc).addScaledVector(la,u),d}intersectSphere(t,e){if(t.radius<0)return null;Mi.subVectors(t.center,this.origin);let n=Mi.dot(this.direction),i=Mi.dot(Mi)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Mi)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=t.x-o.x,u=t.y-o.y,d=t.z-o.z,m=e.x-o.x,_=e.y-o.y,g=e.z-o.z,p=n.x-o.x,y=n.y-o.y,T=n.z-o.z,v=Math.abs(l),b=Math.abs(c),S=Math.abs(h),C,x,E,A,I,F,O,D,k,W,Y,ot;if(v>=b&&v>=S?(E=l,F=f,k=m,ot=p,l>=0?(C=c,x=h,A=u,I=d,O=_,D=g,W=y,Y=T):(C=h,x=c,A=d,I=u,O=g,D=_,W=T,Y=y)):b>=S?(E=c,F=u,k=_,ot=y,c>=0?(C=h,x=l,A=d,I=f,O=g,D=m,W=T,Y=p):(C=l,x=h,A=f,I=d,O=m,D=g,W=p,Y=T)):(E=h,F=d,k=g,ot=T,h>=0?(C=l,x=c,A=f,I=u,O=m,D=_,W=p,Y=y):(C=c,x=l,A=u,I=f,O=_,D=m,W=y,Y=p)),E===0)return null;let Z=C/E,rt=x/E,j=1/E,gt=A-Z*F,mt=I-rt*F,ee=O-Z*k,te=D-rt*k,kt=W-Z*ot,M=Y-rt*ot,R=kt*te-M*ee,B=gt*M-mt*kt,H=ee*mt-te*gt;if(i){if(R<0||B<0||H<0)return null}else if((R<0||B<0||H<0)&&(R>0||B>0||H>0))return null;let N=R+B+H;if(N===0)return null;let $=j*(R*F+B*k+H*ot);return(N>0?$<0:$>0)?null:this.at($/N,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},He=class extends Bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Vu=new ae,os=new er,ha=new ci,Wu=new U,ua=new U,fa=new U,da=new U,Wc=new U,pa=new U,Xu=new U,ma=new U,Me=class extends Ie{constructor(t=new Ae,e=new He){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){pa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(Wc.fromBufferAttribute(f,t),o?pa.addScaledVector(Wc,h):pa.addScaledVector(Wc.sub(e),h))}e.add(pa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(r),os.copy(t.ray).recast(t.near),!(ha.containsPoint(os.origin)===!1&&(os.intersectSphere(ha,Wu)===null||os.origin.distanceToSquared(Wu)>(t.far-t.near)**2))&&(Vu.copy(r).invert(),os.copy(t.ray).applyMatrix4(Vu),!(n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,os)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let g=u[m],p=o[g.materialIndex],y=Math.max(g.start,d.start),T=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=y,b=T;v<b;v+=3){let S=a.getX(v),C=a.getX(v+1),x=a.getX(v+2);i=ga(this,p,t,n,c,h,f,S,C,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){let y=a.getX(g),T=a.getX(g+1),v=a.getX(g+2);i=ga(this,o,t,n,c,h,f,y,T,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let g=u[m],p=o[g.materialIndex],y=Math.max(g.start,d.start),T=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=y,b=T;v<b;v+=3){let S=v,C=v+1,x=v+2;i=ga(this,p,t,n,c,h,f,S,C,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){let y=g,T=g+1,v=g+2;i=ga(this,o,t,n,c,h,f,y,T,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function y0(s,t,e,n,i,r,o,a){let l;if(t.side===cn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Kn,a),l===null)return null;ma.copy(a),ma.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(ma);return c<e.near||c>e.far?null:{distance:c,point:ma.clone(),object:s}}function ga(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,ua),s.getVertexPosition(l,fa),s.getVertexPosition(c,da);let h=y0(s,t,e,n,ua,fa,da,Xu);if(h){let f=new U;Si.getBarycoord(Xu,ua,fa,da,f),i&&(h.uv=Si.getInterpolatedAttribute(i,a,l,c,f,new _t)),r&&(h.uv1=Si.getInterpolatedAttribute(r,a,l,c,f,new _t)),o&&(h.normal=Si.getInterpolatedAttribute(o,a,l,c,f,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new U,materialIndex:0};Si.getNormal(ua,fa,da,u.normal),h.face=u,h.barycoord=f}return h}var Lr=new we,qu=new we,Yu=new we,M0=new we,Zu=new ae,xa=new U,Xc=new ci,Ju=new ae,qc=new er,Yr=class extends Me{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Kc,this.bindMatrix=new ae,this.bindMatrixInverse=new ae,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new $n),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,xa),this.boundingBox.expandByPoint(xa)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ci),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,xa),this.boundingSphere.expandByPoint(xa)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xc.copy(this.boundingSphere),Xc.applyMatrix4(i),t.ray.intersectsSphere(Xc)!==!1&&(Ju.copy(i).invert(),qc.copy(t.ray).applyMatrix4(Ju),!(this.boundingBox!==null&&qc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,qc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new we,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Kc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ff?this.bindMatrixInverse.copy(this.bindMatrix).invert():ie("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;qu.fromBufferAttribute(i.attributes.skinIndex,t),Yu.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(Lr.copy(e),e.set(0,0,0,0)):(Lr.set(...e,1),e.set(0,0,0)),Lr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Yu.getComponent(r);if(o!==0){let a=qu.getComponent(r);Zu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(M0.copy(Lr).applyMatrix4(Zu),o)}}return e.isVector4&&(e.w=Lr.w),e.applyMatrix4(this.bindMatrixInverse)}},Ti=class extends Ie{constructor(){super(),this.isBone=!0,this.type="Bone"}},hi=class extends _n{constructor(t=null,e=1,n=1,i,r,o,a,l,c=qe,h=qe,f,u){super(null,o,a,l,c,h,i,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},$u=new ae,S0=new ae,Zr=class s{constructor(t=[],e=[]){this.uuid=oi(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){ie("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ae)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new ae;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:S0;$u.multiplyMatrices(a,e[r]),$u.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new hi(e,t,t,yn,Pn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],o=e[r];o===void 0&&(ie("Skeleton: No bone found with UUID:",r),o=new Ti),this.bones.push(o),this.boneInverses.push(new ae().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let o=e[i];t.bones.push(o.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}},nr=class extends dn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Vs=new ae,ju=new ae,_a=[],Ku=new $n,b0=new ae,Fr=new Me,Dr=new ci,us=class extends Me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new nr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,b0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $n),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vs),Ku.copy(t.boundingBox).applyMatrix4(Vs),this.boundingBox.union(Ku)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ci),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vs),Dr.copy(t.boundingSphere).applyMatrix4(Vs),this.boundingSphere.union(Dr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Fr.geometry=this.geometry,Fr.material=this.material,Fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(n),t.ray.intersectsSphere(Dr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Vs),ju.multiplyMatrices(n,Vs),Fr.matrixWorld=ju,Fr.raycast(t,_a);for(let o=0,a=_a.length;o<a;o++){let l=_a[o];l.instanceId=r,l.object=this,e.push(l)}_a.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new nr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new hi(new Float32Array(i*this.count),i,this.count,pl,Pn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},as=new ci,E0=new _t(.5,.5),va=new U,ir=class{constructor(t=new An,e=new An,n=new An,i=new An,r=new An,o=new An){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],m=r[8],_=r[9],g=r[10],p=r[11],y=r[12],T=r[13],v=r[14],b=r[15];if(i[0].setComponents(c-o,d-h,p-m,b-y).normalize(),i[1].setComponents(c+o,d+h,p+m,b+y).normalize(),i[2].setComponents(c+a,d+f,p+_,b+T).normalize(),i[3].setComponents(c-a,d-f,p-_,b-T).normalize(),n)i[4].setComponents(l,u,g,v).normalize(),i[5].setComponents(c-l,d-u,p-g,b-v).normalize();else if(i[4].setComponents(c-l,d-u,p-g,b-v).normalize(),e===Jn)i[5].setComponents(c+l,d+u,p+g,b+v).normalize();else if(e===Js)i[5].setComponents(l,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(t){as.center.set(0,0,0);let e=E0.distanceTo(t.center);return as.radius=.7071067811865476+e,as.applyMatrix4(t.matrixWorld),this.intersectsSphere(as)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(va.x=i.normal.x>0?t.max.x:t.min.x,va.y=i.normal.y>0?t.max.y:t.min.y,va.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(va)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Jr=class extends _n{constructor(t=[],e=Ki,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},$r=class extends _n{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ui=class extends _n{constructor(t,e,n=ti,i,r,o,a=qe,l=qe,c,h=ai,f=1){if(h!==ai&&h!==pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new js(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Oa=class extends ui{constructor(t,e=ti,n=Ki,i,r,o=qe,a=qe,l,c=ai){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},jr=class extends _n{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},vn=class s extends Ae{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(f,2));function m(_,g,p,y,T,v,b,S,C,x,E){let A=v/C,I=b/x,F=v/2,O=b/2,D=S/2,k=C+1,W=x+1,Y=0,ot=0,Z=new U;for(let rt=0;rt<W;rt++){let j=rt*I-O;for(let gt=0;gt<k;gt++){let mt=gt*A-F;Z[_]=mt*y,Z[g]=j*T,Z[p]=D,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[g]=0,Z[p]=S>0?1:-1,h.push(Z.x,Z.y,Z.z),f.push(gt/C),f.push(1-rt/x),Y+=1}}for(let rt=0;rt<x;rt++)for(let j=0;j<C;j++){let gt=u+j+k*rt,mt=u+j+k*(rt+1),ee=u+(j+1)+k*(rt+1),te=u+(j+1)+k*rt;l.push(gt,mt,te),l.push(mt,ee,te),ot+=6}a.addGroup(d,ot,E),d+=ot,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},sr=class s extends Ae{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,f=Math.PI/2*t,u=e,d=2*f+u,m=n*2+r,_=i+1,g=new U,p=new U;for(let y=0;y<=m;y++){let T=0,v=0,b=0,S=0;if(y<=n){let E=y/n,A=E*Math.PI/2;v=-h-t*Math.cos(A),b=t*Math.sin(A),S=-t*Math.cos(A),T=E*f}else if(y<=n+r){let E=(y-n)/r;v=-h+E*e,b=t,S=0,T=f+E*u}else{let E=(y-n-r)/n,A=E*Math.PI/2;v=h+t*Math.sin(A),b=t*Math.cos(A),S=t*Math.sin(A),T=f+u+E*f}let C=Math.max(0,Math.min(1,T/d)),x=0;y===0?x=.5/i:y===m&&(x=-.5/i);for(let E=0;E<=i;E++){let A=E/i,I=A*Math.PI*2,F=Math.sin(I),O=Math.cos(I);p.x=-b*O,p.y=v,p.z=b*F,a.push(p.x,p.y,p.z),g.set(-b*O,S,b*F),g.normalize(),l.push(g.x,g.y,g.z),c.push(A+x,C)}if(y>0){let E=(y-1)*_;for(let A=0;A<i;A++){let I=E+A,F=E+A+1,O=y*_+A,D=y*_+A+1;o.push(I,F,O),o.push(F,D,O)}}}this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},fs=class s extends Ae{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new U,h=new _t;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=n+f/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(a,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Vi=class s extends Ae{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],f=[],u=[],d=[],m=0,_=[],g=n/2,p=0;y(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new le(f,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(d,2));function y(){let v=new U,b=new U,S=0,C=(e-t)/n;for(let x=0;x<=r;x++){let E=[],A=x/r,I=A*(e-t)+t;for(let F=0;F<=i;F++){let O=F/i,D=O*l+a,k=Math.sin(D),W=Math.cos(D);b.x=I*k,b.y=-A*n+g,b.z=I*W,f.push(b.x,b.y,b.z),v.set(k,C,W).normalize(),u.push(v.x,v.y,v.z),d.push(O,1-A),E.push(m++)}_.push(E)}for(let x=0;x<i;x++)for(let E=0;E<r;E++){let A=_[E][x],I=_[E+1][x],F=_[E+1][x+1],O=_[E][x+1];(t>0||E!==0)&&(h.push(A,I,O),S+=3),(e>0||E!==r-1)&&(h.push(I,F,O),S+=3)}c.addGroup(p,S,0),p+=S}function T(v){let b=m,S=new _t,C=new U,x=0,E=v===!0?t:e,A=v===!0?1:-1;for(let F=1;F<=i;F++)f.push(0,g*A,0),u.push(0,A,0),d.push(.5,.5),m++;let I=m;for(let F=0;F<=i;F++){let D=F/i*l+a,k=Math.cos(D),W=Math.sin(D);C.x=E*W,C.y=g*A,C.z=E*k,f.push(C.x,C.y,C.z),u.push(0,A,0),S.x=k*.5+.5,S.y=W*.5*A+.5,d.push(S.x,S.y),m++}for(let F=0;F<i;F++){let O=b+F,D=I+F;v===!0?h.push(D,D+1,O):h.push(D+1,D,O),x+=3}c.addGroup(p,x,v===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},fi=class s extends Vi{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},za=class s extends Ae{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let T=new U,v=new U,b=new U;for(let S=0;S<e.length;S+=3)d(e[S+0],T),d(e[S+1],v),d(e[S+2],b),l(T,v,b,y)}function l(y,T,v,b){let S=b+1,C=[];for(let x=0;x<=S;x++){C[x]=[];let E=y.clone().lerp(v,x/S),A=T.clone().lerp(v,x/S),I=S-x;for(let F=0;F<=I;F++)F===0&&x===S?C[x][F]=E:C[x][F]=E.clone().lerp(A,F/I)}for(let x=0;x<S;x++)for(let E=0;E<2*(S-x)-1;E++){let A=Math.floor(E/2);E%2===0?(u(C[x][A+1]),u(C[x+1][A]),u(C[x][A])):(u(C[x][A+1]),u(C[x+1][A+1]),u(C[x+1][A]))}}function c(y){let T=new U;for(let v=0;v<r.length;v+=3)T.x=r[v+0],T.y=r[v+1],T.z=r[v+2],T.normalize().multiplyScalar(y),r[v+0]=T.x,r[v+1]=T.y,r[v+2]=T.z}function h(){let y=new U;for(let T=0;T<r.length;T+=3){y.x=r[T+0],y.y=r[T+1],y.z=r[T+2];let v=g(y)/2/Math.PI+.5,b=p(y)/Math.PI+.5;o.push(v,1-b)}m(),f()}function f(){for(let y=0;y<o.length;y+=6){let T=o[y+0],v=o[y+2],b=o[y+4],S=Math.max(T,v,b),C=Math.min(T,v,b);S>.9&&C<.1&&(T<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),b<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function d(y,T){let v=y*3;T.x=t[v+0],T.y=t[v+1],T.z=t[v+2]}function m(){let y=new U,T=new U,v=new U,b=new U,S=new _t,C=new _t,x=new _t;for(let E=0,A=0;E<r.length;E+=9,A+=6){y.set(r[E+0],r[E+1],r[E+2]),T.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),S.set(o[A+0],o[A+1]),C.set(o[A+2],o[A+3]),x.set(o[A+4],o[A+5]),b.copy(y).add(T).add(v).divideScalar(3);let I=g(b);_(S,A+0,y,I),_(C,A+2,T,I),_(x,A+4,v,I)}}function _(y,T,v,b){b<0&&y.x===1&&(o[T]=y.x-1),v.x===0&&v.z===0&&(o[T]=b/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var Rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ie("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],u=n[i+1]-h,d=(o-h)/u;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new _t:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,i=[],r=[],o=[],a=new U,l=new ae;for(let d=0;d<=t;d++){let m=d/t;i[d]=this.getTangentAt(m,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(_e(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(_e(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},rr=class extends Rn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new _t){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ka=class extends rr{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ah(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,i(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Qu=new U,tf=new U,Yc=new Ah,Zc=new Ah,Jc=new Ah,or=class extends Rn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new U){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(tf.subVectors(i[0],i[1]).add(i[0]),c=tf);let f=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Qu.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Qu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Yc.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,_,g),Zc.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,_,g),Jc.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(Yc.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Zc.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Jc.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Yc.calc(l),Zc.calc(l),Jc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new U().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ef(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function T0(s,t){let e=1-s;return e*e*t}function w0(s,t){return 2*(1-s)*s*t}function A0(s,t){return s*s*t}function Ur(s,t,e,n){return T0(s,t)+w0(s,e)+A0(s,n)}function R0(s,t){let e=1-s;return e*e*e*t}function C0(s,t){let e=1-s;return 3*e*e*s*t}function P0(s,t){return 3*(1-s)*s*s*t}function I0(s,t){return s*s*s*t}function Br(s,t,e,n,i){return R0(s,t)+C0(s,e)+P0(s,n)+I0(s,i)}var Kr=class extends Rn{constructor(t=new _t,e=new _t,n=new _t,i=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new _t){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Br(t,i.x,r.x,o.x,a.x),Br(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ha=class extends Rn{constructor(t=new U,e=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new U){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Br(t,i.x,r.x,o.x,a.x),Br(t,i.y,r.y,o.y,a.y),Br(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Qr=class extends Rn{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ga=class extends Rn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},to=class extends Rn{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ur(t,i.x,r.x,o.x),Ur(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Va=class extends Rn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ur(t,i.x,r.x,o.x),Ur(t,i.y,r.y,o.y),Ur(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wi=class extends Rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(ef(a,l.x,c.x,h.x,f.x),ef(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new _t().fromArray(i))}return this}},ih=Object.freeze({__proto__:null,ArcCurve:ka,CatmullRomCurve3:or,CubicBezierCurve:Kr,CubicBezierCurve3:Ha,EllipseCurve:rr,LineCurve:Qr,LineCurve3:Ga,QuadraticBezierCurve:to,QuadraticBezierCurve3:Va,SplineCurve:Wi}),Wa=class extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ih[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new ih[i.type]().fromJSON(i))}return this}},eo=class extends Wa{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Qr(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new to(this.currentPoint.clone(),new _t(t,e),new _t(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Kr(this.currentPoint.clone(),new _t(t,e),new _t(n,i),new _t(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Wi(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new rr(t,e,n,i,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ar=class extends eo{constructor(t){super(t),this.uuid=oi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new eo().fromJSON(i))}return this}};function L0(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=$f(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=B0(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,f=l;for(let u=e;u<i;u+=e){let d=s[u],m=s[u+1];d<a&&(a=d),m<l&&(l=m),d>h&&(h=d),m>f&&(f=m)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return no(r,o,e,a,l,c,0),o}function $f(s,t,e,n,i){let r;if(i===Z0(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=nf(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=nf(o/n|0,s[o],s[o+1],r);return r&&lr(r,r.next)&&(so(r),r=r.next),r}function ds(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(lr(e,e.next)||ze(e.prev,e,e.next)===0)){if(so(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function no(s,t,e,n,i,r,o){if(!s)return;!o&&r&&G0(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?D0(s,n,i,r):F0(s)){t.push(l.i,s.i,c.i),so(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=N0(ds(s),t),no(s,t,e,n,i,r,2)):o===2&&U0(s,t,e,n,i,r):no(ds(s),t,e,n,i,r,1);break}}}function F0(s){let t=s.prev,e=s,n=s.next;if(ze(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),f=Math.min(a,l,c),u=Math.max(i,r,o),d=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&Nr(i,a,r,l,o,c,m.x,m.y)&&ze(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function D0(s,t,e,n){let i=s.prev,r=s,o=s.next;if(ze(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,f=r.y,u=o.y,d=Math.min(a,l,c),m=Math.min(h,f,u),_=Math.max(a,l,c),g=Math.max(h,f,u),p=sh(d,m,t,e,n),y=sh(_,g,t,e,n),T=s.prevZ,v=s.nextZ;for(;T&&T.z>=p&&v&&v.z<=y;){if(T.x>=d&&T.x<=_&&T.y>=m&&T.y<=g&&T!==i&&T!==o&&Nr(a,h,l,f,c,u,T.x,T.y)&&ze(T.prev,T,T.next)>=0||(T=T.prevZ,v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&Nr(a,h,l,f,c,u,v.x,v.y)&&ze(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;T&&T.z>=p;){if(T.x>=d&&T.x<=_&&T.y>=m&&T.y<=g&&T!==i&&T!==o&&Nr(a,h,l,f,c,u,T.x,T.y)&&ze(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&Nr(a,h,l,f,c,u,v.x,v.y)&&ze(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function N0(s,t){let e=s;do{let n=e.prev,i=e.next.next;!lr(n,i)&&Kf(n,e,e.next,i)&&io(n,i)&&io(i,n)&&(t.push(n.i,e.i,i.i),so(e),so(e.next),e=s=i),e=e.next}while(e!==s);return ds(e)}function U0(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&X0(o,a)){let l=Qf(o,a);o=ds(o,o.next),l=ds(l,l.next),no(o,t,e,n,i,r,0),no(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function B0(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=$f(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(W0(c))}i.sort(O0);for(let r=0;r<i.length;r++)e=z0(i[r],e);return e}function O0(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function z0(s,t){let e=k0(s,t);if(!e)return t;let n=Qf(e,s);return ds(n,n.next),ds(e,e.next)}function k0(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(lr(s,e))return e;do{if(lr(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let f=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&jf(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let f=Math.abs(i-e.y)/(n-e.x);io(e,s)&&(f<h||f===h&&(e.x>o.x||e.x===o.x&&H0(o,e)))&&(o=e,h=f)}e=e.next}while(e!==a);return o}function H0(s,t){return ze(s.prev,s,t.prev)<0&&ze(t.next,s,s.next)<0}function G0(s,t,e,n){let i=s;do i.z===0&&(i.z=sh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,V0(i)}function V0(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function sh(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function W0(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function jf(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Nr(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&jf(s,t,e,n,i,r,o,a)}function X0(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!q0(s,t)&&(io(s,t)&&io(t,s)&&Y0(s,t)&&(ze(s.prev,s,t.prev)||ze(s,t.prev,t))||lr(s,t)&&ze(s.prev,s,s.next)>0&&ze(t.prev,t,t.next)>0)}function ze(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function lr(s,t){return s.x===t.x&&s.y===t.y}function Kf(s,t,e,n){let i=Ma(ze(s,t,e)),r=Ma(ze(s,t,n)),o=Ma(ze(e,n,s)),a=Ma(ze(e,n,t));return!!(i!==r&&o!==a||i===0&&ya(s,e,t)||r===0&&ya(s,n,t)||o===0&&ya(e,s,n)||a===0&&ya(e,t,n))}function ya(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ma(s){return s>0?1:s<0?-1:0}function q0(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Kf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function io(s,t){return ze(s.prev,s,s.next)<0?ze(s,t,s.next)>=0&&ze(s,s.prev,t)>=0:ze(s,t,s.prev)<0||ze(s,s.next,t)<0}function Y0(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Qf(s,t){let e=rh(s.i,s.x,s.y),n=rh(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function nf(s,t,e,n){let i=rh(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function so(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function rh(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Z0(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var oh=class{static triangulate(t,e,n=2){return L0(t,e,n)}},ls=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];sf(t),rf(n,t);let o=t.length;e.forEach(sf);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,rf(n,e[l]);let a=oh.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function sf(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function rf(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var ro=class s extends Ae{constructor(t=new ar([new _t(.5,.5),new _t(-.5,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new le(i,3)),this.setAttribute("uv",new le(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:J0,T,v=!1,b,S,C,x;if(p){T=p.getSpacedPoints(h),v=!0,u=!1;let G=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(h,G),S=new U,C=new U,x=new U}u||(g=0,d=0,m=0,_=0);let E=a.extractPoints(c),A=E.shape,I=E.holes;if(!ls.isClockWise(A)){A=A.reverse();for(let G=0,et=I.length;G<et;G++){let at=I[G];ls.isClockWise(at)&&(I[G]=at.reverse())}}function O(G){let at=10000000000000001e-36,ct=G[0];for(let yt=1;yt<=G.length;yt++){let Ot=yt%G.length,Nt=G[Ot],qt=Nt.x-ct.x,Yt=Nt.y-ct.y,z=qt*qt+Yt*Yt,ne=Math.max(Math.abs(Nt.x),Math.abs(Nt.y),Math.abs(ct.x),Math.abs(ct.y)),de=at*ne*ne;if(z<=de){G.splice(Ot,1),yt--;continue}ct=Nt}}O(A),I.forEach(O);let D=I.length,k=A;for(let G=0;G<D;G++){let et=I[G];A=A.concat(et)}function W(G,et,at){return et||oe("ExtrudeGeometry: vec does not exist"),G.clone().addScaledVector(et,at)}let Y=A.length;function ot(G,et,at){let ct,yt,Ot,Nt=G.x-et.x,qt=G.y-et.y,Yt=at.x-G.x,z=at.y-G.y,ne=Nt*Nt+qt*qt,de=Nt*z-qt*Yt;if(Math.abs(de)>Number.EPSILON){let L=Math.sqrt(ne),w=Math.sqrt(Yt*Yt+z*z),q=et.x-qt/L,J=et.y+Nt/L,tt=at.x-z/w,xt=at.y+Yt/w,bt=((tt-q)*z-(xt-J)*Yt)/(Nt*z-qt*Yt);ct=q+Nt*bt-G.x,yt=J+qt*bt-G.y;let lt=ct*ct+yt*yt;if(lt<=2)return new _t(ct,yt);Ot=Math.sqrt(lt/2)}else{let L=!1;Nt>Number.EPSILON?Yt>Number.EPSILON&&(L=!0):Nt<-Number.EPSILON?Yt<-Number.EPSILON&&(L=!0):Math.sign(qt)===Math.sign(z)&&(L=!0),L?(ct=-qt,yt=Nt,Ot=Math.sqrt(ne)):(ct=Nt,yt=qt,Ot=Math.sqrt(ne/2))}return new _t(ct/Ot,yt/Ot)}let Z=[];for(let G=0,et=k.length,at=et-1,ct=G+1;G<et;G++,at++,ct++)at===et&&(at=0),ct===et&&(ct=0),Z[G]=ot(k[G],k[at],k[ct]);let rt=[],j,gt=Z.concat();for(let G=0,et=D;G<et;G++){let at=I[G];j=[];for(let ct=0,yt=at.length,Ot=yt-1,Nt=ct+1;ct<yt;ct++,Ot++,Nt++)Ot===yt&&(Ot=0),Nt===yt&&(Nt=0),j[ct]=ot(at[ct],at[Ot],at[Nt]);rt.push(j),gt=gt.concat(j)}let mt;if(g===0)mt=ls.triangulateShape(k,I);else{let G=[],et=[];for(let at=0;at<g;at++){let ct=at/g,yt=d*Math.cos(ct*Math.PI/2),Ot=m*Math.sin(ct*Math.PI/2)+_;for(let Nt=0,qt=k.length;Nt<qt;Nt++){let Yt=W(k[Nt],Z[Nt],Ot);B(Yt.x,Yt.y,-yt),ct===0&&G.push(Yt)}for(let Nt=0,qt=D;Nt<qt;Nt++){let Yt=I[Nt];j=rt[Nt];let z=[];for(let ne=0,de=Yt.length;ne<de;ne++){let L=W(Yt[ne],j[ne],Ot);B(L.x,L.y,-yt),ct===0&&z.push(L)}ct===0&&et.push(z)}}mt=ls.triangulateShape(G,et)}let ee=mt.length,te=m+_;for(let G=0;G<Y;G++){let et=u?W(A[G],gt[G],te):A[G];v?(C.copy(b.normals[0]).multiplyScalar(et.x),S.copy(b.binormals[0]).multiplyScalar(et.y),x.copy(T[0]).add(C).add(S),B(x.x,x.y,x.z)):B(et.x,et.y,0)}for(let G=1;G<=h;G++)for(let et=0;et<Y;et++){let at=u?W(A[et],gt[et],te):A[et];v?(C.copy(b.normals[G]).multiplyScalar(at.x),S.copy(b.binormals[G]).multiplyScalar(at.y),x.copy(T[G]).add(C).add(S),B(x.x,x.y,x.z)):B(at.x,at.y,f/h*G)}for(let G=g-1;G>=0;G--){let et=G/g,at=d*Math.cos(et*Math.PI/2),ct=m*Math.sin(et*Math.PI/2)+_;for(let yt=0,Ot=k.length;yt<Ot;yt++){let Nt=W(k[yt],Z[yt],ct);B(Nt.x,Nt.y,f+at)}for(let yt=0,Ot=I.length;yt<Ot;yt++){let Nt=I[yt];j=rt[yt];for(let qt=0,Yt=Nt.length;qt<Yt;qt++){let z=W(Nt[qt],j[qt],ct);v?B(z.x,z.y+T[h-1].y,T[h-1].x+at):B(z.x,z.y,f+at)}}}kt(),M();function kt(){let G=i.length/3;if(u){let et=0,at=Y*et;for(let ct=0;ct<ee;ct++){let yt=mt[ct];H(yt[2]+at,yt[1]+at,yt[0]+at)}et=h+g*2,at=Y*et;for(let ct=0;ct<ee;ct++){let yt=mt[ct];H(yt[0]+at,yt[1]+at,yt[2]+at)}}else{for(let et=0;et<ee;et++){let at=mt[et];H(at[2],at[1],at[0])}for(let et=0;et<ee;et++){let at=mt[et];H(at[0]+Y*h,at[1]+Y*h,at[2]+Y*h)}}n.addGroup(G,i.length/3-G,0)}function M(){let G=i.length/3,et=0;R(k,et),et+=k.length;for(let at=0,ct=I.length;at<ct;at++){let yt=I[at];R(yt,et),et+=yt.length}n.addGroup(G,i.length/3-G,1)}function R(G,et){let at=G.length;for(;--at>=0;){let ct=at,yt=at-1;yt<0&&(yt=G.length-1);for(let Ot=0,Nt=h+g*2;Ot<Nt;Ot++){let qt=Y*Ot,Yt=Y*(Ot+1),z=et+ct+qt,ne=et+yt+qt,de=et+yt+Yt,L=et+ct+Yt;N(z,ne,de,L)}}}function B(G,et,at){l.push(G),l.push(et),l.push(at)}function H(G,et,at){$(G),$(et),$(at);let ct=i.length/3,yt=y.generateTopUV(n,i,ct-3,ct-2,ct-1);ht(yt[0]),ht(yt[1]),ht(yt[2])}function N(G,et,at,ct){$(G),$(et),$(ct),$(et),$(at),$(ct);let yt=i.length/3,Ot=y.generateSideWallUV(n,i,yt-6,yt-3,yt-2,yt-1);ht(Ot[0]),ht(Ot[1]),ht(Ot[3]),ht(Ot[1]),ht(Ot[2]),ht(Ot[3])}function $(G){i.push(l[G*3+0]),i.push(l[G*3+1]),i.push(l[G*3+2])}function ht(G){r.push(G.x),r.push(G.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return $0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ih[i.type]().fromJSON(i)),new s(n,t.options)}},J0={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new _t(r,o),new _t(a,l),new _t(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[i*3],d=t[i*3+1],m=t[i*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new _t(o,1-l),new _t(c,1-f),new _t(u,1-m),new _t(_,1-p)]:[new _t(a,1-l),new _t(h,1-f),new _t(d,1-m),new _t(g,1-p)]}};function $0(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ps=class s extends za{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},cr=class s extends Ae{constructor(t=[new _t(0,-.5),new _t(.5,0),new _t(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=_e(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,f=new U,u=new _t,d=new U,m=new U,_=new U,g=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-g,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(m)}for(let y=0;y<=e;y++){let T=n+y*h*i,v=Math.sin(T),b=Math.cos(T);for(let S=0;S<=t.length-1;S++){f.x=t[S].x*v,f.y=t[S].y,f.z=t[S].x*b,o.push(f.x,f.y,f.z),u.x=y/e,u.y=S/(t.length-1),a.push(u.x,u.y);let C=l[3*S+0]*v,x=l[3*S+1],E=l[3*S+0]*b;c.push(C,x,E)}}for(let y=0;y<e;y++)for(let T=0;T<t.length-1;T++){let v=T+y*t.length,b=v,S=v+t.length,C=v+t.length+1,x=v+1;r.push(b,S,x),r.push(C,x,S)}this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("uv",new le(a,2)),this.setAttribute("normal",new le(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var Ze=class s extends Ae{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=t/a,u=e/l,d=[],m=[],_=[],g=[];for(let p=0;p<h;p++){let y=p*u-o;for(let T=0;T<c;T++){let v=T*f-r;m.push(v,-y,0),_.push(0,0,1),g.push(T/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let T=y+c*p,v=y+c*(p+1),b=y+1+c*(p+1),S=y+1+c*p;d.push(T,v,S),d.push(v,b,S)}this.setIndex(d),this.setAttribute("position",new le(m,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var rn=class s extends Ae{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new U,u=new U,d=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){let y=[],T=p/n,v=o+T*a,b=t*Math.cos(v),S=Math.sqrt(t*t-b*b),C=0;p===0&&o===0?C=.5/e:p===n&&l===Math.PI&&(C=-.5/e);for(let x=0;x<=e;x++){let E=x/e,A=i+E*r;f.x=-S*Math.cos(A),f.y=b,f.z=S*Math.sin(A),m.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),g.push(E+C,1-T),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let T=h[p][y+1],v=h[p][y],b=h[p+1][y],S=h[p+1][y+1];(p!==0||o>0)&&d.push(T,v,S),(p!==n-1||l<Math.PI)&&d.push(v,b,S)}this.setIndex(d),this.setAttribute("position",new le(m,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Re=class s extends Ae{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],f=[],u=new U,d=new U,m=new U;for(let _=0;_<=n;_++){let g=o+_/n*a;for(let p=0;p<=i;p++){let y=p/i*r;d.x=(t+e*Math.cos(g))*Math.cos(y),d.y=(t+e*Math.cos(g))*Math.sin(y),d.z=e*Math.sin(g),c.push(d.x,d.y,d.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),m.subVectors(d,u).normalize(),h.push(m.x,m.y,m.z),f.push(p/i),f.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=i;g++){let p=(i+1)*_+g-1,y=(i+1)*(_-1)+g-1,T=(i+1)*(_-1)+g,v=(i+1)*_+g;l.push(p,y,v),l.push(y,T,v)}this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var oo=class extends Bn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new jt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function _s(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(of(i))i.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(of(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function mn(s){let t={};for(let e=0;e<s.length;e++){let n=_s(s[e]);for(let i in n)t[i]=n[i]}return t}function of(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function j0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Rh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}var zn={clone:_s,merge:mn},K0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Q0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ge=class extends Bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=K0,this.fragmentShader=Q0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=j0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new jt().setHex(i.value);break;case"v2":this.uniforms[n].value=new _t().fromArray(i.value);break;case"v3":this.uniforms[n].value=new U().fromArray(i.value);break;case"v4":this.uniforms[n].value=new we().fromArray(i.value);break;case"m3":this.uniforms[n].value=new pe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ae().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},hr=class extends Ge{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},me=class extends Bn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mr,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},jn=class extends me{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _t(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var ao=class extends Bn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mr,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},lo=class extends Bn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mr,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=al,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Xa=class extends Bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qa=class extends Bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ws(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function $c(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Xi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ya=class extends Xi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:th,endingEnd:th}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case eh:r=t,a=2*e-n;break;case nh:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case eh:o=t,l=2*n-e;break;case nh:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(n-e)/(i-e),_=m*m,g=_*m,p=-u*g+2*u*_-u*m,y=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*m+1,T=(-1-d)*g+(1.5+d)*_+.5*m,v=d*g-d*_;for(let b=0;b!==a;++b)r[b]=p*o[h+b]+y*o[c+b]+T*o[l+b]+v*o[f+b];return r}},Za=class extends Xi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},Ja=class extends Xi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},$a=class extends Xi{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let m=(n-e)/(i-e),_=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*_+o[l+g]*m;return r}let u=a*2,d=t-1;for(let m=0;m!==a;++m){let _=o[c+m],g=o[l+m],p=d*u+m*2,y=f[p],T=f[p+1],v=t*u+m*2,b=h[v],S=h[v+1],C=ep(n,e,y,b,i);r[m]=td(C,_,T,S,g)}return r}};function td(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function tp(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function ep(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=td(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=tp(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Cn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ws(e,this.TimeBufferType),this.values=Ws(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ws(t.times,Array),values:Ws(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),$c(t.settings)&&(n.settings={inTangents:Ws(t.settings.inTangents,Array),outTangents:Ws(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new $a(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Or:e=this.InterpolantFactoryMethodDiscrete;break;case Da:e=this.InterpolantFactoryMethodLinear;break;case Ea:e=this.InterpolantFactoryMethodSmooth;break;case Qc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ie("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Or;case this.InterpolantFactoryMethodLinear:return Da;case this.InterpolantFactoryMethodSmooth:return Ea;case this.InterpolantFactoryMethodBezier:return Qc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;$c(this.settings)&&(af(this.settings.inTangents,t),af(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(oe("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(oe("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){oe("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){oe("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&n0(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){oe("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ea,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let f=a*n,u=f-n,d=f+n;for(let m=0;m!==n;++m){let _=e[f+m];if(_!==e[u+m]||_!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,$c(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function af(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Da;var qi=class extends Cn{constructor(t,e,n){super(t,e,n)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Or;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends Cn{constructor(t,e,n,i){super(t,e,n,i)}};ja.prototype.ValueTypeName="color";var Ka=class extends Cn{constructor(t,e,n,i){super(t,e,n,i)}};Ka.prototype.ValueTypeName="number";var Qa=class extends Xi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ne.slerpFlat(r,0,o,c-a,o,c,l);return r}},co=class extends Cn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Qa(this.times,this.values,this.getValueSize(),t)}};co.prototype.ValueTypeName="quaternion";co.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends Cn{constructor(t,e,n){super(t,e,n)}};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Or;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var tl=class extends Cn{constructor(t,e,n,i){super(t,e,n,i)}};tl.prototype.ValueTypeName="vector";var el=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ed=new el,nl=class{constructor(t){this.manager=t!==void 0?t:ed,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};nl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ms=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ur=class extends ms{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},jc=new ae,lf=new U,cf=new U,fr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ir,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;lf.setFromMatrixPosition(t.matrixWorld),e.position.copy(lf),cf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){jc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(jc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===Js||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(jc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Sa=new U,ba=new Ne,ii=new U,ho=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Sa,ba,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sa,ba,ii.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Sa,ba,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sa,ba,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ki=new U,hf=new _t,uf=new _t,Ke=class extends ho{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Vr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(bc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ki.x,ki.y).multiplyScalar(-t/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-t/ki.z)}getViewSize(t,e){return this.getViewBounds(t,hf,uf),e.subVectors(uf,hf)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(bc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ah=class extends fr{constructor(){super(new Ke(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Vr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},uo=class extends ms{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ah}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},lh=class extends fr{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0}},di=class extends ms{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new lh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Zi=class extends ho{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ch=class extends fr{constructor(){super(new Zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wi=class extends ms{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new ch}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Xs=-90,qs=1,il=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ke(Xs,qs,t,e);i.layers=this.layers,this.add(i);let r=new Ke(Xs,qs,t,e);r.layers=this.layers,this.add(r);let o=new Ke(Xs,qs,t,e);o.layers=this.layers,this.add(o);let a=new Ke(Xs,qs,t,e);a.layers=this.layers,this.add(a);let l=new Ke(Xs,qs,t,e);l.layers=this.layers,this.add(l);let c=new Ke(Xs,qs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Js)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},sl=class extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},fo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=np.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function np(){this._document.hidden===!1&&this.reset()}var Ch="\\[\\]\\.:\\/",ip=new RegExp("["+Ch+"]","g"),Ph="[^"+Ch+"]",sp="[^"+Ch.replace("\\.","")+"]",rp=/((?:WC+[\/:])*)/.source.replace("WC",Ph),op=/(WCOD+)?/.source.replace("WCOD",sp),ap=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ph),lp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ph),cp=new RegExp("^"+rp+op+ap+lp+"$"),hp=["material","materials","bones","map"],hh=class{constructor(t,e,n){let i=n||Be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Be=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ip,"")}static parseTrackName(t){let e=cp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);hp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;oe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Be.Composite=hh;Be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Be.prototype.GetterByBindingType=[Be.prototype._getValue_direct,Be.prototype._getValue_array,Be.prototype._getValue_arrayElement,Be.prototype._getValue_toArray];Be.prototype.SetterByBindingTypeAndVersioning=[[Be.prototype._setValue_direct,Be.prototype._setValue_direct_setNeedsUpdate,Be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_array,Be.prototype._setValue_array_setNeedsUpdate,Be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_arrayElement,Be.prototype._setValue_arrayElement_setNeedsUpdate,Be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_fromArray,Be.prototype._setValue_fromArray_setNeedsUpdate,Be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var R_=new Float32Array(1);var ff=new ae,po=class{constructor(t,e,n=0,i=1/0){this.ray=new er(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ks,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):oe("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ff.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ff),this}intersectObject(t,e=!0,n=[]){return uh(t,this,n,e),n.sort(df),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)uh(t[i],this,n,e);return n.sort(df),n}};function df(s,t){return s.distance-t.distance}function uh(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)uh(r[o],t,e,!0)}}var Uh=class Uh{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Uh.prototype.isMatrix2=!0;var fh=Uh;function Ih(s,t,e,n){let i=up(n);switch(e){case bh:return s*t;case pl:return s*t/i.components*i.byteLength;case ml:return s*t/i.components*i.byteLength;case es:return s*t*2/i.components*i.byteLength;case gl:return s*t*2/i.components*i.byteLength;case Eh:return s*t*3/i.components*i.byteLength;case yn:return s*t*4/i.components*i.byteLength;case xl:return s*t*4/i.components*i.byteLength;case To:case wo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ao:case Ro:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case vl:case Ml:return Math.max(s,16)*Math.max(t,8)/4;case _l:case yl:return Math.max(s,8)*Math.max(t,8)/2;case Sl:case bl:case Tl:case wl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case El:case Co:case Al:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Il:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case zl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case kl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Hl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Gl:case Vl:case Wl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Xl:case ql:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Po:case Yl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function up(s){switch(s){case pn:case vh:return{byteLength:1,components:1};case pr:case yh:case on:return{byteLength:2,components:1};case fl:case dl:return{byteLength:2,components:4};case ti:case ul:case Pn:return{byteLength:4,components:1};case Mh:case Sh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function bd(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function gp(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(s.bindBuffer(c,a),f.length===0)s.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){let m=f[u],_=f[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){let _=f[d];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var xp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_p=`#ifdef USE_ALPHAHASH
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
#endif`,vp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bp=`#ifdef USE_AOMAP
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
#endif`,Ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tp=`#ifdef USE_BATCHING
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
#endif`,wp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pp=`#ifdef USE_IRIDESCENCE
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
#endif`,Ip=`#ifdef USE_BUMPMAP
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
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,kp=`#define PI 3.141592653589793
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
} // validated`,Hp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gp=`vec3 transformedNormal = objectNormal;
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
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jp=`#ifdef USE_ENVMAP
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
#endif`,$p=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jp=`#ifdef USE_ENVMAP
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
#endif`,Kp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qp=`#ifdef USE_ENVMAP
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
#endif`,tm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,im=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sm=`#ifdef USE_GRADIENTMAP
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
}`,rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,cm=`#ifdef USE_ENVMAP
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
#endif`,hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pm=`PhysicalMaterial material;
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
#endif`,mm=`uniform sampler2D dfgLUT;
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
}`,gm=`
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
#endif`,xm=`#if defined( RE_IndirectDiffuse )
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
#endif`,_m=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Am=`#if defined( USE_POINTS_UV )
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
#endif`,Rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fm=`#ifdef USE_MORPHTARGETS
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
#endif`,Dm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Um=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,km=`#ifdef USE_NORMALMAP
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
#endif`,Hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$m=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ng=`float getShadowMask() {
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
}`,ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sg=`#ifdef USE_SKINNING
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
#endif`,rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,og=`#ifdef USE_SKINNING
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
#endif`,ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ug=`#ifdef USE_TRANSMISSION
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
#endif`,fg=`#ifdef USE_TRANSMISSION
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
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_g=`uniform sampler2D t2D;
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`#include <common>
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
}`,Eg=`#if DEPTH_PACKING == 3200
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
}`,Tg=`#define DISTANCE
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
}`,wg=`#define DISTANCE
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
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cg=`uniform float scale;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Ig=`#include <common>
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Fg=`#define LAMBERT
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
}`,Dg=`#define LAMBERT
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
}`,Ng=`#define MATCAP
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
}`,Ug=`#define MATCAP
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
}`,Bg=`#define NORMAL
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
}`,Og=`#define NORMAL
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
}`,zg=`#define PHONG
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
}`,kg=`#define PHONG
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
}`,Hg=`#define STANDARD
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
}`,Gg=`#define STANDARD
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
}`,Vg=`#define TOON
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
}`,Wg=`#define TOON
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
}`,Xg=`uniform float size;
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
}`,qg=`uniform vec3 diffuse;
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
}`,Yg=`#include <common>
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
}`,Zg=`uniform vec3 color;
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
}`,Jg=`uniform float rotation;
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
}`,$g=`uniform vec3 diffuse;
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
}`,xe={alphahash_fragment:xp,alphahash_pars_fragment:_p,alphamap_fragment:vp,alphamap_pars_fragment:yp,alphatest_fragment:Mp,alphatest_pars_fragment:Sp,aomap_fragment:bp,aomap_pars_fragment:Ep,batching_pars_vertex:Tp,batching_vertex:wp,begin_vertex:Ap,beginnormal_vertex:Rp,bsdfs:Cp,iridescence_fragment:Pp,bumpmap_pars_fragment:Ip,clipping_planes_fragment:Lp,clipping_planes_pars_fragment:Fp,clipping_planes_pars_vertex:Dp,clipping_planes_vertex:Np,color_fragment:Up,color_pars_fragment:Bp,color_pars_vertex:Op,color_vertex:zp,common:kp,cube_uv_reflection_fragment:Hp,defaultnormal_vertex:Gp,displacementmap_pars_vertex:Vp,displacementmap_vertex:Wp,emissivemap_fragment:Xp,emissivemap_pars_fragment:qp,colorspace_fragment:Yp,colorspace_pars_fragment:Zp,envmap_fragment:Jp,envmap_common_pars_fragment:$p,envmap_pars_fragment:jp,envmap_pars_vertex:Kp,envmap_physical_pars_fragment:cm,envmap_vertex:Qp,fog_vertex:tm,fog_pars_vertex:em,fog_fragment:nm,fog_pars_fragment:im,gradientmap_pars_fragment:sm,lightmap_pars_fragment:rm,lights_lambert_fragment:om,lights_lambert_pars_fragment:am,lights_pars_begin:lm,lights_toon_fragment:hm,lights_toon_pars_fragment:um,lights_phong_fragment:fm,lights_phong_pars_fragment:dm,lights_physical_fragment:pm,lights_physical_pars_fragment:mm,lights_fragment_begin:gm,lights_fragment_maps:xm,lights_fragment_end:_m,lightprobes_pars_fragment:vm,logdepthbuf_fragment:ym,logdepthbuf_pars_fragment:Mm,logdepthbuf_pars_vertex:Sm,logdepthbuf_vertex:bm,map_fragment:Em,map_pars_fragment:Tm,map_particle_fragment:wm,map_particle_pars_fragment:Am,metalnessmap_fragment:Rm,metalnessmap_pars_fragment:Cm,morphinstance_vertex:Pm,morphcolor_vertex:Im,morphnormal_vertex:Lm,morphtarget_pars_vertex:Fm,morphtarget_vertex:Dm,normal_fragment_begin:Nm,normal_fragment_maps:Um,normal_pars_fragment:Bm,normal_pars_vertex:Om,normal_vertex:zm,normalmap_pars_fragment:km,clearcoat_normal_fragment_begin:Hm,clearcoat_normal_fragment_maps:Gm,clearcoat_pars_fragment:Vm,iridescence_pars_fragment:Wm,opaque_fragment:Xm,packing:qm,premultiplied_alpha_fragment:Ym,project_vertex:Zm,dithering_fragment:Jm,dithering_pars_fragment:$m,roughnessmap_fragment:jm,roughnessmap_pars_fragment:Km,shadowmap_pars_fragment:Qm,shadowmap_pars_vertex:tg,shadowmap_vertex:eg,shadowmask_pars_fragment:ng,skinbase_vertex:ig,skinning_pars_vertex:sg,skinning_vertex:rg,skinnormal_vertex:og,specularmap_fragment:ag,specularmap_pars_fragment:lg,tonemapping_fragment:cg,tonemapping_pars_fragment:hg,transmission_fragment:ug,transmission_pars_fragment:fg,uv_pars_fragment:dg,uv_pars_vertex:pg,uv_vertex:mg,worldpos_vertex:gg,background_vert:xg,background_frag:_g,backgroundCube_vert:vg,backgroundCube_frag:yg,cube_vert:Mg,cube_frag:Sg,depth_vert:bg,depth_frag:Eg,distance_vert:Tg,distance_frag:wg,equirect_vert:Ag,equirect_frag:Rg,linedashed_vert:Cg,linedashed_frag:Pg,meshbasic_vert:Ig,meshbasic_frag:Lg,meshlambert_vert:Fg,meshlambert_frag:Dg,meshmatcap_vert:Ng,meshmatcap_frag:Ug,meshnormal_vert:Bg,meshnormal_frag:Og,meshphong_vert:zg,meshphong_frag:kg,meshphysical_vert:Hg,meshphysical_frag:Gg,meshtoon_vert:Vg,meshtoon_frag:Wg,points_vert:Xg,points_frag:qg,shadow_vert:Yg,shadow_frag:Zg,sprite_vert:Jg,sprite_frag:$g},Pt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},gi={basic:{uniforms:mn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:mn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new jt(0)},envMapIntensity:{value:1}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:mn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:mn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:mn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new jt(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:mn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:mn([Pt.points,Pt.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:mn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:mn([Pt.common,Pt.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:mn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:mn([Pt.sprite,Pt.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distance:{uniforms:mn([Pt.common,Pt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distance_vert,fragmentShader:xe.distance_frag},shadow:{uniforms:mn([Pt.lights,Pt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};gi.physical={uniforms:mn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};var $l={r:0,b:0,g:0},jg=new ae,Ed=new pe;Ed.set(-1,0,0,0,1,0,0,0,1);function Kg(s,t,e,n,i,r){let o=new jt(0),a=i===!0?0:1,l,c,h=null,f=0,u=null;function d(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){let v=y.backgroundBlurriness>0;T=t.get(T,v)}return T}function m(y){let T=!1,v=d(y);v===null?g(o,a):v&&v.isColor&&(g(v,1),T=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(y,T){let v=d(T);v&&(v.isCubeTexture||v.mapping===bo)?(c===void 0&&(c=new Me(new vn(1,1,1),new Ge({name:"BackgroundCubeMaterial",uniforms:_s(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jg.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ed),c.material.toneMapped=ve.getTransfer(v.colorSpace)!==be,(h!==v||f!==v.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,u=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Me(new Ze(2,2),new Ge({name:"BackgroundMaterial",uniforms:_s(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ve.getTransfer(v.colorSpace)!==be,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,u=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,T){y.getRGB($l,Rh(s)),e.buffers.color.setClear($l.r,$l.g,$l.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,T=1){o.set(y),a=T,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:m,addToRenderList:_,dispose:p}}function Qg(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(I,F,O,D,k){let W=!1,Y=f(I,D,O,F);r!==Y&&(r=Y,c(r.object)),W=d(I,D,O,k),W&&m(I,D,O,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(I,F,O,D),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function f(I,F,O,D){let k=D.wireframe===!0,W=n[F.id];W===void 0&&(W={},n[F.id]=W);let Y=I.isInstancedMesh===!0?I.id:0,ot=W[Y];ot===void 0&&(ot={},W[Y]=ot);let Z=ot[O.id];Z===void 0&&(Z={},ot[O.id]=Z);let rt=Z[k];return rt===void 0&&(rt=u(l()),Z[k]=rt),rt}function u(I){let F=[],O=[],D=[];for(let k=0;k<e;k++)F[k]=0,O[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:O,attributeDivisors:D,object:I,attributes:{},index:null}}function d(I,F,O,D){let k=r.attributes,W=F.attributes,Y=0,ot=O.getAttributes();for(let Z in ot)if(ot[Z].location>=0){let j=k[Z],gt=W[Z];if(gt===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(gt=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(gt=I.instanceColor)),j===void 0||j.attribute!==gt||gt&&j.data!==gt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==D}function m(I,F,O,D){let k={},W=F.attributes,Y=0,ot=O.getAttributes();for(let Z in ot)if(ot[Z].location>=0){let j=W[Z];j===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(j=I.instanceColor));let gt={};gt.attribute=j,j&&j.data&&(gt.data=j.data),k[Z]=gt,Y++}r.attributes=k,r.attributesNum=Y,r.index=D}function _(){let I=r.newAttributes;for(let F=0,O=I.length;F<O;F++)I[F]=0}function g(I){p(I,0)}function p(I,F){let O=r.newAttributes,D=r.enabledAttributes,k=r.attributeDivisors;O[I]=1,D[I]===0&&(s.enableVertexAttribArray(I),D[I]=1),k[I]!==F&&(s.vertexAttribDivisor(I,F),k[I]=F)}function y(){let I=r.newAttributes,F=r.enabledAttributes;for(let O=0,D=F.length;O<D;O++)F[O]!==I[O]&&(s.disableVertexAttribArray(O),F[O]=0)}function T(I,F,O,D,k,W,Y){Y===!0?s.vertexAttribIPointer(I,F,O,k,W):s.vertexAttribPointer(I,F,O,D,k,W)}function v(I,F,O,D){_();let k=D.attributes,W=O.getAttributes(),Y=F.defaultAttributeValues;for(let ot in W){let Z=W[ot];if(Z.location>=0){let rt=k[ot];if(rt===void 0&&(ot==="instanceMatrix"&&I.instanceMatrix&&(rt=I.instanceMatrix),ot==="instanceColor"&&I.instanceColor&&(rt=I.instanceColor)),rt!==void 0){let j=rt.normalized,gt=rt.itemSize,mt=t.get(rt);if(mt===void 0)continue;let ee=mt.buffer,te=mt.type,kt=mt.bytesPerElement,M=te===s.INT||te===s.UNSIGNED_INT||rt.gpuType===ul;if(rt.isInterleavedBufferAttribute){let R=rt.data,B=R.stride,H=rt.offset;if(R.isInstancedInterleavedBuffer){for(let N=0;N<Z.locationSize;N++)p(Z.location+N,R.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let N=0;N<Z.locationSize;N++)g(Z.location+N);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let N=0;N<Z.locationSize;N++)T(Z.location+N,gt/Z.locationSize,te,j,B*kt,(H+gt/Z.locationSize*N)*kt,M)}else{if(rt.isInstancedBufferAttribute){for(let R=0;R<Z.locationSize;R++)p(Z.location+R,rt.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let R=0;R<Z.locationSize;R++)g(Z.location+R);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let R=0;R<Z.locationSize;R++)T(Z.location+R,gt/Z.locationSize,te,j,gt*kt,gt/Z.locationSize*R*kt,M)}}else if(Y!==void 0){let j=Y[ot];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(Z.location,j);break;case 3:s.vertexAttrib3fv(Z.location,j);break;case 4:s.vertexAttrib4fv(Z.location,j);break;default:s.vertexAttrib1fv(Z.location,j)}}}}y()}function b(){E();for(let I in n){let F=n[I];for(let O in F){let D=F[O];for(let k in D){let W=D[k];for(let Y in W)h(W[Y].object),delete W[Y];delete D[k]}}delete n[I]}}function S(I){if(n[I.id]===void 0)return;let F=n[I.id];for(let O in F){let D=F[O];for(let k in D){let W=D[k];for(let Y in W)h(W[Y].object),delete W[Y];delete D[k]}}delete n[I.id]}function C(I){for(let F in n){let O=n[F];for(let D in O){let k=O[D];if(k[I.id]===void 0)continue;let W=k[I.id];for(let Y in W)h(W[Y].object),delete W[Y];delete k[I.id]}}}function x(I){for(let F in n){let O=n[F],D=I.isInstancedMesh===!0?I.id:0,k=O[D];if(k!==void 0){for(let W in k){let Y=k[W];for(let ot in Y)h(Y[ot].object),delete Y[ot];delete k[W]}delete O[D],Object.keys(O).length===0&&delete n[F]}}}function E(){A(),o=!0,r!==i&&(r=i,c(r.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function tx(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ex(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==yn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let x=C===on&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==pn&&C!==Pn&&!x&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(ie("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),S=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:v,maxSamples:b,samples:S}}function nx(s){let t=this,e=null,n=0,i=!1,r=!1,o=new An,a=new pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let m=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,p=s.get(f);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{let y=r?0:n,T=y*4,v=p.clippingState||null;l.value=v,v=h(m,u,T,d);for(let b=0;b!==T;++b)v[b]=e[b];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,m){let _=f!==null?f.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let p=d+_*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,v=d;T!==_;++T,v+=4)o.copy(f[T]).applyMatrix4(y,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}var xr=4,ix=6,sx=20,rx=256,Io=new Zi,nd=new jt,Bh=null,Oh=0,zh=0,kh=!1,ox=new U,vs=new U,ys=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=ox}=r;Bh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Bh,Oh,zh),this._renderer.xr.enabled=kh,t.scissorTest=!1,gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:on,format:yn,colorSpace:zr,depthBuffer:!1},i=id(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=id(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ax(r)),this._blurMaterial=cx(r,t,e),this._ggxMaterial=lx(r,t,e)}return i}_compileMaterial(t){let e=new Me(new Ae,t);this._renderer.compile(e,Io)}_sceneToCubeUV(t,e,n,i,r){let l=new Ke(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(nd),f.toneMapping=Qn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Me(new vn,new He({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,p=!1,y=t.background;y?y.isColor&&(g.color.copy(y),t.background=null,p=!0):(g.color.copy(nd),p=!0);for(let T=0;T<6;T++){let v=T%3;v===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):v===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));let b=this._cubeSize;gr(i,v*b,T>2?b:0,b,b),f.setRenderTarget(i),p&&f.render(_,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ki||t.mapping===xs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sd());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;gr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Io)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-xr?n-m+xr:0),p=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,gr(r,g,p,3*_,2*_),i.setRenderTarget(r),i.render(a,Io),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,gr(t,g,p,3*_,2*_),i.setRenderTarget(t),i.render(a,Io)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,i,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],f=3*h*(i>this._lodMax-xr?i-this._lodMax+xr:0),u=4*(this._cubeSize-h);gr(e,f,u,3*h,2*h),o.setRenderTarget(e),o.render(l,Io)}};function ax(s){let t=[],e=[],n=s,i=s-xr+1+ix;for(let r=0;r<i;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,m=new Float32Array(d*u*f),_=new Float32Array(d*u*f);for(let p=0;p<f;p++){let y=p%3*2/3-1,T=p>2?0:-1,v=[y,T,0,y+2/3,T,0,y+2/3,T+1,0,y,T,0,y+2/3,T+1,0,y,T+1,0];m.set(v,d*u*p);for(let b=0;b<u;b++){let S=h[b*2]*2-1,C=h[b*2+1]*2-1;p===0?vs.set(1,C,S):p===1?vs.set(-S,1,-C):p===2?vs.set(-S,C,1):p===3?vs.set(-1,C,-S):p===4?vs.set(-S,-1,C):vs.set(S,C,-1),vs.toArray(_,(p*u+b)*d)}}let g=new Ae;g.setAttribute("position",new dn(m,d)),g.setAttribute("outputDirection",new dn(_,d)),e.push(new Me(g,null)),n>xr&&n--}return{lodMeshes:e,sizeLods:t}}function id(s,t,e){let n=new Ye(s,t,e);return n.texture.mapping=bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function lx(s,t,e){return new Ge({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:Je,depthTest:!1,depthWrite:!1})}function cx(s,t,e){return new Ge({name:"SphericalGaussianBlur",defines:{SAMPLES:sx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:Je,depthTest:!1,depthWrite:!1})}function sd(){return new Ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:Je,depthTest:!1,depthWrite:!1})}function rd(){return new Ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Je,depthTest:!1,depthWrite:!1})}function Ql(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Kl=class extends Ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Jr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new vn(5,5,5),r=new Ge({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:Je});r.uniforms.tEquirect.value=e;let o=new Me(i,r),a=e.minFilter;return e.minFilter===Qi&&(e.minFilter=ln),new il(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}};function hx(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===ll||d===cl)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let _=new Kl(m.height);return _.fromEquirectangularTexture(s,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let d=u.mapping,m=d===ll||d===cl,_=d===Ki||d===xs;if(m||_){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new ys(s)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let y=u.image;return m&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new ys(s)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,d){return d===ll?u.mapping=Ki:d===cl&&(u.mapping=xs),u}function l(u){let d=0,m=6;for(let _=0;_<m;_++)u[_]!==void 0&&d++;return d===m}function c(u){let d=u.target;d.removeEventListener("dispose",c);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function ux(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&cs("WebGLRenderer: "+n+" extension not supported."),i}}}function fx(s,t,e,n){let i={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete i[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)t.update(u[d],s.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,m=f.attributes.position,_=0;if(m===void 0)return;if(d!==null){let y=d.array;_=d.version;for(let T=0,v=y.length;T<v;T+=3){let b=y[T+0],S=y[T+1],C=y[T+2];u.push(b,S,S,C,C,b)}}else{let y=m.array;_=m.version;for(let T=0,v=y.length/3-1;T<v;T+=3){let b=T+0,S=T+1,C=T+2;u.push(b,S,S,C,C,b)}}let g=new(m.count>=65535?Xr:hs)(u,1);g.version=_;let p=r.get(f);p&&t.remove(p),r.set(f,g)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function dx(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){s.drawElements(n,u,r,f*o),e.update(u,n,1)}function c(f,u,d){d!==0&&(s.drawElementsInstanced(n,u,r,f*o,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function px(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:oe("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function mx(s,t,e){let n=new WeakMap,i=new we;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let E=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],T=0;d===!0&&(T=1),m===!0&&(T=2),_===!0&&(T=3);let v=a.attributes.position.count*T,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*b*4*f),C=new Wr(S,v,b,f);C.type=Pn,C.needsUpdate=!0;let x=T*4;for(let A=0;A<f;A++){let I=g[A],F=p[A],O=y[A],D=v*b*4*A;for(let k=0;k<I.count;k++){let W=k*x;d===!0&&(i.fromBufferAttribute(I,k),S[D+W+0]=i.x,S[D+W+1]=i.y,S[D+W+2]=i.z,S[D+W+3]=0),m===!0&&(i.fromBufferAttribute(F,k),S[D+W+4]=i.x,S[D+W+5]=i.y,S[D+W+6]=i.z,S[D+W+7]=0),_===!0&&(i.fromBufferAttribute(O,k),S[D+W+8]=i.x,S[D+W+9]=i.y,S[D+W+10]=i.z,S[D+W+11]=O.itemSize===4?i.w:1)}}u={count:f,texture:C,size:new _t(v,b)},n.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function gx(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var xx={[xo]:"LINEAR_TONE_MAPPING",[_o]:"REINHARD_TONE_MAPPING",[vo]:"CINEON_TONE_MAPPING",[ji]:"ACES_FILMIC_TONE_MAPPING",[Mo]:"AGX_TONE_MAPPING",[So]:"NEUTRAL_TONE_MAPPING",[yo]:"CUSTOM_TONE_MAPPING"};function _x(s,t,e,n,i,r){let o=new Ye(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ae;c.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new le([0,2,0,0,2,0],2));let h=new hr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Me(c,h),u=new Zi(-1,1,1,-1,0,1),d=null,m=null,_=!1,g,p=null,y=[],T=!1;this.setSize=function(v,b){o.setSize(v,b),a!==null&&a.setSize(v,b),l!==null&&l.setSize(v,b);for(let S=0;S<y.length;S++){let C=y[S];C.setSize&&C.setSize(v,b)}},this.setEffects=function(v){y=v,T=y.length>0&&y[0].isRenderPass===!0;let b=o.width,S=o.height;y.length>0&&a===null&&(a=new Ye(b,S,{type:on,depthBuffer:!1,stencilBuffer:!1}),l=new Ye(b,S,{type:on,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<y.length;C++){let x=y[C];x.setSize&&x.setSize(b,S)}},this.begin=function(v,b){if(_||v.toneMapping===Qn&&y.length===0)return!1;if(p=b,b!==null){let S=b.width,C=b.height;(o.width!==S||o.height!==C)&&this.setSize(S,C)}return T===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=Qn,!0},this.hasRenderPass=function(){return T},this.end=function(v,b){v.toneMapping=g,_=!0;let S=o,C=a;for(let x=0;x<y.length;x++){let E=y[x];E.enabled!==!1&&(E.render(v,C,S,b),E.needsSwap!==!1&&(S=C,C=C===a?l:a))}if(d!==v.outputColorSpace||m!==v.toneMapping){d=v.outputColorSpace,m=v.toneMapping,h.defines={},ve.getTransfer(d)===be&&(h.defines.SRGB_TRANSFER="");let x=xx[m];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(p),v.render(f,u),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Td=new _n,Vh=new ui(1,1),wd=new Wr,Ad=new Ba,Rd=new Jr,od=[],ad=[],ld=new Float32Array(16),cd=new Float32Array(9),hd=new Float32Array(4);function vr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=od[i];if(r===void 0&&(r=new Float32Array(i),od[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Qe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function tn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function tc(s,t){let e=ad[t];e===void 0&&(e=new Int32Array(t),ad[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function vx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function yx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;s.uniform2fv(this.addr,t),tn(e,t)}}function Mx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;s.uniform3fv(this.addr,t),tn(e,t)}}function Sx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;s.uniform4fv(this.addr,t),tn(e,t)}}function bx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;hd.set(n),s.uniformMatrix2fv(this.addr,!1,hd),tn(e,n)}}function Ex(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;cd.set(n),s.uniformMatrix3fv(this.addr,!1,cd),tn(e,n)}}function Tx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;ld.set(n),s.uniformMatrix4fv(this.addr,!1,ld),tn(e,n)}}function wx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ax(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;s.uniform2iv(this.addr,t),tn(e,t)}}function Rx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;s.uniform3iv(this.addr,t),tn(e,t)}}function Cx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;s.uniform4iv(this.addr,t),tn(e,t)}}function Px(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Ix(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;s.uniform2uiv(this.addr,t),tn(e,t)}}function Lx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;s.uniform3uiv(this.addr,t),tn(e,t)}}function Fx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;s.uniform4uiv(this.addr,t),tn(e,t)}}function Dx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Vh.compareFunction=e.isReversedDepthBuffer()?Jl:Zl,r=Vh):r=Td,e.setTexture2D(t||r,i)}function Nx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ad,i)}function Ux(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Rd,i)}function Bx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||wd,i)}function Ox(s){switch(s){case 5126:return vx;case 35664:return yx;case 35665:return Mx;case 35666:return Sx;case 35674:return bx;case 35675:return Ex;case 35676:return Tx;case 5124:case 35670:return wx;case 35667:case 35671:return Ax;case 35668:case 35672:return Rx;case 35669:case 35673:return Cx;case 5125:return Px;case 36294:return Ix;case 36295:return Lx;case 36296:return Fx;case 35678:case 36198:case 36298:case 36306:case 35682:return Dx;case 35679:case 36299:case 36307:return Nx;case 35680:case 36300:case 36308:case 36293:return Ux;case 36289:case 36303:case 36311:case 36292:return Bx}}function zx(s,t){s.uniform1fv(this.addr,t)}function kx(s,t){let e=vr(t,this.size,2);s.uniform2fv(this.addr,e)}function Hx(s,t){let e=vr(t,this.size,3);s.uniform3fv(this.addr,e)}function Gx(s,t){let e=vr(t,this.size,4);s.uniform4fv(this.addr,e)}function Vx(s,t){let e=vr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Wx(s,t){let e=vr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Xx(s,t){let e=vr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function qx(s,t){s.uniform1iv(this.addr,t)}function Yx(s,t){s.uniform2iv(this.addr,t)}function Zx(s,t){s.uniform3iv(this.addr,t)}function Jx(s,t){s.uniform4iv(this.addr,t)}function $x(s,t){s.uniform1uiv(this.addr,t)}function jx(s,t){s.uniform2uiv(this.addr,t)}function Kx(s,t){s.uniform3uiv(this.addr,t)}function Qx(s,t){s.uniform4uiv(this.addr,t)}function t1(s,t,e){let n=this.cache,i=t.length,r=tc(e,i);Qe(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Vh:o=Td;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function e1(s,t,e){let n=this.cache,i=t.length,r=tc(e,i);Qe(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Ad,r[o])}function n1(s,t,e){let n=this.cache,i=t.length,r=tc(e,i);Qe(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Rd,r[o])}function i1(s,t,e){let n=this.cache,i=t.length,r=tc(e,i);Qe(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||wd,r[o])}function s1(s){switch(s){case 5126:return zx;case 35664:return kx;case 35665:return Hx;case 35666:return Gx;case 35674:return Vx;case 35675:return Wx;case 35676:return Xx;case 5124:case 35670:return qx;case 35667:case 35671:return Yx;case 35668:case 35672:return Zx;case 35669:case 35673:return Jx;case 5125:return $x;case 36294:return jx;case 36295:return Kx;case 36296:return Qx;case 35678:case 36198:case 36298:case 36306:case 35682:return t1;case 35679:case 36299:case 36307:return e1;case 35680:case 36300:case 36308:case 36293:return n1;case 36289:case 36303:case 36311:case 36292:return i1}}var Wh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ox(e.type)}},Xh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=s1(e.type)}},qh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Hh=/(\w+)(\])?(\[|\.)?/g;function ud(s,t){s.seq.push(t),s.map[t.id]=t}function r1(s,t,e){let n=s.name,i=n.length;for(Hh.lastIndex=0;;){let r=Hh.exec(n),o=Hh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ud(e,c===void 0?new Wh(a,s,t):new Xh(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new qh(a),ud(e,f)),e=f}}}var _r=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);r1(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function fd(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var o1=37297,a1=0;function l1(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var dd=new pe;function c1(s){ve._getMatrix(dd,ve.workingColorSpace,s);let t=`mat3( ${dd.elements.map(e=>e.toFixed(4))} )`;switch(ve.getTransfer(s)){case kr:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function pd(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+l1(s.getShaderSource(t),a)}else return r}function h1(s,t){let e=c1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var u1={[xo]:"Linear",[_o]:"Reinhard",[vo]:"Cineon",[ji]:"ACESFilmic",[Mo]:"AgX",[So]:"Neutral",[yo]:"Custom"};function f1(s,t){let e=u1[t];return e===void 0?(ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var jl=new U;function d1(){ve.getLuminanceCoefficients(jl);let s=jl.x.toFixed(4),t=jl.y.toFixed(4),e=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function m1(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function g1(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Fo(s){return s!==""}function md(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var x1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yh(s){return s.replace(x1,v1)}var _1=new Map;function v1(s,t){let e=xe[t];if(e===void 0){let n=_1.get(t);if(n!==void 0)e=xe[n],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Yh(e)}var y1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xd(s){return s.replace(y1,M1)}function M1(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function _d(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var S1={[Ji]:"SHADOWMAP_TYPE_PCF",[dr]:"SHADOWMAP_TYPE_VSM"};function b1(s){return S1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var E1={[Ki]:"ENVMAP_TYPE_CUBE",[xs]:"ENVMAP_TYPE_CUBE",[bo]:"ENVMAP_TYPE_CUBE_UV"};function T1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":E1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var w1={[xs]:"ENVMAP_MODE_REFRACTION"};function A1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":w1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var R1={[al]:"ENVMAP_BLENDING_MULTIPLY",[If]:"ENVMAP_BLENDING_MIX",[Lf]:"ENVMAP_BLENDING_ADD"};function C1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":R1[s.combine]||"ENVMAP_BLENDING_NONE"}function P1(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function I1(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=b1(e),c=T1(e),h=A1(e),f=C1(e),u=P1(e),d=p1(e),m=m1(r),_=i.createProgram(),g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Fo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Fo).join(`
`),p.length>0&&(p+=`
`)):(g=[_d(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),p=[_d(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?xe.tonemapping_pars_fragment:"",e.toneMapping!==Qn?f1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,h1("linearToOutputTexel",e.outputColorSpace),d1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fo).join(`
`)),o=Yh(o),o=md(o,e),o=gd(o,e),a=Yh(a),a=md(a,e),a=gd(a,e),o=xd(o),a=xd(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=y+g+o,v=y+p+a,b=fd(i,i.VERTEX_SHADER,T),S=fd(i,i.FRAGMENT_SHADER,v);i.attachShader(_,b),i.attachShader(_,S),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(I){if(s.debug.checkShaderErrors){let F=i.getProgramInfoLog(_)||"",O=i.getShaderInfoLog(b)||"",D=i.getShaderInfoLog(S)||"",k=F.trim(),W=O.trim(),Y=D.trim(),ot=!0,Z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(ot=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,b,S);else{let rt=pd(i,b,"vertex"),j=pd(i,S,"fragment");oe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+rt+`
`+j)}else k!==""?ie("WebGLProgram: Program Info Log:",k):(W===""||Y==="")&&(Z=!1);Z&&(I.diagnostics={runnable:ot,programLog:k,vertexShader:{log:W,prefix:g},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(b),i.deleteShader(S),x=new _r(i,_),E=g1(i,_)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(_,o1)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=a1++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=S,this}var L1=0,Zh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Jh(t),e.set(t,n)),n}},Jh=class{constructor(t){this.id=L1++,this.code=t,this.usedTimes=0}};function F1(s){return s===es||s===Co||s===Po}function D1(s,t,e,n,i,r){let o=new Ks,a=new Zh,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,E,A,I,F,O){let D=I.fog,k=F.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ot=t.get(x.envMap||W,Y),Z=ot&&ot.mapping===bo?ot.image.height:null,rt=d[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&ie("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let j=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,gt=j!==void 0?j.length:0,mt=0;k.morphAttributes.position!==void 0&&(mt=1),k.morphAttributes.normal!==void 0&&(mt=2),k.morphAttributes.color!==void 0&&(mt=3);let ee,te,kt,M;if(rt){let Fe=gi[rt];ee=Fe.vertexShader,te=Fe.fragmentShader}else{ee=x.vertexShader,te=x.fragmentShader;let Fe=a.getVertexShaderStage(x),Ee=a.getFragmentShaderStage(x);a.update(x,Fe,Ee),kt=Fe.id,M=Ee.id}let R=s.getRenderTarget(),B=s.state.buffers.depth.getReversed(),H=F.isInstancedMesh===!0,N=F.isBatchedMesh===!0,$=!!x.map,ht=!!x.matcap,G=!!ot,et=!!x.aoMap,at=!!x.lightMap,ct=!!x.bumpMap&&x.wireframe===!1,yt=!!x.normalMap,Ot=!!x.displacementMap,Nt=!!x.emissiveMap,qt=!!x.metalnessMap,Yt=!!x.roughnessMap,z=x.anisotropy>0,ne=x.clearcoat>0,de=x.dispersion>0,L=x.retroreflectivity>0,w=x.iridescence>0,q=x.sheen>0,J=x.transmission>0,tt=z&&!!x.anisotropyMap,xt=ne&&!!x.clearcoatMap,bt=ne&&!!x.clearcoatNormalMap,lt=ne&&!!x.clearcoatRoughnessMap,dt=w&&!!x.iridescenceMap,wt=w&&!!x.iridescenceThicknessMap,Jt=q&&!!x.sheenColorMap,Tt=q&&!!x.sheenRoughnessMap,Et=!!x.specularMap,zt=!!x.specularColorMap,Kt=!!x.specularIntensityMap,he=J&&!!x.transmissionMap,X=J&&!!x.thicknessMap,At=!!x.gradientMap,ft=!!x.alphaMap,Rt=x.alphaTest>0,Dt=!!x.alphaHash,vt=!!x.extensions,Qt=Qn;x.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Qt=s.toneMapping);let Zt={shaderID:rt,shaderType:x.type,shaderName:x.name,vertexShader:ee,fragmentShader:te,defines:x.defines,customVertexShaderID:kt,customFragmentShaderID:M,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:N,batchingColor:N&&F._colorsTexture!==null,instancing:H,instancingColor:H&&F.instanceColor!==null,instancingMorph:H&&F.morphTexture!==null,outputColorSpace:R===null?s.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ve.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:$,matcap:ht,envMap:G,envMapMode:G&&ot.mapping,envMapCubeUVHeight:Z,aoMap:et,lightMap:at,bumpMap:ct,normalMap:yt,displacementMap:Ot,emissiveMap:Nt,normalMapObjectSpace:yt&&x.normalMapType===Uf,normalMapTangentSpace:yt&&x.normalMapType===mr,packedNormalMap:yt&&x.normalMapType===mr&&F1(x.normalMap.format),metalnessMap:qt,roughnessMap:Yt,anisotropy:z,anisotropyMap:tt,clearcoat:ne,clearcoatMap:xt,clearcoatNormalMap:bt,clearcoatRoughnessMap:lt,dispersion:de,retroreflection:L,iridescence:w,iridescenceMap:dt,iridescenceThicknessMap:wt,sheen:q,sheenColorMap:Jt,sheenRoughnessMap:Tt,specularMap:Et,specularColorMap:zt,specularIntensityMap:Kt,transmission:J,transmissionMap:he,thicknessMap:X,gradientMap:At,opaque:x.transparent===!1&&x.blending===Ai&&x.alphaToCoverage===!1,alphaMap:ft,alphaTest:Rt,alphaHash:Dt,combine:x.combine,mapUv:$&&m(x.map.channel),aoMapUv:et&&m(x.aoMap.channel),lightMapUv:at&&m(x.lightMap.channel),bumpMapUv:ct&&m(x.bumpMap.channel),normalMapUv:yt&&m(x.normalMap.channel),displacementMapUv:Ot&&m(x.displacementMap.channel),emissiveMapUv:Nt&&m(x.emissiveMap.channel),metalnessMapUv:qt&&m(x.metalnessMap.channel),roughnessMapUv:Yt&&m(x.roughnessMap.channel),anisotropyMapUv:tt&&m(x.anisotropyMap.channel),clearcoatMapUv:xt&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:bt&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&m(x.sheenRoughnessMap.channel),specularMapUv:Et&&m(x.specularMap.channel),specularColorMapUv:zt&&m(x.specularColorMap.channel),specularIntensityMapUv:Kt&&m(x.specularIntensityMap.channel),transmissionMapUv:he&&m(x.transmissionMap.channel),thicknessMapUv:X&&m(x.thicknessMap.channel),alphaMapUv:ft&&m(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(yt||z),vertexNormals:!!k.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!k.attributes.uv&&($||ft),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||k.attributes.normal===void 0&&yt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:B,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:mt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:Qt,decodeVideoTexture:$&&x.map.isVideoTexture===!0&&ve.getTransfer(x.map.colorSpace)===be,decodeVideoTextureEmissive:Nt&&x.emissiveMap.isVideoTexture===!0&&ve.getTransfer(x.emissiveMap.colorSpace)===be,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===En,flipSided:x.side===cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:vt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&x.extensions.multiDraw===!0||N)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Zt.vertexUv1s=l.has(1),Zt.vertexUv2s=l.has(2),Zt.vertexUv3s=l.has(3),l.clear(),Zt}function g(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let A in x.defines)E.push(A),E.push(x.defines[A]);return x.isRawShaderMaterial===!1&&(p(E,x),y(E,x),E.push(s.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function p(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function y(x,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function T(x){let E=d[x.type],A;if(E){let I=gi[E];A=zn.clone(I.uniforms)}else A=x.uniforms;return A}function v(x,E){let A=h.get(E);return A!==void 0?++A.usedTimes:(A=new I1(s,E,x,i),c.push(A),h.set(E,A)),A}function b(x){if(--x.usedTimes===0){let E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){a.remove(x)}function C(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:T,acquireProgram:v,releaseProgram:b,releaseShaderCache:S,programs:c,dispose:C}}function N1(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function U1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function vd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function yd(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,m,_,g,p){let y=s[t];return y===void 0?(y={id:u.id,object:u,geometry:d,material:m,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},s[t]=y):(y.id=u.id,y.object=u,y.geometry=d,y.material=m,y.materialVariant=o(u),y.groupOrder=_,y.renderOrder=u.renderOrder,y.z=g,y.group=p),t++,y}function l(u,d,m,_,g,p,y){y.reversedDepth===!0&&(g=-g);let T=a(u,d,m,_,g,p);m.transmission>0?n.push(T):m.transparent===!0?i.push(T):e.push(T)}function c(u,d,m,_,g,p){let y=a(u,d,m,_,g,p);m.transmission>0?n.unshift(y):m.transparent===!0?i.unshift(y):e.unshift(y)}function h(u,d){e.length>1&&e.sort(u||U1),n.length>1&&n.sort(d||vd),i.length>1&&i.sort(d||vd)}function f(){for(let u=t,d=s.length;u<d;u++){let m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:f,sort:h}}function B1(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new yd,s.set(n,[o])):i>=r.length?(o=new yd,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function O1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new jt};break;case"SpotLight":e={position:new U,direction:new U,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function z1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var k1=0;function H1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function G1(s){let t=new O1,e=z1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let i=new U,r=new ae,o=new ae;function a(c){let h=0,f=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,y=0,T=0,v=0,b=0,S=0,C=0,x=0,E=0,A=0;c.sort(H1);for(let F=0,O=c.length;F<O;F++){let D=c[F],k=D.color,W=D.intensity,Y=D.distance,ot=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===es?ot=D.shadow.map.texture:ot=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=k.r*W,f+=k.g*W,u+=k.b*W;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(D.sh.coefficients[Z],W);A++}else if(D.isSunLight){let Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let rt=D.shadow,j=e.get(D);j.shadowIntensity=rt.intensity,j.shadowBias=rt.bias,j.shadowNormalBias=rt.normalBias,j.shadowRadius=rt.radius,j.shadowMapSize.copy(rt.mapSize).multiply(rt.getFrameExtents()),n.sunShadow[m]=j,n.sunShadowMap[m]=ot;let gt=rt.getViewportCount();for(let mt=0;mt<gt;mt++)n.sunShadowMatrix[_+mt]=rt.getMatrix(mt),n.sunShadowCascade[_+mt]=rt._cascadeData[mt];_+=gt,m++}n.sun[d]=Z,d++}else if(D.isDirectionalLight){let Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let rt=D.shadow,j=e.get(D);j.shadowIntensity=rt.intensity,j.shadowBias=rt.bias,j.shadowNormalBias=rt.normalBias,j.shadowRadius=rt.radius,j.shadowMapSize=rt.mapSize,n.directionalShadow[g]=j,n.directionalShadowMap[g]=ot,n.directionalShadowMatrix[g]=D.shadow.matrix,b++}n.directional[g]=Z,g++}else if(D.isSpotLight){let Z=t.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(k).multiplyScalar(W),Z.distance=Y,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,n.spot[y]=Z;let rt=D.shadow;if(D.map&&(n.spotLightMap[x]=D.map,x++,rt.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[y]=rt.matrix,D.castShadow){let j=e.get(D);j.shadowIntensity=rt.intensity,j.shadowBias=rt.bias,j.shadowNormalBias=rt.normalBias,j.shadowRadius=rt.radius,j.shadowMapSize=rt.mapSize,n.spotShadow[y]=j,n.spotShadowMap[y]=ot,C++}y++}else if(D.isRectAreaLight){let Z=t.get(D);Z.color.copy(k).multiplyScalar(W),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),n.rectArea[T]=Z,T++}else if(D.isPointLight){let Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){let rt=D.shadow,j=e.get(D);j.shadowIntensity=rt.intensity,j.shadowBias=rt.bias,j.shadowNormalBias=rt.normalBias,j.shadowRadius=rt.radius,j.shadowMapSize=rt.mapSize,j.shadowCameraNear=rt.camera.near,j.shadowCameraFar=rt.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=ot,n.pointShadowMatrix[p]=D.shadow.matrix,S++}n.point[p]=Z,p++}else if(D.isHemisphereLight){let Z=t.get(D);Z.skyColor.copy(D.color).multiplyScalar(W),Z.groundColor.copy(D.groundColor).multiplyScalar(W),n.hemi[v]=Z,v++}}T>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let I=n.hash;(I.sunLength!==d||I.directionalLength!==g||I.pointLength!==p||I.spotLength!==y||I.rectAreaLength!==T||I.hemiLength!==v||I.numSunShadows!==m||I.numDirectionalShadows!==b||I.numPointShadows!==S||I.numSpotShadows!==C||I.numSpotMaps!==x||I.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=g,n.spot.length=y,n.rectArea.length=T,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+x-E,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,I.sunLength=d,I.directionalLength=g,I.pointLength=p,I.spotLength=y,I.rectAreaLength=T,I.hemiLength=v,I.numSunShadows=m,I.numDirectionalShadows=b,I.numPointShadows=S,I.numSpotShadows=C,I.numSpotMaps=x,I.numLightProbes=A,n.version=k1++)}function l(c,h){let f=0,u=0,d=0,m=0,_=0,g=0,p=h.matrixWorldInverse;for(let y=0,T=c.length;y<T;y++){let v=c[y];if(v.isSunLight){let b=n.sun[f];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),f++}else if(v.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),u++}else if(v.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let b=n.rectArea[_];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Md(s){let t=new G1(s),e=[],n=[],i=[];function r(u){f.camera=u,e.length=0,n.length=0,i.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function V1(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Md(s),t.set(i,[a])):r>=o.length?(a=new Md(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var W1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X1=`uniform sampler2D shadow_pass;
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
}`,q1=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Y1=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Sd=new ae,Lo=new U,Gh=new U;function Z1(s,t,e){let n=new ir,i=new _t,r=new _t,o=new we,a=new Xa,l=new qa,c={},h=e.maxTextureSize,f={[Kn]:cn,[cn]:Kn,[En]:En},u=new Ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:W1,fragmentShader:X1}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new Ae;m.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Me(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ji;let p=this.type;this.render=function(S,C,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===gf&&(ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ji);let E=s.getRenderTarget(),A=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Je),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let O=p!==this.type;O&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(k=>k.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,k=S.length;D<k;D++){let W=S[D],Y=W.shadow;if(Y===void 0){ie("WebGLShadowMap:",W,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);let ot=Y.getFrameExtents();i.multiply(ot),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ot.x),i.x=r.x*ot.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ot.y),i.y=r.y*ot.y,Y.mapSize.y=r.y));let Z=s.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=Z,Y.map===null||O===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===dr){if(W.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Ye(i.x,i.y,{format:es,type:on,minFilter:ln,magFilter:ln,generateMipmaps:!1}),Y.map.texture.name=W.name+".shadowMap",Y.map.depthTexture=new ui(i.x,i.y,Pn),Y.map.depthTexture.name=W.name+".shadowMapDepth",Y.map.depthTexture.format=ai,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=qe,Y.map.depthTexture.magFilter=qe}else W.isPointLight?(Y.map=new Kl(i.x),Y.map.depthTexture=new Oa(i.x,ti)):(Y.map=new Ye(i.x,i.y),Y.map.depthTexture=new ui(i.x,i.y,ti)),Y.map.depthTexture.name=W.name+".shadowMap",Y.map.depthTexture.format=ai,this.type===Ji?(Y.map.depthTexture.compareFunction=Z?Jl:Zl,Y.map.depthTexture.minFilter=ln,Y.map.depthTexture.magFilter=ln):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=qe,Y.map.depthTexture.magFilter=qe);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==i.x||Y.map.height!==i.y)&&Y.map.setSize(i.x,i.y);let rt=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();W.isPointLight!==!0&&Y.updateMatrices(W,x);for(let j=0;j<rt;j++){let gt=Y.getCamera(j);if(W.isPointLight){let mt=Y.camera,ee=Y.matrix,te=W.distance||mt.far;te!==mt.far&&(mt.far=te,mt.updateProjectionMatrix()),Lo.setFromMatrixPosition(W.matrixWorld),mt.position.copy(Lo),Gh.copy(mt.position),Gh.add(q1[j]),mt.up.copy(Y1[j]),mt.lookAt(Gh),mt.updateMatrixWorld(),ee.makeTranslation(-Lo.x,-Lo.y,-Lo.z),Sd.multiplyMatrices(mt.projectionMatrix,mt.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Sd,mt.coordinateSystem,mt.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,j),s.clear();else{j===0&&(s.setRenderTarget(Y.map),s.clear());let mt=Y.getViewport(j);o.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),F.viewport(o)}n=Y.getFrustum(j),v(C,x,gt,W,this.type)}Y.isPointLightShadow!==!0&&this.type===dr&&y(Y,x),Y.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(E,A,I)};function y(S,C){let x=t.update(_);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new Ye(i.x,i.y,{format:es,type:on}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(C,null,x,u,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(C,null,x,d,_,null)}function T(S,C,x,E){let A=null,I=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)A=I;else if(A=x.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let F=A.uuid,O=C.uuid,D=c[F];D===void 0&&(D={},c[F]=D);let k=D[O];k===void 0&&(k=A.clone(),D[O]=k,C.addEventListener("dispose",b)),A=k}if(A.visible=C.visible,A.wireframe=C.wireframe,E===dr?A.side=C.shadowSide!==null?C.shadowSide:C.side:A.side=C.shadowSide!==null?C.shadowSide:f[C.side],A.alphaMap=C.alphaMap,A.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,A.map=C.map,A.clipShadows=C.clipShadows,A.clippingPlanes=C.clippingPlanes,A.clipIntersection=C.clipIntersection,A.displacementMap=C.displacementMap,A.displacementScale=C.displacementScale,A.displacementBias=C.displacementBias,A.wireframeLinewidth=C.wireframeLinewidth,A.linewidth=C.linewidth,x.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let F=s.properties.get(A);F.light=x}return A}function v(S,C,x,E,A){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===dr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let O=t.update(S),D=S.material;if(Array.isArray(D)){let k=O.groups;for(let W=0,Y=k.length;W<Y;W++){let ot=k[W],Z=D[ot.materialIndex];if(Z&&Z.visible){let rt=T(S,Z,E,A);S.onBeforeShadow(s,S,C,x,O,rt,ot),s.renderBufferDirect(x,null,O,rt,S,ot),S.onAfterShadow(s,S,C,x,O,rt,ot)}}}else if(D.visible){let k=T(S,D,E,A);S.onBeforeShadow(s,S,C,x,O,k,null),s.renderBufferDirect(x,null,O,k,S,null),S.onAfterShadow(s,S,C,x,O,k,null)}}let F=S.children;for(let O=0,D=F.length;O<D;O++)v(F[O],C,x,E,A)}function b(S){S.target.removeEventListener("dispose",b);for(let x in c){let E=c[x],A=S.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function J1(s,t){function e(){let X=!1,At=new we,ft=null,Rt=new we(0,0,0,0);return{setMask:function(Dt){ft!==Dt&&!X&&(s.colorMask(Dt,Dt,Dt,Dt),ft=Dt)},setLocked:function(Dt){X=Dt},setClear:function(Dt,vt,Qt,Zt,Fe){Fe===!0&&(Dt*=Zt,vt*=Zt,Qt*=Zt),At.set(Dt,vt,Qt,Zt),Rt.equals(At)===!1&&(s.clearColor(Dt,vt,Qt,Zt),Rt.copy(At))},reset:function(){X=!1,ft=null,Rt.set(-1,0,0,0)}}}function n(){let X=!1,At=!1,ft=null,Rt=null,Dt=null;return{setReversed:function(vt){if(At!==vt){let Qt=t.get("EXT_clip_control");vt?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT),At=vt;let Zt=Dt;Dt=null,this.setClear(Zt)}},getReversed:function(){return At},setTest:function(vt){vt?R(s.DEPTH_TEST):B(s.DEPTH_TEST)},setMask:function(vt){ft!==vt&&!X&&(s.depthMask(vt),ft=vt)},setFunc:function(vt){if(At&&(vt=Yf[vt]),Rt!==vt){switch(vt){case wa:s.depthFunc(s.NEVER);break;case Aa:s.depthFunc(s.ALWAYS);break;case Ra:s.depthFunc(s.LESS);break;case Zs:s.depthFunc(s.LEQUAL);break;case Ca:s.depthFunc(s.EQUAL);break;case Pa:s.depthFunc(s.GEQUAL);break;case Ia:s.depthFunc(s.GREATER);break;case La:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Rt=vt}},setLocked:function(vt){X=vt},setClear:function(vt){Dt!==vt&&(Dt=vt,At&&(vt=1-vt),s.clearDepth(vt))},reset:function(){X=!1,ft=null,Rt=null,Dt=null,At=!1}}}function i(){let X=!1,At=null,ft=null,Rt=null,Dt=null,vt=null,Qt=null,Zt=null,Fe=null;return{setTest:function(Ee){X||(Ee?R(s.STENCIL_TEST):B(s.STENCIL_TEST))},setMask:function(Ee){At!==Ee&&!X&&(s.stencilMask(Ee),At=Ee)},setFunc:function(Ee,Xn,ei){(ft!==Ee||Rt!==Xn||Dt!==ei)&&(s.stencilFunc(Ee,Xn,ei),ft=Ee,Rt=Xn,Dt=ei)},setOp:function(Ee,Xn,ei){(vt!==Ee||Qt!==Xn||Zt!==ei)&&(s.stencilOp(Ee,Xn,ei),vt=Ee,Qt=Xn,Zt=ei)},setLocked:function(Ee){X=Ee},setClear:function(Ee){Fe!==Ee&&(s.clearStencil(Ee),Fe=Ee)},reset:function(){X=!1,At=null,ft=null,Rt=null,Dt=null,vt=null,Qt=null,Zt=null,Fe=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,m=[],_=null,g=!1,p=null,y=null,T=null,v=null,b=null,S=null,C=null,x=new jt(0,0,0),E=0,A=!1,I=null,F=null,O=null,D=null,k=null,W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,ot=0,Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Y=ot>=1):Z.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Y=ot>=2);let rt=null,j={},gt=s.getParameter(s.SCISSOR_BOX),mt=s.getParameter(s.VIEWPORT),ee=new we().fromArray(gt),te=new we().fromArray(mt);function kt(X,At,ft,Rt){let Dt=new Uint8Array(4),vt=s.createTexture();s.bindTexture(X,vt),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qt=0;Qt<ft;Qt++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(At,0,s.RGBA,1,1,Rt,0,s.RGBA,s.UNSIGNED_BYTE,Dt):s.texImage2D(At+Qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Dt);return vt}let M={};M[s.TEXTURE_2D]=kt(s.TEXTURE_2D,s.TEXTURE_2D,1),M[s.TEXTURE_CUBE_MAP]=kt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),M[s.TEXTURE_2D_ARRAY]=kt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),M[s.TEXTURE_3D]=kt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),R(s.DEPTH_TEST),o.setFunc(Zs),ct(!1),yt(dh),R(s.CULL_FACE),et(Je);function R(X){h[X]!==!0&&(s.enable(X),h[X]=!0)}function B(X){h[X]!==!1&&(s.disable(X),h[X]=!1)}function H(X,At){return u[X]!==At?(s.bindFramebuffer(X,At),u[X]=At,X===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=At),X===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=At),!0):!1}function N(X,At){let ft=m,Rt=!1;if(X){ft=d.get(At),ft===void 0&&(ft=[],d.set(At,ft));let Dt=X.textures;if(ft.length!==Dt.length||ft[0]!==s.COLOR_ATTACHMENT0){for(let vt=0,Qt=Dt.length;vt<Qt;vt++)ft[vt]=s.COLOR_ATTACHMENT0+vt;ft.length=Dt.length,Rt=!0}}else ft[0]!==s.BACK&&(ft[0]=s.BACK,Rt=!0);Rt&&s.drawBuffers(ft)}function $(X){return _!==X?(s.useProgram(X),_=X,!0):!1}let ht={[On]:s.FUNC_ADD,[xf]:s.FUNC_SUBTRACT,[_f]:s.FUNC_REVERSE_SUBTRACT};ht[vf]=s.MIN,ht[yf]=s.MAX;let G={[gs]:s.ZERO,[Mf]:s.ONE,[Sf]:s.SRC_COLOR,[gh]:s.SRC_ALPHA,[wf]:s.SRC_ALPHA_SATURATE,[go]:s.DST_COLOR,[mo]:s.DST_ALPHA,[bf]:s.ONE_MINUS_SRC_COLOR,[xh]:s.ONE_MINUS_SRC_ALPHA,[Tf]:s.ONE_MINUS_DST_COLOR,[Ef]:s.ONE_MINUS_DST_ALPHA,[Af]:s.CONSTANT_COLOR,[Rf]:s.ONE_MINUS_CONSTANT_COLOR,[Cf]:s.CONSTANT_ALPHA,[Pf]:s.ONE_MINUS_CONSTANT_ALPHA};function et(X,At,ft,Rt,Dt,vt,Qt,Zt,Fe,Ee){if(X===Je){g===!0&&(B(s.BLEND),g=!1);return}if(g===!1&&(R(s.BLEND),g=!0),X!==ol){if(X!==p||Ee!==A){if((y!==On||b!==On)&&(s.blendEquation(s.FUNC_ADD),y=On,b=On),Ee)switch(X){case Ai:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $i:s.blendFunc(s.ONE,s.ONE);break;case ph:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:oe("WebGLState: Invalid blending: ",X);break}else switch(X){case Ai:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $i:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ph:oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mh:oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:oe("WebGLState: Invalid blending: ",X);break}T=null,v=null,S=null,C=null,x.set(0,0,0),E=0,p=X,A=Ee}return}Dt=Dt||At,vt=vt||ft,Qt=Qt||Rt,(At!==y||Dt!==b)&&(s.blendEquationSeparate(ht[At],ht[Dt]),y=At,b=Dt),(ft!==T||Rt!==v||vt!==S||Qt!==C)&&(s.blendFuncSeparate(G[ft],G[Rt],G[vt],G[Qt]),T=ft,v=Rt,S=vt,C=Qt),(Zt.equals(x)===!1||Fe!==E)&&(s.blendColor(Zt.r,Zt.g,Zt.b,Fe),x.copy(Zt),E=Fe),p=X,A=!1}function at(X,At){X.side===En?B(s.CULL_FACE):R(s.CULL_FACE);let ft=X.side===cn;At&&(ft=!ft),ct(ft),X.blending===Ai&&X.transparent===!1?et(Je):et(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);let Rt=X.stencilWrite;a.setTest(Rt),Rt&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Nt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?R(s.SAMPLE_ALPHA_TO_COVERAGE):B(s.SAMPLE_ALPHA_TO_COVERAGE)}function ct(X){I!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),I=X)}function yt(X){X!==pf?(R(s.CULL_FACE),X!==F&&(X===dh?s.cullFace(s.BACK):X===mf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):B(s.CULL_FACE),F=X}function Ot(X){X!==O&&(Y&&s.lineWidth(X),O=X)}function Nt(X,At,ft){X?(R(s.POLYGON_OFFSET_FILL),(D!==At||k!==ft)&&(D=At,k=ft,o.getReversed()&&(At=-At),s.polygonOffset(At,ft))):B(s.POLYGON_OFFSET_FILL)}function qt(X){X?R(s.SCISSOR_TEST):B(s.SCISSOR_TEST)}function Yt(X){X===void 0&&(X=s.TEXTURE0+W-1),rt!==X&&(s.activeTexture(X),rt=X)}function z(X,At,ft){ft===void 0&&(rt===null?ft=s.TEXTURE0+W-1:ft=rt);let Rt=j[ft];Rt===void 0&&(Rt={type:void 0,texture:void 0},j[ft]=Rt),(Rt.type!==X||Rt.texture!==At)&&(rt!==ft&&(s.activeTexture(ft),rt=ft),s.bindTexture(X,At||M[X]),Rt.type=X,Rt.texture=At)}function ne(){let X=j[rt];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function de(){try{s.compressedTexImage2D(...arguments)}catch(X){oe("WebGLState:",X)}}function L(){try{s.compressedTexImage3D(...arguments)}catch(X){oe("WebGLState:",X)}}function w(){try{s.texSubImage2D(...arguments)}catch(X){oe("WebGLState:",X)}}function q(){try{s.texSubImage3D(...arguments)}catch(X){oe("WebGLState:",X)}}function J(){try{s.compressedTexSubImage2D(...arguments)}catch(X){oe("WebGLState:",X)}}function tt(){try{s.compressedTexSubImage3D(...arguments)}catch(X){oe("WebGLState:",X)}}function xt(){try{s.texStorage2D(...arguments)}catch(X){oe("WebGLState:",X)}}function bt(){try{s.texStorage3D(...arguments)}catch(X){oe("WebGLState:",X)}}function lt(){try{s.texImage2D(...arguments)}catch(X){oe("WebGLState:",X)}}function dt(){try{s.texImage3D(...arguments)}catch(X){oe("WebGLState:",X)}}function wt(X){return f[X]!==void 0?f[X]:s.getParameter(X)}function Jt(X,At){f[X]!==At&&(s.pixelStorei(X,At),f[X]=At)}function Tt(X){ee.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),ee.copy(X))}function Et(X){te.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),te.copy(X))}function zt(X,At){let ft=c.get(At);ft===void 0&&(ft=new WeakMap,c.set(At,ft));let Rt=ft.get(X);Rt===void 0&&(Rt=s.getUniformBlockIndex(At,X.name),ft.set(X,Rt))}function Kt(X,At){let Rt=c.get(At).get(X);l.get(At)!==Rt&&(s.uniformBlockBinding(At,Rt,X.__bindingPointIndex),l.set(At,Rt))}function he(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},rt=null,j={},u={},d=new WeakMap,m=[],_=null,g=!1,p=null,y=null,T=null,v=null,b=null,S=null,C=null,x=new jt(0,0,0),E=0,A=!1,I=null,F=null,O=null,D=null,k=null,ee.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:R,disable:B,bindFramebuffer:H,drawBuffers:N,useProgram:$,setBlending:et,setMaterial:at,setFlipSided:ct,setCullFace:yt,setLineWidth:Ot,setPolygonOffset:Nt,setScissorTest:qt,activeTexture:Yt,bindTexture:z,unbindTexture:ne,compressedTexImage2D:de,compressedTexImage3D:L,texImage2D:lt,texImage3D:dt,pixelStorei:Jt,getParameter:wt,updateUBOMapping:zt,uniformBlockBinding:Kt,texStorage2D:xt,texStorage3D:bt,texSubImage2D:w,texSubImage3D:q,compressedTexSubImage2D:J,compressedTexSubImage3D:tt,scissor:Tt,viewport:Et,reset:he}}function $1(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _t,h=new WeakMap,f=new Set,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,w){return m?new OffscreenCanvas(L,w):Hr("canvas")}function g(L,w,q){let J=1,tt=de(L);if((tt.width>q||tt.height>q)&&(J=q/Math.max(tt.width,tt.height)),J<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let xt=Math.floor(J*tt.width),bt=Math.floor(J*tt.height);u===void 0&&(u=_(xt,bt));let lt=w?_(xt,bt):u;return lt.width=xt,lt.height=bt,lt.getContext("2d").drawImage(L,0,0,xt,bt),ie("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+xt+"x"+bt+")."),lt}else return"data"in L&&ie("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),L;return L}function p(L){return L.generateMipmaps}function y(L){s.generateMipmap(L)}function T(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(L,w,q,J,tt,xt=!1){if(L!==null){if(s[L]!==void 0)return s[L];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let bt;J&&(bt=t.get("EXT_texture_norm16"),bt||ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let lt=w;if(w===s.RED&&(q===s.FLOAT&&(lt=s.R32F),q===s.HALF_FLOAT&&(lt=s.R16F),q===s.UNSIGNED_BYTE&&(lt=s.R8),q===s.UNSIGNED_SHORT&&bt&&(lt=bt.R16_EXT),q===s.SHORT&&bt&&(lt=bt.R16_SNORM_EXT)),w===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(lt=s.R8UI),q===s.UNSIGNED_SHORT&&(lt=s.R16UI),q===s.UNSIGNED_INT&&(lt=s.R32UI),q===s.BYTE&&(lt=s.R8I),q===s.SHORT&&(lt=s.R16I),q===s.INT&&(lt=s.R32I)),w===s.RG&&(q===s.FLOAT&&(lt=s.RG32F),q===s.HALF_FLOAT&&(lt=s.RG16F),q===s.UNSIGNED_BYTE&&(lt=s.RG8),q===s.UNSIGNED_SHORT&&bt&&(lt=bt.RG16_EXT),q===s.SHORT&&bt&&(lt=bt.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(lt=s.RG8UI),q===s.UNSIGNED_SHORT&&(lt=s.RG16UI),q===s.UNSIGNED_INT&&(lt=s.RG32UI),q===s.BYTE&&(lt=s.RG8I),q===s.SHORT&&(lt=s.RG16I),q===s.INT&&(lt=s.RG32I)),w===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(lt=s.RGB8UI),q===s.UNSIGNED_SHORT&&(lt=s.RGB16UI),q===s.UNSIGNED_INT&&(lt=s.RGB32UI),q===s.BYTE&&(lt=s.RGB8I),q===s.SHORT&&(lt=s.RGB16I),q===s.INT&&(lt=s.RGB32I)),w===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(lt=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(lt=s.RGBA16UI),q===s.UNSIGNED_INT&&(lt=s.RGBA32UI),q===s.BYTE&&(lt=s.RGBA8I),q===s.SHORT&&(lt=s.RGBA16I),q===s.INT&&(lt=s.RGBA32I)),w===s.RGB&&(q===s.UNSIGNED_SHORT&&bt&&(lt=bt.RGB16_EXT),q===s.SHORT&&bt&&(lt=bt.RGB16_SNORM_EXT),q===s.UNSIGNED_INT_5_9_9_9_REV&&(lt=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(lt=s.R11F_G11F_B10F)),w===s.RGBA){let dt=xt?kr:ve.getTransfer(tt);q===s.FLOAT&&(lt=s.RGBA32F),q===s.HALF_FLOAT&&(lt=s.RGBA16F),q===s.UNSIGNED_BYTE&&(lt=dt===be?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT&&bt&&(lt=bt.RGBA16_EXT),q===s.SHORT&&bt&&(lt=bt.RGBA16_SNORM_EXT),q===s.UNSIGNED_SHORT_4_4_4_4&&(lt=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(lt=s.RGB5_A1)}return(lt===s.R16F||lt===s.R32F||lt===s.RG16F||lt===s.RG32F||lt===s.RGBA16F||lt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function b(L,w){let q;return L?w===null||w===ti||w===ts?q=s.DEPTH24_STENCIL8:w===Pn?q=s.DEPTH32F_STENCIL8:w===pr&&(q=s.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ti||w===ts?q=s.DEPTH_COMPONENT24:w===Pn?q=s.DEPTH_COMPONENT32F:w===pr&&(q=s.DEPTH_COMPONENT16),q}function S(L,w){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==qe&&L.minFilter!==ln?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function C(L){let w=L.target;w.removeEventListener("dispose",C),E(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&f.delete(w)}function x(L){let w=L.target;w.removeEventListener("dispose",x),I(w)}function E(L){let w=n.get(L);if(w.__webglInit===void 0)return;let q=L.source,J=d.get(q);if(J){let tt=J[w.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&A(L),Object.keys(J).length===0&&d.delete(q)}n.remove(L)}function A(L){let w=n.get(L);s.deleteTexture(w.__webglTexture);let q=L.source,J=d.get(q);delete J[w.__cacheKey],o.memory.textures--}function I(L){let w=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let tt=0;tt<w.__webglFramebuffer[J].length;tt++)s.deleteFramebuffer(w.__webglFramebuffer[J][tt]);else s.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)s.deleteFramebuffer(w.__webglFramebuffer[J]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let q=L.textures;for(let J=0,tt=q.length;J<tt;J++){let xt=n.get(q[J]);xt.__webglTexture&&(s.deleteTexture(xt.__webglTexture),o.memory.textures--),n.remove(q[J])}n.remove(L)}let F=0;function O(){F=0}function D(){return F}function k(L){F=L}function W(){let L=F;return L>=i.maxTextures&&ie("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+i.maxTextures),F+=1,L}function Y(L){let w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function ot(L,w){let q=n.get(L);if(L.isVideoTexture&&z(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){let J=L.image;if(J===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{B(q,L,w);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+w)}function Z(L,w){let q=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){B(q,L,w);return}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+w)}function rt(L,w){let q=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){B(q,L,w);return}e.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+w)}function j(L,w){let q=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&q.__version!==L.version){H(q,L,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+w)}let gt={[bn]:s.REPEAT,[ri]:s.CLAMP_TO_EDGE,[Fa]:s.MIRRORED_REPEAT},mt={[qe]:s.NEAREST,[Df]:s.NEAREST_MIPMAP_NEAREST,[Eo]:s.NEAREST_MIPMAP_LINEAR,[ln]:s.LINEAR,[hl]:s.LINEAR_MIPMAP_NEAREST,[Qi]:s.LINEAR_MIPMAP_LINEAR},ee={[Of]:s.NEVER,[Vf]:s.ALWAYS,[zf]:s.LESS,[Zl]:s.LEQUAL,[kf]:s.EQUAL,[Jl]:s.GEQUAL,[Hf]:s.GREATER,[Gf]:s.NOTEQUAL};function te(L,w){if(w.type===Pn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===ln||w.magFilter===hl||w.magFilter===Eo||w.magFilter===Qi||w.minFilter===ln||w.minFilter===hl||w.minFilter===Eo||w.minFilter===Qi)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,gt[w.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,gt[w.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,gt[w.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,mt[w.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,mt[w.minFilter]),w.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,ee[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===qe||w.minFilter!==Eo&&w.minFilter!==Qi||w.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function kt(L,w){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",C));let J=w.source,tt=d.get(J);tt===void 0&&(tt={},d.set(J,tt));let xt=Y(w);if(xt!==L.__cacheKey){tt[xt]===void 0&&(tt[xt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),tt[xt].usedTimes++;let bt=tt[L.__cacheKey];bt!==void 0&&(tt[L.__cacheKey].usedTimes--,bt.usedTimes===0&&A(w)),L.__cacheKey=xt,L.__webglTexture=tt[xt].texture}return q}function M(L,w,q){return Math.floor(Math.floor(L/q)/w)}function R(L,w,q,J){let xt=L.updateRanges;if(xt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,q,J,w.data);else{xt.sort((Jt,Tt)=>Jt.start-Tt.start);let bt=0;for(let Jt=1;Jt<xt.length;Jt++){let Tt=xt[bt],Et=xt[Jt],zt=Tt.start+Tt.count,Kt=M(Et.start,w.width,4),he=M(Tt.start,w.width,4);Et.start<=zt+1&&Kt===he&&M(Et.start+Et.count-1,w.width,4)===Kt?Tt.count=Math.max(Tt.count,Et.start+Et.count-Tt.start):(++bt,xt[bt]=Et)}xt.length=bt+1;let lt=e.getParameter(s.UNPACK_ROW_LENGTH),dt=e.getParameter(s.UNPACK_SKIP_PIXELS),wt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let Jt=0,Tt=xt.length;Jt<Tt;Jt++){let Et=xt[Jt],zt=Math.floor(Et.start/4),Kt=Math.ceil(Et.count/4),he=zt%w.width,X=Math.floor(zt/w.width),At=Kt,ft=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,he),e.pixelStorei(s.UNPACK_SKIP_ROWS,X),e.texSubImage2D(s.TEXTURE_2D,0,he,X,At,ft,q,J,w.data)}L.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,lt),e.pixelStorei(s.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(s.UNPACK_SKIP_ROWS,wt)}}function B(L,w,q){let J=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=s.TEXTURE_3D);let tt=kt(L,w),xt=w.source;e.bindTexture(J,L.__webglTexture,s.TEXTURE0+q);let bt=n.get(xt);if(xt.version!==bt.__version||tt===!0){if(e.activeTexture(s.TEXTURE0+q),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let ft=ve.getPrimaries(ve.workingColorSpace),Rt=w.colorSpace===Ri?null:ve.getPrimaries(w.colorSpace),Dt=w.colorSpace===Ri||ft===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt)}e.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let dt=g(w.image,!1,i.maxTextureSize);dt=ne(w,dt);let wt=r.convert(w.format,w.colorSpace),Jt=r.convert(w.type),Tt=v(w.internalFormat,wt,Jt,w.normalized,w.colorSpace,w.isVideoTexture);te(J,w);let Et,zt=w.mipmaps,Kt=w.isVideoTexture!==!0,he=bt.__version===void 0||tt===!0,X=xt.dataReady,At=S(w,dt);if(w.isDepthTexture)Tt=b(w.format===pi,w.type),he&&(Kt?e.texStorage2D(s.TEXTURE_2D,1,Tt,dt.width,dt.height):e.texImage2D(s.TEXTURE_2D,0,Tt,dt.width,dt.height,0,wt,Jt,null));else if(w.isDataTexture)if(zt.length>0){Kt&&he&&e.texStorage2D(s.TEXTURE_2D,At,Tt,zt[0].width,zt[0].height);for(let ft=0,Rt=zt.length;ft<Rt;ft++)Et=zt[ft],Kt?X&&e.texSubImage2D(s.TEXTURE_2D,ft,0,0,Et.width,Et.height,wt,Jt,Et.data):e.texImage2D(s.TEXTURE_2D,ft,Tt,Et.width,Et.height,0,wt,Jt,Et.data);w.generateMipmaps=!1}else Kt?(he&&e.texStorage2D(s.TEXTURE_2D,At,Tt,dt.width,dt.height),X&&R(w,dt,wt,Jt)):e.texImage2D(s.TEXTURE_2D,0,Tt,dt.width,dt.height,0,wt,Jt,dt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Kt&&he&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,Tt,zt[0].width,zt[0].height,dt.depth);for(let ft=0,Rt=zt.length;ft<Rt;ft++)if(Et=zt[ft],w.format!==yn)if(wt!==null)if(Kt){if(X)if(w.layerUpdates.size>0){let Dt=Ih(Et.width,Et.height,w.format,w.type);for(let vt of w.layerUpdates){let Qt=Et.data.subarray(vt*Dt/Et.data.BYTES_PER_ELEMENT,(vt+1)*Dt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,vt,Et.width,Et.height,1,wt,Qt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,Et.width,Et.height,dt.depth,wt,Et.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ft,Tt,Et.width,Et.height,dt.depth,0,Et.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?X&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,Et.width,Et.height,dt.depth,wt,Jt,Et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ft,Tt,Et.width,Et.height,dt.depth,0,wt,Jt,Et.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Kt&&he&&e.texStorage2D(s.TEXTURE_2D,At,Tt,zt[0].width,zt[0].height);for(let ft=0,Rt=zt.length;ft<Rt;ft++)Et=zt[ft],w.format!==yn?wt!==null?Kt?X&&e.compressedTexSubImage2D(s.TEXTURE_2D,ft,0,0,Et.width,Et.height,wt,Et.data):e.compressedTexImage2D(s.TEXTURE_2D,ft,Tt,Et.width,Et.height,0,Et.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?X&&e.texSubImage2D(s.TEXTURE_2D,ft,0,0,Et.width,Et.height,wt,Jt,Et.data):e.texImage2D(s.TEXTURE_2D,ft,Tt,Et.width,Et.height,0,wt,Jt,Et.data)}else if(w.isDataArrayTexture)if(Kt){if(he&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,Tt,dt.width,dt.height,dt.depth),X)if(w.layerUpdates.size>0){let ft=Ih(dt.width,dt.height,w.format,w.type);for(let Rt of w.layerUpdates){let Dt=dt.data.subarray(Rt*ft/dt.data.BYTES_PER_ELEMENT,(Rt+1)*ft/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Rt,dt.width,dt.height,1,wt,Jt,Dt)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,wt,Jt,dt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Tt,dt.width,dt.height,dt.depth,0,wt,Jt,dt.data);else if(w.isData3DTexture)Kt?(he&&e.texStorage3D(s.TEXTURE_3D,At,Tt,dt.width,dt.height,dt.depth),X&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,wt,Jt,dt.data)):e.texImage3D(s.TEXTURE_3D,0,Tt,dt.width,dt.height,dt.depth,0,wt,Jt,dt.data);else if(w.isFramebufferTexture){if(he)if(Kt)e.texStorage2D(s.TEXTURE_2D,At,Tt,dt.width,dt.height);else{let ft=dt.width,Rt=dt.height;for(let Dt=0;Dt<At;Dt++)e.texImage2D(s.TEXTURE_2D,Dt,Tt,ft,Rt,0,wt,Jt,null),ft>>=1,Rt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){let ft=s.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),dt.parentNode!==ft){ft.appendChild(dt),f.add(w),ft.onpaint=Rt=>{let Dt=Rt.changedElements;for(let vt of f)Dt.includes(vt.image)&&(vt.needsUpdate=!0)},ft.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,dt);else{let Dt=s.RGBA,vt=s.RGBA,Qt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Dt,vt,Qt,dt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(zt.length>0){if(Kt&&he){let ft=de(zt[0]);e.texStorage2D(s.TEXTURE_2D,At,Tt,ft.width,ft.height)}for(let ft=0,Rt=zt.length;ft<Rt;ft++)Et=zt[ft],Kt?X&&e.texSubImage2D(s.TEXTURE_2D,ft,0,0,wt,Jt,Et):e.texImage2D(s.TEXTURE_2D,ft,Tt,wt,Jt,Et);w.generateMipmaps=!1}else if(Kt){if(he){let ft=de(dt);e.texStorage2D(s.TEXTURE_2D,At,Tt,ft.width,ft.height)}X&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,wt,Jt,dt)}else e.texImage2D(s.TEXTURE_2D,0,Tt,wt,Jt,dt);p(w)&&y(J),bt.__version=xt.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function H(L,w,q){if(w.image.length!==6)return;let J=kt(L,w),tt=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+q);let xt=n.get(tt);if(tt.version!==xt.__version||J===!0){e.activeTexture(s.TEXTURE0+q);let bt=ve.getPrimaries(ve.workingColorSpace),lt=w.colorSpace===Ri?null:ve.getPrimaries(w.colorSpace),dt=w.colorSpace===Ri||bt===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let wt=w.isCompressedTexture||w.image[0].isCompressedTexture,Jt=w.image[0]&&w.image[0].isDataTexture,Tt=[];for(let vt=0;vt<6;vt++)!wt&&!Jt?Tt[vt]=g(w.image[vt],!0,i.maxCubemapSize):Tt[vt]=Jt?w.image[vt].image:w.image[vt],Tt[vt]=ne(w,Tt[vt]);let Et=Tt[0],zt=r.convert(w.format,w.colorSpace),Kt=r.convert(w.type),he=v(w.internalFormat,zt,Kt,w.normalized,w.colorSpace),X=w.isVideoTexture!==!0,At=xt.__version===void 0||J===!0,ft=tt.dataReady,Rt=S(w,Et);te(s.TEXTURE_CUBE_MAP,w);let Dt;if(wt){X&&At&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,he,Et.width,Et.height);for(let vt=0;vt<6;vt++){Dt=Tt[vt].mipmaps;for(let Qt=0;Qt<Dt.length;Qt++){let Zt=Dt[Qt];w.format!==yn?zt!==null?X?ft&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Qt,0,0,Zt.width,Zt.height,zt,Zt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Qt,he,Zt.width,Zt.height,0,Zt.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Qt,0,0,Zt.width,Zt.height,zt,Kt,Zt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Qt,he,Zt.width,Zt.height,0,zt,Kt,Zt.data)}}}else{if(Dt=w.mipmaps,X&&At){Dt.length>0&&Rt++;let vt=de(Tt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,he,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Jt){X?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Tt[vt].width,Tt[vt].height,zt,Kt,Tt[vt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,he,Tt[vt].width,Tt[vt].height,0,zt,Kt,Tt[vt].data);for(let Qt=0;Qt<Dt.length;Qt++){let Fe=Dt[Qt].image[vt].image;X?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Qt+1,0,0,Fe.width,Fe.height,zt,Kt,Fe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Qt+1,he,Fe.width,Fe.height,0,zt,Kt,Fe.data)}}else{X?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,zt,Kt,Tt[vt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,he,zt,Kt,Tt[vt]);for(let Qt=0;Qt<Dt.length;Qt++){let Zt=Dt[Qt];X?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Qt+1,0,0,zt,Kt,Zt.image[vt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Qt+1,he,zt,Kt,Zt.image[vt])}}}p(w)&&y(s.TEXTURE_CUBE_MAP),xt.__version=tt.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function N(L,w,q,J,tt,xt){let bt=r.convert(q.format,q.colorSpace),lt=r.convert(q.type),dt=v(q.internalFormat,bt,lt,q.normalized,q.colorSpace),wt=n.get(w),Jt=n.get(q);if(Jt.__renderTarget=w,!wt.__hasExternalTextures){let Tt=Math.max(1,w.width>>xt),Et=Math.max(1,w.height>>xt);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,xt,dt,Tt,Et,w.depth,0,bt,lt,null):e.texImage2D(tt,xt,dt,Tt,Et,0,bt,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,L),Yt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,tt,Jt.__webglTexture,0,qt(w)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,tt,Jt.__webglTexture,xt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function $(L,w,q){if(s.bindRenderbuffer(s.RENDERBUFFER,L),w.depthBuffer){let J=w.depthTexture,tt=J&&J.isDepthTexture?J.type:null,xt=b(w.stencilBuffer,tt),bt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Yt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt(w),xt,w.width,w.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt(w),xt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,xt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,L)}else{let J=w.textures;for(let tt=0;tt<J.length;tt++){let xt=J[tt],bt=r.convert(xt.format,xt.colorSpace),lt=r.convert(xt.type),dt=v(xt.internalFormat,bt,lt,xt.normalized,xt.colorSpace);Yt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt(w),dt,w.width,w.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt(w),dt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,dt,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ht(L,w,q){let J=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=n.get(w.depthTexture);if(tt.__renderTarget=w,(!tt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),J){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,w.depthTexture.addEventListener("dispose",C)),tt.__webglTexture===void 0){tt.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture),te(s.TEXTURE_CUBE_MAP,w.depthTexture);let wt=r.convert(w.depthTexture.format),Jt=r.convert(w.depthTexture.type),Tt;w.depthTexture.format===ai?Tt=s.DEPTH_COMPONENT24:w.depthTexture.format===pi&&(Tt=s.DEPTH24_STENCIL8);for(let Et=0;Et<6;Et++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Tt,w.width,w.height,0,wt,Jt,null)}}else ot(w.depthTexture,0);let xt=tt.__webglTexture,bt=qt(w),lt=J?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,dt=w.depthTexture.format===pi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===ai)Yt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,lt,xt,0,bt):s.framebufferTexture2D(s.FRAMEBUFFER,dt,lt,xt,0);else if(w.depthTexture.format===pi)Yt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,lt,xt,0,bt):s.framebufferTexture2D(s.FRAMEBUFFER,dt,lt,xt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function G(L){let w=n.get(L),q=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){let J=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){let tt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",tt)};J.addEventListener("dispose",tt),w.__depthDisposeCallback=tt}w.__boundDepthTexture=J}if(L.depthTexture&&!w.__autoAllocateDepthBuffer)if(q)for(let J=0;J<6;J++)ht(w.__webglFramebuffer[J],L,J);else{let J=L.texture.mipmaps;J&&J.length>0?ht(w.__webglFramebuffer[0],L,0):ht(w.__webglFramebuffer,L,0)}else if(q){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=s.createRenderbuffer(),$(w.__webglDepthbuffer[J],L,!1);else{let tt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=w.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,xt),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,xt)}}else{let J=L.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),$(w.__webglDepthbuffer,L,!1);else{let tt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,xt),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,xt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function et(L,w,q){let J=n.get(L);w!==void 0&&N(J.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&G(L)}function at(L){let w=L.texture,q=n.get(L),J=n.get(w);L.addEventListener("dispose",x);let tt=L.textures,xt=L.isWebGLCubeRenderTarget===!0,bt=tt.length>1;if(bt||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=w.version,o.memory.textures++),xt){q.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[lt]=[];for(let dt=0;dt<w.mipmaps.length;dt++)q.__webglFramebuffer[lt][dt]=s.createFramebuffer()}else q.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let lt=0;lt<w.mipmaps.length;lt++)q.__webglFramebuffer[lt]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(bt)for(let lt=0,dt=tt.length;lt<dt;lt++){let wt=n.get(tt[lt]);wt.__webglTexture===void 0&&(wt.__webglTexture=s.createTexture(),o.memory.textures++)}if(L.samples>0&&Yt(L)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let lt=0;lt<tt.length;lt++){let dt=tt[lt];q.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[lt]);let wt=r.convert(dt.format,dt.colorSpace),Jt=r.convert(dt.type),Tt=v(dt.internalFormat,wt,Jt,dt.normalized,dt.colorSpace,L.isXRRenderTarget===!0),Et=qt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Et,Tt,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,q.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),$(q.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(xt){e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),te(s.TEXTURE_CUBE_MAP,w);for(let lt=0;lt<6;lt++)if(w.mipmaps&&w.mipmaps.length>0)for(let dt=0;dt<w.mipmaps.length;dt++)N(q.__webglFramebuffer[lt][dt],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,dt);else N(q.__webglFramebuffer[lt],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);p(w)&&y(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let lt=0,dt=tt.length;lt<dt;lt++){let wt=tt[lt],Jt=n.get(wt),Tt=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Tt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Tt,Jt.__webglTexture),te(Tt,wt),N(q.__webglFramebuffer,L,wt,s.COLOR_ATTACHMENT0+lt,Tt,0),p(wt)&&y(Tt)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(lt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,J.__webglTexture),te(lt,w),w.mipmaps&&w.mipmaps.length>0)for(let dt=0;dt<w.mipmaps.length;dt++)N(q.__webglFramebuffer[dt],L,w,s.COLOR_ATTACHMENT0,lt,dt);else N(q.__webglFramebuffer,L,w,s.COLOR_ATTACHMENT0,lt,0);p(w)&&y(lt),e.unbindTexture()}L.depthBuffer&&G(L)}function ct(L){let w=L.textures;for(let q=0,J=w.length;q<J;q++){let tt=w[q];if(p(tt)){let xt=T(L),bt=n.get(tt).__webglTexture;e.bindTexture(xt,bt),y(xt),e.unbindTexture()}}}let yt=[],Ot=[];function Nt(L){if(L.samples>0){if(Yt(L)===!1){let w=L.textures,q=L.width,J=L.height,tt=s.COLOR_BUFFER_BIT,xt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=n.get(L),lt=w.length>1;if(lt)for(let wt=0;wt<w.length;wt++)e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);let dt=L.texture.mipmaps;dt&&dt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let wt=0;wt<w.length;wt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,bt.__webglColorRenderbuffer[wt]);let Jt=n.get(w[wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Jt,0)}s.blitFramebuffer(0,0,q,J,0,0,q,J,tt,s.NEAREST),l===!0&&(yt.length=0,Ot.length=0,yt.push(s.COLOR_ATTACHMENT0+wt),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(yt.push(xt),Ot.push(xt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ot)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,yt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let wt=0;wt<w.length;wt++){e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,bt.__webglColorRenderbuffer[wt]);let Jt=n.get(w[wt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,Jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let w=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function qt(L){return Math.min(i.maxSamples,L.samples)}function Yt(L){let w=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function z(L){let w=o.render.frame;h.get(L)!==w&&(h.set(L,w),L.update())}function ne(L,w){let q=L.colorSpace,J=L.format,tt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==zr&&q!==Ri&&(ve.getTransfer(q)===be?(J!==yn||tt!==pn)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):oe("WebGLTextures: Unsupported texture color space:",q)),w}function de(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=O,this.getTextureUnits=D,this.setTextureUnits=k,this.setTexture2D=ot,this.setTexture2DArray=Z,this.setTexture3D=rt,this.setTextureCube=j,this.rebindTextures=et,this.setupRenderTarget=at,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=G,this.setupFrameBufferTexture=N,this.useMultisampledRTT=Yt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function j1(s,t){function e(n,i=Ri){let r,o=ve.getTransfer(i);if(n===pn)return s.UNSIGNED_BYTE;if(n===fl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===dl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Mh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Sh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===vh)return s.BYTE;if(n===yh)return s.SHORT;if(n===pr)return s.UNSIGNED_SHORT;if(n===ul)return s.INT;if(n===ti)return s.UNSIGNED_INT;if(n===Pn)return s.FLOAT;if(n===on)return s.HALF_FLOAT;if(n===bh)return s.ALPHA;if(n===Eh)return s.RGB;if(n===yn)return s.RGBA;if(n===ai)return s.DEPTH_COMPONENT;if(n===pi)return s.DEPTH_STENCIL;if(n===pl)return s.RED;if(n===ml)return s.RED_INTEGER;if(n===es)return s.RG;if(n===gl)return s.RG_INTEGER;if(n===xl)return s.RGBA_INTEGER;if(n===To||n===wo||n===Ao||n===Ro)if(o===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===To)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===To)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_l||n===vl||n===yl||n===Ml)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sl||n===bl||n===El||n===Tl||n===wl||n===Co||n===Al)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sl||n===bl)return o===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===El)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Tl)return r.COMPRESSED_R11_EAC;if(n===wl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Co)return r.COMPRESSED_RG11_EAC;if(n===Al)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Fl||n===Dl||n===Nl||n===Ul||n===Bl||n===Ol||n===zl||n===kl||n===Hl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Rl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Il)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ll)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ul)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ol)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gl||n===Vl||n===Wl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Gl)return o===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xl||n===ql||n===Po||n===Yl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var K1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q1=`
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

}`,$h=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new jr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ge({vertexShader:K1,fragmentShader:Q1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Me(new Ze(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jh=class extends li{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null,_=typeof XRWebGLBinding<"u",g=new $h,p={},y=e.getContextAttributes(),T=null,v=null,b=[],S=[],C=new _t,x=null,E=null,A=new Ke;A.viewport=new we;let I=new Ke;I.viewport=new we;let F=[A,I],O=new sl,D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(M){let R=b[M];return R===void 0&&(R=new Qs,b[M]=R),R.getTargetRaySpace()},this.getControllerGrip=function(M){let R=b[M];return R===void 0&&(R=new Qs,b[M]=R),R.getGripSpace()},this.getHand=function(M){let R=b[M];return R===void 0&&(R=new Qs,b[M]=R),R.getHandSpace()};function W(M){let R=S.indexOf(M.inputSource);if(R===-1)return;let B=b[R];B!==void 0&&(B.update(M.inputSource,M.frame,c||o),B.dispatchEvent({type:M.type,data:M.inputSource}))}function Y(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",ot);for(let M=0;M<b.length;M++){let R=S[M];R!==null&&(S[M]=null,b[M].disconnect(R))}D=null,k=null,g.reset();for(let M in p)delete p[M];if(t.setRenderTarget(T),d=null,u=null,f=null,i=null,v=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),E!==null){let M=E.camera;M.fov=E.fov,M.zoom=E.zoom,M.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(M){r=M,n.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(M){a=M,n.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(M){c=M},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(M){if(i=M,i!==null){if(T=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",ot),y.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let B=null,H=null,N=null;y.depth&&(N=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,B=y.stencil?pi:ai,H=y.stencil?ts:ti);let $={colorFormat:e.RGBA8,depthFormat:N,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer($),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Ye(u.textureWidth,u.textureHeight,{format:yn,type:pn,depthTexture:new ui(u.textureWidth,u.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let B={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,B),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Ye(d.framebufferWidth,d.framebufferHeight,{format:yn,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),kt.setContext(i),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ot(M){for(let R=0;R<M.removed.length;R++){let B=M.removed[R],H=S.indexOf(B);H>=0&&(S[H]=null,b[H].disconnect(B))}for(let R=0;R<M.added.length;R++){let B=M.added[R],H=S.indexOf(B);if(H===-1){for(let $=0;$<b.length;$++)if($>=S.length){S.push(B),H=$;break}else if(S[$]===null){S[$]=B,H=$;break}if(H===-1)break}let N=b[H];N&&N.connect(B)}}let Z=new U,rt=new U;function j(M,R,B){Z.setFromMatrixPosition(R.matrixWorld),rt.setFromMatrixPosition(B.matrixWorld);let H=Z.distanceTo(rt),N=R.projectionMatrix.elements,$=B.projectionMatrix.elements,ht=N[14]/(N[10]-1),G=N[14]/(N[10]+1),et=(N[9]+1)/N[5],at=(N[9]-1)/N[5],ct=(N[8]-1)/N[0],yt=($[8]+1)/$[0],Ot=ht*ct,Nt=ht*yt,qt=H/(-ct+yt),Yt=qt*-ct;if(R.matrixWorld.decompose(M.position,M.quaternion,M.scale),M.translateX(Yt),M.translateZ(qt),M.matrixWorld.compose(M.position,M.quaternion,M.scale),M.matrixWorldInverse.copy(M.matrixWorld).invert(),N[10]===-1)M.projectionMatrix.copy(R.projectionMatrix),M.projectionMatrixInverse.copy(R.projectionMatrixInverse);else{let z=ht+qt,ne=G+qt,de=Ot-Yt,L=Nt+(H-Yt),w=et*G/ne*z,q=at*G/ne*z;M.projectionMatrix.makePerspective(de,L,w,q,z,ne),M.projectionMatrixInverse.copy(M.projectionMatrix).invert()}}function gt(M,R){R===null?M.matrixWorld.copy(M.matrix):M.matrixWorld.multiplyMatrices(R.matrixWorld,M.matrix),M.matrixWorldInverse.copy(M.matrixWorld).invert()}this.updateCamera=function(M){if(i===null)return;let R=M.near,B=M.far;g.texture!==null&&(g.depthNear>0&&(R=g.depthNear),g.depthFar>0&&(B=g.depthFar)),O.near=I.near=A.near=R,O.far=I.far=A.far=B,(D!==O.near||k!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),D=O.near,k=O.far),O.layers.mask=M.layers.mask|6,A.layers.mask=O.layers.mask&-5,I.layers.mask=O.layers.mask&-3;let H=M.parent,N=O.cameras;gt(O,H);for(let $=0;$<N.length;$++)gt(N[$],H);N.length===2?j(O,A,I):O.projectionMatrix.copy(A.projectionMatrix),E===null&&M.isPerspectiveCamera&&(E={camera:M,fov:M.fov,zoom:M.zoom}),mt(M,O,H)};function mt(M,R,B){B===null?M.matrix.copy(R.matrixWorld):(M.matrix.copy(B.matrixWorld),M.matrix.invert(),M.matrix.multiply(R.matrixWorld)),M.matrix.decompose(M.position,M.quaternion,M.scale),M.updateMatrixWorld(!0),M.projectionMatrix.copy(R.projectionMatrix),M.projectionMatrixInverse.copy(R.projectionMatrixInverse),M.isPerspectiveCamera&&(M.fov=Vr*2*Math.atan(1/M.projectionMatrix.elements[5]),M.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(M){l=M,u!==null&&(u.fixedFoveation=M),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=M)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(M){return p[M]};let ee=null;function te(M,R){if(h=R.getViewerPose(c||o),m=R,h!==null){let B=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let H=!1;B.length!==O.cameras.length&&(O.cameras.length=0,H=!0);for(let G=0;G<B.length;G++){let et=B[G],at=null;if(d!==null)at=d.getViewport(et);else{let yt=f.getViewSubImage(u,et);at=yt.viewport,G===0&&(t.setRenderTargetTextures(v,yt.colorTexture,yt.depthStencilTexture),t.setRenderTarget(v))}let ct=F[G];ct===void 0&&(ct=new Ke,ct.layers.enable(G),ct.viewport=new we,F[G]=ct),ct.matrix.fromArray(et.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(et.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(at.x,at.y,at.width,at.height),G===0&&(O.matrix.copy(ct.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),H===!0&&O.cameras.push(ct)}let N=i.enabledFeatures;if(N&&N.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let G=f.getDepthInformation(B[0]);G&&G.isValid&&G.texture&&g.init(G,i.renderState)}if(N&&N.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let G=0;G<B.length;G++){let et=B[G].camera;if(et){let at=p[et];at||(at=new jr,p[et]=at);let ct=f.getCameraImage(et);at.sourceTexture=ct}}}}for(let B=0;B<b.length;B++){let H=S[B],N=b[B];H!==null&&N!==void 0&&N.update(H,R,c||o)}ee&&ee(M,R),R.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:R}),m=null}let kt=new bd;kt.setAnimationLoop(te),this.setAnimationLoop=function(M){ee=M},this.dispose=function(){}}},t_=new ae,Cd=new pe;Cd.set(-1,0,0,0,1,0,0,0,1);function e_(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Rh(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,y,T,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,T):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===cn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===cn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=t.get(p),T=y.envMap,v=y.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(t_.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Cd),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=T*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function n_(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){let S=b.program;n.uniformBlockBinding(v,S)}function c(v,b){let S=i[v.id];S===void 0&&(g(v),S=h(v),i[v.id]=S,v.addEventListener("dispose",y));let C=b.program;n.updateUBOMapping(v,C);let x=t.render.frame;r[v.id]!==x&&(u(v),r[v.id]=x)}function h(v){let b=f();v.__bindingPointIndex=b;let S=s.createBuffer(),C=v.__size,x=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,C,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,S),S}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let b=i[v.id],S=v.uniforms,C=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let x=0,E=S.length;x<E;x++){let A=S[x];if(Array.isArray(A))for(let I=0,F=A.length;I<F;I++)d(A[I],x,I,C);else d(A,x,0,C)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,b,S,C){if(_(v,b,S,C)===!0){let x=v.__offset,E=v.value;if(Array.isArray(E)){let A=0;for(let I=0;I<E.length;I++){let F=E[I],O=p(F);m(F,v.__data,A),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(A+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,x,v.__data)}}function m(v,b,S){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,S)}function _(v,b,S,C){let x=v.value,E=b+"_"+S;if(C[E]===void 0)return typeof x=="number"||typeof x=="boolean"?C[E]=x:ArrayBuffer.isView(x)?C[E]=x.slice():C[E]=x.clone(),!0;{let A=C[E];if(typeof x=="number"||typeof x=="boolean"){if(A!==x)return C[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(A.equals(x)===!1)return A.copy(x),!0}}return!1}function g(v){let b=v.uniforms,S=0,C=16;for(let E=0,A=b.length;E<A;E++){let I=Array.isArray(b[E])?b[E]:[b[E]];for(let F=0,O=I.length;F<O;F++){let D=I[F],k=Array.isArray(D.value)?D.value:[D.value];for(let W=0,Y=k.length;W<Y;W++){let ot=k[W],Z=p(ot),rt=S%C,j=rt%Z.boundary,gt=rt+j;S+=j,gt!==0&&C-gt<Z.storage&&(S+=C-gt),D.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=Z.storage}}}let x=S%C;return x>0&&(S+=C-x),v.__size=S,v.__cache={},this}function p(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):ie("WebGLRenderer: Unsupported uniform value type.",v),b}function y(v){let b=v.target;b.removeEventListener("dispose",y);let S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function T(){for(let v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:T}}var i_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),mi=null;function s_(){return mi===null&&(mi=new hi(i_,16,16,es,on),mi.name="DFG_LUT",mi.minFilter=ln,mi.magFilter=ln,mi.wrapS=ri,mi.wrapT=ri,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}var Do=class{constructor(t={}){let{canvas:e=Wf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=pn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=d,g=new Set([xl,gl,ml]),p=new Set([pn,ti,pr,ts,fl,dl]),y=new Uint32Array(4),T=new Int32Array(4),v=new U,b=null,S=null,C=[],x=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,I=!1,F=null,O=null,D=null,k=null;this._outputColorSpace=an;let W=0,Y=0,ot=null,Z=-1,rt=null,j=new we,gt=new we,mt=null,ee=new jt(0),te=0,kt=e.width,M=e.height,R=1,B=null,H=null,N=new we(0,0,kt,M),$=new we(0,0,kt,M),ht=!1,G=new ir,et=!1,at=!1,ct=new ae,yt=new U,Ot=new we,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function Yt(){return ot===null?R:1}let z=n;function ne(P,V){return e.getContext(P,V)}let de,L,w,q,J,tt,xt,bt,lt,dt,wt,Jt,Tt,Et,zt,Kt,he,X,At,ft,Rt,Dt,vt;try{let P={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Fe,!1),e.addEventListener("webglcontextrestored",Ee,!1),e.addEventListener("webglcontextcreationerror",Xn,!1),z===null){let V="webgl2";if(z=ne(V,P),z===null)throw ne(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qt()}catch(P){throw e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",Xn,!1),oe("WebGLRenderer: "+P.message),P}function Qt(){de=new ux(z),de.init(),Rt=new j1(z,de),L=new ex(z,de,t,Rt),w=new J1(z,de),L.reversedDepthBuffer&&u&&w.buffers.depth.setReversed(!0),O=z.createFramebuffer(),D=z.createFramebuffer(),k=z.createFramebuffer(),q=new px(z),J=new N1,tt=new $1(z,de,w,J,L,Rt,q),xt=new hx(A),bt=new gp(z),Dt=new Qg(z,bt),lt=new fx(z,bt,q,Dt),dt=new gx(z,lt,bt,Dt,q),X=new mx(z,L,tt),zt=new nx(J),wt=new D1(A,xt,de,L,Dt,zt),Jt=new e_(A,J),Tt=new B1,Et=new V1(de),he=new Kg(A,xt,w,dt,m,l),Kt=new Z1(A,dt,L),vt=new n_(z,q,L,w),At=new tx(z,de,q),ft=new dx(z,de,q),q.programs=wt.programs,A.capabilities=L,A.extensions=de,A.properties=J,A.renderLists=Tt,A.shadowMap=Kt,A.state=w,A.info=q}_!==pn&&(E=new _x(_,e.width,e.height,a,i,r));let Zt=new jh(A,z);this.xr=Zt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let P=de.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=de.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(P){P!==void 0&&(R=P,this.setSize(kt,M,!1))},this.getSize=function(P){return P.set(kt,M)},this.setSize=function(P,V,st=!0){if(Zt.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}kt=P,M=V,e.width=Math.floor(P*R),e.height=Math.floor(V*R),st===!0&&(e.style.width=P+"px",e.style.height=V+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,P,V)},this.getDrawingBufferSize=function(P){return P.set(kt*R,M*R).floor()},this.setDrawingBufferSize=function(P,V,st){kt=P,M=V,R=st,e.width=Math.floor(P*st),e.height=Math.floor(V*st),this.setViewport(0,0,P,V)},this.setEffects=function(P){if(_===pn){oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let V=0;V<P.length;V++)if(P[V].isOutputPass===!0){ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(j)},this.getViewport=function(P){return P.copy(N)},this.setViewport=function(P,V,st,K){P.isVector4?N.set(P.x,P.y,P.z,P.w):N.set(P,V,st,K),w.viewport(j.copy(N).multiplyScalar(R).round())},this.getScissor=function(P){return P.copy($)},this.setScissor=function(P,V,st,K){P.isVector4?$.set(P.x,P.y,P.z,P.w):$.set(P,V,st,K),w.scissor(gt.copy($).multiplyScalar(R).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(P){w.setScissorTest(ht=P)},this.setOpaqueSort=function(P){B=P},this.setTransparentSort=function(P){H=P},this.getClearColor=function(P){return P.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(P=!0,V=!0,st=!0){let K=0;if(P){let Q=!1;if(ot!==null){let Lt=ot.texture.format;Q=g.has(Lt)}if(Q){let Lt=ot.texture.type,Bt=p.has(Lt),It=he.getClearColor(),Ht=he.getClearAlpha(),$t=It.r,ge=It.g,ye=It.b;Bt?(y[0]=$t,y[1]=ge,y[2]=ye,y[3]=Ht,z.clearBufferuiv(z.COLOR,0,y)):(T[0]=$t,T[1]=ge,T[2]=ye,T[3]=Ht,z.clearBufferiv(z.COLOR,0,T))}else K|=z.COLOR_BUFFER_BIT}V&&(K|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),st&&(K|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&z.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),F=P},this.dispose=function(){e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",Xn,!1),he.dispose(),Tt.dispose(),Et.dispose(),J.dispose(),xt.dispose(),dt.dispose(),Dt.dispose(),vt.dispose(),wt.dispose(),Zt.dispose(),Zt.removeEventListener("sessionstart",yu),Zt.removeEventListener("sessionend",Mu),is.stop()};function Fe(P){P.preventDefault(),Gr("WebGLRenderer: Context Lost."),I=!0}function Ee(){Gr("WebGLRenderer: Context Restored."),I=!1;let P=q.autoReset,V=Kt.enabled,st=Kt.autoUpdate,K=Kt.needsUpdate,Q=Kt.type;Qt(),q.autoReset=P,Kt.enabled=V,Kt.autoUpdate=st,Kt.needsUpdate=K,Kt.type=Q}function Xn(P){oe("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ei(P){let V=P.target;V.removeEventListener("dispose",ei),Zd(V)}function Zd(P){Jd(P),J.remove(P)}function Jd(P){let V=J.get(P).programs;V!==void 0&&(V.forEach(function(st){wt.releaseProgram(st)}),P.isShaderMaterial&&wt.releaseShaderCache(P))}this.renderBufferDirect=function(P,V,st,K,Q,Lt){V===null&&(V=Nt);let Bt=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,It=Kd(P,V,st,K,Q);w.setMaterial(K,Bt);let Ht=st.index,$t=1;if(K.wireframe===!0){if(Ht=lt.getWireframeAttribute(st),Ht===void 0)return;$t=2}let ge=st.drawRange,ye=st.attributes.position,Gt=ge.start*$t,Te=(ge.start+ge.count)*$t;Lt!==null&&(Gt=Math.max(Gt,Lt.start*$t),Te=Math.min(Te,(Lt.start+Lt.count)*$t)),Ht!==null?(Gt=Math.max(Gt,0),Te=Math.min(Te,Ht.count)):ye!=null&&(Gt=Math.max(Gt,0),Te=Math.min(Te,ye.count));let $e=Te-Gt;if($e<0||$e===1/0)return;Dt.setup(Q,K,It,st,Ht);let Ue,Le=At;if(Ht!==null&&(Ue=bt.get(Ht),Le=ft,Le.setIndex(Ue)),Q.isMesh)K.wireframe===!0?(w.setLineWidth(K.wireframeLinewidth*Yt()),Le.setMode(z.LINES)):Le.setMode(z.TRIANGLES);else if(Q.isLine){let hn=K.linewidth;hn===void 0&&(hn=1),w.setLineWidth(hn*Yt()),Q.isLineSegments?Le.setMode(z.LINES):Q.isLineLoop?Le.setMode(z.LINE_LOOP):Le.setMode(z.LINE_STRIP)}else Q.isPoints?Le.setMode(z.POINTS):Q.isSprite&&Le.setMode(z.TRIANGLES);if(Q.isBatchedMesh)if(de.get("WEBGL_multi_draw"))Le.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let hn=Q._multiDrawStarts,Ut=Q._multiDrawCounts,gn=Q._multiDrawCount,Se=Ht?bt.get(Ht).bytesPerElement:1,Nn=J.get(K).currentProgram.getUniforms();for(let ni=0;ni<gn;ni++)Nn.setValue(z,"_gl_DrawID",ni),Le.render(hn[ni]/Se,Ut[ni])}else if(Q.isInstancedMesh)Le.renderInstances(Gt,$e,Q.count);else if(st.isInstancedBufferGeometry){let hn=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Ut=Math.min(st.instanceCount,hn);Le.renderInstances(Gt,$e,Ut)}else Le.render(Gt,$e)};function vu(P,V,st,K){F!==null&&P.isNodeMaterial&&F.setObject(K,P),et===!0&&zt.setState(P,st,!1),P.transparent===!0&&P.side===En&&P.forceSinglePass===!1?(P.side=cn,P.needsUpdate=!0,jo(P,V,K),P.side=Kn,P.needsUpdate=!0,jo(P,V,K),P.side=En):jo(P,V,K)}this.compile=function(P,V,st=null){st===null&&(st=P),F!==null&&F.renderStart(P,V,st),S=Et.get(st),S.init(V),x.push(S),st.traverseVisible(function(Q){Q.isLight&&Q.layers.test(V.layers)&&(S.pushLight(Q),Q.castShadow&&S.pushShadow(Q))}),P!==st&&P.traverseVisible(function(Q){Q.isLight&&Q.layers.test(V.layers)&&(S.pushLight(Q),Q.castShadow&&S.pushShadow(Q))}),S.setupLights(),F!==null&&F.updateLights(S.state.lightsArray),at=this.localClippingEnabled,et=zt.init(this.clippingPlanes,at),et===!0&&zt.setGlobalState(this.clippingPlanes,V),F!==null&&Kt.render(S.state.shadowsArray,st,V);let K=new Set;return P.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Lt=Q.material;if(Lt)if(Array.isArray(Lt))for(let Bt=0;Bt<Lt.length;Bt++){let It=Lt[Bt];vu(It,st,V,Q),K.add(It)}else vu(Lt,st,V,Q),K.add(Lt)}),S=x.pop(),F!==null&&F.renderEnd(),K},this.compileAsync=function(P,V,st=null){let K=this.compile(P,V,st);return new Promise(Q=>{function Lt(){if(K.forEach(function(Bt){let Ht=J.get(Bt).currentProgram;(Ht===void 0||Ht.isReady())&&K.delete(Bt)}),K.size===0){Q(P);return}setTimeout(Lt,10)}de.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let Mc=null;function $d(P){Mc&&Mc(P)}function yu(){is.stop()}function Mu(){is.start()}let is=new bd;is.setAnimationLoop($d),typeof self<"u"&&is.setContext(self),this.setAnimationLoop=function(P){Mc=P,Zt.setAnimationLoop(P),P===null?is.stop():is.start()},Zt.addEventListener("sessionstart",yu),Zt.addEventListener("sessionend",Mu),this.render=function(P,V){if(V!==void 0&&V.isCamera!==!0){oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(P,V);let st=Zt.enabled===!0&&Zt.isPresenting===!0,K=E!==null&&(ot===null||st)&&E.begin(A,ot);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Zt.enabled===!0&&Zt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Zt.cameraAutoUpdate===!0&&Zt.updateCamera(V),V=Zt.getCamera()),P.isScene===!0&&P.onBeforeRender(A,P,V,ot),S=Et.get(P,x.length),S.init(V),S.state.textureUnits=tt.getTextureUnits(),x.push(S),ct.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),G.setFromProjectionMatrix(ct,Jn,V.reversedDepth),at=this.localClippingEnabled,et=zt.init(this.clippingPlanes,at),b=Tt.get(P,C.length),b.init(),C.push(b),Zt.enabled===!0&&Zt.isPresenting===!0){let Bt=A.xr.getDepthSensingMesh();Bt!==null&&Sc(Bt,V,-1/0,A.sortObjects)}Sc(P,V,0,A.sortObjects),b.finish(),F!==null&&F.updateLights(S.state.lightsArray),A.sortObjects===!0&&b.sort(B,H),qt=Zt.enabled===!1||Zt.isPresenting===!1||Zt.hasDepthSensing()===!1,qt&&he.addToRenderList(b,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&zt.beginShadows();let Q=S.state.shadowsArray;if(Kt.render(Q,P,V),et===!0&&zt.endShadows(),(K&&E.hasRenderPass())===!1){let Bt=b.opaque,It=b.transmissive;if(S.setupLights(),V.isArrayCamera){let Ht=V.cameras;if(It.length>0)for(let $t=0,ge=Ht.length;$t<ge;$t++){let ye=Ht[$t];bu(Bt,It,P,ye)}qt&&he.render(P);for(let $t=0,ge=Ht.length;$t<ge;$t++){let ye=Ht[$t];Su(b,P,ye,ye.viewport)}}else It.length>0&&bu(Bt,It,P,V),qt&&he.render(P),Su(b,P,V)}ot!==null&&Y===0&&(tt.updateMultisampleRenderTarget(ot),tt.updateRenderTargetMipmap(ot)),K&&E.end(A),P.isScene===!0&&P.onAfterRender(A,P,V),Dt.resetDefaultState(),Z=-1,rt=null,x.pop(),x.length>0?(S=x[x.length-1],tt.setTextureUnits(S.state.textureUnits),et===!0&&zt.setGlobalState(A.clippingPlanes,S.state.camera)):S=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,F!==null&&F.renderEnd()};function Sc(P,V,st,K){if(P.visible===!1)return;if(P.layers.test(V.layers)){if(P.isGroup)st=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(V);else if(P.isLightProbeGrid)S.pushLightProbeGrid(P);else if(P.isLight)S.pushLight(P),P.castShadow&&S.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(G)){K&&Ot.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ct);let Bt=dt.update(P),It=P.material;It.visible&&b.push(P,Bt,It,st,Ot.z,null,V)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(G))){let Bt=dt.update(P),It=P.material;if(K&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ot.copy(P.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),Ot.copy(Bt.boundingSphere.center)),Ot.applyMatrix4(P.matrixWorld).applyMatrix4(ct)),Array.isArray(It)){let Ht=Bt.groups;for(let $t=0,ge=Ht.length;$t<ge;$t++){let ye=Ht[$t],Gt=It[ye.materialIndex];Gt&&Gt.visible&&b.push(P,Bt,Gt,st,Ot.z,ye,V)}}else It.visible&&b.push(P,Bt,It,st,Ot.z,null,V)}}let Lt=P.children;for(let Bt=0,It=Lt.length;Bt<It;Bt++)Sc(Lt[Bt],V,st,K)}function Su(P,V,st,K){let{opaque:Q,transmissive:Lt,transparent:Bt}=P;S.setupLightsView(st),et===!0&&zt.setGlobalState(A.clippingPlanes,st),K&&w.viewport(j.copy(K)),Q.length>0&&$o(Q,V,st),Lt.length>0&&$o(Lt,V,st),Bt.length>0&&$o(Bt,V,st),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function bu(P,V,st,K){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[K.id]===void 0){let Gt=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[K.id]=new Ye(1,1,{generateMipmaps:!0,type:Gt?on:pn,minFilter:Qi,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ve.workingColorSpace})}let Lt=S.state.transmissionRenderTarget[K.id],Bt=K.viewport||j;Lt.setSize(Bt.z*A.transmissionResolutionScale,Bt.w*A.transmissionResolutionScale);let It=A.getRenderTarget(),Ht=A.getActiveCubeFace(),$t=A.getActiveMipmapLevel();A.setRenderTarget(Lt),A.getClearColor(ee),te=A.getClearAlpha(),te<1&&A.setClearColor(16777215,.5),A.clear(),qt&&he.render(st);let ge=A.toneMapping;A.toneMapping=Qn;let ye=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),S.setupLightsView(K),et===!0&&zt.setGlobalState(A.clippingPlanes,K),$o(P,st,K),tt.updateMultisampleRenderTarget(Lt),tt.updateRenderTargetMipmap(Lt),de.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Te=0,$e=V.length;Te<$e;Te++){let Ue=V[Te],{object:Le,geometry:hn,material:Ut,group:gn}=Ue;if(Ut.side===En&&Le.layers.test(K.layers)){let Se=Ut.side;Ut.side=cn,Ut.needsUpdate=!0,Eu(Le,st,K,hn,Ut,gn),Ut.side=Se,Ut.needsUpdate=!0,Gt=!0}}Gt===!0&&(tt.updateMultisampleRenderTarget(Lt),tt.updateRenderTargetMipmap(Lt))}A.setRenderTarget(It,Ht,$t),A.setClearColor(ee,te),ye!==void 0&&(K.viewport=ye),A.toneMapping=ge}function $o(P,V,st){let K=V.isScene===!0?V.overrideMaterial:null;for(let Q=0,Lt=P.length;Q<Lt;Q++){let Bt=P[Q],{object:It,geometry:Ht,group:$t}=Bt,ge=Bt.material;ge.allowOverride===!0&&K!==null&&(ge=K),It.layers.test(st.layers)&&Eu(It,V,st,Ht,ge,$t)}}function Eu(P,V,st,K,Q,Lt){F!==null&&Q.isNodeMaterial&&F.setObject(P,Q),P.onBeforeRender(A,V,st,K,Q,Lt),P.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Q.onBeforeRender(A,V,st,K,P,Lt),Q.transparent===!0&&Q.side===En&&Q.forceSinglePass===!1?(Q.side=cn,Q.needsUpdate=!0,A.renderBufferDirect(st,V,K,Q,P,Lt),Q.side=Kn,Q.needsUpdate=!0,A.renderBufferDirect(st,V,K,Q,P,Lt),Q.side=En):A.renderBufferDirect(st,V,K,Q,P,Lt),P.onAfterRender(A,V,st,K,Q,Lt)}function jo(P,V,st){V.isScene!==!0&&(V=Nt);let K=J.get(P),Q=S.state.lights,Lt=S.state.shadowsArray,Bt=Q.state.version,It=wt.getParameters(P,Q.state,Lt,V,st,S.state.lightProbeGridArray),Ht=wt.getProgramCacheKey(It),$t=K.programs;K.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?V.environment:null,K.fog=V.fog;let ge=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;K.envMap=xt.get(P.envMap||K.environment,ge),K.envMapRotation=K.environment!==null&&P.envMap===null?V.environmentRotation:P.envMapRotation,$t===void 0&&(P.addEventListener("dispose",ei),$t=new Map,K.programs=$t);let ye=$t.get(Ht);if(ye!==void 0){if(K.currentProgram===ye&&K.lightsStateVersion===Bt)return wu(P,It),ye}else It.uniforms=wt.getUniforms(P),F!==null&&P.isNodeMaterial&&F.build(P,st,It),P.onBeforeCompile(It,A),ye=wt.acquireProgram(It,Ht),$t.set(Ht,ye),K.uniforms=It.uniforms;let Gt=K.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Gt.clippingPlanes=zt.uniform),wu(P,It),K.needsLights=t0(P),K.lightsStateVersion=Bt,K.needsLights&&(Gt.ambientLightColor.value=Q.state.ambient,Gt.lightProbe.value=Q.state.probe,Gt.sunLights.value=Q.state.sun,Gt.sunLightShadows.value=Q.state.sunShadow,Gt.directionalLights.value=Q.state.directional,Gt.directionalLightShadows.value=Q.state.directionalShadow,Gt.spotLights.value=Q.state.spot,Gt.spotLightShadows.value=Q.state.spotShadow,Gt.rectAreaLights.value=Q.state.rectArea,Gt.ltc_1.value=Q.state.rectAreaLTC1,Gt.ltc_2.value=Q.state.rectAreaLTC2,Gt.pointLights.value=Q.state.point,Gt.pointLightShadows.value=Q.state.pointShadow,Gt.hemisphereLights.value=Q.state.hemi,Gt.sunShadowMatrix.value=Q.state.sunShadowMatrix,Gt.sunShadowCascade.value=Q.state.sunShadowCascade,Gt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Gt.spotLightMatrix.value=Q.state.spotLightMatrix,Gt.spotLightMap.value=Q.state.spotLightMap,Gt.pointShadowMatrix.value=Q.state.pointShadowMatrix),K.lightProbeGrid=S.state.lightProbeGridArray.length>0,K.currentProgram=ye,K.uniformsList=null,ye}function Tu(P){if(P.uniformsList===null){let V=P.currentProgram.getUniforms();P.uniformsList=_r.seqWithValue(V.seq,P.uniforms)}return P.uniformsList}function wu(P,V){let st=J.get(P);st.outputColorSpace=V.outputColorSpace,st.batching=V.batching,st.batchingColor=V.batchingColor,st.instancing=V.instancing,st.instancingColor=V.instancingColor,st.instancingMorph=V.instancingMorph,st.skinning=V.skinning,st.morphTargets=V.morphTargets,st.morphNormals=V.morphNormals,st.morphColors=V.morphColors,st.morphTargetsCount=V.morphTargetsCount,st.numClippingPlanes=V.numClippingPlanes,st.numIntersection=V.numClipIntersection,st.vertexAlphas=V.vertexAlphas,st.vertexTangents=V.vertexTangents,st.toneMapping=V.toneMapping}function jd(P,V){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;v.setFromMatrixPosition(V.matrixWorld);for(let st=0,K=P.length;st<K;st++){let Q=P[st];if(Q.texture!==null&&Q.boundingBox.containsPoint(v))return Q}return null}function Kd(P,V,st,K,Q){V.isScene!==!0&&(V=Nt),tt.resetTextureUnits();let Lt=V.fog,Bt=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?V.environment:null,It=ot===null?A.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ve.workingColorSpace,Ht=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,$t=xt.get(K.envMap||Bt,Ht),ge=K.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ye=!!st.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Gt=!!st.morphAttributes.position,Te=!!st.morphAttributes.normal,$e=!!st.morphAttributes.color,Ue=Qn;K.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Ue=A.toneMapping);let Le=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,hn=Le!==void 0?Le.length:0,Ut=J.get(K),gn=S.state.lights;if(et===!0&&(at===!0||P!==rt)){let De=P===rt&&K.id===Z;zt.setState(K,P,De)}let Se=!1;K.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==gn.state.version||Ut.outputColorSpace!==It||Q.isBatchedMesh&&Ut.batching===!1||!Q.isBatchedMesh&&Ut.batching===!0||Q.isBatchedMesh&&Ut.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Ut.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Ut.instancing===!1||!Q.isInstancedMesh&&Ut.instancing===!0||Q.isSkinnedMesh&&Ut.skinning===!1||!Q.isSkinnedMesh&&Ut.skinning===!0||Q.isInstancedMesh&&Ut.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ut.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ut.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ut.instancingMorph===!1&&Q.morphTexture!==null||Ut.envMap!==$t||K.fog===!0&&Ut.fog!==Lt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==zt.numPlanes||Ut.numIntersection!==zt.numIntersection)||Ut.vertexAlphas!==ge||Ut.vertexTangents!==ye||Ut.morphTargets!==Gt||Ut.morphNormals!==Te||Ut.morphColors!==$e||Ut.toneMapping!==Ue||Ut.morphTargetsCount!==hn||!!Ut.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Se=!0):(Se=!0,Ut.__version=K.version);let Nn=Ut.currentProgram;Se===!0&&(Nn=jo(K,V,Q),F&&K.isNodeMaterial&&F.onUpdateProgram(K,Nn,Ut));let ni=!1,Fi=!1,As=!1,Ce=Nn.getUniforms(),Xe=Ut.uniforms;if(w.useProgram(Nn.program)&&(ni=!0,Fi=!0,As=!0),K.id!==Z&&(Z=K.id,Fi=!0),Ut.needsLights){let De=jd(S.state.lightProbeGridArray,Q);Ut.lightProbeGrid!==De&&(Ut.lightProbeGrid=De,Fi=!0)}if(ni||rt!==P){w.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Ce.setValue(z,"projectionMatrix",P.projectionMatrix),Ce.setValue(z,"viewMatrix",P.matrixWorldInverse);let Ni=Ce.map.cameraPosition;Ni!==void 0&&Ni.setValue(z,yt.setFromMatrixPosition(P.matrixWorld)),L.logarithmicDepthBuffer&&Ce.setValue(z,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ce.setValue(z,"isOrthographic",P.isOrthographicCamera===!0),rt!==P&&(rt=P,Fi=!0,As=!0)}if(Ut.needsLights&&(gn.state.sunShadowMap.length>0&&Ce.setValue(z,"sunShadowMap",gn.state.sunShadowMap,tt),gn.state.directionalShadowMap.length>0&&Ce.setValue(z,"directionalShadowMap",gn.state.directionalShadowMap,tt),gn.state.spotShadowMap.length>0&&Ce.setValue(z,"spotShadowMap",gn.state.spotShadowMap,tt),gn.state.pointShadowMap.length>0&&Ce.setValue(z,"pointShadowMap",gn.state.pointShadowMap,tt)),Q.isSkinnedMesh){Ce.setOptional(z,Q,"bindMatrix"),Ce.setOptional(z,Q,"bindMatrixInverse");let De=Q.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),Ce.setValue(z,"boneTexture",De.boneTexture,tt))}Q.isBatchedMesh&&(Ce.setOptional(z,Q,"batchingTexture"),Ce.setValue(z,"batchingTexture",Q._matricesTexture,tt),Ce.setOptional(z,Q,"batchingIdTexture"),Ce.setValue(z,"batchingIdTexture",Q._indirectTexture,tt),Ce.setOptional(z,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ce.setValue(z,"batchingColorTexture",Q._colorsTexture,tt));let Di=st.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&X.update(Q,st,Nn),(Fi||Ut.receiveShadow!==Q.receiveShadow)&&(Ut.receiveShadow=Q.receiveShadow,Ce.setValue(z,"receiveShadow",Q.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&V.environment!==null&&(Xe.envMapIntensity.value=V.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=s_()),Fi){if(Ce.setValue(z,"toneMappingExposure",A.toneMappingExposure),Ut.needsLights&&Qd(Xe,As),Lt&&K.fog===!0&&Jt.refreshFogUniforms(Xe,Lt),Jt.refreshMaterialUniforms(Xe,K,R,M,S.state.transmissionRenderTarget[P.id]),Ut.needsLights&&Ut.lightProbeGrid){let De=Ut.lightProbeGrid;Xe.probesSH.value=De.texture,Xe.probesMin.value.copy(De.boundingBox.min),Xe.probesMax.value.copy(De.boundingBox.max),Xe.probesResolution.value.copy(De.resolution)}_r.upload(z,Tu(Ut),Xe,tt)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(_r.upload(z,Tu(Ut),Xe,tt),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ce.setValue(z,"center",Q.center),Ce.setValue(z,"modelViewMatrix",Q.modelViewMatrix),Ce.setValue(z,"normalMatrix",Q.normalMatrix),Ce.setValue(z,"modelMatrix",Q.matrixWorld),K.uniformsGroups!==void 0){let De=K.uniformsGroups;for(let Ni=0,Rs=De.length;Ni<Rs;Ni++){let Ru=De[Ni];vt.update(Ru,Nn),vt.bind(Ru,Nn)}}return Nn}function Qd(P,V){P.ambientLightColor.needsUpdate=V,P.lightProbe.needsUpdate=V,P.sunLights.needsUpdate=V,P.sunLightShadows.needsUpdate=V,P.directionalLights.needsUpdate=V,P.directionalLightShadows.needsUpdate=V,P.pointLights.needsUpdate=V,P.pointLightShadows.needsUpdate=V,P.spotLights.needsUpdate=V,P.spotLightShadows.needsUpdate=V,P.rectAreaLights.needsUpdate=V,P.hemisphereLights.needsUpdate=V}function t0(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(P,V,st){let K=J.get(P);K.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),J.get(P.texture).__webglTexture=V,J.get(P.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:st,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,V){let st=J.get(P);st.__webglFramebuffer=V,st.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(P,V=0,st=0){ot=P,W=V,Y=st;let K=null,Q=!1,Lt=!1;if(P){let It=J.get(P);if(It.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(z.FRAMEBUFFER,It.__webglFramebuffer),j.copy(P.viewport),gt.copy(P.scissor),mt=P.scissorTest,w.viewport(j),w.scissor(gt),w.setScissorTest(mt),Z=-1;return}else if(It.__webglFramebuffer===void 0)tt.setupRenderTarget(P);else if(It.__hasExternalTextures)tt.rebindTextures(P,J.get(P.texture).__webglTexture,J.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let ge=P.depthTexture;if(It.__boundDepthTexture!==ge){if(ge!==null&&J.has(ge)&&(P.width!==ge.image.width||P.height!==ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(P)}}let Ht=P.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Lt=!0);let $t=J.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray($t[V])?K=$t[V][st]:K=$t[V],Q=!0):P.samples>0&&tt.useMultisampledRTT(P)===!1?K=J.get(P).__webglMultisampledFramebuffer:Array.isArray($t)?K=$t[st]:K=$t,j.copy(P.viewport),gt.copy(P.scissor),mt=P.scissorTest}else j.copy(N).multiplyScalar(R).floor(),gt.copy($).multiplyScalar(R).floor(),mt=ht;if(st!==0&&(K=O),w.bindFramebuffer(z.FRAMEBUFFER,K)&&w.drawBuffers(P,K),w.viewport(j),w.scissor(gt),w.setScissorTest(mt),Q){let It=J.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+V,It.__webglTexture,st)}else if(Lt){let It=V;for(let Ht=0;Ht<P.textures.length;Ht++){let $t=J.get(P.textures[Ht]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ht,$t.__webglTexture,st,It)}}else if(P!==null&&st!==0){let It=J.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,It.__webglTexture,st)}Z=-1};function Au(P){let V=J.get(P);return(V.__readFormat!==P.format||V.__readType!==P.type)&&(V.__readFormat=P.format,V.__readType=P.type,V.__formatReadable=L.textureFormatReadable(P.format),V.__typeReadable=L.textureTypeReadable(P.type)),V}this.readRenderTargetPixels=function(P,V,st,K,Q,Lt,Bt,It=0){if(!(P&&P.isWebGLRenderTarget)){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=J.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Bt!==void 0&&(Ht=Ht[Bt]),Ht){w.bindFramebuffer(z.FRAMEBUFFER,Ht);try{let $t=P.textures[It],ge=$t.format,ye=$t.type;P.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+It);let Gt=Au($t);if(Gt.__formatReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Gt.__typeReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=P.width-K&&st>=0&&st<=P.height-Q&&z.readPixels(V,st,K,Q,Rt.convert(ge),Rt.convert(ye),Lt)}finally{let $t=ot!==null?J.get(ot).__webglFramebuffer:null;w.bindFramebuffer(z.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(P,V,st,K,Q,Lt,Bt,It=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=J.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Bt!==void 0&&(Ht=Ht[Bt]),Ht)if(V>=0&&V<=P.width-K&&st>=0&&st<=P.height-Q){w.bindFramebuffer(z.FRAMEBUFFER,Ht);let $t=P.textures[It],ge=$t.format,ye=$t.type;P.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+It);let Gt=Au($t);if(Gt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Gt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Te=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Te),z.bufferData(z.PIXEL_PACK_BUFFER,Lt.byteLength,z.STREAM_READ),z.readPixels(V,st,K,Q,Rt.convert(ge),Rt.convert(ye),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let $e=ot!==null?J.get(ot).__webglFramebuffer:null;w.bindFramebuffer(z.FRAMEBUFFER,$e);let Ue=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await qf(z,Ue,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Te),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Lt),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Te),z.deleteSync(Ue),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,V=null,st=0){let K=Math.pow(2,-st),Q=Math.floor(P.image.width*K),Lt=Math.floor(P.image.height*K),Bt=V!==null?V.x:0,It=V!==null?V.y:0;tt.setTexture2D(P,0),z.copyTexSubImage2D(z.TEXTURE_2D,st,0,0,Bt,It,Q,Lt),w.unbindTexture()},this.copyTextureToTexture=function(P,V,st=null,K=null,Q=0,Lt=0){let Bt,It,Ht,$t,ge,ye,Gt,Te,$e,Ue=P.isCompressedTexture?P.mipmaps[Lt]:P.image;if(st!==null)Bt=st.max.x-st.min.x,It=st.max.y-st.min.y,Ht=st.isBox3?st.max.z-st.min.z:1,$t=st.min.x,ge=st.min.y,ye=st.isBox3?st.min.z:0;else{let Xe=Math.pow(2,-Q);Bt=Math.floor(Ue.width*Xe),It=Math.floor(Ue.height*Xe),P.isDataArrayTexture?Ht=Ue.depth:P.isData3DTexture?Ht=Math.floor(Ue.depth*Xe):Ht=1,$t=0,ge=0,ye=0}K!==null?(Gt=K.x,Te=K.y,$e=K.z):(Gt=0,Te=0,$e=0);let Le=Rt.convert(V.format),hn=Rt.convert(V.type),Ut;V.isData3DTexture?(tt.setTexture3D(V,0),Ut=z.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(tt.setTexture2DArray(V,0),Ut=z.TEXTURE_2D_ARRAY):(tt.setTexture2D(V,0),Ut=z.TEXTURE_2D),w.activeTexture(z.TEXTURE0),w.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),w.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),w.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment);let gn=w.getParameter(z.UNPACK_ROW_LENGTH),Se=w.getParameter(z.UNPACK_IMAGE_HEIGHT),Nn=w.getParameter(z.UNPACK_SKIP_PIXELS),ni=w.getParameter(z.UNPACK_SKIP_ROWS),Fi=w.getParameter(z.UNPACK_SKIP_IMAGES);w.pixelStorei(z.UNPACK_ROW_LENGTH,Ue.width),w.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ue.height),w.pixelStorei(z.UNPACK_SKIP_PIXELS,$t),w.pixelStorei(z.UNPACK_SKIP_ROWS,ge),w.pixelStorei(z.UNPACK_SKIP_IMAGES,ye);let As=P.isDataArrayTexture||P.isData3DTexture,Ce=V.isDataArrayTexture||V.isData3DTexture;if(P.isDepthTexture){let Xe=J.get(P),Di=J.get(V),De=J.get(Xe.__renderTarget),Ni=J.get(Di.__renderTarget);w.bindFramebuffer(z.READ_FRAMEBUFFER,De.__webglFramebuffer),w.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Rs=0;Rs<Ht;Rs++)As&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,J.get(P).__webglTexture,Q,ye+Rs),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,J.get(V).__webglTexture,Lt,$e+Rs)),z.blitFramebuffer($t,ge,Bt,It,Gt,Te,Bt,It,z.DEPTH_BUFFER_BIT,z.NEAREST);w.bindFramebuffer(z.READ_FRAMEBUFFER,null),w.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Q!==0||P.isRenderTargetTexture||J.has(P)){let Xe=J.get(P),Di=J.get(V);w.bindFramebuffer(z.READ_FRAMEBUFFER,D),w.bindFramebuffer(z.DRAW_FRAMEBUFFER,k);for(let De=0;De<Ht;De++)As?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xe.__webglTexture,Q,ye+De):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Xe.__webglTexture,Q),Ce?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Di.__webglTexture,Lt,$e+De):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Di.__webglTexture,Lt),Q!==0?z.blitFramebuffer($t,ge,Bt,It,Gt,Te,Bt,It,z.COLOR_BUFFER_BIT,z.NEAREST):Ce?z.copyTexSubImage3D(Ut,Lt,Gt,Te,$e+De,$t,ge,Bt,It):z.copyTexSubImage2D(Ut,Lt,Gt,Te,$t,ge,Bt,It);w.bindFramebuffer(z.READ_FRAMEBUFFER,null),w.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ce?P.isDataTexture||P.isData3DTexture?z.texSubImage3D(Ut,Lt,Gt,Te,$e,Bt,It,Ht,Le,hn,Ue.data):V.isCompressedArrayTexture?z.compressedTexSubImage3D(Ut,Lt,Gt,Te,$e,Bt,It,Ht,Le,Ue.data):z.texSubImage3D(Ut,Lt,Gt,Te,$e,Bt,It,Ht,Le,hn,Ue):P.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Lt,Gt,Te,Bt,It,Le,hn,Ue.data):P.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Lt,Gt,Te,Ue.width,Ue.height,Le,Ue.data):z.texSubImage2D(z.TEXTURE_2D,Lt,Gt,Te,Bt,It,Le,hn,Ue);w.pixelStorei(z.UNPACK_ROW_LENGTH,gn),w.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Se),w.pixelStorei(z.UNPACK_SKIP_PIXELS,Nn),w.pixelStorei(z.UNPACK_SKIP_ROWS,ni),w.pixelStorei(z.UNPACK_SKIP_IMAGES,Fi),Lt===0&&V.generateMipmaps&&z.generateMipmap(Ut),w.unbindTexture()},this.initRenderTarget=function(P){J.get(P).__webglFramebuffer===void 0&&tt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?tt.setTextureCube(P,0):P.isData3DTexture?tt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?tt.setTexture2DArray(P,0):tt.setTexture2D(P,0),w.unbindTexture()},this.resetState=function(){W=0,Y=0,ot=null,w.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ve._getDrawingBufferColorSpace(t),e.unpackColorSpace=ve._getUnpackColorSpace()}};var No=new U;function kn(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;No.copy(t),No[n]=0,No.normalize();let c=.5*o/(o+a),h=1-No.angleTo(s)/l;return Math.sign(No[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Ms=class s extends vn{constructor(t=1,e=1,n=1,i=2,r=.1){let o=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new U,c=new U,h=new U(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,m=f.length/6,_=new U,g=.5/o;for(let p=0,y=0;p<f.length;p+=3,y+=2)switch(l.fromArray(f,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),f[p+0]=h.x*Math.sign(l.x)+c.x*r,f[p+1]=h.y*Math.sign(l.y)+c.y*r,f[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/m)){case 0:_.set(1,0,0),d[y+0]=kn(_,c,"z","y",r,n),d[y+1]=1-kn(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),d[y+0]=1-kn(_,c,"z","y",r,n),d[y+1]=1-kn(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),d[y+0]=1-kn(_,c,"x","z",r,t),d[y+1]=kn(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),d[y+0]=1-kn(_,c,"x","z",r,t),d[y+1]=1-kn(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),d[y+0]=1-kn(_,c,"x","y",r,t),d[y+1]=1-kn(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),d[y+0]=kn(_,c,"x","y",r,t),d[y+1]=1-kn(_,c,"y","x",r,e);break}}static fromJSON(t){return new s(t.width,t.height,t.depth,t.segments,t.radius)}};var Uo=class extends Hi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new vn;t.deleteAttribute("uv");let e=new me({side:cn}),n=new me,i=new di(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Me(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new us(t,n,6),a=new Ie;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Me(t,yr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Me(t,yr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Me(t,yr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new Me(t,yr(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new Me(t,yr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new Me(t,yr(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function yr(s){return new lo({color:0,emissive:16777215,emissiveIntensity:s})}function Id(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Ae,c=0;for(let h=0;h<s.length;++h){let f=s[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,f=[];for(let u=0;u<s.length;++u){let d=s[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=s[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=Pd(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][u]);let m=Pd(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Pd(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new dn(o,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let f=l/e;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<e;m++){let _=h.getComponent(u,m);a.setComponent(u+f,m,_)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function Kh(s,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count,o=0,a=Object.keys(s.attributes),l={},c={},h=[],f=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let y=0,T=a.length;y<T;y++){let v=a[y],b=s.attributes[v];l[v]=new b.constructor(new b.array.constructor(b.count*b.itemSize),b.itemSize,b.normalized);let S=s.morphAttributes[v];S&&(c[v]||(c[v]=[]),S.forEach((C,x)=>{let E=new C.array.constructor(C.count*C.itemSize);c[v][x]=new C.constructor(E,C.itemSize,C.normalized)}))}let d=t*.5,m=Math.log10(1/t),_=Math.pow(10,m),g=d*_;for(let y=0;y<r;y++){let T=n?n.getX(y):y,v="";for(let b=0,S=a.length;b<S;b++){let C=a[b],x=s.getAttribute(C),E=x.itemSize;for(let A=0;A<E;A++)v+=`${Math.trunc(x[f[A]](T)*_+g)},`}if(v in e)h.push(e[v]);else{for(let b=0,S=a.length;b<S;b++){let C=a[b],x=s.getAttribute(C),E=s.morphAttributes[C],A=x.itemSize,I=l[C],F=c[C];for(let O=0;O<A;O++){let D=f[O],k=u[O];if(I[k](o,x[D](T)),E)for(let W=0,Y=E.length;W<Y;W++)F[W][k](o,E[W][D](T))}}e[v]=o,h.push(o),o++}}let p=s.clone();for(let y in s.attributes){let T=l[y];if(p.setAttribute(y,new T.constructor(T.array.slice(0,o*T.itemSize),T.itemSize,T.normalized)),y in c)for(let v=0;v<c[y].length;v++){let b=c[y][v];p.morphAttributes[y][v]=new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)}}return p.setIndex(h),p}var Mr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var In=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},o_=new Zi(-1,1,1,-1,0,1),Qh=class extends Ae{constructor(){super(),this.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new le([0,2,0,0,2,0],2))}},a_=new Qh,ns=class{constructor(t){this._mesh=new Me(a_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,o_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ec=class extends In{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ge?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=zn.clone(t.uniforms),this.material=new Ge({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new ns(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Bo=class extends In{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},nc=class extends In{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ic=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new _t);this._width=n.width,this._height=n.height,e=new Ye(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:on}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ec(Mr),this.copyPass.material.blending=Je,this.timer=new fo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Bo!==void 0&&(o instanceof Bo?n=!0:o instanceof nc&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new _t);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var sc=class extends In{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new jt}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var Oo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new _t},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ae},cameraProjectionMatrixInverse:{value:new ae},cameraWorldMatrix:{value:new ae},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new U(-1,-1,-1)},sceneBoxMax:{value:new U(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},zo={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},rc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Ld(s=5){let t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=l_(t),n=e.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=e[o],l=2*Math.PI*a/n,c=new U(Math.cos(l),Math.sin(l),0).normalize();i[o*4]=(c.x*.5+.5)*255,i[o*4+1]=(c.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}let r=new hi(i,t,t);return r.wrapS=bn,r.wrapT=bn,r.needsUpdate=!0,r}function l_(s){let t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=t*t,n=Array(e).fill(0),i=Math.floor(t/2),r=t-1;for(let o=1;o<=e;){if(i===-1&&r===t?(r=t-2,i=0):(r===t&&(r=0),i<0&&(i=t-1)),n[i*t+r]!==0){r-=2,i++;continue}else n[i*t+r]=o++;r++,i--}return n}var ko={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:tu(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new _t},cameraProjectionMatrixInverse:{value:new ae},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function tu(s,t,e){let n=c_(s,t,e),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let o=n[r];i+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return i}function c_(s,t,e){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*t*i/s,o=Math.pow(i/(s-1),e);n.push(new U(Math.cos(r),Math.sin(r),o))}return n}var oc=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,i,r,o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,f=(l+c)*h,u=l-f,d=c-f,m=t-u,_=e-d,g,p;m>_?(g=1,p=0):(g=0,p=1);let y=m-g+h,T=_-p+h,v=m-1+2*h,b=_-1+2*h,S=l&255,C=c&255,x=this.perm[S+this.perm[C]]%12,E=this.perm[S+g+this.perm[C+p]]%12,A=this.perm[S+1+this.perm[C+1]]%12,I=.5-m*m-_*_;I<0?n=0:(I*=I,n=I*I*this._dot(this.grad3[x],m,_));let F=.5-y*y-T*T;F<0?i=0:(F*=F,i=F*F*this._dot(this.grad3[E],y,T));let O=.5-v*v-b*b;return O<0?r=0:(O*=O,r=O*O*this._dot(this.grad3[A],v,b)),70*(n+i+r)}noise3d(t,e,n){let i,r,o,a,c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),f=Math.floor(e+c),u=Math.floor(n+c),d=1/6,m=(h+f+u)*d,_=h-m,g=f-m,p=u-m,y=t-_,T=e-g,v=n-p,b,S,C,x,E,A;y>=T?T>=v?(b=1,S=0,C=0,x=1,E=1,A=0):y>=v?(b=1,S=0,C=0,x=1,E=0,A=1):(b=0,S=0,C=1,x=1,E=0,A=1):T<v?(b=0,S=0,C=1,x=0,E=1,A=1):y<v?(b=0,S=1,C=0,x=0,E=1,A=1):(b=0,S=1,C=0,x=1,E=1,A=0);let I=y-b+d,F=T-S+d,O=v-C+d,D=y-x+2*d,k=T-E+2*d,W=v-A+2*d,Y=y-1+3*d,ot=T-1+3*d,Z=v-1+3*d,rt=h&255,j=f&255,gt=u&255,mt=this.perm[rt+this.perm[j+this.perm[gt]]]%12,ee=this.perm[rt+b+this.perm[j+S+this.perm[gt+C]]]%12,te=this.perm[rt+x+this.perm[j+E+this.perm[gt+A]]]%12,kt=this.perm[rt+1+this.perm[j+1+this.perm[gt+1]]]%12,M=.6-y*y-T*T-v*v;M<0?i=0:(M*=M,i=M*M*this._dot3(this.grad3[mt],y,T,v));let R=.6-I*I-F*F-O*O;R<0?r=0:(R*=R,r=R*R*this._dot3(this.grad3[ee],I,F,O));let B=.6-D*D-k*k-W*W;B<0?o=0:(B*=B,o=B*B*this._dot3(this.grad3[te],D,k,W));let H=.6-Y*Y-ot*ot-Z*Z;return H<0?a=0:(H*=H,a=H*H*this._dot3(this.grad3[kt],Y,ot,Z)),32*(i+r+o+a)}noise4d(t,e,n,i){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,f,u,d,m,_=(t+e+n+i)*l,g=Math.floor(t+_),p=Math.floor(e+_),y=Math.floor(n+_),T=Math.floor(i+_),v=(g+p+y+T)*c,b=g-v,S=p-v,C=y-v,x=T-v,E=t-b,A=e-S,I=n-C,F=i-x,O=E>A?32:0,D=E>I?16:0,k=A>I?8:0,W=E>F?4:0,Y=A>F?2:0,ot=I>F?1:0,Z=O+D+k+W+Y+ot,rt=o[Z][0]>=3?1:0,j=o[Z][1]>=3?1:0,gt=o[Z][2]>=3?1:0,mt=o[Z][3]>=3?1:0,ee=o[Z][0]>=2?1:0,te=o[Z][1]>=2?1:0,kt=o[Z][2]>=2?1:0,M=o[Z][3]>=2?1:0,R=o[Z][0]>=1?1:0,B=o[Z][1]>=1?1:0,H=o[Z][2]>=1?1:0,N=o[Z][3]>=1?1:0,$=E-rt+c,ht=A-j+c,G=I-gt+c,et=F-mt+c,at=E-ee+2*c,ct=A-te+2*c,yt=I-kt+2*c,Ot=F-M+2*c,Nt=E-R+3*c,qt=A-B+3*c,Yt=I-H+3*c,z=F-N+3*c,ne=E-1+4*c,de=A-1+4*c,L=I-1+4*c,w=F-1+4*c,q=g&255,J=p&255,tt=y&255,xt=T&255,bt=a[q+a[J+a[tt+a[xt]]]]%32,lt=a[q+rt+a[J+j+a[tt+gt+a[xt+mt]]]]%32,dt=a[q+ee+a[J+te+a[tt+kt+a[xt+M]]]]%32,wt=a[q+R+a[J+B+a[tt+H+a[xt+N]]]]%32,Jt=a[q+1+a[J+1+a[tt+1+a[xt+1]]]]%32,Tt=.6-E*E-A*A-I*I-F*F;Tt<0?h=0:(Tt*=Tt,h=Tt*Tt*this._dot4(r[bt],E,A,I,F));let Et=.6-$*$-ht*ht-G*G-et*et;Et<0?f=0:(Et*=Et,f=Et*Et*this._dot4(r[lt],$,ht,G,et));let zt=.6-at*at-ct*ct-yt*yt-Ot*Ot;zt<0?u=0:(zt*=zt,u=zt*zt*this._dot4(r[dt],at,ct,yt,Ot));let Kt=.6-Nt*Nt-qt*qt-Yt*Yt-z*z;Kt<0?d=0:(Kt*=Kt,d=Kt*Kt*this._dot4(r[wt],Nt,qt,Yt,z));let he=.6-ne*ne-de*de-L*L-w*w;return he<0?m=0:(he*=he,m=he*he*this._dot4(r[Jt],ne,de,L,w)),27*(h+f+u+d+m)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,i){return t[0]*e+t[1]*n+t[2]*i}_dot4(t,e,n,i,r){return t[0]*e+t[1]*n+t[2]*i+t[3]*r}};var Ho=class s extends In{constructor(t,e,n=512,i=512,r,o,a){super(),this.width=n,this.height=i,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Ld(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Ye(this.width,this.height,{type:on,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ge({defines:Object.assign({},Oo.defines),uniforms:zn.clone(Oo.uniforms),vertexShader:Oo.vertexShader,fragmentShader:Oo.fragmentShader,blending:Je,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ao,this.normalMaterial.blending=Je,this.pdMaterial=new Ge({defines:Object.assign({},ko.defines),uniforms:zn.clone(ko.uniforms),vertexShader:ko.vertexShader,fragmentShader:ko.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ge({defines:Object.assign({},zo.defines),uniforms:zn.clone(zo.uniforms),vertexShader:zo.vertexShader,fragmentShader:zo.fragmentShader,blending:Je}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ge({uniforms:zn.clone(Mr.uniforms),vertexShader:Mr.vertexShader,fragmentShader:Mr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:go,blendDst:gs,blendEquation:On,blendSrcAlpha:mo,blendDstAlpha:gs,blendEquationAlpha:On}),this.blendMaterial=new Ge({uniforms:zn.clone(rc.uniforms),vertexShader:rc.vertexShader,fragmentShader:rc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ol,blendSrc:go,blendDst:gs,blendEquation:On,blendSrcAlpha:mo,blendDstAlpha:gs,blendEquationAlpha:On}),this._fsQuad=new ns(null),this._originalClearColor=new jt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new ui,this.depthTexture.format=pi,this.depthTexture.type=ts,this.normalRenderTarget=new Ye(this.width,this.height,{minFilter:qe,magFilter:qe,type:on,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=tu(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,i,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_renderOverride(t,e,n,i,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i=e.clearColor||i,r=e.clearAlpha||r,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new oc,n=t*t*4,i=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let l=o,c=a;i[(o*t+a)*4]=(e.noise(l,c)*.5+.5)*255,i[(o*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,i[(o*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,i[(o*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let r=new hi(i,t,t,yn,pn);return r.wrapS=bn,r.wrapT=bn,r.needsUpdate=!0,r}};Ho.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Go={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var ac=class extends In{constructor(){super(),this.isOutputPass=!0,this.uniforms=zn.clone(Go.uniforms),this.material=new hr({name:Go.name,uniforms:this.uniforms,vertexShader:Go.vertexShader,fragmentShader:Go.fragmentShader}),this._fsQuad=new ns(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ve.getTransfer(this._outputColorSpace)===be&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===xo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_o?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===vo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ji?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Mo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===So?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===yo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var nt=Math.PI,se=nt*2,Wt=(s,t=0,e=1)=>Math.min(e,Math.max(t,s)),ut=(s,t,e)=>s+(t-s)*e,ce=s=>(s=Wt(s),s*s*(3-2*s)),pc=s=>(s=Wt(s),s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2),Ts=s=>1-Math.pow(1-Wt(s),3),re=(s,t,e)=>Wt((s-t)/(e-t)),Vt=(s,t,e,n=.35)=>ce((s-t)/n)*ce((e-s)/n),Gn=(s,t)=>((t-s+nt)%se+se)%se-nt,qo=(s,t,e)=>s+Gn(s,t)*e,Yo=(s,t)=>Math.atan2(t[0]-s[0],t[1]-s[1]),Mt=(s,t,e)=>new U(s,t,e),Pi=s=>{let t=Math.sin(s*127.1+311.7)*43758.5453;return t-Math.floor(t)},h_=(s,t)=>s.length?s.length===t?s.slice():Array.from({length:t},(e,n)=>{let i=t===1?0:n/(t-1)*(s.length-1),r=Math.floor(i),o=Math.min(s.length-1,r+1);return ut(s[r],s[o],i-r)}):Array(t).fill(0),Mn=(s,t,e)=>"#"+new jt(s).lerp(new jt(t),e).getHexString(),Ve=9,We=7.5,ke=3,Sn=.18,Wn=new Map;function it(s,t={}){let e=s+JSON.stringify(t);if(Wn.has(e))return Wn.get(e);let n=new me({color:s,roughness:t.r??.75,metalness:t.m??0,emissive:t.e||"#000000",emissiveIntensity:t.ei??1,transparent:!!t.op,opacity:t.op??1,flatShading:!!t.flat,side:t.ds?En:Kn});return Wn.set(e,n),n}var u_=(s,t={})=>new He({color:s,toneMapped:!1,transparent:!!t.op||!!t.map,opacity:t.op??1,map:t.map||null,blending:t.add?$i:Ai,depthWrite:!t.add,side:t.ds?En:Kn});function Ln(s,t=!0,e=!0){return s.traverse(n=>{n.isMesh&&(n.castShadow=t,n.receiveShadow=e)}),s}function Ct(s,t,e,n=0,i=0,r=0,o={}){let a=new Me(s,t);return a.position.set(n,i,r),o.rx&&(a.rotation.x=o.rx),o.ry&&(a.rotation.y=o.ry),o.rz&&(a.rotation.z=o.rz),o.s&&a.scale.set(...Array.isArray(o.s)?o.s:[o.s,o.s,o.s]),a.castShadow=o.cast!==!1,a.receiveShadow=o.recv!==!1,e&&e.add(a),a}function pt(s,t,e,n,i=.015,r={}){let o=n[0]-e[0],a=n[1]-e[1],l=n[2]-e[2],c=Math.min(i,o/2-.001,a/2-.001,l/2-.001),h=c>.002?new Ms(o,a,l,3,c):new vn(o,a,l);return Ct(h,t,s,(e[0]+n[0])/2,(e[1]+n[1])/2,(e[2]+n[2])/2,r)}var fe=(s,t,e,n,i,r,o,a,l={})=>Ct(new Vi(e,n,i,l.seg||24),t,s,r,o,a,l),ue=(s,t,e,n,i,r,o={})=>Ct(new rn(e,o.seg||24,o.seg2||16),t,s,n,i,r,o),Fn=(s,t,e,n,i,r,o,a={})=>Ct(new sr(e,n,6,16),t,s,i,r,o,a);function Oe(s,t){let e=document.createElement("canvas");e.width=s,e.height=t;let n=e.getContext("2d"),i=new $r(e);return i.colorSpace=an,i.anisotropy=4,{c:e,g:n,t:i,w:s,h:t}}function Ci(s,t,e,n,i,r){s.beginPath(),s.moveTo(t+r,e),s.arcTo(t+n,e,t+n,e+i,r),s.arcTo(t+n,e+i,t,e+i,r),s.arcTo(t,e+i,t,e,r),s.arcTo(t,e,t+n,e,r),s.closePath()}function Ss(s,t=1,e=.6){let n=Oe(128,128),i=n.g.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.35,"rgba(255,255,255,.35)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.g.fillStyle=i,n.g.fillRect(0,0,128,128);let r=new Gi(new Ei({map:n.t,color:s,blending:$i,depthWrite:!1,transparent:!0,opacity:e,toneMapped:!1}));return r.scale.setScalar(t),r}function Vo(s,t,e,n={}){let i=new or(s,!1,"centripetal"),r=n.seg||Math.max(6,s.length*3),o=n.rad||6,a=n.ach??.55,l=i.computeFrenetFrames(r,!1),c=[],h=[],f=[],u=[],d=n.ref||null;for(let _=0;_<=r;_++){let g=_/r,p=i.getPointAt(g),y=l.tangents[_],T=l.normals[_].clone(),v=l.binormals[_].clone();if(d){let E=(typeof d=="function"?d(p):d).clone();T=E.sub(y.clone().multiplyScalar(E.dot(y))).normalize(),v=new U().crossVectors(y,T).normalize()}let b=ut(t,e,Math.pow(g,n.curvaR||1))*(n.bulbo?1+n.bulbo*Math.sin(nt*g):1)*(.2+.8*ce(g/.12))*(.35+.65*ce((1-g)/.1)),S=n.raiz??.62,C=n.ponta??1.12,x=ut(S,C,Math.pow(g,.8));for(let E=0;E<=o;E++){let A=E/o*se,I=Math.cos(A),F=Math.sin(A),O=T.clone().multiplyScalar(I*a),D=v.clone().multiplyScalar(F),k=O.clone().add(D);c.push(p.x+k.x*b,p.y+k.y*b,p.z+k.z*b);let W=T.clone().multiplyScalar(I/Math.max(a,.2)).add(v.clone().multiplyScalar(F)).normalize();h.push(W.x,W.y,W.z),f.push(x,x,x)}}for(let _=0;_<r;_++)for(let g=0;g<o;g++){let p=_*(o+1)+g,y=p+o+1;u.push(p,y,p+1,y,y+1,p+1)}let m=new Ae;return m.setAttribute("position",new le(c,3)),m.setAttribute("normal",new le(h,3)),m.setAttribute("color",new le(f,3)),m.setIndex(u),m}function lc(s,t=.85){let e=(s.index,s),n=e.attributes.position.count;return e.attributes.uv&&e.deleteAttribute("uv"),e.attributes.uv1&&e.deleteAttribute("uv1"),e.setAttribute("color",new le(new Array(n*3).fill(t),3)),e.index,e}function cc(s){let t=s.map(e=>{if(!e.index){let n=e.attributes.position.count;e.setIndex([...Array(n).keys()])}return["uv","uv1","uv2"].forEach(n=>e.attributes[n]&&e.deleteAttribute(n)),e});return Id(t,!1)}var eu={};function xu(s,t,e,n,i=[1,1]){let r=s+i.join("x");if(eu[r])return eu[r];let o=Oe(t,e);return n(o.g,t,e),o.t.wrapS=o.t.wrapT=bn,o.t.repeat.set(...i),o.t.anisotropy=8,eu[r]=o.t,o.t}var nu=11,Dn=()=>(nu=nu*16807%2147483647,nu/2147483647),f_=(s,t,e)=>{s.fillStyle="#EDEDED",s.fillRect(0,0,t,e);for(let n=0;n<70;n++){let i=Dn()*e,r=.04+Dn()*.1;s.strokeStyle=`rgba(60,40,20,${r})`,s.lineWidth=.6+Dn()*2.4,s.beginPath(),s.moveTo(0,i);for(let o=0;o<=t;o+=16)s.lineTo(o,i+Math.sin(o*.02+n)*3+(Dn()-.5)*1.2);s.stroke()}for(let n=0;n<6;n++){let i=Dn()*t,r=Dn()*e,o=s.createRadialGradient(i,r,0,i,r,10+Dn()*10);o.addColorStop(0,"rgba(70,45,25,.22)"),o.addColorStop(1,"rgba(70,45,25,0)"),s.fillStyle=o,s.beginPath(),s.ellipse(i,r,24,7,0,0,se),s.fill()}},d_=(s,t,e)=>{s.fillStyle="#E6E6E6",s.fillRect(0,0,t,e);for(let n=0;n<e;n+=2)s.fillStyle=`rgba(0,0,0,${.035+(n%4?.02:0)})`,s.fillRect(0,n,t,1);for(let n=0;n<t;n+=2)s.fillStyle=`rgba(255,255,255,${.05+(n%4?.03:0)})`,s.fillRect(n,0,1,e);for(let n=0;n<900;n++)s.fillStyle=`rgba(0,0,0,${Dn()*.05})`,s.fillRect(Dn()*t,Dn()*e,2,2)},bs=(s,t={})=>{let e="mad"+s+JSON.stringify(t);if(Wn.has(e))return Wn.get(e);let n=new me({color:s,roughness:t.r??.55,metalness:0,map:xu("madeira",256,256,f_,t.rep||[1,1])});return Wn.set(e,n),n},Sr=(s,t={})=>{let e="tec"+s+JSON.stringify(t);if(Wn.has(e))return Wn.get(e);let n=new jt(s),i=new jn({color:s,roughness:t.r??.92,sheen:.7,sheenRoughness:.45,sheenColor:n.clone().lerp(new jt("#FFFFFF"),.35),map:xu("tecido",128,128,d_,t.rep||[3,3])});return Wn.set(e,i),i},iu=null;function Fd(s,t,e,n,i,r=0,o=.42){if(!iu){let l=Oe(128,128),c=l.g;c.shadowColor="#000",c.shadowBlur=20,c.shadowOffsetX=300,c.fillStyle="#000",Ci(c,-274,26,76,76,14),c.fill(),iu=l.t}let a=new Me(new Ze(1,1),new He({map:iu,color:"#000000",transparent:!0,opacity:o,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));return a.rotation.set(-nt/2,0,r),a.position.set(t,.003,e),a.scale.set((n*2+.12)*1.68,(i*2+.12)*1.68,1),a.renderOrder=1,a.receiveShadow=!1,a.castShadow=!1,s.add(a),a}var p_=(s,t,e)=>{s.fillStyle="#F2F2F2",s.fillRect(0,0,t,e);for(let n=0;n<5e3;n++){let i=Dn();s.fillStyle=i>.5?`rgba(255,255,255,${(i-.5)*.12})`:`rgba(0,0,0,${i*.05})`,s.fillRect(Dn()*t,Dn()*e,1.5,1.5)}},Dd=s=>{let t="par"+s;if(Wn.has(t))return Wn.get(t);let e=new me({color:s,roughness:.92,map:xu("parede",256,256,p_,[4,2])});return Wn.set(t,e),e},su=null;function br(s,t,e,n,i,r=.22){if(!su){let a=Oe(4,64),l=a.g.createLinearGradient(0,0,0,64);l.addColorStop(0,"rgba(0,0,0,1)"),l.addColorStop(.35,"rgba(0,0,0,.45)"),l.addColorStop(1,"rgba(0,0,0,0)"),a.g.fillStyle=l,a.g.fillRect(0,0,4,64),su=a.t}let o=new Me(new Ze(t,e),new He({map:su,color:"#000000",transparent:!0,opacity:r,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));return o.position.copy(n),o.rotation.copy(i),o.renderOrder=1,s.add(o),o}var m_={triste:{hemi:.55,key:.85,keyCor:"#AFC0E6",amb:"#7F8FB3",lamp:!1,pend:!1,raio:.1,tv:"#EF4444",mon:"#EF4444",exp:.9},preocupado:{hemi:.75,key:1.35,keyCor:"#FFE3C7",amb:"#B9A58F",lamp:!0,pend:!1,raio:.16,tv:"#EF4444",mon:"#F97316",exp:.97},tranquilo:{hemi:.85,key:1.7,keyCor:"#FFF4E3",amb:"#C8C6E8",lamp:!0,pend:!1,raio:.28,tv:"#818CF8",mon:"#60A5FA",exp:1},feliz:{hemi:.95,key:2.1,keyCor:"#FFF1D6",amb:"#E8DCC0",lamp:!0,pend:!0,raio:.4,tv:"#22C55E",mon:"#22C55E",exp:1.04},euforico:{hemi:.8,key:1.6,keyCor:"#FFE0F2",amb:"#E9C9E6",lamp:!0,pend:!0,raio:.36,tv:"#FACC15",mon:"#FACC15",exp:1.05}},en={p:["#F6D3B3","#F2C3A0","#D9A27A","#B07850","#7A4E33","#4F3123"],c:["#2B1B12","#3B261B","#6B4226","#A86B3C","#D9B26A","#EFDDB0","#8E8E8E","#B33A2A","#2F4FC0","#D9568E"],l:["#2F3B52","#1F2937","#5B4636","#3F5F45","#D6CDBB","#6F86B5"],s:["#1B2230","#F4F6F8","#C02626","#7C4A21","#2563EB"]},g_={p:5,c:9,k:9,b:3,l:5,o:1,a:4,w:4,r:9,e:1,s:4},x_={p:1,c:1,k:0,b:0,l:0,o:0,a:2,w:2,r:0,e:0,s:0},Nd=s=>{let t={...x_};return String(s||"").replace(/([pckbloawres])(\d)/g,(e,n,i)=>{t[n]=Math.min(+i,g_[n])}),t},Ud="#272C38",hc=[{m:"camisa",manga:"C",estampa:1},{m:"camisa",manga:"C",estampa:1},{m:"camisa",manga:"L",estampa:1},{m:"branco",manga:"L"},{m:"camisa",manga:"L"},{m:"camisa",manga:"R",estampa:1},{m:"paleto",manga:"L",punho:"branco"},{m:"camisa",manga:"L",punho:"branco"},{m:"xadrez",manga:"L"},{m:"havai",manga:"C"}],__=[.9,.95,1,1.05,1.1],Bd=[.84,.92,1,1.12,1.26].map(s=>s*1.12),Vn={alt:.89,dy:0,hz:0,lean:0,side:0,twist:0,nod:0,turn:0,roll:0,aL:[0,.12,.2],aR:[0,.12,.2],lL:[0,0],lR:[0,0],olhar:[0,0],boch:0,abre:.6,lagrima:0,nuvem:0,balao:0,yawAdd:0,sent:0,kL:0,kR:0,ikL:null,ikR:null,mL:0,mR:0,taco:-1,recuo:0,porta:0,fxk:0,gole:0,pL:0,pR:0,olhos:"A",boca:"leve",sob:"",item:"",balaoT:""},uu=["alt","dy","hz","lean","side","twist","nod","turn","roll","boch","abre","lagrima","nuvem","balao","yawAdd","sent","kL","kR","mL","mR","taco","recuo","porta","fxk","gole","pL","pR"],mc=["aL","aR","lL","lR","olhar"],v_=["olhos","boca","sob","item","balaoT","bolas","solta","fx","gestoL","gestoR"],fu=[.47*1.4,.565*1.4,.52*1.4],y_=fu[1]/fu[0]*.98,Wo=.29,Od=.325,zd=1.1;function uc(s,t=0,e=0,n=0,i=0,r=0,o=0,a=null){let l=new ae().compose(Mt(t,e,n),new Ne().setFromEuler(new sn(i,r,o)),a?Mt(...a):Mt(1,1,1));return s.applyMatrix4(l),s}function kd(s,t){let e=s.attributes.position,n=new U;for(let i=0;i<e.count;i++){n.fromBufferAttribute(e,i);let r=n.clone().divideScalar(t),o=Wt(-r.y),a=Wt(r.y),l=1-.11*Math.pow(o,1.6)+.045*(1-Math.abs(r.y))*(r.y<0?1.4:1),c=1-.1*Math.pow(o,2)*(r.z<0?1.4:.6)-.04*a*(r.z<0?1:0),h=1+.04*o;e.setXYZ(i,n.x*l,n.y*h,n.z*c+(r.z>0?.035*t*Math.pow(o,2)*r.z:0))}return s.computeVertexNormals(),s}var gc=class{constructor(t,e,n,i){let r=this.ap=Nd(n);this.molas={},this.cor=t||"#2457F5";let o=this.camisa=new jn({color:this.cor,roughness:.8,sheen:.22,sheenRoughness:.75,sheenColor:new jt("#E6ECFF")}),a=this.gola=new me({color:this.cor,roughness:.8}),l=this.branco=new me({color:"#F4F6FA",roughness:.7}),c=this.paleto=new me({color:Ud,roughness:.62});this.texX=Oe(256,256),this.texH=Oe(256,256);for(let N of[this.texX,this.texH])N.t.wrapS=N.t.wrapT=bn,N.t.repeat.set(4,2);let h=this.xadrez=new me({map:this.texX.t,roughness:.92}),f=this.havai=new me({map:this.texH.t,roughness:.72});this.estampasCor=this.cor,this.desenharEstampas(this.cor);let u=this.pele=new jn({color:en.p[r.p],roughness:.5,emissive:"#4A1D0C",emissiveIntensity:.15,sheen:.18,sheenRoughness:.55,sheenColor:new jt("#FFC9B0")}),d=this.peleSom=new me({color:en.p[r.p],roughness:.6,emissive:"#4A1D0C",emissiveIntensity:.1}),m=this.cab=new me({color:en.c[r.c],roughness:.64,vertexColors:!0}),_=this.cabRaspado=new me({color:en.c[r.c],roughness:.95}),g=this.calca=new jn({color:en.l[r.l],roughness:.84,sheen:.18,sheenRoughness:.75,sheenColor:new jt("#B8C4DA")}),p=this.sapMat=new me({color:en.s[r.s],roughness:.45}),y=this.solaMat=new me({color:"#F4F6F8",roughness:.55}),T=it("#F8FAFC",{r:.9}),v=it("#2A1D16",{r:.45}),b=it("#D9B44A",{r:.28,m:.7});this.gir=[];let S=(N,$=1)=>(this.gir.push({m:N,s:N.scale.clone(),k:$}),N),C=this.root=new St,x=this.hips=new St;C.add(x),S(Ct(new rn(.155,28,18),g,x,0,.025,0,{s:[1.06,.64,.82]})),this.cinto=S(fe(x,v,.145,.145,.03,0,.066,0,{s:[1.06,1,.8],seg:32})),this.fivela=pt(x,b,[-.018,.052,.108],[.018,.082,.118],.006);let E=this.spine=new St;E.position.y=.04,x.add(E);let A=new Wi([[0,-.03],[.138,-.01],[.142,.08],[.146,.15],[.162,.25],[.176,.34],[.182,.41],[.172,.462],[.135,.505],[.074,.536],[0,.55]].map(N=>new _t(N[0],N[1]))).getPoints(48);this.torso=S(Ct(new cr(A,48),o,E,0,0,0,{s:[1.06,1,.74]})),this.barriga=S(ue(E,o,.155,0,.16,0,{s:[.98,1.05,.8],seg:36,seg2:24}),1),this.barriga.visible=!1;let I=this.roupas=[],F=N=>{let $=new St;return E.add($),N($),$.visible=!1,I.push($),$},O=N=>{let $=A[0],ht=A[A.length-1];for(let G=1;G<A.length;G++)if(A[G].y>=N){$=A[G-1],ht=A[G];break}return ut($.x,ht.x,Wt((N-$.y)/(ht.y-$.y||1)))},D=(N,$,ht)=>{let G=O($);return Math.sqrt(Math.max(0,1-(N/(G*1.06))**2))*G*.74+ht},k=(N,$,ht,G,et=6,at=12)=>{let ct=[],yt=[];for(let q=0;q<=at;q++)for(let J=0;J<=et;J++){let[tt,xt]=ht(J/et,q/at);ct.push(tt,xt,D(tt,xt,G+.004+.06*Math.max(0,xt-.4)))}let[Ot,Nt]=ht(0,0),[qt,Yt]=ht(1,0),[z,ne]=ht(0,1),de=(qt-Ot)*(ne-Nt)-(Yt-Nt)*(z-Ot)<0;for(let q=0;q<at;q++)for(let J=0;J<et;J++){let tt=q*(et+1)+J,xt=tt+et+1;de?yt.push(tt,xt,tt+1,tt+1,xt,xt+1):yt.push(tt,tt+1,xt,tt+1,xt+1,xt)}let L=new Ae;L.setAttribute("position",new le(ct,3)),L.setIndex(yt),L.computeVertexNormals();let w=new Me(L,$);return w.castShadow=!1,w.receiveShadow=!0,N.add(w),w},W=(N,$,ht)=>(G,et)=>{let at=ut(N,$,et);return[(G*2-1)*ht(et),at]},Y=(N,$,ht,G,et=.0068)=>ue(N,$,et,ht,G,D(ht,G,.004),{s:[1,1,.5],seg:10,seg2:8}),ot=(N,$,ht,G,et,at,ct,yt,Ot,Nt)=>k(N,$,(qt,Yt)=>{let z=ut(at,ct,Yt),ne=ut(yt,Ot,Yt)*(Yt>.86?1-(Yt-.86)*2.4:1);return[ht*(z+qt*ne),ut(G,et,Yt)]},Nt,4,14);F(N=>{let $=new vn(.08,.01,.07);for(let ht of[-1,1])Ct($,a,N,ht*.042,.522,.072,{rx:.62,rz:-ht*.55});Ct(new Re(.066,.017,10,28),a,N,0,.535,-.004,{rx:nt/2});for(let ht of[.48,.44])ue(N,it("#E8EDF5",{r:.4}),.0078,0,ht,.122,{seg:10,seg2:8})}),F(N=>{Ct(new Re(.07,.012,10,28),a,N,0,.528,.004,{rx:nt/2-.12})}),F(N=>{Ct(new Re(.085,.034,12,28,nt*1.25),a,N,0,.53,-.025,{rx:nt/2-.25,rz:-nt*.125+nt}),ue(N,a,.1,0,.5,-.1,{s:[1.05,.6,.55]});for(let $ of[-1,1])Fn(N,it("#F1F5F9",{r:.6}),.006,.09,$*.03,.45,.13,{rx:.08});pt(N,a,[-.09,.07,.098],[.09,.18,.124],.025,{rx:-.05}),fe(N,a,.15,.15,.04,0,-.005,0,{s:[1.06,1,.76],seg:32})}),F(N=>{for(let G of[-1,1])Ct(new vn(.075,.008,.06),l,N,G*.04,.525,.07,{rx:.7,rz:-G*.75});Ct(new Re(.064,.013,10,28),l,N,0,.535,-.004,{rx:nt/2});let $=this.gravata=new me({color:this.cor,roughness:.5});pt(N,$,[-.02,.49,.112],[.02,.525,.13],.008);let ht=new ar;ht.moveTo(-.018,0),ht.lineTo(.018,0),ht.lineTo(.032,-.25),ht.lineTo(0,-.29),ht.lineTo(-.032,-.25),ht.closePath(),Ct(new ro(ht,{depth:.008,bevelEnabled:!0,bevelSize:.003,bevelThickness:.003,bevelSegments:1}),$,N,0,.495,.118,{rx:-.1});for(let G of[.4,.3,.2,.1])ue(N,it("#CBD5E1",{r:.4}),.006,.045,G,.14-G*.02,{seg:8,seg2:6})}),F(N=>{k(N,l,W(.03,.515,$=>ut(.07,.06,$)),.002);for(let $ of[-1,1])pt(N,it("#475569",{r:.3,m:.6}),[-.004,-0,-.004],[.004,.42,.004],.002).position.set($*.075,.24,.136-0);Ct(new Re(.078,.026,10,28),a,N,0,.525,-.012,{rx:nt/2-.15}),fe(N,a,.15,.15,.04,0,-.005,0,{s:[1.06,1,.76],seg:32})}),F(N=>{Ct(new Re(.075,.01,10,28),a,N,0,.52,.01,{rx:nt/2-.25})}),F(N=>{k(N,l,W(.3,.535,G=>ut(.012,.08,G)),.003);let $=this.gravata2=new me({color:this.cor,roughness:.45});k(N,$,W(.255,.49,G=>G<.1?ut(.002,.025,G/.1):ut(.025,.012,(G-.1)/.9)),.0065),k(N,$,W(.488,.522,G=>ut(.012,.018,G)),.0085,4,3);let ht=it("#1D212B",{r:.42});for(let G of[-1,1])ot(N,ht,G,.285,.535,.002,.07,.03,.05,.009);for(let G of[.25,.18])Y(N,it("#11141B",{r:.35}),0,G);k(N,it("#1D212B",{r:.5}),(G,et)=>[-.115+G*.065,ut(.352,.356,et)],.006,3,1),k(N,$,(G,et)=>[-.108+G*.05,ut(.354,.385,et)-(G>.5?0:.008*et)],.0075,4,4)}),F(N=>{k(N,l,W(.18,.53,ht=>ut(.03,.085,ht)),.003),Ct(new Re(.068,.011,10,28),l,N,0,.528,.004,{rx:nt/2-.12});let $=this.lapBlazer=new me({color:Mn(this.cor,"#000000",.22),roughness:.55});for(let ht of[-1,1])ot(N,$,ht,.17,.535,.028,.078,.032,.05,.008);Y(N,it("#1F2937",{r:.35}),.03,.15,.0075)}),F(N=>{let $=new vn(.082,.009,.07);for(let ht of[-1,1])Ct($,h,N,ht*.043,.523,.071,{rx:.66,rz:-ht*.6});Ct(new Re(.066,.015,10,28),h,N,0,.534,-.004,{rx:nt/2}),k(N,h,W(.02,.5,()=>.011),.003,2,10);for(let ht of[.45,.36,.27,.18,.09])Y(N,it("#EDE6D6",{r:.4}),0,ht,.006)}),F(N=>{k(N,u,W(.43,.535,$=>ut(.004,.05,$)),.003);for(let $ of[-1,1])ot(N,f,$,.4,.535,.004,.052,.03,.045,.006);for(let $ of[.36,.26,.16,.06])Y(N,it("#F5EBD8",{r:.4}),0,$,.006)}),this.estampa=Oe(128,128);let Z=Ct(new Ze(.1,.1),new He({map:this.estampa.t,transparent:!0,alphaTest:.1,toneMapped:!1}),E,-.072,.37,.126,{cast:!1,ry:-.1});this.estampaPlano=Z,this.temIcone=!1,this.setIcone(e);let rt=this.neck=new St;rt.position.y=.52,E.add(rt),fe(rt,u,.05,.056,.12,0,.03,.004,{seg:20});let j=this.head=new St;j.position.set(0,.045,.014),j.scale.set(...fu),rt.add(j);let gt=.2,mt=.24;this.hc=gt,this.R=mt,Ct(kd(new rn(mt,56,40),mt),u,j,0,gt,0);for(let N of[-1,1])ue(j,u,.074,N*(mt-.006),gt-.014,-.014,{s:[.46,1,.78],seg:24,seg2:16}),ue(j,d,.042,N*(mt+.018),gt-.014,-.004,{s:[.32,.78,.52],seg:16,seg2:12}),Ct(new Re(.046,.011,10,24,nt*1.3),u,j,N*(mt+.02),gt-.012,-.008,{ry:N*nt/2,rz:-nt*.15,s:[1,1.25,1]});ue(j,u,.031,0,gt-.042,mt-.004,{s:[1.18,.9,.95],seg:24,seg2:16}),this.montarOlhos(j,gt,mt),this.rosto=Oe(512,384),this.rosto.g.scale(2,2);let ee=kd(new rn(mt+.003,48,28,nt/2-.9,1.8,.85,1.3),mt+.003),te=new me({map:this.rosto.t,transparent:!0,alphaTest:.04,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-2});Ct(ee,te,j,0,gt,0,{cast:!1}),this.rostoKey="",this.montarCabelo(j,gt,mt),this.montarBarba(j,gt,mt),this.montarOculos(j,gt,mt),this.montarChapeus(j,gt,mt),this.dedos={L:[],R:[]},this.tubos=[];let kt=(N,$,ht,G,et,at={})=>{let ct=new Yr(new Ae,$);return ct.frustumCulled=!1,ct.castShadow=!0,N.add(ct),this.tubos.push({m:ct,perfil:ht,juntaY:G,ossos:et,kz:at.kz??1,k:at.k??1,aberto:!!at.aberto,banda:at.banda??.055}),ct},M=(N,$)=>{let ht=new St;ht.position.set(.19*N,.437,0),E.add(ht);let G=new St;G.position.y=-Wo,ht.add(G);let et=new Ti,at=new Ti;ht.add(et),G.add(at);let ct=kt(ht,this.pele,[[.045,0],[.035,.032],[0,.05],[-.1,.048],[-.2,.043],[-.29,.039],[-.35,.043],[-.47,.034],[-.545,.029],[-.562,0]],-Wo,[et,at]),yt=kt(ht,o,[[.06,0],[.05,.04],[.02,.062],[-.06,.06],[-.19,.055]],-Wo,[et,at],{aberto:!0}),Ot=kt(ht,o,[[.06,0],[.05,.04],[.02,.062],[-.1,.058],[-.22,.052],[-.29,.05],[-.36,.051],[-.5,.044],[-.535,.043]],-Wo,[et,at],{aberto:!0}),Nt=S(ue(ht,o,.06,0,0,0,{seg:24,seg2:18,s:[1,.9,1]})),qt=S(ue(ht,this.pele,.051,0,-.004,0,{seg:20,seg2:14})),Yt=S(Ct(new Re(.055,.008,8,24),o,ht,0,-.188,0,{rx:nt/2})),z=S(fe(G,o,.045,.045,.03,0,-.24,0,{seg:22})),ne=new St;ne.position.y=-.27,ne.scale.setScalar(zd),G.add(ne),ue(ne,this.pele,.033,0,-.006,0,{s:[.72,.75,1.05],seg:16,seg2:12}),ue(ne,this.pele,.046,0,-.052,0,{s:[.38,1,.92],seg:22,seg2:16});for(let q of[-.027,-.009,.009,.027])ue(ne,this.pele,.0118,0,-.09,q,{s:[1.05,.9,1],seg:10,seg2:8});let de=this.dedos[$];[[-.028,.035],[-.0095,.043],[.0095,.041],[.028,.033]].forEach(([q,J])=>{let tt=new St;tt.position.set(0,-.092,q),ne.add(tt),Fn(tt,this.pele,.0128,J,0,-J/2-.003,0);let xt=new St;xt.position.y=-J-.006,tt.add(xt),Fn(xt,this.pele,.0118,J*.8,0,-J*.4-.002,0),de.push({p1:tt,p2:xt})});let L=new St;L.position.set(-N*.012,-.03,.034),L.rotation.set(.4,0,N*.5),ne.add(L),ue(L,this.pele,.016,0,-.006,0,{s:[.9,1.3,.9],seg:10,seg2:8}),Fn(L,this.pele,.0148,.032,0,-.022,0);let w=new St;return w.position.y=-.047,L.add(w),Fn(w,this.pele,.0132,.027,0,-.016,0),de.push({p1:L,p2:w,polegar:!0}),{sh:ht,el:G,hand:ne,lado:N,pele:ct,ombro:Nt,ombroPele:qt,mangaC:yt,bainhaC:Yt,mangaL:Ot,punho:z,qFK:new Ne,qIK:new Ne}};this.L=M(-1,"L"),this.R=M(1,"R"),this.curL={c:[.5,.42,.34,.26,.25],s:.05},this.curR={c:[.5,.42,.34,.26,.25],s:.05};let R=N=>{let $=new St;$.position.set(.094*N,-.01,0),x.add($);let ht=new St;ht.position.y=-.42,$.add(ht);let G=new St;G.position.y=-.4,ht.add(G);let et=new Ti,at=new Ti;$.add(et),ht.add(at),S(ue($,g,.088,0,-.02,0,{seg:22,seg2:16}));let ct=kt($,this.pele,[[-.3,0],[-.32,.05],[-.42,.048],[-.52,.05],[-.62,.045],[-.78,.035],[-.8,0]],-.42,[et,at]),yt=kt($,g,[[.04,0],[.03,.06],[0,.088],[-.08,.084],[-.3,.068],[-.42,.06],[-.52,.06],[-.7,.05],[-.775,.05]],-.42,[et,at],{aberto:!0,kz:1.04}),Ot=kt($,g,[[.04,0],[.03,.06],[0,.09],[-.08,.086],[-.3,.072],[-.44,.064]],-.42,[et,at],{aberto:!0,kz:1.04}),Nt=S(Ct(new Re(.064,.011,8,22),g,ht,0,-.02,0,{rx:nt/2})),qt=S(Ct(new Re(.05,.0095,8,20),g,ht,0,-.355,0,{rx:nt/2})),Yt=fe(G,T,.036,.039,.07,0,.012,0,{seg:16}),z=new St;z.scale.setScalar(1.22),z.position.y=.0167,G.add(z),ue(z,p,.058,0,-.026,.032,{s:[.9,.66,1.74],seg:28,seg2:18}),ue(z,p,.046,0,-.008,-.02,{s:[.98,.98,1.02],seg:22,seg2:14}),Ct(new Re(.036,.011,10,24),p,z,0,.008,-.012,{rx:nt/2+.25}),ue(z,it("#F1F4F8",{r:.6}),.024,0,.002,.024,{s:[.95,.45,1.4],seg:14,seg2:10}),Ct(new Vi(.06,.058,.03,32),y,z,0,-.062,.04,{s:[.95,1,1.82]}),Ct(new Re(.06,.0045,6,32),it("#94A3B8",{r:.5}),z,0,-.054,.04,{rx:nt/2,s:[.96,1.83,1]});for(let ne=0;ne<3;ne++)pt(z,it("#E9EDF2",{r:.7}),[-.02,0,-.004],[.02,.006,.004],.002).position.set(0,.006-ne*.008,.034+ne*.02);return{hp:$,kn:ht,ft:G,peleP:ct,calcaL:yt,bermudaM:Ot,bermuda:Nt,barra:qt,meiaM:Yt}};this.PL=R(-1),this.PR=R(1),Ln(C,!0,!1);let B=Oe(64,64),H=B.g.createRadialGradient(32,32,0,32,32,32);H.addColorStop(0,"rgba(0,0,0,.45)"),H.addColorStop(1,"rgba(0,0,0,0)"),B.g.fillStyle=H,B.g.fillRect(0,0,64,64),this.blob=new Me(new Ze(.7,.7),new He({map:B.t,transparent:!0,depthWrite:!1})),this.blob.rotation.x=-nt/2,this.blob.position.y=.004,this.mL=new U,this.mR=new U,this.gp=new U(0,-.06,0),this.pDy=0,this.pNod=0,this.pT=null,this.pYaw=null,this.esc=1,C.updateMatrixWorld(!0);for(let N of this.tubos)N.m.geometry=this.geoTubo(N,1),N.esq=new Zr(N.ossos),N.m.bind(N.esq,N.m.matrixWorld);this.setAparencia(n,i)}montarCabelo(t,e,n){let i=this.cab,r=this.cortes=[],o=Mt(0,e,0),a=(p,y,T=0)=>Mt(Math.sin(p)*Math.sin(y),Math.cos(p),Math.sin(p)*Math.cos(y)).multiplyScalar(n+T).add(o),l=p=>p.clone().sub(o).normalize(),c=p=>{let y=Math.cos(p);return y>0?ut(1.32,.98,Math.pow(y,1.4)):ut(1.32,1.95,Math.pow(-y,.9))},h=(p=.012,y=1.36,T=0)=>{let v=new rn(n+p,56,32,0,se,0,2.1),b=v.attributes.position,S=new U;for(let C=0;C<b.count;C++){S.fromBufferAttribute(b,C);let x=Math.acos(Wt(S.y/(n+p),-1,1)),E=Math.atan2(S.x,S.z),A=c(E)+T;if(x>A){let I=a(A,E,p).sub(o);b.setXYZ(C,I.x,I.y,I.z)}}return v.computeVertexNormals(),uc(v,0,e,0),lc(v,.7)},f=(p,y,T,v={})=>Vo(p,y*1.3,T*1.5,{ref:b=>l(b),...v}),u=(p,y,T,v,b,S,C=7,x=.012)=>{let E=[];for(let A=0;A<=C;A++){let I=A/C;E.push(a(ut(p,T,I),ut(y,v,I),ut(b,S,I)+x*Math.sin(nt*I)))}return E},d=(p,y)=>Pi(p*3.7+y)-.5,m=(p,y)=>{let T=new St;if(p.length){let v=Ct(cc(p),i,T);v.castShadow=!0}return y&&y(T),r[g]=T,T},_=[];_[0]=()=>{{let p=[h(.012)];for(let S=0;S<26;S++){let C=nt*.32+S/25*nt*1.36+d(S,1)*.08;p.push(f(u(.45+d(S,2)*.1,C,c(C)-.05,C+d(S,3)*.12,.03,.006),.045,.014))}let y=m(p),T=this.fio=new St;T.position.copy(a(.45,0,0)),y.add(T);let v=[],b=T.position.clone();for(let S=0;S<16;S++){let C=-.75+S/15*1.5+d(S,4)*.06,x=.07+.035*Math.cos(C*1.6),E=[a(.95,C*.9,.006),a(.62,C*.85,x*.75),a(.3,C*.7,x),a(.05+d(S,5)*.1,C*.5+nt*.06,x*.65),a(.42,nt+C*.4,.012)].map(A=>A.sub(b));v.push(Vo(E,.05,.016,{ref:A=>A.clone().add(b).sub(o).normalize(),bulbo:.25}))}Ct(cc(v),i,T),this.fioBase=T}},_[1]=()=>{{let p=[h(.012)];for(let y=0;y<44;y++){let T=y/44*se+d(y,6)*.1,v=Math.cos(T),b=c(T)+(v>.5?.02:-.02);p.push(f(u(.08+Pi(y)*.2,T*.85+d(y,7)*.2,b,T,.03,v>.5?.02:.008,7,.018),.042,.012))}m(p)}},_[2]=()=>{{let p=new St;Ct(h(.004,1.36,.04),this.cabRaspado,p),r[g]=p}},_[3]=()=>{{let p=new rn(n+.03,40,18,nt-.5,nt+1,.75,1.55),y=p.attributes.position;for(let b=0;b<y.count;b++){let S=y.getY(b);S<0&&y.setY(b,S*1.9);let C=y.getX(b),x=y.getZ(b);if(S<0){let E=1+.12*(-S/n);y.setX(b,C*E),y.setZ(b,x*E)}}p.computeVertexNormals(),uc(p,0,e,0);let T=[h(.014),lc(p,.66)],v=.35;for(let b=0;b<64;b++){let S=b%2?1:-1,C=Math.floor(b/2)/31,x=v+S*(.06+C*nt*.94)+d(b,8)*.05,E=Math.cos(x),A=.16+Pi(b+2)*.08,I=u(A,v+S*.04,nt*.4,x,.032,.036,4,.012),F=c(x),O=a(Math.min(F,1.45),x,.04);if(E>.6)I.push(a(.92,x,.045),a(1.08,x*1.25+S*.1,.035));else{I.push(O);let D=l(O).setY(0).normalize(),k=.3+.1*(1-Math.abs(E))+Pi(b)*.05;I.push(O.clone().add(D.clone().multiplyScalar(.035)).add(Mt(0,-k*.5,0)),O.clone().add(D.clone().multiplyScalar(.06)).add(Mt(0,-k,E<-.3?-.02:0)))}T.push(f(I,.085,.03,{bulbo:.15,seg:24,ach:.4,raiz:.78}))}m(T)}},_[4]=()=>{{let p=[h(.018)],y=0;for(let T=0;T<200&&y<120;T++){let v=Math.acos(1-2*((T+.5)/200)),b=T*2.39996;if(v>c(Math.atan2(Math.sin(b),Math.cos(b)))-.05)continue;y++;let S=a(v,b,.03),C=l(S),x=Mt(-C.z,0,C.x).normalize();x.lengthSq()<.5&&x.set(1,0,0);let E=new U().crossVectors(C,x),A=[],I=.026+Pi(T)*.012,F=1.5;for(let O=0;O<=12;O++){let D=O/12,k=D*F*se+T;A.push(S.clone().add(x.clone().multiplyScalar(Math.cos(k)*I)).add(E.clone().multiplyScalar(Math.sin(k)*I)).add(C.clone().multiplyScalar(D*.045)))}p.push(Vo(A,.02,.014,{ach:1,rad:6,seg:18}))}m(p)}},_[5]=()=>{{let p=[h(.02)],y=Mt(0,e+.1,-.08);for(let v=0;v<170;v++){let b=1-2*((v+.5)/170),S=Math.sqrt(1-b*b),C=v*2.39996,x=Mt(S*Math.sin(C),b,S*Math.cos(C)),E=y.clone().add(x.clone().multiply(Mt(.27,.24,.26)));if(E.z-o.z>.12&&E.y<e+.12||E.y<e-.12)continue;let A=new ps(.058+Pi(v)*.016,1),I=Kh(A);I.computeVertexNormals(),uc(I,E.x,E.y,E.z),p.push(lc(I,.82+Pi(v+1)*.25))}let T=m(p);T.userData.volume=T.children[0]}},_[6]=()=>{{let p=[h(.014)],y=Mt(0,e+.2,-.17);for(let x=0;x<30;x++){let E=x/30*se,A=c(E);if(Math.cos(E)<-.6)continue;let I=a(A-.02,E,.006),F=a(A*.5,E*.6+nt*.4*Math.sign(Math.sin(E)||1),.022);p.push(f([I,F,y.clone().add(Mt(0,-.02,.02))],.04,.02))}let T=new ps(.095,3),v=T.attributes.position,b=new U;for(let x=0;x<v.count;x++){b.fromBufferAttribute(v,x);let E=b.clone().normalize();b.copy(E.multiplyScalar(.095*(1+.06*Math.sin(Math.atan2(E.x,E.z)*7+E.y*9)))),v.setXYZ(x,b.x,b.y,b.z)}let S=Kh(T);S.computeVertexNormals(),uc(S,y.x,y.y+.04,y.z-.03,.4),p.push(lc(S,1));let C=m(p,x=>Ct(new Re(.06,.012,8,20),it("#111827",{r:.5}),x,y.x,y.y-.02,y.z,{rx:nt/2+.4}));C.userData.volume=C.children[0]}},_[7]=()=>{{let p=new St;Ct(h(.004,1.36,.04),this.cabRaspado,p);let y=[h(.012,0,-0).applyMatrix4(new ae)];y.length=0;for(let v=0;v<15;v++){let b=v/14,S=ut(-.95,1.75,b),C=Math.abs(S),x=S<0?0:nt,E=.07+.06*Math.sin(nt*Wt(b*1.15)),A=a(C,x,-.005),I=l(A),F=(S<0,Mt(0,0,-1)),O=A.clone().add(I.clone().multiplyScalar(E)).add(Mt(0,0,-.05-.03*b)).add(F.multiplyScalar(0));for(let D of[-1,0,1])y.push(Vo([a(C+(S<0?-1:1)*0,x,-.004).add(Mt(D*.022,0,0)),A.clone().add(I.clone().multiplyScalar(E*.5)).add(Mt(D*.012,0,-.01)),O.clone().add(Mt(D*.006,0,0))],.065,.01,{ref:Mt(1,0,0),rad:6,seg:10,ach:.8,raiz:.7}))}let T=Ct(cc(y),i,p);p.userData.volume=T,r[g]=p}},_[8]=()=>{{let p=[h(.012)],y=Mt(0,e+.06,-n-.03);for(let S=0;S<34;S++){let C=S/34*se,x=c(C);Math.cos(C)<-.7||p.push(f([a(x-.03,C,.006),a(x*.55,C*.75+(Math.sin(C)>0?.6:-.6),.02),y.clone().add(Mt(0,.01,.03))],.04,.02))}let T=m(p,S=>Ct(new Re(.035,.012,8,18),it("#E11D48",{r:.5}),S,y.x,y.y,y.z,{rx:.2})),v=new St;v.position.copy(y),T.add(v);let b=[];for(let S=0;S<9;S++){let C=S/9*se,x=Mt(Math.cos(C)*.018,Math.sin(C)*.015,0);b.push(Vo([x.clone(),x.clone().add(Mt(0,.02,-.07)),x.clone().multiplyScalar(1.6).add(Mt(0,-.12,-.1)),x.clone().multiplyScalar(1.2).add(Mt(0,-.32,-.06)),x.clone().multiplyScalar(.4).add(Mt(0,-.44,-.03))],.032,.008,{ref:Mt(0,0,-1),bulbo:.4,seg:20}))}Ct(cc(b),i,v),this.molas.rabo={g:v,a:0,v:0,b:0,vb:0},T.userData.volume=v}},_[9]=()=>{r[g]=new St};let g=0;this.corte=p=>{if(!r[p]){g=p,_[p]();let y=r[p];y.visible=!1,Ln(y,!0,!1),t.add(y),this.chapeuAtual!==void 0&&y.userData.volume&&(y.userData.volume.visible=!this.chapeuAtual)}return r[p]}}montarBarba(t,e,n){let i=this.barbas=[null],r=this.barbaMat=new me({color:en.c[this.ap.c],roughness:1}),o=l=>{for(let c of[-1,1])Fn(l,r,.0095,.048,c*.028,e-.078,n-.012,{rz:nt/2+c*.25,s:[1,1,.6]})},a=new St;o(a),ue(a,r,.028,0,e-.17,n-.06,{s:[1,1.15,.5],seg:14,seg2:10}),i.push(a),a=new St,o(a),Ct(new rn(n+.008,40,16,nt/2-1.3,2.6,2,.85),r,a,0,e,0),i.push(a),a=new St;for(let l of[-1,1])Fn(a,r,.012,.05,l*.03,e-.076,n-.01,{rz:nt/2+l*.35,s:[1,1,.7]});i.push(a),i.forEach(l=>{l&&(l.visible=!1,t.add(l))})}montarOlhos(t,e,n){let o=e+.004,a=new jn({color:"#FBFAF7",roughness:.18,clearcoat:1,clearcoatRoughness:.08}),l=this.irisMat=new jn({color:"#3A2214",roughness:.25,clearcoat:1,clearcoatRoughness:.05}),c=new jn({color:"#070403",roughness:.2,clearcoat:1,clearcoatRoughness:.05}),h=new He({color:"#FFFFFF",toneMapped:!1}),f=this.cilioMat=new me({color:"#24140C",roughness:.6}),u=this.sobMat=new me({color:"#2A1A10",roughness:.75}),d=(m,_)=>{let g=new rn(m,28,10,0,se,0,_);return g.rotateX(nt/2),g};this.olhos3d=[];for(let m of[-1,1]){let _=new St,g=Math.sin(.39)*n*m,p=Math.cos(.39)*n;_.position.set(g*.94,o,p-.044*.52),_.rotation.set(0,m*.39*.8,0),t.add(_);let y=new St;_.add(y),Ct(new rn(.044,28,20),a,y,0,0,0,{cast:!1}),Ct(d(.044*1.004,.84),l,y,0,0,0,{cast:!1}),Ct(d(.044*1.008,.44),c,y,0,0,0,{cast:!1});let T=ue(_,h,.044*.17,-.044*.26,.044*.3,.044*.94,{seg:10,seg2:8,cast:!1}),v=ue(_,h,.044*.075,.044*.27,-.044*.24,.044*.97,{seg:8,seg2:6,cast:!1}),b=O=>{let D=new St;_.add(D);let k=new rn(.044*1.07,28,12,0,se,O?0:nt/2,nt/2);Ct(k,this.pele,D,0,0,0,{cast:!1});let W=Ct(new Re(.044*1.075,O?.044*.085:.044*.045,8,28,nt),O?f:this.peleSom,D,0,0,0,{cast:!1});return W.rotation.x=nt/2,D},S=b(!0),C=b(!1),x=new St,E=Math.sin(.39*.95)*n*m;x.position.set(E,e+.066,Math.cos(.39*.95)*n*.985),x.rotation.set(-.25,m*.39*.85,0),t.add(x);let A=new sr(.0135,.064,6,14);A.rotateZ(nt/2);let I=A.attributes.position;for(let O=0;O<I.count;O++){let D=I.getX(O),k=D/.045,W=Wt(.5+.5*k*m),Y=ut(1.12,.62,W);I.setY(O,I.getY(O)*Y+.011*(1-k*k)-.006*W*W),I.setZ(O,I.getZ(O)*.55*Y-.75*D*D)}A.computeVertexNormals();let F=Ct(A,u,x,0,0,.004,{cast:!1});this.olhos3d.push({s:m,base:_,globo:y,sup:S,inf:C,sg:x,sm:F,b1:T,b2:v,y0:x.position.y})}}posarOlhos(t,e,n){if(!this.olhos3d)return;let i=1-Wt(e,0,1),r=Math.max(0,e-1);for(let o of this.olhos3d){o.globo.rotation.set(Wt(t.oy||0,-1.2,1.2)*.32,Wt(t.ox||0,-1.2,1.2)*.42,0),o.sup.rotation.x=ut(-.92-r*.9,1.45,i)+n*.12,o.inf.rotation.x=ut(.98,.3,n)-i*.75+(t.dentroS<0?t.dentroS*.2:0);let a=i<.85;o.b1.visible=o.b2.visible=a;let l=(t.sobeAssim||0)*(o.s>0?1:-1);o.sg.position.y=o.y0+(t.sobeS||0)*.026+Math.max(0,t.dentroS||0)*.008+l*.012-n*.004-i*.006,o.sm.rotation.z=-o.s*((t.dentroS||0)*.42-n*.08)+l*.12}}montarOculos(t,e,n){let i=this.oculos=new St,r=it("#1F2937",{r:.35,m:.3});this.lente=new me({color:"#0B1220",roughness:.15,metalness:.4,transparent:!0,opacity:.85});let o=.1,a=e+.005,l=n+.045;for(let c of[-1,1]){Ct(new Re(.056,.007,8,28),r,i,c*o,a,l,{ry:c*.18});let h=Ct(new fs(.054,24),this.lente,i,c*o,a,l-.002,{ry:c*.18,cast:!1});h.name="lente",pt(i,r,[-.006,-.008,-.2],[.006,.008,0],.003).position.set(c*(n+.012),a+.01,l-.12),pt(i,r,[-.05,-.007,-.006],[.05,.007,.006],.003).position.set(c*(o+.1),a+.008,l-.012)}fe(i,r,.005,.005,.07,0,a+.008,l+.006,{rz:nt/2}),i.visible=!1,t.add(i)}montarChapeus(t,e,n){let i=this.chapeus={},r=new St,o=it("#2563EB",{r:.7});Ct(new rn(n+.035,36,16,0,se,0,1.3),o,r,0,e+.01,-.01,{rx:-.18}),pt(r,o,[-.15,-.01,0],[.15,.01,.2],.01,{rx:.18}).position.set(0,e+.12,.19),ue(r,it("#1E3A8A"),.025,0,e+n+.03,-.02,{seg:10,seg2:8}),i.a_bone=r,r=new St;let a=it("#111827",{r:.6});fe(r,a,n+.03,n+.03,.12,0,e+.16,0,{seg:36}),pt(r,a,[-.34,-.012,-.34],[.34,.012,.34],.01,{ry:nt/4}).position.set(0,e+.23,0),fe(r,it("#F5B400",{r:.4}),.008,.008,.2,.2,e+.13,.12,{rz:.1}),i.a_formatura=r,r=new St;let l=it("#F5B400",{r:.25,m:.85});fe(r,l,n*.82,n*.86,.1,0,e+.22,0,{seg:36});for(let c=0;c<6;c++){let h=c/6*se;Ct(new fi(.04,.11,10),l,r,Math.sin(h)*n*.8,e+.31,Math.cos(h)*n*.8),ue(r,it(c%2?"#DC2626":"#2563EB",{r:.2,m:.3}),.024,Math.sin(h)*n*.86,e+.22,Math.cos(h)*n*.86,{seg:10,seg2:8})}i.a_cartola=r,Object.values(i).forEach(c=>{c.visible=!1,t.add(c)})}geoTubo(t,e){let n=t.perfil,i=30,r=22,o=1+(e-1)*t.k,l=new Wi(n.map(([p,y])=>new _t(y,p))).getPoints(i),c=[],h=[],f=[],u=[],d=[],m=n.reduce((p,y)=>p+Math.max(0,y[1]),0)/n.length,_=se*m/.93;for(let p=0;p<=i;p++){let{x:y,y:T}=l[p],v=Math.max(0,y)*o,b=ce((t.juntaY+t.banda-T)/(2*t.banda));for(let S=0;S<=r;S++){let C=S/r*se;c.push(Math.sin(C)*v,T,Math.cos(C)*v*t.kz),f.push(0,1,0,0),u.push(1-b,b,0,0),d.push(S/r*_,-T/.58)}}for(let p=0;p<i;p++)for(let y=0;y<r;y++){let T=p*(r+1)+y,v=T+r+1;h.push(T,v,T+1,v,v+1,T+1)}let g=new Ae;return g.setAttribute("position",new le(c,3)),g.setIndex(h),g.setAttribute("uv",new le(d,2)),g.setAttribute("skinIndex",new hs(f,4)),g.setAttribute("skinWeight",new le(u,4)),g.computeVertexNormals(),t.aberto&&g.setAttribute("normal",g.getAttribute("normal")),g}setAparencia(t,e){let n=this.ap=Nd(t);this.pele.color.set(en.p[n.p]),this.peleSom.color.set(Mn(en.p[n.p],"#7A3B22",.12)),this.cab.color.set(en.c[n.c]),this.sobMat&&this.sobMat.color.set(Mn(en.c[n.c],"#000000",.28)),this.barbaMat.color.set(Mn(en.c[n.c],en.p[n.p],.12)),this.cabRaspado.color.set(Mn(en.c[n.c],en.p[n.p],.22)),this.calca.color.set(en.l[n.l]),this.sapMat.color.set(en.s[n.s]),this.solaMat.color.set(n.s===1?"#1F2937":"#F4F6F8");let i=this.chapeus[e]?e:"";this.chapeuAtual=i,this.corte(n.k),this.cortes.forEach((a,l)=>{a&&(a.visible=l===n.k,a.userData.volume&&(a.userData.volume.visible=!i))}),this.barbas.forEach((a,l)=>{a&&(a.visible=l===n.b)}),Object.entries(this.chapeus).forEach(([a,l])=>{l.visible=a===i}),this.fio&&(this.fio.visible=!i);let r=e==="a_oculos";this.oculos.visible=r||n.o===1,this.lente.opacity=r?.88:.12,this.lente.color.set(r?"#0B1220":"#DCEBFF"),this.esc=__[n.a],this.root.scale.setScalar(this.esc);let o=Bd[n.w];this.fGir=o;for(let{m:a,s:l,k:c}of this.gir){let h=1+(o-1)*c;a.scale.set(l.x*h,l.y,l.z*h)}for(let a of this.roupas)a.scale.set(o,1,o);if(this.gTubos!==o){this.gTubos=o;for(let a of this.tubos){let l=a.m.geometry;a.m.geometry=this.geoTubo(a,o),l&&l.dispose()}}this.barriga.visible=n.w>=3,this.barriga.position.z=(o/Bd[2]-1)*.1,this.L.sh.position.x=-.19*(1+(o-1)*.6),this.R.sh.position.x=.19*(1+(o-1)*.6),this.PL.hp.position.x=-.094*(1+(o-1)*.5),this.PR.hp.position.x=.094*(1+(o-1)*.5),this.fivela.position.z=.118*o+.002,this.estampaPlano.position.z=.1265*o+.004,this.setRoupa(n.r,n.e),this.rostoKey=""}setRoupa(t,e){this.roupas.forEach((l,c)=>{l.visible=c===t});let n=hc[t]||hc[0],i=this[n.m],r=n.manga==="L",o=n.manga==="R";for(let l of[this.L,this.R]){l.mangaC.visible=l.bainhaC.visible=!r&&!o,l.mangaL.visible=l.punho.visible=r,l.ombro.visible=!o,l.ombroPele.visible=o;for(let c of["ombro","mangaC","bainhaC","mangaL"])l[c].material=i;l.punho.material=n.punho?this[n.punho]:i}this.torso.material=i,this.barriga.material=i,this.estampaPlano.visible=this.temIcone&&!!n.estampa;let a=e===1;t===6&&!a&&this.calca.color.set(Ud);for(let l of[this.PL,this.PR])l.calcaL.visible=l.barra.visible=!a,l.bermudaM.visible=l.bermuda.visible=l.peleP.visible=a,l.meiaM.scale.y=a?1.8:1,l.meiaM.position.y=a?.04:.012}setCor(t){let e=t||"#2457F5";this.cor=e,this.camisa.color.set(e),this.gola.color.set(e).lerp(new jt(this.ap.r===2?"#000000":"#FFFFFF"),this.ap.r===2?.08:.16),this.gravata&&this.gravata.color.set(e),this.gravata2&&this.gravata2.color.set(e),this.lapBlazer&&this.lapBlazer.color.set(Mn(e,"#000000",.22)),this.estampasCor!==e&&(this.estampasCor=e,this.desenharEstampas(e))}desenharEstampas(t){{let{g:e,t:n}=this.texX,i=Mn(t,"#000000",.5),r=Mn(t,"#FFFFFF",.6);e.globalAlpha=1,e.fillStyle=Mn(t,"#FFFFFF",.08),e.fillRect(0,0,256,256),e.globalAlpha=.42,e.fillStyle=i,e.fillRect(0,72,256,72),e.fillRect(72,0,72,256),e.globalAlpha=.3,e.fillRect(0,196,256,22),e.fillRect(196,0,22,256),e.globalAlpha=.85,e.fillStyle=r,e.fillRect(0,168,256,5),e.fillRect(168,0,5,256),e.globalAlpha=.6,e.fillStyle="#0B0F17",e.fillRect(0,106,256,4),e.fillRect(106,0,4,256),e.globalAlpha=.06,e.fillStyle="#000";for(let o=-256;o<256;o+=4)e.beginPath(),e.moveTo(o,0),e.lineTo(o+256,256),e.lineTo(o+258,256),e.lineTo(o+2,0),e.fill();e.globalAlpha=1,n.needsUpdate=!0}{let{g:e,t:n}=this.texH;e.globalAlpha=1,e.fillStyle=t,e.fillRect(0,0,256,256);let i=Mn(Mn(t,"#0E5A3A",.6),"#000000",.15),r="#FFF7EC",o="#F6B93B",a=(h,f,u)=>{for(let d of[-256,0,256])for(let m of[-256,0,256])e.save(),e.translate(h+d,f+m),u(),e.restore()},l=(h,f,u,d)=>a(h,f,()=>{e.rotate(u),e.fillStyle=i,e.beginPath(),e.ellipse(0,0,34*d,12*d,0,0,se),e.fill(),e.strokeStyle=Mn(i,"#FFFFFF",.25),e.lineWidth=2,e.beginPath(),e.moveTo(-30*d,0),e.lineTo(30*d,0),e.stroke()}),c=(h,f,u,d)=>a(h,f,()=>{e.rotate(u),e.fillStyle=r;for(let m=0;m<5;m++)e.rotate(se/5),e.beginPath(),e.ellipse(0,-15*d,9*d,15*d,0,0,se),e.fill();e.fillStyle=o,e.beginPath(),e.arc(0,0,6*d,0,se),e.fill()});l(40,60,.6,1),l(170,30,-.4,.9),l(120,170,1.9,1.1),l(220,210,.3,.8),l(30,210,-1.1,.9),c(78,92,.3,1.1),c(200,120,1.2,.9),c(60,190,.8,.8),c(170,230,.1,1),n.needsUpdate=!0}}setIcone(t){let{g:e,t:n}=this.estampa;e.clearRect(0,0,128,128);let i=!!(t&&typeof window<"u"&&window.RI&&window.RI.tem(t+":f"));i&&window.RI.desenhar(e,t+":f",64,64,104,"rgba(255,255,255,.92)"),this.temIcone=i,this.estampaPlano.visible=i&&!!(hc[this.ap.r]||hc[0]).estampa,n.needsUpdate=!0}oriMao(t,e){if(!e)return null;let n;if(e==="baixo"){let a=this.root.rotation.y;n=Mt(Math.sin(a),-.3,Math.cos(a))}else{if(Array.isArray(e)&&e.length===4)return new Ne(...e);n=Mt(...e)}n.normalize();let i=Mt(0,t==="R"?1:-1,0),r=n.clone().negate().addScaledVector(i,n.dot(i)).normalize(),o=new U().crossVectors(i,r);return new Ne().setFromRotationMatrix(new ae().makeBasis(i,r,o))}ik(t,e,n,i){let r=t.sh,o=this.spine,a=o.worldToLocal(e.clone());if(i){let S=o.getWorldQuaternion(new Ne).invert().multiply(i);a.sub(this.gp.clone().multiplyScalar(zd).applyQuaternion(S))}a.sub(r.position);let l=Wo,c=i?Od-.055:Od,h=a.length();h=Wt(h,Math.abs(l-c)+.02,l+c-.002);let f=Wt((l*l+c*c-h*h)/(2*l*c),-1,1),u=nt-Math.acos(f),d=Mt(0,-l-c*Math.cos(u),c*Math.sin(u)),m=Mt(0,-1,0),_=d.clone().normalize(),g=a.clone().normalize(),p=new U().crossVectors(_,m).normalize(),y=Mt(t.lado*.55,-1,-.45).normalize(),T=new U().crossVectors(g,y);T.lengthSq()<1e-6&&T.set(1,0,0),T.normalize();let v=new ae().makeBasis(_,p,new U().crossVectors(_,p)),b=new ae().makeBasis(g,T,new U().crossVectors(g,T));t.qIK.setFromRotationMatrix(b.multiply(v.transpose())),t.qFK.copy(r.quaternion),r.quaternion.slerpQuaternions(t.qFK,t.qIK,n),t.el.rotation.x=ut(t.el.rotation.x,-u,n)}aplicar(t,e=0,n=0){let i=Math.sin(e*1.75),r=Math.sin(e*1.75-.7),o=Math.sin(e*.43)*.6+Math.sin(e*.97+1.3)*.4,a=1-Wt(Math.abs(t.dy)*4+Math.abs(t.hz)*4,0,.6),l=t.alt*ut(1,1/this.esc,Wt(t.sent||0));this.hips.position.set(.004*o*a,l+t.dy/this.esc+.0025*i,t.hz),this.spine.rotation.set(t.lean+.012*r,t.twist+.02*o*a,t.side+.008*o*a);let c=this.fGir||1;this.torso.scale.set(1.06*c*(1+.01*i),1+.007*i,.74*c*(1+.022*i));let h=Math.sin(e*.52+.6)*.03+Math.sin(e*1.31)*.012;this.neck.rotation.set(t.nod*.35,t.turn*.4+h*.4,t.roll*.4),this.head.rotation.set(t.nod*.65+.008*i,t.turn*.6+h*.6,t.roll*.6+.01*o*a);let f=t.item||"",u=.01*i;this.L.sh.position.y=.437+u,this.R.sh.position.y=.437+u,this.L.sh.rotation.set(-t.aL[0],0,-t.aL[1]),this.L.el.rotation.x=-t.aL[2],this.R.sh.rotation.set(-t.aR[0],0,t.aR[1]),this.R.el.rotation.x=-t.aR[2],this.PL.hp.rotation.x=-t.lL[0],this.PL.kn.rotation.x=t.lL[1],this.PL.ft.rotation.x=t.lL[0]-t.lL[1]+(t.pL||0),this.PR.hp.rotation.x=-t.lR[0],this.PR.kn.rotation.x=t.lR[1],this.PR.ft.rotation.x=t.lR[0]-t.lR[1]+(t.pR||0);let d=t.kL>.001&&t.ikL?this.oriMao("L",t.oriL):null,m=t.kR>.001&&t.ikR?this.oriMao("R",t.oriR):null;(t.kL>.001&&t.ikL||t.kR>.001&&t.ikR)&&(this.root.updateMatrixWorld(!0),t.kL>.001&&t.ikL&&this.ik(this.L,Mt(...t.ikL),Wt(t.kL),d),t.kR>.001&&t.ikR&&this.ik(this.R,Mt(...t.ikR),Wt(t.kR),m));let _=Wt(t.gole||0);if(_>.01&&!(t.kR>.001&&t.ikR)){this.root.updateMatrixWorld(!0);let b=this.root.getWorldQuaternion(new Ne),S=this.esc||1,x=this.head.localToWorld(Mt(0,this.hc-.075,.228)).add(Mt(.07*S,-.075*S+.05*S*_,.07*S).applyQuaternion(b));this.ik(this.R,x,ce(_),null)}let g={controle:[[-.08,0,.12],[0,0,-.12]],tacoShot:[[.25,0,-.1],[-.15,.2,.25]],tacoV:[[0,0,.1],[0,.3,0]],xicara:[null,[.18,-.12,0]],nota:[null,[-.12,0,-.1]],tecla:[[.9,0,0],[.9,0,0]],celular:[null,[.5,-.3,.2]],moeda:[null,[.3,0,0]]}[f]||[null,null],[p,y]=g;this.L.hand.rotation.set(p?p[0]:t.mL*.9,p?p[1]:0,p?p[2]:0),this.R.hand.rotation.set(y?y[0]:t.mR*.9,y?y[1]:0,y?y[2]:0);let T=n>0?Math.min(1,n*16):1;for(let[b,S,C]of[[-1,"L",this.L],[1,"R",this.R]]){let x=this.gestoDe(t,f,S,e),E=S==="L"?this.curL:this.curR;E.s+=(x.s-E.s)*T,this.dedos[S].forEach((A,I)=>{E.c[I]+=(x.c[I]-E.c[I])*T*(A.polegar?.9:1-I*.04);let F=E.c[I];if(A.polegar){A.p1.rotation.z=b*.5-b*F*.4,A.p1.rotation.x=.4-.25*F,A.p2.rotation.z=-b*F*.7;return}A.p1.rotation.z=-b*F*1.08,A.p2.rotation.z=-b*F*1.3,A.p1.rotation.x=-E.s*(I-1.5)*.32}),x.preso||(C.hand.rotation.x+=.05*Math.sin(e*.9+b),C.hand.rotation.z+=.04*Math.sin(e*.7+b*2))}for(let[b,S,C]of[[this.L,d,t.kL],[this.R,m,t.kR]]){if(!S)continue;b.el.updateMatrixWorld(!0);let x=b.el.getWorldQuaternion(new Ne).invert().multiply(S);b.hand.quaternion.slerp(x,Wt(C))}if(n>0&&this.pT!==null){let b=Math.min(n,.05),S=this.root.rotation.y,C=this.pYaw==null?0:Gn(this.pYaw,S)/b,x=-(t.dy-this.pDy)/b*5-(t.nod-this.pNod)/b*.5;for(let A in this.molas){let I=this.molas[A];I.v+=(x*.8-70*I.a-7*I.v)*b,I.a=Wt(I.a+I.v*b,-.6,.6),I.vb+=(-C*1.2-60*I.b-6*I.vb)*b,I.b=Wt(I.b+I.vb*b,-.6,.6)}let E=this.fioM||(this.fioM={a:0,v:0});E.v+=(x-90*E.a-9*E.v)*b,E.a=Wt(E.a+E.v*b,-.4,.4),this.pYaw=S}if(this.pDy=t.dy,this.pNod=t.nod,this.pT=e,this.fio){let b=this.fioM?this.fioM.a:0;this.fio.rotation.x=b*.6+.015*i,this.fio.rotation.z=.02*o}let v=this.molas.rabo;v&&(v.g.rotation.x=.15+v.a*.8-(t.lean+t.nod)*.6,v.g.rotation.z=v.b*.8+.04*o),this.root.updateMatrixWorld(!0),this.L.hand.localToWorld(this.mL.copy(this.gp)),this.R.hand.localToWorld(this.mR.copy(this.gp))}gestoDe(t,e,n,i){let r=M_,o=n==="L"?t.gestoL:t.gestoR;if(!o){let c=n==="L"?t.aL:t.aR,h=n==="L"?t.mL:t.mR;e==="tecla"?o="tecla":e==="controle"?o="controle":e==="tacoShot"?o=n==="L"?"ponte":"segura":e==="tacoV"?o=n==="R"?"segura":"":n==="R"&&/moeda|dardo/.test(e)?o="pinca":n==="R"&&/xicara|nota|celular/.test(e)&&(o="segura"),!o&&h>.5&&(o="segura"),!o&&c[0]>2.2&&(o="aberta")}let a=r[o]||r.solto,l=a.c.slice();if(o==="tecla")for(let c=0;c<4;c++)l[c]+=.32*Math.max(0,Math.sin(i*12.5+c*2.1+(n==="L"?0:1.3)))**3;else if(o==="controle")l[4]=.35+.25*Math.max(0,Math.sin(i*(n==="L"?7:9.5)+(n==="L"?0:2)));else if(!a.preso)for(let c=0;c<5;c++)l[c]+=.07*Math.sin(i*(.6+c*.17)+c*1.7+(n==="L"?0:3))+(t.tamb&&n==="R"&&c<4?.35*Math.max(0,Math.sin(i*14-c*1.1))**4:0);return{c:l,s:a.s,preso:!!a.preso}}desenharRosto(t,e){t&&t.boca!==void 0&&t.sorr===void 0&&(t=Yd(t));let n=this.pisca||(this.pisca={prox:1.5,t:-9,dup:!1});e>n.prox&&(n.t=e,n.dup=Math.random()<.18,n.prox=e+(1.8+Math.random()*3.6)*(t.dentroS<-.3?.7:1)),t.piscar&&e-n.t>.5&&(n.t=e,n.prox=e+2+Math.random()*3);let i=e-n.t,r=0;i<.16?r=Math.sin(i/.16*nt):n.dup&&i>.24&&i<.4&&(r=Math.sin((i-.24)/.16*nt));let o=(j,gt=20)=>Math.round((j||0)*gt),a=["sorr","abre","larg","redondo","assim","dentes","lingua","morde","boch"].map(j=>o(t[j])).join(",")+"|"+(t.lagrima>.05?Math.floor(e*.6%1*24):-1);{let j=Wt(Math.max(t.fecha||0,r*.98));this.posarOlhos(t,Wt((t.olho??1)*(1-j),0,1.25),Wt(t.feliz))}if(a===this.rostoKey)return;this.rostoKey=a;let{g:l,t:c}=this.rosto;l.save(),l.setTransform(1,0,0,1,0,0),l.clearRect(0,0,512,384),l.restore(),l.save(),l.translate(128,0),l.scale(y_,1),l.translate(-128,0);let h=en.p[this.ap.p],f=en.c[this.ap.c],u=this.ap.p>=4,d=128,m=104,_=47,g=u?"#160C07":"#2A1810",p=u?"rgba(20,8,4,.2)":"rgba(120,60,35,.12)";l.lineCap="round",l.lineJoin="round";let y=Wt(t.sorr,-1,1),T=Wt(t.abre),v=Wt(t.feliz),b=Wt(Math.max(t.fecha||0,r*.98)),S=.16+.84*Wt(t.boch),C=Math.max(0,y)*6;for(let j of[-1,1]){let gt=140-C,mt=l.createRadialGradient(d+j*60,gt,1,d+j*60,gt,25);mt.addColorStop(0,`rgba(235,95,95,${.42*S})`),mt.addColorStop(1,"rgba(235,95,95,0)"),l.fillStyle=mt,l.beginPath(),l.ellipse(d+j*60,gt,25,14,0,0,se),l.fill()}let x=Wt(t.redondo);if(y>.45&&x<.5){let j=(y-.45)*2*(1-x*2);l.strokeStyle=u?`rgba(10,4,2,${.3*j})`:`rgba(140,70,50,${.34*j})`,l.lineWidth=1.8;for(let gt of[-1,1])l.beginPath(),l.moveTo(d+gt*22,141),l.quadraticCurveTo(d+gt*34,152,d+gt*31,166),l.stroke()}let E=161,A=Mn(h,"#8E2F2B",u?.35:.42),I=Mn(h,"#B5524A",u?.28:.36),F=Mn(h,"#3A0F0C",.7),O="#4A1216",D=21*(t.larg??1)*(1-.45*x)*(1+.15*Math.max(0,y)*(1-x)),k=j=>E-y*7.5+(t.assim||0)*j*4.5,W=d-D,Y=d+D,ot=k(-1),Z=k(1),rt=T*(24+8*x);if(rt<1.6)l.fillStyle=A,l.beginPath(),l.moveTo(W,ot),l.quadraticCurveTo(d-D*.45,E-5.5,d,E-3.2),l.quadraticCurveTo(d+D*.45,E-5.5,Y,Z),l.quadraticCurveTo(d,E+1+y*4,W,ot),l.fill(),l.fillStyle=I,l.beginPath(),l.moveTo(W+2,ot+.5),l.quadraticCurveTo(d,E+1.5+y*4,Y-2,Z+.5),l.quadraticCurveTo(d,E+9+y*3.5,W+2,ot+.5),l.fill(),l.strokeStyle=F,l.lineWidth=2,l.beginPath(),l.moveTo(W,ot),l.quadraticCurveTo(d,E+1.2+y*5,Y,Z),l.stroke(),t.morde>.1&&(l.fillStyle="#FAF6F0",l.beginPath(),l.ellipse(d+3,E+2,7*t.morde,2.6*t.morde,0,0,se),l.fill()),t.lingua>.1&&(l.fillStyle="#E06D78",l.beginPath(),l.ellipse(d+7,E+4+2*t.lingua,6*t.lingua,4*t.lingua,.3,0,se),l.fill());else{let j=E-3-T*2,gt=E+rt-y*3,mt=()=>{l.beginPath(),l.moveTo(W,ot),l.quadraticCurveTo(d,j-y*2,Y,Z),l.quadraticCurveTo(d+D*.75,gt,d,gt),l.quadraticCurveTo(d-D*.75,gt,W,ot),l.closePath()};mt(),l.fillStyle=O,l.fill(),l.save(),mt(),l.clip(),t.dentes>.05&&(l.fillStyle="#FAF6F0",l.fillRect(d-D,j-6,D*2,4+6.5*t.dentes));let ee=Math.max(t.lingua||0,T*.7);ee>.1&&(l.fillStyle="#D2626A",l.beginPath(),l.ellipse(d,gt,D*.55,Math.max(3,rt*.4)*ee,0,0,se),l.fill()),l.restore(),l.strokeStyle=A,l.lineWidth=3.4,mt(),l.stroke()}if(t.lagrima>.05){let j=(e*.6%1*24|0)/24;l.fillStyle=`rgba(120,180,250,${.9*(1-j)*t.lagrima})`;let gt=d-_-12,mt=m+12+j*60;l.beginPath(),l.moveTo(gt,mt-7),l.quadraticCurveTo(gt+6,mt+3,gt,mt+4.5),l.quadraticCurveTo(gt-6,mt+3,gt,mt-7),l.fill()}l.restore(),c.needsUpdate=!0}},M_={solto:{c:[.52,.44,.36,.28,.28],s:.06},segura:{c:[.98,.95,.92,.88,.78],s:0,preso:!0},punho:{c:[1.15,1.15,1.12,1.08,.95],s:0,preso:!0},pinca:{c:[.85,.75,.6,.62,.62],s:0,preso:!0},aponta:{c:[1.15,1.15,1.1,.02,.75],s:0,preso:!0},joinha:{c:[1.15,1.15,1.12,1.08,-.45],s:0,preso:!0},aberta:{c:[.04,.03,.02,.02,0],s:.38},ponte:{c:[.3,.25,.2,.35,.1],s:.3,preso:!0},tecla:{c:[.5,.48,.45,.42,.3],s:.08,preso:!0},controle:{c:[.95,.9,.85,.7,.35],s:0,preso:!0},carinho:{c:[.2,.18,.15,.15,.15],s:.12}};function Yd(s){let t={sorr:.3,abre:0,larg:1,redondo:0,assim:0,dentes:0,lingua:0,morde:0,olho:1,feliz:0,fecha:0,sobeS:0,dentroS:0,sobeAssim:0,boch:s.boch||0,lagrima:s.lagrima||0,ox:s.olhar?s.olhar[0]:0,oy:s.olhar?s.olhar[1]:0},e=Wt(s.abre??.6);switch(s.boca){case"sorriso":Object.assign(t,{sorr:.85,abre:.3,dentes:.9});break;case"leve":t.sorr=.3;break;case"reta":t.sorr=0;break;case"triste":t.sorr=-.6;break;case"foco":Object.assign(t,{sorr:-.05,larg:.85,assim:.3});break;case"o":Object.assign(t,{sorr:0,abre:.18+.3*e,redondo:1});break;case"aberta":Object.assign(t,{sorr:.55,abre:.3+.6*e,dentes:.7});break}return s.olhos==="F"&&(t.feliz=1),s.olhos==="Z"&&(t.fecha=1),(s.sob==="triste"||!s.sob&&s.boca==="triste")&&(t.dentroS=.85,t.sobeS=-.1,t.olho=.82),s.sob==="tenso"&&(t.dentroS=-.6,t.sobeS=-.15),(s.boca==="o"||s.boca==="aberta")&&(t.sobeS+=.45*e),(s.boca==="sorriso"||s.olhos==="F")&&(t.sobeS+=.15),t}var _u=s=>{let t={...Vn,...s};for(let e of mc)t[e]=(s[e]||Vn[e]).slice();return t};function Xt(s,t={}){let e=_u(t),n=Math.sin(s*1.8);return e.lean+=.012*n,e.side+=.018*Math.sin(s*.37),t.aL||(e.aL=[.05+.03*n,.09,.3]),t.aR||(e.aR=[.05+.03*n,.09,.3]),t.lL||(e.lL=[.02,.04]),t.lR||(e.lR=[.02,.04]),e}var Hd=[1.25,1.4];function Ii(s,t,e={}){let n=Math.sin(s*1.8),i=_u({alt:t,sent:1,lL:Hd,lR:Hd,aL:[.62+.02*n,-.08,.98],aR:[.6+.02*n,-.08,1],...e});return i.lean+=.04+.01*n,i}function fc(s,t,e={}){let n=Xt(s,e);return n.alt=ut(.89,.5,t),n.lL=[ut(.02,1.35,t),ut(.04,2.1,t)],n.lR=[ut(.02,1.05,t),ut(.04,1.9,t)],n.lean+=.35*t,n.nod+=.15*t,n}function S_(s,t,e,n=1){let i=t==="corre",r=t==="triste",o=i?2.1:r?.95:1.32,a=.88*n,l=Math.asin(Wt(o/(4*a),0,.85))*(i?1.05:1),c=s/o*se,h=Math.sin(c),f=Math.cos(c),u=i?1.35:r?.65:.95,d=(g,p)=>.08+u*Math.pow(Math.max(0,g),1.6)+.12*Math.max(0,p)*(i?.5:1),m=(g,p)=>.38*Math.max(0,-g)*Math.max(0,p)*1.6-.22*Math.max(0,g)*Math.max(0,-p),_=_u({lL:[l*h,d(f,h)],lR:[-l*h,d(-f,-h)],pL:m(h,f),pR:m(-h,-f),aL:[-l*.95*h,.1,(i?1.35:.3)+.22*Math.max(0,-Math.sin(c-.5))],aR:[l*.95*h,.1,(i?1.35:.3)+.22*Math.max(0,Math.sin(c-.5))],lean:i?.2:r?.16:.07,twist:.1*h,side:.03*f,roll:-.025*f,boca:r?"triste":i?"aberta":"leve"});return _.turn=-.09*h,_.nod=r?.45:-.03+.025*Math.abs(f),_.alt=.07+.82*Math.cos(l*Math.abs(h))+(i?.05*Math.abs(f):.014*Math.abs(f)),_.andando=1,_}function ws(s,t,e){if(e>=1)return t;if(e<=0)return s;let n={...t};for(let i of uu)n[i]=ut(s[i]??Vn[i],t[i]??Vn[i],e);for(let i of mc)n[i]=(s[i]||Vn[i]).map((r,o)=>ut(r,(t[i]||Vn[i])[o],e));for(let i of["ikL","ikR"])n[i]=s[i]&&t[i]?s[i].map((r,o)=>ut(r,t[i][o],e)):t[i]||s[i];if(e<.5)for(let i of v_)n[i]=s[i];return n}var Gd={yawAdd:30,nod:8,turn:7.5,roll:8,lean:10,side:10,twist:10,alt:18,dy:20,hz:14,pL:26,pR:26,olhar:30,lL:24,lR:24,aL:13,aR:13},xc=class{constructor(){this.x=null,this.v={}}mola(t,e,n,i){let r=this.x[t],o=this.v[t]||0,a=r-e,l=Math.exp(-i*n),c=(o+i*a)*n;return this.x[t]=e+(a+c)*l,this.v[t]=(o-i*c)*l,this.x[t]}passo(t,e,n=15){if(!this.x||e<=0||e>.5){this.x={},this.v={};for(let r of uu)this.x[r]=t[r]??Vn[r];for(let r of mc)(t[r]||Vn[r]).forEach((o,a)=>{this.x[r+a]=o});for(let r of["ikL","ikR"])t[r]&&t[r].forEach((o,a)=>{this.x[r+a]=o});return t}let i={...t};for(let r of uu)i[r]=this.mola(r,t[r]??Vn[r],e,Gd[r]||n);for(let r of mc)i[r]=(t[r]||Vn[r]).map((o,a)=>this.mola(r+a,o,e,Gd[r]||n*1.1));for(let r of["ikL","ikR"]){if(!t[r]){this.x[r+"0"]!=null&&(i[r]=[0,1,2].map(o=>this.x[r+o]));continue}if(this.x[r+"0"]==null){t[r].forEach((o,a)=>{this.x[r+a]=o,this.v[r+a]=0}),i[r]=t[r];continue}i[r]=t[r].map((o,a)=>this.mola(r+a,o,e,n*1.3))}return i}},ru={neutro:{},contente:{sorr:.45,feliz:.3,boch:.3},concentrado:{sorr:-.05,larg:.82,assim:.35,dentroS:-.3,olho:.9,lingua:.55},surpreso:{abre:.42,redondo:.7,sorr:.1,sobeS:.85,olho:1.2},rindo:{sorr:.9,abre:.5,dentes:1,feliz:.9,boch:.6,sobeS:.2},bocejo:{abre:1,redondo:.55,sorr:0,fecha:.85,sobeS:.35},pensativo:{sorr:.05,assim:.55,sobeAssim:.6,olho:.9,larg:.85},orgulhoso:{sorr:.6,assim:.55,feliz:.45,sobeAssim:.35,boch:.35},assovia:{redondo:1,abre:.14,larg:.42,sobeS:.25,sorr:.1},gargalhada:{sorr:1,abre:.85,dentes:1,feliz:1,boch:.9,sobeS:.45},grito:{abre:.95,redondo:.35,sorr:.65,olho:1.12,sobeS:.75,dentes:.8,boch:.8},tenso:{sorr:-.25,larg:.8,dentroS:-.75,olho:1.05},mordeLabio:{sorr:-.15,larg:.75,assim:-.5,dentroS:-.35,morde:1},aflito:{sorr:-.45,dentroS:.75,sobeS:.25,olho:1.1},resmunga:{sorr:-.2,dentroS:-.45,larg:.85},suspira:{sorr:-.1,abre:.15,redondo:.4,fecha:.5,dentroS:.3},esperanca:{sorr:.25,dentroS:.45,sobeS:.2},choroso:{sorr:-.75,dentroS:1,olho:.72,lagrima:1,abre:.08},vazio:{sorr:-.15,olho:.68,dentroS:.35},sorrisoFraco:{sorr:.2,dentroS:.55,olho:.85},cumprimenta:{sorr:.75,feliz:.6,sobeS:.6,boch:.5}},Vd={tranquilo:[["contente",4,3,6],["concentrado",3,3,7],["surpreso",1,.9,1.6],["rindo",1.2,1.4,2.6],["bocejo",.6,2.4,3.2],["pensativo",1,2.5,4.5],["assovia",.8,2.5,4],["neutro",2,2,4]],feliz:[["contente",3,3,6],["rindo",2,1.5,3],["orgulhoso",2,2.5,4.5],["concentrado",1.5,2,4],["assovia",1.2,2.5,4],["neutro",1,2,3]],euforico:[["gargalhada",3,1.5,3],["grito",2,.9,1.8],["rindo",2,1.5,3],["contente",1.5,2,4]],preocupado:[["tenso",3,3,6],["mordeLabio",2,1.5,3],["aflito",2,2,4],["resmunga",2,1.8,3.5],["suspira",1.5,1.8,2.6],["esperanca",1,2,3.5],["pensativo",1,2,4]],triste:[["choroso",2,3,6],["vazio",3,3,6],["suspira",2,1.8,2.6],["sorrisoFraco",.6,1.5,3],["aflito",1,2,4]]},b_=[{nome:"nariz",req:["R"],dur:1.7,humores:"*",peso:1},{nome:"nuca",req:["R"],dur:2.2,humores:["preocupado","triste","tranquilo"],peso:1},{nome:"coca",req:["R"],dur:1.9,humores:["preocupado","tranquilo"],peso:1},{nome:"pescoco",req:[],dur:2.6,humores:"*",peso:1},{nome:"suspiro",req:[],dur:2.4,humores:["preocupado","triste","tranquilo"],peso:1.2},{nome:"tamborila",req:["Rapoio"],dur:2.6,humores:["preocupado","tranquilo","feliz"],peso:1.4},{nome:"cintura",req:["R","L","pe"],dur:3.2,humores:["feliz","preocupado","tranquilo"],peso:1},{nome:"alonga",req:["R","L","pe"],dur:3,humores:["tranquilo","triste"],peso:.6},{nome:"ombros",req:[],dur:1.6,humores:"*",peso:.8}],ou=(s,t)=>{let e=s.reduce((i,r)=>i+t(r),0),n=Math.random()*e;for(let i of s)if(n-=t(i),n<=0)return i;return s[s.length-1]},Es={sorr:.3,abre:0,larg:1,redondo:0,assim:0,dentes:0,lingua:0,morde:0,olho:1,feliz:0,fecha:0,sobeS:0,dentroS:0,sobeAssim:0,boch:0,lagrima:0},_c=class{constructor(){this.emo={nome:"neutro",t0:0,fim:2},this.emoAnt={nome:"neutro"},this.glance=null,this.proxGlance=2+Math.random()*3,this.mania=null,this.proxMania=5+Math.random()*4,this.F={...Es},this.Fv={},this.wGaze=0,this.yawG=0,this.pitchG=0}expressao(t,e){let n=this.emo;if(t>n.fim||this.humor!==e){this.humor=e;let i=Vd[e]||Vd.tranquilo,[r,,o,a]=ou(i.filter(l=>l[0]!==n.nome||i.length<2),l=>l[1]);this.emoAnt={nome:n.nome,ate:t+.5},this.emo={nome:r,t0:t,fim:t+o+Math.random()*(a-o)}}return this.emo}passo(t,e){let n=e.T,i=e.dt;t={...t,aL:t.aL.slice(),aR:t.aR.slice(),lL:t.lL.slice(),lR:t.lR.slice(),olhar:t.olhar.slice()};let r=!t.andando&&Math.abs(t.dy||0)<.03,o=(t.sent||0)<.3,a=r&&(t.kR||0)<.05&&!t.item&&!e.ocupado&&t.aR[0]<1.3&&!t.gestoR,l=r&&(t.kL||0)<.05&&!e.ocupadoL&&!e.ocupado&&t.aL[0]<1.3&&t.mL<.5&&!t.gestoL,c=r&&!e.ocupado&&(t.kR||0)<.05&&!t.item&&(t.sent||0)>.5,h=this.expressao(n,e.humor),f=Vt(n-h.t0,0,h.fim-h.t0,.45);if(!this.mania&&n>this.proxMania&&!e.reduz){let T=b_.filter(v=>(v.humores==="*"||v.humores.includes(e.humor))&&v.req.every(b=>b==="R"?a:b==="L"?l:b==="pe"?o&&r:b==="Rapoio"?c:!0)&&r);if(T.length){let v=ou(T,b=>b.peso);this.mania={...v,t0:n}}this.proxMania=n+(e.humor==="preocupado"?4:6)+Math.random()*6}let u=this.mania;if(u){let T=n-u.t0,v=Vt(T,0,u.dur,.45),b=u.req.every(S=>S==="R"?a||T>.2&&!t.item&&(t.kR||0)<.05&&r:S==="L"?l||T>.2&&r:S==="pe"?o&&r:S==="Rapoio"?c:!0);if(T>u.dur||!b&&v<.05)this.mania=null;else{let S=b?v:v*.5,C=(x,E)=>x.forEach((A,I)=>{x[I]=ut(A,E[I],S)});switch(u.nome){case"nariz":{let x=e.nariz;if(x){let E=Math.sin(T*16)*.012*v;t.ikR=[x.x+E,x.y,x.z],t.kR=S*.95,t.gestoR="aponta",t.nod+=.06*S}break}case"nuca":C(t.aR,[2.55,.65,2.55+.12*Math.sin(T*9)]),t.nod+=.18*S,t.gestoR="carinho";break;case"coca":C(t.aR,[2.65,.25,2.3+.15*Math.sin(T*13)]),t.roll-=.08*S,t.gestoR="carinho";break;case"pescoco":{let x=Math.sin(re(T,.2,u.dur-.2)*se);t.roll+=.28*x*S,t.nod+=.12*S,t.fechaOlhos=S;break}case"suspiro":{let x=Math.sin(nt*re(T,.1,1.4));t.lean-=.06*x*S,t.dy+=.012*x*S,t.nod+=-.08*x*S+.1*re(T,1.4,u.dur)*S,t.suspiro=x*S;break}case"tamborila":t.tamb=1;break;case"cintura":C(t.aR,[.35,.85,1.75]),C(t.aL,[.35,.85,1.75]),t.lean-=.04*S,t.gestoR=t.gestoL="solto";break;case"alonga":{let x=ce(re(T,.2,1.2))*(1-ce(re(T,2.2,3)));C(t.aR,[ut(.2,3,x),.2,.25]),C(t.aL,[ut(.2,3,x),.2,.25]),t.lean-=.12*x*S,t.nod-=.25*x*S,t.dy+=.03*x*S,t.gestoR=t.gestoL=x>.5?"aberta":"",t.boceja=x*S;break}case"ombros":{let x=Math.sin(nt*re(T,0,u.dur));t.dy+=.018*x,t.lean-=.04*x;break}}}}if(o&&r&&!t.andando){let T=Math.sin(n*.21+1.3)*.7+Math.sin(n*.13)*.3,v=e.legsLivres?1:0;t.side+=.03*T*v,t.twist+=.025*T*v,t.lL[1]+=.14*Math.max(0,T)*v,t.lL[0]+=.05*Math.max(0,T)*v,t.lR[1]+=.14*Math.max(0,-T)*v,t.lR[0]+=.05*Math.max(0,-T)*v,t.alt-=.008*Math.abs(T)*v}a&&!(u&&u.req.includes("R"))&&(t.aR[2]+=.04*Math.sin(n*.71+1),t.aR[0]+=.025*Math.sin(n*.53)),l&&!(u&&u.req.includes("L"))&&(t.aL[2]+=.04*Math.sin(n*.67),t.aL[0]+=.025*Math.sin(n*.49+2));let d=h.nome,m=f*(e.facePropria?.3:1);if(d==="rindo"||d==="gargalhada"){let T=d==="gargalhada"?1:.55;t.dy+=.01*Math.abs(Math.sin(n*11))*m*T,t.lean-=.07*m*T,t.nod-=.08*m*T+.04*Math.sin(n*11)*m*T}if(d==="bocejo"&&!t.boceja&&(t.nod-=.25*m,t.lean-=.05*m),d==="resmunga"&&(t.turn+=.06*Math.sin(n*3.3)*m,t.roll+=.04*Math.sin(n*2.1)*m),d==="surpreso"&&(t.nod-=.12*m,t.lean-=.04*m),(d==="aflito"||d==="choroso"||d==="vazio")&&(t.nod+=.1*m),d==="orgulhoso"&&(t.nod-=.08*m,t.lean-=.03*m),!this.glance&&n>this.proxGlance&&e.alvos&&e.alvos.length&&!e.reduz){let T=ou(e.alvos,v=>v.peso);this.glance={...T,t0:n,dur:.9+Math.random()*1.8},T.nome==="camera"&&e.humor!=="triste"&&Math.random()<.35&&(this.glance.acena=!0,this.glance.dur=2.4),this.proxGlance=n+3+Math.random()*5.5}if(this.glance&&n-this.glance.t0>this.glance.dur&&(this.glance=null),this.glance&&this.glance.acena&&a&&!this.mania){let T=Vt(n-this.glance.t0,.2,this.glance.dur,.4);t.aR=t.aR.map((v,b)=>ut(v,[2.55,.5,.9+.35*Math.sin(n*9)][b],T)),T>.3&&(t.gestoR="aberta")}let _=null,g=0,p=(t.kR||0)>.25&&t.ikR&&!t.item?["R",t.kR]:(t.kL||0)>.25&&t.ikL&&!t.gestoL?["L",t.kL]:null;if(t.olharW)_=Mt(...t.olharW),g=1;else if(p&&!e.semOlharMao){let T=p[0]==="R"?t.ikR:t.ikL;_=Mt(...T),g=.85*Wt(p[1])}else this.glance?(_=this.glance.pos,g=Vt(n-this.glance.t0,0,this.glance.dur,.25)*(t.andando?.6:.9)):e.foco&&(_=e.foco,g=t.andando?.3:.75);if(this.olhandoCamera=this.glance&&this.glance.nome==="camera"?Vt(n-this.glance.t0,0,this.glance.dur,.25):0,this.wGaze=ut(this.wGaze,_?g:0,Math.min(1,i*6)),_&&e.cabeca){let T=_.clone().sub(e.cabeca),v=Gn(e.yawCorpo+(t.twist||0),Math.atan2(T.x,T.z)),b=Math.atan2(T.y,Math.hypot(T.x,T.z));this.yawG=Wt(v,-1.6,1.6),this.pitchG=Wt(b,-1,.8)}let y=this.wGaze;if(y>.01){let T=Wt(this.yawG*.78,-1.05,1.05),v=Wt(-this.pitchG*.65,-.5,.65);t.turn=ut(t.turn,T,y),t.nod=ut(t.nod,v+(t.nod-(t.nod||0)),y*.85),t.olhar[0]=ut(t.olhar[0],Wt((this.yawG-T)*2.4,-1.4,1.4),y),t.olhar[1]=ut(t.olhar[1],Wt(-(this.pitchG+v/.65*.65)*2.2,-1.4,1.4),y)}return t}rosto(t,e){let n=e.T,i=e.dt,r=Yd(t),o=this.emo,a=Vt(n-o.t0,0,o.fim-o.t0,.45)*(e.facePropria?.25:1),l=ru[o.nome]||{},c={...r};for(let h in l)c[h]=ut(r[h]??Es[h],l[h]*(h==="sorr"||h==="dentroS"||h==="sobeS"?1.15:1),a);if(o.nome==="resmunga"&&(c.abre=Math.max(c.abre,a*(.08+.14*Math.max(0,Math.sin(n*9)*Math.sin(n*3.7))))),(o.nome==="rindo"||o.nome==="gargalhada")&&(c.abre=Math.max(0,c.abre-a*.2*Math.abs(Math.sin(n*11)))),t.suspiro&&(c.abre=Math.max(c.abre,.15*t.suspiro),c.redondo=Math.max(c.redondo,.5*t.suspiro),c.fecha=Math.max(c.fecha,.5*t.suspiro)),t.boceja&&(c.abre=Math.max(c.abre,t.boceja),c.redondo=Math.max(c.redondo,.5*t.boceja),c.fecha=Math.max(c.fecha,.85*t.boceja)),t.fechaOlhos&&(c.fecha=Math.max(c.fecha,.9*t.fechaOlhos)),this.olhandoCamera>.01&&!e.facePropria&&e.humor!=="triste"){let h=this.olhandoCamera;for(let f in ru.cumprimenta)c[f]=ut(c[f],ru.cumprimenta[f],h*.8)}c.sobeS+=.06*Math.sin(n*.83)+.04*Math.sin(n*2.3+1),c.sorr+=.04*Math.sin(n*.61+2);for(let h in Es){let f=h==="abre"||h==="fecha"?22:h==="sobeS"||h==="dentroS"?14:9,u=this.F[h]??Es[h],d=this.Fv[h]||0,m=u-(c[h]??Es[h]),_=Math.exp(-f*i),g=(d+f*m)*i;this.F[h]=(c[h]??Es[h])+(m+g)*_,this.Fv[h]=(d-f*g)*_,i>0||(this.F[h]=c[h]??Es[h])}return this.F.ox=t.olhar[0],this.F.oy=t.olhar[1],this.F.piscar=Math.abs(this.yawG-(this.yawGAnt??this.yawG))>.5,this.yawGAnt=this.yawG,this.F}},du=class{constructor(){let t=it("#C08552",{r:.9}),e=it("#8B5A35",{r:.9}),n=it("#2B1B14",{r:.4}),i=this.g=new St;this.corpo=new St,i.add(this.corpo),Fn(this.corpo,t,.12,.26,0,0,0,{rx:nt/2}),ue(this.corpo,it("#E3B98E",{r:.9}),.1,0,-.03,.08,{s:[.8,.7,1.3]}),this.cab=new St,this.cab.position.set(0,.12,.2),this.corpo.add(this.cab),ue(this.cab,t,.115,0,.04,0),ue(this.cab,it("#D9A577"),.062,0,0,.1,{s:[1,.8,1.2]}),ue(this.cab,n,.026,0,.02,.17);for(let r of[-1,1])ue(this.cab,it("#FFFFFF",{r:.3}),.02,r*.045,.08,.098),ue(this.cab,n,.013,r*.047,.082,.112);this.lingua=ue(this.cab,it("#F87171"),.025,0,-.04,.13,{s:[1,.5,1.4]}),this.orelhas=[];for(let r of[-1,1]){let o=new St;o.position.set(r*.09,.1,-.01),this.cab.add(o),Ct(new rn(.055,12,10),e,o,r*.012,-.04,0,{s:[.45,1.2,.9],rz:r*.4}),this.orelhas.push(o)}this.coleira=fe(this.corpo,it("#DC2626",{r:.4}),.085,.085,.03,0,.09,.17,{rx:1.1,seg:20}),this.patas=[];for(let[r,o]of[[-.07,.15],[.07,.15],[-.07,-.15],[.07,-.15]]){let a=new St;a.position.set(r,-.04,o),this.corpo.add(a),Fn(a,t,.04,.12,0,-.1,0),this.patas.push(a)}this.rabo=new St,this.rabo.position.set(0,.06,-.2),this.corpo.add(this.rabo),Fn(this.rabo,t,.025,.14,0,.08,-.02,{rx:-.6}),Ln(i,!0,!1),this.zzz=new St,i.add(this.zzz);for(let r=0;r<2;r++){let o=Oe(64,64);o.g.font="bold 52px system-ui",o.g.fillStyle="#6366F1",o.g.textAlign="center",o.g.fillText("z",32,48);let a=new Gi(new Ei({map:o.t,transparent:!0,depthWrite:!1}));a.scale.setScalar(.16-r*.04),this.zzz.add(a)}this.pos=null,this.yaw=0,this.rota=null,this.dist=0,this.alvo=null}mover(t,e,n){if(this.pos||(this.pos=[t[0],t[1]],this.yaw=t[2]),(!this.alvo||Math.hypot(t[0]-this.alvo[0],t[1]-this.alvo[1])>.2)&&(this.alvo=t.slice(),this.rota=Math.hypot(t[0]-this.pos[0],t[1]-this.pos[1])>.15?n.caminho(this.pos,t,.12):null),this.rota&&this.rota.length){let a=this.rota[0],l=a[0]-this.pos[0],c=a[1]-this.pos[1],h=Math.hypot(l,c),f=1.5*e;return h<=f?(this.pos=[a[0],a[1]],this.rota.shift()):(this.pos[0]+=l/h*f,this.pos[1]+=c/h*f),this.yaw=qo(this.yaw,Math.atan2(l,c),Math.min(1,e*10)),this.dist+=Math.min(f,h),!1}this.rota=null;let i=t[0]-this.pos[0],r=t[1]-this.pos[1],o=Math.hypot(i,r);if(o>.03&&o<1.2){let a=Math.min(o,1.2*e);return this.pos[0]+=i/o*a,this.pos[1]+=r/o*a,this.yaw=qo(this.yaw,Math.atan2(i,r),Math.min(1,e*10)),this.dist+=a,!1}return this.yaw=qo(this.yaw,t[2],Math.min(1,e*5)),!0}quadro(t,e){let n=this.corpo;this.zzz.visible=t==="dorme";let i=t==="pula"||t==="carinho"||t==="anda",r=Math.sin(e*(t==="dorme"?2:16))*(t==="dorme"?.2:i?.8:.5);if(this.rabo.rotation.set(0,r,0),this.lingua.visible=t!=="dorme",this.orelhas.forEach((o,a)=>{o.rotation.x=t==="anda"?Math.sin(e*14+a)*.25:0}),t==="dorme")n.position.set(0,.1+.008*Math.sin(e*2),0),n.rotation.set(0,0,.12),this.patas.forEach((o,a)=>o.rotation.set(a<2?-1.35:1.35,0,0)),this.cab.rotation.set(.5,.25,0),this.cab.position.set(0,.04,.22),this.zzz.children.forEach((o,a)=>{let l=(e*.45+a*.5)%1;o.position.set(.12+l*.1,.32+l*.35,.2),o.material.opacity=1-l});else if(t==="anda"){let o=this.dist/.28*se;n.position.set(0,.2+.02*Math.abs(Math.sin(o)),0),n.rotation.set(.04*Math.sin(o*2),0,0),this.patas.forEach((a,l)=>a.rotation.set(Math.sin(o+(l===0||l===3?0:nt))*.6,0,0)),this.cab.position.set(0,.12,.2),this.cab.rotation.set(-.1,0,0)}else if(t==="senta"||t==="carinho")n.position.set(0,.2,0),n.rotation.set(-.55,0,0),this.patas.forEach((o,a)=>o.rotation.set(a<2?.55:-.9,0,0)),this.cab.position.set(0,.12,.2),t==="carinho"?this.cab.rotation.set(.1+.12*Math.sin(e*5),.25*Math.sin(e*2.6),.2*Math.sin(e*3.1)):this.cab.rotation.set(.45+.08*Math.sin(e*1.3),.3*Math.sin(e*.7),.15*Math.sin(e*1.1));else{let o=Math.abs(Math.sin(e*5.2));n.position.set(0,.2+.22*o,0),n.rotation.set(-.25*o,0,0),this.patas.forEach((a,l)=>a.rotation.set((l<2?-.6:.6)*o,0,0)),this.cab.position.set(0,.12,.2),this.cab.rotation.set(-.15,0,0)}}},pu=class{constructor(t=.1){this.c=t,this.nx=Math.ceil(Ve/t),this.nz=Math.ceil(We/t),this.b=new Uint8Array(this.nx*this.nz)}limpar(t=.24){this.b.fill(0);for(let e=0;e<this.nx;e++)for(let n=0;n<this.nz;n++){let i=(e+.5)*this.c,r=(n+.5)*this.c;(i<t||i>Ve-t||r<t||r>We-.12)&&(this.b[e+n*this.nx]=1)}}ret(t,e,n,i,r=.24){let o=this.c,a=Math.max(0,Math.floor((t-r)/o)),l=Math.min(this.nx-1,Math.floor((n+r)/o)),c=Math.max(0,Math.floor((e-r)/o)),h=Math.min(this.nz-1,Math.floor((i+r)/o));for(let f=a;f<=l;f++)for(let u=c;u<=h;u++){let d=(f+.5)*o,m=(u+.5)*o,_=Math.max(t-d,0,d-n),g=Math.max(e-m,0,m-i);_*_+g*g<=r*r&&(this.b[f+u*this.nx]=1)}}cel(t,e){return[Wt(Math.floor(t/this.c),0,this.nx-1),Wt(Math.floor(e/this.c),0,this.nz-1)]}livre(t,e){let[n,i]=this.cel(t,e);return!this.b[n+i*this.nx]}perto(t,e){if(this.livre(t,e))return[t,e];let[n,i]=this.cel(t,e);for(let r=1;r<Math.max(this.nx,this.nz);r++){let o=null,a=1e9;for(let l=n-r;l<=n+r;l++)for(let c=i-r;c<=i+r;c++){if(Math.max(Math.abs(l-n),Math.abs(c-i))!==r||l<0||c<0||l>=this.nx||c>=this.nz||this.b[l+c*this.nx])continue;let h=(l+.5)*this.c,f=(c+.5)*this.c,u=(h-t)**2+(f-e)**2;u<a&&(a=u,o=[h,f])}if(o)return o}return[t,e]}visivel(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),i=Math.ceil(n/(this.c*.4));for(let r=1;r<i;r++){let o=r/i;if(!this.livre(ut(t[0],e[0],o),ut(t[1],e[1],o)))return!1}return!0}caminho(t,e){let n=this.perto(t[0],t[1]),i=this.perto(e[0],e[1]),r=[e[0],e[1]];if(this.visivel(n,i))return(Math.hypot(n[0]-t[0],n[1]-t[1])>.02?[n]:[]).concat([i[0]!==e[0]||i[1]!==e[1]?i:r]);let o=this.nx,a=o*this.nz,[l,c]=this.cel(...n),[h,f]=this.cel(...i),u=new Float32Array(a).fill(1e9),d=new Int32Array(a).fill(-1),m=new Uint8Array(a),_=[],g=(x,E)=>{_.push([E,x]);let A=_.length-1;for(;A>0;){let I=A-1>>1;if(_[I][0]<=_[A][0])break;[_[I],_[A]]=[_[A],_[I]],A=I}},p=()=>{let x=_[0],E=_.pop();if(_.length){_[0]=E;let A=0;for(;;){let I=2*A+1,F=I+1,O=A;if(I<_.length&&_[I][0]<_[O][0]&&(O=I),F<_.length&&_[F][0]<_[O][0]&&(O=F),O===A)break;[_[O],_[A]]=[_[A],_[O]],A=O}}return x},y=(x,E)=>Math.hypot(x-h,E-f),T=l+c*o;u[T]=0,g(T,y(l,c));let v=!1;for(;_.length;){let[,x]=p();if(m[x])continue;m[x]=1;let E=x%o,A=x/o|0;if(E===h&&A===f){v=!0;break}for(let I=-1;I<=1;I++)for(let F=-1;F<=1;F++){if(!I&&!F)continue;let O=E+I,D=A+F;if(O<0||D<0||O>=o||D>=this.nz)continue;let k=O+D*o;if(this.b[k]||m[k]||I&&F&&(this.b[E+I+A*o]||this.b[E+(A+F)*o]))continue;let W=u[x]+(I&&F?1.4142:1);W<u[k]&&(u[k]=W,d[k]=x,g(k,W+y(O,D)))}}if(!v)return[i];let b=[];for(let x=h+f*o;x!==-1;x=d[x])b.push([(x%o+.5)*this.c,((x/o|0)+.5)*this.c]);b.reverse(),b[0]=n,b[b.length-1]=i;let S=[n],C=0;for(;C<b.length-1;){let x=b.length-1;for(;x>C+1&&!this.visivel(b[C],b[x]);)x--;S.push(b[x]),C=x}return S.shift(),Math.hypot(n[0]-t[0],n[1]-t[1])>.02&&S.unshift(n),i[0]===e[0]&&i[1]===e[1]&&(S[S.length-1]=r),S}},Hn=(s,t,e={})=>({tipo:"andar",vel:s,destinos:t,...e}),Ft=(s,t,e={})=>({tipo:"acao",dur:s,pose:t,...e}),au=(s,t)=>(e,n,i)=>{let r=ce(e),o=ws(s(i),t(i),r);return o.lean+=.35*Math.sin(nt*e),o},lu=(s,t)=>(e,n,i)=>{let r=1-ce(e),o=ws(s(i),t(i),r);return o.lean+=.4*Math.sin(nt*e),o},Li=4.05;function E_(s,t){let e=ce(re(s,0,1))*(1-ce(re(s,5,5.6))),n=0;s>1.1&&s<3.5?n=.5-.5*Math.cos((s-1.1)*se*.75):s>=3.5&&s<3.85?n=ce(re(s,3.5,3.85)):s>=3.85&&s<Li&&(n=1-pc(re(s,3.85,Li)));let i=Xt(t,{lean:.78*e,hz:-.1*e,nod:-.45*e,alt:.89-.08*e,lL:[.3*e,.22*e],lR:[-.1*e,.08*e],olhar:[0,-1.2*e],boca:"foco",taco:e,recuo:n*e,twist:-.12*e});return i.bolas=s<Li?"ini":"jogo",i}function Zo(s,t){let e=Xt(t,{olhos:"F",boca:"aberta",boch:.8});if(e.abre=.6+.4*Math.abs(Math.sin(t*6)),s<.3){let n=pc(re(s,0,.3));e.alt=.89-.12*n,e.lL=[.5*n,1*n],e.lR=[.5*n,1*n],e.aL=[.3*n,.4,.6],e.aR=[.3*n,.4,.6]}else if(s<.85){let n=re(s,.3,.85);e.dy=.55*4*n*(1-n);let i=Ts(re(s,.3,.45));e.aL=[ut(.3,2.9,i),.45,.2],e.aR=[ut(.3,2.9,i),.45,.2],e.lL=[.35*Math.sin(nt*n),.8*Math.sin(nt*n)],e.lR=[.35*Math.sin(nt*n),.8*Math.sin(nt*n)]}else if(s<1.05){let n=Math.sin(nt*re(s,.85,1.05));e.alt=.89-.1*n,e.lL=[.4*n,.8*n],e.lR=[.4*n,.8*n],e.aL=[2.9,.45,.2],e.aR=[2.9,.45,.2]}else{let n=(s-1.05)/.62,i=Math.floor(n)%2?1:-1,r=n%1,o=Math.sin(nt*r);e.dy=.08*o,e.side=i*.16*o,e.twist=i*.25*o,e.turn=-i*.3*o,e.roll=i*.15*o,e.aL=i>0?[2.8,.5,.3]:[1.2,-.1,1.6],e.aR=i>0?[1.2,-.1,1.6]:[2.8,.5,.3],e.lL=[i<0?.5*o:0,i<0?.9*o:.1],e.lR=[i>0?.5*o:0,i>0?.9*o:.1]}return e}var Er=(s,t,e={})=>{let n=Vt(s,0,t,.3),i=Math.abs(Math.sin(s*nt/.42))*n;return{gestoR:n>.3?"punho":"",aR:[ut(0,2.55+.3*i,n),.25,ut(.2,.9-.5*i,n)],dy:.03*i,olhos:n>.5?"F":"A",boca:n>.3?"aberta":"sorriso",boch:.7,...e}},Jo=s=>Ii(s,.62,{lean:-.1});function yc(s,t,e={}){let n=Math.sin(t*.9)*.08+Math.sin(t*2.3)*.03,i=r=>Math.max(0,Math.sin(s*10+r))*.12;return Ii(s,.62,{lean:-.1+n*.3,side:n,nod:.15,turn:n*.6,aL:[.85+i(0),-.22,1.25],aR:[.85+i(2),-.22,1.25],...e})}var cu=(s,t)=>Ft(s,(e,n,i)=>{let r=0;for(let a of t)r=Math.max(r,Vt(n,a,a+1.3));let o=yc(i,n,r>.3?{boca:"aberta",olhos:r>.5?"F":"A",boch:.15+.5*r,gestoR:"punho",gestoL:"aberta"}:{});return o.aR=o.aR.map((a,l)=>ut(a,[2.7,.5,.4][l],r)),o.aL=o.aL.map((a,l)=>ut(a,[2.5,.55,.5][l],r)),o.lean-=.08*r,o.nod-=.25*r,o.dy=.04*r*Math.abs(Math.sin(n*9)),o},{tv:"jogo",props:{controle:"LR"},foco:()=>Mt(3.2,1.45,.12)}),Wd=s=>Ft(1.6,(t,e,n)=>{let i=Vt(e,0,1.15,.4),r=s.casaDe("controle").pos,o=ws(Jo(n),yc(n,0),ce(re(e,.75,1.6)));return o.ikR=[r.x,r.y+.035,r.z],o.kR=i,o.oriR="baixo",o.lean+=.12*i,o.turn+=.4*i,o.olhar=[.8*i,.8*i],o},{props:{controle:(t,e)=>e<.6?"casa":"LR"}}),Xd=s=>Ft(1.5,(t,e,n)=>{let i=Vt(e,.15,1.5,.4),r=s.casaDe("controle").pos,o=ws(yc(n,0),Jo(n),ce(re(e,0,.6)));return o.ikR=[r.x,r.y+.035,r.z],o.kR=i,o.oriR="baixo",o.lean+=.12*i,o.turn+=.4*i,o.olhar=[.8*i,.8*i],o},{props:{controle:(t,e)=>e<.8?"LR":"casa"}}),T_=()=>Ft(1.5,(s,t,e)=>Xt(e,{taco:ut(-1,0,ce(re(t,.2,1.2))),lean:.12*Vt(t,0,1.5,.4),boca:"leve"}),{bolas:"ini"}),w_=()=>Ft(1.6,(s,t,e)=>Xt(e,{taco:ut(0,-1,ce(re(t,.3,1.3))),lean:.15*Vt(t,0,1.6,.4)}),{bolas:"ini"}),qd={tranquilo:(s,t,e=0)=>{let n=Ft(1.3,lu(a=>Xt(a),Jo),{ate:s.sofaP}),i=Ft(1.3,au(a=>Xt(a),Jo),{ate:s.sofaS}),o=e%2===0?[cu(13+e%3*2,[5.2,10.6]),Xd(t),n,Ft(2.8,(a,l,c)=>{let h=Vt(l,.1,2.7,.6);return Xt(c,{aL:[2.95*h,.25,.3],aR:[2.95*h,.25,.3],lean:-.12*h,side:Math.sin(l*2.2)*.12*h,nod:-.2*h,olhos:h>.5?"Z":"A",boca:h>.5?"o":"leve",dy:.03*h})}),Hn(1.15,[s.cafeP]),Ft(5.6,(a,l,c)=>{let h=t.casaDe("xicara").pos,f=t.bico(),u=Vt(l,0,5.3,.45),d=ce(re(l,.9,1.7)),m=ce(re(l,4.3,5.3)),_=h.clone().add(Mt(0,.06,0)).lerp(f,d),g=t.botaoCafe(),p=Vt(l,1.9,2.9,.25);return Xt(c,{ikR:[_.x,_.y,_.z],kR:u*(1-m),aR:[.6,-.25,1.75],ikL:[g.x,g.y-.02*Math.max(0,Math.sin((l-2.1)*9)),g.z],kL:p,lean:.14*u,nod:.28,olhar:[0,1]})},{ate:s.cafeP,props:{xicara:(a,l)=>l<.75?"casa":"R"},fx:"cafe",foco:a=>a.bico()}),Ft(4.4,(a,l,c)=>{let h=Vt(l,.6,1.8,.35)+Vt(l,2.6,3.7,.35);return Xt(c,{aR:[.6+.75*h,-.25,1.75+.4*h],gole:h,nod:-.25*h,olhos:h>.5?"Z":"A",boca:h>.5?"reta":"sorriso",boch:.35})},{props:{xicara:"R"}}),Ft(1.6,(a,l,c)=>{let h=t.casaDe("xicara").pos,f=Vt(l,0,1.6,.45);return Xt(c,{ikR:[h.x,h.y+.06,h.z],kR:f,aR:[.6,-.25,1.75],lean:.14*f,nod:.25})},{props:{xicara:(a,l)=>l<.85?"R":"casa"}}),Hn(1.1,[s.sofaP]),i,Wd(t)]:[cu(9+e%3*2,[3.4]),Ft(6.5,(a,l,c)=>{let h=Vt(l,0,6.5,.9),f=yc(c,l*.3,{boca:"sorriso",boch:.3});return f.lean-=.22*h,f.nod-=.15*h,f.lL=f.lL.map((u,d)=>ut(u,[.95,.5][d],h)),f.lR=f.lR.map((u,d)=>ut(u,[.9,.45][d],h)),f.aL=f.aL.map((u,d)=>ut(u,[.5,-.05,.6][d],h)),f.aR=f.aR.map((u,d)=>ut(u,[.65,-.1,.9][d],h)),f.olhos=l>2&&l<4.4?"Z":"A",f},{props:{controle:"LR"},foco:()=>Mt(3.2,1.45,.12)}),cu(8,[4.4])];return{inicio:s.sofaS,aprox:s.sofaP,sentado:!0,sentPose:Jo,padrao:{boca:"leve",boch:.15},passos:o,entrada:[i,Wd(t)],saida:[Xd(t),n]}},feliz:(s,t,e=0)=>{let n=[Ft(2.6,(i,r,o)=>{let a=Math.sin(r*9)*.12*Vt(r,.4,2.2);return Xt(o,{taco:0,aL:[1.4+a,.1,1.9],nod:-.25,olhar:[0,-1.5],boca:"leve"})},{bolas:"ini",foco:i=>i.pto("sinuca",7.62,.81,4.52)}),Ft(5.6,(i,r,o)=>E_(r,o)),Ft(3,(i,r,o)=>{let a=Er(r,3);return Xt(o,{...a,taco:0,aL:a.aR,aR:void 0,bolas:"fim"})})];return e%2===0?n.push(Hn(1.25,[s.monP],{taco:0,bolas:"fim"}),Ft(4.6,(i,r,o)=>{let a=Vt(r,1.4,3.6,.4),l=Math.sin(r*6)*.1*Vt(r,.3,1.3);return Xt(o,{taco:0,aL:[ut(0,1.3,a),-.15,ut(.2,1.7,a)],lean:.1,nod:.05+l,boca:a>.5?"aberta":"sorriso",olhos:a>.5?"F":"A"})},{bolas:"fim",ate:s.monP,foco:i=>i.pto("mesa",6.8,1.14,.22)}),Hn(1.25,[s.sinP],{taco:0,bolas:"fim"})):n.push(Ft(3.2,(i,r,o)=>Xt(o,{taco:0,nod:.2,olhar:[.6*Math.sin(r*1.5),-1],boca:"sorriso",aL:[.3,.25,1.2*Vt(r,0,3.2,.5)],side:.05*Math.sin(r*2)}),{bolas:"fim"})),n.push(Ft(2.2,(i,r,o)=>Xt(o,{taco:0,lean:.2*Vt(r,0,2.2,.5),nod:.3,olhar:[0,-1.3],aL:[ut(.2,1.1,Vt(r,0,2.2,.5)),.1,.6]}),{bolas:"volta"})),{inicio:s.sinP,aprox:s.sinP,sentado:!1,padrao:{boca:"sorriso",boch:.35},passos:n,entrada:[T_()],saida:[w_()]}},euforico:(s,t,e=0)=>({inicio:s.danca,aprox:s.danca,sentado:!1,padrao:{olhos:"F",boch:.8},entrada:[],saida:[],passos:[Ft(3.6,(n,i,r)=>Zo(i,r),{fx:"globo"}),Ft(3.4,(n,i,r)=>Zo(i,r),{fx:"globo"}),Ft(2.2,(n,i,r)=>{let o=pc(n),a=Xt(r,{aL:[1.5,1.2,.2],aR:[1.5,1.2,.2],boca:"aberta",olhos:"F",boch:.8});return a.yawAdd=o*se,a.dy=.12*Math.sin(nt*n),a}),Ft(5.2,(n,i,r)=>{let o=Vt(i,0,.8,.25),a=t.bolso("L"),l=Math.max(0,i-.8),c=l%1.1/1.1,h=i<.8?0:c<.55?pc(c/.55):1-Ts((c-.55)/.45),f=Xt(r,{aL:[.5*ce(re(i,.4,.9)),.2,1.3*ce(re(i,.4,.9))],ikL:[a.x,a.y,a.z],kL:o,aR:[ut(.3,2.8,h),.15,ut(1.4,.2,h)],lean:-.08*h,nod:-.15*h,dy:.05*h,boca:"aberta",olhos:"F",boch:.8});return f.solta=i>.8&&c>.5&&c<.6?Math.floor(l/1.1)+1:0,f},{props:{maco:(n,i)=>i<.45||i>5?"casa":"L",nota:(n,i)=>{let r=Math.max(0,i-.8)%1.1/1.1;return i>.8&&i<4.9&&r<.5?"R":"casa"}}}),Hn(2.2,[s.monP],{estilo:"corre"}),Ft(3.4,(n,i,r)=>{let o=i%.85/.85,a=Math.sin(nt*o);return Xt(r,{dy:.35*a,aL:[2.9,.4,.2],aR:[2.9,.4,.2],lL:[.3*a,.7*a],lR:[.3*a,.7*a],boca:"aberta",olhos:"F"})},{ate:s.monP,foco:n=>n.pto("mesa",6.8,1.14,.22),semPeso:!0}),Hn(2.2,[s.danca],{estilo:"corre"}),Ft(5,(n,i,r)=>Zo(1.05+i%2.48,r),{ate:s.danca,fx:"globo"})]}),preocupado:(s,t,e=0)=>{let n=l=>Ii(l,.6,{lean:.22}),i=Ft(1.3,lu(l=>Xt(l),n),{ate:s.cadP}),r=Ft(1.3,au(l=>Xt(l),n),{ate:s.cadS}),a=[(l=>Ft(l,(c,h,f)=>{let u=Vt(h,3,5.6,.6),d=Vt(h,6.6,7.9,.3),m=ce(re(h,0,.9))*(1-ce(re(h,l-.9,l))),_=Math.max(0,Math.sin(f*14))*.025,g=Math.max(0,Math.sin(f*14+2.2))*.025,p=t.teclado(),y=Math.sin(f*3.1)*.03;return Ii(f,.6,{lean:.22+.14*u*m,nod:.08+.06*Math.sin(h*1.7)-.1*u,hz:.02,ikL:[p.L.x+y,p.L.y+_,p.L.z],kL:m,ikR:[p.R.x-y,p.R.y+g,p.R.z],kR:m*(1-d),oriL:"baixo",oriR:"baixo",aR:[ut(.6,2.3,d),ut(-.08,.6,d),ut(1,2.4+.15*Math.sin(f*16),d)],item:m>.3?"tecla":"",olhar:[.3*Math.sin(h*2),-.6]})},{mon:"foco",foco:c=>c.pto("mesa",6.8,1.14,.22)}))(9+e%2*3),Ft(3.6,(l,c,h)=>{let f=Vt(c,0,3.6,.6),u=Math.sin(h*9)*.12*f;return Ii(h,.6,{lean:.22-.3*f,nod:-.1*f,turn:u,aL:[ut(.62,2.5,f),ut(-.08,.7,f),ut(.98,2.3,f)],aR:[ut(.6,2.5,f),ut(-.08,.7,f),ut(1,2.3,f)],balao:Vt(c,.3,3.4,.3),balaoT:"smiley-nervous",boca:"o",abre:.4})})];return e%2===0?a.push(i,Hn(.85,[s.ritmo1,s.ritmo2,s.cadP],{pensativo:!0}),Ft(3.4,(l,c,h)=>{let f=Vt(c,.1,3.3,.4),u=Math.sin(nt*re(c,.8,2.2));return Xt(h,{aR:[ut(0,1.3,f),-.25,ut(.2,2.2,f)],alt:.89-.02*u,nod:.25*f,lean:.06*u,olhos:u>.6?"Z":"A",boca:"triste",sob:"triste",balao:Vt(c,.6,3),balaoT:"chart-line-down"})},{ate:[s.cadP[0],s.cadP[1],s.cadP[2]+nt*.3]}),Ft(.8,(l,c,h)=>Xt(h),{ate:s.cadP}),r):a.push(Ft(4,(l,c,h)=>{let f=Vt(c,0,4,.6);return Ii(h,.6,{lean:.22-.25*f,nod:-.2*f,turn:.5*Math.sin(c*1.2)*f,olhar:[Math.sin(c*1.2)*1.2*f,-.5],boca:"foco"})})),{inicio:s.cadS,aprox:s.cadP,sentado:!0,sentPose:n,padrao:{sob:"tenso",boca:"foco"},passos:a,entrada:[r],saida:[i]}},triste:(s,t,e=0)=>{let n=l=>Ii(l,.6,{lean:.32,nod:.35,aL:[.72,-.1,1.05],aR:[.72,-.1,1.05]}),i=l=>Xt(l,{lean:.12,nod:.3}),r=Ft(1.6,lu(i,n),{ate:s.polP}),o=Ft(1.6,au(i,n),{ate:s.polS}),a=[Ft(11.5,(l,c,h)=>{let f=Vt(c,.2,4.6,.6),u=Math.sin(nt*re(c,5.2,6.8)),d=Vt(c,7.2,11.2,.6);return Ii(h,.6,{lean:.32+.25*f-.12*d+.04*u,nod:.35+.25*f-.3*d,turn:-.5*d,aL:[ut(.72,1.55,f),ut(-.1,-.32,f),ut(1.05,2.45,f)],aR:[ut(.72,1.55,f),ut(-.1,-.32,f),ut(1.05,2.45,f)],olhos:f>.5?"Z":"A",olhar:d>.3?[-1.4,-.6]:[0,1.2],dy:-.01*u})})];return e%2===0?a.push(r,Hn(.62,[s.janP],{estilo:"triste"}),Ft(9.5,(l,c,h)=>{let f=Vt(c,.8,7.8,.6),u=Math.sin(nt*re(c,3.6,5.2)),d=Vt(c,5.6,7.4,.5);return Xt(h,{aL:[ut(0,1.75,f),-.1*f,ut(.2,.55,f)],alt:.89-.02*u,lean:.06+.1*d,nod:.1+.3*d-.1*f,side:-.05*d,olhar:[0,-.5]})},{ate:s.janP,foco:()=>Mt(-1.2,1.5,1.8)}),Hn(.62,[s.polP],{estilo:"triste"}),Ft(.6,(l,c,h)=>i(h),{ate:s.polP}),o):a.push(Ft(7,(l,c,h)=>{let f=Math.sin(nt*re(c,1.5,3.5));return Ii(h,.6,{lean:.32+.08*f,nod:.35-.2*Vt(c,3.8,6.6,.6),turn:-.6*Vt(c,3.8,6.6,.6),aL:[.72,-.1,1.05],aR:[.72,-.1,1.05],olhar:[-1.4,-.4],olhos:f>.6?"Z":"A"})})),{inicio:s.polS,aprox:s.polP,sentado:!0,sentPose:n,padrao:{sob:"triste",boca:"triste",nuvem:1,lagrima:1},passos:a,entrada:[o],saida:[r]}}},Xo={cachorro:{humores:["triste","preocupado","tranquilo","feliz","euforico"],ic:"dog",lugar:s=>s.lugar("cachorro",[1.35,5.42,0]),passos:s=>[Ft(1.4,(t,e,n)=>Xt(n,{nod:.35,olhar:[0,1.2],boca:"sorriso",boch:.3}),{fx:"caoVem"}),Ft(5.2,(t,e,n)=>{let i=Vt(e,0,5.2,.7),r=s.alvoCao(),o=Math.sin(e*5)*.06;return fc(n,i,{ikR:[r.x+o,r.y+.13,r.z],kR:i,oriR:"baixo",gestoR:"carinho",nod:.3*i,boca:"sorriso",olhos:e>2?"F":"A",boch:.5,olhar:[0,1]})},{fx:"caoCarinho"}),Ft(1.2,(t,e,n)=>Xt(n,{...Er(e,1.2)}),{fx:"caoCarinho"})]},aquario:{humores:["preocupado","tranquilo","feliz","euforico"],ic:"fish",lugar:s=>s.lugar("aquario",[.98,6.835,-nt/2]),passos:s=>[Ft(1,(t,e,n)=>Xt(n,{nod:.2,olhar:[0,.6]})),Ft(4.6,(t,e,n)=>{let i=Vt(e,0,4.6,.6),r=s.pto("aquario",.35,1.38,6.835),o=Math.sin(n*18)*.02*re(e,1,1.4)*(1-re(e,3.4,3.8));return Xt(n,{ikR:[r.x+o,r.y,r.z],kR:i,oriR:"baixo",lean:.12*i,nod:.3*i,mR:.3+.4*Math.abs(Math.sin(n*12))*i,boca:"sorriso",olhar:[0,1]})},{fx:"racao"}),Ft(1.6,(t,e,n)=>Xt(n,{boca:"sorriso",olhos:"F",boch:.5,nod:.1}))]},fliperama:{humores:["tranquilo","feliz","euforico"],ic:"joystick",lugar:s=>s.lugar("fliperama",[5.29,1.42,nt]),passos:s=>[Ft(7,(t,e,n)=>{let i=Vt(e,0,7,.6),[r,o]=s.alvoArcade(),a=Math.max(0,Math.sin(n*13))*.02;return Xt(n,{ikL:[r.x,r.y,r.z],kL:i,ikR:[o.x,o.y-a,o.z],kR:i,oriL:"baixo",oriR:"baixo",lean:.1*i,nod:-.05+.04*Math.sin(n*6),side:.03*Math.sin(n*3),boca:"foco",olhar:[0,-.3],mL:.9*i})},{fx:"arcade"}),Ft(1.8,(t,e,n)=>{let i=Vt(e,0,1.8,.3);return Xt(n,{aL:[2.8*i,.4,.3],aR:[2.8*i,.4,.3],dy:.1*Math.abs(Math.sin(e*7))*i,boca:"aberta",olhos:"F",boch:.8})})]},touro:{humores:["tranquilo","feliz","euforico"],ic:"cow",lugar:s=>{let t=s.alvoTouro(),e=s.lugar("touro",[5.4,6.75]);return[e[0],e[1],Yo(e,[t.x,t.z])]},passos:s=>[Ft(3.6,(t,e,n)=>{let i=Vt(e,0,3.6,.6),r=s.alvoTouro(),o=Math.sin(e*6)*.05;return Xt(n,{ikR:[r.x+o,r.y+.06,r.z+o*.5],kR:i,oriR:"baixo",gestoR:"carinho",lean:.18*i,boca:"sorriso",olhos:e>1.5?"F":"A",boch:.45})}),Ft(2,(t,e,n)=>Xt(n,{...Er(e,2)}))]},cofre:{humores:["preocupado","tranquilo","feliz","euforico"],ic:"vault",lugar:s=>s.lugar("cofre",[7.62,1.63,nt/2]),passos:s=>[Ft(1.8,(t,e,n)=>{let i=ce(re(e,0,.8)),r=s.alvoCofre();return fc(n,.55*i,{ikR:[r.x,r.y,r.z],kR:i,porta:1.9*ce(re(e,.9,1.8)),boca:"o",abre:.4})},{fx:"cofre"}),Ft(2,(t,e,n)=>{let i=Vt(e,0,1.4,.4),r=s.pto("cofre",8.54,.2,1.75);return fc(n,.55*(1-ce(re(e,1,2))),{ikR:[r.x,r.y,r.z],kR:i,aR:[1,-.1,1.5],porta:1.9,boca:"sorriso",olhos:"F",boch:.6})},{fx:"cofre",props:{moeda:(t,e)=>e<.75?"casa":"R"}}),Ft(1.8,(t,e,n)=>Xt(n,{aR:[1,-.1,1.5],porta:1.9,olhar:[0,-1.6*Vt(e,.2,1.4)],nod:-.35*Vt(e,.2,1.4),boca:"aberta",olhos:"A",fxk:re(e,.15,1.35),mR:.2}),{fx:"cofre",props:{moeda:(t,e)=>e<.15||e>1.35?"R":"joga"}}),Ft(1.9,(t,e,n)=>{let i=Vt(e,0,1.9,.5),r=s.pto("cofre",8.54,.2,1.75);return fc(n,.55*i,{ikR:[r.x,r.y,r.z],kR:i*re(e,.2,.6),aR:[1,-.1,1.5],porta:1.9*(1-ce(re(e,1,1.8))),boca:"sorriso"})},{fx:"cofre",props:{moeda:(t,e)=>e<.75?"R":"casa"}})]},trofeu:{humores:["tranquilo","feliz","euforico"],ic:"trophy",lugar:s=>s.lugar("trofeu",[7.98,2.6,nt/2]),passos:s=>[Ft(1.2,(t,e,n)=>{let i=ce(t),r=s.alvoTrofeu();return Xt(n,{ikL:[r.L.x,r.L.y,r.L.z],kL:i,ikR:[r.R.x,r.R.y,r.R.z],kR:i,lean:.15*i,boca:"o",fxk:t})},{fx:"trofeuPega"}),Ft(3,(t,e,n)=>{let i=Vt(e,0,3,.7),r=Xt(n,{aL:[ut(.6,2.85,i),.35,.5],aR:[ut(.6,2.85,i),.35,.5],dy:.04*Math.abs(Math.sin(e*6))*i,boca:"aberta",olhos:"F",boch:.8,nod:-.25*i});return r.olhar=[0,-1.5*i],r},{fx:"trofeu"}),Ft(1.2,(t,e,n)=>{let i=1-ce(t),r=s.alvoTrofeu(!0);return Xt(n,{ikL:[r.L.x,r.L.y,r.L.z],kL:i,ikR:[r.R.x,r.R.y,r.R.z],kR:i,lean:.15*i,boca:"sorriso",fxk:t})},{fx:"trofeuSolta"})]},porquinho:{humores:["preocupado","tranquilo","feliz","euforico"],ic:"piggy-bank",lugar:s=>s.lugar("mesa",[7.55,1.22,nt]),passos:s=>[Ft(1.3,(t,e,n)=>{let i=s.bolso("R"),r=Vt(e,0,.95,.3);return Xt(n,{ikR:[i.x,i.y,i.z],kR:r,aR:[.5,-.1,1.3],nod:.25,olhar:[0,1]})},{props:{moeda:(t,e)=>e<.55?"casa":"R"}}),Ft(1.9,(t,e,n)=>{let i=Vt(e,0,1.9,.4),r=s.alvoPorco();return Xt(n,{ikR:[r.x,r.y+.1,r.z],kR:i,oriR:"baixo",aR:[.5,-.1,1.3],lean:.25*i,nod:.35,olhar:[0,1],boca:"sorriso"})},{fx:"porco",props:{moeda:(t,e)=>e<.9?"R":e<1.15?"cofrinho":"casa"}}),Ft(1.4,(t,e,n)=>Xt(n,{...Er(e,1.4)}))]},neon:{humores:["tranquilo","feliz","euforico"],ic:"currency-btc",lugar:()=>[1.55,6.6,-nt/2],passos:s=>[Ft(5.6,(t,e,n)=>{let i=s.bolso("R"),r=Vt(e,0,.8,.25)+Vt(e,4.7,5.6,.25),o=Vt(e,.5,5,.5),a=Vt(e,2.6,4.4,.3);return Xt(n,{ikR:[i.x,i.y,i.z],kR:r,aR:[ut(0,1.05,o),-.25,ut(.2,2,o)],aL:[.3*o,-.2,.9*o],nod:ut(.35,-.3,a)*o,olhar:[0,ut(1,-1.2,a)],boca:a>.5?"sorriso":"foco",boch:.3})},{props:{celular:(t,e)=>e<.45||e>5.2?"casa":"R"}}),Ft(1.4,(t,e,n)=>Xt(n,{...Er(e,1.4)}))]},arcoiris:{humores:["tranquilo","feliz","euforico"],ic:"rainbow",lugar:()=>[3.2,.95,nt],passos:()=>[Ft(3.2,(s,t,e)=>{let n=Vt(t,0,3.2,.6);return Xt(e,{aL:[2.2*n,.5,1.2*n],aR:[2.2*n,.5,1.2*n],nod:-.4*n,olhar:[0,-1.4],boca:"sorriso",olhos:"F",boch:.6})}),Ft(1.8,(s,t,e)=>{let n=Math.abs(Math.sin(t*9));return Xt(e,{aL:[1.2,-.25-.25*n,1.6],aR:[1.2,-.25-.25*n,1.6],boca:"aberta",olhos:"F",boch:.7})})]},dardos:{humores:["tranquilo","feliz","euforico","preocupado"],ic:"target",lugar:()=>[2.45,5.95,-nt/2],passos:s=>[Ft(1.1,(t,e,n)=>{let i=s.bolso("L"),r=Vt(e,0,.8,.25);return Xt(n,{ikL:[i.x,i.y,i.z],kL:r,aL:[.55*ce(re(e,.5,1.1)),.05,1.2*ce(re(e,.5,1.1))],olhar:[0,-.2]})},{props:{aljava:(t,e)=>e<.5?"casa":"L"}})].concat([0,1,2].map(t=>Ft(1.7,(e,n,i)=>{let r=Vt(n,0,.42,.14),o=s.boneco.mL,a=ce(re(n,.3,.8)),l=ce(re(n,.8,1.02)),c=ce(re(n,1.2,1.7)),h=[.45,-.1,1.3],f=[1.75,-.1,2.35],u=[1.35,-.1,.25],d=n<.8?h.map((m,_)=>ut(m,f[_],a)):n<1.2?f.map((m,_)=>ut(m,u[_],l)):u.map((m,_)=>ut(m,h[_],c));return Xt(i,{aR:d,ikR:[o.x,o.y+.02,o.z],kR:r,aL:[.55,.05,1.2],twist:-.15*a+.25*l-.1*c,lean:.06*l,boca:"foco",olhar:[0,-.2],lL:[.18*a,.1],fxk:t+(n>=.92?.5:0)})},{fx:"dardo",props:{dardo:(e,n)=>n<.25||n>=.92?"casa":"R",aljava:"L"}}))).concat([Ft(1.6,(t,e,n)=>Xt(n,{...Er(e,1.6),aL:[.55*(1-ce(re(e,0,.6))),.05,1.2*(1-ce(re(e,0,.6)))]}),{fx:"dardo",props:{aljava:"casa"}})])},globo:{humores:["tranquilo","feliz","euforico"],ic:"disco-ball",lugar:s=>s.lugares().danca,passos:()=>[Ft(6.2,(s,t,e)=>Zo(t%3.1+(t>3.1?1.05:0),e),{fx:"globo"})]}},A_=s=>[Ft(2.6,(t,e,n)=>{let i=Vt(e,0,2.6,.3);return Xt(n,{aL:[1.9*i,-.45,2.3*i],aR:[1.9*i,-.45,2.3*i],boca:"o",abre:.9,olhos:"A",boch:.6,balao:Vt(e,.1,2.5,.3),balaoT:s,dy:.05*Math.sin(nt*re(e,0,.4))})},{fx:"novidade"}),Ft(1.7,(t,e,n)=>Zo(e,n))];function fS(s,t){return new mu(s,t)}var dc=(s,t,e)=>[s*Math.cos(e)+t*Math.sin(e),-s*Math.sin(e)+t*Math.cos(e)];function vc(s){let t=[];for(let[e,n]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let[i,r]=dc(e*s.h[0],n*s.h[1],s.r);t.push([s.c[0]+i,s.c[1]+r])}return t}function hu(s,t,e=0){let n=[s,t].flatMap(o=>[[Math.cos(o.r),-Math.sin(o.r)],[Math.sin(o.r),Math.cos(o.r)]]),i=vc(s),r=vc(t);for(let[o,a]of n){let l=1e9,c=-1e9,h=1e9,f=-1e9;for(let[u,d]of i){let m=u*o+d*a;l=Math.min(l,m),c=Math.max(c,m)}for(let[u,d]of r){let m=u*o+d*a;h=Math.min(h,m),f=Math.max(f,m)}if(c-e<=h||f-e<=l)return!1}return!0}var mu=class{constructor(t,e){this.el=t,this.d={};let n=this.renderer=new Do({antialias:!0,alpha:!0,powerPreference:"high-performance"});this.pr=Math.min(window.devicePixelRatio||1,2),n.setPixelRatio(this.pr),n.outputColorSpace=an,n.toneMapping=ji,n.toneMappingExposure=1,n.shadowMap.enabled=!0,n.shadowMap.type=Ji,n.domElement.className="of-canvas",n.domElement.setAttribute("role","img"),t.appendChild(n.domElement);let i=this.scene=new Hi,r=new ys(n);i.environment=r.fromScene(new Uo,.04).texture,i.environmentIntensity=.32,this.cam=new Ke(30,1,.1,80),this.az=nt/4,this.el_=.5,this.camModo="sala",this.camAtual=null,this.tAnt=performance.now(),this.t0=performance.now(),this.notas=[],this.hist=[],this.feed=[],this.flash={},this.fx=[],this.moveis={},this.fixos=[],this.nav=new pu,this.construir(),this.prepararAO(),this.boneco=new gc(e.cor,e.icone,e.boneco,e.acessorio),i.add(this.boneco.root),i.add(this.boneco.blob),this.cao=new du,i.add(this.cao.g),this.filtro=new xc,this.vida=new _c,this.vistos=this.lerVistos(),window.__ofDebug&&(window.__ofDebug=this),this.ligarControles(),this.ro=new ResizeObserver(()=>this.redimensionar()),this.ro.observe(t),this.redimensionar(),this.aplicarLayout(e.layout,!0),this.atualizar(e),this.reduz=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,this.laco=this.laco.bind(this),this.raf=requestAnimationFrame(this.laco)}prepararAO(){if(!((window.matchMedia&&window.matchMedia("(pointer: coarse)").matches||(navigator.hardwareConcurrency||4)<4||window.__ofSemAO)&&!window.__ofComAO))try{let e=this.renderer,n=new Ye(4,4,{type:on,samples:4}),i=this.composer=new ic(e,n);i.addPass(new sc(this.scene,this.cam));let r=this.aoPass=new Ho(this.scene,this.cam,4,4);r.updateGtaoMaterial({radius:.9,distanceExponent:1.3,thickness:2.2,scale:1.45,samples:12,distanceFallOff:1,screenSpaceRadius:!1}),r._overrideVisibility=function(){let a=this._visibilityCache;this.scene.traverse(l=>{if(!l.visible)return;let c=l.material;(l.isPoints||l.isLine||l.isSprite||l.isInstancedMesh||l.isMesh&&c&&(c.transparent||c.isMeshBasicMaterial||c.isShadowMaterial))&&(l.visible=!1,a.push(l))})},r.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),r.blendIntensity=1;let o=r.setSize.bind(r);r.setSize=(a,l)=>o(Math.max(2,a*.5|0),Math.max(2,l*.5|0)),i.addPass(r),i.addPass(new ac),this.ao=!0}catch(e){console.warn("Oclus\xE3o de ambiente indispon\xEDvel:",e),this.composer=null,this.ao=!1}}movel(t,e,n,i={}){let r=new St;r.position.set(e[0],0,e[1]),this.scene.add(r);let o=new St;return o.position.set(-e[0],0,-e[1]),r.add(o),this.moveis[t]={id:t,outer:r,inner:o,P:e,caixas:n,x:e[0],z:e[1],ri:0,piso:!!i.piso,nome:i.nome||t,decor:i.decor||null},o}pedaco(t,e,n,i=0){let r=new St;r.position.set(n[0],0,n[1]),r.rotation.y=i,t.add(r);let o=new St;return o.position.set(-e[0],0,-e[1]),r.add(o),o}giro(t,e=t.ri){return e*nt/4}lugar(t,e){let n=this.moveis[t];if(!n)return e.slice();let i=this.giro(n),[r,o]=dc(e[0]-n.P[0],e[1]-n.P[1],i);return e.length>2?[n.x+r,n.z+o,e[2]+i]:[n.x+r,n.z+o]}pto(t,e,n,i){let r=this.lugar(t,[e,i]);return Mt(r[0],n,r[1])}caixasDe(t,e=t.x,n=t.z,i=t.ri){let r=i*nt/4;return t.caixas.map(o=>{let[a,l]=dc(o.c[0]-t.P[0],o.c[1]-t.P[1],r);return{c:[e+a,n+l],h:o.h,r:(o.r||0)+r}})}ativo(t){return t.outer.visible}cabe(t,e,n,i){let r=this.caixasDe(t,e,n,i);for(let o of r)for(let[a,l]of vc(o))if(a<.02||a>Ve-.02||l<.02||l>We-.02)return!1;if(t.piso)return!0;for(let o in this.moveis){let a=this.moveis[o];if(a===t||a.piso||!this.ativo(a))continue;let l=this.caixasDe(a);for(let c of r)for(let h of l)if(hu(c,h,.005))return!1}for(let o of this.fixos)for(let a of r)if(hu(a,o,.005))return!1;return!0}prender(t,e,n,i){let r=1e9,o=-1e9,a=1e9,l=-1e9;for(let c of this.caixasDe(t,e,n,i))for(let[h,f]of vc(c))r=Math.min(r,h),o=Math.max(o,h),a=Math.min(a,f),l=Math.max(l,f);return r<.03&&(e+=.03-r),o>Ve-.03&&(e-=o-(Ve-.03)),a<.03&&(n+=.03-a),l>We-.03&&(n-=l-(We-.03)),[e,n]}posicionar(t,e,n,i){t.x=e,t.z=n,t.ri=(i%8+8)%8,t.outer.position.set(e,0,n),t.outer.rotation.y=this.giro(t)}layoutAtual(){let t={m:{},off:[...this.off||[]].sort()};for(let e in this.moveis){let n=this.moveis[e];(Math.abs(n.x-n.P[0])>.005||Math.abs(n.z-n.P[1])>.005||n.ri)&&(t.m[e]=[Math.round(n.x*100)/100,Math.round(n.z*100)/100,n.ri])}return t}aplicarLayout(t,e){t=t&&typeof t=="object"?t:{},this.off=new Set(Array.isArray(t.off)?t.off.filter(i=>typeof i=="string"):[]);for(let i in this.moveis){let r=this.moveis[i];this.posicionar(r,r.P[0],r.P[1],0)}let n=t.m&&typeof t.m=="object"?t.m:{};for(let i in n){let r=this.moveis[i],o=n[i];if(!r||!Array.isArray(o)||o.length<3||!o.every(isFinite))continue;let[a,l]=this.prender(r,+o[0],+o[1],o[2]|0);this.posicionar(r,a,l,o[2]|0)}e||this.mudouLayout()}mudouLayout(){this.nav.limpar();for(let e in this.moveis){let n=this.moveis[e];if(!(n.piso||!this.ativo(n)))for(let i of this.caixasDe(n))this.marcar(i)}for(let e of this.fixos)this.marcar(e);if(this.calibrarTacada(),this.sujoNav=!1,this.sujo=!0,this.dir&&this.dir.replanejar(),this.plantaFrente){let e=this.moveis.planta2,n=["touro","aquario","cofre","fliperama","trofeu","cachorro"].some(i=>{let r=this.moveis[i];return r&&this.ativo(r)&&this.caixasDe(r).some(o=>this.caixasDe(e).some(a=>hu(o,a)))});e.outer.visible=!n}}marcar(t){let e=this.nav,n=.24,i=e.c,r=Math.hypot(t.h[0],t.h[1])+n,o=Math.max(0,Math.floor((t.c[0]-r)/i)),a=Math.min(e.nx-1,Math.floor((t.c[0]+r)/i)),l=Math.max(0,Math.floor((t.c[1]-r)/i)),c=Math.min(e.nz-1,Math.floor((t.c[1]+r)/i));for(let h=o;h<=a;h++)for(let f=l;f<=c;f++){let[u,d]=dc((h+.5)*i-t.c[0],(f+.5)*i-t.c[1],-t.r),m=Math.max(Math.abs(u)-t.h[0],0),_=Math.max(Math.abs(d)-t.h[1],0);m*m+_*_<=n*n&&(e.b[h+f*e.nx]=1)}}construir(){let t=this.scene,e=(M,R,B,H,N=0)=>({c:[M,R],h:[B,H],r:N});this.hemi=new ur("#E3EBFF","#B08A64",.9),t.add(this.hemi);let n=this.key=new wi("#FFF4E3",1.8);n.position.set(11,12,11),n.target.position.set(4,0,3.5),t.add(n,n.target),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),n.shadow.bias=-4e-4,n.shadow.normalBias=.025,n.shadow.radius=6,n.shadow.blurSamples=12,Object.assign(n.shadow.camera,{left:-7.5,right:7.5,top:7,bottom:-7,near:2,far:40}),this.fill=new wi("#CFE0FF",.35),this.fill.position.set(-4,6,8),t.add(this.fill),this.rim=new wi("#B9CCFF",.55),this.rim.position.set(-6,5,-6),this.rim.target.position.set(4,0,4),t.add(this.rim,this.rim.target);let i=Oe(1024,1024);this.desenharPiso(i),i.t.wrapS=i.t.wrapT=bn,i.t.repeat.set(Ve/4.5,We/4.5),this.chao=Ct(new Ze(Ve,We),new me({map:i.t,roughness:.42,metalness:0}),t,Ve/2,0,We/2,{rx:-nt/2,cast:!1}),pt(t,it("#8A5A34",{r:.8}),[-Sn,-.22,-Sn],[Ve+.05,-.001,We+.05],.02,{cast:!1}),pt(t,it("#E6E3DD",{r:.9}),[-Sn-.06,-.3,-Sn-.06],[Ve+.11,-.2,We+.11],.04,{cast:!1});let r=Dd("#EEF1F6"),o=Dd("#E5E9F1"),a=it("#C9D1DD",{r:.9});pt(t,r,[-Sn,0,-Sn],[Ve,ke,0],.005);let l=.95,c=2.65,h=.92,f=2.38;pt(t,o,[-Sn,0,0],[0,ke,l],.005),pt(t,o,[-Sn,0,c],[0,ke,We],.005),pt(t,o,[-Sn,0,l],[0,h,c],.005),pt(t,o,[-Sn,f,l],[0,ke,c],.005),pt(t,a,[-Sn-.005,ke,-Sn-.005],[Ve+.005,ke+.03,.005],.01),pt(t,a,[-Sn-.005,ke,0],[.005,ke+.03,We+.005],.01),pt(t,a,[Ve-.001,0,-Sn],[Ve+.004,ke+.03,0],.001),pt(t,a,[-Sn,0,We-.001],[0,ke+.03,We+.004],.001);let u=it("#FFFFFF",{r:.6});pt(t,u,[0,0,0],[Ve,.1,.02],.005),pt(t,u,[0,0,0],[.02,.1,We],.005),this.ceu=Oe(256,256),Ct(new Ze(c-l,f-h),new He({map:this.ceu.t,toneMapped:!1}),t,-.1,(h+f)/2,(l+c)/2,{ry:nt/2,cast:!1,recv:!1}),Ct(new Ze(c-l,f-h),new me({color:"#DDF1FF",transparent:!0,opacity:.12,roughness:.05,metalness:.3}),t,-.03,(h+f)/2,(l+c)/2,{ry:nt/2,cast:!1,recv:!1});let d=it("#FFFFFF",{r:.4});pt(t,d,[-.06,h-.02,l-.06],[.04,f+.04,l],.01),pt(t,d,[-.06,h-.02,c],[.04,f+.04,c+.06],.01),pt(t,d,[-.06,f,l],[.04,f+.06,c],.01),pt(t,d,[-.06,(h+f)/2-.025,l],[0,(h+f)/2+.025,c],.01),pt(t,d,[-.06,h,(l+c)/2-.025],[0,f,(l+c)/2+.025],.01),pt(t,it("#F1F5F9",{r:.5}),[-.06,h-.06,l-.12],[.16,h,c+.12],.015);let m=it("#C7D2FE",{r:1});for(let[M,R]of[[l-.42,l-.06],[c+.06,c+.42]])for(let B=0;B<4;B++)Fn(t,m,.05,2.45,.08,1.38,M+.05+B*(R-M-.1)/3,{});fe(t,it("#94A3B8",{m:.6,r:.3}),.015,.015,c-l+1,.08,f+.25,(l+c)/2,{rx:nt/2});let _=Oe(64,64),g=_.g.createLinearGradient(0,0,64,0);g.addColorStop(0,"rgba(255,255,255,.9)"),g.addColorStop(1,"rgba(255,255,255,0)"),_.g.fillStyle=g,_.g.fillRect(0,0,64,64);let p=new Ae;p.setAttribute("position",new le([.02,.005,l+.1,.02,.005,c-.1,3,.005,c+1.5,3,.005,l+1.3],3)),p.setAttribute("uv",new le([0,0,0,1,1,1,1,0],2)),p.setIndex([0,1,2,0,2,3]),this.feixe=new Me(p,new He({map:_.t,color:"#FFE7A3",transparent:!0,opacity:.3,blending:$i,depthWrite:!1,toneMapped:!1})),t.add(this.feixe);{let M=this.movel("tapete",[3.35,3.85],[e(3.35,3.85,1.65,2.5)],{piso:!0,nome:"Tapete"}),R=Oe(512,512);this.desenharTapete(R),Ct(new Ms(3.3,.016,5,2,.007),new me({map:R.t,roughness:1}),M,3.35,.009,3.85,{cast:!1})}let y=bs("#9A6B43",{r:.62,rep:[.3,2]}),T=bs("#6E4A2E",{r:.8});pt(t,T,[1.6,0,0],[4.8,ke,.025],.002,{cast:!1});for(let M=1.62;M<4.78;M+=.1)pt(t,y,[M,.1,.02],[M+.06,ke-.02,.05],.008,{cast:!1});let v=it("#3F3A36",{r:.5}),b=bs("#B07A4C",{r:.5});pt(t,v,[1.95,.12,.05],[4.45,.52,.48],.02),pt(t,b,[1.97,.18,.47],[3.18,.48,.49],.01),pt(t,b,[3.22,.18,.47],[4.43,.48,.49],.01);for(let M of[2.05,4.35])for(let R of[.12,.42])fe(t,it("#111827"),.015,.015,.12,M,.06,R);pt(t,it("#F8FAFC",{r:.3}),[2.3,.52,.18],[2.62,.58,.4],.02),pt(t,it("#111827",{r:.4}),[3.85,.52,.2],[3.98,.86,.33],.02),pt(t,it("#111827",{r:.4}),[2.95,.52,.2],[3.08,.86,.33],.02),pt(t,it("#0B0F19",{r:.25,m:.4}),[2.25,1,.06],[4.15,2.06,.12],.02),this.tv=Oe(512,288),Ct(new Ze(1.84,1),new He({map:this.tv.t,toneMapped:!1}),t,3.2,1.53,.123,{cast:!1,recv:!1}),this.tvLuz=new di("#818CF8",1.4,4.5,1.6),this.tvLuz.position.set(3.2,1.5,.9),t.add(this.tvLuz),this.fixos.push(e(3.2,.27,1.25,.24));{let M=this.movel("centro",[3.21,1.72],[e(3.21,1.72,.6,.29)],{nome:"Mesa de centro"}),R=bs("#C89A6B",{r:.45});pt(M,R,[2.62,.36,1.45],[3.8,.42,2],.03),pt(M,it("#E7D6C3"),[2.7,.08,1.52],[3.72,.11,1.93],.01);for(let B of[2.68,3.74])for(let H of[1.5,1.95])fe(M,it("#3F3A36"),.02,.02,.36,B,.18,H);pt(M,it("#F43F5E"),[2.8,.42,1.6],[3.1,.44,1.82],.005,{ry:.2}),pt(M,it("#38BDF8"),[2.84,.44,1.62],[3.1,.455,1.8],.005,{ry:-.1}),pt(M,it("#F8FAFC",{r:.4}),[3.35,.42,1.62],[3.6,.44,1.8],.004,{ry:.3})}{let M=this.movel("sofa",[3.2,3.05],[e(3.2,3.05,1.24,.47)],{nome:"Sof\xE1"}),R=Sr("#0F766E"),B=Sr("#14857B"),H=Sr("#2BB3A3",{rep:[2,2]});pt(M,R,[2,.08,2.6],[4.4,.42,3.5],.06),pt(M,R,[2,.08,3.22],[4.4,.98,3.52],.08),pt(M,B,[1.96,.08,2.58],[2.2,.66,3.52],.07),pt(M,B,[4.2,.08,2.58],[4.44,.66,3.52],.07),pt(M,H,[2.22,.4,2.62],[3.19,.54,3.24],.06),pt(M,H,[3.21,.4,2.62],[4.18,.54,3.24],.06),pt(M,H,[2.24,.5,3],[3.18,.92,3.24],.07,{rx:-.12}),pt(M,H,[3.22,.5,3],[4.16,.92,3.24],.07,{rx:-.12}),pt(M,it("#FCD34D",{r:1}),[2.28,.5,2.95],[2.62,.82,3.1],.06,{rz:.15,rx:-.2});for(let N of[2.06,4.34])for(let $ of[2.66,3.44])fe(M,it("#3F3A36"),.025,.02,.08,N,.04,$)}{let M=this.movel("poltrona",[.92,3.2],[e(.92,3.2,.5,.44,nt/4)],{nome:"Poltrona"}),R=new St;R.position.set(.92,0,3.2),R.rotation.y=nt/4,M.add(R);let B=Sr("#B45309"),H=Sr("#D97706");pt(R,B,[-.42,.1,-.36],[.42,.4,.4],.06),pt(R,B,[-.42,.1,-.44],[.42,1.05,-.2],.08,{rx:.1}),pt(R,H,[-.5,.1,-.4],[-.32,.62,.4],.07),pt(R,H,[.32,.1,-.4],[.5,.62,.4],.07),pt(R,it("#F59E0B",{r:1}),[-.32,.38,-.25],[.32,.5,.38],.05);for(let N of[-.44,.44])for(let $ of[-.36,.36])fe(R,it("#3F3A36"),.025,.018,.1,N,.05,$)}{let M=this.movel("luminaria",[.32,4],[e(.32,4,.16,.16)],{nome:"Lumin\xE1ria"}),R=new St;R.position.set(.32,0,4),M.add(R),fe(R,it("#1F2937",{m:.6,r:.4}),.14,.16,.03,0,.015,0),fe(R,it("#1F2937",{m:.6,r:.4}),.012,.012,1.5,0,.77,0),this.cupula=fe(R,new me({color:"#FEF3C7",roughness:.8,emissive:"#FFD58A",emissiveIntensity:0}),.12,.2,.26,0,1.6,0,{seg:28}),this.lampLuz=new di("#FFC978",0,4.2,1.8),this.lampLuz.position.set(.35,1.5,4),M.add(this.lampLuz),this.lampHalo=Ss("#FFD58A",1.1,0),this.lampHalo.position.set(.34,1.58,4),M.add(this.lampHalo)}{let M=this.movel("cafe",[.31,4.9],[e(.31,4.9,.31,.58)],{nome:"Cantinho do caf\xE9"}),R=it("#F8FAFC",{r:.5});pt(M,R,[.02,0,4.35],[.58,.88,5.45],.02),pt(M,it("#334155",{r:.35}),[0,.88,4.32],[.62,.92,5.48],.01),pt(M,it("#E2E8F0"),[.57,.1,4.4],[.585,.82,4.88],.004),pt(M,it("#E2E8F0"),[.57,.1,4.92],[.585,.82,5.4],.004);let B=new St;B.position.set(.24,.92,4.9),M.add(B),pt(B,it("#111827",{r:.3,m:.3}),[-.14,0,-.14],[.14,.38,.14],.03),pt(B,it("#D1D5DB",{r:.25,m:.8}),[-.04,.24,-.13],[.2,.34,.13],.02),pt(B,it("#374151",{r:.4,m:.5}),[.06,0,-.05],[.2,.012,.05],.004),this.vapor=[];for(let H=0;H<4;H++){let N=Ss("#FFFFFF",.1,0);N.material.blending=Ai,N.position.set(.38,1,4.9),M.add(N),this.vapor.push(N)}for(let H=0;H<3;H++)fe(M,it(["#F43F5E","#FACC15","#38BDF8"][H]),.035,.03,.08,.38,.96,5.2+H*.09)}let S=Oe(256,192);this.desenharQuadro(S),pt(t,it("#1F2937",{r:.4}),[0,1.45,4.45],[.04,2.25,5.4],.01),Ct(new Ze(.87,.72),new me({map:S.t,roughness:.6}),t,.045,1.85,4.925,{ry:nt/2,cast:!1});{let M=this.movel("mesa",[6.8,.6],[e(6.8,.42,1.06,.41),e(6.8,1.22,.3,.3)],{nome:"Escrivaninha"});this.mesaG=M;let R=bs("#9C6B45",{r:.42,rep:[2,1]}),B=it("#1F2937",{r:.4,m:.6});pt(M,R,[5.75,.72,.02],[7.85,.77,.82],.02);for(let ct of[5.82,7.78])pt(M,B,[ct-.03,0,.08],[ct+.03,.72,.14],.01),pt(M,B,[ct-.03,0,.7],[ct+.03,.72,.76],.01),pt(M,B,[ct-.03,.02,.08],[ct+.03,.06,.76],.01);pt(M,it("#F1F5F9",{r:.5}),[7.25,.18,.06],[7.7,.7,.62],.02),pt(M,it("#CBD5E1"),[7.27,.42,.62],[7.68,.44,.63],.003),pt(M,it("#1E293B",{r:.9}),[6,.77,.42],[7.55,.775,.78],.004),pt(M,it("#E5E7EB",{r:.4}),[6.42,.775,.55],[7.08,.8,.7],.01),this.teclas=pt(M,new me({color:"#94A3B8",roughness:.5,emissive:"#60A5FA",emissiveIntensity:.25}),[6.44,.8,.565],[7.06,.805,.69],.003),this.mouse=Ct(new rn(.04,16,10),it("#E5E7EB",{r:.3}),M,7.28,.79,.62,{s:[.8,.4,1.2]}),fe(M,B,.11,.12,.012,6.8,.776,.22),pt(M,B,[6.775,.77,.16],[6.825,1,.2],.01),pt(M,it("#0B0F19",{r:.25,m:.4}),[6.19,.86,.17],[7.41,1.42,.22],.02),this.mon=Oe(1024,448),this.monMesh=Ct(new Ze(1.18,.516),new He({map:this.mon.t,toneMapped:!1}),M,6.8,1.14,.222,{cast:!1,recv:!1}),this.monLuz=new di("#60A5FA",1.1,2.6,1.8),this.monLuz.position.set(6.8,1.15,.75),M.add(this.monLuz),this.monHalo=Ss("#60A5FA",1.6,.18),this.monHalo.position.set(6.8,1.14,.12),M.add(this.monHalo),fe(M,it("#F8FAFC",{r:.3}),.04,.035,.1,5.98,.82,.55),Ct(new Re(.025,.008,8,14),it("#F8FAFC"),M,6.03,.83,.55,{ry:0}),this.planta(5.95,.77,.2,.45,M);let H=this.cadeira=new St;H.position.set(6.8,0,1.22),H.rotation.y=nt,M.add(H);let N=it("#1F2937",{r:.7}),$=this.cadAcento=new me({color:"#2457F5",roughness:.7});for(let ct=0;ct<5;ct++){let yt=ct*se/5;pt(H,B,[-.02,.05,0],[.02,.08,.3],.01,{ry:yt}).position.set(Math.sin(yt)*.15,.065,Math.cos(yt)*.15),ue(H,it("#111827"),.03,Math.sin(yt)*.29,.03,Math.cos(yt)*.29)}fe(H,B,.025,.03,.4,0,.27,0),pt(H,N,[-.26,.44,-.27],[.26,.53,.25],.05),pt(H,$,[-.17,.53,-.2],[.17,.535,.2],.005);let ht=new St;ht.position.set(0,.5,-.27),ht.rotation.x=-.12,H.add(ht),pt(ht,N,[-.25,.05,-.08],[.25,.85,0],.06),pt(ht,$,[-.12,.12,0],[.12,.72,.006],.004),pt(ht,N,[-.15,.8,-.07],[.15,.98,0],.05);for(let ct of[-1,1])pt(H,B,[ct*.27-.015,.5,-.1],[ct*.27+.015,.68,-.06],.005),pt(H,N,[ct*.27-.04,.68,-.2],[ct*.27+.04,.71,.12],.015);let G=new St;G.visible=!1,M.add(G),this.decPorquinho=G;let et=it("#F9A8D4",{r:.5}),at=new St;at.position.set(7.55,.775,.6),at.rotation.y=-.5,G.add(at),this.porco=at,ue(at,et,.09,0,.09,0,{s:[.9,.85,1.15]}),fe(at,it("#F472B6"),.035,.035,.04,0,.08,.11,{rx:nt/2});for(let ct of[-1,1])Ct(new fi(.025,.05,8),et,at,ct*.045,.17,.05,{}),ue(at,it("#111827"),.008,ct*.035,.12,.085);for(let[ct,yt]of[[-.04,.05],[.04,.05],[-.04,-.05],[.04,-.05]])fe(at,et,.02,.02,.05,ct,.02,yt);pt(at,it("#9D174D"),[-.025,.165,-.03],[.025,.172,.03],.002),Ln(G)}pt(t,it("#7A5233",{r:.6}),[5.9,1.86,0],[7.7,1.9,.28],.01);let C=5.98;["#EF4444","#2457F5","#F59E0B","#10B981","#8B5CF6","#0EA5E9","#F43F5E"].forEach((M,R)=>{let B=.05+R%3*.015,H=.2+R%2*.05;pt(t,it(M,{r:.7}),[C,1.9,.04],[C+B,1.9+H,.24],.006,{rz:R===6?-.25:0}),C+=B+.008}),this.planta(7.5,1.9,.12,.3);let E=new St;E.position.set(5.25,2.35,.03),t.add(E),fe(E,it("#1F2937",{r:.4}),.27,.27,.05,0,0,0,{rx:nt/2,seg:40}),fe(E,it("#FFFFFF",{r:.5}),.24,.24,.052,0,0,.002,{rx:nt/2,seg:40});for(let M=0;M<12;M++){let R=M*se/12;pt(E,it("#1F2937"),[-.006,-.025,0],[.006,.025,.01],.002).position.set(Math.sin(R)*.2,Math.cos(R)*.2,.03),E.children[E.children.length-1].rotation.z=-R}let A=(M,R,B,H)=>{let N=new St;return N.position.z=H,E.add(N),pt(N,it(B),[-R/2,-.02,0],[R/2,M,.006],.002),N};this.pH=A(.12,.018,"#1F2937",.03),this.pM=A(.18,.012,"#1F2937",.037),this.pS=A(.2,.005,"#EF4444",.044),ue(E,it("#EF4444"),.014,0,0,.05);{let M=this.sinuca={x0:5.7,x1:8.1,z0:3.75,z1:5.05,y:.8},R=this.movel("sinuca",[6.9,4.4],[e(6.9,4.4,1.2,.65)],{nome:"Mesa de sinuca"});this.sinucaG=R;let B=bs("#5B3A1E",{r:.45}),H=Sr("#15803D",{r:.98,rep:[6,4]});pt(R,B,[M.x0+.15,.12,M.z0+.15],[M.x1-.15,.72,M.z1-.15],.04);for(let G of[M.x0+.2,M.x1-.2])for(let et of[M.z0+.2,M.z1-.2])pt(R,B,[G-.07,0,et-.07],[G+.07,.3,et+.07],.03);pt(R,H,[M.x0+.08,.7,M.z0+.08],[M.x1-.08,.78,M.z1-.08],.01);let N=bs("#7C4A21",{r:.35,rep:[3,1]});pt(R,N,[M.x0,.68,M.z0],[M.x1,.84,M.z0+.1],.025),pt(R,N,[M.x0,.68,M.z1-.1],[M.x1,.84,M.z1],.025),pt(R,N,[M.x0,.68,M.z0],[M.x0+.1,.84,M.z1],.025),pt(R,N,[M.x1-.1,.68,M.z0],[M.x1,.84,M.z1],.025);let $=it("#0B0B0B",{r:.9});this.cacapas=[[M.x0+.11,M.z0+.11],[M.x1-.11,M.z0+.11],[M.x0+.11,M.z1-.11],[M.x1-.11,M.z1-.11],[(M.x0+M.x1)/2,M.z0+.09],[(M.x0+M.x1)/2,M.z1-.09]];for(let[G,et]of this.cacapas)fe(R,$,.055,.055,.012,G,.785,et,{cast:!1});let ht=G=>ue(R,it(G,{r:.15}),.03,0,0,0,{seg:20,seg2:14});[["#DC2626",6.25,3.98],["#1D4ED8",6.4,4.85],["#111827",6.95,3.95],["#7C3AED",6.05,4.15]].forEach(([G,et,at])=>ht(G).position.set(et,.81,at)),this.bB=ht("#F8FAFC"),this.bA=ht("#FACC15"),this.pendLuz=new di("#FFE3A8",0,3.2,1.6),this.pendLuz.position.set(6.9,1.95,4.4),R.add(this.pendLuz),pt(R,it("#3B82F6",{r:.8}),[8,.84,4.95],[8.04,.86,4.99],.003)}{let M=this.movel("planta1",[.45,.45],[e(.45,.45,.24,.24)],{nome:"Planta"});this.planta(.45,0,.45,1.25,M)}{let M=this.movel("planta2",[8.5,6.95],[e(8.5,6.95,.22,.22)],{nome:"Planta"});this.plantaFrente=this.planta(8.5,0,6.95,1.05,M)}let I=this.dec={};{let M=this.movel("fliperama",[5.29,.5],[e(5.29,.5,.34,.42)],{nome:"Fliperama",decor:"fliperama"});I.fliperama=this.moveis.fliperama;let R=this.pedaco(M,[8.52,.5],[5.29,.5]),B=it("#7C3AED",{r:.5});pt(R,B,[8.18,0,.15],[8.86,1.8,.8],.03),pt(R,it("#1F2937"),[8.2,.95,.72],[8.84,1.05,1],.02,{rx:.15}),this.arcade=Oe(128,128),Ct(new Ze(.56,.46),new He({map:this.arcade.t,toneMapped:!1}),R,8.52,1.3,.805,{rx:-.12,cast:!1}),pt(R,new me({color:"#F472B6",emissive:"#F472B6",emissiveIntensity:.9}),[8.2,1.66,.6],[8.84,1.78,.81],.02),this.joy=new St,this.joy.position.set(8.36,1.07,.88),R.add(this.joy),fe(this.joy,it("#111827"),.008,.008,.07,0,.035,0),ue(this.joy,it("#EF4444",{r:.3}),.025,0,.075,0),this.botoesArc=[ue(R,it("#FACC15",{r:.3}),.02,8.6,1.07,.9),ue(R,it("#22C55E",{r:.3}),.02,8.68,1.07,.88)],this.arcMao=[new Ie,new Ie],this.arcMao[0].position.set(8.36,1.17,.9),this.arcMao[1].position.set(8.64,1.12,.9),this.arcMao.forEach(H=>R.add(H)),Ln(R)}{let M=this.movel("cofre",[8.54,1.63],[e(8.54,1.63,.36,.34),e(7.92,1.12,.12,.12)],{nome:"Cofre",decor:"cofre"});I.cofre=this.moveis.cofre;let R=this.pedaco(M,[8.54,1.63],[8.54,1.63],-nt/2),B=it("#D4A017",{r:.25,m:.9}),H=it("#3F2A08",{r:.6});pt(R,B,[8.22,0,1.3],[8.86,.72,1.6],.04),pt(R,B,[8.22,0,1.3],[8.28,.72,1.96],.02),pt(R,B,[8.8,0,1.3],[8.86,.72,1.96],.02),pt(R,B,[8.22,0,1.3],[8.86,.06,1.96],.02),pt(R,B,[8.22,.66,1.3],[8.86,.72,1.96],.02),pt(R,H,[8.28,.06,1.58],[8.8,.66,1.62],.005);for(let $=0;$<3;$++)pt(R,it("#FACC15",{r:.25,m:.9,e:"#7A5A00",ei:.6}),[8.32+$*.15,.06,1.66],[8.44+$*.15,.14,1.86],.01);this.cofreBrilho=Ss("#FDE68A",.9,0),this.cofreBrilho.position.set(8.54,.4,1.8),R.add(this.cofreBrilho);let N=this.cofrePorta=new St;N.position.set(8.24,0,1.97),R.add(N),pt(N,B,[0,.03,-.02],[.6,.69,.03],.03),fe(N,it("#713F12",{m:.6,r:.4}),.1,.1,.03,.3,.4,.04,{rx:nt/2}),pt(N,it("#713F12",{m:.6}),[.295,.32,.05],[.305,.48,.06],.002),this.cofreMacaneta=new Ie,this.cofreMacaneta.position.set(.5,.42,.08),N.add(this.cofreMacaneta);for(let $=0;$<5;$++)fe(R,it("#FACC15",{r:.3,m:.85}),.06,.06,.02,8.05+$%2*.04,.01+$*.021,2.25,{});for(let $=0;$<3;$++)fe(R,it("#FACC15",{r:.3,m:.85}),.06,.06,.02,7.92,.01+$*.021,2.12,{});Ln(R)}{let M=this.movel("aquario",[.35,6.835],[e(.35,6.835,.31,.49)],{nome:"Aqu\xE1rio",decor:"aquario"});I.aquario=this.moveis.aquario,pt(M,it("#5B3A1E",{r:.6}),[.04,0,6.35],[.66,.74,7.32],.02),Ct(new Ms(.58,.5,.92,2,.01),new me({color:"#7DD3FC",transparent:!0,opacity:.32,roughness:.05,metalness:.1,depthWrite:!1}),M,.35,1,6.835,{cast:!1}),pt(M,it("#E7D7B8"),[.08,.74,6.4],[.62,.79,7.28],.01),pt(M,it("#1F2937"),[.05,1.24,6.38],[.65,1.28,7.3],.01),this.peixes=[],["#F97316","#FACC15","#38BDF8","#F43F5E"].forEach((R,B)=>{let H=new St;ue(H,it(R,{r:.4}),.035,0,0,0,{s:[.6,.8,1.4],seg:12}),Ct(new fi(.03,.05,8),it(R),H,0,0,-.06,{rx:-nt/2}),M.add(H),this.peixes.push(H)});for(let R=0;R<5;R++){let B=Ct(new fi(.03,.18+R*.03,6),it("#16A34A",{r:.8}),M,.2+R%3*.12,.85,6.5+R*.17);B.userData.alga=R}this.bolhas=[];for(let R=0;R<6;R++){let B=ue(M,it("#FFFFFF",{op:.6,r:.1}),.008,.45,.8,7.1,{seg:8,seg2:6,cast:!1});this.bolhas.push(B)}this.racao=[];for(let R=0;R<14;R++){let B=ue(M,it("#B45309",{r:.8}),.006,.35,1.2,6.8,{seg:6,seg2:4,cast:!1});B.visible=!1,this.racao.push(B)}pt(M,it("#F59E0B",{r:.6}),[.5,1.28,7.12],[.58,1.38,7.2],.008),pt(M,it("#DC2626",{r:.5}),[.5,1.38,7.12],[.58,1.395,7.2],.004),this.aqLuz=Ss("#38BDF8",1,.25),this.aqLuz.position.set(.35,1,6.85),M.add(this.aqLuz)}{let M=this.movel("touro",[6.2,6.95],[e(6.2,6.95,.35,.35)],{nome:"Touro de ouro",decor:"touro"});I.touro=this.moveis.touro;let R=this.pedaco(M,[8.5,6.95],[6.2,6.95]),B=it("#E3B341",{r:.18,m:1});pt(R,it("#E5E7EB",{r:.5}),[8.15,0,6.6],[8.85,.55,7.3],.03);let H=new St;H.position.set(8.5,.55,6.95),H.rotation.y=-nt*.6,R.add(H),this.touroT=H,Fn(H,B,.13,.28,0,.3,0,{rx:nt/2}),ue(H,B,.12,0,.33,-.1);let N=new St;N.position.set(0,.36,.27),N.rotation.x=.5,H.add(N),ue(N,B,.09,0,0,0,{s:[1,.9,1.2]});for(let $ of[-1,1])Ct(new Re(.07,.015,8,16,nt*.7),B,N,$*.07,.07,0,{rz:$>0?-.2:nt+.2});this.touroCab=new Ie,this.touroCab.position.set(0,.1,0),N.add(this.touroCab);for(let[$,ht]of[[-.08,.15],[.08,.15],[-.08,-.15],[.08,-.15]])Fn(H,B,.035,.12,$,.12,ht);Ct(new Re(.08,.012,6,12,nt),B,H,0,.32,-.24,{ry:nt/2}),Ln(R)}{let M=this.movel("trofeu",[8.6,2.6],[e(8.6,2.6,.18,.18)],{nome:"Trof\xE9u",decor:"trofeu"});I.trofeu=this.moveis.trofeu,pt(M,it("#E5E7EB",{r:.45}),[8.44,0,2.44],[8.76,.08,2.76],.02),pt(M,it("#F8FAFC",{r:.4}),[8.48,.08,2.48],[8.72,1,2.72],.02),pt(M,it("#E5E7EB",{r:.45}),[8.45,1,2.45],[8.75,1.04,2.75],.02);let R=this.trofeuObj=new St,B=it("#E3B341",{r:.2,m:1}),H=[[0,0],[.06,0],[.06,.03],[.018,.04],[.018,.1],[.07,.13],[.085,.22],[0,.22]].map(([N,$])=>new _t(N,$));Ct(new cr(H,24),B,R);for(let N of[-1,1])Ct(new Re(.035,.008,6,12),B,R,N*.085,.17,0,{});Ln(R),this.trofeuBase=Mt(8.6,1.04,2.6),R.position.copy(this.trofeuBase),M.add(R),this.trofeuPai=M}{let M=this.movel("cachorro",[1.35,6.2],[e(1.35,6.2,.38,.3)],{nome:"Caminha do cachorro",decor:"cachorro"});I.cachorro=this.moveis.cachorro,Ct(new Re(.28,.08,12,32),it("#7C3AED",{r:.9}),M,1.35,.08,6.2,{rx:nt/2,s:[1.25,.95,1]}),Ct(new Vi(.3,.3,.05,32),it("#C4B5FD",{r:1}),M,1.35,.04,6.2,{s:[1.2,1,.9]}),ue(M,it("#EF4444",{r:.5}),.04,1.75,.04,6.45)}{let M=new St;M.visible=!1,t.add(M),I.globo=M,fe(M,it("#94A3B8"),.004,.004,.3,3.4,ke-.15,4.9),this.globo=Ct(new ps(.2,2),new me({color:"#E2E8F0",metalness:1,roughness:.12,flatShading:!0}),M,3.4,ke-.48,4.9),this.spots=["#F43F5E","#22D3EE","#FACC15","#A855F7"].map(R=>{let B=new uo(R,0,8,.35,.6,1.2);return B.position.set(3.4,ke-.48,4.9),M.add(B,B.target),B})}I.porquinho=this.decPorquinho;{let M=new St;M.visible=!1,t.add(M),I.neon=M;let R=Oe(256,256);R.g.font="900 210px system-ui, sans-serif",R.g.textAlign="center",R.g.textBaseline="middle",R.g.shadowColor="#FB923C",R.g.shadowBlur=24,R.g.fillStyle="#FDBA74",R.g.fillText("\u20BF",128,138),this.neonM=new He({map:R.t,transparent:!0,toneMapped:!1,depthWrite:!1}),Ct(new Ze(.6,.6),this.neonM,M,.03,2.2,6.6,{ry:nt/2,cast:!1}),this.neonHalo=Ss("#FB923C",1.1,.35),this.neonHalo.position.set(.15,2.2,6.6),M.add(this.neonHalo)}{let M=new St;M.visible=!1,t.add(M),I.arcoiris=M,this.arcoM=[],["#F43F5E","#F59E0B","#22C55E","#3B82F6"].forEach((B,H)=>{let N=new He({color:B,toneMapped:!1});this.arcoM.push(N),Ct(new Re(.42-H*.07,.014,8,48,nt),N,M,3.2,2.28,.07,{cast:!1})});let R=Ss("#FDE68A",1.4,.25);R.position.set(3.2,2.45,.15),M.add(R),this.arcoHalo=R}{let M=new St;M.visible=!1,t.add(M),I.dardos=M;let R=Oe(128,128);[["#111827",62],["#F43F5E",50],["#FEF3C7",34],["#F43F5E",16]].forEach(([B,H])=>{R.g.fillStyle=B,R.g.beginPath(),R.g.arc(64,64,H,0,se),R.g.fill()}),Ct(new fs(.22,32),new me({map:R.t,roughness:.8}),M,.012,1.75,5.95,{ry:nt/2,cast:!1}),this.dardos=[];for(let B=0;B<3;B++){let H=new St;fe(H,it("#9CA3AF",{m:.8,r:.3}),.003,.001,.05,0,.025,0),fe(H,it("#1D4ED8"),.006,.006,.08,0,-.04,0),Ct(new fi(.02,.04,4),it("#FACC15",{ds:!0}),H,0,-.09,0,{rx:nt}),H.scale.setScalar(1.7),t.add(H),H.visible=!1,this.dardos.push(H)}this.dardosAlvo=[[.07,1.77,5.93],[.07,1.7,6],[.07,1.78,6.02]]}let F=260,O=new Ze(.05,.03);this.confete=new us(O,new He({side:En,toneMapped:!1}),F);let D=["#F43F5E","#F59E0B","#22C55E","#3B82F6","#A855F7","#FACC15","#FFFFFF"].map(M=>new jt(M));this.confData=Array.from({length:F},()=>({x:Math.random()*Ve,z:Math.random()*We,y0:Math.random()*ke,v:.4+Math.random()*.5,r:Math.random()*se,rv:(Math.random()-.5)*8,sw:Math.random()*se}));for(let M=0;M<F;M++)this.confete.setColorAt(M,D[M%D.length]);this.confete.visible=!1,this.confete.frustumCulled=!1,t.add(this.confete),this.faisca=Oe(64,64);{let M=this.faisca.g;M.translate(32,32),M.fillStyle="#FFF7C2",M.beginPath();for(let R=0;R<8;R++){let B=R*nt/4,H=R%2?9:30;M.lineTo(Math.cos(B)*H,Math.sin(B)*H)}M.closePath(),M.fill()}this.faiscas=[];for(let M=0;M<18;M++){let R=new Gi(new Ei({map:this.faisca.t,color:"#FDE68A",transparent:!0,depthWrite:!1,blending:$i,toneMapped:!1}));R.visible=!1,t.add(R),this.faiscas.push({s:R,vida:9})}this.notaGeo=new Ms(.16,.004,.08,1,.001);let k=Oe(128,64);k.g.fillStyle="#86EFAC",k.g.fillRect(0,0,128,64),k.g.strokeStyle="#15803D",k.g.lineWidth=5,k.g.strokeRect(4,4,120,56),k.g.fillStyle="#15803D",k.g.font="bold 34px system-ui",k.g.textAlign="center",k.g.fillText("R$",64,44),this.notaMat=new me({map:k.t,roughness:.8}),this.itens={},this.itens.controle=this.fazerControle(),t.add(this.itens.controle);let W=new St;fe(W,it("#FFFFFF",{r:.3}),.042,.036,.1,0,.05,0),fe(W,it("#6B3E1F",{r:.2}),.038,.038,.004,0,.096,0),Ct(new Re(.028,.008,8,14),it("#FFFFFF"),W,.045,.05,0,{}),Ln(W,!0,!1),this.itens.xicara=W,t.add(W);let Y=new Me(this.notaGeo,this.notaMat);Y.castShadow=!0,this.itens.nota=Y,t.add(Y);let ot=new St;for(let M=0;M<6;M++){let R=new Me(this.notaGeo,this.notaMat);R.position.y=M*.005,R.rotation.y=(M%3-1)*.08,ot.add(R)}Ln(ot,!0,!1),this.itens.maco=ot,t.add(ot);let Z=new St;fe(Z,it("#B7793A",{r:.4}),.0105,.02,1.45,0,.725,0),fe(Z,it("#1F2937",{r:.4}),.0205,.021,.35,0,.175,0),fe(Z,it("#E8F1FF"),.0105,.0105,.02,0,1.455,0),fe(Z,it("#3B82F6"),.0108,.0108,.008,0,1.468,0),Ln(Z,!0,!1),this.itens.taco=Z,t.add(Z);let rt=new St;pt(rt,it("#111827",{r:.3}),[-.035,-.07,-.005],[.035,.07,.005],.008),this.celTela=Oe(64,128),Ct(new Ze(.062,.126),new He({map:this.celTela.t,toneMapped:!1}),rt,0,0,.0055,{cast:!1}),this.itens.celular=rt,t.add(rt);let j=new St;fe(j,it("#FACC15",{r:.25,m:.9}),.025,.025,.006,0,0,0,{rx:nt/2}),this.itens.moeda=j,t.add(j);let gt=()=>{let M=new St;return fe(M,it("#9CA3AF",{m:.8,r:.3}),.003,.001,.05,0,.025,0),fe(M,it("#1D4ED8"),.006,.006,.08,0,-.04,0),Ct(new fi(.02,.04,4),it("#FACC15",{ds:!0}),M,0,-.09,0,{rx:nt}),M.scale.setScalar(1.7),M};this.itens.dardo=gt(),t.add(this.itens.dardo);let mt=new St;this.aljavaD=[0,1,2].map(M=>{let R=gt();return R.position.set((M-1)*.018,0,0),R.rotation.z=(M-1)*.12,mt.add(R),R}),this.itens.aljava=mt,t.add(mt),Object.values(this.itens).forEach(M=>{M.visible=!1});let ee=this.nuvem=new St,te=it("#94A3B8",{r:1});[[0,0,0,.16],[-.14,-.03,0,.12],[.15,-.02,.02,.13],[.05,.08,0,.12],[-.06,.02,.08,.1]].forEach(([M,R,B,H])=>ue(ee,te,H,M,R,B,{cast:!1})),this.gotas=[];for(let M=0;M<8;M++){let R=fe(ee,u_("#60A5FA",{op:.85}),.006,.006,.07,-.15+M*.043,-.15,(M%3-1)*.05,{cast:!1});this.gotas.push(R)}ee.visible=!1,t.add(ee),this.balao=Oe(128,128),this.balaoT="",this.balaoS=new Gi(new Ei({map:this.balao.t,transparent:!0,depthWrite:!1})),this.balaoS.visible=!1,t.add(this.balaoS);for(let M in this.moveis){let R=this.moveis[M];if(!R.piso)for(let B of R.caixas)Fd(R.inner,B.c[0],B.c[1],B.h[0],B.h[1],B.r||0,M.startsWith("planta")?.3:.42)}Fd(t,3.2,.27,1.25,.24,0,.35),br(t,Ve,.55,Mt(Ve/2,.004,.27),new sn(-nt/2,0,0),.2),br(t,We,.55,Mt(.27,.004,We/2),new sn(-nt/2,0,nt/2),.2),br(t,Ve,.5,Mt(Ve/2,.25,.003),new sn(0,0,nt),.16),br(t,We,.5,Mt(.003,.25,We/2),new sn(0,nt/2,nt),.16),br(t,.45,ke,Mt(.22,ke/2,.003),new sn(0,0,-nt/2),.18),br(t,.45,ke,Mt(.003,ke/2,.22),new sn(0,nt/2,nt/2),.18);let kt=Oe(128,128);kt.g.strokeStyle="#FFFFFF",kt.g.lineWidth=7,Ci(kt.g,6,6,116,116,16),kt.g.stroke(),kt.g.fillStyle="rgba(255,255,255,.14)",kt.g.fill(),this.contornoTex=kt.t;for(let M in this.moveis){let R=this.moveis[M];R.marca=new Me(new Ze(1,1),new He({map:kt.t,color:"#60A5FA",transparent:!0,depthWrite:!1,toneMapped:!1,opacity:.85})),R.marca.rotation.x=-nt/2,R.marca.visible=!1,R.marca.renderOrder=2,t.add(R.marca),R.outer.traverse(B=>{B.userData.movel=M})}}fazerControle(){let t=new St;pt(t,it("#1F2937",{r:.35}),[-.08,-.015,-.035],[.08,.015,.035],.015);for(let e of[-1,1])ue(t,it("#1F2937",{r:.35}),.035,e*.07,-.005,-.015,{s:[1,.7,1.3]});return ue(t,it("#60A5FA",{e:"#60A5FA",ei:.6}),.009,-.04,.016,0),ue(t,it("#F87171",{e:"#F87171",ei:.6}),.009,.04,.016,0),Ln(t,!0,!1)}planta(t,e,n,i,r=this.scene){let o=new St;o.position.set(t,e,n),r.add(o);let a=i*.18;fe(o,it("#E7E5E4",{r:.6}),a,a*.8,i*.32,0,i*.16,0),fe(o,it("#57534E",{r:1}),a*.95,a*.95,.01,0,i*.32,0);let l=new St;l.position.y=i*.32,o.add(l);let c=[it("#16A34A",{r:.7,ds:!0}),it("#22C55E",{r:.7,ds:!0}),it("#15803D",{r:.7,ds:!0})],h=9;for(let f=0;f<h;f++){let u=f*se/h+f%2*.3,d=.35+f%3*.2,m=i*(.5+f%4*.1),_=new St;_.rotation.set(0,u,0),l.add(_);let g=new St;g.rotation.x=d,_.add(g),Ct(new rn(m*.5,10,8),c[f%3],g,0,m*.5,0,{s:[.32,1,.1]})}return Ln(o),(this.plantas||(this.plantas=[])).push(l),o}lugares(){let t=this.nav,e=(a,l)=>this.lugar(a,l),n=a=>{let l=t.perto(a[0],a[1]);return[l[0],l[1],a[2]??0]},i=e("mesa",[7.45,1.95]),r=e("mesa",[6.8,.3]);return{sofaS:e("sofa",[3.2,3,nt]),sofaP:n(e("sofa",[3.2,2.3,nt])),cafeP:n(e("cafe",[.98,4.9,-nt/2])),cadS:e("mesa",[6.8,1.2,nt]),cadP:n(e("mesa",[6.8,1.95,nt])),monP:n([i[0],i[1],Yo(i,r)]),ritmo1:n(e("mesa",[5.5,2.35])),ritmo2:n(e("mesa",[7.9,2.45])),polS:e("poltrona",[.92,3.2,nt/4]),polP:n(e("poltrona",[1.36,3.64,nt/4])),janP:n([.62,1.85,-nt/2]),danca:n([3.4,5.25,nt/4]),sinP:this.sinP?n(this.sinP):n([8.5,4.6,-nt/2])}}calibrarTacada(){let t=this.sinuca,e=[7.62,4.52],n=[t.x0+.11,t.z0+.11],i=[n[0]-e[0],n[1]-e[1]],r=Math.hypot(...i),o=[i[0]/r,i[1]/r],a=[e[0]+o[0]*.5,e[1]+o[1]*.5],l=[a[0]-o[0]*.06,a[1]-o[1]*.06],c=[l[0]+o[0]*.1-o[1]*.12,l[1]+o[1]*.1+o[0]*.12];this.bolas={R:e,Y:a,C:l,u:o,fimB:c,pk:n};let h=Math.atan2(o[0],o[1]),f=[o[1],-o[0]],u=[e[0]-o[0]*.9-f[0]*.13,e[1]-o[1]*.9-f[1]*.13];this.tacoBase={tip:[e[0]-o[0]*.035,e[1]-o[1]*.035],u:o,el:.16},this.sinP=this.lugar("sinuca",[u[0],u[1],h])}tacoPontas(t){let e=this.boneco,n=e.root,i=t.taco,r=t.recuo||0,o=(y,T,v)=>this.pto("sinuca",y,T,v),a=[o(8.14,.02,5.1),o(8.11,1.46,4.93)],l=[n.localToWorld(Mt(.27,.05,.17)),n.localToWorld(Mt(.33,1.5,.25))],c=this.tacoBase,h=Math.cos(c.el),f=Math.sin(c.el),u=this.pto("sinuca",c.tip[0]-c.u[0]*h,.81+f,c.tip[1]-c.u[1]*h).sub(this.pto("sinuca",c.tip[0],.81,c.tip[1])).normalize(),d=this.pto("sinuca",c.tip[0],.812,c.tip[1]).addScaledVector(u,r*.2),m=[d.clone().addScaledVector(u,1.45),d],_,g,p;if(i<=0?(p=ce(i+1),_=a[0].clone().lerp(l[0],p),g=a[1].clone().lerp(l[1],p)):(p=ce(i),_=l[0].clone().lerp(m[0],p),g=l[1].clone().lerp(m[1],p)),i>0&&i<1){let y=Math.sin(nt*p)*.25;_.y+=y,g.y+=y}return{butt:_,tip:g,ax:u,apoioBridge:this.pto("sinuca",c.tip[0],.8,c.tip[1]).addScaledVector(u,.26).setY(.795),dedos:u.clone().negate().setY(-.15)}}aplicarTaco(t){let e=this.tacoPontas(t),n=this.itens.taco;n.visible=!0;let i=e.tip.clone().sub(e.butt),r=i.length()||1;i.divideScalar(r),n.position.copy(e.butt),n.quaternion.setFromUnitVectors(Mt(0,1,0),i);let o=t.taco,a=Wt(o+1),l=ut(.98,.5,Wt(o)),c=e.butt.clone().addScaledVector(i,l);if(t.ikR=[c.x,c.y,c.z],t.kR=Math.max(t.kR||0,a),o>.02){let h=e.apoioBridge;t.ikL=[h.x,h.y,h.z],t.kL=Math.max(t.kL||0,Wt(o)),t.oriL=[e.dedos.x,e.dedos.y,e.dedos.z]}t.item=o>.5?"tacoShot":o>-.5?"tacoV":t.item}teclado(){return{L:this.pto("mesa",6.62,.822,.645),R:this.pto("mesa",6.97,.822,.645)}}mundo(t){return t.getWorldPosition(new U)}alvoCao(){return this.mundo(this.cao.cab).add(Mt(0,.05,0))}alvoArcade(){return this.arcMao.map(t=>this.mundo(t))}alvoTouro(){return this.mundo(this.touroCab)}alvoCofre(){return this.mundo(this.cofreMacaneta)}alvoPorco(){return this.mundo(this.porco).add(Mt(0,.17,0))}alvoTrofeu(){let t=this.trofeuPai,e=this.trofeuBase;return{L:t.localToWorld(e.clone().add(Mt(-.1,.17,0))),R:t.localToWorld(e.clone().add(Mt(.1,.17,0)))}}atualizar(t){let e=this.d;this.d=t;let n=t.humor||"tranquilo";this.boneco&&((t.boneco!==e.boneco||t.acessorio!==e.acessorio)&&this.boneco.setAparencia(t.boneco,t.acessorio),this.boneco.setCor(t.cor),t.icone!==e.icone&&this.boneco.setIcone(t.icone)),this.cadAcento&&this.cadAcento.color.set(t.cor||"#2457F5"),this.titulo=t.titulo,this.pctTxt=t.pct==null||!isFinite(t.pct)?"":(t.pct>0?"+":"")+t.pct.toFixed(2).replace(".",",")+"%";let i=Object.fromEntries((e.ativos||[]).map(a=>[a.t,a]));for(let a of t.ativos||[]){let l=i[a.t];l&&l.preco!=null&&a.preco!=null&&Math.abs(l.preco-a.preco)>1e-9&&(this.flash[a.t]={t:performance.now(),up:a.preco>l.preco})}e.ativos&&JSON.stringify((e.ativos||[]).map(a=>[a.t,a.preco]))!==JSON.stringify((t.ativos||[]).map(a=>[a.t,a.preco]))&&this.log("cota\xE7\xF5es atualizadas");let r=!t.sim&&t.serie&&t.serie.pts&&t.serie.pts.length>1?t.serie.pts:null;if(r){let a=r.map(c=>c[1]),l=this.serieAlvo;if(!l||l.v.length!==a.length||l.v.some((c,h)=>Math.abs(c-a[h])>1e-6)){let c=l?this.serieAgora():null;this.serieDe=c?h_(c,a.length):a.map(()=>0),this.serieAlvo={v:a,ts:r.map(h=>h[0]),hoje:!!t.serie.hoje},this.serieT0=performance.now(),this.sujo=!0}}else this.serieAlvo=null;if(!t.sim&&t.pct!=null&&isFinite(t.pct)){let a=this.hist[this.hist.length-1];(!a||Math.abs(a.v-t.pct)>1e-6)&&(this.hist.push({v:t.pct,t:Date.now()}),this.hist.length>60&&this.hist.shift())}if(t.layout!==void 0&&!this.salvando&&!this.arrasto){let a=l=>JSON.stringify({m:l&&l.m||{},off:[...l&&l.off||[]].sort()});a(t.layout)!==a(this.layoutAtual())&&(this.aplicarLayout(t.layout,!0),this.navOk=!1)}this.tem=t.tem||{},this.dir||(this.dir=new gu(this));let o=this.aplicarDecor(!t.tudo&&!t.sim);n!==this.h&&(this.h&&this.log(t.sim?"simulando: "+(t.titulo||n).toLowerCase():"humor: "+(t.titulo||n).toLowerCase()),this.h=n,this.aplicarHumor(),this.dir.humor(n)),(o||!this.navOk)&&(this.navOk=!0,this.mudouLayout()),this.renderer.domElement.setAttribute("aria-label","Escrit\xF3rio 3D: "+(t.titulo||"")),this.sujo=!0}aplicarDecor(t){let e=!1;for(let n in this.dec){let i=this.dec[n],r=!!this.tem[n]&&!this.off.has(n),o=i.outer||i;o.visible!==r&&(o.visible=r,e=!0,r&&(this.pops[n]=performance.now(),t&&!this.vistos.has(n)&&(this.vistos.add(n),this.salvarVistos(),this.dir&&this.dir.novidade(n))))}return this.dec.cachorro&&(this.cao.g.visible=this.dec.cachorro.outer.visible),e}get pops(){return this._pops||(this._pops={})}lerVistos(){try{return new Set(JSON.parse(localStorage.getItem("radar-esc-vistos")||"[]"))}catch{return new Set}}salvarVistos(){try{localStorage.setItem("radar-esc-vistos",JSON.stringify([...this.vistos]))}catch{}}equipar(t,e){e?this.off.delete(t):this.off.add(t),this.aplicarDecor(!1)&&this.mudouLayout(),this.avisarLayout(),this.log((e?"colocou ":"guardou ")+(this.moveis[t]?this.moveis[t].nome.toLowerCase():t))}avisarLayout(){if(typeof this.d.onLayout=="function"){this.salvando=!0;try{this.d.onLayout(this.layoutAtual())}finally{this.salvando=!1}}}restaurar(){let t=[...this.off];this.aplicarLayout({off:t}),this.avisarLayout(),this.log("restaurou os m\xF3veis")}aplicarHumor(){let t=m_[this.h];this.cfg=t,this.confete.visible=this.h==="euforico";for(let e of this.notas)this.scene.remove(e.m);this.notas=[],this.aplicarLuz()}aplicarLuz(){let t=this.cfg,e=this.noite;this.hemi.intensity=t.hemi*(e?.55:1),this.hemi.color.set(e?"#A9B8E8":"#E3EBFF"),this.key.intensity=t.key*(e?.35:1),this.key.color.set(e?"#9DB0FF":t.keyCor),this.fill.intensity=e?.25:.35;let n=t.lamp||e;this.lampLuz.intensity=n?2.6:0,this.lampHalo.material.opacity=n?.55:0,this.cupula.material.emissiveIntensity=n?1.1:0;let i=t.pend||e;this.pendLuz.intensity=i?2.4:0,this.tvLuz.color.set(t.tv),this.monLuz.color.set(t.mon),this.monHalo.material.color.set(t.mon),this.feixe.material.opacity=e?.06:t.raio,this.feixe.material.color.set(e?"#A5B4FC":"#FFE7A3"),this.renderer.toneMappingExposure=t.exp*(e?.86:1),this.scene.environmentIntensity=e?.14:.32}ligarControles(){let t=this.renderer.domElement,e=null;t.style.touchAction="pan-y";let n=new po,i=new _t,r=new An(Mt(0,1,0),0),o=c=>{let h=t.getBoundingClientRect();i.set((c.clientX-h.left)/h.width*2-1,-((c.clientY-h.top)/h.height)*2+1),n.setFromCamera(i,this.cam)},a=c=>{o(c);let h=new U;return n.ray.intersectPlane(r,h)?h:null};t.addEventListener("pointerdown",c=>{if(this.edit){o(c);let h=[];for(let u in this.moveis){let d=this.moveis[u];this.ativo(d)&&h.push(d.outer)}let f=n.intersectObjects(h,!0).find(u=>u.object.userData.movel);if(f){let u=this.moveis[f.object.userData.movel],d=a(c)||f.point;this.arrasto={m:u,ini:[u.x,u.z,u.ri],off:[u.x-d.x,u.z-d.z],moveu:!1,id:c.pointerId,x:c.clientX,y:c.clientY,ok:!0},this.sel=u;try{t.setPointerCapture(c.pointerId)}catch{}c.preventDefault(),this.sujo=!0;return}}e={x:c.clientX,y:c.clientY,az:this.az,el:this.el_,id:c.pointerId,moveu:!1}}),window.addEventListener("pointermove",c=>{let h=this.arrasto;if(h&&c.pointerId===h.id){if(!h.moveu&&Math.hypot(c.clientX-h.x,c.clientY-h.y)>5&&(h.moveu=!0),!h.moveu)return;let d=a(c);if(!d)return;let m=Math.round((d.x+h.off[0])/.05)*.05,_=Math.round((d.z+h.off[1])/.05)*.05;[m,_]=this.prender(h.m,m,_,h.m.ri),h.ok=this.cabe(h.m,m,_,h.m.ri),this.posicionar(h.m,m,_,h.m.ri),this.sujo=!0;return}if(!e||c.pointerId!==e.id)return;let f=c.clientX-e.x,u=c.clientY-e.y;if(!e.moveu&&Math.hypot(f,u)>6){e.moveu=!0;try{t.setPointerCapture(c.pointerId)}catch{}this.camModo!=="sala"&&this.setCam("sala",!0)}e.moveu&&(this.az=Wt(e.az-f*.006,.12,nt/2-.12),c.pointerType!=="touch"&&(this.el_=Wt(e.el+u*.004,.22,1)),this.sujo=!0)});let l=c=>{let h=this.arrasto;if(h&&(!c||c.pointerId===h.id)){this.arrasto=null;let f=h.m;if(h.moveu)h.ok?this.log("moveu "+f.nome.toLowerCase()):(this.posicionar(f,...h.ini),this.log("n\xE3o cabe ali"));else{for(let u=1;u<=8;u++){let d=h.ini[2]+u,[m,_]=this.prender(f,f.x,f.z,d);if(this.cabe(f,m,_,d)){this.posicionar(f,m,_,d);break}}this.log("girou "+f.nome.toLowerCase())}this.mudouLayout(),this.avisarLayout(),this.sujo=!0;return}e&&e.moveu&&this.log("girou a c\xE2mera"),e=null};window.addEventListener("pointerup",l),window.addEventListener("pointercancel",l),t.addEventListener("dblclick",()=>{this.edit||(this.az=nt/4,this.el_=.5,this.setCam("sala"))})}setEdicao(t){this.edit=!!t,this.sel=null,this.sujo=!0,this.renderer.domElement.style.cursor=t?"grab":"";for(let e in this.moveis)this.moveis[e].marca.visible=!1;t&&this.camModo!=="sala"&&this.setCam("sala",!0),this.log(t?"arrumando o escrit\xF3rio":"terminou de arrumar")}setCam(t,e){this.camModo=t,this.sujo=!0,e||this.log({sala:"vis\xE3o da sala",tela:"zoom no computador",seguir:"seguindo o boneco"}[t]||t)}alvoCamera(t){let e=this.cam.aspect;if(window.__ofCamOv)return window.__ofCamOv(this,t,Mt);if(this.camModo==="tela")return e<1?{pos:this.pto("mesa",7.12,1.2,1.1),alvo:this.pto("mesa",6.8,1.13,.22),fov:70}:{pos:this.pto("mesa",7.2,1.24,1.2),alvo:this.pto("mesa",6.87,1.12,.22),fov:50};if(this.camModo==="seguir"){let h=this.boneco.root.position,f=this.az+.1*Math.sin(t*.2),u=.42,d=e<1?4.6:3.9;return{pos:Mt(h.x+Math.sin(f)*Math.cos(u)*d,.95+Math.sin(u)*d,h.z+Math.cos(f)*Math.cos(u)*d),alvo:Mt(h.x,.95,h.z),fov:38}}let n=30,i=this.reduz||this.edit?0:Math.sin(t*.15)*.025,r=[this.az.toFixed(3),this.el_.toFixed(3),e.toFixed(3)].join();r!==this.fitKey&&(this.fitKey=r,this.fit=this.enquadrar(this.az,this.el_,n,e));let{dist:o,alvo:a}=this.fit,l=Math.cos(this.el_),c=this.az+i;return{pos:Mt(a.x+Math.sin(c)*l*o,a.y+Math.sin(this.el_)*o,a.z+Math.cos(c)*l*o),alvo:a.clone(),fov:n}}laco(){if(this.raf=0,!this.el.isConnected){this.destruir();return}if(document.hidden||this.el.closest(".of-pausa"))this.tAnt=performance.now();else{let e=performance.now(),n=(e-this.tAnt)/1e3,i=Math.min(window.__ofT!=null?.3:.05,n);this.tAnt=e;let r=this.reduz?2:(e-this.t0)/1e3;(!this.reduz||this.sujo)&&this.quadro(r,this.reduz?0:i),this.sujo=!1,this.ms=this.ms==null?16:this.ms*.95+Math.min(n*1e3,100)*.05,this.ms>26&&this.ao&&!window.__ofComAO&&e-(this.tPr||0)>3e3?(this.tPr=e,this.ao=!1,this.ms=18):this.ms>30&&this.pr>1&&e-(this.tPr||0)>3e3&&(this.tPr=e,this.pr=Math.max(1,this.pr-.25),this.renderer.setPixelRatio(this.pr),this.redimensionar())}this.raf=requestAnimationFrame(this.laco)}emitir(t,e=10,n="#FDE68A"){let i=0;for(let r of this.faiscas)if(!(r.vida<1.1)&&(r.vida=0,r.s.visible=!0,r.s.material.color.set(n),r.s.position.copy(t),r.v=Mt((Math.random()-.5)*1.6,1+Math.random()*1.4,(Math.random()-.5)*1.6),++i>=e))break}quadro(t,e){let n=new Date().getHours(),i=window.__ofNoite!=null?!!window.__ofNoite:n<6||n>=19;i!==this.noite&&(this.noite=i,this.aplicarLuz());let r=this.boneco,o=this.dir.passo(window.__ofT!=null?window.__ofT:null,e),a=o.pose,l=o.s||{},c=l.fx||"",h=o.tl,f=o.pose.fxk||0,u=this.posF||(this.posF={x:o.pos[0],z:o.pos[1],y:o.pos[2],vx:0,vz:0,vy:0}),d=(M,R,B,H)=>{let N=M-B,$=Math.exp(-H*e),ht=(R+H*N)*e;return[B+(N+ht)*$,(R-H*ht)*$]},m=u.x,_=u.z,g=u.y;if(e>0&&window.__ofT==null){[u.x,u.vx]=d(u.x,u.vx,o.pos[0],12),[u.z,u.vz]=d(u.z,u.vz,o.pos[1],12);let M=u.y+Gn(u.y,o.pos[2]);[u.y,u.vy]=d(u.y,u.vy,M,11)}else u.x=o.pos[0],u.z=o.pos[1],u.y=o.pos[2];if(e>0&&!a.andando&&(a.sent||0)<.3){let M=Math.hypot(u.x-m,u.z-_)/e,R=Math.abs(Gn(g,u.y))/e,B=Wt((M-.08)*5+(R-.5)*.9);if(this.passoK=ut(this.passoK||0,B,Math.min(1,e*8)),this.passoF=(this.passoF||0)+e*(2.2+M*4+R*.8)*this.passoK,this.passoK>.02){let H=Math.sin(this.passoF*nt),N=this.passoK;a={...a,lL:[a.lL[0]+.28*Math.max(0,H)*N,a.lL[1]+.55*Math.max(0,H)*N],lR:[a.lR[0]+.28*Math.max(0,-H)*N,a.lR[1]+.55*Math.max(0,-H)*N],alt:a.alt-.012*Math.abs(H)*N}}}this.decidirProps(l,o.k,h);let p=Object.keys(this.prop).find(M=>["R","LR","joga"].includes(this.prop[M].h)),y=Object.keys(this.prop).find(M=>["L","LR"].includes(this.prop[M].h)),T=this.mundo(r.head),v=Mt(Math.sin(u.y),0,Math.cos(u.y)),b=[],S=(M,R,B)=>{let H=R.clone().sub(T);Math.abs(Gn(u.y,Math.atan2(H.x,H.z)))<1.5&&H.length()>.5&&b.push({nome:M,pos:R,peso:B})};if(S("tv",Mt(3.2,1.5,.12),1),S("janela",Mt(-.6,1.7,1.8),.9),S("relogio",Mt(5.25,2.35,.05),.5),S("camera",this.cam.position.clone(),this.h==="triste"?.4:1.2),S("monitor",this.pto("mesa",6.8,1.14,.22),.6),this.cao.g.visible&&S("cao",this.mundo(this.cao.cab),1.3),a=this.vida.passo({...a,item:p?a.item||p:a.item},{T:t,dt:e,humor:this.h,reduz:this.reduz,cabeca:T,yawCorpo:u.y,alvos:b,foco:l.foco?l.foco(this):null,nariz:T.clone().addScaledVector(v,.15*r.esc).add(Mt(0,-.02,0)),ocupado:!!l.ocupado||a.taco>-.9,ocupadoL:!!y,facePropria:!!o.pose._fp,legsLivres:a.alt>.86&&Math.abs(a.lL[0])<.25&&Math.abs(a.lR[0])<.25&&!l.semPeso}),a=this.filtro.passo(a,e),r.root.position.set(u.x,0,u.z),r.root.rotation.y=u.y+(a.yawAdd||0),r.root.updateMatrixWorld(!0),a.taco>-.98&&this.h==="feliz")a={...a},this.aplicarTaco(a);else{let M=this.tacoPontas({taco:-1}),R=M.tip.clone().sub(M.butt).normalize(),B=this.itens.taco;B.visible=!0,B.position.copy(M.butt),B.quaternion.setFromUnitVectors(Mt(0,1,0),R)}let x=Object.keys(this.prop).find(M=>["R","LR","joga"].includes(this.prop[M].h)),E=Object.keys(this.prop).find(M=>this.prop[M].h==="L");["tecla","tacoV","tacoShot"].includes(a.item)||(a.item=x==="joga"?"":x||""),E&&(a.mL=Math.max(a.mL||0,.9)),r.aplicar(a,t,e),r.desenharRosto(this.vida.rosto(a,{T:t,dt:e,humor:this.h,facePropria:!!o.pose._fp}),t),r.blob.position.set(u.x,.004,u.z),r.blob.material.opacity=Wt(1-(a.dy||0)*2,.3,1),this.moverProps(a,h,f,e),this.itens.celular.visible&&this.desenharCel(t);let A=this.bolas,I=.81,F=this.h==="feliz"&&a.bolas||"ini";if(F==="ini")this.bB.position.set(A.R[0],I,A.R[1]),this.bA.position.set(A.Y[0],I,A.Y[1]),this.bA.visible=!0,this.bA.scale.setScalar(1);else if(F==="jogo"){let M=re(h,Li,Li+.28),R=re(h,Li+.28,Li+1),B=re(h,Li+1,Li+1.15),H=R>0?[ut(A.C[0],A.fimB[0],Ts(R)),ut(A.C[1],A.fimB[1],Ts(R))]:[ut(A.R[0],A.C[0],M),ut(A.R[1],A.C[1],M)];this.bB.position.set(H[0],I,H[1]),this.bA.position.set(ut(A.Y[0],A.pk[0],Ts(R)),I-.06*B,ut(A.Y[1],A.pk[1],Ts(R))),this.bA.scale.setScalar(1-.6*B),this.bA.visible=B<1,this.bA.rotation.x+=e*20*(R>0&&R<1?1:0)}else if(F==="volta"){let M=re(h,.3,1.9),R=re(M,0,.18),B=ce(re(M,.15,1));this.bB.position.set(ut(A.fimB[0],A.R[0],ce(re(h,.2,1.5))),I,ut(A.fimB[1],A.R[1],ce(re(h,.2,1.5)))),this.bA.visible=M>0,this.bA.scale.setScalar(ut(.4,1,R)),this.bA.position.set(ut(A.pk[0],A.Y[0],B),I-.06*(1-R),ut(A.pk[1],A.Y[1],B)),this.bA.rotation.x-=e*12*(B>0&&B<1?1:0)}else this.bB.position.set(A.fimB[0],I,A.fimB[1]),this.bA.visible=!1;if(this.cao.g.visible){let M,R,B=[Math.sin(u.y),Math.cos(u.y)];if(c==="caoVem"||c==="caoCarinho"){let N=[u.x+B[0]*.55,u.z+B[1]*.55];M=[N[0],N[1],Yo(N,[u.x,u.z])],R=c==="caoCarinho"?"carinho":"senta"}else{let N={triste:"dorme",preocupado:"senta",tranquilo:"dorme",feliz:"senta",euforico:"pula"}[this.h];if(N==="dorme")M=this.lugar("cachorro",[1.35,6.2,.8]),R="dorme";else{let $=this.caoPerto||[u.x,u.z];M=[$[0],$[1],Yo($,[u.x,u.z])],R=N}}let H=this.cao.mover(M,e,this.nav);if(this.cao.g.position.set(this.cao.pos[0],0,this.cao.pos[1]),this.cao.g.rotation.y=this.cao.yaw,this.cao.quadro(H?R:"anda",t),!this.caoT||t-this.caoT>4){this.caoT=t;let N=[Math.cos(u.y),-Math.sin(u.y)],$=[[.75,.35],[-.75,.35],[.8,-.3],[-.8,-.3]];for(let[ht,G]of $){let et=u.x+N[0]*ht+B[0]*G,at=u.z+N[1]*ht+B[1]*G;if(this.nav.livre(et,at)){this.caoPerto=[et,at];break}}}}let O=c==="racao"&&h>1&&h<4.2;if(this.dec.aquario.outer.visible){this.racao.forEach((R,B)=>{let H=O?((h-1)*.55+B/14)%1:0;R.visible=O,R.position.set(.25+Pi(B)*.2,1.24-H*.42,6.65+Pi(B+5)*.35)});let M=this.peixeSobe=ut(this.peixeSobe||0,O?1:0,Math.min(1,e*1.5));this.peixes.forEach((R,B)=>{let H=t*(.5+B*.12)+B*1.7;R.position.set(.35+Math.sin(H*1.3)*.15*(1-M*.6),ut(.95+B*.06+Math.sin(H*2)*.03,1.15+Math.sin(H*4)*.02,M),6.83+Math.cos(H)*.32*(1-M*.5)),R.rotation.y=Math.atan2(-Math.sin(H)*.32,Math.cos(H*1.3)*.2)+nt}),this.bolhas.forEach((R,B)=>{let H=(t*.4+B/6)%1;R.position.set(.45+Math.sin(t*3+B)*.02,.8+H*.42,7.1-B*.02)})}let D=c==="arcade";if(this.dec.fliperama.outer.visible&&(this.joy.rotation.set(D?Math.sin(t*9)*.35:0,0,D?Math.sin(t*7.3)*.35:0),this.botoesArc.forEach((M,R)=>{M.position.y=1.07-(D&&Math.sin(t*13+R*2)>.6?.008:0)})),this.dec.cofre.outer.visible){let M=c==="cofre"||c==="moedaJoga"?a.porta:0;this.cofrePorta.rotation.y=-M,this.cofreBrilho.material.opacity=Wt(M/1.9)*.85}if(c==="porco"){let M=this.alvoPorco();h>1.15&&this.fxId!==l.t0&&(this.fxId=l.t0,this.emitir(M,8,"#FDE68A"));let R=h>1.15?Math.sin((h-1.15)*30)*Math.exp(-(h-1.15)*4):0;this.porco.scale.set(1+R*.12,1-R*.12,1+R*.12)}else this.porco.scale.setScalar(1);let k=c==="trofeu"||c==="trofeuPega"&&f>.92||c==="trofeuSolta"&&f<.85;if(this.dec.trofeu.outer.visible){let M=this.trofeuObj;if(k){let R=r.mL.clone().add(r.mR).multiplyScalar(.5).add(Mt(0,-.15,0));M.position.copy(this.trofeuPai.worldToLocal(R)),M.rotation.y=r.root.rotation.y-this.dec.trofeu.outer.rotation.y}else M.position.copy(this.trofeuBase),M.rotation.y=0}if(this.dec.dardos.visible){if(c==="dardo"&&f<.01&&h<.15&&(this.dardos.forEach(M=>{M.visible=!1}),this.voos=[]),c==="dardo"&&f%1>.4){let M=Math.floor(f),R=l.t0+":"+M;this.dardoKey!==R&&M<3&&(this.dardoKey=R,(this.voos||(this.voos=[])).push({i:M,de:r.mR.clone(),t:0}))}for(let M of this.voos||[]){M.t+=e;let R=Wt(M.t/.32),B=Mt(...this.dardosAlvo[M.i]),H=M.de.clone().lerp(B,R);H.y+=Math.sin(nt*R)*.18;let N=this.dardos[M.i];N.visible=!0,N.position.copy(H),N.rotation.set(0,0,-nt/2+(1-R)*.4)}}else this.dardos.forEach(M=>{M.visible=!1});let W=this.dec.globo.visible&&(this.h==="euforico"||c==="globo");for(let M of this.spots)M.intensity=W?9:0;this.dec.globo.visible&&(this.globo.rotation.y=t*.8,this.spots.forEach((M,R)=>{let B=t*.9+R*se/4;M.target.position.set(3.4+Math.cos(B)*2.2,0,5+Math.sin(B)*1.8)}));let Y=performance.now();for(let M in this.pops){let R=(Y-this.pops[M])/900,B=this.dec[M],H=B.outer||B;if(R>=1||!H.visible){H.scale.setScalar(1),delete this.pops[M];continue}let N=1+Math.sin(R*nt*2.5)*Math.exp(-R*4)*.35;H.scale.setScalar(Math.max(.01,R<.25?Ts(R/.25)*N:N)),(!this.popFx||this.popFx!==M+this.pops[M])&&(this.popFx=M+this.pops[M],this.emitir(this.mundo(H).add(Mt(0,.6,0)),14))}if(c==="novidade"&&this.fxId!=="n"+l.t0&&h>.2){this.fxId="n"+l.t0;let M=this.mundo(r.head);this.emitir(M.add(Mt(0,.35,0)),12,"#FACC15")}for(let M of this.faiscas){if(M.vida>=1.1)continue;M.vida+=e,M.v.y-=2.4*e,M.s.position.addScaledVector(M.v,e);let R=M.vida/1.1;M.s.material.opacity=1-R,M.s.scale.setScalar(.09*(1-R*.5)),M.s.material.rotation+=e*3,M.vida>=1.1&&(M.s.visible=!1)}let ot=this.mundo(r.head);if(this.nuvem.visible=a.nuvem>.5,this.nuvem.visible&&(this.nuvem.position.set(ot.x,ot.y+.75+Math.sin(t*1.6)*.03,ot.z),this.gotas.forEach((M,R)=>{let B=(t*1.8+R*.37)%1;M.position.y=-.12-B*.4,M.material.opacity=.9*(1-B)})),this.balaoS.visible=a.balao>.05,this.balaoS.visible){if(a.balaoT!==this.balaoT){this.balaoT=a.balaoT;let{g:M,t:R}=this.balao;M.clearRect(0,0,128,128),M.fillStyle="#FFF",M.strokeStyle="#CBD5E1",M.lineWidth=3,Ci(M,8,8,112,86,22),M.fill(),M.stroke(),M.beginPath(),M.moveTo(40,92),M.lineTo(34,120),M.lineTo(62,93),M.fill(),window.RI&&window.RI.desenhar(M,a.balaoT,64,51,60,a.balaoT==="chart-line-down"?"#DC2626":a.balaoT==="smiley-nervous"?"#F59E0B":"#7C3AED"),R.needsUpdate=!0}this.balaoS.position.set(ot.x+.25,ot.y+.6,ot.z),this.balaoS.scale.setScalar(.42*a.balao),this.balaoS.material.opacity=a.balao}if(a.solta&&a.solta!==this.ultSolta){this.ultSolta=a.solta;for(let M=0;M<4;M++){let R=new Me(this.notaGeo,this.notaMat);R.castShadow=!0,R.position.copy(r.mR),this.scene.add(R);let B=Mt(Math.sin(u.y),0,Math.cos(u.y));this.notas.push({m:R,v:Mt(B.x*.6+(Math.random()-.5)*1.2,2.2+Math.random()*1.2,B.z*.6+(Math.random()-.5)*1.2),rv:Mt(Math.random()*6,Math.random()*6,Math.random()*6),vida:0})}}a.solta||(this.ultSolta=0);for(let M=this.notas.length-1;M>=0;M--){let R=this.notas[M];R.vida+=e,R.m.position.y>.01?(R.v.y-=4.5*e,R.v.multiplyScalar(.985),R.m.position.addScaledVector(R.v,e),R.m.rotation.x+=R.rv.x*e,R.m.rotation.y+=R.rv.y*e,R.m.rotation.z+=R.rv.z*e,R.v.y<-.6&&(R.v.y=-.6+Math.sin(R.vida*9)*.25)):(R.m.position.y=.006,R.m.rotation.set(0,R.m.rotation.y,0)),R.vida>6&&(this.scene.remove(R.m),this.notas.splice(M,1))}let Z=new Date,rt=Z.getSeconds()+Z.getMilliseconds()/1e3,j=Z.getMinutes()+rt/60,gt=Z.getHours()%12+j/60;this.pS.rotation.z=-rt/60*se,this.pM.rotation.z=-j/60*se,this.pH.rotation.z=-gt/12*se,(this.plantas||[]).forEach((M,R)=>{M.rotation.z=Math.sin(t*.8+R)*.03,M.rotation.x=Math.sin(t*.6+R*2)*.02}),this.vapor.forEach((M,R)=>{let B=(t*.35+R/4)%1;M.position.set(.38+Math.sin(t*2+R)*.02,1+B*.4,4.9),M.material.opacity=.35*Math.sin(nt*B),M.scale.setScalar(.06+B*.12)});let mt=a.item==="tecla";if(this.teclas.material.emissiveIntensity=mt?.4+.3*Math.abs(Math.sin(t*14)):.25,this.monLuz.intensity=1+.25*Math.sin(t*2.2)+(performance.now()-(this.ultimaAcao||0)<900?.8:0),this.dec.neon.visible){let M=Math.sin(t*7)>.97||Math.sin(t*23)>.995;this.neonM.opacity=M?.35:1,this.neonHalo.material.opacity=M?.1:.35}if(this.dec.arcoiris.visible&&(this.arcoHalo.material.opacity=.25+(this.dir.itemAtual==="arcoiris"?.25*Math.abs(Math.sin(t*4)):0)),this.decPorquinho.visible&&c!=="porco"&&(this.porco.position.y=.775+Math.abs(Math.sin(t*1.6))*.012),this.confete.visible){let M=this.dummy||(this.dummy=new Ie);this.confData.forEach((R,B)=>{let H=ke-(t*R.v+R.y0)%(ke+.3);M.position.set(R.x+Math.sin(t*1.5+R.sw)*.2,H,R.z+Math.cos(t*1.2+R.sw)*.15),M.rotation.set(t*R.rv+R.r,t*R.rv*.7,R.r),M.updateMatrix(),this.confete.setMatrixAt(B,M.matrix)}),this.confete.instanceMatrix.needsUpdate=!0}let ee=this.camModo==="tela";if((this.reduz||t-(this.tMon||-9)>(ee?1/30:1/8)||this.sujo)&&(this.tMon=t,this.desenharMonitor(t)),(this.reduz||t-(this.tTv||-9)>1/15)&&(this.tTv=t,this.desenharTV(t,this.h==="tranquilo"?"jogo":"news")),(this.reduz||t-(this.tCeu||-9)>1/8)&&(this.tCeu=t,this.desenharCeu(t)),this.dec.fliperama.outer.visible&&(this.reduz||t-(this.tArc||-9)>(D?1/20:1/6))&&(this.tArc=t,this.desenharArcade(t*(D?2:1))),this.edit)for(let M in this.moveis){let R=this.moveis[M],B=R.marca;if(B.visible=this.ativo(R),!B.visible)continue;let H=this.caixasDe(R)[0];B.position.set(H.c[0],.02+(R.piso?0:.005),H.c[1]),B.rotation.set(-nt/2,0,H.r),B.scale.set(H.h[0]*2+.08,H.h[1]*2+.08,1);let N=this.arrasto&&this.arrasto.m===R;B.material.color.set(N&&!this.arrasto.ok?"#EF4444":N||this.sel===R?"#22C55E":"#60A5FA"),B.material.opacity=N||this.sel===R?1:.55}let te=this.alvoCamera(t);(!this.camAtual||this.reduz)&&(this.camAtual={pos:te.pos.clone(),alvo:te.alvo.clone(),fov:te.fov});let kt=window.__ofT!=null?1:1-Math.exp(-e*4);this.camAtual.pos.lerp(te.pos,kt),this.camAtual.alvo.lerp(te.alvo,kt),this.camAtual.fov=ut(this.camAtual.fov,te.fov,kt),this.cam.position.copy(this.camAtual.pos),this.cam.lookAt(this.camAtual.alvo),Math.abs(this.cam.fov-this.camAtual.fov)>.01&&(this.cam.fov=this.camAtual.fov,this.cam.updateProjectionMatrix()),this.ao&&this.composer?this.composer.render(e):this.renderer.render(this.scene,this.cam)}get prop(){if(!this._prop){this._prop={};for(let t of["controle","xicara","celular","moeda","nota","maco","dardo","aljava"])this._prop[t]={h:"casa",t0:-1,dur:0,de:null}}return this._prop}casaDe(t){let e=n=>new Ne().setFromAxisAngle(Mt(0,1,0),n);return t==="controle"?{pos:this.pto("sofa",2.72,.555,2.92),quat:e(this.giro(this.moveis.sofa)+.5)}:t==="xicara"?{pos:this.pto("cafe",.43,.92,5.06),quat:e(this.giro(this.moveis.cafe)-nt/2)}:null}bico(){return this.pto("cafe",.4,.99,4.9)}botaoCafe(){return this.pto("cafe",.36,1.3,4.97)}bolso(t="R"){return this.boneco.root.localToWorld(Mt(t==="R"?.17:-.17,.84,.05))}decidirProps(t,e,n){let i=t&&t.props;if(i)for(let r in i){let o=this.prop[r];if(!o)continue;let a=typeof i[r]=="function"?i[r](e,n):i[r];a&&a!==o.h&&(o.h=a,o.troca=!0)}}guardarProps(){for(let t in this.prop)this.prop[t].h!=="casa"&&(this.prop[t].h="casa",this.prop[t].troca=!0)}alvoProp(t,e,n,i,r){let o=this.boneco,a=o.root.rotation.y,l=new Ne().setFromAxisAngle(Mt(0,1,0),a),c=m=>{let _=m==="L"?o.L.hand:o.R.hand,g=new U,p=new Ne,y=new U;return _.matrixWorld.decompose(g,p,y),{pos:(m==="L"?o.mL:o.mR).clone(),quat:p}},h=(m,_,g)=>{let p=c(m),y=p.pos.add(Mt(..._).applyQuaternion(p.quat)),T=g?l.clone().multiply(g):p.quat;return{pos:y,quat:T,vis:!0}},f=m=>new Ne().setFromAxisAngle(Mt(1,0,0),m),u=m=>new Ne().setFromAxisAngle(Mt(0,1,0),m);if(e==="casa"){let m=this.casaDe(t);return m?{...m,vis:!0}:{pos:this.bolso(t==="maco"||t==="aljava"?"L":"R"),quat:l,vis:!1}}if(t==="controle"){let m=o.mL.clone().add(o.mR).multiplyScalar(.5).add(Mt(0,.01,0)),_=o.mL.distanceTo(o.mR),g=h("R",[0,0,.03],f(-.5)),p=e==="LR"?ce((_-.2)/.16):1;return{pos:m.lerp(g.pos,p),quat:l.clone().multiply(f(-.5)),vis:!0}}if(e==="joga"){let m=c("R"),_=Wt(r);return m.pos.y+=.02+4*_*(1-_)*.55,{pos:m.pos,quat:l.clone().multiply(f(_*6*nt)),vis:!0}}if(e==="cofrinho"){let m=c("R"),_=this.alvoPorco(),g=re(i,.9,1.15);return{pos:m.pos.lerp(_,g),quat:l,vis:g<1}}let d=e==="L"?"L":"R";if(t==="xicara"){let m=c(d),_=Mt(d==="R"?-1:1,0,0).applyQuaternion(m.quat).setY(0);_.lengthSq()<1e-4&&_.set(Math.cos(a),0,-Math.sin(a)).multiplyScalar(d==="R"?-1:1),_.normalize();let g=new Ne().setFromAxisAngle(Mt(0,1,0),Math.atan2(_.z,-_.x)),p=this.mundo(o.head).sub(m.pos).setY(0),y=new U().crossVectors(Mt(0,1,0),p.lengthSq()>1e-4?p.normalize():Mt(Math.sin(a),0,Math.cos(a))),T=new Ne().setFromAxisAngle(y.normalize(),ce(n.gole||0)*1.75).multiply(g),v=Mt(.053,.05,0).applyQuaternion(T);return{pos:m.pos.clone().sub(v),quat:T,vis:!0}}return t==="celular"?h(d,[0,.035,.03],u(nt).multiply(f(-.45))):t==="dardo"?h(d,[0,-.01,.03],f(-nt/2+.25)):t==="aljava"?h(d,[0,-.01,.035],f(-nt/2+.3)):t==="nota"||t==="maco"?h(d,[0,-.02,.035],f(1.2)):h(d,[0,-.01,.025],null)}moverProps(t,e,n,i){let r=performance.now()/1e3;for(let a in this.prop){let l=this.prop[a],c=this.itens[a];if(!c)continue;let h=this.alvoProp(a,l.h,t,e,n);if(l.troca){l.troca=!1;let u={pos:c.position.clone(),quat:c.quaternion.clone(),vis:c.visible};c.visible||(u.pos=h.pos.clone(),u.quat=h.quat.clone()),l.de=u,l.t0=r,l.dur=Wt(.12+u.pos.distanceTo(h.pos)*.3,.12,.6)}h.vis||(l.de=null);let f=l.de&&l.dur?Wt((r-l.t0)/l.dur):1;if((i===0||!this.propsProntos)&&(f=1),f<1){let u=ce(f),d=l.de.pos.distanceTo(h.pos);c.position.copy(l.de.pos).lerp(h.pos,u),c.position.y+=Math.sin(nt*u)*Math.min(.15,d*.25),c.quaternion.copy(l.de.quat).slerp(h.quat,u),c.visible=l.de.vis||h.vis}else c.position.copy(h.pos),c.quaternion.copy(h.quat),c.visible=h.vis,l.de=null}this.propsProntos=!0;let o=(this.voos||[]).length+(this.prop.dardo.h==="R"?1:0);this.aljavaD.forEach((a,l)=>{a.visible=l<3-o})}desenharCel(t){if(t-(this.tCel||-9)<.2)return;this.tCel=t;let{g:e,t:n}=this.celTela;e.fillStyle="#0B1220",e.fillRect(0,0,64,128),e.fillStyle="#FB923C",e.font="bold 16px system-ui",e.fillText("\u20BF",6,20),e.strokeStyle="#4ADE80",e.lineWidth=3,e.beginPath();for(let i=0;i<10;i++){let r=4+i*6,o=100-i*6-Math.sin(i+t*3)*6;i?e.lineTo(r,o):e.moveTo(r,o)}e.stroke(),n.needsUpdate=!0}destruir(){cancelAnimationFrame(this.raf),this.ro&&this.ro.disconnect(),this.renderer.dispose()}desenharPiso({g:t}){t.fillStyle="#C8915B",t.fillRect(0,0,1024,1024);let e=["#C8915B","#BF8752","#D29C66","#C38C56","#B88050","#CD9760"],n=7,i=()=>(n=n*16807%2147483647,n/2147483647),r=1024/8;for(let o=0;o<8;o++){let a=-i()*400;for(;a<1024;){let l=260+i()*300;t.fillStyle=e[Math.floor(i()*e.length)],t.fillRect(a,o*r,l,r),t.strokeStyle="rgba(90,50,20,.10)",t.lineWidth=1.2;for(let c=0;c<7;c++){let h=o*r+8+i()*(r-16);t.beginPath(),t.moveTo(a,h),t.bezierCurveTo(a+l*.3,h+(i()-.5)*8,a+l*.6,h+(i()-.5)*8,a+l,h+(i()-.5)*4),t.stroke()}t.fillStyle="rgba(70,35,10,.45)",t.fillRect(a,o*r,2,r),a+=l}t.fillStyle="rgba(70,35,10,.5)",t.fillRect(0,o*r,1024,2.5)}}desenharTapete({g:t}){t.fillStyle="#C7D2FE",t.fillRect(0,0,512,512),t.strokeStyle="#A5B4FC",t.lineWidth=10,Ci(t,22,22,468,468,24),t.stroke(),t.setLineDash([16,12]),t.lineWidth=4,t.strokeStyle="#818CF8",Ci(t,44,44,424,424,18),t.stroke(),t.setLineDash([]);for(let e=0;e<2600;e++)t.fillStyle=`rgba(99,102,241,${Math.random()*.06})`,t.fillRect(Math.random()*512,Math.random()*512,2,2)}desenharQuadro({g:t}){let e=t.createLinearGradient(0,0,0,192);e.addColorStop(0,"#1E3A8A"),e.addColorStop(1,"#0F172A"),t.fillStyle=e,t.fillRect(0,0,256,192),t.strokeStyle="#22C55E",t.lineWidth=6,t.lineJoin="round",t.beginPath(),[[20,150],[60,130],[95,140],[130,95],[165,105],[200,60],[236,40]].forEach(([n,i],r)=>r?t.lineTo(n,i):t.moveTo(n,i)),t.stroke(),t.fillStyle="#FACC15",t.beginPath(),t.arc(236,40,8,0,se),t.fill(),t.fillStyle="rgba(255,255,255,.85)",t.font="bold 20px system-ui",t.fillText("LONGO PRAZO",20,34)}desenharCeu(t){let{g:e,t:n}=this.ceu,i=this.h,r=this.noite,o=i==="triste"||i==="preocupado",a=r?o?"#1E293B":"#0B1026":i==="triste"?"#64748B":i==="preocupado"?"#7C93B5":"#4FA3FF",l=r?o?"#334155":"#312E81":i==="triste"?"#94A3B8":i==="preocupado"?"#B6C4D8":"#BFE3FF",c=e.createLinearGradient(0,0,0,256);if(c.addColorStop(0,a),c.addColorStop(1,l),e.fillStyle=c,e.fillRect(0,0,256,256),r&&!o){for(let d=0;d<40;d++){let m=.5+.5*Math.sin(t*2+d*7);e.fillStyle=`rgba(255,255,255,${.3+.6*m})`,e.fillRect(d*97%256,d*53%150,2,2)}e.fillStyle="#FEF3C7",e.beginPath(),e.arc(190,52,20,0,se),e.fill(),e.fillStyle=a,e.beginPath(),e.arc(200,46,18,0,se),e.fill()}else if(!o){e.save(),e.translate(195,60),e.rotate(t*.2),e.fillStyle="#FDE047";for(let d=0;d<10;d++)e.rotate(se/10),e.fillRect(-2,26,4,12);e.restore(),e.fillStyle="#FDE047",e.beginPath(),e.arc(195,60,22,0,se),e.fill()}let h=(d,m,_,g)=>{e.fillStyle=g,e.beginPath(),e.ellipse(d,m,34*_,14*_,0,0,se),e.ellipse(d+18*_,m-10*_,22*_,16*_,0,0,se),e.ellipse(d-16*_,m-6*_,18*_,13*_,0,0,se),e.fill()},f=o?r?"#475569":"#CBD5E1":r?"rgba(148,163,184,.35)":"#FFFFFF";if(h(t*8%360-50,70,1,f),h((t*5+180)%360-50,110,.75,f),o&&h((t*6+90)%360-50,40,1.2,f),[[0,150,40],[36,120,30],[62,165,44],[100,105,34],[130,140,40],[166,90,30],[192,150,36],[224,125,40]].forEach(([d,m,_],g)=>{e.fillStyle=r?"#111827":o?"#475569":"#64748B",e.fillRect(d,m,_,256-m);for(let p=m+8;p<240;p+=14)for(let y=d+5;y<d+_-6;y+=10){let T=r?(y*7+p*13+g)%5<2:!1;e.fillStyle=T?"#FDE68A":r?"#1F2937":"rgba(255,255,255,.28)",e.fillRect(y,p,5,7)}}),e.fillStyle=r?"#0F172A":o?"#3F5F4F":"#4ADE80",e.fillRect(0,238,256,18),o){e.strokeStyle="rgba(224,242,254,.75)",e.lineWidth=2;for(let d=0;d<36;d++){let m=(d*37+t*40)%280-12,_=(d*71+t*420)%280-20;e.beginPath(),e.moveTo(m,_),e.lineTo(m-6,_+16),e.stroke()}}n.needsUpdate=!0}desenharTV(t,e){let{g:n,t:i}=this.tv,r=512,o=288;if(e==="jogo"){let a=n.createLinearGradient(0,0,0,o);a.addColorStop(0,"#1E1B4B"),a.addColorStop(1,"#4338CA"),n.fillStyle=a,n.fillRect(0,0,r,o);for(let d=0;d<30;d++)n.fillStyle="rgba(255,255,255,.7)",n.fillRect((d*83-t*10)%r+(d*83-t*10<0?r:0),d*37%160,2,2);let l=t*120%64;n.fillStyle="#16A34A",n.fillRect(0,232,r,56),n.fillStyle="#22C55E";for(let d=-l;d<r;d+=64)n.fillRect(d,232,32,8);let c=[[200,170],[380,140],[560,180]];n.fillStyle="#A16207",c.forEach(([d,m])=>{let _=((d-t*120)%600+600)%600-80;n.fillRect(_,m,80,14),n.fillStyle="#FACC15",n.beginPath(),n.arc(_+40,m-20+Math.sin(t*6)*3,8,0,se),n.fill(),n.fillStyle="#A16207"});let f=196-Math.abs(Math.sin(t*3.2))*70;n.fillStyle="#EF4444",n.fillRect(110,f,26,36),n.fillStyle="#1D4ED8",n.fillRect(110,f+22,26,14),n.fillStyle="#F1C19A",n.fillRect(114,f-14,18,16);let u=((420-t*160)%560+560)%560-40;n.fillStyle="#7C2D12",n.beginPath(),n.ellipse(u,220,18,12,0,nt,0),n.fill(),n.fillRect(u-18,220,36,12),n.fillStyle="#FFF",n.font="bold 20px monospace",n.fillText("MOEDAS \xD7 "+String(Math.floor(t*2)%1e3).padStart(3,"0"),16,30),n.fillText("1-1",450,30)}else{let a=this.h==="feliz"||this.h==="euforico",l=a?"#22C55E":"#EF4444";n.fillStyle="#0B1220",n.fillRect(0,0,r,o),n.strokeStyle="rgba(148,163,184,.15)",n.lineWidth=1;for(let m=60;m<230;m+=34)n.beginPath(),n.moveTo(0,m),n.lineTo(r,m),n.stroke();let c=t*.25%1.4,h=46;n.strokeStyle=l,n.lineWidth=4,n.lineJoin="round",n.beginPath();for(let m=0;m<=Math.min(h,Math.floor(h*c));m++){let _=20+m*(r-40)/h,p=(a?200-m*2.6:90+m*2.6)+Math.sin(m*1.7)*10+Math.sin(m*.6)*12;m?n.lineTo(_,p):n.moveTo(_,p)}n.stroke(),n.fillStyle="#DC2626",n.fillRect(0,0,150,40),n.fillStyle="#FFF",n.font="bold 22px system-ui",n.fillText("RADAR NEWS",12,28),Math.floor(t*1.5)%2&&(n.fillStyle="#FFF",n.beginPath(),n.arc(170,20,6,0,se),n.fill()),n.font="bold 14px system-ui",n.fillText("AO VIVO",182,25);let f={feliz:"CARTEIRA NO VERDE",euforico:"DIA HIST\xD3RICO NA CARTEIRA!",preocupado:"MERCADO NO VERMELHO",triste:"QUEDA FORTE HOJE"}[this.h]||"MERCADO HOJE";n.fillStyle="rgba(15,23,42,.92)",n.fillRect(0,224,r,30),n.fillStyle=l,n.fillRect(0,224,8,30),n.fillStyle="#FFF",n.font="bold 18px system-ui",n.fillText(f+(this.pctTxt?"  "+this.pctTxt:""),18,245),n.fillStyle="#1E293B",n.fillRect(0,254,r,34),n.font="bold 16px monospace";let u=this.fita(),d=-(t*60%Math.max(1,u.w));for(n.save(),n.beginPath(),n.rect(0,254,r,34),n.clip();d<r;){for(let m of u.itens)n.fillStyle="#CBD5E1",n.fillText(m.t,d,277),d+=n.measureText(m.t).width+8,n.fillStyle=m.v>=0?"#4ADE80":"#F87171",n.fillText(m.s,d,277),d+=n.measureText(m.s).width+26;if(!u.itens.length)break}n.restore()}i.needsUpdate=!0}fita(){let t=(this.d.ativos||[]).filter(n=>n.vd!=null),e=t.length?t.map(n=>({t:n.t,v:n.vd,s:(n.vd>=0?"\u25B2":"\u25BC")+Math.abs(n.vd).toFixed(2).replace(".",",")+"%"})):[{t:"IBOV",v:0,s:"\u2014"}];return{itens:e,w:e.length*160}}desenharArcade(t){let{g:e,t:n}=this.arcade;e.fillStyle="#0B0B1A",e.fillRect(0,0,128,128);for(let i=0;i<5;i++){let r=(i*30+t*40)%140-10;e.fillStyle=["#F43F5E","#22C55E","#FACC15","#38BDF8","#A855F7"][i],e.fillRect(r,20+i*14,10,8)}e.fillStyle="#22C55E",e.fillRect(56+Math.sin(t*3)*30,108,16,8),Math.floor(t*4)%2&&(e.fillStyle="#FFF",e.fillRect(64+Math.sin(t*3)*30,90-t*120%80,2,8)),e.fillStyle="#FDE047",e.font="bold 12px monospace",e.fillText("HI "+String(Math.floor(t*37)%99999).padStart(5,"0"),8,12),n.needsUpdate=!0}serieAgora(){let t=this.serieAlvo;if(!t)return[];let e=ce((performance.now()-(this.serieT0||0))/1100);e<1&&(this.sujo=!0);let n=this.serieDe&&this.serieDe.length===t.v.length?this.serieDe:t.v;return t.v.map((i,r)=>ut(n[r],i,e))}desenharMonitor(t){let{g:e,t:n}=this.mon,i=1024,r=448,o=this.d,a=this.h,l={triste:"#EF4444",preocupado:"#F97316",tranquilo:"#60A5FA",feliz:"#22C55E",euforico:"#FACC15"}[a],c=e.createLinearGradient(0,0,0,r);c.addColorStop(0,"#0B1220"),c.addColorStop(1,"#111A2E"),e.fillStyle=c,e.fillRect(0,0,i,r),e.fillStyle="#0F172A",e.fillRect(0,0,i,40),e.fillStyle=l,e.beginPath(),e.arc(22,20,7,0,se),e.fill(),e.fillStyle="#E2E8F0",e.font="bold 18px system-ui",e.fillText("RADAR DA CARTEIRA",38,27);let f=new Date().toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit",second:"2-digit"});e.font="bold 18px monospace",e.textAlign="right",e.fillText(f,i-16,27),o.fechado?(e.fillStyle="#64748B",e.font="bold 13px system-ui",e.fillText("BOLSA FECHADA",i-120,26)):o.sim&&(e.fillStyle="#F59E0B",e.font="bold 13px system-ui",e.fillText("SIMULA\xC7\xC3O",i-120,26)),e.textAlign="left",this.secao&&(e.fillStyle="#94A3B8",e.font="15px system-ui",window.RI&&window.RI.desenhar(e,"map-pin",268,21,15,"#94A3B8"),e.fillText(this.secao,278,26));let u=16,d=54;e.fillStyle="rgba(30,41,59,.65)",Ci(e,u,d,330,340,14),e.fill(),e.fillStyle="#94A3B8",e.font="bold 14px system-ui",e.fillText("SEU DIA",u+16,d+28);let m=o.pct,_=m==null||!isFinite(m)?"\u2014":(m>0?"+":"")+m.toFixed(2).replace(".",",")+"%";e.fillStyle=m>0?"#4ADE80":m<0?"#F87171":"#E2E8F0",e.font="bold 64px system-ui",e.fillText(_,u+14,d+98),e.fillStyle="#CBD5E1",e.font="16px system-ui",e.fillText(this.titulo||"",u+16,d+126);let g=u+16,p=d+150,y=298,T=150;e.strokeStyle="rgba(148,163,184,.15)",e.lineWidth=1;for(let H=0;H<=4;H++)e.beginPath(),e.moveTo(g,p+H*T/4),e.lineTo(g+y,p+H*T/4),e.stroke();let v=this.serieAlvo,b=v?this.serieAgora():(this.hist.length?this.hist:[{v:m||0}]).map(H=>H.v),S=b.concat([0]),C=Math.min(...S),x=Math.max(...S);if(x-C<.4){let H=(x+C)/2;C=H-.2,x=H+.2}let E=(x-C)*.08;C-=E,x+=E;let A=H=>p+T-(H-C)/(x-C)*T;e.setLineDash([4,4]),e.strokeStyle="rgba(148,163,184,.4)",e.beginPath(),e.moveTo(g,A(0)),e.lineTo(g+y,A(0)),e.stroke(),e.setLineDash([]);let I=b.length,F=b.map((H,N)=>[g+(I===1?y:N/(I-1)*y),A(H)]);if(I===1&&F.unshift([g,F[0][1]]),v){let H=$=>new Date($*1e3).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit",timeZone:"America/Sao_Paulo"});e.fillStyle="#64748B",e.font="13px system-ui",e.fillText(H(v.ts[0]),g,p+T+18),e.textAlign="right",e.fillText(v.hoje?H(v.ts[v.ts.length-1]):"\xFAltimo preg\xE3o",g+y,p+T+18),e.textAlign="left";let N=$=>($>0?"+":"")+$.toFixed(2).replace(".",",")+"%";e.font="12px system-ui",e.fillStyle="#94A3B8",e.fillText(N(Math.max(...b)),g+y-60,p-6)}let O=b[b.length-1],D=(v?O:m||0)>=0?"#22C55E":"#EF4444",k=e.createLinearGradient(0,p,0,p+T);k.addColorStop(0,D+"55"),k.addColorStop(1,D+"00"),e.beginPath(),F.forEach(([H,N],$)=>$?e.lineTo(H,N):e.moveTo(H,N)),e.lineTo(F[F.length-1][0],p+T),e.lineTo(F[0][0],p+T),e.closePath(),e.fillStyle=k,e.fill(),e.strokeStyle=D,e.lineWidth=3,e.lineJoin="round",e.beginPath(),F.forEach(([H,N],$)=>$?e.lineTo(H,N):e.moveTo(H,N)),e.stroke();let W=F[F.length-1],Y=t*1.5%1;e.fillStyle=D,e.beginPath(),e.arc(W[0],W[1],5,0,se),e.fill(),e.strokeStyle=D,e.globalAlpha=1-Y,e.lineWidth=2,e.beginPath(),e.arc(W[0],W[1],5+Y*14,0,se),e.stroke(),e.globalAlpha=1;let ot=362,Z=54,rt=330;e.fillStyle="rgba(30,41,59,.65)",Ci(e,ot,Z,rt,340,14),e.fill(),e.fillStyle="#94A3B8",e.font="bold 14px system-ui",e.fillText("SEUS ATIVOS \xB7 AO VIVO",ot+16,Z+28);let j=(o.ativos||[]).slice(0,8);j.length||(e.fillStyle="#64748B",e.font="16px system-ui",e.fillText("Adicione ativos para",ot+16,Z+80),e.fillText("acompanhar aqui.",ot+16,Z+102));let gt=performance.now();j.forEach((H,N)=>{let $=Z+48+N*36,ht=this.flash[H.t];if(ht&&gt-ht.t<2500){let et=1-(gt-ht.t)/2500;e.fillStyle=(ht.up?"rgba(34,197,94,":"rgba(239,68,68,")+(.35*et).toFixed(3)+")",Ci(e,ot+8,$,rt-16,32,8),e.fill()}e.fillStyle="#E2E8F0",e.font="bold 17px monospace",e.fillText(H.t,ot+16,$+22),e.fillStyle="#94A3B8",e.font="15px monospace",e.textAlign="right",H.preco!=null&&e.fillText((H.moeda==="USD"?"US$ ":"R$ ")+H.preco.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),ot+214,$+22);let G=H.vd;e.fillStyle=G==null?"#64748B":G>=0?"#4ADE80":"#F87171",e.font="bold 16px monospace",e.fillText(G==null?"\u2014":(G>=0?"\u25B2 ":"\u25BC ")+Math.abs(G).toFixed(2).replace(".",",")+"%",ot+rt-16,$+22),e.textAlign="left"});let mt=708,ee=54,te=300;e.fillStyle="rgba(30,41,59,.65)",Ci(e,mt,ee,te,340,14),e.fill(),e.fillStyle="#94A3B8",e.font="bold 14px system-ui",e.fillText("O QUE VOC\xCA EST\xC1 FAZENDO",mt+16,ee+28);let kt=this.feed.slice(-8);kt.forEach((H,N)=>{let $=ee+58+N*34,ht=N===kt.length-1,G=gt-H.ms,et=H.txt;ht&&G<700&&(et=et.slice(0,Math.max(1,Math.floor(et.length*G/700)))),e.fillStyle="#64748B",e.font="13px monospace",e.fillText(H.hora,mt+16,$),e.fillStyle=ht?l:"#CBD5E1",e.font=(ht?"bold ":"")+"15px system-ui",e.fillText("\u203A "+et+(ht&&Math.floor(t*2.5)%2?" \u258D":""),mt+66,$)}),kt.length||(e.fillStyle="#64748B",e.font="15px system-ui",e.fillText("\u203A aguardando voc\xEA\u2026"+(Math.floor(t*2)%2?" \u258D":""),mt+16,ee+60)),e.fillStyle="#020617",e.fillRect(0,408,i,40),e.font="bold 17px monospace";let M=this.fita(),R=-(t*70%4e3);e.save(),e.beginPath(),e.rect(0,408,i,40),e.clip();let B=0;for(;R<i&&B++<60;)for(let H of M.itens)e.fillStyle="#CBD5E1",e.fillText(H.t,R,434),R+=e.measureText(H.t).width+8,e.fillStyle=H.v>=0?"#4ADE80":"#F87171",e.fillText(H.s,R,434),R+=e.measureText(H.s).width+30;e.restore(),n.needsUpdate=!0}log(t){let e=new Date().toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}),n=this.feed[this.feed.length-1];n&&n.txt===t&&performance.now()-n.ms<1500||(this.feed.push({txt:t.length>26?t.slice(0,25)+"\u2026":t,hora:e,ms:performance.now()}),this.feed.length>30&&this.feed.shift(),this.ultimaAcao=performance.now(),this.sujo=!0)}redimensionar(){let t=this.el.clientWidth||600,e=Math.round(Wt(t<640?t*.82:t*.6,300,660));this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height=e+"px",this.composer&&(this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(t,e)),this.cam.aspect=t/e,this.cam.updateProjectionMatrix(),this.sujo=!0}enquadrar(t,e,n,i){let r=new Ke(n,i,.1,100),o=Math.cos(e),a=Mt(Math.sin(t)*o,Math.sin(e),Math.cos(t)*o),l=[];for(let d of[-.25,Ve+.1])for(let m of[-.3,ke+.05])for(let _ of[-.25,We+.1])l.push(Mt(d,m,_));let c=Mt(Ve/2,.9,We/2),h=18,f=i<1?.98:.95,u=i<1?.92:.93;for(let d=0;d<4;d++){let m=4,_=60;for(let E=0;E<22;E++){let A=(m+_)/2;r.position.copy(c).addScaledVector(a,A),r.lookAt(c),r.updateMatrixWorld(),r.updateProjectionMatrix();let I=!0;for(let F of l){let O=F.clone().project(r);if(Math.abs(O.x)>f||Math.abs(O.y)>u){I=!1;break}}I?_=A:m=A}h=_,r.position.copy(c).addScaledVector(a,h),r.lookAt(c),r.updateMatrixWorld();let g=9,p=-9,y=9,T=-9;for(let E of l){let A=E.clone().project(r);g=Math.min(g,A.x),p=Math.max(p,A.x),y=Math.min(y,A.y),T=Math.max(T,A.y)}let v=(g+p)/2,b=(y+T)/2,S=Math.tan(n*nt/360)*h,C=new U,x=new U;r.matrixWorld.extractBasis(C,x,new U),c.addScaledVector(C,v*S*i).addScaledVector(x,b*S)}return{dist:h,alvo:c}}},gu=class{constructor(t){this.e=t,this.t=0,this.fila=[],this.ant=null,this.entrar=!0,this.ciclo=0,this.novos=[],this.rodada=0,this.itemAtual=""}humor(t){this.h=t,this.entrar=!0}replanejar(){this.entrar=!0}novidade(t){Xo[t]&&!this.novos.includes(t)&&(this.novos.push(t),this.e.reduz||(this.entrar=!0))}rotina(){return(qd[this.h]||qd.tranquilo)(this.L,this.e,this.ciclo)}compilar(t,e,n,i={}){let r=this.e.nav,o=e.slice(),a=n,l=[];for(let c of t)if(c.tipo==="andar"){let h=[[o[0],o[1]]];for(let g of c.destinos)h.push(...r.caminho(h[h.length-1],g));let f=[],u=0;for(let g=1;g<h.length;g++){let p=Math.hypot(h[g][0]-h[g-1][0],h[g][1]-h[g-1][1]);p>.001&&(f.push({a:h[g-1],b:h[g],d0:u,L:p,yaw:Yo(h[g-1],h[g])}),u+=p)}if(!f.length||u<.06)continue;let d=Gn(o[2],f[0].yaw);if(Math.abs(d)>.7){let g=.25+Math.abs(d)/3.2,p=[o[0],o[1],o[2]+d];l.push({tipo:"acao",dur:g,pose:(y,T,v)=>Xt(v,{nod:.05}),t0:a,de:o.slice(),ate:p,item:c.item,taco:c.taco,bolas:c.bolas,...i}),a+=g,o=p}let m=u/c.vel,_=h[h.length-1];l.push({...c,...i,t0:a,dur:m,segs:f,dist:u,de:o.slice()}),o=[_[0],_[1],o[2]+Gn(o[2],f[f.length-1].yaw)],a+=m}else{let h=c.ate?c.ate.slice():o.slice();h.length<3&&(h[2]=o[2]),h[2]=o[2]+Gn(o[2],h[2]),l.push({...c,...i,t0:a,de:o.slice(),ate:h}),o=h,a+=c.dur}return{out:l,pos:o,t:a}}fimFila(){let t=this.fila[this.fila.length-1];return t?{t:t.t0+t.dur,pos:t.tipo==="andar"?(()=>{let e=t.segs[t.segs.length-1];return[e.b[0],e.b[1],t.de[2]+Gn(t.de[2],e.yaw)]})():t.ate}:null}disponiveis(){let t=this.e,e=[];for(let n in Xo){let i=t.dec[n];i&&(i.outer?i.outer.visible:i.visible)&&Xo[n].humores.includes(this.h)&&e.push(n)}return e}visita(t,e,n){let i=this.e,r=Xo[t],o=r.lugar(i),a=i.nav.perto(o[0],o[1]),l=[a[0],a[1],o[2]],c=[Hn(1.15,[l]),Ft(.5,(h,f,u)=>Xt(u),{ate:l})];return e&&c.push(...A_(r.ic+":f")),c.push(...r.passos(i)),c.push(Hn(1.15,[n.aprox])),n.sentado||n.entrada.length?c.push(...n.entrada):c.push(Ft(.5,(h,f,u)=>Xt(u),{ate:n.inicio})),c}proximoNovo(){for(;this.novos.length;){let t=this.novos.shift(),e=this.e.dec[t];if(Xo[t]&&e&&(e.outer?e.outer.visible:e.visible))return t}return null}encher(){let t=this.e;if(this.entrar){this.entrar=!1,this.L=t.lugares();let c=this.rotina();this.padrao=c.padrao;let h=t.posF?[t.posF.x,t.posF.z,t.posF.y]:c.inicio.slice(),f=this.ultimaPose?{...this.ultimaPose}:null,u=this.proximoNovo(),d=f||Xt(0);this.fila=[],this.ant=null;let m=f&&f.sent>.4,_=Math.hypot(h[0]-c.inicio[0],h[1]-c.inicio[1])<.08;if(!u&&(!f||m&&_&&c.sentado)){this.ciclo=0,this.aprox=c.aprox,this.anexar(this.compilar(c.passos,c.inicio,this.t));return}let g=[];if(m){let p=this.aprox||h;g.push(Ft(1.2,(y,T,v)=>{let b=ws(d,Xt(v),ce(y));return b.lean+=.4*Math.sin(nt*y),b},{ate:t.nav.perto(p[0],p[1]).concat([h[2]])}))}else g.push(Ft(.35,(p,y,T)=>ws(d,Xt(T),ce(p))));t.guardarProps(),u?(g.push(...this.visita(u,!0,c)),this.itemNovo=u):(g.push(Hn(1.15,[c.aprox])),c.entrada.length?g.push(...c.entrada):g.push(Ft(.5,(p,y,T)=>Xt(T),{ate:c.inicio}))),this.aprox=c.aprox,this.anexar(this.compilar(g,h,this.t,u?{item_:u}:{}));return}let e=this.fimFila(),n=e?e.pos:this.rotina().inicio,i=e?e.t:this.t,r=this.rotina();this.aprox=r.aprox,this.padrao=r.padrao;let o=this.disponiveis(),a=this.proximoNovo(),l=!!a;if(!a&&this.ciclo>0&&o.length&&!this.e.reduz&&this.ultimoBloco!=="item"&&(a=o[this.rodada%o.length],this.rodada++),a){let c=[];c.push(...r.saida),c.push(...this.visita(a,l,r)),this.anexar(this.compilar(c,n,i,{item_:a})),this.ultimoBloco="item";return}this.ultimoBloco="rotina",this.anexar(this.compilar(r.passos,r.inicio,i)),this.ciclo++}anexar(t){this.fila.push(...t.out)}avaliarPasso(t,e,n){let i,r;if(t.tipo==="andar"){let a=Wt(e/t.dur)*t.dist,l=t.segs.length-1;for(let m=0;m<t.segs.length;m++)if(a<=t.segs[m].d0+t.segs[m].L){l=m;break}let c=t.segs[l],h=Wt((a-c.d0)/c.L),f=c.yaw,u=t.segs[l+1],d=t.segs[l-1];u&&c.L*(1-h)<.35&&(f=qo(c.yaw,u.yaw,.5*(1-c.L*(1-h)/.35))),d&&c.L*h<.35&&(f=qo(d.yaw,c.yaw,.5+.5*(c.L*h/.35))),r=[ut(c.a[0],c.b[0],h),ut(c.a[1],c.b[1],h),t.de[2]+Gn(t.de[2],f)],i=S_(a,t.estilo,n,this.e.boneco.esc),t.pensativo&&(i.aR=[1.25,-.25,2.25],i.aL=[.6,-.35,1.5],i.nod+=.18,i.boca="foco",i.sob="tenso"),t.item==="xicara"&&(i.aR=[.6,-.25,1.75]),t.taco!=null&&(i.taco=t.taco),i.item=t.item||"",t.bolas&&(i.bolas=t.bolas)}else{let a=Wt(e/t.dur),l=ce(a);r=[ut(t.de[0],t.ate[0],l),ut(t.de[1],t.ate[1],l),ut(t.de[2],t.ate[2],l)],i=t.pose(a,e,n),t.item&&!i.item&&(i.item=t.item),t.bolas&&!i.bolas&&(i.bolas=t.bolas),t.taco!=null&&i.taco===Vn.taco&&(i.taco=t.taco)}i._fp=["aberta","o","sorriso","triste"].includes(i.boca)||i.olhos==="F"||i.olhos==="Z"||i.sob==="triste";let o=this.padrao||{};for(let a in o)(!(a in i)||i[a]===Vn[a])&&(i[a]=o[a]);return{pose:i,pos:r}}passo(t,e){let n=this.e;t!=null?(this.tForcado==null&&(this.tForcado=0),this.t=t):this.t+=n.reduz?0:e,this.entrar&&this.encher();let i=0;for(;(!this.fila.length||this.fimFila().t<this.t+2)&&i++<40;)this.encher();for(;this.fila.length>1&&this.t>=this.fila[0].t0+this.fila[0].dur;)this.ant=this.fila.shift(),n.decidirProps(this.ant,1,this.ant.dur);let r=this.fila[0];if(!r)return{pose:Xt(this.t),pos:[4.5,3.5,0],s:null,tl:0};let o=this.t,a=Math.min(o-r.t0,r.dur),l=this.avaliarPasso(r,a,o),c=.45;if(this.ant&&a<c){let h=this.avaliarPasso(this.ant,this.ant.dur,o),f=ce(a/c);l.pose=ws(h.pose,l.pose,f),l.pos=[ut(h.pos[0],l.pos[0],f),ut(h.pos[1],l.pos[1],f),h.pos[2]+Gn(h.pos[2],l.pos[2])*f]}return this.itemAtual=r.item_||"",this.ultimaPose=l.pose,l.s=r,l.tl=a,l.k=r.dur?Wt(a/r.dur):1,l}};function dS(s,t){let e=new Do({antialias:!0,alpha:!0,powerPreference:"low-power"});e.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),e.outputColorSpace=an,e.toneMapping=ji,e.shadowMap.enabled=!0,e.shadowMap.type=Ji,s.innerHTML="",s.appendChild(e.domElement);let n=new Hi,i=new ys(e);n.environment=i.fromScene(new Uo,.04).texture,n.environmentIntensity=.38,n.add(new ur("#FFFFFF","#C9B79C",1));let r=new wi("#FFF1DE",2);r.position.set(1.6,3.2,2.4),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-1,right:1,top:2.2,bottom:-.2,near:.5,far:8}),n.add(r);let o=new wi("#C7D7FF",.7);o.position.set(-2,1.5,-1.5),n.add(o);let a=new Me(new fs(.75,48),new oo({opacity:.22}));a.rotation.x=-nt/2,a.receiveShadow=!0,n.add(a);let l=new gc(t.cor,t.icone,t.boneco,t.acessorio);n.add(l.root),l.root.traverse(E=>{E.isMesh&&(E.castShadow=!0)});let c=new Ke(24,3/4,.1,20),h=new xc,f=new _c,u=-.35,d=!1,m=0,_=0,g=0,p=!1,y=performance.now(),T=y,v=()=>{let E=s.clientWidth||200,A=s.clientHeight||260;e.setSize(E,A,!1),c.aspect=E/A,c.updateProjectionMatrix()};v();let b=new ResizeObserver(v);b.observe(s);let S=e.domElement;S.style.touchAction="pan-y",S.addEventListener("pointerdown",E=>{d=!0,m=E.clientX;try{S.setPointerCapture(E.pointerId)}catch{}_=performance.now()}),S.addEventListener("pointermove",E=>{d&&(u+=(E.clientX-m)*.012,m=E.clientX,_=performance.now())}),S.addEventListener("pointerup",()=>{d=!1}),S.addEventListener("pointercancel",()=>{d=!1});function C(){if(g=0,p)return;if(!s.isConnected){x();return}let E=performance.now(),A=window.__ofVitT!=null?window.__ofVitT:(E-y)/1e3,I=Math.min(.05,(E-T)/1e3);T=E,!d&&E-_>2500&&(u+=I*.35);let F=A%12,O;if(F<3.5)O=Xt(A,{olhar:[Math.sin(A*.7)*.6,0]});else if(F<6){let Y=Vt(F,3.5,6,.4);O=Xt(A,{aR:[ut(0,2.6,Y),ut(.12,.5,Y),ut(.2,.9+.35*Math.sin(A*9),Y)],boca:Y>.5?"sorriso":"leve",olhos:Y>.5?"F":"A",boch:.4*Y,nod:-.05*Y,roll:.06*Y})}else if(F<8.5){let Y=Vt(F,6,8.5,.4);O=Xt(A,{aL:[ut(0,1.2,Y),ut(.12,-.2,Y),ut(.2,1.4,Y)],mL:Y,boca:"sorriso",boch:.3,turn:.12*Y,nod:-.04*Y})}else O=Xt(A,{boca:"sorriso",olhos:"A",boch:.25,turn:.15*Math.sin(A*1.2)});l.root.rotation.y=u;let D=l.head.getWorldPosition(new U);O=f.passo(O,{T:A,dt:I,humor:"feliz",cabeca:D,yawCorpo:u,alvos:[{nome:"camera",pos:c.position.clone(),peso:2},{nome:"lado",pos:Mt(Math.sin(u+1)*3,1.4,Math.cos(u+1)*3),peso:1}],legsLivres:!0,nariz:D.clone().add(Mt(Math.sin(u)*.15,-.02,Math.cos(u)*.15))}),O=h.passo(O,I),l.aplicar(O,A,I),l.desenharRosto(f.rosto(O,{T:A,dt:I,humor:"feliz",facePropria:F>=3.5&&F<6}),A);let k=l.esc,W=window.__ofVitCam;W?(c.position.set(0,W[0],W[1]),c.lookAt(0,W[2],0)):(c.position.set(0,1*k,4.2*(.6+.4*k)),c.lookAt(0,.9*k,0)),e.render(n,c),g=requestAnimationFrame(C)}function x(){p||(p=!0,g&&cancelAnimationFrame(g),b.disconnect(),n.traverse(E=>{E.geometry&&E.geometry.dispose()}),e.dispose(),e.domElement.parentNode&&e.domElement.remove())}return g=requestAnimationFrame(C),{atualizar(E){l.setAparencia(E.boneco,E.acessorio),l.setCor(E.cor),E.icone!==t.icone&&l.setIcone(E.icone),t=E},destruir:x}}export{fS as criar,dS as vitrine};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
