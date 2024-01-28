// LUDOK Interaktive Grafik
//
// Dr. Carl GmbH 2020

// Globale Variablen
glb_Lang = "de";    // Anzeigesprache
glb_Organ = "";     // Gewähltes Organ (leer für Noxe)
glb_Noxe = "";      // Gewählte Noxe (leer für Organ)
glb_Zeit = "";      // k - Kurzzeit / l - Langzeit 

glb_HintergrundInfo = '';       // Angezeigte HintergrundInfo (mobile only)

glb_isMobile = false;           // Bin ich mobile oder desktop?
glb_PCID = '.div-pagecontent '; // Page Content ID (für mobile/desktop)


function Check_mobile() {
// Bin ich mobile...?  
// -> Hauptanzeigebereich div-pagecontent[_mobile] in glb_PCID speichern 
    //if ($('.div-pagecontent').is(":visible") == true) {
    if ($(window).width() > 1023) {
        glb_PCID = '.div-pagecontent ';
        glb_isMobile = false;
    } else {
        glb_PCID = '.div-pagecontent-mobile ';
        glb_isMobile = true;
    }
//console.log('Check_mobile glb_isMobile: ' + glb_isMobile + ' width: ' + $(window).width());
}


function Choose_Zeit(a_zeit) {
// Auswahl a_zeit = k - Kurzzeit / l - Langzeit
    glb_Zeit = a_zeit;

    ResetAll();

//console.log('Choose_Zeit glb_PCID: ' + glb_PCID);

    $('button[id^="btn-zeit-"]').removeClass('btn-round-zeit-inv');
    $(glb_PCID + '#btn-zeit-' + a_zeit).addClass('btn-round-zeit-inv');

    if (glb_Zeit == "k") {
        $(glb_PCID + '#mnu-schwefeldioxid').show();
        $(glb_PCID + '#mnu-kohlenmonoxid').show();
    } else {
        $(glb_PCID + '#mnu-schwefeldioxid').hide();
        $(glb_PCID + '#mnu-kohlenmonoxid').hide();
    }

    $(glb_PCID + '#div-menu-noxen-pc').fadeIn();
    $(glb_PCID + '#div-menu-noxen-pcm').fadeIn();
    $(glb_PCID + '#div-menu-sterblichkeit').fadeIn();

    $('#img-mensch-empty').attr("usemap", "#image-map");

//console.log('Choose_Zeit glb_Organ: ' + glb_Organ)
//console.log('Choose_Zeit glb_Noxe: ' + glb_Noxe)

    // Gleich Effekte anzeigen, falls Organ oder Noxe gewählt
    if (glb_Organ != "") {
        Show_Organ(glb_Organ);
    }
    if (glb_Noxe != "") {
        Show_Noxe_Zeit(glb_Noxe, glb_Zeit);
    }

    Msg_DocHeight();

} // Choose_Zeit


function Draw_BtnHintergrundInfo(a_topic, a_is_mobile) {
// Button Menü unten - a_topic =  "Hintergrund", etc.
    var fkt = "Show_Popup";
    var id = "";
    var txt = Get_UI('btn-' + a_topic, glb_Lang);

    if (a_is_mobile == true) {
        fkt = "Show_Popup_mobile";
        id = 'id="btn-zusatz-' + a_topic + '"';
        txt = txt.replace('<br>', '');
    }
    echo('<button class="btn-round" ' + id + ' onclick="' + fkt + '(\'' + a_topic + '\')">' + txt + '</button>');

} // Draw_BtnHintergrundInfo


function Draw_BtnNoxe(a_noxe, a_is_mobile) {
// Button Menü oben - a_noxe =  "feinstaub", "ozon", etc.
    var txt = Get_UI('btn-' + a_noxe, glb_Lang);

    if (a_is_mobile == true) {
        txt = txt.replace('<br>', '');
    }

    echo('<div class="div-menu-noxe" id="mnu-' + a_noxe + '">');
    echo('<img src="graph/ic-info.png" class="ic-info ic-info-top-small" id="i-' + a_noxe + '" title="" /> ');
    echo('<button class="btn-round-small bg-' + a_noxe + '" onclick="Show_Noxe(\'' + a_noxe + '\')" id="btn-' + a_noxe + '">' + txt + '</button>');
    echo('</div>');

} // Draw_BtnNoxe


function Draw_BtnOrgan(a_organ, a_is_mobile) {
// Button Menü oben - a_noxe =  "feinstaub", "ozon", etc.
    var txt = Get_UI('btn-' + a_organ, glb_Lang);

    if (a_is_mobile == true) {
        txt = txt.replace('<br>', '');
    }

    echo('<div class="div-menu-noxe" id="mnu-' + a_organ + '">');
    echo('<img src="graph/ic-info.png" class="ic-info ic-info-top-small" id="i-' + a_organ + '" title="" /> ');
    echo('<button class="btn-round-small bg-zusatz" onclick="Show_Organ(\'' + a_organ + '\')" id="btn-' + a_organ + '">' + txt + '</button>');
    echo('</div>');

} // Draw_BtnOrgan


function Draw_IntroText() {
// Intro-Text
    echo('<div class="div-intro margin-bottom" id="div-intro">');
    if (glb_isMobile == false) {
        echo('<br><br>');
    }
    echo(Get_UI('txt-intro', glb_Lang));
    echo('</div>');
} // Draw_IntroText


function Draw_Legende() {
// Legende Kausalität
    echo('<div class="div-legend" id="div-legend">');
    echo(Get_UI('leg-kausalitaet', glb_Lang) + ': ');
    echo('<img src="graph/ic-c.png" width="14px" /> ' + Get_UI('leg-ursaechlich', glb_Lang) + ' <img src="graph/ic-info.png" class="ic-info" id="i-causally" title="" /> &nbsp;');
    echo('<img src="graph/ic-l.png" width="14px" /> ' + Get_UI('leg-wahrscheinlich', glb_Lang) + ' <img src="graph/ic-info.png" class="ic-info" id="i-likely" title="" />');
    echo('</div>');
} // Draw_Legende

function getResultsTag() {
	return glb_isMobile ? "-pcm" : ""
}

function Draw_Results(a_data, a_noxe, a_noxe_zeit, a_organ) {
// Array a_data ausgeben
    var str = "";
    var strNoxe_Zeit = "langzeit";
    var resultsTag = getResultsTag()

    if (a_noxe_zeit == "k") {
        strNoxe_Zeit = "kurzzeit";
    }

    $(glb_PCID + '#div-results-' + a_organ + resultsTag).hide();
    $('#img-organ-' + a_organ).hide();

    if (a_data.length > 0) {

        str += '<div class="div-results-header"><img src="graph/ic-info.png" class="ic-info" id="i-eff-' + a_organ + '" title=""> ' + Get_Organ(a_organ, glb_Lang) + '</div>';

        str += '<table>';

        for (var i = 0; i < a_data.length; i++) {

            str += '<tr>';
            //'<td>' + a_data[i].noxe + '</td>' +
            //'<td>' + a_data[i].noxe_zeit + '</td>' +
            //'<td>' + a_data[i].organ + '</td>' +
            str += '<td class="td-effekt">' + Get_Effekt(a_data[i].effekt, glb_Lang) + '</td>';
            //'<td>' + a_data[i]["organ-"+glb_Lang] + '</td>' +
            //'<td>' + a_data[i]["effekt-"+glb_Lang] + '</td>'

            if (glb_isMobile == false) {
                for (var j = 1; j < Get_Noxe_ID(a_noxe); j++) {
                    str += '<td class="td-effekt-typ"></td>';
                }
            }

            str += '<td class="td-effekt-typ"><img src="graph/ic-' + a_data[i].effekt_typ + '-' + a_noxe + '.png" width="14px"></td>';

            if (glb_isMobile == false) {
                for (var j = Get_Noxe_ID(a_noxe); j < 5; j++) {
                    str += '<td class="td-effekt-typ"></td>';
                }
            }

            str += '</tr>';

        } // for

        str += '</table>';

//console.log('Draw_Results Organ: ' + a_organ);

        $(glb_PCID + '#div-results-' + a_organ + resultsTag).html(str);
        $(glb_PCID + '#div-results-' + a_organ + resultsTag).fadeIn();
        $(glb_PCID + '#div-legend').fadeIn();
        $(glb_PCID + '#div-menu-headline').fadeIn();

        //if ((a_organ != "sterblichkeit") && (a_organ != "notfaelle")) {
        $('#img-organ-' + a_organ).fadeIn();
        //}

        $("#i-eff-" + a_organ).tooltip({content: Get_Tooltip(a_organ, glb_Lang)});

    } else {

    }// if (a_data.length > 0)

    // mobile: div-results unter Button schieben
    if (glb_isMobile == true) {
        $(glb_PCID + ".div-results").appendTo(glb_PCID + "#mnu-" + a_noxe);
    }

    // Button aktivieren
    $('button[id^="btn-"]').removeClass(['bg-feinstaub-invert', 'bg-ozon-invert', 'bg-stickstoffdioxid-invert', 'bg-schwefeldioxid-invert', 'bg-kohlenmonoxid-invert']);
    $(glb_PCID + '#btn-' + a_noxe).addClass('bg-' + a_noxe + '-invert');


} // Draw_Results


function Draw_Results_Organ(a_data) {
// Array a_data ausgeben
    var str = "";
    var str_row = "";
    var a_noxe = "feinstaub";
    var a_noxe_zeit = "l";
    var objEffekt;
    var arrEffekte = ["feinstaub", "ozon", "stickstoffdioxid", "schwefeldioxid", "kohlenmonoxid"];
    var anzEffekte = 0;
    var anzRows = 0;
    var resultsTag = getResultsTag()

    if (a_data.length > 0) {

        str += '<div class="div-results-header"><img src="graph/ic-info.png" class="ic-info" id="i-eff-' + a_data[0].organ + '" title=""> ' + Get_Organ(a_data[0].organ, glb_Lang) + '</div>';

        str += '<table>';

        for (var i = 0; i < a_data.length; i++) {

            anzEffekte = 0;

            str_row = '<tr>';

            str_row += '<td class="td-effekt">' + Get_Effekt(a_data[i].effekt_de, glb_Lang) + '</td>';
            str_row += '<td class="td-effekt-typ left">';

            for (var j = 0; j < arrEffekte.length; j++) {
                objEffekt = Get_Organ_Effekt_Noxe_Zeit(a_data[i].organ, a_data[i].effekt_de, arrEffekte[j], glb_Zeit, glb_Lang);

                if (glb_isMobile == false) {
                    str_row += '<td class="td-effekt-typ">';
                }

                if (objEffekt.length > 0) {
                    anzEffekte = anzEffekte + 1;
                    str_row += '<img src="graph/ic-' + objEffekt[0].effekt_typ + '-' + objEffekt[0].noxe + '.png" width="14px"></img>&nbsp;';
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
            str += '<tr><td class="td-effekt">(' + Get_UI('txt-no-effects', glb_Lang) + ')</td></tr>';
        }

        str += '</table>';

        $(glb_PCID + '#div-results-' + a_data[0].organ + resultsTag).html(str);
        $(glb_PCID + '#div-results-' + a_data[0].organ + resultsTag).fadeIn();
        //$(glb_PCID + '#div-results-' + a_noxe + '-' + a_noxe_zeit).html(str);
        //$(glb_PCID + '#div-results-' + a_noxe + '-' + a_noxe_zeit).fadeIn();
        $(glb_PCID + '#div-legend').fadeIn();

        $(glb_PCID + "#i-eff-" + a_data[0].organ).tooltip({content: Get_Tooltip(a_data[0].organ, glb_Lang)});

        // mobile: div-results unter Button schieben
        if (glb_isMobile == true) {
            $(glb_PCID + ".div-results").appendTo(glb_PCID + "#mnu-" + a_data[0].organ);
        }

    } else {

    }// if (a_data.length > 0)

} // Draw_Results_Organ


function echo(aText) {
// Text ausgeben (wie php.echo)
    document.write(aText);
} // echo

function Filter_Noxe_Zeit_Organ(a_noxe, a_noxe_zeit, a_lang, a_organ) {
// Alle Einträge aus json_matrix.arrMatrix mit noxe = a_noxe und noxe_zeit = a_noxe_zeit
//console.log("Filter_Noxe_Zeit_Organ: "+ a_noxe + " / " + a_noxe_zeit);

    var jsonData = $(arrMatrix).filter(function (i, n) {
        return n.noxe_zeit == a_noxe_zeit
    });
    jsonData = $(jsonData).filter(function (i, n) {
        return n.noxe == a_noxe
    });
    jsonData = $(jsonData).filter(function (i, n) {
        return n.organ == a_organ
    });
    jsonData = $(jsonData).filter(function (i, n) {
        return Filter_Language(n, a_lang)
    });

    Draw_Results(jsonData, a_noxe, a_noxe_zeit, a_organ);

} // Filter_Noxe_Zeit_Organ

function Filter_Language(json, a_lang) {
    return !Object.prototype.hasOwnProperty.call(json, "nur_in") || json.nur_in.indexOf(a_lang) > -1
}

function Get_Effekt(a_effekt, a_lang) {
// Effekt-Bezeichnung in Sprache a_lang

    var jsonData = $(arrEffekte).filter(function (i, n) {
        return n.effekt_de == a_effekt
    });

    if (jsonData.length == 0) {
        console.log("Get_Effekt not found: " + a_lang + ', ' + a_effekt);
    }

    return jsonData[0]["effekt_" + a_lang];

} // Get_Effekt


function Get_Organ(a_organ, a_lang) {
// Organ-Bezeichnung in Sprache a_lang

    var jsonData = $(arrOrgane).filter(function (i, n) {
        return n.organ == a_organ
    });

//console.log("Get_Organ: " + a_lang + ', ' + a_organ + ' - jsonData.length: ' + jsonData.length);

    if (jsonData.length == 0) {
        console.log("Get_Organ not found: " + a_lang + ', ' + a_organ);
    }

    return jsonData[0]["organ_" + a_lang];

} // Get_Organ


function Get_Organ_Effekte(a_organ) {
// Alle Einträge aus json_matrix.arrEffekte mit organ = a_organ

    var jsonData = $(arrEffekte).filter(function (i, n) {
        return n.organ == a_organ
    });
//console.log(jsonData);
    Draw_Results_Organ(jsonData);

} // Get_Organ_Effekte


function Get_Organ_Effekt_Noxe_Zeit(a_organ, a_effekt, a_noxe, a_noxe_zeit, a_lang) {
// Alle passenden Einträge aus json_matrix.arrMatrix 
//console.log("Filter_Noxe_Zeit_Organ: "+ a_noxe + " / " + a_noxe_zeit);

    var jsonData = $(arrMatrix).filter(function (i, n) {
        return n.noxe_zeit == a_noxe_zeit
    });
    jsonData = $(jsonData).filter(function (i, n) {
        return n.noxe == a_noxe
    });
    jsonData = $(jsonData).filter(function (i, n) {
        return n.effekt == a_effekt
    });
    jsonData = $(jsonData).filter(function (i, n) {
        return n.organ == a_organ
    });
    jsonData = $(jsonData).filter(function (i, n) {
        return Filter_Language(n, a_lang)
    });

//console.log(jsonData);

    return jsonData;

} // Get_Organ_Effekt_Noxe_Zeit


function Get_Noxe_ID(a_noxe) {
// Noxen-ID der a_noxe ermitteln

    var jsonData = $(arrNoxen).filter(function (i, n) {
        return n.noxe == a_noxe
    });

//console.log("Get_Noxe_ID: " +  a_noxe + ' - jsonData.length: ' + jsonData.length);

    return jsonData[0]["id"];

} // Get_Noxe


function Get_Popuptext(a_parent, a_lang) {
// Popup-Text zum Item a_parent in Sprache a_lang

    var jsonData = $(arrPopups).filter(function (i, n) {
        return n.parent == a_parent
    });

    if (jsonData.length == 0) {
        console.log("Get_Popuptext not found: " + a_lang + ', ' + a_parent);
    }

    return jsonData[0]["text_" + a_lang];

} // Get_Popuptext


function Get_Tooltip(a_parent, a_lang) {
// Popup-Text zum Item a_parent in Sprache a_lang

    var jsonData = $(arrInfos).filter(function (i, n) {
        return n.parent == a_parent
    });

    if (jsonData.length == 0) {
        console.log("Get_Tooltip not found: " + a_lang + ', ' + a_parent);
    }

    return jsonData[0]["text_" + a_lang];

} // Get_Tooltip


function Get_UI(a_bez, a_lang) {
// UI-Element a_bez in Sprache a_lang

    var jsonData = $(arrUI).filter(function (i, n) {
        return n.bez == a_bez
    });

    if (jsonData.length == 0) {
        console.log("Get_UI not found: " + a_lang + ', ' + a_bez);
    }

    return jsonData[0]["text_" + a_lang];

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
        $("#img-organ-" + a_organ).hide();
    }
}


function Msg_DocHeight() {
// Send docHeight to parent (if mobile)
    if (glb_isMobile == true) {
        setTimeout(function () {
            var ht = $('.div-pagecontent-mobile').height();
            var id = 'ifr_LUDOK'; //iframe id
            parent.postMessage(JSON.stringify({'docHeight': ht, 'id': id}), '*');
        }, 400);
    }
}


function ResetAll() {
    //glb_Organ = "";

    $('div[id^="div-results-"]').html('');
    $('div[id^="div-results-"]').hide();
    $('img[id^="img-organ-"]').hide();

    $('#div-mensch-mobile').hide();

    $(glb_PCID + '#div-legend').hide();
    $(glb_PCID + '#div-menu-headline').hide();

    // Buttons deaktivieren
    $('button[id^="btn-"]').removeClass(['bg-feinstaub-invert', 'bg-ozon-invert', 'bg-stickstoffdioxid-invert', 'bg-schwefeldioxid-invert', 'bg-kohlenmonoxid-invert']);
    $(glb_PCID + 'button[id^="btn-"]').removeClass('bg-zusatz-invert');

    $('#div-hintergrund-info').hide();
    glb_HintergrundInfo = '';

} // ResetAll


function Set_Organ_Mouseover(id_organ, a_organ) {
// Attach event handlers to image map areas

    $('area#map_' + id_organ).each(function (index) {
        //console.log(a_organ + ': ' + index + ": " + $( this ).attr('id') );
        $(this).on('mouseover', function (event) {
            $('#img-organ-' + a_organ).show();
        });
        $(this).on('mouseleave', function (event) {
            Hide_imgOrgan(a_organ);
        });
    });

}


function Show_Organ(a_organ) {
// Zeige Einträge mit organ = a_organ

//console.log('Show_Organ ' + a_organ);

    if ((glb_Organ == a_organ) && (glb_isMobile == true)) {
        // Zweiter Klick = Reset
        ResetAll();
        $(glb_PCID + '.div-results').hide();
        glb_Organ = "";
        Msg_DocHeight();
        return;
    }

    glb_Organ = a_organ;
    glb_Noxe = "";

    ResetAll();
    $(glb_PCID + '#div-intro').hide();
    $(glb_PCID + '.div-results').show();
    $('#img-organ-' + a_organ).show();

    /*
    // mobile: Mensch-Grafik in div-results-mobile richten (sonst ausblenden)
    if (glb_isMobile == true) {
        $('#img-mensch-mobile').attr('src', 'graph/mensch-'+a_organ+'.png');
        $('#div-mensch-mobile').show();
    } else {
        $('#div-mensch-mobile').hide();
    }
    */

    // Kein Männli bei Organen auf mobile:
    $('#div-mensch-mobile').hide();

    $(glb_PCID + '#btn-' + a_organ).addClass('bg-zusatz-invert');

    Get_Organ_Effekte(a_organ);
    Msg_DocHeight();

} // Show_Organ


function Show_Noxe(a_noxe) {
// Zeige Einträge mit noxe = a_noxe (und noxe_zeit = glb_Zeit)

    if ((glb_Noxe == a_noxe) && (glb_isMobile == true)) {
        // Zweiter Klick = Reset
        ResetAll();
        $(glb_PCID + '.div-results').hide();
        glb_Noxe = "";
        Msg_DocHeight();
        return;
    }

    glb_Organ = "";
    glb_Noxe = a_noxe;

//console.log("Show_Noxe: "+ a_noxe + " / " + glb_Zeit);

    ResetAll();
    $(glb_PCID + '#div-intro').hide();
    $(glb_PCID + '.div-results').show();

    // mobile: Mensch-Grafik in div-results-mobile richten (sonst ausblenden)
    if (glb_isMobile == true) {
        $('#img-mensch-mobile').attr('src', 'graph/mensch-' + a_noxe + '-' + glb_Zeit + '.png');
        $('#div-mensch-mobile').show();
    } else {
        $('#div-mensch-mobile').hide();
    }

    Filter_Noxe_Zeit_Organ(a_noxe, glb_Zeit, glb_Lang, 'atemwege');
    Filter_Noxe_Zeit_Organ(a_noxe, glb_Zeit, glb_Lang, 'herz');
    Filter_Noxe_Zeit_Organ(a_noxe, glb_Zeit, glb_Lang, 'nervensystem');
    Filter_Noxe_Zeit_Organ(a_noxe, glb_Zeit, glb_Lang, 'stoffwechsel');

    Filter_Noxe_Zeit_Organ(a_noxe, glb_Zeit, glb_Lang, 'sterblichkeit');
    Filter_Noxe_Zeit_Organ(a_noxe, glb_Zeit, glb_Lang, 'notfaelle');

    Msg_DocHeight();

} // Show_Noxe


function Show_Noxe_Zeit(a_noxe, a_noxe_zeit) {
// Zeige Einträge mit noxe = a_noxe und noxe_zeit = a_noxe_zeit

    if ((glb_Noxe == a_noxe) && (glb_isMobile == true)) {
        // Zweiter Klick = Reset
        ResetAll();
        $(glb_PCID + '.div-results').hide();
        glb_Noxe = "";
        Msg_DocHeight();
        return;
    }

    glb_Organ = "";
    glb_Noxe = a_noxe;

console.log("Show_Noxe_Zeit: "+ a_noxe + " / " + a_noxe_zeit);

    ResetAll();
    $(glb_PCID + '#div-intro').hide();
    $(glb_PCID + '.div-results').show();

    // mobile: Mensch-Grafik in div-results-mobile richten (sonst ausblenden)
    if (glb_isMobile == true) {
        $('#img-mensch-mobile').attr('src', 'graph/mensch-' + a_noxe + '-' + a_noxe_zeit + '.png');
        $('#div-mensch-mobile').show();
    } else {
        $('#div-mensch-mobile').hide();
    }

    Filter_Noxe_Zeit_Organ(a_noxe, a_noxe_zeit, glb_Lang, 'atemwege');
    Filter_Noxe_Zeit_Organ(a_noxe, a_noxe_zeit, glb_Lang, 'herz');
    Filter_Noxe_Zeit_Organ(a_noxe, a_noxe_zeit, glb_Lang, 'nervensystem');
    Filter_Noxe_Zeit_Organ(a_noxe, a_noxe_zeit, glb_Lang, 'stoffwechsel');

    Filter_Noxe_Zeit_Organ(a_noxe, a_noxe_zeit, glb_Lang, 'sterblichkeit');
    Filter_Noxe_Zeit_Organ(a_noxe, a_noxe_zeit, glb_Lang, 'notfaelle');

    Msg_DocHeight();

} // Show_Noxe_Zeit


function Show_Popup(a_parent) {
// Popup anzeigen zum Item a_parent    
    $('#div-popup-modal').html(Get_Popuptext(a_parent, glb_Lang));
    $('#div-popup-modal').modal();
}

function Show_Popup_mobile(a_parent) {
// Pseudo-Popup für mobile anzeigen zum Item a_parent  
    $(glb_PCID + '#div-intro').hide();

    if (a_parent != glb_HintergrundInfo) {
        ResetAll();
        glb_HintergrundInfo = a_parent;
        $('#div-hintergrund-info').html('<br>' + Get_Popuptext(a_parent, glb_Lang) + '<br><br>');
        $('#div-hintergrund-info').insertAfter("#btn-zusatz-" + a_parent);
        $('#div-hintergrund-info').show();
        $(glb_PCID + ".div-results").hide();
    } else {
        $('#div-hintergrund-info').hide();
        glb_HintergrundInfo = '';
    }

    Msg_DocHeight();

} // Show_Popup_mobile

function Tooltips_Init() {
// Tooltips initialisieren

    var i_elements = ["kurzzeit", "langzeit",
        "causally", "likely", "causality_mobile",
        "feinstaub", "ozon", "stickstoffdioxid", "schwefeldioxid", "kohlenmonoxid",
        "atemwege", "herz", "nervensystem", "stoffwechsel", "sterblichkeit", "notfaelle"];

    i_elements.forEach(function (item, index, array) {
        //console.log(item, index);
        $(".div-pagecontent #i-" + item).tooltip({
            content: Get_Tooltip(item, glb_Lang) //+ "<div align=right'><a href='#' class='ipadTooltipHack'>close</a></div>"
        });
        $(".div-pagecontent-mobile #i-" + item).tooltip({
            content: Get_Tooltip(item, glb_Lang)
        });
    });

}
