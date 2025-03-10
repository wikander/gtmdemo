document.getElementById("one").addEventListener("click", () => {
  console.info("btn #one");
  window.dataLayer.push({
    event: "btn #one",
    myData: {
      name: "John Doe",
      age: 30,
      city: "New York",
      state: "NY",
      children: ["Alice", "Bob"],
    },
  });
});
