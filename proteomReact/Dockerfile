FROM ubuntu:20.04 as build
ENV DEBIAN_FRONTEND=noninteractive

RUN apt clean -y
#RUN apt clean 
RUN apt update -y
RUN apt upgrade -y

RUN apt install tzdata -y
ENV TZ=Asia/Seoul

WORKDIR /loginapp

COPY loginapp/package.json . 

RUN apt install nodejs -y

RUN apt install npm -y

RUN apt install git -y

RUN npm install

COPY loginapp/ .

#CMD ["npm","run","build"]
RUN npm run build


FROM nginx:latest

#COPY --from=build /loginapp/nginx-setup.conf /etc/nginx/conf.d/nginx-setup.conf
COPY --from=build /loginapp/nginx-setup.conf /etc/nginx/conf.d/default.conf

COPY --from=build /loginapp/build /usr/share/nginx/html
#EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
#ENTRYPOINT ["nginx", "-g", "daemon off;"]
