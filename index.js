function append() {
  // Create a new notes div
  const newNotesDiv = document.createElement("div");
  newNotesDiv.classList.add("notes");

  // Create a new input element
  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.classList.add("Inp");
  newInput.placeholder = "add_to_do";

  // Create a new target div
  const newTargetDiv = document.createElement("div");
  newTargetDiv.id = "targetDiv";

  // Append the input and target div to the new notes div
  newNotesDiv.appendChild(newInput);
  newNotesDiv.appendChild(newTargetDiv);

  // Get the existing note div
  const noteDiv = document.querySelector(".wrap");

  // Append the new notes div to the existing note div
  noteDiv.appendChild(newNotesDiv);

  // Add an event listener to the new input element
  newInput.addEventListener("change", function () {
    // Get the value from the input
    const inputValue = newInput.value;

    // Create a new paragraph element
    const newParagraph = document.createElement("p");
    newParagraph.className = "para";
    // Set the text content of the new paragraph to the input value
    newParagraph.textContent = inputValue;

    // Append the new paragraph to the new target div
    newTargetDiv.appendChild(newParagraph);

    // Clear the input field
    newInput.value = "";
    
  });
}
const input = document.querySelector(".Inp");

// Get the div where you want to append the input
const targetDiv = document.querySelector("#targetDiv");

// Add an event listener to the input element
input.addEventListener("change", function () {
  // Get the value from the input
  const inputValue = input.value;

  // Create a new paragraph element
  const newParagraph = document.createElement("p");

  // Set the text content of the new paragraph to the input value
  newParagraph.textContent = inputValue;
    newParagraph.className = "para";
  // Append the new paragraph to the target div
  targetDiv.appendChild(newParagraph);
  clears();
  input.placeholder = "add more";
});
function clears() {
  input.value = "";
}
