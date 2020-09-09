## Previous step
- Clone the API repo (https://github.com/jgarciagonj97/api_phone-catalogue) and follow its instructions 
The web layout is extremely simple because of the time but it is responsive anyway

# INSTRUCTIONS

1. Clone this repo on your local
2. In the directory of this one, use a console to create an image of the project: `docker build -t phone-catalogue .`
3. Once you have created the image, you must create the container. To achive that, use the console and type: `docker run -it --rm -p 3000:3000 phone-catalogue`
4. The proyect is already running. You can check this going to (http://localhost:3000)

## NOTES

You can also run the project without Docker. For that:

1. Clone the project as you have to do in the other way
2. In the project directory install the dependencies typing `npm install`
3. Then start the project with `npm start`
4. You should being able to see the project on (http://localhost:3000)
5. Optionally: before starting the project you could run two simple test for it typing on the project directory: `npm test`
