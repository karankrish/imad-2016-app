var button=document.getElementById('counter');
var count=0;
button.onclick = function() {
    count=count+1;
    var span=document.getElementById('count');
    span.innerHTML=count.toString();
};

var submit=document.getElementById('submit_btn');
submit.onclick=function()
{
var request=new XMLHttpRequest();
request.onreadystatechange=function()
{
    if(request.readyState===XMLHttpRequest.DONE){
        if(request.status===200){
           var names=['name1','name2','name3'];
    var list='';
    for(var i=0;i<names.length;i++)
    {
        lit+='<li>'+names[i]+'</li>';
    }
    var ul=document.getElementById('namelist');
    ul.ineerHTML=list;  
        }
    }

   };
   var nameInput=document.getElementById('name');
var name=nameInput.value;
request.open('GET','http://http://karankrish.imad.hasura-app.io/submit-name?name='+name,true);
request.send(null);
};
   