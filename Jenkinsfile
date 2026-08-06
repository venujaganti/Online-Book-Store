pipeline {
    agent any

    environment {
        DOCKER_HUB = "YOUR_DOCKERHUB_USERNAME"
        FRONTEND_IMAGE = "${DOCKER_HUB}/bookstore-frontend"
        BACKEND_IMAGE = "${DOCKER_HUB}/bookstore-backend"
        TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout Source') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/YOUR_GITHUB_USERNAME/online-book-store.git'
            }
        }

        stage('Build Frontend Image') {
            steps {
                dir('frontend') {
                    sh 'docker build -t $FRONTEND_IMAGE:$TAG .'
                    sh 'docker tag $FRONTEND_IMAGE:$TAG $FRONTEND_IMAGE:latest'
                }
            }
        }

        stage('Build Backend Image') {
            steps {
                dir('backend') {
                    sh 'docker build -t $BACKEND_IMAGE:$TAG .'
                    sh 'docker tag $BACKEND_IMAGE:$TAG $BACKEND_IMAGE:latest'
                }
            }
        }

        stage('Docker Hub Login') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-creds',
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS'
                    )
                ]) {
                    sh 'echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin'
                }
            }
        }

        stage('Push Images') {
            steps {
                sh 'docker push $FRONTEND_IMAGE:$TAG'
                sh 'docker push $FRONTEND_IMAGE:latest'

                sh 'docker push $BACKEND_IMAGE:$TAG'
                sh 'docker push $BACKEND_IMAGE:latest'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f kubernetes/'

                sh 'kubectl rollout restart deployment/frontend -n online-book-store'
                sh 'kubectl rollout restart deployment/backend -n online-book-store'
            }
        }

        stage('Verify Deployment') {
            steps {
                sh 'kubectl get pods -n online-book-store'
                sh 'kubectl get svc -n online-book-store'
            }
        }
    }

    post {
        always {
            sh 'docker logout'
        }

        success {
            echo '✅ CI/CD Pipeline completed successfully.'
        }

        failure {
            echo '❌ Pipeline failed. Check the Jenkins console output.'
        }
    }
}