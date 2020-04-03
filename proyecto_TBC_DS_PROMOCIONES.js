var script_url = "https://script.google.com/macros/s/AKfycbyeIc3oDLva1---hQjic8iSWgGLdoZ3Ujz7oDFw8QzVz-zEZ9E/exec";
let error;

let input;
let b1;
let b2;
let s1;
let con1;


var logo;

 var mensaje="";
     
     var c1='rgb(237,139,0)';
     var c2='rgb(0,60,113)';
     var c3='rgba(237,139,0,1';
     var c4='rgb(0,60,113,1)';
     
     var clientes_nom = ["CANSECO","PRO DYNAMICS","RINES DE CALIDAD",];
     
     var dias_semana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo",];
     var dias_semana_vals = [];
     
     var horas = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00",];
     var horas_vals = [];
         
     var productos_nom = [];
     var productos_cantidad = [];
     var productos_monto = [];
     
     var comprador_nom = [];
     var comprador_cantidad = [];
     var comprador_monto = [];
     
     var nombre_articulos=[];
     var cantidad_articulos=[];
     var valores_unitarios=[];
     var valores_totales=[];
     
     function preload()
     {
       ctx = document.getElementById('chart').getContext('2d');
       chart = new Chart(ctx, {
       type: 'bar',
       data: {
       labels: productos_nom,
       datasets: [
       {
           label: 'Unidades vendidas por producto',
           barPercentage: 0.5,
           barThickness: 6,
           maxBarThickness: 8,
           minBarLength: 2,
           backgroundColor: c1,
           data: productos_cantidad,
        },],
       },
           options: {scales: {
            yAxes: [{
                stacked: true,
                ticks:{
                  fontSize:20,
                },
            },],
            xAxes: [{
              stacked: true,
                ticks:{
                  fontSize:15,
                },
            },],
              },
            legend:{
              labels:{
                 fontSize:30,
              },
            },
          },
         });
         
         
         ctx2 = document.getElementById('chart2').getContext('2d');
       chart2 = new Chart(ctx2, {
       type: 'bar',
       data: {
       labels: comprador_nom,
       datasets: [
       {
           label: 'Unidades vendidas por cliente',
           barPercentage: 0.5,
           barThickness: 6,
           maxBarThickness: 8,
           minBarLength: 2,
           backgroundColor: c2,
           data: comprador_cantidad,
        },],
       },
           options: {scales: {
            yAxes: [{
                stacked: true,
                ticks:{
                  fontSize:20,
                },
            },],
            xAxes: [{
              stacked: true,
                ticks:{
                  fontSize:15,
                },
            },],
              },
            legend:{
              labels:{
                 fontSize:30,
              },
            },
          },
         });
         
       ctx3 = document.getElementById('chart3').getContext('2d');
       chart3 = new Chart(ctx3, {
       type: 'bar',
       data: {
       labels: productos_nom,
       datasets: [
       {
           label: 'Monto vendido por producto',
           barPercentage: 0.5,
           barThickness: 6,
           maxBarThickness: 8,
           minBarLength: 2,
           backgroundColor: c2,
           data: productos_monto,
        },],
       },
           options: {scales: {
            yAxes: [{
                stacked: true,
                ticks:{
                  fontSize:20,
                },
            },],
            xAxes: [{
              stacked: true,
                ticks:{
                  fontSize:15,
                },
            },],
              },
            legend:{
              labels:{
                 fontSize:30,
              },
            },
          },
         });
         
       ctx4 = document.getElementById('chart4').getContext('2d');
       chart4 = new Chart(ctx4, {
       type: 'bar',
       data: {
       labels: comprador_nom,
       datasets: [
       {
           label: 'Monto vendido por cliente',
           barPercentage: 0.5,
           barThickness: 6,
           maxBarThickness: 8,
           minBarLength: 2,
           backgroundColor: c1,
           data: comprador_monto,
        },],
       },
           options: {scales: {
            yAxes: [{
                stacked: true,
                ticks:{
                  fontSize:20,
                },
            },],
            xAxes: [{
              stacked: true,
                ticks:{
                  fontSize:15,
                },
            },],
              },
            legend:{
              labels:{
                 fontSize:30,
              },
            },
          },
         });
         
       ctx5 = document.getElementById('chart5').getContext('2d');
       chart5 = new Chart(ctx5, {
       type: 'line',
       data: {
       labels: dias_semana,
       datasets: [
       {
           label: 'Venta por dia de la semana',
           barPercentage: 0.5,
           barThickness: 6,
           maxBarThickness: 8,
           minBarLength: 2,
           backgroundColor: c3,
           data: dias_semana_vals,
        },],
       },
           options: {scales: {
            yAxes: [{
                stacked: true,
                ticks:{
                  fontSize:20,
                },
            },],
            xAxes: [{
              stacked: true,
                ticks:{
                  fontSize:15,
                },
            },],
              },
            legend:{
              labels:{
                 fontSize:30,
              },
            },
          },
         });
         
       ctx6 = document.getElementById('chart6').getContext('2d');
       chart6 = new Chart(ctx6, {
       type: 'line',
       data: {
       labels: horas,
       datasets: [
       {
           label: 'Venta por hora',
           barPercentage: 0.5,
           barThickness: 6,
           maxBarThickness: 8,
           minBarLength: 2,
           backgroundColor: c4,
           data: horas_vals,
        },],
       },
           options: {scales: {
            yAxes: [{
                stacked: true,
                ticks:{
                  fontSize:20,
                },
            },],
            xAxes: [{
              stacked: true,
                ticks:{
                  fontSize:15,
                },
            },],
              },
            legend:{
              labels:{
                 fontSize:30,
              },
            },
          },
         });
         
     }
    
     function setup()
     {
        createCanvas(windowWidth,windowHeight);
        
        logo=loadImage("data/logo.png");
        
        input = createFileInput(subir);
        input.position((11.5*windowWidth)/100, (17.5*windowHeight)/100);
        
        s1=createSelect();
        s1.position((50*windowWidth)/100,(17.5*windowHeight)/100);
        s1.size((10*windowWidth)/100,(3.5*windowHeight)/100);
        s1.option("Seleccionar usuario");
        for(var nom_pos=0;nom_pos<clientes_nom.length;nom_pos++)
        {
          s1.option(clientes_nom[nom_pos]);
        }
        
        con1=createInput('', 'password');
        con1.position((61*windowWidth)/100,(17.5*windowHeight)/100);
        con1.size((10*windowWidth)/100,(3.5*windowHeight)/100);
        
        b2=createButton("Buscar");
        b2.position((72*windowWidth)/100,(17.5*windowHeight)/100);
        b2.size((10*windowWidth)/100,(3.5*windowHeight)/100);
        b2.mousePressed(buscar);
     }
     
     function draw()
     {
        background(255,255,255);
        textSize((3)*(windowWidth)/100); 
        fill(223,223,223);
        noStroke();
        rect(0,0,windowWidth,windowHeight/8);
        image(logo,0,0,windowWidth/12,windowHeight/8);
        fill(0);
        textSize((3)*(windowWidth)/100);
        text("TBC-DS-PROMOCIONES",(35*windowWidth)/100,(8*windowHeight)/100);
        fill(0,60,113);
        noStroke();
        rect(0,windowHeight/8,windowWidth,windowHeight/8);
        fill(237,139,0);
        textSize((1.5)*(windowWidth)/100);
        textStyle(BOLDITALIC);
        text("Elegir XML:",(2*windowWidth)/100,(20*windowHeight)/100);
        text(day()+"/"+month()+"/"+year(),(90*windowWidth)/100,(20*windowHeight)/100);
     }
     
     function subir(archivo)
     {
       var nombre_archivo = split(archivo.name,'.');
       var extension = nombre_archivo[1];
       
       if(extension != 'xml')
       {
         b1.remove();
         console.log(archivo.data);
         alert("Solo subir archivos XML");
       }
       else
       {
         nombre_articulos = [];
         cantidad_articulos = [];
         valores_unitarios = [];
         valores_totales = [];
         var rfc_1 = split(archivo.data,'Rfc');
         var rfc_2 = split(rfc_1[1],' ');
         var rfc_t = rfc_2[0].substring(2,rfc_2[0].length-2);
         
         var uuid_1 = split(archivo.data,'UUID');
         var uuid_2 = split(uuid_1[1],' ');
         var uuid_t = uuid_2[0].substring(2,uuid_2[0].length-2);
         
         var r_rfc_1 = split(archivo.data,'cfdi:Receptor Rfc');
         var r_rfc_2 = split(r_rfc_1[1],' ');
         var r_rfc_t = r_rfc_2[0].substring(2,r_rfc_2[0].length-2);
         
         var fecha_1 = split(archivo.data,'Fecha');
         var fecha_2 = split(fecha_1[1],' ');
         
         var fecha_hora = split(fecha_2[0],'T');
         var fecha_t = fecha_hora[0].substring(2,fecha_hora[0].length);
         var hora_1 = fecha_hora[1].substring(0,fecha_hora[1].length-1);
         var hora_2 = split(hora_1,':');
         var hora_t = hora_2[0];
         
         var ds1 = new Date(fecha_t);
         var dst = ds1.getDay();
         var dsmt =dias_semana[dst];
         
         var num_registros = split(archivo.data,'Cantidad').length;
         var registros_num = split(archivo.data,'Cantidad');
         var registros_nom = split(archivo.data,'Descripcion');
         var valor_unitario = split(archivo.data,"ValorUnitario");
         
         for(var i=1;i<=num_registros-1;i++)
         {
            var cant_1 = split(registros_num[i],'"');
            cantidad_articulos.push(int(cant_1[1]));
            
            var nom_1 = split(registros_nom[i],'"');
            nombre_articulos.push(nom_1[1]);
            
            var v_unitario_1  = split(valor_unitario[i],'"');
            valores_unitarios.push(nf(float(v_unitario_1[1]),2,2));
            
            var total = nf(float(v_unitario_1[1])*float(cant_1[1]),2,2);
            valores_totales.push(total);
           
         }
         
         console.log(rfc_t);
         console.log(uuid_t);
         console.log(r_rfc_t);
         console.log(num_registros);
         console.log(cantidad_articulos);
         console.log(nombre_articulos);
         console.log(fecha_t);
         console.log(hora_t);
         console.log(dsmt);
         console.log(valores_unitarios);
         console.log(valores_totales);
         
         b1=createButton("Subir");
         b1.position((35*windowWidth)/100,(17.5*windowHeight)/100);
         b1.size((10*windowWidth)/100,(3.5*windowHeight)/100);
         b1.mousePressed(insert(rfc_t,uuid_t,cantidad_articulos,nombre_articulos,fecha_t,hora_t,dsmt,r_rfc_t,valores_unitarios,valores_totales));
              
       }
     }
     
     function windowResized()
     {
       resizeCanvas(windowWidth, windowHeight);
     }

function insert(row1,row2,row3,row4,row5,row6,row7,row8,row9,row10) 
{
  
    var url = script_url + "?callback=ctrlq&code=" + row1 + "&carrera=" + row2 + "&e1="+ row3 + "&e2=" + row4 +"&e3=" + row5 + "&e4="+ row6 + "&aula="+ row7 +"&rfc_cliente="+ row8 +"&precio_unitario="+ row9 +"&precio_total="+row10+"&action=insert";

    var request = jQuery.ajax({
      crossDomain: true,
      url: url ,
      method: "GET",
      dataType: "jsonp",
    });
}

function buscar()
{
  if(s1.value() != 'Seleccionar usuario' && con1.value() != '')
  {
      var url = script_url +"?callback=ctrlq&usuario="+ s1.value() +"&pw=" + con1.value() +"&action=login";
      
      var request = jQuery.ajax({
      crossDomain: true,
      url: url ,
      method: "GET",
      dataType: "jsonp",
    });
  }
  else
  {
    alert('Usuario y/o contraseña vacios');
  }
}

function ctrlq(e)
{
  let al = alert(e.result);
  console.log(e.a_nombre);
  console.log(e.c_nombre);
  console.log(e.m_nombre);
  console.log(e.r_cliente);
  console.log(e.c_cliente);
  console.log(e.m_cliente);
  console.log(e.m_cliente);
  console.log(e.d_cantidad);
  if(e.result == 'Esta factura ya se subió' || e.result == '¡Archivo subido correctamente!')
  {
    input.remove();
    b1.remove();
    input = createFileInput(subir);
    input.position((11.5*windowWidth)/100, (17.5*windowHeight)/100);
  }
  else
  {
    grafica_1(chart,e.a_nombre,e.c_nombre);
    grafica_2(chart2,e.r_cliente,e.c_cliente);
    grafica_3(chart3,e.a_nombre,e.m_nombre);
    grafica_4(chart4,e.r_cliente,e.m_cliente);
    grafica_5(chart5,e.d_cantidad);
    grafica_6(chart6,e.c_horas);
  }
  
}

function grafica_1(chart,etiquetas,valores)
{
  chart.data = {
    labels: etiquetas,
    datasets: [{
        barPercentage: 0.5,
        label: 'Unidades vendidas por producto',
        backgroundColor: c1,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        data: valores,
    },],
  };
  chart.update();
}


function grafica_2(chart,etiquetas,valores)
{
  chart.data = {
    labels: etiquetas,
    datasets: [{
        barPercentage: 0.5,
        label: 'Unidades vendidas por cliente',
        backgroundColor: c2,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        data: valores,
    },],
  };
  chart.update();
}


function grafica_3(chart,etiquetas,valores)
{
  chart.data = {
    labels: etiquetas,
    datasets: [{
        barPercentage: 0.5,
        label: 'Monto vendido por producto',
        backgroundColor: c2,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        data: valores,
    },],
  };
  chart.update();
}

function grafica_4(chart,etiquetas,valores)
{
  chart.data = {
    labels: etiquetas,
    datasets: [{
        barPercentage: 0.5,
        label: 'Monto vendido por cliente',
        backgroundColor: c1,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        data: valores,
    },],
  };
  chart.update();
}

function grafica_5(chart,valores)
{
  chart.data = {
    labels: dias_semana,
    datasets: [{
        barPercentage: 0.5,
        label: 'Venta por dia de la semana',
        backgroundColor: c3,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        data: valores,
    },],
  };
  chart.update();
}

function grafica_6(chart,valores)
{
  chart.data = {
    labels: horas,
    datasets: [{
        barPercentage: 0.5,
        label: 'Venta por hora',
        backgroundColor: c4,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        data: valores,
    },],
  };
  chart.update();
}
