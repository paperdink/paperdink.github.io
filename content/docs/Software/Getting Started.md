---
title: "1. Getting Started"
description: "Installing dependencies"
lead: "Installing dependencies"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "software"
weight: 110
toc: true
---

## Install Arduino IDE

Please download the latest compatible version of Arduino IDE from [Arduino's site →](https://www.arduino.cc/en/software)

## Install ESP32 Board in Arduino IDE
1. In the Arduino IDE, go to `File > Preferences`

2. Find the `Additional Board Manager URLs` field to enter the following URL and click `OK`

{{< btn-copy text="https://dl.espressif.com/dl/package_esp32_index.json" >}}
```bash
https://dl.espressif.com/dl/package_esp32_index.json
```
3. Go to `Tools > Board > Boards Manager` & install `ESP32 by Espressif Systems` board by searching for the same.
4. ESP32 Arduino boards should be seen in `Tools > Board`.
5. paperd.ink works with the `ESP32 Dev Module` board.
6. To quickly get started, the paperdink library can be installed from the Arduino library manager.
   Just go to Arduino library manager and search for `Paperdink` and install the latest version.
   Arduino IDE should automatically install all dependencies.
   You can now see various examples in `File > Examples > Paperdink`.
   To learn more about the examples and how to configure them, visit the [github page](https://github.com/paperdink/PaperdInk-Library/tree/main/examples)

## Install ESP32 Sketch Data Upload
Some examples require uploading bitmaps to the ESP32 flash storage.
Checkout this tutorial from random nerd tutorials [here →](https://randomnerdtutorials.com/install-esp32-filesystem-uploader-arduino-ide/)
to learn how to install the tool and upload data.

## Install CP210x USB to UART Bridge VCP Drivers (Windows only)
If windows is not able to recognize your paperd.ink device please install the CP210x driver by downloading the setup from the top menu [here →](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers)
