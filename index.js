
var allLabels=[
labelsservice = ['Male Service Workers', 'Female Service Workers'],
labelssales = ['Male Sales Workers', 'Female Sales Workers'],
labelman = ['Male Managers', 'Female Managers'],
labelexec = ['Male Executives', 'Female Executives'],
];

var allValues =[
    values_service = [264, 154],
    values_sales = [14485, 6830],
    values_man = [5955, 2250],
    values_exec = [87, 20],   
];

var ultimateColors=[
    colors_service = ['#339966', '#6600cc'],
    colors_sales = ['#009933', '#6600ff'],
    colors_management = ['#00cc00', '#6666ff'],
    colors_exec = ['#66ff99', '#6699ff'],
];
var data=[{
    type='pie',
    Executives = go.Pie(
    labels = labelexec,
    values = values_exec,
    direction='counterclockwise',
    hole = 0.2,
    marker_colors=colors_exec,
    hovertext="Women currently encompass 26.5% of Executives/ Senior-Level Officials and Managers in the S&P500",

)   
},{
  Management = go.Pie(
    labels = labelman,
    values= values_man,
    direction='counterclockwise',
    hole=0.4,
    marker_colors=colors_management,
    hovertext="Women make up 36.9% of First/ Mid-Level Officials and Managers in the S&P500",
   
)  
},
{
    Sales = go.Pie(
        labels=labelssales,
        values=values_sales,
        direction='counterclockwise',
        hole=0.6,
        marker_colors=colors_sales,
        hovertext="Insert text about sales here",
       
    )    
},
{
    Services = go.Pie(
        labels=labelsservice,
        values=values_service,
        direction='counterclockwise',
        hole=0.8, 
        marker_colors=colors_service,
        hovertext="Women represent 44.7% of Total Employees in the S&P500"
    
    )  
}

]

    layout = { title:'Click-drag to zoom' };
    var layout ={
    layout_service= dict(height=1000, width=1000,),
    layout_sales= dict(height=800, width=800,),
    layout_man= dict(height=600, width=600,),
    layout_exec= dict(height=400, width=400,),
    title: 'Scroll and Zoom',
    showlegend: false,
    fig,update_layout(
    annotations=[dict(text='CEO', x=0.5, y=0.5, font_size=20, showarrow=False)])
};




 Plotly.newPlot('myDiv', data, layout, {scrollZoom: true});
    