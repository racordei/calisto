pipeline {
  
  agent {
    label 'windows'
  }
  
  stages {
    
    stage("build") {
      
      steps {
        echo 'building the application...'
        cmd /c "java -version"
      }
    }
    
    stage("test") {
      
      steps {
        echo 'testing the application...'
      }
    }
    
    stage("deploy") {
      
      steps {
        echo 'deploying the application...'
      }
    }
  }
}
