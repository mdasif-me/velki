import {ServerAPI} from "../API/ServerAPI";


export const fileUpload = async (formData, setUploadURL) => {
    const uploadURL = `${ServerAPI}/upload/single-upload`;

    fetch(uploadURL, {
        method: "POST",
        body: formData,
    })
        .then((res) => res.json())
        .then((data) => {
            console.log("Data: ", data);
            if (data.status === "success") {
                console.log("Response:", data);
                setUploadURL(data.url);
            }
        });
};
