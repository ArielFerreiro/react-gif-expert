import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Test in component <AddCategory />', () => {

    const inputValue = 'Saitama';

    test('Must change the value of the input text', () => {

        render( <AddCategory onAddCategory={() => {}} />);
        //screen.debug();
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: inputValue} } );
        expect( input.value ).toBe(inputValue);
                
    });

    test('Must call onAddCategory if input text has a value', () => {

        const onNewCategory = jest.fn();

        render( <AddCategory onAddCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form'); //usando el area label

        fireEvent.input( input, { target: { value: inputValue} } );
        fireEvent.submit( form );

        expect( input.value ).toBe(''); //Empty
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes( 1 );
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

    });

    test('Must not call onAddCategory if input text is empty', () => {

        const onNewCategory = jest.fn();

        render( <AddCategory onAddCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form'); //usando el area label

        fireEvent.submit( form );

        expect( input.value ).toBe(''); //Empty
        expect( onNewCategory ).toHaveBeenCalledTimes( 0 );
        
    });

});