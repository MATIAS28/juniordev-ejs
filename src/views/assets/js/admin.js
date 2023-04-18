const token = localStorage.getItem('token')


async function newBlog(e){
    e.preventDefault()
    const url = 'http://localhost:9000/admin/create-article'

    const body = {
        title: e.target[0].value,
        name: e.target[1].value,
        content: e.target[2].value,
        resumen: e.target[4].value,
        date: e.target[5].value
    }

    try {
       const uploadBlog = await axios.post(url, body)

    } catch (e) {
        prompt('error al subir el blog')
    }
 }


 async function login(e){
    e.preventDefault()
    const url = 'http://localhost:9000/admin/login'
    const body = {
        email: e.target[0].value,
        password: e.target[1].value
    }

    try {
        const getToken = await axios.post(url, body)
        localStorage.setItem('token', getToken.token);
        window.location.replace("/create-article");
    } catch (e) {
        
    }

 }