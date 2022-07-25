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

##### I2C pins
- SDA: 16
- SCL: 17

##### SPI pins
- SCK: 18
- MOSI: 23
- MISO: 19

##### SD card pins
- SD CS: 21
- SD enable: 5

##### E-paper pins
- EPD DC: 15
- EPD BUSY: 34
- EPD RES: 13
- EPD Enable: 12

##### PCF8574 pins
- PCF INT: 35
- SD Chip Detect (low = SD card present): P4
- EXT GPIO1: P5
- EXT GPIO2: P6
- EXT GPIO3: P7
- PCF I2C ADDR: 0x20

###### LiPo
- Charging indicator (low = charging): 36
- Battery Enable: 25
- Battery Voltage: 34
- Battery Voltage ADC: ADC1_CHANNEL_6

##### Buzzer
- Piezo: 26

##### Buttons
- Button 1: 2
- Button 2: 4
- Button 3: 27
- Button 4: 14

## Interfacing with components
paperd.ink is designed to be low power. To achieve this goal, the EPD, SD card and battery sense circuits are powered via a MOSFET.
This MOSFET can be turned off when not required which helps reduce the power consumption. All enable pins are active low, meaning when
the enable pin is low, the device is turned on. For example, to use the EPD, first set EPD enable (pin 12) to low and when done writing
to the display set EPD enable to high to reduce the power consumption.

## Battery

Batteries have shipping issues in terms of regulations and need special arrangements
(which also increases the cost) so we recommend you buy a battery locally or you can keep the USB plugged in.
The maximum battery size should be 62 x 35 x 5 mm.
While selecting a battery for paperd.ink please note the polarity of the connection.
A battery with in-built protection circuit is recommended.

![paperd.ink battery](/images/battery_connector.png)


## Design files
[GitHub →](https://github.com/paperdink/paperd.ink_hw)

## Dimensions
1. The PCB is 92.1 x 78.1 mm
2. The enclosure is 98 x 82 x 16 mm
