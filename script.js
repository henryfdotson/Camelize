function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
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
  camelstring = camel.toString();
  camelstring.replace(",","");
  alert(camelstring);
}