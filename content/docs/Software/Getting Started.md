---
title: "1. Getting Started"
description: "Installing dependencies & paperd.ink library in Arduino IDE"
lead: "Installing dependencies & paperd.ink library in Arduino IDE"
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
3. Open the Arduino IDE and go to `Tools > Board > Boards Manager` 
4. In the Boards Manager, search for `ESP32` and install the ESP32 by Espressif Systems board.
5. After the installation is complete, go to `Tools > Board > ESP32 Arduino board` and select the `ESP32 Dev Module` board.
6. Install the paperd.ink library from the Arduino library manager and searching for `Paperdink`. Install the latest version.
7. The Arduino IDE will automatically install any necessary dependencies.
8. To access the examples provided by the library, go to `File > Examples > Paperdink`.
9. For more information about the examples and how to configure them, visit the paperdink [GitHub page](https://github.com/paperdink/PaperdInk-Library/tree/main/examples)

## Install ESP32 Sketch Data Upload
Some examples require uploading bitmaps to the ESP32 flash storage.
Checkout this tutorial from random nerd tutorials [here →](https://randomnerdtutorials.com/install-esp32-filesystem-uploader-arduino-ide/)
to learn how to install the tool and upload data.

## Install CP210x USB to UART Bridge VCP Drivers (Windows only)
If windows is not able to recognize your paperd.ink device please install the CP210x driver by downloading the setup from the top menu [here →](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers)
