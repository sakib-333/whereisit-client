# WhereIsIt: Lost and Found Application

## Overview

This project is a **Lost and Found** Website, a platform designed to connect individuals who have lost personal belongings with those who may have found them. Users can report lost items, browse found items, and interact to recover their belongings. Developing this website provides practical experience in building full-stack applications, user authentication, file uploads, database management, and API integration

# Purpose

1. **Reuniting Lost Items with Their Owners:** The primary goal is to help people find their lost belongings and for those who have found items to connect with the rightful owners.

2. **Centralized Platform:** Providing a single, easily accessible place for people to report lost items, search for found items, and claim their property.

3. **Detailed Information:** Allowing users to provide specific descriptions of lost items (type, color, brand, distinguishing features) and found items to increase the chances of a match.

4. **Efficient Communication:** Facilitating communication between those who have lost items and those who have found them, potentially through email.

5. **Community Building:** Fostering a sense of community by encouraging people to help each other find lost items.

## Technologies used

1. React

2. Express(JWT, CORS)

3. MongoDB

4. Nodejs

## Core features

1. Authentication using firebase.

2. Post about lost/found items.

3. Manage my posts(update, delete).

4. Recover items can't be recovered again.

5. How many items I have recovered.

## Dependencies

1. Firebase
2. Axios
3. lottie-react
4. motion
5. Sweet alert
6. Tailwind
7. DaisyUI

## Live links

1. Live link: [visit](https://ph-b10-a11.web.app/)

## How to in local machine

1. Clone the repository to your local machine:

   ```bash
   git clone git@github.com:sakib-333/whereisit-client.git

   cd whereisit-client
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Create a `.env.local` file root of the folder and all of your secret keys.

   ```bash
   VITE_apiKey=<your-firebase-api-key>
   VITE_authDomain=<your-firebase-authDomain>
   projectId=<your-firebase-projectId>
   storageBucket=<your-firebase-storageBucket>
   messagingSenderId=<your-firebase-messagingSenderId>
   appId=<your-firebase-appId>
   VITE_BASE_URL=<your-server-base-url>
   ```

4. Start server

   ```bash
   npm run dev
   ```

5. Your server should now be running on `http://localhost:5173`.
