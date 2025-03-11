const buttonTimesClicked = new Map();

document.getElementById("btn-datalayer-reset").addEventListener("click", () => {
  console.info("datalayer reset");
  dataLayer.push(function () {
    this.reset();
  });
});

document
  .getElementById("btn-datalayer-set-null")
  .addEventListener("click", () => {
    console.info("datalayer set myData to null");
    dataLayer.window.dataLayer.push(function () {
      this.set("myData", null);
    });
  });

document.querySelectorAll("[data-gtm-id]").forEach((el) => {
  const gtmId = `${el.getAttribute("data-gtm-id")}`;
  setButtonName(el, gtmId);

  el.addEventListener("click", () => {
    console.info(`btn ${gtmId} clicked`);
    const event = `btn-#${gtmId}`;
    switch (gtmId) {
      case "one":
        window.dataLayer.push({
          event,
          myData: {
            name: "John Doe",
            age: 30,
            city: "New York",
            state: "NY",
            children: ["Anna", "Lena"],
          },
        });
        break;
      case "two":
        window.dataLayer.push({
          event,
          myData: {
            name: "Jane Doe",
            age: 35,
            gender: "female",
            city: "Los Angeles",
            children: ["AnnaLena"],
          },
        });
        break;
    }

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
