var input = document.getElementById("textInput");

input.addEventListener("keypress", function(event) {
  if(event.key === "Enter") {
    event.preventDefault();
    document.getElementById("button").click();
  }
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function outputCamel(string) {
  const resultDiv = document.createElement("div");
  resultDiv.classList.add("card");
  resultDiv.innerHTML = string;
  document.getElementById("results").appendChild(resultDiv);
}

function camelize(input) {
  camel = [];
  sections = input.split("-");
  firstElement = sections[0];
  sections.shift();
  sections.forEach(element => {
    element = capitalizeFirstLetter(element);
    camel.push(element);
  });
  camel.unshift(firstElement);
  camelString = camel.toString();
  camelWithoutCommas = camelString.replaceAll(",","");
  outputCamel(camelWithoutCommas);
}