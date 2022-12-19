import React from "react";
import { render } from "@testing-library/react";
import { Message } from "../Message";

describe('Message', () => {
    it('render passed text', () => {
        const component = render(
            <Message text='Text' author='author' />
        );

        const text = component.getByText('Text');
        expect(text).toBeDefined();
    });
});