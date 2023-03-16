const titleEl = document.getElementById('title');
titleEl.style.textAlign = 'center'
console.log(titleEl);
const pel = document.querySelector(".cool")
console.log(pel)
pel.style.color = "blue"
const aEl = document.querySelector('a')
aEl.setAttribute("href","https://www.google.com/")
pel.innerHTML = 'Comments for <strong>dick</strong>'
const commentEls = document.querySelectorAll("li")
console.log(commentEls)

for(let commentEl of commentEls) {
    commentEl.style.fontSize = "30px"
}