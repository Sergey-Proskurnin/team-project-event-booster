const preloaderFactory = selector => {
  return {
    element: document.querySelector(selector),
    hide() {
      this.element.classList.add('disable');
    },
    show() {
      this.element.classList.remove('disable');
    },
  };
};

export default preloaderFactory;
