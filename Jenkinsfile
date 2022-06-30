pipeline {
    agent any
    environment {
        NEW_VERSION = '1.30'
    }

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application ...'
                echo "Building version ${NEW_VERSION}"
                sh 'npm --version'
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing the application ...'
            }
        }
        stage('Upload') {
            steps {
                script {
                    echo 'Deploying the application ...'
                    }
               }
            }
        }
    }
}
