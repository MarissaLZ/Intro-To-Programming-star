//displays copyright
let today = new Date();
let thisYear = today.getFullYear();
//use querySelector to access by tag name
let footer = document.querySelector('footer');
let copyright = document.createElement('p');
copyright.innerHTML = '&copy Marissa Lazo ' + thisYear;
footer.append(copyright);

//lists skills section
let skills = ["HTML", "CSS", "JS" ,"Python", "Java", "GitHub"];
let skillsSelection = document.querySelector('#skills');
let skillsList = skillsSelection.querySelector('ul');

for (let i in skills) {
    let skill = document.createElement('li')
    skill.innerHTML = skills[i];
    skillsList.append(skill) ;
}
//sample message
let sampleMessageList = document.querySelector('#messages').querySelector("ul")
let sampleMessage = document.createElement('li');
sampleMessage.innerHTML = `<a href=mailto:Lazomarissa@gmail.com>Marissa wrote: </a><br><span>Hey everyone! Leave a message using the form above.</span>`;
sampleMessageList.appendChild(sampleMessage);

//Message form
//note .value gives us the value attribute. Once there is user input the element has a value attribute
let messageForm = document.querySelector('form');
messageForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    let nameInput = event.target.name.value; 
    let emailInput = event.target.mail.value; 
    let messageInput = event.target.message.value;

    sampleMessage.remove();
    let messageList = document.querySelector('#messages').querySelector('ul');
    let newMessage = document.createElement('li');
    
    newMessage.innerHTML =`<a href=mailto:${emailInput}>${nameInput} wrote: </a><br><span>${messageInput}</span>`;
    let removeButton = document.createElement('button');
    removeButton.innerHTML = 'Remove';
    removeButton.type = 'button';
    
    removeButton.addEventListener('click', (event) => {
        let entry = removeButton.parentNode;
        entry.remove();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
});

//fetch request
//returns a promise
fetch("https://api.github.com/users/MarissaLZ/repos")
.then(response => response.json())
.then(function(data) {
    var projectList = document.getElementById("projects").querySelector("ul")

    for (i in data) {
        //get repo name
        let projectName = document.createElement("h3")
        projectName.innerHTML = data[i].name;
        projectName.className ="projectTags";

        //get repo description
        let projectDescription = document.createElement("p")
        projectDescription.innerHTML = data[i].description;
        projectDescription.className ="projectTags";
        
        ///create a project 
        let project = document.createElement("li");

        //append name and description
        project.appendChild(projectName)
        project.appendChild(projectDescription);

        //create clickable section
        let link = document.createElement("a");
        link.setAttribute("href",data[i].html_url);
        link.setAttribute("target", "blank")

        link.appendChild(project)
        projectList.appendChild(link)
    }
    })