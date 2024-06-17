export default {
  createRoot: function (root) {
    return {
      render: function (children) {
        const DOMElement = createDOMElement(children);
        if (DOMElement) {
          root.innerHTML = ''
          if (Array.isArray(DOMElement)) {
            let nodlist = [].concat(...DOMElement);
            console.log("redered array elements", nodlist);
            root.append(...nodlist);
            return;
          }
          console.log("rendered element ", DOMElement);
          root.appendChild(DOMElement);
        }
      },
    };
  },
};

function createDOMElement(element) {
  console.log("createDOMElement() parameter", element);

  if (!element && typeof element !== "number") return null;
  if (typeof element === "string" || typeof element === "number") {
    return document.createTextNode(element);
  }
  if (Array.isArray(element)) {
    const nodList = element.map((elm) => {
      if (typeof elm === "string") return createDOMElement(elm);
      else if (Array.isArray(elm)) return createDOMElement(elm);
      else {
        return createDOMElement(elm);
      }
    });
    return nodList;
  }

  const domElement = document.createElement(element.type);

  if (Object.entries(element.props).length) {
    insertAttr(domElement, Object.entries(element.props));
  }

  if (element.children.length) {
    element.children.forEach((children) => {
      if (Array.isArray(children)) {
        const list = [].concat(...children);
        domElement.append(...createDOMElement(list));
        return;
      }
      domElement.append(createDOMElement(children));
    });
  }

  return domElement;
}

function insertAttr(element, attr) {
  attr.forEach(([key, val]) => {
    if (key === "key") return;
    if (key === "className") {
      element.setAttribute("class", val);
      return;
    }
    if (key === "style") {
      Object.entries(val).forEach(([style, val]) => {
        element.style[style] = val;
      });
      return;
    }
    if(key === 'click'){
      element.addEventListener(key, val);
    }
    element.setAttribute(key, val);
  });
}
