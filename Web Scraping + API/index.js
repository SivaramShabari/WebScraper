function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
fetch("http://localhost:3003/11")
    .then(x => {
        let a = x.json()
        console.log(x)
        a.then(z => {
            z.map(obj => {
                let img = document.createElement('img')
                img.src = obj.img
                img.height = '200'
                img.style.margin = "10px"
                img.style.border = "2px solid black"
                let xx = document.getElementById('img')
                xx.appendChild(img)
            })
        }

        )
    })
