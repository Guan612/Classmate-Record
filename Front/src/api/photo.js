import requrl from "./index"

//照片列表
export const getPhoto = () => {
    return requrl.get('/photo/')
}

export const getPhotoDetail = (id) => {
    return requrl.get(`/photo/detail/${id}/`)
}