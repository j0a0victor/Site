const cards = document.querySelectorAll('.memory-card')

let hasFlippedCard = false
let lockBoard = false
let firstCard, secondCard

function flipCard(event) {
   const currentCard = event.currentTarget

   if (lockBoard) return
   if (currentCard === firstCard) return

   currentCard.classList.add('flip')

   if (!hasFlippedCard) {
      hasFlippedCard = true
      firstCard = currentCard

      return
   }

   secondCard = currentCard
   checkForMatch()
}

const checkForMatch = () => {
   let isMatch = firstCard.dataset.framework === secondCard.dataset.framework

   isMatch ? disableCards() : unflipCards()
}

const disableCards = () => {
   firstCard.removeEventListener('click', flipCard)
   secondCard.removeEventListener('click', flipCard)

   resetBoard()
}

const unflipCards = () => {
   lockBoard = true

   setTimeout(() => {
      firstCard.classList.remove('flip')
      secondCard.classList.remove('flip')

      resetBoard()
   }, 1500)
}

const resetBoard = () => {
   [hasFlippedCard, lockBoard] = [false, false]
   [firstCard, secondCard] = [null, null]
}

const shuffle = () => {
   cards.forEach((card) => {
      let randomPos = Math.floor(Math.random() * 12)
      card.style.order = randomPos
   })
}

shuffle()

cards.forEach((card) => {
   card.addEventListener('click', flipCard)
})