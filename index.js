document.querySelectorAll("[data-gtm-id]").forEach((el) => {
  el.addEventListener("click", () => {
    const gtmId = `${el.getAttribute("data-gtm-id")}`;
    console.info(`btn ${gtmId} clicked`);
    window.dataLayer.push({
      event: `btn-#${gtmId}`,
      myData: {
        name: "John Doe",
        age: 30,
        city: "New York",
        state: "NY",
        children: ["Alice", "Bob"],
      },
    });
  });
});
