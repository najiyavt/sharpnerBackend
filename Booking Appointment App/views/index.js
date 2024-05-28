async function handleFormSubmit(event){
    event.preventDefault();
    const userDetails = {
        name:event.target.name.value,
        email:event.target.email.value,
        phone:event.target.phone.value
    }
    try{
        const response = await axios.post(`http://localhost:4000/user`,userDetails)
        display(response.data);
        event.target.reset();
    }catch(error) {
        console.log(error)
    }
}

document.addEventListener("DOMContentLoaded",async() => {
    try{
        const response = await axios.get(`http://localhost:4000/expense`);
        response.data.forEach(res => display(res));
    }catch(error){
        console.log( error)
    }
})


function display(data){

    const ul=document.querySelector('ul');
    const li=document.createElement('li');
    li.textContent=` ${data.name} - ${data.email} - ${data.phone} - `;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent='DELETE';
    deleteBtn.setAttribute('data-id', data.id)

    const editBtn = document.createElement('button');
    editBtn.textContent='EDIT';
    editBtn.setAttribute('data-id', data.id)

    deleteBtn.addEventListener('click', () => {
        const id = deleteBtn.getAttribute("data-id");
        axios.delete(`http://localhost:4000/user/${id}`)
        .then(res => {
            ul.removeChild(li)
        })
        .catch((error) => {
            console.log(error)
        })
    })

    editBtn.addEventListener('click',() => {
        const id = editBtn.getAttribute("data-id");
        populateFormFields(user.id);
    });

    li.appendChild(deleteBtn)
    li.appendChild(editBtn)
    ul.appendChild(li)
}

function populateFormFields(id){
    axios.get(`http://localhost:4000/user/${id}`)
    .then(res => {
        const user = res.data;
        document.getElementById('name').value = user.name;
        document.getElementById('email').value = user.email;
        document.getElementById('phone').value = user.phone;
    })
    .catch(error => {
        console.log("Error fetching user data:", error);
    });    
}

window.addEventListener("DOMContentLoaded", getData);
