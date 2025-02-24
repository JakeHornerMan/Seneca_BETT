# Seneca_BETT
>Seneca backend technical task, Node.js, TypeScript, Express TypeORM. 
>I Created a backend service that will allow users to register as standard user or admin. 
><li>Admin can create Courses and view stats for any session, user or course. </li>
><li>Users can  start, update and end thier own sessions adding their own session and module results data. They can also view the course and session related stats attched to them. </li>

<h3>PLEAESE IMPORT 'SenecaPROD.postman_collection.json' IN POSTMAN (https://github.com/JakeHornerMan/Seneca_BETT/blob/main/SenecaPROD.postman_collection.json)<h3>
<h3>PLEAESE Read 'Seneca backend technical task Deployment Task.pdf' IN REPO (https://github.com/JakeHornerMan/Seneca_BETT/blob/main/Seneca%20backend%20technical%20task%20Deployment%20Task.pdf)<h3>
<hr>

## List of avalible Important endpoints
### Authentication
<b>/auth/register</b><br/>
<p>This allow us to register a new user, and also allows us to se the role of the user</p>
<i>input: <br/>
{<br/>
  "username": "prodadmin",<br/>
  "email": "prodadmin.test@example.com",<br/>
  "password": "securePassword123",<br/>
  "role": "admin"<br/>
}<br/>
</i>
<br/>
<b>/auth/login</b><br/>
<p>This allow us the user to sign in and recieve a token to be used for Authorisation Bearer Token</p>
<i>input: <br/>
{<br/>
  "username": "jake",<br/>
  "password": "securePassword123"<br/>
}<br/>
</i>
<br/>

### Admin Stat Functionality

<b>(ADMIN)/stats/sessions/:sessionId</b> <br/>
<p>This will gather all session data based on the sessionId</p>
<br/>
<b>(ADMIN)stats/courses/:courseId</b><br/>
<p>This will allow us to see all related stats based on the courseId selected</p>
<i>output: <br/>
{<br/>
    "moduleAmount": {<br/>
        "totalModulesStudied": 5,<br/>
        "moduleNames": [<br/>
            "Module 1",<br/>
            "Module 2",<br/>
            "Module 3"<br/>
        ]<br/>
    },<br/>
    "sessionTime": {<br/>
        "totalDuration": "2 hours 30 minutes",<br/>
        "timeInMinutes": 150<br/>
    },<br/>
    "scores": {<br/>
        "totalSessionPoints": 397,<br/>
        "overallAverageScore": 39.7<br/>
    }<br/>
}<br/>
</i>
<br/>
<b>(ADMIN)stats/courses/:courseId/sessions/:sessionId</b><br/>
<p>This will allow us to see all related stats based on the courseId selected and target a sepcific sessoion</p>
<i>output: <br/>
{<br/>
    "moduleAmount": {<br/>
        "totalModulesStudied": 5,<br/>
        "moduleNames": [<br/>
            "Module 1",<br/>
            "Module 2",<br/>
            "Module 3"<br/>
        ]<br/>
    },<br/>
    "sessionTime": {<br/>
        "totalDuration": "2 hours 30 minutes",<br/>
        "timeInMinutes": 150<br/>
    },<br/>
    "scores": {<br/>
        "totalSessionPoints": 397,<br/>
        "overallAverageScore": 39.7<br/>
    }<br/>
}<br/>
</i>
<br/>

### User Stat Functionality

<b>(USER)/stats/user/sessions</b> <br/>
<p>This will gather all session data based on the user logged in</p>
<br/>
<b>(USER)stats/courses/:courseId</b><br/>
<p>This will allow us to see all related stats based on the courseId selected for the user</p>
<i>output: <br/>
{<br/>
    "moduleAmount": {<br/>
        "totalModulesStudied": 5,<br/>
        "moduleNames": [<br/>
            "Module 1",<br/>
            "Module 2",<br/>
            "Module 3"<br/>
        ]<br/>
    },<br/>
    "sessionTime": {<br/>
        "totalDuration": "2 hours 30 minutes",<br/>
        "timeInMinutes": 150<br/>
    },<br/>
    "scores": {<br/>
        "totalSessionPoints": 397,<br/>
        "overallAverageScore": 39.7<br/>
    }<br/>
}<br/>
</i>
<br/>
<b>(USER)/stats/user/courses/:courseId/sessions/:sessionId</b><br/>
<p>This will allow us to see all related stats based on the courseId selected and target a sepcific sessoion selected for the user</p>
<i>output: <br/>
{<br/>
    "moduleAmount": {<br/>
        "totalModulesStudied": 5,<br/>
        "moduleNames": [<br/>
            "Module 1",<br/>
            "Module 2",<br/>
            "Module 3"<br/>
        ]<br/>
    },<br/>
    "sessionTime": {<br/>
        "totalDuration": "2 hours 30 minutes",<br/>
        "timeInMinutes": 150<br/>
    },<br/>
    "scores": {<br/>
        "totalSessionPoints": 397,<br/>
        "overallAverageScore": 39.7<br/>
    }<br/>
}<br/>
</i>
<br/>

### User Session Functionality

<b>(USER)session/startSession</b><br/>
<p>This will start a learning session for the current user</p>
<i>input: <br/>
{<br/>
    "courseIdentifier": "9e263811-0cfb-45f0-a0f9-c155c916dfed",<br/>
    "topic": "Geometry"<br/>
}<br/>
output: <br/>
{<br/>
    "message": "Session started created successfully",<br/>
    "sessionId": "d0a99f23-c8f0-4fc3-9d99-665618d545ae"<br/>
}<br/>
</i>
<br/>

<b>(USER)session/updateSession</b><br/>
<p>This will update a learning session for the current user with the modules and it results</p>
<i>input: <br/>
{<br/>
  "sessionId": "d0a99f23-c8f0-4fc3-9d99-665618d545ae",<br/>
  "moduleStats": [<br/>
    {<br/>
      "moduleName": "Module 1",<br/>
      "adaptive": {"answers": ["A", "B"], "isCompleted": false, "score": 10},<br/>
      "quiz":{"answers": ["A", "B"], "isCompleted": false, "score": 20}<br/>
    },<br/>
    {<br/>
      "moduleName": "Module 2",<br/>
      "quiz": {"answers": ["A", "B"], "isCompleted": false, "score": 10}<br/>
    },<br/>
    {<br/>
      "moduleName": "Module 3",<br/>
      "adaptive": {"answers": ["A", "B"], "isCompleted": false, "score": 40},<br/>
      "quiz": {"answers": ["A", "B"], "isCompleted": false, "score": 2}<br/>
    }<br/>
  ]<br/>
}<br/>
</i>
<br/>

<b>(USER)session/endSession</b><br/>
<p>This will end a learning session for the current user</p>
<i>input: <br/>
{<br/>
  "sessionId": "d0a99f23-c8f0-4fc3-9d99-665618d545ae"<br/>
}<br/>
</i>
<br/>