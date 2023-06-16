const getAdvice  = async () => {
   const endpoint  = await fetch("https://api.adviceslip.com/advice")
   const fetchData = await endpoint.json()
   return fetchData
}
const id = document.getElementById("identifier")
const advice = document.getElementById("advice")

const updateDom = async (data) => {
   let newData = await data
   id.innerText = newData.slip.id
   advice.innerText = newData.slip.advice
}
updateDom( getAdvice())