import React, { useState } from "react";
import styles from "./style.module.css";
import profileImage from "../../assets/perfil/perfil.jpg";

function UserProfile() {
    const [editMode, setEditMode] = useState(false);
    const [profileData, setProfileData] = useState({
        name: "Marcos do Livramento",
        email: "marcos@example.com",
        bio: "Desenvolvedor web apaixonado por criar soluções inovadoras. Adoro aprender novas tecnologias e melhorar constantemente minhas habilidades.",
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
                <img src={profileImage} alt="User Profile" className={styles.profileImage} />
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
                    <button type="submit" className={styles.saveButton}>Salvar</button>
                    <button type="button" className={styles.cancelButton} onClick={handleEditToggle}>Cancelar</button>
                </form>
            ) : (
                <div className={styles.profileInfo}>
                    <h1 className={styles.profileName}>{profileData.name}</h1>
                    <p className={styles.profileEmail}>{profileData.email}</p>
                    <p className={styles.profileBio}>{profileData.bio}</p>
                    <button className={styles.editButton} onClick={handleEditToggle}>Editar Perfil</button>
                </div>
            )}
        </div>
    );
}

export default UserProfile;
