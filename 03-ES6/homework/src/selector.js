var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
if (matchFunc(startEl)) resultSet.push(startEl);
  // TU CÓDIGO AQUÍ
  for (let i = 0; i < startEl.children.length; i++) { // for (let el of startEl)
    let resultado = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet = [...resultSet, ...resultado];
  };

  return resultSet;
};


// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if (selector[0] === '#') return 'id';
  else if (selector[0] === '.') return 'class';
  else if (selector.split('.').length > 1) return 'tag.class';
  else return 'tag';

};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;

  if (selectorType === "id") {
    matchFunction = (el) => selector === `#${el.id}`;

  } else if (selectorType === "class") {
    matchFunction = (el) => {
      return el.classList.contains(selector.replace('.', '')); // replace -> reemplaza el primer parametro "." por el segundo parametro (vacio)
    };

  } else if (selectorType === "tag.class") {
    matchFunction = (element) => {
      // console.log(selector);
      const [tag, tagClass] = selector.split('.');

      const elTag = element.tagName.toLowerCase();
      const elClass = element.className.split(' ');

      return tag === elTag && elClass.includes(tagClass);
    };

  } else if (selectorType === "tag") {
    matchFunction = (element) =>  element.tagName.toLowerCase() === selector;

  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
