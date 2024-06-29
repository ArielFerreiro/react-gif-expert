import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Tests on component <GifExpertApp />', () => {
    
    test('Shows the app title', () => {
      
        render(<GifExpertApp/>);
        expect(screen.getByText('GifExpertApp')).toBeTruthy();
    });

    test('Shows a new category after adding it', () => {
      
        render(<GifExpertApp/>);
        //screen.debug();

        const input = screen.getByRole('textbox');
        const button = screen.getByRole('button'); //usando el area label

        fireEvent.input( input, { target: { value: 'He-Man'} } );
        fireEvent.click( button );

        expect(screen.getByText('He-Man')).toBeTruthy();
    });
    
});
