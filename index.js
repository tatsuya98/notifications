const markAll = () =>{
    getUnread().forEach(item =>{
        item.style.backgroundColor = 'white'
    })
    getDots().forEach(item =>{
        item.style.display = 'none'
    })
}
const mark = (e) =>{
    e.currentTarget.closest('.unread').style.backgroundColor = 'white'
    e.currentTarget.closest('.info').nextSibling.nextElementSibling.style.display = 'none'
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

document.querySelector('.mark').addEventListener('click',markAll)
getSpans().forEach(item =>{
    item.addEventListener('click',mark)
})