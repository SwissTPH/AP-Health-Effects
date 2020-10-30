// LUDOK Interaktive Grafik
//
// Version 1.7, 29.10.2020
//
// Dr. Carl GmbH 2020


// Globale Variablen
glb_Lang = "de";    // Anzeigesprache
glb_Organ = "";     // Gewähltes Organ (leer für Noxe)
glb_Noxe = "";      // Gewählte Noxe (leer für Organ)
glb_Zeit = "";      // K - Kurzzeit / L - Langzeit 

glb_HintergrundInfo = '';       // Angezeigte HintergrundInfo (mobile only)

glb_isMobile = false;           // Bin ich mobile oder desktop?
glb_PCID = '.div_PageContent '; // Page Content ID (für mobile/desktop)



function Check_mobile() {
// Bin ich mobile...?  
// -> Hauptanzeigebereich div_PageContent[_mobile] in glb_PCID speichern 
    //if ($('.div_PageContent').is(":visible") == true) {
    if ($(window).width() > 1023) {
        glb_PCID = '.div_PageContent ';
        glb_isMobile = false;
    } else {
        glb_PCID = '.div_PageContent_mobile ';
        glb_isMobile = true;
    }
//console.log('Check_mobile glb_isMobile: ' + glb_isMobile + ' width: ' + $(window).width());
}


function Choose_Zeit(a_zeit, a_mobile) {
// Auswahl a_zeit = K - Kurzzeit / L - Langzeit   
    glb_Zeit = a_zeit;

    ResetAll();

//console.log('Choose_Zeit glb_PCID: ' + glb_PCID);

    $('button[id^="btn_Zeit_"]').removeClass('btn_round_zeit_inv');
    $(glb_PCID + '#btn_Zeit_' + a_zeit).addClass('btn_round_zeit_inv');

    if (glb_Zeit == "K") {
        $(glb_PCID + '#mnu_Schwefeldioxid').show();
        $(glb_PCID + '#mnu_Kohlenmonoxid').show();
    } else {
        $(glb_PCID + '#mnu_Schwefeldioxid').hide();
        $(glb_PCID + '#mnu_Kohlenmonoxid').hide();
    }
    
    $(glb_PCID + '#div_Menu_Noxen').fadeIn();
    $(glb_PCID + '#div_Menu_Sterblichkeit').fadeIn();

    $('#img_mensch_empty').attr("usemap", "#image-map");

//console.log('Choose_Zeit glb_Organ: ' + glb_Organ)
//console.log('Choose_Zeit glb_Noxe: ' + glb_Noxe)

    // Gleich Effekte anzeigen, falls Organ oder Noxe gewählt
    if (glb_Organ != "") {Show_Organ(glb_Organ);}
    if (glb_Noxe != "") {Show_Noxe_Zeit(glb_Noxe);}

    Msg_DocHeight();

} // Choose_Zeit


function Draw_BtnHintergrundInfo(a_topic, a_is_mobile) {
// Button Menü unten - a_topic =  "Hintergrund", etc.
    var fkt = "Show_Popup";
    var id ="";
    var txt = Get_UI('btn_' + a_topic, glb_Lang);

    if (a_is_mobile == true) {
        fkt = "Show_Popup_mobile";
        id = 'id="btn_Zusatz_' + a_topic + '"';
        txt = txt.replace('<br>', '');
    }
    echo('<button class="btn_round" ' + id + ' onclick="' + fkt + '(\'' + a_topic + '\')">' + txt + '</button>'); 

} // Draw_BtnHintergrundInfo


function Draw_BtnNoxe(a_noxe, a_is_mobile) {
// Button Menü oben - a_noxe =  "Feinstaub", "Ozon", etc.
    var txt = Get_UI('btn_' + a_noxe, glb_Lang);

    if (a_is_mobile == true) {
        txt = txt.replace('<br>', '');
    }

    echo('<div class="div_Menu_Noxe" id="mnu_' + a_noxe + '">');
        echo('<img src="graph/ic_info.png" class="ic_info ic_info_top_small" id="i_' + a_noxe + '" title=""> ');
        echo('<button class="btn_round_small bg_' + a_noxe + '" onclick="Show_Noxe(\'' + a_noxe + '\')" id="btn_' + a_noxe + '">' + txt + '</button>');
    echo('</div>'); 
     
} // Draw_BtnNoxe


function Draw_BtnOrgan(a_organ, a_is_mobile) {
// Button Menü oben - a_noxe =  "Feinstaub", "Ozon", etc.
    var txt = Get_UI('btn_' + a_organ, glb_Lang);

    if (a_is_mobile == true) {
        txt = txt.replace('<br>', '');
    }

    echo('<div class="div_Menu_Noxe" id="mnu_' + a_organ + '">');
        echo('<img src="graph/ic_info.png" class="ic_info ic_info_top_small" id="i_' + a_organ + '" title=""> ');
        echo('<button class="btn_round_small bg_Zusatz" onclick="Show_Organ(\'' + a_organ + '\')" id="btn_' + a_organ + '">' + txt + '</button>');
    echo('</div>'); 
     
} // Draw_BtnNoxe


function Draw_IntroText() {
// Intro-Text
    echo('<div class="div_Intro margin_bottom" id="div_Intro">');
        if (glb_isMobile == false) {
            echo('<br><br>');
        }
        echo(Get_UI('txt_Intro', glb_Lang));
    echo('</div>');    
} // Draw_IntroText


function Draw_Legende() {
// Legende Kausalität
    echo('<div class="div_Legend" id="div_Legend">');
        echo(Get_UI('leg_Kausalitaet', glb_Lang) + ': ');
        echo('<img src="graph/ic_C.png" width="14px"> ' + Get_UI('leg_ursaechlich', glb_Lang) + ' <img src="graph/ic_info.png" class="ic_info" id="i_causally" title=""> &nbsp;');
        echo('<img src="graph/ic_L.png" width="14px"> ' + Get_UI('leg_wahrscheinlich', glb_Lang) + ' <img src="graph/ic_info.png" class="ic_info" id="i_likely" title="">'); 
    echo('</div>');
} // Draw_Legende


function Draw_Results(a_data, a_noxe, a_noxe_zeit, a_organ) {
// Array a_data ausgeben
    var str = "";
    var strNoxe_Zeit = "Langzeit";

    if (a_noxe_zeit == "K") {
        strNoxe_Zeit = "Kurzzeit";
    }

    $(glb_PCID + '#div_Results_' + a_organ).hide();
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
         
            if (glb_isMobile == false) {
                for (var j = 1; j < Get_Noxe_ID(a_noxe); j++) {
                    str += '<td class="td_effekt_typ"></td>';
                }
            }

            str += '<td class="td_effekt_typ"><img src="graph/ic_' + a_data[i].effekt_typ + '_' + a_noxe + '.png" width="14px"></td>';
            
            if (glb_isMobile == false) {
                for (var j =  Get_Noxe_ID(a_noxe); j < 5; j++) {
                    str += '<td class="td_effekt_typ"></td>';
                }
            }

            str += '</tr>';

        } // for

        str += '</table>';

//console.log('Draw_Results Organ: ' + a_organ);


        $(glb_PCID + '#div_Results_' + a_organ).html(str);
        $(glb_PCID + '#div_Results_' + a_organ).fadeIn();
        $(glb_PCID + '#div_Legend').fadeIn();
        $(glb_PCID + '#div_Menu_Headline').fadeIn();

        //if ((a_organ != "Sterblichkeit") && (a_organ != "Notfaelle")) {
            $('#img_Organ_' + a_organ).fadeIn();
        //}
        
        $("#i_eff_" + a_organ).tooltip({content: Get_Tooltip(a_organ, glb_Lang)});
        
    } else {
        
    }// if (a_data.length > 0)

    // mobile: div_Results unter Button schieben
    if (glb_isMobile == true) {
        $(glb_PCID + ".div_Results").appendTo(glb_PCID + "#mnu_" + a_noxe);
    }

    // Button aktivieren
    $('button[id^="btn_"]').removeClass(['bg_Feinstaub_invert', 'bg_Ozon_invert', 'bg_Stickstoffdioxid_invert', 'bg_Schwefeldioxid_invert', 'bg_Kohlenmonoxid_invert']);
    $(glb_PCID + '#btn_' + a_noxe).addClass('bg_' + a_noxe + '_invert');


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
            str_row += '<td class="td_effekt_typ left">';

            for (var j=0; j<arrEffekte.length; j++) {
                objEffekt = Get_Organ_Effekt_Noxe_Zeit(a_data[i].organ, a_data[i].effekt_de, arrEffekte[j], glb_Zeit);
                
                if (glb_isMobile == false) {
                    str_row += '<td class="td_effekt_typ">';
                }

                if (objEffekt.length > 0) {
                    anzEffekte = anzEffekte + 1;
                    str_row += '<img src="graph/ic_' + objEffekt[0].effekt_typ + '_' + objEffekt[0].noxe + '.png" width="14px"></img>&nbsp;';
                }
                
                if (glb_isMobile == false) {
                    str_row += '</td>';
                }
            }
            str_row += '</td>';
            str_row += '</tr>';

            if (anzEffekte > 0) {
                str += str_row;
                anzRows = anzRows + 1;
            }
        } // for

        if (anzRows == 0) {
            str += '<tr><td class="td_effekt">(' + Get_UI('txt_no_effects', glb_Lang) + ')</td></tr>';
        }
        
        str += '</table>';

        $(glb_PCID + '#div_Results_' + a_data[0].organ).html(str);
        $(glb_PCID + '#div_Results_' + a_data[0].organ).fadeIn();
        //$(glb_PCID + '#div_Results_' + a_noxe + '_' + a_noxe_zeit).html(str);
        //$(glb_PCID + '#div_Results_' + a_noxe + '_' + a_noxe_zeit).fadeIn();
        $(glb_PCID + '#div_Legend').fadeIn();

        $(glb_PCID + "#i_eff_" + a_data[0].organ).tooltip({content: Get_Tooltip(a_data[0].organ, glb_Lang)});

        // mobile: div_Results unter Button schieben
        if (glb_isMobile == true) {
            $(glb_PCID + ".div_Results").appendTo(glb_PCID + "#mnu_" + a_data[0].organ);
        }

    } else {
        
    }// if (a_data.length > 0)

} // Draw_Results_Organ


function echo(aText) {
// Text ausgeben (wie php.echo)
    document.write(aText);
} // echo



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


function Get_UI(a_bez, a_lang) {
// UI-Element a_bez in Sprache a_lang

    var jsonData = $(arrUI).filter(function (i,n){return n.bez==a_bez});

    if (jsonData.length == 0) {
        console.log("Get_Effekt not found: " + a_lang + ', ' + a_bez);
    }

    return jsonData[0]["text_"+a_lang];

    /*
    var txt = jsonData[0]["text_"+a_lang];

    if (glb_isMobile == true) {
        txt = txt.replace('<br>', '');
    }

    return txt;
    */

} // Get_UI


function Hide_imgOrgan(a_organ) {
// Hide organ image (onMouseOut)
//console.log('Hide_imgOrgan a_organ: ' + a_organ + ', glb_Organ: ' + glb_Organ);
    if (glb_Organ != a_organ) {
        $("#img_Organ_" + a_organ).hide();
    }
}


function Get_DocHeight(doc) {
    // Get height of document
        doc = doc || document;
        var body = doc.body;
        var height = Math.max( body.scrollHeight, body.offsetHeight);
        return height;
    }
    
    
function Msg_DocHeight() {
// Send docHeight to parent (if mobile)
    if (glb_isMobile == true) {
        setTimeout(function(){
            //var ht = Get_DocHeight();
            var ht = $('.div_PageContent_mobile').height();
            var id = 'ifr_LUDOK'; //iframe id
            parent.postMessage( JSON.stringify( {'docHeight': ht, 'id':id} ), '*' );
        }, 400);
    }
}


function ResetAll() {
    //glb_Organ = "";

    $('div[id^="div_Results_"]').html('');
    $('div[id^="div_Results_"]').hide();
    $('img[id^="img_Organ_"]').hide();

    $('#div_Mensch_mobile').hide();

    $(glb_PCID + '#div_Legend').hide();
    $(glb_PCID + '#div_Menu_Headline').hide();

    // Buttons deaktivieren
    $('button[id^="btn_"]').removeClass(['bg_Feinstaub_invert', 'bg_Ozon_invert', 'bg_Stickstoffdioxid_invert', 'bg_Schwefeldioxid_invert', 'bg_Kohlenmonoxid_invert']);
    $(glb_PCID + 'button[id^="btn_"]').removeClass('bg_Zusatz_invert');

    $('#div_HintergrundInfo').hide();
    glb_HintergrundInfo = '';

} // ResetAll


function Set_Organ_Mouseover(a_organ) {
// Attach event handlers to image map areas

    $('area#map_' + a_organ).each(function( index ) {
        //console.log(a_organ + ': ' + index + ": " + $( this ).attr('id') );
        $( this ).on('mouseover', function( event ) {$('#img_Organ_' + a_organ).show();});
        $( this ).on('mouseleave', function( event ) {Hide_imgOrgan(a_organ);});
    });

}


function Show_Organ(a_organ) {
// Zeige Einträge mit organ = a_organ

//console.log('Show_Organ');

    if ((glb_Organ == a_organ) && (glb_isMobile == true)) {
    // Zweiter Klick = Reset
        ResetAll();
        $(glb_PCID + '.div_Results').hide();
        glb_Organ = "";
        Msg_DocHeight();
        return;
    }

    glb_Organ = a_organ;
    glb_Noxe = ""; 

    ResetAll();
    $(glb_PCID + '#div_Intro').hide();
    $(glb_PCID + '.div_Results').show();
    $('#img_Organ_' + a_organ).show();

    /*
    // mobile: Mensch-Grafik in div_Results_mobile richten (sonst ausblenden)
    if (glb_isMobile == true) {
        $('#img_Mensch_mobile').attr('src', 'graph/mensch_'+a_organ+'.png');
        $('#div_Mensch_mobile').show();
    } else {
        $('#div_Mensch_mobile').hide();
    }
    */

    // Kein Männli bei Organen auf mobile:
    $('#div_Mensch_mobile').hide();

    $(glb_PCID + '#btn_' + a_organ).addClass('bg_Zusatz_invert');

    Get_Organ_Effekte(a_organ);
    Msg_DocHeight();

} // Show_Organ


function Show_Noxe(a_noxe) {
// Zeige Einträge mit noxe = a_noxe (und noxe_zeit = glb_Zeit)

    if ((glb_Noxe == a_noxe) && (glb_isMobile == true)) {
    // Zweiter Klick = Reset
        ResetAll();
        $(glb_PCID + '.div_Results').hide();
        glb_Noxe = "";
        Msg_DocHeight();
        return;
    }

    glb_Organ = "";
    glb_Noxe = a_noxe; 

//console.log("Show_Noxe: "+ a_noxe + " / " + glb_Zeit);

    ResetAll();
    $(glb_PCID + '#div_Intro').hide();
    $(glb_PCID + '.div_Results').show();

    // mobile: Mensch-Grafik in div_Results_mobile richten (sonst ausblenden)
    if (glb_isMobile == true) {
        $('#img_Mensch_mobile').attr('src', 'graph/mensch_'+a_noxe+'_'+glb_Zeit+'.png');
        $('#div_Mensch_mobile').show();
    } else {
        $('#div_Mensch_mobile').hide();
    }
    
    Filter_Noxe_Zeit_Organ(a_noxe, glb_Zeit, 'Atemwege'); 
    Filter_Noxe_Zeit_Organ(a_noxe, glb_Zeit, 'Herz');
    Filter_Noxe_Zeit_Organ(a_noxe, glb_Zeit, 'Nervensystem');
    Filter_Noxe_Zeit_Organ(a_noxe, glb_Zeit, 'Stoffwechsel');

    Filter_Noxe_Zeit_Organ(a_noxe, glb_Zeit, 'Sterblichkeit');
    Filter_Noxe_Zeit_Organ(a_noxe, glb_Zeit, 'Notfaelle');

    Msg_DocHeight();

} // Show_Noxe


function Show_Noxe_Zeit(a_noxe, a_noxe_zeit) {
// Zeige Einträge mit noxe = a_noxe und noxe_zeit = a_noxe_zeit

    if ((glb_Noxe == a_noxe) && (glb_isMobile == true)) {
    // Zweiter Klick = Reset
        ResetAll();
        $(glb_PCID + '.div_Results').hide();
        glb_Noxe = "";
        Msg_DocHeight();
        return;
    }

    a_noxe_zeit = glb_Zeit;
    glb_Organ = "";
    glb_Noxe = a_noxe; 

//console.log("Show_Noxe_Zeit: "+ a_noxe + " / " + a_noxe_zeit);

    ResetAll();
    $(glb_PCID + '#div_Intro').hide();
    $(glb_PCID + '.div_Results').show();

    // mobile: Mensch-Grafik in div_Results_mobile richten (sonst ausblenden)
    if (glb_isMobile == true) {
        $('#img_Mensch_mobile').attr('src', 'graph/mensch_'+a_noxe+'_'+a_noxe_zeit+'.png');
        $('#div_Mensch_mobile').show();
    } else {
        $('#div_Mensch_mobile').hide();
    }
    
    Filter_Noxe_Zeit_Organ(a_noxe, a_noxe_zeit, 'Atemwege'); 
    Filter_Noxe_Zeit_Organ(a_noxe, a_noxe_zeit, 'Herz');
    Filter_Noxe_Zeit_Organ(a_noxe, a_noxe_zeit, 'Nervensystem');
    Filter_Noxe_Zeit_Organ(a_noxe, a_noxe_zeit, 'Stoffwechsel');

    Filter_Noxe_Zeit_Organ(a_noxe, a_noxe_zeit, 'Sterblichkeit');
    Filter_Noxe_Zeit_Organ(a_noxe, a_noxe_zeit, 'Notfaelle');

    Msg_DocHeight();

} // Show_Noxe_Zeit


function Show_Popup(a_parent) {
// Popup anzeigen zum Item a_parent    
    $('#div_Popup_modal').html(Get_Popuptext(a_parent, glb_Lang));
    $('#div_Popup_modal').modal();
}

function Show_Popup_mobile(a_parent) {
// Pseudo-Popup für mobile anzeigen zum Item a_parent  
    $(glb_PCID + '#div_Intro').hide();

    if (a_parent != glb_HintergrundInfo) {
        ResetAll();
        glb_HintergrundInfo = a_parent;
        $('#div_HintergrundInfo').html('<br>' + Get_Popuptext(a_parent, glb_Lang) + '<br><br>');
        $('#div_HintergrundInfo').insertAfter("#btn_Zusatz_"+ a_parent);
        $('#div_HintergrundInfo').show();
        $(glb_PCID + ".div_Results").hide();
    } else {
        $('#div_HintergrundInfo').hide();
        glb_HintergrundInfo = '';
    }

    Msg_DocHeight();

} // Show_Popup_mobile


function _Show_Zusatzinfo(a_parent) {
// Für mobile: Anzeige in div_Result (statt Popup) 
    //$('#div_Popup_modal').html(Get_Popuptext(a_parent, glb_Lang));
    //$('#div_Popup_modal').modal();

    $(glb_PCID + '#div_Intro').hide();

    $('#div_Results_Zusatzinfo').html(Get_Popuptext(a_parent, glb_Lang));
    $(glb_PCID + ".div_Results").insertAfter("#btn_Zusatz_"+ a_parent);
    $('#div_Results_Zusatzinfo').show();
}


function Tooltips_Init() {
// Tooltips initialisieren

    var i_elements = ["Kurzzeit", "Langzeit", 
                      "causally", "likely", "causality_mobile",
                      "Feinstaub", "Ozon", "Stickstoffdioxid", "Schwefeldioxid", "Kohlenmonoxid", 
                      "Atemwege", "Herz", "Nervensystem", "Stoffwechsel", "Sterblichkeit", "Notfaelle"];

    i_elements.forEach(function(item, index, array) {
        //console.log(item, index);
        $(".div_PageContent #i_" + item).tooltip({
            content: Get_Tooltip(item, glb_Lang) //+ "<div align=right'><a href='#' class='ipadTooltipHack'>close</a></div>"
        });
        $(".div_PageContent_mobile #i_" + item).tooltip({
            content: Get_Tooltip(item, glb_Lang)
        });
    });

}