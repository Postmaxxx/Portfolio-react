import { FC, SVGProps } from "react";

type EmptyVoid = () => void

export type TTheme = "dark" | "light"

type Cloud = {
    width: number
    gap: number
    top: number
    speed: number
    opacity: number
}

interface IStar {
    x: number
    y: number
    size: number
    blinkDuration:  number
}

export interface IThemeSwitcherProps {
    themeSwitcher: string
    star: FC<SVGProps<SVGSVGElement>>
    cloud: FC<SVGProps<SVGSVGElement>>
    width: number
    height: number
    circleSize: number
    duration: number
    theme: string,
    numberOfStars: number
    nodeForTheme: HTMLElement
    saveState: string
    starsBlinkingDuration?: number[]
    clouds?: Cloud[]
    starsBlinkingAnimation?: string
}




interface IThemeState extends IThemeSwitcherProps {
    _themeSwitcher: HTMLElement
    starsBlinkingDuration: number[]
    clouds: Cloud[]
    starsBlinkingAnimation: string
    isChanging: boolean,
    _contentSwitcher: HTMLElement
}

/*
interface IThemeStateDefault {
    width: number
    height: number
    circleSize: number
    duration: number
    theme: TTheme
    numberOfStars: number
    nodeForTheme: HTMLElement
    saveState: string
    starsBlinkingDuration: number[]
    starsBlinkingAnimation: string
    clouds: Cloud[]
}
*/
let theme_state__default = {} as IThemeState;

theme_state__default = {
	...theme_state__default,
	width: 70,
	height: 40,
	circleSize: 14,
	duration: 2000,
	theme: "light",
	numberOfStars: 30,
	nodeForTheme: document.querySelector("body"),
	saveState: "",
	starsBlinkingDuration: [0.9, 1.2, 1.4, 1.6, 1.8, 2.1], //default durations
	starsBlinkingAnimation: `
        0% { opacity: .2 }
        50% { opacity: .8 }
        100% { opacity: .2 }`,
	clouds: [ //default styles for clouds
		{
			width: 30, //px
			gap: 15, //px
			top: 0, //in percent of height
			speed: 7, //sec for 1 cycle, less -> faster
			opacity: 1, //transparent for line
		},
		{
			width: 25,
			gap: 20,
			top: 25,
			speed: 4,
			opacity: 0.85,
		},
		{
			width: 20,
			gap: 20,
			top: 40,
			speed: 5,
			opacity: 0.7,
		},
	]
};


let theme_state = {} as IThemeState;

theme_state = {
	...theme_state,
	width: theme_state__default.width,
	height: theme_state__default.height,
	circleSize: theme_state__default.circleSize,
	duration: theme_state__default.duration,
	theme: theme_state__default.theme,
	numberOfStars: theme_state__default.numberOfStars,
	starsBlinkingDuration: theme_state__default.starsBlinkingDuration, //default durations
	clouds: theme_state__default.clouds,
	starsBlinkingAnimation: theme_state__default.starsBlinkingAnimation,
	isChanging: false,
	nodeForTheme: theme_state__default.nodeForTheme,
	saveState: theme_state__default.saveState,
};
 

const classSwitcher = (classRemove: string, classAdd: string, delay: number): Promise<void> => { //class +/- for _contentSwitcher using delay
	return new Promise((res, rej) => {
		setTimeout((): void => {
			classRemove ? theme_state._contentSwitcher.classList.remove(classRemove) : void 0;
			classAdd ? theme_state._contentSwitcher.classList.add(classAdd) : void 0;
			res();
		}, delay);
	});
};

  
const changeTheme: EmptyVoid = () => { //main switcher
	if (theme_state.isChanging) { return; }
	theme_state.saveState && localStorage.setItem(theme_state.saveState, theme_state.theme);
	theme_state.isChanging = true;
	if (theme_state.theme === "light") {
		//console.log('In light');
		theme_state.nodeForTheme.classList.remove("dark");
		classSwitcher("", "theme_light_1", 0)
			.then(() => classSwitcher("theme_light_1", "theme_light_2", theme_state.duration / 4))
			.then(() => {classSwitcher("theme_light_2", "theme_light", 30); theme_state.isChanging = false;});
	} else {
		//console.log('In dark');
		theme_state.nodeForTheme.classList.add("dark");
		classSwitcher("theme_light", "theme_light_back_1", 0)
			.then(() => classSwitcher("theme_light_back_1", "theme_light_back_2", theme_state.duration / 4))
			.then(() => {classSwitcher("theme_light_back_2", "", 30); theme_state.isChanging = false;});
	}
};


const createThemeSwitcherStyles:EmptyVoid = () => {
	const circlePosition: number = theme_state.width / 2 - theme_state.circleSize; //circles must contact each other

	const styleEl: HTMLStyleElement = document.createElement("style");
	document.head.appendChild(styleEl);
	const styleThemeSwitcher: CSSStyleSheet = styleEl.sheet;

	styleThemeSwitcher.insertRule(`
        ${theme_state.themeSwitcher} > .content-switcher {
            width: ${theme_state.width}px;
            height: ${theme_state.height}px;
            border-radius: ${theme_state.height / 2}px;
            position: relative;
            overflow: hidden;
            cursor: pointer;
        }`);

	styleThemeSwitcher.insertRule(`
        ${theme_state.themeSwitcher} > .content-switcher > div {
            position: absolute;
            height: 100%;
            width: 100%;
        }`);

	styleThemeSwitcher.insertRule(`
        ${theme_state.themeSwitcher} > .content-switcher > div.light {
            background-color: rgb(100 181 245);
            clip-path: circle(${theme_state.circleSize}px at ${circlePosition}px 50%);
            transition: ${theme_state.duration/4}ms cubic-bezier(0,1,0,1);
        }`);

	styleThemeSwitcher.insertRule(`
        ${theme_state.themeSwitcher} > .content-switcher > div.dark {
            transition: ${theme_state.duration/4}ms cubic-bezier(0,1,0,1);
            background-color: #002E6E;
        }`);


	//theme light_1
	styleThemeSwitcher.insertRule(`
        ${theme_state.themeSwitcher} > .content-switcher.theme_light_1 .light {
            transition: ${theme_state.duration/4}ms cubic-bezier(1,0,1,0);
            clip-path: circle(${theme_state.width*10}px at ${circlePosition - theme_state.width * 10 + theme_state.circleSize}px 50%);
        }`);
       

	//theme light_2
	styleThemeSwitcher.insertRule(`
        ${theme_state.themeSwitcher} > .content-switcher.theme_light_2 .light {
            transition: ${theme_state.duration/4}ms cubic-bezier(1,0,1,0);
            clip-path: circle(${theme_state.width*10}px at ${circlePosition - theme_state.width * 10 + theme_state.circleSize}px 50%);
        }`);
	styleThemeSwitcher.insertRule(`
        ${theme_state.themeSwitcher} > .content-switcher.theme_light_2 .dark {
            transition: ${theme_state.duration/4}ms cubic-bezier(1,0,1,0);
            clip-path: circle(${theme_state.width*10}px at ${circlePosition + theme_state.width * 10 + theme_state.circleSize}px 50%);
        }`);

    
	//theme light
	styleThemeSwitcher.insertRule(`
        ${theme_state.themeSwitcher} > .content-switcher.theme_light .light {
            transition: ${theme_state.duration/4}ms cubic-bezier(0,1,0,1);
            z-index: 900;
            clip-path: circle(${theme_state.width*10}px at ${theme_state.circleSize - theme_state.width * 9}px 50%);
        }`);
	styleThemeSwitcher.insertRule(`
        ${theme_state.themeSwitcher} > .content-switcher.theme_light .dark {
            transition: ${theme_state.duration/4}ms cubic-bezier(0,1,0,1);
            z-index: 1000;
            clip-path: circle(${theme_state.circleSize}px at ${circlePosition + theme_state.circleSize * 2}px 50%);
        }`);


	//theme light_back_1
	styleThemeSwitcher.insertRule(`
        ${theme_state.themeSwitcher} > .content-switcher.theme_light_back_1 .light {
            transition: 0ms;
            z-index: 900;
            clip-path: circle(${theme_state.width*10}px at ${theme_state.circleSize - theme_state.width * 9}px 50%);

        }`);
	styleThemeSwitcher.insertRule(`
        ${theme_state.themeSwitcher} > .content-switcher.theme_light_back_1 .dark {
            transition: ${theme_state.duration/4}ms cubic-bezier(1,0,1,0);
            z-index: 1000;
            clip-path: circle(${theme_state.width * 10}px at ${circlePosition + theme_state.circleSize + theme_state.width * 10}px 50%);
        }`);


	//theme light_back_2
	styleThemeSwitcher.insertRule(`
        ${theme_state.themeSwitcher} > .content-switcher.theme_light_back_2 .light {
            transition: 0ms;
            z-index: 1000;
            clip-path: circle(${theme_state.width*10}px at ${circlePosition - theme_state.width * 10 + theme_state.circleSize}px 50%);
        }`);
        
	styleThemeSwitcher.insertRule(`
        ${theme_state.themeSwitcher} > .content-switcher.theme_light_back_2 .dark {
            transition: 0ms;
            z-index: 900;
            clip-path: circle(${theme_state.width * 10}px at ${circlePosition + theme_state.circleSize + theme_state.width * 10}px 50%);
        }`);


	// themes_dark__star blinks
	theme_state.starsBlinkingDuration.forEach((duration, index) => {
		styleThemeSwitcher.insertRule(`
        ${theme_state.themeSwitcher} > .content-switcher .dark .theme_dark__star-${index} {
            animation: star-blink ${duration}s linear infinite;
        }`);
	});


	//star blinking animation
	styleThemeSwitcher.insertRule(`
        @keyframes star-blink {
            ${theme_state.starsBlinkingAnimation}
        }`);

        
	// Clouds base
	styleThemeSwitcher.insertRule(`
        ${theme_state.themeSwitcher} > .content-switcher .light > div {
            display: inline-block;
            height: auto;
            position: absolute;
            left: 0;
        }`);

	// all lines of clouds (line, cloud, animation)
	theme_state.clouds.forEach((cloud, index) => {
		styleThemeSwitcher.insertRule(`
        ${theme_state.themeSwitcher} > .content-switcher .light .clouds-${index} {
            width: ${(cloud.width * 6 + cloud.gap * 5)}px;
            top: ${cloud.top}%;
            animation: theme-clouds-${index}  linear infinite;
            animation-duration: ${cloud.speed}s;
        }`);
		styleThemeSwitcher.insertRule(`
        ${theme_state.themeSwitcher} > .content-switcher .light .clouds-${index} .cloud {
            width: ${cloud.width}px;
            margin-right: ${cloud.gap}px;
            opacity: ${cloud.opacity};
        }`); 
		styleThemeSwitcher.insertRule(`
        @keyframes theme-clouds-${index} {
            0% { transform: translateX(0); }
            100% { transform: translateX(${-(cloud.width + cloud.gap)}px); }
        }`);
	});    
};


const createThemeSwitcherHtml = (currentTheme: TTheme) => {
	document.querySelector(theme_state.themeSwitcher).innerHTML = `
        <div class="content-switcher ${currentTheme !== "dark" ? "theme_light" : ""}">
            <div class="dark"></div>
            <div class="light"></div>
        </div>`;
	theme_state._contentSwitcher = theme_state._themeSwitcher.querySelector(".content-switcher");
};


const createStars: EmptyVoid = () => {
	new Array(theme_state.numberOfStars)
		.fill("")
		.map((): IStar => {
			let size: number = Math.floor(Math.random()*20 + 1);
			size = size > 13 ? Math.floor(size / 3) : size; //to create more small stars than big
			return {
				x: Math.floor(Math.random() * theme_state.width),
				y: Math.floor(Math.random() * theme_state.height),
				size: size,
				blinkDuration:  Math.floor(Math.random() * theme_state.starsBlinkingDuration.length) //different duration of blinking
			};
		})
		.forEach((star: IStar) => {
			theme_state._themeSwitcher.querySelector(".content-switcher .dark").innerHTML += `
                <img class="theme_dark__star-${star.blinkDuration}" src="${theme_state.star}" style="position: absolute; left: ${star.x}px; top: ${star.y}px; width: ${star.size}px; aspect-ratio: 1">
            `;
		});
};


const createClouds: EmptyVoid = () => {
	const numberOfClouds: string[] = new Array(Math.ceil(theme_state.width / (theme_state.clouds[theme_state.clouds.length - 1].width + theme_state.clouds[theme_state.clouds.length - 1].gap) + 2)).fill(""); //number of clouds in a cloud-raw, depends on the cloud size and gap between clouds + some reserve
	theme_state.clouds.forEach((cloud, index: number) => {
		theme_state._themeSwitcher.querySelector(".content-switcher .light").innerHTML += `
        <div class="clouds-${index}">
            ${numberOfClouds.map((): string => {
		return `<img class="cloud" src="${theme_state.cloud}" >`;
	}).join("")}
        </div>`;
	});
};


export const createThemeSwitcher = (props: IThemeSwitcherProps): void => {
	theme_state.themeSwitcher = props.themeSwitcher;
	theme_state._themeSwitcher = document.querySelector(props.themeSwitcher);
	theme_state.star = props.star;
	theme_state.cloud = props.cloud;
	theme_state.nodeForTheme = props.nodeForTheme ? props.nodeForTheme : theme_state__default.nodeForTheme;
	theme_state.width = props.width ? props.width : theme_state__default.width;
	theme_state.height = props.height ? props.height : theme_state__default.height;
	theme_state.circleSize = props.circleSize ? props.circleSize : theme_state__default.circleSize;
	theme_state.duration = props.duration ? props.duration : theme_state__default.duration;
	theme_state.theme = props.theme ? props.theme : theme_state__default.theme;
	theme_state.numberOfStars = props.numberOfStars ? props.numberOfStars : theme_state__default.numberOfStars;
	theme_state.starsBlinkingDuration = props.starsBlinkingDuration ? props.starsBlinkingDuration : theme_state__default.starsBlinkingDuration;
	theme_state.clouds = props.clouds ? props.clouds : theme_state__default.clouds;
	theme_state.starsBlinkingAnimation = props.starsBlinkingAnimation ? props.starsBlinkingAnimation : theme_state__default.starsBlinkingAnimation;
	theme_state.saveState = props.saveState ? props.saveState : theme_state__default.saveState;
	new Promise<void>((res, rej) => {
		createThemeSwitcherHtml("light");
		createThemeSwitcherStyles();
		createStars();
		createClouds();
		res();
	})
		.then(() => {
			if (theme_state.theme == "dark") {
				changeTheme();
			}
			theme_state._themeSwitcher.addEventListener("click", () => {
				theme_state.theme = theme_state.theme === "light" ? "dark" : "light";
				changeTheme();
			});
		});
};
