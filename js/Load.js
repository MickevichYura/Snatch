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
