function distanceFromHqInBlocks(blocks){
    if (blocks > 42){
    return blocks - 42
    } else { 
    return 42 - blocks
    }
}

function distanceFromHqInFeet (blocks){
    return distanceFromHqInBlocks(blocks) * 264;
}  

function distanceTravelledInFeet(start, end){
    if (start < end){
        return (end - start) * 264
    } 
    else {
        return (start - end) * 264
    }
}

function calculatesFarePrice (start, end){
    const trip = distanceTravelledInFeet(start, end)

    if (trip <= 400){
        return 0
    }
    else if (trip > 400 && trip < 2000){
        return .02 * (trip - 400)
    }
    else if (trip > 2000 && trip < 2500){
        return 25
    }
    else {
        return 'cannot travel that far'
    }
}