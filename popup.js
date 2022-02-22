const popupBtns = document.querySelectorAll("button.popup-btn");

popupBtns.forEach((popupBtn) => {
  popupBtn.addEventListener("click", () => {
    const wrapperDiv = document.createElement("div");
    wrapperDiv.className = "popup-wrapper";
    document.body.prepend(wrapperDiv);
    const popup = document.getElementById("d1");
    popup.classList.add("show");
    wrapperDiv.classList.add("show");
    const divRemover = document.querySelector("div.popup-wrapper");

    const remover = () => {
      popup.classList.remove("show");
      divRemover.remove();
    };

    const closeBtn = document.querySelectorAll(".popup-close");
    if (divRemover) {
      closeBtn.forEach((e) => {
        e.addEventListener("click", remover);
      });
      divRemover.addEventListener("click", remover);
    }
  });
});
