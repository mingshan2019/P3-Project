pipeline {

    agent any

    stages {

        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application ...'
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