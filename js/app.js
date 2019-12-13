document.addEventListener("DOMContentLoaded", () => {
  const newUnitForm = document.querySelector("#new-unit-form");
  newUnitForm.addEventListener("submit", handleNewUnitFormSubmit);
})

const handleNewUnitFormSubmit = function(event) {
  event.preventDefault();

  const armyListItem = createArmyListItem(event.target);
  const armyList = document.querySelector("#army-list");
  armyList.appendChild(armyListItem);

  event.target.reset();
}

const createArmyListItem = function(form) {
  const armyListItem = document.createElement("ul");
  armyListItem.classList.add("army-list-item");

  const role = document.createElement("h3");
  role.textContent = form.role.value;
  armyListItem.appendChild(role);

  const allegiance = document.createElement("p");
  allegiance.textContent = form.allegiance.value;
  armyListItem.appendChild(allegiance);

  const name = document.createElement("p");
  name.textContent = form.name.value;
  armyListItem.appendChild(name);

  const size = document.createElement("p");
  size.textContent = form.size.value;
  armyListItem.appendChild(size);

  const points = document.createElement("p");
  points.textContent = form.points.value;
  armyListItem.appendChild(points);

  return armyListItem;
}
