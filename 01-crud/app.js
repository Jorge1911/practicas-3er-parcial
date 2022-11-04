const cargarPosts=async()=>{
    let url="https://jsonplaceholder.typicode.com/posts"
    const api= await fetch(url);
    const data=await api.json();
    console.log(data);
    tabla=document.querySelector("#lista");
    data.map(item=>{
        tabla.innerHTML+=`
        <tr>
        <th scope="row">${item.id}</th>
        <td>${item.title}</td>
        <td>${item.body}</td>
        <td><button type="button" class="btn btn-secondary btn-lg"><i class="bi bi-brush-fill"></i>EDITAR</button></td>
        <td><button type="button" class="btn btn-outline-success"><i class="bi bi-eraser-fill"></i>ELIMINAR</button></td>
        </tr>`;
    })
}