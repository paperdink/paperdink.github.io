---
title: "3. Home Assistant"
description: "Installing Home Assistant"
lead: "Installing Home Assistant"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "software"
weight: 120
toc: true
---

{{< alert icon="⚠️" text="Home Assistant is currently only supported on Paperd.Ink Classic." >}}

## Setting up Home Assistant
Setting up Home Assistant can differ for each person. Please follow the excellent instructions provided by the HA team [here →](https://www.home-assistant.io/installation/).
Note that you need to install the HA Supervisor in order to install the ESPHome add-on which is used to communicate with Paperd.Ink

## Setting up ESPHome addon
- Go to HA `Settings` by clicking on the sidebar icon.
- Go to `Devices & Services` from the menu.
- Click on the `Add Integration button` available on the bottom right.
- Search for `ESPHome` and install it.
- Follow the instruction on screen to complete the set up.
- `ESPHome` should now show up on your HA sidebar.

More instructions available [here →](https://www.home-assistant.io/integrations/esphome/)

## Installing ESPHome on Paperd.Ink
{{< alert icon="⚠️" text="Only google chrome seems to be supported for the following steps at the moment." >}}

- Connect Paperd.Ink to your computer via a USB cable.
- Go to [ESPHome Dasboard →](https://web.esphome.io/?dashboard_wizard).
- Click on `Connect` and select your Paperd.Ink device from the dropdown.
- Click on `Prepare for first use` and click `Install` on the popup.
- After installation is succesful, the page will ask to connect to wifi. Enter the same wifi details where HA is installed and can be accessed.
- It will start provisioning the device and once done it should show `Provisioned!` success message. Click `Close`.
- Go to `ESPHome` page from yout HA sidebar and it should show a new device is discovered. Click on `Adopt`.
- It will ask to create a new name. Make it whatever you want and click `Install`.
- Click `close` once you see `INFO Successfully uploaded program.`.

## Configuring Paperd.Ink
- Go to `ESPHome` page from your HA sidebar.
- Click on `Edit` under the device you created in the previous step.
- Copy the below configuration under the existing configuration.
```
output:
  - platform: gpio
    pin:
      number: 12
    id: enable_epd

font:
  - file:
      type: gfonts
      family: Source+Sans+Pro
      weight: 900
    id: source_sans_pro_25
    size: 25

spi:
  clk_pin: GPIO18
  mosi_pin: GPIO23
  miso_pin: GPIO19

display:
  - platform: waveshare_epaper
    cs_pin: GPIO22
    dc_pin: GPIO15
    busy_pin: GPIO34
    reset_pin: GPIO13
    model: 4.20in
    update_interval: 3600s
    lambda: |-
      id(enable_epd).turn_on(); // Turns on E-paper
      it.printf(200, 150, id(source_sans_pro_25), TextAlign::BASELINE_CENTER, "%s", "Hello World from HA!");
      id(enable_epd).turn_off();// Turns off E-paper
```
- Click `Save` and then `Install` and then `Wirelessly` to install it on your Paperd.Ink.
- You should now see `Hello World from HA!` on your Paperd.Ink.

## Further Reading
- https://esphome.io/components/display/index.html
- https://esphome.io/components/display/waveshare_epaper.html

