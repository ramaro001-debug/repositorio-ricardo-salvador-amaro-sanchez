// Referencia para los elemepntos //
const imageUrlInput = document.getElementById('imageUrlInput'); 
const addImageBtn = document.getElementById('addImageBtn');

const gallery = document.getElementById('galleryContainer');

// evento, al hacre click en el boton //

addImageBtn.addEventListener('click',() => {
  const imageUrl = imageUrlInput.value.trim();
  
  if (imageUrl){
      // Crear un nuevo cntenedor para la imagem //
      const col= document.createElement('div');
    col.classList.add('col');
    
    // crear la imagen //
    
    const img = document.createElement('img');
    img.src = imageUrl;
    img.classList.add('img-fluid', 'rounded', 'shadow-sm');
    img.alt = 'Imagen añadida';
    
    // Agregar la imagen dentro del contenedor
    col.appendChild(img);

    // Añadir el contenedor a la galería
    galleryContainer.appendChild(col);

    // Limpiar input
    imageUrlInput.value = '';
  } else {
    alert('Por favor ingresa una URL válida.');
      }
});