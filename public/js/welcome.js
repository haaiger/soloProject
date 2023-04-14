const loginButton = document.querySelector("#login");
const registrationButton = document.querySelector("#registration");

loginButton.addEventListener("click", () => showForm("Войти", "login"));
registrationButton.addEventListener("click", () =>
  showForm("Зарегистрироваться", "registration")
);

async function showForm(buttonText, formType) {
  const container = document.querySelector(".container");
  container.innerHTML = `
    <form class="${formType}-form d-flex align-items-center flex-column justify-content-center" name="${formType}">
      <label for="login">Логин</label>
      <input type="text" name="email">
      <label for="password">Пароль</label>
      <input type="password" name="password">
      <button type="submit" name="loginOrRegistration" value="${formType}" class="btn btn-info mt-3">${buttonText}</button>
    </form>
  `;

  const form = document.querySelector(`.${formType}-form`);
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const result = await submitForm(formType, data);

      if (result.message === "Вы успешно зашли!" && formType === "login") {
        window.location.href = "/home";
      } else if (
        result.message === "Вы успешно зарегистрировались!" &&
        formType === "registration"
      ) {
        window.location.href = "/welcome";
      } else {
        displayErrorMessage(form, result.message);
        addRegistrationButton(form);
      }
    } catch (error) {
      console.log(`Ошибка fetch /${formType}`, error);
    }
  });
}

const submitForm = async (formType, data) => {
  try {
    const response = await fetch(`/${formType}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (error) {
    throw new Error(`Ошибка при отправке запроса на сервер: /${formType}`);
  }
};

const displayErrorMessage = (form, message) => {
  const attention = document.createElement("div");
  attention.className = "position-relative";
  attention.innerText = message;
  attention.style.color = "red";
  form.append(attention);
};

const addRegistrationButton = (form) => {
  const newButtonRegistration = document.createElement("button");
  newButtonRegistration.type = "submit";
  newButtonRegistration.name = "registration";
  newButtonRegistration.className = "btn btn-info mt-3";
  newButtonRegistration.innerText = "Зарегистрироваться";
  newButtonRegistration.addEventListener("click", () => {
    showForm("Зарегистрироваться", "registration");
  });
  form.append(newButtonRegistration);
};
