//<style type="text/css">
//    
//body {
//-moz-user-select : none;
//-webkit-user-select: none;
//}
//</style>
////(於head標簽內添加以上CSS代碼 不能放置在.css文件中調用)



//(網頁中插入或調用以下JS代碼)

//<script type="text/javascript"> </script>
    
    
function iEsc(){ return false; }
function iRec(){ return true; }
function DisableKeys() {
if(event.ctrlKey || event.shiftKey || event.altKey) {
window.event.returnValue=false;
iEsc();}
}
document.ondragstart=iEsc;
document.onkeydown=DisableKeys;
document.oncontextmenu=iEsc;
if (typeof document.onselectstart !="undefined")
document.onselectstart=iEsc;
else{
document.onmousedown=iEsc;
document.onmouseup=iRec;
}
function DisableRightClick(qsyzDOTnet){
if (window.Event){
if (qsyzDOTnet.which == 2 || qsyzDOTnet.which == 3)
iEsc();}
else
if (event.button == 2 || event.button == 3){
event.cancelBubble = true
event.returnValue = false;
iEsc();}
}
