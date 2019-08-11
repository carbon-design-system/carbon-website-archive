# SwatchPaletteWidget

## Options

* **palettes (required)**

  palettes is array of colors to be controlled by ContentSwitcher e.g. ['red','magenta','purple', ...]

  NOTE: importing a component and passing props to it into an mdx file only allows passing of a string. 
  Therefore, it is necessary to build an intermediery component to parse the string 

  Example mdx file: using pipes to delineate each array, and commas 
  to delineate each element inside each array (use no spaces other than within the color names)

  ```html
  <Widget palettes='red,magenta,purple|cool gray,gray,warm gray' />
  ```

  Example component

  ```javascript
  const SwatchPaletteWidget = ({top, palettes}) => {
    const parsedArray = []
    const pArray = palettes.split('|') 
    pArray.map (p => {
      parsedArray.push(p.split(','))
    })

    return (
      <Widget
          top={top}
          palettes={parsedArray}
        />
    )
  }
  ```

  * **add '-bw' to color name to get black and white bars appearing at top and bottom of color palette**
  

* **top**

  value fixes top of sticky switcher buttons to allow for navbar height etc (only required if not zero)