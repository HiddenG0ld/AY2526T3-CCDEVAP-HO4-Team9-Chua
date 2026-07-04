const statusCtx = document.getElementById("statusDoughnutChart");

new Chart(statusCtx, {
    type:"doughnut",
    data: {
        labels:["Ongoing", "Upcoming", "Finished"],
        datasets:[
            {
                data:[6, 14, 32], // Just random numbers for show
                backgroundColor:["#f2c75c", "#4a90d9", "#9aa0a6"],
            },
        ],
    },
    options: {
        responsive:true,
        maintainAspectRatio:false,
    },
});

const orgCtx = document.getElementById("orgBarChart");

new Chart(orgCtx, {
    type:"bar",
    data: {
        labels:["CCS", "COE", "CLA", "RVR-COB", "BAGCED", "COS"],
        datasets:[
            {
                label:"Events",
                data:[18, 9, 14, 11, 7, 12], // Just random numbers for show
                backgroundColor:"#00703c",
            },
        ],
    },
    options: {
        responsive:true,
        maintainAspectRatio:false,
        scales: {
            y: {
                beginAtZero:true,
            },
        },
    },
});

const timelineCtx = document.getElementById("timelineLineChart");

new Chart(timelineCtx, {
    type:"line",
    data: {
        labels:["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb"], // Random months for show
        datasets:[
            {
                label:"Events logged",
                data:[4, 7, 10, 13, 6, 9, 16], // Just random numbers for show
                borderColor:"#00703c",
                fill:false,
            },
        ],
    },
    options: {
        responsive:true,
        maintainAspectRatio:false,
        scales: {
            y: {
                beginAtZero:true,
            },
        },
    },
});