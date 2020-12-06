/**
 * 多文本省略号
 */
function substrEllipsis(text,length){
    let result = null;
    if(text.length <= length){
        result = text;
    }
    else{
        let str = text.substring(0,length);
        result =  str + '...';
    }
    return result;
}
export {
    substrEllipsis
};
