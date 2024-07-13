import React, { useState } from "react";
import styles from "./style.module.css";
import profileImage from "../../assets/perfil/perfil.jpg";

function DriverProfile() {
    const [editMode, setEditMode] = useState(false);
    const [profileData, setProfileData] = useState({
        name: "Marcos do Livramento",
        email: "marcos@example.com",
        bio: "Ofereço caronas para tornar cada viagem uma oportunidade de conexão e economia compartilhada!",
        cnh: "123456789",
        carModel: "Toyota Corolla",
        carPlate: "ABC-1234"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleEditToggle = () => {
        setEditMode((prevEditMode) => !prevEditMode);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para salvar as alterações, como uma chamada para uma API
        setEditMode(false);
    };

    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileImageContainer}>
                <img src={profileImage} alt="Driver Profile" className={styles.profileImage} />
            </div>
            {editMode ? (
                <form className={styles.profileForm} onSubmit={handleSubmit}>
                    <div className={styles.profileFormGroup}>
                        <label htmlFor="name">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={profileData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.profileFormGroup}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={profileData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.profileFormGroup}>
                        <label htmlFor="bio">Biografia:</label>
                        <textarea
                            id="bio"
                            name="bio"
                            value={profileData.bio}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.profileFormGroup}>
                        <label htmlFor="cnh">CNH:</label>
                        <input
                            type="text"
                            id="cnh"
                            name="cnh"
                            value={profileData.cnh}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.profileFormGroup}>
                        <label htmlFor="carModel">Modelo do Carro:</label>
                        <input
                            type="text"
                            id="carModel"
                            name="carModel"
                            value={profileData.carModel}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.profileFormGroup}>
                        <label htmlFor="carPlate">Placa do Carro:</label>
                        <input
                            type="text"
                            id="carPlate"
                            name="carPlate"
                            value={profileData.carPlate}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className={styles.saveButton}>Salvar</button>
                    <button type="button" className={styles.cancelButton} onClick={handleEditToggle}>Cancelar</button>
                </form>
            ) : (
                <div className={styles.profileInfo}>
                    <h1 className={styles.profileName}>{profileData.name}</h1>
                    <p className={styles.profileEmail}>{profileData.email}</p>
                    <p className={styles.profileBio}>{profileData.bio}</p>
                    <p className={styles.profileDetail}><strong>CNH:</strong> {profileData.cnh}</p>
                    <p className={styles.profileDetail}><strong>Modelo do Carro:</strong> {profileData.carModel}</p>
                    <p className={styles.profileDetail}><strong>Placa do Carro:</strong> {profileData.carPlate}</p>
                    <button className={styles.editButton} onClick={handleEditToggle}>Editar Perfil</button>
                </div>
            )}
        </div>
    );
}

export default DriverProfile;
