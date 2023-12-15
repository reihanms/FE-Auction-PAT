import React from 'react'
import { Footer } from './Footer'

export const UserProfile = () => {
    return (
        <>
            <div class="profile-container">
                <img src="/assets/Banner.png" alt="Profile Background" class="profile-background-image"/>
                    <div class="profile-content">
                        <h1>Profil Anda</h1>
                        <p>Deskripsi singkat mengenai Anda.</p>
                    </div>
            </div>

            <div class="card-container">
                <div class="card">
                    <img src="/assets/Alfin.jpeg" alt="Card Image" class="card-image"/>
                        <div class="card-content">
                            <table className='profile-table'>
                                <tr>
                                    <td>Followers</td>
                                    <td>...</td>
                                </tr>
                                <tr>
                                    <td>Following</td>
                                    <td>...</td>
                                </tr>
                                <tr>
                                    <td>Auction</td>
                                    <td>...</td>
                                </tr>
                            </table>
                        </div>
                </div>
            </div>

            <div className='profile-deskripsi-container'>
                <h2>tes</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit non fugiat quo commodi molestiae tempora corporis ad, aliquid eum magnam iusto maxime labore magni laborum beatae corrupti illo nisi sed?</p>
            </div>
           
            <br />
            <Footer/>
        </>
    )
}
