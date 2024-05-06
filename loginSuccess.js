document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const input = document.getElementById("input");
  const description = document.getElementById("description");
  const msg = document.getElementById("msg");
  const add = document.getElementById("add");
  const date = document.getElementById("date");
  const incompleteTask = document.getElementById("incompleteTask");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    formValidation();
  });

  let formValidation = () => {
    if (input.value === "") {
      console.log("failure");
      msg.innerHTML = "Input Filled Empty";
    } else {
      console.log("Success");
      msg.innerHTML = "";
      addData();
      add.setAttribute("data-bs-dismiss", "modal");
      add.click();
      add.setAttribute("data-bs-dismiss", "");
    }
  };

  let data = [];

  let addData = () => {
    data.push({
      text: input.value,
      description: description.value,
      date: date.value,
    });
    saveDataToLocalStorage(data);
    createTasks();
  };

  let createTasks = () => {
    incompleteTask.innerHTML = "";
    data.forEach((task) => {
      let taskElement = document.createElement("div");
      taskElement.innerHTML = `
        <div style="display: flex;" class="incompleteTask">
          <label class="custom-checkbox-wrapper" id="checkboxInComplete" for="custom-checkbox">
            <input class="checkbox" type="checkbox" name="checkbox" id="custom-checkbox" onclick="deleteTask(this)">
            <span class="checkbox"></span>
          </label>
          <div class="content">
            <h3>${task.text}</h3>
            <h5>⏰ ${task.date}</h5>
          </div>
        </div>
      `;

      incompleteTask.appendChild(taskElement);
    });

    resetForm();
  };

  let resetForm = () => {
    input.value = "";
    description.value = "";
    date.value = "";
  };

  const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      data = tasks;
      createTasks();
    }
  };

  const saveDataToLocalStorage = (data) => {
    localStorage.setItem("tasks", JSON.stringify(data));
  };

  const locationElement = document.querySelector(".location");
  locationElement.addEventListener("click", function () {
    window.location.href = "../Location/location.html";
  });

  const logOutElement = document.querySelector(".logOut");
  logOutElement.addEventListener("click", function () {
    window.location.href = "../Login/index.html";
  });

  loadTasks();
});
