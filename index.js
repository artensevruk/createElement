//createElement('div')
//createElement("span" , "Hello world")
//createElement('div', [ul] )
//createElement('input' , {type : 'text'}])

const createElement = (tagName, ...options) => {
  const element = document.createElement(tagName);
  for (const item of options) {
    if (Array.isArray(item)) {
      element.append(...item);
    } else if (typeof item === "object") {
      for (const key in item) {
        const value = item[key];
        element[key] = value;
      }
    } else {
      element.innerText = item;
    }
  }

  return element;
};
export default createElement;
