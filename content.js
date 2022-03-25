chrome.runtime.onMessage.addListener(function (res) {
    console.log(res)

    if(!document.getElementById("FXShare")){
        let fxButton = document.createElement('BUTTON'); // Create a <button> node
        fxButton.setAttribute('id', 'FXShare')
        fxButton.onclick = function () {
            fxShare()
        };
        
        let text = document.createTextNode('FX Share'); // Create a text node
        fxButton.appendChild(text); // Append the text 
        
        document
        .getElementsByClassName('css-1dbjc4n r-1oszu61 r-j5o65s r-rull8r r-qklmqi r-1dgieki r-1efd50x r-5kkj8d r-1ta3fxp r-18u37iz r-h3s6tt r-a2tzq0 r-3qxfft r-s1qlax')[0]
        .appendChild(fxButton); // Append to <div>
    }

    

    function fxShare(){
        let position = 8;
        let output = [res.slice(0, position), 'fx', res.slice(position)].join('');
        console.log(output)
        navigator.clipboard.writeText(output);

        document.getElementById("FXShare").innerHTML = 'Copied to clipboard'
    }
})

