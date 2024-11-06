document.getElementById("homeScore").innerText = 0
document.getElementById("guestScore").innerText = 0
let home = document.getElementById("homeScore")
let guest = document.getElementById("guestScore")

function homePlus1() {
    let currentHomeScore = parseInt(home.innerText)
    home.innerText = currentHomeScore + 1
}

function homePlus2() {
    let currentHomeScore = parseInt(home.innerText)
    home.innerText = currentHomeScore + 2
}

function homePlus3() {
    let currentHomeScore = parseInt(home.innerText)
    home.innerText = currentHomeScore + 3
}

function guestPlus1() {
    let currentGuestScore = parseInt(guest.innerText)
    guest.innerText = currentGuestScore + 1
}

function guestPlus2() {
    let currentGuestScore = parseInt(guest.innerText)
    guest.innerText = currentGuestScore + 2
}

function guestPlus3() {
    let currentGuestScore = parseInt(guest.innerText)
    guest.innerText = currentGuestScore + 3
}

function newGame() {
    document.getElementById("homeScore").innerText = 0
    document.getElementById("guestScore").innerText = 0
}

