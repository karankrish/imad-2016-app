var button=document.getElementById('counter');
var count=0;
button.onclick = function() {
    count=count+1;
    var span=document.getElementById('count');
    span.innerHTML=count.toString();
};
var nameInput=document.getElementById('name');
var name=nameInput.values;
var submit=document.getElementById('submit_btn');
submit.onclick=function()
{
    var names=['name1','name2','name3'];
    var list='';
    for(var i=0;i<names.length;i++)
    {
        lit+='<li>'+names[i]+'</li>';
    }
    var ul=document.getElementById('namelist');
    ul.ineerHTML=list;
};