---
title: Retrive wifi passwords in windows
published: 2024-06-05
description: 'Retrive wifi passwords in windows in terminal using netsh'
image: 'image.png'
tags: [windows,wifi]
category: 'Windows'
draft: true 
---
<br>

:::important
All the tutorials/steps provided here is only for educational purpose. Use/practise them wisely.
:::

# Open `command prompt` or `terminal` in your computer
1. List all the connected network names
```shell
netsh wlan show profiles
```
![alt text](image-1.png)

2. Describe the specific details for the network.
```
netsh wlan show profiles name="netwokr-name" key=clear
netsh wlan show profiles name="Tommy" key=clear
```
![alt text](image-2.png)

- You can find the password for the specific wifi network name `Tommy` in `Security settings`