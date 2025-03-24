# Utiliser l’image Python 3.8
FROM python:3.8-buster

# Informations du mainteneur
LABEL maintainer="yosra875 <yosraelmimouni2003@gmail.com>"

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires
COPY student_age.py requirements.txt /app/

# Installer les dépendances
RUN apt update -y && \
    apt install python3-dev libsasl2-dev libldap2-dev libssl-dev -y && \
    pip3 install -r /app/requirements.txt

# Créer un volume pour stocker les données
VOLUME /app/data

# Exposer le port 5000
EXPOSE 5000

# Commande de démarrage
CMD ["python3", "/app/student_age.py"]
