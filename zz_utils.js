// LUDOK



// Globale Variablen
glb_Lang = "de";    // Anzeigesprache


function Draw_Results(a_data, a_noxe, a_noxe_zeit, a_organ) {
// Array a_data ausgeben
    var str = "";
    
    $('#div_Results_' + a_organ).hide();
    $('#img_Organ_' + a_organ).hide();

    if (a_data.length > 0) {

        str += '<div class="div_Results_Header bg_'+ a_noxe + '">' + Get_Organ(a_organ, glb_Lang) + '</div>';
        //str += '<div class="div_Results_Header bg_'+ a_noxe + '">' + a_organ + '</div>';
        str += '<table>';   

        for (var i=0; i<a_data.length; i++) {
            
            str += '<tr>' +
                    //'<td>' + a_data[i].noxe + '</td>' +
                    //'<td>' + a_data[i].noxe_zeit + '</td>' +
                    //'<td>' + a_data[i].organ + '</td>' +
                    '<td>' + Get_Effekt(a_data[i].effekt, glb_Lang) + '</td>' +
                    //'<td>' + a_data[i]["organ_"+glb_Lang] + '</td>' +
                    //'<td>' + a_data[i]["effekt_"+glb_Lang] + '</td>' +
                    '<td class="td_effekt_typ">' + a_data[i].effekt_typ;
            
            if (typeof a_data[i].effekt_zusatz_de !== "undefined") {
                str += " " + a_data[i]["effekt_zusatz_"+glb_Lang];
            }

            str += '</td>' +
            '</tr>';

        } // for

        str += '</table>';

console.log('Draw_Results Organ: ' + a_organ);

        $('#div_Results_' + a_organ).html(str);
        $('#div_Results_' + a_organ).fadeIn();
        $('#img_Organ_' + a_organ).fadeIn();

    } else {
        
    }// if (a_data.length > 0)

    $('div[id^="btn_"]').removeClass(['bg_Feinstaub_invert', 'bg_Ozon_invert', 'bg_Stickstoffdioxid_invert', 'bg_Schwefeldioxid_invert', 'bg_Kohlenmonoxid_invert']);
    $('#btn_' + a_noxe_zeit + '_' + a_noxe).addClass('bg_' + a_noxe + '_invert');

    /*
    $('div[id^="btn_"]').removeClass('btn_chosen');
    $('#btn_' + a_noxe_zeit + '_'+ a_noxe).addClass('btn_chosen');
    */
} // Draw_Results


function _Draw_Results(a_data) {
// Array a_data ausgeben
    var str = "";
    
    str = '<table>';

    for (var i=0; i<a_data.length; i++) {
        
        str += '<tr>' +
                '<td>' + a_data[i].noxe + '</td>' +
                '<td>' + a_data[i].noxe_zeit + '</td>' +
                '<td>' + a_data[i].organ + '</td>' +
                '<td>' + Get_Effekt(a_data[i].effekt, glb_Lang) + '</td>' +
                //'<td>' + a_data[i]["organ_"+glb_Lang] + '</td>' +
                //'<td>' + a_data[i]["effekt_"+glb_Lang] + '</td>' +
                '<td>' + a_data[i].effekt_typ;
        
        if (typeof a_data[i].effekt_zusatz_de !== "undefined") {
            str += " " + a_data[i]["effekt_zusatz_"+glb_Lang];
        }

        str += '</td>' +
        '</tr>';
    }

    str += '</table>';

    $('#div_Results').html(str);
} // Draw_Results





function Filter_Noxe(a_noxe) {
// Alle Einträge aus json_matrix.arrMatrix mit noxe = a_noxe

    var jsonData = $(arrMatrix).filter(function (i,n){return n.noxe==a_noxe});

    var str = '<table>';

    for (var i=0; i<jsonData.length; i++) {
        //alert(as[i].name +"         "+as[i].website);
        str += '<tr>' +
        '<td>' + jsonData[i].noxe + '</td>' +
        '<td>' + jsonData[i].noxe_zeit + '</td>' +
        '<td>' + jsonData[i].organ + '</td>' +
        '<td>' + jsonData[i].effekt + '</td>' +
        '<td>' + jsonData[i].effekt_typ;
        
        if (jsonData[i].effekt_zusatz_de != "") {
            str += " " + jsonData[i].effekt_zusatz_de;
        }

        str += '</td>' +
        '</tr>';
    }

    str += '</table>';

    $('#div_Results').html(str);

} // Filter_Noxe


function Filter_Noxe_Zeit(a_noxe, a_noxe_zeit) {
// Alle Einträge aus json_matrix.arrMatrix mit noxe = a_noxe und noxe_zeit = a_noxe_zeit
console.log("Filter_Noxe_Zeit: "+ a_noxe + " / " + a_noxe_zeit);

    var jsonData = $(arrMatrix).filter(function (i,n){return n.noxe_zeit==a_noxe_zeit});
    jsonData = $(jsonData).filter(function (i,n){return n.noxe==a_noxe});

    _Draw_Results(jsonData);

} // Filter_Noxe_Zeit


function Filter_Noxe_Zeit_Organ(a_noxe, a_noxe_zeit, a_organ) {
// Alle Einträge aus json_matrix.arrMatrix mit noxe = a_noxe und noxe_zeit = a_noxe_zeit
console.log("Filter_Noxe_Zeit_Organ: "+ a_noxe + " / " + a_noxe_zeit);

    var jsonData = $(arrMatrix).filter(function (i,n){return n.noxe_zeit==a_noxe_zeit});
    jsonData = $(jsonData).filter(function (i,n){return n.noxe==a_noxe});
    jsonData = $(jsonData).filter(function (i,n){return n.organ==a_organ});

    Draw_Results(jsonData, a_noxe, a_noxe_zeit, a_organ);
    
} // Filter_Noxe_Zeit_Organ


function Filter_Organ(a_organ) {
// Alle Einträge aus json_matrix.arrMatrix mit organ = a_organ

    var jsonData = $(arrMatrix).filter(function (i,n){return n.organ==a_organ});

    Draw_Results(jsonData);

} // Filter_Organ


function Filter_Organ_Zeit(a_organ, a_noxe_zeit) {
// Alle Einträge aus json_matrix.arrMatrix mit organ = a_organ und noxe_zeit = a_noxe_zeit

    var jsonData = $(arrMatrix).filter(function (i,n){return n.noxe_zeit==a_noxe_zeit});
    jsonData = $(jsonData).filter(function (i,n){return n.organ==a_organ});

    Draw_Results(jsonData);
    
} // Filter_Organ_Zeit


function Get_Effekt(a_effekt, a_lang) {
// Effekt-Bezeichnung in Sprache a_lang

    var jsonData = $(arrEffekte).filter(function (i,n){return n.effekt_de==a_effekt});

if (jsonData.length == 0) {
    console.log("Get_Effekt not found: " + a_lang + ', ' + a_effekt);
}

    return jsonData[0]["effekt_"+a_lang];

} // Get_Effekt


function Get_Organ(a_organ, a_lang) {
// Organ-Bezeichnung in Sprache a_lang

    var jsonData = $(arrOrgane).filter(function (i,n){return n.organ==a_organ});

if (jsonData.length == 0) {
    console.log("Get_Organ not found: " + a_lang + ', ' + a_organ);
}

    return jsonData[0]["organ_"+a_lang];

} // Get_Effekt



function Select_Noxe_Zeit(a_noxe_zeit) {
// Auswahl noxe_zeit = a_noxe_zeit

    var str = "";

    if (a_noxe_zeit == "K") {
        str = "<b>Kurzzeit</b><br>";
    } else {
        str = "<b>Langzeit</b><br>";
    }

    //str += "<a href=\"javascript:Filter_Noxe_Zeit(&quot;Feinstaub PM2.5&quot;, &quot;" + a_noxe_zeit + "&quot;)\">Feinstaub PM2.5</a><br>" +
    //       "<a href=\"javascript:Filter_Noxe_Zeit(&quot;Ozon&quot;, &quot;" + a_noxe_zeit + "&quot;)\">Ozon</a>";

    for (var i=0; i<arrNoxen.length; i++) {

        str += "<a href=\"javascript:Filter_Noxe_Zeit(&quot;" + arrNoxen[i].noxe_de + "&quot;, &quot;" + a_noxe_zeit + "&quot;)\">" + arrNoxen[i]["noxe_"+glb_Lang] + "</a><br>";
    }

    $('#div_Auswahl_Noxe').html(str);

} // Select_Noxe_Zeit


function Select_Organ_Zeit(a_noxe_zeit) {
// Auswahl organ_zeit = a_noxe_zeit

    var str = "";

    if (a_noxe_zeit == "K") {
        str = "<b>Kurzzeit</b><br>";
    } else {
        str = "<b>Langzeit</b><br>";
    }

    for (var i=0; i<arrOrgane.length; i++) {

        str += "<a href=\"javascript:Filter_Organ_Zeit(&quot;" + arrOrgane[i].organ_de + "&quot;, &quot;" + a_noxe_zeit + "&quot;)\">" + arrOrgane[i]["organ_"+glb_Lang] + "</a><br>";
    }

    $('#div_Auswahl_Organ').html(str);

} // Select_Organ_Zeit



function Show_Matrix() {
// TEST: gesamte json_matrix.arrMatrix ausgeben

    var jsonData = arrMatrix;
    //jsonData = $(arrMatrix).filter(function (i,n){return n.organ_effekt=='Sterblichkeit'});
    //var str = JSON.stringify(arrMatrix[0], null, 2);
    //var jsonData = JSON.parse(arrMatrix[0]);
    //var str = 'json data: ';

    //str += jsonData.Langzeit;
    var str = '<table>';

    for (var i=0; i<jsonData.length; i++) {
        //alert(as[i].name +"         "+as[i].website);
        str += '<tr>' +
        '<td>' + jsonData[i].noxe + '</td>' +
        '<td>' + jsonData[i].noxe_zeit + '</td>' +
        '<td>' + jsonData[i].organ + '</td>' +
        '<td>' + jsonData[i].effekt + '</td>' +
        '<td>' + jsonData[i].effekt_typ + '</td>' +
        '</tr>';
    }
/*
    jsonData.forEach(function(item){
        str += '<tr>' +
                '<td>' + item.organ_effekt + '</td>' +
                '<td>' + item.Langzeit + '</td>' +
                '</tr>';
        });
*/
    str += '</table>';


    $('#div_Results').html(str);

} // Show_Matrix



function Show_Matrix_export() {
// json_matrix.arrMatrix_export ausgeben
// N O T   I N   U S E

            var jsonData = arrMatrix;
            jsonData = $(arrMatrix).filter(function (i,n){return n.organ_effekt=='Sterblichkeit'});
            //var str = JSON.stringify(arrMatrix[0], null, 2);
            //var jsonData = JSON.parse(arrMatrix[0]);
            //var str = 'json data: ';

            //str += jsonData.Langzeit;
            var str = '<table>';

            for (var i=0; i<jsonData.length; i++) {
                //alert(as[i].name +"         "+as[i].website);
                str += '<tr>' +
                '<td>' + jsonData[i].organ_effekt + '</td>' +
                '<td>' + jsonData[i].Langzeit + '</td>' +
                '</tr>';
            }
/*
            jsonData.forEach(function(item){
                str += '<tr>' +
                        '<td>' + item.organ_effekt + '</td>' +
                        '<td>' + item.Langzeit + '</td>' +
                        '</tr>';
                });
*/
            str += '</table>';


            

            $('#div_Results').html(str);


} // Show_Matrix_export


function Show_Noxe_Zeit(a_noxe, a_noxe_zeit) {
// Zeige Einträge mit noxe = a_noxe und noxe_zeit = a_noxe_zeit
    console.log("Show_Noxe_Zeit: "+ a_noxe + " / " + a_noxe_zeit);
    
    Filter_Noxe_Zeit_Organ(a_noxe, a_noxe_zeit, 'Atemwege'); 
    Filter_Noxe_Zeit_Organ(a_noxe, a_noxe_zeit, 'Herz');
    Filter_Noxe_Zeit_Organ(a_noxe, a_noxe_zeit, 'Nervensystem');
    Filter_Noxe_Zeit_Organ(a_noxe, a_noxe_zeit, 'Stoffwechsel');

    Filter_Noxe_Zeit_Organ(a_noxe, a_noxe_zeit, 'Sterblichkeit');
    Filter_Noxe_Zeit_Organ(a_noxe, a_noxe_zeit, 'Notfälle');

} // Filter_Noxe_Zeit






function DB_Read_Folder_Slides(a_folder) {
// Slides zum Folder a_folder aus DB einlesen (mit AJAX)
// N O T   I N   U S E

    $.ajax({
        url: "db_read_folder_slides.php",
        dataType: 'text',
        async: true,
        data: {a_folder: a_folder},
        cache: false,

        success: function(data){

            var jsonSD = JSON.parse(data.replace(/\r\n/g,"\\r\\n"));
            var str = '';

            jsonSD.forEach(function(item){
                str += '<div class="div_ListEntry" id="div_Folder_Slide_' + item.auto_id + '"' +
                        'data-slide_id="' + item.slide_id + '">' + //'" data-title="' + item.title + '" data-slideno="' + item.slideno + '">' +
                            '<a href="ppt/' + item.kit_id + '/' + item.filename + '">' + item.kit_title + '</a><br>' +
                            //'<b>' + item.kit_title + '</b><br>' +
                            'Slide ' + item.slideno + ': ' + item.title + '<br>' +
                            '<a href="javascript:DB_Save_Folder_Slide_Delete(' + item.auto_id + ')">Remove slide from folder</a>' +
                       '</div>';
              });

            str += '<div id="div_SlidesNewlyAdded" class="hidden_ak margin_vertical">Newly added slides:</div>';
            
            $('#div_PageContent').html(str);
        },

        error: function(jqXHR, textStatus, ex) {
            AJAX_Error(jqXHR, textStatus, ex);
        }

    }); // $.ajax

} // DB_Read_Folder_Slides