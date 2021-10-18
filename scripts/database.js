const businesses = [
    {
      purchasingAgent: {
        nameLast: "Kirlin",
        nameFirst: "Kristy",
      },
      phoneWork: "089.129.2290 x9400",
      orders: [7826.96, 8323.11, 5756.28, 6308.42, 5622.28],
      companyName: "Care-media",
      companyIndustry: "Education",
      zipCode: "56839",
      stateCode: "WI",
      streetAddress: "8417 Franklin Court Tunnel",
      city: "Mouthcard",
    },
    {
      purchasingAgent: {
        nameLast: "Steuber",
        nameFirst: "Kamron",
      },
      phoneWork: "(833) 222-7579 x5874",
      orders: [6252.5, 9769.02, 9521.17, 7994.05, 7945.93],
      companyName: "Stanholding",
      companyIndustry: "Hospitality",
      zipCode: "09705",
      stateCode: "NY",
      streetAddress: "2889 Fawn Court Garden",
      city: "Fellsmere",
    },
    {
      purchasingAgent: {
        nameLast: "Gutkowski",
        nameFirst: "Kaylee",
      },
      phoneWork: "235.266.6278",
      orders: [7634.43, 9766.72, 9953.45, 6559.8, 5054.9],
      companyName: "Highnix",
      companyIndustry: "Agriculture",
      zipCode: "49376",
      stateCode: "ME",
      streetAddress: "5734 Maple Avenue Throughway",
      city: "Little Genesee",
    },
    {
      purchasingAgent: {
        nameLast: "Crona",
        nameFirst: "Lauren",
      },
      phoneWork: "1-449-987-3083 x23263",
      orders: [7384.52, 9252.72, 7272.65, 5251.84, 9680.08],
      companyName: "Conit",
      companyIndustry: "Defense",
      zipCode: "53326",
      stateCode: "IL",
      streetAddress: "5755 Hillside Drive Crossroad",
      city: "Norval",
    },
    {
      purchasingAgent: {
        nameLast: "Krajcik",
        nameFirst: "Elvera",
      },
      phoneWork: "1-730-411-8580",
      orders: [6069.05, 8535.38, 5782.7, 7838.91, 7578.36],
      companyName: "Dong-tom",
      companyIndustry: "Energy",
      zipCode: "67071",
      stateCode: "KS",
      streetAddress: "4826 Arch Street Lights",
      city: "Newburyport",
    },
    {
      purchasingAgent: {
        nameLast: "Kling",
        nameFirst: "Ellie",
      },
      phoneWork: "(868) 043-0950",
      orders: [6726.2, 8393.21, 8087.13, 6393.13, 8646.35],
      companyName: "Dan-dox",
      companyIndustry: "Manufacturing",
      zipCode: "98842",
      stateCode: "WV",
      streetAddress: "9767 Cedar Court Corner",
      city: "Prince George",
    },
    {
      purchasingAgent: {
        nameLast: "Robel",
        nameFirst: "Otilia",
      },
      phoneWork: "(298) 305-1942 x53653",
      orders: [8676.05, 7430.69, 9379.81, 8074.29, 5998.75],
      companyName: "J-base",
      companyIndustry: "Health care",
      zipCode: "72993",
      stateCode: "FL",
      streetAddress: "9954 Buckingham Drive Mountains",
      city: "Vesper",
    },
    {
      purchasingAgent: {
        nameLast: "Gusikowski",
        nameFirst: "Karolann",
      },
      phoneWork: "(743) 934-8981 x692",
      orders: [8650.08, 8042.69, 5555.72, 7467.86, 8851.43],
      companyName: "Span-fix",
      companyIndustry: "Construction",
      zipCode: "59860",
      stateCode: "MT",
      streetAddress: "4151 Orange Street Extension",
      city: "Little Rock Air Force Base",
    },
    {
      purchasingAgent: {
        nameLast: "Hartmann",
        nameFirst: "Zena",
      },
      phoneWork: "727.635.6610 x6483",
      orders: [9415.89, 8935.45, 7413.91, 6830.96, 9746.57],
      companyName: "Sanaplane",
      companyIndustry: "Information",
      zipCode: "85156",
      stateCode: "NY",
      streetAddress: "4765 Fairview Avenue Locks",
      city: "Dennisville",
    },
    {
      purchasingAgent: {
        nameLast: "Torphy",
        nameFirst: "Celia",
      },
      phoneWork: "(992) 079-1670 x71569",
      orders: [7431.21, 5911.85, 7954.86, 7141.52, 8416.79],
      companyName: "Ran-taxon",
      companyIndustry: "Manufacturing",
      zipCode: "96673",
      stateCode: "MD",
      streetAddress: "7157 Hudson Street Ford",
      city: "Watrous",
    }
  ]

  export const getBusinessList = () => {
      const copyOfArray = businesses.map(business => ({...business}))
        return copyOfArray
    }

  export const getBusinessNY = () => businesses.filter(business => business.stateCode === "NY")

  export const getBusinessManufacturing = () => businesses.filter(business => business.companyIndustry === "Manufacturing")

  export const getAgentsList = () => {
    const agentsList = businesses.map(business => ({
      "name": business.purchasingAgent.nameFirst + " " + business.purchasingAgent.nameLast ,
      "companyName": business.companyName,
      "phoneNumber": business.phoneWork
    }))
    return agentsList
  } 
