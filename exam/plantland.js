const plantationLand = [
    ["fertile", "fertile", "dry", "barren"],
    ["dry", "dry", "dry", "dry"],
    ["fertile", "fertile", "fertile", "dry"],
    ["barren", "barren", "barren", "barren"]
];

let totalFertilePlots = 0;
let totalPlotsToBePlanted = 0;

for (let row of plantationLand) {
    let fertileCount = 0;
    let totalCount = row.length;

    for (let plot of row) {
        if (plot === "fertile") {
            fertileCount++;
        }
    }

    
    if (fertileCount >= totalCount / 2) {
        totalFertilePlots += fertileCount;
        totalPlotsToBePlanted += fertileCount;
    }
}

console.log(`Total fertile plots: ${totalFertilePlots}`);
console.log(`Total plots to be planted: ${totalPlotsToBePlanted}`);