from flask import Flask, render_template

app = Flask(__name__, static_folder='static', static_url_path='/static')  # Configuración profesional

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

if __name__ == "__main__":
    app.run(debug=True, port=5001)