export function saveProfile(userData) {
    let BaseURL = "http://lefufoo.com/lefufooold/api/profile";
    showdetails();
    
    async function showdetails(){
        let user = await fetch(BaseURL, {

        });
        let data = await user.json();
        console.log(data);
        return data;
    }    
}