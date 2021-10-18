import { getBusinessList, getBusinessNY, getBusinessManufacturing } from "./database.js";
import { Business } from "./Business.js";


export const BusinessList = () => {
    let businessHTML = ""
    const businessArray = getBusinessList()
    businessHTML = "<h1> Active Businesses </h1>"

    businessArray.forEach(businessObject => {
    businessHTML += Business(businessObject)
    });
    return businessHTML
}

export const BusinessNY = () => {
    const nyBusiness = getBusinessNY()
    let nyHTML = ""
    nyHTML = "<h1> New York Businesses </h1>"

    nyBusiness.forEach(nyBusinessObj =>  {
        nyHTML += Business(nyBusinessObj)
    })

    return nyHTML
}

export const ManufacturingList = () => {
    const manufacturingBusiness = getBusinessManufacturing()
    let manufacturingHTML = ""
    manufacturingHTML = "<h1> Manufacturing Business</h1>"

    manufacturingBusiness.forEach(manufacturingObj => {
        manufacturingHTML += Business(manufacturingObj)
    })

    return manufacturingHTML
}


const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
        .addEventListener(
            "keypress",
            keyPressEvent => {
                if (keyPressEvent.charCode === 13) {
                    
                    const businessArray = getBusinessList()

                    for (const business of businessArray){
                        if (business.companyName.toLowerCase().includes(keyPressEvent.target.value.toLowerCase())){
                            companySearchResultArticle.innerHTML = Business(business);
                        }

                }
        }})