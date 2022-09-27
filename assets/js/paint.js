function configureListeners() {
    let images = document.querySelectorAll("img")


     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners
        document.getElementById(images[i].id).addEventListener("mouseover", addOpacity);
        document.getElementById(images[i].id).addEventListener("mouseout", removeOpacity);
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    if (!this.classList.contains('dim')){
        this.classList.add('dim')
    }   
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class
     if (this.classList.contains('dim')){
        this.classList.remove('dim');
    }
    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            price = "$19.99"
            color = "Lime Green"
            updatePrice(color, price);     
            break;           
        case 'pn2':
            price = "$12.99"
            color = "Medium Brown"
            updatePrice(color, price);    
            break;            
        case 'pn3':
            price = "$11.99"
            color = "Royale Blue"
            updatePrice(color, price);  
            break;   
        case 'pn4':
            price = "$14.99"
            color = "Bright Red"
            updatePrice(color, price);  
            break;   
        case 'pn5':
            price = "$9.99"
            color = "Solid White"
            updatePrice(color, price);       
            break;   
        case 'pn6':
            price = "$15.99"
            color = "Solid Black"
            updatePrice(color, price);        
            break;   
        case 'pn7':
            price = "$8.99"
            color = "Medium Blue"
            updatePrice(color, price); 
            break;   
        case 'pn8':
            price = "$16.99"
            color = "Light Purple"
            updatePrice(color, price);   
            break;   
        case 'pn9':
            price = "$17.99"
            color = "Bright Yellow"
            updatePrice(color, price); 
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById("color-price");
        colorPrice.textContent = price
        
        let color = document.getElementById("color-name");
        color.textContent = colorName
    }
    
}
