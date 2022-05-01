export default class Post {
    static LoginUser(body) {
        return fetch('https://pet-ventures-api.herokuapp.com/auth/', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(body)

        }).then(resp => resp.json())

    }
    static RegisterUser(body) {

        return fetch('https://pet-ventures-api.herokuapp.com/api/users/', {
          'method':'POST',
          headers: {
              'Content-Type':'application/json',
            }, 
            body: JSON.stringify(body)
  
        }).then(resp => resp.json())
      }

}
