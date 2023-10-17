export const getOrientationImg = async (path) => {
    let result = "portrait";
    const img = await new Image()
    img.src =  path;
    img.onload = () => {
        result = (img.height > img.width ? "portrait" : "paysage");
    }
    return await result;
}