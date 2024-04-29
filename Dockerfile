FROM node:18
WORKDIR /app
COPY . .
RUN npm i --force && chmod +x start.sh
CMD ["./start.sh"]