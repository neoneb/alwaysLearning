// Using createElement() to create HTML elements

/*
	<div class="card">
		<div class="name" title="I am Adam Jones">Adam Jones</div>
		<ul class="skills">
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
		</ul>
	</div>
*/
const skills = ["HTML", "CSS", "JavaScript"];

const card = document.createElement("div");
const nameElement = document.createElement("div");
const skillsListElement = document.createElement("ul");

//card
card.classList.add("card");
//console.log(card);
document.body.appendChild(card);

//name
nameElement.classList.add("name");
nameElement.setAttribute("title", "I am Adam Jones")
nameElement.textContent = "Adam Jones";

//skills List
skillsListElement.classList.add("skills");

//skills list items
for (const skill of skills) {
	const skillElement = document.createElement("li")

	skillElement.textContent = skill;

	skillsListElement.append(skillElement);
}


//append everything to the card
//card.appendChild(nameElement);
card.append(nameElement, skillsListElement);

//console.log(nameElement);