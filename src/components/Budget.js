
                const xValues=["Food + Facility", "Function + Entertainment", "Fashion", "Festivities, Cards, + Gifts"];
                const yValues=[25, 25, 25, 25];
                const barColors = ["pink", "brown", "lightcoral", "lightsalmon"];

                new Chart("myChart", {
                    type:"pie",
                    data: {
                        labels: xValues,
                        datasets:[{backgroundColor:barColors, data:yValues}]
                    },
                    options:{
                        title: {display:true, text:"Wedding Budget Categories"}
                    }
                });

                /*
<canvas id="myChart"></canvas>
              
                const xValues=["Food + Facility", "Function + Entertainment", "Fashion", "Festivities, Cards, + Gifts"];
                const yValues=[{calcBud(maxB,ffp)}, {calcBud(maxB,fep)}, {calcBud(maxB,fp)}, {calcBud(maxB,fcgp)}];
                const barColors = ["pink", "brown", "lightcoral", "lightsalmon"];

                new Chart("myChart", {
                    type:"pie",
                    data: {
                        labels: xValues,
                        datasets:[{backgroundColor:barColors, data:yValues}]
                    },
                    options:{
                        title: {display:true, text:"Wedding Budget Categories"}
                    }
                });
                */