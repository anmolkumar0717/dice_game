
const randgen=(()=>{
    const randnum=Math.floor(Math.random()*6)+1
    return randnum
})


const diceroller=(()=>
{
    let num_store1=randgen()
    let num_store2=randgen()
    let img1=document.querySelectorAll('img')[0]
    let img2=document.querySelectorAll('img')[1]
    img1.setAttribute('src','dice_img/'+num_store1+'.png')
    img2.setAttribute('src','dice_img/'+num_store2+'.png')

    if(num_store1>num_store2){
        document.querySelector('p').textContent='Player 1 Win'
        console.log(document.querySelector('p').textContent)
    }

    else if(num_store1<num_store2){
        document.querySelector('p').textContent='Player 2 Win'
        console.log(document.querySelector('p').textContent)
    }
    else{
        document.querySelector('p').textContent='!!Koi nahi jeeta!!'
        console.log(document.querySelector('p').textContent)
    }
})
