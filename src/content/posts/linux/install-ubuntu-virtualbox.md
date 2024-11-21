---
title: How to Install Ubuntu 22.04 in VirtualBox
published: 2024-11-15
description: 'Ubuntu is a popular Linux distribution to get practiced with Linux commands'
image: ''
tags: [linux]
category: 'Linux'
draft: true 
lang: ''
---
Learn how to install `Ubuntu 22.04` in `VirtualBox` with this quick guide. Set up a virtual machine to explore Ubuntu's powerful features in a safe, sandboxed environment.

:::tip[Prerequisites]
:::
- VirtualBox installed (version 6.x or later is recommended).
- The Ubuntu 22.04 ISO file downloaded from the [official website](https://ubuntu.com/download/desktop)
- At least 4GB of RAM and 25GB of disk space available for the virtual machine.

## Step 1: Create a New Virtual Machine in VirtualBox
1. Open VirtualBox and click New to create a new virtual machine.
2. Enter a name, e.g., "Ubuntu 22.04", and select:
    - Type: Linux
    - Version: Ubuntu (64-bit)
3. Allocate at least 2GB of RAM (2048 MB). You can allocate more for better performance.
4. Create virtual hard disk and allocate storage for atleast 30 GB
## Step 2: Configure the Virtual Machine
1. System Settings:
    - Under the System tab, in the Processor section, allocate 2 or more CPUs.
    - Enable Hardware Virtualization (VT-x/AMD-V).
2. Storage Settings:
    - Under the Storage tab, click the Empty optical drive.
    - Click the Disk icon and select your Ubuntu 22.04 ISO.
3. Network Settings:
    - Go to the Network tab.
    - Choose Host Only Adapter for the VM to use your network directly or NAT for a simpler setup.

## Step 3: Start the Virtual Machine and Install Ubuntu
1. Click Start in VirtualBox to boot the VM.
2. Ubuntu's installer will load. Select Try or Install Ubuntu.
3. Follow the installation prompts:
    - Language Selection: Choose your preferred language.
    - Keyboard Layout: Select your layout or detect it automatically.
    - Updates and Software: Choose the installation type:
        - Normal Installation (includes utilities, office software, etc.).
        - Minimal Installation (lighter, fewer apps).
    - Installation Type: Select Erase disk and install Ubuntu (applies to the virtual disk).
    - Timezone: Set your location for accurate time.
    - User Setup: Create a username, password, and computer name.
4. The installation will begin. Once completed, you'll be prompted to restart.
## Step 4: Post-Installation Setup
1. After the VM restarts, log in with the credentials you set during installation.
2. Install Updates: Open a terminal and run below command:
```bash
sudo apt update && sudo apt upgrade -y
```
3. Install Guest Additions:
    - In VirtualBox, go to Devices > Insert Guest Additions CD Image.
    - Run the script.
    - Restart the VM to apply changes.
## Step 5: Customize and Explore
1. Personalize Ubuntu: Adjust themes, install apps, and tweak settings.
2. Install Software: Use the Ubuntu Software Center or terminal to add tools like:
```bash
sudo apt install vim git curl
```
3. Test and Learn: Explore Ubuntu’s features, try different software, or use it for development.

<br>

:::note[Conclusion]
Installing Ubuntu 22.04 in VirtualBox offers a flexible and risk-free environment to explore one of the most user-friendly Linux distributions. Whether you're using it for development, testing, or learning Linux, this virtualized setup provides all the benefits of Ubuntu with the safety of running on your primary OS. If you have any doubts/issues/errors with the above contents, feel free to `contact me`. Cheers, Happy learning.
:::
