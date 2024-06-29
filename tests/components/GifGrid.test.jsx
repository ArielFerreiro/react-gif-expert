import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');


describe('Test in component <GifGrid />', () => {

    const category = 'One Punch';

    test('Must show loading while fetching gifs', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render( <GifGrid category={ category }/>);
        //screen.debug();
        expect(screen.getAllByText('Cargando ...')).toBeTruthy();
        expect(screen.getAllByText(category)).toBeTruthy();

    });

    test('Must show items when gifs are loaded', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: 'DEF',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render( <GifGrid category={ category }/>);
        expect(screen.getAllByRole('img').length ).toBe(2);

    });

});