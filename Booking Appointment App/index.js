async function handleFormSubmit(event){
    event.preventDefault();
    const userObject = {
        name:event.target.name.value,
        phone:event.target.phone.value,
        email:event.target.email.value
    };
    try{
        const response = await axios.post('http://localhost:4000/user',userObject);
        display(response.data);
        
        event.target.name.value="";
        event.target.email.value="";
        event.target.phone.value="";

    }catch(error){
        console.log("ERROR: ",error);
    }
}

window.addEventListener('DOMContentLoaded', async() => {
    try{
        const response = await axios.get('http://localhost:4000/user')
        response.data.forEach(user => {
            display(user);
        });
    } catch(error){
        console.log(error);
    }
});

function display(user){
    const ul=document.querySelector('ul');
    const li = document.createElement('li');

    li.innerHTML = `${user.name} - ${user.email} - ${user.phone}`;

    const input = document.createElement('input');
    input.type = 'hidden';
    input.name='id';
    input.value=user.id;

    const deleteBtn = document.createElement('button');
    const editBtn = document.createElement('button');
    deleteBtn.textContent= 'DELETE';
    editBtn.textContent= 'EDIT';

    deleteBtn.addEventListener('click', async () => {
       try{
           const id= li.querySelector('input[name="id"]').value;
           await axios.delete(`http://localhost:4000/user/${id}`);
           ul.removeChild(li);
       }catch (error){
           console.log(error)
       }
    });

    editBtn.addEventListener('click', async () => {
        try{
            document.getElementById('name').value=user.name;
            document.getElementById('email').value=user.email;
            document.getElementById('phone').value=user.phone;

            const id=user.querySelector('input[name="id"]').value;
            await axios.delete(`http://localhost:4000/user/${id}`);

            ul.removeChild(li);
        } catch (error){
            console.log(error);
        }
    });

    ul.appendChild(input);
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    ul.appendChild(li);
        
}

const form = document.querySelector('form');
form.addEventListener('submit',handleFormSubmit)
