FROM python:3.8-alpine3.15
ENV PYTHONUNBUFFERED 1
COPY . . 
RUN apk update && apk add gcc
RUN pip install -r requirements.txt
