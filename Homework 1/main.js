var cyclistsData = [
    {
        distanceKm: 170,
        tHours: 20
    },
    {
        distanceKm: 190,
        tHours: 40
    },
    {
        distanceKm: 210,
        tHours: 50
    },
];


var calculateVelocity = function (hours, distance) {
    var vKmh = distance / hours;
    return vKmh;
};




var maxV = 0;

for (var i = 0; i < cyclistsData.length; i++) {
    var v = calculateVelocity(
        cyclistsData[i].tHours,
        cyclistsData[i].distanceKm
    );

    if (maxV < v) {
        maxV = v;
    };

};


console.log(maxV);


