const personalInformationForm = document.forms.personalInformation;

personalInformationForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(personalInformationForm);
  const data = Object.fromEntries(formData);

  try {
    const result = await updatePersonalInformation(data);

    if (result.message === "Персональная информация успешно обновлена!") {
      displayMessage(personalInformationForm, result.message, "green");
      personalInformationForm.reset();
    }
  } catch (error) {
    displayMessage(
      personalInformationForm,
      `Ошибка обновления личной информации: ${error}`,
      "red"
    );
  }
});

const updatePersonalInformation = async (data) => {
  try {
    const response = await fetch("/office/info", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (error) {
    throw new Error("Ошибка при отправке запроса на сервер");
  }
};

const displayMessage = (formElement, message, color) => {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageElement.style.color = color;
  formElement.appendChild(messageElement);

  setTimeout(() => {
    messageElement.remove();
  }, 3000);
};
