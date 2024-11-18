// Form submission handling
const form = document.getElementById("form");

// Event listener for form submission to display a success message
form.addEventListener(
  "submit",
  (handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("feedback").value = "";
    document.getElementById("course").value = "";
    Swal.fire({
      title: "Thank You!",
      text: "Feedback submitted successfully",
      color: "#000",
      background: "#fff",
      customClass: {
        confirmButton: "button",
      },
    });
  })
);
