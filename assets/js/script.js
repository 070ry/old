oncontextmenu = event => {
  if (event.ctrlKey || event.shiftKey || event.altKey || event.metaKey) {
    return true;
  }
  return false;
};
