celery -A celery_prote beat --loglevel=debug --scheduler django_celery_beat.schedulers:DatabaseScheduler
