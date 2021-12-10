pipeline {
  
  agent {
    label "windows"
  }
  
  stages {
    
    stage("Test") {
      
      steps {
        sh """
          docker container ls
        """
      }
    }
  }
}
