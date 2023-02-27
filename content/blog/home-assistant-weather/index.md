---
title: "Home Assistant Weather 🏠"
description: "Setting up Paperd.Ink to show weather and date information"
lead: "Setting up Paperd.Ink to show weather and date information. This example was inspired from [Sainz work →](https://github.com/sainz/Home-Assistant-e-Ink-Display)
date: 2020-02-28T09:19:42+01:00
lastmod: 2020-02-28T09:19:42+01:00
draft: false
weight: 50
images: []
---

{{< alert icon="⚠️" text="Home Assistant is currently only supported on Paperd.Ink Classic." >}}

## Setting up Home Assistant
Follow instructions in our docs page to configure and install Home Assistant [here →](http://localhost:1313/docs/software/home_assistant/)

## Install and Configure AccuWeather Integration
- Go to the AccuWeather [website →](https://developer.accuweather.com/) and create an account.
- Login to your AccuWeather account and go to `MyApps` tab and create a new app.
- Once the app is created, click on it to find your API Key. Note this key.
- Go to `Settings > Devices & Services` in Home Assistant and click on `Add Integration` on the bottom right.
- Search and install `AccuWeather` add-on and input your API Key. Make sure the Lat and Lon are correct for your location. And name it as `Home`. Click `Finish` on the success pop-up.
- You should now see an AccuWeather card. Click on `Configure` and enable the `Weather Forecast` button and click `Submit`. Click `Finish` on the success pop-up. 
- The weather information should be available on your Home Assistant dashboard now.

## Installing File Editor
- Go to `Settings > Add-Ons` in Home Assistant and click on `Add-On Store` on the bottom right.
- Search and install `File Editor`.
- Enable all options like `Start on boot`, `Watchdog`, `Auto Update` and `Show in sidebar`.

## Add new sensors for weather parsing
- Click on the new `File Editor` icon in the HA sidebar.
- Once the window opens, click on the `Folder` icon on the top left.
- Make sure you are in `config/` directory and create a new file called `sensor.yaml`.
- Copy and paste the following into `sensor.yaml` and save the file.
```
- platform: template
  sensors:
    weather_now:
      friendly_name: "Weather Now"
      value_template: >-
        {{ states.weather.home.state }};{{ states.weather.home.attributes.temperature | round(0) }}°C
    weather_fivedays:
      friendly_name: "Five day weather"
      value_template: >-
        {% set days = {'Mon':'Mon','Tue':'Tue','Wed':'Wed','Thu':'Thu','Fri':'Fri','Sat':'Sat','Sun':'Sun'} %}
        {% for state in states.weather.home.attributes.forecast[0:3] -%}
          {{ days[as_timestamp(state.datetime)| timestamp_custom("%a")] }};{{state.templow}}/{{ state.temperature }}°C;{{ state.condition }}#
        {%- endfor %}
    it_days:
      friendly_name: "Translated Days"
      value_template: >-
        {% set daysIt = ["Mon", "Tue","Wed","Thu","Fri","Suut","Sun"] %}
        {{ daysIt[now().weekday()] }}
    it_months:
      friendly_name: "Translated Months"
      value_template: >-
        {% set monthsIt = ["Jan", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"] %}
        {{ monthsIt[now().month - 1] }}
    it_weather:
      friendly_name: "Weather + Translated Days"
      value_template: >-
        {{ states.sensor.it_days.state }};{{ states.sensor.weather_now.state }};{{ states.sensor.it_months.state }};

```
- Now open `configuration.yaml` file and add the following line.
```
sensor: !include sensor.yaml
```

## Add fonts
- Download the [Material WebIcons →](https://github.com/Templarian/MaterialDesign-Webfont/raw/master/fonts/materialdesignicons-webfont.ttf) and [OpenSans →](https://www.fontsquirrel.com/fonts/download/open-sans) fonts.
- Extract the open-sans zip.
- Click on the `File Editor` icon in the HA sidebar.
- Once the window opens, click on the `Folder` icon on the top left.
- Navigate to `config/esphome` directory. And create a new directory called `fonts`.
- Upload the `OpenSans-Bold.ttf` and `materialdesignicons-webfont.ttf` files into the `fonts` directory.

## Configure Paperd.Ink
- Go to `ESPHome` in the HA sidebar.
- Click on `Edit` under the Paperd.Ink device.
- Note your api encryption key, ota password, and wifi ap password. 
- Replace the configuration with the following and update the api encryption key, ota password, wifi ap password, timezone, latitude and longitude.
Display update_interval can also be changed. It is set to 1 hour in the below config.
```
esphome:
  name: classic
  on_boot:
    priority: -10
    then:
      - delay: 90s
      - component.update: epaperdisplay

esp32:
  board: esp32dev
  framework:
    type: arduino

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "*************************"

ota:
  password: "********************"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Paperdink Fallback Hotspot"
    password: "*********"

captive_portal:


# Paperdink display config
output:
  - platform: gpio
    pin:
      number: 12
    id: enable_epd

font:
  - file: 'fonts/OpenSans-Bold.ttf'
    id: roboto_med_17
    size: 17

  - file: 'fonts/OpenSans-Bold.ttf'
    id: roboto_reg_12
    size: 12

  - file: 'fonts/OpenSans-Bold.ttf'
    id: roboto_reg_15
    size: 15

  - file: 'fonts/OpenSans-Bold.ttf'
    id: roboto_reg_20
    size: 20
    glyphs:
      ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D',
       'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
       'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', 'a', 'b', 'c', 'd', 'e',
       'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
       't', 'u', 'v', 'w', 'x', 'y', 'z', 'å', 'ä', 'ö', 'à', 'è', 'ì', 'ò', 
       'ù', ':', '/']

  - file: 'fonts/OpenSans-Bold.ttf'
    id: roboto_bold_40
    size: 40
    glyphs:
      ['&', '@', '!', ',', '.', '"', '%', '(', ')', '+', '-', '_', ':', '°', '0',
       '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E',
       'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
       'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', 'a', 'b', 'c', 'd', 'e', 'f',
       'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
       'u', 'v', 'w', 'x', 'y', 'z','å', 'ä', 'ö', '/','º','µ','³']

  - file: 'fonts/OpenSans-Bold.ttf'
    id: roboto_bold_80
    size: 80
    glyphs:
      ['&', '@', '!', ',', '.', '"', '%', '(', ')', '+', '-', '_', ':', '°', '0',
       '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E',
       'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
       'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', 'a', 'b', 'c', 'd', 'e', 'f',
       'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
       'u', 'v', 'w', 'x', 'y', 'z','å', 'ä', 'ö', '/','º','µ','³']

  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: weather_font_80
    size: 80
    glyphs: [
      # Weather
      "\U000F0590", # mdi-weather-cloudy
      "\U000F0594", # mdi-weather-night
      "\U000F0591", # mdi-weather-fog
      "\U000F0592", # mdi-weather-hail
      "\U000F0593", # mdi-weather-lightning
      "\U000F067E", # mdi-weather-lightning-rainy
      "\U000F0595", # mdi-weather-partly-cloudy
      "\U000F0596", # mdi-weather-pouring
      "\U000F0597", # mdi-weather-rainy
      "\U000F0598", # mdi-weather-snowy
      "\U000F067F", # mdi-weather-snowy-rainy
      "\U000F0599", # mdi-weather-sunny
      "\U000F059B", # mdi-weather-sunset-down
      "\U000F059C", # mdi-weather-sunset-up
      "\U000F059D", # mdi-weather-windy
      "\U000F059E", # mdi-weather-windy-variant
      ]

  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: weather_font_40
    size: 40
    glyphs: [
      # Sun
      "\U000F059A", # mdi-weather-sunset
      # Moon
      "\U000F0F64", # mdi-moon-new
      "\U000F0F67", # mdi-moon-waxing-crescent
      "\U000F0F61", # mdi-moon-first-quarter
      "\U000F0F68", # mdi-moon-waxing-gibbous
      "\U000F0F62", # mdi-moon-full
      "\U000F0F66", # mdi-moon-waning-gibbous
      "\U000F0F63", # mdi-moon-last-quarter
      "\U000F0F65", # mdi-moon-waning-crescent

      # Weather
      "\U000F0590", # mdi-weather-cloudy
      "\U000F0594", # mdi-weather-night
      "\U000F0591", # mdi-weather-fog
      "\U000F0592", # mdi-weather-hail
      "\U000F0593", # mdi-weather-lightning
      "\U000F067E", # mdi-weather-lightning-rainy
      "\U000F0595", # mdi-weather-partly-cloudy
      "\U000F0596", # mdi-weather-pouring
      "\U000F0597", # mdi-weather-rainy
      "\U000F0598", # mdi-weather-snowy
      "\U000F067F", # mdi-weather-snowy-rainy
      "\U000F0599", # mdi-weather-sunny
      "\U000F059B", # mdi-weather-sunset-down
      "\U000F059C", # mdi-weather-sunset-up
      "\U000F059D", # mdi-weather-windy
      "\U000F059E", # mdi-weather-windy-variant
      ]

  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: weather_font_15
    size: 15
    glyphs: [
      # Wifi
      "\U000F092F", # mdi-wifi-strength-outline
      "\U000F091F", # mdi-wifi-strength-1
      "\U000F0922", # mdi-wifi-strength-2
      "\U000F0925", # mdi-wifi-strength-3
      "\U000F0928", # mdi-wifi-strength-4
      ]

  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: weather_font_30
    size: 30
    glyphs: [
      # Sun
      "\U000F059A", # mdi-weather-sunset
      # Moon
      "\U000F0F64", # mdi-moon-new
      "\U000F0F67", # mdi-moon-waxing-crescent
      "\U000F0F61", # mdi-moon-first-quarter
      "\U000F0F68", # mdi-moon-waxing-gibbous
      "\U000F0F62", # mdi-moon-full
      "\U000F0F66", # mdi-moon-waning-gibbous
      "\U000F0F63", # mdi-moon-last-quarter
      "\U000F0F65", # mdi-moon-waning-crescent
      # Rooms
      "\U000F09A0", # mdi-shower
      "\U000F09A1", # mdi-shower-head
      "\U000F04B9", # mdi-sofa
      "\U000F0C99", # mdi-microwave
      "\U000F0FD1", # mdi-bed-king-outline
      "\U000F106E", # mdi-bed-single-outline
      "\U000F0322", # mdi-laptop
      "\U000F07F4", # mdi-television-classic
      ]

time:
  - platform: homeassistant
    id: ha_time
    timezone: America/Chicago

sun:
  latitude: 20.1
  longitude: 22.5

sensor:
  - platform: homeassistant
    entity_id: sensor.moon_phase
    id: moon_status
    internal: true
  - platform: wifi_signal
    name: "WiFi Signal Sensor"
    id: wifisignal
    update_interval: 100000s

text_sensor:
  - platform: homeassistant
    id: moon_icon
    entity_id: sensor.moon_phase
  - platform: sun
    type: sunrise
    id: sunrise_hour
  - platform: sun
    type: sunset
    id: sunset_hour
  - platform: homeassistant
    entity_id: sensor.it_weather
    id: weathertoday
  - platform: homeassistant
    entity_id: sensor.weather_fivedays
    id: fweather

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
    id: epaperdisplay
    lambda: |-
      /* TURN ON EPD */
      id(enable_epd).turn_on();
      
      /* SENSOR VARIABLES */
      std::string moon_info = id(moon_icon).state;
      std::string weather_days = id(fweather).state;
      std::string weather_today = id(weathertoday).state;
      std::string sunrise = id(sunrise_hour).state;
      std::string sunset = id(sunset_hour).state;
      std::map<std::string, std::string> weather_icon_state {
          {"cloudy", "\U000F0590"},
          {"clear-day", "\U000F0599"},
          {"clear-night", "\U000F0594"},
          {"fog", "\U000F0591"},
          {"hail", "\U000F0592"},
          {"lightning", "\U000F0593"},
          {"lightning-rainy", "\U000F067E"},
          {"partlycloudy", "\U000F0595"},
          {"pouring", "\U000F0596"},
          {"rainy", "\U000F0597"},
          {"snowy", "\U000F0598"},
          {"snowy-rainy", "\U000F067F"},
          {"sunny", "\U000F0599"},
          {"sunset-down", "\U000F059B"},
          {"sunset-up", "\U000F059C"},
          {"windy", "\U000F059D"},
          {"windy-variant", "\U000F059E"}
      };
      std::map<std::string, std::string> moon_state_icon {
          {"new_moon", "\U000F0F64"},
          {"waxing_crescent", "\U000F0F67"},
          {"first_quarter", "\U000F0F61"},
          {"waxing_gibbous", "\U000F0F68"},
          {"full_moon", "\U000F0F62"},
          {"waning_gibbous", "\U000F0F66"},
          {"last_quarter", "\U000F0F63"},
          {"waning_crescent", "\U000F0F65"}
      };
      std::map<std::string, std::string> moon_state_label {
          {"new_moon", "New Moon"},
          {"waxing_crescent", "Waxing Crescent"},
          {"first_quarter", "First Quarter"},
          {"waxing_gibbous", "Waxing Gibbous"},
          {"full_moon", "Full Moon"},
          {"waning_gibbous", "Waning Gibbous"},
          {"last_quarter", "Last Quarter"},
          {"waning_crescent", "Waning Crescent"}
      };
      char delimm = ';';

      /* MAIN RECTANGLE */
      it.rectangle(5, 5, 390, 295);
      
      /* CALENDAR RECT */
      it.filled_rectangle(10, 10, 120, 30);
      it.rectangle(10, 40, 120, 90);
      it.filled_rectangle(10, 130, 120, 30);
      it.rectangle(10, 160, 120, 135);
      
      /* DX RECT */ 
      it.rectangle(135, 10, 255, 265);
      
      /* Todays Date */
      uint16_t todays_date_base_x = 262;
      uint16_t todays_date_base_y = 80;
      // Day of the week
      it.strftime(todays_date_base_x, todays_date_base_y, id(roboto_bold_80), TextAlign::BASELINE_CENTER, "%a", id(ha_time).now());
      // Day of the month
      it.strftime(todays_date_base_x, todays_date_base_y + 50 , id(roboto_bold_40), TextAlign::BASELINE_CENTER, "%d %b", id(ha_time).now());

      /* WEATHER TODAY */ 
      std::size_t currentWeatherToday, previousWeatherToday = 0;
      currentWeatherToday = weather_today.find(delimm);
      ESP_LOGD("WEATHER TODAY", "%s", weather_today.c_str());
      /* Loop for the single room */
      for (int i=0; i<4; i++){
        if (i == 0) {
          // Print "Today"
          it.printf(70, 30, id(roboto_reg_20), COLOR_OFF, TextAlign::BASELINE_CENTER, "Today");
        } else if (i == 1) {
          // Weather Icon
          it.printf(70, 115, id(weather_font_80), TextAlign::BASELINE_CENTER, "%s", weather_icon_state[weather_today.substr(previousWeatherToday, currentWeatherToday - previousWeatherToday).c_str()].c_str());          
        } else if (i == 2){
          // Current Temp
          it.filled_circle(98, 63, 20, COLOR_OFF);
          it.circle(98, 63, 20);
          it.printf(98, 63, id(roboto_reg_15), TextAlign::CENTER, "%s", weather_today.substr(previousWeatherToday, currentWeatherToday - previousWeatherToday).c_str());
        } else if (i == 3){
          // Print "Next 3 days"
          it.printf(70, 150, id(roboto_reg_20), COLOR_OFF, TextAlign::BASELINE_CENTER, "Next 3 days");
        }
        previousWeatherToday = currentWeatherToday + 1;
        currentWeatherToday = weather_today.find(delimm, previousWeatherToday);
      }

      /* WEATHER FORECAST */ 
      ESP_LOGD("WEATHER", "%s", weather_days.c_str());
      std::size_t currentWeather, previousWeather = 0;
      char delimWeather = '#';
      currentWeather = weather_days.find(delimWeather);
      
      int wx = 17;    // start position x 
      int wy = 170;   // start position y 
      /* Loop for the single string day */ 
      for (int i=0; i<3; i++) { 
  
        std::string forecastInfo = weather_days.substr(previousWeather, currentWeather - previousWeather).c_str();
        std::size_t currentInfo, previousInfo = 0;
        currentInfo = forecastInfo.find(delimm);
      
        /* Inner loop to get single information for each day */
        for (int j=0; j<3; j++) { 
      
          if (j == 0) {
            // Day (Mon/Tue...) 
            it.printf(wx + 42, wy + 2, id(roboto_med_17), "%s", forecastInfo.substr(previousInfo, currentInfo - previousInfo).c_str());
          } else if (j == 1) {
            // Temperature 
            it.printf(wx + 42, wy + 20, id(roboto_reg_12), "%s", forecastInfo.substr(previousInfo, currentInfo - previousInfo).c_str());
          } else if (j == 2) {
            // Weather Icon             
            it.printf(wx, wy, id(weather_font_40), "%s", weather_icon_state[forecastInfo.substr(previousInfo, currentInfo - previousInfo).c_str()].c_str() );
          }
          previousInfo = currentInfo + 1;
          currentInfo = forecastInfo.find(delimm, previousInfo);
        }
        wy += 40; // move down 50 pixels and output next day 
        previousWeather = currentWeather + 1;
        currentWeather = weather_days.find(delimWeather, previousWeather);
      }

      /* SUNRISE SUNSET */
      uint16_t sunrise_sunset_base_x = 150;
      uint16_t sunrise_sunset_base_y = 180;
      ESP_LOGD("SUNRISE", "%s", sunrise.c_str());
      ESP_LOGD("SUNSET", "%s", sunset.c_str());
      it.printf(sunrise_sunset_base_x, sunrise_sunset_base_y, id(weather_font_40), TextAlign::BASELINE_LEFT, "%s", "\U000F059A");
      if(id(sunrise_hour).has_state() && id(sunset_hour).has_state()) {
        it.printf(sunrise_sunset_base_x + 45, sunrise_sunset_base_y - 10, id(roboto_reg_20), TextAlign::BASELINE_LEFT, "Sunrise: %s", sunrise.c_str());
        it.printf(sunrise_sunset_base_x + 45, sunrise_sunset_base_y + 10, id(roboto_reg_20), TextAlign::BASELINE_LEFT, "Sunset : %s", sunset.c_str());
      } else {
        it.printf(sunrise_sunset_base_x + 45, sunrise_sunset_base_y - 10, id(roboto_reg_20), TextAlign::BASELINE_LEFT, "%s", "n/a");
        it.printf(sunrise_sunset_base_x + 45, sunrise_sunset_base_y + 10, id(roboto_reg_20), TextAlign::BASELINE_LEFT, "%s", "n/a");
      }
      
      /* MOON */
      uint16_t moon_base_x = 150;
      uint16_t moon_base_y = 240;
      if(id(moon_status).has_state()) {
        ESP_LOGD("MOON", "%s", moon_info.c_str());
        // Icon 
        it.printf(moon_base_x, moon_base_y, id(weather_font_40), TextAlign::BASELINE_LEFT, "%s", moon_state_icon[moon_info.c_str()].c_str());

        // Label 
        it.printf(moon_base_x + 45, moon_base_y - 5, id(roboto_reg_20), TextAlign::BASELINE_LEFT, "%s", moon_state_label[moon_info.c_str()].c_str());
      };

      /* FOOTER */ 
      it.strftime(355, 295 , id(roboto_reg_15), TextAlign::BASELINE_RIGHT , "Updated at: %d/%m/%Y %H:%M", id(ha_time).now());

      /* WIFI SIGNAL */ 
      if(id(wifisignal).has_state()) {
        int wifi_x = 375;
        int wifi_y = 295;
        if (id(wifisignal).state >= -50) {
          // Excellent
          it.print(wifi_x, wifi_y, id(weather_font_15), TextAlign::BASELINE_CENTER, "\U000F0928");
          ESP_LOGI("WiFi", "Exellent");
        } else if (id(wifisignal).state  >= -60) {
          // Good
          it.print(wifi_x, wifi_y, id(weather_font_15), TextAlign::BASELINE_CENTER, "\U000F0925");
          ESP_LOGI("WiFi", "Good");
        } else if (id(wifisignal).state  >= -75) {
          // Fair
          it.print(wifi_x, wifi_y, id(weather_font_15), TextAlign::BASELINE_CENTER, "\U000F0922");
          ESP_LOGI("WiFi", "Fair");
        } else if (id(wifisignal).state  >= -100) {
          // Weak
          it.print(wifi_x, wifi_y, id(weather_font_15), TextAlign::BASELINE_CENTER, "\U000F091F");
          ESP_LOGI("WiFi", "Weak");
        } else {
          // Unlikely working signal
          it.print(wifi_x, wifi_y, id(weather_font_15), TextAlign::BASELINE_CENTER, "\U000F092F");
          ESP_LOGI("WiFi", "Unlikely");
        }
      }
      id(enable_epd).turn_off();
```
- Finally click `Save` and `Install`. After successfully getting uploaded, you should see the expected screen after 90 seconds.
