let index = 0;

const scrollUp = () => {
  const pages = document.getElementsByClassName('page')
  if (index > 0) {
    for (let i = 0; i < pages.length; i++) {
      pages[i].style.display = 'none'
    }
    pages[index - 1].style.display = 'block'
    index--
  }
}

const scrollDown = () => {
  const pages = document.getElementsByClassName('page')
  if (index < 3) {
    for (let i = 0; i < pages.length; i++) {
      pages[i].style.display = 'none'
    }
    pages[index + 1].style.display = 'block'
    index++
  }
}

const test = () => console.log('testing')


/*exports.scrollUp = scrollUp
exports.scrollDown = scrollDown
exports.test = test */

export { scrollDown, scrollUp, test}

