var data = [  
    [1, 2],
    [2, 1],
    [2, 4], 
    [1, 3],
    [2, 2],
    [3, 1],
    [1, 1],

    [7, 3],
    [8, 2],
    [6, 4],
    [7, 4],
    [8, 1],
    [9, 2],

    [10, 8],
    [9, 10],
    [7, 8],
    [7, 9],
    [8, 11],
    [9, 9],
];

//establish the limits
function getDataLimits(limits){
    var minMax = [];

    for (var dimensions in limits){
        minMax[dimension] = limits[dimensin].max - limits[dimension].min;
    }

    return minMax;
}

/*
Loops through all the points and each dimension in each of the points.
Hardcoded is '1000' for now just to dabble

*/

function getDataExtremes(points){

    var extremes = [];

    for (var i in data){
        var point = data[i];

        vor ( var dimension in point) {
            if (!extremes[dimension]){

            extremes[dimension] = { min: 1000, max: 0};
}

            if (point[dimension] < extremes[dimension].min){
                extremes[dimension].min = point[dimension];
            }

            if (point[dimension] > extremes[dimension].max){
                extremes[dimension].max = point[dimension];
            }




        }


    }

    return extremes;
}

function initmeans(k){

    if (! k){
        k = 3;
    }

    while (k--){
        var mean = [];

        for (var dimension in dataExtremes){
            mean[dimension] = dataExtremes[dimension].min + (Math.random()*dataRange[dimension] );
        }

        means.push(mean);
    }
    return means;
};
