import React from "react";

function Form() {

  const handleSubmit=(event)=>{//normalde buttona basildiginda function calisir burada submit edildiginde function calistiriyoruz
    event.preventDefault();//sayfayi refres etmemesi icin kaldigi yerden devam etmesi icin
    //submit default olarak sayfa yenilenir ve bilgiler gider
    createPerson(event);
  }
  const createPerson= async (event)=>{
    
      let response = await fetch("http://174.138.103.233/api/employees", {//veri tabani adresini buraya girmemiz gerek
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'//yazilmasi gereken birse onemli degil
          },
          body: await JSON.stringify({//backende gonderilecek bilgileri body ile gonderiyoruz
            firstName: event.target.firstName.value,
            lastName:event.target.lastName.value,
            genderMale: event.target.male.value,
            genderFemale: event.target.female.value,
            birthday: event.target.birthday.value,
            email: event.target.email.value,
            password: event.target.password.value,
            about:event.target.about.value
              
          })
      });

      console.log(response)
      let data = await response.json()
      console.log(data)
     
      return data;//fetch ile data backende gonderiyoruz
  }
  
return (
    <div className="rightPart">
        <form className="form" onSubmit={handleSubmit}>
        <fieldset className="fieldset">
            <legend>FORM:</legend>
                <label for="firstName"> First Name </label>
                <input name="firstName"type="text" required></input> 
                <br></br>
                <label for="lastName"> Last Name </label>
                <input name="lastName" type="text" required></input> 
                <br></br>
                <label for="male"> Male <input type="radio" name="male" value="male"></input></label>
                <label for="female"> Female <input type="radio" name="female" value="female"></input></label>
                <label for="birthday"> Birtday </label>
                <input type="date" name="birthday"></input>
                <br></br>
                <label for="email"> Email </label>
                <input type="email" name="email"></input>
                <br></br>
                <label for="password"> Password </label>
                <input type="password" name="password" ></input>
                <br></br>
                <label for="about"> About </label>
                <input name="about" type="text" ></input>
        </fieldset>
                <button type="submit">Submit</button>
     </form>
     </div>
  )
};
  

export default Form;