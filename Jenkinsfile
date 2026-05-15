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
                // Usiamo "cat" per creare il file in modo sicuro su Linux
                sh """
                cat <<EOF > report.xml
                <?xml version="1.0" encoding="UTF-8"?>
                <testsuite name="Suite1" tests="2" failures="1">
                    <testcase name="testLogin" classname="LoginTests"/>
                    <testcase name="testDatabase" classname="DBTests">
                        <failure message="Errore di connessione">Il database non risponde al ping.</failure>
                    </testcase>
                </testsuite>
                EOF
                """
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