const random = (min, max) => Math.floor(min + Math.random() * (max + 1 - min))
const choiceButton = document.querySelectorAll('.choice-item')
const aiImg = document.querySelector('.ai-choice-main img')
const userImg = document.querySelector('.user-choice-main img')

let interval = null
let music = document.querySelector('#music')
music.play()
music.volume = 0.1
let win = document.querySelector('#win')
let loss = document.querySelector('#loss')

const opt = {
    turnsAi: [],
    turnsUser: [],
    interval: 20,
    userScore: 0,
    aiScore: 0,
}

const generateAi = () => {
    let rand = random(1,5)
    aiImg.setAttribute('src',`./images/${rand}.png`)
}

interval = setInterval(generateAi,opt.interval)

choiceButton.forEach(elem => {
    elem.addEventListener('click', () => {
        clearInterval(interval)
        let userChoice = elem.firstElementChild.getAttribute('src')
        userImg.setAttribute('src',userChoice)

        let userNum = parseInt(userChoice.match(/\d/))
        let aiNum = parseInt(aiImg.getAttribute('src').match(/\d/))

        ui()

        opt.turnsAi.push(aiNum)
        opt.turnsUser.push(userNum)
        checkWinner(opt.turnsUser[opt.turnsUser.length - 1],opt.turnsAi[opt.turnsAi.length - 1])
    })
})

const userButtons = (value) =>{
    choiceButton.forEach(elem =>{
        elem.style.display = value
    })
}

const ui = () =>{
    userButtons('none')
    const userChoiceWrap = document.querySelector('.choice-wrap')
    const nextRoundButton = document.createElement('button')
    nextRoundButton.classList.add('next-round-btn')
    nextRoundButton.innerHTML = "Next round"
    userChoiceWrap.append(nextRoundButton)
}

const checkWinner = (user,ai) =>{
    const userScore = document.querySelector('.user-score')
    const aiScore = document.querySelector('.ai-score')
    const winner = document.querySelector('.winner')
    const nextButton = document.querySelector('.next-round-btn')
    const Restart = document.querySelector('.restart-btn')

    if (user === ai){
        winner.innerHTML = "It's draw!"
    } else {
        if(user === 1){
            if(ai === 2){
                opt.aiScore++
                winner.innerHTML = "Ai Wins!"
            }else{
                opt.userScore++
                winner.innerHTML = "Human wins!"
            }
        } else if (user === 2) {
            if(ai === 3){
                opt.aiScore++
                winner.innerHTML = "Ai Wins!"
            }else{
                opt.userScore++
                winner.innerHTML = "Human wins!"
            }
        } else if (user === 3) {
            if(ai === 1){
                opt.aiScore++
                winner.innerHTML = "Ai Wins!"
            }else{
                opt.userScore++
                winner.innerHTML = "Human wins!"
            }
        } else if (user === 4) {
            if(ai === 5){
                opt.aiScore++
                winner.innerHTML = "Ai Wins!"
            }else{
                opt.userScore++
                winner.innerHTML = "Human wins!"
            }
        } else if (user === 4) {
            if(ai === 1){
                opt.aiScore++
                winner.innerHTML = "Ai Wins!"
            }else{
                opt.userScore++
                winner.innerHTML = "Human wins!"
            }
        } else if (user === 5) {
            if(ai === 2){
                opt.aiScore++
                winner.innerHTML = "Ai Wins!"
            }else{
                opt.userScore++
                winner.innerHTML = "Human wins!"
            }
        } else if (user === 4) {
            if(ai === 3){
                opt.aiScore++
                winner.innerHTML = "Ai Wins!"
            }else{
                opt.userScore++
                winner.innerHTML = "Human wins!"
            }
        } else if (user === 3) {
            if(ai === 5){
                opt.aiScore++
                winner.innerHTML = "Ai Wins!"
            }else{
                opt.userScore++
                winner.innerHTML = "Human wins!"
            }
        }
    }


    userScore.innerHTML = `User: ${opt.userScore}`
    aiScore.innerHTML = `Ai: ${opt.aiScore}`
    nextButton.addEventListener('click', (e) =>{
        document.querySelector('.next-round-btn').remove()
        userButtons('block')
        document.querySelector('.user-choice-main').src = './images/q.png'
        interval = setInterval(generateAi,opt.interval)
    })

    if (opt.userScore === 10){
        win.play()
    } else if (opt.aiScore === 10) {
        loss.play()
    }

}
