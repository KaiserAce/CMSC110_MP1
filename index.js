var articles = [ /*container for article summaries in homepage*/
  {
    Rank: 1,
    Author: "Bien Casambre",
    Date: "April 24, 2023",
    Title: "UPB cats receive donated supplies",
    Summary: "A bundle of cat collars, cat food, cat litter, and cat medicine were sent to University of the Philippines Baguio by Pilly's Pet Supplies last April 23rd...",
    Link: "donations.html",
    Image: "donations.png"
  },
  {
    Rank: 2,
    Author: "Bien Casambre",
    Date: "September 17, 2023",
    Title: "UPB cats beneficiaries of annual vax program, anti-rabies shots updated",
    Summary: "Last September 16th, the Cats of UPB volunteer community facilitated a schoolwide vaccination program...",
    Link: "vax.html",
    Image: "kuya_riki_cat.png"
  },
  {
    Rank: 3,
    Author: "Bien Casambre",
    Date: "September 29, 2023",
    Title: "UPB Admin remind students: 'Avoid petting campus cats'",
    Summary: "Over two dozen reports of cat-related injuries were filed by students at the University of the Philippines Baguio Health Service Office (UPB-HSO) over the month of September...",
    Link: "rj.html",
    Image: "pet_me_not.png"
  },
  {
    Rank: 4,
    Author: "Bien Casambre",
    Date: "December 18, 2023",
    Title: "Welcome Gwen!",
    Summary: "The family of UPB Cats welcomed Gwen, a white and orange tabby PusPin to the campus last December, 2023...",
    Link: "gwen.html",
    Image: "gwen.png"
  },
  {
    Rank: 5,
    Author: "Bien Casambre",
    Date: "April 25, 2024",
    Title: "Congreowtulations, graduates!",
    Summary: "The Cats of UPB community extends its warmest congratulations to the graduates of Batch 2024...",
    Link: "grad.html",
    Image: "grad.png"
  },
  {
    Rank: 6,
    Author: "Bien Casambre",
    Date: "November 2, 2024",
    Title: "Fly high, Uno",
    Summary: "The Cats of UPB community publicly announced last October 23rd the passing of Uno, the senior white and grey tabby Puspin cat...",
    Link: "uno.html",
    Image: "uno.png"
  },
];

function default_articles() { /*layout of homepage*/
  const div = document.getElementById("article_container");
  const list = document.getElementById("sortable");
  for (const article of articles) {
    const container = document.createElement("div");
    container.classList.add("horizontal_article");

    const text_container = document.createElement("div");
    text_container.classList.add("text_container");

    const title_container = document.createElement("div");
    title_container.classList.add("title_container");

    const title = document.createElement("p");
    const author = document.createElement("p")
    const date = document.createElement("p")
    const summary = document.createElement("p")
    const image = document.createElement('img');

    title.appendChild(document.createTextNode(article.Title));
    author.appendChild(document.createTextNode(article.Author));
    date.appendChild(document.createTextNode(article.Date));
    summary.appendChild(document.createTextNode(article.Summary));

    image.src = article.Image;
    image.width = 175;

    const viewLink = document.createElement("a");
        viewLink.href = article.Link; // Set the link to the article's URL
        viewLink.textContent = "View Full Article"; // Link text
        viewLink.classList.add("view-full-article");

    text_container.appendChild(summary);
    text_container.appendChild(viewLink);
    title_container.appendChild(title)

    container.appendChild(image);
    container.appendChild(date);
    container.appendChild(title_container);
    container.appendChild(text_container);
    div.appendChild(container);

    const item = document.createElement("li");
    item.appendChild(document.createTextNode(article.Title));
    item.draggable = true;

    list.appendChild(item);
  }
};

function vertical_articles(){ /*vertical scroll layout*/
  const div = document.getElementById("article_container");
  div.classList.remove("horizontal");
  div.classList.remove("tiled");
  div.classList.add("vertical");
  let spread = document.querySelectorAll('.horizontal_article'); /*changes width of each displayed article to 500px*/
  spread.forEach(element => {
    element.style.width = '500px'
  })
  
}
function horizontal_articles(){ /*horizontal feed layout*/
  const div = document.getElementById("article_container");
  div.classList.remove("vertical");
  div.classList.remove("tiled");
  div.classList.add("horizontal");
  let spread = document.querySelectorAll('.horizontal_article'); /*changes width of each displayed article back to 220px*/
  spread.forEach(element => {
    element.style.width = '220px'
  })
  
}
function tiled_articles() { /*columnal tile layout*/
  const div = document.getElementById("article_container");
  div.classList.remove("vertical");
  div.classList.remove("horizontal");
  div.classList.add("tiled");
  let spread = document.querySelectorAll('.horizontal_article'); /*changes width of each displayed article back to 220px*/
  spread.forEach(element => {
    element.style.width = '220px'
  })
}

function rearrange_articles(){
  const lists = document.getElementsByTagName("li");
  const temp = [];
  for (const list of lists) {
    let article = articles
    .find(item => item.Title === list.textContent);
    temp.push(article);
  }

  articles = temp;

  const div = document.getElementById("article_container");
  div.innerHTML = '';

  for (const article of articles) {
    const container = document.createElement("div");
    container.classList.add("horizontal_article");

    const text_container = document.createElement("div");
    text_container.classList.add("text_container");

    const title_container = document.createElement("div");
    title_container.classList.add("title_container");

    const title = document.createElement("p");
    const author = document.createElement("p")
    const date = document.createElement("p")
    const summary = document.createElement("p")
    const image = document.createElement('img');

    title.appendChild(document.createTextNode(article.Title));
    author.appendChild(document.createTextNode(article.Author));
    date.appendChild(document.createTextNode(article.Date));
    summary.appendChild(document.createTextNode(article.Summary));


    image.src = article.Image;
    image.width = 175;

    const viewLink = document.createElement("a");
        viewLink.href = article.Link; // Set the link to the article's URL
        viewLink.textContent = "View Full Article"; // Link text
        viewLink.classList.add("view-full-article");

    text_container.appendChild(summary);
    text_container.appendChild(viewLink);
    title_container.appendChild(title)

    container.appendChild(image);
    container.appendChild(title_container);
    container.appendChild(date);
    container.appendChild(text_container);
    div.appendChild(container);
  }
}

function list() {
  const sortableList = /*for rearranging articles*/
      document.getElementById("sortable");
  let draggedItem = null;
   
  sortableList.addEventListener(
      "dragstart",
      (e) => {
          draggedItem = e.target;
          setTimeout(() => {
              e.target.style.display =
                  "none";
          }, 0);
  });
   
  sortableList.addEventListener(
      "dragend",
      (e) => {
          setTimeout(() => {
              e.target.style.display = "";
              draggedItem = null;
          }, 0);
      rearrange_articles();
  });
   
  sortableList.addEventListener(
      "dragover",
      (e) => {
          e.preventDefault();
          const afterElement =
              getDragAfterElement(
                  sortableList,
                  e.clientY);
          const currentElement =
              document.querySelector(
                  ".dragging");
          if (afterElement == null) {
              sortableList.appendChild(
                  draggedItem
              );} 
          else {
              sortableList.insertBefore(
                  draggedItem,
                  afterElement
              );}
      });
   
  const getDragAfterElement = (
      container, y
  ) => {
      const draggableElements = [
          ...container.querySelectorAll(
              "li:not(.dragging)"
          ),];
   
      return draggableElements.reduce(
          (closest, child) => {
              const box =
                  child.getBoundingClientRect();
              const offset =
                  y - box.top - box.height / 2;
              if (
                  offset < 0 &&
                  offset > closest.offset) {
                  return {
                      offset: offset,
                      element: child,
                  };} 
              else {
                  return closest;
              }},
          {
              offset: Number.NEGATIVE_INFINITY,
          }
      ).element;
  };
}

function lightmode(){ /*sets light mode theme*/
  document.body.style.setProperty("--primary-color", "white");
  document.body.style.setProperty("--secondary-color", "#0c0c0c");
  document.body.style.setProperty("--tertiary-color", "rgb(255, 255, 126)");
  document.body.style.setProperty("--tertiary-dark", "#ffd900");
  logo.src = "logo.png";
  document.body.style.setProperty("background", "white");
  document.body.style.setProperty("color", "#0c0c0c");
  sessionStorage.setItem("theme", "light")
}

function darkmode(){ /*sets dark mode theme*/
  document.body.style.setProperty("--primary-color", "#0c0c0c");
  document.body.style.setProperty("--secondary-color", "white");
  document.body.style.setProperty("--tertiary-color", "#6441a5");
  document.body.style.setProperty("--tertiary-dark", "#5538ac");
  logo.src = "invertedlogo.png";
  document.body.style.setProperty("background", "#101212");
  document.body.style.setProperty("color", "white");
  sessionStorage.setItem("theme", "dark")
}

function fluffmode(){ /*sets fluffy mode theme*/
  document.body.style.setProperty("--primary-color", "black");
  document.body.style.setProperty("--secondary-color", "white");
  document.body.style.setProperty("--tertiary-color", "#6441a5");
  document.body.style.setProperty("--tertiary-dark", "#5538ac");
  logo.src = "invertedlogo.png";
  document.body.style.backgroundImage = "url('fluffbg.png')";
  document.body.style.setProperty("color", "white");
  sessionStorage.setItem("theme", "fluff")
}

window.addEventListener("DOMContentLoaded", () => {
  let theme = sessionStorage.getItem("theme");
  if (theme === "dark") {
    console.log(theme)
    darkmode()
  } else if (theme === "light") {
    console.log(theme)
    lightmode()
  } else if (theme === "fluff") {
    console.log(theme)
    fluffmode()
  }
});

function mainpage_onload(){
  default_articles();
  rearrange_articles();
  list();
}


