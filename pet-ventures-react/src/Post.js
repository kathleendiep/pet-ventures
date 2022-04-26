export default class Post {
    static LoginUser(body) {

        return fetch('http://localhost:8000/auth/', {
          'method':'POST',
          headers: {
              'Content-Type':'application/json',
              
            }, 
            body:JSON.stringify(body)
  
        }).then(resp => resp.json())
  
      }
}
