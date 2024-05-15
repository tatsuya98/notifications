const markAll = () =>{
    getUnread().forEach(item =>{
        item.style.backgroundColor = 'white'
    })
    getDots().forEach(item =>{
        item.style.display = 'none'
    })
    getNumber().textContent = 0
}
const mark = (e) =>{
    e.currentTarget.closest('.unread').style.backgroundColor = 'white'
    e.currentTarget.closest('.info').nextSibling.nextElementSibling.style.display = 'none'
    getNumber().textContent = +getNumber().textContent - 1
}
const getUnread = () =>{
    return document.querySelectorAll('.unread')
}
const getSpans = () =>{
    return document.querySelectorAll('span')
}
const getDots = () =>{
    return document.querySelectorAll('.dot')
}
const getNumber = () =>{
    return document.querySelector('.number')
}
document.querySelector('.mark').addEventListener('click',markAll)
getSpans().forEach(item =>{
    item.addEventListener('click',mark)
})