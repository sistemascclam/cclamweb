export const toSoles=(param)=>{
    return (Number(param)).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: 2, minimumFractionDigits: 2 });
}

export const withLeftZeros=(param)=>{
    let finalnum=param+"";
    while(finalnum.length<4){
        finalnum="0"+finalnum;
    }
    return finalnum;
}

