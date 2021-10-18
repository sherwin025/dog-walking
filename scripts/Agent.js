export const AgentInfo = (agentObj) => {
    return `
    <section class="agentInfo">
        <h2 class="agentInfo__name">${agentObj.name}</h2>
        <div class="agentInfo__company">
            <div class="agentInfo__companyName">${agentObj.companyName}</div>
            <div class="agentInfo__phoneWork">${agentObj.phoneNumber}</div>
        </div>
    </section>  `
}
