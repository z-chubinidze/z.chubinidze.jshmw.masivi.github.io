
//arrays

const Title = ["Personal", "Agency", "Unlimited"];
const Description = ["Just started using awesome Module. Great way to boost the hard designing or prototyping process.",
                    "Also a perfect tool for creative studios and freelancers",
                    "Living in today’s metropolitan world of cellular phones, mobile computers"];
const price = ["Free", "€123", "€232" ];
const priceDescription = ["Per month billed annualy or €250 from month to month",
                        "Per month billed annualy or €250 from month to month",
                         "Per month billed annualy or €250 from month to month"]

               
const content = Title.map((items,index)=>{
let  boxContent = {};
boxContent.Title = items;
boxContent.Description = Description[index];
boxContent.price = price[index];
boxContent.priceDescription = priceDescription[index];
return boxContent

})

for (let i = 0; i < Title.length; i++){
    
    const mainBox = document.getElementById("content");
    
    var box = document.createElement("DIV");
box.classList.add("box")
   
const pTitle = document.createElement("h5");
const pTitleText = document.createTextNode(content[i].Title);

const DescriptionP = document.createElement("P");
const DescriptionPText = document.createTextNode(content[i].Description);

const hr = document.createElement("HR")

const flexBox = document.createElement("DIV")
flexBox.classList.add("flexBox")
const priceP = document.createElement("span");
const pricePText = document.createTextNode(content[i].price);

const priceDescriptionP = document.createElement("P");
const priceDescriptionPText = document.createTextNode(content[i].priceDescription);

const button = document.createElement("button");
const buttonText = document.createTextNode("Buy now")
    

mainBox.appendChild(box);
    box.appendChild(pTitle)
        pTitle.appendChild(pTitleText);

    box.appendChild(DescriptionP)
        DescriptionP.appendChild(DescriptionPText)

    box.appendChild(hr)
    box.appendChild(flexBox)
        flexBox.appendChild(priceP)
            priceP.appendChild(pricePText)

        flexBox.appendChild(priceDescriptionP)
            priceDescriptionP.appendChild(priceDescriptionPText)

    box.appendChild(button);
    button.appendChild(buttonText)

 
}
const icon = document.createElement("img")
icon.src = "Icon.png"
box.appendChild(icon)
icon.style.position = "absolute"
icon.style.top = "0"
icon.style.right = "105%"

