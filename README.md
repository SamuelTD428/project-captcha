# 🧩 Project CAPTCHA

**Project CAPTCHA** is a lightweight, customizable web-based CAPTCHA system designed to verify human interaction and keep bots at bay—without relying on third-party services. Perfect for static sites or projects hosted on GitHub Pages.

---

## 🚀 Features

- 🎨 **Canvas-rendered CAPTCHA** with randomized, distorted characters
- 🧠 **Client-side logic** for generating and validating input
- 🔁 **Refresh support** for new challenges
- 🖼️ **Simple styling** ready for customization
- ⚡ **No backend required**—works entirely in the browser
- 📦 **Easy deployment** on GitHub Pages

---

## ⚙️ How It Works

1. A random string is generated using JavaScript.
2. The string is rendered on a canvas element with basic distortion.
3. Users enter what they see into the form field.
4. Input is compared to the CAPTCHA string and validated in real time.

---

## 📦 Setup & Usage

### 1. Clone the repository

```bash
git clone https://github.com/SamuelTD428/project-captcha.git
cd project-captcha
```

### 2. Open in your browser

Simply open `index.html` in your preferred web browser. No build step or backend required.

### 3. Integrate into your site

Copy the relevant HTML, CSS, and JS files into your project. Example usage in HTML:

```html
<!-- Example integration -->
<div id="captcha-container"></div>
<script src="captcha.js"></script>
```

---

## 🖼️ Demo

Check out the [live demo](https://SamuelTD428.github.io/project-captcha/) (if available).

![Screenshot](screenshot.png) <!-- Add a screenshot named screenshot.png in your repo for best effect -->

---

## 🛠️ Customization

- **Styling:** Modify `style.css` to suit your site's look and feel.
- **Challenge complexity:** Adjust parameters in `captcha.js` to change character length, distortion, etc.

---

## 💡 Requirements

- Modern web browser with JavaScript enabled

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.

---

Let me know if you want further customization or want to add details (like demo links, screenshots, or contributor guidelines)!
