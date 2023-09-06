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

    addTitle(title);
     

}

// function removeDiv(){
    
// }


// let newDivs = document.createElement("div");
// let mainc = document.getElementById("maincontent");
// newDivs.classList.add("displayProject")
// let newD = document.createElement("div");
// mainc.appendChild(newDivs);
// newD.textContent = i;
// newD.classList.add("mainHeader");
// newDivs.appendChild(newD);


function addTitle(titleInput)
{
  let newDivs = document.createElement("div");
  let mainc = document.getElementById("maincontent");
  newDivs.classList.add("displayProject")
  let newD = document.createElement("div");
  let bTitle = document.createElement("div");
  let bButton = document.createElement("button");
  let divAddBtn = document.createElement("div");
  let mBody = document.createElement("div");
  let bHeader = document.createElement("div");
  
  mainc.appendChild(newDivs);
  // newD.textContent = titleInput;
  newD.classList.add("mainHeader");
  bTitle.classList.add("bodyTitle");
  bTitle.textContent = titleInput;
  bButton.classList.add("addBtn");
  bButton.textContent = "Add Task";
  divAddBtn.classList.add("addButton");
  newDivs.appendChild(newD);
  newD.appendChild(bTitle);
  newD.appendChild(divAddBtn);
  divAddBtn.appendChild(bButton);
  mBody.classList.add("mainBody");
  bHeader.classList.add("bodyHeader");
  bHeader.textContent = "Seems like there is nothing to be done yet..."
  newDivs.appendChild(mBody);
  mBody.appendChild(bHeader);

divAddBtn.addEventListener("click", function()
{
  let promptTask = prompt("Enter a task: ");
  bHeader.textContent = promptTask;
  mBody.appendChild(bHeader);
  mBody.appendChild(bHeader);
})
 
  
  const parentContainer = document.getElementById("options");

    parentContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("pbutton")) {
        event.target.parentNode.remove();
        
       newDivs.remove();
    }
    
    
    });
    
}

