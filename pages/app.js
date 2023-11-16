// // Variables para almacenar datos
// let userLoggedIn = false;
// let username = "";
// let maxAmount = 0;
// let expenses = [];

// // Función para iniciar sesión
// function login() {
//   const enteredUsername = document.getElementById("username").value;
//   const enteredPassword = document.getElementById("password").value;
//   // Implementa la autenticación aquí

//   if (enteredUsername === "usuario" && enteredPassword === "contraseña") {
//     userLoggedIn = true;
//     username = enteredUsername;
//     document.getElementById("login").style.display = "none";
//     document.getElementById("app").style.display = "block";
//     document.getElementById(
//       "user-greeting"
//     ).textContent = `Bienvenido, ${username}!`;
//   }
// }

// // Función para cerrar sesión
// function logout() {
//   userLoggedIn = false;
//   username = "";
//   maxAmount = 0;
//   expenses = [];
//   document.getElementById("app").style.display = "none";
//   document.getElementById("login").style.display = "block";
//   document.getElementById("username").value = "";
//   document.getElementById("password").value = "";
// }

// // Función para establecer el tope máximo
// function setMaxAmount() {
//   maxAmount = parseFloat(document.getElementById("max-amount").value);
// }

// // Función para agregar un gasto
// function addExpense() {
//   if (userLoggedIn) {
//     const amount = parseFloat(document.getElementById("expense-amount").value);
//     const category = document.getElementById("expense-category").value;
//     const description = document.getElementById("expense-description").value;
//     if (amount >= 1000) {
//       expenses.push({ amount, category, description, user: username });
//       document.getElementById("expense-amount").value = "";
//       document.getElementById("expense-description").value = "";
//       updateExpensesList();
//       checkExpenses();
//     } else {
//       alert("El gasto debe ser superior o igual a 1000.");
//     }
//   }
// }

// // Función para actualizar la lista de gastos
// function updateExpensesList() {
//   const listFilter = document.getElementById("list-filter").value;
//   const expensesDiv = document.getElementById("expenses");
//   expensesDiv.innerHTML = "";

//   expenses.forEach((expense) => {
//     if (
//       listFilter === "all" ||
//       expense.category === listFilter ||
//       (listFilter === "user" && expense.user === username)
//     ) {
//       const expenseCard = document.createElement("div");
//       expenseCard.className = "expense-card";
//       expenseCard.innerHTML = `<p>Valor: $${expense.amount}</p>
//                 <p>Categoría: ${expense.category}</p>
//                 <p>Descripción: ${expense.description}</p>
//                 <p>Usuario: ${expense.user}</p>`;
//       expensesDiv.appendChild(expenseCard);
//     }
//   });
// }

// // Función para verificar el tope máximo y mostrar alerta
// function checkExpenses() {
//   if (maxAmount > 0) {
//     const totalExpenses = expenses.reduce(
//       (total, expense) => total + expense.amount,
//       0
//     );
//     if (totalExpenses >= maxAmount * 0.9) {
//       const amountLeft = maxAmount - totalExpenses;
//       document.getElementById(
//         "alert"
//       ).textContent = `Falta $${amountLeft} para alcanzar el tope máximo.`;
//     } else {
//       document.getElementById("alert").textContent = "";
//     }
//   }
// }

// // Event listeners
// document
//   .getElementById("list-filter")
//   .addEventListener("change", updateExpensesList);
// document
//   .getElementById("expense-amount")
//   .addEventListener("input", checkExpenses);
