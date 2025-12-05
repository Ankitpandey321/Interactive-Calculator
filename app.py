from flask import Flask, send_from_directory

app = Flask(__name__, static_url_path='')

# Serve index.html
@app.route("/")
def home():
    return send_from_directory('.', 'index.html')

# Serve static files (CSS, JS, audio)
@app.route("/<path:filename>")
def static_files(filename):
    return send_from_directory('.', filename)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
