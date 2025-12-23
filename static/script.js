const form = document.getElementById("sentiment-form");
const textInput = document.getElementById("text-input");
const resultBox = document.getElementById("result-box");
const loading = document.getElementById("loading");
const historyBox = document.getElementById("history-box");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // ⛔ stop refresh

    const text = textInput.value.trim();
    if (!text) return;

    // 🔥 TAMPILKAN LOADING
    loading.classList.remove("hidden");
    resultBox.innerHTML = "";

    fetch("/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: text })
    })
    .then(response => response.json())
    .then(data => {
       setTimeout(() => {
        loading.classList.add("hidden");

        if (data.result === "POSITIF" || data.result === "NEGATIF") {
            resultBox.innerHTML = `
                <div class="result ${data.result.toLowerCase()}">
                    <h3>${data.emoji} ${data.result}</h3>
                    <p>Confidence: ${data.confidence}%</p>
                </div>
            `;
        } else {
            resultBox.innerHTML = `
                <div class="result warning">${data.result}</div>
            `;
        }

        renderHistory(data.history);
    }, 1500);
    })
    .catch(error => {
        loading.classList.add("hidden");
        resultBox.innerHTML = "<p>Error analyzing sentiment</p>";
        console.error(error);
    });
});

function renderHistory(history) {
    historyBox.innerHTML = "<h3>Analysis History</h3>";

    history.forEach(item => {
        historyBox.innerHTML += `
            <div class="history-item">
                <p>${item.emoji} ${item.result} (${item.confidence}%)</p>
                <small>${item.text}</small>
            </div>
        `;
    });
}


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});


const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("open");
});


document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("open");
    });
});




const d = new Date();
let year = d.getFullYear();
document.getElementById("footer").innerHTML = "Copyright &copy MR22xx " +  year;