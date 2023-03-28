(function () {
    var div_completo = document.createElement('div');
    div_completo.setAttribute("id", "div-completo");
    document.documentElement.appendChild(div_completo);

    var divWix = document.createElement('div');
    divWix.setAttribute("style", "width: 450px; height: 600px; position: absolute; right: 15px; bottom: 15px; pointer-events: none");
    document.documentElement.appendChild(divWix);

    var div_complete = document.getElementById("div-completo");

    var div_iframe = document.createElement('div');
    div_iframe.setAttribute("id", "div-frame");

    div_complete.appendChild(div_iframe);
    var div_frame = document.getElementById("div-frame");

    var iframe_element = document.createElement('iframe');
    iframe_element.setAttribute("id", "iframe-temp");
    iframe_element.setAttribute("height", "");
    iframe_element.setAttribute("frameBorder", "0");
    iframe_element.setAttribute("allowTransparency", "false");
    iframe_element.setAttribute("scrolling", "no");
    iframe_element.setAttribute("style", "display: block; position: fixed; right: 15px; bottom: 15px; width: 58px; height: 56px; z-index: 99; border-radius: 8px;")

    var host_name = _kwp.host + "?account=" + _kwp.conta + (_kwp.botWorkspace ? ("&botWorkspace=" + _kwp.botWorkspace) : '') + (_kwp.color ? ("&color=" + _kwp.color) : '') + (_kwp.dptos ? ("&dptos=" + _kwp.dptos) : '')
    iframe_element.setAttribute("src", host_name);
    var screenHeight = window.screen.height;
    div_frame.appendChild(iframe_element);
    document.body.append(div_completo);
    window.addEventListener("message", (event) => {
        // Normally you would check event.origin
        // To verify the targetOrigin matches
        // this window's domain
        let iframe = document.querySelector('#iframe-temp')
        // event.data contains the message sent
        if (event.origin == "https://widget.karoo.com.br" || event.origin == "http://localhost:3000" || event.origin == "https://widget-karoo-qa.alterdatasoftware.com.br") {
            if (!event.data.open) {
                iframe_element.setAttribute("style", "display: block; position: fixed; right: 15px; bottom: 15px; width: 58px; height: 56px; z-index: 99; border-radius: 8px;")
            } else {
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    iframe_element.setAttribute("style", "display: block; position: fixed; right: 0; bottom: 0; width: 100vw; height: 100vh; z-index: 99; border-radius: 0px;")
                } else {
                    iframe_element.setAttribute("style", `display: block; position: fixed; right: 0; bottom: 0; width: 450px; height: ${screenHeight > 768 ? "80%" : "90%"}; z-index: 99; border-radius: 0px; max-height: 600px`)
                }
            }
        } else {
            return;
        }


    });

})();;