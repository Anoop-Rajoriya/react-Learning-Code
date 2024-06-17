
export default {
  createElement: function (type, attr, ...children) {
    if (typeof type === "function") {
      return type();
    }
    const reactElement = {
      type: "",
      props: {},
      children: [],
    };
    if (!type && !children.length) return null;

    if (!type && children.length) return children; //returns array of array

    reactElement.type = type;
    reactElement.children = children; //add array of array

    if (attr) reactElement.props = attr;

    return reactElement;
  },
};
