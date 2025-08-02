document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const errorMsg = document.getElementById("errorMsg");
            if (username === "admin" && password === "1234") {
                window.location.href = "menu.html";
            } else {
                errorMsg.textContent = "Usuario o contraseña incorrectos.";
            }
        });
    }

    const margenForm = document.getElementById("margenForm");
    if (margenForm) {
        margenForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const margen = document.getElementById("margen").value;
            document.getElementById("margenResultado").textContent = "Nuevo margen actualizado a " + margen + "%";
        });
    }

    if (document.getElementById("inventarioTable")) {
        const data = [

        ];
        const table = document.getElementById("inventarioTable");
        data.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${item.producto}</td><td>${item.cantidad}</td><td>$${item.precio}</td>`;
            table.appendChild(row);
        });
    }
});

const form = document.getElementById("formInventario");
const tableBody = document.querySelector("#inventarioTable tbody");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const codigo = document.getElementById("codigo").value;
  const descripcion = document.getElementById("descripcion").value;
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const precio = parseFloat(document.getElementById("precio").value);
  const total = cantidad * precio;

  const fila = document.createElement("tr");

  fila.innerHTML = `
    <td>${codigo}</td>
    <td>${descripcion}</td>
    <td>${cantidad}</td>
    <td>${precio.toLocaleString()}</td>
    <td>${total.toLocaleString()}</td>
  `;

  tableBody.appendChild(fila);

  form.reset();
});

function limpiarTabla() {
  tableBody.innerHTML = "";
}
