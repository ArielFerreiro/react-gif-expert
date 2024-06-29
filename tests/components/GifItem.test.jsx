import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Test in Component <GifItem />', () => {

    const title = 'Test';
    const url = 'https://www.google.com';

    test('Should match Snapshot', () => {

        const { container } = render( <GifItem title={title} url={url} />);
        expect( container ).toMatchSnapshot();
        //screen.debug();
    });

    test('Most show the image of the url and the indicated ALT', () => {

        render( <GifItem title={title} url={url} />);
        
        const { src, alt} = screen.getByRole('img');

        expect( src ).toContain(url);
        expect( alt ).toBe(title);

    });

    test('The title must be in a paragraph', () => {

        render( <GifItem title={title} url={url} />);
        expect( screen.getByText( title ) ).toBeTruthy();

    });


});