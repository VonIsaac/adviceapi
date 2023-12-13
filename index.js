//https://api.adviceslip.com/advice

const result = document.getElementById('result');
const adviceBtn = document.getElementById('btn');


const getAdvice = () => {
   let url = "https://api.adviceslip.com/advice"
   fetch(url)
   .then((resp) => resp.json())
   .then(data => {
    console.log(data)
    console.log(data.slip.advice)

    result.innerHTML = `<p>${data.slip.advice}</p>`
   })
}



adviceBtn.addEventListener('click', getAdvice)