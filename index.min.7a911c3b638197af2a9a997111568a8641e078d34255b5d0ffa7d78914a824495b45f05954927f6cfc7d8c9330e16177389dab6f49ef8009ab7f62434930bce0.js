var suggestions=document.getElementById("suggestions"),userinput=document.getElementById("userinput");document.addEventListener("keydown",inputFocus);function inputFocus(e){e.keyCode===191&&(e.preventDefault(),userinput.focus()),e.keyCode===27&&(userinput.blur(),suggestions.classList.add("d-none"))}document.addEventListener("click",function(e){var t=suggestions.contains(e.target);t||suggestions.classList.add("d-none")}),document.addEventListener("keydown",suggestionFocus);function suggestionFocus(e){const s=suggestions.querySelectorAll("a"),o=[...s],t=o.indexOf(document.activeElement);let n=0;e.keyCode===38?(e.preventDefault(),n=t>0?t-1:0,s[n].focus()):e.keyCode===40&&(e.preventDefault(),n=t+1<o.length?t+1:t,s[n].focus())}(function(){var e=new FlexSearch({preset:"score",cache:!0,doc:{id:"id",field:["title","description","content"],store:["href","title","description"]}}),n=[{id:0,href:"https://docs.paperd.ink/docs/software/getting-started/",title:"1. Getting Started",description:"Installing dependencies",content:`\u003ch2 id="install-arduino-ide"\u003eInstall Arduino IDE\u003c/h2\u003e
\u003cp\u003ePlease download the latest compatible version of Arduino IDE from \u003ca href="https://www.arduino.cc/en/software"\u003eArduino\u0026rsquo;s site →\u003c/a\u003e\u003c/p\u003e
\u003ch2 id="install-esp32-board-in-arduino-ide"\u003eInstall ESP32 Board in Arduino IDE\u003c/h2\u003e
\u003col\u003e
\u003cli\u003e
\u003cp\u003eIn the Arduino IDE, go to \u003ccode\u003eFile \u0026gt; Preferences\u003c/code\u003e\u003c/p\u003e
\u003c/li\u003e
\u003cli\u003e
\u003cp\u003eFind the \u003ccode\u003eAdditional Board Manager URLs\u003c/code\u003e field to enter the following URL and click \u003ccode\u003eOK\u003c/code\u003e\u003c/p\u003e
\u003c/li\u003e
\u003c/ol\u003e
\u003cdiv class="doks-clipboard"\u003e
  \u003cbutton class="btn-clipboard btn btn-link" data-clipboard-text="https://dl.espressif.com/dl/package_esp32_index.json"\u003e\u003cspan class="copy-status"\u003e\u003c/span\u003e\u003c/button\u003e
\u003c/div\u003e

\u003cpre\u003e\u003ccode class="language-bash"\u003ehttps://dl.espressif.com/dl/package_esp32_index.json
\u003c/code\u003e\u003c/pre\u003e
\u003col start="3"\u003e
\u003cli\u003eGo to \u003ccode\u003eTools \u0026gt; Board \u0026gt; Boards Manager\u003c/code\u003e \u0026amp; install \u003ccode\u003eESP32 by Espressif Systems\u003c/code\u003e board by searching for the same.\u003c/li\u003e
\u003cli\u003eESP32 Arduino boards should be seen in \u003ccode\u003eTools \u0026gt; Board\u003c/code\u003e.\u003c/li\u003e
\u003cli\u003epaperd.ink works with the \u003ccode\u003eESP32 Dev Module\u003c/code\u003e board.\u003c/li\u003e
\u003cli\u003eTo quickly get started, the paperdink library can be installed from the Arduino library manager.
Just go to Arduino library manager and search for \u003ccode\u003ePaperdink\u003c/code\u003e and install the latest version.
Arduino IDE should automatically install all dependencies.
You can now see various examples in \u003ccode\u003eFile \u0026gt; Examples \u0026gt; Paperdink\u003c/code\u003e.
To learn more about the examples and how to configure them, visit the \u003ca href="https://github.com/paperdink/PaperdInk-Library/tree/main/examples"\u003egithub page\u003c/a\u003e\u003c/li\u003e
\u003c/ol\u003e
\u003ch2 id="install-esp32-sketch-data-upload"\u003eInstall ESP32 Sketch Data Upload\u003c/h2\u003e
\u003cp\u003eSome examples require uploading bitmaps to the ESP32 flash storage.
Checkout this tutorial from random nerd tutorials \u003ca href="https://randomnerdtutorials.com/install-esp32-filesystem-uploader-arduino-ide/"\u003ehere →\u003c/a\u003e
to learn how to install the tool and upload data.\u003c/p\u003e
\u003ch2 id="install-cp210x-usb-to-uart-bridge-vcp-drivers-windows-only"\u003eInstall CP210x USB to UART Bridge VCP Drivers (Windows only)\u003c/h2\u003e
\u003cp\u003eIf windows is not able to recognize your paperd.ink device please install the CP210x driver by downloading the setup from the top menu \u003ca href="https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers"\u003ehere →\u003c/a\u003e\u003c/p\u003e
`},{id:1,href:"https://docs.paperd.ink/docs/software/libraries/",title:"2. Libraries Used",description:"Installing libraries in Arduino IDE",content:`\u003cdiv class="alert alert-warning d-flex" role="alert"\u003e
  \u003cdiv class="flex-shrink-1 alert-icon"\u003e💡\u003c/div\u003e
  \u003cdiv class="w-100"\u003eYou can go to Tools \u003e Manage Libraries in the Arduino IDE to search and install the latest versions of following libraries.\u003c/div\u003e
\u003c/div\u003e
\u003cp\u003eThese are some of the common libraries used in the examples. More information about these can be found in the examples github repo.\u003c/p\u003e
\u003cul\u003e
\u003cli\u003eAdafruit GFX by Adafruit\u003c/li\u003e
\u003cli\u003eGxEPD by Jean-Marc Zingg\u003c/li\u003e
\u003cli\u003eGxEPD2 by Jean-Marc Zingg\u003c/li\u003e
\u003cli\u003eArduinoJson by Benoit Blanchon\u003c/li\u003e
\u003cli\u003eJSON Streaming Parser by Daniel Eichhorn\u003c/li\u003e
\u003c/ul\u003e
`},{id:2,href:"https://docs.paperd.ink/docs/software/examples/",title:"3. Examples",description:"Sample codes and use-cases to get started",content:`\u003ch2 id="onboarding"\u003eOnboarding\u003c/h2\u003e
\u003cp\u003eSet up paperd.ink after assembling it and get a look at all of it\u0026rsquo;s functions. Please note that you will also need to insert a FAT32 formatted mircoSD card in the paperd.ink development board with necessary file uploaded from the Github repo.\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003e\u003ca href="https://github.com/paperdink/paperd_ink_test"\u003ehttps://github.com/paperdink/paperd_ink_test\u003c/a\u003e\u003c/strong\u003e\u003c/p\u003e
\u003ch2 id="get-productive"\u003eGet Productive\u003c/h2\u003e
\u003cp\u003eDisplay time, calendar, to-do list syncs with todoist, and weather.\u003c/p\u003e
\u003cul\u003e
\u003cli\u003eAP based config: \u003cstrong\u003e\u003ca href="https://github.com/paperdink/timcal"\u003ehttps://github.com/paperdink/timcal\u003c/a\u003e\u003c/strong\u003e\u003c/li\u003e
\u003cli\u003eConfig file based config: \u003cstrong\u003e\u003ca href="https://github.com/paperdink/timcal2"\u003ehttps://github.com/paperdink/timcal2\u003c/a\u003e\u003c/strong\u003e\u003c/li\u003e
\u003c/ul\u003e
\u003ch2 id="be-up-to-date"\u003eBe up-to-date\u003c/h2\u003e
\u003cp\u003eA clean dashboard with weather, date and day, up to 11 to-do items. Syncs to-do list with todoist or taiga.\u003c/p\u003e
\u003cul\u003e
\u003cli\u003eTodoist: \u003cstrong\u003e\u003ca href="https://github.com/paperdink/wave"\u003ehttps://github.com/paperdink/wave\u003c/a\u003e\u003c/strong\u003e\u003c/li\u003e
\u003cli\u003eTaiga: \u003cstrong\u003e\u003ca href="https://github.com/paperdink/wave_taiga"\u003ehttps://github.com/paperdink/wave_taiga\u003c/a\u003e\u003c/strong\u003e\u003c/li\u003e
\u003c/ul\u003e
\u003ch2 id="get-inspired"\u003eGet Inspired\u003c/h2\u003e
\u003cp\u003eDisplays random quotes from \u003ca href="api.quotable.io"\u003eapi.quotable.io\u003c/a\u003e\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003e\u003ca href="https://github.com/paperdink/quotes"\u003ehttps://github.com/paperdink/quotes\u003c/a\u003e\u003c/strong\u003e\u003c/p\u003e
\u003ch2 id="minimal"\u003eMinimal\u003c/h2\u003e
\u003cp\u003eMinimal example showing how to use GxEPD library with paperd.ink, you should see Albert Einstein.\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003e\u003ca href="https://github.com/paperdink/minimal_GxEPD"\u003ehttps://github.com/paperdink/minimal_GxEPD\u003c/a\u003e\u003c/strong\u003e\u003c/p\u003e
\u003ch2 id="hello-world"\u003eHello World\u003c/h2\u003e
\u003cp\u003eMinimal example using GxEPD2 library with paperd.ink, you should see \u0026ldquo;hello world\u0026rdquo; and some images with partial update demo.\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003e\u003ca href="https://github.com/paperdink/minimal_GxEPD2"\u003ehttps://github.com/paperdink/minimal_GxEPD2\u003c/a\u003e\u003c/strong\u003e\u003c/p\u003e
\u003ch2 id="simple-buzzer"\u003eSimple Buzzer\u003c/h2\u003e
\u003cp\u003eSimple example playing the mario theme song using the buzzer.\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003e\u003ca href="https://github.com/paperdink/simple_buzzer"\u003ehttps://github.com/paperdink/simple_buzzer\u003c/a\u003e\u003c/strong\u003e\u003c/p\u003e
\u003ch2 id="minimal-micropython"\u003eMinimal Micropython\u003c/h2\u003e
\u003cp\u003eMinimal example showing how to use micropython with paperd.ink. Note that support is currently limited.\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003e\u003ca href="https://github.com/paperdink/minimal_micropython"\u003ehttps://github.com/paperdink/minimal_micropython\u003c/a\u003e\u003c/strong\u003e\u003c/p\u003e
`},{id:3,href:"https://docs.paperd.ink/docs/software/community_contributions/",title:"4. Community Contributions",description:"Projects from the community",content:`\u003cp\u003eWe are excited to see what you build with paperd.ink. Send an email to \u003ccode\u003eprasad@paperd.ink\u003c/code\u003e with a link to your project and we will list it here.\u003c/p\u003e
`},{id:4,href:"https://docs.paperd.ink/docs/hardware/hardware/",title:"5. Hardware",description:"Hardware details for paperd.ink",content:`\u003ch2 id="block-diagram"\u003eBlock Diagram\u003c/h2\u003e
\u003cimg src="/images/paperd.ink_rev4_labels.png" width="600" height="400"\u003e
\u003col\u003e
\u003cli\u003e\u003cstrong\u003eESP32-WROOM-32\u003c/strong\u003e powerful module\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003eFCC/CE Certified\u003c/strong\u003e WiFi \u0026amp; Bluetooth and unlock the full potential of paperd.ink\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003e\u0026lt;20uA\u003c/strong\u003e current consumption in sleep mode means longer battery life and more freedom to create\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003eCP2104 USB-UART\u003c/strong\u003e converter onboard for easy programming and updates\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003eMicroSD Card\u003c/strong\u003e slot for convenient storage of images, files, and more\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003ePiezo Buzzer\u003c/strong\u003e provides notifications and alerts for a more interactive experience\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003e4x Tactile Buttons\u003c/strong\u003e for user input and control\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003eBattery Charger\u003c/strong\u003e circuit to keep it truly wireless\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003eExtension Header\u003c/strong\u003e for easy interfacing and expansion of capabilities, enabling limitless creativity and hacking possibilities.\u003c/li\u003e
\u003c/ol\u003e
\u003ch2 id="pin-map"\u003ePin Map\u003c/h2\u003e
\u003cimg src="/images/paperd.ink_pinout.png" width="300"\u003e
\u003col\u003e
\u003cli\u003eUART, SPI, and I2C so you can add external sensors and modules. This makes the board extendable.\u003c/li\u003e
\u003cli\u003e8 I/O for controlling any output and receiving any input.\u003c/li\u003e
\u003cli\u003eDisable ESP32 module using ESP_EN pin to reduce power consumption.\u003c/li\u003e
\u003cli\u003eDisable the entire board using LDO_EN pin and have virtually no current consumed by the board.\u003c/li\u003e
\u003c/ol\u003e
\u003ch5 id="i2c-pins"\u003eI2C pins\u003c/h5\u003e
\u003cul\u003e
\u003cli\u003eSDA: GPIO16\u003c/li\u003e
\u003cli\u003eSCL: GPIO17\u003c/li\u003e
\u003c/ul\u003e
\u003ch5 id="spi-pins"\u003eSPI pins\u003c/h5\u003e
\u003cul\u003e
\u003cli\u003eSCK: GPIO18\u003c/li\u003e
\u003cli\u003eMOSI: GPIO23\u003c/li\u003e
\u003cli\u003eMISO: GPIO19\u003c/li\u003e
\u003c/ul\u003e
\u003ch5 id="sd-card-pins"\u003eSD card pins\u003c/h5\u003e
\u003cul\u003e
\u003cli\u003eSD CS: GPIO21\u003c/li\u003e
\u003cli\u003eSD enable: GPIO5\u003c/li\u003e
\u003c/ul\u003e
\u003ch5 id="e-paper-pins"\u003eE-paper pins\u003c/h5\u003e
\u003cul\u003e
\u003cli\u003eEPD DC: GPIO15\u003c/li\u003e
\u003cli\u003eEPD BUSY: GPIO34\u003c/li\u003e
\u003cli\u003eEPD RES: GPIO13\u003c/li\u003e
\u003cli\u003eEPD Enable: GPIO12\u003c/li\u003e
\u003c/ul\u003e
\u003ch5 id="pcf8574-pins"\u003ePCF8574 pins\u003c/h5\u003e
\u003cul\u003e
\u003cli\u003ePCF INT: GPIO35\u003c/li\u003e
\u003cli\u003eSD Chip Detect (low = SD card present): P4\u003c/li\u003e
\u003cli\u003eEXT GPIO1: P5\u003c/li\u003e
\u003cli\u003eEXT GPIO2: P6\u003c/li\u003e
\u003cli\u003eEXT GPIO3: P7\u003c/li\u003e
\u003cli\u003ePCF I2C ADDR (Rev 3): 0x20\u003c/li\u003e
\u003cli\u003ePCF I2C ADDR (Rev 4): 0x38\u003c/li\u003e
\u003c/ul\u003e
\u003ch6 id="lipo"\u003eLiPo\u003c/h6\u003e
\u003cul\u003e
\u003cli\u003eCharging indicator (low = charging): GPIO36\u003c/li\u003e
\u003cli\u003eBattery Enable: GPIO25\u003c/li\u003e
\u003cli\u003eBattery Voltage: GPIO34\u003c/li\u003e
\u003cli\u003eBattery Voltage ADC: ADC1_CHANNEL_6\u003c/li\u003e
\u003c/ul\u003e
\u003ch5 id="buzzer"\u003eBuzzer\u003c/h5\u003e
\u003cul\u003e
\u003cli\u003ePiezo: GPIO26\u003c/li\u003e
\u003c/ul\u003e
\u003ch5 id="buttons"\u003eButtons\u003c/h5\u003e
\u003cp\u003eFrom top to bottom\u003c/p\u003e
\u003cul\u003e
\u003cli\u003eButton 1: GPIO2\u003c/li\u003e
\u003cli\u003eButton 2: GPIO4\u003c/li\u003e
\u003cli\u003eButton 3: GPIO27\u003c/li\u003e
\u003cli\u003eButton 4: GPIO14\u003c/li\u003e
\u003c/ul\u003e
\u003ch2 id="interfacing-with-components"\u003eInterfacing with components\u003c/h2\u003e
\u003cp\u003epaperd.ink is designed to be power efficient. Thus, the electronic paper display (EPD), SD card, and battery sense circuits are powered by a MOSFET that can be turned off when not in use. All enable pins are active low, meaning they must be set to low to turn on a device. For example, to use the EPD, set EPD enable (pin 12) to low and then set it to high when finished to reduce power consumption.\u003c/p\u003e
\u003ch2 id="design-files"\u003eDesign files\u003c/h2\u003e
\u003cp\u003e\u003ca href="https://github.com/paperdink/paperd.ink_hw"\u003eGitHub →\u003c/a\u003e\u003c/p\u003e
\u003ch2 id="dimensions"\u003eDimensions\u003c/h2\u003e
\u003col\u003e
\u003cli\u003eThe PCB is 92.1 x 78.1 mm\u003c/li\u003e
\u003cli\u003eThe enclosure is 98 x 82 x 16 mm\u003c/li\u003e
\u003c/ol\u003e
`},{id:5,href:"https://docs.paperd.ink/docs/3d-files/assembly/",title:"6. Assembly",description:"3D models of paperd.ink",content:`\u003ch2 id="how-to-assemble-paperdink"\u003eHow to assemble paperd.ink\u003c/h2\u003e
\u003cimg src="/images/paperd.ink_Assembly.gif" width="375" height="300"\u003e
\u003ch2 id="enclosure-files"\u003eEnclosure files\u003c/h2\u003e
\u003cp\u003e\u003ca href="https://github.com/paperdink/paperd.ink_enclosure"\u003eGithub →\u003c/a\u003e\u003c/p\u003e
`},{id:6,href:"https://docs.paperd.ink/docs/",title:"Docs",description:"paperd.ink docs",content:""}];e.add(n),userinput.addEventListener("input",s,!0),suggestions.addEventListener("click",o,!0);function s(){var n,i=this.value,s=e.search(i,5),o=suggestions.childNodes,r=0,c=s.length;for(suggestions.classList.remove("d-none"),s.forEach(function(e){n=document.createElement("div"),n.innerHTML="<a href><span></span><span></span></a>",a=n.querySelector("a"),t=n.querySelector("span:first-child"),d=n.querySelector("span:nth-child(2)"),a.href=e.href,t.textContent=e.title,d.textContent=e.description,suggestions.appendChild(n)});o.length>c;)suggestions.removeChild(o[r])}function o(){for(;suggestions.lastChild;)suggestions.removeChild(suggestions.lastChild);return!1}})(),function(){"use strict";var e=function(){$(".owl-carousel1").owlCarousel({loop:!0,center:!0,margin:0,responsiveClass:!0,nav:!1,responsive:{0:{items:1,nav:!1},680:{items:2,nav:!1,loop:!1},1000:{items:3,nav:!0}}})};(function(){e()})(jQuery)}()