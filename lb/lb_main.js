google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    'use strict';
    $.ajax({
        url: "/data/leaderboard.json",
        dataType: "json",
    }).done(function (jsonData) {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'img_name');
        data.addColumn('number', 'number_of_upvotes');

        jsonData.forEach(function (row) {
            data.addRow([
                row.name,
                row.votes
            ]);
        });
        //console.log(data);

        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));

        var options = {
            title: 'Leaderboard',
            width: 400,
            height: 240,
            pieSliceText: 'value'
        };
        chart.draw(data, options);
    }).fail(function (jq, text, err) {
        console.log(text + ' - ' + err);
    });
}