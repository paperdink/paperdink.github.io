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

<!-- {{< alert icon="💡" text="You can go to Tools > Manage Libraries in the Arduino IDE to search and install libraries." >}} -->

## Install Arduino IDE

Please download the latest compatible version of Arduino IDE from [Arduino's site →](https://www.arduino.cc/en/software)



### Install ESP32 Board in Arduino IDE
1. In the Arduino IDE, go to `File > Preferences`

2. Find the `Additional Board Manager URLs` field to enter the following URL and click `OK`

{{< btn-copy text="https://dl.espressif.com/dl/package_esp32_index.json" >}}
```bash
https://dl.espressif.com/dl/package_esp32_index.json
```
3. Go to `Tools > Board > Boards Manager` & install `ESP32 by Espressif Systems` board by searching for the same.
4. You should be able to see ESP32 Arduino boards in `Tools > Board`


### Install ESP32 Sketch Data Upload

1. Download the esptool from [here →](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/)
2. Go to the directory `Arduino > Tools` folder. For Windows it looks like this:
```bash
C:\Program Files\Arduino\tools
```
3. Unzip the downloaded ESP32FS-1.0.zip or Source code file here and you should have the following file structure:
```bash
<home_dir>/Arduino/tools/ESP32FS/tool/esp32fs.jar
```
4. Restart Arduino IDE. You should see `ESP32 Sketch Data Upload` under the `Tools` menu. Make sure you have selected ESP32 Dev Module Board in `Tools > Board > ESP32 Arduino > ESP32 Dev Module`.

## Install CP210x USB to UART Bridge VCP Drivers
Install the driver by downloading the setup from the top menu [here →](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers)
