var xmlHttp;
var request="";

function createXmlHttpRequest(){
    try{
        xmlHttp=new ActiveXObject();
    }
    catch(e){
    xmlHttp=new XMLHttpRequest();     
    }
}
function startRequest(request){
  createXmlHttpRequest();
  xmlHttp.onreadystatechange=readyStateChangeHandle;
 xmlHttp.open("GET","H/"+request+".html",true);    
  xmlHttp.send();
}
function readyStateChangeHandle(){
    if(xmlHttp.readyState==4&&xmlHttp.status){

    if(xmlHttp.readyState===4&&xmlHttp.status===200){
        xmlDoc=xmlHttp.responseText;
        var s1=document.getElementById("s1");
        s1.innerHTML= xmlDoc;
    }
}   
}
startRequest();