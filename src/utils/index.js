// get all coffes from local storage
const getLocal = ()=>{
    const all = localStorage.getItem('favorites');
    if(all){
        const fav = JSON.parse(all);
        console.log(fav);
        return fav;
    }return [];
}

// add a coffe to local storage
const addFavorite=(coffee) =>{
    // console.log(coffee)
    const fevorite = getLocal();
    const isExist = fevorite.find(item => item.id == coffee.id);
    if(isExist) return;
    fevorite.push(coffee);
    // console.log(fevorite);
    localStorage.setItem('favorites', JSON.stringify(fevorite));
}
//remove from local storage

export {addFavorite, getLocal};