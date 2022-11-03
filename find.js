function find(id){

    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    contactList.forEach(function (value){
        if(value.id == id){
           document.getElementById('id').value = value.id
           document.getElementById('name').value = value.name
           document.getElementById('tgl').value = value.tanggal
           document.getElementById('desc').value = value.deskripsi
        }
    })
}