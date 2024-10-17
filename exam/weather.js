const checkConditions = (weather) => {
    let h = weather["humidity"];
    let t = weather["temperature"];
    let s = weather["windSpeed"];
    
    
    if (t >= 20 && t <= 30 && h > 50 && s < 15) {
        return true; 
    }
    return false; 
}

module.exports = { checkConditions };