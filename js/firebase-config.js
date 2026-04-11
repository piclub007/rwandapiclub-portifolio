(function(){
const _0x2a3b=['AIzaSyAtHa9wAryji3EdWwhxT7tUwZquRD-LJvI','project-k-dbaef','project-k-dbaef.firebasestorage.app','356936578912','1:356936578912:web:056bdbf8625b33d79e1005','G-PXB6QYYV3Z','project-k-dbaef.firebaseapp.com'];
const _0x4c8d=function(a,b){return a[b];};
const cfg={apiKey:_0x4c8d(_0x2a3b,0),authDomain:_0x4c8d(_0x2a3b,6),projectId:_0x4c8d(_0x2a3b,1),storageBucket:_0x4c8d(_0x2a3b,2),messagingSenderId:_0x4c8d(_0x2a3b,3),appId:_0x4c8d(_0x2a3b,4),measurementId:_0x4c8d(_0x2a3b,5)};
import{initializeApp}from"https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import{getFirestore}from"https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";
const app=initializeApp(cfg);
const db=getFirestore(app);
window.FB={app,db};
})();
