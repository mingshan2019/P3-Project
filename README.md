# P3-Project

### Declaration ###

**Most of the codes in this branch are the results of my following Kerwin in this video tutorial https://www.bilibili.com/video/BV1dP4y1c7qd from P153 to P200 step by step. Only a small part of the codes have been changed by me to make them compatible. Thus, these codes are not guaranteed to be stable and sometimes may be buggy**


- - - -
Due to the dependency collision of react-draft-wysiwyg, I install reduc-persist outside the working directory.

In order to run, you need to:

1. Download this branch package
2. Unzip to the directory you choose
3. Make sure you have installed node.js or yarn (Please google if you do not know how)
4. Open Terminal
5. Run "yarn add -g json-server" or "npm i -g json-server"
6. cd to the root directory that you unzip the downloaded zip file to
7. Run "cd P3-Project"
8. Run "npm i" and wait for the downloading process to finish
9. Run "cd newssystem" to go to "newssystem" directory
10. Run "npm i --legacy-peer-deps" (Please make sure "--legacy-peer-deps" exists, or there would be errors)
11. Run "cd .." to go back to "P3-Project" directory
12. Run "cd db" to go into "db" directory
13. Run "json-server --watch db.json --port 5000" to start json-server and listen on Port 5000 (This port number should not be changed)
14. Run "cd ../newssystem" to go to "newssystem" directory
15. Run "npm start" to start the live server
- - - -
## Happy Coding ##
