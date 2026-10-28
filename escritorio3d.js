var _u=0,Sc=1,vu=2;var Di=1,yu=2,Ks=3,Hn=0,nn=1,gn=2,ei=0,fi=1,Ni=2,Ec=3,wc=4,Mu=5;var es=100,bu=101,Su=102,Eu=103,wu=104,Tu=200,Au=201,Ru=202,Cu=203,Tc=204,Ac=205,Pu=206,Iu=207,Lu=208,Fu=209,Du=210,Nu=211,Uu=212,Bu=213,Ou=214,Yo=0,Zo=1,Jo=2,Fs=3,$o=4,Ko=5,jo=6,Qo=7,Ra=0,zu=1,ku=2,Gn=0,Rc=1,Cc=2,Pc=3,js=4,Ic=5,Lc=6,Fc=7;var Dc=300,Ui=301,ns=302,Ca=303,Pa=304,$r=306,Ds=1e3,Jn=1001,ta=1002,$e=1003,Hu=1004;var Kr=1005;var en=1006,Ia=1007;var Bi=1008;var xn=1009,Nc=1010,Uc=1011,Qs=1012,La=1013,Vn=1014,Cn=1015,Wn=1016,Fa=1017,Da=1018,tr=1020,Bc=35902,Oc=35899,zc=1021,kc=1022,Pn=1023,$n=1026,Oi=1027,Na=1028,Ua=1029,zi=1030,Ba=1031;var Oa=1033,jr=33776,Qr=33777,to=33778,eo=33779,za=35840,ka=35841,Ha=35842,Ga=35843,Va=36196,Wa=37492,Xa=37496,qa=37488,Ya=37489,no=37490,Za=37491,Ja=37808,$a=37809,Ka=37810,ja=37811,Qa=37812,tl=37813,el=37814,nl=37815,il=37816,sl=37817,rl=37818,ol=37819,al=37820,ll=37821,cl=36492,hl=36494,ul=36495,dl=36283,fl=36284,io=36285,pl=36286;var yr=2300,ea=2301,Xo=2302,cc=2303,hc=2400,uc=2401,dc=2402;var Gu=3200;var so=0,Vu=1,pi="",tn="srgb",Mr="srgb-linear",br="linear",we="srgb";var qo=7680;var Wu=519,Xu=512,qu=513,Yu=514,ml=515,Zu=516,Ju=517,gl=518,$u=519,Hc=35044;var Gc="300 es",zn=2e3,Ns=2001;function nf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function sf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Sr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ku(){let s=Sr("canvas");return s.style.display="block",s}var zh={},Us=null;function Er(...s){let t="THREE."+s.shift();Us?Us("log",t,...s):console.log(t,...s)}function ju(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ie(...s){s=ju(s);let t="THREE."+s.shift();if(Us)Us("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function ne(...s){s=ju(s);let t="THREE."+s.shift();if(Us)Us("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Yi(...s){let t=s.join(" ");t in zh||(zh[t]=!0,ie(...s))}function Qu(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var td={[Yo]:Zo,[Jo]:jo,[$o]:Qo,[Fs]:Ko,[Zo]:Yo,[jo]:Jo,[Qo]:$o,[Ko]:Fs},Kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ul=Math.PI/180,wr=180/Math.PI;function hi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[s&255]+rn[s>>8&255]+rn[s>>16&255]+rn[s>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function pe(s,t,e){return Math.max(t,Math.min(e,s))}function rf(s,t){return(s%t+t)%t}function Bl(s,t,e){return(1-e)*s+e*t}function Zn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ae(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Zc=class Zc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Zc.prototype.isVector2=!0;var _t=Zc,Ve=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],f=r[o+1],m=r[o+2],v=r[o+3];if(d!==v||l!==u||c!==f||h!==m){let g=l*u+c*f+h*m+d*v;g<0&&(u=-u,f=-f,m=-m,v=-v,g=-g);let p=1-a;if(g<.9995){let y=Math.acos(g),b=Math.sin(y);p=Math.sin(p*y)/b,a=Math.sin(a*y)/b,l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+v*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+v*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),f=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Jc=class Jc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ol.copy(this).projectOnVector(t),this.sub(Ol)}reflect(t){return this.sub(Ol.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Jc.prototype.isVector3=!0;var B=Jc,Ol=new B,kh=new Ve,$c=class $c{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],v=i[0],g=i[3],p=i[6],y=i[1],b=i[4],M=i[7],w=i[2],S=i[5],P=i[8];return r[0]=o*v+a*y+l*w,r[3]=o*g+a*b+l*S,r[6]=o*p+a*M+l*P,r[1]=c*v+h*y+d*w,r[4]=c*g+h*b+d*S,r[7]=c*p+h*M+d*P,r[2]=u*v+f*y+m*w,r[5]=u*g+f*b+m*S,r[8]=u*p+f*M+m*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,m=e*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return t[0]=d*v,t[1]=(i*c-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=u*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Yi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zl.makeScale(t,e)),this}rotate(t){return Yi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zl.makeRotation(-t)),this}translate(t,e){return Yi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};$c.prototype.isMatrix3=!0;var ae=$c,zl=new ae,Hh=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gh=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function of(){let s={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===we&&(i.r=ui(i.r),i.g=ui(i.g),i.b=ui(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===we&&(i.r=Ls(i.r),i.g=Ls(i.g),i.b=Ls(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===pi?br:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Yi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Yi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Mr]:{primaries:t,whitePoint:n,transfer:br,toXYZ:Hh,fromXYZ:Gh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:t,whitePoint:n,transfer:we,toXYZ:Hh,fromXYZ:Gh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),s}var xe=of();function ui(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ls(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ps,na=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ps===void 0&&(ps=Sr("canvas")),ps.width=t.width,ps.height=t.height;let i=ps.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ps}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Sr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ui(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ui(e[n]/255)*255):e[n]=ui(e[n]);return{data:e,width:t.width,height:t.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},af=0,Bs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=hi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(kl(i[o].image)):r.push(kl(i[o]))}else r=kl(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function kl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?na.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}var lf=0,Hl=new B,dn=class s extends Kn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Jn,i=Jn,r=en,o=Bi,a=Pn,l=xn,c=s.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=hi(),this.name="",this.source=new Bs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hl).x}get height(){return this.source.getSize(Hl).y}get depth(){return this.source.getSize(Hl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ie(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){ie(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ds:t.x=t.x-Math.floor(t.x);break;case Jn:t.x=t.x<0?0:1;break;case ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ds:t.y=t.y-Math.floor(t.y);break;case Jn:t.y=t.y<0?0:1;break;case ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Dc;dn.DEFAULT_ANISOTROPY=1;var Kc=class Kc{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,M=(f+1)/2,w=(p+1)/2,S=(h+u)/4,P=(d+v)/4,x=(m+g)/4;return b>M&&b>w?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=S/n,r=P/n):M>w?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=S/i,r=x/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=P/r,i=x/r),this.set(n,i,r,e),this}let y=Math.sqrt((g-m)*(g-m)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(d-v)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this.w=pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this.w=pe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kc.prototype.isVector4=!0;var De=Kc,ia=class extends Kn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new dn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Bs(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends ia{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Tr=class extends dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var sa=class extends dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Aa=class Aa{constructor(t,e,n,i,r,o,a,l,c,h,d,u,f,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,u,f,m,v,g)}set(t,e,n,i,r,o,a,l,c,h,d,u,f,m,v,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Aa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/ms.setFromMatrixColumn(t,0).length(),r=1/ms.setFromMatrixColumn(t,1).length(),o=1/ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,m=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,v=c*d;e[0]=u+v*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,v=c*d;e[0]=u-v*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,m=a*h,v=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,m=a*l,v=a*c;e[0]=l*h,e[4]=v-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-v*d}else if(t.order==="XZY"){let u=o*l,f=o*c,m=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cf,t,hf)}lookAt(t,e,n){let i=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Mi.crossVectors(n,_n),Mi.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Mi.crossVectors(n,_n)),Mi.normalize(),yo.crossVectors(_n,Mi),i[0]=Mi.x,i[4]=yo.x,i[8]=_n.x,i[1]=Mi.y,i[5]=yo.y,i[9]=_n.y,i[2]=Mi.z,i[6]=yo.z,i[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],y=n[3],b=n[7],M=n[11],w=n[15],S=i[0],P=i[4],x=i[8],E=i[12],R=i[1],I=i[5],N=i[9],U=i[13],D=i[2],O=i[6],X=i[10],Y=i[14],it=i[3],$=i[7],et=i[11],V=i[15];return r[0]=o*S+a*R+l*D+c*it,r[4]=o*P+a*I+l*O+c*$,r[8]=o*x+a*N+l*X+c*et,r[12]=o*E+a*U+l*Y+c*V,r[1]=h*S+d*R+u*D+f*it,r[5]=h*P+d*I+u*O+f*$,r[9]=h*x+d*N+u*X+f*et,r[13]=h*E+d*U+u*Y+f*V,r[2]=m*S+v*R+g*D+p*it,r[6]=m*P+v*I+g*O+p*$,r[10]=m*x+v*N+g*X+p*et,r[14]=m*E+v*U+g*Y+p*V,r[3]=y*S+b*R+M*D+w*it,r[7]=y*P+b*I+M*O+w*$,r[11]=y*x+b*N+M*X+w*et,r[15]=y*E+b*U+M*Y+w*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],v=t[7],g=t[11],p=t[15],y=l*f-c*u,b=a*f-c*d,M=a*u-l*d,w=o*f-c*h,S=o*u-l*h,P=o*d-a*h;return e*(v*y-g*b+p*M)-n*(m*y-g*w+p*S)+i*(m*b-v*w+p*P)-r*(m*M-v*S+g*P)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],v=t[13],g=t[14],p=t[15],y=e*a-n*o,b=e*l-i*o,M=e*c-r*o,w=n*l-i*a,S=n*c-r*a,P=i*c-r*l,x=h*v-d*m,E=h*g-u*m,R=h*p-f*m,I=d*g-u*v,N=d*p-f*v,U=u*p-f*g,D=y*U-b*N+M*I+w*R-S*E+P*x;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/D;return t[0]=(a*U-l*N+c*I)*O,t[1]=(i*N-n*U-r*I)*O,t[2]=(v*P-g*S+p*w)*O,t[3]=(u*S-d*P-f*w)*O,t[4]=(l*R-o*U-c*E)*O,t[5]=(e*U-i*R+r*E)*O,t[6]=(g*M-m*P-p*b)*O,t[7]=(h*P-u*M+f*b)*O,t[8]=(o*N-a*R+c*x)*O,t[9]=(n*R-e*N-r*x)*O,t[10]=(m*S-v*M+p*y)*O,t[11]=(d*M-h*S-f*y)*O,t[12]=(a*E-o*I-l*x)*O,t[13]=(e*I-n*E+i*x)*O,t[14]=(v*b-m*w-g*y)*O,t[15]=(h*w-d*b+u*y)*O,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,m=r*d,v=o*h,g=o*d,p=a*d,y=l*c,b=l*h,M=l*d,w=n.x,S=n.y,P=n.z;return i[0]=(1-(v+p))*w,i[1]=(f+M)*w,i[2]=(m-b)*w,i[3]=0,i[4]=(f-M)*S,i[5]=(1-(u+p))*S,i[6]=(g+y)*S,i[7]=0,i[8]=(m+b)*P,i[9]=(g-y)*P,i[10]=(1-(u+v))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ms.set(i[0],i[1],i[2]).length(),a=ms.set(i[4],i[5],i[6]).length(),l=ms.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Un.copy(this);let c=1/o,h=1/a,d=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=d,Un.elements[9]*=d,Un.elements[10]*=d,e.setFromRotationMatrix(Un),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=zn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),m,v;if(l)m=r/(o-r),v=o*r/(o-r);else if(a===zn)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Ns)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=zn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),m,v;if(l)m=1/(o-r),v=o/(o-r);else if(a===zn)m=-2/(o-r),v=-(o+r)/(o-r);else if(a===Ns)m=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Aa.prototype.isMatrix4=!0;var _e=Aa,ms=new B,Un=new _e,cf=new B(0,0,0),hf=new B(1,1,1),Mi=new B,yo=new B,_n=new B,Vh=new _e,Wh=new Ve,Rn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Vh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wh.setFromEuler(this),this.setFromQuaternion(Wh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var Os=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},uf=0,Xh=new B,gs=new Ve,si=new _e,Mo=new B,lr=new B,df=new B,ff=new Ve,qh=new B(1,0,0),Yh=new B(0,1,0),Zh=new B(0,0,1),Jh={type:"added"},pf={type:"removed"},xs={type:"childadded",child:null},Gl={type:"childremoved",child:null},Ce=class s extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new B,e=new Rn,n=new Ve,i=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _e},normalMatrix:{value:new ae}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(qh,t)}rotateY(t){return this.rotateOnAxis(Yh,t)}rotateZ(t){return this.rotateOnAxis(Zh,t)}translateOnAxis(t,e){return Xh.copy(t).applyQuaternion(this.quaternion),this.position.add(Xh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qh,t)}translateY(t){return this.translateOnAxis(Yh,t)}translateZ(t){return this.translateOnAxis(Zh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Mo.copy(t):Mo.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(lr,Mo,this.up):si.lookAt(Mo,lr,this.up),this.quaternion.setFromRotationMatrix(si),i&&(si.extractRotation(i.matrixWorld),gs.setFromRotationMatrix(si),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jh),xs.child=t,this.dispatchEvent(xs),xs.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pf),Gl.child=t,this.dispatchEvent(Gl),Gl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jh),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,t,df),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,ff,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ce.DEFAULT_UP=new B(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var St=class extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},mf={type:"move"},zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mf)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new St;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},bo={h:0,s:0,l:0};function Vl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var re=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=xe.workingColorSpace){if(t=rf(t,1),e=pe(e,0,1),n=pe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Vl(o,r,t+1/3),this.g=Vl(o,r,t),this.b=Vl(o,r,t-1/3)}return xe.colorSpaceToWorking(this,i),this}setStyle(t,e=tn){function n(r){r!==void 0&&parseFloat(r)<1&&ie("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ie("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){let n=ed[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return xe.workingToColorSpace(on.copy(this),t),Math.round(pe(on.r*255,0,255))*65536+Math.round(pe(on.g*255,0,255))*256+Math.round(pe(on.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.workingToColorSpace(on.copy(this),e);let n=on.r,i=on.g,r=on.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=xe.workingColorSpace){return xe.workingToColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=tn){xe.workingToColorSpace(on.copy(this),t);let e=on.r,n=on.g,i=on.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL(bo);let n=Bl(bi.h,bo.h,e),i=Bl(bi.s,bo.s,e),r=Bl(bi.l,bo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new re;re.NAMES=ed;var Ti=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Bn=new B,ri=new B,Wl=new B,oi=new B,_s=new B,vs=new B,$h=new B,Xl=new B,ql=new B,Yl=new B,Zl=new De,Jl=new De,$l=new De,ci=class s{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Bn.subVectors(t,e),i.cross(Bn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Bn.subVectors(i,e),ri.subVectors(n,e),Wl.subVectors(t,e);let o=Bn.dot(Bn),a=Bn.dot(ri),l=Bn.dot(Wl),c=ri.dot(ri),h=ri.dot(Wl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Zl.setScalar(0),Jl.setScalar(0),$l.setScalar(0),Zl.fromBufferAttribute(t,e),Jl.fromBufferAttribute(t,n),$l.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Zl,r.x),o.addScaledVector(Jl,r.y),o.addScaledVector($l,r.z),o}static isFrontFacing(t,e,n,i){return Bn.subVectors(n,e),ri.subVectors(t,e),Bn.cross(ri).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Bn.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;_s.subVectors(i,n),vs.subVectors(r,n),Xl.subVectors(t,n);let l=_s.dot(Xl),c=vs.dot(Xl);if(l<=0&&c<=0)return e.copy(n);ql.subVectors(t,i);let h=_s.dot(ql),d=vs.dot(ql);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(_s,o);Yl.subVectors(t,r);let f=_s.dot(Yl),m=vs.dot(Yl);if(m>=0&&f<=m)return e.copy(r);let v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(vs,a);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return $h.subVectors(r,i),a=(d-h)/(d-h+(f-m)),e.copy(i).addScaledVector($h,a);let p=1/(g+v+u);return o=v*p,a=u*p,e.copy(n).addScaledVector(_s,o).addScaledVector(vs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},jn=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),So.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),So.copy(n.boundingBox)),So.applyMatrix4(t.matrixWorld),this.union(So)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cr),Eo.subVectors(this.max,cr),ys.subVectors(t.a,cr),Ms.subVectors(t.b,cr),bs.subVectors(t.c,cr),Si.subVectors(Ms,ys),Ei.subVectors(bs,Ms),Gi.subVectors(ys,bs);let e=[0,-Si.z,Si.y,0,-Ei.z,Ei.y,0,-Gi.z,Gi.y,Si.z,0,-Si.x,Ei.z,0,-Ei.x,Gi.z,0,-Gi.x,-Si.y,Si.x,0,-Ei.y,Ei.x,0,-Gi.y,Gi.x,0];return!Kl(e,ys,Ms,bs,Eo)||(e=[1,0,0,0,1,0,0,0,1],!Kl(e,ys,Ms,bs,Eo))?!1:(wo.crossVectors(Si,Ei),e=[wo.x,wo.y,wo.z],Kl(e,ys,Ms,bs,Eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ai=[new B,new B,new B,new B,new B,new B,new B,new B],On=new B,So=new jn,ys=new B,Ms=new B,bs=new B,Si=new B,Ei=new B,Gi=new B,cr=new B,Eo=new B,wo=new B,Vi=new B;function Kl(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Vi.fromArray(s,r);let a=i.x*Math.abs(Vi.x)+i.y*Math.abs(Vi.y)+i.z*Math.abs(Vi.z),l=t.dot(Vi),c=e.dot(Vi),h=n.dot(Vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ke=new B,To=new _t,gf=0,an=class extends Kn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Hc,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)To.fromBufferAttribute(this,e),To.applyMatrix3(t),this.setXY(e,To.x,To.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ar=class extends an{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Rr=class extends an{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var he=class extends an{constructor(t,e,n){super(new Float32Array(t),e,n)}},xf=new jn,hr=new B,jl=new B,Ai=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):xf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hr.subVectors(t,this.center);let e=hr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(hr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hr.copy(t.center).add(jl)),this.expandByPoint(hr.copy(t.center).sub(jl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},_f=0,An=new _e,Ql=new Ce,Ss=new B,vn=new jn,ur=new jn,Je=new B,Ne=class s extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nf(t)?Rr:Ar)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ae().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return An.makeRotationFromQuaternion(t),this.applyMatrix4(An),this}rotateX(t){return An.makeRotationX(t),this.applyMatrix4(An),this}rotateY(t){return An.makeRotationY(t),this.applyMatrix4(An),this}rotateZ(t){return An.makeRotationZ(t),this.applyMatrix4(An),this}translate(t,e,n){return An.makeTranslation(t,e,n),this.applyMatrix4(An),this}scale(t,e,n){return An.makeScale(t,e,n),this.applyMatrix4(An),this}lookAt(t){return Ql.lookAt(t),Ql.updateMatrix(),this.applyMatrix4(Ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new he(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ur.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(vn.min,ur.min),vn.expandByPoint(Je),Je.addVectors(vn.max,ur.max),vn.expandByPoint(Je)):(vn.expandByPoint(ur.min),vn.expandByPoint(ur.max))}vn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Je.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Je));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Je.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(t,c),Je.add(Ss)),i=Math.max(i,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new an(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new B,l[x]=new B;let c=new B,h=new B,d=new B,u=new _t,f=new _t,m=new _t,v=new B,g=new B;function p(x,E,R){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,R),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,R),h.sub(c),d.sub(c),f.sub(u),m.sub(u);let I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(I),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(I),a[x].add(v),a[E].add(v),a[R].add(v),l[x].add(g),l[E].add(g),l[R].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let x=0,E=y.length;x<E;++x){let R=y[x],I=R.start,N=R.count;for(let U=I,D=I+N;U<D;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let b=new B,M=new B,w=new B,S=new B;function P(x){w.fromBufferAttribute(i,x),S.copy(w);let E=a[x];b.copy(E),b.sub(w.multiplyScalar(w.dot(E))).normalize(),M.crossVectors(S,E);let I=M.dot(l[x])<0?-1:1;o.setXYZW(x,b.x,b.y,b.z,I)}for(let x=0,E=y.length;x<E;++x){let R=y[x],I=R.start,N=R.count;for(let U=I,D=I+N;U<D;U+=3)P(t.getX(U+0)),P(t.getX(U+1)),P(t.getX(U+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,d=new B;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),v=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new an(u,h,d)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Hc,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},un=new B,ks=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Zn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Zn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Zn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Zn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array),r=Ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Er("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new an(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Er("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},tc=new B,vf=new B,yf=new ae,yn=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=tc.subVectors(n,e).cross(vf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(tc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||yf.getNormalMatrix(t),i=this.coplanarPoint(tc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Mf=0,kn=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=fi,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tc,this.blendDst=Ac,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qo,this.stencilZFail=qo,this.stencilZPass=qo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ie(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){ie(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new re().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new yn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new _t().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _t().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},di=class extends kn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Es,dr=new B,ws=new B,Ts=new B,As=new _t,fr=new _t,nd=new _e,Ao=new B,pr=new B,Ro=new B,Kh=new _t,ec=new _t,jh=new _t,Ri=class extends Ce{constructor(t=new di){if(super(),this.isSprite=!0,this.type="Sprite",Es===void 0){Es=new Ne;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Cr(e,5);Es.setIndex([0,1,2,0,2,3]),Es.setAttribute("position",new ks(n,3,0,!1)),Es.setAttribute("uv",new ks(n,2,3,!1))}this.geometry=Es,this.material=t,this.center=new _t(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ws.setFromMatrixScale(this.matrixWorld),nd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ws.multiplyScalar(-Ts.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Co(Ao.set(-.5,-.5,0),Ts,o,ws,i,r),Co(pr.set(.5,-.5,0),Ts,o,ws,i,r),Co(Ro.set(.5,.5,0),Ts,o,ws,i,r),Kh.set(0,0),ec.set(1,0),jh.set(1,1);let a=t.ray.intersectTriangle(Ao,pr,Ro,!1,dr);if(a===null&&(Co(pr.set(-.5,.5,0),Ts,o,ws,i,r),ec.set(0,1),a=t.ray.intersectTriangle(Ao,Ro,pr,!1,dr),a===null))return;let l=t.ray.origin.distanceTo(dr);l<t.near||l>t.far||e.push({distance:l,point:dr.clone(),uv:ci.getInterpolation(dr,Ao,pr,Ro,Kh,ec,jh,new _t),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Co(s,t,e,n,i,r){As.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(fr.x=r*As.x-i*As.y,fr.y=i*As.x+r*As.y):fr.copy(As),s.copy(t),s.x+=fr.x,s.y+=fr.y,s.applyMatrix4(nd)}var li=new B,nc=new B,Po=new B,Io=new B,Pr=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(li.copy(this.origin).addScaledVector(this.direction,e),li.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){nc.copy(t).add(e).multiplyScalar(.5),Po.copy(e).sub(t).normalize(),Io.copy(this.origin).sub(nc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Po),a=Io.dot(this.direction),l=-Io.dot(Po),c=Io.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(nc).addScaledVector(Po,u),f}intersectSphere(t,e){if(t.radius<0)return null;li.subVectors(t.center,this.origin);let n=li.dot(this.direction),i=li.dot(li)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,li)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,m=e.x-o.x,v=e.y-o.y,g=e.z-o.z,p=n.x-o.x,y=n.y-o.y,b=n.z-o.z,M=Math.abs(l),w=Math.abs(c),S=Math.abs(h),P,x,E,R,I,N,U,D,O,X,Y,it;if(M>=w&&M>=S?(E=l,N=d,O=m,it=p,l>=0?(P=c,x=h,R=u,I=f,U=v,D=g,X=y,Y=b):(P=h,x=c,R=f,I=u,U=g,D=v,X=b,Y=y)):w>=S?(E=c,N=u,O=v,it=y,c>=0?(P=h,x=l,R=f,I=d,U=g,D=m,X=b,Y=p):(P=l,x=h,R=d,I=f,U=m,D=g,X=p,Y=b)):(E=h,N=f,O=g,it=b,h>=0?(P=l,x=c,R=d,I=u,U=m,D=v,X=p,Y=y):(P=c,x=l,R=u,I=d,U=v,D=m,X=y,Y=p)),E===0)return null;let $=P/E,et=x/E,V=1/E,xt=R-$*N,ct=I-et*N,Kt=U-$*O,vt=D-et*O,gt=X-$*it,_=Y-et*it,A=gt*vt-_*Kt,F=xt*_-ct*gt,k=Kt*ct-vt*xt;if(i){if(A<0||F<0||k<0)return null}else if((A<0||F<0||k<0)&&(A>0||F>0||k>0))return null;let q=A+F+k;if(q===0)return null;let ft=V*(A*N+F*O+k*it);return(q>0?ft<0:ft>0)?null:this.at(ft/q,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},We=class extends kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Qh=new _e,Wi=new Pr,Lo=new Ai,tu=new B,Fo=new B,Do=new B,No=new B,ic=new B,Uo=new B,eu=new B,Bo=new B,Me=class extends Ce{constructor(t=new Ne,e=new We){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Uo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(ic.fromBufferAttribute(d,t),o?Uo.addScaledVector(ic,h):Uo.addScaledVector(ic.sub(e),h))}e.add(Uo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(r),Wi.copy(t.ray).recast(t.near),!(Lo.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Lo,tu)===null||Wi.origin.distanceToSquared(tu)>(t.far-t.near)**2))&&(Qh.copy(r).invert(),Wi.copy(t.ray).applyMatrix4(Qh),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wi)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){let g=u[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),b=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let M=y,w=b;M<w;M+=3){let S=a.getX(M),P=a.getX(M+1),x=a.getX(M+2);i=Oo(this,p,t,n,c,h,d,S,P,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let y=a.getX(g),b=a.getX(g+1),M=a.getX(g+2);i=Oo(this,o,t,n,c,h,d,y,b,M),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){let g=u[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),b=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=y,w=b;M<w;M+=3){let S=M,P=M+1,x=M+2;i=Oo(this,p,t,n,c,h,d,S,P,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let y=g,b=g+1,M=g+2;i=Oo(this,o,t,n,c,h,d,y,b,M),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function bf(s,t,e,n,i,r,o,a){let l;if(t.side===nn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Hn,a),l===null)return null;Bo.copy(a),Bo.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Bo);return c<e.near||c>e.far?null:{distance:c,point:Bo.clone(),object:s}}function Oo(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Fo),s.getVertexPosition(l,Do),s.getVertexPosition(c,No);let h=bf(s,t,e,n,Fo,Do,No,eu);if(h){let d=new B;ci.getBarycoord(eu,Fo,Do,No,d),i&&(h.uv=ci.getInterpolatedAttribute(i,a,l,c,d,new _t)),r&&(h.uv1=ci.getInterpolatedAttribute(r,a,l,c,d,new _t)),o&&(h.normal=ci.getInterpolatedAttribute(o,a,l,c,d,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new B,materialIndex:0};ci.getNormal(Fo,Do,No,u.normal),h.face=u,h.barycoord=d}return h}var Ir=class extends dn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=$e,h=$e,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hs=class extends an{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Rs=new _e,nu=new _e,zo=[],iu=new jn,Sf=new _e,mr=new Me,gr=new Ai,Zi=class extends Me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Hs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Sf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Rs),iu.copy(t.boundingBox).applyMatrix4(Rs),this.boundingBox.union(iu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ai),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Rs),gr.copy(t.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(gr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gr.copy(this.boundingSphere),gr.applyMatrix4(n),t.ray.intersectsSphere(gr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Rs),nu.multiplyMatrices(n,Rs),mr.matrixWorld=nu,mr.raycast(t,zo);for(let o=0,a=zo.length;o<a;o++){let l=zo[o];l.instanceId=r,l.object=this,e.push(l)}zo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Hs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ir(new Float32Array(i*this.count),i,this.count,Na,Cn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Xi=new Ai,Ef=new _t(.5,.5),ko=new B,Gs=class{constructor(t=new yn,e=new yn,n=new yn,i=new yn,r=new yn,o=new yn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],v=r[9],g=r[10],p=r[11],y=r[12],b=r[13],M=r[14],w=r[15];if(i[0].setComponents(c-o,f-h,p-m,w-y).normalize(),i[1].setComponents(c+o,f+h,p+m,w+y).normalize(),i[2].setComponents(c+a,f+d,p+v,w+b).normalize(),i[3].setComponents(c-a,f-d,p-v,w-b).normalize(),n)i[4].setComponents(l,u,g,M).normalize(),i[5].setComponents(c-l,f-u,p-g,w-M).normalize();else if(i[4].setComponents(c-l,f-u,p-g,w-M).normalize(),e===zn)i[5].setComponents(c+l,f+u,p+g,w+M).normalize();else if(e===Ns)i[5].setComponents(l,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){Xi.center.set(0,0,0);let e=Ef.distanceTo(t.center);return Xi.radius=.7071067811865476+e,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(ko.x=i.normal.x>0?t.max.x:t.min.x,ko.y=i.normal.y>0?t.max.y:t.min.y,ko.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ko)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Lr=class extends dn{constructor(t=[],e=Ui,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Fr=class extends dn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ci=class extends dn{constructor(t,e,n=Vn,i,r,o,a=$e,l=$e,c,h=$n,d=1){if(h!==$n&&h!==Oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ra=class extends Ci{constructor(t,e=Vn,n=Ui,i,r,o=$e,a=$e,l,c=$n){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Dr=class extends dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},mn=class s extends Ne{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(d,2));function m(v,g,p,y,b,M,w,S,P,x,E){let R=M/P,I=w/x,N=M/2,U=w/2,D=S/2,O=P+1,X=x+1,Y=0,it=0,$=new B;for(let et=0;et<X;et++){let V=et*I-U;for(let xt=0;xt<O;xt++){let ct=xt*R-N;$[v]=ct*y,$[g]=V*b,$[p]=D,c.push($.x,$.y,$.z),$[v]=0,$[g]=0,$[p]=S>0?1:-1,h.push($.x,$.y,$.z),d.push(xt/P),d.push(1-et/x),Y+=1}}for(let et=0;et<x;et++)for(let V=0;V<P;V++){let xt=u+V+O*et,ct=u+V+O*(et+1),Kt=u+(V+1)+O*(et+1),vt=u+(V+1)+O*et;l.push(xt,ct,vt),l.push(ct,Kt,vt),it+=6}a.addGroup(f,it,E),f+=it,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Nr=class s extends Ne{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,m=n*2+r,v=i+1,g=new B,p=new B;for(let y=0;y<=m;y++){let b=0,M=0,w=0,S=0;if(y<=n){let E=y/n,R=E*Math.PI/2;M=-h-t*Math.cos(R),w=t*Math.sin(R),S=-t*Math.cos(R),b=E*d}else if(y<=n+r){let E=(y-n)/r;M=-h+E*e,w=t,S=0,b=d+E*u}else{let E=(y-n-r)/n,R=E*Math.PI/2;M=h+t*Math.sin(R),w=t*Math.cos(R),S=t*Math.sin(R),b=d+u+E*d}let P=Math.max(0,Math.min(1,b/f)),x=0;y===0?x=.5/i:y===m&&(x=-.5/i);for(let E=0;E<=i;E++){let R=E/i,I=R*Math.PI*2,N=Math.sin(I),U=Math.cos(I);p.x=-w*U,p.y=M,p.z=w*N,a.push(p.x,p.y,p.z),g.set(-w*U,S,w*N),g.normalize(),l.push(g.x,g.y,g.z),c.push(R+x,P)}if(y>0){let E=(y-1)*v;for(let R=0;R<i;R++){let I=E+R,N=E+R+1,U=y*v+R,D=y*v+R+1;o.push(I,N,U),o.push(N,D,U)}}}this.setIndex(o),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(l,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ji=class s extends Ne{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new B,h=new _t;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new he(o,3)),this.setAttribute("normal",new he(a,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},$i=class s extends Ne{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,v=[],g=n/2,p=0;y(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new he(d,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(f,2));function y(){let M=new B,w=new B,S=0,P=(e-t)/n;for(let x=0;x<=r;x++){let E=[],R=x/r,I=R*(e-t)+t;for(let N=0;N<=i;N++){let U=N/i,D=U*l+a,O=Math.sin(D),X=Math.cos(D);w.x=I*O,w.y=-R*n+g,w.z=I*X,d.push(w.x,w.y,w.z),M.set(O,P,X).normalize(),u.push(M.x,M.y,M.z),f.push(U,1-R),E.push(m++)}v.push(E)}for(let x=0;x<i;x++)for(let E=0;E<r;E++){let R=v[E][x],I=v[E+1][x],N=v[E+1][x+1],U=v[E][x+1];(t>0||E!==0)&&(h.push(R,I,U),S+=3),(e>0||E!==r-1)&&(h.push(I,N,U),S+=3)}c.addGroup(p,S,0),p+=S}function b(M){let w=m,S=new _t,P=new B,x=0,E=M===!0?t:e,R=M===!0?1:-1;for(let N=1;N<=i;N++)d.push(0,g*R,0),u.push(0,R,0),f.push(.5,.5),m++;let I=m;for(let N=0;N<=i;N++){let D=N/i*l+a,O=Math.cos(D),X=Math.sin(D);P.x=E*X,P.y=g*R,P.z=E*O,d.push(P.x,P.y,P.z),u.push(0,R,0),S.x=O*.5+.5,S.y=X*.5*R+.5,f.push(S.x,S.y),m++}for(let N=0;N<i;N++){let U=w+N,D=I+N;M===!0?h.push(D,D+1,U):h.push(D+1,D,U),x+=3}c.addGroup(p,x,M===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Qn=class s extends $i{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},oa=class s extends Ne{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(r.slice(),3)),this.setAttribute("uv",new he(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let b=new B,M=new B,w=new B;for(let S=0;S<e.length;S+=3)f(e[S+0],b),f(e[S+1],M),f(e[S+2],w),l(b,M,w,y)}function l(y,b,M,w){let S=w+1,P=[];for(let x=0;x<=S;x++){P[x]=[];let E=y.clone().lerp(M,x/S),R=b.clone().lerp(M,x/S),I=S-x;for(let N=0;N<=I;N++)N===0&&x===S?P[x][N]=E:P[x][N]=E.clone().lerp(R,N/I)}for(let x=0;x<S;x++)for(let E=0;E<2*(S-x)-1;E++){let R=Math.floor(E/2);E%2===0?(u(P[x][R+1]),u(P[x+1][R]),u(P[x][R])):(u(P[x][R+1]),u(P[x+1][R+1]),u(P[x+1][R]))}}function c(y){let b=new B;for(let M=0;M<r.length;M+=3)b.x=r[M+0],b.y=r[M+1],b.z=r[M+2],b.normalize().multiplyScalar(y),r[M+0]=b.x,r[M+1]=b.y,r[M+2]=b.z}function h(){let y=new B;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];let M=g(y)/2/Math.PI+.5,w=p(y)/Math.PI+.5;o.push(M,1-w)}m(),d()}function d(){for(let y=0;y<o.length;y+=6){let b=o[y+0],M=o[y+2],w=o[y+4],S=Math.max(b,M,w),P=Math.min(b,M,w);S>.9&&P<.1&&(b<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),w<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,b){let M=y*3;b.x=t[M+0],b.y=t[M+1],b.z=t[M+2]}function m(){let y=new B,b=new B,M=new B,w=new B,S=new _t,P=new _t,x=new _t;for(let E=0,R=0;E<r.length;E+=9,R+=6){y.set(r[E+0],r[E+1],r[E+2]),b.set(r[E+3],r[E+4],r[E+5]),M.set(r[E+6],r[E+7],r[E+8]),S.set(o[R+0],o[R+1]),P.set(o[R+2],o[R+3]),x.set(o[R+4],o[R+5]),w.copy(y).add(b).add(M).divideScalar(3);let I=g(w);v(S,R+0,y,I),v(P,R+2,b,I),v(x,R+4,M,I)}}function v(y,b,M,w){w<0&&y.x===1&&(o[b]=y.x-1),M.x===0&&M.z===0&&(o[b]=w/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ie("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new _t:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new B,i=[],r=[],o=[],a=new B,l=new _e;for(let f=0;f<=t;f++){let m=f/t;i[f]=this.getTangentAt(m,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(pe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(pe(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Vs=class extends Mn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new _t){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},aa=class extends Vs{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Vc(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var su=new B,ru=new B,sc=new Vc,rc=new Vc,oc=new Vc,Ws=class extends Mn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new B){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(ru.subVectors(i[0],i[1]).add(i[0]),c=ru);let d=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(su.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=su),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),sc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,v,g),rc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,v,g),oc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(sc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),rc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),oc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(sc.calc(l),rc.calc(l),oc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new B().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ou(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function wf(s,t){let e=1-s;return e*e*t}function Tf(s,t){return 2*(1-s)*s*t}function Af(s,t){return s*s*t}function _r(s,t,e,n){return wf(s,t)+Tf(s,e)+Af(s,n)}function Rf(s,t){let e=1-s;return e*e*e*t}function Cf(s,t){let e=1-s;return 3*e*e*s*t}function Pf(s,t){return 3*(1-s)*s*s*t}function If(s,t){return s*s*s*t}function vr(s,t,e,n,i){return Rf(s,t)+Cf(s,e)+Pf(s,n)+If(s,i)}var Ur=class extends Mn{constructor(t=new _t,e=new _t,n=new _t,i=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new _t){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vr(t,i.x,r.x,o.x,a.x),vr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},la=class extends Mn{constructor(t=new B,e=new B,n=new B,i=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new B){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vr(t,i.x,r.x,o.x,a.x),vr(t,i.y,r.y,o.y,a.y),vr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Br=class extends Mn{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ca=class extends Mn{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Or=class extends Mn{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(_r(t,i.x,r.x,o.x),_r(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ha=class extends Mn{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(_r(t,i.x,r.x,o.x),_r(t,i.y,r.y,o.y),_r(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ki=class extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(ou(a,l.x,c.x,h.x,d.x),ou(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new _t().fromArray(i))}return this}},fc=Object.freeze({__proto__:null,ArcCurve:aa,CatmullRomCurve3:Ws,CubicBezierCurve:Ur,CubicBezierCurve3:la,EllipseCurve:Vs,LineCurve:Br,LineCurve3:ca,QuadraticBezierCurve:Or,QuadraticBezierCurve3:ha,SplineCurve:Ki}),ua=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new fc[i.type]().fromJSON(i))}return this}},zr=class extends ua{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Br(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Or(this.currentPoint.clone(),new _t(t,e),new _t(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Ur(this.currentPoint.clone(),new _t(t,e),new _t(n,i),new _t(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ki(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new Vs(t,e,n,i,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Xs=class extends zr{constructor(t){super(t),this.uuid=hi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new zr().fromJSON(i))}return this}};function Lf(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=id(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Bf(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,d=l;for(let u=e;u<i;u+=e){let f=s[u],m=s[u+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>d&&(d=m)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return kr(r,o,e,a,l,c,0),o}function id(s,t,e,n,i){let r;if(i===Zf(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=au(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=au(o/n|0,s[o],s[o+1],r);return r&&qs(r,r.next)&&(Gr(r),r=r.next),r}function ji(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(qs(e,e.next)||Ue(e.prev,e,e.next)===0)){if(Gr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function kr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Gf(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?Df(s,n,i,r):Ff(s)){t.push(l.i,s.i,c.i),Gr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Nf(ji(s),t),kr(s,t,e,n,i,r,2)):o===2&&Uf(s,t,e,n,i,r):kr(ji(s),t,e,n,i,r,1);break}}}function Ff(s){let t=s.prev,e=s,n=s.next;if(Ue(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),d=Math.min(a,l,c),u=Math.max(i,r,o),f=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&xr(i,a,r,l,o,c,m.x,m.y)&&Ue(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Df(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Ue(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,d=r.y,u=o.y,f=Math.min(a,l,c),m=Math.min(h,d,u),v=Math.max(a,l,c),g=Math.max(h,d,u),p=pc(f,m,t,e,n),y=pc(v,g,t,e,n),b=s.prevZ,M=s.nextZ;for(;b&&b.z>=p&&M&&M.z<=y;){if(b.x>=f&&b.x<=v&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&xr(a,h,l,d,c,u,b.x,b.y)&&Ue(b.prev,b,b.next)>=0||(b=b.prevZ,M.x>=f&&M.x<=v&&M.y>=m&&M.y<=g&&M!==i&&M!==o&&xr(a,h,l,d,c,u,M.x,M.y)&&Ue(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=v&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&xr(a,h,l,d,c,u,b.x,b.y)&&Ue(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=v&&M.y>=m&&M.y<=g&&M!==i&&M!==o&&xr(a,h,l,d,c,u,M.x,M.y)&&Ue(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Nf(s,t){let e=s;do{let n=e.prev,i=e.next.next;!qs(n,i)&&rd(n,e,e.next,i)&&Hr(n,i)&&Hr(i,n)&&(t.push(n.i,e.i,i.i),Gr(e),Gr(e.next),e=s=i),e=e.next}while(e!==s);return ji(e)}function Uf(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Xf(o,a)){let l=od(o,a);o=ji(o,o.next),l=ji(l,l.next),kr(o,t,e,n,i,r,0),kr(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Bf(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=id(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Wf(c))}i.sort(Of);for(let r=0;r<i.length;r++)e=zf(i[r],e);return e}function Of(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function zf(s,t){let e=kf(s,t);if(!e)return t;let n=od(e,s);return ji(n,n.next),ji(e,e.next)}function kf(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(qs(s,e))return e;do{if(qs(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&sd(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let d=Math.abs(i-e.y)/(n-e.x);Hr(e,s)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Hf(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Hf(s,t){return Ue(s.prev,s,t.prev)<0&&Ue(t.next,s,s.next)<0}function Gf(s,t,e,n){let i=s;do i.z===0&&(i.z=pc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Vf(i)}function Vf(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function pc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Wf(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function sd(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function xr(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&sd(s,t,e,n,i,r,o,a)}function Xf(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!qf(s,t)&&(Hr(s,t)&&Hr(t,s)&&Yf(s,t)&&(Ue(s.prev,s,t.prev)||Ue(s,t.prev,t))||qs(s,t)&&Ue(s.prev,s,s.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function qs(s,t){return s.x===t.x&&s.y===t.y}function rd(s,t,e,n){let i=Go(Ue(s,t,e)),r=Go(Ue(s,t,n)),o=Go(Ue(e,n,s)),a=Go(Ue(e,n,t));return!!(i!==r&&o!==a||i===0&&Ho(s,e,t)||r===0&&Ho(s,n,t)||o===0&&Ho(e,s,n)||a===0&&Ho(e,t,n))}function Ho(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Go(s){return s>0?1:s<0?-1:0}function qf(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&rd(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Hr(s,t){return Ue(s.prev,s,s.next)<0?Ue(s,t,s.next)>=0&&Ue(s,s.prev,t)>=0:Ue(s,t,s.prev)<0||Ue(s,s.next,t)<0}function Yf(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function od(s,t){let e=mc(s.i,s.x,s.y),n=mc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function au(s,t,e,n){let i=mc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Gr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function mc(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zf(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var gc=class{static triangulate(t,e,n=2){return Lf(t,e,n)}},qi=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];lu(t),cu(n,t);let o=t.length;e.forEach(lu);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,cu(n,e[l]);let a=gc.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function lu(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function cu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Vr=class s extends Ne{constructor(t=new Xs([new _t(.5,.5),new _t(-.5,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new he(i,3)),this.setAttribute("uv",new he(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Jf,b,M=!1,w,S,P,x;if(p){b=p.getSpacedPoints(h),M=!0,u=!1;let Q=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(h,Q),S=new B,P=new B,x=new B}u||(g=0,f=0,m=0,v=0);let E=a.extractPoints(c),R=E.shape,I=E.holes;if(!qi.isClockWise(R)){R=R.reverse();for(let Q=0,ut=I.length;Q<ut;Q++){let dt=I[Q];qi.isClockWise(dt)&&(I[Q]=dt.reverse())}}function U(Q){let dt=10000000000000001e-36,ht=Q[0];for(let yt=1;yt<=Q.length;yt++){let Xt=yt%Q.length,Gt=Q[Xt],jt=Gt.x-ht.x,ce=Gt.y-ht.y,z=jt*jt+ce*ce,be=Math.max(Math.abs(Gt.x),Math.abs(Gt.y),Math.abs(ht.x),Math.abs(ht.y)),me=dt*be*be;if(z<=me){Q.splice(Xt,1),yt--;continue}ht=Gt}}U(R),I.forEach(U);let D=I.length,O=R;for(let Q=0;Q<D;Q++){let ut=I[Q];R=R.concat(ut)}function X(Q,ut,dt){return ut||ne("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(ut,dt)}let Y=R.length;function it(Q,ut,dt){let ht,yt,Xt,Gt=Q.x-ut.x,jt=Q.y-ut.y,ce=dt.x-Q.x,z=dt.y-Q.y,be=Gt*Gt+jt*jt,me=Gt*z-jt*ce;if(Math.abs(me)>Number.EPSILON){let L=Math.sqrt(be),T=Math.sqrt(ce*ce+z*z),W=ut.x-jt/L,j=ut.y+Gt/L,nt=dt.x-z/T,Mt=dt.y+ce/T,bt=((nt-W)*z-(Mt-j)*ce)/(Gt*z-jt*ce);ht=W+Gt*bt-Q.x,yt=j+jt*bt-Q.y;let st=ht*ht+yt*yt;if(st<=2)return new _t(ht,yt);Xt=Math.sqrt(st/2)}else{let L=!1;Gt>Number.EPSILON?ce>Number.EPSILON&&(L=!0):Gt<-Number.EPSILON?ce<-Number.EPSILON&&(L=!0):Math.sign(jt)===Math.sign(z)&&(L=!0),L?(ht=-jt,yt=Gt,Xt=Math.sqrt(be)):(ht=Gt,yt=jt,Xt=Math.sqrt(be/2))}return new _t(ht/Xt,yt/Xt)}let $=[];for(let Q=0,ut=O.length,dt=ut-1,ht=Q+1;Q<ut;Q++,dt++,ht++)dt===ut&&(dt=0),ht===ut&&(ht=0),$[Q]=it(O[Q],O[dt],O[ht]);let et=[],V,xt=$.concat();for(let Q=0,ut=D;Q<ut;Q++){let dt=I[Q];V=[];for(let ht=0,yt=dt.length,Xt=yt-1,Gt=ht+1;ht<yt;ht++,Xt++,Gt++)Xt===yt&&(Xt=0),Gt===yt&&(Gt=0),V[ht]=it(dt[ht],dt[Xt],dt[Gt]);et.push(V),xt=xt.concat(V)}let ct;if(g===0)ct=qi.triangulateShape(O,I);else{let Q=[],ut=[];for(let dt=0;dt<g;dt++){let ht=dt/g,yt=f*Math.cos(ht*Math.PI/2),Xt=m*Math.sin(ht*Math.PI/2)+v;for(let Gt=0,jt=O.length;Gt<jt;Gt++){let ce=X(O[Gt],$[Gt],Xt);F(ce.x,ce.y,-yt),ht===0&&Q.push(ce)}for(let Gt=0,jt=D;Gt<jt;Gt++){let ce=I[Gt];V=et[Gt];let z=[];for(let be=0,me=ce.length;be<me;be++){let L=X(ce[be],V[be],Xt);F(L.x,L.y,-yt),ht===0&&z.push(L)}ht===0&&ut.push(z)}}ct=qi.triangulateShape(Q,ut)}let Kt=ct.length,vt=m+v;for(let Q=0;Q<Y;Q++){let ut=u?X(R[Q],xt[Q],vt):R[Q];M?(P.copy(w.normals[0]).multiplyScalar(ut.x),S.copy(w.binormals[0]).multiplyScalar(ut.y),x.copy(b[0]).add(P).add(S),F(x.x,x.y,x.z)):F(ut.x,ut.y,0)}for(let Q=1;Q<=h;Q++)for(let ut=0;ut<Y;ut++){let dt=u?X(R[ut],xt[ut],vt):R[ut];M?(P.copy(w.normals[Q]).multiplyScalar(dt.x),S.copy(w.binormals[Q]).multiplyScalar(dt.y),x.copy(b[Q]).add(P).add(S),F(x.x,x.y,x.z)):F(dt.x,dt.y,d/h*Q)}for(let Q=g-1;Q>=0;Q--){let ut=Q/g,dt=f*Math.cos(ut*Math.PI/2),ht=m*Math.sin(ut*Math.PI/2)+v;for(let yt=0,Xt=O.length;yt<Xt;yt++){let Gt=X(O[yt],$[yt],ht);F(Gt.x,Gt.y,d+dt)}for(let yt=0,Xt=I.length;yt<Xt;yt++){let Gt=I[yt];V=et[yt];for(let jt=0,ce=Gt.length;jt<ce;jt++){let z=X(Gt[jt],V[jt],ht);M?F(z.x,z.y+b[h-1].y,b[h-1].x+dt):F(z.x,z.y,d+dt)}}}gt(),_();function gt(){let Q=i.length/3;if(u){let ut=0,dt=Y*ut;for(let ht=0;ht<Kt;ht++){let yt=ct[ht];k(yt[2]+dt,yt[1]+dt,yt[0]+dt)}ut=h+g*2,dt=Y*ut;for(let ht=0;ht<Kt;ht++){let yt=ct[ht];k(yt[0]+dt,yt[1]+dt,yt[2]+dt)}}else{for(let ut=0;ut<Kt;ut++){let dt=ct[ut];k(dt[2],dt[1],dt[0])}for(let ut=0;ut<Kt;ut++){let dt=ct[ut];k(dt[0]+Y*h,dt[1]+Y*h,dt[2]+Y*h)}}n.addGroup(Q,i.length/3-Q,0)}function _(){let Q=i.length/3,ut=0;A(O,ut),ut+=O.length;for(let dt=0,ht=I.length;dt<ht;dt++){let yt=I[dt];A(yt,ut),ut+=yt.length}n.addGroup(Q,i.length/3-Q,1)}function A(Q,ut){let dt=Q.length;for(;--dt>=0;){let ht=dt,yt=dt-1;yt<0&&(yt=Q.length-1);for(let Xt=0,Gt=h+g*2;Xt<Gt;Xt++){let jt=Y*Xt,ce=Y*(Xt+1),z=ut+ht+jt,be=ut+yt+jt,me=ut+yt+ce,L=ut+ht+ce;q(z,be,me,L)}}}function F(Q,ut,dt){l.push(Q),l.push(ut),l.push(dt)}function k(Q,ut,dt){ft(Q),ft(ut),ft(dt);let ht=i.length/3,yt=y.generateTopUV(n,i,ht-3,ht-2,ht-1);Zt(yt[0]),Zt(yt[1]),Zt(yt[2])}function q(Q,ut,dt,ht){ft(Q),ft(ut),ft(ht),ft(ut),ft(dt),ft(ht);let yt=i.length/3,Xt=y.generateSideWallUV(n,i,yt-6,yt-3,yt-2,yt-1);Zt(Xt[0]),Zt(Xt[1]),Zt(Xt[3]),Zt(Xt[1]),Zt(Xt[2]),Zt(Xt[3])}function ft(Q){i.push(l[Q*3+0]),i.push(l[Q*3+1]),i.push(l[Q*3+2])}function Zt(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return $f(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new fc[i.type]().fromJSON(i)),new s(n,t.options)}},Jf={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new _t(r,o),new _t(a,l),new _t(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],m=t[i*3+2],v=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new _t(o,1-l),new _t(c,1-d),new _t(u,1-m),new _t(v,1-p)]:[new _t(a,1-l),new _t(h,1-d),new _t(f,1-m),new _t(g,1-p)]}};function $f(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Qi=class s extends oa{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Ys=class s extends Ne{constructor(t=[new _t(0,-.5),new _t(.5,0),new _t(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=pe(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new B,u=new _t,f=new B,m=new B,v=new B,g=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-g,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(m)}for(let y=0;y<=e;y++){let b=n+y*h*i,M=Math.sin(b),w=Math.cos(b);for(let S=0;S<=t.length-1;S++){d.x=t[S].x*M,d.y=t[S].y,d.z=t[S].x*w,o.push(d.x,d.y,d.z),u.x=y/e,u.y=S/(t.length-1),a.push(u.x,u.y);let P=l[3*S+0]*M,x=l[3*S+1],E=l[3*S+0]*w;c.push(P,x,E)}}for(let y=0;y<e;y++)for(let b=0;b<t.length-1;b++){let M=b+y*t.length,w=M,S=M+t.length,P=M+t.length+1,x=M+1;r.push(w,S,x),r.push(P,x,S)}this.setIndex(r),this.setAttribute("position",new he(o,3)),this.setAttribute("uv",new he(a,2)),this.setAttribute("normal",new he(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var Xe=class s extends Ne{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],v=[],g=[];for(let p=0;p<h;p++){let y=p*u-o;for(let b=0;b<c;b++){let M=b*d-r;m.push(M,-y,0),v.push(0,0,1),g.push(b/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let b=y+c*p,M=y+c*(p+1),w=y+1+c*(p+1),S=y+1+c*p;f.push(b,M,S),f.push(M,w,S)}this.setIndex(f),this.setAttribute("position",new he(m,3)),this.setAttribute("normal",new he(v,3)),this.setAttribute("uv",new he(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var ln=class s extends Ne{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new B,u=new B,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){let y=[],b=p/n,M=o+b*a,w=t*Math.cos(M),S=Math.sqrt(t*t-w*w),P=0;p===0&&o===0?P=.5/e:p===n&&l===Math.PI&&(P=-.5/e);for(let x=0;x<=e;x++){let E=x/e,R=i+E*r;d.x=-S*Math.cos(R),d.y=w,d.z=S*Math.sin(R),m.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),g.push(E+P,1-b),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let b=h[p][y+1],M=h[p][y],w=h[p+1][y],S=h[p+1][y+1];(p!==0||o>0)&&f.push(b,M,S),(p!==n-1||l<Math.PI)&&f.push(M,w,S)}this.setIndex(f),this.setAttribute("position",new he(m,3)),this.setAttribute("normal",new he(v,3)),this.setAttribute("uv",new he(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Be=class s extends Ne{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],u=new B,f=new B,m=new B;for(let v=0;v<=n;v++){let g=o+v/n*a;for(let p=0;p<=i;p++){let y=p/i*r;f.x=(t+e*Math.cos(g))*Math.cos(y),f.y=(t+e*Math.cos(g))*Math.sin(y),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),m.subVectors(f,u).normalize(),h.push(m.x,m.y,m.z),d.push(p/i),d.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=i;g++){let p=(i+1)*v+g-1,y=(i+1)*(v-1)+g-1,b=(i+1)*(v-1)+g,M=(i+1)*v+g;l.push(p,y,M),l.push(y,b,M)}this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Wr=class extends kn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new re(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function is(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(hu(i))i.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(hu(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function cn(s){let t={};for(let e=0;e<s.length;e++){let n=is(s[e]);for(let i in n)t[i]=n[i]}return t}function hu(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Kf(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Wc(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}var ad={clone:is,merge:cn},jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bn=class extends kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jf,this.fragmentShader=Qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=is(t.uniforms),this.uniformsGroups=Kf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new re().setHex(i.value);break;case"v2":this.uniforms[n].value=new _t().fromArray(i.value);break;case"v3":this.uniforms[n].value=new B().fromArray(i.value);break;case"v4":this.uniforms[n].value=new De().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ae().fromArray(i.value);break;case"m4":this.uniforms[n].value=new _e().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},da=class extends bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ve=class extends kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=so,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Xr=class extends kn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=so,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Ra,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},fa=class extends kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},pa=class extends kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Cs(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function ac(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Pi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ma=class extends Pi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hc,endingEnd:hc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case uc:r=t,a=2*e-n;break;case dc:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case uc:o=t,l=2*n-e;break;case dc:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),v=m*m,g=v*m,p=-u*g+2*u*v-u*m,y=(1+u)*g+(-1.5-2*u)*v+(-.5+u)*m+1,b=(-1-f)*g+(1.5+f)*v+.5*m,M=f*g-f*v;for(let w=0;w!==a;++w)r[w]=p*o[h+w]+y*o[c+w]+b*o[l+w]+M*o[d+w];return r}},ga=class extends Pi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},xa=class extends Pi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},_a=class extends Pi{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(i-e),v=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*v+o[l+g]*m;return r}let u=a*2,f=t-1;for(let m=0;m!==a;++m){let v=o[c+m],g=o[l+m],p=f*u+m*2,y=d[p],b=d[p+1],M=t*u+m*2,w=h[M],S=h[M+1],P=ep(n,e,y,w,i);r[m]=ld(P,v,b,S,g)}return r}};function ld(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function tp(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function ep(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=ld(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=tp(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Sn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Cs(e,this.TimeBufferType),this.values=Cs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Cs(t.times,Array),values:Cs(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),ac(t.settings)&&(n.settings={inTangents:Cs(t.settings.inTangents,Array),outTangents:Cs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new xa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ga(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new _a(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case yr:e=this.InterpolantFactoryMethodDiscrete;break;case ea:e=this.InterpolantFactoryMethodLinear;break;case Xo:e=this.InterpolantFactoryMethodSmooth;break;case cc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ie("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return ea;case this.InterpolantFactoryMethodSmooth:return Xo;case this.InterpolantFactoryMethodBezier:return cc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;ac(this.settings)&&(uu(this.settings.inTangents,t),uu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ne("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(ne("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ne("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ne("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&sf(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){ne("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Xo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let v=e[d+m];if(v!==e[u+m]||v!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,ac(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function uu(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=ea;var Ii=class extends Sn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=yr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var va=class extends Sn{constructor(t,e,n,i){super(t,e,n,i)}};va.prototype.ValueTypeName="color";var ya=class extends Sn{constructor(t,e,n,i){super(t,e,n,i)}};ya.prototype.ValueTypeName="number";var Ma=class extends Pi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ve.slerpFlat(r,0,o,c-a,o,c,l);return r}},qr=class extends Sn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Ma(this.times,this.values,this.getValueSize(),t)}};qr.prototype.ValueTypeName="quaternion";qr.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends Sn{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=yr;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends Sn{constructor(t,e,n,i){super(t,e,n,i)}};ba.prototype.ValueTypeName="vector";var Sa=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},cd=new Sa,Ea=class{constructor(t){this.manager=t!==void 0?t:cd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ea.DEFAULT_MATERIAL_NAME="__DEFAULT";var ts=class extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Zs=class extends ts{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},lc=new _e,du=new B,fu=new B,Js=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gs,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;du.setFromMatrixPosition(t.matrixWorld),e.position.copy(du),fu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){lc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(lc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===Ns||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(lc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Vo=new B,Wo=new Ve,Yn=new B,Yr=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Vo,Wo,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Wo,Yn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Vo,Wo,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Wo,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},wi=new B,pu=new _t,mu=new _t,He=class extends Yr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=wr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ul*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(Ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wi.x,wi.y).multiplyScalar(-t/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-t/wi.z)}getViewSize(t,e){return this.getViewBounds(t,pu,mu),e.subVectors(mu,pu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ul*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},xc=class extends Js{constructor(){super(new He(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=wr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Zr=class extends ts{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new xc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},_c=class extends Js{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0}},ti=class extends ts{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new _c}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},$s=class extends Yr{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},vc=class extends Js{constructor(){super(new $s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fi=class extends ts{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new vc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ps=-90,Is=1,wa=class extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new He(Ps,Is,t,e);i.layers=this.layers,this.add(i);let r=new He(Ps,Is,t,e);r.layers=this.layers,this.add(r);let o=new He(Ps,Is,t,e);o.layers=this.layers,this.add(o);let a=new He(Ps,Is,t,e);a.layers=this.layers,this.add(a);let l=new He(Ps,Is,t,e);l.layers=this.layers,this.add(l);let c=new He(Ps,Is,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ta=class extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Xc="\\[\\]\\.:\\/",np=new RegExp("["+Xc+"]","g"),qc="[^"+Xc+"]",ip="[^"+Xc.replace("\\.","")+"]",sp=/((?:WC+[\/:])*)/.source.replace("WC",qc),rp=/(WCOD+)?/.source.replace("WCOD",ip),op=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qc),ap=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qc),lp=new RegExp("^"+sp+rp+op+ap+"$"),cp=["material","materials","bones","map"],yc=class{constructor(t,e,n){let i=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Fe=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(np,"")}static parseTrackName(t){let e=lp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);cp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;ne("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=yc;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var M_=new Float32Array(1);var gu=new _e,Jr=class{constructor(t,e,n=0,i=1/0){this.ray=new Pr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Os,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ne("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return gu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gu),this}intersectObject(t,e=!0,n=[]){return Mc(t,this,n,e),n.sort(xu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Mc(t[i],this,n,e);return n.sort(xu),n}};function xu(s,t){return s.distance-t.distance}function Mc(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Mc(r[o],t,e,!0)}}var jc=class jc{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};jc.prototype.isMatrix2=!0;var bc=jc;function Yc(s,t,e,n){let i=hp(n);switch(e){case zc:return s*t;case Na:return s*t/i.components*i.byteLength;case Ua:return s*t/i.components*i.byteLength;case zi:return s*t*2/i.components*i.byteLength;case Ba:return s*t*2/i.components*i.byteLength;case kc:return s*t*3/i.components*i.byteLength;case Pn:return s*t*4/i.components*i.byteLength;case Oa:return s*t*4/i.components*i.byteLength;case jr:case Qr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case to:case eo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ka:case Ga:return Math.max(s,16)*Math.max(t,8)/4;case za:case Ha:return Math.max(s,8)*Math.max(t,8)/2;case Va:case Wa:case qa:case Ya:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Xa:case no:case Za:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ja:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case tl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case el:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case nl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case il:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case sl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case rl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ol:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case al:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ll:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case cl:case hl:case ul:return Math.ceil(s/4)*Math.ceil(t/4)*16;case dl:case fl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case io:case pl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hp(s){switch(s){case xn:case Nc:return{byteLength:1,components:1};case Qs:case Uc:case Wn:return{byteLength:2,components:1};case Fa:case Da:return{byteLength:2,components:4};case Vn:case La:case Cn:return{byteLength:4,components:1};case Bc:case Oc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Id(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function mp(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],v=d[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let v=d[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var gp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xp=`#ifdef USE_ALPHAHASH
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
#endif`,_p=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mp=`#ifdef USE_ALPHATEST
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
#endif`,Sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ep=`#ifdef USE_BATCHING
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
#endif`,Tp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cp=`#ifdef USE_IRIDESCENCE
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
#endif`,Pp=`#ifdef USE_BUMPMAP
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
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,zp=`#define PI 3.141592653589793
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
} // validated`,kp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hp=`vec3 transformedNormal = objectNormal;
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
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$p=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,t0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i0=`#ifdef USE_GRADIENTMAP
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
}`,s0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,l0=`#ifdef USE_ENVMAP
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
#endif`,c0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f0=`PhysicalMaterial material;
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
#endif`,p0=`uniform sampler2D dfgLUT;
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
}`,m0=`
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
#endif`,g0=`#if defined( RE_IndirectDiffuse )
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
#endif`,x0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,v0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,T0=`#if defined( USE_POINTS_UV )
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
#endif`,A0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L0=`#ifdef USE_MORPHTARGETS
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
#endif`,F0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,N0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,U0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,z0=`#ifdef USE_NORMALMAP
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
#endif`,k0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,q0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,em=`float getShadowMask() {
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
}`,nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,im=`#ifdef USE_SKINNING
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
#endif`,sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rm=`#ifdef USE_SKINNING
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
#endif`,om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hm=`#ifdef USE_TRANSMISSION
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
#endif`,um=`#ifdef USE_TRANSMISSION
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xm=`uniform sampler2D t2D;
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
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`#include <common>
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
}`,Sm=`#if DEPTH_PACKING == 3200
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
}`,Em=`#define DISTANCE
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
}`,wm=`#define DISTANCE
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`uniform float scale;
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Pm=`#include <common>
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
}`,Im=`uniform vec3 diffuse;
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
}`,Lm=`#define LAMBERT
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
}`,Fm=`#define LAMBERT
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
}`,Dm=`#define MATCAP
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
}`,Nm=`#define MATCAP
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
}`,Um=`#define NORMAL
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
}`,Bm=`#define NORMAL
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
}`,Om=`#define PHONG
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
}`,zm=`#define PHONG
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
}`,km=`#define STANDARD
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
}`,Hm=`#define STANDARD
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
}`,Gm=`#define TOON
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
}`,Vm=`#define TOON
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
}`,Wm=`uniform float size;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,qm=`#include <common>
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
}`,Ym=`uniform vec3 color;
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
}`,Zm=`uniform float rotation;
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
}`,Jm=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:gp,alphahash_pars_fragment:xp,alphamap_fragment:_p,alphamap_pars_fragment:vp,alphatest_fragment:yp,alphatest_pars_fragment:Mp,aomap_fragment:bp,aomap_pars_fragment:Sp,batching_pars_vertex:Ep,batching_vertex:wp,begin_vertex:Tp,beginnormal_vertex:Ap,bsdfs:Rp,iridescence_fragment:Cp,bumpmap_pars_fragment:Pp,clipping_planes_fragment:Ip,clipping_planes_pars_fragment:Lp,clipping_planes_pars_vertex:Fp,clipping_planes_vertex:Dp,color_fragment:Np,color_pars_fragment:Up,color_pars_vertex:Bp,color_vertex:Op,common:zp,cube_uv_reflection_fragment:kp,defaultnormal_vertex:Hp,displacementmap_pars_vertex:Gp,displacementmap_vertex:Vp,emissivemap_fragment:Wp,emissivemap_pars_fragment:Xp,colorspace_fragment:qp,colorspace_pars_fragment:Yp,envmap_fragment:Zp,envmap_common_pars_fragment:Jp,envmap_pars_fragment:$p,envmap_pars_vertex:Kp,envmap_physical_pars_fragment:l0,envmap_vertex:jp,fog_vertex:Qp,fog_pars_vertex:t0,fog_fragment:e0,fog_pars_fragment:n0,gradientmap_pars_fragment:i0,lightmap_pars_fragment:s0,lights_lambert_fragment:r0,lights_lambert_pars_fragment:o0,lights_pars_begin:a0,lights_toon_fragment:c0,lights_toon_pars_fragment:h0,lights_phong_fragment:u0,lights_phong_pars_fragment:d0,lights_physical_fragment:f0,lights_physical_pars_fragment:p0,lights_fragment_begin:m0,lights_fragment_maps:g0,lights_fragment_end:x0,lightprobes_pars_fragment:_0,logdepthbuf_fragment:v0,logdepthbuf_pars_fragment:y0,logdepthbuf_pars_vertex:M0,logdepthbuf_vertex:b0,map_fragment:S0,map_pars_fragment:E0,map_particle_fragment:w0,map_particle_pars_fragment:T0,metalnessmap_fragment:A0,metalnessmap_pars_fragment:R0,morphinstance_vertex:C0,morphcolor_vertex:P0,morphnormal_vertex:I0,morphtarget_pars_vertex:L0,morphtarget_vertex:F0,normal_fragment_begin:D0,normal_fragment_maps:N0,normal_pars_fragment:U0,normal_pars_vertex:B0,normal_vertex:O0,normalmap_pars_fragment:z0,clearcoat_normal_fragment_begin:k0,clearcoat_normal_fragment_maps:H0,clearcoat_pars_fragment:G0,iridescence_pars_fragment:V0,opaque_fragment:W0,packing:X0,premultiplied_alpha_fragment:q0,project_vertex:Y0,dithering_fragment:Z0,dithering_pars_fragment:J0,roughnessmap_fragment:$0,roughnessmap_pars_fragment:K0,shadowmap_pars_fragment:j0,shadowmap_pars_vertex:Q0,shadowmap_vertex:tm,shadowmask_pars_fragment:em,skinbase_vertex:nm,skinning_pars_vertex:im,skinning_vertex:sm,skinnormal_vertex:rm,specularmap_fragment:om,specularmap_pars_fragment:am,tonemapping_fragment:lm,tonemapping_pars_fragment:cm,transmission_fragment:hm,transmission_pars_fragment:um,uv_pars_fragment:dm,uv_pars_vertex:fm,uv_vertex:pm,worldpos_vertex:mm,background_vert:gm,background_frag:xm,backgroundCube_vert:_m,backgroundCube_frag:vm,cube_vert:ym,cube_frag:Mm,depth_vert:bm,depth_frag:Sm,distance_vert:Em,distance_frag:wm,equirect_vert:Tm,equirect_frag:Am,linedashed_vert:Rm,linedashed_frag:Cm,meshbasic_vert:Pm,meshbasic_frag:Im,meshlambert_vert:Lm,meshlambert_frag:Fm,meshmatcap_vert:Dm,meshmatcap_frag:Nm,meshnormal_vert:Um,meshnormal_frag:Bm,meshphong_vert:Om,meshphong_frag:zm,meshphysical_vert:km,meshphysical_frag:Hm,meshtoon_vert:Gm,meshtoon_frag:Vm,points_vert:Wm,points_frag:Xm,shadow_vert:qm,shadow_frag:Ym,sprite_vert:Zm,sprite_frag:Jm},Pt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},ii={basic:{uniforms:cn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:cn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new re(0)},envMapIntensity:{value:1}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:cn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:cn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:cn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new re(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:cn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:cn([Pt.points,Pt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:cn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:cn([Pt.common,Pt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:cn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:cn([Pt.sprite,Pt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:cn([Pt.common,Pt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:cn([Pt.lights,Pt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};ii.physical={uniforms:cn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};var xl={r:0,b:0,g:0},$m=new _e,Ld=new ae;Ld.set(-1,0,0,0,1,0,0,0,1);function Km(s,t,e,n,i,r){let o=new re(0),a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let M=y.backgroundBlurriness>0;b=t.get(b,M)}return b}function m(y){let b=!1,M=f(y);M===null?g(o,a):M&&M.isColor&&(g(M,1),b=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(y,b){let M=f(b);M&&(M.isCubeTexture||M.mapping===$r)?(c===void 0&&(c=new Me(new mn(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:is(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,S,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($m.makeRotationFromEuler(b.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ld),c.material.toneMapped=xe.getTransfer(M.colorSpace)!==we,(h!==M||d!==M.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Me(new Xe(2,2),new bn({name:"BackgroundMaterial",uniforms:is(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=xe.getTransfer(M.colorSpace)!==we,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,b){y.getRGB(xl,Wc(s)),e.buffers.color.setClear(xl.r,xl.g,xl.b,b,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),a=b,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:m,addToRenderList:v,dispose:p}}function jm(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(I,N,U,D,O){let X=!1,Y=d(I,D,U,N);r!==Y&&(r=Y,c(r.object)),X=f(I,D,U,O),X&&m(I,D,U,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(I,N,U,D),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function d(I,N,U,D){let O=D.wireframe===!0,X=n[N.id];X===void 0&&(X={},n[N.id]=X);let Y=I.isInstancedMesh===!0?I.id:0,it=X[Y];it===void 0&&(it={},X[Y]=it);let $=it[U.id];$===void 0&&($={},it[U.id]=$);let et=$[O];return et===void 0&&(et=u(l()),$[O]=et),et}function u(I){let N=[],U=[],D=[];for(let O=0;O<e;O++)N[O]=0,U[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:U,attributeDivisors:D,object:I,attributes:{},index:null}}function f(I,N,U,D){let O=r.attributes,X=N.attributes,Y=0,it=U.getAttributes();for(let $ in it)if(it[$].location>=0){let V=O[$],xt=X[$];if(xt===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(xt=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(xt=I.instanceColor)),V===void 0||V.attribute!==xt||xt&&V.data!==xt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==D}function m(I,N,U,D){let O={},X=N.attributes,Y=0,it=U.getAttributes();for(let $ in it)if(it[$].location>=0){let V=X[$];V===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(V=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(V=I.instanceColor));let xt={};xt.attribute=V,V&&V.data&&(xt.data=V.data),O[$]=xt,Y++}r.attributes=O,r.attributesNum=Y,r.index=D}function v(){let I=r.newAttributes;for(let N=0,U=I.length;N<U;N++)I[N]=0}function g(I){p(I,0)}function p(I,N){let U=r.newAttributes,D=r.enabledAttributes,O=r.attributeDivisors;U[I]=1,D[I]===0&&(s.enableVertexAttribArray(I),D[I]=1),O[I]!==N&&(s.vertexAttribDivisor(I,N),O[I]=N)}function y(){let I=r.newAttributes,N=r.enabledAttributes;for(let U=0,D=N.length;U<D;U++)N[U]!==I[U]&&(s.disableVertexAttribArray(U),N[U]=0)}function b(I,N,U,D,O,X,Y){Y===!0?s.vertexAttribIPointer(I,N,U,O,X):s.vertexAttribPointer(I,N,U,D,O,X)}function M(I,N,U,D){v();let O=D.attributes,X=U.getAttributes(),Y=N.defaultAttributeValues;for(let it in X){let $=X[it];if($.location>=0){let et=O[it];if(et===void 0&&(it==="instanceMatrix"&&I.instanceMatrix&&(et=I.instanceMatrix),it==="instanceColor"&&I.instanceColor&&(et=I.instanceColor)),et!==void 0){let V=et.normalized,xt=et.itemSize,ct=t.get(et);if(ct===void 0)continue;let Kt=ct.buffer,vt=ct.type,gt=ct.bytesPerElement,_=vt===s.INT||vt===s.UNSIGNED_INT||et.gpuType===La;if(et.isInterleavedBufferAttribute){let A=et.data,F=A.stride,k=et.offset;if(A.isInstancedInterleavedBuffer){for(let q=0;q<$.locationSize;q++)p($.location+q,A.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let q=0;q<$.locationSize;q++)g($.location+q);s.bindBuffer(s.ARRAY_BUFFER,Kt);for(let q=0;q<$.locationSize;q++)b($.location+q,xt/$.locationSize,vt,V,F*gt,(k+xt/$.locationSize*q)*gt,_)}else{if(et.isInstancedBufferAttribute){for(let A=0;A<$.locationSize;A++)p($.location+A,et.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let A=0;A<$.locationSize;A++)g($.location+A);s.bindBuffer(s.ARRAY_BUFFER,Kt);for(let A=0;A<$.locationSize;A++)b($.location+A,xt/$.locationSize,vt,V,xt*gt,xt/$.locationSize*A*gt,_)}}else if(Y!==void 0){let V=Y[it];if(V!==void 0)switch(V.length){case 2:s.vertexAttrib2fv($.location,V);break;case 3:s.vertexAttrib3fv($.location,V);break;case 4:s.vertexAttrib4fv($.location,V);break;default:s.vertexAttrib1fv($.location,V)}}}}y()}function w(){E();for(let I in n){let N=n[I];for(let U in N){let D=N[U];for(let O in D){let X=D[O];for(let Y in X)h(X[Y].object),delete X[Y];delete D[O]}}delete n[I]}}function S(I){if(n[I.id]===void 0)return;let N=n[I.id];for(let U in N){let D=N[U];for(let O in D){let X=D[O];for(let Y in X)h(X[Y].object),delete X[Y];delete D[O]}}delete n[I.id]}function P(I){for(let N in n){let U=n[N];for(let D in U){let O=U[D];if(O[I.id]===void 0)continue;let X=O[I.id];for(let Y in X)h(X[Y].object),delete X[Y];delete O[I.id]}}}function x(I){for(let N in n){let U=n[N],D=I.isInstancedMesh===!0?I.id:0,O=U[D];if(O!==void 0){for(let X in O){let Y=O[X];for(let it in Y)h(Y[it].object),delete Y[it];delete O[X]}delete U[D],Object.keys(U).length===0&&delete n[N]}}}function E(){R(),o=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function Qm(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function tg(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(P){return!(P!==Pn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let x=P===Wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==xn&&P!==Cn&&!x&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(ie("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),S=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:M,maxSamples:w,samples:S}}function eg(s){let t=this,e=null,n=0,i=!1,r=!1,o=new yn,a=new ae,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,p=s.get(d);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{let y=r?0:n,b=y*4,M=p.clippingState||null;l.value=M,M=h(m,u,b,f);for(let w=0;w!==b;++w)M[w]=e[w];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let v=d!==null?d.length:0,g=null;if(v!==0){if(g=l.value,m!==!0||g===null){let p=f+v*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,M=f;b!==v;++b,M+=4)o.copy(d[b]).applyMatrix4(y,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}var nr=4,ng=6,ig=20,sg=256,ro=new $s,hd=new re,Qc=null,th=0,eh=0,nh=!1,rg=new B,ss=new B,rs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=rg}=r;Qc=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Qc,th,eh),this._renderer.xr.enabled=nh,t.scissorTest=!1,er(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ui||t.mapping===ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qc=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Wn,format:Pn,colorSpace:Mr,depthBuffer:!1},i=ud(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ud(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=og(r)),this._blurMaterial=lg(r,t,e),this._ggxMaterial=ag(r,t,e)}return i}_compileMaterial(t){let e=new Me(new Ne,t);this._renderer.compile(e,ro)}_sceneToCubeUV(t,e,n,i,r){let l=new He(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(hd),d.toneMapping=Gn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Me(new mn,new We({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,p=!1,y=t.background;y?y.isColor&&(g.color.copy(y),t.background=null,p=!0):(g.color.copy(hd),p=!0);for(let b=0;b<6;b++){let M=b%3;M===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):M===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let w=this._cubeSize;er(i,M*w,b>2?w:0,w,w),d.setRenderTarget(i),p&&d.render(v,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ui||t.mapping===ns;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dd());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;er(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ro)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:m}=this,v=this._sizeLods[n],g=3*v*(n>m-nr?n-m+nr:0),p=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,er(r,g,p,3*v,2*v),i.setRenderTarget(r),i.render(a,ro),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,er(t,g,p,3*v,2*v),i.setRenderTarget(t),i.render(a,ro)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,i,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-nr?i-this._lodMax+nr:0),u=4*(this._cubeSize-h);er(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,ro)}};function og(s){let t=[],e=[],n=s,i=s-nr+1+ng;for(let r=0;r<i;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,m=new Float32Array(f*u*d),v=new Float32Array(f*u*d);for(let p=0;p<d;p++){let y=p%3*2/3-1,b=p>2?0:-1,M=[y,b,0,y+2/3,b,0,y+2/3,b+1,0,y,b,0,y+2/3,b+1,0,y,b+1,0];m.set(M,f*u*p);for(let w=0;w<u;w++){let S=h[w*2]*2-1,P=h[w*2+1]*2-1;p===0?ss.set(1,P,S):p===1?ss.set(-S,1,-P):p===2?ss.set(-S,P,1):p===3?ss.set(-1,P,-S):p===4?ss.set(-S,-1,P):ss.set(S,P,-1),ss.toArray(v,(p*u+w)*f)}}let g=new Ne;g.setAttribute("position",new an(m,f)),g.setAttribute("outputDirection",new an(v,f)),e.push(new Me(g,null)),n>nr&&n--}return{lodMeshes:e,sizeLods:t}}function ud(s,t,e){let n=new pn(s,t,e);return n.texture.mapping=$r,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function er(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function ag(s,t,e){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yl(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function lg(s,t,e){return new bn({name:"SphericalGaussianBlur",defines:{SAMPLES:ig,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:yl(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function dd(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function fd(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function yl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var vl=class extends pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Lr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new mn(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:ei});r.uniforms.tEquirect.value=e;let o=new Me(i,r),a=e.minFilter;return e.minFilter===Bi&&(e.minFilter=en),new wa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}};function cg(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ca||f===Pa)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let v=new vl(m.height);return v.fromEquirectangularTexture(s,u),t.set(u,v),u.addEventListener("dispose",c),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,m=f===Ca||f===Pa,v=f===Ui||f===ns;if(m||v){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new rs(s)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let y=u.image;return m&&y&&y.height>0||v&&y&&l(y)?(n===null&&(n=new rs(s)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===Ca?u.mapping=Ui:f===Pa&&(u.mapping=ns),u}function l(u){let f=0,m=6;for(let v=0;v<m;v++)u[v]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function hg(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Yi("WebGLRenderer: "+n+" extension not supported."),i}}}function ug(s,t,e,n){let i={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete i[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],s.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,m=d.attributes.position,v=0;if(m===void 0)return;if(f!==null){let y=f.array;v=f.version;for(let b=0,M=y.length;b<M;b+=3){let w=y[b+0],S=y[b+1],P=y[b+2];u.push(w,S,S,P,P,w)}}else{let y=m.array;v=m.version;for(let b=0,M=y.length/3-1;b<M;b+=3){let w=b+0,S=b+1,P=b+2;u.push(w,S,S,P,P,w)}}let g=new(m.count>=65535?Rr:Ar)(u,1);g.version=v;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function dg(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let v=0;for(let g=0;g<f;g++)v+=u[g];e.update(v,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function fg(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:ne("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function pg(s,t,e){let n=new WeakMap,i=new De;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let E=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],b=0;f===!0&&(b=1),m===!0&&(b=2),v===!0&&(b=3);let M=a.attributes.position.count*b,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let S=new Float32Array(M*w*4*d),P=new Tr(S,M,w,d);P.type=Cn,P.needsUpdate=!0;let x=b*4;for(let R=0;R<d;R++){let I=g[R],N=p[R],U=y[R],D=M*w*4*R;for(let O=0;O<I.count;O++){let X=O*x;f===!0&&(i.fromBufferAttribute(I,O),S[D+X+0]=i.x,S[D+X+1]=i.y,S[D+X+2]=i.z,S[D+X+3]=0),m===!0&&(i.fromBufferAttribute(N,O),S[D+X+4]=i.x,S[D+X+5]=i.y,S[D+X+6]=i.z,S[D+X+7]=0),v===!0&&(i.fromBufferAttribute(U,O),S[D+X+8]=i.x,S[D+X+9]=i.y,S[D+X+10]=i.z,S[D+X+11]=U.itemSize===4?i.w:1)}}u={count:d,texture:P,size:new _t(M,w)},n.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function mg(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var gg={[Rc]:"LINEAR_TONE_MAPPING",[Cc]:"REINHARD_TONE_MAPPING",[Pc]:"CINEON_TONE_MAPPING",[js]:"ACES_FILMIC_TONE_MAPPING",[Lc]:"AGX_TONE_MAPPING",[Fc]:"NEUTRAL_TONE_MAPPING",[Ic]:"CUSTOM_TONE_MAPPING"};function xg(s,t,e,n,i,r){let o=new pn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ne;c.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new he([0,2,0,0,2,0],2));let h=new da({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Me(c,h),u=new $s(-1,1,1,-1,0,1),f=null,m=null,v=!1,g,p=null,y=[],b=!1;this.setSize=function(M,w){o.setSize(M,w),a!==null&&a.setSize(M,w),l!==null&&l.setSize(M,w);for(let S=0;S<y.length;S++){let P=y[S];P.setSize&&P.setSize(M,w)}},this.setEffects=function(M){y=M,b=y.length>0&&y[0].isRenderPass===!0;let w=o.width,S=o.height;y.length>0&&a===null&&(a=new pn(w,S,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),l=new pn(w,S,{type:Wn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<y.length;P++){let x=y[P];x.setSize&&x.setSize(w,S)}},this.begin=function(M,w){if(v||M.toneMapping===Gn&&y.length===0)return!1;if(p=w,w!==null){let S=w.width,P=w.height;(o.width!==S||o.height!==P)&&this.setSize(S,P)}return b===!1&&M.setRenderTarget(o),g=M.toneMapping,M.toneMapping=Gn,!0},this.hasRenderPass=function(){return b},this.end=function(M,w){M.toneMapping=g,v=!0;let S=o,P=a;for(let x=0;x<y.length;x++){let E=y[x];E.enabled!==!1&&(E.render(M,P,S,w),E.needsSwap!==!1&&(S=P,P=P===a?l:a))}if(f!==M.outputColorSpace||m!==M.toneMapping){f=M.outputColorSpace,m=M.toneMapping,h.defines={},xe.getTransfer(f)===we&&(h.defines.SRGB_TRANSFER="");let x=gg[m];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,M.setRenderTarget(p),M.render(d,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Fd=new dn,rh=new Ci(1,1),Dd=new Tr,Nd=new sa,Ud=new Lr,pd=[],md=[],gd=new Float32Array(16),xd=new Float32Array(9),_d=new Float32Array(4);function sr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=pd[i];if(r===void 0&&(r=new Float32Array(i),pd[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function qe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ye(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ml(s,t){let e=md[t];e===void 0&&(e=new Int32Array(t),md[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function _g(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function vg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2fv(this.addr,t),Ye(e,t)}}function yg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;s.uniform3fv(this.addr,t),Ye(e,t)}}function Mg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4fv(this.addr,t),Ye(e,t)}}function bg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;_d.set(n),s.uniformMatrix2fv(this.addr,!1,_d),Ye(e,n)}}function Sg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;xd.set(n),s.uniformMatrix3fv(this.addr,!1,xd),Ye(e,n)}}function Eg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;gd.set(n),s.uniformMatrix4fv(this.addr,!1,gd),Ye(e,n)}}function wg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Tg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2iv(this.addr,t),Ye(e,t)}}function Ag(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;s.uniform3iv(this.addr,t),Ye(e,t)}}function Rg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4iv(this.addr,t),Ye(e,t)}}function Cg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Pg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2uiv(this.addr,t),Ye(e,t)}}function Ig(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;s.uniform3uiv(this.addr,t),Ye(e,t)}}function Lg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4uiv(this.addr,t),Ye(e,t)}}function Fg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(rh.compareFunction=e.isReversedDepthBuffer()?gl:ml,r=rh):r=Fd,e.setTexture2D(t||r,i)}function Dg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Nd,i)}function Ng(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ud,i)}function Ug(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Dd,i)}function Bg(s){switch(s){case 5126:return _g;case 35664:return vg;case 35665:return yg;case 35666:return Mg;case 35674:return bg;case 35675:return Sg;case 35676:return Eg;case 5124:case 35670:return wg;case 35667:case 35671:return Tg;case 35668:case 35672:return Ag;case 35669:case 35673:return Rg;case 5125:return Cg;case 36294:return Pg;case 36295:return Ig;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Ug}}function Og(s,t){s.uniform1fv(this.addr,t)}function zg(s,t){let e=sr(t,this.size,2);s.uniform2fv(this.addr,e)}function kg(s,t){let e=sr(t,this.size,3);s.uniform3fv(this.addr,e)}function Hg(s,t){let e=sr(t,this.size,4);s.uniform4fv(this.addr,e)}function Gg(s,t){let e=sr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Vg(s,t){let e=sr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Wg(s,t){let e=sr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Xg(s,t){s.uniform1iv(this.addr,t)}function qg(s,t){s.uniform2iv(this.addr,t)}function Yg(s,t){s.uniform3iv(this.addr,t)}function Zg(s,t){s.uniform4iv(this.addr,t)}function Jg(s,t){s.uniform1uiv(this.addr,t)}function $g(s,t){s.uniform2uiv(this.addr,t)}function Kg(s,t){s.uniform3uiv(this.addr,t)}function jg(s,t){s.uniform4uiv(this.addr,t)}function Qg(s,t,e){let n=this.cache,i=t.length,r=Ml(e,i);qe(n,r)||(s.uniform1iv(this.addr,r),Ye(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=rh:o=Fd;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function tx(s,t,e){let n=this.cache,i=t.length,r=Ml(e,i);qe(n,r)||(s.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Nd,r[o])}function ex(s,t,e){let n=this.cache,i=t.length,r=Ml(e,i);qe(n,r)||(s.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Ud,r[o])}function nx(s,t,e){let n=this.cache,i=t.length,r=Ml(e,i);qe(n,r)||(s.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Dd,r[o])}function ix(s){switch(s){case 5126:return Og;case 35664:return zg;case 35665:return kg;case 35666:return Hg;case 35674:return Gg;case 35675:return Vg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return Zg;case 5125:return Jg;case 36294:return $g;case 36295:return Kg;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return ex;case 36289:case 36303:case 36311:case 36292:return nx}}var oh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Bg(e.type)}},ah=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ix(e.type)}},lh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},ih=/(\w+)(\])?(\[|\.)?/g;function vd(s,t){s.seq.push(t),s.map[t.id]=t}function sx(s,t,e){let n=s.name,i=n.length;for(ih.lastIndex=0;;){let r=ih.exec(n),o=ih.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){vd(e,c===void 0?new oh(a,s,t):new ah(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new lh(a),vd(e,d)),e=d}}}var ir=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);sx(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function yd(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var rx=37297,ox=0;function ax(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Md=new ae;function lx(s){xe._getMatrix(Md,xe.workingColorSpace,s);let t=`mat3( ${Md.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(s)){case br:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function bd(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+ax(s.getShaderSource(t),a)}else return r}function cx(s,t){let e=lx(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var hx={[Rc]:"Linear",[Cc]:"Reinhard",[Pc]:"Cineon",[js]:"ACESFilmic",[Lc]:"AgX",[Fc]:"Neutral",[Ic]:"Custom"};function ux(s,t){let e=hx[t];return e===void 0?(ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var _l=new B;function dx(){xe.getLuminanceCoefficients(_l);let s=_l.x.toFixed(4),t=_l.y.toFixed(4),e=_l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function px(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function mx(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ao(s){return s!==""}function Sd(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ed(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var gx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ch(s){return s.replace(gx,_x)}var xx=new Map;function _x(s,t){let e=fe[t];if(e===void 0){let n=xx.get(t);if(n!==void 0)e=fe[n],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ch(e)}var vx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wd(s){return s.replace(vx,yx)}function yx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Td(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var Mx={[Di]:"SHADOWMAP_TYPE_PCF",[Ks]:"SHADOWMAP_TYPE_VSM"};function bx(s){return Mx[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Sx={[Ui]:"ENVMAP_TYPE_CUBE",[ns]:"ENVMAP_TYPE_CUBE",[$r]:"ENVMAP_TYPE_CUBE_UV"};function Ex(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Sx[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var wx={[ns]:"ENVMAP_MODE_REFRACTION"};function Tx(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":wx[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ax={[Ra]:"ENVMAP_BLENDING_MULTIPLY",[zu]:"ENVMAP_BLENDING_MIX",[ku]:"ENVMAP_BLENDING_ADD"};function Rx(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Ax[s.combine]||"ENVMAP_BLENDING_NONE"}function Cx(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Px(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=bx(e),c=Ex(e),h=Tx(e),d=Rx(e),u=Cx(e),f=fx(e),m=px(r),v=i.createProgram(),g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ao).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ao).join(`
`),p.length>0&&(p+=`
`)):(g=[Td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),p=[Td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?fe.tonemapping_pars_fragment:"",e.toneMapping!==Gn?ux("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,cx("linearToOutputTexel",e.outputColorSpace),dx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ao).join(`
`)),o=ch(o),o=Sd(o,e),o=Ed(o,e),a=ch(a),a=Sd(a,e),a=Ed(a,e),o=wd(o),a=wd(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=y+g+o,M=y+p+a,w=yd(i,i.VERTEX_SHADER,b),S=yd(i,i.FRAGMENT_SHADER,M);i.attachShader(v,w),i.attachShader(v,S),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function P(I){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(v)||"",U=i.getShaderInfoLog(w)||"",D=i.getShaderInfoLog(S)||"",O=N.trim(),X=U.trim(),Y=D.trim(),it=!0,$=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(it=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,w,S);else{let et=bd(i,w,"vertex"),V=bd(i,S,"fragment");ne("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+et+`
`+V)}else O!==""?ie("WebGLProgram: Program Info Log:",O):(X===""||Y==="")&&($=!1);$&&(I.diagnostics={runnable:it,programLog:O,vertexShader:{log:X,prefix:g},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(w),i.deleteShader(S),x=new ir(i,v),E=mx(i,v)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(v,rx)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ox++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=S,this}var Ix=0,hh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new uh(t),e.set(t,n)),n}},uh=class{constructor(t){this.id=Ix++,this.code=t,this.usedTimes=0}};function Lx(s){return s===zi||s===no||s===io}function Fx(s,t,e,n,i,r){let o=new Os,a=new hh,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,E,R,I,N,U){let D=I.fog,O=N.geometry,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,it=t.get(x.envMap||X,Y),$=it&&it.mapping===$r?it.image.height:null,et=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&ie("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let V=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,xt=V!==void 0?V.length:0,ct=0;O.morphAttributes.position!==void 0&&(ct=1),O.morphAttributes.normal!==void 0&&(ct=2),O.morphAttributes.color!==void 0&&(ct=3);let Kt,vt,gt,_;if(et){let Pe=ii[et];Kt=Pe.vertexShader,vt=Pe.fragmentShader}else{Kt=x.vertexShader,vt=x.fragmentShader;let Pe=a.getVertexShaderStage(x),Se=a.getFragmentShaderStage(x);a.update(x,Pe,Se),gt=Pe.id,_=Se.id}let A=s.getRenderTarget(),F=s.state.buffers.depth.getReversed(),k=N.isInstancedMesh===!0,q=N.isBatchedMesh===!0,ft=!!x.map,Zt=!!x.matcap,Q=!!it,ut=!!x.aoMap,dt=!!x.lightMap,ht=!!x.bumpMap&&x.wireframe===!1,yt=!!x.normalMap,Xt=!!x.displacementMap,Gt=!!x.emissiveMap,jt=!!x.metalnessMap,ce=!!x.roughnessMap,z=x.anisotropy>0,be=x.clearcoat>0,me=x.dispersion>0,L=x.retroreflectivity>0,T=x.iridescence>0,W=x.sheen>0,j=x.transmission>0,nt=z&&!!x.anisotropyMap,Mt=be&&!!x.clearcoatMap,bt=be&&!!x.clearcoatNormalMap,st=be&&!!x.clearcoatRoughnessMap,lt=T&&!!x.iridescenceMap,wt=T&&!!x.iridescenceThicknessMap,qt=W&&!!x.sheenColorMap,Ct=W&&!!x.sheenRoughnessMap,Tt=!!x.specularMap,Yt=!!x.specularColorMap,ee=!!x.specularIntensityMap,ue=j&&!!x.transmissionMap,G=j&&!!x.thicknessMap,At=!!x.gradientMap,at=!!x.alphaMap,Rt=x.alphaTest>0,Dt=!!x.alphaHash,pt=!!x.extensions,Jt=Gn;x.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Jt=s.toneMapping);let Vt={shaderID:et,shaderType:x.type,shaderName:x.name,vertexShader:Kt,fragmentShader:vt,defines:x.defines,customVertexShaderID:gt,customFragmentShaderID:_,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:q,batchingColor:q&&N._colorsTexture!==null,instancing:k,instancingColor:k&&N.instanceColor!==null,instancingMorph:k&&N.morphTexture!==null,outputColorSpace:A===null?s.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:xe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ft,matcap:Zt,envMap:Q,envMapMode:Q&&it.mapping,envMapCubeUVHeight:$,aoMap:ut,lightMap:dt,bumpMap:ht,normalMap:yt,displacementMap:Xt,emissiveMap:Gt,normalMapObjectSpace:yt&&x.normalMapType===Vu,normalMapTangentSpace:yt&&x.normalMapType===so,packedNormalMap:yt&&x.normalMapType===so&&Lx(x.normalMap.format),metalnessMap:jt,roughnessMap:ce,anisotropy:z,anisotropyMap:nt,clearcoat:be,clearcoatMap:Mt,clearcoatNormalMap:bt,clearcoatRoughnessMap:st,dispersion:me,retroreflection:L,iridescence:T,iridescenceMap:lt,iridescenceThicknessMap:wt,sheen:W,sheenColorMap:qt,sheenRoughnessMap:Ct,specularMap:Tt,specularColorMap:Yt,specularIntensityMap:ee,transmission:j,transmissionMap:ue,thicknessMap:G,gradientMap:At,opaque:x.transparent===!1&&x.blending===fi&&x.alphaToCoverage===!1,alphaMap:at,alphaTest:Rt,alphaHash:Dt,combine:x.combine,mapUv:ft&&m(x.map.channel),aoMapUv:ut&&m(x.aoMap.channel),lightMapUv:dt&&m(x.lightMap.channel),bumpMapUv:ht&&m(x.bumpMap.channel),normalMapUv:yt&&m(x.normalMap.channel),displacementMapUv:Xt&&m(x.displacementMap.channel),emissiveMapUv:Gt&&m(x.emissiveMap.channel),metalnessMapUv:jt&&m(x.metalnessMap.channel),roughnessMapUv:ce&&m(x.roughnessMap.channel),anisotropyMapUv:nt&&m(x.anisotropyMap.channel),clearcoatMapUv:Mt&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:bt&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&m(x.sheenRoughnessMap.channel),specularMapUv:Tt&&m(x.specularMap.channel),specularColorMapUv:Yt&&m(x.specularColorMap.channel),specularIntensityMapUv:ee&&m(x.specularIntensityMap.channel),transmissionMapUv:ue&&m(x.transmissionMap.channel),thicknessMapUv:G&&m(x.thicknessMap.channel),alphaMapUv:at&&m(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(yt||z),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!O.attributes.uv&&(ft||at),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&yt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:F,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:ct,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Jt,decodeVideoTexture:ft&&x.map.isVideoTexture===!0&&xe.getTransfer(x.map.colorSpace)===we,decodeVideoTextureEmissive:Gt&&x.emissiveMap.isVideoTexture===!0&&xe.getTransfer(x.emissiveMap.colorSpace)===we,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===gn,flipSided:x.side===nn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:pt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&x.extensions.multiDraw===!0||q)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function g(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)E.push(R),E.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(p(E,x),y(E,x),E.push(s.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function p(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function y(x,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function b(x){let E=f[x.type],R;if(E){let I=ii[E];R=ad.clone(I.uniforms)}else R=x.uniforms;return R}function M(x,E){let R=h.get(E);return R!==void 0?++R.usedTimes:(R=new Px(s,E,x,i),c.push(R),h.set(E,R)),R}function w(x){if(--x.usedTimes===0){let E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){a.remove(x)}function P(){a.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:b,acquireProgram:M,releaseProgram:w,releaseShaderCache:S,programs:c,dispose:P}}function Dx(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Nx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Ad(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Rd(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,v,g,p){let y=s[t];return y===void 0?(y={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:g,group:p},s[t]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=m,y.materialVariant=o(u),y.groupOrder=v,y.renderOrder=u.renderOrder,y.z=g,y.group=p),t++,y}function l(u,f,m,v,g,p,y){y.reversedDepth===!0&&(g=-g);let b=a(u,f,m,v,g,p);m.transmission>0?n.push(b):m.transparent===!0?i.push(b):e.push(b)}function c(u,f,m,v,g,p){let y=a(u,f,m,v,g,p);m.transmission>0?n.unshift(y):m.transparent===!0?i.unshift(y):e.unshift(y)}function h(u,f){e.length>1&&e.sort(u||Nx),n.length>1&&n.sort(f||Ad),i.length>1&&i.sort(f||Ad)}function d(){for(let u=t,f=s.length;u<f;u++){let m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function Ux(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Rd,s.set(n,[o])):i>=r.length?(o=new Rd,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Bx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new re};break;case"SpotLight":e={position:new B,direction:new B,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new B,halfWidth:new B,halfHeight:new B};break}return s[t.id]=e,e}}}function Ox(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var zx=0;function kx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Hx(s){let t=new Bx,e=Ox(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let i=new B,r=new _e,o=new _e;function a(c){let h=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,y=0,b=0,M=0,w=0,S=0,P=0,x=0,E=0,R=0;c.sort(kx);for(let N=0,U=c.length;N<U;N++){let D=c[N],O=D.color,X=D.intensity,Y=D.distance,it=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===zi?it=D.shadow.map.texture:it=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=O.r*X,d+=O.g*X,u+=O.b*X;else if(D.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(D.sh.coefficients[$],X);R++}else if(D.isSunLight){let $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let et=D.shadow,V=e.get(D);V.shadowIntensity=et.intensity,V.shadowBias=et.bias,V.shadowNormalBias=et.normalBias,V.shadowRadius=et.radius,V.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),n.sunShadow[m]=V,n.sunShadowMap[m]=it;let xt=et.getViewportCount();for(let ct=0;ct<xt;ct++)n.sunShadowMatrix[v+ct]=et.getMatrix(ct),n.sunShadowCascade[v+ct]=et._cascadeData[ct];v+=xt,m++}n.sun[f]=$,f++}else if(D.isDirectionalLight){let $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let et=D.shadow,V=e.get(D);V.shadowIntensity=et.intensity,V.shadowBias=et.bias,V.shadowNormalBias=et.normalBias,V.shadowRadius=et.radius,V.shadowMapSize=et.mapSize,n.directionalShadow[g]=V,n.directionalShadowMap[g]=it,n.directionalShadowMatrix[g]=D.shadow.matrix,w++}n.directional[g]=$,g++}else if(D.isSpotLight){let $=t.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(O).multiplyScalar(X),$.distance=Y,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,n.spot[y]=$;let et=D.shadow;if(D.map&&(n.spotLightMap[x]=D.map,x++,et.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[y]=et.matrix,D.castShadow){let V=e.get(D);V.shadowIntensity=et.intensity,V.shadowBias=et.bias,V.shadowNormalBias=et.normalBias,V.shadowRadius=et.radius,V.shadowMapSize=et.mapSize,n.spotShadow[y]=V,n.spotShadowMap[y]=it,P++}y++}else if(D.isRectAreaLight){let $=t.get(D);$.color.copy(O).multiplyScalar(X),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),n.rectArea[b]=$,b++}else if(D.isPointLight){let $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){let et=D.shadow,V=e.get(D);V.shadowIntensity=et.intensity,V.shadowBias=et.bias,V.shadowNormalBias=et.normalBias,V.shadowRadius=et.radius,V.shadowMapSize=et.mapSize,V.shadowCameraNear=et.camera.near,V.shadowCameraFar=et.camera.far,n.pointShadow[p]=V,n.pointShadowMap[p]=it,n.pointShadowMatrix[p]=D.shadow.matrix,S++}n.point[p]=$,p++}else if(D.isHemisphereLight){let $=t.get(D);$.skyColor.copy(D.color).multiplyScalar(X),$.groundColor.copy(D.groundColor).multiplyScalar(X),n.hemi[M]=$,M++}}b>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.sunLength!==f||I.directionalLength!==g||I.pointLength!==p||I.spotLength!==y||I.rectAreaLength!==b||I.hemiLength!==M||I.numSunShadows!==m||I.numDirectionalShadows!==w||I.numPointShadows!==S||I.numSpotShadows!==P||I.numSpotMaps!==x||I.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=g,n.spot.length=y,n.rectArea.length=b,n.point.length=p,n.hemi.length=M,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+x-E,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,I.sunLength=f,I.directionalLength=g,I.pointLength=p,I.spotLength=y,I.rectAreaLength=b,I.hemiLength=M,I.numSunShadows=m,I.numDirectionalShadows=w,I.numPointShadows=S,I.numSpotShadows=P,I.numSpotMaps=x,I.numLightProbes=R,n.version=zx++)}function l(c,h){let d=0,u=0,f=0,m=0,v=0,g=0,p=h.matrixWorldInverse;for(let y=0,b=c.length;y<b;y++){let M=c[y];if(M.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),d++}else if(M.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(p),u++}else if(M.isSpotLight){let w=n.spot[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(p),m++}else if(M.isRectAreaLight){let w=n.rectArea[v];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let w=n.hemi[g];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Cd(s){let t=new Hx(s),e=[],n=[],i=[];function r(u){d.camera=u,e.length=0,n.length=0,i.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Gx(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Cd(s),t.set(i,[a])):r>=o.length?(a=new Cd(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wx=`uniform sampler2D shadow_pass;
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
}`,Xx=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],qx=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Pd=new _e,oo=new B,sh=new B;function Yx(s,t,e){let n=new Gs,i=new _t,r=new _t,o=new De,a=new fa,l=new pa,c={},h=e.maxTextureSize,d={[Hn]:nn,[nn]:Hn,[gn]:gn},u=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:Vx,fragmentShader:Wx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ne;m.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Me(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Di;let p=this.type;this.render=function(S,P,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===yu&&(ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Di);let E=s.getRenderTarget(),R=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),N=s.state;N.setBlending(ei),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let U=p!==this.type;U&&P.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(O=>O.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,O=S.length;D<O;D++){let X=S[D],Y=X.shadow;if(Y===void 0){ie("WebGLShadowMap:",X,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);let it=Y.getFrameExtents();i.multiply(it),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/it.x),i.x=r.x*it.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/it.y),i.y=r.y*it.y,Y.mapSize.y=r.y));let $=s.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=$,Y.map===null||U===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Ks){if(X.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new pn(i.x,i.y,{format:zi,type:Wn,minFilter:en,magFilter:en,generateMipmaps:!1}),Y.map.texture.name=X.name+".shadowMap",Y.map.depthTexture=new Ci(i.x,i.y,Cn),Y.map.depthTexture.name=X.name+".shadowMapDepth",Y.map.depthTexture.format=$n,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=$e,Y.map.depthTexture.magFilter=$e}else X.isPointLight?(Y.map=new vl(i.x),Y.map.depthTexture=new ra(i.x,Vn)):(Y.map=new pn(i.x,i.y),Y.map.depthTexture=new Ci(i.x,i.y,Vn)),Y.map.depthTexture.name=X.name+".shadowMap",Y.map.depthTexture.format=$n,this.type===Di?(Y.map.depthTexture.compareFunction=$?gl:ml,Y.map.depthTexture.minFilter=en,Y.map.depthTexture.magFilter=en):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=$e,Y.map.depthTexture.magFilter=$e);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==i.x||Y.map.height!==i.y)&&Y.map.setSize(i.x,i.y);let et=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();X.isPointLight!==!0&&Y.updateMatrices(X,x);for(let V=0;V<et;V++){let xt=Y.getCamera(V);if(X.isPointLight){let ct=Y.camera,Kt=Y.matrix,vt=X.distance||ct.far;vt!==ct.far&&(ct.far=vt,ct.updateProjectionMatrix()),oo.setFromMatrixPosition(X.matrixWorld),ct.position.copy(oo),sh.copy(ct.position),sh.add(Xx[V]),ct.up.copy(qx[V]),ct.lookAt(sh),ct.updateMatrixWorld(),Kt.makeTranslation(-oo.x,-oo.y,-oo.z),Pd.multiplyMatrices(ct.projectionMatrix,ct.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Pd,ct.coordinateSystem,ct.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,V),s.clear();else{V===0&&(s.setRenderTarget(Y.map),s.clear());let ct=Y.getViewport(V);o.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),N.viewport(o)}n=Y.getFrustum(V),M(P,x,xt,X,this.type)}Y.isPointLightShadow!==!0&&this.type===Ks&&y(Y,x),Y.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(E,R,I)};function y(S,P){let x=t.update(v);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new pn(i.x,i.y,{format:zi,type:Wn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(P,null,x,u,v,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(P,null,x,f,v,null)}function b(S,P,x,E){let R=null,I=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)R=I;else if(R=x.isPointLight===!0?l:a,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let N=R.uuid,U=P.uuid,D=c[N];D===void 0&&(D={},c[N]=D);let O=D[U];O===void 0&&(O=R.clone(),D[U]=O,P.addEventListener("dispose",w)),R=O}if(R.visible=P.visible,R.wireframe=P.wireframe,E===Ks?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:d[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=s.properties.get(R);N.light=x}return R}function M(S,P,x,E,R){if(S.visible===!1)return;if(S.layers.test(P.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===Ks)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let U=t.update(S),D=S.material;if(Array.isArray(D)){let O=U.groups;for(let X=0,Y=O.length;X<Y;X++){let it=O[X],$=D[it.materialIndex];if($&&$.visible){let et=b(S,$,E,R);S.onBeforeShadow(s,S,P,x,U,et,it),s.renderBufferDirect(x,null,U,et,S,it),S.onAfterShadow(s,S,P,x,U,et,it)}}}else if(D.visible){let O=b(S,D,E,R);S.onBeforeShadow(s,S,P,x,U,O,null),s.renderBufferDirect(x,null,U,O,S,null),S.onAfterShadow(s,S,P,x,U,O,null)}}let N=S.children;for(let U=0,D=N.length;U<D;U++)M(N[U],P,x,E,R)}function w(S){S.target.removeEventListener("dispose",w);for(let x in c){let E=c[x],R=S.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function Zx(s,t){function e(){let G=!1,At=new De,at=null,Rt=new De(0,0,0,0);return{setMask:function(Dt){at!==Dt&&!G&&(s.colorMask(Dt,Dt,Dt,Dt),at=Dt)},setLocked:function(Dt){G=Dt},setClear:function(Dt,pt,Jt,Vt,Pe){Pe===!0&&(Dt*=Vt,pt*=Vt,Jt*=Vt),At.set(Dt,pt,Jt,Vt),Rt.equals(At)===!1&&(s.clearColor(Dt,pt,Jt,Vt),Rt.copy(At))},reset:function(){G=!1,at=null,Rt.set(-1,0,0,0)}}}function n(){let G=!1,At=!1,at=null,Rt=null,Dt=null;return{setReversed:function(pt){if(At!==pt){let Jt=t.get("EXT_clip_control");pt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),At=pt;let Vt=Dt;Dt=null,this.setClear(Vt)}},getReversed:function(){return At},setTest:function(pt){pt?A(s.DEPTH_TEST):F(s.DEPTH_TEST)},setMask:function(pt){at!==pt&&!G&&(s.depthMask(pt),at=pt)},setFunc:function(pt){if(At&&(pt=td[pt]),Rt!==pt){switch(pt){case Yo:s.depthFunc(s.NEVER);break;case Zo:s.depthFunc(s.ALWAYS);break;case Jo:s.depthFunc(s.LESS);break;case Fs:s.depthFunc(s.LEQUAL);break;case $o:s.depthFunc(s.EQUAL);break;case Ko:s.depthFunc(s.GEQUAL);break;case jo:s.depthFunc(s.GREATER);break;case Qo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Rt=pt}},setLocked:function(pt){G=pt},setClear:function(pt){Dt!==pt&&(Dt=pt,At&&(pt=1-pt),s.clearDepth(pt))},reset:function(){G=!1,at=null,Rt=null,Dt=null,At=!1}}}function i(){let G=!1,At=null,at=null,Rt=null,Dt=null,pt=null,Jt=null,Vt=null,Pe=null;return{setTest:function(Se){G||(Se?A(s.STENCIL_TEST):F(s.STENCIL_TEST))},setMask:function(Se){At!==Se&&!G&&(s.stencilMask(Se),At=Se)},setFunc:function(Se,Nn,Xn){(at!==Se||Rt!==Nn||Dt!==Xn)&&(s.stencilFunc(Se,Nn,Xn),at=Se,Rt=Nn,Dt=Xn)},setOp:function(Se,Nn,Xn){(pt!==Se||Jt!==Nn||Vt!==Xn)&&(s.stencilOp(Se,Nn,Xn),pt=Se,Jt=Nn,Vt=Xn)},setLocked:function(Se){G=Se},setClear:function(Se){Pe!==Se&&(s.clearStencil(Se),Pe=Se)},reset:function(){G=!1,At=null,at=null,Rt=null,Dt=null,pt=null,Jt=null,Vt=null,Pe=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],v=null,g=!1,p=null,y=null,b=null,M=null,w=null,S=null,P=null,x=new re(0,0,0),E=0,R=!1,I=null,N=null,U=null,D=null,O=null,X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,it=0,$=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec($)[1]),Y=it>=1):$.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Y=it>=2);let et=null,V={},xt=s.getParameter(s.SCISSOR_BOX),ct=s.getParameter(s.VIEWPORT),Kt=new De().fromArray(xt),vt=new De().fromArray(ct);function gt(G,At,at,Rt){let Dt=new Uint8Array(4),pt=s.createTexture();s.bindTexture(G,pt),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Jt=0;Jt<at;Jt++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(At,0,s.RGBA,1,1,Rt,0,s.RGBA,s.UNSIGNED_BYTE,Dt):s.texImage2D(At+Jt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Dt);return pt}let _={};_[s.TEXTURE_2D]=gt(s.TEXTURE_2D,s.TEXTURE_2D,1),_[s.TEXTURE_CUBE_MAP]=gt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_[s.TEXTURE_2D_ARRAY]=gt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_[s.TEXTURE_3D]=gt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),A(s.DEPTH_TEST),o.setFunc(Fs),ht(!1),yt(Sc),A(s.CULL_FACE),ut(ei);function A(G){h[G]!==!0&&(s.enable(G),h[G]=!0)}function F(G){h[G]!==!1&&(s.disable(G),h[G]=!1)}function k(G,At){return u[G]!==At?(s.bindFramebuffer(G,At),u[G]=At,G===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=At),G===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=At),!0):!1}function q(G,At){let at=m,Rt=!1;if(G){at=f.get(At),at===void 0&&(at=[],f.set(At,at));let Dt=G.textures;if(at.length!==Dt.length||at[0]!==s.COLOR_ATTACHMENT0){for(let pt=0,Jt=Dt.length;pt<Jt;pt++)at[pt]=s.COLOR_ATTACHMENT0+pt;at.length=Dt.length,Rt=!0}}else at[0]!==s.BACK&&(at[0]=s.BACK,Rt=!0);Rt&&s.drawBuffers(at)}function ft(G){return v!==G?(s.useProgram(G),v=G,!0):!1}let Zt={[es]:s.FUNC_ADD,[bu]:s.FUNC_SUBTRACT,[Su]:s.FUNC_REVERSE_SUBTRACT};Zt[Eu]=s.MIN,Zt[wu]=s.MAX;let Q={[Tu]:s.ZERO,[Au]:s.ONE,[Ru]:s.SRC_COLOR,[Tc]:s.SRC_ALPHA,[Du]:s.SRC_ALPHA_SATURATE,[Lu]:s.DST_COLOR,[Pu]:s.DST_ALPHA,[Cu]:s.ONE_MINUS_SRC_COLOR,[Ac]:s.ONE_MINUS_SRC_ALPHA,[Fu]:s.ONE_MINUS_DST_COLOR,[Iu]:s.ONE_MINUS_DST_ALPHA,[Nu]:s.CONSTANT_COLOR,[Uu]:s.ONE_MINUS_CONSTANT_COLOR,[Bu]:s.CONSTANT_ALPHA,[Ou]:s.ONE_MINUS_CONSTANT_ALPHA};function ut(G,At,at,Rt,Dt,pt,Jt,Vt,Pe,Se){if(G===ei){g===!0&&(F(s.BLEND),g=!1);return}if(g===!1&&(A(s.BLEND),g=!0),G!==Mu){if(G!==p||Se!==R){if((y!==es||w!==es)&&(s.blendEquation(s.FUNC_ADD),y=es,w=es),Se)switch(G){case fi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ni:s.blendFunc(s.ONE,s.ONE);break;case Ec:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ne("WebGLState: Invalid blending: ",G);break}else switch(G){case fi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ni:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ec:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wc:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",G);break}b=null,M=null,S=null,P=null,x.set(0,0,0),E=0,p=G,R=Se}return}Dt=Dt||At,pt=pt||at,Jt=Jt||Rt,(At!==y||Dt!==w)&&(s.blendEquationSeparate(Zt[At],Zt[Dt]),y=At,w=Dt),(at!==b||Rt!==M||pt!==S||Jt!==P)&&(s.blendFuncSeparate(Q[at],Q[Rt],Q[pt],Q[Jt]),b=at,M=Rt,S=pt,P=Jt),(Vt.equals(x)===!1||Pe!==E)&&(s.blendColor(Vt.r,Vt.g,Vt.b,Pe),x.copy(Vt),E=Pe),p=G,R=!1}function dt(G,At){G.side===gn?F(s.CULL_FACE):A(s.CULL_FACE);let at=G.side===nn;At&&(at=!at),ht(at),G.blending===fi&&G.transparent===!1?ut(ei):ut(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let Rt=G.stencilWrite;a.setTest(Rt),Rt&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Gt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?A(s.SAMPLE_ALPHA_TO_COVERAGE):F(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(G){I!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),I=G)}function yt(G){G!==_u?(A(s.CULL_FACE),G!==N&&(G===Sc?s.cullFace(s.BACK):G===vu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):F(s.CULL_FACE),N=G}function Xt(G){G!==U&&(Y&&s.lineWidth(G),U=G)}function Gt(G,At,at){G?(A(s.POLYGON_OFFSET_FILL),(D!==At||O!==at)&&(D=At,O=at,o.getReversed()&&(At=-At),s.polygonOffset(At,at))):F(s.POLYGON_OFFSET_FILL)}function jt(G){G?A(s.SCISSOR_TEST):F(s.SCISSOR_TEST)}function ce(G){G===void 0&&(G=s.TEXTURE0+X-1),et!==G&&(s.activeTexture(G),et=G)}function z(G,At,at){at===void 0&&(et===null?at=s.TEXTURE0+X-1:at=et);let Rt=V[at];Rt===void 0&&(Rt={type:void 0,texture:void 0},V[at]=Rt),(Rt.type!==G||Rt.texture!==At)&&(et!==at&&(s.activeTexture(at),et=at),s.bindTexture(G,At||_[G]),Rt.type=G,Rt.texture=At)}function be(){let G=V[et];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function me(){try{s.compressedTexImage2D(...arguments)}catch(G){ne("WebGLState:",G)}}function L(){try{s.compressedTexImage3D(...arguments)}catch(G){ne("WebGLState:",G)}}function T(){try{s.texSubImage2D(...arguments)}catch(G){ne("WebGLState:",G)}}function W(){try{s.texSubImage3D(...arguments)}catch(G){ne("WebGLState:",G)}}function j(){try{s.compressedTexSubImage2D(...arguments)}catch(G){ne("WebGLState:",G)}}function nt(){try{s.compressedTexSubImage3D(...arguments)}catch(G){ne("WebGLState:",G)}}function Mt(){try{s.texStorage2D(...arguments)}catch(G){ne("WebGLState:",G)}}function bt(){try{s.texStorage3D(...arguments)}catch(G){ne("WebGLState:",G)}}function st(){try{s.texImage2D(...arguments)}catch(G){ne("WebGLState:",G)}}function lt(){try{s.texImage3D(...arguments)}catch(G){ne("WebGLState:",G)}}function wt(G){return d[G]!==void 0?d[G]:s.getParameter(G)}function qt(G,At){d[G]!==At&&(s.pixelStorei(G,At),d[G]=At)}function Ct(G){Kt.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Kt.copy(G))}function Tt(G){vt.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),vt.copy(G))}function Yt(G,At){let at=c.get(At);at===void 0&&(at=new WeakMap,c.set(At,at));let Rt=at.get(G);Rt===void 0&&(Rt=s.getUniformBlockIndex(At,G.name),at.set(G,Rt))}function ee(G,At){let Rt=c.get(At).get(G);l.get(At)!==Rt&&(s.uniformBlockBinding(At,Rt,G.__bindingPointIndex),l.set(At,Rt))}function ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},et=null,V={},u={},f=new WeakMap,m=[],v=null,g=!1,p=null,y=null,b=null,M=null,w=null,S=null,P=null,x=new re(0,0,0),E=0,R=!1,I=null,N=null,U=null,D=null,O=null,Kt.set(0,0,s.canvas.width,s.canvas.height),vt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:A,disable:F,bindFramebuffer:k,drawBuffers:q,useProgram:ft,setBlending:ut,setMaterial:dt,setFlipSided:ht,setCullFace:yt,setLineWidth:Xt,setPolygonOffset:Gt,setScissorTest:jt,activeTexture:ce,bindTexture:z,unbindTexture:be,compressedTexImage2D:me,compressedTexImage3D:L,texImage2D:st,texImage3D:lt,pixelStorei:qt,getParameter:wt,updateUBOMapping:Yt,uniformBlockBinding:ee,texStorage2D:Mt,texStorage3D:bt,texSubImage2D:T,texSubImage3D:W,compressedTexSubImage2D:j,compressedTexSubImage3D:nt,scissor:Ct,viewport:Tt,reset:ue}}function Jx(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _t,h=new WeakMap,d=new Set,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,T){return m?new OffscreenCanvas(L,T):Sr("canvas")}function g(L,T,W){let j=1,nt=me(L);if((nt.width>W||nt.height>W)&&(j=W/Math.max(nt.width,nt.height)),j<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let Mt=Math.floor(j*nt.width),bt=Math.floor(j*nt.height);u===void 0&&(u=v(Mt,bt));let st=T?v(Mt,bt):u;return st.width=Mt,st.height=bt,st.getContext("2d").drawImage(L,0,0,Mt,bt),ie("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Mt+"x"+bt+")."),st}else return"data"in L&&ie("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),L;return L}function p(L){return L.generateMipmaps}function y(L){s.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(L,T,W,j,nt,Mt=!1){if(L!==null){if(s[L]!==void 0)return s[L];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let bt;j&&(bt=t.get("EXT_texture_norm16"),bt||ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let st=T;if(T===s.RED&&(W===s.FLOAT&&(st=s.R32F),W===s.HALF_FLOAT&&(st=s.R16F),W===s.UNSIGNED_BYTE&&(st=s.R8),W===s.UNSIGNED_SHORT&&bt&&(st=bt.R16_EXT),W===s.SHORT&&bt&&(st=bt.R16_SNORM_EXT)),T===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(st=s.R8UI),W===s.UNSIGNED_SHORT&&(st=s.R16UI),W===s.UNSIGNED_INT&&(st=s.R32UI),W===s.BYTE&&(st=s.R8I),W===s.SHORT&&(st=s.R16I),W===s.INT&&(st=s.R32I)),T===s.RG&&(W===s.FLOAT&&(st=s.RG32F),W===s.HALF_FLOAT&&(st=s.RG16F),W===s.UNSIGNED_BYTE&&(st=s.RG8),W===s.UNSIGNED_SHORT&&bt&&(st=bt.RG16_EXT),W===s.SHORT&&bt&&(st=bt.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(st=s.RG8UI),W===s.UNSIGNED_SHORT&&(st=s.RG16UI),W===s.UNSIGNED_INT&&(st=s.RG32UI),W===s.BYTE&&(st=s.RG8I),W===s.SHORT&&(st=s.RG16I),W===s.INT&&(st=s.RG32I)),T===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(st=s.RGB8UI),W===s.UNSIGNED_SHORT&&(st=s.RGB16UI),W===s.UNSIGNED_INT&&(st=s.RGB32UI),W===s.BYTE&&(st=s.RGB8I),W===s.SHORT&&(st=s.RGB16I),W===s.INT&&(st=s.RGB32I)),T===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(st=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(st=s.RGBA16UI),W===s.UNSIGNED_INT&&(st=s.RGBA32UI),W===s.BYTE&&(st=s.RGBA8I),W===s.SHORT&&(st=s.RGBA16I),W===s.INT&&(st=s.RGBA32I)),T===s.RGB&&(W===s.UNSIGNED_SHORT&&bt&&(st=bt.RGB16_EXT),W===s.SHORT&&bt&&(st=bt.RGB16_SNORM_EXT),W===s.UNSIGNED_INT_5_9_9_9_REV&&(st=s.RGB9_E5),W===s.UNSIGNED_INT_10F_11F_11F_REV&&(st=s.R11F_G11F_B10F)),T===s.RGBA){let lt=Mt?br:xe.getTransfer(nt);W===s.FLOAT&&(st=s.RGBA32F),W===s.HALF_FLOAT&&(st=s.RGBA16F),W===s.UNSIGNED_BYTE&&(st=lt===we?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT&&bt&&(st=bt.RGBA16_EXT),W===s.SHORT&&bt&&(st=bt.RGBA16_SNORM_EXT),W===s.UNSIGNED_SHORT_4_4_4_4&&(st=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(st=s.RGB5_A1)}return(st===s.R16F||st===s.R32F||st===s.RG16F||st===s.RG32F||st===s.RGBA16F||st===s.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function w(L,T){let W;return L?T===null||T===Vn||T===tr?W=s.DEPTH24_STENCIL8:T===Cn?W=s.DEPTH32F_STENCIL8:T===Qs&&(W=s.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Vn||T===tr?W=s.DEPTH_COMPONENT24:T===Cn?W=s.DEPTH_COMPONENT32F:T===Qs&&(W=s.DEPTH_COMPONENT16),W}function S(L,T){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==$e&&L.minFilter!==en?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function P(L){let T=L.target;T.removeEventListener("dispose",P),E(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&d.delete(T)}function x(L){let T=L.target;T.removeEventListener("dispose",x),I(T)}function E(L){let T=n.get(L);if(T.__webglInit===void 0)return;let W=L.source,j=f.get(W);if(j){let nt=j[T.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&R(L),Object.keys(j).length===0&&f.delete(W)}n.remove(L)}function R(L){let T=n.get(L);s.deleteTexture(T.__webglTexture);let W=L.source,j=f.get(W);delete j[T.__cacheKey],o.memory.textures--}function I(L){let T=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(T.__webglFramebuffer[j]))for(let nt=0;nt<T.__webglFramebuffer[j].length;nt++)s.deleteFramebuffer(T.__webglFramebuffer[j][nt]);else s.deleteFramebuffer(T.__webglFramebuffer[j]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[j])}else{if(Array.isArray(T.__webglFramebuffer))for(let j=0;j<T.__webglFramebuffer.length;j++)s.deleteFramebuffer(T.__webglFramebuffer[j]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let j=0;j<T.__webglColorRenderbuffer.length;j++)T.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[j]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let W=L.textures;for(let j=0,nt=W.length;j<nt;j++){let Mt=n.get(W[j]);Mt.__webglTexture&&(s.deleteTexture(Mt.__webglTexture),o.memory.textures--),n.remove(W[j])}n.remove(L)}let N=0;function U(){N=0}function D(){return N}function O(L){N=L}function X(){let L=N;return L>=i.maxTextures&&ie("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+i.maxTextures),N+=1,L}function Y(L){let T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function it(L,T){let W=n.get(L);if(L.isVideoTexture&&z(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&W.__version!==L.version){let j=L.image;if(j===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{F(W,L,T);return}}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+T)}function $(L,T){let W=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){F(W,L,T);return}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+T)}function et(L,T){let W=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){F(W,L,T);return}e.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+T)}function V(L,T){let W=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&W.__version!==L.version){k(W,L,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+T)}let xt={[Ds]:s.REPEAT,[Jn]:s.CLAMP_TO_EDGE,[ta]:s.MIRRORED_REPEAT},ct={[$e]:s.NEAREST,[Hu]:s.NEAREST_MIPMAP_NEAREST,[Kr]:s.NEAREST_MIPMAP_LINEAR,[en]:s.LINEAR,[Ia]:s.LINEAR_MIPMAP_NEAREST,[Bi]:s.LINEAR_MIPMAP_LINEAR},Kt={[Xu]:s.NEVER,[$u]:s.ALWAYS,[qu]:s.LESS,[ml]:s.LEQUAL,[Yu]:s.EQUAL,[gl]:s.GEQUAL,[Zu]:s.GREATER,[Ju]:s.NOTEQUAL};function vt(L,T){if(T.type===Cn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===en||T.magFilter===Ia||T.magFilter===Kr||T.magFilter===Bi||T.minFilter===en||T.minFilter===Ia||T.minFilter===Kr||T.minFilter===Bi)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,xt[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,xt[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,xt[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ct[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ct[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Kt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===$e||T.minFilter!==Kr&&T.minFilter!==Bi||T.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function gt(L,T){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",P));let j=T.source,nt=f.get(j);nt===void 0&&(nt={},f.set(j,nt));let Mt=Y(T);if(Mt!==L.__cacheKey){nt[Mt]===void 0&&(nt[Mt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,W=!0),nt[Mt].usedTimes++;let bt=nt[L.__cacheKey];bt!==void 0&&(nt[L.__cacheKey].usedTimes--,bt.usedTimes===0&&R(T)),L.__cacheKey=Mt,L.__webglTexture=nt[Mt].texture}return W}function _(L,T,W){return Math.floor(Math.floor(L/W)/T)}function A(L,T,W,j){let Mt=L.updateRanges;if(Mt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,W,j,T.data);else{Mt.sort((qt,Ct)=>qt.start-Ct.start);let bt=0;for(let qt=1;qt<Mt.length;qt++){let Ct=Mt[bt],Tt=Mt[qt],Yt=Ct.start+Ct.count,ee=_(Tt.start,T.width,4),ue=_(Ct.start,T.width,4);Tt.start<=Yt+1&&ee===ue&&_(Tt.start+Tt.count-1,T.width,4)===ee?Ct.count=Math.max(Ct.count,Tt.start+Tt.count-Ct.start):(++bt,Mt[bt]=Tt)}Mt.length=bt+1;let st=e.getParameter(s.UNPACK_ROW_LENGTH),lt=e.getParameter(s.UNPACK_SKIP_PIXELS),wt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let qt=0,Ct=Mt.length;qt<Ct;qt++){let Tt=Mt[qt],Yt=Math.floor(Tt.start/4),ee=Math.ceil(Tt.count/4),ue=Yt%T.width,G=Math.floor(Yt/T.width),At=ee,at=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,ue),e.pixelStorei(s.UNPACK_SKIP_ROWS,G),e.texSubImage2D(s.TEXTURE_2D,0,ue,G,At,at,W,j,T.data)}L.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,st),e.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(s.UNPACK_SKIP_ROWS,wt)}}function F(L,T,W){let j=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(j=s.TEXTURE_3D);let nt=gt(L,T),Mt=T.source;e.bindTexture(j,L.__webglTexture,s.TEXTURE0+W);let bt=n.get(Mt);if(Mt.version!==bt.__version||nt===!0){if(e.activeTexture(s.TEXTURE0+W),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let at=xe.getPrimaries(xe.workingColorSpace),Rt=T.colorSpace===pi?null:xe.getPrimaries(T.colorSpace),Dt=T.colorSpace===pi||at===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt)}e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let lt=g(T.image,!1,i.maxTextureSize);lt=be(T,lt);let wt=r.convert(T.format,T.colorSpace),qt=r.convert(T.type),Ct=M(T.internalFormat,wt,qt,T.normalized,T.colorSpace,T.isVideoTexture);vt(j,T);let Tt,Yt=T.mipmaps,ee=T.isVideoTexture!==!0,ue=bt.__version===void 0||nt===!0,G=Mt.dataReady,At=S(T,lt);if(T.isDepthTexture)Ct=w(T.format===Oi,T.type),ue&&(ee?e.texStorage2D(s.TEXTURE_2D,1,Ct,lt.width,lt.height):e.texImage2D(s.TEXTURE_2D,0,Ct,lt.width,lt.height,0,wt,qt,null));else if(T.isDataTexture)if(Yt.length>0){ee&&ue&&e.texStorage2D(s.TEXTURE_2D,At,Ct,Yt[0].width,Yt[0].height);for(let at=0,Rt=Yt.length;at<Rt;at++)Tt=Yt[at],ee?G&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,Tt.width,Tt.height,wt,qt,Tt.data):e.texImage2D(s.TEXTURE_2D,at,Ct,Tt.width,Tt.height,0,wt,qt,Tt.data);T.generateMipmaps=!1}else ee?(ue&&e.texStorage2D(s.TEXTURE_2D,At,Ct,lt.width,lt.height),G&&A(T,lt,wt,qt)):e.texImage2D(s.TEXTURE_2D,0,Ct,lt.width,lt.height,0,wt,qt,lt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ee&&ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,Ct,Yt[0].width,Yt[0].height,lt.depth);for(let at=0,Rt=Yt.length;at<Rt;at++)if(Tt=Yt[at],T.format!==Pn)if(wt!==null)if(ee){if(G)if(T.layerUpdates.size>0){let Dt=Yc(Tt.width,Tt.height,T.format,T.type);for(let pt of T.layerUpdates){let Jt=Tt.data.subarray(pt*Dt/Tt.data.BYTES_PER_ELEMENT,(pt+1)*Dt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,pt,Tt.width,Tt.height,1,wt,Jt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,Tt.width,Tt.height,lt.depth,wt,Tt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,at,Ct,Tt.width,Tt.height,lt.depth,0,Tt.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?G&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,Tt.width,Tt.height,lt.depth,wt,qt,Tt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,at,Ct,Tt.width,Tt.height,lt.depth,0,wt,qt,Tt.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{ee&&ue&&e.texStorage2D(s.TEXTURE_2D,At,Ct,Yt[0].width,Yt[0].height);for(let at=0,Rt=Yt.length;at<Rt;at++)Tt=Yt[at],T.format!==Pn?wt!==null?ee?G&&e.compressedTexSubImage2D(s.TEXTURE_2D,at,0,0,Tt.width,Tt.height,wt,Tt.data):e.compressedTexImage2D(s.TEXTURE_2D,at,Ct,Tt.width,Tt.height,0,Tt.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?G&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,Tt.width,Tt.height,wt,qt,Tt.data):e.texImage2D(s.TEXTURE_2D,at,Ct,Tt.width,Tt.height,0,wt,qt,Tt.data)}else if(T.isDataArrayTexture)if(ee){if(ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,Ct,lt.width,lt.height,lt.depth),G)if(T.layerUpdates.size>0){let at=Yc(lt.width,lt.height,T.format,T.type);for(let Rt of T.layerUpdates){let Dt=lt.data.subarray(Rt*at/lt.data.BYTES_PER_ELEMENT,(Rt+1)*at/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Rt,lt.width,lt.height,1,wt,qt,Dt)}T.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,wt,qt,lt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ct,lt.width,lt.height,lt.depth,0,wt,qt,lt.data);else if(T.isData3DTexture)ee?(ue&&e.texStorage3D(s.TEXTURE_3D,At,Ct,lt.width,lt.height,lt.depth),G&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,wt,qt,lt.data)):e.texImage3D(s.TEXTURE_3D,0,Ct,lt.width,lt.height,lt.depth,0,wt,qt,lt.data);else if(T.isFramebufferTexture){if(ue)if(ee)e.texStorage2D(s.TEXTURE_2D,At,Ct,lt.width,lt.height);else{let at=lt.width,Rt=lt.height;for(let Dt=0;Dt<At;Dt++)e.texImage2D(s.TEXTURE_2D,Dt,Ct,at,Rt,0,wt,qt,null),at>>=1,Rt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){let at=s.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),lt.parentNode!==at){at.appendChild(lt),d.add(T),at.onpaint=Rt=>{let Dt=Rt.changedElements;for(let pt of d)Dt.includes(pt.image)&&(pt.needsUpdate=!0)},at.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,lt);else{let Dt=s.RGBA,pt=s.RGBA,Jt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Dt,pt,Jt,lt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Yt.length>0){if(ee&&ue){let at=me(Yt[0]);e.texStorage2D(s.TEXTURE_2D,At,Ct,at.width,at.height)}for(let at=0,Rt=Yt.length;at<Rt;at++)Tt=Yt[at],ee?G&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,wt,qt,Tt):e.texImage2D(s.TEXTURE_2D,at,Ct,wt,qt,Tt);T.generateMipmaps=!1}else if(ee){if(ue){let at=me(lt);e.texStorage2D(s.TEXTURE_2D,At,Ct,at.width,at.height)}G&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,wt,qt,lt)}else e.texImage2D(s.TEXTURE_2D,0,Ct,wt,qt,lt);p(T)&&y(j),bt.__version=Mt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function k(L,T,W){if(T.image.length!==6)return;let j=gt(L,T),nt=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+W);let Mt=n.get(nt);if(nt.version!==Mt.__version||j===!0){e.activeTexture(s.TEXTURE0+W);let bt=xe.getPrimaries(xe.workingColorSpace),st=T.colorSpace===pi?null:xe.getPrimaries(T.colorSpace),lt=T.colorSpace===pi||bt===st?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let wt=T.isCompressedTexture||T.image[0].isCompressedTexture,qt=T.image[0]&&T.image[0].isDataTexture,Ct=[];for(let pt=0;pt<6;pt++)!wt&&!qt?Ct[pt]=g(T.image[pt],!0,i.maxCubemapSize):Ct[pt]=qt?T.image[pt].image:T.image[pt],Ct[pt]=be(T,Ct[pt]);let Tt=Ct[0],Yt=r.convert(T.format,T.colorSpace),ee=r.convert(T.type),ue=M(T.internalFormat,Yt,ee,T.normalized,T.colorSpace),G=T.isVideoTexture!==!0,At=Mt.__version===void 0||j===!0,at=nt.dataReady,Rt=S(T,Tt);vt(s.TEXTURE_CUBE_MAP,T);let Dt;if(wt){G&&At&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,ue,Tt.width,Tt.height);for(let pt=0;pt<6;pt++){Dt=Ct[pt].mipmaps;for(let Jt=0;Jt<Dt.length;Jt++){let Vt=Dt[Jt];T.format!==Pn?Yt!==null?G?at&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Jt,0,0,Vt.width,Vt.height,Yt,Vt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Jt,ue,Vt.width,Vt.height,0,Vt.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Jt,0,0,Vt.width,Vt.height,Yt,ee,Vt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Jt,ue,Vt.width,Vt.height,0,Yt,ee,Vt.data)}}}else{if(Dt=T.mipmaps,G&&At){Dt.length>0&&Rt++;let pt=me(Ct[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,ue,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(qt){G?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Ct[pt].width,Ct[pt].height,Yt,ee,Ct[pt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ue,Ct[pt].width,Ct[pt].height,0,Yt,ee,Ct[pt].data);for(let Jt=0;Jt<Dt.length;Jt++){let Pe=Dt[Jt].image[pt].image;G?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Jt+1,0,0,Pe.width,Pe.height,Yt,ee,Pe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Jt+1,ue,Pe.width,Pe.height,0,Yt,ee,Pe.data)}}else{G?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Yt,ee,Ct[pt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ue,Yt,ee,Ct[pt]);for(let Jt=0;Jt<Dt.length;Jt++){let Vt=Dt[Jt];G?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Jt+1,0,0,Yt,ee,Vt.image[pt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Jt+1,ue,Yt,ee,Vt.image[pt])}}}p(T)&&y(s.TEXTURE_CUBE_MAP),Mt.__version=nt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function q(L,T,W,j,nt,Mt){let bt=r.convert(W.format,W.colorSpace),st=r.convert(W.type),lt=M(W.internalFormat,bt,st,W.normalized,W.colorSpace),wt=n.get(T),qt=n.get(W);if(qt.__renderTarget=T,!wt.__hasExternalTextures){let Ct=Math.max(1,T.width>>Mt),Tt=Math.max(1,T.height>>Mt);nt===s.TEXTURE_3D||nt===s.TEXTURE_2D_ARRAY?e.texImage3D(nt,Mt,lt,Ct,Tt,T.depth,0,bt,st,null):e.texImage2D(nt,Mt,lt,Ct,Tt,0,bt,st,null)}e.bindFramebuffer(s.FRAMEBUFFER,L),ce(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,nt,qt.__webglTexture,0,jt(T)):(nt===s.TEXTURE_2D||nt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,nt,qt.__webglTexture,Mt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ft(L,T,W){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){let j=T.depthTexture,nt=j&&j.isDepthTexture?j.type:null,Mt=w(T.stencilBuffer,nt),bt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ce(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,jt(T),Mt,T.width,T.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,jt(T),Mt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Mt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,L)}else{let j=T.textures;for(let nt=0;nt<j.length;nt++){let Mt=j[nt],bt=r.convert(Mt.format,Mt.colorSpace),st=r.convert(Mt.type),lt=M(Mt.internalFormat,bt,st,Mt.normalized,Mt.colorSpace);ce(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,jt(T),lt,T.width,T.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,jt(T),lt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,lt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Zt(L,T,W){let j=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=n.get(T.depthTexture);if(nt.__renderTarget=T,(!nt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),j){if(nt.__webglInit===void 0&&(nt.__webglInit=!0,T.depthTexture.addEventListener("dispose",P)),nt.__webglTexture===void 0){nt.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture),vt(s.TEXTURE_CUBE_MAP,T.depthTexture);let wt=r.convert(T.depthTexture.format),qt=r.convert(T.depthTexture.type),Ct;T.depthTexture.format===$n?Ct=s.DEPTH_COMPONENT24:T.depthTexture.format===Oi&&(Ct=s.DEPTH24_STENCIL8);for(let Tt=0;Tt<6;Tt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Ct,T.width,T.height,0,wt,qt,null)}}else it(T.depthTexture,0);let Mt=nt.__webglTexture,bt=jt(T),st=j?s.TEXTURE_CUBE_MAP_POSITIVE_X+W:s.TEXTURE_2D,lt=T.depthTexture.format===Oi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===$n)ce(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,lt,st,Mt,0,bt):s.framebufferTexture2D(s.FRAMEBUFFER,lt,st,Mt,0);else if(T.depthTexture.format===Oi)ce(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,lt,st,Mt,0,bt):s.framebufferTexture2D(s.FRAMEBUFFER,lt,st,Mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Q(L){let T=n.get(L),W=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){let j=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),j){let nt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,j.removeEventListener("dispose",nt)};j.addEventListener("dispose",nt),T.__depthDisposeCallback=nt}T.__boundDepthTexture=j}if(L.depthTexture&&!T.__autoAllocateDepthBuffer)if(W)for(let j=0;j<6;j++)Zt(T.__webglFramebuffer[j],L,j);else{let j=L.texture.mipmaps;j&&j.length>0?Zt(T.__webglFramebuffer[0],L,0):Zt(T.__webglFramebuffer,L,0)}else if(W){T.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[j]),T.__webglDepthbuffer[j]===void 0)T.__webglDepthbuffer[j]=s.createRenderbuffer(),ft(T.__webglDepthbuffer[j],L,!1);else{let nt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=T.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,Mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,Mt)}}else{let j=L.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ft(T.__webglDepthbuffer,L,!1);else{let nt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,Mt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ut(L,T,W){let j=n.get(L);T!==void 0&&q(j.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&Q(L)}function dt(L){let T=L.texture,W=n.get(L),j=n.get(T);L.addEventListener("dispose",x);let nt=L.textures,Mt=L.isWebGLCubeRenderTarget===!0,bt=nt.length>1;if(bt||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=T.version,o.memory.textures++),Mt){W.__webglFramebuffer=[];for(let st=0;st<6;st++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[st]=[];for(let lt=0;lt<T.mipmaps.length;lt++)W.__webglFramebuffer[st][lt]=s.createFramebuffer()}else W.__webglFramebuffer[st]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let st=0;st<T.mipmaps.length;st++)W.__webglFramebuffer[st]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(bt)for(let st=0,lt=nt.length;st<lt;st++){let wt=n.get(nt[st]);wt.__webglTexture===void 0&&(wt.__webglTexture=s.createTexture(),o.memory.textures++)}if(L.samples>0&&ce(L)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let st=0;st<nt.length;st++){let lt=nt[st];W.__webglColorRenderbuffer[st]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[st]);let wt=r.convert(lt.format,lt.colorSpace),qt=r.convert(lt.type),Ct=M(lt.internalFormat,wt,qt,lt.normalized,lt.colorSpace,L.isXRRenderTarget===!0),Tt=jt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,Ct,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,W.__webglColorRenderbuffer[st])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),ft(W.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Mt){e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),vt(s.TEXTURE_CUBE_MAP,T);for(let st=0;st<6;st++)if(T.mipmaps&&T.mipmaps.length>0)for(let lt=0;lt<T.mipmaps.length;lt++)q(W.__webglFramebuffer[st][lt],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+st,lt);else q(W.__webglFramebuffer[st],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);p(T)&&y(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let st=0,lt=nt.length;st<lt;st++){let wt=nt[st],qt=n.get(wt),Ct=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ct=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Ct,qt.__webglTexture),vt(Ct,wt),q(W.__webglFramebuffer,L,wt,s.COLOR_ATTACHMENT0+st,Ct,0),p(wt)&&y(Ct)}e.unbindTexture()}else{let st=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(st=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(st,j.__webglTexture),vt(st,T),T.mipmaps&&T.mipmaps.length>0)for(let lt=0;lt<T.mipmaps.length;lt++)q(W.__webglFramebuffer[lt],L,T,s.COLOR_ATTACHMENT0,st,lt);else q(W.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,st,0);p(T)&&y(st),e.unbindTexture()}L.depthBuffer&&Q(L)}function ht(L){let T=L.textures;for(let W=0,j=T.length;W<j;W++){let nt=T[W];if(p(nt)){let Mt=b(L),bt=n.get(nt).__webglTexture;e.bindTexture(Mt,bt),y(Mt),e.unbindTexture()}}}let yt=[],Xt=[];function Gt(L){if(L.samples>0){if(ce(L)===!1){let T=L.textures,W=L.width,j=L.height,nt=s.COLOR_BUFFER_BIT,Mt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=n.get(L),st=T.length>1;if(st)for(let wt=0;wt<T.length;wt++)e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);let lt=L.texture.mipmaps;lt&&lt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let wt=0;wt<T.length;wt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(nt|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(nt|=s.STENCIL_BUFFER_BIT)),st){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,bt.__webglColorRenderbuffer[wt]);let qt=n.get(T[wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,qt,0)}s.blitFramebuffer(0,0,W,j,0,0,W,j,nt,s.NEAREST),l===!0&&(yt.length=0,Xt.length=0,yt.push(s.COLOR_ATTACHMENT0+wt),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(yt.push(Mt),Xt.push(Mt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Xt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,yt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),st)for(let wt=0;wt<T.length;wt++){e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,bt.__webglColorRenderbuffer[wt]);let qt=n.get(T[wt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,qt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function jt(L){return Math.min(i.maxSamples,L.samples)}function ce(L){let T=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function z(L){let T=o.render.frame;h.get(L)!==T&&(h.set(L,T),L.update())}function be(L,T){let W=L.colorSpace,j=L.format,nt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==Mr&&W!==pi&&(xe.getTransfer(W)===we?(j!==Pn||nt!==xn)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",W)),T}function me(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=U,this.getTextureUnits=D,this.setTextureUnits=O,this.setTexture2D=it,this.setTexture2DArray=$,this.setTexture3D=et,this.setTextureCube=V,this.rebindTextures=ut,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=q,this.useMultisampledRTT=ce,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function $x(s,t){function e(n,i=pi){let r,o=xe.getTransfer(i);if(n===xn)return s.UNSIGNED_BYTE;if(n===Fa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Da)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Bc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Oc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nc)return s.BYTE;if(n===Uc)return s.SHORT;if(n===Qs)return s.UNSIGNED_SHORT;if(n===La)return s.INT;if(n===Vn)return s.UNSIGNED_INT;if(n===Cn)return s.FLOAT;if(n===Wn)return s.HALF_FLOAT;if(n===zc)return s.ALPHA;if(n===kc)return s.RGB;if(n===Pn)return s.RGBA;if(n===$n)return s.DEPTH_COMPONENT;if(n===Oi)return s.DEPTH_STENCIL;if(n===Na)return s.RED;if(n===Ua)return s.RED_INTEGER;if(n===zi)return s.RG;if(n===Ba)return s.RG_INTEGER;if(n===Oa)return s.RGBA_INTEGER;if(n===jr||n===Qr||n===to||n===eo)if(o===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===za||n===ka||n===Ha||n===Ga)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===no||n===Za)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Va||n===Wa)return o===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xa)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===qa)return r.COMPRESSED_R11_EAC;if(n===Ya)return r.COMPRESSED_SIGNED_R11_EAC;if(n===no)return r.COMPRESSED_RG11_EAC;if(n===Za)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ja||n===$a||n===Ka||n===ja||n===Qa||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ja)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$a)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ka)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ja)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qa)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===el)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===il)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ol)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===al)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ll)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cl||n===hl||n===ul)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===cl)return o===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dl||n===fl||n===io||n===pl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===dl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===io)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===tr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Kx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jx=`
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

}`,dh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Dr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new bn({vertexShader:Kx,fragmentShader:jx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Me(new Xe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fh=class extends Kn{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,v=typeof XRWebGLBinding<"u",g=new dh,p={},y=e.getContextAttributes(),b=null,M=null,w=[],S=[],P=new _t,x=null,E=null,R=new He;R.viewport=new De;let I=new He;I.viewport=new De;let N=[R,I],U=new Ta,D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(_){let A=w[_];return A===void 0&&(A=new zs,w[_]=A),A.getTargetRaySpace()},this.getControllerGrip=function(_){let A=w[_];return A===void 0&&(A=new zs,w[_]=A),A.getGripSpace()},this.getHand=function(_){let A=w[_];return A===void 0&&(A=new zs,w[_]=A),A.getHandSpace()};function X(_){let A=S.indexOf(_.inputSource);if(A===-1)return;let F=w[A];F!==void 0&&(F.update(_.inputSource,_.frame,c||o),F.dispatchEvent({type:_.type,data:_.inputSource}))}function Y(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",it);for(let _=0;_<w.length;_++){let A=S[_];A!==null&&(S[_]=null,w[_].disconnect(A))}D=null,O=null,g.reset();for(let _ in p)delete p[_];if(t.setRenderTarget(b),f=null,u=null,d=null,i=null,M=null,gt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(P.width,P.height,!1),E!==null){let _=E.camera;_.fov=E.fov,_.zoom=E.zoom,_.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(_){r=_,n.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(_){a=_,n.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(_){c=_},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(_){if(i=_,i!==null){if(b=t.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",it),y.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let F=null,k=null,q=null;y.depth&&(q=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,F=y.stencil?Oi:$n,k=y.stencil?tr:Vn);let ft={colorFormat:e.RGBA8,depthFormat:q,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(ft),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new pn(u.textureWidth,u.textureHeight,{format:Pn,type:xn,depthTexture:new Ci(u.textureWidth,u.textureHeight,k,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let F={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,F),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new pn(f.framebufferWidth,f.framebufferHeight,{format:Pn,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),gt.setContext(i),gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function it(_){for(let A=0;A<_.removed.length;A++){let F=_.removed[A],k=S.indexOf(F);k>=0&&(S[k]=null,w[k].disconnect(F))}for(let A=0;A<_.added.length;A++){let F=_.added[A],k=S.indexOf(F);if(k===-1){for(let ft=0;ft<w.length;ft++)if(ft>=S.length){S.push(F),k=ft;break}else if(S[ft]===null){S[ft]=F,k=ft;break}if(k===-1)break}let q=w[k];q&&q.connect(F)}}let $=new B,et=new B;function V(_,A,F){$.setFromMatrixPosition(A.matrixWorld),et.setFromMatrixPosition(F.matrixWorld);let k=$.distanceTo(et),q=A.projectionMatrix.elements,ft=F.projectionMatrix.elements,Zt=q[14]/(q[10]-1),Q=q[14]/(q[10]+1),ut=(q[9]+1)/q[5],dt=(q[9]-1)/q[5],ht=(q[8]-1)/q[0],yt=(ft[8]+1)/ft[0],Xt=Zt*ht,Gt=Zt*yt,jt=k/(-ht+yt),ce=jt*-ht;if(A.matrixWorld.decompose(_.position,_.quaternion,_.scale),_.translateX(ce),_.translateZ(jt),_.matrixWorld.compose(_.position,_.quaternion,_.scale),_.matrixWorldInverse.copy(_.matrixWorld).invert(),q[10]===-1)_.projectionMatrix.copy(A.projectionMatrix),_.projectionMatrixInverse.copy(A.projectionMatrixInverse);else{let z=Zt+jt,be=Q+jt,me=Xt-ce,L=Gt+(k-ce),T=ut*Q/be*z,W=dt*Q/be*z;_.projectionMatrix.makePerspective(me,L,T,W,z,be),_.projectionMatrixInverse.copy(_.projectionMatrix).invert()}}function xt(_,A){A===null?_.matrixWorld.copy(_.matrix):_.matrixWorld.multiplyMatrices(A.matrixWorld,_.matrix),_.matrixWorldInverse.copy(_.matrixWorld).invert()}this.updateCamera=function(_){if(i===null)return;let A=_.near,F=_.far;g.texture!==null&&(g.depthNear>0&&(A=g.depthNear),g.depthFar>0&&(F=g.depthFar)),U.near=I.near=R.near=A,U.far=I.far=R.far=F,(D!==U.near||O!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),D=U.near,O=U.far),U.layers.mask=_.layers.mask|6,R.layers.mask=U.layers.mask&-5,I.layers.mask=U.layers.mask&-3;let k=_.parent,q=U.cameras;xt(U,k);for(let ft=0;ft<q.length;ft++)xt(q[ft],k);q.length===2?V(U,R,I):U.projectionMatrix.copy(R.projectionMatrix),E===null&&_.isPerspectiveCamera&&(E={camera:_,fov:_.fov,zoom:_.zoom}),ct(_,U,k)};function ct(_,A,F){F===null?_.matrix.copy(A.matrixWorld):(_.matrix.copy(F.matrixWorld),_.matrix.invert(),_.matrix.multiply(A.matrixWorld)),_.matrix.decompose(_.position,_.quaternion,_.scale),_.updateMatrixWorld(!0),_.projectionMatrix.copy(A.projectionMatrix),_.projectionMatrixInverse.copy(A.projectionMatrixInverse),_.isPerspectiveCamera&&(_.fov=wr*2*Math.atan(1/_.projectionMatrix.elements[5]),_.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(_){l=_,u!==null&&(u.fixedFoveation=_),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=_)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(_){return p[_]};let Kt=null;function vt(_,A){if(h=A.getViewerPose(c||o),m=A,h!==null){let F=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let k=!1;F.length!==U.cameras.length&&(U.cameras.length=0,k=!0);for(let Q=0;Q<F.length;Q++){let ut=F[Q],dt=null;if(f!==null)dt=f.getViewport(ut);else{let yt=d.getViewSubImage(u,ut);dt=yt.viewport,Q===0&&(t.setRenderTargetTextures(M,yt.colorTexture,yt.depthStencilTexture),t.setRenderTarget(M))}let ht=N[Q];ht===void 0&&(ht=new He,ht.layers.enable(Q),ht.viewport=new De,N[Q]=ht),ht.matrix.fromArray(ut.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(ut.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(dt.x,dt.y,dt.width,dt.height),Q===0&&(U.matrix.copy(ht.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),k===!0&&U.cameras.push(ht)}let q=i.enabledFeatures;if(q&&q.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let Q=d.getDepthInformation(F[0]);Q&&Q.isValid&&Q.texture&&g.init(Q,i.renderState)}if(q&&q.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let Q=0;Q<F.length;Q++){let ut=F[Q].camera;if(ut){let dt=p[ut];dt||(dt=new Dr,p[ut]=dt);let ht=d.getCameraImage(ut);dt.sourceTexture=ht}}}}for(let F=0;F<w.length;F++){let k=S[F],q=w[F];k!==null&&q!==void 0&&q.update(k,A,c||o)}Kt&&Kt(_,A),A.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:A}),m=null}let gt=new Id;gt.setAnimationLoop(vt),this.setAnimationLoop=function(_){Kt=_},this.dispose=function(){}}},Qx=new _e,Bd=new ae;Bd.set(-1,0,0,0,1,0,0,0,1);function t_(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Wc(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,y,b,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,b):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===nn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===nn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=t.get(p),b=y.envMap,M=y.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(Qx.makeRotationFromEuler(M)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Bd),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=b*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function e_(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){let S=w.program;n.uniformBlockBinding(M,S)}function c(M,w){let S=i[M.id];S===void 0&&(g(M),S=h(M),i[M.id]=S,M.addEventListener("dispose",y));let P=w.program;n.updateUBOMapping(M,P);let x=t.render.frame;r[M.id]!==x&&(u(M),r[M.id]=x)}function h(M){let w=d();M.__bindingPointIndex=w;let S=s.createBuffer(),P=M.__size,x=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,P,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,S),S}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let w=i[M.id],S=M.uniforms,P=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let x=0,E=S.length;x<E;x++){let R=S[x];if(Array.isArray(R))for(let I=0,N=R.length;I<N;I++)f(R[I],x,I,P);else f(R,x,0,P)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,w,S,P){if(v(M,w,S,P)===!0){let x=M.__offset,E=M.value;if(Array.isArray(E)){let R=0;for(let I=0;I<E.length;I++){let N=E[I],U=p(N);m(N,M.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,x,M.__data)}}function m(M,w,S){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,S)}function v(M,w,S,P){let x=M.value,E=w+"_"+S;if(P[E]===void 0)return typeof x=="number"||typeof x=="boolean"?P[E]=x:ArrayBuffer.isView(x)?P[E]=x.slice():P[E]=x.clone(),!0;{let R=P[E];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return P[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function g(M){let w=M.uniforms,S=0,P=16;for(let E=0,R=w.length;E<R;E++){let I=Array.isArray(w[E])?w[E]:[w[E]];for(let N=0,U=I.length;N<U;N++){let D=I[N],O=Array.isArray(D.value)?D.value:[D.value];for(let X=0,Y=O.length;X<Y;X++){let it=O[X],$=p(it),et=S%P,V=et%$.boundary,xt=et+V;S+=V,xt!==0&&P-xt<$.storage&&(S+=P-xt),D.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=$.storage}}}let x=S%P;return x>0&&(S+=P-x),M.__size=S,M.__cache={},this}function p(M){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):ie("WebGLRenderer: Unsupported uniform value type.",M),w}function y(M){let w=M.target;w.removeEventListener("dispose",y);let S=o.indexOf(w.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function b(){for(let M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:c,dispose:b}}var n_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ni=null;function i_(){return ni===null&&(ni=new Ir(n_,16,16,zi,Wn),ni.name="DFG_LUT",ni.minFilter=en,ni.magFilter=en,ni.wrapS=Jn,ni.wrapT=Jn,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}var lo=class{constructor(t={}){let{canvas:e=Ku(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=xn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let v=f,g=new Set([Oa,Ba,Ua]),p=new Set([xn,Vn,Qs,tr,Fa,Da]),y=new Uint32Array(4),b=new Int32Array(4),M=new B,w=null,S=null,P=[],x=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,N=null,U=null,D=null,O=null;this._outputColorSpace=tn;let X=0,Y=0,it=null,$=-1,et=null,V=new De,xt=new De,ct=null,Kt=new re(0),vt=0,gt=e.width,_=e.height,A=1,F=null,k=null,q=new De(0,0,gt,_),ft=new De(0,0,gt,_),Zt=!1,Q=new Gs,ut=!1,dt=!1,ht=new _e,yt=new B,Xt=new De,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},jt=!1;function ce(){return it===null?A:1}let z=n;function be(C,H){return e.getContext(C,H)}let me,L,T,W,j,nt,Mt,bt,st,lt,wt,qt,Ct,Tt,Yt,ee,ue,G,At,at,Rt,Dt,pt;try{let C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Pe,!1),e.addEventListener("webglcontextrestored",Se,!1),e.addEventListener("webglcontextcreationerror",Nn,!1),z===null){let H="webgl2";if(z=be(H,C),z===null)throw be(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Jt()}catch(C){throw e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",Nn,!1),ne("WebGLRenderer: "+C.message),C}function Jt(){me=new hg(z),me.init(),Rt=new $x(z,me),L=new tg(z,me,t,Rt),T=new Zx(z,me),L.reversedDepthBuffer&&u&&T.buffers.depth.setReversed(!0),U=z.createFramebuffer(),D=z.createFramebuffer(),O=z.createFramebuffer(),W=new fg(z),j=new Dx,nt=new Jx(z,me,T,j,L,Rt,W),Mt=new cg(R),bt=new mp(z),Dt=new jm(z,bt),st=new ug(z,bt,W,Dt),lt=new mg(z,st,bt,Dt,W),G=new pg(z,L,nt),Yt=new eg(j),wt=new Fx(R,Mt,me,L,Dt,Yt),qt=new t_(R,j),Ct=new Ux,Tt=new Gx(me),ue=new Km(R,Mt,T,lt,m,l),ee=new Yx(R,lt,L),pt=new e_(z,W,L,T),At=new Qm(z,me,W),at=new dg(z,me,W),W.programs=wt.programs,R.capabilities=L,R.extensions=me,R.properties=j,R.renderLists=Ct,R.shadowMap=ee,R.state=T,R.info=W}v!==xn&&(E=new xg(v,e.width,e.height,a,i,r));let Vt=new fh(R,z);this.xr=Vt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let C=me.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=me.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return A},this.setPixelRatio=function(C){C!==void 0&&(A=C,this.setSize(gt,_,!1))},this.getSize=function(C){return C.set(gt,_)},this.setSize=function(C,H,tt=!0){if(Vt.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}gt=C,_=H,e.width=Math.floor(C*A),e.height=Math.floor(H*A),tt===!0&&(e.style.width=C+"px",e.style.height=H+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(gt*A,_*A).floor()},this.setDrawingBufferSize=function(C,H,tt){gt=C,_=H,A=tt,e.width=Math.floor(C*tt),e.height=Math.floor(H*tt),this.setViewport(0,0,C,H)},this.setEffects=function(C){if(v===xn){ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let H=0;H<C.length;H++)if(C[H].isOutputPass===!0){ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(V)},this.getViewport=function(C){return C.copy(q)},this.setViewport=function(C,H,tt,Z){C.isVector4?q.set(C.x,C.y,C.z,C.w):q.set(C,H,tt,Z),T.viewport(V.copy(q).multiplyScalar(A).round())},this.getScissor=function(C){return C.copy(ft)},this.setScissor=function(C,H,tt,Z){C.isVector4?ft.set(C.x,C.y,C.z,C.w):ft.set(C,H,tt,Z),T.scissor(xt.copy(ft).multiplyScalar(A).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(C){T.setScissorTest(Zt=C)},this.setOpaqueSort=function(C){F=C},this.setTransparentSort=function(C){k=C},this.getClearColor=function(C){return C.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(C=!0,H=!0,tt=!0){let Z=0;if(C){let J=!1;if(it!==null){let Lt=it.texture.format;J=g.has(Lt)}if(J){let Lt=it.texture.type,Ut=p.has(Lt),It=ue.getClearColor(),Ot=ue.getClearAlpha(),Wt=It.r,de=It.g,ge=It.b;Ut?(y[0]=Wt,y[1]=de,y[2]=ge,y[3]=Ot,z.clearBufferuiv(z.COLOR,0,y)):(b[0]=Wt,b[1]=de,b[2]=ge,b[3]=Ot,z.clearBufferiv(z.COLOR,0,b))}else Z|=z.COLOR_BUFFER_BIT}H&&(Z|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&(Z|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&z.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),N=C},this.dispose=function(){e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",Nn,!1),ue.dispose(),Ct.dispose(),Tt.dispose(),j.dispose(),Mt.dispose(),lt.dispose(),Dt.dispose(),pt.dispose(),wt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Ph),Vt.removeEventListener("sessionend",Ih),Hi.stop()};function Pe(C){C.preventDefault(),Er("WebGLRenderer: Context Lost."),I=!0}function Se(){Er("WebGLRenderer: Context Restored."),I=!1;let C=W.autoReset,H=ee.enabled,tt=ee.autoUpdate,Z=ee.needsUpdate,J=ee.type;Jt(),W.autoReset=C,ee.enabled=H,ee.autoUpdate=tt,ee.needsUpdate=Z,ee.type=J}function Nn(C){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Xn(C){let H=C.target;H.removeEventListener("dispose",Xn),Jd(H)}function Jd(C){$d(C),j.remove(C)}function $d(C){let H=j.get(C).programs;H!==void 0&&(H.forEach(function(tt){wt.releaseProgram(tt)}),C.isShaderMaterial&&wt.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,tt,Z,J,Lt){H===null&&(H=Gt);let Ut=J.isMesh&&J.matrixWorld.determinantAffine()<0,It=Qd(C,H,tt,Z,J);T.setMaterial(Z,Ut);let Ot=tt.index,Wt=1;if(Z.wireframe===!0){if(Ot=st.getWireframeAttribute(tt),Ot===void 0)return;Wt=2}let de=tt.drawRange,ge=tt.attributes.position,zt=de.start*Wt,Ee=(de.start+de.count)*Wt;Lt!==null&&(zt=Math.max(zt,Lt.start*Wt),Ee=Math.min(Ee,(Lt.start+Lt.count)*Wt)),Ot!==null?(zt=Math.max(zt,0),Ee=Math.min(Ee,Ot.count)):ge!=null&&(zt=Math.max(zt,0),Ee=Math.min(Ee,ge.count));let ze=Ee-zt;if(ze<0||ze===1/0)return;Dt.setup(J,Z,It,tt,Ot);let Le,Re=At;if(Ot!==null&&(Le=bt.get(Ot),Re=at,Re.setIndex(Le)),J.isMesh)Z.wireframe===!0?(T.setLineWidth(Z.wireframeLinewidth*ce()),Re.setMode(z.LINES)):Re.setMode(z.TRIANGLES);else if(J.isLine){let sn=Z.linewidth;sn===void 0&&(sn=1),T.setLineWidth(sn*ce()),J.isLineSegments?Re.setMode(z.LINES):J.isLineLoop?Re.setMode(z.LINE_LOOP):Re.setMode(z.LINE_STRIP)}else J.isPoints?Re.setMode(z.POINTS):J.isSprite&&Re.setMode(z.TRIANGLES);if(J.isBatchedMesh)if(me.get("WEBGL_multi_draw"))Re.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let sn=J._multiDrawStarts,Nt=J._multiDrawCounts,hn=J._multiDrawCount,ye=Ot?bt.get(Ot).bytesPerElement:1,Tn=j.get(Z).currentProgram.getUniforms();for(let qn=0;qn<hn;qn++)Tn.setValue(z,"_gl_DrawID",qn),Re.render(sn[qn]/ye,Nt[qn])}else if(J.isInstancedMesh)Re.renderInstances(zt,ze,J.count);else if(tt.isInstancedBufferGeometry){let sn=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Nt=Math.min(tt.instanceCount,sn);Re.renderInstances(zt,ze,Nt)}else Re.render(zt,ze)};function Ch(C,H,tt,Z){N!==null&&C.isNodeMaterial&&N.setObject(Z,C),ut===!0&&Yt.setState(C,tt,!1),C.transparent===!0&&C.side===gn&&C.forceSinglePass===!1?(C.side=nn,C.needsUpdate=!0,vo(C,H,Z),C.side=Hn,C.needsUpdate=!0,vo(C,H,Z),C.side=gn):vo(C,H,Z)}this.compile=function(C,H,tt=null){tt===null&&(tt=C),N!==null&&N.renderStart(C,H,tt),S=Tt.get(tt),S.init(H),x.push(S),tt.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),C!==tt&&C.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),S.setupLights(),N!==null&&N.updateLights(S.state.lightsArray),dt=this.localClippingEnabled,ut=Yt.init(this.clippingPlanes,dt),ut===!0&&Yt.setGlobalState(this.clippingPlanes,H),N!==null&&ee.render(S.state.shadowsArray,tt,H);let Z=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Lt=J.material;if(Lt)if(Array.isArray(Lt))for(let Ut=0;Ut<Lt.length;Ut++){let It=Lt[Ut];Ch(It,tt,H,J),Z.add(It)}else Ch(Lt,tt,H,J),Z.add(Lt)}),S=x.pop(),N!==null&&N.renderEnd(),Z},this.compileAsync=function(C,H,tt=null){let Z=this.compile(C,H,tt);return new Promise(J=>{function Lt(){if(Z.forEach(function(Ut){let Ot=j.get(Ut).currentProgram;(Ot===void 0||Ot.isReady())&&Z.delete(Ut)}),Z.size===0){J(C);return}setTimeout(Lt,10)}me.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let Dl=null;function Kd(C){Dl&&Dl(C)}function Ph(){Hi.stop()}function Ih(){Hi.start()}let Hi=new Id;Hi.setAnimationLoop(Kd),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(C){Dl=C,Vt.setAnimationLoop(C),C===null?Hi.stop():Hi.start()},Vt.addEventListener("sessionstart",Ph),Vt.addEventListener("sessionend",Ih),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(C,H);let tt=Vt.enabled===!0&&Vt.isPresenting===!0,Z=E!==null&&(it===null||tt)&&E.begin(R,it);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(H),H=Vt.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,H,it),S=Tt.get(C,x.length),S.init(H),S.state.textureUnits=nt.getTextureUnits(),x.push(S),ht.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Q.setFromProjectionMatrix(ht,zn,H.reversedDepth),dt=this.localClippingEnabled,ut=Yt.init(this.clippingPlanes,dt),w=Ct.get(C,P.length),w.init(),P.push(w),Vt.enabled===!0&&Vt.isPresenting===!0){let Ut=R.xr.getDepthSensingMesh();Ut!==null&&Nl(Ut,H,-1/0,R.sortObjects)}Nl(C,H,0,R.sortObjects),w.finish(),N!==null&&N.updateLights(S.state.lightsArray),R.sortObjects===!0&&w.sort(F,k),jt=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,jt&&ue.addToRenderList(w,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ut===!0&&Yt.beginShadows();let J=S.state.shadowsArray;if(ee.render(J,C,H),ut===!0&&Yt.endShadows(),(Z&&E.hasRenderPass())===!1){let Ut=w.opaque,It=w.transmissive;if(S.setupLights(),H.isArrayCamera){let Ot=H.cameras;if(It.length>0)for(let Wt=0,de=Ot.length;Wt<de;Wt++){let ge=Ot[Wt];Fh(Ut,It,C,ge)}jt&&ue.render(C);for(let Wt=0,de=Ot.length;Wt<de;Wt++){let ge=Ot[Wt];Lh(w,C,ge,ge.viewport)}}else It.length>0&&Fh(Ut,It,C,H),jt&&ue.render(C),Lh(w,C,H)}it!==null&&Y===0&&(nt.updateMultisampleRenderTarget(it),nt.updateRenderTargetMipmap(it)),Z&&E.end(R),C.isScene===!0&&C.onAfterRender(R,C,H),Dt.resetDefaultState(),$=-1,et=null,x.pop(),x.length>0?(S=x[x.length-1],nt.setTextureUnits(S.state.textureUnits),ut===!0&&Yt.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,P.pop(),P.length>0?w=P[P.length-1]:w=null,N!==null&&N.renderEnd()};function Nl(C,H,tt,Z){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)tt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLightProbeGrid)S.pushLightProbeGrid(C);else if(C.isLight)S.pushLight(C),C.castShadow&&S.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(Q)){Z&&Xt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ht);let Ut=lt.update(C),It=C.material;It.visible&&w.push(C,Ut,It,tt,Xt.z,null,H)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(Q))){let Ut=lt.update(C),It=C.material;if(Z&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Xt.copy(C.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Xt.copy(Ut.boundingSphere.center)),Xt.applyMatrix4(C.matrixWorld).applyMatrix4(ht)),Array.isArray(It)){let Ot=Ut.groups;for(let Wt=0,de=Ot.length;Wt<de;Wt++){let ge=Ot[Wt],zt=It[ge.materialIndex];zt&&zt.visible&&w.push(C,Ut,zt,tt,Xt.z,ge,H)}}else It.visible&&w.push(C,Ut,It,tt,Xt.z,null,H)}}let Lt=C.children;for(let Ut=0,It=Lt.length;Ut<It;Ut++)Nl(Lt[Ut],H,tt,Z)}function Lh(C,H,tt,Z){let{opaque:J,transmissive:Lt,transparent:Ut}=C;S.setupLightsView(tt),ut===!0&&Yt.setGlobalState(R.clippingPlanes,tt),Z&&T.viewport(V.copy(Z)),J.length>0&&_o(J,H,tt),Lt.length>0&&_o(Lt,H,tt),Ut.length>0&&_o(Ut,H,tt),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function Fh(C,H,tt,Z){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Z.id]===void 0){let zt=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Z.id]=new pn(1,1,{generateMipmaps:!0,type:zt?Wn:xn,minFilter:Bi,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xe.workingColorSpace})}let Lt=S.state.transmissionRenderTarget[Z.id],Ut=Z.viewport||V;Lt.setSize(Ut.z*R.transmissionResolutionScale,Ut.w*R.transmissionResolutionScale);let It=R.getRenderTarget(),Ot=R.getActiveCubeFace(),Wt=R.getActiveMipmapLevel();R.setRenderTarget(Lt),R.getClearColor(Kt),vt=R.getClearAlpha(),vt<1&&R.setClearColor(16777215,.5),R.clear(),jt&&ue.render(tt);let de=R.toneMapping;R.toneMapping=Gn;let ge=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),S.setupLightsView(Z),ut===!0&&Yt.setGlobalState(R.clippingPlanes,Z),_o(C,tt,Z),nt.updateMultisampleRenderTarget(Lt),nt.updateRenderTargetMipmap(Lt),me.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Ee=0,ze=H.length;Ee<ze;Ee++){let Le=H[Ee],{object:Re,geometry:sn,material:Nt,group:hn}=Le;if(Nt.side===gn&&Re.layers.test(Z.layers)){let ye=Nt.side;Nt.side=nn,Nt.needsUpdate=!0,Dh(Re,tt,Z,sn,Nt,hn),Nt.side=ye,Nt.needsUpdate=!0,zt=!0}}zt===!0&&(nt.updateMultisampleRenderTarget(Lt),nt.updateRenderTargetMipmap(Lt))}R.setRenderTarget(It,Ot,Wt),R.setClearColor(Kt,vt),ge!==void 0&&(Z.viewport=ge),R.toneMapping=de}function _o(C,H,tt){let Z=H.isScene===!0?H.overrideMaterial:null;for(let J=0,Lt=C.length;J<Lt;J++){let Ut=C[J],{object:It,geometry:Ot,group:Wt}=Ut,de=Ut.material;de.allowOverride===!0&&Z!==null&&(de=Z),It.layers.test(tt.layers)&&Dh(It,H,tt,Ot,de,Wt)}}function Dh(C,H,tt,Z,J,Lt){N!==null&&J.isNodeMaterial&&N.setObject(C,J),C.onBeforeRender(R,H,tt,Z,J,Lt),C.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(R,H,tt,Z,C,Lt),J.transparent===!0&&J.side===gn&&J.forceSinglePass===!1?(J.side=nn,J.needsUpdate=!0,R.renderBufferDirect(tt,H,Z,J,C,Lt),J.side=Hn,J.needsUpdate=!0,R.renderBufferDirect(tt,H,Z,J,C,Lt),J.side=gn):R.renderBufferDirect(tt,H,Z,J,C,Lt),C.onAfterRender(R,H,tt,Z,J,Lt)}function vo(C,H,tt){H.isScene!==!0&&(H=Gt);let Z=j.get(C),J=S.state.lights,Lt=S.state.shadowsArray,Ut=J.state.version,It=wt.getParameters(C,J.state,Lt,H,tt,S.state.lightProbeGridArray),Ot=wt.getProgramCacheKey(It),Wt=Z.programs;Z.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?H.environment:null,Z.fog=H.fog;let de=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Z.envMap=Mt.get(C.envMap||Z.environment,de),Z.envMapRotation=Z.environment!==null&&C.envMap===null?H.environmentRotation:C.envMapRotation,Wt===void 0&&(C.addEventListener("dispose",Xn),Wt=new Map,Z.programs=Wt);let ge=Wt.get(Ot);if(ge!==void 0){if(Z.currentProgram===ge&&Z.lightsStateVersion===Ut)return Uh(C,It),ge}else It.uniforms=wt.getUniforms(C),N!==null&&C.isNodeMaterial&&N.build(C,tt,It),C.onBeforeCompile(It,R),ge=wt.acquireProgram(It,Ot),Wt.set(Ot,ge),Z.uniforms=It.uniforms;let zt=Z.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(zt.clippingPlanes=Yt.uniform),Uh(C,It),Z.needsLights=ef(C),Z.lightsStateVersion=Ut,Z.needsLights&&(zt.ambientLightColor.value=J.state.ambient,zt.lightProbe.value=J.state.probe,zt.sunLights.value=J.state.sun,zt.sunLightShadows.value=J.state.sunShadow,zt.directionalLights.value=J.state.directional,zt.directionalLightShadows.value=J.state.directionalShadow,zt.spotLights.value=J.state.spot,zt.spotLightShadows.value=J.state.spotShadow,zt.rectAreaLights.value=J.state.rectArea,zt.ltc_1.value=J.state.rectAreaLTC1,zt.ltc_2.value=J.state.rectAreaLTC2,zt.pointLights.value=J.state.point,zt.pointLightShadows.value=J.state.pointShadow,zt.hemisphereLights.value=J.state.hemi,zt.sunShadowMatrix.value=J.state.sunShadowMatrix,zt.sunShadowCascade.value=J.state.sunShadowCascade,zt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,zt.spotLightMatrix.value=J.state.spotLightMatrix,zt.spotLightMap.value=J.state.spotLightMap,zt.pointShadowMatrix.value=J.state.pointShadowMatrix),Z.lightProbeGrid=S.state.lightProbeGridArray.length>0,Z.currentProgram=ge,Z.uniformsList=null,ge}function Nh(C){if(C.uniformsList===null){let H=C.currentProgram.getUniforms();C.uniformsList=ir.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function Uh(C,H){let tt=j.get(C);tt.outputColorSpace=H.outputColorSpace,tt.batching=H.batching,tt.batchingColor=H.batchingColor,tt.instancing=H.instancing,tt.instancingColor=H.instancingColor,tt.instancingMorph=H.instancingMorph,tt.skinning=H.skinning,tt.morphTargets=H.morphTargets,tt.morphNormals=H.morphNormals,tt.morphColors=H.morphColors,tt.morphTargetsCount=H.morphTargetsCount,tt.numClippingPlanes=H.numClippingPlanes,tt.numIntersection=H.numClipIntersection,tt.vertexAlphas=H.vertexAlphas,tt.vertexTangents=H.vertexTangents,tt.toneMapping=H.toneMapping}function jd(C,H){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;M.setFromMatrixPosition(H.matrixWorld);for(let tt=0,Z=C.length;tt<Z;tt++){let J=C[tt];if(J.texture!==null&&J.boundingBox.containsPoint(M))return J}return null}function Qd(C,H,tt,Z,J){H.isScene!==!0&&(H=Gt),nt.resetTextureUnits();let Lt=H.fog,Ut=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?H.environment:null,It=it===null?R.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:xe.workingColorSpace,Ot=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Wt=Mt.get(Z.envMap||Ut,Ot),de=Z.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,ge=!!tt.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),zt=!!tt.morphAttributes.position,Ee=!!tt.morphAttributes.normal,ze=!!tt.morphAttributes.color,Le=Gn;Z.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Le=R.toneMapping);let Re=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,sn=Re!==void 0?Re.length:0,Nt=j.get(Z),hn=S.state.lights;if(ut===!0&&(dt===!0||C!==et)){let Ie=C===et&&Z.id===$;Yt.setState(Z,C,Ie)}let ye=!1;Z.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==hn.state.version||Nt.outputColorSpace!==It||J.isBatchedMesh&&Nt.batching===!1||!J.isBatchedMesh&&Nt.batching===!0||J.isBatchedMesh&&Nt.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Nt.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Nt.instancing===!1||!J.isInstancedMesh&&Nt.instancing===!0||J.isSkinnedMesh&&Nt.skinning===!1||!J.isSkinnedMesh&&Nt.skinning===!0||J.isInstancedMesh&&Nt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Nt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Nt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Nt.instancingMorph===!1&&J.morphTexture!==null||Nt.envMap!==Wt||Z.fog===!0&&Nt.fog!==Lt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==Yt.numPlanes||Nt.numIntersection!==Yt.numIntersection)||Nt.vertexAlphas!==de||Nt.vertexTangents!==ge||Nt.morphTargets!==zt||Nt.morphNormals!==Ee||Nt.morphColors!==ze||Nt.toneMapping!==Le||Nt.morphTargetsCount!==sn||!!Nt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(ye=!0):(ye=!0,Nt.__version=Z.version);let Tn=Nt.currentProgram;ye===!0&&(Tn=vo(Z,H,J),N&&Z.isNodeMaterial&&N.onUpdateProgram(Z,Tn,Nt));let qn=!1,_i=!1,ds=!1,Te=Tn.getUniforms(),Oe=Nt.uniforms;if(T.useProgram(Tn.program)&&(qn=!0,_i=!0,ds=!0),Z.id!==$&&($=Z.id,_i=!0),Nt.needsLights){let Ie=jd(S.state.lightProbeGridArray,J);Nt.lightProbeGrid!==Ie&&(Nt.lightProbeGrid=Ie,_i=!0)}if(qn||et!==C){T.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Te.setValue(z,"projectionMatrix",C.projectionMatrix),Te.setValue(z,"viewMatrix",C.matrixWorldInverse);let yi=Te.map.cameraPosition;yi!==void 0&&yi.setValue(z,yt.setFromMatrixPosition(C.matrixWorld)),L.logarithmicDepthBuffer&&Te.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Te.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),et!==C&&(et=C,_i=!0,ds=!0)}if(Nt.needsLights&&(hn.state.sunShadowMap.length>0&&Te.setValue(z,"sunShadowMap",hn.state.sunShadowMap,nt),hn.state.directionalShadowMap.length>0&&Te.setValue(z,"directionalShadowMap",hn.state.directionalShadowMap,nt),hn.state.spotShadowMap.length>0&&Te.setValue(z,"spotShadowMap",hn.state.spotShadowMap,nt),hn.state.pointShadowMap.length>0&&Te.setValue(z,"pointShadowMap",hn.state.pointShadowMap,nt)),J.isSkinnedMesh){Te.setOptional(z,J,"bindMatrix"),Te.setOptional(z,J,"bindMatrixInverse");let Ie=J.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),Te.setValue(z,"boneTexture",Ie.boneTexture,nt))}J.isBatchedMesh&&(Te.setOptional(z,J,"batchingTexture"),Te.setValue(z,"batchingTexture",J._matricesTexture,nt),Te.setOptional(z,J,"batchingIdTexture"),Te.setValue(z,"batchingIdTexture",J._indirectTexture,nt),Te.setOptional(z,J,"batchingColorTexture"),J._colorsTexture!==null&&Te.setValue(z,"batchingColorTexture",J._colorsTexture,nt));let vi=tt.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&G.update(J,tt,Tn),(_i||Nt.receiveShadow!==J.receiveShadow)&&(Nt.receiveShadow=J.receiveShadow,Te.setValue(z,"receiveShadow",J.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&H.environment!==null&&(Oe.envMapIntensity.value=H.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=i_()),_i){if(Te.setValue(z,"toneMappingExposure",R.toneMappingExposure),Nt.needsLights&&tf(Oe,ds),Lt&&Z.fog===!0&&qt.refreshFogUniforms(Oe,Lt),qt.refreshMaterialUniforms(Oe,Z,A,_,S.state.transmissionRenderTarget[C.id]),Nt.needsLights&&Nt.lightProbeGrid){let Ie=Nt.lightProbeGrid;Oe.probesSH.value=Ie.texture,Oe.probesMin.value.copy(Ie.boundingBox.min),Oe.probesMax.value.copy(Ie.boundingBox.max),Oe.probesResolution.value.copy(Ie.resolution)}ir.upload(z,Nh(Nt),Oe,nt)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ir.upload(z,Nh(Nt),Oe,nt),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Te.setValue(z,"center",J.center),Te.setValue(z,"modelViewMatrix",J.modelViewMatrix),Te.setValue(z,"normalMatrix",J.normalMatrix),Te.setValue(z,"modelMatrix",J.matrixWorld),Z.uniformsGroups!==void 0){let Ie=Z.uniformsGroups;for(let yi=0,fs=Ie.length;yi<fs;yi++){let Oh=Ie[yi];pt.update(Oh,Tn),pt.bind(Oh,Tn)}}return Tn}function tf(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.sunLights.needsUpdate=H,C.sunLightShadows.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function ef(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(C,H,tt){let Z=j.get(C);Z.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),j.get(C.texture).__webglTexture=H,j.get(C.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:tt,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,H){let tt=j.get(C);tt.__webglFramebuffer=H,tt.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(C,H=0,tt=0){it=C,X=H,Y=tt;let Z=null,J=!1,Lt=!1;if(C){let It=j.get(C);if(It.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(z.FRAMEBUFFER,It.__webglFramebuffer),V.copy(C.viewport),xt.copy(C.scissor),ct=C.scissorTest,T.viewport(V),T.scissor(xt),T.setScissorTest(ct),$=-1;return}else if(It.__webglFramebuffer===void 0)nt.setupRenderTarget(C);else if(It.__hasExternalTextures)nt.rebindTextures(C,j.get(C.texture).__webglTexture,j.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let de=C.depthTexture;if(It.__boundDepthTexture!==de){if(de!==null&&j.has(de)&&(C.width!==de.image.width||C.height!==de.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(C)}}let Ot=C.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Lt=!0);let Wt=j.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Wt[H])?Z=Wt[H][tt]:Z=Wt[H],J=!0):C.samples>0&&nt.useMultisampledRTT(C)===!1?Z=j.get(C).__webglMultisampledFramebuffer:Array.isArray(Wt)?Z=Wt[tt]:Z=Wt,V.copy(C.viewport),xt.copy(C.scissor),ct=C.scissorTest}else V.copy(q).multiplyScalar(A).floor(),xt.copy(ft).multiplyScalar(A).floor(),ct=Zt;if(tt!==0&&(Z=U),T.bindFramebuffer(z.FRAMEBUFFER,Z)&&T.drawBuffers(C,Z),T.viewport(V),T.scissor(xt),T.setScissorTest(ct),J){let It=j.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+H,It.__webglTexture,tt)}else if(Lt){let It=H;for(let Ot=0;Ot<C.textures.length;Ot++){let Wt=j.get(C.textures[Ot]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ot,Wt.__webglTexture,tt,It)}}else if(C!==null&&tt!==0){let It=j.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,It.__webglTexture,tt)}$=-1};function Bh(C){let H=j.get(C);return(H.__readFormat!==C.format||H.__readType!==C.type)&&(H.__readFormat=C.format,H.__readType=C.type,H.__formatReadable=L.textureFormatReadable(C.format),H.__typeReadable=L.textureTypeReadable(C.type)),H}this.readRenderTargetPixels=function(C,H,tt,Z,J,Lt,Ut,It=0){if(!(C&&C.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=j.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ot=Ot[Ut]),Ot){T.bindFramebuffer(z.FRAMEBUFFER,Ot);try{let Wt=C.textures[It],de=Wt.format,ge=Wt.type;C.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+It);let zt=Bh(Wt);if(zt.__formatReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(zt.__typeReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-Z&&tt>=0&&tt<=C.height-J&&z.readPixels(H,tt,Z,J,Rt.convert(de),Rt.convert(ge),Lt)}finally{let Wt=it!==null?j.get(it).__webglFramebuffer:null;T.bindFramebuffer(z.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(C,H,tt,Z,J,Lt,Ut,It=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=j.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ot=Ot[Ut]),Ot)if(H>=0&&H<=C.width-Z&&tt>=0&&tt<=C.height-J){T.bindFramebuffer(z.FRAMEBUFFER,Ot);let Wt=C.textures[It],de=Wt.format,ge=Wt.type;C.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+It);let zt=Bh(Wt);if(zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ee=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ee),z.bufferData(z.PIXEL_PACK_BUFFER,Lt.byteLength,z.STREAM_READ),z.readPixels(H,tt,Z,J,Rt.convert(de),Rt.convert(ge),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let ze=it!==null?j.get(it).__webglFramebuffer:null;T.bindFramebuffer(z.FRAMEBUFFER,ze);let Le=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Qu(z,Le,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ee),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Lt),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Ee),z.deleteSync(Le),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,H=null,tt=0){let Z=Math.pow(2,-tt),J=Math.floor(C.image.width*Z),Lt=Math.floor(C.image.height*Z),Ut=H!==null?H.x:0,It=H!==null?H.y:0;nt.setTexture2D(C,0),z.copyTexSubImage2D(z.TEXTURE_2D,tt,0,0,Ut,It,J,Lt),T.unbindTexture()},this.copyTextureToTexture=function(C,H,tt=null,Z=null,J=0,Lt=0){let Ut,It,Ot,Wt,de,ge,zt,Ee,ze,Le=C.isCompressedTexture?C.mipmaps[Lt]:C.image;if(tt!==null)Ut=tt.max.x-tt.min.x,It=tt.max.y-tt.min.y,Ot=tt.isBox3?tt.max.z-tt.min.z:1,Wt=tt.min.x,de=tt.min.y,ge=tt.isBox3?tt.min.z:0;else{let Oe=Math.pow(2,-J);Ut=Math.floor(Le.width*Oe),It=Math.floor(Le.height*Oe),C.isDataArrayTexture?Ot=Le.depth:C.isData3DTexture?Ot=Math.floor(Le.depth*Oe):Ot=1,Wt=0,de=0,ge=0}Z!==null?(zt=Z.x,Ee=Z.y,ze=Z.z):(zt=0,Ee=0,ze=0);let Re=Rt.convert(H.format),sn=Rt.convert(H.type),Nt;H.isData3DTexture?(nt.setTexture3D(H,0),Nt=z.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(nt.setTexture2DArray(H,0),Nt=z.TEXTURE_2D_ARRAY):(nt.setTexture2D(H,0),Nt=z.TEXTURE_2D),T.activeTexture(z.TEXTURE0),T.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),T.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),T.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);let hn=T.getParameter(z.UNPACK_ROW_LENGTH),ye=T.getParameter(z.UNPACK_IMAGE_HEIGHT),Tn=T.getParameter(z.UNPACK_SKIP_PIXELS),qn=T.getParameter(z.UNPACK_SKIP_ROWS),_i=T.getParameter(z.UNPACK_SKIP_IMAGES);T.pixelStorei(z.UNPACK_ROW_LENGTH,Le.width),T.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Le.height),T.pixelStorei(z.UNPACK_SKIP_PIXELS,Wt),T.pixelStorei(z.UNPACK_SKIP_ROWS,de),T.pixelStorei(z.UNPACK_SKIP_IMAGES,ge);let ds=C.isDataArrayTexture||C.isData3DTexture,Te=H.isDataArrayTexture||H.isData3DTexture;if(C.isDepthTexture){let Oe=j.get(C),vi=j.get(H),Ie=j.get(Oe.__renderTarget),yi=j.get(vi.__renderTarget);T.bindFramebuffer(z.READ_FRAMEBUFFER,Ie.__webglFramebuffer),T.bindFramebuffer(z.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let fs=0;fs<Ot;fs++)ds&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,j.get(C).__webglTexture,J,ge+fs),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,j.get(H).__webglTexture,Lt,ze+fs)),z.blitFramebuffer(Wt,de,Ut,It,zt,Ee,Ut,It,z.DEPTH_BUFFER_BIT,z.NEAREST);T.bindFramebuffer(z.READ_FRAMEBUFFER,null),T.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||j.has(C)){let Oe=j.get(C),vi=j.get(H);T.bindFramebuffer(z.READ_FRAMEBUFFER,D),T.bindFramebuffer(z.DRAW_FRAMEBUFFER,O);for(let Ie=0;Ie<Ot;Ie++)ds?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Oe.__webglTexture,J,ge+Ie):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Oe.__webglTexture,J),Te?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,vi.__webglTexture,Lt,ze+Ie):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,vi.__webglTexture,Lt),J!==0?z.blitFramebuffer(Wt,de,Ut,It,zt,Ee,Ut,It,z.COLOR_BUFFER_BIT,z.NEAREST):Te?z.copyTexSubImage3D(Nt,Lt,zt,Ee,ze+Ie,Wt,de,Ut,It):z.copyTexSubImage2D(Nt,Lt,zt,Ee,Wt,de,Ut,It);T.bindFramebuffer(z.READ_FRAMEBUFFER,null),T.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Te?C.isDataTexture||C.isData3DTexture?z.texSubImage3D(Nt,Lt,zt,Ee,ze,Ut,It,Ot,Re,sn,Le.data):H.isCompressedArrayTexture?z.compressedTexSubImage3D(Nt,Lt,zt,Ee,ze,Ut,It,Ot,Re,Le.data):z.texSubImage3D(Nt,Lt,zt,Ee,ze,Ut,It,Ot,Re,sn,Le):C.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Lt,zt,Ee,Ut,It,Re,sn,Le.data):C.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Lt,zt,Ee,Le.width,Le.height,Re,Le.data):z.texSubImage2D(z.TEXTURE_2D,Lt,zt,Ee,Ut,It,Re,sn,Le);T.pixelStorei(z.UNPACK_ROW_LENGTH,hn),T.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ye),T.pixelStorei(z.UNPACK_SKIP_PIXELS,Tn),T.pixelStorei(z.UNPACK_SKIP_ROWS,qn),T.pixelStorei(z.UNPACK_SKIP_IMAGES,_i),Lt===0&&H.generateMipmaps&&z.generateMipmap(Nt),T.unbindTexture()},this.initRenderTarget=function(C){j.get(C).__webglFramebuffer===void 0&&nt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?nt.setTextureCube(C,0):C.isData3DTexture?nt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?nt.setTexture2DArray(C,0):nt.setTexture2D(C,0),T.unbindTexture()},this.resetState=function(){X=0,Y=0,it=null,T.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}};var co=new B;function In(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;co.copy(t),co[n]=0,co.normalize();let c=.5*o/(o+a),h=1-co.angleTo(s)/l;return Math.sign(co[e])===1?h*c:a/(o+a)+c+c*(1-h)}var os=class s extends mn{constructor(t=1,e=1,n=1,i=2,r=.1){let o=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new B,c=new B,h=new B(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,m=d.length/6,v=new B,g=.5/o;for(let p=0,y=0;p<d.length;p+=3,y+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*r,d[p+1]=h.y*Math.sign(l.y)+c.y*r,d[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/m)){case 0:v.set(1,0,0),f[y+0]=In(v,c,"z","y",r,n),f[y+1]=1-In(v,c,"y","z",r,e);break;case 1:v.set(-1,0,0),f[y+0]=1-In(v,c,"z","y",r,n),f[y+1]=1-In(v,c,"y","z",r,e);break;case 2:v.set(0,1,0),f[y+0]=1-In(v,c,"x","z",r,t),f[y+1]=In(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),f[y+0]=1-In(v,c,"x","z",r,t),f[y+1]=1-In(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),f[y+0]=1-In(v,c,"x","y",r,t),f[y+1]=1-In(v,c,"y","x",r,e);break;case 5:v.set(0,0,-1),f[y+0]=In(v,c,"x","y",r,t),f[y+1]=1-In(v,c,"y","x",r,e);break}}static fromJSON(t){return new s(t.width,t.height,t.depth,t.segments,t.radius)}};var ho=class extends Ti{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new mn;t.deleteAttribute("uv");let e=new ve({side:nn}),n=new ve,i=new ti(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Me(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Zi(t,n,6),a=new Ce;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Me(t,rr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Me(t,rr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Me(t,rr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Me(t,rr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Me(t,rr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new Me(t,rr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function rr(s){return new Xr({color:0,emissive:16777215,emissiveIntensity:s})}function zd(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Ne,c=0;for(let h=0;h<s.length;++h){let d=s[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<s.length;++u){let f=s[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Od(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][u]);let m=Od(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Od(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new an(o,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<e;m++){let v=h.getComponent(u,m);a.setComponent(u+d,m,v)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function ph(s,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count,o=0,a=Object.keys(s.attributes),l={},c={},h=[],d=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let y=0,b=a.length;y<b;y++){let M=a[y],w=s.attributes[M];l[M]=new w.constructor(new w.array.constructor(w.count*w.itemSize),w.itemSize,w.normalized);let S=s.morphAttributes[M];S&&(c[M]||(c[M]=[]),S.forEach((P,x)=>{let E=new P.array.constructor(P.count*P.itemSize);c[M][x]=new P.constructor(E,P.itemSize,P.normalized)}))}let f=t*.5,m=Math.log10(1/t),v=Math.pow(10,m),g=f*v;for(let y=0;y<r;y++){let b=n?n.getX(y):y,M="";for(let w=0,S=a.length;w<S;w++){let P=a[w],x=s.getAttribute(P),E=x.itemSize;for(let R=0;R<E;R++)M+=`${Math.trunc(x[d[R]](b)*v+g)},`}if(M in e)h.push(e[M]);else{for(let w=0,S=a.length;w<S;w++){let P=a[w],x=s.getAttribute(P),E=s.morphAttributes[P],R=x.itemSize,I=l[P],N=c[P];for(let U=0;U<R;U++){let D=d[U],O=u[U];if(I[O](o,x[D](b)),E)for(let X=0,Y=E.length;X<Y;X++)N[X][O](o,E[X][D](b))}}e[M]=o,h.push(o),o++}}let p=s.clone();for(let y in s.attributes){let b=l[y];if(p.setAttribute(y,new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)),y in c)for(let M=0;M<c[y].length;M++){let w=c[y][M];p.morphAttributes[y][M]=new w.constructor(w.array.slice(0,o*w.itemSize),w.itemSize,w.normalized)}}return p.setIndex(h),p}var rt=Math.PI,se=rt*2,te=(s,t=0,e=1)=>Math.min(e,Math.max(t,s)),mt=(s,t,e)=>s+(t-s)*e,le=s=>(s=te(s),s*s*(3-2*s)),Al=s=>(s=te(s),s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2),hs=s=>1-Math.pow(1-te(s),3),Qt=(s,t,e)=>te((s-t)/(e-t)),kt=(s,t,e,n=.35)=>le((s-t)/n)*le((e-s)/n),Fn=(s,t)=>((t-s+rt)%se+se)%se-rt,po=(s,t,e)=>s+Fn(s,t)*e,mo=(s,t)=>Math.atan2(t[0]-s[0],t[1]-s[1]),Et=(s,t,e)=>new B(s,t,e),mi=s=>{let t=Math.sin(s*127.1+311.7)*43758.5453;return t-Math.floor(t)},as=(s,t,e)=>"#"+new re(s).lerp(new re(t),e).getHexString(),je=9,Qe=7.5,Ze=3,fn=.18,mh=new Map;function K(s,t={}){let e=s+JSON.stringify(t);if(mh.has(e))return mh.get(e);let n=new ve({color:s,roughness:t.r??.75,metalness:t.m??0,emissive:t.e||"#000000",emissiveIntensity:t.ei??1,transparent:!!t.op,opacity:t.op??1,flatShading:!!t.flat,side:t.ds?gn:Hn});return mh.set(e,n),n}var r_=(s,t={})=>new We({color:s,toneMapped:!1,transparent:!!t.op||!!t.map,opacity:t.op??1,map:t.map||null,blending:t.add?Ni:fi,depthWrite:!t.add,side:t.ds?gn:Hn});function En(s,t=!0,e=!0){return s.traverse(n=>{n.isMesh&&(n.castShadow=t,n.receiveShadow=e)}),s}function Bt(s,t,e,n=0,i=0,r=0,o={}){let a=new Me(s,t);return a.position.set(n,i,r),o.rx&&(a.rotation.x=o.rx),o.ry&&(a.rotation.y=o.ry),o.rz&&(a.rotation.z=o.rz),o.s&&a.scale.set(...Array.isArray(o.s)?o.s:[o.s,o.s,o.s]),a.castShadow=o.cast!==!1,a.receiveShadow=o.recv!==!1,e&&e.add(a),a}function ot(s,t,e,n,i=.015,r={}){let o=n[0]-e[0],a=n[1]-e[1],l=n[2]-e[2],c=Math.min(i,o/2-.001,a/2-.001,l/2-.001),h=c>.002?new os(o,a,l,3,c):new mn(o,a,l);return Bt(h,t,s,(e[0]+n[0])/2,(e[1]+n[1])/2,(e[2]+n[2])/2,r)}var $t=(s,t,e,n,i,r,o,a,l={})=>Bt(new $i(e,n,i,l.seg||24),t,s,r,o,a,l),oe=(s,t,e,n,i,r,o={})=>Bt(new ln(e,o.seg||24,o.seg2||16),t,s,n,i,r,o),wn=(s,t,e,n,i,r,o,a={})=>Bt(new Nr(e,n,6,16),t,s,i,r,o,a);function Ge(s,t){let e=document.createElement("canvas");e.width=s,e.height=t;let n=e.getContext("2d"),i=new Fr(e);return i.colorSpace=tn,i.anisotropy=4,{c:e,g:n,t:i,w:s,h:t}}function ki(s,t,e,n,i,r){s.beginPath(),s.moveTo(t+r,e),s.arcTo(t+n,e,t+n,e+i,r),s.arcTo(t+n,e+i,t,e+i,r),s.arcTo(t,e+i,t,e,r),s.arcTo(t,e,t+n,e,r),s.closePath()}function ls(s,t=1,e=.6){let n=Ge(128,128),i=n.g.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.35,"rgba(255,255,255,.35)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.g.fillStyle=i,n.g.fillRect(0,0,128,128);let r=new Ri(new di({map:n.t,color:s,blending:Ni,depthWrite:!1,transparent:!0,opacity:e,toneMapped:!1}));return r.scale.setScalar(t),r}function uo(s,t,e,n={}){let i=new Ws(s,!1,"centripetal"),r=n.seg||Math.max(6,s.length*3),o=n.rad||6,a=n.ach??.55,l=i.computeFrenetFrames(r,!1),c=[],h=[],d=[],u=[],f=n.ref||null;for(let v=0;v<=r;v++){let g=v/r,p=i.getPointAt(g),y=l.tangents[v],b=l.normals[v].clone(),M=l.binormals[v].clone();if(f){let E=(typeof f=="function"?f(p):f).clone();b=E.sub(y.clone().multiplyScalar(E.dot(y))).normalize(),M=new B().crossVectors(y,b).normalize()}let w=mt(t,e,Math.pow(g,n.curvaR||1))*(n.bulbo?1+n.bulbo*Math.sin(rt*g):1)*(.2+.8*le(g/.12))*(.35+.65*le((1-g)/.1)),S=n.raiz??.62,P=n.ponta??1.12,x=mt(S,P,Math.pow(g,.8));for(let E=0;E<=o;E++){let R=E/o*se,I=Math.cos(R),N=Math.sin(R),U=b.clone().multiplyScalar(I*a),D=M.clone().multiplyScalar(N),O=U.clone().add(D);c.push(p.x+O.x*w,p.y+O.y*w,p.z+O.z*w);let X=b.clone().multiplyScalar(I/Math.max(a,.2)).add(M.clone().multiplyScalar(N)).normalize();h.push(X.x,X.y,X.z),d.push(x,x,x)}}for(let v=0;v<r;v++)for(let g=0;g<o;g++){let p=v*(o+1)+g,y=p+o+1;u.push(p,y,p+1,y,y+1,p+1)}let m=new Ne;return m.setAttribute("position",new he(c,3)),m.setAttribute("normal",new he(h,3)),m.setAttribute("color",new he(d,3)),m.setIndex(u),m}function bl(s,t=.85){let e=(s.index,s),n=e.attributes.position.count;return e.attributes.uv&&e.deleteAttribute("uv"),e.attributes.uv1&&e.deleteAttribute("uv1"),e.setAttribute("color",new he(new Array(n*3).fill(t),3)),e.index,e}function Sl(s){let t=s.map(e=>{if(!e.index){let n=e.attributes.position.count;e.setIndex([...Array(n).keys()])}return["uv","uv1","uv2"].forEach(n=>e.attributes[n]&&e.deleteAttribute(n)),e});return zd(t,!1)}var o_={triste:{hemi:.55,key:.85,keyCor:"#AFC0E6",amb:"#7F8FB3",lamp:!1,pend:!1,raio:.1,tv:"#EF4444",mon:"#EF4444",exp:.9},preocupado:{hemi:.75,key:1.35,keyCor:"#FFE3C7",amb:"#B9A58F",lamp:!0,pend:!1,raio:.16,tv:"#EF4444",mon:"#F97316",exp:.97},tranquilo:{hemi:.85,key:1.7,keyCor:"#FFF4E3",amb:"#C8C6E8",lamp:!0,pend:!1,raio:.28,tv:"#818CF8",mon:"#60A5FA",exp:1},feliz:{hemi:.95,key:2.1,keyCor:"#FFF1D6",amb:"#E8DCC0",lamp:!0,pend:!0,raio:.4,tv:"#22C55E",mon:"#22C55E",exp:1.04},euforico:{hemi:.8,key:1.6,keyCor:"#FFE0F2",amb:"#E9C9E6",lamp:!0,pend:!0,raio:.36,tv:"#FACC15",mon:"#FACC15",exp:1.05}},Ke={p:["#F6D3B3","#F2C3A0","#D9A27A","#B07850","#7A4E33","#4F3123"],c:["#2B1B12","#3B261B","#6B4226","#A86B3C","#D9B26A","#EFDDB0","#8E8E8E","#B33A2A","#2F4FC0","#D9568E"],l:["#2F3B52","#1F2937","#5B4636","#3F5F45","#D6CDBB","#6F86B5"],s:["#1B2230","#F4F6F8","#C02626","#7C4A21","#2563EB"]},a_={p:5,c:9,k:9,b:3,l:5,o:1,a:4,w:4,r:5,e:1,s:4},l_={p:1,c:1,k:0,b:0,l:0,o:0,a:2,w:2,r:0,e:0,s:0},kd=s=>{let t={...l_};return String(s||"").replace(/([pckbloawres])(\d)/g,(e,n,i)=>{t[n]=Math.min(+i,a_[n])}),t},c_=[.9,.95,1,1.05,1.1],h_=[.84,.92,1,1.12,1.26],Dn={alt:.89,dy:0,hz:0,lean:0,side:0,twist:0,nod:0,turn:0,roll:0,aL:[0,.12,.2],aR:[0,.12,.2],lL:[0,0],lR:[0,0],olhar:[0,0],boch:0,abre:.6,lagrima:0,nuvem:0,balao:0,yawAdd:0,sent:0,kL:0,kR:0,ikL:null,ikR:null,mL:0,mR:0,taco:-1,recuo:0,porta:0,fxk:0,gole:0,pL:0,pR:0,olhos:"A",boca:"leve",sob:"",item:"",balaoT:""},bh=["alt","dy","hz","lean","side","twist","nod","turn","roll","boch","abre","lagrima","nuvem","balao","yawAdd","sent","kL","kR","mL","mR","taco","recuo","porta","fxk","gole","pL","pR"],Rl=["aL","aR","lL","lR","olhar"],u_=["olhos","boca","sob","item","balaoT","bolas","solta","fx","gestoL","gestoR"],Sh=[.47,.565,.52],d_=Sh[1]/Sh[0]*.98,or=.29,f_=.325;function El(s,t=0,e=0,n=0,i=0,r=0,o=0,a=null){let l=new _e().compose(Et(t,e,n),new Ve().setFromEuler(new Rn(i,r,o)),a?Et(...a):Et(1,1,1));return s.applyMatrix4(l),s}function Hd(s,t){let e=s.attributes.position,n=new B;for(let i=0;i<e.count;i++){n.fromBufferAttribute(e,i);let r=n.clone().divideScalar(t),o=te(-r.y),a=te(r.y),l=1-.2*Math.pow(o,1.6)+.03*(1-Math.abs(r.y)),c=1-.1*Math.pow(o,2)*(r.z<0?1.4:.6)-.04*a*(r.z<0?1:0),h=1+.04*o;e.setXYZ(i,n.x*l,n.y*h,n.z*c+(r.z>0?.035*t*Math.pow(o,2)*r.z:0))}return s.computeVertexNormals(),s}var Cl=class{constructor(t,e,n,i){let r=this.ap=kd(n);this.molas={},this.cor=t||"#2457F5";let o=this.camisa=new ve({color:this.cor,roughness:.86}),a=this.gola=new ve({color:this.cor,roughness:.8}),l=this.branco=new ve({color:"#F4F6FA",roughness:.7}),c=this.pele=new ve({color:Ke.p[r.p],roughness:.55,emissive:"#4A1D0C",emissiveIntensity:.16}),h=this.peleSom=new ve({color:Ke.p[r.p],roughness:.6,emissive:"#4A1D0C",emissiveIntensity:.1}),d=this.cab=new ve({color:Ke.c[r.c],roughness:.5,metalness:.05,vertexColors:!0}),u=this.cabRaspado=new ve({color:Ke.c[r.c],roughness:.95}),f=this.calca=new ve({color:Ke.l[r.l],roughness:.88}),m=this.sapMat=new ve({color:Ke.s[r.s],roughness:.45}),v=this.solaMat=new ve({color:"#F4F6F8",roughness:.55}),g=K("#F8FAFC",{r:.9}),p=K("#2A1D16",{r:.45}),y=K("#D9B44A",{r:.28,m:.7});this.gir=[];let b=(V,xt=1)=>(this.gir.push({m:V,s:V.scale.clone(),k:xt}),V),M=this.root=new St,w=this.hips=new St;M.add(w),b(Bt(new ln(.155,28,18),f,w,0,.025,0,{s:[1.06,.64,.82]})),this.cinto=b($t(w,p,.145,.145,.03,0,.066,0,{s:[1.06,1,.8],seg:32})),this.fivela=ot(w,y,[-.018,.052,.108],[.018,.082,.118],.006);let S=this.spine=new St;S.position.y=.04,w.add(S);let P=new Ki([[0,-.03],[.138,-.01],[.142,.08],[.146,.15],[.162,.25],[.176,.34],[.182,.41],[.172,.462],[.135,.505],[.074,.536],[0,.55]].map(V=>new _t(V[0],V[1]))).getPoints(48);this.torso=b(Bt(new Ys(P,48),o,S,0,0,0,{s:[1.06,1,.74]})),this.barriga=b(oe(S,o,.12,0,.13,0,{s:[1.05,1,.82],seg:28,seg2:18}),1),this.barriga.visible=!1;let x=this.roupas=[],E=V=>{let xt=new St;return S.add(xt),V(xt),xt.visible=!1,x.push(xt),xt};E(V=>{let xt=new mn(.08,.01,.07);for(let ct of[-1,1])Bt(xt,a,V,ct*.042,.522,.072,{rx:.62,rz:-ct*.55});Bt(new Be(.066,.017,10,28),a,V,0,.535,-.004,{rx:rt/2});for(let ct of[.48,.44])oe(V,K("#E8EDF5",{r:.4}),.0078,0,ct,.122,{seg:10,seg2:8})}),E(V=>{Bt(new Be(.07,.012,10,28),a,V,0,.528,.004,{rx:rt/2-.12})}),E(V=>{Bt(new Be(.085,.034,12,28,rt*1.25),a,V,0,.53,-.025,{rx:rt/2-.25,rz:-rt*.125+rt}),oe(V,a,.1,0,.5,-.1,{s:[1.05,.6,.55]});for(let xt of[-1,1])wn(V,K("#F1F5F9",{r:.6}),.006,.09,xt*.03,.45,.13,{rx:.08});ot(V,a,[-.09,.07,.098],[.09,.18,.124],.025,{rx:-.05}),$t(V,a,.15,.15,.04,0,-.005,0,{s:[1.06,1,.76],seg:32})}),E(V=>{for(let Kt of[-1,1])Bt(new mn(.075,.008,.06),l,V,Kt*.04,.525,.07,{rx:.7,rz:-Kt*.75});Bt(new Be(.064,.013,10,28),l,V,0,.535,-.004,{rx:rt/2});let xt=this.gravata=new ve({color:this.cor,roughness:.5});ot(V,xt,[-.02,.49,.112],[.02,.525,.13],.008);let ct=new Xs;ct.moveTo(-.018,0),ct.lineTo(.018,0),ct.lineTo(.032,-.25),ct.lineTo(0,-.29),ct.lineTo(-.032,-.25),ct.closePath(),Bt(new Vr(ct,{depth:.008,bevelEnabled:!0,bevelSize:.003,bevelThickness:.003,bevelSegments:1}),xt,V,0,.495,.118,{rx:-.1});for(let Kt of[.4,.3,.2,.1])oe(V,K("#CBD5E1",{r:.4}),.006,.045,Kt,.14-Kt*.02,{seg:8,seg2:6})}),E(V=>{let xt=new ln(.17,24,16,-.42,.84,.35,1.75);Bt(xt,l,V,0,.27,0,{s:[.95,1.25,.82]});for(let ct of[-1,1])ot(V,K("#475569",{r:.3,m:.6}),[-.004,-0,-.004],[.004,.42,.004],.002).position.set(ct*.075,.24,.136-0);Bt(new Be(.078,.026,10,28),a,V,0,.525,-.012,{rx:rt/2-.15}),$t(V,a,.15,.15,.04,0,-.005,0,{s:[1.06,1,.76],seg:32})}),E(V=>{Bt(new Be(.075,.01,10,28),a,V,0,.52,.01,{rx:rt/2-.25})}),this.estampa=Ge(128,128);let R=Bt(new Xe(.1,.1),new We({map:this.estampa.t,transparent:!0,alphaTest:.1,toneMapped:!1}),S,-.072,.37,.126,{cast:!1,ry:-.1});this.estampaPlano=R,this.temIcone=!1,this.setIcone(e);let I=this.neck=new St;I.position.y=.52,S.add(I),$t(I,c,.05,.056,.12,0,.03,.004,{seg:20});let N=this.head=new St;N.position.set(0,.05,.01),N.scale.set(...Sh),I.add(N);let U=.2,D=.24;this.hc=U,this.R=D,Bt(Hd(new ln(D,56,40),D),c,N,0,U,0);for(let V of[-1,1])oe(N,c,.058,V*(D-.004),U-.01,-.012,{s:[.5,1.05,.85],seg:16,seg2:12}),oe(N,h,.032,V*(D+.016),U-.012,-.006,{s:[.3,.8,.5],seg:12,seg2:10});oe(N,c,.02,0,U-.008,D-.004,{s:[.7,1.8,.85],seg:14,seg2:10}),oe(N,c,.026,0,U-.046,D+.003,{s:[1.05,.9,1],seg:18,seg2:12});for(let V of[-1,1])oe(N,c,.014,V*.024,U-.054,D-.007,{s:[1,.8,1],seg:12,seg2:8});this.rosto=Ge(512,384),this.rosto.g.scale(2,2);let O=Hd(new ln(D+.003,48,28,rt/2-.9,1.8,.85,1.3),D+.003),X=new ve({map:this.rosto.t,transparent:!0,alphaTest:.04,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-2});Bt(O,X,N,0,U,0,{cast:!1}),this.rostoKey="",this.montarCabelo(N,U,D),this.montarBarba(N,U,D),this.montarOculos(N,U,D),this.montarChapeus(N,U,D),this.dedos={L:[],R:[]};let Y=(V,xt)=>{let ct=new St;ct.position.set(.19*V,.437,0),S.add(ct);let Kt=b(oe(ct,o,.058,0,-.008,0,{seg:24,seg2:18})),vt=b(oe(ct,c,.05,0,-.012,0,{seg:20,seg2:14}));b($t(ct,c,.046,.041,or,0,-or/2,0,{seg:20}));let gt=b($t(ct,o,.058,.053,.19,0,-.095,0,{seg:24})),_=b(Bt(new Be(.054,.009,8,24),o,ct,0,-.19,0,{rx:rt/2})),A=b($t(ct,o,.058,.05,or+.02,0,-or/2+.01,0,{seg:24})),F=new St;F.position.y=-or,ct.add(F);let k=b(oe(F,c,.041,0,0,0,{seg:18,seg2:12})),q=b(oe(F,o,.05,0,0,0,{seg:18,seg2:12}));b($t(F,c,.041,.031,.25,0,-.135,0,{seg:20}));let ft=b($t(F,o,.05,.042,.24,0,-.12,0,{seg:22})),Zt=b($t(F,o,.043,.043,.03,0,-.245,0,{seg:22})),Q=new St;Q.position.y=-.27,F.add(Q),oe(Q,c,.034,0,-.004,0,{s:[.75,.7,1.1],seg:14,seg2:10}),ot(Q,c,[-.016,-.094,-.04],[.016,-.008,.04],.014);let ut=this.dedos[xt];[[-.028,.036],[-.0095,.043],[.0095,.041],[.028,.033]].forEach(([yt,Xt])=>{let Gt=new St;Gt.position.set(0,-.092,yt),Q.add(Gt),wn(Gt,c,.0108,Xt,0,-Xt/2-.004,0);let jt=new St;jt.position.y=-Xt-.006,Gt.add(jt),wn(jt,c,.0098,Xt*.8,0,-Xt*.4-.002,0),ut.push({p1:Gt,p2:jt})});let dt=new St;dt.position.set(-V*.013,-.028,.036),dt.rotation.set(.4,0,V*.5),Q.add(dt),wn(dt,c,.0125,.034,0,-.022,0);let ht=new St;return ht.position.y=-.048,dt.add(ht),wn(ht,c,.0112,.028,0,-.016,0),ut.push({p1:dt,p2:ht,polegar:!0}),{sh:ct,el:F,hand:Q,lado:V,ombro:Kt,ombroPele:vt,mangaC:gt,bainhaC:_,mangaL:A,cot:k,cotM:q,antM:ft,punho:Zt,qFK:new Ve,qIK:new Ve}};this.L=Y(-1,"L"),this.R=Y(1,"R"),this.curL={c:[.5,.42,.34,.26,.25],s:.05},this.curR={c:[.5,.42,.34,.26,.25],s:.05};let it=V=>{let xt=new St;xt.position.set(.094*V,-.01,0),w.add(xt),b(oe(xt,f,.086,0,-.02,0,{seg:20,seg2:14})),b($t(xt,f,.082,.06,.42,0,-.21,0,{seg:24}));let ct=new St;ct.position.y=-.42,xt.add(ct);let Kt=b(oe(ct,f,.06,0,0,.004,{seg:18,seg2:12})),vt=b(oe(ct,c,.05,0,-.03,.006,{seg:18,seg2:12})),gt=b(Bt(new Be(.062,.012,8,22),f,ct,0,-.03,0,{rx:rt/2})),_=b($t(ct,f,.059,.047,.38,0,-.19,0,{seg:24})),A=b($t(ct,c,.046,.036,.38,0,-.19,0,{seg:20})),F=b(Bt(new Be(.049,.01,8,20),f,ct,0,-.372,0,{rx:rt/2})),k=new St;k.position.y=-.4,ct.add(k);let q=$t(k,g,.038,.041,.07,0,.012,0,{seg:16});return ot(k,m,[-.05,-.054,-.072],[.05,.022,.1],.032),oe(k,m,.052,0,-.028,.1,{s:[1,.66,1.2],seg:18,seg2:12}),ot(k,v,[-.052,-.078,-.075],[.052,-.05,.164],.013),ot(k,K("#E9EDF2",{r:.7}),[-.022,.012,-.012],[.022,.026,.072],.006,{rx:-.25}),{hp:xt,kn:ct,ft:k,joelhoC:Kt,joelhoP:vt,bermuda:gt,canC:_,canP:A,barra:F,meiaM:q}};this.PL=it(-1),this.PR=it(1),En(M,!0,!1);let $=Ge(64,64),et=$.g.createRadialGradient(32,32,0,32,32,32);et.addColorStop(0,"rgba(0,0,0,.45)"),et.addColorStop(1,"rgba(0,0,0,0)"),$.g.fillStyle=et,$.g.fillRect(0,0,64,64),this.blob=new Me(new Xe(.7,.7),new We({map:$.t,transparent:!0,depthWrite:!1})),this.blob.rotation.x=-rt/2,this.blob.position.y=.004,this.mL=new B,this.mR=new B,this.gp=new B(0,-.06,0),this.pDy=0,this.pNod=0,this.pT=null,this.pYaw=null,this.esc=1,this.setAparencia(n,i)}montarCabelo(t,e,n){let i=this.cab,r=this.cortes=[],o=Et(0,e,0),a=(p,y,b=0)=>Et(Math.sin(p)*Math.sin(y),Math.cos(p),Math.sin(p)*Math.cos(y)).multiplyScalar(n+b).add(o),l=p=>p.clone().sub(o).normalize(),c=p=>{let y=Math.cos(p);return y>0?mt(1.32,.98,Math.pow(y,1.4)):mt(1.32,1.95,Math.pow(-y,.9))},h=(p=.012,y=1.36,b=0)=>{let M=new ln(n+p,56,32,0,se,0,2.1),w=M.attributes.position,S=new B;for(let P=0;P<w.count;P++){S.fromBufferAttribute(w,P);let x=Math.acos(te(S.y/(n+p),-1,1)),E=Math.atan2(S.x,S.z),R=c(E)+b;if(x>R){let I=a(R,E,p).sub(o);w.setXYZ(P,I.x,I.y,I.z)}}return M.computeVertexNormals(),El(M,0,e,0),bl(M,.7)},d=(p,y,b,M={})=>uo(p,y,b,{ref:w=>l(w),...M}),u=(p,y,b,M,w,S,P=7,x=.012)=>{let E=[];for(let R=0;R<=P;R++){let I=R/P;E.push(a(mt(p,b,I),mt(y,M,I),mt(w,S,I)+x*Math.sin(rt*I)))}return E},f=(p,y)=>mi(p*3.7+y)-.5,m=(p,y)=>{let b=new St;if(p.length){let M=Bt(Sl(p),i,b);M.castShadow=!0}return y&&y(b),r[g]=b,b},v=[];v[0]=()=>{{let p=[h(.012)];for(let S=0;S<26;S++){let P=rt*.32+S/25*rt*1.36+f(S,1)*.08;p.push(d(u(.45+f(S,2)*.1,P,c(P)-.05,P+f(S,3)*.12,.03,.006),.045,.014))}let y=m(p),b=this.fio=new St;b.position.copy(a(.45,0,0)),y.add(b);let M=[],w=b.position.clone();for(let S=0;S<16;S++){let P=-.75+S/15*1.5+f(S,4)*.06,x=.07+.035*Math.cos(P*1.6),E=[a(.95,P*.9,.006),a(.62,P*.85,x*.75),a(.3,P*.7,x),a(.05+f(S,5)*.1,P*.5+rt*.06,x*.65),a(.42,rt+P*.4,.012)].map(R=>R.sub(w));M.push(uo(E,.05,.016,{ref:R=>R.clone().add(w).sub(o).normalize(),bulbo:.25}))}Bt(Sl(M),i,b),this.fioBase=b}},v[1]=()=>{{let p=[h(.012)];for(let y=0;y<44;y++){let b=y/44*se+f(y,6)*.1,M=Math.cos(b),w=c(b)+(M>.5?.02:-.02);p.push(d(u(.08+mi(y)*.2,b*.85+f(y,7)*.2,w,b,.03,M>.5?.02:.008,7,.018),.042,.012))}m(p)}},v[2]=()=>{{let p=new St;Bt(h(.004,1.36,.04),this.cabRaspado,p),r[g]=p}},v[3]=()=>{{let p=new ln(n+.03,40,18,rt-.5,rt+1,.75,1.55),y=p.attributes.position;for(let w=0;w<y.count;w++){let S=y.getY(w);S<0&&y.setY(w,S*1.9);let P=y.getX(w),x=y.getZ(w);if(S<0){let E=1+.12*(-S/n);y.setX(w,P*E),y.setZ(w,x*E)}}p.computeVertexNormals(),El(p,0,e,0);let b=[h(.014),bl(p,.66)],M=.35;for(let w=0;w<64;w++){let S=w%2?1:-1,P=Math.floor(w/2)/31,x=M+S*(.06+P*rt*.94)+f(w,8)*.05,E=Math.cos(x),R=.16+mi(w+2)*.08,I=u(R,M+S*.04,rt*.4,x,.032,.036,4,.012),N=c(x),U=a(Math.min(N,1.45),x,.04);if(E>.6)I.push(a(.92,x,.045),a(1.08,x*1.25+S*.1,.035));else{I.push(U);let D=l(U).setY(0).normalize(),O=.3+.1*(1-Math.abs(E))+mi(w)*.05;I.push(U.clone().add(D.clone().multiplyScalar(.035)).add(Et(0,-O*.5,0)),U.clone().add(D.clone().multiplyScalar(.06)).add(Et(0,-O,E<-.3?-.02:0)))}b.push(d(I,.085,.03,{bulbo:.15,seg:24,ach:.4,raiz:.78}))}m(b)}},v[4]=()=>{{let p=[h(.018)],y=0;for(let b=0;b<200&&y<120;b++){let M=Math.acos(1-2*((b+.5)/200)),w=b*2.39996;if(M>c(Math.atan2(Math.sin(w),Math.cos(w)))-.05)continue;y++;let S=a(M,w,.03),P=l(S),x=Et(-P.z,0,P.x).normalize();x.lengthSq()<.5&&x.set(1,0,0);let E=new B().crossVectors(P,x),R=[],I=.026+mi(b)*.012,N=1.5;for(let U=0;U<=12;U++){let D=U/12,O=D*N*se+b;R.push(S.clone().add(x.clone().multiplyScalar(Math.cos(O)*I)).add(E.clone().multiplyScalar(Math.sin(O)*I)).add(P.clone().multiplyScalar(D*.045)))}p.push(uo(R,.02,.014,{ach:1,rad:6,seg:18}))}m(p)}},v[5]=()=>{{let p=[h(.02)],y=Et(0,e+.1,-.08);for(let M=0;M<170;M++){let w=1-2*((M+.5)/170),S=Math.sqrt(1-w*w),P=M*2.39996,x=Et(S*Math.sin(P),w,S*Math.cos(P)),E=y.clone().add(x.clone().multiply(Et(.27,.24,.26)));if(E.z-o.z>.12&&E.y<e+.12||E.y<e-.12)continue;let R=new Qi(.058+mi(M)*.016,1),I=ph(R);I.computeVertexNormals(),El(I,E.x,E.y,E.z),p.push(bl(I,.82+mi(M+1)*.25))}let b=m(p);b.userData.volume=b.children[0]}},v[6]=()=>{{let p=[h(.014)],y=Et(0,e+.2,-.17);for(let x=0;x<30;x++){let E=x/30*se,R=c(E);if(Math.cos(E)<-.6)continue;let I=a(R-.02,E,.006),N=a(R*.5,E*.6+rt*.4*Math.sign(Math.sin(E)||1),.022);p.push(d([I,N,y.clone().add(Et(0,-.02,.02))],.04,.02))}let b=new Qi(.095,3),M=b.attributes.position,w=new B;for(let x=0;x<M.count;x++){w.fromBufferAttribute(M,x);let E=w.clone().normalize();w.copy(E.multiplyScalar(.095*(1+.06*Math.sin(Math.atan2(E.x,E.z)*7+E.y*9)))),M.setXYZ(x,w.x,w.y,w.z)}let S=ph(b);S.computeVertexNormals(),El(S,y.x,y.y+.04,y.z-.03,.4),p.push(bl(S,1));let P=m(p,x=>Bt(new Be(.06,.012,8,20),K("#111827",{r:.5}),x,y.x,y.y-.02,y.z,{rx:rt/2+.4}));P.userData.volume=P.children[0]}},v[7]=()=>{{let p=new St;Bt(h(.004,1.36,.04),this.cabRaspado,p);let y=[h(.012,0,-0).applyMatrix4(new _e)];y.length=0;for(let M=0;M<15;M++){let w=M/14,S=mt(-.95,1.75,w),P=Math.abs(S),x=S<0?0:rt,E=.07+.06*Math.sin(rt*te(w*1.15)),R=a(P,x,-.005),I=l(R),N=(S<0,Et(0,0,-1)),U=R.clone().add(I.clone().multiplyScalar(E)).add(Et(0,0,-.05-.03*w)).add(N.multiplyScalar(0));for(let D of[-1,0,1])y.push(uo([a(P+(S<0?-1:1)*0,x,-.004).add(Et(D*.022,0,0)),R.clone().add(I.clone().multiplyScalar(E*.5)).add(Et(D*.012,0,-.01)),U.clone().add(Et(D*.006,0,0))],.065,.01,{ref:Et(1,0,0),rad:6,seg:10,ach:.8,raiz:.7}))}let b=Bt(Sl(y),i,p);p.userData.volume=b,r[g]=p}},v[8]=()=>{{let p=[h(.012)],y=Et(0,e+.06,-n-.03);for(let S=0;S<34;S++){let P=S/34*se,x=c(P);Math.cos(P)<-.7||p.push(d([a(x-.03,P,.006),a(x*.55,P*.75+(Math.sin(P)>0?.6:-.6),.02),y.clone().add(Et(0,.01,.03))],.04,.02))}let b=m(p,S=>Bt(new Be(.035,.012,8,18),K("#E11D48",{r:.5}),S,y.x,y.y,y.z,{rx:.2})),M=new St;M.position.copy(y),b.add(M);let w=[];for(let S=0;S<9;S++){let P=S/9*se,x=Et(Math.cos(P)*.018,Math.sin(P)*.015,0);w.push(uo([x.clone(),x.clone().add(Et(0,.02,-.07)),x.clone().multiplyScalar(1.6).add(Et(0,-.12,-.1)),x.clone().multiplyScalar(1.2).add(Et(0,-.32,-.06)),x.clone().multiplyScalar(.4).add(Et(0,-.44,-.03))],.032,.008,{ref:Et(0,0,-1),bulbo:.4,seg:20}))}Bt(Sl(w),i,M),this.molas.rabo={g:M,a:0,v:0,b:0,vb:0},b.userData.volume=M}},v[9]=()=>{r[g]=new St};let g=0;this.corte=p=>{if(!r[p]){g=p,v[p]();let y=r[p];y.visible=!1,En(y,!0,!1),t.add(y),this.chapeuAtual!==void 0&&y.userData.volume&&(y.userData.volume.visible=!this.chapeuAtual)}return r[p]}}montarBarba(t,e,n){let i=this.barbas=[null],r=this.barbaMat=new ve({color:Ke.c[this.ap.c],roughness:1}),o=l=>{for(let c of[-1,1])wn(l,r,.0095,.048,c*.028,e-.078,n-.012,{rz:rt/2+c*.25,s:[1,1,.6]})},a=new St;o(a),oe(a,r,.028,0,e-.17,n-.06,{s:[1,1.15,.5],seg:14,seg2:10}),i.push(a),a=new St,o(a),Bt(new ln(n+.008,40,16,rt/2-1.3,2.6,2,.85),r,a,0,e,0),i.push(a),a=new St;for(let l of[-1,1])wn(a,r,.012,.05,l*.03,e-.076,n-.01,{rz:rt/2+l*.35,s:[1,1,.7]});i.push(a),i.forEach(l=>{l&&(l.visible=!1,t.add(l))})}montarOculos(t,e,n){let i=this.oculos=new St,r=K("#1F2937",{r:.35,m:.3});this.lente=new ve({color:"#0B1220",roughness:.15,metalness:.4,transparent:!0,opacity:.85});let o=.104,a=e+.005,l=n+.03;for(let c of[-1,1]){Bt(new Be(.056,.007,8,28),r,i,c*o,a,l,{ry:c*.18});let h=Bt(new Ji(.054,24),this.lente,i,c*o,a,l-.002,{ry:c*.18,cast:!1});h.name="lente",ot(i,r,[-.006,-.008,-.2],[.006,.008,0],.003).position.set(c*(n+.012),a+.01,l-.12),ot(i,r,[-.05,-.007,-.006],[.05,.007,.006],.003).position.set(c*(o+.1),a+.008,l-.012)}$t(i,r,.005,.005,.07,0,a+.008,l+.006,{rz:rt/2}),i.visible=!1,t.add(i)}montarChapeus(t,e,n){let i=this.chapeus={},r=new St,o=K("#2563EB",{r:.7});Bt(new ln(n+.035,36,16,0,se,0,1.3),o,r,0,e+.01,-.01,{rx:-.18}),ot(r,o,[-.15,-.01,0],[.15,.01,.2],.01,{rx:.18}).position.set(0,e+.12,.19),oe(r,K("#1E3A8A"),.025,0,e+n+.03,-.02,{seg:10,seg2:8}),i.a_bone=r,r=new St;let a=K("#111827",{r:.6});$t(r,a,n+.03,n+.03,.12,0,e+.16,0,{seg:36}),ot(r,a,[-.34,-.012,-.34],[.34,.012,.34],.01,{ry:rt/4}).position.set(0,e+.23,0),$t(r,K("#F5B400",{r:.4}),.008,.008,.2,.2,e+.13,.12,{rz:.1}),i.a_formatura=r,r=new St;let l=K("#F5B400",{r:.25,m:.85});$t(r,l,n*.82,n*.86,.1,0,e+.22,0,{seg:36});for(let c=0;c<6;c++){let h=c/6*se;Bt(new Qn(.04,.11,10),l,r,Math.sin(h)*n*.8,e+.31,Math.cos(h)*n*.8),oe(r,K(c%2?"#DC2626":"#2563EB",{r:.2,m:.3}),.024,Math.sin(h)*n*.86,e+.22,Math.cos(h)*n*.86,{seg:10,seg2:8})}i.a_cartola=r,Object.values(i).forEach(c=>{c.visible=!1,t.add(c)})}setAparencia(t,e){let n=this.ap=kd(t);this.pele.color.set(Ke.p[n.p]),this.peleSom.color.set(as(Ke.p[n.p],"#7A3B22",.12)),this.cab.color.set(Ke.c[n.c]),this.barbaMat.color.set(as(Ke.c[n.c],Ke.p[n.p],.12)),this.cabRaspado.color.set(as(Ke.c[n.c],Ke.p[n.p],.22)),this.calca.color.set(Ke.l[n.l]),this.sapMat.color.set(Ke.s[n.s]),this.solaMat.color.set(n.s===1?"#1F2937":"#F4F6F8");let i=this.chapeus[e]?e:"";this.chapeuAtual=i,this.corte(n.k),this.cortes.forEach((a,l)=>{a&&(a.visible=l===n.k,a.userData.volume&&(a.userData.volume.visible=!i))}),this.barbas.forEach((a,l)=>{a&&(a.visible=l===n.b)}),Object.entries(this.chapeus).forEach(([a,l])=>{l.visible=a===i}),this.fio&&(this.fio.visible=!i);let r=e==="a_oculos";this.oculos.visible=r||n.o===1,this.lente.opacity=r?.88:.12,this.lente.color.set(r?"#0B1220":"#DCEBFF"),this.esc=c_[n.a],this.root.scale.setScalar(this.esc);let o=h_[n.w];this.fGir=o;for(let{m:a,s:l,k:c}of this.gir){let h=1+(o-1)*c;a.scale.set(l.x*h,l.y,l.z*h)}this.barriga.visible=n.w>=3,this.barriga.position.z=(o-1)*.16,this.L.sh.position.x=-.19*(1+(o-1)*.6),this.R.sh.position.x=.19*(1+(o-1)*.6),this.PL.hp.position.x=-.094*(1+(o-1)*.5),this.PR.hp.position.x=.094*(1+(o-1)*.5),this.fivela.position.z=.113*(1+(o-1)*.9),this.estampaPlano.position.z=.126*(1+(o-1)*.75),this.setRoupa(n.r,n.e),this.rostoKey=""}setRoupa(t,e){this.roupas.forEach((a,l)=>{a.visible=l===t});let n=t===2||t===3||t===4,i=t===5,r=t===3;for(let a of[this.L,this.R]){a.mangaC.visible=a.bainhaC.visible=!n&&!i,a.mangaL.visible=a.cotM.visible=a.antM.visible=a.punho.visible=n,a.ombro.visible=!i,a.ombroPele.visible=i,a.cot.visible=!n;let l=r?this.branco:this.camisa;for(let c of["ombro","mangaC","bainhaC","mangaL","cotM","antM","punho"])a[c].material=l}this.torso.material=r?this.branco:this.camisa,this.barriga.material=this.torso.material,this.estampaPlano.visible=this.temIcone&&!r&&t!==4;let o=e===1;for(let a of[this.PL,this.PR])a.joelhoC.visible=a.canC.visible=a.barra.visible=!o,a.joelhoP.visible=a.canP.visible=a.bermuda.visible=o,a.meiaM.scale.y=o?1.8:1,a.meiaM.position.y=o?.04:.012}setCor(t){let e=t||"#2457F5";this.cor=e,this.camisa.color.set(e),this.gola.color.set(e).lerp(new re(this.ap.r===2?"#000000":"#FFFFFF"),this.ap.r===2?.08:.16),this.gravata&&this.gravata.color.set(e)}setIcone(t){let{g:e,t:n}=this.estampa;e.clearRect(0,0,128,128);let i=!!(t&&typeof window<"u"&&window.RI&&window.RI.tem(t+":f"));i&&window.RI.desenhar(e,t+":f",64,64,104,"rgba(255,255,255,.92)"),this.temIcone=i,this.estampaPlano.visible=i&&this.ap.r!==3&&this.ap.r!==4,n.needsUpdate=!0}ik(t,e,n){let i=t.sh,o=this.spine.worldToLocal(e.clone()).sub(i.position),a=or,l=f_,c=o.length();c=te(c,Math.abs(a-l)+.02,a+l-.002);let h=te((a*a+l*l-c*c)/(2*a*l),-1,1),d=rt-Math.acos(h),u=Et(0,-a-l*Math.cos(d),l*Math.sin(d)),f=Et(0,-1,0),m=u.clone().normalize(),v=o.clone().normalize(),g=new B().crossVectors(m,f).normalize(),p=Et(t.lado*.55,-1,-.45).normalize(),y=new B().crossVectors(v,p);y.lengthSq()<1e-6&&y.set(1,0,0),y.normalize();let b=new _e().makeBasis(m,g,new B().crossVectors(m,g)),M=new _e().makeBasis(v,y,new B().crossVectors(v,y));t.qIK.setFromRotationMatrix(M.multiply(b.transpose())),t.qFK.copy(i.quaternion),i.quaternion.slerpQuaternions(t.qFK,t.qIK,n),t.el.rotation.x=mt(t.el.rotation.x,-d,n)}aplicar(t,e=0,n=0){let i=Math.sin(e*1.75),r=Math.sin(e*1.75-.7),o=Math.sin(e*.43)*.6+Math.sin(e*.97+1.3)*.4,a=1-te(Math.abs(t.dy)*4+Math.abs(t.hz)*4,0,.6),l=t.alt*mt(1,1/this.esc,te(t.sent||0));this.hips.position.set(.004*o*a,l+t.dy/this.esc+.0025*i,t.hz),this.spine.rotation.set(t.lean+.012*r,t.twist+.02*o*a,t.side+.008*o*a);let c=this.fGir||1;this.torso.scale.set(1.06*c*(1+.01*i),1+.007*i,.74*c*(1+.022*i));let h=Math.sin(e*.52+.6)*.03+Math.sin(e*1.31)*.012;this.neck.rotation.set(t.nod*.35,t.turn*.4+h*.4,t.roll*.4),this.head.rotation.set(t.nod*.65+.008*i,t.turn*.6+h*.6,t.roll*.6+.01*o*a);let d=t.item||"",u=.01*i;this.L.sh.position.y=.437+u,this.R.sh.position.y=.437+u,this.L.sh.rotation.set(-t.aL[0],0,-t.aL[1]),this.L.el.rotation.x=-t.aL[2],this.R.sh.rotation.set(-t.aR[0],0,t.aR[1]),this.R.el.rotation.x=-t.aR[2],this.PL.hp.rotation.x=-t.lL[0],this.PL.kn.rotation.x=t.lL[1],this.PL.ft.rotation.x=t.lL[0]-t.lL[1]+(t.pL||0),this.PR.hp.rotation.x=-t.lR[0],this.PR.kn.rotation.x=t.lR[1],this.PR.ft.rotation.x=t.lR[0]-t.lR[1]+(t.pR||0),(t.kL>.001&&t.ikL||t.kR>.001&&t.ikR)&&(this.root.updateMatrixWorld(!0),t.kL>.001&&t.ikL&&this.ik(this.L,Et(...t.ikL),te(t.kL)),t.kR>.001&&t.ikR&&this.ik(this.R,Et(...t.ikR),te(t.kR)));let f={controle:[[-.08,0,.12],[0,0,-.12]],tacoShot:[[.25,0,-.1],[-.15,.2,.25]],tacoV:[[0,0,.1],[0,.3,0]],xicara:[null,[.18,-.12,0]],nota:[null,[-.12,0,-.1]],tecla:[[.9,0,0],[.9,0,0]],celular:[null,[.5,-.3,.2]],moeda:[null,[.3,0,0]]}[d]||[null,null],[m,v]=f;this.L.hand.rotation.set(m?m[0]:t.mL*.9,m?m[1]:0,m?m[2]:0),this.R.hand.rotation.set(v?v[0]:t.mR*.9,v?v[1]:0,v?v[2]:0);let g=n>0?Math.min(1,n*16):1;for(let[y,b,M]of[[-1,"L",this.L],[1,"R",this.R]]){let w=this.gestoDe(t,d,b,e),S=b==="L"?this.curL:this.curR;S.s+=(w.s-S.s)*g,this.dedos[b].forEach((P,x)=>{S.c[x]+=(w.c[x]-S.c[x])*g*(P.polegar?.9:1-x*.04);let E=S.c[x];if(P.polegar){P.p1.rotation.z=y*.5-y*E*.4,P.p1.rotation.x=.4-.25*E,P.p2.rotation.z=-y*E*.7;return}P.p1.rotation.z=-y*E*1.08,P.p2.rotation.z=-y*E*1.3,P.p1.rotation.x=-S.s*(x-1.5)*.32}),w.preso||(M.hand.rotation.x+=.05*Math.sin(e*.9+y),M.hand.rotation.z+=.04*Math.sin(e*.7+y*2))}if(n>0&&this.pT!==null){let y=Math.min(n,.05),b=this.root.rotation.y,M=this.pYaw==null?0:Fn(this.pYaw,b)/y,w=-(t.dy-this.pDy)/y*5-(t.nod-this.pNod)/y*.5;for(let P in this.molas){let x=this.molas[P];x.v+=(w*.8-70*x.a-7*x.v)*y,x.a=te(x.a+x.v*y,-.6,.6),x.vb+=(-M*1.2-60*x.b-6*x.vb)*y,x.b=te(x.b+x.vb*y,-.6,.6)}let S=this.fioM||(this.fioM={a:0,v:0});S.v+=(w-90*S.a-9*S.v)*y,S.a=te(S.a+S.v*y,-.4,.4),this.pYaw=b}if(this.pDy=t.dy,this.pNod=t.nod,this.pT=e,this.fio){let y=this.fioM?this.fioM.a:0;this.fio.rotation.x=y*.6+.015*i,this.fio.rotation.z=.02*o}let p=this.molas.rabo;p&&(p.g.rotation.x=.15+p.a*.8-(t.lean+t.nod)*.6,p.g.rotation.z=p.b*.8+.04*o),this.root.updateMatrixWorld(!0),this.L.hand.localToWorld(this.mL.copy(this.gp)),this.R.hand.localToWorld(this.mR.copy(this.gp))}gestoDe(t,e,n,i){let r=p_,o=n==="L"?t.gestoL:t.gestoR;if(!o){let c=n==="L"?t.aL:t.aR,h=n==="L"?t.mL:t.mR;e==="tecla"?o="tecla":e==="controle"?o="controle":e==="tacoShot"?o=n==="L"?"ponte":"segura":e==="tacoV"?o=n==="R"?"segura":"":n==="R"&&/moeda|dardo/.test(e)?o="pinca":n==="R"&&/xicara|nota|celular/.test(e)&&(o="segura"),!o&&h>.5&&(o="segura"),!o&&c[0]>2.2&&(o="aberta")}let a=r[o]||r.solto,l=a.c.slice();if(o==="tecla")for(let c=0;c<4;c++)l[c]+=.32*Math.max(0,Math.sin(i*12.5+c*2.1+(n==="L"?0:1.3)))**3;else if(o==="controle")l[4]=.35+.25*Math.max(0,Math.sin(i*(n==="L"?7:9.5)+(n==="L"?0:2)));else if(!a.preso)for(let c=0;c<5;c++)l[c]+=.07*Math.sin(i*(.6+c*.17)+c*1.7+(n==="L"?0:3))+(t.tamb&&n==="R"&&c<4?.35*Math.max(0,Math.sin(i*14-c*1.1))**4:0);return{c:l,s:a.s,preso:!!a.preso}}desenharRosto(t,e){t&&t.boca!==void 0&&t.sorr===void 0&&(t=Zd(t));let n=this.pisca||(this.pisca={prox:1.5,t:-9,dup:!1});e>n.prox&&(n.t=e,n.dup=Math.random()<.18,n.prox=e+(1.8+Math.random()*3.6)*(t.dentroS<-.3?.7:1)),t.piscar&&e-n.t>.5&&(n.t=e,n.prox=e+2+Math.random()*3);let i=e-n.t,r=0;i<.16?r=Math.sin(i/.16*rt):n.dup&&i>.24&&i<.4&&(r=Math.sin((i-.24)/.16*rt));let o=(vt,gt=20)=>Math.round((vt||0)*gt),a=["sorr","abre","larg","redondo","assim","dentes","lingua","morde","olho","feliz","fecha","sobeS","dentroS","sobeAssim","boch","ox","oy"].map(vt=>o(t[vt])).join(",")+"|"+o(r,8)+"|"+(t.lagrima>.05?Math.floor(e*.6%1*24):-1);if(a===this.rostoKey)return;this.rostoKey=a;let{g:l,t:c}=this.rosto;l.save(),l.setTransform(1,0,0,1,0,0),l.clearRect(0,0,512,384),l.restore(),l.save(),l.translate(128,0),l.scale(d_,1),l.translate(-128,0);let h=Ke.p[this.ap.p],d=Ke.c[this.ap.c],u=this.ap.p>=4,f=128,m=104,v=47,g=u?"#160C07":"#2A1810",p=u?"rgba(20,8,4,.2)":"rgba(120,60,35,.12)";l.lineCap="round",l.lineJoin="round";let y=te(t.sorr,-1,1),b=te(t.abre),M=te(t.feliz),w=te(Math.max(t.fecha||0,r*.98));for(let vt of[-1,1]){let gt=l.createRadialGradient(f+vt*v,m-2,4,f+vt*v,m-2,32);gt.addColorStop(0,p),gt.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=gt,l.beginPath(),l.ellipse(f+vt*v,m-2,32,22,0,0,se),l.fill()}let S=.16+.84*te(t.boch),P=Math.max(0,y)*6;for(let vt of[-1,1]){let gt=140-P,_=l.createRadialGradient(f+vt*60,gt,1,f+vt*60,gt,25);_.addColorStop(0,`rgba(235,95,95,${.42*S})`),_.addColorStop(1,"rgba(235,95,95,0)"),l.fillStyle=_,l.beginPath(),l.ellipse(f+vt*60,gt,25,14,0,0,se),l.fill()}let x=m-30;for(let vt of[-1,1]){let gt=(t.sobeAssim||0)*(vt>0?1:-1),_=x-(t.sobeS||0)*9-(t.dentroS||0)*8-gt*5,A=x-(t.sobeS||0)*8+(t.dentroS||0)*4-2-gt*6-M*2,F=f+vt*16,k=f+vt*(v+25),q=Math.min(_,A)-5;l.fillStyle=as(d,"#000000",.3),l.beginPath(),l.moveTo(F,_+2),l.quadraticCurveTo((F+k)/2,q-2,k,A+1),l.quadraticCurveTo((F+k)/2,q+5,F,_+9),l.closePath(),l.fill()}let E=23.5,R=17,I=te((t.olho??1)*(1-w),0,1.25);for(let vt of[-1,1]){let gt=f+vt*v,_=R*1.22*I,A=Math.max(R*(1.05-.85*M)*Math.min(I,1),0),F=m+M*4,k=()=>{l.beginPath(),l.moveTo(gt-E,F+1),l.bezierCurveTo(gt-E*.6,F-_,gt+E*.5,F-_*1.04,gt+E,F-1),l.bezierCurveTo(gt+E*.55,F+A-M*9,gt-E*.55,F+A-M*9,gt-E,F+1),l.closePath()};if(_>1.2&&_+A-M*9>2.5){l.save(),k(),l.clip(),l.fillStyle="#FBF8F4",l.fillRect(gt-E-2,F-R*1.6,E*2+4,R*3.2);let q=gt+(t.ox||0)*4.8,ft=F+(t.oy||0)*3.2+1,Zt=13*(1-.05*Math.max(0,I-1)*4),Q=l.createRadialGradient(q,ft-2,1,q,ft,Zt);Q.addColorStop(0,"#8A5530"),Q.addColorStop(.6,"#55301A"),Q.addColorStop(1,"#22120A"),l.fillStyle=Q,l.beginPath(),l.arc(q,ft,Zt,0,se),l.fill(),l.fillStyle="#0B0604",l.beginPath(),l.arc(q,ft,6-1.2*Math.max(0,I-1)*4,0,se),l.fill(),l.fillStyle="rgba(255,255,255,.97)",l.beginPath(),l.arc(q-4,ft-4.6,3.8,0,se),l.fill(),l.fillStyle="rgba(255,255,255,.75)",l.beginPath(),l.arc(q+3.6,ft+3.4,1.5,0,se),l.fill(),l.fillStyle="rgba(0,0,0,.16)",l.fillRect(gt-E-2,F-_-2,E*2+4,7),l.restore(),l.strokeStyle=g,l.lineWidth=3.6,l.beginPath(),l.moveTo(gt-E,F+1),l.bezierCurveTo(gt-E*.6,F-_,gt+E*.5,F-_*1.04,gt+E,F-1),l.stroke(),l.lineWidth=2.4,l.beginPath(),l.moveTo(gt+vt*E*.9,F-2),l.lineTo(gt+vt*(E+5),F-6.5),l.stroke(),M>.25&&(l.strokeStyle=u?`rgba(10,4,2,${.25*M})`:`rgba(150,75,50,${.3*M})`,l.lineWidth=1.6,l.beginPath(),l.moveTo(gt-11,F+12),l.quadraticCurveTo(gt,F+16,gt+11,F+12),l.stroke())}else{let q=M>.4?-7*M:6;if(l.strokeStyle=g,l.lineWidth=3.6,l.beginPath(),l.moveTo(gt-E,F+1),l.quadraticCurveTo(gt,F+q,gt+E,F),l.stroke(),M<=.4){l.lineWidth=1.8;for(let ft of[-.7,-.15,.4,.85]){let Zt=gt+ft*E;l.beginPath(),l.moveTo(Zt,F+4.5-Math.abs(ft)*2),l.lineTo(Zt+vt*1.2,F+8.5-Math.abs(ft)*2),l.stroke()}}}}l.fillStyle=u?"rgba(10,4,2,.35)":"rgba(120,55,35,.28)";for(let vt of[-1,1])l.beginPath(),l.ellipse(f+vt*6.5,141,3.2,1.8,vt*.35,0,se),l.fill();let N=te(t.redondo);if(y>.45&&N<.5){let vt=(y-.45)*2*(1-N*2);l.strokeStyle=u?`rgba(10,4,2,${.3*vt})`:`rgba(140,70,50,${.34*vt})`,l.lineWidth=1.8;for(let gt of[-1,1])l.beginPath(),l.moveTo(f+gt*22,141),l.quadraticCurveTo(f+gt*34,152,f+gt*31,166),l.stroke()}let U=161,D=as(h,"#8E2F2B",u?.35:.42),O=as(h,"#B5524A",u?.28:.36),X=as(h,"#3A0F0C",.7),Y="#4A1216",it=21*(t.larg??1)*(1-.45*N)*(1+.15*Math.max(0,y)*(1-N)),$=vt=>U-y*7.5+(t.assim||0)*vt*4.5,et=f-it,V=f+it,xt=$(-1),ct=$(1),Kt=b*(24+8*N);if(Kt<1.6)l.fillStyle=D,l.beginPath(),l.moveTo(et,xt),l.quadraticCurveTo(f-it*.45,U-5.5,f,U-3.2),l.quadraticCurveTo(f+it*.45,U-5.5,V,ct),l.quadraticCurveTo(f,U+1+y*4,et,xt),l.fill(),l.fillStyle=O,l.beginPath(),l.moveTo(et+2,xt+.5),l.quadraticCurveTo(f,U+1.5+y*4,V-2,ct+.5),l.quadraticCurveTo(f,U+9+y*3.5,et+2,xt+.5),l.fill(),l.strokeStyle=X,l.lineWidth=2,l.beginPath(),l.moveTo(et,xt),l.quadraticCurveTo(f,U+1.2+y*5,V,ct),l.stroke(),t.morde>.1&&(l.fillStyle="#FAF6F0",l.beginPath(),l.ellipse(f+3,U+2,7*t.morde,2.6*t.morde,0,0,se),l.fill()),t.lingua>.1&&(l.fillStyle="#E06D78",l.beginPath(),l.ellipse(f+7,U+4+2*t.lingua,6*t.lingua,4*t.lingua,.3,0,se),l.fill());else{let vt=U-3-b*2,gt=U+Kt-y*3,_=()=>{l.beginPath(),l.moveTo(et,xt),l.quadraticCurveTo(f,vt-y*2,V,ct),l.quadraticCurveTo(f+it*.75,gt,f,gt),l.quadraticCurveTo(f-it*.75,gt,et,xt),l.closePath()};_(),l.fillStyle=Y,l.fill(),l.save(),_(),l.clip(),t.dentes>.05&&(l.fillStyle="#FAF6F0",l.fillRect(f-it,vt-6,it*2,4+6.5*t.dentes));let A=Math.max(t.lingua||0,b*.7);A>.1&&(l.fillStyle="#D2626A",l.beginPath(),l.ellipse(f,gt,it*.55,Math.max(3,Kt*.4)*A,0,0,se),l.fill()),l.restore(),l.strokeStyle=D,l.lineWidth=3.4,_(),l.stroke()}if(t.lagrima>.05){let vt=(e*.6%1*24|0)/24;l.fillStyle=`rgba(120,180,250,${.9*(1-vt)*t.lagrima})`;let gt=f-v-12,_=m+12+vt*60;l.beginPath(),l.moveTo(gt,_-7),l.quadraticCurveTo(gt+6,_+3,gt,_+4.5),l.quadraticCurveTo(gt-6,_+3,gt,_-7),l.fill()}l.restore(),c.needsUpdate=!0}},p_={solto:{c:[.52,.44,.36,.28,.28],s:.06},segura:{c:[.98,.95,.92,.88,.78],s:0,preso:!0},punho:{c:[1.15,1.15,1.12,1.08,.95],s:0,preso:!0},pinca:{c:[.85,.75,.6,.62,.62],s:0,preso:!0},aponta:{c:[1.15,1.15,1.1,.02,.75],s:0,preso:!0},joinha:{c:[1.15,1.15,1.12,1.08,-.45],s:0,preso:!0},aberta:{c:[.04,.03,.02,.02,0],s:.38},ponte:{c:[.3,.25,.2,.35,.1],s:.3,preso:!0},tecla:{c:[.5,.48,.45,.42,.3],s:.08,preso:!0},controle:{c:[.95,.9,.85,.7,.35],s:0,preso:!0},carinho:{c:[.2,.18,.15,.15,.15],s:.12}};function Zd(s){let t={sorr:.3,abre:0,larg:1,redondo:0,assim:0,dentes:0,lingua:0,morde:0,olho:1,feliz:0,fecha:0,sobeS:0,dentroS:0,sobeAssim:0,boch:s.boch||0,lagrima:s.lagrima||0,ox:s.olhar?s.olhar[0]:0,oy:s.olhar?s.olhar[1]:0},e=te(s.abre??.6);switch(s.boca){case"sorriso":Object.assign(t,{sorr:.85,abre:.3,dentes:.9});break;case"leve":t.sorr=.3;break;case"reta":t.sorr=0;break;case"triste":t.sorr=-.6;break;case"foco":Object.assign(t,{sorr:-.05,larg:.85,assim:.3});break;case"o":Object.assign(t,{sorr:0,abre:.18+.3*e,redondo:1});break;case"aberta":Object.assign(t,{sorr:.55,abre:.3+.6*e,dentes:.7});break}return s.olhos==="F"&&(t.feliz=1),s.olhos==="Z"&&(t.fecha=1),(s.sob==="triste"||!s.sob&&s.boca==="triste")&&(t.dentroS=.85,t.sobeS=-.1,t.olho=.82),s.sob==="tenso"&&(t.dentroS=-.6,t.sobeS=-.15),(s.boca==="o"||s.boca==="aberta")&&(t.sobeS+=.45*e),(s.boca==="sorriso"||s.olhos==="F")&&(t.sobeS+=.15),t}var Rh=s=>{let t={...Dn,...s};for(let e of Rl)t[e]=(s[e]||Dn[e]).slice();return t};function Ht(s,t={}){let e=Rh(t),n=Math.sin(s*1.8);return e.lean+=.012*n,e.side+=.018*Math.sin(s*.37),t.aL||(e.aL=[.05+.03*n,.09,.3]),t.aR||(e.aR=[.05+.03*n,.09,.3]),t.lL||(e.lL=[.02,.04]),t.lR||(e.lR=[.02,.04]),e}var Gd=[1.25,1.4];function gi(s,t,e={}){let n=Math.sin(s*1.8),i=Rh({alt:t,sent:1,lL:Gd,lR:Gd,aL:[.62+.02*n,-.08,.98],aR:[.6+.02*n,-.08,1],...e});return i.lean+=.04+.01*n,i}function wl(s,t,e={}){let n=Ht(s,e);return n.alt=mt(.89,.5,t),n.lL=[mt(.02,1.35,t),mt(.04,2.1,t)],n.lR=[mt(.02,1.05,t),mt(.04,1.9,t)],n.lean+=.35*t,n.nod+=.15*t,n}function m_(s,t,e,n=1){let i=t==="corre",r=t==="triste",o=i?2.1:r?.95:1.32,a=.88*n,l=Math.asin(te(o/(4*a),0,.85))*(i?1.05:1),c=s/o*se,h=Math.sin(c),d=Math.cos(c),u=i?1.35:r?.65:.95,f=(g,p)=>.08+u*Math.pow(Math.max(0,g),1.6)+.12*Math.max(0,p)*(i?.5:1),m=(g,p)=>.38*Math.max(0,-g)*Math.max(0,p)*1.6-.22*Math.max(0,g)*Math.max(0,-p),v=Rh({lL:[l*h,f(d,h)],lR:[-l*h,f(-d,-h)],pL:m(h,d),pR:m(-h,-d),aL:[-l*.95*h,.1,(i?1.35:.3)+.22*Math.max(0,-Math.sin(c-.5))],aR:[l*.95*h,.1,(i?1.35:.3)+.22*Math.max(0,Math.sin(c-.5))],lean:i?.2:r?.16:.07,twist:.1*h,side:.03*d,roll:-.025*d,boca:r?"triste":i?"aberta":"leve"});return v.turn=-.09*h,v.nod=r?.45:-.03+.025*Math.abs(d),v.alt=.07+.82*Math.cos(l*Math.abs(h))+(i?.05*Math.abs(d):.014*Math.abs(d)),v.andando=1,v}function us(s,t,e){if(e>=1)return t;if(e<=0)return s;let n={...t};for(let i of bh)n[i]=mt(s[i]??Dn[i],t[i]??Dn[i],e);for(let i of Rl)n[i]=(s[i]||Dn[i]).map((r,o)=>mt(r,(t[i]||Dn[i])[o],e));for(let i of["ikL","ikR"])n[i]=s[i]&&t[i]?s[i].map((r,o)=>mt(r,t[i][o],e)):t[i]||s[i];if(e<.5)for(let i of u_)n[i]=s[i];return n}var Vd={yawAdd:30,nod:8,turn:7.5,roll:8,lean:10,side:10,twist:10,alt:18,dy:20,hz:14,pL:26,pR:26,olhar:30,lL:24,lR:24,aL:13,aR:13},Pl=class{constructor(){this.x=null,this.v={}}mola(t,e,n,i){let r=this.x[t],o=this.v[t]||0,a=r-e,l=Math.exp(-i*n),c=(o+i*a)*n;return this.x[t]=e+(a+c)*l,this.v[t]=(o-i*c)*l,this.x[t]}passo(t,e,n=15){if(!this.x||e<=0||e>.5){this.x={},this.v={};for(let r of bh)this.x[r]=t[r]??Dn[r];for(let r of Rl)(t[r]||Dn[r]).forEach((o,a)=>{this.x[r+a]=o});for(let r of["ikL","ikR"])t[r]&&t[r].forEach((o,a)=>{this.x[r+a]=o});return t}let i={...t};for(let r of bh)i[r]=this.mola(r,t[r]??Dn[r],e,Vd[r]||n);for(let r of Rl)i[r]=(t[r]||Dn[r]).map((o,a)=>this.mola(r+a,o,e,Vd[r]||n*1.1));for(let r of["ikL","ikR"]){if(!t[r]){this.x[r+"0"]!=null&&(i[r]=[0,1,2].map(o=>this.x[r+o]));continue}if(this.x[r+"0"]==null){t[r].forEach((o,a)=>{this.x[r+a]=o,this.v[r+a]=0}),i[r]=t[r];continue}i[r]=t[r].map((o,a)=>this.mola(r+a,o,e,n*1.3))}return i}},gh={neutro:{},contente:{sorr:.45,feliz:.3,boch:.3},concentrado:{sorr:-.05,larg:.82,assim:.35,dentroS:-.3,olho:.9,lingua:.55},surpreso:{abre:.42,redondo:.7,sorr:.1,sobeS:.85,olho:1.2},rindo:{sorr:.9,abre:.5,dentes:1,feliz:.9,boch:.6,sobeS:.2},bocejo:{abre:1,redondo:.55,sorr:0,fecha:.85,sobeS:.35},pensativo:{sorr:.05,assim:.55,sobeAssim:.6,olho:.9,larg:.85},orgulhoso:{sorr:.6,assim:.55,feliz:.45,sobeAssim:.35,boch:.35},assovia:{redondo:1,abre:.14,larg:.42,sobeS:.25,sorr:.1},gargalhada:{sorr:1,abre:.85,dentes:1,feliz:1,boch:.9,sobeS:.45},grito:{abre:.95,redondo:.35,sorr:.65,olho:1.12,sobeS:.75,dentes:.8,boch:.8},tenso:{sorr:-.25,larg:.8,dentroS:-.75,olho:1.05},mordeLabio:{sorr:-.15,larg:.75,assim:-.5,dentroS:-.35,morde:1},aflito:{sorr:-.45,dentroS:.75,sobeS:.25,olho:1.1},resmunga:{sorr:-.2,dentroS:-.45,larg:.85},suspira:{sorr:-.1,abre:.15,redondo:.4,fecha:.5,dentroS:.3},esperanca:{sorr:.25,dentroS:.45,sobeS:.2},choroso:{sorr:-.75,dentroS:1,olho:.72,lagrima:1,abre:.08},vazio:{sorr:-.15,olho:.68,dentroS:.35},sorrisoFraco:{sorr:.2,dentroS:.55,olho:.85},cumprimenta:{sorr:.75,feliz:.6,sobeS:.6,boch:.5}},Wd={tranquilo:[["contente",4,3,6],["concentrado",3,3,7],["surpreso",1,.9,1.6],["rindo",1.2,1.4,2.6],["bocejo",.6,2.4,3.2],["pensativo",1,2.5,4.5],["assovia",.8,2.5,4],["neutro",2,2,4]],feliz:[["contente",3,3,6],["rindo",2,1.5,3],["orgulhoso",2,2.5,4.5],["concentrado",1.5,2,4],["assovia",1.2,2.5,4],["neutro",1,2,3]],euforico:[["gargalhada",3,1.5,3],["grito",2,.9,1.8],["rindo",2,1.5,3],["contente",1.5,2,4]],preocupado:[["tenso",3,3,6],["mordeLabio",2,1.5,3],["aflito",2,2,4],["resmunga",2,1.8,3.5],["suspira",1.5,1.8,2.6],["esperanca",1,2,3.5],["pensativo",1,2,4]],triste:[["choroso",2,3,6],["vazio",3,3,6],["suspira",2,1.8,2.6],["sorrisoFraco",.6,1.5,3],["aflito",1,2,4]]},g_=[{nome:"nariz",req:["R"],dur:1.7,humores:"*",peso:1},{nome:"nuca",req:["R"],dur:2.2,humores:["preocupado","triste","tranquilo"],peso:1},{nome:"coca",req:["R"],dur:1.9,humores:["preocupado","tranquilo"],peso:1},{nome:"pescoco",req:[],dur:2.6,humores:"*",peso:1},{nome:"suspiro",req:[],dur:2.4,humores:["preocupado","triste","tranquilo"],peso:1.2},{nome:"tamborila",req:["Rapoio"],dur:2.6,humores:["preocupado","tranquilo","feliz"],peso:1.4},{nome:"cintura",req:["R","L","pe"],dur:3.2,humores:["feliz","preocupado","tranquilo"],peso:1},{nome:"alonga",req:["R","L","pe"],dur:3,humores:["tranquilo","triste"],peso:.6},{nome:"ombros",req:[],dur:1.6,humores:"*",peso:.8}],xh=(s,t)=>{let e=s.reduce((i,r)=>i+t(r),0),n=Math.random()*e;for(let i of s)if(n-=t(i),n<=0)return i;return s[s.length-1]},cs={sorr:.3,abre:0,larg:1,redondo:0,assim:0,dentes:0,lingua:0,morde:0,olho:1,feliz:0,fecha:0,sobeS:0,dentroS:0,sobeAssim:0,boch:0,lagrima:0},Il=class{constructor(){this.emo={nome:"neutro",t0:0,fim:2},this.emoAnt={nome:"neutro"},this.glance=null,this.proxGlance=2+Math.random()*3,this.mania=null,this.proxMania=5+Math.random()*4,this.F={...cs},this.Fv={},this.wGaze=0,this.yawG=0,this.pitchG=0}expressao(t,e){let n=this.emo;if(t>n.fim||this.humor!==e){this.humor=e;let i=Wd[e]||Wd.tranquilo,[r,,o,a]=xh(i.filter(l=>l[0]!==n.nome||i.length<2),l=>l[1]);this.emoAnt={nome:n.nome,ate:t+.5},this.emo={nome:r,t0:t,fim:t+o+Math.random()*(a-o)}}return this.emo}passo(t,e){let n=e.T,i=e.dt;t={...t,aL:t.aL.slice(),aR:t.aR.slice(),lL:t.lL.slice(),lR:t.lR.slice(),olhar:t.olhar.slice()};let r=!t.andando&&Math.abs(t.dy||0)<.03,o=(t.sent||0)<.3,a=r&&(t.kR||0)<.05&&!t.item&&!e.ocupado&&t.aR[0]<1.3&&!t.gestoR,l=r&&(t.kL||0)<.05&&!e.ocupadoL&&!e.ocupado&&t.aL[0]<1.3&&t.mL<.5&&!t.gestoL,c=r&&!e.ocupado&&(t.kR||0)<.05&&!t.item&&(t.sent||0)>.5,h=this.expressao(n,e.humor),d=kt(n-h.t0,0,h.fim-h.t0,.45);if(!this.mania&&n>this.proxMania&&!e.reduz){let b=g_.filter(M=>(M.humores==="*"||M.humores.includes(e.humor))&&M.req.every(w=>w==="R"?a:w==="L"?l:w==="pe"?o&&r:w==="Rapoio"?c:!0)&&r);if(b.length){let M=xh(b,w=>w.peso);this.mania={...M,t0:n}}this.proxMania=n+(e.humor==="preocupado"?4:6)+Math.random()*6}let u=this.mania;if(u){let b=n-u.t0,M=kt(b,0,u.dur,.45),w=u.req.every(S=>S==="R"?a||b>.2&&!t.item&&(t.kR||0)<.05&&r:S==="L"?l||b>.2&&r:S==="pe"?o&&r:S==="Rapoio"?c:!0);if(b>u.dur||!w&&M<.05)this.mania=null;else{let S=w?M:M*.5,P=(x,E)=>x.forEach((R,I)=>{x[I]=mt(R,E[I],S)});switch(u.nome){case"nariz":{let x=e.nariz;if(x){let E=Math.sin(b*16)*.012*M;t.ikR=[x.x+E,x.y,x.z],t.kR=S*.95,t.gestoR="aponta",t.nod+=.06*S}break}case"nuca":P(t.aR,[2.55,.65,2.55+.12*Math.sin(b*9)]),t.nod+=.18*S,t.gestoR="carinho";break;case"coca":P(t.aR,[2.65,.25,2.3+.15*Math.sin(b*13)]),t.roll-=.08*S,t.gestoR="carinho";break;case"pescoco":{let x=Math.sin(Qt(b,.2,u.dur-.2)*se);t.roll+=.28*x*S,t.nod+=.12*S,t.fechaOlhos=S;break}case"suspiro":{let x=Math.sin(rt*Qt(b,.1,1.4));t.lean-=.06*x*S,t.dy+=.012*x*S,t.nod+=-.08*x*S+.1*Qt(b,1.4,u.dur)*S,t.suspiro=x*S;break}case"tamborila":t.tamb=1;break;case"cintura":P(t.aR,[.35,.85,1.75]),P(t.aL,[.35,.85,1.75]),t.lean-=.04*S,t.gestoR=t.gestoL="solto";break;case"alonga":{let x=le(Qt(b,.2,1.2))*(1-le(Qt(b,2.2,3)));P(t.aR,[mt(.2,3,x),.2,.25]),P(t.aL,[mt(.2,3,x),.2,.25]),t.lean-=.12*x*S,t.nod-=.25*x*S,t.dy+=.03*x*S,t.gestoR=t.gestoL=x>.5?"aberta":"",t.boceja=x*S;break}case"ombros":{let x=Math.sin(rt*Qt(b,0,u.dur));t.dy+=.018*x,t.lean-=.04*x;break}}}}if(o&&r&&!t.andando){let b=Math.sin(n*.21+1.3)*.7+Math.sin(n*.13)*.3,M=e.legsLivres?1:0;t.side+=.03*b*M,t.twist+=.025*b*M,t.lL[1]+=.14*Math.max(0,b)*M,t.lL[0]+=.05*Math.max(0,b)*M,t.lR[1]+=.14*Math.max(0,-b)*M,t.lR[0]+=.05*Math.max(0,-b)*M,t.alt-=.008*Math.abs(b)*M}a&&!(u&&u.req.includes("R"))&&(t.aR[2]+=.04*Math.sin(n*.71+1),t.aR[0]+=.025*Math.sin(n*.53)),l&&!(u&&u.req.includes("L"))&&(t.aL[2]+=.04*Math.sin(n*.67),t.aL[0]+=.025*Math.sin(n*.49+2));let f=h.nome,m=d*(e.facePropria?.3:1);if(f==="rindo"||f==="gargalhada"){let b=f==="gargalhada"?1:.55;t.dy+=.01*Math.abs(Math.sin(n*11))*m*b,t.lean-=.07*m*b,t.nod-=.08*m*b+.04*Math.sin(n*11)*m*b}if(f==="bocejo"&&!t.boceja&&(t.nod-=.25*m,t.lean-=.05*m),f==="resmunga"&&(t.turn+=.06*Math.sin(n*3.3)*m,t.roll+=.04*Math.sin(n*2.1)*m),f==="surpreso"&&(t.nod-=.12*m,t.lean-=.04*m),(f==="aflito"||f==="choroso"||f==="vazio")&&(t.nod+=.1*m),f==="orgulhoso"&&(t.nod-=.08*m,t.lean-=.03*m),!this.glance&&n>this.proxGlance&&e.alvos&&e.alvos.length&&!e.reduz){let b=xh(e.alvos,M=>M.peso);this.glance={...b,t0:n,dur:.9+Math.random()*1.8},b.nome==="camera"&&e.humor!=="triste"&&Math.random()<.35&&(this.glance.acena=!0,this.glance.dur=2.4),this.proxGlance=n+3+Math.random()*5.5}if(this.glance&&n-this.glance.t0>this.glance.dur&&(this.glance=null),this.glance&&this.glance.acena&&a&&!this.mania){let b=kt(n-this.glance.t0,.2,this.glance.dur,.4);t.aR=t.aR.map((M,w)=>mt(M,[2.55,.5,.9+.35*Math.sin(n*9)][w],b)),b>.3&&(t.gestoR="aberta")}let v=null,g=0,p=(t.kR||0)>.25&&t.ikR&&!t.item?["R",t.kR]:(t.kL||0)>.25&&t.ikL&&!t.gestoL?["L",t.kL]:null;if(t.olharW)v=Et(...t.olharW),g=1;else if(p&&!e.semOlharMao){let b=p[0]==="R"?t.ikR:t.ikL;v=Et(...b),g=.85*te(p[1])}else this.glance?(v=this.glance.pos,g=kt(n-this.glance.t0,0,this.glance.dur,.25)*(t.andando?.6:.9)):e.foco&&(v=e.foco,g=t.andando?.3:.75);if(this.olhandoCamera=this.glance&&this.glance.nome==="camera"?kt(n-this.glance.t0,0,this.glance.dur,.25):0,this.wGaze=mt(this.wGaze,v?g:0,Math.min(1,i*6)),v&&e.cabeca){let b=v.clone().sub(e.cabeca),M=Fn(e.yawCorpo+(t.twist||0),Math.atan2(b.x,b.z)),w=Math.atan2(b.y,Math.hypot(b.x,b.z));this.yawG=te(M,-1.6,1.6),this.pitchG=te(w,-1,.8)}let y=this.wGaze;if(y>.01){let b=te(this.yawG*.78,-1.05,1.05),M=te(-this.pitchG*.65,-.5,.65);t.turn=mt(t.turn,b,y),t.nod=mt(t.nod,M+(t.nod-(t.nod||0)),y*.85),t.olhar[0]=mt(t.olhar[0],te((this.yawG-b)*2.4,-1.4,1.4),y),t.olhar[1]=mt(t.olhar[1],te(-(this.pitchG+M/.65*.65)*2.2,-1.4,1.4),y)}return t}rosto(t,e){let n=e.T,i=e.dt,r=Zd(t),o=this.emo,a=kt(n-o.t0,0,o.fim-o.t0,.45)*(e.facePropria?.25:1),l=gh[o.nome]||{},c={...r};for(let h in l)c[h]=mt(r[h]??cs[h],l[h]*(h==="sorr"||h==="dentroS"||h==="sobeS"?1.15:1),a);if(o.nome==="resmunga"&&(c.abre=Math.max(c.abre,a*(.08+.14*Math.max(0,Math.sin(n*9)*Math.sin(n*3.7))))),(o.nome==="rindo"||o.nome==="gargalhada")&&(c.abre=Math.max(0,c.abre-a*.2*Math.abs(Math.sin(n*11)))),t.suspiro&&(c.abre=Math.max(c.abre,.15*t.suspiro),c.redondo=Math.max(c.redondo,.5*t.suspiro),c.fecha=Math.max(c.fecha,.5*t.suspiro)),t.boceja&&(c.abre=Math.max(c.abre,t.boceja),c.redondo=Math.max(c.redondo,.5*t.boceja),c.fecha=Math.max(c.fecha,.85*t.boceja)),t.fechaOlhos&&(c.fecha=Math.max(c.fecha,.9*t.fechaOlhos)),this.olhandoCamera>.01&&!e.facePropria&&e.humor!=="triste"){let h=this.olhandoCamera;for(let d in gh.cumprimenta)c[d]=mt(c[d],gh.cumprimenta[d],h*.8)}c.sobeS+=.06*Math.sin(n*.83)+.04*Math.sin(n*2.3+1),c.sorr+=.04*Math.sin(n*.61+2);for(let h in cs){let d=h==="abre"||h==="fecha"?22:h==="sobeS"||h==="dentroS"?14:9,u=this.F[h]??cs[h],f=this.Fv[h]||0,m=u-(c[h]??cs[h]),v=Math.exp(-d*i),g=(f+d*m)*i;this.F[h]=(c[h]??cs[h])+(m+g)*v,this.Fv[h]=(f-d*g)*v,i>0||(this.F[h]=c[h]??cs[h])}return this.F.ox=t.olhar[0],this.F.oy=t.olhar[1],this.F.piscar=Math.abs(this.yawG-(this.yawGAnt??this.yawG))>.5,this.yawGAnt=this.yawG,this.F}},Eh=class{constructor(){let t=K("#C08552",{r:.9}),e=K("#8B5A35",{r:.9}),n=K("#2B1B14",{r:.4}),i=this.g=new St;this.corpo=new St,i.add(this.corpo),wn(this.corpo,t,.12,.26,0,0,0,{rx:rt/2}),oe(this.corpo,K("#E3B98E",{r:.9}),.1,0,-.03,.08,{s:[.8,.7,1.3]}),this.cab=new St,this.cab.position.set(0,.12,.2),this.corpo.add(this.cab),oe(this.cab,t,.115,0,.04,0),oe(this.cab,K("#D9A577"),.062,0,0,.1,{s:[1,.8,1.2]}),oe(this.cab,n,.026,0,.02,.17);for(let r of[-1,1])oe(this.cab,K("#FFFFFF",{r:.3}),.02,r*.045,.08,.098),oe(this.cab,n,.013,r*.047,.082,.112);this.lingua=oe(this.cab,K("#F87171"),.025,0,-.04,.13,{s:[1,.5,1.4]}),this.orelhas=[];for(let r of[-1,1]){let o=new St;o.position.set(r*.09,.1,-.01),this.cab.add(o),Bt(new ln(.055,12,10),e,o,r*.012,-.04,0,{s:[.45,1.2,.9],rz:r*.4}),this.orelhas.push(o)}this.coleira=$t(this.corpo,K("#DC2626",{r:.4}),.085,.085,.03,0,.09,.17,{rx:1.1,seg:20}),this.patas=[];for(let[r,o]of[[-.07,.15],[.07,.15],[-.07,-.15],[.07,-.15]]){let a=new St;a.position.set(r,-.04,o),this.corpo.add(a),wn(a,t,.04,.12,0,-.1,0),this.patas.push(a)}this.rabo=new St,this.rabo.position.set(0,.06,-.2),this.corpo.add(this.rabo),wn(this.rabo,t,.025,.14,0,.08,-.02,{rx:-.6}),En(i,!0,!1),this.zzz=new St,i.add(this.zzz);for(let r=0;r<2;r++){let o=Ge(64,64);o.g.font="bold 52px system-ui",o.g.fillStyle="#6366F1",o.g.textAlign="center",o.g.fillText("z",32,48);let a=new Ri(new di({map:o.t,transparent:!0,depthWrite:!1}));a.scale.setScalar(.16-r*.04),this.zzz.add(a)}this.pos=null,this.yaw=0,this.rota=null,this.dist=0,this.alvo=null}mover(t,e,n){if(this.pos||(this.pos=[t[0],t[1]],this.yaw=t[2]),(!this.alvo||Math.hypot(t[0]-this.alvo[0],t[1]-this.alvo[1])>.2)&&(this.alvo=t.slice(),this.rota=Math.hypot(t[0]-this.pos[0],t[1]-this.pos[1])>.15?n.caminho(this.pos,t,.12):null),this.rota&&this.rota.length){let a=this.rota[0],l=a[0]-this.pos[0],c=a[1]-this.pos[1],h=Math.hypot(l,c),d=1.5*e;return h<=d?(this.pos=[a[0],a[1]],this.rota.shift()):(this.pos[0]+=l/h*d,this.pos[1]+=c/h*d),this.yaw=po(this.yaw,Math.atan2(l,c),Math.min(1,e*10)),this.dist+=Math.min(d,h),!1}this.rota=null;let i=t[0]-this.pos[0],r=t[1]-this.pos[1],o=Math.hypot(i,r);if(o>.03&&o<1.2){let a=Math.min(o,1.2*e);return this.pos[0]+=i/o*a,this.pos[1]+=r/o*a,this.yaw=po(this.yaw,Math.atan2(i,r),Math.min(1,e*10)),this.dist+=a,!1}return this.yaw=po(this.yaw,t[2],Math.min(1,e*5)),!0}quadro(t,e){let n=this.corpo;this.zzz.visible=t==="dorme";let i=t==="pula"||t==="carinho"||t==="anda",r=Math.sin(e*(t==="dorme"?2:16))*(t==="dorme"?.2:i?.8:.5);if(this.rabo.rotation.set(0,r,0),this.lingua.visible=t!=="dorme",this.orelhas.forEach((o,a)=>{o.rotation.x=t==="anda"?Math.sin(e*14+a)*.25:0}),t==="dorme")n.position.set(0,.1+.008*Math.sin(e*2),0),n.rotation.set(0,0,.12),this.patas.forEach((o,a)=>o.rotation.set(a<2?-1.35:1.35,0,0)),this.cab.rotation.set(.5,.25,0),this.cab.position.set(0,.04,.22),this.zzz.children.forEach((o,a)=>{let l=(e*.45+a*.5)%1;o.position.set(.12+l*.1,.32+l*.35,.2),o.material.opacity=1-l});else if(t==="anda"){let o=this.dist/.28*se;n.position.set(0,.2+.02*Math.abs(Math.sin(o)),0),n.rotation.set(.04*Math.sin(o*2),0,0),this.patas.forEach((a,l)=>a.rotation.set(Math.sin(o+(l===0||l===3?0:rt))*.6,0,0)),this.cab.position.set(0,.12,.2),this.cab.rotation.set(-.1,0,0)}else if(t==="senta"||t==="carinho")n.position.set(0,.2,0),n.rotation.set(-.55,0,0),this.patas.forEach((o,a)=>o.rotation.set(a<2?.55:-.9,0,0)),this.cab.position.set(0,.12,.2),t==="carinho"?this.cab.rotation.set(.1+.12*Math.sin(e*5),.25*Math.sin(e*2.6),.2*Math.sin(e*3.1)):this.cab.rotation.set(.45+.08*Math.sin(e*1.3),.3*Math.sin(e*.7),.15*Math.sin(e*1.1));else{let o=Math.abs(Math.sin(e*5.2));n.position.set(0,.2+.22*o,0),n.rotation.set(-.25*o,0,0),this.patas.forEach((a,l)=>a.rotation.set((l<2?-.6:.6)*o,0,0)),this.cab.position.set(0,.12,.2),this.cab.rotation.set(-.15,0,0)}}},wh=class{constructor(t=.1){this.c=t,this.nx=Math.ceil(je/t),this.nz=Math.ceil(Qe/t),this.b=new Uint8Array(this.nx*this.nz)}limpar(t=.24){this.b.fill(0);for(let e=0;e<this.nx;e++)for(let n=0;n<this.nz;n++){let i=(e+.5)*this.c,r=(n+.5)*this.c;(i<t||i>je-t||r<t||r>Qe-.12)&&(this.b[e+n*this.nx]=1)}}ret(t,e,n,i,r=.24){let o=this.c,a=Math.max(0,Math.floor((t-r)/o)),l=Math.min(this.nx-1,Math.floor((n+r)/o)),c=Math.max(0,Math.floor((e-r)/o)),h=Math.min(this.nz-1,Math.floor((i+r)/o));for(let d=a;d<=l;d++)for(let u=c;u<=h;u++){let f=(d+.5)*o,m=(u+.5)*o,v=Math.max(t-f,0,f-n),g=Math.max(e-m,0,m-i);v*v+g*g<=r*r&&(this.b[d+u*this.nx]=1)}}cel(t,e){return[te(Math.floor(t/this.c),0,this.nx-1),te(Math.floor(e/this.c),0,this.nz-1)]}livre(t,e){let[n,i]=this.cel(t,e);return!this.b[n+i*this.nx]}perto(t,e){if(this.livre(t,e))return[t,e];let[n,i]=this.cel(t,e);for(let r=1;r<Math.max(this.nx,this.nz);r++){let o=null,a=1e9;for(let l=n-r;l<=n+r;l++)for(let c=i-r;c<=i+r;c++){if(Math.max(Math.abs(l-n),Math.abs(c-i))!==r||l<0||c<0||l>=this.nx||c>=this.nz||this.b[l+c*this.nx])continue;let h=(l+.5)*this.c,d=(c+.5)*this.c,u=(h-t)**2+(d-e)**2;u<a&&(a=u,o=[h,d])}if(o)return o}return[t,e]}visivel(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),i=Math.ceil(n/(this.c*.4));for(let r=1;r<i;r++){let o=r/i;if(!this.livre(mt(t[0],e[0],o),mt(t[1],e[1],o)))return!1}return!0}caminho(t,e){let n=this.perto(t[0],t[1]),i=this.perto(e[0],e[1]),r=[e[0],e[1]];if(this.visivel(n,i))return(Math.hypot(n[0]-t[0],n[1]-t[1])>.02?[n]:[]).concat([i[0]!==e[0]||i[1]!==e[1]?i:r]);let o=this.nx,a=o*this.nz,[l,c]=this.cel(...n),[h,d]=this.cel(...i),u=new Float32Array(a).fill(1e9),f=new Int32Array(a).fill(-1),m=new Uint8Array(a),v=[],g=(x,E)=>{v.push([E,x]);let R=v.length-1;for(;R>0;){let I=R-1>>1;if(v[I][0]<=v[R][0])break;[v[I],v[R]]=[v[R],v[I]],R=I}},p=()=>{let x=v[0],E=v.pop();if(v.length){v[0]=E;let R=0;for(;;){let I=2*R+1,N=I+1,U=R;if(I<v.length&&v[I][0]<v[U][0]&&(U=I),N<v.length&&v[N][0]<v[U][0]&&(U=N),U===R)break;[v[U],v[R]]=[v[R],v[U]],R=U}}return x},y=(x,E)=>Math.hypot(x-h,E-d),b=l+c*o;u[b]=0,g(b,y(l,c));let M=!1;for(;v.length;){let[,x]=p();if(m[x])continue;m[x]=1;let E=x%o,R=x/o|0;if(E===h&&R===d){M=!0;break}for(let I=-1;I<=1;I++)for(let N=-1;N<=1;N++){if(!I&&!N)continue;let U=E+I,D=R+N;if(U<0||D<0||U>=o||D>=this.nz)continue;let O=U+D*o;if(this.b[O]||m[O]||I&&N&&(this.b[E+I+R*o]||this.b[E+(R+N)*o]))continue;let X=u[x]+(I&&N?1.4142:1);X<u[O]&&(u[O]=X,f[O]=x,g(O,X+y(U,D)))}}if(!M)return[i];let w=[];for(let x=h+d*o;x!==-1;x=f[x])w.push([(x%o+.5)*this.c,((x/o|0)+.5)*this.c]);w.reverse(),w[0]=n,w[w.length-1]=i;let S=[n],P=0;for(;P<w.length-1;){let x=w.length-1;for(;x>P+1&&!this.visivel(w[P],w[x]);)x--;S.push(w[x]),P=x}return S.shift(),Math.hypot(n[0]-t[0],n[1]-t[1])>.02&&S.unshift(n),i[0]===e[0]&&i[1]===e[1]&&(S[S.length-1]=r),S}},Ln=(s,t,e={})=>({tipo:"andar",vel:s,destinos:t,...e}),Ft=(s,t,e={})=>({tipo:"acao",dur:s,pose:t,...e}),_h=(s,t)=>(e,n,i)=>{let r=le(e),o=us(s(i),t(i),r);return o.lean+=.35*Math.sin(rt*e),o},vh=(s,t)=>(e,n,i)=>{let r=1-le(e),o=us(s(i),t(i),r);return o.lean+=.4*Math.sin(rt*e),o},xi=4.05;function x_(s,t){let e=le(Qt(s,0,1))*(1-le(Qt(s,5,5.6))),n=0;s>1.1&&s<3.5?n=.5-.5*Math.cos((s-1.1)*se*.75):s>=3.5&&s<3.85?n=le(Qt(s,3.5,3.85)):s>=3.85&&s<xi&&(n=1-Al(Qt(s,3.85,xi)));let i=Ht(t,{lean:.78*e,hz:-.1*e,nod:-.45*e,alt:.89-.08*e,lL:[.3*e,.22*e],lR:[-.1*e,.08*e],olhar:[0,-1.2*e],boca:"foco",taco:e,recuo:n*e,twist:-.12*e});return i.bolas=s<xi?"ini":"jogo",i}function go(s,t){let e=Ht(t,{olhos:"F",boca:"aberta",boch:.8});if(e.abre=.6+.4*Math.abs(Math.sin(t*6)),s<.3){let n=Al(Qt(s,0,.3));e.alt=.89-.12*n,e.lL=[.5*n,1*n],e.lR=[.5*n,1*n],e.aL=[.3*n,.4,.6],e.aR=[.3*n,.4,.6]}else if(s<.85){let n=Qt(s,.3,.85);e.dy=.55*4*n*(1-n);let i=hs(Qt(s,.3,.45));e.aL=[mt(.3,2.9,i),.45,.2],e.aR=[mt(.3,2.9,i),.45,.2],e.lL=[.35*Math.sin(rt*n),.8*Math.sin(rt*n)],e.lR=[.35*Math.sin(rt*n),.8*Math.sin(rt*n)]}else if(s<1.05){let n=Math.sin(rt*Qt(s,.85,1.05));e.alt=.89-.1*n,e.lL=[.4*n,.8*n],e.lR=[.4*n,.8*n],e.aL=[2.9,.45,.2],e.aR=[2.9,.45,.2]}else{let n=(s-1.05)/.62,i=Math.floor(n)%2?1:-1,r=n%1,o=Math.sin(rt*r);e.dy=.08*o,e.side=i*.16*o,e.twist=i*.25*o,e.turn=-i*.3*o,e.roll=i*.15*o,e.aL=i>0?[2.8,.5,.3]:[1.2,-.1,1.6],e.aR=i>0?[1.2,-.1,1.6]:[2.8,.5,.3],e.lL=[i<0?.5*o:0,i<0?.9*o:.1],e.lR=[i>0?.5*o:0,i>0?.9*o:.1]}return e}var ar=(s,t,e={})=>{let n=kt(s,0,t,.3),i=Math.abs(Math.sin(s*rt/.42))*n;return{gestoR:n>.3?"punho":"",aR:[mt(0,2.55+.3*i,n),.25,mt(.2,.9-.5*i,n)],dy:.03*i,olhos:n>.5?"F":"A",boca:n>.3?"aberta":"sorriso",boch:.7,...e}},xo=s=>gi(s,.62,{lean:-.1});function Fl(s,t,e={}){let n=Math.sin(t*.9)*.08+Math.sin(t*2.3)*.03,i=r=>Math.max(0,Math.sin(s*10+r))*.12;return gi(s,.62,{lean:-.1+n*.3,side:n,nod:.15,turn:n*.6,aL:[.85+i(0),-.22,1.25],aR:[.85+i(2),-.22,1.25],...e})}var yh=(s,t)=>Ft(s,(e,n,i)=>{let r=0;for(let a of t)r=Math.max(r,kt(n,a,a+1.3));let o=Fl(i,n,r>.3?{boca:"aberta",olhos:r>.5?"F":"A",boch:.15+.5*r,gestoR:"punho",gestoL:"aberta"}:{});return o.aR=o.aR.map((a,l)=>mt(a,[2.7,.5,.4][l],r)),o.aL=o.aL.map((a,l)=>mt(a,[2.5,.55,.5][l],r)),o.lean-=.08*r,o.nod-=.25*r,o.dy=.04*r*Math.abs(Math.sin(n*9)),o},{tv:"jogo",props:{controle:"LR"},foco:()=>Et(3.2,1.45,.12)}),Xd=s=>Ft(1.6,(t,e,n)=>{let i=kt(e,0,1.15,.4),r=s.casaDe("controle").pos,o=us(xo(n),Fl(n,0),le(Qt(e,.75,1.6)));return o.ikR=[r.x,r.y+.03,r.z],o.kR=i,o.lean+=.12*i,o.turn+=.4*i,o.olhar=[.8*i,.8*i],o},{props:{controle:(t,e)=>e<.6?"casa":"LR"}}),qd=s=>Ft(1.5,(t,e,n)=>{let i=kt(e,.15,1.5,.4),r=s.casaDe("controle").pos,o=us(Fl(n,0),xo(n),le(Qt(e,0,.6)));return o.ikR=[r.x,r.y+.03,r.z],o.kR=i,o.lean+=.12*i,o.turn+=.4*i,o.olhar=[.8*i,.8*i],o},{props:{controle:(t,e)=>e<.8?"LR":"casa"}}),__=()=>Ft(1.5,(s,t,e)=>Ht(e,{taco:mt(-1,0,le(Qt(t,.2,1.2))),lean:.12*kt(t,0,1.5,.4),boca:"leve"}),{bolas:"ini"}),v_=()=>Ft(1.6,(s,t,e)=>Ht(e,{taco:mt(0,-1,le(Qt(t,.3,1.3))),lean:.15*kt(t,0,1.6,.4)}),{bolas:"ini"}),Yd={tranquilo:(s,t,e=0)=>{let n=Ft(1.3,vh(a=>Ht(a),xo),{ate:s.sofaP}),i=Ft(1.3,_h(a=>Ht(a),xo),{ate:s.sofaS}),o=e%2===0?[yh(13+e%3*2,[5.2,10.6]),qd(t),n,Ft(2.8,(a,l,c)=>{let h=kt(l,.1,2.7,.6);return Ht(c,{aL:[2.95*h,.25,.3],aR:[2.95*h,.25,.3],lean:-.12*h,side:Math.sin(l*2.2)*.12*h,nod:-.2*h,olhos:h>.5?"Z":"A",boca:h>.5?"o":"leve",dy:.03*h})}),Ln(1.15,[s.cafeP]),Ft(5.6,(a,l,c)=>{let h=t.casaDe("xicara").pos,d=t.bico(),u=kt(l,0,5.3,.45),f=le(Qt(l,.9,1.7)),m=le(Qt(l,4.3,5.3)),v=h.clone().add(Et(0,.06,0)).lerp(d,f),g=t.botaoCafe(),p=kt(l,1.9,2.9,.25);return Ht(c,{ikR:[v.x,v.y,v.z],kR:u*(1-m),aR:[.6,-.25,1.75],ikL:[g.x,g.y-.02*Math.max(0,Math.sin((l-2.1)*9)),g.z],kL:p,lean:.14*u,nod:.28,olhar:[0,1]})},{ate:s.cafeP,props:{xicara:(a,l)=>l<.75?"casa":"R"},fx:"cafe",foco:a=>a.bico()}),Ft(4.4,(a,l,c)=>{let h=kt(l,.6,1.8,.35)+kt(l,2.6,3.7,.35);return Ht(c,{aR:[.6+.75*h,-.25,1.75+.4*h],gole:h,nod:-.25*h,olhos:h>.5?"Z":"A",boca:h>.5?"reta":"sorriso",boch:.35})},{props:{xicara:"R"}}),Ft(1.6,(a,l,c)=>{let h=t.casaDe("xicara").pos,d=kt(l,0,1.6,.45);return Ht(c,{ikR:[h.x,h.y+.06,h.z],kR:d,aR:[.6,-.25,1.75],lean:.14*d,nod:.25})},{props:{xicara:(a,l)=>l<.85?"R":"casa"}}),Ln(1.1,[s.sofaP]),i,Xd(t)]:[yh(9+e%3*2,[3.4]),Ft(6.5,(a,l,c)=>{let h=kt(l,0,6.5,.9),d=Fl(c,l*.3,{boca:"sorriso",boch:.3});return d.lean-=.22*h,d.nod-=.15*h,d.lL=d.lL.map((u,f)=>mt(u,[.95,.5][f],h)),d.lR=d.lR.map((u,f)=>mt(u,[.9,.45][f],h)),d.aL=d.aL.map((u,f)=>mt(u,[.5,-.05,.6][f],h)),d.aR=d.aR.map((u,f)=>mt(u,[.65,-.1,.9][f],h)),d.olhos=l>2&&l<4.4?"Z":"A",d},{props:{controle:"LR"},foco:()=>Et(3.2,1.45,.12)}),yh(8,[4.4])];return{inicio:s.sofaS,aprox:s.sofaP,sentado:!0,sentPose:xo,padrao:{boca:"leve",boch:.15},passos:o,entrada:[i,Xd(t)],saida:[qd(t),n]}},feliz:(s,t,e=0)=>{let n=[Ft(2.6,(i,r,o)=>{let a=Math.sin(r*9)*.12*kt(r,.4,2.2);return Ht(o,{taco:0,aL:[1.4+a,.1,1.9],nod:-.25,olhar:[0,-1.5],boca:"leve"})},{bolas:"ini",foco:i=>i.pto("sinuca",7.62,.81,4.52)}),Ft(5.6,(i,r,o)=>x_(r,o)),Ft(3,(i,r,o)=>{let a=ar(r,3);return Ht(o,{...a,taco:0,aL:a.aR,aR:void 0,bolas:"fim"})})];return e%2===0?n.push(Ln(1.25,[s.monP],{taco:0,bolas:"fim"}),Ft(4.6,(i,r,o)=>{let a=kt(r,1.4,3.6,.4),l=Math.sin(r*6)*.1*kt(r,.3,1.3);return Ht(o,{taco:0,aL:[mt(0,1.3,a),-.15,mt(.2,1.7,a)],lean:.1,nod:.05+l,boca:a>.5?"aberta":"sorriso",olhos:a>.5?"F":"A"})},{bolas:"fim",ate:s.monP,foco:i=>i.pto("mesa",6.8,1.14,.22)}),Ln(1.25,[s.sinP],{taco:0,bolas:"fim"})):n.push(Ft(3.2,(i,r,o)=>Ht(o,{taco:0,nod:.2,olhar:[.6*Math.sin(r*1.5),-1],boca:"sorriso",aL:[.3,.25,1.2*kt(r,0,3.2,.5)],side:.05*Math.sin(r*2)}),{bolas:"fim"})),n.push(Ft(2.2,(i,r,o)=>Ht(o,{taco:0,lean:.2*kt(r,0,2.2,.5),nod:.3,olhar:[0,-1.3],aL:[mt(.2,1.1,kt(r,0,2.2,.5)),.1,.6]}),{bolas:"volta"})),{inicio:s.sinP,aprox:s.sinP,sentado:!1,padrao:{boca:"sorriso",boch:.35},passos:n,entrada:[__()],saida:[v_()]}},euforico:(s,t,e=0)=>({inicio:s.danca,aprox:s.danca,sentado:!1,padrao:{olhos:"F",boch:.8},entrada:[],saida:[],passos:[Ft(3.6,(n,i,r)=>go(i,r),{fx:"globo"}),Ft(3.4,(n,i,r)=>go(i,r),{fx:"globo"}),Ft(2.2,(n,i,r)=>{let o=Al(n),a=Ht(r,{aL:[1.5,1.2,.2],aR:[1.5,1.2,.2],boca:"aberta",olhos:"F",boch:.8});return a.yawAdd=o*se,a.dy=.12*Math.sin(rt*n),a}),Ft(5.2,(n,i,r)=>{let o=kt(i,0,.8,.25),a=t.bolso("L"),l=Math.max(0,i-.8),c=l%1.1/1.1,h=i<.8?0:c<.55?Al(c/.55):1-hs((c-.55)/.45),d=Ht(r,{aL:[.5*le(Qt(i,.4,.9)),.2,1.3*le(Qt(i,.4,.9))],ikL:[a.x,a.y,a.z],kL:o,aR:[mt(.3,2.8,h),.15,mt(1.4,.2,h)],lean:-.08*h,nod:-.15*h,dy:.05*h,boca:"aberta",olhos:"F",boch:.8});return d.solta=i>.8&&c>.5&&c<.6?Math.floor(l/1.1)+1:0,d},{props:{maco:(n,i)=>i<.45||i>5?"casa":"L",nota:(n,i)=>{let r=Math.max(0,i-.8)%1.1/1.1;return i>.8&&i<4.9&&r<.5?"R":"casa"}}}),Ln(2.2,[s.monP],{estilo:"corre"}),Ft(3.4,(n,i,r)=>{let o=i%.85/.85,a=Math.sin(rt*o);return Ht(r,{dy:.35*a,aL:[2.9,.4,.2],aR:[2.9,.4,.2],lL:[.3*a,.7*a],lR:[.3*a,.7*a],boca:"aberta",olhos:"F"})},{ate:s.monP,foco:n=>n.pto("mesa",6.8,1.14,.22),semPeso:!0}),Ln(2.2,[s.danca],{estilo:"corre"}),Ft(5,(n,i,r)=>go(1.05+i%2.48,r),{ate:s.danca,fx:"globo"})]}),preocupado:(s,t,e=0)=>{let n=l=>gi(l,.6,{lean:.22}),i=Ft(1.3,vh(l=>Ht(l),n),{ate:s.cadP}),r=Ft(1.3,_h(l=>Ht(l),n),{ate:s.cadS}),a=[(l=>Ft(l,(c,h,d)=>{let u=kt(h,3,5.6,.6),f=kt(h,6.6,7.9,.3),m=le(Qt(h,0,.9))*(1-le(Qt(h,l-.9,l))),v=Math.max(0,Math.sin(d*14))*.025,g=Math.max(0,Math.sin(d*14+2.2))*.025,p=t.teclado(),y=Math.sin(d*3.1)*.03;return gi(d,.6,{lean:.22+.14*u*m,nod:.08+.06*Math.sin(h*1.7)-.1*u,hz:.02,ikL:[p.L.x+y,p.L.y+v,p.L.z],kL:m,ikR:[p.R.x-y,p.R.y+g,p.R.z],kR:m*(1-f),aR:[mt(.6,2.3,f),mt(-.08,.6,f),mt(1,2.4+.15*Math.sin(d*16),f)],item:m>.3?"tecla":"",olhar:[.3*Math.sin(h*2),-.6]})},{mon:"foco",foco:c=>c.pto("mesa",6.8,1.14,.22)}))(9+e%2*3),Ft(3.6,(l,c,h)=>{let d=kt(c,0,3.6,.6),u=Math.sin(h*9)*.12*d;return gi(h,.6,{lean:.22-.3*d,nod:-.1*d,turn:u,aL:[mt(.62,2.5,d),mt(-.08,.7,d),mt(.98,2.3,d)],aR:[mt(.6,2.5,d),mt(-.08,.7,d),mt(1,2.3,d)],balao:kt(c,.3,3.4,.3),balaoT:"smiley-nervous",boca:"o",abre:.4})})];return e%2===0?a.push(i,Ln(.85,[s.ritmo1,s.ritmo2,s.cadP],{pensativo:!0}),Ft(3.4,(l,c,h)=>{let d=kt(c,.1,3.3,.4),u=Math.sin(rt*Qt(c,.8,2.2));return Ht(h,{aR:[mt(0,1.3,d),-.25,mt(.2,2.2,d)],alt:.89-.02*u,nod:.25*d,lean:.06*u,olhos:u>.6?"Z":"A",boca:"triste",sob:"triste",balao:kt(c,.6,3),balaoT:"chart-line-down"})},{ate:[s.cadP[0],s.cadP[1],s.cadP[2]+rt*.3]}),Ft(.8,(l,c,h)=>Ht(h),{ate:s.cadP}),r):a.push(Ft(4,(l,c,h)=>{let d=kt(c,0,4,.6);return gi(h,.6,{lean:.22-.25*d,nod:-.2*d,turn:.5*Math.sin(c*1.2)*d,olhar:[Math.sin(c*1.2)*1.2*d,-.5],boca:"foco"})})),{inicio:s.cadS,aprox:s.cadP,sentado:!0,sentPose:n,padrao:{sob:"tenso",boca:"foco"},passos:a,entrada:[r],saida:[i]}},triste:(s,t,e=0)=>{let n=l=>gi(l,.6,{lean:.32,nod:.35,aL:[.72,-.1,1.05],aR:[.72,-.1,1.05]}),i=l=>Ht(l,{lean:.12,nod:.3}),r=Ft(1.6,vh(i,n),{ate:s.polP}),o=Ft(1.6,_h(i,n),{ate:s.polS}),a=[Ft(11.5,(l,c,h)=>{let d=kt(c,.2,4.6,.6),u=Math.sin(rt*Qt(c,5.2,6.8)),f=kt(c,7.2,11.2,.6);return gi(h,.6,{lean:.32+.25*d-.12*f+.04*u,nod:.35+.25*d-.3*f,turn:-.5*f,aL:[mt(.72,1.55,d),mt(-.1,-.32,d),mt(1.05,2.45,d)],aR:[mt(.72,1.55,d),mt(-.1,-.32,d),mt(1.05,2.45,d)],olhos:d>.5?"Z":"A",olhar:f>.3?[-1.4,-.6]:[0,1.2],dy:-.01*u})})];return e%2===0?a.push(r,Ln(.62,[s.janP],{estilo:"triste"}),Ft(9.5,(l,c,h)=>{let d=kt(c,.8,7.8,.6),u=Math.sin(rt*Qt(c,3.6,5.2)),f=kt(c,5.6,7.4,.5);return Ht(h,{aL:[mt(0,1.75,d),-.1*d,mt(.2,.55,d)],alt:.89-.02*u,lean:.06+.1*f,nod:.1+.3*f-.1*d,side:-.05*f,olhar:[0,-.5]})},{ate:s.janP,foco:()=>Et(-1.2,1.5,1.8)}),Ln(.62,[s.polP],{estilo:"triste"}),Ft(.6,(l,c,h)=>i(h),{ate:s.polP}),o):a.push(Ft(7,(l,c,h)=>{let d=Math.sin(rt*Qt(c,1.5,3.5));return gi(h,.6,{lean:.32+.08*d,nod:.35-.2*kt(c,3.8,6.6,.6),turn:-.6*kt(c,3.8,6.6,.6),aL:[.72,-.1,1.05],aR:[.72,-.1,1.05],olhar:[-1.4,-.4],olhos:d>.6?"Z":"A"})})),{inicio:s.polS,aprox:s.polP,sentado:!0,sentPose:n,padrao:{sob:"triste",boca:"triste",nuvem:1,lagrima:1},passos:a,entrada:[o],saida:[r]}}},fo={cachorro:{humores:["triste","preocupado","tranquilo","feliz","euforico"],ic:"dog",lugar:s=>s.lugar("cachorro",[1.35,5.42,0]),passos:s=>[Ft(1.4,(t,e,n)=>Ht(n,{nod:.35,olhar:[0,1.2],boca:"sorriso",boch:.3}),{fx:"caoVem"}),Ft(5.2,(t,e,n)=>{let i=kt(e,0,5.2,.7),r=s.alvoCao(),o=Math.sin(e*5)*.06;return wl(n,i,{ikR:[r.x+o,r.y+.1,r.z],kR:i,nod:.3*i,boca:"sorriso",olhos:e>2?"F":"A",boch:.5,olhar:[0,1]})},{fx:"caoCarinho"}),Ft(1.2,(t,e,n)=>Ht(n,{...ar(e,1.2)}),{fx:"caoCarinho"})]},aquario:{humores:["preocupado","tranquilo","feliz","euforico"],ic:"fish",lugar:s=>s.lugar("aquario",[.98,6.835,-rt/2]),passos:s=>[Ft(1,(t,e,n)=>Ht(n,{nod:.2,olhar:[0,.6]})),Ft(4.6,(t,e,n)=>{let i=kt(e,0,4.6,.6),r=s.pto("aquario",.35,1.38,6.835),o=Math.sin(n*18)*.02*Qt(e,1,1.4)*(1-Qt(e,3.4,3.8));return Ht(n,{ikR:[r.x+o,r.y,r.z],kR:i,lean:.12*i,nod:.3*i,mR:.3+.4*Math.abs(Math.sin(n*12))*i,boca:"sorriso",olhar:[0,1]})},{fx:"racao"}),Ft(1.6,(t,e,n)=>Ht(n,{boca:"sorriso",olhos:"F",boch:.5,nod:.1}))]},fliperama:{humores:["tranquilo","feliz","euforico"],ic:"joystick",lugar:s=>s.lugar("fliperama",[5.29,1.42,rt]),passos:s=>[Ft(7,(t,e,n)=>{let i=kt(e,0,7,.6),[r,o]=s.alvoArcade(),a=Math.max(0,Math.sin(n*13))*.02;return Ht(n,{ikL:[r.x,r.y,r.z],kL:i,ikR:[o.x,o.y-a,o.z],kR:i,lean:.1*i,nod:-.05+.04*Math.sin(n*6),side:.03*Math.sin(n*3),boca:"foco",olhar:[0,-.3],mL:.9*i})},{fx:"arcade"}),Ft(1.8,(t,e,n)=>{let i=kt(e,0,1.8,.3);return Ht(n,{aL:[2.8*i,.4,.3],aR:[2.8*i,.4,.3],dy:.1*Math.abs(Math.sin(e*7))*i,boca:"aberta",olhos:"F",boch:.8})})]},touro:{humores:["tranquilo","feliz","euforico"],ic:"cow",lugar:s=>{let t=s.alvoTouro(),e=s.lugar("touro",[5.4,6.75]);return[e[0],e[1],mo(e,[t.x,t.z])]},passos:s=>[Ft(3.6,(t,e,n)=>{let i=kt(e,0,3.6,.6),r=s.alvoTouro(),o=Math.sin(e*6)*.05;return Ht(n,{ikR:[r.x+o,r.y+.04,r.z+o*.5],kR:i,lean:.18*i,boca:"sorriso",olhos:e>1.5?"F":"A",boch:.45})}),Ft(2,(t,e,n)=>Ht(n,{...ar(e,2)}))]},cofre:{humores:["preocupado","tranquilo","feliz","euforico"],ic:"vault",lugar:s=>s.lugar("cofre",[7.62,1.63,rt/2]),passos:s=>[Ft(1.8,(t,e,n)=>{let i=le(Qt(e,0,.8)),r=s.alvoCofre();return wl(n,.55*i,{ikR:[r.x,r.y,r.z],kR:i,porta:1.9*le(Qt(e,.9,1.8)),boca:"o",abre:.4})},{fx:"cofre"}),Ft(2,(t,e,n)=>{let i=kt(e,0,1.4,.4),r=s.pto("cofre",8.54,.2,1.75);return wl(n,.55*(1-le(Qt(e,1,2))),{ikR:[r.x,r.y,r.z],kR:i,aR:[1,-.1,1.5],porta:1.9,boca:"sorriso",olhos:"F",boch:.6})},{fx:"cofre",props:{moeda:(t,e)=>e<.75?"casa":"R"}}),Ft(1.8,(t,e,n)=>Ht(n,{aR:[1,-.1,1.5],porta:1.9,olhar:[0,-1.6*kt(e,.2,1.4)],nod:-.35*kt(e,.2,1.4),boca:"aberta",olhos:"A",fxk:Qt(e,.15,1.35),mR:.2}),{fx:"cofre",props:{moeda:(t,e)=>e<.15||e>1.35?"R":"joga"}}),Ft(1.9,(t,e,n)=>{let i=kt(e,0,1.9,.5),r=s.pto("cofre",8.54,.2,1.75);return wl(n,.55*i,{ikR:[r.x,r.y,r.z],kR:i*Qt(e,.2,.6),aR:[1,-.1,1.5],porta:1.9*(1-le(Qt(e,1,1.8))),boca:"sorriso"})},{fx:"cofre",props:{moeda:(t,e)=>e<.75?"R":"casa"}})]},trofeu:{humores:["tranquilo","feliz","euforico"],ic:"trophy",lugar:s=>s.lugar("trofeu",[7.98,2.6,rt/2]),passos:s=>[Ft(1.2,(t,e,n)=>{let i=le(t),r=s.alvoTrofeu();return Ht(n,{ikL:[r.L.x,r.L.y,r.L.z],kL:i,ikR:[r.R.x,r.R.y,r.R.z],kR:i,lean:.15*i,boca:"o",fxk:t})},{fx:"trofeuPega"}),Ft(3,(t,e,n)=>{let i=kt(e,0,3,.7),r=Ht(n,{aL:[mt(.6,2.85,i),.35,.5],aR:[mt(.6,2.85,i),.35,.5],dy:.04*Math.abs(Math.sin(e*6))*i,boca:"aberta",olhos:"F",boch:.8,nod:-.25*i});return r.olhar=[0,-1.5*i],r},{fx:"trofeu"}),Ft(1.2,(t,e,n)=>{let i=1-le(t),r=s.alvoTrofeu(!0);return Ht(n,{ikL:[r.L.x,r.L.y,r.L.z],kL:i,ikR:[r.R.x,r.R.y,r.R.z],kR:i,lean:.15*i,boca:"sorriso",fxk:t})},{fx:"trofeuSolta"})]},porquinho:{humores:["preocupado","tranquilo","feliz","euforico"],ic:"piggy-bank",lugar:s=>s.lugar("mesa",[7.55,1.22,rt]),passos:s=>[Ft(1.3,(t,e,n)=>{let i=s.bolso("R"),r=kt(e,0,.95,.3);return Ht(n,{ikR:[i.x,i.y,i.z],kR:r,aR:[.5,-.1,1.3],nod:.25,olhar:[0,1]})},{props:{moeda:(t,e)=>e<.55?"casa":"R"}}),Ft(1.9,(t,e,n)=>{let i=kt(e,0,1.9,.4),r=s.alvoPorco();return Ht(n,{ikR:[r.x,r.y+.1,r.z],kR:i,aR:[.5,-.1,1.3],lean:.25*i,nod:.35,olhar:[0,1],boca:"sorriso"})},{fx:"porco",props:{moeda:(t,e)=>e<.9?"R":e<1.15?"cofrinho":"casa"}}),Ft(1.4,(t,e,n)=>Ht(n,{...ar(e,1.4)}))]},neon:{humores:["tranquilo","feliz","euforico"],ic:"currency-btc",lugar:()=>[1.55,6.6,-rt/2],passos:s=>[Ft(5.6,(t,e,n)=>{let i=s.bolso("R"),r=kt(e,0,.8,.25)+kt(e,4.7,5.6,.25),o=kt(e,.5,5,.5),a=kt(e,2.6,4.4,.3);return Ht(n,{ikR:[i.x,i.y,i.z],kR:r,aR:[mt(0,1.05,o),-.25,mt(.2,2,o)],aL:[.3*o,-.2,.9*o],nod:mt(.35,-.3,a)*o,olhar:[0,mt(1,-1.2,a)],boca:a>.5?"sorriso":"foco",boch:.3})},{props:{celular:(t,e)=>e<.45||e>5.2?"casa":"R"}}),Ft(1.4,(t,e,n)=>Ht(n,{...ar(e,1.4)}))]},arcoiris:{humores:["tranquilo","feliz","euforico"],ic:"rainbow",lugar:()=>[3.2,.95,rt],passos:()=>[Ft(3.2,(s,t,e)=>{let n=kt(t,0,3.2,.6);return Ht(e,{aL:[2.2*n,.5,1.2*n],aR:[2.2*n,.5,1.2*n],nod:-.4*n,olhar:[0,-1.4],boca:"sorriso",olhos:"F",boch:.6})}),Ft(1.8,(s,t,e)=>{let n=Math.abs(Math.sin(t*9));return Ht(e,{aL:[1.2,-.25-.25*n,1.6],aR:[1.2,-.25-.25*n,1.6],boca:"aberta",olhos:"F",boch:.7})})]},dardos:{humores:["tranquilo","feliz","euforico","preocupado"],ic:"target",lugar:()=>[2.45,5.95,-rt/2],passos:s=>[Ft(1.1,(t,e,n)=>{let i=s.bolso("L"),r=kt(e,0,.8,.25);return Ht(n,{ikL:[i.x,i.y,i.z],kL:r,aL:[.55*le(Qt(e,.5,1.1)),.05,1.2*le(Qt(e,.5,1.1))],olhar:[0,-.2]})},{props:{aljava:(t,e)=>e<.5?"casa":"L"}})].concat([0,1,2].map(t=>Ft(1.7,(e,n,i)=>{let r=kt(n,0,.42,.14),o=s.boneco.mL,a=le(Qt(n,.3,.8)),l=le(Qt(n,.8,1.02)),c=le(Qt(n,1.2,1.7)),h=[.45,-.1,1.3],d=[1.75,-.1,2.35],u=[1.35,-.1,.25],f=n<.8?h.map((m,v)=>mt(m,d[v],a)):n<1.2?d.map((m,v)=>mt(m,u[v],l)):u.map((m,v)=>mt(m,h[v],c));return Ht(i,{aR:f,ikR:[o.x,o.y+.02,o.z],kR:r,aL:[.55,.05,1.2],twist:-.15*a+.25*l-.1*c,lean:.06*l,boca:"foco",olhar:[0,-.2],lL:[.18*a,.1],fxk:t+(n>=.92?.5:0)})},{fx:"dardo",props:{dardo:(e,n)=>n<.25||n>=.92?"casa":"R",aljava:"L"}}))).concat([Ft(1.6,(t,e,n)=>Ht(n,{...ar(e,1.6),aL:[.55*(1-le(Qt(e,0,.6))),.05,1.2*(1-le(Qt(e,0,.6)))]}),{fx:"dardo",props:{aljava:"casa"}})])},globo:{humores:["tranquilo","feliz","euforico"],ic:"disco-ball",lugar:s=>s.lugares().danca,passos:()=>[Ft(6.2,(s,t,e)=>go(t%3.1+(t>3.1?1.05:0),e),{fx:"globo"})]}},y_=s=>[Ft(2.6,(t,e,n)=>{let i=kt(e,0,2.6,.3);return Ht(n,{aL:[1.9*i,-.45,2.3*i],aR:[1.9*i,-.45,2.3*i],boca:"o",abre:.9,olhos:"A",boch:.6,balao:kt(e,.1,2.5,.3),balaoT:s,dy:.05*Math.sin(rt*Qt(e,0,.4))})},{fx:"novidade"}),Ft(1.7,(t,e,n)=>go(e,n))];function Py(s,t){return new Th(s,t)}var Tl=(s,t,e)=>[s*Math.cos(e)+t*Math.sin(e),-s*Math.sin(e)+t*Math.cos(e)];function Ll(s){let t=[];for(let[e,n]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let[i,r]=Tl(e*s.h[0],n*s.h[1],s.r);t.push([s.c[0]+i,s.c[1]+r])}return t}function Mh(s,t,e=0){let n=[s,t].flatMap(o=>[[Math.cos(o.r),-Math.sin(o.r)],[Math.sin(o.r),Math.cos(o.r)]]),i=Ll(s),r=Ll(t);for(let[o,a]of n){let l=1e9,c=-1e9,h=1e9,d=-1e9;for(let[u,f]of i){let m=u*o+f*a;l=Math.min(l,m),c=Math.max(c,m)}for(let[u,f]of r){let m=u*o+f*a;h=Math.min(h,m),d=Math.max(d,m)}if(c-e<=h||d-e<=l)return!1}return!0}var Th=class{constructor(t,e){this.el=t,this.d={};let n=this.renderer=new lo({antialias:!0,alpha:!0,powerPreference:"high-performance"});this.pr=Math.min(window.devicePixelRatio||1,2),n.setPixelRatio(this.pr),n.outputColorSpace=tn,n.toneMapping=js,n.toneMappingExposure=1,n.shadowMap.enabled=!0,n.shadowMap.type=Di,n.domElement.className="of-canvas",n.domElement.setAttribute("role","img"),t.appendChild(n.domElement);let i=this.scene=new Ti,r=new rs(n);i.environment=r.fromScene(new ho,.04).texture,i.environmentIntensity=.32,this.cam=new He(30,1,.1,80),this.az=rt/4,this.el_=.5,this.camModo="sala",this.camAtual=null,this.tAnt=performance.now(),this.t0=performance.now(),this.notas=[],this.hist=[],this.feed=[],this.flash={},this.fx=[],this.moveis={},this.fixos=[],this.nav=new wh,this.construir(),this.boneco=new Cl(e.cor,e.icone,e.boneco,e.acessorio),i.add(this.boneco.root),i.add(this.boneco.blob),this.cao=new Eh,i.add(this.cao.g),this.filtro=new Pl,this.vida=new Il,this.vistos=this.lerVistos(),window.__ofDebug&&(window.__ofDebug=this),this.ligarControles(),this.ro=new ResizeObserver(()=>this.redimensionar()),this.ro.observe(t),this.redimensionar(),this.aplicarLayout(e.layout,!0),this.atualizar(e),this.reduz=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,this.laco=this.laco.bind(this),this.raf=requestAnimationFrame(this.laco)}movel(t,e,n,i={}){let r=new St;r.position.set(e[0],0,e[1]),this.scene.add(r);let o=new St;return o.position.set(-e[0],0,-e[1]),r.add(o),this.moveis[t]={id:t,outer:r,inner:o,P:e,caixas:n,x:e[0],z:e[1],ri:0,piso:!!i.piso,nome:i.nome||t,decor:i.decor||null},o}pedaco(t,e,n,i=0){let r=new St;r.position.set(n[0],0,n[1]),r.rotation.y=i,t.add(r);let o=new St;return o.position.set(-e[0],0,-e[1]),r.add(o),o}giro(t,e=t.ri){return e*rt/4}lugar(t,e){let n=this.moveis[t];if(!n)return e.slice();let i=this.giro(n),[r,o]=Tl(e[0]-n.P[0],e[1]-n.P[1],i);return e.length>2?[n.x+r,n.z+o,e[2]+i]:[n.x+r,n.z+o]}pto(t,e,n,i){let r=this.lugar(t,[e,i]);return Et(r[0],n,r[1])}caixasDe(t,e=t.x,n=t.z,i=t.ri){let r=i*rt/4;return t.caixas.map(o=>{let[a,l]=Tl(o.c[0]-t.P[0],o.c[1]-t.P[1],r);return{c:[e+a,n+l],h:o.h,r:(o.r||0)+r}})}ativo(t){return t.outer.visible}cabe(t,e,n,i){let r=this.caixasDe(t,e,n,i);for(let o of r)for(let[a,l]of Ll(o))if(a<.02||a>je-.02||l<.02||l>Qe-.02)return!1;if(t.piso)return!0;for(let o in this.moveis){let a=this.moveis[o];if(a===t||a.piso||!this.ativo(a))continue;let l=this.caixasDe(a);for(let c of r)for(let h of l)if(Mh(c,h,.005))return!1}for(let o of this.fixos)for(let a of r)if(Mh(a,o,.005))return!1;return!0}prender(t,e,n,i){let r=1e9,o=-1e9,a=1e9,l=-1e9;for(let c of this.caixasDe(t,e,n,i))for(let[h,d]of Ll(c))r=Math.min(r,h),o=Math.max(o,h),a=Math.min(a,d),l=Math.max(l,d);return r<.03&&(e+=.03-r),o>je-.03&&(e-=o-(je-.03)),a<.03&&(n+=.03-a),l>Qe-.03&&(n-=l-(Qe-.03)),[e,n]}posicionar(t,e,n,i){t.x=e,t.z=n,t.ri=(i%8+8)%8,t.outer.position.set(e,0,n),t.outer.rotation.y=this.giro(t)}layoutAtual(){let t={m:{},off:[...this.off||[]].sort()};for(let e in this.moveis){let n=this.moveis[e];(Math.abs(n.x-n.P[0])>.005||Math.abs(n.z-n.P[1])>.005||n.ri)&&(t.m[e]=[Math.round(n.x*100)/100,Math.round(n.z*100)/100,n.ri])}return t}aplicarLayout(t,e){t=t&&typeof t=="object"?t:{},this.off=new Set(Array.isArray(t.off)?t.off.filter(i=>typeof i=="string"):[]);for(let i in this.moveis){let r=this.moveis[i];this.posicionar(r,r.P[0],r.P[1],0)}let n=t.m&&typeof t.m=="object"?t.m:{};for(let i in n){let r=this.moveis[i],o=n[i];if(!r||!Array.isArray(o)||o.length<3||!o.every(isFinite))continue;let[a,l]=this.prender(r,+o[0],+o[1],o[2]|0);this.posicionar(r,a,l,o[2]|0)}e||this.mudouLayout()}mudouLayout(){this.nav.limpar();for(let e in this.moveis){let n=this.moveis[e];if(!(n.piso||!this.ativo(n)))for(let i of this.caixasDe(n))this.marcar(i)}for(let e of this.fixos)this.marcar(e);if(this.calibrarTacada(),this.sujoNav=!1,this.sujo=!0,this.dir&&this.dir.replanejar(),this.plantaFrente){let e=this.moveis.planta2,n=["touro","aquario","cofre","fliperama","trofeu","cachorro"].some(i=>{let r=this.moveis[i];return r&&this.ativo(r)&&this.caixasDe(r).some(o=>this.caixasDe(e).some(a=>Mh(o,a)))});e.outer.visible=!n}}marcar(t){let e=this.nav,n=.24,i=e.c,r=Math.hypot(t.h[0],t.h[1])+n,o=Math.max(0,Math.floor((t.c[0]-r)/i)),a=Math.min(e.nx-1,Math.floor((t.c[0]+r)/i)),l=Math.max(0,Math.floor((t.c[1]-r)/i)),c=Math.min(e.nz-1,Math.floor((t.c[1]+r)/i));for(let h=o;h<=a;h++)for(let d=l;d<=c;d++){let[u,f]=Tl((h+.5)*i-t.c[0],(d+.5)*i-t.c[1],-t.r),m=Math.max(Math.abs(u)-t.h[0],0),v=Math.max(Math.abs(f)-t.h[1],0);m*m+v*v<=n*n&&(e.b[h+d*e.nx]=1)}}construir(){let t=this.scene,e=(_,A,F,k,q=0)=>({c:[_,A],h:[F,k],r:q});this.hemi=new Zs("#E3EBFF","#B08A64",.9),t.add(this.hemi);let n=this.key=new Fi("#FFF4E3",1.8);n.position.set(11,12,11),n.target.position.set(4,0,3.5),t.add(n,n.target),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),n.shadow.bias=-4e-4,n.shadow.normalBias=.025,n.shadow.radius=4,Object.assign(n.shadow.camera,{left:-7.5,right:7.5,top:7,bottom:-7,near:2,far:40}),this.fill=new Fi("#CFE0FF",.35),this.fill.position.set(-4,6,8),t.add(this.fill);let i=Ge(1024,1024);this.desenharPiso(i),i.t.wrapS=i.t.wrapT=Ds,i.t.repeat.set(je/4.5,Qe/4.5),this.chao=Bt(new Xe(je,Qe),new ve({map:i.t,roughness:.55,metalness:0}),t,je/2,0,Qe/2,{rx:-rt/2,cast:!1}),ot(t,K("#8A5A34",{r:.8}),[-fn,-.22,-fn],[je+.05,-.001,Qe+.05],.02,{cast:!1}),ot(t,K("#E6E3DD",{r:.9}),[-fn-.06,-.3,-fn-.06],[je+.11,-.2,Qe+.11],.04,{cast:!1});let r=K("#EEF1F6",{r:.95}),o=K("#E5E9F1",{r:.95}),a=K("#C9D1DD",{r:.9});ot(t,r,[-fn,0,-fn],[je,Ze,0],.005);let l=.95,c=2.65,h=.92,d=2.38;ot(t,o,[-fn,0,0],[0,Ze,l],.005),ot(t,o,[-fn,0,c],[0,Ze,Qe],.005),ot(t,o,[-fn,0,l],[0,h,c],.005),ot(t,o,[-fn,d,l],[0,Ze,c],.005),ot(t,a,[-fn-.005,Ze,-fn-.005],[je+.005,Ze+.03,.005],.01),ot(t,a,[-fn-.005,Ze,0],[.005,Ze+.03,Qe+.005],.01),ot(t,a,[je-.001,0,-fn],[je+.004,Ze+.03,0],.001),ot(t,a,[-fn,0,Qe-.001],[0,Ze+.03,Qe+.004],.001);let u=K("#FFFFFF",{r:.6});ot(t,u,[0,0,0],[je,.1,.02],.005),ot(t,u,[0,0,0],[.02,.1,Qe],.005),this.ceu=Ge(256,256),Bt(new Xe(c-l,d-h),new We({map:this.ceu.t,toneMapped:!1}),t,-.1,(h+d)/2,(l+c)/2,{ry:rt/2,cast:!1,recv:!1}),Bt(new Xe(c-l,d-h),new ve({color:"#DDF1FF",transparent:!0,opacity:.12,roughness:.05,metalness:.3}),t,-.03,(h+d)/2,(l+c)/2,{ry:rt/2,cast:!1,recv:!1});let f=K("#FFFFFF",{r:.4});ot(t,f,[-.06,h-.02,l-.06],[.04,d+.04,l],.01),ot(t,f,[-.06,h-.02,c],[.04,d+.04,c+.06],.01),ot(t,f,[-.06,d,l],[.04,d+.06,c],.01),ot(t,f,[-.06,(h+d)/2-.025,l],[0,(h+d)/2+.025,c],.01),ot(t,f,[-.06,h,(l+c)/2-.025],[0,d,(l+c)/2+.025],.01),ot(t,K("#F1F5F9",{r:.5}),[-.06,h-.06,l-.12],[.16,h,c+.12],.015);let m=K("#C7D2FE",{r:1});for(let[_,A]of[[l-.42,l-.06],[c+.06,c+.42]])for(let F=0;F<4;F++)wn(t,m,.05,2.45,.08,1.38,_+.05+F*(A-_-.1)/3,{});$t(t,K("#94A3B8",{m:.6,r:.3}),.015,.015,c-l+1,.08,d+.25,(l+c)/2,{rx:rt/2});let v=Ge(64,64),g=v.g.createLinearGradient(0,0,64,0);g.addColorStop(0,"rgba(255,255,255,.9)"),g.addColorStop(1,"rgba(255,255,255,0)"),v.g.fillStyle=g,v.g.fillRect(0,0,64,64);let p=new Ne;p.setAttribute("position",new he([.02,.005,l+.1,.02,.005,c-.1,3,.005,c+1.5,3,.005,l+1.3],3)),p.setAttribute("uv",new he([0,0,0,1,1,1,1,0],2)),p.setIndex([0,1,2,0,2,3]),this.feixe=new Me(p,new We({map:v.t,color:"#FFE7A3",transparent:!0,opacity:.3,blending:Ni,depthWrite:!1,toneMapped:!1})),t.add(this.feixe);{let _=this.movel("tapete",[3.35,3.85],[e(3.35,3.85,1.65,2.5)],{piso:!0,nome:"Tapete"}),A=Ge(512,512);this.desenharTapete(A),Bt(new os(3.3,.016,5,2,.007),new ve({map:A.t,roughness:1}),_,3.35,.009,3.85,{cast:!1})}let y=K("#9A6B43",{r:.7}),b=K("#7A5233",{r:.8});ot(t,b,[1.6,0,0],[4.8,Ze,.025],.002,{cast:!1});for(let _=1.62;_<4.78;_+=.1)ot(t,y,[_,.1,.02],[_+.06,Ze-.02,.05],.008,{cast:!1});let M=K("#3F3A36",{r:.6}),w=K("#B07A4C",{r:.6});ot(t,M,[1.95,.12,.05],[4.45,.52,.48],.02),ot(t,w,[1.97,.18,.47],[3.18,.48,.49],.01),ot(t,w,[3.22,.18,.47],[4.43,.48,.49],.01);for(let _ of[2.05,4.35])for(let A of[.12,.42])$t(t,K("#111827"),.015,.015,.12,_,.06,A);ot(t,K("#F8FAFC",{r:.3}),[2.3,.52,.18],[2.62,.58,.4],.02),ot(t,K("#111827",{r:.4}),[3.85,.52,.2],[3.98,.86,.33],.02),ot(t,K("#111827",{r:.4}),[2.95,.52,.2],[3.08,.86,.33],.02),ot(t,K("#0B0F19",{r:.25,m:.4}),[2.25,1,.06],[4.15,2.06,.12],.02),this.tv=Ge(512,288),Bt(new Xe(1.84,1),new We({map:this.tv.t,toneMapped:!1}),t,3.2,1.53,.123,{cast:!1,recv:!1}),this.tvLuz=new ti("#818CF8",1.4,4.5,1.6),this.tvLuz.position.set(3.2,1.5,.9),t.add(this.tvLuz),this.fixos.push(e(3.2,.27,1.25,.24));{let _=this.movel("centro",[3.21,1.72],[e(3.21,1.72,.6,.29)],{nome:"Mesa de centro"}),A=K("#C89A6B",{r:.55});ot(_,A,[2.62,.36,1.45],[3.8,.42,2],.03),ot(_,K("#E7D6C3"),[2.7,.08,1.52],[3.72,.11,1.93],.01);for(let F of[2.68,3.74])for(let k of[1.5,1.95])$t(_,K("#3F3A36"),.02,.02,.36,F,.18,k);ot(_,K("#F43F5E"),[2.8,.42,1.6],[3.1,.44,1.82],.005,{ry:.2}),ot(_,K("#38BDF8"),[2.84,.44,1.62],[3.1,.455,1.8],.005,{ry:-.1}),ot(_,K("#F8FAFC",{r:.4}),[3.35,.42,1.62],[3.6,.44,1.8],.004,{ry:.3})}{let _=this.movel("sofa",[3.2,3.05],[e(3.2,3.05,1.24,.47)],{nome:"Sof\xE1"}),A=K("#0F766E",{r:.95}),F=K("#14857B",{r:.95}),k=K("#2BB3A3",{r:1});ot(_,A,[2,.08,2.6],[4.4,.42,3.5],.06),ot(_,A,[2,.08,3.22],[4.4,.98,3.52],.08),ot(_,F,[1.96,.08,2.58],[2.2,.66,3.52],.07),ot(_,F,[4.2,.08,2.58],[4.44,.66,3.52],.07),ot(_,k,[2.22,.4,2.62],[3.19,.54,3.24],.06),ot(_,k,[3.21,.4,2.62],[4.18,.54,3.24],.06),ot(_,k,[2.24,.5,3],[3.18,.92,3.24],.07,{rx:-.12}),ot(_,k,[3.22,.5,3],[4.16,.92,3.24],.07,{rx:-.12}),ot(_,K("#FCD34D",{r:1}),[2.28,.5,2.95],[2.62,.82,3.1],.06,{rz:.15,rx:-.2});for(let q of[2.06,4.34])for(let ft of[2.66,3.44])$t(_,K("#3F3A36"),.025,.02,.08,q,.04,ft)}{let _=this.movel("poltrona",[.92,3.2],[e(.92,3.2,.5,.44,rt/4)],{nome:"Poltrona"}),A=new St;A.position.set(.92,0,3.2),A.rotation.y=rt/4,_.add(A);let F=K("#B45309",{r:.95}),k=K("#D97706",{r:.95});ot(A,F,[-.42,.1,-.36],[.42,.4,.4],.06),ot(A,F,[-.42,.1,-.44],[.42,1.05,-.2],.08,{rx:.1}),ot(A,k,[-.5,.1,-.4],[-.32,.62,.4],.07),ot(A,k,[.32,.1,-.4],[.5,.62,.4],.07),ot(A,K("#F59E0B",{r:1}),[-.32,.38,-.25],[.32,.5,.38],.05);for(let q of[-.44,.44])for(let ft of[-.36,.36])$t(A,K("#3F3A36"),.025,.018,.1,q,.05,ft)}{let _=this.movel("luminaria",[.32,4],[e(.32,4,.16,.16)],{nome:"Lumin\xE1ria"}),A=new St;A.position.set(.32,0,4),_.add(A),$t(A,K("#1F2937",{m:.6,r:.4}),.14,.16,.03,0,.015,0),$t(A,K("#1F2937",{m:.6,r:.4}),.012,.012,1.5,0,.77,0),this.cupula=$t(A,new ve({color:"#FEF3C7",roughness:.8,emissive:"#FFD58A",emissiveIntensity:0}),.12,.2,.26,0,1.6,0,{seg:28}),this.lampLuz=new ti("#FFC978",0,4.2,1.8),this.lampLuz.position.set(.35,1.5,4),_.add(this.lampLuz),this.lampHalo=ls("#FFD58A",1.1,0),this.lampHalo.position.set(.34,1.58,4),_.add(this.lampHalo)}{let _=this.movel("cafe",[.31,4.9],[e(.31,4.9,.31,.58)],{nome:"Cantinho do caf\xE9"}),A=K("#F8FAFC",{r:.5});ot(_,A,[.02,0,4.35],[.58,.88,5.45],.02),ot(_,K("#334155",{r:.35}),[0,.88,4.32],[.62,.92,5.48],.01),ot(_,K("#E2E8F0"),[.57,.1,4.4],[.585,.82,4.88],.004),ot(_,K("#E2E8F0"),[.57,.1,4.92],[.585,.82,5.4],.004);let F=new St;F.position.set(.24,.92,4.9),_.add(F),ot(F,K("#111827",{r:.3,m:.3}),[-.14,0,-.14],[.14,.38,.14],.03),ot(F,K("#D1D5DB",{r:.25,m:.8}),[-.04,.24,-.13],[.2,.34,.13],.02),$t(F,K("#FFFFFF",{r:.3}),.035,.03,.08,.14,.04,0),this.vapor=[];for(let k=0;k<4;k++){let q=ls("#FFFFFF",.1,0);q.material.blending=fi,q.position.set(.38,1,4.9),_.add(q),this.vapor.push(q)}for(let k=0;k<3;k++)$t(_,K(["#F43F5E","#FACC15","#38BDF8"][k]),.035,.03,.08,.38,.96,5.2+k*.09)}let S=Ge(256,192);this.desenharQuadro(S),ot(t,K("#1F2937",{r:.4}),[0,1.45,4.45],[.04,2.25,5.4],.01),Bt(new Xe(.87,.72),new ve({map:S.t,roughness:.6}),t,.045,1.85,4.925,{ry:rt/2,cast:!1});{let _=this.movel("mesa",[6.8,.6],[e(6.8,.42,1.06,.41),e(6.8,1.22,.3,.3)],{nome:"Escrivaninha"});this.mesaG=_;let A=K("#9C6B45",{r:.5}),F=K("#1F2937",{r:.4,m:.6});ot(_,A,[5.75,.72,.02],[7.85,.77,.82],.02);for(let ht of[5.82,7.78])ot(_,F,[ht-.03,0,.08],[ht+.03,.72,.14],.01),ot(_,F,[ht-.03,0,.7],[ht+.03,.72,.76],.01),ot(_,F,[ht-.03,.02,.08],[ht+.03,.06,.76],.01);ot(_,K("#F1F5F9",{r:.5}),[7.25,.18,.06],[7.7,.7,.62],.02),ot(_,K("#CBD5E1"),[7.27,.42,.62],[7.68,.44,.63],.003),ot(_,K("#1E293B",{r:.9}),[6,.77,.42],[7.55,.775,.78],.004),ot(_,K("#E5E7EB",{r:.4}),[6.42,.775,.55],[7.08,.8,.7],.01),this.teclas=ot(_,new ve({color:"#94A3B8",roughness:.5,emissive:"#60A5FA",emissiveIntensity:.25}),[6.44,.8,.565],[7.06,.805,.69],.003),this.mouse=Bt(new ln(.04,16,10),K("#E5E7EB",{r:.3}),_,7.28,.79,.62,{s:[.8,.4,1.2]}),$t(_,F,.11,.12,.012,6.8,.776,.22),ot(_,F,[6.775,.77,.16],[6.825,1,.2],.01),ot(_,K("#0B0F19",{r:.25,m:.4}),[6.19,.86,.17],[7.41,1.42,.22],.02),this.mon=Ge(1024,448),this.monMesh=Bt(new Xe(1.18,.516),new We({map:this.mon.t,toneMapped:!1}),_,6.8,1.14,.222,{cast:!1,recv:!1}),this.monLuz=new ti("#60A5FA",1.1,2.6,1.8),this.monLuz.position.set(6.8,1.15,.75),_.add(this.monLuz),this.monHalo=ls("#60A5FA",1.6,.18),this.monHalo.position.set(6.8,1.14,.12),_.add(this.monHalo),$t(_,K("#F8FAFC",{r:.3}),.04,.035,.1,5.98,.82,.55),Bt(new Be(.025,.008,8,14),K("#F8FAFC"),_,6.03,.83,.55,{ry:0}),this.planta(5.95,.77,.2,.45,_);let k=this.cadeira=new St;k.position.set(6.8,0,1.22),k.rotation.y=rt,_.add(k);let q=K("#1F2937",{r:.7}),ft=this.cadAcento=new ve({color:"#2457F5",roughness:.7});for(let ht=0;ht<5;ht++){let yt=ht*se/5;ot(k,F,[-.02,.05,0],[.02,.08,.3],.01,{ry:yt}).position.set(Math.sin(yt)*.15,.065,Math.cos(yt)*.15),oe(k,K("#111827"),.03,Math.sin(yt)*.29,.03,Math.cos(yt)*.29)}$t(k,F,.025,.03,.4,0,.27,0),ot(k,q,[-.26,.44,-.27],[.26,.53,.25],.05),ot(k,ft,[-.17,.53,-.2],[.17,.535,.2],.005);let Zt=new St;Zt.position.set(0,.5,-.27),Zt.rotation.x=-.12,k.add(Zt),ot(Zt,q,[-.25,.05,-.08],[.25,.85,0],.06),ot(Zt,ft,[-.12,.12,0],[.12,.72,.006],.004),ot(Zt,q,[-.15,.8,-.07],[.15,.98,0],.05);for(let ht of[-1,1])ot(k,F,[ht*.27-.015,.5,-.1],[ht*.27+.015,.68,-.06],.005),ot(k,q,[ht*.27-.04,.68,-.2],[ht*.27+.04,.71,.12],.015);let Q=new St;Q.visible=!1,_.add(Q),this.decPorquinho=Q;let ut=K("#F9A8D4",{r:.5}),dt=new St;dt.position.set(7.55,.775,.6),dt.rotation.y=-.5,Q.add(dt),this.porco=dt,oe(dt,ut,.09,0,.09,0,{s:[.9,.85,1.15]}),$t(dt,K("#F472B6"),.035,.035,.04,0,.08,.11,{rx:rt/2});for(let ht of[-1,1])Bt(new Qn(.025,.05,8),ut,dt,ht*.045,.17,.05,{}),oe(dt,K("#111827"),.008,ht*.035,.12,.085);for(let[ht,yt]of[[-.04,.05],[.04,.05],[-.04,-.05],[.04,-.05]])$t(dt,ut,.02,.02,.05,ht,.02,yt);ot(dt,K("#9D174D"),[-.025,.165,-.03],[.025,.172,.03],.002),En(Q)}ot(t,K("#7A5233",{r:.6}),[5.9,1.86,0],[7.7,1.9,.28],.01);let P=5.98;["#EF4444","#2457F5","#F59E0B","#10B981","#8B5CF6","#0EA5E9","#F43F5E"].forEach((_,A)=>{let F=.05+A%3*.015,k=.2+A%2*.05;ot(t,K(_,{r:.7}),[P,1.9,.04],[P+F,1.9+k,.24],.006,{rz:A===6?-.25:0}),P+=F+.008}),this.planta(7.5,1.9,.12,.3);let E=new St;E.position.set(5.25,2.35,.03),t.add(E),$t(E,K("#1F2937",{r:.4}),.27,.27,.05,0,0,0,{rx:rt/2,seg:40}),$t(E,K("#FFFFFF",{r:.5}),.24,.24,.052,0,0,.002,{rx:rt/2,seg:40});for(let _=0;_<12;_++){let A=_*se/12;ot(E,K("#1F2937"),[-.006,-.025,0],[.006,.025,.01],.002).position.set(Math.sin(A)*.2,Math.cos(A)*.2,.03),E.children[E.children.length-1].rotation.z=-A}let R=(_,A,F,k)=>{let q=new St;return q.position.z=k,E.add(q),ot(q,K(F),[-A/2,-.02,0],[A/2,_,.006],.002),q};this.pH=R(.12,.018,"#1F2937",.03),this.pM=R(.18,.012,"#1F2937",.037),this.pS=R(.2,.005,"#EF4444",.044),oe(E,K("#EF4444"),.014,0,0,.05);{let _=this.sinuca={x0:5.7,x1:8.1,z0:3.75,z1:5.05,y:.8},A=this.movel("sinuca",[6.9,4.4],[e(6.9,4.4,1.2,.65)],{nome:"Mesa de sinuca"});this.sinucaG=A;let F=K("#5B3A1E",{r:.5}),k=K("#15803D",{r:.95});ot(A,F,[_.x0+.15,.12,_.z0+.15],[_.x1-.15,.72,_.z1-.15],.04);for(let Q of[_.x0+.2,_.x1-.2])for(let ut of[_.z0+.2,_.z1-.2])ot(A,F,[Q-.07,0,ut-.07],[Q+.07,.3,ut+.07],.03);ot(A,k,[_.x0+.08,.7,_.z0+.08],[_.x1-.08,.78,_.z1-.08],.01);let q=K("#7C4A21",{r:.45});ot(A,q,[_.x0,.68,_.z0],[_.x1,.84,_.z0+.1],.025),ot(A,q,[_.x0,.68,_.z1-.1],[_.x1,.84,_.z1],.025),ot(A,q,[_.x0,.68,_.z0],[_.x0+.1,.84,_.z1],.025),ot(A,q,[_.x1-.1,.68,_.z0],[_.x1,.84,_.z1],.025);let ft=K("#0B0B0B",{r:.9});this.cacapas=[[_.x0+.11,_.z0+.11],[_.x1-.11,_.z0+.11],[_.x0+.11,_.z1-.11],[_.x1-.11,_.z1-.11],[(_.x0+_.x1)/2,_.z0+.09],[(_.x0+_.x1)/2,_.z1-.09]];for(let[Q,ut]of this.cacapas)$t(A,ft,.055,.055,.012,Q,.785,ut,{cast:!1});let Zt=Q=>oe(A,K(Q,{r:.15}),.03,0,0,0,{seg:20,seg2:14});[["#DC2626",6.25,3.98],["#1D4ED8",6.4,4.85],["#111827",6.95,3.95],["#7C3AED",6.05,4.15]].forEach(([Q,ut,dt])=>Zt(Q).position.set(ut,.81,dt)),this.bB=Zt("#F8FAFC"),this.bA=Zt("#FACC15"),this.pendLuz=new ti("#FFE3A8",0,3.2,1.6),this.pendLuz.position.set(6.9,1.95,4.4),A.add(this.pendLuz),ot(A,K("#3B82F6",{r:.8}),[8,.84,4.95],[8.04,.86,4.99],.003)}{let _=this.movel("planta1",[.45,.45],[e(.45,.45,.24,.24)],{nome:"Planta"});this.planta(.45,0,.45,1.25,_)}{let _=this.movel("planta2",[8.5,6.95],[e(8.5,6.95,.22,.22)],{nome:"Planta"});this.plantaFrente=this.planta(8.5,0,6.95,1.05,_)}let I=this.dec={};{let _=this.movel("fliperama",[5.29,.5],[e(5.29,.5,.34,.42)],{nome:"Fliperama",decor:"fliperama"});I.fliperama=this.moveis.fliperama;let A=this.pedaco(_,[8.52,.5],[5.29,.5]),F=K("#7C3AED",{r:.5});ot(A,F,[8.18,0,.15],[8.86,1.8,.8],.03),ot(A,K("#1F2937"),[8.2,.95,.72],[8.84,1.05,1],.02,{rx:.15}),this.arcade=Ge(128,128),Bt(new Xe(.56,.46),new We({map:this.arcade.t,toneMapped:!1}),A,8.52,1.3,.805,{rx:-.12,cast:!1}),ot(A,new ve({color:"#F472B6",emissive:"#F472B6",emissiveIntensity:.9}),[8.2,1.66,.6],[8.84,1.78,.81],.02),this.joy=new St,this.joy.position.set(8.36,1.07,.88),A.add(this.joy),$t(this.joy,K("#111827"),.008,.008,.07,0,.035,0),oe(this.joy,K("#EF4444",{r:.3}),.025,0,.075,0),this.botoesArc=[oe(A,K("#FACC15",{r:.3}),.02,8.6,1.07,.9),oe(A,K("#22C55E",{r:.3}),.02,8.68,1.07,.88)],this.arcMao=[new Ce,new Ce],this.arcMao[0].position.set(8.36,1.17,.9),this.arcMao[1].position.set(8.64,1.12,.9),this.arcMao.forEach(k=>A.add(k)),En(A)}{let _=this.movel("cofre",[8.54,1.63],[e(8.54,1.63,.36,.34),e(7.92,1.12,.12,.12)],{nome:"Cofre",decor:"cofre"});I.cofre=this.moveis.cofre;let A=this.pedaco(_,[8.54,1.63],[8.54,1.63],-rt/2),F=K("#D4A017",{r:.25,m:.9}),k=K("#3F2A08",{r:.6});ot(A,F,[8.22,0,1.3],[8.86,.72,1.6],.04),ot(A,F,[8.22,0,1.3],[8.28,.72,1.96],.02),ot(A,F,[8.8,0,1.3],[8.86,.72,1.96],.02),ot(A,F,[8.22,0,1.3],[8.86,.06,1.96],.02),ot(A,F,[8.22,.66,1.3],[8.86,.72,1.96],.02),ot(A,k,[8.28,.06,1.58],[8.8,.66,1.62],.005);for(let ft=0;ft<3;ft++)ot(A,K("#FACC15",{r:.25,m:.9,e:"#7A5A00",ei:.6}),[8.32+ft*.15,.06,1.66],[8.44+ft*.15,.14,1.86],.01);this.cofreBrilho=ls("#FDE68A",.9,0),this.cofreBrilho.position.set(8.54,.4,1.8),A.add(this.cofreBrilho);let q=this.cofrePorta=new St;q.position.set(8.24,0,1.97),A.add(q),ot(q,F,[0,.03,-.02],[.6,.69,.03],.03),$t(q,K("#713F12",{m:.6,r:.4}),.1,.1,.03,.3,.4,.04,{rx:rt/2}),ot(q,K("#713F12",{m:.6}),[.295,.32,.05],[.305,.48,.06],.002),this.cofreMacaneta=new Ce,this.cofreMacaneta.position.set(.5,.42,.08),q.add(this.cofreMacaneta);for(let ft=0;ft<5;ft++)$t(A,K("#FACC15",{r:.3,m:.85}),.06,.06,.02,8.05+ft%2*.04,.01+ft*.021,2.25,{});for(let ft=0;ft<3;ft++)$t(A,K("#FACC15",{r:.3,m:.85}),.06,.06,.02,7.92,.01+ft*.021,2.12,{});En(A)}{let _=this.movel("aquario",[.35,6.835],[e(.35,6.835,.31,.49)],{nome:"Aqu\xE1rio",decor:"aquario"});I.aquario=this.moveis.aquario,ot(_,K("#5B3A1E",{r:.6}),[.04,0,6.35],[.66,.74,7.32],.02),Bt(new os(.58,.5,.92,2,.01),new ve({color:"#7DD3FC",transparent:!0,opacity:.32,roughness:.05,metalness:.1,depthWrite:!1}),_,.35,1,6.835,{cast:!1}),ot(_,K("#E7D7B8"),[.08,.74,6.4],[.62,.79,7.28],.01),ot(_,K("#1F2937"),[.05,1.24,6.38],[.65,1.28,7.3],.01),this.peixes=[],["#F97316","#FACC15","#38BDF8","#F43F5E"].forEach((A,F)=>{let k=new St;oe(k,K(A,{r:.4}),.035,0,0,0,{s:[.6,.8,1.4],seg:12}),Bt(new Qn(.03,.05,8),K(A),k,0,0,-.06,{rx:-rt/2}),_.add(k),this.peixes.push(k)});for(let A=0;A<5;A++){let F=Bt(new Qn(.03,.18+A*.03,6),K("#16A34A",{r:.8}),_,.2+A%3*.12,.85,6.5+A*.17);F.userData.alga=A}this.bolhas=[];for(let A=0;A<6;A++){let F=oe(_,K("#FFFFFF",{op:.6,r:.1}),.008,.45,.8,7.1,{seg:8,seg2:6,cast:!1});this.bolhas.push(F)}this.racao=[];for(let A=0;A<14;A++){let F=oe(_,K("#B45309",{r:.8}),.006,.35,1.2,6.8,{seg:6,seg2:4,cast:!1});F.visible=!1,this.racao.push(F)}ot(_,K("#F59E0B",{r:.6}),[.5,1.28,7.12],[.58,1.38,7.2],.008),ot(_,K("#DC2626",{r:.5}),[.5,1.38,7.12],[.58,1.395,7.2],.004),this.aqLuz=ls("#38BDF8",1,.25),this.aqLuz.position.set(.35,1,6.85),_.add(this.aqLuz)}{let _=this.movel("touro",[6.2,6.95],[e(6.2,6.95,.35,.35)],{nome:"Touro de ouro",decor:"touro"});I.touro=this.moveis.touro;let A=this.pedaco(_,[8.5,6.95],[6.2,6.95]),F=K("#E3B341",{r:.18,m:1});ot(A,K("#E5E7EB",{r:.5}),[8.15,0,6.6],[8.85,.55,7.3],.03);let k=new St;k.position.set(8.5,.55,6.95),k.rotation.y=-rt*.6,A.add(k),this.touroT=k,wn(k,F,.13,.28,0,.3,0,{rx:rt/2}),oe(k,F,.12,0,.33,-.1);let q=new St;q.position.set(0,.36,.27),q.rotation.x=.5,k.add(q),oe(q,F,.09,0,0,0,{s:[1,.9,1.2]});for(let ft of[-1,1])Bt(new Be(.07,.015,8,16,rt*.7),F,q,ft*.07,.07,0,{rz:ft>0?-.2:rt+.2});this.touroCab=new Ce,this.touroCab.position.set(0,.1,0),q.add(this.touroCab);for(let[ft,Zt]of[[-.08,.15],[.08,.15],[-.08,-.15],[.08,-.15]])wn(k,F,.035,.12,ft,.12,Zt);Bt(new Be(.08,.012,6,12,rt),F,k,0,.32,-.24,{ry:rt/2}),En(A)}{let _=this.movel("trofeu",[8.6,2.6],[e(8.6,2.6,.18,.18)],{nome:"Trof\xE9u",decor:"trofeu"});I.trofeu=this.moveis.trofeu,ot(_,K("#E5E7EB",{r:.45}),[8.44,0,2.44],[8.76,.08,2.76],.02),ot(_,K("#F8FAFC",{r:.4}),[8.48,.08,2.48],[8.72,1,2.72],.02),ot(_,K("#E5E7EB",{r:.45}),[8.45,1,2.45],[8.75,1.04,2.75],.02);let A=this.trofeuObj=new St,F=K("#E3B341",{r:.2,m:1}),k=[[0,0],[.06,0],[.06,.03],[.018,.04],[.018,.1],[.07,.13],[.085,.22],[0,.22]].map(([q,ft])=>new _t(q,ft));Bt(new Ys(k,24),F,A);for(let q of[-1,1])Bt(new Be(.035,.008,6,12),F,A,q*.085,.17,0,{});En(A),this.trofeuBase=Et(8.6,1.04,2.6),A.position.copy(this.trofeuBase),_.add(A),this.trofeuPai=_}{let _=this.movel("cachorro",[1.35,6.2],[e(1.35,6.2,.38,.3)],{nome:"Caminha do cachorro",decor:"cachorro"});I.cachorro=this.moveis.cachorro,Bt(new Be(.28,.08,12,32),K("#7C3AED",{r:.9}),_,1.35,.08,6.2,{rx:rt/2,s:[1.25,.95,1]}),Bt(new $i(.3,.3,.05,32),K("#C4B5FD",{r:1}),_,1.35,.04,6.2,{s:[1.2,1,.9]}),oe(_,K("#EF4444",{r:.5}),.04,1.75,.04,6.45)}{let _=new St;_.visible=!1,t.add(_),I.globo=_,$t(_,K("#94A3B8"),.004,.004,.3,3.4,Ze-.15,4.9),this.globo=Bt(new Qi(.2,2),new ve({color:"#E2E8F0",metalness:1,roughness:.12,flatShading:!0}),_,3.4,Ze-.48,4.9),this.spots=["#F43F5E","#22D3EE","#FACC15","#A855F7"].map(A=>{let F=new Zr(A,0,8,.35,.6,1.2);return F.position.set(3.4,Ze-.48,4.9),_.add(F,F.target),F})}I.porquinho=this.decPorquinho;{let _=new St;_.visible=!1,t.add(_),I.neon=_;let A=Ge(256,256);A.g.font="900 210px system-ui, sans-serif",A.g.textAlign="center",A.g.textBaseline="middle",A.g.shadowColor="#FB923C",A.g.shadowBlur=24,A.g.fillStyle="#FDBA74",A.g.fillText("\u20BF",128,138),this.neonM=new We({map:A.t,transparent:!0,toneMapped:!1,depthWrite:!1}),Bt(new Xe(.6,.6),this.neonM,_,.03,2.2,6.6,{ry:rt/2,cast:!1}),this.neonHalo=ls("#FB923C",1.1,.35),this.neonHalo.position.set(.15,2.2,6.6),_.add(this.neonHalo)}{let _=new St;_.visible=!1,t.add(_),I.arcoiris=_,this.arcoM=[],["#F43F5E","#F59E0B","#22C55E","#3B82F6"].forEach((F,k)=>{let q=new We({color:F,toneMapped:!1});this.arcoM.push(q),Bt(new Be(.42-k*.07,.014,8,48,rt),q,_,3.2,2.28,.07,{cast:!1})});let A=ls("#FDE68A",1.4,.25);A.position.set(3.2,2.45,.15),_.add(A),this.arcoHalo=A}{let _=new St;_.visible=!1,t.add(_),I.dardos=_;let A=Ge(128,128);[["#111827",62],["#F43F5E",50],["#FEF3C7",34],["#F43F5E",16]].forEach(([F,k])=>{A.g.fillStyle=F,A.g.beginPath(),A.g.arc(64,64,k,0,se),A.g.fill()}),Bt(new Ji(.22,32),new ve({map:A.t,roughness:.8}),_,.012,1.75,5.95,{ry:rt/2,cast:!1}),this.dardos=[];for(let F=0;F<3;F++){let k=new St;$t(k,K("#9CA3AF",{m:.8,r:.3}),.003,.001,.05,0,.025,0),$t(k,K("#1D4ED8"),.006,.006,.08,0,-.04,0),Bt(new Qn(.02,.04,4),K("#FACC15",{ds:!0}),k,0,-.09,0,{rx:rt}),k.scale.setScalar(1.7),t.add(k),k.visible=!1,this.dardos.push(k)}this.dardosAlvo=[[.07,1.77,5.93],[.07,1.7,6],[.07,1.78,6.02]]}let N=260,U=new Xe(.05,.03);this.confete=new Zi(U,new We({side:gn,toneMapped:!1}),N);let D=["#F43F5E","#F59E0B","#22C55E","#3B82F6","#A855F7","#FACC15","#FFFFFF"].map(_=>new re(_));this.confData=Array.from({length:N},()=>({x:Math.random()*je,z:Math.random()*Qe,y0:Math.random()*Ze,v:.4+Math.random()*.5,r:Math.random()*se,rv:(Math.random()-.5)*8,sw:Math.random()*se}));for(let _=0;_<N;_++)this.confete.setColorAt(_,D[_%D.length]);this.confete.visible=!1,this.confete.frustumCulled=!1,t.add(this.confete),this.faisca=Ge(64,64);{let _=this.faisca.g;_.translate(32,32),_.fillStyle="#FFF7C2",_.beginPath();for(let A=0;A<8;A++){let F=A*rt/4,k=A%2?9:30;_.lineTo(Math.cos(F)*k,Math.sin(F)*k)}_.closePath(),_.fill()}this.faiscas=[];for(let _=0;_<18;_++){let A=new Ri(new di({map:this.faisca.t,color:"#FDE68A",transparent:!0,depthWrite:!1,blending:Ni,toneMapped:!1}));A.visible=!1,t.add(A),this.faiscas.push({s:A,vida:9})}this.notaGeo=new os(.16,.004,.08,1,.001);let O=Ge(128,64);O.g.fillStyle="#86EFAC",O.g.fillRect(0,0,128,64),O.g.strokeStyle="#15803D",O.g.lineWidth=5,O.g.strokeRect(4,4,120,56),O.g.fillStyle="#15803D",O.g.font="bold 34px system-ui",O.g.textAlign="center",O.g.fillText("R$",64,44),this.notaMat=new ve({map:O.t,roughness:.8}),this.itens={},this.itens.controle=this.fazerControle(),t.add(this.itens.controle);let X=new St;$t(X,K("#FFFFFF",{r:.3}),.042,.036,.1,0,.05,0),$t(X,K("#6B3E1F",{r:.2}),.038,.038,.004,0,.096,0),Bt(new Be(.028,.008,8,14),K("#FFFFFF"),X,.045,.05,0,{}),En(X,!0,!1),this.itens.xicara=X,t.add(X);let Y=new Me(this.notaGeo,this.notaMat);Y.castShadow=!0,this.itens.nota=Y,t.add(Y);let it=new St;for(let _=0;_<6;_++){let A=new Me(this.notaGeo,this.notaMat);A.position.y=_*.005,A.rotation.y=(_%3-1)*.08,it.add(A)}En(it,!0,!1),this.itens.maco=it,t.add(it);let $=new St;$t($,K("#B7793A",{r:.4}),.0105,.02,1.45,0,.725,0),$t($,K("#1F2937",{r:.4}),.0205,.021,.35,0,.175,0),$t($,K("#E8F1FF"),.0105,.0105,.02,0,1.455,0),$t($,K("#3B82F6"),.0108,.0108,.008,0,1.468,0),En($,!0,!1),this.itens.taco=$,t.add($);let et=new St;ot(et,K("#111827",{r:.3}),[-.035,-.07,-.005],[.035,.07,.005],.008),this.celTela=Ge(64,128),Bt(new Xe(.062,.126),new We({map:this.celTela.t,toneMapped:!1}),et,0,0,.0055,{cast:!1}),this.itens.celular=et,t.add(et);let V=new St;$t(V,K("#FACC15",{r:.25,m:.9}),.025,.025,.006,0,0,0,{rx:rt/2}),this.itens.moeda=V,t.add(V);let xt=()=>{let _=new St;return $t(_,K("#9CA3AF",{m:.8,r:.3}),.003,.001,.05,0,.025,0),$t(_,K("#1D4ED8"),.006,.006,.08,0,-.04,0),Bt(new Qn(.02,.04,4),K("#FACC15",{ds:!0}),_,0,-.09,0,{rx:rt}),_.scale.setScalar(1.7),_};this.itens.dardo=xt(),t.add(this.itens.dardo);let ct=new St;this.aljavaD=[0,1,2].map(_=>{let A=xt();return A.position.set((_-1)*.018,0,0),A.rotation.z=(_-1)*.12,ct.add(A),A}),this.itens.aljava=ct,t.add(ct),Object.values(this.itens).forEach(_=>{_.visible=!1});let Kt=this.nuvem=new St,vt=K("#94A3B8",{r:1});[[0,0,0,.16],[-.14,-.03,0,.12],[.15,-.02,.02,.13],[.05,.08,0,.12],[-.06,.02,.08,.1]].forEach(([_,A,F,k])=>oe(Kt,vt,k,_,A,F,{cast:!1})),this.gotas=[];for(let _=0;_<8;_++){let A=$t(Kt,r_("#60A5FA",{op:.85}),.006,.006,.07,-.15+_*.043,-.15,(_%3-1)*.05,{cast:!1});this.gotas.push(A)}Kt.visible=!1,t.add(Kt),this.balao=Ge(128,128),this.balaoT="",this.balaoS=new Ri(new di({map:this.balao.t,transparent:!0,depthWrite:!1})),this.balaoS.visible=!1,t.add(this.balaoS);let gt=Ge(128,128);gt.g.strokeStyle="#FFFFFF",gt.g.lineWidth=7,ki(gt.g,6,6,116,116,16),gt.g.stroke(),gt.g.fillStyle="rgba(255,255,255,.14)",gt.g.fill(),this.contornoTex=gt.t;for(let _ in this.moveis){let A=this.moveis[_];A.marca=new Me(new Xe(1,1),new We({map:gt.t,color:"#60A5FA",transparent:!0,depthWrite:!1,toneMapped:!1,opacity:.85})),A.marca.rotation.x=-rt/2,A.marca.visible=!1,A.marca.renderOrder=2,t.add(A.marca),A.outer.traverse(F=>{F.userData.movel=_})}}fazerControle(){let t=new St;ot(t,K("#1F2937",{r:.35}),[-.08,-.015,-.035],[.08,.015,.035],.015);for(let e of[-1,1])oe(t,K("#1F2937",{r:.35}),.035,e*.07,-.005,-.015,{s:[1,.7,1.3]});return oe(t,K("#60A5FA",{e:"#60A5FA",ei:.6}),.009,-.04,.016,0),oe(t,K("#F87171",{e:"#F87171",ei:.6}),.009,.04,.016,0),En(t,!0,!1)}planta(t,e,n,i,r=this.scene){let o=new St;o.position.set(t,e,n),r.add(o);let a=i*.18;$t(o,K("#E7E5E4",{r:.6}),a,a*.8,i*.32,0,i*.16,0),$t(o,K("#57534E",{r:1}),a*.95,a*.95,.01,0,i*.32,0);let l=new St;l.position.y=i*.32,o.add(l);let c=[K("#16A34A",{r:.7,ds:!0}),K("#22C55E",{r:.7,ds:!0}),K("#15803D",{r:.7,ds:!0})],h=9;for(let d=0;d<h;d++){let u=d*se/h+d%2*.3,f=.35+d%3*.2,m=i*(.5+d%4*.1),v=new St;v.rotation.set(0,u,0),l.add(v);let g=new St;g.rotation.x=f,v.add(g),Bt(new ln(m*.5,10,8),c[d%3],g,0,m*.5,0,{s:[.32,1,.1]})}return En(o),(this.plantas||(this.plantas=[])).push(l),o}lugares(){let t=this.nav,e=(a,l)=>this.lugar(a,l),n=a=>{let l=t.perto(a[0],a[1]);return[l[0],l[1],a[2]??0]},i=e("mesa",[7.45,1.95]),r=e("mesa",[6.8,.3]);return{sofaS:e("sofa",[3.2,3,rt]),sofaP:n(e("sofa",[3.2,2.3,rt])),cafeP:n(e("cafe",[.98,4.9,-rt/2])),cadS:e("mesa",[6.8,1.2,rt]),cadP:n(e("mesa",[6.8,1.95,rt])),monP:n([i[0],i[1],mo(i,r)]),ritmo1:n(e("mesa",[5.5,2.35])),ritmo2:n(e("mesa",[7.9,2.45])),polS:e("poltrona",[.92,3.2,rt/4]),polP:n(e("poltrona",[1.36,3.64,rt/4])),janP:n([.62,1.85,-rt/2]),danca:n([3.4,5.25,rt/4]),sinP:this.sinP?n(this.sinP):n([8.5,4.6,-rt/2])}}calibrarTacada(){let t=this.sinuca,e=[7.62,4.52],n=[t.x0+.11,t.z0+.11],i=[n[0]-e[0],n[1]-e[1]],r=Math.hypot(...i),o=[i[0]/r,i[1]/r],a=[e[0]+o[0]*.5,e[1]+o[1]*.5],l=[a[0]-o[0]*.06,a[1]-o[1]*.06],c=[l[0]+o[0]*.1-o[1]*.12,l[1]+o[1]*.1+o[0]*.12];this.bolas={R:e,Y:a,C:l,u:o,fimB:c,pk:n};let h=Math.atan2(o[0],o[1]),d=[o[1],-o[0]],u=[e[0]-o[0]*.9-d[0]*.13,e[1]-o[1]*.9-d[1]*.13];this.tacoBase={tip:[e[0]-o[0]*.035,e[1]-o[1]*.035],u:o,el:.16},this.sinP=this.lugar("sinuca",[u[0],u[1],h])}tacoPontas(t){let e=this.boneco,n=e.root,i=t.taco,r=t.recuo||0,o=(y,b,M)=>this.pto("sinuca",y,b,M),a=[o(8.14,.02,5.1),o(8.11,1.46,4.93)],l=[n.localToWorld(Et(.27,.05,.17)),n.localToWorld(Et(.33,1.5,.25))],c=this.tacoBase,h=Math.cos(c.el),d=Math.sin(c.el),u=this.pto("sinuca",c.tip[0]-c.u[0]*h,.81+d,c.tip[1]-c.u[1]*h).sub(this.pto("sinuca",c.tip[0],.81,c.tip[1])).normalize(),f=this.pto("sinuca",c.tip[0],.812,c.tip[1]).addScaledVector(u,r*.2),m=[f.clone().addScaledVector(u,1.45),f],v,g,p;if(i<=0?(p=le(i+1),v=a[0].clone().lerp(l[0],p),g=a[1].clone().lerp(l[1],p)):(p=le(i),v=l[0].clone().lerp(m[0],p),g=l[1].clone().lerp(m[1],p)),i>0&&i<1){let y=Math.sin(rt*p)*.25;v.y+=y,g.y+=y}return{butt:v,tip:g,ax:u,apoioBridge:this.pto("sinuca",c.tip[0],.8,c.tip[1]).addScaledVector(u,.26).setY(.835)}}aplicarTaco(t){let e=this.tacoPontas(t),n=this.itens.taco;n.visible=!0;let i=e.tip.clone().sub(e.butt),r=i.length()||1;i.divideScalar(r),n.position.copy(e.butt),n.quaternion.setFromUnitVectors(Et(0,1,0),i);let o=t.taco,a=te(o+1),l=mt(.98,.5,te(o)),c=e.butt.clone().addScaledVector(i,l);if(t.ikR=[c.x,c.y,c.z],t.kR=Math.max(t.kR||0,a),o>.02){let h=e.apoioBridge;t.ikL=[h.x,h.y,h.z],t.kL=Math.max(t.kL||0,te(o))}t.item=o>.5?"tacoShot":o>-.5?"tacoV":t.item}teclado(){return{L:this.pto("mesa",6.62,.83,.64),R:this.pto("mesa",6.97,.83,.64)}}mundo(t){return t.getWorldPosition(new B)}alvoCao(){return this.mundo(this.cao.cab).add(Et(0,.05,0))}alvoArcade(){return this.arcMao.map(t=>this.mundo(t))}alvoTouro(){return this.mundo(this.touroCab)}alvoCofre(){return this.mundo(this.cofreMacaneta)}alvoPorco(){return this.mundo(this.porco).add(Et(0,.17,0))}alvoTrofeu(){let t=this.trofeuPai,e=this.trofeuBase;return{L:t.localToWorld(e.clone().add(Et(-.1,.17,0))),R:t.localToWorld(e.clone().add(Et(.1,.17,0)))}}atualizar(t){let e=this.d;this.d=t;let n=t.humor||"tranquilo";this.boneco&&((t.boneco!==e.boneco||t.acessorio!==e.acessorio)&&this.boneco.setAparencia(t.boneco,t.acessorio),this.boneco.setCor(t.cor),t.icone!==e.icone&&this.boneco.setIcone(t.icone)),this.cadAcento&&this.cadAcento.color.set(t.cor||"#2457F5"),this.titulo=t.titulo,this.pctTxt=t.pct==null||!isFinite(t.pct)?"":(t.pct>0?"+":"")+t.pct.toFixed(2).replace(".",",")+"%";let i=Object.fromEntries((e.ativos||[]).map(o=>[o.t,o]));for(let o of t.ativos||[]){let a=i[o.t];a&&a.preco!=null&&o.preco!=null&&Math.abs(a.preco-o.preco)>1e-9&&(this.flash[o.t]={t:performance.now(),up:o.preco>a.preco})}if(e.ativos&&JSON.stringify((e.ativos||[]).map(o=>[o.t,o.preco]))!==JSON.stringify((t.ativos||[]).map(o=>[o.t,o.preco]))&&this.log("cota\xE7\xF5es atualizadas"),!t.sim&&t.pct!=null&&isFinite(t.pct)){let o=this.hist[this.hist.length-1];(!o||Math.abs(o.v-t.pct)>1e-6)&&(this.hist.push({v:t.pct,t:Date.now()}),this.hist.length>60&&this.hist.shift())}if(t.layout!==void 0&&!this.salvando&&!this.arrasto){let o=a=>JSON.stringify({m:a&&a.m||{},off:[...a&&a.off||[]].sort()});o(t.layout)!==o(this.layoutAtual())&&(this.aplicarLayout(t.layout,!0),this.navOk=!1)}this.tem=t.tem||{},this.dir||(this.dir=new Ah(this));let r=this.aplicarDecor(!t.tudo&&!t.sim);n!==this.h&&(this.h&&this.log(t.sim?"simulando: "+(t.titulo||n).toLowerCase():"humor: "+(t.titulo||n).toLowerCase()),this.h=n,this.aplicarHumor(),this.dir.humor(n)),(r||!this.navOk)&&(this.navOk=!0,this.mudouLayout()),this.renderer.domElement.setAttribute("aria-label","Escrit\xF3rio 3D: "+(t.titulo||"")),this.sujo=!0}aplicarDecor(t){let e=!1;for(let n in this.dec){let i=this.dec[n],r=!!this.tem[n]&&!this.off.has(n),o=i.outer||i;o.visible!==r&&(o.visible=r,e=!0,r&&(this.pops[n]=performance.now(),t&&!this.vistos.has(n)&&(this.vistos.add(n),this.salvarVistos(),this.dir&&this.dir.novidade(n))))}return this.dec.cachorro&&(this.cao.g.visible=this.dec.cachorro.outer.visible),e}get pops(){return this._pops||(this._pops={})}lerVistos(){try{return new Set(JSON.parse(localStorage.getItem("radar-esc-vistos")||"[]"))}catch{return new Set}}salvarVistos(){try{localStorage.setItem("radar-esc-vistos",JSON.stringify([...this.vistos]))}catch{}}equipar(t,e){e?this.off.delete(t):this.off.add(t),this.aplicarDecor(!1)&&this.mudouLayout(),this.avisarLayout(),this.log((e?"colocou ":"guardou ")+(this.moveis[t]?this.moveis[t].nome.toLowerCase():t))}avisarLayout(){if(typeof this.d.onLayout=="function"){this.salvando=!0;try{this.d.onLayout(this.layoutAtual())}finally{this.salvando=!1}}}restaurar(){let t=[...this.off];this.aplicarLayout({off:t}),this.avisarLayout(),this.log("restaurou os m\xF3veis")}aplicarHumor(){let t=o_[this.h];this.cfg=t,this.confete.visible=this.h==="euforico";for(let e of this.notas)this.scene.remove(e.m);this.notas=[],this.aplicarLuz()}aplicarLuz(){let t=this.cfg,e=this.noite;this.hemi.intensity=t.hemi*(e?.55:1),this.hemi.color.set(e?"#A9B8E8":"#E3EBFF"),this.key.intensity=t.key*(e?.35:1),this.key.color.set(e?"#9DB0FF":t.keyCor),this.fill.intensity=e?.25:.35;let n=t.lamp||e;this.lampLuz.intensity=n?2.6:0,this.lampHalo.material.opacity=n?.55:0,this.cupula.material.emissiveIntensity=n?1.1:0;let i=t.pend||e;this.pendLuz.intensity=i?2.4:0,this.tvLuz.color.set(t.tv),this.monLuz.color.set(t.mon),this.monHalo.material.color.set(t.mon),this.feixe.material.opacity=e?.06:t.raio,this.feixe.material.color.set(e?"#A5B4FC":"#FFE7A3"),this.renderer.toneMappingExposure=t.exp*(e?.86:1),this.scene.environmentIntensity=e?.14:.32}ligarControles(){let t=this.renderer.domElement,e=null;t.style.touchAction="pan-y";let n=new Jr,i=new _t,r=new yn(Et(0,1,0),0),o=c=>{let h=t.getBoundingClientRect();i.set((c.clientX-h.left)/h.width*2-1,-((c.clientY-h.top)/h.height)*2+1),n.setFromCamera(i,this.cam)},a=c=>{o(c);let h=new B;return n.ray.intersectPlane(r,h)?h:null};t.addEventListener("pointerdown",c=>{if(this.edit){o(c);let h=[];for(let u in this.moveis){let f=this.moveis[u];this.ativo(f)&&h.push(f.outer)}let d=n.intersectObjects(h,!0).find(u=>u.object.userData.movel);if(d){let u=this.moveis[d.object.userData.movel],f=a(c)||d.point;this.arrasto={m:u,ini:[u.x,u.z,u.ri],off:[u.x-f.x,u.z-f.z],moveu:!1,id:c.pointerId,x:c.clientX,y:c.clientY,ok:!0},this.sel=u;try{t.setPointerCapture(c.pointerId)}catch{}c.preventDefault(),this.sujo=!0;return}}e={x:c.clientX,y:c.clientY,az:this.az,el:this.el_,id:c.pointerId,moveu:!1}}),window.addEventListener("pointermove",c=>{let h=this.arrasto;if(h&&c.pointerId===h.id){if(!h.moveu&&Math.hypot(c.clientX-h.x,c.clientY-h.y)>5&&(h.moveu=!0),!h.moveu)return;let f=a(c);if(!f)return;let m=Math.round((f.x+h.off[0])/.05)*.05,v=Math.round((f.z+h.off[1])/.05)*.05;[m,v]=this.prender(h.m,m,v,h.m.ri),h.ok=this.cabe(h.m,m,v,h.m.ri),this.posicionar(h.m,m,v,h.m.ri),this.sujo=!0;return}if(!e||c.pointerId!==e.id)return;let d=c.clientX-e.x,u=c.clientY-e.y;if(!e.moveu&&Math.hypot(d,u)>6){e.moveu=!0;try{t.setPointerCapture(c.pointerId)}catch{}this.camModo!=="sala"&&this.setCam("sala",!0)}e.moveu&&(this.az=te(e.az-d*.006,.12,rt/2-.12),c.pointerType!=="touch"&&(this.el_=te(e.el+u*.004,.22,1)),this.sujo=!0)});let l=c=>{let h=this.arrasto;if(h&&(!c||c.pointerId===h.id)){this.arrasto=null;let d=h.m;if(h.moveu)h.ok?this.log("moveu "+d.nome.toLowerCase()):(this.posicionar(d,...h.ini),this.log("n\xE3o cabe ali"));else{for(let u=1;u<=8;u++){let f=h.ini[2]+u,[m,v]=this.prender(d,d.x,d.z,f);if(this.cabe(d,m,v,f)){this.posicionar(d,m,v,f);break}}this.log("girou "+d.nome.toLowerCase())}this.mudouLayout(),this.avisarLayout(),this.sujo=!0;return}e&&e.moveu&&this.log("girou a c\xE2mera"),e=null};window.addEventListener("pointerup",l),window.addEventListener("pointercancel",l),t.addEventListener("dblclick",()=>{this.edit||(this.az=rt/4,this.el_=.5,this.setCam("sala"))})}setEdicao(t){this.edit=!!t,this.sel=null,this.sujo=!0,this.renderer.domElement.style.cursor=t?"grab":"";for(let e in this.moveis)this.moveis[e].marca.visible=!1;t&&this.camModo!=="sala"&&this.setCam("sala",!0),this.log(t?"arrumando o escrit\xF3rio":"terminou de arrumar")}setCam(t,e){this.camModo=t,this.sujo=!0,e||this.log({sala:"vis\xE3o da sala",tela:"zoom no computador",seguir:"seguindo o boneco"}[t]||t)}alvoCamera(t){let e=this.cam.aspect;if(window.__ofCamOv)return window.__ofCamOv(this,t,Et);if(this.camModo==="tela")return e<1?{pos:this.pto("mesa",7.12,1.2,1.1),alvo:this.pto("mesa",6.8,1.13,.22),fov:70}:{pos:this.pto("mesa",7.2,1.24,1.2),alvo:this.pto("mesa",6.87,1.12,.22),fov:50};if(this.camModo==="seguir"){let h=this.boneco.root.position,d=this.az+.1*Math.sin(t*.2),u=.42,f=e<1?4.6:3.9;return{pos:Et(h.x+Math.sin(d)*Math.cos(u)*f,.95+Math.sin(u)*f,h.z+Math.cos(d)*Math.cos(u)*f),alvo:Et(h.x,.95,h.z),fov:38}}let n=30,i=this.reduz||this.edit?0:Math.sin(t*.15)*.025,r=[this.az.toFixed(3),this.el_.toFixed(3),e.toFixed(3)].join();r!==this.fitKey&&(this.fitKey=r,this.fit=this.enquadrar(this.az,this.el_,n,e));let{dist:o,alvo:a}=this.fit,l=Math.cos(this.el_),c=this.az+i;return{pos:Et(a.x+Math.sin(c)*l*o,a.y+Math.sin(this.el_)*o,a.z+Math.cos(c)*l*o),alvo:a.clone(),fov:n}}laco(){if(this.raf=0,!this.el.isConnected){this.destruir();return}if(document.hidden||this.el.closest(".of-pausa"))this.tAnt=performance.now();else{let e=performance.now(),n=(e-this.tAnt)/1e3,i=Math.min(window.__ofT!=null?.3:.05,n);this.tAnt=e;let r=this.reduz?2:(e-this.t0)/1e3;(!this.reduz||this.sujo)&&this.quadro(r,this.reduz?0:i),this.sujo=!1,this.ms=this.ms==null?16:this.ms*.95+Math.min(n*1e3,100)*.05,this.ms>30&&this.pr>1&&e-(this.tPr||0)>3e3&&(this.tPr=e,this.pr=Math.max(1,this.pr-.25),this.renderer.setPixelRatio(this.pr),this.redimensionar())}this.raf=requestAnimationFrame(this.laco)}emitir(t,e=10,n="#FDE68A"){let i=0;for(let r of this.faiscas)if(!(r.vida<1.1)&&(r.vida=0,r.s.visible=!0,r.s.material.color.set(n),r.s.position.copy(t),r.v=Et((Math.random()-.5)*1.6,1+Math.random()*1.4,(Math.random()-.5)*1.6),++i>=e))break}quadro(t,e){let n=new Date().getHours(),i=window.__ofNoite!=null?!!window.__ofNoite:n<6||n>=19;i!==this.noite&&(this.noite=i,this.aplicarLuz());let r=this.boneco,o=this.dir.passo(window.__ofT!=null?window.__ofT:null,e),a=o.pose,l=o.s||{},c=l.fx||"",h=o.tl,d=o.pose.fxk||0,u=this.posF||(this.posF={x:o.pos[0],z:o.pos[1],y:o.pos[2],vx:0,vz:0,vy:0}),f=(_,A,F,k)=>{let q=_-F,ft=Math.exp(-k*e),Zt=(A+k*q)*e;return[F+(q+Zt)*ft,(A-k*Zt)*ft]},m=u.x,v=u.z,g=u.y;if(e>0&&window.__ofT==null){[u.x,u.vx]=f(u.x,u.vx,o.pos[0],12),[u.z,u.vz]=f(u.z,u.vz,o.pos[1],12);let _=u.y+Fn(u.y,o.pos[2]);[u.y,u.vy]=f(u.y,u.vy,_,11)}else u.x=o.pos[0],u.z=o.pos[1],u.y=o.pos[2];if(e>0&&!a.andando&&(a.sent||0)<.3){let _=Math.hypot(u.x-m,u.z-v)/e,A=Math.abs(Fn(g,u.y))/e,F=te((_-.08)*5+(A-.5)*.9);if(this.passoK=mt(this.passoK||0,F,Math.min(1,e*8)),this.passoF=(this.passoF||0)+e*(2.2+_*4+A*.8)*this.passoK,this.passoK>.02){let k=Math.sin(this.passoF*rt),q=this.passoK;a={...a,lL:[a.lL[0]+.28*Math.max(0,k)*q,a.lL[1]+.55*Math.max(0,k)*q],lR:[a.lR[0]+.28*Math.max(0,-k)*q,a.lR[1]+.55*Math.max(0,-k)*q],alt:a.alt-.012*Math.abs(k)*q}}}this.decidirProps(l,o.k,h);let p=Object.keys(this.prop).find(_=>["R","LR","joga"].includes(this.prop[_].h)),y=Object.keys(this.prop).find(_=>["L","LR"].includes(this.prop[_].h)),b=this.mundo(r.head),M=Et(Math.sin(u.y),0,Math.cos(u.y)),w=[],S=(_,A,F)=>{let k=A.clone().sub(b);Math.abs(Fn(u.y,Math.atan2(k.x,k.z)))<1.5&&k.length()>.5&&w.push({nome:_,pos:A,peso:F})};if(S("tv",Et(3.2,1.5,.12),1),S("janela",Et(-.6,1.7,1.8),.9),S("relogio",Et(5.25,2.35,.05),.5),S("camera",this.cam.position.clone(),this.h==="triste"?.4:1.2),S("monitor",this.pto("mesa",6.8,1.14,.22),.6),this.cao.g.visible&&S("cao",this.mundo(this.cao.cab),1.3),a=this.vida.passo({...a,item:p?a.item||p:a.item},{T:t,dt:e,humor:this.h,reduz:this.reduz,cabeca:b,yawCorpo:u.y,alvos:w,foco:l.foco?l.foco(this):null,nariz:b.clone().addScaledVector(M,.15*r.esc).add(Et(0,-.02,0)),ocupado:!!l.ocupado||a.taco>-.9,ocupadoL:!!y,facePropria:!!o.pose._fp,legsLivres:a.alt>.86&&Math.abs(a.lL[0])<.25&&Math.abs(a.lR[0])<.25&&!l.semPeso}),a=this.filtro.passo(a,e),r.root.position.set(u.x,0,u.z),r.root.rotation.y=u.y+(a.yawAdd||0),r.root.updateMatrixWorld(!0),a.taco>-.98&&this.h==="feliz")a={...a},this.aplicarTaco(a);else{let _=this.tacoPontas({taco:-1}),A=_.tip.clone().sub(_.butt).normalize(),F=this.itens.taco;F.visible=!0,F.position.copy(_.butt),F.quaternion.setFromUnitVectors(Et(0,1,0),A)}let x=Object.keys(this.prop).find(_=>["R","LR","joga"].includes(this.prop[_].h)),E=Object.keys(this.prop).find(_=>this.prop[_].h==="L");["tecla","tacoV","tacoShot"].includes(a.item)||(a.item=x==="joga"?"":x||""),E&&(a.mL=Math.max(a.mL||0,.9)),r.aplicar(a,t,e),r.desenharRosto(this.vida.rosto(a,{T:t,dt:e,humor:this.h,facePropria:!!o.pose._fp}),t),r.blob.position.set(u.x,.004,u.z),r.blob.material.opacity=te(1-(a.dy||0)*2,.3,1),this.moverProps(a,h,d,e),this.itens.celular.visible&&this.desenharCel(t);let R=this.bolas,I=.81,N=this.h==="feliz"&&a.bolas||"ini";if(N==="ini")this.bB.position.set(R.R[0],I,R.R[1]),this.bA.position.set(R.Y[0],I,R.Y[1]),this.bA.visible=!0,this.bA.scale.setScalar(1);else if(N==="jogo"){let _=Qt(h,xi,xi+.28),A=Qt(h,xi+.28,xi+1),F=Qt(h,xi+1,xi+1.15),k=A>0?[mt(R.C[0],R.fimB[0],hs(A)),mt(R.C[1],R.fimB[1],hs(A))]:[mt(R.R[0],R.C[0],_),mt(R.R[1],R.C[1],_)];this.bB.position.set(k[0],I,k[1]),this.bA.position.set(mt(R.Y[0],R.pk[0],hs(A)),I-.06*F,mt(R.Y[1],R.pk[1],hs(A))),this.bA.scale.setScalar(1-.6*F),this.bA.visible=F<1,this.bA.rotation.x+=e*20*(A>0&&A<1?1:0)}else if(N==="volta"){let _=Qt(h,.3,1.9),A=Qt(_,0,.18),F=le(Qt(_,.15,1));this.bB.position.set(mt(R.fimB[0],R.R[0],le(Qt(h,.2,1.5))),I,mt(R.fimB[1],R.R[1],le(Qt(h,.2,1.5)))),this.bA.visible=_>0,this.bA.scale.setScalar(mt(.4,1,A)),this.bA.position.set(mt(R.pk[0],R.Y[0],F),I-.06*(1-A),mt(R.pk[1],R.Y[1],F)),this.bA.rotation.x-=e*12*(F>0&&F<1?1:0)}else this.bB.position.set(R.fimB[0],I,R.fimB[1]),this.bA.visible=!1;if(this.cao.g.visible){let _,A,F=[Math.sin(u.y),Math.cos(u.y)];if(c==="caoVem"||c==="caoCarinho"){let q=[u.x+F[0]*.55,u.z+F[1]*.55];_=[q[0],q[1],mo(q,[u.x,u.z])],A=c==="caoCarinho"?"carinho":"senta"}else{let q={triste:"dorme",preocupado:"senta",tranquilo:"dorme",feliz:"senta",euforico:"pula"}[this.h];if(q==="dorme")_=this.lugar("cachorro",[1.35,6.2,.8]),A="dorme";else{let ft=this.caoPerto||[u.x,u.z];_=[ft[0],ft[1],mo(ft,[u.x,u.z])],A=q}}let k=this.cao.mover(_,e,this.nav);if(this.cao.g.position.set(this.cao.pos[0],0,this.cao.pos[1]),this.cao.g.rotation.y=this.cao.yaw,this.cao.quadro(k?A:"anda",t),!this.caoT||t-this.caoT>4){this.caoT=t;let q=[Math.cos(u.y),-Math.sin(u.y)],ft=[[.75,.35],[-.75,.35],[.8,-.3],[-.8,-.3]];for(let[Zt,Q]of ft){let ut=u.x+q[0]*Zt+F[0]*Q,dt=u.z+q[1]*Zt+F[1]*Q;if(this.nav.livre(ut,dt)){this.caoPerto=[ut,dt];break}}}}let U=c==="racao"&&h>1&&h<4.2;if(this.dec.aquario.outer.visible){this.racao.forEach((A,F)=>{let k=U?((h-1)*.55+F/14)%1:0;A.visible=U,A.position.set(.25+mi(F)*.2,1.24-k*.42,6.65+mi(F+5)*.35)});let _=this.peixeSobe=mt(this.peixeSobe||0,U?1:0,Math.min(1,e*1.5));this.peixes.forEach((A,F)=>{let k=t*(.5+F*.12)+F*1.7;A.position.set(.35+Math.sin(k*1.3)*.15*(1-_*.6),mt(.95+F*.06+Math.sin(k*2)*.03,1.15+Math.sin(k*4)*.02,_),6.83+Math.cos(k)*.32*(1-_*.5)),A.rotation.y=Math.atan2(-Math.sin(k)*.32,Math.cos(k*1.3)*.2)+rt}),this.bolhas.forEach((A,F)=>{let k=(t*.4+F/6)%1;A.position.set(.45+Math.sin(t*3+F)*.02,.8+k*.42,7.1-F*.02)})}let D=c==="arcade";if(this.dec.fliperama.outer.visible&&(this.joy.rotation.set(D?Math.sin(t*9)*.35:0,0,D?Math.sin(t*7.3)*.35:0),this.botoesArc.forEach((_,A)=>{_.position.y=1.07-(D&&Math.sin(t*13+A*2)>.6?.008:0)})),this.dec.cofre.outer.visible){let _=c==="cofre"||c==="moedaJoga"?a.porta:0;this.cofrePorta.rotation.y=-_,this.cofreBrilho.material.opacity=te(_/1.9)*.85}if(c==="porco"){let _=this.alvoPorco();h>1.15&&this.fxId!==l.t0&&(this.fxId=l.t0,this.emitir(_,8,"#FDE68A"));let A=h>1.15?Math.sin((h-1.15)*30)*Math.exp(-(h-1.15)*4):0;this.porco.scale.set(1+A*.12,1-A*.12,1+A*.12)}else this.porco.scale.setScalar(1);let O=c==="trofeu"||c==="trofeuPega"&&d>.92||c==="trofeuSolta"&&d<.85;if(this.dec.trofeu.outer.visible){let _=this.trofeuObj;if(O){let A=r.mL.clone().add(r.mR).multiplyScalar(.5).add(Et(0,-.15,0));_.position.copy(this.trofeuPai.worldToLocal(A)),_.rotation.y=r.root.rotation.y-this.dec.trofeu.outer.rotation.y}else _.position.copy(this.trofeuBase),_.rotation.y=0}if(this.dec.dardos.visible){if(c==="dardo"&&d<.01&&h<.15&&(this.dardos.forEach(_=>{_.visible=!1}),this.voos=[]),c==="dardo"&&d%1>.4){let _=Math.floor(d),A=l.t0+":"+_;this.dardoKey!==A&&_<3&&(this.dardoKey=A,(this.voos||(this.voos=[])).push({i:_,de:r.mR.clone(),t:0}))}for(let _ of this.voos||[]){_.t+=e;let A=te(_.t/.32),F=Et(...this.dardosAlvo[_.i]),k=_.de.clone().lerp(F,A);k.y+=Math.sin(rt*A)*.18;let q=this.dardos[_.i];q.visible=!0,q.position.copy(k),q.rotation.set(0,0,-rt/2+(1-A)*.4)}}else this.dardos.forEach(_=>{_.visible=!1});let X=this.dec.globo.visible&&(this.h==="euforico"||c==="globo");for(let _ of this.spots)_.intensity=X?9:0;this.dec.globo.visible&&(this.globo.rotation.y=t*.8,this.spots.forEach((_,A)=>{let F=t*.9+A*se/4;_.target.position.set(3.4+Math.cos(F)*2.2,0,5+Math.sin(F)*1.8)}));let Y=performance.now();for(let _ in this.pops){let A=(Y-this.pops[_])/900,F=this.dec[_],k=F.outer||F;if(A>=1||!k.visible){k.scale.setScalar(1),delete this.pops[_];continue}let q=1+Math.sin(A*rt*2.5)*Math.exp(-A*4)*.35;k.scale.setScalar(Math.max(.01,A<.25?hs(A/.25)*q:q)),(!this.popFx||this.popFx!==_+this.pops[_])&&(this.popFx=_+this.pops[_],this.emitir(this.mundo(k).add(Et(0,.6,0)),14))}if(c==="novidade"&&this.fxId!=="n"+l.t0&&h>.2){this.fxId="n"+l.t0;let _=this.mundo(r.head);this.emitir(_.add(Et(0,.35,0)),12,"#FACC15")}for(let _ of this.faiscas){if(_.vida>=1.1)continue;_.vida+=e,_.v.y-=2.4*e,_.s.position.addScaledVector(_.v,e);let A=_.vida/1.1;_.s.material.opacity=1-A,_.s.scale.setScalar(.09*(1-A*.5)),_.s.material.rotation+=e*3,_.vida>=1.1&&(_.s.visible=!1)}let it=this.mundo(r.head);if(this.nuvem.visible=a.nuvem>.5,this.nuvem.visible&&(this.nuvem.position.set(it.x,it.y+.75+Math.sin(t*1.6)*.03,it.z),this.gotas.forEach((_,A)=>{let F=(t*1.8+A*.37)%1;_.position.y=-.12-F*.4,_.material.opacity=.9*(1-F)})),this.balaoS.visible=a.balao>.05,this.balaoS.visible){if(a.balaoT!==this.balaoT){this.balaoT=a.balaoT;let{g:_,t:A}=this.balao;_.clearRect(0,0,128,128),_.fillStyle="#FFF",_.strokeStyle="#CBD5E1",_.lineWidth=3,ki(_,8,8,112,86,22),_.fill(),_.stroke(),_.beginPath(),_.moveTo(40,92),_.lineTo(34,120),_.lineTo(62,93),_.fill(),window.RI&&window.RI.desenhar(_,a.balaoT,64,51,60,a.balaoT==="chart-line-down"?"#DC2626":a.balaoT==="smiley-nervous"?"#F59E0B":"#7C3AED"),A.needsUpdate=!0}this.balaoS.position.set(it.x+.25,it.y+.6,it.z),this.balaoS.scale.setScalar(.42*a.balao),this.balaoS.material.opacity=a.balao}if(a.solta&&a.solta!==this.ultSolta){this.ultSolta=a.solta;for(let _=0;_<4;_++){let A=new Me(this.notaGeo,this.notaMat);A.castShadow=!0,A.position.copy(r.mR),this.scene.add(A);let F=Et(Math.sin(u.y),0,Math.cos(u.y));this.notas.push({m:A,v:Et(F.x*.6+(Math.random()-.5)*1.2,2.2+Math.random()*1.2,F.z*.6+(Math.random()-.5)*1.2),rv:Et(Math.random()*6,Math.random()*6,Math.random()*6),vida:0})}}a.solta||(this.ultSolta=0);for(let _=this.notas.length-1;_>=0;_--){let A=this.notas[_];A.vida+=e,A.m.position.y>.01?(A.v.y-=4.5*e,A.v.multiplyScalar(.985),A.m.position.addScaledVector(A.v,e),A.m.rotation.x+=A.rv.x*e,A.m.rotation.y+=A.rv.y*e,A.m.rotation.z+=A.rv.z*e,A.v.y<-.6&&(A.v.y=-.6+Math.sin(A.vida*9)*.25)):(A.m.position.y=.006,A.m.rotation.set(0,A.m.rotation.y,0)),A.vida>6&&(this.scene.remove(A.m),this.notas.splice(_,1))}let $=new Date,et=$.getSeconds()+$.getMilliseconds()/1e3,V=$.getMinutes()+et/60,xt=$.getHours()%12+V/60;this.pS.rotation.z=-et/60*se,this.pM.rotation.z=-V/60*se,this.pH.rotation.z=-xt/12*se,(this.plantas||[]).forEach((_,A)=>{_.rotation.z=Math.sin(t*.8+A)*.03,_.rotation.x=Math.sin(t*.6+A*2)*.02}),this.vapor.forEach((_,A)=>{let F=(t*.35+A/4)%1;_.position.set(.38+Math.sin(t*2+A)*.02,1+F*.4,4.9),_.material.opacity=.35*Math.sin(rt*F),_.scale.setScalar(.06+F*.12)});let ct=a.item==="tecla";if(this.teclas.material.emissiveIntensity=ct?.4+.3*Math.abs(Math.sin(t*14)):.25,this.monLuz.intensity=1+.25*Math.sin(t*2.2)+(performance.now()-(this.ultimaAcao||0)<900?.8:0),this.dec.neon.visible){let _=Math.sin(t*7)>.97||Math.sin(t*23)>.995;this.neonM.opacity=_?.35:1,this.neonHalo.material.opacity=_?.1:.35}if(this.dec.arcoiris.visible&&(this.arcoHalo.material.opacity=.25+(this.dir.itemAtual==="arcoiris"?.25*Math.abs(Math.sin(t*4)):0)),this.decPorquinho.visible&&c!=="porco"&&(this.porco.position.y=.775+Math.abs(Math.sin(t*1.6))*.012),this.confete.visible){let _=this.dummy||(this.dummy=new Ce);this.confData.forEach((A,F)=>{let k=Ze-(t*A.v+A.y0)%(Ze+.3);_.position.set(A.x+Math.sin(t*1.5+A.sw)*.2,k,A.z+Math.cos(t*1.2+A.sw)*.15),_.rotation.set(t*A.rv+A.r,t*A.rv*.7,A.r),_.updateMatrix(),this.confete.setMatrixAt(F,_.matrix)}),this.confete.instanceMatrix.needsUpdate=!0}let Kt=this.camModo==="tela";if((this.reduz||t-(this.tMon||-9)>(Kt?1/30:1/8)||this.sujo)&&(this.tMon=t,this.desenharMonitor(t)),(this.reduz||t-(this.tTv||-9)>1/15)&&(this.tTv=t,this.desenharTV(t,this.h==="tranquilo"?"jogo":"news")),(this.reduz||t-(this.tCeu||-9)>1/8)&&(this.tCeu=t,this.desenharCeu(t)),this.dec.fliperama.outer.visible&&(this.reduz||t-(this.tArc||-9)>(D?1/20:1/6))&&(this.tArc=t,this.desenharArcade(t*(D?2:1))),this.edit)for(let _ in this.moveis){let A=this.moveis[_],F=A.marca;if(F.visible=this.ativo(A),!F.visible)continue;let k=this.caixasDe(A)[0];F.position.set(k.c[0],.02+(A.piso?0:.005),k.c[1]),F.rotation.set(-rt/2,0,k.r),F.scale.set(k.h[0]*2+.08,k.h[1]*2+.08,1);let q=this.arrasto&&this.arrasto.m===A;F.material.color.set(q&&!this.arrasto.ok?"#EF4444":q||this.sel===A?"#22C55E":"#60A5FA"),F.material.opacity=q||this.sel===A?1:.55}let vt=this.alvoCamera(t);(!this.camAtual||this.reduz)&&(this.camAtual={pos:vt.pos.clone(),alvo:vt.alvo.clone(),fov:vt.fov});let gt=window.__ofT!=null?1:1-Math.exp(-e*4);this.camAtual.pos.lerp(vt.pos,gt),this.camAtual.alvo.lerp(vt.alvo,gt),this.camAtual.fov=mt(this.camAtual.fov,vt.fov,gt),this.cam.position.copy(this.camAtual.pos),this.cam.lookAt(this.camAtual.alvo),Math.abs(this.cam.fov-this.camAtual.fov)>.01&&(this.cam.fov=this.camAtual.fov,this.cam.updateProjectionMatrix()),this.renderer.render(this.scene,this.cam)}get prop(){if(!this._prop){this._prop={};for(let t of["controle","xicara","celular","moeda","nota","maco","dardo","aljava"])this._prop[t]={h:"casa",t0:-1,dur:0,de:null}}return this._prop}casaDe(t){let e=n=>new Ve().setFromAxisAngle(Et(0,1,0),n);return t==="controle"?{pos:this.pto("sofa",2.72,.555,2.92),quat:e(this.giro(this.moveis.sofa)+.5)}:t==="xicara"?{pos:this.pto("cafe",.43,.92,5.06),quat:e(this.giro(this.moveis.cafe)-rt/2)}:null}bico(){return this.pto("cafe",.4,.99,4.9)}botaoCafe(){return this.pto("cafe",.36,1.3,4.97)}bolso(t="R"){return this.boneco.root.localToWorld(Et(t==="R"?.17:-.17,.84,.05))}decidirProps(t,e,n){let i=t&&t.props;if(i)for(let r in i){let o=this.prop[r];if(!o)continue;let a=typeof i[r]=="function"?i[r](e,n):i[r];a&&a!==o.h&&(o.h=a,o.troca=!0)}}guardarProps(){for(let t in this.prop)this.prop[t].h!=="casa"&&(this.prop[t].h="casa",this.prop[t].troca=!0)}alvoProp(t,e,n,i,r){let o=this.boneco,a=o.root.rotation.y,l=new Ve().setFromAxisAngle(Et(0,1,0),a),c=m=>{let v=m==="L"?o.L.hand:o.R.hand,g=new B,p=new Ve,y=new B;return v.matrixWorld.decompose(g,p,y),{pos:(m==="L"?o.mL:o.mR).clone(),quat:p}},h=(m,v,g)=>{let p=c(m),y=p.pos.add(Et(...v).applyQuaternion(p.quat)),b=g?l.clone().multiply(g):p.quat;return{pos:y,quat:b,vis:!0}},d=m=>new Ve().setFromAxisAngle(Et(1,0,0),m),u=m=>new Ve().setFromAxisAngle(Et(0,1,0),m);if(e==="casa"){let m=this.casaDe(t);return m?{...m,vis:!0}:{pos:this.bolso(t==="maco"||t==="aljava"?"L":"R"),quat:l,vis:!1}}if(t==="controle"){let m=o.mL.clone().add(o.mR).multiplyScalar(.5).add(Et(0,.01,0)),v=o.mL.distanceTo(o.mR),g=h("R",[0,0,.03],d(-.5)),p=e==="LR"?le((v-.2)/.16):1;return{pos:m.lerp(g.pos,p),quat:l.clone().multiply(d(-.5)),vis:!0}}if(e==="joga"){let m=c("R"),v=te(r);return m.pos.y+=.02+4*v*(1-v)*.55,{pos:m.pos,quat:l.clone().multiply(d(v*6*rt)),vis:!0}}if(e==="cofrinho"){let m=c("R"),v=this.alvoPorco(),g=Qt(i,.9,1.15);return{pos:m.pos.lerp(v,g),quat:l,vis:g<1}}let f=e==="L"?"L":"R";return t==="xicara"?h(f,[0,-.045,.06],d(-(n.gole||0)*1.25)):t==="celular"?h(f,[0,.035,.03],u(rt).multiply(d(-.45))):t==="dardo"?h(f,[0,-.01,.03],d(-rt/2+.25)):t==="aljava"?h(f,[0,-.01,.035],d(-rt/2+.3)):t==="nota"||t==="maco"?h(f,[0,-.02,.035],d(1.2)):h(f,[0,-.01,.025],null)}moverProps(t,e,n,i){let r=performance.now()/1e3;for(let a in this.prop){let l=this.prop[a],c=this.itens[a];if(!c)continue;let h=this.alvoProp(a,l.h,t,e,n);if(l.troca){l.troca=!1;let u={pos:c.position.clone(),quat:c.quaternion.clone(),vis:c.visible};c.visible||(u.pos=h.pos.clone(),u.quat=h.quat.clone()),l.de=u,l.t0=r,l.dur=te(.12+u.pos.distanceTo(h.pos)*.3,.12,.6)}h.vis||(l.de=null);let d=l.de&&l.dur?te((r-l.t0)/l.dur):1;if((i===0||!this.propsProntos)&&(d=1),d<1){let u=le(d),f=l.de.pos.distanceTo(h.pos);c.position.copy(l.de.pos).lerp(h.pos,u),c.position.y+=Math.sin(rt*u)*Math.min(.15,f*.25),c.quaternion.copy(l.de.quat).slerp(h.quat,u),c.visible=l.de.vis||h.vis}else c.position.copy(h.pos),c.quaternion.copy(h.quat),c.visible=h.vis,l.de=null}this.propsProntos=!0;let o=(this.voos||[]).length+(this.prop.dardo.h==="R"?1:0);this.aljavaD.forEach((a,l)=>{a.visible=l<3-o})}desenharCel(t){if(t-(this.tCel||-9)<.2)return;this.tCel=t;let{g:e,t:n}=this.celTela;e.fillStyle="#0B1220",e.fillRect(0,0,64,128),e.fillStyle="#FB923C",e.font="bold 16px system-ui",e.fillText("\u20BF",6,20),e.strokeStyle="#4ADE80",e.lineWidth=3,e.beginPath();for(let i=0;i<10;i++){let r=4+i*6,o=100-i*6-Math.sin(i+t*3)*6;i?e.lineTo(r,o):e.moveTo(r,o)}e.stroke(),n.needsUpdate=!0}destruir(){cancelAnimationFrame(this.raf),this.ro&&this.ro.disconnect(),this.renderer.dispose()}desenharPiso({g:t}){t.fillStyle="#C8915B",t.fillRect(0,0,1024,1024);let e=["#C8915B","#BF8752","#D29C66","#C38C56","#B88050","#CD9760"],n=7,i=()=>(n=n*16807%2147483647,n/2147483647),r=1024/8;for(let o=0;o<8;o++){let a=-i()*400;for(;a<1024;){let l=260+i()*300;t.fillStyle=e[Math.floor(i()*e.length)],t.fillRect(a,o*r,l,r),t.strokeStyle="rgba(90,50,20,.10)",t.lineWidth=1.2;for(let c=0;c<7;c++){let h=o*r+8+i()*(r-16);t.beginPath(),t.moveTo(a,h),t.bezierCurveTo(a+l*.3,h+(i()-.5)*8,a+l*.6,h+(i()-.5)*8,a+l,h+(i()-.5)*4),t.stroke()}t.fillStyle="rgba(70,35,10,.45)",t.fillRect(a,o*r,2,r),a+=l}t.fillStyle="rgba(70,35,10,.5)",t.fillRect(0,o*r,1024,2.5)}}desenharTapete({g:t}){t.fillStyle="#C7D2FE",t.fillRect(0,0,512,512),t.strokeStyle="#A5B4FC",t.lineWidth=10,ki(t,22,22,468,468,24),t.stroke(),t.setLineDash([16,12]),t.lineWidth=4,t.strokeStyle="#818CF8",ki(t,44,44,424,424,18),t.stroke(),t.setLineDash([]);for(let e=0;e<2600;e++)t.fillStyle=`rgba(99,102,241,${Math.random()*.06})`,t.fillRect(Math.random()*512,Math.random()*512,2,2)}desenharQuadro({g:t}){let e=t.createLinearGradient(0,0,0,192);e.addColorStop(0,"#1E3A8A"),e.addColorStop(1,"#0F172A"),t.fillStyle=e,t.fillRect(0,0,256,192),t.strokeStyle="#22C55E",t.lineWidth=6,t.lineJoin="round",t.beginPath(),[[20,150],[60,130],[95,140],[130,95],[165,105],[200,60],[236,40]].forEach(([n,i],r)=>r?t.lineTo(n,i):t.moveTo(n,i)),t.stroke(),t.fillStyle="#FACC15",t.beginPath(),t.arc(236,40,8,0,se),t.fill(),t.fillStyle="rgba(255,255,255,.85)",t.font="bold 20px system-ui",t.fillText("LONGO PRAZO",20,34)}desenharCeu(t){let{g:e,t:n}=this.ceu,i=this.h,r=this.noite,o=i==="triste"||i==="preocupado",a=r?o?"#1E293B":"#0B1026":i==="triste"?"#64748B":i==="preocupado"?"#7C93B5":"#4FA3FF",l=r?o?"#334155":"#312E81":i==="triste"?"#94A3B8":i==="preocupado"?"#B6C4D8":"#BFE3FF",c=e.createLinearGradient(0,0,0,256);if(c.addColorStop(0,a),c.addColorStop(1,l),e.fillStyle=c,e.fillRect(0,0,256,256),r&&!o){for(let f=0;f<40;f++){let m=.5+.5*Math.sin(t*2+f*7);e.fillStyle=`rgba(255,255,255,${.3+.6*m})`,e.fillRect(f*97%256,f*53%150,2,2)}e.fillStyle="#FEF3C7",e.beginPath(),e.arc(190,52,20,0,se),e.fill(),e.fillStyle=a,e.beginPath(),e.arc(200,46,18,0,se),e.fill()}else if(!o){e.save(),e.translate(195,60),e.rotate(t*.2),e.fillStyle="#FDE047";for(let f=0;f<10;f++)e.rotate(se/10),e.fillRect(-2,26,4,12);e.restore(),e.fillStyle="#FDE047",e.beginPath(),e.arc(195,60,22,0,se),e.fill()}let h=(f,m,v,g)=>{e.fillStyle=g,e.beginPath(),e.ellipse(f,m,34*v,14*v,0,0,se),e.ellipse(f+18*v,m-10*v,22*v,16*v,0,0,se),e.ellipse(f-16*v,m-6*v,18*v,13*v,0,0,se),e.fill()},d=o?r?"#475569":"#CBD5E1":r?"rgba(148,163,184,.35)":"#FFFFFF";if(h(t*8%360-50,70,1,d),h((t*5+180)%360-50,110,.75,d),o&&h((t*6+90)%360-50,40,1.2,d),[[0,150,40],[36,120,30],[62,165,44],[100,105,34],[130,140,40],[166,90,30],[192,150,36],[224,125,40]].forEach(([f,m,v],g)=>{e.fillStyle=r?"#111827":o?"#475569":"#64748B",e.fillRect(f,m,v,256-m);for(let p=m+8;p<240;p+=14)for(let y=f+5;y<f+v-6;y+=10){let b=r?(y*7+p*13+g)%5<2:!1;e.fillStyle=b?"#FDE68A":r?"#1F2937":"rgba(255,255,255,.28)",e.fillRect(y,p,5,7)}}),e.fillStyle=r?"#0F172A":o?"#3F5F4F":"#4ADE80",e.fillRect(0,238,256,18),o){e.strokeStyle="rgba(224,242,254,.75)",e.lineWidth=2;for(let f=0;f<36;f++){let m=(f*37+t*40)%280-12,v=(f*71+t*420)%280-20;e.beginPath(),e.moveTo(m,v),e.lineTo(m-6,v+16),e.stroke()}}n.needsUpdate=!0}desenharTV(t,e){let{g:n,t:i}=this.tv,r=512,o=288;if(e==="jogo"){let a=n.createLinearGradient(0,0,0,o);a.addColorStop(0,"#1E1B4B"),a.addColorStop(1,"#4338CA"),n.fillStyle=a,n.fillRect(0,0,r,o);for(let f=0;f<30;f++)n.fillStyle="rgba(255,255,255,.7)",n.fillRect((f*83-t*10)%r+(f*83-t*10<0?r:0),f*37%160,2,2);let l=t*120%64;n.fillStyle="#16A34A",n.fillRect(0,232,r,56),n.fillStyle="#22C55E";for(let f=-l;f<r;f+=64)n.fillRect(f,232,32,8);let c=[[200,170],[380,140],[560,180]];n.fillStyle="#A16207",c.forEach(([f,m])=>{let v=((f-t*120)%600+600)%600-80;n.fillRect(v,m,80,14),n.fillStyle="#FACC15",n.beginPath(),n.arc(v+40,m-20+Math.sin(t*6)*3,8,0,se),n.fill(),n.fillStyle="#A16207"});let d=196-Math.abs(Math.sin(t*3.2))*70;n.fillStyle="#EF4444",n.fillRect(110,d,26,36),n.fillStyle="#1D4ED8",n.fillRect(110,d+22,26,14),n.fillStyle="#F1C19A",n.fillRect(114,d-14,18,16);let u=((420-t*160)%560+560)%560-40;n.fillStyle="#7C2D12",n.beginPath(),n.ellipse(u,220,18,12,0,rt,0),n.fill(),n.fillRect(u-18,220,36,12),n.fillStyle="#FFF",n.font="bold 20px monospace",n.fillText("MOEDAS \xD7 "+String(Math.floor(t*2)%1e3).padStart(3,"0"),16,30),n.fillText("1-1",450,30)}else{let a=this.h==="feliz"||this.h==="euforico",l=a?"#22C55E":"#EF4444";n.fillStyle="#0B1220",n.fillRect(0,0,r,o),n.strokeStyle="rgba(148,163,184,.15)",n.lineWidth=1;for(let m=60;m<230;m+=34)n.beginPath(),n.moveTo(0,m),n.lineTo(r,m),n.stroke();let c=t*.25%1.4,h=46;n.strokeStyle=l,n.lineWidth=4,n.lineJoin="round",n.beginPath();for(let m=0;m<=Math.min(h,Math.floor(h*c));m++){let v=20+m*(r-40)/h,p=(a?200-m*2.6:90+m*2.6)+Math.sin(m*1.7)*10+Math.sin(m*.6)*12;m?n.lineTo(v,p):n.moveTo(v,p)}n.stroke(),n.fillStyle="#DC2626",n.fillRect(0,0,150,40),n.fillStyle="#FFF",n.font="bold 22px system-ui",n.fillText("RADAR NEWS",12,28),Math.floor(t*1.5)%2&&(n.fillStyle="#FFF",n.beginPath(),n.arc(170,20,6,0,se),n.fill()),n.font="bold 14px system-ui",n.fillText("AO VIVO",182,25);let d={feliz:"CARTEIRA NO VERDE",euforico:"DIA HIST\xD3RICO NA CARTEIRA!",preocupado:"MERCADO NO VERMELHO",triste:"QUEDA FORTE HOJE"}[this.h]||"MERCADO HOJE";n.fillStyle="rgba(15,23,42,.92)",n.fillRect(0,224,r,30),n.fillStyle=l,n.fillRect(0,224,8,30),n.fillStyle="#FFF",n.font="bold 18px system-ui",n.fillText(d+(this.pctTxt?"  "+this.pctTxt:""),18,245),n.fillStyle="#1E293B",n.fillRect(0,254,r,34),n.font="bold 16px monospace";let u=this.fita(),f=-(t*60%Math.max(1,u.w));for(n.save(),n.beginPath(),n.rect(0,254,r,34),n.clip();f<r;){for(let m of u.itens)n.fillStyle="#CBD5E1",n.fillText(m.t,f,277),f+=n.measureText(m.t).width+8,n.fillStyle=m.v>=0?"#4ADE80":"#F87171",n.fillText(m.s,f,277),f+=n.measureText(m.s).width+26;if(!u.itens.length)break}n.restore()}i.needsUpdate=!0}fita(){let t=(this.d.ativos||[]).filter(n=>n.vd!=null),e=t.length?t.map(n=>({t:n.t,v:n.vd,s:(n.vd>=0?"\u25B2":"\u25BC")+Math.abs(n.vd).toFixed(2).replace(".",",")+"%"})):[{t:"IBOV",v:0,s:"\u2014"}];return{itens:e,w:e.length*160}}desenharArcade(t){let{g:e,t:n}=this.arcade;e.fillStyle="#0B0B1A",e.fillRect(0,0,128,128);for(let i=0;i<5;i++){let r=(i*30+t*40)%140-10;e.fillStyle=["#F43F5E","#22C55E","#FACC15","#38BDF8","#A855F7"][i],e.fillRect(r,20+i*14,10,8)}e.fillStyle="#22C55E",e.fillRect(56+Math.sin(t*3)*30,108,16,8),Math.floor(t*4)%2&&(e.fillStyle="#FFF",e.fillRect(64+Math.sin(t*3)*30,90-t*120%80,2,8)),e.fillStyle="#FDE047",e.font="bold 12px monospace",e.fillText("HI "+String(Math.floor(t*37)%99999).padStart(5,"0"),8,12),n.needsUpdate=!0}desenharMonitor(t){let{g:e,t:n}=this.mon,i=1024,r=448,o=this.d,a=this.h,l={triste:"#EF4444",preocupado:"#F97316",tranquilo:"#60A5FA",feliz:"#22C55E",euforico:"#FACC15"}[a],c=e.createLinearGradient(0,0,0,r);c.addColorStop(0,"#0B1220"),c.addColorStop(1,"#111A2E"),e.fillStyle=c,e.fillRect(0,0,i,r),e.fillStyle="#0F172A",e.fillRect(0,0,i,40),e.fillStyle=l,e.beginPath(),e.arc(22,20,7,0,se),e.fill(),e.fillStyle="#E2E8F0",e.font="bold 18px system-ui",e.fillText("RADAR DA CARTEIRA",38,27);let d=new Date().toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit",second:"2-digit"});e.font="bold 18px monospace",e.textAlign="right",e.fillText(d,i-16,27),o.fechado?(e.fillStyle="#64748B",e.font="bold 13px system-ui",e.fillText("BOLSA FECHADA",i-120,26)):o.sim&&(e.fillStyle="#F59E0B",e.font="bold 13px system-ui",e.fillText("SIMULA\xC7\xC3O",i-120,26)),e.textAlign="left",this.secao&&(e.fillStyle="#94A3B8",e.font="15px system-ui",window.RI&&window.RI.desenhar(e,"map-pin",268,21,15,"#94A3B8"),e.fillText(this.secao,278,26));let u=16,f=54;e.fillStyle="rgba(30,41,59,.65)",ki(e,u,f,330,340,14),e.fill(),e.fillStyle="#94A3B8",e.font="bold 14px system-ui",e.fillText("SEU DIA",u+16,f+28);let m=o.pct,v=m==null||!isFinite(m)?"\u2014":(m>0?"+":"")+m.toFixed(2).replace(".",",")+"%";e.fillStyle=m>0?"#4ADE80":m<0?"#F87171":"#E2E8F0",e.font="bold 64px system-ui",e.fillText(v,u+14,f+98),e.fillStyle="#CBD5E1",e.font="16px system-ui",e.fillText(this.titulo||"",u+16,f+126);let g=u+16,p=f+150,y=298,b=160;e.strokeStyle="rgba(148,163,184,.15)",e.lineWidth=1;for(let _=0;_<=4;_++)e.beginPath(),e.moveTo(g,p+_*b/4),e.lineTo(g+y,p+_*b/4),e.stroke();let M=this.hist.length?this.hist:[{v:m||0}],w=M.map(_=>_.v).concat([0]),S=Math.min(...w),P=Math.max(...w);if(P-S<.4){let _=(P+S)/2;S=_-.2,P=_+.2}let x=_=>p+b-(_-S)/(P-S)*b;e.setLineDash([4,4]),e.strokeStyle="rgba(148,163,184,.4)",e.beginPath(),e.moveTo(g,x(0)),e.lineTo(g+y,x(0)),e.stroke(),e.setLineDash([]);let E=M.length,R=M.map((_,A)=>[g+(E===1?y:A/(E-1)*y),x(_.v)]);E===1&&R.unshift([g,R[0][1]]);let I=(m||0)>=0?"#22C55E":"#EF4444",N=e.createLinearGradient(0,p,0,p+b);N.addColorStop(0,I+"55"),N.addColorStop(1,I+"00"),e.beginPath(),R.forEach(([_,A],F)=>F?e.lineTo(_,A):e.moveTo(_,A)),e.lineTo(R[R.length-1][0],p+b),e.lineTo(R[0][0],p+b),e.closePath(),e.fillStyle=N,e.fill(),e.strokeStyle=I,e.lineWidth=3,e.lineJoin="round",e.beginPath(),R.forEach(([_,A],F)=>F?e.lineTo(_,A):e.moveTo(_,A)),e.stroke();let U=R[R.length-1],D=t*1.5%1;e.fillStyle=I,e.beginPath(),e.arc(U[0],U[1],5,0,se),e.fill(),e.strokeStyle=I,e.globalAlpha=1-D,e.lineWidth=2,e.beginPath(),e.arc(U[0],U[1],5+D*14,0,se),e.stroke(),e.globalAlpha=1;let O=362,X=54,Y=330;e.fillStyle="rgba(30,41,59,.65)",ki(e,O,X,Y,340,14),e.fill(),e.fillStyle="#94A3B8",e.font="bold 14px system-ui",e.fillText("SEUS ATIVOS \xB7 AO VIVO",O+16,X+28);let it=(o.ativos||[]).slice(0,8);it.length||(e.fillStyle="#64748B",e.font="16px system-ui",e.fillText("Adicione ativos para",O+16,X+80),e.fillText("acompanhar aqui.",O+16,X+102));let $=performance.now();it.forEach((_,A)=>{let F=X+48+A*36,k=this.flash[_.t];if(k&&$-k.t<2500){let ft=1-($-k.t)/2500;e.fillStyle=(k.up?"rgba(34,197,94,":"rgba(239,68,68,")+(.35*ft).toFixed(3)+")",ki(e,O+8,F,Y-16,32,8),e.fill()}e.fillStyle="#E2E8F0",e.font="bold 17px monospace",e.fillText(_.t,O+16,F+22),e.fillStyle="#94A3B8",e.font="15px monospace",e.textAlign="right",_.preco!=null&&e.fillText((_.moeda==="USD"?"US$ ":"R$ ")+_.preco.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),O+214,F+22);let q=_.vd;e.fillStyle=q==null?"#64748B":q>=0?"#4ADE80":"#F87171",e.font="bold 16px monospace",e.fillText(q==null?"\u2014":(q>=0?"\u25B2 ":"\u25BC ")+Math.abs(q).toFixed(2).replace(".",",")+"%",O+Y-16,F+22),e.textAlign="left"});let et=708,V=54,xt=300;e.fillStyle="rgba(30,41,59,.65)",ki(e,et,V,xt,340,14),e.fill(),e.fillStyle="#94A3B8",e.font="bold 14px system-ui",e.fillText("O QUE VOC\xCA EST\xC1 FAZENDO",et+16,V+28);let ct=this.feed.slice(-8);ct.forEach((_,A)=>{let F=V+58+A*34,k=A===ct.length-1,q=$-_.ms,ft=_.txt;k&&q<700&&(ft=ft.slice(0,Math.max(1,Math.floor(ft.length*q/700)))),e.fillStyle="#64748B",e.font="13px monospace",e.fillText(_.hora,et+16,F),e.fillStyle=k?l:"#CBD5E1",e.font=(k?"bold ":"")+"15px system-ui",e.fillText("\u203A "+ft+(k&&Math.floor(t*2.5)%2?" \u258D":""),et+66,F)}),ct.length||(e.fillStyle="#64748B",e.font="15px system-ui",e.fillText("\u203A aguardando voc\xEA\u2026"+(Math.floor(t*2)%2?" \u258D":""),et+16,V+60)),e.fillStyle="#020617",e.fillRect(0,408,i,40),e.font="bold 17px monospace";let Kt=this.fita(),vt=-(t*70%4e3);e.save(),e.beginPath(),e.rect(0,408,i,40),e.clip();let gt=0;for(;vt<i&&gt++<60;)for(let _ of Kt.itens)e.fillStyle="#CBD5E1",e.fillText(_.t,vt,434),vt+=e.measureText(_.t).width+8,e.fillStyle=_.v>=0?"#4ADE80":"#F87171",e.fillText(_.s,vt,434),vt+=e.measureText(_.s).width+30;e.restore(),n.needsUpdate=!0}log(t){let e=new Date().toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}),n=this.feed[this.feed.length-1];n&&n.txt===t&&performance.now()-n.ms<1500||(this.feed.push({txt:t.length>26?t.slice(0,25)+"\u2026":t,hora:e,ms:performance.now()}),this.feed.length>30&&this.feed.shift(),this.ultimaAcao=performance.now(),this.sujo=!0)}redimensionar(){let t=this.el.clientWidth||600,e=Math.round(te(t<640?t*.82:t*.6,300,660));this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height=e+"px",this.cam.aspect=t/e,this.cam.updateProjectionMatrix(),this.sujo=!0}enquadrar(t,e,n,i){let r=new He(n,i,.1,100),o=Math.cos(e),a=Et(Math.sin(t)*o,Math.sin(e),Math.cos(t)*o),l=[];for(let f of[-.25,je+.1])for(let m of[-.3,Ze+.05])for(let v of[-.25,Qe+.1])l.push(Et(f,m,v));let c=Et(je/2,.9,Qe/2),h=18,d=i<1?.98:.95,u=i<1?.92:.93;for(let f=0;f<4;f++){let m=4,v=60;for(let E=0;E<22;E++){let R=(m+v)/2;r.position.copy(c).addScaledVector(a,R),r.lookAt(c),r.updateMatrixWorld(),r.updateProjectionMatrix();let I=!0;for(let N of l){let U=N.clone().project(r);if(Math.abs(U.x)>d||Math.abs(U.y)>u){I=!1;break}}I?v=R:m=R}h=v,r.position.copy(c).addScaledVector(a,h),r.lookAt(c),r.updateMatrixWorld();let g=9,p=-9,y=9,b=-9;for(let E of l){let R=E.clone().project(r);g=Math.min(g,R.x),p=Math.max(p,R.x),y=Math.min(y,R.y),b=Math.max(b,R.y)}let M=(g+p)/2,w=(y+b)/2,S=Math.tan(n*rt/360)*h,P=new B,x=new B;r.matrixWorld.extractBasis(P,x,new B),c.addScaledVector(P,M*S*i).addScaledVector(x,w*S)}return{dist:h,alvo:c}}},Ah=class{constructor(t){this.e=t,this.t=0,this.fila=[],this.ant=null,this.entrar=!0,this.ciclo=0,this.novos=[],this.rodada=0,this.itemAtual=""}humor(t){this.h=t,this.entrar=!0}replanejar(){this.entrar=!0}novidade(t){fo[t]&&!this.novos.includes(t)&&(this.novos.push(t),this.e.reduz||(this.entrar=!0))}rotina(){return(Yd[this.h]||Yd.tranquilo)(this.L,this.e,this.ciclo)}compilar(t,e,n,i={}){let r=this.e.nav,o=e.slice(),a=n,l=[];for(let c of t)if(c.tipo==="andar"){let h=[[o[0],o[1]]];for(let g of c.destinos)h.push(...r.caminho(h[h.length-1],g));let d=[],u=0;for(let g=1;g<h.length;g++){let p=Math.hypot(h[g][0]-h[g-1][0],h[g][1]-h[g-1][1]);p>.001&&(d.push({a:h[g-1],b:h[g],d0:u,L:p,yaw:mo(h[g-1],h[g])}),u+=p)}if(!d.length||u<.06)continue;let f=Fn(o[2],d[0].yaw);if(Math.abs(f)>.7){let g=.25+Math.abs(f)/3.2,p=[o[0],o[1],o[2]+f];l.push({tipo:"acao",dur:g,pose:(y,b,M)=>Ht(M,{nod:.05}),t0:a,de:o.slice(),ate:p,item:c.item,taco:c.taco,bolas:c.bolas,...i}),a+=g,o=p}let m=u/c.vel,v=h[h.length-1];l.push({...c,...i,t0:a,dur:m,segs:d,dist:u,de:o.slice()}),o=[v[0],v[1],o[2]+Fn(o[2],d[d.length-1].yaw)],a+=m}else{let h=c.ate?c.ate.slice():o.slice();h.length<3&&(h[2]=o[2]),h[2]=o[2]+Fn(o[2],h[2]),l.push({...c,...i,t0:a,de:o.slice(),ate:h}),o=h,a+=c.dur}return{out:l,pos:o,t:a}}fimFila(){let t=this.fila[this.fila.length-1];return t?{t:t.t0+t.dur,pos:t.tipo==="andar"?(()=>{let e=t.segs[t.segs.length-1];return[e.b[0],e.b[1],t.de[2]+Fn(t.de[2],e.yaw)]})():t.ate}:null}disponiveis(){let t=this.e,e=[];for(let n in fo){let i=t.dec[n];i&&(i.outer?i.outer.visible:i.visible)&&fo[n].humores.includes(this.h)&&e.push(n)}return e}visita(t,e,n){let i=this.e,r=fo[t],o=r.lugar(i),a=i.nav.perto(o[0],o[1]),l=[a[0],a[1],o[2]],c=[Ln(1.15,[l]),Ft(.5,(h,d,u)=>Ht(u),{ate:l})];return e&&c.push(...y_(r.ic+":f")),c.push(...r.passos(i)),c.push(Ln(1.15,[n.aprox])),n.sentado||n.entrada.length?c.push(...n.entrada):c.push(Ft(.5,(h,d,u)=>Ht(u),{ate:n.inicio})),c}proximoNovo(){for(;this.novos.length;){let t=this.novos.shift(),e=this.e.dec[t];if(fo[t]&&e&&(e.outer?e.outer.visible:e.visible))return t}return null}encher(){let t=this.e;if(this.entrar){this.entrar=!1,this.L=t.lugares();let c=this.rotina();this.padrao=c.padrao;let h=t.posF?[t.posF.x,t.posF.z,t.posF.y]:c.inicio.slice(),d=this.ultimaPose?{...this.ultimaPose}:null,u=this.proximoNovo(),f=d||Ht(0);this.fila=[],this.ant=null;let m=d&&d.sent>.4,v=Math.hypot(h[0]-c.inicio[0],h[1]-c.inicio[1])<.08;if(!u&&(!d||m&&v&&c.sentado)){this.ciclo=0,this.aprox=c.aprox,this.anexar(this.compilar(c.passos,c.inicio,this.t));return}let g=[];if(m){let p=this.aprox||h;g.push(Ft(1.2,(y,b,M)=>{let w=us(f,Ht(M),le(y));return w.lean+=.4*Math.sin(rt*y),w},{ate:t.nav.perto(p[0],p[1]).concat([h[2]])}))}else g.push(Ft(.35,(p,y,b)=>us(f,Ht(b),le(p))));t.guardarProps(),u?(g.push(...this.visita(u,!0,c)),this.itemNovo=u):(g.push(Ln(1.15,[c.aprox])),c.entrada.length?g.push(...c.entrada):g.push(Ft(.5,(p,y,b)=>Ht(b),{ate:c.inicio}))),this.aprox=c.aprox,this.anexar(this.compilar(g,h,this.t,u?{item_:u}:{}));return}let e=this.fimFila(),n=e?e.pos:this.rotina().inicio,i=e?e.t:this.t,r=this.rotina();this.aprox=r.aprox,this.padrao=r.padrao;let o=this.disponiveis(),a=this.proximoNovo(),l=!!a;if(!a&&this.ciclo>0&&o.length&&!this.e.reduz&&this.ultimoBloco!=="item"&&(a=o[this.rodada%o.length],this.rodada++),a){let c=[];c.push(...r.saida),c.push(...this.visita(a,l,r)),this.anexar(this.compilar(c,n,i,{item_:a})),this.ultimoBloco="item";return}this.ultimoBloco="rotina",this.anexar(this.compilar(r.passos,r.inicio,i)),this.ciclo++}anexar(t){this.fila.push(...t.out)}avaliarPasso(t,e,n){let i,r;if(t.tipo==="andar"){let a=te(e/t.dur)*t.dist,l=t.segs.length-1;for(let m=0;m<t.segs.length;m++)if(a<=t.segs[m].d0+t.segs[m].L){l=m;break}let c=t.segs[l],h=te((a-c.d0)/c.L),d=c.yaw,u=t.segs[l+1],f=t.segs[l-1];u&&c.L*(1-h)<.35&&(d=po(c.yaw,u.yaw,.5*(1-c.L*(1-h)/.35))),f&&c.L*h<.35&&(d=po(f.yaw,c.yaw,.5+.5*(c.L*h/.35))),r=[mt(c.a[0],c.b[0],h),mt(c.a[1],c.b[1],h),t.de[2]+Fn(t.de[2],d)],i=m_(a,t.estilo,n,this.e.boneco.esc),t.pensativo&&(i.aR=[1.25,-.25,2.25],i.aL=[.6,-.35,1.5],i.nod+=.18,i.boca="foco",i.sob="tenso"),t.item==="xicara"&&(i.aR=[.6,-.25,1.75]),t.taco!=null&&(i.taco=t.taco),i.item=t.item||"",t.bolas&&(i.bolas=t.bolas)}else{let a=te(e/t.dur),l=le(a);r=[mt(t.de[0],t.ate[0],l),mt(t.de[1],t.ate[1],l),mt(t.de[2],t.ate[2],l)],i=t.pose(a,e,n),t.item&&!i.item&&(i.item=t.item),t.bolas&&!i.bolas&&(i.bolas=t.bolas),t.taco!=null&&i.taco===Dn.taco&&(i.taco=t.taco)}i._fp=["aberta","o","sorriso","triste"].includes(i.boca)||i.olhos==="F"||i.olhos==="Z"||i.sob==="triste";let o=this.padrao||{};for(let a in o)(!(a in i)||i[a]===Dn[a])&&(i[a]=o[a]);return{pose:i,pos:r}}passo(t,e){let n=this.e;t!=null?(this.tForcado==null&&(this.tForcado=0),this.t=t):this.t+=n.reduz?0:e,this.entrar&&this.encher();let i=0;for(;(!this.fila.length||this.fimFila().t<this.t+2)&&i++<40;)this.encher();for(;this.fila.length>1&&this.t>=this.fila[0].t0+this.fila[0].dur;)this.ant=this.fila.shift(),n.decidirProps(this.ant,1,this.ant.dur);let r=this.fila[0];if(!r)return{pose:Ht(this.t),pos:[4.5,3.5,0],s:null,tl:0};let o=this.t,a=Math.min(o-r.t0,r.dur),l=this.avaliarPasso(r,a,o),c=.45;if(this.ant&&a<c){let h=this.avaliarPasso(this.ant,this.ant.dur,o),d=le(a/c);l.pose=us(h.pose,l.pose,d),l.pos=[mt(h.pos[0],l.pos[0],d),mt(h.pos[1],l.pos[1],d),h.pos[2]+Fn(h.pos[2],l.pos[2])*d]}return this.itemAtual=r.item_||"",this.ultimaPose=l.pose,l.s=r,l.tl=a,l.k=r.dur?te(a/r.dur):1,l}};function Iy(s,t){let e=new lo({antialias:!0,alpha:!0,powerPreference:"low-power"});e.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),e.outputColorSpace=tn,e.toneMapping=js,e.shadowMap.enabled=!0,e.shadowMap.type=Di,s.innerHTML="",s.appendChild(e.domElement);let n=new Ti,i=new rs(e);n.environment=i.fromScene(new ho,.04).texture,n.environmentIntensity=.38,n.add(new Zs("#FFFFFF","#C9B79C",1));let r=new Fi("#FFF1DE",2);r.position.set(1.6,3.2,2.4),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-1,right:1,top:2.2,bottom:-.2,near:.5,far:8}),n.add(r);let o=new Fi("#C7D7FF",.7);o.position.set(-2,1.5,-1.5),n.add(o);let a=new Me(new Ji(.75,48),new Wr({opacity:.22}));a.rotation.x=-rt/2,a.receiveShadow=!0,n.add(a);let l=new Cl(t.cor,t.icone,t.boneco,t.acessorio);n.add(l.root),l.root.traverse(E=>{E.isMesh&&(E.castShadow=!0)});let c=new He(24,3/4,.1,20),h=new Pl,d=new Il,u=-.35,f=!1,m=0,v=0,g=0,p=!1,y=performance.now(),b=y,M=()=>{let E=s.clientWidth||200,R=s.clientHeight||260;e.setSize(E,R,!1),c.aspect=E/R,c.updateProjectionMatrix()};M();let w=new ResizeObserver(M);w.observe(s);let S=e.domElement;S.style.touchAction="pan-y",S.addEventListener("pointerdown",E=>{f=!0,m=E.clientX;try{S.setPointerCapture(E.pointerId)}catch{}v=performance.now()}),S.addEventListener("pointermove",E=>{f&&(u+=(E.clientX-m)*.012,m=E.clientX,v=performance.now())}),S.addEventListener("pointerup",()=>{f=!1}),S.addEventListener("pointercancel",()=>{f=!1});function P(){if(g=0,p)return;if(!s.isConnected){x();return}let E=performance.now(),R=window.__ofVitT!=null?window.__ofVitT:(E-y)/1e3,I=Math.min(.05,(E-b)/1e3);b=E,!f&&E-v>2500&&(u+=I*.35);let N=R%12,U;if(N<3.5)U=Ht(R,{olhar:[Math.sin(R*.7)*.6,0]});else if(N<6){let Y=kt(N,3.5,6,.4);U=Ht(R,{aR:[mt(0,2.6,Y),mt(.12,.5,Y),mt(.2,.9+.35*Math.sin(R*9),Y)],boca:Y>.5?"sorriso":"leve",olhos:Y>.5?"F":"A",boch:.4*Y,nod:-.05*Y,roll:.06*Y})}else if(N<8.5){let Y=kt(N,6,8.5,.4);U=Ht(R,{aL:[mt(0,1.2,Y),mt(.12,-.2,Y),mt(.2,1.4,Y)],mL:Y,boca:"sorriso",boch:.3,turn:.12*Y,nod:-.04*Y})}else U=Ht(R,{boca:"sorriso",olhos:"A",boch:.25,turn:.15*Math.sin(R*1.2)});l.root.rotation.y=u;let D=l.head.getWorldPosition(new B);U=d.passo(U,{T:R,dt:I,humor:"feliz",cabeca:D,yawCorpo:u,alvos:[{nome:"camera",pos:c.position.clone(),peso:2},{nome:"lado",pos:Et(Math.sin(u+1)*3,1.4,Math.cos(u+1)*3),peso:1}],legsLivres:!0,nariz:D.clone().add(Et(Math.sin(u)*.15,-.02,Math.cos(u)*.15))}),U=h.passo(U,I),l.aplicar(U,R,I),l.desenharRosto(d.rosto(U,{T:R,dt:I,humor:"feliz",facePropria:N>=3.5&&N<6}),R);let O=l.esc,X=window.__ofVitCam;X?(c.position.set(0,X[0],X[1]),c.lookAt(0,X[2],0)):(c.position.set(0,1*O,4.2*(.6+.4*O)),c.lookAt(0,.9*O,0)),e.render(n,c),g=requestAnimationFrame(P)}function x(){p||(p=!0,g&&cancelAnimationFrame(g),w.disconnect(),n.traverse(E=>{E.geometry&&E.geometry.dispose()}),e.dispose(),e.domElement.parentNode&&e.domElement.remove())}return g=requestAnimationFrame(P),{atualizar(E){l.setAparencia(E.boneco,E.acessorio),l.setCor(E.cor),E.icone!==t.icone&&l.setIcone(E.icone),t=E},destruir:x}}export{Py as criar,Iy as vitrine};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
