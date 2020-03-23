Final Assignment:

What this includes:

- an index.html page
- a css page
- an index.js page = server
- a main.js page = client
- links and pushes data to a database served on mongo.db

Inspiration:

- In my BioDesign Class, I've been doing some research around the challenges urban farming companies face when trying to discern the carbon footprint of their products. My eventual goal is to create a platform where users can input their product data, and have returned an recomendations based on analysis of their data input.

How I built this page:

(week 5 work)
- this page uses POST and GET requests on the server to post data to my data base and retrieve it from that database.
- using the fetch() function on the client side allows these requests to come to life.
- the biggest struggle I had was understanding conceputally and syntactically how to have the client and the server respond to each other and eventually integrate that into the HTML.
- Though my client, server, database relationship is working, all I "get" is a long string with ID numbers and other stuff I don't want, my first step to iterate on this is to parse that string to only receive the data I want. I took an attempt at this but failed.

(FINAL week)
- I managed to convert the MongoDB ID number that I was receiving with my fetch request into the actual data that I was posting. 
- I did this by adding some code in the requestInfo() function:
- First I create a makeItem function with a unitItem variable, which returns html withe data interpolated in the string. i.e whats is calling it is expectin html which it will then send to the client to render.
- Then I created a for loop where I appended my data using items.push
- Then I used the getElementbyID to return it as an HTML DOM element.
- Originally though it was only returning an object because I figured out that I was appending the full data response, which was an object. By console logging my data I was able to identify which element "unit" I wanted to return.
- I also was able to add a few more relevant inputs. Adjusted some of the CSS & HTML as well. Overall, it's working as I expected.

Next Steps:
- Rather than just returning the data that's being inputed, I would love for it to return analyzed input.

Glitch/Development link:
https://glitch.com/~dwd-final

Note:
- I tried removing the .env file by using "git rm --cached .env" in my terminal and it didn't work...

Built with VS Code Github

Author Julian Mathews
