var famousPeople = [{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
  },{
  title: "Philosopher",
  name: "Socrates",
  bio: "A classical Greek (Athenian) philosopher credited as one of the founders of Western philosophy. He is an enigmatic figure known chiefly through the accounts of classical writers, especially the writings of his students Plato and Xenophon and the plays of his contemporary Aristophanes. Plato's dialogues are among the most comprehensive accounts of Socrates to survive from antiquity, though it is unclear the degree to which Socrates himself is hidden behind his 'best disciple', Plato",
  image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Socrates_Louvre.jpg",
  lifespan: {
    birth: -470,
    death: -399
  }
  },{
  title: "Inventor",
  name: "Nikolai Tesla",
  bio: "Inventor, electrical engineer, mechanical engineer, physicist, and futurist best known for his contributions to the design of the modern alternating current (AC) electricity supply system.",
  image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/N.Tesla.JPG",
  lifespan: {
    birth: 1856,
    death: 1943
  }
  },{
  title: "Daimyo",
  name: "Oda Nobunaga",
  bio: "A powerful daimyo of Japan in the late 16th century who attempted to unify Japan during the late Sengoku period.",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Oda_Nobunaga-Portrait_by_Giovanni_NIcolao.jpg",
  lifespan: {
    birth: 1534,
    death: 1582
  }
}]
var input = document.getElementById('input');
var container = document.getElementById('container');

// for (var i = 0; i < person.length; i++) {
//   person.item(i).addEventListener('click', clicky);
// };
//Adds border to person child elements and brings focus on input
function clicky(event){
  event.target.classList.toggle('clicked')
  input.hidden = false;
  input.focus();
};

function personLoader(obj) {
  for (var i = 0; i < obj.length; i++){
    container.innerHTML += "<person id='person'></person>"
      var person = document.getElementsByTagName('person');
    person[i].innerHTML += `<header>Title:${obj[i].title}<br>Name:${obj[i].name}</header>`;
    person[i].innerHTML += `<section>Bio:${obj[i].bio}<br><img src=${obj[i].image}></section>`;
    person[i].innerHTML += `<footer>Birth:${obj[i].lifespan.birth}<br>Death:${obj[i].lifespan.death}`;
  };

};









