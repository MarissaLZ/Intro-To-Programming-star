var today = new Date();
var thisYear = today.getFullYear();
//use querySelector to access by tag name
var footer= document.querySelector('footer');
//console.log(footer)

var copyright = document.createElement('p')
copyright.innerHTML = 'Marissa Lazo ' + thisYear;
//console.log(copyright)
footer.append(copyright);

//why doesn't this work?
//footer.appendChildcopyright)
//index.js:11 Uncaught TypeError: Failed to execute 'appendChild' on 
//'Node': parameter 1 is not of type 'Node'.at index.js:11

var skills = ["Python", "JavaScript", "Java"]
var skillsSelection = document.querySelector('#skills')
var skillsList = skillsSelection.querySelector('ul')

//loops by index
for (let i in skills) {
    var skill = document.createElement('li')
    skill.innerHTML= skills[i]
    skillsList.append(skill) 
}

