var doughnutChart= document.getElementById('doughnutChart').getContext('2d');
	var daysMarsChart = new Chart(doughnutChart, {
		type:'doughnut', // kiezen uit bar, horizontalBar, pie, line, doughnut, radar, polarArea
		data:{
			labels:['Days in space', 'Days till landing on Mars '],
			datasets:[{
				data:[200,13], //labels benoemd en getal gegeven per label
				backgroundColor:[
				'rgb(255, 146, 52 )',
				'rgb(119, 58, 6 )',
			], // twee kleuren aan de donut grafiek gegeven
				borderWidth:1,
				borderColor:'#000000',
				hoverBorderWidth:3,// rand aan grafiek gegeven en in hover staat dikker gemaakt
			}]
			},
		options:{
			title:{
				display:true,
				text:'Days of traveling to Mars',
				fontSize: 15,
				fontColor:'#FFFFFF' //titel aan grafiek gegeven
			},
		animation:{
			easing:'easeInOutCirc', // cirkel animatie 
			duration: 1000,
			},
		legend:{
			display: false, //als je de legenda wel wil tonen
			},
		tooltips:{
				enabled:true,
			},	// als je de hover extra waardes wel wil tonen
		responsive: true
		}
	});
	
var lineChart= document.getElementById('lineChart').getContext('2d');
	var tempChart = new Chart(lineChart, {
		type:'line', // kiezen uit bar, horizontalBar, pie, line, doughnut, radar, polarArea
		data: {
			datasets: [{
            label: 'lowest temperature in degrees',
            data: [-82, -86, -88, -87, -85, -78, -76, -69, -68, -73, -73, -77],
			borderColor:['rgb(87, 188, 255)'], // de onderste lijn met lage temperaturen
			pointBackgroundColor: '#57BCFF',
			order: 1
			}, 
			{
            label: 'highest temperature in degrees',
            data: [-7, -20, -23, -20, -4, 0, 2, 1, 1, 4, -1, -3],
            type: 'line',
			borderColor:['rgb(255, 183, 0)'], // de bovenste lijn met  temperaturen
            pointBackgroundColor: '#FFB700',
			order: 2
			}],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		},
		options:{
			title:{
				display:true, 
				text:'Temperature on Mars',
				fontSize: 15,
				fontColor:'#FFFFFF'
			},
			legend:{
				display: true, //als je de legenda wel wil tonen
				position:'bottom',
			labels:{
				fontColor:'#FFFFFF'
				}
			},
			tooltips:{
				enabled:true
			},// als je de hover extra waardes wel wil tonen
			animation:{
			easing:'linear', // lijnen animatie 
			duration: 800
			},
			scales:{
				yAxes:[{
                ticks: {
                    fontColor: "FFFFFF",
                }
            }],
            xAxes:[{
                ticks: {
                    fontColor: "FFFFFF",
                }
            }]
			},
			responsive: true
		}
	});

var horizonChart= document.getElementById('horizonChart').getContext('2d');
	var gravityChart = new Chart(horizonChart, {
		type:'horizontalBar', // kiezen uit bar, horizontalBar, pie, line, doughnut, radar, polarArea
		data:{
			labels:['Mars', 'Earth'],
			datasets:[{
				label:'gravity in m/s2',
				fill: true,
			data:[
				3.711,
				9.807
			],
			backgroundColor:[
				'rgb(255, 96, 0)',
				'rgb(97, 217, 204)'
			],
				hoverBorderWidth:3,
				hoverBorderColor:'#000000' //verandert de rand met hover,
			}]
		},
		options:{
			title:{
				display:true, 
				text:'Gravity',
				fontSize: 15,
				fontColor:'#FFFFFF'
			},
		animation:{
			easing:'linear', // lijnen animatie 
			duration: 800
			},
		legend:{
				display: false, //als je de legenda wel wil tonen
				position:'right', //gaat de titel naar de rechter kant
			},
		tooltips:{
				enabled:true
			}, // als je de hover extra waardes wel wil tonen
		scales:{
				yAxes:[{
                ticks: {
                    fontColor: "FFFFFF",
                }
            }],
            xAxes:[{
                ticks: {
                    fontColor: "FFFFFF",
                }
            }]
			},
		responsive: true
		}
	});

var pieMarsChart= document.getElementById('pieMarsChart').getContext('2d');
	var atmosphereChart = new Chart(pieMarsChart, {
		type:'pie', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
		data:{
			labels:['Carbon dioxide in percentage', 'Argon in percentage','Nitrogen in percentage', 'Oxygen in percentage'],
			datasets:[{
				data:[
				95.32,
				1.6,
				2.7,
				0.38
			],
			backgroundColor:[
				'rgb(255, 127, 53 )',
				'rgb(255, 183, 0 )',
				'rgb(255, 96, 0 )',
				'rgb(119, 58, 6 )'
			],
				borderWidth:0.5,
				borderColor:'#000000',
				hoverBorderWidth:2
			}]
			},
		options:{
			title:{
				display:true,
				text:'Atmosphere on Mars',
				fontSize: 15,
				fontColor:'#FFFFFF'
			},
		animation:{
			easing:'easeInOutCirc', // cirkel animatie 
			duration: 1000
			},	
		legend:{
			display: true, //als je de legenda wel wil tonen
			position:'bottom', //gaat de titel naar de rechter kant
		labels:{
				fontColor:'#FFFFFF'
			}
			},
			tooltips:{
				enabled:true,
			}, // als je de hover extra waardes wel wil tonen
		responsive: true
		}
	});

var pieEarthChart= document.getElementById('pieEarthChart').getContext('2d');
	var atmosphereChart = new Chart(pieEarthChart, {
		type:'pie', // kiezen uit bar, horizontalBar, pie, line, doughnut, radar, polarArea
		data:{
			labels:['Nitrogen in percentage', 'Oxygen in percentage', 'Argon in percentage'],
			datasets:[{
				data:[
				78,
				21,
				1
			],
			backgroundColor:[
				'rgb(87, 188, 255 )',
				'rgb(97, 217, 204 )',
				'rgb(21, 86, 129 )'
			],
				borderWidth:0.5,
				borderColor:'#000000',
				hoverBorderWidth:2,
			}]
			},
		options:{
			title:{
				display:true,
				text:'Atmosphere on Earth',
				fontSize: 15,
				fontColor:'#FFFFFF'
			},
		animation:{
			easing:'easeInOutCirc', // cirkel animatie 
			duration: 1000
			},				
		legend:{
			display: true, //als je de legenda wel wil tonen
			position:'bottom', //gaat de titel naar de rechter kant
		labels:{
				fontColor:'#FFFFFF'
			}
			},
		tooltips:{
				enabled:true,
			},
		responsive: true
		}
	});
