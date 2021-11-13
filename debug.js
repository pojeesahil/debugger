
//for(var timed=0;scriptsl)
var adv=0;
var conic=document.createElement("DIV");
var conic2=document.createElement("DIV");
var conicp=document.createElement("DIV");
var vchanger=document.createElement("DIV");
var vb1=document.createElement("div");
var vtext1=document.createElement("P");
var vb2;
var vovn="";
vb2=document.createElement("Div");
var tempp2=document.createElement("div");
tempp2.style.display="none";
    tempp2.innerHTML="<div style='position:absolute;left:20%;top:20%;width:40%;height:40%;background-color:rgb(200,200,200)'><p>variable type:<select id='vartype'><option>variable</option><option>function</option></select></p><p>variable name:<input type='text' id='newvarn'></p><button onclick='avcancel()' style='position:absolute;bottom:0%;height:10%;width:50%'>Cancel</button><button onclick='avdone()' style='position:absolute;left:50%;bottom:0%;height:10%;width:50%'>Done</button></div>";
    
    document.body.appendChild(tempp2);
    
var tempp3=document.createElement("div");
tempp3.style.display="none";
    tempp3.innerHTML="<div style='position:absolute;left:20%;top:20%;width:40%;height:40%;background-color:rgb(200,200,200)'><p>variable name:<input type='text' id='lsvn'></p><p>variable value:<input type='text' id='lsvv'></p><button onclick='lscancel()' style='position:absolute;bottom:0%;height:10%;width:50%'>Cancel</button><button onclick='lsdone()' style='position:absolute;left:50%;bottom:0%;height:10%;width:50%'>Done</button></div>";
    
    document.body.appendChild(tempp3);
var conicps=false;
var vco=false;
var vcvon=true;
var vcs="";
var cmode=0;
var debloop;
var tempp=document.createElement("div");
conic.style.position="absolute";
conic.style.width="10%";
conic.style.height="10%";
conic.style.right="0%";
conic.style.backgroundColor="lightgreen";
conic.style.zIndex=100001;
conic.id="conic";
conic.innerHTML="<div id='tol' style='width=100%;height:100%' onclick='vcon()'></div>";
conic2.style.position="absolute";
conic2.style.width="50%";
conic2.style.height="50%";
conic2.style.right="25%";
conic2.style.top="25%";
conic2.id="conic2";
conic2.style.backgroundColor="rgb(230,230,230)";

vchanger.style.position="absolute";
vchanger.style.width="50%";
vchanger.style.height="50%";
vchanger.style.right="25%";
vchanger.style.top="25%";
vchanger.style.display="none";
vchanger.style.zIndex=100002;
vchanger.style.border="black solid 1px";
vchanger.id="vchanger";
vchanger.style.backgroundColor="rgb(240,240,240)";
vchanger.innerHTML="<div style='background-color:rgb(250,250,250);position:absolute;width:100%;height:10%;top:-10%;text-align:center;'>value changer</div><button style='position:absolute;left:50%;width:50%;height:10%;bottom:0%' onclick='vcdone()'>Done</button><button style='position:absolute;left:0%;width:50%;height:10%;bottom:0%' onclick='vchangeron()'>cancel</button>";

vtext1.innerHTML="change value from <div style='color:grey' id='pval'>null</div> to <input type='text' id='nval'/><button style='display:none' id='funcall' onclick='cfun()'>call the function</button>";
vtext1.style.position="absolute";
vtext1.style.top="10%";

vb2.style.position="absolute";
vb2.style.width="30%";
vb2.style.height="5%";
vb2.style.right="0%";
vb2.style.top="0%";
vb2.style.display="none";
vb2.id="vb2";
vb2.style.zIndex=100003;
vb2.style.backgroundColor="rgb(200,200,200)";
vb2.style.overflow="auto";
vb2.innerHTML="<button style='width:50%;height:100%' onclick='stv()'>variable</button><button style='position:absolute;width:50%;height:100%;left:50%' onclick='ste()'>Elements</button><button onclick='stls()' style='position:absolute;height:100%;left:100%;width:50%'>localStorage</button>";


conicp.style.position="absolute";
conicp.style.overflow="auto";
conicp.style.width="30%";
conicp.style.height="94%";
conicp.style.right="0%";
conicp.style.top="5%";
conicp.style.zIndex=100000;
conicp.style.display="none";
conicp.id="conicp";
document.body.appendChild(conic);
document.body.appendChild(conicp);
document.body.appendChild(vchanger);
document.body.appendChild(vb2);
document.getElementById("conic").appendChild(conic2);
document.getElementById("vchanger").appendChild(vtext1);
document.getElementById("vchanger").appendChild(vb1);

/*window.onbeforeunload = function(e) {
  return 'Dialog text here.';
};*/


function vcon(){
  if(conicps===false){
    document.getElementById("conicp").style.display="block";
    document.getElementById("vb2").style.display="block";
    conicps=true;
    document.getElementById("conic").style.right="30%";
    document.getElementById("conicp").innerHTML="";
  }else{
    document.getElementById("vb2").style.display="none";
    document.getElementById("conicp").style.display="none";
    //alert(document.body.innerHTML.length);
   // alert(vb2.innerHTML+"   "+document.getElementById("vb2").innerHTML);
    conicps=false;
    document.getElementById("conic").style.right="0%";
    clearInterval(debloop);
  }
}
document.getElementById("conic").addEventListener("click",function(){
  vcon();
  changeMode();
});
document.getElementById("conicp").style.backgroundColor="rgb(240,240,240)";
function changeMode(){
  document.getElementById("conicp").style.height="100%";
  tempp.innerHTML="";
  if(conicps===true){
  if(cmode===0){
    debug();
    debloop=setInterval(function(){
     debug();
   },1000);
    document.getElementById("conicp").style.height="85%";
  tempp.innerHTML="<button style='position:absolute;right:0%;top:90%;width:30%;height:10%'>add a variable</button";
  tempp.addEventListener("click",function(){
    //TODO:make a alertbox pop up which ask you to add a function or a variable and its name
    tempp2.style.display="block";
  });
  document.body.appendChild(tempp);
  }
  if(cmode===1){
    elemDebug();
    debloop=setInterval(function(){
     elemDebug();
   },10000);
  }
  if(cmode===2){
    lsDebug();
    debloop=setInterval(function(){
     lsDebug();
   },10000);
  }
  }
}
function lsDebug(){
  for(var i=0;i<localStorage.length;i++){
    //alert(i);
    var tkey=localStorage.key(i);
    var tvalue=localStorage.getItem(tkey);
    var ttex=document.createElement("div");
    ttex.style.border="1px black solid";
    ttex.innerText="Key: "+tkey+"\nValue: "+tvalue;
    ttex.id="ttex"+i;
    document.getElementById("conicp").appendChild(ttex);
    ttex.addEventListener("click",function(){
      var vsoln=0;
      var vsolm=1;
      for(var tsoll=5;tsoll<this.id.length;tsoll++){
        vsolm*=10;
      }
      for(var tsoll=4;tsoll<this.id.length;tsoll++){
        vsoln+=this.id[tsoll]*vsolm;
        vsolm/=10;
      }
      tempp3.style.display="block";
      //TODO:make a variable change at alertbox
    });
  }
}
function elemDebug(){
  document.getElementById("conicp").innerHTML="";
  var telem=document.body;
  //(telem.innerText);
  var teleml=telem.length;

  var tempdiv=document.createElement("textarea");
  
  tempdiv.style.position="absolute";
  tempdiv.rows="30";
  tempdiv.cols="300";
  tempdiv.style.width="2000%";
  tempdiv.style.height="300%";
  tempdiv.style.lineHeight=2;
  tempdiv.style.border="black solid 1px";
//  tempdiv.innerText=telem[timed].style.cssText+"<"+telem[timed].tagName+">";

  tempdiv.value=telem.innerHTML;
  document.getElementById("conicp").appendChild(tempdiv);
 var tempbtn=document.createElement("button");
 tempbtn.style.position="fixed";
 tempbtn.style.width="100%";
 tempbtn.style.height="5%";
 tempbtn.style.bottom="0%";
 tempbtn.style.left="0px";
 tempbtn.innerText="Enter";
 document.getElementById("conicp").appendChild(tempbtn);
 tempbtn.addEventListener("click",function(){
   vcvon=true;
   document.body.innerHTML="<p></p>";
   document.body.innerHTML=tempdiv.value;
 });
}
function debug(){
  document.getElementById("conicp").innerHTML="";
  
  var tempv=0;
for(var i in window){
  if(tempv<adv-4){
    tempv++;
    continue;
  }
  if(i==="TEMPORARY"){
    break;
  }
  //document.body.innerH
  var tempdiv=document.createElement("div");
  tempdiv.id="win"+tempv;
  tempdiv.innerHTML="name:  <div id='win"+tempv+"Name' style='display:inline'>"+i+"</div><div id='win"+tempv+"Value'>"+window[i]+"</div>typeof:  <div style='display:inline' id='win"+tempv+"Type'>"+typeof window[i]+"</div>";
  tempdiv.addEventListener("click",function(){
    vco=false;
    vchangeron();
    vcdata(this.id);
  });
  tempdiv.style.border="black solid 1px";
  document.getElementById("conicp").appendChild(tempdiv);
  tempv++;
}
}

function vchangeron(){
if(vco===false){
  document.getElementById("vchanger").style.display="block";
  vco=true;
}else{
  vco=false;
  document.getElementById("vchanger").style.display="none";
}
}
function vcdata(mid){
  document.getElementById("pval").innerHTML=document.getElementById(mid+"Value").innerHTML;
  if(document.getElementById(mid+"Type").innerHTML==="function"){
  document.getElementById("funcall").style.display="inline";
  }else{
    document.getElementById("funcall").style.display="none";
  }
  vcs=mid;
}
function vcdone(){
  var tnval=document.getElementById("nval").value;
  if(typeof window[document.getElementById(vcs+"Name").innerHTML]==="function"){
    window[document.getElementById(vcs+"Name").innerHTML]=new Function(document.getElementById("nval").value);
  }
  //alert(tnval[0]+tnval[tnval.length-1]==='""');
  else if(tnval[0]+tnval[tnval.length-1]==='""'){
  window[document.getElementById(vcs+"Name").innerHTML]=tnval.slice(1,tnval.length-1);
  }
  else{
    window[document.getElementById(vcs+"Name").innerHTML]=parseFloat(tnval);
  }
  vchangeron();
}
function avcancel(){
  tempp2.style.display="none";
}
function avdone(){
  tempp2.style.display="none";
  vovn=document.getElementById("newvarn").value;
  var tvartype=document.getElementById("vartype").value;
  if(tvartype==="variable"){
  window.window[vovn]=null;
  }else{
    window.window[vovn]=new Function("");
  }
}
function lscancel(){
  tempp3.style.display="none";
}
function lsdone(){
  tempp3.style.display="none";
}
function cfun(){
  window[document.getElementById(vcs+"Name").innerHTML]();
}
function debtest(){
  for(i in window){
    adv++;
  }
}
function stv(){
  cmode=0;
  vcvon=true;
  vcon();
  vcon();
  changeMode();
}
function ste(){
  cmode=1;
  vcvon=false;
  vcon();
  vcon();
  changeMode();
}
function stls(){
  cmode=2;
  vcvon=false;
  vcon();
  vcon();
  changeMode();
}
window.onbeforeunload=function(e){
  return "lol";
};
debtest();
debug();
