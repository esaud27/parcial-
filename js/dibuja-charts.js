// Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      function drawCharts() {
        var nombres=["Instituto de Computaci\u00f3n","Instituto de Electr\u00f3nica y Mecatr\u00f3nica","Instituto de Ciencias Sociales y Humanidades","Instituto de Agroindustrias","Instituto de Dise\u00ed\u00f1o","Instituto de F\u00ed\u00ad\u00ed\u00adsica y Matem\u00e1ticas","Instituto de Hidrolog\u00ed\u00ad\u00ed\u00ada","Instituto de Miner\u00ed\u00ada","Divisi\u00f3n de Estudios de Posgrado","Jefatura de Ingenier\u00ed\u00ad\u00ed\u00ada Industrial","Centro de Idiomas","Universidad Virtual","Nova Universitas"];
        var edades=[29,23,37,19,20,46,9,6,14,9,0,0,0];
        
        var tabla= new Array ();

        for (var i = 0; i < nombres.length; i++) {
            tabla.push([nombres[i],edades[i]]);
        }
        // Create the data tabl        drawChartArea("area-chart",tabla);
        //drawChartPie("pie-chart",tabla);
        //drawChartBar("bar-chart",tabla);
        drawChartColumn("colum-chart",tabla);

    return false;
      }

      function drawChartPie(idChart,datos_tabla) {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Profesores');
        data.addRows(datos_tabla);

        // Set chart options
        var options = {'title':'Numero de profesores por instituto',
                       'width':600,
                       'height':400};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById(idChart));
        chart.draw(data, options);
        return false;
      }

function drawChartArea(idChart,datos_tabla) {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Profesores');
        data.addRows(datos_tabla);

        // Set chart options
        var options = {'title':'Numero de profesores por instituto',
                       'width':600,
                       'height':400};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.AreaChart(document.getElementById(idChart));
        chart.draw(data, options);
        return false;
      }

 function drawChartBar(idChart,datos_tabla) {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Profesores');
        data.addRows(datos_tabla);

        // Set chart options
        var options = {'title':'Numero de profesores por instituto',
                       'width':600,
                       'height':400};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById(idChart));
        chart.draw(data, options);
        return false;
      }

    function drawChartColumn(idChart,datos_tabla) {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Profesores');
        data.addRows(datos_tabla);

        // Set chart options
        var options = {'title':'Numero de profesores por instituto',
                       'width':900,
                       'height':700};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById(idChart));
        chart.draw(data, options);
        return false;
      }