to write compiler of js we need ecmascript
js is scripting language its most widely used implementation of ecmascript
v8 is a compiler created by chrome ,v8 is coded in c

node js also uses v8 js engine 

ok so they just added functions of backend apps to v8 and created node js for backend 
node js is runtime 

we can create HTTP server by node js

http- hyper text transfer protocol
defined for machines to communicate 
specifically for websites it is the most common way for websites frontend to talk to its backend

http help to communicate          
when i go to chatgpt.com
1.DNS resolution takes place
it marks the domain name to IP
then does the handshake
at end maps to ip

to backend server we can send following 

GET
POST 
PUT
DELETE

common status codes
200-ok
404-page/route not found
403-auth issues
500-internal server error

EXPRESS Is a library helps to create http server

API has to be sent by another one backend app to another backend app
Body parser reads the data sent in the request body and converts it into a usable JavaScript object.

we use fetch 