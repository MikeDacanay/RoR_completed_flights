export const tryCatchHandlr = async(promise) => {
    try{
        const data = await promise;
        return [data, null]
    }catch(err){
        return [null, err];
    }
}

export const formValuesCatcher = e => {
    const retThis = {};

    for(let input of e.target){
        if(input.name === '') continue;
        retThis[input.name] = input.value;
    }

    return retThis;
}

export const arrayScoreAvg = arr => arr.reduce((p, {attributes: {score}}) => p + score, 0) / arr.length;