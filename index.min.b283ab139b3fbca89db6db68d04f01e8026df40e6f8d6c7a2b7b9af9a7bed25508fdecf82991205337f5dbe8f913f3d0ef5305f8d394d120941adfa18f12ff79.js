var suggestions=document.getElementById("suggestions"),userinput=document.getElementById("userinput");document.addEventListener("keydown",inputFocus);function inputFocus(e){e.keyCode===191&&(e.preventDefault(),userinput.focus()),e.keyCode===27&&(userinput.blur(),suggestions.classList.add("d-none"))}document.addEventListener("click",function(e){var t=suggestions.contains(e.target);t||suggestions.classList.add("d-none")}),document.addEventListener("keydown",suggestionFocus);function suggestionFocus(e){const s=suggestions.querySelectorAll("a"),o=[...s],t=o.indexOf(document.activeElement);let n=0;e.keyCode===38?(e.preventDefault(),n=t>0?t-1:0,s[n].focus()):e.keyCode===40&&(e.preventDefault(),n=t+1<o.length?t+1:t,s[n].focus())}(function(){var e=new FlexSearch({preset:"score",cache:!0,doc:{id:"id",field:["title","description","content"],store:["href","title","description"]}}),n=[{id:0,href:"https://docs.paperd.ink/docs/software/getting-started/",title:"1. Getting Started",description:"Installing paperd.ink library \u0026 dependencies in Arduino IDE",content:`\u003ch2 id="arduino-ide"\u003eArduino IDE\u003c/h2\u003e
\u003cp\u003ePlease download the Arduino IDE version 1.x from \u003ca href="https://www.arduino.cc/en/software"\u003eArduino\u0026rsquo;s site →\u003c/a\u003e.\u003c/p\u003e
\u003cpre\u003e\u003ccode\u003e⚠ To use bitmaps please install Arduino IDE version 1.x, the File System uploader is incompatible with version 2.x.
\u003c/code\u003e\u003c/pre\u003e
\u003ch2 id="esp32-board"\u003eESP32 Board\u003c/h2\u003e
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
\u003cli\u003eOpen the Arduino IDE and go to \u003ccode\u003eTools \u0026gt; Board \u0026gt; Boards Manager\u003c/code\u003e\u003c/li\u003e
\u003cli\u003eIn the Boards Manager, search for \u003ccode\u003eESP32\u003c/code\u003e and install the \u003ccode\u003eESP32 by Espressif Systems board\u003c/code\u003e.\u003c/li\u003e
\u003cli\u003eAfter the installation is complete, go to \u003ccode\u003eTools \u0026gt; Board \u0026gt; ESP32 Arduino board\u003c/code\u003e and select the \u003ccode\u003eESP32 Dev Module\u003c/code\u003e board to start working with your paperd.ink device.\u003c/li\u003e
\u003c/ol\u003e
\u003ch2 id="paperdink-library"\u003epaperd.ink Library\u003c/h2\u003e
\u003col\u003e
\u003cli\u003eInstall the latest version of paperd.ink library from the Arduino library manager by searching for \u003ccode\u003ePaperdink\u003c/code\u003e. The Arduino IDE will automatically install any necessary dependencies.\u003c/li\u003e
\u003cli\u003eTo access the examples provided by the library, go to \u003ccode\u003eFile \u0026gt; Examples \u0026gt; Paperdink\u003c/code\u003e.\u003c/li\u003e
\u003cli\u003eFor more information about the examples and how to configure them, visit the paperd.ink \u003ca href="https://github.com/paperdink/PaperdInk-Library/tree/main/examples"\u003eGitHub page →\u003c/a\u003e\u003c/li\u003e
\u003c/ol\u003e
\u003ch2 id="esp32-sketch-data-upload"\u003eESP32 Sketch Data Upload\u003c/h2\u003e
\u003col\u003e
\u003cli\u003eSome examples provided by the paperd.ink library require uploading bitmaps to the ESP32 flash storage.\u003c/li\u003e
\u003cli\u003eTo learn how to do this, visit the following tutorial: \u003ca href="https://randomnerdtutorials.com/install-esp32-filesystem-uploader-arduino-ide/"\u003eInstall ESP32 Filesystem Uploader Arduino IDE →\u003c/a\u003e.\u003c/li\u003e
\u003cli\u003eThis tutorial will guide you through the process of installing the necessary tool and uploading data to the ESP32.\u003c/li\u003e
\u003c/ol\u003e
\u003ch2 id="cp210x-usb-to-uart-bridge-vcp-drivers-windowsmac"\u003eCP210x USB to UART Bridge VCP Drivers (Windows/Mac)\u003c/h2\u003e
\u003cp\u003eIf your computer is unable to recognize your paperd.ink device, you will need to install the CP210x driver. To do this, follow these steps:\u003c/p\u003e
\u003col\u003e
\u003cli\u003eVisit the Silicon Labs website and download the CP210x USB to UART Bridge VCP Drivers from the top menu \u003ca href="https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers"\u003ehere →\u003c/a\u003e.\u003c/li\u003e
\u003cli\u003eFollow the instructions provided by the setup to install the driver on your computer.\u003c/li\u003e
\u003cli\u003eOnce the driver is installed, your computer should be able to recognize and communicate with your paperd.ink device. A restart might be required.\u003c/li\u003e
\u003c/ol\u003e
\u003ch2 id="hello-world"\u003eHello World\u003c/h2\u003e
\u003cp\u003eCreate two files \u003ccode\u003ehello_world.ino\u003c/code\u003e and \u003ccode\u003econfig.h\u003c/code\u003e in a folder called \u003ccode\u003ehello_world\u003c/code\u003e.
The name of the folder and ino file should be the same.\u003c/p\u003e
\u003cp\u003eThe file named \u003ccode\u003econfig.h\u003c/code\u003e merely sets the type of display you have:\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-c"\u003e#define PAPERDINK_DEVICE Paperdink_Classic
// #define PAPERDINK_DEVICE Paperdink_Merlot
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eThe file \u003ccode\u003ehello_world.ino\u003c/code\u003e looks like this:\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-c"\u003e#include \u0026quot;config.h\u0026quot;
#include \u0026lt;Paperdink.h\u0026gt;

PAPERDINK_DEVICE Paperdink;
void setup() {
  /* Initialize paperd.ink device */
  Paperdink.begin();

  /* Enable power to the display */
  Paperdink.enable_display();

  /* Clear the background */
	Paperdink.epd.fillScreen(GxEPD_WHITE);

  /* By default the text is white and thus invisible, make it black */
  Paperdink.epd.setTextColor(GxEPD_BLACK);

  /* Start writing in the top left corner */
  Paperdink.epd.setCursor(0, 0);

  Paperdink.epd.print(\u0026quot;Hello World!\u0026quot;);

  /* Flush the buffer to the screen */
  Paperdink.epd.display();

  /*
    For more functions available on the \`epd\` member see:
    https://learn.adafruit.com/adafruit-gfx-graphics-library?view=all
  */
}

void loop() {}

\u003c/code\u003e\u003c/pre\u003e
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
`},{id:2,href:"https://docs.paperd.ink/docs/software/home_assistant/",title:"3. Home Assistant",description:"Installing Home Assistant",content:`\u003cdiv class="alert alert-warning d-flex" role="alert"\u003e
  \u003cdiv class="flex-shrink-1 alert-icon"\u003e⚠️\u003c/div\u003e
  \u003cdiv class="w-100"\u003eHome Assistant is currently only supported on Paperd.Ink Classic.\u003c/div\u003e
\u003c/div\u003e
\u003ch2 id="setting-up-home-assistant"\u003eSetting up Home Assistant\u003c/h2\u003e
\u003cp\u003eSetting up Home Assistant can differ for each person. Please follow the excellent instructions provided by the HA team \u003ca href="https://www.home-assistant.io/installation/"\u003ehere →\u003c/a\u003e.
Note that you need to install the HA Supervisor in order to install the ESPHome add-on which is used to communicate with Paperd.Ink\u003c/p\u003e
\u003ch2 id="setting-up-esphome-addon"\u003eSetting up ESPHome addon\u003c/h2\u003e
\u003cul\u003e
\u003cli\u003eGo to HA \u003ccode\u003eSettings\u003c/code\u003e by clicking on the sidebar icon.\u003c/li\u003e
\u003cli\u003eGo to \u003ccode\u003eDevices \u0026amp; Services\u003c/code\u003e from the menu.\u003c/li\u003e
\u003cli\u003eClick on the \u003ccode\u003eAdd Integration button\u003c/code\u003e available on the bottom right.\u003c/li\u003e
\u003cli\u003eSearch for \u003ccode\u003eESPHome\u003c/code\u003e and install it.\u003c/li\u003e
\u003cli\u003eFollow the instruction on screen to complete the set up.\u003c/li\u003e
\u003cli\u003e\u003ccode\u003eESPHome\u003c/code\u003e should now show up on your HA sidebar.\u003c/li\u003e
\u003c/ul\u003e
\u003cp\u003eMore instructions available \u003ca href="https://www.home-assistant.io/integrations/esphome/"\u003ehere →\u003c/a\u003e\u003c/p\u003e
\u003ch2 id="installing-esphome-on-paperdink"\u003eInstalling ESPHome on Paperd.Ink\u003c/h2\u003e
\u003cdiv class="alert alert-warning d-flex" role="alert"\u003e
  \u003cdiv class="flex-shrink-1 alert-icon"\u003e⚠️\u003c/div\u003e
  \u003cdiv class="w-100"\u003eOnly google chrome seems to be supported for the following steps at the moment.\u003c/div\u003e
\u003c/div\u003e
\u003cul\u003e
\u003cli\u003eConnect Paperd.Ink to your computer via a USB cable.\u003c/li\u003e
\u003cli\u003eGo to \u003ca href="https://web.esphome.io/?dashboard_wizard"\u003eESPHome Dasboard →\u003c/a\u003e.\u003c/li\u003e
\u003cli\u003eClick on \u003ccode\u003eConnect\u003c/code\u003e and select your Paperd.Ink device from the dropdown.\u003c/li\u003e
\u003cli\u003eClick on \u003ccode\u003ePrepare for first use\u003c/code\u003e and click \u003ccode\u003eInstall\u003c/code\u003e on the popup.\u003c/li\u003e
\u003cli\u003eAfter installation is succesful, the page will ask to connect to wifi. Enter the same wifi details where HA is installed and can be accessed.\u003c/li\u003e
\u003cli\u003eIt will start provisioning the device and once done it should show \u003ccode\u003eProvisioned!\u003c/code\u003e success message. Click \u003ccode\u003eClose\u003c/code\u003e.\u003c/li\u003e
\u003cli\u003eGo to \u003ccode\u003eESPHome\u003c/code\u003e page from yout HA sidebar and it should show a new device is discovered. Click on \u003ccode\u003eAdopt\u003c/code\u003e.\u003c/li\u003e
\u003cli\u003eIt will ask to create a new name. Make it whatever you want and click \u003ccode\u003eInstall\u003c/code\u003e.\u003c/li\u003e
\u003cli\u003eClick \u003ccode\u003eclose\u003c/code\u003e once you see \u003ccode\u003eINFO Successfully uploaded program.\u003c/code\u003e.\u003c/li\u003e
\u003c/ul\u003e
\u003ch2 id="configuring-paperdink"\u003eConfiguring Paperd.Ink\u003c/h2\u003e
\u003cul\u003e
\u003cli\u003eGo to \u003ccode\u003eESPHome\u003c/code\u003e page from your HA sidebar.\u003c/li\u003e
\u003cli\u003eClick on \u003ccode\u003eEdit\u003c/code\u003e under the device you created in the previous step.\u003c/li\u003e
\u003cli\u003eCopy the below configuration under the existing configuration.\u003c/li\u003e
\u003c/ul\u003e
\u003cpre\u003e\u003ccode\u003eoutput:
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
      it.printf(200, 150, id(source_sans_pro_25), TextAlign::BASELINE_CENTER, \u0026quot;%s\u0026quot;, \u0026quot;Hello World from HA!\u0026quot;);
      id(enable_epd).turn_off();// Turns off E-paper
\u003c/code\u003e\u003c/pre\u003e
\u003cul\u003e
\u003cli\u003eClick \u003ccode\u003eSave\u003c/code\u003e and then \u003ccode\u003eInstall\u003c/code\u003e and then \u003ccode\u003eWirelessly\u003c/code\u003e to install it on your Paperd.Ink.\u003c/li\u003e
\u003cli\u003eYou should now see \u003ccode\u003eHello World from HA!\u003c/code\u003e on your Paperd.Ink.\u003c/li\u003e
\u003c/ul\u003e
\u003ch2 id="further-reading"\u003eFurther Reading\u003c/h2\u003e
\u003cul\u003e
\u003cli\u003ehttps://esphome.io/components/display/index.html\u003c/li\u003e
\u003cli\u003ehttps://esphome.io/components/display/waveshare_epaper.html\u003c/li\u003e
\u003c/ul\u003e
`},{id:3,href:"https://docs.paperd.ink/docs/software/examples/",title:"4. Examples",description:"Sample codes and use-cases to get started",content:`\u003ch2 id="paperdink-arduino-library-examples"\u003ePaperdink Arduino Library Examples\u003c/h2\u003e
\u003cp\u003eTo get started with the Paperdink library follow the instructions \u003ca href="https://docs.paperd.ink/docs/software/getting-started/#paperdink-library"\u003ehere→\u003c/a\u003e .\u003c/p\u003e
\u003ch3 id="crypto-tracker"\u003eCrypto Tracker\u003c/h3\u003e
\u003cp\u003eTrack your cryptocurrency investments to see how much you\u0026rsquo;re in the red ;p\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003e\u003ca href="https://github.com/paperdink/PaperdInk-Library/tree/main/examples/Crypto_Tracker"\u003ehttps://github.com/paperdink/PaperdInk-Library/tree/main/examples/Crypto_Tracker\u003c/a\u003e\u003c/strong\u003e\u003c/p\u003e
\u003cimg src="https://github.com/paperdink/PaperdInk-Library/raw/main/examples/Crypto_Tracker/Crypto_Tracker.png" width="600" height="400"\u003e
\u003ch3 id="youtube-stats"\u003eYoutube Stats\u003c/h3\u003e
\u003cp\u003eShow off your youtube views and subscribers count\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003e\u003ca href="https://github.com/paperdink/PaperdInk-Library/tree/main/examples/Youtube_Stats"\u003ehttps://github.com/paperdink/PaperdInk-Library/tree/main/examples/Youtube_Stats\u003c/a\u003e\u003c/strong\u003e\u003c/p\u003e
\u003cimg src="https://github.com/paperdink/PaperdInk-Library/raw/main/examples/Youtube_Stats/Youtube_Stats.png" width="600" height="400"\u003e
\u003ch3 id="wave"\u003eWave\u003c/h3\u003e
\u003cp\u003eA clean dashboard with weather, date and day, up to 11 to-do items. Syncs to-do list with Todoist or Taiga.\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003e\u003ca href="https://github.com/paperdink/PaperdInk-Library/tree/main/examples/Wave"\u003ehttps://github.com/paperdink/PaperdInk-Library/tree/main/examples/Wave\u003c/a\u003e\u003c/strong\u003e\u003c/p\u003e
\u003cimg src="https://github.com/paperdink/PaperdInk-Library/raw/main/examples/Wave/Wave.png" width="600" height="400"\u003e
\u003ch3 id="calther"\u003eCalther\u003c/h3\u003e
\u003cp\u003eDisplay calendar, date, weather and to-do list synced with Todoist or Taiga.\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003e\u003ca href="https://github.com/paperdink/PaperdInk-Library/tree/main/examples/Calther"\u003ehttps://github.com/paperdink/PaperdInk-Library/tree/main/examples/Calther\u003c/a\u003e\u003c/strong\u003e\u003c/p\u003e
\u003cimg src="https://github.com/paperdink/PaperdInk-Library/raw/main/examples/Calther/Calther.png" width="600" height="400"\u003e
\u003ch3 id="quotes"\u003eQuotes\u003c/h3\u003e
\u003cp\u003eGet inspired and reading random quotes from \u003ca href="https://github.com/lukePeavey/quotable"\u003eapi.quotable.io\u003c/a\u003e\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003e\u003ca href="https://github.com/paperdink/PaperdInk-Library/tree/main/examples/Quotes"\u003ehttps://github.com/paperdink/PaperdInk-Library/tree/main/examples/Quotes\u003c/a\u003e\u003c/strong\u003e\u003c/p\u003e
\u003cimg src="https://github.com/paperdink/PaperdInk-Library/raw/main/examples/Quotes/Quotes.png" width="600" height="400"\u003e
\u003ch2 id="other-examples"\u003eOther Examples\u003c/h2\u003e
\u003ch3 id="minimal"\u003eMinimal\u003c/h3\u003e
\u003cp\u003eMinimal example showing how to use GxEPD library with paperd.ink, you should see Albert Einstein.\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003e\u003ca href="https://github.com/paperdink/minimal_GxEPD"\u003ehttps://github.com/paperdink/minimal_GxEPD\u003c/a\u003e\u003c/strong\u003e\u003c/p\u003e
\u003ch3 id="hello-world"\u003eHello World\u003c/h3\u003e
\u003cp\u003eMinimal example using GxEPD2 library with paperd.ink, you should see \u0026ldquo;hello world\u0026rdquo; and some images with partial update demo.\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003e\u003ca href="https://github.com/paperdink/minimal_GxEPD2"\u003ehttps://github.com/paperdink/minimal_GxEPD2\u003c/a\u003e\u003c/strong\u003e\u003c/p\u003e
\u003ch3 id="simple-buzzer"\u003eSimple Buzzer\u003c/h3\u003e
\u003cp\u003eSimple example playing the mario theme song using the buzzer.\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003e\u003ca href="https://github.com/paperdink/simple_buzzer"\u003ehttps://github.com/paperdink/simple_buzzer\u003c/a\u003e\u003c/strong\u003e\u003c/p\u003e
\u003ch3 id="minimal-micropython"\u003eMinimal Micropython\u003c/h3\u003e
\u003cp\u003eMinimal example showing how to use micropython with paperd.ink. Note that support is currently limited.\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003e\u003ca href="https://github.com/paperdink/minimal_micropython"\u003ehttps://github.com/paperdink/minimal_micropython\u003c/a\u003e\u003c/strong\u003e\u003c/p\u003e
`},{id:4,href:"https://docs.paperd.ink/docs/software/community_contributions/",title:"5. Community Contributions",description:"Projects from the community",content:`\u003cp\u003eWe are excited to see what you build with paperd.ink. Send an email to \u003ccode\u003eprasad@paperd.ink\u003c/code\u003e with a link to your project and we will list it here.\u003c/p\u003e
`},{id:5,href:"https://docs.paperd.ink/docs/hardware/hardware/",title:"6. Hardware",description:"Hardware details for paperd.ink",content:`\u003ch2 id="block-diagram"\u003eBlock Diagram\u003c/h2\u003e
\u003cimg src="/images/paperd.ink_rev4_labels.png" width="600" height="400"\u003e
\u003ch2 id="specifications"\u003eSpecifications\u003c/h2\u003e
\u003col\u003e
\u003cli\u003e\u003cstrong\u003eESP32-WROOM-32\u003c/strong\u003e powerful module\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003eFCC/CE Certified\u003c/strong\u003e WiFi \u0026amp; Bluetooth wireless connectivity to unlock the full potential of paperd.ink\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003eTri-color \u0026amp; monochrome\u003c/strong\u003e 400x300 px e-paper displays for the 2 variants Merlot and Classic\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003e\u0026lt;20uA\u003c/strong\u003e current consumption in sleep mode means longer battery life and more freedom to create\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003eCP2104 USB-UART\u003c/strong\u003e converter onboard for easy programming and updates\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003eMicroSD Card\u003c/strong\u003e slot for convenient storage of images, files, and more\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003ePiezo Buzzer\u003c/strong\u003e provides notifications and alerts for a more interactive experience\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003e4x Tactile Buttons\u003c/strong\u003e for user input and control\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003eExtension Header\u003c/strong\u003e for easy interfacing and expansion of capabilities, enabling limitless creativity and hacking possibilities\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003e1900mAh\u003c/strong\u003e LiPo battery allows you to keep your e-paper projects running without worrying about running out of power\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003eBattery Charger\u003c/strong\u003e circuit to keep it truly wireless\u003c/li\u003e
\u003c/ol\u003e
\u003ch2 id="pin-map"\u003ePin Map\u003c/h2\u003e
\u003cimg src="/images/paperd.ink_pinout.png" width="300"\u003e
\u003cp\u003e\u0026nbsp;\u003c/p\u003e
\u003col\u003e
\u003cli\u003e\u003cstrong\u003eUART, SPI, and I2C\u003c/strong\u003e so you can easily add external sensors and modules to your paperd.ink device, making it highly extendable and customizable. This means you can create even more complex and sophisticated e-paper display projects.\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003e8 I/O pins\u003c/strong\u003e for controlling any output and receiving any input.\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003eSave power\u003c/strong\u003e with paperd.ink. The ESP_EN pin allows you to disable the ESP32 module when you need to, and the LDO_EN pin lets you disable the entire board for virtually no current consumption.\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003eHigh battery life\u003c/strong\u003e using the LDO_EN pin which lets you disable the entire board, reducing power consumption to virtually zero and allowing you to conserve battery life for your e-paper projects.\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003ePin definitions\u003c/strong\u003e header file is \u003ca href="https://github.com/paperdink/PaperdInk-Library/blob/main/src/pin_assignment.h"\u003ehere →\u003c/a\u003e.\u003c/li\u003e
\u003c/ol\u003e
\u003ch3 id="i2c-pins"\u003eI2C Pins\u003c/h3\u003e
\u003cul\u003e
\u003cli\u003eSDA: GPIO16\u003c/li\u003e
\u003cli\u003eSCL: GPIO17\u003c/li\u003e
\u003c/ul\u003e
\u003ch3 id="spi-pins"\u003eSPI Pins\u003c/h3\u003e
\u003cul\u003e
\u003cli\u003eSCK: GPIO18\u003c/li\u003e
\u003cli\u003eMOSI: GPIO23\u003c/li\u003e
\u003cli\u003eMISO: GPIO19\u003c/li\u003e
\u003c/ul\u003e
\u003ch3 id="sd-card-pins"\u003eSD Card Pins\u003c/h3\u003e
\u003cul\u003e
\u003cli\u003eSD CS: GPIO21\u003c/li\u003e
\u003cli\u003eSD enable: GPIO5\u003c/li\u003e
\u003c/ul\u003e
\u003ch3 id="e-paper-display-pins"\u003eE-paper Display Pins\u003c/h3\u003e
\u003cul\u003e
\u003cli\u003eEPD CS: GPIO22\u003c/li\u003e
\u003cli\u003eEPD DC: GPIO15\u003c/li\u003e
\u003cli\u003eEPD BUSY: GPIO34\u003c/li\u003e
\u003cli\u003eEPD RESET: GPIO13\u003c/li\u003e
\u003cli\u003eEPD Enable: GPIO12\u003c/li\u003e
\u003c/ul\u003e
\u003ch3 id="pcf8574-pins"\u003ePCF8574 Pins\u003c/h3\u003e
\u003cul\u003e
\u003cli\u003ePCF INT: GPIO35\u003c/li\u003e
\u003cli\u003eSD Chip Detect (low = SD card present): P4\u003c/li\u003e
\u003cli\u003eEXT GPIO1: P5\u003c/li\u003e
\u003cli\u003eEXT GPIO2: P6\u003c/li\u003e
\u003cli\u003eEXT GPIO3: P7\u003c/li\u003e
\u003cli\u003ePCF I2C ADDR (Rev 3): 0x20\u003c/li\u003e
\u003cli\u003ePCF I2C ADDR (Rev 4): 0x38\u003c/li\u003e
\u003c/ul\u003e
\u003ch3 id="lipo"\u003eLiPo\u003c/h3\u003e
\u003cul\u003e
\u003cli\u003eCharging indicator (low = charging): GPIO36\u003c/li\u003e
\u003cli\u003eBattery Enable: GPIO25\u003c/li\u003e
\u003cli\u003eBattery Voltage: GPIO39\u003c/li\u003e
\u003cli\u003eBattery Voltage ADC: ADC1_CHANNEL_3\u003c/li\u003e
\u003c/ul\u003e
\u003ch3 id="buzzer"\u003eBuzzer\u003c/h3\u003e
\u003cul\u003e
\u003cli\u003ePiezo: GPIO26\u003c/li\u003e
\u003c/ul\u003e
\u003ch3 id="buttons"\u003eButtons\u003c/h3\u003e
\u003cp\u003eFrom top to bottom:\u003c/p\u003e
\u003cul\u003e
\u003cli\u003eButton 1: GPIO14\u003c/li\u003e
\u003cli\u003eButton 2: GPIO27\u003c/li\u003e
\u003cli\u003eButton 3: GPIO4\u003c/li\u003e
\u003cli\u003eButton 4: GPIO2\u003c/li\u003e
\u003c/ul\u003e
\u003ch2 id="components-interfacing"\u003eComponents Interfacing\u003c/h2\u003e
\u003cp\u003ePaperd.ink is designed to be power efficient. Thus, the electronic paper display (EPD), SD card, and battery sense circuits are powered by a MOSFET that can be turned off when not in use. All enable pins are active low, meaning they must be set to low to turn on the circuitry.\u003c/p\u003e
\u003cp\u003eFor example, to use the EPD, set EPD enable pin (GPIO 12) to low to provide power to the EPD and perform necessary display functions. Once display is updated set the EPD enable pin (GPIO 12) to high to reduce power consumption.\u003c/p\u003e
\u003ch2 id="battery-specifications--charging"\u003eBattery Specifications \u0026amp; Charging\u003c/h2\u003e
\u003cp\u003epaperd.ink Classic and paperd.ink Merlot come equipped with a 3.7V (nominal) 1900 mAh LiPo battery, which offers extended battery life for your e-paper projects.\u003c/p\u003e
\u003cp\u003epaperd.ink devices have an inbuilt LiPo charger so the battery can be charged using a 4.2V charging voltage. Simply connect a type-C cable to charge the battery, and the red LED will light up to indicate that charging is in progress. Once charging is complete, the LED will switch off.\u003c/p\u003e
\u003ch2 id="design-files"\u003eDesign Files\u003c/h2\u003e
\u003cp\u003e\u003ca href="https://github.com/paperdink/paperd.ink_hw"\u003eGitHub →\u003c/a\u003e\u003c/p\u003e
\u003ch2 id="dimensions"\u003eDimensions\u003c/h2\u003e
\u003col\u003e
\u003cli\u003eThe PCB is 92.1 x 78.1 mm\u003c/li\u003e
\u003cli\u003eThe enclosure is 98 x 82 x 16 mm\u003c/li\u003e
\u003c/ol\u003e
`},{id:6,href:"https://docs.paperd.ink/docs/hardware/comparison/",title:"7. Classic Vs Merlot",description:"Comparison betweeen paperd.ink Classic and Merlot models",content:`\u003ch2 id="classic-vs-merlot"\u003eClassic Vs Merlot\u003c/h2\u003e
\u003ctable\u003e
\u003cthead\u003e
\u003ctr\u003e
\u003cth\u003eFeature\u003c/th\u003e
\u003cth\u003eClassic\u003c/th\u003e
\u003cth\u003eMerlot\u003c/th\u003e
\u003c/tr\u003e
\u003c/thead\u003e
\u003ctbody\u003e
\u003ctr\u003e
\u003ctd\u003eColors\u003c/td\u003e
\u003ctd\u003e4 level grayscale\u003c/td\u003e
\u003ctd\u003eBlack, White and Red\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eDisplay resolution\u003c/td\u003e
\u003ctd\u003e400x300 px\u003c/td\u003e
\u003ctd\u003e400x300 px\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eScreen size\u003c/td\u003e
\u003ctd\u003e4.2 inch\u003c/td\u003e
\u003ctd\u003e4.2 inch\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eFull update time\u003c/td\u003e
\u003ctd\u003e~ 1 sec\u003c/td\u003e
\u003ctd\u003e~ 17 sec\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003ePartial update time\u003c/td\u003e
\u003ctd\u003e~ 0.5 sec (Fast partial update)\u003c/td\u003e
\u003ctd\u003e~ 17 sec (Slow partial update)\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eI/O expander address\u003c/td\u003e
\u003ctd\u003e0x38\u003c/td\u003e
\u003ctd\u003e0x38\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eDeep sleep current  (Timer Wakeup)\u003c/td\u003e
\u003ctd\u003e16uA\u003c/td\u003e
\u003ctd\u003e17uA\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eDeep sleep current (Button Wakeup)\u003c/td\u003e
\u003ctd\u003e1.4mA\u003c/td\u003e
\u003ctd\u003e1.4mA\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eBattery capacity\u003c/td\u003e
\u003ctd\u003e1900mAh\u003c/td\u003e
\u003ctd\u003e1900mAh\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eEnclosure color\u003c/td\u003e
\u003ctd\u003eBlack + White\u003c/td\u003e
\u003ctd\u003eWhite + Red\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eSD card tray\u003c/td\u003e
\u003ctd\u003eYes\u003c/td\u003e
\u003ctd\u003eYes\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eType-C Charging/Programming port\u003c/td\u003e
\u003ctd\u003eYes\u003c/td\u003e
\u003ctd\u003eYes\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eIdeal Use Cases\u003c/td\u003e
\u003ctd\u003eCalendar, To-Dos, Tracking, etc.\u003c/td\u003e
\u003ctd\u003eArt display, Quotes generator, etc.\u003c/td\u003e
\u003c/tr\u003e
\u003c/tbody\u003e
\u003c/table\u003e
`},{id:7,href:"https://docs.paperd.ink/docs/hardware/assembly/",title:"8. Assembly",description:"3D models of paperd.ink",content:`\u003ch2 id="how-to-assemble-paperdink"\u003eHow to assemble paperd.ink\u003c/h2\u003e
\u003cimg src="/images/paperd_ink_merlot_assembly.gif" width="375" height="300"\u003e
\u003ch2 id="enclosure-files"\u003eEnclosure files\u003c/h2\u003e
\u003cp\u003e\u003ca href="https://github.com/paperdink/paperd.ink_enclosure"\u003eGithub →\u003c/a\u003e\u003c/p\u003e
`},{id:8,href:"https://docs.paperd.ink/docs/",title:"Docs",description:"paperd.ink docs",content:""}];e.add(n),userinput.addEventListener("input",s,!0),suggestions.addEventListener("click",o,!0);function s(){var n,i=this.value,s=e.search(i,5),o=suggestions.childNodes,r=0,c=s.length;for(suggestions.classList.remove("d-none"),s.forEach(function(e){n=document.createElement("div"),n.innerHTML="<a href><span></span><span></span></a>",a=n.querySelector("a"),t=n.querySelector("span:first-child"),d=n.querySelector("span:nth-child(2)"),a.href=e.href,t.textContent=e.title,d.textContent=e.description,suggestions.appendChild(n)});o.length>c;)suggestions.removeChild(o[r])}function o(){for(;suggestions.lastChild;)suggestions.removeChild(suggestions.lastChild);return!1}})(),function(){"use strict";var e=function(){$(".owl-carousel1").owlCarousel({loop:!0,center:!0,margin:0,responsiveClass:!0,nav:!1,responsive:{0:{items:1,nav:!1},680:{items:2,nav:!1,loop:!1},1000:{items:3,nav:!0}}})};(function(){e()})(jQuery)}()