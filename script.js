const refreshBtn = document.querySelector(".refresh-btn");
const container = document.querySelector(".container")

const maxPalateBox = 32;

const generatePalette = ()=>{
    container.innerHTML="";
    for(let i=0;i<maxPalateBox;i++){
        let randomHex = Math.floor(Math.random()* 0xffffff).toString(16)
        randomHex = `#${randomHex.padStart(6,"0")}`;


        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background:${randomHex}"></div>
                        <span class="hex-value">${randomHex}</span>`
        color.addEventListener("click",()=> copyColor(color,randomHex))
        container.appendChild(color);
    }       
}
const copyColor = (elem,hexVal) => {
    const colorElement = elem.querySelector(".hex-value")
    navigator.clipboard.writeText(hexVal).then(()=>{
        colorElement.innerText = "Copied";
        setTimeout(()=> colorElement.innerText = hexVal,1000)
    }).catch(()=> alert("Faild to Copy the color code!"))
}

refreshBtn.addEventListener("click",generatePalette)