const seeMoreOne = document.getElementById('seeMoreOne');
const seeMoreOneContent = document.getElementById('seeMoreOneContent');
const seeMoreTwo = document.getElementById('seeMoreTwo');
const seeMoreTwoContent = document.getElementById('seeMoreTwoContent');
const seeMoreThree = document.getElementById('seeMoreThree');
const seeMoreThreeContent = document.getElementById('seeMoreThreeContent');
const seeMoreFour = document.getElementById('seeMoreFour');
const seeMoreFourContent = document.getElementById('seeMoreFourContent');
const seeMoreFive = document.getElementById('seeMoreFive');
const seeMoreFiveContent = document.getElementById('seeMoreFiveContent');
const seeMoreSix = document.getElementById('seeMoreSix');
const seeMoreSixContent = document.getElementById('seeMoreSixContent');

seeMoreOne.addEventListener('click', function () {
    if (seeMoreOne.textContent === 'Zobacz więcej') {
        seeMoreOne.innerText = 'Zobacz mniej'
        seeMoreOneContent.classList.remove('hideMoreContent')
        seeMoreOneContent.classList.add('seeMoreContent')
    } else {
        seeMoreOne.innerText = 'Zobacz więcej'
        seeMoreOneContent.classList.add('hideMoreContent')
    }
})

seeMoreTwo.addEventListener('click', function () {
    if (seeMoreTwo.textContent === 'Zobacz więcej') {
        seeMoreTwo.innerText = 'Zobacz mniej'
        seeMoreTwoContent.classList.remove('hideMoreContent')
        seeMoreTwoContent.classList.add('seeMoreContent')
    } else {
        seeMoreTwo.innerText = 'Zobacz więcej'
        seeMoreTwoContent.classList.add('hideMoreContent')
    }
})

seeMoreThree.addEventListener('click', function () {
    if (seeMoreThree.textContent === 'Zobacz więcej') {
        seeMoreThree.innerText = 'Zobacz mniej'
        seeMoreThreeContent.classList.remove('hideMoreContent')
        seeMoreThreeContent.classList.add('seeMoreContent')
    } else {
        seeMoreThree.innerText = 'Zobacz więcej'
        seeMoreThreeContent.classList.add('hideMoreContent')
    }
})

seeMoreFour.addEventListener('click', function () {
    if (seeMoreFour.textContent === 'Zobacz więcej') {
        seeMoreFour.innerText = 'Zobacz mniej'
        seeMoreFourContent.classList.remove('hideMoreContent')
        seeMoreFourContent.classList.add('seeMoreContent')
    } else {
        seeMoreFour.innerText = 'Zobacz więcej'
        seeMoreFourContent.classList.add('hideMoreContent')
    }
})

seeMoreFive.addEventListener('click', function () {
    if (seeMoreFive.textContent === 'Zobacz więcej') {
        seeMoreFive.innerText = 'Zobacz mniej'
        seeMoreFiveContent.classList.remove('hideMoreContent')
        seeMoreFiveContent.classList.add('seeMoreContent')
    } else {
        seeMoreFive.innerText = 'Zobacz więcej'
        seeMoreFiveContent.classList.add('hideMoreContent')
    }
})

seeMoreSix.addEventListener('click', function () {
    if (seeMoreSix.textContent === 'Zobacz więcej') {
        seeMoreSix.innerText = 'Zobacz mniej'
        seeMoreSixContent.classList.remove('hideMoreContent')
        seeMoreSixContent.classList.add('seeMoreContent')
    } else {
        seeMoreSix.innerText = 'Zobacz więcej'
        seeMoreSixContent.classList.add('hideMoreContent')
    }
})