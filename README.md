# Pet-Ventures 🦴🐶🐾
## Description
my app PetDash, social media app that will connect pet lovers through setting up dog/human profiles, services, and blog posts 


## Check it out! 
[link will go here ](https://example.com)

## MVP:
- 
#### Tech Stack: 
Application to be built on: 
- **React - frontend** 
- **Django - backend** 
- Converting from JS to typescript 

#### Functionality:
- Search based on type of dog 
- Adopt-a-pet API
- User Login 
- User Profile


#### Models 
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
#### User

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

# FUTURE FEATURES
- comments/review
- sort by location / search
- API: adopt a pet and yelp api "dog-friendly"
- Blog/Question/answer forum
- Be able to offer walking service/meet ups 
- Social Media API insta






