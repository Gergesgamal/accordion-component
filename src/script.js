let qoustions = document.querySelectorAll(".question__title");
const func = (elem, method, cls) => {
  if (method === "r") return elem.classList.remove(cls);
  if (method === "t") return elem.classList.toggle(cls);
  if (method === "a") return elem.classList.add(cls);
};
qoustions.forEach(
  (qoustion) =>
    (qoustion.onclick = ({ target }) =>
      qoustions.forEach((e) =>
        e !== target ? func(e, "r", "selected") : func(target, "t", "selected")
      ))
);
