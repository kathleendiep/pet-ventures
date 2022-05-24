# Pet-Ventures 🦴🐶🐾
## Description
my app PetVentures, social media app that will connect pet lovers through setting up dog/human profiles, services, and blog posts 


## Check it out! 
[click here! ](https://petventures.herokuapp.com/)

## Tech Stack
Application is built on: 
- **React**  - frontend  
- **Django**  - backend
- Converting from JS to typescript 
## Preview  
![alt tag](https://user-images.githubusercontent.com/53194460/167745205-4d08e559-3942-4d48-bb01-c5c79dea8a5a.png)


## Functionality:
- Search based on type of dog 
- Adopt-a-pet API
- User Login 
- User Profile


## Models 
##### Post
```
class Post(models.Model):
    Name = models.CharField(max_length=32)
    Category = models.CharField(max_length=32)
    Breed = models.CharField(max_length=32)
    description = models.CharField(max_length=200)
    city = models.CharField(max_length=50)
     state = models.CharField(max_length=50)
    img = models.CharField(max_length=2000)
```
    optional:
    user_id 


## Project Schedule
| Day   | Deliverable                          | Status     |
| ----- | ------------------------------------ | ---------- |
| Day 1 |  set up react front end                | Complete |
| Day 1 |  backend, auth, setup react function              | Complete |
| Day 2 | Heroku, routing, logout | Complete |
| Day 3 | Logout, TRIED to do Cloudinary  | Complete |
| Day 4 | MVP MET (crud, Heroku) Cloudinary, drop down menu   | Complete |
| Day 5 |add profile - could not get it to configure user id    | Complete |
| Day 6 | add styling  | Complete |
## Optimizations
## Lessons Learned:
# FUTURE FEATURES
- comments/review
- sort by location / search
- API: adopt a pet and yelp api "dog-friendly"
- Blog/Question/answer forum
- Be able to offer walking service/meet ups 
- Social Media API insta

## Let's connect!:
[ my portfolio ](www.kathleendiep.com)

**LinkedIn:** https://www.linkedin.com/in/kathleen-diep/ 
