# Online Book Store

A full-stack Online Book Store application built using **React**, **Node.js**, **Express**, **MySQL**, **Docker**, **Kubernetes**, **Jenkins**, and **AWS**.

---

# Tech Stack

## Frontend
- React.js
- Bootstrap
- Axios
- React Router

## Backend
- Node.js
- Express.js

## Database
- MySQL 8

## DevOps
- Docker
- Docker Compose
- Kubernetes
- Jenkins
- GitHub

## Cloud
- AWS EC2 (Ubuntu 24.04 LTS)

---

# Project Structure

```
online-book-store/
│
├── frontend/
├── backend/
├── database/
├── docker/
├── kubernetes/
├── Jenkinsfile
├── docker-compose.yml
├── README.md
```

---

# Features

- Browse Books
- Search Books
- Book Details
- Shopping Cart
- Checkout
- Order Management
- REST API
- Dockerized Application
- Kubernetes Deployment
- Jenkins CI/CD Pipeline

---

# Clone Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/online-book-store.git

cd online-book-store
```

---

# Run Backend

```bash
cd backend

npm install

npm start
```

Backend runs at:

```
http://localhost:5000
```

---

# Run Frontend

```bash
cd frontend

npm install

npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

# Database

Import SQL file

```bash
mysql -u root -p < database/bookstore.sql
```

---

# Docker

Build all services

```bash
docker compose build
```

Run

```bash
docker compose up -d
```

Stop

```bash
docker compose down
```

---

# Kubernetes

Create namespace

```bash
kubectl apply -f kubernetes/namespace.yaml
```

Deploy

```bash
kubectl apply -f kubernetes/
```

Pods

```bash
kubectl get pods -n online-book-store
```

Services

```bash
kubectl get svc -n online-book-store
```

Deployments

```bash
kubectl get deployment -n online-book-store
```

---

# Jenkins Pipeline

Stages

1. Checkout Source
2. Build Frontend Image
3. Build Backend Image
4. Docker Login
5. Push Docker Images
6. Deploy to Kubernetes
7. Verify Deployment

---

# Docker Images

Frontend

```
YOUR_DOCKERHUB_USERNAME/bookstore-frontend:latest
```

Backend

```
YOUR_DOCKERHUB_USERNAME/bookstore-backend:latest
```

---

# API Endpoints

## Books

GET

```
/api/books
```

GET

```
/api/books/{id}
```

## Orders

GET

```
/api/orders
```

POST

```
/api/orders
```

---

# CI/CD Workflow

```
Developer
     │
     ▼
GitHub
     │
     ▼
Jenkins
     │
     ▼
Build Docker Images
     │
     ▼
Push Docker Hub
     │
     ▼
Kubernetes Deployment
     │
     ▼
Application Running
```

---

# AWS Architecture

```
Internet
     │
Application Load Balancer
     │
Kubernetes Cluster
     │
 ├── Frontend Pods
 ├── Backend Pods
 └── MySQL
```

---

# Useful Commands

Docker

```bash
docker ps

docker images

docker logs bookstore-backend

docker logs bookstore-frontend

docker logs bookstore-mysql
```

Kubernetes

```bash
kubectl get pods

kubectl get svc

kubectl get deployment

kubectl describe pod POD_NAME

kubectl logs POD_NAME
```

---

# Author

Venu Jaganti

DevOps Engineer | AWS | Docker | Kubernetes | Jenkins