# Projet Student List - Infrastructure Docker

## Membres du groupe
- **Boumour Marwa**
- **El Mimouni Yosra**
- **Imassenda Salma**

---

## 📌 Introduction
Ce projet vise à améliorer l'infrastructure de l'application "student_list" en utilisant Docker. L'application permet d'afficher une liste d'étudiants avec leur âge et se compose de deux modules principaux :
- Une **API REST en Python**
- Une **interface web en PHP**

L'objectif est de simplifier le déploiement et la gestion des versions tout en adoptant les meilleures pratiques DevOps.

---

## 🎯 Objectifs
✅ Améliorer le processus de déploiement de l'application  
✅ Gérer efficacement les versions de l'infrastructure  
✅ Adopter les meilleures pratiques pour une infrastructure Docker  
✅ Mettre en place une Infrastructure as Code (**IaC**)

---

## 📂 Structure du projet
Le projet est organisé avec les fichiers suivants :

📌 **Infrastructure Docker**
- `Dockerfile` : Construction de l'image de l'API Python
- `docker-compose.yml` : Orchestration des services (API et interface web)
- `docker-compose-registry.yml` : Configuration d'un registre Docker privé

📌 **Code de l'API**
- `student_age.py` : Code source de l'API REST
- `requirements.txt` : Dépendances Python
- `student_age.json` : Données des étudiants au format JSON

📌 **Interface Web**
- `website/index.php` : Interface utilisateur permettant d'interagir avec l'API

---

## 1️⃣ Construction de l'API avec Docker

### 🏗️ Description du Dockerfile
Le **Dockerfile** de l'API est construit avec les spécifications suivantes :
- Image de base : **`python:3.8-buster`**
- Installation des dépendances Flask et autres prérequis
- Utilisation d'un volume pour la persistance des données
- Exposition du port **5000**
- Configuration de la commande de démarrage

📷 **Capture d'écran : Test de l'API**
![Test API](./captures_ecran/2.jpg)

### 🔨 Construction de l'image Docker de l'API
```bash
DOCKER BUILD -t student_api .
```

📷 **Capture d'écran : Image Docker dans Docker Desktop**
![Docker Desktop](./captures_ecran/4.jpg)

### 🚀 Exécution du conteneur avec montage du fichier JSON
📷 **Capture d'écran : Exécution du conteneur**
![Docker Container](./captures_ecran/5.jpg)

### 🛠️ Test de l'API
```bash
curl -u root:root -X GET http://localhost:5000/submit/api/v1.0/g
```
📷 **Capture d'écran : Résultat du test**
![Test API Result](./captures_ecran/7.jpg)

---

## 2️⃣ Infrastructure as Code avec Docker Compose

### ⚙️ Configuration de `docker-compose.yml`
```yaml
version: '3.8'
services:
  api:
    image: student_api
    container_name: student_api_container
    volumes:
      - ./simple_api/student_age.json:/data/student_age.json
    ports:
      - "5000:5000"
    networks:
      - student_network
    environment:
      - FLASK_APP=student_age
      - FLASK_ENV=development
    restart: always
  website:
    image: php:apache
    container_name: website_container
    volumes:
      - ./website:/var/www/html
    depends_on:
      - api
    ports:
      - "8080:80"
    networks:
      - student_network
    restart: always
networks:
  student_network:
    driver: bridge
```

### 🚀 Déploiement et test
```bash
docker-compose up -d
```
📷 **Interface Web en action**
![Site Web](./captures_ecran/9.jpg)

---

## 3️⃣ Registre Docker Privé

### 📜 Configuration du registre `docker-compose-registry.yml`
```yaml
version: '3'
services:
  registry:
    image: registry:2
    container_name: my-registry
    ports:
      - "5001:5000"
    volumes:
      - ./data:/var/lib/registry
    environment:
      REGISTRY_HTTP_HEADERS: |
        Access-Control-Allow-Origin: ['http://localhost:8081']
        Access-Control-Allow-Methods: ['HEAD', 'GET', 'OPTIONS']
        Access-Control-Allow-Headers: ['Authorization']
    restart: always

  registry-ui:
    image: joxit/docker-registry-ui:latest
    container_name: registry-ui
    ports:
      - "8081:80"
    environment:
      - REGISTRY_TITLE=Mon Docker Registry
      - REGISTRY_URL=http://localhost:5001
      - SINGLE_REGISTRY=true
    depends_on:
      - registry
    restart: always
```

### 🔄 Démarrage du registre
```bash
docker run -d -p 5000:5001 --name registry -v C:\Users\hp\Downloads\dergham\student_list:/var/lib/registry registry:2
```
📷 **Capture d'écran : Interface du registre**
![Docker Registry](./captures_ecran/11.jpg)

### 📤 Push de l'image vers le registre privé
```bash
docker tag student_api localhost:5001/student_api:latest
docker push localhost:5001/student_api:latest
```
📷 **Capture d'écran : Registre mis à jour**
![Docker Registry Update](./captures_ecran/12.jpg)

---

## ✅ Conclusion
L'implémentation de Docker et Docker Compose permet de déployer **student_list** de manière automatisée et scalable. L'utilisation d'un registre privé améliore la gestion des versions et renforce l'organisation du projet.

### 🔮 Améliorations futures
🚀 Mise en place d'un service de monitoring  
🔒 Configuration HTTPS pour une sécurité renforcée  
🤖 Automatisation du déploiement avec CI/CD

---
📢 *Merci d'avoir suivi ce projet !* 🚀

