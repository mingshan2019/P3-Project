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
                //sh 'yarn'
                //sh 'yarn build'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing the application ...'
            }
        }

        stage('Upload') {
            steps {
                withAWS(credentials: 'AWS_CREDNETIAL_ID', region: 'ap-southeast-2') {
                s3Upload(file:'build', bucket:'www.link-hub.link', path:'')
                }
                script {
                    echo 'Deploying the application ...'
                }
            }
        }
    }
}