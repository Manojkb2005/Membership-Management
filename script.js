const table = document.getElementById("memberTable");
const members = JSON.parse(localStorage.getItem("members")) || [];

members.forEach(member => {
  const row = table.insertRow();
  row.insertCell(0).innerText = member.name;
  row.insertCell(1).innerText = member.email;
  row.insertCell(2).innerText = member.type;

  const certCell = row.insertCell(3); 
  const btn = document.createElement("button");
  btn.innerText = "Generate";
  btn.onclick = function () {
    localStorage.setItem("selectedMember", JSON.stringify(member));
    window.open("./cerficate.html");
  };
  certCell.appendChild(btn);
});
