from flask import Flask , request
from flask_cors import CORS

app = Flask(__name__)
CORS(app , resources={r"/*": {"origins": "*"}})



@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/build', methods=['POST'])
def build():
    data = request.json  # Access form data
    print(data)  # Print the received data to the console
    return 'Data received', 200



if __name__ == '__main__':
    app.run(debug=True)
