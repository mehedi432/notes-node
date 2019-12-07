export async function getProfile() {
    const BaseUrl = "http://lefufoo.com/lefufooold/api/profile";
    const Token = ""
    const response = await fetch(BaseUrl);
    const myJson = await response.json();
    console.log(JSON.stringify(myJson));    
}