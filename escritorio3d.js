var pu=0,Mc=1,mu=2;var Di=1,gu=2,$s=3,Hn=0,nn=1,gn=2,ei=0,pi=1,Ni=2,bc=3,Sc=4,xu=5;var es=100,_u=101,vu=102,yu=103,Mu=104,bu=200,Su=201,Eu=202,Tu=203,Ec=204,Tc=205,wu=206,Au=207,Ru=208,Cu=209,Pu=210,Iu=211,Lu=212,Fu=213,Du=214,qo=0,Yo=1,Zo=2,Ls=3,Jo=4,$o=5,Ko=6,jo=7,Aa=0,Nu=1,Uu=2,Gn=0,wc=1,Ac=2,Rc=3,Ks=4,Cc=5,Pc=6,Ic=7;var Lc=300,Ui=301,ns=302,Ra=303,Ca=304,Jr=306,Fs=1e3,Jn=1001,Qo=1002,$e=1003,Bu=1004;var $r=1005;var en=1006,Pa=1007;var Bi=1008;var xn=1009,Fc=1010,Dc=1011,js=1012,Ia=1013,Vn=1014,Pn=1015,Wn=1016,La=1017,Fa=1018,Qs=1020,Nc=35902,Uc=35899,Bc=1021,Oc=1022,In=1023,$n=1026,Oi=1027,Da=1028,Na=1029,zi=1030,Ua=1031;var Ba=1033,Kr=33776,jr=33777,Qr=33778,to=33779,Oa=35840,za=35841,ka=35842,Ha=35843,Ga=36196,Va=37492,Wa=37496,Xa=37488,qa=37489,eo=37490,Ya=37491,Za=37808,Ja=37809,$a=37810,Ka=37811,ja=37812,Qa=37813,tl=37814,el=37815,nl=37816,il=37817,sl=37818,rl=37819,ol=37820,al=37821,ll=36492,cl=36494,hl=36495,ul=36283,dl=36284,no=36285,fl=36286;var vr=2300,ta=2301,Wo=2302,ac=2303,lc=2400,cc=2401,hc=2402;var Ou=3200;var io=0,zu=1,mi="",tn="srgb",yr="srgb-linear",Mr="linear",Te="srgb";var Xo=7680;var ku=519,Hu=512,Gu=513,Vu=514,pl=515,Wu=516,Xu=517,ml=518,qu=519,zc=35044;var kc="300 es",zn=2e3,Ds=2001;function Jd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function $d(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function br(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yu(){let s=br("canvas");return s.style.display="block",s}var Nh={},Ns=null;function Sr(...s){let t="THREE."+s.shift();Ns?Ns("log",t,...s):console.log(t,...s)}function Zu(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function te(...s){s=Zu(s);let t="THREE."+s.shift();if(Ns)Ns("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Qt(...s){s=Zu(s);let t="THREE."+s.shift();if(Ns)Ns("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Yi(...s){let t=s.join(" ");t in Nh||(Nh[t]=!0,te(...s))}function Ju(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var $u={[qo]:Yo,[Zo]:Ko,[Jo]:jo,[Ls]:$o,[Yo]:qo,[Ko]:Zo,[jo]:Jo,[$o]:Ls},Kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Dl=Math.PI/180,Er=180/Math.PI;function ui(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[s&255]+rn[s>>8&255]+rn[s>>16&255]+rn[s>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function fe(s,t,e){return Math.max(t,Math.min(e,s))}function Kd(s,t){return(s%t+t)%t}function Nl(s,t,e){return(1-e)*s+e*t}function Zn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ae(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var qc=class qc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qc.prototype.isVector2=!0;var xt=qc,Ve=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],d=n[i+3],h=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(d!==_||c!==h||l!==f||u!==m){let g=c*h+l*f+u*m+d*_;g<0&&(h=-h,f=-f,m=-m,_=-_,g=-g);let p=1-a;if(g<.9995){let y=Math.acos(g),w=Math.sin(y);p=Math.sin(p*y)/w,a=Math.sin(a*y)/w,c=c*p+h*a,l=l*p+f*a,u=u*p+m*a,d=d*p+_*a}else{c=c*p+h*a,l=l*p+f*a,u=u*p+m*a,d=d*p+_*a;let y=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=y,l*=y,u*=y,d*=y}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],d=r[o],h=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+u*d+c*f-l*h,t[e+1]=c*m+u*h+l*d-a*f,t[e+2]=l*m+u*f+a*h-c*d,t[e+3]=u*m-a*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),d=a(r/2),h=c(n/2),f=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*f*m,this._y=l*f*d-h*u*m,this._z=l*u*m+h*f*d,this._w=l*u*d-h*f*m;break;case"YXZ":this._x=h*u*d+l*f*m,this._y=l*f*d-h*u*m,this._z=l*u*m-h*f*d,this._w=l*u*d+h*f*m;break;case"ZXY":this._x=h*u*d-l*f*m,this._y=l*f*d+h*u*m,this._z=l*u*m+h*f*d,this._w=l*u*d-h*f*m;break;case"ZYX":this._x=h*u*d-l*f*m,this._y=l*f*d+h*u*m,this._z=l*u*m-h*f*d,this._w=l*u*d+h*f*m;break;case"YZX":this._x=h*u*d+l*f*m,this._y=l*f*d+h*u*m,this._z=l*u*m-h*f*d,this._w=l*u*d-h*f*m;break;case"XZY":this._x=h*u*d-l*f*m,this._y=l*f*d-h*u*m,this._z=l*u*m+h*f*d,this._w=l*u*d+h*f*m;break;default:te("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Yc=class Yc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),u=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=i+c*d+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ul.copy(this).projectOnVector(t),this.sub(Ul)}reflect(t){return this.sub(Ul.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yc.prototype.isVector3=!0;var U=Yc,Ul=new U,Uh=new Ve,Zc=class Zc{constructor(t,e,n,i,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],y=i[1],w=i[4],v=i[7],M=i[2],S=i[5],C=i[8];return r[0]=o*_+a*y+c*M,r[3]=o*g+a*w+c*S,r[6]=o*p+a*v+c*C,r[1]=l*_+u*y+d*M,r[4]=l*g+u*w+d*S,r[7]=l*p+u*v+d*C,r[2]=h*_+f*y+m*M,r[5]=h*g+f*w+m*S,r[8]=h*p+f*v+m*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,h=a*c-u*r,f=l*r-o*c,m=e*d+n*h+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=d*_,t[1]=(i*l-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=h*_,t[4]=(u*e-i*c)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Yi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bl.makeScale(t,e)),this}rotate(t){return Yi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bl.makeRotation(-t)),this}translate(t,e){return Yi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Zc.prototype.isMatrix3=!0;var re=Zc,Bl=new re,Bh=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oh=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jd(){let s={enabled:!0,workingColorSpace:yr,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Te&&(i.r=di(i.r),i.g=di(i.g),i.b=di(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Te&&(i.r=Is(i.r),i.g=Is(i.g),i.b=Is(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===mi?Mr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Yi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Yi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[yr]:{primaries:t,whitePoint:n,transfer:Mr,toXYZ:Bh,fromXYZ:Oh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:t,whitePoint:n,transfer:Te,toXYZ:Bh,fromXYZ:Oh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),s}var xe=jd();function di(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Is(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var fs,ea=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{fs===void 0&&(fs=br("canvas")),fs.width=t.width,fs.height=t.height;let i=fs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=fs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=br("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=di(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Qd=0,Us=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=ui(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ol(i[o].image)):r.push(Ol(i[o]))}else r=Ol(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ol(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ea.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(te("Texture: Unable to serialize Texture."),{})}var tf=0,zl=new U,dn=class s extends Kn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Jn,i=Jn,r=en,o=Bi,a=In,c=xn,l=s.DEFAULT_ANISOTROPY,u=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=ui(),this.name="",this.source=new Us(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zl).x}get height(){return this.source.getSize(zl).y}get depth(){return this.source.getSize(zl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){te(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){te(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fs:t.x=t.x-Math.floor(t.x);break;case Jn:t.x=t.x<0?0:1;break;case Qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fs:t.y=t.y-Math.floor(t.y);break;case Jn:t.y=t.y<0?0:1;break;case Qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Lc;dn.DEFAULT_ANISOTROPY=1;var Jc=class Jc{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(l+1)/2,v=(f+1)/2,M=(p+1)/2,S=(u+h)/4,C=(d+_)/4,x=(m+g)/4;return w>v&&w>M?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=S/n,r=C/n):v>M?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=S/i,r=x/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=C/r,i=x/r),this.set(n,i,r,e),this}let y=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(d-_)/y,this.z=(h-u)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jc.prototype.isVector4=!0;var De=Jc,na=class extends Kn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new dn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Us(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends na{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Tr=class extends dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ia=class extends dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var wa=class wa{constructor(t,e,n,i,r,o,a,c,l,u,d,h,f,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,u,d,h,f,m,_,g)}set(t,e,n,i,r,o,a,c,l,u,d,h,f,m,_,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/ps.setFromMatrixColumn(t,0).length(),r=1/ps.setFromMatrixColumn(t,1).length(),o=1/ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=o*u,f=o*d,m=a*u,_=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+m*l,e[5]=h-_*l,e[9]=-a*c,e[2]=_-h*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){let h=c*u,f=c*d,m=l*u,_=l*d;e[0]=h+_*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-m,e[6]=_+h*a,e[10]=o*c}else if(t.order==="ZXY"){let h=c*u,f=c*d,m=l*u,_=l*d;e[0]=h-_*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let h=o*u,f=o*d,m=a*u,_=a*d;e[0]=c*u,e[4]=m*l-f,e[8]=h*l+_,e[1]=c*d,e[5]=_*l+h,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let h=o*c,f=o*l,m=a*c,_=a*l;e[0]=c*u,e[4]=_-h*d,e[8]=m*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*d+m,e[10]=h-_*d}else if(t.order==="XZY"){let h=o*c,f=o*l,m=a*c,_=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+_,e[5]=o*u,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*u,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ef,t,nf)}lookAt(t,e,n){let i=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Mi.crossVectors(n,_n),Mi.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Mi.crossVectors(n,_n)),Mi.normalize(),vo.crossVectors(_n,Mi),i[0]=Mi.x,i[4]=vo.x,i[8]=_n.x,i[1]=Mi.y,i[5]=vo.y,i[9]=_n.y,i[2]=Mi.z,i[6]=vo.z,i[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],y=n[3],w=n[7],v=n[11],M=n[15],S=i[0],C=i[4],x=i[8],T=i[12],R=i[1],L=i[5],N=i[9],O=i[13],D=i[2],B=i[6],Y=i[10],W=i[14],ut=i[3],$=i[7],st=i[11],I=i[15];return r[0]=o*S+a*R+c*D+l*ut,r[4]=o*C+a*L+c*B+l*$,r[8]=o*x+a*N+c*Y+l*st,r[12]=o*T+a*O+c*W+l*I,r[1]=u*S+d*R+h*D+f*ut,r[5]=u*C+d*L+h*B+f*$,r[9]=u*x+d*N+h*Y+f*st,r[13]=u*T+d*O+h*W+f*I,r[2]=m*S+_*R+g*D+p*ut,r[6]=m*C+_*L+g*B+p*$,r[10]=m*x+_*N+g*Y+p*st,r[14]=m*T+_*O+g*W+p*I,r[3]=y*S+w*R+v*D+M*ut,r[7]=y*C+w*L+v*B+M*$,r[11]=y*x+w*N+v*Y+M*st,r[15]=y*T+w*O+v*W+M*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15],y=c*f-l*h,w=a*f-l*d,v=a*h-c*d,M=o*f-l*u,S=o*h-c*u,C=o*d-a*u;return e*(_*y-g*w+p*v)-n*(m*y-g*M+p*S)+i*(m*w-_*M+p*C)-r*(m*v-_*S+g*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-n*(r*u-a*c)+i*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],y=e*a-n*o,w=e*c-i*o,v=e*l-r*o,M=n*c-i*a,S=n*l-r*a,C=i*l-r*c,x=u*_-d*m,T=u*g-h*m,R=u*p-f*m,L=d*g-h*_,N=d*p-f*_,O=h*p-f*g,D=y*O-w*N+v*L+M*R-S*T+C*x;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/D;return t[0]=(a*O-c*N+l*L)*B,t[1]=(i*N-n*O-r*L)*B,t[2]=(_*C-g*S+p*M)*B,t[3]=(h*S-d*C-f*M)*B,t[4]=(c*R-o*O-l*T)*B,t[5]=(e*O-i*R+r*T)*B,t[6]=(g*v-m*C-p*w)*B,t[7]=(u*C-h*v+f*w)*B,t[8]=(o*N-a*R+l*x)*B,t[9]=(n*R-e*N-r*x)*B,t[10]=(m*S-_*v+p*y)*B,t[11]=(d*v-u*S-f*y)*B,t[12]=(a*T-o*L-c*x)*B,t[13]=(e*L-n*T+i*x)*B,t[14]=(_*w-m*M-g*y)*B,t[15]=(u*M-d*w+h*y)*B,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,d=a+a,h=r*l,f=r*u,m=r*d,_=o*u,g=o*d,p=a*d,y=c*l,w=c*u,v=c*d,M=n.x,S=n.y,C=n.z;return i[0]=(1-(_+p))*M,i[1]=(f+v)*M,i[2]=(m-w)*M,i[3]=0,i[4]=(f-v)*S,i[5]=(1-(h+p))*S,i[6]=(g+y)*S,i[7]=0,i[8]=(m+w)*C,i[9]=(g-y)*C,i[10]=(1-(h+_))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ps.set(i[0],i[1],i[2]).length(),a=ps.set(i[4],i[5],i[6]).length(),c=ps.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Un.copy(this);let l=1/o,u=1/a,d=1/c;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=d,Un.elements[9]*=d,Un.elements[10]*=d,e.setFromRotationMatrix(Un),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,i,r,o,a=zn,c=!1){let l=this.elements,u=2*r/(e-t),d=2*r/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i),m,_;if(c)m=r/(o-r),_=o*r/(o-r);else if(a===zn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ds)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=zn,c=!1){let l=this.elements,u=2/(e-t),d=2/(n-i),h=-(e+t)/(e-t),f=-(n+i)/(n-i),m,_;if(c)m=1/(o-r),_=o/(o-r);else if(a===zn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===Ds)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};wa.prototype.isMatrix4=!0;var _e=wa,ps=new U,Un=new _e,ef=new U(0,0,0),nf=new U(1,1,1),Mi=new U,vo=new U,_n=new U,zh=new _e,kh=new Ve,Cn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-fe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:te("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kh.setFromEuler(this),this.setFromQuaternion(kh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cn.DEFAULT_ORDER="XYZ";var Bs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},sf=0,Hh=new U,ms=new Ve,ri=new _e,yo=new U,ar=new U,rf=new U,of=new Ve,Gh=new U(1,0,0),Vh=new U(0,1,0),Wh=new U(0,0,1),Xh={type:"added"},af={type:"removed"},gs={type:"childadded",child:null},kl={type:"childremoved",child:null},Ce=class s extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new U,e=new Cn,n=new Ve,i=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _e},normalMatrix:{value:new re}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(Gh,t)}rotateY(t){return this.rotateOnAxis(Vh,t)}rotateZ(t){return this.rotateOnAxis(Wh,t)}translateOnAxis(t,e){return Hh.copy(t).applyQuaternion(this.quaternion),this.position.add(Hh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gh,t)}translateY(t){return this.translateOnAxis(Vh,t)}translateZ(t){return this.translateOnAxis(Wh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?yo.copy(t):yo.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(ar,yo,this.up):ri.lookAt(yo,ar,this.up),this.quaternion.setFromRotationMatrix(ri),i&&(ri.extractRotation(i.matrixWorld),ms.setFromRotationMatrix(ri),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xh),gs.child=t,this.dispatchEvent(gs),gs.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(af),kl.child=t,this.dispatchEvent(kl),kl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xh),gs.child=t,this.dispatchEvent(gs),gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,t,rf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,of,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ce.DEFAULT_UP=new U(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Et=class extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},lf={type:"move"},Os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,m=.005;l.inputState.pinching&&h>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lf)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Et;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function Hl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ie=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=xe.workingColorSpace){if(t=Kd(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Hl(o,r,t+1/3),this.g=Hl(o,r,t),this.b=Hl(o,r,t-1/3)}return xe.colorSpaceToWorking(this,i),this}setStyle(t,e=tn){function n(r){r!==void 0&&parseFloat(r)<1&&te("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:te("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);te("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){let n=Ku[t.toLowerCase()];return n!==void 0?this.setHex(n,e):te("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return xe.workingToColorSpace(on.copy(this),t),Math.round(fe(on.r*255,0,255))*65536+Math.round(fe(on.g*255,0,255))*256+Math.round(fe(on.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.workingToColorSpace(on.copy(this),e);let n=on.r,i=on.g,r=on.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=xe.workingColorSpace){return xe.workingToColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=tn){xe.workingToColorSpace(on.copy(this),t);let e=on.r,n=on.g,i=on.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL(Mo);let n=Nl(bi.h,Mo.h,e),i=Nl(bi.s,Mo.s,e),r=Nl(bi.l,Mo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new ie;ie.NAMES=Ku;var wi=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Bn=new U,oi=new U,Gl=new U,ai=new U,xs=new U,_s=new U,qh=new U,Vl=new U,Wl=new U,Xl=new U,ql=new De,Yl=new De,Zl=new De,hi=class s{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Bn.subVectors(t,e),i.cross(Bn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Bn.subVectors(i,e),oi.subVectors(n,e),Gl.subVectors(t,e);let o=Bn.dot(Bn),a=Bn.dot(oi),c=Bn.dot(Gl),l=oi.dot(oi),u=oi.dot(Gl),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(l*c-a*u)*h,m=(o*u-a*c)*h;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ai.x),c.addScaledVector(o,ai.y),c.addScaledVector(a,ai.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return ql.setScalar(0),Yl.setScalar(0),Zl.setScalar(0),ql.fromBufferAttribute(t,e),Yl.fromBufferAttribute(t,n),Zl.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ql,r.x),o.addScaledVector(Yl,r.y),o.addScaledVector(Zl,r.z),o}static isFrontFacing(t,e,n,i){return Bn.subVectors(n,e),oi.subVectors(t,e),Bn.cross(oi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Bn.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;xs.subVectors(i,n),_s.subVectors(r,n),Vl.subVectors(t,n);let c=xs.dot(Vl),l=_s.dot(Vl);if(c<=0&&l<=0)return e.copy(n);Wl.subVectors(t,i);let u=xs.dot(Wl),d=_s.dot(Wl);if(u>=0&&d<=u)return e.copy(i);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(xs,o);Xl.subVectors(t,r);let f=xs.dot(Xl),m=_s.dot(Xl);if(m>=0&&f<=m)return e.copy(r);let _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(_s,a);let g=u*m-f*d;if(g<=0&&d-u>=0&&f-m>=0)return qh.subVectors(r,i),a=(d-u)/(d-u+(f-m)),e.copy(i).addScaledVector(qh,a);let p=1/(g+_+h);return o=_*p,a=h*p,e.copy(n).addScaledVector(xs,o).addScaledVector(_s,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},jn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bo.copy(n.boundingBox)),bo.applyMatrix4(t.matrixWorld),this.union(bo)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(lr),So.subVectors(this.max,lr),vs.subVectors(t.a,lr),ys.subVectors(t.b,lr),Ms.subVectors(t.c,lr),Si.subVectors(ys,vs),Ei.subVectors(Ms,ys),Gi.subVectors(vs,Ms);let e=[0,-Si.z,Si.y,0,-Ei.z,Ei.y,0,-Gi.z,Gi.y,Si.z,0,-Si.x,Ei.z,0,-Ei.x,Gi.z,0,-Gi.x,-Si.y,Si.x,0,-Ei.y,Ei.x,0,-Gi.y,Gi.x,0];return!Jl(e,vs,ys,Ms,So)||(e=[1,0,0,0,1,0,0,0,1],!Jl(e,vs,ys,Ms,So))?!1:(Eo.crossVectors(Si,Ei),e=[Eo.x,Eo.y,Eo.z],Jl(e,vs,ys,Ms,So))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},li=[new U,new U,new U,new U,new U,new U,new U,new U],On=new U,bo=new jn,vs=new U,ys=new U,Ms=new U,Si=new U,Ei=new U,Gi=new U,lr=new U,So=new U,Eo=new U,Vi=new U;function Jl(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Vi.fromArray(s,r);let a=i.x*Math.abs(Vi.x)+i.y*Math.abs(Vi.y)+i.z*Math.abs(Vi.z),c=t.dot(Vi),l=e.dot(Vi),u=n.dot(Vi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var ke=new U,To=new xt,cf=0,an=class extends Kn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zc,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)To.fromBufferAttribute(this,e),To.applyMatrix3(t),this.setXY(e,To.x,To.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var wr=class extends an{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ar=class extends an{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var le=class extends an{constructor(t,e,n){super(new Float32Array(t),e,n)}},hf=new jn,cr=new U,$l=new U,Ai=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):hf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cr.subVectors(t,this.center);let e=cr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(cr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($l.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cr.copy(t.center).add($l)),this.expandByPoint(cr.copy(t.center).sub($l))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},uf=0,Rn=new _e,Kl=new Ce,bs=new U,vn=new jn,hr=new jn,Je=new U,Ne=class s extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jd(t)?Ar:wr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return Kl.lookAt(t),Kl.updateMatrix(),this.applyMatrix4(Kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new le(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];hr.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(vn.min,hr.min),vn.expandByPoint(Je),Je.addVectors(vn.max,hr.max),vn.expandByPoint(Je)):(vn.expandByPoint(hr.min),vn.expandByPoint(hr.max))}vn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Je.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Je));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Je.fromBufferAttribute(a,l),c&&(bs.fromBufferAttribute(t,l),Je.add(bs)),i=Math.max(i,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new an(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let x=0;x<n.count;x++)a[x]=new U,c[x]=new U;let l=new U,u=new U,d=new U,h=new xt,f=new xt,m=new xt,_=new U,g=new U;function p(x,T,R){l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,R),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,T),m.fromBufferAttribute(r,R),u.sub(l),d.sub(l),f.sub(h),m.sub(h);let L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(L),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(L),a[x].add(_),a[T].add(_),a[R].add(_),c[x].add(g),c[T].add(g),c[R].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let x=0,T=y.length;x<T;++x){let R=y[x],L=R.start,N=R.count;for(let O=L,D=L+N;O<D;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let w=new U,v=new U,M=new U,S=new U;function C(x){M.fromBufferAttribute(i,x),S.copy(M);let T=a[x];w.copy(T),w.sub(M.multiplyScalar(M.dot(T))).normalize(),v.crossVectors(S,T);let L=v.dot(c[x])<0?-1:1;o.setXYZW(x,w.x,w.y,w.z,L)}for(let x=0,T=y.length;x<T;++x){let R=y[x],L=R.start,N=R.count;for(let O=L,D=L+N;O<D;O+=3)C(t.getX(O+0)),C(t.getX(O+1)),C(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let i=new U,r=new U,o=new U,a=new U,c=new U,l=new U,u=new U,d=new U;if(t)for(let h=0,f=t.count;h<f;h+=3){let m=t.getX(h+0),_=t.getX(h+1),g=t.getX(h+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u),f=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)h[m++]=l[f++]}return new an(h,u,d)}if(this.index===null)return te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){let h=l[u],f=t(h,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(i[c]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=zc,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},un=new U,zs=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Zn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Zn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Zn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Zn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array),r=Ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Sr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new an(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Sr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},jl=new U,df=new U,ff=new re,yn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=jl.subVectors(n,e).cross(df.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(jl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ff.getNormalMatrix(t),i=this.coplanarPoint(jl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},pf=0,kn=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=pi,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ec,this.blendDst=Tc,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xo,this.stencilZFail=Xo,this.stencilZPass=Xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){te(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){te(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ie().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new yn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new xt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},fi=class extends kn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ss,ur=new U,Es=new U,Ts=new U,ws=new xt,dr=new xt,ju=new _e,wo=new U,fr=new U,Ao=new U,Yh=new xt,Ql=new xt,Zh=new xt,Ri=class extends Ce{constructor(t=new fi){if(super(),this.isSprite=!0,this.type="Sprite",Ss===void 0){Ss=new Ne;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Rr(e,5);Ss.setIndex([0,1,2,0,2,3]),Ss.setAttribute("position",new zs(n,3,0,!1)),Ss.setAttribute("uv",new zs(n,2,3,!1))}this.geometry=Ss,this.material=t,this.center=new xt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),ju.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-Ts.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Ro(wo.set(-.5,-.5,0),Ts,o,Es,i,r),Ro(fr.set(.5,-.5,0),Ts,o,Es,i,r),Ro(Ao.set(.5,.5,0),Ts,o,Es,i,r),Yh.set(0,0),Ql.set(1,0),Zh.set(1,1);let a=t.ray.intersectTriangle(wo,fr,Ao,!1,ur);if(a===null&&(Ro(fr.set(-.5,.5,0),Ts,o,Es,i,r),Ql.set(0,1),a=t.ray.intersectTriangle(wo,Ao,fr,!1,ur),a===null))return;let c=t.ray.origin.distanceTo(ur);c<t.near||c>t.far||e.push({distance:c,point:ur.clone(),uv:hi.getInterpolation(ur,wo,fr,Ao,Yh,Ql,Zh,new xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ro(s,t,e,n,i,r){ws.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(dr.x=r*ws.x-i*ws.y,dr.y=i*ws.x+r*ws.y):dr.copy(ws),s.copy(t),s.x+=dr.x,s.y+=dr.y,s.applyMatrix4(ju)}var ci=new U,tc=new U,Co=new U,Po=new U,Cr=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ci.copy(this.origin).addScaledVector(this.direction,e),ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){tc.copy(t).add(e).multiplyScalar(.5),Co.copy(e).sub(t).normalize(),Po.copy(this.origin).sub(tc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Co),a=Po.dot(this.direction),c=-Po.dot(Co),l=Po.lengthSq(),u=Math.abs(1-o*o),d,h,f,m;if(u>0)if(d=o*c-a,h=o*a-c,m=r*u,d>=0)if(h>=-m)if(h<=m){let _=1/u;d*=_,h*=_,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-m?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=m?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(tc).addScaledVector(Co,h),f}intersectSphere(t,e){if(t.radius<0)return null;ci.subVectors(t.center,this.origin);let n=ci.dot(this.direction),i=ci.dot(ci)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,i=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,i=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ci)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,d=t.x-o.x,h=t.y-o.y,f=t.z-o.z,m=e.x-o.x,_=e.y-o.y,g=e.z-o.z,p=n.x-o.x,y=n.y-o.y,w=n.z-o.z,v=Math.abs(c),M=Math.abs(l),S=Math.abs(u),C,x,T,R,L,N,O,D,B,Y,W,ut;if(v>=M&&v>=S?(T=c,N=d,B=m,ut=p,c>=0?(C=l,x=u,R=h,L=f,O=_,D=g,Y=y,W=w):(C=u,x=l,R=f,L=h,O=g,D=_,Y=w,W=y)):M>=S?(T=l,N=h,B=_,ut=y,l>=0?(C=u,x=c,R=f,L=d,O=g,D=m,Y=w,W=p):(C=c,x=u,R=d,L=f,O=m,D=g,Y=p,W=w)):(T=u,N=f,B=g,ut=w,u>=0?(C=c,x=l,R=d,L=h,O=m,D=_,Y=p,W=y):(C=l,x=c,R=h,L=d,O=_,D=m,Y=y,W=p)),T===0)return null;let $=C/T,st=x/T,I=1/T,k=R-$*N,X=L-st*N,et=O-$*B,tt=D-st*B,yt=Y-$*ut,E=W-st*ut,P=yt*tt-E*et,G=k*E-X*yt,Q=et*X-tt*k;if(i){if(P<0||G<0||Q<0)return null}else if((P<0||G<0||Q<0)&&(P>0||G>0||Q>0))return null;let rt=P+G+Q;if(rt===0)return null;let Mt=I*(P*N+G*B+Q*ut);return(rt>0?Mt<0:Mt>0)?null:this.at(Mt/rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},We=class extends kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Jh=new _e,Wi=new Cr,Io=new Ai,$h=new U,Lo=new U,Fo=new U,Do=new U,ec=new U,No=new U,Kh=new U,Uo=new U,Me=class extends Ce{constructor(t=new Ne,e=new We){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){No.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],d=r[c];u!==0&&(ec.fromBufferAttribute(d,t),o?No.addScaledVector(ec,u):No.addScaledVector(ec.sub(e),u))}e.add(No)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(r),Wi.copy(t.ray).recast(t.near),!(Io.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Io,$h)===null||Wi.origin.distanceToSquared($h)>(t.far-t.near)**2))&&(Jh.copy(r).invert(),Wi.copy(t.ray).applyMatrix4(Jh),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wi)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){let g=h[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),w=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,M=w;v<M;v+=3){let S=a.getX(v),C=a.getX(v+1),x=a.getX(v+2);i=Bo(this,p,t,n,l,u,d,S,C,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let y=a.getX(g),w=a.getX(g+1),v=a.getX(g+2);i=Bo(this,o,t,n,l,u,d,y,w,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){let g=h[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),w=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,M=w;v<M;v+=3){let S=v,C=v+1,x=v+2;i=Bo(this,p,t,n,l,u,d,S,C,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let y=g,w=g+1,v=g+2;i=Bo(this,o,t,n,l,u,d,y,w,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function mf(s,t,e,n,i,r,o,a){let c;if(t.side===nn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Hn,a),c===null)return null;Uo.copy(a),Uo.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Uo);return l<e.near||l>e.far?null:{distance:l,point:Uo.clone(),object:s}}function Bo(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Lo),s.getVertexPosition(c,Fo),s.getVertexPosition(l,Do);let u=mf(s,t,e,n,Lo,Fo,Do,Kh);if(u){let d=new U;hi.getBarycoord(Kh,Lo,Fo,Do,d),i&&(u.uv=hi.getInterpolatedAttribute(i,a,c,l,d,new xt)),r&&(u.uv1=hi.getInterpolatedAttribute(r,a,c,l,d,new xt)),o&&(u.normal=hi.getInterpolatedAttribute(o,a,c,l,d,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new U,materialIndex:0};hi.getNormal(Lo,Fo,Do,h.normal),u.face=h,u.barycoord=d}return u}var Pr=class extends dn{constructor(t=null,e=1,n=1,i,r,o,a,c,l=$e,u=$e,d,h){super(null,o,a,c,l,u,i,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ks=class extends an{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},As=new _e,jh=new _e,Oo=[],Qh=new jn,gf=new _e,pr=new Me,mr=new Ai,Zi=class extends Me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ks(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,gf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,As),Qh.copy(t.boundingBox).applyMatrix4(As),this.boundingBox.union(Qh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ai),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,As),mr.copy(t.boundingSphere).applyMatrix4(As),this.boundingSphere.union(mr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(pr.geometry=this.geometry,pr.material=this.material,pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mr.copy(this.boundingSphere),mr.applyMatrix4(n),t.ray.intersectsSphere(mr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,As),jh.multiplyMatrices(n,As),pr.matrixWorld=jh,pr.raycast(t,Oo);for(let o=0,a=Oo.length;o<a;o++){let c=Oo[o];c.instanceId=r,c.object=this,e.push(c)}Oo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ks(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pr(new Float32Array(i*this.count),i,this.count,Da,Pn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Xi=new Ai,xf=new xt(.5,.5),zo=new U,Hs=class{constructor(t=new yn,e=new yn,n=new yn,i=new yn,r=new yn,o=new yn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],y=r[12],w=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-o,f-u,p-m,M-y).normalize(),i[1].setComponents(l+o,f+u,p+m,M+y).normalize(),i[2].setComponents(l+a,f+d,p+_,M+w).normalize(),i[3].setComponents(l-a,f-d,p-_,M-w).normalize(),n)i[4].setComponents(c,h,g,v).normalize(),i[5].setComponents(l-c,f-h,p-g,M-v).normalize();else if(i[4].setComponents(l-c,f-h,p-g,M-v).normalize(),e===zn)i[5].setComponents(l+c,f+h,p+g,M+v).normalize();else if(e===Ds)i[5].setComponents(c,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){Xi.center.set(0,0,0);let e=xf.distanceTo(t.center);return Xi.radius=.7071067811865476+e,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(zo.x=i.normal.x>0?t.max.x:t.min.x,zo.y=i.normal.y>0?t.max.y:t.min.y,zo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(zo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ir=class extends dn{constructor(t=[],e=Ui,n,i,r,o,a,c,l,u){super(t,e,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Lr=class extends dn{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ci=class extends dn{constructor(t,e,n=Vn,i,r,o,a=$e,c=$e,l,u=$n,d=1){if(u!==$n&&u!==Oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Us(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},sa=class extends Ci{constructor(t,e=Vn,n=Ui,i,r,o=$e,a=$e,c,l=$n){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,i,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Fr=class extends dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},mn=class s extends Ne{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],d=[],h=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(d,2));function m(_,g,p,y,w,v,M,S,C,x,T){let R=v/C,L=M/x,N=v/2,O=M/2,D=S/2,B=C+1,Y=x+1,W=0,ut=0,$=new U;for(let st=0;st<Y;st++){let I=st*L-O;for(let k=0;k<B;k++){let X=k*R-N;$[_]=X*y,$[g]=I*w,$[p]=D,l.push($.x,$.y,$.z),$[_]=0,$[g]=0,$[p]=S>0?1:-1,u.push($.x,$.y,$.z),d.push(k/C),d.push(1-st/x),W+=1}}for(let st=0;st<x;st++)for(let I=0;I<C;I++){let k=h+I+B*st,X=h+I+B*(st+1),et=h+(I+1)+B*(st+1),tt=h+(I+1)+B*st;c.push(k,X,tt),c.push(X,et,tt),ut+=6}a.addGroup(f,ut,T),f+=ut,h+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Dr=class s extends Ne{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],u=e/2,d=Math.PI/2*t,h=e,f=2*d+h,m=n*2+r,_=i+1,g=new U,p=new U;for(let y=0;y<=m;y++){let w=0,v=0,M=0,S=0;if(y<=n){let T=y/n,R=T*Math.PI/2;v=-u-t*Math.cos(R),M=t*Math.sin(R),S=-t*Math.cos(R),w=T*d}else if(y<=n+r){let T=(y-n)/r;v=-u+T*e,M=t,S=0,w=d+T*h}else{let T=(y-n-r)/n,R=T*Math.PI/2;v=u+t*Math.sin(R),M=t*Math.cos(R),S=t*Math.sin(R),w=d+h+T*d}let C=Math.max(0,Math.min(1,w/f)),x=0;y===0?x=.5/i:y===m&&(x=-.5/i);for(let T=0;T<=i;T++){let R=T/i,L=R*Math.PI*2,N=Math.sin(L),O=Math.cos(L);p.x=-M*O,p.y=v,p.z=M*N,a.push(p.x,p.y,p.z),g.set(-M*O,S,M*N),g.normalize(),c.push(g.x,g.y,g.z),l.push(R+x,C)}if(y>0){let T=(y-1)*_;for(let R=0;R<i;R++){let L=T+R,N=T+R+1,O=y*_+R,D=y*_+R+1;o.push(L,N,O),o.push(N,D,O)}}}this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ji=class s extends Ne{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new U,u=new xt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){let f=n+d/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(a,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},$i=class s extends Ne{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let u=[],d=[],h=[],f=[],m=0,_=[],g=n/2,p=0;y(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new le(d,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(f,2));function y(){let v=new U,M=new U,S=0,C=(e-t)/n;for(let x=0;x<=r;x++){let T=[],R=x/r,L=R*(e-t)+t;for(let N=0;N<=i;N++){let O=N/i,D=O*c+a,B=Math.sin(D),Y=Math.cos(D);M.x=L*B,M.y=-R*n+g,M.z=L*Y,d.push(M.x,M.y,M.z),v.set(B,C,Y).normalize(),h.push(v.x,v.y,v.z),f.push(O,1-R),T.push(m++)}_.push(T)}for(let x=0;x<i;x++)for(let T=0;T<r;T++){let R=_[T][x],L=_[T+1][x],N=_[T+1][x+1],O=_[T][x+1];(t>0||T!==0)&&(u.push(R,L,O),S+=3),(e>0||T!==r-1)&&(u.push(L,N,O),S+=3)}l.addGroup(p,S,0),p+=S}function w(v){let M=m,S=new xt,C=new U,x=0,T=v===!0?t:e,R=v===!0?1:-1;for(let N=1;N<=i;N++)d.push(0,g*R,0),h.push(0,R,0),f.push(.5,.5),m++;let L=m;for(let N=0;N<=i;N++){let D=N/i*c+a,B=Math.cos(D),Y=Math.sin(D);C.x=T*Y,C.y=g*R,C.z=T*B,d.push(C.x,C.y,C.z),h.push(0,R,0),S.x=B*.5+.5,S.y=Y*.5*R+.5,f.push(S.x,S.y),m++}for(let N=0;N<i;N++){let O=M+N,D=L+N;v===!0?u.push(D,D+1,O):u.push(D+1,D,O),x+=3}l.addGroup(p,x,v===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Qn=class s extends $i{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ra=class s extends Ne{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),l(n),u(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let w=new U,v=new U,M=new U;for(let S=0;S<e.length;S+=3)f(e[S+0],w),f(e[S+1],v),f(e[S+2],M),c(w,v,M,y)}function c(y,w,v,M){let S=M+1,C=[];for(let x=0;x<=S;x++){C[x]=[];let T=y.clone().lerp(v,x/S),R=w.clone().lerp(v,x/S),L=S-x;for(let N=0;N<=L;N++)N===0&&x===S?C[x][N]=T:C[x][N]=T.clone().lerp(R,N/L)}for(let x=0;x<S;x++)for(let T=0;T<2*(S-x)-1;T++){let R=Math.floor(T/2);T%2===0?(h(C[x][R+1]),h(C[x+1][R]),h(C[x][R])):(h(C[x][R+1]),h(C[x+1][R+1]),h(C[x+1][R]))}}function l(y){let w=new U;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(y),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function u(){let y=new U;for(let w=0;w<r.length;w+=3){y.x=r[w+0],y.y=r[w+1],y.z=r[w+2];let v=g(y)/2/Math.PI+.5,M=p(y)/Math.PI+.5;o.push(v,1-M)}m(),d()}function d(){for(let y=0;y<o.length;y+=6){let w=o[y+0],v=o[y+2],M=o[y+4],S=Math.max(w,v,M),C=Math.min(w,v,M);S>.9&&C<.1&&(w<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),M<.2&&(o[y+4]+=1))}}function h(y){r.push(y.x,y.y,y.z)}function f(y,w){let v=y*3;w.x=t[v+0],w.y=t[v+1],w.z=t[v+2]}function m(){let y=new U,w=new U,v=new U,M=new U,S=new xt,C=new xt,x=new xt;for(let T=0,R=0;T<r.length;T+=9,R+=6){y.set(r[T+0],r[T+1],r[T+2]),w.set(r[T+3],r[T+4],r[T+5]),v.set(r[T+6],r[T+7],r[T+8]),S.set(o[R+0],o[R+1]),C.set(o[R+2],o[R+3]),x.set(o[R+4],o[R+5]),M.copy(y).add(w).add(v).divideScalar(3);let L=g(M);_(S,R+0,y,L),_(C,R+2,w,L),_(x,R+4,v,L)}}function _(y,w,v,M){M<0&&y.x===1&&(o[w]=y.x-1),v.x===0&&v.z===0&&(o[w]=M/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){te("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let u=n[i],h=n[i+1]-u,f=(o-u)/h;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new xt:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,i=[],r=[],o=[],a=new U,c=new _e;for(let f=0;f<=t;f++){let m=f/t;i[f]=this.getTangentAt(m,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE,u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(fe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(fe(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Gs=class extends Mn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new xt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},oa=class extends Gs{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Hc(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,f*=u,i(o,a,h,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var tu=new U,eu=new U,nc=new Hc,ic=new Hc,sc=new Hc,Vs=class extends Mn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new U){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%r]:(eu.subVectors(i[0],i[1]).add(i[0]),l=eu);let d=i[a%r],h=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(tu.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=tu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),nc.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,m,_,g),ic.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,m,_,g),sc.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,m,_,g)}else this.curveType==="catmullrom"&&(nc.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),ic.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),sc.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(nc.calc(c),ic.calc(c),sc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new U().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function nu(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function _f(s,t){let e=1-s;return e*e*t}function vf(s,t){return 2*(1-s)*s*t}function yf(s,t){return s*s*t}function xr(s,t,e,n){return _f(s,t)+vf(s,e)+yf(s,n)}function Mf(s,t){let e=1-s;return e*e*e*t}function bf(s,t){let e=1-s;return 3*e*e*s*t}function Sf(s,t){return 3*(1-s)*s*s*t}function Ef(s,t){return s*s*s*t}function _r(s,t,e,n,i){return Mf(s,t)+bf(s,e)+Sf(s,n)+Ef(s,i)}var Nr=class extends Mn{constructor(t=new xt,e=new xt,n=new xt,i=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new xt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_r(t,i.x,r.x,o.x,a.x),_r(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},aa=class extends Mn{constructor(t=new U,e=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new U){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_r(t,i.x,r.x,o.x,a.x),_r(t,i.y,r.y,o.y,a.y),_r(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ur=class extends Mn{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},la=class extends Mn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Br=class extends Mn{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(xr(t,i.x,r.x,o.x),xr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ca=class extends Mn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(xr(t,i.x,r.x,o.x),xr(t,i.y,r.y,o.y),xr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ki=class extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(nu(a,c.x,l.x,u.x,d.x),nu(a,c.y,l.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new xt().fromArray(i))}return this}},uc=Object.freeze({__proto__:null,ArcCurve:oa,CatmullRomCurve3:Vs,CubicBezierCurve:Nr,CubicBezierCurve3:aa,EllipseCurve:Gs,LineCurve:Ur,LineCurve3:la,QuadraticBezierCurve:Br,QuadraticBezierCurve3:ca,SplineCurve:Ki}),ha=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new uc[i.type]().fromJSON(i))}return this}},Or=class extends ha{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ur(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Br(this.currentPoint.clone(),new xt(t,e),new xt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Nr(this.currentPoint.clone(),new xt(t,e),new xt(n,i),new xt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ki(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){let l=new Gs(t,e,n,i,r,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ws=class extends Or{constructor(t){super(t),this.uuid=ui(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Or().fromJSON(i))}return this}};function Tf(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Qu(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Pf(s,t,r,e)),s.length>80*e){a=s[0],c=s[1];let u=a,d=c;for(let h=e;h<i;h+=e){let f=s[h],m=s[h+1];f<a&&(a=f),m<c&&(c=m),f>u&&(u=f),m>d&&(d=m)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return zr(r,o,e,a,c,l,0),o}function Qu(s,t,e,n,i){let r;if(i===Hf(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=iu(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=iu(o/n|0,s[o],s[o+1],r);return r&&Xs(r,r.next)&&(Hr(r),r=r.next),r}function ji(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Xs(e,e.next)||Ue(e.prev,e,e.next)===0)){if(Hr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function zr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Nf(s,n,i,r);let a=s;for(;s.prev!==s.next;){let c=s.prev,l=s.next;if(r?Af(s,n,i,r):wf(s)){t.push(c.i,s.i,l.i),Hr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=Rf(ji(s),t),zr(s,t,e,n,i,r,2)):o===2&&Cf(s,t,e,n,i,r):zr(ji(s),t,e,n,i,r,1);break}}}function wf(s){let t=s.prev,e=s,n=s.next;if(Ue(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(i,r,o),d=Math.min(a,c,l),h=Math.max(i,r,o),f=Math.max(a,c,l),m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=h&&m.y>=d&&m.y<=f&&gr(i,a,r,c,o,l,m.x,m.y)&&Ue(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Af(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Ue(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,u=i.y,d=r.y,h=o.y,f=Math.min(a,c,l),m=Math.min(u,d,h),_=Math.max(a,c,l),g=Math.max(u,d,h),p=dc(f,m,t,e,n),y=dc(_,g,t,e,n),w=s.prevZ,v=s.nextZ;for(;w&&w.z>=p&&v&&v.z<=y;){if(w.x>=f&&w.x<=_&&w.y>=m&&w.y<=g&&w!==i&&w!==o&&gr(a,u,c,d,l,h,w.x,w.y)&&Ue(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&gr(a,u,c,d,l,h,v.x,v.y)&&Ue(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=_&&w.y>=m&&w.y<=g&&w!==i&&w!==o&&gr(a,u,c,d,l,h,w.x,w.y)&&Ue(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&gr(a,u,c,d,l,h,v.x,v.y)&&Ue(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Rf(s,t){let e=s;do{let n=e.prev,i=e.next.next;!Xs(n,i)&&ed(n,e,e.next,i)&&kr(n,i)&&kr(i,n)&&(t.push(n.i,e.i,i.i),Hr(e),Hr(e.next),e=s=i),e=e.next}while(e!==s);return ji(e)}function Cf(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Of(o,a)){let c=nd(o,a);o=ji(o,o.next),c=ji(c,c.next),zr(o,t,e,n,i,r,0),zr(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Pf(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=Qu(s,a,c,n,!1);l===l.next&&(l.steiner=!0),i.push(Bf(l))}i.sort(If);for(let r=0;r<i.length;r++)e=Lf(i[r],e);return e}function If(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Lf(s,t){let e=Ff(s,t);if(!e)return t;let n=nd(e,s);return ji(n,n.next),ji(e,e.next)}function Ff(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(Xs(s,e))return e;do{if(Xs(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&td(i<l?n:r,i,c,l,i<l?r:n,i,e.x,e.y)){let d=Math.abs(i-e.y)/(n-e.x);kr(e,s)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&Df(o,e)))&&(o=e,u=d)}e=e.next}while(e!==a);return o}function Df(s,t){return Ue(s.prev,s,t.prev)<0&&Ue(t.next,s,s.next)<0}function Nf(s,t,e,n){let i=s;do i.z===0&&(i.z=dc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Uf(i)}function Uf(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function dc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Bf(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function td(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function gr(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&td(s,t,e,n,i,r,o,a)}function Of(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!zf(s,t)&&(kr(s,t)&&kr(t,s)&&kf(s,t)&&(Ue(s.prev,s,t.prev)||Ue(s,t.prev,t))||Xs(s,t)&&Ue(s.prev,s,s.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Xs(s,t){return s.x===t.x&&s.y===t.y}function ed(s,t,e,n){let i=Ho(Ue(s,t,e)),r=Ho(Ue(s,t,n)),o=Ho(Ue(e,n,s)),a=Ho(Ue(e,n,t));return!!(i!==r&&o!==a||i===0&&ko(s,e,t)||r===0&&ko(s,n,t)||o===0&&ko(e,s,n)||a===0&&ko(e,t,n))}function ko(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ho(s){return s>0?1:s<0?-1:0}function zf(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&ed(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function kr(s,t){return Ue(s.prev,s,s.next)<0?Ue(s,t,s.next)>=0&&Ue(s,s.prev,t)>=0:Ue(s,t,s.prev)<0||Ue(s,s.next,t)<0}function kf(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function nd(s,t){let e=fc(s.i,s.x,s.y),n=fc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function iu(s,t,e,n){let i=fc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Hr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function fc(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Hf(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var pc=class{static triangulate(t,e,n=2){return Tf(t,e,n)}},qi=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];su(t),ru(n,t);let o=t.length;e.forEach(su);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,ru(n,e[c]);let a=pc.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function su(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function ru(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Gr=class s extends Ne{constructor(t=new Ws([new xt(.5,.5),new xt(-.5,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new le(i,3)),this.setAttribute("uv",new le(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Gf,w,v=!1,M,S,C,x;if(p){w=p.getSpacedPoints(u),v=!0,h=!1;let it=p.isCatmullRomCurve3?p.closed:!1;M=p.computeFrenetFrames(u,it),S=new U,C=new U,x=new U}h||(g=0,f=0,m=0,_=0);let T=a.extractPoints(l),R=T.shape,L=T.holes;if(!qi.isClockWise(R)){R=R.reverse();for(let it=0,pt=L.length;it<pt;it++){let mt=L[it];qi.isClockWise(mt)&&(L[it]=mt.reverse())}}function O(it){let mt=10000000000000001e-36,ft=it[0];for(let vt=1;vt<=it.length;vt++){let Xt=vt%it.length,Gt=it[Xt],Kt=Gt.x-ft.x,ae=Gt.y-ft.y,z=Kt*Kt+ae*ae,be=Math.max(Math.abs(Gt.x),Math.abs(Gt.y),Math.abs(ft.x),Math.abs(ft.y)),me=mt*be*be;if(z<=me){it.splice(Xt,1),vt--;continue}ft=Gt}}O(R),L.forEach(O);let D=L.length,B=R;for(let it=0;it<D;it++){let pt=L[it];R=R.concat(pt)}function Y(it,pt,mt){return pt||Qt("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(pt,mt)}let W=R.length;function ut(it,pt,mt){let ft,vt,Xt,Gt=it.x-pt.x,Kt=it.y-pt.y,ae=mt.x-it.x,z=mt.y-it.y,be=Gt*Gt+Kt*Kt,me=Gt*z-Kt*ae;if(Math.abs(me)>Number.EPSILON){let F=Math.sqrt(be),b=Math.sqrt(ae*ae+z*z),q=pt.x-Kt/F,j=pt.y+Gt/F,ot=mt.x-z/b,bt=mt.y+ae/b,St=((ot-q)*z-(bt-j)*ae)/(Gt*z-Kt*ae);ft=q+Gt*St-it.x,vt=j+Kt*St-it.y;let at=ft*ft+vt*vt;if(at<=2)return new xt(ft,vt);Xt=Math.sqrt(at/2)}else{let F=!1;Gt>Number.EPSILON?ae>Number.EPSILON&&(F=!0):Gt<-Number.EPSILON?ae<-Number.EPSILON&&(F=!0):Math.sign(Kt)===Math.sign(z)&&(F=!0),F?(ft=-Kt,vt=Gt,Xt=Math.sqrt(be)):(ft=Gt,vt=Kt,Xt=Math.sqrt(be/2))}return new xt(ft/Xt,vt/Xt)}let $=[];for(let it=0,pt=B.length,mt=pt-1,ft=it+1;it<pt;it++,mt++,ft++)mt===pt&&(mt=0),ft===pt&&(ft=0),$[it]=ut(B[it],B[mt],B[ft]);let st=[],I,k=$.concat();for(let it=0,pt=D;it<pt;it++){let mt=L[it];I=[];for(let ft=0,vt=mt.length,Xt=vt-1,Gt=ft+1;ft<vt;ft++,Xt++,Gt++)Xt===vt&&(Xt=0),Gt===vt&&(Gt=0),I[ft]=ut(mt[ft],mt[Xt],mt[Gt]);st.push(I),k=k.concat(I)}let X;if(g===0)X=qi.triangulateShape(B,L);else{let it=[],pt=[];for(let mt=0;mt<g;mt++){let ft=mt/g,vt=f*Math.cos(ft*Math.PI/2),Xt=m*Math.sin(ft*Math.PI/2)+_;for(let Gt=0,Kt=B.length;Gt<Kt;Gt++){let ae=Y(B[Gt],$[Gt],Xt);G(ae.x,ae.y,-vt),ft===0&&it.push(ae)}for(let Gt=0,Kt=D;Gt<Kt;Gt++){let ae=L[Gt];I=st[Gt];let z=[];for(let be=0,me=ae.length;be<me;be++){let F=Y(ae[be],I[be],Xt);G(F.x,F.y,-vt),ft===0&&z.push(F)}ft===0&&pt.push(z)}}X=qi.triangulateShape(it,pt)}let et=X.length,tt=m+_;for(let it=0;it<W;it++){let pt=h?Y(R[it],k[it],tt):R[it];v?(C.copy(M.normals[0]).multiplyScalar(pt.x),S.copy(M.binormals[0]).multiplyScalar(pt.y),x.copy(w[0]).add(C).add(S),G(x.x,x.y,x.z)):G(pt.x,pt.y,0)}for(let it=1;it<=u;it++)for(let pt=0;pt<W;pt++){let mt=h?Y(R[pt],k[pt],tt):R[pt];v?(C.copy(M.normals[it]).multiplyScalar(mt.x),S.copy(M.binormals[it]).multiplyScalar(mt.y),x.copy(w[it]).add(C).add(S),G(x.x,x.y,x.z)):G(mt.x,mt.y,d/u*it)}for(let it=g-1;it>=0;it--){let pt=it/g,mt=f*Math.cos(pt*Math.PI/2),ft=m*Math.sin(pt*Math.PI/2)+_;for(let vt=0,Xt=B.length;vt<Xt;vt++){let Gt=Y(B[vt],$[vt],ft);G(Gt.x,Gt.y,d+mt)}for(let vt=0,Xt=L.length;vt<Xt;vt++){let Gt=L[vt];I=st[vt];for(let Kt=0,ae=Gt.length;Kt<ae;Kt++){let z=Y(Gt[Kt],I[Kt],ft);v?G(z.x,z.y+w[u-1].y,w[u-1].x+mt):G(z.x,z.y,d+mt)}}}yt(),E();function yt(){let it=i.length/3;if(h){let pt=0,mt=W*pt;for(let ft=0;ft<et;ft++){let vt=X[ft];Q(vt[2]+mt,vt[1]+mt,vt[0]+mt)}pt=u+g*2,mt=W*pt;for(let ft=0;ft<et;ft++){let vt=X[ft];Q(vt[0]+mt,vt[1]+mt,vt[2]+mt)}}else{for(let pt=0;pt<et;pt++){let mt=X[pt];Q(mt[2],mt[1],mt[0])}for(let pt=0;pt<et;pt++){let mt=X[pt];Q(mt[0]+W*u,mt[1]+W*u,mt[2]+W*u)}}n.addGroup(it,i.length/3-it,0)}function E(){let it=i.length/3,pt=0;P(B,pt),pt+=B.length;for(let mt=0,ft=L.length;mt<ft;mt++){let vt=L[mt];P(vt,pt),pt+=vt.length}n.addGroup(it,i.length/3-it,1)}function P(it,pt){let mt=it.length;for(;--mt>=0;){let ft=mt,vt=mt-1;vt<0&&(vt=it.length-1);for(let Xt=0,Gt=u+g*2;Xt<Gt;Xt++){let Kt=W*Xt,ae=W*(Xt+1),z=pt+ft+Kt,be=pt+vt+Kt,me=pt+vt+ae,F=pt+ft+ae;rt(z,be,me,F)}}}function G(it,pt,mt){c.push(it),c.push(pt),c.push(mt)}function Q(it,pt,mt){Mt(it),Mt(pt),Mt(mt);let ft=i.length/3,vt=y.generateTopUV(n,i,ft-3,ft-2,ft-1);oe(vt[0]),oe(vt[1]),oe(vt[2])}function rt(it,pt,mt,ft){Mt(it),Mt(pt),Mt(ft),Mt(pt),Mt(mt),Mt(ft);let vt=i.length/3,Xt=y.generateSideWallUV(n,i,vt-6,vt-3,vt-2,vt-1);oe(Xt[0]),oe(Xt[1]),oe(Xt[3]),oe(Xt[1]),oe(Xt[2]),oe(Xt[3])}function Mt(it){i.push(c[it*3+0]),i.push(c[it*3+1]),i.push(c[it*3+2])}function oe(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Vf(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new uc[i.type]().fromJSON(i)),new s(n,t.options)}},Gf={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],u=t[i*3+1];return[new xt(r,o),new xt(a,c),new xt(l,u)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],d=t[n*3+2],h=t[i*3],f=t[i*3+1],m=t[i*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new xt(o,1-c),new xt(l,1-d),new xt(h,1-m),new xt(_,1-p)]:[new xt(a,1-c),new xt(u,1-d),new xt(f,1-m),new xt(g,1-p)]}};function Vf(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Qi=class s extends ra{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},qs=class s extends Ne{constructor(t=[new xt(0,-.5),new xt(.5,0),new xt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=fe(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/e,d=new U,h=new xt,f=new U,m=new U,_=new U,g=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(m)}for(let y=0;y<=e;y++){let w=n+y*u*i,v=Math.sin(w),M=Math.cos(w);for(let S=0;S<=t.length-1;S++){d.x=t[S].x*v,d.y=t[S].y,d.z=t[S].x*M,o.push(d.x,d.y,d.z),h.x=y/e,h.y=S/(t.length-1),a.push(h.x,h.y);let C=c[3*S+0]*v,x=c[3*S+1],T=c[3*S+0]*M;l.push(C,x,T)}}for(let y=0;y<e;y++)for(let w=0;w<t.length-1;w++){let v=w+y*t.length,M=v,S=v+t.length,C=v+t.length+1,x=v+1;r.push(M,S,x),r.push(C,x,S)}this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("uv",new le(a,2)),this.setAttribute("normal",new le(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var Xe=class s extends Ne{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,d=t/a,h=e/c,f=[],m=[],_=[],g=[];for(let p=0;p<u;p++){let y=p*h-o;for(let w=0;w<l;w++){let v=w*d-r;m.push(v,-y,0),_.push(0,0,1),g.push(w/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let w=y+l*p,v=y+l*(p+1),M=y+1+l*(p+1),S=y+1+l*p;f.push(w,v,S),f.push(v,M,S)}this.setIndex(f),this.setAttribute("position",new le(m,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var ln=class s extends Ne{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],d=new U,h=new U,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){let y=[],w=p/n,v=o+w*a,M=t*Math.cos(v),S=Math.sqrt(t*t-M*M),C=0;p===0&&o===0?C=.5/e:p===n&&c===Math.PI&&(C=-.5/e);for(let x=0;x<=e;x++){let T=x/e,R=i+T*r;d.x=-S*Math.cos(R),d.y=M,d.z=S*Math.sin(R),m.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),g.push(T+C,1-w),y.push(l++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let w=u[p][y+1],v=u[p][y],M=u[p+1][y],S=u[p+1][y+1];(p!==0||o>0)&&f.push(w,v,S),(p!==n-1||c<Math.PI)&&f.push(v,M,S)}this.setIndex(f),this.setAttribute("position",new le(m,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Be=class s extends Ne{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],u=[],d=[],h=new U,f=new U,m=new U;for(let _=0;_<=n;_++){let g=o+_/n*a;for(let p=0;p<=i;p++){let y=p/i*r;f.x=(t+e*Math.cos(g))*Math.cos(y),f.y=(t+e*Math.cos(g))*Math.sin(y),f.z=e*Math.sin(g),l.push(f.x,f.y,f.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),m.subVectors(f,h).normalize(),u.push(m.x,m.y,m.z),d.push(p/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=i;g++){let p=(i+1)*_+g-1,y=(i+1)*(_-1)+g-1,w=(i+1)*(_-1)+g,v=(i+1)*_+g;c.push(p,y,v),c.push(y,w,v)}this.setIndex(c),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Vr=class extends kn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ie(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function is(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(ou(i))i.isRenderTargetTexture?(te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(ou(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function cn(s){let t={};for(let e=0;e<s.length;e++){let n=is(s[e]);for(let i in n)t[i]=n[i]}return t}function ou(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Wf(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Gc(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}var id={clone:is,merge:cn},Xf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bn=class extends kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xf,this.fragmentShader=qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=is(t.uniforms),this.uniformsGroups=Wf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new ie().setHex(i.value);break;case"v2":this.uniforms[n].value=new xt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new U().fromArray(i.value);break;case"v4":this.uniforms[n].value=new De().fromArray(i.value);break;case"m3":this.uniforms[n].value=new re().fromArray(i.value);break;case"m4":this.uniforms[n].value=new _e().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ua=class extends bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ve=class extends kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=io,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Wr=class extends kn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=io,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Aa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},da=class extends kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fa=class extends kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Rs(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function rc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Pi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},pa=class extends Pi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lc,endingEnd:lc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case cc:r=t,a=2*e-n;break;case hc:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case cc:o=t,c=2*n-e;break;case hc:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),_=m*m,g=_*m,p=-h*g+2*h*_-h*m,y=(1+h)*g+(-1.5-2*h)*_+(-.5+h)*m+1,w=(-1-f)*g+(1.5+f)*_+.5*m,v=f*g-f*_;for(let M=0;M!==a;++M)r[M]=p*o[u+M]+y*o[l+M]+w*o[c+M]+v*o[d+M];return r}},ma=class extends Pi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(i-e),d=1-u;for(let h=0;h!==a;++h)r[h]=o[l+h]*d+o[c+h]*u;return r}},ga=class extends Pi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},xa=class extends Pi{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let m=(n-e)/(i-e),_=1-m;for(let g=0;g!==a;++g)r[g]=o[l+g]*_+o[c+g]*m;return r}let h=a*2,f=t-1;for(let m=0;m!==a;++m){let _=o[l+m],g=o[c+m],p=f*h+m*2,y=d[p],w=d[p+1],v=t*h+m*2,M=u[v],S=u[v+1],C=Zf(n,e,y,M,i);r[m]=sd(C,_,w,S,g)}return r}};function sd(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function Yf(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function Zf(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=sd(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let c=Yf(r,t,e,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Sn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Rs(e,this.TimeBufferType),this.values=Rs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Rs(t.times,Array),values:Rs(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),rc(t.settings)&&(n.settings={inTangents:Rs(t.settings.inTangents,Array),outTangents:Rs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ga(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new xa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case vr:e=this.InterpolantFactoryMethodDiscrete;break;case ta:e=this.InterpolantFactoryMethodLinear;break;case Wo:e=this.InterpolantFactoryMethodSmooth;break;case ac:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return te("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return ta;case this.InterpolantFactoryMethodSmooth:return Wo;case this.InterpolantFactoryMethodBezier:return ac}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;rc(this.settings)&&(au(this.settings.inTangents,t),au(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Qt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Qt("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){Qt("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&$d(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){Qt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Wo,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(i)c=!0;else{let d=a*n,h=d-n,f=d+n;for(let m=0;m!==n;++m){let _=e[d+m];if(_!==e[h+m]||_!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,h=o*n;for(let f=0;f!==n;++f)e[h+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,rc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function au(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=ta;var Ii=class extends Sn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=vr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends Sn{constructor(t,e,n,i){super(t,e,n,i)}};_a.prototype.ValueTypeName="color";var va=class extends Sn{constructor(t,e,n,i){super(t,e,n,i)}};va.prototype.ValueTypeName="number";var ya=class extends Pi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let u=l+a;l!==u;l+=4)Ve.slerpFlat(r,0,o,l-a,o,l,c);return r}},Xr=class extends Sn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new ya(this.times,this.values,this.getValueSize(),t)}};Xr.prototype.ValueTypeName="quaternion";Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends Sn{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=vr;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Ma=class extends Sn{constructor(t,e,n,i){super(t,e,n,i)}};Ma.prototype.ValueTypeName="vector";var ba=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){let f=l[d],m=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},rd=new ba,Sa=class{constructor(t){this.manager=t!==void 0?t:rd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Sa.DEFAULT_MATERIAL_NAME="__DEFAULT";var ts=class extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ys=class extends ts{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},oc=new _e,lu=new U,cu=new U,Zs=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hs,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;lu.setFromMatrixPosition(t.matrixWorld),e.position.copy(lu),cu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){oc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(oc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;t.coordinateSystem===Ds||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(oc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Go=new U,Vo=new Ve,Yn=new U,qr=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Go,Vo,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Go,Vo,Yn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Go,Vo,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Go,Vo,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ti=new U,hu=new xt,uu=new xt,He=class extends qr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Dl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(Dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,hu,uu),e.subVectors(uu,hu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Dl*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},mc=class extends Zs{constructor(){super(new He(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Er*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Yr=class extends ts{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new mc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},gc=class extends Zs{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0}},ti=class extends ts{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new gc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Js=class extends qr{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},xc=class extends Zs{constructor(){super(new Js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fi=class extends ts{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new xc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Cs=-90,Ps=1,Ea=class extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new He(Cs,Ps,t,e);i.layers=this.layers,this.add(i);let r=new He(Cs,Ps,t,e);r.layers=this.layers,this.add(r);let o=new He(Cs,Ps,t,e);o.layers=this.layers,this.add(o);let a=new He(Cs,Ps,t,e);a.layers=this.layers,this.add(a);let c=new He(Cs,Ps,t,e);c.layers=this.layers,this.add(c);let l=new He(Cs,Ps,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ta=class extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Vc="\\[\\]\\.:\\/",Jf=new RegExp("["+Vc+"]","g"),Wc="[^"+Vc+"]",$f="[^"+Vc.replace("\\.","")+"]",Kf=/((?:WC+[\/:])*)/.source.replace("WC",Wc),jf=/(WCOD+)?/.source.replace("WCOD",$f),Qf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wc),tp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wc),ep=new RegExp("^"+Kf+jf+Qf+tp+"$"),np=["material","materials","bones","map"],_c=class{constructor(t,e,n){let i=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Fe=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Jf,"")}static parseTrackName(t){let e=ep.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);np.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){te("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;Qt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=_c;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var d_=new Float32Array(1);var du=new _e,Zr=class{constructor(t,e,n=0,i=1/0){this.ray=new Cr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Bs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Qt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return du.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(du),this}intersectObject(t,e=!0,n=[]){return vc(t,this,n,e),n.sort(fu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)vc(t[i],this,n,e);return n.sort(fu),n}};function fu(s,t){return s.distance-t.distance}function vc(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)vc(r[o],t,e,!0)}}var $c=class $c{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};$c.prototype.isMatrix2=!0;var yc=$c;function Xc(s,t,e,n){let i=ip(n);switch(e){case Bc:return s*t;case Da:return s*t/i.components*i.byteLength;case Na:return s*t/i.components*i.byteLength;case zi:return s*t*2/i.components*i.byteLength;case Ua:return s*t*2/i.components*i.byteLength;case Oc:return s*t*3/i.components*i.byteLength;case In:return s*t*4/i.components*i.byteLength;case Ba:return s*t*4/i.components*i.byteLength;case Kr:case jr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Qr:case to:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case za:case Ha:return Math.max(s,16)*Math.max(t,8)/4;case Oa:case ka:return Math.max(s,8)*Math.max(t,8)/2;case Ga:case Va:case Xa:case qa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Wa:case eo:case Ya:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case $a:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ja:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case tl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case el:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case nl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case il:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case sl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case rl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ol:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case al:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ll:case cl:case hl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ul:case dl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case no:case fl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ip(s){switch(s){case xn:case Fc:return{byteLength:1,components:1};case js:case Dc:case Wn:return{byteLength:2,components:1};case La:case Fa:return{byteLength:2,components:4};case Vn:case Ia:case Pn:return{byteLength:4,components:1};case Nc:case Uc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ad(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function lp(s){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,d=l.byteLength,h=s.createBuffer();s.bindBuffer(c,h),s.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let u=c.array,d=c.updateRanges;if(s.bindBuffer(l,a),d.length===0)s.bufferSubData(l,0,u);else{d.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<d.length;f++){let m=d[h],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,m=d.length;f<m;f++){let _=d[f];s.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hp=`#ifdef USE_ALPHAHASH
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
#endif`,up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mp=`#ifdef USE_AOMAP
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
#endif`,gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xp=`#ifdef USE_BATCHING
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
#endif`,_p=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bp=`#ifdef USE_IRIDESCENCE
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
#endif`,Sp=`#ifdef USE_BUMPMAP
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
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ip=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Lp=`#define PI 3.141592653589793
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
} // validated`,Fp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dp=`vec3 transformedNormal = objectNormal;
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
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$p=`#ifdef USE_GRADIENTMAP
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
}`,Kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,e0=`#ifdef USE_ENVMAP
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
#endif`,n0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o0=`PhysicalMaterial material;
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
#endif`,a0=`uniform sampler2D dfgLUT;
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
}`,l0=`
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
#endif`,c0=`#if defined( RE_IndirectDiffuse )
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
#endif`,h0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,d0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v0=`#if defined( USE_POINTS_UV )
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
#endif`,y0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T0=`#ifdef USE_MORPHTARGETS
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
#endif`,w0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,R0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,C0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,L0=`#ifdef USE_NORMALMAP
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
#endif`,F0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,z0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Z0=`float getShadowMask() {
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
}`,J0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$0=`#ifdef USE_SKINNING
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
#endif`,K0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j0=`#ifdef USE_SKINNING
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
#endif`,Q0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,im=`#ifdef USE_TRANSMISSION
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
#endif`,sm=`#ifdef USE_TRANSMISSION
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hm=`uniform sampler2D t2D;
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`#include <common>
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
}`,gm=`#if DEPTH_PACKING == 3200
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
}`,xm=`#define DISTANCE
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
}`,_m=`#define DISTANCE
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`uniform float scale;
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
}`,bm=`uniform vec3 diffuse;
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
}`,Sm=`#include <common>
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
}`,Em=`uniform vec3 diffuse;
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
}`,Tm=`#define LAMBERT
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
}`,wm=`#define LAMBERT
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
}`,Am=`#define MATCAP
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
}`,Rm=`#define MATCAP
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
}`,Cm=`#define NORMAL
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
}`,Pm=`#define NORMAL
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
}`,Im=`#define PHONG
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
}`,Lm=`#define PHONG
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
}`,Fm=`#define STANDARD
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
}`,Dm=`#define STANDARD
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
}`,Nm=`#define TOON
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
}`,Um=`#define TOON
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
}`,Bm=`uniform float size;
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
}`,Om=`uniform vec3 diffuse;
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
}`,zm=`#include <common>
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
}`,km=`uniform vec3 color;
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
}`,Hm=`uniform float rotation;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:cp,alphahash_pars_fragment:hp,alphamap_fragment:up,alphamap_pars_fragment:dp,alphatest_fragment:fp,alphatest_pars_fragment:pp,aomap_fragment:mp,aomap_pars_fragment:gp,batching_pars_vertex:xp,batching_vertex:_p,begin_vertex:vp,beginnormal_vertex:yp,bsdfs:Mp,iridescence_fragment:bp,bumpmap_pars_fragment:Sp,clipping_planes_fragment:Ep,clipping_planes_pars_fragment:Tp,clipping_planes_pars_vertex:wp,clipping_planes_vertex:Ap,color_fragment:Rp,color_pars_fragment:Cp,color_pars_vertex:Pp,color_vertex:Ip,common:Lp,cube_uv_reflection_fragment:Fp,defaultnormal_vertex:Dp,displacementmap_pars_vertex:Np,displacementmap_vertex:Up,emissivemap_fragment:Bp,emissivemap_pars_fragment:Op,colorspace_fragment:zp,colorspace_pars_fragment:kp,envmap_fragment:Hp,envmap_common_pars_fragment:Gp,envmap_pars_fragment:Vp,envmap_pars_vertex:Wp,envmap_physical_pars_fragment:e0,envmap_vertex:Xp,fog_vertex:qp,fog_pars_vertex:Yp,fog_fragment:Zp,fog_pars_fragment:Jp,gradientmap_pars_fragment:$p,lightmap_pars_fragment:Kp,lights_lambert_fragment:jp,lights_lambert_pars_fragment:Qp,lights_pars_begin:t0,lights_toon_fragment:n0,lights_toon_pars_fragment:i0,lights_phong_fragment:s0,lights_phong_pars_fragment:r0,lights_physical_fragment:o0,lights_physical_pars_fragment:a0,lights_fragment_begin:l0,lights_fragment_maps:c0,lights_fragment_end:h0,lightprobes_pars_fragment:u0,logdepthbuf_fragment:d0,logdepthbuf_pars_fragment:f0,logdepthbuf_pars_vertex:p0,logdepthbuf_vertex:m0,map_fragment:g0,map_pars_fragment:x0,map_particle_fragment:_0,map_particle_pars_fragment:v0,metalnessmap_fragment:y0,metalnessmap_pars_fragment:M0,morphinstance_vertex:b0,morphcolor_vertex:S0,morphnormal_vertex:E0,morphtarget_pars_vertex:T0,morphtarget_vertex:w0,normal_fragment_begin:A0,normal_fragment_maps:R0,normal_pars_fragment:C0,normal_pars_vertex:P0,normal_vertex:I0,normalmap_pars_fragment:L0,clearcoat_normal_fragment_begin:F0,clearcoat_normal_fragment_maps:D0,clearcoat_pars_fragment:N0,iridescence_pars_fragment:U0,opaque_fragment:B0,packing:O0,premultiplied_alpha_fragment:z0,project_vertex:k0,dithering_fragment:H0,dithering_pars_fragment:G0,roughnessmap_fragment:V0,roughnessmap_pars_fragment:W0,shadowmap_pars_fragment:X0,shadowmap_pars_vertex:q0,shadowmap_vertex:Y0,shadowmask_pars_fragment:Z0,skinbase_vertex:J0,skinning_pars_vertex:$0,skinning_vertex:K0,skinnormal_vertex:j0,specularmap_fragment:Q0,specularmap_pars_fragment:tm,tonemapping_fragment:em,tonemapping_pars_fragment:nm,transmission_fragment:im,transmission_pars_fragment:sm,uv_pars_fragment:rm,uv_pars_vertex:om,uv_vertex:am,worldpos_vertex:lm,background_vert:cm,background_frag:hm,backgroundCube_vert:um,backgroundCube_frag:dm,cube_vert:fm,cube_frag:pm,depth_vert:mm,depth_frag:gm,distance_vert:xm,distance_frag:_m,equirect_vert:vm,equirect_frag:ym,linedashed_vert:Mm,linedashed_frag:bm,meshbasic_vert:Sm,meshbasic_frag:Em,meshlambert_vert:Tm,meshlambert_frag:wm,meshmatcap_vert:Am,meshmatcap_frag:Rm,meshnormal_vert:Cm,meshnormal_frag:Pm,meshphong_vert:Im,meshphong_frag:Lm,meshphysical_vert:Fm,meshphysical_frag:Dm,meshtoon_vert:Nm,meshtoon_frag:Um,points_vert:Bm,points_frag:Om,shadow_vert:zm,shadow_frag:km,sprite_vert:Hm,sprite_frag:Gm},Pt={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},ii={basic:{uniforms:cn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:cn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new ie(0)},envMapIntensity:{value:1}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:cn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:cn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:cn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new ie(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:cn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:cn([Pt.points,Pt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:cn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:cn([Pt.common,Pt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:cn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:cn([Pt.sprite,Pt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:cn([Pt.common,Pt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:cn([Pt.lights,Pt.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};ii.physical={uniforms:cn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};var gl={r:0,b:0,g:0},Vm=new _e,Rd=new re;Rd.set(-1,0,0,0,1,0,0,0,1);function Wm(s,t,e,n,i,r){let o=new ie(0),a=i===!0?0:1,c,l,u=null,d=0,h=null;function f(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let v=y.backgroundBlurriness>0;w=t.get(w,v)}return w}function m(y){let w=!1,v=f(y);v===null?g(o,a):v&&v.isColor&&(g(v,1),w=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(y,w){let v=f(w);v&&(v.isCubeTexture||v.mapping===Jr)?(l===void 0&&(l=new Me(new mn(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:is(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Rd),l.material.toneMapped=xe.getTransfer(v.colorSpace)!==Te,(u!==v||d!==v.version||h!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Me(new Xe(2,2),new bn({name:"BackgroundMaterial",uniforms:is(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=xe.getTransfer(v.colorSpace)!==Te,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,w){y.getRGB(gl,Gc(s)),e.buffers.color.setClear(gl.r,gl.g,gl.b,w,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),a=w,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:m,addToRenderList:_,dispose:p}}function Xm(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null),r=i,o=!1;function a(L,N,O,D,B){let Y=!1,W=d(L,D,O,N);r!==W&&(r=W,l(r.object)),Y=f(L,D,O,B),Y&&m(L,D,O,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,v(L,N,O,D),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return s.createVertexArray()}function l(L){return s.bindVertexArray(L)}function u(L){return s.deleteVertexArray(L)}function d(L,N,O,D){let B=D.wireframe===!0,Y=n[N.id];Y===void 0&&(Y={},n[N.id]=Y);let W=L.isInstancedMesh===!0?L.id:0,ut=Y[W];ut===void 0&&(ut={},Y[W]=ut);let $=ut[O.id];$===void 0&&($={},ut[O.id]=$);let st=$[B];return st===void 0&&(st=h(c()),$[B]=st),st}function h(L){let N=[],O=[],D=[];for(let B=0;B<e;B++)N[B]=0,O[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:D,object:L,attributes:{},index:null}}function f(L,N,O,D){let B=r.attributes,Y=N.attributes,W=0,ut=O.getAttributes();for(let $ in ut)if(ut[$].location>=0){let I=B[$],k=Y[$];if(k===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(k=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(k=L.instanceColor)),I===void 0||I.attribute!==k||k&&I.data!==k.data)return!0;W++}return r.attributesNum!==W||r.index!==D}function m(L,N,O,D){let B={},Y=N.attributes,W=0,ut=O.getAttributes();for(let $ in ut)if(ut[$].location>=0){let I=Y[$];I===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(I=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(I=L.instanceColor));let k={};k.attribute=I,I&&I.data&&(k.data=I.data),B[$]=k,W++}r.attributes=B,r.attributesNum=W,r.index=D}function _(){let L=r.newAttributes;for(let N=0,O=L.length;N<O;N++)L[N]=0}function g(L){p(L,0)}function p(L,N){let O=r.newAttributes,D=r.enabledAttributes,B=r.attributeDivisors;O[L]=1,D[L]===0&&(s.enableVertexAttribArray(L),D[L]=1),B[L]!==N&&(s.vertexAttribDivisor(L,N),B[L]=N)}function y(){let L=r.newAttributes,N=r.enabledAttributes;for(let O=0,D=N.length;O<D;O++)N[O]!==L[O]&&(s.disableVertexAttribArray(O),N[O]=0)}function w(L,N,O,D,B,Y,W){W===!0?s.vertexAttribIPointer(L,N,O,B,Y):s.vertexAttribPointer(L,N,O,D,B,Y)}function v(L,N,O,D){_();let B=D.attributes,Y=O.getAttributes(),W=N.defaultAttributeValues;for(let ut in Y){let $=Y[ut];if($.location>=0){let st=B[ut];if(st===void 0&&(ut==="instanceMatrix"&&L.instanceMatrix&&(st=L.instanceMatrix),ut==="instanceColor"&&L.instanceColor&&(st=L.instanceColor)),st!==void 0){let I=st.normalized,k=st.itemSize,X=t.get(st);if(X===void 0)continue;let et=X.buffer,tt=X.type,yt=X.bytesPerElement,E=tt===s.INT||tt===s.UNSIGNED_INT||st.gpuType===Ia;if(st.isInterleavedBufferAttribute){let P=st.data,G=P.stride,Q=st.offset;if(P.isInstancedInterleavedBuffer){for(let rt=0;rt<$.locationSize;rt++)p($.location+rt,P.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let rt=0;rt<$.locationSize;rt++)g($.location+rt);s.bindBuffer(s.ARRAY_BUFFER,et);for(let rt=0;rt<$.locationSize;rt++)w($.location+rt,k/$.locationSize,tt,I,G*yt,(Q+k/$.locationSize*rt)*yt,E)}else{if(st.isInstancedBufferAttribute){for(let P=0;P<$.locationSize;P++)p($.location+P,st.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let P=0;P<$.locationSize;P++)g($.location+P);s.bindBuffer(s.ARRAY_BUFFER,et);for(let P=0;P<$.locationSize;P++)w($.location+P,k/$.locationSize,tt,I,k*yt,k/$.locationSize*P*yt,E)}}else if(W!==void 0){let I=W[ut];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv($.location,I);break;case 3:s.vertexAttrib3fv($.location,I);break;case 4:s.vertexAttrib4fv($.location,I);break;default:s.vertexAttrib1fv($.location,I)}}}}y()}function M(){T();for(let L in n){let N=n[L];for(let O in N){let D=N[O];for(let B in D){let Y=D[B];for(let W in Y)u(Y[W].object),delete Y[W];delete D[B]}}delete n[L]}}function S(L){if(n[L.id]===void 0)return;let N=n[L.id];for(let O in N){let D=N[O];for(let B in D){let Y=D[B];for(let W in Y)u(Y[W].object),delete Y[W];delete D[B]}}delete n[L.id]}function C(L){for(let N in n){let O=n[N];for(let D in O){let B=O[D];if(B[L.id]===void 0)continue;let Y=B[L.id];for(let W in Y)u(Y[W].object),delete Y[W];delete B[L.id]}}}function x(L){for(let N in n){let O=n[N],D=L.isInstancedMesh===!0?L.id:0,B=O[D];if(B!==void 0){for(let Y in B){let W=B[Y];for(let ut in W)u(W[ut].object),delete W[ut];delete B[Y]}delete O[D],Object.keys(O).length===0&&delete n[N]}}}function T(){R(),o=!0,r!==i&&(r=i,l(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function qm(s,t,e){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,u){u!==0&&(s.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];e.update(h,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Ym(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==In&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let x=C===Wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==xn&&C!==Pn&&!x&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(te("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=s.getParameter(s.MAX_SAMPLES),S=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:v,maxSamples:M,samples:S}}function Zm(s){let t=this,e=null,n=0,i=!1,r=!1,o=new yn,a=new re,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){let m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=s.get(d);if(!i||m===null||m.length===0||r&&!g)r?u(null):l();else{let y=r?0:n,w=y*4,v=p.clippingState||null;c.value=v,v=u(m,h,w,f);for(let M=0;M!==w;++M)v[M]=e[M];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,m){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=c.value,m!==!0||g===null){let p=f+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let w=0,v=f;w!==_;++w,v+=4)o.copy(d[w]).applyMatrix4(y,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}var er=4,Jm=6,$m=20,Km=256,so=new Js,od=new ie,Kc=null,jc=0,Qc=0,th=!1,jm=new U,ss=new U,rs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=jm}=r;Kc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ld(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Kc,jc,Qc),this._renderer.xr.enabled=th,t.scissorTest=!1,tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ui||t.mapping===ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Wn,format:In,colorSpace:yr,depthBuffer:!1},i=ad(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ad(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Qm(r)),this._blurMaterial=eg(r,t,e),this._ggxMaterial=tg(r,t,e)}return i}_compileMaterial(t){let e=new Me(new Ne,t);this._renderer.compile(e,so)}_sceneToCubeUV(t,e,n,i,r){let c=new He(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(od),d.toneMapping=Gn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Me(new mn,new We({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,p=!1,y=t.background;y?y.isColor&&(g.color.copy(y),t.background=null,p=!0):(g.color.copy(od),p=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[w],r.y,r.z)):v===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[w]));let M=this._cubeSize;tr(i,v*M,w>2?M:0,M,M),d.setRenderTarget(i),p&&d.render(_,c),d.render(t,c)}d.toneMapping=f,d.autoClear=h,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ui||t.mapping===ns;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ld());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;tr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,so)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=l*1.25,f=d*h,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-er?n-m+er:0),p=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=m-e,tr(r,g,p,3*_,2*_),i.setRenderTarget(r),i.render(a,so),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,tr(t,g,p,3*_,2*_),i.setRenderTarget(t),i.render(a,so)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,i,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[i];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[i],d=3*u*(i>this._lodMax-er?i-this._lodMax+er:0),h=4*(this._cubeSize-u);tr(e,d,h,3*u,2*u),o.setRenderTarget(e),o.render(c,so)}};function Qm(s){let t=[],e=[],n=s,i=s-er+1+Jm;for(let r=0;r<i;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,h=6,f=3,m=new Float32Array(f*h*d),_=new Float32Array(f*h*d);for(let p=0;p<d;p++){let y=p%3*2/3-1,w=p>2?0:-1,v=[y,w,0,y+2/3,w,0,y+2/3,w+1,0,y,w,0,y+2/3,w+1,0,y,w+1,0];m.set(v,f*h*p);for(let M=0;M<h;M++){let S=u[M*2]*2-1,C=u[M*2+1]*2-1;p===0?ss.set(1,C,S):p===1?ss.set(-S,1,-C):p===2?ss.set(-S,C,1):p===3?ss.set(-1,C,-S):p===4?ss.set(-S,-1,C):ss.set(S,C,-1),ss.toArray(_,(p*h+M)*f)}}let g=new Ne;g.setAttribute("position",new an(m,f)),g.setAttribute("outputDirection",new an(_,f)),e.push(new Me(g,null)),n>er&&n--}return{lodMeshes:e,sizeLods:t}}function ad(s,t,e){let n=new pn(s,t,e);return n.texture.mapping=Jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function tg(s,t,e){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Km,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vl(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function eg(s,t,e){return new bn({name:"SphericalGaussianBlur",defines:{SAMPLES:$m,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vl(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function ld(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function cd(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function vl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var _l=class extends pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ir(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new mn(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:ei});r.uniforms.tEquirect.value=e;let o=new Me(i,r),a=e.minFilter;return e.minFilter===Bi&&(e.minFilter=en),new Ea(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}};function ng(s){let t=new WeakMap,e=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Ra||f===Ca)if(t.has(h)){let m=t.get(h).texture;return a(m,h.mapping)}else{let m=h.image;if(m&&m.height>0){let _=new _l(m.height);return _.fromEquirectangularTexture(s,h),t.set(h,_),h.addEventListener("dispose",l),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let f=h.mapping,m=f===Ra||f===Ca,_=f===Ui||f===ns;if(m||_){let g=e.get(h),p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new rs(s)),g=m?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{let y=h.image;return m&&y&&y.height>0||_&&y&&c(y)?(n===null&&(n=new rs(s)),g=m?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function a(h,f){return f===Ra?h.mapping=Ui:f===Ca&&(h.mapping=ns),h}function c(h){let f=0,m=6;for(let _=0;_<m;_++)h[_]!==void 0&&f++;return f===m}function l(h){let f=h.target;f.removeEventListener("dispose",l);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function ig(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Yi("WebGLRenderer: "+n+" extension not supported."),i}}}function sg(s,t,e,n){let i={},r=new WeakMap;function o(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let m in h.attributes)t.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete i[h.id];let f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,e.memory.geometries++),h}function c(d){let h=d.attributes;for(let f in h)t.update(h[f],s.ARRAY_BUFFER)}function l(d){let h=[],f=d.index,m=d.attributes.position,_=0;if(m===void 0)return;if(f!==null){let y=f.array;_=f.version;for(let w=0,v=y.length;w<v;w+=3){let M=y[w+0],S=y[w+1],C=y[w+2];h.push(M,S,S,C,C,M)}}else{let y=m.array;_=m.version;for(let w=0,v=y.length/3-1;w<v;w+=3){let M=w+0,S=w+1,C=w+2;h.push(M,S,S,C,C,M)}}let g=new(m.count>=65535?Ar:wr)(h,1);g.version=_;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function rg(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,h){s.drawElements(n,h,r,d*o),e.update(h,n,1)}function l(d,h,f){f!==0&&(s.drawElementsInstanced(n,h,r,d*o,f),e.update(h,n,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function og(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Qt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ag(s,t,e){let n=new WeakMap,i=new De;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==d){let T=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],w=0;f===!0&&(w=1),m===!0&&(w=2),_===!0&&(w=3);let v=a.attributes.position.count*w,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*M*4*d),C=new Tr(S,v,M,d);C.type=Pn,C.needsUpdate=!0;let x=w*4;for(let R=0;R<d;R++){let L=g[R],N=p[R],O=y[R],D=v*M*4*R;for(let B=0;B<L.count;B++){let Y=B*x;f===!0&&(i.fromBufferAttribute(L,B),S[D+Y+0]=i.x,S[D+Y+1]=i.y,S[D+Y+2]=i.z,S[D+Y+3]=0),m===!0&&(i.fromBufferAttribute(N,B),S[D+Y+4]=i.x,S[D+Y+5]=i.y,S[D+Y+6]=i.z,S[D+Y+7]=0),_===!0&&(i.fromBufferAttribute(O,B),S[D+Y+8]=i.x,S[D+Y+9]=i.y,S[D+Y+10]=i.z,S[D+Y+11]=O.itemSize===4?i.w:1)}}h={count:d,texture:C,size:new xt(v,M)},n.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function lg(s,t,e,n,i){let r=new WeakMap;function o(l){let u=i.render.frame,d=l.geometry,h=t.get(l,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var cg={[wc]:"LINEAR_TONE_MAPPING",[Ac]:"REINHARD_TONE_MAPPING",[Rc]:"CINEON_TONE_MAPPING",[Ks]:"ACES_FILMIC_TONE_MAPPING",[Pc]:"AGX_TONE_MAPPING",[Ic]:"NEUTRAL_TONE_MAPPING",[Cc]:"CUSTOM_TONE_MAPPING"};function hg(s,t,e,n,i,r){let o=new pn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new Ne;l.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new le([0,2,0,0,2,0],2));let u=new ua({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Me(l,u),h=new Js(-1,1,1,-1,0,1),f=null,m=null,_=!1,g,p=null,y=[],w=!1;this.setSize=function(v,M){o.setSize(v,M),a!==null&&a.setSize(v,M),c!==null&&c.setSize(v,M);for(let S=0;S<y.length;S++){let C=y[S];C.setSize&&C.setSize(v,M)}},this.setEffects=function(v){y=v,w=y.length>0&&y[0].isRenderPass===!0;let M=o.width,S=o.height;y.length>0&&a===null&&(a=new pn(M,S,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),c=new pn(M,S,{type:Wn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<y.length;C++){let x=y[C];x.setSize&&x.setSize(M,S)}},this.begin=function(v,M){if(_||v.toneMapping===Gn&&y.length===0)return!1;if(p=M,M!==null){let S=M.width,C=M.height;(o.width!==S||o.height!==C)&&this.setSize(S,C)}return w===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=Gn,!0},this.hasRenderPass=function(){return w},this.end=function(v,M){v.toneMapping=g,_=!0;let S=o,C=a;for(let x=0;x<y.length;x++){let T=y[x];T.enabled!==!1&&(T.render(v,C,S,M),T.needsSwap!==!1&&(S=C,C=C===a?c:a))}if(f!==v.outputColorSpace||m!==v.toneMapping){f=v.outputColorSpace,m=v.toneMapping,u.defines={},xe.getTransfer(f)===Te&&(u.defines.SRGB_TRANSFER="");let x=cg[m];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(p),v.render(d,h),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Cd=new dn,ih=new Ci(1,1),Pd=new Tr,Id=new ia,Ld=new Ir,hd=[],ud=[],dd=new Float32Array(16),fd=new Float32Array(9),pd=new Float32Array(4);function ir(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=hd[i];if(r===void 0&&(r=new Float32Array(i),hd[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function qe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ye(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function yl(s,t){let e=ud[t];e===void 0&&(e=new Int32Array(t),ud[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function ug(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function dg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2fv(this.addr,t),Ye(e,t)}}function fg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;s.uniform3fv(this.addr,t),Ye(e,t)}}function pg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4fv(this.addr,t),Ye(e,t)}}function mg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;pd.set(n),s.uniformMatrix2fv(this.addr,!1,pd),Ye(e,n)}}function gg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;fd.set(n),s.uniformMatrix3fv(this.addr,!1,fd),Ye(e,n)}}function xg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;dd.set(n),s.uniformMatrix4fv(this.addr,!1,dd),Ye(e,n)}}function _g(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function vg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2iv(this.addr,t),Ye(e,t)}}function yg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;s.uniform3iv(this.addr,t),Ye(e,t)}}function Mg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4iv(this.addr,t),Ye(e,t)}}function bg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Sg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2uiv(this.addr,t),Ye(e,t)}}function Eg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;s.uniform3uiv(this.addr,t),Ye(e,t)}}function Tg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4uiv(this.addr,t),Ye(e,t)}}function wg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ih.compareFunction=e.isReversedDepthBuffer()?ml:pl,r=ih):r=Cd,e.setTexture2D(t||r,i)}function Ag(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Id,i)}function Rg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ld,i)}function Cg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Pd,i)}function Pg(s){switch(s){case 5126:return ug;case 35664:return dg;case 35665:return fg;case 35666:return pg;case 35674:return mg;case 35675:return gg;case 35676:return xg;case 5124:case 35670:return _g;case 35667:case 35671:return vg;case 35668:case 35672:return yg;case 35669:case 35673:return Mg;case 5125:return bg;case 36294:return Sg;case 36295:return Eg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Ag;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Cg}}function Ig(s,t){s.uniform1fv(this.addr,t)}function Lg(s,t){let e=ir(t,this.size,2);s.uniform2fv(this.addr,e)}function Fg(s,t){let e=ir(t,this.size,3);s.uniform3fv(this.addr,e)}function Dg(s,t){let e=ir(t,this.size,4);s.uniform4fv(this.addr,e)}function Ng(s,t){let e=ir(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Ug(s,t){let e=ir(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Bg(s,t){let e=ir(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Og(s,t){s.uniform1iv(this.addr,t)}function zg(s,t){s.uniform2iv(this.addr,t)}function kg(s,t){s.uniform3iv(this.addr,t)}function Hg(s,t){s.uniform4iv(this.addr,t)}function Gg(s,t){s.uniform1uiv(this.addr,t)}function Vg(s,t){s.uniform2uiv(this.addr,t)}function Wg(s,t){s.uniform3uiv(this.addr,t)}function Xg(s,t){s.uniform4uiv(this.addr,t)}function qg(s,t,e){let n=this.cache,i=t.length,r=yl(e,i);qe(n,r)||(s.uniform1iv(this.addr,r),Ye(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=ih:o=Cd;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function Yg(s,t,e){let n=this.cache,i=t.length,r=yl(e,i);qe(n,r)||(s.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Id,r[o])}function Zg(s,t,e){let n=this.cache,i=t.length,r=yl(e,i);qe(n,r)||(s.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Ld,r[o])}function Jg(s,t,e){let n=this.cache,i=t.length,r=yl(e,i);qe(n,r)||(s.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Pd,r[o])}function $g(s){switch(s){case 5126:return Ig;case 35664:return Lg;case 35665:return Fg;case 35666:return Dg;case 35674:return Ng;case 35675:return Ug;case 35676:return Bg;case 5124:case 35670:return Og;case 35667:case 35671:return zg;case 35668:case 35672:return kg;case 35669:case 35673:return Hg;case 5125:return Gg;case 36294:return Vg;case 36295:return Wg;case 36296:return Xg;case 35678:case 36198:case 36298:case 36306:case 35682:return qg;case 35679:case 36299:case 36307:return Yg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Jg}}var sh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Pg(e.type)}},rh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$g(e.type)}},oh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},eh=/(\w+)(\])?(\[|\.)?/g;function md(s,t){s.seq.push(t),s.map[t.id]=t}function Kg(s,t,e){let n=s.name,i=n.length;for(eh.lastIndex=0;;){let r=eh.exec(n),o=eh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){md(e,l===void 0?new sh(a,s,t):new rh(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new oh(a),md(e,d)),e=d}}}var nr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Kg(a,c,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function gd(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var jg=37297,Qg=0;function tx(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var xd=new re;function ex(s){xe._getMatrix(xd,xe.workingColorSpace,s);let t=`mat3( ${xd.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(s)){case Mr:return[t,"LinearTransferOETF"];case Te:return[t,"sRGBTransferOETF"];default:return te("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function _d(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+tx(s.getShaderSource(t),a)}else return r}function nx(s,t){let e=ex(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var ix={[wc]:"Linear",[Ac]:"Reinhard",[Rc]:"Cineon",[Ks]:"ACESFilmic",[Pc]:"AgX",[Ic]:"Neutral",[Cc]:"Custom"};function sx(s,t){let e=ix[t];return e===void 0?(te("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var xl=new U;function rx(){xe.getLuminanceCoefficients(xl);let s=xl.x.toFixed(4),t=xl.y.toFixed(4),e=xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ox(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function ax(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lx(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function oo(s){return s!==""}function vd(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var cx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ah(s){return s.replace(cx,ux)}var hx=new Map;function ux(s,t){let e=de[t];if(e===void 0){let n=hx.get(t);if(n!==void 0)e=de[n],te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ah(e)}var dx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Md(s){return s.replace(dx,fx)}function fx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function bd(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var px={[Di]:"SHADOWMAP_TYPE_PCF",[$s]:"SHADOWMAP_TYPE_VSM"};function mx(s){return px[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var gx={[Ui]:"ENVMAP_TYPE_CUBE",[ns]:"ENVMAP_TYPE_CUBE",[Jr]:"ENVMAP_TYPE_CUBE_UV"};function xx(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":gx[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var _x={[ns]:"ENVMAP_MODE_REFRACTION"};function vx(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":_x[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var yx={[Aa]:"ENVMAP_BLENDING_MULTIPLY",[Nu]:"ENVMAP_BLENDING_MIX",[Uu]:"ENVMAP_BLENDING_ADD"};function Mx(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":yx[s.combine]||"ENVMAP_BLENDING_NONE"}function bx(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Sx(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=mx(e),l=xx(e),u=vx(e),d=Mx(e),h=bx(e),f=ox(e),m=ax(r),_=i.createProgram(),g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(oo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(oo).join(`
`),p.length>0&&(p+=`
`)):(g=[bd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),p=[bd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?de.tonemapping_pars_fragment:"",e.toneMapping!==Gn?sx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,nx("linearToOutputTexel",e.outputColorSpace),rx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(oo).join(`
`)),o=ah(o),o=vd(o,e),o=yd(o,e),a=ah(a),a=vd(a,e),a=yd(a,e),o=Md(o),a=Md(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=y+g+o,v=y+p+a,M=gd(i,i.VERTEX_SHADER,w),S=gd(i,i.FRAGMENT_SHADER,v);i.attachShader(_,M),i.attachShader(_,S),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(L){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(_)||"",O=i.getShaderInfoLog(M)||"",D=i.getShaderInfoLog(S)||"",B=N.trim(),Y=O.trim(),W=D.trim(),ut=!0,$=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(ut=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,M,S);else{let st=_d(i,M,"vertex"),I=_d(i,S,"fragment");Qt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+st+`
`+I)}else B!==""?te("WebGLProgram: Program Info Log:",B):(Y===""||W==="")&&($=!1);$&&(L.diagnostics={runnable:ut,programLog:B,vertexShader:{log:Y,prefix:g},fragmentShader:{log:W,prefix:p}})}i.deleteShader(M),i.deleteShader(S),x=new nr(i,_),T=lx(i,_)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(_,jg)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=S,this}var Ex=0,lh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ch(t),e.set(t,n)),n}},ch=class{constructor(t){this.id=Ex++,this.code=t,this.usedTimes=0}};function Tx(s){return s===zi||s===eo||s===no}function wx(s,t,e,n,i,r){let o=new Bs,a=new lh,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,T,R,L,N,O){let D=L.fog,B=N.geometry,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ut=t.get(x.envMap||Y,W),$=ut&&ut.mapping===Jr?ut.image.height:null,st=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&te("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let I=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,k=I!==void 0?I.length:0,X=0;B.morphAttributes.position!==void 0&&(X=1),B.morphAttributes.normal!==void 0&&(X=2),B.morphAttributes.color!==void 0&&(X=3);let et,tt,yt,E;if(st){let Pe=ii[st];et=Pe.vertexShader,tt=Pe.fragmentShader}else{et=x.vertexShader,tt=x.fragmentShader;let Pe=a.getVertexShaderStage(x),Se=a.getFragmentShaderStage(x);a.update(x,Pe,Se),yt=Pe.id,E=Se.id}let P=s.getRenderTarget(),G=s.state.buffers.depth.getReversed(),Q=N.isInstancedMesh===!0,rt=N.isBatchedMesh===!0,Mt=!!x.map,oe=!!x.matcap,it=!!ut,pt=!!x.aoMap,mt=!!x.lightMap,ft=!!x.bumpMap&&x.wireframe===!1,vt=!!x.normalMap,Xt=!!x.displacementMap,Gt=!!x.emissiveMap,Kt=!!x.metalnessMap,ae=!!x.roughnessMap,z=x.anisotropy>0,be=x.clearcoat>0,me=x.dispersion>0,F=x.retroreflectivity>0,b=x.iridescence>0,q=x.sheen>0,j=x.transmission>0,ot=z&&!!x.anisotropyMap,bt=be&&!!x.clearcoatMap,St=be&&!!x.clearcoatNormalMap,at=be&&!!x.clearcoatRoughnessMap,dt=b&&!!x.iridescenceMap,Tt=b&&!!x.iridescenceThicknessMap,qt=q&&!!x.sheenColorMap,Ct=q&&!!x.sheenRoughnessMap,wt=!!x.specularMap,Yt=!!x.specularColorMap,jt=!!x.specularIntensityMap,he=j&&!!x.transmissionMap,V=j&&!!x.thicknessMap,At=!!x.gradientMap,ht=!!x.alphaMap,Rt=x.alphaTest>0,Dt=!!x.alphaHash,gt=!!x.extensions,Zt=Gn;x.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Zt=s.toneMapping);let Vt={shaderID:st,shaderType:x.type,shaderName:x.name,vertexShader:et,fragmentShader:tt,defines:x.defines,customVertexShaderID:yt,customFragmentShaderID:E,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:rt,batchingColor:rt&&N._colorsTexture!==null,instancing:Q,instancingColor:Q&&N.instanceColor!==null,instancingMorph:Q&&N.morphTexture!==null,outputColorSpace:P===null?s.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:xe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Mt,matcap:oe,envMap:it,envMapMode:it&&ut.mapping,envMapCubeUVHeight:$,aoMap:pt,lightMap:mt,bumpMap:ft,normalMap:vt,displacementMap:Xt,emissiveMap:Gt,normalMapObjectSpace:vt&&x.normalMapType===zu,normalMapTangentSpace:vt&&x.normalMapType===io,packedNormalMap:vt&&x.normalMapType===io&&Tx(x.normalMap.format),metalnessMap:Kt,roughnessMap:ae,anisotropy:z,anisotropyMap:ot,clearcoat:be,clearcoatMap:bt,clearcoatNormalMap:St,clearcoatRoughnessMap:at,dispersion:me,retroreflection:F,iridescence:b,iridescenceMap:dt,iridescenceThicknessMap:Tt,sheen:q,sheenColorMap:qt,sheenRoughnessMap:Ct,specularMap:wt,specularColorMap:Yt,specularIntensityMap:jt,transmission:j,transmissionMap:he,thicknessMap:V,gradientMap:At,opaque:x.transparent===!1&&x.blending===pi&&x.alphaToCoverage===!1,alphaMap:ht,alphaTest:Rt,alphaHash:Dt,combine:x.combine,mapUv:Mt&&m(x.map.channel),aoMapUv:pt&&m(x.aoMap.channel),lightMapUv:mt&&m(x.lightMap.channel),bumpMapUv:ft&&m(x.bumpMap.channel),normalMapUv:vt&&m(x.normalMap.channel),displacementMapUv:Xt&&m(x.displacementMap.channel),emissiveMapUv:Gt&&m(x.emissiveMap.channel),metalnessMapUv:Kt&&m(x.metalnessMap.channel),roughnessMapUv:ae&&m(x.roughnessMap.channel),anisotropyMapUv:ot&&m(x.anisotropyMap.channel),clearcoatMapUv:bt&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:St&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&m(x.sheenRoughnessMap.channel),specularMapUv:wt&&m(x.specularMap.channel),specularColorMapUv:Yt&&m(x.specularColorMap.channel),specularIntensityMapUv:jt&&m(x.specularIntensityMap.channel),transmissionMapUv:he&&m(x.transmissionMap.channel),thicknessMapUv:V&&m(x.thicknessMap.channel),alphaMapUv:ht&&m(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(vt||z),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(Mt||ht),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&vt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:G,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:X,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Zt,decodeVideoTexture:Mt&&x.map.isVideoTexture===!0&&xe.getTransfer(x.map.colorSpace)===Te,decodeVideoTextureEmissive:Gt&&x.emissiveMap.isVideoTexture===!0&&xe.getTransfer(x.emissiveMap.colorSpace)===Te,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===gn,flipSided:x.side===nn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:gt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&x.extensions.multiDraw===!0||rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Vt.vertexUv1s=c.has(1),Vt.vertexUv2s=c.has(2),Vt.vertexUv3s=c.has(3),c.clear(),Vt}function g(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)T.push(R),T.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(p(T,x),y(T,x),T.push(s.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function y(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function w(x){let T=f[x.type],R;if(T){let L=ii[T];R=id.clone(L.uniforms)}else R=x.uniforms;return R}function v(x,T){let R=u.get(T);return R!==void 0?++R.usedTimes:(R=new Sx(s,T,x,i),l.push(R),u.set(T,R)),R}function M(x){if(--x.usedTimes===0){let T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function S(x){a.remove(x)}function C(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:w,acquireProgram:v,releaseProgram:M,releaseShaderCache:S,programs:l,dispose:C}}function Ax(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Rx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Sd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ed(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,m,_,g,p){let y=s[t];return y===void 0?(y={id:h.id,object:h,geometry:f,material:m,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},s[t]=y):(y.id=h.id,y.object=h,y.geometry=f,y.material=m,y.materialVariant=o(h),y.groupOrder=_,y.renderOrder=h.renderOrder,y.z=g,y.group=p),t++,y}function c(h,f,m,_,g,p,y){y.reversedDepth===!0&&(g=-g);let w=a(h,f,m,_,g,p);m.transmission>0?n.push(w):m.transparent===!0?i.push(w):e.push(w)}function l(h,f,m,_,g,p){let y=a(h,f,m,_,g,p);m.transmission>0?n.unshift(y):m.transparent===!0?i.unshift(y):e.unshift(y)}function u(h,f){e.length>1&&e.sort(h||Rx),n.length>1&&n.sort(f||Sd),i.length>1&&i.sort(f||Sd)}function d(){for(let h=t,f=s.length;h<f;h++){let m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:d,sort:u}}function Cx(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Ed,s.set(n,[o])):i>=r.length?(o=new Ed,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Px(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new ie};break;case"SpotLight":e={position:new U,direction:new U,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function Ix(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Lx=0;function Fx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Dx(s){let t=new Px,e=Ix(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let i=new U,r=new _e,o=new _e;function a(l){let u=0,d=0,h=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,y=0,w=0,v=0,M=0,S=0,C=0,x=0,T=0,R=0;l.sort(Fx);for(let N=0,O=l.length;N<O;N++){let D=l[N],B=D.color,Y=D.intensity,W=D.distance,ut=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===zi?ut=D.shadow.map.texture:ut=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=B.r*Y,d+=B.g*Y,h+=B.b*Y;else if(D.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(D.sh.coefficients[$],Y);R++}else if(D.isSunLight){let $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let st=D.shadow,I=e.get(D);I.shadowIntensity=st.intensity,I.shadowBias=st.bias,I.shadowNormalBias=st.normalBias,I.shadowRadius=st.radius,I.shadowMapSize.copy(st.mapSize).multiply(st.getFrameExtents()),n.sunShadow[m]=I,n.sunShadowMap[m]=ut;let k=st.getViewportCount();for(let X=0;X<k;X++)n.sunShadowMatrix[_+X]=st.getMatrix(X),n.sunShadowCascade[_+X]=st._cascadeData[X];_+=k,m++}n.sun[f]=$,f++}else if(D.isDirectionalLight){let $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let st=D.shadow,I=e.get(D);I.shadowIntensity=st.intensity,I.shadowBias=st.bias,I.shadowNormalBias=st.normalBias,I.shadowRadius=st.radius,I.shadowMapSize=st.mapSize,n.directionalShadow[g]=I,n.directionalShadowMap[g]=ut,n.directionalShadowMatrix[g]=D.shadow.matrix,M++}n.directional[g]=$,g++}else if(D.isSpotLight){let $=t.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(B).multiplyScalar(Y),$.distance=W,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,n.spot[y]=$;let st=D.shadow;if(D.map&&(n.spotLightMap[x]=D.map,x++,st.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[y]=st.matrix,D.castShadow){let I=e.get(D);I.shadowIntensity=st.intensity,I.shadowBias=st.bias,I.shadowNormalBias=st.normalBias,I.shadowRadius=st.radius,I.shadowMapSize=st.mapSize,n.spotShadow[y]=I,n.spotShadowMap[y]=ut,C++}y++}else if(D.isRectAreaLight){let $=t.get(D);$.color.copy(B).multiplyScalar(Y),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),n.rectArea[w]=$,w++}else if(D.isPointLight){let $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){let st=D.shadow,I=e.get(D);I.shadowIntensity=st.intensity,I.shadowBias=st.bias,I.shadowNormalBias=st.normalBias,I.shadowRadius=st.radius,I.shadowMapSize=st.mapSize,I.shadowCameraNear=st.camera.near,I.shadowCameraFar=st.camera.far,n.pointShadow[p]=I,n.pointShadowMap[p]=ut,n.pointShadowMatrix[p]=D.shadow.matrix,S++}n.point[p]=$,p++}else if(D.isHemisphereLight){let $=t.get(D);$.skyColor.copy(D.color).multiplyScalar(Y),$.groundColor.copy(D.groundColor).multiplyScalar(Y),n.hemi[v]=$,v++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let L=n.hash;(L.sunLength!==f||L.directionalLength!==g||L.pointLength!==p||L.spotLength!==y||L.rectAreaLength!==w||L.hemiLength!==v||L.numSunShadows!==m||L.numDirectionalShadows!==M||L.numPointShadows!==S||L.numSpotShadows!==C||L.numSpotMaps!==x||L.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=g,n.spot.length=y,n.rectArea.length=w,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,L.sunLength=f,L.directionalLength=g,L.pointLength=p,L.spotLength=y,L.rectAreaLength=w,L.hemiLength=v,L.numSunShadows=m,L.numDirectionalShadows=M,L.numPointShadows=S,L.numSpotShadows=C,L.numSpotMaps=x,L.numLightProbes=R,n.version=Lx++)}function c(l,u){let d=0,h=0,f=0,m=0,_=0,g=0,p=u.matrixWorldInverse;for(let y=0,w=l.length;y<w;y++){let v=l[y];if(v.isSunLight){let M=n.sun[d];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),d++}else if(v.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),h++}else if(v.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:a,setupView:c,state:n}}function Td(s){let t=new Dx(s),e=[],n=[],i=[];function r(h){d.camera=h,e.length=0,n.length=0,i.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function c(h){i.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Nx(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Td(s),t.set(i,[a])):r>=o.length?(a=new Td(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ux=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bx=`uniform sampler2D shadow_pass;
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
}`,Ox=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],zx=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],wd=new _e,ro=new U,nh=new U;function kx(s,t,e){let n=new Hs,i=new xt,r=new xt,o=new De,a=new da,c=new fa,l={},u=e.maxTextureSize,d={[Hn]:nn,[nn]:Hn,[gn]:gn},h=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:Ux,fragmentShader:Bx}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ne;m.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Me(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Di;let p=this.type;this.render=function(S,C,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===gu&&(te("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Di);let T=s.getRenderTarget(),R=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),N=s.state;N.setBlending(ei),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let O=p!==this.type;O&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(B=>B.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,B=S.length;D<B;D++){let Y=S[D],W=Y.shadow;if(W===void 0){te("WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);let ut=W.getFrameExtents();i.multiply(ut),r.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ut.x),i.x=r.x*ut.x,W.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ut.y),i.y=r.y*ut.y,W.mapSize.y=r.y));let $=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=$,W.map===null||O===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===$s){if(Y.isPointLight){te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new pn(i.x,i.y,{format:zi,type:Wn,minFilter:en,magFilter:en,generateMipmaps:!1}),W.map.texture.name=Y.name+".shadowMap",W.map.depthTexture=new Ci(i.x,i.y,Pn),W.map.depthTexture.name=Y.name+".shadowMapDepth",W.map.depthTexture.format=$n,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=$e,W.map.depthTexture.magFilter=$e}else Y.isPointLight?(W.map=new _l(i.x),W.map.depthTexture=new sa(i.x,Vn)):(W.map=new pn(i.x,i.y),W.map.depthTexture=new Ci(i.x,i.y,Vn)),W.map.depthTexture.name=Y.name+".shadowMap",W.map.depthTexture.format=$n,this.type===Di?(W.map.depthTexture.compareFunction=$?ml:pl,W.map.depthTexture.minFilter=en,W.map.depthTexture.magFilter=en):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=$e,W.map.depthTexture.magFilter=$e);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==i.x||W.map.height!==i.y)&&W.map.setSize(i.x,i.y);let st=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();Y.isPointLight!==!0&&W.updateMatrices(Y,x);for(let I=0;I<st;I++){let k=W.getCamera(I);if(Y.isPointLight){let X=W.camera,et=W.matrix,tt=Y.distance||X.far;tt!==X.far&&(X.far=tt,X.updateProjectionMatrix()),ro.setFromMatrixPosition(Y.matrixWorld),X.position.copy(ro),nh.copy(X.position),nh.add(Ox[I]),X.up.copy(zx[I]),X.lookAt(nh),X.updateMatrixWorld(),et.makeTranslation(-ro.x,-ro.y,-ro.z),wd.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),W._frustum.setFromProjectionMatrix(wd,X.coordinateSystem,X.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,I),s.clear();else{I===0&&(s.setRenderTarget(W.map),s.clear());let X=W.getViewport(I);o.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),N.viewport(o)}n=W.getFrustum(I),v(C,x,k,Y,this.type)}W.isPointLightShadow!==!0&&this.type===$s&&y(W,x),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(T,R,L)};function y(S,C){let x=t.update(_);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new pn(i.x,i.y,{format:zi,type:Wn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(C,null,x,h,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(C,null,x,f,_,null)}function w(S,C,x,T){let R=null,L=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)R=L;else if(R=x.isPointLight===!0?c:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let N=R.uuid,O=C.uuid,D=l[N];D===void 0&&(D={},l[N]=D);let B=D[O];B===void 0&&(B=R.clone(),D[O]=B,C.addEventListener("dispose",M)),R=B}if(R.visible=C.visible,R.wireframe=C.wireframe,T===$s?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:d[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=s.properties.get(R);N.light=x}return R}function v(S,C,x,T,R){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===$s)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let O=t.update(S),D=S.material;if(Array.isArray(D)){let B=O.groups;for(let Y=0,W=B.length;Y<W;Y++){let ut=B[Y],$=D[ut.materialIndex];if($&&$.visible){let st=w(S,$,T,R);S.onBeforeShadow(s,S,C,x,O,st,ut),s.renderBufferDirect(x,null,O,st,S,ut),S.onAfterShadow(s,S,C,x,O,st,ut)}}}else if(D.visible){let B=w(S,D,T,R);S.onBeforeShadow(s,S,C,x,O,B,null),s.renderBufferDirect(x,null,O,B,S,null),S.onAfterShadow(s,S,C,x,O,B,null)}}let N=S.children;for(let O=0,D=N.length;O<D;O++)v(N[O],C,x,T,R)}function M(S){S.target.removeEventListener("dispose",M);for(let x in l){let T=l[x],R=S.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function Hx(s,t){function e(){let V=!1,At=new De,ht=null,Rt=new De(0,0,0,0);return{setMask:function(Dt){ht!==Dt&&!V&&(s.colorMask(Dt,Dt,Dt,Dt),ht=Dt)},setLocked:function(Dt){V=Dt},setClear:function(Dt,gt,Zt,Vt,Pe){Pe===!0&&(Dt*=Vt,gt*=Vt,Zt*=Vt),At.set(Dt,gt,Zt,Vt),Rt.equals(At)===!1&&(s.clearColor(Dt,gt,Zt,Vt),Rt.copy(At))},reset:function(){V=!1,ht=null,Rt.set(-1,0,0,0)}}}function n(){let V=!1,At=!1,ht=null,Rt=null,Dt=null;return{setReversed:function(gt){if(At!==gt){let Zt=t.get("EXT_clip_control");gt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),At=gt;let Vt=Dt;Dt=null,this.setClear(Vt)}},getReversed:function(){return At},setTest:function(gt){gt?P(s.DEPTH_TEST):G(s.DEPTH_TEST)},setMask:function(gt){ht!==gt&&!V&&(s.depthMask(gt),ht=gt)},setFunc:function(gt){if(At&&(gt=$u[gt]),Rt!==gt){switch(gt){case qo:s.depthFunc(s.NEVER);break;case Yo:s.depthFunc(s.ALWAYS);break;case Zo:s.depthFunc(s.LESS);break;case Ls:s.depthFunc(s.LEQUAL);break;case Jo:s.depthFunc(s.EQUAL);break;case $o:s.depthFunc(s.GEQUAL);break;case Ko:s.depthFunc(s.GREATER);break;case jo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Rt=gt}},setLocked:function(gt){V=gt},setClear:function(gt){Dt!==gt&&(Dt=gt,At&&(gt=1-gt),s.clearDepth(gt))},reset:function(){V=!1,ht=null,Rt=null,Dt=null,At=!1}}}function i(){let V=!1,At=null,ht=null,Rt=null,Dt=null,gt=null,Zt=null,Vt=null,Pe=null;return{setTest:function(Se){V||(Se?P(s.STENCIL_TEST):G(s.STENCIL_TEST))},setMask:function(Se){At!==Se&&!V&&(s.stencilMask(Se),At=Se)},setFunc:function(Se,Nn,Xn){(ht!==Se||Rt!==Nn||Dt!==Xn)&&(s.stencilFunc(Se,Nn,Xn),ht=Se,Rt=Nn,Dt=Xn)},setOp:function(Se,Nn,Xn){(gt!==Se||Zt!==Nn||Vt!==Xn)&&(s.stencilOp(Se,Nn,Xn),gt=Se,Zt=Nn,Vt=Xn)},setLocked:function(Se){V=Se},setClear:function(Se){Pe!==Se&&(s.clearStencil(Se),Pe=Se)},reset:function(){V=!1,At=null,ht=null,Rt=null,Dt=null,gt=null,Zt=null,Vt=null,Pe=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap,u={},d={},h={},f=new WeakMap,m=[],_=null,g=!1,p=null,y=null,w=null,v=null,M=null,S=null,C=null,x=new ie(0,0,0),T=0,R=!1,L=null,N=null,O=null,D=null,B=null,Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ut=0,$=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec($)[1]),W=ut>=1):$.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),W=ut>=2);let st=null,I={},k=s.getParameter(s.SCISSOR_BOX),X=s.getParameter(s.VIEWPORT),et=new De().fromArray(k),tt=new De().fromArray(X);function yt(V,At,ht,Rt){let Dt=new Uint8Array(4),gt=s.createTexture();s.bindTexture(V,gt),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Zt=0;Zt<ht;Zt++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(At,0,s.RGBA,1,1,Rt,0,s.RGBA,s.UNSIGNED_BYTE,Dt):s.texImage2D(At+Zt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Dt);return gt}let E={};E[s.TEXTURE_2D]=yt(s.TEXTURE_2D,s.TEXTURE_2D,1),E[s.TEXTURE_CUBE_MAP]=yt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),E[s.TEXTURE_2D_ARRAY]=yt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),E[s.TEXTURE_3D]=yt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),P(s.DEPTH_TEST),o.setFunc(Ls),ft(!1),vt(Mc),P(s.CULL_FACE),pt(ei);function P(V){u[V]!==!0&&(s.enable(V),u[V]=!0)}function G(V){u[V]!==!1&&(s.disable(V),u[V]=!1)}function Q(V,At){return h[V]!==At?(s.bindFramebuffer(V,At),h[V]=At,V===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=At),V===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=At),!0):!1}function rt(V,At){let ht=m,Rt=!1;if(V){ht=f.get(At),ht===void 0&&(ht=[],f.set(At,ht));let Dt=V.textures;if(ht.length!==Dt.length||ht[0]!==s.COLOR_ATTACHMENT0){for(let gt=0,Zt=Dt.length;gt<Zt;gt++)ht[gt]=s.COLOR_ATTACHMENT0+gt;ht.length=Dt.length,Rt=!0}}else ht[0]!==s.BACK&&(ht[0]=s.BACK,Rt=!0);Rt&&s.drawBuffers(ht)}function Mt(V){return _!==V?(s.useProgram(V),_=V,!0):!1}let oe={[es]:s.FUNC_ADD,[_u]:s.FUNC_SUBTRACT,[vu]:s.FUNC_REVERSE_SUBTRACT};oe[yu]=s.MIN,oe[Mu]=s.MAX;let it={[bu]:s.ZERO,[Su]:s.ONE,[Eu]:s.SRC_COLOR,[Ec]:s.SRC_ALPHA,[Pu]:s.SRC_ALPHA_SATURATE,[Ru]:s.DST_COLOR,[wu]:s.DST_ALPHA,[Tu]:s.ONE_MINUS_SRC_COLOR,[Tc]:s.ONE_MINUS_SRC_ALPHA,[Cu]:s.ONE_MINUS_DST_COLOR,[Au]:s.ONE_MINUS_DST_ALPHA,[Iu]:s.CONSTANT_COLOR,[Lu]:s.ONE_MINUS_CONSTANT_COLOR,[Fu]:s.CONSTANT_ALPHA,[Du]:s.ONE_MINUS_CONSTANT_ALPHA};function pt(V,At,ht,Rt,Dt,gt,Zt,Vt,Pe,Se){if(V===ei){g===!0&&(G(s.BLEND),g=!1);return}if(g===!1&&(P(s.BLEND),g=!0),V!==xu){if(V!==p||Se!==R){if((y!==es||M!==es)&&(s.blendEquation(s.FUNC_ADD),y=es,M=es),Se)switch(V){case pi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ni:s.blendFunc(s.ONE,s.ONE);break;case bc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Qt("WebGLState: Invalid blending: ",V);break}else switch(V){case pi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ni:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case bc:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sc:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",V);break}w=null,v=null,S=null,C=null,x.set(0,0,0),T=0,p=V,R=Se}return}Dt=Dt||At,gt=gt||ht,Zt=Zt||Rt,(At!==y||Dt!==M)&&(s.blendEquationSeparate(oe[At],oe[Dt]),y=At,M=Dt),(ht!==w||Rt!==v||gt!==S||Zt!==C)&&(s.blendFuncSeparate(it[ht],it[Rt],it[gt],it[Zt]),w=ht,v=Rt,S=gt,C=Zt),(Vt.equals(x)===!1||Pe!==T)&&(s.blendColor(Vt.r,Vt.g,Vt.b,Pe),x.copy(Vt),T=Pe),p=V,R=!1}function mt(V,At){V.side===gn?G(s.CULL_FACE):P(s.CULL_FACE);let ht=V.side===nn;At&&(ht=!ht),ft(ht),V.blending===pi&&V.transparent===!1?pt(ei):pt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let Rt=V.stencilWrite;a.setTest(Rt),Rt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Gt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?P(s.SAMPLE_ALPHA_TO_COVERAGE):G(s.SAMPLE_ALPHA_TO_COVERAGE)}function ft(V){L!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),L=V)}function vt(V){V!==pu?(P(s.CULL_FACE),V!==N&&(V===Mc?s.cullFace(s.BACK):V===mu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):G(s.CULL_FACE),N=V}function Xt(V){V!==O&&(W&&s.lineWidth(V),O=V)}function Gt(V,At,ht){V?(P(s.POLYGON_OFFSET_FILL),(D!==At||B!==ht)&&(D=At,B=ht,o.getReversed()&&(At=-At),s.polygonOffset(At,ht))):G(s.POLYGON_OFFSET_FILL)}function Kt(V){V?P(s.SCISSOR_TEST):G(s.SCISSOR_TEST)}function ae(V){V===void 0&&(V=s.TEXTURE0+Y-1),st!==V&&(s.activeTexture(V),st=V)}function z(V,At,ht){ht===void 0&&(st===null?ht=s.TEXTURE0+Y-1:ht=st);let Rt=I[ht];Rt===void 0&&(Rt={type:void 0,texture:void 0},I[ht]=Rt),(Rt.type!==V||Rt.texture!==At)&&(st!==ht&&(s.activeTexture(ht),st=ht),s.bindTexture(V,At||E[V]),Rt.type=V,Rt.texture=At)}function be(){let V=I[st];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function me(){try{s.compressedTexImage2D(...arguments)}catch(V){Qt("WebGLState:",V)}}function F(){try{s.compressedTexImage3D(...arguments)}catch(V){Qt("WebGLState:",V)}}function b(){try{s.texSubImage2D(...arguments)}catch(V){Qt("WebGLState:",V)}}function q(){try{s.texSubImage3D(...arguments)}catch(V){Qt("WebGLState:",V)}}function j(){try{s.compressedTexSubImage2D(...arguments)}catch(V){Qt("WebGLState:",V)}}function ot(){try{s.compressedTexSubImage3D(...arguments)}catch(V){Qt("WebGLState:",V)}}function bt(){try{s.texStorage2D(...arguments)}catch(V){Qt("WebGLState:",V)}}function St(){try{s.texStorage3D(...arguments)}catch(V){Qt("WebGLState:",V)}}function at(){try{s.texImage2D(...arguments)}catch(V){Qt("WebGLState:",V)}}function dt(){try{s.texImage3D(...arguments)}catch(V){Qt("WebGLState:",V)}}function Tt(V){return d[V]!==void 0?d[V]:s.getParameter(V)}function qt(V,At){d[V]!==At&&(s.pixelStorei(V,At),d[V]=At)}function Ct(V){et.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),et.copy(V))}function wt(V){tt.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),tt.copy(V))}function Yt(V,At){let ht=l.get(At);ht===void 0&&(ht=new WeakMap,l.set(At,ht));let Rt=ht.get(V);Rt===void 0&&(Rt=s.getUniformBlockIndex(At,V.name),ht.set(V,Rt))}function jt(V,At){let Rt=l.get(At).get(V);c.get(At)!==Rt&&(s.uniformBlockBinding(At,Rt,V.__bindingPointIndex),c.set(At,Rt))}function he(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},d={},st=null,I={},h={},f=new WeakMap,m=[],_=null,g=!1,p=null,y=null,w=null,v=null,M=null,S=null,C=null,x=new ie(0,0,0),T=0,R=!1,L=null,N=null,O=null,D=null,B=null,et.set(0,0,s.canvas.width,s.canvas.height),tt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:P,disable:G,bindFramebuffer:Q,drawBuffers:rt,useProgram:Mt,setBlending:pt,setMaterial:mt,setFlipSided:ft,setCullFace:vt,setLineWidth:Xt,setPolygonOffset:Gt,setScissorTest:Kt,activeTexture:ae,bindTexture:z,unbindTexture:be,compressedTexImage2D:me,compressedTexImage3D:F,texImage2D:at,texImage3D:dt,pixelStorei:qt,getParameter:Tt,updateUBOMapping:Yt,uniformBlockBinding:jt,texStorage2D:bt,texStorage3D:St,texSubImage2D:b,texSubImage3D:q,compressedTexSubImage2D:j,compressedTexSubImage3D:ot,scissor:Ct,viewport:wt,reset:he}}function Gx(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xt,u=new WeakMap,d=new Set,h,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(F,b){return m?new OffscreenCanvas(F,b):br("canvas")}function g(F,b,q){let j=1,ot=me(F);if((ot.width>q||ot.height>q)&&(j=q/Math.max(ot.width,ot.height)),j<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let bt=Math.floor(j*ot.width),St=Math.floor(j*ot.height);h===void 0&&(h=_(bt,St));let at=b?_(bt,St):h;return at.width=bt,at.height=St,at.getContext("2d").drawImage(F,0,0,bt,St),te("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+bt+"x"+St+")."),at}else return"data"in F&&te("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),F;return F}function p(F){return F.generateMipmaps}function y(F){s.generateMipmap(F)}function w(F){return F.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?s.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(F,b,q,j,ot,bt=!1){if(F!==null){if(s[F]!==void 0)return s[F];te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let St;j&&(St=t.get("EXT_texture_norm16"),St||te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let at=b;if(b===s.RED&&(q===s.FLOAT&&(at=s.R32F),q===s.HALF_FLOAT&&(at=s.R16F),q===s.UNSIGNED_BYTE&&(at=s.R8),q===s.UNSIGNED_SHORT&&St&&(at=St.R16_EXT),q===s.SHORT&&St&&(at=St.R16_SNORM_EXT)),b===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(at=s.R8UI),q===s.UNSIGNED_SHORT&&(at=s.R16UI),q===s.UNSIGNED_INT&&(at=s.R32UI),q===s.BYTE&&(at=s.R8I),q===s.SHORT&&(at=s.R16I),q===s.INT&&(at=s.R32I)),b===s.RG&&(q===s.FLOAT&&(at=s.RG32F),q===s.HALF_FLOAT&&(at=s.RG16F),q===s.UNSIGNED_BYTE&&(at=s.RG8),q===s.UNSIGNED_SHORT&&St&&(at=St.RG16_EXT),q===s.SHORT&&St&&(at=St.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(at=s.RG8UI),q===s.UNSIGNED_SHORT&&(at=s.RG16UI),q===s.UNSIGNED_INT&&(at=s.RG32UI),q===s.BYTE&&(at=s.RG8I),q===s.SHORT&&(at=s.RG16I),q===s.INT&&(at=s.RG32I)),b===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(at=s.RGB8UI),q===s.UNSIGNED_SHORT&&(at=s.RGB16UI),q===s.UNSIGNED_INT&&(at=s.RGB32UI),q===s.BYTE&&(at=s.RGB8I),q===s.SHORT&&(at=s.RGB16I),q===s.INT&&(at=s.RGB32I)),b===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(at=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(at=s.RGBA16UI),q===s.UNSIGNED_INT&&(at=s.RGBA32UI),q===s.BYTE&&(at=s.RGBA8I),q===s.SHORT&&(at=s.RGBA16I),q===s.INT&&(at=s.RGBA32I)),b===s.RGB&&(q===s.UNSIGNED_SHORT&&St&&(at=St.RGB16_EXT),q===s.SHORT&&St&&(at=St.RGB16_SNORM_EXT),q===s.UNSIGNED_INT_5_9_9_9_REV&&(at=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(at=s.R11F_G11F_B10F)),b===s.RGBA){let dt=bt?Mr:xe.getTransfer(ot);q===s.FLOAT&&(at=s.RGBA32F),q===s.HALF_FLOAT&&(at=s.RGBA16F),q===s.UNSIGNED_BYTE&&(at=dt===Te?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT&&St&&(at=St.RGBA16_EXT),q===s.SHORT&&St&&(at=St.RGBA16_SNORM_EXT),q===s.UNSIGNED_SHORT_4_4_4_4&&(at=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(at=s.RGB5_A1)}return(at===s.R16F||at===s.R32F||at===s.RG16F||at===s.RG32F||at===s.RGBA16F||at===s.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function M(F,b){let q;return F?b===null||b===Vn||b===Qs?q=s.DEPTH24_STENCIL8:b===Pn?q=s.DEPTH32F_STENCIL8:b===js&&(q=s.DEPTH24_STENCIL8,te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Vn||b===Qs?q=s.DEPTH_COMPONENT24:b===Pn?q=s.DEPTH_COMPONENT32F:b===js&&(q=s.DEPTH_COMPONENT16),q}function S(F,b){return p(F)===!0||F.isFramebufferTexture&&F.minFilter!==$e&&F.minFilter!==en?Math.log2(Math.max(b.width,b.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?b.mipmaps.length:1}function C(F){let b=F.target;b.removeEventListener("dispose",C),T(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&d.delete(b)}function x(F){let b=F.target;b.removeEventListener("dispose",x),L(b)}function T(F){let b=n.get(F);if(b.__webglInit===void 0)return;let q=F.source,j=f.get(q);if(j){let ot=j[b.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&R(F),Object.keys(j).length===0&&f.delete(q)}n.remove(F)}function R(F){let b=n.get(F);s.deleteTexture(b.__webglTexture);let q=F.source,j=f.get(q);delete j[b.__cacheKey],o.memory.textures--}function L(F){let b=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let ot=0;ot<b.__webglFramebuffer[j].length;ot++)s.deleteFramebuffer(b.__webglFramebuffer[j][ot]);else s.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)s.deleteFramebuffer(b.__webglFramebuffer[j]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let q=F.textures;for(let j=0,ot=q.length;j<ot;j++){let bt=n.get(q[j]);bt.__webglTexture&&(s.deleteTexture(bt.__webglTexture),o.memory.textures--),n.remove(q[j])}n.remove(F)}let N=0;function O(){N=0}function D(){return N}function B(F){N=F}function Y(){let F=N;return F>=i.maxTextures&&te("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+i.maxTextures),N+=1,F}function W(F){let b=[];return b.push(F.wrapS),b.push(F.wrapT),b.push(F.wrapR||0),b.push(F.magFilter),b.push(F.minFilter),b.push(F.anisotropy),b.push(F.internalFormat),b.push(F.format),b.push(F.type),b.push(F.generateMipmaps),b.push(F.premultiplyAlpha),b.push(F.flipY),b.push(F.unpackAlignment),b.push(F.colorSpace),b.join()}function ut(F,b){let q=n.get(F);if(F.isVideoTexture&&z(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&q.__version!==F.version){let j=F.image;if(j===null)te("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)te("WebGLRenderer: Texture marked for update but image is incomplete");else{G(q,F,b);return}}else F.isExternalTexture&&(q.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+b)}function $(F,b){let q=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&q.__version!==F.version){G(q,F,b);return}else F.isExternalTexture&&(q.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+b)}function st(F,b){let q=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&q.__version!==F.version){G(q,F,b);return}e.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+b)}function I(F,b){let q=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&q.__version!==F.version){Q(q,F,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+b)}let k={[Fs]:s.REPEAT,[Jn]:s.CLAMP_TO_EDGE,[Qo]:s.MIRRORED_REPEAT},X={[$e]:s.NEAREST,[Bu]:s.NEAREST_MIPMAP_NEAREST,[$r]:s.NEAREST_MIPMAP_LINEAR,[en]:s.LINEAR,[Pa]:s.LINEAR_MIPMAP_NEAREST,[Bi]:s.LINEAR_MIPMAP_LINEAR},et={[Hu]:s.NEVER,[qu]:s.ALWAYS,[Gu]:s.LESS,[pl]:s.LEQUAL,[Vu]:s.EQUAL,[ml]:s.GEQUAL,[Wu]:s.GREATER,[Xu]:s.NOTEQUAL};function tt(F,b){if(b.type===Pn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===en||b.magFilter===Pa||b.magFilter===$r||b.magFilter===Bi||b.minFilter===en||b.minFilter===Pa||b.minFilter===$r||b.minFilter===Bi)&&te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(F,s.TEXTURE_WRAP_S,k[b.wrapS]),s.texParameteri(F,s.TEXTURE_WRAP_T,k[b.wrapT]),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,k[b.wrapR]),s.texParameteri(F,s.TEXTURE_MAG_FILTER,X[b.magFilter]),s.texParameteri(F,s.TEXTURE_MIN_FILTER,X[b.minFilter]),b.compareFunction&&(s.texParameteri(F,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(F,s.TEXTURE_COMPARE_FUNC,et[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===$e||b.minFilter!==$r&&b.minFilter!==Bi||b.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(F,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function yt(F,b){let q=!1;F.__webglInit===void 0&&(F.__webglInit=!0,b.addEventListener("dispose",C));let j=b.source,ot=f.get(j);ot===void 0&&(ot={},f.set(j,ot));let bt=W(b);if(bt!==F.__cacheKey){ot[bt]===void 0&&(ot[bt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ot[bt].usedTimes++;let St=ot[F.__cacheKey];St!==void 0&&(ot[F.__cacheKey].usedTimes--,St.usedTimes===0&&R(b)),F.__cacheKey=bt,F.__webglTexture=ot[bt].texture}return q}function E(F,b,q){return Math.floor(Math.floor(F/q)/b)}function P(F,b,q,j){let bt=F.updateRanges;if(bt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,q,j,b.data);else{bt.sort((qt,Ct)=>qt.start-Ct.start);let St=0;for(let qt=1;qt<bt.length;qt++){let Ct=bt[St],wt=bt[qt],Yt=Ct.start+Ct.count,jt=E(wt.start,b.width,4),he=E(Ct.start,b.width,4);wt.start<=Yt+1&&jt===he&&E(wt.start+wt.count-1,b.width,4)===jt?Ct.count=Math.max(Ct.count,wt.start+wt.count-Ct.start):(++St,bt[St]=wt)}bt.length=St+1;let at=e.getParameter(s.UNPACK_ROW_LENGTH),dt=e.getParameter(s.UNPACK_SKIP_PIXELS),Tt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let qt=0,Ct=bt.length;qt<Ct;qt++){let wt=bt[qt],Yt=Math.floor(wt.start/4),jt=Math.ceil(wt.count/4),he=Yt%b.width,V=Math.floor(Yt/b.width),At=jt,ht=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,he),e.pixelStorei(s.UNPACK_SKIP_ROWS,V),e.texSubImage2D(s.TEXTURE_2D,0,he,V,At,ht,q,j,b.data)}F.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,at),e.pixelStorei(s.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Tt)}}function G(F,b,q){let j=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=s.TEXTURE_3D);let ot=yt(F,b),bt=b.source;e.bindTexture(j,F.__webglTexture,s.TEXTURE0+q);let St=n.get(bt);if(bt.version!==St.__version||ot===!0){if(e.activeTexture(s.TEXTURE0+q),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ht=xe.getPrimaries(xe.workingColorSpace),Rt=b.colorSpace===mi?null:xe.getPrimaries(b.colorSpace),Dt=b.colorSpace===mi||ht===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt)}e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let dt=g(b.image,!1,i.maxTextureSize);dt=be(b,dt);let Tt=r.convert(b.format,b.colorSpace),qt=r.convert(b.type),Ct=v(b.internalFormat,Tt,qt,b.normalized,b.colorSpace,b.isVideoTexture);tt(j,b);let wt,Yt=b.mipmaps,jt=b.isVideoTexture!==!0,he=St.__version===void 0||ot===!0,V=bt.dataReady,At=S(b,dt);if(b.isDepthTexture)Ct=M(b.format===Oi,b.type),he&&(jt?e.texStorage2D(s.TEXTURE_2D,1,Ct,dt.width,dt.height):e.texImage2D(s.TEXTURE_2D,0,Ct,dt.width,dt.height,0,Tt,qt,null));else if(b.isDataTexture)if(Yt.length>0){jt&&he&&e.texStorage2D(s.TEXTURE_2D,At,Ct,Yt[0].width,Yt[0].height);for(let ht=0,Rt=Yt.length;ht<Rt;ht++)wt=Yt[ht],jt?V&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,wt.width,wt.height,Tt,qt,wt.data):e.texImage2D(s.TEXTURE_2D,ht,Ct,wt.width,wt.height,0,Tt,qt,wt.data);b.generateMipmaps=!1}else jt?(he&&e.texStorage2D(s.TEXTURE_2D,At,Ct,dt.width,dt.height),V&&P(b,dt,Tt,qt)):e.texImage2D(s.TEXTURE_2D,0,Ct,dt.width,dt.height,0,Tt,qt,dt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){jt&&he&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,Ct,Yt[0].width,Yt[0].height,dt.depth);for(let ht=0,Rt=Yt.length;ht<Rt;ht++)if(wt=Yt[ht],b.format!==In)if(Tt!==null)if(jt){if(V)if(b.layerUpdates.size>0){let Dt=Xc(wt.width,wt.height,b.format,b.type);for(let gt of b.layerUpdates){let Zt=wt.data.subarray(gt*Dt/wt.data.BYTES_PER_ELEMENT,(gt+1)*Dt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,gt,wt.width,wt.height,1,Tt,Zt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,wt.width,wt.height,dt.depth,Tt,wt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ht,Ct,wt.width,wt.height,dt.depth,0,wt.data,0,0);else te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?V&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,wt.width,wt.height,dt.depth,Tt,qt,wt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ht,Ct,wt.width,wt.height,dt.depth,0,Tt,qt,wt.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{jt&&he&&e.texStorage2D(s.TEXTURE_2D,At,Ct,Yt[0].width,Yt[0].height);for(let ht=0,Rt=Yt.length;ht<Rt;ht++)wt=Yt[ht],b.format!==In?Tt!==null?jt?V&&e.compressedTexSubImage2D(s.TEXTURE_2D,ht,0,0,wt.width,wt.height,Tt,wt.data):e.compressedTexImage2D(s.TEXTURE_2D,ht,Ct,wt.width,wt.height,0,wt.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?V&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,wt.width,wt.height,Tt,qt,wt.data):e.texImage2D(s.TEXTURE_2D,ht,Ct,wt.width,wt.height,0,Tt,qt,wt.data)}else if(b.isDataArrayTexture)if(jt){if(he&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,Ct,dt.width,dt.height,dt.depth),V)if(b.layerUpdates.size>0){let ht=Xc(dt.width,dt.height,b.format,b.type);for(let Rt of b.layerUpdates){let Dt=dt.data.subarray(Rt*ht/dt.data.BYTES_PER_ELEMENT,(Rt+1)*ht/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Rt,dt.width,dt.height,1,Tt,qt,Dt)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Tt,qt,dt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ct,dt.width,dt.height,dt.depth,0,Tt,qt,dt.data);else if(b.isData3DTexture)jt?(he&&e.texStorage3D(s.TEXTURE_3D,At,Ct,dt.width,dt.height,dt.depth),V&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Tt,qt,dt.data)):e.texImage3D(s.TEXTURE_3D,0,Ct,dt.width,dt.height,dt.depth,0,Tt,qt,dt.data);else if(b.isFramebufferTexture){if(he)if(jt)e.texStorage2D(s.TEXTURE_2D,At,Ct,dt.width,dt.height);else{let ht=dt.width,Rt=dt.height;for(let Dt=0;Dt<At;Dt++)e.texImage2D(s.TEXTURE_2D,Dt,Ct,ht,Rt,0,Tt,qt,null),ht>>=1,Rt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){let ht=s.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),dt.parentNode!==ht){ht.appendChild(dt),d.add(b),ht.onpaint=Rt=>{let Dt=Rt.changedElements;for(let gt of d)Dt.includes(gt.image)&&(gt.needsUpdate=!0)},ht.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,dt);else{let Dt=s.RGBA,gt=s.RGBA,Zt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Dt,gt,Zt,dt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Yt.length>0){if(jt&&he){let ht=me(Yt[0]);e.texStorage2D(s.TEXTURE_2D,At,Ct,ht.width,ht.height)}for(let ht=0,Rt=Yt.length;ht<Rt;ht++)wt=Yt[ht],jt?V&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,Tt,qt,wt):e.texImage2D(s.TEXTURE_2D,ht,Ct,Tt,qt,wt);b.generateMipmaps=!1}else if(jt){if(he){let ht=me(dt);e.texStorage2D(s.TEXTURE_2D,At,Ct,ht.width,ht.height)}V&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Tt,qt,dt)}else e.texImage2D(s.TEXTURE_2D,0,Ct,Tt,qt,dt);p(b)&&y(j),St.__version=bt.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function Q(F,b,q){if(b.image.length!==6)return;let j=yt(F,b),ot=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+q);let bt=n.get(ot);if(ot.version!==bt.__version||j===!0){e.activeTexture(s.TEXTURE0+q);let St=xe.getPrimaries(xe.workingColorSpace),at=b.colorSpace===mi?null:xe.getPrimaries(b.colorSpace),dt=b.colorSpace===mi||St===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Tt=b.isCompressedTexture||b.image[0].isCompressedTexture,qt=b.image[0]&&b.image[0].isDataTexture,Ct=[];for(let gt=0;gt<6;gt++)!Tt&&!qt?Ct[gt]=g(b.image[gt],!0,i.maxCubemapSize):Ct[gt]=qt?b.image[gt].image:b.image[gt],Ct[gt]=be(b,Ct[gt]);let wt=Ct[0],Yt=r.convert(b.format,b.colorSpace),jt=r.convert(b.type),he=v(b.internalFormat,Yt,jt,b.normalized,b.colorSpace),V=b.isVideoTexture!==!0,At=bt.__version===void 0||j===!0,ht=ot.dataReady,Rt=S(b,wt);tt(s.TEXTURE_CUBE_MAP,b);let Dt;if(Tt){V&&At&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,he,wt.width,wt.height);for(let gt=0;gt<6;gt++){Dt=Ct[gt].mipmaps;for(let Zt=0;Zt<Dt.length;Zt++){let Vt=Dt[Zt];b.format!==In?Yt!==null?V?ht&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt,0,0,Vt.width,Vt.height,Yt,Vt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt,he,Vt.width,Vt.height,0,Vt.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt,0,0,Vt.width,Vt.height,Yt,jt,Vt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt,he,Vt.width,Vt.height,0,Yt,jt,Vt.data)}}}else{if(Dt=b.mipmaps,V&&At){Dt.length>0&&Rt++;let gt=me(Ct[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,he,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(qt){V?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ct[gt].width,Ct[gt].height,Yt,jt,Ct[gt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,he,Ct[gt].width,Ct[gt].height,0,Yt,jt,Ct[gt].data);for(let Zt=0;Zt<Dt.length;Zt++){let Pe=Dt[Zt].image[gt].image;V?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt+1,0,0,Pe.width,Pe.height,Yt,jt,Pe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt+1,he,Pe.width,Pe.height,0,Yt,jt,Pe.data)}}else{V?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Yt,jt,Ct[gt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,he,Yt,jt,Ct[gt]);for(let Zt=0;Zt<Dt.length;Zt++){let Vt=Dt[Zt];V?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt+1,0,0,Yt,jt,Vt.image[gt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt+1,he,Yt,jt,Vt.image[gt])}}}p(b)&&y(s.TEXTURE_CUBE_MAP),bt.__version=ot.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function rt(F,b,q,j,ot,bt){let St=r.convert(q.format,q.colorSpace),at=r.convert(q.type),dt=v(q.internalFormat,St,at,q.normalized,q.colorSpace),Tt=n.get(b),qt=n.get(q);if(qt.__renderTarget=b,!Tt.__hasExternalTextures){let Ct=Math.max(1,b.width>>bt),wt=Math.max(1,b.height>>bt);ot===s.TEXTURE_3D||ot===s.TEXTURE_2D_ARRAY?e.texImage3D(ot,bt,dt,Ct,wt,b.depth,0,St,at,null):e.texImage2D(ot,bt,dt,Ct,wt,0,St,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,F),ae(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,ot,qt.__webglTexture,0,Kt(b)):(ot===s.TEXTURE_2D||ot>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,ot,qt.__webglTexture,bt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Mt(F,b,q){if(s.bindRenderbuffer(s.RENDERBUFFER,F),b.depthBuffer){let j=b.depthTexture,ot=j&&j.isDepthTexture?j.type:null,bt=M(b.stencilBuffer,ot),St=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ae(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Kt(b),bt,b.width,b.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt(b),bt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,bt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,F)}else{let j=b.textures;for(let ot=0;ot<j.length;ot++){let bt=j[ot],St=r.convert(bt.format,bt.colorSpace),at=r.convert(bt.type),dt=v(bt.internalFormat,St,at,bt.normalized,bt.colorSpace);ae(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Kt(b),dt,b.width,b.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt(b),dt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,dt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function oe(F,b,q){let j=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,F),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ot=n.get(b.depthTexture);if(ot.__renderTarget=b,(!ot.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),j){if(ot.__webglInit===void 0&&(ot.__webglInit=!0,b.depthTexture.addEventListener("dispose",C)),ot.__webglTexture===void 0){ot.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,ot.__webglTexture),tt(s.TEXTURE_CUBE_MAP,b.depthTexture);let Tt=r.convert(b.depthTexture.format),qt=r.convert(b.depthTexture.type),Ct;b.depthTexture.format===$n?Ct=s.DEPTH_COMPONENT24:b.depthTexture.format===Oi&&(Ct=s.DEPTH24_STENCIL8);for(let wt=0;wt<6;wt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Ct,b.width,b.height,0,Tt,qt,null)}}else ut(b.depthTexture,0);let bt=ot.__webglTexture,St=Kt(b),at=j?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,dt=b.depthTexture.format===Oi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===$n)ae(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,at,bt,0,St):s.framebufferTexture2D(s.FRAMEBUFFER,dt,at,bt,0);else if(b.depthTexture.format===Oi)ae(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,at,bt,0,St):s.framebufferTexture2D(s.FRAMEBUFFER,dt,at,bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(F){let b=n.get(F),q=F.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==F.depthTexture){let j=F.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){let ot=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",ot)};j.addEventListener("dispose",ot),b.__depthDisposeCallback=ot}b.__boundDepthTexture=j}if(F.depthTexture&&!b.__autoAllocateDepthBuffer)if(q)for(let j=0;j<6;j++)oe(b.__webglFramebuffer[j],F,j);else{let j=F.texture.mipmaps;j&&j.length>0?oe(b.__webglFramebuffer[0],F,0):oe(b.__webglFramebuffer,F,0)}else if(q){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=s.createRenderbuffer(),Mt(b.__webglDepthbuffer[j],F,!1);else{let ot=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=b.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,bt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ot,s.RENDERBUFFER,bt)}}else{let j=F.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Mt(b.__webglDepthbuffer,F,!1);else{let ot=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,bt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ot,s.RENDERBUFFER,bt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function pt(F,b,q){let j=n.get(F);b!==void 0&&rt(j.__webglFramebuffer,F,F.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&it(F)}function mt(F){let b=F.texture,q=n.get(F),j=n.get(b);F.addEventListener("dispose",x);let ot=F.textures,bt=F.isWebGLCubeRenderTarget===!0,St=ot.length>1;if(St||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=b.version,o.memory.textures++),bt){q.__webglFramebuffer=[];for(let at=0;at<6;at++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[at]=[];for(let dt=0;dt<b.mipmaps.length;dt++)q.__webglFramebuffer[at][dt]=s.createFramebuffer()}else q.__webglFramebuffer[at]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let at=0;at<b.mipmaps.length;at++)q.__webglFramebuffer[at]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(St)for(let at=0,dt=ot.length;at<dt;at++){let Tt=n.get(ot[at]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=s.createTexture(),o.memory.textures++)}if(F.samples>0&&ae(F)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let at=0;at<ot.length;at++){let dt=ot[at];q.__webglColorRenderbuffer[at]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[at]);let Tt=r.convert(dt.format,dt.colorSpace),qt=r.convert(dt.type),Ct=v(dt.internalFormat,Tt,qt,dt.normalized,dt.colorSpace,F.isXRRenderTarget===!0),wt=Kt(F);s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,Ct,F.width,F.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,q.__webglColorRenderbuffer[at])}s.bindRenderbuffer(s.RENDERBUFFER,null),F.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Mt(q.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(bt){e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),tt(s.TEXTURE_CUBE_MAP,b);for(let at=0;at<6;at++)if(b.mipmaps&&b.mipmaps.length>0)for(let dt=0;dt<b.mipmaps.length;dt++)rt(q.__webglFramebuffer[at][dt],F,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,dt);else rt(q.__webglFramebuffer[at],F,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(b)&&y(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let at=0,dt=ot.length;at<dt;at++){let Tt=ot[at],qt=n.get(Tt),Ct=s.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ct=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Ct,qt.__webglTexture),tt(Ct,Tt),rt(q.__webglFramebuffer,F,Tt,s.COLOR_ATTACHMENT0+at,Ct,0),p(Tt)&&y(Ct)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(at=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,j.__webglTexture),tt(at,b),b.mipmaps&&b.mipmaps.length>0)for(let dt=0;dt<b.mipmaps.length;dt++)rt(q.__webglFramebuffer[dt],F,b,s.COLOR_ATTACHMENT0,at,dt);else rt(q.__webglFramebuffer,F,b,s.COLOR_ATTACHMENT0,at,0);p(b)&&y(at),e.unbindTexture()}F.depthBuffer&&it(F)}function ft(F){let b=F.textures;for(let q=0,j=b.length;q<j;q++){let ot=b[q];if(p(ot)){let bt=w(F),St=n.get(ot).__webglTexture;e.bindTexture(bt,St),y(bt),e.unbindTexture()}}}let vt=[],Xt=[];function Gt(F){if(F.samples>0){if(ae(F)===!1){let b=F.textures,q=F.width,j=F.height,ot=s.COLOR_BUFFER_BIT,bt=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=n.get(F),at=b.length>1;if(at)for(let Tt=0;Tt<b.length;Tt++)e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);let dt=F.texture.mipmaps;dt&&dt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Tt=0;Tt<b.length;Tt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ot|=s.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ot|=s.STENCIL_BUFFER_BIT)),at){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,St.__webglColorRenderbuffer[Tt]);let qt=n.get(b[Tt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,qt,0)}s.blitFramebuffer(0,0,q,j,0,0,q,j,ot,s.NEAREST),c===!0&&(vt.length=0,Xt.length=0,vt.push(s.COLOR_ATTACHMENT0+Tt),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(vt.push(bt),Xt.push(bt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Xt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,vt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),at)for(let Tt=0;Tt<b.length;Tt++){e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,St.__webglColorRenderbuffer[Tt]);let qt=n.get(b[Tt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,qt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&c){let b=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Kt(F){return Math.min(i.maxSamples,F.samples)}function ae(F){let b=n.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function z(F){let b=o.render.frame;u.get(F)!==b&&(u.set(F,b),F.update())}function be(F,b){let q=F.colorSpace,j=F.format,ot=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||q!==yr&&q!==mi&&(xe.getTransfer(q)===Te?(j!==In||ot!==xn)&&te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",q)),b}function me(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(l.width=F.naturalWidth||F.width,l.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(l.width=F.displayWidth,l.height=F.displayHeight):(l.width=F.width,l.height=F.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=O,this.getTextureUnits=D,this.setTextureUnits=B,this.setTexture2D=ut,this.setTexture2DArray=$,this.setTexture3D=st,this.setTextureCube=I,this.rebindTextures=pt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=ae,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Vx(s,t){function e(n,i=mi){let r,o=xe.getTransfer(i);if(n===xn)return s.UNSIGNED_BYTE;if(n===La)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Fa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Nc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Uc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fc)return s.BYTE;if(n===Dc)return s.SHORT;if(n===js)return s.UNSIGNED_SHORT;if(n===Ia)return s.INT;if(n===Vn)return s.UNSIGNED_INT;if(n===Pn)return s.FLOAT;if(n===Wn)return s.HALF_FLOAT;if(n===Bc)return s.ALPHA;if(n===Oc)return s.RGB;if(n===In)return s.RGBA;if(n===$n)return s.DEPTH_COMPONENT;if(n===Oi)return s.DEPTH_STENCIL;if(n===Da)return s.RED;if(n===Na)return s.RED_INTEGER;if(n===zi)return s.RG;if(n===Ua)return s.RG_INTEGER;if(n===Ba)return s.RGBA_INTEGER;if(n===Kr||n===jr||n===Qr||n===to)if(o===Te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oa||n===za||n===ka||n===Ha)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ga||n===Va||n===Wa||n===Xa||n===qa||n===eo||n===Ya)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ga||n===Va)return o===Te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wa)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xa)return r.COMPRESSED_R11_EAC;if(n===qa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===eo)return r.COMPRESSED_RG11_EAC;if(n===Ya)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Za||n===Ja||n===$a||n===Ka||n===ja||n===Qa||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Za)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ja)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$a)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ka)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ja)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qa)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===el)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===il)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ol)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===al)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ll||n===cl||n===hl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ll)return o===Te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ul||n===dl||n===no||n===fl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ul)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===no)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Wx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xx=`
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

}`,hh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Fr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new bn({vertexShader:Wx,fragmentShader:Xx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Me(new Xe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uh=class extends Kn{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,m=null,_=typeof XRWebGLBinding<"u",g=new hh,p={},y=e.getContextAttributes(),w=null,v=null,M=[],S=[],C=new xt,x=null,T=null,R=new He;R.viewport=new De;let L=new He;L.viewport=new De;let N=[R,L],O=new Ta,D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(E){let P=M[E];return P===void 0&&(P=new Os,M[E]=P),P.getTargetRaySpace()},this.getControllerGrip=function(E){let P=M[E];return P===void 0&&(P=new Os,M[E]=P),P.getGripSpace()},this.getHand=function(E){let P=M[E];return P===void 0&&(P=new Os,M[E]=P),P.getHandSpace()};function Y(E){let P=S.indexOf(E.inputSource);if(P===-1)return;let G=M[P];G!==void 0&&(G.update(E.inputSource,E.frame,l||o),G.dispatchEvent({type:E.type,data:E.inputSource}))}function W(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",ut);for(let E=0;E<M.length;E++){let P=S[E];P!==null&&(S[E]=null,M[E].disconnect(P))}D=null,B=null,g.reset();for(let E in p)delete p[E];if(t.setRenderTarget(w),f=null,h=null,d=null,i=null,v=null,yt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),T!==null){let E=T.camera;E.fov=T.fov,E.zoom=T.zoom,E.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(E){r=E,n.isPresenting===!0&&te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(E){a=E,n.isPresenting===!0&&te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(E){l=E},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(E){if(i=E,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",W),i.addEventListener("inputsourceschange",ut),y.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let G=null,Q=null,rt=null;y.depth&&(rt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,G=y.stencil?Oi:$n,Q=y.stencil?Qs:Vn);let Mt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Mt),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new pn(h.textureWidth,h.textureHeight,{format:In,type:xn,depthTexture:new Ci(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let G={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,G),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new pn(f.framebufferWidth,f.framebufferHeight,{format:In,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),yt.setContext(i),yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ut(E){for(let P=0;P<E.removed.length;P++){let G=E.removed[P],Q=S.indexOf(G);Q>=0&&(S[Q]=null,M[Q].disconnect(G))}for(let P=0;P<E.added.length;P++){let G=E.added[P],Q=S.indexOf(G);if(Q===-1){for(let Mt=0;Mt<M.length;Mt++)if(Mt>=S.length){S.push(G),Q=Mt;break}else if(S[Mt]===null){S[Mt]=G,Q=Mt;break}if(Q===-1)break}let rt=M[Q];rt&&rt.connect(G)}}let $=new U,st=new U;function I(E,P,G){$.setFromMatrixPosition(P.matrixWorld),st.setFromMatrixPosition(G.matrixWorld);let Q=$.distanceTo(st),rt=P.projectionMatrix.elements,Mt=G.projectionMatrix.elements,oe=rt[14]/(rt[10]-1),it=rt[14]/(rt[10]+1),pt=(rt[9]+1)/rt[5],mt=(rt[9]-1)/rt[5],ft=(rt[8]-1)/rt[0],vt=(Mt[8]+1)/Mt[0],Xt=oe*ft,Gt=oe*vt,Kt=Q/(-ft+vt),ae=Kt*-ft;if(P.matrixWorld.decompose(E.position,E.quaternion,E.scale),E.translateX(ae),E.translateZ(Kt),E.matrixWorld.compose(E.position,E.quaternion,E.scale),E.matrixWorldInverse.copy(E.matrixWorld).invert(),rt[10]===-1)E.projectionMatrix.copy(P.projectionMatrix),E.projectionMatrixInverse.copy(P.projectionMatrixInverse);else{let z=oe+Kt,be=it+Kt,me=Xt-ae,F=Gt+(Q-ae),b=pt*it/be*z,q=mt*it/be*z;E.projectionMatrix.makePerspective(me,F,b,q,z,be),E.projectionMatrixInverse.copy(E.projectionMatrix).invert()}}function k(E,P){P===null?E.matrixWorld.copy(E.matrix):E.matrixWorld.multiplyMatrices(P.matrixWorld,E.matrix),E.matrixWorldInverse.copy(E.matrixWorld).invert()}this.updateCamera=function(E){if(i===null)return;let P=E.near,G=E.far;g.texture!==null&&(g.depthNear>0&&(P=g.depthNear),g.depthFar>0&&(G=g.depthFar)),O.near=L.near=R.near=P,O.far=L.far=R.far=G,(D!==O.near||B!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),D=O.near,B=O.far),O.layers.mask=E.layers.mask|6,R.layers.mask=O.layers.mask&-5,L.layers.mask=O.layers.mask&-3;let Q=E.parent,rt=O.cameras;k(O,Q);for(let Mt=0;Mt<rt.length;Mt++)k(rt[Mt],Q);rt.length===2?I(O,R,L):O.projectionMatrix.copy(R.projectionMatrix),T===null&&E.isPerspectiveCamera&&(T={camera:E,fov:E.fov,zoom:E.zoom}),X(E,O,Q)};function X(E,P,G){G===null?E.matrix.copy(P.matrixWorld):(E.matrix.copy(G.matrixWorld),E.matrix.invert(),E.matrix.multiply(P.matrixWorld)),E.matrix.decompose(E.position,E.quaternion,E.scale),E.updateMatrixWorld(!0),E.projectionMatrix.copy(P.projectionMatrix),E.projectionMatrixInverse.copy(P.projectionMatrixInverse),E.isPerspectiveCamera&&(E.fov=Er*2*Math.atan(1/E.projectionMatrix.elements[5]),E.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(E){c=E,h!==null&&(h.fixedFoveation=E),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=E)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(E){return p[E]};let et=null;function tt(E,P){if(u=P.getViewerPose(l||o),m=P,u!==null){let G=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Q=!1;G.length!==O.cameras.length&&(O.cameras.length=0,Q=!0);for(let it=0;it<G.length;it++){let pt=G[it],mt=null;if(f!==null)mt=f.getViewport(pt);else{let vt=d.getViewSubImage(h,pt);mt=vt.viewport,it===0&&(t.setRenderTargetTextures(v,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(v))}let ft=N[it];ft===void 0&&(ft=new He,ft.layers.enable(it),ft.viewport=new De,N[it]=ft),ft.matrix.fromArray(pt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(pt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(mt.x,mt.y,mt.width,mt.height),it===0&&(O.matrix.copy(ft.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Q===!0&&O.cameras.push(ft)}let rt=i.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let it=d.getDepthInformation(G[0]);it&&it.isValid&&it.texture&&g.init(it,i.renderState)}if(rt&&rt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let it=0;it<G.length;it++){let pt=G[it].camera;if(pt){let mt=p[pt];mt||(mt=new Fr,p[pt]=mt);let ft=d.getCameraImage(pt);mt.sourceTexture=ft}}}}for(let G=0;G<M.length;G++){let Q=S[G],rt=M[G];Q!==null&&rt!==void 0&&rt.update(Q,P,l||o)}et&&et(E,P),P.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:P}),m=null}let yt=new Ad;yt.setAnimationLoop(tt),this.setAnimationLoop=function(E){et=E},this.dispose=function(){}}},qx=new _e,Fd=new re;Fd.set(-1,0,0,0,1,0,0,0,1);function Yx(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Gc(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,y,w,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,y,w):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===nn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===nn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=t.get(p),w=y.envMap,v=y.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(qx.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Fd),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,y,w){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=w*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Zx(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){let S=M.program;n.uniformBlockBinding(v,S)}function l(v,M){let S=i[v.id];S===void 0&&(g(v),S=u(v),i[v.id]=S,v.addEventListener("dispose",y));let C=M.program;n.updateUBOMapping(v,C);let x=t.render.frame;r[v.id]!==x&&(h(v),r[v.id]=x)}function u(v){let M=d();v.__bindingPointIndex=M;let S=s.createBuffer(),C=v.__size,x=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,C,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,S),S}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let M=i[v.id],S=v.uniforms,C=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let x=0,T=S.length;x<T;x++){let R=S[x];if(Array.isArray(R))for(let L=0,N=R.length;L<N;L++)f(R[L],x,L,C);else f(R,x,0,C)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,M,S,C){if(_(v,M,S,C)===!0){let x=v.__offset,T=v.value;if(Array.isArray(T)){let R=0;for(let L=0;L<T.length;L++){let N=T[L],O=p(N);m(N,v.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,x,v.__data)}}function m(v,M,S){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,S)}function _(v,M,S,C){let x=v.value,T=M+"_"+S;if(C[T]===void 0)return typeof x=="number"||typeof x=="boolean"?C[T]=x:ArrayBuffer.isView(x)?C[T]=x.slice():C[T]=x.clone(),!0;{let R=C[T];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return C[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function g(v){let M=v.uniforms,S=0,C=16;for(let T=0,R=M.length;T<R;T++){let L=Array.isArray(M[T])?M[T]:[M[T]];for(let N=0,O=L.length;N<O;N++){let D=L[N],B=Array.isArray(D.value)?D.value:[D.value];for(let Y=0,W=B.length;Y<W;Y++){let ut=B[Y],$=p(ut),st=S%C,I=st%$.boundary,k=st+I;S+=I,k!==0&&C-k<$.storage&&(S+=C-k),D.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=$.storage}}}let x=S%C;return x>0&&(S+=C-x),v.__size=S,v.__cache={},this}function p(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):te("WebGLRenderer: Unsupported uniform value type.",v),M}function y(v){let M=v.target;M.removeEventListener("dispose",y);let S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function w(){for(let v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:w}}var Jx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ni=null;function $x(){return ni===null&&(ni=new Pr(Jx,16,16,zi,Wn),ni.name="DFG_LUT",ni.minFilter=en,ni.magFilter=en,ni.wrapS=Jn,ni.wrapT=Jn,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}var ao=class{constructor(t={}){let{canvas:e=Yu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=xn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=f,g=new Set([Ba,Ua,Na]),p=new Set([xn,Vn,js,Qs,La,Fa]),y=new Uint32Array(4),w=new Int32Array(4),v=new U,M=null,S=null,C=[],x=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,N=null,O=null,D=null,B=null;this._outputColorSpace=tn;let Y=0,W=0,ut=null,$=-1,st=null,I=new De,k=new De,X=null,et=new ie(0),tt=0,yt=e.width,E=e.height,P=1,G=null,Q=null,rt=new De(0,0,yt,E),Mt=new De(0,0,yt,E),oe=!1,it=new Hs,pt=!1,mt=!1,ft=new _e,vt=new U,Xt=new De,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Kt=!1;function ae(){return ut===null?P:1}let z=n;function be(A,H){return e.getContext(A,H)}let me,F,b,q,j,ot,bt,St,at,dt,Tt,qt,Ct,wt,Yt,jt,he,V,At,ht,Rt,Dt,gt;try{let A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Pe,!1),e.addEventListener("webglcontextrestored",Se,!1),e.addEventListener("webglcontextcreationerror",Nn,!1),z===null){let H="webgl2";if(z=be(H,A),z===null)throw be(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(A){throw e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",Nn,!1),Qt("WebGLRenderer: "+A.message),A}function Zt(){me=new ig(z),me.init(),Rt=new Vx(z,me),F=new Ym(z,me,t,Rt),b=new Hx(z,me),F.reversedDepthBuffer&&h&&b.buffers.depth.setReversed(!0),O=z.createFramebuffer(),D=z.createFramebuffer(),B=z.createFramebuffer(),q=new og(z),j=new Ax,ot=new Gx(z,me,b,j,F,Rt,q),bt=new ng(R),St=new lp(z),Dt=new Xm(z,St),at=new sg(z,St,q,Dt),dt=new lg(z,at,St,Dt,q),V=new ag(z,F,ot),Yt=new Zm(j),Tt=new wx(R,bt,me,F,Dt,Yt),qt=new Yx(R,j),Ct=new Cx,wt=new Nx(me),he=new Wm(R,bt,b,dt,m,c),jt=new kx(R,dt,F),gt=new Zx(z,q,F,b),At=new qm(z,me,q),ht=new rg(z,me,q),q.programs=Tt.programs,R.capabilities=F,R.extensions=me,R.properties=j,R.renderLists=Ct,R.shadowMap=jt,R.state=b,R.info=q}_!==xn&&(T=new hg(_,e.width,e.height,a,i,r));let Vt=new uh(R,z);this.xr=Vt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let A=me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(A){A!==void 0&&(P=A,this.setSize(yt,E,!1))},this.getSize=function(A){return A.set(yt,E)},this.setSize=function(A,H,nt=!0){if(Vt.isPresenting){te("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=A,E=H,e.width=Math.floor(A*P),e.height=Math.floor(H*P),nt===!0&&(e.style.width=A+"px",e.style.height=H+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(yt*P,E*P).floor()},this.setDrawingBufferSize=function(A,H,nt){yt=A,E=H,P=nt,e.width=Math.floor(A*nt),e.height=Math.floor(H*nt),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(_===xn){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(rt)},this.setViewport=function(A,H,nt,Z){A.isVector4?rt.set(A.x,A.y,A.z,A.w):rt.set(A,H,nt,Z),b.viewport(I.copy(rt).multiplyScalar(P).round())},this.getScissor=function(A){return A.copy(Mt)},this.setScissor=function(A,H,nt,Z){A.isVector4?Mt.set(A.x,A.y,A.z,A.w):Mt.set(A,H,nt,Z),b.scissor(k.copy(Mt).multiplyScalar(P).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(A){b.setScissorTest(oe=A)},this.setOpaqueSort=function(A){G=A},this.setTransparentSort=function(A){Q=A},this.getClearColor=function(A){return A.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,nt=!0){let Z=0;if(A){let J=!1;if(ut!==null){let Lt=ut.texture.format;J=g.has(Lt)}if(J){let Lt=ut.texture.type,Bt=p.has(Lt),It=he.getClearColor(),zt=he.getClearAlpha(),Wt=It.r,ue=It.g,ge=It.b;Bt?(y[0]=Wt,y[1]=ue,y[2]=ge,y[3]=zt,z.clearBufferuiv(z.COLOR,0,y)):(w[0]=Wt,w[1]=ue,w[2]=ge,w[3]=zt,z.clearBufferiv(z.COLOR,0,w))}else Z|=z.COLOR_BUFFER_BIT}H&&(Z|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),nt&&(Z|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&z.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",Nn,!1),he.dispose(),Ct.dispose(),wt.dispose(),j.dispose(),bt.dispose(),dt.dispose(),Dt.dispose(),gt.dispose(),Tt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",wh),Vt.removeEventListener("sessionend",Ah),Hi.stop()};function Pe(A){A.preventDefault(),Sr("WebGLRenderer: Context Lost."),L=!0}function Se(){Sr("WebGLRenderer: Context Restored."),L=!1;let A=q.autoReset,H=jt.enabled,nt=jt.autoUpdate,Z=jt.needsUpdate,J=jt.type;Zt(),q.autoReset=A,jt.enabled=H,jt.autoUpdate=nt,jt.needsUpdate=Z,jt.type=J}function Nn(A){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Xn(A){let H=A.target;H.removeEventListener("dispose",Xn),Gd(H)}function Gd(A){Vd(A),j.remove(A)}function Vd(A){let H=j.get(A).programs;H!==void 0&&(H.forEach(function(nt){Tt.releaseProgram(nt)}),A.isShaderMaterial&&Tt.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,nt,Z,J,Lt){H===null&&(H=Gt);let Bt=J.isMesh&&J.matrixWorld.determinantAffine()<0,It=qd(A,H,nt,Z,J);b.setMaterial(Z,Bt);let zt=nt.index,Wt=1;if(Z.wireframe===!0){if(zt=at.getWireframeAttribute(nt),zt===void 0)return;Wt=2}let ue=nt.drawRange,ge=nt.attributes.position,kt=ue.start*Wt,Ee=(ue.start+ue.count)*Wt;Lt!==null&&(kt=Math.max(kt,Lt.start*Wt),Ee=Math.min(Ee,(Lt.start+Lt.count)*Wt)),zt!==null?(kt=Math.max(kt,0),Ee=Math.min(Ee,zt.count)):ge!=null&&(kt=Math.max(kt,0),Ee=Math.min(Ee,ge.count));let ze=Ee-kt;if(ze<0||ze===1/0)return;Dt.setup(J,Z,It,nt,zt);let Le,Re=At;if(zt!==null&&(Le=St.get(zt),Re=ht,Re.setIndex(Le)),J.isMesh)Z.wireframe===!0?(b.setLineWidth(Z.wireframeLinewidth*ae()),Re.setMode(z.LINES)):Re.setMode(z.TRIANGLES);else if(J.isLine){let sn=Z.linewidth;sn===void 0&&(sn=1),b.setLineWidth(sn*ae()),J.isLineSegments?Re.setMode(z.LINES):J.isLineLoop?Re.setMode(z.LINE_LOOP):Re.setMode(z.LINE_STRIP)}else J.isPoints?Re.setMode(z.POINTS):J.isSprite&&Re.setMode(z.TRIANGLES);if(J.isBatchedMesh)if(me.get("WEBGL_multi_draw"))Re.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let sn=J._multiDrawStarts,Nt=J._multiDrawCounts,hn=J._multiDrawCount,ye=zt?St.get(zt).bytesPerElement:1,An=j.get(Z).currentProgram.getUniforms();for(let qn=0;qn<hn;qn++)An.setValue(z,"_gl_DrawID",qn),Re.render(sn[qn]/ye,Nt[qn])}else if(J.isInstancedMesh)Re.renderInstances(kt,ze,J.count);else if(nt.isInstancedBufferGeometry){let sn=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Nt=Math.min(nt.instanceCount,sn);Re.renderInstances(kt,ze,Nt)}else Re.render(kt,ze)};function Th(A,H,nt,Z){N!==null&&A.isNodeMaterial&&N.setObject(Z,A),pt===!0&&Yt.setState(A,nt,!1),A.transparent===!0&&A.side===gn&&A.forceSinglePass===!1?(A.side=nn,A.needsUpdate=!0,_o(A,H,Z),A.side=Hn,A.needsUpdate=!0,_o(A,H,Z),A.side=gn):_o(A,H,Z)}this.compile=function(A,H,nt=null){nt===null&&(nt=A),N!==null&&N.renderStart(A,H,nt),S=wt.get(nt),S.init(H),x.push(S),nt.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),A!==nt&&A.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),S.setupLights(),N!==null&&N.updateLights(S.state.lightsArray),mt=this.localClippingEnabled,pt=Yt.init(this.clippingPlanes,mt),pt===!0&&Yt.setGlobalState(this.clippingPlanes,H),N!==null&&jt.render(S.state.shadowsArray,nt,H);let Z=new Set;return A.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Lt=J.material;if(Lt)if(Array.isArray(Lt))for(let Bt=0;Bt<Lt.length;Bt++){let It=Lt[Bt];Th(It,nt,H,J),Z.add(It)}else Th(Lt,nt,H,J),Z.add(Lt)}),S=x.pop(),N!==null&&N.renderEnd(),Z},this.compileAsync=function(A,H,nt=null){let Z=this.compile(A,H,nt);return new Promise(J=>{function Lt(){if(Z.forEach(function(Bt){let zt=j.get(Bt).currentProgram;(zt===void 0||zt.isReady())&&Z.delete(Bt)}),Z.size===0){J(A);return}setTimeout(Lt,10)}me.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let Ll=null;function Wd(A){Ll&&Ll(A)}function wh(){Hi.stop()}function Ah(){Hi.start()}let Hi=new Ad;Hi.setAnimationLoop(Wd),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(A){Ll=A,Vt.setAnimationLoop(A),A===null?Hi.stop():Hi.start()},Vt.addEventListener("sessionstart",wh),Vt.addEventListener("sessionend",Ah),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N!==null&&N.renderStart(A,H);let nt=Vt.enabled===!0&&Vt.isPresenting===!0,Z=T!==null&&(ut===null||nt)&&T.begin(R,ut);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(H),H=Vt.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,H,ut),S=wt.get(A,x.length),S.init(H),S.state.textureUnits=ot.getTextureUnits(),x.push(S),ft.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),it.setFromProjectionMatrix(ft,zn,H.reversedDepth),mt=this.localClippingEnabled,pt=Yt.init(this.clippingPlanes,mt),M=Ct.get(A,C.length),M.init(),C.push(M),Vt.enabled===!0&&Vt.isPresenting===!0){let Bt=R.xr.getDepthSensingMesh();Bt!==null&&Fl(Bt,H,-1/0,R.sortObjects)}Fl(A,H,0,R.sortObjects),M.finish(),N!==null&&N.updateLights(S.state.lightsArray),R.sortObjects===!0&&M.sort(G,Q),Kt=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,Kt&&he.addToRenderList(M,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pt===!0&&Yt.beginShadows();let J=S.state.shadowsArray;if(jt.render(J,A,H),pt===!0&&Yt.endShadows(),(Z&&T.hasRenderPass())===!1){let Bt=M.opaque,It=M.transmissive;if(S.setupLights(),H.isArrayCamera){let zt=H.cameras;if(It.length>0)for(let Wt=0,ue=zt.length;Wt<ue;Wt++){let ge=zt[Wt];Ch(Bt,It,A,ge)}Kt&&he.render(A);for(let Wt=0,ue=zt.length;Wt<ue;Wt++){let ge=zt[Wt];Rh(M,A,ge,ge.viewport)}}else It.length>0&&Ch(Bt,It,A,H),Kt&&he.render(A),Rh(M,A,H)}ut!==null&&W===0&&(ot.updateMultisampleRenderTarget(ut),ot.updateRenderTargetMipmap(ut)),Z&&T.end(R),A.isScene===!0&&A.onAfterRender(R,A,H),Dt.resetDefaultState(),$=-1,st=null,x.pop(),x.length>0?(S=x[x.length-1],ot.setTextureUnits(S.state.textureUnits),pt===!0&&Yt.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,C.pop(),C.length>0?M=C[C.length-1]:M=null,N!==null&&N.renderEnd()};function Fl(A,H,nt,Z){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)nt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLightProbeGrid)S.pushLightProbeGrid(A);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(it)){Z&&Xt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ft);let Bt=dt.update(A),It=A.material;It.visible&&M.push(A,Bt,It,nt,Xt.z,null,H)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(it))){let Bt=dt.update(A),It=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Xt.copy(A.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),Xt.copy(Bt.boundingSphere.center)),Xt.applyMatrix4(A.matrixWorld).applyMatrix4(ft)),Array.isArray(It)){let zt=Bt.groups;for(let Wt=0,ue=zt.length;Wt<ue;Wt++){let ge=zt[Wt],kt=It[ge.materialIndex];kt&&kt.visible&&M.push(A,Bt,kt,nt,Xt.z,ge,H)}}else It.visible&&M.push(A,Bt,It,nt,Xt.z,null,H)}}let Lt=A.children;for(let Bt=0,It=Lt.length;Bt<It;Bt++)Fl(Lt[Bt],H,nt,Z)}function Rh(A,H,nt,Z){let{opaque:J,transmissive:Lt,transparent:Bt}=A;S.setupLightsView(nt),pt===!0&&Yt.setGlobalState(R.clippingPlanes,nt),Z&&b.viewport(I.copy(Z)),J.length>0&&xo(J,H,nt),Lt.length>0&&xo(Lt,H,nt),Bt.length>0&&xo(Bt,H,nt),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Ch(A,H,nt,Z){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Z.id]===void 0){let kt=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Z.id]=new pn(1,1,{generateMipmaps:!0,type:kt?Wn:xn,minFilter:Bi,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xe.workingColorSpace})}let Lt=S.state.transmissionRenderTarget[Z.id],Bt=Z.viewport||I;Lt.setSize(Bt.z*R.transmissionResolutionScale,Bt.w*R.transmissionResolutionScale);let It=R.getRenderTarget(),zt=R.getActiveCubeFace(),Wt=R.getActiveMipmapLevel();R.setRenderTarget(Lt),R.getClearColor(et),tt=R.getClearAlpha(),tt<1&&R.setClearColor(16777215,.5),R.clear(),Kt&&he.render(nt);let ue=R.toneMapping;R.toneMapping=Gn;let ge=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),S.setupLightsView(Z),pt===!0&&Yt.setGlobalState(R.clippingPlanes,Z),xo(A,nt,Z),ot.updateMultisampleRenderTarget(Lt),ot.updateRenderTargetMipmap(Lt),me.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Ee=0,ze=H.length;Ee<ze;Ee++){let Le=H[Ee],{object:Re,geometry:sn,material:Nt,group:hn}=Le;if(Nt.side===gn&&Re.layers.test(Z.layers)){let ye=Nt.side;Nt.side=nn,Nt.needsUpdate=!0,Ph(Re,nt,Z,sn,Nt,hn),Nt.side=ye,Nt.needsUpdate=!0,kt=!0}}kt===!0&&(ot.updateMultisampleRenderTarget(Lt),ot.updateRenderTargetMipmap(Lt))}R.setRenderTarget(It,zt,Wt),R.setClearColor(et,tt),ge!==void 0&&(Z.viewport=ge),R.toneMapping=ue}function xo(A,H,nt){let Z=H.isScene===!0?H.overrideMaterial:null;for(let J=0,Lt=A.length;J<Lt;J++){let Bt=A[J],{object:It,geometry:zt,group:Wt}=Bt,ue=Bt.material;ue.allowOverride===!0&&Z!==null&&(ue=Z),It.layers.test(nt.layers)&&Ph(It,H,nt,zt,ue,Wt)}}function Ph(A,H,nt,Z,J,Lt){N!==null&&J.isNodeMaterial&&N.setObject(A,J),A.onBeforeRender(R,H,nt,Z,J,Lt),A.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(R,H,nt,Z,A,Lt),J.transparent===!0&&J.side===gn&&J.forceSinglePass===!1?(J.side=nn,J.needsUpdate=!0,R.renderBufferDirect(nt,H,Z,J,A,Lt),J.side=Hn,J.needsUpdate=!0,R.renderBufferDirect(nt,H,Z,J,A,Lt),J.side=gn):R.renderBufferDirect(nt,H,Z,J,A,Lt),A.onAfterRender(R,H,nt,Z,J,Lt)}function _o(A,H,nt){H.isScene!==!0&&(H=Gt);let Z=j.get(A),J=S.state.lights,Lt=S.state.shadowsArray,Bt=J.state.version,It=Tt.getParameters(A,J.state,Lt,H,nt,S.state.lightProbeGridArray),zt=Tt.getProgramCacheKey(It),Wt=Z.programs;Z.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,Z.fog=H.fog;let ue=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Z.envMap=bt.get(A.envMap||Z.environment,ue),Z.envMapRotation=Z.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Wt===void 0&&(A.addEventListener("dispose",Xn),Wt=new Map,Z.programs=Wt);let ge=Wt.get(zt);if(ge!==void 0){if(Z.currentProgram===ge&&Z.lightsStateVersion===Bt)return Lh(A,It),ge}else It.uniforms=Tt.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,nt,It),A.onBeforeCompile(It,R),ge=Tt.acquireProgram(It,zt),Wt.set(zt,ge),Z.uniforms=It.uniforms;let kt=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=Yt.uniform),Lh(A,It),Z.needsLights=Zd(A),Z.lightsStateVersion=Bt,Z.needsLights&&(kt.ambientLightColor.value=J.state.ambient,kt.lightProbe.value=J.state.probe,kt.sunLights.value=J.state.sun,kt.sunLightShadows.value=J.state.sunShadow,kt.directionalLights.value=J.state.directional,kt.directionalLightShadows.value=J.state.directionalShadow,kt.spotLights.value=J.state.spot,kt.spotLightShadows.value=J.state.spotShadow,kt.rectAreaLights.value=J.state.rectArea,kt.ltc_1.value=J.state.rectAreaLTC1,kt.ltc_2.value=J.state.rectAreaLTC2,kt.pointLights.value=J.state.point,kt.pointLightShadows.value=J.state.pointShadow,kt.hemisphereLights.value=J.state.hemi,kt.sunShadowMatrix.value=J.state.sunShadowMatrix,kt.sunShadowCascade.value=J.state.sunShadowCascade,kt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,kt.spotLightMatrix.value=J.state.spotLightMatrix,kt.spotLightMap.value=J.state.spotLightMap,kt.pointShadowMatrix.value=J.state.pointShadowMatrix),Z.lightProbeGrid=S.state.lightProbeGridArray.length>0,Z.currentProgram=ge,Z.uniformsList=null,ge}function Ih(A){if(A.uniformsList===null){let H=A.currentProgram.getUniforms();A.uniformsList=nr.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function Lh(A,H){let nt=j.get(A);nt.outputColorSpace=H.outputColorSpace,nt.batching=H.batching,nt.batchingColor=H.batchingColor,nt.instancing=H.instancing,nt.instancingColor=H.instancingColor,nt.instancingMorph=H.instancingMorph,nt.skinning=H.skinning,nt.morphTargets=H.morphTargets,nt.morphNormals=H.morphNormals,nt.morphColors=H.morphColors,nt.morphTargetsCount=H.morphTargetsCount,nt.numClippingPlanes=H.numClippingPlanes,nt.numIntersection=H.numClipIntersection,nt.vertexAlphas=H.vertexAlphas,nt.vertexTangents=H.vertexTangents,nt.toneMapping=H.toneMapping}function Xd(A,H){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;v.setFromMatrixPosition(H.matrixWorld);for(let nt=0,Z=A.length;nt<Z;nt++){let J=A[nt];if(J.texture!==null&&J.boundingBox.containsPoint(v))return J}return null}function qd(A,H,nt,Z,J){H.isScene!==!0&&(H=Gt),ot.resetTextureUnits();let Lt=H.fog,Bt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?H.environment:null,It=ut===null?R.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:xe.workingColorSpace,zt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Wt=bt.get(Z.envMap||Bt,zt),ue=Z.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,ge=!!nt.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),kt=!!nt.morphAttributes.position,Ee=!!nt.morphAttributes.normal,ze=!!nt.morphAttributes.color,Le=Gn;Z.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Le=R.toneMapping);let Re=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,sn=Re!==void 0?Re.length:0,Nt=j.get(Z),hn=S.state.lights;if(pt===!0&&(mt===!0||A!==st)){let Ie=A===st&&Z.id===$;Yt.setState(Z,A,Ie)}let ye=!1;Z.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==hn.state.version||Nt.outputColorSpace!==It||J.isBatchedMesh&&Nt.batching===!1||!J.isBatchedMesh&&Nt.batching===!0||J.isBatchedMesh&&Nt.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Nt.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Nt.instancing===!1||!J.isInstancedMesh&&Nt.instancing===!0||J.isSkinnedMesh&&Nt.skinning===!1||!J.isSkinnedMesh&&Nt.skinning===!0||J.isInstancedMesh&&Nt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Nt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Nt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Nt.instancingMorph===!1&&J.morphTexture!==null||Nt.envMap!==Wt||Z.fog===!0&&Nt.fog!==Lt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==Yt.numPlanes||Nt.numIntersection!==Yt.numIntersection)||Nt.vertexAlphas!==ue||Nt.vertexTangents!==ge||Nt.morphTargets!==kt||Nt.morphNormals!==Ee||Nt.morphColors!==ze||Nt.toneMapping!==Le||Nt.morphTargetsCount!==sn||!!Nt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(ye=!0):(ye=!0,Nt.__version=Z.version);let An=Nt.currentProgram;ye===!0&&(An=_o(Z,H,J),N&&Z.isNodeMaterial&&N.onUpdateProgram(Z,An,Nt));let qn=!1,_i=!1,us=!1,we=An.getUniforms(),Oe=Nt.uniforms;if(b.useProgram(An.program)&&(qn=!0,_i=!0,us=!0),Z.id!==$&&($=Z.id,_i=!0),Nt.needsLights){let Ie=Xd(S.state.lightProbeGridArray,J);Nt.lightProbeGrid!==Ie&&(Nt.lightProbeGrid=Ie,_i=!0)}if(qn||st!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),we.setValue(z,"projectionMatrix",A.projectionMatrix),we.setValue(z,"viewMatrix",A.matrixWorldInverse);let yi=we.map.cameraPosition;yi!==void 0&&yi.setValue(z,vt.setFromMatrixPosition(A.matrixWorld)),F.logarithmicDepthBuffer&&we.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&we.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),st!==A&&(st=A,_i=!0,us=!0)}if(Nt.needsLights&&(hn.state.sunShadowMap.length>0&&we.setValue(z,"sunShadowMap",hn.state.sunShadowMap,ot),hn.state.directionalShadowMap.length>0&&we.setValue(z,"directionalShadowMap",hn.state.directionalShadowMap,ot),hn.state.spotShadowMap.length>0&&we.setValue(z,"spotShadowMap",hn.state.spotShadowMap,ot),hn.state.pointShadowMap.length>0&&we.setValue(z,"pointShadowMap",hn.state.pointShadowMap,ot)),J.isSkinnedMesh){we.setOptional(z,J,"bindMatrix"),we.setOptional(z,J,"bindMatrixInverse");let Ie=J.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),we.setValue(z,"boneTexture",Ie.boneTexture,ot))}J.isBatchedMesh&&(we.setOptional(z,J,"batchingTexture"),we.setValue(z,"batchingTexture",J._matricesTexture,ot),we.setOptional(z,J,"batchingIdTexture"),we.setValue(z,"batchingIdTexture",J._indirectTexture,ot),we.setOptional(z,J,"batchingColorTexture"),J._colorsTexture!==null&&we.setValue(z,"batchingColorTexture",J._colorsTexture,ot));let vi=nt.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&V.update(J,nt,An),(_i||Nt.receiveShadow!==J.receiveShadow)&&(Nt.receiveShadow=J.receiveShadow,we.setValue(z,"receiveShadow",J.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&H.environment!==null&&(Oe.envMapIntensity.value=H.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=$x()),_i){if(we.setValue(z,"toneMappingExposure",R.toneMappingExposure),Nt.needsLights&&Yd(Oe,us),Lt&&Z.fog===!0&&qt.refreshFogUniforms(Oe,Lt),qt.refreshMaterialUniforms(Oe,Z,P,E,S.state.transmissionRenderTarget[A.id]),Nt.needsLights&&Nt.lightProbeGrid){let Ie=Nt.lightProbeGrid;Oe.probesSH.value=Ie.texture,Oe.probesMin.value.copy(Ie.boundingBox.min),Oe.probesMax.value.copy(Ie.boundingBox.max),Oe.probesResolution.value.copy(Ie.resolution)}nr.upload(z,Ih(Nt),Oe,ot)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(nr.upload(z,Ih(Nt),Oe,ot),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&we.setValue(z,"center",J.center),we.setValue(z,"modelViewMatrix",J.modelViewMatrix),we.setValue(z,"normalMatrix",J.normalMatrix),we.setValue(z,"modelMatrix",J.matrixWorld),Z.uniformsGroups!==void 0){let Ie=Z.uniformsGroups;for(let yi=0,ds=Ie.length;yi<ds;yi++){let Dh=Ie[yi];gt.update(Dh,An),gt.bind(Dh,An)}}return An}function Yd(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.sunLights.needsUpdate=H,A.sunLightShadows.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Zd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ut},this.setRenderTargetTextures=function(A,H,nt){let Z=j.get(A);Z.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),j.get(A.texture).__webglTexture=H,j.get(A.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:nt,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){let nt=j.get(A);nt.__webglFramebuffer=H,nt.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,nt=0){ut=A,Y=H,W=nt;let Z=null,J=!1,Lt=!1;if(A){let It=j.get(A);if(It.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(z.FRAMEBUFFER,It.__webglFramebuffer),I.copy(A.viewport),k.copy(A.scissor),X=A.scissorTest,b.viewport(I),b.scissor(k),b.setScissorTest(X),$=-1;return}else if(It.__webglFramebuffer===void 0)ot.setupRenderTarget(A);else if(It.__hasExternalTextures)ot.rebindTextures(A,j.get(A.texture).__webglTexture,j.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let ue=A.depthTexture;if(It.__boundDepthTexture!==ue){if(ue!==null&&j.has(ue)&&(A.width!==ue.image.width||A.height!==ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(A)}}let zt=A.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Lt=!0);let Wt=j.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[H])?Z=Wt[H][nt]:Z=Wt[H],J=!0):A.samples>0&&ot.useMultisampledRTT(A)===!1?Z=j.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?Z=Wt[nt]:Z=Wt,I.copy(A.viewport),k.copy(A.scissor),X=A.scissorTest}else I.copy(rt).multiplyScalar(P).floor(),k.copy(Mt).multiplyScalar(P).floor(),X=oe;if(nt!==0&&(Z=O),b.bindFramebuffer(z.FRAMEBUFFER,Z)&&b.drawBuffers(A,Z),b.viewport(I),b.scissor(k),b.setScissorTest(X),J){let It=j.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+H,It.__webglTexture,nt)}else if(Lt){let It=H;for(let zt=0;zt<A.textures.length;zt++){let Wt=j.get(A.textures[zt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+zt,Wt.__webglTexture,nt,It)}}else if(A!==null&&nt!==0){let It=j.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,It.__webglTexture,nt)}$=-1};function Fh(A){let H=j.get(A);return(H.__readFormat!==A.format||H.__readType!==A.type)&&(H.__readFormat=A.format,H.__readType=A.type,H.__formatReadable=F.textureFormatReadable(A.format),H.__typeReadable=F.textureTypeReadable(A.type)),H}this.readRenderTargetPixels=function(A,H,nt,Z,J,Lt,Bt,It=0){if(!(A&&A.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=j.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Bt!==void 0&&(zt=zt[Bt]),zt){b.bindFramebuffer(z.FRAMEBUFFER,zt);try{let Wt=A.textures[It],ue=Wt.format,ge=Wt.type;A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+It);let kt=Fh(Wt);if(kt.__formatReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-Z&&nt>=0&&nt<=A.height-J&&z.readPixels(H,nt,Z,J,Rt.convert(ue),Rt.convert(ge),Lt)}finally{let Wt=ut!==null?j.get(ut).__webglFramebuffer:null;b.bindFramebuffer(z.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(A,H,nt,Z,J,Lt,Bt,It=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=j.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Bt!==void 0&&(zt=zt[Bt]),zt)if(H>=0&&H<=A.width-Z&&nt>=0&&nt<=A.height-J){b.bindFramebuffer(z.FRAMEBUFFER,zt);let Wt=A.textures[It],ue=Wt.format,ge=Wt.type;A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+It);let kt=Fh(Wt);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ee=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ee),z.bufferData(z.PIXEL_PACK_BUFFER,Lt.byteLength,z.STREAM_READ),z.readPixels(H,nt,Z,J,Rt.convert(ue),Rt.convert(ge),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let ze=ut!==null?j.get(ut).__webglFramebuffer:null;b.bindFramebuffer(z.FRAMEBUFFER,ze);let Le=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Ju(z,Le,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ee),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Lt),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Ee),z.deleteSync(Le),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,nt=0){let Z=Math.pow(2,-nt),J=Math.floor(A.image.width*Z),Lt=Math.floor(A.image.height*Z),Bt=H!==null?H.x:0,It=H!==null?H.y:0;ot.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,nt,0,0,Bt,It,J,Lt),b.unbindTexture()},this.copyTextureToTexture=function(A,H,nt=null,Z=null,J=0,Lt=0){let Bt,It,zt,Wt,ue,ge,kt,Ee,ze,Le=A.isCompressedTexture?A.mipmaps[Lt]:A.image;if(nt!==null)Bt=nt.max.x-nt.min.x,It=nt.max.y-nt.min.y,zt=nt.isBox3?nt.max.z-nt.min.z:1,Wt=nt.min.x,ue=nt.min.y,ge=nt.isBox3?nt.min.z:0;else{let Oe=Math.pow(2,-J);Bt=Math.floor(Le.width*Oe),It=Math.floor(Le.height*Oe),A.isDataArrayTexture?zt=Le.depth:A.isData3DTexture?zt=Math.floor(Le.depth*Oe):zt=1,Wt=0,ue=0,ge=0}Z!==null?(kt=Z.x,Ee=Z.y,ze=Z.z):(kt=0,Ee=0,ze=0);let Re=Rt.convert(H.format),sn=Rt.convert(H.type),Nt;H.isData3DTexture?(ot.setTexture3D(H,0),Nt=z.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(ot.setTexture2DArray(H,0),Nt=z.TEXTURE_2D_ARRAY):(ot.setTexture2D(H,0),Nt=z.TEXTURE_2D),b.activeTexture(z.TEXTURE0),b.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),b.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),b.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);let hn=b.getParameter(z.UNPACK_ROW_LENGTH),ye=b.getParameter(z.UNPACK_IMAGE_HEIGHT),An=b.getParameter(z.UNPACK_SKIP_PIXELS),qn=b.getParameter(z.UNPACK_SKIP_ROWS),_i=b.getParameter(z.UNPACK_SKIP_IMAGES);b.pixelStorei(z.UNPACK_ROW_LENGTH,Le.width),b.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Le.height),b.pixelStorei(z.UNPACK_SKIP_PIXELS,Wt),b.pixelStorei(z.UNPACK_SKIP_ROWS,ue),b.pixelStorei(z.UNPACK_SKIP_IMAGES,ge);let us=A.isDataArrayTexture||A.isData3DTexture,we=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){let Oe=j.get(A),vi=j.get(H),Ie=j.get(Oe.__renderTarget),yi=j.get(vi.__renderTarget);b.bindFramebuffer(z.READ_FRAMEBUFFER,Ie.__webglFramebuffer),b.bindFramebuffer(z.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let ds=0;ds<zt;ds++)us&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,j.get(A).__webglTexture,J,ge+ds),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,j.get(H).__webglTexture,Lt,ze+ds)),z.blitFramebuffer(Wt,ue,Bt,It,kt,Ee,Bt,It,z.DEPTH_BUFFER_BIT,z.NEAREST);b.bindFramebuffer(z.READ_FRAMEBUFFER,null),b.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(J!==0||A.isRenderTargetTexture||j.has(A)){let Oe=j.get(A),vi=j.get(H);b.bindFramebuffer(z.READ_FRAMEBUFFER,D),b.bindFramebuffer(z.DRAW_FRAMEBUFFER,B);for(let Ie=0;Ie<zt;Ie++)us?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Oe.__webglTexture,J,ge+Ie):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Oe.__webglTexture,J),we?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,vi.__webglTexture,Lt,ze+Ie):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,vi.__webglTexture,Lt),J!==0?z.blitFramebuffer(Wt,ue,Bt,It,kt,Ee,Bt,It,z.COLOR_BUFFER_BIT,z.NEAREST):we?z.copyTexSubImage3D(Nt,Lt,kt,Ee,ze+Ie,Wt,ue,Bt,It):z.copyTexSubImage2D(Nt,Lt,kt,Ee,Wt,ue,Bt,It);b.bindFramebuffer(z.READ_FRAMEBUFFER,null),b.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else we?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(Nt,Lt,kt,Ee,ze,Bt,It,zt,Re,sn,Le.data):H.isCompressedArrayTexture?z.compressedTexSubImage3D(Nt,Lt,kt,Ee,ze,Bt,It,zt,Re,Le.data):z.texSubImage3D(Nt,Lt,kt,Ee,ze,Bt,It,zt,Re,sn,Le):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Lt,kt,Ee,Bt,It,Re,sn,Le.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Lt,kt,Ee,Le.width,Le.height,Re,Le.data):z.texSubImage2D(z.TEXTURE_2D,Lt,kt,Ee,Bt,It,Re,sn,Le);b.pixelStorei(z.UNPACK_ROW_LENGTH,hn),b.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ye),b.pixelStorei(z.UNPACK_SKIP_PIXELS,An),b.pixelStorei(z.UNPACK_SKIP_ROWS,qn),b.pixelStorei(z.UNPACK_SKIP_IMAGES,_i),Lt===0&&H.generateMipmaps&&z.generateMipmap(Nt),b.unbindTexture()},this.initRenderTarget=function(A){j.get(A).__webglFramebuffer===void 0&&ot.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ot.setTextureCube(A,0):A.isData3DTexture?ot.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ot.setTexture2DArray(A,0):ot.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){Y=0,W=0,ut=null,b.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}};var lo=new U;function Ln(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),c=Math.PI/4;lo.copy(t),lo[n]=0,lo.normalize();let l=.5*o/(o+a),u=1-lo.angleTo(s)/c;return Math.sign(lo[e])===1?u*l:a/(o+a)+l+l*(1-u)}var os=class s extends mn{constructor(t=1,e=1,n=1,i=2,r=.1){let o=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new U,l=new U,u=new U(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,m=d.length/6,_=new U,g=.5/o;for(let p=0,y=0;p<d.length;p+=3,y+=2)switch(c.fromArray(d,p),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),d[p+0]=u.x*Math.sign(c.x)+l.x*r,d[p+1]=u.y*Math.sign(c.y)+l.y*r,d[p+2]=u.z*Math.sign(c.z)+l.z*r,h[p+0]=l.x,h[p+1]=l.y,h[p+2]=l.z,Math.floor(p/m)){case 0:_.set(1,0,0),f[y+0]=Ln(_,l,"z","y",r,n),f[y+1]=1-Ln(_,l,"y","z",r,e);break;case 1:_.set(-1,0,0),f[y+0]=1-Ln(_,l,"z","y",r,n),f[y+1]=1-Ln(_,l,"y","z",r,e);break;case 2:_.set(0,1,0),f[y+0]=1-Ln(_,l,"x","z",r,t),f[y+1]=Ln(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),f[y+0]=1-Ln(_,l,"x","z",r,t),f[y+1]=1-Ln(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),f[y+0]=1-Ln(_,l,"x","y",r,t),f[y+1]=1-Ln(_,l,"y","x",r,e);break;case 5:_.set(0,0,-1),f[y+0]=Ln(_,l,"x","y",r,t),f[y+1]=1-Ln(_,l,"y","x",r,e);break}}static fromJSON(t){return new s(t.width,t.height,t.depth,t.segments,t.radius)}};var co=class extends wi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new mn;t.deleteAttribute("uv");let e=new ve({side:nn}),n=new ve,i=new ti(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Me(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Zi(t,n,6),a=new Ce;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let c=new Me(t,sr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new Me(t,sr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new Me(t,sr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new Me(t,sr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let h=new Me(t,sr(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let f=new Me(t,sr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function sr(s){return new Wr({color:0,emissive:16777215,emissiveIntensity:s})}function Nd(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new Ne,l=0;for(let u=0;u<s.length;++u){let d=s[u],h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(e){let u=0,d=[];for(let h=0;h<s.length;++h){let f=s[h].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+u);u+=s[h].attributes.position.count}c.setIndex(d)}for(let u in r){let d=Dd(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][h]);let m=Dd(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(m)}}}return c}function Dd(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){let u=s[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new an(o,e,n),c=0;for(let l=0;l<s.length;++l){let u=s[l];if(u.isInterleavedBufferAttribute){let d=c/e;for(let h=0,f=u.count;h<f;h++)for(let m=0;m<e;m++){let _=u.getComponent(h,m);a.setComponent(h+d,m,_)}}else o.set(u.array,c);c+=u.count*e}return i!==void 0&&(a.gpuType=i),a}function dh(s,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count,o=0,a=Object.keys(s.attributes),c={},l={},u=[],d=["getX","getY","getZ","getW"],h=["setX","setY","setZ","setW"];for(let y=0,w=a.length;y<w;y++){let v=a[y],M=s.attributes[v];c[v]=new M.constructor(new M.array.constructor(M.count*M.itemSize),M.itemSize,M.normalized);let S=s.morphAttributes[v];S&&(l[v]||(l[v]=[]),S.forEach((C,x)=>{let T=new C.array.constructor(C.count*C.itemSize);l[v][x]=new C.constructor(T,C.itemSize,C.normalized)}))}let f=t*.5,m=Math.log10(1/t),_=Math.pow(10,m),g=f*_;for(let y=0;y<r;y++){let w=n?n.getX(y):y,v="";for(let M=0,S=a.length;M<S;M++){let C=a[M],x=s.getAttribute(C),T=x.itemSize;for(let R=0;R<T;R++)v+=`${Math.trunc(x[d[R]](w)*_+g)},`}if(v in e)u.push(e[v]);else{for(let M=0,S=a.length;M<S;M++){let C=a[M],x=s.getAttribute(C),T=s.morphAttributes[C],R=x.itemSize,L=c[C],N=l[C];for(let O=0;O<R;O++){let D=d[O],B=h[O];if(L[B](o,x[D](w)),T)for(let Y=0,W=T.length;Y<W;Y++)N[Y][B](o,T[Y][D](w))}}e[v]=o,u.push(o),o++}}let p=s.clone();for(let y in s.attributes){let w=c[y];if(p.setAttribute(y,new w.constructor(w.array.slice(0,o*w.itemSize),w.itemSize,w.normalized)),y in l)for(let v=0;v<l[y].length;v++){let M=l[y][v];p.morphAttributes[y][v]=new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)}}return p.setIndex(u),p}var lt=Math.PI,ee=lt*2,pe=(s,t=0,e=1)=>Math.min(e,Math.max(t,s)),_t=(s,t,e)=>s+(t-s)*e,ce=s=>(s=pe(s),s*s*(3-2*s)),wl=s=>(s=pe(s),s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2),cs=s=>1-Math.pow(1-pe(s),3),ne=(s,t,e)=>pe((s-t)/(e-t)),$t=(s,t,e,n=.35)=>ce((s-t)/n)*ce((e-s)/n),si=(s,t)=>((t-s+lt)%ee+ee)%ee-lt,fo=(s,t,e)=>s+si(s,t)*e,po=(s,t)=>Math.atan2(t[0]-s[0],t[1]-s[1]),Ut=(s,t,e)=>new U(s,t,e),En=s=>{let t=Math.sin(s*127.1+311.7)*43758.5453;return t-Math.floor(t)},as=(s,t,e)=>"#"+new ie(s).lerp(new ie(t),e).getHexString(),je=9,Qe=7.5,Ze=3,fn=.18,fh=new Map;function K(s,t={}){let e=s+JSON.stringify(t);if(fh.has(e))return fh.get(e);let n=new ve({color:s,roughness:t.r??.75,metalness:t.m??0,emissive:t.e||"#000000",emissiveIntensity:t.ei??1,transparent:!!t.op,opacity:t.op??1,flatShading:!!t.flat,side:t.ds?gn:Hn});return fh.set(e,n),n}var jx=(s,t={})=>new We({color:s,toneMapped:!1,transparent:!!t.op||!!t.map,opacity:t.op??1,map:t.map||null,blending:t.add?Ni:pi,depthWrite:!t.add,side:t.ds?gn:Hn});function Tn(s,t=!0,e=!0){return s.traverse(n=>{n.isMesh&&(n.castShadow=t,n.receiveShadow=e)}),s}function Ot(s,t,e,n=0,i=0,r=0,o={}){let a=new Me(s,t);return a.position.set(n,i,r),o.rx&&(a.rotation.x=o.rx),o.ry&&(a.rotation.y=o.ry),o.rz&&(a.rotation.z=o.rz),o.s&&a.scale.set(...Array.isArray(o.s)?o.s:[o.s,o.s,o.s]),a.castShadow=o.cast!==!1,a.receiveShadow=o.recv!==!1,e&&e.add(a),a}function ct(s,t,e,n,i=.015,r={}){let o=n[0]-e[0],a=n[1]-e[1],c=n[2]-e[2],l=Math.min(i,o/2-.001,a/2-.001,c/2-.001),u=l>.002?new os(o,a,c,3,l):new mn(o,a,c);return Ot(u,t,s,(e[0]+n[0])/2,(e[1]+n[1])/2,(e[2]+n[2])/2,r)}var Jt=(s,t,e,n,i,r,o,a,c={})=>Ot(new $i(e,n,i,c.seg||24),t,s,r,o,a,c),se=(s,t,e,n,i,r,o={})=>Ot(new ln(e,o.seg||24,o.seg2||16),t,s,n,i,r,o),wn=(s,t,e,n,i,r,o,a={})=>Ot(new Dr(e,n,6,16),t,s,i,r,o,a);function Ge(s,t){let e=document.createElement("canvas");e.width=s,e.height=t;let n=e.getContext("2d"),i=new Lr(e);return i.colorSpace=tn,i.anisotropy=4,{c:e,g:n,t:i,w:s,h:t}}function ki(s,t,e,n,i,r){s.beginPath(),s.moveTo(t+r,e),s.arcTo(t+n,e,t+n,e+i,r),s.arcTo(t+n,e+i,t,e+i,r),s.arcTo(t,e+i,t,e,r),s.arcTo(t,e,t+n,e,r),s.closePath()}function ls(s,t=1,e=.6){let n=Ge(128,128),i=n.g.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.35,"rgba(255,255,255,.35)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.g.fillStyle=i,n.g.fillRect(0,0,128,128);let r=new Ri(new fi({map:n.t,color:s,blending:Ni,depthWrite:!1,transparent:!0,opacity:e,toneMapped:!1}));return r.scale.setScalar(t),r}function ho(s,t,e,n={}){let i=new Vs(s,!1,"centripetal"),r=n.seg||Math.max(6,s.length*3),o=n.rad||6,a=n.ach??.55,c=i.computeFrenetFrames(r,!1),l=[],u=[],d=[],h=[],f=n.ref||null;for(let _=0;_<=r;_++){let g=_/r,p=i.getPointAt(g),y=c.tangents[_],w=c.normals[_].clone(),v=c.binormals[_].clone();if(f){let T=(typeof f=="function"?f(p):f).clone();w=T.sub(y.clone().multiplyScalar(T.dot(y))).normalize(),v=new U().crossVectors(y,w).normalize()}let M=_t(t,e,Math.pow(g,n.curvaR||1))*(n.bulbo?1+n.bulbo*Math.sin(lt*g):1)*(.2+.8*ce(g/.12))*(.35+.65*ce((1-g)/.1)),S=n.raiz??.62,C=n.ponta??1.12,x=_t(S,C,Math.pow(g,.8));for(let T=0;T<=o;T++){let R=T/o*ee,L=Math.cos(R),N=Math.sin(R),O=w.clone().multiplyScalar(L*a),D=v.clone().multiplyScalar(N),B=O.clone().add(D);l.push(p.x+B.x*M,p.y+B.y*M,p.z+B.z*M);let Y=w.clone().multiplyScalar(L/Math.max(a,.2)).add(v.clone().multiplyScalar(N)).normalize();u.push(Y.x,Y.y,Y.z),d.push(x,x,x)}}for(let _=0;_<r;_++)for(let g=0;g<o;g++){let p=_*(o+1)+g,y=p+o+1;h.push(p,y,p+1,y,y+1,p+1)}let m=new Ne;return m.setAttribute("position",new le(l,3)),m.setAttribute("normal",new le(u,3)),m.setAttribute("color",new le(d,3)),m.setIndex(h),m}function Ml(s,t=.85){let e=(s.index,s),n=e.attributes.position.count;return e.attributes.uv&&e.deleteAttribute("uv"),e.attributes.uv1&&e.deleteAttribute("uv1"),e.setAttribute("color",new le(new Array(n*3).fill(t),3)),e.index,e}function bl(s){let t=s.map(e=>{if(!e.index){let n=e.attributes.position.count;e.setIndex([...Array(n).keys()])}return["uv","uv1","uv2"].forEach(n=>e.attributes[n]&&e.deleteAttribute(n)),e});return Nd(t,!1)}var Qx={triste:{hemi:.55,key:.85,keyCor:"#AFC0E6",amb:"#7F8FB3",lamp:!1,pend:!1,raio:.1,tv:"#EF4444",mon:"#EF4444",exp:.9},preocupado:{hemi:.75,key:1.35,keyCor:"#FFE3C7",amb:"#B9A58F",lamp:!0,pend:!1,raio:.16,tv:"#EF4444",mon:"#F97316",exp:.97},tranquilo:{hemi:.85,key:1.7,keyCor:"#FFF4E3",amb:"#C8C6E8",lamp:!0,pend:!1,raio:.28,tv:"#818CF8",mon:"#60A5FA",exp:1},feliz:{hemi:.95,key:2.1,keyCor:"#FFF1D6",amb:"#E8DCC0",lamp:!0,pend:!0,raio:.4,tv:"#22C55E",mon:"#22C55E",exp:1.04},euforico:{hemi:.8,key:1.6,keyCor:"#FFE0F2",amb:"#E9C9E6",lamp:!0,pend:!0,raio:.36,tv:"#FACC15",mon:"#FACC15",exp:1.05}},Ke={p:["#F6D3B3","#F2C3A0","#D9A27A","#B07850","#7A4E33","#4F3123"],c:["#2B1B12","#3B261B","#6B4226","#A86B3C","#D9B26A","#EFDDB0","#8E8E8E","#B33A2A","#2F4FC0","#D9568E"],l:["#2F3B52","#1F2937","#5B4636","#3F5F45","#D6CDBB","#6F86B5"],s:["#1B2230","#F4F6F8","#C02626","#7C4A21","#2563EB"]},t_={p:5,c:9,k:9,b:3,l:5,o:1,a:4,w:4,r:5,e:1,s:4},e_={p:1,c:1,k:0,b:0,l:0,o:0,a:2,w:2,r:0,e:0,s:0},Ud=s=>{let t={...e_};return String(s||"").replace(/([pckbloawres])(\d)/g,(e,n,i)=>{t[n]=Math.min(+i,t_[n])}),t},n_=[.9,.95,1,1.05,1.1],i_=[.84,.92,1,1.12,1.26],Dn={alt:.89,dy:0,hz:0,lean:0,side:0,twist:0,nod:0,turn:0,roll:0,aL:[0,.12,.2],aR:[0,.12,.2],lL:[0,0],lR:[0,0],olhar:[0,0],boch:0,abre:.6,lagrima:0,nuvem:0,balao:0,yawAdd:0,sent:0,kL:0,kR:0,ikL:null,ikR:null,mL:0,mR:0,taco:-1,recuo:0,porta:0,fxk:0,gole:0,olhos:"A",boca:"leve",sob:"",item:"",balaoT:""},_h=["alt","dy","hz","lean","side","twist","nod","turn","roll","boch","abre","lagrima","nuvem","balao","yawAdd","sent","kL","kR","mL","mR","taco","recuo","porta","fxk","gole"],Al=["aL","aR","lL","lR","olhar"],s_=["olhos","boca","sob","item","balaoT","bolas","solta","fx"],vh=[.47,.565,.52],r_=vh[1]/vh[0]*.98,rr=.29,o_=.325;function Sl(s,t=0,e=0,n=0,i=0,r=0,o=0,a=null){let c=new _e().compose(Ut(t,e,n),new Ve().setFromEuler(new Cn(i,r,o)),a?Ut(...a):Ut(1,1,1));return s.applyMatrix4(c),s}function Bd(s,t){let e=s.attributes.position,n=new U;for(let i=0;i<e.count;i++){n.fromBufferAttribute(e,i);let r=n.clone().divideScalar(t),o=pe(-r.y),a=pe(r.y),c=1-.2*Math.pow(o,1.6)+.03*(1-Math.abs(r.y)),l=1-.1*Math.pow(o,2)*(r.z<0?1.4:.6)-.04*a*(r.z<0?1:0),u=1+.04*o;e.setXYZ(i,n.x*c,n.y*u,n.z*l+(r.z>0?.035*t*Math.pow(o,2)*r.z:0))}return s.computeVertexNormals(),s}var Rl=class{constructor(t,e,n,i){let r=this.ap=Ud(n);this.molas={},this.cor=t||"#2457F5";let o=this.camisa=new ve({color:this.cor,roughness:.86}),a=this.gola=new ve({color:this.cor,roughness:.8}),c=this.branco=new ve({color:"#F4F6FA",roughness:.7}),l=this.pele=new ve({color:Ke.p[r.p],roughness:.55,emissive:"#4A1D0C",emissiveIntensity:.16}),u=this.peleSom=new ve({color:Ke.p[r.p],roughness:.6,emissive:"#4A1D0C",emissiveIntensity:.1}),d=this.cab=new ve({color:Ke.c[r.c],roughness:.5,metalness:.05,vertexColors:!0}),h=this.cabRaspado=new ve({color:Ke.c[r.c],roughness:.95}),f=this.calca=new ve({color:Ke.l[r.l],roughness:.88}),m=this.sapMat=new ve({color:Ke.s[r.s],roughness:.45}),_=this.solaMat=new ve({color:"#F4F6F8",roughness:.55}),g=K("#F8FAFC",{r:.9}),p=K("#2A1D16",{r:.45}),y=K("#D9B44A",{r:.28,m:.7});this.gir=[];let w=(I,k=1)=>(this.gir.push({m:I,s:I.scale.clone(),k}),I),v=this.root=new Et,M=this.hips=new Et;v.add(M),w(Ot(new ln(.155,28,18),f,M,0,.025,0,{s:[1.06,.64,.82]})),this.cinto=w(Jt(M,p,.145,.145,.03,0,.066,0,{s:[1.06,1,.8],seg:32})),this.fivela=ct(M,y,[-.018,.052,.108],[.018,.082,.118],.006);let S=this.spine=new Et;S.position.y=.04,M.add(S);let C=new Ki([[0,-.03],[.138,-.01],[.142,.08],[.146,.15],[.162,.25],[.176,.34],[.182,.41],[.172,.462],[.135,.505],[.074,.536],[0,.55]].map(I=>new xt(I[0],I[1]))).getPoints(48);this.torso=w(Ot(new qs(C,48),o,S,0,0,0,{s:[1.06,1,.74]})),this.barriga=w(se(S,o,.12,0,.13,0,{s:[1.05,1,.82],seg:28,seg2:18}),1),this.barriga.visible=!1;let x=this.roupas=[],T=I=>{let k=new Et;return S.add(k),I(k),k.visible=!1,x.push(k),k};T(I=>{let k=new mn(.08,.01,.07);for(let X of[-1,1])Ot(k,a,I,X*.042,.522,.072,{rx:.62,rz:-X*.55});Ot(new Be(.066,.017,10,28),a,I,0,.535,-.004,{rx:lt/2});for(let X of[.48,.44])se(I,K("#E8EDF5",{r:.4}),.0078,0,X,.122,{seg:10,seg2:8})}),T(I=>{Ot(new Be(.07,.012,10,28),a,I,0,.528,.004,{rx:lt/2-.12})}),T(I=>{Ot(new Be(.085,.034,12,28,lt*1.25),a,I,0,.53,-.025,{rx:lt/2-.25,rz:-lt*.125+lt}),se(I,a,.1,0,.5,-.1,{s:[1.05,.6,.55]});for(let k of[-1,1])wn(I,K("#F1F5F9",{r:.6}),.006,.09,k*.03,.45,.13,{rx:.08});ct(I,a,[-.09,.07,.098],[.09,.18,.124],.025,{rx:-.05}),Jt(I,a,.15,.15,.04,0,-.005,0,{s:[1.06,1,.76],seg:32})}),T(I=>{for(let et of[-1,1])Ot(new mn(.075,.008,.06),c,I,et*.04,.525,.07,{rx:.7,rz:-et*.75});Ot(new Be(.064,.013,10,28),c,I,0,.535,-.004,{rx:lt/2});let k=this.gravata=new ve({color:this.cor,roughness:.5});ct(I,k,[-.02,.49,.112],[.02,.525,.13],.008);let X=new Ws;X.moveTo(-.018,0),X.lineTo(.018,0),X.lineTo(.032,-.25),X.lineTo(0,-.29),X.lineTo(-.032,-.25),X.closePath(),Ot(new Gr(X,{depth:.008,bevelEnabled:!0,bevelSize:.003,bevelThickness:.003,bevelSegments:1}),k,I,0,.495,.118,{rx:-.1});for(let et of[.4,.3,.2,.1])se(I,K("#CBD5E1",{r:.4}),.006,.045,et,.14-et*.02,{seg:8,seg2:6})}),T(I=>{let k=new ln(.17,24,16,-.42,.84,.35,1.75);Ot(k,c,I,0,.27,0,{s:[.95,1.25,.82]});for(let X of[-1,1])ct(I,K("#475569",{r:.3,m:.6}),[-.004,-0,-.004],[.004,.42,.004],.002).position.set(X*.075,.24,.136-0);Ot(new Be(.078,.026,10,28),a,I,0,.525,-.012,{rx:lt/2-.15}),Jt(I,a,.15,.15,.04,0,-.005,0,{s:[1.06,1,.76],seg:32})}),T(I=>{Ot(new Be(.075,.01,10,28),a,I,0,.52,.01,{rx:lt/2-.25})}),this.estampa=Ge(128,128);let R=Ot(new Xe(.1,.1),new We({map:this.estampa.t,transparent:!0,alphaTest:.1,toneMapped:!1}),S,-.072,.37,.126,{cast:!1,ry:-.1});this.estampaPlano=R,this.temIcone=!1,this.setIcone(e);let L=this.neck=new Et;L.position.y=.52,S.add(L),Jt(L,l,.05,.056,.12,0,.03,.004,{seg:20});let N=this.head=new Et;N.position.set(0,.05,.01),N.scale.set(...vh),L.add(N);let O=.2,D=.24;this.hc=O,this.R=D,Ot(Bd(new ln(D,56,40),D),l,N,0,O,0);for(let I of[-1,1])se(N,l,.058,I*(D-.004),O-.01,-.012,{s:[.5,1.05,.85],seg:16,seg2:12}),se(N,u,.032,I*(D+.016),O-.012,-.006,{s:[.3,.8,.5],seg:12,seg2:10});se(N,l,.02,0,O-.008,D-.004,{s:[.7,1.8,.85],seg:14,seg2:10}),se(N,l,.026,0,O-.046,D+.003,{s:[1.05,.9,1],seg:18,seg2:12});for(let I of[-1,1])se(N,l,.014,I*.024,O-.054,D-.007,{s:[1,.8,1],seg:12,seg2:8});this.rosto=Ge(512,384),this.rosto.g.scale(2,2);let B=Bd(new ln(D+.003,48,28,lt/2-.9,1.8,.85,1.3),D+.003),Y=new ve({map:this.rosto.t,transparent:!0,alphaTest:.04,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-2});Ot(B,Y,N,0,O,0,{cast:!1}),this.rostoKey="",this.montarCabelo(N,O,D),this.montarBarba(N,O,D),this.montarOculos(N,O,D),this.montarChapeus(N,O,D),this.dedos={L:[],R:[]};let W=(I,k)=>{let X=new Et;X.position.set(.19*I,.437,0),S.add(X);let et=w(se(X,o,.058,0,-.008,0,{seg:24,seg2:18})),tt=w(se(X,l,.05,0,-.012,0,{seg:20,seg2:14}));w(Jt(X,l,.046,.041,rr,0,-rr/2,0,{seg:20}));let yt=w(Jt(X,o,.058,.053,.19,0,-.095,0,{seg:24})),E=w(Ot(new Be(.054,.009,8,24),o,X,0,-.19,0,{rx:lt/2})),P=w(Jt(X,o,.058,.05,rr+.02,0,-rr/2+.01,0,{seg:24})),G=new Et;G.position.y=-rr,X.add(G);let Q=w(se(G,l,.041,0,0,0,{seg:18,seg2:12})),rt=w(se(G,o,.05,0,0,0,{seg:18,seg2:12}));w(Jt(G,l,.041,.031,.25,0,-.135,0,{seg:20}));let Mt=w(Jt(G,o,.05,.042,.24,0,-.12,0,{seg:22})),oe=w(Jt(G,o,.043,.043,.03,0,-.245,0,{seg:22})),it=new Et;it.position.y=-.27,G.add(it),se(it,l,.034,0,-.004,0,{s:[.75,.7,1.1],seg:14,seg2:10}),ct(it,l,[-.016,-.094,-.04],[.016,-.008,.04],.014);let pt=this.dedos[k];[[-.028,.036],[-.0095,.043],[.0095,.041],[.028,.033]].forEach(([vt,Xt])=>{let Gt=new Et;Gt.position.set(0,-.092,vt),it.add(Gt),wn(Gt,l,.0108,Xt,0,-Xt/2-.004,0);let Kt=new Et;Kt.position.y=-Xt-.006,Gt.add(Kt),wn(Kt,l,.0098,Xt*.8,0,-Xt*.4-.002,0),pt.push({p1:Gt,p2:Kt})});let mt=new Et;mt.position.set(-I*.013,-.028,.036),mt.rotation.set(.4,0,I*.5),it.add(mt),wn(mt,l,.0125,.034,0,-.022,0);let ft=new Et;return ft.position.y=-.048,mt.add(ft),wn(ft,l,.0112,.028,0,-.016,0),pt.push({p1:mt,p2:ft,polegar:!0}),{sh:X,el:G,hand:it,lado:I,ombro:et,ombroPele:tt,mangaC:yt,bainhaC:E,mangaL:P,cot:Q,cotM:rt,antM:Mt,punho:oe,qFK:new Ve,qIK:new Ve}};this.L=W(-1,"L"),this.R=W(1,"R"),this.cL=this.cR=.28;let ut=I=>{let k=new Et;k.position.set(.094*I,-.01,0),M.add(k),w(se(k,f,.086,0,-.02,0,{seg:20,seg2:14})),w(Jt(k,f,.082,.06,.42,0,-.21,0,{seg:24}));let X=new Et;X.position.y=-.42,k.add(X);let et=w(se(X,f,.06,0,0,.004,{seg:18,seg2:12})),tt=w(se(X,l,.05,0,-.03,.006,{seg:18,seg2:12})),yt=w(Ot(new Be(.062,.012,8,22),f,X,0,-.03,0,{rx:lt/2})),E=w(Jt(X,f,.059,.047,.38,0,-.19,0,{seg:24})),P=w(Jt(X,l,.046,.036,.38,0,-.19,0,{seg:20})),G=w(Ot(new Be(.049,.01,8,20),f,X,0,-.372,0,{rx:lt/2})),Q=new Et;Q.position.y=-.4,X.add(Q);let rt=Jt(Q,g,.038,.041,.07,0,.012,0,{seg:16});return ct(Q,m,[-.05,-.054,-.072],[.05,.022,.1],.032),se(Q,m,.052,0,-.028,.1,{s:[1,.66,1.2],seg:18,seg2:12}),ct(Q,_,[-.052,-.078,-.075],[.052,-.05,.164],.013),ct(Q,K("#E9EDF2",{r:.7}),[-.022,.012,-.012],[.022,.026,.072],.006,{rx:-.25}),{hp:k,kn:X,ft:Q,joelhoC:et,joelhoP:tt,bermuda:yt,canC:E,canP:P,barra:G,meiaM:rt}};this.PL=ut(-1),this.PR=ut(1),Tn(v,!0,!1);let $=Ge(64,64),st=$.g.createRadialGradient(32,32,0,32,32,32);st.addColorStop(0,"rgba(0,0,0,.45)"),st.addColorStop(1,"rgba(0,0,0,0)"),$.g.fillStyle=st,$.g.fillRect(0,0,64,64),this.blob=new Me(new Xe(.7,.7),new We({map:$.t,transparent:!0,depthWrite:!1})),this.blob.rotation.x=-lt/2,this.blob.position.y=.004,this.mL=new U,this.mR=new U,this.gp=new U(0,-.06,0),this.pDy=0,this.pNod=0,this.pT=null,this.pYaw=null,this.esc=1,this.setAparencia(n,i)}montarCabelo(t,e,n){let i=this.cab,r=this.cortes=[],o=Ut(0,e,0),a=(p,y,w=0)=>Ut(Math.sin(p)*Math.sin(y),Math.cos(p),Math.sin(p)*Math.cos(y)).multiplyScalar(n+w).add(o),c=p=>p.clone().sub(o).normalize(),l=p=>{let y=Math.cos(p);return y>0?_t(1.32,.98,Math.pow(y,1.4)):_t(1.32,1.95,Math.pow(-y,.9))},u=(p=.012,y=1.36,w=0)=>{let v=new ln(n+p,56,32,0,ee,0,2.1),M=v.attributes.position,S=new U;for(let C=0;C<M.count;C++){S.fromBufferAttribute(M,C);let x=Math.acos(pe(S.y/(n+p),-1,1)),T=Math.atan2(S.x,S.z),R=l(T)+w;if(x>R){let L=a(R,T,p).sub(o);M.setXYZ(C,L.x,L.y,L.z)}}return v.computeVertexNormals(),Sl(v,0,e,0),Ml(v,.7)},d=(p,y,w,v={})=>ho(p,y,w,{ref:M=>c(M),...v}),h=(p,y,w,v,M,S,C=7,x=.012)=>{let T=[];for(let R=0;R<=C;R++){let L=R/C;T.push(a(_t(p,w,L),_t(y,v,L),_t(M,S,L)+x*Math.sin(lt*L)))}return T},f=(p,y)=>En(p*3.7+y)-.5,m=(p,y)=>{let w=new Et;if(p.length){let v=Ot(bl(p),i,w);v.castShadow=!0}return y&&y(w),r[g]=w,w},_=[];_[0]=()=>{{let p=[u(.012)];for(let S=0;S<26;S++){let C=lt*.32+S/25*lt*1.36+f(S,1)*.08;p.push(d(h(.45+f(S,2)*.1,C,l(C)-.05,C+f(S,3)*.12,.03,.006),.045,.014))}let y=m(p),w=this.fio=new Et;w.position.copy(a(.45,0,0)),y.add(w);let v=[],M=w.position.clone();for(let S=0;S<16;S++){let C=-.75+S/15*1.5+f(S,4)*.06,x=.07+.035*Math.cos(C*1.6),T=[a(.95,C*.9,.006),a(.62,C*.85,x*.75),a(.3,C*.7,x),a(.05+f(S,5)*.1,C*.5+lt*.06,x*.65),a(.42,lt+C*.4,.012)].map(R=>R.sub(M));v.push(ho(T,.05,.016,{ref:R=>R.clone().add(M).sub(o).normalize(),bulbo:.25}))}Ot(bl(v),i,w),this.fioBase=w}},_[1]=()=>{{let p=[u(.012)];for(let y=0;y<44;y++){let w=y/44*ee+f(y,6)*.1,v=Math.cos(w),M=l(w)+(v>.5?.02:-.02);p.push(d(h(.08+En(y)*.2,w*.85+f(y,7)*.2,M,w,.03,v>.5?.02:.008,7,.018),.042,.012))}m(p)}},_[2]=()=>{{let p=new Et;Ot(u(.004,1.36,.04),this.cabRaspado,p),r[g]=p}},_[3]=()=>{{let p=new ln(n+.03,40,18,lt-.5,lt+1,.75,1.55),y=p.attributes.position;for(let M=0;M<y.count;M++){let S=y.getY(M);S<0&&y.setY(M,S*1.9);let C=y.getX(M),x=y.getZ(M);if(S<0){let T=1+.12*(-S/n);y.setX(M,C*T),y.setZ(M,x*T)}}p.computeVertexNormals(),Sl(p,0,e,0);let w=[u(.014),Ml(p,.66)],v=.35;for(let M=0;M<64;M++){let S=M%2?1:-1,C=Math.floor(M/2)/31,x=v+S*(.06+C*lt*.94)+f(M,8)*.05,T=Math.cos(x),R=.16+En(M+2)*.08,L=h(R,v+S*.04,lt*.4,x,.032,.036,4,.012),N=l(x),O=a(Math.min(N,1.45),x,.04);if(T>.6)L.push(a(.92,x,.045),a(1.08,x*1.25+S*.1,.035));else{L.push(O);let D=c(O).setY(0).normalize(),B=.3+.1*(1-Math.abs(T))+En(M)*.05;L.push(O.clone().add(D.clone().multiplyScalar(.035)).add(Ut(0,-B*.5,0)),O.clone().add(D.clone().multiplyScalar(.06)).add(Ut(0,-B,T<-.3?-.02:0)))}w.push(d(L,.085,.03,{bulbo:.15,seg:24,ach:.4,raiz:.78}))}m(w)}},_[4]=()=>{{let p=[u(.018)],y=0;for(let w=0;w<200&&y<120;w++){let v=Math.acos(1-2*((w+.5)/200)),M=w*2.39996;if(v>l(Math.atan2(Math.sin(M),Math.cos(M)))-.05)continue;y++;let S=a(v,M,.03),C=c(S),x=Ut(-C.z,0,C.x).normalize();x.lengthSq()<.5&&x.set(1,0,0);let T=new U().crossVectors(C,x),R=[],L=.026+En(w)*.012,N=1.5;for(let O=0;O<=12;O++){let D=O/12,B=D*N*ee+w;R.push(S.clone().add(x.clone().multiplyScalar(Math.cos(B)*L)).add(T.clone().multiplyScalar(Math.sin(B)*L)).add(C.clone().multiplyScalar(D*.045)))}p.push(ho(R,.02,.014,{ach:1,rad:6,seg:18}))}m(p)}},_[5]=()=>{{let p=[u(.02)],y=Ut(0,e+.1,-.08);for(let v=0;v<170;v++){let M=1-2*((v+.5)/170),S=Math.sqrt(1-M*M),C=v*2.39996,x=Ut(S*Math.sin(C),M,S*Math.cos(C)),T=y.clone().add(x.clone().multiply(Ut(.27,.24,.26)));if(T.z-o.z>.12&&T.y<e+.12||T.y<e-.12)continue;let R=new Qi(.058+En(v)*.016,1),L=dh(R);L.computeVertexNormals(),Sl(L,T.x,T.y,T.z),p.push(Ml(L,.82+En(v+1)*.25))}let w=m(p);w.userData.volume=w.children[0]}},_[6]=()=>{{let p=[u(.014)],y=Ut(0,e+.2,-.17);for(let x=0;x<30;x++){let T=x/30*ee,R=l(T);if(Math.cos(T)<-.6)continue;let L=a(R-.02,T,.006),N=a(R*.5,T*.6+lt*.4*Math.sign(Math.sin(T)||1),.022);p.push(d([L,N,y.clone().add(Ut(0,-.02,.02))],.04,.02))}let w=new Qi(.095,3),v=w.attributes.position,M=new U;for(let x=0;x<v.count;x++){M.fromBufferAttribute(v,x);let T=M.clone().normalize();M.copy(T.multiplyScalar(.095*(1+.06*Math.sin(Math.atan2(T.x,T.z)*7+T.y*9)))),v.setXYZ(x,M.x,M.y,M.z)}let S=dh(w);S.computeVertexNormals(),Sl(S,y.x,y.y+.04,y.z-.03,.4),p.push(Ml(S,1));let C=m(p,x=>Ot(new Be(.06,.012,8,20),K("#111827",{r:.5}),x,y.x,y.y-.02,y.z,{rx:lt/2+.4}));C.userData.volume=C.children[0]}},_[7]=()=>{{let p=new Et;Ot(u(.004,1.36,.04),this.cabRaspado,p);let y=[u(.012,0,-0).applyMatrix4(new _e)];y.length=0;for(let v=0;v<15;v++){let M=v/14,S=_t(-.95,1.75,M),C=Math.abs(S),x=S<0?0:lt,T=.07+.06*Math.sin(lt*pe(M*1.15)),R=a(C,x,-.005),L=c(R),N=(S<0,Ut(0,0,-1)),O=R.clone().add(L.clone().multiplyScalar(T)).add(Ut(0,0,-.05-.03*M)).add(N.multiplyScalar(0));for(let D of[-1,0,1])y.push(ho([a(C+(S<0?-1:1)*0,x,-.004).add(Ut(D*.022,0,0)),R.clone().add(L.clone().multiplyScalar(T*.5)).add(Ut(D*.012,0,-.01)),O.clone().add(Ut(D*.006,0,0))],.065,.01,{ref:Ut(1,0,0),rad:6,seg:10,ach:.8,raiz:.7}))}let w=Ot(bl(y),i,p);p.userData.volume=w,r[g]=p}},_[8]=()=>{{let p=[u(.012)],y=Ut(0,e+.06,-n-.03);for(let S=0;S<34;S++){let C=S/34*ee,x=l(C);Math.cos(C)<-.7||p.push(d([a(x-.03,C,.006),a(x*.55,C*.75+(Math.sin(C)>0?.6:-.6),.02),y.clone().add(Ut(0,.01,.03))],.04,.02))}let w=m(p,S=>Ot(new Be(.035,.012,8,18),K("#E11D48",{r:.5}),S,y.x,y.y,y.z,{rx:.2})),v=new Et;v.position.copy(y),w.add(v);let M=[];for(let S=0;S<9;S++){let C=S/9*ee,x=Ut(Math.cos(C)*.018,Math.sin(C)*.015,0);M.push(ho([x.clone(),x.clone().add(Ut(0,.02,-.07)),x.clone().multiplyScalar(1.6).add(Ut(0,-.12,-.1)),x.clone().multiplyScalar(1.2).add(Ut(0,-.32,-.06)),x.clone().multiplyScalar(.4).add(Ut(0,-.44,-.03))],.032,.008,{ref:Ut(0,0,-1),bulbo:.4,seg:20}))}Ot(bl(M),i,v),this.molas.rabo={g:v,a:0,v:0,b:0,vb:0},w.userData.volume=v}},_[9]=()=>{r[g]=new Et};let g=0;this.corte=p=>{if(!r[p]){g=p,_[p]();let y=r[p];y.visible=!1,Tn(y,!0,!1),t.add(y),this.chapeuAtual!==void 0&&y.userData.volume&&(y.userData.volume.visible=!this.chapeuAtual)}return r[p]}}montarBarba(t,e,n){let i=this.barbas=[null],r=this.barbaMat=new ve({color:Ke.c[this.ap.c],roughness:1}),o=c=>{for(let l of[-1,1])wn(c,r,.0095,.048,l*.028,e-.078,n-.012,{rz:lt/2+l*.25,s:[1,1,.6]})},a=new Et;o(a),se(a,r,.028,0,e-.17,n-.06,{s:[1,1.15,.5],seg:14,seg2:10}),i.push(a),a=new Et,o(a),Ot(new ln(n+.008,40,16,lt/2-1.3,2.6,2,.85),r,a,0,e,0),i.push(a),a=new Et;for(let c of[-1,1])wn(a,r,.012,.05,c*.03,e-.076,n-.01,{rz:lt/2+c*.35,s:[1,1,.7]});i.push(a),i.forEach(c=>{c&&(c.visible=!1,t.add(c))})}montarOculos(t,e,n){let i=this.oculos=new Et,r=K("#1F2937",{r:.35,m:.3});this.lente=new ve({color:"#0B1220",roughness:.15,metalness:.4,transparent:!0,opacity:.85});let o=.104,a=e+.005,c=n+.03;for(let l of[-1,1]){Ot(new Be(.056,.007,8,28),r,i,l*o,a,c,{ry:l*.18});let u=Ot(new Ji(.054,24),this.lente,i,l*o,a,c-.002,{ry:l*.18,cast:!1});u.name="lente",ct(i,r,[-.006,-.008,-.2],[.006,.008,0],.003).position.set(l*(n+.012),a+.01,c-.12),ct(i,r,[-.05,-.007,-.006],[.05,.007,.006],.003).position.set(l*(o+.1),a+.008,c-.012)}Jt(i,r,.005,.005,.07,0,a+.008,c+.006,{rz:lt/2}),i.visible=!1,t.add(i)}montarChapeus(t,e,n){let i=this.chapeus={},r=new Et,o=K("#2563EB",{r:.7});Ot(new ln(n+.035,36,16,0,ee,0,1.3),o,r,0,e+.01,-.01,{rx:-.18}),ct(r,o,[-.15,-.01,0],[.15,.01,.2],.01,{rx:.18}).position.set(0,e+.12,.19),se(r,K("#1E3A8A"),.025,0,e+n+.03,-.02,{seg:10,seg2:8}),i.a_bone=r,r=new Et;let a=K("#111827",{r:.6});Jt(r,a,n+.03,n+.03,.12,0,e+.16,0,{seg:36}),ct(r,a,[-.34,-.012,-.34],[.34,.012,.34],.01,{ry:lt/4}).position.set(0,e+.23,0),Jt(r,K("#F5B400",{r:.4}),.008,.008,.2,.2,e+.13,.12,{rz:.1}),i.a_formatura=r,r=new Et;let c=K("#F5B400",{r:.25,m:.85});Jt(r,c,n*.82,n*.86,.1,0,e+.22,0,{seg:36});for(let l=0;l<6;l++){let u=l/6*ee;Ot(new Qn(.04,.11,10),c,r,Math.sin(u)*n*.8,e+.31,Math.cos(u)*n*.8),se(r,K(l%2?"#DC2626":"#2563EB",{r:.2,m:.3}),.024,Math.sin(u)*n*.86,e+.22,Math.cos(u)*n*.86,{seg:10,seg2:8})}i.a_cartola=r,Object.values(i).forEach(l=>{l.visible=!1,t.add(l)})}setAparencia(t,e){let n=this.ap=Ud(t);this.pele.color.set(Ke.p[n.p]),this.peleSom.color.set(as(Ke.p[n.p],"#7A3B22",.12)),this.cab.color.set(Ke.c[n.c]),this.barbaMat.color.set(as(Ke.c[n.c],Ke.p[n.p],.12)),this.cabRaspado.color.set(as(Ke.c[n.c],Ke.p[n.p],.22)),this.calca.color.set(Ke.l[n.l]),this.sapMat.color.set(Ke.s[n.s]),this.solaMat.color.set(n.s===1?"#1F2937":"#F4F6F8");let i=this.chapeus[e]?e:"";this.chapeuAtual=i,this.corte(n.k),this.cortes.forEach((a,c)=>{a&&(a.visible=c===n.k,a.userData.volume&&(a.userData.volume.visible=!i))}),this.barbas.forEach((a,c)=>{a&&(a.visible=c===n.b)}),Object.entries(this.chapeus).forEach(([a,c])=>{c.visible=a===i}),this.fio&&(this.fio.visible=!i);let r=e==="a_oculos";this.oculos.visible=r||n.o===1,this.lente.opacity=r?.88:.12,this.lente.color.set(r?"#0B1220":"#DCEBFF"),this.esc=n_[n.a],this.root.scale.setScalar(this.esc);let o=i_[n.w];this.fGir=o;for(let{m:a,s:c,k:l}of this.gir){let u=1+(o-1)*l;a.scale.set(c.x*u,c.y,c.z*u)}this.barriga.visible=n.w>=3,this.barriga.position.z=(o-1)*.16,this.L.sh.position.x=-.19*(1+(o-1)*.6),this.R.sh.position.x=.19*(1+(o-1)*.6),this.PL.hp.position.x=-.094*(1+(o-1)*.5),this.PR.hp.position.x=.094*(1+(o-1)*.5),this.fivela.position.z=.113*(1+(o-1)*.9),this.estampaPlano.position.z=.126*(1+(o-1)*.75),this.setRoupa(n.r,n.e),this.rostoKey=""}setRoupa(t,e){this.roupas.forEach((a,c)=>{a.visible=c===t});let n=t===2||t===3||t===4,i=t===5,r=t===3;for(let a of[this.L,this.R]){a.mangaC.visible=a.bainhaC.visible=!n&&!i,a.mangaL.visible=a.cotM.visible=a.antM.visible=a.punho.visible=n,a.ombro.visible=!i,a.ombroPele.visible=i,a.cot.visible=!n;let c=r?this.branco:this.camisa;for(let l of["ombro","mangaC","bainhaC","mangaL","cotM","antM","punho"])a[l].material=c}this.torso.material=r?this.branco:this.camisa,this.barriga.material=this.torso.material,this.estampaPlano.visible=this.temIcone&&!r&&t!==4;let o=e===1;for(let a of[this.PL,this.PR])a.joelhoC.visible=a.canC.visible=a.barra.visible=!o,a.joelhoP.visible=a.canP.visible=a.bermuda.visible=o,a.meiaM.scale.y=o?1.8:1,a.meiaM.position.y=o?.04:.012}setCor(t){let e=t||"#2457F5";this.cor=e,this.camisa.color.set(e),this.gola.color.set(e).lerp(new ie(this.ap.r===2?"#000000":"#FFFFFF"),this.ap.r===2?.08:.16),this.gravata&&this.gravata.color.set(e)}setIcone(t){let{g:e,t:n}=this.estampa;e.clearRect(0,0,128,128);let i=!!(t&&typeof window<"u"&&window.RI&&window.RI.tem(t+":f"));i&&window.RI.desenhar(e,t+":f",64,64,104,"rgba(255,255,255,.92)"),this.temIcone=i,this.estampaPlano.visible=i&&this.ap.r!==3&&this.ap.r!==4,n.needsUpdate=!0}ik(t,e,n){let i=t.sh,o=this.spine.worldToLocal(e.clone()).sub(i.position),a=rr,c=o_,l=o.length();l=pe(l,Math.abs(a-c)+.02,a+c-.002);let u=pe((a*a+c*c-l*l)/(2*a*c),-1,1),d=lt-Math.acos(u),h=Ut(0,-a-c*Math.cos(d),c*Math.sin(d)),f=Ut(0,-1,0),m=h.clone().normalize(),_=o.clone().normalize(),g=new U().crossVectors(m,f).normalize(),p=Ut(t.lado*.55,-1,-.45).normalize(),y=new U().crossVectors(_,p);y.lengthSq()<1e-6&&y.set(1,0,0),y.normalize();let w=new _e().makeBasis(m,g,new U().crossVectors(m,g)),v=new _e().makeBasis(_,y,new U().crossVectors(_,y));t.qIK.setFromRotationMatrix(v.multiply(w.transpose())),t.qFK.copy(i.quaternion),i.quaternion.slerpQuaternions(t.qFK,t.qIK,n),t.el.rotation.x=_t(t.el.rotation.x,-d,n)}aplicar(t,e=0,n=0){let i=Math.sin(e*1.75),r=Math.sin(e*1.75-.7),o=Math.sin(e*.43)*.6+Math.sin(e*.97+1.3)*.4,a=1-pe(Math.abs(t.dy)*4+Math.abs(t.hz)*4,0,.6),c=t.alt*_t(1,1/this.esc,pe(t.sent||0));this.hips.position.set(.004*o*a,c+t.dy/this.esc+.0025*i,t.hz),this.spine.rotation.set(t.lean+.012*r,t.twist+.02*o*a,t.side+.008*o*a);let l=this.fGir||1;this.torso.scale.set(1.06*l*(1+.01*i),1+.007*i,.74*l*(1+.022*i));let u=Math.sin(e*.52+.6)*.03+Math.sin(e*1.31)*.012;this.neck.rotation.set(t.nod*.35,t.turn*.4+u*.4,t.roll*.4),this.head.rotation.set(t.nod*.65+.008*i,t.turn*.6+u*.6,t.roll*.6+.01*o*a);let d=t.item||"",h=.01*i;this.L.sh.position.y=.437+h,this.R.sh.position.y=.437+h,this.L.sh.rotation.set(-t.aL[0],0,-t.aL[1]),this.L.el.rotation.x=-t.aL[2],this.R.sh.rotation.set(-t.aR[0],0,t.aR[1]),this.R.el.rotation.x=-t.aR[2],this.PL.hp.rotation.x=-t.lL[0],this.PL.kn.rotation.x=t.lL[1],this.PL.ft.rotation.x=t.lL[0]-t.lL[1],this.PR.hp.rotation.x=-t.lR[0],this.PR.kn.rotation.x=t.lR[1],this.PR.ft.rotation.x=t.lR[0]-t.lR[1],(t.kL>.001&&t.ikL||t.kR>.001&&t.ikR)&&(this.root.updateMatrixWorld(!0),t.kL>.001&&t.ikL&&this.ik(this.L,Ut(...t.ikL),pe(t.kL)),t.kR>.001&&t.ikR&&this.ik(this.R,Ut(...t.ikR),pe(t.kR)));let f={controle:[[-.08,0,.12],[0,0,-.12]],tacoShot:[[.25,0,-.1],[-.15,.2,.25]],tacoV:[[0,0,.1],[0,.3,0]],xicara:[null,[.18,-.12,0]],nota:[null,[-.12,0,-.1]],tecla:[[.9,0,0],[.9,0,0]],celular:[null,[.5,-.3,.2]],moeda:[null,[.3,0,0]]}[d]||[null,null],[m,_]=f;this.L.hand.rotation.set(m?m[0]:t.mL*.9,m?m[1]:0,m?m[2]:0),this.R.hand.rotation.set(_?_[0]:t.mR*.9,_?_[1]:0,_?_[2]:0);let g=/controle|taco/.test(d)||t.mL>.5,p=/controle|taco|xicara|nota|celular|moeda|dardo|trofeu/.test(d)||t.mR>.5,y=d==="tecla"?.45:g?.95:t.aL[0]>2.2?.1:.32+.05*Math.sin(e*.8),w=d==="tecla"?.45:p?.95:t.aR[0]>2.2?.1:.32+.05*Math.sin(e*.8+1),v=n>0?Math.min(1,n*12):1;this.cL+=(y-this.cL)*v,this.cR+=(w-this.cR)*v;for(let[S,C,x]of[[-1,this.dedos.L,this.cL],[1,this.dedos.R,this.cR]])C.forEach((T,R)=>{if(T.polegar){T.p1.rotation.z=S*.5-S*x*.35,T.p2.rotation.z=-S*x*.6;return}let L=1+(R-1.5)*.06;T.p1.rotation.z=-S*x*1.05*L,T.p2.rotation.z=-S*x*1.25*L});if(n>0&&this.pT!==null){let S=Math.min(n,.05),C=this.root.rotation.y,x=this.pYaw==null?0:si(this.pYaw,C)/S,T=-(t.dy-this.pDy)/S*5-(t.nod-this.pNod)/S*.5;for(let L in this.molas){let N=this.molas[L];N.v+=(T*.8-70*N.a-7*N.v)*S,N.a=pe(N.a+N.v*S,-.6,.6),N.vb+=(-x*1.2-60*N.b-6*N.vb)*S,N.b=pe(N.b+N.vb*S,-.6,.6)}let R=this.fioM||(this.fioM={a:0,v:0});R.v+=(T-90*R.a-9*R.v)*S,R.a=pe(R.a+R.v*S,-.4,.4),this.pYaw=C}if(this.pDy=t.dy,this.pNod=t.nod,this.pT=e,this.fio){let S=this.fioM?this.fioM.a:0;this.fio.rotation.x=S*.6+.015*i,this.fio.rotation.z=.02*o}let M=this.molas.rabo;M&&(M.g.rotation.x=.15+M.a*.8-(t.lean+t.nod)*.6,M.g.rotation.z=M.b*.8+.04*o),this.root.updateMatrixWorld(!0),this.L.hand.localToWorld(this.mL.copy(this.gp)),this.R.hand.localToWorld(this.mR.copy(this.gp))}desenharRosto(t,e){let n=t.olhos,i=0;if(n==="A"){let et=Math.floor(e/3.4),tt=e-et*3.4-(.3+En(et)*2.3),yt=En(et+9.3)>.82,E=0;tt>=0&&tt<.17?E=Math.sin(tt/.17*lt):yt&&tt>=.27&&tt<.44&&(E=Math.sin((tt-.27)/.17*lt)),i=Math.round(E*4)/4,(t.sob==="triste"||t.boca==="triste")&&(i=Math.max(i,.25))}let r=Math.floor(e/.85),o=(En(r)-.5)*.6,a=(En(r+3.7)-.5)*.35,c=t.lagrima>.05?Math.floor(e*.6%1*24):-1,l=t.olhar[0]*4.5+o,u=t.olhar[1]*3+a,d=[n,t.boca,t.sob,Math.round(t.boch*10),Math.round(t.abre*8),Math.round(l*4),Math.round(u*4),c,i].join("|");if(d===this.rostoKey)return;this.rostoKey=d;let{g:h,t:f}=this.rosto;h.save(),h.setTransform(1,0,0,1,0,0),h.clearRect(0,0,512,384),h.restore(),h.save(),h.translate(128,0),h.scale(r_,1),h.translate(-128,0);let m=Ke.p[this.ap.p],_=Ke.c[this.ap.c],g=this.ap.p>=4,p=128,y=104,w=47,v=g?"#160C07":"#2A1810",M=g?"rgba(20,8,4,.2)":"rgba(120,60,35,.12)";h.lineCap="round",h.lineJoin="round";for(let et of[-1,1]){let tt=h.createRadialGradient(p+et*w,y-2,4,p+et*w,y-2,32);tt.addColorStop(0,M),tt.addColorStop(1,"rgba(0,0,0,0)"),h.fillStyle=tt,h.beginPath(),h.ellipse(p+et*w,y-2,32,22,0,0,ee),h.fill()}let S=.18+.82*t.boch;for(let et of[-1,1]){let tt=h.createRadialGradient(p+et*60,138,1,p+et*60,138,24);tt.addColorStop(0,`rgba(235,95,95,${.4*S})`),tt.addColorStop(1,"rgba(235,95,95,0)"),h.fillStyle=tt,h.beginPath(),h.ellipse(p+et*60,138,24,14,0,0,ee),h.fill()}let C=t.sob==="triste"||!t.sob&&t.boca==="triste",x=t.sob==="tenso",T=t.boca==="aberta"||t.boca==="o"?4*pe(t.abre,0,1):0,R=t.boca==="sorriso"||n==="F"?2:0,L=y-30,N=L+(C?-6:x?5:0),O=L+(C?6:x?-3:-2);for(let et of[-1,1]){let tt=p+et*16,yt=p+et*(w+25),E=N-T-R*.3,P=O-T-R,G=Math.min(E,P)-5+(x?2.5:0);h.fillStyle=as(_,"#000000",.3),h.beginPath(),h.moveTo(tt,E+2),h.quadraticCurveTo((tt+yt)/2,G-2,yt,P+1),h.quadraticCurveTo((tt+yt)/2,G+5,tt,E+9),h.closePath(),h.fill()}let D=23.5,B=17,Y=(et,tt,yt)=>{h.beginPath(),h.moveTo(et-D,tt+1),h.bezierCurveTo(et-D*.6,tt-yt*1.2,et+D*.5,tt-yt*1.25,et+D,tt-1),h.bezierCurveTo(et+D*.55,tt+yt*1.05,et-D*.55,tt+yt*1.05,et-D,tt+1),h.closePath()};for(let et of[-1,1]){let tt=p+et*w;if(n==="A"||n==="F"){let yt=n==="F"?B*.42:B*(1-i*.98),E=n==="F"?y+3:y;h.save(),Y(tt,E,Math.max(yt,.6)),h.clip(),h.fillStyle="#FBF8F4",h.fillRect(tt-D-2,E-B*1.5,D*2+4,B*3);let P=tt+l,G=E+u+1,Q=13,rt=h.createRadialGradient(P,G-2,1,P,G,Q);rt.addColorStop(0,"#8A5530"),rt.addColorStop(.6,"#55301A"),rt.addColorStop(1,"#22120A"),h.fillStyle=rt,h.beginPath(),h.arc(P,G,Q,0,ee),h.fill(),h.fillStyle="#0B0604",h.beginPath(),h.arc(P,G,6,0,ee),h.fill(),h.fillStyle="rgba(255,255,255,.97)",h.beginPath(),h.arc(P-4,G-4.6,3.8,0,ee),h.fill(),h.fillStyle="rgba(255,255,255,.75)",h.beginPath(),h.arc(P+3.6,G+3.4,1.5,0,ee),h.fill(),h.fillStyle="rgba(0,0,0,.16)",h.fillRect(tt-D-2,E-B*1.5,D*2+4,7),h.restore(),h.strokeStyle=v,h.lineWidth=3.6,h.beginPath(),h.moveTo(tt-D,E+1),h.bezierCurveTo(tt-D*.6,E-Math.max(yt,.6)*1.2,tt+D*.5,E-Math.max(yt,.6)*1.25,tt+D,E-1),h.stroke(),h.lineWidth=2.4,h.beginPath(),h.moveTo(tt+et*D*.9,E-2),h.lineTo(tt+et*(D+5),E-6.5),h.stroke(),n==="F"&&(h.strokeStyle=g?"rgba(10,4,2,.25)":"rgba(150,75,50,.28)",h.lineWidth=1.6,h.beginPath(),h.moveTo(tt-11,E+11),h.quadraticCurveTo(tt,E+15,tt+11,E+11),h.stroke())}else{h.strokeStyle=v,h.lineWidth=3.6,h.beginPath(),h.moveTo(tt-D,y+1),h.quadraticCurveTo(tt,y+7,tt+D,y),h.stroke(),h.lineWidth=1.8;for(let yt of[-.7,-.15,.4,.85]){let E=tt+yt*D;h.beginPath(),h.moveTo(E,y+4.5-Math.abs(yt)*2),h.lineTo(E+et*1.2,y+8.5-Math.abs(yt)*2),h.stroke()}}}h.fillStyle=g?"rgba(10,4,2,.35)":"rgba(120,55,35,.28)";for(let et of[-1,1])h.beginPath(),h.ellipse(p+et*6.5,141,3.2,1.8,et*.35,0,ee),h.fill();let W=161,ut=as(m,"#8E2F2B",g?.35:.42),$=as(m,"#B5524A",g?.28:.36),st=as(m,"#3A0F0C",.7),I="#4A1216",k=(et,tt,yt)=>{h.fillStyle=ut,h.beginPath(),h.moveTo(p-et,W-tt),h.quadraticCurveTo(p-et*.45,W-5.5,p,W-3.2),h.quadraticCurveTo(p+et*.45,W-5.5,p+et,W-tt),h.quadraticCurveTo(p,W+1-tt*.3,p-et,W-tt),h.fill(),h.fillStyle=$,h.beginPath(),h.moveTo(p-et+2,W-tt+.5),h.quadraticCurveTo(p,W+1.5-tt*.3,p+et-2,W-tt+.5),h.quadraticCurveTo(p,W+9+yt-tt*.3,p-et+2,W-tt+.5),h.fill(),h.strokeStyle=st,h.lineWidth=2,h.beginPath(),h.moveTo(p-et,W-tt),h.quadraticCurveTo(p,W+1.2-tt*.3,p+et,W-tt),h.stroke()},X=(et,tt,yt)=>{let E=()=>{h.beginPath(),h.moveTo(p-et,W-yt),h.quadraticCurveTo(p,W-4-yt*.2,p+et,W-yt),h.quadraticCurveTo(p+et*.7,W+tt,p,W+tt),h.quadraticCurveTo(p-et*.7,W+tt,p-et,W-yt),h.closePath()};E(),h.fillStyle=I,h.fill(),h.save(),E(),h.clip(),h.fillStyle="#FAF6F0",h.fillRect(p-et,W-8,et*2,6.5+Math.min(tt,14)*.12),h.fillStyle="#D2626A",h.beginPath(),h.ellipse(p,W+tt*.95,et*.5,Math.max(3,tt*.4),0,0,ee),h.fill(),h.restore(),h.strokeStyle=ut,h.lineWidth=3.4,E(),h.stroke()};switch(t.boca){case"sorriso":{X(25,13,5),h.strokeStyle=g?"rgba(10,4,2,.28)":"rgba(140,70,50,.3)",h.lineWidth=1.8;for(let et of[-1,1])h.beginPath(),h.moveTo(p+et*22,141),h.quadraticCurveTo(p+et*33,152,p+et*30,164),h.stroke();break}case"leve":k(20,2.8,0);break;case"reta":k(18,0,0);break;case"triste":k(18,-3.6,1);break;case"foco":{k(16,.5,-1),h.strokeStyle=st,h.lineWidth=1.6,h.beginPath(),h.moveTo(p+16,W-.5),h.lineTo(p+19,W-2.5),h.stroke();break}case"o":{let et=5+7*t.abre;h.fillStyle=I,h.beginPath(),h.ellipse(p,W+3,7.5,et,0,0,ee),h.fill(),h.lineWidth=3.4,h.strokeStyle=ut,h.stroke();break}default:X(22,6+22*t.abre,2)}if(c>=0){let et=c/24;h.fillStyle=`rgba(120,180,250,${.9*(1-et)})`;let tt=p-w-12,yt=y+12+et*60;h.beginPath(),h.moveTo(tt,yt-7),h.quadraticCurveTo(tt+6,yt+3,tt,yt+4.5),h.quadraticCurveTo(tt-6,yt+3,tt,yt-7),h.fill()}h.restore(),f.needsUpdate=!0}},Eh=s=>{let t={...Dn,...s};for(let e of Al)t[e]=(s[e]||Dn[e]).slice();return t};function Ht(s,t={}){let e=Eh(t),n=Math.sin(s*1.8);return e.lean+=.012*n,e.side+=.018*Math.sin(s*.37),t.aL||(e.aL=[.05+.03*n,.09,.3]),t.aR||(e.aR=[.05+.03*n,.09,.3]),t.lL||(e.lL=[.02,.04]),t.lR||(e.lR=[.02,.04]),e}var Od=[1.25,1.4];function gi(s,t,e={}){let n=Math.sin(s*1.8),i=Eh({alt:t,sent:1,lL:Od,lR:Od,aL:[.62+.02*n,-.08,.98],aR:[.6+.02*n,-.08,1],...e});return i.lean+=.04+.01*n,i}function El(s,t,e={}){let n=Ht(s,e);return n.alt=_t(.89,.5,t),n.lL=[_t(.02,1.35,t),_t(.04,2.1,t)],n.lR=[_t(.02,1.05,t),_t(.04,1.9,t)],n.lean+=.35*t,n.nod+=.15*t,n}function a_(s,t,e,n=1){let i=t==="corre",r=t==="triste",o=i?2.1:r?.95:1.32,a=.88*n,c=Math.asin(pe(o/(4*a),0,.85))*(i?1.05:1),l=s/o*ee,u=Math.sin(l),d=Math.cos(l),h=i?1.3:r?.6:.85,f=Eh({lL:[c*u,.1+h*Math.max(0,d)*Math.max(0,d+.2)],lR:[-c*u,.1+h*Math.max(0,-d)*Math.max(0,-d+.2)],aL:[-c*.9*u,.1,(i?1.35:.32)+.18*Math.max(0,-u)],aR:[c*.9*u,.1,(i?1.35:.32)+.18*Math.max(0,u)],lean:i?.2:r?.16:.06,twist:.09*u,turn:-.1*u,side:.025*d,roll:-.02*d,nod:r?.45:.03*Math.abs(d),boca:r?"triste":i?"aberta":"leve"});return f.alt=.07+.82*Math.cos(c*Math.abs(u))+(i?.05*Math.abs(d):.012*Math.abs(d)),f.andando=1,f}function hs(s,t,e){if(e>=1)return t;if(e<=0)return s;let n={...t};for(let i of _h)n[i]=_t(s[i]??Dn[i],t[i]??Dn[i],e);for(let i of Al)n[i]=(s[i]||Dn[i]).map((r,o)=>_t(r,(t[i]||Dn[i])[o],e));for(let i of["ikL","ikR"])n[i]=s[i]&&t[i]?s[i].map((r,o)=>_t(r,t[i][o],e)):t[i]||s[i];if(e<.5)for(let i of s_)n[i]=s[i];return n}var Cl=class{constructor(){this.x=null,this.v={}}mola(t,e,n,i){let r=this.x[t],o=this.v[t]||0,a=r-e,c=Math.exp(-i*n),l=(o+i*a)*n;return this.x[t]=e+(a+l)*c,this.v[t]=(o-i*l)*c,this.x[t]}passo(t,e,n=15){if(!this.x||e<=0||e>.5){this.x={},this.v={};for(let r of _h)this.x[r]=t[r]??Dn[r];for(let r of Al)(t[r]||Dn[r]).forEach((o,a)=>{this.x[r+a]=o});for(let r of["ikL","ikR"])t[r]&&t[r].forEach((o,a)=>{this.x[r+a]=o});return t}let i={...t};for(let r of _h)i[r]=this.mola(r,t[r]??Dn[r],e,r==="yawAdd"?30:n);for(let r of Al)i[r]=(t[r]||Dn[r]).map((o,a)=>this.mola(r+a,o,e,n*1.1));for(let r of["ikL","ikR"]){if(!t[r]){this.x[r+"0"]!=null&&(i[r]=[0,1,2].map(o=>this.x[r+o]));continue}if(this.x[r+"0"]==null){t[r].forEach((o,a)=>{this.x[r+a]=o,this.v[r+a]=0}),i[r]=t[r];continue}i[r]=t[r].map((o,a)=>this.mola(r+a,o,e,n*1.3))}return i}},yh=class{constructor(){let t=K("#C08552",{r:.9}),e=K("#8B5A35",{r:.9}),n=K("#2B1B14",{r:.4}),i=this.g=new Et;this.corpo=new Et,i.add(this.corpo),wn(this.corpo,t,.12,.26,0,0,0,{rx:lt/2}),se(this.corpo,K("#E3B98E",{r:.9}),.1,0,-.03,.08,{s:[.8,.7,1.3]}),this.cab=new Et,this.cab.position.set(0,.12,.2),this.corpo.add(this.cab),se(this.cab,t,.115,0,.04,0),se(this.cab,K("#D9A577"),.062,0,0,.1,{s:[1,.8,1.2]}),se(this.cab,n,.026,0,.02,.17);for(let r of[-1,1])se(this.cab,K("#FFFFFF",{r:.3}),.02,r*.045,.08,.098),se(this.cab,n,.013,r*.047,.082,.112);this.lingua=se(this.cab,K("#F87171"),.025,0,-.04,.13,{s:[1,.5,1.4]}),this.orelhas=[];for(let r of[-1,1]){let o=new Et;o.position.set(r*.09,.1,-.01),this.cab.add(o),Ot(new ln(.055,12,10),e,o,r*.012,-.04,0,{s:[.45,1.2,.9],rz:r*.4}),this.orelhas.push(o)}this.coleira=Jt(this.corpo,K("#DC2626",{r:.4}),.085,.085,.03,0,.09,.17,{rx:1.1,seg:20}),this.patas=[];for(let[r,o]of[[-.07,.15],[.07,.15],[-.07,-.15],[.07,-.15]]){let a=new Et;a.position.set(r,-.04,o),this.corpo.add(a),wn(a,t,.04,.12,0,-.1,0),this.patas.push(a)}this.rabo=new Et,this.rabo.position.set(0,.06,-.2),this.corpo.add(this.rabo),wn(this.rabo,t,.025,.14,0,.08,-.02,{rx:-.6}),Tn(i,!0,!1),this.zzz=new Et,i.add(this.zzz);for(let r=0;r<2;r++){let o=Ge(64,64);o.g.font="bold 52px system-ui",o.g.fillStyle="#6366F1",o.g.textAlign="center",o.g.fillText("z",32,48);let a=new Ri(new fi({map:o.t,transparent:!0,depthWrite:!1}));a.scale.setScalar(.16-r*.04),this.zzz.add(a)}this.pos=null,this.yaw=0,this.rota=null,this.dist=0,this.alvo=null}mover(t,e,n){if(this.pos||(this.pos=[t[0],t[1]],this.yaw=t[2]),(!this.alvo||Math.hypot(t[0]-this.alvo[0],t[1]-this.alvo[1])>.2)&&(this.alvo=t.slice(),this.rota=Math.hypot(t[0]-this.pos[0],t[1]-this.pos[1])>.15?n.caminho(this.pos,t,.12):null),this.rota&&this.rota.length){let a=this.rota[0],c=a[0]-this.pos[0],l=a[1]-this.pos[1],u=Math.hypot(c,l),d=1.5*e;return u<=d?(this.pos=[a[0],a[1]],this.rota.shift()):(this.pos[0]+=c/u*d,this.pos[1]+=l/u*d),this.yaw=fo(this.yaw,Math.atan2(c,l),Math.min(1,e*10)),this.dist+=Math.min(d,u),!1}this.rota=null;let i=t[0]-this.pos[0],r=t[1]-this.pos[1],o=Math.hypot(i,r);if(o>.03&&o<1.2){let a=Math.min(o,1.2*e);return this.pos[0]+=i/o*a,this.pos[1]+=r/o*a,this.yaw=fo(this.yaw,Math.atan2(i,r),Math.min(1,e*10)),this.dist+=a,!1}return this.yaw=fo(this.yaw,t[2],Math.min(1,e*5)),!0}quadro(t,e){let n=this.corpo;this.zzz.visible=t==="dorme";let i=t==="pula"||t==="carinho"||t==="anda",r=Math.sin(e*(t==="dorme"?2:16))*(t==="dorme"?.2:i?.8:.5);if(this.rabo.rotation.set(0,r,0),this.lingua.visible=t!=="dorme",this.orelhas.forEach((o,a)=>{o.rotation.x=t==="anda"?Math.sin(e*14+a)*.25:0}),t==="dorme")n.position.set(0,.1+.008*Math.sin(e*2),0),n.rotation.set(0,0,.12),this.patas.forEach((o,a)=>o.rotation.set(a<2?-1.35:1.35,0,0)),this.cab.rotation.set(.5,.25,0),this.cab.position.set(0,.04,.22),this.zzz.children.forEach((o,a)=>{let c=(e*.45+a*.5)%1;o.position.set(.12+c*.1,.32+c*.35,.2),o.material.opacity=1-c});else if(t==="anda"){let o=this.dist/.28*ee;n.position.set(0,.2+.02*Math.abs(Math.sin(o)),0),n.rotation.set(.04*Math.sin(o*2),0,0),this.patas.forEach((a,c)=>a.rotation.set(Math.sin(o+(c===0||c===3?0:lt))*.6,0,0)),this.cab.position.set(0,.12,.2),this.cab.rotation.set(-.1,0,0)}else if(t==="senta"||t==="carinho")n.position.set(0,.2,0),n.rotation.set(-.55,0,0),this.patas.forEach((o,a)=>o.rotation.set(a<2?.55:-.9,0,0)),this.cab.position.set(0,.12,.2),t==="carinho"?this.cab.rotation.set(.1+.12*Math.sin(e*5),.25*Math.sin(e*2.6),.2*Math.sin(e*3.1)):this.cab.rotation.set(.45+.08*Math.sin(e*1.3),.3*Math.sin(e*.7),.15*Math.sin(e*1.1));else{let o=Math.abs(Math.sin(e*5.2));n.position.set(0,.2+.22*o,0),n.rotation.set(-.25*o,0,0),this.patas.forEach((a,c)=>a.rotation.set((c<2?-.6:.6)*o,0,0)),this.cab.position.set(0,.12,.2),this.cab.rotation.set(-.15,0,0)}}},Mh=class{constructor(t=.1){this.c=t,this.nx=Math.ceil(je/t),this.nz=Math.ceil(Qe/t),this.b=new Uint8Array(this.nx*this.nz)}limpar(t=.24){this.b.fill(0);for(let e=0;e<this.nx;e++)for(let n=0;n<this.nz;n++){let i=(e+.5)*this.c,r=(n+.5)*this.c;(i<t||i>je-t||r<t||r>Qe-.12)&&(this.b[e+n*this.nx]=1)}}ret(t,e,n,i,r=.24){let o=this.c,a=Math.max(0,Math.floor((t-r)/o)),c=Math.min(this.nx-1,Math.floor((n+r)/o)),l=Math.max(0,Math.floor((e-r)/o)),u=Math.min(this.nz-1,Math.floor((i+r)/o));for(let d=a;d<=c;d++)for(let h=l;h<=u;h++){let f=(d+.5)*o,m=(h+.5)*o,_=Math.max(t-f,0,f-n),g=Math.max(e-m,0,m-i);_*_+g*g<=r*r&&(this.b[d+h*this.nx]=1)}}cel(t,e){return[pe(Math.floor(t/this.c),0,this.nx-1),pe(Math.floor(e/this.c),0,this.nz-1)]}livre(t,e){let[n,i]=this.cel(t,e);return!this.b[n+i*this.nx]}perto(t,e){if(this.livre(t,e))return[t,e];let[n,i]=this.cel(t,e);for(let r=1;r<Math.max(this.nx,this.nz);r++){let o=null,a=1e9;for(let c=n-r;c<=n+r;c++)for(let l=i-r;l<=i+r;l++){if(Math.max(Math.abs(c-n),Math.abs(l-i))!==r||c<0||l<0||c>=this.nx||l>=this.nz||this.b[c+l*this.nx])continue;let u=(c+.5)*this.c,d=(l+.5)*this.c,h=(u-t)**2+(d-e)**2;h<a&&(a=h,o=[u,d])}if(o)return o}return[t,e]}visivel(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),i=Math.ceil(n/(this.c*.4));for(let r=1;r<i;r++){let o=r/i;if(!this.livre(_t(t[0],e[0],o),_t(t[1],e[1],o)))return!1}return!0}caminho(t,e){let n=this.perto(t[0],t[1]),i=this.perto(e[0],e[1]),r=[e[0],e[1]];if(this.visivel(n,i))return(Math.hypot(n[0]-t[0],n[1]-t[1])>.02?[n]:[]).concat([i[0]!==e[0]||i[1]!==e[1]?i:r]);let o=this.nx,a=o*this.nz,[c,l]=this.cel(...n),[u,d]=this.cel(...i),h=new Float32Array(a).fill(1e9),f=new Int32Array(a).fill(-1),m=new Uint8Array(a),_=[],g=(x,T)=>{_.push([T,x]);let R=_.length-1;for(;R>0;){let L=R-1>>1;if(_[L][0]<=_[R][0])break;[_[L],_[R]]=[_[R],_[L]],R=L}},p=()=>{let x=_[0],T=_.pop();if(_.length){_[0]=T;let R=0;for(;;){let L=2*R+1,N=L+1,O=R;if(L<_.length&&_[L][0]<_[O][0]&&(O=L),N<_.length&&_[N][0]<_[O][0]&&(O=N),O===R)break;[_[O],_[R]]=[_[R],_[O]],R=O}}return x},y=(x,T)=>Math.hypot(x-u,T-d),w=c+l*o;h[w]=0,g(w,y(c,l));let v=!1;for(;_.length;){let[,x]=p();if(m[x])continue;m[x]=1;let T=x%o,R=x/o|0;if(T===u&&R===d){v=!0;break}for(let L=-1;L<=1;L++)for(let N=-1;N<=1;N++){if(!L&&!N)continue;let O=T+L,D=R+N;if(O<0||D<0||O>=o||D>=this.nz)continue;let B=O+D*o;if(this.b[B]||m[B]||L&&N&&(this.b[T+L+R*o]||this.b[T+(R+N)*o]))continue;let Y=h[x]+(L&&N?1.4142:1);Y<h[B]&&(h[B]=Y,f[B]=x,g(B,Y+y(O,D)))}}if(!v)return[i];let M=[];for(let x=u+d*o;x!==-1;x=f[x])M.push([(x%o+.5)*this.c,((x/o|0)+.5)*this.c]);M.reverse(),M[0]=n,M[M.length-1]=i;let S=[n],C=0;for(;C<M.length-1;){let x=M.length-1;for(;x>C+1&&!this.visivel(M[C],M[x]);)x--;S.push(M[x]),C=x}return S.shift(),Math.hypot(n[0]-t[0],n[1]-t[1])>.02&&S.unshift(n),i[0]===e[0]&&i[1]===e[1]&&(S[S.length-1]=r),S}},Fn=(s,t,e={})=>({tipo:"andar",vel:s,destinos:t,...e}),Ft=(s,t,e={})=>({tipo:"acao",dur:s,pose:t,...e}),ph=(s,t)=>(e,n,i)=>{let r=ce(e),o=hs(s(i),t(i),r);return o.lean+=.35*Math.sin(lt*e),o},mh=(s,t)=>(e,n,i)=>{let r=1-ce(e),o=hs(s(i),t(i),r);return o.lean+=.4*Math.sin(lt*e),o},xi=4.05;function l_(s,t){let e=ce(ne(s,0,1))*(1-ce(ne(s,5,5.6))),n=0;s>1.1&&s<3.5?n=.5-.5*Math.cos((s-1.1)*ee*.75):s>=3.5&&s<3.85?n=ce(ne(s,3.5,3.85)):s>=3.85&&s<xi&&(n=1-wl(ne(s,3.85,xi)));let i=Ht(t,{lean:.78*e,hz:-.1*e,nod:-.45*e,alt:.89-.08*e,lL:[.3*e,.22*e],lR:[-.1*e,.08*e],olhar:[0,-1.2*e],boca:"foco",taco:e,recuo:n*e,twist:-.12*e});return i.bolas=s<xi?"ini":"jogo",i}function mo(s,t){let e=Ht(t,{olhos:"F",boca:"aberta",boch:.8});if(e.abre=.6+.4*Math.abs(Math.sin(t*6)),s<.3){let n=wl(ne(s,0,.3));e.alt=.89-.12*n,e.lL=[.5*n,1*n],e.lR=[.5*n,1*n],e.aL=[.3*n,.4,.6],e.aR=[.3*n,.4,.6]}else if(s<.85){let n=ne(s,.3,.85);e.dy=.55*4*n*(1-n);let i=cs(ne(s,.3,.45));e.aL=[_t(.3,2.9,i),.45,.2],e.aR=[_t(.3,2.9,i),.45,.2],e.lL=[.35*Math.sin(lt*n),.8*Math.sin(lt*n)],e.lR=[.35*Math.sin(lt*n),.8*Math.sin(lt*n)]}else if(s<1.05){let n=Math.sin(lt*ne(s,.85,1.05));e.alt=.89-.1*n,e.lL=[.4*n,.8*n],e.lR=[.4*n,.8*n],e.aL=[2.9,.45,.2],e.aR=[2.9,.45,.2]}else{let n=(s-1.05)/.62,i=Math.floor(n)%2?1:-1,r=n%1,o=Math.sin(lt*r);e.dy=.08*o,e.side=i*.16*o,e.twist=i*.25*o,e.turn=-i*.3*o,e.roll=i*.15*o,e.aL=i>0?[2.8,.5,.3]:[1.2,-.1,1.6],e.aR=i>0?[1.2,-.1,1.6]:[2.8,.5,.3],e.lL=[i<0?.5*o:0,i<0?.9*o:.1],e.lR=[i>0?.5*o:0,i>0?.9*o:.1]}return e}var or=(s,t,e={})=>{let n=$t(s,0,t,.3),i=Math.abs(Math.sin(s*lt/.42))*n;return{aR:[_t(0,2.55+.3*i,n),.25,_t(.2,.9-.5*i,n)],dy:.03*i,olhos:n>.5?"F":"A",boca:n>.3?"aberta":"sorriso",boch:.7,...e}},go=s=>gi(s,.62,{lean:-.1});function Il(s,t,e={}){let n=Math.sin(t*.9)*.08+Math.sin(t*2.3)*.03,i=r=>Math.max(0,Math.sin(s*10+r))*.12;return gi(s,.62,{lean:-.1+n*.3,side:n,nod:.15,turn:n*.6,aL:[.85+i(0),-.22,1.25],aR:[.85+i(2),-.22,1.25],boca:"foco",...e})}var gh=(s,t)=>Ft(s,(e,n,i)=>{let r=0;for(let a of t)r=Math.max(r,$t(n,a,a+1.3));let o=Il(i,n,{boca:r>.4?"aberta":"foco",olhos:r>.5?"F":"A",boch:.15+.5*r});return o.aR=o.aR.map((a,c)=>_t(a,[2.7,.5,.4][c],r)),o.aL=o.aL.map((a,c)=>_t(a,[2.5,.55,.5][c],r)),o.lean-=.08*r,o.nod-=.25*r,o.dy=.04*r*Math.abs(Math.sin(n*9)),o},{tv:"jogo",props:{controle:"LR"}}),zd=s=>Ft(1.6,(t,e,n)=>{let i=$t(e,0,1.15,.4),r=s.casaDe("controle").pos,o=hs(go(n),Il(n,0),ce(ne(e,.75,1.6)));return o.ikR=[r.x,r.y+.03,r.z],o.kR=i,o.lean+=.12*i,o.turn+=.4*i,o.olhar=[.8*i,.8*i],o},{props:{controle:(t,e)=>e<.6?"casa":"LR"}}),kd=s=>Ft(1.5,(t,e,n)=>{let i=$t(e,.15,1.5,.4),r=s.casaDe("controle").pos,o=hs(Il(n,0),go(n),ce(ne(e,0,.6)));return o.ikR=[r.x,r.y+.03,r.z],o.kR=i,o.lean+=.12*i,o.turn+=.4*i,o.olhar=[.8*i,.8*i],o},{props:{controle:(t,e)=>e<.8?"LR":"casa"}}),c_=()=>Ft(1.5,(s,t,e)=>Ht(e,{taco:_t(-1,0,ce(ne(t,.2,1.2))),lean:.12*$t(t,0,1.5,.4),boca:"leve"}),{bolas:"ini"}),h_=()=>Ft(1.6,(s,t,e)=>Ht(e,{taco:_t(0,-1,ce(ne(t,.3,1.3))),lean:.15*$t(t,0,1.6,.4)}),{bolas:"ini"}),Hd={tranquilo:(s,t,e=0)=>{let n=Ft(1.3,mh(a=>Ht(a),go),{ate:s.sofaP}),i=Ft(1.3,ph(a=>Ht(a),go),{ate:s.sofaS}),o=e%2===0?[gh(13+e%3*2,[5.2,10.6]),kd(t),n,Ft(2.8,(a,c,l)=>{let u=$t(c,.1,2.7,.6);return Ht(l,{aL:[2.95*u,.25,.3],aR:[2.95*u,.25,.3],lean:-.12*u,side:Math.sin(c*2.2)*.12*u,nod:-.2*u,olhos:u>.5?"Z":"A",boca:u>.5?"o":"leve",dy:.03*u})}),Fn(1.15,[s.cafeP]),Ft(5.6,(a,c,l)=>{let u=t.casaDe("xicara").pos,d=t.bico(),h=$t(c,0,5.3,.45),f=ce(ne(c,.9,1.7)),m=ce(ne(c,4.3,5.3)),_=u.clone().add(Ut(0,.06,0)).lerp(d,f),g=t.botaoCafe(),p=$t(c,1.9,2.9,.25);return Ht(l,{ikR:[_.x,_.y,_.z],kR:h*(1-m),aR:[.6,-.25,1.75],ikL:[g.x,g.y-.02*Math.max(0,Math.sin((c-2.1)*9)),g.z],kL:p,lean:.14*h,nod:.28,olhar:[0,1]})},{ate:s.cafeP,props:{xicara:(a,c)=>c<.75?"casa":"R"},fx:"cafe"}),Ft(4.4,(a,c,l)=>{let u=$t(c,.6,1.8,.35)+$t(c,2.6,3.7,.35);return Ht(l,{aR:[.6+.75*u,-.25,1.75+.4*u],gole:u,nod:-.25*u,olhos:u>.5?"Z":"A",boca:u>.5?"reta":"sorriso",boch:.35})},{props:{xicara:"R"}}),Ft(1.6,(a,c,l)=>{let u=t.casaDe("xicara").pos,d=$t(c,0,1.6,.45);return Ht(l,{ikR:[u.x,u.y+.06,u.z],kR:d,aR:[.6,-.25,1.75],lean:.14*d,nod:.25})},{props:{xicara:(a,c)=>c<.85?"R":"casa"}}),Fn(1.1,[s.sofaP]),i,zd(t)]:[gh(9+e%3*2,[3.4]),Ft(6.5,(a,c,l)=>{let u=$t(c,0,6.5,.9),d=Il(l,c*.3,{boca:"sorriso",boch:.3});return d.lean-=.22*u,d.nod-=.15*u,d.lL=d.lL.map((h,f)=>_t(h,[.95,.5][f],u)),d.lR=d.lR.map((h,f)=>_t(h,[.9,.45][f],u)),d.aL=d.aL.map((h,f)=>_t(h,[.5,-.05,.6][f],u)),d.aR=d.aR.map((h,f)=>_t(h,[.65,-.1,.9][f],u)),d.olhos=c>2&&c<4.4?"Z":"A",d},{props:{controle:"LR"}}),gh(8,[4.4])];return{inicio:s.sofaS,aprox:s.sofaP,sentado:!0,sentPose:go,padrao:{boca:"leve",boch:.15},passos:o,entrada:[i,zd(t)],saida:[kd(t),n]}},feliz:(s,t,e=0)=>{let n=[Ft(2.6,(i,r,o)=>{let a=Math.sin(r*9)*.12*$t(r,.4,2.2);return Ht(o,{taco:0,aL:[1.4+a,.1,1.9],nod:-.25,olhar:[0,-1.5],boca:"leve"})},{bolas:"ini"}),Ft(5.6,(i,r,o)=>l_(r,o)),Ft(3,(i,r,o)=>{let a=or(r,3);return Ht(o,{...a,taco:0,aL:a.aR,aR:void 0,bolas:"fim"})})];return e%2===0?n.push(Fn(1.25,[s.monP],{taco:0,bolas:"fim"}),Ft(4.6,(i,r,o)=>{let a=$t(r,1.4,3.6,.4),c=Math.sin(r*6)*.1*$t(r,.3,1.3);return Ht(o,{taco:0,aL:[_t(0,1.3,a),-.15,_t(.2,1.7,a)],lean:.1,nod:.05+c,boca:a>.5?"aberta":"sorriso",olhos:a>.5?"F":"A"})},{bolas:"fim",ate:s.monP}),Fn(1.25,[s.sinP],{taco:0,bolas:"fim"})):n.push(Ft(3.2,(i,r,o)=>Ht(o,{taco:0,nod:.2,olhar:[.6*Math.sin(r*1.5),-1],boca:"sorriso",aL:[.3,.25,1.2*$t(r,0,3.2,.5)],side:.05*Math.sin(r*2)}),{bolas:"fim"})),n.push(Ft(2.2,(i,r,o)=>Ht(o,{taco:0,lean:.2*$t(r,0,2.2,.5),nod:.3,olhar:[0,-1.3],aL:[_t(.2,1.1,$t(r,0,2.2,.5)),.1,.6]}),{bolas:"volta"})),{inicio:s.sinP,aprox:s.sinP,sentado:!1,padrao:{boca:"sorriso",boch:.35},passos:n,entrada:[c_()],saida:[h_()]}},euforico:(s,t,e=0)=>({inicio:s.danca,aprox:s.danca,sentado:!1,padrao:{olhos:"F",boch:.8},entrada:[],saida:[],passos:[Ft(3.6,(n,i,r)=>mo(i,r),{fx:"globo"}),Ft(3.4,(n,i,r)=>mo(i,r),{fx:"globo"}),Ft(2.2,(n,i,r)=>{let o=wl(n),a=Ht(r,{aL:[1.5,1.2,.2],aR:[1.5,1.2,.2],boca:"aberta",olhos:"F",boch:.8});return a.yawAdd=o*ee,a.dy=.12*Math.sin(lt*n),a}),Ft(5.2,(n,i,r)=>{let o=$t(i,0,.8,.25),a=t.bolso("L"),c=Math.max(0,i-.8),l=c%1.1/1.1,u=i<.8?0:l<.55?wl(l/.55):1-cs((l-.55)/.45),d=Ht(r,{aL:[.5*ce(ne(i,.4,.9)),.2,1.3*ce(ne(i,.4,.9))],ikL:[a.x,a.y,a.z],kL:o,aR:[_t(.3,2.8,u),.15,_t(1.4,.2,u)],lean:-.08*u,nod:-.15*u,dy:.05*u,boca:"aberta",olhos:"F",boch:.8});return d.solta=i>.8&&l>.5&&l<.6?Math.floor(c/1.1)+1:0,d},{props:{maco:(n,i)=>i<.45||i>5?"casa":"L",nota:(n,i)=>{let r=Math.max(0,i-.8)%1.1/1.1;return i>.8&&i<4.9&&r<.5?"R":"casa"}}}),Fn(2.2,[s.monP],{estilo:"corre"}),Ft(3.4,(n,i,r)=>{let o=i%.85/.85,a=Math.sin(lt*o);return Ht(r,{dy:.35*a,aL:[2.9,.4,.2],aR:[2.9,.4,.2],lL:[.3*a,.7*a],lR:[.3*a,.7*a],boca:"aberta",olhos:"F"})},{ate:s.monP}),Fn(2.2,[s.danca],{estilo:"corre"}),Ft(5,(n,i,r)=>mo(1.05+i%2.48,r),{ate:s.danca,fx:"globo"})]}),preocupado:(s,t,e=0)=>{let n=c=>gi(c,.6,{lean:.22}),i=Ft(1.3,mh(c=>Ht(c),n),{ate:s.cadP}),r=Ft(1.3,ph(c=>Ht(c),n),{ate:s.cadS}),a=[(c=>Ft(c,(l,u,d)=>{let h=$t(u,3,5.6,.6),f=$t(u,6.6,7.9,.3),m=ce(ne(u,0,.9))*(1-ce(ne(u,c-.9,c))),_=Math.max(0,Math.sin(d*14))*.025,g=Math.max(0,Math.sin(d*14+2.2))*.025,p=t.teclado(),y=Math.sin(d*3.1)*.03;return gi(d,.6,{lean:.22+.14*h*m,nod:.08+.06*Math.sin(u*1.7)-.1*h,hz:.02,ikL:[p.L.x+y,p.L.y+_,p.L.z],kL:m,ikR:[p.R.x-y,p.R.y+g,p.R.z],kR:m*(1-f),aR:[_t(.6,2.3,f),_t(-.08,.6,f),_t(1,2.4+.15*Math.sin(d*16),f)],item:m>.3?"tecla":"",olhar:[.3*Math.sin(u*2),-.6]})},{mon:"foco"}))(9+e%2*3),Ft(3.6,(c,l,u)=>{let d=$t(l,0,3.6,.6),h=Math.sin(u*9)*.12*d;return gi(u,.6,{lean:.22-.3*d,nod:-.1*d,turn:h,aL:[_t(.62,2.5,d),_t(-.08,.7,d),_t(.98,2.3,d)],aR:[_t(.6,2.5,d),_t(-.08,.7,d),_t(1,2.3,d)],balao:$t(l,.3,3.4,.3),balaoT:"smiley-nervous",boca:"o",abre:.4})})];return e%2===0?a.push(i,Fn(.85,[s.ritmo1,s.ritmo2,s.cadP],{pensativo:!0}),Ft(3.4,(c,l,u)=>{let d=$t(l,.1,3.3,.4),h=Math.sin(lt*ne(l,.8,2.2));return Ht(u,{aR:[_t(0,1.3,d),-.25,_t(.2,2.2,d)],alt:.89-.02*h,nod:.25*d,lean:.06*h,olhos:h>.6?"Z":"A",boca:"triste",sob:"triste",balao:$t(l,.6,3),balaoT:"chart-line-down"})},{ate:[s.cadP[0],s.cadP[1],s.cadP[2]+lt*.3]}),Ft(.8,(c,l,u)=>Ht(u),{ate:s.cadP}),r):a.push(Ft(4,(c,l,u)=>{let d=$t(l,0,4,.6);return gi(u,.6,{lean:.22-.25*d,nod:-.2*d,turn:.5*Math.sin(l*1.2)*d,olhar:[Math.sin(l*1.2)*1.2*d,-.5],boca:"foco"})})),{inicio:s.cadS,aprox:s.cadP,sentado:!0,sentPose:n,padrao:{sob:"tenso",boca:"foco"},passos:a,entrada:[r],saida:[i]}},triste:(s,t,e=0)=>{let n=c=>gi(c,.6,{lean:.32,nod:.35,aL:[.72,-.1,1.05],aR:[.72,-.1,1.05]}),i=c=>Ht(c,{lean:.12,nod:.3}),r=Ft(1.6,mh(i,n),{ate:s.polP}),o=Ft(1.6,ph(i,n),{ate:s.polS}),a=[Ft(11.5,(c,l,u)=>{let d=$t(l,.2,4.6,.6),h=Math.sin(lt*ne(l,5.2,6.8)),f=$t(l,7.2,11.2,.6);return gi(u,.6,{lean:.32+.25*d-.12*f+.04*h,nod:.35+.25*d-.3*f,turn:-.5*f,aL:[_t(.72,1.55,d),_t(-.1,-.32,d),_t(1.05,2.45,d)],aR:[_t(.72,1.55,d),_t(-.1,-.32,d),_t(1.05,2.45,d)],olhos:d>.5?"Z":"A",olhar:f>.3?[-1.4,-.6]:[0,1.2],dy:-.01*h})})];return e%2===0?a.push(r,Fn(.62,[s.janP],{estilo:"triste"}),Ft(9.5,(c,l,u)=>{let d=$t(l,.8,7.8,.6),h=Math.sin(lt*ne(l,3.6,5.2)),f=$t(l,5.6,7.4,.5);return Ht(u,{aL:[_t(0,1.75,d),-.1*d,_t(.2,.55,d)],alt:.89-.02*h,lean:.06+.1*f,nod:.1+.3*f-.1*d,side:-.05*f,olhar:[0,-.5]})},{ate:s.janP}),Fn(.62,[s.polP],{estilo:"triste"}),Ft(.6,(c,l,u)=>i(u),{ate:s.polP}),o):a.push(Ft(7,(c,l,u)=>{let d=Math.sin(lt*ne(l,1.5,3.5));return gi(u,.6,{lean:.32+.08*d,nod:.35-.2*$t(l,3.8,6.6,.6),turn:-.6*$t(l,3.8,6.6,.6),aL:[.72,-.1,1.05],aR:[.72,-.1,1.05],olhar:[-1.4,-.4],olhos:d>.6?"Z":"A"})})),{inicio:s.polS,aprox:s.polP,sentado:!0,sentPose:n,padrao:{sob:"triste",boca:"triste",nuvem:1,lagrima:1},passos:a,entrada:[o],saida:[r]}}},uo={cachorro:{humores:["triste","preocupado","tranquilo","feliz","euforico"],ic:"dog",lugar:s=>s.lugar("cachorro",[1.35,5.42,0]),passos:s=>[Ft(1.4,(t,e,n)=>Ht(n,{nod:.35,olhar:[0,1.2],boca:"sorriso",boch:.3}),{fx:"caoVem"}),Ft(5.2,(t,e,n)=>{let i=$t(e,0,5.2,.7),r=s.alvoCao(),o=Math.sin(e*5)*.06;return El(n,i,{ikR:[r.x+o,r.y+.1,r.z],kR:i,nod:.3*i,boca:"sorriso",olhos:e>2?"F":"A",boch:.5,olhar:[0,1]})},{fx:"caoCarinho"}),Ft(1.2,(t,e,n)=>Ht(n,{...or(e,1.2)}),{fx:"caoCarinho"})]},aquario:{humores:["preocupado","tranquilo","feliz","euforico"],ic:"fish",lugar:s=>s.lugar("aquario",[.98,6.835,-lt/2]),passos:s=>[Ft(1,(t,e,n)=>Ht(n,{nod:.2,olhar:[0,.6]})),Ft(4.6,(t,e,n)=>{let i=$t(e,0,4.6,.6),r=s.pto("aquario",.35,1.38,6.835),o=Math.sin(n*18)*.02*ne(e,1,1.4)*(1-ne(e,3.4,3.8));return Ht(n,{ikR:[r.x+o,r.y,r.z],kR:i,lean:.12*i,nod:.3*i,mR:.3+.4*Math.abs(Math.sin(n*12))*i,boca:"sorriso",olhar:[0,1]})},{fx:"racao"}),Ft(1.6,(t,e,n)=>Ht(n,{boca:"sorriso",olhos:"F",boch:.5,nod:.1}))]},fliperama:{humores:["tranquilo","feliz","euforico"],ic:"joystick",lugar:s=>s.lugar("fliperama",[5.29,1.42,lt]),passos:s=>[Ft(7,(t,e,n)=>{let i=$t(e,0,7,.6),[r,o]=s.alvoArcade(),a=Math.max(0,Math.sin(n*13))*.02;return Ht(n,{ikL:[r.x,r.y,r.z],kL:i,ikR:[o.x,o.y-a,o.z],kR:i,lean:.1*i,nod:-.05+.04*Math.sin(n*6),side:.03*Math.sin(n*3),boca:"foco",olhar:[0,-.3],mL:.9*i})},{fx:"arcade"}),Ft(1.8,(t,e,n)=>{let i=$t(e,0,1.8,.3);return Ht(n,{aL:[2.8*i,.4,.3],aR:[2.8*i,.4,.3],dy:.1*Math.abs(Math.sin(e*7))*i,boca:"aberta",olhos:"F",boch:.8})})]},touro:{humores:["tranquilo","feliz","euforico"],ic:"cow",lugar:s=>{let t=s.alvoTouro(),e=s.lugar("touro",[5.4,6.75]);return[e[0],e[1],po(e,[t.x,t.z])]},passos:s=>[Ft(3.6,(t,e,n)=>{let i=$t(e,0,3.6,.6),r=s.alvoTouro(),o=Math.sin(e*6)*.05;return Ht(n,{ikR:[r.x+o,r.y+.04,r.z+o*.5],kR:i,lean:.18*i,boca:"sorriso",olhos:e>1.5?"F":"A",boch:.45})}),Ft(2,(t,e,n)=>Ht(n,{...or(e,2)}))]},cofre:{humores:["preocupado","tranquilo","feliz","euforico"],ic:"vault",lugar:s=>s.lugar("cofre",[7.62,1.63,lt/2]),passos:s=>[Ft(1.8,(t,e,n)=>{let i=ce(ne(e,0,.8)),r=s.alvoCofre();return El(n,.55*i,{ikR:[r.x,r.y,r.z],kR:i,porta:1.9*ce(ne(e,.9,1.8)),boca:"o",abre:.4})},{fx:"cofre"}),Ft(2,(t,e,n)=>{let i=$t(e,0,1.4,.4),r=s.pto("cofre",8.54,.2,1.75);return El(n,.55*(1-ce(ne(e,1,2))),{ikR:[r.x,r.y,r.z],kR:i,aR:[1,-.1,1.5],porta:1.9,boca:"sorriso",olhos:"F",boch:.6})},{fx:"cofre",props:{moeda:(t,e)=>e<.75?"casa":"R"}}),Ft(1.8,(t,e,n)=>Ht(n,{aR:[1,-.1,1.5],porta:1.9,olhar:[0,-1.6*$t(e,.2,1.4)],nod:-.35*$t(e,.2,1.4),boca:"aberta",olhos:"A",fxk:ne(e,.15,1.35),mR:.2}),{fx:"cofre",props:{moeda:(t,e)=>e<.15||e>1.35?"R":"joga"}}),Ft(1.9,(t,e,n)=>{let i=$t(e,0,1.9,.5),r=s.pto("cofre",8.54,.2,1.75);return El(n,.55*i,{ikR:[r.x,r.y,r.z],kR:i*ne(e,.2,.6),aR:[1,-.1,1.5],porta:1.9*(1-ce(ne(e,1,1.8))),boca:"sorriso"})},{fx:"cofre",props:{moeda:(t,e)=>e<.75?"R":"casa"}})]},trofeu:{humores:["tranquilo","feliz","euforico"],ic:"trophy",lugar:s=>s.lugar("trofeu",[7.98,2.6,lt/2]),passos:s=>[Ft(1.2,(t,e,n)=>{let i=ce(t),r=s.alvoTrofeu();return Ht(n,{ikL:[r.L.x,r.L.y,r.L.z],kL:i,ikR:[r.R.x,r.R.y,r.R.z],kR:i,lean:.15*i,boca:"o",fxk:t})},{fx:"trofeuPega"}),Ft(3,(t,e,n)=>{let i=$t(e,0,3,.7),r=Ht(n,{aL:[_t(.6,2.85,i),.35,.5],aR:[_t(.6,2.85,i),.35,.5],dy:.04*Math.abs(Math.sin(e*6))*i,boca:"aberta",olhos:"F",boch:.8,nod:-.25*i});return r.olhar=[0,-1.5*i],r},{fx:"trofeu"}),Ft(1.2,(t,e,n)=>{let i=1-ce(t),r=s.alvoTrofeu(!0);return Ht(n,{ikL:[r.L.x,r.L.y,r.L.z],kL:i,ikR:[r.R.x,r.R.y,r.R.z],kR:i,lean:.15*i,boca:"sorriso",fxk:t})},{fx:"trofeuSolta"})]},porquinho:{humores:["preocupado","tranquilo","feliz","euforico"],ic:"piggy-bank",lugar:s=>s.lugar("mesa",[7.55,1.22,lt]),passos:s=>[Ft(1.3,(t,e,n)=>{let i=s.bolso("R"),r=$t(e,0,.95,.3);return Ht(n,{ikR:[i.x,i.y,i.z],kR:r,aR:[.5,-.1,1.3],nod:.25,olhar:[0,1]})},{props:{moeda:(t,e)=>e<.55?"casa":"R"}}),Ft(1.9,(t,e,n)=>{let i=$t(e,0,1.9,.4),r=s.alvoPorco();return Ht(n,{ikR:[r.x,r.y+.1,r.z],kR:i,aR:[.5,-.1,1.3],lean:.25*i,nod:.35,olhar:[0,1],boca:"sorriso"})},{fx:"porco",props:{moeda:(t,e)=>e<.9?"R":e<1.15?"cofrinho":"casa"}}),Ft(1.4,(t,e,n)=>Ht(n,{...or(e,1.4)}))]},neon:{humores:["tranquilo","feliz","euforico"],ic:"currency-btc",lugar:()=>[1.55,6.6,-lt/2],passos:s=>[Ft(5.6,(t,e,n)=>{let i=s.bolso("R"),r=$t(e,0,.8,.25)+$t(e,4.7,5.6,.25),o=$t(e,.5,5,.5),a=$t(e,2.6,4.4,.3);return Ht(n,{ikR:[i.x,i.y,i.z],kR:r,aR:[_t(0,1.05,o),-.25,_t(.2,2,o)],aL:[.3*o,-.2,.9*o],nod:_t(.35,-.3,a)*o,olhar:[0,_t(1,-1.2,a)],boca:a>.5?"sorriso":"foco",boch:.3})},{props:{celular:(t,e)=>e<.45||e>5.2?"casa":"R"}}),Ft(1.4,(t,e,n)=>Ht(n,{...or(e,1.4)}))]},arcoiris:{humores:["tranquilo","feliz","euforico"],ic:"rainbow",lugar:()=>[3.2,.95,lt],passos:()=>[Ft(3.2,(s,t,e)=>{let n=$t(t,0,3.2,.6);return Ht(e,{aL:[2.2*n,.5,1.2*n],aR:[2.2*n,.5,1.2*n],nod:-.4*n,olhar:[0,-1.4],boca:"sorriso",olhos:"F",boch:.6})}),Ft(1.8,(s,t,e)=>{let n=Math.abs(Math.sin(t*9));return Ht(e,{aL:[1.2,-.25-.25*n,1.6],aR:[1.2,-.25-.25*n,1.6],boca:"aberta",olhos:"F",boch:.7})})]},dardos:{humores:["tranquilo","feliz","euforico","preocupado"],ic:"target",lugar:()=>[2.45,5.95,-lt/2],passos:s=>[Ft(1.1,(t,e,n)=>{let i=s.bolso("L"),r=$t(e,0,.8,.25);return Ht(n,{ikL:[i.x,i.y,i.z],kL:r,aL:[.55*ce(ne(e,.5,1.1)),.05,1.2*ce(ne(e,.5,1.1))],olhar:[0,-.2]})},{props:{aljava:(t,e)=>e<.5?"casa":"L"}})].concat([0,1,2].map(t=>Ft(1.7,(e,n,i)=>{let r=$t(n,0,.42,.14),o=s.boneco.mL,a=ce(ne(n,.3,.8)),c=ce(ne(n,.8,1.02)),l=ce(ne(n,1.2,1.7)),u=[.45,-.1,1.3],d=[1.75,-.1,2.35],h=[1.35,-.1,.25],f=n<.8?u.map((m,_)=>_t(m,d[_],a)):n<1.2?d.map((m,_)=>_t(m,h[_],c)):h.map((m,_)=>_t(m,u[_],l));return Ht(i,{aR:f,ikR:[o.x,o.y+.02,o.z],kR:r,aL:[.55,.05,1.2],twist:-.15*a+.25*c-.1*l,lean:.06*c,boca:"foco",olhar:[0,-.2],lL:[.18*a,.1],fxk:t+(n>=.92?.5:0)})},{fx:"dardo",props:{dardo:(e,n)=>n<.25||n>=.92?"casa":"R",aljava:"L"}}))).concat([Ft(1.6,(t,e,n)=>Ht(n,{...or(e,1.6),aL:[.55*(1-ce(ne(e,0,.6))),.05,1.2*(1-ce(ne(e,0,.6)))]}),{fx:"dardo",props:{aljava:"casa"}})])},globo:{humores:["tranquilo","feliz","euforico"],ic:"disco-ball",lugar:s=>s.lugares().danca,passos:()=>[Ft(6.2,(s,t,e)=>mo(t%3.1+(t>3.1?1.05:0),e),{fx:"globo"})]}},u_=s=>[Ft(2.6,(t,e,n)=>{let i=$t(e,0,2.6,.3);return Ht(n,{aL:[1.9*i,-.45,2.3*i],aR:[1.9*i,-.45,2.3*i],boca:"o",abre:.9,olhos:"A",boch:.6,balao:$t(e,.1,2.5,.3),balaoT:s,dy:.05*Math.sin(lt*ne(e,0,.4))})},{fx:"novidade"}),Ft(1.7,(t,e,n)=>mo(e,n))];function My(s,t){return new bh(s,t)}var Tl=(s,t,e)=>[s*Math.cos(e)+t*Math.sin(e),-s*Math.sin(e)+t*Math.cos(e)];function Pl(s){let t=[];for(let[e,n]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let[i,r]=Tl(e*s.h[0],n*s.h[1],s.r);t.push([s.c[0]+i,s.c[1]+r])}return t}function xh(s,t,e=0){let n=[s,t].flatMap(o=>[[Math.cos(o.r),-Math.sin(o.r)],[Math.sin(o.r),Math.cos(o.r)]]),i=Pl(s),r=Pl(t);for(let[o,a]of n){let c=1e9,l=-1e9,u=1e9,d=-1e9;for(let[h,f]of i){let m=h*o+f*a;c=Math.min(c,m),l=Math.max(l,m)}for(let[h,f]of r){let m=h*o+f*a;u=Math.min(u,m),d=Math.max(d,m)}if(l-e<=u||d-e<=c)return!1}return!0}var bh=class{constructor(t,e){this.el=t,this.d={};let n=this.renderer=new ao({antialias:!0,alpha:!0,powerPreference:"high-performance"});this.pr=Math.min(window.devicePixelRatio||1,2),n.setPixelRatio(this.pr),n.outputColorSpace=tn,n.toneMapping=Ks,n.toneMappingExposure=1,n.shadowMap.enabled=!0,n.shadowMap.type=Di,n.domElement.className="of-canvas",n.domElement.setAttribute("role","img"),t.appendChild(n.domElement);let i=this.scene=new wi,r=new rs(n);i.environment=r.fromScene(new co,.04).texture,i.environmentIntensity=.32,this.cam=new He(30,1,.1,80),this.az=lt/4,this.el_=.5,this.camModo="sala",this.camAtual=null,this.tAnt=performance.now(),this.t0=performance.now(),this.notas=[],this.hist=[],this.feed=[],this.flash={},this.fx=[],this.moveis={},this.fixos=[],this.nav=new Mh,this.construir(),this.boneco=new Rl(e.cor,e.icone,e.boneco,e.acessorio),i.add(this.boneco.root),i.add(this.boneco.blob),this.cao=new yh,i.add(this.cao.g),this.filtro=new Cl,this.vistos=this.lerVistos(),window.__ofDebug&&(window.__ofDebug=this),this.ligarControles(),this.ro=new ResizeObserver(()=>this.redimensionar()),this.ro.observe(t),this.redimensionar(),this.aplicarLayout(e.layout,!0),this.atualizar(e),this.reduz=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,this.laco=this.laco.bind(this),this.raf=requestAnimationFrame(this.laco)}movel(t,e,n,i={}){let r=new Et;r.position.set(e[0],0,e[1]),this.scene.add(r);let o=new Et;return o.position.set(-e[0],0,-e[1]),r.add(o),this.moveis[t]={id:t,outer:r,inner:o,P:e,caixas:n,x:e[0],z:e[1],ri:0,piso:!!i.piso,nome:i.nome||t,decor:i.decor||null},o}pedaco(t,e,n,i=0){let r=new Et;r.position.set(n[0],0,n[1]),r.rotation.y=i,t.add(r);let o=new Et;return o.position.set(-e[0],0,-e[1]),r.add(o),o}giro(t,e=t.ri){return e*lt/4}lugar(t,e){let n=this.moveis[t];if(!n)return e.slice();let i=this.giro(n),[r,o]=Tl(e[0]-n.P[0],e[1]-n.P[1],i);return e.length>2?[n.x+r,n.z+o,e[2]+i]:[n.x+r,n.z+o]}pto(t,e,n,i){let r=this.lugar(t,[e,i]);return Ut(r[0],n,r[1])}caixasDe(t,e=t.x,n=t.z,i=t.ri){let r=i*lt/4;return t.caixas.map(o=>{let[a,c]=Tl(o.c[0]-t.P[0],o.c[1]-t.P[1],r);return{c:[e+a,n+c],h:o.h,r:(o.r||0)+r}})}ativo(t){return t.outer.visible}cabe(t,e,n,i){let r=this.caixasDe(t,e,n,i);for(let o of r)for(let[a,c]of Pl(o))if(a<.02||a>je-.02||c<.02||c>Qe-.02)return!1;if(t.piso)return!0;for(let o in this.moveis){let a=this.moveis[o];if(a===t||a.piso||!this.ativo(a))continue;let c=this.caixasDe(a);for(let l of r)for(let u of c)if(xh(l,u,.005))return!1}for(let o of this.fixos)for(let a of r)if(xh(a,o,.005))return!1;return!0}prender(t,e,n,i){let r=1e9,o=-1e9,a=1e9,c=-1e9;for(let l of this.caixasDe(t,e,n,i))for(let[u,d]of Pl(l))r=Math.min(r,u),o=Math.max(o,u),a=Math.min(a,d),c=Math.max(c,d);return r<.03&&(e+=.03-r),o>je-.03&&(e-=o-(je-.03)),a<.03&&(n+=.03-a),c>Qe-.03&&(n-=c-(Qe-.03)),[e,n]}posicionar(t,e,n,i){t.x=e,t.z=n,t.ri=(i%8+8)%8,t.outer.position.set(e,0,n),t.outer.rotation.y=this.giro(t)}layoutAtual(){let t={m:{},off:[...this.off||[]].sort()};for(let e in this.moveis){let n=this.moveis[e];(Math.abs(n.x-n.P[0])>.005||Math.abs(n.z-n.P[1])>.005||n.ri)&&(t.m[e]=[Math.round(n.x*100)/100,Math.round(n.z*100)/100,n.ri])}return t}aplicarLayout(t,e){t=t&&typeof t=="object"?t:{},this.off=new Set(Array.isArray(t.off)?t.off.filter(i=>typeof i=="string"):[]);for(let i in this.moveis){let r=this.moveis[i];this.posicionar(r,r.P[0],r.P[1],0)}let n=t.m&&typeof t.m=="object"?t.m:{};for(let i in n){let r=this.moveis[i],o=n[i];if(!r||!Array.isArray(o)||o.length<3||!o.every(isFinite))continue;let[a,c]=this.prender(r,+o[0],+o[1],o[2]|0);this.posicionar(r,a,c,o[2]|0)}e||this.mudouLayout()}mudouLayout(){this.nav.limpar();for(let e in this.moveis){let n=this.moveis[e];if(!(n.piso||!this.ativo(n)))for(let i of this.caixasDe(n))this.marcar(i)}for(let e of this.fixos)this.marcar(e);if(this.calibrarTacada(),this.sujoNav=!1,this.sujo=!0,this.dir&&this.dir.replanejar(),this.plantaFrente){let e=this.moveis.planta2,n=["touro","aquario","cofre","fliperama","trofeu","cachorro"].some(i=>{let r=this.moveis[i];return r&&this.ativo(r)&&this.caixasDe(r).some(o=>this.caixasDe(e).some(a=>xh(o,a)))});e.outer.visible=!n}}marcar(t){let e=this.nav,n=.24,i=e.c,r=Math.hypot(t.h[0],t.h[1])+n,o=Math.max(0,Math.floor((t.c[0]-r)/i)),a=Math.min(e.nx-1,Math.floor((t.c[0]+r)/i)),c=Math.max(0,Math.floor((t.c[1]-r)/i)),l=Math.min(e.nz-1,Math.floor((t.c[1]+r)/i));for(let u=o;u<=a;u++)for(let d=c;d<=l;d++){let[h,f]=Tl((u+.5)*i-t.c[0],(d+.5)*i-t.c[1],-t.r),m=Math.max(Math.abs(h)-t.h[0],0),_=Math.max(Math.abs(f)-t.h[1],0);m*m+_*_<=n*n&&(e.b[u+d*e.nx]=1)}}construir(){let t=this.scene,e=(E,P,G,Q,rt=0)=>({c:[E,P],h:[G,Q],r:rt});this.hemi=new Ys("#E3EBFF","#B08A64",.9),t.add(this.hemi);let n=this.key=new Fi("#FFF4E3",1.8);n.position.set(11,12,11),n.target.position.set(4,0,3.5),t.add(n,n.target),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),n.shadow.bias=-4e-4,n.shadow.normalBias=.025,n.shadow.radius=4,Object.assign(n.shadow.camera,{left:-7.5,right:7.5,top:7,bottom:-7,near:2,far:40}),this.fill=new Fi("#CFE0FF",.35),this.fill.position.set(-4,6,8),t.add(this.fill);let i=Ge(1024,1024);this.desenharPiso(i),i.t.wrapS=i.t.wrapT=Fs,i.t.repeat.set(je/4.5,Qe/4.5),this.chao=Ot(new Xe(je,Qe),new ve({map:i.t,roughness:.55,metalness:0}),t,je/2,0,Qe/2,{rx:-lt/2,cast:!1}),ct(t,K("#8A5A34",{r:.8}),[-fn,-.22,-fn],[je+.05,-.001,Qe+.05],.02,{cast:!1}),ct(t,K("#E6E3DD",{r:.9}),[-fn-.06,-.3,-fn-.06],[je+.11,-.2,Qe+.11],.04,{cast:!1});let r=K("#EEF1F6",{r:.95}),o=K("#E5E9F1",{r:.95}),a=K("#C9D1DD",{r:.9});ct(t,r,[-fn,0,-fn],[je,Ze,0],.005);let c=.95,l=2.65,u=.92,d=2.38;ct(t,o,[-fn,0,0],[0,Ze,c],.005),ct(t,o,[-fn,0,l],[0,Ze,Qe],.005),ct(t,o,[-fn,0,c],[0,u,l],.005),ct(t,o,[-fn,d,c],[0,Ze,l],.005),ct(t,a,[-fn-.005,Ze,-fn-.005],[je+.005,Ze+.03,.005],.01),ct(t,a,[-fn-.005,Ze,0],[.005,Ze+.03,Qe+.005],.01),ct(t,a,[je-.001,0,-fn],[je+.004,Ze+.03,0],.001),ct(t,a,[-fn,0,Qe-.001],[0,Ze+.03,Qe+.004],.001);let h=K("#FFFFFF",{r:.6});ct(t,h,[0,0,0],[je,.1,.02],.005),ct(t,h,[0,0,0],[.02,.1,Qe],.005),this.ceu=Ge(256,256),Ot(new Xe(l-c,d-u),new We({map:this.ceu.t,toneMapped:!1}),t,-.1,(u+d)/2,(c+l)/2,{ry:lt/2,cast:!1,recv:!1}),Ot(new Xe(l-c,d-u),new ve({color:"#DDF1FF",transparent:!0,opacity:.12,roughness:.05,metalness:.3}),t,-.03,(u+d)/2,(c+l)/2,{ry:lt/2,cast:!1,recv:!1});let f=K("#FFFFFF",{r:.4});ct(t,f,[-.06,u-.02,c-.06],[.04,d+.04,c],.01),ct(t,f,[-.06,u-.02,l],[.04,d+.04,l+.06],.01),ct(t,f,[-.06,d,c],[.04,d+.06,l],.01),ct(t,f,[-.06,(u+d)/2-.025,c],[0,(u+d)/2+.025,l],.01),ct(t,f,[-.06,u,(c+l)/2-.025],[0,d,(c+l)/2+.025],.01),ct(t,K("#F1F5F9",{r:.5}),[-.06,u-.06,c-.12],[.16,u,l+.12],.015);let m=K("#C7D2FE",{r:1});for(let[E,P]of[[c-.42,c-.06],[l+.06,l+.42]])for(let G=0;G<4;G++)wn(t,m,.05,2.45,.08,1.38,E+.05+G*(P-E-.1)/3,{});Jt(t,K("#94A3B8",{m:.6,r:.3}),.015,.015,l-c+1,.08,d+.25,(c+l)/2,{rx:lt/2});let _=Ge(64,64),g=_.g.createLinearGradient(0,0,64,0);g.addColorStop(0,"rgba(255,255,255,.9)"),g.addColorStop(1,"rgba(255,255,255,0)"),_.g.fillStyle=g,_.g.fillRect(0,0,64,64);let p=new Ne;p.setAttribute("position",new le([.02,.005,c+.1,.02,.005,l-.1,3,.005,l+1.5,3,.005,c+1.3],3)),p.setAttribute("uv",new le([0,0,0,1,1,1,1,0],2)),p.setIndex([0,1,2,0,2,3]),this.feixe=new Me(p,new We({map:_.t,color:"#FFE7A3",transparent:!0,opacity:.3,blending:Ni,depthWrite:!1,toneMapped:!1})),t.add(this.feixe);{let E=this.movel("tapete",[3.35,3.85],[e(3.35,3.85,1.65,2.5)],{piso:!0,nome:"Tapete"}),P=Ge(512,512);this.desenharTapete(P),Ot(new os(3.3,.016,5,2,.007),new ve({map:P.t,roughness:1}),E,3.35,.009,3.85,{cast:!1})}let y=K("#9A6B43",{r:.7}),w=K("#7A5233",{r:.8});ct(t,w,[1.6,0,0],[4.8,Ze,.025],.002,{cast:!1});for(let E=1.62;E<4.78;E+=.1)ct(t,y,[E,.1,.02],[E+.06,Ze-.02,.05],.008,{cast:!1});let v=K("#3F3A36",{r:.6}),M=K("#B07A4C",{r:.6});ct(t,v,[1.95,.12,.05],[4.45,.52,.48],.02),ct(t,M,[1.97,.18,.47],[3.18,.48,.49],.01),ct(t,M,[3.22,.18,.47],[4.43,.48,.49],.01);for(let E of[2.05,4.35])for(let P of[.12,.42])Jt(t,K("#111827"),.015,.015,.12,E,.06,P);ct(t,K("#F8FAFC",{r:.3}),[2.3,.52,.18],[2.62,.58,.4],.02),ct(t,K("#111827",{r:.4}),[3.85,.52,.2],[3.98,.86,.33],.02),ct(t,K("#111827",{r:.4}),[2.95,.52,.2],[3.08,.86,.33],.02),ct(t,K("#0B0F19",{r:.25,m:.4}),[2.25,1,.06],[4.15,2.06,.12],.02),this.tv=Ge(512,288),Ot(new Xe(1.84,1),new We({map:this.tv.t,toneMapped:!1}),t,3.2,1.53,.123,{cast:!1,recv:!1}),this.tvLuz=new ti("#818CF8",1.4,4.5,1.6),this.tvLuz.position.set(3.2,1.5,.9),t.add(this.tvLuz),this.fixos.push(e(3.2,.27,1.25,.24));{let E=this.movel("centro",[3.21,1.72],[e(3.21,1.72,.6,.29)],{nome:"Mesa de centro"}),P=K("#C89A6B",{r:.55});ct(E,P,[2.62,.36,1.45],[3.8,.42,2],.03),ct(E,K("#E7D6C3"),[2.7,.08,1.52],[3.72,.11,1.93],.01);for(let G of[2.68,3.74])for(let Q of[1.5,1.95])Jt(E,K("#3F3A36"),.02,.02,.36,G,.18,Q);ct(E,K("#F43F5E"),[2.8,.42,1.6],[3.1,.44,1.82],.005,{ry:.2}),ct(E,K("#38BDF8"),[2.84,.44,1.62],[3.1,.455,1.8],.005,{ry:-.1}),ct(E,K("#F8FAFC",{r:.4}),[3.35,.42,1.62],[3.6,.44,1.8],.004,{ry:.3})}{let E=this.movel("sofa",[3.2,3.05],[e(3.2,3.05,1.24,.47)],{nome:"Sof\xE1"}),P=K("#0F766E",{r:.95}),G=K("#14857B",{r:.95}),Q=K("#2BB3A3",{r:1});ct(E,P,[2,.08,2.6],[4.4,.42,3.5],.06),ct(E,P,[2,.08,3.22],[4.4,.98,3.52],.08),ct(E,G,[1.96,.08,2.58],[2.2,.66,3.52],.07),ct(E,G,[4.2,.08,2.58],[4.44,.66,3.52],.07),ct(E,Q,[2.22,.4,2.62],[3.19,.54,3.24],.06),ct(E,Q,[3.21,.4,2.62],[4.18,.54,3.24],.06),ct(E,Q,[2.24,.5,3],[3.18,.92,3.24],.07,{rx:-.12}),ct(E,Q,[3.22,.5,3],[4.16,.92,3.24],.07,{rx:-.12}),ct(E,K("#FCD34D",{r:1}),[2.28,.5,2.95],[2.62,.82,3.1],.06,{rz:.15,rx:-.2});for(let rt of[2.06,4.34])for(let Mt of[2.66,3.44])Jt(E,K("#3F3A36"),.025,.02,.08,rt,.04,Mt)}{let E=this.movel("poltrona",[.92,3.2],[e(.92,3.2,.5,.44,lt/4)],{nome:"Poltrona"}),P=new Et;P.position.set(.92,0,3.2),P.rotation.y=lt/4,E.add(P);let G=K("#B45309",{r:.95}),Q=K("#D97706",{r:.95});ct(P,G,[-.42,.1,-.36],[.42,.4,.4],.06),ct(P,G,[-.42,.1,-.44],[.42,1.05,-.2],.08,{rx:.1}),ct(P,Q,[-.5,.1,-.4],[-.32,.62,.4],.07),ct(P,Q,[.32,.1,-.4],[.5,.62,.4],.07),ct(P,K("#F59E0B",{r:1}),[-.32,.38,-.25],[.32,.5,.38],.05);for(let rt of[-.44,.44])for(let Mt of[-.36,.36])Jt(P,K("#3F3A36"),.025,.018,.1,rt,.05,Mt)}{let E=this.movel("luminaria",[.32,4],[e(.32,4,.16,.16)],{nome:"Lumin\xE1ria"}),P=new Et;P.position.set(.32,0,4),E.add(P),Jt(P,K("#1F2937",{m:.6,r:.4}),.14,.16,.03,0,.015,0),Jt(P,K("#1F2937",{m:.6,r:.4}),.012,.012,1.5,0,.77,0),this.cupula=Jt(P,new ve({color:"#FEF3C7",roughness:.8,emissive:"#FFD58A",emissiveIntensity:0}),.12,.2,.26,0,1.6,0,{seg:28}),this.lampLuz=new ti("#FFC978",0,4.2,1.8),this.lampLuz.position.set(.35,1.5,4),E.add(this.lampLuz),this.lampHalo=ls("#FFD58A",1.1,0),this.lampHalo.position.set(.34,1.58,4),E.add(this.lampHalo)}{let E=this.movel("cafe",[.31,4.9],[e(.31,4.9,.31,.58)],{nome:"Cantinho do caf\xE9"}),P=K("#F8FAFC",{r:.5});ct(E,P,[.02,0,4.35],[.58,.88,5.45],.02),ct(E,K("#334155",{r:.35}),[0,.88,4.32],[.62,.92,5.48],.01),ct(E,K("#E2E8F0"),[.57,.1,4.4],[.585,.82,4.88],.004),ct(E,K("#E2E8F0"),[.57,.1,4.92],[.585,.82,5.4],.004);let G=new Et;G.position.set(.24,.92,4.9),E.add(G),ct(G,K("#111827",{r:.3,m:.3}),[-.14,0,-.14],[.14,.38,.14],.03),ct(G,K("#D1D5DB",{r:.25,m:.8}),[-.04,.24,-.13],[.2,.34,.13],.02),Jt(G,K("#FFFFFF",{r:.3}),.035,.03,.08,.14,.04,0),this.vapor=[];for(let Q=0;Q<4;Q++){let rt=ls("#FFFFFF",.1,0);rt.material.blending=pi,rt.position.set(.38,1,4.9),E.add(rt),this.vapor.push(rt)}for(let Q=0;Q<3;Q++)Jt(E,K(["#F43F5E","#FACC15","#38BDF8"][Q]),.035,.03,.08,.38,.96,5.2+Q*.09)}let S=Ge(256,192);this.desenharQuadro(S),ct(t,K("#1F2937",{r:.4}),[0,1.45,4.45],[.04,2.25,5.4],.01),Ot(new Xe(.87,.72),new ve({map:S.t,roughness:.6}),t,.045,1.85,4.925,{ry:lt/2,cast:!1});{let E=this.movel("mesa",[6.8,.6],[e(6.8,.42,1.06,.41),e(6.8,1.22,.3,.3)],{nome:"Escrivaninha"});this.mesaG=E;let P=K("#9C6B45",{r:.5}),G=K("#1F2937",{r:.4,m:.6});ct(E,P,[5.75,.72,.02],[7.85,.77,.82],.02);for(let ft of[5.82,7.78])ct(E,G,[ft-.03,0,.08],[ft+.03,.72,.14],.01),ct(E,G,[ft-.03,0,.7],[ft+.03,.72,.76],.01),ct(E,G,[ft-.03,.02,.08],[ft+.03,.06,.76],.01);ct(E,K("#F1F5F9",{r:.5}),[7.25,.18,.06],[7.7,.7,.62],.02),ct(E,K("#CBD5E1"),[7.27,.42,.62],[7.68,.44,.63],.003),ct(E,K("#1E293B",{r:.9}),[6,.77,.42],[7.55,.775,.78],.004),ct(E,K("#E5E7EB",{r:.4}),[6.42,.775,.55],[7.08,.8,.7],.01),this.teclas=ct(E,new ve({color:"#94A3B8",roughness:.5,emissive:"#60A5FA",emissiveIntensity:.25}),[6.44,.8,.565],[7.06,.805,.69],.003),this.mouse=Ot(new ln(.04,16,10),K("#E5E7EB",{r:.3}),E,7.28,.79,.62,{s:[.8,.4,1.2]}),Jt(E,G,.11,.12,.012,6.8,.776,.22),ct(E,G,[6.775,.77,.16],[6.825,1,.2],.01),ct(E,K("#0B0F19",{r:.25,m:.4}),[6.19,.86,.17],[7.41,1.42,.22],.02),this.mon=Ge(1024,448),this.monMesh=Ot(new Xe(1.18,.516),new We({map:this.mon.t,toneMapped:!1}),E,6.8,1.14,.222,{cast:!1,recv:!1}),this.monLuz=new ti("#60A5FA",1.1,2.6,1.8),this.monLuz.position.set(6.8,1.15,.75),E.add(this.monLuz),this.monHalo=ls("#60A5FA",1.6,.18),this.monHalo.position.set(6.8,1.14,.12),E.add(this.monHalo),Jt(E,K("#F8FAFC",{r:.3}),.04,.035,.1,5.98,.82,.55),Ot(new Be(.025,.008,8,14),K("#F8FAFC"),E,6.03,.83,.55,{ry:0}),this.planta(5.95,.77,.2,.45,E);let Q=this.cadeira=new Et;Q.position.set(6.8,0,1.22),Q.rotation.y=lt,E.add(Q);let rt=K("#1F2937",{r:.7}),Mt=this.cadAcento=new ve({color:"#2457F5",roughness:.7});for(let ft=0;ft<5;ft++){let vt=ft*ee/5;ct(Q,G,[-.02,.05,0],[.02,.08,.3],.01,{ry:vt}).position.set(Math.sin(vt)*.15,.065,Math.cos(vt)*.15),se(Q,K("#111827"),.03,Math.sin(vt)*.29,.03,Math.cos(vt)*.29)}Jt(Q,G,.025,.03,.4,0,.27,0),ct(Q,rt,[-.26,.44,-.27],[.26,.53,.25],.05),ct(Q,Mt,[-.17,.53,-.2],[.17,.535,.2],.005);let oe=new Et;oe.position.set(0,.5,-.27),oe.rotation.x=-.12,Q.add(oe),ct(oe,rt,[-.25,.05,-.08],[.25,.85,0],.06),ct(oe,Mt,[-.12,.12,0],[.12,.72,.006],.004),ct(oe,rt,[-.15,.8,-.07],[.15,.98,0],.05);for(let ft of[-1,1])ct(Q,G,[ft*.27-.015,.5,-.1],[ft*.27+.015,.68,-.06],.005),ct(Q,rt,[ft*.27-.04,.68,-.2],[ft*.27+.04,.71,.12],.015);let it=new Et;it.visible=!1,E.add(it),this.decPorquinho=it;let pt=K("#F9A8D4",{r:.5}),mt=new Et;mt.position.set(7.55,.775,.6),mt.rotation.y=-.5,it.add(mt),this.porco=mt,se(mt,pt,.09,0,.09,0,{s:[.9,.85,1.15]}),Jt(mt,K("#F472B6"),.035,.035,.04,0,.08,.11,{rx:lt/2});for(let ft of[-1,1])Ot(new Qn(.025,.05,8),pt,mt,ft*.045,.17,.05,{}),se(mt,K("#111827"),.008,ft*.035,.12,.085);for(let[ft,vt]of[[-.04,.05],[.04,.05],[-.04,-.05],[.04,-.05]])Jt(mt,pt,.02,.02,.05,ft,.02,vt);ct(mt,K("#9D174D"),[-.025,.165,-.03],[.025,.172,.03],.002),Tn(it)}ct(t,K("#7A5233",{r:.6}),[5.9,1.86,0],[7.7,1.9,.28],.01);let C=5.98;["#EF4444","#2457F5","#F59E0B","#10B981","#8B5CF6","#0EA5E9","#F43F5E"].forEach((E,P)=>{let G=.05+P%3*.015,Q=.2+P%2*.05;ct(t,K(E,{r:.7}),[C,1.9,.04],[C+G,1.9+Q,.24],.006,{rz:P===6?-.25:0}),C+=G+.008}),this.planta(7.5,1.9,.12,.3);let T=new Et;T.position.set(5.25,2.35,.03),t.add(T),Jt(T,K("#1F2937",{r:.4}),.27,.27,.05,0,0,0,{rx:lt/2,seg:40}),Jt(T,K("#FFFFFF",{r:.5}),.24,.24,.052,0,0,.002,{rx:lt/2,seg:40});for(let E=0;E<12;E++){let P=E*ee/12;ct(T,K("#1F2937"),[-.006,-.025,0],[.006,.025,.01],.002).position.set(Math.sin(P)*.2,Math.cos(P)*.2,.03),T.children[T.children.length-1].rotation.z=-P}let R=(E,P,G,Q)=>{let rt=new Et;return rt.position.z=Q,T.add(rt),ct(rt,K(G),[-P/2,-.02,0],[P/2,E,.006],.002),rt};this.pH=R(.12,.018,"#1F2937",.03),this.pM=R(.18,.012,"#1F2937",.037),this.pS=R(.2,.005,"#EF4444",.044),se(T,K("#EF4444"),.014,0,0,.05);{let E=this.sinuca={x0:5.7,x1:8.1,z0:3.75,z1:5.05,y:.8},P=this.movel("sinuca",[6.9,4.4],[e(6.9,4.4,1.2,.65)],{nome:"Mesa de sinuca"});this.sinucaG=P;let G=K("#5B3A1E",{r:.5}),Q=K("#15803D",{r:.95});ct(P,G,[E.x0+.15,.12,E.z0+.15],[E.x1-.15,.72,E.z1-.15],.04);for(let it of[E.x0+.2,E.x1-.2])for(let pt of[E.z0+.2,E.z1-.2])ct(P,G,[it-.07,0,pt-.07],[it+.07,.3,pt+.07],.03);ct(P,Q,[E.x0+.08,.7,E.z0+.08],[E.x1-.08,.78,E.z1-.08],.01);let rt=K("#7C4A21",{r:.45});ct(P,rt,[E.x0,.68,E.z0],[E.x1,.84,E.z0+.1],.025),ct(P,rt,[E.x0,.68,E.z1-.1],[E.x1,.84,E.z1],.025),ct(P,rt,[E.x0,.68,E.z0],[E.x0+.1,.84,E.z1],.025),ct(P,rt,[E.x1-.1,.68,E.z0],[E.x1,.84,E.z1],.025);let Mt=K("#0B0B0B",{r:.9});this.cacapas=[[E.x0+.11,E.z0+.11],[E.x1-.11,E.z0+.11],[E.x0+.11,E.z1-.11],[E.x1-.11,E.z1-.11],[(E.x0+E.x1)/2,E.z0+.09],[(E.x0+E.x1)/2,E.z1-.09]];for(let[it,pt]of this.cacapas)Jt(P,Mt,.055,.055,.012,it,.785,pt,{cast:!1});let oe=it=>se(P,K(it,{r:.15}),.03,0,0,0,{seg:20,seg2:14});[["#DC2626",6.25,3.98],["#1D4ED8",6.4,4.85],["#111827",6.95,3.95],["#7C3AED",6.05,4.15]].forEach(([it,pt,mt])=>oe(it).position.set(pt,.81,mt)),this.bB=oe("#F8FAFC"),this.bA=oe("#FACC15"),this.pendLuz=new ti("#FFE3A8",0,3.2,1.6),this.pendLuz.position.set(6.9,1.95,4.4),P.add(this.pendLuz),ct(P,K("#3B82F6",{r:.8}),[8,.84,4.95],[8.04,.86,4.99],.003)}{let E=this.movel("planta1",[.45,.45],[e(.45,.45,.24,.24)],{nome:"Planta"});this.planta(.45,0,.45,1.25,E)}{let E=this.movel("planta2",[8.5,6.95],[e(8.5,6.95,.22,.22)],{nome:"Planta"});this.plantaFrente=this.planta(8.5,0,6.95,1.05,E)}let L=this.dec={};{let E=this.movel("fliperama",[5.29,.5],[e(5.29,.5,.34,.42)],{nome:"Fliperama",decor:"fliperama"});L.fliperama=this.moveis.fliperama;let P=this.pedaco(E,[8.52,.5],[5.29,.5]),G=K("#7C3AED",{r:.5});ct(P,G,[8.18,0,.15],[8.86,1.8,.8],.03),ct(P,K("#1F2937"),[8.2,.95,.72],[8.84,1.05,1],.02,{rx:.15}),this.arcade=Ge(128,128),Ot(new Xe(.56,.46),new We({map:this.arcade.t,toneMapped:!1}),P,8.52,1.3,.805,{rx:-.12,cast:!1}),ct(P,new ve({color:"#F472B6",emissive:"#F472B6",emissiveIntensity:.9}),[8.2,1.66,.6],[8.84,1.78,.81],.02),this.joy=new Et,this.joy.position.set(8.36,1.07,.88),P.add(this.joy),Jt(this.joy,K("#111827"),.008,.008,.07,0,.035,0),se(this.joy,K("#EF4444",{r:.3}),.025,0,.075,0),this.botoesArc=[se(P,K("#FACC15",{r:.3}),.02,8.6,1.07,.9),se(P,K("#22C55E",{r:.3}),.02,8.68,1.07,.88)],this.arcMao=[new Ce,new Ce],this.arcMao[0].position.set(8.36,1.17,.9),this.arcMao[1].position.set(8.64,1.12,.9),this.arcMao.forEach(Q=>P.add(Q)),Tn(P)}{let E=this.movel("cofre",[8.54,1.63],[e(8.54,1.63,.36,.34),e(7.92,1.12,.12,.12)],{nome:"Cofre",decor:"cofre"});L.cofre=this.moveis.cofre;let P=this.pedaco(E,[8.54,1.63],[8.54,1.63],-lt/2),G=K("#D4A017",{r:.25,m:.9}),Q=K("#3F2A08",{r:.6});ct(P,G,[8.22,0,1.3],[8.86,.72,1.6],.04),ct(P,G,[8.22,0,1.3],[8.28,.72,1.96],.02),ct(P,G,[8.8,0,1.3],[8.86,.72,1.96],.02),ct(P,G,[8.22,0,1.3],[8.86,.06,1.96],.02),ct(P,G,[8.22,.66,1.3],[8.86,.72,1.96],.02),ct(P,Q,[8.28,.06,1.58],[8.8,.66,1.62],.005);for(let Mt=0;Mt<3;Mt++)ct(P,K("#FACC15",{r:.25,m:.9,e:"#7A5A00",ei:.6}),[8.32+Mt*.15,.06,1.66],[8.44+Mt*.15,.14,1.86],.01);this.cofreBrilho=ls("#FDE68A",.9,0),this.cofreBrilho.position.set(8.54,.4,1.8),P.add(this.cofreBrilho);let rt=this.cofrePorta=new Et;rt.position.set(8.24,0,1.97),P.add(rt),ct(rt,G,[0,.03,-.02],[.6,.69,.03],.03),Jt(rt,K("#713F12",{m:.6,r:.4}),.1,.1,.03,.3,.4,.04,{rx:lt/2}),ct(rt,K("#713F12",{m:.6}),[.295,.32,.05],[.305,.48,.06],.002),this.cofreMacaneta=new Ce,this.cofreMacaneta.position.set(.5,.42,.08),rt.add(this.cofreMacaneta);for(let Mt=0;Mt<5;Mt++)Jt(P,K("#FACC15",{r:.3,m:.85}),.06,.06,.02,8.05+Mt%2*.04,.01+Mt*.021,2.25,{});for(let Mt=0;Mt<3;Mt++)Jt(P,K("#FACC15",{r:.3,m:.85}),.06,.06,.02,7.92,.01+Mt*.021,2.12,{});Tn(P)}{let E=this.movel("aquario",[.35,6.835],[e(.35,6.835,.31,.49)],{nome:"Aqu\xE1rio",decor:"aquario"});L.aquario=this.moveis.aquario,ct(E,K("#5B3A1E",{r:.6}),[.04,0,6.35],[.66,.74,7.32],.02),Ot(new os(.58,.5,.92,2,.01),new ve({color:"#7DD3FC",transparent:!0,opacity:.32,roughness:.05,metalness:.1,depthWrite:!1}),E,.35,1,6.835,{cast:!1}),ct(E,K("#E7D7B8"),[.08,.74,6.4],[.62,.79,7.28],.01),ct(E,K("#1F2937"),[.05,1.24,6.38],[.65,1.28,7.3],.01),this.peixes=[],["#F97316","#FACC15","#38BDF8","#F43F5E"].forEach((P,G)=>{let Q=new Et;se(Q,K(P,{r:.4}),.035,0,0,0,{s:[.6,.8,1.4],seg:12}),Ot(new Qn(.03,.05,8),K(P),Q,0,0,-.06,{rx:-lt/2}),E.add(Q),this.peixes.push(Q)});for(let P=0;P<5;P++){let G=Ot(new Qn(.03,.18+P*.03,6),K("#16A34A",{r:.8}),E,.2+P%3*.12,.85,6.5+P*.17);G.userData.alga=P}this.bolhas=[];for(let P=0;P<6;P++){let G=se(E,K("#FFFFFF",{op:.6,r:.1}),.008,.45,.8,7.1,{seg:8,seg2:6,cast:!1});this.bolhas.push(G)}this.racao=[];for(let P=0;P<14;P++){let G=se(E,K("#B45309",{r:.8}),.006,.35,1.2,6.8,{seg:6,seg2:4,cast:!1});G.visible=!1,this.racao.push(G)}ct(E,K("#F59E0B",{r:.6}),[.5,1.28,7.12],[.58,1.38,7.2],.008),ct(E,K("#DC2626",{r:.5}),[.5,1.38,7.12],[.58,1.395,7.2],.004),this.aqLuz=ls("#38BDF8",1,.25),this.aqLuz.position.set(.35,1,6.85),E.add(this.aqLuz)}{let E=this.movel("touro",[6.2,6.95],[e(6.2,6.95,.35,.35)],{nome:"Touro de ouro",decor:"touro"});L.touro=this.moveis.touro;let P=this.pedaco(E,[8.5,6.95],[6.2,6.95]),G=K("#E3B341",{r:.18,m:1});ct(P,K("#E5E7EB",{r:.5}),[8.15,0,6.6],[8.85,.55,7.3],.03);let Q=new Et;Q.position.set(8.5,.55,6.95),Q.rotation.y=-lt*.6,P.add(Q),this.touroT=Q,wn(Q,G,.13,.28,0,.3,0,{rx:lt/2}),se(Q,G,.12,0,.33,-.1);let rt=new Et;rt.position.set(0,.36,.27),rt.rotation.x=.5,Q.add(rt),se(rt,G,.09,0,0,0,{s:[1,.9,1.2]});for(let Mt of[-1,1])Ot(new Be(.07,.015,8,16,lt*.7),G,rt,Mt*.07,.07,0,{rz:Mt>0?-.2:lt+.2});this.touroCab=new Ce,this.touroCab.position.set(0,.1,0),rt.add(this.touroCab);for(let[Mt,oe]of[[-.08,.15],[.08,.15],[-.08,-.15],[.08,-.15]])wn(Q,G,.035,.12,Mt,.12,oe);Ot(new Be(.08,.012,6,12,lt),G,Q,0,.32,-.24,{ry:lt/2}),Tn(P)}{let E=this.movel("trofeu",[8.6,2.6],[e(8.6,2.6,.18,.18)],{nome:"Trof\xE9u",decor:"trofeu"});L.trofeu=this.moveis.trofeu,ct(E,K("#E5E7EB",{r:.45}),[8.44,0,2.44],[8.76,.08,2.76],.02),ct(E,K("#F8FAFC",{r:.4}),[8.48,.08,2.48],[8.72,1,2.72],.02),ct(E,K("#E5E7EB",{r:.45}),[8.45,1,2.45],[8.75,1.04,2.75],.02);let P=this.trofeuObj=new Et,G=K("#E3B341",{r:.2,m:1}),Q=[[0,0],[.06,0],[.06,.03],[.018,.04],[.018,.1],[.07,.13],[.085,.22],[0,.22]].map(([rt,Mt])=>new xt(rt,Mt));Ot(new qs(Q,24),G,P);for(let rt of[-1,1])Ot(new Be(.035,.008,6,12),G,P,rt*.085,.17,0,{});Tn(P),this.trofeuBase=Ut(8.6,1.04,2.6),P.position.copy(this.trofeuBase),E.add(P),this.trofeuPai=E}{let E=this.movel("cachorro",[1.35,6.2],[e(1.35,6.2,.38,.3)],{nome:"Caminha do cachorro",decor:"cachorro"});L.cachorro=this.moveis.cachorro,Ot(new Be(.28,.08,12,32),K("#7C3AED",{r:.9}),E,1.35,.08,6.2,{rx:lt/2,s:[1.25,.95,1]}),Ot(new $i(.3,.3,.05,32),K("#C4B5FD",{r:1}),E,1.35,.04,6.2,{s:[1.2,1,.9]}),se(E,K("#EF4444",{r:.5}),.04,1.75,.04,6.45)}{let E=new Et;E.visible=!1,t.add(E),L.globo=E,Jt(E,K("#94A3B8"),.004,.004,.3,3.4,Ze-.15,4.9),this.globo=Ot(new Qi(.2,2),new ve({color:"#E2E8F0",metalness:1,roughness:.12,flatShading:!0}),E,3.4,Ze-.48,4.9),this.spots=["#F43F5E","#22D3EE","#FACC15","#A855F7"].map(P=>{let G=new Yr(P,0,8,.35,.6,1.2);return G.position.set(3.4,Ze-.48,4.9),E.add(G,G.target),G})}L.porquinho=this.decPorquinho;{let E=new Et;E.visible=!1,t.add(E),L.neon=E;let P=Ge(256,256);P.g.font="900 210px system-ui, sans-serif",P.g.textAlign="center",P.g.textBaseline="middle",P.g.shadowColor="#FB923C",P.g.shadowBlur=24,P.g.fillStyle="#FDBA74",P.g.fillText("\u20BF",128,138),this.neonM=new We({map:P.t,transparent:!0,toneMapped:!1,depthWrite:!1}),Ot(new Xe(.6,.6),this.neonM,E,.03,2.2,6.6,{ry:lt/2,cast:!1}),this.neonHalo=ls("#FB923C",1.1,.35),this.neonHalo.position.set(.15,2.2,6.6),E.add(this.neonHalo)}{let E=new Et;E.visible=!1,t.add(E),L.arcoiris=E,this.arcoM=[],["#F43F5E","#F59E0B","#22C55E","#3B82F6"].forEach((G,Q)=>{let rt=new We({color:G,toneMapped:!1});this.arcoM.push(rt),Ot(new Be(.42-Q*.07,.014,8,48,lt),rt,E,3.2,2.28,.07,{cast:!1})});let P=ls("#FDE68A",1.4,.25);P.position.set(3.2,2.45,.15),E.add(P),this.arcoHalo=P}{let E=new Et;E.visible=!1,t.add(E),L.dardos=E;let P=Ge(128,128);[["#111827",62],["#F43F5E",50],["#FEF3C7",34],["#F43F5E",16]].forEach(([G,Q])=>{P.g.fillStyle=G,P.g.beginPath(),P.g.arc(64,64,Q,0,ee),P.g.fill()}),Ot(new Ji(.22,32),new ve({map:P.t,roughness:.8}),E,.012,1.75,5.95,{ry:lt/2,cast:!1}),this.dardos=[];for(let G=0;G<3;G++){let Q=new Et;Jt(Q,K("#9CA3AF",{m:.8,r:.3}),.003,.001,.05,0,.025,0),Jt(Q,K("#1D4ED8"),.006,.006,.08,0,-.04,0),Ot(new Qn(.02,.04,4),K("#FACC15",{ds:!0}),Q,0,-.09,0,{rx:lt}),Q.scale.setScalar(1.7),t.add(Q),Q.visible=!1,this.dardos.push(Q)}this.dardosAlvo=[[.07,1.77,5.93],[.07,1.7,6],[.07,1.78,6.02]]}let N=260,O=new Xe(.05,.03);this.confete=new Zi(O,new We({side:gn,toneMapped:!1}),N);let D=["#F43F5E","#F59E0B","#22C55E","#3B82F6","#A855F7","#FACC15","#FFFFFF"].map(E=>new ie(E));this.confData=Array.from({length:N},()=>({x:Math.random()*je,z:Math.random()*Qe,y0:Math.random()*Ze,v:.4+Math.random()*.5,r:Math.random()*ee,rv:(Math.random()-.5)*8,sw:Math.random()*ee}));for(let E=0;E<N;E++)this.confete.setColorAt(E,D[E%D.length]);this.confete.visible=!1,this.confete.frustumCulled=!1,t.add(this.confete),this.faisca=Ge(64,64);{let E=this.faisca.g;E.translate(32,32),E.fillStyle="#FFF7C2",E.beginPath();for(let P=0;P<8;P++){let G=P*lt/4,Q=P%2?9:30;E.lineTo(Math.cos(G)*Q,Math.sin(G)*Q)}E.closePath(),E.fill()}this.faiscas=[];for(let E=0;E<18;E++){let P=new Ri(new fi({map:this.faisca.t,color:"#FDE68A",transparent:!0,depthWrite:!1,blending:Ni,toneMapped:!1}));P.visible=!1,t.add(P),this.faiscas.push({s:P,vida:9})}this.notaGeo=new os(.16,.004,.08,1,.001);let B=Ge(128,64);B.g.fillStyle="#86EFAC",B.g.fillRect(0,0,128,64),B.g.strokeStyle="#15803D",B.g.lineWidth=5,B.g.strokeRect(4,4,120,56),B.g.fillStyle="#15803D",B.g.font="bold 34px system-ui",B.g.textAlign="center",B.g.fillText("R$",64,44),this.notaMat=new ve({map:B.t,roughness:.8}),this.itens={},this.itens.controle=this.fazerControle(),t.add(this.itens.controle);let Y=new Et;Jt(Y,K("#FFFFFF",{r:.3}),.042,.036,.1,0,.05,0),Jt(Y,K("#6B3E1F",{r:.2}),.038,.038,.004,0,.096,0),Ot(new Be(.028,.008,8,14),K("#FFFFFF"),Y,.045,.05,0,{}),Tn(Y,!0,!1),this.itens.xicara=Y,t.add(Y);let W=new Me(this.notaGeo,this.notaMat);W.castShadow=!0,this.itens.nota=W,t.add(W);let ut=new Et;for(let E=0;E<6;E++){let P=new Me(this.notaGeo,this.notaMat);P.position.y=E*.005,P.rotation.y=(E%3-1)*.08,ut.add(P)}Tn(ut,!0,!1),this.itens.maco=ut,t.add(ut);let $=new Et;Jt($,K("#B7793A",{r:.4}),.0105,.02,1.45,0,.725,0),Jt($,K("#1F2937",{r:.4}),.0205,.021,.35,0,.175,0),Jt($,K("#E8F1FF"),.0105,.0105,.02,0,1.455,0),Jt($,K("#3B82F6"),.0108,.0108,.008,0,1.468,0),Tn($,!0,!1),this.itens.taco=$,t.add($);let st=new Et;ct(st,K("#111827",{r:.3}),[-.035,-.07,-.005],[.035,.07,.005],.008),this.celTela=Ge(64,128),Ot(new Xe(.062,.126),new We({map:this.celTela.t,toneMapped:!1}),st,0,0,.0055,{cast:!1}),this.itens.celular=st,t.add(st);let I=new Et;Jt(I,K("#FACC15",{r:.25,m:.9}),.025,.025,.006,0,0,0,{rx:lt/2}),this.itens.moeda=I,t.add(I);let k=()=>{let E=new Et;return Jt(E,K("#9CA3AF",{m:.8,r:.3}),.003,.001,.05,0,.025,0),Jt(E,K("#1D4ED8"),.006,.006,.08,0,-.04,0),Ot(new Qn(.02,.04,4),K("#FACC15",{ds:!0}),E,0,-.09,0,{rx:lt}),E.scale.setScalar(1.7),E};this.itens.dardo=k(),t.add(this.itens.dardo);let X=new Et;this.aljavaD=[0,1,2].map(E=>{let P=k();return P.position.set((E-1)*.018,0,0),P.rotation.z=(E-1)*.12,X.add(P),P}),this.itens.aljava=X,t.add(X),Object.values(this.itens).forEach(E=>{E.visible=!1});let et=this.nuvem=new Et,tt=K("#94A3B8",{r:1});[[0,0,0,.16],[-.14,-.03,0,.12],[.15,-.02,.02,.13],[.05,.08,0,.12],[-.06,.02,.08,.1]].forEach(([E,P,G,Q])=>se(et,tt,Q,E,P,G,{cast:!1})),this.gotas=[];for(let E=0;E<8;E++){let P=Jt(et,jx("#60A5FA",{op:.85}),.006,.006,.07,-.15+E*.043,-.15,(E%3-1)*.05,{cast:!1});this.gotas.push(P)}et.visible=!1,t.add(et),this.balao=Ge(128,128),this.balaoT="",this.balaoS=new Ri(new fi({map:this.balao.t,transparent:!0,depthWrite:!1})),this.balaoS.visible=!1,t.add(this.balaoS);let yt=Ge(128,128);yt.g.strokeStyle="#FFFFFF",yt.g.lineWidth=7,ki(yt.g,6,6,116,116,16),yt.g.stroke(),yt.g.fillStyle="rgba(255,255,255,.14)",yt.g.fill(),this.contornoTex=yt.t;for(let E in this.moveis){let P=this.moveis[E];P.marca=new Me(new Xe(1,1),new We({map:yt.t,color:"#60A5FA",transparent:!0,depthWrite:!1,toneMapped:!1,opacity:.85})),P.marca.rotation.x=-lt/2,P.marca.visible=!1,P.marca.renderOrder=2,t.add(P.marca),P.outer.traverse(G=>{G.userData.movel=E})}}fazerControle(){let t=new Et;ct(t,K("#1F2937",{r:.35}),[-.08,-.015,-.035],[.08,.015,.035],.015);for(let e of[-1,1])se(t,K("#1F2937",{r:.35}),.035,e*.07,-.005,-.015,{s:[1,.7,1.3]});return se(t,K("#60A5FA",{e:"#60A5FA",ei:.6}),.009,-.04,.016,0),se(t,K("#F87171",{e:"#F87171",ei:.6}),.009,.04,.016,0),Tn(t,!0,!1)}planta(t,e,n,i,r=this.scene){let o=new Et;o.position.set(t,e,n),r.add(o);let a=i*.18;Jt(o,K("#E7E5E4",{r:.6}),a,a*.8,i*.32,0,i*.16,0),Jt(o,K("#57534E",{r:1}),a*.95,a*.95,.01,0,i*.32,0);let c=new Et;c.position.y=i*.32,o.add(c);let l=[K("#16A34A",{r:.7,ds:!0}),K("#22C55E",{r:.7,ds:!0}),K("#15803D",{r:.7,ds:!0})],u=9;for(let d=0;d<u;d++){let h=d*ee/u+d%2*.3,f=.35+d%3*.2,m=i*(.5+d%4*.1),_=new Et;_.rotation.set(0,h,0),c.add(_);let g=new Et;g.rotation.x=f,_.add(g),Ot(new ln(m*.5,10,8),l[d%3],g,0,m*.5,0,{s:[.32,1,.1]})}return Tn(o),(this.plantas||(this.plantas=[])).push(c),o}lugares(){let t=this.nav,e=(a,c)=>this.lugar(a,c),n=a=>{let c=t.perto(a[0],a[1]);return[c[0],c[1],a[2]??0]},i=e("mesa",[7.45,1.95]),r=e("mesa",[6.8,.3]);return{sofaS:e("sofa",[3.2,3,lt]),sofaP:n(e("sofa",[3.2,2.3,lt])),cafeP:n(e("cafe",[.98,4.9,-lt/2])),cadS:e("mesa",[6.8,1.2,lt]),cadP:n(e("mesa",[6.8,1.95,lt])),monP:n([i[0],i[1],po(i,r)]),ritmo1:n(e("mesa",[5.5,2.35])),ritmo2:n(e("mesa",[7.9,2.45])),polS:e("poltrona",[.92,3.2,lt/4]),polP:n(e("poltrona",[1.36,3.64,lt/4])),janP:n([.62,1.85,-lt/2]),danca:n([3.4,5.25,lt/4]),sinP:this.sinP?n(this.sinP):n([8.5,4.6,-lt/2])}}calibrarTacada(){let t=this.sinuca,e=[7.62,4.52],n=[t.x0+.11,t.z0+.11],i=[n[0]-e[0],n[1]-e[1]],r=Math.hypot(...i),o=[i[0]/r,i[1]/r],a=[e[0]+o[0]*.5,e[1]+o[1]*.5],c=[a[0]-o[0]*.06,a[1]-o[1]*.06],l=[c[0]+o[0]*.1-o[1]*.12,c[1]+o[1]*.1+o[0]*.12];this.bolas={R:e,Y:a,C:c,u:o,fimB:l,pk:n};let u=Math.atan2(o[0],o[1]),d=[o[1],-o[0]],h=[e[0]-o[0]*.9-d[0]*.13,e[1]-o[1]*.9-d[1]*.13];this.tacoBase={tip:[e[0]-o[0]*.035,e[1]-o[1]*.035],u:o,el:.16},this.sinP=this.lugar("sinuca",[h[0],h[1],u])}tacoPontas(t){let e=this.boneco,n=e.root,i=t.taco,r=t.recuo||0,o=(y,w,v)=>this.pto("sinuca",y,w,v),a=[o(8.14,.02,5.1),o(8.11,1.46,4.93)],c=[n.localToWorld(Ut(.27,.05,.17)),n.localToWorld(Ut(.33,1.5,.25))],l=this.tacoBase,u=Math.cos(l.el),d=Math.sin(l.el),h=this.pto("sinuca",l.tip[0]-l.u[0]*u,.81+d,l.tip[1]-l.u[1]*u).sub(this.pto("sinuca",l.tip[0],.81,l.tip[1])).normalize(),f=this.pto("sinuca",l.tip[0],.812,l.tip[1]).addScaledVector(h,r*.2),m=[f.clone().addScaledVector(h,1.45),f],_,g,p;if(i<=0?(p=ce(i+1),_=a[0].clone().lerp(c[0],p),g=a[1].clone().lerp(c[1],p)):(p=ce(i),_=c[0].clone().lerp(m[0],p),g=c[1].clone().lerp(m[1],p)),i>0&&i<1){let y=Math.sin(lt*p)*.25;_.y+=y,g.y+=y}return{butt:_,tip:g,ax:h,apoioBridge:this.pto("sinuca",l.tip[0],.8,l.tip[1]).addScaledVector(h,.26).setY(.835)}}aplicarTaco(t){let e=this.tacoPontas(t),n=this.itens.taco;n.visible=!0;let i=e.tip.clone().sub(e.butt),r=i.length()||1;i.divideScalar(r),n.position.copy(e.butt),n.quaternion.setFromUnitVectors(Ut(0,1,0),i);let o=t.taco,a=pe(o+1),c=_t(.98,.5,pe(o)),l=e.butt.clone().addScaledVector(i,c);if(t.ikR=[l.x,l.y,l.z],t.kR=Math.max(t.kR||0,a),o>.02){let u=e.apoioBridge;t.ikL=[u.x,u.y,u.z],t.kL=Math.max(t.kL||0,pe(o))}t.item=o>.5?"tacoShot":o>-.5?"tacoV":t.item}teclado(){return{L:this.pto("mesa",6.62,.83,.64),R:this.pto("mesa",6.97,.83,.64)}}mundo(t){return t.getWorldPosition(new U)}alvoCao(){return this.mundo(this.cao.cab).add(Ut(0,.05,0))}alvoArcade(){return this.arcMao.map(t=>this.mundo(t))}alvoTouro(){return this.mundo(this.touroCab)}alvoCofre(){return this.mundo(this.cofreMacaneta)}alvoPorco(){return this.mundo(this.porco).add(Ut(0,.17,0))}alvoTrofeu(){let t=this.trofeuPai,e=this.trofeuBase;return{L:t.localToWorld(e.clone().add(Ut(-.1,.17,0))),R:t.localToWorld(e.clone().add(Ut(.1,.17,0)))}}atualizar(t){let e=this.d;this.d=t;let n=t.humor||"tranquilo";this.boneco&&((t.boneco!==e.boneco||t.acessorio!==e.acessorio)&&this.boneco.setAparencia(t.boneco,t.acessorio),this.boneco.setCor(t.cor),t.icone!==e.icone&&this.boneco.setIcone(t.icone)),this.cadAcento&&this.cadAcento.color.set(t.cor||"#2457F5"),this.titulo=t.titulo,this.pctTxt=t.pct==null||!isFinite(t.pct)?"":(t.pct>0?"+":"")+t.pct.toFixed(2).replace(".",",")+"%";let i=Object.fromEntries((e.ativos||[]).map(o=>[o.t,o]));for(let o of t.ativos||[]){let a=i[o.t];a&&a.preco!=null&&o.preco!=null&&Math.abs(a.preco-o.preco)>1e-9&&(this.flash[o.t]={t:performance.now(),up:o.preco>a.preco})}if(e.ativos&&JSON.stringify((e.ativos||[]).map(o=>[o.t,o.preco]))!==JSON.stringify((t.ativos||[]).map(o=>[o.t,o.preco]))&&this.log("cota\xE7\xF5es atualizadas"),!t.sim&&t.pct!=null&&isFinite(t.pct)){let o=this.hist[this.hist.length-1];(!o||Math.abs(o.v-t.pct)>1e-6)&&(this.hist.push({v:t.pct,t:Date.now()}),this.hist.length>60&&this.hist.shift())}if(t.layout!==void 0&&!this.salvando&&!this.arrasto){let o=a=>JSON.stringify({m:a&&a.m||{},off:[...a&&a.off||[]].sort()});o(t.layout)!==o(this.layoutAtual())&&(this.aplicarLayout(t.layout,!0),this.navOk=!1)}this.tem=t.tem||{},this.dir||(this.dir=new Sh(this));let r=this.aplicarDecor(!t.tudo&&!t.sim);n!==this.h&&(this.h&&this.log(t.sim?"simulando: "+(t.titulo||n).toLowerCase():"humor: "+(t.titulo||n).toLowerCase()),this.h=n,this.aplicarHumor(),this.dir.humor(n)),(r||!this.navOk)&&(this.navOk=!0,this.mudouLayout()),this.renderer.domElement.setAttribute("aria-label","Escrit\xF3rio 3D: "+(t.titulo||"")),this.sujo=!0}aplicarDecor(t){let e=!1;for(let n in this.dec){let i=this.dec[n],r=!!this.tem[n]&&!this.off.has(n),o=i.outer||i;o.visible!==r&&(o.visible=r,e=!0,r&&(this.pops[n]=performance.now(),t&&!this.vistos.has(n)&&(this.vistos.add(n),this.salvarVistos(),this.dir&&this.dir.novidade(n))))}return this.dec.cachorro&&(this.cao.g.visible=this.dec.cachorro.outer.visible),e}get pops(){return this._pops||(this._pops={})}lerVistos(){try{return new Set(JSON.parse(localStorage.getItem("radar-esc-vistos")||"[]"))}catch{return new Set}}salvarVistos(){try{localStorage.setItem("radar-esc-vistos",JSON.stringify([...this.vistos]))}catch{}}equipar(t,e){e?this.off.delete(t):this.off.add(t),this.aplicarDecor(!1)&&this.mudouLayout(),this.avisarLayout(),this.log((e?"colocou ":"guardou ")+(this.moveis[t]?this.moveis[t].nome.toLowerCase():t))}avisarLayout(){if(typeof this.d.onLayout=="function"){this.salvando=!0;try{this.d.onLayout(this.layoutAtual())}finally{this.salvando=!1}}}restaurar(){let t=[...this.off];this.aplicarLayout({off:t}),this.avisarLayout(),this.log("restaurou os m\xF3veis")}aplicarHumor(){let t=Qx[this.h];this.cfg=t,this.confete.visible=this.h==="euforico";for(let e of this.notas)this.scene.remove(e.m);this.notas=[],this.aplicarLuz()}aplicarLuz(){let t=this.cfg,e=this.noite;this.hemi.intensity=t.hemi*(e?.55:1),this.hemi.color.set(e?"#A9B8E8":"#E3EBFF"),this.key.intensity=t.key*(e?.35:1),this.key.color.set(e?"#9DB0FF":t.keyCor),this.fill.intensity=e?.25:.35;let n=t.lamp||e;this.lampLuz.intensity=n?2.6:0,this.lampHalo.material.opacity=n?.55:0,this.cupula.material.emissiveIntensity=n?1.1:0;let i=t.pend||e;this.pendLuz.intensity=i?2.4:0,this.tvLuz.color.set(t.tv),this.monLuz.color.set(t.mon),this.monHalo.material.color.set(t.mon),this.feixe.material.opacity=e?.06:t.raio,this.feixe.material.color.set(e?"#A5B4FC":"#FFE7A3"),this.renderer.toneMappingExposure=t.exp*(e?.86:1),this.scene.environmentIntensity=e?.14:.32}ligarControles(){let t=this.renderer.domElement,e=null;t.style.touchAction="pan-y";let n=new Zr,i=new xt,r=new yn(Ut(0,1,0),0),o=l=>{let u=t.getBoundingClientRect();i.set((l.clientX-u.left)/u.width*2-1,-((l.clientY-u.top)/u.height)*2+1),n.setFromCamera(i,this.cam)},a=l=>{o(l);let u=new U;return n.ray.intersectPlane(r,u)?u:null};t.addEventListener("pointerdown",l=>{if(this.edit){o(l);let u=[];for(let h in this.moveis){let f=this.moveis[h];this.ativo(f)&&u.push(f.outer)}let d=n.intersectObjects(u,!0).find(h=>h.object.userData.movel);if(d){let h=this.moveis[d.object.userData.movel],f=a(l)||d.point;this.arrasto={m:h,ini:[h.x,h.z,h.ri],off:[h.x-f.x,h.z-f.z],moveu:!1,id:l.pointerId,x:l.clientX,y:l.clientY,ok:!0},this.sel=h;try{t.setPointerCapture(l.pointerId)}catch{}l.preventDefault(),this.sujo=!0;return}}e={x:l.clientX,y:l.clientY,az:this.az,el:this.el_,id:l.pointerId,moveu:!1}}),window.addEventListener("pointermove",l=>{let u=this.arrasto;if(u&&l.pointerId===u.id){if(!u.moveu&&Math.hypot(l.clientX-u.x,l.clientY-u.y)>5&&(u.moveu=!0),!u.moveu)return;let f=a(l);if(!f)return;let m=Math.round((f.x+u.off[0])/.05)*.05,_=Math.round((f.z+u.off[1])/.05)*.05;[m,_]=this.prender(u.m,m,_,u.m.ri),u.ok=this.cabe(u.m,m,_,u.m.ri),this.posicionar(u.m,m,_,u.m.ri),this.sujo=!0;return}if(!e||l.pointerId!==e.id)return;let d=l.clientX-e.x,h=l.clientY-e.y;if(!e.moveu&&Math.hypot(d,h)>6){e.moveu=!0;try{t.setPointerCapture(l.pointerId)}catch{}this.camModo!=="sala"&&this.setCam("sala",!0)}e.moveu&&(this.az=pe(e.az-d*.006,.12,lt/2-.12),l.pointerType!=="touch"&&(this.el_=pe(e.el+h*.004,.22,1)),this.sujo=!0)});let c=l=>{let u=this.arrasto;if(u&&(!l||l.pointerId===u.id)){this.arrasto=null;let d=u.m;if(u.moveu)u.ok?this.log("moveu "+d.nome.toLowerCase()):(this.posicionar(d,...u.ini),this.log("n\xE3o cabe ali"));else{for(let h=1;h<=8;h++){let f=u.ini[2]+h,[m,_]=this.prender(d,d.x,d.z,f);if(this.cabe(d,m,_,f)){this.posicionar(d,m,_,f);break}}this.log("girou "+d.nome.toLowerCase())}this.mudouLayout(),this.avisarLayout(),this.sujo=!0;return}e&&e.moveu&&this.log("girou a c\xE2mera"),e=null};window.addEventListener("pointerup",c),window.addEventListener("pointercancel",c),t.addEventListener("dblclick",()=>{this.edit||(this.az=lt/4,this.el_=.5,this.setCam("sala"))})}setEdicao(t){this.edit=!!t,this.sel=null,this.sujo=!0,this.renderer.domElement.style.cursor=t?"grab":"";for(let e in this.moveis)this.moveis[e].marca.visible=!1;t&&this.camModo!=="sala"&&this.setCam("sala",!0),this.log(t?"arrumando o escrit\xF3rio":"terminou de arrumar")}setCam(t,e){this.camModo=t,this.sujo=!0,e||this.log({sala:"vis\xE3o da sala",tela:"zoom no computador",seguir:"seguindo o boneco"}[t]||t)}alvoCamera(t){let e=this.cam.aspect;if(window.__ofCamOv)return window.__ofCamOv(this,t,Ut);if(this.camModo==="tela")return e<1?{pos:this.pto("mesa",7.12,1.2,1.1),alvo:this.pto("mesa",6.8,1.13,.22),fov:70}:{pos:this.pto("mesa",7.2,1.24,1.2),alvo:this.pto("mesa",6.87,1.12,.22),fov:50};if(this.camModo==="seguir"){let u=this.boneco.root.position,d=this.az+.1*Math.sin(t*.2),h=.42,f=e<1?4.6:3.9;return{pos:Ut(u.x+Math.sin(d)*Math.cos(h)*f,.95+Math.sin(h)*f,u.z+Math.cos(d)*Math.cos(h)*f),alvo:Ut(u.x,.95,u.z),fov:38}}let n=30,i=this.reduz||this.edit?0:Math.sin(t*.15)*.025,r=[this.az.toFixed(3),this.el_.toFixed(3),e.toFixed(3)].join();r!==this.fitKey&&(this.fitKey=r,this.fit=this.enquadrar(this.az,this.el_,n,e));let{dist:o,alvo:a}=this.fit,c=Math.cos(this.el_),l=this.az+i;return{pos:Ut(a.x+Math.sin(l)*c*o,a.y+Math.sin(this.el_)*o,a.z+Math.cos(l)*c*o),alvo:a.clone(),fov:n}}laco(){if(this.raf=0,!this.el.isConnected){this.destruir();return}if(document.hidden||this.el.closest(".of-pausa"))this.tAnt=performance.now();else{let e=performance.now(),n=(e-this.tAnt)/1e3,i=Math.min(window.__ofT!=null?.3:.05,n);this.tAnt=e;let r=this.reduz?2:(e-this.t0)/1e3;(!this.reduz||this.sujo)&&this.quadro(r,this.reduz?0:i),this.sujo=!1,this.ms=this.ms==null?16:this.ms*.95+Math.min(n*1e3,100)*.05,this.ms>30&&this.pr>1&&e-(this.tPr||0)>3e3&&(this.tPr=e,this.pr=Math.max(1,this.pr-.25),this.renderer.setPixelRatio(this.pr),this.redimensionar())}this.raf=requestAnimationFrame(this.laco)}emitir(t,e=10,n="#FDE68A"){let i=0;for(let r of this.faiscas)if(!(r.vida<1.1)&&(r.vida=0,r.s.visible=!0,r.s.material.color.set(n),r.s.position.copy(t),r.v=Ut((Math.random()-.5)*1.6,1+Math.random()*1.4,(Math.random()-.5)*1.6),++i>=e))break}quadro(t,e){let n=new Date().getHours(),i=window.__ofNoite!=null?!!window.__ofNoite:n<6||n>=19;i!==this.noite&&(this.noite=i,this.aplicarLuz());let r=this.boneco,o=this.dir.passo(window.__ofT!=null?window.__ofT:null,e),a=o.pose,c=o.s||{},l=c.fx||"",u=o.tl,d=o.pose.fxk||0,h=this.posF||(this.posF={x:o.pos[0],z:o.pos[1],y:o.pos[2],vx:0,vz:0,vy:0}),f=(I,k,X,et)=>{let tt=I-X,yt=Math.exp(-et*e),E=(k+et*tt)*e;return[X+(tt+E)*yt,(k-et*E)*yt]},m=h.x,_=h.z,g=h.y;if(e>0&&window.__ofT==null){[h.x,h.vx]=f(h.x,h.vx,o.pos[0],12),[h.z,h.vz]=f(h.z,h.vz,o.pos[1],12);let I=h.y+si(h.y,o.pos[2]);[h.y,h.vy]=f(h.y,h.vy,I,11)}else h.x=o.pos[0],h.z=o.pos[1],h.y=o.pos[2];if(e>0&&!a.andando&&(a.sent||0)<.3){let I=Math.hypot(h.x-m,h.z-_)/e,k=Math.abs(si(g,h.y))/e,X=pe((I-.08)*5+(k-.5)*.9);if(this.passoK=_t(this.passoK||0,X,Math.min(1,e*8)),this.passoF=(this.passoF||0)+e*(2.2+I*4+k*.8)*this.passoK,this.passoK>.02){let et=Math.sin(this.passoF*lt),tt=this.passoK;a={...a,lL:[a.lL[0]+.28*Math.max(0,et)*tt,a.lL[1]+.55*Math.max(0,et)*tt],lR:[a.lR[0]+.28*Math.max(0,-et)*tt,a.lR[1]+.55*Math.max(0,-et)*tt],alt:a.alt-.012*Math.abs(et)*tt}}}if(a=this.filtro.passo(a,e),r.root.position.set(h.x,0,h.z),r.root.rotation.y=h.y+(a.yawAdd||0),r.root.updateMatrixWorld(!0),a.taco>-.98&&this.h==="feliz")a={...a},this.aplicarTaco(a);else{let I=this.tacoPontas({taco:-1}),k=I.tip.clone().sub(I.butt).normalize(),X=this.itens.taco;X.visible=!0,X.position.copy(I.butt),X.quaternion.setFromUnitVectors(Ut(0,1,0),k)}this.decidirProps(c,o.k,u);let y=Object.keys(this.prop).find(I=>["R","LR","joga"].includes(this.prop[I].h)),w=Object.keys(this.prop).find(I=>this.prop[I].h==="L");["tecla","tacoV","tacoShot"].includes(a.item)||(a.item=y==="joga"?"":y||""),w&&(a.mL=Math.max(a.mL||0,.9)),r.aplicar(a,t,e),r.desenharRosto(a,t),r.blob.position.set(h.x,.004,h.z),r.blob.material.opacity=pe(1-(a.dy||0)*2,.3,1),this.moverProps(a,u,d,e),this.itens.celular.visible&&this.desenharCel(t);let v=this.bolas,M=.81,S=this.h==="feliz"&&a.bolas||"ini";if(S==="ini")this.bB.position.set(v.R[0],M,v.R[1]),this.bA.position.set(v.Y[0],M,v.Y[1]),this.bA.visible=!0,this.bA.scale.setScalar(1);else if(S==="jogo"){let I=ne(u,xi,xi+.28),k=ne(u,xi+.28,xi+1),X=ne(u,xi+1,xi+1.15),et=k>0?[_t(v.C[0],v.fimB[0],cs(k)),_t(v.C[1],v.fimB[1],cs(k))]:[_t(v.R[0],v.C[0],I),_t(v.R[1],v.C[1],I)];this.bB.position.set(et[0],M,et[1]),this.bA.position.set(_t(v.Y[0],v.pk[0],cs(k)),M-.06*X,_t(v.Y[1],v.pk[1],cs(k))),this.bA.scale.setScalar(1-.6*X),this.bA.visible=X<1,this.bA.rotation.x+=e*20*(k>0&&k<1?1:0)}else if(S==="volta"){let I=ne(u,.3,1.9),k=ne(I,0,.18),X=ce(ne(I,.15,1));this.bB.position.set(_t(v.fimB[0],v.R[0],ce(ne(u,.2,1.5))),M,_t(v.fimB[1],v.R[1],ce(ne(u,.2,1.5)))),this.bA.visible=I>0,this.bA.scale.setScalar(_t(.4,1,k)),this.bA.position.set(_t(v.pk[0],v.Y[0],X),M-.06*(1-k),_t(v.pk[1],v.Y[1],X)),this.bA.rotation.x-=e*12*(X>0&&X<1?1:0)}else this.bB.position.set(v.fimB[0],M,v.fimB[1]),this.bA.visible=!1;if(this.cao.g.visible){let I,k,X=[Math.sin(h.y),Math.cos(h.y)];if(l==="caoVem"||l==="caoCarinho"){let tt=[h.x+X[0]*.55,h.z+X[1]*.55];I=[tt[0],tt[1],po(tt,[h.x,h.z])],k=l==="caoCarinho"?"carinho":"senta"}else{let tt={triste:"dorme",preocupado:"senta",tranquilo:"dorme",feliz:"senta",euforico:"pula"}[this.h];if(tt==="dorme")I=this.lugar("cachorro",[1.35,6.2,.8]),k="dorme";else{let yt=this.caoPerto||[h.x,h.z];I=[yt[0],yt[1],po(yt,[h.x,h.z])],k=tt}}let et=this.cao.mover(I,e,this.nav);if(this.cao.g.position.set(this.cao.pos[0],0,this.cao.pos[1]),this.cao.g.rotation.y=this.cao.yaw,this.cao.quadro(et?k:"anda",t),!this.caoT||t-this.caoT>4){this.caoT=t;let tt=[Math.cos(h.y),-Math.sin(h.y)],yt=[[.75,.35],[-.75,.35],[.8,-.3],[-.8,-.3]];for(let[E,P]of yt){let G=h.x+tt[0]*E+X[0]*P,Q=h.z+tt[1]*E+X[1]*P;if(this.nav.livre(G,Q)){this.caoPerto=[G,Q];break}}}}let C=l==="racao"&&u>1&&u<4.2;if(this.dec.aquario.outer.visible){this.racao.forEach((k,X)=>{let et=C?((u-1)*.55+X/14)%1:0;k.visible=C,k.position.set(.25+En(X)*.2,1.24-et*.42,6.65+En(X+5)*.35)});let I=this.peixeSobe=_t(this.peixeSobe||0,C?1:0,Math.min(1,e*1.5));this.peixes.forEach((k,X)=>{let et=t*(.5+X*.12)+X*1.7;k.position.set(.35+Math.sin(et*1.3)*.15*(1-I*.6),_t(.95+X*.06+Math.sin(et*2)*.03,1.15+Math.sin(et*4)*.02,I),6.83+Math.cos(et)*.32*(1-I*.5)),k.rotation.y=Math.atan2(-Math.sin(et)*.32,Math.cos(et*1.3)*.2)+lt}),this.bolhas.forEach((k,X)=>{let et=(t*.4+X/6)%1;k.position.set(.45+Math.sin(t*3+X)*.02,.8+et*.42,7.1-X*.02)})}let x=l==="arcade";if(this.dec.fliperama.outer.visible&&(this.joy.rotation.set(x?Math.sin(t*9)*.35:0,0,x?Math.sin(t*7.3)*.35:0),this.botoesArc.forEach((I,k)=>{I.position.y=1.07-(x&&Math.sin(t*13+k*2)>.6?.008:0)})),this.dec.cofre.outer.visible){let I=l==="cofre"||l==="moedaJoga"?a.porta:0;this.cofrePorta.rotation.y=-I,this.cofreBrilho.material.opacity=pe(I/1.9)*.85}if(l==="porco"){let I=this.alvoPorco();u>1.15&&this.fxId!==c.t0&&(this.fxId=c.t0,this.emitir(I,8,"#FDE68A"));let k=u>1.15?Math.sin((u-1.15)*30)*Math.exp(-(u-1.15)*4):0;this.porco.scale.set(1+k*.12,1-k*.12,1+k*.12)}else this.porco.scale.setScalar(1);let T=l==="trofeu"||l==="trofeuPega"&&d>.92||l==="trofeuSolta"&&d<.85;if(this.dec.trofeu.outer.visible){let I=this.trofeuObj;if(T){let k=r.mL.clone().add(r.mR).multiplyScalar(.5).add(Ut(0,-.15,0));I.position.copy(this.trofeuPai.worldToLocal(k)),I.rotation.y=r.root.rotation.y-this.dec.trofeu.outer.rotation.y}else I.position.copy(this.trofeuBase),I.rotation.y=0}if(this.dec.dardos.visible){if(l==="dardo"&&d<.01&&u<.15&&(this.dardos.forEach(I=>{I.visible=!1}),this.voos=[]),l==="dardo"&&d%1>.4){let I=Math.floor(d),k=c.t0+":"+I;this.dardoKey!==k&&I<3&&(this.dardoKey=k,(this.voos||(this.voos=[])).push({i:I,de:r.mR.clone(),t:0}))}for(let I of this.voos||[]){I.t+=e;let k=pe(I.t/.32),X=Ut(...this.dardosAlvo[I.i]),et=I.de.clone().lerp(X,k);et.y+=Math.sin(lt*k)*.18;let tt=this.dardos[I.i];tt.visible=!0,tt.position.copy(et),tt.rotation.set(0,0,-lt/2+(1-k)*.4)}}else this.dardos.forEach(I=>{I.visible=!1});let R=this.dec.globo.visible&&(this.h==="euforico"||l==="globo");for(let I of this.spots)I.intensity=R?9:0;this.dec.globo.visible&&(this.globo.rotation.y=t*.8,this.spots.forEach((I,k)=>{let X=t*.9+k*ee/4;I.target.position.set(3.4+Math.cos(X)*2.2,0,5+Math.sin(X)*1.8)}));let L=performance.now();for(let I in this.pops){let k=(L-this.pops[I])/900,X=this.dec[I],et=X.outer||X;if(k>=1||!et.visible){et.scale.setScalar(1),delete this.pops[I];continue}let tt=1+Math.sin(k*lt*2.5)*Math.exp(-k*4)*.35;et.scale.setScalar(Math.max(.01,k<.25?cs(k/.25)*tt:tt)),(!this.popFx||this.popFx!==I+this.pops[I])&&(this.popFx=I+this.pops[I],this.emitir(this.mundo(et).add(Ut(0,.6,0)),14))}if(l==="novidade"&&this.fxId!=="n"+c.t0&&u>.2){this.fxId="n"+c.t0;let I=this.mundo(r.head);this.emitir(I.add(Ut(0,.35,0)),12,"#FACC15")}for(let I of this.faiscas){if(I.vida>=1.1)continue;I.vida+=e,I.v.y-=2.4*e,I.s.position.addScaledVector(I.v,e);let k=I.vida/1.1;I.s.material.opacity=1-k,I.s.scale.setScalar(.09*(1-k*.5)),I.s.material.rotation+=e*3,I.vida>=1.1&&(I.s.visible=!1)}let N=this.mundo(r.head);if(this.nuvem.visible=a.nuvem>.5,this.nuvem.visible&&(this.nuvem.position.set(N.x,N.y+.75+Math.sin(t*1.6)*.03,N.z),this.gotas.forEach((I,k)=>{let X=(t*1.8+k*.37)%1;I.position.y=-.12-X*.4,I.material.opacity=.9*(1-X)})),this.balaoS.visible=a.balao>.05,this.balaoS.visible){if(a.balaoT!==this.balaoT){this.balaoT=a.balaoT;let{g:I,t:k}=this.balao;I.clearRect(0,0,128,128),I.fillStyle="#FFF",I.strokeStyle="#CBD5E1",I.lineWidth=3,ki(I,8,8,112,86,22),I.fill(),I.stroke(),I.beginPath(),I.moveTo(40,92),I.lineTo(34,120),I.lineTo(62,93),I.fill(),window.RI&&window.RI.desenhar(I,a.balaoT,64,51,60,a.balaoT==="chart-line-down"?"#DC2626":a.balaoT==="smiley-nervous"?"#F59E0B":"#7C3AED"),k.needsUpdate=!0}this.balaoS.position.set(N.x+.25,N.y+.6,N.z),this.balaoS.scale.setScalar(.42*a.balao),this.balaoS.material.opacity=a.balao}if(a.solta&&a.solta!==this.ultSolta){this.ultSolta=a.solta;for(let I=0;I<4;I++){let k=new Me(this.notaGeo,this.notaMat);k.castShadow=!0,k.position.copy(r.mR),this.scene.add(k);let X=Ut(Math.sin(h.y),0,Math.cos(h.y));this.notas.push({m:k,v:Ut(X.x*.6+(Math.random()-.5)*1.2,2.2+Math.random()*1.2,X.z*.6+(Math.random()-.5)*1.2),rv:Ut(Math.random()*6,Math.random()*6,Math.random()*6),vida:0})}}a.solta||(this.ultSolta=0);for(let I=this.notas.length-1;I>=0;I--){let k=this.notas[I];k.vida+=e,k.m.position.y>.01?(k.v.y-=4.5*e,k.v.multiplyScalar(.985),k.m.position.addScaledVector(k.v,e),k.m.rotation.x+=k.rv.x*e,k.m.rotation.y+=k.rv.y*e,k.m.rotation.z+=k.rv.z*e,k.v.y<-.6&&(k.v.y=-.6+Math.sin(k.vida*9)*.25)):(k.m.position.y=.006,k.m.rotation.set(0,k.m.rotation.y,0)),k.vida>6&&(this.scene.remove(k.m),this.notas.splice(I,1))}let O=new Date,D=O.getSeconds()+O.getMilliseconds()/1e3,B=O.getMinutes()+D/60,Y=O.getHours()%12+B/60;this.pS.rotation.z=-D/60*ee,this.pM.rotation.z=-B/60*ee,this.pH.rotation.z=-Y/12*ee,(this.plantas||[]).forEach((I,k)=>{I.rotation.z=Math.sin(t*.8+k)*.03,I.rotation.x=Math.sin(t*.6+k*2)*.02}),this.vapor.forEach((I,k)=>{let X=(t*.35+k/4)%1;I.position.set(.38+Math.sin(t*2+k)*.02,1+X*.4,4.9),I.material.opacity=.35*Math.sin(lt*X),I.scale.setScalar(.06+X*.12)});let W=a.item==="tecla";if(this.teclas.material.emissiveIntensity=W?.4+.3*Math.abs(Math.sin(t*14)):.25,this.monLuz.intensity=1+.25*Math.sin(t*2.2)+(performance.now()-(this.ultimaAcao||0)<900?.8:0),this.dec.neon.visible){let I=Math.sin(t*7)>.97||Math.sin(t*23)>.995;this.neonM.opacity=I?.35:1,this.neonHalo.material.opacity=I?.1:.35}if(this.dec.arcoiris.visible&&(this.arcoHalo.material.opacity=.25+(this.dir.itemAtual==="arcoiris"?.25*Math.abs(Math.sin(t*4)):0)),this.decPorquinho.visible&&l!=="porco"&&(this.porco.position.y=.775+Math.abs(Math.sin(t*1.6))*.012),this.confete.visible){let I=this.dummy||(this.dummy=new Ce);this.confData.forEach((k,X)=>{let et=Ze-(t*k.v+k.y0)%(Ze+.3);I.position.set(k.x+Math.sin(t*1.5+k.sw)*.2,et,k.z+Math.cos(t*1.2+k.sw)*.15),I.rotation.set(t*k.rv+k.r,t*k.rv*.7,k.r),I.updateMatrix(),this.confete.setMatrixAt(X,I.matrix)}),this.confete.instanceMatrix.needsUpdate=!0}let ut=this.camModo==="tela";if((this.reduz||t-(this.tMon||-9)>(ut?1/30:1/8)||this.sujo)&&(this.tMon=t,this.desenharMonitor(t)),(this.reduz||t-(this.tTv||-9)>1/15)&&(this.tTv=t,this.desenharTV(t,this.h==="tranquilo"?"jogo":"news")),(this.reduz||t-(this.tCeu||-9)>1/8)&&(this.tCeu=t,this.desenharCeu(t)),this.dec.fliperama.outer.visible&&(this.reduz||t-(this.tArc||-9)>(x?1/20:1/6))&&(this.tArc=t,this.desenharArcade(t*(x?2:1))),this.edit)for(let I in this.moveis){let k=this.moveis[I],X=k.marca;if(X.visible=this.ativo(k),!X.visible)continue;let et=this.caixasDe(k)[0];X.position.set(et.c[0],.02+(k.piso?0:.005),et.c[1]),X.rotation.set(-lt/2,0,et.r),X.scale.set(et.h[0]*2+.08,et.h[1]*2+.08,1);let tt=this.arrasto&&this.arrasto.m===k;X.material.color.set(tt&&!this.arrasto.ok?"#EF4444":tt||this.sel===k?"#22C55E":"#60A5FA"),X.material.opacity=tt||this.sel===k?1:.55}let $=this.alvoCamera(t);(!this.camAtual||this.reduz)&&(this.camAtual={pos:$.pos.clone(),alvo:$.alvo.clone(),fov:$.fov});let st=window.__ofT!=null?1:1-Math.exp(-e*4);this.camAtual.pos.lerp($.pos,st),this.camAtual.alvo.lerp($.alvo,st),this.camAtual.fov=_t(this.camAtual.fov,$.fov,st),this.cam.position.copy(this.camAtual.pos),this.cam.lookAt(this.camAtual.alvo),Math.abs(this.cam.fov-this.camAtual.fov)>.01&&(this.cam.fov=this.camAtual.fov,this.cam.updateProjectionMatrix()),this.renderer.render(this.scene,this.cam)}get prop(){if(!this._prop){this._prop={};for(let t of["controle","xicara","celular","moeda","nota","maco","dardo","aljava"])this._prop[t]={h:"casa",t0:-1,dur:0,de:null}}return this._prop}casaDe(t){let e=n=>new Ve().setFromAxisAngle(Ut(0,1,0),n);return t==="controle"?{pos:this.pto("sofa",2.72,.555,2.92),quat:e(this.giro(this.moveis.sofa)+.5)}:t==="xicara"?{pos:this.pto("cafe",.43,.92,5.06),quat:e(this.giro(this.moveis.cafe)-lt/2)}:null}bico(){return this.pto("cafe",.4,.99,4.9)}botaoCafe(){return this.pto("cafe",.36,1.3,4.97)}bolso(t="R"){return this.boneco.root.localToWorld(Ut(t==="R"?.17:-.17,.84,.05))}decidirProps(t,e,n){let i=t&&t.props;if(i)for(let r in i){let o=this.prop[r];if(!o)continue;let a=typeof i[r]=="function"?i[r](e,n):i[r];a&&a!==o.h&&(o.h=a,o.troca=!0)}}guardarProps(){for(let t in this.prop)this.prop[t].h!=="casa"&&(this.prop[t].h="casa",this.prop[t].troca=!0)}alvoProp(t,e,n,i,r){let o=this.boneco,a=o.root.rotation.y,c=new Ve().setFromAxisAngle(Ut(0,1,0),a),l=m=>{let _=m==="L"?o.L.hand:o.R.hand,g=new U,p=new Ve,y=new U;return _.matrixWorld.decompose(g,p,y),{pos:(m==="L"?o.mL:o.mR).clone(),quat:p}},u=(m,_,g)=>{let p=l(m),y=p.pos.add(Ut(..._).applyQuaternion(p.quat)),w=g?c.clone().multiply(g):p.quat;return{pos:y,quat:w,vis:!0}},d=m=>new Ve().setFromAxisAngle(Ut(1,0,0),m),h=m=>new Ve().setFromAxisAngle(Ut(0,1,0),m);if(e==="casa"){let m=this.casaDe(t);return m?{...m,vis:!0}:{pos:this.bolso(t==="maco"||t==="aljava"?"L":"R"),quat:c,vis:!1}}if(t==="controle"){let m=o.mL.clone().add(o.mR).multiplyScalar(.5).add(Ut(0,.01,0)),_=o.mL.distanceTo(o.mR),g=u("R",[0,0,.03],d(-.5)),p=e==="LR"?ce((_-.2)/.16):1;return{pos:m.lerp(g.pos,p),quat:c.clone().multiply(d(-.5)),vis:!0}}if(e==="joga"){let m=l("R"),_=pe(r);return m.pos.y+=.02+4*_*(1-_)*.55,{pos:m.pos,quat:c.clone().multiply(d(_*6*lt)),vis:!0}}if(e==="cofrinho"){let m=l("R"),_=this.alvoPorco(),g=ne(i,.9,1.15);return{pos:m.pos.lerp(_,g),quat:c,vis:g<1}}let f=e==="L"?"L":"R";return t==="xicara"?u(f,[0,-.045,.06],d(-(n.gole||0)*1.25)):t==="celular"?u(f,[0,.035,.03],h(lt).multiply(d(-.45))):t==="dardo"?u(f,[0,-.01,.03],d(-lt/2+.25)):t==="aljava"?u(f,[0,-.01,.035],d(-lt/2+.3)):t==="nota"||t==="maco"?u(f,[0,-.02,.035],d(1.2)):u(f,[0,-.01,.025],null)}moverProps(t,e,n,i){let r=performance.now()/1e3;for(let a in this.prop){let c=this.prop[a],l=this.itens[a];if(!l)continue;let u=this.alvoProp(a,c.h,t,e,n);if(c.troca){c.troca=!1;let h={pos:l.position.clone(),quat:l.quaternion.clone(),vis:l.visible};l.visible||(h.pos=u.pos.clone(),h.quat=u.quat.clone()),c.de=h,c.t0=r,c.dur=pe(.12+h.pos.distanceTo(u.pos)*.3,.12,.6)}u.vis||(c.de=null);let d=c.de&&c.dur?pe((r-c.t0)/c.dur):1;if((i===0||!this.propsProntos)&&(d=1),d<1){let h=ce(d),f=c.de.pos.distanceTo(u.pos);l.position.copy(c.de.pos).lerp(u.pos,h),l.position.y+=Math.sin(lt*h)*Math.min(.15,f*.25),l.quaternion.copy(c.de.quat).slerp(u.quat,h),l.visible=c.de.vis||u.vis}else l.position.copy(u.pos),l.quaternion.copy(u.quat),l.visible=u.vis,c.de=null}this.propsProntos=!0;let o=(this.voos||[]).length+(this.prop.dardo.h==="R"?1:0);this.aljavaD.forEach((a,c)=>{a.visible=c<3-o})}desenharCel(t){if(t-(this.tCel||-9)<.2)return;this.tCel=t;let{g:e,t:n}=this.celTela;e.fillStyle="#0B1220",e.fillRect(0,0,64,128),e.fillStyle="#FB923C",e.font="bold 16px system-ui",e.fillText("\u20BF",6,20),e.strokeStyle="#4ADE80",e.lineWidth=3,e.beginPath();for(let i=0;i<10;i++){let r=4+i*6,o=100-i*6-Math.sin(i+t*3)*6;i?e.lineTo(r,o):e.moveTo(r,o)}e.stroke(),n.needsUpdate=!0}destruir(){cancelAnimationFrame(this.raf),this.ro&&this.ro.disconnect(),this.renderer.dispose()}desenharPiso({g:t}){t.fillStyle="#C8915B",t.fillRect(0,0,1024,1024);let e=["#C8915B","#BF8752","#D29C66","#C38C56","#B88050","#CD9760"],n=7,i=()=>(n=n*16807%2147483647,n/2147483647),r=1024/8;for(let o=0;o<8;o++){let a=-i()*400;for(;a<1024;){let c=260+i()*300;t.fillStyle=e[Math.floor(i()*e.length)],t.fillRect(a,o*r,c,r),t.strokeStyle="rgba(90,50,20,.10)",t.lineWidth=1.2;for(let l=0;l<7;l++){let u=o*r+8+i()*(r-16);t.beginPath(),t.moveTo(a,u),t.bezierCurveTo(a+c*.3,u+(i()-.5)*8,a+c*.6,u+(i()-.5)*8,a+c,u+(i()-.5)*4),t.stroke()}t.fillStyle="rgba(70,35,10,.45)",t.fillRect(a,o*r,2,r),a+=c}t.fillStyle="rgba(70,35,10,.5)",t.fillRect(0,o*r,1024,2.5)}}desenharTapete({g:t}){t.fillStyle="#C7D2FE",t.fillRect(0,0,512,512),t.strokeStyle="#A5B4FC",t.lineWidth=10,ki(t,22,22,468,468,24),t.stroke(),t.setLineDash([16,12]),t.lineWidth=4,t.strokeStyle="#818CF8",ki(t,44,44,424,424,18),t.stroke(),t.setLineDash([]);for(let e=0;e<2600;e++)t.fillStyle=`rgba(99,102,241,${Math.random()*.06})`,t.fillRect(Math.random()*512,Math.random()*512,2,2)}desenharQuadro({g:t}){let e=t.createLinearGradient(0,0,0,192);e.addColorStop(0,"#1E3A8A"),e.addColorStop(1,"#0F172A"),t.fillStyle=e,t.fillRect(0,0,256,192),t.strokeStyle="#22C55E",t.lineWidth=6,t.lineJoin="round",t.beginPath(),[[20,150],[60,130],[95,140],[130,95],[165,105],[200,60],[236,40]].forEach(([n,i],r)=>r?t.lineTo(n,i):t.moveTo(n,i)),t.stroke(),t.fillStyle="#FACC15",t.beginPath(),t.arc(236,40,8,0,ee),t.fill(),t.fillStyle="rgba(255,255,255,.85)",t.font="bold 20px system-ui",t.fillText("LONGO PRAZO",20,34)}desenharCeu(t){let{g:e,t:n}=this.ceu,i=this.h,r=this.noite,o=i==="triste"||i==="preocupado",a=r?o?"#1E293B":"#0B1026":i==="triste"?"#64748B":i==="preocupado"?"#7C93B5":"#4FA3FF",c=r?o?"#334155":"#312E81":i==="triste"?"#94A3B8":i==="preocupado"?"#B6C4D8":"#BFE3FF",l=e.createLinearGradient(0,0,0,256);if(l.addColorStop(0,a),l.addColorStop(1,c),e.fillStyle=l,e.fillRect(0,0,256,256),r&&!o){for(let f=0;f<40;f++){let m=.5+.5*Math.sin(t*2+f*7);e.fillStyle=`rgba(255,255,255,${.3+.6*m})`,e.fillRect(f*97%256,f*53%150,2,2)}e.fillStyle="#FEF3C7",e.beginPath(),e.arc(190,52,20,0,ee),e.fill(),e.fillStyle=a,e.beginPath(),e.arc(200,46,18,0,ee),e.fill()}else if(!o){e.save(),e.translate(195,60),e.rotate(t*.2),e.fillStyle="#FDE047";for(let f=0;f<10;f++)e.rotate(ee/10),e.fillRect(-2,26,4,12);e.restore(),e.fillStyle="#FDE047",e.beginPath(),e.arc(195,60,22,0,ee),e.fill()}let u=(f,m,_,g)=>{e.fillStyle=g,e.beginPath(),e.ellipse(f,m,34*_,14*_,0,0,ee),e.ellipse(f+18*_,m-10*_,22*_,16*_,0,0,ee),e.ellipse(f-16*_,m-6*_,18*_,13*_,0,0,ee),e.fill()},d=o?r?"#475569":"#CBD5E1":r?"rgba(148,163,184,.35)":"#FFFFFF";if(u(t*8%360-50,70,1,d),u((t*5+180)%360-50,110,.75,d),o&&u((t*6+90)%360-50,40,1.2,d),[[0,150,40],[36,120,30],[62,165,44],[100,105,34],[130,140,40],[166,90,30],[192,150,36],[224,125,40]].forEach(([f,m,_],g)=>{e.fillStyle=r?"#111827":o?"#475569":"#64748B",e.fillRect(f,m,_,256-m);for(let p=m+8;p<240;p+=14)for(let y=f+5;y<f+_-6;y+=10){let w=r?(y*7+p*13+g)%5<2:!1;e.fillStyle=w?"#FDE68A":r?"#1F2937":"rgba(255,255,255,.28)",e.fillRect(y,p,5,7)}}),e.fillStyle=r?"#0F172A":o?"#3F5F4F":"#4ADE80",e.fillRect(0,238,256,18),o){e.strokeStyle="rgba(224,242,254,.75)",e.lineWidth=2;for(let f=0;f<36;f++){let m=(f*37+t*40)%280-12,_=(f*71+t*420)%280-20;e.beginPath(),e.moveTo(m,_),e.lineTo(m-6,_+16),e.stroke()}}n.needsUpdate=!0}desenharTV(t,e){let{g:n,t:i}=this.tv,r=512,o=288;if(e==="jogo"){let a=n.createLinearGradient(0,0,0,o);a.addColorStop(0,"#1E1B4B"),a.addColorStop(1,"#4338CA"),n.fillStyle=a,n.fillRect(0,0,r,o);for(let f=0;f<30;f++)n.fillStyle="rgba(255,255,255,.7)",n.fillRect((f*83-t*10)%r+(f*83-t*10<0?r:0),f*37%160,2,2);let c=t*120%64;n.fillStyle="#16A34A",n.fillRect(0,232,r,56),n.fillStyle="#22C55E";for(let f=-c;f<r;f+=64)n.fillRect(f,232,32,8);let l=[[200,170],[380,140],[560,180]];n.fillStyle="#A16207",l.forEach(([f,m])=>{let _=((f-t*120)%600+600)%600-80;n.fillRect(_,m,80,14),n.fillStyle="#FACC15",n.beginPath(),n.arc(_+40,m-20+Math.sin(t*6)*3,8,0,ee),n.fill(),n.fillStyle="#A16207"});let d=196-Math.abs(Math.sin(t*3.2))*70;n.fillStyle="#EF4444",n.fillRect(110,d,26,36),n.fillStyle="#1D4ED8",n.fillRect(110,d+22,26,14),n.fillStyle="#F1C19A",n.fillRect(114,d-14,18,16);let h=((420-t*160)%560+560)%560-40;n.fillStyle="#7C2D12",n.beginPath(),n.ellipse(h,220,18,12,0,lt,0),n.fill(),n.fillRect(h-18,220,36,12),n.fillStyle="#FFF",n.font="bold 20px monospace",n.fillText("MOEDAS \xD7 "+String(Math.floor(t*2)%1e3).padStart(3,"0"),16,30),n.fillText("1-1",450,30)}else{let a=this.h==="feliz"||this.h==="euforico",c=a?"#22C55E":"#EF4444";n.fillStyle="#0B1220",n.fillRect(0,0,r,o),n.strokeStyle="rgba(148,163,184,.15)",n.lineWidth=1;for(let m=60;m<230;m+=34)n.beginPath(),n.moveTo(0,m),n.lineTo(r,m),n.stroke();let l=t*.25%1.4,u=46;n.strokeStyle=c,n.lineWidth=4,n.lineJoin="round",n.beginPath();for(let m=0;m<=Math.min(u,Math.floor(u*l));m++){let _=20+m*(r-40)/u,p=(a?200-m*2.6:90+m*2.6)+Math.sin(m*1.7)*10+Math.sin(m*.6)*12;m?n.lineTo(_,p):n.moveTo(_,p)}n.stroke(),n.fillStyle="#DC2626",n.fillRect(0,0,150,40),n.fillStyle="#FFF",n.font="bold 22px system-ui",n.fillText("RADAR NEWS",12,28),Math.floor(t*1.5)%2&&(n.fillStyle="#FFF",n.beginPath(),n.arc(170,20,6,0,ee),n.fill()),n.font="bold 14px system-ui",n.fillText("AO VIVO",182,25);let d={feliz:"CARTEIRA NO VERDE",euforico:"DIA HIST\xD3RICO NA CARTEIRA!",preocupado:"MERCADO NO VERMELHO",triste:"QUEDA FORTE HOJE"}[this.h]||"MERCADO HOJE";n.fillStyle="rgba(15,23,42,.92)",n.fillRect(0,224,r,30),n.fillStyle=c,n.fillRect(0,224,8,30),n.fillStyle="#FFF",n.font="bold 18px system-ui",n.fillText(d+(this.pctTxt?"  "+this.pctTxt:""),18,245),n.fillStyle="#1E293B",n.fillRect(0,254,r,34),n.font="bold 16px monospace";let h=this.fita(),f=-(t*60%Math.max(1,h.w));for(n.save(),n.beginPath(),n.rect(0,254,r,34),n.clip();f<r;){for(let m of h.itens)n.fillStyle="#CBD5E1",n.fillText(m.t,f,277),f+=n.measureText(m.t).width+8,n.fillStyle=m.v>=0?"#4ADE80":"#F87171",n.fillText(m.s,f,277),f+=n.measureText(m.s).width+26;if(!h.itens.length)break}n.restore()}i.needsUpdate=!0}fita(){let t=(this.d.ativos||[]).filter(n=>n.vd!=null),e=t.length?t.map(n=>({t:n.t,v:n.vd,s:(n.vd>=0?"\u25B2":"\u25BC")+Math.abs(n.vd).toFixed(2).replace(".",",")+"%"})):[{t:"IBOV",v:0,s:"\u2014"}];return{itens:e,w:e.length*160}}desenharArcade(t){let{g:e,t:n}=this.arcade;e.fillStyle="#0B0B1A",e.fillRect(0,0,128,128);for(let i=0;i<5;i++){let r=(i*30+t*40)%140-10;e.fillStyle=["#F43F5E","#22C55E","#FACC15","#38BDF8","#A855F7"][i],e.fillRect(r,20+i*14,10,8)}e.fillStyle="#22C55E",e.fillRect(56+Math.sin(t*3)*30,108,16,8),Math.floor(t*4)%2&&(e.fillStyle="#FFF",e.fillRect(64+Math.sin(t*3)*30,90-t*120%80,2,8)),e.fillStyle="#FDE047",e.font="bold 12px monospace",e.fillText("HI "+String(Math.floor(t*37)%99999).padStart(5,"0"),8,12),n.needsUpdate=!0}desenharMonitor(t){let{g:e,t:n}=this.mon,i=1024,r=448,o=this.d,a=this.h,c={triste:"#EF4444",preocupado:"#F97316",tranquilo:"#60A5FA",feliz:"#22C55E",euforico:"#FACC15"}[a],l=e.createLinearGradient(0,0,0,r);l.addColorStop(0,"#0B1220"),l.addColorStop(1,"#111A2E"),e.fillStyle=l,e.fillRect(0,0,i,r),e.fillStyle="#0F172A",e.fillRect(0,0,i,40),e.fillStyle=c,e.beginPath(),e.arc(22,20,7,0,ee),e.fill(),e.fillStyle="#E2E8F0",e.font="bold 18px system-ui",e.fillText("RADAR DA CARTEIRA",38,27);let d=new Date().toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit",second:"2-digit"});e.font="bold 18px monospace",e.textAlign="right",e.fillText(d,i-16,27),o.fechado?(e.fillStyle="#64748B",e.font="bold 13px system-ui",e.fillText("BOLSA FECHADA",i-120,26)):o.sim&&(e.fillStyle="#F59E0B",e.font="bold 13px system-ui",e.fillText("SIMULA\xC7\xC3O",i-120,26)),e.textAlign="left",this.secao&&(e.fillStyle="#94A3B8",e.font="15px system-ui",window.RI&&window.RI.desenhar(e,"map-pin",268,21,15,"#94A3B8"),e.fillText(this.secao,278,26));let h=16,f=54;e.fillStyle="rgba(30,41,59,.65)",ki(e,h,f,330,340,14),e.fill(),e.fillStyle="#94A3B8",e.font="bold 14px system-ui",e.fillText("SEU DIA",h+16,f+28);let m=o.pct,_=m==null||!isFinite(m)?"\u2014":(m>0?"+":"")+m.toFixed(2).replace(".",",")+"%";e.fillStyle=m>0?"#4ADE80":m<0?"#F87171":"#E2E8F0",e.font="bold 64px system-ui",e.fillText(_,h+14,f+98),e.fillStyle="#CBD5E1",e.font="16px system-ui",e.fillText(this.titulo||"",h+16,f+126);let g=h+16,p=f+150,y=298,w=160;e.strokeStyle="rgba(148,163,184,.15)",e.lineWidth=1;for(let E=0;E<=4;E++)e.beginPath(),e.moveTo(g,p+E*w/4),e.lineTo(g+y,p+E*w/4),e.stroke();let v=this.hist.length?this.hist:[{v:m||0}],M=v.map(E=>E.v).concat([0]),S=Math.min(...M),C=Math.max(...M);if(C-S<.4){let E=(C+S)/2;S=E-.2,C=E+.2}let x=E=>p+w-(E-S)/(C-S)*w;e.setLineDash([4,4]),e.strokeStyle="rgba(148,163,184,.4)",e.beginPath(),e.moveTo(g,x(0)),e.lineTo(g+y,x(0)),e.stroke(),e.setLineDash([]);let T=v.length,R=v.map((E,P)=>[g+(T===1?y:P/(T-1)*y),x(E.v)]);T===1&&R.unshift([g,R[0][1]]);let L=(m||0)>=0?"#22C55E":"#EF4444",N=e.createLinearGradient(0,p,0,p+w);N.addColorStop(0,L+"55"),N.addColorStop(1,L+"00"),e.beginPath(),R.forEach(([E,P],G)=>G?e.lineTo(E,P):e.moveTo(E,P)),e.lineTo(R[R.length-1][0],p+w),e.lineTo(R[0][0],p+w),e.closePath(),e.fillStyle=N,e.fill(),e.strokeStyle=L,e.lineWidth=3,e.lineJoin="round",e.beginPath(),R.forEach(([E,P],G)=>G?e.lineTo(E,P):e.moveTo(E,P)),e.stroke();let O=R[R.length-1],D=t*1.5%1;e.fillStyle=L,e.beginPath(),e.arc(O[0],O[1],5,0,ee),e.fill(),e.strokeStyle=L,e.globalAlpha=1-D,e.lineWidth=2,e.beginPath(),e.arc(O[0],O[1],5+D*14,0,ee),e.stroke(),e.globalAlpha=1;let B=362,Y=54,W=330;e.fillStyle="rgba(30,41,59,.65)",ki(e,B,Y,W,340,14),e.fill(),e.fillStyle="#94A3B8",e.font="bold 14px system-ui",e.fillText("SEUS ATIVOS \xB7 AO VIVO",B+16,Y+28);let ut=(o.ativos||[]).slice(0,8);ut.length||(e.fillStyle="#64748B",e.font="16px system-ui",e.fillText("Adicione ativos para",B+16,Y+80),e.fillText("acompanhar aqui.",B+16,Y+102));let $=performance.now();ut.forEach((E,P)=>{let G=Y+48+P*36,Q=this.flash[E.t];if(Q&&$-Q.t<2500){let Mt=1-($-Q.t)/2500;e.fillStyle=(Q.up?"rgba(34,197,94,":"rgba(239,68,68,")+(.35*Mt).toFixed(3)+")",ki(e,B+8,G,W-16,32,8),e.fill()}e.fillStyle="#E2E8F0",e.font="bold 17px monospace",e.fillText(E.t,B+16,G+22),e.fillStyle="#94A3B8",e.font="15px monospace",e.textAlign="right",E.preco!=null&&e.fillText((E.moeda==="USD"?"US$ ":"R$ ")+E.preco.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),B+214,G+22);let rt=E.vd;e.fillStyle=rt==null?"#64748B":rt>=0?"#4ADE80":"#F87171",e.font="bold 16px monospace",e.fillText(rt==null?"\u2014":(rt>=0?"\u25B2 ":"\u25BC ")+Math.abs(rt).toFixed(2).replace(".",",")+"%",B+W-16,G+22),e.textAlign="left"});let st=708,I=54,k=300;e.fillStyle="rgba(30,41,59,.65)",ki(e,st,I,k,340,14),e.fill(),e.fillStyle="#94A3B8",e.font="bold 14px system-ui",e.fillText("O QUE VOC\xCA EST\xC1 FAZENDO",st+16,I+28);let X=this.feed.slice(-8);X.forEach((E,P)=>{let G=I+58+P*34,Q=P===X.length-1,rt=$-E.ms,Mt=E.txt;Q&&rt<700&&(Mt=Mt.slice(0,Math.max(1,Math.floor(Mt.length*rt/700)))),e.fillStyle="#64748B",e.font="13px monospace",e.fillText(E.hora,st+16,G),e.fillStyle=Q?c:"#CBD5E1",e.font=(Q?"bold ":"")+"15px system-ui",e.fillText("\u203A "+Mt+(Q&&Math.floor(t*2.5)%2?" \u258D":""),st+66,G)}),X.length||(e.fillStyle="#64748B",e.font="15px system-ui",e.fillText("\u203A aguardando voc\xEA\u2026"+(Math.floor(t*2)%2?" \u258D":""),st+16,I+60)),e.fillStyle="#020617",e.fillRect(0,408,i,40),e.font="bold 17px monospace";let et=this.fita(),tt=-(t*70%4e3);e.save(),e.beginPath(),e.rect(0,408,i,40),e.clip();let yt=0;for(;tt<i&&yt++<60;)for(let E of et.itens)e.fillStyle="#CBD5E1",e.fillText(E.t,tt,434),tt+=e.measureText(E.t).width+8,e.fillStyle=E.v>=0?"#4ADE80":"#F87171",e.fillText(E.s,tt,434),tt+=e.measureText(E.s).width+30;e.restore(),n.needsUpdate=!0}log(t){let e=new Date().toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}),n=this.feed[this.feed.length-1];n&&n.txt===t&&performance.now()-n.ms<1500||(this.feed.push({txt:t.length>26?t.slice(0,25)+"\u2026":t,hora:e,ms:performance.now()}),this.feed.length>30&&this.feed.shift(),this.ultimaAcao=performance.now(),this.sujo=!0)}redimensionar(){let t=this.el.clientWidth||600,e=Math.round(pe(t<640?t*.82:t*.6,300,660));this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height=e+"px",this.cam.aspect=t/e,this.cam.updateProjectionMatrix(),this.sujo=!0}enquadrar(t,e,n,i){let r=new He(n,i,.1,100),o=Math.cos(e),a=Ut(Math.sin(t)*o,Math.sin(e),Math.cos(t)*o),c=[];for(let f of[-.25,je+.1])for(let m of[-.3,Ze+.05])for(let _ of[-.25,Qe+.1])c.push(Ut(f,m,_));let l=Ut(je/2,.9,Qe/2),u=18,d=i<1?.98:.95,h=i<1?.92:.93;for(let f=0;f<4;f++){let m=4,_=60;for(let T=0;T<22;T++){let R=(m+_)/2;r.position.copy(l).addScaledVector(a,R),r.lookAt(l),r.updateMatrixWorld(),r.updateProjectionMatrix();let L=!0;for(let N of c){let O=N.clone().project(r);if(Math.abs(O.x)>d||Math.abs(O.y)>h){L=!1;break}}L?_=R:m=R}u=_,r.position.copy(l).addScaledVector(a,u),r.lookAt(l),r.updateMatrixWorld();let g=9,p=-9,y=9,w=-9;for(let T of c){let R=T.clone().project(r);g=Math.min(g,R.x),p=Math.max(p,R.x),y=Math.min(y,R.y),w=Math.max(w,R.y)}let v=(g+p)/2,M=(y+w)/2,S=Math.tan(n*lt/360)*u,C=new U,x=new U;r.matrixWorld.extractBasis(C,x,new U),l.addScaledVector(C,v*S*i).addScaledVector(x,M*S)}return{dist:u,alvo:l}}},Sh=class{constructor(t){this.e=t,this.t=0,this.fila=[],this.ant=null,this.entrar=!0,this.ciclo=0,this.novos=[],this.rodada=0,this.itemAtual=""}humor(t){this.h=t,this.entrar=!0}replanejar(){this.entrar=!0}novidade(t){uo[t]&&!this.novos.includes(t)&&(this.novos.push(t),this.e.reduz||(this.entrar=!0))}rotina(){return(Hd[this.h]||Hd.tranquilo)(this.L,this.e,this.ciclo)}compilar(t,e,n,i={}){let r=this.e.nav,o=e.slice(),a=n,c=[];for(let l of t)if(l.tipo==="andar"){let u=[[o[0],o[1]]];for(let g of l.destinos)u.push(...r.caminho(u[u.length-1],g));let d=[],h=0;for(let g=1;g<u.length;g++){let p=Math.hypot(u[g][0]-u[g-1][0],u[g][1]-u[g-1][1]);p>.001&&(d.push({a:u[g-1],b:u[g],d0:h,L:p,yaw:po(u[g-1],u[g])}),h+=p)}if(!d.length||h<.06)continue;let f=si(o[2],d[0].yaw);if(Math.abs(f)>.7){let g=.25+Math.abs(f)/3.2,p=[o[0],o[1],o[2]+f];c.push({tipo:"acao",dur:g,pose:(y,w,v)=>Ht(v,{nod:.05}),t0:a,de:o.slice(),ate:p,item:l.item,taco:l.taco,bolas:l.bolas,...i}),a+=g,o=p}let m=h/l.vel,_=u[u.length-1];c.push({...l,...i,t0:a,dur:m,segs:d,dist:h,de:o.slice()}),o=[_[0],_[1],o[2]+si(o[2],d[d.length-1].yaw)],a+=m}else{let u=l.ate?l.ate.slice():o.slice();u.length<3&&(u[2]=o[2]),u[2]=o[2]+si(o[2],u[2]),c.push({...l,...i,t0:a,de:o.slice(),ate:u}),o=u,a+=l.dur}return{out:c,pos:o,t:a}}fimFila(){let t=this.fila[this.fila.length-1];return t?{t:t.t0+t.dur,pos:t.tipo==="andar"?(()=>{let e=t.segs[t.segs.length-1];return[e.b[0],e.b[1],t.de[2]+si(t.de[2],e.yaw)]})():t.ate}:null}disponiveis(){let t=this.e,e=[];for(let n in uo){let i=t.dec[n];i&&(i.outer?i.outer.visible:i.visible)&&uo[n].humores.includes(this.h)&&e.push(n)}return e}visita(t,e,n){let i=this.e,r=uo[t],o=r.lugar(i),a=i.nav.perto(o[0],o[1]),c=[a[0],a[1],o[2]],l=[Fn(1.15,[c]),Ft(.5,(u,d,h)=>Ht(h),{ate:c})];return e&&l.push(...u_(r.ic+":f")),l.push(...r.passos(i)),l.push(Fn(1.15,[n.aprox])),n.sentado||n.entrada.length?l.push(...n.entrada):l.push(Ft(.5,(u,d,h)=>Ht(h),{ate:n.inicio})),l}proximoNovo(){for(;this.novos.length;){let t=this.novos.shift(),e=this.e.dec[t];if(uo[t]&&e&&(e.outer?e.outer.visible:e.visible))return t}return null}encher(){let t=this.e;if(this.entrar){this.entrar=!1,this.L=t.lugares();let l=this.rotina();this.padrao=l.padrao;let u=t.posF?[t.posF.x,t.posF.z,t.posF.y]:l.inicio.slice(),d=this.ultimaPose?{...this.ultimaPose}:null,h=this.proximoNovo(),f=d||Ht(0);this.fila=[],this.ant=null;let m=d&&d.sent>.4,_=Math.hypot(u[0]-l.inicio[0],u[1]-l.inicio[1])<.08;if(!h&&(!d||m&&_&&l.sentado)){this.ciclo=0,this.aprox=l.aprox,this.anexar(this.compilar(l.passos,l.inicio,this.t));return}let g=[];if(m){let p=this.aprox||u;g.push(Ft(1.2,(y,w,v)=>{let M=hs(f,Ht(v),ce(y));return M.lean+=.4*Math.sin(lt*y),M},{ate:t.nav.perto(p[0],p[1]).concat([u[2]])}))}else g.push(Ft(.35,(p,y,w)=>hs(f,Ht(w),ce(p))));t.guardarProps(),h?(g.push(...this.visita(h,!0,l)),this.itemNovo=h):(g.push(Fn(1.15,[l.aprox])),l.entrada.length?g.push(...l.entrada):g.push(Ft(.5,(p,y,w)=>Ht(w),{ate:l.inicio}))),this.aprox=l.aprox,this.anexar(this.compilar(g,u,this.t,h?{item_:h}:{}));return}let e=this.fimFila(),n=e?e.pos:this.rotina().inicio,i=e?e.t:this.t,r=this.rotina();this.aprox=r.aprox,this.padrao=r.padrao;let o=this.disponiveis(),a=this.proximoNovo(),c=!!a;if(!a&&this.ciclo>0&&o.length&&!this.e.reduz&&this.ultimoBloco!=="item"&&(a=o[this.rodada%o.length],this.rodada++),a){let l=[];l.push(...r.saida),l.push(...this.visita(a,c,r)),this.anexar(this.compilar(l,n,i,{item_:a})),this.ultimoBloco="item";return}this.ultimoBloco="rotina",this.anexar(this.compilar(r.passos,r.inicio,i)),this.ciclo++}anexar(t){this.fila.push(...t.out)}avaliarPasso(t,e,n){let i,r;if(t.tipo==="andar"){let a=pe(e/t.dur)*t.dist,c=t.segs.length-1;for(let m=0;m<t.segs.length;m++)if(a<=t.segs[m].d0+t.segs[m].L){c=m;break}let l=t.segs[c],u=pe((a-l.d0)/l.L),d=l.yaw,h=t.segs[c+1],f=t.segs[c-1];h&&l.L*(1-u)<.35&&(d=fo(l.yaw,h.yaw,.5*(1-l.L*(1-u)/.35))),f&&l.L*u<.35&&(d=fo(f.yaw,l.yaw,.5+.5*(l.L*u/.35))),r=[_t(l.a[0],l.b[0],u),_t(l.a[1],l.b[1],u),t.de[2]+si(t.de[2],d)],i=a_(a,t.estilo,n,this.e.boneco.esc),t.pensativo&&(i.aR=[1.25,-.25,2.25],i.aL=[.6,-.35,1.5],i.nod+=.18,i.boca="foco",i.sob="tenso"),t.item==="xicara"&&(i.aR=[.6,-.25,1.75]),t.taco!=null&&(i.taco=t.taco),i.item=t.item||"",t.bolas&&(i.bolas=t.bolas)}else{let a=pe(e/t.dur),c=ce(a);r=[_t(t.de[0],t.ate[0],c),_t(t.de[1],t.ate[1],c),_t(t.de[2],t.ate[2],c)],i=t.pose(a,e,n),t.item&&!i.item&&(i.item=t.item),t.bolas&&!i.bolas&&(i.bolas=t.bolas),t.taco!=null&&i.taco===Dn.taco&&(i.taco=t.taco)}let o=this.padrao||{};for(let a in o)(!(a in i)||i[a]===Dn[a])&&(i[a]=o[a]);return{pose:i,pos:r}}passo(t,e){let n=this.e;t!=null?(this.tForcado==null&&(this.tForcado=0),this.t=t):this.t+=n.reduz?0:e,this.entrar&&this.encher();let i=0;for(;(!this.fila.length||this.fimFila().t<this.t+2)&&i++<40;)this.encher();for(;this.fila.length>1&&this.t>=this.fila[0].t0+this.fila[0].dur;)this.ant=this.fila.shift(),n.decidirProps(this.ant,1,this.ant.dur);let r=this.fila[0];if(!r)return{pose:Ht(this.t),pos:[4.5,3.5,0],s:null,tl:0};let o=this.t,a=Math.min(o-r.t0,r.dur),c=this.avaliarPasso(r,a,o),l=.45;if(this.ant&&a<l){let u=this.avaliarPasso(this.ant,this.ant.dur,o),d=ce(a/l);c.pose=hs(u.pose,c.pose,d),c.pos=[_t(u.pos[0],c.pos[0],d),_t(u.pos[1],c.pos[1],d),u.pos[2]+si(u.pos[2],c.pos[2])*d]}return this.itemAtual=r.item_||"",this.ultimaPose=c.pose,c.s=r,c.tl=a,c.k=r.dur?pe(a/r.dur):1,c}};function by(s,t){let e=new ao({antialias:!0,alpha:!0,powerPreference:"low-power"});e.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),e.outputColorSpace=tn,e.toneMapping=Ks,e.shadowMap.enabled=!0,e.shadowMap.type=Di,s.innerHTML="",s.appendChild(e.domElement);let n=new wi,i=new rs(e);n.environment=i.fromScene(new co,.04).texture,n.environmentIntensity=.38,n.add(new Ys("#FFFFFF","#C9B79C",1));let r=new Fi("#FFF1DE",2);r.position.set(1.6,3.2,2.4),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-1,right:1,top:2.2,bottom:-.2,near:.5,far:8}),n.add(r);let o=new Fi("#C7D7FF",.7);o.position.set(-2,1.5,-1.5),n.add(o);let a=new Me(new Ji(.75,48),new Vr({opacity:.22}));a.rotation.x=-lt/2,a.receiveShadow=!0,n.add(a);let c=new Rl(t.cor,t.icone,t.boneco,t.acessorio);n.add(c.root),c.root.traverse(x=>{x.isMesh&&(x.castShadow=!0)});let l=new He(24,3/4,.1,20),u=new Cl,d=-.35,h=!1,f=0,m=0,_=0,g=!1,p=performance.now(),y=p,w=()=>{let x=s.clientWidth||200,T=s.clientHeight||260;e.setSize(x,T,!1),l.aspect=x/T,l.updateProjectionMatrix()};w();let v=new ResizeObserver(w);v.observe(s);let M=e.domElement;M.style.touchAction="pan-y",M.addEventListener("pointerdown",x=>{h=!0,f=x.clientX;try{M.setPointerCapture(x.pointerId)}catch{}m=performance.now()}),M.addEventListener("pointermove",x=>{h&&(d+=(x.clientX-f)*.012,f=x.clientX,m=performance.now())}),M.addEventListener("pointerup",()=>{h=!1}),M.addEventListener("pointercancel",()=>{h=!1});function S(){if(_=0,g)return;if(!s.isConnected){C();return}let x=performance.now(),T=window.__ofVitT!=null?window.__ofVitT:(x-p)/1e3,R=Math.min(.05,(x-y)/1e3);y=x,!h&&x-m>2500&&(d+=R*.35);let L=T%12,N;if(L<3.5)N=Ht(T,{olhar:[Math.sin(T*.7)*.6,0]});else if(L<6){let B=$t(L,3.5,6,.4);N=Ht(T,{aR:[_t(0,2.6,B),_t(.12,.5,B),_t(.2,.9+.35*Math.sin(T*9),B)],boca:B>.5?"sorriso":"leve",olhos:B>.5?"F":"A",boch:.4*B,nod:-.05*B,roll:.06*B})}else if(L<8.5){let B=$t(L,6,8.5,.4);N=Ht(T,{aL:[_t(0,1.2,B),_t(.12,-.2,B),_t(.2,1.4,B)],mL:B,boca:"sorriso",boch:.3,turn:.12*B,nod:-.04*B})}else N=Ht(T,{boca:"sorriso",olhos:"A",boch:.25,turn:.15*Math.sin(T*1.2)});N=u.passo(N,R),c.root.rotation.y=d,c.aplicar(N,T,R),c.desenharRosto(N,T);let O=c.esc,D=window.__ofVitCam;D?(l.position.set(0,D[0],D[1]),l.lookAt(0,D[2],0)):(l.position.set(0,1*O,4.2*(.6+.4*O)),l.lookAt(0,.9*O,0)),e.render(n,l),_=requestAnimationFrame(S)}function C(){g||(g=!0,_&&cancelAnimationFrame(_),v.disconnect(),n.traverse(x=>{x.geometry&&x.geometry.dispose()}),e.dispose(),e.domElement.parentNode&&e.domElement.remove())}return _=requestAnimationFrame(S),{atualizar(x){c.setAparencia(x.boneco,x.acessorio),c.setCor(x.cor),x.icone!==t.icone&&c.setIcone(x.icone),t=x},destruir:C}}export{My as criar,by as vitrine};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
