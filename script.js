// ========================================================
// JavaScript DOM Manipulation Lab - 40 Mini Exercises
// ========================================================

// 🟩 PART 1: Selecting and Styling Elements (1–10)

// 1️⃣ Change text color of heading with id="title" to red.

    document.getElementById("title").style.color="red";

// 2️⃣ Change background color of all <p> elements to lightgray.

    document.querySelectorAll("p").forEach(p => p.style.backgroundColor = "lightgray");

// 3️⃣ Change heading text (#title) to "Welcome to the DOM Lab!".
    
    document.getElementById("title").innerText="Welcome to the DOM Lab!";

// 4️⃣ Add a solid black border to all <div> elements.

    let divs=document.querySelectorAll("div");
    for(let div of divs)
        div.style.border = "2px solid black";

// 5️⃣ Increase font size of the first <h1> to 36px.

    document.querySelector("h1").style.fontSize="36px";

// 6️⃣ Change text color of elements with class="highlight" to blue.

    let highlight= document.getElementsByClassName("highlight");
    for(let h of highlight)
        h.style.color="blue";

// 7️⃣ Add CSS class "active" to the first <div>.

    document.querySelector("div").classList.add("active");

// 8️⃣ Change the <body> background color to lightblue.

    document.body.style.backgroundColor="lightblue";

// 9️⃣ Set the font family of all <p> elements to Arial.

    let paragraph=document.querySelectorAll("p");
    for(let p of paragraph)
        p.style.fontFamily="Arial";

// 🔟 Change the image source of #sampleImage.

    document.getElementById("sampleImage").src="bookstack.png";

// 🟦 PART 2: Creating and Appending Elements (11–20)

// 1️⃣1️⃣ Create a new <p> and append it to the <body>.

    let newParagraph = document.createElement("p");  
    newParagraph.innerText = "This is a new paragraph ..."; 
    document.body.appendChild(newParagraph); 

// 1️⃣2️⃣ Create a new <li> and add it to the existing <ul>.
    let newli = document.createElement("li");  
    newli.innerText = "This is a new li ..."; 
    document.querySelector("ul").appendChild(newli); 


// 1️⃣3️⃣ Create a <button> labeled "Click Me!" and append it to a <div>.
    
    let newButton =document.createElement("button");
    newButton.innerText="Click Me ... ";
    document.querySelector("div").appendChild(newButton);

// 1️⃣4️⃣ Create <h2> dynamically and insert it before the first <p>.
    
    let newH2 = document.createElement("h2");
    newH2.innerText="this is a new H2 ...";
    
    let firstP = document.querySelector("p");

    document.body.insertBefore(newH2,firstP);

// 1️⃣5️⃣ Create an image and set width and height.

    let newImg = document.createElement("img");
    newImg.src ="new.png";
    newImg.width = 200;   
    newImg.height = 150;

    document.body.appendChild(newImg);


// 1️⃣6️⃣ Add 3 new <li> items using a loop.

    for(let i=0;i<3;i++){
        let newli = document.createElement("li");  
        newli.innerText = `This is a new li ${i+1} ...`; 

        document.body.appendChild(newli);
    }


// 1️⃣7️⃣ Create a <div> with class "card" and text inside.

    let newDiv = document.createElement("div");
    newDiv.className = "card";
    newDiv.innerText="this is a new div in class card ..";

    document.body.appendChild(newDiv);

// 1️⃣8️⃣ Append a paragraph containing your name.

    let newp = document.createElement("p");
    newp.innerText="my name nawal alrfoo ";
    document.body.appendChild(newp);

// 1️⃣9️⃣ Add a <span>[Edited]</span> inside every <p>.

    let allParagraphs = document.querySelectorAll("p");
    let i =0;
    for(;i<allParagraphs.length;i++){
        let newSpan =document.createElement("span");
        newSpan.innerText =` [Edited] Paragraph ${i+1}`;
        allParagraphs[i].appendChild(newSpan);
    }

// 2️⃣0️⃣ Remove the last child of <ul>.

    let myList = document.querySelector("ul");
    myList.removeChild(myList.lastElementChild);


// 🟨 PART 3: Event Handling (21–30)

// 2️⃣1️⃣ Add click event that shows an alert.

    let myButton = document.querySelector("button");

    myButton.addEventListener("click", function() {
    alert("Button was clicked!");  
});

// 2️⃣2️⃣ Change background color of a <div> when clicked.

    let myDiv = document.querySelector("div");

    myDiv.addEventListener("click", function() {
        myDiv.style.backgroundColor = "pink";
    });


// 2️⃣3️⃣ When hovering over <p>, make it bold.

    let myParagraph = document.querySelector("p");

    myParagraph.addEventListener("mouseover", function() {
        myParagraph.style.fontWeight = "bold";
    });


// 2️⃣4️⃣ When mouse leaves paragraph, remove bold style.
    myParagraph.addEventListener("mouseout", function() {
        myParagraph.style.fontWeight = "normal";
    });

// 2️⃣5️⃣ Add button to hide the image.
    
    let hideButton = document.createElement("button");
    hideButton.innerText = "Hide Image";
    document.body.appendChild(hideButton);

    let myImag = document.querySelector("img");

    hideButton.addEventListener("click", function() {
    myImag.style.display = "none";
});

// 2️⃣6️⃣ Add button to show the image again.

    let showButton = document.createElement("button");
    showButton.innerText = "show Image";
    document.body.appendChild(showButton);

    showButton.addEventListener("click", function() {
    myImag.style.display ="block";
}); 

// 2️⃣7️⃣ Create a counter button that increases with each click.

    let count = 0;

    let counterButton = document.createElement("button");
    counterButton.innerText =`count : (${count}) click ...`;
    document.body.appendChild(counterButton);

    counterButton.addEventListener("click", function() {
    count++;
    counterButton.innerText = `count : (${count}) click...`;
});
//

let line00 = document.createElement("hr");
document.body.appendChild(line00);

// 2️⃣8️⃣ Display entered text from an input when button clicked.

    let stringText ="Your text :";
    let inputField = document.createElement("input");
    inputField.placeholder = "Enter text...";
    document.body.appendChild(inputField);

    let showButton01 = document.createElement("button");
    showButton01.innerText = "Show Text";
    document.body.appendChild(showButton01);

    let output = document.createElement("p");
    document.body.appendChild(output);

    showButton01.addEventListener("click", function() {
    stringText+=inputField.value;
    output.innerText =stringText;
    });

//

let line01 = document.createElement("hr");
document.body.appendChild(line01);

// 2️⃣9️⃣ Change background color randomly when a button is clicked.

    let colorButton = document.createElement("button");
    colorButton.innerText = "Change Background Color";
    document.body.appendChild(colorButton);

    colorButton.addEventListener("click", function() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let randomColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = randomColor;
});

// 3️⃣0️⃣ Display which key is pressed.

    let info = document.createElement("p");
    info.innerText = "Press any key...";
    document.body.appendChild(info);

    document.addEventListener("keydown", function(event) {
        info.innerText = `You pressed: ${event.key}`;
    }); 

let line02 = document.createElement("hr");
document.body.appendChild(line02);

// 🟧 PART 4: Modifying and Traversing DOM (31–40)

// 3️⃣1️⃣ Change text of the first <li>.

    let firstLi = document.querySelector("li");  
    firstLi.innerText = "This is the updated first list item!";

// 3️⃣2️⃣ Get input value when button clicked.

    let inputField01 = document.createElement("input");
    inputField01.placeholder = "Type something...";
    document.body.appendChild(inputField01);

    let getButton = document.createElement("button");
    getButton.innerText = "Get Value";
    document.body.appendChild(getButton);

    getButton.addEventListener("click", function() {
    let value = inputField01.value; 
    alert("You entered: " + value);
    }); 

// 3️⃣3️⃣ Count number of <p> and alert the count.
let countp = document.querySelectorAll("p").length;
alert("Number of <p> elements: " + countp);

// 3️⃣4️⃣ Remove all <p> elements.
let paragraphs = document.querySelectorAll("p");
paragraphs.forEach(p => p.remove());

// 3️⃣5️⃣ Replace existing <h2> with new one.
let oldHeading = document.querySelector("h2");
let newHeading = document.createElement("h2");
newHeading.innerText = "This is the new heading!";
if (oldHeading) oldHeading.replaceWith(newHeading);

// 3️⃣6️⃣ Add CSS class 'highlighted' to all <li>.
let allItems = document.querySelectorAll("li");
for (let j = 0; j < allItems.length; j++) {
  allItems[j].classList.add("highlighted");
}

// 3️⃣7️⃣ Toggle a CSS class on <div> when clicked.
let myDiv01 = document.querySelector("div");
if (myDiv01) {
  myDiv01.addEventListener("click", function() {
    myDiv01.classList.toggle("active");
  });
}

// 3️⃣8️⃣ Clone an existing element and append copy. (مع حارس)
let originalElement = document.querySelector("p");
if (originalElement) {
  let clonedElement = originalElement.cloneNode(true);
  document.body.appendChild(clonedElement);
}

// 3️⃣9️⃣ Scroll smoothly to bottom when button clicked.
let scrollButton = document.createElement("button");
scrollButton.innerText = "Scroll to Bottom";
document.body.appendChild(scrollButton);
scrollButton.addEventListener("click", function() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});

// 4️⃣0️⃣ Build list dynamically using innerHTML from an array.
let items = ["HTML", "CSS", "JavaScript", "Kotlin", "Python"];
let myList01 = document.createElement("ul");
items.forEach(function(item) { myList01.innerHTML += `<li>${item}</li>`; });
myList01.style.fontSize = "20px";
myList01.style.color = "#ae5e94ff";
document.body.appendChild(myList01);
