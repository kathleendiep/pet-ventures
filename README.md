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
| Day 1 | Planning and Approval                | Complete |
| Day 2 | Set up backend files and structure, test and deploy backend | Incomplete |
| Day 3 | Set up frontend files, connect frontend with backend, begin MVP attainment | Complete |
| Day 4 | Attain MVP, debug MVP, begin styling | Complete |
| Day 5 | Finalize CSS Styling and Responsive Design, begin postMVP if MVP attained | Complete |
| Day 6 | Confirm finalized MVP & Bug Fixes | Complete |
| Day 7 | Final Touches and deploying frontend | Complete |
| Day 8 | Presentation | Complete |

#### MVP (all in hrs unless otherwise stated)

| Task                          | Priority | Estimated Time | Actual Time |
| ---------------------------------- | :------: | :------------: | :---------: |
| Installing and Setup for backend   |    H     |      1       |      3     |
| User login/auth                    |    H     |      4       |      2     |


__ 
| CRUD Routes and testing on Postman |    H     |      5       |      5    |
| Deploying backend                  |    H     |     2      |           |
| Creating React App                 |    H     |      1       |      1     |
| Add Routes                         |    H     |      2       |     2      |
| Create Components                  |    H     |      5       |     2      |
| Connect user authentication on front-end                  |    H     |      10       |     10      |
| Fetch and test data on frontend    |    H     |      5       |      10     |
| Search by user on front-end    |    H     |      5       |     10      |
| Responsive Design                  |    H     |      4       |     5      |
| CSS and Bootstrap                  |    H     |      4       |     4      |
| Deploy frontend                    |    H     |      1       |     0.5      |
| Total                              |    N/A     | 49 |           |

# FUTURE FEATURES
- comments/review
- sort by location
- yelp api "dog-friendly"
- Blog/Question/answer forum
- Be able to offer walking service
- Social Media API insta






