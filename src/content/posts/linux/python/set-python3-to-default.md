---
title: Set default version for python
published: 2024-06-03
description: 'Set up the default version for python in linux machines.'
image: 'image.png'
tags: [python]
category: 'Linux'
draft: true
---
<br>

### Set default version for python in debina/ubuntu machines.
1. Check Installed Python Version
2. Install the Desired Python Version (if not already installed)
3. Create a symbolic link to point the `python` command to `python3`.
4. Verify that the `python` command points to the correct Python version

```shell
python3 --version
sudo apt update && sudo apt install python3.12
sudo ln -s /usr/bin/python3 /usr/bin/python
python --version
```

### Update Alternatives (Optional)

1. Add the Python versions to the alternatives system

```shell
sudo update-alternatives --install /usr/bin/python python /usr/bin/python3.8 1
sudo update-alternatives --install /usr/bin/python python /usr/bin/python3.10 2
sudo update-alternatives --install /usr/bin/python python /usr/bin/python3.12 2
```

2.Configure the default Python version

```shell
sudo update-alternatives --config python
```

3. Verify the Alternatives Configuration

```shell
python --version
```

:::note
By following these steps, you can ensure that the python command on your Ubuntu system points to your desired Python 3 version. This can help standardize scripts and commands that rely on the python command, ensuring they use the correct Python interpreter.
:::

### Conclusion
That's it! You've learnt, how to setup the default version for python in linux machines. If you have any doubts/issues/errors with the above contents, `feel free to contact me`. Cheers, Happy learning.