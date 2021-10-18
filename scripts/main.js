import { BusinessList, ManufacturingList, BusinessNY } from "./BusinessList.js";


let parentHTML = document.querySelector(".business") 
parentHTML.innerHTML = BusinessList()

let nyHTMLcode = document.querySelector(".businessList--newYork")
nyHTMLcode.innerHTML = BusinessNY()

let manufacturingHTMLCode = document.querySelector(".businessList--manufacturing")
manufacturingHTMLCode.innerHTML = ManufacturingList()

document
    .querySelector("#companySearch")
        .addEventListener(
            "keypress",
            keyPressEvent => {
                if (keyPressEvent.charCode === 13) {
                    
                    parentHTML.innerHTML = ""
                    nyHTMLcode.innerHTML = ""
                    manufacturingHTMLCode.innerHTML = ""
                }})