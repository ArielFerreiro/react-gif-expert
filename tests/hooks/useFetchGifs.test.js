import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Test in the useFetchGifs Hook', () => {

    test('Must return the initial state ', () => {
      
        const { result } = renderHook( () => useFetchGifs('One Punch'));

        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect(isLoading).toBeTruthy();


    });

    test('Must return an array of images and isloading in false ', async () => {
      
        const { result } = renderHook( () => useFetchGifs('One Punch'));
        await waitFor( () => expect( result.current.images.length ).toBeGreaterThan(0) );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    });
  
});
