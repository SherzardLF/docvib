// 'YOUR_TOKEN_HERE'
const token = ;
// 'YOUR_USERNAME_HERE'
const repoOwner = ;
// 'YOUR_SITES_NAME_HERE'
const repoName = 'DocVibez'

const github = {
    uploadVideo: async (videoFile) => {
        const formData = new FormData();
        formData.append('file',videoFile);
        const response = await fetch('(link unavailable),{method:'PUT', headers: {Authorization:'Bearer ${token}', 'Content-Type': 'application/octet-stream'}, body: formData});
            
        const data = await response.json();
        return data.contentz_url;
    } 
};
