// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯
import{ monsters } from './monsters.js'


for(let monster of monsters){
    findMonsters(monster)
}

function findMonsters(monsterData){
    const monsterDiv = document.createElement('div')
    monsterDiv.className = 'monster'

    const image = document.createElement('img')
    image.src = `https://robohash.org/${monsterData.id}?set=set2`
    image.alt = 'Demo'

    const name = document.createElement('p')
    name.className = 'name'
    name.innerText = monsterData.name

    const email = document.createElement('p')
    email.className = 'email'
    email.innerText = monsterData.email

    monsterDiv.append(image, name, email)

    document.querySelector('.monsters').append(monsterDiv)

}

notFound()
function notFound(){
    const notFound = document.createElement('div')
    notFound.className = 'p-5 not-found'

    const span = document.createElement('span')
    span.innerText = '404'

    const h1 = document.createElement('h1')
    h1.innerText = '🧟‍♂️ No Monster Found 🧟‍♂️'

    notFound.append(span, h1)
    notFound.style.display = 'none'

    document.querySelector('.monsters').append(notFound)
}

// search monsters 
document.querySelector('#search-monster').addEventListener('keyup', (event) => {
    const searchKeyword = event.target.value.toLowerCase()

    const monsters = document.querySelectorAll('.monster')
    let  notFound = true
    for(let monster of monsters){
        const name = monster.children[1].innerText.toLowerCase()
        const email = monster.children[2].innerText.toLowerCase()

        if(name.includes(searchKeyword) || email.includes(searchKeyword)){
            monster.style.display = 'block'
            notFound = false
        }else{
            monster.style.display = 'none'
        }
        if(notFound){
            document.querySelector('.not-found').style.display = 'block'
        }else{
            document.querySelector('.not-found').style.display = 'none'
        }
    }
})