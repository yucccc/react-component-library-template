var a=Object.defineProperty;var n=(t,s)=>a(t,"name",{value:s,configurable:!0});import{j as r}from"./jsx-runtime.d8e6d4c8.js";import"./iframe.4f4c3038.js";const o=n(t=>r("button",{className:"y-button",children:t.label}),"Button");try{o.displayName="Button",o.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:o.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch{}const d={parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

export default {
	title: '\u901A\u7528/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

  

export const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = {
	label: 'Button',
};

export const Secondary = Template.bind({});

Secondary.args = {
	label: 'Button 2',
};`,locationsMap:{primary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},secondary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}}}}},title:"\u901A\u7528/Button",component:o,argTypes:{backgroundColor:{control:"color"}}},e=n(t=>r(o,{...t}),"Template"),c=e.bind({});c.args={label:"Button"};const l=e.bind({});l.args={label:"Button 2"};const m=["Primary","Secondary"];export{c as Primary,l as Secondary,m as __namedExportsOrder,d as default};
//# sourceMappingURL=Button.stories.74c4bb29.js.map
