import { getAgentsList } from "./database.js ";
import { AgentInfo } from "./Agent.js";

export const AgentObj = () => {
    const agentArray = getAgentsList()
    let agentHTML = ""
    agentHTML += "<h1>Purchasing Agents</h1>"

    agentArray.forEach(agentObj => {
        agentHTML += AgentInfo(agentObj)
    });
    return agentHTML
}

let agentHTMLCode = document.querySelector(".agents")
agentHTMLCode.innerHTML = AgentObj()


document
    .querySelector("#agentSearch")
        .addEventListener(
            "keypress",
            keyPressEvent => {
                if (keyPressEvent.charCode === 13) {
                    
                    const agentArray = getAgentsList()

                    for (const agent of agentArray){
                        if (agent.name.toLowerCase().includes(keyPressEvent.target.value.toLowerCase())){
                            agentHTMLCode.innerHTML = AgentInfo(agent);
                        }

                }
        }})