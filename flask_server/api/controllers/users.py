# These routes are not actually hooked up to anything, this code is copy/pasted from an app I built a while ago to demonstrate a users controller with a log in flow.
# While I have done this kind of roll-your-own login and authentication (see User model), in real life I'd use an authentication package or library, like Devise for Ruby on Rails.

from flask_server import app
from flask import render_template, redirect, request, session
from flask_server.models.user import User

# Registration or Login Page
@app.route('/register_or_login')
def register_or_login():
    return render_template('register_or_login.html')

# validate and save user route
@app.route('/register', methods=['post'])
def validate_and_save_user():
    if User.validate_registration(request.form):
        user_id = User.save(request.form)
        session['user_id'] = user_id
        return redirect('/')
    else:
        return redirect('/register_or_login')

# validate log in credentials and log in user route
@app.route('/login', methods=['post'])
def login():
    user =  User.validate_login(request.form)
    if user:
        session['user_id'] = user.id
        return redirect('/')
    else:
        return redirect('/register_or_login')

# log out user
@app.route('/logout')
def logout():
    session.clear()
    return redirect('/register_or_login')