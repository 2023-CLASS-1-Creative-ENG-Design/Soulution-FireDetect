from flask import Flask, request, jsonify
from flask_cors import CORS
import pymysql

app = Flask(__name__)
CORS(app)
CORS(app, resources={r'*':{'origins': '*'}})

db = pymysql.connect(
    host="compdb",
    user="user",
    password="password",
    db="camerainfo",
    cursorclass=pymysql.cursors.DictCursor
)
@app.route('/camlist', methods=['GET'])
def location_status():   
    with db.cursor() as cursor:
        query = "SELECT location, status FROM camerainfo"
        cursor.execute(query)
        result = cursor.fetchall()
    if result:
        return jsonify(result)

@app.route('/camconinfo', methods=['POST'])
def get_externalIP_port():
    data = request.get_json()
    macAddr = data['macAddr']
    with db.cursor() as cursor:
        query = "SELECT macAddr, externalIP, port FROM camerainfo WHERE macAddr = \'" + macAddr + "\'"
        cursor.execute(query)
        result = cursor.fetchone()
    if result:
        return jsonify(result)
    else:
        return jsonify({})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=10001)