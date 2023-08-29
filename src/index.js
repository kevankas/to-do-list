class todoItems
{
    constructor(title, description, dueDate, priority)
    {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate; //pulls up calendar
        this.priority = priority; //low medium high
    }
}

const item1 = new todoItems(
    'Complete Project Proposal',
    'Write a detailed project proposal for the upcoming client meeting.',
    '2023-09-15',
    'High'
  );
  
  console.log(item1);

const testing = document.getElementById("options");
const divOne = document.createElement("div");
divOne.textContent = "Home";
divOne.classList.add("project");
testing.appendChild(divOne);

const newButtonOne = document.createElement("button");
newButtonOne.textContent = "-";
newButtonOne.classList.add("pbutton");
divOne.appendChild(newButtonOne);


const divTwo = document.createElement("div");
divTwo.textContent = "School";
divTwo.classList.add("project");
testing.appendChild(divTwo);

const newButtonTwo = document.createElement("button");
newButtonTwo.textContent = "-";
newButtonTwo.classList.add("pbutton");
divTwo.appendChild(newButtonTwo);

const newpj = document.getElementById("pj");
newpj.addEventListener("click", function() {
    let i = 0;
    // prompt("Enter Project Name: ");
    do {
        i = prompt("Enter Project Name: ");
        if (i === "") {
          alert("Please enter a valid value.");
        }
      } while (i === "");

      if (i !== null) {
        console.log(i);
        addProject(i);
      }
    
});

function addProject(title)
{
    const divThree = document.createElement("div");
    divThree.textContent = title;
    divThree.classList.add("project");
    testing.appendChild(divThree);

    const newButton = document.createElement("button");
    newButton.textContent = "-";
    newButton.classList.add("pbutton");
    divThree.appendChild(newButton);

    

}

// function removeDiv(){
    const parentContainer = document.getElementById("options");

    parentContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("pbutton")) {
        event.target.parentNode.remove();
    }
    });
// }

