import React from "react";

function Profile(){
    return (
    <div >
        <header className="profile-header">
         <h2> PROFIL PAGE WITH REACT </h2>
        </header>
    <div className='container'>
        <div class="tableblok1">
            <table class="styled-table">
                <caption class="başlık">Eğitim Safahatı</caption>
                <thead>
                    <tr>
                        <th>Okul Düzeyi</th>
                        <th>Bulunduğu Yer</th>
                        <th>Mezuniyet Yılı</th>
                        <th>Diploma Notu</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>İlkokul</td>
                        <td>Bern</td>
                        <td>1985</td>
                        <td>!Pekiyi!</td>
                    </tr>
                    <tr>
                        <td>Ortaokul </td>
                        <td>Luzern</td>
                        <td>1988</td>
                        <td>88</td>
                    </tr>
                    <tr>
                        <td>Lise</td>
                        <td>Geneva</td>
                        <td>1992</td>
                        <td>92</td>
                    </tr>
                    <tr>
                        <td>Üniversite</td>
                        <td>Basel</td>
                        <td>1996</td>
                        <td>95</td>
                    </tr>
                </tbody>
            </table>
        </div>
    
            <div class="tableblok2">
            <table class="styled-table">
                <caption class="başlık">Çalışma Safahatı</caption>
                <thead>
                    <tr>
                        <th>Periyot</th>
                        <th>Sektör</th>
                        <th>Firma</th>
                        <th>Şehir</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1996-2000</td>
                        <td>Modem İmalatı</td>
                        <td>Zyxel</td>
                        <td>Budapeşte</td>
                    </tr>
                    <tr>
                        <td>2000-2008 </td>
                        <td>Network Kurulum</td>
                        <td>Cisco</td>
                        <td>San Fransisco</td>
                    </tr>
                    <tr>
                        <td>2010-2017</td>
                        <td>Web Tasarım<menu type="context"></menu></td>
                        <td>Homemade</td>
                        <td>Zürih</td>
                    </tr>
                    <tr>
                        <td>2017-!!</td>
                        <td>Frontend Engineering</td>
                        <td>Great Labs</td>
                        <td>Berlin</td>
                    </tr>
                </tbody>
            </table>
        </div>
    
        <div class="tableblok3">
            <table class="tablo3">
                <caption class="başlık">Arkadaşlar</caption>
                <thead>
                  <tr>
                    <th scope="col">İsim</th>
                    <th scope="col">Yaş</th>
                    <th scope="col">Meslek</th>
                    <th scope="col">Yaşadığı Şehir</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cüneyt Arkın</td>
                    <td>42</td>
                    <td>Marangoz</td>
                    <td>İSTANBUL</td>
                  </tr>
                  <tr>
                    <td>Tarık Akan</td>
                    <td>39</td>
                    <td>Kasap</td>
                    <td>ANKARA</td>
                  </tr>
                  <tr>
                    <td>Kadir İnanır</td>
                    <td>45</td>
                    <td>Terzi</td>
                    <td>İZMİR</td>
                  </tr>
                  <tr>
                    <td>Kayahan</td>
                    <td>35</td>
                    <td>Şarkıcı</td>
                    <td>ANTALYA</td>
                  </tr>
                </tbody>
            </table>
        </div>
        <div class="tableblok4">
            <table class="tablo3">
                <caption class="başlık">Hobilerim</caption>
                <thead>
                  <tr>
                    <th scope="col">Hobi</th>
                    <th scope="col">Nerede</th>
                    <th scope="col">Zaman</th>
                    <th scope="col">Ücreti</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td >Tenis</td>
                    <td>Luzern</td>
                    <td>Çarşamba</td>
                    <td>150 fr</td>
                  </tr>
                  <tr>
                    <td >Futbol</td>
                    <td>Chiasso</td>
                    <td>Cuma</td>
                    <td>20 fr</td>
                  </tr>
                  <tr>
                    <td >Kayak</td>
                    <td>Lugano</td>
                    <td>Yılda 15 gün</td>
                    <td>250 fr</td>
                  </tr>
                  <tr>
                    <td >Bisiklet</td>
                    <td>Glaubenberg</td>
                    <td>İki Haftada Bir</td>
                    <td>15 fr</td>
                  </tr>
                </tbody>
            </table>
        </div>
    </div>

    </div>
   );
}


export default Profile;







