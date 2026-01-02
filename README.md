
# 🎬 Film Sentiment Analysis with AI

A web-based AI application to analyze **movie review sentiment**
(Positive / Negative) using **Machine Learning** and **Flask**.



---

## 🚀 Live Demo
🔗 [https://mr22xx.pythonanywhere.com/]

---

## 🧠 Features
- 🎭 Sentiment classification (Positive / Negative)
- 😊 Emoji-based result output
- 📊 Confidence score (prediction probability)
- 🕘 History of recent analyses
- 🎬 Cinematic landing page
- 📱 Fully responsive (mobile & desktop)
- 🍔 Mobile hamburger navigation
- 🎞️ Smooth scroll & parallax effect
- ⚡ No page refresh (AJAX)

---

## 🛠️ Tech Stack

**Machine Learning**
- Python
- Scikit-learn
- Logistic Regression
- TF-IDF Vectorizer

**Web Development**
- Flask
- HTML, CSS, JavaScript

**Deployment**
- GitHub
- Render (Free Hosting)

---

## 📂 Project Structure

```

sentimentanalysis/
├── app.py
├── requirements.txt
├── model/
│   ├── sentiment_model.pkl
│   └── vectorizer.pkl
├── templates/
│   ├── index.html
│   └── about.html
├── static/
│   ├── style.css
│   └── script.js
└── README.md

````

---

## 📊 Dataset
Movie reviews dataset with sentiment labels:
- `1` → Positive
- `0` → Negative

The data is transformed using **TF-IDF** before training
a **Logistic Regression** classification model.

---

## ⚙️ Installation (Local)

```bash
git clone https://github.com/Mr22XX/filmsentimentanalysis.git
cd filmsentimentanalysis
pip install -r requirements.txt
python app.py
````

Open in browser:

```
http://127.0.0.1:5000
```

---

## 🧪 Example Prediction

**Input:**

> "The movie was visually stunning and emotionally powerful."

**Output:**

* 😊 POSITIVE
* Confidence: 89.3%

---

## 🌐 Deployment

This application is deployed using **Render** with:

```bash
gunicorn app:app
```

---

## 📌 Future Improvements

* Advanced NLP preprocessing
* Model comparison (Naive Bayes, SVM)
* User authentication
* Analytics dashboard
* Multi-language sentiment analysis

---

## 👨‍🎓 Author

**Rayhan Muhammad**
AI & Data Science Enthusiast
Undergraduate Student (Semester 5–6)

---

⭐ If you find this project useful, feel free to star the repository!

```

