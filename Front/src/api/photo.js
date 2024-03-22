import requrl from "./index"

//获取照片api
export const getPhoto = () => {
    return requrl.get('/photo/')
}