pipeline {
  agent any

  environment {
    // optional: override if needed
    COMPOSE_FILE = "docker-compose.yml"
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build & Deploy') {
      steps {
        // Build images and start containers
        // Ensure the Jenkins node has docker & docker-compose available and the Jenkins user can run docker
        sh '''
          docker-compose -f ${COMPOSE_FILE} down || true
          docker-compose -f ${COMPOSE_FILE} build --no-cache
          docker-compose -f ${COMPOSE_FILE} up -d
        '''
      }
    }

    stage('Verify') {
      steps {
        // Basic verification: show running containers
        sh 'docker-compose -f ${COMPOSE_FILE} ps'
      }
    }
  }

  post {
    success {
      echo "Deployment completed. Application should be reachable at http://<JENKINS_HOST>:8080"
    }
    failure {
      echo "Build or deployment failed. Check logs."
    }
  }
}
