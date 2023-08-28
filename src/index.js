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
divOne.textContent = "hello world";
divOne.classList.add("project");
testing.appendChild(divOne);

const divTwo = document.createElement("div");
divTwo.textContent = "hello world two";
divTwo.classList.add("project");
testing.appendChild(divTwo);

const newpj = document.getElementById("pj");
newpj.addEventListener("click", function() {
    let i = 0;
    // prompt("Enter Project Name: ");
    i = prompt("Enter Project Name: ");
    console.log(i);
    addProject(i);
});

function addProject(title)
{
    const divThree = document.createElement("div");
    divThree.textContent = title;
    divThree.classList.add("project");
    testing.appendChild(divThree);
}