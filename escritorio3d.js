var dd=0,dh=1,fd=2;var Yi=1,pd=2,ur=3,$n=0,ln=1,Sn=2,Je=0,Ti=1,Zi=2,fh=3,ph=4,ol=5;var Bn=100,md=101,gd=102,xd=103,_d=104,ps=200,vd=201,yd=202,Md=203,mh=204,gh=205,mo=206,Sd=207,go=208,bd=209,Ed=210,Td=211,wd=212,Ad=213,Rd=214,wa=0,Aa=1,Ra=2,Ys=3,Ca=4,Pa=5,Ia=6,La=7,al=0,Cd=1,Pd=2,jn=0,xo=1,_o=2,vo=3,Ji=4,yo=5,Mo=6,So=7,jc="attached",Id="detached",xh=300,$i=301,ms=302,ll=303,cl=304,bo=306,wn=1e3,ii=1001,Da=1002,Xe=1003,Ld=1004;var Eo=1005;var an=1006,hl=1007;var ji=1008;var pn=1009,_h=1010,vh=1011,dr=1012,ul=1013,Kn=1014,Cn=1015,sn=1016,dl=1017,fl=1018,Ki=1020,yh=35902,Mh=35899,Sh=1021,bh=1022,vn=1023,ri=1026,di=1027,pl=1028,ml=1029,Qi=1030,gl=1031;var xl=1033,To=33776,wo=33777,Ao=33778,Ro=33779,_l=35840,vl=35841,yl=35842,Ml=35843,Sl=36196,bl=37492,El=37496,Tl=37488,wl=37489,Co=37490,Al=37491,Rl=37808,Cl=37809,Pl=37810,Il=37811,Ll=37812,Dl=37813,Fl=37814,Nl=37815,Ul=37816,Bl=37817,Ol=37818,zl=37819,kl=37820,Hl=37821,Gl=36492,Vl=36494,Wl=36495,Xl=36283,ql=36284,Po=36285,Yl=36286;var Ur=2300,Fa=2301,Ea=2302,Kc=2303,Qc=2400,th=2401,eh=2402;var Dd=3200;var fr=0,Fd=1,wi="",on="srgb",Br="srgb-linear",Or="linear",be="srgb";var Ta=7680;var Nd=519,Ud=512,Bd=513,Od=514,Zl=515,zd=516,kd=517,Jl=518,Hd=519,Eh=35044;var Th="300 es",Zn=2e3,Zs=2001;function jf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Kf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function zr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Gd(){let s=zr("canvas");return s.style.display="block",s}var Ru={},Js=null;function kr(...s){let t="THREE."+s.shift();Js?Js("log",t,...s):console.log(t,...s)}function Vd(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ne(...s){s=Vd(s);let t="THREE."+s.shift();if(Js)Js("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function re(...s){s=Vd(s);let t="THREE."+s.shift();if(Js)Js("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function as(...s){let t=s.join(" ");t in Ru||(Ru[t]=!0,ne(...s))}function Wd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Xd={[wa]:Aa,[Ra]:Ia,[Ca]:La,[Ys]:Pa,[Aa]:wa,[Ia]:Ra,[La]:Ca,[Pa]:Ys},oi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Sc=Math.PI/180,Hr=180/Math.PI;function si(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[s&255]+hn[s>>8&255]+hn[s>>16&255]+hn[s>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[e&63|128]+hn[e>>8&255]+"-"+hn[e>>16&255]+hn[e>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function ge(s,t,e){return Math.max(t,Math.min(e,s))}function Qf(s,t){return(s%t+t)%t}function bc(s,t,e){return(1-e)*s+e*t}function ni(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Re(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ih=class Ih{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ih.prototype.isVector2=!0;var xt=Ih,Fe=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=r[o+0],d=r[o+1],m=r[o+2],v=r[o+3];if(f!==v||l!==u||c!==d||h!==m){let g=l*u+c*d+h*m+f*v;g<0&&(u=-u,d=-d,m=-m,v=-v,g=-g);let p=1-a;if(g<.9995){let M=Math.acos(g),T=Math.sin(M);p=Math.sin(p*M)/T,a=Math.sin(a*M)/T,l=l*p+u*a,c=c*p+d*a,h=h*p+m*a,f=f*p+v*a}else{l=l*p+u*a,c=c*p+d*a,h=h*p+m*a,f=f*p+v*a;let M=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=M,c*=M,h*=M,f*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[o],u=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+h*f+l*d-c*u,t[e+1]=l*m+h*u+c*f-a*d,t[e+2]=c*m+h*d+a*u-l*f,t[e+3]=h*m-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(r/2),u=l(n/2),d=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:ne("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Lh=class Lh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=i+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ec.copy(this).projectOnVector(t),this.sub(Ec)}reflect(t){return this.sub(Ec.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Lh.prototype.isVector3=!0;var B=Lh,Ec=new B,Cu=new Fe,Dh=class Dh{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],v=i[0],g=i[3],p=i[6],M=i[1],T=i[4],y=i[7],b=i[2],E=i[5],P=i[8];return r[0]=o*v+a*M+l*b,r[3]=o*g+a*T+l*E,r[6]=o*p+a*y+l*P,r[1]=c*v+h*M+f*b,r[4]=c*g+h*T+f*E,r[7]=c*p+h*y+f*P,r[2]=u*v+d*M+m*b,r[5]=u*g+d*T+m*E,r[8]=u*p+d*y+m*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,m=e*f+n*u+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return t[0]=f*v,t[1]=(i*c-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=u*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-a*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return as("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Tc.makeScale(t,e)),this}rotate(t){return as("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Tc.makeRotation(-t)),this}translate(t,e){return as("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Tc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Dh.prototype.isMatrix3=!0;var de=Dh,Tc=new de,Pu=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Iu=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tp(){let s={enabled:!0,workingColorSpace:Br,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===be&&(i.r=Mi(i.r),i.g=Mi(i.g),i.b=Mi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===be&&(i.r=qs(i.r),i.g=qs(i.g),i.b=qs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===wi?Or:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return as("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return as("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Br]:{primaries:t,whitePoint:n,transfer:Or,toXYZ:Pu,fromXYZ:Iu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:t,whitePoint:n,transfer:be,toXYZ:Pu,fromXYZ:Iu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),s}var xe=tp();function Mi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Rs,Na=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Rs===void 0&&(Rs=zr("canvas")),Rs.width=t.width,Rs.height=t.height;let i=Rs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Rs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=zr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Mi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mi(e[n]/255)*255):e[n]=Mi(e[n]);return{data:e,width:t.width,height:t.height}}else return ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ep=0,$s=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=si(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(wc(i[o].image)):r.push(wc(i[o]))}else r=wc(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function wc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Na.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ne("Texture: Unable to serialize Texture."),{})}var np=0,Ac=new B,_n=class s extends oi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=ii,i=ii,r=an,o=ji,a=vn,l=pn,c=s.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=si(),this.name="",this.source=new $s(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ac).x}get height(){return this.source.getSize(Ac).y}get depth(){return this.source.getSize(Ac).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ne(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){ne(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wn:t.x=t.x-Math.floor(t.x);break;case ii:t.x=t.x<0?0:1;break;case Da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wn:t.y=t.y-Math.floor(t.y);break;case ii:t.y=t.y<0?0:1;break;case Da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=xh;_n.DEFAULT_ANISOTROPY=1;var Fh=class Fh{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,y=(d+1)/2,b=(p+1)/2,E=(h+u)/4,P=(f+v)/4,_=(m+g)/4;return T>y&&T>b?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=E/n,r=P/n):y>b?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=_/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=P/r,i=_/r),this.set(n,i,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(f-v)/M,this.z=(u-h)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this.w=ge(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this.w=ge(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fh.prototype.isVector4=!0;var we=Fh,Ua=class extends oi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new _n(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new $s(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},qe=class extends Ua{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Gr=class extends _n{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ba=class extends _n{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var rl=class rl{constructor(t,e,n,i,r,o,a,l,c,h,f,u,d,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,f,u,d,m,v,g)}set(t,e,n,i,r,o,a,l,c,h,f,u,d,m,v,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Cs.setFromMatrixColumn(t,0).length(),r=1/Cs.setFromMatrixColumn(t,1).length(),o=1/Cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=o*h,d=o*f,m=a*h,v=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+m*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,m=c*h,v=c*f;e[0]=u+v*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,m=c*h,v=c*f;e[0]=u-v*a,e[4]=-o*f,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,d=o*f,m=a*h,v=a*f;e[0]=l*h,e[4]=m*c-d,e[8]=u*c+v,e[1]=l*f,e[5]=v*c+u,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,d=o*c,m=a*l,v=a*c;e[0]=l*h,e[4]=v-u*f,e[8]=m*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+m,e[10]=u-v*f}else if(t.order==="XZY"){let u=o*l,d=o*c,m=a*l,v=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+v,e[5]=o*h,e[9]=d*f-m,e[2]=m*f-d,e[6]=a*h,e[10]=v*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ip,t,sp)}lookAt(t,e,n){let i=this.elements;return bn.subVectors(t,e),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Fi.crossVectors(n,bn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Fi.crossVectors(n,bn)),Fi.normalize(),Ko.crossVectors(bn,Fi),i[0]=Fi.x,i[4]=Ko.x,i[8]=bn.x,i[1]=Fi.y,i[5]=Ko.y,i[9]=bn.y,i[2]=Fi.z,i[6]=Ko.z,i[10]=bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],v=n[6],g=n[10],p=n[14],M=n[3],T=n[7],y=n[11],b=n[15],E=i[0],P=i[4],_=i[8],S=i[12],R=i[1],I=i[5],F=i[9],U=i[13],N=i[2],O=i[6],X=i[10],W=i[14],rt=i[3],q=i[7],j=i[11],tt=i[15];return r[0]=o*E+a*R+l*N+c*rt,r[4]=o*P+a*I+l*O+c*q,r[8]=o*_+a*F+l*X+c*j,r[12]=o*S+a*U+l*W+c*tt,r[1]=h*E+f*R+u*N+d*rt,r[5]=h*P+f*I+u*O+d*q,r[9]=h*_+f*F+u*X+d*j,r[13]=h*S+f*U+u*W+d*tt,r[2]=m*E+v*R+g*N+p*rt,r[6]=m*P+v*I+g*O+p*q,r[10]=m*_+v*F+g*X+p*j,r[14]=m*S+v*U+g*W+p*tt,r[3]=M*E+T*R+y*N+b*rt,r[7]=M*P+T*I+y*O+b*q,r[11]=M*_+T*F+y*X+b*j,r[15]=M*S+T*U+y*W+b*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],m=t[3],v=t[7],g=t[11],p=t[15],M=l*d-c*u,T=a*d-c*f,y=a*u-l*f,b=o*d-c*h,E=o*u-l*h,P=o*f-a*h;return e*(v*M-g*T+p*y)-n*(m*M-g*b+p*E)+i*(m*T-v*b+p*P)-r*(m*y-v*E+g*P)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],m=t[12],v=t[13],g=t[14],p=t[15],M=e*a-n*o,T=e*l-i*o,y=e*c-r*o,b=n*l-i*a,E=n*c-r*a,P=i*c-r*l,_=h*v-f*m,S=h*g-u*m,R=h*p-d*m,I=f*g-u*v,F=f*p-d*v,U=u*p-d*g,N=M*U-T*F+y*I+b*R-E*S+P*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/N;return t[0]=(a*U-l*F+c*I)*O,t[1]=(i*F-n*U-r*I)*O,t[2]=(v*P-g*E+p*b)*O,t[3]=(u*E-f*P-d*b)*O,t[4]=(l*R-o*U-c*S)*O,t[5]=(e*U-i*R+r*S)*O,t[6]=(g*y-m*P-p*T)*O,t[7]=(h*P-u*y+d*T)*O,t[8]=(o*F-a*R+c*_)*O,t[9]=(n*R-e*F-r*_)*O,t[10]=(m*E-v*y+p*M)*O,t[11]=(f*y-h*E-d*M)*O,t[12]=(a*S-o*I-l*_)*O,t[13]=(e*I-n*S+i*_)*O,t[14]=(v*T-m*b-g*M)*O,t[15]=(h*b-f*T+u*M)*O,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,m=r*f,v=o*h,g=o*f,p=a*f,M=l*c,T=l*h,y=l*f,b=n.x,E=n.y,P=n.z;return i[0]=(1-(v+p))*b,i[1]=(d+y)*b,i[2]=(m-T)*b,i[3]=0,i[4]=(d-y)*E,i[5]=(1-(u+p))*E,i[6]=(g+M)*E,i[7]=0,i[8]=(m+T)*P,i[9]=(g-M)*P,i[10]=(1-(u+v))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Cs.set(i[0],i[1],i[2]).length(),a=Cs.set(i[4],i[5],i[6]).length(),l=Cs.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Xn.copy(this);let c=1/o,h=1/a,f=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=f,Xn.elements[9]*=f,Xn.elements[10]*=f,e.setFromRotationMatrix(Xn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Zn,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),m,v;if(l)m=r/(o-r),v=o*r/(o-r);else if(a===Zn)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Zs)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Zn,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-i),u=-(e+t)/(e-t),d=-(n+i)/(n-i),m,v;if(l)m=1/(o-r),v=o/(o-r);else if(a===Zn)m=-2/(o-r),v=-(o+r)/(o-r);else if(a===Zs)m=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};rl.prototype.isMatrix4=!0;var oe=rl,Cs=new B,Xn=new oe,ip=new B(0,0,0),sp=new B(1,1,1),Fi=new B,Ko=new B,bn=new B,Lu=new oe,Du=new Fe,nn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ge(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Lu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Du.setFromEuler(this),this.setFromQuaternion(Du,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nn.DEFAULT_ORDER="XYZ";var js=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},rp=0,Fu=new B,Ps=new Fe,mi=new oe,Qo=new B,br=new B,op=new B,ap=new Fe,Nu=new B(1,0,0),Uu=new B(0,1,0),Bu=new B(0,0,1),Ou={type:"added"},lp={type:"removed"},Is={type:"childadded",child:null},Rc={type:"childremoved",child:null},Ce=class s extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new B,e=new nn,n=new Fe,i=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new oe},normalMatrix:{value:new de}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.premultiply(Ps),this}rotateX(t){return this.rotateOnAxis(Nu,t)}rotateY(t){return this.rotateOnAxis(Uu,t)}rotateZ(t){return this.rotateOnAxis(Bu,t)}translateOnAxis(t,e){return Fu.copy(t).applyQuaternion(this.quaternion),this.position.add(Fu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nu,t)}translateY(t){return this.translateOnAxis(Uu,t)}translateZ(t){return this.translateOnAxis(Bu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qo.copy(t):Qo.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(br,Qo,this.up):mi.lookAt(Qo,br,this.up),this.quaternion.setFromRotationMatrix(mi),i&&(mi.extractRotation(i.matrixWorld),Ps.setFromRotationMatrix(mi),this.quaternion.premultiply(Ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ou),Is.child=t,this.dispatchEvent(Is),Is.child=null):re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lp),Rc.child=t,this.dispatchEvent(Rc),Rc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ou),Is.child=t,this.dispatchEvent(Is),Is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,t,op),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,ap,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ce.DEFAULT_UP=new B(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var At=class extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},cp={type:"move"},Ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cp)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new At;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},ta={h:0,s:0,l:0};function Cc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=xe.workingColorSpace){if(t=Qf(t,1),e=ge(e,0,1),n=ge(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Cc(o,r,t+1/3),this.g=Cc(o,r,t),this.b=Cc(o,r,t-1/3)}return xe.colorSpaceToWorking(this,i),this}setStyle(t,e=on){function n(r){r!==void 0&&parseFloat(r)<1&&ne("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ne("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ne("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){let n=qd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ne("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}copyLinearToSRGB(t){return this.r=qs(t.r),this.g=qs(t.g),this.b=qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return xe.workingToColorSpace(un.copy(this),t),Math.round(ge(un.r*255,0,255))*65536+Math.round(ge(un.g*255,0,255))*256+Math.round(ge(un.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.workingToColorSpace(un.copy(this),e);let n=un.r,i=un.g,r=un.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=xe.workingColorSpace){return xe.workingToColorSpace(un.copy(this),e),t.r=un.r,t.g=un.g,t.b=un.b,t}getStyle(t=on){xe.workingToColorSpace(un.copy(this),t);let e=un.r,n=un.g,i=un.b;return t!==on?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ni),this.setHSL(Ni.h+t,Ni.s+e,Ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ni),t.getHSL(ta);let n=bc(Ni.h,ta.h,e),i=bc(Ni.s,ta.s,e),r=bc(Ni.l,ta.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new Qt;Qt.NAMES=qd;var zi=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},qn=new B,gi=new B,Pc=new B,xi=new B,Ls=new B,Ds=new B,zu=new B,Ic=new B,Lc=new B,Dc=new B,Fc=new we,Nc=new we,Uc=new we,yi=class s{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),qn.subVectors(t,e),i.cross(qn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){qn.subVectors(i,e),gi.subVectors(n,e),Pc.subVectors(t,e);let o=qn.dot(qn),a=qn.dot(gi),l=qn.dot(Pc),c=gi.dot(gi),h=gi.dot(Pc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Fc.setScalar(0),Nc.setScalar(0),Uc.setScalar(0),Fc.fromBufferAttribute(t,e),Nc.fromBufferAttribute(t,n),Uc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Fc,r.x),o.addScaledVector(Nc,r.y),o.addScaledVector(Uc,r.z),o}static isFrontFacing(t,e,n,i){return qn.subVectors(n,e),gi.subVectors(t,e),qn.cross(gi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),qn.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Ls.subVectors(i,n),Ds.subVectors(r,n),Ic.subVectors(t,n);let l=Ls.dot(Ic),c=Ds.dot(Ic);if(l<=0&&c<=0)return e.copy(n);Lc.subVectors(t,i);let h=Ls.dot(Lc),f=Ds.dot(Lc);if(h>=0&&f<=h)return e.copy(i);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ls,o);Dc.subVectors(t,r);let d=Ls.dot(Dc),m=Ds.dot(Dc);if(m>=0&&d<=m)return e.copy(r);let v=d*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Ds,a);let g=h*m-d*f;if(g<=0&&f-h>=0&&d-m>=0)return zu.subVectors(r,i),a=(f-h)/(f-h+(d-m)),e.copy(i).addScaledVector(zu,a);let p=1/(g+v+u);return o=v*p,a=u*p,e.copy(n).addScaledVector(Ls,o).addScaledVector(Ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Jn=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Yn):Yn.fromBufferAttribute(r,o),Yn.applyMatrix4(t.matrixWorld),this.expandByPoint(Yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ea.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ea.copy(n.boundingBox)),ea.applyMatrix4(t.matrixWorld),this.union(ea)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yn),Yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Er),na.subVectors(this.max,Er),Fs.subVectors(t.a,Er),Ns.subVectors(t.b,Er),Us.subVectors(t.c,Er),Ui.subVectors(Ns,Fs),Bi.subVectors(Us,Ns),ns.subVectors(Fs,Us);let e=[0,-Ui.z,Ui.y,0,-Bi.z,Bi.y,0,-ns.z,ns.y,Ui.z,0,-Ui.x,Bi.z,0,-Bi.x,ns.z,0,-ns.x,-Ui.y,Ui.x,0,-Bi.y,Bi.x,0,-ns.y,ns.x,0];return!Bc(e,Fs,Ns,Us,na)||(e=[1,0,0,0,1,0,0,0,1],!Bc(e,Fs,Ns,Us,na))?!1:(ia.crossVectors(Ui,Bi),e=[ia.x,ia.y,ia.z],Bc(e,Fs,Ns,Us,na))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},_i=[new B,new B,new B,new B,new B,new B,new B,new B],Yn=new B,ea=new Jn,Fs=new B,Ns=new B,Us=new B,Ui=new B,Bi=new B,ns=new B,Er=new B,na=new B,ia=new B,is=new B;function Bc(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){is.fromArray(s,r);let a=i.x*Math.abs(is.x)+i.y*Math.abs(is.y)+i.z*Math.abs(is.z),l=t.dot(is),c=e.dot(is),h=n.dot(is);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var je=new B,sa=new xt,hp=0,dn=class extends oi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Eh,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sa.fromBufferAttribute(this,e),sa.applyMatrix3(t),this.setXY(e,sa.x,sa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ls=class extends dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Vr=class extends dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var le=class extends dn{constructor(t,e,n){super(new Float32Array(t),e,n)}},up=new Jn,Tr=new B,Oc=new B,ai=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):up.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Tr.subVectors(t,this.center);let e=Tr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Tr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Tr.copy(t.center).add(Oc)),this.expandByPoint(Tr.copy(t.center).sub(Oc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},dp=0,Nn=new oe,zc=new Ce,Bs=new B,En=new Jn,wr=new Jn,en=new B,Pe=class s extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jf(t)?Vr:ls)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new de().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Nn.makeRotationFromQuaternion(t),this.applyMatrix4(Nn),this}rotateX(t){return Nn.makeRotationX(t),this.applyMatrix4(Nn),this}rotateY(t){return Nn.makeRotationY(t),this.applyMatrix4(Nn),this}rotateZ(t){return Nn.makeRotationZ(t),this.applyMatrix4(Nn),this}translate(t,e,n){return Nn.makeTranslation(t,e,n),this.applyMatrix4(Nn),this}scale(t,e,n){return Nn.makeScale(t,e,n),this.applyMatrix4(Nn),this}lookAt(t){return zc.lookAt(t),zc.updateMatrix(),this.applyMatrix4(zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new le(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];wr.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(En.min,wr.min),En.expandByPoint(en),en.addVectors(En.max,wr.max),En.expandByPoint(en)):(En.expandByPoint(wr.min),En.expandByPoint(wr.max))}En.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)en.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(en));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)en.fromBufferAttribute(a,c),l&&(Bs.fromBufferAttribute(t,c),en.add(Bs)),i=Math.max(i,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new dn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new B,l[_]=new B;let c=new B,h=new B,f=new B,u=new xt,d=new xt,m=new xt,v=new B,g=new B;function p(_,S,R){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,S),f.fromBufferAttribute(n,R),u.fromBufferAttribute(r,_),d.fromBufferAttribute(r,S),m.fromBufferAttribute(r,R),h.sub(c),f.sub(c),d.sub(u),m.sub(u);let I=1/(d.x*m.y-m.x*d.y);isFinite(I)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(I),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(I),a[_].add(v),a[S].add(v),a[R].add(v),l[_].add(g),l[S].add(g),l[R].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let _=0,S=M.length;_<S;++_){let R=M[_],I=R.start,F=R.count;for(let U=I,N=I+F;U<N;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let T=new B,y=new B,b=new B,E=new B;function P(_){b.fromBufferAttribute(i,_),E.copy(b);let S=a[_];T.copy(S),T.sub(b.multiplyScalar(b.dot(S))).normalize(),y.crossVectors(E,S);let I=y.dot(l[_])<0?-1:1;o.setXYZW(_,T.x,T.y,T.z,I)}for(let _=0,S=M.length;_<S;++_){let R=M[_],I=R.start,F=R.count;for(let U=I,N=I+F;U<N;U+=3)P(t.getX(U+0)),P(t.getX(U+1)),P(t.getX(U+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,f=new B;if(t)for(let u=0,d=t.count;u<d;u+=3){let m=t.getX(u+0),v=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,m=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*h;for(let p=0;p<h;p++)u[m++]=c[d++]}return new dn(u,h,f)}if(this.index===null)return ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Eh,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},xn=new B,Qs=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix4(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyNormalMatrix(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.transformDirection(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ni(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ni(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ni(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ni(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array),r=Re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){kr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new dn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){kr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},kc=new B,fp=new B,pp=new de,Tn=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=kc.subVectors(n,e).cross(fp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(kc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||pp.getNormalMatrix(t),i=this.coplanarPoint(kc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},mp=0,Un=class extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=si(),this.name="",this.type="Material",this.blending=Ti,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mh,this.blendDst=gh,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ta,this.stencilZFail=Ta,this.stencilZPass=Ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ne(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){ne(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Tn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new xt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Si=class extends Un{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Os,Ar=new B,zs=new B,ks=new B,Hs=new xt,Rr=new xt,Yd=new oe,ra=new B,Cr=new B,oa=new B,ku=new xt,Hc=new xt,Hu=new xt,ki=class extends Ce{constructor(t=new Si){if(super(),this.isSprite=!0,this.type="Sprite",Os===void 0){Os=new Pe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Wr(e,5);Os.setIndex([0,1,2,0,2,3]),Os.setAttribute("position",new Qs(n,3,0,!1)),Os.setAttribute("uv",new Qs(n,2,3,!1))}this.geometry=Os,this.material=t,this.center=new xt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&re('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zs.setFromMatrixScale(this.matrixWorld),Yd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ks.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zs.multiplyScalar(-ks.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;aa(ra.set(-.5,-.5,0),ks,o,zs,i,r),aa(Cr.set(.5,-.5,0),ks,o,zs,i,r),aa(oa.set(.5,.5,0),ks,o,zs,i,r),ku.set(0,0),Hc.set(1,0),Hu.set(1,1);let a=t.ray.intersectTriangle(ra,Cr,oa,!1,Ar);if(a===null&&(aa(Cr.set(-.5,.5,0),ks,o,zs,i,r),Hc.set(0,1),a=t.ray.intersectTriangle(ra,oa,Cr,!1,Ar),a===null))return;let l=t.ray.origin.distanceTo(Ar);l<t.near||l>t.far||e.push({distance:l,point:Ar.clone(),uv:yi.getInterpolation(Ar,ra,Cr,oa,ku,Hc,Hu,new xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function aa(s,t,e,n,i,r){Hs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Rr.x=r*Hs.x-i*Hs.y,Rr.y=i*Hs.x+r*Hs.y):Rr.copy(Hs),s.copy(t),s.x+=Rr.x,s.y+=Rr.y,s.applyMatrix4(Yd)}var vi=new B,Gc=new B,la=new B,ca=new B,tr=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,e),vi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Gc.copy(t).add(e).multiplyScalar(.5),la.copy(e).sub(t).normalize(),ca.copy(this.origin).sub(Gc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(la),a=ca.dot(this.direction),l=-ca.dot(la),c=ca.lengthSq(),h=Math.abs(1-o*o),f,u,d,m;if(h>0)if(f=o*l-a,u=o*a-l,m=r*h,f>=0)if(u>=-m)if(u<=m){let v=1/h;f*=v,u*=v,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Gc).addScaledVector(la,u),d}intersectSphere(t,e){if(t.radius<0)return null;vi.subVectors(t.center,this.origin);let n=vi.dot(this.direction),i=vi.dot(vi)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=t.x-o.x,u=t.y-o.y,d=t.z-o.z,m=e.x-o.x,v=e.y-o.y,g=e.z-o.z,p=n.x-o.x,M=n.y-o.y,T=n.z-o.z,y=Math.abs(l),b=Math.abs(c),E=Math.abs(h),P,_,S,R,I,F,U,N,O,X,W,rt;if(y>=b&&y>=E?(S=l,F=f,O=m,rt=p,l>=0?(P=c,_=h,R=u,I=d,U=v,N=g,X=M,W=T):(P=h,_=c,R=d,I=u,U=g,N=v,X=T,W=M)):b>=E?(S=c,F=u,O=v,rt=M,c>=0?(P=h,_=l,R=d,I=f,U=g,N=m,X=T,W=p):(P=l,_=h,R=f,I=d,U=m,N=g,X=p,W=T)):(S=h,F=d,O=g,rt=T,h>=0?(P=l,_=c,R=f,I=u,U=m,N=v,X=p,W=M):(P=c,_=l,R=u,I=f,U=v,N=m,X=M,W=p)),S===0)return null;let q=P/S,j=_/S,tt=1/S,st=R-q*F,pt=I-j*F,bt=U-q*O,ft=N-j*O,dt=X-q*rt,x=W-j*rt,A=dt*ft-x*bt,L=st*x-pt*dt,k=bt*pt-ft*st;if(i){if(A<0||L<0||k<0)return null}else if((A<0||L<0||k<0)&&(A>0||L>0||k>0))return null;let Y=A+L+k;if(Y===0)return null;let gt=tt*(A*F+L*O+k*rt);return(Y>0?gt<0:gt>0)?null:this.at(gt/Y,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ye=class extends Un{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Gu=new oe,ss=new tr,ha=new ai,Vu=new B,ua=new B,da=new B,fa=new B,Vc=new B,pa=new B,Wu=new B,ma=new B,ye=class extends Ce{constructor(t=new Pe,e=new Ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){pa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(Vc.fromBufferAttribute(f,t),o?pa.addScaledVector(Vc,h):pa.addScaledVector(Vc.sub(e),h))}e.add(pa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(r),ss.copy(t.ray).recast(t.near),!(ha.containsPoint(ss.origin)===!1&&(ss.intersectSphere(ha,Vu)===null||ss.origin.distanceToSquared(Vu)>(t.far-t.near)**2))&&(Gu.copy(r).invert(),ss.copy(t.ray).applyMatrix4(Gu),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ss)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){let g=u[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),T=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=M,b=T;y<b;y+=3){let E=a.getX(y),P=a.getX(y+1),_=a.getX(y+2);i=ga(this,p,t,n,c,h,f,E,P,_),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){let M=a.getX(g),T=a.getX(g+1),y=a.getX(g+2);i=ga(this,o,t,n,c,h,f,M,T,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){let g=u[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),T=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=M,b=T;y<b;y+=3){let E=y,P=y+1,_=y+2;i=ga(this,p,t,n,c,h,f,E,P,_),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){let M=g,T=g+1,y=g+2;i=ga(this,o,t,n,c,h,f,M,T,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function gp(s,t,e,n,i,r,o,a){let l;if(t.side===ln?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===$n,a),l===null)return null;ma.copy(a),ma.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(ma);return c<e.near||c>e.far?null:{distance:c,point:ma.clone(),object:s}}function ga(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,ua),s.getVertexPosition(l,da),s.getVertexPosition(c,fa);let h=gp(s,t,e,n,ua,da,fa,Wu);if(h){let f=new B;yi.getBarycoord(Wu,ua,da,fa,f),i&&(h.uv=yi.getInterpolatedAttribute(i,a,l,c,f,new xt)),r&&(h.uv1=yi.getInterpolatedAttribute(r,a,l,c,f,new xt)),o&&(h.normal=yi.getInterpolatedAttribute(o,a,l,c,f,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new B,materialIndex:0};yi.getNormal(ua,da,fa,u.normal),h.face=u,h.barycoord=f}return h}var Pr=new we,Xu=new we,qu=new we,xp=new we,Yu=new oe,xa=new B,Wc=new ai,Zu=new oe,Xc=new tr,Xr=class extends ye{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jc,this.bindMatrix=new oe,this.bindMatrixInverse=new oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Jn),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,xa),this.boundingBox.expandByPoint(xa)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ai),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,xa),this.boundingSphere.expandByPoint(xa)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wc.copy(this.boundingSphere),Wc.applyMatrix4(i),t.ray.intersectsSphere(Wc)!==!1&&(Zu.copy(i).invert(),Xc.copy(t.ray).applyMatrix4(Zu),!(this.boundingBox!==null&&Xc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Xc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new we,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===jc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Id?this.bindMatrixInverse.copy(this.bindMatrix).invert():ne("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;Xu.fromBufferAttribute(i.attributes.skinIndex,t),qu.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(Pr.copy(e),e.set(0,0,0,0)):(Pr.set(...e,1),e.set(0,0,0)),Pr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=qu.getComponent(r);if(o!==0){let a=Xu.getComponent(r);Yu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(xp.copy(Pr).applyMatrix4(Yu),o)}}return e.isVector4&&(e.w=Pr.w),e.applyMatrix4(this.bindMatrixInverse)}},bi=class extends Ce{constructor(){super(),this.isBone=!0,this.type="Bone"}},li=class extends _n{constructor(t=null,e=1,n=1,i,r,o,a,l,c=Xe,h=Xe,f,u){super(null,o,a,l,c,h,i,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ju=new oe,_p=new oe,qr=class s{constructor(t=[],e=[]){this.uuid=si(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){ne("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new oe)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new oe;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:_p;Ju.multiplyMatrices(a,e[r]),Ju.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new li(e,t,t,vn,Cn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],o=e[r];o===void 0&&(ne("Skeleton: No bone found with UUID:",r),o=new bi),this.bones.push(o),this.boneInverses.push(new oe().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let o=e[i];t.bones.push(o.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}},er=class extends dn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Gs=new oe,$u=new oe,_a=[],ju=new Jn,vp=new oe,Ir=new ye,Lr=new ai,cs=class extends ye{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new er(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,vp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gs),ju.copy(t.boundingBox).applyMatrix4(Gs),this.boundingBox.union(ju)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ai),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gs),Lr.copy(t.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(Lr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lr.copy(this.boundingSphere),Lr.applyMatrix4(n),t.ray.intersectsSphere(Lr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Gs),$u.multiplyMatrices(n,Gs),Ir.matrixWorld=$u,Ir.raycast(t,_a);for(let o=0,a=_a.length;o<a;o++){let l=_a[o];l.instanceId=r,l.object=this,e.push(l)}_a.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new er(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new li(new Float32Array(i*this.count),i,this.count,pl,Cn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},rs=new ai,yp=new xt(.5,.5),va=new B,nr=class{constructor(t=new Tn,e=new Tn,n=new Tn,i=new Tn,r=new Tn,o=new Tn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zn,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],m=r[8],v=r[9],g=r[10],p=r[11],M=r[12],T=r[13],y=r[14],b=r[15];if(i[0].setComponents(c-o,d-h,p-m,b-M).normalize(),i[1].setComponents(c+o,d+h,p+m,b+M).normalize(),i[2].setComponents(c+a,d+f,p+v,b+T).normalize(),i[3].setComponents(c-a,d-f,p-v,b-T).normalize(),n)i[4].setComponents(l,u,g,y).normalize(),i[5].setComponents(c-l,d-u,p-g,b-y).normalize();else if(i[4].setComponents(c-l,d-u,p-g,b-y).normalize(),e===Zn)i[5].setComponents(c+l,d+u,p+g,b+y).normalize();else if(e===Zs)i[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){rs.center.set(0,0,0);let e=yp.distanceTo(t.center);return rs.radius=.7071067811865476+e,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(va.x=i.normal.x>0?t.max.x:t.min.x,va.y=i.normal.y>0?t.max.y:t.min.y,va.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(va)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Yr=class extends _n{constructor(t=[],e=$i,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Zr=class extends _n{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ci=class extends _n{constructor(t,e,n=Kn,i,r,o,a=Xe,l=Xe,c,h=ri,f=1){if(h!==ri&&h!==di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $s(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Oa=class extends ci{constructor(t,e=Kn,n=$i,i,r,o=Xe,a=Xe,l,c=ri){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Jr=class extends _n{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Mn=class s extends Pe{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(f,2));function m(v,g,p,M,T,y,b,E,P,_,S){let R=y/P,I=b/_,F=y/2,U=b/2,N=E/2,O=P+1,X=_+1,W=0,rt=0,q=new B;for(let j=0;j<X;j++){let tt=j*I-U;for(let st=0;st<O;st++){let pt=st*R-F;q[v]=pt*M,q[g]=tt*T,q[p]=N,c.push(q.x,q.y,q.z),q[v]=0,q[g]=0,q[p]=E>0?1:-1,h.push(q.x,q.y,q.z),f.push(st/P),f.push(1-j/_),W+=1}}for(let j=0;j<_;j++)for(let tt=0;tt<P;tt++){let st=u+tt+O*j,pt=u+tt+O*(j+1),bt=u+(tt+1)+O*(j+1),ft=u+(tt+1)+O*j;l.push(st,pt,ft),l.push(pt,bt,ft),rt+=6}a.addGroup(d,rt,S),d+=rt,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},$r=class s extends Pe{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,f=Math.PI/2*t,u=e,d=2*f+u,m=n*2+r,v=i+1,g=new B,p=new B;for(let M=0;M<=m;M++){let T=0,y=0,b=0,E=0;if(M<=n){let S=M/n,R=S*Math.PI/2;y=-h-t*Math.cos(R),b=t*Math.sin(R),E=-t*Math.cos(R),T=S*f}else if(M<=n+r){let S=(M-n)/r;y=-h+S*e,b=t,E=0,T=f+S*u}else{let S=(M-n-r)/n,R=S*Math.PI/2;y=h+t*Math.sin(R),b=t*Math.cos(R),E=t*Math.sin(R),T=f+u+S*f}let P=Math.max(0,Math.min(1,T/d)),_=0;M===0?_=.5/i:M===m&&(_=-.5/i);for(let S=0;S<=i;S++){let R=S/i,I=R*Math.PI*2,F=Math.sin(I),U=Math.cos(I);p.x=-b*U,p.y=y,p.z=b*F,a.push(p.x,p.y,p.z),g.set(-b*U,E,b*F),g.normalize(),l.push(g.x,g.y,g.z),c.push(R+_,P)}if(M>0){let S=(M-1)*v;for(let R=0;R<i;R++){let I=S+R,F=S+R+1,U=M*v+R,N=M*v+R+1;o.push(I,F,U),o.push(F,N,U)}}}this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},hs=class s extends Pe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new B,h=new xt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=n+f/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(a,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Hi=class s extends Pe{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],f=[],u=[],d=[],m=0,v=[],g=n/2,p=0;M(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new le(f,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(d,2));function M(){let y=new B,b=new B,E=0,P=(e-t)/n;for(let _=0;_<=r;_++){let S=[],R=_/r,I=R*(e-t)+t;for(let F=0;F<=i;F++){let U=F/i,N=U*l+a,O=Math.sin(N),X=Math.cos(N);b.x=I*O,b.y=-R*n+g,b.z=I*X,f.push(b.x,b.y,b.z),y.set(O,P,X).normalize(),u.push(y.x,y.y,y.z),d.push(U,1-R),S.push(m++)}v.push(S)}for(let _=0;_<i;_++)for(let S=0;S<r;S++){let R=v[S][_],I=v[S+1][_],F=v[S+1][_+1],U=v[S][_+1];(t>0||S!==0)&&(h.push(R,I,U),E+=3),(e>0||S!==r-1)&&(h.push(I,F,U),E+=3)}c.addGroup(p,E,0),p+=E}function T(y){let b=m,E=new xt,P=new B,_=0,S=y===!0?t:e,R=y===!0?1:-1;for(let F=1;F<=i;F++)f.push(0,g*R,0),u.push(0,R,0),d.push(.5,.5),m++;let I=m;for(let F=0;F<=i;F++){let N=F/i*l+a,O=Math.cos(N),X=Math.sin(N);P.x=S*X,P.y=g*R,P.z=S*O,f.push(P.x,P.y,P.z),u.push(0,R,0),E.x=O*.5+.5,E.y=X*.5*R+.5,d.push(E.x,E.y),m++}for(let F=0;F<i;F++){let U=b+F,N=I+F;y===!0?h.push(N,N+1,U):h.push(N+1,N,U),_+=3}c.addGroup(p,_,y===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},hi=class s extends Hi{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},za=class s extends Pe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let T=new B,y=new B,b=new B;for(let E=0;E<e.length;E+=3)d(e[E+0],T),d(e[E+1],y),d(e[E+2],b),l(T,y,b,M)}function l(M,T,y,b){let E=b+1,P=[];for(let _=0;_<=E;_++){P[_]=[];let S=M.clone().lerp(y,_/E),R=T.clone().lerp(y,_/E),I=E-_;for(let F=0;F<=I;F++)F===0&&_===E?P[_][F]=S:P[_][F]=S.clone().lerp(R,F/I)}for(let _=0;_<E;_++)for(let S=0;S<2*(E-_)-1;S++){let R=Math.floor(S/2);S%2===0?(u(P[_][R+1]),u(P[_+1][R]),u(P[_][R])):(u(P[_][R+1]),u(P[_+1][R+1]),u(P[_+1][R]))}}function c(M){let T=new B;for(let y=0;y<r.length;y+=3)T.x=r[y+0],T.y=r[y+1],T.z=r[y+2],T.normalize().multiplyScalar(M),r[y+0]=T.x,r[y+1]=T.y,r[y+2]=T.z}function h(){let M=new B;for(let T=0;T<r.length;T+=3){M.x=r[T+0],M.y=r[T+1],M.z=r[T+2];let y=g(M)/2/Math.PI+.5,b=p(M)/Math.PI+.5;o.push(y,1-b)}m(),f()}function f(){for(let M=0;M<o.length;M+=6){let T=o[M+0],y=o[M+2],b=o[M+4],E=Math.max(T,y,b),P=Math.min(T,y,b);E>.9&&P<.1&&(T<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),b<.2&&(o[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function d(M,T){let y=M*3;T.x=t[y+0],T.y=t[y+1],T.z=t[y+2]}function m(){let M=new B,T=new B,y=new B,b=new B,E=new xt,P=new xt,_=new xt;for(let S=0,R=0;S<r.length;S+=9,R+=6){M.set(r[S+0],r[S+1],r[S+2]),T.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),E.set(o[R+0],o[R+1]),P.set(o[R+2],o[R+3]),_.set(o[R+4],o[R+5]),b.copy(M).add(T).add(y).divideScalar(3);let I=g(b);v(E,R+0,M,I),v(P,R+2,T,I),v(_,R+4,y,I)}}function v(M,T,y,b){b<0&&M.x===1&&(o[T]=M.x-1),y.x===0&&y.z===0&&(o[T]=b/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var An=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ne("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],u=n[i+1]-h,d=(o-h)/u;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new xt:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new B,i=[],r=[],o=[],a=new B,l=new oe;for(let d=0;d<=t;d++){let m=d/t;i[d]=this.getTangentAt(m,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(ge(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(ge(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ir=class extends An{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new xt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ka=class extends ir{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function wh(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,i(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Ku=new B,Qu=new B,qc=new wh,Yc=new wh,Zc=new wh,sr=class extends An{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new B){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Qu.subVectors(i[0],i[1]).add(i[0]),c=Qu);let f=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Ku.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ku),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),qc.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,v,g),Yc.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,v,g),Zc.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(qc.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Yc.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Zc.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(qc.calc(l),Yc.calc(l),Zc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new B().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function td(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Mp(s,t){let e=1-s;return e*e*t}function Sp(s,t){return 2*(1-s)*s*t}function bp(s,t){return s*s*t}function Fr(s,t,e,n){return Mp(s,t)+Sp(s,e)+bp(s,n)}function Ep(s,t){let e=1-s;return e*e*e*t}function Tp(s,t){let e=1-s;return 3*e*e*s*t}function wp(s,t){return 3*(1-s)*s*s*t}function Ap(s,t){return s*s*s*t}function Nr(s,t,e,n,i){return Ep(s,t)+Tp(s,e)+wp(s,n)+Ap(s,i)}var jr=class extends An{constructor(t=new xt,e=new xt,n=new xt,i=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new xt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Nr(t,i.x,r.x,o.x,a.x),Nr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ha=class extends An{constructor(t=new B,e=new B,n=new B,i=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new B){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Nr(t,i.x,r.x,o.x,a.x),Nr(t,i.y,r.y,o.y,a.y),Nr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Kr=class extends An{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ga=class extends An{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qr=class extends An{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Fr(t,i.x,r.x,o.x),Fr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Va=class extends An{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Fr(t,i.x,r.x,o.x),Fr(t,i.y,r.y,o.y),Fr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gi=class extends An{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(td(a,l.x,c.x,h.x,f.x),td(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new xt().fromArray(i))}return this}},nh=Object.freeze({__proto__:null,ArcCurve:ka,CatmullRomCurve3:sr,CubicBezierCurve:jr,CubicBezierCurve3:Ha,EllipseCurve:ir,LineCurve:Kr,LineCurve3:Ga,QuadraticBezierCurve:Qr,QuadraticBezierCurve3:Va,SplineCurve:Gi}),Wa=class extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new nh[i.type]().fromJSON(i))}return this}},to=class extends Wa{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Kr(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Qr(this.currentPoint.clone(),new xt(t,e),new xt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new jr(this.currentPoint.clone(),new xt(t,e),new xt(n,i),new xt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Gi(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new ir(t,e,n,i,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},rr=class extends to{constructor(t){super(t),this.uuid=si(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new to().fromJSON(i))}return this}};function Rp(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Zd(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Dp(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,f=l;for(let u=e;u<i;u+=e){let d=s[u],m=s[u+1];d<a&&(a=d),m<l&&(l=m),d>h&&(h=d),m>f&&(f=m)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return eo(r,o,e,a,l,c,0),o}function Zd(s,t,e,n,i){let r;if(i===Wp(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=ed(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=ed(o/n|0,s[o],s[o+1],r);return r&&or(r,r.next)&&(io(r),r=r.next),r}function us(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(or(e,e.next)||Be(e.prev,e,e.next)===0)){if(io(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function eo(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Op(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?Pp(s,n,i,r):Cp(s)){t.push(l.i,s.i,c.i),io(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Ip(us(s),t),eo(s,t,e,n,i,r,2)):o===2&&Lp(s,t,e,n,i,r):eo(us(s),t,e,n,i,r,1);break}}}function Cp(s){let t=s.prev,e=s,n=s.next;if(Be(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),f=Math.min(a,l,c),u=Math.max(i,r,o),d=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&Dr(i,a,r,l,o,c,m.x,m.y)&&Be(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Pp(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Be(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,f=r.y,u=o.y,d=Math.min(a,l,c),m=Math.min(h,f,u),v=Math.max(a,l,c),g=Math.max(h,f,u),p=ih(d,m,t,e,n),M=ih(v,g,t,e,n),T=s.prevZ,y=s.nextZ;for(;T&&T.z>=p&&y&&y.z<=M;){if(T.x>=d&&T.x<=v&&T.y>=m&&T.y<=g&&T!==i&&T!==o&&Dr(a,h,l,f,c,u,T.x,T.y)&&Be(T.prev,T,T.next)>=0||(T=T.prevZ,y.x>=d&&y.x<=v&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Dr(a,h,l,f,c,u,y.x,y.y)&&Be(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;T&&T.z>=p;){if(T.x>=d&&T.x<=v&&T.y>=m&&T.y<=g&&T!==i&&T!==o&&Dr(a,h,l,f,c,u,T.x,T.y)&&Be(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;y&&y.z<=M;){if(y.x>=d&&y.x<=v&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Dr(a,h,l,f,c,u,y.x,y.y)&&Be(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Ip(s,t){let e=s;do{let n=e.prev,i=e.next.next;!or(n,i)&&$d(n,e,e.next,i)&&no(n,i)&&no(i,n)&&(t.push(n.i,e.i,i.i),io(e),io(e.next),e=s=i),e=e.next}while(e!==s);return us(e)}function Lp(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Hp(o,a)){let l=jd(o,a);o=us(o,o.next),l=us(l,l.next),eo(o,t,e,n,i,r,0),eo(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Dp(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Zd(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(kp(c))}i.sort(Fp);for(let r=0;r<i.length;r++)e=Np(i[r],e);return e}function Fp(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Np(s,t){let e=Up(s,t);if(!e)return t;let n=jd(e,s);return us(n,n.next),us(e,e.next)}function Up(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(or(s,e))return e;do{if(or(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let f=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Jd(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let f=Math.abs(i-e.y)/(n-e.x);no(e,s)&&(f<h||f===h&&(e.x>o.x||e.x===o.x&&Bp(o,e)))&&(o=e,h=f)}e=e.next}while(e!==a);return o}function Bp(s,t){return Be(s.prev,s,t.prev)<0&&Be(t.next,s,s.next)<0}function Op(s,t,e,n){let i=s;do i.z===0&&(i.z=ih(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,zp(i)}function zp(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function ih(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function kp(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Jd(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Dr(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&Jd(s,t,e,n,i,r,o,a)}function Hp(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Gp(s,t)&&(no(s,t)&&no(t,s)&&Vp(s,t)&&(Be(s.prev,s,t.prev)||Be(s,t.prev,t))||or(s,t)&&Be(s.prev,s,s.next)>0&&Be(t.prev,t,t.next)>0)}function Be(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function or(s,t){return s.x===t.x&&s.y===t.y}function $d(s,t,e,n){let i=Ma(Be(s,t,e)),r=Ma(Be(s,t,n)),o=Ma(Be(e,n,s)),a=Ma(Be(e,n,t));return!!(i!==r&&o!==a||i===0&&ya(s,e,t)||r===0&&ya(s,n,t)||o===0&&ya(e,s,n)||a===0&&ya(e,t,n))}function ya(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ma(s){return s>0?1:s<0?-1:0}function Gp(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&$d(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function no(s,t){return Be(s.prev,s,s.next)<0?Be(s,t,s.next)>=0&&Be(s,s.prev,t)>=0:Be(s,t,s.prev)<0||Be(s,s.next,t)<0}function Vp(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function jd(s,t){let e=sh(s.i,s.x,s.y),n=sh(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ed(s,t,e,n){let i=sh(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function io(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function sh(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Wp(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var rh=class{static triangulate(t,e,n=2){return Rp(t,e,n)}},os=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];nd(t),id(n,t);let o=t.length;e.forEach(nd);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,id(n,e[l]);let a=rh.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function nd(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function id(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var so=class s extends Pe{constructor(t=new rr([new xt(.5,.5),new xt(-.5,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new le(i,3)),this.setAttribute("uv",new le(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Xp,T,y=!1,b,E,P,_;if(p){T=p.getSpacedPoints(h),y=!0,u=!1;let K=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(h,K),E=new B,P=new B,_=new B}u||(g=0,d=0,m=0,v=0);let S=a.extractPoints(c),R=S.shape,I=S.holes;if(!os.isClockWise(R)){R=R.reverse();for(let K=0,at=I.length;K<at;K++){let mt=I[K];os.isClockWise(mt)&&(I[K]=mt.reverse())}}function U(K){let mt=10000000000000001e-36,lt=K[0];for(let yt=1;yt<=K.length;yt++){let Yt=yt%K.length,zt=K[Yt],$t=zt.x-lt.x,ee=zt.y-lt.y,z=$t*$t+ee*ee,Me=Math.max(Math.abs(zt.x),Math.abs(zt.y),Math.abs(lt.x),Math.abs(lt.y)),fe=mt*Me*Me;if(z<=fe){K.splice(Yt,1),yt--;continue}lt=zt}}U(R),I.forEach(U);let N=I.length,O=R;for(let K=0;K<N;K++){let at=I[K];R=R.concat(at)}function X(K,at,mt){return at||re("ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(at,mt)}let W=R.length;function rt(K,at,mt){let lt,yt,Yt,zt=K.x-at.x,$t=K.y-at.y,ee=mt.x-K.x,z=mt.y-K.y,Me=zt*zt+$t*$t,fe=zt*z-$t*ee;if(Math.abs(fe)>Number.EPSILON){let D=Math.sqrt(Me),w=Math.sqrt(ee*ee+z*z),V=at.x-$t/D,Z=at.y+zt/D,it=mt.x-z/w,St=mt.y+ee/w,Et=((it-V)*z-(St-Z)*ee)/(zt*z-$t*ee);lt=V+zt*Et-K.x,yt=Z+$t*Et-K.y;let ot=lt*lt+yt*yt;if(ot<=2)return new xt(lt,yt);Yt=Math.sqrt(ot/2)}else{let D=!1;zt>Number.EPSILON?ee>Number.EPSILON&&(D=!0):zt<-Number.EPSILON?ee<-Number.EPSILON&&(D=!0):Math.sign($t)===Math.sign(z)&&(D=!0),D?(lt=-$t,yt=zt,Yt=Math.sqrt(Me)):(lt=zt,yt=$t,Yt=Math.sqrt(Me/2))}return new xt(lt/Yt,yt/Yt)}let q=[];for(let K=0,at=O.length,mt=at-1,lt=K+1;K<at;K++,mt++,lt++)mt===at&&(mt=0),lt===at&&(lt=0),q[K]=rt(O[K],O[mt],O[lt]);let j=[],tt,st=q.concat();for(let K=0,at=N;K<at;K++){let mt=I[K];tt=[];for(let lt=0,yt=mt.length,Yt=yt-1,zt=lt+1;lt<yt;lt++,Yt++,zt++)Yt===yt&&(Yt=0),zt===yt&&(zt=0),tt[lt]=rt(mt[lt],mt[Yt],mt[zt]);j.push(tt),st=st.concat(tt)}let pt;if(g===0)pt=os.triangulateShape(O,I);else{let K=[],at=[];for(let mt=0;mt<g;mt++){let lt=mt/g,yt=d*Math.cos(lt*Math.PI/2),Yt=m*Math.sin(lt*Math.PI/2)+v;for(let zt=0,$t=O.length;zt<$t;zt++){let ee=X(O[zt],q[zt],Yt);L(ee.x,ee.y,-yt),lt===0&&K.push(ee)}for(let zt=0,$t=N;zt<$t;zt++){let ee=I[zt];tt=j[zt];let z=[];for(let Me=0,fe=ee.length;Me<fe;Me++){let D=X(ee[Me],tt[Me],Yt);L(D.x,D.y,-yt),lt===0&&z.push(D)}lt===0&&at.push(z)}}pt=os.triangulateShape(K,at)}let bt=pt.length,ft=m+v;for(let K=0;K<W;K++){let at=u?X(R[K],st[K],ft):R[K];y?(P.copy(b.normals[0]).multiplyScalar(at.x),E.copy(b.binormals[0]).multiplyScalar(at.y),_.copy(T[0]).add(P).add(E),L(_.x,_.y,_.z)):L(at.x,at.y,0)}for(let K=1;K<=h;K++)for(let at=0;at<W;at++){let mt=u?X(R[at],st[at],ft):R[at];y?(P.copy(b.normals[K]).multiplyScalar(mt.x),E.copy(b.binormals[K]).multiplyScalar(mt.y),_.copy(T[K]).add(P).add(E),L(_.x,_.y,_.z)):L(mt.x,mt.y,f/h*K)}for(let K=g-1;K>=0;K--){let at=K/g,mt=d*Math.cos(at*Math.PI/2),lt=m*Math.sin(at*Math.PI/2)+v;for(let yt=0,Yt=O.length;yt<Yt;yt++){let zt=X(O[yt],q[yt],lt);L(zt.x,zt.y,f+mt)}for(let yt=0,Yt=I.length;yt<Yt;yt++){let zt=I[yt];tt=j[yt];for(let $t=0,ee=zt.length;$t<ee;$t++){let z=X(zt[$t],tt[$t],lt);y?L(z.x,z.y+T[h-1].y,T[h-1].x+mt):L(z.x,z.y,f+mt)}}}dt(),x();function dt(){let K=i.length/3;if(u){let at=0,mt=W*at;for(let lt=0;lt<bt;lt++){let yt=pt[lt];k(yt[2]+mt,yt[1]+mt,yt[0]+mt)}at=h+g*2,mt=W*at;for(let lt=0;lt<bt;lt++){let yt=pt[lt];k(yt[0]+mt,yt[1]+mt,yt[2]+mt)}}else{for(let at=0;at<bt;at++){let mt=pt[at];k(mt[2],mt[1],mt[0])}for(let at=0;at<bt;at++){let mt=pt[at];k(mt[0]+W*h,mt[1]+W*h,mt[2]+W*h)}}n.addGroup(K,i.length/3-K,0)}function x(){let K=i.length/3,at=0;A(O,at),at+=O.length;for(let mt=0,lt=I.length;mt<lt;mt++){let yt=I[mt];A(yt,at),at+=yt.length}n.addGroup(K,i.length/3-K,1)}function A(K,at){let mt=K.length;for(;--mt>=0;){let lt=mt,yt=mt-1;yt<0&&(yt=K.length-1);for(let Yt=0,zt=h+g*2;Yt<zt;Yt++){let $t=W*Yt,ee=W*(Yt+1),z=at+lt+$t,Me=at+yt+$t,fe=at+yt+ee,D=at+lt+ee;Y(z,Me,fe,D)}}}function L(K,at,mt){l.push(K),l.push(at),l.push(mt)}function k(K,at,mt){gt(K),gt(at),gt(mt);let lt=i.length/3,yt=M.generateTopUV(n,i,lt-3,lt-2,lt-1);Ht(yt[0]),Ht(yt[1]),Ht(yt[2])}function Y(K,at,mt,lt){gt(K),gt(at),gt(lt),gt(at),gt(mt),gt(lt);let yt=i.length/3,Yt=M.generateSideWallUV(n,i,yt-6,yt-3,yt-2,yt-1);Ht(Yt[0]),Ht(Yt[1]),Ht(Yt[3]),Ht(Yt[1]),Ht(Yt[2]),Ht(Yt[3])}function gt(K){i.push(l[K*3+0]),i.push(l[K*3+1]),i.push(l[K*3+2])}function Ht(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return qp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new nh[i.type]().fromJSON(i)),new s(n,t.options)}},Xp={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new xt(r,o),new xt(a,l),new xt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[i*3],d=t[i*3+1],m=t[i*3+2],v=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new xt(o,1-l),new xt(c,1-f),new xt(u,1-m),new xt(v,1-p)]:[new xt(a,1-l),new xt(h,1-f),new xt(d,1-m),new xt(g,1-p)]}};function qp(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ds=class s extends za{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},ar=class s extends Pe{constructor(t=[new xt(0,-.5),new xt(.5,0),new xt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ge(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,f=new B,u=new xt,d=new B,m=new B,v=new B,g=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-g,d.z=p*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(m)}for(let M=0;M<=e;M++){let T=n+M*h*i,y=Math.sin(T),b=Math.cos(T);for(let E=0;E<=t.length-1;E++){f.x=t[E].x*y,f.y=t[E].y,f.z=t[E].x*b,o.push(f.x,f.y,f.z),u.x=M/e,u.y=E/(t.length-1),a.push(u.x,u.y);let P=l[3*E+0]*y,_=l[3*E+1],S=l[3*E+0]*b;c.push(P,_,S)}}for(let M=0;M<e;M++)for(let T=0;T<t.length-1;T++){let y=T+M*t.length,b=y,E=y+t.length,P=y+t.length+1,_=y+1;r.push(b,E,_),r.push(P,_,E)}this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("uv",new le(a,2)),this.setAttribute("normal",new le(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var Ze=class s extends Pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=t/a,u=e/l,d=[],m=[],v=[],g=[];for(let p=0;p<h;p++){let M=p*u-o;for(let T=0;T<c;T++){let y=T*f-r;m.push(y,-M,0),v.push(0,0,1),g.push(T/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let T=M+c*p,y=M+c*(p+1),b=M+1+c*(p+1),E=M+1+c*p;d.push(T,y,E),d.push(y,b,E)}this.setIndex(d),this.setAttribute("position",new le(m,3)),this.setAttribute("normal",new le(v,3)),this.setAttribute("uv",new le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var fn=class s extends Pe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new B,u=new B,d=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){let M=[],T=p/n,y=o+T*a,b=t*Math.cos(y),E=Math.sqrt(t*t-b*b),P=0;p===0&&o===0?P=.5/e:p===n&&l===Math.PI&&(P=-.5/e);for(let _=0;_<=e;_++){let S=_/e,R=i+S*r;f.x=-E*Math.cos(R),f.y=b,f.z=E*Math.sin(R),m.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),g.push(S+P,1-T),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let T=h[p][M+1],y=h[p][M],b=h[p+1][M],E=h[p+1][M+1];(p!==0||o>0)&&d.push(T,y,E),(p!==n-1||l<Math.PI)&&d.push(y,b,E)}this.setIndex(d),this.setAttribute("position",new le(m,3)),this.setAttribute("normal",new le(v,3)),this.setAttribute("uv",new le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Oe=class s extends Pe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],f=[],u=new B,d=new B,m=new B;for(let v=0;v<=n;v++){let g=o+v/n*a;for(let p=0;p<=i;p++){let M=p/i*r;d.x=(t+e*Math.cos(g))*Math.cos(M),d.y=(t+e*Math.cos(g))*Math.sin(M),d.z=e*Math.sin(g),c.push(d.x,d.y,d.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),m.subVectors(d,u).normalize(),h.push(m.x,m.y,m.z),f.push(p/i),f.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=i;g++){let p=(i+1)*v+g-1,M=(i+1)*(v-1)+g-1,T=(i+1)*(v-1)+g,y=(i+1)*v+g;l.push(p,M,y),l.push(M,T,y)}this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var ro=class extends Un{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Qt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function gs(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(sd(i))i.isRenderTargetTexture?(ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(sd(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function mn(s){let t={};for(let e=0;e<s.length;e++){let n=gs(s[e]);for(let i in n)t[i]=n[i]}return t}function sd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Yp(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ah(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}var On={clone:gs,merge:mn},Zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,He=class extends Un{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zp,this.fragmentShader=Jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=Yp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Qt().setHex(i.value);break;case"v2":this.uniforms[n].value=new xt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new B().fromArray(i.value);break;case"v4":this.uniforms[n].value=new we().fromArray(i.value);break;case"m3":this.uniforms[n].value=new de().fromArray(i.value);break;case"m4":this.uniforms[n].value=new oe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},lr=class extends He{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ve=class extends Un{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fr,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},oo=class extends ve{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var ao=class extends Un{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fr,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},lo=class extends Un{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fr,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=al,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Xa=class extends Un{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qa=class extends Un{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Vs(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Jc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Vi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ya=class extends Vi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qc,endingEnd:Qc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case th:r=t,a=2*e-n;break;case eh:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case th:o=t,l=2*n-e;break;case eh:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(n-e)/(i-e),v=m*m,g=v*m,p=-u*g+2*u*v-u*m,M=(1+u)*g+(-1.5-2*u)*v+(-.5+u)*m+1,T=(-1-d)*g+(1.5+d)*v+.5*m,y=d*g-d*v;for(let b=0;b!==a;++b)r[b]=p*o[h+b]+M*o[c+b]+T*o[l+b]+y*o[f+b];return r}},Za=class extends Vi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},Ja=class extends Vi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},$a=class extends Vi{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let m=(n-e)/(i-e),v=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*v+o[l+g]*m;return r}let u=a*2,d=t-1;for(let m=0;m!==a;++m){let v=o[c+m],g=o[l+m],p=d*u+m*2,M=f[p],T=f[p+1],y=t*u+m*2,b=h[y],E=h[y+1],P=jp(n,e,M,b,i);r[m]=Kd(P,v,T,E,g)}return r}};function Kd(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function $p(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function jp(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=Kd(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=$p(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Rn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vs(e,this.TimeBufferType),this.values=Vs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Vs(t.times,Array),values:Vs(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Jc(t.settings)&&(n.settings={inTangents:Vs(t.settings.inTangents,Array),outTangents:Vs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new $a(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ur:e=this.InterpolantFactoryMethodDiscrete;break;case Fa:e=this.InterpolantFactoryMethodLinear;break;case Ea:e=this.InterpolantFactoryMethodSmooth;break;case Kc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ne("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ur;case this.InterpolantFactoryMethodLinear:return Fa;case this.InterpolantFactoryMethodSmooth:return Ea;case this.InterpolantFactoryMethodBezier:return Kc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Jc(this.settings)&&(rd(this.settings.inTangents,t),rd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(re("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(re("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){re("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){re("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Kf(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){re("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ea,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let f=a*n,u=f-n,d=f+n;for(let m=0;m!==n;++m){let v=e[f+m];if(v!==e[u+m]||v!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Jc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function rd(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Rn.prototype.ValueTypeName="";Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=Fa;var Wi=class extends Rn{constructor(t,e,n){super(t,e,n)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Ur;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends Rn{constructor(t,e,n,i){super(t,e,n,i)}};ja.prototype.ValueTypeName="color";var Ka=class extends Rn{constructor(t,e,n,i){super(t,e,n,i)}};Ka.prototype.ValueTypeName="number";var Qa=class extends Vi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Fe.slerpFlat(r,0,o,c-a,o,c,l);return r}},co=class extends Rn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Qa(this.times,this.values,this.getValueSize(),t)}};co.prototype.ValueTypeName="quaternion";co.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends Rn{constructor(t,e,n){super(t,e,n)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Ur;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var tl=class extends Rn{constructor(t,e,n,i){super(t,e,n,i)}};tl.prototype.ValueTypeName="vector";var el=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Qd=new el,nl=class{constructor(t){this.manager=t!==void 0?t:Qd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};nl.DEFAULT_MATERIAL_NAME="__DEFAULT";var fs=class extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},cr=class extends fs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},$c=new oe,od=new B,ad=new B,hr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;od.setFromMatrixPosition(t.matrixWorld),e.position.copy(od),ad.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ad),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){$c.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix($c,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===Zs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply($c)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Sa=new B,ba=new Fe,ei=new B,ho=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Sa,ba,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sa,ba,ei.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Sa,ba,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sa,ba,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Oi=new B,ld=new xt,cd=new xt,Ke=class extends ho{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Hr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Sc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(Sc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z)}getViewSize(t,e){return this.getViewBounds(t,ld,cd),e.subVectors(cd,ld)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Sc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},oh=class extends hr{constructor(){super(new Ke(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Hr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},uo=class extends fs{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new oh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},ah=class extends hr{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0}},ui=class extends fs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ah}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},qi=class extends ho{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},lh=class extends hr{constructor(){super(new qi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ei=class extends fs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new lh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ws=-90,Xs=1,il=class extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ke(Ws,Xs,t,e);i.layers=this.layers,this.add(i);let r=new Ke(Ws,Xs,t,e);r.layers=this.layers,this.add(r);let o=new Ke(Ws,Xs,t,e);o.layers=this.layers,this.add(o);let a=new Ke(Ws,Xs,t,e);a.layers=this.layers,this.add(a);let l=new Ke(Ws,Xs,t,e);l.layers=this.layers,this.add(l);let c=new Ke(Ws,Xs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},sl=class extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},fo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Kp.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Kp(){this._document.hidden===!1&&this.reset()}var Rh="\\[\\]\\.:\\/",Qp=new RegExp("["+Rh+"]","g"),Ch="[^"+Rh+"]",t0="[^"+Rh.replace("\\.","")+"]",e0=/((?:WC+[\/:])*)/.source.replace("WC",Ch),n0=/(WCOD+)?/.source.replace("WCOD",t0),i0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ch),s0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ch),r0=new RegExp("^"+e0+n0+i0+s0+"$"),o0=["material","materials","bones","map"],ch=class{constructor(t,e,n){let i=n||Ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ue=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Qp,"")}static parseTrackName(t){let e=r0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);o0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){re("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){re("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){re("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){re("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){re("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;re("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=ch;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var E_=new Float32Array(1);var hd=new oe,po=class{constructor(t,e,n=0,i=1/0){this.ray=new tr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):re("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return hd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hd),this}intersectObject(t,e=!0,n=[]){return hh(t,this,n,e),n.sort(ud),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)hh(t[i],this,n,e);return n.sort(ud),n}};function ud(s,t){return s.distance-t.distance}function hh(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)hh(r[o],t,e,!0)}}var Nh=class Nh{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Nh.prototype.isMatrix2=!0;var uh=Nh;function Ph(s,t,e,n){let i=a0(n);switch(e){case Sh:return s*t;case pl:return s*t/i.components*i.byteLength;case ml:return s*t/i.components*i.byteLength;case Qi:return s*t*2/i.components*i.byteLength;case gl:return s*t*2/i.components*i.byteLength;case bh:return s*t*3/i.components*i.byteLength;case vn:return s*t*4/i.components*i.byteLength;case xl:return s*t*4/i.components*i.byteLength;case To:case wo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ao:case Ro:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case vl:case Ml:return Math.max(s,16)*Math.max(t,8)/4;case _l:case yl:return Math.max(s,8)*Math.max(t,8)/2;case Sl:case bl:case Tl:case wl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case El:case Co:case Al:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Il:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case zl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case kl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Hl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Gl:case Vl:case Wl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Xl:case ql:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Po:case Yl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function a0(s){switch(s){case pn:case _h:return{byteLength:1,components:1};case dr:case vh:case sn:return{byteLength:2,components:1};case dl:case fl:return{byteLength:2,components:4};case Kn:case ul:case Cn:return{byteLength:4,components:1};case yh:case Mh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Sf(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function d0(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(s.bindBuffer(c,a),f.length===0)s.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){let m=f[u],v=f[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,f[u]=v)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){let v=f[d];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var f0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p0=`#ifdef USE_ALPHAHASH
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
#endif`,m0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v0=`#ifdef USE_AOMAP
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
#endif`,y0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M0=`#ifdef USE_BATCHING
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
#endif`,S0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,b0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,w0=`#ifdef USE_IRIDESCENCE
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
#endif`,A0=`#ifdef USE_BUMPMAP
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
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,F0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,N0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,U0=`#define PI 3.141592653589793
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
} // validated`,B0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,O0=`vec3 transformedNormal = objectNormal;
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
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V0="gl_FragColor = linearToOutputTexel( gl_FragColor );",W0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tm=`#ifdef USE_GRADIENTMAP
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
}`,em=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,rm=`#ifdef USE_ENVMAP
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
#endif`,om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hm=`PhysicalMaterial material;
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
#endif`,um=`uniform sampler2D dfgLUT;
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
}`,dm=`
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
#endif`,fm=`#if defined( RE_IndirectDiffuse )
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
#endif`,pm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ym=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bm=`#if defined( USE_POINTS_UV )
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
#endif`,Em=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Am=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cm=`#ifdef USE_MORPHTARGETS
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
#endif`,Pm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Im=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Um=`#ifdef USE_NORMALMAP
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
#endif`,Bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,km=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Km=`float getShadowMask() {
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
}`,Qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tg=`#ifdef USE_SKINNING
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
#endif`,eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ng=`#ifdef USE_SKINNING
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
#endif`,ig=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,og=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ag=`#ifdef USE_TRANSMISSION
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
#endif`,lg=`#ifdef USE_TRANSMISSION
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
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pg=`uniform sampler2D t2D;
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
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`#include <common>
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
}`,yg=`#if DEPTH_PACKING == 3200
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
}`,Mg=`#define DISTANCE
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
}`,Sg=`#define DISTANCE
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
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Eg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tg=`uniform float scale;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Ag=`#include <common>
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Cg=`#define LAMBERT
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
}`,Pg=`#define LAMBERT
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
}`,Ig=`#define MATCAP
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
}`,Lg=`#define MATCAP
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
}`,Dg=`#define NORMAL
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
}`,Fg=`#define NORMAL
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
}`,Ng=`#define PHONG
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
}`,Ug=`#define PHONG
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
}`,Bg=`#define STANDARD
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
}`,Og=`#define STANDARD
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
}`,zg=`#define TOON
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
}`,kg=`#define TOON
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
}`,Hg=`uniform float size;
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Vg=`#include <common>
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
}`,Wg=`uniform vec3 color;
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
}`,Xg=`uniform float rotation;
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
}`,qg=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:f0,alphahash_pars_fragment:p0,alphamap_fragment:m0,alphamap_pars_fragment:g0,alphatest_fragment:x0,alphatest_pars_fragment:_0,aomap_fragment:v0,aomap_pars_fragment:y0,batching_pars_vertex:M0,batching_vertex:S0,begin_vertex:b0,beginnormal_vertex:E0,bsdfs:T0,iridescence_fragment:w0,bumpmap_pars_fragment:A0,clipping_planes_fragment:R0,clipping_planes_pars_fragment:C0,clipping_planes_pars_vertex:P0,clipping_planes_vertex:I0,color_fragment:L0,color_pars_fragment:D0,color_pars_vertex:F0,color_vertex:N0,common:U0,cube_uv_reflection_fragment:B0,defaultnormal_vertex:O0,displacementmap_pars_vertex:z0,displacementmap_vertex:k0,emissivemap_fragment:H0,emissivemap_pars_fragment:G0,colorspace_fragment:V0,colorspace_pars_fragment:W0,envmap_fragment:X0,envmap_common_pars_fragment:q0,envmap_pars_fragment:Y0,envmap_pars_vertex:Z0,envmap_physical_pars_fragment:rm,envmap_vertex:J0,fog_vertex:$0,fog_pars_vertex:j0,fog_fragment:K0,fog_pars_fragment:Q0,gradientmap_pars_fragment:tm,lightmap_pars_fragment:em,lights_lambert_fragment:nm,lights_lambert_pars_fragment:im,lights_pars_begin:sm,lights_toon_fragment:om,lights_toon_pars_fragment:am,lights_phong_fragment:lm,lights_phong_pars_fragment:cm,lights_physical_fragment:hm,lights_physical_pars_fragment:um,lights_fragment_begin:dm,lights_fragment_maps:fm,lights_fragment_end:pm,lightprobes_pars_fragment:mm,logdepthbuf_fragment:gm,logdepthbuf_pars_fragment:xm,logdepthbuf_pars_vertex:_m,logdepthbuf_vertex:vm,map_fragment:ym,map_pars_fragment:Mm,map_particle_fragment:Sm,map_particle_pars_fragment:bm,metalnessmap_fragment:Em,metalnessmap_pars_fragment:Tm,morphinstance_vertex:wm,morphcolor_vertex:Am,morphnormal_vertex:Rm,morphtarget_pars_vertex:Cm,morphtarget_vertex:Pm,normal_fragment_begin:Im,normal_fragment_maps:Lm,normal_pars_fragment:Dm,normal_pars_vertex:Fm,normal_vertex:Nm,normalmap_pars_fragment:Um,clearcoat_normal_fragment_begin:Bm,clearcoat_normal_fragment_maps:Om,clearcoat_pars_fragment:zm,iridescence_pars_fragment:km,opaque_fragment:Hm,packing:Gm,premultiplied_alpha_fragment:Vm,project_vertex:Wm,dithering_fragment:Xm,dithering_pars_fragment:qm,roughnessmap_fragment:Ym,roughnessmap_pars_fragment:Zm,shadowmap_pars_fragment:Jm,shadowmap_pars_vertex:$m,shadowmap_vertex:jm,shadowmask_pars_fragment:Km,skinbase_vertex:Qm,skinning_pars_vertex:tg,skinning_vertex:eg,skinnormal_vertex:ng,specularmap_fragment:ig,specularmap_pars_fragment:sg,tonemapping_fragment:rg,tonemapping_pars_fragment:og,transmission_fragment:ag,transmission_pars_fragment:lg,uv_pars_fragment:cg,uv_pars_vertex:hg,uv_vertex:ug,worldpos_vertex:dg,background_vert:fg,background_frag:pg,backgroundCube_vert:mg,backgroundCube_frag:gg,cube_vert:xg,cube_frag:_g,depth_vert:vg,depth_frag:yg,distance_vert:Mg,distance_frag:Sg,equirect_vert:bg,equirect_frag:Eg,linedashed_vert:Tg,linedashed_frag:wg,meshbasic_vert:Ag,meshbasic_frag:Rg,meshlambert_vert:Cg,meshlambert_frag:Pg,meshmatcap_vert:Ig,meshmatcap_frag:Lg,meshnormal_vert:Dg,meshnormal_frag:Fg,meshphong_vert:Ng,meshphong_frag:Ug,meshphysical_vert:Bg,meshphysical_frag:Og,meshtoon_vert:zg,meshtoon_frag:kg,points_vert:Hg,points_frag:Gg,shadow_vert:Vg,shadow_frag:Wg,sprite_vert:Xg,sprite_frag:qg},It={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},pi={basic:{uniforms:mn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:mn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:mn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:mn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:mn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Qt(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:mn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:mn([It.points,It.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:mn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:mn([It.common,It.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:mn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:mn([It.sprite,It.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:mn([It.common,It.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:mn([It.lights,It.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};pi.physical={uniforms:mn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};var $l={r:0,b:0,g:0},Yg=new oe,bf=new de;bf.set(-1,0,0,0,1,0,0,0,1);function Zg(s,t,e,n,i,r){let o=new Qt(0),a=i===!0?0:1,l,c,h=null,f=0,u=null;function d(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let y=M.backgroundBlurriness>0;T=t.get(T,y)}return T}function m(M){let T=!1,y=d(M);y===null?g(o,a):y&&y.isColor&&(g(y,1),T=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(M,T){let y=d(T);y&&(y.isCubeTexture||y.mapping===bo)?(c===void 0&&(c=new ye(new Mn(1,1,1),new He({name:"BackgroundCubeMaterial",uniforms:gs(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Yg.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bf),c.material.toneMapped=xe.getTransfer(y.colorSpace)!==be,(h!==y||f!==y.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ye(new Ze(2,2),new He({name:"BackgroundMaterial",uniforms:gs(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=xe.getTransfer(y.colorSpace)!==be,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,T){M.getRGB($l,Ah(s)),e.buffers.color.setClear($l.r,$l.g,$l.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,T=1){o.set(M),a=T,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,g(o,a)},render:m,addToRenderList:v,dispose:p}}function Jg(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(I,F,U,N,O){let X=!1,W=f(I,N,U,F);r!==W&&(r=W,c(r.object)),X=d(I,N,U,O),X&&m(I,N,U,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(I,F,U,N),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function f(I,F,U,N){let O=N.wireframe===!0,X=n[F.id];X===void 0&&(X={},n[F.id]=X);let W=I.isInstancedMesh===!0?I.id:0,rt=X[W];rt===void 0&&(rt={},X[W]=rt);let q=rt[U.id];q===void 0&&(q={},rt[U.id]=q);let j=q[O];return j===void 0&&(j=u(l()),q[O]=j),j}function u(I){let F=[],U=[],N=[];for(let O=0;O<e;O++)F[O]=0,U[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:U,attributeDivisors:N,object:I,attributes:{},index:null}}function d(I,F,U,N){let O=r.attributes,X=F.attributes,W=0,rt=U.getAttributes();for(let q in rt)if(rt[q].location>=0){let tt=O[q],st=X[q];if(st===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(st=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(st=I.instanceColor)),tt===void 0||tt.attribute!==st||st&&tt.data!==st.data)return!0;W++}return r.attributesNum!==W||r.index!==N}function m(I,F,U,N){let O={},X=F.attributes,W=0,rt=U.getAttributes();for(let q in rt)if(rt[q].location>=0){let tt=X[q];tt===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(tt=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(tt=I.instanceColor));let st={};st.attribute=tt,tt&&tt.data&&(st.data=tt.data),O[q]=st,W++}r.attributes=O,r.attributesNum=W,r.index=N}function v(){let I=r.newAttributes;for(let F=0,U=I.length;F<U;F++)I[F]=0}function g(I){p(I,0)}function p(I,F){let U=r.newAttributes,N=r.enabledAttributes,O=r.attributeDivisors;U[I]=1,N[I]===0&&(s.enableVertexAttribArray(I),N[I]=1),O[I]!==F&&(s.vertexAttribDivisor(I,F),O[I]=F)}function M(){let I=r.newAttributes,F=r.enabledAttributes;for(let U=0,N=F.length;U<N;U++)F[U]!==I[U]&&(s.disableVertexAttribArray(U),F[U]=0)}function T(I,F,U,N,O,X,W){W===!0?s.vertexAttribIPointer(I,F,U,O,X):s.vertexAttribPointer(I,F,U,N,O,X)}function y(I,F,U,N){v();let O=N.attributes,X=U.getAttributes(),W=F.defaultAttributeValues;for(let rt in X){let q=X[rt];if(q.location>=0){let j=O[rt];if(j===void 0&&(rt==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),rt==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){let tt=j.normalized,st=j.itemSize,pt=t.get(j);if(pt===void 0)continue;let bt=pt.buffer,ft=pt.type,dt=pt.bytesPerElement,x=ft===s.INT||ft===s.UNSIGNED_INT||j.gpuType===ul;if(j.isInterleavedBufferAttribute){let A=j.data,L=A.stride,k=j.offset;if(A.isInstancedInterleavedBuffer){for(let Y=0;Y<q.locationSize;Y++)p(q.location+Y,A.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let Y=0;Y<q.locationSize;Y++)g(q.location+Y);s.bindBuffer(s.ARRAY_BUFFER,bt);for(let Y=0;Y<q.locationSize;Y++)T(q.location+Y,st/q.locationSize,ft,tt,L*dt,(k+st/q.locationSize*Y)*dt,x)}else{if(j.isInstancedBufferAttribute){for(let A=0;A<q.locationSize;A++)p(q.location+A,j.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let A=0;A<q.locationSize;A++)g(q.location+A);s.bindBuffer(s.ARRAY_BUFFER,bt);for(let A=0;A<q.locationSize;A++)T(q.location+A,st/q.locationSize,ft,tt,st*dt,st/q.locationSize*A*dt,x)}}else if(W!==void 0){let tt=W[rt];if(tt!==void 0)switch(tt.length){case 2:s.vertexAttrib2fv(q.location,tt);break;case 3:s.vertexAttrib3fv(q.location,tt);break;case 4:s.vertexAttrib4fv(q.location,tt);break;default:s.vertexAttrib1fv(q.location,tt)}}}}M()}function b(){S();for(let I in n){let F=n[I];for(let U in F){let N=F[U];for(let O in N){let X=N[O];for(let W in X)h(X[W].object),delete X[W];delete N[O]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;let F=n[I.id];for(let U in F){let N=F[U];for(let O in N){let X=N[O];for(let W in X)h(X[W].object),delete X[W];delete N[O]}}delete n[I.id]}function P(I){for(let F in n){let U=n[F];for(let N in U){let O=U[N];if(O[I.id]===void 0)continue;let X=O[I.id];for(let W in X)h(X[W].object),delete X[W];delete O[I.id]}}}function _(I){for(let F in n){let U=n[F],N=I.isInstancedMesh===!0?I.id:0,O=U[N];if(O!==void 0){for(let X in O){let W=O[X];for(let rt in W)h(W[rt].object),delete W[rt];delete O[X]}delete U[N],Object.keys(U).length===0&&delete n[F]}}}function S(){R(),o=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:S,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:g,disableUnusedAttributes:M}}function $g(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function jg(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(P){return!(P!==vn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let _=P===sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==pn&&P!==Cn&&!_&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(ne("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:y,maxSamples:b,samples:E}}function Kg(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Tn,a=new de,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let m=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,p=s.get(f);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,T=M*4,y=p.clippingState||null;l.value=y,y=h(m,u,T,d);for(let b=0;b!==T;++b)y[b]=e[b];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,m){let v=f!==null?f.length:0,g=null;if(v!==0){if(g=l.value,m!==!0||g===null){let p=d+v*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,y=d;T!==v;++T,y+=4)o.copy(f[T]).applyMatrix4(M,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}var mr=4,Qg=6,tx=20,ex=256,Io=new qi,tf=new Qt,Uh=null,Bh=0,Oh=0,zh=!1,nx=new B,xs=new B,_s=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=nx}=r;Uh=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Uh,Bh,Oh),this._renderer.xr.enabled=zh,t.scissorTest=!1,pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$i||t.mapping===ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uh=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:sn,format:vn,colorSpace:Br,depthBuffer:!1},i=ef(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ef(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ix(r)),this._blurMaterial=rx(r,t,e),this._ggxMaterial=sx(r,t,e)}return i}_compileMaterial(t){let e=new ye(new Pe,t);this._renderer.compile(e,Io)}_sceneToCubeUV(t,e,n,i,r){let l=new Ke(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(tf),f.toneMapping=jn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ye(new Mn,new Ye({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,p=!1,M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,p=!0):(g.color.copy(tf),p=!0);for(let T=0;T<6;T++){let y=T%3;y===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):y===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));let b=this._cubeSize;pr(i,y*b,T>2?b:0,b,b),f.setRenderTarget(i),p&&f.render(v,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===$i||t.mapping===ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nf());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;pr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Io)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:m}=this,v=this._sizeLods[n],g=3*v*(n>m-mr?n-m+mr:0),p=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,pr(r,g,p,3*v,2*v),i.setRenderTarget(r),i.render(a,Io),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,pr(t,g,p,3*v,2*v),i.setRenderTarget(t),i.render(a,Io)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,i,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],f=3*h*(i>this._lodMax-mr?i-this._lodMax+mr:0),u=4*(this._cubeSize-h);pr(e,f,u,3*h,2*h),o.setRenderTarget(e),o.render(l,Io)}};function ix(s){let t=[],e=[],n=s,i=s-mr+1+Qg;for(let r=0;r<i;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,m=new Float32Array(d*u*f),v=new Float32Array(d*u*f);for(let p=0;p<f;p++){let M=p%3*2/3-1,T=p>2?0:-1,y=[M,T,0,M+2/3,T,0,M+2/3,T+1,0,M,T,0,M+2/3,T+1,0,M,T+1,0];m.set(y,d*u*p);for(let b=0;b<u;b++){let E=h[b*2]*2-1,P=h[b*2+1]*2-1;p===0?xs.set(1,P,E):p===1?xs.set(-E,1,-P):p===2?xs.set(-E,P,1):p===3?xs.set(-1,P,-E):p===4?xs.set(-E,-1,P):xs.set(E,P,-1),xs.toArray(v,(p*u+b)*d)}}let g=new Pe;g.setAttribute("position",new dn(m,d)),g.setAttribute("outputDirection",new dn(v,d)),e.push(new ye(g,null)),n>mr&&n--}return{lodMeshes:e,sizeLods:t}}function ef(s,t,e){let n=new qe(s,t,e);return n.texture.mapping=bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function sx(s,t,e){return new He({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ex,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:Je,depthTest:!1,depthWrite:!1})}function rx(s,t,e){return new He({name:"SphericalGaussianBlur",defines:{SAMPLES:tx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:Je,depthTest:!1,depthWrite:!1})}function nf(){return new He({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:Je,depthTest:!1,depthWrite:!1})}function sf(){return new He({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ql(),fragmentShader:`

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
	`}var Kl=class extends qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Yr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Mn(5,5,5),r=new He({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Je});r.uniforms.tEquirect.value=e;let o=new ye(i,r),a=e.minFilter;return e.minFilter===ji&&(e.minFilter=an),new il(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}};function ox(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===ll||d===cl)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let v=new Kl(m.height);return v.fromEquirectangularTexture(s,u),t.set(u,v),u.addEventListener("dispose",c),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let d=u.mapping,m=d===ll||d===cl,v=d===$i||d===ms;if(m||v){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new _s(s)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let M=u.image;return m&&M&&M.height>0||v&&M&&l(M)?(n===null&&(n=new _s(s)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,d){return d===ll?u.mapping=$i:d===cl&&(u.mapping=ms),u}function l(u){let d=0,m=6;for(let v=0;v<m;v++)u[v]!==void 0&&d++;return d===m}function c(u){let d=u.target;d.removeEventListener("dispose",c);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function ax(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&as("WebGLRenderer: "+n+" extension not supported."),i}}}function lx(s,t,e,n){let i={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete i[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)t.update(u[d],s.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,m=f.attributes.position,v=0;if(m===void 0)return;if(d!==null){let M=d.array;v=d.version;for(let T=0,y=M.length;T<y;T+=3){let b=M[T+0],E=M[T+1],P=M[T+2];u.push(b,E,E,P,P,b)}}else{let M=m.array;v=m.version;for(let T=0,y=M.length/3-1;T<y;T+=3){let b=T+0,E=T+1,P=T+2;u.push(b,E,E,P,P,b)}}let g=new(m.count>=65535?Vr:ls)(u,1);g.version=v;let p=r.get(f);p&&t.remove(p),r.set(f,g)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function cx(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){s.drawElements(n,u,r,f*o),e.update(u,n,1)}function c(f,u,d){d!==0&&(s.drawElementsInstanced(n,u,r,f*o,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let v=0;for(let g=0;g<d;g++)v+=u[g];e.update(v,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function hx(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:re("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ux(s,t,e){let n=new WeakMap,i=new we;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let S=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],T=0;d===!0&&(T=1),m===!0&&(T=2),v===!0&&(T=3);let y=a.attributes.position.count*T,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*b*4*f),P=new Gr(E,y,b,f);P.type=Cn,P.needsUpdate=!0;let _=T*4;for(let R=0;R<f;R++){let I=g[R],F=p[R],U=M[R],N=y*b*4*R;for(let O=0;O<I.count;O++){let X=O*_;d===!0&&(i.fromBufferAttribute(I,O),E[N+X+0]=i.x,E[N+X+1]=i.y,E[N+X+2]=i.z,E[N+X+3]=0),m===!0&&(i.fromBufferAttribute(F,O),E[N+X+4]=i.x,E[N+X+5]=i.y,E[N+X+6]=i.z,E[N+X+7]=0),v===!0&&(i.fromBufferAttribute(U,O),E[N+X+8]=i.x,E[N+X+9]=i.y,E[N+X+10]=i.z,E[N+X+11]=U.itemSize===4?i.w:1)}}u={count:f,texture:P,size:new xt(y,b)},n.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function dx(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var fx={[xo]:"LINEAR_TONE_MAPPING",[_o]:"REINHARD_TONE_MAPPING",[vo]:"CINEON_TONE_MAPPING",[Ji]:"ACES_FILMIC_TONE_MAPPING",[Mo]:"AGX_TONE_MAPPING",[So]:"NEUTRAL_TONE_MAPPING",[yo]:"CUSTOM_TONE_MAPPING"};function px(s,t,e,n,i,r){let o=new qe(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Pe;c.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new le([0,2,0,0,2,0],2));let h=new lr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ye(c,h),u=new qi(-1,1,1,-1,0,1),d=null,m=null,v=!1,g,p=null,M=[],T=!1;this.setSize=function(y,b){o.setSize(y,b),a!==null&&a.setSize(y,b),l!==null&&l.setSize(y,b);for(let E=0;E<M.length;E++){let P=M[E];P.setSize&&P.setSize(y,b)}},this.setEffects=function(y){M=y,T=M.length>0&&M[0].isRenderPass===!0;let b=o.width,E=o.height;M.length>0&&a===null&&(a=new qe(b,E,{type:sn,depthBuffer:!1,stencilBuffer:!1}),l=new qe(b,E,{type:sn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<M.length;P++){let _=M[P];_.setSize&&_.setSize(b,E)}},this.begin=function(y,b){if(v||y.toneMapping===jn&&M.length===0)return!1;if(p=b,b!==null){let E=b.width,P=b.height;(o.width!==E||o.height!==P)&&this.setSize(E,P)}return T===!1&&y.setRenderTarget(o),g=y.toneMapping,y.toneMapping=jn,!0},this.hasRenderPass=function(){return T},this.end=function(y,b){y.toneMapping=g,v=!0;let E=o,P=a;for(let _=0;_<M.length;_++){let S=M[_];S.enabled!==!1&&(S.render(y,P,E,b),S.needsSwap!==!1&&(E=P,P=P===a?l:a))}if(d!==y.outputColorSpace||m!==y.toneMapping){d=y.outputColorSpace,m=y.toneMapping,h.defines={},xe.getTransfer(d)===be&&(h.defines.SRGB_TRANSFER="");let _=fx[m];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(p),y.render(f,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Ef=new _n,Gh=new ci(1,1),Tf=new Gr,wf=new Ba,Af=new Yr,rf=[],of=[],af=new Float32Array(16),lf=new Float32Array(9),cf=new Float32Array(4);function xr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=rf[i];if(r===void 0&&(r=new Float32Array(i),rf[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Qe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function tn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function tc(s,t){let e=of[t];e===void 0&&(e=new Int32Array(t),of[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function mx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function gx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;s.uniform2fv(this.addr,t),tn(e,t)}}function xx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;s.uniform3fv(this.addr,t),tn(e,t)}}function _x(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;s.uniform4fv(this.addr,t),tn(e,t)}}function vx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;cf.set(n),s.uniformMatrix2fv(this.addr,!1,cf),tn(e,n)}}function yx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;lf.set(n),s.uniformMatrix3fv(this.addr,!1,lf),tn(e,n)}}function Mx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;af.set(n),s.uniformMatrix4fv(this.addr,!1,af),tn(e,n)}}function Sx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function bx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;s.uniform2iv(this.addr,t),tn(e,t)}}function Ex(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;s.uniform3iv(this.addr,t),tn(e,t)}}function Tx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;s.uniform4iv(this.addr,t),tn(e,t)}}function wx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Ax(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;s.uniform2uiv(this.addr,t),tn(e,t)}}function Rx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;s.uniform3uiv(this.addr,t),tn(e,t)}}function Cx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;s.uniform4uiv(this.addr,t),tn(e,t)}}function Px(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Gh.compareFunction=e.isReversedDepthBuffer()?Jl:Zl,r=Gh):r=Ef,e.setTexture2D(t||r,i)}function Ix(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||wf,i)}function Lx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Af,i)}function Dx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Tf,i)}function Fx(s){switch(s){case 5126:return mx;case 35664:return gx;case 35665:return xx;case 35666:return _x;case 35674:return vx;case 35675:return yx;case 35676:return Mx;case 5124:case 35670:return Sx;case 35667:case 35671:return bx;case 35668:case 35672:return Ex;case 35669:case 35673:return Tx;case 5125:return wx;case 36294:return Ax;case 36295:return Rx;case 36296:return Cx;case 35678:case 36198:case 36298:case 36306:case 35682:return Px;case 35679:case 36299:case 36307:return Ix;case 35680:case 36300:case 36308:case 36293:return Lx;case 36289:case 36303:case 36311:case 36292:return Dx}}function Nx(s,t){s.uniform1fv(this.addr,t)}function Ux(s,t){let e=xr(t,this.size,2);s.uniform2fv(this.addr,e)}function Bx(s,t){let e=xr(t,this.size,3);s.uniform3fv(this.addr,e)}function Ox(s,t){let e=xr(t,this.size,4);s.uniform4fv(this.addr,e)}function zx(s,t){let e=xr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function kx(s,t){let e=xr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Hx(s,t){let e=xr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Gx(s,t){s.uniform1iv(this.addr,t)}function Vx(s,t){s.uniform2iv(this.addr,t)}function Wx(s,t){s.uniform3iv(this.addr,t)}function Xx(s,t){s.uniform4iv(this.addr,t)}function qx(s,t){s.uniform1uiv(this.addr,t)}function Yx(s,t){s.uniform2uiv(this.addr,t)}function Zx(s,t){s.uniform3uiv(this.addr,t)}function Jx(s,t){s.uniform4uiv(this.addr,t)}function $x(s,t,e){let n=this.cache,i=t.length,r=tc(e,i);Qe(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Gh:o=Ef;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function jx(s,t,e){let n=this.cache,i=t.length,r=tc(e,i);Qe(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||wf,r[o])}function Kx(s,t,e){let n=this.cache,i=t.length,r=tc(e,i);Qe(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Af,r[o])}function Qx(s,t,e){let n=this.cache,i=t.length,r=tc(e,i);Qe(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Tf,r[o])}function t1(s){switch(s){case 5126:return Nx;case 35664:return Ux;case 35665:return Bx;case 35666:return Ox;case 35674:return zx;case 35675:return kx;case 35676:return Hx;case 5124:case 35670:return Gx;case 35667:case 35671:return Vx;case 35668:case 35672:return Wx;case 35669:case 35673:return Xx;case 5125:return qx;case 36294:return Yx;case 36295:return Zx;case 36296:return Jx;case 35678:case 36198:case 36298:case 36306:case 35682:return $x;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return Qx}}var Vh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Fx(e.type)}},Wh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=t1(e.type)}},Xh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},kh=/(\w+)(\])?(\[|\.)?/g;function hf(s,t){s.seq.push(t),s.map[t.id]=t}function e1(s,t,e){let n=s.name,i=n.length;for(kh.lastIndex=0;;){let r=kh.exec(n),o=kh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){hf(e,c===void 0?new Vh(a,s,t):new Wh(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new Xh(a),hf(e,f)),e=f}}}var gr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);e1(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function uf(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var n1=37297,i1=0;function s1(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var df=new de;function r1(s){xe._getMatrix(df,xe.workingColorSpace,s);let t=`mat3( ${df.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(s)){case Or:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return ne("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function ff(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+s1(s.getShaderSource(t),a)}else return r}function o1(s,t){let e=r1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var a1={[xo]:"Linear",[_o]:"Reinhard",[vo]:"Cineon",[Ji]:"ACESFilmic",[Mo]:"AgX",[So]:"Neutral",[yo]:"Custom"};function l1(s,t){let e=a1[t];return e===void 0?(ne("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var jl=new B;function c1(){xe.getLuminanceCoefficients(jl);let s=jl.x.toFixed(4),t=jl.y.toFixed(4),e=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function u1(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function d1(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Do(s){return s!==""}function pf(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var f1=/^[ \t]*#include +<([\w\d./]+)>/gm;function qh(s){return s.replace(f1,m1)}var p1=new Map;function m1(s,t){let e=me[t];if(e===void 0){let n=p1.get(t);if(n!==void 0)e=me[n],ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return qh(e)}var g1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gf(s){return s.replace(g1,x1)}function x1(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function xf(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var _1={[Yi]:"SHADOWMAP_TYPE_PCF",[ur]:"SHADOWMAP_TYPE_VSM"};function v1(s){return _1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var y1={[$i]:"ENVMAP_TYPE_CUBE",[ms]:"ENVMAP_TYPE_CUBE",[bo]:"ENVMAP_TYPE_CUBE_UV"};function M1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":y1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var S1={[ms]:"ENVMAP_MODE_REFRACTION"};function b1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":S1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var E1={[al]:"ENVMAP_BLENDING_MULTIPLY",[Cd]:"ENVMAP_BLENDING_MIX",[Pd]:"ENVMAP_BLENDING_ADD"};function T1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":E1[s.combine]||"ENVMAP_BLENDING_NONE"}function w1(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function A1(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=v1(e),c=M1(e),h=b1(e),f=T1(e),u=w1(e),d=h1(e),m=u1(r),v=i.createProgram(),g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Do).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Do).join(`
`),p.length>0&&(p+=`
`)):(g=[xf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),p=[xf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==jn?"#define TONE_MAPPING":"",e.toneMapping!==jn?me.tonemapping_pars_fragment:"",e.toneMapping!==jn?l1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,o1("linearToOutputTexel",e.outputColorSpace),c1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Do).join(`
`)),o=qh(o),o=pf(o,e),o=mf(o,e),a=qh(a),a=pf(a,e),a=mf(a,e),o=gf(o),a=gf(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Th?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=M+g+o,y=M+p+a,b=uf(i,i.VERTEX_SHADER,T),E=uf(i,i.FRAGMENT_SHADER,y);i.attachShader(v,b),i.attachShader(v,E),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function P(I){if(s.debug.checkShaderErrors){let F=i.getProgramInfoLog(v)||"",U=i.getShaderInfoLog(b)||"",N=i.getShaderInfoLog(E)||"",O=F.trim(),X=U.trim(),W=N.trim(),rt=!0,q=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(rt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,b,E);else{let j=ff(i,b,"vertex"),tt=ff(i,E,"fragment");re("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+j+`
`+tt)}else O!==""?ne("WebGLProgram: Program Info Log:",O):(X===""||W==="")&&(q=!1);q&&(I.diagnostics={runnable:rt,programLog:O,vertexShader:{log:X,prefix:g},fragmentShader:{log:W,prefix:p}})}i.deleteShader(b),i.deleteShader(E),_=new gr(i,v),S=d1(i,v)}let _;this.getUniforms=function(){return _===void 0&&P(this),_};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(v,n1)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=i1++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=E,this}var R1=0,Yh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Zh(t),e.set(t,n)),n}},Zh=class{constructor(t){this.id=R1++,this.code=t,this.usedTimes=0}};function C1(s){return s===Qi||s===Co||s===Po}function P1(s,t,e,n,i,r){let o=new js,a=new Yh,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,S,R,I,F,U){let N=I.fog,O=F.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,rt=t.get(_.envMap||X,W),q=rt&&rt.mapping===bo?rt.image.height:null,j=d[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&ne("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let tt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,st=tt!==void 0?tt.length:0,pt=0;O.morphAttributes.position!==void 0&&(pt=1),O.morphAttributes.normal!==void 0&&(pt=2),O.morphAttributes.color!==void 0&&(pt=3);let bt,ft,dt,x;if(j){let Le=pi[j];bt=Le.vertexShader,ft=Le.fragmentShader}else{bt=_.vertexShader,ft=_.fragmentShader;let Le=a.getVertexShaderStage(_),Ee=a.getFragmentShaderStage(_);a.update(_,Le,Ee),dt=Le.id,x=Ee.id}let A=s.getRenderTarget(),L=s.state.buffers.depth.getReversed(),k=F.isInstancedMesh===!0,Y=F.isBatchedMesh===!0,gt=!!_.map,Ht=!!_.matcap,K=!!rt,at=!!_.aoMap,mt=!!_.lightMap,lt=!!_.bumpMap&&_.wireframe===!1,yt=!!_.normalMap,Yt=!!_.displacementMap,zt=!!_.emissiveMap,$t=!!_.metalnessMap,ee=!!_.roughnessMap,z=_.anisotropy>0,Me=_.clearcoat>0,fe=_.dispersion>0,D=_.retroreflectivity>0,w=_.iridescence>0,V=_.sheen>0,Z=_.transmission>0,it=z&&!!_.anisotropyMap,St=Me&&!!_.clearcoatMap,Et=Me&&!!_.clearcoatNormalMap,ot=Me&&!!_.clearcoatRoughnessMap,ht=w&&!!_.iridescenceMap,Rt=w&&!!_.iridescenceThicknessMap,Zt=V&&!!_.sheenColorMap,wt=V&&!!_.sheenRoughnessMap,Tt=!!_.specularMap,kt=!!_.specularColorMap,jt=!!_.specularIntensityMap,ae=Z&&!!_.transmissionMap,G=Z&&!!_.thicknessMap,Ct=!!_.gradientMap,ct=!!_.alphaMap,Pt=_.alphaTest>0,Nt=!!_.alphaHash,_t=!!_.extensions,Kt=jn;_.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Kt=s.toneMapping);let qt={shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:bt,fragmentShader:ft,defines:_.defines,customVertexShaderID:dt,customFragmentShaderID:x,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Y,batchingColor:Y&&F._colorsTexture!==null,instancing:k,instancingColor:k&&F.instanceColor!==null,instancingMorph:k&&F.morphTexture!==null,outputColorSpace:A===null?s.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:xe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:gt,matcap:Ht,envMap:K,envMapMode:K&&rt.mapping,envMapCubeUVHeight:q,aoMap:at,lightMap:mt,bumpMap:lt,normalMap:yt,displacementMap:Yt,emissiveMap:zt,normalMapObjectSpace:yt&&_.normalMapType===Fd,normalMapTangentSpace:yt&&_.normalMapType===fr,packedNormalMap:yt&&_.normalMapType===fr&&C1(_.normalMap.format),metalnessMap:$t,roughnessMap:ee,anisotropy:z,anisotropyMap:it,clearcoat:Me,clearcoatMap:St,clearcoatNormalMap:Et,clearcoatRoughnessMap:ot,dispersion:fe,retroreflection:D,iridescence:w,iridescenceMap:ht,iridescenceThicknessMap:Rt,sheen:V,sheenColorMap:Zt,sheenRoughnessMap:wt,specularMap:Tt,specularColorMap:kt,specularIntensityMap:jt,transmission:Z,transmissionMap:ae,thicknessMap:G,gradientMap:Ct,opaque:_.transparent===!1&&_.blending===Ti&&_.alphaToCoverage===!1,alphaMap:ct,alphaTest:Pt,alphaHash:Nt,combine:_.combine,mapUv:gt&&m(_.map.channel),aoMapUv:at&&m(_.aoMap.channel),lightMapUv:mt&&m(_.lightMap.channel),bumpMapUv:lt&&m(_.bumpMap.channel),normalMapUv:yt&&m(_.normalMap.channel),displacementMapUv:Yt&&m(_.displacementMap.channel),emissiveMapUv:zt&&m(_.emissiveMap.channel),metalnessMapUv:$t&&m(_.metalnessMap.channel),roughnessMapUv:ee&&m(_.roughnessMap.channel),anisotropyMapUv:it&&m(_.anisotropyMap.channel),clearcoatMapUv:St&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:Et&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:wt&&m(_.sheenRoughnessMap.channel),specularMapUv:Tt&&m(_.specularMap.channel),specularColorMapUv:kt&&m(_.specularColorMap.channel),specularIntensityMapUv:jt&&m(_.specularIntensityMap.channel),transmissionMapUv:ae&&m(_.transmissionMap.channel),thicknessMapUv:G&&m(_.thicknessMap.channel),alphaMapUv:ct&&m(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(yt||z),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(gt||ct),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&yt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:L,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:pt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Kt,decodeVideoTexture:gt&&_.map.isVideoTexture===!0&&xe.getTransfer(_.map.colorSpace)===be,decodeVideoTextureEmissive:zt&&_.emissiveMap.isVideoTexture===!0&&xe.getTransfer(_.emissiveMap.colorSpace)===be,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Sn,flipSided:_.side===ln,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:_t&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&_.extensions.multiDraw===!0||Y)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return qt.vertexUv1s=l.has(1),qt.vertexUv2s=l.has(2),qt.vertexUv3s=l.has(3),l.clear(),qt}function g(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)S.push(R),S.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(p(S,_),M(S,_),S.push(s.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function p(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function M(_,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function T(_){let S=d[_.type],R;if(S){let I=pi[S];R=On.clone(I.uniforms)}else R=_.uniforms;return R}function y(_,S){let R=h.get(S);return R!==void 0?++R.usedTimes:(R=new A1(s,S,_,i),c.push(R),h.set(S,R)),R}function b(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){a.remove(_)}function P(){a.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:T,acquireProgram:y,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:P}}function I1(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function L1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function _f(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function vf(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,m,v,g,p){let M=s[t];return M===void 0?(M={id:u.id,object:u,geometry:d,material:m,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:g,group:p},s[t]=M):(M.id=u.id,M.object=u,M.geometry=d,M.material=m,M.materialVariant=o(u),M.groupOrder=v,M.renderOrder=u.renderOrder,M.z=g,M.group=p),t++,M}function l(u,d,m,v,g,p,M){M.reversedDepth===!0&&(g=-g);let T=a(u,d,m,v,g,p);m.transmission>0?n.push(T):m.transparent===!0?i.push(T):e.push(T)}function c(u,d,m,v,g,p){let M=a(u,d,m,v,g,p);m.transmission>0?n.unshift(M):m.transparent===!0?i.unshift(M):e.unshift(M)}function h(u,d){e.length>1&&e.sort(u||L1),n.length>1&&n.sort(d||_f),i.length>1&&i.sort(d||_f)}function f(){for(let u=t,d=s.length;u<d;u++){let m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:f,sort:h}}function D1(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new vf,s.set(n,[o])):i>=r.length?(o=new vf,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function F1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new Qt};break;case"SpotLight":e={position:new B,direction:new B,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new B,halfWidth:new B,halfHeight:new B};break}return s[t.id]=e,e}}}function N1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var U1=0;function B1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function O1(s){let t=new F1,e=N1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let i=new B,r=new oe,o=new oe;function a(c){let h=0,f=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,m=0,v=0,g=0,p=0,M=0,T=0,y=0,b=0,E=0,P=0,_=0,S=0,R=0;c.sort(B1);for(let F=0,U=c.length;F<U;F++){let N=c[F],O=N.color,X=N.intensity,W=N.distance,rt=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Qi?rt=N.shadow.map.texture:rt=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=O.r*X,f+=O.g*X,u+=O.b*X;else if(N.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(N.sh.coefficients[q],X);R++}else if(N.isSunLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let j=N.shadow,tt=e.get(N);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[m]=tt,n.sunShadowMap[m]=rt;let st=j.getViewportCount();for(let pt=0;pt<st;pt++)n.sunShadowMatrix[v+pt]=j.getMatrix(pt),n.sunShadowCascade[v+pt]=j._cascadeData[pt];v+=st,m++}n.sun[d]=q,d++}else if(N.isDirectionalLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let j=N.shadow,tt=e.get(N);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,n.directionalShadow[g]=tt,n.directionalShadowMap[g]=rt,n.directionalShadowMatrix[g]=N.shadow.matrix,b++}n.directional[g]=q,g++}else if(N.isSpotLight){let q=t.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(O).multiplyScalar(X),q.distance=W,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,n.spot[M]=q;let j=N.shadow;if(N.map&&(n.spotLightMap[_]=N.map,_++,j.updateMatrices(N),N.castShadow&&S++),n.spotLightMatrix[M]=j.matrix,N.castShadow){let tt=e.get(N);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,n.spotShadow[M]=tt,n.spotShadowMap[M]=rt,P++}M++}else if(N.isRectAreaLight){let q=t.get(N);q.color.copy(O).multiplyScalar(X),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),n.rectArea[T]=q,T++}else if(N.isPointLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){let j=N.shadow,tt=e.get(N);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,tt.shadowCameraNear=j.camera.near,tt.shadowCameraFar=j.camera.far,n.pointShadow[p]=tt,n.pointShadowMap[p]=rt,n.pointShadowMatrix[p]=N.shadow.matrix,E++}n.point[p]=q,p++}else if(N.isHemisphereLight){let q=t.get(N);q.skyColor.copy(N.color).multiplyScalar(X),q.groundColor.copy(N.groundColor).multiplyScalar(X),n.hemi[y]=q,y++}}T>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=It.LTC_FLOAT_1,n.rectAreaLTC2=It.LTC_FLOAT_2):(n.rectAreaLTC1=It.LTC_HALF_1,n.rectAreaLTC2=It.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let I=n.hash;(I.sunLength!==d||I.directionalLength!==g||I.pointLength!==p||I.spotLength!==M||I.rectAreaLength!==T||I.hemiLength!==y||I.numSunShadows!==m||I.numDirectionalShadows!==b||I.numPointShadows!==E||I.numSpotShadows!==P||I.numSpotMaps!==_||I.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=g,n.spot.length=M,n.rectArea.length=T,n.point.length=p,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+_-S,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=R,I.sunLength=d,I.directionalLength=g,I.pointLength=p,I.spotLength=M,I.rectAreaLength=T,I.hemiLength=y,I.numSunShadows=m,I.numDirectionalShadows=b,I.numPointShadows=E,I.numSpotShadows=P,I.numSpotMaps=_,I.numLightProbes=R,n.version=U1++)}function l(c,h){let f=0,u=0,d=0,m=0,v=0,g=0,p=h.matrixWorldInverse;for(let M=0,T=c.length;M<T;M++){let y=c[M];if(y.isSunLight){let b=n.sun[f];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),f++}else if(y.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),u++}else if(y.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),m++}else if(y.isRectAreaLight){let b=n.rectArea[v];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function yf(s){let t=new O1(s),e=[],n=[],i=[];function r(u){f.camera=u,e.length=0,n.length=0,i.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function z1(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new yf(s),t.set(i,[a])):r>=o.length?(a=new yf(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var k1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H1=`uniform sampler2D shadow_pass;
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
}`,G1=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],V1=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Mf=new oe,Lo=new B,Hh=new B;function W1(s,t,e){let n=new nr,i=new xt,r=new xt,o=new we,a=new Xa,l=new qa,c={},h=e.maxTextureSize,f={[$n]:ln,[ln]:$n,[Sn]:Sn},u=new He({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:k1,fragmentShader:H1}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new Pe;m.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ye(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yi;let p=this.type;this.render=function(E,P,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===pd&&(ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Yi);let S=s.getRenderTarget(),R=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Je),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let U=p!==this.type;U&&P.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(O=>O.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,O=E.length;N<O;N++){let X=E[N],W=X.shadow;if(W===void 0){ne("WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);let rt=W.getFrameExtents();i.multiply(rt),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/rt.x),i.x=r.x*rt.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/rt.y),i.y=r.y*rt.y,W.mapSize.y=r.y));let q=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||U===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===ur){if(X.isPointLight){ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new qe(i.x,i.y,{format:Qi,type:sn,minFilter:an,magFilter:an,generateMipmaps:!1}),W.map.texture.name=X.name+".shadowMap",W.map.depthTexture=new ci(i.x,i.y,Cn),W.map.depthTexture.name=X.name+".shadowMapDepth",W.map.depthTexture.format=ri,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Xe,W.map.depthTexture.magFilter=Xe}else X.isPointLight?(W.map=new Kl(i.x),W.map.depthTexture=new Oa(i.x,Kn)):(W.map=new qe(i.x,i.y),W.map.depthTexture=new ci(i.x,i.y,Kn)),W.map.depthTexture.name=X.name+".shadowMap",W.map.depthTexture.format=ri,this.type===Yi?(W.map.depthTexture.compareFunction=q?Jl:Zl,W.map.depthTexture.minFilter=an,W.map.depthTexture.magFilter=an):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Xe,W.map.depthTexture.magFilter=Xe);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==i.x||W.map.height!==i.y)&&W.map.setSize(i.x,i.y);let j=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();X.isPointLight!==!0&&W.updateMatrices(X,_);for(let tt=0;tt<j;tt++){let st=W.getCamera(tt);if(X.isPointLight){let pt=W.camera,bt=W.matrix,ft=X.distance||pt.far;ft!==pt.far&&(pt.far=ft,pt.updateProjectionMatrix()),Lo.setFromMatrixPosition(X.matrixWorld),pt.position.copy(Lo),Hh.copy(pt.position),Hh.add(G1[tt]),pt.up.copy(V1[tt]),pt.lookAt(Hh),pt.updateMatrixWorld(),bt.makeTranslation(-Lo.x,-Lo.y,-Lo.z),Mf.multiplyMatrices(pt.projectionMatrix,pt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Mf,pt.coordinateSystem,pt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,tt),s.clear();else{tt===0&&(s.setRenderTarget(W.map),s.clear());let pt=W.getViewport(tt);o.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),F.viewport(o)}n=W.getFrustum(tt),y(P,_,st,X,this.type)}W.isPointLightShadow!==!0&&this.type===ur&&M(W,_),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(S,R,I)};function M(E,P){let _=t.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new qe(i.x,i.y,{format:Qi,type:sn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(P,null,_,u,v,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(P,null,_,d,v,null)}function T(E,P,_,S){let R=null,I=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)R=I;else if(R=_.isPointLight===!0?l:a,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let F=R.uuid,U=P.uuid,N=c[F];N===void 0&&(N={},c[F]=N);let O=N[U];O===void 0&&(O=R.clone(),N[U]=O,P.addEventListener("dispose",b)),R=O}if(R.visible=P.visible,R.wireframe=P.wireframe,S===ur?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:f[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=s.properties.get(R);F.light=_}return R}function y(E,P,_,S,R){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===ur)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let U=t.update(E),N=E.material;if(Array.isArray(N)){let O=U.groups;for(let X=0,W=O.length;X<W;X++){let rt=O[X],q=N[rt.materialIndex];if(q&&q.visible){let j=T(E,q,S,R);E.onBeforeShadow(s,E,P,_,U,j,rt),s.renderBufferDirect(_,null,U,j,E,rt),E.onAfterShadow(s,E,P,_,U,j,rt)}}}else if(N.visible){let O=T(E,N,S,R);E.onBeforeShadow(s,E,P,_,U,O,null),s.renderBufferDirect(_,null,U,O,E,null),E.onAfterShadow(s,E,P,_,U,O,null)}}let F=E.children;for(let U=0,N=F.length;U<N;U++)y(F[U],P,_,S,R)}function b(E){E.target.removeEventListener("dispose",b);for(let _ in c){let S=c[_],R=E.target.uuid;R in S&&(S[R].dispose(),delete S[R])}}}function X1(s,t){function e(){let G=!1,Ct=new we,ct=null,Pt=new we(0,0,0,0);return{setMask:function(Nt){ct!==Nt&&!G&&(s.colorMask(Nt,Nt,Nt,Nt),ct=Nt)},setLocked:function(Nt){G=Nt},setClear:function(Nt,_t,Kt,qt,Le){Le===!0&&(Nt*=qt,_t*=qt,Kt*=qt),Ct.set(Nt,_t,Kt,qt),Pt.equals(Ct)===!1&&(s.clearColor(Nt,_t,Kt,qt),Pt.copy(Ct))},reset:function(){G=!1,ct=null,Pt.set(-1,0,0,0)}}}function n(){let G=!1,Ct=!1,ct=null,Pt=null,Nt=null;return{setReversed:function(_t){if(Ct!==_t){let Kt=t.get("EXT_clip_control");_t?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT),Ct=_t;let qt=Nt;Nt=null,this.setClear(qt)}},getReversed:function(){return Ct},setTest:function(_t){_t?A(s.DEPTH_TEST):L(s.DEPTH_TEST)},setMask:function(_t){ct!==_t&&!G&&(s.depthMask(_t),ct=_t)},setFunc:function(_t){if(Ct&&(_t=Xd[_t]),Pt!==_t){switch(_t){case wa:s.depthFunc(s.NEVER);break;case Aa:s.depthFunc(s.ALWAYS);break;case Ra:s.depthFunc(s.LESS);break;case Ys:s.depthFunc(s.LEQUAL);break;case Ca:s.depthFunc(s.EQUAL);break;case Pa:s.depthFunc(s.GEQUAL);break;case Ia:s.depthFunc(s.GREATER);break;case La:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pt=_t}},setLocked:function(_t){G=_t},setClear:function(_t){Nt!==_t&&(Nt=_t,Ct&&(_t=1-_t),s.clearDepth(_t))},reset:function(){G=!1,ct=null,Pt=null,Nt=null,Ct=!1}}}function i(){let G=!1,Ct=null,ct=null,Pt=null,Nt=null,_t=null,Kt=null,qt=null,Le=null;return{setTest:function(Ee){G||(Ee?A(s.STENCIL_TEST):L(s.STENCIL_TEST))},setMask:function(Ee){Ct!==Ee&&!G&&(s.stencilMask(Ee),Ct=Ee)},setFunc:function(Ee,Wn,Qn){(ct!==Ee||Pt!==Wn||Nt!==Qn)&&(s.stencilFunc(Ee,Wn,Qn),ct=Ee,Pt=Wn,Nt=Qn)},setOp:function(Ee,Wn,Qn){(_t!==Ee||Kt!==Wn||qt!==Qn)&&(s.stencilOp(Ee,Wn,Qn),_t=Ee,Kt=Wn,qt=Qn)},setLocked:function(Ee){G=Ee},setClear:function(Ee){Le!==Ee&&(s.clearStencil(Ee),Le=Ee)},reset:function(){G=!1,Ct=null,ct=null,Pt=null,Nt=null,_t=null,Kt=null,qt=null,Le=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,m=[],v=null,g=!1,p=null,M=null,T=null,y=null,b=null,E=null,P=null,_=new Qt(0,0,0),S=0,R=!1,I=null,F=null,U=null,N=null,O=null,X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,rt=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=rt>=1):q.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=rt>=2);let j=null,tt={},st=s.getParameter(s.SCISSOR_BOX),pt=s.getParameter(s.VIEWPORT),bt=new we().fromArray(st),ft=new we().fromArray(pt);function dt(G,Ct,ct,Pt){let Nt=new Uint8Array(4),_t=s.createTexture();s.bindTexture(G,_t),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Kt=0;Kt<ct;Kt++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Ct,0,s.RGBA,1,1,Pt,0,s.RGBA,s.UNSIGNED_BYTE,Nt):s.texImage2D(Ct+Kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Nt);return _t}let x={};x[s.TEXTURE_2D]=dt(s.TEXTURE_2D,s.TEXTURE_2D,1),x[s.TEXTURE_CUBE_MAP]=dt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),x[s.TEXTURE_2D_ARRAY]=dt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),x[s.TEXTURE_3D]=dt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),A(s.DEPTH_TEST),o.setFunc(Ys),lt(!1),yt(dh),A(s.CULL_FACE),at(Je);function A(G){h[G]!==!0&&(s.enable(G),h[G]=!0)}function L(G){h[G]!==!1&&(s.disable(G),h[G]=!1)}function k(G,Ct){return u[G]!==Ct?(s.bindFramebuffer(G,Ct),u[G]=Ct,G===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Ct),G===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Y(G,Ct){let ct=m,Pt=!1;if(G){ct=d.get(Ct),ct===void 0&&(ct=[],d.set(Ct,ct));let Nt=G.textures;if(ct.length!==Nt.length||ct[0]!==s.COLOR_ATTACHMENT0){for(let _t=0,Kt=Nt.length;_t<Kt;_t++)ct[_t]=s.COLOR_ATTACHMENT0+_t;ct.length=Nt.length,Pt=!0}}else ct[0]!==s.BACK&&(ct[0]=s.BACK,Pt=!0);Pt&&s.drawBuffers(ct)}function gt(G){return v!==G?(s.useProgram(G),v=G,!0):!1}let Ht={[Bn]:s.FUNC_ADD,[md]:s.FUNC_SUBTRACT,[gd]:s.FUNC_REVERSE_SUBTRACT};Ht[xd]=s.MIN,Ht[_d]=s.MAX;let K={[ps]:s.ZERO,[vd]:s.ONE,[yd]:s.SRC_COLOR,[mh]:s.SRC_ALPHA,[Ed]:s.SRC_ALPHA_SATURATE,[go]:s.DST_COLOR,[mo]:s.DST_ALPHA,[Md]:s.ONE_MINUS_SRC_COLOR,[gh]:s.ONE_MINUS_SRC_ALPHA,[bd]:s.ONE_MINUS_DST_COLOR,[Sd]:s.ONE_MINUS_DST_ALPHA,[Td]:s.CONSTANT_COLOR,[wd]:s.ONE_MINUS_CONSTANT_COLOR,[Ad]:s.CONSTANT_ALPHA,[Rd]:s.ONE_MINUS_CONSTANT_ALPHA};function at(G,Ct,ct,Pt,Nt,_t,Kt,qt,Le,Ee){if(G===Je){g===!0&&(L(s.BLEND),g=!1);return}if(g===!1&&(A(s.BLEND),g=!0),G!==ol){if(G!==p||Ee!==R){if((M!==Bn||b!==Bn)&&(s.blendEquation(s.FUNC_ADD),M=Bn,b=Bn),Ee)switch(G){case Ti:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zi:s.blendFunc(s.ONE,s.ONE);break;case fh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ph:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:re("WebGLState: Invalid blending: ",G);break}else switch(G){case Ti:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case fh:re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ph:re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:re("WebGLState: Invalid blending: ",G);break}T=null,y=null,E=null,P=null,_.set(0,0,0),S=0,p=G,R=Ee}return}Nt=Nt||Ct,_t=_t||ct,Kt=Kt||Pt,(Ct!==M||Nt!==b)&&(s.blendEquationSeparate(Ht[Ct],Ht[Nt]),M=Ct,b=Nt),(ct!==T||Pt!==y||_t!==E||Kt!==P)&&(s.blendFuncSeparate(K[ct],K[Pt],K[_t],K[Kt]),T=ct,y=Pt,E=_t,P=Kt),(qt.equals(_)===!1||Le!==S)&&(s.blendColor(qt.r,qt.g,qt.b,Le),_.copy(qt),S=Le),p=G,R=!1}function mt(G,Ct){G.side===Sn?L(s.CULL_FACE):A(s.CULL_FACE);let ct=G.side===ln;Ct&&(ct=!ct),lt(ct),G.blending===Ti&&G.transparent===!1?at(Je):at(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let Pt=G.stencilWrite;a.setTest(Pt),Pt&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),zt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?A(s.SAMPLE_ALPHA_TO_COVERAGE):L(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(G){I!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),I=G)}function yt(G){G!==dd?(A(s.CULL_FACE),G!==F&&(G===dh?s.cullFace(s.BACK):G===fd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):L(s.CULL_FACE),F=G}function Yt(G){G!==U&&(W&&s.lineWidth(G),U=G)}function zt(G,Ct,ct){G?(A(s.POLYGON_OFFSET_FILL),(N!==Ct||O!==ct)&&(N=Ct,O=ct,o.getReversed()&&(Ct=-Ct),s.polygonOffset(Ct,ct))):L(s.POLYGON_OFFSET_FILL)}function $t(G){G?A(s.SCISSOR_TEST):L(s.SCISSOR_TEST)}function ee(G){G===void 0&&(G=s.TEXTURE0+X-1),j!==G&&(s.activeTexture(G),j=G)}function z(G,Ct,ct){ct===void 0&&(j===null?ct=s.TEXTURE0+X-1:ct=j);let Pt=tt[ct];Pt===void 0&&(Pt={type:void 0,texture:void 0},tt[ct]=Pt),(Pt.type!==G||Pt.texture!==Ct)&&(j!==ct&&(s.activeTexture(ct),j=ct),s.bindTexture(G,Ct||x[G]),Pt.type=G,Pt.texture=Ct)}function Me(){let G=tt[j];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function fe(){try{s.compressedTexImage2D(...arguments)}catch(G){re("WebGLState:",G)}}function D(){try{s.compressedTexImage3D(...arguments)}catch(G){re("WebGLState:",G)}}function w(){try{s.texSubImage2D(...arguments)}catch(G){re("WebGLState:",G)}}function V(){try{s.texSubImage3D(...arguments)}catch(G){re("WebGLState:",G)}}function Z(){try{s.compressedTexSubImage2D(...arguments)}catch(G){re("WebGLState:",G)}}function it(){try{s.compressedTexSubImage3D(...arguments)}catch(G){re("WebGLState:",G)}}function St(){try{s.texStorage2D(...arguments)}catch(G){re("WebGLState:",G)}}function Et(){try{s.texStorage3D(...arguments)}catch(G){re("WebGLState:",G)}}function ot(){try{s.texImage2D(...arguments)}catch(G){re("WebGLState:",G)}}function ht(){try{s.texImage3D(...arguments)}catch(G){re("WebGLState:",G)}}function Rt(G){return f[G]!==void 0?f[G]:s.getParameter(G)}function Zt(G,Ct){f[G]!==Ct&&(s.pixelStorei(G,Ct),f[G]=Ct)}function wt(G){bt.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),bt.copy(G))}function Tt(G){ft.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),ft.copy(G))}function kt(G,Ct){let ct=c.get(Ct);ct===void 0&&(ct=new WeakMap,c.set(Ct,ct));let Pt=ct.get(G);Pt===void 0&&(Pt=s.getUniformBlockIndex(Ct,G.name),ct.set(G,Pt))}function jt(G,Ct){let Pt=c.get(Ct).get(G);l.get(Ct)!==Pt&&(s.uniformBlockBinding(Ct,Pt,G.__bindingPointIndex),l.set(Ct,Pt))}function ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},j=null,tt={},u={},d=new WeakMap,m=[],v=null,g=!1,p=null,M=null,T=null,y=null,b=null,E=null,P=null,_=new Qt(0,0,0),S=0,R=!1,I=null,F=null,U=null,N=null,O=null,bt.set(0,0,s.canvas.width,s.canvas.height),ft.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:A,disable:L,bindFramebuffer:k,drawBuffers:Y,useProgram:gt,setBlending:at,setMaterial:mt,setFlipSided:lt,setCullFace:yt,setLineWidth:Yt,setPolygonOffset:zt,setScissorTest:$t,activeTexture:ee,bindTexture:z,unbindTexture:Me,compressedTexImage2D:fe,compressedTexImage3D:D,texImage2D:ot,texImage3D:ht,pixelStorei:Zt,getParameter:Rt,updateUBOMapping:kt,uniformBlockBinding:jt,texStorage2D:St,texStorage3D:Et,texSubImage2D:w,texSubImage3D:V,compressedTexSubImage2D:Z,compressedTexSubImage3D:it,scissor:wt,viewport:Tt,reset:ae}}function q1(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,h=new WeakMap,f=new Set,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(D,w){return m?new OffscreenCanvas(D,w):zr("canvas")}function g(D,w,V){let Z=1,it=fe(D);if((it.width>V||it.height>V)&&(Z=V/Math.max(it.width,it.height)),Z<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let St=Math.floor(Z*it.width),Et=Math.floor(Z*it.height);u===void 0&&(u=v(St,Et));let ot=w?v(St,Et):u;return ot.width=St,ot.height=Et,ot.getContext("2d").drawImage(D,0,0,St,Et),ne("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+St+"x"+Et+")."),ot}else return"data"in D&&ne("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),D;return D}function p(D){return D.generateMipmaps}function M(D){s.generateMipmap(D)}function T(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(D,w,V,Z,it,St=!1){if(D!==null){if(s[D]!==void 0)return s[D];ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Et;Z&&(Et=t.get("EXT_texture_norm16"),Et||ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ot=w;if(w===s.RED&&(V===s.FLOAT&&(ot=s.R32F),V===s.HALF_FLOAT&&(ot=s.R16F),V===s.UNSIGNED_BYTE&&(ot=s.R8),V===s.UNSIGNED_SHORT&&Et&&(ot=Et.R16_EXT),V===s.SHORT&&Et&&(ot=Et.R16_SNORM_EXT)),w===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(ot=s.R8UI),V===s.UNSIGNED_SHORT&&(ot=s.R16UI),V===s.UNSIGNED_INT&&(ot=s.R32UI),V===s.BYTE&&(ot=s.R8I),V===s.SHORT&&(ot=s.R16I),V===s.INT&&(ot=s.R32I)),w===s.RG&&(V===s.FLOAT&&(ot=s.RG32F),V===s.HALF_FLOAT&&(ot=s.RG16F),V===s.UNSIGNED_BYTE&&(ot=s.RG8),V===s.UNSIGNED_SHORT&&Et&&(ot=Et.RG16_EXT),V===s.SHORT&&Et&&(ot=Et.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(ot=s.RG8UI),V===s.UNSIGNED_SHORT&&(ot=s.RG16UI),V===s.UNSIGNED_INT&&(ot=s.RG32UI),V===s.BYTE&&(ot=s.RG8I),V===s.SHORT&&(ot=s.RG16I),V===s.INT&&(ot=s.RG32I)),w===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(ot=s.RGB8UI),V===s.UNSIGNED_SHORT&&(ot=s.RGB16UI),V===s.UNSIGNED_INT&&(ot=s.RGB32UI),V===s.BYTE&&(ot=s.RGB8I),V===s.SHORT&&(ot=s.RGB16I),V===s.INT&&(ot=s.RGB32I)),w===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(ot=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(ot=s.RGBA16UI),V===s.UNSIGNED_INT&&(ot=s.RGBA32UI),V===s.BYTE&&(ot=s.RGBA8I),V===s.SHORT&&(ot=s.RGBA16I),V===s.INT&&(ot=s.RGBA32I)),w===s.RGB&&(V===s.UNSIGNED_SHORT&&Et&&(ot=Et.RGB16_EXT),V===s.SHORT&&Et&&(ot=Et.RGB16_SNORM_EXT),V===s.UNSIGNED_INT_5_9_9_9_REV&&(ot=s.RGB9_E5),V===s.UNSIGNED_INT_10F_11F_11F_REV&&(ot=s.R11F_G11F_B10F)),w===s.RGBA){let ht=St?Or:xe.getTransfer(it);V===s.FLOAT&&(ot=s.RGBA32F),V===s.HALF_FLOAT&&(ot=s.RGBA16F),V===s.UNSIGNED_BYTE&&(ot=ht===be?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT&&Et&&(ot=Et.RGBA16_EXT),V===s.SHORT&&Et&&(ot=Et.RGBA16_SNORM_EXT),V===s.UNSIGNED_SHORT_4_4_4_4&&(ot=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(ot=s.RGB5_A1)}return(ot===s.R16F||ot===s.R32F||ot===s.RG16F||ot===s.RG32F||ot===s.RGBA16F||ot===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function b(D,w){let V;return D?w===null||w===Kn||w===Ki?V=s.DEPTH24_STENCIL8:w===Cn?V=s.DEPTH32F_STENCIL8:w===dr&&(V=s.DEPTH24_STENCIL8,ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Kn||w===Ki?V=s.DEPTH_COMPONENT24:w===Cn?V=s.DEPTH_COMPONENT32F:w===dr&&(V=s.DEPTH_COMPONENT16),V}function E(D,w){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==Xe&&D.minFilter!==an?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function P(D){let w=D.target;w.removeEventListener("dispose",P),S(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&f.delete(w)}function _(D){let w=D.target;w.removeEventListener("dispose",_),I(w)}function S(D){let w=n.get(D);if(w.__webglInit===void 0)return;let V=D.source,Z=d.get(V);if(Z){let it=Z[w.__cacheKey];it.usedTimes--,it.usedTimes===0&&R(D),Object.keys(Z).length===0&&d.delete(V)}n.remove(D)}function R(D){let w=n.get(D);s.deleteTexture(w.__webglTexture);let V=D.source,Z=d.get(V);delete Z[w.__cacheKey],o.memory.textures--}function I(D){let w=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(w.__webglFramebuffer[Z]))for(let it=0;it<w.__webglFramebuffer[Z].length;it++)s.deleteFramebuffer(w.__webglFramebuffer[Z][it]);else s.deleteFramebuffer(w.__webglFramebuffer[Z]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[Z])}else{if(Array.isArray(w.__webglFramebuffer))for(let Z=0;Z<w.__webglFramebuffer.length;Z++)s.deleteFramebuffer(w.__webglFramebuffer[Z]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Z=0;Z<w.__webglColorRenderbuffer.length;Z++)w.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[Z]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let V=D.textures;for(let Z=0,it=V.length;Z<it;Z++){let St=n.get(V[Z]);St.__webglTexture&&(s.deleteTexture(St.__webglTexture),o.memory.textures--),n.remove(V[Z])}n.remove(D)}let F=0;function U(){F=0}function N(){return F}function O(D){F=D}function X(){let D=F;return D>=i.maxTextures&&ne("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+i.maxTextures),F+=1,D}function W(D){let w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function rt(D,w){let V=n.get(D);if(D.isVideoTexture&&z(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&V.__version!==D.version){let Z=D.image;if(Z===null)ne("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)ne("WebGLRenderer: Texture marked for update but image is incomplete");else{L(V,D,w);return}}else D.isExternalTexture&&(V.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+w)}function q(D,w){let V=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){L(V,D,w);return}else D.isExternalTexture&&(V.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+w)}function j(D,w){let V=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){L(V,D,w);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+w)}function tt(D,w){let V=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&V.__version!==D.version){k(V,D,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+w)}let st={[wn]:s.REPEAT,[ii]:s.CLAMP_TO_EDGE,[Da]:s.MIRRORED_REPEAT},pt={[Xe]:s.NEAREST,[Ld]:s.NEAREST_MIPMAP_NEAREST,[Eo]:s.NEAREST_MIPMAP_LINEAR,[an]:s.LINEAR,[hl]:s.LINEAR_MIPMAP_NEAREST,[ji]:s.LINEAR_MIPMAP_LINEAR},bt={[Ud]:s.NEVER,[Hd]:s.ALWAYS,[Bd]:s.LESS,[Zl]:s.LEQUAL,[Od]:s.EQUAL,[Jl]:s.GEQUAL,[zd]:s.GREATER,[kd]:s.NOTEQUAL};function ft(D,w){if(w.type===Cn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===an||w.magFilter===hl||w.magFilter===Eo||w.magFilter===ji||w.minFilter===an||w.minFilter===hl||w.minFilter===Eo||w.minFilter===ji)&&ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,st[w.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,st[w.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,st[w.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,pt[w.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,pt[w.minFilter]),w.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,bt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Xe||w.minFilter!==Eo&&w.minFilter!==ji||w.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(D,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function dt(D,w){let V=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",P));let Z=w.source,it=d.get(Z);it===void 0&&(it={},d.set(Z,it));let St=W(w);if(St!==D.__cacheKey){it[St]===void 0&&(it[St]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),it[St].usedTimes++;let Et=it[D.__cacheKey];Et!==void 0&&(it[D.__cacheKey].usedTimes--,Et.usedTimes===0&&R(w)),D.__cacheKey=St,D.__webglTexture=it[St].texture}return V}function x(D,w,V){return Math.floor(Math.floor(D/V)/w)}function A(D,w,V,Z){let St=D.updateRanges;if(St.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,V,Z,w.data);else{St.sort((Zt,wt)=>Zt.start-wt.start);let Et=0;for(let Zt=1;Zt<St.length;Zt++){let wt=St[Et],Tt=St[Zt],kt=wt.start+wt.count,jt=x(Tt.start,w.width,4),ae=x(wt.start,w.width,4);Tt.start<=kt+1&&jt===ae&&x(Tt.start+Tt.count-1,w.width,4)===jt?wt.count=Math.max(wt.count,Tt.start+Tt.count-wt.start):(++Et,St[Et]=Tt)}St.length=Et+1;let ot=e.getParameter(s.UNPACK_ROW_LENGTH),ht=e.getParameter(s.UNPACK_SKIP_PIXELS),Rt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let Zt=0,wt=St.length;Zt<wt;Zt++){let Tt=St[Zt],kt=Math.floor(Tt.start/4),jt=Math.ceil(Tt.count/4),ae=kt%w.width,G=Math.floor(kt/w.width),Ct=jt,ct=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,ae),e.pixelStorei(s.UNPACK_SKIP_ROWS,G),e.texSubImage2D(s.TEXTURE_2D,0,ae,G,Ct,ct,V,Z,w.data)}D.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,ot),e.pixelStorei(s.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(s.UNPACK_SKIP_ROWS,Rt)}}function L(D,w,V){let Z=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Z=s.TEXTURE_3D);let it=dt(D,w),St=w.source;e.bindTexture(Z,D.__webglTexture,s.TEXTURE0+V);let Et=n.get(St);if(St.version!==Et.__version||it===!0){if(e.activeTexture(s.TEXTURE0+V),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let ct=xe.getPrimaries(xe.workingColorSpace),Pt=w.colorSpace===wi?null:xe.getPrimaries(w.colorSpace),Nt=w.colorSpace===wi||ct===Pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt)}e.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let ht=g(w.image,!1,i.maxTextureSize);ht=Me(w,ht);let Rt=r.convert(w.format,w.colorSpace),Zt=r.convert(w.type),wt=y(w.internalFormat,Rt,Zt,w.normalized,w.colorSpace,w.isVideoTexture);ft(Z,w);let Tt,kt=w.mipmaps,jt=w.isVideoTexture!==!0,ae=Et.__version===void 0||it===!0,G=St.dataReady,Ct=E(w,ht);if(w.isDepthTexture)wt=b(w.format===di,w.type),ae&&(jt?e.texStorage2D(s.TEXTURE_2D,1,wt,ht.width,ht.height):e.texImage2D(s.TEXTURE_2D,0,wt,ht.width,ht.height,0,Rt,Zt,null));else if(w.isDataTexture)if(kt.length>0){jt&&ae&&e.texStorage2D(s.TEXTURE_2D,Ct,wt,kt[0].width,kt[0].height);for(let ct=0,Pt=kt.length;ct<Pt;ct++)Tt=kt[ct],jt?G&&e.texSubImage2D(s.TEXTURE_2D,ct,0,0,Tt.width,Tt.height,Rt,Zt,Tt.data):e.texImage2D(s.TEXTURE_2D,ct,wt,Tt.width,Tt.height,0,Rt,Zt,Tt.data);w.generateMipmaps=!1}else jt?(ae&&e.texStorage2D(s.TEXTURE_2D,Ct,wt,ht.width,ht.height),G&&A(w,ht,Rt,Zt)):e.texImage2D(s.TEXTURE_2D,0,wt,ht.width,ht.height,0,Rt,Zt,ht.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){jt&&ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,wt,kt[0].width,kt[0].height,ht.depth);for(let ct=0,Pt=kt.length;ct<Pt;ct++)if(Tt=kt[ct],w.format!==vn)if(Rt!==null)if(jt){if(G)if(w.layerUpdates.size>0){let Nt=Ph(Tt.width,Tt.height,w.format,w.type);for(let _t of w.layerUpdates){let Kt=Tt.data.subarray(_t*Nt/Tt.data.BYTES_PER_ELEMENT,(_t+1)*Nt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,_t,Tt.width,Tt.height,1,Rt,Kt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,0,Tt.width,Tt.height,ht.depth,Rt,Tt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ct,wt,Tt.width,Tt.height,ht.depth,0,Tt.data,0,0);else ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?G&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,0,Tt.width,Tt.height,ht.depth,Rt,Zt,Tt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ct,wt,Tt.width,Tt.height,ht.depth,0,Rt,Zt,Tt.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{jt&&ae&&e.texStorage2D(s.TEXTURE_2D,Ct,wt,kt[0].width,kt[0].height);for(let ct=0,Pt=kt.length;ct<Pt;ct++)Tt=kt[ct],w.format!==vn?Rt!==null?jt?G&&e.compressedTexSubImage2D(s.TEXTURE_2D,ct,0,0,Tt.width,Tt.height,Rt,Tt.data):e.compressedTexImage2D(s.TEXTURE_2D,ct,wt,Tt.width,Tt.height,0,Tt.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?G&&e.texSubImage2D(s.TEXTURE_2D,ct,0,0,Tt.width,Tt.height,Rt,Zt,Tt.data):e.texImage2D(s.TEXTURE_2D,ct,wt,Tt.width,Tt.height,0,Rt,Zt,Tt.data)}else if(w.isDataArrayTexture)if(jt){if(ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,wt,ht.width,ht.height,ht.depth),G)if(w.layerUpdates.size>0){let ct=Ph(ht.width,ht.height,w.format,w.type);for(let Pt of w.layerUpdates){let Nt=ht.data.subarray(Pt*ct/ht.data.BYTES_PER_ELEMENT,(Pt+1)*ct/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Pt,ht.width,ht.height,1,Rt,Zt,Nt)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Rt,Zt,ht.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,wt,ht.width,ht.height,ht.depth,0,Rt,Zt,ht.data);else if(w.isData3DTexture)jt?(ae&&e.texStorage3D(s.TEXTURE_3D,Ct,wt,ht.width,ht.height,ht.depth),G&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Rt,Zt,ht.data)):e.texImage3D(s.TEXTURE_3D,0,wt,ht.width,ht.height,ht.depth,0,Rt,Zt,ht.data);else if(w.isFramebufferTexture){if(ae)if(jt)e.texStorage2D(s.TEXTURE_2D,Ct,wt,ht.width,ht.height);else{let ct=ht.width,Pt=ht.height;for(let Nt=0;Nt<Ct;Nt++)e.texImage2D(s.TEXTURE_2D,Nt,wt,ct,Pt,0,Rt,Zt,null),ct>>=1,Pt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){let ct=s.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),ht.parentNode!==ct){ct.appendChild(ht),f.add(w),ct.onpaint=Pt=>{let Nt=Pt.changedElements;for(let _t of f)Nt.includes(_t.image)&&(_t.needsUpdate=!0)},ct.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ht);else{let Nt=s.RGBA,_t=s.RGBA,Kt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Nt,_t,Kt,ht)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(kt.length>0){if(jt&&ae){let ct=fe(kt[0]);e.texStorage2D(s.TEXTURE_2D,Ct,wt,ct.width,ct.height)}for(let ct=0,Pt=kt.length;ct<Pt;ct++)Tt=kt[ct],jt?G&&e.texSubImage2D(s.TEXTURE_2D,ct,0,0,Rt,Zt,Tt):e.texImage2D(s.TEXTURE_2D,ct,wt,Rt,Zt,Tt);w.generateMipmaps=!1}else if(jt){if(ae){let ct=fe(ht);e.texStorage2D(s.TEXTURE_2D,Ct,wt,ct.width,ct.height)}G&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Rt,Zt,ht)}else e.texImage2D(s.TEXTURE_2D,0,wt,Rt,Zt,ht);p(w)&&M(Z),Et.__version=St.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function k(D,w,V){if(w.image.length!==6)return;let Z=dt(D,w),it=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+V);let St=n.get(it);if(it.version!==St.__version||Z===!0){e.activeTexture(s.TEXTURE0+V);let Et=xe.getPrimaries(xe.workingColorSpace),ot=w.colorSpace===wi?null:xe.getPrimaries(w.colorSpace),ht=w.colorSpace===wi||Et===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Rt=w.isCompressedTexture||w.image[0].isCompressedTexture,Zt=w.image[0]&&w.image[0].isDataTexture,wt=[];for(let _t=0;_t<6;_t++)!Rt&&!Zt?wt[_t]=g(w.image[_t],!0,i.maxCubemapSize):wt[_t]=Zt?w.image[_t].image:w.image[_t],wt[_t]=Me(w,wt[_t]);let Tt=wt[0],kt=r.convert(w.format,w.colorSpace),jt=r.convert(w.type),ae=y(w.internalFormat,kt,jt,w.normalized,w.colorSpace),G=w.isVideoTexture!==!0,Ct=St.__version===void 0||Z===!0,ct=it.dataReady,Pt=E(w,Tt);ft(s.TEXTURE_CUBE_MAP,w);let Nt;if(Rt){G&&Ct&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,ae,Tt.width,Tt.height);for(let _t=0;_t<6;_t++){Nt=wt[_t].mipmaps;for(let Kt=0;Kt<Nt.length;Kt++){let qt=Nt[Kt];w.format!==vn?kt!==null?G?ct&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Kt,0,0,qt.width,qt.height,kt,qt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Kt,ae,qt.width,qt.height,0,qt.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Kt,0,0,qt.width,qt.height,kt,jt,qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Kt,ae,qt.width,qt.height,0,kt,jt,qt.data)}}}else{if(Nt=w.mipmaps,G&&Ct){Nt.length>0&&Pt++;let _t=fe(wt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,ae,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Zt){G?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,wt[_t].width,wt[_t].height,kt,jt,wt[_t].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ae,wt[_t].width,wt[_t].height,0,kt,jt,wt[_t].data);for(let Kt=0;Kt<Nt.length;Kt++){let Le=Nt[Kt].image[_t].image;G?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Kt+1,0,0,Le.width,Le.height,kt,jt,Le.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Kt+1,ae,Le.width,Le.height,0,kt,jt,Le.data)}}else{G?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,kt,jt,wt[_t]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ae,kt,jt,wt[_t]);for(let Kt=0;Kt<Nt.length;Kt++){let qt=Nt[Kt];G?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Kt+1,0,0,kt,jt,qt.image[_t]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Kt+1,ae,kt,jt,qt.image[_t])}}}p(w)&&M(s.TEXTURE_CUBE_MAP),St.__version=it.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function Y(D,w,V,Z,it,St){let Et=r.convert(V.format,V.colorSpace),ot=r.convert(V.type),ht=y(V.internalFormat,Et,ot,V.normalized,V.colorSpace),Rt=n.get(w),Zt=n.get(V);if(Zt.__renderTarget=w,!Rt.__hasExternalTextures){let wt=Math.max(1,w.width>>St),Tt=Math.max(1,w.height>>St);it===s.TEXTURE_3D||it===s.TEXTURE_2D_ARRAY?e.texImage3D(it,St,ht,wt,Tt,w.depth,0,Et,ot,null):e.texImage2D(it,St,ht,wt,Tt,0,Et,ot,null)}e.bindFramebuffer(s.FRAMEBUFFER,D),ee(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,it,Zt.__webglTexture,0,$t(w)):(it===s.TEXTURE_2D||it>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,it,Zt.__webglTexture,St),e.bindFramebuffer(s.FRAMEBUFFER,null)}function gt(D,w,V){if(s.bindRenderbuffer(s.RENDERBUFFER,D),w.depthBuffer){let Z=w.depthTexture,it=Z&&Z.isDepthTexture?Z.type:null,St=b(w.stencilBuffer,it),Et=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ee(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t(w),St,w.width,w.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t(w),St,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,St,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,D)}else{let Z=w.textures;for(let it=0;it<Z.length;it++){let St=Z[it],Et=r.convert(St.format,St.colorSpace),ot=r.convert(St.type),ht=y(St.internalFormat,Et,ot,St.normalized,St.colorSpace);ee(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t(w),ht,w.width,w.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t(w),ht,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ht,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ht(D,w,V){let Z=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(w.depthTexture);if(it.__renderTarget=w,(!it.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Z){if(it.__webglInit===void 0&&(it.__webglInit=!0,w.depthTexture.addEventListener("dispose",P)),it.__webglTexture===void 0){it.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,it.__webglTexture),ft(s.TEXTURE_CUBE_MAP,w.depthTexture);let Rt=r.convert(w.depthTexture.format),Zt=r.convert(w.depthTexture.type),wt;w.depthTexture.format===ri?wt=s.DEPTH_COMPONENT24:w.depthTexture.format===di&&(wt=s.DEPTH24_STENCIL8);for(let Tt=0;Tt<6;Tt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,wt,w.width,w.height,0,Rt,Zt,null)}}else rt(w.depthTexture,0);let St=it.__webglTexture,Et=$t(w),ot=Z?s.TEXTURE_CUBE_MAP_POSITIVE_X+V:s.TEXTURE_2D,ht=w.depthTexture.format===di?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===ri)ee(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,ot,St,0,Et):s.framebufferTexture2D(s.FRAMEBUFFER,ht,ot,St,0);else if(w.depthTexture.format===di)ee(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,ot,St,0,Et):s.framebufferTexture2D(s.FRAMEBUFFER,ht,ot,St,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function K(D){let w=n.get(D),V=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){let Z=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Z){let it=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Z.removeEventListener("dispose",it)};Z.addEventListener("dispose",it),w.__depthDisposeCallback=it}w.__boundDepthTexture=Z}if(D.depthTexture&&!w.__autoAllocateDepthBuffer)if(V)for(let Z=0;Z<6;Z++)Ht(w.__webglFramebuffer[Z],D,Z);else{let Z=D.texture.mipmaps;Z&&Z.length>0?Ht(w.__webglFramebuffer[0],D,0):Ht(w.__webglFramebuffer,D,0)}else if(V){w.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[Z]),w.__webglDepthbuffer[Z]===void 0)w.__webglDepthbuffer[Z]=s.createRenderbuffer(),gt(w.__webglDepthbuffer[Z],D,!1);else{let it=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=w.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,St),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,St)}}else{let Z=D.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),gt(w.__webglDepthbuffer,D,!1);else{let it=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,St),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,St)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function at(D,w,V){let Z=n.get(D);w!==void 0&&Y(Z.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&K(D)}function mt(D){let w=D.texture,V=n.get(D),Z=n.get(w);D.addEventListener("dispose",_);let it=D.textures,St=D.isWebGLCubeRenderTarget===!0,Et=it.length>1;if(Et||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=w.version,o.memory.textures++),St){V.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[ot]=[];for(let ht=0;ht<w.mipmaps.length;ht++)V.__webglFramebuffer[ot][ht]=s.createFramebuffer()}else V.__webglFramebuffer[ot]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let ot=0;ot<w.mipmaps.length;ot++)V.__webglFramebuffer[ot]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(Et)for(let ot=0,ht=it.length;ot<ht;ot++){let Rt=n.get(it[ot]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=s.createTexture(),o.memory.textures++)}if(D.samples>0&&ee(D)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ot=0;ot<it.length;ot++){let ht=it[ot];V.__webglColorRenderbuffer[ot]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[ot]);let Rt=r.convert(ht.format,ht.colorSpace),Zt=r.convert(ht.type),wt=y(ht.internalFormat,Rt,Zt,ht.normalized,ht.colorSpace,D.isXRRenderTarget===!0),Tt=$t(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,wt,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,V.__webglColorRenderbuffer[ot])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),gt(V.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(St){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),ft(s.TEXTURE_CUBE_MAP,w);for(let ot=0;ot<6;ot++)if(w.mipmaps&&w.mipmaps.length>0)for(let ht=0;ht<w.mipmaps.length;ht++)Y(V.__webglFramebuffer[ot][ht],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ht);else Y(V.__webglFramebuffer[ot],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(w)&&M(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ot=0,ht=it.length;ot<ht;ot++){let Rt=it[ot],Zt=n.get(Rt),wt=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(wt=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(wt,Zt.__webglTexture),ft(wt,Rt),Y(V.__webglFramebuffer,D,Rt,s.COLOR_ATTACHMENT0+ot,wt,0),p(Rt)&&M(wt)}e.unbindTexture()}else{let ot=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ot=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ot,Z.__webglTexture),ft(ot,w),w.mipmaps&&w.mipmaps.length>0)for(let ht=0;ht<w.mipmaps.length;ht++)Y(V.__webglFramebuffer[ht],D,w,s.COLOR_ATTACHMENT0,ot,ht);else Y(V.__webglFramebuffer,D,w,s.COLOR_ATTACHMENT0,ot,0);p(w)&&M(ot),e.unbindTexture()}D.depthBuffer&&K(D)}function lt(D){let w=D.textures;for(let V=0,Z=w.length;V<Z;V++){let it=w[V];if(p(it)){let St=T(D),Et=n.get(it).__webglTexture;e.bindTexture(St,Et),M(St),e.unbindTexture()}}}let yt=[],Yt=[];function zt(D){if(D.samples>0){if(ee(D)===!1){let w=D.textures,V=D.width,Z=D.height,it=s.COLOR_BUFFER_BIT,St=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=n.get(D),ot=w.length>1;if(ot)for(let Rt=0;Rt<w.length;Rt++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);let ht=D.texture.mipmaps;ht&&ht.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Rt=0;Rt<w.length;Rt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(it|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(it|=s.STENCIL_BUFFER_BIT)),ot){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[Rt]);let Zt=n.get(w[Rt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Zt,0)}s.blitFramebuffer(0,0,V,Z,0,0,V,Z,it,s.NEAREST),l===!0&&(yt.length=0,Yt.length=0,yt.push(s.COLOR_ATTACHMENT0+Rt),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(yt.push(St),Yt.push(St),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Yt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,yt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ot)for(let Rt=0;Rt<w.length;Rt++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,Et.__webglColorRenderbuffer[Rt]);let Zt=n.get(w[Rt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,Zt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){let w=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function $t(D){return Math.min(i.maxSamples,D.samples)}function ee(D){let w=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function z(D){let w=o.render.frame;h.get(D)!==w&&(h.set(D,w),D.update())}function Me(D,w){let V=D.colorSpace,Z=D.format,it=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||V!==Br&&V!==wi&&(xe.getTransfer(V)===be?(Z!==vn||it!==pn)&&ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):re("WebGLTextures: Unsupported texture color space:",V)),w}function fe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=U,this.getTextureUnits=N,this.setTextureUnits=O,this.setTexture2D=rt,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=tt,this.rebindTextures=at,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=ee,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Y1(s,t){function e(n,i=wi){let r,o=xe.getTransfer(i);if(n===pn)return s.UNSIGNED_BYTE;if(n===dl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===fl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===yh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Mh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===_h)return s.BYTE;if(n===vh)return s.SHORT;if(n===dr)return s.UNSIGNED_SHORT;if(n===ul)return s.INT;if(n===Kn)return s.UNSIGNED_INT;if(n===Cn)return s.FLOAT;if(n===sn)return s.HALF_FLOAT;if(n===Sh)return s.ALPHA;if(n===bh)return s.RGB;if(n===vn)return s.RGBA;if(n===ri)return s.DEPTH_COMPONENT;if(n===di)return s.DEPTH_STENCIL;if(n===pl)return s.RED;if(n===ml)return s.RED_INTEGER;if(n===Qi)return s.RG;if(n===gl)return s.RG_INTEGER;if(n===xl)return s.RGBA_INTEGER;if(n===To||n===wo||n===Ao||n===Ro)if(o===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===To)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===To)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_l||n===vl||n===yl||n===Ml)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sl||n===bl||n===El||n===Tl||n===wl||n===Co||n===Al)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sl||n===bl)return o===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===El)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Tl)return r.COMPRESSED_R11_EAC;if(n===wl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Co)return r.COMPRESSED_RG11_EAC;if(n===Al)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Dl||n===Fl||n===Nl||n===Ul||n===Bl||n===Ol||n===zl||n===kl||n===Hl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Rl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Il)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ll)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ul)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ol)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gl||n===Vl||n===Wl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Gl)return o===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xl||n===ql||n===Po||n===Yl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Z1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J1=`
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

}`,Jh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Jr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new He({vertexShader:Z1,fragmentShader:J1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ye(new Ze(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$h=class extends oi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null,v=typeof XRWebGLBinding<"u",g=new Jh,p={},M=e.getContextAttributes(),T=null,y=null,b=[],E=[],P=new xt,_=null,S=null,R=new Ke;R.viewport=new we;let I=new Ke;I.viewport=new we;let F=[R,I],U=new sl,N=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(x){let A=b[x];return A===void 0&&(A=new Ks,b[x]=A),A.getTargetRaySpace()},this.getControllerGrip=function(x){let A=b[x];return A===void 0&&(A=new Ks,b[x]=A),A.getGripSpace()},this.getHand=function(x){let A=b[x];return A===void 0&&(A=new Ks,b[x]=A),A.getHandSpace()};function X(x){let A=E.indexOf(x.inputSource);if(A===-1)return;let L=b[A];L!==void 0&&(L.update(x.inputSource,x.frame,c||o),L.dispatchEvent({type:x.type,data:x.inputSource}))}function W(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",rt);for(let x=0;x<b.length;x++){let A=E[x];A!==null&&(E[x]=null,b[x].disconnect(A))}N=null,O=null,g.reset();for(let x in p)delete p[x];if(t.setRenderTarget(T),d=null,u=null,f=null,i=null,y=null,dt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(P.width,P.height,!1),S!==null){let x=S.camera;x.fov=S.fov,x.zoom=S.zoom,x.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(x){r=x,n.isPresenting===!0&&ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(x){a=x,n.isPresenting===!0&&ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(x){c=x},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(x){if(i=x,i!==null){if(T=t.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",W),i.addEventListener("inputsourceschange",rt),M.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let L=null,k=null,Y=null;M.depth&&(Y=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,L=M.stencil?di:ri,k=M.stencil?Ki:Kn);let gt={colorFormat:e.RGBA8,depthFormat:Y,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(gt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new qe(u.textureWidth,u.textureHeight,{format:vn,type:pn,depthTexture:new ci(u.textureWidth,u.textureHeight,k,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let L={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,L),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new qe(d.framebufferWidth,d.framebufferHeight,{format:vn,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),dt.setContext(i),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function rt(x){for(let A=0;A<x.removed.length;A++){let L=x.removed[A],k=E.indexOf(L);k>=0&&(E[k]=null,b[k].disconnect(L))}for(let A=0;A<x.added.length;A++){let L=x.added[A],k=E.indexOf(L);if(k===-1){for(let gt=0;gt<b.length;gt++)if(gt>=E.length){E.push(L),k=gt;break}else if(E[gt]===null){E[gt]=L,k=gt;break}if(k===-1)break}let Y=b[k];Y&&Y.connect(L)}}let q=new B,j=new B;function tt(x,A,L){q.setFromMatrixPosition(A.matrixWorld),j.setFromMatrixPosition(L.matrixWorld);let k=q.distanceTo(j),Y=A.projectionMatrix.elements,gt=L.projectionMatrix.elements,Ht=Y[14]/(Y[10]-1),K=Y[14]/(Y[10]+1),at=(Y[9]+1)/Y[5],mt=(Y[9]-1)/Y[5],lt=(Y[8]-1)/Y[0],yt=(gt[8]+1)/gt[0],Yt=Ht*lt,zt=Ht*yt,$t=k/(-lt+yt),ee=$t*-lt;if(A.matrixWorld.decompose(x.position,x.quaternion,x.scale),x.translateX(ee),x.translateZ($t),x.matrixWorld.compose(x.position,x.quaternion,x.scale),x.matrixWorldInverse.copy(x.matrixWorld).invert(),Y[10]===-1)x.projectionMatrix.copy(A.projectionMatrix),x.projectionMatrixInverse.copy(A.projectionMatrixInverse);else{let z=Ht+$t,Me=K+$t,fe=Yt-ee,D=zt+(k-ee),w=at*K/Me*z,V=mt*K/Me*z;x.projectionMatrix.makePerspective(fe,D,w,V,z,Me),x.projectionMatrixInverse.copy(x.projectionMatrix).invert()}}function st(x,A){A===null?x.matrixWorld.copy(x.matrix):x.matrixWorld.multiplyMatrices(A.matrixWorld,x.matrix),x.matrixWorldInverse.copy(x.matrixWorld).invert()}this.updateCamera=function(x){if(i===null)return;let A=x.near,L=x.far;g.texture!==null&&(g.depthNear>0&&(A=g.depthNear),g.depthFar>0&&(L=g.depthFar)),U.near=I.near=R.near=A,U.far=I.far=R.far=L,(N!==U.near||O!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),N=U.near,O=U.far),U.layers.mask=x.layers.mask|6,R.layers.mask=U.layers.mask&-5,I.layers.mask=U.layers.mask&-3;let k=x.parent,Y=U.cameras;st(U,k);for(let gt=0;gt<Y.length;gt++)st(Y[gt],k);Y.length===2?tt(U,R,I):U.projectionMatrix.copy(R.projectionMatrix),S===null&&x.isPerspectiveCamera&&(S={camera:x,fov:x.fov,zoom:x.zoom}),pt(x,U,k)};function pt(x,A,L){L===null?x.matrix.copy(A.matrixWorld):(x.matrix.copy(L.matrixWorld),x.matrix.invert(),x.matrix.multiply(A.matrixWorld)),x.matrix.decompose(x.position,x.quaternion,x.scale),x.updateMatrixWorld(!0),x.projectionMatrix.copy(A.projectionMatrix),x.projectionMatrixInverse.copy(A.projectionMatrixInverse),x.isPerspectiveCamera&&(x.fov=Hr*2*Math.atan(1/x.projectionMatrix.elements[5]),x.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(x){l=x,u!==null&&(u.fixedFoveation=x),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=x)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(x){return p[x]};let bt=null;function ft(x,A){if(h=A.getViewerPose(c||o),m=A,h!==null){let L=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let k=!1;L.length!==U.cameras.length&&(U.cameras.length=0,k=!0);for(let K=0;K<L.length;K++){let at=L[K],mt=null;if(d!==null)mt=d.getViewport(at);else{let yt=f.getViewSubImage(u,at);mt=yt.viewport,K===0&&(t.setRenderTargetTextures(y,yt.colorTexture,yt.depthStencilTexture),t.setRenderTarget(y))}let lt=F[K];lt===void 0&&(lt=new Ke,lt.layers.enable(K),lt.viewport=new we,F[K]=lt),lt.matrix.fromArray(at.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(at.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(mt.x,mt.y,mt.width,mt.height),K===0&&(U.matrix.copy(lt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),k===!0&&U.cameras.push(lt)}let Y=i.enabledFeatures;if(Y&&Y.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let K=f.getDepthInformation(L[0]);K&&K.isValid&&K.texture&&g.init(K,i.renderState)}if(Y&&Y.includes("camera-access")&&v){t.state.unbindTexture(),f=n.getBinding();for(let K=0;K<L.length;K++){let at=L[K].camera;if(at){let mt=p[at];mt||(mt=new Jr,p[at]=mt);let lt=f.getCameraImage(at);mt.sourceTexture=lt}}}}for(let L=0;L<b.length;L++){let k=E[L],Y=b[L];k!==null&&Y!==void 0&&Y.update(k,A,c||o)}bt&&bt(x,A),A.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:A}),m=null}let dt=new Sf;dt.setAnimationLoop(ft),this.setAnimationLoop=function(x){bt=x},this.dispose=function(){}}},$1=new oe,Rf=new de;Rf.set(-1,0,0,0,1,0,0,0,1);function j1(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ah(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,M,T,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,M,T):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===ln&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===ln&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=t.get(p),T=M.envMap,y=M.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4($1.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Rf),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=T*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function K1(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let E=b.program;n.uniformBlockBinding(y,E)}function c(y,b){let E=i[y.id];E===void 0&&(g(y),E=h(y),i[y.id]=E,y.addEventListener("dispose",M));let P=b.program;n.updateUBOMapping(y,P);let _=t.render.frame;r[y.id]!==_&&(u(y),r[y.id]=_)}function h(y){let b=f();y.__bindingPointIndex=b;let E=s.createBuffer(),P=y.__size,_=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,P,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,E),E}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let b=i[y.id],E=y.uniforms,P=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let _=0,S=E.length;_<S;_++){let R=E[_];if(Array.isArray(R))for(let I=0,F=R.length;I<F;I++)d(R[I],_,I,P);else d(R,_,0,P)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,b,E,P){if(v(y,b,E,P)===!0){let _=y.__offset,S=y.value;if(Array.isArray(S)){let R=0;for(let I=0;I<S.length;I++){let F=S[I],U=p(F);m(F,y.__data,R),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(R+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(S,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,y.__data)}}function m(y,b,E){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,E)}function v(y,b,E,P){let _=y.value,S=b+"_"+E;if(P[S]===void 0)return typeof _=="number"||typeof _=="boolean"?P[S]=_:ArrayBuffer.isView(_)?P[S]=_.slice():P[S]=_.clone(),!0;{let R=P[S];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return P[S]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function g(y){let b=y.uniforms,E=0,P=16;for(let S=0,R=b.length;S<R;S++){let I=Array.isArray(b[S])?b[S]:[b[S]];for(let F=0,U=I.length;F<U;F++){let N=I[F],O=Array.isArray(N.value)?N.value:[N.value];for(let X=0,W=O.length;X<W;X++){let rt=O[X],q=p(rt),j=E%P,tt=j%q.boundary,st=j+tt;E+=tt,st!==0&&P-st<q.storage&&(E+=P-st),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=q.storage}}}let _=E%P;return _>0&&(E+=P-_),y.__size=E,y.__cache={},this}function p(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):ne("WebGLRenderer: Unsupported uniform value type.",y),b}function M(y){let b=y.target;b.removeEventListener("dispose",M);let E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function T(){for(let y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:T}}var Q1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fi=null;function t_(){return fi===null&&(fi=new li(Q1,16,16,Qi,sn),fi.name="DFG_LUT",fi.minFilter=an,fi.magFilter=an,fi.wrapS=ii,fi.wrapT=ii,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}var Fo=class{constructor(t={}){let{canvas:e=Gd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=pn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let v=d,g=new Set([xl,gl,ml]),p=new Set([pn,Kn,dr,Ki,dl,fl]),M=new Uint32Array(4),T=new Int32Array(4),y=new B,b=null,E=null,P=[],_=[],S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,F=null,U=null,N=null,O=null;this._outputColorSpace=on;let X=0,W=0,rt=null,q=-1,j=null,tt=new we,st=new we,pt=null,bt=new Qt(0),ft=0,dt=e.width,x=e.height,A=1,L=null,k=null,Y=new we(0,0,dt,x),gt=new we(0,0,dt,x),Ht=!1,K=new nr,at=!1,mt=!1,lt=new oe,yt=new B,Yt=new we,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function ee(){return rt===null?A:1}let z=n;function Me(C,H){return e.getContext(C,H)}let fe,D,w,V,Z,it,St,Et,ot,ht,Rt,Zt,wt,Tt,kt,jt,ae,G,Ct,ct,Pt,Nt,_t;try{let C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",Ee,!1),e.addEventListener("webglcontextcreationerror",Wn,!1),z===null){let H="webgl2";if(z=Me(H,C),z===null)throw Me(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Kt()}catch(C){throw e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",Wn,!1),re("WebGLRenderer: "+C.message),C}function Kt(){fe=new ax(z),fe.init(),Pt=new Y1(z,fe),D=new jg(z,fe,t,Pt),w=new X1(z,fe),D.reversedDepthBuffer&&u&&w.buffers.depth.setReversed(!0),U=z.createFramebuffer(),N=z.createFramebuffer(),O=z.createFramebuffer(),V=new hx(z),Z=new I1,it=new q1(z,fe,w,Z,D,Pt,V),St=new ox(R),Et=new d0(z),Nt=new Jg(z,Et),ot=new lx(z,Et,V,Nt),ht=new dx(z,ot,Et,Nt,V),G=new ux(z,D,it),kt=new Kg(Z),Rt=new P1(R,St,fe,D,Nt,kt),Zt=new j1(R,Z),wt=new D1,Tt=new z1(fe),ae=new Zg(R,St,w,ht,m,l),jt=new W1(R,ht,D),_t=new K1(z,V,D,w),Ct=new $g(z,fe,V),ct=new cx(z,fe,V),V.programs=Rt.programs,R.capabilities=D,R.extensions=fe,R.properties=Z,R.renderLists=wt,R.shadowMap=jt,R.state=w,R.info=V}v!==pn&&(S=new px(v,e.width,e.height,a,i,r));let qt=new $h(R,z);this.xr=qt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let C=fe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=fe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return A},this.setPixelRatio=function(C){C!==void 0&&(A=C,this.setSize(dt,x,!1))},this.getSize=function(C){return C.set(dt,x)},this.setSize=function(C,H,Q=!0){if(qt.isPresenting){ne("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=C,x=H,e.width=Math.floor(C*A),e.height=Math.floor(H*A),Q===!0&&(e.style.width=C+"px",e.style.height=H+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(dt*A,x*A).floor()},this.setDrawingBufferSize=function(C,H,Q){dt=C,x=H,A=Q,e.width=Math.floor(C*Q),e.height=Math.floor(H*Q),this.setViewport(0,0,C,H)},this.setEffects=function(C){if(v===pn){re("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let H=0;H<C.length;H++)if(C[H].isOutputPass===!0){ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(tt)},this.getViewport=function(C){return C.copy(Y)},this.setViewport=function(C,H,Q,J){C.isVector4?Y.set(C.x,C.y,C.z,C.w):Y.set(C,H,Q,J),w.viewport(tt.copy(Y).multiplyScalar(A).round())},this.getScissor=function(C){return C.copy(gt)},this.setScissor=function(C,H,Q,J){C.isVector4?gt.set(C.x,C.y,C.z,C.w):gt.set(C,H,Q,J),w.scissor(st.copy(gt).multiplyScalar(A).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(C){w.setScissorTest(Ht=C)},this.setOpaqueSort=function(C){L=C},this.setTransparentSort=function(C){k=C},this.getClearColor=function(C){return C.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(C=!0,H=!0,Q=!0){let J=0;if(C){let $=!1;if(rt!==null){let Dt=rt.texture.format;$=g.has(Dt)}if($){let Dt=rt.texture.type,Bt=p.has(Dt),Lt=ae.getClearColor(),Gt=ae.getClearAlpha(),Jt=Lt.r,pe=Lt.g,_e=Lt.b;Bt?(M[0]=Jt,M[1]=pe,M[2]=_e,M[3]=Gt,z.clearBufferuiv(z.COLOR,0,M)):(T[0]=Jt,T[1]=pe,T[2]=_e,T[3]=Gt,z.clearBufferiv(z.COLOR,0,T))}else J|=z.COLOR_BUFFER_BIT}H&&(J|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(J|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&z.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),F=C},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",Wn,!1),ae.dispose(),wt.dispose(),Tt.dispose(),Z.dispose(),St.dispose(),ht.dispose(),Nt.dispose(),_t.dispose(),Rt.dispose(),qt.dispose(),qt.removeEventListener("sessionstart",vu),qt.removeEventListener("sessionend",yu),es.stop()};function Le(C){C.preventDefault(),kr("WebGLRenderer: Context Lost."),I=!0}function Ee(){kr("WebGLRenderer: Context Restored."),I=!1;let C=V.autoReset,H=jt.enabled,Q=jt.autoUpdate,J=jt.needsUpdate,$=jt.type;Kt(),V.autoReset=C,jt.enabled=H,jt.autoUpdate=Q,jt.needsUpdate=J,jt.type=$}function Wn(C){re("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Qn(C){let H=C.target;H.removeEventListener("dispose",Qn),Wf(H)}function Wf(C){Xf(C),Z.remove(C)}function Xf(C){let H=Z.get(C).programs;H!==void 0&&(H.forEach(function(Q){Rt.releaseProgram(Q)}),C.isShaderMaterial&&Rt.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,Q,J,$,Dt){H===null&&(H=zt);let Bt=$.isMesh&&$.matrixWorld.determinantAffine()<0,Lt=Zf(C,H,Q,J,$);w.setMaterial(J,Bt);let Gt=Q.index,Jt=1;if(J.wireframe===!0){if(Gt=ot.getWireframeAttribute(Q),Gt===void 0)return;Jt=2}let pe=Q.drawRange,_e=Q.attributes.position,Vt=pe.start*Jt,Te=(pe.start+pe.count)*Jt;Dt!==null&&(Vt=Math.max(Vt,Dt.start*Jt),Te=Math.min(Te,(Dt.start+Dt.count)*Jt)),Gt!==null?(Vt=Math.max(Vt,0),Te=Math.min(Te,Gt.count)):_e!=null&&(Vt=Math.max(Vt,0),Te=Math.min(Te,_e.count));let $e=Te-Vt;if($e<0||$e===1/0)return;Nt.setup($,J,Lt,Q,Gt);let Ne,Ie=Ct;if(Gt!==null&&(Ne=Et.get(Gt),Ie=ct,Ie.setIndex(Ne)),$.isMesh)J.wireframe===!0?(w.setLineWidth(J.wireframeLinewidth*ee()),Ie.setMode(z.LINES)):Ie.setMode(z.TRIANGLES);else if($.isLine){let cn=J.linewidth;cn===void 0&&(cn=1),w.setLineWidth(cn*ee()),$.isLineSegments?Ie.setMode(z.LINES):$.isLineLoop?Ie.setMode(z.LINE_LOOP):Ie.setMode(z.LINE_STRIP)}else $.isPoints?Ie.setMode(z.POINTS):$.isSprite&&Ie.setMode(z.TRIANGLES);if($.isBatchedMesh)if(fe.get("WEBGL_multi_draw"))Ie.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let cn=$._multiDrawStarts,Ut=$._multiDrawCounts,gn=$._multiDrawCount,Se=Gt?Et.get(Gt).bytesPerElement:1,Fn=Z.get(J).currentProgram.getUniforms();for(let ti=0;ti<gn;ti++)Fn.setValue(z,"_gl_DrawID",ti),Ie.render(cn[ti]/Se,Ut[ti])}else if($.isInstancedMesh)Ie.renderInstances(Vt,$e,$.count);else if(Q.isInstancedBufferGeometry){let cn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ut=Math.min(Q.instanceCount,cn);Ie.renderInstances(Vt,$e,Ut)}else Ie.render(Vt,$e)};function _u(C,H,Q,J){F!==null&&C.isNodeMaterial&&F.setObject(J,C),at===!0&&kt.setState(C,Q,!1),C.transparent===!0&&C.side===Sn&&C.forceSinglePass===!1?(C.side=ln,C.needsUpdate=!0,jo(C,H,J),C.side=$n,C.needsUpdate=!0,jo(C,H,J),C.side=Sn):jo(C,H,J)}this.compile=function(C,H,Q=null){Q===null&&(Q=C),F!==null&&F.renderStart(C,H,Q),E=Tt.get(Q),E.init(H),_.push(E),Q.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),C!==Q&&C.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),mt=this.localClippingEnabled,at=kt.init(this.clippingPlanes,mt),at===!0&&kt.setGlobalState(this.clippingPlanes,H),F!==null&&jt.render(E.state.shadowsArray,Q,H);let J=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Dt=$.material;if(Dt)if(Array.isArray(Dt))for(let Bt=0;Bt<Dt.length;Bt++){let Lt=Dt[Bt];_u(Lt,Q,H,$),J.add(Lt)}else _u(Dt,Q,H,$),J.add(Dt)}),E=_.pop(),F!==null&&F.renderEnd(),J},this.compileAsync=function(C,H,Q=null){let J=this.compile(C,H,Q);return new Promise($=>{function Dt(){if(J.forEach(function(Bt){let Gt=Z.get(Bt).currentProgram;(Gt===void 0||Gt.isReady())&&J.delete(Bt)}),J.size===0){$(C);return}setTimeout(Dt,10)}fe.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let yc=null;function qf(C){yc&&yc(C)}function vu(){es.stop()}function yu(){es.start()}let es=new Sf;es.setAnimationLoop(qf),typeof self<"u"&&es.setContext(self),this.setAnimationLoop=function(C){yc=C,qt.setAnimationLoop(C),C===null?es.stop():es.start()},qt.addEventListener("sessionstart",vu),qt.addEventListener("sessionend",yu),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(C,H);let Q=qt.enabled===!0&&qt.isPresenting===!0,J=S!==null&&(rt===null||Q)&&S.begin(R,rt);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),qt.enabled===!0&&qt.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(qt.cameraAutoUpdate===!0&&qt.updateCamera(H),H=qt.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,H,rt),E=Tt.get(C,_.length),E.init(H),E.state.textureUnits=it.getTextureUnits(),_.push(E),lt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),K.setFromProjectionMatrix(lt,Zn,H.reversedDepth),mt=this.localClippingEnabled,at=kt.init(this.clippingPlanes,mt),b=wt.get(C,P.length),b.init(),P.push(b),qt.enabled===!0&&qt.isPresenting===!0){let Bt=R.xr.getDepthSensingMesh();Bt!==null&&Mc(Bt,H,-1/0,R.sortObjects)}Mc(C,H,0,R.sortObjects),b.finish(),F!==null&&F.updateLights(E.state.lightsArray),R.sortObjects===!0&&b.sort(L,k),$t=qt.enabled===!1||qt.isPresenting===!1||qt.hasDepthSensing()===!1,$t&&ae.addToRenderList(b,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&kt.beginShadows();let $=E.state.shadowsArray;if(jt.render($,C,H),at===!0&&kt.endShadows(),(J&&S.hasRenderPass())===!1){let Bt=b.opaque,Lt=b.transmissive;if(E.setupLights(),H.isArrayCamera){let Gt=H.cameras;if(Lt.length>0)for(let Jt=0,pe=Gt.length;Jt<pe;Jt++){let _e=Gt[Jt];Su(Bt,Lt,C,_e)}$t&&ae.render(C);for(let Jt=0,pe=Gt.length;Jt<pe;Jt++){let _e=Gt[Jt];Mu(b,C,_e,_e.viewport)}}else Lt.length>0&&Su(Bt,Lt,C,H),$t&&ae.render(C),Mu(b,C,H)}rt!==null&&W===0&&(it.updateMultisampleRenderTarget(rt),it.updateRenderTargetMipmap(rt)),J&&S.end(R),C.isScene===!0&&C.onAfterRender(R,C,H),Nt.resetDefaultState(),q=-1,j=null,_.pop(),_.length>0?(E=_[_.length-1],it.setTextureUnits(E.state.textureUnits),at===!0&&kt.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,P.pop(),P.length>0?b=P[P.length-1]:b=null,F!==null&&F.renderEnd()};function Mc(C,H,Q,J){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLightProbeGrid)E.pushLightProbeGrid(C);else if(C.isLight)E.pushLight(C),C.castShadow&&E.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(K)){J&&Yt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(lt);let Bt=ht.update(C),Lt=C.material;Lt.visible&&b.push(C,Bt,Lt,Q,Yt.z,null,H)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(K))){let Bt=ht.update(C),Lt=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Yt.copy(C.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),Yt.copy(Bt.boundingSphere.center)),Yt.applyMatrix4(C.matrixWorld).applyMatrix4(lt)),Array.isArray(Lt)){let Gt=Bt.groups;for(let Jt=0,pe=Gt.length;Jt<pe;Jt++){let _e=Gt[Jt],Vt=Lt[_e.materialIndex];Vt&&Vt.visible&&b.push(C,Bt,Vt,Q,Yt.z,_e,H)}}else Lt.visible&&b.push(C,Bt,Lt,Q,Yt.z,null,H)}}let Dt=C.children;for(let Bt=0,Lt=Dt.length;Bt<Lt;Bt++)Mc(Dt[Bt],H,Q,J)}function Mu(C,H,Q,J){let{opaque:$,transmissive:Dt,transparent:Bt}=C;E.setupLightsView(Q),at===!0&&kt.setGlobalState(R.clippingPlanes,Q),J&&w.viewport(tt.copy(J)),$.length>0&&$o($,H,Q),Dt.length>0&&$o(Dt,H,Q),Bt.length>0&&$o(Bt,H,Q),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Su(C,H,Q,J){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[J.id]===void 0){let Vt=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[J.id]=new qe(1,1,{generateMipmaps:!0,type:Vt?sn:pn,minFilter:ji,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xe.workingColorSpace})}let Dt=E.state.transmissionRenderTarget[J.id],Bt=J.viewport||tt;Dt.setSize(Bt.z*R.transmissionResolutionScale,Bt.w*R.transmissionResolutionScale);let Lt=R.getRenderTarget(),Gt=R.getActiveCubeFace(),Jt=R.getActiveMipmapLevel();R.setRenderTarget(Dt),R.getClearColor(bt),ft=R.getClearAlpha(),ft<1&&R.setClearColor(16777215,.5),R.clear(),$t&&ae.render(Q);let pe=R.toneMapping;R.toneMapping=jn;let _e=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),E.setupLightsView(J),at===!0&&kt.setGlobalState(R.clippingPlanes,J),$o(C,Q,J),it.updateMultisampleRenderTarget(Dt),it.updateRenderTargetMipmap(Dt),fe.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Te=0,$e=H.length;Te<$e;Te++){let Ne=H[Te],{object:Ie,geometry:cn,material:Ut,group:gn}=Ne;if(Ut.side===Sn&&Ie.layers.test(J.layers)){let Se=Ut.side;Ut.side=ln,Ut.needsUpdate=!0,bu(Ie,Q,J,cn,Ut,gn),Ut.side=Se,Ut.needsUpdate=!0,Vt=!0}}Vt===!0&&(it.updateMultisampleRenderTarget(Dt),it.updateRenderTargetMipmap(Dt))}R.setRenderTarget(Lt,Gt,Jt),R.setClearColor(bt,ft),_e!==void 0&&(J.viewport=_e),R.toneMapping=pe}function $o(C,H,Q){let J=H.isScene===!0?H.overrideMaterial:null;for(let $=0,Dt=C.length;$<Dt;$++){let Bt=C[$],{object:Lt,geometry:Gt,group:Jt}=Bt,pe=Bt.material;pe.allowOverride===!0&&J!==null&&(pe=J),Lt.layers.test(Q.layers)&&bu(Lt,H,Q,Gt,pe,Jt)}}function bu(C,H,Q,J,$,Dt){F!==null&&$.isNodeMaterial&&F.setObject(C,$),C.onBeforeRender(R,H,Q,J,$,Dt),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(R,H,Q,J,C,Dt),$.transparent===!0&&$.side===Sn&&$.forceSinglePass===!1?($.side=ln,$.needsUpdate=!0,R.renderBufferDirect(Q,H,J,$,C,Dt),$.side=$n,$.needsUpdate=!0,R.renderBufferDirect(Q,H,J,$,C,Dt),$.side=Sn):R.renderBufferDirect(Q,H,J,$,C,Dt),C.onAfterRender(R,H,Q,J,$,Dt)}function jo(C,H,Q){H.isScene!==!0&&(H=zt);let J=Z.get(C),$=E.state.lights,Dt=E.state.shadowsArray,Bt=$.state.version,Lt=Rt.getParameters(C,$.state,Dt,H,Q,E.state.lightProbeGridArray),Gt=Rt.getProgramCacheKey(Lt),Jt=J.programs;J.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?H.environment:null,J.fog=H.fog;let pe=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;J.envMap=St.get(C.envMap||J.environment,pe),J.envMapRotation=J.environment!==null&&C.envMap===null?H.environmentRotation:C.envMapRotation,Jt===void 0&&(C.addEventListener("dispose",Qn),Jt=new Map,J.programs=Jt);let _e=Jt.get(Gt);if(_e!==void 0){if(J.currentProgram===_e&&J.lightsStateVersion===Bt)return Tu(C,Lt),_e}else Lt.uniforms=Rt.getUniforms(C),F!==null&&C.isNodeMaterial&&F.build(C,Q,Lt),C.onBeforeCompile(Lt,R),_e=Rt.acquireProgram(Lt,Gt),Jt.set(Gt,_e),J.uniforms=Lt.uniforms;let Vt=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Vt.clippingPlanes=kt.uniform),Tu(C,Lt),J.needsLights=$f(C),J.lightsStateVersion=Bt,J.needsLights&&(Vt.ambientLightColor.value=$.state.ambient,Vt.lightProbe.value=$.state.probe,Vt.sunLights.value=$.state.sun,Vt.sunLightShadows.value=$.state.sunShadow,Vt.directionalLights.value=$.state.directional,Vt.directionalLightShadows.value=$.state.directionalShadow,Vt.spotLights.value=$.state.spot,Vt.spotLightShadows.value=$.state.spotShadow,Vt.rectAreaLights.value=$.state.rectArea,Vt.ltc_1.value=$.state.rectAreaLTC1,Vt.ltc_2.value=$.state.rectAreaLTC2,Vt.pointLights.value=$.state.point,Vt.pointLightShadows.value=$.state.pointShadow,Vt.hemisphereLights.value=$.state.hemi,Vt.sunShadowMatrix.value=$.state.sunShadowMatrix,Vt.sunShadowCascade.value=$.state.sunShadowCascade,Vt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Vt.spotLightMatrix.value=$.state.spotLightMatrix,Vt.spotLightMap.value=$.state.spotLightMap,Vt.pointShadowMatrix.value=$.state.pointShadowMatrix),J.lightProbeGrid=E.state.lightProbeGridArray.length>0,J.currentProgram=_e,J.uniformsList=null,_e}function Eu(C){if(C.uniformsList===null){let H=C.currentProgram.getUniforms();C.uniformsList=gr.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function Tu(C,H){let Q=Z.get(C);Q.outputColorSpace=H.outputColorSpace,Q.batching=H.batching,Q.batchingColor=H.batchingColor,Q.instancing=H.instancing,Q.instancingColor=H.instancingColor,Q.instancingMorph=H.instancingMorph,Q.skinning=H.skinning,Q.morphTargets=H.morphTargets,Q.morphNormals=H.morphNormals,Q.morphColors=H.morphColors,Q.morphTargetsCount=H.morphTargetsCount,Q.numClippingPlanes=H.numClippingPlanes,Q.numIntersection=H.numClipIntersection,Q.vertexAlphas=H.vertexAlphas,Q.vertexTangents=H.vertexTangents,Q.toneMapping=H.toneMapping}function Yf(C,H){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;y.setFromMatrixPosition(H.matrixWorld);for(let Q=0,J=C.length;Q<J;Q++){let $=C[Q];if($.texture!==null&&$.boundingBox.containsPoint(y))return $}return null}function Zf(C,H,Q,J,$){H.isScene!==!0&&(H=zt),it.resetTextureUnits();let Dt=H.fog,Bt=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?H.environment:null,Lt=rt===null?R.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:xe.workingColorSpace,Gt=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Jt=St.get(J.envMap||Bt,Gt),pe=J.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,_e=!!Q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Vt=!!Q.morphAttributes.position,Te=!!Q.morphAttributes.normal,$e=!!Q.morphAttributes.color,Ne=jn;J.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Ne=R.toneMapping);let Ie=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,cn=Ie!==void 0?Ie.length:0,Ut=Z.get(J),gn=E.state.lights;if(at===!0&&(mt===!0||C!==j)){let De=C===j&&J.id===q;kt.setState(J,C,De)}let Se=!1;J.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==gn.state.version||Ut.outputColorSpace!==Lt||$.isBatchedMesh&&Ut.batching===!1||!$.isBatchedMesh&&Ut.batching===!0||$.isBatchedMesh&&Ut.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Ut.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Ut.instancing===!1||!$.isInstancedMesh&&Ut.instancing===!0||$.isSkinnedMesh&&Ut.skinning===!1||!$.isSkinnedMesh&&Ut.skinning===!0||$.isInstancedMesh&&Ut.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ut.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ut.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ut.instancingMorph===!1&&$.morphTexture!==null||Ut.envMap!==Jt||J.fog===!0&&Ut.fog!==Dt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==kt.numPlanes||Ut.numIntersection!==kt.numIntersection)||Ut.vertexAlphas!==pe||Ut.vertexTangents!==_e||Ut.morphTargets!==Vt||Ut.morphNormals!==Te||Ut.morphColors!==$e||Ut.toneMapping!==Ne||Ut.morphTargetsCount!==cn||!!Ut.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Se=!0):(Se=!0,Ut.__version=J.version);let Fn=Ut.currentProgram;Se===!0&&(Fn=jo(J,H,$),F&&J.isNodeMaterial&&F.onUpdateProgram(J,Fn,Ut));let ti=!1,Ii=!1,ws=!1,Ae=Fn.getUniforms(),We=Ut.uniforms;if(w.useProgram(Fn.program)&&(ti=!0,Ii=!0,ws=!0),J.id!==q&&(q=J.id,Ii=!0),Ut.needsLights){let De=Yf(E.state.lightProbeGridArray,$);Ut.lightProbeGrid!==De&&(Ut.lightProbeGrid=De,Ii=!0)}if(ti||j!==C){w.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ae.setValue(z,"projectionMatrix",C.projectionMatrix),Ae.setValue(z,"viewMatrix",C.matrixWorldInverse);let Di=Ae.map.cameraPosition;Di!==void 0&&Di.setValue(z,yt.setFromMatrixPosition(C.matrixWorld)),D.logarithmicDepthBuffer&&Ae.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ae.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),j!==C&&(j=C,Ii=!0,ws=!0)}if(Ut.needsLights&&(gn.state.sunShadowMap.length>0&&Ae.setValue(z,"sunShadowMap",gn.state.sunShadowMap,it),gn.state.directionalShadowMap.length>0&&Ae.setValue(z,"directionalShadowMap",gn.state.directionalShadowMap,it),gn.state.spotShadowMap.length>0&&Ae.setValue(z,"spotShadowMap",gn.state.spotShadowMap,it),gn.state.pointShadowMap.length>0&&Ae.setValue(z,"pointShadowMap",gn.state.pointShadowMap,it)),$.isSkinnedMesh){Ae.setOptional(z,$,"bindMatrix"),Ae.setOptional(z,$,"bindMatrixInverse");let De=$.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),Ae.setValue(z,"boneTexture",De.boneTexture,it))}$.isBatchedMesh&&(Ae.setOptional(z,$,"batchingTexture"),Ae.setValue(z,"batchingTexture",$._matricesTexture,it),Ae.setOptional(z,$,"batchingIdTexture"),Ae.setValue(z,"batchingIdTexture",$._indirectTexture,it),Ae.setOptional(z,$,"batchingColorTexture"),$._colorsTexture!==null&&Ae.setValue(z,"batchingColorTexture",$._colorsTexture,it));let Li=Q.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&G.update($,Q,Fn),(Ii||Ut.receiveShadow!==$.receiveShadow)&&(Ut.receiveShadow=$.receiveShadow,Ae.setValue(z,"receiveShadow",$.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&H.environment!==null&&(We.envMapIntensity.value=H.environmentIntensity),We.dfgLUT!==void 0&&(We.dfgLUT.value=t_()),Ii){if(Ae.setValue(z,"toneMappingExposure",R.toneMappingExposure),Ut.needsLights&&Jf(We,ws),Dt&&J.fog===!0&&Zt.refreshFogUniforms(We,Dt),Zt.refreshMaterialUniforms(We,J,A,x,E.state.transmissionRenderTarget[C.id]),Ut.needsLights&&Ut.lightProbeGrid){let De=Ut.lightProbeGrid;We.probesSH.value=De.texture,We.probesMin.value.copy(De.boundingBox.min),We.probesMax.value.copy(De.boundingBox.max),We.probesResolution.value.copy(De.resolution)}gr.upload(z,Eu(Ut),We,it)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(gr.upload(z,Eu(Ut),We,it),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ae.setValue(z,"center",$.center),Ae.setValue(z,"modelViewMatrix",$.modelViewMatrix),Ae.setValue(z,"normalMatrix",$.normalMatrix),Ae.setValue(z,"modelMatrix",$.matrixWorld),J.uniformsGroups!==void 0){let De=J.uniformsGroups;for(let Di=0,As=De.length;Di<As;Di++){let Au=De[Di];_t.update(Au,Fn),_t.bind(Au,Fn)}}return Fn}function Jf(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.sunLights.needsUpdate=H,C.sunLightShadows.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function $f(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(C,H,Q){let J=Z.get(C);J.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Z.get(C.texture).__webglTexture=H,Z.get(C.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Q,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,H){let Q=Z.get(C);Q.__webglFramebuffer=H,Q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(C,H=0,Q=0){rt=C,X=H,W=Q;let J=null,$=!1,Dt=!1;if(C){let Lt=Z.get(C);if(Lt.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(z.FRAMEBUFFER,Lt.__webglFramebuffer),tt.copy(C.viewport),st.copy(C.scissor),pt=C.scissorTest,w.viewport(tt),w.scissor(st),w.setScissorTest(pt),q=-1;return}else if(Lt.__webglFramebuffer===void 0)it.setupRenderTarget(C);else if(Lt.__hasExternalTextures)it.rebindTextures(C,Z.get(C.texture).__webglTexture,Z.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let pe=C.depthTexture;if(Lt.__boundDepthTexture!==pe){if(pe!==null&&Z.has(pe)&&(C.width!==pe.image.width||C.height!==pe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(C)}}let Gt=C.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Dt=!0);let Jt=Z.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Jt[H])?J=Jt[H][Q]:J=Jt[H],$=!0):C.samples>0&&it.useMultisampledRTT(C)===!1?J=Z.get(C).__webglMultisampledFramebuffer:Array.isArray(Jt)?J=Jt[Q]:J=Jt,tt.copy(C.viewport),st.copy(C.scissor),pt=C.scissorTest}else tt.copy(Y).multiplyScalar(A).floor(),st.copy(gt).multiplyScalar(A).floor(),pt=Ht;if(Q!==0&&(J=U),w.bindFramebuffer(z.FRAMEBUFFER,J)&&w.drawBuffers(C,J),w.viewport(tt),w.scissor(st),w.setScissorTest(pt),$){let Lt=Z.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+H,Lt.__webglTexture,Q)}else if(Dt){let Lt=H;for(let Gt=0;Gt<C.textures.length;Gt++){let Jt=Z.get(C.textures[Gt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Gt,Jt.__webglTexture,Q,Lt)}}else if(C!==null&&Q!==0){let Lt=Z.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Lt.__webglTexture,Q)}q=-1};function wu(C){let H=Z.get(C);return(H.__readFormat!==C.format||H.__readType!==C.type)&&(H.__readFormat=C.format,H.__readType=C.type,H.__formatReadable=D.textureFormatReadable(C.format),H.__typeReadable=D.textureTypeReadable(C.type)),H}this.readRenderTargetPixels=function(C,H,Q,J,$,Dt,Bt,Lt=0){if(!(C&&C.isWebGLRenderTarget)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=Z.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Bt!==void 0&&(Gt=Gt[Bt]),Gt){w.bindFramebuffer(z.FRAMEBUFFER,Gt);try{let Jt=C.textures[Lt],pe=Jt.format,_e=Jt.type;C.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Lt);let Vt=wu(Jt);if(Vt.__formatReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Vt.__typeReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-J&&Q>=0&&Q<=C.height-$&&z.readPixels(H,Q,J,$,Pt.convert(pe),Pt.convert(_e),Dt)}finally{let Jt=rt!==null?Z.get(rt).__webglFramebuffer:null;w.bindFramebuffer(z.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(C,H,Q,J,$,Dt,Bt,Lt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=Z.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Bt!==void 0&&(Gt=Gt[Bt]),Gt)if(H>=0&&H<=C.width-J&&Q>=0&&Q<=C.height-$){w.bindFramebuffer(z.FRAMEBUFFER,Gt);let Jt=C.textures[Lt],pe=Jt.format,_e=Jt.type;C.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Lt);let Vt=wu(Jt);if(Vt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Vt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Te=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Te),z.bufferData(z.PIXEL_PACK_BUFFER,Dt.byteLength,z.STREAM_READ),z.readPixels(H,Q,J,$,Pt.convert(pe),Pt.convert(_e),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let $e=rt!==null?Z.get(rt).__webglFramebuffer:null;w.bindFramebuffer(z.FRAMEBUFFER,$e);let Ne=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Wd(z,Ne,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Te),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Dt),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Te),z.deleteSync(Ne),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,H=null,Q=0){let J=Math.pow(2,-Q),$=Math.floor(C.image.width*J),Dt=Math.floor(C.image.height*J),Bt=H!==null?H.x:0,Lt=H!==null?H.y:0;it.setTexture2D(C,0),z.copyTexSubImage2D(z.TEXTURE_2D,Q,0,0,Bt,Lt,$,Dt),w.unbindTexture()},this.copyTextureToTexture=function(C,H,Q=null,J=null,$=0,Dt=0){let Bt,Lt,Gt,Jt,pe,_e,Vt,Te,$e,Ne=C.isCompressedTexture?C.mipmaps[Dt]:C.image;if(Q!==null)Bt=Q.max.x-Q.min.x,Lt=Q.max.y-Q.min.y,Gt=Q.isBox3?Q.max.z-Q.min.z:1,Jt=Q.min.x,pe=Q.min.y,_e=Q.isBox3?Q.min.z:0;else{let We=Math.pow(2,-$);Bt=Math.floor(Ne.width*We),Lt=Math.floor(Ne.height*We),C.isDataArrayTexture?Gt=Ne.depth:C.isData3DTexture?Gt=Math.floor(Ne.depth*We):Gt=1,Jt=0,pe=0,_e=0}J!==null?(Vt=J.x,Te=J.y,$e=J.z):(Vt=0,Te=0,$e=0);let Ie=Pt.convert(H.format),cn=Pt.convert(H.type),Ut;H.isData3DTexture?(it.setTexture3D(H,0),Ut=z.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(it.setTexture2DArray(H,0),Ut=z.TEXTURE_2D_ARRAY):(it.setTexture2D(H,0),Ut=z.TEXTURE_2D),w.activeTexture(z.TEXTURE0),w.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),w.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),w.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);let gn=w.getParameter(z.UNPACK_ROW_LENGTH),Se=w.getParameter(z.UNPACK_IMAGE_HEIGHT),Fn=w.getParameter(z.UNPACK_SKIP_PIXELS),ti=w.getParameter(z.UNPACK_SKIP_ROWS),Ii=w.getParameter(z.UNPACK_SKIP_IMAGES);w.pixelStorei(z.UNPACK_ROW_LENGTH,Ne.width),w.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ne.height),w.pixelStorei(z.UNPACK_SKIP_PIXELS,Jt),w.pixelStorei(z.UNPACK_SKIP_ROWS,pe),w.pixelStorei(z.UNPACK_SKIP_IMAGES,_e);let ws=C.isDataArrayTexture||C.isData3DTexture,Ae=H.isDataArrayTexture||H.isData3DTexture;if(C.isDepthTexture){let We=Z.get(C),Li=Z.get(H),De=Z.get(We.__renderTarget),Di=Z.get(Li.__renderTarget);w.bindFramebuffer(z.READ_FRAMEBUFFER,De.__webglFramebuffer),w.bindFramebuffer(z.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let As=0;As<Gt;As++)ws&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Z.get(C).__webglTexture,$,_e+As),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Z.get(H).__webglTexture,Dt,$e+As)),z.blitFramebuffer(Jt,pe,Bt,Lt,Vt,Te,Bt,Lt,z.DEPTH_BUFFER_BIT,z.NEAREST);w.bindFramebuffer(z.READ_FRAMEBUFFER,null),w.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||Z.has(C)){let We=Z.get(C),Li=Z.get(H);w.bindFramebuffer(z.READ_FRAMEBUFFER,N),w.bindFramebuffer(z.DRAW_FRAMEBUFFER,O);for(let De=0;De<Gt;De++)ws?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,We.__webglTexture,$,_e+De):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,We.__webglTexture,$),Ae?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Li.__webglTexture,Dt,$e+De):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Li.__webglTexture,Dt),$!==0?z.blitFramebuffer(Jt,pe,Bt,Lt,Vt,Te,Bt,Lt,z.COLOR_BUFFER_BIT,z.NEAREST):Ae?z.copyTexSubImage3D(Ut,Dt,Vt,Te,$e+De,Jt,pe,Bt,Lt):z.copyTexSubImage2D(Ut,Dt,Vt,Te,Jt,pe,Bt,Lt);w.bindFramebuffer(z.READ_FRAMEBUFFER,null),w.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ae?C.isDataTexture||C.isData3DTexture?z.texSubImage3D(Ut,Dt,Vt,Te,$e,Bt,Lt,Gt,Ie,cn,Ne.data):H.isCompressedArrayTexture?z.compressedTexSubImage3D(Ut,Dt,Vt,Te,$e,Bt,Lt,Gt,Ie,Ne.data):z.texSubImage3D(Ut,Dt,Vt,Te,$e,Bt,Lt,Gt,Ie,cn,Ne):C.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Dt,Vt,Te,Bt,Lt,Ie,cn,Ne.data):C.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Dt,Vt,Te,Ne.width,Ne.height,Ie,Ne.data):z.texSubImage2D(z.TEXTURE_2D,Dt,Vt,Te,Bt,Lt,Ie,cn,Ne);w.pixelStorei(z.UNPACK_ROW_LENGTH,gn),w.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Se),w.pixelStorei(z.UNPACK_SKIP_PIXELS,Fn),w.pixelStorei(z.UNPACK_SKIP_ROWS,ti),w.pixelStorei(z.UNPACK_SKIP_IMAGES,Ii),Dt===0&&H.generateMipmaps&&z.generateMipmap(Ut),w.unbindTexture()},this.initRenderTarget=function(C){Z.get(C).__webglFramebuffer===void 0&&it.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?it.setTextureCube(C,0):C.isData3DTexture?it.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?it.setTexture2DArray(C,0):it.setTexture2D(C,0),w.unbindTexture()},this.resetState=function(){X=0,W=0,rt=null,w.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}};var No=new B;function zn(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;No.copy(t),No[n]=0,No.normalize();let c=.5*o/(o+a),h=1-No.angleTo(s)/l;return Math.sign(No[e])===1?h*c:a/(o+a)+c+c*(1-h)}var vs=class s extends Mn{constructor(t=1,e=1,n=1,i=2,r=.1){let o=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new B,c=new B,h=new B(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,m=f.length/6,v=new B,g=.5/o;for(let p=0,M=0;p<f.length;p+=3,M+=2)switch(l.fromArray(f,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),f[p+0]=h.x*Math.sign(l.x)+c.x*r,f[p+1]=h.y*Math.sign(l.y)+c.y*r,f[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/m)){case 0:v.set(1,0,0),d[M+0]=zn(v,c,"z","y",r,n),d[M+1]=1-zn(v,c,"y","z",r,e);break;case 1:v.set(-1,0,0),d[M+0]=1-zn(v,c,"z","y",r,n),d[M+1]=1-zn(v,c,"y","z",r,e);break;case 2:v.set(0,1,0),d[M+0]=1-zn(v,c,"x","z",r,t),d[M+1]=zn(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),d[M+0]=1-zn(v,c,"x","z",r,t),d[M+1]=1-zn(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),d[M+0]=1-zn(v,c,"x","y",r,t),d[M+1]=1-zn(v,c,"y","x",r,e);break;case 5:v.set(0,0,-1),d[M+0]=zn(v,c,"x","y",r,t),d[M+1]=1-zn(v,c,"y","x",r,e);break}}static fromJSON(t){return new s(t.width,t.height,t.depth,t.segments,t.radius)}};var Uo=class extends zi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Mn;t.deleteAttribute("uv");let e=new ve({side:ln}),n=new ve,i=new ui(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new ye(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new cs(t,n,6),a=new Ce;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new ye(t,_r(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ye(t,_r(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new ye(t,_r(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new ye(t,_r(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new ye(t,_r(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new ye(t,_r(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function _r(s){return new lo({color:0,emissive:16777215,emissiveIntensity:s})}function Pf(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Pe,c=0;for(let h=0;h<s.length;++h){let f=s[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,f=[];for(let u=0;u<s.length;++u){let d=s[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=s[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=Cf(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let v=0;v<o[h].length;++v)d.push(o[h][v][u]);let m=Cf(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Cf(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new dn(o,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let f=l/e;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<e;m++){let v=h.getComponent(u,m);a.setComponent(u+f,m,v)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function jh(s,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count,o=0,a=Object.keys(s.attributes),l={},c={},h=[],f=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let M=0,T=a.length;M<T;M++){let y=a[M],b=s.attributes[y];l[y]=new b.constructor(new b.array.constructor(b.count*b.itemSize),b.itemSize,b.normalized);let E=s.morphAttributes[y];E&&(c[y]||(c[y]=[]),E.forEach((P,_)=>{let S=new P.array.constructor(P.count*P.itemSize);c[y][_]=new P.constructor(S,P.itemSize,P.normalized)}))}let d=t*.5,m=Math.log10(1/t),v=Math.pow(10,m),g=d*v;for(let M=0;M<r;M++){let T=n?n.getX(M):M,y="";for(let b=0,E=a.length;b<E;b++){let P=a[b],_=s.getAttribute(P),S=_.itemSize;for(let R=0;R<S;R++)y+=`${Math.trunc(_[f[R]](T)*v+g)},`}if(y in e)h.push(e[y]);else{for(let b=0,E=a.length;b<E;b++){let P=a[b],_=s.getAttribute(P),S=s.morphAttributes[P],R=_.itemSize,I=l[P],F=c[P];for(let U=0;U<R;U++){let N=f[U],O=u[U];if(I[O](o,_[N](T)),S)for(let X=0,W=S.length;X<W;X++)F[X][O](o,S[X][N](T))}}e[y]=o,h.push(o),o++}}let p=s.clone();for(let M in s.attributes){let T=l[M];if(p.setAttribute(M,new T.constructor(T.array.slice(0,o*T.itemSize),T.itemSize,T.normalized)),M in c)for(let y=0;y<c[M].length;y++){let b=c[M][y];p.morphAttributes[M][y]=new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)}}return p.setIndex(h),p}var vr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Pn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},n_=new qi(-1,1,1,-1,0,1),Kh=class extends Pe{constructor(){super(),this.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new le([0,2,0,0,2,0],2))}},i_=new Kh,ts=class{constructor(t){this._mesh=new ye(i_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,n_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ec=class extends Pn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof He?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=On.clone(t.uniforms),this.material=new He({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new ts(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Bo=class extends Pn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},nc=class extends Pn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ic=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new xt);this._width=n.width,this._height=n.height,e=new qe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:sn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ec(vr),this.copyPass.material.blending=Je,this.timer=new fo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Bo!==void 0&&(o instanceof Bo?n=!0:o instanceof nc&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new xt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var sc=class extends Pn{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Qt}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var Oo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new xt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new oe},cameraProjectionMatrixInverse:{value:new oe},cameraWorldMatrix:{value:new oe},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new B(-1,-1,-1)},sceneBoxMax:{value:new B(1,1,1)}},vertexShader:`

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
		}`};function If(s=5){let t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=s_(t),n=e.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=e[o],l=2*Math.PI*a/n,c=new B(Math.cos(l),Math.sin(l),0).normalize();i[o*4]=(c.x*.5+.5)*255,i[o*4+1]=(c.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}let r=new li(i,t,t);return r.wrapS=wn,r.wrapT=wn,r.needsUpdate=!0,r}function s_(s){let t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=t*t,n=Array(e).fill(0),i=Math.floor(t/2),r=t-1;for(let o=1;o<=e;){if(i===-1&&r===t?(r=t-2,i=0):(r===t&&(r=0),i<0&&(i=t-1)),n[i*t+r]!==0){r-=2,i++;continue}else n[i*t+r]=o++;r++,i--}return n}var ko={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Qh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new xt},cameraProjectionMatrixInverse:{value:new oe},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Qh(s,t,e){let n=r_(s,t,e),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let o=n[r];i+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return i}function r_(s,t,e){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*t*i/s,o=Math.pow(i/(s-1),e);n.push(new B(Math.cos(r),Math.sin(r),o))}return n}var oc=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,i,r,o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,f=(l+c)*h,u=l-f,d=c-f,m=t-u,v=e-d,g,p;m>v?(g=1,p=0):(g=0,p=1);let M=m-g+h,T=v-p+h,y=m-1+2*h,b=v-1+2*h,E=l&255,P=c&255,_=this.perm[E+this.perm[P]]%12,S=this.perm[E+g+this.perm[P+p]]%12,R=this.perm[E+1+this.perm[P+1]]%12,I=.5-m*m-v*v;I<0?n=0:(I*=I,n=I*I*this._dot(this.grad3[_],m,v));let F=.5-M*M-T*T;F<0?i=0:(F*=F,i=F*F*this._dot(this.grad3[S],M,T));let U=.5-y*y-b*b;return U<0?r=0:(U*=U,r=U*U*this._dot(this.grad3[R],y,b)),70*(n+i+r)}noise3d(t,e,n){let i,r,o,a,c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),f=Math.floor(e+c),u=Math.floor(n+c),d=1/6,m=(h+f+u)*d,v=h-m,g=f-m,p=u-m,M=t-v,T=e-g,y=n-p,b,E,P,_,S,R;M>=T?T>=y?(b=1,E=0,P=0,_=1,S=1,R=0):M>=y?(b=1,E=0,P=0,_=1,S=0,R=1):(b=0,E=0,P=1,_=1,S=0,R=1):T<y?(b=0,E=0,P=1,_=0,S=1,R=1):M<y?(b=0,E=1,P=0,_=0,S=1,R=1):(b=0,E=1,P=0,_=1,S=1,R=0);let I=M-b+d,F=T-E+d,U=y-P+d,N=M-_+2*d,O=T-S+2*d,X=y-R+2*d,W=M-1+3*d,rt=T-1+3*d,q=y-1+3*d,j=h&255,tt=f&255,st=u&255,pt=this.perm[j+this.perm[tt+this.perm[st]]]%12,bt=this.perm[j+b+this.perm[tt+E+this.perm[st+P]]]%12,ft=this.perm[j+_+this.perm[tt+S+this.perm[st+R]]]%12,dt=this.perm[j+1+this.perm[tt+1+this.perm[st+1]]]%12,x=.6-M*M-T*T-y*y;x<0?i=0:(x*=x,i=x*x*this._dot3(this.grad3[pt],M,T,y));let A=.6-I*I-F*F-U*U;A<0?r=0:(A*=A,r=A*A*this._dot3(this.grad3[bt],I,F,U));let L=.6-N*N-O*O-X*X;L<0?o=0:(L*=L,o=L*L*this._dot3(this.grad3[ft],N,O,X));let k=.6-W*W-rt*rt-q*q;return k<0?a=0:(k*=k,a=k*k*this._dot3(this.grad3[dt],W,rt,q)),32*(i+r+o+a)}noise4d(t,e,n,i){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,f,u,d,m,v=(t+e+n+i)*l,g=Math.floor(t+v),p=Math.floor(e+v),M=Math.floor(n+v),T=Math.floor(i+v),y=(g+p+M+T)*c,b=g-y,E=p-y,P=M-y,_=T-y,S=t-b,R=e-E,I=n-P,F=i-_,U=S>R?32:0,N=S>I?16:0,O=R>I?8:0,X=S>F?4:0,W=R>F?2:0,rt=I>F?1:0,q=U+N+O+X+W+rt,j=o[q][0]>=3?1:0,tt=o[q][1]>=3?1:0,st=o[q][2]>=3?1:0,pt=o[q][3]>=3?1:0,bt=o[q][0]>=2?1:0,ft=o[q][1]>=2?1:0,dt=o[q][2]>=2?1:0,x=o[q][3]>=2?1:0,A=o[q][0]>=1?1:0,L=o[q][1]>=1?1:0,k=o[q][2]>=1?1:0,Y=o[q][3]>=1?1:0,gt=S-j+c,Ht=R-tt+c,K=I-st+c,at=F-pt+c,mt=S-bt+2*c,lt=R-ft+2*c,yt=I-dt+2*c,Yt=F-x+2*c,zt=S-A+3*c,$t=R-L+3*c,ee=I-k+3*c,z=F-Y+3*c,Me=S-1+4*c,fe=R-1+4*c,D=I-1+4*c,w=F-1+4*c,V=g&255,Z=p&255,it=M&255,St=T&255,Et=a[V+a[Z+a[it+a[St]]]]%32,ot=a[V+j+a[Z+tt+a[it+st+a[St+pt]]]]%32,ht=a[V+bt+a[Z+ft+a[it+dt+a[St+x]]]]%32,Rt=a[V+A+a[Z+L+a[it+k+a[St+Y]]]]%32,Zt=a[V+1+a[Z+1+a[it+1+a[St+1]]]]%32,wt=.6-S*S-R*R-I*I-F*F;wt<0?h=0:(wt*=wt,h=wt*wt*this._dot4(r[Et],S,R,I,F));let Tt=.6-gt*gt-Ht*Ht-K*K-at*at;Tt<0?f=0:(Tt*=Tt,f=Tt*Tt*this._dot4(r[ot],gt,Ht,K,at));let kt=.6-mt*mt-lt*lt-yt*yt-Yt*Yt;kt<0?u=0:(kt*=kt,u=kt*kt*this._dot4(r[ht],mt,lt,yt,Yt));let jt=.6-zt*zt-$t*$t-ee*ee-z*z;jt<0?d=0:(jt*=jt,d=jt*jt*this._dot4(r[Rt],zt,$t,ee,z));let ae=.6-Me*Me-fe*fe-D*D-w*w;return ae<0?m=0:(ae*=ae,m=ae*ae*this._dot4(r[Zt],Me,fe,D,w)),27*(h+f+u+d+m)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,i){return t[0]*e+t[1]*n+t[2]*i}_dot4(t,e,n,i,r){return t[0]*e+t[1]*n+t[2]*i+t[3]*r}};var Ho=class s extends Pn{constructor(t,e,n=512,i=512,r,o,a){super(),this.width=n,this.height=i,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=If(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new qe(this.width,this.height,{type:sn,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new He({defines:Object.assign({},Oo.defines),uniforms:On.clone(Oo.uniforms),vertexShader:Oo.vertexShader,fragmentShader:Oo.fragmentShader,blending:Je,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ao,this.normalMaterial.blending=Je,this.pdMaterial=new He({defines:Object.assign({},ko.defines),uniforms:On.clone(ko.uniforms),vertexShader:ko.vertexShader,fragmentShader:ko.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new He({defines:Object.assign({},zo.defines),uniforms:On.clone(zo.uniforms),vertexShader:zo.vertexShader,fragmentShader:zo.fragmentShader,blending:Je}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new He({uniforms:On.clone(vr.uniforms),vertexShader:vr.vertexShader,fragmentShader:vr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:go,blendDst:ps,blendEquation:Bn,blendSrcAlpha:mo,blendDstAlpha:ps,blendEquationAlpha:Bn}),this.blendMaterial=new He({uniforms:On.clone(rc.uniforms),vertexShader:rc.vertexShader,fragmentShader:rc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ol,blendSrc:go,blendDst:ps,blendEquation:Bn,blendSrcAlpha:mo,blendDstAlpha:ps,blendEquationAlpha:Bn}),this._fsQuad=new ts(null),this._originalClearColor=new Qt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new ci,this.depthTexture.format=di,this.depthTexture.type=Ki,this.normalRenderTarget=new qe(this.width,this.height,{minFilter:Xe,magFilter:Xe,type:sn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Qh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,i,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_renderOverride(t,e,n,i,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i=e.clearColor||i,r=e.clearAlpha||r,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new oc,n=t*t*4,i=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let l=o,c=a;i[(o*t+a)*4]=(e.noise(l,c)*.5+.5)*255,i[(o*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,i[(o*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,i[(o*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let r=new li(i,t,t,vn,pn);return r.wrapS=wn,r.wrapT=wn,r.needsUpdate=!0,r}};Ho.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Go={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ac=class extends Pn{constructor(){super(),this.isOutputPass=!0,this.uniforms=On.clone(Go.uniforms),this.material=new lr({name:Go.name,uniforms:this.uniforms,vertexShader:Go.vertexShader,fragmentShader:Go.fragmentShader}),this._fsQuad=new ts(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},xe.getTransfer(this._outputColorSpace)===be&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===xo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_o?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===vo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ji?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Mo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===So?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===yo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var nt=Math.PI,se=nt*2,te=(s,t=0,e=1)=>Math.min(e,Math.max(t,s)),vt=(s,t,e)=>s+(t-s)*e,ce=s=>(s=te(s),s*s*(3-2*s)),fc=s=>(s=te(s),s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2),Es=s=>1-Math.pow(1-te(s),3),ie=(s,t,e)=>te((s-t)/(e-t)),Wt=(s,t,e,n=.35)=>ce((s-t)/n)*ce((e-s)/n),Hn=(s,t)=>((t-s+nt)%se+se)%se-nt,qo=(s,t,e)=>s+Hn(s,t)*e,Yo=(s,t)=>Math.atan2(t[0]-s[0],t[1]-s[1]),Mt=(s,t,e)=>new B(s,t,e),Ri=s=>{let t=Math.sin(s*127.1+311.7)*43758.5453;return t-Math.floor(t)},ys=(s,t,e)=>"#"+new Qt(s).lerp(new Qt(t),e).getHexString(),Ge=9,Ve=7.5,ze=3,yn=.18,Vn=new Map;function et(s,t={}){let e=s+JSON.stringify(t);if(Vn.has(e))return Vn.get(e);let n=new ve({color:s,roughness:t.r??.75,metalness:t.m??0,emissive:t.e||"#000000",emissiveIntensity:t.ei??1,transparent:!!t.op,opacity:t.op??1,flatShading:!!t.flat,side:t.ds?Sn:$n});return Vn.set(e,n),n}var o_=(s,t={})=>new Ye({color:s,toneMapped:!1,transparent:!!t.op||!!t.map,opacity:t.op??1,map:t.map||null,blending:t.add?Zi:Ti,depthWrite:!t.add,side:t.ds?Sn:$n});function In(s,t=!0,e=!0){return s.traverse(n=>{n.isMesh&&(n.castShadow=t,n.receiveShadow=e)}),s}function Ot(s,t,e,n=0,i=0,r=0,o={}){let a=new ye(s,t);return a.position.set(n,i,r),o.rx&&(a.rotation.x=o.rx),o.ry&&(a.rotation.y=o.ry),o.rz&&(a.rotation.z=o.rz),o.s&&a.scale.set(...Array.isArray(o.s)?o.s:[o.s,o.s,o.s]),a.castShadow=o.cast!==!1,a.receiveShadow=o.recv!==!1,e&&e.add(a),a}function ut(s,t,e,n,i=.015,r={}){let o=n[0]-e[0],a=n[1]-e[1],l=n[2]-e[2],c=Math.min(i,o/2-.001,a/2-.001,l/2-.001),h=c>.002?new vs(o,a,l,3,c):new Mn(o,a,l);return Ot(h,t,s,(e[0]+n[0])/2,(e[1]+n[1])/2,(e[2]+n[2])/2,r)}var he=(s,t,e,n,i,r,o,a,l={})=>Ot(new Hi(e,n,i,l.seg||24),t,s,r,o,a,l),ue=(s,t,e,n,i,r,o={})=>Ot(new fn(e,o.seg||24,o.seg2||16),t,s,n,i,r,o),Ln=(s,t,e,n,i,r,o,a={})=>Ot(new $r(e,n,6,16),t,s,i,r,o,a);function ke(s,t){let e=document.createElement("canvas");e.width=s,e.height=t;let n=e.getContext("2d"),i=new Zr(e);return i.colorSpace=on,i.anisotropy=4,{c:e,g:n,t:i,w:s,h:t}}function Ai(s,t,e,n,i,r){s.beginPath(),s.moveTo(t+r,e),s.arcTo(t+n,e,t+n,e+i,r),s.arcTo(t+n,e+i,t,e+i,r),s.arcTo(t,e+i,t,e,r),s.arcTo(t,e,t+n,e,r),s.closePath()}function Ms(s,t=1,e=.6){let n=ke(128,128),i=n.g.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.35,"rgba(255,255,255,.35)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.g.fillStyle=i,n.g.fillRect(0,0,128,128);let r=new ki(new Si({map:n.t,color:s,blending:Zi,depthWrite:!1,transparent:!0,opacity:e,toneMapped:!1}));return r.scale.setScalar(t),r}function Vo(s,t,e,n={}){let i=new sr(s,!1,"centripetal"),r=n.seg||Math.max(6,s.length*3),o=n.rad||6,a=n.ach??.55,l=i.computeFrenetFrames(r,!1),c=[],h=[],f=[],u=[],d=n.ref||null;for(let v=0;v<=r;v++){let g=v/r,p=i.getPointAt(g),M=l.tangents[v],T=l.normals[v].clone(),y=l.binormals[v].clone();if(d){let S=(typeof d=="function"?d(p):d).clone();T=S.sub(M.clone().multiplyScalar(S.dot(M))).normalize(),y=new B().crossVectors(M,T).normalize()}let b=vt(t,e,Math.pow(g,n.curvaR||1))*(n.bulbo?1+n.bulbo*Math.sin(nt*g):1)*(.2+.8*ce(g/.12))*(.35+.65*ce((1-g)/.1)),E=n.raiz??.62,P=n.ponta??1.12,_=vt(E,P,Math.pow(g,.8));for(let S=0;S<=o;S++){let R=S/o*se,I=Math.cos(R),F=Math.sin(R),U=T.clone().multiplyScalar(I*a),N=y.clone().multiplyScalar(F),O=U.clone().add(N);c.push(p.x+O.x*b,p.y+O.y*b,p.z+O.z*b);let X=T.clone().multiplyScalar(I/Math.max(a,.2)).add(y.clone().multiplyScalar(F)).normalize();h.push(X.x,X.y,X.z),f.push(_,_,_)}}for(let v=0;v<r;v++)for(let g=0;g<o;g++){let p=v*(o+1)+g,M=p+o+1;u.push(p,M,p+1,M,M+1,p+1)}let m=new Pe;return m.setAttribute("position",new le(c,3)),m.setAttribute("normal",new le(h,3)),m.setAttribute("color",new le(f,3)),m.setIndex(u),m}function lc(s,t=.85){let e=(s.index,s),n=e.attributes.position.count;return e.attributes.uv&&e.deleteAttribute("uv"),e.attributes.uv1&&e.deleteAttribute("uv1"),e.setAttribute("color",new le(new Array(n*3).fill(t),3)),e.index,e}function cc(s){let t=s.map(e=>{if(!e.index){let n=e.attributes.position.count;e.setIndex([...Array(n).keys()])}return["uv","uv1","uv2"].forEach(n=>e.attributes[n]&&e.deleteAttribute(n)),e});return Pf(t,!1)}var tu={};function gu(s,t,e,n,i=[1,1]){let r=s+i.join("x");if(tu[r])return tu[r];let o=ke(t,e);return n(o.g,t,e),o.t.wrapS=o.t.wrapT=wn,o.t.repeat.set(...i),o.t.anisotropy=8,tu[r]=o.t,o.t}var eu=11,Dn=()=>(eu=eu*16807%2147483647,eu/2147483647),a_=(s,t,e)=>{s.fillStyle="#EDEDED",s.fillRect(0,0,t,e);for(let n=0;n<70;n++){let i=Dn()*e,r=.04+Dn()*.1;s.strokeStyle=`rgba(60,40,20,${r})`,s.lineWidth=.6+Dn()*2.4,s.beginPath(),s.moveTo(0,i);for(let o=0;o<=t;o+=16)s.lineTo(o,i+Math.sin(o*.02+n)*3+(Dn()-.5)*1.2);s.stroke()}for(let n=0;n<6;n++){let i=Dn()*t,r=Dn()*e,o=s.createRadialGradient(i,r,0,i,r,10+Dn()*10);o.addColorStop(0,"rgba(70,45,25,.22)"),o.addColorStop(1,"rgba(70,45,25,0)"),s.fillStyle=o,s.beginPath(),s.ellipse(i,r,24,7,0,0,se),s.fill()}},l_=(s,t,e)=>{s.fillStyle="#E6E6E6",s.fillRect(0,0,t,e);for(let n=0;n<e;n+=2)s.fillStyle=`rgba(0,0,0,${.035+(n%4?.02:0)})`,s.fillRect(0,n,t,1);for(let n=0;n<t;n+=2)s.fillStyle=`rgba(255,255,255,${.05+(n%4?.03:0)})`,s.fillRect(n,0,1,e);for(let n=0;n<900;n++)s.fillStyle=`rgba(0,0,0,${Dn()*.05})`,s.fillRect(Dn()*t,Dn()*e,2,2)},Ss=(s,t={})=>{let e="mad"+s+JSON.stringify(t);if(Vn.has(e))return Vn.get(e);let n=new ve({color:s,roughness:t.r??.55,metalness:0,map:gu("madeira",256,256,a_,t.rep||[1,1])});return Vn.set(e,n),n},yr=(s,t={})=>{let e="tec"+s+JSON.stringify(t);if(Vn.has(e))return Vn.get(e);let n=new Qt(s),i=new oo({color:s,roughness:t.r??.92,sheen:.7,sheenRoughness:.45,sheenColor:n.clone().lerp(new Qt("#FFFFFF"),.35),map:gu("tecido",128,128,l_,t.rep||[3,3])});return Vn.set(e,i),i},nu=null;function Lf(s,t,e,n,i,r=0,o=.42){if(!nu){let l=ke(128,128),c=l.g;c.shadowColor="#000",c.shadowBlur=20,c.shadowOffsetX=300,c.fillStyle="#000",Ai(c,-274,26,76,76,14),c.fill(),nu=l.t}let a=new ye(new Ze(1,1),new Ye({map:nu,color:"#000000",transparent:!0,opacity:o,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));return a.rotation.set(-nt/2,0,r),a.position.set(t,.003,e),a.scale.set((n*2+.12)*1.68,(i*2+.12)*1.68,1),a.renderOrder=1,a.receiveShadow=!1,a.castShadow=!1,s.add(a),a}var c_=(s,t,e)=>{s.fillStyle="#F2F2F2",s.fillRect(0,0,t,e);for(let n=0;n<5e3;n++){let i=Dn();s.fillStyle=i>.5?`rgba(255,255,255,${(i-.5)*.12})`:`rgba(0,0,0,${i*.05})`,s.fillRect(Dn()*t,Dn()*e,1.5,1.5)}},Df=s=>{let t="par"+s;if(Vn.has(t))return Vn.get(t);let e=new ve({color:s,roughness:.92,map:gu("parede",256,256,c_,[4,2])});return Vn.set(t,e),e},iu=null;function Mr(s,t,e,n,i,r=.22){if(!iu){let a=ke(4,64),l=a.g.createLinearGradient(0,0,0,64);l.addColorStop(0,"rgba(0,0,0,1)"),l.addColorStop(.35,"rgba(0,0,0,.45)"),l.addColorStop(1,"rgba(0,0,0,0)"),a.g.fillStyle=l,a.g.fillRect(0,0,4,64),iu=a.t}let o=new ye(new Ze(t,e),new Ye({map:iu,color:"#000000",transparent:!0,opacity:r,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));return o.position.copy(n),o.rotation.copy(i),o.renderOrder=1,s.add(o),o}var h_={triste:{hemi:.55,key:.85,keyCor:"#AFC0E6",amb:"#7F8FB3",lamp:!1,pend:!1,raio:.1,tv:"#EF4444",mon:"#EF4444",exp:.9},preocupado:{hemi:.75,key:1.35,keyCor:"#FFE3C7",amb:"#B9A58F",lamp:!0,pend:!1,raio:.16,tv:"#EF4444",mon:"#F97316",exp:.97},tranquilo:{hemi:.85,key:1.7,keyCor:"#FFF4E3",amb:"#C8C6E8",lamp:!0,pend:!1,raio:.28,tv:"#818CF8",mon:"#60A5FA",exp:1},feliz:{hemi:.95,key:2.1,keyCor:"#FFF1D6",amb:"#E8DCC0",lamp:!0,pend:!0,raio:.4,tv:"#22C55E",mon:"#22C55E",exp:1.04},euforico:{hemi:.8,key:1.6,keyCor:"#FFE0F2",amb:"#E9C9E6",lamp:!0,pend:!0,raio:.36,tv:"#FACC15",mon:"#FACC15",exp:1.05}},rn={p:["#F6D3B3","#F2C3A0","#D9A27A","#B07850","#7A4E33","#4F3123"],c:["#2B1B12","#3B261B","#6B4226","#A86B3C","#D9B26A","#EFDDB0","#8E8E8E","#B33A2A","#2F4FC0","#D9568E"],l:["#2F3B52","#1F2937","#5B4636","#3F5F45","#D6CDBB","#6F86B5"],s:["#1B2230","#F4F6F8","#C02626","#7C4A21","#2563EB"]},u_={p:5,c:9,k:9,b:3,l:5,o:1,a:4,w:4,r:5,e:1,s:4},d_={p:1,c:1,k:0,b:0,l:0,o:0,a:2,w:2,r:0,e:0,s:0},Ff=s=>{let t={...d_};return String(s||"").replace(/([pckbloawres])(\d)/g,(e,n,i)=>{t[n]=Math.min(+i,u_[n])}),t},f_=[.9,.95,1,1.05,1.1],p_=[.84,.92,1,1.12,1.26],Gn={alt:.89,dy:0,hz:0,lean:0,side:0,twist:0,nod:0,turn:0,roll:0,aL:[0,.12,.2],aR:[0,.12,.2],lL:[0,0],lR:[0,0],olhar:[0,0],boch:0,abre:.6,lagrima:0,nuvem:0,balao:0,yawAdd:0,sent:0,kL:0,kR:0,ikL:null,ikR:null,mL:0,mR:0,taco:-1,recuo:0,porta:0,fxk:0,gole:0,pL:0,pR:0,olhos:"A",boca:"leve",sob:"",item:"",balaoT:""},hu=["alt","dy","hz","lean","side","twist","nod","turn","roll","boch","abre","lagrima","nuvem","balao","yawAdd","sent","kL","kR","mL","mR","taco","recuo","porta","fxk","gole","pL","pR"],pc=["aL","aR","lL","lR","olhar"],m_=["olhos","boca","sob","item","balaoT","bolas","solta","fx","gestoL","gestoR"],uu=[.47,.565,.52],g_=uu[1]/uu[0]*.98,Wo=.29,Nf=.325;function hc(s,t=0,e=0,n=0,i=0,r=0,o=0,a=null){let l=new oe().compose(Mt(t,e,n),new Fe().setFromEuler(new nn(i,r,o)),a?Mt(...a):Mt(1,1,1));return s.applyMatrix4(l),s}function Uf(s,t){let e=s.attributes.position,n=new B;for(let i=0;i<e.count;i++){n.fromBufferAttribute(e,i);let r=n.clone().divideScalar(t),o=te(-r.y),a=te(r.y),l=1-.2*Math.pow(o,1.6)+.03*(1-Math.abs(r.y)),c=1-.1*Math.pow(o,2)*(r.z<0?1.4:.6)-.04*a*(r.z<0?1:0),h=1+.04*o;e.setXYZ(i,n.x*l,n.y*h,n.z*c+(r.z>0?.035*t*Math.pow(o,2)*r.z:0))}return s.computeVertexNormals(),s}var mc=class{constructor(t,e,n,i){let r=this.ap=Ff(n);this.molas={},this.cor=t||"#2457F5";let o=this.camisa=new ve({color:this.cor,roughness:.86}),a=this.gola=new ve({color:this.cor,roughness:.8}),l=this.branco=new ve({color:"#F4F6FA",roughness:.7}),c=this.pele=new ve({color:rn.p[r.p],roughness:.55,emissive:"#4A1D0C",emissiveIntensity:.16}),h=this.peleSom=new ve({color:rn.p[r.p],roughness:.6,emissive:"#4A1D0C",emissiveIntensity:.1}),f=this.cab=new ve({color:rn.c[r.c],roughness:.5,metalness:.05,vertexColors:!0}),u=this.cabRaspado=new ve({color:rn.c[r.c],roughness:.95}),d=this.calca=new ve({color:rn.l[r.l],roughness:.88}),m=this.sapMat=new ve({color:rn.s[r.s],roughness:.45}),v=this.solaMat=new ve({color:"#F4F6F8",roughness:.55}),g=et("#F8FAFC",{r:.9}),p=et("#2A1D16",{r:.45}),M=et("#D9B44A",{r:.28,m:.7});this.gir=[];let T=(st,pt=1)=>(this.gir.push({m:st,s:st.scale.clone(),k:pt}),st),y=this.root=new At,b=this.hips=new At;y.add(b),T(Ot(new fn(.155,28,18),d,b,0,.025,0,{s:[1.06,.64,.82]})),this.cinto=T(he(b,p,.145,.145,.03,0,.066,0,{s:[1.06,1,.8],seg:32})),this.fivela=ut(b,M,[-.018,.052,.108],[.018,.082,.118],.006);let E=this.spine=new At;E.position.y=.04,b.add(E);let P=new Gi([[0,-.03],[.138,-.01],[.142,.08],[.146,.15],[.162,.25],[.176,.34],[.182,.41],[.172,.462],[.135,.505],[.074,.536],[0,.55]].map(st=>new xt(st[0],st[1]))).getPoints(48);this.torso=T(Ot(new ar(P,48),o,E,0,0,0,{s:[1.06,1,.74]})),this.barriga=T(ue(E,o,.12,0,.13,0,{s:[1.05,1,.82],seg:28,seg2:18}),1),this.barriga.visible=!1;let _=this.roupas=[],S=st=>{let pt=new At;return E.add(pt),st(pt),pt.visible=!1,_.push(pt),pt};S(st=>{let pt=new Mn(.08,.01,.07);for(let bt of[-1,1])Ot(pt,a,st,bt*.042,.522,.072,{rx:.62,rz:-bt*.55});Ot(new Oe(.066,.017,10,28),a,st,0,.535,-.004,{rx:nt/2});for(let bt of[.48,.44])ue(st,et("#E8EDF5",{r:.4}),.0078,0,bt,.122,{seg:10,seg2:8})}),S(st=>{Ot(new Oe(.07,.012,10,28),a,st,0,.528,.004,{rx:nt/2-.12})}),S(st=>{Ot(new Oe(.085,.034,12,28,nt*1.25),a,st,0,.53,-.025,{rx:nt/2-.25,rz:-nt*.125+nt}),ue(st,a,.1,0,.5,-.1,{s:[1.05,.6,.55]});for(let pt of[-1,1])Ln(st,et("#F1F5F9",{r:.6}),.006,.09,pt*.03,.45,.13,{rx:.08});ut(st,a,[-.09,.07,.098],[.09,.18,.124],.025,{rx:-.05}),he(st,a,.15,.15,.04,0,-.005,0,{s:[1.06,1,.76],seg:32})}),S(st=>{for(let ft of[-1,1])Ot(new Mn(.075,.008,.06),l,st,ft*.04,.525,.07,{rx:.7,rz:-ft*.75});Ot(new Oe(.064,.013,10,28),l,st,0,.535,-.004,{rx:nt/2});let pt=this.gravata=new ve({color:this.cor,roughness:.5});ut(st,pt,[-.02,.49,.112],[.02,.525,.13],.008);let bt=new rr;bt.moveTo(-.018,0),bt.lineTo(.018,0),bt.lineTo(.032,-.25),bt.lineTo(0,-.29),bt.lineTo(-.032,-.25),bt.closePath(),Ot(new so(bt,{depth:.008,bevelEnabled:!0,bevelSize:.003,bevelThickness:.003,bevelSegments:1}),pt,st,0,.495,.118,{rx:-.1});for(let ft of[.4,.3,.2,.1])ue(st,et("#CBD5E1",{r:.4}),.006,.045,ft,.14-ft*.02,{seg:8,seg2:6})}),S(st=>{let pt=new fn(.17,24,16,-.42,.84,.35,1.75);Ot(pt,l,st,0,.27,0,{s:[.95,1.25,.82]});for(let bt of[-1,1])ut(st,et("#475569",{r:.3,m:.6}),[-.004,-0,-.004],[.004,.42,.004],.002).position.set(bt*.075,.24,.136-0);Ot(new Oe(.078,.026,10,28),a,st,0,.525,-.012,{rx:nt/2-.15}),he(st,a,.15,.15,.04,0,-.005,0,{s:[1.06,1,.76],seg:32})}),S(st=>{Ot(new Oe(.075,.01,10,28),a,st,0,.52,.01,{rx:nt/2-.25})}),this.estampa=ke(128,128);let R=Ot(new Ze(.1,.1),new Ye({map:this.estampa.t,transparent:!0,alphaTest:.1,toneMapped:!1}),E,-.072,.37,.126,{cast:!1,ry:-.1});this.estampaPlano=R,this.temIcone=!1,this.setIcone(e);let I=this.neck=new At;I.position.y=.52,E.add(I),he(I,c,.05,.056,.12,0,.03,.004,{seg:20});let F=this.head=new At;F.position.set(0,.05,.01),F.scale.set(...uu),I.add(F);let U=.2,N=.24;this.hc=U,this.R=N,Ot(Uf(new fn(N,56,40),N),c,F,0,U,0);for(let st of[-1,1])ue(F,c,.058,st*(N-.004),U-.01,-.012,{s:[.5,1.05,.85],seg:16,seg2:12}),ue(F,h,.032,st*(N+.016),U-.012,-.006,{s:[.3,.8,.5],seg:12,seg2:10});ue(F,c,.02,0,U-.008,N-.004,{s:[.7,1.8,.85],seg:14,seg2:10}),ue(F,c,.026,0,U-.046,N+.003,{s:[1.05,.9,1],seg:18,seg2:12});for(let st of[-1,1])ue(F,c,.014,st*.024,U-.054,N-.007,{s:[1,.8,1],seg:12,seg2:8});this.rosto=ke(512,384),this.rosto.g.scale(2,2);let O=Uf(new fn(N+.003,48,28,nt/2-.9,1.8,.85,1.3),N+.003),X=new ve({map:this.rosto.t,transparent:!0,alphaTest:.04,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-2});Ot(O,X,F,0,U,0,{cast:!1}),this.rostoKey="",this.montarCabelo(F,U,N),this.montarBarba(F,U,N),this.montarOculos(F,U,N),this.montarChapeus(F,U,N),this.dedos={L:[],R:[]},this.tubos=[];let W=(st,pt,bt,ft,dt,x={})=>{let A=new Xr(new Pe,pt);return A.frustumCulled=!1,A.castShadow=!0,st.add(A),this.tubos.push({m:A,perfil:bt,juntaY:ft,ossos:dt,kz:x.kz??1,k:x.k??1,aberto:!!x.aberto,banda:x.banda??.055}),A},rt=(st,pt)=>{let bt=new At;bt.position.set(.19*st,.437,0),E.add(bt);let ft=new At;ft.position.y=-Wo,bt.add(ft);let dt=new bi,x=new bi;bt.add(dt),ft.add(x);let A=W(bt,this.pele,[[.045,0],[.035,.032],[0,.05],[-.1,.048],[-.2,.043],[-.29,.039],[-.35,.043],[-.47,.034],[-.545,.029],[-.562,0]],-Wo,[dt,x]),L=W(bt,o,[[.06,0],[.05,.04],[.02,.062],[-.06,.06],[-.19,.055]],-Wo,[dt,x],{aberto:!0}),k=W(bt,o,[[.06,0],[.05,.04],[.02,.062],[-.1,.058],[-.22,.052],[-.29,.05],[-.36,.051],[-.5,.044],[-.535,.043]],-Wo,[dt,x],{aberto:!0}),Y=T(ue(bt,o,.06,0,0,0,{seg:24,seg2:18,s:[1,.9,1]})),gt=T(ue(bt,this.pele,.051,0,-.004,0,{seg:20,seg2:14})),Ht=T(Ot(new Oe(.055,.008,8,24),o,bt,0,-.188,0,{rx:nt/2})),K=T(he(ft,o,.045,.045,.03,0,-.24,0,{seg:22})),at=new At;at.position.y=-.27,ft.add(at),ue(at,this.pele,.033,0,-.006,0,{s:[.72,.75,1.05],seg:16,seg2:12}),ue(at,this.pele,.046,0,-.052,0,{s:[.38,1,.92],seg:22,seg2:16});for(let Yt of[-.027,-.009,.009,.027])ue(at,this.pele,.0118,0,-.09,Yt,{s:[1.05,.9,1],seg:10,seg2:8});let mt=this.dedos[pt];[[-.028,.035],[-.0095,.043],[.0095,.041],[.028,.033]].forEach(([Yt,zt])=>{let $t=new At;$t.position.set(0,-.092,Yt),at.add($t),Ln($t,this.pele,.0112,zt,0,-zt/2-.003,0);let ee=new At;ee.position.y=-zt-.006,$t.add(ee),Ln(ee,this.pele,.0102,zt*.8,0,-zt*.4-.002,0),mt.push({p1:$t,p2:ee})});let lt=new At;lt.position.set(-st*.012,-.03,.034),lt.rotation.set(.4,0,st*.5),at.add(lt),ue(lt,this.pele,.016,0,-.006,0,{s:[.9,1.3,.9],seg:10,seg2:8}),Ln(lt,this.pele,.013,.032,0,-.022,0);let yt=new At;return yt.position.y=-.047,lt.add(yt),Ln(yt,this.pele,.0115,.027,0,-.016,0),mt.push({p1:lt,p2:yt,polegar:!0}),{sh:bt,el:ft,hand:at,lado:st,pele:A,ombro:Y,ombroPele:gt,mangaC:L,bainhaC:Ht,mangaL:k,punho:K,qFK:new Fe,qIK:new Fe}};this.L=rt(-1,"L"),this.R=rt(1,"R"),this.curL={c:[.5,.42,.34,.26,.25],s:.05},this.curR={c:[.5,.42,.34,.26,.25],s:.05};let q=st=>{let pt=new At;pt.position.set(.094*st,-.01,0),b.add(pt);let bt=new At;bt.position.y=-.42,pt.add(bt);let ft=new At;ft.position.y=-.4,bt.add(ft);let dt=new bi,x=new bi;pt.add(dt),bt.add(x),T(ue(pt,d,.088,0,-.02,0,{seg:22,seg2:16}));let A=W(pt,this.pele,[[-.3,0],[-.32,.05],[-.42,.048],[-.52,.05],[-.62,.045],[-.78,.035],[-.8,0]],-.42,[dt,x]),L=W(pt,d,[[.04,0],[.03,.06],[0,.088],[-.08,.084],[-.3,.068],[-.42,.06],[-.52,.06],[-.7,.05],[-.775,.05]],-.42,[dt,x],{aberto:!0,kz:1.04}),k=W(pt,d,[[.04,0],[.03,.06],[0,.09],[-.08,.086],[-.3,.072],[-.44,.064]],-.42,[dt,x],{aberto:!0,kz:1.04}),Y=T(Ot(new Oe(.064,.011,8,22),d,bt,0,-.02,0,{rx:nt/2})),gt=T(Ot(new Oe(.05,.0095,8,20),d,bt,0,-.355,0,{rx:nt/2})),Ht=he(ft,g,.036,.039,.07,0,.012,0,{seg:16});ue(ft,m,.058,0,-.026,.032,{s:[.88,.62,1.72],seg:24,seg2:16}),ue(ft,m,.045,0,-.008,-.02,{s:[.95,.95,1],seg:18,seg2:12}),Ot(new Hi(.058,.056,.024,28),v,ft,0,-.064,.04,{s:[.92,1,1.82]});for(let K=0;K<3;K++)ut(ft,et("#E9EDF2",{r:.7}),[-.02,0,-.004],[.02,.006,.004],.002).position.set(0,.004-K*.008,.03+K*.022);return{hp:pt,kn:bt,ft,peleP:A,calcaL:L,bermudaM:k,bermuda:Y,barra:gt,meiaM:Ht}};this.PL=q(-1),this.PR=q(1),In(y,!0,!1);let j=ke(64,64),tt=j.g.createRadialGradient(32,32,0,32,32,32);tt.addColorStop(0,"rgba(0,0,0,.45)"),tt.addColorStop(1,"rgba(0,0,0,0)"),j.g.fillStyle=tt,j.g.fillRect(0,0,64,64),this.blob=new ye(new Ze(.7,.7),new Ye({map:j.t,transparent:!0,depthWrite:!1})),this.blob.rotation.x=-nt/2,this.blob.position.y=.004,this.mL=new B,this.mR=new B,this.gp=new B(0,-.06,0),this.pDy=0,this.pNod=0,this.pT=null,this.pYaw=null,this.esc=1,y.updateMatrixWorld(!0);for(let st of this.tubos)st.m.geometry=this.geoTubo(st,1),st.esq=new qr(st.ossos),st.m.bind(st.esq,st.m.matrixWorld);this.setAparencia(n,i)}montarCabelo(t,e,n){let i=this.cab,r=this.cortes=[],o=Mt(0,e,0),a=(p,M,T=0)=>Mt(Math.sin(p)*Math.sin(M),Math.cos(p),Math.sin(p)*Math.cos(M)).multiplyScalar(n+T).add(o),l=p=>p.clone().sub(o).normalize(),c=p=>{let M=Math.cos(p);return M>0?vt(1.32,.98,Math.pow(M,1.4)):vt(1.32,1.95,Math.pow(-M,.9))},h=(p=.012,M=1.36,T=0)=>{let y=new fn(n+p,56,32,0,se,0,2.1),b=y.attributes.position,E=new B;for(let P=0;P<b.count;P++){E.fromBufferAttribute(b,P);let _=Math.acos(te(E.y/(n+p),-1,1)),S=Math.atan2(E.x,E.z),R=c(S)+T;if(_>R){let I=a(R,S,p).sub(o);b.setXYZ(P,I.x,I.y,I.z)}}return y.computeVertexNormals(),hc(y,0,e,0),lc(y,.7)},f=(p,M,T,y={})=>Vo(p,M,T,{ref:b=>l(b),...y}),u=(p,M,T,y,b,E,P=7,_=.012)=>{let S=[];for(let R=0;R<=P;R++){let I=R/P;S.push(a(vt(p,T,I),vt(M,y,I),vt(b,E,I)+_*Math.sin(nt*I)))}return S},d=(p,M)=>Ri(p*3.7+M)-.5,m=(p,M)=>{let T=new At;if(p.length){let y=Ot(cc(p),i,T);y.castShadow=!0}return M&&M(T),r[g]=T,T},v=[];v[0]=()=>{{let p=[h(.012)];for(let E=0;E<26;E++){let P=nt*.32+E/25*nt*1.36+d(E,1)*.08;p.push(f(u(.45+d(E,2)*.1,P,c(P)-.05,P+d(E,3)*.12,.03,.006),.045,.014))}let M=m(p),T=this.fio=new At;T.position.copy(a(.45,0,0)),M.add(T);let y=[],b=T.position.clone();for(let E=0;E<16;E++){let P=-.75+E/15*1.5+d(E,4)*.06,_=.07+.035*Math.cos(P*1.6),S=[a(.95,P*.9,.006),a(.62,P*.85,_*.75),a(.3,P*.7,_),a(.05+d(E,5)*.1,P*.5+nt*.06,_*.65),a(.42,nt+P*.4,.012)].map(R=>R.sub(b));y.push(Vo(S,.05,.016,{ref:R=>R.clone().add(b).sub(o).normalize(),bulbo:.25}))}Ot(cc(y),i,T),this.fioBase=T}},v[1]=()=>{{let p=[h(.012)];for(let M=0;M<44;M++){let T=M/44*se+d(M,6)*.1,y=Math.cos(T),b=c(T)+(y>.5?.02:-.02);p.push(f(u(.08+Ri(M)*.2,T*.85+d(M,7)*.2,b,T,.03,y>.5?.02:.008,7,.018),.042,.012))}m(p)}},v[2]=()=>{{let p=new At;Ot(h(.004,1.36,.04),this.cabRaspado,p),r[g]=p}},v[3]=()=>{{let p=new fn(n+.03,40,18,nt-.5,nt+1,.75,1.55),M=p.attributes.position;for(let b=0;b<M.count;b++){let E=M.getY(b);E<0&&M.setY(b,E*1.9);let P=M.getX(b),_=M.getZ(b);if(E<0){let S=1+.12*(-E/n);M.setX(b,P*S),M.setZ(b,_*S)}}p.computeVertexNormals(),hc(p,0,e,0);let T=[h(.014),lc(p,.66)],y=.35;for(let b=0;b<64;b++){let E=b%2?1:-1,P=Math.floor(b/2)/31,_=y+E*(.06+P*nt*.94)+d(b,8)*.05,S=Math.cos(_),R=.16+Ri(b+2)*.08,I=u(R,y+E*.04,nt*.4,_,.032,.036,4,.012),F=c(_),U=a(Math.min(F,1.45),_,.04);if(S>.6)I.push(a(.92,_,.045),a(1.08,_*1.25+E*.1,.035));else{I.push(U);let N=l(U).setY(0).normalize(),O=.3+.1*(1-Math.abs(S))+Ri(b)*.05;I.push(U.clone().add(N.clone().multiplyScalar(.035)).add(Mt(0,-O*.5,0)),U.clone().add(N.clone().multiplyScalar(.06)).add(Mt(0,-O,S<-.3?-.02:0)))}T.push(f(I,.085,.03,{bulbo:.15,seg:24,ach:.4,raiz:.78}))}m(T)}},v[4]=()=>{{let p=[h(.018)],M=0;for(let T=0;T<200&&M<120;T++){let y=Math.acos(1-2*((T+.5)/200)),b=T*2.39996;if(y>c(Math.atan2(Math.sin(b),Math.cos(b)))-.05)continue;M++;let E=a(y,b,.03),P=l(E),_=Mt(-P.z,0,P.x).normalize();_.lengthSq()<.5&&_.set(1,0,0);let S=new B().crossVectors(P,_),R=[],I=.026+Ri(T)*.012,F=1.5;for(let U=0;U<=12;U++){let N=U/12,O=N*F*se+T;R.push(E.clone().add(_.clone().multiplyScalar(Math.cos(O)*I)).add(S.clone().multiplyScalar(Math.sin(O)*I)).add(P.clone().multiplyScalar(N*.045)))}p.push(Vo(R,.02,.014,{ach:1,rad:6,seg:18}))}m(p)}},v[5]=()=>{{let p=[h(.02)],M=Mt(0,e+.1,-.08);for(let y=0;y<170;y++){let b=1-2*((y+.5)/170),E=Math.sqrt(1-b*b),P=y*2.39996,_=Mt(E*Math.sin(P),b,E*Math.cos(P)),S=M.clone().add(_.clone().multiply(Mt(.27,.24,.26)));if(S.z-o.z>.12&&S.y<e+.12||S.y<e-.12)continue;let R=new ds(.058+Ri(y)*.016,1),I=jh(R);I.computeVertexNormals(),hc(I,S.x,S.y,S.z),p.push(lc(I,.82+Ri(y+1)*.25))}let T=m(p);T.userData.volume=T.children[0]}},v[6]=()=>{{let p=[h(.014)],M=Mt(0,e+.2,-.17);for(let _=0;_<30;_++){let S=_/30*se,R=c(S);if(Math.cos(S)<-.6)continue;let I=a(R-.02,S,.006),F=a(R*.5,S*.6+nt*.4*Math.sign(Math.sin(S)||1),.022);p.push(f([I,F,M.clone().add(Mt(0,-.02,.02))],.04,.02))}let T=new ds(.095,3),y=T.attributes.position,b=new B;for(let _=0;_<y.count;_++){b.fromBufferAttribute(y,_);let S=b.clone().normalize();b.copy(S.multiplyScalar(.095*(1+.06*Math.sin(Math.atan2(S.x,S.z)*7+S.y*9)))),y.setXYZ(_,b.x,b.y,b.z)}let E=jh(T);E.computeVertexNormals(),hc(E,M.x,M.y+.04,M.z-.03,.4),p.push(lc(E,1));let P=m(p,_=>Ot(new Oe(.06,.012,8,20),et("#111827",{r:.5}),_,M.x,M.y-.02,M.z,{rx:nt/2+.4}));P.userData.volume=P.children[0]}},v[7]=()=>{{let p=new At;Ot(h(.004,1.36,.04),this.cabRaspado,p);let M=[h(.012,0,-0).applyMatrix4(new oe)];M.length=0;for(let y=0;y<15;y++){let b=y/14,E=vt(-.95,1.75,b),P=Math.abs(E),_=E<0?0:nt,S=.07+.06*Math.sin(nt*te(b*1.15)),R=a(P,_,-.005),I=l(R),F=(E<0,Mt(0,0,-1)),U=R.clone().add(I.clone().multiplyScalar(S)).add(Mt(0,0,-.05-.03*b)).add(F.multiplyScalar(0));for(let N of[-1,0,1])M.push(Vo([a(P+(E<0?-1:1)*0,_,-.004).add(Mt(N*.022,0,0)),R.clone().add(I.clone().multiplyScalar(S*.5)).add(Mt(N*.012,0,-.01)),U.clone().add(Mt(N*.006,0,0))],.065,.01,{ref:Mt(1,0,0),rad:6,seg:10,ach:.8,raiz:.7}))}let T=Ot(cc(M),i,p);p.userData.volume=T,r[g]=p}},v[8]=()=>{{let p=[h(.012)],M=Mt(0,e+.06,-n-.03);for(let E=0;E<34;E++){let P=E/34*se,_=c(P);Math.cos(P)<-.7||p.push(f([a(_-.03,P,.006),a(_*.55,P*.75+(Math.sin(P)>0?.6:-.6),.02),M.clone().add(Mt(0,.01,.03))],.04,.02))}let T=m(p,E=>Ot(new Oe(.035,.012,8,18),et("#E11D48",{r:.5}),E,M.x,M.y,M.z,{rx:.2})),y=new At;y.position.copy(M),T.add(y);let b=[];for(let E=0;E<9;E++){let P=E/9*se,_=Mt(Math.cos(P)*.018,Math.sin(P)*.015,0);b.push(Vo([_.clone(),_.clone().add(Mt(0,.02,-.07)),_.clone().multiplyScalar(1.6).add(Mt(0,-.12,-.1)),_.clone().multiplyScalar(1.2).add(Mt(0,-.32,-.06)),_.clone().multiplyScalar(.4).add(Mt(0,-.44,-.03))],.032,.008,{ref:Mt(0,0,-1),bulbo:.4,seg:20}))}Ot(cc(b),i,y),this.molas.rabo={g:y,a:0,v:0,b:0,vb:0},T.userData.volume=y}},v[9]=()=>{r[g]=new At};let g=0;this.corte=p=>{if(!r[p]){g=p,v[p]();let M=r[p];M.visible=!1,In(M,!0,!1),t.add(M),this.chapeuAtual!==void 0&&M.userData.volume&&(M.userData.volume.visible=!this.chapeuAtual)}return r[p]}}montarBarba(t,e,n){let i=this.barbas=[null],r=this.barbaMat=new ve({color:rn.c[this.ap.c],roughness:1}),o=l=>{for(let c of[-1,1])Ln(l,r,.0095,.048,c*.028,e-.078,n-.012,{rz:nt/2+c*.25,s:[1,1,.6]})},a=new At;o(a),ue(a,r,.028,0,e-.17,n-.06,{s:[1,1.15,.5],seg:14,seg2:10}),i.push(a),a=new At,o(a),Ot(new fn(n+.008,40,16,nt/2-1.3,2.6,2,.85),r,a,0,e,0),i.push(a),a=new At;for(let l of[-1,1])Ln(a,r,.012,.05,l*.03,e-.076,n-.01,{rz:nt/2+l*.35,s:[1,1,.7]});i.push(a),i.forEach(l=>{l&&(l.visible=!1,t.add(l))})}montarOculos(t,e,n){let i=this.oculos=new At,r=et("#1F2937",{r:.35,m:.3});this.lente=new ve({color:"#0B1220",roughness:.15,metalness:.4,transparent:!0,opacity:.85});let o=.104,a=e+.005,l=n+.03;for(let c of[-1,1]){Ot(new Oe(.056,.007,8,28),r,i,c*o,a,l,{ry:c*.18});let h=Ot(new hs(.054,24),this.lente,i,c*o,a,l-.002,{ry:c*.18,cast:!1});h.name="lente",ut(i,r,[-.006,-.008,-.2],[.006,.008,0],.003).position.set(c*(n+.012),a+.01,l-.12),ut(i,r,[-.05,-.007,-.006],[.05,.007,.006],.003).position.set(c*(o+.1),a+.008,l-.012)}he(i,r,.005,.005,.07,0,a+.008,l+.006,{rz:nt/2}),i.visible=!1,t.add(i)}montarChapeus(t,e,n){let i=this.chapeus={},r=new At,o=et("#2563EB",{r:.7});Ot(new fn(n+.035,36,16,0,se,0,1.3),o,r,0,e+.01,-.01,{rx:-.18}),ut(r,o,[-.15,-.01,0],[.15,.01,.2],.01,{rx:.18}).position.set(0,e+.12,.19),ue(r,et("#1E3A8A"),.025,0,e+n+.03,-.02,{seg:10,seg2:8}),i.a_bone=r,r=new At;let a=et("#111827",{r:.6});he(r,a,n+.03,n+.03,.12,0,e+.16,0,{seg:36}),ut(r,a,[-.34,-.012,-.34],[.34,.012,.34],.01,{ry:nt/4}).position.set(0,e+.23,0),he(r,et("#F5B400",{r:.4}),.008,.008,.2,.2,e+.13,.12,{rz:.1}),i.a_formatura=r,r=new At;let l=et("#F5B400",{r:.25,m:.85});he(r,l,n*.82,n*.86,.1,0,e+.22,0,{seg:36});for(let c=0;c<6;c++){let h=c/6*se;Ot(new hi(.04,.11,10),l,r,Math.sin(h)*n*.8,e+.31,Math.cos(h)*n*.8),ue(r,et(c%2?"#DC2626":"#2563EB",{r:.2,m:.3}),.024,Math.sin(h)*n*.86,e+.22,Math.cos(h)*n*.86,{seg:10,seg2:8})}i.a_cartola=r,Object.values(i).forEach(c=>{c.visible=!1,t.add(c)})}geoTubo(t,e){let n=t.perfil,i=30,r=22,o=1+(e-1)*t.k,l=new Gi(n.map(([m,v])=>new xt(v,m))).getPoints(i),c=[],h=[],f=[],u=[];for(let m=0;m<=i;m++){let{x:v,y:g}=l[m],p=Math.max(0,v)*o,M=ce((t.juntaY+t.banda-g)/(2*t.banda));for(let T=0;T<=r;T++){let y=T/r*se;c.push(Math.sin(y)*p,g,Math.cos(y)*p*t.kz),f.push(0,1,0,0),u.push(1-M,M,0,0)}}for(let m=0;m<i;m++)for(let v=0;v<r;v++){let g=m*(r+1)+v,p=g+r+1;h.push(g,p,g+1,p,p+1,g+1)}let d=new Pe;return d.setAttribute("position",new le(c,3)),d.setIndex(h),d.setAttribute("skinIndex",new ls(f,4)),d.setAttribute("skinWeight",new le(u,4)),d.computeVertexNormals(),t.aberto&&d.setAttribute("normal",d.getAttribute("normal")),d}setAparencia(t,e){let n=this.ap=Ff(t);this.pele.color.set(rn.p[n.p]),this.peleSom.color.set(ys(rn.p[n.p],"#7A3B22",.12)),this.cab.color.set(rn.c[n.c]),this.barbaMat.color.set(ys(rn.c[n.c],rn.p[n.p],.12)),this.cabRaspado.color.set(ys(rn.c[n.c],rn.p[n.p],.22)),this.calca.color.set(rn.l[n.l]),this.sapMat.color.set(rn.s[n.s]),this.solaMat.color.set(n.s===1?"#1F2937":"#F4F6F8");let i=this.chapeus[e]?e:"";this.chapeuAtual=i,this.corte(n.k),this.cortes.forEach((a,l)=>{a&&(a.visible=l===n.k,a.userData.volume&&(a.userData.volume.visible=!i))}),this.barbas.forEach((a,l)=>{a&&(a.visible=l===n.b)}),Object.entries(this.chapeus).forEach(([a,l])=>{l.visible=a===i}),this.fio&&(this.fio.visible=!i);let r=e==="a_oculos";this.oculos.visible=r||n.o===1,this.lente.opacity=r?.88:.12,this.lente.color.set(r?"#0B1220":"#DCEBFF"),this.esc=f_[n.a],this.root.scale.setScalar(this.esc);let o=p_[n.w];this.fGir=o;for(let{m:a,s:l,k:c}of this.gir){let h=1+(o-1)*c;a.scale.set(l.x*h,l.y,l.z*h)}if(this.gTubos!==o){this.gTubos=o;for(let a of this.tubos){let l=a.m.geometry;a.m.geometry=this.geoTubo(a,o),l&&l.dispose()}}this.barriga.visible=n.w>=3,this.barriga.position.z=(o-1)*.16,this.L.sh.position.x=-.19*(1+(o-1)*.6),this.R.sh.position.x=.19*(1+(o-1)*.6),this.PL.hp.position.x=-.094*(1+(o-1)*.5),this.PR.hp.position.x=.094*(1+(o-1)*.5),this.fivela.position.z=.113*(1+(o-1)*.9),this.estampaPlano.position.z=.126*(1+(o-1)*.75),this.setRoupa(n.r,n.e),this.rostoKey=""}setRoupa(t,e){this.roupas.forEach((l,c)=>{l.visible=c===t});let n=t===2||t===3||t===4,i=t===5,r=t===3,o=r?this.branco:this.camisa;for(let l of[this.L,this.R]){l.mangaC.visible=l.bainhaC.visible=!n&&!i,l.mangaL.visible=l.punho.visible=n,l.ombro.visible=!i,l.ombroPele.visible=i;for(let c of["ombro","mangaC","bainhaC","mangaL","punho"])l[c].material=o}this.torso.material=o,this.barriga.material=o,this.estampaPlano.visible=this.temIcone&&!r&&t!==4;let a=e===1;for(let l of[this.PL,this.PR])l.calcaL.visible=l.barra.visible=!a,l.bermudaM.visible=l.bermuda.visible=l.peleP.visible=a,l.meiaM.scale.y=a?1.8:1,l.meiaM.position.y=a?.04:.012}setCor(t){let e=t||"#2457F5";this.cor=e,this.camisa.color.set(e),this.gola.color.set(e).lerp(new Qt(this.ap.r===2?"#000000":"#FFFFFF"),this.ap.r===2?.08:.16),this.gravata&&this.gravata.color.set(e)}setIcone(t){let{g:e,t:n}=this.estampa;e.clearRect(0,0,128,128);let i=!!(t&&typeof window<"u"&&window.RI&&window.RI.tem(t+":f"));i&&window.RI.desenhar(e,t+":f",64,64,104,"rgba(255,255,255,.92)"),this.temIcone=i,this.estampaPlano.visible=i&&this.ap.r!==3&&this.ap.r!==4,n.needsUpdate=!0}oriMao(t,e){if(!e)return null;let n;if(e==="baixo"){let a=this.root.rotation.y;n=Mt(Math.sin(a),-.3,Math.cos(a))}else{if(Array.isArray(e)&&e.length===4)return new Fe(...e);n=Mt(...e)}n.normalize();let i=Mt(0,t==="R"?1:-1,0),r=n.clone().negate().addScaledVector(i,n.dot(i)).normalize(),o=new B().crossVectors(i,r);return new Fe().setFromRotationMatrix(new oe().makeBasis(i,r,o))}ik(t,e,n,i){let r=t.sh,o=this.spine,a=o.worldToLocal(e.clone());if(i){let E=o.getWorldQuaternion(new Fe).invert().multiply(i);a.sub(this.gp.clone().applyQuaternion(E))}a.sub(r.position);let l=Wo,c=i?Nf-.055:Nf,h=a.length();h=te(h,Math.abs(l-c)+.02,l+c-.002);let f=te((l*l+c*c-h*h)/(2*l*c),-1,1),u=nt-Math.acos(f),d=Mt(0,-l-c*Math.cos(u),c*Math.sin(u)),m=Mt(0,-1,0),v=d.clone().normalize(),g=a.clone().normalize(),p=new B().crossVectors(v,m).normalize(),M=Mt(t.lado*.55,-1,-.45).normalize(),T=new B().crossVectors(g,M);T.lengthSq()<1e-6&&T.set(1,0,0),T.normalize();let y=new oe().makeBasis(v,p,new B().crossVectors(v,p)),b=new oe().makeBasis(g,T,new B().crossVectors(g,T));t.qIK.setFromRotationMatrix(b.multiply(y.transpose())),t.qFK.copy(r.quaternion),r.quaternion.slerpQuaternions(t.qFK,t.qIK,n),t.el.rotation.x=vt(t.el.rotation.x,-u,n)}aplicar(t,e=0,n=0){let i=Math.sin(e*1.75),r=Math.sin(e*1.75-.7),o=Math.sin(e*.43)*.6+Math.sin(e*.97+1.3)*.4,a=1-te(Math.abs(t.dy)*4+Math.abs(t.hz)*4,0,.6),l=t.alt*vt(1,1/this.esc,te(t.sent||0));this.hips.position.set(.004*o*a,l+t.dy/this.esc+.0025*i,t.hz),this.spine.rotation.set(t.lean+.012*r,t.twist+.02*o*a,t.side+.008*o*a);let c=this.fGir||1;this.torso.scale.set(1.06*c*(1+.01*i),1+.007*i,.74*c*(1+.022*i));let h=Math.sin(e*.52+.6)*.03+Math.sin(e*1.31)*.012;this.neck.rotation.set(t.nod*.35,t.turn*.4+h*.4,t.roll*.4),this.head.rotation.set(t.nod*.65+.008*i,t.turn*.6+h*.6,t.roll*.6+.01*o*a);let f=t.item||"",u=.01*i;this.L.sh.position.y=.437+u,this.R.sh.position.y=.437+u,this.L.sh.rotation.set(-t.aL[0],0,-t.aL[1]),this.L.el.rotation.x=-t.aL[2],this.R.sh.rotation.set(-t.aR[0],0,t.aR[1]),this.R.el.rotation.x=-t.aR[2],this.PL.hp.rotation.x=-t.lL[0],this.PL.kn.rotation.x=t.lL[1],this.PL.ft.rotation.x=t.lL[0]-t.lL[1]+(t.pL||0),this.PR.hp.rotation.x=-t.lR[0],this.PR.kn.rotation.x=t.lR[1],this.PR.ft.rotation.x=t.lR[0]-t.lR[1]+(t.pR||0);let d=t.kL>.001&&t.ikL?this.oriMao("L",t.oriL):null,m=t.kR>.001&&t.ikR?this.oriMao("R",t.oriR):null;(t.kL>.001&&t.ikL||t.kR>.001&&t.ikR)&&(this.root.updateMatrixWorld(!0),t.kL>.001&&t.ikL&&this.ik(this.L,Mt(...t.ikL),te(t.kL),d),t.kR>.001&&t.ikR&&this.ik(this.R,Mt(...t.ikR),te(t.kR),m));let v=te(t.gole||0);if(v>.01&&!(t.kR>.001&&t.ikR)){this.root.updateMatrixWorld(!0);let b=this.root.getWorldQuaternion(new Fe),E=this.esc||1,_=this.head.localToWorld(Mt(0,this.hc-.075,.228)).add(Mt(.07*E,-.1*E+.05*E*v,.085*E).applyQuaternion(b));this.ik(this.R,_,ce(v),null)}let g={controle:[[-.08,0,.12],[0,0,-.12]],tacoShot:[[.25,0,-.1],[-.15,.2,.25]],tacoV:[[0,0,.1],[0,.3,0]],xicara:[null,[.18,-.12,0]],nota:[null,[-.12,0,-.1]],tecla:[[.9,0,0],[.9,0,0]],celular:[null,[.5,-.3,.2]],moeda:[null,[.3,0,0]]}[f]||[null,null],[p,M]=g;this.L.hand.rotation.set(p?p[0]:t.mL*.9,p?p[1]:0,p?p[2]:0),this.R.hand.rotation.set(M?M[0]:t.mR*.9,M?M[1]:0,M?M[2]:0);let T=n>0?Math.min(1,n*16):1;for(let[b,E,P]of[[-1,"L",this.L],[1,"R",this.R]]){let _=this.gestoDe(t,f,E,e),S=E==="L"?this.curL:this.curR;S.s+=(_.s-S.s)*T,this.dedos[E].forEach((R,I)=>{S.c[I]+=(_.c[I]-S.c[I])*T*(R.polegar?.9:1-I*.04);let F=S.c[I];if(R.polegar){R.p1.rotation.z=b*.5-b*F*.4,R.p1.rotation.x=.4-.25*F,R.p2.rotation.z=-b*F*.7;return}R.p1.rotation.z=-b*F*1.08,R.p2.rotation.z=-b*F*1.3,R.p1.rotation.x=-S.s*(I-1.5)*.32}),_.preso||(P.hand.rotation.x+=.05*Math.sin(e*.9+b),P.hand.rotation.z+=.04*Math.sin(e*.7+b*2))}for(let[b,E,P]of[[this.L,d,t.kL],[this.R,m,t.kR]]){if(!E)continue;b.el.updateMatrixWorld(!0);let _=b.el.getWorldQuaternion(new Fe).invert().multiply(E);b.hand.quaternion.slerp(_,te(P))}if(n>0&&this.pT!==null){let b=Math.min(n,.05),E=this.root.rotation.y,P=this.pYaw==null?0:Hn(this.pYaw,E)/b,_=-(t.dy-this.pDy)/b*5-(t.nod-this.pNod)/b*.5;for(let R in this.molas){let I=this.molas[R];I.v+=(_*.8-70*I.a-7*I.v)*b,I.a=te(I.a+I.v*b,-.6,.6),I.vb+=(-P*1.2-60*I.b-6*I.vb)*b,I.b=te(I.b+I.vb*b,-.6,.6)}let S=this.fioM||(this.fioM={a:0,v:0});S.v+=(_-90*S.a-9*S.v)*b,S.a=te(S.a+S.v*b,-.4,.4),this.pYaw=E}if(this.pDy=t.dy,this.pNod=t.nod,this.pT=e,this.fio){let b=this.fioM?this.fioM.a:0;this.fio.rotation.x=b*.6+.015*i,this.fio.rotation.z=.02*o}let y=this.molas.rabo;y&&(y.g.rotation.x=.15+y.a*.8-(t.lean+t.nod)*.6,y.g.rotation.z=y.b*.8+.04*o),this.root.updateMatrixWorld(!0),this.L.hand.localToWorld(this.mL.copy(this.gp)),this.R.hand.localToWorld(this.mR.copy(this.gp))}gestoDe(t,e,n,i){let r=x_,o=n==="L"?t.gestoL:t.gestoR;if(!o){let c=n==="L"?t.aL:t.aR,h=n==="L"?t.mL:t.mR;e==="tecla"?o="tecla":e==="controle"?o="controle":e==="tacoShot"?o=n==="L"?"ponte":"segura":e==="tacoV"?o=n==="R"?"segura":"":n==="R"&&/moeda|dardo/.test(e)?o="pinca":n==="R"&&/xicara|nota|celular/.test(e)&&(o="segura"),!o&&h>.5&&(o="segura"),!o&&c[0]>2.2&&(o="aberta")}let a=r[o]||r.solto,l=a.c.slice();if(o==="tecla")for(let c=0;c<4;c++)l[c]+=.32*Math.max(0,Math.sin(i*12.5+c*2.1+(n==="L"?0:1.3)))**3;else if(o==="controle")l[4]=.35+.25*Math.max(0,Math.sin(i*(n==="L"?7:9.5)+(n==="L"?0:2)));else if(!a.preso)for(let c=0;c<5;c++)l[c]+=.07*Math.sin(i*(.6+c*.17)+c*1.7+(n==="L"?0:3))+(t.tamb&&n==="R"&&c<4?.35*Math.max(0,Math.sin(i*14-c*1.1))**4:0);return{c:l,s:a.s,preso:!!a.preso}}desenharRosto(t,e){t&&t.boca!==void 0&&t.sorr===void 0&&(t=Vf(t));let n=this.pisca||(this.pisca={prox:1.5,t:-9,dup:!1});e>n.prox&&(n.t=e,n.dup=Math.random()<.18,n.prox=e+(1.8+Math.random()*3.6)*(t.dentroS<-.3?.7:1)),t.piscar&&e-n.t>.5&&(n.t=e,n.prox=e+2+Math.random()*3);let i=e-n.t,r=0;i<.16?r=Math.sin(i/.16*nt):n.dup&&i>.24&&i<.4&&(r=Math.sin((i-.24)/.16*nt));let o=(ft,dt=20)=>Math.round((ft||0)*dt),a=["sorr","abre","larg","redondo","assim","dentes","lingua","morde","olho","feliz","fecha","sobeS","dentroS","sobeAssim","boch","ox","oy"].map(ft=>o(t[ft])).join(",")+"|"+o(r,8)+"|"+(t.lagrima>.05?Math.floor(e*.6%1*24):-1);if(a===this.rostoKey)return;this.rostoKey=a;let{g:l,t:c}=this.rosto;l.save(),l.setTransform(1,0,0,1,0,0),l.clearRect(0,0,512,384),l.restore(),l.save(),l.translate(128,0),l.scale(g_,1),l.translate(-128,0);let h=rn.p[this.ap.p],f=rn.c[this.ap.c],u=this.ap.p>=4,d=128,m=104,v=47,g=u?"#160C07":"#2A1810",p=u?"rgba(20,8,4,.2)":"rgba(120,60,35,.12)";l.lineCap="round",l.lineJoin="round";let M=te(t.sorr,-1,1),T=te(t.abre),y=te(t.feliz),b=te(Math.max(t.fecha||0,r*.98));for(let ft of[-1,1]){let dt=l.createRadialGradient(d+ft*v,m-2,4,d+ft*v,m-2,32);dt.addColorStop(0,p),dt.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=dt,l.beginPath(),l.ellipse(d+ft*v,m-2,32,22,0,0,se),l.fill()}let E=.16+.84*te(t.boch),P=Math.max(0,M)*6;for(let ft of[-1,1]){let dt=140-P,x=l.createRadialGradient(d+ft*60,dt,1,d+ft*60,dt,25);x.addColorStop(0,`rgba(235,95,95,${.42*E})`),x.addColorStop(1,"rgba(235,95,95,0)"),l.fillStyle=x,l.beginPath(),l.ellipse(d+ft*60,dt,25,14,0,0,se),l.fill()}let _=m-30;for(let ft of[-1,1]){let dt=(t.sobeAssim||0)*(ft>0?1:-1),x=_-(t.sobeS||0)*9-(t.dentroS||0)*8-dt*5,A=_-(t.sobeS||0)*8+(t.dentroS||0)*4-2-dt*6-y*2,L=d+ft*16,k=d+ft*(v+25),Y=Math.min(x,A)-5;l.fillStyle=ys(f,"#000000",.3),l.beginPath(),l.moveTo(L,x+2),l.quadraticCurveTo((L+k)/2,Y-2,k,A+1),l.quadraticCurveTo((L+k)/2,Y+5,L,x+9),l.closePath(),l.fill()}let S=23.5,R=17,I=te((t.olho??1)*(1-b),0,1.25);for(let ft of[-1,1]){let dt=d+ft*v,x=R*1.22*I,A=Math.max(R*(1.05-.85*y)*Math.min(I,1),0),L=m+y*4,k=()=>{l.beginPath(),l.moveTo(dt-S,L+1),l.bezierCurveTo(dt-S*.6,L-x,dt+S*.5,L-x*1.04,dt+S,L-1),l.bezierCurveTo(dt+S*.55,L+A-y*9,dt-S*.55,L+A-y*9,dt-S,L+1),l.closePath()};if(x>1.2&&x+A-y*9>2.5){l.save(),k(),l.clip(),l.fillStyle="#FBF8F4",l.fillRect(dt-S-2,L-R*1.6,S*2+4,R*3.2);let Y=dt+(t.ox||0)*4.8,gt=L+(t.oy||0)*3.2+1,Ht=13*(1-.05*Math.max(0,I-1)*4),K=l.createRadialGradient(Y,gt-2,1,Y,gt,Ht);K.addColorStop(0,"#8A5530"),K.addColorStop(.6,"#55301A"),K.addColorStop(1,"#22120A"),l.fillStyle=K,l.beginPath(),l.arc(Y,gt,Ht,0,se),l.fill(),l.fillStyle="#0B0604",l.beginPath(),l.arc(Y,gt,6-1.2*Math.max(0,I-1)*4,0,se),l.fill(),l.fillStyle="rgba(255,255,255,.97)",l.beginPath(),l.arc(Y-4,gt-4.6,3.8,0,se),l.fill(),l.fillStyle="rgba(255,255,255,.75)",l.beginPath(),l.arc(Y+3.6,gt+3.4,1.5,0,se),l.fill(),l.fillStyle="rgba(0,0,0,.16)",l.fillRect(dt-S-2,L-x-2,S*2+4,7),l.restore(),l.strokeStyle=g,l.lineWidth=3.6,l.beginPath(),l.moveTo(dt-S,L+1),l.bezierCurveTo(dt-S*.6,L-x,dt+S*.5,L-x*1.04,dt+S,L-1),l.stroke(),l.lineWidth=2.4,l.beginPath(),l.moveTo(dt+ft*S*.9,L-2),l.lineTo(dt+ft*(S+5),L-6.5),l.stroke(),y>.25&&(l.strokeStyle=u?`rgba(10,4,2,${.25*y})`:`rgba(150,75,50,${.3*y})`,l.lineWidth=1.6,l.beginPath(),l.moveTo(dt-11,L+12),l.quadraticCurveTo(dt,L+16,dt+11,L+12),l.stroke())}else{let Y=y>.4?-7*y:6;if(l.strokeStyle=g,l.lineWidth=3.6,l.beginPath(),l.moveTo(dt-S,L+1),l.quadraticCurveTo(dt,L+Y,dt+S,L),l.stroke(),y<=.4){l.lineWidth=1.8;for(let gt of[-.7,-.15,.4,.85]){let Ht=dt+gt*S;l.beginPath(),l.moveTo(Ht,L+4.5-Math.abs(gt)*2),l.lineTo(Ht+ft*1.2,L+8.5-Math.abs(gt)*2),l.stroke()}}}}l.fillStyle=u?"rgba(10,4,2,.35)":"rgba(120,55,35,.28)";for(let ft of[-1,1])l.beginPath(),l.ellipse(d+ft*6.5,141,3.2,1.8,ft*.35,0,se),l.fill();let F=te(t.redondo);if(M>.45&&F<.5){let ft=(M-.45)*2*(1-F*2);l.strokeStyle=u?`rgba(10,4,2,${.3*ft})`:`rgba(140,70,50,${.34*ft})`,l.lineWidth=1.8;for(let dt of[-1,1])l.beginPath(),l.moveTo(d+dt*22,141),l.quadraticCurveTo(d+dt*34,152,d+dt*31,166),l.stroke()}let U=161,N=ys(h,"#8E2F2B",u?.35:.42),O=ys(h,"#B5524A",u?.28:.36),X=ys(h,"#3A0F0C",.7),W="#4A1216",rt=21*(t.larg??1)*(1-.45*F)*(1+.15*Math.max(0,M)*(1-F)),q=ft=>U-M*7.5+(t.assim||0)*ft*4.5,j=d-rt,tt=d+rt,st=q(-1),pt=q(1),bt=T*(24+8*F);if(bt<1.6)l.fillStyle=N,l.beginPath(),l.moveTo(j,st),l.quadraticCurveTo(d-rt*.45,U-5.5,d,U-3.2),l.quadraticCurveTo(d+rt*.45,U-5.5,tt,pt),l.quadraticCurveTo(d,U+1+M*4,j,st),l.fill(),l.fillStyle=O,l.beginPath(),l.moveTo(j+2,st+.5),l.quadraticCurveTo(d,U+1.5+M*4,tt-2,pt+.5),l.quadraticCurveTo(d,U+9+M*3.5,j+2,st+.5),l.fill(),l.strokeStyle=X,l.lineWidth=2,l.beginPath(),l.moveTo(j,st),l.quadraticCurveTo(d,U+1.2+M*5,tt,pt),l.stroke(),t.morde>.1&&(l.fillStyle="#FAF6F0",l.beginPath(),l.ellipse(d+3,U+2,7*t.morde,2.6*t.morde,0,0,se),l.fill()),t.lingua>.1&&(l.fillStyle="#E06D78",l.beginPath(),l.ellipse(d+7,U+4+2*t.lingua,6*t.lingua,4*t.lingua,.3,0,se),l.fill());else{let ft=U-3-T*2,dt=U+bt-M*3,x=()=>{l.beginPath(),l.moveTo(j,st),l.quadraticCurveTo(d,ft-M*2,tt,pt),l.quadraticCurveTo(d+rt*.75,dt,d,dt),l.quadraticCurveTo(d-rt*.75,dt,j,st),l.closePath()};x(),l.fillStyle=W,l.fill(),l.save(),x(),l.clip(),t.dentes>.05&&(l.fillStyle="#FAF6F0",l.fillRect(d-rt,ft-6,rt*2,4+6.5*t.dentes));let A=Math.max(t.lingua||0,T*.7);A>.1&&(l.fillStyle="#D2626A",l.beginPath(),l.ellipse(d,dt,rt*.55,Math.max(3,bt*.4)*A,0,0,se),l.fill()),l.restore(),l.strokeStyle=N,l.lineWidth=3.4,x(),l.stroke()}if(t.lagrima>.05){let ft=(e*.6%1*24|0)/24;l.fillStyle=`rgba(120,180,250,${.9*(1-ft)*t.lagrima})`;let dt=d-v-12,x=m+12+ft*60;l.beginPath(),l.moveTo(dt,x-7),l.quadraticCurveTo(dt+6,x+3,dt,x+4.5),l.quadraticCurveTo(dt-6,x+3,dt,x-7),l.fill()}l.restore(),c.needsUpdate=!0}},x_={solto:{c:[.52,.44,.36,.28,.28],s:.06},segura:{c:[.98,.95,.92,.88,.78],s:0,preso:!0},punho:{c:[1.15,1.15,1.12,1.08,.95],s:0,preso:!0},pinca:{c:[.85,.75,.6,.62,.62],s:0,preso:!0},aponta:{c:[1.15,1.15,1.1,.02,.75],s:0,preso:!0},joinha:{c:[1.15,1.15,1.12,1.08,-.45],s:0,preso:!0},aberta:{c:[.04,.03,.02,.02,0],s:.38},ponte:{c:[.3,.25,.2,.35,.1],s:.3,preso:!0},tecla:{c:[.5,.48,.45,.42,.3],s:.08,preso:!0},controle:{c:[.95,.9,.85,.7,.35],s:0,preso:!0},carinho:{c:[.2,.18,.15,.15,.15],s:.12}};function Vf(s){let t={sorr:.3,abre:0,larg:1,redondo:0,assim:0,dentes:0,lingua:0,morde:0,olho:1,feliz:0,fecha:0,sobeS:0,dentroS:0,sobeAssim:0,boch:s.boch||0,lagrima:s.lagrima||0,ox:s.olhar?s.olhar[0]:0,oy:s.olhar?s.olhar[1]:0},e=te(s.abre??.6);switch(s.boca){case"sorriso":Object.assign(t,{sorr:.85,abre:.3,dentes:.9});break;case"leve":t.sorr=.3;break;case"reta":t.sorr=0;break;case"triste":t.sorr=-.6;break;case"foco":Object.assign(t,{sorr:-.05,larg:.85,assim:.3});break;case"o":Object.assign(t,{sorr:0,abre:.18+.3*e,redondo:1});break;case"aberta":Object.assign(t,{sorr:.55,abre:.3+.6*e,dentes:.7});break}return s.olhos==="F"&&(t.feliz=1),s.olhos==="Z"&&(t.fecha=1),(s.sob==="triste"||!s.sob&&s.boca==="triste")&&(t.dentroS=.85,t.sobeS=-.1,t.olho=.82),s.sob==="tenso"&&(t.dentroS=-.6,t.sobeS=-.15),(s.boca==="o"||s.boca==="aberta")&&(t.sobeS+=.45*e),(s.boca==="sorriso"||s.olhos==="F")&&(t.sobeS+=.15),t}var xu=s=>{let t={...Gn,...s};for(let e of pc)t[e]=(s[e]||Gn[e]).slice();return t};function Xt(s,t={}){let e=xu(t),n=Math.sin(s*1.8);return e.lean+=.012*n,e.side+=.018*Math.sin(s*.37),t.aL||(e.aL=[.05+.03*n,.09,.3]),t.aR||(e.aR=[.05+.03*n,.09,.3]),t.lL||(e.lL=[.02,.04]),t.lR||(e.lR=[.02,.04]),e}var Bf=[1.25,1.4];function Ci(s,t,e={}){let n=Math.sin(s*1.8),i=xu({alt:t,sent:1,lL:Bf,lR:Bf,aL:[.62+.02*n,-.08,.98],aR:[.6+.02*n,-.08,1],...e});return i.lean+=.04+.01*n,i}function uc(s,t,e={}){let n=Xt(s,e);return n.alt=vt(.89,.5,t),n.lL=[vt(.02,1.35,t),vt(.04,2.1,t)],n.lR=[vt(.02,1.05,t),vt(.04,1.9,t)],n.lean+=.35*t,n.nod+=.15*t,n}function __(s,t,e,n=1){let i=t==="corre",r=t==="triste",o=i?2.1:r?.95:1.32,a=.88*n,l=Math.asin(te(o/(4*a),0,.85))*(i?1.05:1),c=s/o*se,h=Math.sin(c),f=Math.cos(c),u=i?1.35:r?.65:.95,d=(g,p)=>.08+u*Math.pow(Math.max(0,g),1.6)+.12*Math.max(0,p)*(i?.5:1),m=(g,p)=>.38*Math.max(0,-g)*Math.max(0,p)*1.6-.22*Math.max(0,g)*Math.max(0,-p),v=xu({lL:[l*h,d(f,h)],lR:[-l*h,d(-f,-h)],pL:m(h,f),pR:m(-h,-f),aL:[-l*.95*h,.1,(i?1.35:.3)+.22*Math.max(0,-Math.sin(c-.5))],aR:[l*.95*h,.1,(i?1.35:.3)+.22*Math.max(0,Math.sin(c-.5))],lean:i?.2:r?.16:.07,twist:.1*h,side:.03*f,roll:-.025*f,boca:r?"triste":i?"aberta":"leve"});return v.turn=-.09*h,v.nod=r?.45:-.03+.025*Math.abs(f),v.alt=.07+.82*Math.cos(l*Math.abs(h))+(i?.05*Math.abs(f):.014*Math.abs(f)),v.andando=1,v}function Ts(s,t,e){if(e>=1)return t;if(e<=0)return s;let n={...t};for(let i of hu)n[i]=vt(s[i]??Gn[i],t[i]??Gn[i],e);for(let i of pc)n[i]=(s[i]||Gn[i]).map((r,o)=>vt(r,(t[i]||Gn[i])[o],e));for(let i of["ikL","ikR"])n[i]=s[i]&&t[i]?s[i].map((r,o)=>vt(r,t[i][o],e)):t[i]||s[i];if(e<.5)for(let i of m_)n[i]=s[i];return n}var Of={yawAdd:30,nod:8,turn:7.5,roll:8,lean:10,side:10,twist:10,alt:18,dy:20,hz:14,pL:26,pR:26,olhar:30,lL:24,lR:24,aL:13,aR:13},gc=class{constructor(){this.x=null,this.v={}}mola(t,e,n,i){let r=this.x[t],o=this.v[t]||0,a=r-e,l=Math.exp(-i*n),c=(o+i*a)*n;return this.x[t]=e+(a+c)*l,this.v[t]=(o-i*c)*l,this.x[t]}passo(t,e,n=15){if(!this.x||e<=0||e>.5){this.x={},this.v={};for(let r of hu)this.x[r]=t[r]??Gn[r];for(let r of pc)(t[r]||Gn[r]).forEach((o,a)=>{this.x[r+a]=o});for(let r of["ikL","ikR"])t[r]&&t[r].forEach((o,a)=>{this.x[r+a]=o});return t}let i={...t};for(let r of hu)i[r]=this.mola(r,t[r]??Gn[r],e,Of[r]||n);for(let r of pc)i[r]=(t[r]||Gn[r]).map((o,a)=>this.mola(r+a,o,e,Of[r]||n*1.1));for(let r of["ikL","ikR"]){if(!t[r]){this.x[r+"0"]!=null&&(i[r]=[0,1,2].map(o=>this.x[r+o]));continue}if(this.x[r+"0"]==null){t[r].forEach((o,a)=>{this.x[r+a]=o,this.v[r+a]=0}),i[r]=t[r];continue}i[r]=t[r].map((o,a)=>this.mola(r+a,o,e,n*1.3))}return i}},su={neutro:{},contente:{sorr:.45,feliz:.3,boch:.3},concentrado:{sorr:-.05,larg:.82,assim:.35,dentroS:-.3,olho:.9,lingua:.55},surpreso:{abre:.42,redondo:.7,sorr:.1,sobeS:.85,olho:1.2},rindo:{sorr:.9,abre:.5,dentes:1,feliz:.9,boch:.6,sobeS:.2},bocejo:{abre:1,redondo:.55,sorr:0,fecha:.85,sobeS:.35},pensativo:{sorr:.05,assim:.55,sobeAssim:.6,olho:.9,larg:.85},orgulhoso:{sorr:.6,assim:.55,feliz:.45,sobeAssim:.35,boch:.35},assovia:{redondo:1,abre:.14,larg:.42,sobeS:.25,sorr:.1},gargalhada:{sorr:1,abre:.85,dentes:1,feliz:1,boch:.9,sobeS:.45},grito:{abre:.95,redondo:.35,sorr:.65,olho:1.12,sobeS:.75,dentes:.8,boch:.8},tenso:{sorr:-.25,larg:.8,dentroS:-.75,olho:1.05},mordeLabio:{sorr:-.15,larg:.75,assim:-.5,dentroS:-.35,morde:1},aflito:{sorr:-.45,dentroS:.75,sobeS:.25,olho:1.1},resmunga:{sorr:-.2,dentroS:-.45,larg:.85},suspira:{sorr:-.1,abre:.15,redondo:.4,fecha:.5,dentroS:.3},esperanca:{sorr:.25,dentroS:.45,sobeS:.2},choroso:{sorr:-.75,dentroS:1,olho:.72,lagrima:1,abre:.08},vazio:{sorr:-.15,olho:.68,dentroS:.35},sorrisoFraco:{sorr:.2,dentroS:.55,olho:.85},cumprimenta:{sorr:.75,feliz:.6,sobeS:.6,boch:.5}},zf={tranquilo:[["contente",4,3,6],["concentrado",3,3,7],["surpreso",1,.9,1.6],["rindo",1.2,1.4,2.6],["bocejo",.6,2.4,3.2],["pensativo",1,2.5,4.5],["assovia",.8,2.5,4],["neutro",2,2,4]],feliz:[["contente",3,3,6],["rindo",2,1.5,3],["orgulhoso",2,2.5,4.5],["concentrado",1.5,2,4],["assovia",1.2,2.5,4],["neutro",1,2,3]],euforico:[["gargalhada",3,1.5,3],["grito",2,.9,1.8],["rindo",2,1.5,3],["contente",1.5,2,4]],preocupado:[["tenso",3,3,6],["mordeLabio",2,1.5,3],["aflito",2,2,4],["resmunga",2,1.8,3.5],["suspira",1.5,1.8,2.6],["esperanca",1,2,3.5],["pensativo",1,2,4]],triste:[["choroso",2,3,6],["vazio",3,3,6],["suspira",2,1.8,2.6],["sorrisoFraco",.6,1.5,3],["aflito",1,2,4]]},v_=[{nome:"nariz",req:["R"],dur:1.7,humores:"*",peso:1},{nome:"nuca",req:["R"],dur:2.2,humores:["preocupado","triste","tranquilo"],peso:1},{nome:"coca",req:["R"],dur:1.9,humores:["preocupado","tranquilo"],peso:1},{nome:"pescoco",req:[],dur:2.6,humores:"*",peso:1},{nome:"suspiro",req:[],dur:2.4,humores:["preocupado","triste","tranquilo"],peso:1.2},{nome:"tamborila",req:["Rapoio"],dur:2.6,humores:["preocupado","tranquilo","feliz"],peso:1.4},{nome:"cintura",req:["R","L","pe"],dur:3.2,humores:["feliz","preocupado","tranquilo"],peso:1},{nome:"alonga",req:["R","L","pe"],dur:3,humores:["tranquilo","triste"],peso:.6},{nome:"ombros",req:[],dur:1.6,humores:"*",peso:.8}],ru=(s,t)=>{let e=s.reduce((i,r)=>i+t(r),0),n=Math.random()*e;for(let i of s)if(n-=t(i),n<=0)return i;return s[s.length-1]},bs={sorr:.3,abre:0,larg:1,redondo:0,assim:0,dentes:0,lingua:0,morde:0,olho:1,feliz:0,fecha:0,sobeS:0,dentroS:0,sobeAssim:0,boch:0,lagrima:0},xc=class{constructor(){this.emo={nome:"neutro",t0:0,fim:2},this.emoAnt={nome:"neutro"},this.glance=null,this.proxGlance=2+Math.random()*3,this.mania=null,this.proxMania=5+Math.random()*4,this.F={...bs},this.Fv={},this.wGaze=0,this.yawG=0,this.pitchG=0}expressao(t,e){let n=this.emo;if(t>n.fim||this.humor!==e){this.humor=e;let i=zf[e]||zf.tranquilo,[r,,o,a]=ru(i.filter(l=>l[0]!==n.nome||i.length<2),l=>l[1]);this.emoAnt={nome:n.nome,ate:t+.5},this.emo={nome:r,t0:t,fim:t+o+Math.random()*(a-o)}}return this.emo}passo(t,e){let n=e.T,i=e.dt;t={...t,aL:t.aL.slice(),aR:t.aR.slice(),lL:t.lL.slice(),lR:t.lR.slice(),olhar:t.olhar.slice()};let r=!t.andando&&Math.abs(t.dy||0)<.03,o=(t.sent||0)<.3,a=r&&(t.kR||0)<.05&&!t.item&&!e.ocupado&&t.aR[0]<1.3&&!t.gestoR,l=r&&(t.kL||0)<.05&&!e.ocupadoL&&!e.ocupado&&t.aL[0]<1.3&&t.mL<.5&&!t.gestoL,c=r&&!e.ocupado&&(t.kR||0)<.05&&!t.item&&(t.sent||0)>.5,h=this.expressao(n,e.humor),f=Wt(n-h.t0,0,h.fim-h.t0,.45);if(!this.mania&&n>this.proxMania&&!e.reduz){let T=v_.filter(y=>(y.humores==="*"||y.humores.includes(e.humor))&&y.req.every(b=>b==="R"?a:b==="L"?l:b==="pe"?o&&r:b==="Rapoio"?c:!0)&&r);if(T.length){let y=ru(T,b=>b.peso);this.mania={...y,t0:n}}this.proxMania=n+(e.humor==="preocupado"?4:6)+Math.random()*6}let u=this.mania;if(u){let T=n-u.t0,y=Wt(T,0,u.dur,.45),b=u.req.every(E=>E==="R"?a||T>.2&&!t.item&&(t.kR||0)<.05&&r:E==="L"?l||T>.2&&r:E==="pe"?o&&r:E==="Rapoio"?c:!0);if(T>u.dur||!b&&y<.05)this.mania=null;else{let E=b?y:y*.5,P=(_,S)=>_.forEach((R,I)=>{_[I]=vt(R,S[I],E)});switch(u.nome){case"nariz":{let _=e.nariz;if(_){let S=Math.sin(T*16)*.012*y;t.ikR=[_.x+S,_.y,_.z],t.kR=E*.95,t.gestoR="aponta",t.nod+=.06*E}break}case"nuca":P(t.aR,[2.55,.65,2.55+.12*Math.sin(T*9)]),t.nod+=.18*E,t.gestoR="carinho";break;case"coca":P(t.aR,[2.65,.25,2.3+.15*Math.sin(T*13)]),t.roll-=.08*E,t.gestoR="carinho";break;case"pescoco":{let _=Math.sin(ie(T,.2,u.dur-.2)*se);t.roll+=.28*_*E,t.nod+=.12*E,t.fechaOlhos=E;break}case"suspiro":{let _=Math.sin(nt*ie(T,.1,1.4));t.lean-=.06*_*E,t.dy+=.012*_*E,t.nod+=-.08*_*E+.1*ie(T,1.4,u.dur)*E,t.suspiro=_*E;break}case"tamborila":t.tamb=1;break;case"cintura":P(t.aR,[.35,.85,1.75]),P(t.aL,[.35,.85,1.75]),t.lean-=.04*E,t.gestoR=t.gestoL="solto";break;case"alonga":{let _=ce(ie(T,.2,1.2))*(1-ce(ie(T,2.2,3)));P(t.aR,[vt(.2,3,_),.2,.25]),P(t.aL,[vt(.2,3,_),.2,.25]),t.lean-=.12*_*E,t.nod-=.25*_*E,t.dy+=.03*_*E,t.gestoR=t.gestoL=_>.5?"aberta":"",t.boceja=_*E;break}case"ombros":{let _=Math.sin(nt*ie(T,0,u.dur));t.dy+=.018*_,t.lean-=.04*_;break}}}}if(o&&r&&!t.andando){let T=Math.sin(n*.21+1.3)*.7+Math.sin(n*.13)*.3,y=e.legsLivres?1:0;t.side+=.03*T*y,t.twist+=.025*T*y,t.lL[1]+=.14*Math.max(0,T)*y,t.lL[0]+=.05*Math.max(0,T)*y,t.lR[1]+=.14*Math.max(0,-T)*y,t.lR[0]+=.05*Math.max(0,-T)*y,t.alt-=.008*Math.abs(T)*y}a&&!(u&&u.req.includes("R"))&&(t.aR[2]+=.04*Math.sin(n*.71+1),t.aR[0]+=.025*Math.sin(n*.53)),l&&!(u&&u.req.includes("L"))&&(t.aL[2]+=.04*Math.sin(n*.67),t.aL[0]+=.025*Math.sin(n*.49+2));let d=h.nome,m=f*(e.facePropria?.3:1);if(d==="rindo"||d==="gargalhada"){let T=d==="gargalhada"?1:.55;t.dy+=.01*Math.abs(Math.sin(n*11))*m*T,t.lean-=.07*m*T,t.nod-=.08*m*T+.04*Math.sin(n*11)*m*T}if(d==="bocejo"&&!t.boceja&&(t.nod-=.25*m,t.lean-=.05*m),d==="resmunga"&&(t.turn+=.06*Math.sin(n*3.3)*m,t.roll+=.04*Math.sin(n*2.1)*m),d==="surpreso"&&(t.nod-=.12*m,t.lean-=.04*m),(d==="aflito"||d==="choroso"||d==="vazio")&&(t.nod+=.1*m),d==="orgulhoso"&&(t.nod-=.08*m,t.lean-=.03*m),!this.glance&&n>this.proxGlance&&e.alvos&&e.alvos.length&&!e.reduz){let T=ru(e.alvos,y=>y.peso);this.glance={...T,t0:n,dur:.9+Math.random()*1.8},T.nome==="camera"&&e.humor!=="triste"&&Math.random()<.35&&(this.glance.acena=!0,this.glance.dur=2.4),this.proxGlance=n+3+Math.random()*5.5}if(this.glance&&n-this.glance.t0>this.glance.dur&&(this.glance=null),this.glance&&this.glance.acena&&a&&!this.mania){let T=Wt(n-this.glance.t0,.2,this.glance.dur,.4);t.aR=t.aR.map((y,b)=>vt(y,[2.55,.5,.9+.35*Math.sin(n*9)][b],T)),T>.3&&(t.gestoR="aberta")}let v=null,g=0,p=(t.kR||0)>.25&&t.ikR&&!t.item?["R",t.kR]:(t.kL||0)>.25&&t.ikL&&!t.gestoL?["L",t.kL]:null;if(t.olharW)v=Mt(...t.olharW),g=1;else if(p&&!e.semOlharMao){let T=p[0]==="R"?t.ikR:t.ikL;v=Mt(...T),g=.85*te(p[1])}else this.glance?(v=this.glance.pos,g=Wt(n-this.glance.t0,0,this.glance.dur,.25)*(t.andando?.6:.9)):e.foco&&(v=e.foco,g=t.andando?.3:.75);if(this.olhandoCamera=this.glance&&this.glance.nome==="camera"?Wt(n-this.glance.t0,0,this.glance.dur,.25):0,this.wGaze=vt(this.wGaze,v?g:0,Math.min(1,i*6)),v&&e.cabeca){let T=v.clone().sub(e.cabeca),y=Hn(e.yawCorpo+(t.twist||0),Math.atan2(T.x,T.z)),b=Math.atan2(T.y,Math.hypot(T.x,T.z));this.yawG=te(y,-1.6,1.6),this.pitchG=te(b,-1,.8)}let M=this.wGaze;if(M>.01){let T=te(this.yawG*.78,-1.05,1.05),y=te(-this.pitchG*.65,-.5,.65);t.turn=vt(t.turn,T,M),t.nod=vt(t.nod,y+(t.nod-(t.nod||0)),M*.85),t.olhar[0]=vt(t.olhar[0],te((this.yawG-T)*2.4,-1.4,1.4),M),t.olhar[1]=vt(t.olhar[1],te(-(this.pitchG+y/.65*.65)*2.2,-1.4,1.4),M)}return t}rosto(t,e){let n=e.T,i=e.dt,r=Vf(t),o=this.emo,a=Wt(n-o.t0,0,o.fim-o.t0,.45)*(e.facePropria?.25:1),l=su[o.nome]||{},c={...r};for(let h in l)c[h]=vt(r[h]??bs[h],l[h]*(h==="sorr"||h==="dentroS"||h==="sobeS"?1.15:1),a);if(o.nome==="resmunga"&&(c.abre=Math.max(c.abre,a*(.08+.14*Math.max(0,Math.sin(n*9)*Math.sin(n*3.7))))),(o.nome==="rindo"||o.nome==="gargalhada")&&(c.abre=Math.max(0,c.abre-a*.2*Math.abs(Math.sin(n*11)))),t.suspiro&&(c.abre=Math.max(c.abre,.15*t.suspiro),c.redondo=Math.max(c.redondo,.5*t.suspiro),c.fecha=Math.max(c.fecha,.5*t.suspiro)),t.boceja&&(c.abre=Math.max(c.abre,t.boceja),c.redondo=Math.max(c.redondo,.5*t.boceja),c.fecha=Math.max(c.fecha,.85*t.boceja)),t.fechaOlhos&&(c.fecha=Math.max(c.fecha,.9*t.fechaOlhos)),this.olhandoCamera>.01&&!e.facePropria&&e.humor!=="triste"){let h=this.olhandoCamera;for(let f in su.cumprimenta)c[f]=vt(c[f],su.cumprimenta[f],h*.8)}c.sobeS+=.06*Math.sin(n*.83)+.04*Math.sin(n*2.3+1),c.sorr+=.04*Math.sin(n*.61+2);for(let h in bs){let f=h==="abre"||h==="fecha"?22:h==="sobeS"||h==="dentroS"?14:9,u=this.F[h]??bs[h],d=this.Fv[h]||0,m=u-(c[h]??bs[h]),v=Math.exp(-f*i),g=(d+f*m)*i;this.F[h]=(c[h]??bs[h])+(m+g)*v,this.Fv[h]=(d-f*g)*v,i>0||(this.F[h]=c[h]??bs[h])}return this.F.ox=t.olhar[0],this.F.oy=t.olhar[1],this.F.piscar=Math.abs(this.yawG-(this.yawGAnt??this.yawG))>.5,this.yawGAnt=this.yawG,this.F}},du=class{constructor(){let t=et("#C08552",{r:.9}),e=et("#8B5A35",{r:.9}),n=et("#2B1B14",{r:.4}),i=this.g=new At;this.corpo=new At,i.add(this.corpo),Ln(this.corpo,t,.12,.26,0,0,0,{rx:nt/2}),ue(this.corpo,et("#E3B98E",{r:.9}),.1,0,-.03,.08,{s:[.8,.7,1.3]}),this.cab=new At,this.cab.position.set(0,.12,.2),this.corpo.add(this.cab),ue(this.cab,t,.115,0,.04,0),ue(this.cab,et("#D9A577"),.062,0,0,.1,{s:[1,.8,1.2]}),ue(this.cab,n,.026,0,.02,.17);for(let r of[-1,1])ue(this.cab,et("#FFFFFF",{r:.3}),.02,r*.045,.08,.098),ue(this.cab,n,.013,r*.047,.082,.112);this.lingua=ue(this.cab,et("#F87171"),.025,0,-.04,.13,{s:[1,.5,1.4]}),this.orelhas=[];for(let r of[-1,1]){let o=new At;o.position.set(r*.09,.1,-.01),this.cab.add(o),Ot(new fn(.055,12,10),e,o,r*.012,-.04,0,{s:[.45,1.2,.9],rz:r*.4}),this.orelhas.push(o)}this.coleira=he(this.corpo,et("#DC2626",{r:.4}),.085,.085,.03,0,.09,.17,{rx:1.1,seg:20}),this.patas=[];for(let[r,o]of[[-.07,.15],[.07,.15],[-.07,-.15],[.07,-.15]]){let a=new At;a.position.set(r,-.04,o),this.corpo.add(a),Ln(a,t,.04,.12,0,-.1,0),this.patas.push(a)}this.rabo=new At,this.rabo.position.set(0,.06,-.2),this.corpo.add(this.rabo),Ln(this.rabo,t,.025,.14,0,.08,-.02,{rx:-.6}),In(i,!0,!1),this.zzz=new At,i.add(this.zzz);for(let r=0;r<2;r++){let o=ke(64,64);o.g.font="bold 52px system-ui",o.g.fillStyle="#6366F1",o.g.textAlign="center",o.g.fillText("z",32,48);let a=new ki(new Si({map:o.t,transparent:!0,depthWrite:!1}));a.scale.setScalar(.16-r*.04),this.zzz.add(a)}this.pos=null,this.yaw=0,this.rota=null,this.dist=0,this.alvo=null}mover(t,e,n){if(this.pos||(this.pos=[t[0],t[1]],this.yaw=t[2]),(!this.alvo||Math.hypot(t[0]-this.alvo[0],t[1]-this.alvo[1])>.2)&&(this.alvo=t.slice(),this.rota=Math.hypot(t[0]-this.pos[0],t[1]-this.pos[1])>.15?n.caminho(this.pos,t,.12):null),this.rota&&this.rota.length){let a=this.rota[0],l=a[0]-this.pos[0],c=a[1]-this.pos[1],h=Math.hypot(l,c),f=1.5*e;return h<=f?(this.pos=[a[0],a[1]],this.rota.shift()):(this.pos[0]+=l/h*f,this.pos[1]+=c/h*f),this.yaw=qo(this.yaw,Math.atan2(l,c),Math.min(1,e*10)),this.dist+=Math.min(f,h),!1}this.rota=null;let i=t[0]-this.pos[0],r=t[1]-this.pos[1],o=Math.hypot(i,r);if(o>.03&&o<1.2){let a=Math.min(o,1.2*e);return this.pos[0]+=i/o*a,this.pos[1]+=r/o*a,this.yaw=qo(this.yaw,Math.atan2(i,r),Math.min(1,e*10)),this.dist+=a,!1}return this.yaw=qo(this.yaw,t[2],Math.min(1,e*5)),!0}quadro(t,e){let n=this.corpo;this.zzz.visible=t==="dorme";let i=t==="pula"||t==="carinho"||t==="anda",r=Math.sin(e*(t==="dorme"?2:16))*(t==="dorme"?.2:i?.8:.5);if(this.rabo.rotation.set(0,r,0),this.lingua.visible=t!=="dorme",this.orelhas.forEach((o,a)=>{o.rotation.x=t==="anda"?Math.sin(e*14+a)*.25:0}),t==="dorme")n.position.set(0,.1+.008*Math.sin(e*2),0),n.rotation.set(0,0,.12),this.patas.forEach((o,a)=>o.rotation.set(a<2?-1.35:1.35,0,0)),this.cab.rotation.set(.5,.25,0),this.cab.position.set(0,.04,.22),this.zzz.children.forEach((o,a)=>{let l=(e*.45+a*.5)%1;o.position.set(.12+l*.1,.32+l*.35,.2),o.material.opacity=1-l});else if(t==="anda"){let o=this.dist/.28*se;n.position.set(0,.2+.02*Math.abs(Math.sin(o)),0),n.rotation.set(.04*Math.sin(o*2),0,0),this.patas.forEach((a,l)=>a.rotation.set(Math.sin(o+(l===0||l===3?0:nt))*.6,0,0)),this.cab.position.set(0,.12,.2),this.cab.rotation.set(-.1,0,0)}else if(t==="senta"||t==="carinho")n.position.set(0,.2,0),n.rotation.set(-.55,0,0),this.patas.forEach((o,a)=>o.rotation.set(a<2?.55:-.9,0,0)),this.cab.position.set(0,.12,.2),t==="carinho"?this.cab.rotation.set(.1+.12*Math.sin(e*5),.25*Math.sin(e*2.6),.2*Math.sin(e*3.1)):this.cab.rotation.set(.45+.08*Math.sin(e*1.3),.3*Math.sin(e*.7),.15*Math.sin(e*1.1));else{let o=Math.abs(Math.sin(e*5.2));n.position.set(0,.2+.22*o,0),n.rotation.set(-.25*o,0,0),this.patas.forEach((a,l)=>a.rotation.set((l<2?-.6:.6)*o,0,0)),this.cab.position.set(0,.12,.2),this.cab.rotation.set(-.15,0,0)}}},fu=class{constructor(t=.1){this.c=t,this.nx=Math.ceil(Ge/t),this.nz=Math.ceil(Ve/t),this.b=new Uint8Array(this.nx*this.nz)}limpar(t=.24){this.b.fill(0);for(let e=0;e<this.nx;e++)for(let n=0;n<this.nz;n++){let i=(e+.5)*this.c,r=(n+.5)*this.c;(i<t||i>Ge-t||r<t||r>Ve-.12)&&(this.b[e+n*this.nx]=1)}}ret(t,e,n,i,r=.24){let o=this.c,a=Math.max(0,Math.floor((t-r)/o)),l=Math.min(this.nx-1,Math.floor((n+r)/o)),c=Math.max(0,Math.floor((e-r)/o)),h=Math.min(this.nz-1,Math.floor((i+r)/o));for(let f=a;f<=l;f++)for(let u=c;u<=h;u++){let d=(f+.5)*o,m=(u+.5)*o,v=Math.max(t-d,0,d-n),g=Math.max(e-m,0,m-i);v*v+g*g<=r*r&&(this.b[f+u*this.nx]=1)}}cel(t,e){return[te(Math.floor(t/this.c),0,this.nx-1),te(Math.floor(e/this.c),0,this.nz-1)]}livre(t,e){let[n,i]=this.cel(t,e);return!this.b[n+i*this.nx]}perto(t,e){if(this.livre(t,e))return[t,e];let[n,i]=this.cel(t,e);for(let r=1;r<Math.max(this.nx,this.nz);r++){let o=null,a=1e9;for(let l=n-r;l<=n+r;l++)for(let c=i-r;c<=i+r;c++){if(Math.max(Math.abs(l-n),Math.abs(c-i))!==r||l<0||c<0||l>=this.nx||c>=this.nz||this.b[l+c*this.nx])continue;let h=(l+.5)*this.c,f=(c+.5)*this.c,u=(h-t)**2+(f-e)**2;u<a&&(a=u,o=[h,f])}if(o)return o}return[t,e]}visivel(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),i=Math.ceil(n/(this.c*.4));for(let r=1;r<i;r++){let o=r/i;if(!this.livre(vt(t[0],e[0],o),vt(t[1],e[1],o)))return!1}return!0}caminho(t,e){let n=this.perto(t[0],t[1]),i=this.perto(e[0],e[1]),r=[e[0],e[1]];if(this.visivel(n,i))return(Math.hypot(n[0]-t[0],n[1]-t[1])>.02?[n]:[]).concat([i[0]!==e[0]||i[1]!==e[1]?i:r]);let o=this.nx,a=o*this.nz,[l,c]=this.cel(...n),[h,f]=this.cel(...i),u=new Float32Array(a).fill(1e9),d=new Int32Array(a).fill(-1),m=new Uint8Array(a),v=[],g=(_,S)=>{v.push([S,_]);let R=v.length-1;for(;R>0;){let I=R-1>>1;if(v[I][0]<=v[R][0])break;[v[I],v[R]]=[v[R],v[I]],R=I}},p=()=>{let _=v[0],S=v.pop();if(v.length){v[0]=S;let R=0;for(;;){let I=2*R+1,F=I+1,U=R;if(I<v.length&&v[I][0]<v[U][0]&&(U=I),F<v.length&&v[F][0]<v[U][0]&&(U=F),U===R)break;[v[U],v[R]]=[v[R],v[U]],R=U}}return _},M=(_,S)=>Math.hypot(_-h,S-f),T=l+c*o;u[T]=0,g(T,M(l,c));let y=!1;for(;v.length;){let[,_]=p();if(m[_])continue;m[_]=1;let S=_%o,R=_/o|0;if(S===h&&R===f){y=!0;break}for(let I=-1;I<=1;I++)for(let F=-1;F<=1;F++){if(!I&&!F)continue;let U=S+I,N=R+F;if(U<0||N<0||U>=o||N>=this.nz)continue;let O=U+N*o;if(this.b[O]||m[O]||I&&F&&(this.b[S+I+R*o]||this.b[S+(R+F)*o]))continue;let X=u[_]+(I&&F?1.4142:1);X<u[O]&&(u[O]=X,d[O]=_,g(O,X+M(U,N)))}}if(!y)return[i];let b=[];for(let _=h+f*o;_!==-1;_=d[_])b.push([(_%o+.5)*this.c,((_/o|0)+.5)*this.c]);b.reverse(),b[0]=n,b[b.length-1]=i;let E=[n],P=0;for(;P<b.length-1;){let _=b.length-1;for(;_>P+1&&!this.visivel(b[P],b[_]);)_--;E.push(b[_]),P=_}return E.shift(),Math.hypot(n[0]-t[0],n[1]-t[1])>.02&&E.unshift(n),i[0]===e[0]&&i[1]===e[1]&&(E[E.length-1]=r),E}},kn=(s,t,e={})=>({tipo:"andar",vel:s,destinos:t,...e}),Ft=(s,t,e={})=>({tipo:"acao",dur:s,pose:t,...e}),ou=(s,t)=>(e,n,i)=>{let r=ce(e),o=Ts(s(i),t(i),r);return o.lean+=.35*Math.sin(nt*e),o},au=(s,t)=>(e,n,i)=>{let r=1-ce(e),o=Ts(s(i),t(i),r);return o.lean+=.4*Math.sin(nt*e),o},Pi=4.05;function y_(s,t){let e=ce(ie(s,0,1))*(1-ce(ie(s,5,5.6))),n=0;s>1.1&&s<3.5?n=.5-.5*Math.cos((s-1.1)*se*.75):s>=3.5&&s<3.85?n=ce(ie(s,3.5,3.85)):s>=3.85&&s<Pi&&(n=1-fc(ie(s,3.85,Pi)));let i=Xt(t,{lean:.78*e,hz:-.1*e,nod:-.45*e,alt:.89-.08*e,lL:[.3*e,.22*e],lR:[-.1*e,.08*e],olhar:[0,-1.2*e],boca:"foco",taco:e,recuo:n*e,twist:-.12*e});return i.bolas=s<Pi?"ini":"jogo",i}function Zo(s,t){let e=Xt(t,{olhos:"F",boca:"aberta",boch:.8});if(e.abre=.6+.4*Math.abs(Math.sin(t*6)),s<.3){let n=fc(ie(s,0,.3));e.alt=.89-.12*n,e.lL=[.5*n,1*n],e.lR=[.5*n,1*n],e.aL=[.3*n,.4,.6],e.aR=[.3*n,.4,.6]}else if(s<.85){let n=ie(s,.3,.85);e.dy=.55*4*n*(1-n);let i=Es(ie(s,.3,.45));e.aL=[vt(.3,2.9,i),.45,.2],e.aR=[vt(.3,2.9,i),.45,.2],e.lL=[.35*Math.sin(nt*n),.8*Math.sin(nt*n)],e.lR=[.35*Math.sin(nt*n),.8*Math.sin(nt*n)]}else if(s<1.05){let n=Math.sin(nt*ie(s,.85,1.05));e.alt=.89-.1*n,e.lL=[.4*n,.8*n],e.lR=[.4*n,.8*n],e.aL=[2.9,.45,.2],e.aR=[2.9,.45,.2]}else{let n=(s-1.05)/.62,i=Math.floor(n)%2?1:-1,r=n%1,o=Math.sin(nt*r);e.dy=.08*o,e.side=i*.16*o,e.twist=i*.25*o,e.turn=-i*.3*o,e.roll=i*.15*o,e.aL=i>0?[2.8,.5,.3]:[1.2,-.1,1.6],e.aR=i>0?[1.2,-.1,1.6]:[2.8,.5,.3],e.lL=[i<0?.5*o:0,i<0?.9*o:.1],e.lR=[i>0?.5*o:0,i>0?.9*o:.1]}return e}var Sr=(s,t,e={})=>{let n=Wt(s,0,t,.3),i=Math.abs(Math.sin(s*nt/.42))*n;return{gestoR:n>.3?"punho":"",aR:[vt(0,2.55+.3*i,n),.25,vt(.2,.9-.5*i,n)],dy:.03*i,olhos:n>.5?"F":"A",boca:n>.3?"aberta":"sorriso",boch:.7,...e}},Jo=s=>Ci(s,.62,{lean:-.1});function vc(s,t,e={}){let n=Math.sin(t*.9)*.08+Math.sin(t*2.3)*.03,i=r=>Math.max(0,Math.sin(s*10+r))*.12;return Ci(s,.62,{lean:-.1+n*.3,side:n,nod:.15,turn:n*.6,aL:[.85+i(0),-.22,1.25],aR:[.85+i(2),-.22,1.25],...e})}var lu=(s,t)=>Ft(s,(e,n,i)=>{let r=0;for(let a of t)r=Math.max(r,Wt(n,a,a+1.3));let o=vc(i,n,r>.3?{boca:"aberta",olhos:r>.5?"F":"A",boch:.15+.5*r,gestoR:"punho",gestoL:"aberta"}:{});return o.aR=o.aR.map((a,l)=>vt(a,[2.7,.5,.4][l],r)),o.aL=o.aL.map((a,l)=>vt(a,[2.5,.55,.5][l],r)),o.lean-=.08*r,o.nod-=.25*r,o.dy=.04*r*Math.abs(Math.sin(n*9)),o},{tv:"jogo",props:{controle:"LR"},foco:()=>Mt(3.2,1.45,.12)}),kf=s=>Ft(1.6,(t,e,n)=>{let i=Wt(e,0,1.15,.4),r=s.casaDe("controle").pos,o=Ts(Jo(n),vc(n,0),ce(ie(e,.75,1.6)));return o.ikR=[r.x,r.y+.035,r.z],o.kR=i,o.oriR="baixo",o.lean+=.12*i,o.turn+=.4*i,o.olhar=[.8*i,.8*i],o},{props:{controle:(t,e)=>e<.6?"casa":"LR"}}),Hf=s=>Ft(1.5,(t,e,n)=>{let i=Wt(e,.15,1.5,.4),r=s.casaDe("controle").pos,o=Ts(vc(n,0),Jo(n),ce(ie(e,0,.6)));return o.ikR=[r.x,r.y+.035,r.z],o.kR=i,o.oriR="baixo",o.lean+=.12*i,o.turn+=.4*i,o.olhar=[.8*i,.8*i],o},{props:{controle:(t,e)=>e<.8?"LR":"casa"}}),M_=()=>Ft(1.5,(s,t,e)=>Xt(e,{taco:vt(-1,0,ce(ie(t,.2,1.2))),lean:.12*Wt(t,0,1.5,.4),boca:"leve"}),{bolas:"ini"}),S_=()=>Ft(1.6,(s,t,e)=>Xt(e,{taco:vt(0,-1,ce(ie(t,.3,1.3))),lean:.15*Wt(t,0,1.6,.4)}),{bolas:"ini"}),Gf={tranquilo:(s,t,e=0)=>{let n=Ft(1.3,au(a=>Xt(a),Jo),{ate:s.sofaP}),i=Ft(1.3,ou(a=>Xt(a),Jo),{ate:s.sofaS}),o=e%2===0?[lu(13+e%3*2,[5.2,10.6]),Hf(t),n,Ft(2.8,(a,l,c)=>{let h=Wt(l,.1,2.7,.6);return Xt(c,{aL:[2.95*h,.25,.3],aR:[2.95*h,.25,.3],lean:-.12*h,side:Math.sin(l*2.2)*.12*h,nod:-.2*h,olhos:h>.5?"Z":"A",boca:h>.5?"o":"leve",dy:.03*h})}),kn(1.15,[s.cafeP]),Ft(5.6,(a,l,c)=>{let h=t.casaDe("xicara").pos,f=t.bico(),u=Wt(l,0,5.3,.45),d=ce(ie(l,.9,1.7)),m=ce(ie(l,4.3,5.3)),v=h.clone().add(Mt(0,.06,0)).lerp(f,d),g=t.botaoCafe(),p=Wt(l,1.9,2.9,.25);return Xt(c,{ikR:[v.x,v.y,v.z],kR:u*(1-m),aR:[.6,-.25,1.75],ikL:[g.x,g.y-.02*Math.max(0,Math.sin((l-2.1)*9)),g.z],kL:p,lean:.14*u,nod:.28,olhar:[0,1]})},{ate:s.cafeP,props:{xicara:(a,l)=>l<.75?"casa":"R"},fx:"cafe",foco:a=>a.bico()}),Ft(4.4,(a,l,c)=>{let h=Wt(l,.6,1.8,.35)+Wt(l,2.6,3.7,.35);return Xt(c,{aR:[.6+.75*h,-.25,1.75+.4*h],gole:h,nod:-.25*h,olhos:h>.5?"Z":"A",boca:h>.5?"reta":"sorriso",boch:.35})},{props:{xicara:"R"}}),Ft(1.6,(a,l,c)=>{let h=t.casaDe("xicara").pos,f=Wt(l,0,1.6,.45);return Xt(c,{ikR:[h.x,h.y+.06,h.z],kR:f,aR:[.6,-.25,1.75],lean:.14*f,nod:.25})},{props:{xicara:(a,l)=>l<.85?"R":"casa"}}),kn(1.1,[s.sofaP]),i,kf(t)]:[lu(9+e%3*2,[3.4]),Ft(6.5,(a,l,c)=>{let h=Wt(l,0,6.5,.9),f=vc(c,l*.3,{boca:"sorriso",boch:.3});return f.lean-=.22*h,f.nod-=.15*h,f.lL=f.lL.map((u,d)=>vt(u,[.95,.5][d],h)),f.lR=f.lR.map((u,d)=>vt(u,[.9,.45][d],h)),f.aL=f.aL.map((u,d)=>vt(u,[.5,-.05,.6][d],h)),f.aR=f.aR.map((u,d)=>vt(u,[.65,-.1,.9][d],h)),f.olhos=l>2&&l<4.4?"Z":"A",f},{props:{controle:"LR"},foco:()=>Mt(3.2,1.45,.12)}),lu(8,[4.4])];return{inicio:s.sofaS,aprox:s.sofaP,sentado:!0,sentPose:Jo,padrao:{boca:"leve",boch:.15},passos:o,entrada:[i,kf(t)],saida:[Hf(t),n]}},feliz:(s,t,e=0)=>{let n=[Ft(2.6,(i,r,o)=>{let a=Math.sin(r*9)*.12*Wt(r,.4,2.2);return Xt(o,{taco:0,aL:[1.4+a,.1,1.9],nod:-.25,olhar:[0,-1.5],boca:"leve"})},{bolas:"ini",foco:i=>i.pto("sinuca",7.62,.81,4.52)}),Ft(5.6,(i,r,o)=>y_(r,o)),Ft(3,(i,r,o)=>{let a=Sr(r,3);return Xt(o,{...a,taco:0,aL:a.aR,aR:void 0,bolas:"fim"})})];return e%2===0?n.push(kn(1.25,[s.monP],{taco:0,bolas:"fim"}),Ft(4.6,(i,r,o)=>{let a=Wt(r,1.4,3.6,.4),l=Math.sin(r*6)*.1*Wt(r,.3,1.3);return Xt(o,{taco:0,aL:[vt(0,1.3,a),-.15,vt(.2,1.7,a)],lean:.1,nod:.05+l,boca:a>.5?"aberta":"sorriso",olhos:a>.5?"F":"A"})},{bolas:"fim",ate:s.monP,foco:i=>i.pto("mesa",6.8,1.14,.22)}),kn(1.25,[s.sinP],{taco:0,bolas:"fim"})):n.push(Ft(3.2,(i,r,o)=>Xt(o,{taco:0,nod:.2,olhar:[.6*Math.sin(r*1.5),-1],boca:"sorriso",aL:[.3,.25,1.2*Wt(r,0,3.2,.5)],side:.05*Math.sin(r*2)}),{bolas:"fim"})),n.push(Ft(2.2,(i,r,o)=>Xt(o,{taco:0,lean:.2*Wt(r,0,2.2,.5),nod:.3,olhar:[0,-1.3],aL:[vt(.2,1.1,Wt(r,0,2.2,.5)),.1,.6]}),{bolas:"volta"})),{inicio:s.sinP,aprox:s.sinP,sentado:!1,padrao:{boca:"sorriso",boch:.35},passos:n,entrada:[M_()],saida:[S_()]}},euforico:(s,t,e=0)=>({inicio:s.danca,aprox:s.danca,sentado:!1,padrao:{olhos:"F",boch:.8},entrada:[],saida:[],passos:[Ft(3.6,(n,i,r)=>Zo(i,r),{fx:"globo"}),Ft(3.4,(n,i,r)=>Zo(i,r),{fx:"globo"}),Ft(2.2,(n,i,r)=>{let o=fc(n),a=Xt(r,{aL:[1.5,1.2,.2],aR:[1.5,1.2,.2],boca:"aberta",olhos:"F",boch:.8});return a.yawAdd=o*se,a.dy=.12*Math.sin(nt*n),a}),Ft(5.2,(n,i,r)=>{let o=Wt(i,0,.8,.25),a=t.bolso("L"),l=Math.max(0,i-.8),c=l%1.1/1.1,h=i<.8?0:c<.55?fc(c/.55):1-Es((c-.55)/.45),f=Xt(r,{aL:[.5*ce(ie(i,.4,.9)),.2,1.3*ce(ie(i,.4,.9))],ikL:[a.x,a.y,a.z],kL:o,aR:[vt(.3,2.8,h),.15,vt(1.4,.2,h)],lean:-.08*h,nod:-.15*h,dy:.05*h,boca:"aberta",olhos:"F",boch:.8});return f.solta=i>.8&&c>.5&&c<.6?Math.floor(l/1.1)+1:0,f},{props:{maco:(n,i)=>i<.45||i>5?"casa":"L",nota:(n,i)=>{let r=Math.max(0,i-.8)%1.1/1.1;return i>.8&&i<4.9&&r<.5?"R":"casa"}}}),kn(2.2,[s.monP],{estilo:"corre"}),Ft(3.4,(n,i,r)=>{let o=i%.85/.85,a=Math.sin(nt*o);return Xt(r,{dy:.35*a,aL:[2.9,.4,.2],aR:[2.9,.4,.2],lL:[.3*a,.7*a],lR:[.3*a,.7*a],boca:"aberta",olhos:"F"})},{ate:s.monP,foco:n=>n.pto("mesa",6.8,1.14,.22),semPeso:!0}),kn(2.2,[s.danca],{estilo:"corre"}),Ft(5,(n,i,r)=>Zo(1.05+i%2.48,r),{ate:s.danca,fx:"globo"})]}),preocupado:(s,t,e=0)=>{let n=l=>Ci(l,.6,{lean:.22}),i=Ft(1.3,au(l=>Xt(l),n),{ate:s.cadP}),r=Ft(1.3,ou(l=>Xt(l),n),{ate:s.cadS}),a=[(l=>Ft(l,(c,h,f)=>{let u=Wt(h,3,5.6,.6),d=Wt(h,6.6,7.9,.3),m=ce(ie(h,0,.9))*(1-ce(ie(h,l-.9,l))),v=Math.max(0,Math.sin(f*14))*.025,g=Math.max(0,Math.sin(f*14+2.2))*.025,p=t.teclado(),M=Math.sin(f*3.1)*.03;return Ci(f,.6,{lean:.22+.14*u*m,nod:.08+.06*Math.sin(h*1.7)-.1*u,hz:.02,ikL:[p.L.x+M,p.L.y+v,p.L.z],kL:m,ikR:[p.R.x-M,p.R.y+g,p.R.z],kR:m*(1-d),oriL:"baixo",oriR:"baixo",aR:[vt(.6,2.3,d),vt(-.08,.6,d),vt(1,2.4+.15*Math.sin(f*16),d)],item:m>.3?"tecla":"",olhar:[.3*Math.sin(h*2),-.6]})},{mon:"foco",foco:c=>c.pto("mesa",6.8,1.14,.22)}))(9+e%2*3),Ft(3.6,(l,c,h)=>{let f=Wt(c,0,3.6,.6),u=Math.sin(h*9)*.12*f;return Ci(h,.6,{lean:.22-.3*f,nod:-.1*f,turn:u,aL:[vt(.62,2.5,f),vt(-.08,.7,f),vt(.98,2.3,f)],aR:[vt(.6,2.5,f),vt(-.08,.7,f),vt(1,2.3,f)],balao:Wt(c,.3,3.4,.3),balaoT:"smiley-nervous",boca:"o",abre:.4})})];return e%2===0?a.push(i,kn(.85,[s.ritmo1,s.ritmo2,s.cadP],{pensativo:!0}),Ft(3.4,(l,c,h)=>{let f=Wt(c,.1,3.3,.4),u=Math.sin(nt*ie(c,.8,2.2));return Xt(h,{aR:[vt(0,1.3,f),-.25,vt(.2,2.2,f)],alt:.89-.02*u,nod:.25*f,lean:.06*u,olhos:u>.6?"Z":"A",boca:"triste",sob:"triste",balao:Wt(c,.6,3),balaoT:"chart-line-down"})},{ate:[s.cadP[0],s.cadP[1],s.cadP[2]+nt*.3]}),Ft(.8,(l,c,h)=>Xt(h),{ate:s.cadP}),r):a.push(Ft(4,(l,c,h)=>{let f=Wt(c,0,4,.6);return Ci(h,.6,{lean:.22-.25*f,nod:-.2*f,turn:.5*Math.sin(c*1.2)*f,olhar:[Math.sin(c*1.2)*1.2*f,-.5],boca:"foco"})})),{inicio:s.cadS,aprox:s.cadP,sentado:!0,sentPose:n,padrao:{sob:"tenso",boca:"foco"},passos:a,entrada:[r],saida:[i]}},triste:(s,t,e=0)=>{let n=l=>Ci(l,.6,{lean:.32,nod:.35,aL:[.72,-.1,1.05],aR:[.72,-.1,1.05]}),i=l=>Xt(l,{lean:.12,nod:.3}),r=Ft(1.6,au(i,n),{ate:s.polP}),o=Ft(1.6,ou(i,n),{ate:s.polS}),a=[Ft(11.5,(l,c,h)=>{let f=Wt(c,.2,4.6,.6),u=Math.sin(nt*ie(c,5.2,6.8)),d=Wt(c,7.2,11.2,.6);return Ci(h,.6,{lean:.32+.25*f-.12*d+.04*u,nod:.35+.25*f-.3*d,turn:-.5*d,aL:[vt(.72,1.55,f),vt(-.1,-.32,f),vt(1.05,2.45,f)],aR:[vt(.72,1.55,f),vt(-.1,-.32,f),vt(1.05,2.45,f)],olhos:f>.5?"Z":"A",olhar:d>.3?[-1.4,-.6]:[0,1.2],dy:-.01*u})})];return e%2===0?a.push(r,kn(.62,[s.janP],{estilo:"triste"}),Ft(9.5,(l,c,h)=>{let f=Wt(c,.8,7.8,.6),u=Math.sin(nt*ie(c,3.6,5.2)),d=Wt(c,5.6,7.4,.5);return Xt(h,{aL:[vt(0,1.75,f),-.1*f,vt(.2,.55,f)],alt:.89-.02*u,lean:.06+.1*d,nod:.1+.3*d-.1*f,side:-.05*d,olhar:[0,-.5]})},{ate:s.janP,foco:()=>Mt(-1.2,1.5,1.8)}),kn(.62,[s.polP],{estilo:"triste"}),Ft(.6,(l,c,h)=>i(h),{ate:s.polP}),o):a.push(Ft(7,(l,c,h)=>{let f=Math.sin(nt*ie(c,1.5,3.5));return Ci(h,.6,{lean:.32+.08*f,nod:.35-.2*Wt(c,3.8,6.6,.6),turn:-.6*Wt(c,3.8,6.6,.6),aL:[.72,-.1,1.05],aR:[.72,-.1,1.05],olhar:[-1.4,-.4],olhos:f>.6?"Z":"A"})})),{inicio:s.polS,aprox:s.polP,sentado:!0,sentPose:n,padrao:{sob:"triste",boca:"triste",nuvem:1,lagrima:1},passos:a,entrada:[o],saida:[r]}}},Xo={cachorro:{humores:["triste","preocupado","tranquilo","feliz","euforico"],ic:"dog",lugar:s=>s.lugar("cachorro",[1.35,5.42,0]),passos:s=>[Ft(1.4,(t,e,n)=>Xt(n,{nod:.35,olhar:[0,1.2],boca:"sorriso",boch:.3}),{fx:"caoVem"}),Ft(5.2,(t,e,n)=>{let i=Wt(e,0,5.2,.7),r=s.alvoCao(),o=Math.sin(e*5)*.06;return uc(n,i,{ikR:[r.x+o,r.y+.13,r.z],kR:i,oriR:"baixo",gestoR:"carinho",nod:.3*i,boca:"sorriso",olhos:e>2?"F":"A",boch:.5,olhar:[0,1]})},{fx:"caoCarinho"}),Ft(1.2,(t,e,n)=>Xt(n,{...Sr(e,1.2)}),{fx:"caoCarinho"})]},aquario:{humores:["preocupado","tranquilo","feliz","euforico"],ic:"fish",lugar:s=>s.lugar("aquario",[.98,6.835,-nt/2]),passos:s=>[Ft(1,(t,e,n)=>Xt(n,{nod:.2,olhar:[0,.6]})),Ft(4.6,(t,e,n)=>{let i=Wt(e,0,4.6,.6),r=s.pto("aquario",.35,1.38,6.835),o=Math.sin(n*18)*.02*ie(e,1,1.4)*(1-ie(e,3.4,3.8));return Xt(n,{ikR:[r.x+o,r.y,r.z],kR:i,oriR:"baixo",lean:.12*i,nod:.3*i,mR:.3+.4*Math.abs(Math.sin(n*12))*i,boca:"sorriso",olhar:[0,1]})},{fx:"racao"}),Ft(1.6,(t,e,n)=>Xt(n,{boca:"sorriso",olhos:"F",boch:.5,nod:.1}))]},fliperama:{humores:["tranquilo","feliz","euforico"],ic:"joystick",lugar:s=>s.lugar("fliperama",[5.29,1.42,nt]),passos:s=>[Ft(7,(t,e,n)=>{let i=Wt(e,0,7,.6),[r,o]=s.alvoArcade(),a=Math.max(0,Math.sin(n*13))*.02;return Xt(n,{ikL:[r.x,r.y,r.z],kL:i,ikR:[o.x,o.y-a,o.z],kR:i,oriL:"baixo",oriR:"baixo",lean:.1*i,nod:-.05+.04*Math.sin(n*6),side:.03*Math.sin(n*3),boca:"foco",olhar:[0,-.3],mL:.9*i})},{fx:"arcade"}),Ft(1.8,(t,e,n)=>{let i=Wt(e,0,1.8,.3);return Xt(n,{aL:[2.8*i,.4,.3],aR:[2.8*i,.4,.3],dy:.1*Math.abs(Math.sin(e*7))*i,boca:"aberta",olhos:"F",boch:.8})})]},touro:{humores:["tranquilo","feliz","euforico"],ic:"cow",lugar:s=>{let t=s.alvoTouro(),e=s.lugar("touro",[5.4,6.75]);return[e[0],e[1],Yo(e,[t.x,t.z])]},passos:s=>[Ft(3.6,(t,e,n)=>{let i=Wt(e,0,3.6,.6),r=s.alvoTouro(),o=Math.sin(e*6)*.05;return Xt(n,{ikR:[r.x+o,r.y+.06,r.z+o*.5],kR:i,oriR:"baixo",gestoR:"carinho",lean:.18*i,boca:"sorriso",olhos:e>1.5?"F":"A",boch:.45})}),Ft(2,(t,e,n)=>Xt(n,{...Sr(e,2)}))]},cofre:{humores:["preocupado","tranquilo","feliz","euforico"],ic:"vault",lugar:s=>s.lugar("cofre",[7.62,1.63,nt/2]),passos:s=>[Ft(1.8,(t,e,n)=>{let i=ce(ie(e,0,.8)),r=s.alvoCofre();return uc(n,.55*i,{ikR:[r.x,r.y,r.z],kR:i,porta:1.9*ce(ie(e,.9,1.8)),boca:"o",abre:.4})},{fx:"cofre"}),Ft(2,(t,e,n)=>{let i=Wt(e,0,1.4,.4),r=s.pto("cofre",8.54,.2,1.75);return uc(n,.55*(1-ce(ie(e,1,2))),{ikR:[r.x,r.y,r.z],kR:i,aR:[1,-.1,1.5],porta:1.9,boca:"sorriso",olhos:"F",boch:.6})},{fx:"cofre",props:{moeda:(t,e)=>e<.75?"casa":"R"}}),Ft(1.8,(t,e,n)=>Xt(n,{aR:[1,-.1,1.5],porta:1.9,olhar:[0,-1.6*Wt(e,.2,1.4)],nod:-.35*Wt(e,.2,1.4),boca:"aberta",olhos:"A",fxk:ie(e,.15,1.35),mR:.2}),{fx:"cofre",props:{moeda:(t,e)=>e<.15||e>1.35?"R":"joga"}}),Ft(1.9,(t,e,n)=>{let i=Wt(e,0,1.9,.5),r=s.pto("cofre",8.54,.2,1.75);return uc(n,.55*i,{ikR:[r.x,r.y,r.z],kR:i*ie(e,.2,.6),aR:[1,-.1,1.5],porta:1.9*(1-ce(ie(e,1,1.8))),boca:"sorriso"})},{fx:"cofre",props:{moeda:(t,e)=>e<.75?"R":"casa"}})]},trofeu:{humores:["tranquilo","feliz","euforico"],ic:"trophy",lugar:s=>s.lugar("trofeu",[7.98,2.6,nt/2]),passos:s=>[Ft(1.2,(t,e,n)=>{let i=ce(t),r=s.alvoTrofeu();return Xt(n,{ikL:[r.L.x,r.L.y,r.L.z],kL:i,ikR:[r.R.x,r.R.y,r.R.z],kR:i,lean:.15*i,boca:"o",fxk:t})},{fx:"trofeuPega"}),Ft(3,(t,e,n)=>{let i=Wt(e,0,3,.7),r=Xt(n,{aL:[vt(.6,2.85,i),.35,.5],aR:[vt(.6,2.85,i),.35,.5],dy:.04*Math.abs(Math.sin(e*6))*i,boca:"aberta",olhos:"F",boch:.8,nod:-.25*i});return r.olhar=[0,-1.5*i],r},{fx:"trofeu"}),Ft(1.2,(t,e,n)=>{let i=1-ce(t),r=s.alvoTrofeu(!0);return Xt(n,{ikL:[r.L.x,r.L.y,r.L.z],kL:i,ikR:[r.R.x,r.R.y,r.R.z],kR:i,lean:.15*i,boca:"sorriso",fxk:t})},{fx:"trofeuSolta"})]},porquinho:{humores:["preocupado","tranquilo","feliz","euforico"],ic:"piggy-bank",lugar:s=>s.lugar("mesa",[7.55,1.22,nt]),passos:s=>[Ft(1.3,(t,e,n)=>{let i=s.bolso("R"),r=Wt(e,0,.95,.3);return Xt(n,{ikR:[i.x,i.y,i.z],kR:r,aR:[.5,-.1,1.3],nod:.25,olhar:[0,1]})},{props:{moeda:(t,e)=>e<.55?"casa":"R"}}),Ft(1.9,(t,e,n)=>{let i=Wt(e,0,1.9,.4),r=s.alvoPorco();return Xt(n,{ikR:[r.x,r.y+.1,r.z],kR:i,oriR:"baixo",aR:[.5,-.1,1.3],lean:.25*i,nod:.35,olhar:[0,1],boca:"sorriso"})},{fx:"porco",props:{moeda:(t,e)=>e<.9?"R":e<1.15?"cofrinho":"casa"}}),Ft(1.4,(t,e,n)=>Xt(n,{...Sr(e,1.4)}))]},neon:{humores:["tranquilo","feliz","euforico"],ic:"currency-btc",lugar:()=>[1.55,6.6,-nt/2],passos:s=>[Ft(5.6,(t,e,n)=>{let i=s.bolso("R"),r=Wt(e,0,.8,.25)+Wt(e,4.7,5.6,.25),o=Wt(e,.5,5,.5),a=Wt(e,2.6,4.4,.3);return Xt(n,{ikR:[i.x,i.y,i.z],kR:r,aR:[vt(0,1.05,o),-.25,vt(.2,2,o)],aL:[.3*o,-.2,.9*o],nod:vt(.35,-.3,a)*o,olhar:[0,vt(1,-1.2,a)],boca:a>.5?"sorriso":"foco",boch:.3})},{props:{celular:(t,e)=>e<.45||e>5.2?"casa":"R"}}),Ft(1.4,(t,e,n)=>Xt(n,{...Sr(e,1.4)}))]},arcoiris:{humores:["tranquilo","feliz","euforico"],ic:"rainbow",lugar:()=>[3.2,.95,nt],passos:()=>[Ft(3.2,(s,t,e)=>{let n=Wt(t,0,3.2,.6);return Xt(e,{aL:[2.2*n,.5,1.2*n],aR:[2.2*n,.5,1.2*n],nod:-.4*n,olhar:[0,-1.4],boca:"sorriso",olhos:"F",boch:.6})}),Ft(1.8,(s,t,e)=>{let n=Math.abs(Math.sin(t*9));return Xt(e,{aL:[1.2,-.25-.25*n,1.6],aR:[1.2,-.25-.25*n,1.6],boca:"aberta",olhos:"F",boch:.7})})]},dardos:{humores:["tranquilo","feliz","euforico","preocupado"],ic:"target",lugar:()=>[2.45,5.95,-nt/2],passos:s=>[Ft(1.1,(t,e,n)=>{let i=s.bolso("L"),r=Wt(e,0,.8,.25);return Xt(n,{ikL:[i.x,i.y,i.z],kL:r,aL:[.55*ce(ie(e,.5,1.1)),.05,1.2*ce(ie(e,.5,1.1))],olhar:[0,-.2]})},{props:{aljava:(t,e)=>e<.5?"casa":"L"}})].concat([0,1,2].map(t=>Ft(1.7,(e,n,i)=>{let r=Wt(n,0,.42,.14),o=s.boneco.mL,a=ce(ie(n,.3,.8)),l=ce(ie(n,.8,1.02)),c=ce(ie(n,1.2,1.7)),h=[.45,-.1,1.3],f=[1.75,-.1,2.35],u=[1.35,-.1,.25],d=n<.8?h.map((m,v)=>vt(m,f[v],a)):n<1.2?f.map((m,v)=>vt(m,u[v],l)):u.map((m,v)=>vt(m,h[v],c));return Xt(i,{aR:d,ikR:[o.x,o.y+.02,o.z],kR:r,aL:[.55,.05,1.2],twist:-.15*a+.25*l-.1*c,lean:.06*l,boca:"foco",olhar:[0,-.2],lL:[.18*a,.1],fxk:t+(n>=.92?.5:0)})},{fx:"dardo",props:{dardo:(e,n)=>n<.25||n>=.92?"casa":"R",aljava:"L"}}))).concat([Ft(1.6,(t,e,n)=>Xt(n,{...Sr(e,1.6),aL:[.55*(1-ce(ie(e,0,.6))),.05,1.2*(1-ce(ie(e,0,.6)))]}),{fx:"dardo",props:{aljava:"casa"}})])},globo:{humores:["tranquilo","feliz","euforico"],ic:"disco-ball",lugar:s=>s.lugares().danca,passos:()=>[Ft(6.2,(s,t,e)=>Zo(t%3.1+(t>3.1?1.05:0),e),{fx:"globo"})]}},b_=s=>[Ft(2.6,(t,e,n)=>{let i=Wt(e,0,2.6,.3);return Xt(n,{aL:[1.9*i,-.45,2.3*i],aR:[1.9*i,-.45,2.3*i],boca:"o",abre:.9,olhos:"A",boch:.6,balao:Wt(e,.1,2.5,.3),balaoT:s,dy:.05*Math.sin(nt*ie(e,0,.4))})},{fx:"novidade"}),Ft(1.7,(t,e,n)=>Zo(e,n))];function lS(s,t){return new pu(s,t)}var dc=(s,t,e)=>[s*Math.cos(e)+t*Math.sin(e),-s*Math.sin(e)+t*Math.cos(e)];function _c(s){let t=[];for(let[e,n]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let[i,r]=dc(e*s.h[0],n*s.h[1],s.r);t.push([s.c[0]+i,s.c[1]+r])}return t}function cu(s,t,e=0){let n=[s,t].flatMap(o=>[[Math.cos(o.r),-Math.sin(o.r)],[Math.sin(o.r),Math.cos(o.r)]]),i=_c(s),r=_c(t);for(let[o,a]of n){let l=1e9,c=-1e9,h=1e9,f=-1e9;for(let[u,d]of i){let m=u*o+d*a;l=Math.min(l,m),c=Math.max(c,m)}for(let[u,d]of r){let m=u*o+d*a;h=Math.min(h,m),f=Math.max(f,m)}if(c-e<=h||f-e<=l)return!1}return!0}var pu=class{constructor(t,e){this.el=t,this.d={};let n=this.renderer=new Fo({antialias:!0,alpha:!0,powerPreference:"high-performance"});this.pr=Math.min(window.devicePixelRatio||1,2),n.setPixelRatio(this.pr),n.outputColorSpace=on,n.toneMapping=Ji,n.toneMappingExposure=1,n.shadowMap.enabled=!0,n.shadowMap.type=Yi,n.domElement.className="of-canvas",n.domElement.setAttribute("role","img"),t.appendChild(n.domElement);let i=this.scene=new zi,r=new _s(n);i.environment=r.fromScene(new Uo,.04).texture,i.environmentIntensity=.32,this.cam=new Ke(30,1,.1,80),this.az=nt/4,this.el_=.5,this.camModo="sala",this.camAtual=null,this.tAnt=performance.now(),this.t0=performance.now(),this.notas=[],this.hist=[],this.feed=[],this.flash={},this.fx=[],this.moveis={},this.fixos=[],this.nav=new fu,this.construir(),this.prepararAO(),this.boneco=new mc(e.cor,e.icone,e.boneco,e.acessorio),i.add(this.boneco.root),i.add(this.boneco.blob),this.cao=new du,i.add(this.cao.g),this.filtro=new gc,this.vida=new xc,this.vistos=this.lerVistos(),window.__ofDebug&&(window.__ofDebug=this),this.ligarControles(),this.ro=new ResizeObserver(()=>this.redimensionar()),this.ro.observe(t),this.redimensionar(),this.aplicarLayout(e.layout,!0),this.atualizar(e),this.reduz=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,this.laco=this.laco.bind(this),this.raf=requestAnimationFrame(this.laco)}prepararAO(){if(!((window.matchMedia&&window.matchMedia("(pointer: coarse)").matches||(navigator.hardwareConcurrency||4)<4||window.__ofSemAO)&&!window.__ofComAO))try{let e=this.renderer,n=new qe(4,4,{type:sn,samples:4}),i=this.composer=new ic(e,n);i.addPass(new sc(this.scene,this.cam));let r=this.aoPass=new Ho(this.scene,this.cam,4,4);r.updateGtaoMaterial({radius:.9,distanceExponent:1.3,thickness:2.2,scale:1.45,samples:12,distanceFallOff:1,screenSpaceRadius:!1}),r._overrideVisibility=function(){let a=this._visibilityCache;this.scene.traverse(l=>{if(!l.visible)return;let c=l.material;(l.isPoints||l.isLine||l.isSprite||l.isInstancedMesh||l.isMesh&&c&&(c.transparent||c.isMeshBasicMaterial||c.isShadowMaterial))&&(l.visible=!1,a.push(l))})},r.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),r.blendIntensity=1;let o=r.setSize.bind(r);r.setSize=(a,l)=>o(Math.max(2,a*.5|0),Math.max(2,l*.5|0)),i.addPass(r),i.addPass(new ac),this.ao=!0}catch(e){console.warn("Oclus\xE3o de ambiente indispon\xEDvel:",e),this.composer=null,this.ao=!1}}movel(t,e,n,i={}){let r=new At;r.position.set(e[0],0,e[1]),this.scene.add(r);let o=new At;return o.position.set(-e[0],0,-e[1]),r.add(o),this.moveis[t]={id:t,outer:r,inner:o,P:e,caixas:n,x:e[0],z:e[1],ri:0,piso:!!i.piso,nome:i.nome||t,decor:i.decor||null},o}pedaco(t,e,n,i=0){let r=new At;r.position.set(n[0],0,n[1]),r.rotation.y=i,t.add(r);let o=new At;return o.position.set(-e[0],0,-e[1]),r.add(o),o}giro(t,e=t.ri){return e*nt/4}lugar(t,e){let n=this.moveis[t];if(!n)return e.slice();let i=this.giro(n),[r,o]=dc(e[0]-n.P[0],e[1]-n.P[1],i);return e.length>2?[n.x+r,n.z+o,e[2]+i]:[n.x+r,n.z+o]}pto(t,e,n,i){let r=this.lugar(t,[e,i]);return Mt(r[0],n,r[1])}caixasDe(t,e=t.x,n=t.z,i=t.ri){let r=i*nt/4;return t.caixas.map(o=>{let[a,l]=dc(o.c[0]-t.P[0],o.c[1]-t.P[1],r);return{c:[e+a,n+l],h:o.h,r:(o.r||0)+r}})}ativo(t){return t.outer.visible}cabe(t,e,n,i){let r=this.caixasDe(t,e,n,i);for(let o of r)for(let[a,l]of _c(o))if(a<.02||a>Ge-.02||l<.02||l>Ve-.02)return!1;if(t.piso)return!0;for(let o in this.moveis){let a=this.moveis[o];if(a===t||a.piso||!this.ativo(a))continue;let l=this.caixasDe(a);for(let c of r)for(let h of l)if(cu(c,h,.005))return!1}for(let o of this.fixos)for(let a of r)if(cu(a,o,.005))return!1;return!0}prender(t,e,n,i){let r=1e9,o=-1e9,a=1e9,l=-1e9;for(let c of this.caixasDe(t,e,n,i))for(let[h,f]of _c(c))r=Math.min(r,h),o=Math.max(o,h),a=Math.min(a,f),l=Math.max(l,f);return r<.03&&(e+=.03-r),o>Ge-.03&&(e-=o-(Ge-.03)),a<.03&&(n+=.03-a),l>Ve-.03&&(n-=l-(Ve-.03)),[e,n]}posicionar(t,e,n,i){t.x=e,t.z=n,t.ri=(i%8+8)%8,t.outer.position.set(e,0,n),t.outer.rotation.y=this.giro(t)}layoutAtual(){let t={m:{},off:[...this.off||[]].sort()};for(let e in this.moveis){let n=this.moveis[e];(Math.abs(n.x-n.P[0])>.005||Math.abs(n.z-n.P[1])>.005||n.ri)&&(t.m[e]=[Math.round(n.x*100)/100,Math.round(n.z*100)/100,n.ri])}return t}aplicarLayout(t,e){t=t&&typeof t=="object"?t:{},this.off=new Set(Array.isArray(t.off)?t.off.filter(i=>typeof i=="string"):[]);for(let i in this.moveis){let r=this.moveis[i];this.posicionar(r,r.P[0],r.P[1],0)}let n=t.m&&typeof t.m=="object"?t.m:{};for(let i in n){let r=this.moveis[i],o=n[i];if(!r||!Array.isArray(o)||o.length<3||!o.every(isFinite))continue;let[a,l]=this.prender(r,+o[0],+o[1],o[2]|0);this.posicionar(r,a,l,o[2]|0)}e||this.mudouLayout()}mudouLayout(){this.nav.limpar();for(let e in this.moveis){let n=this.moveis[e];if(!(n.piso||!this.ativo(n)))for(let i of this.caixasDe(n))this.marcar(i)}for(let e of this.fixos)this.marcar(e);if(this.calibrarTacada(),this.sujoNav=!1,this.sujo=!0,this.dir&&this.dir.replanejar(),this.plantaFrente){let e=this.moveis.planta2,n=["touro","aquario","cofre","fliperama","trofeu","cachorro"].some(i=>{let r=this.moveis[i];return r&&this.ativo(r)&&this.caixasDe(r).some(o=>this.caixasDe(e).some(a=>cu(o,a)))});e.outer.visible=!n}}marcar(t){let e=this.nav,n=.24,i=e.c,r=Math.hypot(t.h[0],t.h[1])+n,o=Math.max(0,Math.floor((t.c[0]-r)/i)),a=Math.min(e.nx-1,Math.floor((t.c[0]+r)/i)),l=Math.max(0,Math.floor((t.c[1]-r)/i)),c=Math.min(e.nz-1,Math.floor((t.c[1]+r)/i));for(let h=o;h<=a;h++)for(let f=l;f<=c;f++){let[u,d]=dc((h+.5)*i-t.c[0],(f+.5)*i-t.c[1],-t.r),m=Math.max(Math.abs(u)-t.h[0],0),v=Math.max(Math.abs(d)-t.h[1],0);m*m+v*v<=n*n&&(e.b[h+f*e.nx]=1)}}construir(){let t=this.scene,e=(x,A,L,k,Y=0)=>({c:[x,A],h:[L,k],r:Y});this.hemi=new cr("#E3EBFF","#B08A64",.9),t.add(this.hemi);let n=this.key=new Ei("#FFF4E3",1.8);n.position.set(11,12,11),n.target.position.set(4,0,3.5),t.add(n,n.target),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),n.shadow.bias=-4e-4,n.shadow.normalBias=.025,n.shadow.radius=6,n.shadow.blurSamples=12,Object.assign(n.shadow.camera,{left:-7.5,right:7.5,top:7,bottom:-7,near:2,far:40}),this.fill=new Ei("#CFE0FF",.35),this.fill.position.set(-4,6,8),t.add(this.fill),this.rim=new Ei("#B9CCFF",.55),this.rim.position.set(-6,5,-6),this.rim.target.position.set(4,0,4),t.add(this.rim,this.rim.target);let i=ke(1024,1024);this.desenharPiso(i),i.t.wrapS=i.t.wrapT=wn,i.t.repeat.set(Ge/4.5,Ve/4.5),this.chao=Ot(new Ze(Ge,Ve),new ve({map:i.t,roughness:.42,metalness:0}),t,Ge/2,0,Ve/2,{rx:-nt/2,cast:!1}),ut(t,et("#8A5A34",{r:.8}),[-yn,-.22,-yn],[Ge+.05,-.001,Ve+.05],.02,{cast:!1}),ut(t,et("#E6E3DD",{r:.9}),[-yn-.06,-.3,-yn-.06],[Ge+.11,-.2,Ve+.11],.04,{cast:!1});let r=Df("#EEF1F6"),o=Df("#E5E9F1"),a=et("#C9D1DD",{r:.9});ut(t,r,[-yn,0,-yn],[Ge,ze,0],.005);let l=.95,c=2.65,h=.92,f=2.38;ut(t,o,[-yn,0,0],[0,ze,l],.005),ut(t,o,[-yn,0,c],[0,ze,Ve],.005),ut(t,o,[-yn,0,l],[0,h,c],.005),ut(t,o,[-yn,f,l],[0,ze,c],.005),ut(t,a,[-yn-.005,ze,-yn-.005],[Ge+.005,ze+.03,.005],.01),ut(t,a,[-yn-.005,ze,0],[.005,ze+.03,Ve+.005],.01),ut(t,a,[Ge-.001,0,-yn],[Ge+.004,ze+.03,0],.001),ut(t,a,[-yn,0,Ve-.001],[0,ze+.03,Ve+.004],.001);let u=et("#FFFFFF",{r:.6});ut(t,u,[0,0,0],[Ge,.1,.02],.005),ut(t,u,[0,0,0],[.02,.1,Ve],.005),this.ceu=ke(256,256),Ot(new Ze(c-l,f-h),new Ye({map:this.ceu.t,toneMapped:!1}),t,-.1,(h+f)/2,(l+c)/2,{ry:nt/2,cast:!1,recv:!1}),Ot(new Ze(c-l,f-h),new ve({color:"#DDF1FF",transparent:!0,opacity:.12,roughness:.05,metalness:.3}),t,-.03,(h+f)/2,(l+c)/2,{ry:nt/2,cast:!1,recv:!1});let d=et("#FFFFFF",{r:.4});ut(t,d,[-.06,h-.02,l-.06],[.04,f+.04,l],.01),ut(t,d,[-.06,h-.02,c],[.04,f+.04,c+.06],.01),ut(t,d,[-.06,f,l],[.04,f+.06,c],.01),ut(t,d,[-.06,(h+f)/2-.025,l],[0,(h+f)/2+.025,c],.01),ut(t,d,[-.06,h,(l+c)/2-.025],[0,f,(l+c)/2+.025],.01),ut(t,et("#F1F5F9",{r:.5}),[-.06,h-.06,l-.12],[.16,h,c+.12],.015);let m=et("#C7D2FE",{r:1});for(let[x,A]of[[l-.42,l-.06],[c+.06,c+.42]])for(let L=0;L<4;L++)Ln(t,m,.05,2.45,.08,1.38,x+.05+L*(A-x-.1)/3,{});he(t,et("#94A3B8",{m:.6,r:.3}),.015,.015,c-l+1,.08,f+.25,(l+c)/2,{rx:nt/2});let v=ke(64,64),g=v.g.createLinearGradient(0,0,64,0);g.addColorStop(0,"rgba(255,255,255,.9)"),g.addColorStop(1,"rgba(255,255,255,0)"),v.g.fillStyle=g,v.g.fillRect(0,0,64,64);let p=new Pe;p.setAttribute("position",new le([.02,.005,l+.1,.02,.005,c-.1,3,.005,c+1.5,3,.005,l+1.3],3)),p.setAttribute("uv",new le([0,0,0,1,1,1,1,0],2)),p.setIndex([0,1,2,0,2,3]),this.feixe=new ye(p,new Ye({map:v.t,color:"#FFE7A3",transparent:!0,opacity:.3,blending:Zi,depthWrite:!1,toneMapped:!1})),t.add(this.feixe);{let x=this.movel("tapete",[3.35,3.85],[e(3.35,3.85,1.65,2.5)],{piso:!0,nome:"Tapete"}),A=ke(512,512);this.desenharTapete(A),Ot(new vs(3.3,.016,5,2,.007),new ve({map:A.t,roughness:1}),x,3.35,.009,3.85,{cast:!1})}let M=Ss("#9A6B43",{r:.62,rep:[.3,2]}),T=Ss("#6E4A2E",{r:.8});ut(t,T,[1.6,0,0],[4.8,ze,.025],.002,{cast:!1});for(let x=1.62;x<4.78;x+=.1)ut(t,M,[x,.1,.02],[x+.06,ze-.02,.05],.008,{cast:!1});let y=et("#3F3A36",{r:.5}),b=Ss("#B07A4C",{r:.5});ut(t,y,[1.95,.12,.05],[4.45,.52,.48],.02),ut(t,b,[1.97,.18,.47],[3.18,.48,.49],.01),ut(t,b,[3.22,.18,.47],[4.43,.48,.49],.01);for(let x of[2.05,4.35])for(let A of[.12,.42])he(t,et("#111827"),.015,.015,.12,x,.06,A);ut(t,et("#F8FAFC",{r:.3}),[2.3,.52,.18],[2.62,.58,.4],.02),ut(t,et("#111827",{r:.4}),[3.85,.52,.2],[3.98,.86,.33],.02),ut(t,et("#111827",{r:.4}),[2.95,.52,.2],[3.08,.86,.33],.02),ut(t,et("#0B0F19",{r:.25,m:.4}),[2.25,1,.06],[4.15,2.06,.12],.02),this.tv=ke(512,288),Ot(new Ze(1.84,1),new Ye({map:this.tv.t,toneMapped:!1}),t,3.2,1.53,.123,{cast:!1,recv:!1}),this.tvLuz=new ui("#818CF8",1.4,4.5,1.6),this.tvLuz.position.set(3.2,1.5,.9),t.add(this.tvLuz),this.fixos.push(e(3.2,.27,1.25,.24));{let x=this.movel("centro",[3.21,1.72],[e(3.21,1.72,.6,.29)],{nome:"Mesa de centro"}),A=Ss("#C89A6B",{r:.45});ut(x,A,[2.62,.36,1.45],[3.8,.42,2],.03),ut(x,et("#E7D6C3"),[2.7,.08,1.52],[3.72,.11,1.93],.01);for(let L of[2.68,3.74])for(let k of[1.5,1.95])he(x,et("#3F3A36"),.02,.02,.36,L,.18,k);ut(x,et("#F43F5E"),[2.8,.42,1.6],[3.1,.44,1.82],.005,{ry:.2}),ut(x,et("#38BDF8"),[2.84,.44,1.62],[3.1,.455,1.8],.005,{ry:-.1}),ut(x,et("#F8FAFC",{r:.4}),[3.35,.42,1.62],[3.6,.44,1.8],.004,{ry:.3})}{let x=this.movel("sofa",[3.2,3.05],[e(3.2,3.05,1.24,.47)],{nome:"Sof\xE1"}),A=yr("#0F766E"),L=yr("#14857B"),k=yr("#2BB3A3",{rep:[2,2]});ut(x,A,[2,.08,2.6],[4.4,.42,3.5],.06),ut(x,A,[2,.08,3.22],[4.4,.98,3.52],.08),ut(x,L,[1.96,.08,2.58],[2.2,.66,3.52],.07),ut(x,L,[4.2,.08,2.58],[4.44,.66,3.52],.07),ut(x,k,[2.22,.4,2.62],[3.19,.54,3.24],.06),ut(x,k,[3.21,.4,2.62],[4.18,.54,3.24],.06),ut(x,k,[2.24,.5,3],[3.18,.92,3.24],.07,{rx:-.12}),ut(x,k,[3.22,.5,3],[4.16,.92,3.24],.07,{rx:-.12}),ut(x,et("#FCD34D",{r:1}),[2.28,.5,2.95],[2.62,.82,3.1],.06,{rz:.15,rx:-.2});for(let Y of[2.06,4.34])for(let gt of[2.66,3.44])he(x,et("#3F3A36"),.025,.02,.08,Y,.04,gt)}{let x=this.movel("poltrona",[.92,3.2],[e(.92,3.2,.5,.44,nt/4)],{nome:"Poltrona"}),A=new At;A.position.set(.92,0,3.2),A.rotation.y=nt/4,x.add(A);let L=yr("#B45309"),k=yr("#D97706");ut(A,L,[-.42,.1,-.36],[.42,.4,.4],.06),ut(A,L,[-.42,.1,-.44],[.42,1.05,-.2],.08,{rx:.1}),ut(A,k,[-.5,.1,-.4],[-.32,.62,.4],.07),ut(A,k,[.32,.1,-.4],[.5,.62,.4],.07),ut(A,et("#F59E0B",{r:1}),[-.32,.38,-.25],[.32,.5,.38],.05);for(let Y of[-.44,.44])for(let gt of[-.36,.36])he(A,et("#3F3A36"),.025,.018,.1,Y,.05,gt)}{let x=this.movel("luminaria",[.32,4],[e(.32,4,.16,.16)],{nome:"Lumin\xE1ria"}),A=new At;A.position.set(.32,0,4),x.add(A),he(A,et("#1F2937",{m:.6,r:.4}),.14,.16,.03,0,.015,0),he(A,et("#1F2937",{m:.6,r:.4}),.012,.012,1.5,0,.77,0),this.cupula=he(A,new ve({color:"#FEF3C7",roughness:.8,emissive:"#FFD58A",emissiveIntensity:0}),.12,.2,.26,0,1.6,0,{seg:28}),this.lampLuz=new ui("#FFC978",0,4.2,1.8),this.lampLuz.position.set(.35,1.5,4),x.add(this.lampLuz),this.lampHalo=Ms("#FFD58A",1.1,0),this.lampHalo.position.set(.34,1.58,4),x.add(this.lampHalo)}{let x=this.movel("cafe",[.31,4.9],[e(.31,4.9,.31,.58)],{nome:"Cantinho do caf\xE9"}),A=et("#F8FAFC",{r:.5});ut(x,A,[.02,0,4.35],[.58,.88,5.45],.02),ut(x,et("#334155",{r:.35}),[0,.88,4.32],[.62,.92,5.48],.01),ut(x,et("#E2E8F0"),[.57,.1,4.4],[.585,.82,4.88],.004),ut(x,et("#E2E8F0"),[.57,.1,4.92],[.585,.82,5.4],.004);let L=new At;L.position.set(.24,.92,4.9),x.add(L),ut(L,et("#111827",{r:.3,m:.3}),[-.14,0,-.14],[.14,.38,.14],.03),ut(L,et("#D1D5DB",{r:.25,m:.8}),[-.04,.24,-.13],[.2,.34,.13],.02),ut(L,et("#374151",{r:.4,m:.5}),[.06,0,-.05],[.2,.012,.05],.004),this.vapor=[];for(let k=0;k<4;k++){let Y=Ms("#FFFFFF",.1,0);Y.material.blending=Ti,Y.position.set(.38,1,4.9),x.add(Y),this.vapor.push(Y)}for(let k=0;k<3;k++)he(x,et(["#F43F5E","#FACC15","#38BDF8"][k]),.035,.03,.08,.38,.96,5.2+k*.09)}let E=ke(256,192);this.desenharQuadro(E),ut(t,et("#1F2937",{r:.4}),[0,1.45,4.45],[.04,2.25,5.4],.01),Ot(new Ze(.87,.72),new ve({map:E.t,roughness:.6}),t,.045,1.85,4.925,{ry:nt/2,cast:!1});{let x=this.movel("mesa",[6.8,.6],[e(6.8,.42,1.06,.41),e(6.8,1.22,.3,.3)],{nome:"Escrivaninha"});this.mesaG=x;let A=Ss("#9C6B45",{r:.42,rep:[2,1]}),L=et("#1F2937",{r:.4,m:.6});ut(x,A,[5.75,.72,.02],[7.85,.77,.82],.02);for(let lt of[5.82,7.78])ut(x,L,[lt-.03,0,.08],[lt+.03,.72,.14],.01),ut(x,L,[lt-.03,0,.7],[lt+.03,.72,.76],.01),ut(x,L,[lt-.03,.02,.08],[lt+.03,.06,.76],.01);ut(x,et("#F1F5F9",{r:.5}),[7.25,.18,.06],[7.7,.7,.62],.02),ut(x,et("#CBD5E1"),[7.27,.42,.62],[7.68,.44,.63],.003),ut(x,et("#1E293B",{r:.9}),[6,.77,.42],[7.55,.775,.78],.004),ut(x,et("#E5E7EB",{r:.4}),[6.42,.775,.55],[7.08,.8,.7],.01),this.teclas=ut(x,new ve({color:"#94A3B8",roughness:.5,emissive:"#60A5FA",emissiveIntensity:.25}),[6.44,.8,.565],[7.06,.805,.69],.003),this.mouse=Ot(new fn(.04,16,10),et("#E5E7EB",{r:.3}),x,7.28,.79,.62,{s:[.8,.4,1.2]}),he(x,L,.11,.12,.012,6.8,.776,.22),ut(x,L,[6.775,.77,.16],[6.825,1,.2],.01),ut(x,et("#0B0F19",{r:.25,m:.4}),[6.19,.86,.17],[7.41,1.42,.22],.02),this.mon=ke(1024,448),this.monMesh=Ot(new Ze(1.18,.516),new Ye({map:this.mon.t,toneMapped:!1}),x,6.8,1.14,.222,{cast:!1,recv:!1}),this.monLuz=new ui("#60A5FA",1.1,2.6,1.8),this.monLuz.position.set(6.8,1.15,.75),x.add(this.monLuz),this.monHalo=Ms("#60A5FA",1.6,.18),this.monHalo.position.set(6.8,1.14,.12),x.add(this.monHalo),he(x,et("#F8FAFC",{r:.3}),.04,.035,.1,5.98,.82,.55),Ot(new Oe(.025,.008,8,14),et("#F8FAFC"),x,6.03,.83,.55,{ry:0}),this.planta(5.95,.77,.2,.45,x);let k=this.cadeira=new At;k.position.set(6.8,0,1.22),k.rotation.y=nt,x.add(k);let Y=et("#1F2937",{r:.7}),gt=this.cadAcento=new ve({color:"#2457F5",roughness:.7});for(let lt=0;lt<5;lt++){let yt=lt*se/5;ut(k,L,[-.02,.05,0],[.02,.08,.3],.01,{ry:yt}).position.set(Math.sin(yt)*.15,.065,Math.cos(yt)*.15),ue(k,et("#111827"),.03,Math.sin(yt)*.29,.03,Math.cos(yt)*.29)}he(k,L,.025,.03,.4,0,.27,0),ut(k,Y,[-.26,.44,-.27],[.26,.53,.25],.05),ut(k,gt,[-.17,.53,-.2],[.17,.535,.2],.005);let Ht=new At;Ht.position.set(0,.5,-.27),Ht.rotation.x=-.12,k.add(Ht),ut(Ht,Y,[-.25,.05,-.08],[.25,.85,0],.06),ut(Ht,gt,[-.12,.12,0],[.12,.72,.006],.004),ut(Ht,Y,[-.15,.8,-.07],[.15,.98,0],.05);for(let lt of[-1,1])ut(k,L,[lt*.27-.015,.5,-.1],[lt*.27+.015,.68,-.06],.005),ut(k,Y,[lt*.27-.04,.68,-.2],[lt*.27+.04,.71,.12],.015);let K=new At;K.visible=!1,x.add(K),this.decPorquinho=K;let at=et("#F9A8D4",{r:.5}),mt=new At;mt.position.set(7.55,.775,.6),mt.rotation.y=-.5,K.add(mt),this.porco=mt,ue(mt,at,.09,0,.09,0,{s:[.9,.85,1.15]}),he(mt,et("#F472B6"),.035,.035,.04,0,.08,.11,{rx:nt/2});for(let lt of[-1,1])Ot(new hi(.025,.05,8),at,mt,lt*.045,.17,.05,{}),ue(mt,et("#111827"),.008,lt*.035,.12,.085);for(let[lt,yt]of[[-.04,.05],[.04,.05],[-.04,-.05],[.04,-.05]])he(mt,at,.02,.02,.05,lt,.02,yt);ut(mt,et("#9D174D"),[-.025,.165,-.03],[.025,.172,.03],.002),In(K)}ut(t,et("#7A5233",{r:.6}),[5.9,1.86,0],[7.7,1.9,.28],.01);let P=5.98;["#EF4444","#2457F5","#F59E0B","#10B981","#8B5CF6","#0EA5E9","#F43F5E"].forEach((x,A)=>{let L=.05+A%3*.015,k=.2+A%2*.05;ut(t,et(x,{r:.7}),[P,1.9,.04],[P+L,1.9+k,.24],.006,{rz:A===6?-.25:0}),P+=L+.008}),this.planta(7.5,1.9,.12,.3);let S=new At;S.position.set(5.25,2.35,.03),t.add(S),he(S,et("#1F2937",{r:.4}),.27,.27,.05,0,0,0,{rx:nt/2,seg:40}),he(S,et("#FFFFFF",{r:.5}),.24,.24,.052,0,0,.002,{rx:nt/2,seg:40});for(let x=0;x<12;x++){let A=x*se/12;ut(S,et("#1F2937"),[-.006,-.025,0],[.006,.025,.01],.002).position.set(Math.sin(A)*.2,Math.cos(A)*.2,.03),S.children[S.children.length-1].rotation.z=-A}let R=(x,A,L,k)=>{let Y=new At;return Y.position.z=k,S.add(Y),ut(Y,et(L),[-A/2,-.02,0],[A/2,x,.006],.002),Y};this.pH=R(.12,.018,"#1F2937",.03),this.pM=R(.18,.012,"#1F2937",.037),this.pS=R(.2,.005,"#EF4444",.044),ue(S,et("#EF4444"),.014,0,0,.05);{let x=this.sinuca={x0:5.7,x1:8.1,z0:3.75,z1:5.05,y:.8},A=this.movel("sinuca",[6.9,4.4],[e(6.9,4.4,1.2,.65)],{nome:"Mesa de sinuca"});this.sinucaG=A;let L=Ss("#5B3A1E",{r:.45}),k=yr("#15803D",{r:.98,rep:[6,4]});ut(A,L,[x.x0+.15,.12,x.z0+.15],[x.x1-.15,.72,x.z1-.15],.04);for(let K of[x.x0+.2,x.x1-.2])for(let at of[x.z0+.2,x.z1-.2])ut(A,L,[K-.07,0,at-.07],[K+.07,.3,at+.07],.03);ut(A,k,[x.x0+.08,.7,x.z0+.08],[x.x1-.08,.78,x.z1-.08],.01);let Y=Ss("#7C4A21",{r:.35,rep:[3,1]});ut(A,Y,[x.x0,.68,x.z0],[x.x1,.84,x.z0+.1],.025),ut(A,Y,[x.x0,.68,x.z1-.1],[x.x1,.84,x.z1],.025),ut(A,Y,[x.x0,.68,x.z0],[x.x0+.1,.84,x.z1],.025),ut(A,Y,[x.x1-.1,.68,x.z0],[x.x1,.84,x.z1],.025);let gt=et("#0B0B0B",{r:.9});this.cacapas=[[x.x0+.11,x.z0+.11],[x.x1-.11,x.z0+.11],[x.x0+.11,x.z1-.11],[x.x1-.11,x.z1-.11],[(x.x0+x.x1)/2,x.z0+.09],[(x.x0+x.x1)/2,x.z1-.09]];for(let[K,at]of this.cacapas)he(A,gt,.055,.055,.012,K,.785,at,{cast:!1});let Ht=K=>ue(A,et(K,{r:.15}),.03,0,0,0,{seg:20,seg2:14});[["#DC2626",6.25,3.98],["#1D4ED8",6.4,4.85],["#111827",6.95,3.95],["#7C3AED",6.05,4.15]].forEach(([K,at,mt])=>Ht(K).position.set(at,.81,mt)),this.bB=Ht("#F8FAFC"),this.bA=Ht("#FACC15"),this.pendLuz=new ui("#FFE3A8",0,3.2,1.6),this.pendLuz.position.set(6.9,1.95,4.4),A.add(this.pendLuz),ut(A,et("#3B82F6",{r:.8}),[8,.84,4.95],[8.04,.86,4.99],.003)}{let x=this.movel("planta1",[.45,.45],[e(.45,.45,.24,.24)],{nome:"Planta"});this.planta(.45,0,.45,1.25,x)}{let x=this.movel("planta2",[8.5,6.95],[e(8.5,6.95,.22,.22)],{nome:"Planta"});this.plantaFrente=this.planta(8.5,0,6.95,1.05,x)}let I=this.dec={};{let x=this.movel("fliperama",[5.29,.5],[e(5.29,.5,.34,.42)],{nome:"Fliperama",decor:"fliperama"});I.fliperama=this.moveis.fliperama;let A=this.pedaco(x,[8.52,.5],[5.29,.5]),L=et("#7C3AED",{r:.5});ut(A,L,[8.18,0,.15],[8.86,1.8,.8],.03),ut(A,et("#1F2937"),[8.2,.95,.72],[8.84,1.05,1],.02,{rx:.15}),this.arcade=ke(128,128),Ot(new Ze(.56,.46),new Ye({map:this.arcade.t,toneMapped:!1}),A,8.52,1.3,.805,{rx:-.12,cast:!1}),ut(A,new ve({color:"#F472B6",emissive:"#F472B6",emissiveIntensity:.9}),[8.2,1.66,.6],[8.84,1.78,.81],.02),this.joy=new At,this.joy.position.set(8.36,1.07,.88),A.add(this.joy),he(this.joy,et("#111827"),.008,.008,.07,0,.035,0),ue(this.joy,et("#EF4444",{r:.3}),.025,0,.075,0),this.botoesArc=[ue(A,et("#FACC15",{r:.3}),.02,8.6,1.07,.9),ue(A,et("#22C55E",{r:.3}),.02,8.68,1.07,.88)],this.arcMao=[new Ce,new Ce],this.arcMao[0].position.set(8.36,1.17,.9),this.arcMao[1].position.set(8.64,1.12,.9),this.arcMao.forEach(k=>A.add(k)),In(A)}{let x=this.movel("cofre",[8.54,1.63],[e(8.54,1.63,.36,.34),e(7.92,1.12,.12,.12)],{nome:"Cofre",decor:"cofre"});I.cofre=this.moveis.cofre;let A=this.pedaco(x,[8.54,1.63],[8.54,1.63],-nt/2),L=et("#D4A017",{r:.25,m:.9}),k=et("#3F2A08",{r:.6});ut(A,L,[8.22,0,1.3],[8.86,.72,1.6],.04),ut(A,L,[8.22,0,1.3],[8.28,.72,1.96],.02),ut(A,L,[8.8,0,1.3],[8.86,.72,1.96],.02),ut(A,L,[8.22,0,1.3],[8.86,.06,1.96],.02),ut(A,L,[8.22,.66,1.3],[8.86,.72,1.96],.02),ut(A,k,[8.28,.06,1.58],[8.8,.66,1.62],.005);for(let gt=0;gt<3;gt++)ut(A,et("#FACC15",{r:.25,m:.9,e:"#7A5A00",ei:.6}),[8.32+gt*.15,.06,1.66],[8.44+gt*.15,.14,1.86],.01);this.cofreBrilho=Ms("#FDE68A",.9,0),this.cofreBrilho.position.set(8.54,.4,1.8),A.add(this.cofreBrilho);let Y=this.cofrePorta=new At;Y.position.set(8.24,0,1.97),A.add(Y),ut(Y,L,[0,.03,-.02],[.6,.69,.03],.03),he(Y,et("#713F12",{m:.6,r:.4}),.1,.1,.03,.3,.4,.04,{rx:nt/2}),ut(Y,et("#713F12",{m:.6}),[.295,.32,.05],[.305,.48,.06],.002),this.cofreMacaneta=new Ce,this.cofreMacaneta.position.set(.5,.42,.08),Y.add(this.cofreMacaneta);for(let gt=0;gt<5;gt++)he(A,et("#FACC15",{r:.3,m:.85}),.06,.06,.02,8.05+gt%2*.04,.01+gt*.021,2.25,{});for(let gt=0;gt<3;gt++)he(A,et("#FACC15",{r:.3,m:.85}),.06,.06,.02,7.92,.01+gt*.021,2.12,{});In(A)}{let x=this.movel("aquario",[.35,6.835],[e(.35,6.835,.31,.49)],{nome:"Aqu\xE1rio",decor:"aquario"});I.aquario=this.moveis.aquario,ut(x,et("#5B3A1E",{r:.6}),[.04,0,6.35],[.66,.74,7.32],.02),Ot(new vs(.58,.5,.92,2,.01),new ve({color:"#7DD3FC",transparent:!0,opacity:.32,roughness:.05,metalness:.1,depthWrite:!1}),x,.35,1,6.835,{cast:!1}),ut(x,et("#E7D7B8"),[.08,.74,6.4],[.62,.79,7.28],.01),ut(x,et("#1F2937"),[.05,1.24,6.38],[.65,1.28,7.3],.01),this.peixes=[],["#F97316","#FACC15","#38BDF8","#F43F5E"].forEach((A,L)=>{let k=new At;ue(k,et(A,{r:.4}),.035,0,0,0,{s:[.6,.8,1.4],seg:12}),Ot(new hi(.03,.05,8),et(A),k,0,0,-.06,{rx:-nt/2}),x.add(k),this.peixes.push(k)});for(let A=0;A<5;A++){let L=Ot(new hi(.03,.18+A*.03,6),et("#16A34A",{r:.8}),x,.2+A%3*.12,.85,6.5+A*.17);L.userData.alga=A}this.bolhas=[];for(let A=0;A<6;A++){let L=ue(x,et("#FFFFFF",{op:.6,r:.1}),.008,.45,.8,7.1,{seg:8,seg2:6,cast:!1});this.bolhas.push(L)}this.racao=[];for(let A=0;A<14;A++){let L=ue(x,et("#B45309",{r:.8}),.006,.35,1.2,6.8,{seg:6,seg2:4,cast:!1});L.visible=!1,this.racao.push(L)}ut(x,et("#F59E0B",{r:.6}),[.5,1.28,7.12],[.58,1.38,7.2],.008),ut(x,et("#DC2626",{r:.5}),[.5,1.38,7.12],[.58,1.395,7.2],.004),this.aqLuz=Ms("#38BDF8",1,.25),this.aqLuz.position.set(.35,1,6.85),x.add(this.aqLuz)}{let x=this.movel("touro",[6.2,6.95],[e(6.2,6.95,.35,.35)],{nome:"Touro de ouro",decor:"touro"});I.touro=this.moveis.touro;let A=this.pedaco(x,[8.5,6.95],[6.2,6.95]),L=et("#E3B341",{r:.18,m:1});ut(A,et("#E5E7EB",{r:.5}),[8.15,0,6.6],[8.85,.55,7.3],.03);let k=new At;k.position.set(8.5,.55,6.95),k.rotation.y=-nt*.6,A.add(k),this.touroT=k,Ln(k,L,.13,.28,0,.3,0,{rx:nt/2}),ue(k,L,.12,0,.33,-.1);let Y=new At;Y.position.set(0,.36,.27),Y.rotation.x=.5,k.add(Y),ue(Y,L,.09,0,0,0,{s:[1,.9,1.2]});for(let gt of[-1,1])Ot(new Oe(.07,.015,8,16,nt*.7),L,Y,gt*.07,.07,0,{rz:gt>0?-.2:nt+.2});this.touroCab=new Ce,this.touroCab.position.set(0,.1,0),Y.add(this.touroCab);for(let[gt,Ht]of[[-.08,.15],[.08,.15],[-.08,-.15],[.08,-.15]])Ln(k,L,.035,.12,gt,.12,Ht);Ot(new Oe(.08,.012,6,12,nt),L,k,0,.32,-.24,{ry:nt/2}),In(A)}{let x=this.movel("trofeu",[8.6,2.6],[e(8.6,2.6,.18,.18)],{nome:"Trof\xE9u",decor:"trofeu"});I.trofeu=this.moveis.trofeu,ut(x,et("#E5E7EB",{r:.45}),[8.44,0,2.44],[8.76,.08,2.76],.02),ut(x,et("#F8FAFC",{r:.4}),[8.48,.08,2.48],[8.72,1,2.72],.02),ut(x,et("#E5E7EB",{r:.45}),[8.45,1,2.45],[8.75,1.04,2.75],.02);let A=this.trofeuObj=new At,L=et("#E3B341",{r:.2,m:1}),k=[[0,0],[.06,0],[.06,.03],[.018,.04],[.018,.1],[.07,.13],[.085,.22],[0,.22]].map(([Y,gt])=>new xt(Y,gt));Ot(new ar(k,24),L,A);for(let Y of[-1,1])Ot(new Oe(.035,.008,6,12),L,A,Y*.085,.17,0,{});In(A),this.trofeuBase=Mt(8.6,1.04,2.6),A.position.copy(this.trofeuBase),x.add(A),this.trofeuPai=x}{let x=this.movel("cachorro",[1.35,6.2],[e(1.35,6.2,.38,.3)],{nome:"Caminha do cachorro",decor:"cachorro"});I.cachorro=this.moveis.cachorro,Ot(new Oe(.28,.08,12,32),et("#7C3AED",{r:.9}),x,1.35,.08,6.2,{rx:nt/2,s:[1.25,.95,1]}),Ot(new Hi(.3,.3,.05,32),et("#C4B5FD",{r:1}),x,1.35,.04,6.2,{s:[1.2,1,.9]}),ue(x,et("#EF4444",{r:.5}),.04,1.75,.04,6.45)}{let x=new At;x.visible=!1,t.add(x),I.globo=x,he(x,et("#94A3B8"),.004,.004,.3,3.4,ze-.15,4.9),this.globo=Ot(new ds(.2,2),new ve({color:"#E2E8F0",metalness:1,roughness:.12,flatShading:!0}),x,3.4,ze-.48,4.9),this.spots=["#F43F5E","#22D3EE","#FACC15","#A855F7"].map(A=>{let L=new uo(A,0,8,.35,.6,1.2);return L.position.set(3.4,ze-.48,4.9),x.add(L,L.target),L})}I.porquinho=this.decPorquinho;{let x=new At;x.visible=!1,t.add(x),I.neon=x;let A=ke(256,256);A.g.font="900 210px system-ui, sans-serif",A.g.textAlign="center",A.g.textBaseline="middle",A.g.shadowColor="#FB923C",A.g.shadowBlur=24,A.g.fillStyle="#FDBA74",A.g.fillText("\u20BF",128,138),this.neonM=new Ye({map:A.t,transparent:!0,toneMapped:!1,depthWrite:!1}),Ot(new Ze(.6,.6),this.neonM,x,.03,2.2,6.6,{ry:nt/2,cast:!1}),this.neonHalo=Ms("#FB923C",1.1,.35),this.neonHalo.position.set(.15,2.2,6.6),x.add(this.neonHalo)}{let x=new At;x.visible=!1,t.add(x),I.arcoiris=x,this.arcoM=[],["#F43F5E","#F59E0B","#22C55E","#3B82F6"].forEach((L,k)=>{let Y=new Ye({color:L,toneMapped:!1});this.arcoM.push(Y),Ot(new Oe(.42-k*.07,.014,8,48,nt),Y,x,3.2,2.28,.07,{cast:!1})});let A=Ms("#FDE68A",1.4,.25);A.position.set(3.2,2.45,.15),x.add(A),this.arcoHalo=A}{let x=new At;x.visible=!1,t.add(x),I.dardos=x;let A=ke(128,128);[["#111827",62],["#F43F5E",50],["#FEF3C7",34],["#F43F5E",16]].forEach(([L,k])=>{A.g.fillStyle=L,A.g.beginPath(),A.g.arc(64,64,k,0,se),A.g.fill()}),Ot(new hs(.22,32),new ve({map:A.t,roughness:.8}),x,.012,1.75,5.95,{ry:nt/2,cast:!1}),this.dardos=[];for(let L=0;L<3;L++){let k=new At;he(k,et("#9CA3AF",{m:.8,r:.3}),.003,.001,.05,0,.025,0),he(k,et("#1D4ED8"),.006,.006,.08,0,-.04,0),Ot(new hi(.02,.04,4),et("#FACC15",{ds:!0}),k,0,-.09,0,{rx:nt}),k.scale.setScalar(1.7),t.add(k),k.visible=!1,this.dardos.push(k)}this.dardosAlvo=[[.07,1.77,5.93],[.07,1.7,6],[.07,1.78,6.02]]}let F=260,U=new Ze(.05,.03);this.confete=new cs(U,new Ye({side:Sn,toneMapped:!1}),F);let N=["#F43F5E","#F59E0B","#22C55E","#3B82F6","#A855F7","#FACC15","#FFFFFF"].map(x=>new Qt(x));this.confData=Array.from({length:F},()=>({x:Math.random()*Ge,z:Math.random()*Ve,y0:Math.random()*ze,v:.4+Math.random()*.5,r:Math.random()*se,rv:(Math.random()-.5)*8,sw:Math.random()*se}));for(let x=0;x<F;x++)this.confete.setColorAt(x,N[x%N.length]);this.confete.visible=!1,this.confete.frustumCulled=!1,t.add(this.confete),this.faisca=ke(64,64);{let x=this.faisca.g;x.translate(32,32),x.fillStyle="#FFF7C2",x.beginPath();for(let A=0;A<8;A++){let L=A*nt/4,k=A%2?9:30;x.lineTo(Math.cos(L)*k,Math.sin(L)*k)}x.closePath(),x.fill()}this.faiscas=[];for(let x=0;x<18;x++){let A=new ki(new Si({map:this.faisca.t,color:"#FDE68A",transparent:!0,depthWrite:!1,blending:Zi,toneMapped:!1}));A.visible=!1,t.add(A),this.faiscas.push({s:A,vida:9})}this.notaGeo=new vs(.16,.004,.08,1,.001);let O=ke(128,64);O.g.fillStyle="#86EFAC",O.g.fillRect(0,0,128,64),O.g.strokeStyle="#15803D",O.g.lineWidth=5,O.g.strokeRect(4,4,120,56),O.g.fillStyle="#15803D",O.g.font="bold 34px system-ui",O.g.textAlign="center",O.g.fillText("R$",64,44),this.notaMat=new ve({map:O.t,roughness:.8}),this.itens={},this.itens.controle=this.fazerControle(),t.add(this.itens.controle);let X=new At;he(X,et("#FFFFFF",{r:.3}),.042,.036,.1,0,.05,0),he(X,et("#6B3E1F",{r:.2}),.038,.038,.004,0,.096,0),Ot(new Oe(.028,.008,8,14),et("#FFFFFF"),X,.045,.05,0,{}),In(X,!0,!1),this.itens.xicara=X,t.add(X);let W=new ye(this.notaGeo,this.notaMat);W.castShadow=!0,this.itens.nota=W,t.add(W);let rt=new At;for(let x=0;x<6;x++){let A=new ye(this.notaGeo,this.notaMat);A.position.y=x*.005,A.rotation.y=(x%3-1)*.08,rt.add(A)}In(rt,!0,!1),this.itens.maco=rt,t.add(rt);let q=new At;he(q,et("#B7793A",{r:.4}),.0105,.02,1.45,0,.725,0),he(q,et("#1F2937",{r:.4}),.0205,.021,.35,0,.175,0),he(q,et("#E8F1FF"),.0105,.0105,.02,0,1.455,0),he(q,et("#3B82F6"),.0108,.0108,.008,0,1.468,0),In(q,!0,!1),this.itens.taco=q,t.add(q);let j=new At;ut(j,et("#111827",{r:.3}),[-.035,-.07,-.005],[.035,.07,.005],.008),this.celTela=ke(64,128),Ot(new Ze(.062,.126),new Ye({map:this.celTela.t,toneMapped:!1}),j,0,0,.0055,{cast:!1}),this.itens.celular=j,t.add(j);let tt=new At;he(tt,et("#FACC15",{r:.25,m:.9}),.025,.025,.006,0,0,0,{rx:nt/2}),this.itens.moeda=tt,t.add(tt);let st=()=>{let x=new At;return he(x,et("#9CA3AF",{m:.8,r:.3}),.003,.001,.05,0,.025,0),he(x,et("#1D4ED8"),.006,.006,.08,0,-.04,0),Ot(new hi(.02,.04,4),et("#FACC15",{ds:!0}),x,0,-.09,0,{rx:nt}),x.scale.setScalar(1.7),x};this.itens.dardo=st(),t.add(this.itens.dardo);let pt=new At;this.aljavaD=[0,1,2].map(x=>{let A=st();return A.position.set((x-1)*.018,0,0),A.rotation.z=(x-1)*.12,pt.add(A),A}),this.itens.aljava=pt,t.add(pt),Object.values(this.itens).forEach(x=>{x.visible=!1});let bt=this.nuvem=new At,ft=et("#94A3B8",{r:1});[[0,0,0,.16],[-.14,-.03,0,.12],[.15,-.02,.02,.13],[.05,.08,0,.12],[-.06,.02,.08,.1]].forEach(([x,A,L,k])=>ue(bt,ft,k,x,A,L,{cast:!1})),this.gotas=[];for(let x=0;x<8;x++){let A=he(bt,o_("#60A5FA",{op:.85}),.006,.006,.07,-.15+x*.043,-.15,(x%3-1)*.05,{cast:!1});this.gotas.push(A)}bt.visible=!1,t.add(bt),this.balao=ke(128,128),this.balaoT="",this.balaoS=new ki(new Si({map:this.balao.t,transparent:!0,depthWrite:!1})),this.balaoS.visible=!1,t.add(this.balaoS);for(let x in this.moveis){let A=this.moveis[x];if(!A.piso)for(let L of A.caixas)Lf(A.inner,L.c[0],L.c[1],L.h[0],L.h[1],L.r||0,x.startsWith("planta")?.3:.42)}Lf(t,3.2,.27,1.25,.24,0,.35),Mr(t,Ge,.55,Mt(Ge/2,.004,.27),new nn(-nt/2,0,0),.2),Mr(t,Ve,.55,Mt(.27,.004,Ve/2),new nn(-nt/2,0,nt/2),.2),Mr(t,Ge,.5,Mt(Ge/2,.25,.003),new nn(0,0,nt),.16),Mr(t,Ve,.5,Mt(.003,.25,Ve/2),new nn(0,nt/2,nt),.16),Mr(t,.45,ze,Mt(.22,ze/2,.003),new nn(0,0,-nt/2),.18),Mr(t,.45,ze,Mt(.003,ze/2,.22),new nn(0,nt/2,nt/2),.18);let dt=ke(128,128);dt.g.strokeStyle="#FFFFFF",dt.g.lineWidth=7,Ai(dt.g,6,6,116,116,16),dt.g.stroke(),dt.g.fillStyle="rgba(255,255,255,.14)",dt.g.fill(),this.contornoTex=dt.t;for(let x in this.moveis){let A=this.moveis[x];A.marca=new ye(new Ze(1,1),new Ye({map:dt.t,color:"#60A5FA",transparent:!0,depthWrite:!1,toneMapped:!1,opacity:.85})),A.marca.rotation.x=-nt/2,A.marca.visible=!1,A.marca.renderOrder=2,t.add(A.marca),A.outer.traverse(L=>{L.userData.movel=x})}}fazerControle(){let t=new At;ut(t,et("#1F2937",{r:.35}),[-.08,-.015,-.035],[.08,.015,.035],.015);for(let e of[-1,1])ue(t,et("#1F2937",{r:.35}),.035,e*.07,-.005,-.015,{s:[1,.7,1.3]});return ue(t,et("#60A5FA",{e:"#60A5FA",ei:.6}),.009,-.04,.016,0),ue(t,et("#F87171",{e:"#F87171",ei:.6}),.009,.04,.016,0),In(t,!0,!1)}planta(t,e,n,i,r=this.scene){let o=new At;o.position.set(t,e,n),r.add(o);let a=i*.18;he(o,et("#E7E5E4",{r:.6}),a,a*.8,i*.32,0,i*.16,0),he(o,et("#57534E",{r:1}),a*.95,a*.95,.01,0,i*.32,0);let l=new At;l.position.y=i*.32,o.add(l);let c=[et("#16A34A",{r:.7,ds:!0}),et("#22C55E",{r:.7,ds:!0}),et("#15803D",{r:.7,ds:!0})],h=9;for(let f=0;f<h;f++){let u=f*se/h+f%2*.3,d=.35+f%3*.2,m=i*(.5+f%4*.1),v=new At;v.rotation.set(0,u,0),l.add(v);let g=new At;g.rotation.x=d,v.add(g),Ot(new fn(m*.5,10,8),c[f%3],g,0,m*.5,0,{s:[.32,1,.1]})}return In(o),(this.plantas||(this.plantas=[])).push(l),o}lugares(){let t=this.nav,e=(a,l)=>this.lugar(a,l),n=a=>{let l=t.perto(a[0],a[1]);return[l[0],l[1],a[2]??0]},i=e("mesa",[7.45,1.95]),r=e("mesa",[6.8,.3]);return{sofaS:e("sofa",[3.2,3,nt]),sofaP:n(e("sofa",[3.2,2.3,nt])),cafeP:n(e("cafe",[.98,4.9,-nt/2])),cadS:e("mesa",[6.8,1.2,nt]),cadP:n(e("mesa",[6.8,1.95,nt])),monP:n([i[0],i[1],Yo(i,r)]),ritmo1:n(e("mesa",[5.5,2.35])),ritmo2:n(e("mesa",[7.9,2.45])),polS:e("poltrona",[.92,3.2,nt/4]),polP:n(e("poltrona",[1.36,3.64,nt/4])),janP:n([.62,1.85,-nt/2]),danca:n([3.4,5.25,nt/4]),sinP:this.sinP?n(this.sinP):n([8.5,4.6,-nt/2])}}calibrarTacada(){let t=this.sinuca,e=[7.62,4.52],n=[t.x0+.11,t.z0+.11],i=[n[0]-e[0],n[1]-e[1]],r=Math.hypot(...i),o=[i[0]/r,i[1]/r],a=[e[0]+o[0]*.5,e[1]+o[1]*.5],l=[a[0]-o[0]*.06,a[1]-o[1]*.06],c=[l[0]+o[0]*.1-o[1]*.12,l[1]+o[1]*.1+o[0]*.12];this.bolas={R:e,Y:a,C:l,u:o,fimB:c,pk:n};let h=Math.atan2(o[0],o[1]),f=[o[1],-o[0]],u=[e[0]-o[0]*.9-f[0]*.13,e[1]-o[1]*.9-f[1]*.13];this.tacoBase={tip:[e[0]-o[0]*.035,e[1]-o[1]*.035],u:o,el:.16},this.sinP=this.lugar("sinuca",[u[0],u[1],h])}tacoPontas(t){let e=this.boneco,n=e.root,i=t.taco,r=t.recuo||0,o=(M,T,y)=>this.pto("sinuca",M,T,y),a=[o(8.14,.02,5.1),o(8.11,1.46,4.93)],l=[n.localToWorld(Mt(.27,.05,.17)),n.localToWorld(Mt(.33,1.5,.25))],c=this.tacoBase,h=Math.cos(c.el),f=Math.sin(c.el),u=this.pto("sinuca",c.tip[0]-c.u[0]*h,.81+f,c.tip[1]-c.u[1]*h).sub(this.pto("sinuca",c.tip[0],.81,c.tip[1])).normalize(),d=this.pto("sinuca",c.tip[0],.812,c.tip[1]).addScaledVector(u,r*.2),m=[d.clone().addScaledVector(u,1.45),d],v,g,p;if(i<=0?(p=ce(i+1),v=a[0].clone().lerp(l[0],p),g=a[1].clone().lerp(l[1],p)):(p=ce(i),v=l[0].clone().lerp(m[0],p),g=l[1].clone().lerp(m[1],p)),i>0&&i<1){let M=Math.sin(nt*p)*.25;v.y+=M,g.y+=M}return{butt:v,tip:g,ax:u,apoioBridge:this.pto("sinuca",c.tip[0],.8,c.tip[1]).addScaledVector(u,.26).setY(.795),dedos:u.clone().negate().setY(-.15)}}aplicarTaco(t){let e=this.tacoPontas(t),n=this.itens.taco;n.visible=!0;let i=e.tip.clone().sub(e.butt),r=i.length()||1;i.divideScalar(r),n.position.copy(e.butt),n.quaternion.setFromUnitVectors(Mt(0,1,0),i);let o=t.taco,a=te(o+1),l=vt(.98,.5,te(o)),c=e.butt.clone().addScaledVector(i,l);if(t.ikR=[c.x,c.y,c.z],t.kR=Math.max(t.kR||0,a),o>.02){let h=e.apoioBridge;t.ikL=[h.x,h.y,h.z],t.kL=Math.max(t.kL||0,te(o)),t.oriL=[e.dedos.x,e.dedos.y,e.dedos.z]}t.item=o>.5?"tacoShot":o>-.5?"tacoV":t.item}teclado(){return{L:this.pto("mesa",6.62,.822,.645),R:this.pto("mesa",6.97,.822,.645)}}mundo(t){return t.getWorldPosition(new B)}alvoCao(){return this.mundo(this.cao.cab).add(Mt(0,.05,0))}alvoArcade(){return this.arcMao.map(t=>this.mundo(t))}alvoTouro(){return this.mundo(this.touroCab)}alvoCofre(){return this.mundo(this.cofreMacaneta)}alvoPorco(){return this.mundo(this.porco).add(Mt(0,.17,0))}alvoTrofeu(){let t=this.trofeuPai,e=this.trofeuBase;return{L:t.localToWorld(e.clone().add(Mt(-.1,.17,0))),R:t.localToWorld(e.clone().add(Mt(.1,.17,0)))}}atualizar(t){let e=this.d;this.d=t;let n=t.humor||"tranquilo";this.boneco&&((t.boneco!==e.boneco||t.acessorio!==e.acessorio)&&this.boneco.setAparencia(t.boneco,t.acessorio),this.boneco.setCor(t.cor),t.icone!==e.icone&&this.boneco.setIcone(t.icone)),this.cadAcento&&this.cadAcento.color.set(t.cor||"#2457F5"),this.titulo=t.titulo,this.pctTxt=t.pct==null||!isFinite(t.pct)?"":(t.pct>0?"+":"")+t.pct.toFixed(2).replace(".",",")+"%";let i=Object.fromEntries((e.ativos||[]).map(o=>[o.t,o]));for(let o of t.ativos||[]){let a=i[o.t];a&&a.preco!=null&&o.preco!=null&&Math.abs(a.preco-o.preco)>1e-9&&(this.flash[o.t]={t:performance.now(),up:o.preco>a.preco})}if(e.ativos&&JSON.stringify((e.ativos||[]).map(o=>[o.t,o.preco]))!==JSON.stringify((t.ativos||[]).map(o=>[o.t,o.preco]))&&this.log("cota\xE7\xF5es atualizadas"),!t.sim&&t.pct!=null&&isFinite(t.pct)){let o=this.hist[this.hist.length-1];(!o||Math.abs(o.v-t.pct)>1e-6)&&(this.hist.push({v:t.pct,t:Date.now()}),this.hist.length>60&&this.hist.shift())}if(t.layout!==void 0&&!this.salvando&&!this.arrasto){let o=a=>JSON.stringify({m:a&&a.m||{},off:[...a&&a.off||[]].sort()});o(t.layout)!==o(this.layoutAtual())&&(this.aplicarLayout(t.layout,!0),this.navOk=!1)}this.tem=t.tem||{},this.dir||(this.dir=new mu(this));let r=this.aplicarDecor(!t.tudo&&!t.sim);n!==this.h&&(this.h&&this.log(t.sim?"simulando: "+(t.titulo||n).toLowerCase():"humor: "+(t.titulo||n).toLowerCase()),this.h=n,this.aplicarHumor(),this.dir.humor(n)),(r||!this.navOk)&&(this.navOk=!0,this.mudouLayout()),this.renderer.domElement.setAttribute("aria-label","Escrit\xF3rio 3D: "+(t.titulo||"")),this.sujo=!0}aplicarDecor(t){let e=!1;for(let n in this.dec){let i=this.dec[n],r=!!this.tem[n]&&!this.off.has(n),o=i.outer||i;o.visible!==r&&(o.visible=r,e=!0,r&&(this.pops[n]=performance.now(),t&&!this.vistos.has(n)&&(this.vistos.add(n),this.salvarVistos(),this.dir&&this.dir.novidade(n))))}return this.dec.cachorro&&(this.cao.g.visible=this.dec.cachorro.outer.visible),e}get pops(){return this._pops||(this._pops={})}lerVistos(){try{return new Set(JSON.parse(localStorage.getItem("radar-esc-vistos")||"[]"))}catch{return new Set}}salvarVistos(){try{localStorage.setItem("radar-esc-vistos",JSON.stringify([...this.vistos]))}catch{}}equipar(t,e){e?this.off.delete(t):this.off.add(t),this.aplicarDecor(!1)&&this.mudouLayout(),this.avisarLayout(),this.log((e?"colocou ":"guardou ")+(this.moveis[t]?this.moveis[t].nome.toLowerCase():t))}avisarLayout(){if(typeof this.d.onLayout=="function"){this.salvando=!0;try{this.d.onLayout(this.layoutAtual())}finally{this.salvando=!1}}}restaurar(){let t=[...this.off];this.aplicarLayout({off:t}),this.avisarLayout(),this.log("restaurou os m\xF3veis")}aplicarHumor(){let t=h_[this.h];this.cfg=t,this.confete.visible=this.h==="euforico";for(let e of this.notas)this.scene.remove(e.m);this.notas=[],this.aplicarLuz()}aplicarLuz(){let t=this.cfg,e=this.noite;this.hemi.intensity=t.hemi*(e?.55:1),this.hemi.color.set(e?"#A9B8E8":"#E3EBFF"),this.key.intensity=t.key*(e?.35:1),this.key.color.set(e?"#9DB0FF":t.keyCor),this.fill.intensity=e?.25:.35;let n=t.lamp||e;this.lampLuz.intensity=n?2.6:0,this.lampHalo.material.opacity=n?.55:0,this.cupula.material.emissiveIntensity=n?1.1:0;let i=t.pend||e;this.pendLuz.intensity=i?2.4:0,this.tvLuz.color.set(t.tv),this.monLuz.color.set(t.mon),this.monHalo.material.color.set(t.mon),this.feixe.material.opacity=e?.06:t.raio,this.feixe.material.color.set(e?"#A5B4FC":"#FFE7A3"),this.renderer.toneMappingExposure=t.exp*(e?.86:1),this.scene.environmentIntensity=e?.14:.32}ligarControles(){let t=this.renderer.domElement,e=null;t.style.touchAction="pan-y";let n=new po,i=new xt,r=new Tn(Mt(0,1,0),0),o=c=>{let h=t.getBoundingClientRect();i.set((c.clientX-h.left)/h.width*2-1,-((c.clientY-h.top)/h.height)*2+1),n.setFromCamera(i,this.cam)},a=c=>{o(c);let h=new B;return n.ray.intersectPlane(r,h)?h:null};t.addEventListener("pointerdown",c=>{if(this.edit){o(c);let h=[];for(let u in this.moveis){let d=this.moveis[u];this.ativo(d)&&h.push(d.outer)}let f=n.intersectObjects(h,!0).find(u=>u.object.userData.movel);if(f){let u=this.moveis[f.object.userData.movel],d=a(c)||f.point;this.arrasto={m:u,ini:[u.x,u.z,u.ri],off:[u.x-d.x,u.z-d.z],moveu:!1,id:c.pointerId,x:c.clientX,y:c.clientY,ok:!0},this.sel=u;try{t.setPointerCapture(c.pointerId)}catch{}c.preventDefault(),this.sujo=!0;return}}e={x:c.clientX,y:c.clientY,az:this.az,el:this.el_,id:c.pointerId,moveu:!1}}),window.addEventListener("pointermove",c=>{let h=this.arrasto;if(h&&c.pointerId===h.id){if(!h.moveu&&Math.hypot(c.clientX-h.x,c.clientY-h.y)>5&&(h.moveu=!0),!h.moveu)return;let d=a(c);if(!d)return;let m=Math.round((d.x+h.off[0])/.05)*.05,v=Math.round((d.z+h.off[1])/.05)*.05;[m,v]=this.prender(h.m,m,v,h.m.ri),h.ok=this.cabe(h.m,m,v,h.m.ri),this.posicionar(h.m,m,v,h.m.ri),this.sujo=!0;return}if(!e||c.pointerId!==e.id)return;let f=c.clientX-e.x,u=c.clientY-e.y;if(!e.moveu&&Math.hypot(f,u)>6){e.moveu=!0;try{t.setPointerCapture(c.pointerId)}catch{}this.camModo!=="sala"&&this.setCam("sala",!0)}e.moveu&&(this.az=te(e.az-f*.006,.12,nt/2-.12),c.pointerType!=="touch"&&(this.el_=te(e.el+u*.004,.22,1)),this.sujo=!0)});let l=c=>{let h=this.arrasto;if(h&&(!c||c.pointerId===h.id)){this.arrasto=null;let f=h.m;if(h.moveu)h.ok?this.log("moveu "+f.nome.toLowerCase()):(this.posicionar(f,...h.ini),this.log("n\xE3o cabe ali"));else{for(let u=1;u<=8;u++){let d=h.ini[2]+u,[m,v]=this.prender(f,f.x,f.z,d);if(this.cabe(f,m,v,d)){this.posicionar(f,m,v,d);break}}this.log("girou "+f.nome.toLowerCase())}this.mudouLayout(),this.avisarLayout(),this.sujo=!0;return}e&&e.moveu&&this.log("girou a c\xE2mera"),e=null};window.addEventListener("pointerup",l),window.addEventListener("pointercancel",l),t.addEventListener("dblclick",()=>{this.edit||(this.az=nt/4,this.el_=.5,this.setCam("sala"))})}setEdicao(t){this.edit=!!t,this.sel=null,this.sujo=!0,this.renderer.domElement.style.cursor=t?"grab":"";for(let e in this.moveis)this.moveis[e].marca.visible=!1;t&&this.camModo!=="sala"&&this.setCam("sala",!0),this.log(t?"arrumando o escrit\xF3rio":"terminou de arrumar")}setCam(t,e){this.camModo=t,this.sujo=!0,e||this.log({sala:"vis\xE3o da sala",tela:"zoom no computador",seguir:"seguindo o boneco"}[t]||t)}alvoCamera(t){let e=this.cam.aspect;if(window.__ofCamOv)return window.__ofCamOv(this,t,Mt);if(this.camModo==="tela")return e<1?{pos:this.pto("mesa",7.12,1.2,1.1),alvo:this.pto("mesa",6.8,1.13,.22),fov:70}:{pos:this.pto("mesa",7.2,1.24,1.2),alvo:this.pto("mesa",6.87,1.12,.22),fov:50};if(this.camModo==="seguir"){let h=this.boneco.root.position,f=this.az+.1*Math.sin(t*.2),u=.42,d=e<1?4.6:3.9;return{pos:Mt(h.x+Math.sin(f)*Math.cos(u)*d,.95+Math.sin(u)*d,h.z+Math.cos(f)*Math.cos(u)*d),alvo:Mt(h.x,.95,h.z),fov:38}}let n=30,i=this.reduz||this.edit?0:Math.sin(t*.15)*.025,r=[this.az.toFixed(3),this.el_.toFixed(3),e.toFixed(3)].join();r!==this.fitKey&&(this.fitKey=r,this.fit=this.enquadrar(this.az,this.el_,n,e));let{dist:o,alvo:a}=this.fit,l=Math.cos(this.el_),c=this.az+i;return{pos:Mt(a.x+Math.sin(c)*l*o,a.y+Math.sin(this.el_)*o,a.z+Math.cos(c)*l*o),alvo:a.clone(),fov:n}}laco(){if(this.raf=0,!this.el.isConnected){this.destruir();return}if(document.hidden||this.el.closest(".of-pausa"))this.tAnt=performance.now();else{let e=performance.now(),n=(e-this.tAnt)/1e3,i=Math.min(window.__ofT!=null?.3:.05,n);this.tAnt=e;let r=this.reduz?2:(e-this.t0)/1e3;(!this.reduz||this.sujo)&&this.quadro(r,this.reduz?0:i),this.sujo=!1,this.ms=this.ms==null?16:this.ms*.95+Math.min(n*1e3,100)*.05,this.ms>26&&this.ao&&!window.__ofComAO&&e-(this.tPr||0)>3e3?(this.tPr=e,this.ao=!1,this.ms=18):this.ms>30&&this.pr>1&&e-(this.tPr||0)>3e3&&(this.tPr=e,this.pr=Math.max(1,this.pr-.25),this.renderer.setPixelRatio(this.pr),this.redimensionar())}this.raf=requestAnimationFrame(this.laco)}emitir(t,e=10,n="#FDE68A"){let i=0;for(let r of this.faiscas)if(!(r.vida<1.1)&&(r.vida=0,r.s.visible=!0,r.s.material.color.set(n),r.s.position.copy(t),r.v=Mt((Math.random()-.5)*1.6,1+Math.random()*1.4,(Math.random()-.5)*1.6),++i>=e))break}quadro(t,e){let n=new Date().getHours(),i=window.__ofNoite!=null?!!window.__ofNoite:n<6||n>=19;i!==this.noite&&(this.noite=i,this.aplicarLuz());let r=this.boneco,o=this.dir.passo(window.__ofT!=null?window.__ofT:null,e),a=o.pose,l=o.s||{},c=l.fx||"",h=o.tl,f=o.pose.fxk||0,u=this.posF||(this.posF={x:o.pos[0],z:o.pos[1],y:o.pos[2],vx:0,vz:0,vy:0}),d=(x,A,L,k)=>{let Y=x-L,gt=Math.exp(-k*e),Ht=(A+k*Y)*e;return[L+(Y+Ht)*gt,(A-k*Ht)*gt]},m=u.x,v=u.z,g=u.y;if(e>0&&window.__ofT==null){[u.x,u.vx]=d(u.x,u.vx,o.pos[0],12),[u.z,u.vz]=d(u.z,u.vz,o.pos[1],12);let x=u.y+Hn(u.y,o.pos[2]);[u.y,u.vy]=d(u.y,u.vy,x,11)}else u.x=o.pos[0],u.z=o.pos[1],u.y=o.pos[2];if(e>0&&!a.andando&&(a.sent||0)<.3){let x=Math.hypot(u.x-m,u.z-v)/e,A=Math.abs(Hn(g,u.y))/e,L=te((x-.08)*5+(A-.5)*.9);if(this.passoK=vt(this.passoK||0,L,Math.min(1,e*8)),this.passoF=(this.passoF||0)+e*(2.2+x*4+A*.8)*this.passoK,this.passoK>.02){let k=Math.sin(this.passoF*nt),Y=this.passoK;a={...a,lL:[a.lL[0]+.28*Math.max(0,k)*Y,a.lL[1]+.55*Math.max(0,k)*Y],lR:[a.lR[0]+.28*Math.max(0,-k)*Y,a.lR[1]+.55*Math.max(0,-k)*Y],alt:a.alt-.012*Math.abs(k)*Y}}}this.decidirProps(l,o.k,h);let p=Object.keys(this.prop).find(x=>["R","LR","joga"].includes(this.prop[x].h)),M=Object.keys(this.prop).find(x=>["L","LR"].includes(this.prop[x].h)),T=this.mundo(r.head),y=Mt(Math.sin(u.y),0,Math.cos(u.y)),b=[],E=(x,A,L)=>{let k=A.clone().sub(T);Math.abs(Hn(u.y,Math.atan2(k.x,k.z)))<1.5&&k.length()>.5&&b.push({nome:x,pos:A,peso:L})};if(E("tv",Mt(3.2,1.5,.12),1),E("janela",Mt(-.6,1.7,1.8),.9),E("relogio",Mt(5.25,2.35,.05),.5),E("camera",this.cam.position.clone(),this.h==="triste"?.4:1.2),E("monitor",this.pto("mesa",6.8,1.14,.22),.6),this.cao.g.visible&&E("cao",this.mundo(this.cao.cab),1.3),a=this.vida.passo({...a,item:p?a.item||p:a.item},{T:t,dt:e,humor:this.h,reduz:this.reduz,cabeca:T,yawCorpo:u.y,alvos:b,foco:l.foco?l.foco(this):null,nariz:T.clone().addScaledVector(y,.15*r.esc).add(Mt(0,-.02,0)),ocupado:!!l.ocupado||a.taco>-.9,ocupadoL:!!M,facePropria:!!o.pose._fp,legsLivres:a.alt>.86&&Math.abs(a.lL[0])<.25&&Math.abs(a.lR[0])<.25&&!l.semPeso}),a=this.filtro.passo(a,e),r.root.position.set(u.x,0,u.z),r.root.rotation.y=u.y+(a.yawAdd||0),r.root.updateMatrixWorld(!0),a.taco>-.98&&this.h==="feliz")a={...a},this.aplicarTaco(a);else{let x=this.tacoPontas({taco:-1}),A=x.tip.clone().sub(x.butt).normalize(),L=this.itens.taco;L.visible=!0,L.position.copy(x.butt),L.quaternion.setFromUnitVectors(Mt(0,1,0),A)}let _=Object.keys(this.prop).find(x=>["R","LR","joga"].includes(this.prop[x].h)),S=Object.keys(this.prop).find(x=>this.prop[x].h==="L");["tecla","tacoV","tacoShot"].includes(a.item)||(a.item=_==="joga"?"":_||""),S&&(a.mL=Math.max(a.mL||0,.9)),r.aplicar(a,t,e),r.desenharRosto(this.vida.rosto(a,{T:t,dt:e,humor:this.h,facePropria:!!o.pose._fp}),t),r.blob.position.set(u.x,.004,u.z),r.blob.material.opacity=te(1-(a.dy||0)*2,.3,1),this.moverProps(a,h,f,e),this.itens.celular.visible&&this.desenharCel(t);let R=this.bolas,I=.81,F=this.h==="feliz"&&a.bolas||"ini";if(F==="ini")this.bB.position.set(R.R[0],I,R.R[1]),this.bA.position.set(R.Y[0],I,R.Y[1]),this.bA.visible=!0,this.bA.scale.setScalar(1);else if(F==="jogo"){let x=ie(h,Pi,Pi+.28),A=ie(h,Pi+.28,Pi+1),L=ie(h,Pi+1,Pi+1.15),k=A>0?[vt(R.C[0],R.fimB[0],Es(A)),vt(R.C[1],R.fimB[1],Es(A))]:[vt(R.R[0],R.C[0],x),vt(R.R[1],R.C[1],x)];this.bB.position.set(k[0],I,k[1]),this.bA.position.set(vt(R.Y[0],R.pk[0],Es(A)),I-.06*L,vt(R.Y[1],R.pk[1],Es(A))),this.bA.scale.setScalar(1-.6*L),this.bA.visible=L<1,this.bA.rotation.x+=e*20*(A>0&&A<1?1:0)}else if(F==="volta"){let x=ie(h,.3,1.9),A=ie(x,0,.18),L=ce(ie(x,.15,1));this.bB.position.set(vt(R.fimB[0],R.R[0],ce(ie(h,.2,1.5))),I,vt(R.fimB[1],R.R[1],ce(ie(h,.2,1.5)))),this.bA.visible=x>0,this.bA.scale.setScalar(vt(.4,1,A)),this.bA.position.set(vt(R.pk[0],R.Y[0],L),I-.06*(1-A),vt(R.pk[1],R.Y[1],L)),this.bA.rotation.x-=e*12*(L>0&&L<1?1:0)}else this.bB.position.set(R.fimB[0],I,R.fimB[1]),this.bA.visible=!1;if(this.cao.g.visible){let x,A,L=[Math.sin(u.y),Math.cos(u.y)];if(c==="caoVem"||c==="caoCarinho"){let Y=[u.x+L[0]*.55,u.z+L[1]*.55];x=[Y[0],Y[1],Yo(Y,[u.x,u.z])],A=c==="caoCarinho"?"carinho":"senta"}else{let Y={triste:"dorme",preocupado:"senta",tranquilo:"dorme",feliz:"senta",euforico:"pula"}[this.h];if(Y==="dorme")x=this.lugar("cachorro",[1.35,6.2,.8]),A="dorme";else{let gt=this.caoPerto||[u.x,u.z];x=[gt[0],gt[1],Yo(gt,[u.x,u.z])],A=Y}}let k=this.cao.mover(x,e,this.nav);if(this.cao.g.position.set(this.cao.pos[0],0,this.cao.pos[1]),this.cao.g.rotation.y=this.cao.yaw,this.cao.quadro(k?A:"anda",t),!this.caoT||t-this.caoT>4){this.caoT=t;let Y=[Math.cos(u.y),-Math.sin(u.y)],gt=[[.75,.35],[-.75,.35],[.8,-.3],[-.8,-.3]];for(let[Ht,K]of gt){let at=u.x+Y[0]*Ht+L[0]*K,mt=u.z+Y[1]*Ht+L[1]*K;if(this.nav.livre(at,mt)){this.caoPerto=[at,mt];break}}}}let U=c==="racao"&&h>1&&h<4.2;if(this.dec.aquario.outer.visible){this.racao.forEach((A,L)=>{let k=U?((h-1)*.55+L/14)%1:0;A.visible=U,A.position.set(.25+Ri(L)*.2,1.24-k*.42,6.65+Ri(L+5)*.35)});let x=this.peixeSobe=vt(this.peixeSobe||0,U?1:0,Math.min(1,e*1.5));this.peixes.forEach((A,L)=>{let k=t*(.5+L*.12)+L*1.7;A.position.set(.35+Math.sin(k*1.3)*.15*(1-x*.6),vt(.95+L*.06+Math.sin(k*2)*.03,1.15+Math.sin(k*4)*.02,x),6.83+Math.cos(k)*.32*(1-x*.5)),A.rotation.y=Math.atan2(-Math.sin(k)*.32,Math.cos(k*1.3)*.2)+nt}),this.bolhas.forEach((A,L)=>{let k=(t*.4+L/6)%1;A.position.set(.45+Math.sin(t*3+L)*.02,.8+k*.42,7.1-L*.02)})}let N=c==="arcade";if(this.dec.fliperama.outer.visible&&(this.joy.rotation.set(N?Math.sin(t*9)*.35:0,0,N?Math.sin(t*7.3)*.35:0),this.botoesArc.forEach((x,A)=>{x.position.y=1.07-(N&&Math.sin(t*13+A*2)>.6?.008:0)})),this.dec.cofre.outer.visible){let x=c==="cofre"||c==="moedaJoga"?a.porta:0;this.cofrePorta.rotation.y=-x,this.cofreBrilho.material.opacity=te(x/1.9)*.85}if(c==="porco"){let x=this.alvoPorco();h>1.15&&this.fxId!==l.t0&&(this.fxId=l.t0,this.emitir(x,8,"#FDE68A"));let A=h>1.15?Math.sin((h-1.15)*30)*Math.exp(-(h-1.15)*4):0;this.porco.scale.set(1+A*.12,1-A*.12,1+A*.12)}else this.porco.scale.setScalar(1);let O=c==="trofeu"||c==="trofeuPega"&&f>.92||c==="trofeuSolta"&&f<.85;if(this.dec.trofeu.outer.visible){let x=this.trofeuObj;if(O){let A=r.mL.clone().add(r.mR).multiplyScalar(.5).add(Mt(0,-.15,0));x.position.copy(this.trofeuPai.worldToLocal(A)),x.rotation.y=r.root.rotation.y-this.dec.trofeu.outer.rotation.y}else x.position.copy(this.trofeuBase),x.rotation.y=0}if(this.dec.dardos.visible){if(c==="dardo"&&f<.01&&h<.15&&(this.dardos.forEach(x=>{x.visible=!1}),this.voos=[]),c==="dardo"&&f%1>.4){let x=Math.floor(f),A=l.t0+":"+x;this.dardoKey!==A&&x<3&&(this.dardoKey=A,(this.voos||(this.voos=[])).push({i:x,de:r.mR.clone(),t:0}))}for(let x of this.voos||[]){x.t+=e;let A=te(x.t/.32),L=Mt(...this.dardosAlvo[x.i]),k=x.de.clone().lerp(L,A);k.y+=Math.sin(nt*A)*.18;let Y=this.dardos[x.i];Y.visible=!0,Y.position.copy(k),Y.rotation.set(0,0,-nt/2+(1-A)*.4)}}else this.dardos.forEach(x=>{x.visible=!1});let X=this.dec.globo.visible&&(this.h==="euforico"||c==="globo");for(let x of this.spots)x.intensity=X?9:0;this.dec.globo.visible&&(this.globo.rotation.y=t*.8,this.spots.forEach((x,A)=>{let L=t*.9+A*se/4;x.target.position.set(3.4+Math.cos(L)*2.2,0,5+Math.sin(L)*1.8)}));let W=performance.now();for(let x in this.pops){let A=(W-this.pops[x])/900,L=this.dec[x],k=L.outer||L;if(A>=1||!k.visible){k.scale.setScalar(1),delete this.pops[x];continue}let Y=1+Math.sin(A*nt*2.5)*Math.exp(-A*4)*.35;k.scale.setScalar(Math.max(.01,A<.25?Es(A/.25)*Y:Y)),(!this.popFx||this.popFx!==x+this.pops[x])&&(this.popFx=x+this.pops[x],this.emitir(this.mundo(k).add(Mt(0,.6,0)),14))}if(c==="novidade"&&this.fxId!=="n"+l.t0&&h>.2){this.fxId="n"+l.t0;let x=this.mundo(r.head);this.emitir(x.add(Mt(0,.35,0)),12,"#FACC15")}for(let x of this.faiscas){if(x.vida>=1.1)continue;x.vida+=e,x.v.y-=2.4*e,x.s.position.addScaledVector(x.v,e);let A=x.vida/1.1;x.s.material.opacity=1-A,x.s.scale.setScalar(.09*(1-A*.5)),x.s.material.rotation+=e*3,x.vida>=1.1&&(x.s.visible=!1)}let rt=this.mundo(r.head);if(this.nuvem.visible=a.nuvem>.5,this.nuvem.visible&&(this.nuvem.position.set(rt.x,rt.y+.75+Math.sin(t*1.6)*.03,rt.z),this.gotas.forEach((x,A)=>{let L=(t*1.8+A*.37)%1;x.position.y=-.12-L*.4,x.material.opacity=.9*(1-L)})),this.balaoS.visible=a.balao>.05,this.balaoS.visible){if(a.balaoT!==this.balaoT){this.balaoT=a.balaoT;let{g:x,t:A}=this.balao;x.clearRect(0,0,128,128),x.fillStyle="#FFF",x.strokeStyle="#CBD5E1",x.lineWidth=3,Ai(x,8,8,112,86,22),x.fill(),x.stroke(),x.beginPath(),x.moveTo(40,92),x.lineTo(34,120),x.lineTo(62,93),x.fill(),window.RI&&window.RI.desenhar(x,a.balaoT,64,51,60,a.balaoT==="chart-line-down"?"#DC2626":a.balaoT==="smiley-nervous"?"#F59E0B":"#7C3AED"),A.needsUpdate=!0}this.balaoS.position.set(rt.x+.25,rt.y+.6,rt.z),this.balaoS.scale.setScalar(.42*a.balao),this.balaoS.material.opacity=a.balao}if(a.solta&&a.solta!==this.ultSolta){this.ultSolta=a.solta;for(let x=0;x<4;x++){let A=new ye(this.notaGeo,this.notaMat);A.castShadow=!0,A.position.copy(r.mR),this.scene.add(A);let L=Mt(Math.sin(u.y),0,Math.cos(u.y));this.notas.push({m:A,v:Mt(L.x*.6+(Math.random()-.5)*1.2,2.2+Math.random()*1.2,L.z*.6+(Math.random()-.5)*1.2),rv:Mt(Math.random()*6,Math.random()*6,Math.random()*6),vida:0})}}a.solta||(this.ultSolta=0);for(let x=this.notas.length-1;x>=0;x--){let A=this.notas[x];A.vida+=e,A.m.position.y>.01?(A.v.y-=4.5*e,A.v.multiplyScalar(.985),A.m.position.addScaledVector(A.v,e),A.m.rotation.x+=A.rv.x*e,A.m.rotation.y+=A.rv.y*e,A.m.rotation.z+=A.rv.z*e,A.v.y<-.6&&(A.v.y=-.6+Math.sin(A.vida*9)*.25)):(A.m.position.y=.006,A.m.rotation.set(0,A.m.rotation.y,0)),A.vida>6&&(this.scene.remove(A.m),this.notas.splice(x,1))}let q=new Date,j=q.getSeconds()+q.getMilliseconds()/1e3,tt=q.getMinutes()+j/60,st=q.getHours()%12+tt/60;this.pS.rotation.z=-j/60*se,this.pM.rotation.z=-tt/60*se,this.pH.rotation.z=-st/12*se,(this.plantas||[]).forEach((x,A)=>{x.rotation.z=Math.sin(t*.8+A)*.03,x.rotation.x=Math.sin(t*.6+A*2)*.02}),this.vapor.forEach((x,A)=>{let L=(t*.35+A/4)%1;x.position.set(.38+Math.sin(t*2+A)*.02,1+L*.4,4.9),x.material.opacity=.35*Math.sin(nt*L),x.scale.setScalar(.06+L*.12)});let pt=a.item==="tecla";if(this.teclas.material.emissiveIntensity=pt?.4+.3*Math.abs(Math.sin(t*14)):.25,this.monLuz.intensity=1+.25*Math.sin(t*2.2)+(performance.now()-(this.ultimaAcao||0)<900?.8:0),this.dec.neon.visible){let x=Math.sin(t*7)>.97||Math.sin(t*23)>.995;this.neonM.opacity=x?.35:1,this.neonHalo.material.opacity=x?.1:.35}if(this.dec.arcoiris.visible&&(this.arcoHalo.material.opacity=.25+(this.dir.itemAtual==="arcoiris"?.25*Math.abs(Math.sin(t*4)):0)),this.decPorquinho.visible&&c!=="porco"&&(this.porco.position.y=.775+Math.abs(Math.sin(t*1.6))*.012),this.confete.visible){let x=this.dummy||(this.dummy=new Ce);this.confData.forEach((A,L)=>{let k=ze-(t*A.v+A.y0)%(ze+.3);x.position.set(A.x+Math.sin(t*1.5+A.sw)*.2,k,A.z+Math.cos(t*1.2+A.sw)*.15),x.rotation.set(t*A.rv+A.r,t*A.rv*.7,A.r),x.updateMatrix(),this.confete.setMatrixAt(L,x.matrix)}),this.confete.instanceMatrix.needsUpdate=!0}let bt=this.camModo==="tela";if((this.reduz||t-(this.tMon||-9)>(bt?1/30:1/8)||this.sujo)&&(this.tMon=t,this.desenharMonitor(t)),(this.reduz||t-(this.tTv||-9)>1/15)&&(this.tTv=t,this.desenharTV(t,this.h==="tranquilo"?"jogo":"news")),(this.reduz||t-(this.tCeu||-9)>1/8)&&(this.tCeu=t,this.desenharCeu(t)),this.dec.fliperama.outer.visible&&(this.reduz||t-(this.tArc||-9)>(N?1/20:1/6))&&(this.tArc=t,this.desenharArcade(t*(N?2:1))),this.edit)for(let x in this.moveis){let A=this.moveis[x],L=A.marca;if(L.visible=this.ativo(A),!L.visible)continue;let k=this.caixasDe(A)[0];L.position.set(k.c[0],.02+(A.piso?0:.005),k.c[1]),L.rotation.set(-nt/2,0,k.r),L.scale.set(k.h[0]*2+.08,k.h[1]*2+.08,1);let Y=this.arrasto&&this.arrasto.m===A;L.material.color.set(Y&&!this.arrasto.ok?"#EF4444":Y||this.sel===A?"#22C55E":"#60A5FA"),L.material.opacity=Y||this.sel===A?1:.55}let ft=this.alvoCamera(t);(!this.camAtual||this.reduz)&&(this.camAtual={pos:ft.pos.clone(),alvo:ft.alvo.clone(),fov:ft.fov});let dt=window.__ofT!=null?1:1-Math.exp(-e*4);this.camAtual.pos.lerp(ft.pos,dt),this.camAtual.alvo.lerp(ft.alvo,dt),this.camAtual.fov=vt(this.camAtual.fov,ft.fov,dt),this.cam.position.copy(this.camAtual.pos),this.cam.lookAt(this.camAtual.alvo),Math.abs(this.cam.fov-this.camAtual.fov)>.01&&(this.cam.fov=this.camAtual.fov,this.cam.updateProjectionMatrix()),this.ao&&this.composer?this.composer.render(e):this.renderer.render(this.scene,this.cam)}get prop(){if(!this._prop){this._prop={};for(let t of["controle","xicara","celular","moeda","nota","maco","dardo","aljava"])this._prop[t]={h:"casa",t0:-1,dur:0,de:null}}return this._prop}casaDe(t){let e=n=>new Fe().setFromAxisAngle(Mt(0,1,0),n);return t==="controle"?{pos:this.pto("sofa",2.72,.555,2.92),quat:e(this.giro(this.moveis.sofa)+.5)}:t==="xicara"?{pos:this.pto("cafe",.43,.92,5.06),quat:e(this.giro(this.moveis.cafe)-nt/2)}:null}bico(){return this.pto("cafe",.4,.99,4.9)}botaoCafe(){return this.pto("cafe",.36,1.3,4.97)}bolso(t="R"){return this.boneco.root.localToWorld(Mt(t==="R"?.17:-.17,.84,.05))}decidirProps(t,e,n){let i=t&&t.props;if(i)for(let r in i){let o=this.prop[r];if(!o)continue;let a=typeof i[r]=="function"?i[r](e,n):i[r];a&&a!==o.h&&(o.h=a,o.troca=!0)}}guardarProps(){for(let t in this.prop)this.prop[t].h!=="casa"&&(this.prop[t].h="casa",this.prop[t].troca=!0)}alvoProp(t,e,n,i,r){let o=this.boneco,a=o.root.rotation.y,l=new Fe().setFromAxisAngle(Mt(0,1,0),a),c=m=>{let v=m==="L"?o.L.hand:o.R.hand,g=new B,p=new Fe,M=new B;return v.matrixWorld.decompose(g,p,M),{pos:(m==="L"?o.mL:o.mR).clone(),quat:p}},h=(m,v,g)=>{let p=c(m),M=p.pos.add(Mt(...v).applyQuaternion(p.quat)),T=g?l.clone().multiply(g):p.quat;return{pos:M,quat:T,vis:!0}},f=m=>new Fe().setFromAxisAngle(Mt(1,0,0),m),u=m=>new Fe().setFromAxisAngle(Mt(0,1,0),m);if(e==="casa"){let m=this.casaDe(t);return m?{...m,vis:!0}:{pos:this.bolso(t==="maco"||t==="aljava"?"L":"R"),quat:l,vis:!1}}if(t==="controle"){let m=o.mL.clone().add(o.mR).multiplyScalar(.5).add(Mt(0,.01,0)),v=o.mL.distanceTo(o.mR),g=h("R",[0,0,.03],f(-.5)),p=e==="LR"?ce((v-.2)/.16):1;return{pos:m.lerp(g.pos,p),quat:l.clone().multiply(f(-.5)),vis:!0}}if(e==="joga"){let m=c("R"),v=te(r);return m.pos.y+=.02+4*v*(1-v)*.55,{pos:m.pos,quat:l.clone().multiply(f(v*6*nt)),vis:!0}}if(e==="cofrinho"){let m=c("R"),v=this.alvoPorco(),g=ie(i,.9,1.15);return{pos:m.pos.lerp(v,g),quat:l,vis:g<1}}let d=e==="L"?"L":"R";if(t==="xicara"){let m=c(d),v=Mt(d==="R"?-1:1,0,0).applyQuaternion(m.quat).setY(0);v.lengthSq()<1e-4&&v.set(Math.cos(a),0,-Math.sin(a)).multiplyScalar(d==="R"?-1:1),v.normalize();let g=new Fe().setFromAxisAngle(Mt(0,1,0),Math.atan2(v.z,-v.x)),p=this.mundo(o.head).sub(m.pos).setY(0),M=new B().crossVectors(Mt(0,1,0),p.lengthSq()>1e-4?p.normalize():Mt(Math.sin(a),0,Math.cos(a))),T=new Fe().setFromAxisAngle(M.normalize(),ce(n.gole||0)*1.75).multiply(g),y=Mt(.053,.05,0).applyQuaternion(T);return{pos:m.pos.clone().sub(y),quat:T,vis:!0}}return t==="celular"?h(d,[0,.035,.03],u(nt).multiply(f(-.45))):t==="dardo"?h(d,[0,-.01,.03],f(-nt/2+.25)):t==="aljava"?h(d,[0,-.01,.035],f(-nt/2+.3)):t==="nota"||t==="maco"?h(d,[0,-.02,.035],f(1.2)):h(d,[0,-.01,.025],null)}moverProps(t,e,n,i){let r=performance.now()/1e3;for(let a in this.prop){let l=this.prop[a],c=this.itens[a];if(!c)continue;let h=this.alvoProp(a,l.h,t,e,n);if(l.troca){l.troca=!1;let u={pos:c.position.clone(),quat:c.quaternion.clone(),vis:c.visible};c.visible||(u.pos=h.pos.clone(),u.quat=h.quat.clone()),l.de=u,l.t0=r,l.dur=te(.12+u.pos.distanceTo(h.pos)*.3,.12,.6)}h.vis||(l.de=null);let f=l.de&&l.dur?te((r-l.t0)/l.dur):1;if((i===0||!this.propsProntos)&&(f=1),f<1){let u=ce(f),d=l.de.pos.distanceTo(h.pos);c.position.copy(l.de.pos).lerp(h.pos,u),c.position.y+=Math.sin(nt*u)*Math.min(.15,d*.25),c.quaternion.copy(l.de.quat).slerp(h.quat,u),c.visible=l.de.vis||h.vis}else c.position.copy(h.pos),c.quaternion.copy(h.quat),c.visible=h.vis,l.de=null}this.propsProntos=!0;let o=(this.voos||[]).length+(this.prop.dardo.h==="R"?1:0);this.aljavaD.forEach((a,l)=>{a.visible=l<3-o})}desenharCel(t){if(t-(this.tCel||-9)<.2)return;this.tCel=t;let{g:e,t:n}=this.celTela;e.fillStyle="#0B1220",e.fillRect(0,0,64,128),e.fillStyle="#FB923C",e.font="bold 16px system-ui",e.fillText("\u20BF",6,20),e.strokeStyle="#4ADE80",e.lineWidth=3,e.beginPath();for(let i=0;i<10;i++){let r=4+i*6,o=100-i*6-Math.sin(i+t*3)*6;i?e.lineTo(r,o):e.moveTo(r,o)}e.stroke(),n.needsUpdate=!0}destruir(){cancelAnimationFrame(this.raf),this.ro&&this.ro.disconnect(),this.renderer.dispose()}desenharPiso({g:t}){t.fillStyle="#C8915B",t.fillRect(0,0,1024,1024);let e=["#C8915B","#BF8752","#D29C66","#C38C56","#B88050","#CD9760"],n=7,i=()=>(n=n*16807%2147483647,n/2147483647),r=1024/8;for(let o=0;o<8;o++){let a=-i()*400;for(;a<1024;){let l=260+i()*300;t.fillStyle=e[Math.floor(i()*e.length)],t.fillRect(a,o*r,l,r),t.strokeStyle="rgba(90,50,20,.10)",t.lineWidth=1.2;for(let c=0;c<7;c++){let h=o*r+8+i()*(r-16);t.beginPath(),t.moveTo(a,h),t.bezierCurveTo(a+l*.3,h+(i()-.5)*8,a+l*.6,h+(i()-.5)*8,a+l,h+(i()-.5)*4),t.stroke()}t.fillStyle="rgba(70,35,10,.45)",t.fillRect(a,o*r,2,r),a+=l}t.fillStyle="rgba(70,35,10,.5)",t.fillRect(0,o*r,1024,2.5)}}desenharTapete({g:t}){t.fillStyle="#C7D2FE",t.fillRect(0,0,512,512),t.strokeStyle="#A5B4FC",t.lineWidth=10,Ai(t,22,22,468,468,24),t.stroke(),t.setLineDash([16,12]),t.lineWidth=4,t.strokeStyle="#818CF8",Ai(t,44,44,424,424,18),t.stroke(),t.setLineDash([]);for(let e=0;e<2600;e++)t.fillStyle=`rgba(99,102,241,${Math.random()*.06})`,t.fillRect(Math.random()*512,Math.random()*512,2,2)}desenharQuadro({g:t}){let e=t.createLinearGradient(0,0,0,192);e.addColorStop(0,"#1E3A8A"),e.addColorStop(1,"#0F172A"),t.fillStyle=e,t.fillRect(0,0,256,192),t.strokeStyle="#22C55E",t.lineWidth=6,t.lineJoin="round",t.beginPath(),[[20,150],[60,130],[95,140],[130,95],[165,105],[200,60],[236,40]].forEach(([n,i],r)=>r?t.lineTo(n,i):t.moveTo(n,i)),t.stroke(),t.fillStyle="#FACC15",t.beginPath(),t.arc(236,40,8,0,se),t.fill(),t.fillStyle="rgba(255,255,255,.85)",t.font="bold 20px system-ui",t.fillText("LONGO PRAZO",20,34)}desenharCeu(t){let{g:e,t:n}=this.ceu,i=this.h,r=this.noite,o=i==="triste"||i==="preocupado",a=r?o?"#1E293B":"#0B1026":i==="triste"?"#64748B":i==="preocupado"?"#7C93B5":"#4FA3FF",l=r?o?"#334155":"#312E81":i==="triste"?"#94A3B8":i==="preocupado"?"#B6C4D8":"#BFE3FF",c=e.createLinearGradient(0,0,0,256);if(c.addColorStop(0,a),c.addColorStop(1,l),e.fillStyle=c,e.fillRect(0,0,256,256),r&&!o){for(let d=0;d<40;d++){let m=.5+.5*Math.sin(t*2+d*7);e.fillStyle=`rgba(255,255,255,${.3+.6*m})`,e.fillRect(d*97%256,d*53%150,2,2)}e.fillStyle="#FEF3C7",e.beginPath(),e.arc(190,52,20,0,se),e.fill(),e.fillStyle=a,e.beginPath(),e.arc(200,46,18,0,se),e.fill()}else if(!o){e.save(),e.translate(195,60),e.rotate(t*.2),e.fillStyle="#FDE047";for(let d=0;d<10;d++)e.rotate(se/10),e.fillRect(-2,26,4,12);e.restore(),e.fillStyle="#FDE047",e.beginPath(),e.arc(195,60,22,0,se),e.fill()}let h=(d,m,v,g)=>{e.fillStyle=g,e.beginPath(),e.ellipse(d,m,34*v,14*v,0,0,se),e.ellipse(d+18*v,m-10*v,22*v,16*v,0,0,se),e.ellipse(d-16*v,m-6*v,18*v,13*v,0,0,se),e.fill()},f=o?r?"#475569":"#CBD5E1":r?"rgba(148,163,184,.35)":"#FFFFFF";if(h(t*8%360-50,70,1,f),h((t*5+180)%360-50,110,.75,f),o&&h((t*6+90)%360-50,40,1.2,f),[[0,150,40],[36,120,30],[62,165,44],[100,105,34],[130,140,40],[166,90,30],[192,150,36],[224,125,40]].forEach(([d,m,v],g)=>{e.fillStyle=r?"#111827":o?"#475569":"#64748B",e.fillRect(d,m,v,256-m);for(let p=m+8;p<240;p+=14)for(let M=d+5;M<d+v-6;M+=10){let T=r?(M*7+p*13+g)%5<2:!1;e.fillStyle=T?"#FDE68A":r?"#1F2937":"rgba(255,255,255,.28)",e.fillRect(M,p,5,7)}}),e.fillStyle=r?"#0F172A":o?"#3F5F4F":"#4ADE80",e.fillRect(0,238,256,18),o){e.strokeStyle="rgba(224,242,254,.75)",e.lineWidth=2;for(let d=0;d<36;d++){let m=(d*37+t*40)%280-12,v=(d*71+t*420)%280-20;e.beginPath(),e.moveTo(m,v),e.lineTo(m-6,v+16),e.stroke()}}n.needsUpdate=!0}desenharTV(t,e){let{g:n,t:i}=this.tv,r=512,o=288;if(e==="jogo"){let a=n.createLinearGradient(0,0,0,o);a.addColorStop(0,"#1E1B4B"),a.addColorStop(1,"#4338CA"),n.fillStyle=a,n.fillRect(0,0,r,o);for(let d=0;d<30;d++)n.fillStyle="rgba(255,255,255,.7)",n.fillRect((d*83-t*10)%r+(d*83-t*10<0?r:0),d*37%160,2,2);let l=t*120%64;n.fillStyle="#16A34A",n.fillRect(0,232,r,56),n.fillStyle="#22C55E";for(let d=-l;d<r;d+=64)n.fillRect(d,232,32,8);let c=[[200,170],[380,140],[560,180]];n.fillStyle="#A16207",c.forEach(([d,m])=>{let v=((d-t*120)%600+600)%600-80;n.fillRect(v,m,80,14),n.fillStyle="#FACC15",n.beginPath(),n.arc(v+40,m-20+Math.sin(t*6)*3,8,0,se),n.fill(),n.fillStyle="#A16207"});let f=196-Math.abs(Math.sin(t*3.2))*70;n.fillStyle="#EF4444",n.fillRect(110,f,26,36),n.fillStyle="#1D4ED8",n.fillRect(110,f+22,26,14),n.fillStyle="#F1C19A",n.fillRect(114,f-14,18,16);let u=((420-t*160)%560+560)%560-40;n.fillStyle="#7C2D12",n.beginPath(),n.ellipse(u,220,18,12,0,nt,0),n.fill(),n.fillRect(u-18,220,36,12),n.fillStyle="#FFF",n.font="bold 20px monospace",n.fillText("MOEDAS \xD7 "+String(Math.floor(t*2)%1e3).padStart(3,"0"),16,30),n.fillText("1-1",450,30)}else{let a=this.h==="feliz"||this.h==="euforico",l=a?"#22C55E":"#EF4444";n.fillStyle="#0B1220",n.fillRect(0,0,r,o),n.strokeStyle="rgba(148,163,184,.15)",n.lineWidth=1;for(let m=60;m<230;m+=34)n.beginPath(),n.moveTo(0,m),n.lineTo(r,m),n.stroke();let c=t*.25%1.4,h=46;n.strokeStyle=l,n.lineWidth=4,n.lineJoin="round",n.beginPath();for(let m=0;m<=Math.min(h,Math.floor(h*c));m++){let v=20+m*(r-40)/h,p=(a?200-m*2.6:90+m*2.6)+Math.sin(m*1.7)*10+Math.sin(m*.6)*12;m?n.lineTo(v,p):n.moveTo(v,p)}n.stroke(),n.fillStyle="#DC2626",n.fillRect(0,0,150,40),n.fillStyle="#FFF",n.font="bold 22px system-ui",n.fillText("RADAR NEWS",12,28),Math.floor(t*1.5)%2&&(n.fillStyle="#FFF",n.beginPath(),n.arc(170,20,6,0,se),n.fill()),n.font="bold 14px system-ui",n.fillText("AO VIVO",182,25);let f={feliz:"CARTEIRA NO VERDE",euforico:"DIA HIST\xD3RICO NA CARTEIRA!",preocupado:"MERCADO NO VERMELHO",triste:"QUEDA FORTE HOJE"}[this.h]||"MERCADO HOJE";n.fillStyle="rgba(15,23,42,.92)",n.fillRect(0,224,r,30),n.fillStyle=l,n.fillRect(0,224,8,30),n.fillStyle="#FFF",n.font="bold 18px system-ui",n.fillText(f+(this.pctTxt?"  "+this.pctTxt:""),18,245),n.fillStyle="#1E293B",n.fillRect(0,254,r,34),n.font="bold 16px monospace";let u=this.fita(),d=-(t*60%Math.max(1,u.w));for(n.save(),n.beginPath(),n.rect(0,254,r,34),n.clip();d<r;){for(let m of u.itens)n.fillStyle="#CBD5E1",n.fillText(m.t,d,277),d+=n.measureText(m.t).width+8,n.fillStyle=m.v>=0?"#4ADE80":"#F87171",n.fillText(m.s,d,277),d+=n.measureText(m.s).width+26;if(!u.itens.length)break}n.restore()}i.needsUpdate=!0}fita(){let t=(this.d.ativos||[]).filter(n=>n.vd!=null),e=t.length?t.map(n=>({t:n.t,v:n.vd,s:(n.vd>=0?"\u25B2":"\u25BC")+Math.abs(n.vd).toFixed(2).replace(".",",")+"%"})):[{t:"IBOV",v:0,s:"\u2014"}];return{itens:e,w:e.length*160}}desenharArcade(t){let{g:e,t:n}=this.arcade;e.fillStyle="#0B0B1A",e.fillRect(0,0,128,128);for(let i=0;i<5;i++){let r=(i*30+t*40)%140-10;e.fillStyle=["#F43F5E","#22C55E","#FACC15","#38BDF8","#A855F7"][i],e.fillRect(r,20+i*14,10,8)}e.fillStyle="#22C55E",e.fillRect(56+Math.sin(t*3)*30,108,16,8),Math.floor(t*4)%2&&(e.fillStyle="#FFF",e.fillRect(64+Math.sin(t*3)*30,90-t*120%80,2,8)),e.fillStyle="#FDE047",e.font="bold 12px monospace",e.fillText("HI "+String(Math.floor(t*37)%99999).padStart(5,"0"),8,12),n.needsUpdate=!0}desenharMonitor(t){let{g:e,t:n}=this.mon,i=1024,r=448,o=this.d,a=this.h,l={triste:"#EF4444",preocupado:"#F97316",tranquilo:"#60A5FA",feliz:"#22C55E",euforico:"#FACC15"}[a],c=e.createLinearGradient(0,0,0,r);c.addColorStop(0,"#0B1220"),c.addColorStop(1,"#111A2E"),e.fillStyle=c,e.fillRect(0,0,i,r),e.fillStyle="#0F172A",e.fillRect(0,0,i,40),e.fillStyle=l,e.beginPath(),e.arc(22,20,7,0,se),e.fill(),e.fillStyle="#E2E8F0",e.font="bold 18px system-ui",e.fillText("RADAR DA CARTEIRA",38,27);let f=new Date().toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit",second:"2-digit"});e.font="bold 18px monospace",e.textAlign="right",e.fillText(f,i-16,27),o.fechado?(e.fillStyle="#64748B",e.font="bold 13px system-ui",e.fillText("BOLSA FECHADA",i-120,26)):o.sim&&(e.fillStyle="#F59E0B",e.font="bold 13px system-ui",e.fillText("SIMULA\xC7\xC3O",i-120,26)),e.textAlign="left",this.secao&&(e.fillStyle="#94A3B8",e.font="15px system-ui",window.RI&&window.RI.desenhar(e,"map-pin",268,21,15,"#94A3B8"),e.fillText(this.secao,278,26));let u=16,d=54;e.fillStyle="rgba(30,41,59,.65)",Ai(e,u,d,330,340,14),e.fill(),e.fillStyle="#94A3B8",e.font="bold 14px system-ui",e.fillText("SEU DIA",u+16,d+28);let m=o.pct,v=m==null||!isFinite(m)?"\u2014":(m>0?"+":"")+m.toFixed(2).replace(".",",")+"%";e.fillStyle=m>0?"#4ADE80":m<0?"#F87171":"#E2E8F0",e.font="bold 64px system-ui",e.fillText(v,u+14,d+98),e.fillStyle="#CBD5E1",e.font="16px system-ui",e.fillText(this.titulo||"",u+16,d+126);let g=u+16,p=d+150,M=298,T=160;e.strokeStyle="rgba(148,163,184,.15)",e.lineWidth=1;for(let x=0;x<=4;x++)e.beginPath(),e.moveTo(g,p+x*T/4),e.lineTo(g+M,p+x*T/4),e.stroke();let y=this.hist.length?this.hist:[{v:m||0}],b=y.map(x=>x.v).concat([0]),E=Math.min(...b),P=Math.max(...b);if(P-E<.4){let x=(P+E)/2;E=x-.2,P=x+.2}let _=x=>p+T-(x-E)/(P-E)*T;e.setLineDash([4,4]),e.strokeStyle="rgba(148,163,184,.4)",e.beginPath(),e.moveTo(g,_(0)),e.lineTo(g+M,_(0)),e.stroke(),e.setLineDash([]);let S=y.length,R=y.map((x,A)=>[g+(S===1?M:A/(S-1)*M),_(x.v)]);S===1&&R.unshift([g,R[0][1]]);let I=(m||0)>=0?"#22C55E":"#EF4444",F=e.createLinearGradient(0,p,0,p+T);F.addColorStop(0,I+"55"),F.addColorStop(1,I+"00"),e.beginPath(),R.forEach(([x,A],L)=>L?e.lineTo(x,A):e.moveTo(x,A)),e.lineTo(R[R.length-1][0],p+T),e.lineTo(R[0][0],p+T),e.closePath(),e.fillStyle=F,e.fill(),e.strokeStyle=I,e.lineWidth=3,e.lineJoin="round",e.beginPath(),R.forEach(([x,A],L)=>L?e.lineTo(x,A):e.moveTo(x,A)),e.stroke();let U=R[R.length-1],N=t*1.5%1;e.fillStyle=I,e.beginPath(),e.arc(U[0],U[1],5,0,se),e.fill(),e.strokeStyle=I,e.globalAlpha=1-N,e.lineWidth=2,e.beginPath(),e.arc(U[0],U[1],5+N*14,0,se),e.stroke(),e.globalAlpha=1;let O=362,X=54,W=330;e.fillStyle="rgba(30,41,59,.65)",Ai(e,O,X,W,340,14),e.fill(),e.fillStyle="#94A3B8",e.font="bold 14px system-ui",e.fillText("SEUS ATIVOS \xB7 AO VIVO",O+16,X+28);let rt=(o.ativos||[]).slice(0,8);rt.length||(e.fillStyle="#64748B",e.font="16px system-ui",e.fillText("Adicione ativos para",O+16,X+80),e.fillText("acompanhar aqui.",O+16,X+102));let q=performance.now();rt.forEach((x,A)=>{let L=X+48+A*36,k=this.flash[x.t];if(k&&q-k.t<2500){let gt=1-(q-k.t)/2500;e.fillStyle=(k.up?"rgba(34,197,94,":"rgba(239,68,68,")+(.35*gt).toFixed(3)+")",Ai(e,O+8,L,W-16,32,8),e.fill()}e.fillStyle="#E2E8F0",e.font="bold 17px monospace",e.fillText(x.t,O+16,L+22),e.fillStyle="#94A3B8",e.font="15px monospace",e.textAlign="right",x.preco!=null&&e.fillText((x.moeda==="USD"?"US$ ":"R$ ")+x.preco.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),O+214,L+22);let Y=x.vd;e.fillStyle=Y==null?"#64748B":Y>=0?"#4ADE80":"#F87171",e.font="bold 16px monospace",e.fillText(Y==null?"\u2014":(Y>=0?"\u25B2 ":"\u25BC ")+Math.abs(Y).toFixed(2).replace(".",",")+"%",O+W-16,L+22),e.textAlign="left"});let j=708,tt=54,st=300;e.fillStyle="rgba(30,41,59,.65)",Ai(e,j,tt,st,340,14),e.fill(),e.fillStyle="#94A3B8",e.font="bold 14px system-ui",e.fillText("O QUE VOC\xCA EST\xC1 FAZENDO",j+16,tt+28);let pt=this.feed.slice(-8);pt.forEach((x,A)=>{let L=tt+58+A*34,k=A===pt.length-1,Y=q-x.ms,gt=x.txt;k&&Y<700&&(gt=gt.slice(0,Math.max(1,Math.floor(gt.length*Y/700)))),e.fillStyle="#64748B",e.font="13px monospace",e.fillText(x.hora,j+16,L),e.fillStyle=k?l:"#CBD5E1",e.font=(k?"bold ":"")+"15px system-ui",e.fillText("\u203A "+gt+(k&&Math.floor(t*2.5)%2?" \u258D":""),j+66,L)}),pt.length||(e.fillStyle="#64748B",e.font="15px system-ui",e.fillText("\u203A aguardando voc\xEA\u2026"+(Math.floor(t*2)%2?" \u258D":""),j+16,tt+60)),e.fillStyle="#020617",e.fillRect(0,408,i,40),e.font="bold 17px monospace";let bt=this.fita(),ft=-(t*70%4e3);e.save(),e.beginPath(),e.rect(0,408,i,40),e.clip();let dt=0;for(;ft<i&&dt++<60;)for(let x of bt.itens)e.fillStyle="#CBD5E1",e.fillText(x.t,ft,434),ft+=e.measureText(x.t).width+8,e.fillStyle=x.v>=0?"#4ADE80":"#F87171",e.fillText(x.s,ft,434),ft+=e.measureText(x.s).width+30;e.restore(),n.needsUpdate=!0}log(t){let e=new Date().toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}),n=this.feed[this.feed.length-1];n&&n.txt===t&&performance.now()-n.ms<1500||(this.feed.push({txt:t.length>26?t.slice(0,25)+"\u2026":t,hora:e,ms:performance.now()}),this.feed.length>30&&this.feed.shift(),this.ultimaAcao=performance.now(),this.sujo=!0)}redimensionar(){let t=this.el.clientWidth||600,e=Math.round(te(t<640?t*.82:t*.6,300,660));this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height=e+"px",this.composer&&(this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(t,e)),this.cam.aspect=t/e,this.cam.updateProjectionMatrix(),this.sujo=!0}enquadrar(t,e,n,i){let r=new Ke(n,i,.1,100),o=Math.cos(e),a=Mt(Math.sin(t)*o,Math.sin(e),Math.cos(t)*o),l=[];for(let d of[-.25,Ge+.1])for(let m of[-.3,ze+.05])for(let v of[-.25,Ve+.1])l.push(Mt(d,m,v));let c=Mt(Ge/2,.9,Ve/2),h=18,f=i<1?.98:.95,u=i<1?.92:.93;for(let d=0;d<4;d++){let m=4,v=60;for(let S=0;S<22;S++){let R=(m+v)/2;r.position.copy(c).addScaledVector(a,R),r.lookAt(c),r.updateMatrixWorld(),r.updateProjectionMatrix();let I=!0;for(let F of l){let U=F.clone().project(r);if(Math.abs(U.x)>f||Math.abs(U.y)>u){I=!1;break}}I?v=R:m=R}h=v,r.position.copy(c).addScaledVector(a,h),r.lookAt(c),r.updateMatrixWorld();let g=9,p=-9,M=9,T=-9;for(let S of l){let R=S.clone().project(r);g=Math.min(g,R.x),p=Math.max(p,R.x),M=Math.min(M,R.y),T=Math.max(T,R.y)}let y=(g+p)/2,b=(M+T)/2,E=Math.tan(n*nt/360)*h,P=new B,_=new B;r.matrixWorld.extractBasis(P,_,new B),c.addScaledVector(P,y*E*i).addScaledVector(_,b*E)}return{dist:h,alvo:c}}},mu=class{constructor(t){this.e=t,this.t=0,this.fila=[],this.ant=null,this.entrar=!0,this.ciclo=0,this.novos=[],this.rodada=0,this.itemAtual=""}humor(t){this.h=t,this.entrar=!0}replanejar(){this.entrar=!0}novidade(t){Xo[t]&&!this.novos.includes(t)&&(this.novos.push(t),this.e.reduz||(this.entrar=!0))}rotina(){return(Gf[this.h]||Gf.tranquilo)(this.L,this.e,this.ciclo)}compilar(t,e,n,i={}){let r=this.e.nav,o=e.slice(),a=n,l=[];for(let c of t)if(c.tipo==="andar"){let h=[[o[0],o[1]]];for(let g of c.destinos)h.push(...r.caminho(h[h.length-1],g));let f=[],u=0;for(let g=1;g<h.length;g++){let p=Math.hypot(h[g][0]-h[g-1][0],h[g][1]-h[g-1][1]);p>.001&&(f.push({a:h[g-1],b:h[g],d0:u,L:p,yaw:Yo(h[g-1],h[g])}),u+=p)}if(!f.length||u<.06)continue;let d=Hn(o[2],f[0].yaw);if(Math.abs(d)>.7){let g=.25+Math.abs(d)/3.2,p=[o[0],o[1],o[2]+d];l.push({tipo:"acao",dur:g,pose:(M,T,y)=>Xt(y,{nod:.05}),t0:a,de:o.slice(),ate:p,item:c.item,taco:c.taco,bolas:c.bolas,...i}),a+=g,o=p}let m=u/c.vel,v=h[h.length-1];l.push({...c,...i,t0:a,dur:m,segs:f,dist:u,de:o.slice()}),o=[v[0],v[1],o[2]+Hn(o[2],f[f.length-1].yaw)],a+=m}else{let h=c.ate?c.ate.slice():o.slice();h.length<3&&(h[2]=o[2]),h[2]=o[2]+Hn(o[2],h[2]),l.push({...c,...i,t0:a,de:o.slice(),ate:h}),o=h,a+=c.dur}return{out:l,pos:o,t:a}}fimFila(){let t=this.fila[this.fila.length-1];return t?{t:t.t0+t.dur,pos:t.tipo==="andar"?(()=>{let e=t.segs[t.segs.length-1];return[e.b[0],e.b[1],t.de[2]+Hn(t.de[2],e.yaw)]})():t.ate}:null}disponiveis(){let t=this.e,e=[];for(let n in Xo){let i=t.dec[n];i&&(i.outer?i.outer.visible:i.visible)&&Xo[n].humores.includes(this.h)&&e.push(n)}return e}visita(t,e,n){let i=this.e,r=Xo[t],o=r.lugar(i),a=i.nav.perto(o[0],o[1]),l=[a[0],a[1],o[2]],c=[kn(1.15,[l]),Ft(.5,(h,f,u)=>Xt(u),{ate:l})];return e&&c.push(...b_(r.ic+":f")),c.push(...r.passos(i)),c.push(kn(1.15,[n.aprox])),n.sentado||n.entrada.length?c.push(...n.entrada):c.push(Ft(.5,(h,f,u)=>Xt(u),{ate:n.inicio})),c}proximoNovo(){for(;this.novos.length;){let t=this.novos.shift(),e=this.e.dec[t];if(Xo[t]&&e&&(e.outer?e.outer.visible:e.visible))return t}return null}encher(){let t=this.e;if(this.entrar){this.entrar=!1,this.L=t.lugares();let c=this.rotina();this.padrao=c.padrao;let h=t.posF?[t.posF.x,t.posF.z,t.posF.y]:c.inicio.slice(),f=this.ultimaPose?{...this.ultimaPose}:null,u=this.proximoNovo(),d=f||Xt(0);this.fila=[],this.ant=null;let m=f&&f.sent>.4,v=Math.hypot(h[0]-c.inicio[0],h[1]-c.inicio[1])<.08;if(!u&&(!f||m&&v&&c.sentado)){this.ciclo=0,this.aprox=c.aprox,this.anexar(this.compilar(c.passos,c.inicio,this.t));return}let g=[];if(m){let p=this.aprox||h;g.push(Ft(1.2,(M,T,y)=>{let b=Ts(d,Xt(y),ce(M));return b.lean+=.4*Math.sin(nt*M),b},{ate:t.nav.perto(p[0],p[1]).concat([h[2]])}))}else g.push(Ft(.35,(p,M,T)=>Ts(d,Xt(T),ce(p))));t.guardarProps(),u?(g.push(...this.visita(u,!0,c)),this.itemNovo=u):(g.push(kn(1.15,[c.aprox])),c.entrada.length?g.push(...c.entrada):g.push(Ft(.5,(p,M,T)=>Xt(T),{ate:c.inicio}))),this.aprox=c.aprox,this.anexar(this.compilar(g,h,this.t,u?{item_:u}:{}));return}let e=this.fimFila(),n=e?e.pos:this.rotina().inicio,i=e?e.t:this.t,r=this.rotina();this.aprox=r.aprox,this.padrao=r.padrao;let o=this.disponiveis(),a=this.proximoNovo(),l=!!a;if(!a&&this.ciclo>0&&o.length&&!this.e.reduz&&this.ultimoBloco!=="item"&&(a=o[this.rodada%o.length],this.rodada++),a){let c=[];c.push(...r.saida),c.push(...this.visita(a,l,r)),this.anexar(this.compilar(c,n,i,{item_:a})),this.ultimoBloco="item";return}this.ultimoBloco="rotina",this.anexar(this.compilar(r.passos,r.inicio,i)),this.ciclo++}anexar(t){this.fila.push(...t.out)}avaliarPasso(t,e,n){let i,r;if(t.tipo==="andar"){let a=te(e/t.dur)*t.dist,l=t.segs.length-1;for(let m=0;m<t.segs.length;m++)if(a<=t.segs[m].d0+t.segs[m].L){l=m;break}let c=t.segs[l],h=te((a-c.d0)/c.L),f=c.yaw,u=t.segs[l+1],d=t.segs[l-1];u&&c.L*(1-h)<.35&&(f=qo(c.yaw,u.yaw,.5*(1-c.L*(1-h)/.35))),d&&c.L*h<.35&&(f=qo(d.yaw,c.yaw,.5+.5*(c.L*h/.35))),r=[vt(c.a[0],c.b[0],h),vt(c.a[1],c.b[1],h),t.de[2]+Hn(t.de[2],f)],i=__(a,t.estilo,n,this.e.boneco.esc),t.pensativo&&(i.aR=[1.25,-.25,2.25],i.aL=[.6,-.35,1.5],i.nod+=.18,i.boca="foco",i.sob="tenso"),t.item==="xicara"&&(i.aR=[.6,-.25,1.75]),t.taco!=null&&(i.taco=t.taco),i.item=t.item||"",t.bolas&&(i.bolas=t.bolas)}else{let a=te(e/t.dur),l=ce(a);r=[vt(t.de[0],t.ate[0],l),vt(t.de[1],t.ate[1],l),vt(t.de[2],t.ate[2],l)],i=t.pose(a,e,n),t.item&&!i.item&&(i.item=t.item),t.bolas&&!i.bolas&&(i.bolas=t.bolas),t.taco!=null&&i.taco===Gn.taco&&(i.taco=t.taco)}i._fp=["aberta","o","sorriso","triste"].includes(i.boca)||i.olhos==="F"||i.olhos==="Z"||i.sob==="triste";let o=this.padrao||{};for(let a in o)(!(a in i)||i[a]===Gn[a])&&(i[a]=o[a]);return{pose:i,pos:r}}passo(t,e){let n=this.e;t!=null?(this.tForcado==null&&(this.tForcado=0),this.t=t):this.t+=n.reduz?0:e,this.entrar&&this.encher();let i=0;for(;(!this.fila.length||this.fimFila().t<this.t+2)&&i++<40;)this.encher();for(;this.fila.length>1&&this.t>=this.fila[0].t0+this.fila[0].dur;)this.ant=this.fila.shift(),n.decidirProps(this.ant,1,this.ant.dur);let r=this.fila[0];if(!r)return{pose:Xt(this.t),pos:[4.5,3.5,0],s:null,tl:0};let o=this.t,a=Math.min(o-r.t0,r.dur),l=this.avaliarPasso(r,a,o),c=.45;if(this.ant&&a<c){let h=this.avaliarPasso(this.ant,this.ant.dur,o),f=ce(a/c);l.pose=Ts(h.pose,l.pose,f),l.pos=[vt(h.pos[0],l.pos[0],f),vt(h.pos[1],l.pos[1],f),h.pos[2]+Hn(h.pos[2],l.pos[2])*f]}return this.itemAtual=r.item_||"",this.ultimaPose=l.pose,l.s=r,l.tl=a,l.k=r.dur?te(a/r.dur):1,l}};function cS(s,t){let e=new Fo({antialias:!0,alpha:!0,powerPreference:"low-power"});e.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),e.outputColorSpace=on,e.toneMapping=Ji,e.shadowMap.enabled=!0,e.shadowMap.type=Yi,s.innerHTML="",s.appendChild(e.domElement);let n=new zi,i=new _s(e);n.environment=i.fromScene(new Uo,.04).texture,n.environmentIntensity=.38,n.add(new cr("#FFFFFF","#C9B79C",1));let r=new Ei("#FFF1DE",2);r.position.set(1.6,3.2,2.4),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-1,right:1,top:2.2,bottom:-.2,near:.5,far:8}),n.add(r);let o=new Ei("#C7D7FF",.7);o.position.set(-2,1.5,-1.5),n.add(o);let a=new ye(new hs(.75,48),new ro({opacity:.22}));a.rotation.x=-nt/2,a.receiveShadow=!0,n.add(a);let l=new mc(t.cor,t.icone,t.boneco,t.acessorio);n.add(l.root),l.root.traverse(S=>{S.isMesh&&(S.castShadow=!0)});let c=new Ke(24,3/4,.1,20),h=new gc,f=new xc,u=-.35,d=!1,m=0,v=0,g=0,p=!1,M=performance.now(),T=M,y=()=>{let S=s.clientWidth||200,R=s.clientHeight||260;e.setSize(S,R,!1),c.aspect=S/R,c.updateProjectionMatrix()};y();let b=new ResizeObserver(y);b.observe(s);let E=e.domElement;E.style.touchAction="pan-y",E.addEventListener("pointerdown",S=>{d=!0,m=S.clientX;try{E.setPointerCapture(S.pointerId)}catch{}v=performance.now()}),E.addEventListener("pointermove",S=>{d&&(u+=(S.clientX-m)*.012,m=S.clientX,v=performance.now())}),E.addEventListener("pointerup",()=>{d=!1}),E.addEventListener("pointercancel",()=>{d=!1});function P(){if(g=0,p)return;if(!s.isConnected){_();return}let S=performance.now(),R=window.__ofVitT!=null?window.__ofVitT:(S-M)/1e3,I=Math.min(.05,(S-T)/1e3);T=S,!d&&S-v>2500&&(u+=I*.35);let F=R%12,U;if(F<3.5)U=Xt(R,{olhar:[Math.sin(R*.7)*.6,0]});else if(F<6){let W=Wt(F,3.5,6,.4);U=Xt(R,{aR:[vt(0,2.6,W),vt(.12,.5,W),vt(.2,.9+.35*Math.sin(R*9),W)],boca:W>.5?"sorriso":"leve",olhos:W>.5?"F":"A",boch:.4*W,nod:-.05*W,roll:.06*W})}else if(F<8.5){let W=Wt(F,6,8.5,.4);U=Xt(R,{aL:[vt(0,1.2,W),vt(.12,-.2,W),vt(.2,1.4,W)],mL:W,boca:"sorriso",boch:.3,turn:.12*W,nod:-.04*W})}else U=Xt(R,{boca:"sorriso",olhos:"A",boch:.25,turn:.15*Math.sin(R*1.2)});l.root.rotation.y=u;let N=l.head.getWorldPosition(new B);U=f.passo(U,{T:R,dt:I,humor:"feliz",cabeca:N,yawCorpo:u,alvos:[{nome:"camera",pos:c.position.clone(),peso:2},{nome:"lado",pos:Mt(Math.sin(u+1)*3,1.4,Math.cos(u+1)*3),peso:1}],legsLivres:!0,nariz:N.clone().add(Mt(Math.sin(u)*.15,-.02,Math.cos(u)*.15))}),U=h.passo(U,I),l.aplicar(U,R,I),l.desenharRosto(f.rosto(U,{T:R,dt:I,humor:"feliz",facePropria:F>=3.5&&F<6}),R);let O=l.esc,X=window.__ofVitCam;X?(c.position.set(0,X[0],X[1]),c.lookAt(0,X[2],0)):(c.position.set(0,1*O,4.2*(.6+.4*O)),c.lookAt(0,.9*O,0)),e.render(n,c),g=requestAnimationFrame(P)}function _(){p||(p=!0,g&&cancelAnimationFrame(g),b.disconnect(),n.traverse(S=>{S.geometry&&S.geometry.dispose()}),e.dispose(),e.domElement.parentNode&&e.domElement.remove())}return g=requestAnimationFrame(P),{atualizar(S){l.setAparencia(S.boneco,S.acessorio),l.setCor(S.cor),S.icone!==t.icone&&l.setIcone(S.icone),t=S},destruir:_}}export{lS as criar,cS as vitrine};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
