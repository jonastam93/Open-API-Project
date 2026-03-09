const twoDContainer = document.getElementById("twoDresults");
const threeDContainer = document.getElementById("threeDresults");

const button2D = document.getElementById("load2D");
const button3D = document.getElementById("load3D");

// Load 2D cartoons
button2D.addEventListener("click", function(){

fetch("https://api.sampleapis.com/cartoons/cartoons2D")
.then(response => response.json())
.then(data => {

    twoDContainer.innerHTML = "";

    data.slice(8,10).forEach(cartoon => {

        const div = document.createElement("div");

        const title = document.createElement("h3");
        title.textContent = cartoon.title;

        const img = document.createElement("img");
        img.src = cartoon.image;
        img.width = 200;

        div.appendChild(title);
        div.appendChild(img);

        twoDContainer.appendChild(div);

    });

})
.catch(error => {
    console.log("Error loading 2D cartoons:", error);
});

});


// Load 3D cartoons
button3D.addEventListener("click", function(){

fetch("https://api.sampleapis.com/cartoons/cartoons3D")
.then(response => response.json())
.then(data => {

    threeDContainer.innerHTML = "";

    data.slice().forEach(cartoon => {

        const div = document.createElement("div");

        const title = document.createElement("h3");
        title.textContent = cartoon.title;

        const img = document.createElement("img");
        img.src = cartoon.image;
        img.width = 200;

        div.appendChild(title);
        div.appendChild(img);

        threeDContainer.appendChild(div);

    });

})
.catch(error => {
    console.log("Error loading 3D cartoons:", error);
});

});


