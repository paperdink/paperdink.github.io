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
<img src="/images/paperd.ink_rev4_labels.png" width="600" height="400">

### Specifications

1. **ESP32-WROOM-32** powerful module
2. **FCC/CE Certified** WiFi & Bluetooth and unlock the full potential of paperd.ink
3. **Tri-color or monochrome** 400x300 px e-paper display.
4. **<20uA** current consumption in sleep mode means longer battery life and more freedom to create
5. **CP2104 USB-UART** converter onboard for easy programming and updates 
6. **MicroSD Card** slot for convenient storage of images, files, and more
7. **Piezo Buzzer** provides notifications and alerts for a more interactive experience
8. **4x Tactile Buttons** for user input and control
9. **Battery Charger** circuit to keep it truly wireless
10. **Extension Header** for easy interfacing and expansion of capabilities, enabling limitless creativity and hacking possibilities.

## Pin Map
<img src="/images/paperd.ink_pinout.png" width="300">

1. UART, SPI, and I2C so you can add external sensors and modules. This makes the board extendable.
2. 8 I/O for controlling any output and receiving any input.
3. Disable ESP32 module using ESP_EN pin to reduce power consumption.
4. Disable the entire board using LDO_EN pin and have virtually no current consumed by the board.
5. A header file with pin definitions is present [here](https://github.com/paperdink/PaperdInk-Library/blob/main/src/pin_assignment.h).

##### I2C pins
- SDA: GPIO16
- SCL: GPIO17

##### SPI pins
- SCK: GPIO18
- MOSI: GPIO23
- MISO: GPIO19

##### SD card pins
- SD CS: GPIO21
- SD enable: GPIO5

##### E-paper pins
- EPD CS: GPIO22
- EPD DC: GPIO15
- EPD BUSY: GPIO34
- EPD RESET: GPIO13
- EPD Enable: GPIO12

##### PCF8574 pins
- PCF INT: GPIO35
- SD Chip Detect (low = SD card present): P4
- EXT GPIO1: P5
- EXT GPIO2: P6
- EXT GPIO3: P7
- PCF I2C ADDR (Rev 3): 0x20
- PCF I2C ADDR (Rev 4): 0x38

##### LiPo
- Charging indicator (low = charging): GPIO36
- Battery Enable: GPIO25
- Battery Voltage: GPIO39
- Battery Voltage ADC: ADC1_CHANNEL_3

##### Buzzer
- Piezo: GPIO26

##### Buttons
From top to bottom
- Button 1: GPIO14
- Button 2: GPIO27
- Button 3: GPIO4
- Button 4: GPIO2

## Interfacing with components
Paperd.ink is designed to be power efficient. Thus, the electronic paper display (EPD), SD card, and battery sense circuits are powered by a MOSFET that can be turned off when not in use. All enable pins are active low, meaning they must be set to low to turn on the circuitry.
For example, to use the EPD, set EPD enable pin (GPIO 12) to low to provide power to the EPD and perform necessary display functions. Once display is updated set the EPD enable pin (GPIO 12) to high to reduce power consumption.

## Design files
[GitHub →](https://github.com/paperdink/paperd.ink_hw)

## Dimensions
1. The PCB is 92.1 x 78.1 mm
2. The enclosure is 98 x 82 x 16 mm
