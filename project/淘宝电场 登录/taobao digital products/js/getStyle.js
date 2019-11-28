function getStyle(obj, txt) {
  if(obj.currentStyle){
    return obj.currentStyle[txt];
  }else{
    return getComputedStyle(obj,null)[txt];
  }
}