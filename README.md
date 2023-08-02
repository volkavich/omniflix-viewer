# UI Assignment - Omniflix Viewer 💻 💕
*Project bootstraped with  ` npx create-react-app ` .* 
*This README is contantly being updated.*

----

*Design and Inspiration could be found at this [Figma File](https://www.figma.com/file/BGQ2m8ejE82oDgcteoeF5m/OminFlix-NFT-viewer?type=design&node-id=0%3A1&t=vhQvsRjSgJUtnY2E-1)*

*The website is hosted and you can check it out [here](https://omniflix-viewer.vercel.app/).*

---- 

### Getting Started
```
    git clone https://github.com/volkavich/omniflix-viewer.git
    cd omniflix-viewer
    npm install
    npm start
```

---

### Screenshots
![Login Page](https://raw.githubusercontent.com/volkavich/omniflix-viewer-screenshots/main/Screenshot%202023-06-08%20191141.png)
*Login Page*

![Loading Page](https://raw.githubusercontent.com/volkavich/omniflix-viewer-screenshots/main/Screenshot%202023-06-08%20191159.png)
*Loading Page*

![Home Page](https://raw.githubusercontent.com/volkavich/omniflix-viewer-screenshots/main/Screenshot%202023-06-08%20191231.png)
*Home Page*

![Home Page showing Account details](https://raw.githubusercontent.com/volkavich/omniflix-viewer-screenshots/main/Screenshot%202023-06-08%20191302.png)
*Home Page showing Account details*

![All NFTs Page](https://raw.githubusercontent.com/volkavich/omniflix-viewer-screenshots/main/Screenshot%202023-06-08%20191328.png)
*Showing All NFTs*

![NFT Details Page](https://raw.githubusercontent.com/volkavich/omniflix-viewer-screenshots/main/Screenshot%202023-06-08%20191406.png)
*NFT Details Page*

---

### The Process
 
My process of approching this assignment could be divided into two parts:
*  Integrating Keplr
*  Building the UI

**Integraing Keplr**
* Cosmos - I started out with understanding the ecosystem of COSMOS, the Cosmos Hub, Cosmos Sdk, Tendermint etc.. nothing much but just to know what i'm getting into.
* The Offical Keplr Documentation - I started with the offical documentatiom and built this - [https://react-keplr-test.vercel.app/](https://react-keplr-test.vercel.app/) 
  * It checks if keplr is installed or not, if not installed, the user will be promted with an alert saying to install keplr extension. If installed, it automatically connects to cosmoshub.
  * I found the Keplr documentation to be limited, i wasn't able to move forward with it, so i decided to follow other documentations.
* Keplr Doc for beginners - You can find the documentation [here](https://blockwavelabs.gitbook.io/keplr-doc-for-beginner/). The documentation talks about using Cosmjs for connecting to the frontend. I have build an app that connects to keplr account and retrives the account balance by following this documentation. The app can be found here - [https://keplr-app-cosmjs.vercel.app/](https://keplr-app-cosmjs.vercel.app/).
  * Below are the screenshots of the app -

    ![Get Blance Button](https://raw.githubusercontent.com/volkavich/omniflix-viewer-screenshots/main/Screenshot%202023-06-10%20012701.png)
    
    *Get Balance Button*

    ![Balance displayed in Console](https://raw.githubusercontent.com/volkavich/omniflix-viewer-screenshots/main/Screenshot%202023-06-10%20012726.png)
    
    *Balance displayed in Console*
  * But I still wanted to find out an easy approach for connecting Keplr.

* Metamask Documentation - In the meanwhile I also wanted to know how other wallets are connected to frontend. I followed the MetaMask documentaion and built this - [https://meta-react-vite.vercel.app/](https://meta-react-vite.vercel.app/).

* **Graz** - Graz from [StrangeLove](https://strange.love/). Graz is a collection of React hooks containing everything you need to start working with the Cosmos ecosystem. I found graz to be flexible and easy enough to get started. 
  * Using graz, i made a proof of concept/inital prototype to see if everything is good to go. You can find it at here - [https://keplr-react-graz.vercel.app/](https://keplr-react-graz.vercel.app/).
  * Since Graz is built on top of Cosmjs and keplr-wallet/types, I was getting pollyfills error because of Webpack 5. The solution was to either use webpack 4 or write a custom override config to replace react-scripts with react-app-rewired.
  * I choose to proceed with custom config following this [fix](https://stackoverflow.com/questions/64557638/how-to-polyfill-node-core-modules-in-webpack-5) from StackOverFlow.
* With this preparation, I was good to go and start building the UI.

**Building the UI**
* I started with building prototypes in Figma. You can find the Figma files [here](https://www.figma.com/file/BGQ2m8ejE82oDgcteoeF5m/OminFlix-NFT-viewer?type=design&node-id=0%3A1&t=vhQvsRjSgJUtnY2E-1).
* I was looking into NeoBrutalism Design trend for some time now and I wanted to apply that into this project.
* But I also realized I have to respect the existing desings of Omniflix and take design ques from the Platform. While doing so, i observed the glassmorphic design to be prevelant and also the use of gradients. I wanted to imbibe them into my designs as well.
* So I tried to combine both neobrutalitic design and glassmorphic design.
* Fetching data form API - Though I have some knowledge of fetching data. I wanted to make sure I can do it correctly and tested it with building an app - DOGtober. You can find it here - [https://do-gtober.vercel.app/](https://do-gtober.vercel.app/).
* That's pretty much the gist of it.
* I haven't used any additional frameworks or UI libraries for building the UI - just plan CSS and HTML.


---

### More TODOs

* Responsiveness
* Connecting with OmniFlix Chain
* Implementing actual autentication in the login screen by initiating transaction just like OmniFlix Studio. 

---

### Highlights of the Project
    
* Tried to combine Neobrutalistic Design Trend with Glassmorphism Design Trend that Omniflix uses.
* Used [Graz](https://graz.strange.love/docs/) from [StrangeLove](https://strange.love/) to easily integrate Keplr to the Front-End.
* Tried to pay homeage to Omniflix's existing Design by replicating and iterating upon the Omniflix's Design language as much as possible.
* Used only Vanilla HTML and CSS with no additional frameworks or UI libraries for the Design.

---

*Made with*❤️
