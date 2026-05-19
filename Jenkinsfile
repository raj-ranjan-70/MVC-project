pipeline {
    agent any

    environment {
        KUBECONFIG = '/etc/rancher/k3s/k3s.yaml'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Images') {
            steps {
                script {

                    sh 'docker-compose build'

                }
            }
        }

        stage('Import Images Into K3s') {
            steps {
                script {

                    sh '''
                    docker save event-planner-pipeline-backend:latest | sudo k3s ctr images import -
                    '''

                    sh '''
                    docker save event-planner-pipeline-frontend:latest | sudo k3s ctr images import -
                    '''

                }
            }
        }

        stage('Deploy To Kubernetes') {
            steps {
                script {

                    sh 'kubectl apply -f k8s/'

                }
            }
        }

        stage('Restart Deployments') {
            steps {
                script {

                    sh 'kubectl rollout restart deployment/backend'
                    sh 'kubectl rollout restart deployment/frontend'
                    sh 'kubectl rollout restart deployment/queue-worker'

                }
            }
        }

        stage('Wait For Backend') {
            steps {
                script {

                    sh '''
                    kubectl rollout status deployment/backend
                    '''

                }
            }
        }

        stage('Run Migrations') {
            steps {
                script {

                    sh '''
                    kubectl exec deployment/backend -- php artisan migrate --force
                    '''

                }
            }
        }

        stage('Run Seeders') {
            steps {
                script {

                    sh '''
                    kubectl exec deployment/backend -- php artisan db:seed --force
                    '''

                }
            }
        }
    }

    post {

        success {
            echo 'Kubernetes deployment completed successfully!'
        }

        failure {
            echo 'Pipeline failed!'
        }
    }
}