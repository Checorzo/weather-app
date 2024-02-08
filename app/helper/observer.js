export function setUbication(fn) {
  const observer = new MutationObserver(fn);

  observer.observe(document.getElementById("ubication-name"), {
    attributes: true,
    childList: true,
    subtree: true,
    characterData: true,
    attributeOldValue: false,
    characterDataOldValue: false,
  });
}
