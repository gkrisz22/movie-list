import { useEffect, useState } from 'react';
import colors from 'tailwindcss/colors';

const tailwindColors = Object.keys(colors);

tailwindColors.splice(tailwindColors.indexOf('transparent'), 1);
tailwindColors.splice(tailwindColors.indexOf('current'), 1);
tailwindColors.splice(tailwindColors.indexOf('inherit'), 1);


export const useTheme = () => {
    const [colorIndex, setColorIndex] = useState<number>(tailwindColors.indexOf('amber'));

    const changeColor = (c_index:number) => {
        setColorIndex(c_index);
        
    }

    useEffect(() => {
        console.log(tailwindColors[colorIndex]);
    }, [colorIndex]);

    return { color: tailwindColors[colorIndex], changeColor, colors: tailwindColors };
}


