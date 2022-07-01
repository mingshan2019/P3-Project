pipeline {

    agent any
    environment {
        aws_credential = AWS_CREDNETIAL_ID


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
                sh 'yarn'
                sh 'yarn build'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing the application ...'
            }
        }

        stage('Upload') {
            steps {
                withAWS(region:'ap-southeast-2', credentials:"${aws_credential}") {
                s3Upload()
                s3Upload(file:'build', bucket:'arn:aws:s3:::www.link-hub.link', path:'s3://www.link-hub.link/static/')
                }
                script {
                    echo 'Deploying the application ...'
                }
            }
        }
    }
}