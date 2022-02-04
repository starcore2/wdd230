//The code that checks for if it's not just white space
/*
let check = text.trim();
if(check != '')
{
    //Insert code here
}
*/
/*
A prediction here. My problem is probably going to be figuring out how to pop the list out. 
It's going to be easy to build the list but figuring out how to pop it is a problem.
Before creating the code I think what I need to do is make a list of each chapter and Id number for each chapter.
I think it would be best to do something like objects but we will see.
*/

//Lets quickly test building listed objects and so.
/*
let x = document.createElement('li');
x.textContent='pizza';
let z = document.querySelector('list');
z.appendChild(x)
*/
//This line of code easly makes a pizza appere.

let favorites = []
let check
let sameChapter = false
//This is the code to creat delete this button
/*
function removeFavorite(listId){
    let target = document.querySelector(listId)
    
}
*/
let buttonchecking = document.querySelector('button[type="submit"]');
let z = document.querySelector('.list')
buttonchecking.addEventListener("click", function addFavorite() {
    let x = document.querySelector('#favchap');

    x = x.value

    if (x == undefined || x == null) {
        x = 'Alma 5'
    }

    let check = x.trim();
    if (check != '') {
        for (let y of favorites) {
            check = check.toLocaleLowerCase();
            y = y.toLocaleLowerCase();
            if (y == check) {
                sameChapter = true;
            }
        }
        if (sameChapter != false) {
            sameChapter = false;
            window.alert('The same chapter was inputed.');
        }
        else {
            //create list item
            favorites.push(x);
            let w = document.createElement('li');
            w.textContent = x;
            w.id = x;
            test = w.id;
            z.appendChild(w);
            //create button item
            deltethis = document.createElement('button');
            deltethis.textContent = '❌';
            deltethis.onclick = function removeFavorite(e) {
                z.removeChild(w);
                let i = 0
                for(let mur of favorites){
                    mur = mur+'❌';
                    if(mur == w.textContent){
                        favorites.splice(i,1);
                    }
                    i++
                }
            }
            w.appendChild(deltethis)

        }
    }
    else {
        window.alert('Invalid Selection.');
    }
});
