var Df=0,Eh=1,Nf=2;var hs=1,Uf=2,Rr=3,Wn=0,dn=1,An=2,$e=0,Xi=1,us=2,Th=3,wh=4,_l=5;var Xn=100,Bf=101,Of=102,zf=103,kf=104,Ls=200,Hf=201,Gf=202,Vf=203,Ah=204,Rh=205,Po=206,Wf=207,Io=208,Xf=209,qf=210,Yf=211,Zf=212,jf=213,Jf=214,Ha=0,Ga=1,Va=2,cr=3,Wa=4,Xa=5,qa=6,Ya=7,yl=0,$f=1,Kf=2,oi=0,Fo=1,Lo=2,Do=3,fs=4,No=5,Uo=6,Bo=7,hh="attached",Qf="detached",Ch=300,ds=301,Ds=302,Ml=303,bl=304,Oo=306,xn=1e3,mi=1001,Za=1002,je=1003,t0=1004;var zo=1005;var un=1006,Sl=1007;var ps=1008;var vn=1009,Ph=1010,Ih=1011,Cr=1012,El=1013,ai=1014,Un=1015,an=1016,Tl=1017,wl=1018,ms=1020,Fh=35902,Lh=35899,Dh=1021,Nh=1022,Sn=1023,vi=1026,Ai=1027,Al=1028,Rl=1029,gs=1030,Cl=1031;var Pl=1033,ko=33776,Ho=33777,Go=33778,Vo=33779,Il=35840,Fl=35841,Ll=35842,Dl=35843,Nl=36196,Ul=37492,Bl=37496,Ol=37488,zl=37489,Wo=37490,kl=37491,Hl=37808,Gl=37809,Vl=37810,Wl=37811,Xl=37812,ql=37813,Yl=37814,Zl=37815,jl=37816,Jl=37817,$l=37818,Kl=37819,Ql=37820,tc=37821,ec=36492,nc=36494,ic=36495,sc=36283,rc=36284,Xo=36285,oc=36286;var to=2300,ja=2301,za=2302,uh=2303,fh=2400,dh=2401,ph=2402;var e0=3200;var Pr=0,n0=1,li="",hn="srgb",eo="srgb-linear",no="linear",Te="srgb";var ka=7680;var i0=519,s0=512,r0=513,o0=514,ac=515,a0=516,l0=517,lc=518,c0=519,Uh=35044;var Bh="300 es",ii=2e3,hr=2001;function Ld(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Dd(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function io(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function h0(){let s=io("canvas");return s.style.display="block",s}var ju={},ur=null;function so(...s){let t="THREE."+s.shift();ur?ur("log",t,...s):console.log(t,...s)}function u0(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function oe(...s){s=u0(s);let t="THREE."+s.shift();if(ur)ur("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function ae(...s){s=u0(s);let t="THREE."+s.shift();if(ur)ur("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Es(...s){let t=s.join(" ");t in ju||(ju[t]=!0,oe(...s))}function f0(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var d0={[Ha]:Ga,[Va]:qa,[Wa]:Ya,[cr]:Xa,[Ga]:Ha,[qa]:Va,[Ya]:Wa,[Xa]:cr},_i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Nc=Math.PI/180,ro=180/Math.PI;function xi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[s&255]+mn[s>>8&255]+mn[s>>16&255]+mn[s>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function ve(s,t,e){return Math.max(t,Math.min(e,s))}function Nd(s,t){return(s%t+t)%t}function Uc(s,t,e){return(1-e)*s+e*t}function pi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Fe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Vh=class Vh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ve(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vh.prototype.isVector2=!0;var vt=Vh,we=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=r[o+0],d=r[o+1],p=r[o+2],v=r[o+3];if(f!==v||l!==u||c!==d||h!==p){let g=l*u+c*d+h*p+f*v;g<0&&(u=-u,d=-d,p=-p,v=-v,g=-g);let m=1-a;if(g<.9995){let b=Math.acos(g),S=Math.sin(b);m=Math.sin(m*b)/S,a=Math.sin(a*b)/S,l=l*m+u*a,c=c*m+d*a,h=h*m+p*a,f=f*m+v*a}else{l=l*m+u*a,c=c*m+d*a,h=h*m+p*a,f=f*m+v*a;let b=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=b,c*=b,h*=b,f*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[o],u=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+h*f+l*d-c*u,t[e+1]=l*p+h*u+c*f-a*d,t[e+2]=c*p+h*d+a*u-l*f,t[e+3]=h*p-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(r/2),u=l(n/2),d=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"YZX":this._x=u*h*f+c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f-u*d*p;break;case"XZY":this._x=u*h*f-c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f+u*d*p;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Wh=class Wh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ju.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ju.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=i+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this.z=ve(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this.z=ve(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ve(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bc.copy(this).projectOnVector(t),this.sub(Bc)}reflect(t){return this.sub(Bc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wh.prototype.isVector3=!0;var U=Wh,Bc=new U,Ju=new we,Xh=class Xh{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],p=n[8],v=i[0],g=i[3],m=i[6],b=i[1],S=i[4],x=i[7],y=i[2],M=i[5],T=i[8];return r[0]=o*v+a*b+l*y,r[3]=o*g+a*S+l*M,r[6]=o*m+a*x+l*T,r[1]=c*v+h*b+f*y,r[4]=c*g+h*S+f*M,r[7]=c*m+h*x+f*T,r[2]=u*v+d*b+p*y,r[5]=u*g+d*S+p*M,r[8]=u*m+d*x+p*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,p=e*f+n*u+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return t[0]=f*v,t[1]=(i*c-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=u*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-a*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Oc.makeScale(t,e)),this}rotate(t){return Es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Oc.makeRotation(-t)),this}translate(t,e){return Es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Oc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Xh.prototype.isMatrix3=!0;var ue=Xh,Oc=new ue,$u=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ku=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ud(){let s={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Te&&(i.r=Hi(i.r),i.g=Hi(i.g),i.b=Hi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Te&&(i.r=lr(i.r),i.g=lr(i.g),i.b=lr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===li?no:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[eo]:{primaries:t,whitePoint:n,transfer:no,toXYZ:$u,fromXYZ:Ku,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:t,whitePoint:n,transfer:Te,toXYZ:$u,fromXYZ:Ku,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),s}var ye=Ud();function Hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function lr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ws,Ja=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ws===void 0&&(Ws=io("canvas")),Ws.width=t.width,Ws.height=t.height;let i=Ws.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ws}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=io("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Hi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hi(e[n]/255)*255):e[n]=Hi(e[n]);return{data:e,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bd=0,fr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=xi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(zc(i[o].image)):r.push(zc(i[o]))}else r=zc(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function zc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ja.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}var Od=0,kc=new U,bn=class s extends _i{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=mi,i=mi,r=un,o=ps,a=Sn,l=vn,c=s.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=xi(),this.name="",this.source=new fr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kc).x}get height(){return this.source.getSize(kc).y}get depth(){return this.source.getSize(kc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){oe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){oe(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ch)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xn:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case Za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xn:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case Za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=Ch;bn.DEFAULT_ANISOTROPY=1;var qh=class qh{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,x=(d+1)/2,y=(m+1)/2,M=(h+u)/4,T=(f+v)/4,_=(p+g)/4;return S>x&&S>y?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=M/n,r=T/n):x>y?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=M/i,r=_/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=T/r,i=_/r),this.set(n,i,r,e),this}let b=Math.sqrt((g-p)*(g-p)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(g-p)/b,this.y=(f-v)/b,this.z=(u-h)/b,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this.z=ve(this.z,t.z,e.z),this.w=ve(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this.z=ve(this.z,t,e),this.w=ve(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ve(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};qh.prototype.isVector4=!0;var Pe=qh,$a=class extends _i{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new bn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new fr(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Je=class extends $a{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},oo=class extends bn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=je,this.minFilter=je,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ka=class extends bn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=je,this.minFilter=je,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var vl=class vl{constructor(t,e,n,i,r,o,a,l,c,h,f,u,d,p,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,f,u,d,p,v,g)}set(t,e,n,i,r,o,a,l,c,h,f,u,d,p,v,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Xs.setFromMatrixColumn(t,0).length(),r=1/Xs.setFromMatrixColumn(t,1).length(),o=1/Xs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=o*h,d=o*f,p=a*h,v=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+p*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,p=c*h,v=c*f;e[0]=u+v*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,p=c*h,v=c*f;e[0]=u-v*a,e[4]=-o*f,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,d=o*f,p=a*h,v=a*f;e[0]=l*h,e[4]=p*c-d,e[8]=u*c+v,e[1]=l*f,e[5]=v*c+u,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,d=o*c,p=a*l,v=a*c;e[0]=l*h,e[4]=v-u*f,e[8]=p*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+p,e[10]=u-v*f}else if(t.order==="XZY"){let u=o*l,d=o*c,p=a*l,v=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+v,e[5]=o*h,e[9]=d*f-p,e[2]=p*f-d,e[6]=a*h,e[10]=v*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zd,t,kd)}lookAt(t,e,n){let i=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),$i.crossVectors(n,Pn),$i.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),$i.crossVectors(n,Pn)),$i.normalize(),da.crossVectors(Pn,$i),i[0]=$i.x,i[4]=da.x,i[8]=Pn.x,i[1]=$i.y,i[5]=da.y,i[9]=Pn.y,i[2]=$i.z,i[6]=da.z,i[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],p=n[2],v=n[6],g=n[10],m=n[14],b=n[3],S=n[7],x=n[11],y=n[15],M=i[0],T=i[4],_=i[8],E=i[12],A=i[1],C=i[5],F=i[9],I=i[13],N=i[2],B=i[6],k=i[10],z=i[14],Q=i[3],H=i[7],Z=i[11],q=i[15];return r[0]=o*M+a*A+l*N+c*Q,r[4]=o*T+a*C+l*B+c*H,r[8]=o*_+a*F+l*k+c*Z,r[12]=o*E+a*I+l*z+c*q,r[1]=h*M+f*A+u*N+d*Q,r[5]=h*T+f*C+u*B+d*H,r[9]=h*_+f*F+u*k+d*Z,r[13]=h*E+f*I+u*z+d*q,r[2]=p*M+v*A+g*N+m*Q,r[6]=p*T+v*C+g*B+m*H,r[10]=p*_+v*F+g*k+m*Z,r[14]=p*E+v*I+g*z+m*q,r[3]=b*M+S*A+x*N+y*Q,r[7]=b*T+S*C+x*B+y*H,r[11]=b*_+S*F+x*k+y*Z,r[15]=b*E+S*I+x*z+y*q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],p=t[3],v=t[7],g=t[11],m=t[15],b=l*d-c*u,S=a*d-c*f,x=a*u-l*f,y=o*d-c*h,M=o*u-l*h,T=o*f-a*h;return e*(v*b-g*S+m*x)-n*(p*b-g*y+m*M)+i*(p*S-v*y+m*T)-r*(p*x-v*M+g*T)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],p=t[12],v=t[13],g=t[14],m=t[15],b=e*a-n*o,S=e*l-i*o,x=e*c-r*o,y=n*l-i*a,M=n*c-r*a,T=i*c-r*l,_=h*v-f*p,E=h*g-u*p,A=h*m-d*p,C=f*g-u*v,F=f*m-d*v,I=u*m-d*g,N=b*I-S*F+x*C+y*A-M*E+T*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/N;return t[0]=(a*I-l*F+c*C)*B,t[1]=(i*F-n*I-r*C)*B,t[2]=(v*T-g*M+m*y)*B,t[3]=(u*M-f*T-d*y)*B,t[4]=(l*A-o*I-c*E)*B,t[5]=(e*I-i*A+r*E)*B,t[6]=(g*x-p*T-m*S)*B,t[7]=(h*T-u*x+d*S)*B,t[8]=(o*F-a*A+c*_)*B,t[9]=(n*A-e*F-r*_)*B,t[10]=(p*M-v*x+m*b)*B,t[11]=(f*x-h*M-d*b)*B,t[12]=(a*E-o*C-l*_)*B,t[13]=(e*C-n*E+i*_)*B,t[14]=(v*S-p*y-g*b)*B,t[15]=(h*y-f*S+u*b)*B,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,p=r*f,v=o*h,g=o*f,m=a*f,b=l*c,S=l*h,x=l*f,y=n.x,M=n.y,T=n.z;return i[0]=(1-(v+m))*y,i[1]=(d+x)*y,i[2]=(p-S)*y,i[3]=0,i[4]=(d-x)*M,i[5]=(1-(u+m))*M,i[6]=(g+b)*M,i[7]=0,i[8]=(p+S)*T,i[9]=(g-b)*T,i[10]=(1-(u+v))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Xs.set(i[0],i[1],i[2]).length(),a=Xs.set(i[4],i[5],i[6]).length(),l=Xs.set(i[8],i[9],i[10]).length();r<0&&(o=-o),ti.copy(this);let c=1/o,h=1/a,f=1/l;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=h,ti.elements[5]*=h,ti.elements[6]*=h,ti.elements[8]*=f,ti.elements[9]*=f,ti.elements[10]*=f,e.setFromRotationMatrix(ti),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=ii,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),p,v;if(l)p=r/(o-r),v=o*r/(o-r);else if(a===ii)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===hr)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=ii,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-i),u=-(e+t)/(e-t),d=-(n+i)/(n-i),p,v;if(l)p=1/(o-r),v=o/(o-r);else if(a===ii)p=-2/(o-r),v=-(o+r)/(o-r);else if(a===hr)p=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};vl.prototype.isMatrix4=!0;var he=vl,Xs=new U,ti=new he,zd=new U(0,0,0),kd=new U(1,1,1),$i=new U,da=new U,Pn=new U,Qu=new he,tf=new we,fn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tf.setFromEuler(this),this.setFromQuaternion(tf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER="XYZ";var dr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Hd=0,ef=new U,qs=new we,Ni=new he,pa=new U,Hr=new U,Gd=new U,Vd=new we,nf=new U(1,0,0),sf=new U(0,1,0),rf=new U(0,0,1),of={type:"added"},Wd={type:"removed"},Ys={type:"childadded",child:null},Hc={type:"childremoved",child:null},Le=class s extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new U,e=new fn,n=new we,i=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new he},normalMatrix:{value:new ue}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qs.setFromAxisAngle(t,e),this.quaternion.multiply(qs),this}rotateOnWorldAxis(t,e){return qs.setFromAxisAngle(t,e),this.quaternion.premultiply(qs),this}rotateX(t){return this.rotateOnAxis(nf,t)}rotateY(t){return this.rotateOnAxis(sf,t)}rotateZ(t){return this.rotateOnAxis(rf,t)}translateOnAxis(t,e){return ef.copy(t).applyQuaternion(this.quaternion),this.position.add(ef.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nf,t)}translateY(t){return this.translateOnAxis(sf,t)}translateZ(t){return this.translateOnAxis(rf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?pa.copy(t):pa.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Hr,pa,this.up):Ni.lookAt(pa,Hr,this.up),this.quaternion.setFromRotationMatrix(Ni),i&&(Ni.extractRotation(i.matrixWorld),qs.setFromRotationMatrix(Ni),this.quaternion.premultiply(qs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(of),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null):ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wd),Hc.child=t,this.dispatchEvent(Hc),Hc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(of),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,t,Gd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,Vd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Le.DEFAULT_UP=new U(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wt=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xd={type:"move"},pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&u>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xd)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},p0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},ma={h:0,s:0,l:0};function Gc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ie=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ye.workingColorSpace){return this.r=t,this.g=e,this.b=n,ye.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ye.workingColorSpace){if(t=Nd(t,1),e=ve(e,0,1),n=ve(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Gc(o,r,t+1/3),this.g=Gc(o,r,t),this.b=Gc(o,r,t-1/3)}return ye.colorSpaceToWorking(this,i),this}setStyle(t,e=hn){function n(r){r!==void 0&&parseFloat(r)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:oe("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){let n=p0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}copyLinearToSRGB(t){return this.r=lr(t.r),this.g=lr(t.g),this.b=lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return ye.workingToColorSpace(gn.copy(this),t),Math.round(ve(gn.r*255,0,255))*65536+Math.round(ve(gn.g*255,0,255))*256+Math.round(ve(gn.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.workingToColorSpace(gn.copy(this),e);let n=gn.r,i=gn.g,r=gn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ye.workingColorSpace){return ye.workingToColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=hn){ye.workingToColorSpace(gn.copy(this),t);let e=gn.r,n=gn.g,i=gn.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ki),this.setHSL(Ki.h+t,Ki.s+e,Ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ki),t.getHSL(ma);let n=Uc(Ki.h,ma.h,e),i=Uc(Ki.s,ma.s,e),r=Uc(Ki.l,ma.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new ie;ie.NAMES=p0;var ns=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ei=new U,Ui=new U,Vc=new U,Bi=new U,Zs=new U,js=new U,af=new U,Wc=new U,Xc=new U,qc=new U,Yc=new Pe,Zc=new Pe,jc=new Pe,ki=class s{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ei.subVectors(t,e),i.cross(ei);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ei.subVectors(i,e),Ui.subVectors(n,e),Vc.subVectors(t,e);let o=ei.dot(ei),a=ei.dot(Ui),l=ei.dot(Vc),c=Ui.dot(Ui),h=Ui.dot(Vc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bi.x),l.addScaledVector(o,Bi.y),l.addScaledVector(a,Bi.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Yc.setScalar(0),Zc.setScalar(0),jc.setScalar(0),Yc.fromBufferAttribute(t,e),Zc.fromBufferAttribute(t,n),jc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Yc,r.x),o.addScaledVector(Zc,r.y),o.addScaledVector(jc,r.z),o}static isFrontFacing(t,e,n,i){return ei.subVectors(n,e),Ui.subVectors(t,e),ei.cross(Ui).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ei.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ei.cross(Ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Zs.subVectors(i,n),js.subVectors(r,n),Wc.subVectors(t,n);let l=Zs.dot(Wc),c=js.dot(Wc);if(l<=0&&c<=0)return e.copy(n);Xc.subVectors(t,i);let h=Zs.dot(Xc),f=js.dot(Xc);if(h>=0&&f<=h)return e.copy(i);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Zs,o);qc.subVectors(t,r);let d=Zs.dot(qc),p=js.dot(qc);if(p>=0&&d<=p)return e.copy(r);let v=d*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(js,a);let g=h*p-d*f;if(g<=0&&f-h>=0&&d-p>=0)return af.subVectors(r,i),a=(f-h)/(f-h+(d-p)),e.copy(i).addScaledVector(af,a);let m=1/(g+v+u);return o=v*m,a=u*m,e.copy(n).addScaledVector(Zs,o).addScaledVector(js,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},si=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ni):ni.fromBufferAttribute(r,o),ni.applyMatrix4(t.matrixWorld),this.expandByPoint(ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ga.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ga.copy(n.boundingBox)),ga.applyMatrix4(t.matrixWorld),this.union(ga)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ni),ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gr),xa.subVectors(this.max,Gr),Js.subVectors(t.a,Gr),$s.subVectors(t.b,Gr),Ks.subVectors(t.c,Gr),Qi.subVectors($s,Js),ts.subVectors(Ks,$s),ys.subVectors(Js,Ks);let e=[0,-Qi.z,Qi.y,0,-ts.z,ts.y,0,-ys.z,ys.y,Qi.z,0,-Qi.x,ts.z,0,-ts.x,ys.z,0,-ys.x,-Qi.y,Qi.x,0,-ts.y,ts.x,0,-ys.y,ys.x,0];return!Jc(e,Js,$s,Ks,xa)||(e=[1,0,0,0,1,0,0,0,1],!Jc(e,Js,$s,Ks,xa))?!1:(va.crossVectors(Qi,ts),e=[va.x,va.y,va.z],Jc(e,Js,$s,Ks,xa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Oi=[new U,new U,new U,new U,new U,new U,new U,new U],ni=new U,ga=new si,Js=new U,$s=new U,Ks=new U,Qi=new U,ts=new U,ys=new U,Gr=new U,xa=new U,va=new U,Ms=new U;function Jc(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ms.fromArray(s,r);let a=i.x*Math.abs(Ms.x)+i.y*Math.abs(Ms.y)+i.z*Math.abs(Ms.z),l=t.dot(Ms),c=e.dot(Ms),h=n.dot(Ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var tn=new U,_a=new vt,qd=0,nn=class extends _i{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Uh,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_a.fromBufferAttribute(this,e),_a.applyMatrix3(t),this.setXY(e,_a.x,_a.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),i=Fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),i=Fe(i,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Gi=class extends nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ao=class extends nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var qt=class extends nn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Yd=new si,Vr=new U,$c=new U,yi=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Yd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vr.subVectors(t,this.center);let e=Vr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Vr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($c.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vr.copy(t.center).add($c)),this.expandByPoint(Vr.copy(t.center).sub($c))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Zd=0,Hn=new he,Kc=new Le,Qs=new U,In=new si,Wr=new si,on=new U,_e=class s extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ld(t)?ao:Gi)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ue().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Hn.makeRotationFromQuaternion(t),this.applyMatrix4(Hn),this}rotateX(t){return Hn.makeRotationX(t),this.applyMatrix4(Hn),this}rotateY(t){return Hn.makeRotationY(t),this.applyMatrix4(Hn),this}rotateZ(t){return Hn.makeRotationZ(t),this.applyMatrix4(Hn),this}translate(t,e,n){return Hn.makeTranslation(t,e,n),this.applyMatrix4(Hn),this}scale(t,e,n){return Hn.makeScale(t,e,n),this.applyMatrix4(Hn),this}lookAt(t){return Kc.lookAt(t),Kc.updateMatrix(),this.applyMatrix4(Kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Wr.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(In.min,Wr.min),In.expandByPoint(on),on.addVectors(In.max,Wr.max),In.expandByPoint(on)):(In.expandByPoint(Wr.min),In.expandByPoint(Wr.max))}In.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)on.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(on));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)on.fromBufferAttribute(a,c),l&&(Qs.fromBufferAttribute(t,c),on.add(Qs)),i=Math.max(i,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new nn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new U,l[_]=new U;let c=new U,h=new U,f=new U,u=new vt,d=new vt,p=new vt,v=new U,g=new U;function m(_,E,A){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,A),u.fromBufferAttribute(r,_),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,A),h.sub(c),f.sub(c),d.sub(u),p.sub(u);let C=1/(d.x*p.y-p.x*d.y);isFinite(C)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(C),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(C),a[_].add(v),a[E].add(v),a[A].add(v),l[_].add(g),l[E].add(g),l[A].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let _=0,E=b.length;_<E;++_){let A=b[_],C=A.start,F=A.count;for(let I=C,N=C+F;I<N;I+=3)m(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let S=new U,x=new U,y=new U,M=new U;function T(_){y.fromBufferAttribute(i,_),M.copy(y);let E=a[_];S.copy(E),S.sub(y.multiplyScalar(y.dot(E))).normalize(),x.crossVectors(M,E);let C=x.dot(l[_])<0?-1:1;o.setXYZW(_,S.x,S.y,S.z,C)}for(let _=0,E=b.length;_<E;++_){let A=b[_],C=A.start,F=A.count;for(let I=C,N=C+F;I<N;I+=3)T(t.getX(I+0)),T(t.getX(I+1)),T(t.getX(I+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,f=new U;if(t)for(let u=0,d=t.count;u<d;u+=3){let p=t.getX(u+0),v=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,p=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*h;for(let m=0;m<h;m++)u[p++]=c[d++]}return new nn(u,h,f)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},lo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Uh,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Mn=new U,mr=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyMatrix4(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyNormalMatrix(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.transformDirection(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),i=Fe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),i=Fe(i,this.array),r=Fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){so("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new nn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){so("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qc=new U,jd=new U,Jd=new ue,Fn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Qc.subVectors(n,e).cross(jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Qc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Jd.getNormalMatrix(t),i=this.coplanarPoint(Qc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},$d=0,Gn=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=Xi,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ah,this.blendDst=Rh,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=i0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ka,this.stencilZFail=ka,this.stencilZPass=ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){oe(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){oe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ie().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Fn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new vt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new vt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Mi=class extends Gn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},tr,Xr=new U,er=new U,nr=new U,ir=new vt,qr=new vt,m0=new he,ya=new U,Yr=new U,Ma=new U,lf=new vt,th=new vt,cf=new vt,Vi=class extends Le{constructor(t=new Mi){if(super(),this.isSprite=!0,this.type="Sprite",tr===void 0){tr=new _e;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new lo(e,5);tr.setIndex([0,1,2,0,2,3]),tr.setAttribute("position",new mr(n,3,0,!1)),tr.setAttribute("uv",new mr(n,2,3,!1))}this.geometry=tr,this.material=t,this.center=new vt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ae('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),er.setFromMatrixScale(this.matrixWorld),m0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),nr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&er.multiplyScalar(-nr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;ba(ya.set(-.5,-.5,0),nr,o,er,i,r),ba(Yr.set(.5,-.5,0),nr,o,er,i,r),ba(Ma.set(.5,.5,0),nr,o,er,i,r),lf.set(0,0),th.set(1,0),cf.set(1,1);let a=t.ray.intersectTriangle(ya,Yr,Ma,!1,Xr);if(a===null&&(ba(Yr.set(-.5,.5,0),nr,o,er,i,r),th.set(0,1),a=t.ray.intersectTriangle(ya,Ma,Yr,!1,Xr),a===null))return;let l=t.ray.origin.distanceTo(Xr);l<t.near||l>t.far||e.push({distance:l,point:Xr.clone(),uv:ki.getInterpolation(Xr,ya,Yr,Ma,lf,th,cf,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ba(s,t,e,n,i,r){ir.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(qr.x=r*ir.x-i*ir.y,qr.y=i*ir.x+r*ir.y):qr.copy(ir),s.copy(t),s.x+=qr.x,s.y+=qr.y,s.applyMatrix4(m0)}var zi=new U,eh=new U,Sa=new U,Ea=new U,gr=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zi.copy(this.origin).addScaledVector(this.direction,e),zi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){eh.copy(t).add(e).multiplyScalar(.5),Sa.copy(e).sub(t).normalize(),Ea.copy(this.origin).sub(eh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Sa),a=Ea.dot(this.direction),l=-Ea.dot(Sa),c=Ea.lengthSq(),h=Math.abs(1-o*o),f,u,d,p;if(h>0)if(f=o*l-a,u=o*a-l,p=r*h,f>=0)if(u>=-p)if(u<=p){let v=1/h;f*=v,u*=v,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(eh).addScaledVector(Sa,u),d}intersectSphere(t,e){if(t.radius<0)return null;zi.subVectors(t.center,this.origin);let n=zi.dot(this.direction),i=zi.dot(zi)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,zi)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=t.x-o.x,u=t.y-o.y,d=t.z-o.z,p=e.x-o.x,v=e.y-o.y,g=e.z-o.z,m=n.x-o.x,b=n.y-o.y,S=n.z-o.z,x=Math.abs(l),y=Math.abs(c),M=Math.abs(h),T,_,E,A,C,F,I,N,B,k,z,Q;if(x>=y&&x>=M?(E=l,F=f,B=p,Q=m,l>=0?(T=c,_=h,A=u,C=d,I=v,N=g,k=b,z=S):(T=h,_=c,A=d,C=u,I=g,N=v,k=S,z=b)):y>=M?(E=c,F=u,B=v,Q=b,c>=0?(T=h,_=l,A=d,C=f,I=g,N=p,k=S,z=m):(T=l,_=h,A=f,C=d,I=p,N=g,k=m,z=S)):(E=h,F=d,B=g,Q=S,h>=0?(T=l,_=c,A=f,C=u,I=p,N=v,k=m,z=b):(T=c,_=l,A=u,C=f,I=v,N=p,k=b,z=m)),E===0)return null;let H=T/E,Z=_/E,q=1/E,gt=A-H*F,St=C-Z*F,Y=I-H*B,$=N-Z*B,dt=k-H*Q,X=z-Z*Q,K=dt*$-X*Y,P=gt*X-St*dt,L=Y*St-$*gt;if(i){if(K<0||P<0||L<0)return null}else if((K<0||P<0||L<0)&&(K>0||P>0||L>0))return null;let V=K+P+L;if(V===0)return null;let ot=q*(K*F+P*B+L*Q);return(V>0?ot<0:ot>0)?null:this.at(ot/V,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ze=class extends Gn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},hf=new he,bs=new gr,Ta=new yi,uf=new U,wa=new U,Aa=new U,Ra=new U,nh=new U,Ca=new U,ff=new U,Pa=new U,be=class extends Le{constructor(t=new _e,e=new ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Ca.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(nh.fromBufferAttribute(f,t),o?Ca.addScaledVector(nh,h):Ca.addScaledVector(nh.sub(e),h))}e.add(Ca)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(r),bs.copy(t.ray).recast(t.near),!(Ta.containsPoint(bs.origin)===!1&&(bs.intersectSphere(Ta,uf)===null||bs.origin.distanceToSquared(uf)>(t.far-t.near)**2))&&(hf.copy(r).invert(),bs.copy(t.ray).applyMatrix4(hf),!(n.boundingBox!==null&&bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bs)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=u.length;p<v;p++){let g=u[p],m=o[g.materialIndex],b=Math.max(g.start,d.start),S=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let x=b,y=S;x<y;x+=3){let M=a.getX(x),T=a.getX(x+1),_=a.getX(x+2);i=Ia(this,m,t,n,c,h,f,M,T,_),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){let b=a.getX(g),S=a.getX(g+1),x=a.getX(g+2);i=Ia(this,o,t,n,c,h,f,b,S,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=u.length;p<v;p++){let g=u[p],m=o[g.materialIndex],b=Math.max(g.start,d.start),S=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=b,y=S;x<y;x+=3){let M=x,T=x+1,_=x+2;i=Ia(this,m,t,n,c,h,f,M,T,_),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){let b=g,S=g+1,x=g+2;i=Ia(this,o,t,n,c,h,f,b,S,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Kd(s,t,e,n,i,r,o,a){let l;if(t.side===dn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Wn,a),l===null)return null;Pa.copy(a),Pa.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Pa);return c<e.near||c>e.far?null:{distance:c,point:Pa.clone(),object:s}}function Ia(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,wa),s.getVertexPosition(l,Aa),s.getVertexPosition(c,Ra);let h=Kd(s,t,e,n,wa,Aa,Ra,ff);if(h){let f=new U;ki.getBarycoord(ff,wa,Aa,Ra,f),i&&(h.uv=ki.getInterpolatedAttribute(i,a,l,c,f,new vt)),r&&(h.uv1=ki.getInterpolatedAttribute(r,a,l,c,f,new vt)),o&&(h.normal=ki.getInterpolatedAttribute(o,a,l,c,f,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new U,materialIndex:0};ki.getNormal(wa,Aa,Ra,u.normal),h.face=u,h.barycoord=f}return h}var Zr=new Pe,df=new Pe,pf=new Pe,Qd=new Pe,mf=new he,Fa=new U,ih=new yi,gf=new he,sh=new gr,is=class extends be{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=hh,this.bindMatrix=new he,this.bindMatrixInverse=new he,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new si),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Fa),this.boundingBox.expandByPoint(Fa)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yi),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Fa),this.boundingSphere.expandByPoint(Fa)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ih.copy(this.boundingSphere),ih.applyMatrix4(i),t.ray.intersectsSphere(ih)!==!1&&(gf.copy(i).invert(),sh.copy(t.ray).applyMatrix4(gf),!(this.boundingBox!==null&&sh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,sh)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new Pe,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===hh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Qf?this.bindMatrixInverse.copy(this.bindMatrix).invert():oe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;df.fromBufferAttribute(i.attributes.skinIndex,t),pf.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(Zr.copy(e),e.set(0,0,0,0)):(Zr.set(...e,1),e.set(0,0,0)),Zr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=pf.getComponent(r);if(o!==0){let a=df.getComponent(r);mf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Qd.copy(Zr).applyMatrix4(mf),o)}}return e.isVector4&&(e.w=Zr.w),e.applyMatrix4(this.bindMatrixInverse)}},Ln=class extends Le{constructor(){super(),this.isBone=!0,this.type="Bone"}},bi=class extends bn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=je,h=je,f,u){super(null,o,a,l,c,h,i,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},xf=new he,tp=new he,Ts=class s{constructor(t=[],e=[]){this.uuid=xi(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){oe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new he)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new he;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:tp;xf.multiplyMatrices(a,e[r]),xf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new bi(e,t,t,Sn,Un);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],o=e[r];o===void 0&&(oe("Skeleton: No bone found with UUID:",r),o=new Ln),this.bones.push(o),this.boneInverses.push(new he().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let o=e[i];t.bones.push(o.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}},xr=class extends nn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},sr=new he,vf=new he,La=[],_f=new si,ep=new he,jr=new be,Jr=new yi,ws=class extends be{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new xr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ep)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new si),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,sr),_f.copy(t.boundingBox).applyMatrix4(sr),this.boundingBox.union(_f)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,sr),Jr.copy(t.boundingSphere).applyMatrix4(sr),this.boundingSphere.union(Jr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(jr.geometry=this.geometry,jr.material=this.material,jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jr.copy(this.boundingSphere),Jr.applyMatrix4(n),t.ray.intersectsSphere(Jr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,sr),vf.multiplyMatrices(n,sr),jr.matrixWorld=vf,jr.raycast(t,La);for(let o=0,a=La.length;o<a;o++){let l=La[o];l.instanceId=r,l.object=this,e.push(l)}La.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new xr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new bi(new Float32Array(i*this.count),i,this.count,Al,Un));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ss=new yi,np=new vt(.5,.5),Da=new U,vr=class{constructor(t=new Fn,e=new Fn,n=new Fn,i=new Fn,r=new Fn,o=new Fn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],p=r[8],v=r[9],g=r[10],m=r[11],b=r[12],S=r[13],x=r[14],y=r[15];if(i[0].setComponents(c-o,d-h,m-p,y-b).normalize(),i[1].setComponents(c+o,d+h,m+p,y+b).normalize(),i[2].setComponents(c+a,d+f,m+v,y+S).normalize(),i[3].setComponents(c-a,d-f,m-v,y-S).normalize(),n)i[4].setComponents(l,u,g,x).normalize(),i[5].setComponents(c-l,d-u,m-g,y-x).normalize();else if(i[4].setComponents(c-l,d-u,m-g,y-x).normalize(),e===ii)i[5].setComponents(c+l,d+u,m+g,y+x).normalize();else if(e===hr)i[5].setComponents(l,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(t){Ss.center.set(0,0,0);let e=np.distanceTo(t.center);return Ss.radius=.7071067811865476+e,Ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Da.x=i.normal.x>0?t.max.x:t.min.x,Da.y=i.normal.y>0?t.max.y:t.min.y,Da.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Da)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var co=class extends bn{constructor(t=[],e=ds,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},_r=class extends bn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Si=class extends bn{constructor(t,e,n=ai,i,r,o,a=je,l=je,c,h=vi,f=1){if(h!==vi&&h!==Ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Qa=class extends Si{constructor(t,e=ai,n=ds,i,r,o=je,a=je,l,c=vi){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ho=class extends bn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Vn=class s extends _e{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(f,2));function p(v,g,m,b,S,x,y,M,T,_,E){let A=x/T,C=y/_,F=x/2,I=y/2,N=M/2,B=T+1,k=_+1,z=0,Q=0,H=new U;for(let Z=0;Z<k;Z++){let q=Z*C-I;for(let gt=0;gt<B;gt++){let St=gt*A-F;H[v]=St*b,H[g]=q*S,H[m]=N,c.push(H.x,H.y,H.z),H[v]=0,H[g]=0,H[m]=M>0?1:-1,h.push(H.x,H.y,H.z),f.push(gt/T),f.push(1-Z/_),z+=1}}for(let Z=0;Z<_;Z++)for(let q=0;q<T;q++){let gt=u+q+B*Z,St=u+q+B*(Z+1),Y=u+(q+1)+B*(Z+1),$=u+(q+1)+B*Z;l.push(gt,St,$),l.push(St,Y,$),Q+=6}a.addGroup(d,Q,E),d+=Q,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},As=class s extends _e{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,f=Math.PI/2*t,u=e,d=2*f+u,p=n*2+r,v=i+1,g=new U,m=new U;for(let b=0;b<=p;b++){let S=0,x=0,y=0,M=0;if(b<=n){let E=b/n,A=E*Math.PI/2;x=-h-t*Math.cos(A),y=t*Math.sin(A),M=-t*Math.cos(A),S=E*f}else if(b<=n+r){let E=(b-n)/r;x=-h+E*e,y=t,M=0,S=f+E*u}else{let E=(b-n-r)/n,A=E*Math.PI/2;x=h+t*Math.sin(A),y=t*Math.cos(A),M=t*Math.sin(A),S=f+u+E*f}let T=Math.max(0,Math.min(1,S/d)),_=0;b===0?_=.5/i:b===p&&(_=-.5/i);for(let E=0;E<=i;E++){let A=E/i,C=A*Math.PI*2,F=Math.sin(C),I=Math.cos(C);m.x=-y*I,m.y=x,m.z=y*F,a.push(m.x,m.y,m.z),g.set(-y*I,M,y*F),g.normalize(),l.push(g.x,g.y,g.z),c.push(A+_,T)}if(b>0){let E=(b-1)*v;for(let A=0;A<i;A++){let C=E+A,F=E+A+1,I=b*v+A,N=b*v+A+1;o.push(C,F,I),o.push(F,N,I)}}}this.setIndex(o),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Rs=class s extends _e{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new U,h=new vt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=n+f/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(a,3)),this.setAttribute("uv",new qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ri=class s extends _e{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],f=[],u=[],d=[],p=0,v=[],g=n/2,m=0;b(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new qt(f,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(d,2));function b(){let x=new U,y=new U,M=0,T=(e-t)/n;for(let _=0;_<=r;_++){let E=[],A=_/r,C=A*(e-t)+t;for(let F=0;F<=i;F++){let I=F/i,N=I*l+a,B=Math.sin(N),k=Math.cos(N);y.x=C*B,y.y=-A*n+g,y.z=C*k,f.push(y.x,y.y,y.z),x.set(B,T,k).normalize(),u.push(x.x,x.y,x.z),d.push(I,1-A),E.push(p++)}v.push(E)}for(let _=0;_<i;_++)for(let E=0;E<r;E++){let A=v[E][_],C=v[E+1][_],F=v[E+1][_+1],I=v[E][_+1];(t>0||E!==0)&&(h.push(A,C,I),M+=3),(e>0||E!==r-1)&&(h.push(C,F,I),M+=3)}c.addGroup(m,M,0),m+=M}function S(x){let y=p,M=new vt,T=new U,_=0,E=x===!0?t:e,A=x===!0?1:-1;for(let F=1;F<=i;F++)f.push(0,g*A,0),u.push(0,A,0),d.push(.5,.5),p++;let C=p;for(let F=0;F<=i;F++){let N=F/i*l+a,B=Math.cos(N),k=Math.sin(N);T.x=E*k,T.y=g*A,T.z=E*B,f.push(T.x,T.y,T.z),u.push(0,A,0),M.x=B*.5+.5,M.y=k*.5*A+.5,d.push(M.x,M.y),p++}for(let F=0;F<i;F++){let I=y+F,N=C+F;x===!0?h.push(N,N+1,I):h.push(N+1,N,I),_+=3}c.addGroup(m,_,x===!0?1:2),m+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ei=class s extends ri{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},tl=class s extends _e{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(r.slice(),3)),this.setAttribute("uv",new qt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let S=new U,x=new U,y=new U;for(let M=0;M<e.length;M+=3)d(e[M+0],S),d(e[M+1],x),d(e[M+2],y),l(S,x,y,b)}function l(b,S,x,y){let M=y+1,T=[];for(let _=0;_<=M;_++){T[_]=[];let E=b.clone().lerp(x,_/M),A=S.clone().lerp(x,_/M),C=M-_;for(let F=0;F<=C;F++)F===0&&_===M?T[_][F]=E:T[_][F]=E.clone().lerp(A,F/C)}for(let _=0;_<M;_++)for(let E=0;E<2*(M-_)-1;E++){let A=Math.floor(E/2);E%2===0?(u(T[_][A+1]),u(T[_+1][A]),u(T[_][A])):(u(T[_][A+1]),u(T[_+1][A+1]),u(T[_+1][A]))}}function c(b){let S=new U;for(let x=0;x<r.length;x+=3)S.x=r[x+0],S.y=r[x+1],S.z=r[x+2],S.normalize().multiplyScalar(b),r[x+0]=S.x,r[x+1]=S.y,r[x+2]=S.z}function h(){let b=new U;for(let S=0;S<r.length;S+=3){b.x=r[S+0],b.y=r[S+1],b.z=r[S+2];let x=g(b)/2/Math.PI+.5,y=m(b)/Math.PI+.5;o.push(x,1-y)}p(),f()}function f(){for(let b=0;b<o.length;b+=6){let S=o[b+0],x=o[b+2],y=o[b+4],M=Math.max(S,x,y),T=Math.min(S,x,y);M>.9&&T<.1&&(S<.2&&(o[b+0]+=1),x<.2&&(o[b+2]+=1),y<.2&&(o[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function d(b,S){let x=b*3;S.x=t[x+0],S.y=t[x+1],S.z=t[x+2]}function p(){let b=new U,S=new U,x=new U,y=new U,M=new vt,T=new vt,_=new vt;for(let E=0,A=0;E<r.length;E+=9,A+=6){b.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),M.set(o[A+0],o[A+1]),T.set(o[A+2],o[A+3]),_.set(o[A+4],o[A+5]),y.copy(b).add(S).add(x).divideScalar(3);let C=g(y);v(M,A+0,b,C),v(T,A+2,S,C),v(_,A+4,x,C)}}function v(b,S,x,y){y<0&&b.x===1&&(o[S]=b.x-1),x.x===0&&x.z===0&&(o[S]=y/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var Dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){oe("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],u=n[i+1]-h,d=(o-h)/u;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new vt:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,i=[],r=[],o=[],a=new U,l=new he;for(let d=0;d<=t;d++){let p=d/t;i[d]=this.getTangentAt(p,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ve(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(ve(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ss=class extends Dn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new vt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},el=class extends ss{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Oh(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,i(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var yf=new U,Mf=new U,rh=new Oh,oh=new Oh,ah=new Oh,rs=class extends Dn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new U){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Mf.subVectors(i[0],i[1]).add(i[0]),c=Mf);let f=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(yf.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=yf),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),rh.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,p,v,g),oh.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,p,v,g),ah.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,p,v,g)}else this.curveType==="catmullrom"&&(rh.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),oh.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),ah.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(rh.calc(l),oh.calc(l),ah.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new U().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function bf(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function ip(s,t){let e=1-s;return e*e*t}function sp(s,t){return 2*(1-s)*s*t}function rp(s,t){return s*s*t}function Kr(s,t,e,n){return ip(s,t)+sp(s,e)+rp(s,n)}function op(s,t){let e=1-s;return e*e*e*t}function ap(s,t){let e=1-s;return 3*e*e*s*t}function lp(s,t){return 3*(1-s)*s*s*t}function cp(s,t){return s*s*s*t}function Qr(s,t,e,n,i){return op(s,t)+ap(s,e)+lp(s,n)+cp(s,i)}var uo=class extends Dn{constructor(t=new vt,e=new vt,n=new vt,i=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new vt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Qr(t,i.x,r.x,o.x,a.x),Qr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},nl=class extends Dn{constructor(t=new U,e=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new U){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Qr(t,i.x,r.x,o.x,a.x),Qr(t,i.y,r.y,o.y,a.y),Qr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fo=class extends Dn{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yr=class extends Dn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},po=class extends Dn{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Kr(t,i.x,r.x,o.x),Kr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mo=class extends Dn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Kr(t,i.x,r.x,o.x),Kr(t,i.y,r.y,o.y),Kr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cs=class extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(bf(a,l.x,c.x,h.x,f.x),bf(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new vt().fromArray(i))}return this}},il=Object.freeze({__proto__:null,ArcCurve:el,CatmullRomCurve3:rs,CubicBezierCurve:uo,CubicBezierCurve3:nl,EllipseCurve:ss,LineCurve:fo,LineCurve3:yr,QuadraticBezierCurve:po,QuadraticBezierCurve3:mo,SplineCurve:Cs}),Mr=class extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new il[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new il[i.type]().fromJSON(i))}return this}},go=class extends Mr{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new fo(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new po(this.currentPoint.clone(),new vt(t,e),new vt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new uo(this.currentPoint.clone(),new vt(t,e),new vt(n,i),new vt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Cs(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new ss(t,e,n,i,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ti=class extends go{constructor(t){super(t),this.uuid=xi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new go().fromJSON(i))}return this}};function hp(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=g0(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=mp(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,f=l;for(let u=e;u<i;u+=e){let d=s[u],p=s[u+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>f&&(f=p)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return xo(r,o,e,a,l,c,0),o}function g0(s,t,e,n,i){let r;if(i===wp(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=Sf(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Sf(o/n|0,s[o],s[o+1],r);return r&&br(r,r.next)&&(_o(r),r=r.next),r}function Ps(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(br(e,e.next)||He(e.prev,e,e.next)===0)){if(_o(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function xo(s,t,e,n,i,r,o){if(!s)return;!o&&r&&yp(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?fp(s,n,i,r):up(s)){t.push(l.i,s.i,c.i),_o(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=dp(Ps(s),t),xo(s,t,e,n,i,r,2)):o===2&&pp(s,t,e,n,i,r):xo(Ps(s),t,e,n,i,r,1);break}}}function up(s){let t=s.prev,e=s,n=s.next;if(He(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),f=Math.min(a,l,c),u=Math.max(i,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=f&&p.y<=d&&$r(i,a,r,l,o,c,p.x,p.y)&&He(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function fp(s,t,e,n){let i=s.prev,r=s,o=s.next;if(He(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,f=r.y,u=o.y,d=Math.min(a,l,c),p=Math.min(h,f,u),v=Math.max(a,l,c),g=Math.max(h,f,u),m=mh(d,p,t,e,n),b=mh(v,g,t,e,n),S=s.prevZ,x=s.nextZ;for(;S&&S.z>=m&&x&&x.z<=b;){if(S.x>=d&&S.x<=v&&S.y>=p&&S.y<=g&&S!==i&&S!==o&&$r(a,h,l,f,c,u,S.x,S.y)&&He(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=d&&x.x<=v&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&$r(a,h,l,f,c,u,x.x,x.y)&&He(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=m;){if(S.x>=d&&S.x<=v&&S.y>=p&&S.y<=g&&S!==i&&S!==o&&$r(a,h,l,f,c,u,S.x,S.y)&&He(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=b;){if(x.x>=d&&x.x<=v&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&$r(a,h,l,f,c,u,x.x,x.y)&&He(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function dp(s,t){let e=s;do{let n=e.prev,i=e.next.next;!br(n,i)&&v0(n,e,e.next,i)&&vo(n,i)&&vo(i,n)&&(t.push(n.i,e.i,i.i),_o(e),_o(e.next),e=s=i),e=e.next}while(e!==s);return Ps(e)}function pp(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Sp(o,a)){let l=_0(o,a);o=Ps(o,o.next),l=Ps(l,l.next),xo(o,t,e,n,i,r,0),xo(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function mp(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=g0(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(bp(c))}i.sort(gp);for(let r=0;r<i.length;r++)e=xp(i[r],e);return e}function gp(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function xp(s,t){let e=vp(s,t);if(!e)return t;let n=_0(e,s);return Ps(n,n.next),Ps(e,e.next)}function vp(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(br(s,e))return e;do{if(br(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let f=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&x0(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let f=Math.abs(i-e.y)/(n-e.x);vo(e,s)&&(f<h||f===h&&(e.x>o.x||e.x===o.x&&_p(o,e)))&&(o=e,h=f)}e=e.next}while(e!==a);return o}function _p(s,t){return He(s.prev,s,t.prev)<0&&He(t.next,s,s.next)<0}function yp(s,t,e,n){let i=s;do i.z===0&&(i.z=mh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Mp(i)}function Mp(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function mh(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function bp(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function x0(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function $r(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&x0(s,t,e,n,i,r,o,a)}function Sp(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Ep(s,t)&&(vo(s,t)&&vo(t,s)&&Tp(s,t)&&(He(s.prev,s,t.prev)||He(s,t.prev,t))||br(s,t)&&He(s.prev,s,s.next)>0&&He(t.prev,t,t.next)>0)}function He(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function br(s,t){return s.x===t.x&&s.y===t.y}function v0(s,t,e,n){let i=Ua(He(s,t,e)),r=Ua(He(s,t,n)),o=Ua(He(e,n,s)),a=Ua(He(e,n,t));return!!(i!==r&&o!==a||i===0&&Na(s,e,t)||r===0&&Na(s,n,t)||o===0&&Na(e,s,n)||a===0&&Na(e,t,n))}function Na(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ua(s){return s>0?1:s<0?-1:0}function Ep(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&v0(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function vo(s,t){return He(s.prev,s,s.next)<0?He(s,t,s.next)>=0&&He(s,s.prev,t)>=0:He(s,t,s.prev)<0||He(s,s.next,t)<0}function Tp(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function _0(s,t){let e=gh(s.i,s.x,s.y),n=gh(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Sf(s,t,e,n){let i=gh(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function _o(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function gh(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function wp(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var xh=class{static triangulate(t,e,n=2){return hp(t,e,n)}},gi=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Ef(t),Tf(n,t);let o=t.length;e.forEach(Ef);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Tf(n,e[l]);let a=xh.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Ef(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Tf(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Is=class s extends _e{constructor(t=new Ti([new vt(.5,.5),new vt(-.5,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new qt(i,3)),this.setAttribute("uv",new qt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Ap,S,x=!1,y,M,T,_;if(m){S=m.getSpacedPoints(h),x=!0,u=!1;let tt=m.isCatmullRomCurve3?m.closed:!1;y=m.computeFrenetFrames(h,tt),M=new U,T=new U,_=new U}u||(g=0,d=0,p=0,v=0);let E=a.extractPoints(c),A=E.shape,C=E.holes;if(!gi.isClockWise(A)){A=A.reverse();for(let tt=0,rt=C.length;tt<rt;tt++){let pt=C[tt];gi.isClockWise(pt)&&(C[tt]=pt.reverse())}}function I(tt){let pt=10000000000000001e-36,xt=tt[0];for(let bt=1;bt<=tt.length;bt++){let It=bt%tt.length,kt=tt[It],Rt=kt.x-xt.x,jt=kt.y-xt.y,O=Rt*Rt+jt*jt,me=Math.max(Math.abs(kt.x),Math.abs(kt.y),Math.abs(xt.x),Math.abs(xt.y)),fe=pt*me*me;if(O<=fe){tt.splice(It,1),bt--;continue}xt=kt}}I(A),C.forEach(I);let N=C.length,B=A;for(let tt=0;tt<N;tt++){let rt=C[tt];A=A.concat(rt)}function k(tt,rt,pt){return rt||ae("ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(rt,pt)}let z=A.length;function Q(tt,rt,pt){let xt,bt,It,kt=tt.x-rt.x,Rt=tt.y-rt.y,jt=pt.x-tt.x,O=pt.y-tt.y,me=kt*kt+Rt*Rt,fe=kt*O-Rt*jt;if(Math.abs(fe)>Number.EPSILON){let D=Math.sqrt(me),w=Math.sqrt(jt*jt+O*O),J=rt.x-Rt/D,et=rt.y+kt/D,ct=pt.x-O/w,Tt=pt.y+jt/w,Ct=((ct-J)*O-(Tt-et)*jt)/(kt*O-Rt*jt);xt=J+kt*Ct-tt.x,bt=et+Rt*Ct-tt.y;let ht=xt*xt+bt*bt;if(ht<=2)return new vt(xt,bt);It=Math.sqrt(ht/2)}else{let D=!1;kt>Number.EPSILON?jt>Number.EPSILON&&(D=!0):kt<-Number.EPSILON?jt<-Number.EPSILON&&(D=!0):Math.sign(Rt)===Math.sign(O)&&(D=!0),D?(xt=-Rt,bt=kt,It=Math.sqrt(me)):(xt=kt,bt=Rt,It=Math.sqrt(me/2))}return new vt(xt/It,bt/It)}let H=[];for(let tt=0,rt=B.length,pt=rt-1,xt=tt+1;tt<rt;tt++,pt++,xt++)pt===rt&&(pt=0),xt===rt&&(xt=0),H[tt]=Q(B[tt],B[pt],B[xt]);let Z=[],q,gt=H.concat();for(let tt=0,rt=N;tt<rt;tt++){let pt=C[tt];q=[];for(let xt=0,bt=pt.length,It=bt-1,kt=xt+1;xt<bt;xt++,It++,kt++)It===bt&&(It=0),kt===bt&&(kt=0),q[xt]=Q(pt[xt],pt[It],pt[kt]);Z.push(q),gt=gt.concat(q)}let St;if(g===0)St=gi.triangulateShape(B,C);else{let tt=[],rt=[];for(let pt=0;pt<g;pt++){let xt=pt/g,bt=d*Math.cos(xt*Math.PI/2),It=p*Math.sin(xt*Math.PI/2)+v;for(let kt=0,Rt=B.length;kt<Rt;kt++){let jt=k(B[kt],H[kt],It);P(jt.x,jt.y,-bt),xt===0&&tt.push(jt)}for(let kt=0,Rt=N;kt<Rt;kt++){let jt=C[kt];q=Z[kt];let O=[];for(let me=0,fe=jt.length;me<fe;me++){let D=k(jt[me],q[me],It);P(D.x,D.y,-bt),xt===0&&O.push(D)}xt===0&&rt.push(O)}}St=gi.triangulateShape(tt,rt)}let Y=St.length,$=p+v;for(let tt=0;tt<z;tt++){let rt=u?k(A[tt],gt[tt],$):A[tt];x?(T.copy(y.normals[0]).multiplyScalar(rt.x),M.copy(y.binormals[0]).multiplyScalar(rt.y),_.copy(S[0]).add(T).add(M),P(_.x,_.y,_.z)):P(rt.x,rt.y,0)}for(let tt=1;tt<=h;tt++)for(let rt=0;rt<z;rt++){let pt=u?k(A[rt],gt[rt],$):A[rt];x?(T.copy(y.normals[tt]).multiplyScalar(pt.x),M.copy(y.binormals[tt]).multiplyScalar(pt.y),_.copy(S[tt]).add(T).add(M),P(_.x,_.y,_.z)):P(pt.x,pt.y,f/h*tt)}for(let tt=g-1;tt>=0;tt--){let rt=tt/g,pt=d*Math.cos(rt*Math.PI/2),xt=p*Math.sin(rt*Math.PI/2)+v;for(let bt=0,It=B.length;bt<It;bt++){let kt=k(B[bt],H[bt],xt);P(kt.x,kt.y,f+pt)}for(let bt=0,It=C.length;bt<It;bt++){let kt=C[bt];q=Z[bt];for(let Rt=0,jt=kt.length;Rt<jt;Rt++){let O=k(kt[Rt],q[Rt],xt);x?P(O.x,O.y+S[h-1].y,S[h-1].x+pt):P(O.x,O.y,f+pt)}}}dt(),X();function dt(){let tt=i.length/3;if(u){let rt=0,pt=z*rt;for(let xt=0;xt<Y;xt++){let bt=St[xt];L(bt[2]+pt,bt[1]+pt,bt[0]+pt)}rt=h+g*2,pt=z*rt;for(let xt=0;xt<Y;xt++){let bt=St[xt];L(bt[0]+pt,bt[1]+pt,bt[2]+pt)}}else{for(let rt=0;rt<Y;rt++){let pt=St[rt];L(pt[2],pt[1],pt[0])}for(let rt=0;rt<Y;rt++){let pt=St[rt];L(pt[0]+z*h,pt[1]+z*h,pt[2]+z*h)}}n.addGroup(tt,i.length/3-tt,0)}function X(){let tt=i.length/3,rt=0;K(B,rt),rt+=B.length;for(let pt=0,xt=C.length;pt<xt;pt++){let bt=C[pt];K(bt,rt),rt+=bt.length}n.addGroup(tt,i.length/3-tt,1)}function K(tt,rt){let pt=tt.length;for(;--pt>=0;){let xt=pt,bt=pt-1;bt<0&&(bt=tt.length-1);for(let It=0,kt=h+g*2;It<kt;It++){let Rt=z*It,jt=z*(It+1),O=rt+xt+Rt,me=rt+bt+Rt,fe=rt+bt+jt,D=rt+xt+jt;V(O,me,fe,D)}}}function P(tt,rt,pt){l.push(tt),l.push(rt),l.push(pt)}function L(tt,rt,pt){ot(tt),ot(rt),ot(pt);let xt=i.length/3,bt=b.generateTopUV(n,i,xt-3,xt-2,xt-1);Et(bt[0]),Et(bt[1]),Et(bt[2])}function V(tt,rt,pt,xt){ot(tt),ot(rt),ot(xt),ot(rt),ot(pt),ot(xt);let bt=i.length/3,It=b.generateSideWallUV(n,i,bt-6,bt-3,bt-2,bt-1);Et(It[0]),Et(It[1]),Et(It[3]),Et(It[1]),Et(It[2]),Et(It[3])}function ot(tt){i.push(l[tt*3+0]),i.push(l[tt*3+1]),i.push(l[tt*3+2])}function Et(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Rp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new il[i.type]().fromJSON(i)),new s(n,t.options)}},Ap={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new vt(r,o),new vt(a,l),new vt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[i*3],d=t[i*3+1],p=t[i*3+2],v=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new vt(o,1-l),new vt(c,1-f),new vt(u,1-p),new vt(v,1-m)]:[new vt(a,1-l),new vt(h,1-f),new vt(d,1-p),new vt(g,1-m)]}};function Rp(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var yo=class s extends tl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Sr=class s extends _e{constructor(t=[new vt(0,-.5),new vt(.5,0),new vt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ve(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,f=new U,u=new vt,d=new U,p=new U,v=new U,g=0,m=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:g=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,d.x=m*1,d.y=-g,d.z=m*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:g=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(p)}for(let b=0;b<=e;b++){let S=n+b*h*i,x=Math.sin(S),y=Math.cos(S);for(let M=0;M<=t.length-1;M++){f.x=t[M].x*x,f.y=t[M].y,f.z=t[M].x*y,o.push(f.x,f.y,f.z),u.x=b/e,u.y=M/(t.length-1),a.push(u.x,u.y);let T=l[3*M+0]*x,_=l[3*M+1],E=l[3*M+0]*y;c.push(T,_,E)}}for(let b=0;b<e;b++)for(let S=0;S<t.length-1;S++){let x=S+b*t.length,y=x,M=x+t.length,T=x+t.length+1,_=x+1;r.push(y,M,_),r.push(T,_,M)}this.setIndex(r),this.setAttribute("position",new qt(o,3)),this.setAttribute("uv",new qt(a,2)),this.setAttribute("normal",new qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var Ge=class s extends _e{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=t/a,u=e/l,d=[],p=[],v=[],g=[];for(let m=0;m<h;m++){let b=m*u-o;for(let S=0;S<c;S++){let x=S*f-r;p.push(x,-b,0),v.push(0,0,1),g.push(S/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){let S=b+c*m,x=b+c*(m+1),y=b+1+c*(m+1),M=b+1+c*m;d.push(S,x,M),d.push(x,y,M)}this.setIndex(d),this.setAttribute("position",new qt(p,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Mo=class s extends _e{constructor(t=new Ti([new vt(0,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new qt(i,3)),this.setAttribute("normal",new qt(r,3)),this.setAttribute("uv",new qt(o,2));function c(h){let f=i.length/3,u=h.extractPoints(e),d=u.shape,p=u.holes;gi.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=p.length;g<m;g++){let b=p[g];gi.isClockWise(b)===!0&&(p[g]=b.reverse())}let v=gi.triangulateShape(d,p);for(let g=0,m=p.length;g<m;g++){let b=p[g];d=d.concat(b)}for(let g=0,m=d.length;g<m;g++){let b=d[g];i.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let g=0,m=v.length;g<m;g++){let b=v[g],S=b[0]+f,x=b[1]+f,y=b[2]+f;n.push(S,x,y),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Cp(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let o=e[t.shapes[i]];n.push(o)}return new s(n,t.curveSegments)}};function Cp(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}var ke=class s extends _e{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new U,u=new U,d=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){let b=[],S=m/n,x=o+S*a,y=t*Math.cos(x),M=Math.sqrt(t*t-y*y),T=0;m===0&&o===0?T=.5/e:m===n&&l===Math.PI&&(T=-.5/e);for(let _=0;_<=e;_++){let E=_/e,A=i+E*r;f.x=-M*Math.cos(A),f.y=y,f.z=M*Math.sin(A),p.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),g.push(E+T,1-S),b.push(c++)}h.push(b)}for(let m=0;m<n;m++)for(let b=0;b<e;b++){let S=h[m][b+1],x=h[m][b],y=h[m+1][b],M=h[m+1][b+1];(m!==0||o>0)&&d.push(S,x,M),(m!==n-1||l<Math.PI)&&d.push(x,y,M)}this.setIndex(d),this.setAttribute("position",new qt(p,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ae=class s extends _e{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],f=[],u=new U,d=new U,p=new U;for(let v=0;v<=n;v++){let g=o+v/n*a;for(let m=0;m<=i;m++){let b=m/i*r;d.x=(t+e*Math.cos(g))*Math.cos(b),d.y=(t+e*Math.cos(g))*Math.sin(b),d.z=e*Math.sin(g),c.push(d.x,d.y,d.z),u.x=t*Math.cos(b),u.y=t*Math.sin(b),p.subVectors(d,u).normalize(),h.push(p.x,p.y,p.z),f.push(m/i),f.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=i;g++){let m=(i+1)*v+g-1,b=(i+1)*(v-1)+g-1,S=(i+1)*(v-1)+g,x=(i+1)*v+g;l.push(m,b,x),l.push(b,S,x)}this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Er=class s extends _e{constructor(t=new mo(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new U,l=new U,c=new vt,h=new U,f=[],u=[],d=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new qt(f,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(d,2));function v(){for(let S=0;S<e;S++)g(S);g(r===!1?e:0),b(),m()}function g(S){h=t.getPointAt(S/e,h);let x=o.normals[S],y=o.binormals[S];for(let M=0;M<=i;M++){let T=M/i*Math.PI*2,_=Math.sin(T),E=-Math.cos(T);l.x=E*x.x+_*y.x,l.y=E*x.y+_*y.y,l.z=E*x.z+_*y.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function m(){for(let S=1;S<=e;S++)for(let x=1;x<=i;x++){let y=(i+1)*(S-1)+(x-1),M=(i+1)*S+(x-1),T=(i+1)*S+x,_=(i+1)*(S-1)+x;p.push(y,M,_),p.push(M,T,_)}}function b(){for(let S=0;S<=e;S++)for(let x=0;x<=i;x++)c.x=S/e,c.y=x/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new il[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var bo=class extends Gn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ie(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function Ns(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(wf(i))i.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(wf(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function _n(s){let t={};for(let e=0;e<s.length;e++){let n=Ns(s[e]);for(let i in n)t[i]=n[i]}return t}function wf(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Pp(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function zh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ye.workingColorSpace}var qn={clone:Ns,merge:_n},Ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ye=class extends Gn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ip,this.fragmentShader=Fp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ns(t.uniforms),this.uniformsGroups=Pp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new ie().setHex(i.value);break;case"v2":this.uniforms[n].value=new vt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new U().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Pe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ue().fromArray(i.value);break;case"m4":this.uniforms[n].value=new he().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Tr=class extends Ye{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},de=class extends Gn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pr,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},wn=class extends de{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new vt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var So=class extends Gn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pr,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},Eo=class extends Gn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pr,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=yl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},sl=class extends Gn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=e0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},rl=class extends Gn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function rr(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function lh(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var os=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ol=class extends os{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fh,endingEnd:fh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case dh:r=t,a=2*e-n;break;case ph:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case dh:o=t,l=2*n-e;break;case ph:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),v=p*p,g=v*p,m=-u*g+2*u*v-u*p,b=(1+u)*g+(-1.5-2*u)*v+(-.5+u)*p+1,S=(-1-d)*g+(1.5+d)*v+.5*p,x=d*g-d*v;for(let y=0;y!==a;++y)r[y]=m*o[h+y]+b*o[c+y]+S*o[l+y]+x*o[f+y];return r}},al=class extends os{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},ll=class extends os{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},cl=class extends os{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(n-e)/(i-e),v=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*v+o[l+g]*p;return r}let u=a*2,d=t-1;for(let p=0;p!==a;++p){let v=o[c+p],g=o[l+p],m=d*u+p*2,b=f[m],S=f[m+1],x=t*u+p*2,y=h[x],M=h[x+1],T=Dp(n,e,b,y,i);r[p]=y0(T,v,S,M,g)}return r}};function y0(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function Lp(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function Dp(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=y0(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=Lp(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Nn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=rr(e,this.TimeBufferType),this.values=rr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:rr(t.times,Array),values:rr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),lh(t.settings)&&(n.settings={inTangents:rr(t.settings.inTangents,Array),outTangents:rr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new cl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case to:e=this.InterpolantFactoryMethodDiscrete;break;case ja:e=this.InterpolantFactoryMethodLinear;break;case za:e=this.InterpolantFactoryMethodSmooth;break;case uh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return oe("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return ja;case this.InterpolantFactoryMethodSmooth:return za;case this.InterpolantFactoryMethodBezier:return uh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;lh(this.settings)&&(Af(this.settings.inTangents,t),Af(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ae("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(ae("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ae("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ae("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Dd(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){ae("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===za,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let f=a*n,u=f-n,d=f+n;for(let p=0;p!==n;++p){let v=e[f+p];if(v!==e[u+p]||v!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,lh(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Af(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=ja;var as=class extends Nn{constructor(t,e,n){super(t,e,n)}};as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=to;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var hl=class extends Nn{constructor(t,e,n,i){super(t,e,n,i)}};hl.prototype.ValueTypeName="color";var ul=class extends Nn{constructor(t,e,n,i){super(t,e,n,i)}};ul.prototype.ValueTypeName="number";var fl=class extends os{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)we.slerpFlat(r,0,o,c-a,o,c,l);return r}},To=class extends Nn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new fl(this.times,this.values,this.getValueSize(),t)}};To.prototype.ValueTypeName="quaternion";To.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends Nn{constructor(t,e,n){super(t,e,n)}};ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=to;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var dl=class extends Nn{constructor(t,e,n,i){super(t,e,n,i)}};dl.prototype.ValueTypeName="vector";var pl=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},M0=new pl,ml=class{constructor(t){this.manager=t!==void 0?t:M0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ml.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fs=class extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},wr=class extends Fs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ch=new he,Rf=new U,Cf=new U,Ar=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Rf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rf),Cf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){ch.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ch,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===hr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(ch)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ba=new U,Oa=new we,di=new U,wo=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ba,Oa,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,Oa,di.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ba,Oa,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,Oa,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},es=new U,Pf=new vt,If=new vt,en=class extends wo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ro*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Nc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(Nc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(es.x,es.y).multiplyScalar(-t/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-t/es.z)}getViewSize(t,e){return this.getViewBounds(t,Pf,If),e.subVectors(If,Pf)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Nc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},vh=class extends Ar{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=ro*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Ao=class extends Fs{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new vh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},_h=class extends Ar{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0}},wi=class extends Fs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new _h}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},cs=class extends wo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},yh=class extends Ar{constructor(){super(new cs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wi=class extends Fs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new yh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var or=-90,ar=1,gl=class extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new en(or,ar,t,e);i.layers=this.layers,this.add(i);let r=new en(or,ar,t,e);r.layers=this.layers,this.add(r);let o=new en(or,ar,t,e);o.layers=this.layers,this.add(o);let a=new en(or,ar,t,e);a.layers=this.layers,this.add(a);let l=new en(or,ar,t,e);l.layers=this.layers,this.add(l);let c=new en(or,ar,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},xl=class extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Ro=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Np.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Np(){this._document.hidden===!1&&this.reset()}var kh="\\[\\]\\.:\\/",Up=new RegExp("["+kh+"]","g"),Hh="[^"+kh+"]",Bp="[^"+kh.replace("\\.","")+"]",Op=/((?:WC+[\/:])*)/.source.replace("WC",Hh),zp=/(WCOD+)?/.source.replace("WCOD",Bp),kp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hh),Hp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hh),Gp=new RegExp("^"+Op+zp+kp+Hp+"$"),Vp=["material","materials","bones","map"],Mh=class{constructor(t,e,n){let i=n||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Oe=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Up,"")}static parseTrackName(t){let e=Gp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Vp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ae("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ae("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ae("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ae("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ae("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;ae("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=Mh;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var __=new Float32Array(1);var Ff=new he,Co=class{constructor(t,e,n=0,i=1/0){this.ray=new gr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ae("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ff.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ff),this}intersectObject(t,e=!0,n=[]){return bh(t,this,n,e),n.sort(Lf),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)bh(t[i],this,n,e);return n.sort(Lf),n}};function Lf(s,t){return s.distance-t.distance}function bh(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)bh(r[o],t,e,!0)}}var Yh=class Yh{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Yh.prototype.isMatrix2=!0;var Sh=Yh;function Gh(s,t,e,n){let i=Wp(n);switch(e){case Dh:return s*t;case Al:return s*t/i.components*i.byteLength;case Rl:return s*t/i.components*i.byteLength;case gs:return s*t*2/i.components*i.byteLength;case Cl:return s*t*2/i.components*i.byteLength;case Nh:return s*t*3/i.components*i.byteLength;case Sn:return s*t*4/i.components*i.byteLength;case Pl:return s*t*4/i.components*i.byteLength;case ko:case Ho:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Go:case Vo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Fl:case Dl:return Math.max(s,16)*Math.max(t,8)/4;case Il:case Ll:return Math.max(s,8)*Math.max(t,8)/2;case Nl:case Ul:case Ol:case zl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Bl:case Wo:case kl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Hl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Gl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Vl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ql:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Zl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case jl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case $l:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Kl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ql:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case tc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ec:case nc:case ic:return Math.ceil(s/4)*Math.ceil(t/4)*16;case sc:case rc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Xo:case oc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wp(s){switch(s){case vn:case Ph:return{byteLength:1,components:1};case Cr:case Ih:case an:return{byteLength:2,components:1};case Tl:case wl:return{byteLength:2,components:4};case ai:case El:case Un:return{byteLength:4,components:1};case Fh:case Lh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function V0(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function jp(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(s.bindBuffer(c,a),f.length===0)s.bufferSubData(c,0,h);else{f.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<f.length;d++){let p=f[u],v=f[d];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++u,f[u]=v)}f.length=u+1;for(let d=0,p=f.length;d<p;d++){let v=f[d];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Jp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$p=`#ifdef USE_ALPHAHASH
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
#endif`,Kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,em=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nm=`#ifdef USE_AOMAP
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
#endif`,im=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sm=`#ifdef USE_BATCHING
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
#endif`,rm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,om=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,am=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cm=`#ifdef USE_IRIDESCENCE
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
#endif`,hm=`#ifdef USE_BUMPMAP
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
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_m=`#define PI 3.141592653589793
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
} // validated`,ym=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mm=`vec3 transformedNormal = objectNormal;
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
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Am=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bm=`#ifdef USE_GRADIENTMAP
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
}`,Om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ym=`PhysicalMaterial material;
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
#endif`,Zm=`uniform sampler2D dfgLUT;
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
}`,jm=`
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
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
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
#endif`,$m=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Km=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ig=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,og=`#if defined( USE_POINTS_UV )
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
#endif`,ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ug=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fg=`#ifdef USE_MORPHTARGETS
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
#endif`,dg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_g=`#ifdef USE_NORMALMAP
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
#endif`,yg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ag=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ig=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ng=`float getShadowMask() {
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
}`,Ug=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bg=`#ifdef USE_SKINNING
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
#endif`,Og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zg=`#ifdef USE_SKINNING
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
#endif`,kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wg=`#ifdef USE_TRANSMISSION
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
#endif`,Xg=`#ifdef USE_TRANSMISSION
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
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$g=`uniform sampler2D t2D;
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
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`#include <common>
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
}`,i1=`#if DEPTH_PACKING == 3200
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
}`,s1=`#define DISTANCE
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
}`,r1=`#define DISTANCE
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
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`uniform float scale;
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
}`,c1=`uniform vec3 diffuse;
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
}`,h1=`#include <common>
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
}`,u1=`uniform vec3 diffuse;
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
}`,f1=`#define LAMBERT
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
}`,d1=`#define LAMBERT
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
}`,p1=`#define MATCAP
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
}`,m1=`#define MATCAP
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
}`,g1=`#define NORMAL
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
}`,x1=`#define NORMAL
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
}`,v1=`#define PHONG
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
}`,_1=`#define PHONG
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
}`,y1=`#define STANDARD
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
}`,M1=`#define STANDARD
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
}`,b1=`#define TOON
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
}`,S1=`#define TOON
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
}`,E1=`uniform float size;
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
}`,T1=`uniform vec3 diffuse;
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
}`,w1=`#include <common>
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
}`,A1=`uniform vec3 color;
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
}`,R1=`uniform float rotation;
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
}`,C1=`uniform vec3 diffuse;
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
}`,xe={alphahash_fragment:Jp,alphahash_pars_fragment:$p,alphamap_fragment:Kp,alphamap_pars_fragment:Qp,alphatest_fragment:tm,alphatest_pars_fragment:em,aomap_fragment:nm,aomap_pars_fragment:im,batching_pars_vertex:sm,batching_vertex:rm,begin_vertex:om,beginnormal_vertex:am,bsdfs:lm,iridescence_fragment:cm,bumpmap_pars_fragment:hm,clipping_planes_fragment:um,clipping_planes_pars_fragment:fm,clipping_planes_pars_vertex:dm,clipping_planes_vertex:pm,color_fragment:mm,color_pars_fragment:gm,color_pars_vertex:xm,color_vertex:vm,common:_m,cube_uv_reflection_fragment:ym,defaultnormal_vertex:Mm,displacementmap_pars_vertex:bm,displacementmap_vertex:Sm,emissivemap_fragment:Em,emissivemap_pars_fragment:Tm,colorspace_fragment:wm,colorspace_pars_fragment:Am,envmap_fragment:Rm,envmap_common_pars_fragment:Cm,envmap_pars_fragment:Pm,envmap_pars_vertex:Im,envmap_physical_pars_fragment:Gm,envmap_vertex:Fm,fog_vertex:Lm,fog_pars_vertex:Dm,fog_fragment:Nm,fog_pars_fragment:Um,gradientmap_pars_fragment:Bm,lightmap_pars_fragment:Om,lights_lambert_fragment:zm,lights_lambert_pars_fragment:km,lights_pars_begin:Hm,lights_toon_fragment:Vm,lights_toon_pars_fragment:Wm,lights_phong_fragment:Xm,lights_phong_pars_fragment:qm,lights_physical_fragment:Ym,lights_physical_pars_fragment:Zm,lights_fragment_begin:jm,lights_fragment_maps:Jm,lights_fragment_end:$m,lightprobes_pars_fragment:Km,logdepthbuf_fragment:Qm,logdepthbuf_pars_fragment:tg,logdepthbuf_pars_vertex:eg,logdepthbuf_vertex:ng,map_fragment:ig,map_pars_fragment:sg,map_particle_fragment:rg,map_particle_pars_fragment:og,metalnessmap_fragment:ag,metalnessmap_pars_fragment:lg,morphinstance_vertex:cg,morphcolor_vertex:hg,morphnormal_vertex:ug,morphtarget_pars_vertex:fg,morphtarget_vertex:dg,normal_fragment_begin:pg,normal_fragment_maps:mg,normal_pars_fragment:gg,normal_pars_vertex:xg,normal_vertex:vg,normalmap_pars_fragment:_g,clearcoat_normal_fragment_begin:yg,clearcoat_normal_fragment_maps:Mg,clearcoat_pars_fragment:bg,iridescence_pars_fragment:Sg,opaque_fragment:Eg,packing:Tg,premultiplied_alpha_fragment:wg,project_vertex:Ag,dithering_fragment:Rg,dithering_pars_fragment:Cg,roughnessmap_fragment:Pg,roughnessmap_pars_fragment:Ig,shadowmap_pars_fragment:Fg,shadowmap_pars_vertex:Lg,shadowmap_vertex:Dg,shadowmask_pars_fragment:Ng,skinbase_vertex:Ug,skinning_pars_vertex:Bg,skinning_vertex:Og,skinnormal_vertex:zg,specularmap_fragment:kg,specularmap_pars_fragment:Hg,tonemapping_fragment:Gg,tonemapping_pars_fragment:Vg,transmission_fragment:Wg,transmission_pars_fragment:Xg,uv_pars_fragment:qg,uv_pars_vertex:Yg,uv_vertex:Zg,worldpos_vertex:jg,background_vert:Jg,background_frag:$g,backgroundCube_vert:Kg,backgroundCube_frag:Qg,cube_vert:t1,cube_frag:e1,depth_vert:n1,depth_frag:i1,distance_vert:s1,distance_frag:r1,equirect_vert:o1,equirect_frag:a1,linedashed_vert:l1,linedashed_frag:c1,meshbasic_vert:h1,meshbasic_frag:u1,meshlambert_vert:f1,meshlambert_frag:d1,meshmatcap_vert:p1,meshmatcap_frag:m1,meshnormal_vert:g1,meshnormal_frag:x1,meshphong_vert:v1,meshphong_frag:_1,meshphysical_vert:y1,meshphysical_frag:M1,meshtoon_vert:b1,meshtoon_frag:S1,points_vert:E1,points_frag:T1,shadow_vert:w1,shadow_frag:A1,sprite_vert:R1,sprite_frag:C1},Bt={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Ci={basic:{uniforms:_n([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:_n([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new ie(0)},envMapIntensity:{value:1}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:_n([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:_n([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:_n([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new ie(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:_n([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:_n([Bt.points,Bt.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:_n([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:_n([Bt.common,Bt.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:_n([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:_n([Bt.sprite,Bt.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distance:{uniforms:_n([Bt.common,Bt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distance_vert,fragmentShader:xe.distance_frag},shadow:{uniforms:_n([Bt.lights,Bt.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};Ci.physical={uniforms:_n([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};var cc={r:0,b:0,g:0},P1=new he,W0=new ue;W0.set(-1,0,0,0,1,0,0,0,1);function I1(s,t,e,n,i,r){let o=new ie(0),a=i===!0?0:1,l,c,h=null,f=0,u=null;function d(b){let S=b.isScene===!0?b.background:null;if(S&&S.isTexture){let x=b.backgroundBlurriness>0;S=t.get(S,x)}return S}function p(b){let S=!1,x=d(b);x===null?g(o,a):x&&x.isColor&&(g(x,1),S=!0);let y=s.xr.getEnvironmentBlendMode();y==="additive"?e.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(b,S){let x=d(S);x&&(x.isCubeTexture||x.mapping===Oo)?(c===void 0&&(c=new be(new Vn(1,1,1),new Ye({name:"BackgroundCubeMaterial",uniforms:Ns(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(P1.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(W0),c.material.toneMapped=ye.getTransfer(x.colorSpace)!==Te,(h!==x||f!==x.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,u=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new be(new Ge(2,2),new Ye({name:"BackgroundMaterial",uniforms:Ns(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ye.getTransfer(x.colorSpace)!==Te,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,u=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,S){b.getRGB(cc,zh(s)),e.buffers.color.setClear(cc.r,cc.g,cc.b,S,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),a=S,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,g(o,a)},render:p,addToRenderList:v,dispose:m}}function F1(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(C,F,I,N,B){let k=!1,z=f(C,N,I,F);r!==z&&(r=z,c(r.object)),k=d(C,N,I,B),k&&p(C,N,I,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,x(C,F,I,N),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return s.createVertexArray()}function c(C){return s.bindVertexArray(C)}function h(C){return s.deleteVertexArray(C)}function f(C,F,I,N){let B=N.wireframe===!0,k=n[F.id];k===void 0&&(k={},n[F.id]=k);let z=C.isInstancedMesh===!0?C.id:0,Q=k[z];Q===void 0&&(Q={},k[z]=Q);let H=Q[I.id];H===void 0&&(H={},Q[I.id]=H);let Z=H[B];return Z===void 0&&(Z=u(l()),H[B]=Z),Z}function u(C){let F=[],I=[],N=[];for(let B=0;B<e;B++)F[B]=0,I[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:I,attributeDivisors:N,object:C,attributes:{},index:null}}function d(C,F,I,N){let B=r.attributes,k=F.attributes,z=0,Q=I.getAttributes();for(let H in Q)if(Q[H].location>=0){let q=B[H],gt=k[H];if(gt===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(gt=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(gt=C.instanceColor)),q===void 0||q.attribute!==gt||gt&&q.data!==gt.data)return!0;z++}return r.attributesNum!==z||r.index!==N}function p(C,F,I,N){let B={},k=F.attributes,z=0,Q=I.getAttributes();for(let H in Q)if(Q[H].location>=0){let q=k[H];q===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(q=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(q=C.instanceColor));let gt={};gt.attribute=q,q&&q.data&&(gt.data=q.data),B[H]=gt,z++}r.attributes=B,r.attributesNum=z,r.index=N}function v(){let C=r.newAttributes;for(let F=0,I=C.length;F<I;F++)C[F]=0}function g(C){m(C,0)}function m(C,F){let I=r.newAttributes,N=r.enabledAttributes,B=r.attributeDivisors;I[C]=1,N[C]===0&&(s.enableVertexAttribArray(C),N[C]=1),B[C]!==F&&(s.vertexAttribDivisor(C,F),B[C]=F)}function b(){let C=r.newAttributes,F=r.enabledAttributes;for(let I=0,N=F.length;I<N;I++)F[I]!==C[I]&&(s.disableVertexAttribArray(I),F[I]=0)}function S(C,F,I,N,B,k,z){z===!0?s.vertexAttribIPointer(C,F,I,B,k):s.vertexAttribPointer(C,F,I,N,B,k)}function x(C,F,I,N){v();let B=N.attributes,k=I.getAttributes(),z=F.defaultAttributeValues;for(let Q in k){let H=k[Q];if(H.location>=0){let Z=B[Q];if(Z===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(Z=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(Z=C.instanceColor)),Z!==void 0){let q=Z.normalized,gt=Z.itemSize,St=t.get(Z);if(St===void 0)continue;let Y=St.buffer,$=St.type,dt=St.bytesPerElement,X=$===s.INT||$===s.UNSIGNED_INT||Z.gpuType===El;if(Z.isInterleavedBufferAttribute){let K=Z.data,P=K.stride,L=Z.offset;if(K.isInstancedInterleavedBuffer){for(let V=0;V<H.locationSize;V++)m(H.location+V,K.meshPerAttribute);C.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let V=0;V<H.locationSize;V++)g(H.location+V);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let V=0;V<H.locationSize;V++)S(H.location+V,gt/H.locationSize,$,q,P*dt,(L+gt/H.locationSize*V)*dt,X)}else{if(Z.isInstancedBufferAttribute){for(let K=0;K<H.locationSize;K++)m(H.location+K,Z.meshPerAttribute);C.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let K=0;K<H.locationSize;K++)g(H.location+K);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let K=0;K<H.locationSize;K++)S(H.location+K,gt/H.locationSize,$,q,gt*dt,gt/H.locationSize*K*dt,X)}}else if(z!==void 0){let q=z[Q];if(q!==void 0)switch(q.length){case 2:s.vertexAttrib2fv(H.location,q);break;case 3:s.vertexAttrib3fv(H.location,q);break;case 4:s.vertexAttrib4fv(H.location,q);break;default:s.vertexAttrib1fv(H.location,q)}}}}b()}function y(){E();for(let C in n){let F=n[C];for(let I in F){let N=F[I];for(let B in N){let k=N[B];for(let z in k)h(k[z].object),delete k[z];delete N[B]}}delete n[C]}}function M(C){if(n[C.id]===void 0)return;let F=n[C.id];for(let I in F){let N=F[I];for(let B in N){let k=N[B];for(let z in k)h(k[z].object),delete k[z];delete N[B]}}delete n[C.id]}function T(C){for(let F in n){let I=n[F];for(let N in I){let B=I[N];if(B[C.id]===void 0)continue;let k=B[C.id];for(let z in k)h(k[z].object),delete k[z];delete B[C.id]}}}function _(C){for(let F in n){let I=n[F],N=C.isInstancedMesh===!0?C.id:0,B=I[N];if(B!==void 0){for(let k in B){let z=B[k];for(let Q in z)h(z[Q].object),delete z[Q];delete B[k]}delete I[N],Object.keys(I).length===0&&delete n[F]}}}function E(){A(),o=!0,r!==i&&(r=i,c(r.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:A,dispose:y,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:g,disableUnusedAttributes:b}}function L1(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function D1(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==Sn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let _=T===an&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==vn&&T!==Un&&!_&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(oe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=s.getParameter(s.MAX_SAMPLES),M=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:x,maxSamples:y,samples:M}}function N1(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Fn,a=new ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let p=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,m=s.get(f);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{let b=r?0:n,S=b*4,x=m.clippingState||null;l.value=x,x=h(p,u,S,d);for(let y=0;y!==S;++y)x[y]=e[y];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,p){let v=f!==null?f.length:0,g=null;if(v!==0){if(g=l.value,p!==!0||g===null){let m=d+v*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,x=d;S!==v;++S,x+=4)o.copy(f[S]).applyMatrix4(b,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}var Fr=4,U1=6,B1=20,O1=256,qo=new cs,b0=new ie,Zh=null,jh=0,Jh=0,$h=!1,z1=new U,Us=new U,Bs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=z1}=r;Zh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=T0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=E0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Zh,jh,Jh),this._renderer.xr.enabled=$h,t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ds||t.mapping===Ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:an,format:Sn,colorSpace:eo,depthBuffer:!1},i=S0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=S0(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=k1(r)),this._blurMaterial=G1(r,t,e),this._ggxMaterial=H1(r,t,e)}return i}_compileMaterial(t){let e=new be(new _e,t);this._renderer.compile(e,qo)}_sceneToCubeUV(t,e,n,i,r){let l=new en(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(b0),f.toneMapping=oi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new be(new Vn,new ze({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,m=!1,b=t.background;b?b.isColor&&(g.color.copy(b),t.background=null,m=!0):(g.color.copy(b0),m=!0);for(let S=0;S<6;S++){let x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let y=this._cubeSize;Ir(i,x*y,S>2?y:0,y,y),f.setRenderTarget(i),m&&f.render(v,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ds||t.mapping===Ds;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=T0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=E0());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ir(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,qo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:p}=this,v=this._sizeLods[n],g=3*v*(n>p-Fr?n-p+Fr:0),m=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,Ir(r,g,m,3*v,2*v),i.setRenderTarget(r),i.render(a,qo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Ir(t,g,m,3*v,2*v),i.setRenderTarget(t),i.render(a,qo)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,i,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],f=3*h*(i>this._lodMax-Fr?i-this._lodMax+Fr:0),u=4*(this._cubeSize-h);Ir(e,f,u,3*h,2*h),o.setRenderTarget(e),o.render(l,qo)}};function k1(s){let t=[],e=[],n=s,i=s-Fr+1+U1;for(let r=0;r<i;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,p=new Float32Array(d*u*f),v=new Float32Array(d*u*f);for(let m=0;m<f;m++){let b=m%3*2/3-1,S=m>2?0:-1,x=[b,S,0,b+2/3,S,0,b+2/3,S+1,0,b,S,0,b+2/3,S+1,0,b,S+1,0];p.set(x,d*u*m);for(let y=0;y<u;y++){let M=h[y*2]*2-1,T=h[y*2+1]*2-1;m===0?Us.set(1,T,M):m===1?Us.set(-M,1,-T):m===2?Us.set(-M,T,1):m===3?Us.set(-1,T,-M):m===4?Us.set(-M,-1,T):Us.set(M,T,-1),Us.toArray(v,(m*u+y)*d)}}let g=new _e;g.setAttribute("position",new nn(p,d)),g.setAttribute("outputDirection",new nn(v,d)),e.push(new be(g,null)),n>Fr&&n--}return{lodMeshes:e,sizeLods:t}}function S0(s,t,e){let n=new Je(s,t,e);return n.texture.mapping=Oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function H1(s,t,e){return new Ye({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:O1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fc(),fragmentShader:`

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
		`,blending:$e,depthTest:!1,depthWrite:!1})}function G1(s,t,e){return new Ye({name:"SphericalGaussianBlur",defines:{SAMPLES:B1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:fc(),fragmentShader:`

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
		`,blending:$e,depthTest:!1,depthWrite:!1})}function E0(){return new Ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

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
		`,blending:$e,depthTest:!1,depthWrite:!1})}function T0(){return new Ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$e,depthTest:!1,depthWrite:!1})}function fc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var uc=class extends Je{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new co(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Vn(5,5,5),r=new Ye({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:$e});r.uniforms.tEquirect.value=e;let o=new be(i,r),a=e.minFilter;return e.minFilter===ps&&(e.minFilter=un),new gl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}};function V1(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Ml||d===bl)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let v=new uc(p.height);return v.fromEquirectangularTexture(s,u),t.set(u,v),u.addEventListener("dispose",c),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let d=u.mapping,p=d===Ml||d===bl,v=d===ds||d===Ds;if(p||v){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Bs(s)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let b=u.image;return p&&b&&b.height>0||v&&b&&l(b)?(n===null&&(n=new Bs(s)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,d){return d===Ml?u.mapping=ds:d===bl&&(u.mapping=Ds),u}function l(u){let d=0,p=6;for(let v=0;v<p;v++)u[v]!==void 0&&d++;return d===p}function c(u){let d=u.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function W1(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Es("WebGLRenderer: "+n+" extension not supported."),i}}}function X1(s,t,e,n){let i={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete i[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)t.update(u[d],s.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,p=f.attributes.position,v=0;if(p===void 0)return;if(d!==null){let b=d.array;v=d.version;for(let S=0,x=b.length;S<x;S+=3){let y=b[S+0],M=b[S+1],T=b[S+2];u.push(y,M,M,T,T,y)}}else{let b=p.array;v=p.version;for(let S=0,x=b.length/3-1;S<x;S+=3){let y=S+0,M=S+1,T=S+2;u.push(y,M,M,T,T,y)}}let g=new(p.count>=65535?ao:Gi)(u,1);g.version=v;let m=r.get(f);m&&t.remove(m),r.set(f,g)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function q1(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){s.drawElements(n,u,r,f*o),e.update(u,n,1)}function c(f,u,d){d!==0&&(s.drawElementsInstanced(n,u,r,f*o,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let v=0;for(let g=0;g<d;g++)v+=u[g];e.update(v,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Y1(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:ae("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Z1(s,t,e){let n=new WeakMap,i=new Pe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let E=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],S=0;d===!0&&(S=1),p===!0&&(S=2),v===!0&&(S=3);let x=a.attributes.position.count*S,y=1;x>t.maxTextureSize&&(y=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let M=new Float32Array(x*y*4*f),T=new oo(M,x,y,f);T.type=Un,T.needsUpdate=!0;let _=S*4;for(let A=0;A<f;A++){let C=g[A],F=m[A],I=b[A],N=x*y*4*A;for(let B=0;B<C.count;B++){let k=B*_;d===!0&&(i.fromBufferAttribute(C,B),M[N+k+0]=i.x,M[N+k+1]=i.y,M[N+k+2]=i.z,M[N+k+3]=0),p===!0&&(i.fromBufferAttribute(F,B),M[N+k+4]=i.x,M[N+k+5]=i.y,M[N+k+6]=i.z,M[N+k+7]=0),v===!0&&(i.fromBufferAttribute(I,B),M[N+k+8]=i.x,M[N+k+9]=i.y,M[N+k+10]=i.z,M[N+k+11]=I.itemSize===4?i.w:1)}}u={count:f,texture:T,size:new vt(x,y)},n.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function j1(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var J1={[Fo]:"LINEAR_TONE_MAPPING",[Lo]:"REINHARD_TONE_MAPPING",[Do]:"CINEON_TONE_MAPPING",[fs]:"ACES_FILMIC_TONE_MAPPING",[Uo]:"AGX_TONE_MAPPING",[Bo]:"NEUTRAL_TONE_MAPPING",[No]:"CUSTOM_TONE_MAPPING"};function $1(s,t,e,n,i,r){let o=new Je(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new _e;c.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new qt([0,2,0,0,2,0],2));let h=new Tr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new be(c,h),u=new cs(-1,1,1,-1,0,1),d=null,p=null,v=!1,g,m=null,b=[],S=!1;this.setSize=function(x,y){o.setSize(x,y),a!==null&&a.setSize(x,y),l!==null&&l.setSize(x,y);for(let M=0;M<b.length;M++){let T=b[M];T.setSize&&T.setSize(x,y)}},this.setEffects=function(x){b=x,S=b.length>0&&b[0].isRenderPass===!0;let y=o.width,M=o.height;b.length>0&&a===null&&(a=new Je(y,M,{type:an,depthBuffer:!1,stencilBuffer:!1}),l=new Je(y,M,{type:an,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<b.length;T++){let _=b[T];_.setSize&&_.setSize(y,M)}},this.begin=function(x,y){if(v||x.toneMapping===oi&&b.length===0)return!1;if(m=y,y!==null){let M=y.width,T=y.height;(o.width!==M||o.height!==T)&&this.setSize(M,T)}return S===!1&&x.setRenderTarget(o),g=x.toneMapping,x.toneMapping=oi,!0},this.hasRenderPass=function(){return S},this.end=function(x,y){x.toneMapping=g,v=!0;let M=o,T=a;for(let _=0;_<b.length;_++){let E=b[_];E.enabled!==!1&&(E.render(x,T,M,y),E.needsSwap!==!1&&(M=T,T=T===a?l:a))}if(d!==x.outputColorSpace||p!==x.toneMapping){d=x.outputColorSpace,p=x.toneMapping,h.defines={},ye.getTransfer(d)===Te&&(h.defines.SRGB_TRANSFER="");let _=J1[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,x.setRenderTarget(m),x.render(f,u),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var X0=new bn,tu=new Si(1,1),q0=new oo,Y0=new Ka,Z0=new co,w0=[],A0=[],R0=new Float32Array(16),C0=new Float32Array(9),P0=new Float32Array(4);function Dr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=w0[i];if(r===void 0&&(r=new Float32Array(i),w0[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function sn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function rn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function dc(s,t){let e=A0[t];e===void 0&&(e=new Int32Array(t),A0[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function K1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Q1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;s.uniform2fv(this.addr,t),rn(e,t)}}function tx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(sn(e,t))return;s.uniform3fv(this.addr,t),rn(e,t)}}function ex(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;s.uniform4fv(this.addr,t),rn(e,t)}}function nx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;P0.set(n),s.uniformMatrix2fv(this.addr,!1,P0),rn(e,n)}}function ix(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;C0.set(n),s.uniformMatrix3fv(this.addr,!1,C0),rn(e,n)}}function sx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;R0.set(n),s.uniformMatrix4fv(this.addr,!1,R0),rn(e,n)}}function rx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function ox(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;s.uniform2iv(this.addr,t),rn(e,t)}}function ax(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;s.uniform3iv(this.addr,t),rn(e,t)}}function lx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;s.uniform4iv(this.addr,t),rn(e,t)}}function cx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function hx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;s.uniform2uiv(this.addr,t),rn(e,t)}}function ux(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;s.uniform3uiv(this.addr,t),rn(e,t)}}function fx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;s.uniform4uiv(this.addr,t),rn(e,t)}}function dx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(tu.compareFunction=e.isReversedDepthBuffer()?lc:ac,r=tu):r=X0,e.setTexture2D(t||r,i)}function px(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Y0,i)}function mx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Z0,i)}function gx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||q0,i)}function xx(s){switch(s){case 5126:return K1;case 35664:return Q1;case 35665:return tx;case 35666:return ex;case 35674:return nx;case 35675:return ix;case 35676:return sx;case 5124:case 35670:return rx;case 35667:case 35671:return ox;case 35668:case 35672:return ax;case 35669:case 35673:return lx;case 5125:return cx;case 36294:return hx;case 36295:return ux;case 36296:return fx;case 35678:case 36198:case 36298:case 36306:case 35682:return dx;case 35679:case 36299:case 36307:return px;case 35680:case 36300:case 36308:case 36293:return mx;case 36289:case 36303:case 36311:case 36292:return gx}}function vx(s,t){s.uniform1fv(this.addr,t)}function _x(s,t){let e=Dr(t,this.size,2);s.uniform2fv(this.addr,e)}function yx(s,t){let e=Dr(t,this.size,3);s.uniform3fv(this.addr,e)}function Mx(s,t){let e=Dr(t,this.size,4);s.uniform4fv(this.addr,e)}function bx(s,t){let e=Dr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Sx(s,t){let e=Dr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Ex(s,t){let e=Dr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Tx(s,t){s.uniform1iv(this.addr,t)}function wx(s,t){s.uniform2iv(this.addr,t)}function Ax(s,t){s.uniform3iv(this.addr,t)}function Rx(s,t){s.uniform4iv(this.addr,t)}function Cx(s,t){s.uniform1uiv(this.addr,t)}function Px(s,t){s.uniform2uiv(this.addr,t)}function Ix(s,t){s.uniform3uiv(this.addr,t)}function Fx(s,t){s.uniform4uiv(this.addr,t)}function Lx(s,t,e){let n=this.cache,i=t.length,r=dc(e,i);sn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=tu:o=X0;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function Dx(s,t,e){let n=this.cache,i=t.length,r=dc(e,i);sn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Y0,r[o])}function Nx(s,t,e){let n=this.cache,i=t.length,r=dc(e,i);sn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Z0,r[o])}function Ux(s,t,e){let n=this.cache,i=t.length,r=dc(e,i);sn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||q0,r[o])}function Bx(s){switch(s){case 5126:return vx;case 35664:return _x;case 35665:return yx;case 35666:return Mx;case 35674:return bx;case 35675:return Sx;case 35676:return Ex;case 5124:case 35670:return Tx;case 35667:case 35671:return wx;case 35668:case 35672:return Ax;case 35669:case 35673:return Rx;case 5125:return Cx;case 36294:return Px;case 36295:return Ix;case 36296:return Fx;case 35678:case 36198:case 36298:case 36306:case 35682:return Lx;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Nx;case 36289:case 36303:case 36311:case 36292:return Ux}}var eu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xx(e.type)}},nu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bx(e.type)}},iu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Kh=/(\w+)(\])?(\[|\.)?/g;function I0(s,t){s.seq.push(t),s.map[t.id]=t}function Ox(s,t,e){let n=s.name,i=n.length;for(Kh.lastIndex=0;;){let r=Kh.exec(n),o=Kh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){I0(e,c===void 0?new eu(a,s,t):new nu(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new iu(a),I0(e,f)),e=f}}}var Lr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Ox(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function F0(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var zx=37297,kx=0;function Hx(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var L0=new ue;function Gx(s){ye._getMatrix(L0,ye.workingColorSpace,s);let t=`mat3( ${L0.elements.map(e=>e.toFixed(4))} )`;switch(ye.getTransfer(s)){case no:return[t,"LinearTransferOETF"];case Te:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function D0(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Hx(s.getShaderSource(t),a)}else return r}function Vx(s,t){let e=Gx(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Wx={[Fo]:"Linear",[Lo]:"Reinhard",[Do]:"Cineon",[fs]:"ACESFilmic",[Uo]:"AgX",[Bo]:"Neutral",[No]:"Custom"};function Xx(s,t){let e=Wx[t];return e===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var hc=new U;function qx(){ye.getLuminanceCoefficients(hc);let s=hc.x.toFixed(4),t=hc.y.toFixed(4),e=hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function Zx(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jx(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Zo(s){return s!==""}function N0(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function U0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Jx=/^[ \t]*#include +<([\w\d./]+)>/gm;function su(s){return s.replace(Jx,Kx)}var $x=new Map;function Kx(s,t){let e=xe[t];if(e===void 0){let n=$x.get(t);if(n!==void 0)e=xe[n],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return su(e)}var Qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function B0(s){return s.replace(Qx,tv)}function tv(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function O0(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var ev={[hs]:"SHADOWMAP_TYPE_PCF",[Rr]:"SHADOWMAP_TYPE_VSM"};function nv(s){return ev[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var iv={[ds]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE",[Oo]:"ENVMAP_TYPE_CUBE_UV"};function sv(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":iv[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var rv={[Ds]:"ENVMAP_MODE_REFRACTION"};function ov(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":rv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var av={[yl]:"ENVMAP_BLENDING_MULTIPLY",[$f]:"ENVMAP_BLENDING_MIX",[Kf]:"ENVMAP_BLENDING_ADD"};function lv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":av[s.combine]||"ENVMAP_BLENDING_NONE"}function cv(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function hv(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=nv(e),c=sv(e),h=ov(e),f=lv(e),u=cv(e),d=Yx(e),p=Zx(r),v=i.createProgram(),g,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Zo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Zo).join(`
`),m.length>0&&(m+=`
`)):(g=[O0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),m=[O0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?xe.tonemapping_pars_fragment:"",e.toneMapping!==oi?Xx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,Vx("linearToOutputTexel",e.outputColorSpace),qx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zo).join(`
`)),o=su(o),o=N0(o,e),o=U0(o,e),a=su(a),a=N0(a,e),a=U0(a,e),o=B0(o),a=B0(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=b+g+o,x=b+m+a,y=F0(i,i.VERTEX_SHADER,S),M=F0(i,i.FRAGMENT_SHADER,x);i.attachShader(v,y),i.attachShader(v,M),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function T(C){if(s.debug.checkShaderErrors){let F=i.getProgramInfoLog(v)||"",I=i.getShaderInfoLog(y)||"",N=i.getShaderInfoLog(M)||"",B=F.trim(),k=I.trim(),z=N.trim(),Q=!0,H=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,y,M);else{let Z=D0(i,y,"vertex"),q=D0(i,M,"fragment");ae("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+Z+`
`+q)}else B!==""?oe("WebGLProgram: Program Info Log:",B):(k===""||z==="")&&(H=!1);H&&(C.diagnostics={runnable:Q,programLog:B,vertexShader:{log:k,prefix:g},fragmentShader:{log:z,prefix:m}})}i.deleteShader(y),i.deleteShader(M),_=new Lr(i,v),E=jx(i,v)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(v,zx)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kx++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=M,this}var uv=0,ru=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ou(t),e.set(t,n)),n}},ou=class{constructor(t){this.id=uv++,this.code=t,this.usedTimes=0}};function fv(s){return s===gs||s===Wo||s===Xo}function dv(s,t,e,n,i,r){let o=new dr,a=new ru,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,E,A,C,F,I){let N=C.fog,B=F.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Q=t.get(_.envMap||k,z),H=Q&&Q.mapping===Oo?Q.image.height:null,Z=d[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&oe("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,gt=q!==void 0?q.length:0,St=0;B.morphAttributes.position!==void 0&&(St=1),B.morphAttributes.normal!==void 0&&(St=2),B.morphAttributes.color!==void 0&&(St=3);let Y,$,dt,X;if(Z){let Ne=Ci[Z];Y=Ne.vertexShader,$=Ne.fragmentShader}else{Y=_.vertexShader,$=_.fragmentShader;let Ne=a.getVertexShaderStage(_),Re=a.getFragmentShaderStage(_);a.update(_,Ne,Re),dt=Ne.id,X=Re.id}let K=s.getRenderTarget(),P=s.state.buffers.depth.getReversed(),L=F.isInstancedMesh===!0,V=F.isBatchedMesh===!0,ot=!!_.map,Et=!!_.matcap,tt=!!Q,rt=!!_.aoMap,pt=!!_.lightMap,xt=!!_.bumpMap&&_.wireframe===!1,bt=!!_.normalMap,It=!!_.displacementMap,kt=!!_.emissiveMap,Rt=!!_.metalnessMap,jt=!!_.roughnessMap,O=_.anisotropy>0,me=_.clearcoat>0,fe=_.dispersion>0,D=_.retroreflectivity>0,w=_.iridescence>0,J=_.sheen>0,et=_.transmission>0,ct=O&&!!_.anisotropyMap,Tt=me&&!!_.clearcoatMap,Ct=me&&!!_.clearcoatNormalMap,ht=me&&!!_.clearcoatRoughnessMap,mt=w&&!!_.iridescenceMap,Lt=w&&!!_.iridescenceThicknessMap,te=J&&!!_.sheenColorMap,Ft=J&&!!_.sheenRoughnessMap,Pt=!!_.specularMap,Jt=!!_.specularColorMap,ne=!!_.specularIntensityMap,ce=et&&!!_.transmissionMap,W=et&&!!_.thicknessMap,Dt=!!_.gradientMap,ft=!!_.alphaMap,Nt=_.alphaTest>0,Gt=!!_.alphaHash,Mt=!!_.extensions,se=oi;_.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(se=s.toneMapping);let Qt={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:Y,fragmentShader:$,defines:_.defines,customVertexShaderID:dt,customFragmentShaderID:X,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:V,batchingColor:V&&F._colorsTexture!==null,instancing:L,instancingColor:L&&F.instanceColor!==null,instancingMorph:L&&F.morphTexture!==null,outputColorSpace:K===null?s.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ye.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ot,matcap:Et,envMap:tt,envMapMode:tt&&Q.mapping,envMapCubeUVHeight:H,aoMap:rt,lightMap:pt,bumpMap:xt,normalMap:bt,displacementMap:It,emissiveMap:kt,normalMapObjectSpace:bt&&_.normalMapType===n0,normalMapTangentSpace:bt&&_.normalMapType===Pr,packedNormalMap:bt&&_.normalMapType===Pr&&fv(_.normalMap.format),metalnessMap:Rt,roughnessMap:jt,anisotropy:O,anisotropyMap:ct,clearcoat:me,clearcoatMap:Tt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:ht,dispersion:fe,retroreflection:D,iridescence:w,iridescenceMap:mt,iridescenceThicknessMap:Lt,sheen:J,sheenColorMap:te,sheenRoughnessMap:Ft,specularMap:Pt,specularColorMap:Jt,specularIntensityMap:ne,transmission:et,transmissionMap:ce,thicknessMap:W,gradientMap:Dt,opaque:_.transparent===!1&&_.blending===Xi&&_.alphaToCoverage===!1,alphaMap:ft,alphaTest:Nt,alphaHash:Gt,combine:_.combine,mapUv:ot&&p(_.map.channel),aoMapUv:rt&&p(_.aoMap.channel),lightMapUv:pt&&p(_.lightMap.channel),bumpMapUv:xt&&p(_.bumpMap.channel),normalMapUv:bt&&p(_.normalMap.channel),displacementMapUv:It&&p(_.displacementMap.channel),emissiveMapUv:kt&&p(_.emissiveMap.channel),metalnessMapUv:Rt&&p(_.metalnessMap.channel),roughnessMapUv:jt&&p(_.roughnessMap.channel),anisotropyMapUv:ct&&p(_.anisotropyMap.channel),clearcoatMapUv:Tt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:te&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&p(_.sheenRoughnessMap.channel),specularMapUv:Pt&&p(_.specularMap.channel),specularColorMapUv:Jt&&p(_.specularColorMap.channel),specularIntensityMapUv:ne&&p(_.specularIntensityMap.channel),transmissionMapUv:ce&&p(_.transmissionMap.channel),thicknessMapUv:W&&p(_.thicknessMap.channel),alphaMapUv:ft&&p(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(bt||O),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(ot||ft),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&bt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:P,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:St,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:se,decodeVideoTexture:ot&&_.map.isVideoTexture===!0&&ye.getTransfer(_.map.colorSpace)===Te,decodeVideoTextureEmissive:kt&&_.emissiveMap.isVideoTexture===!0&&ye.getTransfer(_.emissiveMap.colorSpace)===Te,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===An,flipSided:_.side===dn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Mt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&_.extensions.multiDraw===!0||V)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Qt.vertexUv1s=l.has(1),Qt.vertexUv2s=l.has(2),Qt.vertexUv3s=l.has(3),l.clear(),Qt}function g(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let A in _.defines)E.push(A),E.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(m(E,_),b(E,_),E.push(s.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function m(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function b(_,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function S(_){let E=d[_.type],A;if(E){let C=Ci[E];A=qn.clone(C.uniforms)}else A=_.uniforms;return A}function x(_,E){let A=h.get(E);return A!==void 0?++A.usedTimes:(A=new hv(s,E,_,i),c.push(A),h.set(E,A)),A}function y(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function M(_){a.remove(_)}function T(){a.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:S,acquireProgram:x,releaseProgram:y,releaseShaderCache:M,programs:c,dispose:T}}function pv(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function mv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function z0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function k0(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,p,v,g,m){let b=s[t];return b===void 0?(b={id:u.id,object:u,geometry:d,material:p,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:g,group:m},s[t]=b):(b.id=u.id,b.object=u,b.geometry=d,b.material=p,b.materialVariant=o(u),b.groupOrder=v,b.renderOrder=u.renderOrder,b.z=g,b.group=m),t++,b}function l(u,d,p,v,g,m,b){b.reversedDepth===!0&&(g=-g);let S=a(u,d,p,v,g,m);p.transmission>0?n.push(S):p.transparent===!0?i.push(S):e.push(S)}function c(u,d,p,v,g,m){let b=a(u,d,p,v,g,m);p.transmission>0?n.unshift(b):p.transparent===!0?i.unshift(b):e.unshift(b)}function h(u,d){e.length>1&&e.sort(u||mv),n.length>1&&n.sort(d||z0),i.length>1&&i.sort(d||z0)}function f(){for(let u=t,d=s.length;u<d;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:f,sort:h}}function gv(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new k0,s.set(n,[o])):i>=r.length?(o=new k0,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function xv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new ie};break;case"SpotLight":e={position:new U,direction:new U,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function vv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var _v=0;function yv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Mv(s){let t=new xv,e=vv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let i=new U,r=new he,o=new he;function a(c){let h=0,f=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,p=0,v=0,g=0,m=0,b=0,S=0,x=0,y=0,M=0,T=0,_=0,E=0,A=0;c.sort(yv);for(let F=0,I=c.length;F<I;F++){let N=c[F],B=N.color,k=N.intensity,z=N.distance,Q=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===gs?Q=N.shadow.map.texture:Q=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=B.r*k,f+=B.g*k,u+=B.b*k;else if(N.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(N.sh.coefficients[H],k);A++}else if(N.isSunLight){let H=t.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Z=N.shadow,q=e.get(N);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[p]=q,n.sunShadowMap[p]=Q;let gt=Z.getViewportCount();for(let St=0;St<gt;St++)n.sunShadowMatrix[v+St]=Z.getMatrix(St),n.sunShadowCascade[v+St]=Z._cascadeData[St];v+=gt,p++}n.sun[d]=H,d++}else if(N.isDirectionalLight){let H=t.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Z=N.shadow,q=e.get(N);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,n.directionalShadow[g]=q,n.directionalShadowMap[g]=Q,n.directionalShadowMatrix[g]=N.shadow.matrix,y++}n.directional[g]=H,g++}else if(N.isSpotLight){let H=t.get(N);H.position.setFromMatrixPosition(N.matrixWorld),H.color.copy(B).multiplyScalar(k),H.distance=z,H.coneCos=Math.cos(N.angle),H.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),H.decay=N.decay,n.spot[b]=H;let Z=N.shadow;if(N.map&&(n.spotLightMap[_]=N.map,_++,Z.updateMatrices(N),N.castShadow&&E++),n.spotLightMatrix[b]=Z.matrix,N.castShadow){let q=e.get(N);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,n.spotShadow[b]=q,n.spotShadowMap[b]=Q,T++}b++}else if(N.isRectAreaLight){let H=t.get(N);H.color.copy(B).multiplyScalar(k),H.halfWidth.set(N.width*.5,0,0),H.halfHeight.set(0,N.height*.5,0),n.rectArea[S]=H,S++}else if(N.isPointLight){let H=t.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),H.distance=N.distance,H.decay=N.decay,N.castShadow){let Z=N.shadow,q=e.get(N);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,q.shadowCameraNear=Z.camera.near,q.shadowCameraFar=Z.camera.far,n.pointShadow[m]=q,n.pointShadowMap[m]=Q,n.pointShadowMatrix[m]=N.shadow.matrix,M++}n.point[m]=H,m++}else if(N.isHemisphereLight){let H=t.get(N);H.skyColor.copy(N.color).multiplyScalar(k),H.groundColor.copy(N.groundColor).multiplyScalar(k),n.hemi[x]=H,x++}}S>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Bt.LTC_FLOAT_1,n.rectAreaLTC2=Bt.LTC_FLOAT_2):(n.rectAreaLTC1=Bt.LTC_HALF_1,n.rectAreaLTC2=Bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let C=n.hash;(C.sunLength!==d||C.directionalLength!==g||C.pointLength!==m||C.spotLength!==b||C.rectAreaLength!==S||C.hemiLength!==x||C.numSunShadows!==p||C.numDirectionalShadows!==y||C.numPointShadows!==M||C.numSpotShadows!==T||C.numSpotMaps!==_||C.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=g,n.spot.length=b,n.rectArea.length=S,n.point.length=m,n.hemi.length=x,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,C.sunLength=d,C.directionalLength=g,C.pointLength=m,C.spotLength=b,C.rectAreaLength=S,C.hemiLength=x,C.numSunShadows=p,C.numDirectionalShadows=y,C.numPointShadows=M,C.numSpotShadows=T,C.numSpotMaps=_,C.numLightProbes=A,n.version=_v++)}function l(c,h){let f=0,u=0,d=0,p=0,v=0,g=0,m=h.matrixWorldInverse;for(let b=0,S=c.length;b<S;b++){let x=c[b];if(x.isSunLight){let y=n.sun[f];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),f++}else if(x.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(x.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){let y=n.rectArea[v];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let y=n.hemi[g];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function H0(s){let t=new Mv(s),e=[],n=[],i=[];function r(u){f.camera=u,e.length=0,n.length=0,i.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function bv(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new H0(s),t.set(i,[a])):r>=o.length?(a=new H0(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Sv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ev=`uniform sampler2D shadow_pass;
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
}`,Tv=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],wv=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],G0=new he,Yo=new U,Qh=new U;function Av(s,t,e){let n=new vr,i=new vt,r=new vt,o=new Pe,a=new sl,l=new rl,c={},h=e.maxTextureSize,f={[Wn]:dn,[dn]:Wn,[An]:An},u=new Ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:Sv,fragmentShader:Ev}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let p=new _e;p.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new be(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hs;let m=this.type;this.render=function(M,T,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===Uf&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=hs);let E=s.getRenderTarget(),A=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),F=s.state;F.setBlending($e),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let I=m!==this.type;I&&T.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(B=>B.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,B=M.length;N<B;N++){let k=M[N],z=k.shadow;if(z===void 0){oe("WebGLShadowMap:",k,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let Q=z.getFrameExtents();i.multiply(Q),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Q.x),i.x=r.x*Q.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Q.y),i.y=r.y*Q.y,z.mapSize.y=r.y));let H=s.state.buffers.depth.getReversed();if(z.camera._reversedDepth=H,z.map===null||I===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Rr){if(k.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Je(i.x,i.y,{format:gs,type:an,minFilter:un,magFilter:un,generateMipmaps:!1}),z.map.texture.name=k.name+".shadowMap",z.map.depthTexture=new Si(i.x,i.y,Un),z.map.depthTexture.name=k.name+".shadowMapDepth",z.map.depthTexture.format=vi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=je,z.map.depthTexture.magFilter=je}else k.isPointLight?(z.map=new uc(i.x),z.map.depthTexture=new Qa(i.x,ai)):(z.map=new Je(i.x,i.y),z.map.depthTexture=new Si(i.x,i.y,ai)),z.map.depthTexture.name=k.name+".shadowMap",z.map.depthTexture.format=vi,this.type===hs?(z.map.depthTexture.compareFunction=H?lc:ac,z.map.depthTexture.minFilter=un,z.map.depthTexture.magFilter=un):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=je,z.map.depthTexture.magFilter=je);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==i.x||z.map.height!==i.y)&&z.map.setSize(i.x,i.y);let Z=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();k.isPointLight!==!0&&z.updateMatrices(k,_);for(let q=0;q<Z;q++){let gt=z.getCamera(q);if(k.isPointLight){let St=z.camera,Y=z.matrix,$=k.distance||St.far;$!==St.far&&(St.far=$,St.updateProjectionMatrix()),Yo.setFromMatrixPosition(k.matrixWorld),St.position.copy(Yo),Qh.copy(St.position),Qh.add(Tv[q]),St.up.copy(wv[q]),St.lookAt(Qh),St.updateMatrixWorld(),Y.makeTranslation(-Yo.x,-Yo.y,-Yo.z),G0.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse),z._frustum.setFromProjectionMatrix(G0,St.coordinateSystem,St.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,q),s.clear();else{q===0&&(s.setRenderTarget(z.map),s.clear());let St=z.getViewport(q);o.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),F.viewport(o)}n=z.getFrustum(q),x(T,_,gt,k,this.type)}z.isPointLightShadow!==!0&&this.type===Rr&&b(z,_),z.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(E,A,C)};function b(M,T){let _=t.update(v);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null?M.mapPass=new Je(i.x,i.y,{format:gs,type:an}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(T,null,_,u,v,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(T,null,_,d,v,null)}function S(M,T,_,E){let A=null,C=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(C!==void 0)A=C;else if(A=_.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let F=A.uuid,I=T.uuid,N=c[F];N===void 0&&(N={},c[F]=N);let B=N[I];B===void 0&&(B=A.clone(),N[I]=B,T.addEventListener("dispose",y)),A=B}if(A.visible=T.visible,A.wireframe=T.wireframe,E===Rr?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:f[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,_.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let F=s.properties.get(A);F.light=_}return A}function x(M,T,_,E,A){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&A===Rr)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);let I=t.update(M),N=M.material;if(Array.isArray(N)){let B=I.groups;for(let k=0,z=B.length;k<z;k++){let Q=B[k],H=N[Q.materialIndex];if(H&&H.visible){let Z=S(M,H,E,A);M.onBeforeShadow(s,M,T,_,I,Z,Q),s.renderBufferDirect(_,null,I,Z,M,Q),M.onAfterShadow(s,M,T,_,I,Z,Q)}}}else if(N.visible){let B=S(M,N,E,A);M.onBeforeShadow(s,M,T,_,I,B,null),s.renderBufferDirect(_,null,I,B,M,null),M.onAfterShadow(s,M,T,_,I,B,null)}}let F=M.children;for(let I=0,N=F.length;I<N;I++)x(F[I],T,_,E,A)}function y(M){M.target.removeEventListener("dispose",y);for(let _ in c){let E=c[_],A=M.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function Rv(s,t){function e(){let W=!1,Dt=new Pe,ft=null,Nt=new Pe(0,0,0,0);return{setMask:function(Gt){ft!==Gt&&!W&&(s.colorMask(Gt,Gt,Gt,Gt),ft=Gt)},setLocked:function(Gt){W=Gt},setClear:function(Gt,Mt,se,Qt,Ne){Ne===!0&&(Gt*=Qt,Mt*=Qt,se*=Qt),Dt.set(Gt,Mt,se,Qt),Nt.equals(Dt)===!1&&(s.clearColor(Gt,Mt,se,Qt),Nt.copy(Dt))},reset:function(){W=!1,ft=null,Nt.set(-1,0,0,0)}}}function n(){let W=!1,Dt=!1,ft=null,Nt=null,Gt=null;return{setReversed:function(Mt){if(Dt!==Mt){let se=t.get("EXT_clip_control");Mt?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),Dt=Mt;let Qt=Gt;Gt=null,this.setClear(Qt)}},getReversed:function(){return Dt},setTest:function(Mt){Mt?K(s.DEPTH_TEST):P(s.DEPTH_TEST)},setMask:function(Mt){ft!==Mt&&!W&&(s.depthMask(Mt),ft=Mt)},setFunc:function(Mt){if(Dt&&(Mt=d0[Mt]),Nt!==Mt){switch(Mt){case Ha:s.depthFunc(s.NEVER);break;case Ga:s.depthFunc(s.ALWAYS);break;case Va:s.depthFunc(s.LESS);break;case cr:s.depthFunc(s.LEQUAL);break;case Wa:s.depthFunc(s.EQUAL);break;case Xa:s.depthFunc(s.GEQUAL);break;case qa:s.depthFunc(s.GREATER);break;case Ya:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Nt=Mt}},setLocked:function(Mt){W=Mt},setClear:function(Mt){Gt!==Mt&&(Gt=Mt,Dt&&(Mt=1-Mt),s.clearDepth(Mt))},reset:function(){W=!1,ft=null,Nt=null,Gt=null,Dt=!1}}}function i(){let W=!1,Dt=null,ft=null,Nt=null,Gt=null,Mt=null,se=null,Qt=null,Ne=null;return{setTest:function(Re){W||(Re?K(s.STENCIL_TEST):P(s.STENCIL_TEST))},setMask:function(Re){Dt!==Re&&!W&&(s.stencilMask(Re),Dt=Re)},setFunc:function(Re,Qn,ui){(ft!==Re||Nt!==Qn||Gt!==ui)&&(s.stencilFunc(Re,Qn,ui),ft=Re,Nt=Qn,Gt=ui)},setOp:function(Re,Qn,ui){(Mt!==Re||se!==Qn||Qt!==ui)&&(s.stencilOp(Re,Qn,ui),Mt=Re,se=Qn,Qt=ui)},setLocked:function(Re){W=Re},setClear:function(Re){Ne!==Re&&(s.clearStencil(Re),Ne=Re)},reset:function(){W=!1,Dt=null,ft=null,Nt=null,Gt=null,Mt=null,se=null,Qt=null,Ne=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,p=[],v=null,g=!1,m=null,b=null,S=null,x=null,y=null,M=null,T=null,_=new ie(0,0,0),E=0,A=!1,C=null,F=null,I=null,N=null,B=null,k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,Q=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=Q>=2);let Z=null,q={},gt=s.getParameter(s.SCISSOR_BOX),St=s.getParameter(s.VIEWPORT),Y=new Pe().fromArray(gt),$=new Pe().fromArray(St);function dt(W,Dt,ft,Nt){let Gt=new Uint8Array(4),Mt=s.createTexture();s.bindTexture(W,Mt),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let se=0;se<ft;se++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Dt,0,s.RGBA,1,1,Nt,0,s.RGBA,s.UNSIGNED_BYTE,Gt):s.texImage2D(Dt+se,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Gt);return Mt}let X={};X[s.TEXTURE_2D]=dt(s.TEXTURE_2D,s.TEXTURE_2D,1),X[s.TEXTURE_CUBE_MAP]=dt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[s.TEXTURE_2D_ARRAY]=dt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),X[s.TEXTURE_3D]=dt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(s.DEPTH_TEST),o.setFunc(cr),xt(!1),bt(Eh),K(s.CULL_FACE),rt($e);function K(W){h[W]!==!0&&(s.enable(W),h[W]=!0)}function P(W){h[W]!==!1&&(s.disable(W),h[W]=!1)}function L(W,Dt){return u[W]!==Dt?(s.bindFramebuffer(W,Dt),u[W]=Dt,W===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Dt),W===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Dt),!0):!1}function V(W,Dt){let ft=p,Nt=!1;if(W){ft=d.get(Dt),ft===void 0&&(ft=[],d.set(Dt,ft));let Gt=W.textures;if(ft.length!==Gt.length||ft[0]!==s.COLOR_ATTACHMENT0){for(let Mt=0,se=Gt.length;Mt<se;Mt++)ft[Mt]=s.COLOR_ATTACHMENT0+Mt;ft.length=Gt.length,Nt=!0}}else ft[0]!==s.BACK&&(ft[0]=s.BACK,Nt=!0);Nt&&s.drawBuffers(ft)}function ot(W){return v!==W?(s.useProgram(W),v=W,!0):!1}let Et={[Xn]:s.FUNC_ADD,[Bf]:s.FUNC_SUBTRACT,[Of]:s.FUNC_REVERSE_SUBTRACT};Et[zf]=s.MIN,Et[kf]=s.MAX;let tt={[Ls]:s.ZERO,[Hf]:s.ONE,[Gf]:s.SRC_COLOR,[Ah]:s.SRC_ALPHA,[qf]:s.SRC_ALPHA_SATURATE,[Io]:s.DST_COLOR,[Po]:s.DST_ALPHA,[Vf]:s.ONE_MINUS_SRC_COLOR,[Rh]:s.ONE_MINUS_SRC_ALPHA,[Xf]:s.ONE_MINUS_DST_COLOR,[Wf]:s.ONE_MINUS_DST_ALPHA,[Yf]:s.CONSTANT_COLOR,[Zf]:s.ONE_MINUS_CONSTANT_COLOR,[jf]:s.CONSTANT_ALPHA,[Jf]:s.ONE_MINUS_CONSTANT_ALPHA};function rt(W,Dt,ft,Nt,Gt,Mt,se,Qt,Ne,Re){if(W===$e){g===!0&&(P(s.BLEND),g=!1);return}if(g===!1&&(K(s.BLEND),g=!0),W!==_l){if(W!==m||Re!==A){if((b!==Xn||y!==Xn)&&(s.blendEquation(s.FUNC_ADD),b=Xn,y=Xn),Re)switch(W){case Xi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case us:s.blendFunc(s.ONE,s.ONE);break;case Th:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ae("WebGLState: Invalid blending: ",W);break}else switch(W){case Xi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Th:ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wh:ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ae("WebGLState: Invalid blending: ",W);break}S=null,x=null,M=null,T=null,_.set(0,0,0),E=0,m=W,A=Re}return}Gt=Gt||Dt,Mt=Mt||ft,se=se||Nt,(Dt!==b||Gt!==y)&&(s.blendEquationSeparate(Et[Dt],Et[Gt]),b=Dt,y=Gt),(ft!==S||Nt!==x||Mt!==M||se!==T)&&(s.blendFuncSeparate(tt[ft],tt[Nt],tt[Mt],tt[se]),S=ft,x=Nt,M=Mt,T=se),(Qt.equals(_)===!1||Ne!==E)&&(s.blendColor(Qt.r,Qt.g,Qt.b,Ne),_.copy(Qt),E=Ne),m=W,A=!1}function pt(W,Dt){W.side===An?P(s.CULL_FACE):K(s.CULL_FACE);let ft=W.side===dn;Dt&&(ft=!ft),xt(ft),W.blending===Xi&&W.transparent===!1?rt($e):rt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let Nt=W.stencilWrite;a.setTest(Nt),Nt&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),kt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?K(s.SAMPLE_ALPHA_TO_COVERAGE):P(s.SAMPLE_ALPHA_TO_COVERAGE)}function xt(W){C!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),C=W)}function bt(W){W!==Df?(K(s.CULL_FACE),W!==F&&(W===Eh?s.cullFace(s.BACK):W===Nf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):P(s.CULL_FACE),F=W}function It(W){W!==I&&(z&&s.lineWidth(W),I=W)}function kt(W,Dt,ft){W?(K(s.POLYGON_OFFSET_FILL),(N!==Dt||B!==ft)&&(N=Dt,B=ft,o.getReversed()&&(Dt=-Dt),s.polygonOffset(Dt,ft))):P(s.POLYGON_OFFSET_FILL)}function Rt(W){W?K(s.SCISSOR_TEST):P(s.SCISSOR_TEST)}function jt(W){W===void 0&&(W=s.TEXTURE0+k-1),Z!==W&&(s.activeTexture(W),Z=W)}function O(W,Dt,ft){ft===void 0&&(Z===null?ft=s.TEXTURE0+k-1:ft=Z);let Nt=q[ft];Nt===void 0&&(Nt={type:void 0,texture:void 0},q[ft]=Nt),(Nt.type!==W||Nt.texture!==Dt)&&(Z!==ft&&(s.activeTexture(ft),Z=ft),s.bindTexture(W,Dt||X[W]),Nt.type=W,Nt.texture=Dt)}function me(){let W=q[Z];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function fe(){try{s.compressedTexImage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function D(){try{s.compressedTexImage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function w(){try{s.texSubImage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function J(){try{s.texSubImage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function et(){try{s.compressedTexSubImage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function ct(){try{s.compressedTexSubImage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function Tt(){try{s.texStorage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function Ct(){try{s.texStorage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function ht(){try{s.texImage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function mt(){try{s.texImage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function Lt(W){return f[W]!==void 0?f[W]:s.getParameter(W)}function te(W,Dt){f[W]!==Dt&&(s.pixelStorei(W,Dt),f[W]=Dt)}function Ft(W){Y.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),Y.copy(W))}function Pt(W){$.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),$.copy(W))}function Jt(W,Dt){let ft=c.get(Dt);ft===void 0&&(ft=new WeakMap,c.set(Dt,ft));let Nt=ft.get(W);Nt===void 0&&(Nt=s.getUniformBlockIndex(Dt,W.name),ft.set(W,Nt))}function ne(W,Dt){let Nt=c.get(Dt).get(W);l.get(Dt)!==Nt&&(s.uniformBlockBinding(Dt,Nt,W.__bindingPointIndex),l.set(Dt,Nt))}function ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},Z=null,q={},u={},d=new WeakMap,p=[],v=null,g=!1,m=null,b=null,S=null,x=null,y=null,M=null,T=null,_=new ie(0,0,0),E=0,A=!1,C=null,F=null,I=null,N=null,B=null,Y.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:P,bindFramebuffer:L,drawBuffers:V,useProgram:ot,setBlending:rt,setMaterial:pt,setFlipSided:xt,setCullFace:bt,setLineWidth:It,setPolygonOffset:kt,setScissorTest:Rt,activeTexture:jt,bindTexture:O,unbindTexture:me,compressedTexImage2D:fe,compressedTexImage3D:D,texImage2D:ht,texImage3D:mt,pixelStorei:te,getParameter:Lt,updateUBOMapping:Jt,uniformBlockBinding:ne,texStorage2D:Tt,texStorage3D:Ct,texSubImage2D:w,texSubImage3D:J,compressedTexSubImage2D:et,compressedTexSubImage3D:ct,scissor:Ft,viewport:Pt,reset:ce}}function Cv(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,h=new WeakMap,f=new Set,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(D,w){return p?new OffscreenCanvas(D,w):io("canvas")}function g(D,w,J){let et=1,ct=fe(D);if((ct.width>J||ct.height>J)&&(et=J/Math.max(ct.width,ct.height)),et<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let Tt=Math.floor(et*ct.width),Ct=Math.floor(et*ct.height);u===void 0&&(u=v(Tt,Ct));let ht=w?v(Tt,Ct):u;return ht.width=Tt,ht.height=Ct,ht.getContext("2d").drawImage(D,0,0,Tt,Ct),oe("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+Tt+"x"+Ct+")."),ht}else return"data"in D&&oe("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),D;return D}function m(D){return D.generateMipmaps}function b(D){s.generateMipmap(D)}function S(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(D,w,J,et,ct,Tt=!1){if(D!==null){if(s[D]!==void 0)return s[D];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ct;et&&(Ct=t.get("EXT_texture_norm16"),Ct||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ht=w;if(w===s.RED&&(J===s.FLOAT&&(ht=s.R32F),J===s.HALF_FLOAT&&(ht=s.R16F),J===s.UNSIGNED_BYTE&&(ht=s.R8),J===s.UNSIGNED_SHORT&&Ct&&(ht=Ct.R16_EXT),J===s.SHORT&&Ct&&(ht=Ct.R16_SNORM_EXT)),w===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(ht=s.R8UI),J===s.UNSIGNED_SHORT&&(ht=s.R16UI),J===s.UNSIGNED_INT&&(ht=s.R32UI),J===s.BYTE&&(ht=s.R8I),J===s.SHORT&&(ht=s.R16I),J===s.INT&&(ht=s.R32I)),w===s.RG&&(J===s.FLOAT&&(ht=s.RG32F),J===s.HALF_FLOAT&&(ht=s.RG16F),J===s.UNSIGNED_BYTE&&(ht=s.RG8),J===s.UNSIGNED_SHORT&&Ct&&(ht=Ct.RG16_EXT),J===s.SHORT&&Ct&&(ht=Ct.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(ht=s.RG8UI),J===s.UNSIGNED_SHORT&&(ht=s.RG16UI),J===s.UNSIGNED_INT&&(ht=s.RG32UI),J===s.BYTE&&(ht=s.RG8I),J===s.SHORT&&(ht=s.RG16I),J===s.INT&&(ht=s.RG32I)),w===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(ht=s.RGB8UI),J===s.UNSIGNED_SHORT&&(ht=s.RGB16UI),J===s.UNSIGNED_INT&&(ht=s.RGB32UI),J===s.BYTE&&(ht=s.RGB8I),J===s.SHORT&&(ht=s.RGB16I),J===s.INT&&(ht=s.RGB32I)),w===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(ht=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(ht=s.RGBA16UI),J===s.UNSIGNED_INT&&(ht=s.RGBA32UI),J===s.BYTE&&(ht=s.RGBA8I),J===s.SHORT&&(ht=s.RGBA16I),J===s.INT&&(ht=s.RGBA32I)),w===s.RGB&&(J===s.UNSIGNED_SHORT&&Ct&&(ht=Ct.RGB16_EXT),J===s.SHORT&&Ct&&(ht=Ct.RGB16_SNORM_EXT),J===s.UNSIGNED_INT_5_9_9_9_REV&&(ht=s.RGB9_E5),J===s.UNSIGNED_INT_10F_11F_11F_REV&&(ht=s.R11F_G11F_B10F)),w===s.RGBA){let mt=Tt?no:ye.getTransfer(ct);J===s.FLOAT&&(ht=s.RGBA32F),J===s.HALF_FLOAT&&(ht=s.RGBA16F),J===s.UNSIGNED_BYTE&&(ht=mt===Te?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT&&Ct&&(ht=Ct.RGBA16_EXT),J===s.SHORT&&Ct&&(ht=Ct.RGBA16_SNORM_EXT),J===s.UNSIGNED_SHORT_4_4_4_4&&(ht=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(ht=s.RGB5_A1)}return(ht===s.R16F||ht===s.R32F||ht===s.RG16F||ht===s.RG32F||ht===s.RGBA16F||ht===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function y(D,w){let J;return D?w===null||w===ai||w===ms?J=s.DEPTH24_STENCIL8:w===Un?J=s.DEPTH32F_STENCIL8:w===Cr&&(J=s.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ai||w===ms?J=s.DEPTH_COMPONENT24:w===Un?J=s.DEPTH_COMPONENT32F:w===Cr&&(J=s.DEPTH_COMPONENT16),J}function M(D,w){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==je&&D.minFilter!==un?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function T(D){let w=D.target;w.removeEventListener("dispose",T),E(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&f.delete(w)}function _(D){let w=D.target;w.removeEventListener("dispose",_),C(w)}function E(D){let w=n.get(D);if(w.__webglInit===void 0)return;let J=D.source,et=d.get(J);if(et){let ct=et[w.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&A(D),Object.keys(et).length===0&&d.delete(J)}n.remove(D)}function A(D){let w=n.get(D);s.deleteTexture(w.__webglTexture);let J=D.source,et=d.get(J);delete et[w.__cacheKey],o.memory.textures--}function C(D){let w=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(w.__webglFramebuffer[et]))for(let ct=0;ct<w.__webglFramebuffer[et].length;ct++)s.deleteFramebuffer(w.__webglFramebuffer[et][ct]);else s.deleteFramebuffer(w.__webglFramebuffer[et]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[et])}else{if(Array.isArray(w.__webglFramebuffer))for(let et=0;et<w.__webglFramebuffer.length;et++)s.deleteFramebuffer(w.__webglFramebuffer[et]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let et=0;et<w.__webglColorRenderbuffer.length;et++)w.__webglColorRenderbuffer[et]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[et]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let J=D.textures;for(let et=0,ct=J.length;et<ct;et++){let Tt=n.get(J[et]);Tt.__webglTexture&&(s.deleteTexture(Tt.__webglTexture),o.memory.textures--),n.remove(J[et])}n.remove(D)}let F=0;function I(){F=0}function N(){return F}function B(D){F=D}function k(){let D=F;return D>=i.maxTextures&&oe("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+i.maxTextures),F+=1,D}function z(D){let w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function Q(D,w){let J=n.get(D);if(D.isVideoTexture&&O(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&J.__version!==D.version){let et=D.image;if(et===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{P(J,D,w);return}}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+w)}function H(D,w){let J=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){P(J,D,w);return}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+w)}function Z(D,w){let J=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){P(J,D,w);return}e.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+w)}function q(D,w){let J=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&J.__version!==D.version){L(J,D,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+w)}let gt={[xn]:s.REPEAT,[mi]:s.CLAMP_TO_EDGE,[Za]:s.MIRRORED_REPEAT},St={[je]:s.NEAREST,[t0]:s.NEAREST_MIPMAP_NEAREST,[zo]:s.NEAREST_MIPMAP_LINEAR,[un]:s.LINEAR,[Sl]:s.LINEAR_MIPMAP_NEAREST,[ps]:s.LINEAR_MIPMAP_LINEAR},Y={[s0]:s.NEVER,[c0]:s.ALWAYS,[r0]:s.LESS,[ac]:s.LEQUAL,[o0]:s.EQUAL,[lc]:s.GEQUAL,[a0]:s.GREATER,[l0]:s.NOTEQUAL};function $(D,w){if(w.type===Un&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===un||w.magFilter===Sl||w.magFilter===zo||w.magFilter===ps||w.minFilter===un||w.minFilter===Sl||w.minFilter===zo||w.minFilter===ps)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,gt[w.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,gt[w.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,gt[w.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,St[w.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,St[w.minFilter]),w.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,Y[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===je||w.minFilter!==zo&&w.minFilter!==ps||w.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let J=t.get("EXT_texture_filter_anisotropic");s.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function dt(D,w){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",T));let et=w.source,ct=d.get(et);ct===void 0&&(ct={},d.set(et,ct));let Tt=z(w);if(Tt!==D.__cacheKey){ct[Tt]===void 0&&(ct[Tt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,J=!0),ct[Tt].usedTimes++;let Ct=ct[D.__cacheKey];Ct!==void 0&&(ct[D.__cacheKey].usedTimes--,Ct.usedTimes===0&&A(w)),D.__cacheKey=Tt,D.__webglTexture=ct[Tt].texture}return J}function X(D,w,J){return Math.floor(Math.floor(D/J)/w)}function K(D,w,J,et){let Tt=D.updateRanges;if(Tt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,J,et,w.data);else{Tt.sort((te,Ft)=>te.start-Ft.start);let Ct=0;for(let te=1;te<Tt.length;te++){let Ft=Tt[Ct],Pt=Tt[te],Jt=Ft.start+Ft.count,ne=X(Pt.start,w.width,4),ce=X(Ft.start,w.width,4);Pt.start<=Jt+1&&ne===ce&&X(Pt.start+Pt.count-1,w.width,4)===ne?Ft.count=Math.max(Ft.count,Pt.start+Pt.count-Ft.start):(++Ct,Tt[Ct]=Pt)}Tt.length=Ct+1;let ht=e.getParameter(s.UNPACK_ROW_LENGTH),mt=e.getParameter(s.UNPACK_SKIP_PIXELS),Lt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let te=0,Ft=Tt.length;te<Ft;te++){let Pt=Tt[te],Jt=Math.floor(Pt.start/4),ne=Math.ceil(Pt.count/4),ce=Jt%w.width,W=Math.floor(Jt/w.width),Dt=ne,ft=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,ce),e.pixelStorei(s.UNPACK_SKIP_ROWS,W),e.texSubImage2D(s.TEXTURE_2D,0,ce,W,Dt,ft,J,et,w.data)}D.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,ht),e.pixelStorei(s.UNPACK_SKIP_PIXELS,mt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Lt)}}function P(D,w,J){let et=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(et=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(et=s.TEXTURE_3D);let ct=dt(D,w),Tt=w.source;e.bindTexture(et,D.__webglTexture,s.TEXTURE0+J);let Ct=n.get(Tt);if(Tt.version!==Ct.__version||ct===!0){if(e.activeTexture(s.TEXTURE0+J),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let ft=ye.getPrimaries(ye.workingColorSpace),Nt=w.colorSpace===li?null:ye.getPrimaries(w.colorSpace),Gt=w.colorSpace===li||ft===Nt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt)}e.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let mt=g(w.image,!1,i.maxTextureSize);mt=me(w,mt);let Lt=r.convert(w.format,w.colorSpace),te=r.convert(w.type),Ft=x(w.internalFormat,Lt,te,w.normalized,w.colorSpace,w.isVideoTexture);$(et,w);let Pt,Jt=w.mipmaps,ne=w.isVideoTexture!==!0,ce=Ct.__version===void 0||ct===!0,W=Tt.dataReady,Dt=M(w,mt);if(w.isDepthTexture)Ft=y(w.format===Ai,w.type),ce&&(ne?e.texStorage2D(s.TEXTURE_2D,1,Ft,mt.width,mt.height):e.texImage2D(s.TEXTURE_2D,0,Ft,mt.width,mt.height,0,Lt,te,null));else if(w.isDataTexture)if(Jt.length>0){ne&&ce&&e.texStorage2D(s.TEXTURE_2D,Dt,Ft,Jt[0].width,Jt[0].height);for(let ft=0,Nt=Jt.length;ft<Nt;ft++)Pt=Jt[ft],ne?W&&e.texSubImage2D(s.TEXTURE_2D,ft,0,0,Pt.width,Pt.height,Lt,te,Pt.data):e.texImage2D(s.TEXTURE_2D,ft,Ft,Pt.width,Pt.height,0,Lt,te,Pt.data);w.generateMipmaps=!1}else ne?(ce&&e.texStorage2D(s.TEXTURE_2D,Dt,Ft,mt.width,mt.height),W&&K(w,mt,Lt,te)):e.texImage2D(s.TEXTURE_2D,0,Ft,mt.width,mt.height,0,Lt,te,mt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ne&&ce&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Dt,Ft,Jt[0].width,Jt[0].height,mt.depth);for(let ft=0,Nt=Jt.length;ft<Nt;ft++)if(Pt=Jt[ft],w.format!==Sn)if(Lt!==null)if(ne){if(W)if(w.layerUpdates.size>0){let Gt=Gh(Pt.width,Pt.height,w.format,w.type);for(let Mt of w.layerUpdates){let se=Pt.data.subarray(Mt*Gt/Pt.data.BYTES_PER_ELEMENT,(Mt+1)*Gt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,Mt,Pt.width,Pt.height,1,Lt,se)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,Pt.width,Pt.height,mt.depth,Lt,Pt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ft,Ft,Pt.width,Pt.height,mt.depth,0,Pt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?W&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,Pt.width,Pt.height,mt.depth,Lt,te,Pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ft,Ft,Pt.width,Pt.height,mt.depth,0,Lt,te,Pt.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{ne&&ce&&e.texStorage2D(s.TEXTURE_2D,Dt,Ft,Jt[0].width,Jt[0].height);for(let ft=0,Nt=Jt.length;ft<Nt;ft++)Pt=Jt[ft],w.format!==Sn?Lt!==null?ne?W&&e.compressedTexSubImage2D(s.TEXTURE_2D,ft,0,0,Pt.width,Pt.height,Lt,Pt.data):e.compressedTexImage2D(s.TEXTURE_2D,ft,Ft,Pt.width,Pt.height,0,Pt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?W&&e.texSubImage2D(s.TEXTURE_2D,ft,0,0,Pt.width,Pt.height,Lt,te,Pt.data):e.texImage2D(s.TEXTURE_2D,ft,Ft,Pt.width,Pt.height,0,Lt,te,Pt.data)}else if(w.isDataArrayTexture)if(ne){if(ce&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Dt,Ft,mt.width,mt.height,mt.depth),W)if(w.layerUpdates.size>0){let ft=Gh(mt.width,mt.height,w.format,w.type);for(let Nt of w.layerUpdates){let Gt=mt.data.subarray(Nt*ft/mt.data.BYTES_PER_ELEMENT,(Nt+1)*ft/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Nt,mt.width,mt.height,1,Lt,te,Gt)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Lt,te,mt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ft,mt.width,mt.height,mt.depth,0,Lt,te,mt.data);else if(w.isData3DTexture)ne?(ce&&e.texStorage3D(s.TEXTURE_3D,Dt,Ft,mt.width,mt.height,mt.depth),W&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Lt,te,mt.data)):e.texImage3D(s.TEXTURE_3D,0,Ft,mt.width,mt.height,mt.depth,0,Lt,te,mt.data);else if(w.isFramebufferTexture){if(ce)if(ne)e.texStorage2D(s.TEXTURE_2D,Dt,Ft,mt.width,mt.height);else{let ft=mt.width,Nt=mt.height;for(let Gt=0;Gt<Dt;Gt++)e.texImage2D(s.TEXTURE_2D,Gt,Ft,ft,Nt,0,Lt,te,null),ft>>=1,Nt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){let ft=s.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),mt.parentNode!==ft){ft.appendChild(mt),f.add(w),ft.onpaint=Nt=>{let Gt=Nt.changedElements;for(let Mt of f)Gt.includes(Mt.image)&&(Mt.needsUpdate=!0)},ft.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,mt);else{let Gt=s.RGBA,Mt=s.RGBA,se=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Gt,Mt,se,mt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Jt.length>0){if(ne&&ce){let ft=fe(Jt[0]);e.texStorage2D(s.TEXTURE_2D,Dt,Ft,ft.width,ft.height)}for(let ft=0,Nt=Jt.length;ft<Nt;ft++)Pt=Jt[ft],ne?W&&e.texSubImage2D(s.TEXTURE_2D,ft,0,0,Lt,te,Pt):e.texImage2D(s.TEXTURE_2D,ft,Ft,Lt,te,Pt);w.generateMipmaps=!1}else if(ne){if(ce){let ft=fe(mt);e.texStorage2D(s.TEXTURE_2D,Dt,Ft,ft.width,ft.height)}W&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Lt,te,mt)}else e.texImage2D(s.TEXTURE_2D,0,Ft,Lt,te,mt);m(w)&&b(et),Ct.__version=Tt.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function L(D,w,J){if(w.image.length!==6)return;let et=dt(D,w),ct=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+J);let Tt=n.get(ct);if(ct.version!==Tt.__version||et===!0){e.activeTexture(s.TEXTURE0+J);let Ct=ye.getPrimaries(ye.workingColorSpace),ht=w.colorSpace===li?null:ye.getPrimaries(w.colorSpace),mt=w.colorSpace===li||Ct===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Lt=w.isCompressedTexture||w.image[0].isCompressedTexture,te=w.image[0]&&w.image[0].isDataTexture,Ft=[];for(let Mt=0;Mt<6;Mt++)!Lt&&!te?Ft[Mt]=g(w.image[Mt],!0,i.maxCubemapSize):Ft[Mt]=te?w.image[Mt].image:w.image[Mt],Ft[Mt]=me(w,Ft[Mt]);let Pt=Ft[0],Jt=r.convert(w.format,w.colorSpace),ne=r.convert(w.type),ce=x(w.internalFormat,Jt,ne,w.normalized,w.colorSpace),W=w.isVideoTexture!==!0,Dt=Tt.__version===void 0||et===!0,ft=ct.dataReady,Nt=M(w,Pt);$(s.TEXTURE_CUBE_MAP,w);let Gt;if(Lt){W&&Dt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Nt,ce,Pt.width,Pt.height);for(let Mt=0;Mt<6;Mt++){Gt=Ft[Mt].mipmaps;for(let se=0;se<Gt.length;se++){let Qt=Gt[se];w.format!==Sn?Jt!==null?W?ft&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se,0,0,Qt.width,Qt.height,Jt,Qt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se,ce,Qt.width,Qt.height,0,Qt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se,0,0,Qt.width,Qt.height,Jt,ne,Qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se,ce,Qt.width,Qt.height,0,Jt,ne,Qt.data)}}}else{if(Gt=w.mipmaps,W&&Dt){Gt.length>0&&Nt++;let Mt=fe(Ft[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Nt,ce,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(te){W?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Ft[Mt].width,Ft[Mt].height,Jt,ne,Ft[Mt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ce,Ft[Mt].width,Ft[Mt].height,0,Jt,ne,Ft[Mt].data);for(let se=0;se<Gt.length;se++){let Ne=Gt[se].image[Mt].image;W?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se+1,0,0,Ne.width,Ne.height,Jt,ne,Ne.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se+1,ce,Ne.width,Ne.height,0,Jt,ne,Ne.data)}}else{W?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Jt,ne,Ft[Mt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ce,Jt,ne,Ft[Mt]);for(let se=0;se<Gt.length;se++){let Qt=Gt[se];W?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se+1,0,0,Jt,ne,Qt.image[Mt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se+1,ce,Jt,ne,Qt.image[Mt])}}}m(w)&&b(s.TEXTURE_CUBE_MAP),Tt.__version=ct.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function V(D,w,J,et,ct,Tt){let Ct=r.convert(J.format,J.colorSpace),ht=r.convert(J.type),mt=x(J.internalFormat,Ct,ht,J.normalized,J.colorSpace),Lt=n.get(w),te=n.get(J);if(te.__renderTarget=w,!Lt.__hasExternalTextures){let Ft=Math.max(1,w.width>>Tt),Pt=Math.max(1,w.height>>Tt);ct===s.TEXTURE_3D||ct===s.TEXTURE_2D_ARRAY?e.texImage3D(ct,Tt,mt,Ft,Pt,w.depth,0,Ct,ht,null):e.texImage2D(ct,Tt,mt,Ft,Pt,0,Ct,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,D),jt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,ct,te.__webglTexture,0,Rt(w)):(ct===s.TEXTURE_2D||ct>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,et,ct,te.__webglTexture,Tt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(D,w,J){if(s.bindRenderbuffer(s.RENDERBUFFER,D),w.depthBuffer){let et=w.depthTexture,ct=et&&et.isDepthTexture?et.type:null,Tt=y(w.stencilBuffer,ct),Ct=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;jt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt(w),Tt,w.width,w.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt(w),Tt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Tt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ct,s.RENDERBUFFER,D)}else{let et=w.textures;for(let ct=0;ct<et.length;ct++){let Tt=et[ct],Ct=r.convert(Tt.format,Tt.colorSpace),ht=r.convert(Tt.type),mt=x(Tt.internalFormat,Ct,ht,Tt.normalized,Tt.colorSpace);jt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt(w),mt,w.width,w.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt(w),mt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,mt,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Et(D,w,J){let et=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ct=n.get(w.depthTexture);if(ct.__renderTarget=w,(!ct.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),et){if(ct.__webglInit===void 0&&(ct.__webglInit=!0,w.depthTexture.addEventListener("dispose",T)),ct.__webglTexture===void 0){ct.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,ct.__webglTexture),$(s.TEXTURE_CUBE_MAP,w.depthTexture);let Lt=r.convert(w.depthTexture.format),te=r.convert(w.depthTexture.type),Ft;w.depthTexture.format===vi?Ft=s.DEPTH_COMPONENT24:w.depthTexture.format===Ai&&(Ft=s.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,Ft,w.width,w.height,0,Lt,te,null)}}else Q(w.depthTexture,0);let Tt=ct.__webglTexture,Ct=Rt(w),ht=et?s.TEXTURE_CUBE_MAP_POSITIVE_X+J:s.TEXTURE_2D,mt=w.depthTexture.format===Ai?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===vi)jt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,mt,ht,Tt,0,Ct):s.framebufferTexture2D(s.FRAMEBUFFER,mt,ht,Tt,0);else if(w.depthTexture.format===Ai)jt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,mt,ht,Tt,0,Ct):s.framebufferTexture2D(s.FRAMEBUFFER,mt,ht,Tt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(D){let w=n.get(D),J=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){let et=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),et){let ct=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,et.removeEventListener("dispose",ct)};et.addEventListener("dispose",ct),w.__depthDisposeCallback=ct}w.__boundDepthTexture=et}if(D.depthTexture&&!w.__autoAllocateDepthBuffer)if(J)for(let et=0;et<6;et++)Et(w.__webglFramebuffer[et],D,et);else{let et=D.texture.mipmaps;et&&et.length>0?Et(w.__webglFramebuffer[0],D,0):Et(w.__webglFramebuffer,D,0)}else if(J){w.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[et]),w.__webglDepthbuffer[et]===void 0)w.__webglDepthbuffer[et]=s.createRenderbuffer(),ot(w.__webglDepthbuffer[et],D,!1);else{let ct=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=w.__webglDepthbuffer[et];s.bindRenderbuffer(s.RENDERBUFFER,Tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,Tt)}}else{let et=D.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),ot(w.__webglDepthbuffer,D,!1);else{let ct=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,Tt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(D,w,J){let et=n.get(D);w!==void 0&&V(et.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&tt(D)}function pt(D){let w=D.texture,J=n.get(D),et=n.get(w);D.addEventListener("dispose",_);let ct=D.textures,Tt=D.isWebGLCubeRenderTarget===!0,Ct=ct.length>1;if(Ct||(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=w.version,o.memory.textures++),Tt){J.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer[ht]=[];for(let mt=0;mt<w.mipmaps.length;mt++)J.__webglFramebuffer[ht][mt]=s.createFramebuffer()}else J.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer=[];for(let ht=0;ht<w.mipmaps.length;ht++)J.__webglFramebuffer[ht]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Ct)for(let ht=0,mt=ct.length;ht<mt;ht++){let Lt=n.get(ct[ht]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=s.createTexture(),o.memory.textures++)}if(D.samples>0&&jt(D)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ht=0;ht<ct.length;ht++){let mt=ct[ht];J.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[ht]);let Lt=r.convert(mt.format,mt.colorSpace),te=r.convert(mt.type),Ft=x(mt.internalFormat,Lt,te,mt.normalized,mt.colorSpace,D.isXRRenderTarget===!0),Pt=Rt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,Ft,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,J.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),ot(J.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Tt){e.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture),$(s.TEXTURE_CUBE_MAP,w);for(let ht=0;ht<6;ht++)if(w.mipmaps&&w.mipmaps.length>0)for(let mt=0;mt<w.mipmaps.length;mt++)V(J.__webglFramebuffer[ht][mt],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,mt);else V(J.__webglFramebuffer[ht],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(w)&&b(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ht=0,mt=ct.length;ht<mt;ht++){let Lt=ct[ht],te=n.get(Lt),Ft=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ft=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Ft,te.__webglTexture),$(Ft,Lt),V(J.__webglFramebuffer,D,Lt,s.COLOR_ATTACHMENT0+ht,Ft,0),m(Lt)&&b(Ft)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ht=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,et.__webglTexture),$(ht,w),w.mipmaps&&w.mipmaps.length>0)for(let mt=0;mt<w.mipmaps.length;mt++)V(J.__webglFramebuffer[mt],D,w,s.COLOR_ATTACHMENT0,ht,mt);else V(J.__webglFramebuffer,D,w,s.COLOR_ATTACHMENT0,ht,0);m(w)&&b(ht),e.unbindTexture()}D.depthBuffer&&tt(D)}function xt(D){let w=D.textures;for(let J=0,et=w.length;J<et;J++){let ct=w[J];if(m(ct)){let Tt=S(D),Ct=n.get(ct).__webglTexture;e.bindTexture(Tt,Ct),b(Tt),e.unbindTexture()}}}let bt=[],It=[];function kt(D){if(D.samples>0){if(jt(D)===!1){let w=D.textures,J=D.width,et=D.height,ct=s.COLOR_BUFFER_BIT,Tt=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=n.get(D),ht=w.length>1;if(ht)for(let Lt=0;Lt<w.length;Lt++)e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Lt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Lt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);let mt=D.texture.mipmaps;mt&&mt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Lt=0;Lt<w.length;Lt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ct|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ct|=s.STENCIL_BUFFER_BIT)),ht){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[Lt]);let te=n.get(w[Lt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,J,et,0,0,J,et,ct,s.NEAREST),l===!0&&(bt.length=0,It.length=0,bt.push(s.COLOR_ATTACHMENT0+Lt),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(bt.push(Tt),It.push(Tt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,It)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,bt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ht)for(let Lt=0;Lt<w.length;Lt++){e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Lt,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[Lt]);let te=n.get(w[Lt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Lt,s.TEXTURE_2D,te,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){let w=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Rt(D){return Math.min(i.maxSamples,D.samples)}function jt(D){let w=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function O(D){let w=o.render.frame;h.get(D)!==w&&(h.set(D,w),D.update())}function me(D,w){let J=D.colorSpace,et=D.format,ct=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==eo&&J!==li&&(ye.getTransfer(J)===Te?(et!==Sn||ct!==vn)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ae("WebGLTextures: Unsupported texture color space:",J)),w}function fe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=I,this.getTextureUnits=N,this.setTextureUnits=B,this.setTexture2D=Q,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=q,this.rebindTextures=rt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=V,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Pv(s,t){function e(n,i=li){let r,o=ye.getTransfer(i);if(n===vn)return s.UNSIGNED_BYTE;if(n===Tl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===wl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Fh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Lh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ph)return s.BYTE;if(n===Ih)return s.SHORT;if(n===Cr)return s.UNSIGNED_SHORT;if(n===El)return s.INT;if(n===ai)return s.UNSIGNED_INT;if(n===Un)return s.FLOAT;if(n===an)return s.HALF_FLOAT;if(n===Dh)return s.ALPHA;if(n===Nh)return s.RGB;if(n===Sn)return s.RGBA;if(n===vi)return s.DEPTH_COMPONENT;if(n===Ai)return s.DEPTH_STENCIL;if(n===Al)return s.RED;if(n===Rl)return s.RED_INTEGER;if(n===gs)return s.RG;if(n===Cl)return s.RG_INTEGER;if(n===Pl)return s.RGBA_INTEGER;if(n===ko||n===Ho||n===Go||n===Vo)if(o===Te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ko)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ko)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Il||n===Fl||n===Ll||n===Dl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nl||n===Ul||n===Bl||n===Ol||n===zl||n===Wo||n===kl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Nl||n===Ul)return o===Te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Bl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ol)return r.COMPRESSED_R11_EAC;if(n===zl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Wo)return r.COMPRESSED_RG11_EAC;if(n===kl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Hl||n===Gl||n===Vl||n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===jl||n===Jl||n===$l||n===Kl||n===Ql||n===tc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Hl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ql)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$l)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ql)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ec||n===nc||n===ic)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ec)return o===Te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sc||n===rc||n===Xo||n===oc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===sc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Iv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fv=`
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

}`,au=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ho(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ye({vertexShader:Iv,fragmentShader:Fv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new be(new Ge(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lu=class extends _i{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,p=null,v=typeof XRWebGLBinding<"u",g=new au,m={},b=e.getContextAttributes(),S=null,x=null,y=[],M=[],T=new vt,_=null,E=null,A=new en;A.viewport=new Pe;let C=new en;C.viewport=new Pe;let F=[A,C],I=new xl,N=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=y[X];return K===void 0&&(K=new pr,y[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=y[X];return K===void 0&&(K=new pr,y[X]=K),K.getGripSpace()},this.getHand=function(X){let K=y[X];return K===void 0&&(K=new pr,y[X]=K),K.getHandSpace()};function k(X){let K=M.indexOf(X.inputSource);if(K===-1)return;let P=y[K];P!==void 0&&(P.update(X.inputSource,X.frame,c||o),P.dispatchEvent({type:X.type,data:X.inputSource}))}function z(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",Q);for(let X=0;X<y.length;X++){let K=M[X];K!==null&&(M[X]=null,y[X].disconnect(K))}N=null,B=null,g.reset();for(let X in m)delete m[X];if(t.setRenderTarget(S),d=null,u=null,f=null,i=null,x=null,dt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(T.width,T.height,!1),E!==null){let X=E.camera;X.fov=E.fov,X.zoom=E.zoom,X.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",z),i.addEventListener("inputsourceschange",Q),b.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let P=null,L=null,V=null;b.depth&&(V=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,P=b.stencil?Ai:vi,L=b.stencil?ms:ai);let ot={colorFormat:e.RGBA8,depthFormat:V,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(ot),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new Je(u.textureWidth,u.textureHeight,{format:Sn,type:vn,depthTexture:new Si(u.textureWidth,u.textureHeight,L,void 0,void 0,void 0,void 0,void 0,void 0,P),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let P={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,P),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Je(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),dt.setContext(i),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Q(X){for(let K=0;K<X.removed.length;K++){let P=X.removed[K],L=M.indexOf(P);L>=0&&(M[L]=null,y[L].disconnect(P))}for(let K=0;K<X.added.length;K++){let P=X.added[K],L=M.indexOf(P);if(L===-1){for(let ot=0;ot<y.length;ot++)if(ot>=M.length){M.push(P),L=ot;break}else if(M[ot]===null){M[ot]=P,L=ot;break}if(L===-1)break}let V=y[L];V&&V.connect(P)}}let H=new U,Z=new U;function q(X,K,P){H.setFromMatrixPosition(K.matrixWorld),Z.setFromMatrixPosition(P.matrixWorld);let L=H.distanceTo(Z),V=K.projectionMatrix.elements,ot=P.projectionMatrix.elements,Et=V[14]/(V[10]-1),tt=V[14]/(V[10]+1),rt=(V[9]+1)/V[5],pt=(V[9]-1)/V[5],xt=(V[8]-1)/V[0],bt=(ot[8]+1)/ot[0],It=Et*xt,kt=Et*bt,Rt=L/(-xt+bt),jt=Rt*-xt;if(K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(jt),X.translateZ(Rt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),V[10]===-1)X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let O=Et+Rt,me=tt+Rt,fe=It-jt,D=kt+(L-jt),w=rt*tt/me*O,J=pt*tt/me*O;X.projectionMatrix.makePerspective(fe,D,w,J,O,me),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function gt(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let K=X.near,P=X.far;g.texture!==null&&(g.depthNear>0&&(K=g.depthNear),g.depthFar>0&&(P=g.depthFar)),I.near=C.near=A.near=K,I.far=C.far=A.far=P,(N!==I.near||B!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),N=I.near,B=I.far),I.layers.mask=X.layers.mask|6,A.layers.mask=I.layers.mask&-5,C.layers.mask=I.layers.mask&-3;let L=X.parent,V=I.cameras;gt(I,L);for(let ot=0;ot<V.length;ot++)gt(V[ot],L);V.length===2?q(I,A,C):I.projectionMatrix.copy(A.projectionMatrix),E===null&&X.isPerspectiveCamera&&(E={camera:X,fov:X.fov,zoom:X.zoom}),St(X,I,L)};function St(X,K,P){P===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(P.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ro*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(X){return m[X]};let Y=null;function $(X,K){if(h=K.getViewerPose(c||o),p=K,h!==null){let P=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let L=!1;P.length!==I.cameras.length&&(I.cameras.length=0,L=!0);for(let tt=0;tt<P.length;tt++){let rt=P[tt],pt=null;if(d!==null)pt=d.getViewport(rt);else{let bt=f.getViewSubImage(u,rt);pt=bt.viewport,tt===0&&(t.setRenderTargetTextures(x,bt.colorTexture,bt.depthStencilTexture),t.setRenderTarget(x))}let xt=F[tt];xt===void 0&&(xt=new en,xt.layers.enable(tt),xt.viewport=new Pe,F[tt]=xt),xt.matrix.fromArray(rt.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(rt.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(pt.x,pt.y,pt.width,pt.height),tt===0&&(I.matrix.copy(xt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),L===!0&&I.cameras.push(xt)}let V=i.enabledFeatures;if(V&&V.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let tt=f.getDepthInformation(P[0]);tt&&tt.isValid&&tt.texture&&g.init(tt,i.renderState)}if(V&&V.includes("camera-access")&&v){t.state.unbindTexture(),f=n.getBinding();for(let tt=0;tt<P.length;tt++){let rt=P[tt].camera;if(rt){let pt=m[rt];pt||(pt=new ho,m[rt]=pt);let xt=f.getCameraImage(rt);pt.sourceTexture=xt}}}}for(let P=0;P<y.length;P++){let L=M[P],V=y[P];L!==null&&V!==void 0&&V.update(L,K,c||o)}Y&&Y(X,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),p=null}let dt=new V0;dt.setAnimationLoop($),this.setAnimationLoop=function(X){Y=X},this.dispose=function(){}}},Lv=new he,j0=new ue;j0.set(-1,0,0,0,1,0,0,0,1);function Dv(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,zh(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,b,S,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&d(g,m,x)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,b,S):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===dn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===dn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let b=t.get(m),S=b.envMap,x=b.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(Lv.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(j0),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,b,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=S*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,b){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===dn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let b=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Nv(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){let M=y.program;n.uniformBlockBinding(x,M)}function c(x,y){let M=i[x.id];M===void 0&&(g(x),M=h(x),i[x.id]=M,x.addEventListener("dispose",b));let T=y.program;n.updateUBOMapping(x,T);let _=t.render.frame;r[x.id]!==_&&(u(x),r[x.id]=_)}function h(x){let y=f();x.__bindingPointIndex=y;let M=s.createBuffer(),T=x.__size,_=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,T,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,M),M}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let y=i[x.id],M=x.uniforms,T=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let _=0,E=M.length;_<E;_++){let A=M[_];if(Array.isArray(A))for(let C=0,F=A.length;C<F;C++)d(A[C],_,C,T);else d(A,_,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(x,y,M,T){if(v(x,y,M,T)===!0){let _=x.__offset,E=x.value;if(Array.isArray(E)){let A=0;for(let C=0;C<E.length;C++){let F=E[C],I=m(F);p(F,x.__data,A),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(A+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,x.__data)}}function p(x,y,M){typeof x=="number"||typeof x=="boolean"?y[0]=x:x.isMatrix3?(y[0]=x.elements[0],y[1]=x.elements[1],y[2]=x.elements[2],y[3]=0,y[4]=x.elements[3],y[5]=x.elements[4],y[6]=x.elements[5],y[7]=0,y[8]=x.elements[6],y[9]=x.elements[7],y[10]=x.elements[8],y[11]=0):ArrayBuffer.isView(x)?y.set(new x.constructor(x.buffer,x.byteOffset,y.length)):x.toArray(y,M)}function v(x,y,M,T){let _=x.value,E=y+"_"+M;if(T[E]===void 0)return typeof _=="number"||typeof _=="boolean"?T[E]=_:ArrayBuffer.isView(_)?T[E]=_.slice():T[E]=_.clone(),!0;{let A=T[E];if(typeof _=="number"||typeof _=="boolean"){if(A!==_)return T[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(A.equals(_)===!1)return A.copy(_),!0}}return!1}function g(x){let y=x.uniforms,M=0,T=16;for(let E=0,A=y.length;E<A;E++){let C=Array.isArray(y[E])?y[E]:[y[E]];for(let F=0,I=C.length;F<I;F++){let N=C[F],B=Array.isArray(N.value)?N.value:[N.value];for(let k=0,z=B.length;k<z;k++){let Q=B[k],H=m(Q),Z=M%T,q=Z%H.boundary,gt=Z+q;M+=q,gt!==0&&T-gt<H.storage&&(M+=T-gt),N.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=H.storage}}}let _=M%T;return _>0&&(M+=T-_),x.__size=M,x.__cache={},this}function m(x){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(y.boundary=16,y.storage=x.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",x),y}function b(x){let y=x.target;y.removeEventListener("dispose",b);let M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function S(){for(let x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:S}}var Uv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ri=null;function Bv(){return Ri===null&&(Ri=new bi(Uv,16,16,gs,an),Ri.name="DFG_LUT",Ri.minFilter=un,Ri.magFilter=un,Ri.wrapS=mi,Ri.wrapT=mi,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}var jo=class{constructor(t={}){let{canvas:e=h0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=vn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let v=d,g=new Set([Pl,Cl,Rl]),m=new Set([vn,ai,Cr,ms,Tl,wl]),b=new Uint32Array(4),S=new Int32Array(4),x=new U,y=null,M=null,T=[],_=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,C=!1,F=null,I=null,N=null,B=null;this._outputColorSpace=hn;let k=0,z=0,Q=null,H=-1,Z=null,q=new Pe,gt=new Pe,St=null,Y=new ie(0),$=0,dt=e.width,X=e.height,K=1,P=null,L=null,V=new Pe(0,0,dt,X),ot=new Pe(0,0,dt,X),Et=!1,tt=new vr,rt=!1,pt=!1,xt=new he,bt=new U,It=new Pe,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Rt=!1;function jt(){return Q===null?K:1}let O=n;function me(R,G){return e.getContext(R,G)}let fe,D,w,J,et,ct,Tt,Ct,ht,mt,Lt,te,Ft,Pt,Jt,ne,ce,W,Dt,ft,Nt,Gt,Mt;try{let R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ne,!1),e.addEventListener("webglcontextrestored",Re,!1),e.addEventListener("webglcontextcreationerror",Qn,!1),O===null){let G="webgl2";if(O=me(G,R),O===null)throw me(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}se()}catch(R){throw e.removeEventListener("webglcontextlost",Ne,!1),e.removeEventListener("webglcontextrestored",Re,!1),e.removeEventListener("webglcontextcreationerror",Qn,!1),ae("WebGLRenderer: "+R.message),R}function se(){fe=new W1(O),fe.init(),Nt=new Pv(O,fe),D=new D1(O,fe,t,Nt),w=new Rv(O,fe),D.reversedDepthBuffer&&u&&w.buffers.depth.setReversed(!0),I=O.createFramebuffer(),N=O.createFramebuffer(),B=O.createFramebuffer(),J=new Y1(O),et=new pv,ct=new Cv(O,fe,w,et,D,Nt,J),Tt=new V1(A),Ct=new jp(O),Gt=new F1(O,Ct),ht=new X1(O,Ct,J,Gt),mt=new j1(O,ht,Ct,Gt,J),W=new Z1(O,D,ct),Jt=new N1(et),Lt=new dv(A,Tt,fe,D,Gt,Jt),te=new Dv(A,et),Ft=new gv,Pt=new bv(fe),ce=new I1(A,Tt,w,mt,p,l),ne=new Av(A,mt,D),Mt=new Nv(O,J,D,w),Dt=new L1(O,fe,J),ft=new q1(O,fe,J),J.programs=Lt.programs,A.capabilities=D,A.extensions=fe,A.properties=et,A.renderLists=Ft,A.shadowMap=ne,A.state=w,A.info=J}v!==vn&&(E=new $1(v,e.width,e.height,a,i,r));let Qt=new lu(A,O);this.xr=Qt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let R=fe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=fe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize(dt,X,!1))},this.getSize=function(R){return R.set(dt,X)},this.setSize=function(R,G,at=!0){if(Qt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=R,X=G,e.width=Math.floor(R*K),e.height=Math.floor(G*K),at===!0&&(e.style.width=R+"px",e.style.height=G+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(dt*K,X*K).floor()},this.setDrawingBufferSize=function(R,G,at){dt=R,X=G,K=at,e.width=Math.floor(R*at),e.height=Math.floor(G*at),this.setViewport(0,0,R,G)},this.setEffects=function(R){if(v===vn){ae("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let G=0;G<R.length;G++)if(R[G].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(q)},this.getViewport=function(R){return R.copy(V)},this.setViewport=function(R,G,at,it){R.isVector4?V.set(R.x,R.y,R.z,R.w):V.set(R,G,at,it),w.viewport(q.copy(V).multiplyScalar(K).round())},this.getScissor=function(R){return R.copy(ot)},this.setScissor=function(R,G,at,it){R.isVector4?ot.set(R.x,R.y,R.z,R.w):ot.set(R,G,at,it),w.scissor(gt.copy(ot).multiplyScalar(K).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(R){w.setScissorTest(Et=R)},this.setOpaqueSort=function(R){P=R},this.setTransparentSort=function(R){L=R},this.getClearColor=function(R){return R.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(R=!0,G=!0,at=!0){let it=0;if(R){let st=!1;if(Q!==null){let zt=Q.texture.format;st=g.has(zt)}if(st){let zt=Q.texture.type,Xt=m.has(zt),Ot=ce.getClearColor(),$t=ce.getClearAlpha(),ee=Ot.r,ge=Ot.g,Me=Ot.b;Xt?(b[0]=ee,b[1]=ge,b[2]=Me,b[3]=$t,O.clearBufferuiv(O.COLOR,0,b)):(S[0]=ee,S[1]=ge,S[2]=Me,S[3]=$t,O.clearBufferiv(O.COLOR,0,S))}else it|=O.COLOR_BUFFER_BIT}G&&(it|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),at&&(it|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&O.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),F=R},this.dispose=function(){e.removeEventListener("webglcontextlost",Ne,!1),e.removeEventListener("webglcontextrestored",Re,!1),e.removeEventListener("webglcontextcreationerror",Qn,!1),ce.dispose(),Ft.dispose(),Pt.dispose(),et.dispose(),Tt.dispose(),mt.dispose(),Gt.dispose(),Mt.dispose(),Lt.dispose(),Qt.dispose(),Qt.removeEventListener("sessionstart",ku),Qt.removeEventListener("sessionend",Hu),_s.stop()};function Ne(R){R.preventDefault(),so("WebGLRenderer: Context Lost."),C=!0}function Re(){so("WebGLRenderer: Context Restored."),C=!1;let R=J.autoReset,G=ne.enabled,at=ne.autoUpdate,it=ne.needsUpdate,st=ne.type;se(),J.autoReset=R,ne.enabled=G,ne.autoUpdate=at,ne.needsUpdate=it,ne.type=st}function Qn(R){ae("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ui(R){let G=R.target;G.removeEventListener("dispose",ui),wd(G)}function wd(R){Ad(R),et.remove(R)}function Ad(R){let G=et.get(R).programs;G!==void 0&&(G.forEach(function(at){Lt.releaseProgram(at)}),R.isShaderMaterial&&Lt.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,at,it,st,zt){G===null&&(G=kt);let Xt=st.isMesh&&st.matrixWorld.determinantAffine()<0,Ot=Pd(R,G,at,it,st);w.setMaterial(it,Xt);let $t=at.index,ee=1;if(it.wireframe===!0){if($t=ht.getWireframeAttribute(at),$t===void 0)return;ee=2}let ge=at.drawRange,Me=at.attributes.position,Kt=ge.start*ee,Ce=(ge.start+ge.count)*ee;zt!==null&&(Kt=Math.max(Kt,zt.start*ee),Ce=Math.min(Ce,(zt.start+zt.count)*ee)),$t!==null?(Kt=Math.max(Kt,0),Ce=Math.min(Ce,$t.count)):Me!=null&&(Kt=Math.max(Kt,0),Ce=Math.min(Ce,Me.count));let Qe=Ce-Kt;if(Qe<0||Qe===1/0)return;Gt.setup(st,it,Ot,at,$t);let Be,De=Dt;if($t!==null&&(Be=Ct.get($t),De=ft,De.setIndex(Be)),st.isMesh)it.wireframe===!0?(w.setLineWidth(it.wireframeLinewidth*jt()),De.setMode(O.LINES)):De.setMode(O.TRIANGLES);else if(st.isLine){let pn=it.linewidth;pn===void 0&&(pn=1),w.setLineWidth(pn*jt()),st.isLineSegments?De.setMode(O.LINES):st.isLineLoop?De.setMode(O.LINE_LOOP):De.setMode(O.LINE_STRIP)}else st.isPoints?De.setMode(O.POINTS):st.isSprite&&De.setMode(O.TRIANGLES);if(st.isBatchedMesh)if(fe.get("WEBGL_multi_draw"))De.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{let pn=st._multiDrawStarts,Wt=st._multiDrawCounts,yn=st._multiDrawCount,Se=$t?Ct.get($t).bytesPerElement:1,kn=et.get(it).currentProgram.getUniforms();for(let fi=0;fi<yn;fi++)kn.setValue(O,"_gl_DrawID",fi),De.render(pn[fi]/Se,Wt[fi])}else if(st.isInstancedMesh)De.renderInstances(Kt,Qe,st.count);else if(at.isInstancedBufferGeometry){let pn=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Wt=Math.min(at.instanceCount,pn);De.renderInstances(Kt,Qe,Wt)}else De.render(Kt,Qe)};function zu(R,G,at,it){F!==null&&R.isNodeMaterial&&F.setObject(it,R),rt===!0&&Jt.setState(R,at,!1),R.transparent===!0&&R.side===An&&R.forceSinglePass===!1?(R.side=dn,R.needsUpdate=!0,fa(R,G,it),R.side=Wn,R.needsUpdate=!0,fa(R,G,it),R.side=An):fa(R,G,it)}this.compile=function(R,G,at=null){at===null&&(at=R),F!==null&&F.renderStart(R,G,at),M=Pt.get(at),M.init(G),_.push(M),at.traverseVisible(function(st){st.isLight&&st.layers.test(G.layers)&&(M.pushLight(st),st.castShadow&&M.pushShadow(st))}),R!==at&&R.traverseVisible(function(st){st.isLight&&st.layers.test(G.layers)&&(M.pushLight(st),st.castShadow&&M.pushShadow(st))}),M.setupLights(),F!==null&&F.updateLights(M.state.lightsArray),pt=this.localClippingEnabled,rt=Jt.init(this.clippingPlanes,pt),rt===!0&&Jt.setGlobalState(this.clippingPlanes,G),F!==null&&ne.render(M.state.shadowsArray,at,G);let it=new Set;return R.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;let zt=st.material;if(zt)if(Array.isArray(zt))for(let Xt=0;Xt<zt.length;Xt++){let Ot=zt[Xt];zu(Ot,at,G,st),it.add(Ot)}else zu(zt,at,G,st),it.add(zt)}),M=_.pop(),F!==null&&F.renderEnd(),it},this.compileAsync=function(R,G,at=null){let it=this.compile(R,G,at);return new Promise(st=>{function zt(){if(it.forEach(function(Xt){let $t=et.get(Xt).currentProgram;($t===void 0||$t.isReady())&&it.delete(Xt)}),it.size===0){st(R);return}setTimeout(zt,10)}fe.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let Lc=null;function Rd(R){Lc&&Lc(R)}function ku(){_s.stop()}function Hu(){_s.start()}let _s=new V0;_s.setAnimationLoop(Rd),typeof self<"u"&&_s.setContext(self),this.setAnimationLoop=function(R){Lc=R,Qt.setAnimationLoop(R),R===null?_s.stop():_s.start()},Qt.addEventListener("sessionstart",ku),Qt.addEventListener("sessionend",Hu),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;F!==null&&F.renderStart(R,G);let at=Qt.enabled===!0&&Qt.isPresenting===!0,it=E!==null&&(Q===null||at)&&E.begin(A,Q);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Qt.enabled===!0&&Qt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Qt.cameraAutoUpdate===!0&&Qt.updateCamera(G),G=Qt.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,G,Q),M=Pt.get(R,_.length),M.init(G),M.state.textureUnits=ct.getTextureUnits(),_.push(M),xt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),tt.setFromProjectionMatrix(xt,ii,G.reversedDepth),pt=this.localClippingEnabled,rt=Jt.init(this.clippingPlanes,pt),y=Ft.get(R,T.length),y.init(),T.push(y),Qt.enabled===!0&&Qt.isPresenting===!0){let Xt=A.xr.getDepthSensingMesh();Xt!==null&&Dc(Xt,G,-1/0,A.sortObjects)}Dc(R,G,0,A.sortObjects),y.finish(),F!==null&&F.updateLights(M.state.lightsArray),A.sortObjects===!0&&y.sort(P,L),Rt=Qt.enabled===!1||Qt.isPresenting===!1||Qt.hasDepthSensing()===!1,Rt&&ce.addToRenderList(y,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&Jt.beginShadows();let st=M.state.shadowsArray;if(ne.render(st,R,G),rt===!0&&Jt.endShadows(),(it&&E.hasRenderPass())===!1){let Xt=y.opaque,Ot=y.transmissive;if(M.setupLights(),G.isArrayCamera){let $t=G.cameras;if(Ot.length>0)for(let ee=0,ge=$t.length;ee<ge;ee++){let Me=$t[ee];Vu(Xt,Ot,R,Me)}Rt&&ce.render(R);for(let ee=0,ge=$t.length;ee<ge;ee++){let Me=$t[ee];Gu(y,R,Me,Me.viewport)}}else Ot.length>0&&Vu(Xt,Ot,R,G),Rt&&ce.render(R),Gu(y,R,G)}Q!==null&&z===0&&(ct.updateMultisampleRenderTarget(Q),ct.updateRenderTargetMipmap(Q)),it&&E.end(A),R.isScene===!0&&R.onAfterRender(A,R,G),Gt.resetDefaultState(),H=-1,Z=null,_.pop(),_.length>0?(M=_[_.length-1],ct.setTextureUnits(M.state.textureUnits),rt===!0&&Jt.setGlobalState(A.clippingPlanes,M.state.camera)):M=null,T.pop(),T.length>0?y=T[T.length-1]:y=null,F!==null&&F.renderEnd()};function Dc(R,G,at,it){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)at=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLightProbeGrid)M.pushLightProbeGrid(R);else if(R.isLight)M.pushLight(R),R.castShadow&&M.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(tt)){it&&It.setFromMatrixPosition(R.matrixWorld).applyMatrix4(xt);let Xt=mt.update(R),Ot=R.material;Ot.visible&&y.push(R,Xt,Ot,at,It.z,null,G)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(tt))){let Xt=mt.update(R),Ot=R.material;if(it&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),It.copy(R.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),It.copy(Xt.boundingSphere.center)),It.applyMatrix4(R.matrixWorld).applyMatrix4(xt)),Array.isArray(Ot)){let $t=Xt.groups;for(let ee=0,ge=$t.length;ee<ge;ee++){let Me=$t[ee],Kt=Ot[Me.materialIndex];Kt&&Kt.visible&&y.push(R,Xt,Kt,at,It.z,Me,G)}}else Ot.visible&&y.push(R,Xt,Ot,at,It.z,null,G)}}let zt=R.children;for(let Xt=0,Ot=zt.length;Xt<Ot;Xt++)Dc(zt[Xt],G,at,it)}function Gu(R,G,at,it){let{opaque:st,transmissive:zt,transparent:Xt}=R;M.setupLightsView(at),rt===!0&&Jt.setGlobalState(A.clippingPlanes,at),it&&w.viewport(q.copy(it)),st.length>0&&ua(st,G,at),zt.length>0&&ua(zt,G,at),Xt.length>0&&ua(Xt,G,at),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Vu(R,G,at,it){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[it.id]===void 0){let Kt=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[it.id]=new Je(1,1,{generateMipmaps:!0,type:Kt?an:vn,minFilter:ps,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ye.workingColorSpace})}let zt=M.state.transmissionRenderTarget[it.id],Xt=it.viewport||q;zt.setSize(Xt.z*A.transmissionResolutionScale,Xt.w*A.transmissionResolutionScale);let Ot=A.getRenderTarget(),$t=A.getActiveCubeFace(),ee=A.getActiveMipmapLevel();A.setRenderTarget(zt),A.getClearColor(Y),$=A.getClearAlpha(),$<1&&A.setClearColor(16777215,.5),A.clear(),Rt&&ce.render(at);let ge=A.toneMapping;A.toneMapping=oi;let Me=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),M.setupLightsView(it),rt===!0&&Jt.setGlobalState(A.clippingPlanes,it),ua(R,at,it),ct.updateMultisampleRenderTarget(zt),ct.updateRenderTargetMipmap(zt),fe.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Ce=0,Qe=G.length;Ce<Qe;Ce++){let Be=G[Ce],{object:De,geometry:pn,material:Wt,group:yn}=Be;if(Wt.side===An&&De.layers.test(it.layers)){let Se=Wt.side;Wt.side=dn,Wt.needsUpdate=!0,Wu(De,at,it,pn,Wt,yn),Wt.side=Se,Wt.needsUpdate=!0,Kt=!0}}Kt===!0&&(ct.updateMultisampleRenderTarget(zt),ct.updateRenderTargetMipmap(zt))}A.setRenderTarget(Ot,$t,ee),A.setClearColor(Y,$),Me!==void 0&&(it.viewport=Me),A.toneMapping=ge}function ua(R,G,at){let it=G.isScene===!0?G.overrideMaterial:null;for(let st=0,zt=R.length;st<zt;st++){let Xt=R[st],{object:Ot,geometry:$t,group:ee}=Xt,ge=Xt.material;ge.allowOverride===!0&&it!==null&&(ge=it),Ot.layers.test(at.layers)&&Wu(Ot,G,at,$t,ge,ee)}}function Wu(R,G,at,it,st,zt){F!==null&&st.isNodeMaterial&&F.setObject(R,st),R.onBeforeRender(A,G,at,it,st,zt),R.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),st.onBeforeRender(A,G,at,it,R,zt),st.transparent===!0&&st.side===An&&st.forceSinglePass===!1?(st.side=dn,st.needsUpdate=!0,A.renderBufferDirect(at,G,it,st,R,zt),st.side=Wn,st.needsUpdate=!0,A.renderBufferDirect(at,G,it,st,R,zt),st.side=An):A.renderBufferDirect(at,G,it,st,R,zt),R.onAfterRender(A,G,at,it,st,zt)}function fa(R,G,at){G.isScene!==!0&&(G=kt);let it=et.get(R),st=M.state.lights,zt=M.state.shadowsArray,Xt=st.state.version,Ot=Lt.getParameters(R,st.state,zt,G,at,M.state.lightProbeGridArray),$t=Lt.getProgramCacheKey(Ot),ee=it.programs;it.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?G.environment:null,it.fog=G.fog;let ge=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;it.envMap=Tt.get(R.envMap||it.environment,ge),it.envMapRotation=it.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,ee===void 0&&(R.addEventListener("dispose",ui),ee=new Map,it.programs=ee);let Me=ee.get($t);if(Me!==void 0){if(it.currentProgram===Me&&it.lightsStateVersion===Xt)return qu(R,Ot),Me}else Ot.uniforms=Lt.getUniforms(R),F!==null&&R.isNodeMaterial&&F.build(R,at,Ot),R.onBeforeCompile(Ot,A),Me=Lt.acquireProgram(Ot,$t),ee.set($t,Me),it.uniforms=Ot.uniforms;let Kt=it.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Kt.clippingPlanes=Jt.uniform),qu(R,Ot),it.needsLights=Fd(R),it.lightsStateVersion=Xt,it.needsLights&&(Kt.ambientLightColor.value=st.state.ambient,Kt.lightProbe.value=st.state.probe,Kt.sunLights.value=st.state.sun,Kt.sunLightShadows.value=st.state.sunShadow,Kt.directionalLights.value=st.state.directional,Kt.directionalLightShadows.value=st.state.directionalShadow,Kt.spotLights.value=st.state.spot,Kt.spotLightShadows.value=st.state.spotShadow,Kt.rectAreaLights.value=st.state.rectArea,Kt.ltc_1.value=st.state.rectAreaLTC1,Kt.ltc_2.value=st.state.rectAreaLTC2,Kt.pointLights.value=st.state.point,Kt.pointLightShadows.value=st.state.pointShadow,Kt.hemisphereLights.value=st.state.hemi,Kt.sunShadowMatrix.value=st.state.sunShadowMatrix,Kt.sunShadowCascade.value=st.state.sunShadowCascade,Kt.directionalShadowMatrix.value=st.state.directionalShadowMatrix,Kt.spotLightMatrix.value=st.state.spotLightMatrix,Kt.spotLightMap.value=st.state.spotLightMap,Kt.pointShadowMatrix.value=st.state.pointShadowMatrix),it.lightProbeGrid=M.state.lightProbeGridArray.length>0,it.currentProgram=Me,it.uniformsList=null,Me}function Xu(R){if(R.uniformsList===null){let G=R.currentProgram.getUniforms();R.uniformsList=Lr.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function qu(R,G){let at=et.get(R);at.outputColorSpace=G.outputColorSpace,at.batching=G.batching,at.batchingColor=G.batchingColor,at.instancing=G.instancing,at.instancingColor=G.instancingColor,at.instancingMorph=G.instancingMorph,at.skinning=G.skinning,at.morphTargets=G.morphTargets,at.morphNormals=G.morphNormals,at.morphColors=G.morphColors,at.morphTargetsCount=G.morphTargetsCount,at.numClippingPlanes=G.numClippingPlanes,at.numIntersection=G.numClipIntersection,at.vertexAlphas=G.vertexAlphas,at.vertexTangents=G.vertexTangents,at.toneMapping=G.toneMapping}function Cd(R,G){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;x.setFromMatrixPosition(G.matrixWorld);for(let at=0,it=R.length;at<it;at++){let st=R[at];if(st.texture!==null&&st.boundingBox.containsPoint(x))return st}return null}function Pd(R,G,at,it,st){G.isScene!==!0&&(G=kt),ct.resetTextureUnits();let zt=G.fog,Xt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?G.environment:null,Ot=Q===null?A.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ye.workingColorSpace,$t=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,ee=Tt.get(it.envMap||Xt,$t),ge=it.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Me=!!at.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Kt=!!at.morphAttributes.position,Ce=!!at.morphAttributes.normal,Qe=!!at.morphAttributes.color,Be=oi;it.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Be=A.toneMapping);let De=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,pn=De!==void 0?De.length:0,Wt=et.get(it),yn=M.state.lights;if(rt===!0&&(pt===!0||R!==Z)){let Ue=R===Z&&it.id===H;Jt.setState(it,R,Ue)}let Se=!1;it.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==yn.state.version||Wt.outputColorSpace!==Ot||st.isBatchedMesh&&Wt.batching===!1||!st.isBatchedMesh&&Wt.batching===!0||st.isBatchedMesh&&Wt.batchingColor===!0&&st._colorsTexture===null||st.isBatchedMesh&&Wt.batchingColor===!1&&st._colorsTexture!==null||st.isInstancedMesh&&Wt.instancing===!1||!st.isInstancedMesh&&Wt.instancing===!0||st.isSkinnedMesh&&Wt.skinning===!1||!st.isSkinnedMesh&&Wt.skinning===!0||st.isInstancedMesh&&Wt.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&Wt.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&Wt.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&Wt.instancingMorph===!1&&st.morphTexture!==null||Wt.envMap!==ee||it.fog===!0&&Wt.fog!==zt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Jt.numPlanes||Wt.numIntersection!==Jt.numIntersection)||Wt.vertexAlphas!==ge||Wt.vertexTangents!==Me||Wt.morphTargets!==Kt||Wt.morphNormals!==Ce||Wt.morphColors!==Qe||Wt.toneMapping!==Be||Wt.morphTargetsCount!==pn||!!Wt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Se=!0):(Se=!0,Wt.__version=it.version);let kn=Wt.currentProgram;Se===!0&&(kn=fa(it,G,st),F&&it.isNodeMaterial&&F.onUpdateProgram(it,kn,Wt));let fi=!1,Zi=!1,Gs=!1,Ie=kn.getUniforms(),Ze=Wt.uniforms;if(w.useProgram(kn.program)&&(fi=!0,Zi=!0,Gs=!0),it.id!==H&&(H=it.id,Zi=!0),Wt.needsLights){let Ue=Cd(M.state.lightProbeGridArray,st);Wt.lightProbeGrid!==Ue&&(Wt.lightProbeGrid=Ue,Zi=!0)}if(fi||Z!==R){w.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ie.setValue(O,"projectionMatrix",R.projectionMatrix),Ie.setValue(O,"viewMatrix",R.matrixWorldInverse);let Ji=Ie.map.cameraPosition;Ji!==void 0&&Ji.setValue(O,bt.setFromMatrixPosition(R.matrixWorld)),D.logarithmicDepthBuffer&&Ie.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Ie.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),Z!==R&&(Z=R,Zi=!0,Gs=!0)}if(Wt.needsLights&&(yn.state.sunShadowMap.length>0&&Ie.setValue(O,"sunShadowMap",yn.state.sunShadowMap,ct),yn.state.directionalShadowMap.length>0&&Ie.setValue(O,"directionalShadowMap",yn.state.directionalShadowMap,ct),yn.state.spotShadowMap.length>0&&Ie.setValue(O,"spotShadowMap",yn.state.spotShadowMap,ct),yn.state.pointShadowMap.length>0&&Ie.setValue(O,"pointShadowMap",yn.state.pointShadowMap,ct)),st.isSkinnedMesh){Ie.setOptional(O,st,"bindMatrix"),Ie.setOptional(O,st,"bindMatrixInverse");let Ue=st.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),Ie.setValue(O,"boneTexture",Ue.boneTexture,ct))}st.isBatchedMesh&&(Ie.setOptional(O,st,"batchingTexture"),Ie.setValue(O,"batchingTexture",st._matricesTexture,ct),Ie.setOptional(O,st,"batchingIdTexture"),Ie.setValue(O,"batchingIdTexture",st._indirectTexture,ct),Ie.setOptional(O,st,"batchingColorTexture"),st._colorsTexture!==null&&Ie.setValue(O,"batchingColorTexture",st._colorsTexture,ct));let ji=at.morphAttributes;if((ji.position!==void 0||ji.normal!==void 0||ji.color!==void 0)&&W.update(st,at,kn),(Zi||Wt.receiveShadow!==st.receiveShadow)&&(Wt.receiveShadow=st.receiveShadow,Ie.setValue(O,"receiveShadow",st.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&G.environment!==null&&(Ze.envMapIntensity.value=G.environmentIntensity),Ze.dfgLUT!==void 0&&(Ze.dfgLUT.value=Bv()),Zi){if(Ie.setValue(O,"toneMappingExposure",A.toneMappingExposure),Wt.needsLights&&Id(Ze,Gs),zt&&it.fog===!0&&te.refreshFogUniforms(Ze,zt),te.refreshMaterialUniforms(Ze,it,K,X,M.state.transmissionRenderTarget[R.id]),Wt.needsLights&&Wt.lightProbeGrid){let Ue=Wt.lightProbeGrid;Ze.probesSH.value=Ue.texture,Ze.probesMin.value.copy(Ue.boundingBox.min),Ze.probesMax.value.copy(Ue.boundingBox.max),Ze.probesResolution.value.copy(Ue.resolution)}Lr.upload(O,Xu(Wt),Ze,ct)}if(it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Lr.upload(O,Xu(Wt),Ze,ct),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Ie.setValue(O,"center",st.center),Ie.setValue(O,"modelViewMatrix",st.modelViewMatrix),Ie.setValue(O,"normalMatrix",st.normalMatrix),Ie.setValue(O,"modelMatrix",st.matrixWorld),it.uniformsGroups!==void 0){let Ue=it.uniformsGroups;for(let Ji=0,Vs=Ue.length;Ji<Vs;Ji++){let Zu=Ue[Ji];Mt.update(Zu,kn),Mt.bind(Zu,kn)}}return kn}function Id(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.sunLights.needsUpdate=G,R.sunLightShadows.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function Fd(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(R,G,at){let it=et.get(R);it.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),et.get(R.texture).__webglTexture=G,et.get(R.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:at,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,G){let at=et.get(R);at.__webglFramebuffer=G,at.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,at=0){Q=R,k=G,z=at;let it=null,st=!1,zt=!1;if(R){let Ot=et.get(R);if(Ot.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(O.FRAMEBUFFER,Ot.__webglFramebuffer),q.copy(R.viewport),gt.copy(R.scissor),St=R.scissorTest,w.viewport(q),w.scissor(gt),w.setScissorTest(St),H=-1;return}else if(Ot.__webglFramebuffer===void 0)ct.setupRenderTarget(R);else if(Ot.__hasExternalTextures)ct.rebindTextures(R,et.get(R.texture).__webglTexture,et.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ge=R.depthTexture;if(Ot.__boundDepthTexture!==ge){if(ge!==null&&et.has(ge)&&(R.width!==ge.image.width||R.height!==ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(R)}}let $t=R.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(zt=!0);let ee=et.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[G])?it=ee[G][at]:it=ee[G],st=!0):R.samples>0&&ct.useMultisampledRTT(R)===!1?it=et.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?it=ee[at]:it=ee,q.copy(R.viewport),gt.copy(R.scissor),St=R.scissorTest}else q.copy(V).multiplyScalar(K).floor(),gt.copy(ot).multiplyScalar(K).floor(),St=Et;if(at!==0&&(it=I),w.bindFramebuffer(O.FRAMEBUFFER,it)&&w.drawBuffers(R,it),w.viewport(q),w.scissor(gt),w.setScissorTest(St),st){let Ot=et.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ot.__webglTexture,at)}else if(zt){let Ot=G;for(let $t=0;$t<R.textures.length;$t++){let ee=et.get(R.textures[$t]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+$t,ee.__webglTexture,at,Ot)}}else if(R!==null&&at!==0){let Ot=et.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ot.__webglTexture,at)}H=-1};function Yu(R){let G=et.get(R);return(G.__readFormat!==R.format||G.__readType!==R.type)&&(G.__readFormat=R.format,G.__readType=R.type,G.__formatReadable=D.textureFormatReadable(R.format),G.__typeReadable=D.textureTypeReadable(R.type)),G}this.readRenderTargetPixels=function(R,G,at,it,st,zt,Xt,Ot=0){if(!(R&&R.isWebGLRenderTarget)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $t=et.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Xt!==void 0&&($t=$t[Xt]),$t){w.bindFramebuffer(O.FRAMEBUFFER,$t);try{let ee=R.textures[Ot],ge=ee.format,Me=ee.type;R.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ot);let Kt=Yu(ee);if(Kt.__formatReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Kt.__typeReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-it&&at>=0&&at<=R.height-st&&O.readPixels(G,at,it,st,Nt.convert(ge),Nt.convert(Me),zt)}finally{let ee=Q!==null?et.get(Q).__webglFramebuffer:null;w.bindFramebuffer(O.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(R,G,at,it,st,zt,Xt,Ot=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $t=et.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Xt!==void 0&&($t=$t[Xt]),$t)if(G>=0&&G<=R.width-it&&at>=0&&at<=R.height-st){w.bindFramebuffer(O.FRAMEBUFFER,$t);let ee=R.textures[Ot],ge=ee.format,Me=ee.type;R.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ot);let Kt=Yu(ee);if(Kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ce=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ce),O.bufferData(O.PIXEL_PACK_BUFFER,zt.byteLength,O.STREAM_READ),O.readPixels(G,at,it,st,Nt.convert(ge),Nt.convert(Me),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Qe=Q!==null?et.get(Q).__webglFramebuffer:null;w.bindFramebuffer(O.FRAMEBUFFER,Qe);let Be=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await f0(O,Be,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ce),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,zt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Ce),O.deleteSync(Be),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,G=null,at=0){let it=Math.pow(2,-at),st=Math.floor(R.image.width*it),zt=Math.floor(R.image.height*it),Xt=G!==null?G.x:0,Ot=G!==null?G.y:0;ct.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,at,0,0,Xt,Ot,st,zt),w.unbindTexture()},this.copyTextureToTexture=function(R,G,at=null,it=null,st=0,zt=0){let Xt,Ot,$t,ee,ge,Me,Kt,Ce,Qe,Be=R.isCompressedTexture?R.mipmaps[zt]:R.image;if(at!==null)Xt=at.max.x-at.min.x,Ot=at.max.y-at.min.y,$t=at.isBox3?at.max.z-at.min.z:1,ee=at.min.x,ge=at.min.y,Me=at.isBox3?at.min.z:0;else{let Ze=Math.pow(2,-st);Xt=Math.floor(Be.width*Ze),Ot=Math.floor(Be.height*Ze),R.isDataArrayTexture?$t=Be.depth:R.isData3DTexture?$t=Math.floor(Be.depth*Ze):$t=1,ee=0,ge=0,Me=0}it!==null?(Kt=it.x,Ce=it.y,Qe=it.z):(Kt=0,Ce=0,Qe=0);let De=Nt.convert(G.format),pn=Nt.convert(G.type),Wt;G.isData3DTexture?(ct.setTexture3D(G,0),Wt=O.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(ct.setTexture2DArray(G,0),Wt=O.TEXTURE_2D_ARRAY):(ct.setTexture2D(G,0),Wt=O.TEXTURE_2D),w.activeTexture(O.TEXTURE0),w.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),w.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),w.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);let yn=w.getParameter(O.UNPACK_ROW_LENGTH),Se=w.getParameter(O.UNPACK_IMAGE_HEIGHT),kn=w.getParameter(O.UNPACK_SKIP_PIXELS),fi=w.getParameter(O.UNPACK_SKIP_ROWS),Zi=w.getParameter(O.UNPACK_SKIP_IMAGES);w.pixelStorei(O.UNPACK_ROW_LENGTH,Be.width),w.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Be.height),w.pixelStorei(O.UNPACK_SKIP_PIXELS,ee),w.pixelStorei(O.UNPACK_SKIP_ROWS,ge),w.pixelStorei(O.UNPACK_SKIP_IMAGES,Me);let Gs=R.isDataArrayTexture||R.isData3DTexture,Ie=G.isDataArrayTexture||G.isData3DTexture;if(R.isDepthTexture){let Ze=et.get(R),ji=et.get(G),Ue=et.get(Ze.__renderTarget),Ji=et.get(ji.__renderTarget);w.bindFramebuffer(O.READ_FRAMEBUFFER,Ue.__webglFramebuffer),w.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let Vs=0;Vs<$t;Vs++)Gs&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,et.get(R).__webglTexture,st,Me+Vs),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,et.get(G).__webglTexture,zt,Qe+Vs)),O.blitFramebuffer(ee,ge,Xt,Ot,Kt,Ce,Xt,Ot,O.DEPTH_BUFFER_BIT,O.NEAREST);w.bindFramebuffer(O.READ_FRAMEBUFFER,null),w.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(st!==0||R.isRenderTargetTexture||et.has(R)){let Ze=et.get(R),ji=et.get(G);w.bindFramebuffer(O.READ_FRAMEBUFFER,N),w.bindFramebuffer(O.DRAW_FRAMEBUFFER,B);for(let Ue=0;Ue<$t;Ue++)Gs?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ze.__webglTexture,st,Me+Ue):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ze.__webglTexture,st),Ie?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ji.__webglTexture,zt,Qe+Ue):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ji.__webglTexture,zt),st!==0?O.blitFramebuffer(ee,ge,Xt,Ot,Kt,Ce,Xt,Ot,O.COLOR_BUFFER_BIT,O.NEAREST):Ie?O.copyTexSubImage3D(Wt,zt,Kt,Ce,Qe+Ue,ee,ge,Xt,Ot):O.copyTexSubImage2D(Wt,zt,Kt,Ce,ee,ge,Xt,Ot);w.bindFramebuffer(O.READ_FRAMEBUFFER,null),w.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Ie?R.isDataTexture||R.isData3DTexture?O.texSubImage3D(Wt,zt,Kt,Ce,Qe,Xt,Ot,$t,De,pn,Be.data):G.isCompressedArrayTexture?O.compressedTexSubImage3D(Wt,zt,Kt,Ce,Qe,Xt,Ot,$t,De,Be.data):O.texSubImage3D(Wt,zt,Kt,Ce,Qe,Xt,Ot,$t,De,pn,Be):R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,zt,Kt,Ce,Xt,Ot,De,pn,Be.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,zt,Kt,Ce,Be.width,Be.height,De,Be.data):O.texSubImage2D(O.TEXTURE_2D,zt,Kt,Ce,Xt,Ot,De,pn,Be);w.pixelStorei(O.UNPACK_ROW_LENGTH,yn),w.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Se),w.pixelStorei(O.UNPACK_SKIP_PIXELS,kn),w.pixelStorei(O.UNPACK_SKIP_ROWS,fi),w.pixelStorei(O.UNPACK_SKIP_IMAGES,Zi),zt===0&&G.generateMipmaps&&O.generateMipmap(Wt),w.unbindTexture()},this.initRenderTarget=function(R){et.get(R).__webglFramebuffer===void 0&&ct.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ct.setTextureCube(R,0):R.isData3DTexture?ct.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ct.setTexture2DArray(R,0):ct.setTexture2D(R,0),w.unbindTexture()},this.resetState=function(){k=0,z=0,Q=null,w.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ye._getDrawingBufferColorSpace(t),e.unpackColorSpace=ye._getUnpackColorSpace()}};var Jo=new U;function Yn(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;Jo.copy(t),Jo[n]=0,Jo.normalize();let c=.5*o/(o+a),h=1-Jo.angleTo(s)/l;return Math.sign(Jo[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Zn=class s extends Vn{constructor(t=1,e=1,n=1,i=2,r=.1){let o=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new U,c=new U,h=new U(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=f.length/6,v=new U,g=.5/o;for(let m=0,b=0;m<f.length;m+=3,b+=2)switch(l.fromArray(f,m),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),f[m+0]=h.x*Math.sign(l.x)+c.x*r,f[m+1]=h.y*Math.sign(l.y)+c.y*r,f[m+2]=h.z*Math.sign(l.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/p)){case 0:v.set(1,0,0),d[b+0]=Yn(v,c,"z","y",r,n),d[b+1]=1-Yn(v,c,"y","z",r,e);break;case 1:v.set(-1,0,0),d[b+0]=1-Yn(v,c,"z","y",r,n),d[b+1]=1-Yn(v,c,"y","z",r,e);break;case 2:v.set(0,1,0),d[b+0]=1-Yn(v,c,"x","z",r,t),d[b+1]=Yn(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),d[b+0]=1-Yn(v,c,"x","z",r,t),d[b+1]=1-Yn(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),d[b+0]=1-Yn(v,c,"x","y",r,t),d[b+1]=1-Yn(v,c,"y","x",r,e);break;case 5:v.set(0,0,-1),d[b+0]=Yn(v,c,"x","y",r,t),d[b+1]=1-Yn(v,c,"y","x",r,e);break}}static fromJSON(t){return new s(t.width,t.height,t.depth,t.segments,t.radius)}};var $o=class extends ns{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Vn;t.deleteAttribute("uv");let e=new de({side:dn}),n=new de,i=new wi(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new be(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new ws(t,n,6),a=new Le;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new be(t,Nr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new be(t,Nr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new be(t,Nr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new be(t,Nr(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new be(t,Nr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new be(t,Nr(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Nr(s){return new Eo({color:0,emissive:16777215,emissiveIntensity:s})}function $0(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new _e,c=0;for(let h=0;h<s.length;++h){let f=s[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,f=[];for(let u=0;u<s.length;++u){let d=s[u].index;for(let p=0;p<d.count;++p)f.push(d.getX(p)+h);h+=s[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=J0(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let v=0;v<o[h].length;++v)d.push(o[h][v][u]);let p=J0(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function J0(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new nn(o,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let f=l/e;for(let u=0,d=h.count;u<d;u++)for(let p=0;p<e;p++){let v=h.getComponent(u,p);a.setComponent(u+f,p,v)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}var Ur={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Bn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},zv=new cs(-1,1,1,-1,0,1),cu=class extends _e{constructor(){super(),this.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qt([0,2,0,0,2,0],2))}},kv=new cu,xs=class{constructor(t){this._mesh=new be(kv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,zv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var pc=class extends Bn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ye?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=qn.clone(t.uniforms),this.material=new Ye({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new xs(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ko=class extends Bn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},mc=class extends Bn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var gc=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new vt);this._width=n.width,this._height=n.height,e=new Je(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:an}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new pc(Ur),this.copyPass.material.blending=$e,this.timer=new Ro}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ko!==void 0&&(o instanceof Ko?n=!0:o instanceof mc&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new vt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var xc=class extends Bn{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ie}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var Qo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new vt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new he},cameraProjectionMatrixInverse:{value:new he},cameraWorldMatrix:{value:new he},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new U(-1,-1,-1)},sceneBoxMax:{value:new U(1,1,1)}},vertexShader:`

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
		}`},ta={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},vc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function K0(s=5){let t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=Hv(t),n=e.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=e[o],l=2*Math.PI*a/n,c=new U(Math.cos(l),Math.sin(l),0).normalize();i[o*4]=(c.x*.5+.5)*255,i[o*4+1]=(c.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}let r=new bi(i,t,t);return r.wrapS=xn,r.wrapT=xn,r.needsUpdate=!0,r}function Hv(s){let t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=t*t,n=Array(e).fill(0),i=Math.floor(t/2),r=t-1;for(let o=1;o<=e;){if(i===-1&&r===t?(r=t-2,i=0):(r===t&&(r=0),i<0&&(i=t-1)),n[i*t+r]!==0){r-=2,i++;continue}else n[i*t+r]=o++;r++,i--}return n}var ea={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:hu(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new vt},cameraProjectionMatrixInverse:{value:new he},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function hu(s,t,e){let n=Gv(s,t,e),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let o=n[r];i+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return i}function Gv(s,t,e){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*t*i/s,o=Math.pow(i/(s-1),e);n.push(new U(Math.cos(r),Math.sin(r),o))}return n}var _c=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,i,r,o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,f=(l+c)*h,u=l-f,d=c-f,p=t-u,v=e-d,g,m;p>v?(g=1,m=0):(g=0,m=1);let b=p-g+h,S=v-m+h,x=p-1+2*h,y=v-1+2*h,M=l&255,T=c&255,_=this.perm[M+this.perm[T]]%12,E=this.perm[M+g+this.perm[T+m]]%12,A=this.perm[M+1+this.perm[T+1]]%12,C=.5-p*p-v*v;C<0?n=0:(C*=C,n=C*C*this._dot(this.grad3[_],p,v));let F=.5-b*b-S*S;F<0?i=0:(F*=F,i=F*F*this._dot(this.grad3[E],b,S));let I=.5-x*x-y*y;return I<0?r=0:(I*=I,r=I*I*this._dot(this.grad3[A],x,y)),70*(n+i+r)}noise3d(t,e,n){let i,r,o,a,c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),f=Math.floor(e+c),u=Math.floor(n+c),d=1/6,p=(h+f+u)*d,v=h-p,g=f-p,m=u-p,b=t-v,S=e-g,x=n-m,y,M,T,_,E,A;b>=S?S>=x?(y=1,M=0,T=0,_=1,E=1,A=0):b>=x?(y=1,M=0,T=0,_=1,E=0,A=1):(y=0,M=0,T=1,_=1,E=0,A=1):S<x?(y=0,M=0,T=1,_=0,E=1,A=1):b<x?(y=0,M=1,T=0,_=0,E=1,A=1):(y=0,M=1,T=0,_=1,E=1,A=0);let C=b-y+d,F=S-M+d,I=x-T+d,N=b-_+2*d,B=S-E+2*d,k=x-A+2*d,z=b-1+3*d,Q=S-1+3*d,H=x-1+3*d,Z=h&255,q=f&255,gt=u&255,St=this.perm[Z+this.perm[q+this.perm[gt]]]%12,Y=this.perm[Z+y+this.perm[q+M+this.perm[gt+T]]]%12,$=this.perm[Z+_+this.perm[q+E+this.perm[gt+A]]]%12,dt=this.perm[Z+1+this.perm[q+1+this.perm[gt+1]]]%12,X=.6-b*b-S*S-x*x;X<0?i=0:(X*=X,i=X*X*this._dot3(this.grad3[St],b,S,x));let K=.6-C*C-F*F-I*I;K<0?r=0:(K*=K,r=K*K*this._dot3(this.grad3[Y],C,F,I));let P=.6-N*N-B*B-k*k;P<0?o=0:(P*=P,o=P*P*this._dot3(this.grad3[$],N,B,k));let L=.6-z*z-Q*Q-H*H;return L<0?a=0:(L*=L,a=L*L*this._dot3(this.grad3[dt],z,Q,H)),32*(i+r+o+a)}noise4d(t,e,n,i){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,f,u,d,p,v=(t+e+n+i)*l,g=Math.floor(t+v),m=Math.floor(e+v),b=Math.floor(n+v),S=Math.floor(i+v),x=(g+m+b+S)*c,y=g-x,M=m-x,T=b-x,_=S-x,E=t-y,A=e-M,C=n-T,F=i-_,I=E>A?32:0,N=E>C?16:0,B=A>C?8:0,k=E>F?4:0,z=A>F?2:0,Q=C>F?1:0,H=I+N+B+k+z+Q,Z=o[H][0]>=3?1:0,q=o[H][1]>=3?1:0,gt=o[H][2]>=3?1:0,St=o[H][3]>=3?1:0,Y=o[H][0]>=2?1:0,$=o[H][1]>=2?1:0,dt=o[H][2]>=2?1:0,X=o[H][3]>=2?1:0,K=o[H][0]>=1?1:0,P=o[H][1]>=1?1:0,L=o[H][2]>=1?1:0,V=o[H][3]>=1?1:0,ot=E-Z+c,Et=A-q+c,tt=C-gt+c,rt=F-St+c,pt=E-Y+2*c,xt=A-$+2*c,bt=C-dt+2*c,It=F-X+2*c,kt=E-K+3*c,Rt=A-P+3*c,jt=C-L+3*c,O=F-V+3*c,me=E-1+4*c,fe=A-1+4*c,D=C-1+4*c,w=F-1+4*c,J=g&255,et=m&255,ct=b&255,Tt=S&255,Ct=a[J+a[et+a[ct+a[Tt]]]]%32,ht=a[J+Z+a[et+q+a[ct+gt+a[Tt+St]]]]%32,mt=a[J+Y+a[et+$+a[ct+dt+a[Tt+X]]]]%32,Lt=a[J+K+a[et+P+a[ct+L+a[Tt+V]]]]%32,te=a[J+1+a[et+1+a[ct+1+a[Tt+1]]]]%32,Ft=.6-E*E-A*A-C*C-F*F;Ft<0?h=0:(Ft*=Ft,h=Ft*Ft*this._dot4(r[Ct],E,A,C,F));let Pt=.6-ot*ot-Et*Et-tt*tt-rt*rt;Pt<0?f=0:(Pt*=Pt,f=Pt*Pt*this._dot4(r[ht],ot,Et,tt,rt));let Jt=.6-pt*pt-xt*xt-bt*bt-It*It;Jt<0?u=0:(Jt*=Jt,u=Jt*Jt*this._dot4(r[mt],pt,xt,bt,It));let ne=.6-kt*kt-Rt*Rt-jt*jt-O*O;ne<0?d=0:(ne*=ne,d=ne*ne*this._dot4(r[Lt],kt,Rt,jt,O));let ce=.6-me*me-fe*fe-D*D-w*w;return ce<0?p=0:(ce*=ce,p=ce*ce*this._dot4(r[te],me,fe,D,w)),27*(h+f+u+d+p)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,i){return t[0]*e+t[1]*n+t[2]*i}_dot4(t,e,n,i,r){return t[0]*e+t[1]*n+t[2]*i+t[3]*r}};var na=class s extends Bn{constructor(t,e,n=512,i=512,r,o,a){super(),this.width=n,this.height=i,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=K0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Je(this.width,this.height,{type:an,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ye({defines:Object.assign({},Qo.defines),uniforms:qn.clone(Qo.uniforms),vertexShader:Qo.vertexShader,fragmentShader:Qo.fragmentShader,blending:$e,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new So,this.normalMaterial.blending=$e,this.pdMaterial=new Ye({defines:Object.assign({},ea.defines),uniforms:qn.clone(ea.uniforms),vertexShader:ea.vertexShader,fragmentShader:ea.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ye({defines:Object.assign({},ta.defines),uniforms:qn.clone(ta.uniforms),vertexShader:ta.vertexShader,fragmentShader:ta.fragmentShader,blending:$e}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ye({uniforms:qn.clone(Ur.uniforms),vertexShader:Ur.vertexShader,fragmentShader:Ur.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Io,blendDst:Ls,blendEquation:Xn,blendSrcAlpha:Po,blendDstAlpha:Ls,blendEquationAlpha:Xn}),this.blendMaterial=new Ye({uniforms:qn.clone(vc.uniforms),vertexShader:vc.vertexShader,fragmentShader:vc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:_l,blendSrc:Io,blendDst:Ls,blendEquation:Xn,blendSrcAlpha:Po,blendDstAlpha:Ls,blendEquationAlpha:Xn}),this._fsQuad=new xs(null),this._originalClearColor=new ie,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Si,this.depthTexture.format=Ai,this.depthTexture.type=ms,this.normalRenderTarget=new Je(this.width,this.height,{minFilter:je,magFilter:je,type:an,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=hu(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=$e,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=$e,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=$e,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=$e,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=$e,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,i,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_renderOverride(t,e,n,i,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i=e.clearColor||i,r=e.clearAlpha||r,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new _c,n=t*t*4,i=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let l=o,c=a;i[(o*t+a)*4]=(e.noise(l,c)*.5+.5)*255,i[(o*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,i[(o*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,i[(o*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let r=new bi(i,t,t,Sn,vn);return r.wrapS=xn,r.wrapT=xn,r.needsUpdate=!0,r}};na.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var ia={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var yc=class extends Bn{constructor(){super(),this.isOutputPass=!0,this.uniforms=qn.clone(ia.uniforms),this.material=new Tr({name:ia.name,uniforms:this.uniforms,vertexShader:ia.vertexShader,fragmentShader:ia.fragmentShader}),this._fsQuad=new xs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ye.getTransfer(this._outputColorSpace)===Te&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Lo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Do?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===fs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Uo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Bo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===No&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var j=Math.PI,Vt=j*2,_t=(s,t=0,e=1)=>Math.min(e,Math.max(t,s)),lt=(s,t,e)=>s+(t-s)*e,Ht=s=>(s=_t(s),s*s*(3-2*s)),Sc=s=>(s=_t(s),s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2),Ec=s=>1-Math.pow(1-_t(s),3),le=(s,t,e)=>_t((s-t)/(e-t)),Vv=le,Zt=(s,t,e,n=.35)=>Ht((s-t)/n)*Ht((e-s)/n),jn=(s,t)=>((t-s+j)%Vt+Vt)%Vt-j,aa=(s,t,e)=>s+jn(s,t)*e,la=(s,t)=>Math.atan2(t[0]-s[0],t[1]-s[1]),yt=(s,t,e)=>new U(s,t,e),Jn=s=>{let t=Math.sin(s*127.1+311.7)*43758.5453;return t-Math.floor(t)},Wv=(s,t)=>s.length?s.length===t?s.slice():Array.from({length:t},(e,n)=>{let i=t===1?0:n/(t-1)*(s.length-1),r=Math.floor(i),o=Math.min(s.length-1,r+1);return lt(s[r],s[o],i-r)}):Array(t).fill(0),qe=(s,t,e)=>"#"+new ie(s).lerp(new ie(t),e).getHexString(),We=9,Xe=7.5,Ve=3,En=.18,Kn=new Map;function nt(s,t={}){let e=s+JSON.stringify(t);if(Kn.has(e))return Kn.get(e);let n=new de({color:s,roughness:t.r??.75,metalness:t.m??0,emissive:t.e||"#000000",emissiveIntensity:t.ei??1,transparent:!!t.op,opacity:t.op??1,flatShading:!!t.flat,side:t.ds?An:Wn});return Kn.set(e,n),n}var Md=(s,t={})=>new ze({color:s,toneMapped:!1,transparent:!!t.op||!!t.map,opacity:t.op??1,map:t.map||null,blending:t.add?us:Xi,depthWrite:!t.add,side:t.ds?An:Wn});function Cn(s,t=!0,e=!0){return s.traverse(n=>{n.isMesh&&(n.castShadow=t,n.receiveShadow=e)}),s}function At(s,t,e,n=0,i=0,r=0,o={}){let a=new be(s,t);return a.position.set(n,i,r),o.rx&&(a.rotation.x=o.rx),o.ry&&(a.rotation.y=o.ry),o.rz&&(a.rotation.z=o.rz),o.s&&a.scale.set(...Array.isArray(o.s)?o.s:[o.s,o.s,o.s]),a.castShadow=o.cast!==!1,a.receiveShadow=o.recv!==!1,e&&e.add(a),a}function ut(s,t,e,n,i=.015,r={}){let o=n[0]-e[0],a=n[1]-e[1],l=n[2]-e[2],c=Math.min(i,o/2-.001,a/2-.001,l/2-.001),h=c>.002?new Zn(o,a,l,3,c):new Vn(o,a,l);return At(h,t,s,(e[0]+n[0])/2,(e[1]+n[1])/2,(e[2]+n[2])/2,r)}var re=(s,t,e,n,i,r,o,a,l={})=>At(new ri(e,n,i,l.seg||24),t,s,r,o,a,l),pe=(s,t,e,n,i,r,o={})=>At(new ke(e,o.seg||24,o.seg2||16),t,s,n,i,r,o),Li=(s,t,e,n,i,r,o,a={})=>At(new As(e,n,6,16),t,s,i,r,o,a);function Ee(s,t){let e=document.createElement("canvas");e.width=s,e.height=t;let n=e.getContext("2d"),i=new _r(e);return i.colorSpace=hn,i.anisotropy=4,{c:e,g:n,t:i,w:s,h:t}}function qi(s,t,e,n,i,r){s.beginPath(),s.moveTo(t+r,e),s.arcTo(t+n,e,t+n,e+i,r),s.arcTo(t+n,e+i,t,e+i,r),s.arcTo(t,e+i,t,e,r),s.arcTo(t,e,t+n,e,r),s.closePath()}function vs(s,t=1,e=.6){let n=Ee(128,128),i=n.g.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.35,"rgba(255,255,255,.35)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.g.fillStyle=i,n.g.fillRect(0,0,128,128);let r=new Vi(new Mi({map:n.t,color:s,blending:us,depthWrite:!1,transparent:!0,opacity:e,toneMapped:!1}));return r.scale.setScalar(t),r}function bd(s,t=.85){let e=(s.index,s),n=e.attributes.position.count;return e.attributes.uv&&e.deleteAttribute("uv"),e.attributes.uv1&&e.deleteAttribute("uv1"),e.setAttribute("color",new qt(new Array(n*3).fill(t),3)),e.index,e}function Tu(s){let t=s.map(e=>{if(!e.index){let n=e.attributes.position.count;e.setIndex([...Array(n).keys()])}return["uv","uv1","uv2"].forEach(n=>e.attributes[n]&&e.deleteAttribute(n)),e});return $0(t,!1)}var uu={};function Bu(s,t,e,n,i=[1,1]){let r=s+i.join("x");if(uu[r])return uu[r];let o=Ee(t,e);return n(o.g,t,e),o.t.wrapS=o.t.wrapT=xn,o.t.repeat.set(...i),o.t.anisotropy=8,uu[r]=o.t,o.t}var fu=11,On=()=>(fu=fu*16807%2147483647,fu/2147483647),Xv=(s,t,e)=>{s.fillStyle="#EDEDED",s.fillRect(0,0,t,e);for(let n=0;n<70;n++){let i=On()*e,r=.04+On()*.1;s.strokeStyle=`rgba(60,40,20,${r})`,s.lineWidth=.6+On()*2.4,s.beginPath(),s.moveTo(0,i);for(let o=0;o<=t;o+=16)s.lineTo(o,i+Math.sin(o*.02+n)*3+(On()-.5)*1.2);s.stroke()}for(let n=0;n<6;n++){let i=On()*t,r=On()*e,o=s.createRadialGradient(i,r,0,i,r,10+On()*10);o.addColorStop(0,"rgba(70,45,25,.22)"),o.addColorStop(1,"rgba(70,45,25,0)"),s.fillStyle=o,s.beginPath(),s.ellipse(i,r,24,7,0,0,Vt),s.fill()}},qv=(s,t,e)=>{s.fillStyle="#E6E6E6",s.fillRect(0,0,t,e);for(let n=0;n<e;n+=2)s.fillStyle=`rgba(0,0,0,${.035+(n%4?.02:0)})`,s.fillRect(0,n,t,1);for(let n=0;n<t;n+=2)s.fillStyle=`rgba(255,255,255,${.05+(n%4?.03:0)})`,s.fillRect(n,0,1,e);for(let n=0;n<900;n++)s.fillStyle=`rgba(0,0,0,${On()*.05})`,s.fillRect(On()*t,On()*e,2,2)},Os=(s,t={})=>{let e="mad"+s+JSON.stringify(t);if(Kn.has(e))return Kn.get(e);let n=new de({color:s,roughness:t.r??.55,metalness:0,map:Bu("madeira",256,256,Xv,t.rep||[1,1])});return Kn.set(e,n),n},Br=(s,t={})=>{let e="tec"+s+JSON.stringify(t);if(Kn.has(e))return Kn.get(e);let n=new ie(s),i=new wn({color:s,roughness:t.r??.92,sheen:.7,sheenRoughness:.45,sheenColor:n.clone().lerp(new ie("#FFFFFF"),.35),map:Bu("tecido",128,128,qv,t.rep||[3,3])});return Kn.set(e,i),i},du=null;function Q0(s,t,e,n,i,r=0,o=.42){if(!du){let l=Ee(128,128),c=l.g;c.shadowColor="#000",c.shadowBlur=20,c.shadowOffsetX=300,c.fillStyle="#000",qi(c,-274,26,76,76,14),c.fill(),du=l.t}let a=new be(new Ge(1,1),new ze({map:du,color:"#000000",transparent:!0,opacity:o,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));return a.rotation.set(-j/2,0,r),a.position.set(t,.003,e),a.scale.set((n*2+.12)*1.68,(i*2+.12)*1.68,1),a.renderOrder=1,a.receiveShadow=!1,a.castShadow=!1,s.add(a),a}var Yv=(s,t,e)=>{s.fillStyle="#F2F2F2",s.fillRect(0,0,t,e);for(let n=0;n<5e3;n++){let i=On();s.fillStyle=i>.5?`rgba(255,255,255,${(i-.5)*.12})`:`rgba(0,0,0,${i*.05})`,s.fillRect(On()*t,On()*e,1.5,1.5)}},td=s=>{let t="par"+s;if(Kn.has(t))return Kn.get(t);let e=new de({color:s,roughness:.92,map:Bu("parede",256,256,Yv,[4,2])});return Kn.set(t,e),e},pu=null;function Or(s,t,e,n,i,r=.22){if(!pu){let a=Ee(4,64),l=a.g.createLinearGradient(0,0,0,64);l.addColorStop(0,"rgba(0,0,0,1)"),l.addColorStop(.35,"rgba(0,0,0,.45)"),l.addColorStop(1,"rgba(0,0,0,0)"),a.g.fillStyle=l,a.g.fillRect(0,0,4,64),pu=a.t}let o=new be(new Ge(t,e),new ze({map:pu,color:"#000000",transparent:!0,opacity:r,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));return o.position.copy(n),o.rotation.copy(i),o.renderOrder=1,s.add(o),o}var mu=new Map;function Pc(s,t,e,n,i=3){if(mu.has(s))return mu.get(s);let r=document.createElement("canvas");r.width=t,r.height=e;let o=r.getContext("2d");o.fillStyle="#808080",o.fillRect(0,0,t,e),n(o,t,e);let a=o.getImageData(0,0,t,e).data,l=o.createImageData(t,e),c=l.data,h=(u,d)=>a[((d%e+e)%e*t+(u%t+t)%t)*4];for(let u=0;u<e;u++)for(let d=0;d<t;d++){let p=(h(d+1,u)-h(d-1,u))/255*i,v=(h(d,u+1)-h(d,u-1))/255*i,g=Math.hypot(p,v,1),m=(u*t+d)*4;c[m]=(-p/g*.5+.5)*255,c[m+1]=(v/g*.5+.5)*255,c[m+2]=(.5/g+.5)*255,c[m+3]=255}o.putImageData(l,0,0);let f=new _r(r);return f.wrapS=f.wrapT=xn,f.colorSpace=li,f.anisotropy=4,f.channel=1,mu.set(s,f),f}function Ic(s,t,e,n){if(s.save(),n==="malha")for(let i=0;i<t;i+=4)s.fillStyle="rgba(255,255,255,.2)",s.fillRect(i,0,2,e);else if(n==="jeans"){s.strokeStyle="rgba(255,255,255,.22)",s.lineWidth=1.4;for(let i=-e;i<t;i+=4)s.beginPath(),s.moveTo(i,e),s.lineTo(i+e,0),s.stroke()}else if(n==="trico"){s.fillStyle="rgba(255,255,255,.32)";for(let i=0;i<e;i+=8)for(let r=0;r<t;r+=8)s.beginPath(),s.ellipse(r+2,i+4,1.9,3.6,-.55,0,Vt),s.ellipse(r+6,i+4,1.9,3.6,.55,0,Vt),s.fill()}else if(n==="la")for(let i=0;i<e;i+=2)s.fillStyle=`rgba(255,255,255,${i/2%2?.05:0})`,s.fillRect(0,i,t,1);else{for(let i=0;i<e;i+=2)s.fillStyle=`rgba(255,255,255,${i/2%2?.08:.02})`,s.fillRect(0,i,t,1);for(let i=0;i<t;i+=2)s.fillStyle=`rgba(0,0,0,${i/2%2?.06:0})`,s.fillRect(i,0,1,e)}s.restore()}function zn(s,t,e=9,n=.5,i=0){let r=(o,a,l,c)=>{s.strokeStyle=o,s.lineWidth=l,s.beginPath(),t.forEach(([h,f],u)=>u?s.lineTo(h+c,f+a):s.moveTo(h+c,f+a)),s.stroke()};s.save(),s.filter=`blur(${(e*.45).toFixed(1)}px)`,s.lineCap="round",s.lineJoin="round";for(let o of i?[0,-i,i]:[0])r(`rgba(0,0,0,${n*.75})`,e*.55,e*.7,o),r(`rgba(255,255,255,${n})`,0,e,o);s.restore()}function hi(s,t,e,n,i,r=0){s.save(),s.filter="blur(0.7px)";for(let o of r?[0,-r,r]:[0])s.strokeStyle="rgba(0,0,0,.55)",s.lineWidth=2.2,s.beginPath(),s.moveTo(t+o,e),s.lineTo(n+o,i),s.stroke(),s.strokeStyle="rgba(255,255,255,.35)",s.lineWidth=1.2,s.beginPath(),s.moveTo(t+o+2.5,e+1),s.lineTo(n+o+2.5,i+1),s.stroke();s.restore()}var Di=(s,t,e,n,i,r=0)=>{let o=[];for(let a=0;a<=12;a++){let l=a/12;o.push([lt(s,t,l),e+n*Math.sin(l*j*i+r)])}return o},Rn=s=>(1-(s+.135)/.685)*512;function ed(s){return Pc("tronco-"+s,512,512,(t,e,n)=>{Ic(t,e,n,s);for(let[i,r]of[[.035,.42],[.085,.36],[.13,.28]])zn(t,Di(178,334,Rn(i),5,2,i*30),10,r),zn(t,Di(410,500,Rn(i+.01),4,1.5),9,r*.6),zn(t,Di(12,102,Rn(i+.01),4,1.5),9,r*.6);for(let i of[1,-1]){let r=i>0?128:384;[[.405,.33,70],[.392,.3,58],[.38,.265,46]].forEach(([o,a,l],c)=>{zn(t,[[r+i*6,Rn(o)],[r+i*l*.55,Rn((o+a)/2)+4],[r+i*l,Rn(a)]],8,.45-c*.08),zn(t,[[r-i*6,Rn(o)],[r-i*l*.5,Rn(a+.02)]],7,.3)})}hi(t,128,0,128,n),hi(t,384,0,384,n),hi(t,92,Rn(.475),164,Rn(.475)),hi(t,348,Rn(.475),420,Rn(.475)),hi(t,0,Rn(-.112),e,Rn(-.112))},2.6)}var Pi=s=>(1-(.1-s)/.7)*256;function Zv(s,t){return Pc("manga-"+s+(t?"L":"C"),256,256,(e,n,i)=>{if(Ic(e,n,i,s),hi(e,0,Pi(.035),n,Pi(.035)),t){for(let[r,o]of[[.02,.5],[-.01,.55],[-.04,.45],[-.07,.3]])zn(e,Di(-46,46,Pi(-.27+r),4,1,r*40),9,o,n);for(let r of[0,-.05])zn(e,Di(100,156,Pi(-.3+r),3,1),7,.25);for(let[r,o]of[[-.44,.35],[-.47,.45],[-.5,.4]])zn(e,Di(0,n,Pi(r),5,3,r*50),8,o);hi(e,0,Pi(-.525),n,Pi(-.525))}else zn(e,Di(0,n,Pi(-.12),4,2),8,.35),hi(e,0,Pi(-.172),n,Pi(-.172));hi(e,128,0,128,i)},2.4)}var zr=s=>(1-(.06-s)/.84)*512;function nd(s){return Pc("perna-"+s,256,512,(t,e,n)=>{Ic(t,e,n,s);for(let[i,r]of[[-.04,.42],[-.085,.34],[-.13,.22]])zn(t,[[200,zr(i+.03)],[150,zr(i)],[70,zr(i-.04)]],9,r);for(let[i,r]of[[.03,.35],[-.01,.5],[-.05,.45]])zn(t,Di(96,160,zr(-.42+i),5,1.5,i*30),9,r);for(let i of[.02,-.03])zn(t,Di(-30,30,zr(-.42+i),3,1),7,.22,e);for(let[i,r]of[[-.69,.32],[-.72,.45],[-.75,.4]])zn(t,Di(0,e,zr(i),6,2.5,i*40),9,r);hi(t,64,0,64,n),hi(t,192,0,192,n)},2.6)}var jv=[[-.135,.178,.13,2.3,.004],[-.07,.169,.124,2.35,.004],[0,.159,.116,2.4,.003],[.1,.153,.11,2.5,.003],[.2,.159,.114,2.6,.005],[.3,.173,.121,2.7,.009],[.38,.184,.12,2.8,.008],[.437,.19,.112,2.7,.004],[.475,.174,.1,2.45,0],[.505,.14,.087,2.25,0],[.527,.1,.073,2.05,0],[.542,.072,.063,2,0],[.552,.052,.054,2,0]];function wu(s){let t=jv,e=0;for(;e<t.length-2&&t[e+1][0]<s;)e++;let n=_t((s-t[e][0])/(t[e+1][0]-t[e][0])),i=t[Math.max(0,e-1)],r=t[e],o=t[e+1],a=t[Math.min(t.length-1,e+2)],l=c=>{let h=i[c],f=r[c],u=o[c],d=a[c];return .5*(2*f+(-h+u)*n+(2*h-5*f+4*u-d)*n*n+(-h+3*f-3*u+d)*n*n*n)};return[l(1),l(2),l(3),l(4)]}var gu=(s,t)=>Math.sign(s)*Math.pow(Math.abs(s),t);function Jv(s){let t=s.g||1,e=s.bar||0,n=s.folga||0,i=s.flare||0,r=s.ini??-.135,o=(l,c)=>{let[h,f,u,d]=wu(l),p=_t((-l+0)/.135)*i;h=(h+n+p)*t,f=(f+n+p*.7)*t;let v=Math.sin(c),g=Math.cos(c),m=h*gu(g,2/u),b=d*t+f*gu(v,2/u),S=e*Math.exp(-(((l-.11)/.13)**2));return S>0&&(b+=S*Math.pow(Math.max(0,v),1.4),m*=1+S/Math.max(h,.05)*.22),[m,b]};return{ponto:o,frente:(l,c,h=0)=>{let[f,,u]=wu(c),d=_t(-c/.135)*i;f=(f+n+d)*t;let p=e*Math.exp(-(((c-.11)/.13)**2)),v=f*(1+p/Math.max(f,.05)*.22),g=_t(gu(l/v,u/2),-1,1),m=Math.acos(g);return o(c,m)[1]+h},ini:r,topo:.552}}function Sd(s,t){let e=Ht((s-0)/.15),n=1-e,i=Ht((-.015-s)/.11)*.9,r=.5+.5*_t(t*1.6,-1,1);return[e,n*(1-i),n*i*r,n*i*(1-r)]}function $v(s){let e=s.ini,n=s.topo,i=[],r=Math.max(24,Math.round((n-e)/.0105));for(let u=0;u<=r;u++)i.push({y:n-(n-e)*(u/r),k:1});i.push({y:e+.002,k:.955},{y:e+.035,k:.94});let o=[],a=[],l=[],c=[],h=[];i.forEach(({y:u,k:d})=>{for(let p=0;p<=64;p++){let v=-j/2+p/64*Vt,[g,m]=s.ponto(u,v);o.push(g*d,u,m*d),a.push(p/64,(u+.135)/.685);let b=Sd(u,Math.sin(v));l.push(0,1,2,3),c.push(...b)}});for(let u=0;u<i.length-1;u++)for(let d=0;d<64;d++){let p=u*65+d,v=p+64+1;h.push(p,p+1,v,p+1,v+1,v)}let f=new _e;return f.setAttribute("position",new qt(o,3)),f.setAttribute("uv",new qt(a,2)),f.setAttribute("uv1",new qt(a,2)),f.setAttribute("skinIndex",new Gi(l,4)),f.setAttribute("skinWeight",new qt(c,4)),f.setIndex(h),f.computeVertexNormals(),Au(f,yt(0,.3,1)),f}function Au(s,t){let e=s.attributes.position,n=s.attributes.normal,i=-1,r=-1e9;for(let o=0;o<e.count;o++){let a=e.getX(o)*t.x+e.getY(o)*t.y*0+e.getZ(o)*t.z;a>r&&(r=a,i=o)}if(n.getZ(i)<0){let o=s.index.array;for(let a=0;a<o.length;a+=3){let l=o[a+1];o[a+1]=o[a+2],o[a+2]=l}s.index.needsUpdate=!0,s.computeVertexNormals()}}function Kv(s){let t=s.attributes.position,e=t.count,n=new Uint16Array(e*4),i=new Float32Array(e*4);for(let r=0;r<e;r++){let o=Sd(t.getY(r),_t(t.getZ(r)/.11,-1,1));n.set([0,1,2,3],r*4),i.set(o,r*4)}return s.setAttribute("skinIndex",new nn(n,4)),s.setAttribute("skinWeight",new nn(i,4)),s}function id(s,t){let e=new ke(1,t.seg||168,t.an||118,0,Vt,0,t.thMax??2.35),n=e.attributes.position,i=n.count,r=new Float32Array(i*3),o=new Uint8Array(i),a=t.polo?t.polo.clone().normalize():null,l=null,c=null;a&&(l=(Math.abs(a.y)<.9?yt(0,1,0):yt(1,0,0)).cross(a).normalize(),c=new U().crossVectors(a,l));let h=new U,f=new U;for(let p=0;p<i;p++){h.fromBufferAttribute(n,p).normalize();let v=t.mascara?_t(t.mascara(h)):1,g=v>0?t.h(h)*Math.pow(v,.6):0,m=1;if(a&&g>0&&t.sulcos){f.copy(h).addScaledVector(a,-h.dot(a));let S=f.length();if(S>1e-4){let x=Math.atan2(f.dot(c),f.dot(l)),y=_t(S*2.6),M=Math.acos(_t(h.dot(a),-1,1)),T=.7*Math.sin(x*3+1.3)+(t.onda?t.onda(h,M):0),_=.5+.5*Math.cos(x*t.sulcos+T),E=Math.pow(_,t.agudo||5)*y;g*=1-(t.prof??.3)*E*_t(v*1.5),m=1-.34*E}}if(t.relevo&&v>0){let S=t.relevo(h);g+=S*v,m*=.82+.36*_t(S/(t.relevoMax||.02),0,1)}m*=.94+.12*Jn(p*.173),o[p]=v>.002?1:0;let b=s+(t.base??8e-4)+Math.max(0,g);n.setXYZ(p,h.x*b,h.y*b,h.z*b),r[p*3]=r[p*3+1]=r[p*3+2]=m}let u=e.index.array,d=[];for(let p=0;p<u.length;p+=3)(o[u[p]]||o[u[p+1]]||o[u[p+2]])&&d.push(u[p],u[p+1],u[p+2]);return e.setIndex(d),e.setAttribute("color",new nn(r,3)),e.deleteAttribute("uv"),t.forma&&t.forma(e,s),e.computeVertexNormals(),e}var Ke=(s,t)=>yt(Math.sin(s)*Math.sin(t),Math.cos(s),Math.sin(s)*Math.cos(t)),ln=s=>[Math.acos(_t(s.y,-1,1)),Math.atan2(s.x,s.z)];function sd(s,t,e,n=1){let i=[];for(let o=0;o<s;o++){let a=1-2*((o+.5)/s),l=Math.sqrt(1-a*a),c=o*2.39996+n;i.push([yt(l*Math.sin(c),a,l*Math.cos(c)),e*(.7+.6*Jn(o+n))])}let r=Math.cos(t*2.2);return o=>{let a=0;for(let[l,c]of i){let h=o.dot(l);if(h<r)continue;let f=Math.acos(Math.min(1,h));a+=c*Math.exp(-((f/t)**2))}return a}}function xu(s,t,e={}){let n=new rs(s,!1,"centripetal"),i=e.seg||32,r=e.rad||18,o=e.ach??.5,a=e.sulcos??4,l=n.computeFrenetFrames(i,!1),c=[],h=[],f=[];for(let d=0;d<=i;d++){let p=d/i,v=n.getPointAt(p),g=l.tangents[d],m=l.normals[d].clone(),b=l.binormals[d].clone();if(e.ref){let y=(typeof e.ref=="function"?e.ref(v,p):e.ref).clone();m=y.sub(g.clone().multiplyScalar(y.dot(g))).normalize(),b=new U().crossVectors(g,m).normalize()}let S=(typeof t=="function"?t(p):t)*Math.sqrt(_t(p/.04))*Math.sqrt(_t((1-p)/.12)),x=(e.torcao||0)*p;for(let y=0;y<=r;y++){let M=y/r*Vt+x,T=Math.cos(M),_=Math.sin(M),E=a?Math.pow(.5+.5*Math.cos(M*a*2+.6),6):0,A=S*(1-.16*E),C=m.clone().multiplyScalar(T*o*A).add(b.clone().multiplyScalar(_*A));c.push(v.x+C.x,v.y+C.y,v.z+C.z);let F=(e.cor??1)*(1-.3*E)*(.9+.1*p);h.push(F,F,F)}}for(let d=0;d<i;d++)for(let p=0;p<r;p++){let v=d*(r+1)+p,g=v+r+1;f.push(v,g,v+1,g,g+1,v+1)}let u=new _e;return u.setAttribute("position",new qt(c,3)),u.setAttribute("color",new qt(h,3)),u.setIndex(f),u.computeVertexNormals(),u}function Qv(s,t,e,n=11){let i=new rs(s,!1,"centripetal"),r=[];for(let o=0;o<n;o++){let a=(o+.5)/n,l=i.getPointAt(a),c=i.getTangentAt(a),h=lt(t,e,a),f=new ke(h,16,12);f.scale(1.15,1.6,.9);let u=new we().setFromUnitVectors(yt(0,1,0),c.clone().negate()),d=new we().setFromAxisAngle(c,o%2?.55:-.55);f.applyQuaternion(new we().setFromAxisAngle(yt(0,0,1),o%2?.5:-.5)),f.applyQuaternion(u),f.applyQuaternion(d),f.translate(l.x,l.y,l.z),r.push(bd(f,.92-o%2*.08))}return Tu(r)}function rd(s,t,e,n=2.6,i=22,r=16){let o=new ke(1,i,r),a=o.attributes.position;for(let l=0;l<a.count;l++){let c=a.getX(l),h=a.getY(l),f=a.getZ(l),u=Math.pow(Math.pow(Math.abs(c),n)+Math.pow(Math.abs(h),n)+Math.pow(Math.abs(f),n),-1/n);a.setXYZ(l,c*u*s,h*u*t,f*u*e)}return o.computeVertexNormals(),o}function t_(s,t,e,n){At(rd(.022,.024,.031,2.2),e,s,0,-.008,0),At(rd(.0205,.041,.0415,2.7,26,18),e,s,t*.002,-.052,.001),pe(s,e,.02,-t*.012,-.045,.026,{s:[.85,1.35,.9],seg:16,seg2:12});let i=[];[[-.0285,.024,.0112],[-.0095,.03,.0122],[.0095,.032,.0124],[.0285,.029,.0118]].forEach(([a,l,c])=>{let h=new wt;h.position.set(0,-.088,a),s.add(h),Li(h,e,c,l,0,-l/2+.002,0),pe(h,e,c*1.04,t*.003,.002,0,{seg:12,seg2:10});let f=new wt;f.position.y=-l-.002,h.add(f),Li(f,e,c*.95,l*.78,0,-l*.39,0),pe(f,n,c*.62,t*.0072,-l*.62,0,{s:[.45,.8,1],seg:10,seg2:8,cast:!1}),i.push({p1:h,p2:f})});let r=new wt;r.position.set(-t*.014,-.036,.034),r.rotation.set(.4,0,t*.5),s.add(r),Li(r,e,.0145,.026,0,-.018,0);let o=new wt;return o.position.y=-.04,r.add(o),Li(o,e,.0132,.022,0,-.013,0),pe(o,n,.008,t*.008,-.019,0,{s:[.45,.8,1],seg:10,seg2:8,cast:!1}),i.push({p1:r,p2:o,polegar:!0}),i}function od(s,t,e,n=.007,i=1){let r=new Ti,o=-.068,a=o+s,l=t/2,c=l*.8;r.moveTo(0,o),r.bezierCurveTo(c*1.15,o,c,o+.03,c*1.02,o+.06),r.bezierCurveTo(l*1.02,o+s*.55,l*1.08,a-.05,l*.7*i,a-.012),r.quadraticCurveTo(0,a+.008,-l*.7*i,a-.012),r.bezierCurveTo(-l*1.08,a-.05,-l*1.02,o+s*.55,-c*1.02,o+.06),r.bezierCurveTo(-c,o+.03,-c*1.15,o,0,o);let h=new Is(r,{depth:e-2*n,bevelEnabled:!0,bevelThickness:n,bevelSize:n,bevelSegments:3,curveSegments:18});return h.rotateX(j/2),h.translate(0,-.076+e-n,0),h.computeVertexNormals(),h}function zs(s,t,e,n,i={}){let r=i.nu||44,o=i.na||26,a=[],l=[],c=-.07,h=i.u0??0,f=i.u1??1,u=i.a0??0,d=i.a1??j,p=i.off||0;for(let g=0;g<=r;g++){let m=lt(h,f,g/r),b=c+t*m,S=Math.sqrt(_t(m/.09))*Math.sqrt(_t((1-m)/.12)),x=e(m)*S+p,y=n(m)*Math.pow(S,.6)+p;for(let M=0;M<=o;M++){let T=lt(u,d,M/o);a.push(Math.cos(T)*x,s+Math.sin(T)*y,b)}}for(let g=0;g<r;g++)for(let m=0;m<o;m++){let b=g*(o+1)+m,S=b+o+1;l.push(b,b+1,S,S,b+1,S+1)}let v=new _e;return v.setAttribute("position",new qt(a,3)),v.setIndex(l),v.computeVertexNormals(),v}function e_(s,t){let e=new wt,{cor:n,sola:i,det:r,cadarco:o,faixa:a}=t;if(s===2){At(od(.215,.083,.016,.004,.8),i,e);let v=m=>lt(.036,.041,Math.sin(m*j))*(m>.8?lt(1,.78,(m-.8)/.2):1),g=m=>lt(.07,.025,Ht(m))+.004;At(zs(-.062,.218,v,g),n,e),At(zs(-.062,.218,v,g,{u0:.36,u1:.62,a0:j/2-.42,a1:j/2+.42,off:.0015,nu:12,na:10}),n,e);for(let m=0;m<3;m++){let b=.4+m*.07,S=-.07+.218*b;ut(e,r,[-.012,-.0012,-.0014],[.012,.0012,.0014],8e-4).position.set(0,-.062+g(b)+.002,S)}return ut(e,i,[-.03,-.076,-.07],[.03,-.056,-.025],.004),e}let l=s===1||s===3,c=s===4,h=s===3,f=h?.032:c?.038:.03;At(od(.228,h?.094:.09,f,.008),i,e),a&&At(new Ae(1,.0032,6,64),a,e,0,-.076+f*.55,.046,{rx:j/2,s:[.0462,.1175,1]});let u=-.076+f-.004,d=v=>lt(.038,.046,Math.sin(v*j*.9)),p=v=>(h?.085:.078)*(1-.62*Ht((v-.35)/.65))+.008;At(zs(u,.226,d,p),n,e),(s===0||s===1)&&At(zs(u,.226,d,v=>Math.min(p(v),.021),{u0:.78,off:.002,nu:14}),i,e),s===1&&At(zs(u,.226,d,v=>p(v)*.78,{u0:.84,off:.0016,nu:10}),r,e),h||At(zs(u,.226,d,p,{u0:.3,u1:.74,a0:j/2-.5,a1:j/2+.5,off:.0016,nu:16,na:10}),r,e);for(let v=0;v<4;v++){let g=.36+v*.09,m=-.07+.226*g,b=u+p(g)*Math.pow(Math.sqrt(_t(g/.09))*Math.sqrt(_t((1-g)/.12)),.6)+.004,S=Math.atan2(p(g+.01)-p(g-.01),.226*.02);ut(e,o,[-.02,-.0022,-.0034],[.02,.0022,.0034],.0018,{rx:-S}).position.set(0,b,m)}if(pe(e,n,.026,0,u+.078,.004,{s:[.92,.4,1],seg:16,seg2:10}),At(new Ae(.036,.011,10,26),l?n:r,e,0,u+.085,-.024,{rx:j/2+.25,s:[1.05,1.15,1]}),pe(e,r,.03,0,u+.03,-.06,{s:[1.18,1.05,.42],seg:16,seg2:12}),l&&(re(e,n,.047,.05,.075,0,u+.11,-.014,{seg:26}),At(new Ae(.046,.009,8,26),h?n:r,e,0,u+.148,-.014,{rx:j/2}),h||pe(e,r,.016,.047,u+.098,-.016,{s:[.25,1,1],seg:12,seg2:8})),c)for(let v of[-1,1])At(zs(u,.226,d,p,{u0:.32,u1:.62,a0:v>0?.25:j-.65,a1:v>0?.65:j-.25,off:.0014,nu:12,na:6}),a||r,e);return e}function n_(s,t,e,n,i,r){return s.moveTo(t+r,e),s.lineTo(t+n-r,e),s.quadraticCurveTo(t+n,e,t+n,e+r),s.lineTo(t+n,e+i-r),s.quadraticCurveTo(t+n,e+i,t+n-r,e+i),s.lineTo(t+r,e+i),s.quadraticCurveTo(t,e+i,t,e+i-r),s.lineTo(t,e+r),s.quadraticCurveTo(t,e,t+r,e),s}var i_={triste:{hemi:.55,key:.85,keyCor:"#AFC0E6",amb:"#7F8FB3",lamp:!1,pend:!1,raio:.1,tv:"#EF4444",mon:"#EF4444",exp:.9},preocupado:{hemi:.75,key:1.35,keyCor:"#FFE3C7",amb:"#B9A58F",lamp:!0,pend:!1,raio:.16,tv:"#EF4444",mon:"#F97316",exp:.97},tranquilo:{hemi:.85,key:1.7,keyCor:"#FFF4E3",amb:"#C8C6E8",lamp:!0,pend:!1,raio:.28,tv:"#818CF8",mon:"#60A5FA",exp:1},feliz:{hemi:.95,key:2.1,keyCor:"#FFF1D6",amb:"#E8DCC0",lamp:!0,pend:!0,raio:.4,tv:"#22C55E",mon:"#22C55E",exp:1.04},euforico:{hemi:.8,key:1.6,keyCor:"#FFE0F2",amb:"#E9C9E6",lamp:!0,pend:!0,raio:.36,tv:"#FACC15",mon:"#FACC15",exp:1.05}},cn={p:["#F6D3B3","#F2C3A0","#D9A27A","#B07850","#7A4E33","#4F3123","#FFE3CC","#3A2218"],c:["#2B1B12","#3B261B","#6B4226","#A86B3C","#D9B26A","#EFDDB0","#8E8E8E","#B33A2A","#2F4FC0","#D9568E","#121212","#E8E8E8","#C4552B","#7C4BC7"],l:["#2F3B52","#1F2937","#5B4636","#3F5F45","#D6CDBB","#6F86B5","#111318","#A0643A","#7F1D1D","#9CA3AF"],s:["#1B2230","#F4F6F8","#C02626","#7C4A21","#2563EB","#16A34A","#F59E0B","#7C3AED","#EC4899","#0EA5E9"],u:[null,"#F8FAFC","#111827","#DC2626","#EA580C","#FACC15","#16A34A","#0D9488","#2563EB","#7C3AED","#DB2777","#92400E","#6B7280","#0F766E"],i:["#3A2214","#140C08","#2F6FB5","#3E7A3A","#8A6A2F","#5E6E7A"]},s_={p:7,c:13,k:16,b:5,l:9,o:2,a:4,w:4,r:17,e:4,s:9,u:13,f:4,h:5,j:5,i:5},r_={p:1,c:1,k:0,b:0,l:0,o:0,a:2,w:2,r:0,e:0,s:0,u:0,f:0,h:0,j:0,i:0};var ad=s=>{let t={...r_};return String(s||"").replace(/([pckbloawresufhji])([0-9a-z])/g,(e,n,i)=>{t[n]=Math.min(parseInt(i,36),s_[n])}),t},Ru="#272C38",ld="#3B5B8C",Ii=[{m:"camisa",manga:"C",gola:"polo",estampa:1},{m:"camisa",manga:"C",gola:"redonda",estampa:1},{m:"camisa",tec:"malha",manga:"L",gola:"capuz",estampa:1,punhoR:1,barraR:1,bolso:"canguru"},{m:"branco",manga:"L",gola:"social",enf:1,gravata:1,botoes:1},{m:"camisa",manga:"L",gola:"jaqueta",folga:.006,aberta:1,punhoR:1},{m:"camisa",manga:"R",gola:"regata",estampa:1},{m:"terno",tec:"la",manga:"L",gola:"terno",folga:.008,flare:.006,ini:-.15,punho:"branco",calca:Ru},{m:"camisa",tec:"la",manga:"L",gola:"blazer",folga:.007,ini:-.15,punho:"branco"},{m:"xadrez",manga:"L",gola:"camisa",botoes:1},{m:"havai",manga:"C",gola:"aberta",botoes:1},{m:"camisa",tec:"malha",manga:"L",gola:"alta",ziper:1,listras:1,punhoR:1,barraR:1},{m:"camisa",manga:"C",gola:"camisa",botoes:1},{m:"camisa",tec:"trico",manga:"L",mangaM:"branco",gola:"colete",folga:.004,barraR:1},{m:"camisa",tec:"trico",manga:"L",gola:"redonda",punhoR:1,barraR:1},{m:"listras",manga:"C",gola:"redonda"},{m:"jeans",tec:"jeans",manga:"L",gola:"camisa",botoes:1,bolso:"peito",folga:.005,punhoR:1},{m:"time",manga:"C",gola:"v",numero:1},{m:"camisa",manga:"C",gola:"redonda",vestido:1,enf:1}],o_=[.9,.95,1,1.05,1.1],cd=[.84,.92,1,1.12,1.26].map(s=>s*1.12),a_=[0,0,.004,.022,.05],$n={alt:.89,dy:0,hz:0,lean:0,side:0,twist:0,nod:0,turn:0,roll:0,aL:[0,.12,.2],aR:[0,.12,.2],lL:[0,0],lR:[0,0],olhar:[0,0],boch:0,abre:.6,lagrima:0,nuvem:0,balao:0,yawAdd:0,sent:0,kL:0,kR:0,ikL:null,ikR:null,mL:0,mR:0,taco:-1,recuo:0,porta:0,fxk:0,gole:0,pL:0,pR:0,olhos:"A",boca:"leve",sob:"",item:"",balaoT:""},Cu=["alt","dy","hz","lean","side","twist","nod","turn","roll","boch","abre","lagrima","nuvem","balao","yawAdd","sent","kL","kR","mL","mR","taco","recuo","porta","fxk","gole","pL","pR"],Tc=["aL","aR","lL","lR","olhar"],l_=["olhos","boca","sob","item","balaoT","bolas","solta","fx","gestoL","gestoR"],Pu=[.47*1.4,.565*1.4,.52*1.4],c_=Pu[1]/Pu[0]*.98,sa=.29,hd=.325,ud=1.18;function Mc(s,t){let e=s.attributes.position,n=new U;for(let i=0;i<e.count;i++){n.fromBufferAttribute(e,i);let r=n.clone().divideScalar(t),o=_t(-r.y),a=_t(r.y),l=1-.11*Math.pow(o,1.6)+.045*(1-Math.abs(r.y))*(r.y<0?1.4:1),c=1-.1*Math.pow(o,2)*(r.z<0?1.4:.6)-.04*a*(r.z<0?1:0),h=1+.04*o;e.setXYZ(i,n.x*l,n.y*h,n.z*c+(r.z>0?.035*t*Math.pow(o,2)*r.z:0))}return s.computeVertexNormals(),s}var h_=[Ke(1.76,-.6),Ke(1.76,.6)],Ed=Ke(1.94,0);function fd(s,t){let e=s.attributes.position,n=e.count,i=new U,r=[new Float32Array(n*3),new Float32Array(n*3),new Float32Array(n*3)];for(let a=0;a<n;a++){i.fromBufferAttribute(e,a).normalize();let l=0;for(let u of h_){let d=Math.acos(_t(i.dot(u),-1,1));l+=Math.exp(-((d/.3)**2))}r[0].set([i.x*.017*l,i.y*.017*l+.008*l,i.z*.017*l],a*3);let c=Ht((-i.y-.42)/.3)*Ht((i.z-.15)/.5);r[1].set([0,-.03*c,.006*c],a*3);let h=Math.acos(_t(i.dot(Ed),-1,1)),f=Math.exp(-((h/.17)**2));r[2].set([i.x*.013*f,i.y*.013*f,i.z*.013*f],a*3)}s.morphTargetsRelative=!0,s.morphAttributes.position=[],s.morphAttributes.normal=[];let o=s.attributes.normal.array.slice();for(let a of r){s.morphAttributes.position.push(new qt(a,3));let l=s.clone();l.morphAttributes={};let c=l.attributes.position;for(let u=0;u<n;u++)c.setXYZ(u,c.getX(u)+a[u*3],c.getY(u)+a[u*3+1],c.getZ(u)+a[u*3+2]);l.computeVertexNormals();let h=l.attributes.normal.array,f=new Float32Array(n*3);for(let u=0;u<n*3;u++)f[u]=h[u]-o[u];s.morphAttributes.normal.push(new qt(f,3)),l.dispose()}return s}var wc=class{constructor(t,e,n,i){let r=this.ap=ad(n);this.molas={},this.cor=t||"#2457F5";let o=(I,N=.82,B=.2)=>new wn({color:I,roughness:N,sheen:B,sheenRoughness:.75,sheenColor:new ie("#E9EEFF"),normalScale:new vt(.9,.9)});this.mtTronco=o(this.cor),this.mtManga=o(this.cor),this.mtDet=o(this.cor,.8,.15),this.gola=this.mtDet,this.branco=new wn({color:"#F4F6FA",roughness:.66,sheen:.15,sheenColor:new ie("#FFFFFF"),normalMap:ed("liso"),normalScale:new vt(.7,.7)}),this.mtGravata=new de({color:this.cor,roughness:.42}),this.mtLapela=new de({color:"#1D212B",roughness:.45}),this.texX=Ee(256,256),this.texH=Ee(256,256),this.texL=Ee(128,128),this.texT=Ee(512,512),this.texLM=Ee(128,128),this.texLP=Ee(128,128);for(let I of[this.texX,this.texH,this.texL])I.t.wrapS=I.t.wrapT=xn,I.t.repeat.set(4,2);for(let I of[this.texLM,this.texLP,this.texT])I.t.wrapS=I.t.wrapT=xn,I.t.channel=1;let a=this.pele=new wn({color:cn.p[r.p],roughness:.5,emissive:"#4A1D0C",emissiveIntensity:.15,sheen:.18,sheenRoughness:.55,sheenColor:new ie("#FFC9B0")}),l=this.peleSom=new de({color:cn.p[r.p],roughness:.55,emissive:"#4A1D0C",emissiveIntensity:.1});this.cab=new de({color:cn.c[r.c],roughness:.6,vertexColors:!0}),this.cabRaspado=new de({color:cn.c[r.c],roughness:.95,vertexColors:!0}),this.barbaMat=new de({color:cn.c[r.c],roughness:.9,vertexColors:!0}),this.mtCalca=o(cn.l[r.l],.84,.18),this.mtCalca.normalMap=nd("liso"),this.mtSap=new de({color:cn.s[r.s],roughness:.48}),this.mtSola=new de({color:"#F4F6F8",roughness:.6}),this.mtSapDet=new de({color:"#F8FAFC",roughness:.55}),this.mtCadarco=new de({color:"#F1F5F9",roughness:.7}),this.mtFaixa=new de({color:"#CBD5E1",roughness:.5}),this.meia=nt("#F8FAFC",{r:.9});let c=nt("#2A1D16",{r:.45}),h=nt("#D9B44A",{r:.28,m:.7}),f=this.root=new wt,u=this.hips=new wt;f.add(u);let d=this.spine=new wt;d.position.y=.04,u.add(d);let p=this.bS=new Ln;d.add(p);let v=this.bH=new Ln;u.add(v);let g=this.bF=new Ln;u.add(g);let m=this.bB=new Ln;u.add(m),this.troncoM=new is(new _e,this.mtTronco),this.troncoM.frustumCulled=!1,this.troncoM.castShadow=this.troncoM.receiveShadow=!0,d.add(this.troncoM),this.detRoupa=new wt,d.add(this.detRoupa),this.pelveM=At(new _e,this.mtCalca,u,0,0,0),this.cintoM=At(new _e,c,u,0,0,0),this.fivela=ut(u,h,[-.02,-.013,-.004],[.02,.013,.004],.004),this.estampa=Ee(128,128),this.estampaPlano=At(new Ge(.1,.1),new ze({map:this.estampa.t,transparent:!0,alphaTest:.1,toneMapped:!1}),d,-.072,.36,.13,{cast:!1,ry:-.12}),this.temIcone=!1;let b=this.neck=new wt;b.position.y=.52,d.add(b),re(b,a,.052,.058,.12,0,.03,.004,{seg:24});let S=this.head=new wt;S.position.set(0,.045,.014),S.scale.set(...Pu),b.add(S);let x=.2,y=.24;this.hc=x,this.RC=y,this.cabM=At(fd(Mc(new ke(y,72,54),y),y),a,S,0,x,0);for(let I of[-1,1])pe(S,a,.074,I*(y-.006),x-.014,-.014,{s:[.46,1,.78],seg:24,seg2:16}),pe(S,l,.042,I*(y+.018),x-.014,-.004,{s:[.32,.78,.52],seg:16,seg2:12}),At(new Ae(.046,.011,10,24,j*1.3),a,S,I*(y+.02),x-.012,-.008,{ry:I*j/2,rz:-j*.15,s:[1,1.25,1]});pe(S,a,.031,0,x-.042,y-.004,{s:[1.18,.9,.95],seg:24,seg2:16}),this.montarOlhos(S,x,y),this.rosto=Ee(512,384),this.rosto.g.scale(2,2);let M=fd(Mc(new ke(y+.003,56,34,j/2-.9,1.8,.85,1.3),y+.003),y+.003),T=new de({map:this.rosto.t,transparent:!0,alphaTest:.04,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-2});this.rostoM=At(M,T,S,0,x,0,{cast:!1}),this.rostoKey="",this.cortes=[],this.barbas=[],this.montarOculos(S,x,y),this.montarChapeus(S,x,y),this.dedos={L:[],R:[]},this.tubos=[];let _=(I,N,B,k,z,Q={})=>{let H=new is(new _e,N);return H.frustumCulled=!1,H.castShadow=!0,H.receiveShadow=!0,I.add(H),this.tubos.push({m:H,perfil:B,juntaY:k,ossos:z,kz:Q.kz??1,k:Q.k??1,aberto:!!Q.aberto,banda:Q.banda??.055,espelho:!!Q.espelho,vTopo:Q.vTopo??.1,vLen:Q.vLen??.7}),H},E=(I,N)=>{let B=new wt;B.position.set(.19*I,.437,0),d.add(B);let k=new wt;k.position.y=-sa,B.add(k);let z=new Ln,Q=new Ln;B.add(z),k.add(Q);let H=I<0,Z=_(B,a,[[.03,0],[.022,.036],[0,.053],[-.1,.051],[-.2,.047],[-.29,.043],[-.35,.046],[-.47,.038],[-.54,.033],[-.566,0]],-sa,[z,Q],{espelho:H}),q=_(B,this.mtManga,[[.036,0],[.03,.04],[.012,.06],[-.01,.065],[-.06,.064],[-.155,.06],[-.178,.063],[-.19,.062]],-sa,[z,Q],{aberto:!0,espelho:H}),gt=_(B,this.mtManga,[[.036,0],[.03,.04],[.012,.06],[-.01,.065],[-.1,.062],[-.22,.057],[-.29,.055],[-.36,.056],[-.46,.051],[-.505,.052],[-.525,.053],[-.538,.052]],-sa,[z,Q],{aberto:!0,espelho:H}),St=pe(B,a,.052,0,-.004,0,{seg:22,seg2:16}),Y=re(k,this.mtDet,.051,.05,.032,0,-.233,0,{seg:26}),$=new wt;return $.position.y=-.27,$.scale.setScalar(ud),k.add($),this.dedos[N]=t_($,I,a,l),{sh:B,el:k,hand:$,lado:I,pele:Z,ombroPele:St,mangaC:q,mangaL:gt,punho:Y,qFK:new we,qIK:new we}};this.L=E(-1,"L"),this.R=E(1,"R"),this.curL={c:[.5,.42,.34,.26,.25],s:.05},this.curR={c:[.5,.42,.34,.26,.25],s:.05};let A=I=>{let N=new wt;N.position.set(.094*I,-.01,0),u.add(N);let B=new wt;B.position.y=-.42,N.add(B);let k=new wt;k.position.y=-.4,B.add(k);let z=new Ln,Q=new Ln;N.add(z),B.add(Q);let H={aberto:!0,kz:1.04,espelho:I<0,vTopo:.06,vLen:.84},Z=_(N,a,[[-.08,0],[-.1,.07],[-.2,.067],[-.3,.06],[-.42,.051],[-.52,.053],[-.62,.047],[-.76,.037],[-.8,0]],-.42,[z,Q],{espelho:I<0,vTopo:.06,vLen:.84}),q=_(N,this.mtCalca,[[.03,0],[.018,.054],[-.01,.078],[-.06,.084],[-.2,.081],[-.34,.069],[-.42,.065],[-.5,.067],[-.62,.061],[-.72,.057],[-.755,.059],[-.778,.059]],-.42,[z,Q],H),gt=_(N,this.mtCalca,[[.03,0],[.018,.054],[-.01,.078],[-.06,.085],[-.2,.083],[-.34,.071],[-.42,.067],[-.5,.068],[-.64,.059],[-.7,.052],[-.722,.044],[-.738,.046],[-.762,.046],[-.772,.045]],-.42,[z,Q],H),St=_(N,this.mtCalca,[[.03,0],[.018,.054],[-.01,.079],[-.06,.086],[-.3,.079],[-.43,.073],[-.448,.075],[-.46,.074]],-.42,[z,Q],H),Y=_(N,this.mtCalca,[[.03,0],[.018,.054],[-.01,.08],[-.06,.088],[-.165,.09],[-.18,.091]],-.42,[z,Q],H),$=re(k,this.meia,.04,.043,.07,0,.012,0,{seg:18}),dt=new wt;return k.add(dt),{hp:N,kn:B,ft:k,o0:z,o1:Q,pe:dt,peleP:Z,calcaL:q,jogger:gt,bermudaM:St,shortsM:Y,meiaM:$}};this.PL=A(-1),this.PR=A(1);let C=Ee(64,64),F=C.g.createRadialGradient(32,32,0,32,32,32);F.addColorStop(0,"rgba(0,0,0,.45)"),F.addColorStop(1,"rgba(0,0,0,0)"),C.g.fillStyle=F,C.g.fillRect(0,0,64,64),this.blob=new be(new Ge(.7,.7),new ze({map:C.t,transparent:!0,depthWrite:!1})),this.blob.rotation.x=-j/2,this.blob.position.y=.004,this.mL=new U,this.mR=new U,this.gp=new U(0,-.06,0),this.pDy=0,this.pNod=0,this.pT=null,this.pYaw=null,this.esc=1,this.barra={x:0,vx:0,z:0,vz:0,ant:null,vel:new U},f.updateMatrixWorld(!0);for(let I of this.tubos)I.m.geometry=this.geoTubo(I,1),I.esq=new Ts(I.ossos),I.m.bind(I.esq,I.m.matrixWorld);this.esqTronco=new Ts([p,v,g,m]),this.troncoM.bind(this.esqTronco,this.troncoM.matrixWorld),this.bindTronco=this.troncoM.matrixWorld.clone(),this.esqSaia=new Ts([v,this.PL.o0,this.PR.o0]),this.bindQuadril=u.matrixWorld.clone(),Cn(f,!0,!1),this.setIcone(e),this.setAparencia(n,i)}montarCorpo(){let t=this.ap,e=Ii[t.r]||Ii[0],n=cd[t.w],i=a_[t.w],r=t.e===2||!!e.vestido,o=[t.r,t.w,t.e,t.j].join(",");if(o===this.corpoChave)return;this.corpoChave=o;let a=!!e.enf||r,l=this.corpo=Jv({g:n,bar:i,folga:e.folga||0,flare:e.flare||0,ini:a?.03:e.ini??-.135}),c=this.troncoM.geometry;if(this.troncoM.geometry=$v(l),c.dispose(),this.troncoM.material=this.mtTronco,e.manga==="R"){let f=this.troncoM.geometry,u=f.attributes.position,d=f.index.array,p=[],v=[],g=(m,b,S)=>{if(b<.33)return!1;let[x]=wu(b),y=Math.abs(m)/(x*n),M=.6-.05*Ht((b-.47)/.06);return y>M+.18*(1-Ht((b-.33)/.12))||b>.49&&Math.abs(m)<.07*n&&S>0};for(let m=0;m<d.length;m+=3){let b=0;for(let S=0;S<3;S++){let x=d[m+S];g(u.getX(x),u.getY(x),u.getZ(x))&&b++}(b>=2?v:p).push(d[m],d[m+1],d[m+2])}f.setIndex(p.concat(v)),f.clearGroups(),f.addGroup(0,p.length,0),f.addGroup(p.length,v.length,1),this.troncoM.material=[this.mtTronco,this.pele]}let h=new Sr([[0,-.1],[.06,-.094],[.105,-.074],[.136,-.035],[.145,.01],[.145,.05],[.14,.09],[0,.094]].map(([f,u])=>new vt(f,u)),40);if(h.scale(1*n,1,.7*n),this.pelveM.geometry.dispose(),this.pelveM.geometry=h,this.cintoM.geometry.dispose(),this.cintoM.geometry=new ri(.168,.168,.026,40,1,!0).scale(1*n,1,.74*n),this.cintoM.position.y=.068,this.cintoM.visible=this.fivela.visible=a&&!r,this.fivela.position.set(0,.068,.168*.74*n+.004),this.pelveM.visible=!r,this.L.sh.position.x=-.188*n*.98,this.R.sh.position.x=.188*n*.98,this.PL.hp.position.x=-.09*(1+(n-1)*.5),this.PR.hp.position.x=.09*(1+(n-1)*.5),this.gTubos!==n){this.gTubos=n;for(let f of this.tubos){let u=f.m.geometry;f.m.geometry=this.geoTubo(f,n),u&&u.dispose()}}this.estampaPlano.position.set(-.072*n,.355,l.frente(-.072*n,.355,.006)),this.estampaPlano.rotation.y=-.16,this.montarRoupa(e,l,n),this.montarSaia(r,n,i)}montarRoupa(t,e,n){for(let x of[...this.detRoupa.children])this.detRoupa.remove(x),x.geometry.dispose();let i=new Map,r=(x,y)=>{i.has(x)||i.set(x,[]),i.get(x).push(y)},o=(x,y,M)=>e.frente(x,y,M),a=(x,y,M,T=6,_=12)=>{let E=[],A=[];for(let H=0;H<=_;H++)for(let Z=0;Z<=T;Z++){let[q,gt]=y(Z/T,H/_);E.push(q,gt,o(q,gt,M+.002+.05*Math.max(0,gt-.42)))}let[C,F]=y(0,0),[I,N]=y(1,0),[B,k]=y(0,1),z=(I-C)*(k-F)-(N-F)*(B-C)<0;for(let H=0;H<_;H++)for(let Z=0;Z<T;Z++){let q=H*(T+1)+Z,gt=q+T+1;z?A.push(q,gt,q+1,q+1,gt,gt+1):A.push(q,q+1,gt,q+1,gt+1,gt)}let Q=new _e;return Q.setAttribute("position",new qt(E,3)),Q.setIndex(A),Q.computeVertexNormals(),r(x,Q),Q},l=(x,y,M)=>(T,_)=>{let E=lt(x,y,_);return[(T*2-1)*M(_),E]},c=(x,y,M,T=.0068)=>{let _=new ke(T,10,8);_.scale(1,1,.5),_.translate(y,M,o(y,M,.005)),r(x,_)},h=(x,y,M,T,_,E,A,C,F)=>a(x,(I,N)=>{let B=lt(_,E,N),k=lt(A,C,N)*(N>.86?1-(N-.86)*2.4:1);return[y*(B+I*k),lt(M,T,N)]},F,4,14),f=(x,y,M,T)=>{let E=[],A=[];for(let[F,I]of[[0,y],[1,y],[2,M],[3,M]])for(let N=0;N<=64;N++){let B=-j/2+N/64*Vt,[k,z]=e.ponto(I,B),Q=F===0||F===3?T*.3:T,H=Math.hypot(k,z)||1;E.push(k+k/H*Q,I+(F===1?.003:F===2?-.003:0),z+z/H*Q)}for(let F=0;F<3;F++)for(let I=0;I<64;I++){let N=F*65+I,B=N+64+1;A.push(N,N+1,B,N+1,B+1,B)}let C=new _e;C.setAttribute("position",new qt(E,3)),C.setIndex(A),C.computeVertexNormals(),Au(C,yt(0,0,1)),r(x,C)},u=(x,y,M,T=.074,_=.066,E=0,A=Vt,C=0)=>{let F=new Ae(1,M,10,40,A);F.rotateZ(C),F.rotateX(j/2),F.scale(T*n,1,_*n),F.rotateX(E),F.translate(0,y,.004),r(x,F)},d=(x,y,M,T,_=.08,E=.62,A=.55)=>{let C=new Zn(_,.01,.07,2,.004);C.rotateZ(-y*A),C.rotateX(E),C.translate(y*.043*n,M,T*n),r(x,C)},p=nt("#9CA3AF",{r:.3,m:.8}),v=nt("#E8EDF5",{r:.4}),g=nt("#1F2937",{r:.35}),m=t.gola,b=e.ini;if(t.barraR&&f(this.mtDet,b+.004,b+.045,.006),m==="polo"){for(let x of[-1,1])d(this.mtDet,x,.523,.072);u(this.mtDet,.536,.22),a(this.mtDet,l(.43,.515,()=>.012),.002,2,6);for(let x of[.49,.455])c(v,0,x,.0072)}else if(m==="redonda")u(this.mtDet,.538,.16,.076,.068,-.12);else if(m==="capuz"){let x=new Ae(.09,.036,12,30,j*1.25);x.rotateZ(-j*.125+j),x.rotateX(j/2-.25),x.scale(n,1,n),x.translate(0,.53,-.03),r(this.mtTronco,x);let y=new ke(.105,22,14);y.scale(1.05*n,.62,.55*n),y.translate(0,.5,-.1*n),r(this.mtTronco,y);for(let M of[-1,1]){let T=new As(.0055,.09,4,8);T.rotateX(.1),T.translate(M*.032,.45,o(M*.032,.45,.008)),r(nt("#F1F5F9",{r:.6}),T)}}else if(m==="social"||m==="camisa"){let x=m==="social"?this.branco:this.mtDet;for(let y of[-1,1]){let M=new _e,T=[[0,0],[.058,.004],[.034,-.05]],_=new Ti;_.moveTo(0,0),_.lineTo(.058,.006),_.quadraticCurveTo(.05,-.03,.03,-.052),_.closePath();let E=new Is(_,{depth:.004,bevelEnabled:!0,bevelSize:.003,bevelThickness:.002,bevelSegments:2});y<0&&E.scale(-1,1,1),E.rotateY(y*.55),E.rotateX(-.42),E.translate(y*.012*n,.548,o(y*.04,.53,.012)),r(x,E)}if(u(x,.548,.2,.072,.064),t.botoes){a(x,l(-.12,.5,()=>.012),.002,2,18);for(let y of[.47,.38,.29,.2,.11,.02].filter(M=>M>b+.04))c(m==="social"?nt("#CBD5E1",{r:.4}):v,0,y,.0062)}if(t.gravata){a(this.mtGravata,l(.2,.505,M=>M<.1?lt(.002,.03,M/.1):lt(.03,.014,(M-.1)/.9)),.008);let y=new ke(.022,14,10);y.scale(1,.95,.6),y.translate(0,.512,o(0,.512,.012)),r(this.mtGravata,y)}if(t.bolso==="peito")for(let y of[-1,1])a(this.mtDet,(M,T)=>[y*lt(.055,.12,M),lt(.28,.36,T)],.004,4,4),a(this.mtDet,(M,T)=>[y*lt(.052,.123,M),lt(.355,.375,T)],.008,4,2),c(g,y*.087,.365,.006)}else if(m==="jaqueta"){a(this.branco,l(b+.01,.52,x=>lt(.062,.05,x)),.002);for(let x of[-1,1])a(p,(y,M)=>[x*(.064+y*.008),lt(b+.02,.5,M)],.006,1,14);u(this.mtDet,.528,.34,.082,.072,-.15,j*1.5,j*.75)}else if(m==="regata")u(this.mtDet,.534,.12,.08,.07,-.25);else if(m==="terno"||m==="blazer"){let x=m==="terno";if(a(this.branco,l(x?.27:b+.04,.54,M=>lt(x?.012:.03,.082,M)),.003),x){a(this.mtGravata,l(.225,.495,M=>M<.1?lt(.002,.026,M/.1):lt(.026,.013,(M-.1)/.9)),.007),a(this.mtGravata,l(.49,.524,M=>lt(.013,.019,M)),.0095,4,3);for(let M of[-1,1])d(this.branco,M,.532,.07,.07,.75,.75)}else u(this.branco,.53,.14,.07,.062,-.12);let y=x?this.mtLapela:this.mtDet;for(let M of[-1,1])h(y,M,x?.255:.16,.535,.002,.072,.03,.052,.01);for(let M of x?[.22,.14]:[.13])c(g,x?0:.02,M,.0078);a(y,(M,T)=>[-.118+M*.065,lt(.35,.356,T)],.006,3,1),x&&a(this.mtGravata,(M,T)=>[-.11+M*.05,lt(.353,.385,T)-(M>.5?0:.008*T)],.0085,4,4);for(let M of[-1,1])a(y,(T,_)=>[M*lt(.07,.135,T),lt(.06,.068,_)],.006,3,1)}else if(m==="aberta"){a(this.pele,l(.42,.54,x=>lt(.004,.052,x)),.003);for(let x of[-1,1])h(this.mtTronco,x,.39,.54,.004,.054,.03,.048,.007)}else if(m==="alta"){let x=new ri(.068,.074,.055,32,1,!0);x.scale(n,1,.92*n),x.translate(0,.565,.006),r(this.mtDet,x);let y=new Ae(.068,.006,6,32);y.rotateX(j/2),y.scale(n,1,.92*n),y.translate(0,.592,.006),r(this.mtDet,y)}else if(m==="colete"){a(this.branco,l(.33,.54,x=>lt(.004,.07,x)),.003);for(let x of[-1,1])d(this.branco,x,.53,.07,.075,.68,.62),h(this.mtDet,x,.315,.54,0,.068,.014,.014,.006);u(this.branco,.546,.18,.07,.062)}else if(m==="v"){a(this.pele,l(.44,.54,x=>lt(.004,.05,x)),.003);for(let x of[-1,1])h(this.mtDet,x,.43,.54,0,.05,.016,.016,.006);u(this.mtDet,.54,.14,.072,.064,0,j*1.3,j*.85)}if(t.ziper){a(p,l(b+.01,.58,()=>.006),.006,1,16);let x=new Zn(.014,.03,.006,2,.002);x.translate(0,.5,o(0,.5,.012)),r(p,x)}t.bolso==="canguru"&&a(this.mtTronco,(x,y)=>{let M=lt(b+.06,b+.2,y),T=lt(.12,.085,y);return[(x*2-1)*T,M]},.006,8,8);let S=this.ap.j;if(S===2||S===4){let x=new Ae(1,.06,6,40,j);x.rotateZ(j),x.rotateX(j/2-.55),x.scale(.082*n,1,.075*n),x.translate(0,.53,.012),r(nt("#E5C158",{r:.25,m:.9}),x);let y=new ke(.011,10,8);y.translate(0,.47,o(0,.47,.01)),r(nt("#E5C158",{r:.25,m:.9}),y)}if(S===5){let x=nt("#EA580C",{r:.7}),y=new Zn(.24,.27,.11,3,.04);y.translate(0,.27,-.12*n-.055),r(x,y);let M=new Zn(.17,.1,.04,3,.02);M.translate(0,.2,-.12*n-.12),r(x,M);for(let T of[-1,1]){let _=new Ae(.1,.012,6,20,j*1.1);_.rotateY(j/2),_.scale(1,1.25,n),_.translate(T*.1*n,.42,-.005),r(nt("#7C2D12",{r:.7}),_)}}for(let[x,y]of i){let M=Tu(y.map(_=>(_.attributes.uv&&_.deleteAttribute("uv"),_)));M.computeVertexNormals(),Kv(M);let T=new is(M,x);T.frustumCulled=!1,T.castShadow=!0,T.receiveShadow=!0,this.detRoupa.add(T),T.bind(this.esqTronco,this.bindTronco)}}montarSaia(t,e,n){if(this.saiaM&&(this.hips.remove(this.saiaM),this.saiaM.geometry.dispose(),this.saiaM=null),!t)return;let i=48,r=18,o=[],a=[],l=[],c=[];for(let d=0;d<=r;d++){let p=d/r,v=lt(.11,-.33,p),g=(.166+.06*p*p+.035*p)*e,m=(.124+.04*p+n*.4*(1-p))*e;for(let b=0;b<=i;b++){let S=-j/2+b/i*Vt,x=g*Math.cos(S),y=m*Math.sin(S)+.004;o.push(x*(1+.012*Math.sin(S*9)*p),v,y*(1+.012*Math.sin(S*9)*p));let M=Ht((.06-v)/.32),T=Ht(.5-x/(.12*e));l.push(0,1,2,0),c.push(1-M,M*T,M*(1-T),0)}}for(let d=0;d<r;d++)for(let p=0;p<i;p++){let v=d*(i+1)+p,g=v+i+1;a.push(v,v+1,g,v+1,g+1,g)}let h=new _e;h.setAttribute("position",new qt(o,3)),h.setIndex(a),h.setAttribute("skinIndex",new Gi(l,4)),h.setAttribute("skinWeight",new qt(c,4)),h.computeVertexNormals(),Au(h,yt(0,0,1));let f=Ii[this.ap.r]||Ii[0],u=this.saiaM=new is(h,f.vestido?this.mtTronco:this.mtCalca);u.material.side=Wn,u.frustumCulled=!1,u.castShadow=!0,this.hips.add(u),u.bind(this.esqSaia,this.bindQuadril)}montarCalcados(t){if(this.tipoPe===t)return;this.tipoPe=t;let e={cor:this.mtSap,sola:this.mtSola,det:this.mtSapDet,cadarco:this.mtCadarco,faixa:t===2||t===3?null:this.mtFaixa};for(let n of[this.PL,this.PR]){for(let r of[...n.pe.children])n.pe.remove(r),r.traverse(o=>o.geometry&&o.geometry.dispose());let i=e_(t,e);Cn(i,!0,!1),n.pe.add(i)}}montarCorte(t){if(this.cortes[t])return this.cortes[t];let e=this.RC,n=this.hc,i=this.head,r=new wt;r.position.y=n,i.add(r);let o=x=>{let y=Math.cos(x);return(y>0?lt(1.32,.98,Math.pow(y,1.4)):lt(1.32,1.95,Math.pow(-y,.9)))+.2*Math.exp(-(((Math.abs(x)-1.22)/.1)**2))},a=(x=0,y=.08,M)=>T=>{let[_,E]=ln(T);return Ht((o(E)+x+(M?M(_,E):0)-_)/y)},l=(x,y)=>Mc(x,y),c=[],h=[],f=(x,y=this.cab,M=c)=>{let T=At(id(e,{forma:l,...x}),y,r,0,0,0);return T.castShadow=!0,M.push(T),T},u=(x,y=h,M=r)=>{if(!x.length)return null;let T=At(Tu(x),this.cab,M,0,0,0);return T.castShadow=!0,y.push(T),T},d=(x,y,M=0)=>Ke(x,y).multiplyScalar(e+M),p=x=>x.clone().setY(0).normalize(),v=(x,y={})=>{let M=[],T=y.n||16,_=y.a0??.95,E=y.larg??.062;for(let A=0;A<T;A++){let C=A/(T-1),F=(_+C*(Vt-2*_))*(A%2,1)+(Jn(A+3)-.5)*.08,I=F>j?F-Vt:F,N=Math.abs(Math.sin(I)),B=x*(y.curtoFrente?lt(1,.75,Math.max(0,Math.cos(I))):1)*(.92+.12*Jn(A)),k=d(y.th0??1.02,I,-.004),z=d(1.62,I,.04+.02*N),Q=p(z),H=y.onda||0,Z=[k,z,z.clone().add(yt(0,-B*.35,0)).addScaledVector(Q,.012+H*Math.sin(A)),z.clone().add(yt(0,-B*.7,0)).addScaledVector(Q,.02-H*.6),z.clone().add(yt(0,-B,0)).addScaledVector(Q,(y.cacho??-.012)+H*.8*Math.cos(A))];M.push(xu(Z,q=>E*(1-.35*q)*(y.volume||1),{ach:.42,ref:q=>p(q),sulcos:3,cor:.94+.08*Jn(A*2)}))}return M},g=()=>f({h:()=>.01,mascara:a(),polo:Ke(.3,j),sulcos:30},this.cab,[]),m=null,b=null;switch(t){case 0:{f({h:x=>{let[y,M]=ln(x),T=Math.max(0,Math.cos(M));return .016+.012*_t(1-y/1.3)+.085*Math.exp(-(((y-.62)/.42)**2))*Math.pow(T,1.2)},mascara:a(.02),polo:Ke(1.2,0),sulcos:22,prof:.34});break}case 1:f({h:x=>{let[y,M]=ln(x);return .02+.02*_t(1-y/1.25)+.008*Math.max(0,Math.cos(M))},mascara:a(.05,.07),polo:Ke(.35,j),sulcos:28,prof:.3,onda:(x,y)=>.4*Math.sin(y*4)});break;case 2:f({h:()=>.0045,mascara:a(.02,.05)},this.cabRaspado);break;case 3:{f({h:x=>{let[y,M]=ln(x);return .026+.012*_t(1-y)+.025*Math.exp(-(((y-.75)/.35)**2))*_t(.5-.5*Math.sin(M))},mascara:a(.06,.08,(x,y)=>Math.max(0,Math.cos(y+.4))**3*.12),polo:Ke(.25,.6),sulcos:30,prof:.28}),b=u(v(.4,{n:18,larg:.066,a0:1.25}));break}case 4:f({h:()=>.03,mascara:a(.04),relevo:sd(130,.15,.03,1),relevoMax:.03});break;case 5:{let x=yt(0,.07,-.035),y=yt(.37,.33,.35);f({h:T=>{let _=(T.x/y.x)**2+(T.y/y.y)**2+(T.z/y.z)**2,E=2*(T.x*-x.x/y.x**2+T.y*-x.y/y.y**2+T.z*-x.z/y.z**2),A=(x.x/y.x)**2+(x.y/y.y)**2+(x.z/y.z)**2-1,C=(-E+Math.sqrt(Math.max(0,E*E-4*_*A)))/(2*_);return Math.max(.03,C-e)},mascara:a(.04,.06),relevo:sd(220,.1,.022,2),relevoMax:.022,an:90});break}case 6:{f({h:T=>{let[_]=ln(T);return .014+.008*_t(1-_)},mascara:a(.02),polo:Ke(1.05,0),sulcos:34,prof:.25});let x=new ke(.105,32,24),y=x.attributes.position,M=new U;for(let T=0;T<y.count;T++){M.fromBufferAttribute(y,T);let _=M.clone().normalize(),E=Math.pow(.5+.5*Math.cos(Math.atan2(_.x,_.z)*6+_.y*7),5);M.copy(_.multiplyScalar(.105*(1-.1*E))),y.setXYZ(T,M.x,M.y,M.z)}x.computeVertexNormals(),x.translate(0,.27,-.12),u([bd(x,.95)],c),At(new Ae(.068,.014,8,24),nt("#111827",{r:.5}),r,0,.2,-.1,{rx:j/2+.6});break}case 7:{f({h:()=>.0045,mascara:a(.02,.05)},this.cabRaspado),f({h:x=>{let[y]=ln(x);return .006+.1*Math.exp(-((x.x/.14)**2))*(.6+.4*Math.sin(_t(y/1.9)*j))},mascara:x=>a(.02)(x)*Ht((.22-Math.abs(x.x))/.05),polo:Ke(1,0),sulcos:10,prof:.4,agudo:3});break}case 8:{f({h:M=>{let[T]=ln(M);return .016+.008*_t(1-T)},mascara:a(.02),polo:Ke(1.05,0),sulcos:34,prof:.25});let x=d(1.32,j,.03),y=new wt;y.position.copy(x),r.add(y),At(new Ae(.036,.013,8,18),nt("#E11D48",{r:.5}),y,0,0,0,{rx:.25}),u([xu([yt(0,0,0),yt(0,.01,-.07),yt(0,-.12,-.11),yt(0,-.3,-.075),yt(0,-.44,-.04)],M=>.05*(1+.35*Math.sin(j*M*.9))*(1-.55*M),{ach:.8,ref:yt(0,0,-1),sulcos:5,seg:40})],h,y),this.molas.rabo={g:y,a:0,v:0,b:0,vb:0};break}case 9:break;case 10:f({h:x=>{let[y,M]=ln(x);return .022+.04*Math.exp(-(((y-.6)/.45)**2))*_t(.6+.6*Math.cos(M+.5))+.01*_t(1-y/1.2)},mascara:a(.03),polo:Ke(.72,1.05),sulcos:26,prof:.34,onda:(x,y)=>.5*Math.sin(y*3.5)});break;case 11:f({h:x=>{let[y]=ln(x);return .026+.01*_t(1-y)},mascara:a(0,.05,(x,y)=>Math.max(0,Math.cos(y))**2*(.23+.025*Math.sin(y*26))),polo:Ke(.3,j),sulcos:34,prof:.3});break;case 12:{f({h:x=>{let[y]=ln(x);return .03+.015*_t(1-y)},mascara:a(.04),polo:Ke(.12,0),sulcos:28,prof:.3,onda:(x,y)=>.9*Math.sin(y*6)}),b=u(v(.32,{n:18,larg:.07,onda:.022,volume:1.12,cacho:.01,a0:1.15}));break}case 13:{f({h:()=>.02,mascara:a(.02),polo:Ke(.4,j),sulcos:26});let x=[];for(let y=0;y<22;y++){let M=.12+Jn(y)*.95,T=(Jn(y+9)-.5)*2*(M<.5?j:1.6),_=d(M,T,.005),E=Ke(M,T),A=_.clone().addScaledVector(E,.05+Jn(y+4)*.025).add(yt(0,.018,-.012));x.push(xu([_,_.clone().lerp(A,.55).addScaledVector(E,.008),A],C=>.05*(1-.7*C),{ach:.6,sulcos:2,ref:E}))}u(x,c);break}case 14:f({h:()=>.0045,mascara:a(.02,.05)},this.cabRaspado),f({h:x=>{let[y]=ln(x);return .03+.03*_t(1-y/1)},mascara:x=>{let[y,M]=ln(x);return a(.02)(x)*Ht((.62-Math.abs(Math.sin(M))*Math.sin(y))/.05)*Ht((1.55-y)/.08)},polo:Ke(1.1,0),sulcos:20,prof:.34});break;case 15:{f({h:y=>{let[M]=ln(y);return .018+.008*_t(1-M)},mascara:a(.02),polo:Ke(.1,0),sulcos:36,prof:.26});let x=[];for(let y of[-1,1]){let M=d(1.55,y*2.2,.02);x.push(Qv([M,M.clone().add(yt(y*.02,-.12,.02)),M.clone().add(yt(y*.03,-.28,.05)),M.clone().add(yt(y*.02,-.44,.06))],.034,.024,12));let T=M.clone().add(yt(y*.02,-.46,.06));At(new Ae(.018,.008,6,14),nt("#F59E0B",{r:.5}),r,T.x,T.y+.02,T.z,{rx:j/2})}b=u(x);break}case 16:{f({h:x=>{let[y]=ln(x);return .03+.012*_t(1-y)},mascara:a(.02,.05,(x,y)=>Math.max(0,Math.cos(y))**2*.2),polo:Ke(.25,j),sulcos:34,prof:.28}),b=u(v(.2,{n:20,larg:.064,cacho:-.03,a0:1.05,volume:1.05}));break}}t!==9&&t!==2&&t!==7&&t!==14?m=g():(t===7||t===14)&&(m=f({h:()=>.0045,mascara:a(.02,.05)},this.cabRaspado,[])),m&&(m.visible=!1);let S=this.cortes[t]={g:r,topo:c,resto:h,sob:m,solto:b};return b&&!this.molas.solto&&(this.molas.solto={a:0,v:0,b:0,vb:0}),r.visible=!1,S}montarBarba(t){if(this.barbas[t]!==void 0)return this.barbas[t];if(!t)return this.barbas[t]=null,null;let e=this.RC,n=new wt;n.position.y=this.hc,this.head.add(n);let i=Ed,r=(h,f)=>Mc(h,f),o=(h,f=.14)=>1-Math.exp(-((Math.acos(_t(h.dot(i),-1,1))/f)**4)),a=h=>{let[f,u]=ln(h),d=lt(2.02,1.6,Math.pow(_t(Math.abs(u)/1.35),1.1));return Ht((f-d)/.07)*Ht((1.5-Math.abs(u))/.12)*Ht((2.8-f)/.2)},l=h=>{let[f,u]=ln(h);return Ht((.07-Math.abs(f-1.84))/.03)*Ht((.42-Math.abs(u))/.08)},c=h=>{let f=At(id(e,{forma:r,polo:Ke(.05,0),sulcos:60,prof:.3,base:-.002,...h}),this.barbaMat,n);return f.castShadow=!0,f};return t===1&&c({h:()=>.014,mascara:h=>Math.max(Ht((.3-Math.acos(_t(h.dot(Ke(2.25,0)),-1,1)))/.06)*o(h,.12),l(h))}),t===2&&c({h:h=>.014+.012*Ht((ln(h)[0]-1.9)/.5),mascara:h=>Math.max(a(h)*o(h),l(h))}),t===3&&c({h:()=>.018,mascara:l}),t===4&&c({h:()=>.0035,mascara:h=>Math.max(a(h)*o(h,.11),l(h)*.8),sulcos:0}),t===5&&c({h:h=>{let[f,u]=ln(h);return .02+.06*Ht((f-1.95)/.5)*Math.pow(Math.max(0,Math.cos(u)),1.5)},mascara:h=>Math.max(a(h)*o(h,.13),l(h)),thMax:2.9}),n.visible=!1,this.barbas[t]=n,n}montarOculos(t,e,n){this.lente=new wn({color:"#DCEBFF",roughness:.05,metalness:.1,transparent:!0,opacity:.14,clearcoat:1}),this.oculosG=[];let i=[nt("#1F2937",{r:.35,m:.3}),nt("#DC2626",{r:.35,m:.1})];for(let r of[1,2]){let o=new wt,a=i[r-1],l=.1,c=e+.005,h=n+.052;for(let f of[-1,1]){let u;if(r===1)u=new ss(0,0,.058,.055,0,Vt);else{let g=new Ti;n_(g,-.066,-.046,.132,.092,.022),u=g}let d=u.getPoints(48).map(g=>yt(g.x,g.y,0)),p=new Er(new rs(d,!0),64,.0075,8,!0);At(p,a,o,f*l,c,h,{ry:f*.18});let v=r===1?new Rs(.056,28):new Mo(u);At(v,this.lente,o,f*l,c,h-.002,{ry:f*.18,cast:!1}).name="lente",ut(o,a,[-.006,-.008,-.2],[.006,.008,0],.003).position.set(f*(n+.016),c+.012,h-.13),ut(o,a,[-.05,-.007,-.006],[.05,.007,.006],.003).position.set(f*(l+.105),c+.012,h-.02)}re(o,a,.006,.006,.07,0,c+.01,h+.006,{rz:j/2}),o.visible=!1,t.add(o),this.oculosG.push(o)}}montarChapeus(t,e,n){let i=this.chapeus={},r=new wt,o=nt("#2563EB",{r:.7});At(new ke(n+.04,40,18,0,Vt,0,1.3),o,r,0,e+.01,-.01,{rx:-.18}),ut(r,o,[-.15,-.01,0],[.15,.01,.2],.01,{rx:.18}).position.set(0,e+.12,.2),pe(r,nt("#1E3A8A"),.025,0,e+n+.035,-.02,{seg:10,seg2:8}),i.a_bone=r,r=new wt;let a=nt("#111827",{r:.6});re(r,a,n+.035,n+.035,.12,0,e+.16,0,{seg:36}),ut(r,a,[-.34,-.012,-.34],[.34,.012,.34],.01,{ry:j/4}).position.set(0,e+.23,0),re(r,nt("#F5B400",{r:.4}),.008,.008,.2,.2,e+.13,.12,{rz:.1}),i.a_formatura=r,r=new wt;let l=nt("#F5B400",{r:.25,m:.85});re(r,l,n*.82,n*.86,.1,0,e+.22,0,{seg:36});for(let g=0;g<6;g++){let m=g/6*Vt;At(new Ei(.04,.11,10),l,r,Math.sin(m)*n*.8,e+.31,Math.cos(m)*n*.8),pe(r,nt(g%2?"#DC2626":"#2563EB",{r:.2,m:.3}),.024,Math.sin(m)*n*.86,e+.22,Math.cos(m)*n*.86,{seg:10,seg2:8})}i.a_cartola=r;let c=this.acCabeca={};r=new wt;let h=nt("#2563EB",{r:.4}),f=nt("#E2E8F0",{r:.5});At(new Ae(n+.06,.018,10,40,j*1.05),h,r,0,e+0,-.01,{rz:-j*.025,s:[1,1.08,1]});for(let g of[-1,1])re(r,h,.072,.072,.05,g*(n+.04),e-.01,-.005,{rz:j/2,seg:28}),re(r,f,.058,.058,.012,g*(n+.068),e-.01,-.005,{rz:j/2,seg:28});c[1]=r,r=new wt;let u=nt("#DC2626",{r:.95});u.normalMap=Pc("trico-gorro",128,128,(g,m,b)=>Ic(g,m,b,"trico"),3),u.normalMap.channel=0,u.normalMap.repeat.set(4,2),At(new ke(n+.045,40,20,0,Vt,0,1.45),u,r,0,e+.015,-.01,{rx:-.12,s:[1,1.12,1]}),At(new Ae(n+.03,.032,10,40),u,r,0,e+.035,-.01,{rx:j/2-.12}),pe(r,nt("#F8FAFC",{r:1}),.055,0,e+n+.08,-.03,{seg:14,seg2:12}),c[2]=r,r=new wt,At(new Ae(n+.03,.02,10,44),nt("#EC4899",{r:.7}),r,0,e+.075,-.02,{rx:j/2-.4,s:[1,1,1.05]}),c[3]=r,r=new wt;let d=nt("#EF4444",{r:.5});for(let g of[-1,1])pe(r,d,.05,g*.05,0,0,{s:[1,.7,.35],seg:16,seg2:10});pe(r,d,.022,0,0,.004,{seg:12,seg2:8}),r.position.set(.13,e+.2,.06),r.rotation.set(.2,.5,-.4);let p=new wt;p.add(r),c[4]=p,r=new wt;let v=nt("#16A34A",{r:.7});At(new ke(n+.04,40,18,0,Vt,0,1.02),v,r,0,e+.035,-.01,{rx:.34}),ut(r,v,[-.13,-.01,-.19],[.13,.01,0],.01,{rx:-.25}).position.set(0,e+.15,-.21),c[5]=r;for(let g of[...Object.values(i),...Object.values(c)])g.visible=!1,Cn(g,!0,!1),t.add(g);this.brincos=new wt;for(let g of[-1,1])pe(this.brincos,nt("#F5C542",{r:.2,m:.9}),.014,g*(n+.018),e-.085,0,{seg:12,seg2:10});this.brincos.visible=!1,t.add(this.brincos)}montarOlhos(t,e,n){let o=e+.004,a=new wn({color:"#FBFAF7",roughness:.18,clearcoat:1,clearcoatRoughness:.08}),l=this.irisMat=new wn({color:"#3A2214",roughness:.25,clearcoat:1,clearcoatRoughness:.05}),c=new wn({color:"#070403",roughness:.2,clearcoat:1,clearcoatRoughness:.05}),h=new ze({color:"#FFFFFF",toneMapped:!1}),f=this.cilioMat=new de({color:"#24140C",roughness:.6}),u=this.sobMat=new de({color:"#2A1A10",roughness:.75}),d=(p,v)=>{let g=new ke(p,28,10,0,Vt,0,v);return g.rotateX(j/2),g};this.olhos3d=[];for(let p of[-1,1]){let v=new wt,g=Math.sin(.39)*n*p,m=Math.cos(.39)*n;v.position.set(g*.94,o,m-.044*.52),v.rotation.set(0,p*.39*.8,0),t.add(v);let b=new wt;v.add(b),At(new ke(.044,28,20),a,b,0,0,0,{cast:!1}),At(d(.044*1.004,.84),l,b,0,0,0,{cast:!1}),At(d(.044*1.008,.44),c,b,0,0,0,{cast:!1});let S=pe(v,h,.044*.17,-.044*.26,.044*.3,.044*.94,{seg:10,seg2:8,cast:!1}),x=pe(v,h,.044*.075,.044*.27,-.044*.24,.044*.97,{seg:8,seg2:6,cast:!1}),y=I=>{let N=new wt;v.add(N);let B=new ke(.044*1.07,28,12,0,Vt,I?0:j/2,j/2);At(B,this.pele,N,0,0,0,{cast:!1});let k=At(new Ae(.044*1.075,I?.044*.085:.044*.045,8,28,j),I?f:this.peleSom,N,0,0,0,{cast:!1});return k.rotation.x=j/2,N},M=y(!0),T=y(!1),_=new wt,E=Math.sin(.39*.95)*n*p;_.position.set(E,e+.066,Math.cos(.39*.95)*n*.985),_.rotation.set(-.25,p*.39*.85,0),t.add(_);let A=new As(.0135,.064,6,14);A.rotateZ(j/2);let C=A.attributes.position;for(let I=0;I<C.count;I++){let N=C.getX(I),B=N/.045,k=_t(.5+.5*B*p),z=lt(1.12,.62,k);C.setY(I,C.getY(I)*z+.011*(1-B*B)-.006*k*k),C.setZ(I,C.getZ(I)*.55*z-.75*N*N)}A.computeVertexNormals();let F=At(A,u,_,0,0,.004,{cast:!1});this.olhos3d.push({s:p,base:v,globo:b,sup:M,inf:T,sg:_,sm:F,b1:S,b2:x,y0:_.position.y})}}posarOlhos(t,e,n){if(!this.olhos3d)return;let i=1-_t(e,0,1),r=Math.max(0,e-1);for(let o of this.olhos3d){o.globo.rotation.set(_t(t.oy||0,-1.2,1.2)*.32,_t(t.ox||0,-1.2,1.2)*.42,0),o.sup.rotation.x=lt(-.92-r*.9,1.45,i)+n*.12,o.inf.rotation.x=lt(.98,.3,n)-i*.75+(t.dentroS<0?t.dentroS*.2:0);let a=i<.85;o.b1.visible=o.b2.visible=a;let l=(t.sobeAssim||0)*(o.s>0?1:-1);o.sg.position.y=o.y0+(t.sobeS||0)*.026+Math.max(0,t.dentroS||0)*.008+l*.012-n*.004-i*.006,o.sm.rotation.z=-o.s*((t.dentroS||0)*.42-n*.08)+l*.12}}geoTubo(t,e){let n=t.perfil,i=34,r=26,o=1+(e-1)*t.k,l=new Cs(n.map(([b,S])=>new vt(S,b))).getPoints(i),c=[],h=[],f=[],u=[],d=[],p=[],v=n.reduce((b,S)=>b+Math.max(0,S[1]),0)/n.length,g=Vt*v/.93;for(let b=0;b<=i;b++){let{x:S,y:x}=l[b],y=Math.max(0,S)*o,M=Ht((t.juntaY+t.banda-x)/(2*t.banda));for(let T=0;T<=r;T++){let _=T/r*Vt,E=t.espelho?-1:1;c.push(E*Math.sin(_)*y,x,Math.cos(_)*y*t.kz),f.push(0,1,0,0),u.push(1-M,M,0,0),d.push(T/r*g,-x/.58),p.push(T/r,(t.vTopo-x)/t.vLen)}}for(let b=0;b<i;b++)for(let S=0;S<r;S++){let x=b*(r+1)+S,y=x+r+1;t.espelho?h.push(x,x+1,y,y,x+1,y+1):h.push(x,y,x+1,y,y+1,x+1)}let m=new _e;return m.setAttribute("position",new qt(c,3)),m.setIndex(h),m.setAttribute("uv",new qt(d,2)),m.setAttribute("uv1",new qt(p,2)),m.setAttribute("skinIndex",new Gi(f,4)),m.setAttribute("skinWeight",new qt(u,4)),m.computeVertexNormals(),m}setAparencia(t,e){let n=this.ap=ad(t);this.acessorio=e||"";let i=cn.p[n.p],r=cn.c[n.c];this.pele.color.set(i),this.peleSom.color.set(qe(i,"#7A3B22",.14)),this.cab.color.set(r),this.cabRaspado.color.set(qe(r,i,.35)),this.barbaMat.color.set(qe(r,i,.08)),this.sobMat&&this.sobMat.color.set(qe(r,"#000000",.28)),this.irisMat&&this.irisMat.color.set(cn.i[n.i]);let o=cn.s[n.s];this.mtSap.color.set(o);let a=n.f===2,l=n.f===3;this.mtSap.roughness=a?.28:l?.7:.48,this.mtSap.metalness=a?.05:0,this.mtSola.color.set(a?"#2A1A12":l?"#3B2A1E":n.s===1?"#1F2937":"#F4F6F8"),this.mtSapDet.color.set(n.s===1?qe(o,"#94A3B8",.4):"#F8FAFC"),this.mtFaixa.color.set(n.f===4?"#F97316":n.s===1?"#1F2937":qe(o,"#FFFFFF",.55)),this.montarCalcados(n.f);let c=this.chapeus[this.acessorio]?this.acessorio:"",h=!!c||n.h===2||n.h===5;this.cortes.forEach(p=>{p&&(p.g.visible=!1)});let f=this.montarCorte(n.k);f.g.visible=!0,this.corteAtual=f,this.cabeloSolto=f.solto||null,f.topo.forEach(p=>{p.visible=!h}),f.sob&&(f.sob.visible=h),this.molas.rabo&&(this.molas.rabo.g.visible=!0),this.barbas.forEach(p=>{p&&(p.visible=!1)});let u=this.montarBarba(n.b);u&&(u.visible=!0),Object.entries(this.chapeus).forEach(([p,v])=>{v.visible=p===c}),Object.entries(this.acCabeca).forEach(([p,v])=>{v.visible=!c&&+p===n.h});let d=this.acessorio==="a_oculos";if(this.oculosG.forEach((p,v)=>{p.visible=d?v===0:n.o===v+1}),this.lente.opacity=d?.88:.14,this.lente.color.set(d?"#0B1220":"#DCEBFF"),this.brincos.visible=n.j===3,!this.relogio){let p=this.relogio=new wt;At(new Ae(.047,.009,8,26),nt("#111827",{r:.5}),p,0,0,0,{rx:j/2}),re(p,nt("#D4D4D8",{r:.25,m:.8}),.02,.02,.012,-.05,0,0,{rz:j/2,seg:20}),re(p,Md("#0EA5E9"),.015,.015,.002,-.0565,0,0,{rz:j/2,seg:20}),p.position.y=-.235,this.L.el.add(p)}this.relogio.visible=n.j===1||n.j===4,this.esc=o_[n.a],this.root.scale.setScalar(this.esc),this.fGir=cd[n.w],this.setRoupa(n.r,n.e),this.montarCorpo(),this.setCor(this.cor,!0),this.rostoKey=""}setRoupa(t,e){let n=Ii[t]||Ii[0],i=this.ap,r=n.manga==="L",o=n.manga==="R",a=n.tec||"liso",l=this.mtTronco,c=this.mtManga;l.map=n.m==="xadrez"?this.texX.t:n.m==="havai"?this.texH.t:n.m==="listras"?this.texL.t:n.m==="time"?this.texT.t:null,l.normalMap=ed(a),l.roughness=a==="la"?.62:a==="jeans"?.88:a==="trico"?.95:.82,l.sheen=a==="trico"?.45:.2,c.map=n.m==="time"?null:l.map,n.listras&&(c.map=this.texLM.t),c.normalMap=Zv(n.mangaM?"liso":a,r),c.roughness=n.mangaM?.66:l.roughness,c.sheen=l.sheen,l.needsUpdate=!0,c.needsUpdate=!0;for(let d of[this.L,this.R])d.mangaC.visible=!r&&!o,d.mangaL.visible=r,d.ombroPele.visible=o,d.punho.visible=r&&(!!n.punho||!!n.punhoR),d.punho.material=n.punho?this[n.punho]:this.mtDet;this.estampaPlano.visible=this.temIcone&&!!n.estampa;let h=n.vestido?2:e;this.mtCalca.color.set(n.calca&&h===0?n.calca:cn.l[i.l]);let f=n.listras&&(h===0||h===3);this.mtCalca.map=f?this.texLP.t:null,f&&(this.desenharListraCalca(cn.l[i.l]),this.mtCalca.color.set("#FFFFFF")),this.mtCalca.normalMap=nd(n.calca?"la":cn.l[i.l]==="#6F86B5"||cn.l[i.l]==="#2F3B52"?"jeans":"liso"),this.mtCalca.needsUpdate=!0;let u=h===1||h===2||h===4;for(let d of[this.PL,this.PR])d.calcaL.visible=h===0,d.jogger.visible=h===3,d.bermudaM.visible=h===1,d.shortsM.visible=h===4,d.peleP.visible=u,d.meiaM.visible=(u||h===3)&&i.f!==3&&i.f!==1,d.meiaM.scale.y=u?1.8:1,d.meiaM.position.y=u?.04:.012}setCor(t,e){let n=t||"#2457F5";if(n===this.cor&&!e&&this.corRoupa===this.ap.u)return;this.cor=n,this.corRoupa=this.ap.u;let i=Ii[this.ap.r]||Ii[0],r=cn.u[this.ap.u]||n,o=i.m==="terno"?Ru:i.m==="branco"?"#F4F6FA":i.m==="jeans"?ld:i.m==="xadrez"||i.m==="havai"||i.m==="listras"||i.m==="time"?"#FFFFFF":r;this.mtTronco.color.set(o),this.mtManga.color.set(i.mangaM==="branco"?"#F4F6FA":i.listras?"#FFFFFF":i.m==="time"?r:o),this.mtDet.color.set(i.m==="terno"?Ru:i.m==="jeans"?qe(ld,"#000000",.12):i.m==="branco"?"#F4F6FA":qe(r,i.gola==="capuz"||i.gola==="alta"?"#000000":"#FFFFFF",.12)),i.gola==="blazer"&&this.mtDet.color.set(qe(r,"#000000",.22)),(i.gola==="v"||i.listras)&&this.mtDet.color.set("#FFFFFF"),this.mtGravata.color.set(n);let a=r+"|"+n;this.estampasCor!==a&&(this.estampasCor=a,this.desenharEstampas(r,n))}desenharEstampas(t,e){{let{g:n,t:i}=this.texX,r=qe(t,"#000000",.5),o=qe(t,"#FFFFFF",.6);n.globalAlpha=1,n.fillStyle=qe(t,"#FFFFFF",.08),n.fillRect(0,0,256,256),n.globalAlpha=.42,n.fillStyle=r,n.fillRect(0,72,256,72),n.fillRect(72,0,72,256),n.globalAlpha=.3,n.fillRect(0,196,256,22),n.fillRect(196,0,22,256),n.globalAlpha=.85,n.fillStyle=o,n.fillRect(0,168,256,5),n.fillRect(168,0,5,256),n.globalAlpha=.6,n.fillStyle="#0B0F17",n.fillRect(0,106,256,4),n.fillRect(106,0,4,256),n.globalAlpha=.06,n.fillStyle="#000";for(let a=-256;a<256;a+=4)n.beginPath(),n.moveTo(a,0),n.lineTo(a+256,256),n.lineTo(a+258,256),n.lineTo(a+2,0),n.fill();n.globalAlpha=1,i.needsUpdate=!0}{let{g:n,t:i}=this.texH;n.globalAlpha=1,n.fillStyle=t,n.fillRect(0,0,256,256);let r=qe(qe(t,"#0E5A3A",.6),"#000000",.15),o="#FFF7EC",a="#F6B93B",l=(f,u,d)=>{for(let p of[-256,0,256])for(let v of[-256,0,256])n.save(),n.translate(f+p,u+v),d(),n.restore()},c=(f,u,d,p)=>l(f,u,()=>{n.rotate(d),n.fillStyle=r,n.beginPath(),n.ellipse(0,0,34*p,12*p,0,0,Vt),n.fill(),n.strokeStyle=qe(r,"#FFFFFF",.25),n.lineWidth=2,n.beginPath(),n.moveTo(-30*p,0),n.lineTo(30*p,0),n.stroke()}),h=(f,u,d,p)=>l(f,u,()=>{n.rotate(d),n.fillStyle=o;for(let v=0;v<5;v++)n.rotate(Vt/5),n.beginPath(),n.ellipse(0,-15*p,9*p,15*p,0,0,Vt),n.fill();n.fillStyle=a,n.beginPath(),n.arc(0,0,6*p,0,Vt),n.fill()});c(40,60,.6,1),c(170,30,-.4,.9),c(120,170,1.9,1.1),c(220,210,.3,.8),c(30,210,-1.1,.9),h(78,92,.3,1.1),h(200,120,1.2,.9),h(60,190,.8,.8),h(170,230,.1,1),i.needsUpdate=!0}{let{g:n,t:i}=this.texL;n.fillStyle="#F8FAFC",n.fillRect(0,0,128,128),n.fillStyle=t;for(let r=0;r<4;r++)n.fillRect(0,r*32+4,128,15);i.needsUpdate=!0}{let{g:n,t:i}=this.texLM;n.fillStyle=t,n.fillRect(0,0,128,128),n.fillStyle="#F8FAFC";for(let r of[24,34])n.fillRect(r,0,6,128);i.needsUpdate=!0}{let{g:n,t:i}=this.texT;n.fillStyle=t,n.fillRect(0,0,512,512),n.fillStyle="rgba(255,255,255,.95)";for(let r of[112,368])n.fillRect(r,0,32,512);n.fillStyle="rgba(255,255,255,.08)";for(let r=0;r<512;r+=16)n.fillRect(0,r,512,8);n.font="bold 150px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillStyle="#FFFFFF",n.strokeStyle=qe(t,"#000000",.4),n.lineWidth=8;for(let r of[0,512])n.strokeText("10",r,170),n.fillText("10",r,170);n.font="bold 46px system-ui, sans-serif",n.strokeText("10",300,150),n.fillText("10",300,150),n.fillStyle=e,n.beginPath(),n.moveTo(210,128),n.lineTo(242,128),n.lineTo(242,160),n.quadraticCurveTo(226,178,210,160),n.closePath(),n.fill(),n.strokeStyle="#FFFFFF",n.lineWidth=3,n.stroke(),i.needsUpdate=!0}}desenharListraCalca(t){let{g:e,t:n}=this.texLP;e.fillStyle=t,e.fillRect(0,0,128,128),e.fillStyle="#F8FAFC";for(let i of[26,35])e.fillRect(i,0,5,128);n.needsUpdate=!0}setIcone(t){let{g:e,t:n}=this.estampa;e.clearRect(0,0,128,128);let i=!!(t&&typeof window<"u"&&window.RI&&window.RI.tem(t+":f"));i&&window.RI.desenhar(e,t+":f",64,64,104,"rgba(255,255,255,.92)"),this.temIcone=i,this.estampaPlano.visible=i&&!!(Ii[this.ap.r]||Ii[0]).estampa,n.needsUpdate=!0}oriMao(t,e){if(!e)return null;let n;if(e==="baixo"){let a=this.root.rotation.y;n=yt(Math.sin(a),-.3,Math.cos(a))}else{if(Array.isArray(e)&&e.length===4)return new we(...e);n=yt(...e)}n.normalize();let i=yt(0,t==="R"?1:-1,0),r=n.clone().negate().addScaledVector(i,n.dot(i)).normalize(),o=new U().crossVectors(i,r);return new we().setFromRotationMatrix(new he().makeBasis(i,r,o))}ik(t,e,n,i,r){let o=t.sh,a=this.spine,l=a.worldToLocal(e.clone());if(i){let T=a.getWorldQuaternion(new we).invert().multiply(i);l.sub(this.gp.clone().multiplyScalar(ud).applyQuaternion(T))}l.sub(o.position);let c=sa,h=i?hd-.055:hd,f=l.length();f=_t(f,Math.abs(c-h)+.02,c+h-.002);let u=_t((c*c+h*h-f*f)/(2*c*h),-1,1),d=j-Math.acos(u),p=yt(0,-c-h*Math.cos(d),h*Math.sin(d)),v=yt(0,-1,0),g=p.clone().normalize(),m=l.clone().normalize(),b=new U().crossVectors(g,v).normalize(),S=r?yt(...r).normalize():yt(t.lado*.55,-1,-.45).normalize(),x=new U().crossVectors(m,S);x.lengthSq()<1e-6&&x.set(1,0,0),x.normalize();let y=new he().makeBasis(g,b,new U().crossVectors(g,b)),M=new he().makeBasis(m,x,new U().crossVectors(m,x));t.qIK.setFromRotationMatrix(M.multiply(y.transpose())),t.qFK.copy(o.quaternion),o.quaternion.slerpQuaternions(t.qFK,t.qIK,n),t.el.rotation.x=lt(t.el.rotation.x,-d,n)}aplicar(t,e=0,n=0){let i=Math.sin(e*1.75),r=Math.sin(e*1.75-.7),o=Math.sin(e*.43)*.6+Math.sin(e*.97+1.3)*.4,a=1-_t(Math.abs(t.dy)*4+Math.abs(t.hz)*4,0,.6),l=t.alt*lt(1,1/this.esc,_t(t.sent||0));this.hips.position.set(.004*o*a,l+t.dy/this.esc+.0025*i,t.hz),this.spine.rotation.set(t.lean+.012*r,t.twist+.02*o*a,t.side+.008*o*a),this.bS.scale.set(1+.009*i,1+.004*i,1+.02*i);let c=Math.sin(e*.52+.6)*.03+Math.sin(e*1.31)*.012;this.neck.rotation.set(t.nod*.35,t.turn*.4+c*.4,t.roll*.4),this.head.rotation.set(t.nod*.65+.008*i,t.turn*.6+c*.6,t.roll*.6+.01*o*a);let h=t.item||"",f=.01*i;this.L.sh.position.y=.437+f,this.R.sh.position.y=.437+f,this.L.sh.rotation.set(-t.aL[0],0,-t.aL[1]),this.L.el.rotation.x=-t.aL[2],this.R.sh.rotation.set(-t.aR[0],0,t.aR[1]),this.R.el.rotation.x=-t.aR[2],this.PL.hp.rotation.x=-t.lL[0],this.PL.kn.rotation.x=t.lL[1],this.PL.ft.rotation.x=t.lL[0]-t.lL[1]+(t.pL||0),this.PR.hp.rotation.x=-t.lR[0],this.PR.kn.rotation.x=t.lR[1],this.PR.ft.rotation.x=t.lR[0]-t.lR[1]+(t.pR||0);let u=t.kL>.001&&t.ikL?this.oriMao("L",t.oriL):null,d=t.kR>.001&&t.ikR?this.oriMao("R",t.oriR):null;(t.kL>.001&&t.ikL||t.kR>.001&&t.ikR)&&(this.root.updateMatrixWorld(!0),t.kL>.001&&t.ikL&&this.ik(this.L,yt(...t.ikL),_t(t.kL),u,t.poloL),t.kR>.001&&t.ikR&&this.ik(this.R,yt(...t.ikR),_t(t.kR),d,t.poloR));let p=_t(t.gole||0);if(p>.01&&!(t.kR>.001&&t.ikR)){this.root.updateMatrixWorld(!0);let x=this.root.getWorldQuaternion(new we),y=this.esc||1,T=this.head.localToWorld(yt(0,this.hc-.075,.228)).add(yt(.07*y,-.075*y+.05*y*p,.07*y).applyQuaternion(x));this.ik(this.R,T,Ht(p),null)}let v={controle:[[-.08,0,.12],[0,0,-.12]],tacoShot:[[.25,0,-.1],[-.15,.2,.25]],tacoV:[[0,0,.1],[0,.3,0]],xicara:[null,[.18,-.12,0]],nota:[null,[-.12,0,-.1]],tecla:[[.9,0,0],[.9,0,0]],celular:[null,[.5,-.3,.2]],moeda:[null,[.3,0,0]]}[h]||[null,null],[g,m]=v;this.L.hand.rotation.set(g?g[0]:t.mL*.9,g?g[1]:0,g?g[2]:0),this.R.hand.rotation.set(m?m[0]:t.mR*.9,m?m[1]:0,m?m[2]:0);let b=n>0?Math.min(1,n*16):1;for(let[x,y,M]of[[-1,"L",this.L],[1,"R",this.R]]){let T=this.gestoDe(t,h,y,e),_=y==="L"?this.curL:this.curR;_.s+=(T.s-_.s)*b,this.dedos[y].forEach((E,A)=>{_.c[A]+=(T.c[A]-_.c[A])*b*(E.polegar?.9:1-A*.04);let C=_.c[A];if(E.polegar){E.p1.rotation.z=x*.5-x*C*.4,E.p1.rotation.x=.4-.25*C,E.p2.rotation.z=-x*C*.7;return}E.p1.rotation.z=-x*C*1.08,E.p2.rotation.z=-x*C*1.3,E.p1.rotation.x=-_.s*(A-1.5)*.32}),T.preso||(M.hand.rotation.x+=.05*Math.sin(e*.9+x),M.hand.rotation.z+=.04*Math.sin(e*.7+x*2))}for(let[x,y,M]of[[this.L,u,t.kL],[this.R,d,t.kR]]){if(!y)continue;x.el.updateMatrixWorld(!0);let T=x.el.getWorldQuaternion(new we).invert().multiply(y);x.hand.quaternion.slerp(T,_t(M))}if(n>0&&this.pT!==null){let x=Math.min(n,.05),y=this.root.rotation.y,M=this.pYaw==null?0:jn(this.pYaw,y)/x,T=-(t.dy-this.pDy)/x*5-(t.nod-this.pNod)/x*.5;for(let A in this.molas){let C=this.molas[A];C.v+=(T*.8-70*C.a-7*C.v)*x,C.a=_t(C.a+C.v*x,-.6,.6),C.vb+=(-M*1.2-60*C.b-6*C.vb)*x,C.b=_t(C.b+C.vb*x,-.6,.6)}this.pYaw=y;let _=this.barra;this.hips.updateWorldMatrix(!0,!1);let E=new U().setFromMatrixPosition(this.hips.matrixWorld);if(_.ant){let A=E.clone().sub(_.ant).divideScalar(x),C=A.clone().sub(_.vel).divideScalar(x);_.vel.copy(A);let F=Math.sin(y)*C.x+Math.cos(y)*C.z,I=Math.cos(y)*C.x-Math.sin(y)*C.z;_.vx+=(_t(F,-40,40)*.006-120*_.x-9*_.vx)*x,_.x=_t(_.x+_.vx*x,-.25,.25),_.vz+=(_t(-I,-40,40)*.006-M*.05-120*_.z-9*_.vz)*x,_.z=_t(_.z+_.vz*x,-.2,.2)}_.ant=E}this.pDy=t.dy,this.pNod=t.nod,this.pT=e;{let x=Math.max(0,((t.lL[0]||0)+(t.lR[0]||0))/2),y=this.barra;this.bF.rotation.set(y.x-.85*Ht((x-.35)/1),0,y.z),this.bB.rotation.set(y.x*1.3+.2*Ht((x-.35)/1),0,y.z)}let S=this.molas.rabo;if(S&&(S.g.rotation.x=.15+S.a*.8-(t.lean+t.nod)*.6,S.g.rotation.z=S.b*.8+.04*o),this.cabeloSolto&&this.molas.solto){let x=this.molas.solto;this.cabeloSolto.rotation.set(x.a*.18-(t.lean+t.nod)*.25,0,x.b*.15)}this.root.updateMatrixWorld(!0),this.L.hand.localToWorld(this.mL.copy(this.gp)),this.R.hand.localToWorld(this.mR.copy(this.gp))}gestoDe(t,e,n,i){let r=u_,o=n==="L"?t.gestoL:t.gestoR;if(!o){let c=n==="L"?t.aL:t.aR,h=n==="L"?t.mL:t.mR;e==="tecla"?o="tecla":e==="controle"?o="controle":e==="tacoShot"?o=n==="L"?"ponte":"segura":e==="tacoV"?o=n==="R"?"segura":"":n==="R"&&/moeda|dardo/.test(e)?o="pinca":n==="R"&&/xicara|nota|celular/.test(e)&&(o="segura"),!o&&h>.5&&(o="segura"),!o&&c[0]>2.2&&(o="aberta")}let a=r[o]||r.solto,l=a.c.slice();if(o==="tecla")for(let c=0;c<4;c++)l[c]+=.32*Math.max(0,Math.sin(i*12.5+c*2.1+(n==="L"?0:1.3)))**3;else if(o==="controle")l[4]=n==="R"&&t.botaoR!=null?.32+.38*t.botaoR:.35+.25*Math.max(0,Math.sin(i*(n==="L"?7:9.5)+(n==="L"?0:2)));else if(!a.preso)for(let c=0;c<5;c++)l[c]+=.07*Math.sin(i*(.6+c*.17)+c*1.7+(n==="L"?0:3))+(t.tamb&&n==="R"&&c<4?.35*Math.max(0,Math.sin(i*14-c*1.1))**4:0);return{c:l,s:a.s,preso:!!a.preso}}desenharRosto(t,e){t&&t.boca!==void 0&&t.sorr===void 0&&(t=Td(t));let n=this.pisca||(this.pisca={prox:1.5,t:-9,dup:!1});e>n.prox&&(n.t=e,n.dup=Math.random()<.18,n.prox=e+(1.8+Math.random()*3.6)*(t.dentroS<-.3?.7:1)),t.piscar&&e-n.t>.5&&(n.t=e,n.prox=e+2+Math.random()*3);let i=e-n.t,r=0;i<.16?r=Math.sin(i/.16*j):n.dup&&i>.24&&i<.4&&(r=Math.sin((i-.24)/.16*j));let o=(Z,q=20)=>Math.round((Z||0)*q),a=["sorr","abre","larg","redondo","assim","dentes","lingua","morde","boch"].map(Z=>o(t[Z])).join(",")+"|"+(t.lagrima>.05?Math.floor(e*.6%1*24):-1);{let Z=_t(Math.max(t.fecha||0,r*.98));this.posarOlhos(t,_t((t.olho??1)*(1-Z),0,1.25),_t(t.feliz))}{let Z=Math.max(0,t.sorr||0),q=_t(t.abre),gt=_t(t.redondo),St=[_t(Z*.95+_t(t.feliz)*.35+_t(t.boch)*.12),_t(q*(.5+.5*_t(gt+(t.dentes||0)))),_t(gt*.85+(t.morde||0)*.15)];for(let Y of[this.cabM,this.rostoM]){let $=Y.morphTargetInfluences;$[0]=St[0],$[1]=St[1],$[2]=St[2]}}if(a===this.rostoKey)return;this.rostoKey=a;let{g:l,t:c}=this.rosto;l.save(),l.setTransform(1,0,0,1,0,0),l.clearRect(0,0,512,384),l.restore(),l.save(),l.translate(128,0),l.scale(c_,1),l.translate(-128,0);let h=cn.p[this.ap.p],f=cn.c[this.ap.c],u=this.ap.p>=4,d=128,p=104,v=47,g=u?"#160C07":"#2A1810",m=u?"rgba(20,8,4,.2)":"rgba(120,60,35,.12)";l.lineCap="round",l.lineJoin="round";let b=_t(t.sorr,-1,1),S=_t(t.abre),x=_t(t.feliz),y=_t(Math.max(t.fecha||0,r*.98)),M=.16+.84*_t(t.boch),T=Math.max(0,b)*6;for(let Z of[-1,1]){let q=140-T,gt=l.createRadialGradient(d+Z*60,q,1,d+Z*60,q,25);gt.addColorStop(0,`rgba(235,95,95,${.42*M})`),gt.addColorStop(1,"rgba(235,95,95,0)"),l.fillStyle=gt,l.beginPath(),l.ellipse(d+Z*60,q,25,14,0,0,Vt),l.fill()}let _=_t(t.redondo);if(b>.45&&_<.5){let Z=(b-.45)*2*(1-_*2);l.strokeStyle=u?`rgba(10,4,2,${.3*Z})`:`rgba(140,70,50,${.34*Z})`,l.lineWidth=1.8;for(let q of[-1,1])l.beginPath(),l.moveTo(d+q*22,141),l.quadraticCurveTo(d+q*34,152,d+q*31,166),l.stroke()}let E=161,A=qe(h,"#8E2F2B",u?.38:.45),C=qe(h,"#C2615A",u?.3:.38),F=qe(h,"#3A0F0C",.72),I=24*(t.larg??1)*(1-.45*_)*(1+.2*Math.max(0,b)*(1-_)),N=Z=>E-b*8.5+(t.assim||0)*Z*4.5,B=d-I,k=d+I,z=N(-1),Q=N(1),H=S*(26+9*_);if(H<1.6)l.fillStyle=A,l.beginPath(),l.moveTo(B,z),l.quadraticCurveTo(d-I*.45,E-5.5,d,E-3.2),l.quadraticCurveTo(d+I*.45,E-5.5,k,Q),l.quadraticCurveTo(d,E+1+b*4,B,z),l.fill(),l.fillStyle=C,l.beginPath(),l.moveTo(B+2,z+.5),l.quadraticCurveTo(d,E+1.5+b*4,k-2,Q+.5),l.quadraticCurveTo(d,E+10+b*3.5,B+2,z+.5),l.fill(),l.fillStyle="rgba(255,255,255,.18)",l.beginPath(),l.ellipse(d,E+5+b*2.5,I*.35,1.6,0,0,Vt),l.fill(),l.strokeStyle=F,l.lineWidth=2.4,l.beginPath(),l.moveTo(B,z),l.quadraticCurveTo(d,E+1.2+b*5,k,Q),l.stroke(),t.morde>.1&&(l.fillStyle="#FAF6F0",l.beginPath(),l.ellipse(d+3,E+2,7*t.morde,2.6*t.morde,0,0,Vt),l.fill()),t.lingua>.1&&(l.fillStyle="#E06D78",l.beginPath(),l.ellipse(d+7,E+4+2*t.lingua,6*t.lingua,4*t.lingua,.3,0,Vt),l.fill());else{let Z=E-3-S*2,q=E+H-b*3,gt=()=>{l.beginPath(),l.moveTo(B,z),l.quadraticCurveTo(d,Z-b*2,k,Q),l.quadraticCurveTo(d+I*.78,q,d,q),l.quadraticCurveTo(d-I*.78,q,B,z),l.closePath()};gt();let St=l.createRadialGradient(d,(Z+q)/2-2,2,d,(Z+q)/2,Math.max(I,H));if(St.addColorStop(0,"#1E060A"),St.addColorStop(.55,"#4A1218"),St.addColorStop(1,"#7A2630"),l.fillStyle=St,l.fill(),l.save(),gt(),l.clip(),t.dentes>.05){let $=l.createLinearGradient(0,Z-6,0,Z+5+7*t.dentes);$.addColorStop(0,"#FFFFFF"),$.addColorStop(1,"#DCD6CE"),l.fillStyle=$,l.beginPath(),l.moveTo(d-I,Z-8),l.lineTo(d+I,Z-8),l.quadraticCurveTo(d+I*.6,Z+4+7*t.dentes,d,Z+4.5+7*t.dentes),l.quadraticCurveTo(d-I*.6,Z+4+7*t.dentes,d-I,Z-8),l.fill(),l.strokeStyle="rgba(150,140,130,.35)",l.lineWidth=.8;for(let dt of[-.42,-.14,.14,.42])l.beginPath(),l.moveTo(d+dt*I,Z-6),l.lineTo(d+dt*I*.96,Z+2+5*t.dentes),l.stroke()}let Y=Math.max(t.lingua||0,S*.7);if(Y>.1){let $=l.createRadialGradient(d,q-2,1,d,q,I*.6);$.addColorStop(0,"#F08A94"),$.addColorStop(1,"#C24E5C"),l.fillStyle=$,l.beginPath(),l.ellipse(d,q+1,I*.58,Math.max(3,H*.42)*Y,0,0,Vt),l.fill()}l.fillStyle="rgba(0,0,0,.25)",l.fillRect(d-I,Z-8,I*2,4),l.restore(),l.strokeStyle=A,l.lineWidth=3.6,gt(),l.stroke(),l.strokeStyle=C,l.lineWidth=4.2,l.beginPath(),l.moveTo(B+3,z+2),l.quadraticCurveTo(d+I*.78,q+2,d,q+2.2),l.stroke(),l.beginPath(),l.moveTo(k-3,Q+2),l.quadraticCurveTo(d-I*.78,q+2,d,q+2.2),l.stroke()}if(b>.35){let Z=(b-.35)/.65;l.strokeStyle=u?`rgba(10,4,2,${.35*Z})`:`rgba(150,70,55,${.4*Z})`,l.lineWidth=1.8;for(let q of[-1,1]){let gt=q<0?B:k,St=q<0?z:Q;l.beginPath(),l.arc(gt+q*1.5,St+1,4.5,q<0?-.4:j-1.2,q<0?1.2:j+.4),l.stroke()}}if(t.lagrima>.05){let Z=(e*.6%1*24|0)/24;l.fillStyle=`rgba(120,180,250,${.9*(1-Z)*t.lagrima})`;let q=d-v-12,gt=p+12+Z*60;l.beginPath(),l.moveTo(q,gt-7),l.quadraticCurveTo(q+6,gt+3,q,gt+4.5),l.quadraticCurveTo(q-6,gt+3,q,gt-7),l.fill()}l.restore(),c.needsUpdate=!0}},u_={solto:{c:[.52,.44,.36,.28,.28],s:.06},segura:{c:[.98,.95,.92,.88,.78],s:0,preso:!0},punho:{c:[1.15,1.15,1.12,1.08,.95],s:0,preso:!0},pinca:{c:[.85,.75,.6,.62,.62],s:0,preso:!0},aponta:{c:[1.15,1.15,1.1,.02,.75],s:0,preso:!0},joinha:{c:[1.15,1.15,1.12,1.08,-.45],s:0,preso:!0},aberta:{c:[.04,.03,.02,.02,0],s:.38},ponte:{c:[.3,.25,.2,.35,.1],s:.3,preso:!0},tecla:{c:[.5,.48,.45,.42,.3],s:.08,preso:!0},controle:{c:[.95,.9,.85,.7,.35],s:0,preso:!0},carinho:{c:[.2,.18,.15,.15,.15],s:.12}};function Td(s){let t={sorr:.3,abre:0,larg:1,redondo:0,assim:0,dentes:0,lingua:0,morde:0,olho:1,feliz:0,fecha:0,sobeS:0,dentroS:0,sobeAssim:0,boch:s.boch||0,lagrima:s.lagrima||0,ox:s.olhar?s.olhar[0]:0,oy:s.olhar?s.olhar[1]:0},e=_t(s.abre??.6);switch(s.boca){case"sorriso":Object.assign(t,{sorr:.85,abre:.3,dentes:.9});break;case"leve":t.sorr=.3;break;case"reta":t.sorr=0;break;case"triste":t.sorr=-.6;break;case"foco":Object.assign(t,{sorr:-.05,larg:.85,assim:.3});break;case"o":Object.assign(t,{sorr:0,abre:.18+.3*e,redondo:1});break;case"aberta":Object.assign(t,{sorr:.55,abre:.3+.6*e,dentes:.7});break}return s.olhos==="F"&&(t.feliz=1),s.olhos==="Z"&&(t.fecha=1),(s.sob==="triste"||!s.sob&&s.boca==="triste")&&(t.dentroS=.85,t.sobeS=-.1,t.olho=.82),s.sob==="tenso"&&(t.dentroS=-.6,t.sobeS=-.15),(s.boca==="o"||s.boca==="aberta")&&(t.sobeS+=.45*e),(s.boca==="sorriso"||s.olhos==="F")&&(t.sobeS+=.15),t}var Ou=s=>{let t={...$n,...s};for(let e of Tc)t[e]=(s[e]||$n[e]).slice();return t};function Yt(s,t={}){let e=Ou(t),n=Math.sin(s*1.8);return e.lean+=.012*n,e.side+=.018*Math.sin(s*.37),t.aL||(e.aL=[.05+.03*n,.09,.3]),t.aR||(e.aR=[.05+.03*n,.09,.3]),t.lL||(e.lL=[.02,.04]),t.lR||(e.lR=[.02,.04]),e}var dd=[1.25,1.4];function Yi(s,t,e={}){let n=Math.sin(s*1.8),i=Ou({alt:t,sent:1,lL:dd,lR:dd,aL:[.62+.02*n,-.08,.98],aR:[.6+.02*n,-.08,1],...e});return i.lean+=.04+.01*n,i}function bc(s,t,e={}){let n=Yt(s,e);return n.alt=lt(.89,.5,t),n.lL=[lt(.02,1.35,t),lt(.04,2.1,t)],n.lR=[lt(.02,1.05,t),lt(.04,1.9,t)],n.lean+=.35*t,n.nod+=.15*t,n}function f_(s,t,e,n=1){let i=t==="corre",r=t==="triste",o=i?2.1:r?.95:1.32,a=.88*n,l=Math.asin(_t(o/(4*a),0,.85))*(i?1.05:1),c=s/o*Vt,h=Math.sin(c),f=Math.cos(c),u=i?1.35:r?.65:.95,d=(g,m)=>.08+u*Math.pow(Math.max(0,g),1.6)+.12*Math.max(0,m)*(i?.5:1),p=(g,m)=>.38*Math.max(0,-g)*Math.max(0,m)*1.6-.22*Math.max(0,g)*Math.max(0,-m),v=Ou({lL:[l*h,d(f,h)],lR:[-l*h,d(-f,-h)],pL:p(h,f),pR:p(-h,-f),aL:[-l*.95*h,.1,(i?1.35:.3)+.22*Math.max(0,-Math.sin(c-.5))],aR:[l*.95*h,.1,(i?1.35:.3)+.22*Math.max(0,Math.sin(c-.5))],lean:i?.2:r?.16:.07,twist:.1*h,side:.03*f,roll:-.025*f,boca:r?"triste":i?"aberta":"leve"});return v.turn=-.09*h,v.nod=r?.45:-.03+.025*Math.abs(f),v.alt=.07+.82*Math.cos(l*Math.abs(h))+(i?.05*Math.abs(f):.014*Math.abs(f)),v.andando=1,v}function Hs(s,t,e){if(e>=1)return t;if(e<=0)return s;let n={...t};for(let i of Cu)n[i]=lt(s[i]??$n[i],t[i]??$n[i],e);for(let i of Tc)n[i]=(s[i]||$n[i]).map((r,o)=>lt(r,(t[i]||$n[i])[o],e));for(let i of["ikL","ikR"])n[i]=s[i]&&t[i]?s[i].map((r,o)=>lt(r,t[i][o],e)):t[i]||s[i];if(e<.5)for(let i of l_)n[i]=s[i];return n}var pd={yawAdd:30,nod:8,turn:7.5,roll:8,lean:10,side:10,twist:10,alt:18,dy:20,hz:14,pL:26,pR:26,olhar:30,lL:24,lR:24,aL:13,aR:13},Ac=class{constructor(){this.x=null,this.v={}}mola(t,e,n,i){let r=this.x[t],o=this.v[t]||0,a=r-e,l=Math.exp(-i*n),c=(o+i*a)*n;return this.x[t]=e+(a+c)*l,this.v[t]=(o-i*c)*l,this.x[t]}passo(t,e,n=15){if(!this.x||e<=0||e>.5){this.x={},this.v={};for(let r of Cu)this.x[r]=t[r]??$n[r];for(let r of Tc)(t[r]||$n[r]).forEach((o,a)=>{this.x[r+a]=o});for(let r of["ikL","ikR"])t[r]&&t[r].forEach((o,a)=>{this.x[r+a]=o});return t}let i={...t};for(let r of Cu)i[r]=this.mola(r,t[r]??$n[r],e,pd[r]||n);for(let r of Tc)i[r]=(t[r]||$n[r]).map((o,a)=>this.mola(r+a,o,e,pd[r]||n*1.1));for(let r of["ikL","ikR"]){if(!t[r]){this.x[r+"0"]!=null&&(i[r]=[0,1,2].map(o=>this.x[r+o]));continue}if(this.x[r+"0"]==null){t[r].forEach((o,a)=>{this.x[r+a]=o,this.v[r+a]=0}),i[r]=t[r];continue}i[r]=t[r].map((o,a)=>this.mola(r+a,o,e,n*1.3))}return i}},vu={neutro:{},contente:{sorr:.62,feliz:.42,boch:.38},sorrisao:{sorr:.88,abre:.32,dentes:1,feliz:.65,boch:.55,sobeS:.18},concentrado:{sorr:-.05,larg:.82,assim:.35,dentroS:-.3,olho:.9,lingua:.55},surpreso:{abre:.42,redondo:.7,sorr:.1,sobeS:.85,olho:1.2},rindo:{sorr:.9,abre:.5,dentes:1,feliz:.9,boch:.6,sobeS:.2},bocejo:{abre:1,redondo:.55,sorr:0,fecha:.85,sobeS:.35},pensativo:{sorr:.05,assim:.55,sobeAssim:.6,olho:.9,larg:.85},orgulhoso:{sorr:.6,assim:.55,feliz:.45,sobeAssim:.35,boch:.35},assovia:{redondo:1,abre:.14,larg:.42,sobeS:.25,sorr:.1},gargalhada:{sorr:1,abre:.85,dentes:1,feliz:1,boch:.9,sobeS:.45},grito:{abre:.95,redondo:.35,sorr:.65,olho:1.12,sobeS:.75,dentes:.8,boch:.8},tenso:{sorr:-.25,larg:.8,dentroS:-.75,olho:1.05},mordeLabio:{sorr:-.15,larg:.75,assim:-.5,dentroS:-.35,morde:1},aflito:{sorr:-.45,dentroS:.75,sobeS:.25,olho:1.1},resmunga:{sorr:-.2,dentroS:-.45,larg:.85},suspira:{sorr:-.1,abre:.15,redondo:.4,fecha:.5,dentroS:.3},esperanca:{sorr:.25,dentroS:.45,sobeS:.2},choroso:{sorr:-.75,dentroS:1,olho:.72,lagrima:1,abre:.08},vazio:{sorr:-.15,olho:.68,dentroS:.35},sorrisoFraco:{sorr:.2,dentroS:.55,olho:.85},cumprimenta:{sorr:.75,feliz:.6,sobeS:.6,boch:.5}},md={tranquilo:[["contente",4,3,6],["sorrisao",1.4,1.8,3.2],["concentrado",3,3,7],["surpreso",1,.9,1.6],["rindo",1.2,1.4,2.6],["bocejo",.6,2.4,3.2],["pensativo",1,2.5,4.5],["assovia",.8,2.5,4],["neutro",2,2,4]],feliz:[["contente",3,3,6],["sorrisao",3,2,4],["rindo",2,1.5,3],["orgulhoso",2,2.5,4.5],["concentrado",1.5,2,4],["assovia",1.2,2.5,4],["neutro",1,2,3]],euforico:[["gargalhada",3,1.5,3],["sorrisao",2,1.5,3],["grito",2,.9,1.8],["rindo",2,1.5,3],["contente",1.5,2,4]],preocupado:[["tenso",3,3,6],["mordeLabio",2,1.5,3],["aflito",2,2,4],["resmunga",2,1.8,3.5],["suspira",1.5,1.8,2.6],["esperanca",1,2,3.5],["pensativo",1,2,4]],triste:[["choroso",2,3,6],["vazio",3,3,6],["suspira",2,1.8,2.6],["sorrisoFraco",.6,1.5,3],["aflito",1,2,4]]},d_=[{nome:"nariz",req:["R"],dur:1.7,humores:"*",peso:1},{nome:"nuca",req:["R"],dur:2.2,humores:["preocupado","triste","tranquilo"],peso:1},{nome:"coca",req:["R"],dur:1.9,humores:["preocupado","tranquilo"],peso:1},{nome:"pescoco",req:[],dur:2.6,humores:"*",peso:1},{nome:"suspiro",req:[],dur:2.4,humores:["preocupado","triste","tranquilo"],peso:1.2},{nome:"tamborila",req:["Rapoio"],dur:2.6,humores:["preocupado","tranquilo","feliz"],peso:1.4},{nome:"cintura",req:["R","L","pe"],dur:3.2,humores:["feliz","preocupado","tranquilo"],peso:1},{nome:"alonga",req:["R","L","pe"],dur:3,humores:["tranquilo","triste"],peso:.6},{nome:"ombros",req:[],dur:1.6,humores:"*",peso:.8}],_u=(s,t)=>{let e=s.reduce((i,r)=>i+t(r),0),n=Math.random()*e;for(let i of s)if(n-=t(i),n<=0)return i;return s[s.length-1]},ks={sorr:.3,abre:0,larg:1,redondo:0,assim:0,dentes:0,lingua:0,morde:0,olho:1,feliz:0,fecha:0,sobeS:0,dentroS:0,sobeAssim:0,boch:0,lagrima:0},Rc=class{constructor(){this.emo={nome:"neutro",t0:0,fim:2},this.emoAnt={nome:"neutro"},this.glance=null,this.proxGlance=2+Math.random()*3,this.mania=null,this.proxMania=5+Math.random()*4,this.F={...ks},this.Fv={},this.wGaze=0,this.yawG=0,this.pitchG=0}expressao(t,e){let n=this.emo;if(t>n.fim||this.humor!==e){this.humor=e;let i=md[e]||md.tranquilo,[r,,o,a]=_u(i.filter(l=>l[0]!==n.nome||i.length<2),l=>l[1]);this.emoAnt={nome:n.nome,ate:t+.5},this.emo={nome:r,t0:t,fim:t+o+Math.random()*(a-o)}}return this.emo}passo(t,e){let n=e.T,i=e.dt;t={...t,aL:t.aL.slice(),aR:t.aR.slice(),lL:t.lL.slice(),lR:t.lR.slice(),olhar:t.olhar.slice()};let r=!t.andando&&Math.abs(t.dy||0)<.03,o=(t.sent||0)<.3,a=r&&(t.kR||0)<.05&&!t.item&&!e.ocupado&&t.aR[0]<1.3&&!t.gestoR,l=r&&(t.kL||0)<.05&&!e.ocupadoL&&!e.ocupado&&t.aL[0]<1.3&&t.mL<.5&&!t.gestoL,c=r&&!e.ocupado&&(t.kR||0)<.05&&!t.item&&(t.sent||0)>.5,h=this.expressao(n,e.humor),f=Zt(n-h.t0,0,h.fim-h.t0,.45);if(!this.mania&&n>this.proxMania&&!e.reduz){let S=d_.filter(x=>(x.humores==="*"||x.humores.includes(e.humor))&&x.req.every(y=>y==="R"?a:y==="L"?l:y==="pe"?o&&r:y==="Rapoio"?c:!0)&&r);if(S.length){let x=_u(S,y=>y.peso);this.mania={...x,t0:n}}this.proxMania=n+(e.humor==="preocupado"?4:6)+Math.random()*6}let u=this.mania;if(u){let S=n-u.t0,x=Zt(S,0,u.dur,.45),y=u.req.every(M=>M==="R"?a||S>.2&&!t.item&&(t.kR||0)<.05&&r:M==="L"?l||S>.2&&r:M==="pe"?o&&r:M==="Rapoio"?c:!0);if(S>u.dur||!y&&x<.05)this.mania=null;else{let M=y?x:x*.5,T=(_,E)=>_.forEach((A,C)=>{_[C]=lt(A,E[C],M)});switch(u.nome){case"nariz":{let _=e.nariz;if(_){let E=Math.sin(S*16)*.012*x;t.ikR=[_.x+E,_.y,_.z],t.kR=M*.95,t.gestoR="aponta",t.nod+=.06*M}break}case"nuca":T(t.aR,[2.55,.65,2.55+.12*Math.sin(S*9)]),t.nod+=.18*M,t.gestoR="carinho";break;case"coca":T(t.aR,[2.65,.25,2.3+.15*Math.sin(S*13)]),t.roll-=.08*M,t.gestoR="carinho";break;case"pescoco":{let _=Math.sin(le(S,.2,u.dur-.2)*Vt);t.roll+=.28*_*M,t.nod+=.12*M,t.fechaOlhos=M;break}case"suspiro":{let _=Math.sin(j*le(S,.1,1.4));t.lean-=.06*_*M,t.dy+=.012*_*M,t.nod+=-.08*_*M+.1*le(S,1.4,u.dur)*M,t.suspiro=_*M;break}case"tamborila":t.tamb=1;break;case"cintura":T(t.aR,[.35,.85,1.75]),T(t.aL,[.35,.85,1.75]),t.lean-=.04*M,t.gestoR=t.gestoL="solto";break;case"alonga":{let _=Ht(le(S,.2,1.2))*(1-Ht(le(S,2.2,3)));T(t.aR,[lt(.2,3,_),.2,.25]),T(t.aL,[lt(.2,3,_),.2,.25]),t.lean-=.12*_*M,t.nod-=.25*_*M,t.dy+=.03*_*M,t.gestoR=t.gestoL=_>.5?"aberta":"",t.boceja=_*M;break}case"ombros":{let _=Math.sin(j*le(S,0,u.dur));t.dy+=.018*_,t.lean-=.04*_;break}}}}if(o&&r&&!t.andando){let S=Math.sin(n*.21+1.3)*.7+Math.sin(n*.13)*.3,x=e.legsLivres?1:0;t.side+=.03*S*x,t.twist+=.025*S*x,t.lL[1]+=.14*Math.max(0,S)*x,t.lL[0]+=.05*Math.max(0,S)*x,t.lR[1]+=.14*Math.max(0,-S)*x,t.lR[0]+=.05*Math.max(0,-S)*x,t.alt-=.008*Math.abs(S)*x}a&&!(u&&u.req.includes("R"))&&(t.aR[2]+=.04*Math.sin(n*.71+1),t.aR[0]+=.025*Math.sin(n*.53)),l&&!(u&&u.req.includes("L"))&&(t.aL[2]+=.04*Math.sin(n*.67),t.aL[0]+=.025*Math.sin(n*.49+2));let d=h.nome,p=f*(e.facePropria?.3:1);if(d==="rindo"||d==="gargalhada"){let S=d==="gargalhada"?1:.55;t.dy+=.01*Math.abs(Math.sin(n*11))*p*S,t.lean-=.07*p*S,t.nod-=.08*p*S+.04*Math.sin(n*11)*p*S}if(d==="bocejo"&&!t.boceja&&(t.nod-=.25*p,t.lean-=.05*p),d==="resmunga"&&(t.turn+=.06*Math.sin(n*3.3)*p,t.roll+=.04*Math.sin(n*2.1)*p),d==="surpreso"&&(t.nod-=.12*p,t.lean-=.04*p),(d==="aflito"||d==="choroso"||d==="vazio")&&(t.nod+=.1*p),d==="orgulhoso"&&(t.nod-=.08*p,t.lean-=.03*p),!this.glance&&n>this.proxGlance&&e.alvos&&e.alvos.length&&!e.reduz){let S=_u(e.alvos,x=>x.peso);this.glance={...S,t0:n,dur:.9+Math.random()*1.8},S.nome==="camera"&&e.humor!=="triste"&&Math.random()<.35&&(this.glance.acena=!0,this.glance.dur=2.4),this.proxGlance=n+3+Math.random()*5.5}if(this.glance&&n-this.glance.t0>this.glance.dur&&(this.glance=null),this.glance&&this.glance.acena&&a&&!this.mania){let S=Zt(n-this.glance.t0,.2,this.glance.dur,.4);t.aR=t.aR.map((x,y)=>lt(x,[2.55,.5,.9+.35*Math.sin(n*9)][y],S)),S>.3&&(t.gestoR="aberta")}let v=null,g=0,m=(t.kR||0)>.25&&t.ikR&&!t.item?["R",t.kR]:(t.kL||0)>.25&&t.ikL&&!t.gestoL?["L",t.kL]:null;if(t.olharW)v=yt(...t.olharW),g=1;else if(m&&!e.semOlharMao){let S=m[0]==="R"?t.ikR:t.ikL;v=yt(...S),g=.85*_t(m[1])}else this.glance?(v=this.glance.pos,g=Zt(n-this.glance.t0,0,this.glance.dur,.25)*(t.andando?.6:.9)):e.foco&&(v=e.foco,g=t.andando?.3:.75);if(this.olhandoCamera=this.glance&&this.glance.nome==="camera"?Zt(n-this.glance.t0,0,this.glance.dur,.25):0,this.wGaze=lt(this.wGaze,v?g:0,Math.min(1,i*6)),v&&e.cabeca){let S=v.clone().sub(e.cabeca),x=jn(e.yawCorpo+(t.twist||0),Math.atan2(S.x,S.z)),y=Math.atan2(S.y,Math.hypot(S.x,S.z));this.yawG=_t(x,-1.6,1.6),this.pitchG=_t(y,-1,.8)}let b=this.wGaze;if(b>.01){let S=_t(this.yawG*.78,-1.05,1.05),x=_t(-this.pitchG*.65,-.5,.65);t.turn=lt(t.turn,S,b),t.nod=lt(t.nod,x+(t.nod-(t.nod||0)),b*.85),t.olhar[0]=lt(t.olhar[0],_t((this.yawG-S)*2.4,-1.4,1.4),b),t.olhar[1]=lt(t.olhar[1],_t(-(this.pitchG+x/.65*.65)*2.2,-1.4,1.4),b)}return t}rosto(t,e){let n=e.T,i=e.dt,r=Td(t),o=this.emo,a=Zt(n-o.t0,0,o.fim-o.t0,.45)*(e.facePropria?.25:1),l=vu[o.nome]||{},c={...r};for(let h in l)c[h]=lt(r[h]??ks[h],l[h]*(h==="sorr"||h==="dentroS"||h==="sobeS"?1.15:1),a);if(o.nome==="resmunga"&&(c.abre=Math.max(c.abre,a*(.08+.14*Math.max(0,Math.sin(n*9)*Math.sin(n*3.7))))),(o.nome==="rindo"||o.nome==="gargalhada")&&(c.abre=Math.max(0,c.abre-a*.2*Math.abs(Math.sin(n*11)))),t.suspiro&&(c.abre=Math.max(c.abre,.15*t.suspiro),c.redondo=Math.max(c.redondo,.5*t.suspiro),c.fecha=Math.max(c.fecha,.5*t.suspiro)),t.boceja&&(c.abre=Math.max(c.abre,t.boceja),c.redondo=Math.max(c.redondo,.5*t.boceja),c.fecha=Math.max(c.fecha,.85*t.boceja)),t.fechaOlhos&&(c.fecha=Math.max(c.fecha,.9*t.fechaOlhos)),this.olhandoCamera>.01&&!e.facePropria&&e.humor!=="triste"){let h=this.olhandoCamera;for(let f in vu.cumprimenta)c[f]=lt(c[f],vu.cumprimenta[f],h*.8)}c.sobeS+=.06*Math.sin(n*.83)+.04*Math.sin(n*2.3+1),c.sorr+=.04*Math.sin(n*.61+2);for(let h in ks){let f=h==="abre"||h==="fecha"?22:h==="sobeS"||h==="dentroS"?14:9,u=this.F[h]??ks[h],d=this.Fv[h]||0,p=u-(c[h]??ks[h]),v=Math.exp(-f*i),g=(d+f*p)*i;this.F[h]=(c[h]??ks[h])+(p+g)*v,this.Fv[h]=(d-f*g)*v,i>0||(this.F[h]=c[h]??ks[h])}return this.F.ox=t.olhar[0],this.F.oy=t.olhar[1],this.F.piscar=Math.abs(this.yawG-(this.yawGAnt??this.yawG))>.5,this.yawGAnt=this.yawG,this.F}},Iu=class{constructor(){let t=nt("#C08552",{r:.9}),e=nt("#8B5A35",{r:.9}),n=nt("#2B1B14",{r:.4}),i=this.g=new wt;this.corpo=new wt,i.add(this.corpo),Li(this.corpo,t,.12,.26,0,0,0,{rx:j/2}),pe(this.corpo,nt("#E3B98E",{r:.9}),.1,0,-.03,.08,{s:[.8,.7,1.3]}),this.cab=new wt,this.cab.position.set(0,.12,.2),this.corpo.add(this.cab),pe(this.cab,t,.115,0,.04,0),pe(this.cab,nt("#D9A577"),.062,0,0,.1,{s:[1,.8,1.2]}),pe(this.cab,n,.026,0,.02,.17);for(let r of[-1,1])pe(this.cab,nt("#FFFFFF",{r:.3}),.02,r*.045,.08,.098),pe(this.cab,n,.013,r*.047,.082,.112);this.lingua=pe(this.cab,nt("#F87171"),.025,0,-.04,.13,{s:[1,.5,1.4]}),this.orelhas=[];for(let r of[-1,1]){let o=new wt;o.position.set(r*.09,.1,-.01),this.cab.add(o),At(new ke(.055,12,10),e,o,r*.012,-.04,0,{s:[.45,1.2,.9],rz:r*.4}),this.orelhas.push(o)}this.coleira=re(this.corpo,nt("#DC2626",{r:.4}),.085,.085,.03,0,.09,.17,{rx:1.1,seg:20}),this.patas=[];for(let[r,o]of[[-.07,.15],[.07,.15],[-.07,-.15],[.07,-.15]]){let a=new wt;a.position.set(r,-.04,o),this.corpo.add(a),Li(a,t,.04,.12,0,-.1,0),this.patas.push(a)}this.rabo=new wt,this.rabo.position.set(0,.06,-.2),this.corpo.add(this.rabo),Li(this.rabo,t,.025,.14,0,.08,-.02,{rx:-.6}),Cn(i,!0,!1),this.zzz=new wt,i.add(this.zzz);for(let r=0;r<2;r++){let o=Ee(64,64);o.g.font="bold 52px system-ui",o.g.fillStyle="#6366F1",o.g.textAlign="center",o.g.fillText("z",32,48);let a=new Vi(new Mi({map:o.t,transparent:!0,depthWrite:!1}));a.scale.setScalar(.16-r*.04),this.zzz.add(a)}this.pos=null,this.yaw=0,this.rota=null,this.dist=0,this.alvo=null}mover(t,e,n){if(this.pos||(this.pos=[t[0],t[1]],this.yaw=t[2]),(!this.alvo||Math.hypot(t[0]-this.alvo[0],t[1]-this.alvo[1])>.2)&&(this.alvo=t.slice(),this.rota=Math.hypot(t[0]-this.pos[0],t[1]-this.pos[1])>.15?n.caminho(this.pos,t,.12):null),this.rota&&this.rota.length){let a=this.rota[0],l=a[0]-this.pos[0],c=a[1]-this.pos[1],h=Math.hypot(l,c),f=1.5*e;return h<=f?(this.pos=[a[0],a[1]],this.rota.shift()):(this.pos[0]+=l/h*f,this.pos[1]+=c/h*f),this.yaw=aa(this.yaw,Math.atan2(l,c),Math.min(1,e*10)),this.dist+=Math.min(f,h),!1}this.rota=null;let i=t[0]-this.pos[0],r=t[1]-this.pos[1],o=Math.hypot(i,r);if(o>.03&&o<1.2){let a=Math.min(o,1.2*e);return this.pos[0]+=i/o*a,this.pos[1]+=r/o*a,this.yaw=aa(this.yaw,Math.atan2(i,r),Math.min(1,e*10)),this.dist+=a,!1}return this.yaw=aa(this.yaw,t[2],Math.min(1,e*5)),!0}quadro(t,e){let n=this.corpo;this.zzz.visible=t==="dorme";let i=t==="pula"||t==="carinho"||t==="anda",r=Math.sin(e*(t==="dorme"?2:16))*(t==="dorme"?.2:i?.8:.5);if(this.rabo.rotation.set(0,r,0),this.lingua.visible=t!=="dorme",this.orelhas.forEach((o,a)=>{o.rotation.x=t==="anda"?Math.sin(e*14+a)*.25:0}),t==="dorme")n.position.set(0,.1+.008*Math.sin(e*2),0),n.rotation.set(0,0,.12),this.patas.forEach((o,a)=>o.rotation.set(a<2?-1.35:1.35,0,0)),this.cab.rotation.set(.5,.25,0),this.cab.position.set(0,.04,.22),this.zzz.children.forEach((o,a)=>{let l=(e*.45+a*.5)%1;o.position.set(.12+l*.1,.32+l*.35,.2),o.material.opacity=1-l});else if(t==="anda"){let o=this.dist/.28*Vt;n.position.set(0,.2+.02*Math.abs(Math.sin(o)),0),n.rotation.set(.04*Math.sin(o*2),0,0),this.patas.forEach((a,l)=>a.rotation.set(Math.sin(o+(l===0||l===3?0:j))*.6,0,0)),this.cab.position.set(0,.12,.2),this.cab.rotation.set(-.1,0,0)}else if(t==="senta"||t==="carinho")n.position.set(0,.2,0),n.rotation.set(-.55,0,0),this.patas.forEach((o,a)=>o.rotation.set(a<2?.55:-.9,0,0)),this.cab.position.set(0,.12,.2),t==="carinho"?this.cab.rotation.set(.1+.12*Math.sin(e*5),.25*Math.sin(e*2.6),.2*Math.sin(e*3.1)):this.cab.rotation.set(.45+.08*Math.sin(e*1.3),.3*Math.sin(e*.7),.15*Math.sin(e*1.1));else{let o=Math.abs(Math.sin(e*5.2));n.position.set(0,.2+.22*o,0),n.rotation.set(-.25*o,0,0),this.patas.forEach((a,l)=>a.rotation.set((l<2?-.6:.6)*o,0,0)),this.cab.position.set(0,.12,.2),this.cab.rotation.set(-.15,0,0)}}},Fu=class{constructor(t=.1){this.c=t,this.nx=Math.ceil(We/t),this.nz=Math.ceil(Xe/t),this.b=new Uint8Array(this.nx*this.nz)}limpar(t=.24){this.b.fill(0);for(let e=0;e<this.nx;e++)for(let n=0;n<this.nz;n++){let i=(e+.5)*this.c,r=(n+.5)*this.c;(i<t||i>We-t||r<t||r>Xe-.12)&&(this.b[e+n*this.nx]=1)}}ret(t,e,n,i,r=.24){let o=this.c,a=Math.max(0,Math.floor((t-r)/o)),l=Math.min(this.nx-1,Math.floor((n+r)/o)),c=Math.max(0,Math.floor((e-r)/o)),h=Math.min(this.nz-1,Math.floor((i+r)/o));for(let f=a;f<=l;f++)for(let u=c;u<=h;u++){let d=(f+.5)*o,p=(u+.5)*o,v=Math.max(t-d,0,d-n),g=Math.max(e-p,0,p-i);v*v+g*g<=r*r&&(this.b[f+u*this.nx]=1)}}cel(t,e){return[_t(Math.floor(t/this.c),0,this.nx-1),_t(Math.floor(e/this.c),0,this.nz-1)]}livre(t,e){let[n,i]=this.cel(t,e);return!this.b[n+i*this.nx]}perto(t,e){if(this.livre(t,e))return[t,e];let[n,i]=this.cel(t,e);for(let r=1;r<Math.max(this.nx,this.nz);r++){let o=null,a=1e9;for(let l=n-r;l<=n+r;l++)for(let c=i-r;c<=i+r;c++){if(Math.max(Math.abs(l-n),Math.abs(c-i))!==r||l<0||c<0||l>=this.nx||c>=this.nz||this.b[l+c*this.nx])continue;let h=(l+.5)*this.c,f=(c+.5)*this.c,u=(h-t)**2+(f-e)**2;u<a&&(a=u,o=[h,f])}if(o)return o}return[t,e]}visivel(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),i=Math.ceil(n/(this.c*.4));for(let r=1;r<i;r++){let o=r/i;if(!this.livre(lt(t[0],e[0],o),lt(t[1],e[1],o)))return!1}return!0}caminho(t,e){let n=this.perto(t[0],t[1]),i=this.perto(e[0],e[1]),r=[e[0],e[1]];if(this.visivel(n,i))return(Math.hypot(n[0]-t[0],n[1]-t[1])>.02?[n]:[]).concat([i[0]!==e[0]||i[1]!==e[1]?i:r]);let o=this.nx,a=o*this.nz,[l,c]=this.cel(...n),[h,f]=this.cel(...i),u=new Float32Array(a).fill(1e9),d=new Int32Array(a).fill(-1),p=new Uint8Array(a),v=[],g=(_,E)=>{v.push([E,_]);let A=v.length-1;for(;A>0;){let C=A-1>>1;if(v[C][0]<=v[A][0])break;[v[C],v[A]]=[v[A],v[C]],A=C}},m=()=>{let _=v[0],E=v.pop();if(v.length){v[0]=E;let A=0;for(;;){let C=2*A+1,F=C+1,I=A;if(C<v.length&&v[C][0]<v[I][0]&&(I=C),F<v.length&&v[F][0]<v[I][0]&&(I=F),I===A)break;[v[I],v[A]]=[v[A],v[I]],A=I}}return _},b=(_,E)=>Math.hypot(_-h,E-f),S=l+c*o;u[S]=0,g(S,b(l,c));let x=!1;for(;v.length;){let[,_]=m();if(p[_])continue;p[_]=1;let E=_%o,A=_/o|0;if(E===h&&A===f){x=!0;break}for(let C=-1;C<=1;C++)for(let F=-1;F<=1;F++){if(!C&&!F)continue;let I=E+C,N=A+F;if(I<0||N<0||I>=o||N>=this.nz)continue;let B=I+N*o;if(this.b[B]||p[B]||C&&F&&(this.b[E+C+A*o]||this.b[E+(A+F)*o]))continue;let k=u[_]+(C&&F?1.4142:1);k<u[B]&&(u[B]=k,d[B]=_,g(B,k+b(I,N)))}}if(!x)return[i];let y=[];for(let _=h+f*o;_!==-1;_=d[_])y.push([(_%o+.5)*this.c,((_/o|0)+.5)*this.c]);y.reverse(),y[0]=n,y[y.length-1]=i;let M=[n],T=0;for(;T<y.length-1;){let _=y.length-1;for(;_>T+1&&!this.visivel(y[T],y[_]);)_--;M.push(y[_]),T=_}return M.shift(),Math.hypot(n[0]-t[0],n[1]-t[1])>.02&&M.unshift(n),i[0]===e[0]&&i[1]===e[1]&&(M[M.length-1]=r),M}},Tn={x0:5.8,x1:8,z0:3.85,z1:4.95,r:.03,y:.81},p_=["#F8FAFC","#FACC15","#1D4ED8","#DC2626","#7C3AED","#F97316","#16A34A","#7F1D1D","#111827","#FACC15"],Lu=class{constructor(t){this.cac=t.map(([e,n],i)=>({x:e,z:n,r:i<4?.058:.05})),this.bolas=this.rack(),this.intacto=!0,this.seq=0,this.planos=new Map}rack(){let t=Tn.r+8e-4,e=[7.45,4.4],n=[{n:0,x:6.35,z:4.4,em:!0}],i=[1,2,3,4,9,5,6,7,8],r=[1,2,3,2,1],o=0;return r.forEach((a,l)=>{for(let c=0;c<a;c++){let h=i[o++];n.push({n:h,x:e[0]+l*t*Math.sqrt(3),z:e[1]+(c-(a-1)/2)*2*t,em:!0})}}),n}copia(t){return t.map(e=>({...e}))}simular(t,e,n){let i=this.copia(t).map(m=>({...m,vx:0,vz:0,cai:-1,cx:0,cz:0})),r=Tn.r,o=1/240,a=.95,l=.8,c=.62,h=i.find(m=>m.n===0);h.vx=e,h.vz=n;let f=[],u=[],d=-1,p=0,v=()=>f.push(i.map(m=>[m.x,m.z,m.em?1:0,m.cai]));v();for(let m=0;m<2880;m++){let b=!1;for(let S of i){if(!S.em)continue;let x=Math.hypot(S.vx,S.vz);if(x<1e-4){S.vx=S.vz=0;continue}b=!0;let y=Math.max(0,x-c*o);S.vx*=y/x,S.vz*=y/x,S.x+=S.vx*o,S.z+=S.vz*o;let M=this.cac.find(T=>Math.hypot(S.x-T.x,S.z-T.z)<T.r);if(M){S.em=!1,S.cai=p,S.cx=M.x,S.cz=M.z,S.x=M.x,S.z=M.z,S.vx=S.vz=0,u.push(S.n);continue}S.x<Tn.x0+r&&(S.x=2*(Tn.x0+r)-S.x,S.vx=-S.vx*l,S.vz*=.96),S.x>Tn.x1-r&&(S.x=2*(Tn.x1-r)-S.x,S.vx=-S.vx*l,S.vz*=.96),S.z<Tn.z0+r&&(S.z=2*(Tn.z0+r)-S.z,S.vz=-S.vz*l,S.vx*=.96),S.z>Tn.z1-r&&(S.z=2*(Tn.z1-r)-S.z,S.vz=-S.vz*l,S.vx*=.96)}for(let S=0;S<i.length;S++)for(let x=S+1;x<i.length;x++){let y=i[S],M=i[x];if(!y.em||!M.em)continue;let T=M.x-y.x,_=M.z-y.z,E=Math.hypot(T,_);if(E>=2*r||E<1e-6)continue;let A=T/E,C=_/E,F=(y.vx-M.vx)*A+(y.vz-M.vz)*C;if(F>0){let N=F*(1+a)/2;y.vx-=N*A,y.vz-=N*C,M.vx+=N*A,M.vz+=N*C,d<0&&(y.n===0||M.n===0)&&(d=y.n===0?M.n:y.n)}let I=(2*r-E)/2+1e-5;y.x-=A*I,y.z-=C*I,M.x+=A*I,M.z+=C*I}if(p+=o,m%4===3&&v(),!b&&p>.3)break}v();let g=i.map(m=>({n:m.n,x:m.x,z:m.z,em:m.em}));return{quadros:f,final:g,caidas:u,primeiro:d,dur:p}}livre(t,e,n,i,r,o,a){let l=i-e,c=r-n,h=l*l+c*c||1;return t.every(f=>{if(!f.em||o.includes(f.n))return!0;let u=_t(((f.x-e)*l+(f.z-n)*c)/h);return Math.hypot(e+l*u-f.x,n+c*u-f.z)>a})}planejar(t,e=Math.random){let n=++this.seq,i=this.copia(this.bolas),r=!1;i.filter(M=>M.em&&M.n>0).length<3&&(i=this.rack(),r=!0);let a=r||this.intacto;this.intacto=!1;let l=i.find(M=>M.n===0);if(!l.em)for(l.em=!0,l.x=6.35,l.z=4.4;!this.livre(i,l.x,l.z,l.x,l.z,[0],2.2*Tn.r);)l.z+=.07;let c=Tn.r,h=null,f=(M,T=.92)=>{let _=[M[1],-M[0]];return[l.x-M[0]*T-_[0]*.13,l.z-M[1]*T-_[1]*.13]},u=M=>M[0]<5.55||M[0]>8.25||M[1]<3.6||M[1]>5.2,d=M=>[.92,.82,.72].find(T=>{let _=f(M,T);return u(_)&&t(_[0],_[1],Math.atan2(M[0],M[1]))}),p=M=>d(M)!=null,v=null;if(a){let M=i.find(E=>E.n===1),T=Math.atan2(M.z-l.z,M.x-l.x)+(e()-.5)*.02,_=[Math.cos(T),Math.sin(T)];p(_)&&(v={u:_,v:6.6+e()*.6,alvo:1,cacapa:-1,quebra:!0})}if(!v){let M=[];for(let _ of i)if(!(!_.em||_.n===0))for(let E=0;E<this.cac.length;E++){let A=this.cac[E],C=[A.x-_.x,A.z-_.z],F=Math.hypot(...C);if(F<.05)continue;let I=[C[0]/F,C[1]/F],N=[_.x-I[0]*2*c,_.z-I[1]*2*c],B=[N[0]-l.x,N[1]-l.z],k=Math.hypot(...B);if(k<.08)continue;let z=[B[0]/k,B[1]/k],Q=z[0]*I[0]+z[1]*I[1];if(Q<.42||E>=4&&Math.abs(I[1])<.82||!this.livre(i,l.x,l.z,N[0],N[1],[0,_.n],2*c+.004)||!this.livre(i,_.x,_.z,A.x,A.z,[_.n],2*c+.004)||!p(z))continue;let H=Q*2.2-k*.35-F*.45+e()*.5;M.push({u:z,nota:H,d1:k,dbp:F,cosc:Q,alvo:_.n,cacapa:E})}M.sort((_,E)=>E.nota-_.nota);let T=M[Math.floor(e()*Math.min(2,M.length))];T&&(v={u:T.u,v:_t(1.15+.85*(T.d1+T.dbp)/Math.max(T.cosc,.55),1.4,3.4),alvo:T.alvo,cacapa:T.cacapa})}if(!v){let M=i.filter(T=>T.em&&T.n>0).map(T=>{let _=Math.hypot(T.x-l.x,T.z-l.z);return{b:T,d:_,u:[(T.x-l.x)/_,(T.z-l.z)/_]}}).sort((T,_)=>T.d-_.d);for(let T of M)if(p(T.u)){v={u:T.u,v:2.2,alvo:T.b.n,cacapa:-1};break}if(!v)for(let T=0;T<Vt;T+=.2){let _=[Math.cos(T),Math.sin(T)];if(p(_)){v={u:_,v:1.8,alvo:-1,cacapa:-1};break}}v||(v={u:[-1,0],v:1.5,alvo:-1,cacapa:-1})}let g=v.quebra?0:e()<.3?(e()<.5?-1:1)*(.022+e()*.03):(e()-.5)*.008,m=Math.atan2(v.u[1],v.u[0])+g,b=[Math.cos(m),Math.sin(m)],S=this.simular(i,b[0]*v.v,b[1]*v.v),x=S.caidas.some(M=>M>0)&&!S.caidas.includes(0),y={id:n,pre:i,rack:r,u:b,jogada:v,sim:S,acertou:x,branca:S.caidas.includes(0),stance:f(b,d(b)??.92),yaw:Math.atan2(b[0],b[1]),tip:[l.x-b[0]*.035,l.z-b[1]*.035]};return this.planos.set(n,y),this.planos.size>6&&this.planos.delete(this.planos.keys().next().value),this.bolas=S.final,y}},ci=(s,t,e={})=>({tipo:"andar",vel:s,destinos:t,...e}),Ut=(s,t,e={})=>({tipo:"acao",dur:s,pose:t,...e}),yu=(s,t)=>(e,n,i)=>{let r=Ht(e),o=Hs(s(i),t(i),r);return o.lean+=.35*Math.sin(j*e),o},Mu=(s,t)=>(e,n,i)=>{let r=1-Ht(e),o=Hs(s(i),t(i),r);return o.lean+=.4*Math.sin(j*e),o},Du=4.05;function m_(s,t){let e=Ht(le(s,0,1))*(1-Ht(le(s,5,5.6))),n=0;return s>1.1&&s<3.5?n=.5-.5*Math.cos((s-1.1)*Vt*.75):s>=3.5&&s<3.85?n=Ht(le(s,3.5,3.85)):s>=3.85&&s<Du&&(n=1-Sc(le(s,3.85,Du))),Yt(t,{lean:.98*e,hz:-.15*e,nod:-.62*e,alt:.89-.1*e,lL:[.42*e,.36*e],lR:[-.14*e,.06*e],olhar:[0,-.4*e],boca:"foco",sob:"tenso",taco:e,recuo:n*e,twist:-.16*e,side:.05*e})}function ca(s,t){let e=Yt(t,{olhos:"F",boca:"aberta",boch:.8});if(e.abre=.6+.4*Math.abs(Math.sin(t*6)),s<.3){let n=Sc(le(s,0,.3));e.alt=.89-.12*n,e.lL=[.5*n,1*n],e.lR=[.5*n,1*n],e.aL=[.3*n,.4,.6],e.aR=[.3*n,.4,.6]}else if(s<.85){let n=le(s,.3,.85);e.dy=.55*4*n*(1-n);let i=Ec(le(s,.3,.45));e.aL=[lt(.3,2.9,i),.45,.2],e.aR=[lt(.3,2.9,i),.45,.2],e.lL=[.35*Math.sin(j*n),.8*Math.sin(j*n)],e.lR=[.35*Math.sin(j*n),.8*Math.sin(j*n)]}else if(s<1.05){let n=Math.sin(j*le(s,.85,1.05));e.alt=.89-.1*n,e.lL=[.4*n,.8*n],e.lR=[.4*n,.8*n],e.aL=[2.9,.45,.2],e.aR=[2.9,.45,.2]}else{let n=(s-1.05)/.62,i=Math.floor(n)%2?1:-1,r=n%1,o=Math.sin(j*r);e.dy=.08*o,e.side=i*.16*o,e.twist=i*.25*o,e.turn=-i*.3*o,e.roll=i*.15*o,e.aL=i>0?[2.8,.5,.3]:[1.2,-.1,1.6],e.aR=i>0?[1.2,-.1,1.6]:[2.8,.5,.3],e.lL=[i<0?.5*o:0,i<0?.9*o:.1],e.lR=[i>0?.5*o:0,i>0?.9*o:.1]}return e}var kr=(s,t,e={})=>{let n=Zt(s,0,t,.3),i=Math.abs(Math.sin(s*j/.42))*n;return{gestoR:n>.3?"punho":"",aR:[lt(0,2.55+.3*i,n),.25,lt(.2,.9-.5*i,n)],dy:.03*i,olhos:n>.5?"F":"A",boca:n>.3?"aberta":"sorriso",boch:.7,...e}},ha=s=>Yi(s,.62,{lean:-.1});function Fc(s,t,e={}){let n=Math.sin(t*.9)*.08+Math.sin(t*2.3)*.03,i=r=>Math.max(0,Math.sin(s*10+r))*.12;return Yi(s,.62,{lean:-.1+n*.3,side:n,nod:.15,turn:n*.6,aL:[.85+i(0),-.22,1.25],aR:[.85+i(2),-.22,1.25],...e})}var bu=(s,t)=>Ut(s,(e,n,i)=>{let r=0;for(let a of t)r=Math.max(r,Zt(n,a,a+1.3));let o=Fc(i,n,r>.3?{boca:"aberta",olhos:r>.5?"F":"A",boch:.15+.5*r,gestoR:"punho",gestoL:"aberta"}:{});return o.aR=o.aR.map((a,l)=>lt(a,[2.7,.5,.4][l],r)),o.aL=o.aL.map((a,l)=>lt(a,[2.5,.55,.5][l],r)),o.lean-=.08*r,o.nod-=.25*r,o.dy=.04*r*Math.abs(Math.sin(n*9)),o},{tv:"jogo",vibras:t,props:{controle:"LR"},foco:()=>yt(3.2,1.45,.12)}),gd=s=>Ut(1.6,(t,e,n)=>{let i=Zt(e,0,1.15,.4),r=s.casaDe("controle").pos,o=Hs(ha(n),Fc(n,0),Ht(le(e,.75,1.6)));return o.ikR=[r.x,r.y+.035,r.z],o.kR=i,o.oriR="baixo",o.lean+=.12*i,o.turn+=.4*i,o.olhar=[.8*i,.8*i],o},{props:{controle:(t,e)=>e<.6?"casa":"LR"}}),xd=s=>Ut(1.5,(t,e,n)=>{let i=Zt(e,.15,1.5,.4),r=s.casaDe("controle").pos,o=Hs(Fc(n,0),ha(n),Ht(le(e,0,.6)));return o.ikR=[r.x,r.y+.035,r.z],o.kR=i,o.oriR="baixo",o.lean+=.12*i,o.turn+=.4*i,o.olhar=[.8*i,.8*i],o},{props:{controle:(t,e)=>e<.8?"LR":"casa"}}),g_=()=>Ut(1.5,(s,t,e)=>Yt(e,{taco:lt(-1,0,Ht(le(t,.2,1.2))),lean:.12*Zt(t,0,1.5,.4),boca:"leve"})),x_=()=>Ut(1.6,(s,t,e)=>Yt(e,{taco:lt(0,-1,Ht(le(t,.3,1.3))),lean:.15*Zt(t,0,1.6,.4)})),vd={tranquilo:(s,t,e=0)=>{let n=Ut(1.3,Mu(a=>Yt(a),ha),{ate:s.sofaP}),i=Ut(1.3,yu(a=>Yt(a),ha),{ate:s.sofaS}),o=e%2===0?[bu(13+e%3*2,[5.2,10.6]),xd(t),n,Ut(2.8,(a,l,c)=>{let h=Zt(l,.1,2.7,.6);return Yt(c,{aL:[2.95*h,.25,.3],aR:[2.95*h,.25,.3],lean:-.12*h,side:Math.sin(l*2.2)*.12*h,nod:-.2*h,olhos:h>.5?"Z":"A",boca:h>.5?"o":"leve",dy:.03*h})}),ci(1.15,[s.cafeP]),Ut(5.6,(a,l,c)=>{let h=t.casaDe("xicara").pos,f=t.bico(),u=Zt(l,0,5.3,.45),d=Ht(le(l,.9,1.7)),p=Ht(le(l,4.3,5.3)),v=h.clone().add(yt(0,.06,0)).lerp(f,d),g=t.botaoCafe(),m=Zt(l,1.9,2.9,.25);return Yt(c,{ikR:[v.x,v.y,v.z],kR:u*(1-p),aR:[.6,-.25,1.75],ikL:[g.x+.012-.012*Math.max(0,Math.sin((l-2.1)*9)),g.y,g.z],kL:m,gestoL:m>.2?"aponta":"",oriL:m>.2?[-1,-.25,.1]:null,lean:.14*u,nod:.28,olhar:[0,1]})},{ate:s.cafeP,props:{xicara:(a,l)=>l<.75?"casa":"R"},fx:"cafe",foco:a=>a.bico()}),Ut(4.4,(a,l,c)=>{let h=Zt(l,.6,1.8,.35)+Zt(l,2.6,3.7,.35);return Yt(c,{aR:[.6+.75*h,-.25,1.75+.4*h],gole:h,nod:-.25*h,olhos:h>.5?"Z":"A",boca:h>.5?"reta":"sorriso",boch:.35})},{fx:"gole",props:{xicara:"R"}}),Ut(1.6,(a,l,c)=>{let h=t.casaDe("xicara").pos,f=Zt(l,0,1.6,.45);return Yt(c,{ikR:[h.x,h.y+.06,h.z],kR:f,aR:[.6,-.25,1.75],lean:.14*f,nod:.25})},{props:{xicara:(a,l)=>l<.85?"R":"casa"}}),ci(1.1,[s.sofaP]),i,gd(t)]:[bu(9+e%3*2,[3.4]),Ut(6.5,(a,l,c)=>{let h=Zt(l,0,6.5,.9),f=Fc(c,l*.3,{boca:"sorriso",boch:.3});return f.lean-=.22*h,f.nod-=.15*h,f.lL=f.lL.map((u,d)=>lt(u,[.95,.5][d],h)),f.lR=f.lR.map((u,d)=>lt(u,[.9,.45][d],h)),f.aL=f.aL.map((u,d)=>lt(u,[.5,-.05,.6][d],h)),f.aR=f.aR.map((u,d)=>lt(u,[.65,-.1,.9][d],h)),f.olhos=l>2&&l<4.4?"Z":"A",f},{props:{controle:"LR"},foco:()=>yt(3.2,1.45,.12)}),bu(8,[4.4])];return{inicio:s.sofaS,aprox:s.sofaP,sentado:!0,sentPose:ha,padrao:{boca:"leve",boch:.15},passos:o,entrada:[i,gd(t)],saida:[xd(t),n]}},feliz:(s,t,e=0,n="")=>{let i=t.planoSinuca(n||String(e)),r=i.id,o=i.lugar,a=h=>h+"|"+r,l=h=>h.pto("sinuca",i.tip[0]+i.u[0]*.4,.81,i.tip[1]+i.u[1]*.4),c=[ci(1.15,[o],{taco:0,bolas:a("pre")}),Ut(.45,(h,f,u)=>Yt(u,{taco:0}),{ate:o,bolas:a("pre")})];if(i.rack&&c.push(Ut(2.6,(h,f,u)=>{let d=Zt(f,.1,2.5,.5);return Yt(u,{taco:0,lean:.55*d,nod:.3*d,olhar:[0,-1.4],aL:[lt(.2,1.25,d),.15+.2*Math.sin(f*5)*d,lt(.3,.6,d)],boca:"leve"})},{bolas:a("rack"),foco:l})),e%3===1?c.push(Ut(2.2,(h,f,u)=>{let d=Zt(f,.1,2.1,.4),p=Math.sin(f*9)*.12*d;return Yt(u,{taco:0,aL:[lt(.2,2.2,d),lt(.12,-.55,d)+p,lt(.2,1.5,d)],gestoL:d>.4?"pinca":"",nod:-.15*d,turn:.3*d,olhar:[.6*d,.4*d],boca:"foco"})},{bolas:a("pre")})):c.push(Ut(1.6+e%2*.8,(h,f,u)=>Yt(u,{taco:0,nod:.28,lean:.12,olhar:[.5*Math.sin(f*1.3),-1.2],boca:"foco",sob:"tenso"}),{bolas:a("pre"),foco:l})),c.push(Ut(5.6,(h,f,u)=>m_(f,u),{bolas:a("jogo"),foco:l})),i.acertou){let h=e%3;h===0?c.push(Ut(2.8,(f,u,d)=>{let p=kr(u,2.8);return Yt(d,{...p,taco:0,aL:p.aR,aR:void 0,gestoL:p.gestoR,gestoR:""})},{bolas:a("pos")})):h===1?c.push(Ut(2.6,(f,u,d)=>{let p=Zt(u,.1,2.5,.35);return Yt(d,{taco:0,aL:[lt(.2,1.55,p),lt(.12,-.25,p),lt(.2,.15,p)],gestoL:p>.3?"aponta":"",turn:.35*p,olhos:"F",boca:"aberta",boch:.6,dy:.02*Math.abs(Math.sin(u*7))*p})},{bolas:a("pos")})):c.push(Ut(2.6,(f,u,d)=>{let p=Zt(u,.1,2.5,.35);return Yt(d,{taco:0,aL:[lt(.2,.9,p),.2,lt(.2,1.7,p)],gestoL:p>.3?"joinha":"",nod:-.08*p,olhos:"F",boca:"sorriso",boch:.6,side:.06*Math.sin(u*4)*p})},{bolas:a("pos")}))}else e%2===0?c.push(Ut(2.8,(f,u,d)=>{let p=Zt(u,.15,2.6,.4);return Yt(d,{taco:0,aL:[lt(.2,2.75,p),lt(.12,-.35,p),lt(.2,2.35,p)],nod:-.22*p+.12*Math.sin(u*3)*p,lean:-.08*p,boca:"o",sob:"triste",olhos:"A"})},{bolas:a("pos")})):c.push(Ut(2.4,(f,u,d)=>{let p=Zt(u,.1,2.3,.4);return Yt(d,{taco:0,turn:.22*Math.sin(u*7)*p,nod:.2*p,boca:"reta",sob:"tenso",aL:[lt(.2,.5,p),.35,lt(.2,1.2,p)]})},{bolas:a("pos")}));return{inicio:o,aprox:o,sentado:!1,deAtual:!0,padrao:{boca:"sorriso",boch:.35},passos:c,entrada:[g_()],saida:[x_()]}},euforico:(s,t,e=0)=>({inicio:s.danca,aprox:s.danca,sentado:!1,padrao:{olhos:"F",boch:.8},entrada:[],saida:[],passos:[Ut(3.6,(n,i,r)=>ca(i,r),{fx:"globo"}),Ut(3.4,(n,i,r)=>ca(i,r),{fx:"globo"}),Ut(2.2,(n,i,r)=>{let o=Sc(n),a=Yt(r,{aL:[1.5,1.2,.2],aR:[1.5,1.2,.2],boca:"aberta",olhos:"F",boch:.8});return a.yawAdd=o*Vt,a.dy=.12*Math.sin(j*n),a}),Ut(5.2,(n,i,r)=>{let o=Zt(i,0,.8,.25),a=t.bolso("L"),l=Math.max(0,i-.8),c=l%1.1/1.1,h=i<.8?0:c<.55?Sc(c/.55):1-Ec((c-.55)/.45),f=Yt(r,{aL:[.5*Ht(le(i,.4,.9)),.2,1.3*Ht(le(i,.4,.9))],ikL:[a.x,a.y,a.z],kL:o,aR:[lt(.3,2.8,h),.15,lt(1.4,.2,h)],lean:-.08*h,nod:-.15*h,dy:.05*h,boca:"aberta",olhos:"F",boch:.8});return f.solta=i>.8&&c>.5&&c<.6?Math.floor(l/1.1)+1:0,f},{props:{maco:(n,i)=>i<.45||i>5?"casa":"L",nota:(n,i)=>{let r=Math.max(0,i-.8)%1.1/1.1;return i>.8&&i<4.9&&r<.5?"R":"casa"}}}),ci(2.2,[s.monP],{estilo:"corre"}),Ut(3.4,(n,i,r)=>{let o=i%.85/.85,a=Math.sin(j*o);return Yt(r,{dy:.35*a,aL:[2.9,.4,.2],aR:[2.9,.4,.2],lL:[.3*a,.7*a],lR:[.3*a,.7*a],boca:"aberta",olhos:"F"})},{ate:s.monP,foco:n=>n.pto("mesa",6.8,1.14,.22),semPeso:!0}),ci(2.2,[s.danca],{estilo:"corre"}),Ut(5,(n,i,r)=>ca(1.05+i%2.48,r),{ate:s.danca,fx:"globo"})]}),preocupado:(s,t,e=0)=>{let n=l=>Yi(l,.6,{lean:.22}),i=Ut(1.3,Mu(l=>Yt(l),n),{ate:s.cadP}),r=Ut(1.3,yu(l=>Yt(l),n),{ate:s.cadS}),a=[(l=>Ut(l,(c,h,f)=>{let u=Zt(h,3,5.6,.6),d=Zt(h,6.6,7.9,.3),p=Ht(le(h,0,.9))*(1-Ht(le(h,l-.9,l))),v=Math.max(0,Math.sin(f*14))*.025,g=Math.max(0,Math.sin(f*14+2.2))*.025,m=t.teclado(),b=Math.sin(f*3.1)*.03;return Yi(f,.6,{lean:.22+.14*u*p,nod:.08+.06*Math.sin(h*1.7)-.1*u,hz:.02,ikL:[m.L.x+b,m.L.y+v,m.L.z],kL:p,ikR:[m.R.x-b,m.R.y+g,m.R.z],kR:p*(1-d),oriL:"baixo",oriR:"baixo",aR:[lt(.6,2.3,d),lt(-.08,.6,d),lt(1,2.4+.15*Math.sin(f*16),d)],item:p>.3?"tecla":"",olhar:[.3*Math.sin(h*2),-.6]})},{mon:"foco",foco:c=>c.pto("mesa",6.8,1.14,.22)}))(9+e%2*3),Ut(3.6,(l,c,h)=>{let f=Zt(c,0,3.6,.6),u=Math.sin(h*9)*.12*f;return Yi(h,.6,{lean:.22-.3*f,nod:-.1*f,turn:u,aL:[lt(.62,2.5,f),lt(-.08,.7,f),lt(.98,2.3,f)],aR:[lt(.6,2.5,f),lt(-.08,.7,f),lt(1,2.3,f)],balao:Zt(c,.3,3.4,.3),balaoT:"smiley-nervous",boca:"o",abre:.4})})];return e%2===0?a.push(i,ci(.85,[s.ritmo1,s.ritmo2,s.cadP],{pensativo:!0}),Ut(3.4,(l,c,h)=>{let f=Zt(c,.1,3.3,.4),u=Math.sin(j*le(c,.8,2.2));return Yt(h,{aR:[lt(0,1.3,f),-.25,lt(.2,2.2,f)],alt:.89-.02*u,nod:.25*f,lean:.06*u,olhos:u>.6?"Z":"A",boca:"triste",sob:"triste",balao:Zt(c,.6,3),balaoT:"chart-line-down"})},{ate:[s.cadP[0],s.cadP[1],s.cadP[2]+j*.3]}),Ut(.8,(l,c,h)=>Yt(h),{ate:s.cadP}),r):a.push(Ut(4,(l,c,h)=>{let f=Zt(c,0,4,.6);return Yi(h,.6,{lean:.22-.25*f,nod:-.2*f,turn:.5*Math.sin(c*1.2)*f,olhar:[Math.sin(c*1.2)*1.2*f,-.5],boca:"foco"})})),{inicio:s.cadS,aprox:s.cadP,sentado:!0,sentPose:n,padrao:{sob:"tenso",boca:"foco"},passos:a,entrada:[r],saida:[i]}},triste:(s,t,e=0)=>{let n=l=>Yi(l,.6,{lean:.32,nod:.35,aL:[.72,-.1,1.05],aR:[.72,-.1,1.05]}),i=l=>Yt(l,{lean:.12,nod:.3}),r=Ut(1.6,Mu(i,n),{ate:s.polP}),o=Ut(1.6,yu(i,n),{ate:s.polS}),a=[Ut(11.5,(l,c,h)=>{let f=Zt(c,.2,4.6,.6),u=Math.sin(j*le(c,5.2,6.8)),d=Zt(c,7.2,11.2,.6);return Yi(h,.6,{lean:.32+.25*f-.12*d+.04*u,nod:.35+.25*f-.3*d,turn:-.5*d,aL:[lt(.72,1.55,f),lt(-.1,-.32,f),lt(1.05,2.45,f)],aR:[lt(.72,1.55,f),lt(-.1,-.32,f),lt(1.05,2.45,f)],olhos:f>.5?"Z":"A",olhar:d>.3?[-1.4,-.6]:[0,1.2],dy:-.01*u})})];return e%2===0?a.push(r,ci(.62,[s.janP],{estilo:"triste"}),Ut(9.5,(l,c,h)=>{let f=Zt(c,.8,7.8,.6),u=Math.sin(j*le(c,3.6,5.2)),d=Zt(c,5.6,7.4,.5);return Yt(h,{aL:[lt(0,1.75,f),-.1*f,lt(.2,.55,f)],alt:.89-.02*u,lean:.06+.1*d,nod:.1+.3*d-.1*f,side:-.05*d,olhar:[0,-.5]})},{ate:s.janP,foco:()=>yt(-1.2,1.5,1.8)}),ci(.62,[s.polP],{estilo:"triste"}),Ut(.6,(l,c,h)=>i(h),{ate:s.polP}),o):a.push(Ut(7,(l,c,h)=>{let f=Math.sin(j*le(c,1.5,3.5));return Yi(h,.6,{lean:.32+.08*f,nod:.35-.2*Zt(c,3.8,6.6,.6),turn:-.6*Zt(c,3.8,6.6,.6),aL:[.72,-.1,1.05],aR:[.72,-.1,1.05],olhar:[-1.4,-.4],olhos:f>.6?"Z":"A"})})),{inicio:s.polS,aprox:s.polP,sentado:!0,sentPose:n,padrao:{sob:"triste",boca:"triste",nuvem:1,lagrima:1},passos:a,entrada:[o],saida:[r]}}},ra={cachorro:{humores:["triste","preocupado","tranquilo","feliz","euforico"],ic:"dog",lugar:s=>s.lugar("cachorro",[1.35,5.42,0]),passos:s=>[Ut(1.4,(t,e,n)=>Yt(n,{nod:.35,olhar:[0,1.2],boca:"sorriso",boch:.3}),{fx:"caoVem"}),Ut(5.2,(t,e,n)=>{let i=Zt(e,0,5.2,.7),r=s.alvoCao(),o=Math.sin(e*5)*.06;return bc(n,i,{ikR:[r.x+o,r.y+.13,r.z],kR:i,oriR:"baixo",gestoR:"carinho",nod:.3*i,boca:"sorriso",olhos:e>2?"F":"A",boch:.5,olhar:[0,1]})},{fx:"caoCarinho"}),Ut(1.2,(t,e,n)=>Yt(n,{...kr(e,1.2)}),{fx:"caoCarinho"})]},aquario:{humores:["preocupado","tranquilo","feliz","euforico"],ic:"fish",lugar:s=>s.lugar("aquario",[.98,6.835,-j/2]),passos:s=>[Ut(1,(t,e,n)=>Yt(n,{nod:.2,olhar:[0,.6]})),Ut(4.6,(t,e,n)=>{let i=Zt(e,0,4.6,.6),r=s.pto("aquario",.35,1.38,6.835),o=Math.sin(n*18)*.02*le(e,1,1.4)*(1-le(e,3.4,3.8));return Yt(n,{ikR:[r.x+o,r.y,r.z],kR:i,oriR:"baixo",lean:.12*i,nod:.3*i,mR:.3+.4*Math.abs(Math.sin(n*12))*i,boca:"sorriso",olhar:[0,1]})},{fx:"racao"}),Ut(1.6,(t,e,n)=>Yt(n,{boca:"sorriso",olhos:"F",boch:.5,nod:.1}))]},fliperama:{humores:["tranquilo","feliz","euforico"],ic:"joystick",lugar:s=>s.lugar("fliperama",[5.29,1.42,j]),passos:s=>[Ut(7,(t,e,n)=>{let i=Zt(e,0,7,.6),[r,o]=s.alvoArcade(),a=Math.max(0,Math.sin(n*13))*.02;return Yt(n,{ikL:[r.x,r.y,r.z],kL:i,ikR:[o.x,o.y-a,o.z],kR:i,oriL:"baixo",oriR:"baixo",lean:.1*i,nod:-.05+.04*Math.sin(n*6),side:.03*Math.sin(n*3),boca:"foco",olhar:[0,-.3],mL:.9*i})},{fx:"arcade"}),Ut(1.8,(t,e,n)=>{let i=Zt(e,0,1.8,.3);return Yt(n,{aL:[2.8*i,.4,.3],aR:[2.8*i,.4,.3],dy:.1*Math.abs(Math.sin(e*7))*i,boca:"aberta",olhos:"F",boch:.8})})]},touro:{humores:["tranquilo","feliz","euforico"],ic:"cow",lugar:s=>{let t=s.alvoTouro(),e=s.lugar("touro",[5.4,6.75]);return[e[0],e[1],la(e,[t.x,t.z])]},passos:s=>[Ut(3.6,(t,e,n)=>{let i=Zt(e,0,3.6,.6),r=s.alvoTouro(),o=Math.sin(e*6)*.05;return Yt(n,{ikR:[r.x+o,r.y+.06,r.z+o*.5],kR:i,oriR:"baixo",gestoR:"carinho",lean:.18*i,boca:"sorriso",olhos:e>1.5?"F":"A",boch:.45})}),Ut(2,(t,e,n)=>Yt(n,{...kr(e,2)}))]},cofre:{humores:["preocupado","tranquilo","feliz","euforico"],ic:"vault",lugar:s=>s.lugar("cofre",[7.62,1.63,j/2]),passos:s=>[Ut(1.8,(t,e,n)=>{let i=Ht(le(e,0,.8)),r=s.alvoCofre();return bc(n,.55*i,{ikR:[r.x,r.y,r.z],kR:i,porta:1.9*Ht(le(e,.9,1.8)),boca:"o",abre:.4})},{fx:"cofre"}),Ut(2,(t,e,n)=>{let i=Zt(e,0,1.4,.4),r=s.pto("cofre",8.54,.2,1.75);return bc(n,.55*(1-Ht(le(e,1,2))),{ikR:[r.x,r.y,r.z],kR:i,aR:[1,-.1,1.5],porta:1.9,boca:"sorriso",olhos:"F",boch:.6})},{fx:"cofre",props:{moeda:(t,e)=>e<.75?"casa":"R"}}),Ut(1.8,(t,e,n)=>Yt(n,{aR:[1,-.1,1.5],porta:1.9,olhar:[0,-1.6*Zt(e,.2,1.4)],nod:-.35*Zt(e,.2,1.4),boca:"aberta",olhos:"A",fxk:le(e,.15,1.35),mR:.2}),{fx:"cofre",props:{moeda:(t,e)=>e<.15||e>1.35?"R":"joga"}}),Ut(1.9,(t,e,n)=>{let i=Zt(e,0,1.9,.5),r=s.pto("cofre",8.54,.2,1.75);return bc(n,.55*i,{ikR:[r.x,r.y,r.z],kR:i*le(e,.2,.6),aR:[1,-.1,1.5],porta:1.9*(1-Ht(le(e,1,1.8))),boca:"sorriso"})},{fx:"cofre",props:{moeda:(t,e)=>e<.75?"R":"casa"}})]},trofeu:{humores:["tranquilo","feliz","euforico"],ic:"trophy",lugar:s=>s.lugar("trofeu",[7.98,2.6,j/2]),passos:s=>[Ut(1.2,(t,e,n)=>{let i=Ht(t),r=s.alvoTrofeu();return Yt(n,{ikL:[r.L.x,r.L.y,r.L.z],kL:i,ikR:[r.R.x,r.R.y,r.R.z],kR:i,lean:.15*i,boca:"o",fxk:t})},{fx:"trofeuPega"}),Ut(3,(t,e,n)=>{let i=Zt(e,0,3,.7),r=Yt(n,{aL:[lt(.6,2.85,i),.35,.5],aR:[lt(.6,2.85,i),.35,.5],dy:.04*Math.abs(Math.sin(e*6))*i,boca:"aberta",olhos:"F",boch:.8,nod:-.25*i});return r.olhar=[0,-1.5*i],r},{fx:"trofeu"}),Ut(1.2,(t,e,n)=>{let i=1-Ht(t),r=s.alvoTrofeu(!0);return Yt(n,{ikL:[r.L.x,r.L.y,r.L.z],kL:i,ikR:[r.R.x,r.R.y,r.R.z],kR:i,lean:.15*i,boca:"sorriso",fxk:t})},{fx:"trofeuSolta"})]},porquinho:{humores:["preocupado","tranquilo","feliz","euforico"],ic:"piggy-bank",lugar:s=>s.lugar("mesa",[7.55,1.22,j]),passos:s=>[Ut(1.3,(t,e,n)=>{let i=s.bolso("R"),r=Zt(e,0,.95,.3);return Yt(n,{ikR:[i.x,i.y,i.z],kR:r,aR:[.5,-.1,1.3],nod:.25,olhar:[0,1]})},{props:{moeda:(t,e)=>e<.55?"casa":"R"}}),Ut(1.9,(t,e,n)=>{let i=Zt(e,0,1.9,.4),r=s.alvoPorco();return Yt(n,{ikR:[r.x,r.y+.1,r.z],kR:i,oriR:"baixo",aR:[.5,-.1,1.3],lean:.25*i,nod:.35,olhar:[0,1],boca:"sorriso"})},{fx:"porco",props:{moeda:(t,e)=>e<.9?"R":e<1.15?"cofrinho":"casa"}}),Ut(1.4,(t,e,n)=>Yt(n,{...kr(e,1.4)}))]},neon:{humores:["tranquilo","feliz","euforico"],ic:"currency-btc",lugar:()=>[1.55,6.6,-j/2],passos:s=>[Ut(5.6,(t,e,n)=>{let i=s.bolso("R"),r=Zt(e,0,.8,.25)+Zt(e,4.7,5.6,.25),o=Zt(e,.5,5,.5),a=Zt(e,2.6,4.4,.3);return Yt(n,{ikR:[i.x,i.y,i.z],kR:r,aR:[lt(0,1.05,o),-.25,lt(.2,2,o)],aL:[.3*o,-.2,.9*o],nod:lt(.35,-.3,a)*o,olhar:[0,lt(1,-1.2,a)],boca:a>.5?"sorriso":"foco",boch:.3})},{props:{celular:(t,e)=>e<.45||e>5.2?"casa":"R"}}),Ut(1.4,(t,e,n)=>Yt(n,{...kr(e,1.4)}))]},arcoiris:{humores:["tranquilo","feliz","euforico"],ic:"rainbow",lugar:()=>[3.2,.95,j],passos:()=>[Ut(3.2,(s,t,e)=>{let n=Zt(t,0,3.2,.6);return Yt(e,{aL:[2.2*n,.5,1.2*n],aR:[2.2*n,.5,1.2*n],nod:-.4*n,olhar:[0,-1.4],boca:"sorriso",olhos:"F",boch:.6})}),Ut(1.8,(s,t,e)=>{let n=Math.abs(Math.sin(t*9));return Yt(e,{aL:[1.2,-.25-.25*n,1.6],aR:[1.2,-.25-.25*n,1.6],boca:"aberta",olhos:"F",boch:.7})})]},dardos:{humores:["tranquilo","feliz","euforico","preocupado"],ic:"target",lugar:()=>[2.45,5.95,-j/2],passos:s=>{let t=s.planejarDardos();return[Ut(1.1,(e,n,i)=>{let r=s.bolso("L"),o=Zt(n,0,.8,.25);return Yt(i,{ikL:[r.x,r.y,r.z],kL:o,aL:[.55*Ht(le(n,.5,1.1)),.05,1.2*Ht(le(n,.5,1.1))],olhar:[0,-.2]})},{props:{aljava:(e,n)=>n<.5?"casa":"L"}})].concat([0,1,2].map(e=>Ut(1.7,(n,i,r)=>{let o=Zt(i,0,.42,.14),a=s.boneco.mL,l=Ht(le(i,.3,.8)),c=Ht(le(i,.8,1.02)),h=Ht(le(i,1.2,1.7)),f=[.45,-.1,1.3],u=[1.75,-.1,2.35],d=[1.35,-.1,.25],p=i<.8?f.map((v,g)=>lt(v,u[g],l)):i<1.2?u.map((v,g)=>lt(v,d[g],c)):d.map((v,g)=>lt(v,f[g],h));return Yt(r,{aR:p,ikR:[a.x,a.y+.02,a.z],kR:o,aL:[.55,.05,1.2],twist:-.15*l+.25*c-.1*h,lean:.06*c,boca:"foco",olhar:[0,-.2],lL:[.18*l,.1],fxk:e+(i>=.92?.5:0)})},{fx:"dardo",props:{dardo:(n,i)=>i<.25||i>=.92?"casa":"R",aljava:"L"}}))).concat([t.ruim?Ut(2,(e,n,i)=>{let r=Zt(n,.1,1.9,.35);return Yt(i,{aR:[lt(.2,.7,r),.3,lt(.2,1.6,r)],gestoR:"aberta",aL:[.55*(1-Ht(le(n,0,.6))),.05,1.2*(1-Ht(le(n,0,.6)))],turn:.18*Math.sin(n*6)*r,boca:"reta",sob:"tenso"})},{fx:"dardo",props:{aljava:"casa"}}):Ut(t.mosca?2.2:1.6,(e,n,i)=>Yt(i,{...kr(n,t.mosca?2.2:1.6),dy:t.mosca?.07*Math.abs(Math.sin(n*8))*Zt(n,0,2.2,.3):0,aL:[.55*(1-Ht(le(n,0,.6))),.05,1.2*(1-Ht(le(n,0,.6)))]}),{fx:"dardo",props:{aljava:"casa"}})])}},globo:{humores:["tranquilo","feliz","euforico"],ic:"disco-ball",lugar:s=>s.lugares().danca,passos:()=>[Ut(6.2,(s,t,e)=>ca(t%3.1+(t>3.1?1.05:0),e),{fx:"globo"})]}},v_=s=>[Ut(2.6,(t,e,n)=>{let i=Zt(e,0,2.6,.3);return Yt(n,{aL:[1.9*i,-.45,2.3*i],aR:[1.9*i,-.45,2.3*i],boca:"o",abre:.9,olhos:"A",boch:.6,balao:Zt(e,.1,2.5,.3),balaoT:s,dy:.05*Math.sin(j*le(e,0,.4))})},{fx:"novidade"}),Ut(1.7,(t,e,n)=>ca(e,n))],Su={chao:["#FFFFFF","#9C7356","#C9C9C9","#E3B49A","#B8C4D6","#6B5D53"],parede:["#EEF1F6","#F5EBDD","#DDE9DD","#DCE6F2","#F2DEDE","#FFF4CC","#E7DDF2","#3B4252"],sofa:["#0F766E","#1E3A8A","#7F1D1D","#374151","#92400E","#6D28D9","#A8A29E","#166534"],poltrona:["#B45309","#1E3A8A","#7F1D1D","#374151","#0F766E","#BE185D","#A8A29E","#CA8A04"]};function nb(s,t){return new Nu(s,t)}var oa=(s,t,e)=>[s*Math.cos(e)+t*Math.sin(e),-s*Math.sin(e)+t*Math.cos(e)];function Cc(s){let t=[];for(let[e,n]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let[i,r]=oa(e*s.h[0],n*s.h[1],s.r);t.push([s.c[0]+i,s.c[1]+r])}return t}function Eu(s,t,e=0){let n=[s,t].flatMap(o=>[[Math.cos(o.r),-Math.sin(o.r)],[Math.sin(o.r),Math.cos(o.r)]]),i=Cc(s),r=Cc(t);for(let[o,a]of n){let l=1e9,c=-1e9,h=1e9,f=-1e9;for(let[u,d]of i){let p=u*o+d*a;l=Math.min(l,p),c=Math.max(c,p)}for(let[u,d]of r){let p=u*o+d*a;h=Math.min(h,p),f=Math.max(f,p)}if(c-e<=h||f-e<=l)return!1}return!0}var Nu=class{constructor(t,e){this.el=t,this.d={};let n=this.renderer=new jo({antialias:!0,alpha:!0,powerPreference:"high-performance"});this.pr=Math.min(window.devicePixelRatio||1,2),n.setPixelRatio(this.pr),n.outputColorSpace=hn,n.toneMapping=fs,n.toneMappingExposure=1,n.shadowMap.enabled=!0,n.shadowMap.type=hs,n.domElement.className="of-canvas",n.domElement.setAttribute("role","img"),t.appendChild(n.domElement);let i=this.scene=new ns,r=new Bs(n);i.environment=r.fromScene(new $o,.04).texture,i.environmentIntensity=.32,this.cam=new en(30,1,.1,80),this.az=j/4,this.el_=.5,this.camModo="sala",this.camAtual=null,this.tAnt=performance.now(),this.t0=performance.now(),this.notas=[],this.hist=[],this.feed=[],this.flash={},this.fx=[],this.moveis={},this.fixos=[],this.nav=new Fu,this.construir(),this.prepararAO(),this.boneco=new wc(e.cor,e.icone,e.boneco,e.acessorio),i.add(this.boneco.root),i.add(this.boneco.blob),this.cao=new Iu,i.add(this.cao.g),this.filtro=new Ac,this.vida=new Rc,this.vistos=this.lerVistos(),window.__ofDebug&&(window.__ofDebug=this),this.ligarControles(),this.ro=new ResizeObserver(()=>this.redimensionar()),this.ro.observe(t),this.redimensionar(),this.aplicarLayout(e.layout,!0),this.atualizar(e),this.reduz=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,this.laco=this.laco.bind(this),this.raf=requestAnimationFrame(this.laco)}prepararAO(){if(!((window.matchMedia&&window.matchMedia("(pointer: coarse)").matches||(navigator.hardwareConcurrency||4)<4||window.__ofSemAO)&&!window.__ofComAO))try{let e=this.renderer,n=new Je(4,4,{type:an,samples:4}),i=this.composer=new gc(e,n);i.addPass(new xc(this.scene,this.cam));let r=this.aoPass=new na(this.scene,this.cam,4,4);r.updateGtaoMaterial({radius:.9,distanceExponent:1.3,thickness:2.2,scale:1.45,samples:12,distanceFallOff:1,screenSpaceRadius:!1}),r._overrideVisibility=function(){let c=this._visibilityCache;this.scene.traverse(h=>{if(!h.visible)return;let f=h.material;(h.isPoints||h.isLine||h.isSprite||h.isInstancedMesh||h.isMesh&&f&&(f.transparent||f.isMeshBasicMaterial||f.isShadowMaterial))&&(h.visible=!1,c.push(h))})},r.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),r.blendIntensity=1;let o=(navigator.hardwareConcurrency||4)>=8,a=o?.75:.5,l=r.setSize.bind(r);r.setSize=(c,h)=>l(Math.max(2,c*a|0),Math.max(2,h*a|0)),i.addPass(r),i.addPass(new yc),this.ao=!0}catch(e){console.warn("Oclus\xE3o de ambiente indispon\xEDvel:",e),this.composer=null,this.ao=!1}}movel(t,e,n,i={}){let r=new wt;r.position.set(e[0],0,e[1]),this.scene.add(r);let o=new wt;return o.position.set(-e[0],0,-e[1]),r.add(o),this.moveis[t]={id:t,outer:r,inner:o,P:e,caixas:n,x:e[0],z:e[1],ri:0,piso:!!i.piso,nome:i.nome||t,decor:i.decor||null},o}pedaco(t,e,n,i=0){let r=new wt;r.position.set(n[0],0,n[1]),r.rotation.y=i,t.add(r);let o=new wt;return o.position.set(-e[0],0,-e[1]),r.add(o),o}giro(t,e=t.ri){return e*j/4}lugar(t,e){let n=this.moveis[t];if(!n)return e.slice();let i=this.giro(n),[r,o]=oa(e[0]-n.P[0],e[1]-n.P[1],i);return e.length>2?[n.x+r,n.z+o,e[2]+i]:[n.x+r,n.z+o]}pto(t,e,n,i){let r=this.lugar(t,[e,i]);return yt(r[0],n,r[1])}caixasDe(t,e=t.x,n=t.z,i=t.ri){let r=i*j/4;return t.caixas.map(o=>{let[a,l]=oa(o.c[0]-t.P[0],o.c[1]-t.P[1],r);return{c:[e+a,n+l],h:o.h,r:(o.r||0)+r}})}ativo(t){return t.outer.visible}cabe(t,e,n,i){let r=this.caixasDe(t,e,n,i);for(let o of r)for(let[a,l]of Cc(o))if(a<.02||a>We-.02||l<.02||l>Xe-.02)return!1;if(t.piso)return!0;for(let o in this.moveis){let a=this.moveis[o];if(a===t||a.piso||!this.ativo(a))continue;let l=this.caixasDe(a);for(let c of r)for(let h of l)if(Eu(c,h,.005))return!1}for(let o of this.fixos)for(let a of r)if(Eu(a,o,.005))return!1;return!0}prender(t,e,n,i){let r=1e9,o=-1e9,a=1e9,l=-1e9;for(let c of this.caixasDe(t,e,n,i))for(let[h,f]of Cc(c))r=Math.min(r,h),o=Math.max(o,h),a=Math.min(a,f),l=Math.max(l,f);return r<.03&&(e+=.03-r),o>We-.03&&(e-=o-(We-.03)),a<.03&&(n+=.03-a),l>Xe-.03&&(n-=l-(Xe-.03)),[e,n]}posicionar(t,e,n,i){t.x=e,t.z=n,t.ri=(i%8+8)%8,t.outer.position.set(e,0,n),t.outer.rotation.y=this.giro(t)}layoutAtual(){let t={m:{},off:[...this.off||[]].sort()};this.cores&&Object.keys(this.cores).length&&(t.c={...this.cores});for(let e in this.moveis){let n=this.moveis[e];(Math.abs(n.x-n.P[0])>.005||Math.abs(n.z-n.P[1])>.005||n.ri)&&(t.m[e]=[Math.round(n.x*100)/100,Math.round(n.z*100)/100,n.ri])}return t}aplicarLayout(t,e){t=t&&typeof t=="object"?t:{},this.off=new Set(Array.isArray(t.off)?t.off.filter(i=>typeof i=="string"):[]);for(let i in this.moveis){let r=this.moveis[i];this.posicionar(r,r.P[0],r.P[1],0)}let n=t.m&&typeof t.m=="object"?t.m:{};for(let i in n){let r=this.moveis[i],o=n[i];if(!r||!Array.isArray(o)||o.length<3||!o.every(isFinite))continue;let[a,l]=this.prender(r,+o[0],+o[1],o[2]|0);this.posicionar(r,a,l,o[2]|0)}this.aplicarCores(t.c&&typeof t.c=="object"?t.c:{}),e||this.mudouLayout()}aplicarCores(t){this.cores={};for(let e in Su){let n=Number.isInteger(t[e])&&t[e]>0&&t[e]<Su[e].length?t[e]:0;n&&(this.cores[e]=n);let i=Su[e][n],r=this.matCores&&this.matCores[e];r&&(e==="chao"?r[0].color.set(i):e==="parede"?(r[0].color.set(i),r[1].color.set(qe(i,"#000000",.035))):(r[0].color.set(i),r[1].color.set(qe(i,"#FFFFFF",.1)),r[2]&&r[2].color.set(qe(i,"#FFFFFF",.28)),r.forEach(o=>o.sheenColor&&o.sheenColor.set(qe(i,"#FFFFFF",.35)))))}}setCorSala(t,e){this.aplicarCores({...this.cores||{},[t]:e}),this.sujo=!0,this.avisarLayout()}mudouLayout(){this.nav.limpar();for(let e in this.moveis){let n=this.moveis[e];if(!(n.piso||!this.ativo(n)))for(let i of this.caixasDe(n))this.marcar(i)}for(let e of this.fixos)this.marcar(e);if(this.calibrarTacada(),this.sujoNav=!1,this.sujo=!0,this.dir&&this.dir.replanejar(),this.plantaFrente){let e=this.moveis.planta2,n=["touro","aquario","cofre","fliperama","trofeu","cachorro"].some(i=>{let r=this.moveis[i];return r&&this.ativo(r)&&this.caixasDe(r).some(o=>this.caixasDe(e).some(a=>Eu(o,a)))});e.outer.visible=!n}}marcar(t){let e=this.nav,n=.24,i=e.c,r=Math.hypot(t.h[0],t.h[1])+n,o=Math.max(0,Math.floor((t.c[0]-r)/i)),a=Math.min(e.nx-1,Math.floor((t.c[0]+r)/i)),l=Math.max(0,Math.floor((t.c[1]-r)/i)),c=Math.min(e.nz-1,Math.floor((t.c[1]+r)/i));for(let h=o;h<=a;h++)for(let f=l;f<=c;f++){let[u,d]=oa((h+.5)*i-t.c[0],(f+.5)*i-t.c[1],-t.r),p=Math.max(Math.abs(u)-t.h[0],0),v=Math.max(Math.abs(d)-t.h[1],0);p*p+v*v<=n*n&&(e.b[h+f*e.nx]=1)}}construir(){let t=this.scene,e=(P,L,V,ot,Et=0)=>({c:[P,L],h:[V,ot],r:Et});this.hemi=new wr("#E3EBFF","#B08A64",.9),t.add(this.hemi);let n=this.key=new Wi("#FFF4E3",1.8);n.position.set(11,12,11),n.target.position.set(4,0,3.5),t.add(n,n.target);let i=!(window.matchMedia&&window.matchMedia("(pointer: coarse)").matches)&&(navigator.hardwareConcurrency||4)>=8;n.castShadow=!0,n.shadow.mapSize.set(i?4096:2048,i?4096:2048),n.shadow.bias=-4e-4,n.shadow.normalBias=.025,n.shadow.radius=6,n.shadow.blurSamples=12,Object.assign(n.shadow.camera,{left:-7.5,right:7.5,top:7,bottom:-7,near:2,far:40}),this.fill=new Wi("#CFE0FF",.35),this.fill.position.set(-4,6,8),t.add(this.fill),this.rim=new Wi("#B9CCFF",.55),this.rim.position.set(-6,5,-6),this.rim.target.position.set(4,0,4),t.add(this.rim,this.rim.target);let r=Ee(1024,1024);this.desenharPiso(r),r.t.wrapS=r.t.wrapT=xn,r.t.repeat.set(We/4.5,Xe/4.5),this.chao=At(new Ge(We,Xe),new de({map:r.t,roughness:.42,metalness:0}),t,We/2,0,Xe/2,{rx:-j/2,cast:!1}),this.matCores={chao:[this.chao.material]},ut(t,nt("#8A5A34",{r:.8}),[-En,-.22,-En],[We+.05,-.001,Xe+.05],.02,{cast:!1}),ut(t,nt("#E6E3DD",{r:.9}),[-En-.06,-.3,-En-.06],[We+.11,-.2,Xe+.11],.04,{cast:!1});let o=td("#EEF1F6").clone(),a=td("#E5E9F1").clone(),l=nt("#C9D1DD",{r:.9});this.matCores.parede=[o,a],ut(t,o,[-En,0,-En],[We,Ve,0],.005);let c=.95,h=2.65,f=.92,u=2.38;ut(t,a,[-En,0,0],[0,Ve,c],.005),ut(t,a,[-En,0,h],[0,Ve,Xe],.005),ut(t,a,[-En,0,c],[0,f,h],.005),ut(t,a,[-En,u,c],[0,Ve,h],.005),ut(t,l,[-En-.005,Ve,-En-.005],[We+.005,Ve+.03,.005],.01),ut(t,l,[-En-.005,Ve,0],[.005,Ve+.03,Xe+.005],.01),ut(t,l,[We-.001,0,-En],[We+.004,Ve+.03,0],.001),ut(t,l,[-En,0,Xe-.001],[0,Ve+.03,Xe+.004],.001);let d=nt("#FFFFFF",{r:.6});ut(t,d,[0,0,0],[We,.1,.02],.005),ut(t,d,[0,0,0],[.02,.1,Xe],.005),this.ceu=Ee(256,256),At(new Ge(h-c,u-f),new ze({map:this.ceu.t,toneMapped:!1}),t,-.1,(f+u)/2,(c+h)/2,{ry:j/2,cast:!1,recv:!1}),At(new Ge(h-c,u-f),new de({color:"#DDF1FF",transparent:!0,opacity:.12,roughness:.05,metalness:.3}),t,-.03,(f+u)/2,(c+h)/2,{ry:j/2,cast:!1,recv:!1});let p=nt("#FFFFFF",{r:.4});ut(t,p,[-.06,f-.02,c-.06],[.04,u+.04,c],.01),ut(t,p,[-.06,f-.02,h],[.04,u+.04,h+.06],.01),ut(t,p,[-.06,u,c],[.04,u+.06,h],.01),ut(t,p,[-.06,(f+u)/2-.025,c],[0,(f+u)/2+.025,h],.01),ut(t,p,[-.06,f,(c+h)/2-.025],[0,u,(c+h)/2+.025],.01),ut(t,nt("#F1F5F9",{r:.5}),[-.06,f-.06,c-.12],[.16,f,h+.12],.015);let v=nt("#C7D2FE",{r:1});for(let[P,L]of[[c-.42,c-.06],[h+.06,h+.42]])for(let V=0;V<4;V++)Li(t,v,.05,2.45,.08,1.38,P+.05+V*(L-P-.1)/3,{});re(t,nt("#94A3B8",{m:.6,r:.3}),.015,.015,h-c+1,.08,u+.25,(c+h)/2,{rx:j/2});let g=Ee(64,64),m=g.g.createLinearGradient(0,0,64,0);m.addColorStop(0,"rgba(255,255,255,.9)"),m.addColorStop(1,"rgba(255,255,255,0)"),g.g.fillStyle=m,g.g.fillRect(0,0,64,64);let b=new _e;b.setAttribute("position",new qt([.02,.005,c+.1,.02,.005,h-.1,3,.005,h+1.5,3,.005,c+1.3],3)),b.setAttribute("uv",new qt([0,0,0,1,1,1,1,0],2)),b.setIndex([0,1,2,0,2,3]),this.feixe=new be(b,new ze({map:g.t,color:"#FFE7A3",transparent:!0,opacity:.3,blending:us,depthWrite:!1,toneMapped:!1})),t.add(this.feixe);{let P=this.movel("tapete",[3.35,3.85],[e(3.35,3.85,1.65,2.5)],{piso:!0,nome:"Tapete"}),L=Ee(512,512);this.desenharTapete(L),At(new Zn(3.3,.016,5,2,.007),new de({map:L.t,roughness:1}),P,3.35,.009,3.85,{cast:!1})}let S=Os("#9A6B43",{r:.62,rep:[.3,2]}),x=Os("#6E4A2E",{r:.8});ut(t,x,[1.6,0,0],[4.8,Ve,.025],.002,{cast:!1});for(let P=1.62;P<4.78;P+=.1)ut(t,S,[P,.1,.02],[P+.06,Ve-.02,.05],.008,{cast:!1});let y=nt("#3F3A36",{r:.5}),M=Os("#B07A4C",{r:.5});ut(t,y,[1.95,.12,.05],[4.45,.52,.48],.02),ut(t,M,[1.97,.18,.47],[3.18,.48,.49],.01),ut(t,M,[3.22,.18,.47],[4.43,.48,.49],.01);for(let P of[2.05,4.35])for(let L of[.12,.42])re(t,nt("#111827"),.015,.015,.12,P,.06,L);ut(t,nt("#F8FAFC",{r:.3}),[2.3,.52,.18],[2.62,.58,.4],.02),ut(t,nt("#111827",{r:.4}),[3.85,.52,.2],[3.98,.86,.33],.02),ut(t,nt("#111827",{r:.4}),[2.95,.52,.2],[3.08,.86,.33],.02),ut(t,nt("#0B0F19",{r:.25,m:.4}),[2.25,1,.06],[4.15,2.06,.12],.02),this.tv=Ee(512,288),At(new Ge(1.84,1),new ze({map:this.tv.t,toneMapped:!1}),t,3.2,1.53,.123,{cast:!1,recv:!1}),this.tvLuz=new wi("#818CF8",1.4,4.5,1.6),this.tvLuz.position.set(3.2,1.5,.9),t.add(this.tvLuz),this.fixos.push(e(3.2,.27,1.25,.24));{let P=this.movel("centro",[3.21,1.72],[e(3.21,1.72,.6,.29)],{nome:"Mesa de centro"}),L=Os("#C89A6B",{r:.45});ut(P,L,[2.62,.36,1.45],[3.8,.42,2],.03),ut(P,nt("#E7D6C3"),[2.7,.08,1.52],[3.72,.11,1.93],.01);for(let V of[2.68,3.74])for(let ot of[1.5,1.95])re(P,nt("#3F3A36"),.02,.02,.36,V,.18,ot);ut(P,nt("#F43F5E"),[2.8,.42,1.6],[3.1,.44,1.82],.005,{ry:.2}),ut(P,nt("#38BDF8"),[2.84,.44,1.62],[3.1,.455,1.8],.005,{ry:-.1}),ut(P,nt("#F8FAFC",{r:.4}),[3.35,.42,1.62],[3.6,.44,1.8],.004,{ry:.3})}{let P=this.movel("sofa",[3.2,3.05],[e(3.2,3.05,1.24,.47)],{nome:"Sof\xE1"}),L=Br("#0F766E").clone(),V=Br("#14857B").clone(),ot=Br("#2BB3A3",{rep:[2,2]}).clone();this.matCores.sofa=[L,V,ot],ut(P,L,[2,.08,2.6],[4.4,.42,3.5],.06),ut(P,L,[2,.08,3.22],[4.4,.98,3.52],.08),ut(P,V,[1.96,.08,2.58],[2.2,.66,3.52],.07),ut(P,V,[4.2,.08,2.58],[4.44,.66,3.52],.07),ut(P,ot,[2.22,.4,2.62],[3.19,.54,3.24],.06),ut(P,ot,[3.21,.4,2.62],[4.18,.54,3.24],.06),ut(P,ot,[2.24,.5,3],[3.18,.92,3.24],.07,{rx:-.12}),ut(P,ot,[3.22,.5,3],[4.16,.92,3.24],.07,{rx:-.12}),ut(P,nt("#FCD34D",{r:1}),[2.28,.5,2.95],[2.62,.82,3.1],.06,{rz:.15,rx:-.2});for(let Et of[2.06,4.34])for(let tt of[2.66,3.44])re(P,nt("#3F3A36"),.025,.02,.08,Et,.04,tt)}{let P=this.movel("poltrona",[.92,3.2],[e(.92,3.2,.5,.44,j/4)],{nome:"Poltrona"}),L=new wt;L.position.set(.92,0,3.2),L.rotation.y=j/4,P.add(L);let V=Br("#B45309").clone(),ot=Br("#D97706").clone();this.matCores.poltrona=[V,ot],ut(L,V,[-.42,.1,-.36],[.42,.4,.4],.06),ut(L,V,[-.42,.1,-.44],[.42,1.05,-.2],.08,{rx:.1}),ut(L,ot,[-.5,.1,-.4],[-.32,.62,.4],.07),ut(L,ot,[.32,.1,-.4],[.5,.62,.4],.07),ut(L,nt("#F59E0B",{r:1}),[-.32,.38,-.25],[.32,.5,.38],.05);for(let Et of[-.44,.44])for(let tt of[-.36,.36])re(L,nt("#3F3A36"),.025,.018,.1,Et,.05,tt)}{let P=this.movel("luminaria",[.32,4],[e(.32,4,.16,.16)],{nome:"Lumin\xE1ria"}),L=new wt;L.position.set(.32,0,4),P.add(L),re(L,nt("#1F2937",{m:.6,r:.4}),.14,.16,.03,0,.015,0),re(L,nt("#1F2937",{m:.6,r:.4}),.012,.012,1.5,0,.77,0),this.cupula=re(L,new de({color:"#FEF3C7",roughness:.8,emissive:"#FFD58A",emissiveIntensity:0}),.12,.2,.26,0,1.6,0,{seg:28}),this.lampLuz=new wi("#FFC978",0,4.2,1.8),this.lampLuz.position.set(.35,1.5,4),P.add(this.lampLuz),this.lampHalo=vs("#FFD58A",1.1,0),this.lampHalo.position.set(.34,1.58,4),P.add(this.lampHalo)}{let P=this.movel("cafe",[.31,4.9],[e(.31,4.9,.31,.58)],{nome:"Cantinho do caf\xE9"}),L=nt("#F8FAFC",{r:.5});ut(P,L,[.02,0,4.35],[.58,.88,5.45],.02),ut(P,nt("#334155",{r:.35}),[0,.88,4.32],[.62,.92,5.48],.01),ut(P,nt("#E2E8F0"),[.57,.1,4.4],[.585,.82,4.88],.004),ut(P,nt("#E2E8F0"),[.57,.1,4.92],[.585,.82,5.4],.004);let V=new wt;V.position.set(.24,.92,4.9),P.add(V);let ot=nt("#D1D5DB",{r:.2,m:.85}),Et=nt("#111827",{r:.32,m:.2});ut(V,Et,[-.14,0,-.15],[.12,.43,.15],.035),ut(V,ot,[-.13,.43,-.14],[.11,.45,.14],.01),ut(V,new wn({color:"#7DD3FC",transparent:!0,opacity:.38,roughness:.05}),[-.16,.08,-.12],[-.12,.4,.12],.015),ut(V,ot,[.04,.26,-.11],[.2,.35,.11],.025),re(V,ot,.036,.032,.035,.16,.24,0,{seg:24}),ut(V,Et,[.17,.214,-.012],[.33,.232,.012],.006,{rz:-.12});for(let rt of[-.012,.012])re(V,ot,.005,.0035,.03,.16,.208,rt,{seg:10});ut(V,ot,[.03,0,-.11],[.23,.018,.11],.006);for(let rt=0;rt<6;rt++)ut(V,nt("#4B5563",{r:.4,m:.6}),[.045+rt*.03,.018,-.09],[.055+rt*.03,.021,.09],.001);this.anelCafe=new de({color:"#F59E0B",emissive:"#F59E0B",emissiveIntensity:.6,toneMapped:!1}),this.btnCafe=re(V,nt("#F3F4F6",{r:.3}),.019,.019,.012,.126,.395,.075,{rz:j/2,seg:22}),At(new Ae(.023,.004,8,24),this.anelCafe,V,.122,.395,.075,{ry:j/2,cast:!1}),re(V,nt("#9CA3AF",{r:.3}),.012,.012,.01,.124,.395,-.075,{rz:j/2,seg:18});let tt=Ee(64,32);tt.g.fillStyle="#082F49",tt.g.fillRect(0,0,64,32),tt.g.fillStyle="#67E8F9",tt.g.font="bold 15px monospace",tt.g.fillText("92\xB0C",12,22),At(new Ge(.06,.03),new ze({map:tt.t,toneMapped:!1}),V,.1215,.395,0,{ry:j/2,cast:!1}),this.jatoCafe=re(P,new de({color:"#4A2511",roughness:.2,emissive:"#2A1206",emissiveIntensity:.3}),.0035,.0035,1,.4,1,4.9,{cast:!1}),this.jatoCafe.visible=!1,this.vapor=[];for(let rt=0;rt<4;rt++){let pt=vs("#FFFFFF",.1,0);pt.material.blending=Xi,pt.position.set(.38,1,4.9),P.add(pt),this.vapor.push(pt)}for(let rt=0;rt<3;rt++)re(P,nt(["#F43F5E","#FACC15","#38BDF8"][rt]),.035,.03,.08,.38,.96,5.2+rt*.09)}let T=Ee(256,192);this.desenharQuadro(T),ut(t,nt("#1F2937",{r:.4}),[0,1.45,4.45],[.04,2.25,5.4],.01),At(new Ge(.87,.72),new de({map:T.t,roughness:.6}),t,.045,1.85,4.925,{ry:j/2,cast:!1});{let P=this.movel("mesa",[6.8,.6],[e(6.8,.42,1.06,.41),e(6.8,1.22,.3,.3)],{nome:"Escrivaninha"});this.mesaG=P;let L=Os("#9C6B45",{r:.42,rep:[2,1]}),V=nt("#1F2937",{r:.4,m:.6});ut(P,L,[5.75,.72,.02],[7.85,.77,.82],.02);for(let It of[5.82,7.78])ut(P,V,[It-.03,0,.08],[It+.03,.72,.14],.01),ut(P,V,[It-.03,0,.7],[It+.03,.72,.76],.01),ut(P,V,[It-.03,.02,.08],[It+.03,.06,.76],.01);ut(P,nt("#F1F5F9",{r:.5}),[7.25,.18,.06],[7.7,.7,.62],.02),ut(P,nt("#CBD5E1"),[7.27,.42,.62],[7.68,.44,.63],.003),ut(P,nt("#1E293B",{r:.9}),[6,.77,.42],[7.55,.775,.78],.004),ut(P,nt("#E5E7EB",{r:.4}),[6.42,.775,.55],[7.08,.8,.7],.01),this.teclas=ut(P,new de({color:"#94A3B8",roughness:.5,emissive:"#60A5FA",emissiveIntensity:.25}),[6.44,.8,.565],[7.06,.805,.69],.003),this.mouse=At(new ke(.04,16,10),nt("#E5E7EB",{r:.3}),P,7.28,.79,.62,{s:[.8,.4,1.2]}),re(P,V,.11,.12,.012,6.8,.776,.22),ut(P,V,[6.775,.77,.16],[6.825,1,.2],.01),ut(P,nt("#0B0F19",{r:.25,m:.4}),[6.19,.86,.17],[7.41,1.42,.22],.02),this.mon=Ee(1024,448),this.monMesh=At(new Ge(1.18,.516),new ze({map:this.mon.t,toneMapped:!1}),P,6.8,1.14,.222,{cast:!1,recv:!1}),this.monLuz=new wi("#60A5FA",1.1,2.6,1.8),this.monLuz.position.set(6.8,1.15,.75),P.add(this.monLuz),this.monHalo=vs("#60A5FA",1.6,.18),this.monHalo.position.set(6.8,1.14,.12),P.add(this.monHalo),re(P,nt("#F8FAFC",{r:.3}),.04,.035,.1,5.98,.82,.55),At(new Ae(.025,.008,8,14),nt("#F8FAFC"),P,6.03,.83,.55,{ry:0}),this.planta(5.95,.77,.2,.45,P);let ot=this.cadeira=new wt;ot.position.set(6.8,0,1.22),ot.rotation.y=j,P.add(ot);let Et=nt("#1F2937",{r:.7}),tt=this.cadAcento=new de({color:"#2457F5",roughness:.7});for(let It=0;It<5;It++){let kt=It*Vt/5;ut(ot,V,[-.02,.05,0],[.02,.08,.3],.01,{ry:kt}).position.set(Math.sin(kt)*.15,.065,Math.cos(kt)*.15),pe(ot,nt("#111827"),.03,Math.sin(kt)*.29,.03,Math.cos(kt)*.29)}re(ot,V,.025,.03,.4,0,.27,0),ut(ot,Et,[-.26,.44,-.27],[.26,.53,.25],.05),ut(ot,tt,[-.17,.53,-.2],[.17,.535,.2],.005);let rt=new wt;rt.position.set(0,.5,-.27),rt.rotation.x=-.12,ot.add(rt),ut(rt,Et,[-.25,.05,-.08],[.25,.85,0],.06),ut(rt,tt,[-.12,.12,0],[.12,.72,.006],.004),ut(rt,Et,[-.15,.8,-.07],[.15,.98,0],.05);for(let It of[-1,1])ut(ot,V,[It*.27-.015,.5,-.1],[It*.27+.015,.68,-.06],.005),ut(ot,Et,[It*.27-.04,.68,-.2],[It*.27+.04,.71,.12],.015);let pt=new wt;pt.visible=!1,P.add(pt),this.decPorquinho=pt;let xt=nt("#F9A8D4",{r:.5}),bt=new wt;bt.position.set(7.55,.775,.6),bt.rotation.y=-.5,pt.add(bt),this.porco=bt,pe(bt,xt,.09,0,.09,0,{s:[.9,.85,1.15]}),re(bt,nt("#F472B6"),.035,.035,.04,0,.08,.11,{rx:j/2});for(let It of[-1,1])At(new Ei(.025,.05,8),xt,bt,It*.045,.17,.05,{}),pe(bt,nt("#111827"),.008,It*.035,.12,.085);for(let[It,kt]of[[-.04,.05],[.04,.05],[-.04,-.05],[.04,-.05]])re(bt,xt,.02,.02,.05,It,.02,kt);ut(bt,nt("#9D174D"),[-.025,.165,-.03],[.025,.172,.03],.002),Cn(pt)}ut(t,nt("#7A5233",{r:.6}),[5.9,1.86,0],[7.7,1.9,.28],.01);let _=5.98;["#EF4444","#2457F5","#F59E0B","#10B981","#8B5CF6","#0EA5E9","#F43F5E"].forEach((P,L)=>{let V=.05+L%3*.015,ot=.2+L%2*.05;ut(t,nt(P,{r:.7}),[_,1.9,.04],[_+V,1.9+ot,.24],.006,{rz:L===6?-.25:0}),_+=V+.008}),this.planta(7.5,1.9,.12,.3);let A=new wt;A.position.set(5.25,2.35,.03),t.add(A),re(A,nt("#1F2937",{r:.4}),.27,.27,.05,0,0,0,{rx:j/2,seg:40}),re(A,nt("#FFFFFF",{r:.5}),.24,.24,.052,0,0,.002,{rx:j/2,seg:40});for(let P=0;P<12;P++){let L=P*Vt/12;ut(A,nt("#1F2937"),[-.006,-.025,0],[.006,.025,.01],.002).position.set(Math.sin(L)*.2,Math.cos(L)*.2,.03),A.children[A.children.length-1].rotation.z=-L}let C=(P,L,V,ot)=>{let Et=new wt;return Et.position.z=ot,A.add(Et),ut(Et,nt(V),[-L/2,-.02,0],[L/2,P,.006],.002),Et};this.pH=C(.12,.018,"#1F2937",.03),this.pM=C(.18,.012,"#1F2937",.037),this.pS=C(.2,.005,"#EF4444",.044),pe(A,nt("#EF4444"),.014,0,0,.05);{let P=this.sinuca={x0:5.7,x1:8.1,z0:3.75,z1:5.05,y:.8},L=this.movel("sinuca",[6.9,4.4],[e(6.9,4.4,1.2,.65)],{nome:"Mesa de sinuca"});this.sinucaG=L;let V=Os("#5B3A1E",{r:.45}),ot=Br("#15803D",{r:.98,rep:[6,4]});ut(L,V,[P.x0+.15,.12,P.z0+.15],[P.x1-.15,.72,P.z1-.15],.04);for(let rt of[P.x0+.2,P.x1-.2])for(let pt of[P.z0+.2,P.z1-.2])ut(L,V,[rt-.07,0,pt-.07],[rt+.07,.3,pt+.07],.03);ut(L,ot,[P.x0+.08,.7,P.z0+.08],[P.x1-.08,.78,P.z1-.08],.01);let Et=Os("#7C4A21",{r:.35,rep:[3,1]});ut(L,Et,[P.x0,.68,P.z0],[P.x1,.84,P.z0+.1],.025),ut(L,Et,[P.x0,.68,P.z1-.1],[P.x1,.84,P.z1],.025),ut(L,Et,[P.x0,.68,P.z0],[P.x0+.1,.84,P.z1],.025),ut(L,Et,[P.x1-.1,.68,P.z0],[P.x1,.84,P.z1],.025);let tt=nt("#0B0B0B",{r:.9});this.cacapas=[[P.x0+.11,P.z0+.11],[P.x1-.11,P.z0+.11],[P.x0+.11,P.z1-.11],[P.x1-.11,P.z1-.11],[(P.x0+P.x1)/2,P.z0+.09],[(P.x0+P.x1)/2,P.z1-.09]];for(let[rt,pt]of this.cacapas)re(L,tt,.055,.055,.012,rt,.785,pt,{cast:!1});this.mesaSin=new Lu(this.cacapas),this.bolasM=[];for(let rt=0;rt<=9;rt++){let pt=Ee(128,64),xt=pt.g,bt=p_[rt];if(xt.fillStyle=rt===9?"#F8FAFC":bt,xt.fillRect(0,0,128,64),rt===9&&(xt.fillStyle=bt,xt.fillRect(0,18,128,28)),rt>0)for(let kt of[32,96])xt.fillStyle="#FFFFFF",xt.beginPath(),xt.ellipse(kt,32,9,12,0,0,Vt),xt.fill(),xt.fillStyle="#111",xt.font="bold 15px system-ui",xt.textAlign="center",xt.textBaseline="middle",xt.fillText(String(rt),kt,33);let It=pe(L,new wn({map:pt.t,roughness:.12,clearcoat:1,clearcoatRoughness:.05}),.03,0,.81,0,{seg:24,seg2:16});It.rotation.set(Jn(rt)*6,Jn(rt+3)*6,0),this.bolasM.push(It)}this.mesaSin.vista=this.mesaSin.copia(this.mesaSin.bolas),this.mostrarBolas(this.mesaSin.vista,-1),this.pendLuz=new wi("#FFE3A8",0,3.2,1.6),this.pendLuz.position.set(6.9,1.95,4.4),L.add(this.pendLuz),ut(L,nt("#3B82F6",{r:.8}),[8,.84,4.95],[8.04,.86,4.99],.003)}{let P=this.movel("planta1",[.45,.45],[e(.45,.45,.24,.24)],{nome:"Planta"});this.planta(.45,0,.45,1.25,P)}{let P=this.movel("planta2",[8.5,6.95],[e(8.5,6.95,.22,.22)],{nome:"Planta"});this.plantaFrente=this.planta(8.5,0,6.95,1.05,P)}let F=this.dec={};{let P=this.movel("fliperama",[5.29,.5],[e(5.29,.5,.34,.42)],{nome:"Fliperama",decor:"fliperama"});F.fliperama=this.moveis.fliperama;let L=this.pedaco(P,[8.52,.5],[5.29,.5]),V=nt("#1E1B4B",{r:.5}),ot=nt("#6D28D9",{r:.42}),Et=nt("#0B0B12",{r:.55}),tt=new de({color:"#22D3EE",emissive:"#22D3EE",emissiveIntensity:1.8,toneMapped:!1}),rt=[[.15,0],[.8,0],[.8,.9],[.99,.98],[.99,1.045],[.8,1.1],[.775,1.2],[.705,1.6],[.77,1.64],[.77,1.86],[.15,1.86]],pt=new Ti;rt.forEach(([Rt,jt],O)=>O?pt.lineTo(Rt,jt):pt.moveTo(Rt,jt)),pt.closePath();for(let Rt of[8.18,8.825]){let jt=new Is(pt,{depth:.035,bevelEnabled:!0,bevelSize:.006,bevelThickness:.005,bevelSegments:2});jt.rotateY(-j/2),jt.translate(Rt+.035,0,0),At(jt,ot,L);let O=new Mr;for(let me=0;me<rt.length;me++){let fe=rt[me],D=rt[(me+1)%rt.length];O.add(new yr(yt(0,fe[1],fe[0]),yt(0,D[1],D[0])))}for(let me of[-.003,.038])At(new Er(O,220,.005,6,!0),tt,L,Rt+me,0,0,{cast:!1})}ut(L,V,[8.21,0,.16],[8.825,.92,.79],.01),ut(L,V,[8.21,.9,.16],[8.825,1.86,.64],.01),ut(L,nt("#111827",{r:.5}),[8.21,1.1,.6],[8.825,1.2,.79],.01),ut(L,nt("#374151",{r:.4,m:.6}),[8.39,.3,.775],[8.65,.62,.79],.01);for(let Rt of[8.46,8.58])ut(L,new de({color:"#EF4444",emissive:"#EF4444",emissiveIntensity:1.4}),[Rt-.02,.5,.788],[Rt+.02,.56,.796],.004);let xt=At(new Zn(.645,.06,.25,2,.012),Et,L,8.5025,1.025,.885,{rx:.3});this.joy=new wt,this.joy.position.set(8.36,1.072,.9),L.add(this.joy),re(this.joy,nt("#111827",{r:.3}),.022,.026,.008,0,0,0),re(this.joy,nt("#9CA3AF",{m:.8,r:.3}),.006,.006,.07,0,.035,0),pe(this.joy,nt("#EF4444",{r:.25}),.024,0,.075,0);let bt=["#FACC15","#22C55E","#38BDF8","#F43F5E"];this.botoesArc=bt.map((Rt,jt)=>re(L,new de({color:Rt,emissive:Rt,emissiveIntensity:.35,roughness:.3}),.018,.018,.016,8.56+jt%2*.07,1.07,.92-Math.floor(jt/2)*.06+jt%2*.008,{rx:.3})),this.botoesArc.forEach((Rt,jt)=>{Rt.userData.y0=Rt.position.y,At(new Ae(.02,.003,6,18),nt("#111827"),L,Rt.position.x,Rt.position.y-.004,Rt.position.z,{rx:j/2+.3})}),this.arcade=Ee(256,256),this.arcade.g.scale(2,2),ut(L,Et,[8.215,1.18,.64],[8.82,1.63,.735],.012,{rx:-.17}),At(new Ge(.48,.38),new ze({map:this.arcade.t,toneMapped:!1}),L,8.5025,1.405,.748,{rx:-.17,cast:!1});let It=vs("#A78BFA",.9,.22);It.position.set(8.5,1.4,.95),L.add(It);let kt=Ee(256,64);{let Rt=kt.g,jt=Rt.createLinearGradient(0,0,256,0);jt.addColorStop(0,"#F472B6"),jt.addColorStop(1,"#A78BFA"),Rt.fillStyle=jt,Rt.fillRect(0,0,256,64),Rt.fillStyle="#FFF",Rt.font="bold 30px system-ui",Rt.textAlign="center",Rt.shadowColor="#FFF",Rt.shadowBlur=8,Rt.fillText("RADAR ARCADE",128,43)}At(new Ge(.58,.19),new ze({map:kt.t,toneMapped:!1}),L,8.5025,1.745,.768,{cast:!1}),ut(L,Et,[8.21,1.62,.62],[8.825,1.86,.765],.008),this.arcMao=[new Le,new Le],this.arcMao[0].position.set(8.36,1.175,.9),this.arcMao[1].position.set(8.6,1.115,.9),this.arcMao.forEach(Rt=>L.add(Rt)),this.arcMaoBase=this.arcMao.map(Rt=>Rt.position.clone()),Cn(L)}{let P=this.movel("cofre",[8.54,1.63],[e(8.54,1.63,.36,.34),e(7.92,1.12,.12,.12)],{nome:"Cofre",decor:"cofre"});F.cofre=this.moveis.cofre;let L=this.pedaco(P,[8.54,1.63],[8.54,1.63],-j/2),V=nt("#D4A017",{r:.25,m:.9}),ot=nt("#3F2A08",{r:.6});ut(L,V,[8.22,0,1.3],[8.86,.72,1.6],.04),ut(L,V,[8.22,0,1.3],[8.28,.72,1.96],.02),ut(L,V,[8.8,0,1.3],[8.86,.72,1.96],.02),ut(L,V,[8.22,0,1.3],[8.86,.06,1.96],.02),ut(L,V,[8.22,.66,1.3],[8.86,.72,1.96],.02),ut(L,ot,[8.28,.06,1.58],[8.8,.66,1.62],.005);for(let tt=0;tt<3;tt++)ut(L,nt("#FACC15",{r:.25,m:.9,e:"#7A5A00",ei:.6}),[8.32+tt*.15,.06,1.66],[8.44+tt*.15,.14,1.86],.01);this.cofreBrilho=vs("#FDE68A",.9,0),this.cofreBrilho.position.set(8.54,.4,1.8),L.add(this.cofreBrilho);let Et=this.cofrePorta=new wt;Et.position.set(8.24,0,1.97),L.add(Et),ut(Et,V,[0,.03,-.02],[.6,.69,.03],.03),re(Et,nt("#713F12",{m:.6,r:.4}),.1,.1,.03,.3,.4,.04,{rx:j/2}),ut(Et,nt("#713F12",{m:.6}),[.295,.32,.05],[.305,.48,.06],.002),this.cofreMacaneta=new Le,this.cofreMacaneta.position.set(.5,.42,.08),Et.add(this.cofreMacaneta);for(let tt=0;tt<5;tt++)re(L,nt("#FACC15",{r:.3,m:.85}),.06,.06,.02,8.05+tt%2*.04,.01+tt*.021,2.25,{});for(let tt=0;tt<3;tt++)re(L,nt("#FACC15",{r:.3,m:.85}),.06,.06,.02,7.92,.01+tt*.021,2.12,{});Cn(L)}{let P=this.movel("aquario",[.35,6.835],[e(.35,6.835,.31,.49)],{nome:"Aqu\xE1rio",decor:"aquario"});F.aquario=this.moveis.aquario,ut(P,nt("#5B3A1E",{r:.6}),[.04,0,6.35],[.66,.74,7.32],.02),At(new Zn(.58,.5,.92,2,.01),new de({color:"#7DD3FC",transparent:!0,opacity:.32,roughness:.05,metalness:.1,depthWrite:!1}),P,.35,1,6.835,{cast:!1}),ut(P,nt("#E7D7B8"),[.08,.74,6.4],[.62,.79,7.28],.01),ut(P,nt("#1F2937"),[.05,1.24,6.38],[.65,1.28,7.3],.01),this.peixes=[],["#F97316","#FACC15","#38BDF8","#F43F5E"].forEach((L,V)=>{let ot=new wt;pe(ot,nt(L,{r:.4}),.035,0,0,0,{s:[.6,.8,1.4],seg:12}),At(new Ei(.03,.05,8),nt(L),ot,0,0,-.06,{rx:-j/2}),P.add(ot),this.peixes.push(ot)});for(let L=0;L<5;L++){let V=At(new Ei(.03,.18+L*.03,6),nt("#16A34A",{r:.8}),P,.2+L%3*.12,.85,6.5+L*.17);V.userData.alga=L}this.bolhas=[];for(let L=0;L<6;L++){let V=pe(P,nt("#FFFFFF",{op:.6,r:.1}),.008,.45,.8,7.1,{seg:8,seg2:6,cast:!1});this.bolhas.push(V)}this.racao=[];for(let L=0;L<14;L++){let V=pe(P,nt("#B45309",{r:.8}),.006,.35,1.2,6.8,{seg:6,seg2:4,cast:!1});V.visible=!1,this.racao.push(V)}ut(P,nt("#F59E0B",{r:.6}),[.5,1.28,7.12],[.58,1.38,7.2],.008),ut(P,nt("#DC2626",{r:.5}),[.5,1.38,7.12],[.58,1.395,7.2],.004),this.aqLuz=vs("#38BDF8",1,.25),this.aqLuz.position.set(.35,1,6.85),P.add(this.aqLuz)}{let P=this.movel("touro",[6.2,6.95],[e(6.2,6.95,.35,.35)],{nome:"Touro de ouro",decor:"touro"});F.touro=this.moveis.touro;let L=this.pedaco(P,[8.5,6.95],[6.2,6.95]),V=nt("#E3B341",{r:.18,m:1});ut(L,nt("#E5E7EB",{r:.5}),[8.15,0,6.6],[8.85,.55,7.3],.03);let ot=new wt;ot.position.set(8.5,.55,6.95),ot.rotation.y=-j*.6,L.add(ot),this.touroT=ot,Li(ot,V,.13,.28,0,.3,0,{rx:j/2}),pe(ot,V,.12,0,.33,-.1);let Et=new wt;Et.position.set(0,.36,.27),Et.rotation.x=.5,ot.add(Et),pe(Et,V,.09,0,0,0,{s:[1,.9,1.2]});for(let tt of[-1,1])At(new Ae(.07,.015,8,16,j*.7),V,Et,tt*.07,.07,0,{rz:tt>0?-.2:j+.2});this.touroCab=new Le,this.touroCab.position.set(0,.1,0),Et.add(this.touroCab);for(let[tt,rt]of[[-.08,.15],[.08,.15],[-.08,-.15],[.08,-.15]])Li(ot,V,.035,.12,tt,.12,rt);At(new Ae(.08,.012,6,12,j),V,ot,0,.32,-.24,{ry:j/2}),Cn(L)}{let P=this.movel("trofeu",[8.6,2.6],[e(8.6,2.6,.18,.18)],{nome:"Trof\xE9u",decor:"trofeu"});F.trofeu=this.moveis.trofeu,ut(P,nt("#E5E7EB",{r:.45}),[8.44,0,2.44],[8.76,.08,2.76],.02),ut(P,nt("#F8FAFC",{r:.4}),[8.48,.08,2.48],[8.72,1,2.72],.02),ut(P,nt("#E5E7EB",{r:.45}),[8.45,1,2.45],[8.75,1.04,2.75],.02);let L=this.trofeuObj=new wt,V=nt("#E3B341",{r:.2,m:1}),ot=[[0,0],[.06,0],[.06,.03],[.018,.04],[.018,.1],[.07,.13],[.085,.22],[0,.22]].map(([Et,tt])=>new vt(Et,tt));At(new Sr(ot,24),V,L);for(let Et of[-1,1])At(new Ae(.035,.008,6,12),V,L,Et*.085,.17,0,{});Cn(L),this.trofeuBase=yt(8.6,1.04,2.6),L.position.copy(this.trofeuBase),P.add(L),this.trofeuPai=P}{let P=this.movel("cachorro",[1.35,6.2],[e(1.35,6.2,.38,.3)],{nome:"Caminha do cachorro",decor:"cachorro"});F.cachorro=this.moveis.cachorro,At(new Ae(.28,.08,12,32),nt("#7C3AED",{r:.9}),P,1.35,.08,6.2,{rx:j/2,s:[1.25,.95,1]}),At(new ri(.3,.3,.05,32),nt("#C4B5FD",{r:1}),P,1.35,.04,6.2,{s:[1.2,1,.9]}),pe(P,nt("#EF4444",{r:.5}),.04,1.75,.04,6.45)}{let P=new wt;P.visible=!1,t.add(P),F.globo=P,re(P,nt("#94A3B8"),.004,.004,.3,3.4,Ve-.15,4.9),this.globo=At(new yo(.2,2),new de({color:"#E2E8F0",metalness:1,roughness:.12,flatShading:!0}),P,3.4,Ve-.48,4.9),this.spots=["#F43F5E","#22D3EE","#FACC15","#A855F7"].map(L=>{let V=new Ao(L,0,8,.35,.6,1.2);return V.position.set(3.4,Ve-.48,4.9),P.add(V,V.target),V})}F.porquinho=this.decPorquinho;{let P=new wt;P.visible=!1,t.add(P),F.neon=P;let L=Ee(256,256);L.g.font="900 210px system-ui, sans-serif",L.g.textAlign="center",L.g.textBaseline="middle",L.g.shadowColor="#FB923C",L.g.shadowBlur=24,L.g.fillStyle="#FDBA74",L.g.fillText("\u20BF",128,138),this.neonM=new ze({map:L.t,transparent:!0,toneMapped:!1,depthWrite:!1}),At(new Ge(.6,.6),this.neonM,P,.03,2.2,6.6,{ry:j/2,cast:!1}),this.neonHalo=vs("#FB923C",1.1,.35),this.neonHalo.position.set(.15,2.2,6.6),P.add(this.neonHalo)}{let P=new wt;P.visible=!1,t.add(P),F.arcoiris=P,this.arcoM=[],["#F43F5E","#F59E0B","#22C55E","#3B82F6"].forEach((V,ot)=>{let Et=new ze({color:V,toneMapped:!1});this.arcoM.push(Et),At(new Ae(.42-ot*.07,.014,8,48,j),Et,P,3.2,2.28,.07,{cast:!1})});let L=vs("#FDE68A",1.4,.25);L.position.set(3.2,2.45,.15),P.add(L),this.arcoHalo=L}{let P=new wt;P.visible=!1,t.add(P),F.dardos=P;let L=Ee(128,128);[["#111827",62],["#F43F5E",50],["#FEF3C7",34],["#F43F5E",16]].forEach(([V,ot])=>{L.g.fillStyle=V,L.g.beginPath(),L.g.arc(64,64,ot,0,Vt),L.g.fill()}),At(new Rs(.22,32),new de({map:L.t,roughness:.8}),P,.012,1.75,5.95,{ry:j/2,cast:!1}),this.dardos=[];for(let V=0;V<3;V++){let ot=new wt;re(ot,nt("#9CA3AF",{m:.8,r:.3}),.003,.001,.05,0,.025,0),re(ot,nt("#1D4ED8"),.006,.006,.08,0,-.04,0),At(new Ei(.02,.04,4),nt("#FACC15",{ds:!0}),ot,0,-.09,0,{rx:j}),ot.scale.setScalar(1.7),t.add(ot),ot.visible=!1,this.dardos.push(ot)}this.dardosAlvo=[[.07,1.77,5.93],[.07,1.7,6],[.07,1.78,6.02]],this.dardosCentro=yt(.012,1.75,5.95)}let I=260,N=new Ge(.05,.03);this.confete=new ws(N,new ze({side:An,toneMapped:!1}),I);let B=["#F43F5E","#F59E0B","#22C55E","#3B82F6","#A855F7","#FACC15","#FFFFFF"].map(P=>new ie(P));this.confData=Array.from({length:I},()=>({x:Math.random()*We,z:Math.random()*Xe,y0:Math.random()*Ve,v:.4+Math.random()*.5,r:Math.random()*Vt,rv:(Math.random()-.5)*8,sw:Math.random()*Vt}));for(let P=0;P<I;P++)this.confete.setColorAt(P,B[P%B.length]);this.confete.visible=!1,this.confete.frustumCulled=!1,t.add(this.confete),this.faisca=Ee(64,64);{let P=this.faisca.g;P.translate(32,32),P.fillStyle="#FFF7C2",P.beginPath();for(let L=0;L<8;L++){let V=L*j/4,ot=L%2?9:30;P.lineTo(Math.cos(V)*ot,Math.sin(V)*ot)}P.closePath(),P.fill()}this.faiscas=[];for(let P=0;P<18;P++){let L=new Vi(new Mi({map:this.faisca.t,color:"#FDE68A",transparent:!0,depthWrite:!1,blending:us,toneMapped:!1}));L.visible=!1,t.add(L),this.faiscas.push({s:L,vida:9})}this.notaGeo=new Zn(.16,.004,.08,1,.001);let k=Ee(128,64);k.g.fillStyle="#86EFAC",k.g.fillRect(0,0,128,64),k.g.strokeStyle="#15803D",k.g.lineWidth=5,k.g.strokeRect(4,4,120,56),k.g.fillStyle="#15803D",k.g.font="bold 34px system-ui",k.g.textAlign="center",k.g.fillText("R$",64,44),this.notaMat=new de({map:k.t,roughness:.8}),this.itens={},this.itens.controle=this.fazerControle(),t.add(this.itens.controle);let z=new wt,Q=nt("#FFFFFF",{r:.25});At(new ri(.042,.035,.1,28,1,!0),Q,z,0,.05,0),At(new ri(.039,.033,.098,28,1,!0),nt("#F1F5F9",{r:.3,ds:!0}),z,0,.051,0),re(z,Q,.035,.035,.006,0,.003,0),At(new Ae(.0405,.0035,6,28),Q,z,0,.1,0,{rx:j/2}),At(new Ae(.028,.008,8,14),Q,z,.045,.05,0,{}),this.cafeLiq=re(z,new de({color:"#3B1D0B",roughness:.15}),.036,.036,.004,0,.09,0,{cast:!1}),this.cafeLiq.visible=!1,Cn(z,!0,!1),this.itens.xicara=z,t.add(z);let H=new be(this.notaGeo,this.notaMat);H.castShadow=!0,this.itens.nota=H,t.add(H);let Z=new wt;for(let P=0;P<6;P++){let L=new be(this.notaGeo,this.notaMat);L.position.y=P*.005,L.rotation.y=(P%3-1)*.08,Z.add(L)}Cn(Z,!0,!1),this.itens.maco=Z,t.add(Z);let q=new wt;re(q,nt("#B7793A",{r:.4}),.0105,.02,1.45,0,.725,0),re(q,nt("#1F2937",{r:.4}),.0205,.021,.35,0,.175,0),re(q,nt("#E8F1FF"),.0105,.0105,.02,0,1.455,0),re(q,nt("#3B82F6"),.0108,.0108,.008,0,1.468,0),Cn(q,!0,!1),this.itens.taco=q,t.add(q);let gt=new wt;ut(gt,nt("#111827",{r:.3}),[-.035,-.07,-.005],[.035,.07,.005],.008),this.celTela=Ee(64,128),At(new Ge(.062,.126),new ze({map:this.celTela.t,toneMapped:!1}),gt,0,0,.0055,{cast:!1}),this.itens.celular=gt,t.add(gt);let St=new wt;re(St,nt("#FACC15",{r:.25,m:.9}),.025,.025,.006,0,0,0,{rx:j/2}),this.itens.moeda=St,t.add(St);let Y=()=>{let P=new wt;return re(P,nt("#9CA3AF",{m:.8,r:.3}),.003,.001,.05,0,.025,0),re(P,nt("#1D4ED8"),.006,.006,.08,0,-.04,0),At(new Ei(.02,.04,4),nt("#FACC15",{ds:!0}),P,0,-.09,0,{rx:j}),P.scale.setScalar(1.7),P};this.itens.dardo=Y(),t.add(this.itens.dardo);let $=new wt;this.aljavaD=[0,1,2].map(P=>{let L=Y();return L.position.set((P-1)*.018,0,0),L.rotation.z=(P-1)*.12,$.add(L),L}),this.itens.aljava=$,t.add($),Object.values(this.itens).forEach(P=>{P.visible=!1});let dt=this.nuvem=new wt,X=nt("#94A3B8",{r:1});[[0,0,0,.16],[-.14,-.03,0,.12],[.15,-.02,.02,.13],[.05,.08,0,.12],[-.06,.02,.08,.1]].forEach(([P,L,V,ot])=>pe(dt,X,ot,P,L,V,{cast:!1})),this.gotas=[];for(let P=0;P<8;P++){let L=re(dt,Md("#60A5FA",{op:.85}),.006,.006,.07,-.15+P*.043,-.15,(P%3-1)*.05,{cast:!1});this.gotas.push(L)}dt.visible=!1,t.add(dt),this.balao=Ee(128,128),this.balaoT="",this.balaoS=new Vi(new Mi({map:this.balao.t,transparent:!0,depthWrite:!1})),this.balaoS.visible=!1,t.add(this.balaoS);for(let P in this.moveis){let L=this.moveis[P];if(!L.piso)for(let V of L.caixas)Q0(L.inner,V.c[0],V.c[1],V.h[0],V.h[1],V.r||0,P.startsWith("planta")?.3:.42)}Q0(t,3.2,.27,1.25,.24,0,.35),Or(t,We,.55,yt(We/2,.004,.27),new fn(-j/2,0,0),.2),Or(t,Xe,.55,yt(.27,.004,Xe/2),new fn(-j/2,0,j/2),.2),Or(t,We,.5,yt(We/2,.25,.003),new fn(0,0,j),.16),Or(t,Xe,.5,yt(.003,.25,Xe/2),new fn(0,j/2,j),.16),Or(t,.45,Ve,yt(.22,Ve/2,.003),new fn(0,0,-j/2),.18),Or(t,.45,Ve,yt(.003,Ve/2,.22),new fn(0,j/2,j/2),.18);let K=Ee(128,128);K.g.strokeStyle="#FFFFFF",K.g.lineWidth=7,qi(K.g,6,6,116,116,16),K.g.stroke(),K.g.fillStyle="rgba(255,255,255,.14)",K.g.fill(),this.contornoTex=K.t;for(let P in this.moveis){let L=this.moveis[P];L.marca=new be(new Ge(1,1),new ze({map:K.t,color:"#60A5FA",transparent:!0,depthWrite:!1,toneMapped:!1,opacity:.85})),L.marca.rotation.x=-j/2,L.marca.visible=!1,L.marca.renderOrder=2,t.add(L.marca),L.outer.traverse(V=>{V.userData.movel=P})}}fazerControle(){let t=new wt;ut(t,nt("#1F2937",{r:.35}),[-.08,-.015,-.035],[.08,.015,.035],.015);for(let e of[-1,1])pe(t,nt("#1F2937",{r:.35}),.035,e*.07,-.005,-.015,{s:[1,.7,1.3]});return pe(t,nt("#60A5FA",{e:"#60A5FA",ei:.6}),.009,-.04,.016,0),pe(t,nt("#F87171",{e:"#F87171",ei:.6}),.009,.04,.016,0),Cn(t,!0,!1)}planta(t,e,n,i,r=this.scene){let o=new wt;o.position.set(t,e,n),r.add(o);let a=i*.18;re(o,nt("#E7E5E4",{r:.6}),a,a*.8,i*.32,0,i*.16,0),re(o,nt("#57534E",{r:1}),a*.95,a*.95,.01,0,i*.32,0);let l=new wt;l.position.y=i*.32,o.add(l);let c=[nt("#16A34A",{r:.7,ds:!0}),nt("#22C55E",{r:.7,ds:!0}),nt("#15803D",{r:.7,ds:!0})],h=9;for(let f=0;f<h;f++){let u=f*Vt/h+f%2*.3,d=.35+f%3*.2,p=i*(.5+f%4*.1),v=new wt;v.rotation.set(0,u,0),l.add(v);let g=new wt;g.rotation.x=d,v.add(g),At(new ke(p*.5,10,8),c[f%3],g,0,p*.5,0,{s:[.32,1,.1]})}return Cn(o),(this.plantas||(this.plantas=[])).push(l),o}lugares(){let t=this.nav,e=(a,l)=>this.lugar(a,l),n=a=>{let l=t.perto(a[0],a[1]);return[l[0],l[1],a[2]??0]},i=e("mesa",[7.45,1.95]),r=e("mesa",[6.8,.3]);return{sofaS:e("sofa",[3.2,3,j]),sofaP:n(e("sofa",[3.2,2.3,j])),cafeP:n(e("cafe",[.98,4.9,-j/2])),cadS:e("mesa",[6.8,1.2,j]),cadP:n(e("mesa",[6.8,1.95,j])),monP:n([i[0],i[1],la(i,r)]),ritmo1:n(e("mesa",[5.5,2.35])),ritmo2:n(e("mesa",[7.9,2.45])),polS:e("poltrona",[.92,3.2,j/4]),polP:n(e("poltrona",[1.36,3.64,j/4])),janP:n([.62,1.85,-j/2]),danca:n([3.4,5.25,j/4]),sinP:this.sinP?n(this.sinP):n([8.5,4.6,-j/2])}}calibrarTacada(){let t=this.sinuca,e=[7.62,4.52],n=[t.x0+.11,t.z0+.11],i=[n[0]-e[0],n[1]-e[1]],r=Math.hypot(...i),o=[i[0]/r,i[1]/r],a=[e[0]+o[0]*.5,e[1]+o[1]*.5],l=[a[0]-o[0]*.06,a[1]-o[1]*.06],c=[l[0]+o[0]*.1-o[1]*.12,l[1]+o[1]*.1+o[0]*.12];this.bolas={R:e,Y:a,C:l,u:o,fimB:c,pk:n};let h=Math.atan2(o[0],o[1]),f=[o[1],-o[0]],u=[e[0]-o[0]*.9-f[0]*.13,e[1]-o[1]*.9-f[1]*.13];this.tacoBase={tip:[e[0]-o[0]*.035,e[1]-o[1]*.035],u:o,el:.16},this.sinP=this.lugar("sinuca",[u[0],u[1],h])}planoSinuca(t){if(this.planoChave===t&&this.planoAtual)return this.planoAtual;let e=(i,r,o)=>{let a=this.lugar("sinuca",[i,r,o]);if(a[0]<.32||a[0]>We-.32||a[1]<.32||a[1]>Xe-.25)return!1;for(let l in this.moveis){let c=this.moveis[l];if(!(l==="sinuca"||c.piso||!this.ativo(c)))for(let h of this.caixasDe(c)){let[f,u]=oa(a[0]-h.c[0],a[1]-h.c[1],-h.r);if(Math.abs(f)<h.h[0]+.2&&Math.abs(u)<h.h[1]+.2)return!1}}return!0},n=this.mesaSin.planejar(e);return n.lugar=this.lugar("sinuca",[n.stance[0],n.stance[1],n.yaw]),this.planoChave=t,this.planoAtual=n,n}mostrarBolas(t,e,n){let i=Tn.r,r=this.bolaAnt||(this.bolaAnt=[]);for(let o=0;o<=9;o++){let a=this.bolasM[o],l,c,h,f=-1;if(n)[l,c,h,f]=n.find((p,v)=>(this.bolaOrdem?this.bolaOrdem[v]:v)===o)||n[o];else{let d=t.find(p=>p.n===o);if(!d){a.visible=!1;continue}l=d.x,c=d.z,h=d.em?1:0}if(h)a.visible=!0,a.scale.setScalar(1),a.position.set(l,Tn.y,c);else if(f>=0&&e-f<.3){let d=(e-f)/.3;a.visible=!0,a.position.set(l,Tn.y-.07*d,c),a.scale.setScalar(1-.4*d)}else a.visible=!1;let u=r[o];if(u&&a.visible){let d=l-u[0],p=c-u[1],v=Math.hypot(d,p);if(v>1e-5&&v<.3){let g=yt(p/v,0,-d/v);a.quaternion.premultiply(new we().setFromAxisAngle(g,v/i))}}r[o]=[l,c]}}mostrarSinuca(t,e){let[n,i]=String(t.bolas||"").split("|"),r=i?this.mesaSin.planos.get(+i):null;if(!r){this.mostrarBolas(this.mesaSin.vista,-1);return}if(this.bolaOrdem=r.sim.final.map(o=>o.n),n==="pre")this.mostrarBolas(r.pre,-1);else if(n==="rack"){let o=Vv(e,.4,2.2);if(o<.5){let a=this.mesaSin.vista;this.mostrarBolas(a,-1),this.bolasM.forEach(l=>l.scale.multiplyScalar(1-o*2))}else this.mostrarBolas(r.pre,-1),this.bolasM.forEach(a=>a.scale.multiplyScalar((o-.5)*2))}else if(n==="jogo"){let o=Math.max(0,e-Du),a=r.sim.quadros,l=Math.min(a.length-1,Math.floor(o*60));this.mostrarBolas(null,o,a[l]),l===a.length-1&&(this.mesaSin.vista=r.sim.final)}else this.mostrarBolas(r.sim.final,99),this.mesaSin.vista=r.sim.final}tacoPontas(t){let e=this.boneco,n=e.root,i=t.taco,r=t.recuo||0,o=(b,S,x)=>this.pto("sinuca",b,S,x),a=[o(8.14,.02,5.1),o(8.11,1.46,4.93)],l=[n.localToWorld(yt(.27,.05,.17)),n.localToWorld(yt(.33,1.5,.25))],c=this.tacoBase,h=Math.cos(c.el),f=Math.sin(c.el),u=this.pto("sinuca",c.tip[0]-c.u[0]*h,.81+f,c.tip[1]-c.u[1]*h).sub(this.pto("sinuca",c.tip[0],.81,c.tip[1])).normalize(),d=this.pto("sinuca",c.tip[0],.812,c.tip[1]).addScaledVector(u,r*.2),p=[d.clone().addScaledVector(u,1.45),d],v,g,m;if(i<=0?(m=Ht(i+1),v=a[0].clone().lerp(l[0],m),g=a[1].clone().lerp(l[1],m)):(m=Ht(i),v=l[0].clone().lerp(p[0],m),g=l[1].clone().lerp(p[1],m)),i>0&&i<1){let b=Math.sin(j*m)*.25;v.y+=b,g.y+=b}return{butt:v,tip:g,ax:u,apoioBridge:this.pto("sinuca",c.tip[0],.8,c.tip[1]).addScaledVector(u,.26).setY(.795),dedos:u.clone().negate().setY(-.15)}}aplicarTaco(t){let[,e]=String(t.bolas||"").split("|"),n=e?this.mesaSin.planos.get(+e):null;n&&(this.tacoBase={tip:n.tip,u:n.u,el:.14});let i=this.tacoPontas(t),r=this.itens.taco;r.visible=!0;let o=i.tip.clone().sub(i.butt),a=o.length()||1;o.divideScalar(a),r.position.copy(i.butt),r.quaternion.setFromUnitVectors(yt(0,1,0),o);let l=t.taco,c=_t(l+1),h=lt(.98,.5,_t(l)),f=i.butt.clone().addScaledVector(o,h);if(t.ikR=[f.x,f.y,f.z],t.kR=Math.max(t.kR||0,c),l>.3&&(t.poloR=[.35,.75,-1]),l>.02){let u=i.apoioBridge;t.ikL=[u.x,u.y,u.z],t.kL=Math.max(t.kL||0,_t(l)),t.oriL=[i.dedos.x,i.dedos.y,i.dedos.z]}t.item=l>.5?"tacoShot":l>-.5?"tacoV":t.item}pensamento(t,e,n,i,r,o){if(!this.pensa){let u=Ee(512,288),d=new Vi(new Mi({map:u.t,transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1}));d.renderOrder=10,d.visible=!1,this.scene.add(d),this.pensa={tx:u,sp:d,prox:e+4+Math.random()*4,ini:-99,dur:4.2,chave:""}}let a=this.pensa,l=t.balao>.05||this.edit||this.reduz;if((e<a.ini-1||e>a.prox+60)&&(a.prox=e+3,a.ini=-99),!l&&e>=a.prox){let u=this.ideias(t,r,o),d=u[Math.floor(Math.random()*u.length)];d?(this.desenharPensamento(d),a.ini=e,a.prox=e+12+Math.random()*8):a.prox=e+5}let c=(e-a.ini)/a.dur,h=c>=0&&c<=1&&!l;if(a.sp.visible=h,h){let u=Ec(_t(c/.07)),d=1-Ht(_t((c-.88)/.12)),p=f(u)*d;a.sp.position.set(i.x,i.y+.74+.025*Math.sin(e*2.2),i.z),a.sp.scale.set(1.02*p,.574*p,1),a.sp.material.opacity=d}function f(u){return u<1?1+.12*Math.sin(j*u):1}}ideias(t,e,n){let i=this.h,r=this.d||{},o=[],a={tranquilo:["smiley","Tudo calmo hoje","#7C3AED"],feliz:["smiley","Dia bom!","#16A34A"],euforico:["confetti","Que dia!!","#D97706"],preocupado:["smiley-nervous","Hmm\u2026 vermelho","#EA580C"],triste:["smiley-sad","Paci\xEAncia, vai passar","#2563EB"]}[i];if(a&&o.push({ic:a[0],txt:a[1],cor:a[2]}),r.pct!=null&&isFinite(r.pct)&&!r.sim){let h=r.pct;o.push({ic:h>=0?"chart-line-up":"chart-line-down",txt:"Carteira "+(h>0?"+":"")+h.toFixed(2).replace(".",",")+"%",cor:h>=0?"#16A34A":"#DC2626"})}let l=(r.ativos||[]).filter(h=>h.vd!=null&&isFinite(h.vd));if(l.length){let h=l[Math.floor(Math.random()*l.length)];o.push({ic:"coins",txt:h.t+" "+(h.vd>=0?"\u25B2":"\u25BC")+" "+Math.abs(h.vd).toFixed(2).replace(".",",")+"%",cor:h.vd>=0?"#16A34A":"#DC2626"})}return String(t.bolas||"").startsWith("pre")&&o.push({ic:"target",txt:"Essa entra!",cor:"#16A34A"},{ic:"target",txt:"Mira na ca\xE7apa\u2026",cor:"#0F766E"}),t.item==="controle"&&o.push({ic:"lightning",txt:"Bora zerar essa fase!",cor:"#7C3AED"}),t.item==="tecla"&&o.push({ic:"chart-line-up",txt:"Analisando a carteira\u2026",cor:"#2563EB"}),(e==="cafe"||e==="gole")&&o.push({ic:"sparkle",txt:"Cafezinho!",cor:"#92400E"}),i==="triste"&&o.push({ic:"trophy",txt:"Longo prazo.",cor:"#2563EB"}),o}desenharPensamento(t){let{g:e,t:n}=this.pensa.tx;e.clearRect(0,0,512,288);let i=[[120,112,70],[200,82,78],[300,84,80],[380,112,66],[330,150,62],[190,152,66],[256,140,74],[120,150,52],[400,150,46]];e.save(),e.shadowColor="rgba(15,23,42,.25)",e.shadowBlur=14,e.shadowOffsetY=5,e.fillStyle="#FFFFFF";for(let[l,c,h]of i)e.beginPath(),e.arc(l,c,h,0,Vt),e.fill();for(let[l,c,h]of[[200,228,16],[178,258,10]])e.beginPath(),e.arc(l,c,h,0,Vt),e.fill();e.restore(),e.font="bold 40px system-ui, sans-serif";let r=40;for(;e.measureText(t.txt).width>300&&r>24;)r-=2,e.font=`bold ${r}px system-ui, sans-serif`;let o=e.measureText(t.txt).width,a=256-(o+62)/2;window.RI&&window.RI.desenhar(e,t.ic,a+24,120,52,t.cor),e.fillStyle="#1F2937",e.textBaseline="middle",e.fillText(t.txt,a+62,122),e.textBaseline="alphabetic",e.fillStyle=t.cor,e.fillRect(a+62,148,Math.min(o,120),4),n.needsUpdate=!0}planejarDardos(){let t={euforico:.045,feliz:.06,tranquilo:.075,preocupado:.1,triste:.12}[this.h]||.08,e=[0,1,2].map(()=>{let i=Math.random()*Vt,r=Math.min(.2,Math.abs(Math.sqrt(-2*Math.log(Math.random()+1e-9))*t*.7));return[Math.cos(i)*r,Math.sin(i)*r]}),n=e.map(([i,r])=>Math.hypot(i,r));return this.dardosPlano={pts:e,dist:n,mosca:n.some(i=>i<.035),ruim:n.every(i=>i>.12)},this.dardosPlano}pontoDardo(t){let e=this.dardosPlano||this.planejarDardos(),[n,i]=e.pts[t]||[0,0];return this.dardosCentro.clone().add(yt(.02,n,i))}teclado(){return{L:this.pto("mesa",6.62,.822,.645),R:this.pto("mesa",6.97,.822,.645)}}mundo(t){return t.getWorldPosition(new U)}alvoCao(){return this.mundo(this.cao.cab).add(yt(0,.05,0))}alvoArcade(){return this.arcMao.map(t=>this.mundo(t))}alvoTouro(){return this.mundo(this.touroCab)}alvoCofre(){return this.mundo(this.cofreMacaneta)}alvoPorco(){return this.mundo(this.porco).add(yt(0,.17,0))}alvoTrofeu(){let t=this.trofeuPai,e=this.trofeuBase;return{L:t.localToWorld(e.clone().add(yt(-.1,.17,0))),R:t.localToWorld(e.clone().add(yt(.1,.17,0)))}}atualizar(t){let e=this.d;this.d=t;let n=t.humor||"tranquilo";this.boneco&&((t.boneco!==e.boneco||t.acessorio!==e.acessorio)&&this.boneco.setAparencia(t.boneco,t.acessorio),this.boneco.setCor(t.cor),t.icone!==e.icone&&this.boneco.setIcone(t.icone)),this.cadAcento&&this.cadAcento.color.set(t.cor||"#2457F5"),this.titulo=t.titulo,this.pctTxt=t.pct==null||!isFinite(t.pct)?"":(t.pct>0?"+":"")+t.pct.toFixed(2).replace(".",",")+"%";let i=Object.fromEntries((e.ativos||[]).map(a=>[a.t,a]));for(let a of t.ativos||[]){let l=i[a.t];l&&l.preco!=null&&a.preco!=null&&Math.abs(l.preco-a.preco)>1e-9&&(this.flash[a.t]={t:performance.now(),up:a.preco>l.preco})}e.ativos&&JSON.stringify((e.ativos||[]).map(a=>[a.t,a.preco]))!==JSON.stringify((t.ativos||[]).map(a=>[a.t,a.preco]))&&this.log("cota\xE7\xF5es atualizadas");let r=!t.sim&&t.serie&&t.serie.pts&&t.serie.pts.length>1?t.serie.pts:null;if(r){let a=r.map(c=>c[1]),l=this.serieAlvo;if(!l||l.v.length!==a.length||l.v.some((c,h)=>Math.abs(c-a[h])>1e-6)){let c=l?this.serieAgora():null;this.serieDe=c?Wv(c,a.length):a.map(()=>0),this.serieAlvo={v:a,ts:r.map(h=>h[0]),hoje:!!t.serie.hoje},this.serieT0=performance.now(),this.sujo=!0}}else this.serieAlvo=null;if(!t.sim&&t.pct!=null&&isFinite(t.pct)){let a=this.hist[this.hist.length-1];(!a||Math.abs(a.v-t.pct)>1e-6)&&(this.hist.push({v:t.pct,t:Date.now()}),this.hist.length>60&&this.hist.shift())}if(t.layout!==void 0&&!this.salvando&&!this.arrasto){let a=l=>JSON.stringify({m:l&&l.m||{},off:[...l&&l.off||[]].sort(),c:l&&l.c||{}});a(t.layout)!==a(this.layoutAtual())&&(this.aplicarLayout(t.layout,!0),this.navOk=!1)}this.tem=t.tem||{},this.dir||(this.dir=new Uu(this));let o=this.aplicarDecor(!t.tudo&&!t.sim);n!==this.h&&(this.h&&this.log(t.sim?"simulando: "+(t.titulo||n).toLowerCase():"humor: "+(t.titulo||n).toLowerCase()),this.h=n,this.aplicarHumor(),this.dir.humor(n)),(o||!this.navOk)&&(this.navOk=!0,this.mudouLayout()),this.renderer.domElement.setAttribute("aria-label","Escrit\xF3rio 3D: "+(t.titulo||"")),this.sujo=!0}aplicarDecor(t){let e=!1;for(let n in this.dec){let i=this.dec[n],r=!!this.tem[n]&&!this.off.has(n),o=i.outer||i;o.visible!==r&&(o.visible=r,e=!0,r&&(this.pops[n]=performance.now(),t&&!this.vistos.has(n)&&(this.vistos.add(n),this.salvarVistos(),this.dir&&this.dir.novidade(n))))}return this.dec.cachorro&&(this.cao.g.visible=this.dec.cachorro.outer.visible),e}get pops(){return this._pops||(this._pops={})}lerVistos(){try{return new Set(JSON.parse(localStorage.getItem("radar-esc-vistos")||"[]"))}catch{return new Set}}salvarVistos(){try{localStorage.setItem("radar-esc-vistos",JSON.stringify([...this.vistos]))}catch{}}equipar(t,e){e?this.off.delete(t):this.off.add(t),this.aplicarDecor(!1)&&this.mudouLayout(),this.avisarLayout(),this.log((e?"colocou ":"guardou ")+(this.moveis[t]?this.moveis[t].nome.toLowerCase():t))}avisarLayout(){if(typeof this.d.onLayout=="function"){this.salvando=!0;try{this.d.onLayout(this.layoutAtual())}finally{this.salvando=!1}}}restaurar(){let t=[...this.off];this.aplicarLayout({off:t,c:this.cores}),this.avisarLayout(),this.log("restaurou os m\xF3veis")}aplicarHumor(){let t=i_[this.h];this.cfg=t,this.confete.visible=this.h==="euforico";for(let e of this.notas)this.scene.remove(e.m);this.notas=[],this.aplicarLuz()}aplicarLuz(){let t=this.cfg,e=this.noite;this.hemi.intensity=t.hemi*(e?.55:1),this.hemi.color.set(e?"#A9B8E8":"#E3EBFF"),this.key.intensity=t.key*(e?.35:1),this.key.color.set(e?"#9DB0FF":t.keyCor),this.fill.intensity=e?.25:.35;let n=t.lamp||e;this.lampLuz.intensity=n?2.6:0,this.lampHalo.material.opacity=n?.55:0,this.cupula.material.emissiveIntensity=n?1.1:0;let i=t.pend||e;this.pendLuz.intensity=i?2.4:0,this.tvLuz.color.set(t.tv),this.monLuz.color.set(t.mon),this.monHalo.material.color.set(t.mon),this.feixe.material.opacity=e?.06:t.raio,this.feixe.material.color.set(e?"#A5B4FC":"#FFE7A3"),this.renderer.toneMappingExposure=t.exp*(e?.86:1),this.scene.environmentIntensity=e?.14:.32}ligarControles(){let t=this.renderer.domElement,e=null;t.style.touchAction="pan-y";let n=new Co,i=new vt,r=new Fn(yt(0,1,0),0),o=c=>{let h=t.getBoundingClientRect();i.set((c.clientX-h.left)/h.width*2-1,-((c.clientY-h.top)/h.height)*2+1),n.setFromCamera(i,this.cam)},a=c=>{o(c);let h=new U;return n.ray.intersectPlane(r,h)?h:null};t.addEventListener("pointerdown",c=>{if(this.edit){o(c);let h=[];for(let u in this.moveis){let d=this.moveis[u];this.ativo(d)&&h.push(d.outer)}let f=n.intersectObjects(h,!0).find(u=>u.object.userData.movel);if(f){let u=this.moveis[f.object.userData.movel],d=a(c)||f.point;this.arrasto={m:u,ini:[u.x,u.z,u.ri],off:[u.x-d.x,u.z-d.z],moveu:!1,id:c.pointerId,x:c.clientX,y:c.clientY,ok:!0},this.sel=u;try{t.setPointerCapture(c.pointerId)}catch{}c.preventDefault(),this.sujo=!0;return}}e={x:c.clientX,y:c.clientY,az:this.az,el:this.el_,id:c.pointerId,moveu:!1}}),window.addEventListener("pointermove",c=>{let h=this.arrasto;if(h&&c.pointerId===h.id){if(!h.moveu&&Math.hypot(c.clientX-h.x,c.clientY-h.y)>5&&(h.moveu=!0),!h.moveu)return;let d=a(c);if(!d)return;let p=Math.round((d.x+h.off[0])/.05)*.05,v=Math.round((d.z+h.off[1])/.05)*.05;[p,v]=this.prender(h.m,p,v,h.m.ri),h.ok=this.cabe(h.m,p,v,h.m.ri),this.posicionar(h.m,p,v,h.m.ri),this.sujo=!0;return}if(!e||c.pointerId!==e.id)return;let f=c.clientX-e.x,u=c.clientY-e.y;if(!e.moveu&&Math.hypot(f,u)>6){e.moveu=!0;try{t.setPointerCapture(c.pointerId)}catch{}this.camModo!=="sala"&&this.setCam("sala",!0)}e.moveu&&(this.az=_t(e.az-f*.006,.12,j/2-.12),c.pointerType!=="touch"&&(this.el_=_t(e.el+u*.004,.22,1)),this.sujo=!0)});let l=c=>{let h=this.arrasto;if(h&&(!c||c.pointerId===h.id)){this.arrasto=null;let f=h.m;if(h.moveu)h.ok?this.log("moveu "+f.nome.toLowerCase()):(this.posicionar(f,...h.ini),this.log("n\xE3o cabe ali"));else{for(let u=1;u<=8;u++){let d=h.ini[2]+u,[p,v]=this.prender(f,f.x,f.z,d);if(this.cabe(f,p,v,d)){this.posicionar(f,p,v,d);break}}this.log("girou "+f.nome.toLowerCase())}this.mudouLayout(),this.avisarLayout(),this.sujo=!0;return}e&&e.moveu&&this.log("girou a c\xE2mera"),e=null};window.addEventListener("pointerup",l),window.addEventListener("pointercancel",l),t.addEventListener("dblclick",()=>{this.edit||(this.az=j/4,this.el_=.5,this.setCam("sala"))})}setEdicao(t){this.edit=!!t,this.sel=null,this.sujo=!0,this.renderer.domElement.style.cursor=t?"grab":"";for(let e in this.moveis)this.moveis[e].marca.visible=!1;t&&this.camModo!=="sala"&&this.setCam("sala",!0),this.log(t?"arrumando o escrit\xF3rio":"terminou de arrumar")}setCam(t,e){this.camModo=t,this.sujo=!0,e||this.log({sala:"vis\xE3o da sala",tela:"zoom no computador",seguir:"seguindo o boneco"}[t]||t)}alvoCamera(t){let e=this.cam.aspect;if(window.__ofCamOv)return window.__ofCamOv(this,t,yt);if(this.camModo==="tela")return e<1?{pos:this.pto("mesa",7.12,1.2,1.1),alvo:this.pto("mesa",6.8,1.13,.22),fov:70}:{pos:this.pto("mesa",7.2,1.24,1.2),alvo:this.pto("mesa",6.87,1.12,.22),fov:50};if(this.camModo==="seguir"){let h=this.boneco.root.position,f=this.az+.1*Math.sin(t*.2),u=.42,d=e<1?4.6:3.9;return{pos:yt(h.x+Math.sin(f)*Math.cos(u)*d,.95+Math.sin(u)*d,h.z+Math.cos(f)*Math.cos(u)*d),alvo:yt(h.x,.95,h.z),fov:38}}let n=30,i=this.reduz||this.edit?0:Math.sin(t*.15)*.025,r=[this.az.toFixed(3),this.el_.toFixed(3),e.toFixed(3)].join();r!==this.fitKey&&(this.fitKey=r,this.fit=this.enquadrar(this.az,this.el_,n,e));let{dist:o,alvo:a}=this.fit,l=Math.cos(this.el_),c=this.az+i;return{pos:yt(a.x+Math.sin(c)*l*o,a.y+Math.sin(this.el_)*o,a.z+Math.cos(c)*l*o),alvo:a.clone(),fov:n}}laco(){if(this.raf=0,!this.el.isConnected){this.destruir();return}if(document.hidden||this.el.closest(".of-pausa"))this.tAnt=performance.now();else{let e=performance.now(),n=(e-this.tAnt)/1e3,i=Math.min(window.__ofT!=null?.3:.05,n);this.tAnt=e;let r=this.reduz?2:(e-this.t0)/1e3;(!this.reduz||this.sujo)&&this.quadro(r,this.reduz?0:i),this.sujo=!1,this.ms=this.ms==null?16:this.ms*.95+Math.min(n*1e3,100)*.05,this.ms>26&&this.ao&&!window.__ofComAO&&e-(this.tPr||0)>3e3?(this.tPr=e,this.ao=!1,this.ms=18):this.ms>30&&this.pr>1&&e-(this.tPr||0)>3e3&&(this.tPr=e,this.pr=Math.max(1,this.pr-.25),this.renderer.setPixelRatio(this.pr),this.redimensionar())}this.raf=requestAnimationFrame(this.laco)}emitir(t,e=10,n="#FDE68A"){let i=0;for(let r of this.faiscas)if(!(r.vida<1.1)&&(r.vida=0,r.s.visible=!0,r.s.material.color.set(n),r.s.position.copy(t),r.v=yt((Math.random()-.5)*1.6,1+Math.random()*1.4,(Math.random()-.5)*1.6),++i>=e))break}quadro(t,e){let n=new Date().getHours(),i=window.__ofNoite!=null?!!window.__ofNoite:n<6||n>=19;i!==this.noite&&(this.noite=i,this.aplicarLuz());let r=this.boneco,o=this.dir.passo(window.__ofT!=null?window.__ofT:null,e),a=o.pose,l=o.s||{},c=l.fx||"",h=o.tl,f=o.pose.fxk||0,u=this.posF||(this.posF={x:o.pos[0],z:o.pos[1],y:o.pos[2],vx:0,vz:0,vy:0}),d=(Y,$,dt,X)=>{let K=Y-dt,P=Math.exp(-X*e),L=($+X*K)*e;return[dt+(K+L)*P,($-X*L)*P]},p=u.x,v=u.z,g=u.y;if(e>0&&window.__ofT==null){[u.x,u.vx]=d(u.x,u.vx,o.pos[0],12),[u.z,u.vz]=d(u.z,u.vz,o.pos[1],12);let Y=u.y+jn(u.y,o.pos[2]);[u.y,u.vy]=d(u.y,u.vy,Y,11)}else u.x=o.pos[0],u.z=o.pos[1],u.y=o.pos[2];if(e>0&&!a.andando&&(a.sent||0)<.3){let Y=Math.hypot(u.x-p,u.z-v)/e,$=Math.abs(jn(g,u.y))/e,dt=_t((Y-.08)*5+($-.5)*.9);if(this.passoK=lt(this.passoK||0,dt,Math.min(1,e*8)),this.passoF=(this.passoF||0)+e*(2.2+Y*4+$*.8)*this.passoK,this.passoK>.02){let X=Math.sin(this.passoF*j),K=this.passoK;a={...a,lL:[a.lL[0]+.28*Math.max(0,X)*K,a.lL[1]+.55*Math.max(0,X)*K],lR:[a.lR[0]+.28*Math.max(0,-X)*K,a.lR[1]+.55*Math.max(0,-X)*K],alt:a.alt-.012*Math.abs(X)*K}}}this.decidirProps(l,o.k,h);let m=Object.keys(this.prop).find(Y=>["R","LR","joga"].includes(this.prop[Y].h)),b=Object.keys(this.prop).find(Y=>["L","LR"].includes(this.prop[Y].h)),S=this.mundo(r.head),x=yt(Math.sin(u.y),0,Math.cos(u.y)),y=[],M=(Y,$,dt)=>{let X=$.clone().sub(S);Math.abs(jn(u.y,Math.atan2(X.x,X.z)))<1.5&&X.length()>.5&&y.push({nome:Y,pos:$,peso:dt})};if(M("tv",yt(3.2,1.5,.12),1),M("janela",yt(-.6,1.7,1.8),.9),M("relogio",yt(5.25,2.35,.05),.5),M("camera",this.cam.position.clone(),this.h==="triste"?.4:1.2),M("monitor",this.pto("mesa",6.8,1.14,.22),.6),this.cao.g.visible&&M("cao",this.mundo(this.cao.cab),1.3),a=this.vida.passo({...a,item:m?a.item||m:a.item},{T:t,dt:e,humor:this.h,reduz:this.reduz,cabeca:S,yawCorpo:u.y,alvos:y,foco:l.foco?l.foco(this):null,nariz:S.clone().addScaledVector(x,.15*r.esc).add(yt(0,-.02,0)),ocupado:!!l.ocupado||a.taco>-.9,ocupadoL:!!b,facePropria:!!o.pose._fp,legsLivres:a.alt>.86&&Math.abs(a.lL[0])<.25&&Math.abs(a.lR[0])<.25&&!l.semPeso}),a=this.filtro.passo(a,e),r.root.position.set(u.x,0,u.z),r.root.rotation.y=u.y+(a.yawAdd||0),r.root.updateMatrixWorld(!0),a.taco>-.98&&this.h==="feliz")a={...a},this.aplicarTaco(a);else{let Y=this.tacoPontas({taco:-1}),$=Y.tip.clone().sub(Y.butt).normalize(),dt=this.itens.taco;dt.visible=!0,dt.position.copy(Y.butt),dt.quaternion.setFromUnitVectors(yt(0,1,0),$)}let _=Object.keys(this.prop).find(Y=>["R","LR","joga"].includes(this.prop[Y].h)),E=Object.keys(this.prop).find(Y=>this.prop[Y].h==="L");if(["tecla","tacoV","tacoShot"].includes(a.item)||(a.item=_==="joga"?"":_||""),E&&(a.mL=Math.max(a.mL||0,.9)),a.item==="controle"&&this.h==="tranquilo"&&(a.botaoR=_d.estado(t).botao?1:0),r.aplicar(a,t,e),r.desenharRosto(this.vida.rosto(a,{T:t,dt:e,humor:this.h,facePropria:!!o.pose._fp}),t),r.blob.position.set(u.x,.004,u.z),r.blob.material.opacity=_t(1-(a.dy||0)*2,.3,1),this.moverProps(a,h,f,e),this.itens.celular.visible&&this.desenharCel(t),this.mostrarSinuca(this.h==="feliz"?a:{},h),this.cao.g.visible){let Y,$,dt=[Math.sin(u.y),Math.cos(u.y)];if(c==="caoVem"||c==="caoCarinho"){let K=[u.x+dt[0]*.55,u.z+dt[1]*.55];Y=[K[0],K[1],la(K,[u.x,u.z])],$=c==="caoCarinho"?"carinho":"senta"}else{let K={triste:"dorme",preocupado:"senta",tranquilo:"dorme",feliz:"senta",euforico:"pula"}[this.h];if(K==="dorme")Y=this.lugar("cachorro",[1.35,6.2,.8]),$="dorme";else{let P=this.caoPerto||[u.x,u.z];Y=[P[0],P[1],la(P,[u.x,u.z])],$=K}}let X=this.cao.mover(Y,e,this.nav);if(this.cao.g.position.set(this.cao.pos[0],0,this.cao.pos[1]),this.cao.g.rotation.y=this.cao.yaw,this.cao.quadro(X?$:"anda",t),!this.caoT||t-this.caoT>4){this.caoT=t;let K=[Math.cos(u.y),-Math.sin(u.y)],P=[[.75,.35],[-.75,.35],[.8,-.3],[-.8,-.3]];for(let[L,V]of P){let ot=u.x+K[0]*L+dt[0]*V,Et=u.z+K[1]*L+dt[1]*V;if(this.nav.livre(ot,Et)){this.caoPerto=[ot,Et];break}}}}let A=c==="racao"&&h>1&&h<4.2;if(this.dec.aquario.outer.visible){this.racao.forEach(($,dt)=>{let X=A?((h-1)*.55+dt/14)%1:0;$.visible=A,$.position.set(.25+Jn(dt)*.2,1.24-X*.42,6.65+Jn(dt+5)*.35)});let Y=this.peixeSobe=lt(this.peixeSobe||0,A?1:0,Math.min(1,e*1.5));this.peixes.forEach(($,dt)=>{let X=t*(.5+dt*.12)+dt*1.7;$.position.set(.35+Math.sin(X*1.3)*.15*(1-Y*.6),lt(.95+dt*.06+Math.sin(X*2)*.03,1.15+Math.sin(X*4)*.02,Y),6.83+Math.cos(X)*.32*(1-Y*.5)),$.rotation.y=Math.atan2(-Math.sin(X)*.32,Math.cos(X*1.3)*.2)+j}),this.bolhas.forEach(($,dt)=>{let X=(t*.4+dt/6)%1;$.position.set(.45+Math.sin(t*3+dt)*.02,.8+X*.42,7.1-dt*.02)})}let C=c==="arcade";if(this.dec.fliperama.outer.visible){let Y=yd.estado(t),$=C?_t(Y.vx*.035,-.4,.4):0;this.joyInc=lt(this.joyInc||0,$,Math.min(1,e*14)),this.joy.rotation.set(C?.08*Math.sin(t*5):0,0,-this.joyInc),this.arcMao[0].position.copy(this.arcMaoBase[0]).add(yt(Math.sin(this.joyInc)*.07,0,0)),this.botoesArc.forEach((dt,X)=>{let K=C&&Y.atira&&X===0;dt.position.y=dt.userData.y0-(K?.007:0),dt.material.emissiveIntensity=K?1.6:.35}),this.arcMao[1].position.copy(this.arcMaoBase[1]).add(yt(0,C&&Y.atira?-.012:0,0))}if(this.dec.cofre.outer.visible){let Y=c==="cofre"||c==="moedaJoga"?a.porta:0;this.cofrePorta.rotation.y=-Y,this.cofreBrilho.material.opacity=_t(Y/1.9)*.85}if(c==="porco"){let Y=this.alvoPorco();h>1.15&&this.fxId!==l.t0&&(this.fxId=l.t0,this.emitir(Y,8,"#FDE68A"));let $=h>1.15?Math.sin((h-1.15)*30)*Math.exp(-(h-1.15)*4):0;this.porco.scale.set(1+$*.12,1-$*.12,1+$*.12)}else this.porco.scale.setScalar(1);let F=c==="trofeu"||c==="trofeuPega"&&f>.92||c==="trofeuSolta"&&f<.85;if(this.dec.trofeu.outer.visible){let Y=this.trofeuObj;if(F){let $=r.mL.clone().add(r.mR).multiplyScalar(.5).add(yt(0,-.15,0));Y.position.copy(this.trofeuPai.worldToLocal($)),Y.rotation.y=r.root.rotation.y-this.dec.trofeu.outer.rotation.y}else Y.position.copy(this.trofeuBase),Y.rotation.y=0}if(this.dec.dardos.visible){if(c==="dardo"&&f<.01&&h<.15&&(this.dardos.forEach(Y=>{Y.visible=!1}),this.voos=[]),c==="dardo"&&f%1>.4){let Y=Math.floor(f),$=l.t0+":"+Y;if(this.dardoKey!==$&&Y<3){this.dardoKey=$;let dt=this.pontoDardo(Y),X=r.mR.clone(),K=.36,P=yt(0,-9.8,0),L=dt.clone().sub(X).sub(P.clone().multiplyScalar(.5*K*K)).divideScalar(K);(this.voos||(this.voos=[])).push({i:Y,de:X,v0:L,alvo:dt,Tv:K,t:0})}}for(let Y of this.voos||[]){Y.t+=Math.min(e,.05);let $=this.dardos[Y.i];$.visible=!0;let dt=Math.min(Y.t,Y.Tv),X=yt(0,-9.8,0),P=Y.v0.clone().addScaledVector(X,dt).clone().normalize();if(Y.t<Y.Tv)$.position.copy(Y.de).addScaledVector(Y.v0,dt).addScaledVector(X,.5*dt*dt).addScaledVector(P,-.07),$.quaternion.setFromUnitVectors(yt(0,1,0),P).multiply(new we().setFromAxisAngle(yt(0,1,0),dt*30)),Y.dir=P;else{let L=Y.t-Y.Tv,V=.16*Math.exp(-L*8)*Math.sin(L*46),ot=Y.dir||P;$.position.copy(Y.alvo).addScaledVector(ot,-.068),$.quaternion.setFromUnitVectors(yt(0,1,0),ot).premultiply(new we().setFromAxisAngle(yt(0,0,1),V))}}}else this.dardos.forEach(Y=>{Y.visible=!1});let I=this.dec.globo.visible&&(this.h==="euforico"||c==="globo");for(let Y of this.spots)Y.intensity=I?9:0;this.dec.globo.visible&&(this.globo.rotation.y=t*.8,this.spots.forEach((Y,$)=>{let dt=t*.9+$*Vt/4;Y.target.position.set(3.4+Math.cos(dt)*2.2,0,5+Math.sin(dt)*1.8)}));let N=performance.now();for(let Y in this.pops){let $=(N-this.pops[Y])/900,dt=this.dec[Y],X=dt.outer||dt;if($>=1||!X.visible){X.scale.setScalar(1),delete this.pops[Y];continue}let K=1+Math.sin($*j*2.5)*Math.exp(-$*4)*.35;X.scale.setScalar(Math.max(.01,$<.25?Ec($/.25)*K:K)),(!this.popFx||this.popFx!==Y+this.pops[Y])&&(this.popFx=Y+this.pops[Y],this.emitir(this.mundo(X).add(yt(0,.6,0)),14))}if(c==="novidade"&&this.fxId!=="n"+l.t0&&h>.2){this.fxId="n"+l.t0;let Y=this.mundo(r.head);this.emitir(Y.add(yt(0,.35,0)),12,"#FACC15")}for(let Y of this.faiscas){if(Y.vida>=1.1)continue;Y.vida+=e,Y.v.y-=2.4*e,Y.s.position.addScaledVector(Y.v,e);let $=Y.vida/1.1;Y.s.material.opacity=1-$,Y.s.scale.setScalar(.09*(1-$*.5)),Y.s.material.rotation+=e*3,Y.vida>=1.1&&(Y.s.visible=!1)}let B=this.mundo(r.head);if(this.nuvem.visible=a.nuvem>.5,this.nuvem.visible&&(this.nuvem.position.set(B.x,B.y+.75+Math.sin(t*1.6)*.03,B.z),this.gotas.forEach((Y,$)=>{let dt=(t*1.8+$*.37)%1;Y.position.y=-.12-dt*.4,Y.material.opacity=.9*(1-dt)})),this.balaoS.visible=a.balao>.05,this.balaoS.visible){if(a.balaoT!==this.balaoT){this.balaoT=a.balaoT;let{g:Y,t:$}=this.balao;Y.clearRect(0,0,128,128),Y.fillStyle="#FFF",Y.strokeStyle="#CBD5E1",Y.lineWidth=3,qi(Y,8,8,112,86,22),Y.fill(),Y.stroke(),Y.beginPath(),Y.moveTo(40,92),Y.lineTo(34,120),Y.lineTo(62,93),Y.fill(),window.RI&&window.RI.desenhar(Y,a.balaoT,64,51,60,a.balaoT==="chart-line-down"?"#DC2626":a.balaoT==="smiley-nervous"?"#F59E0B":"#7C3AED"),$.needsUpdate=!0}this.balaoS.position.set(B.x+.25,B.y+.6,B.z),this.balaoS.scale.setScalar(.42*a.balao),this.balaoS.material.opacity=a.balao}if(this.pensamento(a,t,e,B,c,l),a.solta&&a.solta!==this.ultSolta){this.ultSolta=a.solta;for(let Y=0;Y<4;Y++){let $=new be(this.notaGeo,this.notaMat);$.castShadow=!0,$.position.copy(r.mR),this.scene.add($);let dt=yt(Math.sin(u.y),0,Math.cos(u.y));this.notas.push({m:$,v:yt(dt.x*.6+(Math.random()-.5)*1.2,2.2+Math.random()*1.2,dt.z*.6+(Math.random()-.5)*1.2),rv:yt(Math.random()*6,Math.random()*6,Math.random()*6),vida:0})}}a.solta||(this.ultSolta=0);for(let Y=this.notas.length-1;Y>=0;Y--){let $=this.notas[Y];$.vida+=e,$.m.position.y>.01?($.v.y-=4.5*e,$.v.multiplyScalar(.985),$.m.position.addScaledVector($.v,e),$.m.rotation.x+=$.rv.x*e,$.m.rotation.y+=$.rv.y*e,$.m.rotation.z+=$.rv.z*e,$.v.y<-.6&&($.v.y=-.6+Math.sin($.vida*9)*.25)):($.m.position.y=.006,$.m.rotation.set(0,$.m.rotation.y,0)),$.vida>6&&(this.scene.remove($.m),this.notas.splice(Y,1))}let k=new Date,z=k.getSeconds()+k.getMilliseconds()/1e3,Q=k.getMinutes()+z/60,H=k.getHours()%12+Q/60;this.pS.rotation.z=-z/60*Vt,this.pM.rotation.z=-Q/60*Vt,this.pH.rotation.z=-H/12*Vt,(this.plantas||[]).forEach((Y,$)=>{Y.rotation.z=Math.sin(t*.8+$)*.03,Y.rotation.x=Math.sin(t*.6+$*2)*.02});{let Y=this.prop.xicara&&this.prop.xicara.h==="casa";c==="cafe"?(this.cafeNivel=le(h,2.55,4.15),h>2.5&&(this.cafeQuente=t)):c==="gole"?this.cafeNivel=1-.36*le(h,.7,1.7)-.36*le(h,2.7,3.6):Y&&(this.cafeNivel=0);let $=this.cafeNivel||0;this.cafeLiq.visible=$>.02,this.cafeLiq.position.y=.012+.08*$,this.cafeLiq.scale.setScalar(.92+.1*$);let dt=c==="cafe"&&h>2.45&&h<4.2;if(this.jatoCafe.visible=dt,dt){let L=.945+.08*$;this.jatoCafe.scale.set(1+.15*Math.sin(t*40),1.128-L,1),this.jatoCafe.position.set(.4,(1.128+L)/2,4.9)}this.anelCafe.emissiveIntensity=c==="cafe"&&h>1.95&&h<4.2?2.4+.6*Math.sin(t*10):.55;let X=this.itens.xicara.getWorldPosition(new U),K=$>.05&&t-(this.cafeQuente??-99)<30;this.vapor.forEach((P,L)=>{let V=(t*.45+L/4)%1;P.position.copy(P.parent.worldToLocal(X.clone().add(yt(Math.sin(t*2+L)*.015,.1+V*.22,Math.cos(t*1.7+L)*.015)))),P.material.opacity=K?.32*Math.sin(j*V):0,P.scale.setScalar(.04+V*.1)})}let Z=a.item==="tecla";if(this.teclas.material.emissiveIntensity=Z?.4+.3*Math.abs(Math.sin(t*14)):.25,this.monLuz.intensity=1+.25*Math.sin(t*2.2)+(performance.now()-(this.ultimaAcao||0)<900?.8:0),this.dec.neon.visible){let Y=Math.sin(t*7)>.97||Math.sin(t*23)>.995;this.neonM.opacity=Y?.35:1,this.neonHalo.material.opacity=Y?.1:.35}if(this.dec.arcoiris.visible&&(this.arcoHalo.material.opacity=.25+(this.dir.itemAtual==="arcoiris"?.25*Math.abs(Math.sin(t*4)):0)),this.decPorquinho.visible&&c!=="porco"&&(this.porco.position.y=.775+Math.abs(Math.sin(t*1.6))*.012),this.confete.visible){let Y=this.dummy||(this.dummy=new Le);this.confData.forEach(($,dt)=>{let X=Ve-(t*$.v+$.y0)%(Ve+.3);Y.position.set($.x+Math.sin(t*1.5+$.sw)*.2,X,$.z+Math.cos(t*1.2+$.sw)*.15),Y.rotation.set(t*$.rv+$.r,t*$.rv*.7,$.r),Y.updateMatrix(),this.confete.setMatrixAt(dt,Y.matrix)}),this.confete.instanceMatrix.needsUpdate=!0}let q=this.camModo==="tela";if((this.reduz||t-(this.tMon||-9)>(q?1/30:1/8)||this.sujo)&&(this.tMon=t,this.desenharMonitor(t)),(this.reduz||t-(this.tTv||-9)>1/20)&&(this.tTv=t,this.tvVitoria=l.vibras?Math.max(0,...l.vibras.map(Y=>Zt(h,Y,Y+1.3))):0,this.desenharTV(t,this.h==="tranquilo"?"jogo":"news")),(this.reduz||t-(this.tCeu||-9)>1/8)&&(this.tCeu=t,this.desenharCeu(t)),this.dec.fliperama.outer.visible&&(this.reduz||t-(this.tArc||-9)>(C?1/24:1/6))&&(this.tArc=t,this.desenharArcade(t)),this.edit)for(let Y in this.moveis){let $=this.moveis[Y],dt=$.marca;if(dt.visible=this.ativo($),!dt.visible)continue;let X=this.caixasDe($)[0];dt.position.set(X.c[0],.02+($.piso?0:.005),X.c[1]),dt.rotation.set(-j/2,0,X.r),dt.scale.set(X.h[0]*2+.08,X.h[1]*2+.08,1);let K=this.arrasto&&this.arrasto.m===$;dt.material.color.set(K&&!this.arrasto.ok?"#EF4444":K||this.sel===$?"#22C55E":"#60A5FA"),dt.material.opacity=K||this.sel===$?1:.55}let gt=this.alvoCamera(t);(!this.camAtual||this.reduz)&&(this.camAtual={pos:gt.pos.clone(),alvo:gt.alvo.clone(),fov:gt.fov});let St=window.__ofT!=null?1:1-Math.exp(-e*4);this.camAtual.pos.lerp(gt.pos,St),this.camAtual.alvo.lerp(gt.alvo,St),this.camAtual.fov=lt(this.camAtual.fov,gt.fov,St),this.cam.position.copy(this.camAtual.pos),this.cam.lookAt(this.camAtual.alvo),Math.abs(this.cam.fov-this.camAtual.fov)>.01&&(this.cam.fov=this.camAtual.fov,this.cam.updateProjectionMatrix()),this.ao&&this.composer?this.composer.render(e):this.renderer.render(this.scene,this.cam)}get prop(){if(!this._prop){this._prop={};for(let t of["controle","xicara","celular","moeda","nota","maco","dardo","aljava"])this._prop[t]={h:"casa",t0:-1,dur:0,de:null}}return this._prop}casaDe(t){let e=n=>new we().setFromAxisAngle(yt(0,1,0),n);return t==="controle"?{pos:this.pto("sofa",2.72,.555,2.92),quat:e(this.giro(this.moveis.sofa)+.5)}:t==="xicara"?{pos:this.pto("cafe",.43,.92,5.06),quat:e(this.giro(this.moveis.cafe)-j/2)}:null}bico(){return this.pto("cafe",.4,.99,4.9)}botaoCafe(){return this.pto("cafe",.392,1.315,4.975)}bolso(t="R"){return this.boneco.root.localToWorld(yt(t==="R"?.17:-.17,.84,.05))}decidirProps(t,e,n){let i=t&&t.props;if(i)for(let r in i){let o=this.prop[r];if(!o)continue;let a=typeof i[r]=="function"?i[r](e,n):i[r];a&&a!==o.h&&(o.h=a,o.troca=!0)}}guardarProps(){for(let t in this.prop)this.prop[t].h!=="casa"&&(this.prop[t].h="casa",this.prop[t].troca=!0)}alvoProp(t,e,n,i,r){let o=this.boneco,a=o.root.rotation.y,l=new we().setFromAxisAngle(yt(0,1,0),a),c=p=>{let v=p==="L"?o.L.hand:o.R.hand,g=new U,m=new we,b=new U;return v.matrixWorld.decompose(g,m,b),{pos:(p==="L"?o.mL:o.mR).clone(),quat:m}},h=(p,v,g)=>{let m=c(p),b=m.pos.add(yt(...v).applyQuaternion(m.quat)),S=g?l.clone().multiply(g):m.quat;return{pos:b,quat:S,vis:!0}},f=p=>new we().setFromAxisAngle(yt(1,0,0),p),u=p=>new we().setFromAxisAngle(yt(0,1,0),p);if(e==="casa"){let p=this.casaDe(t);return p?{...p,vis:!0}:{pos:this.bolso(t==="maco"||t==="aljava"?"L":"R"),quat:l,vis:!1}}if(t==="controle"){let p=o.mL.clone().add(o.mR).multiplyScalar(.5).add(yt(0,.01,0)),v=o.mL.distanceTo(o.mR),g=h("R",[0,0,.03],f(-.5)),m=e==="LR"?Ht((v-.2)/.16):1;return{pos:p.lerp(g.pos,m),quat:l.clone().multiply(f(-.5)),vis:!0}}if(e==="joga"){let p=c("R"),v=_t(r);return p.pos.y+=.02+4*v*(1-v)*.55,{pos:p.pos,quat:l.clone().multiply(f(v*6*j)),vis:!0}}if(e==="cofrinho"){let p=c("R"),v=this.alvoPorco(),g=le(i,.9,1.15);return{pos:p.pos.lerp(v,g),quat:l,vis:g<1}}let d=e==="L"?"L":"R";if(t==="xicara"){let p=c(d),v=yt(d==="R"?-1:1,0,0).applyQuaternion(p.quat).setY(0);v.lengthSq()<1e-4&&v.set(Math.cos(a),0,-Math.sin(a)).multiplyScalar(d==="R"?-1:1),v.normalize();let g=new we().setFromAxisAngle(yt(0,1,0),Math.atan2(v.z,-v.x)),m=this.mundo(o.head).sub(p.pos).setY(0),b=new U().crossVectors(yt(0,1,0),m.lengthSq()>1e-4?m.normalize():yt(Math.sin(a),0,Math.cos(a))),S=new we().setFromAxisAngle(b.normalize(),Ht(n.gole||0)*1.75).multiply(g),x=yt(.053,.05,0).applyQuaternion(S);return{pos:p.pos.clone().sub(x),quat:S,vis:!0}}return t==="celular"?h(d,[0,.035,.03],u(j).multiply(f(-.45))):t==="dardo"?h(d,[0,-.01,.03],f(-j/2+.25)):t==="aljava"?h(d,[0,-.01,.035],f(-j/2+.3)):t==="nota"||t==="maco"?h(d,[0,-.02,.035],f(1.2)):h(d,[0,-.01,.025],null)}moverProps(t,e,n,i){let r=performance.now()/1e3;for(let a in this.prop){let l=this.prop[a],c=this.itens[a];if(!c)continue;let h=this.alvoProp(a,l.h,t,e,n);if(l.troca){l.troca=!1;let u={pos:c.position.clone(),quat:c.quaternion.clone(),vis:c.visible};c.visible||(u.pos=h.pos.clone(),u.quat=h.quat.clone()),l.de=u,l.t0=r,l.dur=_t(.12+u.pos.distanceTo(h.pos)*.3,.12,.6)}h.vis||(l.de=null);let f=l.de&&l.dur?_t((r-l.t0)/l.dur):1;if((i===0||!this.propsProntos)&&(f=1),f<1){let u=Ht(f),d=l.de.pos.distanceTo(h.pos);c.position.copy(l.de.pos).lerp(h.pos,u),c.position.y+=Math.sin(j*u)*Math.min(.15,d*.25),c.quaternion.copy(l.de.quat).slerp(h.quat,u),c.visible=l.de.vis||h.vis}else c.position.copy(h.pos),c.quaternion.copy(h.quat),c.visible=h.vis,l.de=null}this.propsProntos=!0;let o=(this.voos||[]).length+(this.prop.dardo.h==="R"?1:0);this.aljavaD.forEach((a,l)=>{a.visible=l<3-o})}desenharCel(t){if(t-(this.tCel||-9)<.2)return;this.tCel=t;let{g:e,t:n}=this.celTela;e.fillStyle="#0B1220",e.fillRect(0,0,64,128),e.fillStyle="#FB923C",e.font="bold 16px system-ui",e.fillText("\u20BF",6,20),e.strokeStyle="#4ADE80",e.lineWidth=3,e.beginPath();for(let i=0;i<10;i++){let r=4+i*6,o=100-i*6-Math.sin(i+t*3)*6;i?e.lineTo(r,o):e.moveTo(r,o)}e.stroke(),n.needsUpdate=!0}destruir(){cancelAnimationFrame(this.raf),this.ro&&this.ro.disconnect(),this.renderer.dispose()}desenharPiso({g:t}){t.fillStyle="#C8915B",t.fillRect(0,0,1024,1024);let e=["#C8915B","#BF8752","#D29C66","#C38C56","#B88050","#CD9760"],n=7,i=()=>(n=n*16807%2147483647,n/2147483647),r=1024/8;for(let o=0;o<8;o++){let a=-i()*400;for(;a<1024;){let l=260+i()*300;t.fillStyle=e[Math.floor(i()*e.length)],t.fillRect(a,o*r,l,r),t.strokeStyle="rgba(90,50,20,.10)",t.lineWidth=1.2;for(let c=0;c<7;c++){let h=o*r+8+i()*(r-16);t.beginPath(),t.moveTo(a,h),t.bezierCurveTo(a+l*.3,h+(i()-.5)*8,a+l*.6,h+(i()-.5)*8,a+l,h+(i()-.5)*4),t.stroke()}t.fillStyle="rgba(70,35,10,.45)",t.fillRect(a,o*r,2,r),a+=l}t.fillStyle="rgba(70,35,10,.5)",t.fillRect(0,o*r,1024,2.5)}}desenharTapete({g:t}){t.fillStyle="#C7D2FE",t.fillRect(0,0,512,512),t.strokeStyle="#A5B4FC",t.lineWidth=10,qi(t,22,22,468,468,24),t.stroke(),t.setLineDash([16,12]),t.lineWidth=4,t.strokeStyle="#818CF8",qi(t,44,44,424,424,18),t.stroke(),t.setLineDash([]);for(let e=0;e<2600;e++)t.fillStyle=`rgba(99,102,241,${Math.random()*.06})`,t.fillRect(Math.random()*512,Math.random()*512,2,2)}desenharQuadro({g:t}){let e=t.createLinearGradient(0,0,0,192);e.addColorStop(0,"#1E3A8A"),e.addColorStop(1,"#0F172A"),t.fillStyle=e,t.fillRect(0,0,256,192),t.strokeStyle="#22C55E",t.lineWidth=6,t.lineJoin="round",t.beginPath(),[[20,150],[60,130],[95,140],[130,95],[165,105],[200,60],[236,40]].forEach(([n,i],r)=>r?t.lineTo(n,i):t.moveTo(n,i)),t.stroke(),t.fillStyle="#FACC15",t.beginPath(),t.arc(236,40,8,0,Vt),t.fill(),t.fillStyle="rgba(255,255,255,.85)",t.font="bold 20px system-ui",t.fillText("LONGO PRAZO",20,34)}desenharCeu(t){let{g:e,t:n}=this.ceu,i=this.h,r=this.noite,o=i==="triste"||i==="preocupado",a=r?o?"#1E293B":"#0B1026":i==="triste"?"#64748B":i==="preocupado"?"#7C93B5":"#4FA3FF",l=r?o?"#334155":"#312E81":i==="triste"?"#94A3B8":i==="preocupado"?"#B6C4D8":"#BFE3FF",c=e.createLinearGradient(0,0,0,256);if(c.addColorStop(0,a),c.addColorStop(1,l),e.fillStyle=c,e.fillRect(0,0,256,256),r&&!o){for(let d=0;d<40;d++){let p=.5+.5*Math.sin(t*2+d*7);e.fillStyle=`rgba(255,255,255,${.3+.6*p})`,e.fillRect(d*97%256,d*53%150,2,2)}e.fillStyle="#FEF3C7",e.beginPath(),e.arc(190,52,20,0,Vt),e.fill(),e.fillStyle=a,e.beginPath(),e.arc(200,46,18,0,Vt),e.fill()}else if(!o){e.save(),e.translate(195,60),e.rotate(t*.2),e.fillStyle="#FDE047";for(let d=0;d<10;d++)e.rotate(Vt/10),e.fillRect(-2,26,4,12);e.restore(),e.fillStyle="#FDE047",e.beginPath(),e.arc(195,60,22,0,Vt),e.fill()}let h=(d,p,v,g)=>{e.fillStyle=g,e.beginPath(),e.ellipse(d,p,34*v,14*v,0,0,Vt),e.ellipse(d+18*v,p-10*v,22*v,16*v,0,0,Vt),e.ellipse(d-16*v,p-6*v,18*v,13*v,0,0,Vt),e.fill()},f=o?r?"#475569":"#CBD5E1":r?"rgba(148,163,184,.35)":"#FFFFFF";if(h(t*8%360-50,70,1,f),h((t*5+180)%360-50,110,.75,f),o&&h((t*6+90)%360-50,40,1.2,f),[[0,150,40],[36,120,30],[62,165,44],[100,105,34],[130,140,40],[166,90,30],[192,150,36],[224,125,40]].forEach(([d,p,v],g)=>{e.fillStyle=r?"#111827":o?"#475569":"#64748B",e.fillRect(d,p,v,256-p);for(let m=p+8;m<240;m+=14)for(let b=d+5;b<d+v-6;b+=10){let S=r?(b*7+m*13+g)%5<2:!1;e.fillStyle=S?"#FDE68A":r?"#1F2937":"rgba(255,255,255,.28)",e.fillRect(b,m,5,7)}}),e.fillStyle=r?"#0F172A":o?"#3F5F4F":"#4ADE80",e.fillRect(0,238,256,18),o){e.strokeStyle="rgba(224,242,254,.75)",e.lineWidth=2;for(let d=0;d<36;d++){let p=(d*37+t*40)%280-12,v=(d*71+t*420)%280-20;e.beginPath(),e.moveTo(p,v),e.lineTo(p-6,v+16),e.stroke()}}n.needsUpdate=!0}desenharTV(t,e){let{g:n,t:i}=this.tv,r=512,o=288;if(e==="jogo")_d.desenhar(n,r,o,t,{cor:this.d.cor,vitoria:this.tvVitoria||0});else{let a=this.h==="feliz"||this.h==="euforico",l=a?"#22C55E":"#EF4444";n.fillStyle="#0B1220",n.fillRect(0,0,r,o),n.strokeStyle="rgba(148,163,184,.15)",n.lineWidth=1;for(let p=60;p<230;p+=34)n.beginPath(),n.moveTo(0,p),n.lineTo(r,p),n.stroke();let c=t*.25%1.4,h=46;n.strokeStyle=l,n.lineWidth=4,n.lineJoin="round",n.beginPath();for(let p=0;p<=Math.min(h,Math.floor(h*c));p++){let v=20+p*(r-40)/h,m=(a?200-p*2.6:90+p*2.6)+Math.sin(p*1.7)*10+Math.sin(p*.6)*12;p?n.lineTo(v,m):n.moveTo(v,m)}n.stroke(),n.fillStyle="#DC2626",n.fillRect(0,0,150,40),n.fillStyle="#FFF",n.font="bold 22px system-ui",n.fillText("RADAR NEWS",12,28),Math.floor(t*1.5)%2&&(n.fillStyle="#FFF",n.beginPath(),n.arc(170,20,6,0,Vt),n.fill()),n.font="bold 14px system-ui",n.fillText("AO VIVO",182,25);let f={feliz:"CARTEIRA NO VERDE",euforico:"DIA HIST\xD3RICO NA CARTEIRA!",preocupado:"MERCADO NO VERMELHO",triste:"QUEDA FORTE HOJE"}[this.h]||"MERCADO HOJE";n.fillStyle="rgba(15,23,42,.92)",n.fillRect(0,224,r,30),n.fillStyle=l,n.fillRect(0,224,8,30),n.fillStyle="#FFF",n.font="bold 18px system-ui",n.fillText(f+(this.pctTxt?"  "+this.pctTxt:""),18,245),n.fillStyle="#1E293B",n.fillRect(0,254,r,34),n.font="bold 16px monospace";let u=this.fita(),d=-(t*60%Math.max(1,u.w));for(n.save(),n.beginPath(),n.rect(0,254,r,34),n.clip();d<r;){for(let p of u.itens)n.fillStyle="#CBD5E1",n.fillText(p.t,d,277),d+=n.measureText(p.t).width+8,n.fillStyle=p.v>=0?"#4ADE80":"#F87171",n.fillText(p.s,d,277),d+=n.measureText(p.s).width+26;if(!u.itens.length)break}n.restore()}i.needsUpdate=!0}fita(){let t=(this.d.ativos||[]).filter(n=>n.vd!=null),e=t.length?t.map(n=>({t:n.t,v:n.vd,s:(n.vd>=0?"\u25B2":"\u25BC")+Math.abs(n.vd).toFixed(2).replace(".",",")+"%"})):[{t:"IBOV",v:0,s:"\u2014"}];return{itens:e,w:e.length*160}}desenharArcade(t){let{g:e,t:n}=this.arcade;yd.desenhar(e,128,128,t),n.needsUpdate=!0}serieAgora(){let t=this.serieAlvo;if(!t)return[];let e=Ht((performance.now()-(this.serieT0||0))/1100);e<1&&(this.sujo=!0);let n=this.serieDe&&this.serieDe.length===t.v.length?this.serieDe:t.v;return t.v.map((i,r)=>lt(n[r],i,e))}desenharMonitor(t){let{g:e,t:n}=this.mon,i=1024,r=448,o=this.d,a=this.h,l={triste:"#EF4444",preocupado:"#F97316",tranquilo:"#60A5FA",feliz:"#22C55E",euforico:"#FACC15"}[a],c=e.createLinearGradient(0,0,0,r);c.addColorStop(0,"#0B1220"),c.addColorStop(1,"#111A2E"),e.fillStyle=c,e.fillRect(0,0,i,r),e.fillStyle="#0F172A",e.fillRect(0,0,i,40),e.fillStyle=l,e.beginPath(),e.arc(22,20,7,0,Vt),e.fill(),e.fillStyle="#E2E8F0",e.font="bold 18px system-ui",e.fillText("RADAR DA CARTEIRA",38,27);let f=new Date().toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit",second:"2-digit"});e.font="bold 18px monospace",e.textAlign="right",e.fillText(f,i-16,27),o.fechado?(e.fillStyle="#64748B",e.font="bold 13px system-ui",e.fillText("BOLSA FECHADA",i-120,26)):o.sim&&(e.fillStyle="#F59E0B",e.font="bold 13px system-ui",e.fillText("SIMULA\xC7\xC3O",i-120,26)),e.textAlign="left",this.secao&&(e.fillStyle="#94A3B8",e.font="15px system-ui",window.RI&&window.RI.desenhar(e,"map-pin",268,21,15,"#94A3B8"),e.fillText(this.secao,278,26));let u=16,d=54;e.fillStyle="rgba(30,41,59,.65)",qi(e,u,d,330,340,14),e.fill(),e.fillStyle="#94A3B8",e.font="bold 14px system-ui",e.fillText("SEU DIA",u+16,d+28);let p=o.pct,v=p==null||!isFinite(p)?"\u2014":(p>0?"+":"")+p.toFixed(2).replace(".",",")+"%";e.fillStyle=p>0?"#4ADE80":p<0?"#F87171":"#E2E8F0",e.font="bold 64px system-ui",e.fillText(v,u+14,d+98),e.fillStyle="#CBD5E1",e.font="16px system-ui",e.fillText(this.titulo||"",u+16,d+126);let g=u+16,m=d+150,b=298,S=150;e.strokeStyle="rgba(148,163,184,.15)",e.lineWidth=1;for(let L=0;L<=4;L++)e.beginPath(),e.moveTo(g,m+L*S/4),e.lineTo(g+b,m+L*S/4),e.stroke();let x=this.serieAlvo,y=x?this.serieAgora():(this.hist.length?this.hist:[{v:p||0}]).map(L=>L.v),M=y.concat([0]),T=Math.min(...M),_=Math.max(...M);if(_-T<.4){let L=(_+T)/2;T=L-.2,_=L+.2}let E=(_-T)*.08;T-=E,_+=E;let A=L=>m+S-(L-T)/(_-T)*S;e.setLineDash([4,4]),e.strokeStyle="rgba(148,163,184,.4)",e.beginPath(),e.moveTo(g,A(0)),e.lineTo(g+b,A(0)),e.stroke(),e.setLineDash([]);let C=y.length,F=y.map((L,V)=>[g+(C===1?b:V/(C-1)*b),A(L)]);if(C===1&&F.unshift([g,F[0][1]]),x){let L=ot=>new Date(ot*1e3).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit",timeZone:"America/Sao_Paulo"});e.fillStyle="#64748B",e.font="13px system-ui",e.fillText(L(x.ts[0]),g,m+S+18),e.textAlign="right",e.fillText(x.hoje?L(x.ts[x.ts.length-1]):"\xFAltimo preg\xE3o",g+b,m+S+18),e.textAlign="left";let V=ot=>(ot>0?"+":"")+ot.toFixed(2).replace(".",",")+"%";e.font="12px system-ui",e.fillStyle="#94A3B8",e.fillText(V(Math.max(...y)),g+b-60,m-6)}let I=y[y.length-1],N=(x?I:p||0)>=0?"#22C55E":"#EF4444",B=e.createLinearGradient(0,m,0,m+S);B.addColorStop(0,N+"55"),B.addColorStop(1,N+"00"),e.beginPath(),F.forEach(([L,V],ot)=>ot?e.lineTo(L,V):e.moveTo(L,V)),e.lineTo(F[F.length-1][0],m+S),e.lineTo(F[0][0],m+S),e.closePath(),e.fillStyle=B,e.fill(),e.strokeStyle=N,e.lineWidth=3,e.lineJoin="round",e.beginPath(),F.forEach(([L,V],ot)=>ot?e.lineTo(L,V):e.moveTo(L,V)),e.stroke();let k=F[F.length-1],z=t*1.5%1;e.fillStyle=N,e.beginPath(),e.arc(k[0],k[1],5,0,Vt),e.fill(),e.strokeStyle=N,e.globalAlpha=1-z,e.lineWidth=2,e.beginPath(),e.arc(k[0],k[1],5+z*14,0,Vt),e.stroke(),e.globalAlpha=1;let Q=362,H=54,Z=330;e.fillStyle="rgba(30,41,59,.65)",qi(e,Q,H,Z,340,14),e.fill(),e.fillStyle="#94A3B8",e.font="bold 14px system-ui",e.fillText("SEUS ATIVOS \xB7 AO VIVO",Q+16,H+28);let q=(o.ativos||[]).slice(0,8);q.length||(e.fillStyle="#64748B",e.font="16px system-ui",e.fillText("Adicione ativos para",Q+16,H+80),e.fillText("acompanhar aqui.",Q+16,H+102));let gt=performance.now();q.forEach((L,V)=>{let ot=H+48+V*36,Et=this.flash[L.t];if(Et&&gt-Et.t<2500){let rt=1-(gt-Et.t)/2500;e.fillStyle=(Et.up?"rgba(34,197,94,":"rgba(239,68,68,")+(.35*rt).toFixed(3)+")",qi(e,Q+8,ot,Z-16,32,8),e.fill()}e.fillStyle="#E2E8F0",e.font="bold 17px monospace",e.fillText(L.t,Q+16,ot+22),e.fillStyle="#94A3B8",e.font="15px monospace",e.textAlign="right",L.preco!=null&&e.fillText((L.moeda==="USD"?"US$ ":"R$ ")+L.preco.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),Q+214,ot+22);let tt=L.vd;e.fillStyle=tt==null?"#64748B":tt>=0?"#4ADE80":"#F87171",e.font="bold 16px monospace",e.fillText(tt==null?"\u2014":(tt>=0?"\u25B2 ":"\u25BC ")+Math.abs(tt).toFixed(2).replace(".",",")+"%",Q+Z-16,ot+22),e.textAlign="left"});let St=708,Y=54,$=300;e.fillStyle="rgba(30,41,59,.65)",qi(e,St,Y,$,340,14),e.fill(),e.fillStyle="#94A3B8",e.font="bold 14px system-ui",e.fillText("O QUE VOC\xCA EST\xC1 FAZENDO",St+16,Y+28);let dt=this.feed.slice(-8);dt.forEach((L,V)=>{let ot=Y+58+V*34,Et=V===dt.length-1,tt=gt-L.ms,rt=L.txt;Et&&tt<700&&(rt=rt.slice(0,Math.max(1,Math.floor(rt.length*tt/700)))),e.fillStyle="#64748B",e.font="13px monospace",e.fillText(L.hora,St+16,ot),e.fillStyle=Et?l:"#CBD5E1",e.font=(Et?"bold ":"")+"15px system-ui",e.fillText("\u203A "+rt+(Et&&Math.floor(t*2.5)%2?" \u258D":""),St+66,ot)}),dt.length||(e.fillStyle="#64748B",e.font="15px system-ui",e.fillText("\u203A aguardando voc\xEA\u2026"+(Math.floor(t*2)%2?" \u258D":""),St+16,Y+60)),e.fillStyle="#020617",e.fillRect(0,408,i,40),e.font="bold 17px monospace";let X=this.fita(),K=-(t*70%4e3);e.save(),e.beginPath(),e.rect(0,408,i,40),e.clip();let P=0;for(;K<i&&P++<60;)for(let L of X.itens)e.fillStyle="#CBD5E1",e.fillText(L.t,K,434),K+=e.measureText(L.t).width+8,e.fillStyle=L.v>=0?"#4ADE80":"#F87171",e.fillText(L.s,K,434),K+=e.measureText(L.s).width+30;e.restore(),n.needsUpdate=!0}log(t){let e=new Date().toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}),n=this.feed[this.feed.length-1];n&&n.txt===t&&performance.now()-n.ms<1500||(this.feed.push({txt:t.length>26?t.slice(0,25)+"\u2026":t,hora:e,ms:performance.now()}),this.feed.length>30&&this.feed.shift(),this.ultimaAcao=performance.now(),this.sujo=!0)}redimensionar(){let t=this.el.clientWidth||600,e=Math.round(_t(t<640?t*.82:t*.6,300,660));this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height=e+"px",this.composer&&(this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(t,e)),this.cam.aspect=t/e,this.cam.updateProjectionMatrix(),this.sujo=!0}enquadrar(t,e,n,i){let r=new en(n,i,.1,100),o=Math.cos(e),a=yt(Math.sin(t)*o,Math.sin(e),Math.cos(t)*o),l=[];for(let d of[-.25,We+.1])for(let p of[-.3,Ve+.05])for(let v of[-.25,Xe+.1])l.push(yt(d,p,v));let c=yt(We/2,.9,Xe/2),h=18,f=i<1?.98:.95,u=i<1?.92:.93;for(let d=0;d<4;d++){let p=4,v=60;for(let E=0;E<22;E++){let A=(p+v)/2;r.position.copy(c).addScaledVector(a,A),r.lookAt(c),r.updateMatrixWorld(),r.updateProjectionMatrix();let C=!0;for(let F of l){let I=F.clone().project(r);if(Math.abs(I.x)>f||Math.abs(I.y)>u){C=!1;break}}C?v=A:p=A}h=v,r.position.copy(c).addScaledVector(a,h),r.lookAt(c),r.updateMatrixWorld();let g=9,m=-9,b=9,S=-9;for(let E of l){let A=E.clone().project(r);g=Math.min(g,A.x),m=Math.max(m,A.x),b=Math.min(b,A.y),S=Math.max(S,A.y)}let x=(g+m)/2,y=(b+S)/2,M=Math.tan(n*j/360)*h,T=new U,_=new U;r.matrixWorld.extractBasis(T,_,new U),c.addScaledVector(T,x*M*i).addScaledVector(_,y*M)}return{dist:h,alvo:c}}},Fi=s=>{let t=Math.sin(s*91.345+47.853)*43758.5453;return t-Math.floor(t)},_d={vel:150,tile:32,chao:236,pulo:.62,altura:92,coluna(s){if(s<6)return{buraco:!1};let t=Fi(s*1.37),e=Fi(s*7.11+3),n=t<.09&&Fi((s-1)*1.37)>=.09,i=Fi((s-1)*1.37)<.09&&Fi((s-2)*1.37)>=.09;return{buraco:n||i,inimigo:!n&&!i&&e<.08,moeda:e>.82,bloco:e>.93}},pulos(s,t){let e=[],n=this.tile,i=this.vel;for(let r=Math.floor(s*i/n)-2;r<=Math.ceil(t*i/n)+6;r++){let o=this.coluna(r),a=this.coluna(r-1);if(o.buraco&&!a.buraco||o.inimigo){let c=(r*n-120-34)/i;e.push(c)}}return e.sort((r,o)=>r-o)},estado(s){let t=s*this.vel,e=this.pulos(s-2,s+.2),n=0,i=-1;for(let o of e){let a=(s-o)/this.pulo;a>=0&&a<1&&(n=4*a*(1-a)*this.altura,i=s-o)}let r=Math.floor(t/this.tile/4.8);return{camX:t,y:n,pulando:i,moedas:r,botao:i>=0&&i<.14}},desenhar(s,t,e,n,i={}){let r=this.estado(n),o=this.tile,a=this.chao,l=s.createLinearGradient(0,0,0,e);l.addColorStop(0,"#38BDF8"),l.addColorStop(1,"#BAE6FD"),s.fillStyle=l,s.fillRect(0,0,t,e),s.fillStyle="rgba(255,255,255,.9)";for(let p=0;p<6;p++){let v=((p*170-r.camX*.15)%(t+160)+t+160)%(t+160)-80,g=40+p%3*22;s.beginPath(),s.ellipse(v,g,34,14,0,0,Vt),s.ellipse(v+26,g-8,22,14,0,0,Vt),s.ellipse(v-24,g-4,18,11,0,0,Vt),s.fill()}for(let[p,v,g,m]of[[.3,"#4ADE80",50,200],[.55,"#22C55E",34,214]]){s.fillStyle=v,s.beginPath(),s.moveTo(0,e);for(let b=0;b<=t;b+=8){let S=b+r.camX*p;s.lineTo(b,m-g*(.5+.5*Math.sin(S*.011))*(.6+.4*Math.sin(S*.003)))}s.lineTo(t,e),s.fill()}let c=Math.floor(r.camX/o)-1;for(let p=c;p<c+t/o+3;p++){let v=this.coluna(p),g=p*o-r.camX;if(v.buraco||(s.fillStyle="#A16207",s.fillRect(g,a,o,e-a),s.fillStyle="#22C55E",s.fillRect(g,a,o,9),s.fillStyle="rgba(0,0,0,.15)",s.fillRect(g+o-2,a+9,2,e-a),s.fillStyle="#854D0E",s.fillRect(g+6,a+18,6,6),s.fillRect(g+20,a+30,5,5)),v.moeda){let m=Math.abs(Math.cos(n*5+p))*7+1;s.fillStyle="#FACC15",s.beginPath(),s.ellipse(g+16,a-70,m,9,0,0,Vt),s.fill(),s.strokeStyle="#CA8A04",s.lineWidth=2,s.stroke()}if(v.bloco&&(s.fillStyle="#F59E0B",s.fillRect(g+2,a-120,28,28),s.strokeStyle="#92400E",s.lineWidth=2,s.strokeRect(g+2,a-120,28,28),s.fillStyle="#FFF",s.font="bold 20px monospace",s.fillText("?",g+10,a-99)),v.inimigo){let m=g<100,b=g+Math.sin(n*3+p)*6;m?(s.fillStyle="#7C2D12",s.fillRect(b+2,a-5,28,5)):(s.fillStyle="#7C2D12",s.beginPath(),s.ellipse(b+16,a-12,15,12,0,j,0),s.fill(),s.fillRect(b+1,a-12,30,10),s.fillStyle="#FFF",s.fillRect(b+8,a-20,5,6),s.fillRect(b+19,a-20,5,6),s.fillStyle="#000",s.fillRect(b+10,a-18,2,3),s.fillRect(b+21,a-18,2,3))}}let h=120,f=a-34-r.y,u=Math.sin(n*18)>0,d=i.cor||"#2457F5";if(s.fillStyle="#1E3A8A",r.y>1?(s.fillRect(h+2,f+24,8,10),s.fillRect(h+16,f+20,8,10)):(s.fillRect(h+(u?2:6),f+24,8,10),s.fillRect(h+(u?16:12),f+24,8,10)),s.fillStyle=d,s.fillRect(h,f+8,26,18),s.fillStyle="#F1C19A",s.fillRect(h+4,f-8,18,16),s.fillStyle="#111",s.fillRect(h+16,f-4,3,4),s.fillStyle=d,s.fillRect(h+2,f-12,22,6),s.fillRect(h+18,f-8,10,3),r.pulando>=0&&r.pulando<.2){s.fillStyle="rgba(255,255,255,.7)";for(let p=0;p<3;p++)s.beginPath(),s.arc(h+4+p*9,a-2,3+r.pulando*20,0,Vt),s.fill()}if(s.fillStyle="rgba(0,0,0,.35)",s.fillRect(0,0,t,36),s.fillStyle="#FFF",s.font="bold 18px monospace",s.fillText("\u2605 "+String(Math.floor(r.camX/10)).padStart(6,"0"),12,25),s.fillText("\u25CF \xD7"+String(r.moedas%100).padStart(2,"0"),190,25),s.fillText("FASE "+(1+Math.floor(n/40)%4)+"-"+(1+Math.floor(n/10)%4),t-120,25),i.vitoria>0){let p=i.vitoria;s.fillStyle=`rgba(0,0,0,${.35*p})`,s.fillRect(0,0,t,e),s.save(),s.translate(t/2,e/2-10),s.scale(.7+.3*p,.7+.3*p),s.fillStyle="#FACC15",s.strokeStyle="#7C2D12",s.lineWidth=6,s.font="bold 44px system-ui",s.textAlign="center",s.strokeText("FASE COMPLETA!",0,0),s.fillText("FASE COMPLETA!",0,0),s.restore(),s.textAlign="left";for(let v=0;v<24;v++){let g=v/24*Vt+n,m=60+80*((n*1.3+Fi(v))%1);s.fillStyle=["#F43F5E","#FACC15","#22C55E","#38BDF8"][v%4],s.fillRect(t/2+Math.cos(g)*m,e/2+Math.sin(g)*m*.6,5,5)}}return r}},yd={inimigo(s){let t=Math.floor(s/6),e=s%6;return{t0:s*.55,x:16+e*19+t%2*9,fila:t}},estado(s){let t=Math.max(0,Math.floor((s-.9)/.55)+1),e=this.inimigo(t),n=this.inimigo(t+1),i=_t((s-.9)/.55%1*2.2),r=lt(e.x,n.x,Ht(i)),o=(n.x-e.x)*(i>0&&i<1?1:0),a=(s-.9)/.55%1,l=a>.55&&a<.72;return{x:r,vx:o,atira:l,iAlvo:t}},desenhar(s,t,e,n){let i=this.estado(n);s.fillStyle="#05030F",s.fillRect(0,0,t,e);for(let r=0;r<40;r++){let o=(Fi(r)*e+n*(20+Fi(r+9)*60))%e;s.fillStyle=`rgba(255,255,255,${.3+Fi(r+2)*.7})`,s.fillRect(Fi(r+5)*t,o,1.5,1.5)}for(let r=Math.max(0,i.iAlvo-2);r<i.iAlvo+10;r++){let o=this.inimigo(r),a=n-o.t0;if(a<0)continue;let l=o.t0+.9+.55*0+.55*(r-Math.floor(o.t0/.55)),c=.9+.55*(r+1)-.55*.3,h=14+Math.min(a,3)*14+o.fila*0,f=o.x+Math.sin(n*2+r)*4;if(n<c)s.fillStyle=["#F43F5E","#22C55E","#A855F7","#FACC15"][r%4],s.fillRect(f-6,h-4,12,8),s.fillRect(f-8,h,3,5),s.fillRect(f+5,h,3,5),s.fillStyle="#000",s.fillRect(f-3,h-2,2,2),s.fillRect(f+1,h-2,2,2);else if(n-c<.35){let u=(n-c)/.35;for(let d=0;d<8;d++){let p=d/8*Vt;s.fillStyle=d%2?"#FDE047":"#FB923C",s.fillRect(f+Math.cos(p)*14*u,h+Math.sin(p)*14*u,3*(1-u)+1,3*(1-u)+1)}}}for(let r=0;r<3;r++){let o=(n-.9)/.55%1-.55-r*0;if(o>0&&o<.45){let a=104-o/.45*80;s.fillStyle="#67E8F9",s.fillRect(i.x-1,a,2,7)}}return s.fillStyle="#38BDF8",s.beginPath(),s.moveTo(i.x,100),s.lineTo(i.x-8,114),s.lineTo(i.x+8,114),s.fill(),s.fillStyle="#F43F5E",s.fillRect(i.x-2,114,4,3+Math.floor(n*20)%2*2),s.fillStyle="#FDE047",s.font="bold 8px monospace",s.fillText("1UP "+String(i.iAlvo*100).padStart(6,"0"),3,9),s.fillStyle="#F472B6",s.fillText("HI 099999",78,9),i}},Uu=class{constructor(t){this.e=t,this.t=0,this.fila=[],this.ant=null,this.entrar=!0,this.ciclo=0,this.novos=[],this.rodada=0,this.itemAtual=""}humor(t){this.h=t,this.entrar=!0}replanejar(){this.entrar=!0}novidade(t){ra[t]&&!this.novos.includes(t)&&(this.novos.push(t),this.e.reduz||(this.entrar=!0))}rotina(){return(vd[this.h]||vd.tranquilo)(this.L,this.e,this.ciclo,(this.ent||0)+":"+this.ciclo)}compilar(t,e,n,i={}){let r=this.e.nav,o=e.slice(),a=n,l=[];for(let c of t)if(c.tipo==="andar"){let h=[[o[0],o[1]]];for(let g of c.destinos)h.push(...r.caminho(h[h.length-1],g));let f=[],u=0;for(let g=1;g<h.length;g++){let m=Math.hypot(h[g][0]-h[g-1][0],h[g][1]-h[g-1][1]);m>.001&&(f.push({a:h[g-1],b:h[g],d0:u,L:m,yaw:la(h[g-1],h[g])}),u+=m)}if(!f.length||u<.06)continue;let d=jn(o[2],f[0].yaw);if(Math.abs(d)>.7){let g=.25+Math.abs(d)/3.2,m=[o[0],o[1],o[2]+d];l.push({tipo:"acao",dur:g,pose:(b,S,x)=>Yt(x,{nod:.05}),t0:a,de:o.slice(),ate:m,item:c.item,taco:c.taco,bolas:c.bolas,...i}),a+=g,o=m}let p=u/c.vel,v=h[h.length-1];l.push({...c,...i,t0:a,dur:p,segs:f,dist:u,de:o.slice()}),o=[v[0],v[1],o[2]+jn(o[2],f[f.length-1].yaw)],a+=p}else{let h=c.ate?c.ate.slice():o.slice();h.length<3&&(h[2]=o[2]),h[2]=o[2]+jn(o[2],h[2]),l.push({...c,...i,t0:a,de:o.slice(),ate:h}),o=h,a+=c.dur}return{out:l,pos:o,t:a}}fimFila(){let t=this.fila[this.fila.length-1];return t?{t:t.t0+t.dur,pos:t.tipo==="andar"?(()=>{let e=t.segs[t.segs.length-1];return[e.b[0],e.b[1],t.de[2]+jn(t.de[2],e.yaw)]})():t.ate}:null}disponiveis(){let t=this.e,e=[];for(let n in ra){let i=t.dec[n];i&&(i.outer?i.outer.visible:i.visible)&&ra[n].humores.includes(this.h)&&e.push(n)}return e}visita(t,e,n){let i=this.e,r=ra[t],o=r.lugar(i),a=i.nav.perto(o[0],o[1]),l=[a[0],a[1],o[2]],c=[ci(1.15,[l]),Ut(.5,(h,f,u)=>Yt(u),{ate:l})];return e&&c.push(...v_(r.ic+":f")),c.push(...r.passos(i)),c.push(ci(1.15,[n.aprox])),n.sentado||n.entrada.length?c.push(...n.entrada):c.push(Ut(.5,(h,f,u)=>Yt(u),{ate:n.inicio})),c}proximoNovo(){for(;this.novos.length;){let t=this.novos.shift(),e=this.e.dec[t];if(ra[t]&&e&&(e.outer?e.outer.visible:e.visible))return t}return null}encher(){let t=this.e;if(this.entrar){this.entrar=!1,this.L=t.lugares(),this.ent=(this.ent||0)+1;let c=this.rotina();this.padrao=c.padrao;let h=t.posF?[t.posF.x,t.posF.z,t.posF.y]:c.inicio.slice(),f=this.ultimaPose?{...this.ultimaPose}:null,u=this.proximoNovo(),d=f||Yt(0);this.fila=[],this.ant=null;let p=f&&f.sent>.4,v=Math.hypot(h[0]-c.inicio[0],h[1]-c.inicio[1])<.08;if(!u&&(!f||p&&v&&c.sentado)){this.ciclo=0,this.aprox=c.aprox,this.anexar(this.compilar(c.passos,c.inicio,this.t));return}let g=[];if(p){let m=this.aprox||h;g.push(Ut(1.2,(b,S,x)=>{let y=Hs(d,Yt(x),Ht(b));return y.lean+=.4*Math.sin(j*b),y},{ate:t.nav.perto(m[0],m[1]).concat([h[2]])}))}else g.push(Ut(.35,(m,b,S)=>Hs(d,Yt(S),Ht(m))));t.guardarProps(),u?(g.push(...this.visita(u,!0,c)),this.itemNovo=u):(g.push(ci(1.15,[c.aprox])),c.entrada.length?g.push(...c.entrada):g.push(Ut(.5,(m,b,S)=>Yt(S),{ate:c.inicio}))),this.aprox=c.aprox,this.anexar(this.compilar(g,h,this.t,u?{item_:u}:{}));return}let e=this.fimFila(),n=e?e.pos:this.rotina().inicio,i=e?e.t:this.t,r=this.rotina();this.aprox=r.aprox,this.padrao=r.padrao;let o=this.disponiveis(),a=this.proximoNovo(),l=!!a;if(!a&&this.ciclo>0&&o.length&&!this.e.reduz&&this.ultimoBloco!=="item"&&(a=o[this.rodada%o.length],this.rodada++),a){let c=[];c.push(...r.saida),c.push(...this.visita(a,l,r)),this.anexar(this.compilar(c,n,i,{item_:a})),this.ultimoBloco="item";return}this.ultimoBloco="rotina",this.anexar(this.compilar(r.passos,r.deAtual?n:r.inicio,i)),this.ciclo++}anexar(t){this.fila.push(...t.out)}avaliarPasso(t,e,n){let i,r;if(t.tipo==="andar"){let a=_t(e/t.dur)*t.dist,l=t.segs.length-1;for(let p=0;p<t.segs.length;p++)if(a<=t.segs[p].d0+t.segs[p].L){l=p;break}let c=t.segs[l],h=_t((a-c.d0)/c.L),f=c.yaw,u=t.segs[l+1],d=t.segs[l-1];u&&c.L*(1-h)<.35&&(f=aa(c.yaw,u.yaw,.5*(1-c.L*(1-h)/.35))),d&&c.L*h<.35&&(f=aa(d.yaw,c.yaw,.5+.5*(c.L*h/.35))),r=[lt(c.a[0],c.b[0],h),lt(c.a[1],c.b[1],h),t.de[2]+jn(t.de[2],f)],i=f_(a,t.estilo,n,this.e.boneco.esc),t.pensativo&&(i.aR=[1.25,-.25,2.25],i.aL=[.6,-.35,1.5],i.nod+=.18,i.boca="foco",i.sob="tenso"),t.item==="xicara"&&(i.aR=[.6,-.25,1.75]),t.taco!=null&&(i.taco=t.taco),i.item=t.item||"",t.bolas&&(i.bolas=t.bolas)}else{let a=_t(e/t.dur),l=Ht(a);r=[lt(t.de[0],t.ate[0],l),lt(t.de[1],t.ate[1],l),lt(t.de[2],t.ate[2],l)],i=t.pose(a,e,n),t.item&&!i.item&&(i.item=t.item),t.bolas&&!i.bolas&&(i.bolas=t.bolas),t.taco!=null&&i.taco===$n.taco&&(i.taco=t.taco)}i._fp=["aberta","o","sorriso","triste"].includes(i.boca)||i.olhos==="F"||i.olhos==="Z"||i.sob==="triste";let o=this.padrao||{};for(let a in o)(!(a in i)||i[a]===$n[a])&&(i[a]=o[a]);return{pose:i,pos:r}}passo(t,e){let n=this.e;t!=null?(this.tForcado==null&&(this.tForcado=0),this.t=t):this.t+=n.reduz?0:e,this.entrar&&this.encher();let i=0;for(;(!this.fila.length||this.fimFila().t<this.t+2)&&i++<40;)this.encher();for(;this.fila.length>1&&this.t>=this.fila[0].t0+this.fila[0].dur;)this.ant=this.fila.shift(),n.decidirProps(this.ant,1,this.ant.dur);let r=this.fila[0];if(!r)return{pose:Yt(this.t),pos:[4.5,3.5,0],s:null,tl:0};let o=this.t,a=Math.min(o-r.t0,r.dur),l=this.avaliarPasso(r,a,o),c=.45;if(this.ant&&a<c){let h=this.avaliarPasso(this.ant,this.ant.dur,o),f=Ht(a/c);l.pose=Hs(h.pose,l.pose,f),l.pos=[lt(h.pos[0],l.pos[0],f),lt(h.pos[1],l.pos[1],f),h.pos[2]+jn(h.pos[2],l.pos[2])*f]}return this.itemAtual=r.item_||"",this.ultimaPose=l.pose,l.s=r,l.tl=a,l.k=r.dur?_t(a/r.dur):1,l}};function ib(s,t){let e=new jo({antialias:!0,alpha:!0,powerPreference:"low-power"});e.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),e.outputColorSpace=hn,e.toneMapping=fs,e.shadowMap.enabled=!0,e.shadowMap.type=hs,s.innerHTML="",s.appendChild(e.domElement);let n=new ns,i=new Bs(e);n.environment=i.fromScene(new $o,.04).texture,n.environmentIntensity=.38,n.add(new wr("#FFFFFF","#C9B79C",1));let r=new Wi("#FFF1DE",2);r.position.set(1.6,3.2,2.4),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-1,right:1,top:2.2,bottom:-.2,near:.5,far:8}),n.add(r);let o=new Wi("#C7D7FF",.7);o.position.set(-2,1.5,-1.5),n.add(o);let a=new be(new Rs(.75,48),new bo({opacity:.22}));a.rotation.x=-j/2,a.receiveShadow=!0,n.add(a);let l=new wc(t.cor,t.icone,t.boneco,t.acessorio);n.add(l.root),l.root.traverse(E=>{E.isMesh&&(E.castShadow=!0)});let c=new en(24,3/4,.1,20),h=new Ac,f=new Rc,u=-.35,d=!1,p=0,v=0,g=0,m=!1,b=performance.now(),S=b,x=()=>{let E=s.clientWidth||200,A=s.clientHeight||260;e.setSize(E,A,!1),c.aspect=E/A,c.updateProjectionMatrix()};x();let y=new ResizeObserver(x);y.observe(s);let M=e.domElement;M.style.touchAction="pan-y",M.addEventListener("pointerdown",E=>{d=!0,p=E.clientX;try{M.setPointerCapture(E.pointerId)}catch{}v=performance.now()}),M.addEventListener("pointermove",E=>{d&&(u+=(E.clientX-p)*.012,p=E.clientX,v=performance.now())}),M.addEventListener("pointerup",()=>{d=!1}),M.addEventListener("pointercancel",()=>{d=!1});function T(){if(g=0,m)return;if(!s.isConnected){_();return}let E=performance.now(),A=window.__ofVitT!=null?window.__ofVitT:(E-b)/1e3,C=Math.min(.05,(E-S)/1e3);S=E,!d&&E-v>2500&&(u+=C*.35),window.__ofVitYaw!=null&&(u=window.__ofVitYaw);let F=A%12,I;if(F<3.5)I=Yt(A,{olhar:[Math.sin(A*.7)*.6,0]});else if(F<6){let z=Zt(F,3.5,6,.4);I=Yt(A,{aR:[lt(0,2.6,z),lt(.12,.5,z),lt(.2,.9+.35*Math.sin(A*9),z)],boca:z>.5?"sorriso":"leve",olhos:z>.5?"F":"A",boch:.4*z,nod:-.05*z,roll:.06*z})}else if(F<8.5){let z=Zt(F,6,8.5,.4);I=Yt(A,{aL:[lt(0,1.2,z),lt(.12,-.2,z),lt(.2,1.4,z)],mL:z,boca:"sorriso",boch:.3,turn:.12*z,nod:-.04*z})}else I=Yt(A,{boca:"sorriso",olhos:"A",boch:.25,turn:.15*Math.sin(A*1.2)});l.root.rotation.y=u;let N=l.head.getWorldPosition(new U);I=f.passo(I,{T:A,dt:C,humor:"feliz",cabeca:N,yawCorpo:u,alvos:[{nome:"camera",pos:c.position.clone(),peso:2},{nome:"lado",pos:yt(Math.sin(u+1)*3,1.4,Math.cos(u+1)*3),peso:1}],legsLivres:!0,nariz:N.clone().add(yt(Math.sin(u)*.15,-.02,Math.cos(u)*.15))}),I=h.passo(I,C),l.aplicar(I,A,C),l.desenharRosto(f.rosto(I,{T:A,dt:C,humor:"feliz",facePropria:F>=3.5&&F<6}),A);let B=l.esc,k=window.__ofVitCam;k?(c.position.set(0,k[0],k[1]),c.lookAt(0,k[2],0)):(c.position.set(0,1.05*B,4.65*(.6+.4*B)),c.lookAt(0,.97*B,0)),e.render(n,c),g=requestAnimationFrame(T)}function _(){m||(m=!0,g&&cancelAnimationFrame(g),y.disconnect(),n.traverse(E=>{E.geometry&&E.geometry.dispose()}),e.dispose(),e.domElement.parentNode&&e.domElement.remove())}return g=requestAnimationFrame(T),{atualizar(E){l.setAparencia(E.boneco,E.acessorio),l.setCor(E.cor),E.icone!==t.icone&&l.setIcone(E.icone),t=E},destruir:_}}export{Su as CORES_SALA,nb as criar,ib as vitrine};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
