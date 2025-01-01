FROM nginx:alpine

# copy dist có nghĩa là copy toàn bộ các file trong thư mục dist vào thư mục /usr/share/nginx/html , lưu ý là ko bao gồm thư mục dist
COPY dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]