// src/components/UserProfilePhoto.jsx
import React, { useState } from "react";
import { storage } from "../../../Firebase/FirebaseConfi";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Swal from "sweetalert2";

const UserProfilePhoto = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  // Manejar la selección de imagen
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // Subir la imagen a Firebase
  const handleUpload = async () => {
    if (!image) {
      Swal.fire("Error", "Por favor, selecciona una imagen", "error");
      return;
    }

    try {
      const imageRef = ref(storage, `profileImages/${image.name}`);
      await uploadBytes(imageRef, image);
      const url = await getDownloadURL(imageRef);
      setImageUrl(url);
      Swal.fire("¡Éxito!", "Imagen subida correctamente", "success");
    } catch (error) {
      console.error("Error al subir imagen:", error);
      Swal.fire("Error", "Hubo un problema al subir la imagen", "error");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Sube tu foto de perfil</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button className="btn btn-primary mt-2" onClick={handleUpload}>
        Subir Imagen
      </button>

      {imageUrl && (
        <div className="mt-4">
          <h4>Vista previa:</h4>
          <img src={imageUrl} alt="Foto de perfil" className="img-fluid" />
        </div>
      )}
    </div>
  );
};

export default UserProfilePhoto;
