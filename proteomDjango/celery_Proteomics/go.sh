python3 manage.py makemigrations
python3 manage.py migrate
systemctl restart proteomeAPI.service
celery -A celery_prote worker --loglevel=INFO
