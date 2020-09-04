// LUDOK



// Globale Variablen
glb_Lang = "de";    // Anzeigesprache
glb_Organ = "";     // Gewähltes Organ (leer für Noxe)
glb_Noxe = "";      // Gewählte Noxe (leer für Organ)
glb_Zeit = "";      // K - Kurzzeit / L - Langzeit 


function Choose_Zeit(a_zeit) {
// Auswahl a_zeit = K - Kurzzeit / L - Langzeit   
    glb_Zeit = a_zeit;

    ResetAll();

    $('button[id^="btn_Zeit_"]').removeClass('btn_round_zeit_inv');
    $('#btn_Zeit_' + a_zeit).addClass('btn_round_zeit_inv');

    if (glb_Zeit == "K") {
        $('#mnu_Schwefeldioxid').show();
        $('#mnu_Kohlenmonoxid').show();
    } else {
        $('#mnu_Schwefeldioxid').hide();
        $('#mnu_Kohlenmonoxid').hide();
    }
    
    $('#div_Menu_Noxen').fadeIn();
    $('#div_Menu_Sterblichkeit').fadeIn();

    $('#img_mensch_empty').attr("usemap", "#image-map");

//console.log('Choose_Zeit glb_Organ: ' + glb_Organ)
//console.log('Choose_Zeit glb_Noxe: ' + glb_Noxe)

    // Gleich Effekte anzeigen, falls Organ oder Noxe gewählt
    if (glb_Organ != "") {Show_Organ(glb_Organ);}
    if (glb_Noxe != "") {Show_Noxe_Zeit(glb_Noxe);}
}


function Draw_Results(a_data, a_noxe, a_noxe_zeit, a_organ) {
// Array a_data ausgeben
    var str = "";
    var strNoxe_Zeit = "Langzeit";

    if (a_noxe_zeit == "K") {
        strNoxe_Zeit = "Kurzzeit";
    }

    $('#div_Results_' + a_organ).hide();
    $('#img_Organ_' + a_organ).hide();

    if (a_data.length > 0) {

        str += '<div class="div_Results_Header"><img src="graph/ic_info.png" class="ic_info" id="i_eff_' + a_organ + '" title=""> ' + Get_Organ(a_organ, glb_Lang) + '</div>';
        
        str += '<table>';   

        for (var i=0; i<a_data.length; i++) {
            
            str += '<tr>';
                    //'<td>' + a_data[i].noxe + '</td>' +
                    //'<td>' + a_data[i].noxe_zeit + '</td>' +
                    //'<td>' + a_data[i].organ + '</td>' +
            str += '<td class="td_effekt">' + Get_Effekt(a_data[i].effekt, glb_Lang) + '</td>';
                    //'<td>' + a_data[i]["organ_"+glb_Lang] + '</td>' +
                    //'<td>' + a_data[i]["effekt_"+glb_Lang] + '</td>' 
                    
            for (var j = 1; j < Get_Noxe_ID(a_noxe); j++) {
                str += '<td class="td_effekt_typ"></td>';
            }

            str += '<td class="td_effekt_typ"><img src="graph/ic_' + a_data[i].effekt_typ + '_' + a_noxe + '.png" width="14px"></td>';
            
            for (var j =  Get_Noxe_ID(a_noxe); j < 5; j++) {
                str += '<td class="td_effekt_typ"></td>';
            }

            str += '</tr>';

        } // for

        str += '</table>';

//console.log('Draw_Results Organ: ' + a_organ);

        $('#div_Results_' + a_organ).html(str);
        $('#div_Results_' + a_organ).fadeIn();
        $('#div_Legend').fadeIn();
        $('#div_Menu_Headline').fadeIn();

        if ((a_organ != "Sterblichkeit") && (a_organ != "Notfälle")) {
            $('#img_Organ_' + a_organ).fadeIn();
        }
        
        $("#i_eff_" + a_organ).tooltip({content: Get_Tooltip(a_organ, glb_Lang)});
        
    } else {
        
    }// if (a_data.length > 0)

    // Button aktivieren
    $('button[id^="btn_"]').removeClass(['bg_Feinstaub_invert', 'bg_Ozon_invert', 'bg_Stickstoffdioxid_invert', 'bg_Schwefeldioxid_invert', 'bg_Kohlenmonoxid_invert']);
    $('#btn_' + a_noxe).addClass('bg_' + a_noxe + '_invert');


} // Draw_Results



function Draw_Results_Organ(a_data) {
// Array a_data ausgeben
    var str = "";
    var str_row = "";
    var a_noxe = "Feinstaub";
    var a_noxe_zeit = "L";
    var objEffekt;
    var arrEffekte = ["Feinstaub", "Ozon", "Stickstoffdioxid", "Schwefeldioxid", "Kohlenmonoxid"];
    var anzEffekte = 0;
    var anzRows = 0;

    if (a_data.length > 0) {

        str += '<div class="div_Results_Header"><img src="graph/ic_info.png" class="ic_info" id="i_eff_' + a_data[0].organ + '" title=""> ' + Get_Organ(a_data[0].organ, glb_Lang) + '</div>';
        
        str += '<table>';   

        for (var i=0; i<a_data.length; i++) {
 
            anzEffekte = 0;

            str_row = '<tr>';

            str_row += '<td class="td_effekt">' + Get_Effekt(a_data[i].effekt_de, glb_Lang) + '</td>';

            for (var j=0; j<arrEffekte.length; j++) {
                objEffekt = Get_Organ_Effekt_Noxe_Zeit(a_data[i].organ, a_data[i].effekt_de, arrEffekte[j], glb_Zeit);
                
                str_row += '<td class="td_effekt_typ">';
                if (objEffekt.length > 0) {
                    anzEffekte = anzEffekte + 1;
                    str_row += '<img src="graph/ic_' + objEffekt[0].effekt_typ + '_' + objEffekt[0].noxe + '.png" width="14px"></img>';
                }
                str_row += '</td>';
            }

            str_row += '</tr>';

            if (anzEffekte > 0) {
                str += str_row;
                anzRows = anzRows + 1;
            }
        } // for

        if (anzRows == 0) {
            str += '<tr><td class="td_effekt">(Derzeit keine Effekte gesichert)</td></tr>';
        }
        
        str += '</table>';

        $('#div_Results_' + a_noxe + '_' + a_noxe_zeit).html(str);
        $('#div_Results_' + a_noxe + '_' + a_noxe_zeit).fadeIn();
        $('#div_Legend').fadeIn();

        $("#i_eff_" + a_data[0].organ).tooltip({content: Get_Tooltip(a_data[0].organ, glb_Lang)});

    } else {
        
    }// if (a_data.length > 0)

    

} // Draw_Results_Organ


function _Draw_Results_Organ(a_data) {
    // Array a_data ausgeben
        var str = "";
        var a_noxe = "Feinstaub";
        var a_noxe_zeit = "L";
        var objEffekt;
        var arrEffekte = ["Feinstaub", "Ozon", "Stickstoffdioxid", "Schwefeldioxid", "Kohlenmonoxid"];
    
        if (a_data.length > 0) {
    
            str += '<div class="div_Results_Header"><img src="graph/ic_info.png" class="ic_info" id="i_eff_' + a_data[0].organ + '" title=""> ' + Get_Organ(a_data[0].organ, glb_Lang) + '</div>';
            
            str += '<table>';   
    
            for (var i=0; i<a_data.length; i++) {
           
                str += '<tr>';
    
                str += '<td class="td_effekt">' + Get_Effekt(a_data[i].effekt_de, glb_Lang) + '</td>';
    
                for (var j=0; j<arrEffekte.length; j++) {
                    objEffekt = Get_Organ_Effekt_Noxe_Zeit(a_data[i].organ, a_data[i].effekt_de, arrEffekte[j], glb_Zeit);
                    
                    str += '<td class="td_effekt_typ">';
                    if (objEffekt.length > 0) {
                        str += '<img src="graph/ic_' + objEffekt[0].effekt_typ + '_' + objEffekt[0].noxe + '.png" width="14px"></img>';
                    }
                    str += '</td>';
                }
    
                str += '</tr>';
    
            } // for
    
            str += '</table>';
    
            $('#div_Results_' + a_noxe + '_' + a_noxe_zeit).html(str);
            $('#div_Results_' + a_noxe + '_' + a_noxe_zeit).fadeIn();
            $('#div_Legend').fadeIn();
    
            $("#i_eff_" + a_data[0].organ).tooltip({content: Get_Tooltip(a_data[0].organ, glb_Lang)});
    
        } else {
            
        }// if (a_data.length > 0)
    
        
    
    } // Draw_Results_Organ


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
//console.log("Filter_Noxe_Zeit: "+ a_noxe + " / " + a_noxe_zeit);

    var jsonData = $(arrMatrix).filter(function (i,n){return n.noxe_zeit==a_noxe_zeit});
    jsonData = $(jsonData).filter(function (i,n){return n.noxe==a_noxe});

    _Draw_Results(jsonData);

} // Filter_Noxe_Zeit


function Filter_Organ_Noxe_Zeit(a_organ, a_noxe, a_noxe_zeit) {
// Alle Einträge aus json_matrix.arrMatrix mit organ = a_organ, noxe = a_noxe und noxe_zeit = a_noxe_zeit
//console.log("Filter_Organ_Noxe_Zeit: "+ a_organ + " / " + a_noxe);

    var jsonData = $(arrMatrix).filter(function (i,n){return n.noxe_zeit==a_noxe_zeit});
    jsonData = $(jsonData).filter(function (i,n){return n.noxe==a_noxe});
    jsonData = $(jsonData).filter(function (i,n){return n.organ==a_organ});

    Draw_Results_Organ(jsonData, a_noxe, a_noxe_zeit, a_organ);
    
} // Filter_Organ_Noxe_Zeit


function Filter_Noxe_Zeit_Organ(a_noxe, a_noxe_zeit, a_organ) {
// Alle Einträge aus json_matrix.arrMatrix mit noxe = a_noxe und noxe_zeit = a_noxe_zeit
//console.log("Filter_Noxe_Zeit_Organ: "+ a_noxe + " / " + a_noxe_zeit);

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

console.log("Filter_Organ_Zeit: " + a_organ + ' - jsonData.length: ' + jsonData.length + ' - jsonData: ' + jsonData);
console.log(jsonData);
    Draw_Results_Organ(jsonData, 'Ozon', glb_Zeit, a_organ);
    
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

//console.log("Get_Organ: " + a_lang + ', ' + a_organ + ' - jsonData.length: ' + jsonData.length);

    if (jsonData.length == 0) {
        console.log("Get_Organ not found: " + a_lang + ', ' + a_organ);
    }

    return jsonData[0]["organ_"+a_lang];

} // Get_Organ


function Get_Organ_Effekte(a_organ) {
// Alle Einträge aus json_matrix.arrEffekte mit organ = a_organ

    var jsonData = $(arrEffekte).filter(function (i,n){return n.organ==a_organ});
//console.log(jsonData);
    Draw_Results_Organ(jsonData);

} // Get_Organ_Effekte


function Get_Organ_Effekt_Noxe_Zeit(a_organ, a_effekt, a_noxe, a_noxe_zeit) {
// Alle passenden Einträge aus json_matrix.arrMatrix 
//console.log("Filter_Noxe_Zeit_Organ: "+ a_noxe + " / " + a_noxe_zeit);

    var jsonData = $(arrMatrix).filter(function (i,n){return n.noxe_zeit==a_noxe_zeit});
    jsonData = $(jsonData).filter(function (i,n){return n.noxe==a_noxe});
    jsonData = $(jsonData).filter(function (i,n){return n.effekt==a_effekt});
    jsonData = $(jsonData).filter(function (i,n){return n.organ==a_organ});
    
//console.log(jsonData);

    return jsonData;
    
} // Get_Organ_Effekt_Noxe_Zeit


function Get_Noxe(a_noxe, a_lang) {
// Noxen-Bezeichnung in Sprache a_lang

    var jsonData = $(arrNoxen).filter(function (i,n){return n.noxe_de==a_noxe});

//console.log("Get_Noxe: " + a_lang + ', ' + a_noxe + ' - jsonData.length: ' + jsonData.length);

    if (jsonData.length == 0) {
        console.log("Get_Noxe not found: " + a_lang + ', ' + a_noxe);
    }

    return jsonData[0]["noxe_"+a_lang];

} // Get_Noxe


function Get_Noxe_ID(a_noxe) {
// Noxen-ID der a_noxe ermitteln

    var jsonData = $(arrNoxen).filter(function (i,n){return n.noxe_de==a_noxe});

//console.log("Get_Noxe_ID: " +  a_noxe + ' - jsonData.length: ' + jsonData.length);

    return jsonData[0]["id"];

} // Get_Noxe


function Get_Popuptext(a_parent, a_lang) {
// Popup-Text zum Item a_parent in Sprache a_lang

    var jsonData = $(arrPopups).filter(function (i,n){return n.parent==a_parent});

    if (jsonData.length == 0) {
        console.log("Get_Popuptext not found: " + a_lang + ', ' + a_parent);
    }

    return jsonData[0]["text_"+a_lang];

} // Get_Popuptext


function Get_Tooltip(a_parent, a_lang) {
// Popup-Text zum Item a_parent in Sprache a_lang

    var jsonData = $(arrInfos).filter(function (i,n){return n.parent==a_parent});

    if (jsonData.length == 0) {
        console.log("Get_Tooltip not found: " + a_lang + ', ' + a_parent);
    }

    return jsonData[0]["text_"+a_lang];

} // Get_Tooltip


function Hide_imgOrgan(a_organ) {
    if (glb_Organ != a_organ) {
        $("#img_Organ_" + a_organ).hide();
    }
}


function ResetAll() {
    //glb_Organ = "";

    $('div[id^="div_Results_"]').html('');
    $('div[id^="div_Results_"]').hide();
    $('img[id^="img_Organ_"]').hide();

    $('#btn_Sterblichkeit').removeClass('bg_Zusatz_invert');
    $('#btn_Notfälle').removeClass('bg_Zusatz_invert');

    $('#div_Legend').hide();
    $('#div_Menu_Headline').hide();

    // Buttons deaktivieren
    $('button[id^="btn_"]').removeClass(['bg_Feinstaub_invert', 'bg_Ozon_invert', 'bg_Stickstoffdioxid_invert', 'bg_Schwefeldioxid_invert', 'bg_Kohlenmonoxid_invert']);
}

/*

// N O T   I N   U S E

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
*/




function Show_Popup(a_parent) {
// Popup anzeigen zum Item a_parent    
    $('#div_Popup_modal').html(Get_Popuptext(a_parent, glb_Lang));
    $('#div_Popup_modal').modal();
}


function _Show_Matrix() {
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



function _Show_Matrix_export() {
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



function Show_Organ(a_organ) {
// Zeige Einträge mit organ = a_organ
    //console.log("Show_Organ: "+ a_organ);
    
    ResetAll();
    $('#div_Intro').hide();

    glb_Organ = a_organ;
    glb_Noxe = ""; 

    $('#img_Organ_' + a_organ).show();

    $('#btn_' + a_organ).addClass('bg_Zusatz_invert');

    Get_Organ_Effekte(a_organ);

} // Show_Organ


function Show_Noxe_Zeit(a_noxe, a_noxe_zeit) {
// Zeige Einträge mit noxe = a_noxe und noxe_zeit = a_noxe_zeit

    a_noxe_zeit = glb_Zeit;
    glb_Organ = "";
    glb_Noxe = a_noxe; 

//console.log("Show_Noxe_Zeit: "+ a_noxe + " / " + a_noxe_zeit);

    ResetAll();
    $('#div_Intro').hide();
    
    Filter_Noxe_Zeit_Organ(a_noxe, a_noxe_zeit, 'Atemwege'); 
    Filter_Noxe_Zeit_Organ(a_noxe, a_noxe_zeit, 'Herz');
    Filter_Noxe_Zeit_Organ(a_noxe, a_noxe_zeit, 'Nervensystem');
    Filter_Noxe_Zeit_Organ(a_noxe, a_noxe_zeit, 'Stoffwechsel');

    Filter_Noxe_Zeit_Organ(a_noxe, a_noxe_zeit, 'Sterblichkeit');
    Filter_Noxe_Zeit_Organ(a_noxe, a_noxe_zeit, 'Notfälle');

} // Show_Noxe_Zeit
