# Meli

This project is a fullstack challenge compound by an ecommerce site built with next.js and a custom server leveraging express.js

The application so far presents the following features:

<ul>
<li>Server and client side rendering for better SEO performance.</li>
<li>Cache requests via REDIS.</li>
<li>Pages responsiveness and overall styling via CSS grid and Flexbox.</li>
</ul>

Here's a screenshot of one of the pages:

<p align="center">
  <img src="./meli.png" alt="snapshot" />  
</p>

<table>
  <tr>
    <td><img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/wwleak/meli?style=for-the-badge"></td>
    <td><img alt="GitHub top language" src="https://img.shields.io/github/languages/top/wwleak/meli?style=for-the-badge"></td>
    <td><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/wwleak/meli?style=for-the-badge"></td>
    <td><img alt="GitHub issues" src="https://img.shields.io/github/issues/wwleak/meli?style=for-the-badge"></td>
  </tr>
</table>

## How to run it ?

First, as usual clone the repo:

```console
foo@bar:~$ git clone https://github.com/wwleak/meli.git
```
Install && start redis:

```
foo@bar:~$ sudo apt-get install redis-server && redis-server
```

Then install all the dependencies

```console
foo@bar:~$ npm i
```
Lastly run the application

```console
foo@bar:~$ npm run dev
```

<p align="right">MADE WITH ❤ BY ABRAHAM</p>
