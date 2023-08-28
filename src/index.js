class todoItems
{
    constructor(title, description, dueDate, priority)
    {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

const item1 = new todoItems(
    'Complete Project Proposal',
    'Write a detailed project proposal for the upcoming client meeting.',
    '2023-09-15',
    'High'
  );
  
  console.log(item1);

  