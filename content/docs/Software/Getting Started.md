---
title: "1. Getting Started"
description: "Installing paperd.ink library & dependencies in Arduino IDE"
lead: "Installing paperd.ink library & dependencies in Arduino IDE"
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

## Arduino IDE

Please download the latest compatible version of Arduino IDE from [Arduino's site →](https://www.arduino.cc/en/software)

## ESP32 Board
1. In the Arduino IDE, go to `File > Preferences`

2. Find the `Additional Board Manager URLs` field to enter the following URL and click `OK`

{{< btn-copy text="https://dl.espressif.com/dl/package_esp32_index.json" >}}
```bash
https://dl.espressif.com/dl/package_esp32_index.json
```
3. Open the Arduino IDE and go to `Tools > Board > Boards Manager` 
4. In the Boards Manager, search for `ESP32` and install the `ESP32 by Espressif Systems board`.
5. After the installation is complete, go to `Tools > Board > ESP32 Arduino board` and select the `ESP32 Dev Module` board to start working with paperd.ink devices.


## paperd.ink Library
1. Install the latest version paperd.ink library from the Arduino library manager by searching for `Paperdink`. The Arduino IDE will automatically install any necessary dependencies.
2. To access the examples provided by the library, go to `File > Examples > Paperdink`.
3. For more information about the examples and how to configure them, visit the paperd.ink [GitHub page →](https://github.com/paperdink/PaperdInk-Library/tree/main/examples)


## ESP32 Sketch Data Upload
1. Some examples provided by the paperd.ink library require uploading bitmaps to the ESP32 flash storage.
2. To learn how to do this, visit the following tutorial: [Install ESP32 Filesystem Uploader Arduino IDE →](https://randomnerdtutorials.com/install-esp32-filesystem-uploader-arduino-ide/). 
3. This tutorial will guide you through the process of installing the necessary tool and uploading data to the ESP32.


## CP210x USB to UART Bridge VCP Drivers (Windows only)

If your Windows computer is unable to recognize your paperd.ink device, you will need to install the CP210x driver. To do this, follow these steps:

1. Visit the Silicon Labs website and download the CP210x USB to UART Bridge VCP Drivers from the top menu [here →](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers).
2. Follow the instructions provided by the setup to install the driver on your computer.
3. Once the driver is installed, your computer should be able to recognize and communicate with your paperd.ink device.
