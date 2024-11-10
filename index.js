var articles = [
  {
    Rank: 1,
    Author: "Bien Casambre",
    Date: "September 29, 2023",
    Title: "UPB Admin remind students: Avoid petting campus cats (1)",
    Summary: "Over two dozen rebhjgaebvkjabvhportsbhv ofbvhkjaebvjhkearvbja vbvhjaerkhja cat-related injuries were filed by students at the University of the Philippines Baguio Health Service Office (UPB-HSO) over the month of September.",
    Link: "article.html",
    Image: "pet_me_not.png"
  },
  {
    Rank: 2,
    Author: "Bien Casambre",
    Date: "September 29, 2023",
    Title: "UPB Admin remind students: Avoid petting campus cats (2)",
    Summary: "Over two dozen reports of cat-related injuries were filed by students at the University of the Philippines Baguio Health Service Office (UPB-HSO) over the month of September.",
    Link: "article.html",
    Image: "pet_me_not.png"
  },
  {
    Rank: 3,
    Author: "Bien Casambre",
    Date: "September 29, 2023",
    Title: "UPB Admin remind students: Avoid petting campus cats (3)",
    Summary: "Over two dozen reports of cat-related injuries were filed by students at the University of the Philippines Baguio Health Service Office (UPB-HSO) over the month of September.",
    Link: "article.html",
    Image: "pet_me_not.png"
  },
  {
    Rank: 4,
    Author: "Bien Casambre",
    Date: "September 29, 2023",
    Title: "UPB Admin remind students: Avoid petting campus cats (4)",
    Summary: "Over two dozen reports of cat-related injuries were filed by students at the University of the Philippines Baguio Health Service Office (UPB-HSO) over the month of September.",
    Link: "article.html",
    Image: "pet_me_not.png"
  },
];

function default_articles() {
  const div = document.getElementById("article_container");
  const list = document.getElementById("sortable");
  for (const article of articles) {
    const container = document.createElement("div");
    container.classList.add("horizontal_article");

    const text_container = document.createElement("div");
    text_container.classList.add("text_container");

    const title_container = document.createElement("div");
    title_container.classList.add("title_container");

    const author = document.createElement("p")
    const date = document.createElement("p")
    const title = document.createElement("p");
    const summary = document.createElement("p")
    const image = document.createElement('img');

    author.appendChild(document.createTextNode(article.Author));
    date.appendChild(document.createTextNode(article.Date));
    title.appendChild(document.createTextNode(article.Title));
    summary.appendChild(document.createTextNode(article.Summary));


    image.src = article.Image;
    image.width = 100;

    text_container.appendChild(summary);
    title_container.appendChild(title)

    container.appendChild(image);
    container.appendChild(author);
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

function vertical_articles(){
  const div = document.getElementById("article_container");
  div.classList.remove("horizontal");
  div.classList.remove("tiled");
  div.classList.add("vertical");
}
function horizontal_articles(){
  const div = document.getElementById("article_container");
  div.classList.remove("vertical");
  div.classList.remove("tiled");
  div.classList.add("horizontal");
}
function tiled_articles() {
  const div = document.getElementById("article_container");
  div.classList.remove("vertical");
  div.classList.remove("horizontal");
  div.classList.add("tiled");
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
  console.log(articles);

  const div = document.getElementById("article_container");
  div.innerHTML = '';

  for (const article of articles) {
    const container = document.createElement("div");
    container.classList.add("horizontal_article");

    const text_container = document.createElement("div");
    text_container.classList.add("text_container");

    const title_container = document.createElement("div");
    title_container.classList.add("title_container");

    const author = document.createElement("p")
    const date = document.createElement("p")
    const title = document.createElement("p");
    const summary = document.createElement("p")
    const image = document.createElement('img');

    author.appendChild(document.createTextNode(article.Author));
    date.appendChild(document.createTextNode(article.Date));
    title.appendChild(document.createTextNode(article.Title));
    summary.appendChild(document.createTextNode(article.Summary));


    image.src = article.Image;
    image.width = 100;

    text_container.appendChild(summary);
    title_container.appendChild(title)

    container.appendChild(image);
    container.appendChild(author);
    container.appendChild(date);
    container.appendChild(title_container);
    container.appendChild(text_container);
    div.appendChild(container);
  }
}

const sortableList =
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

default_articles();
rearrange_articles();


