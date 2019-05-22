---
title: project - Learnco
slug: projects/learnco
cover: ./learnco-home.png
disqus: true
type: page
---

TL;DR

- @codestates / Feb. 2019 ~ May. 2019
- Full-stack development
  - Front-end : React, Javascript
  - Back-end : Node, Express, GraphQL, Sequelize, MySQL
  - DevOps : AWS EC2, S3, ELB, Cloudfront, Scotty, CircleCI

![learnco-home](https://user-images.githubusercontent.com/365500/58155896-ceabd700-7caf-11e9-8a3e-e883becb2104.png)

## (#1) Add user interaction (study status and feedback)

### 1-1. Student's study status

- DB update for storing student's study status.
- GraphQL API
- Lottie animation in React

![img](https://user-images.githubusercontent.com/365500/58160322-30bd0a00-7cb9-11e9-9074-587bef7a569e.gif)

### 1-2. Student's feedback for the study material

![img](jedgement.gif)

### 1-3. Student's Homework Submit Status

- Add REST API to submit homework status

![img](https://user-images.githubusercontent.com/365500/58160638-d1132e80-7cb9-11e9-8830-da8a75ac0d97.png)

## (#2) User feedback on study material

Student view : Student puts feedback on each study material.

![img](https://user-images.githubusercontent.com/365500/58161210-cd33dc00-7cba-11e9-9914-7ac1bbc377da.gif)

Admin view :

![img](https://user-images.githubusercontent.com/365500/58161216-d02ecc80-7cba-11e9-96dc-835b67345176.gif)

## (#3) UI update

### 3-1 User Avatar using Gravatar service

![img](https://user-images.githubusercontent.com/365500/58160854-349d5c00-7cba-11e9-8554-cb9314d2fd8b.png)

### 3-2 Login drawer bar and animation

![img](login-drawer.gif)

### 3-3 Apply Card-view UI using ant design

- Ant design card-view

![img](https://user-images.githubusercontent.com/365500/58069384-f7f53600-7bcf-11e9-9f4e-203e9ea55875.png)

### 3-4 Apply Hover Color on mouse event

![img](https://user-images.githubusercontent.com/365500/58161936-2d774d80-7cbc-11e9-9a43-e3b219fc4c31.gif)

### 3-5 Font update for better readability using Google web-font

![img](https://user-images.githubusercontent.com/365500/58156261-ab355c00-7cb0-11e9-92a1-54aee169fde2.png)

## (#4) CI/CD pipeline using circleCI

Server @AWS EC2

- Checkin : pull-request merged into dev branch.
- @CircleCI :
- new code

![img](https://user-images.githubusercontent.com/365500/58156565-5e05ba00-7cb1-11e9-9c2b-c37f3e817a93.png)

Client @AWS S3

- checkin : pull-request merged into dev branch.

![img](https://user-images.githubusercontent.com/365500/58156886-1fbcca80-7cb2-11e9-9c1d-0fa77c5dd760.png)
