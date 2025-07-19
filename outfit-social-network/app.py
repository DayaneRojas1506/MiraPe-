from flask import Flask, render_template, request, redirect, url_for, jsonify
import os

app = Flask(__name__)

outfits = [
    {
        'image_url': 'https://es.pinterest.com/pin/1337074887341398/',
        'description': 'Outfit casual de verano',
        'likes': 0,
        'comments': [],
        'id': 1
    },
    {
        'image_url': 'https://es.pinterest.com/pin/10203536651424927/',
        'description': 'Look urbano',
        'likes': 0,
        'comments': [],
        'id': 2
    }
]

@app.route('/')
def feed():
    return render_template('feed.html', outfits=outfits)

@app.route('/publish', methods=['GET', 'POST'])
def publish():
    if request.method == 'POST':
        image_url = request.form['image_url']
        description = request.form['description']
        if image_url:
            new_id = len(outfits) + 1
            outfits.append({
                'image_url': image_url,
                'description': description,
                'likes': 0,
                'comments': [],
                'id': new_id
            })
            return redirect(url_for('feed'))
    return render_template('publish.html')

@app.route('/api/outfits', methods=['GET'])
def api_outfits():
    return jsonify(outfits)

if __name__ == '__main__':
    app.run(debug=True)