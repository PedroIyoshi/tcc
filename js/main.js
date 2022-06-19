$(document).ready(function () {
    $("#botoes").click(function (e) {
        btnResultado = document.getElementById("btnResultado");
        btnTeste = document.getElementById("btnTeste");

        if (e.target.id == "btnResultado") {
            btnResultado.className = "selecionado";
            btnTeste.className = ""; 
            $("#teste").hide();
            $("#resultado").show();
        } else {
            btnResultado.className = "";
            btnTeste.className = "selecionado"; 
            $("#teste").show();
            $("#resultado").hide();
        }
    });

    $("#btnQuantidade").click(function (e) {
        e.target.className="btnQuantidade quantidadeSelecionada"
    })

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var options = {
            'title': 'How Much Pizza I Ate Last Night',
            'width': 1000,
            'height': 700,
            'backgroundColor': {
                'stroke': 'black',
                'color': '#ccc',
            },
            'titleTextStyle': {
                'color': 'white'
            },
            'hAxis': {
                'textStyle': {
                    'color': 'white'
                },
                'titleTextStyle': {
                    'color': 'white'
                }
            },
            'vAxis': {
                'textStyle': {
                    'color': 'white'
                },
                'titleTextStyle': {
                    'color': 'white'
                }
            },
            'legend': {
                'textStyle': {
                    'color': 'white'
                }
            }
        };
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
            ['Mushrooms',1],
            ['Onions', 23],
            ['Olives', 3],
            ['Zucchini', 4],
            ['Pepperoni', 7]
        ]);
        
        var chart = new google.visualization.BarChart(document.getElementById('grafico'));
        chart.draw(data, options);
    }
});