---
title: Ngrok and its usecase
published: 2024-06-05
description: ''
image: 'image.png'
tags: [linux,ngrok]
category: 'Linux'
draft: false
---
<br>

:::important
All the tutorials/steps provided here is only for educational purpose. Use/practise them wisely.
:::

### What is Ngrok
- Ngrok is a tool that allows you to create secure tunnels to your localhost, enabling you to expose a local server to the internet.

### Guide on how to set up and use ngrok on a Linux system
`(Method 1)`: Download and install as tar file
```shell
sudo apt update -y
wget https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-amd64.tgz
sudo tar xvzf ngrok-v3-stable-linux-amd64.tgz -C /usr/local/bin
sudo apt update -y
```

`(Method 2)`: Download and install from APT repository as package
```shell
sudo apt update
curl -s https://ngrok-agent.s3.amazonaws.com/ngrok.asc | sudo tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null && echo "deb https://ngrok-agent.s3.amazonaws.com buster main" | sudo tee /etc/apt/sources.list.d/ngrok.list
sudo apt update -y
sudo apt install ngrok -y
```

### Let's get into the Configuration
1. Authenticate to the NGROK wbsite **(optional, but recommended)**
- Sign up and create a new account for an ngrok in their website
- Generate and copy your authentication token
- Finally, authenticate your linux machine to your ngrok account using auth token.
```shell
ngrok authtoken YOUR_AUTH_TOKEN
```
- Now, start running your application on `local server` on backbround or on the `seperate terminal`
- On the very next step, run **`ngrok http YOUR_APP_PORT`**. This will create a tunnel for your application to the public domain.
```shell
admin@myServer$ ngrok http 8080

Session Status                online
Account                       Your Name (Plan: Free)
Version                       2.3.35
Region                        United States (us)
Web Interface                 http://127.0.0.1:8080
Forwarding                    http://abcd1234.ngrok.io -> http://localhost:8080
Forwarding                    https://abcd1234.ngrok.io -> http://localhost:8080

Connections                   ttl     opn     rt1     rt5     p50     p90
                              0       0       0.00    0.00    0.00    0.00
```
- Now you can access your application using the public domain **https://abcd1234.ngrok.io**, which is running in your local server.

### Conclusion
That's it! You've successfully set up and run ngrok on a Linux system to expose a local server to the internet. You can now share the public URL provided by ngrok to give others access to your local server. If you have any doubts/issues/errors with the above contents, feel free to contact me through e-mail. Cheers, Happy learning.