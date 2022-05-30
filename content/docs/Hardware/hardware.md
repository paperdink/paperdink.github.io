---
title: "5. Hardware"
description: "Hardware details for paperd.ink"
lead: "Hardware details for paperd.ink"
date: 2022-04-04T22:20:38+05:30
lastmod: 2022-04-04T22:20:38+05:30
draft: false
images: []
menu:
  docs:
    parent: "hardware"
weight: 210
toc: true
---
## Block Diagram
<img src="/images/paperd.ink_labels_2.png" width="600" height="400">



1. **ESP32-WROOM-32** module
2. **FCC/CE Certified** WiFi & Bluetooth for connectivity
3. **<20uA** current consumption in sleep mode
4. **CP2104 USB-UART** converter onboard for programming
5. **MicroSD Card** slot for storing images, files, etc
6. **Piezo Buzzer** for notifications and alerts
7. **4x Tactile Buttons** for user input
8. **Battery Charger** circuit to keep it truly wireless
9. **Extension Header** for interfacing and expanding capabilities

## Pin Map
![paperd.ink pinout](/images/paperd.ink_pinout.png)


1. UART, SPI, and I2C so you can add external sensors and modules. This makes the board extendable.
2. 8 I/O for controlling any output and receiving any input.
3. Disable ESP32 module using ESP_EN pin to reduce power consumption.
4. Disable the entire board using LDO_EN pin and have virtually no current consumed by the board.

## Battery

While selecting a battery for paperd.ink please note the polarity of the connection.
A battery with in-built protection circuit is recommended.

![paperd.ink battery](/images/battery_connector.png)


## Design files
[GitHub →](https://github.com/paperdink/paperd.ink_hw)

## Dimensions
1. The PCB is 92.1 x 78.1 mm
2. The enclosure is 98 x 82 x 16 mm
