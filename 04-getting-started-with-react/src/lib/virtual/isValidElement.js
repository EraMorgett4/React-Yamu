function isValidElement(node) {
  if ("$$typeof" in node && node?.$$typeof === VIRTUAL_ELEMENT_TYPE) {
  } else {
    return false;
  }
}

export default isValidElement;
