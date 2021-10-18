export const Business = (businessObject) => {
    return `
    <section class="businessEntity">
    <h2 class="businessEntity__name">${businessObject.companyName}</h2>
        <div class="businessEntity__address">
            <div class="address">${businessObject.streetAddress}</div>
            <div class="address">${businessObject.city}, ${businessObject.stateCode} ${businessObject.zipCode}</div>
        </div>
    </section>`
}