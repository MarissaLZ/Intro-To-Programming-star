//displays copyright
var today = new Date();
var thisYear = today.getFullYear();
//use querySelector to access by tag name
var footer=document.querySelector('footer');
var copyright=document.createElement('p')
copyright.innerHTML='Marissa Lazo ' + thisYear;
footer.append(copyright);

//lists skills section
var skills = ["Python", "JavaScript", "Java"];
var skillsSelection=document.querySelector('#skills');
var skillsList=skillsSelection.querySelector('ul');

for (let i in skills) {
    var skill=document.createElement('li')
    skill.innerHTML=skills[i];
    skillsList.append(skill) ;
}
//Message form
//note .value gives us the value attribute. Once there is user input the element has a value attribute
var messageForm=document.querySelector('form')
messageForm.addEventListener('submit', (event) => {
    event.preventDefault(); //use messageForm?
    var nameInput=event.target.name.value; 
    var emailInput=event.target.mail.value; //how is this being accesed? by id? works w/email
    var messageInput=event.target.message.value;
    console.log(`${nameInput} ${emailInput} ${messageInput}`)

    var messageSection=document.querySelector('#messages')
    var messageList=messageSection.querySelector('ul')
    var newMessage=document.createElement('li')
    //Is there a better way to put a space between the message and button
    newMessage.innerHTML=`<a href=mailto:${emailInput}>${nameInput} wrote: </a><br><span>${messageInput} </span>`
    var removeButton=document.createElement('button')
    removeButton.innerHTML='remove'
    removeButton.type='button'
    
    removeButton.addEventListener('click', (event) => {
        var entry=removeButton.parentNode
        entry.remove()
    });
    newMessage.appendChild(removeButton)
    messageList.appendChild(newMessage)

    messageForm.reset()
});
