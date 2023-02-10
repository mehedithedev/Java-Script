const deleyedColorChange= (color, deley)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            document.body.style.backgroundColor= color;
            resolve()
        }, deley);
    })
}
// deleyedColorChange("red",1000)

const rainbowColorChange = async () => {
    await deleyedColorChange('green',1000)
    await deleyedColorChange('yellow', 1000)
    await deleyedColorChange('orange', 1000)
    await deleyedColorChange('violet', 1000)
    await deleyedColorChange('magenta', 1000)
    await deleyedColorChange('indigo', 1000)

    await deleyedColorChange('teal', 1000)
    await deleyedColorChange('red', 1000)
    return 'All done'

}

rainbowColorChange()

rainbowColorChange().then(()=>{
    console.log('End of the raibow color change')
})

async function printRainbow(){
    await rainbowColorChange();
    console.log("End of raibow")
}