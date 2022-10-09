## About The Project

![Screenshot_3](https://user-images.githubusercontent.com/50821472/194752901-961364f5-c441-4983-a34d-9c5a4fb75373.png)

This is my discord rpc setup. This application creates custom discord activity. 

Images are loaded on the dev portal (Application -> Rich Presence -> Art Assets). 

### Technology stack
 * NodeJS
 
### Installation
 
1. Clone the repo
   ```sh
   git clone https://github.com/Lenokail/discord-rpc.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Go to [Discord dev portal](https://discord.com/developers/applications) and create application (The name of the application will be displayed in the activity)

4. Create an .env file and write the client id of your application in it
   ```sh
   CLIENT_ID = 1234567890
   ```
5. Run project
   ```sh
   npm run start
   ```
