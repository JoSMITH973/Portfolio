// param 1 : Array => Tous les noms à calculer
// param 2 : Int => Taille maximale à ne pas dépasser
// param 3 : Int => Taille de la typographie
// param 4 : Int => Taille du margin

export const CalculateTextWidth = async (textWidth, maxSize=1200, fontSize=20, marginSize=16) => {
    let arrayLength=textWidth.length,
        pxWidth=0;

    // On récupère tous le nom des catégories

    let canvas = document.createElement("canvas");
    let context = canvas.getContext("2d");
    context.font = fontSize;

    let i = 0;
    // On retire tous les espaces des noms
    for(i=0; i < arrayLength; i++) {
        console.log('maxSize-pxWidth :', maxSize-pxWidth);
        if((maxSize-pxWidth) > 200) {
            pxWidth += marginSize*2;
            console.log('maxSize-pxWidth) > 200 :', (maxSize-pxWidth) > 200);
            console.log('textWidth['+i+'] :', textWidth[i]);
            console.log('context.measureText :', Math.ceil(context.measureText(textWidth[i]).width));
            pxWidth += Math.ceil(context.measureText(textWidth[i]).width*2);
        }
        else {
            console.log('i :', i);
            break
        };
    }
    // pxWidth=pxWidth*2;
    console.log('textWidth :', textWidth);
    console.log('pxWidth :', pxWidth);
    console.log('maxSize :', maxSize);
    // On renvoi null si on a pas besoin de modifier la taille de la barre de catégorie
    if(i==(arrayLength-1)) i = null;
    return i;
}