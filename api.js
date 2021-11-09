const app = document.getElementById("root");

const container = document.createElement("div"); 
container.setAttribute("class", "container"); 

app.appendChild(container);

let request = new XMLHttpRequest();

request.open('GET', 'https://api.kanye.rest', true);

request.onload = function() {
  
  let quote = JSON.parse(this.response);
  quote = JSON.stringify(quote);
  quote = quote.split('{"quote":').join(' ');
  quote = quote.split('}').join(' ');
  quote = quote.split('fuck').join('f#%k');


  if (request.status >= 200 && request.status < 400) {
      
        console.log(quote);

        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const h2 = document.createElement("h2"); 
        h2.textContent = quote;

        const p = document.createElement("p");
        p.textContent = "- Kanye West"

        container.appendChild(card);
        card.appendChild(h2);
        card.appendChild(p);
  } else {
    document.write("<p>Kļūda!</p>");
  }
}

request.send();