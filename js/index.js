//displays copyright
let today = new Date();
let thisYear = today.getFullYear();
//use querySelector to access by tag name
let footer=document.querySelector('footer');
let copyright=document.createElement('p')
copyright.innerHTML= '&copy Marissa Lazo ' + thisYear;
footer.append(copyright);

//lists skills section
let skills = ["HTML", "CSS", "JS" ,"Python", "Java", "GitHub"];
let skillsSelection=document.querySelector('#skills');
let skillsList=skillsSelection.querySelector('ul');

for (let i in skills) {
    let skill=document.createElement('li')
    skill.innerHTML=skills[i];
    skillsList.append(skill) ;
}
//Message form
//note .value gives us the value attribute. Once there is user input the element has a value attribute
let messageForm=document.querySelector('form')
messageForm.addEventListener('submit', (event) => {
    event.preventDefault(); //use messageForm?
    let nameInput=event.target.name.value; 
    let emailInput=event.target.mail.value; //how is this being accesed? by id? works w/email
    let messageInput=event.target.message.value;
    console.log(`${nameInput} ${emailInput} ${messageInput}`)

    let messageSection=document.querySelector('#messages')
    let messageList=messageSection.querySelector('ul')
    let newMessage=document.createElement('li')
    
    newMessage.innerHTML=`<a href=mailto:${emailInput}>${nameInput} wrote: </a><br><span>${messageInput} </span>`
    let removeButton=document.createElement('button')
    removeButton.innerHTML='Remove'
    removeButton.type='button'
    
    removeButton.addEventListener('click', (event) => {
        let entry=removeButton.parentNode
        entry.remove()
    });
    newMessage.appendChild(removeButton)
    messageList.appendChild(newMessage)

    messageForm.reset()
});
