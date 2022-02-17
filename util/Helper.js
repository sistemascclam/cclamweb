export const toSoles=(param,decimales=2)=>{
    return (Number(param)).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: decimales, minimumFractionDigits: decimales });
}

export const withLeftZeros=(param)=>{
    let finalnum=param+"";
    while(finalnum.length<4){
        finalnum="0"+finalnum;
    }
    return finalnum;
}

