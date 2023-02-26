import axios from 'axios'
async function deo() {
    try {
        let a = await axios.get('http://localhost:3000/posts');
        console.log(a.data);
    }
    catch (error) {
        console.log(error);
    }
}
deo()

