(()=>{const t=new class{constructor(t,e,o,n){this.title=t,this.description=e,this.dueDate=o,this.priority=n}}("Complete Project Proposal","Write a detailed project proposal for the upcoming client meeting.","2023-09-15","High");console.log(t);const e=document.getElementById("options"),o=document.createElement("div");o.textContent="hello world",o.classList.add("project"),e.appendChild(o);const n=document.createElement("div");n.textContent="hello world two",n.classList.add("project"),e.appendChild(n),document.getElementById("pj").addEventListener("click",(function(){let t=0;t=prompt("Enter Project Name: "),console.log(t)}))})();