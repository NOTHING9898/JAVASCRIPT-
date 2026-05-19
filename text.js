





let cart = {

items: [

{ name: "Headphones", emoji: "🎧", price: 50 },

{ name: "Keyboard", emoji: "⌨️", price: 30 },

{ name: "Mouse", emoji: "🖱️", price: 20 }

]

};

function saveCart () {

    let  jsonText = JSON.stringify( cart , null , 2)
   document.getElementById("output-title").innerHTML = "cart saved"
}
