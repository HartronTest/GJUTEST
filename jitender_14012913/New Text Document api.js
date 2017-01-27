PUT /articles/lunch HTTP/1.1
Host: example.com
Content-Type: text/plain
Authorization: Basic YWxpY2U6c2VjcmV0

Hey Bob, what do you want for lunch today?

301 Moved Permanently
Location: /articles/lunch/1 
The server did not create a resource, because there was no "version" attached to the request, (assuming an identifier of /articles/{id}/{version}. To perform the creation, Alice was redirected to the url of the article/version she'll be creating. Alice's user agent will then reapply the request at the new address.

PUT /articles/lunch/1 HTTP/1.1
Host: example.com
Content-Type: text/plain
Authorization: Basic YWxpY2U6c2VjcmV0

Hey Bob, what do you want for lunch today?

201 Created
And now the article has been created. next, bob looks at the article:

GET /articles/lunch HTTP/1.1
Host: example.com
Authorization: Basic Ym9iOnBhc3N3b3Jk

301 Moved Permanently
Location: /articles/lunch/1 
Bob looks there:

GET /articles/lunch/1 HTTP/1.1
Host: example.com
Authorization: Basic Ym9iOnBhc3N3b3Jk

200 Ok
Content-Type: text/plain

Hey Bob, what do you want for lunch today?
He decides to add his own change.

PUT /articles/lunch/1 HTTP/1.1
Host: example.com
Content-Type: text/plain
Authorization: Basic Ym9iOnBhc3N3b3Jk

Hey Bob, what do you want for lunch today?
Does pizza sound good to you, Alice?

301 Moved Permanently
Location: /articles/lunch/2
As with Alice, Bob is redirected to where he will be creating a new version.

PUT /articles/lunch/2 HTTP/1.1
Host: example.com
Content-Type: text/plain
Authorization: Basic Ym9iOnBhc3N3b3Jk

Hey Bob, what do you want for lunch today?
Does pizza sound good to you, Alice?

201 Created
Finally, Alice decides that she would like to add to her own article:

PUT /articles/lunch/1 HTTP/1.1
Host: example.com
Content-Type: text/plain
Authorization: Basic YWxpY2U6c2VjcmV0

Hey Bob, what do you want for lunch today?
I was thinking about getting Sushi.

409 Conflict
Location: /articles/lunch/3
Content-Type: text/diff

---/articles/lunch/2
+++/articles/lunch/3
@@ 1,2 1,2 @@
 Hey Bob, what do you want for lunch today?
-Does pizza sound good to you, Alice?
+I was thinking about getting Sushi.
