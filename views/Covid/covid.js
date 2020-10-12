
//when document loads fetch the corona status
	$(document).ready(function(){    
  let states= []
  let deaths = []
  let active= []
  let recovered = []
		$.ajax({ url: "https://api.covidindiatracker.com/state_data.json",
				context: document.body,
				success: function(data){

					//sort descending on basis of confirmed
					data = data.sort((a, b) => {
						return b.confirmed - a.confirmed;
					});
					//slice tom select ten items
          data = data.slice(0 , 10)
    
            
					data.map( obj => {
            console.log(obj)
            states.push(obj.state);
            deaths.push(obj.deaths);
            recovered.push(obj.recovered);
            active.push(obj.active);
						$("#state-list").append(`<li class = "items state-list"><span class="add-icon-span"><i class='fa fa-info-circle'></i></span>${obj.state} - ${obj.confirmed}</li>`)
          })
          DisplayGraph(states , deaths , recovered , active);
					
				}});
    });
    
    
const DisplayGraph = (states , deaths , recovered , active) => {
  Highcharts.chart('container', {
    chart: {
      renderTo: 'container',
      type: 'column'
    },
    title: {
      text: 'States Performance'
    },
    xAxis: {
      categories: states,
      title: {
        text: 'Top 10 states'
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Percentage'
      },
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
      shared: true
    },
    plotOptions: {
      column: {
        stacking: 'percent',
      }
    },
    series: [   
    {
      color: "#e55c5c",
      name: 'Deaths',
      data: deaths
    },      
    {
      color: "rgb(124, 181, 236)",
      name: 'Active',
      data: active
    }, 
    { 
      color: "rgb(144, 237, 125)",
      name: 'Recovered',
      data: recovered
    },
  ]
  });
}
