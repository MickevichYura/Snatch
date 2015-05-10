//table

function loadXMLDoc(filename) {
    if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } else {
        xhttp = new XMLHttpRequest();
    }
    xhttp.open("GET", filename, false);
    try {
        xhttp.responseType = "msxml-document";
    } catch (err) {
    } // Helping IE11
    xhttp.send("");
    return xhttp.responseXML;
}

function displayResult() {
    xml = loadXMLDoc("facts.xml");
    xsl = loadXMLDoc("facts.xsl");
    // code for IE
    if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        ex = xml.transformNode(xsl);
        document.getElementById("xmlHttpRequest").innerHTML = ex;
    }
        // code for Chrome, Firefox, Opera, etc.
    else if (document.implementation && document.implementation.createDocument) {
        xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xsl);
        resultDocument = xsltProcessor.transformToFragment(xml, document);
        document.getElementById("xmlHttpRequest").appendChild(resultDocument);
    }
}

//menu

function getXmlHttp() {
    var xmlhttp;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest != "undefined") {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

function loadXmlMenu() {
    var xmlhttp = getXmlHttp();
    xmlhttp.open("GET", "menu.xml", false);
    xmlhttp.send();
    if (xmlhttp.status === 200) {
        var dat = document.getElementById("header");
        var xml = xmlhttp.responseXML.documentElement;
        var str = "<ul class='menu'>";
        var listNames = xml.getElementsByTagName("name");
        var listLinks = xml.getElementsByTagName("link");

        for (var i = 0; i < listNames.length; i++) {
            if (listLinks[i].childNodes[0].parentNode.parentNode.nodeName === "subItem") {

                str += "<ul class='submenu'>";
                while (listLinks[i].childNodes[0].parentNode.parentNode.nodeName === "subItem") {
                    str += "<li><a href=" + listLinks[i].childNodes[0].nodeValue + ">" + listNames[i].childNodes[0].nodeValue + "</a></li>";
                    i++;
                }
                str += "</ul>";
                --i;
            } else {
                if (i !== 0) str += "</li>";
                str += "<li><a href=" + listLinks[i].childNodes[0].nodeValue + ">" + listNames[i].childNodes[0].nodeValue + "</a>";
            }
        }
        str += "</ul>";
        dat.innerHTML = str;
    } else {
        alert("problem");
    }
}
