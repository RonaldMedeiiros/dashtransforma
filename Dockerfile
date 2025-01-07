# Use uma imagem base leve com servidor web
FROM nginx:alpine

# Copia os arquivos do projeto para o diretório padrão do nginx
COPY . /usr/share/nginx/html

# Expõe a porta padrão do nginx
EXPOSE 5200

# Comando para iniciar o servidor nginx
CMD ["nginx", "-g", "daemon off;"]
