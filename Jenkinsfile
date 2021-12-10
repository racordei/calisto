pipeline {
  
  agent {
    label "windows"
  }
  
  stages {
    
    stage("Test") {
      
      steps {
        bat """
          docker container ls
        """
      }
    }
  }
}
