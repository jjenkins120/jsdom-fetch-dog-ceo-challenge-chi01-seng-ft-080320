


function main(){
    //addImagesToDom(); 
    addBreedListToDom(); 
    breedChangeOnClick();
    filterByBreedName();
}

function addImagesToDom(){
        fetch('https://dog.ceo/api/breeds/image/random/4')
            .then(function(response){ return response.json()})
            .then(function(data){
                data.message.forEach( function(element){
                    const gallery = document.querySelector('#dog-image-container')
                    const iTag = document.createElement("IMG")
                    iTag.src = element
                    gallery.append(iTag)
                }) 
            })
}

function addBreedListToDom(){
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(function(response){ return response.json()})
        .then(function(data){
            Object.keys(data.message).forEach( function(element){
                const uL = document.querySelector('#dog-breeds')
                const liTag = document.createElement('li')
                
                uL.append(liTag)
                liTag.innerHTML = element
            }) 
        })
}


const dBreeds = document.querySelector('#dog-breeds')
function breedChangeOnClick(){
    dBreeds.addEventListener('click', function(event){
        const liTag = event.target
        liTag.style.color = 'green'
    })
} 

function filterByBreedName(){
    const dropDown = document.querySelector('#breed-dropdown')
    dropDown.addEventListener('change', function(event){
        const dDSelect = event.target.value
    

        //if (dDSelect == )
        const IDObject = document.querySelectorAll('li')
        
        // debugger
        Object.keys(IDObject).forEach(function(element){
            if (IDObject[element].textContent[0] != dDSelect){
                IDObject[element].style.display = 'none';}
            else {IDObject[element].style.display = 'block'}
        })
        
    })

}

// addeventlistner for page load
    // run a function that will 
        //fetch the images from the URL
        //parse response into JSON
        // add image elements to DOM for each image in the array
            //iterate over each element in the array
            // create a function that adds image elements

main()