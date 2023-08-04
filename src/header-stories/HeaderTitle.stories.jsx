import React from "react";
import  HeaderTitle  from './HeaderTitle';

export default {
    title: 'HeaderTitle',
    component: HeaderTitle,
    argTypes: {
        size: { control: 'text' },
      },
};

const Template = args => <HeaderTitle {...args}></HeaderTitle>

export const Small = Template.bind({})
Small.args = {
    size: 'small',
    title: '6 orders'
}
export const Medium = Template.bind({})
Medium.args = {
    size: 'medium',
    title: '6 orders'
}
export const Large = Template.bind({})
Large.args = {
    size: 'large',
    title: '6 orders'
}