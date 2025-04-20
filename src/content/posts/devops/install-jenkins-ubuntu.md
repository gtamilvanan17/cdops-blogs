---
title: 🚀 How to install jenkins in ubuntu 🔄
published: 2025-04-21
description: ''
image: 'https://mirror.bom.albony.in/jenkins/art/jenkins-logo/1024x1024/headshot.png'
tags: [linux,jenkins]
category: 'DevOps'
draft: false 
lang: ''
---

# 🧰 Prerequisites
- A system running Ubuntu 20.04 or later
- Sudo privileges


## 🔧 Step 1: Install Java
Jenkins requires Java to run. We’ll use OpenJDK 21, which is supported by Jenkins.
```bash
sudo apt update -y
sudo apt install fontconfig openjdk-21-jre -y
java -version
```

Expected Output:
```bash
openjdk 21.0.6 2025-01-21
OpenJDK Runtime Environment (build 21.0.6+7-Ubuntu-124.04.1)
OpenJDK 64-Bit Server VM (build 21.0.6+7-Ubuntu-124.04.1, mixed mode, sharing)
```

## 📦 Step 2: Add Jenkins Repository

1. First, import the Jenkins GPG key:
```bash
sudo wget -O /usr/share/keyrings/jenkins-keyring.asc \
  https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
```
2. Add the Jenkins repository to your system:
```bash
echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc]" \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
```
3. Update your package list:
```bash
sudo apt update -y
```


## 📥 Step 3: Install Jenkins

```bash
sudo apt-get update -y
sudo apt-get install jenkins -y
sudo systemctl start jenkins
sudo systemctl enable jenkins
```

## 🌐 Step 4: Access Jenkins Web UI

Open a browser and navigate to: `http://<your-server-ip>:8080`

Retrieve the initial admin password: `sudo cat /var/lib/jenkins/secrets/initialAdminPassword`

Paste the output of above command into the Jenkins setup wizard to unlock Jenkins.


<br>

:::note[Conclusion]
This is it! You’ve now successfully installed Jenkins with Java! 🎉
From here, you can begin configuring Jenkins, installing plugins, and setting up your first pipelines. Happy automating! If you have any doubts/issues/errors with the above contents, feel free to contact me. Cheers, Happy learning.
:::
