pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm // Scarica automaticamente la repo configurata nel task 1
            }
        }
        stage('Simulazione Test') {
            steps {
                echo 'Eseguo i test unitari...'
                // Creiamo un finto file di report XML per far felice Jenkins
                sh '''
                echo '<?xml version="1.0" encoding="UTF-8"?>
                <testsuite name="Suite1" tests="2" failures="0">
                    <testcase name="testLogin" classname="LoginTests"/>
                    <testcase name="testDatabase" classname="DBTests"/>
                </testsuite>' > report.xml
                '''
            }
        }
        stage('Pubblicazione Risultati') {
            steps {
                // Il plugin JUnit legge il file e crea i grafici
                junit 'report.xml'
            }
        }
    }
}