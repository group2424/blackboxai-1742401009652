from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    """
    Route for the home page that displays Ruth's profile
    """
    profile_data = {
        'name': 'MUSHIMIYIMANA Ruth',
        'age': 20,
        'origin': 'Musanze',
        'interests': [
            'Enjoying quiet places',
            'Moderate drinking',
            'Non-smoking lifestyle'
        ],
        'narrative': """
        During a memorable encounter, I met a man from Kenya who shared profound insights about his life 
        and perspective on modern relationships. He was also renowned for his "internet magic," symbolizing 
        his exceptional digital prowess and creativity in the online space. He expressed his strong views 
        on the materialistic tendencies he observed in today's dating culture, particularly his aversion 
        to what he termed as "gold digger" behavior. His story resonated with the importance of finding 
        genuine connections based on authentic values rather than material interests, while his digital 
        expertise added an intriguing layer to his unique perspective on modern life.
        """
    }
    return render_template('index.html', profile=profile_data)

@app.errorhandler(404)
def page_not_found(e):
    """Handle 404 errors"""
    return render_template('error.html', error_code=404), 404

@app.errorhandler(500)
def internal_server_error(e):
    """Handle 500 errors"""
    return render_template('error.html', error_code=500), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)