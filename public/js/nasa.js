const { nasaInformation } = document.forms;
const button = document.querySelector("#findInfo");
const container = document.querySelector(".nasa_container");
const blockCards = document.querySelector(".blockCards");
const secretBtn = document.querySelector(".secretBtn");

// Ограничения для datepicker'а.
const now = new Date();
const year = now.getFullYear();
const month = (now.getMonth() + 1).toString().padStart(2, "0");
const day = now.getDate().toString().padStart(2, "0");
const maxDate = `${year}-${month}-${day}`;
document.querySelector(".date-input").setAttribute("max", maxDate);

/**
 * Рендеринг новых блоков с фото и описанием на /nasa. Максимум 3 блока.
 */
button?.addEventListener("click", async (event) => {
  if (blockCards.childNodes.length < 3) {
    try {
      const formData = new FormData(nasaInformation);
      const data = Object.fromEntries(formData);

      data.date = data.date || new Date().toISOString().slice(0, 10);

      const findMatchResponse = await fetch("/nasa/match", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const findMatchResult = await findMatchResponse.json();

      console.log(findMatchResult);

      if (findMatchResult.message === "Такого объекта нет в Базе данных") {
        const NASA_API_URL = "https://api.nasa.gov/planetary/apod?";
        const API_KEY = "api_key=eRndFJ06N3qKPBFhYE2fDQk4Hllj6ZGqlqfOfrZ2";
        const URL = `${NASA_API_URL}${API_KEY}&date=${data.date}`;

        const response = await fetch(URL);
        const result = await response.json();

        const newCosmosResponse = await fetch("/nasa/new-cosmos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(result),
        });

        const getResult = await newCosmosResponse.json();
        console.log(getResult);

        const newCard = document.createElement("div");
        newCard.innerHTML = `
        <div class="card mt-3" style={{ height: "300px" }}>
          <img
            class="card-img-top"
            src=${result.url}
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">
              ${result.title}
            </p>
          </div>
          <button type="button" class="btn btn-info mb-2 nasa-btn" id="redirect">
            Больше
          </button>
        </div>`;

        blockCards.appendChild(newCard);

        const btnRedirect = document.querySelectorAll("#redirect");
        btnRedirect.forEach((el) =>
          el?.addEventListener("click", async () => {
            window.location.href = `/nasa/card/${data.date}`;
          })
        );
      } else {
        const newCard = document.createElement("div");
        newCard.innerHTML = `
        <div class="card mt-3" style={{ height: "300px" }}>
          <img
            class="card-img-top"
            src=${findMatchResult.data.url}
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">
              ${findMatchResult.data.title}
            </p>
          </div>
          <button type="button" class="btn btn-info mb-2 nasa-btn" id="redirect">
            Больше
          </button>
        </div>`;

        blockCards.appendChild(newCard);

        const btnRedirect = document.querySelectorAll("#redirect");
        btnRedirect.forEach((el) =>
          el?.addEventListener("click", async () => {
            window.location.href = `/nasa/card/${data.date}`;
          })
        );
      }
    } catch (error) {
      console.log("Ошибка fetch запроса:", error);
    }
  }
});

const API_KEY = "eRndFJ06N3qKPBFhYE2fDQk4Hllj6ZGqlqfOfrZ2";
const NASA_API_URL = "https://api.nasa.gov/planetary/apod";
const START_DATE = new Date("2001-02-23");
const END_DATE = new Date("2023-04-13");

const createDateParam = (date) => {
  return date.toJSON().slice(0, 10);
};

const createRequestUrl = (date) => {
  const dateParam = createDateParam(date);
  return `${NASA_API_URL}?api_key=${API_KEY}&date=${dateParam}`;
};

const postDataToServer = async (data) => {
  try {
    const response = await fetch("/nasa/new-cosmos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result.message);
  } catch (error) {
    console.error("Ошибка отправки данных на сервер:", error.message);
  }
};

const fetchAndPostData = async (date) => {
  try {
    const response = await fetch(createRequestUrl(date));
    const data = await response.json();
    await postDataToServer(data);
  } catch (error) {
    console.error("Ошибка получения данных из API:", error.message);
  }
};

secretBtn.addEventListener("click", async (event) => {
  console.log("ТУТ");
  for (let dayOffset = 1; dayOffset < 32; dayOffset++) {
    const currentDate = new Date(START_DATE);
    currentDate.setDate(dayOffset);
    await fetchAndPostData(currentDate);
    console.log(createDateParam(currentDate));
  }
});
