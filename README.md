assignment 5 - mongo.db

What this includes:

- an index.html page
- a css page
- an index.js page = server
- a main.js page = client
- links and pushes data to a database served on mongo.db

Inspiration:

- In my BioDesign Class, I've been doing some research around the challenges urban farming companies face when trying to discern the carbon footprint of their products. My eventual goal is to create a platform where users can input their product data, and have returned an recomendations based on analysis of their data input.

How I built this page:

- this page uses POST and GET requests on the server to post data to my data base and retrieve it from that database.
- using the fetch() function on the client side allows these requests to come to life.
- the biggest struggle I had was understanding conceputally and syntactically how to have the client and the server respond to each other and eventually integrate that into the HTML.
- Though my client, server, database relationship is working, all I "get" is a long string with ID numbers and other stuff I don't want, my first step to iterate on this is to parse that string to only receive the data I want. I took an attempt at this but failed.

Next Steps:
- build out the CSS
- add more relevant inputs
- parse the return string
- experiment with analysis of data input

Built with VS Code Github

Author Julian Mathews
