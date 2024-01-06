FROM node:17-alpine
MAINTAINER Md.Ruhul Amin <ruhulamin.cs.dev@gmail.com>
WORKDIR /application
RUN apk  update
RUN apk add --no-cache git openssh
RUN git clone https://github.com/MohammadRuhulAmin/test_nodedocker.git  . 
RUN npm install
EXPOSE 3000
CMD ["node","app.js"]
