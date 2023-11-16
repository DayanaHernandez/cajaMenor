// import {
//   addExpense,
//   getExpenses,
//   getTotalExpenses,
//   isAlertThresholdReached,
//   maxLimit,
// } from "./model.js";

// function updateExpenseList() {
//   const expensesList = document.getElementById("expenses-list");
//   expensesList.innerHTML = "";

//   const expenses = getExpenses();
//   expenses.forEach((expense) => {
//     const expenseCard = document.createElement("div");
//     expenseCard.classList.add("expense-card");
//     expenseCard.innerHTML = `
//             <p>Valor: $${expense.value}</p>
//             <p>Categoría: ${expense.category}</p>
//             <p>Descripción: ${expense.description}</p>
//             <p>Fecha: ${expense.date.toLocaleString()}</p>
//             <p>Usuario: ${expense.user}</p>
//         `;
//     expensesList.appendChild(expenseCard);
//   });
// }

// function updateAlert() {
//   const alertMessage = document.getElementById("alert-message");
//   if (isAlertThresholdReached()) {
//     const remainingAmount = maxLimit - getTotalExpenses();
//     alertMessage.textContent = `Alerta: Quedan $${remainingAmount} para alcanzar el tope máximo.`;
//   } else {
//     alertMessage.textContent = "";
//   }
// }

// document
//   .getElementById("register-expense-button")
//   .addEventListener("click", () => {
//     const value = parseFloat(document.getElementById("expense-value").value);
//     const category = document.getElementById("expense-category").value;
//     const description = document.getElementById("expense-description").value;
//     const user = "Usuario Ejemplo";

//     if (value >= 1000) {
//       addExpense(value, category, description, user);
//       updateExpenseList();
//       updateAlert();
//       document.getElementById("expense-value").value = "";
//       document.getElementById("expense-category").value = "negocios";
//       document.getElementById("expense-description").value = "";
//     } else {
//       alert("El gasto debe ser mayor o igual a $1000.");
//     }
//   });
