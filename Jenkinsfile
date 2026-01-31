pipeline {
    agent any

    environment {
        IMAGE_NAME = 'ssr-fundamentals'
        CONTAINER_NAME = 'ssr-fundamentals-app'
        PORT = '8081'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building Docker image...'
                script {
                    bat "docker build -t ${IMAGE_NAME} ."
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                script {
                    // Add your test commands here
                    // For now, just verify the image was created
                    bat "docker images ${IMAGE_NAME}"
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                script {
                    // Stop and remove existing container
                    bat "docker stop ${CONTAINER_NAME} || exit 0"
                    bat "docker rm ${CONTAINER_NAME} || exit 0"
                    
                    // Run new container
                    bat "docker run -d -p ${PORT}:3000 --name ${CONTAINER_NAME} ${IMAGE_NAME}"
                }
            }
        }

        stage('Verify') {
            steps {
                echo 'Verifying deployment...'
                script {
                    bat "docker ps | findstr ${CONTAINER_NAME}"
                    echo "Application deployed successfully at http://localhost:${PORT}"
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
            echo "Access your application at: http://localhost:${PORT}"
        }
        failure {
            echo 'Pipeline failed. Check the logs for details.'
        }
        always {
            echo 'Cleaning up old images...'
            script {
                bat 'docker image prune -f || exit 0'
            }
        }
    }
}
