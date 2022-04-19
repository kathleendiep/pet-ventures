# Pet-Ventures
## Description
my app PetDash, social media app that will connect pet lovers through setting up dog/human profiles, services, and blog posts 


## Check it out! 
[link will go here ](https://example.com)

## MVP:
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

## SCHEDULE


# FUTURE FEATURES
- comments/review
- sort by location
- yelp api "dog-friendly"
- Blog/Question/answer forum
- Be able to offer walking service
- Social Media API insta






