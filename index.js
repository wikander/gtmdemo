const buttonTimesClicked = new Map();

document.querySelectorAll("[data-gtm-id]").forEach((el) => {
  const gtmId = `${el.getAttribute("data-gtm-id")}`;
  setButtonName(el, gtmId);

  el.addEventListener("click", () => {
    console.info(`btn ${gtmId} clicked`);

    window.dataLayer.push({
      event: `btn-#${gtmId}`,
      myData: {
        name: "John Doe",
        age: 30,
        city: "New York",
        state: "NY",
        children: ["Alice", "Bob"],
        clickCount: buttonTimesClicked.get(gtmId),
      },
    });

    setButtonName(el, gtmId);
  });
});

function setButtonName(button, id) {
  const timesClicked = buttonTimesClicked.get(id);

  let newTimesClicked = timesClicked + 1;
  if (timesClicked === undefined) {
    newTimesClicked = 0;
  }
  buttonTimesClicked.set(id, newTimesClicked);
  button.textContent = `Button ${id} | Clicked ${newTimesClicked} times`;
}
