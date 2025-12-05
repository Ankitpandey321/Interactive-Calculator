from flask import Flask, render_template, jsonify
import mysql.connector

app = Flask(__name__)

# Connect to MySQL
def get_connection():
    return mysql.connector.connect(
        host="mysql",
        user="root",
        password="password",
        database="counterdb"
    )

@app.route('/')
def home():
    return app.send_static_file('index.html')

# Optional API to get counter value
@app.route('/api/counter')
def get_counter():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT value FROM counter WHERE id=1")
    value = cursor.fetchone()[0]
    cursor.close()
    conn.close()
    return jsonify({'counter': value})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
