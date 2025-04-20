---
title: 🐳 How to Install Docker on Ubuntu
published: 2025-04-23
description: ''
image: ''
tags: [linux,docker]
category: 'DevOps'
draft: false 
lang: ''
---

#### Ready to start containerizing your apps? Let’s get Docker up and running on Ubuntu in no time! Whether you’re spinning up microservices or just curious about containers, this guide has you covered — with a sprinkle of emojis to keep it fresh! 😎
<br>

# 🧰 Prerequisites
Before we dive in, make sure you have:
- 🐧 An Ubuntu system (20.04 or newer recommended)
- 🔐 Sudo privileges


## 🚀 Step 1: Update Your System
```bash
sudo apt update -y
```
Stay fresh, stay updated! 🌱

## 📦 Step 2: Install Required Dependencies
```bash
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```


## 📚 Step 3: Set Up the Docker Repository
```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update -y
```

## 🔄 Step 4: Install Docker Engine
```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
sudo systemctl start docker
sudo systemctl enable docker
sudo systemctl status docker
```

## ✅ Step 5: Verify the Installation
```bash
sudo docker --version
sudo docker run hello-world
```

## 👤 Optional: Run Docker as a Non-root User
To avoid typing sudo every time:

```bash
sudo usermod -aG docker $USER
exec bash
```
<br>

:::note[Conclusion]
This is it! You now have Docker running on your Ubuntu system like a boss! Go ahead and:
	•	🧪 Build your first container
	•	🐳 Pull images from Docker Hub
	•	🛠 Start developing microservices If you have any doubts/issues/errors with the above contents, feel free to contact me. Cheers, Happy Dockering! 🚢✨.
:::
